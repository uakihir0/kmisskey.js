(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kmisskey-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kmisskey-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kmisskey-core'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kmisskey:all'. Its dependency 'kmisskey-core' was not found. Please, check whether 'kmisskey-core' is loaded prior to 'work.socialhub.kmisskey:all'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kmisskey:all'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'work.socialhub.kmisskey:all'.");
    }
    globalThis['work.socialhub.kmisskey:all'] = factory(typeof globalThis['work.socialhub.kmisskey:all'] === 'undefined' ? {} : globalThis['work.socialhub.kmisskey:all'], globalThis['kmisskey-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_work_socialhub_kmisskey_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var MisskeyFactory_getInstance = kotlin_work_socialhub_kmisskey_core.$_$.a;
  var protoOf = kotlin_kotlin.$_$.wb;
  var initMetadataForObject = kotlin_kotlin.$_$.bb;
  var defineProp = kotlin_kotlin.$_$.oa;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(KmisskeyFactory, 'KmisskeyFactory');
  //endregion
  function KmisskeyFactory() {
    KmisskeyFactory_instance = this;
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
  var KmisskeyFactory_instance;
  function KmisskeyFactory_getInstance() {
    if (KmisskeyFactory_instance == null)
      new KmisskeyFactory();
    return KmisskeyFactory_instance;
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$kmisskey = $work$socialhub.kmisskey || ($work$socialhub.kmisskey = {});
    defineProp($work$socialhub$kmisskey, 'KmisskeyFactory', KmisskeyFactory_getInstance);
  }
  $jsExportAll$(_);
  kotlin_kotlin.$jsExportAll$(_);
  kotlin_work_socialhub_kmisskey_core.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=kmisskey-js.js.map
