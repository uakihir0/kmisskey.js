(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-cbor'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-cbor'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-cbor'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-cbor'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-cbor'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var toBits = kotlin_kotlin.$_$.uf;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_normalizeBaseBits() {
    _init_properties_Encoding_kt__jty2h9();
    return normalizeBaseBits;
  }
  var normalizeBaseBits;
  function get_SINGLE_PRECISION_NORMALIZE_BASE() {
    return SINGLE_PRECISION_NORMALIZE_BASE;
  }
  var SINGLE_PRECISION_NORMALIZE_BASE;
  var properties_initialized_Encoding_kt_vg5col;
  function _init_properties_Encoding_kt__jty2h9() {
    if (!properties_initialized_Encoding_kt_vg5col) {
      properties_initialized_Encoding_kt_vg5col = true;
      normalizeBaseBits = toBits(0.5);
    }
  }
  //region block: init
  SINGLE_PRECISION_NORMALIZE_BASE = 0.5;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-cbor.js.map
