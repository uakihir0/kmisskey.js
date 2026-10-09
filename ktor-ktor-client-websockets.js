(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['ktor-ktor-client-websockets'] = factory(typeof globalThis['ktor-ktor-client-websockets'] === 'undefined' ? {} : globalThis['ktor-ktor-client-websockets']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-websockets.js.map
