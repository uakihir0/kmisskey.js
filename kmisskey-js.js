(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kmisskey-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kmisskey-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kmisskey-core'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kmisskey:pods'. Its dependency 'kmisskey-core' was not found. Please, check whether 'kmisskey-core' is loaded prior to 'work.socialhub.kmisskey:pods'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kmisskey:pods'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'work.socialhub.kmisskey:pods'.");
    }
    root['work.socialhub.kmisskey:pods'] = factory(typeof this['work.socialhub.kmisskey:pods'] === 'undefined' ? {} : this['work.socialhub.kmisskey:pods'], this['kmisskey-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_work_socialhub_kmisskey_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var MisskeyFactory_getInstance = kotlin_work_socialhub_kmisskey_core.$_$.a;
  var protoOf = kotlin_kotlin.$_$.ta;
  var classMeta = kotlin_kotlin.$_$.n9;
  var setMetadataFor = kotlin_kotlin.$_$.ua;
  var VOID = kotlin_kotlin.$_$.f;
  //endregion
  //region block: pre-declaration
  setMetadataFor(KmisskeyFactory, 'KmisskeyFactory', classMeta, VOID, VOID, KmisskeyFactory);
  //endregion
  function KmisskeyFactory() {
  }
  protoOf(KmisskeyFactory).instance = function (uri) {
    return MisskeyFactory_getInstance().instance_ml9jjv_k$(uri);
  };
  protoOf(KmisskeyFactory).instanceOwnedAccessToken = function (uri, userAccessToken) {
    return MisskeyFactory_getInstance().instance_ex8uqd_k$(uri, userAccessToken);
  };
  protoOf(KmisskeyFactory).instanceUserAccessToken = function (uri, clientSecret, userAccessToken) {
    return MisskeyFactory_getInstance().instance_vcissb_k$(uri, clientSecret, userAccessToken);
  };
  //region block: exports
  function $jsExportAll$(_) {
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$kmisskey = $work$socialhub.kmisskey || ($work$socialhub.kmisskey = {});
    $work$socialhub$kmisskey.KmisskeyFactory = KmisskeyFactory;
  }
  $jsExportAll$(_);
  kotlin_work_socialhub_kmisskey_core.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=kmisskey-js.js.map
