(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-json.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kmpcommon'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kmpcommon'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'kmpcommon'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'kmpcommon'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kmpcommon'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kmpcommon'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kmpcommon'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kmpcommon'.");
    }
    globalThis.kmpcommon = factory(typeof kmpcommon === 'undefined' ? {} : kmpcommon, globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.zg;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var to = kotlin_kotlin.$_$.gh;
  var toMap = kotlin_kotlin.$_$.y8;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o6;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var toString = kotlin_kotlin.$_$.ac;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var get_boolean = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.g;
  var get_booleanOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h;
  var get_double = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var get_doubleOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.j;
  var get_float = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.k;
  var get_floatOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.l;
  var get_long = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.p;
  var get_longOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.q;
  var get_int = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.m;
  var get_intOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.n;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var buildClassSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var protoOf = kotlin_kotlin.$_$.wb;
  var JsonDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var isInterface = kotlin_kotlin.$_$.kb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var println = kotlin_kotlin.$_$.ca;
  var Enum = kotlin_kotlin.$_$.rf;
  var Long = kotlin_kotlin.$_$.wf;
  var THROW_CCE = kotlin_kotlin.$_$.bg;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var initMetadataForObject = kotlin_kotlin.$_$.bb;
  var VOID = kotlin_kotlin.$_$.f;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var promise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var CoroutineImpl = kotlin_kotlin.$_$.x9;
  var Unit_getInstance = kotlin_kotlin.$_$.j5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h9;
  var initMetadataForLambda = kotlin_kotlin.$_$.ab;
  var SuspendFunction1 = kotlin_kotlin.$_$.y9;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(AnySerializer, 'AnySerializer', VOID, VOID, [KSerializer]);
  initMetadataForLambda(runBlocking$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  //endregion
  function toAny(_this__u8e3s4, $this) {
    if (_this__u8e3s4 instanceof JsonPrimitive) {
      var tmp;
      if (_this__u8e3s4.get_isString_zep7bw_k$()) {
        tmp = _this__u8e3s4.get_content_h02jrk_k$();
      } else if (!(get_intOrNull(_this__u8e3s4) == null)) {
        tmp = get_int(_this__u8e3s4);
      } else if (!(get_longOrNull(_this__u8e3s4) == null)) {
        tmp = get_long(_this__u8e3s4);
      } else if (!(get_floatOrNull(_this__u8e3s4) == null)) {
        tmp = get_float(_this__u8e3s4);
      } else if (!(get_doubleOrNull(_this__u8e3s4) == null)) {
        tmp = get_double(_this__u8e3s4);
      } else if (!(get_booleanOrNull(_this__u8e3s4) == null)) {
        tmp = get_boolean(_this__u8e3s4);
      } else {
        throw IllegalStateException_init_$Create$("Can't deserialize unknown type: " + toString(_this__u8e3s4));
      }
      return tmp;
    } else {
      if (_this__u8e3s4 instanceof JsonArray) {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
        var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator.next_20eer_k$();
          // Inline function 'work.socialhub.kmpcommon.AnySerializer.toAny.<anonymous>' call
          var tmp$ret$0 = toAny(item, AnySerializer_getInstance());
          destination.add_utx5q5_k$(tmp$ret$0);
        }
        return destination;
      } else {
        if (_this__u8e3s4 instanceof JsonObject) {
          // Inline function 'kotlin.collections.map' call
          // Inline function 'kotlin.collections.mapTo' call
          var destination_0 = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
          // Inline function 'kotlin.collections.iterator' call
          var tmp0_iterator_0 = _this__u8e3s4.get_entries_p20ztl_k$().iterator_jk1svi_k$();
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var item_0 = tmp0_iterator_0.next_20eer_k$();
            // Inline function 'work.socialhub.kmpcommon.AnySerializer.toAny.<anonymous>' call
            var tmp$ret$4 = to(item_0.get_key_18j28a_k$(), toAny(item_0.get_value_j01efc_k$(), AnySerializer_getInstance()));
            destination_0.add_utx5q5_k$(tmp$ret$4);
          }
          return toMap(destination_0);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  }
  function AnySerializer$additionalSerializer$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return false;
  }
  function AnySerializer() {
    AnySerializer_instance = this;
    var tmp = this;
    tmp.additionalSerializer_1 = AnySerializer$additionalSerializer$lambda;
    this.descriptor_1 = buildClassSerialDescriptor('Any', []);
  }
  protoOf(AnySerializer).set_additionalSerializer_lbmiwd_k$ = function (_set____db54di) {
    this.additionalSerializer_1 = _set____db54di;
  };
  protoOf(AnySerializer).get_additionalSerializer_dfbdsu_k$ = function () {
    return this.additionalSerializer_1;
  };
  protoOf(AnySerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(AnySerializer).deserialize_sy6x50_k$ = function (decoder) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!isInterface(decoder, JsonDecoder)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var element = decoder.decodeJsonElement_6lz9ye_k$();
    return toAny(element, this);
  };
  protoOf(AnySerializer).serialize_qa2em9_k$ = function (encoder, value) {
    if (typeof value === 'number') {
      encoder.encodeInt_y5zi3z_k$(value);
    } else {
      if (value instanceof Long) {
        encoder.encodeLong_3didw_k$(value);
      } else {
        if (typeof value === 'number') {
          encoder.encodeShort_gza6si_k$(value);
        } else {
          if (typeof value === 'number') {
            encoder.encodeFloat_b8b85a_k$(value);
          } else {
            if (typeof value === 'number') {
              encoder.encodeDouble_n270q9_k$(value);
            } else {
              if (typeof value === 'string') {
                encoder.encodeString_424b5v_k$(value);
              } else {
                if (typeof value === 'boolean') {
                  encoder.encodeBoolean_tu2e59_k$(value);
                } else {
                  if (value instanceof Enum) {
                    encoder.encodeString_424b5v_k$(toString(this));
                  } else {
                    if (!this.additionalSerializer_1(encoder, value)) {
                      println("Can't serialize unknown type: " + toString(getKClassFromExpression(value)));
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  protoOf(AnySerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_qa2em9_k$(encoder, !(value == null) ? value : THROW_CCE());
  };
  var AnySerializer_instance;
  function AnySerializer_getInstance() {
    if (AnySerializer_instance == null)
      new AnySerializer();
    return AnySerializer_instance;
  }
  function runBlocking(block) {
    var tmp = GlobalScope_getInstance();
    return promise(tmp, VOID, VOID, runBlocking$slambda_0(block, null));
  }
  function runBlocking$slambda($block, resultContinuation) {
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(runBlocking$slambda).invoke_x2i4op_k$ = function ($this$promise, $completion) {
    var tmp = this.create_rcuf4x_k$($this$promise, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(runBlocking$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_x2i4op_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(runBlocking$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$block_1(this.$this$promise_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(runBlocking$slambda).create_rcuf4x_k$ = function ($this$promise, completion) {
    var i = new runBlocking$slambda(this.$block_1, completion);
    i.$this$promise_1 = $this$promise;
    return i;
  };
  protoOf(runBlocking$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function runBlocking$slambda_0($block, resultContinuation) {
    var i = new runBlocking$slambda($block, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.invoke_x2i4op_k$($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AnySerializer_getInstance;
  _.$_$.b = runBlocking;
  //endregion
  return _;
}));

//# sourceMappingURL=kmpcommon.js.map
