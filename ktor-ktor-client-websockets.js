(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['ktor-ktor-client-websockets'] = factory(typeof this['ktor-ktor-client-websockets'] === 'undefined' ? {} : this['ktor-ktor-client-websockets']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-websockets.js.map
