directives=angular.module("myApp.directives", [])
with directives
  @directive  (version) ->
    (scope, elm, attrs) ->
      elm.text version


/*

angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
 

*/   