filters=angular.module("myApp.filters", [])
with filters
  @filter "interpolate", (version) -> (text) -> String(text).replace /\%VERSION\%/g, version

