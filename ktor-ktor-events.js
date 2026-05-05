(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-utils.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-events'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-events'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-events'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-events'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-events'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-events'.");
    }
    globalThis['ktor-ktor-events'] = factory(typeof globalThis['ktor-ktor-events'] === 'undefined' ? {} : globalThis['ktor-ktor-events'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-utils'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.yb;
  var initMetadataForClass = kotlin_kotlin.$_$.ya;
  var LockFreeLinkedListNode = kotlin_io_ktor_ktor_utils.$_$.f;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var VOID = kotlin_kotlin.$_$.c;
  var CopyOnWriteHashMap = kotlin_io_ktor_ktor_utils.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.yf;
  var equals = kotlin_kotlin.$_$.sa;
  var addSuppressed = kotlin_kotlin.$_$.kg;
  var Unit_instance = kotlin_kotlin.$_$.z;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(EventDefinition, 'EventDefinition', EventDefinition);
  initMetadataForClass(HandlerRegistration, 'HandlerRegistration', VOID, LockFreeLinkedListNode, [DisposableHandle]);
  initMetadataForClass(Events, 'Events', Events);
  //endregion
  function EventDefinition() {
  }
  function HandlerRegistration() {
  }
  function Events() {
    this.t3e_1 = new CopyOnWriteHashMap();
  }
  protoOf(Events).u3e = function (definition, value) {
    var exception = null;
    var tmp0_safe_receiver = this.t3e_1.e2g(definition);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'io.ktor.util.internal.LockFreeLinkedListHead.forEach' call
      var tmp = tmp0_safe_receiver.u1r();
      var cur = tmp instanceof LockFreeLinkedListNode ? tmp : THROW_CCE();
      while (!equals(cur, tmp0_safe_receiver)) {
        if (cur instanceof HandlerRegistration) {
          var registration = cur;
          try {
            var tmp_0 = registration.w3e_1;
            (typeof tmp_0 === 'function' ? tmp_0 : THROW_CCE())(value);
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              var tmp0_safe_receiver_0 = exception;
              var tmp_1;
              if (tmp0_safe_receiver_0 == null) {
                tmp_1 = null;
              } else {
                addSuppressed(tmp0_safe_receiver_0, e);
                tmp_1 = Unit_instance;
              }
              if (tmp_1 == null) {
                // Inline function 'kotlin.run' call
                exception = e;
              }
            } else {
              throw $p;
            }
          }
        }
        cur = cur.c2h();
      }
    }
    var tmp1_safe_receiver = exception;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp1_safe_receiver;
    }
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = EventDefinition;
  _.$_$.b = Events;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-events.js.map
