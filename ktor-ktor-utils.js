(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-io-kotlinx-io-core.js', './ktor-ktor-io.js', './kotlinx-atomicfu.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./ktor-ktor-io.js'), require('./kotlinx-atomicfu.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'ktor-ktor-utils'.");
    }
    globalThis['ktor-ktor-utils'] = factory(typeof globalThis['ktor-ktor-utils'] === 'undefined' ? {} : globalThis['ktor-ktor-utils'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['ktor-ktor-io'], globalThis['kotlinx-atomicfu'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.o;
  var arrayOf = kotlin_kotlin.$_$.lg;
  var createKType = kotlin_kotlin.$_$.pc;
  var Unit_instance = kotlin_kotlin.$_$.z;
  var VOID = kotlin_kotlin.$_$.c;
  var isBlank = kotlin_kotlin.$_$.od;
  var toString = kotlin_kotlin.$_$.bc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var protoOf = kotlin_kotlin.$_$.yb;
  var getStringHashCode = kotlin_kotlin.$_$.wa;
  var initMetadataForClass = kotlin_kotlin.$_$.ya;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var initMetadataForInterface = kotlin_kotlin.$_$.cb;
  var THROW_CCE = kotlin_kotlin.$_$.yf;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.t2;
  var ensureNotNull = kotlin_kotlin.$_$.pg;
  var charCodeAt = kotlin_kotlin.$_$.ma;
  var toString_0 = kotlin_kotlin.$_$.l3;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.k3;
  var equals = kotlin_kotlin.$_$.jd;
  var AbstractMutableSet = kotlin_kotlin.$_$.b5;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.c3;
  var AbstractMutableCollection = kotlin_kotlin.$_$.a5;
  var MutableEntry = kotlin_kotlin.$_$.n5;
  var isInterface = kotlin_kotlin.$_$.nb;
  var Entry = kotlin_kotlin.$_$.j5;
  var equals_0 = kotlin_kotlin.$_$.sa;
  var hashCode = kotlin_kotlin.$_$.xa;
  var initMetadataForCompanion = kotlin_kotlin.$_$.za;
  var fill = kotlin_kotlin.$_$.t6;
  var fill_0 = kotlin_kotlin.$_$.r6;
  var asJsReadonlyMapView = kotlin_kotlin.$_$.k5;
  var KtMutableMap = kotlin_kotlin.$_$.o5;
  var charArray = kotlin_kotlin.$_$.la;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.u8;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var Element = kotlin_kotlin.$_$.d9;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var get_size = kotlin_io_ktor_ktor_io.$_$.a1;
  var writeText = kotlin_io_ktor_ktor_io.$_$.e1;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var concatToString = kotlin_kotlin.$_$.ad;
  var initMetadataForObject = kotlin_kotlin.$_$.eb;
  var Enum = kotlin_kotlin.$_$.of;
  var firstOrNull = kotlin_kotlin.$_$.u6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p1;
  var addAll = kotlin_kotlin.$_$.r5;
  var emptyMap = kotlin_kotlin.$_$.p6;
  var plus = kotlin_kotlin.$_$.p7;
  var isArray = kotlin_kotlin.$_$.fb;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g1;
  var emptySet = kotlin_kotlin.$_$.q6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.s1;
  var getBooleanHashCode = kotlin_kotlin.$_$.ua;
  var setOf = kotlin_kotlin.$_$.u7;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.q1;
  var toList = kotlin_kotlin.$_$.d8;
  var charSequenceLength = kotlin_kotlin.$_$.oa;
  var charSequenceGet = kotlin_kotlin.$_$.na;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.a2;
  var get_lastIndex = kotlin_kotlin.$_$.rd;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e3;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.i3;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.c1;
  var lazy = kotlin_kotlin.$_$.ug;
  var Long = kotlin_kotlin.$_$.tf;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var objectCreate = kotlin_kotlin.$_$.xb;
  var equalsLong = kotlin_kotlin.$_$.s9;
  var Comparable = kotlin_kotlin.$_$.kf;
  var enumEntries = kotlin_kotlin.$_$.h9;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var CoroutineImpl = kotlin_kotlin.$_$.f9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.o8;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ab;
  var KtMutableList = kotlin_kotlin.$_$.m5;
  var toMutableList = kotlin_kotlin.$_$.h8;
  var ArrayList = kotlin_kotlin.$_$.c5;
  var KMutableProperty1 = kotlin_kotlin.$_$.uc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.va;
  var emptyList = kotlin_kotlin.$_$.o6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.f7;
  var last = kotlin_kotlin.$_$.h7;
  var mutableListOf = kotlin_kotlin.$_$.m7;
  var anyToString = kotlin_kotlin.$_$.ga;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var extendThrowable = kotlin_kotlin.$_$.ta;
  var captureStack = kotlin_kotlin.$_$.ja;
  var recoverStackTrace = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var Companion_instance = kotlin_kotlin.$_$.u;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m3;
  var createFailure = kotlin_kotlin.$_$.og;
  var Key_instance_0 = kotlin_kotlin.$_$.d;
  var intercepted = kotlin_kotlin.$_$.r8;
  var CoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.n3;
  var Continuation = kotlin_kotlin.$_$.z8;
  var KProperty1 = kotlin_kotlin.$_$.wc;
  var lazy_0 = kotlin_kotlin.$_$.vg;
  var toNumber = kotlin_kotlin.$_$.ea;
  var isNaN_0 = kotlin_kotlin.$_$.tg;
  var numberToLong = kotlin_kotlin.$_$.aa;
  var IllegalStateException = kotlin_kotlin.$_$.sf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.o2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.p3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.o3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wg;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(AttributeKey, 'AttributeKey');
  function get(key) {
    var tmp0_elvis_lhs = this.z2c(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No instance for key ' + key.toString());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function set(key, value) {
    this.b2d(key, value);
  }
  initMetadataForInterface(Attributes, 'Attributes');
  initMetadataForClass(CaseInsensitiveMap$KeySet$iterator$1);
  initMetadataForClass(CaseInsensitiveMap$ValueCollection$iterator$1);
  initMetadataForClass(CaseInsensitiveMap$EntrySet$iterator$1);
  initMetadataForClass(KeySet, 'KeySet', VOID, AbstractMutableSet);
  initMetadataForClass(ValueCollection, 'ValueCollection', VOID, AbstractMutableCollection);
  initMetadataForClass(EntrySet, 'EntrySet', VOID, AbstractMutableSet);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [MutableEntry]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(CaseInsensitiveMap, 'CaseInsensitiveMap', CaseInsensitiveMap, VOID, [KtMutableMap]);
  initMetadataForClass(SilentSupervisor$$inlined$CoroutineExceptionHandler$1, VOID, VOID, AbstractCoroutineContextElement, [Element]);
  initMetadataForObject(PlatformUtils, 'PlatformUtils');
  initMetadataForClass(Platform, 'Platform');
  initMetadataForObject(Jvm, 'Jvm', VOID, Platform);
  initMetadataForObject(Native, 'Native', VOID, Platform);
  initMetadataForClass(Js, 'Js', VOID, Platform);
  initMetadataForClass(WasmJs, 'WasmJs', VOID, Platform);
  initMetadataForClass(JsPlatform, 'JsPlatform', VOID, Enum);
  function get_0(name) {
    var tmp0_safe_receiver = this.f2f(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  }
  function forEach(body) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.c2f().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var k = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.n1();
      body(k, v);
    }
    return Unit_instance;
  }
  initMetadataForInterface(StringValues, 'StringValues');
  initMetadataForClass(StringValuesBuilderImpl, 'StringValuesBuilderImpl', StringValuesBuilderImpl);
  initMetadataForClass(StringValuesEntry, 'StringValuesEntry', VOID, VOID, [Entry]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(StringValuesImpl, 'StringValuesImpl', StringValuesImpl, VOID, [StringValues]);
  initMetadataForClass(StringValuesSingleImpl$entries$1, VOID, VOID, VOID, [Entry]);
  initMetadataForClass(StringValuesSingleImpl, 'StringValuesSingleImpl', VOID, VOID, [StringValues]);
  initMetadataForClass(ChannelIOException, 'ChannelIOException', VOID, IOException);
  initMetadataForClass(CopyOnWriteHashMap, 'CopyOnWriteHashMap', CopyOnWriteHashMap);
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(GMTDate, 'GMTDate', VOID, VOID, [Comparable], VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(WeekDay, 'WeekDay', VOID, Enum);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Month, 'Month', VOID, Enum);
  initMetadataForClass(LockFreeLinkedListNode, 'LockFreeLinkedListNode');
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForClass(Removed, 'Removed');
  initMetadataForClass(OpDescriptor, 'OpDescriptor');
  initMetadataForCoroutine($proceedLoopCOROUTINE$, CoroutineImpl);
  initMetadataForClass(PipelineContext, 'PipelineContext', VOID, VOID, [CoroutineScope], [1, 0]);
  initMetadataForClass(DebugPipelineContext, 'DebugPipelineContext', VOID, PipelineContext, VOID, [1, 0]);
  initMetadataForCompanion(Companion_4);
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
      var tmp_0 = PrimitiveClasses_getInstance().gb();
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(PrimitiveClasses_getInstance().gb(), arrayOf([]), false);
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
      var tmp$ret$1 = tmp_1;
      tmp = new TypeInfo(tmp_0, tmp$ret$1);
    } else {
      tmp = type;
    }
    type = tmp;
    this.w2c_1 = name;
    this.x2c_1 = type;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.w2c_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      var message = "Name can't be blank";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(AttributeKey).toString = function () {
    return 'AttributeKey: ' + this.w2c_1;
  };
  protoOf(AttributeKey).hashCode = function () {
    var result = getStringHashCode(this.w2c_1);
    result = imul(result, 31) + this.x2c_1.hashCode() | 0;
    return result;
  };
  protoOf(AttributeKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AttributeKey))
      return false;
    if (!(this.w2c_1 === other.w2c_1))
      return false;
    if (!this.x2c_1.equals(other.x2c_1))
      return false;
    return true;
  };
  function Attributes() {
  }
  function putAll(_this__u8e3s4, other) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = other.f2d().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      _this__u8e3s4.b2d(element instanceof AttributeKey ? element : THROW_CCE(), other.y2c(element));
    }
  }
  function advance($this) {
    $l$loop: while ($this.g2d_1 < $this.i2d_1.n2d_1) {
      var idx = $this.i2d_1.m2d_1[$this.g2d_1];
      if (idx >= 0 && !($this.i2d_1.j2d_1[idx] == null))
        break $l$loop;
      $this.g2d_1 = $this.g2d_1 + 1 | 0;
    }
  }
  function CaseInsensitiveMap$KeySet$iterator$1(this$0) {
    this.i2d_1 = this$0;
    this.g2d_1 = 0;
    this.h2d_1 = null;
    advance(this);
  }
  protoOf(CaseInsensitiveMap$KeySet$iterator$1).u = function () {
    return this.g2d_1 < this.i2d_1.n2d_1;
  };
  protoOf(CaseInsensitiveMap$KeySet$iterator$1).v = function () {
    if (!this.u())
      throw NoSuchElementException_init_$Create$();
    var idx = this.i2d_1.m2d_1[this.g2d_1];
    this.h2d_1 = ensureNotNull(this.i2d_1.j2d_1[idx]);
    this.g2d_1 = this.g2d_1 + 1 | 0;
    advance(this);
    return ensureNotNull(this.h2d_1);
  };
  protoOf(CaseInsensitiveMap$KeySet$iterator$1).j4 = function () {
    var tmp0_elvis_lhs = this.h2d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('next() must be called before remove()');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var key = tmp;
    this.i2d_1.r2d(key);
    this.h2d_1 = null;
  };
  function advance_0($this) {
    $l$loop: while ($this.s2d_1 < $this.u2d_1.n2d_1) {
      var idx = $this.u2d_1.m2d_1[$this.s2d_1];
      if (idx >= 0 && !($this.u2d_1.j2d_1[idx] == null))
        break $l$loop;
      $this.s2d_1 = $this.s2d_1 + 1 | 0;
    }
  }
  function CaseInsensitiveMap$ValueCollection$iterator$1(this$0) {
    this.u2d_1 = this$0;
    this.s2d_1 = 0;
    this.t2d_1 = null;
    advance_0(this);
  }
  protoOf(CaseInsensitiveMap$ValueCollection$iterator$1).u = function () {
    return this.s2d_1 < this.u2d_1.n2d_1;
  };
  protoOf(CaseInsensitiveMap$ValueCollection$iterator$1).v = function () {
    if (!this.u())
      throw NoSuchElementException_init_$Create$();
    var idx = this.u2d_1.m2d_1[this.s2d_1];
    this.t2d_1 = ensureNotNull(this.u2d_1.j2d_1[idx]);
    var tmp = this.u2d_1.k2d_1[idx];
    var result = !(tmp == null) ? tmp : THROW_CCE();
    this.s2d_1 = this.s2d_1 + 1 | 0;
    advance_0(this);
    return result;
  };
  protoOf(CaseInsensitiveMap$ValueCollection$iterator$1).j4 = function () {
    var tmp0_elvis_lhs = this.t2d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('next() must be called before remove()');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var key = tmp;
    this.u2d_1.r2d(key);
    this.t2d_1 = null;
  };
  function advance_1($this) {
    $l$loop: while ($this.v2d_1 < $this.x2d_1.n2d_1) {
      var idx = $this.x2d_1.m2d_1[$this.v2d_1];
      if (idx >= 0 && !($this.x2d_1.j2d_1[idx] == null))
        break $l$loop;
      $this.v2d_1 = $this.v2d_1 + 1 | 0;
    }
  }
  function CaseInsensitiveMap$EntrySet$iterator$1(this$0) {
    this.x2d_1 = this$0;
    this.v2d_1 = 0;
    this.w2d_1 = null;
    advance_1(this);
  }
  protoOf(CaseInsensitiveMap$EntrySet$iterator$1).u = function () {
    return this.v2d_1 < this.x2d_1.n2d_1;
  };
  protoOf(CaseInsensitiveMap$EntrySet$iterator$1).v = function () {
    if (!this.u())
      throw NoSuchElementException_init_$Create$();
    var idx = this.x2d_1.m2d_1[this.v2d_1];
    this.w2d_1 = ensureNotNull(this.x2d_1.j2d_1[idx]);
    var tmp = ensureNotNull(this.w2d_1);
    var tmp_0 = this.x2d_1.k2d_1[idx];
    var entry = new MapEntry(this.x2d_1, tmp, !(tmp_0 == null) ? tmp_0 : THROW_CCE());
    this.v2d_1 = this.v2d_1 + 1 | 0;
    advance_1(this);
    return entry;
  };
  protoOf(CaseInsensitiveMap$EntrySet$iterator$1).j4 = function () {
    var tmp0_elvis_lhs = this.w2d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('next() must be called before remove()');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var key = tmp;
    this.x2d_1.r2d(key);
    this.w2d_1 = null;
  };
  function caseInsensitiveHashCode($this, s) {
    var h = 0;
    var inductionVariable = 0;
    var last = s.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = imul(31, h);
        // Inline function 'kotlin.text.lowercaseChar' call
        // Inline function 'kotlin.text.lowercase' call
        var this_0 = charCodeAt(s, i);
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$1 = toString_0(this_0).toLowerCase();
        // Inline function 'kotlin.code' call
        var this_1 = charCodeAt(tmp$ret$1, 0);
        h = tmp + Char__toInt_impl_vasixd(this_1) | 0;
      }
       while (inductionVariable < last);
    return h;
  }
  function putWithoutTrackingOrderReturnIndex($this, key, value) {
    var hash = caseInsensitiveHashCode(Companion_getInstance(), key);
    var index = hash & ($this.j2d_1.length - 1 | 0);
    while (true) {
      var existingKey = $this.j2d_1[index];
      if (existingKey == null) {
        $this.j2d_1[index] = key;
        $this.k2d_1[index] = value;
        $this.l2d_1 = $this.l2d_1 + 1 | 0;
        return index;
      }
      if (equals(existingKey, key, true)) {
        $this.k2d_1[index] = value;
        return index;
      }
      index = (index + 1 | 0) & ($this.j2d_1.length - 1 | 0);
    }
  }
  function findIndex($this, key) {
    if ($this.l2d_1 === 0)
      return -1;
    var hash = caseInsensitiveHashCode(Companion_getInstance(), key);
    var index = hash & ($this.j2d_1.length - 1 | 0);
    while (true) {
      var existingKey = $this.j2d_1[index];
      if (existingKey == null)
        return -1;
      if (equals(existingKey, key, true))
        return index;
      index = (index + 1 | 0) & ($this.j2d_1.length - 1 | 0);
    }
  }
  function ensureCapacity($this) {
    if (imul($this.l2d_1, 4) >= imul($this.j2d_1.length, 3)) {
      resize($this, imul($this.j2d_1.length, 2));
    }
  }
  function resize($this, newCapacity) {
    var oldKeys = $this.j2d_1;
    var oldValues = $this.k2d_1;
    var oldInsertionOrder = $this.m2d_1;
    var oldInsertionCount = $this.n2d_1;
    var tmp = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.j2d_1 = Array(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.k2d_1 = Array(newCapacity);
    var tmp_1 = $this;
    var tmp_2 = 0;
    var tmp_3 = new Int32Array(newCapacity);
    while (tmp_2 < newCapacity) {
      tmp_3[tmp_2] = -1;
      tmp_2 = tmp_2 + 1 | 0;
    }
    tmp_1.m2d_1 = tmp_3;
    $this.l2d_1 = 0;
    $this.n2d_1 = 0;
    var inductionVariable = 0;
    if (inductionVariable < oldInsertionCount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var oldIndex = oldInsertionOrder[i];
        if (oldIndex >= 0 && !(oldKeys[oldIndex] == null)) {
          var tmp_4 = ensureNotNull(oldKeys[oldIndex]);
          var tmp_5 = oldValues[oldIndex];
          $this.y2d(tmp_4, !(tmp_5 == null) ? tmp_5 : THROW_CCE());
        }
      }
       while (inductionVariable < oldInsertionCount);
  }
  function compactInsertionOrder($this) {
    if ($this.n2d_1 === 0)
      return Unit_instance;
    var writeIndex = 0;
    var inductionVariable = 0;
    var last = $this.n2d_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var idx = $this.m2d_1[i];
        if (idx >= 0 && !($this.j2d_1[idx] == null)) {
          var tmp = $this.m2d_1;
          var _unary__edvuaz = writeIndex;
          writeIndex = _unary__edvuaz + 1 | 0;
          tmp[_unary__edvuaz] = idx;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_0 = writeIndex;
    var last_0 = $this.m2d_1.length;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        $this.m2d_1[i_0] = -1;
      }
       while (inductionVariable_0 < last_0);
    $this.n2d_1 = writeIndex;
  }
  function KeySet($outer) {
    this.z2d_1 = $outer;
    AbstractMutableSet.call(this);
  }
  protoOf(KeySet).e1 = function () {
    return this.z2d_1.l2d_1;
  };
  protoOf(KeySet).a2e = function (element) {
    throw UnsupportedOperationException_init_$Create$('CaseInsensitiveMap.keys does not support add');
  };
  protoOf(KeySet).b1 = function (element) {
    return this.a2e((!(element == null) ? typeof element === 'string' : false) ? element : THROW_CCE());
  };
  protoOf(KeySet).b2e = function (element) {
    return this.z2d_1.c2e(element);
  };
  protoOf(KeySet).j2 = function (element) {
    if (!(!(element == null) ? typeof element === 'string' : false))
      return false;
    return this.b2e((!(element == null) ? typeof element === 'string' : false) ? element : THROW_CCE());
  };
  protoOf(KeySet).t = function () {
    return new CaseInsensitiveMap$KeySet$iterator$1(this.z2d_1);
  };
  function ValueCollection($outer) {
    this.d2e_1 = $outer;
    AbstractMutableCollection.call(this);
  }
  protoOf(ValueCollection).e1 = function () {
    return this.d2e_1.l2d_1;
  };
  protoOf(ValueCollection).e2e = function (element) {
    throw UnsupportedOperationException_init_$Create$('CaseInsensitiveMap.values does not support add');
  };
  protoOf(ValueCollection).b1 = function (element) {
    return this.e2e(!(element == null) ? element : THROW_CCE());
  };
  protoOf(ValueCollection).t = function () {
    return new CaseInsensitiveMap$ValueCollection$iterator$1(this.d2e_1);
  };
  function EntrySet($outer) {
    this.f2e_1 = $outer;
    AbstractMutableSet.call(this);
  }
  protoOf(EntrySet).e1 = function () {
    return this.f2e_1.l2d_1;
  };
  protoOf(EntrySet).g2e = function (element) {
    throw UnsupportedOperationException_init_$Create$('CaseInsensitiveMap.entries does not support add');
  };
  protoOf(EntrySet).b1 = function (element) {
    return this.g2e((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(EntrySet).t = function () {
    return new CaseInsensitiveMap$EntrySet$iterator$1(this.f2e_1);
  };
  function MapEntry($outer, key, _value) {
    this.j2e_1 = $outer;
    this.h2e_1 = key;
    this.i2e_1 = _value;
  }
  protoOf(MapEntry).m1 = function () {
    return this.h2e_1;
  };
  protoOf(MapEntry).n1 = function () {
    return this.i2e_1;
  };
  protoOf(MapEntry).equals = function (other) {
    if (!(!(other == null) ? isInterface(other, Entry) : false))
      return false;
    return equals_0(this.h2e_1, other.m1()) && equals_0(this.n1(), other.n1());
  };
  protoOf(MapEntry).hashCode = function () {
    return getStringHashCode(this.h2e_1) ^ hashCode(this.n1());
  };
  protoOf(MapEntry).toString = function () {
    return this.h2e_1 + '=' + toString(this.n1());
  };
  function Companion() {
    Companion_instance_0 = this;
    this.k2e_1 = 8;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    tmp.l2e_1 = [];
    var tmp_0 = this;
    // Inline function 'kotlin.emptyArray' call
    tmp_0.m2e_1 = [];
    this.n2e_1 = new Int32Array(0);
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function CaseInsensitiveMap() {
    Companion_getInstance();
    this.j2d_1 = Companion_getInstance().l2e_1;
    this.k2d_1 = Companion_getInstance().m2e_1;
    this.l2d_1 = 0;
    this.m2d_1 = Companion_getInstance().n2e_1;
    this.n2d_1 = 0;
    this.o2d_1 = null;
    this.p2d_1 = null;
    this.q2d_1 = null;
  }
  protoOf(CaseInsensitiveMap).e1 = function () {
    return this.l2d_1;
  };
  protoOf(CaseInsensitiveMap).c2e = function (key) {
    return findIndex(this, key) >= 0;
  };
  protoOf(CaseInsensitiveMap).q2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.c2e((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).o2e = function (value) {
    if (this.l2d_1 === 0)
      return false;
    var inductionVariable = 0;
    var last = this.k2d_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(this.j2d_1[i] == null) && equals_0(this.k2d_1[i], value))
          return true;
      }
       while (inductionVariable <= last);
    return false;
  };
  protoOf(CaseInsensitiveMap).r2 = function (value) {
    if (!!(value == null))
      return false;
    return this.o2e(!(value == null) ? value : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).p2e = function (key) {
    var index = findIndex(this, key);
    return index >= 0 ? this.k2d_1[index] : null;
  };
  protoOf(CaseInsensitiveMap).s2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.p2e((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).r = function () {
    return this.l2d_1 === 0;
  };
  protoOf(CaseInsensitiveMap).y2 = function () {
    if (this.l2d_1 > 0) {
      fill(this.j2d_1, null);
      fill(this.k2d_1, null);
      fill_0(this.m2d_1, -1);
      this.l2d_1 = 0;
      this.n2d_1 = 0;
    }
  };
  protoOf(CaseInsensitiveMap).y2d = function (key, value) {
    if (this.j2d_1 === Companion_getInstance().l2e_1) {
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.j2d_1 = Array(8);
      var tmp_0 = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_0.k2d_1 = Array(8);
      var tmp_1 = this;
      var tmp_2 = 0;
      var tmp_3 = new Int32Array(8);
      while (tmp_2 < 8) {
        tmp_3[tmp_2] = -1;
        tmp_2 = tmp_2 + 1 | 0;
      }
      tmp_1.m2d_1 = tmp_3;
    }
    var hash = caseInsensitiveHashCode(Companion_getInstance(), key);
    var index = hash & (this.j2d_1.length - 1 | 0);
    while (true) {
      var existingKey = this.j2d_1[index];
      if (existingKey == null) {
        ensureCapacity(this);
        index = hash & (this.j2d_1.length - 1 | 0);
        while (!(this.j2d_1[index] == null)) {
          index = (index + 1 | 0) & (this.j2d_1.length - 1 | 0);
        }
        if (this.n2d_1 === this.m2d_1.length) {
          compactInsertionOrder(this);
        }
        this.j2d_1[index] = key;
        this.k2d_1[index] = value;
        var tmp_4 = this.m2d_1;
        var _unary__edvuaz = this.n2d_1;
        this.n2d_1 = _unary__edvuaz + 1 | 0;
        tmp_4[_unary__edvuaz] = index;
        this.l2d_1 = this.l2d_1 + 1 | 0;
        return null;
      }
      if (equals(existingKey, key, true)) {
        var oldValue = this.k2d_1[index];
        this.k2d_1[index] = value;
        return oldValue;
      }
      index = (index + 1 | 0) & (this.j2d_1.length - 1 | 0);
    }
  };
  protoOf(CaseInsensitiveMap).v2 = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.y2d(tmp, !(value == null) ? value : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).q2e = function (from) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = from.l1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var key = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.n1();
      this.y2d(key, value);
    }
  };
  protoOf(CaseInsensitiveMap).x2 = function (from) {
    return this.q2e(from);
  };
  protoOf(CaseInsensitiveMap).r2d = function (key) {
    var index = findIndex(this, key);
    if (index < 0)
      return null;
    var oldValue = this.k2d_1[index];
    var inductionVariable = 0;
    var last = this.n2d_1;
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.m2d_1[i] === index) {
          this.m2d_1[i] = -1;
          break $l$loop;
        }
      }
       while (inductionVariable < last);
    this.j2d_1[index] = null;
    this.k2d_1[index] = null;
    this.l2d_1 = this.l2d_1 - 1 | 0;
    var nextIndex = (index + 1 | 0) & (this.j2d_1.length - 1 | 0);
    while (!(this.j2d_1[nextIndex] == null)) {
      var rehashKey = ensureNotNull(this.j2d_1[nextIndex]);
      var rehashValue = this.k2d_1[nextIndex];
      var oldRehashIndex = nextIndex;
      this.j2d_1[nextIndex] = null;
      this.k2d_1[nextIndex] = null;
      this.l2d_1 = this.l2d_1 - 1 | 0;
      var newIndex = putWithoutTrackingOrderReturnIndex(this, rehashKey, !(rehashValue == null) ? rehashValue : THROW_CCE());
      var inductionVariable_0 = 0;
      var last_0 = this.n2d_1;
      if (inductionVariable_0 < last_0)
        $l$loop_0: do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (this.m2d_1[i_0] === oldRehashIndex) {
            this.m2d_1[i_0] = newIndex;
            break $l$loop_0;
          }
        }
         while (inductionVariable_0 < last_0);
      nextIndex = (nextIndex + 1 | 0) & (this.j2d_1.length - 1 | 0);
    }
    return oldValue;
  };
  protoOf(CaseInsensitiveMap).w2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.r2d((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).t2 = function () {
    var tmp0_elvis_lhs = this.o2d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new KeySet(this);
      this.o2d_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(CaseInsensitiveMap).l1 = function () {
    var tmp0_elvis_lhs = this.p2d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new EntrySet(this);
      this.p2d_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(CaseInsensitiveMap).u2 = function () {
    var tmp0_elvis_lhs = this.q2d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new ValueCollection(this);
      this.q2d_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(CaseInsensitiveMap).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof CaseInsensitiveMap))
      return false;
    if (!(other.e1() === this.l2d_1))
      return false;
    var inductionVariable = 0;
    var last = this.j2d_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var k = this.j2d_1[i];
        if (!(k == null)) {
          var v = this.k2d_1[i];
          if (!equals_0(other.p2e(k), v))
            return false;
        }
      }
       while (inductionVariable <= last);
    return true;
  };
  protoOf(CaseInsensitiveMap).hashCode = function () {
    var result = 0;
    var inductionVariable = 0;
    var last = this.j2d_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var k = this.j2d_1[i];
        if (!(k == null)) {
          var tmp = result;
          var tmp_0 = caseInsensitiveHashCode(Companion_getInstance(), k);
          var tmp0_safe_receiver = this.k2d_1[i];
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
          result = tmp + (tmp_0 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
        }
      }
       while (inductionVariable <= last);
    return result;
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
    var tmp$ret$1 = toString_0(_this__u8e3s4).toLowerCase();
    return charCodeAt(tmp$ret$1, 0) === _this__u8e3s4;
  }
  function caseInsensitiveMap() {
    return new CaseInsensitiveMap();
  }
  function SilentSupervisor(parent) {
    parent = parent === VOID ? null : parent;
    var tmp = SupervisorJob(parent);
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    var tmp$ret$0 = new SilentSupervisor$$inlined$CoroutineExceptionHandler$1();
    return tmp.ah(tmp$ret$0);
  }
  function SilentSupervisor$$inlined$CoroutineExceptionHandler$1() {
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(SilentSupervisor$$inlined$CoroutineExceptionHandler$1).r1l = function (context, exception) {
    return Unit_instance;
  };
  function get_digits() {
    _init_properties_Crypto_kt__txayzl();
    return digits;
  }
  var digits;
  function generateNonce(size) {
    _init_properties_Crypto_kt__txayzl();
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    while (get_size(builder) < size) {
      writeText(builder, generateNonce_0());
    }
    return readByteArray(builder, size);
  }
  function hex(bytes) {
    _init_properties_Crypto_kt__txayzl();
    var result = charArray(imul(bytes.length, 2));
    var resultIndex = 0;
    var digits = get_digits();
    var inductionVariable = 0;
    var last = bytes.length;
    while (inductionVariable < last) {
      var element = bytes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var b = element & 255;
      var _unary__edvuaz = resultIndex;
      resultIndex = _unary__edvuaz + 1 | 0;
      result[_unary__edvuaz] = digits[b >> 4];
      var _unary__edvuaz_0 = resultIndex;
      resultIndex = _unary__edvuaz_0 + 1 | 0;
      result[_unary__edvuaz_0] = digits[b & 15];
    }
    return concatToString(result);
  }
  var properties_initialized_Crypto_kt_8g5vqb;
  function _init_properties_Crypto_kt__txayzl() {
    if (!properties_initialized_Crypto_kt_8g5vqb) {
      properties_initialized_Crypto_kt_8g5vqb = true;
      digits = toCharArray('0123456789abcdef');
    }
  }
  function PlatformUtils() {
    PlatformUtils_instance = this;
    var tmp = this;
    var platform = get_platform(this);
    var tmp_0;
    if (platform instanceof Js) {
      tmp_0 = platform.t2e_1.equals(JsPlatform_Browser_getInstance());
    } else {
      if (platform instanceof WasmJs) {
        tmp_0 = platform.s2e_1.equals(JsPlatform_Browser_getInstance());
      } else {
        tmp_0 = false;
      }
    }
    tmp.u2e_1 = tmp_0;
    var tmp_1 = this;
    var platform_0 = get_platform(this);
    var tmp_2;
    if (platform_0 instanceof Js) {
      tmp_2 = platform_0.t2e_1.equals(JsPlatform_Node_getInstance());
    } else {
      if (platform_0 instanceof WasmJs) {
        tmp_2 = platform_0.s2e_1.equals(JsPlatform_Node_getInstance());
      } else {
        tmp_2 = false;
      }
    }
    tmp_1.v2e_1 = tmp_2;
    var tmp_3 = this;
    var tmp_4 = get_platform(this);
    tmp_3.w2e_1 = tmp_4 instanceof Js;
    var tmp_5 = this;
    var tmp_6 = get_platform(this);
    tmp_5.x2e_1 = tmp_6 instanceof WasmJs;
    this.y2e_1 = equals_0(get_platform(this), Jvm_getInstance());
    this.z2e_1 = equals_0(get_platform(this), Native_getInstance());
    this.a2f_1 = get_isDevelopmentMode(this);
    this.b2f_1 = true;
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
    this.t2e_1 = jsPlatform;
  }
  protoOf(Js).toString = function () {
    return 'Js(jsPlatform=' + this.t2e_1.toString() + ')';
  };
  protoOf(Js).hashCode = function () {
    return this.t2e_1.hashCode();
  };
  protoOf(Js).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Js))
      return false;
    if (!this.t2e_1.equals(other.t2e_1))
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
    var _iterator__ex2g4s = builder.c2f().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var name = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var values = element.n1();
      _this__u8e3s4.d2f(name, values);
    }
    return _this__u8e3s4;
  }
  function StringValues() {
  }
  function ensureListForKey($this, name) {
    var tmp0_elvis_lhs = $this.j2f_1.s2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableListOf' call
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$();
      $this.k2f(name);
      // Inline function 'kotlin.collections.set' call
      $this.j2f_1.v2(name, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StringValuesBuilderImpl$appendAll$lambda(this$0) {
    return function (name, values) {
      this$0.d2f(name, values);
      return Unit_instance;
    };
  }
  function StringValuesBuilderImpl(caseInsensitiveName, size) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    size = size === VOID ? 8 : size;
    this.i2f_1 = caseInsensitiveName;
    this.j2f_1 = this.i2f_1 ? caseInsensitiveMap() : LinkedHashMap_init_$Create$(size);
  }
  protoOf(StringValuesBuilderImpl).e2f = function () {
    return this.i2f_1;
  };
  protoOf(StringValuesBuilderImpl).f2f = function (name) {
    return this.j2f_1.s2(name);
  };
  protoOf(StringValuesBuilderImpl).g2f = function () {
    return this.j2f_1.t2();
  };
  protoOf(StringValuesBuilderImpl).r = function () {
    return this.j2f_1.r();
  };
  protoOf(StringValuesBuilderImpl).c2f = function () {
    return unmodifiable(this.j2f_1.l1());
  };
  protoOf(StringValuesBuilderImpl).l2f = function (name, value) {
    this.m2f(value);
    var list = ensureListForKey(this, name);
    list.y2();
    list.b1(value);
  };
  protoOf(StringValuesBuilderImpl).p2e = function (name) {
    var tmp0_safe_receiver = this.f2f(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesBuilderImpl).n2f = function (name, value) {
    this.m2f(value);
    ensureListForKey(this, name).b1(value);
  };
  protoOf(StringValuesBuilderImpl).o2f = function (stringValues) {
    stringValues.h2f(StringValuesBuilderImpl$appendAll$lambda(this));
  };
  protoOf(StringValuesBuilderImpl).d2f = function (name, values) {
    // Inline function 'kotlin.let' call
    var list = ensureListForKey(this, name);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      this.m2f(element);
    }
    addAll(list, values);
  };
  protoOf(StringValuesBuilderImpl).p2f = function (name) {
    this.j2f_1.w2(name);
  };
  protoOf(StringValuesBuilderImpl).y2 = function () {
    this.j2f_1.y2();
  };
  protoOf(StringValuesBuilderImpl).k2f = function (name) {
  };
  protoOf(StringValuesBuilderImpl).m2f = function (value) {
  };
  function tableSizeFor($this, size) {
    var n = size - 1 | 0;
    n = n | (n >>> 1 | 0);
    n = n | (n >>> 2 | 0);
    n = n | (n >>> 4 | 0);
    n = n | (n >>> 8 | 0);
    n = n | (n >>> 16 | 0);
    return n < 4 ? 4 : n + 1 | 0;
  }
  function caseInsensitiveHashCode_0($this, s) {
    var h = 0;
    var inductionVariable = 0;
    var last = s.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = imul(31, h);
        // Inline function 'kotlin.text.lowercaseChar' call
        // Inline function 'kotlin.text.lowercase' call
        var this_0 = charCodeAt(s, i);
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$1 = toString_0(this_0).toLowerCase();
        // Inline function 'kotlin.code' call
        var this_1 = charCodeAt(tmp$ret$1, 0);
        h = tmp + Char__toInt_impl_vasixd(this_1) | 0;
      }
       while (inductionVariable < last);
    return h;
  }
  function listForKey($this, name) {
    if ($this.t2f_1 === 0)
      return null;
    var hash = computeHash($this, name);
    var idx = $this.u2f_1[hash & ($this.u2f_1.length - 1 | 0)];
    while (idx >= 0) {
      if (equals($this.r2f_1[idx], name, $this.q2f_1)) {
        return $this.s2f_1[idx];
      }
      idx = $this.v2f_1[idx];
    }
    return null;
  }
  function computeHash($this, key) {
    var tmp;
    if ($this.q2f_1) {
      tmp = caseInsensitiveHashCode_0(Companion_instance_1, key);
    } else {
      tmp = getStringHashCode(key);
    }
    return tmp;
  }
  function StringValuesEntry(key, value) {
    this.w2f_1 = key;
    this.x2f_1 = value;
  }
  protoOf(StringValuesEntry).m1 = function () {
    return this.w2f_1;
  };
  protoOf(StringValuesEntry).n1 = function () {
    return this.x2f_1;
  };
  protoOf(StringValuesEntry).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Entry) : false) {
      tmp_0 = equals_0(other.m1(), this.w2f_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals_0(other.n1(), this.x2f_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StringValuesEntry).hashCode = function () {
    return getStringHashCode(this.w2f_1) ^ hashCode(this.x2f_1);
  };
  protoOf(StringValuesEntry).toString = function () {
    return this.w2f_1 + '=' + toString(this.x2f_1);
  };
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    return Companion_instance_1;
  }
  function StringValuesImpl(caseInsensitiveName, values) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    values = values === VOID ? emptyMap() : values;
    this.q2f_1 = caseInsensitiveName;
    if (values.r()) {
      this.t2f_1 = 0;
      var tmp = this;
      // Inline function 'kotlin.emptyArray' call
      tmp.r2f_1 = [];
      var tmp_0 = this;
      // Inline function 'kotlin.emptyArray' call
      tmp_0.s2f_1 = [];
      this.u2f_1 = new Int32Array(0);
      this.v2f_1 = new Int32Array(0);
    } else if (!this.q2f_1) {
      this.t2f_1 = values.e1();
      var tmp_1 = this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size = this.t2f_1;
      var tmp_2 = Array(size);
      tmp_1.r2f_1 = isArray(tmp_2) ? tmp_2 : THROW_CCE();
      var tmp_3 = this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size_0 = this.t2f_1;
      var tmp_4 = Array(size_0);
      tmp_3.s2f_1 = isArray(tmp_4) ? tmp_4 : THROW_CCE();
      var tableSize = tableSizeFor(Companion_instance_1, this.t2f_1);
      var tmp_5 = this;
      var tmp_6 = 0;
      var tmp_7 = new Int32Array(tableSize);
      while (tmp_6 < tableSize) {
        tmp_7[tmp_6] = -1;
        tmp_6 = tmp_6 + 1 | 0;
      }
      tmp_5.u2f_1 = tmp_7;
      var tmp_8 = this;
      var tmp_9 = 0;
      var tmp_10 = this.t2f_1;
      var tmp_11 = new Int32Array(tmp_10);
      while (tmp_9 < tmp_10) {
        tmp_11[tmp_9] = -1;
        tmp_9 = tmp_9 + 1 | 0;
      }
      tmp_8.v2f_1 = tmp_11;
      var i = 0;
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = values.l1().t();
      while (_iterator__ex2g4s.u()) {
        var _destruct__k2r9zo = _iterator__ex2g4s.v();
        // Inline function 'kotlin.collections.component1' call
        var key = _destruct__k2r9zo.m1();
        // Inline function 'kotlin.collections.component2' call
        var value = _destruct__k2r9zo.n1();
        this.r2f_1[i] = key;
        var tmp_12 = i;
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var size_1 = value.e1();
        var list = ArrayList_init_$Create$_0(size_1);
        // Inline function 'kotlin.repeat' call
        var inductionVariable = 0;
        if (inductionVariable < size_1)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$13 = value.d1(index);
            list.b1(tmp$ret$13);
          }
           while (inductionVariable < size_1);
        this.s2f_1[tmp_12] = list;
        var hash = computeHash(this, key);
        var bucket = hash & (tableSize - 1 | 0);
        this.v2f_1[i] = this.u2f_1[bucket];
        this.u2f_1[bucket] = i;
        i = i + 1 | 0;
      }
    } else {
      var deduped = caseInsensitiveMap();
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_0 = values.l1().t();
      while (_iterator__ex2g4s_0.u()) {
        var _destruct__k2r9zo_0 = _iterator__ex2g4s_0.v();
        // Inline function 'kotlin.collections.component1' call
        var key_0 = _destruct__k2r9zo_0.m1();
        // Inline function 'kotlin.collections.component2' call
        var value_0 = _destruct__k2r9zo_0.n1();
        var existing = deduped.s2(key_0);
        if (!(existing == null)) {
          // Inline function 'kotlin.collections.set' call
          var value_1 = plus(existing, value_0);
          deduped.v2(key_0, value_1);
        } else {
          // Inline function 'kotlin.collections.set' call
          deduped.v2(key_0, value_0);
        }
      }
      this.t2f_1 = deduped.e1();
      var tmp_13 = this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size_2 = this.t2f_1;
      var tmp_14 = Array(size_2);
      tmp_13.r2f_1 = isArray(tmp_14) ? tmp_14 : THROW_CCE();
      var tmp_15 = this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size_3 = this.t2f_1;
      var tmp_16 = Array(size_3);
      tmp_15.s2f_1 = isArray(tmp_16) ? tmp_16 : THROW_CCE();
      var tableSize_0 = tableSizeFor(Companion_instance_1, this.t2f_1);
      var tmp_17 = this;
      var tmp_18 = 0;
      var tmp_19 = new Int32Array(tableSize_0);
      while (tmp_18 < tableSize_0) {
        tmp_19[tmp_18] = -1;
        tmp_18 = tmp_18 + 1 | 0;
      }
      tmp_17.u2f_1 = tmp_19;
      var tmp_20 = this;
      var tmp_21 = 0;
      var tmp_22 = this.t2f_1;
      var tmp_23 = new Int32Array(tmp_22);
      while (tmp_21 < tmp_22) {
        tmp_23[tmp_21] = -1;
        tmp_21 = tmp_21 + 1 | 0;
      }
      tmp_20.v2f_1 = tmp_23;
      var i_0 = 0;
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = deduped.l1().t();
      while (_iterator__ex2g4s_1.u()) {
        var _destruct__k2r9zo_1 = _iterator__ex2g4s_1.v();
        // Inline function 'kotlin.collections.component1' call
        var key_1 = _destruct__k2r9zo_1.m1();
        // Inline function 'kotlin.collections.component2' call
        var value_2 = _destruct__k2r9zo_1.n1();
        this.r2f_1[i_0] = key_1;
        var tmp_24 = i_0;
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var size_4 = value_2.e1();
        var list_0 = ArrayList_init_$Create$_0(size_4);
        // Inline function 'kotlin.repeat' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < size_4)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp$ret$30 = value_2.d1(index_0);
            list_0.b1(tmp$ret$30);
          }
           while (inductionVariable_0 < size_4);
        this.s2f_1[tmp_24] = list_0;
        var hash_0 = computeHash(this, key_1);
        var bucket_0 = hash_0 & (tableSize_0 - 1 | 0);
        this.v2f_1[i_0] = this.u2f_1[bucket_0];
        this.u2f_1[bucket_0] = i_0;
        i_0 = i_0 + 1 | 0;
      }
    }
  }
  protoOf(StringValuesImpl).e2f = function () {
    return this.q2f_1;
  };
  protoOf(StringValuesImpl).p2e = function (name) {
    var tmp0_safe_receiver = listForKey(this, name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesImpl).f2f = function (name) {
    return listForKey(this, name);
  };
  protoOf(StringValuesImpl).g2f = function () {
    if (this.t2f_1 === 0)
      return emptySet();
    // Inline function 'kotlin.collections.linkedSetOf' call
    var result = LinkedHashSet_init_$Create$();
    var inductionVariable = 0;
    var last = this.t2f_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result.b1(this.r2f_1[i]);
      }
       while (inductionVariable < last);
    return result;
  };
  protoOf(StringValuesImpl).r = function () {
    return this.t2f_1 === 0;
  };
  protoOf(StringValuesImpl).c2f = function () {
    if (this.t2f_1 === 0)
      return emptySet();
    // Inline function 'kotlin.collections.linkedSetOf' call
    var result = LinkedHashSet_init_$Create$();
    var inductionVariable = 0;
    var last = this.t2f_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result.b1(new StringValuesEntry(this.r2f_1[i], this.s2f_1[i]));
      }
       while (inductionVariable < last);
    return result;
  };
  protoOf(StringValuesImpl).h2f = function (body) {
    var inductionVariable = 0;
    var last = this.t2f_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        body(this.r2f_1[i], this.s2f_1[i]);
      }
       while (inductionVariable < last);
  };
  protoOf(StringValuesImpl).toString = function () {
    return 'StringValues(case=' + !this.q2f_1 + ') ' + toString(this.c2f());
  };
  protoOf(StringValuesImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.q2f_1 === other.e2f()))
      return false;
    return entriesEquals(this.c2f(), other.c2f());
  };
  protoOf(StringValuesImpl).hashCode = function () {
    return entriesHashCode(this.c2f(), imul(31, getBooleanHashCode(this.q2f_1)));
  };
  function StringValuesSingleImpl$entries$1(this$0) {
    this.y2f_1 = this$0.b2g_1;
    this.z2f_1 = this$0.c2g_1;
  }
  protoOf(StringValuesSingleImpl$entries$1).m1 = function () {
    return this.y2f_1;
  };
  protoOf(StringValuesSingleImpl$entries$1).n1 = function () {
    return this.z2f_1;
  };
  protoOf(StringValuesSingleImpl$entries$1).toString = function () {
    return this.y2f_1 + '=' + toString(this.z2f_1);
  };
  protoOf(StringValuesSingleImpl$entries$1).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Entry) : false) {
      tmp_0 = equals_0(other.m1(), this.y2f_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals_0(other.n1(), this.z2f_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StringValuesSingleImpl$entries$1).hashCode = function () {
    return getStringHashCode(this.y2f_1) ^ hashCode(this.z2f_1);
  };
  function StringValuesSingleImpl(caseInsensitiveName, name, values) {
    this.a2g_1 = caseInsensitiveName;
    this.b2g_1 = name;
    this.c2g_1 = values;
  }
  protoOf(StringValuesSingleImpl).e2f = function () {
    return this.a2g_1;
  };
  protoOf(StringValuesSingleImpl).f2f = function (name) {
    return equals(this.b2g_1, name, this.e2f()) ? this.c2g_1 : null;
  };
  protoOf(StringValuesSingleImpl).c2f = function () {
    return setOf(new StringValuesSingleImpl$entries$1(this));
  };
  protoOf(StringValuesSingleImpl).r = function () {
    return false;
  };
  protoOf(StringValuesSingleImpl).g2f = function () {
    return setOf(this.b2g_1);
  };
  protoOf(StringValuesSingleImpl).toString = function () {
    return 'StringValues(case=' + !this.e2f() + ') ' + toString(this.c2f());
  };
  protoOf(StringValuesSingleImpl).hashCode = function () {
    return entriesHashCode(this.c2f(), imul(31, getBooleanHashCode(this.e2f())));
  };
  protoOf(StringValuesSingleImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.e2f() === other.e2f()))
      return false;
    return entriesEquals(this.c2f(), other.c2f());
  };
  protoOf(StringValuesSingleImpl).h2f = function (body) {
    return body(this.b2g_1, this.c2g_1);
  };
  protoOf(StringValuesSingleImpl).p2e = function (name) {
    return equals(name, this.b2g_1, this.e2f()) ? firstOrNull(this.c2g_1) : null;
  };
  function entriesEquals(a, b) {
    return equals_0(a, b);
  }
  function entriesHashCode(entries, seed) {
    return imul(seed, 31) + hashCode(entries) | 0;
  }
  function toMap(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.c2f();
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var tmp = element.m1();
      var tmp$ret$2 = toList(element.n1());
      destination.v2(tmp, tmp$ret$2);
    }
    return destination;
  }
  function toLowerCasePreservingASCIIRules(_this__u8e3s4) {
    var tmp$ret$0;
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
            tmp$ret$0 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = -1;
    }
    var firstIndex = tmp$ret$0;
    if (firstIndex === -1) {
      return _this__u8e3s4;
    }
    var original = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    var capacity = _this__u8e3s4.length;
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    this_0.ac(original, 0, firstIndex);
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
      var tmp$ret$1 = toString_0(ch).toLowerCase();
      tmp = charCodeAt(tmp$ret$1, 0);
    }
    return tmp;
  }
  function ChannelIOException() {
  }
  function CopyOnWriteHashMap() {
    this.d2g_1 = atomic$ref$1(emptyMap());
  }
  protoOf(CopyOnWriteHashMap).e2g = function (key) {
    return this.d2g_1.kotlinx$atomicfu$value.s2(key);
  };
  function GMTDate$Companion$$childSerializers$_anonymous__gyfycy() {
    return createSimpleEnumSerializer('io.ktor.util.date.WeekDay', values());
  }
  function GMTDate$Companion$$childSerializers$_anonymous__gyfycy_0() {
    return createSimpleEnumSerializer('io.ktor.util.date.Month', values_0());
  }
  function Companion_1() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, GMTDate$Companion$$childSerializers$_anonymous__gyfycy);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.f2g_1 = [null, null, null, tmp_1, null, null, lazy(tmp_2, GMTDate$Companion$$childSerializers$_anonymous__gyfycy_0), null, null];
    this.g2g_1 = GMTDate_0(new Long(0, 0));
  }
  var Companion_instance_2;
  function Companion_getInstance_1() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('io.ktor.util.date.GMTDate', this, 9);
    tmp0_serialDesc.vz('seconds', false);
    tmp0_serialDesc.vz('minutes', false);
    tmp0_serialDesc.vz('hours', false);
    tmp0_serialDesc.vz('dayOfWeek', false);
    tmp0_serialDesc.vz('dayOfMonth', false);
    tmp0_serialDesc.vz('dayOfYear', false);
    tmp0_serialDesc.vz('month', false);
    tmp0_serialDesc.vz('year', false);
    tmp0_serialDesc.vz('timestamp', false);
    this.h2g_1 = tmp0_serialDesc;
  }
  protoOf($serializer).i2g = function (encoder, value) {
    var tmp0_desc = this.h2g_1;
    var tmp1_output = encoder.fs(tmp0_desc);
    var tmp2_cached = Companion_getInstance_1().f2g_1;
    tmp1_output.pt(tmp0_desc, 0, value.j2g_1);
    tmp1_output.pt(tmp0_desc, 1, value.k2g_1);
    tmp1_output.pt(tmp0_desc, 2, value.l2g_1);
    tmp1_output.wt(tmp0_desc, 3, tmp2_cached[3].n1(), value.m2g_1);
    tmp1_output.pt(tmp0_desc, 4, value.n2g_1);
    tmp1_output.pt(tmp0_desc, 5, value.o2g_1);
    tmp1_output.wt(tmp0_desc, 6, tmp2_cached[6].n1(), value.p2g_1);
    tmp1_output.pt(tmp0_desc, 7, value.q2g_1);
    tmp1_output.qt(tmp0_desc, 8, value.r2g_1);
    tmp1_output.gs(tmp0_desc);
  };
  protoOf($serializer).ep = function (encoder, value) {
    return this.i2g(encoder, value instanceof GMTDate ? value : THROW_CCE());
  };
  protoOf($serializer).fp = function (decoder) {
    var tmp0_desc = this.h2g_1;
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
    var tmp13_input = decoder.fs(tmp0_desc);
    var tmp14_cached = Companion_getInstance_1().f2g_1;
    if (tmp13_input.vs()) {
      tmp4_local0 = tmp13_input.ks(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.ks(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.ks(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.rs(tmp0_desc, 3, tmp14_cached[3].n1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.ks(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.ks(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.rs(tmp0_desc, 6, tmp14_cached[6].n1(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.ks(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.ls(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.ws(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.ks(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.ks(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.ks(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.rs(tmp0_desc, 3, tmp14_cached[3].n1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.ks(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.ks(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.rs(tmp0_desc, 6, tmp14_cached[6].n1(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.ks(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.ls(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.gs(tmp0_desc);
    return GMTDate_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer).dp = function () {
    return this.h2g_1;
  };
  protoOf($serializer).k10 = function () {
    var tmp0_cached = Companion_getInstance_1().f2g_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), tmp0_cached[3].n1(), IntSerializer_getInstance(), IntSerializer_getInstance(), tmp0_cached[6].n1(), IntSerializer_getInstance(), LongSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function GMTDate_init_$Init$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker, $this) {
    if (!(511 === (511 & seen0))) {
      throwMissingFieldException(seen0, 511, $serializer_getInstance().h2g_1);
    }
    $this.j2g_1 = seconds;
    $this.k2g_1 = minutes;
    $this.l2g_1 = hours;
    $this.m2g_1 = dayOfWeek;
    $this.n2g_1 = dayOfMonth;
    $this.o2g_1 = dayOfYear;
    $this.p2g_1 = month;
    $this.q2g_1 = year;
    $this.r2g_1 = timestamp;
    return $this;
  }
  function GMTDate_init_$Create$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker) {
    return GMTDate_init_$Init$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker, objectCreate(protoOf(GMTDate)));
  }
  function GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    Companion_getInstance_1();
    this.j2g_1 = seconds;
    this.k2g_1 = minutes;
    this.l2g_1 = hours;
    this.m2g_1 = dayOfWeek;
    this.n2g_1 = dayOfMonth;
    this.o2g_1 = dayOfYear;
    this.p2g_1 = month;
    this.q2g_1 = year;
    this.r2g_1 = timestamp;
  }
  protoOf(GMTDate).s2g = function (other) {
    return this.r2g_1.j3(other.r2g_1);
  };
  protoOf(GMTDate).d = function (other) {
    return this.s2g(other instanceof GMTDate ? other : THROW_CCE());
  };
  protoOf(GMTDate).toString = function () {
    return 'GMTDate(seconds=' + this.j2g_1 + ', minutes=' + this.k2g_1 + ', hours=' + this.l2g_1 + ', dayOfWeek=' + this.m2g_1.toString() + ', dayOfMonth=' + this.n2g_1 + ', dayOfYear=' + this.o2g_1 + ', month=' + this.p2g_1.toString() + ', year=' + this.q2g_1 + ', timestamp=' + this.r2g_1.toString() + ')';
  };
  protoOf(GMTDate).hashCode = function () {
    var result = this.j2g_1;
    result = imul(result, 31) + this.k2g_1 | 0;
    result = imul(result, 31) + this.l2g_1 | 0;
    result = imul(result, 31) + this.m2g_1.hashCode() | 0;
    result = imul(result, 31) + this.n2g_1 | 0;
    result = imul(result, 31) + this.o2g_1 | 0;
    result = imul(result, 31) + this.p2g_1.hashCode() | 0;
    result = imul(result, 31) + this.q2g_1 | 0;
    result = imul(result, 31) + this.r2g_1.hashCode() | 0;
    return result;
  };
  protoOf(GMTDate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GMTDate))
      return false;
    if (!(this.j2g_1 === other.j2g_1))
      return false;
    if (!(this.k2g_1 === other.k2g_1))
      return false;
    if (!(this.l2g_1 === other.l2g_1))
      return false;
    if (!this.m2g_1.equals(other.m2g_1))
      return false;
    if (!(this.n2g_1 === other.n2g_1))
      return false;
    if (!(this.o2g_1 === other.o2g_1))
      return false;
    if (!this.p2g_1.equals(other.p2g_1))
      return false;
    if (!(this.q2g_1 === other.q2g_1))
      return false;
    if (!equalsLong(this.r2g_1, other.r2g_1))
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
  function Companion_2() {
  }
  protoOf(Companion_2).t2g = function (ordinal) {
    return get_entries().d1(ordinal);
  };
  var Companion_instance_3;
  function Companion_getInstance_2() {
    return Companion_instance_3;
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
    this.w2g_1 = value;
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
  function Companion_3() {
  }
  protoOf(Companion_3).t2g = function (ordinal) {
    return get_entries_0().d1(ordinal);
  };
  var Companion_instance_4;
  function Companion_getInstance_3() {
    return Companion_instance_4;
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
    this.z2g_1 = value;
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
  protoOf(LockFreeLinkedListNode).u1r = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.a2h_1;
    while (true) {
      var next = this_0.kotlinx$atomicfu$value;
      if (!(next instanceof OpDescriptor))
        return next;
      next.b2h(this);
    }
  };
  protoOf(LockFreeLinkedListNode).c2h = function () {
    return unwrap(this.u1r());
  };
  function Symbol(symbol) {
    this.d2h_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return this.d2h_1;
  };
  function Removed() {
  }
  function OpDescriptor() {
  }
  function unwrap(_this__u8e3s4) {
    _init_properties_LockFreeLinkedList_kt__wekxce();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof Removed ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e2h_1;
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
    this.n2h_1 = _this__u8e3s4;
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
            this.o2h_1 = this.n2h_1.u2h_1;
            if (this.o2h_1 === -1) {
              this.n8_1 = 5;
              continue $sm;
            } else {
              this.n8_1 = 2;
              continue $sm;
            }

          case 2:
            this.p2h_1 = this.n2h_1.r2h_1;
            if (this.o2h_1 >= this.p2h_1.e1()) {
              this.n2h_1.v2h();
              this.n8_1 = 5;
              continue $sm;
            } else {
              this.n8_1 = 3;
              continue $sm;
            }

          case 3:
            var executeInterceptor = this.p2h_1.d1(this.o2h_1);
            this.n2h_1.u2h_1 = this.o2h_1 + 1 | 0;
            this.n8_1 = 4;
            suspendResult = executeInterceptor(this.n2h_1, this.n2h_1.t2h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.n8_1 = 1;
            continue $sm;
          case 5:
            return this.n2h_1.t2h_1;
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
    this.r2h_1 = interceptors;
    this.s2h_1 = coroutineContext;
    this.t2h_1 = subject;
    this.u2h_1 = 0;
  }
  protoOf(DebugPipelineContext).j1e = function () {
    return this.s2h_1;
  };
  protoOf(DebugPipelineContext).w2h = function () {
    return this.t2h_1;
  };
  protoOf(DebugPipelineContext).v2h = function () {
    this.u2h_1 = -1;
  };
  protoOf(DebugPipelineContext).x2h = function (subject, $completion) {
    this.t2h_1 = subject;
    return this.y2h($completion);
  };
  protoOf(DebugPipelineContext).y2h = function ($completion) {
    var index = this.u2h_1;
    if (index < 0)
      return this.t2h_1;
    if (index >= this.r2h_1.e1()) {
      this.v2h();
      return this.t2h_1;
    }
    return proceedLoop(this, $completion);
  };
  protoOf(DebugPipelineContext).z2h = function (initial, $completion) {
    this.u2h_1 = 0;
    this.t2h_1 = initial;
    return this.y2h($completion);
  };
  function PhaseContent_init_$Init$(phase, relation, $this) {
    var tmp = Companion_getInstance_4().a2i_1;
    PhaseContent.call($this, phase, relation, isInterface(tmp, KtMutableList) ? tmp : THROW_CCE());
    // Inline function 'kotlin.check' call
    if (!Companion_getInstance_4().a2i_1.r()) {
      var message = 'The shared empty array list has been modified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PhaseContent_init_$Create$(phase, relation) {
    return PhaseContent_init_$Init$(phase, relation, objectCreate(protoOf(PhaseContent)));
  }
  function copiedInterceptors($this) {
    return toMutableList($this.d2i_1);
  }
  function copyInterceptors($this) {
    $this.d2i_1 = copiedInterceptors($this);
    $this.e2i_1 = false;
  }
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.a2i_1 = ArrayList_init_$Create$();
  }
  var Companion_instance_5;
  function Companion_getInstance_4() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function PhaseContent(phase, relation, interceptors) {
    Companion_getInstance_4();
    this.b2i_1 = phase;
    this.c2i_1 = relation;
    this.d2i_1 = interceptors;
    this.e2i_1 = true;
  }
  protoOf(PhaseContent).f2i = function () {
    return this.d2i_1.r();
  };
  protoOf(PhaseContent).e1 = function () {
    return this.d2i_1.e1();
  };
  protoOf(PhaseContent).g2i = function (interceptor) {
    if (this.e2i_1) {
      copyInterceptors(this);
    }
    this.d2i_1.b1(interceptor);
  };
  protoOf(PhaseContent).h2i = function (destination) {
    var interceptors = this.d2i_1;
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
  protoOf(PhaseContent).i2i = function () {
    this.e2i_1 = true;
    return this.d2i_1;
  };
  protoOf(PhaseContent).toString = function () {
    return 'Phase `' + this.b2i_1.j2i_1 + '`, ' + this.e1() + ' handlers';
  };
  function _set_interceptors__wod97b($this, _set____db54di) {
    var tmp0 = $this.o2i_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Pipeline$_get_interceptors_$ref_u6zl4e_0();
    // Inline function 'kotlinx.atomicfu.AtomicRef.setValue' call
    getPropertyCallableRef('interceptors', 1, tmp, tmp_0, Pipeline$_set_interceptors_$ref_13vc1m_0());
    tmp0.kotlinx$atomicfu$value = _set____db54di;
    return Unit_instance;
  }
  function _get_interceptors__h4min7($this) {
    var tmp0 = $this.o2i_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Pipeline$_get_interceptors_$ref_u6zl4e();
    // Inline function 'kotlinx.atomicfu.AtomicRef.getValue' call
    getPropertyCallableRef('interceptors', 1, tmp, tmp_0, Pipeline$_set_interceptors_$ref_13vc1m());
    return tmp0.kotlinx$atomicfu$value;
  }
  function createContext($this, context, subject, coroutineContext) {
    return pipelineContextFor(context, sharedInterceptorsList($this), subject, coroutineContext, $this.r2i());
  }
  function findPhase($this, phase) {
    var phasesList = $this.m2i_1;
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
          tmp = current.b2i_1 === phase;
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
    var phasesList = $this.m2i_1;
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
            tmp_0 = current.b2i_1 === phase;
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
    var phasesList = $this.m2i_1;
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
            tmp_0 = current.b2i_1 === phase;
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
    var interceptorsQuantity = $this.n2i_1;
    if (interceptorsQuantity === 0) {
      notSharedInterceptorsList($this, emptyList());
      return emptyList();
    }
    var phases = $this.m2i_1;
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
          if (phaseContent.f2i())
            continue $l$loop_0;
          var interceptors = phaseContent.i2i();
          setInterceptorsListFromPhase($this, phaseContent);
          return interceptors;
        }
         while (!(phaseIndex === last));
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$();
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
        phase.h2i(destination);
      }
       while (!(phaseIndex_0 === last_0));
    notSharedInterceptorsList($this, destination);
    return destination;
  }
  function sharedInterceptorsList($this) {
    if (_get_interceptors__h4min7($this) == null) {
      cacheInterceptors($this);
    }
    $this.p2i_1 = true;
    return ensureNotNull(_get_interceptors__h4min7($this));
  }
  function resetInterceptorsList($this) {
    _set_interceptors__wod97b($this, null);
    $this.p2i_1 = false;
    $this.q2i_1 = null;
  }
  function notSharedInterceptorsList($this, list) {
    _set_interceptors__wod97b($this, list);
    $this.p2i_1 = false;
    $this.q2i_1 = null;
  }
  function setInterceptorsListFromPhase($this, phaseContent) {
    _set_interceptors__wod97b($this, phaseContent.i2i());
    $this.p2i_1 = false;
    $this.q2i_1 = phaseContent.b2i_1;
  }
  function tryAddToPhaseFastPath($this, phase, block) {
    var currentInterceptors = _get_interceptors__h4min7($this);
    if ($this.m2i_1.r() || currentInterceptors == null) {
      return false;
    }
    var tmp;
    if ($this.p2i_1) {
      tmp = true;
    } else {
      tmp = !isInterface(currentInterceptors, KtMutableList);
    }
    if (tmp) {
      return false;
    }
    if (equals_0($this.q2i_1, phase)) {
      currentInterceptors.b1(block);
      return true;
    }
    if (equals_0(phase, last($this.m2i_1)) || findPhaseIndex($this, phase) === get_lastIndex_0($this.m2i_1)) {
      ensureNotNull(findPhase($this, phase)).g2i(block);
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
    this.k2i_1 = AttributesJsFn(true);
    this.l2i_1 = false;
    this.m2i_1 = mutableListOf(phases.slice());
    this.n2i_1 = 0;
    this.o2i_1 = atomic$ref$1(null);
    this.p2i_1 = false;
    this.q2i_1 = null;
  }
  protoOf(Pipeline).r2i = function () {
    return this.l2i_1;
  };
  protoOf(Pipeline).s2i = function (context, subject, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.t8();
    return createContext(this, context, subject, tmp$ret$0).z2h(subject, $completion);
  };
  protoOf(Pipeline).u2i = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_instance;
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference.toString() + ' was not registered for this pipeline');
    }
    var lastRelatedPhaseIndex = index;
    var inductionVariable = index + 1 | 0;
    var last = get_lastIndex_0(this.m2i_1);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.m2i_1.d1(i);
        var tmp0_safe_receiver = tmp instanceof PhaseContent ? tmp : null;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c2i_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var relation = tmp_0;
        var tmp2_safe_receiver = relation instanceof After ? relation : null;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.v2i_1;
        var tmp_1;
        if (tmp3_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp_1 = tmp3_elvis_lhs;
        }
        var relatedTo = tmp_1;
        lastRelatedPhaseIndex = equals_0(relatedTo, reference) ? i : lastRelatedPhaseIndex;
      }
       while (!(i === last));
    this.m2i_1.a3(lastRelatedPhaseIndex + 1 | 0, PhaseContent_init_$Create$(phase, new After(reference)));
  };
  protoOf(Pipeline).w2i = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_instance;
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference.toString() + ' was not registered for this pipeline');
    }
    this.m2i_1.a3(index, PhaseContent_init_$Create$(phase, new Before(reference)));
  };
  protoOf(Pipeline).x2i = function (phase, block) {
    var tmp0_elvis_lhs = findPhase(this, phase);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new InvalidPhaseException('Phase ' + phase.toString() + ' was not registered for this pipeline');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var phaseContent = tmp;
    if (tryAddToPhaseFastPath(this, phase, block)) {
      this.n2i_1 = this.n2i_1 + 1 | 0;
      return Unit_instance;
    }
    phaseContent.g2i(block);
    this.n2i_1 = this.n2i_1 + 1 | 0;
    resetInterceptorsList(this);
    this.y2i();
  };
  protoOf(Pipeline).y2i = function () {
  };
  protoOf(Pipeline).toString = function () {
    return anyToString(this);
  };
  function PipelineContext(context) {
    this.t2i_1 = context;
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
    this.j2i_1 = name;
  }
  protoOf(PipelinePhase).toString = function () {
    return "Phase('" + this.j2i_1 + "')";
  };
  function InvalidPhaseException(message) {
    extendThrowable(this, message);
    captureStack(this, InvalidPhaseException);
  }
  function After(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.v2i_1 = relativeTo;
  }
  function Before(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.z2i_1 = relativeTo;
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
      var currentIndex = $this.g2j_1;
      if (currentIndex === $this.b2j_1.e1()) {
        if (!direct) {
          // Inline function 'kotlin.Companion.success' call
          var value = $this.d2j_1;
          var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
          resumeRootWith($this, tmp$ret$0);
          return false;
        }
        return true;
      }
      $this.g2j_1 = currentIndex + 1 | 0;
      var next = $this.b2j_1.d1(currentIndex);
      try {
        var result = pipelineStartCoroutineUninterceptedOrReturn(next, $this, $this.d2j_1, $this.c2j_1);
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
    // Inline function 'kotlin.check' call
    if (!($this.f2j_1 >= 0)) {
      var message = 'No more continuations to resume';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var next = ensureNotNull($this.e2j_1[$this.f2j_1]);
    var _unary__edvuaz = $this.f2j_1;
    $this.f2j_1 = _unary__edvuaz - 1 | 0;
    $this.e2j_1[_unary__edvuaz] = null;
    var interceptor = next.t8().a9(Key_instance_0);
    var tmp;
    if (interceptor instanceof CoroutineDispatcher) {
      tmp = interceptor.n1l(next.t8()) ? intercepted(next) : next;
    } else {
      tmp = intercepted(next);
    }
    var toResume = tmp;
    var exception = Result__exceptionOrNull_impl_p6xea9(result);
    if (exception == null) {
      toResume.y8(result);
    } else {
      var recoveredException = recoverStackTraceBridge(exception, next);
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(recoveredException));
      toResume.y8(tmp$ret$3);
    }
  }
  function discardLastRootContinuation($this) {
    // Inline function 'kotlin.check' call
    if (!($this.f2j_1 >= 0)) {
      var message = 'No more continuations to resume';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var _unary__edvuaz = $this.f2j_1;
    $this.f2j_1 = _unary__edvuaz - 1 | 0;
    $this.e2j_1[_unary__edvuaz] = null;
  }
  function SuspendFunctionGun$continuation$1(this$0) {
    this.i2j_1 = this$0;
    this.h2j_1 = -2147483648;
  }
  protoOf(SuspendFunctionGun$continuation$1).t8 = function () {
    var inductionVariable = this.i2j_1.f2j_1;
    if (0 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var cont = this.i2j_1.e2j_1[index];
        if (!(cont === this) && !(cont == null))
          return cont.t8();
      }
       while (0 <= inductionVariable);
    // Inline function 'kotlin.error' call
    var message = 'Not started';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(SuspendFunctionGun$continuation$1).eg = function (result) {
    // Inline function 'kotlin.onFailure' call
    var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(result);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(tmp0_safe_receiver));
      resumeRootWith(this.i2j_1, tmp$ret$4);
      return Unit_instance;
    }
    loop(this.i2j_1, false);
  };
  protoOf(SuspendFunctionGun$continuation$1).y8 = function (result) {
    return this.eg(result);
  };
  function SuspendFunctionGun(initial, context, interceptors) {
    PipelineContext.call(this, context);
    this.b2j_1 = interceptors;
    var tmp = this;
    tmp.c2j_1 = new SuspendFunctionGun$continuation$1(this);
    this.d2j_1 = initial;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.b2j_1.e1();
    tmp_0.e2j_1 = Array(size);
    this.f2j_1 = -1;
    this.g2j_1 = 0;
  }
  protoOf(SuspendFunctionGun).j1e = function () {
    return this.c2j_1.t8();
  };
  protoOf(SuspendFunctionGun).w2h = function () {
    return this.d2j_1;
  };
  protoOf(SuspendFunctionGun).y2h = function ($completion) {
    var tmp$ret$0;
    $l$block_0: {
      if (this.g2j_1 === this.b2j_1.e1()) {
        tmp$ret$0 = this.d2j_1;
        break $l$block_0;
      }
      this.j2j($completion);
      if (loop(this, true)) {
        discardLastRootContinuation(this);
        tmp$ret$0 = this.d2j_1;
        break $l$block_0;
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  };
  protoOf(SuspendFunctionGun).x2h = function (subject, $completion) {
    this.d2j_1 = subject;
    return this.y2h($completion);
  };
  protoOf(SuspendFunctionGun).z2h = function (initial, $completion) {
    this.g2j_1 = 0;
    if (this.g2j_1 === this.b2j_1.e1())
      return initial;
    this.d2j_1 = initial;
    // Inline function 'kotlin.check' call
    if (!(this.f2j_1 < 0)) {
      var message = 'Already started';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.y2h($completion);
  };
  protoOf(SuspendFunctionGun).j2j = function (continuation) {
    this.f2j_1 = this.f2j_1 + 1 | 0;
    this.e2j_1[this.f2j_1] = continuation;
  };
  function TypeInfo(type, kotlinType) {
    kotlinType = kotlinType === VOID ? null : kotlinType;
    this.k2j_1 = type;
    this.l2j_1 = kotlinType;
  }
  protoOf(TypeInfo).hashCode = function () {
    var tmp0_safe_receiver = this.l2j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? this.k2j_1.hashCode() : tmp1_elvis_lhs;
  };
  protoOf(TypeInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypeInfo))
      return false;
    var tmp;
    if (!(this.l2j_1 == null) || !(other.l2j_1 == null)) {
      tmp = equals_0(this.l2j_1, other.l2j_1);
    } else {
      tmp = this.k2j_1.equals(other.k2j_1);
    }
    return tmp;
  };
  protoOf(TypeInfo).toString = function () {
    var tmp0_elvis_lhs = this.l2j_1;
    return 'TypeInfo(' + toString(tmp0_elvis_lhs == null ? this.k2j_1 : tmp0_elvis_lhs) + ')';
  };
  function get_platform(_this__u8e3s4) {
    _init_properties_PlatformUtils_js_kt__7rxm8p();
    var tmp0 = platform$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('platform', 1, tmp, _get_platform_$ref_41w7mv(), null);
    return tmp0.n1();
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
  function toJsArray(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4;
  }
  function toByteArray(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4;
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
    var dayOfWeek = Companion_instance_3.t2g((date.getUTCDay() + 6 | 0) % 7 | 0);
    var month = Companion_instance_4.t2g(date.getUTCMonth());
    return new GMTDate(date.getUTCSeconds(), date.getUTCMinutes(), date.getUTCHours(), dayOfWeek, date.getUTCDate(), date.getUTCFullYear(), month, date.getUTCFullYear(), numberToLong(date.getTime()));
  }
  function getTimeMillis() {
    return numberToLong((new Date()).getTime());
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
    tmp.m2j_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(AttributesJs).z2c = function (key) {
    return this.m2j_1.s2(key);
  };
  protoOf(AttributesJs).a2d = function (key) {
    return this.m2j_1.q2(key);
  };
  protoOf(AttributesJs).b2d = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.m2j_1.v2(key, value);
  };
  protoOf(AttributesJs).d2d = function (key) {
    this.m2j_1.w2(key);
  };
  protoOf(AttributesJs).e2d = function (key, block) {
    var tmp0_safe_receiver = this.m2j_1.s2(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return !(tmp0_safe_receiver == null) ? tmp0_safe_receiver : THROW_CCE();
    }
    // Inline function 'kotlin.also' call
    var this_0 = block();
    // Inline function 'kotlin.collections.set' call
    this.m2j_1.v2(key, this_0);
    return this_0;
  };
  protoOf(AttributesJs).f2d = function () {
    return toList(this.m2j_1.t2());
  };
  function unmodifiable(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function get__crypto() {
    _init_properties_Crypto_web_kt__nxveo7();
    return _crypto;
  }
  var _crypto;
  var md5Shifts;
  var md5T;
  function generateNonce_0() {
    _init_properties_Crypto_web_kt__nxveo7();
    var buffer = toJsArray(new Int8Array(16));
    get__crypto().getRandomValues(buffer);
    return hex(toByteArray(buffer));
  }
  var properties_initialized_Crypto_web_kt_8s9a0n;
  function _init_properties_Crypto_web_kt__nxveo7() {
    if (!properties_initialized_Crypto_web_kt_8s9a0n) {
      properties_initialized_Crypto_web_kt_8s9a0n = true;
      _crypto = globalThis ? globalThis.crypto : window.crypto || window.msCrypto;
      // Inline function 'kotlin.intArrayOf' call
      md5Shifts = new Int32Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]);
      // Inline function 'kotlin.intArrayOf' call
      md5T = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, -145523070, -1120210379, 718787259, -343485551]);
    }
  }
  function get_isDevelopmentMode(_this__u8e3s4) {
    return false;
  }
  function hasNodeApi() {
    return typeof process !== 'undefined' && process.versions != null && process.versions.node != null || (typeof window !== 'undefined' && typeof window.process !== 'undefined' && window.process.versions != null && window.process.versions.node != null);
  }
  function initCauseBridge(_this__u8e3s4, cause) {
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
    switch (PlatformUtils_getInstance().v2e_1 || PlatformUtils_getInstance().u2e_1) {
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
        var tmp1_safe_receiver = _Result___get_isFailure__impl__jpiriv(this_0) ? null : _Result___get_value__impl__bjfvqg(this_0);
        var tmp_3;
        if (tmp1_safe_receiver == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          var tmp0 = get_entries_1();
          var tmp$ret$7;
          $l$block: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var _iterator__ex2g4s = tmp0.t();
            while (_iterator__ex2g4s.u()) {
              var element = _iterator__ex2g4s.v();
              if (element.z_1 === tmp1_safe_receiver) {
                tmp$ret$7 = element;
                break $l$block;
              }
            }
            tmp$ret$7 = null;
          }
          tmp_3 = tmp$ret$7;
        }

        var tmp2_elvis_lhs = tmp_3;
        tmp_0 = tmp2_elvis_lhs == null ? LogLevel_INFO_getInstance() : tmp2_elvis_lhs;
        break;
      case false:
        tmp_0 = LogLevel_TRACE_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    tmp.n2j_1 = tmp_0;
  }
  protoOf(KtorSimpleLogger$1).o2j = function () {
    return this.n2j_1;
  };
  protoOf(KtorSimpleLogger$1).p2j = function (message) {
    if (this.n2j_1.c3(LogLevel_WARN_getInstance()) > 0)
      return Unit_instance;
    console.warn(message);
  };
  protoOf(KtorSimpleLogger$1).q2j = function (message, cause) {
    if (this.n2j_1.c3(LogLevel_DEBUG_getInstance()) > 0)
      return Unit_instance;
    console.debug('DEBUG: ' + message + ', cause: ' + cause.toString());
  };
  protoOf(KtorSimpleLogger$1).r2j = function (message) {
    if (this.n2j_1.c3(LogLevel_TRACE_getInstance()) > 0)
      return Unit_instance;
    console.debug('TRACE: ' + message);
  };
  function get_isTraceEnabled(_this__u8e3s4) {
    return _this__u8e3s4.o2j().c3(LogLevel_TRACE_getInstance()) <= 0;
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
    return type.ra(_this__u8e3s4);
  }
  //region block: post-declaration
  protoOf(CaseInsensitiveMap).asJsReadonlyMapView = asJsReadonlyMapView;
  protoOf($serializer).l10 = typeParametersSerializers;
  protoOf(AttributesJs).y2c = get;
  protoOf(AttributesJs).c2d = set;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  DISABLE_SFG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = PlatformUtils_getInstance;
  _.$_$.b = ChannelIOException;
  _.$_$.c = CopyOnWriteHashMap;
  _.$_$.d = GMTDate_0;
  _.$_$.e = getTimeMillis;
  _.$_$.f = LockFreeLinkedListNode;
  _.$_$.g = initCauseBridge;
  _.$_$.h = KtorSimpleLogger;
  _.$_$.i = get_isTraceEnabled;
  _.$_$.j = PipelineContext;
  _.$_$.k = PipelinePhase;
  _.$_$.l = Pipeline;
  _.$_$.m = TypeInfo;
  _.$_$.n = instanceOf;
  _.$_$.o = AttributeKey;
  _.$_$.p = AttributesJsFn;
  _.$_$.q = Attributes;
  _.$_$.r = SilentSupervisor;
  _.$_$.s = forEach;
  _.$_$.t = get_0;
  _.$_$.u = StringValuesBuilderImpl;
  _.$_$.v = StringValuesImpl;
  _.$_$.w = StringValuesSingleImpl;
  _.$_$.x = StringValues;
  _.$_$.y = appendAll;
  _.$_$.z = generateNonce;
  _.$_$.a1 = hex;
  _.$_$.b1 = isLowerCase;
  _.$_$.c1 = putAll;
  _.$_$.d1 = toCharArray;
  _.$_$.e1 = toLowerCasePreservingASCIIRules;
  _.$_$.f1 = toMap;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-utils.js.map
