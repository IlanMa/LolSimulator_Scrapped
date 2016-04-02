simulation.service('StatService', [
    '$timeout',
    function($timeout) {
        'use strict';

        console.log('### STAT SERVICE');

        return {
            statistics: {
                chestsOpened: 0, // Chests opened
                dollarSpent: 0, // Dollars spent
                dollarGained: 0, // Total dollar value of all acquired skins
                rpSpent: 0, // RP spent
                rpGained: 0, // RP gained
                dollarReturn: 0 // Net Profit 
            },
            skinTypeCount: { // Amount acquired for each type
                '520RP': 0,
                '750RP': 0,
                '975RP': 0,
                '1350RP': 0,
                '1820RP': 0,
                '3250RP': 0
            },
            rpArray: [],
            avgArray: [],
            probabilities: {}, // Contains probabilities
            total: 0, // Contains total skins remaining
            average: 0, // Contains the average value of the next skin
            price: {
                normal: 490, // RP Price to open mystery gift
                chest: 790 // RP Price to open mystery chest
            },
            valueOfOneRp: 0.0096153846153846,
            // Invoked after each open button press
            calculateStatistics: function(skin, mode) {
                var stats = this.statistics;
                var costToOpen = (mode === 'chest' ? this.price.chest : this.price.normal);
                stats.chestsOpened += 1;
                stats.dollarSpent += costToOpen * this.valueOfOneRp;
                stats.dollarGained +=  skin.price * this.valueOfOneRp;
                stats.rpSpent += costToOpen;
                stats.rpGained += skin.price;
                stats.dollarReturn = (stats.rpGained - stats.rpSpent) * this.valueOfOneRp;
                this.skinTypeCount[skin.price + 'RP'] += 1;
                this.calculateGraphData(skin);
            },
            // Invoked after each gift open and gift type change
            calculateProbability: function(skinList) {
                this.probabilities = {
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
                }
                for (var i = 0; i < skinList.length; i++) { // Count the remaining skins for each type
                    var skinType = this.probabilities[skinList[i].price + "RP"];
                    skinType.remaining++;
                }
                this.total = skinList.length;
                this.average = 0;
                for (var type in this.probabilities) { // Count the probability of each type
                    this.probabilities[type].probability = (this.probabilities[type].remaining / this.total) * 100;
                    this.average += (this.probabilities[type].probability * type.substring(0, type.length - 2) / 100)
                }
            },
            // Calculate data to update the graph
            calculateGraphData: function(skin) {
                this.rpArray.push(skin.price);
                var rpArray = this.rpArray;
                var sum = 0;
                var numOfValues = (rpArray.length >= 10) ? 10 : rpArray.length;
                for (var i = rpArray.length - 1; i >= rpArray.length - numOfValues; i--) {
                    sum += rpArray[i];
                }
                var avg = sum / numOfValues;
                this.avgArray.push(avg);
            }
        }
    }
])
