(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kmisskey-core.js', './kotlin-kotlin-stdlib.js', './ktor-ktor-client-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kmisskey-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-client-core.js'));
  else {
    if (typeof globalThis['kmisskey-core'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kmisskey:all'. Its dependency 'kmisskey-core' was not found. Please, check whether 'kmisskey-core' is loaded prior to 'work.socialhub.kmisskey:all'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kmisskey:all'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'work.socialhub.kmisskey:all'.");
    }
    if (typeof globalThis['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kmisskey:all'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'work.socialhub.kmisskey:all'.");
    }
    globalThis['work.socialhub.kmisskey:all'] = factory(typeof globalThis['work.socialhub.kmisskey:all'] === 'undefined' ? {} : globalThis['work.socialhub.kmisskey:all'], globalThis['kmisskey-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-client-core']);
  }
}(function (_, kotlin_work_socialhub_kmisskey_core, kotlin_kotlin, kotlin_io_ktor_ktor_client_core) {
  'use strict';
  //region block: imports
  var MisskeyFactory_instance = kotlin_work_socialhub_kmisskey_core.$_$.a;
  var protoOf = kotlin_kotlin.$_$.ob;
  var initMetadataForObject = kotlin_kotlin.$_$.ua;
  var defineProp = kotlin_kotlin.$_$.ha;
  var VOID = kotlin_kotlin.$_$.b;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(KmisskeyFactory, 'KmisskeyFactory');
  //endregion
  function KmisskeyFactory() {
  }
  protoOf(KmisskeyFactory).instance = function (uri) {
    return MisskeyFactory_instance.m4r(uri);
  };
  protoOf(KmisskeyFactory).instanceOwnedAccessToken = function (uri, userAccessToken) {
    return MisskeyFactory_instance.o4r(uri, userAccessToken);
  };
  protoOf(KmisskeyFactory).instanceUserAccessToken = function (uri, appSecret, userAccessToken) {
    return MisskeyFactory_instance.n4r(uri, appSecret, userAccessToken);
  };
  var KmisskeyFactory_instance;
  function KmisskeyFactory_getInstance() {
    return KmisskeyFactory_instance;
  }
  //region block: init
  KmisskeyFactory_instance = new KmisskeyFactory();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$kmisskey = $work$socialhub.kmisskey || ($work$socialhub.kmisskey = {});
    defineProp($work$socialhub$kmisskey, 'KmisskeyFactory', KmisskeyFactory_getInstance, VOID, true);
  }
  $jsExportAll$(_);
  kotlin_kotlin.$jsExportAll$(_);
  kotlin_io_ktor_ktor_client_core.$jsExportAll$(_);
  kotlin_work_socialhub_kmisskey_core.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=kmisskey-all.js.map
