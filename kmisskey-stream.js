(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kmisskey-stream'] = factory(typeof globalThis['kmisskey-stream'] === 'undefined' ? {} : globalThis['kmisskey-stream']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kmisskey-stream.js.map
