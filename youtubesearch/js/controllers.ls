asyncGreet = (scope,q,search) -->
  deferred = q.defer()
  fn = -> 
      url="http://gdata.youtube.com/feeds/api/videos?q=#{search}&alt=json-in-script&callback=?&max-results=12&start-index=1"
      json <-! $.getJSON(url).then
      scope.$apply !-> 
        scope.counter=scope.counter+1
        console.log json
        deferred.resolve(json)
  setTimeout fn,2000
  deferred.promise


@MovieSearch = ($scope,$q) ->
  
  $scope.counter=0     
  $scope.movies=[]

  
  $scope.reload = (search) ->
    $scope.movies=asyncGreet($scope)($q)(search)

   