(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kotlinx-browser'] = factory(typeof globalThis['kotlinx-browser'] === 'undefined' ? {} : globalThis['kotlinx-browser']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  var undefined_0;
  //region block: init
  undefined_0 = null;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-browser.js.map
