simulation.controller('SimController', [
    '$scope',
    '$http',
    function(
        $scope,
        $http) {
        'use strict';

        console.log('### Sim Controller');

        var skins = [];

        var getSkins = function() {
            $http.get('/skins').then(function(res) {
                storeSkins(res);
            }, function(err) {
                console.log(err)
            })
        }
        getSkins();

        function storeSkins(res) {
        	var data = res.data.data
            for (var index in data) {
            	var length = data[index].skins.length;
                for (var i = 0; i < length; i++) {

                    var tempSkin = {
                        "name": data[index].skins[i].name,
                        "champ": data[index].key,
                        "num": data[index].skins[i].num
                    };


                    if (name === "default") {
                        tempSkin.img = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + tempSkin.champ + "_0.jpg";
                    } else {
                        tempSkin.img = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + tempSkin.champ + "_" + tempSkin.num + ".jpg";
                    }

                    skins.push(tempSkin);
                }

            }
            console.log(skins)

        }
    }
])
