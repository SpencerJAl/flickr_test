(function(){
    'use strict';

    angular.module('flickrApp', ['ngMaterial'])
    .controller('ListController', ['$scope', '$http', function($scope, $http){

        $scope.result = [];

        $scope.isSearching = false;

        $scope.search = function(){
            $scope.isSearching = true;
            $http({
                mehtod: 'GET',
                url: 'https://api.flickr.com/services/rest',
                params:{
                    method:'flickr.photos.search',
                    api_key: '1ddd9e91e1cd2f43d852d60464f951e3',
                    text: $scope.searchTerm,
                    format: 'json',
                    nojsoncallback: 1
                }
            }).success(function(data){

                $scope.result = data;
                $scope.isSearching = false;

            }).error(function(error){
              console.error(error);
              $scope.isSearching = false;
   
            });
        }

    }]);
})