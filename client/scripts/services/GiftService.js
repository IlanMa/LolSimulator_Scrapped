simulation.service('GiftService', [
    'StatService',
    'ChampionInfo',
    function(StatService, ChampionInfo) {
        'use strict';

        console.log('### GIFT SERVICE');

        return {
            skinHistory: [], // Contains skins history
            currentMode: 'normal',
            currentAnimation: 'normal',
            skinList: {
                normal: [], // Skin list for normal mode
                chest: [], // Skin list for chest mode
                legendary: [] // Skin list for legendary promo mode
            },
            price: {
                normal: 490, // RP Price to open mystery gift
                chest: 790 // RP Price to open mystery chest
            },
            skinImage: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg',

            openSkin: function(mode) { // Invoked on gift open
                var skins = this.retrieveList(mode);
                var skinResult = skins[Math.floor(Math.random() * skins.length)];
                this.skinHistory.push({
                    name: skinResult.name,
                    price: skinResult.price
                })
                this.skinImage = skinResult.img;
                StatService.calculateStatistics(skinResult, mode);
            },
            retrieveList: function(mode) {
                if (!this.skinList[mode].length) {
                    if (mode === 'normal') {
                        this.skinList.normal = ChampionInfo;
                        return this.skinList.normal
                    } else if (mode === 'chest') {
                        for (var skin in ChampionInfo) {
                            if (ChampionInfo[skin].price >= 975) {
                                this.skinList.chest.push(ChampionInfo[skin]);
                            }
                        }
                        return this.skinList.chest;
                    } else if (mode === 'legendary') {
                        this.skinList.legendary = ChampionInfo;
                        for (var skin in ChampionInfo) {
                            if (ChampionInfo[skin].price >= 1820) {
                                this.skinList.legendary.push(ChampionInfo[skin]);
                            }
                        }
                        return this.skinList.legendary;
                    }
                } else {
                    return this.skinList[mode];
                }
            }
        }
    }
])
