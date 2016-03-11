simulation.service('GiftService', [
    'StatService',
    'ChampionInfo',
    function(StatService, ChampionInfo) {
        'use strict';

        console.log('### GIFT SERVICE');

        return {
            skinHistory: [], // Contains skins history
            currentMode: 'normal', // Current gift mode
            legendaryPromo: false,
            currentAnimation: 'normal', // Current animation mode
            skinList: {
                normal: ChampionInfo.slice(0), // Skin list for normal mode
                chest: [], // Skin list for chest mode
                normalLegendary: [], // Skin list for normal legendary promo
                chestLegendary: [] // Skin list for chest legendary promo
            },
            champArray: {}, // Contains list of skins for each champion
            price: {
                normal: 490, // RP Price to open mystery gift
                chest: 790 // RP Price to open mystery chest
            },
            skinImage: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_.jpg',

            openSkin: function(mode) { // Invoked on gift open
                var skins = this.retrieveList(mode);
                var skinResult = skins[Math.floor(Math.random() * skins.length)];
                this.removeSkin(skinResult);
                this.updateData(skinResult, mode);
            },
            // Invoked each time a gift is opened to remove the skin to prevent it being opened again
            removeSkin: function(skinResult) {
                var skinList = this.skinList.normal;
                this.skinList.normal = skinList.filter(function(element) {
                    return element.name !== skinResult.name;
                }); // Filter all occurences of a skin
                
            },
            // Invoked when deselecting skin
            addSkin: function(skin) {
                for (var i = 0; i < ChampionInfo.length; i++) {
                    if (ChampionInfo[i].name === skin) {
                        this.skinList.normal.push(ChampionInfo[i])
                        break;
                    }
                }
                console.log( this.skinList.normal.length)
            },
            // Update general data after each gift
            updateData: function(skinResult, mode) {
                this.skinHistory.push({
                        name: skinResult.name,
                        price: skinResult.price
                    })
                    // this.skinImage = skinResult.img;
                StatService.calculateStatistics(skinResult, mode);
            },
            getProbability: function(mode) { // Invoked after each action
                var skinList = this.retrieveList(mode);
                StatService.calculateProbability(skinList);
            },
            retrieveList: function(mode) { // Used to retrieve the possible skins for each gift type
                if (mode === 'normal' && !this.legendaryPromo) {
                    console.log('NORMAL', this.skinList.normal.length)
                    return this.skinList.normal;
                } else {
                    var normalGifts = this.skinList.normal;
                    if (mode === 'chest' && !this.legendaryPromo) {
                        this.skinList.chest = [];
                        for (var skin in normalGifts) {
                            if (normalGifts[skin].price >= 975) {
                                this.skinList.chest.push(normalGifts[skin]);
                            }
                        }
                        console.log('CHEST', this.skinList.chest.length)
                        return this.skinList.chest;
                    } else if (mode === 'normal' && this.legendaryPromo) {
                        this.skinList.normalLegendary = normalGifts.slice(0); // Create shallow copy
                        for (var skin in normalGifts) {
                            if (normalGifts[skin].price >= 1820) {
                                this.skinList.normalLegendary.push(normalGifts[skin]);
                            }
                        }
                        console.log('NORMALLEGENDARY', this.skinList.normalLegendary.length)
                        return this.skinList.normalLegendary;
                    } else if (mode === 'chest' && this.legendaryPromo) {
                        this.skinList.chestLegendary = [];
                        for (var skin in normalGifts) {
                            if (normalGifts[skin].price >= 975) {
                                this.skinList.chestLegendary.push(normalGifts[skin]);
                                if (normalGifts[skin].price >= 1820) {
                                    this.skinList.chestLegendary.push(normalGifts[skin]);
                                }
                            }
                        }
                        console.log('CHESTLEGENDARY', this.skinList.chestLegendary.length)
                        return this.skinList.chestLegendary;
                    }
                }
            },
            giftArrayToObj: function() { // Create objects of each champion containg all their skins
                var skinArray = ChampionInfo.slice(0);
                var changedChamp;
                for (var i = 0; i < skinArray.length; i++) {
                    if (changedChamp !== skinArray[i].champ) {
                        changedChamp = skinArray[i].champ;
                        this.champArray[skinArray[i].champ] = [];
                    }
                    this.champArray[skinArray[i].champ].push({name: skinArray[i].name, selected: false});
                }
            }
        }
    }
])
