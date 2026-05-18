(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['hash-library-md'] = factory(typeof globalThis['hash-library-md'] === 'undefined' ? {} : globalThis['hash-library-md']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=hash-library-md.js.map
