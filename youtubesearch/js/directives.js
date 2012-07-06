(function(){
  var directives;
  directives = angular.module("myApp.directives", []);
  (function(){
    this.directive(function(version){
      return function(scope, elm, attrs){
        return elm.text(version);
      };
    });
  }.call(directives));
  /*
  
  angular.module('myApp.directives', []).
    directive('appVersion', ['version', function(version) {
      return function(scope, elm, attrs) {
        elm.text(version);
      };
    }]);
   
  
  */
}).call(this);
