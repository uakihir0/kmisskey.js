(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'error-library-error'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'error-library-error'.");
    }
    globalThis['error-library-error'] = factory(typeof globalThis['error-library-error'] === 'undefined' ? {} : globalThis['error-library-error'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.i1;
  var protoOf = kotlin_kotlin.$_$.ob;
  var objectCreate = kotlin_kotlin.$_$.nb;
  var captureStack = kotlin_kotlin.$_$.z9;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.k1;
  var IllegalArgumentException = kotlin_kotlin.$_$.ff;
  var initMetadataForClass = kotlin_kotlin.$_$.oa;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(InvalidParameterException, 'InvalidParameterException', InvalidParameterException_init_$Create$, IllegalArgumentException);
  //endregion
  function InvalidParameterException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    InvalidParameterException.call($this);
    return $this;
  }
  function InvalidParameterException_init_$Create$() {
    var tmp = InvalidParameterException_init_$Init$(objectCreate(protoOf(InvalidParameterException)));
    captureStack(tmp, InvalidParameterException_init_$Create$);
    return tmp;
  }
  function InvalidParameterException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    InvalidParameterException.call($this);
    return $this;
  }
  function InvalidParameterException_init_$Create$_0(message) {
    var tmp = InvalidParameterException_init_$Init$_0(message, objectCreate(protoOf(InvalidParameterException)));
    captureStack(tmp, InvalidParameterException_init_$Create$_0);
    return tmp;
  }
  function InvalidParameterException() {
    captureStack(this, InvalidParameterException);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = InvalidParameterException_init_$Create$_0;
  //endregion
  return _;
}));

//# sourceMappingURL=error-library-error.js.map
