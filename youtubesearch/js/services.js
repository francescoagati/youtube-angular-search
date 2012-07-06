(function(){
  var services;
  services = angular.module('myApp.services', []);
  (function(){
    this.value('version', '0.1');
  }.call(services));
}).call(this);
