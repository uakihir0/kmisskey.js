(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kmisskey-stream'] = factory(typeof this['kmisskey-stream'] === 'undefined' ? {} : this['kmisskey-stream']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kmisskey-stream.js.map
