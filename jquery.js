(function (scope) {
  function $$ (query) {
    return document.querySelectorAll(query)
  }
  function $ (query) {
    return document.querySelector(query)
  }
  scope.$$ = $$
  scope.$ = $
})(window)