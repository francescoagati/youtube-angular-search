(function(){
  var asyncGreet;
  asyncGreet = __curry(function(scope, q, search){
    var deferred, fn;
    deferred = q.defer();
    fn = function(){
      var url;
      url = "http://gdata.youtube.com/feeds/api/videos?q=" + search + "&alt=json-in-script&callback=?&max-results=12&start-index=1";
      return $.getJSON(url).then(function(json){
        scope.$apply(function(){
          scope.counter = scope.counter + 1;
          console.log(json);
          deferred.resolve(json);
        });
      });
    };
    setTimeout(fn, 2000);
    return deferred.promise;
  });
  this.MovieSearch = function($scope, $q){
    $scope.counter = 0;
    $scope.movies = [];
    return $scope.reload = function(search){
      return $scope.movies = asyncGreet($scope)($q)(search);
    };
  };
  function __curry(f, args){
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      return params.push.apply(params, arguments) < f.length && arguments.length ?
        __curry.call(this, f, params) : f.apply(this, params);
    } : f;
  }
}).call(this);
