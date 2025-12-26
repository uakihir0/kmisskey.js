(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-atomicfu.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-atomicfu.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'ktor-ktor-utils'.");
    }
    globalThis['ktor-ktor-utils'] = factory(typeof globalThis['ktor-ktor-utils'] === 'undefined' ? {} : globalThis['ktor-ktor-utils'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-atomicfu'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.j4;
  var arrayOf = kotlin_kotlin.$_$.xf;
  var createKType = kotlin_kotlin.$_$.cc;
  var Unit_instance = kotlin_kotlin.$_$.u4;
  var VOID = kotlin_kotlin.$_$.b;
  var isBlank = kotlin_kotlin.$_$.bd;
  var toString = kotlin_kotlin.$_$.pb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var protoOf = kotlin_kotlin.$_$.mb;
  var getStringHashCode = kotlin_kotlin.$_$.ka;
  var initMetadataForClass = kotlin_kotlin.$_$.ma;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var initMetadataForInterface = kotlin_kotlin.$_$.qa;
  var THROW_CCE = kotlin_kotlin.$_$.kf;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var equals = kotlin_kotlin.$_$.ga;
  var hashCode = kotlin_kotlin.$_$.la;
  var asJsReadonlyMapView = kotlin_kotlin.$_$.d5;
  var KtMutableMap = kotlin_kotlin.$_$.g5;
  var ensureNotNull = kotlin_kotlin.$_$.bg;
  var Entry = kotlin_kotlin.$_$.c5;
  var isInterface = kotlin_kotlin.$_$.bb;
  var toString_0 = kotlin_kotlin.$_$.lg;
  var charArray = kotlin_kotlin.$_$.z9;
  var charCodeAt = kotlin_kotlin.$_$.aa;
  var toString_1 = kotlin_kotlin.$_$.k2;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.i8;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Element = kotlin_kotlin.$_$.r8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.n5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var KtSet = kotlin_kotlin.$_$.i5;
  var KtMutableSet = kotlin_kotlin.$_$.h5;
  var initMetadataForObject = kotlin_kotlin.$_$.sa;
  var Enum = kotlin_kotlin.$_$.af;
  var firstOrNull = kotlin_kotlin.$_$.k6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var addAll = kotlin_kotlin.$_$.j5;
  var emptyMap = kotlin_kotlin.$_$.g6;
  var getBooleanHashCode = kotlin_kotlin.$_$.ia;
  var equals_0 = kotlin_kotlin.$_$.wc;
  var setOf = kotlin_kotlin.$_$.k7;
  var toList = kotlin_kotlin.$_$.t7;
  var charSequenceLength = kotlin_kotlin.$_$.ca;
  var charSequenceGet = kotlin_kotlin.$_$.ba;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.z;
  var get_lastIndex = kotlin_kotlin.$_$.ed;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d2;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.h2;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.j2;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.gg;
  var Long = kotlin_kotlin.$_$.ff;
  var initMetadataForCompanion = kotlin_kotlin.$_$.na;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var objectCreate = kotlin_kotlin.$_$.lb;
  var equalsLong = kotlin_kotlin.$_$.g9;
  var Comparable = kotlin_kotlin.$_$.we;
  var enumEntries = kotlin_kotlin.$_$.v8;
  var CoroutineImpl = kotlin_kotlin.$_$.t8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d8;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.oa;
  var KtMutableList = kotlin_kotlin.$_$.f5;
  var toMutableList = kotlin_kotlin.$_$.x7;
  var ArrayList = kotlin_kotlin.$_$.v4;
  var KMutableProperty1 = kotlin_kotlin.$_$.hc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ja;
  var emptyList = kotlin_kotlin.$_$.f6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.v6;
  var last = kotlin_kotlin.$_$.x6;
  var mutableListOf = kotlin_kotlin.$_$.c7;
  var anyToString = kotlin_kotlin.$_$.u9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var extendThrowable = kotlin_kotlin.$_$.ha;
  var captureStack = kotlin_kotlin.$_$.x9;
  var recoverStackTrace = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var Companion_instance = kotlin_kotlin.$_$.p4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l2;
  var createFailure = kotlin_kotlin.$_$.ag;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.m2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.n2;
  var Continuation = kotlin_kotlin.$_$.n8;
  var intercepted = kotlin_kotlin.$_$.g8;
  var KProperty1 = kotlin_kotlin.$_$.jc;
  var lazy_0 = kotlin_kotlin.$_$.hg;
  var toNumber = kotlin_kotlin.$_$.s9;
  var isNaN_0 = kotlin_kotlin.$_$.fg;
  var numberToLong = kotlin_kotlin.$_$.o9;
  var IllegalStateException = kotlin_kotlin.$_$.ef;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.n1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.o2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ig;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(AttributeKey, 'AttributeKey');
  function get(key) {
    var tmp0_elvis_lhs = this.w29(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No instance for key ' + key.toString());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  initMetadataForInterface(Attributes, 'Attributes');
  initMetadataForClass(CaseInsensitiveMap, 'CaseInsensitiveMap', CaseInsensitiveMap, VOID, [KtMutableMap]);
  initMetadataForClass(Entry_0, 'Entry', VOID, VOID, [Entry]);
  initMetadataForClass(SilentSupervisor$$inlined$CoroutineExceptionHandler$1, VOID, VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Element]);
  initMetadataForClass(DelegatingMutableSet$iterator$1);
  initMetadataForClass(DelegatingMutableSet, 'DelegatingMutableSet', VOID, VOID, [KtMutableSet]);
  initMetadataForObject(PlatformUtils, 'PlatformUtils');
  initMetadataForClass(Platform, 'Platform');
  initMetadataForObject(Jvm, 'Jvm', VOID, Platform);
  initMetadataForObject(Native, 'Native', VOID, Platform);
  initMetadataForClass(Js, 'Js', VOID, Platform);
  initMetadataForClass(WasmJs, 'WasmJs', VOID, Platform);
  initMetadataForClass(JsPlatform, 'JsPlatform', VOID, Enum);
  function get_0(name) {
    var tmp0_safe_receiver = this.n2b(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  }
  function forEach(body) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.k2b().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var k = element.l1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.m1();
      body(k, v);
    }
    return Unit_instance;
  }
  initMetadataForInterface(StringValues, 'StringValues');
  initMetadataForClass(StringValuesBuilderImpl, 'StringValuesBuilderImpl', StringValuesBuilderImpl);
  initMetadataForClass(StringValuesImpl, 'StringValuesImpl', StringValuesImpl, VOID, [StringValues]);
  initMetadataForClass(StringValuesSingleImpl$entries$1, VOID, VOID, VOID, [Entry]);
  initMetadataForClass(StringValuesSingleImpl, 'StringValuesSingleImpl', VOID, VOID, [StringValues]);
  initMetadataForClass(CaseInsensitiveString, 'CaseInsensitiveString');
  initMetadataForClass(CopyOnWriteHashMap, 'CopyOnWriteHashMap', CopyOnWriteHashMap);
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(GMTDate, 'GMTDate', VOID, VOID, [Comparable], VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(WeekDay, 'WeekDay', VOID, Enum);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Month, 'Month', VOID, Enum);
  initMetadataForClass(LockFreeLinkedListNode, 'LockFreeLinkedListNode');
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForClass(Removed, 'Removed');
  initMetadataForClass(OpDescriptor, 'OpDescriptor');
  initMetadataForCoroutine($proceedLoopCOROUTINE$, CoroutineImpl);
  initMetadataForClass(PipelineContext, 'PipelineContext', VOID, VOID, [CoroutineScope], [1, 0]);
  initMetadataForClass(DebugPipelineContext, 'DebugPipelineContext', VOID, PipelineContext, VOID, [1, 0]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(PhaseContent, 'PhaseContent');
  initMetadataForClass(Pipeline, 'Pipeline', VOID, VOID, VOID, [2]);
  initMetadataForClass(PipelinePhase, 'PipelinePhase');
  initMetadataForClass(InvalidPhaseException, 'InvalidPhaseException', VOID, Error);
  initMetadataForClass(PipelinePhaseRelation, 'PipelinePhaseRelation');
  initMetadataForClass(After, 'After', VOID, PipelinePhaseRelation);
  initMetadataForClass(Before, 'Before', VOID, PipelinePhaseRelation);
  initMetadataForObject(Last, 'Last', VOID, PipelinePhaseRelation);
  initMetadataForClass(SuspendFunctionGun$continuation$1, VOID, VOID, VOID, [Continuation]);
  initMetadataForClass(SuspendFunctionGun, 'SuspendFunctionGun', VOID, PipelineContext, VOID, [0, 1]);
  initMetadataForClass(TypeInfo, 'TypeInfo');
  initMetadataForClass(InvalidTimestampException, 'InvalidTimestampException', VOID, IllegalStateException);
  initMetadataForClass(AttributesJs, 'AttributesJs', AttributesJs, VOID, [Attributes]);
  initMetadataForClass(KtorSimpleLogger$1);
  initMetadataForClass(LogLevel, 'LogLevel', VOID, Enum);
  //endregion
  function AttributeKey(name, type) {
    var tmp;
    if (type === VOID) {
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_0 = PrimitiveClasses_getInstance().db();
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(PrimitiveClasses_getInstance().db(), arrayOf([]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$0 = tmp_1;
      tmp = new TypeInfo(tmp_0, tmp$ret$0);
    } else {
      tmp = type;
    }
    type = tmp;
    this.t29_1 = name;
    this.u29_1 = type;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.t29_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      var message = "Name can't be blank";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(AttributeKey).toString = function () {
    return 'AttributeKey: ' + this.t29_1;
  };
  protoOf(AttributeKey).hashCode = function () {
    var result = getStringHashCode(this.t29_1);
    result = imul(result, 31) + this.u29_1.hashCode() | 0;
    return result;
  };
  protoOf(AttributeKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AttributeKey))
      return false;
    if (!(this.t29_1 === other.t29_1))
      return false;
    if (!this.u29_1.equals(other.u29_1))
      return false;
    return true;
  };
  function Attributes() {
  }
  function putAll(_this__u8e3s4, other) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = other.b2a().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      _this__u8e3s4.y29(element instanceof AttributeKey ? element : THROW_CCE(), other.v29(element));
    }
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj($this$DelegatingMutableSet) {
    return $this$DelegatingMutableSet.c2a_1;
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0($this$DelegatingMutableSet) {
    return caseInsensitive($this$DelegatingMutableSet);
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19($this$DelegatingMutableSet) {
    return new Entry_0($this$DelegatingMutableSet.l1().c2a_1, $this$DelegatingMutableSet.m1());
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19_0($this$DelegatingMutableSet) {
    return new Entry_0(caseInsensitive($this$DelegatingMutableSet.l1()), $this$DelegatingMutableSet.m1());
  }
  function CaseInsensitiveMap() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.e2a_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(CaseInsensitiveMap).e1 = function () {
    return this.e2a_1.e1();
  };
  protoOf(CaseInsensitiveMap).f2a = function (key) {
    return this.e2a_1.q2(new CaseInsensitiveString(key));
  };
  protoOf(CaseInsensitiveMap).q2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.f2a((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).g2a = function (value) {
    return this.e2a_1.r2(value);
  };
  protoOf(CaseInsensitiveMap).r2 = function (value) {
    if (!!(value == null))
      return false;
    return this.g2a(!(value == null) ? value : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).h2a = function (key) {
    return this.e2a_1.s2(caseInsensitive(key));
  };
  protoOf(CaseInsensitiveMap).s2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.h2a((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).r = function () {
    return this.e2a_1.r();
  };
  protoOf(CaseInsensitiveMap).y2 = function () {
    this.e2a_1.y2();
  };
  protoOf(CaseInsensitiveMap).i2a = function (key, value) {
    return this.e2a_1.v2(caseInsensitive(key), value);
  };
  protoOf(CaseInsensitiveMap).v2 = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.i2a(tmp, !(value == null) ? value : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).j2a = function (from) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = from.k1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var key = element.l1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.m1();
      this.i2a(key, value);
    }
  };
  protoOf(CaseInsensitiveMap).x2 = function (from) {
    return this.j2a(from);
  };
  protoOf(CaseInsensitiveMap).k2a = function (key) {
    return this.e2a_1.w2(caseInsensitive(key));
  };
  protoOf(CaseInsensitiveMap).w2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.k2a((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).t2 = function () {
    var tmp = this.e2a_1.t2();
    var tmp_0 = CaseInsensitiveMap$_get_keys_$lambda_ptzlqj;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0);
  };
  protoOf(CaseInsensitiveMap).k1 = function () {
    var tmp = this.e2a_1.k1();
    var tmp_0 = CaseInsensitiveMap$_get_entries_$lambda_r32w19;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_entries_$lambda_r32w19_0);
  };
  protoOf(CaseInsensitiveMap).u2 = function () {
    return this.e2a_1.u2();
  };
  protoOf(CaseInsensitiveMap).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof CaseInsensitiveMap);
    }
    if (tmp)
      return false;
    return equals(other.e2a_1, this.e2a_1);
  };
  protoOf(CaseInsensitiveMap).hashCode = function () {
    return hashCode(this.e2a_1);
  };
  function Entry_0(key, value) {
    this.l2a_1 = key;
    this.m2a_1 = value;
  }
  protoOf(Entry_0).l1 = function () {
    return this.l2a_1;
  };
  protoOf(Entry_0).m1 = function () {
    return this.m2a_1;
  };
  protoOf(Entry_0).hashCode = function () {
    return (527 + hashCode(ensureNotNull(this.l2a_1)) | 0) + hashCode(ensureNotNull(this.m2a_1)) | 0;
  };
  protoOf(Entry_0).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !isInterface(other, Entry);
    }
    if (tmp)
      return false;
    return equals(other.l1(), this.l2a_1) && equals(other.m1(), this.m2a_1);
  };
  protoOf(Entry_0).toString = function () {
    return toString_0(this.l2a_1) + '=' + toString_0(this.m2a_1);
  };
  function toCharArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.length;
    var tmp_1 = charArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = charCodeAt(_this__u8e3s4, tmp_2);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function isLowerCase(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercaseChar' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2 = toString_1(_this__u8e3s4).toLowerCase();
    return charCodeAt(tmp$ret$2, 0) === _this__u8e3s4;
  }
  function caseInsensitiveMap() {
    return new CaseInsensitiveMap();
  }
  function SilentSupervisor(parent) {
    parent = parent === VOID ? null : parent;
    var tmp = SupervisorJob(parent);
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    var tmp$ret$0 = new SilentSupervisor$$inlined$CoroutineExceptionHandler$1();
    return tmp.bh(tmp$ret$0);
  }
  function SilentSupervisor$$inlined$CoroutineExceptionHandler$1() {
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(SilentSupervisor$$inlined$CoroutineExceptionHandler$1).r1k = function (context, exception) {
    return Unit_instance;
  };
  function DelegatingMutableSet$iterator$1(this$0) {
    this.p2a_1 = this$0;
    this.o2a_1 = this$0.q2a_1.t();
  }
  protoOf(DelegatingMutableSet$iterator$1).u = function () {
    return this.o2a_1.u();
  };
  protoOf(DelegatingMutableSet$iterator$1).v = function () {
    return this.p2a_1.r2a_1(this.o2a_1.v());
  };
  protoOf(DelegatingMutableSet$iterator$1).j4 = function () {
    return this.o2a_1.j4();
  };
  function DelegatingMutableSet(delegate, convertTo, convert) {
    this.q2a_1 = delegate;
    this.r2a_1 = convertTo;
    this.s2a_1 = convert;
    this.t2a_1 = this.q2a_1.e1();
  }
  protoOf(DelegatingMutableSet).u2a = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var _iterator__ex2g4s = _this__u8e3s4.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$0 = this.s2a_1(item);
      destination.b1(tmp$ret$0);
    }
    return destination;
  };
  protoOf(DelegatingMutableSet).v2a = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var _iterator__ex2g4s = _this__u8e3s4.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$0 = this.r2a_1(item);
      destination.b1(tmp$ret$0);
    }
    return destination;
  };
  protoOf(DelegatingMutableSet).e1 = function () {
    return this.t2a_1;
  };
  protoOf(DelegatingMutableSet).w2a = function (element) {
    return this.q2a_1.b1(this.s2a_1(element));
  };
  protoOf(DelegatingMutableSet).b1 = function (element) {
    return this.w2a((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).x2a = function (elements) {
    return this.q2a_1.i1(this.u2a(elements));
  };
  protoOf(DelegatingMutableSet).i1 = function (elements) {
    return this.x2a(elements);
  };
  protoOf(DelegatingMutableSet).y2 = function () {
    this.q2a_1.y2();
  };
  protoOf(DelegatingMutableSet).y2a = function (element) {
    return this.q2a_1.i2(this.s2a_1(element));
  };
  protoOf(DelegatingMutableSet).i2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.y2a((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).z2a = function (elements) {
    return this.q2a_1.j2(this.u2a(elements));
  };
  protoOf(DelegatingMutableSet).j2 = function (elements) {
    return this.z2a(elements);
  };
  protoOf(DelegatingMutableSet).r = function () {
    return this.q2a_1.r();
  };
  protoOf(DelegatingMutableSet).t = function () {
    return new DelegatingMutableSet$iterator$1(this);
  };
  protoOf(DelegatingMutableSet).hashCode = function () {
    return hashCode(this.q2a_1);
  };
  protoOf(DelegatingMutableSet).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !isInterface(other, KtSet);
    }
    if (tmp)
      return false;
    var elements = this.v2a(this.q2a_1);
    var tmp_0;
    if (other.j2(elements)) {
      // Inline function 'kotlin.collections.containsAll' call
      tmp_0 = elements.j2(other);
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  protoOf(DelegatingMutableSet).toString = function () {
    return toString(this.v2a(this.q2a_1));
  };
  function PlatformUtils() {
    PlatformUtils_instance = this;
    var tmp = this;
    var platform = get_platform(this);
    var tmp_0;
    if (platform instanceof Js) {
      tmp_0 = platform.b2b_1.equals(JsPlatform_Browser_getInstance());
    } else {
      if (platform instanceof WasmJs) {
        tmp_0 = platform.a2b_1.equals(JsPlatform_Browser_getInstance());
      } else {
        tmp_0 = false;
      }
    }
    tmp.c2b_1 = tmp_0;
    var tmp_1 = this;
    var platform_0 = get_platform(this);
    var tmp_2;
    if (platform_0 instanceof Js) {
      tmp_2 = platform_0.b2b_1.equals(JsPlatform_Node_getInstance());
    } else {
      if (platform_0 instanceof WasmJs) {
        tmp_2 = platform_0.a2b_1.equals(JsPlatform_Node_getInstance());
      } else {
        tmp_2 = false;
      }
    }
    tmp_1.d2b_1 = tmp_2;
    var tmp_3 = this;
    var tmp_4 = get_platform(this);
    tmp_3.e2b_1 = tmp_4 instanceof Js;
    var tmp_5 = this;
    var tmp_6 = get_platform(this);
    tmp_5.f2b_1 = tmp_6 instanceof WasmJs;
    this.g2b_1 = equals(get_platform(this), Jvm_getInstance());
    this.h2b_1 = equals(get_platform(this), Native_getInstance());
    this.i2b_1 = get_isDevelopmentMode(this);
    this.j2b_1 = true;
  }
  var PlatformUtils_instance;
  function PlatformUtils_getInstance() {
    if (PlatformUtils_instance == null)
      new PlatformUtils();
    return PlatformUtils_instance;
  }
  var JsPlatform_Browser_instance;
  var JsPlatform_Node_instance;
  var JsPlatform_entriesInitialized;
  function JsPlatform_initEntries() {
    if (JsPlatform_entriesInitialized)
      return Unit_instance;
    JsPlatform_entriesInitialized = true;
    JsPlatform_Browser_instance = new JsPlatform('Browser', 0);
    JsPlatform_Node_instance = new JsPlatform('Node', 1);
  }
  function Jvm() {
    Jvm_instance = this;
    Platform.call(this);
  }
  protoOf(Jvm).toString = function () {
    return 'Jvm';
  };
  protoOf(Jvm).hashCode = function () {
    return 1051825272;
  };
  protoOf(Jvm).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Jvm))
      return false;
    return true;
  };
  var Jvm_instance;
  function Jvm_getInstance() {
    if (Jvm_instance == null)
      new Jvm();
    return Jvm_instance;
  }
  function Native() {
    Native_instance = this;
    Platform.call(this);
  }
  protoOf(Native).toString = function () {
    return 'Native';
  };
  protoOf(Native).hashCode = function () {
    return -1059277600;
  };
  protoOf(Native).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Native))
      return false;
    return true;
  };
  var Native_instance;
  function Native_getInstance() {
    if (Native_instance == null)
      new Native();
    return Native_instance;
  }
  function Js(jsPlatform) {
    Platform.call(this);
    this.b2b_1 = jsPlatform;
  }
  protoOf(Js).toString = function () {
    return 'Js(jsPlatform=' + this.b2b_1.toString() + ')';
  };
  protoOf(Js).hashCode = function () {
    return this.b2b_1.hashCode();
  };
  protoOf(Js).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Js))
      return false;
    if (!this.b2b_1.equals(other.b2b_1))
      return false;
    return true;
  };
  function WasmJs() {
  }
  function JsPlatform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function JsPlatform_Browser_getInstance() {
    JsPlatform_initEntries();
    return JsPlatform_Browser_instance;
  }
  function JsPlatform_Node_getInstance() {
    JsPlatform_initEntries();
    return JsPlatform_Node_instance;
  }
  function Platform() {
  }
  function appendAll(_this__u8e3s4, builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = builder.k2b().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var name = element.l1();
      // Inline function 'kotlin.collections.component2' call
      var values = element.m1();
      _this__u8e3s4.l2b(name, values);
    }
    return _this__u8e3s4;
  }
  function StringValues() {
  }
  function ensureListForKey($this, name) {
    var tmp0_elvis_lhs = $this.r2b_1.s2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableListOf' call
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$_0();
      $this.s2b(name);
      // Inline function 'kotlin.collections.set' call
      $this.r2b_1.v2(name, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StringValuesBuilderImpl$appendAll$lambda(this$0) {
    return function (name, values) {
      this$0.l2b(name, values);
      return Unit_instance;
    };
  }
  function StringValuesBuilderImpl(caseInsensitiveName, size) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    size = size === VOID ? 8 : size;
    this.q2b_1 = caseInsensitiveName;
    this.r2b_1 = this.q2b_1 ? caseInsensitiveMap() : LinkedHashMap_init_$Create$_0(size);
  }
  protoOf(StringValuesBuilderImpl).m2b = function () {
    return this.q2b_1;
  };
  protoOf(StringValuesBuilderImpl).n2b = function (name) {
    return this.r2b_1.s2(name);
  };
  protoOf(StringValuesBuilderImpl).o2b = function () {
    return this.r2b_1.t2();
  };
  protoOf(StringValuesBuilderImpl).r = function () {
    return this.r2b_1.r();
  };
  protoOf(StringValuesBuilderImpl).k2b = function () {
    return unmodifiable(this.r2b_1.k1());
  };
  protoOf(StringValuesBuilderImpl).t2b = function (name, value) {
    this.u2b(value);
    var list = ensureListForKey(this, name);
    list.y2();
    list.b1(value);
  };
  protoOf(StringValuesBuilderImpl).h2a = function (name) {
    var tmp0_safe_receiver = this.n2b(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesBuilderImpl).v2b = function (name, value) {
    this.u2b(value);
    ensureListForKey(this, name).b1(value);
  };
  protoOf(StringValuesBuilderImpl).w2b = function (stringValues) {
    stringValues.p2b(StringValuesBuilderImpl$appendAll$lambda(this));
  };
  protoOf(StringValuesBuilderImpl).l2b = function (name, values) {
    // Inline function 'kotlin.let' call
    var list = ensureListForKey(this, name);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      this.u2b(element);
    }
    addAll(list, values);
  };
  protoOf(StringValuesBuilderImpl).x2b = function (name) {
    this.r2b_1.w2(name);
  };
  protoOf(StringValuesBuilderImpl).y2 = function () {
    this.r2b_1.y2();
  };
  protoOf(StringValuesBuilderImpl).s2b = function (name) {
  };
  protoOf(StringValuesBuilderImpl).u2b = function (value) {
  };
  function listForKey($this, name) {
    return $this.z2b_1.s2(name);
  }
  function StringValuesImpl(caseInsensitiveName, values) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    values = values === VOID ? emptyMap() : values;
    this.y2b_1 = caseInsensitiveName;
    var tmp;
    if (this.y2b_1) {
      tmp = caseInsensitiveMap();
    } else {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    }
    var newMap = tmp;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = values.k1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var key = element.l1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.m1();
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = value.e1();
      var list = ArrayList_init_$Create$(size);
      // Inline function 'kotlin.repeat' call
      var inductionVariable = 0;
      if (inductionVariable < size)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$4 = value.d1(index);
          list.b1(tmp$ret$4);
        }
         while (inductionVariable < size);
      // Inline function 'kotlin.collections.set' call
      newMap.v2(key, list);
    }
    this.z2b_1 = newMap;
  }
  protoOf(StringValuesImpl).m2b = function () {
    return this.y2b_1;
  };
  protoOf(StringValuesImpl).h2a = function (name) {
    var tmp0_safe_receiver = listForKey(this, name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesImpl).n2b = function (name) {
    return listForKey(this, name);
  };
  protoOf(StringValuesImpl).o2b = function () {
    return unmodifiable(this.z2b_1.t2());
  };
  protoOf(StringValuesImpl).r = function () {
    return this.z2b_1.r();
  };
  protoOf(StringValuesImpl).k2b = function () {
    return unmodifiable(this.z2b_1.k1());
  };
  protoOf(StringValuesImpl).p2b = function (body) {
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.z2b_1.k1().t();
    while (_iterator__ex2g4s.u()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.l1();
      // Inline function 'kotlin.collections.component2' call
      var value = _destruct__k2r9zo.m1();
      body(key, value);
    }
  };
  protoOf(StringValuesImpl).toString = function () {
    return 'StringValues(case=' + !this.y2b_1 + ') ' + toString(this.k2b());
  };
  protoOf(StringValuesImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.y2b_1 === other.m2b()))
      return false;
    return entriesEquals(this.k2b(), other.k2b());
  };
  protoOf(StringValuesImpl).hashCode = function () {
    return entriesHashCode(this.k2b(), imul(31, getBooleanHashCode(this.y2b_1)));
  };
  function StringValuesSingleImpl$entries$1(this$0) {
    this.a2c_1 = this$0.d2c_1;
    this.b2c_1 = this$0.e2c_1;
  }
  protoOf(StringValuesSingleImpl$entries$1).l1 = function () {
    return this.a2c_1;
  };
  protoOf(StringValuesSingleImpl$entries$1).m1 = function () {
    return this.b2c_1;
  };
  protoOf(StringValuesSingleImpl$entries$1).toString = function () {
    return this.a2c_1 + '=' + toString(this.b2c_1);
  };
  protoOf(StringValuesSingleImpl$entries$1).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Entry) : false) {
      tmp_0 = equals(other.l1(), this.a2c_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.m1(), this.b2c_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StringValuesSingleImpl$entries$1).hashCode = function () {
    return getStringHashCode(this.a2c_1) ^ hashCode(this.b2c_1);
  };
  function StringValuesSingleImpl(caseInsensitiveName, name, values) {
    this.c2c_1 = caseInsensitiveName;
    this.d2c_1 = name;
    this.e2c_1 = values;
  }
  protoOf(StringValuesSingleImpl).m2b = function () {
    return this.c2c_1;
  };
  protoOf(StringValuesSingleImpl).n2b = function (name) {
    return equals_0(this.d2c_1, name, this.m2b()) ? this.e2c_1 : null;
  };
  protoOf(StringValuesSingleImpl).k2b = function () {
    return setOf(new StringValuesSingleImpl$entries$1(this));
  };
  protoOf(StringValuesSingleImpl).r = function () {
    return false;
  };
  protoOf(StringValuesSingleImpl).o2b = function () {
    return setOf(this.d2c_1);
  };
  protoOf(StringValuesSingleImpl).toString = function () {
    return 'StringValues(case=' + !this.m2b() + ') ' + toString(this.k2b());
  };
  protoOf(StringValuesSingleImpl).hashCode = function () {
    return entriesHashCode(this.k2b(), imul(31, getBooleanHashCode(this.m2b())));
  };
  protoOf(StringValuesSingleImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.m2b() === other.m2b()))
      return false;
    return entriesEquals(this.k2b(), other.k2b());
  };
  protoOf(StringValuesSingleImpl).p2b = function (body) {
    return body(this.d2c_1, this.e2c_1);
  };
  protoOf(StringValuesSingleImpl).h2a = function (name) {
    return equals_0(name, this.d2c_1, this.m2b()) ? firstOrNull(this.e2c_1) : null;
  };
  function entriesEquals(a, b) {
    return equals(a, b);
  }
  function entriesHashCode(entries, seed) {
    return imul(seed, 31) + hashCode(entries) | 0;
  }
  function toMap(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.k2b();
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var tmp = element.l1();
      var tmp$ret$1 = toList(element.m1());
      destination.v2(tmp, tmp$ret$1);
    }
    return destination;
  }
  function toLowerCasePreservingASCIIRules(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var it = charSequenceGet(_this__u8e3s4, index);
          if (!(toLowerCasePreservingASCII(it) === it)) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var firstIndex = tmp$ret$1;
    if (firstIndex === -1) {
      return _this__u8e3s4;
    }
    var original = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    var capacity = _this__u8e3s4.length;
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    this_0.xb(original, 0, firstIndex);
    var inductionVariable_0 = firstIndex;
    var last_0 = get_lastIndex(original);
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.s(toLowerCasePreservingASCII(charCodeAt(original, index_0)));
      }
       while (!(index_0 === last_0));
    return this_0.toString();
  }
  function toLowerCasePreservingASCII(ch) {
    var tmp;
    if (_Char___init__impl__6a9atx(65) <= ch ? ch <= _Char___init__impl__6a9atx(90) : false) {
      tmp = Char__plus_impl_qi7pgj(ch, 32);
    } else if (_Char___init__impl__6a9atx(0) <= ch ? ch <= _Char___init__impl__6a9atx(127) : false) {
      tmp = ch;
    } else {
      // Inline function 'kotlin.text.lowercaseChar' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2 = toString_1(ch).toLowerCase();
      tmp = charCodeAt(tmp$ret$2, 0);
    }
    return tmp;
  }
  function CaseInsensitiveString(content) {
    this.c2a_1 = content;
    var temp = 0;
    var indexedObject = this.c2a_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = charCodeAt(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var tmp = imul(temp, 31);
      // Inline function 'kotlin.text.lowercaseChar' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2 = toString_1(element).toLowerCase();
      // Inline function 'kotlin.code' call
      var this_0 = charCodeAt(tmp$ret$2, 0);
      temp = tmp + Char__toInt_impl_vasixd(this_0) | 0;
    }
    this.d2a_1 = temp;
  }
  protoOf(CaseInsensitiveString).equals = function (other) {
    var tmp0_safe_receiver = other instanceof CaseInsensitiveString ? other : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c2a_1;
    return (tmp1_safe_receiver == null ? null : equals_0(tmp1_safe_receiver, this.c2a_1, true)) === true;
  };
  protoOf(CaseInsensitiveString).hashCode = function () {
    return this.d2a_1;
  };
  protoOf(CaseInsensitiveString).toString = function () {
    return this.c2a_1;
  };
  function caseInsensitive(_this__u8e3s4) {
    return new CaseInsensitiveString(_this__u8e3s4);
  }
  function CopyOnWriteHashMap() {
    this.f2c_1 = atomic$ref$1(emptyMap());
  }
  protoOf(CopyOnWriteHashMap).g2c = function (key) {
    return this.f2c_1.kotlinx$atomicfu$value.s2(key);
  };
  function GMTDate$Companion$$childSerializers$_anonymous__gyfycy() {
    return createSimpleEnumSerializer('io.ktor.util.date.WeekDay', values());
  }
  function GMTDate$Companion$$childSerializers$_anonymous__gyfycy_0() {
    return createSimpleEnumSerializer('io.ktor.util.date.Month', values_0());
  }
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, GMTDate$Companion$$childSerializers$_anonymous__gyfycy);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.h2c_1 = [null, null, null, tmp_1, null, null, lazy(tmp_2, GMTDate$Companion$$childSerializers$_anonymous__gyfycy_0), null, null];
    this.i2c_1 = GMTDate_0(new Long(0, 0));
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('io.ktor.util.date.GMTDate', this, 9);
    tmp0_serialDesc.vy('seconds', false);
    tmp0_serialDesc.vy('minutes', false);
    tmp0_serialDesc.vy('hours', false);
    tmp0_serialDesc.vy('dayOfWeek', false);
    tmp0_serialDesc.vy('dayOfMonth', false);
    tmp0_serialDesc.vy('dayOfYear', false);
    tmp0_serialDesc.vy('month', false);
    tmp0_serialDesc.vy('year', false);
    tmp0_serialDesc.vy('timestamp', false);
    this.j2c_1 = tmp0_serialDesc;
  }
  protoOf($serializer).k2c = function (encoder, value) {
    var tmp0_desc = this.j2c_1;
    var tmp1_output = encoder.fr(tmp0_desc);
    var tmp2_cached = Companion_getInstance().h2c_1;
    tmp1_output.ps(tmp0_desc, 0, value.l2c_1);
    tmp1_output.ps(tmp0_desc, 1, value.m2c_1);
    tmp1_output.ps(tmp0_desc, 2, value.n2c_1);
    tmp1_output.ws(tmp0_desc, 3, tmp2_cached[3].m1(), value.o2c_1);
    tmp1_output.ps(tmp0_desc, 4, value.p2c_1);
    tmp1_output.ps(tmp0_desc, 5, value.q2c_1);
    tmp1_output.ws(tmp0_desc, 6, tmp2_cached[6].m1(), value.r2c_1);
    tmp1_output.ps(tmp0_desc, 7, value.s2c_1);
    tmp1_output.qs(tmp0_desc, 8, value.t2c_1);
    tmp1_output.gr(tmp0_desc);
  };
  protoOf($serializer).fo = function (encoder, value) {
    return this.k2c(encoder, value instanceof GMTDate ? value : THROW_CCE());
  };
  protoOf($serializer).go = function (decoder) {
    var tmp0_desc = this.j2c_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_local4 = 0;
    var tmp9_local5 = 0;
    var tmp10_local6 = null;
    var tmp11_local7 = 0;
    var tmp12_local8 = new Long(0, 0);
    var tmp13_input = decoder.fr(tmp0_desc);
    var tmp14_cached = Companion_getInstance().h2c_1;
    if (tmp13_input.vr()) {
      tmp4_local0 = tmp13_input.kr(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.kr(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.kr(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.rr(tmp0_desc, 3, tmp14_cached[3].m1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.kr(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.kr(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.rr(tmp0_desc, 6, tmp14_cached[6].m1(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.kr(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.lr(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.wr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.kr(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.kr(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.kr(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.rr(tmp0_desc, 3, tmp14_cached[3].m1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.kr(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.kr(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.rr(tmp0_desc, 6, tmp14_cached[6].m1(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.kr(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.lr(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.gr(tmp0_desc);
    return GMTDate_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer).eo = function () {
    return this.j2c_1;
  };
  protoOf($serializer).kz = function () {
    var tmp0_cached = Companion_getInstance().h2c_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), tmp0_cached[3].m1(), IntSerializer_getInstance(), IntSerializer_getInstance(), tmp0_cached[6].m1(), IntSerializer_getInstance(), LongSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function GMTDate_init_$Init$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker, $this) {
    if (!(511 === (511 & seen0))) {
      throwMissingFieldException(seen0, 511, $serializer_getInstance().j2c_1);
    }
    $this.l2c_1 = seconds;
    $this.m2c_1 = minutes;
    $this.n2c_1 = hours;
    $this.o2c_1 = dayOfWeek;
    $this.p2c_1 = dayOfMonth;
    $this.q2c_1 = dayOfYear;
    $this.r2c_1 = month;
    $this.s2c_1 = year;
    $this.t2c_1 = timestamp;
    return $this;
  }
  function GMTDate_init_$Create$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker) {
    return GMTDate_init_$Init$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker, objectCreate(protoOf(GMTDate)));
  }
  function GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    Companion_getInstance();
    this.l2c_1 = seconds;
    this.m2c_1 = minutes;
    this.n2c_1 = hours;
    this.o2c_1 = dayOfWeek;
    this.p2c_1 = dayOfMonth;
    this.q2c_1 = dayOfYear;
    this.r2c_1 = month;
    this.s2c_1 = year;
    this.t2c_1 = timestamp;
  }
  protoOf(GMTDate).u2c = function (other) {
    return this.t2c_1.j3(other.t2c_1);
  };
  protoOf(GMTDate).d = function (other) {
    return this.u2c(other instanceof GMTDate ? other : THROW_CCE());
  };
  protoOf(GMTDate).toString = function () {
    return 'GMTDate(seconds=' + this.l2c_1 + ', minutes=' + this.m2c_1 + ', hours=' + this.n2c_1 + ', dayOfWeek=' + this.o2c_1.toString() + ', dayOfMonth=' + this.p2c_1 + ', dayOfYear=' + this.q2c_1 + ', month=' + this.r2c_1.toString() + ', year=' + this.s2c_1 + ', timestamp=' + this.t2c_1.toString() + ')';
  };
  protoOf(GMTDate).hashCode = function () {
    var result = this.l2c_1;
    result = imul(result, 31) + this.m2c_1 | 0;
    result = imul(result, 31) + this.n2c_1 | 0;
    result = imul(result, 31) + this.o2c_1.hashCode() | 0;
    result = imul(result, 31) + this.p2c_1 | 0;
    result = imul(result, 31) + this.q2c_1 | 0;
    result = imul(result, 31) + this.r2c_1.hashCode() | 0;
    result = imul(result, 31) + this.s2c_1 | 0;
    result = imul(result, 31) + this.t2c_1.hashCode() | 0;
    return result;
  };
  protoOf(GMTDate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GMTDate))
      return false;
    if (!(this.l2c_1 === other.l2c_1))
      return false;
    if (!(this.m2c_1 === other.m2c_1))
      return false;
    if (!(this.n2c_1 === other.n2c_1))
      return false;
    if (!this.o2c_1.equals(other.o2c_1))
      return false;
    if (!(this.p2c_1 === other.p2c_1))
      return false;
    if (!(this.q2c_1 === other.q2c_1))
      return false;
    if (!this.r2c_1.equals(other.r2c_1))
      return false;
    if (!(this.s2c_1 === other.s2c_1))
      return false;
    if (!equalsLong(this.t2c_1, other.t2c_1))
      return false;
    return true;
  };
  var WeekDay_MONDAY_instance;
  var WeekDay_TUESDAY_instance;
  var WeekDay_WEDNESDAY_instance;
  var WeekDay_THURSDAY_instance;
  var WeekDay_FRIDAY_instance;
  var WeekDay_SATURDAY_instance;
  var WeekDay_SUNDAY_instance;
  function Companion_0() {
  }
  protoOf(Companion_0).v2c = function (ordinal) {
    return get_entries().d1(ordinal);
  };
  var Companion_instance_1;
  function Companion_getInstance_0() {
    return Companion_instance_1;
  }
  function values() {
    return [WeekDay_MONDAY_getInstance(), WeekDay_TUESDAY_getInstance(), WeekDay_WEDNESDAY_getInstance(), WeekDay_THURSDAY_getInstance(), WeekDay_FRIDAY_getInstance(), WeekDay_SATURDAY_getInstance(), WeekDay_SUNDAY_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var WeekDay_entriesInitialized;
  function WeekDay_initEntries() {
    if (WeekDay_entriesInitialized)
      return Unit_instance;
    WeekDay_entriesInitialized = true;
    WeekDay_MONDAY_instance = new WeekDay('MONDAY', 0, 'Mon');
    WeekDay_TUESDAY_instance = new WeekDay('TUESDAY', 1, 'Tue');
    WeekDay_WEDNESDAY_instance = new WeekDay('WEDNESDAY', 2, 'Wed');
    WeekDay_THURSDAY_instance = new WeekDay('THURSDAY', 3, 'Thu');
    WeekDay_FRIDAY_instance = new WeekDay('FRIDAY', 4, 'Fri');
    WeekDay_SATURDAY_instance = new WeekDay('SATURDAY', 5, 'Sat');
    WeekDay_SUNDAY_instance = new WeekDay('SUNDAY', 6, 'Sun');
  }
  var $ENTRIES;
  function WeekDay(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.y2c_1 = value;
  }
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function Companion_1() {
  }
  protoOf(Companion_1).v2c = function (ordinal) {
    return get_entries_0().d1(ordinal);
  };
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function values_0() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_instance;
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month('JANUARY', 0, 'Jan');
    Month_FEBRUARY_instance = new Month('FEBRUARY', 1, 'Feb');
    Month_MARCH_instance = new Month('MARCH', 2, 'Mar');
    Month_APRIL_instance = new Month('APRIL', 3, 'Apr');
    Month_MAY_instance = new Month('MAY', 4, 'May');
    Month_JUNE_instance = new Month('JUNE', 5, 'Jun');
    Month_JULY_instance = new Month('JULY', 6, 'Jul');
    Month_AUGUST_instance = new Month('AUGUST', 7, 'Aug');
    Month_SEPTEMBER_instance = new Month('SEPTEMBER', 8, 'Sep');
    Month_OCTOBER_instance = new Month('OCTOBER', 9, 'Oct');
    Month_NOVEMBER_instance = new Month('NOVEMBER', 10, 'Nov');
    Month_DECEMBER_instance = new Month('DECEMBER', 11, 'Dec');
  }
  var $ENTRIES_0;
  function Month(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.b2d_1 = value;
  }
  function WeekDay_MONDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_MONDAY_instance;
  }
  function WeekDay_TUESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_TUESDAY_instance;
  }
  function WeekDay_WEDNESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_WEDNESDAY_instance;
  }
  function WeekDay_THURSDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_THURSDAY_instance;
  }
  function WeekDay_FRIDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_FRIDAY_instance;
  }
  function WeekDay_SATURDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SATURDAY_instance;
  }
  function WeekDay_SUNDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SUNDAY_instance;
  }
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  var CONDITION_FALSE;
  var ALREADY_REMOVED;
  var LIST_EMPTY;
  var REMOVE_PREPARED;
  var NO_DECISION;
  function LockFreeLinkedListNode() {
  }
  protoOf(LockFreeLinkedListNode).w1p = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.c2d_1;
    while (true) {
      var next = this_0.kotlinx$atomicfu$value;
      if (!(next instanceof OpDescriptor))
        return next;
      next.d2d(this);
    }
  };
  protoOf(LockFreeLinkedListNode).e2d = function () {
    return unwrap(this.w1p());
  };
  function Symbol(symbol) {
    this.f2d_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return this.f2d_1;
  };
  function Removed() {
  }
  function OpDescriptor() {
  }
  function unwrap(_this__u8e3s4) {
    _init_properties_LockFreeLinkedList_kt__wekxce();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof Removed ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g2d_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      tmp = _this__u8e3s4 instanceof LockFreeLinkedListNode ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_LockFreeLinkedList_kt_lnmdgw;
  function _init_properties_LockFreeLinkedList_kt__wekxce() {
    if (!properties_initialized_LockFreeLinkedList_kt_lnmdgw) {
      properties_initialized_LockFreeLinkedList_kt_lnmdgw = true;
      CONDITION_FALSE = new Symbol('CONDITION_FALSE');
      ALREADY_REMOVED = new Symbol('ALREADY_REMOVED');
      LIST_EMPTY = new Symbol('LIST_EMPTY');
      REMOVE_PREPARED = new Symbol('REMOVE_PREPARED');
      NO_DECISION = new Symbol('NO_DECISION');
    }
  }
  function proceedLoop($this, $completion) {
    var tmp = new $proceedLoopCOROUTINE$($this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function $proceedLoopCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p2d_1 = _this__u8e3s4;
  }
  protoOf($proceedLoopCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 6;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.q2d_1 = this.p2d_1.w2d_1;
            if (this.q2d_1 === -1) {
              this.n8_1 = 5;
              continue $sm;
            } else {
              this.n8_1 = 2;
              continue $sm;
            }

          case 2:
            this.r2d_1 = this.p2d_1.t2d_1;
            if (this.q2d_1 >= this.r2d_1.e1()) {
              this.p2d_1.x2d();
              this.n8_1 = 5;
              continue $sm;
            } else {
              this.n8_1 = 3;
              continue $sm;
            }

          case 3:
            var executeInterceptor = this.r2d_1.d1(this.q2d_1);
            this.p2d_1.w2d_1 = this.q2d_1 + 1 | 0;
            this.n8_1 = 4;
            suspendResult = executeInterceptor(this.p2d_1, this.p2d_1.v2d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.n8_1 = 1;
            continue $sm;
          case 5:
            return this.p2d_1.v2d_1;
          case 6:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 6) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function DebugPipelineContext(context, interceptors, subject, coroutineContext) {
    PipelineContext.call(this, context);
    this.t2d_1 = interceptors;
    this.u2d_1 = coroutineContext;
    this.v2d_1 = subject;
    this.w2d_1 = 0;
  }
  protoOf(DebugPipelineContext).j1d = function () {
    return this.u2d_1;
  };
  protoOf(DebugPipelineContext).y2d = function () {
    return this.v2d_1;
  };
  protoOf(DebugPipelineContext).x2d = function () {
    this.w2d_1 = -1;
  };
  protoOf(DebugPipelineContext).z2d = function (subject, $completion) {
    this.v2d_1 = subject;
    return this.a2e($completion);
  };
  protoOf(DebugPipelineContext).a2e = function ($completion) {
    var index = this.w2d_1;
    if (index < 0)
      return this.v2d_1;
    if (index >= this.t2d_1.e1()) {
      this.x2d();
      return this.v2d_1;
    }
    return proceedLoop(this, $completion);
  };
  protoOf(DebugPipelineContext).b2e = function (initial, $completion) {
    this.w2d_1 = 0;
    this.v2d_1 = initial;
    return this.a2e($completion);
  };
  function PhaseContent_init_$Init$(phase, relation, $this) {
    var tmp = Companion_getInstance_2().c2e_1;
    PhaseContent.call($this, phase, relation, isInterface(tmp, KtMutableList) ? tmp : THROW_CCE());
    // Inline function 'kotlin.check' call
    if (!Companion_getInstance_2().c2e_1.r()) {
      var message = 'The shared empty array list has been modified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PhaseContent_init_$Create$(phase, relation) {
    return PhaseContent_init_$Init$(phase, relation, objectCreate(protoOf(PhaseContent)));
  }
  function copiedInterceptors($this) {
    return toMutableList($this.f2e_1);
  }
  function copyInterceptors($this) {
    $this.f2e_1 = copiedInterceptors($this);
    $this.g2e_1 = false;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.c2e_1 = ArrayList_init_$Create$_0();
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function PhaseContent(phase, relation, interceptors) {
    Companion_getInstance_2();
    this.d2e_1 = phase;
    this.e2e_1 = relation;
    this.f2e_1 = interceptors;
    this.g2e_1 = true;
  }
  protoOf(PhaseContent).h2e = function () {
    return this.f2e_1.r();
  };
  protoOf(PhaseContent).e1 = function () {
    return this.f2e_1.e1();
  };
  protoOf(PhaseContent).i2e = function (interceptor) {
    if (this.g2e_1) {
      copyInterceptors(this);
    }
    this.f2e_1.b1(interceptor);
  };
  protoOf(PhaseContent).j2e = function (destination) {
    var interceptors = this.f2e_1;
    if (destination instanceof ArrayList) {
      destination.r5(destination.e1() + interceptors.e1() | 0);
    }
    var inductionVariable = 0;
    var last = interceptors.e1();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        destination.b1(interceptors.d1(index));
      }
       while (inductionVariable < last);
  };
  protoOf(PhaseContent).k2e = function () {
    this.g2e_1 = true;
    return this.f2e_1;
  };
  protoOf(PhaseContent).toString = function () {
    return 'Phase `' + this.d2e_1.l2e_1 + '`, ' + this.e1() + ' handlers';
  };
  function _set_interceptors__wod97b($this, _set____db54di) {
    var tmp0 = $this.q2e_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Pipeline$_get_interceptors_$ref_u6zl4e_0();
    // Inline function 'kotlinx.atomicfu.AtomicRef.setValue' call
    getPropertyCallableRef('interceptors', 1, tmp, tmp_0, Pipeline$_set_interceptors_$ref_13vc1m_0());
    tmp0.kotlinx$atomicfu$value = _set____db54di;
    return Unit_instance;
  }
  function _get_interceptors__h4min7($this) {
    var tmp0 = $this.q2e_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Pipeline$_get_interceptors_$ref_u6zl4e();
    // Inline function 'kotlinx.atomicfu.AtomicRef.getValue' call
    getPropertyCallableRef('interceptors', 1, tmp, tmp_0, Pipeline$_set_interceptors_$ref_13vc1m());
    return tmp0.kotlinx$atomicfu$value;
  }
  function createContext($this, context, subject, coroutineContext) {
    return pipelineContextFor(context, sharedInterceptorsList($this), subject, coroutineContext, $this.t2e());
  }
  function findPhase($this, phase) {
    var phasesList = $this.o2e_1;
    var inductionVariable = 0;
    var last = phasesList.e1();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.d1(index);
        if (current === phase) {
          var content = PhaseContent_init_$Create$(phase, Last_getInstance());
          phasesList.z2(index, content);
          return content;
        }
        var tmp;
        if (current instanceof PhaseContent) {
          tmp = current.d2e_1 === phase;
        } else {
          tmp = false;
        }
        if (tmp) {
          return current instanceof PhaseContent ? current : THROW_CCE();
        }
      }
       while (inductionVariable < last);
    return null;
  }
  function findPhaseIndex($this, phase) {
    var phasesList = $this.o2e_1;
    var inductionVariable = 0;
    var last = phasesList.e1();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.d1(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.d2e_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return index;
        }
      }
       while (inductionVariable < last);
    return -1;
  }
  function hasPhase($this, phase) {
    var phasesList = $this.o2e_1;
    var inductionVariable = 0;
    var last = phasesList.e1();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.d1(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.d2e_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  }
  function cacheInterceptors($this) {
    var interceptorsQuantity = $this.p2e_1;
    if (interceptorsQuantity === 0) {
      notSharedInterceptorsList($this, emptyList());
      return emptyList();
    }
    var phases = $this.o2e_1;
    if (interceptorsQuantity === 1) {
      var inductionVariable = 0;
      var last = get_lastIndex_0(phases);
      if (inductionVariable <= last)
        $l$loop_0: do {
          var phaseIndex = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = phases.d1(phaseIndex);
          var tmp0_elvis_lhs = tmp instanceof PhaseContent ? tmp : null;
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var phaseContent = tmp_0;
          if (phaseContent.h2e())
            continue $l$loop_0;
          var interceptors = phaseContent.k2e();
          setInterceptorsListFromPhase($this, phaseContent);
          return interceptors;
        }
         while (!(phaseIndex === last));
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$_0();
    var inductionVariable_0 = 0;
    var last_0 = get_lastIndex_0(phases);
    if (inductionVariable_0 <= last_0)
      $l$loop_1: do {
        var phaseIndex_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp_1 = phases.d1(phaseIndex_0);
        var tmp1_elvis_lhs = tmp_1 instanceof PhaseContent ? tmp_1 : null;
        var tmp_2;
        if (tmp1_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp_2 = tmp1_elvis_lhs;
        }
        var phase = tmp_2;
        phase.j2e(destination);
      }
       while (!(phaseIndex_0 === last_0));
    notSharedInterceptorsList($this, destination);
    return destination;
  }
  function sharedInterceptorsList($this) {
    if (_get_interceptors__h4min7($this) == null) {
      cacheInterceptors($this);
    }
    $this.r2e_1 = true;
    return ensureNotNull(_get_interceptors__h4min7($this));
  }
  function resetInterceptorsList($this) {
    _set_interceptors__wod97b($this, null);
    $this.r2e_1 = false;
    $this.s2e_1 = null;
  }
  function notSharedInterceptorsList($this, list) {
    _set_interceptors__wod97b($this, list);
    $this.r2e_1 = false;
    $this.s2e_1 = null;
  }
  function setInterceptorsListFromPhase($this, phaseContent) {
    _set_interceptors__wod97b($this, phaseContent.k2e());
    $this.r2e_1 = false;
    $this.s2e_1 = phaseContent.d2e_1;
  }
  function tryAddToPhaseFastPath($this, phase, block) {
    var currentInterceptors = _get_interceptors__h4min7($this);
    if ($this.o2e_1.r() || currentInterceptors == null) {
      return false;
    }
    var tmp;
    if ($this.r2e_1) {
      tmp = true;
    } else {
      tmp = !isInterface(currentInterceptors, KtMutableList);
    }
    if (tmp) {
      return false;
    }
    if (equals($this.s2e_1, phase)) {
      currentInterceptors.b1(block);
      return true;
    }
    if (equals(phase, last($this.o2e_1)) || findPhaseIndex($this, phase) === get_lastIndex_0($this.o2e_1)) {
      ensureNotNull(findPhase($this, phase)).i2e(block);
      currentInterceptors.b1(block);
      return true;
    }
    return false;
  }
  function Pipeline$_get_interceptors_$ref_u6zl4e() {
    return function (p0) {
      return _get_interceptors__h4min7(p0);
    };
  }
  function Pipeline$_set_interceptors_$ref_13vc1m() {
    return function (p0, p1) {
      _set_interceptors__wod97b(p0, p1);
      return Unit_instance;
    };
  }
  function Pipeline$_get_interceptors_$ref_u6zl4e_0() {
    return function (p0) {
      return _get_interceptors__h4min7(p0);
    };
  }
  function Pipeline$_set_interceptors_$ref_13vc1m_0() {
    return function (p0, p1) {
      _set_interceptors__wod97b(p0, p1);
      return Unit_instance;
    };
  }
  function Pipeline(phases) {
    this.m2e_1 = AttributesJsFn(true);
    this.n2e_1 = false;
    this.o2e_1 = mutableListOf(phases.slice());
    this.p2e_1 = 0;
    this.q2e_1 = atomic$ref$1(null);
    this.r2e_1 = false;
    this.s2e_1 = null;
  }
  protoOf(Pipeline).t2e = function () {
    return this.n2e_1;
  };
  protoOf(Pipeline).u2e = function (context, subject, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.t8();
    return createContext(this, context, subject, tmp$ret$0).b2e(subject, $completion);
  };
  protoOf(Pipeline).w2e = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_instance;
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference.toString() + ' was not registered for this pipeline');
    }
    var lastRelatedPhaseIndex = index;
    var inductionVariable = index + 1 | 0;
    var last = get_lastIndex_0(this.o2e_1);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.o2e_1.d1(i);
        var tmp0_safe_receiver = tmp instanceof PhaseContent ? tmp : null;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e2e_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var relation = tmp_0;
        var tmp2_safe_receiver = relation instanceof After ? relation : null;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.x2e_1;
        var tmp_1;
        if (tmp3_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp_1 = tmp3_elvis_lhs;
        }
        var relatedTo = tmp_1;
        lastRelatedPhaseIndex = equals(relatedTo, reference) ? i : lastRelatedPhaseIndex;
      }
       while (!(i === last));
    this.o2e_1.a3(lastRelatedPhaseIndex + 1 | 0, PhaseContent_init_$Create$(phase, new After(reference)));
  };
  protoOf(Pipeline).y2e = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_instance;
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference.toString() + ' was not registered for this pipeline');
    }
    this.o2e_1.a3(index, PhaseContent_init_$Create$(phase, new Before(reference)));
  };
  protoOf(Pipeline).z2e = function (phase, block) {
    var tmp0_elvis_lhs = findPhase(this, phase);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new InvalidPhaseException('Phase ' + phase.toString() + ' was not registered for this pipeline');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var phaseContent = tmp;
    if (tryAddToPhaseFastPath(this, phase, block)) {
      this.p2e_1 = this.p2e_1 + 1 | 0;
      return Unit_instance;
    }
    phaseContent.i2e(block);
    this.p2e_1 = this.p2e_1 + 1 | 0;
    resetInterceptorsList(this);
    this.a2f();
  };
  protoOf(Pipeline).a2f = function () {
  };
  protoOf(Pipeline).toString = function () {
    return anyToString(this);
  };
  function PipelineContext(context) {
    this.v2e_1 = context;
  }
  function pipelineContextFor(context, interceptors, subject, coroutineContext, debugMode) {
    debugMode = debugMode === VOID ? false : debugMode;
    var tmp;
    if (get_DISABLE_SFG() || debugMode) {
      tmp = new DebugPipelineContext(context, interceptors, subject, coroutineContext);
    } else {
      tmp = new SuspendFunctionGun(subject, context, interceptors);
    }
    return tmp;
  }
  function PipelinePhase(name) {
    this.l2e_1 = name;
  }
  protoOf(PipelinePhase).toString = function () {
    return "Phase('" + this.l2e_1 + "')";
  };
  function InvalidPhaseException(message) {
    extendThrowable(this, message);
    captureStack(this, InvalidPhaseException);
  }
  function After(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.x2e_1 = relativeTo;
  }
  function Before(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.b2f_1 = relativeTo;
  }
  function Last() {
    Last_instance = this;
    PipelinePhaseRelation.call(this);
  }
  protoOf(Last).toString = function () {
    return 'Last';
  };
  protoOf(Last).hashCode = function () {
    return 967869129;
  };
  protoOf(Last).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Last))
      return false;
    return true;
  };
  var Last_instance;
  function Last_getInstance() {
    if (Last_instance == null)
      new Last();
    return Last_instance;
  }
  function PipelinePhaseRelation() {
  }
  function recoverStackTraceBridge(exception, continuation) {
    var tmp;
    try {
      tmp = withCause(recoverStackTrace(exception, continuation), exception.cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_0 = exception;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function loop($this, direct) {
    do {
      var currentIndex = $this.i2f_1;
      if (currentIndex === $this.d2f_1.e1()) {
        if (!direct) {
          // Inline function 'kotlin.Companion.success' call
          var value = $this.f2f_1;
          var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
          resumeRootWith($this, tmp$ret$0);
          return false;
        }
        return true;
      }
      $this.i2f_1 = currentIndex + 1 | 0;
      var next = $this.d2f_1.d1(currentIndex);
      try {
        var result = pipelineStartCoroutineUninterceptedOrReturn(next, $this, $this.f2f_1, $this.e2f_1);
        if (result === get_COROUTINE_SUSPENDED())
          return false;
      } catch ($p) {
        if ($p instanceof Error) {
          var cause = $p;
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
          resumeRootWith($this, tmp$ret$1);
          return false;
        } else {
          throw $p;
        }
      }
    }
     while (true);
  }
  function resumeRootWith($this, result) {
    if ($this.h2f_1 < 0) {
      // Inline function 'kotlin.error' call
      var message = 'No more continuations to resume';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var next = ensureNotNull($this.g2f_1[$this.h2f_1]);
    var _unary__edvuaz = $this.h2f_1;
    $this.h2f_1 = _unary__edvuaz - 1 | 0;
    $this.g2f_1[_unary__edvuaz] = null;
    if (!_Result___get_isFailure__impl__jpiriv(result)) {
      next.y8(result);
    } else {
      var exception = recoverStackTraceBridge(ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result)), next);
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      next.y8(tmp$ret$0);
    }
  }
  function discardLastRootContinuation($this) {
    if ($this.h2f_1 < 0)
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    var _unary__edvuaz = $this.h2f_1;
    $this.h2f_1 = _unary__edvuaz - 1 | 0;
    $this.g2f_1[_unary__edvuaz] = null;
  }
  function SuspendFunctionGun$continuation$1(this$0) {
    this.k2f_1 = this$0;
    this.j2f_1 = -2147483648;
  }
  protoOf(SuspendFunctionGun$continuation$1).t8 = function () {
    var continuation = this.k2f_1.g2f_1[this.k2f_1.h2f_1];
    if (!(continuation === this) && !(continuation == null))
      return continuation.t8();
    var index = this.k2f_1.h2f_1 - 1 | 0;
    while (index >= 0) {
      var _unary__edvuaz = index;
      index = _unary__edvuaz - 1 | 0;
      var cont = this.k2f_1.g2f_1[_unary__edvuaz];
      if (!(cont === this) && !(cont == null))
        return cont.t8();
    }
    // Inline function 'kotlin.error' call
    var message = 'Not started';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(SuspendFunctionGun$continuation$1).fg = function (result) {
    if (_Result___get_isFailure__impl__jpiriv(result)) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result));
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      resumeRootWith(this.k2f_1, tmp$ret$0);
      return Unit_instance;
    }
    loop(this.k2f_1, false);
  };
  protoOf(SuspendFunctionGun$continuation$1).y8 = function (result) {
    return this.fg(result);
  };
  function SuspendFunctionGun(initial, context, blocks) {
    PipelineContext.call(this, context);
    this.d2f_1 = blocks;
    var tmp = this;
    tmp.e2f_1 = new SuspendFunctionGun$continuation$1(this);
    this.f2f_1 = initial;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.d2f_1.e1();
    tmp_0.g2f_1 = Array(size);
    this.h2f_1 = -1;
    this.i2f_1 = 0;
  }
  protoOf(SuspendFunctionGun).j1d = function () {
    return this.e2f_1.t8();
  };
  protoOf(SuspendFunctionGun).y2d = function () {
    return this.f2f_1;
  };
  protoOf(SuspendFunctionGun).a2e = function ($completion) {
    var tmp$ret$0;
    $l$block_0: {
      if (this.i2f_1 === this.d2f_1.e1()) {
        tmp$ret$0 = this.f2f_1;
        break $l$block_0;
      }
      this.l2f(intercepted($completion));
      if (loop(this, true)) {
        discardLastRootContinuation(this);
        tmp$ret$0 = this.f2f_1;
        break $l$block_0;
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  };
  protoOf(SuspendFunctionGun).z2d = function (subject, $completion) {
    this.f2f_1 = subject;
    return this.a2e($completion);
  };
  protoOf(SuspendFunctionGun).b2e = function (initial, $completion) {
    this.i2f_1 = 0;
    if (this.i2f_1 === this.d2f_1.e1())
      return initial;
    this.f2f_1 = initial;
    if (this.h2f_1 >= 0)
      throw IllegalStateException_init_$Create$('Already started');
    return this.a2e($completion);
  };
  protoOf(SuspendFunctionGun).l2f = function (continuation) {
    this.h2f_1 = this.h2f_1 + 1 | 0;
    this.g2f_1[this.h2f_1] = continuation;
  };
  function TypeInfo(type, kotlinType) {
    kotlinType = kotlinType === VOID ? null : kotlinType;
    this.m2f_1 = type;
    this.n2f_1 = kotlinType;
  }
  protoOf(TypeInfo).hashCode = function () {
    var tmp0_safe_receiver = this.n2f_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? this.m2f_1.hashCode() : tmp1_elvis_lhs;
  };
  protoOf(TypeInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypeInfo))
      return false;
    var tmp;
    if (!(this.n2f_1 == null) || !(other.n2f_1 == null)) {
      tmp = equals(this.n2f_1, other.n2f_1);
    } else {
      tmp = this.m2f_1.equals(other.m2f_1);
    }
    return tmp;
  };
  protoOf(TypeInfo).toString = function () {
    var tmp0_elvis_lhs = this.n2f_1;
    return 'TypeInfo(' + toString(tmp0_elvis_lhs == null ? this.m2f_1 : tmp0_elvis_lhs) + ')';
  };
  function get_platform(_this__u8e3s4) {
    _init_properties_PlatformUtils_js_kt__7rxm8p();
    var tmp0 = platform$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('platform', 1, tmp, _get_platform_$ref_41w7mv(), null);
    return tmp0.m1();
  }
  var platform$delegate;
  function platform$delegate$lambda() {
    _init_properties_PlatformUtils_js_kt__7rxm8p();
    return new Js(hasNodeApi() ? JsPlatform_Node_getInstance() : JsPlatform_Browser_getInstance());
  }
  function _get_platform_$ref_41w7mv() {
    return function (p0) {
      return get_platform(p0);
    };
  }
  var properties_initialized_PlatformUtils_js_kt_8g036j;
  function _init_properties_PlatformUtils_js_kt__7rxm8p() {
    if (!properties_initialized_PlatformUtils_js_kt_8g036j) {
      properties_initialized_PlatformUtils_js_kt_8g036j = true;
      platform$delegate = lazy_0(platform$delegate$lambda);
    }
  }
  function GMTDate_0(timestamp) {
    timestamp = timestamp === VOID ? null : timestamp;
    var tmp1_safe_receiver = timestamp == null ? null : toNumber(timestamp);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = new Date(tmp1_safe_receiver);
    }
    var tmp2_elvis_lhs = tmp;
    var date = tmp2_elvis_lhs == null ? new Date() : tmp2_elvis_lhs;
    if (isNaN_0(date.getTime()))
      throw new InvalidTimestampException(ensureNotNull(timestamp));
    // Inline function 'kotlin.with' call
    var dayOfWeek = Companion_instance_1.v2c((date.getUTCDay() + 6 | 0) % 7 | 0);
    var month = Companion_instance_2.v2c(date.getUTCMonth());
    return new GMTDate(date.getUTCSeconds(), date.getUTCMinutes(), date.getUTCHours(), dayOfWeek, date.getUTCDate(), date.getUTCFullYear(), month, date.getUTCFullYear(), numberToLong(date.getTime()));
  }
  function InvalidTimestampException(timestamp) {
    IllegalStateException_init_$Init$('Invalid date timestamp exception: ' + timestamp.toString(), this);
    captureStack(this, InvalidTimestampException);
  }
  function pipelineStartCoroutineUninterceptedOrReturn(interceptor, context, subject, continuation) {
    return (typeof interceptor === 'function' ? interceptor : THROW_CCE())(context, subject, continuation);
  }
  function AttributesJsFn(concurrent) {
    concurrent = concurrent === VOID ? false : concurrent;
    return new AttributesJs();
  }
  function AttributesJs() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.o2f_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(AttributesJs).w29 = function (key) {
    var tmp = this.o2f_1.s2(key);
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(AttributesJs).x29 = function (key) {
    return this.o2f_1.q2(key);
  };
  protoOf(AttributesJs).y29 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.o2f_1.v2(key, value);
  };
  protoOf(AttributesJs).z29 = function (key) {
    this.o2f_1.w2(key);
  };
  protoOf(AttributesJs).a2a = function (key, block) {
    var tmp0_safe_receiver = this.o2f_1.s2(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return !(tmp0_safe_receiver == null) ? tmp0_safe_receiver : THROW_CCE();
    }
    // Inline function 'kotlin.also' call
    var this_0 = block();
    // Inline function 'kotlin.collections.set' call
    this.o2f_1.v2(key, this_0);
    return this_0;
  };
  protoOf(AttributesJs).b2a = function () {
    return toList(this.o2f_1.t2());
  };
  function unmodifiable(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function get_isDevelopmentMode(_this__u8e3s4) {
    return false;
  }
  function hasNodeApi() {
    return typeof process !== 'undefined' && process.versions != null && process.versions.node != null || (typeof window !== 'undefined' && typeof window.process !== 'undefined' && window.process.versions != null && window.process.versions.node != null);
  }
  function KtorSimpleLogger(name) {
    return new KtorSimpleLogger$1();
  }
  function getKtorLogLevel() {
    return process ? process.env.KTOR_LOG_LEVEL : null;
  }
  function KtorSimpleLogger$1() {
    var tmp = this;
    var tmp_0;
    switch (PlatformUtils_getInstance().d2b_1 || PlatformUtils_getInstance().c2b_1) {
      case true:
        // Inline function 'kotlin.runCatching' call

        var tmp_1;
        try {
          // Inline function 'kotlin.Companion.success' call
          var value = getKtorLogLevel();
          tmp_1 = _Result___init__impl__xyqfz8(value);
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Error) {
            var e = $p;
            // Inline function 'kotlin.Companion.failure' call
            tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
          } else {
            throw $p;
          }
          tmp_1 = tmp_2;
        }

        // Inline function 'kotlin.Result.getOrNull' call

        var this_0 = tmp_1;
        var tmp_3;
        if (_Result___get_isFailure__impl__jpiriv(this_0)) {
          tmp_3 = null;
        } else {
          var tmp_4 = _Result___get_value__impl__bjfvqg(this_0);
          tmp_3 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        }

        var tmp1_safe_receiver = tmp_3;
        var tmp_5;
        if (tmp1_safe_receiver == null) {
          tmp_5 = null;
        } else {
          // Inline function 'kotlin.let' call
          var tmp0 = get_entries_1();
          var tmp$ret$6;
          $l$block: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var _iterator__ex2g4s = tmp0.t();
            while (_iterator__ex2g4s.u()) {
              var element = _iterator__ex2g4s.v();
              if (element.z_1 === tmp1_safe_receiver) {
                tmp$ret$6 = element;
                break $l$block;
              }
            }
            tmp$ret$6 = null;
          }
          tmp_5 = tmp$ret$6;
        }

        var tmp2_elvis_lhs = tmp_5;
        tmp_0 = tmp2_elvis_lhs == null ? LogLevel_INFO_getInstance() : tmp2_elvis_lhs;
        break;
      case false:
        tmp_0 = LogLevel_TRACE_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    tmp.p2f_1 = tmp_0;
  }
  protoOf(KtorSimpleLogger$1).q2f = function () {
    return this.p2f_1;
  };
  protoOf(KtorSimpleLogger$1).r2f = function (message) {
    if (this.p2f_1.c3(LogLevel_WARN_getInstance()) > 0)
      return Unit_instance;
    console.warn(message);
  };
  protoOf(KtorSimpleLogger$1).s2f = function (message, cause) {
    if (this.p2f_1.c3(LogLevel_DEBUG_getInstance()) > 0)
      return Unit_instance;
    console.debug('DEBUG: ' + message + ', cause: ' + cause.toString());
  };
  protoOf(KtorSimpleLogger$1).t2f = function (message) {
    if (this.p2f_1.c3(LogLevel_TRACE_getInstance()) > 0)
      return Unit_instance;
    console.debug('TRACE: ' + message);
  };
  function get_isTraceEnabled(_this__u8e3s4) {
    return _this__u8e3s4.q2f().c3(LogLevel_TRACE_getInstance()) <= 0;
  }
  var LogLevel_TRACE_instance;
  var LogLevel_DEBUG_instance;
  var LogLevel_INFO_instance;
  var LogLevel_WARN_instance;
  var LogLevel_ERROR_instance;
  var LogLevel_NONE_instance;
  function values_1() {
    return [LogLevel_TRACE_getInstance(), LogLevel_DEBUG_getInstance(), LogLevel_INFO_getInstance(), LogLevel_WARN_getInstance(), LogLevel_ERROR_getInstance(), LogLevel_NONE_getInstance()];
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var LogLevel_entriesInitialized;
  function LogLevel_initEntries() {
    if (LogLevel_entriesInitialized)
      return Unit_instance;
    LogLevel_entriesInitialized = true;
    LogLevel_TRACE_instance = new LogLevel('TRACE', 0);
    LogLevel_DEBUG_instance = new LogLevel('DEBUG', 1);
    LogLevel_INFO_instance = new LogLevel('INFO', 2);
    LogLevel_WARN_instance = new LogLevel('WARN', 3);
    LogLevel_ERROR_instance = new LogLevel('ERROR', 4);
    LogLevel_NONE_instance = new LogLevel('NONE', 5);
  }
  var $ENTRIES_1;
  function LogLevel(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LogLevel_TRACE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_TRACE_instance;
  }
  function LogLevel_DEBUG_getInstance() {
    LogLevel_initEntries();
    return LogLevel_DEBUG_instance;
  }
  function LogLevel_INFO_getInstance() {
    LogLevel_initEntries();
    return LogLevel_INFO_instance;
  }
  function LogLevel_WARN_getInstance() {
    LogLevel_initEntries();
    return LogLevel_WARN_instance;
  }
  function LogLevel_ERROR_getInstance() {
    LogLevel_initEntries();
    return LogLevel_ERROR_instance;
  }
  function LogLevel_NONE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_NONE_instance;
  }
  function get_DISABLE_SFG() {
    return DISABLE_SFG;
  }
  var DISABLE_SFG;
  function withCause(_this__u8e3s4, cause) {
    return _this__u8e3s4;
  }
  function instanceOf(_this__u8e3s4, type) {
    return type.oa(_this__u8e3s4);
  }
  //region block: post-declaration
  protoOf(CaseInsensitiveMap).asJsReadonlyMapView = asJsReadonlyMapView;
  protoOf($serializer).lz = typeParametersSerializers;
  protoOf(AttributesJs).v29 = get;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  DISABLE_SFG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = PlatformUtils_getInstance;
  _.$_$.b = CopyOnWriteHashMap;
  _.$_$.c = GMTDate_0;
  _.$_$.d = LockFreeLinkedListNode;
  _.$_$.e = KtorSimpleLogger;
  _.$_$.f = get_isTraceEnabled;
  _.$_$.g = PipelineContext;
  _.$_$.h = PipelinePhase;
  _.$_$.i = Pipeline;
  _.$_$.j = TypeInfo;
  _.$_$.k = instanceOf;
  _.$_$.l = AttributeKey;
  _.$_$.m = AttributesJsFn;
  _.$_$.n = Attributes;
  _.$_$.o = SilentSupervisor;
  _.$_$.p = forEach;
  _.$_$.q = get_0;
  _.$_$.r = StringValuesBuilderImpl;
  _.$_$.s = StringValuesImpl;
  _.$_$.t = StringValuesSingleImpl;
  _.$_$.u = StringValues;
  _.$_$.v = appendAll;
  _.$_$.w = isLowerCase;
  _.$_$.x = putAll;
  _.$_$.y = toCharArray;
  _.$_$.z = toLowerCasePreservingASCIIRules;
  _.$_$.a1 = toMap;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-utils.js.map
