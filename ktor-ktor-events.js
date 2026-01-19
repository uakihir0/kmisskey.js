(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-utils.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-utils.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-events'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-events'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-events'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-events'.");
    }
    globalThis['ktor-ktor-events'] = factory(typeof globalThis['ktor-ktor-events'] === 'undefined' ? {} : globalThis['ktor-ktor-events'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-utils']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_utils) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ob;
  var initMetadataForClass = kotlin_kotlin.$_$.oa;
  var LockFreeLinkedListNode = kotlin_io_ktor_ktor_utils.$_$.d;
  var VOID = kotlin_kotlin.$_$.b;
  var CopyOnWriteHashMap = kotlin_io_ktor_ktor_utils.$_$.b;
  var THROW_CCE = kotlin_kotlin.$_$.mf;
  var equals = kotlin_kotlin.$_$.ia;
  var addSuppressed = kotlin_kotlin.$_$.yf;
  var Unit_instance = kotlin_kotlin.$_$.v4;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(EventDefinition, 'EventDefinition', EventDefinition);
  initMetadataForClass(HandlerRegistration, 'HandlerRegistration', VOID, LockFreeLinkedListNode);
  initMetadataForClass(Events, 'Events', Events);
  //endregion
  function EventDefinition() {
  }
  function HandlerRegistration() {
  }
  function Events() {
    this.g3a_1 = new CopyOnWriteHashMap();
  }
  protoOf(Events).h3a = function (definition, value) {
    var exception = null;
    var tmp0_safe_receiver = this.g3a_1.j2c(definition);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'io.ktor.util.internal.LockFreeLinkedListHead.forEach' call
      var tmp = tmp0_safe_receiver.z1p();
      var cur = tmp instanceof LockFreeLinkedListNode ? tmp : THROW_CCE();
      while (!equals(cur, tmp0_safe_receiver)) {
        if (cur instanceof HandlerRegistration) {
          var registration = cur;
          try {
            var tmp_0 = registration.j3a_1;
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
        cur = cur.h2d();
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
