(function(){
  var filters;
  filters = angular.module("myApp.filters", []);
  (function(){
    this.filter("interpolate", function(version){
      return function(text){
        return String(text).replace(/\%VERSION\%/g, version);
      };
    });
  }.call(filters));
}).call(this);
