angular.module('ngNews', [])

.controller('postsController', ['$scope', '$http', 'postsService', 
  function ($scope, $http, postsService) {
    $scope.posts = [];
    $scope.submitter = function () {
      postsService.postLink({
        url: $scope.url,
        title: $scope.title,
        message: $scope.message
      });
      $scope.url = $scope.title = $scope.message = "";
    };
    
    setInterval(function () {
      postsService.getLinks().then(function (post) {
        if (post.data)
          $scope.posts = post.data;
      });
    }, 1000);  

    $scope.upvote = function (post) {
      post.upvotes += 1;
    };
}])

.factory('postsService', ['$http', function ($http) {
  var postLink = function (post) {
    return $http({
      method: 'POST',
      url: '/links',
      data: post
    });
  };

  var getLinks = function () {
    return $http({
      method: 'GET',
      url: '/links'
    });
  };

  return {
    getLinks: getLinks,
    postLink: postLink,
  };
}]);