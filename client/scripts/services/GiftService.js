simulation.service('GiftService', [
    'ChampionInfo',
    function(ChampionInfo) {
        'use strict';

        console.log('### GIFT SERVICE');

        return {
            skinHistory: [], // Contains skins history
            skinList: {
                normal: [],
                chest: [],
                legendary: []
            },
            statistics: {
                chestsOpened: 0, // Chests opened
                dollarSpent: 0, // Dollars spent
                rpSpent: 0, // RP spent
                rpGained: 0, // RP gained
                dollarReturn: 0 // Dollar Return 
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
                this.calculateStatistics(skinResult);
            },
            calculateStatistics: function(skin) {
                var stats = this.statistics;
                stats.chestsOpened += 1;
                stats.dollarSpent = stats.chestsOpened * 4.25;
                stats.rpSpent = stats.chestsOpened * 490;
                stats.rpGained += skin.price;
                stats.dollarReturn = (stats.rpGained - stats.rpSpent) * 0.0096153846153846;
            },
            retrieveList: function(mode) {
                if (!this.skinList[mode].length) {
                	console.log("IN")
                    if (mode === 'normal') {
                        this.skinList.normal = ChampionInfo;
                        return this.skinList.normal
                    } else if (mode === 'chest') {
                        for (skin in skins) {
                            if (skins[skin].price >= 975) {
                                chest.push(skins[skin]);
                            }
                        }
                        return this.skinList.chest;
                    }
                } else {
                	console.log("OUT")

                	return this.skinList[mode];
                }
            }
        }
    }
])
