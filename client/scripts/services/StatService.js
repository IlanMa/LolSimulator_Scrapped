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
            price: {
                normal: 490, // RP Price to open mystery gift
                chest: 790 // RP Price to open mystery chest
            },
            calculateStatistics: function(skin, mode) {
                var stats = this.statistics;
                var costToOpen = (mode === 'chest' ? this.price.chest : this.price.normal);
                stats.chestsOpened += 1;
                stats.dollarSpent += costToOpen * 0.0096153846153846;
                stats.rpSpent = stats.chestsOpened * costToOpen;
                stats.rpGained += skin.price;
                stats.dollarReturn = (stats.rpGained - stats.rpSpent) * 0.0096153846153846;
            }
        }
    }
])
