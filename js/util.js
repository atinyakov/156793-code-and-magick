'use strict';

window.util = (function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  return {
    isEscKeyCode: function (evt, action, input) {
      if (evt.keyCode === ESC_KEYCODE && evt.target !== input) {
        action();
      }
    },
    isEnterKeyCode: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    }
  };
})();
