app=angular.module("myApp", [ "myApp.filters", "myApp.services", "myApp.directives" ])
with app
  @config ($routeProvider) ->

    $routeProvider.when "/search",
      templateUrl: "partials/search.html"
      controller: MovieSearch

    $routeProvider.otherwise redirectTo: "/search"
 
 
