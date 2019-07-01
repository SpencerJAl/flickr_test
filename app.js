/**
 * Created by gpmas_000 on 01/07/2019.
 */
(function () {
    'use strict';

    angular.module('App', ['ngMaterial'])
        .controller('ListController', ['$scope', '$http', function ($scope, $http, success, error) {
            $scope.results = [];

            $scope.search = function () {
                $http({
                    method: 'GET',
                    url: 'https://api.flickr.com/services/rest',
                    params: {
                        method: 'flickr.photos.search',
                        api_key: '1ddd9e91e1cd2f43d852d60464f951e3',
                        text: $scope.searchTerm,
                        format: 'json',
                        nojsoncallback: 1
                    }

                }).then(function(success){
                    $scope.results = success.data;
                }, function errorCallBack(error) {

                    console.error(error);
                });
            };
        }]);
})();