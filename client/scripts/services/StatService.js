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
            extraStatistics: {
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
                this.extraStatistics[skin.price + 'RP'] += 1;
                var stats = this.statistics;
                var costToOpen = (mode === 'chest' ? this.price.chest : this.price.normal);
                stats.chestsOpened += 1;
                stats.dollarSpent += costToOpen * 0.0096153846153846;
                stats.rpSpent += costToOpen;
                stats.rpGained += skin.price;
                stats.dollarReturn = (stats.rpGained - stats.rpSpent) * 0.0096153846153846;
            }
        }
    }
])
