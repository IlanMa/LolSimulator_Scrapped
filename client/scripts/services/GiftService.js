simulation.service('GiftService', [
    'StatService',
    'ChampionInfo',
    function(StatService, ChampionInfo) {
        'use strict';

        console.log('### GIFT SERVICE');

        return {
            skinHistory: [], // Contains skins history
            currentMode: 'normal',
            legendaryPromo: false,
            switchedModes: false,
            currentAnimation: 'normal',
            skinList: {
                normal: ChampionInfo.slice(0), // Skin list for normal mode
                chest: [], // Skin list for chest mode
                normalLegendary: [], // Skin list for normal legendary promo
                chestLegendary: [] // Skin list for chest legendary promo
            },
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
            removeSkin: function(skinResult) {
                var skinList = this.skinList.normal;
                this.skinList.normal = skinList.filter(function(element) {
                    return element.name !== skinResult.name;
                }); // filtered contains no occurrences of hello
            },
            updateData: function(skinResult, mode) {
                this.skinHistory.push({
                        name: skinResult.name,
                        price: skinResult.price
                    })
                    // this.skinImage = skinResult.img;
                StatService.calculateStatistics(skinResult, mode);
            },
            retrieveList: function(mode) {
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
                    this.switchedModes = false;
                }
            }
        }
    }
])
