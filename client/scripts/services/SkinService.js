simulation.service('SkinService', [
	'$http',
    function($http) {
        'use strict';

        console.log('### SKIN SERVICE');

        return {

            getChampData: function(cb) {
                $http.get('/skins').then(function(res) {
                    cb(res)
                }, function(err) {
                    console.log(err)
                })
            },
            getSkinsData: function(obj) {
                var data = obj.data.data;
                var skins = [];
                for (var index in data) {
                    var length = data[index].skins.length;
                    for (var i = 0; i < length; i++) {

                        var tempSkin = {
                            "name": data[index].skins[i].name,
                            "champ": data[index].key,
                            "price": 0,
                            "num": data[index].skins[i].num
                        };


                        if (name === "default") {
                            tempSkin.img = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + tempSkin.champ + "_.jpg";
                        } else {
                            tempSkin.img = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + tempSkin.champ + "_" + tempSkin.num + ".jpg";
                        }

                        skins.push(tempSkin);
                    }

                }
                return skins;
            }
        }
    }
])


