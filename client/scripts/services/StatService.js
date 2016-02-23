simulation.service('StatService', [
    function() {
        'use strict';

        console.log('### STAT SERVICE');

        return {
            statistics: {
                chestsOpened: 0, // Chests opened
                dollarSpent: 0, // Dollars spent
                rpSpent: 0, // RP spent
                rpGained: 0, // RP gained
                dollarReturn: 0 // Dollar Return 
            },
            skinTypeCount: {
                '520RP': 0,
                '750RP': 0,
                '975RP': 0,
                '1350RP': 0,
                '1820RP': 0,
                '3250RP': 0
            },
            price: {
                normal: 490, // RP Price to open mystery gift
                chest: 790 // RP Price to open mystery chest
            },
            calculateStatistics: function(skin, mode) {
                var stats = this.statistics;
                var costToOpen = (mode === 'chest' ? this.price.chest : this.price.normal);
                stats.chestsOpened += 1;
                stats.dollarSpent += costToOpen * 0.0096153846153846;
                stats.rpSpent += costToOpen;
                stats.rpGained += skin.price;
                stats.dollarReturn = (stats.rpGained - stats.rpSpent) * 0.0096153846153846;
                this.skinTypeCount[skin.price + 'RP'] += 1;
            },
            calculateProbability: function(skinList) {
                var probabilities = {
                    total: skinList.length,
                    '520RP': {
                        remaining: 0,
                        probability: 0
                    },
                    '750RP': {
                        remaining: 0,
                        probability: 0
                    },
                    '975RP': {
                        remaining: 0,
                        probability: 0
                    },
                    '1350RP': {
                        remaining: 0,
                        probability: 0
                    },
                    '1820RP': {
                        remaining: 0,
                        probability: 0
                    },
                    '3250RP': {
                        remaining: 0,
                        probability: 0
                    }
                };
                for (var i = 0; i < skinList.length; i++) {
                    var skinType = probabilities[skinList[i].price + "RP"];
                    if (skinType) {
                        skinType.remaining++;
                    }
                }
                for (var type in probabilities) {
                    if (type != 'total') {
                        probabilities[type].probability = probabilities[type].remaining / probabilities.total;
                    }
                }
                return probabilities;
            }
        }
    }
])
