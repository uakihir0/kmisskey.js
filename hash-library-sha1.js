(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['hash-library-sha1'] = factory(typeof this['hash-library-sha1'] === 'undefined' ? {} : this['hash-library-sha1']);
}(globalThis, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=hash-library-sha1.js.map
