(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'core-library-common'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'core-library-common'.");
    }
    root['core-library-common'] = factory(typeof this['core-library-common'] === 'undefined' ? {} : this['core-library-common'], this['kotlin-kotlin-stdlib']);
  }
}(globalThis, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.vb;
  var initMetadataForInterface = kotlin_kotlin.$_$.ya;
  var THROW_CCE = kotlin_kotlin.$_$.cg;
  var Annotation = kotlin_kotlin.$_$.kf;
  var initMetadataForClass = kotlin_kotlin.$_$.va;
  var VOID = kotlin_kotlin.$_$.f;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(Algorithm, 'Algorithm');
  initMetadataForClass(InternalKotlinCryptoApi, 'InternalKotlinCryptoApi', VOID, VOID, [Annotation]);
  initMetadataForInterface(Copyable, 'Copyable');
  initMetadataForInterface(Resettable, 'Resettable');
  initMetadataForInterface(Updatable, 'Updatable');
  //endregion
  function Algorithm() {
  }
  function InternalKotlinCryptoApi() {
  }
  protoOf(InternalKotlinCryptoApi).equals = function (other) {
    if (!(other instanceof InternalKotlinCryptoApi))
      return false;
    other instanceof InternalKotlinCryptoApi || THROW_CCE();
    return true;
  };
  protoOf(InternalKotlinCryptoApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalKotlinCryptoApi).toString = function () {
    return '@org.kotlincrypto.core.InternalKotlinCryptoApi()';
  };
  function Copyable() {
  }
  function Resettable() {
  }
  function Updatable() {
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Algorithm;
  _.$_$.b = Copyable;
  _.$_$.c = Resettable;
  _.$_$.d = Updatable;
  //endregion
  return _;
}));

//# sourceMappingURL=core-library-common.js.map
