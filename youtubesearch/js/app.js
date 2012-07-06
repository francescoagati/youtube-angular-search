(function(){
  var app;
  app = angular.module("myApp", ["myApp.filters", "myApp.services", "myApp.directives"]);
  (function(){
    this.config(function($routeProvider){
      $routeProvider.when("/search", {
        templateUrl: "partials/search.html",
        controller: MovieSearch
      });
      return $routeProvider.otherwise({
        redirectTo: "/search"
      });
    });
  }.call(app));
}).call(this);
