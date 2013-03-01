"use strict";
app.directive('contenteditable', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      // view -> model
      elm.bind('blur keydown keyup', function() {
        scope.$apply(function() {
          ctrl.$setViewValue(elm.text());
        });
      });

      // model -> view
      ctrl.$render = function() {
        elm.text(ctrl.$viewValue);
      };

      // load init value from DOM
      ctrl.$setViewValue(elm.text());
    }
  };
})