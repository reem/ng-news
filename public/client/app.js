angular.module('ngNews', [])

.controller('postsController', ['$scope', '$http', 'postsService', 
  function ($scope, $http, postsService) {
    
}])

.factory('postsService', ['$http', function ($http) {
  var postLink = function (post) {
    return $http.post({
      url: '/links',
      data: post
    });
  };

  var getLinks = function () {
    return $http.get({
      url: '/links'
    });
  };

  return {
    getLinks: getLinks,
    postLink: postLink,
  };
}]);