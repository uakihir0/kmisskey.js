(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['hash-library-sha1'] = factory(typeof globalThis['hash-library-sha1'] === 'undefined' ? {} : globalThis['hash-library-sha1']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=hash-library-sha1.js.map
