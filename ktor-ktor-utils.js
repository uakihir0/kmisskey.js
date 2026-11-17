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
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.s2;
  var arrayOf = kotlin_kotlin.$_$.wg;
  var createKType = kotlin_kotlin.$_$.ad;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var VOID = kotlin_kotlin.$_$.c;
  var isBlank = kotlin_kotlin.$_$.zd;
  var toString = kotlin_kotlin.$_$.lc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p4;
  var protoOf = kotlin_kotlin.$_$.ic;
  var getStringHashCode = kotlin_kotlin.$_$.gb;
  var initMetadataForClass = kotlin_kotlin.$_$.ib;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.t4;
  var initMetadataForInterface = kotlin_kotlin.$_$.mb;
  var THROW_CCE = kotlin_kotlin.$_$.jg;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.x4;
  var ensureNotNull = kotlin_kotlin.$_$.ah;
  var charCodeAt = kotlin_kotlin.$_$.va;
  var toString_0 = kotlin_kotlin.$_$.o;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.n;
  var equals = kotlin_kotlin.$_$.ud;
  var AbstractMutableSet = kotlin_kotlin.$_$.i5;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.g5;
  var AbstractMutableCollection = kotlin_kotlin.$_$.h5;
  var MutableEntry = kotlin_kotlin.$_$.u5;
  var isInterface = kotlin_kotlin.$_$.xb;
  var equals_0 = kotlin_kotlin.$_$.cb;
  var Entry = kotlin_kotlin.$_$.q5;
  var hashCode = kotlin_kotlin.$_$.hb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.jb;
  var fill = kotlin_kotlin.$_$.c7;
  var fill_0 = kotlin_kotlin.$_$.a7;
  var asJsReadonlyMapView = kotlin_kotlin.$_$.r5;
  var KtMutableMap = kotlin_kotlin.$_$.v5;
  var charArray = kotlin_kotlin.$_$.ua;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.d9;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var Element = kotlin_kotlin.$_$.m9;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var get_size = kotlin_io_ktor_ktor_io.$_$.a1;
  var writeText = kotlin_io_ktor_ktor_io.$_$.e1;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var initMetadataForObject = kotlin_kotlin.$_$.ob;
  var Enum = kotlin_kotlin.$_$.zf;
  var firstOrNull = kotlin_kotlin.$_$.d7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r3;
  var addAll = kotlin_kotlin.$_$.z5;
  var emptyMap = kotlin_kotlin.$_$.y6;
  var plus = kotlin_kotlin.$_$.x7;
  var isArray = kotlin_kotlin.$_$.pb;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i3;
  var emptySet = kotlin_kotlin.$_$.z6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v3;
  var getBooleanHashCode = kotlin_kotlin.$_$.eb;
  var setOf = kotlin_kotlin.$_$.c8;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.s3;
  var toList = kotlin_kotlin.$_$.l8;
  var charSequenceLength = kotlin_kotlin.$_$.xa;
  var charSequenceGet = kotlin_kotlin.$_$.wa;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d4;
  var get_lastIndex = kotlin_kotlin.$_$.ee;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.l;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g2;
  var lazy = kotlin_kotlin.$_$.fh;
  var Long = kotlin_kotlin.$_$.eg;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var objectCreate = kotlin_kotlin.$_$.hc;
  var equalsLong = kotlin_kotlin.$_$.ba;
  var Comparable = kotlin_kotlin.$_$.vf;
  var Companion_instance = kotlin_kotlin.$_$.x2;
  var enumEntries = kotlin_kotlin.$_$.q9;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var CoroutineImpl = kotlin_kotlin.$_$.o9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.kb;
  var KtMutableList = kotlin_kotlin.$_$.t5;
  var toMutableList = kotlin_kotlin.$_$.p8;
  var ArrayList = kotlin_kotlin.$_$.j5;
  var KMutableProperty1 = kotlin_kotlin.$_$.fd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.fb;
  var emptyList = kotlin_kotlin.$_$.x6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.o7;
  var last = kotlin_kotlin.$_$.q7;
  var constructCallableReference = kotlin_kotlin.$_$.ab;
  var mutableListOf = kotlin_kotlin.$_$.v7;
  var anyToString = kotlin_kotlin.$_$.pa;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var extendThrowable = kotlin_kotlin.$_$.db;
  var captureStack = kotlin_kotlin.$_$.sa;
  var recoverStackTrace = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var Companion_instance_0 = kotlin_kotlin.$_$.z2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p;
  var createFailure = kotlin_kotlin.$_$.zg;
  var Key_instance_0 = kotlin_kotlin.$_$.h2;
  var intercepted = kotlin_kotlin.$_$.z8;
  var CoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.q;
  var Continuation = kotlin_kotlin.$_$.i9;
  var toString_1 = kotlin_kotlin.$_$.kh;
  var KProperty1 = kotlin_kotlin.$_$.hd;
  var lazy_0 = kotlin_kotlin.$_$.gh;
  var toNumber = kotlin_kotlin.$_$.na;
  var isNaN_0 = kotlin_kotlin.$_$.eh;
  var numberToLong = kotlin_kotlin.$_$.ia;
  var IllegalStateException = kotlin_kotlin.$_$.dg;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.s4;
  var toHexString = kotlin_kotlin.$_$.ze;
  var substring = kotlin_kotlin.$_$.te;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.s;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.r;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.hh;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.c9;
  var initMetadataForLambda = kotlin_kotlin.$_$.nb;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(AttributeKey, 'AttributeKey');
  function get(key) {
    var tmp0_elvis_lhs = this.u2c(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No instance for key ' + key.toString());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function set(key, value) {
    this.w2c(key, value);
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
    var tmp0_safe_receiver = this.a2f(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  }
  function forEach(body) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.x2e().t();
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
  initMetadataForLambda(pipelineStartCoroutineUninterceptedOrReturn$slambda, CoroutineImpl, VOID, [0]);
  //endregion
  function AttributeKey(name, type) {
    var tmp;
    if (type === VOID) {
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_0 = PrimitiveClasses_getInstance().kb();
      var tmp_1 = !(null == null);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_2;
      try {
        tmp_2 = createKType(PrimitiveClasses_getInstance().kb(), arrayOf([]), false);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_3 = null;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      var tmp$ret$1 = tmp_2;
      tmp = new TypeInfo(tmp_0, tmp_1, tmp$ret$1);
    } else {
      tmp = type;
    }
    type = tmp;
    this.r2c_1 = name;
    this.s2c_1 = type;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.r2c_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      var message = "Name can't be blank";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(AttributeKey).toString = function () {
    return 'AttributeKey: ' + this.r2c_1;
  };
  protoOf(AttributeKey).hashCode = function () {
    var result = getStringHashCode(this.r2c_1);
    result = imul(result, 31) + this.s2c_1.hashCode() | 0;
    return result;
  };
  protoOf(AttributeKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AttributeKey))
      return false;
    if (!(this.r2c_1 === other.r2c_1))
      return false;
    if (!this.s2c_1.equals(other.s2c_1))
      return false;
    return true;
  };
  function Attributes() {
  }
  function putAll(_this__u8e3s4, other) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = other.a2d().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      _this__u8e3s4.w2c(element instanceof AttributeKey ? element : THROW_CCE(), other.t2c(element));
    }
  }
  function advance($this) {
    $l$loop: while ($this.b2d_1 < $this.d2d_1.i2d_1) {
      var idx = $this.d2d_1.h2d_1[$this.b2d_1];
      if (idx >= 0 && !($this.d2d_1.e2d_1[idx] == null))
        break $l$loop;
      $this.b2d_1 = $this.b2d_1 + 1 | 0;
    }
  }
  function CaseInsensitiveMap$KeySet$iterator$1(this$0) {
    this.d2d_1 = this$0;
    this.b2d_1 = 0;
    this.c2d_1 = null;
    advance(this);
  }
  protoOf(CaseInsensitiveMap$KeySet$iterator$1).u = function () {
    return this.b2d_1 < this.d2d_1.i2d_1;
  };
  protoOf(CaseInsensitiveMap$KeySet$iterator$1).v = function () {
    if (!this.u())
      throw NoSuchElementException_init_$Create$();
    var idx = this.d2d_1.h2d_1[this.b2d_1];
    this.c2d_1 = ensureNotNull(this.d2d_1.e2d_1[idx]);
    this.b2d_1 = this.b2d_1 + 1 | 0;
    advance(this);
    return ensureNotNull(this.c2d_1);
  };
  protoOf(CaseInsensitiveMap$KeySet$iterator$1).k4 = function () {
    var tmp0_elvis_lhs = this.c2d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('next() must be called before remove()');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var key = tmp;
    this.d2d_1.m2d(key);
    this.c2d_1 = null;
  };
  function advance_0($this) {
    $l$loop: while ($this.n2d_1 < $this.p2d_1.i2d_1) {
      var idx = $this.p2d_1.h2d_1[$this.n2d_1];
      if (idx >= 0 && !($this.p2d_1.e2d_1[idx] == null))
        break $l$loop;
      $this.n2d_1 = $this.n2d_1 + 1 | 0;
    }
  }
  function CaseInsensitiveMap$ValueCollection$iterator$1(this$0) {
    this.p2d_1 = this$0;
    this.n2d_1 = 0;
    this.o2d_1 = null;
    advance_0(this);
  }
  protoOf(CaseInsensitiveMap$ValueCollection$iterator$1).u = function () {
    return this.n2d_1 < this.p2d_1.i2d_1;
  };
  protoOf(CaseInsensitiveMap$ValueCollection$iterator$1).v = function () {
    if (!this.u())
      throw NoSuchElementException_init_$Create$();
    var idx = this.p2d_1.h2d_1[this.n2d_1];
    this.o2d_1 = ensureNotNull(this.p2d_1.e2d_1[idx]);
    var tmp = this.p2d_1.f2d_1[idx];
    var result = !(tmp == null) ? tmp : THROW_CCE();
    this.n2d_1 = this.n2d_1 + 1 | 0;
    advance_0(this);
    return result;
  };
  protoOf(CaseInsensitiveMap$ValueCollection$iterator$1).k4 = function () {
    var tmp0_elvis_lhs = this.o2d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('next() must be called before remove()');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var key = tmp;
    this.p2d_1.m2d(key);
    this.o2d_1 = null;
  };
  function advance_1($this) {
    $l$loop: while ($this.q2d_1 < $this.s2d_1.i2d_1) {
      var idx = $this.s2d_1.h2d_1[$this.q2d_1];
      if (idx >= 0 && !($this.s2d_1.e2d_1[idx] == null))
        break $l$loop;
      $this.q2d_1 = $this.q2d_1 + 1 | 0;
    }
  }
  function CaseInsensitiveMap$EntrySet$iterator$1(this$0) {
    this.s2d_1 = this$0;
    this.q2d_1 = 0;
    this.r2d_1 = null;
    advance_1(this);
  }
  protoOf(CaseInsensitiveMap$EntrySet$iterator$1).u = function () {
    return this.q2d_1 < this.s2d_1.i2d_1;
  };
  protoOf(CaseInsensitiveMap$EntrySet$iterator$1).v = function () {
    if (!this.u())
      throw NoSuchElementException_init_$Create$();
    var idx = this.s2d_1.h2d_1[this.q2d_1];
    this.r2d_1 = ensureNotNull(this.s2d_1.e2d_1[idx]);
    var tmp = ensureNotNull(this.r2d_1);
    var tmp_0 = this.s2d_1.f2d_1[idx];
    var entry = new MapEntry(this.s2d_1, tmp, !(tmp_0 == null) ? tmp_0 : THROW_CCE());
    this.q2d_1 = this.q2d_1 + 1 | 0;
    advance_1(this);
    return entry;
  };
  protoOf(CaseInsensitiveMap$EntrySet$iterator$1).k4 = function () {
    var tmp0_elvis_lhs = this.r2d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('next() must be called before remove()');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var key = tmp;
    this.s2d_1.m2d(key);
    this.r2d_1 = null;
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
    var index = hash & ($this.e2d_1.length - 1 | 0);
    while (true) {
      var existingKey = $this.e2d_1[index];
      if (existingKey == null) {
        $this.e2d_1[index] = key;
        $this.f2d_1[index] = value;
        $this.g2d_1 = $this.g2d_1 + 1 | 0;
        return index;
      }
      if (equals(existingKey, key, true)) {
        $this.f2d_1[index] = value;
        return index;
      }
      index = (index + 1 | 0) & ($this.e2d_1.length - 1 | 0);
    }
  }
  function findIndex($this, key) {
    if ($this.g2d_1 === 0)
      return -1;
    var hash = caseInsensitiveHashCode(Companion_getInstance(), key);
    var index = hash & ($this.e2d_1.length - 1 | 0);
    while (true) {
      var tmp0_elvis_lhs = $this.e2d_1[index];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return -1;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var existingKey = tmp;
      if (equals(existingKey, key, true))
        return index;
      index = (index + 1 | 0) & ($this.e2d_1.length - 1 | 0);
    }
  }
  function ensureCapacity($this) {
    if (imul($this.g2d_1, 4) >= imul($this.e2d_1.length, 3)) {
      resize($this, imul($this.e2d_1.length, 2));
    }
  }
  function resize($this, newCapacity) {
    var oldKeys = $this.e2d_1;
    var oldValues = $this.f2d_1;
    var oldInsertionOrder = $this.h2d_1;
    var oldInsertionCount = $this.i2d_1;
    var tmp = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.e2d_1 = Array(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.f2d_1 = Array(newCapacity);
    var tmp_1 = $this;
    var tmp_2 = 0;
    var tmp_3 = new Int32Array(newCapacity);
    while (tmp_2 < newCapacity) {
      tmp_3[tmp_2] = -1;
      tmp_2 = tmp_2 + 1 | 0;
    }
    tmp_1.h2d_1 = tmp_3;
    $this.g2d_1 = 0;
    $this.i2d_1 = 0;
    var inductionVariable = 0;
    if (inductionVariable < oldInsertionCount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var oldIndex = oldInsertionOrder[i];
        if (oldIndex >= 0 && !(oldKeys[oldIndex] == null)) {
          var tmp_4 = ensureNotNull(oldKeys[oldIndex]);
          var tmp_5 = oldValues[oldIndex];
          $this.t2d(tmp_4, !(tmp_5 == null) ? tmp_5 : THROW_CCE());
        }
      }
       while (inductionVariable < oldInsertionCount);
  }
  function compactInsertionOrder($this) {
    if ($this.i2d_1 === 0)
      return Unit_instance;
    var writeIndex = 0;
    var inductionVariable = 0;
    var last = $this.i2d_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var idx = $this.h2d_1[i];
        if (idx >= 0 && !($this.e2d_1[idx] == null)) {
          var tmp = $this.h2d_1;
          var _unary__edvuaz = writeIndex;
          writeIndex = _unary__edvuaz + 1 | 0;
          tmp[_unary__edvuaz] = idx;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_0 = writeIndex;
    var last_0 = $this.h2d_1.length;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        $this.h2d_1[i_0] = -1;
      }
       while (inductionVariable_0 < last_0);
    $this.i2d_1 = writeIndex;
  }
  function KeySet($outer) {
    this.u2d_1 = $outer;
    AbstractMutableSet.call(this);
  }
  protoOf(KeySet).e1 = function () {
    return this.u2d_1.g2d_1;
  };
  protoOf(KeySet).v2d = function (element) {
    throw UnsupportedOperationException_init_$Create$('CaseInsensitiveMap.keys does not support add');
  };
  protoOf(KeySet).c1 = function (element) {
    return this.v2d((!(element == null) ? typeof element === 'string' : false) ? element : THROW_CCE());
  };
  protoOf(KeySet).w2d = function (element) {
    return this.u2d_1.x2d(element);
  };
  protoOf(KeySet).j2 = function (element) {
    if (!(!(element == null) ? typeof element === 'string' : false))
      return false;
    return this.w2d((!(element == null) ? typeof element === 'string' : false) ? element : THROW_CCE());
  };
  protoOf(KeySet).t = function () {
    return new CaseInsensitiveMap$KeySet$iterator$1(this.u2d_1);
  };
  function ValueCollection($outer) {
    this.y2d_1 = $outer;
    AbstractMutableCollection.call(this);
  }
  protoOf(ValueCollection).e1 = function () {
    return this.y2d_1.g2d_1;
  };
  protoOf(ValueCollection).z2d = function (element) {
    throw UnsupportedOperationException_init_$Create$('CaseInsensitiveMap.values does not support add');
  };
  protoOf(ValueCollection).c1 = function (element) {
    return this.z2d(!(element == null) ? element : THROW_CCE());
  };
  protoOf(ValueCollection).t = function () {
    return new CaseInsensitiveMap$ValueCollection$iterator$1(this.y2d_1);
  };
  function EntrySet($outer) {
    this.a2e_1 = $outer;
    AbstractMutableSet.call(this);
  }
  protoOf(EntrySet).e1 = function () {
    return this.a2e_1.g2d_1;
  };
  protoOf(EntrySet).b2e = function (element) {
    throw UnsupportedOperationException_init_$Create$('CaseInsensitiveMap.entries does not support add');
  };
  protoOf(EntrySet).c1 = function (element) {
    return this.b2e((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(EntrySet).t = function () {
    return new CaseInsensitiveMap$EntrySet$iterator$1(this.a2e_1);
  };
  function MapEntry($outer, key, _value) {
    this.e2e_1 = $outer;
    this.c2e_1 = key;
    this.d2e_1 = _value;
  }
  protoOf(MapEntry).m1 = function () {
    return this.c2e_1;
  };
  protoOf(MapEntry).n1 = function () {
    return this.d2e_1;
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Entry) : false) {
      tmp_0 = equals_0(this.c2e_1, other.m1());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals_0(this.n1(), other.n1());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MapEntry).hashCode = function () {
    return getStringHashCode(this.c2e_1) ^ hashCode(this.n1());
  };
  protoOf(MapEntry).toString = function () {
    return this.c2e_1 + '=' + toString(this.n1());
  };
  function Companion() {
    Companion_instance_1 = this;
    this.f2e_1 = 8;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    tmp.g2e_1 = [];
    var tmp_0 = this;
    // Inline function 'kotlin.emptyArray' call
    tmp_0.h2e_1 = [];
    this.i2e_1 = new Int32Array(0);
  }
  var Companion_instance_1;
  function Companion_getInstance() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function CaseInsensitiveMap() {
    Companion_getInstance();
    this.e2d_1 = Companion_getInstance().g2e_1;
    this.f2d_1 = Companion_getInstance().h2e_1;
    this.g2d_1 = 0;
    this.h2d_1 = Companion_getInstance().i2e_1;
    this.i2d_1 = 0;
    this.j2d_1 = null;
    this.k2d_1 = null;
    this.l2d_1 = null;
  }
  protoOf(CaseInsensitiveMap).e1 = function () {
    return this.g2d_1;
  };
  protoOf(CaseInsensitiveMap).x2d = function (key) {
    return findIndex(this, key) >= 0;
  };
  protoOf(CaseInsensitiveMap).r2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.x2d((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).j2e = function (value) {
    if (this.g2d_1 === 0)
      return false;
    var inductionVariable = 0;
    var last = this.f2d_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(this.e2d_1[i] == null) && equals_0(this.f2d_1[i], value))
          return true;
      }
       while (inductionVariable <= last);
    return false;
  };
  protoOf(CaseInsensitiveMap).s2 = function (value) {
    if (!!(value == null))
      return false;
    return this.j2e(!(value == null) ? value : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).k2e = function (key) {
    var index = findIndex(this, key);
    return index >= 0 ? this.f2d_1[index] : null;
  };
  protoOf(CaseInsensitiveMap).t2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.k2e((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).r = function () {
    return this.g2d_1 === 0;
  };
  protoOf(CaseInsensitiveMap).w2 = function () {
    if (this.g2d_1 > 0) {
      fill(this.e2d_1, null);
      fill(this.f2d_1, null);
      fill_0(this.h2d_1, -1);
      this.g2d_1 = 0;
      this.i2d_1 = 0;
    }
  };
  protoOf(CaseInsensitiveMap).t2d = function (key, value) {
    if (this.e2d_1 === Companion_getInstance().g2e_1) {
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.e2d_1 = Array(8);
      var tmp_0 = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_0.f2d_1 = Array(8);
      var tmp_1 = this;
      var tmp_2 = 0;
      var tmp_3 = new Int32Array(8);
      while (tmp_2 < 8) {
        tmp_3[tmp_2] = -1;
        tmp_2 = tmp_2 + 1 | 0;
      }
      tmp_1.h2d_1 = tmp_3;
    }
    var hash = caseInsensitiveHashCode(Companion_getInstance(), key);
    var index = hash & (this.e2d_1.length - 1 | 0);
    while (true) {
      var existingKey = this.e2d_1[index];
      if (existingKey == null) {
        ensureCapacity(this);
        index = hash & (this.e2d_1.length - 1 | 0);
        while (!(this.e2d_1[index] == null)) {
          index = (index + 1 | 0) & (this.e2d_1.length - 1 | 0);
        }
        if (this.i2d_1 === this.h2d_1.length) {
          compactInsertionOrder(this);
        }
        this.e2d_1[index] = key;
        this.f2d_1[index] = value;
        var tmp_4 = this.h2d_1;
        var _unary__edvuaz = this.i2d_1;
        this.i2d_1 = _unary__edvuaz + 1 | 0;
        tmp_4[_unary__edvuaz] = index;
        this.g2d_1 = this.g2d_1 + 1 | 0;
        return null;
      }
      if (equals(existingKey, key, true)) {
        var oldValue = this.f2d_1[index];
        this.f2d_1[index] = value;
        return oldValue;
      }
      index = (index + 1 | 0) & (this.e2d_1.length - 1 | 0);
    }
  };
  protoOf(CaseInsensitiveMap).a3 = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.t2d(tmp, !(value == null) ? value : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).l2e = function (from) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = from.l1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var key = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.n1();
      this.t2d(key, value);
    }
  };
  protoOf(CaseInsensitiveMap).c3 = function (from) {
    return this.l2e(from);
  };
  protoOf(CaseInsensitiveMap).m2d = function (key) {
    var index = findIndex(this, key);
    if (index < 0)
      return null;
    var oldValue = this.f2d_1[index];
    var inductionVariable = 0;
    var last = this.i2d_1;
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.h2d_1[i] === index) {
          this.h2d_1[i] = -1;
          break $l$loop;
        }
      }
       while (inductionVariable < last);
    this.e2d_1[index] = null;
    this.f2d_1[index] = null;
    this.g2d_1 = this.g2d_1 - 1 | 0;
    var nextIndex = (index + 1 | 0) & (this.e2d_1.length - 1 | 0);
    while (!(this.e2d_1[nextIndex] == null)) {
      var rehashKey = ensureNotNull(this.e2d_1[nextIndex]);
      var rehashValue = this.f2d_1[nextIndex];
      var oldRehashIndex = nextIndex;
      this.e2d_1[nextIndex] = null;
      this.f2d_1[nextIndex] = null;
      this.g2d_1 = this.g2d_1 - 1 | 0;
      var newIndex = putWithoutTrackingOrderReturnIndex(this, rehashKey, !(rehashValue == null) ? rehashValue : THROW_CCE());
      var inductionVariable_0 = 0;
      var last_0 = this.i2d_1;
      if (inductionVariable_0 < last_0)
        $l$loop_0: do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (this.h2d_1[i_0] === oldRehashIndex) {
            this.h2d_1[i_0] = newIndex;
            break $l$loop_0;
          }
        }
         while (inductionVariable_0 < last_0);
      nextIndex = (nextIndex + 1 | 0) & (this.e2d_1.length - 1 | 0);
    }
    return oldValue;
  };
  protoOf(CaseInsensitiveMap).b3 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.m2d((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).u2 = function () {
    var tmp0_elvis_lhs = this.j2d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new KeySet(this);
      this.j2d_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(CaseInsensitiveMap).l1 = function () {
    var tmp0_elvis_lhs = this.k2d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new EntrySet(this);
      this.k2d_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(CaseInsensitiveMap).v2 = function () {
    var tmp0_elvis_lhs = this.l2d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new ValueCollection(this);
      this.l2d_1 = this_0;
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
    if (!(other.e1() === this.g2d_1))
      return false;
    var inductionVariable = 0;
    var last = this.e2d_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var k = this.e2d_1[i];
        if (!(k == null)) {
          var v = this.f2d_1[i];
          if (!equals_0(other.k2e(k), v))
            return false;
        }
      }
       while (inductionVariable <= last);
    return true;
  };
  protoOf(CaseInsensitiveMap).hashCode = function () {
    var result = 0;
    var inductionVariable = 0;
    var last = this.e2d_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var k = this.e2d_1[i];
        if (!(k == null)) {
          var tmp = result;
          var tmp_0 = caseInsensitiveHashCode(Companion_getInstance(), k);
          // Inline function 'kotlin.hashCode' call
          var tmp0_safe_receiver = this.f2d_1[i];
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
    return tmp.gh(tmp$ret$0);
  }
  function SilentSupervisor$$inlined$CoroutineExceptionHandler$1() {
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(SilentSupervisor$$inlined$CoroutineExceptionHandler$1).o1l = function (context, exception) {
    return Unit_instance;
  };
  var digits;
  function generateNonce(size) {
    _init_properties_Crypto_kt__txayzl();
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    while (get_size(builder) < size) {
      writeText(builder, generateNonceBlocking());
    }
    return readByteArray(builder, size);
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
      tmp_0 = platform.o2e_1.equals(JsPlatform_Browser_getInstance());
    } else {
      if (platform instanceof WasmJs) {
        tmp_0 = platform.n2e_1.equals(JsPlatform_Browser_getInstance());
      } else {
        tmp_0 = false;
      }
    }
    tmp.p2e_1 = tmp_0;
    var tmp_1 = this;
    var platform_0 = get_platform(this);
    var tmp_2;
    if (platform_0 instanceof Js) {
      tmp_2 = platform_0.o2e_1.equals(JsPlatform_Node_getInstance());
    } else {
      if (platform_0 instanceof WasmJs) {
        tmp_2 = platform_0.n2e_1.equals(JsPlatform_Node_getInstance());
      } else {
        tmp_2 = false;
      }
    }
    tmp_1.q2e_1 = tmp_2;
    var tmp_3 = this;
    var tmp_4 = get_platform(this);
    tmp_3.r2e_1 = tmp_4 instanceof Js;
    var tmp_5 = this;
    var tmp_6 = get_platform(this);
    tmp_5.s2e_1 = tmp_6 instanceof WasmJs;
    this.t2e_1 = equals_0(get_platform(this), Jvm_getInstance());
    this.u2e_1 = equals_0(get_platform(this), Native_getInstance());
    this.v2e_1 = get_isDevelopmentMode(this);
    this.w2e_1 = true;
  }
  var PlatformUtils_instance;
  function PlatformUtils_getInstance() {
    if (PlatformUtils_instance == null)
      new PlatformUtils();
    return PlatformUtils_instance;
  }
  var static_init_called;
  function static_init() {
    if (static_init_called)
      return Unit_instance;
    static_init_called = true;
    JsPlatform_Browser_instance = new JsPlatform('Browser', 0);
    JsPlatform_Node_instance = new JsPlatform('Node', 1);
  }
  var JsPlatform_Browser_instance;
  var JsPlatform_Node_instance;
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
    this.o2e_1 = jsPlatform;
  }
  protoOf(Js).toString = function () {
    return 'Js(jsPlatform=' + this.o2e_1.toString() + ')';
  };
  protoOf(Js).hashCode = function () {
    return this.o2e_1.hashCode();
  };
  protoOf(Js).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Js))
      return false;
    if (!this.o2e_1.equals(other.o2e_1))
      return false;
    return true;
  };
  function WasmJs() {
  }
  function JsPlatform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function JsPlatform_Browser_getInstance() {
    static_init();
    return JsPlatform_Browser_instance;
  }
  function JsPlatform_Node_getInstance() {
    static_init();
    return JsPlatform_Node_instance;
  }
  function Platform() {
  }
  function appendAll(_this__u8e3s4, builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = builder.x2e().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var name = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var values = element.n1();
      _this__u8e3s4.y2e(name, values);
    }
    return _this__u8e3s4;
  }
  function StringValues() {
  }
  function ensureListForKey($this, name) {
    var tmp0_elvis_lhs = $this.e2f_1.t2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableListOf' call
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$();
      $this.f2f(name);
      // Inline function 'kotlin.collections.set' call
      $this.e2f_1.a3(name, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StringValuesBuilderImpl$appendAll$lambda(this$0) {
    return function (name, values) {
      this$0.y2e(name, values);
      return Unit_instance;
    };
  }
  function StringValuesBuilderImpl(caseInsensitiveName, size) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    size = size === VOID ? 8 : size;
    this.d2f_1 = caseInsensitiveName;
    this.e2f_1 = this.d2f_1 ? caseInsensitiveMap() : LinkedHashMap_init_$Create$(size);
  }
  protoOf(StringValuesBuilderImpl).z2e = function () {
    return this.d2f_1;
  };
  protoOf(StringValuesBuilderImpl).a2f = function (name) {
    return this.e2f_1.t2(name);
  };
  protoOf(StringValuesBuilderImpl).b2f = function () {
    return this.e2f_1.u2();
  };
  protoOf(StringValuesBuilderImpl).r = function () {
    return this.e2f_1.r();
  };
  protoOf(StringValuesBuilderImpl).x2e = function () {
    return unmodifiable(this.e2f_1.l1());
  };
  protoOf(StringValuesBuilderImpl).g2f = function (name, value) {
    this.h2f(value);
    var list = ensureListForKey(this, name);
    list.w2();
    list.c1(value);
  };
  protoOf(StringValuesBuilderImpl).k2e = function (name) {
    var tmp0_safe_receiver = this.a2f(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesBuilderImpl).i2f = function (name, value) {
    this.h2f(value);
    ensureListForKey(this, name).c1(value);
  };
  protoOf(StringValuesBuilderImpl).j2f = function (stringValues) {
    stringValues.c2f(StringValuesBuilderImpl$appendAll$lambda(this));
  };
  protoOf(StringValuesBuilderImpl).y2e = function (name, values) {
    // Inline function 'kotlin.let' call
    var list = ensureListForKey(this, name);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      this.h2f(element);
    }
    addAll(list, values);
  };
  protoOf(StringValuesBuilderImpl).k2f = function (name) {
    this.e2f_1.b3(name);
  };
  protoOf(StringValuesBuilderImpl).w2 = function () {
    this.e2f_1.w2();
  };
  protoOf(StringValuesBuilderImpl).f2f = function (name) {
  };
  protoOf(StringValuesBuilderImpl).h2f = function (value) {
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
    if ($this.o2f_1 === 0)
      return null;
    var hash = computeHash($this, name);
    var idx = $this.p2f_1[hash & ($this.p2f_1.length - 1 | 0)];
    while (idx >= 0) {
      if (equals($this.m2f_1[idx], name, $this.l2f_1)) {
        return $this.n2f_1[idx];
      }
      idx = $this.q2f_1[idx];
    }
    return null;
  }
  function computeHash($this, key) {
    var tmp;
    if ($this.l2f_1) {
      tmp = caseInsensitiveHashCode_0(Companion_instance_2, key);
    } else {
      tmp = getStringHashCode(key);
    }
    return tmp;
  }
  function StringValuesEntry(key, value) {
    this.r2f_1 = key;
    this.s2f_1 = value;
  }
  protoOf(StringValuesEntry).m1 = function () {
    return this.r2f_1;
  };
  protoOf(StringValuesEntry).n1 = function () {
    return this.s2f_1;
  };
  protoOf(StringValuesEntry).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Entry) : false) {
      tmp_0 = equals_0(other.m1(), this.r2f_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals_0(other.n1(), this.s2f_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StringValuesEntry).hashCode = function () {
    return getStringHashCode(this.r2f_1) ^ hashCode(this.s2f_1);
  };
  protoOf(StringValuesEntry).toString = function () {
    return this.r2f_1 + '=' + toString(this.s2f_1);
  };
  function Companion_0() {
  }
  var Companion_instance_2;
  function Companion_getInstance_0() {
    return Companion_instance_2;
  }
  function StringValuesImpl(caseInsensitiveName, values) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    values = values === VOID ? emptyMap() : values;
    this.l2f_1 = caseInsensitiveName;
    if (values.r()) {
      this.o2f_1 = 0;
      var tmp = this;
      // Inline function 'kotlin.emptyArray' call
      tmp.m2f_1 = [];
      var tmp_0 = this;
      // Inline function 'kotlin.emptyArray' call
      tmp_0.n2f_1 = [];
      this.p2f_1 = new Int32Array(0);
      this.q2f_1 = new Int32Array(0);
    } else if (!this.l2f_1) {
      this.o2f_1 = values.e1();
      var tmp_1 = this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size = this.o2f_1;
      var tmp_2 = Array(size);
      tmp_1.m2f_1 = isArray(tmp_2) ? tmp_2 : THROW_CCE();
      var tmp_3 = this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size_0 = this.o2f_1;
      var tmp_4 = Array(size_0);
      tmp_3.n2f_1 = isArray(tmp_4) ? tmp_4 : THROW_CCE();
      var tableSize = tableSizeFor(Companion_instance_2, this.o2f_1);
      var tmp_5 = this;
      var tmp_6 = 0;
      var tmp_7 = new Int32Array(tableSize);
      while (tmp_6 < tableSize) {
        tmp_7[tmp_6] = -1;
        tmp_6 = tmp_6 + 1 | 0;
      }
      tmp_5.p2f_1 = tmp_7;
      var tmp_8 = this;
      var tmp_9 = 0;
      var tmp_10 = this.o2f_1;
      var tmp_11 = new Int32Array(tmp_10);
      while (tmp_9 < tmp_10) {
        tmp_11[tmp_9] = -1;
        tmp_9 = tmp_9 + 1 | 0;
      }
      tmp_8.q2f_1 = tmp_11;
      var i = 0;
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = values.l1().t();
      while (_iterator__ex2g4s.u()) {
        var _destruct__k2r9zo = _iterator__ex2g4s.v();
        // Inline function 'kotlin.collections.component1' call
        var key = _destruct__k2r9zo.m1();
        // Inline function 'kotlin.collections.component2' call
        var value = _destruct__k2r9zo.n1();
        this.m2f_1[i] = key;
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
            list.c1(tmp$ret$13);
          }
           while (inductionVariable < size_1);
        this.n2f_1[tmp_12] = list;
        var hash = computeHash(this, key);
        var bucket = hash & (tableSize - 1 | 0);
        this.q2f_1[i] = this.p2f_1[bucket];
        this.p2f_1[bucket] = i;
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
        var existing = deduped.t2(key_0);
        if (!(existing == null)) {
          // Inline function 'kotlin.collections.set' call
          var value_1 = plus(existing, value_0);
          deduped.a3(key_0, value_1);
        } else {
          // Inline function 'kotlin.collections.set' call
          deduped.a3(key_0, value_0);
        }
      }
      this.o2f_1 = deduped.e1();
      var tmp_13 = this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size_2 = this.o2f_1;
      var tmp_14 = Array(size_2);
      tmp_13.m2f_1 = isArray(tmp_14) ? tmp_14 : THROW_CCE();
      var tmp_15 = this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size_3 = this.o2f_1;
      var tmp_16 = Array(size_3);
      tmp_15.n2f_1 = isArray(tmp_16) ? tmp_16 : THROW_CCE();
      var tableSize_0 = tableSizeFor(Companion_instance_2, this.o2f_1);
      var tmp_17 = this;
      var tmp_18 = 0;
      var tmp_19 = new Int32Array(tableSize_0);
      while (tmp_18 < tableSize_0) {
        tmp_19[tmp_18] = -1;
        tmp_18 = tmp_18 + 1 | 0;
      }
      tmp_17.p2f_1 = tmp_19;
      var tmp_20 = this;
      var tmp_21 = 0;
      var tmp_22 = this.o2f_1;
      var tmp_23 = new Int32Array(tmp_22);
      while (tmp_21 < tmp_22) {
        tmp_23[tmp_21] = -1;
        tmp_21 = tmp_21 + 1 | 0;
      }
      tmp_20.q2f_1 = tmp_23;
      var i_0 = 0;
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = deduped.l1().t();
      while (_iterator__ex2g4s_1.u()) {
        var _destruct__k2r9zo_1 = _iterator__ex2g4s_1.v();
        // Inline function 'kotlin.collections.component1' call
        var key_1 = _destruct__k2r9zo_1.m1();
        // Inline function 'kotlin.collections.component2' call
        var value_2 = _destruct__k2r9zo_1.n1();
        this.m2f_1[i_0] = key_1;
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
            list_0.c1(tmp$ret$30);
          }
           while (inductionVariable_0 < size_4);
        this.n2f_1[tmp_24] = list_0;
        var hash_0 = computeHash(this, key_1);
        var bucket_0 = hash_0 & (tableSize_0 - 1 | 0);
        this.q2f_1[i_0] = this.p2f_1[bucket_0];
        this.p2f_1[bucket_0] = i_0;
        i_0 = i_0 + 1 | 0;
      }
    }
  }
  protoOf(StringValuesImpl).z2e = function () {
    return this.l2f_1;
  };
  protoOf(StringValuesImpl).k2e = function (name) {
    var tmp0_safe_receiver = listForKey(this, name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesImpl).a2f = function (name) {
    return listForKey(this, name);
  };
  protoOf(StringValuesImpl).b2f = function () {
    if (this.o2f_1 === 0)
      return emptySet();
    // Inline function 'kotlin.collections.linkedSetOf' call
    var result = LinkedHashSet_init_$Create$();
    var inductionVariable = 0;
    var last = this.o2f_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result.c1(this.m2f_1[i]);
      }
       while (inductionVariable < last);
    return result;
  };
  protoOf(StringValuesImpl).r = function () {
    return this.o2f_1 === 0;
  };
  protoOf(StringValuesImpl).x2e = function () {
    if (this.o2f_1 === 0)
      return emptySet();
    // Inline function 'kotlin.collections.linkedSetOf' call
    var result = LinkedHashSet_init_$Create$();
    var inductionVariable = 0;
    var last = this.o2f_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result.c1(new StringValuesEntry(this.m2f_1[i], this.n2f_1[i]));
      }
       while (inductionVariable < last);
    return result;
  };
  protoOf(StringValuesImpl).c2f = function (body) {
    var inductionVariable = 0;
    var last = this.o2f_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        body(this.m2f_1[i], this.n2f_1[i]);
      }
       while (inductionVariable < last);
  };
  protoOf(StringValuesImpl).toString = function () {
    return 'StringValues(case=' + !this.l2f_1 + ') ' + toString(this.x2e());
  };
  protoOf(StringValuesImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.l2f_1 === other.z2e()))
      return false;
    return entriesEquals(this.x2e(), other.x2e());
  };
  protoOf(StringValuesImpl).hashCode = function () {
    return entriesHashCode(this.x2e(), imul(31, getBooleanHashCode(this.l2f_1)));
  };
  function StringValuesSingleImpl$entries$1(this$0) {
    this.t2f_1 = this$0.w2f_1;
    this.u2f_1 = this$0.x2f_1;
  }
  protoOf(StringValuesSingleImpl$entries$1).m1 = function () {
    return this.t2f_1;
  };
  protoOf(StringValuesSingleImpl$entries$1).n1 = function () {
    return this.u2f_1;
  };
  protoOf(StringValuesSingleImpl$entries$1).toString = function () {
    return this.t2f_1 + '=' + toString(this.u2f_1);
  };
  protoOf(StringValuesSingleImpl$entries$1).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Entry) : false) {
      tmp_0 = equals_0(other.m1(), this.t2f_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals_0(other.n1(), this.u2f_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StringValuesSingleImpl$entries$1).hashCode = function () {
    return getStringHashCode(this.t2f_1) ^ hashCode(this.u2f_1);
  };
  function StringValuesSingleImpl(caseInsensitiveName, name, values) {
    this.v2f_1 = caseInsensitiveName;
    this.w2f_1 = name;
    this.x2f_1 = values;
  }
  protoOf(StringValuesSingleImpl).z2e = function () {
    return this.v2f_1;
  };
  protoOf(StringValuesSingleImpl).a2f = function (name) {
    return equals(this.w2f_1, name, this.z2e()) ? this.x2f_1 : null;
  };
  protoOf(StringValuesSingleImpl).x2e = function () {
    return setOf(new StringValuesSingleImpl$entries$1(this));
  };
  protoOf(StringValuesSingleImpl).r = function () {
    return false;
  };
  protoOf(StringValuesSingleImpl).b2f = function () {
    return setOf(this.w2f_1);
  };
  protoOf(StringValuesSingleImpl).toString = function () {
    return 'StringValues(case=' + !this.z2e() + ') ' + toString(this.x2e());
  };
  protoOf(StringValuesSingleImpl).hashCode = function () {
    return entriesHashCode(this.x2e(), imul(31, getBooleanHashCode(this.z2e())));
  };
  protoOf(StringValuesSingleImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.z2e() === other.z2e()))
      return false;
    return entriesEquals(this.x2e(), other.x2e());
  };
  protoOf(StringValuesSingleImpl).c2f = function (body) {
    return body(this.w2f_1, this.x2f_1);
  };
  protoOf(StringValuesSingleImpl).k2e = function (name) {
    return equals(name, this.w2f_1, this.z2e()) ? firstOrNull(this.x2f_1) : null;
  };
  function entriesEquals(a, b) {
    return equals_0(a, b);
  }
  function entriesHashCode(entries, seed) {
    return imul(seed, 31) + hashCode(entries) | 0;
  }
  function toMap(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.x2e();
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var tmp = element.m1();
      var tmp$ret$2 = toList(element.n1());
      destination.a3(tmp, tmp$ret$2);
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
    this_0.gc(original, 0, firstIndex);
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
    this.y2f_1 = atomic$ref$1(emptyMap());
  }
  protoOf(CopyOnWriteHashMap).z2f = function (key) {
    return this.y2f_1.kotlinx$atomicfu$value.t2(key);
  };
  function GMTDate$Companion$$childSerializers$_anonymous__gyfycy() {
    return createSimpleEnumSerializer('io.ktor.util.date.WeekDay', values());
  }
  function GMTDate$Companion$$childSerializers$_anonymous__gyfycy_0() {
    return createSimpleEnumSerializer('io.ktor.util.date.Month', values_0());
  }
  function Companion_1() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, GMTDate$Companion$$childSerializers$_anonymous__gyfycy);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.a2g_1 = [null, null, null, tmp_1, null, null, lazy(tmp_2, GMTDate$Companion$$childSerializers$_anonymous__gyfycy_0), null, null];
    this.b2g_1 = GMTDate_0(new Long(0, 0));
  }
  var Companion_instance_3;
  function Companion_getInstance_1() {
    if (Companion_instance_3 == null)
      new Companion_1();
    return Companion_instance_3;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('io.ktor.util.date.GMTDate', this, 9);
    tmp0_serialDesc.wz('seconds', false);
    tmp0_serialDesc.wz('minutes', false);
    tmp0_serialDesc.wz('hours', false);
    tmp0_serialDesc.wz('dayOfWeek', false);
    tmp0_serialDesc.wz('dayOfMonth', false);
    tmp0_serialDesc.wz('dayOfYear', false);
    tmp0_serialDesc.wz('month', false);
    tmp0_serialDesc.wz('year', false);
    tmp0_serialDesc.wz('timestamp', false);
    this.c2g_1 = tmp0_serialDesc;
  }
  protoOf($serializer).d2g = function (encoder, value) {
    var tmp0_desc = this.c2g_1;
    var tmp1_output = encoder.ns(tmp0_desc);
    var tmp2_cached = Companion_getInstance_1().a2g_1;
    tmp1_output.xt(tmp0_desc, 0, value.e2g_1);
    tmp1_output.xt(tmp0_desc, 1, value.f2g_1);
    tmp1_output.xt(tmp0_desc, 2, value.g2g_1);
    tmp1_output.eu(tmp0_desc, 3, tmp2_cached[3].n1(), value.h2g_1);
    tmp1_output.xt(tmp0_desc, 4, value.i2g_1);
    tmp1_output.xt(tmp0_desc, 5, value.j2g_1);
    tmp1_output.eu(tmp0_desc, 6, tmp2_cached[6].n1(), value.k2g_1);
    tmp1_output.xt(tmp0_desc, 7, value.l2g_1);
    tmp1_output.yt(tmp0_desc, 8, value.m2g_1);
    tmp1_output.os(tmp0_desc);
  };
  protoOf($serializer).mp = function (encoder, value) {
    return this.d2g(encoder, value instanceof GMTDate ? value : THROW_CCE());
  };
  protoOf($serializer).np = function (decoder) {
    var tmp0_desc = this.c2g_1;
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
    var tmp13_input = decoder.ns(tmp0_desc);
    var tmp14_cached = Companion_getInstance_1().a2g_1;
    if (tmp13_input.dt()) {
      tmp4_local0 = tmp13_input.ss(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.ss(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.ss(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.zs(tmp0_desc, 3, tmp14_cached[3].n1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.ss(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.ss(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.zs(tmp0_desc, 6, tmp14_cached[6].n1(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.ss(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.ts(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.et(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.ss(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.ss(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.ss(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.zs(tmp0_desc, 3, tmp14_cached[3].n1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.ss(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.ss(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.zs(tmp0_desc, 6, tmp14_cached[6].n1(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.ss(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.ts(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.os(tmp0_desc);
    return GMTDate_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer).lp = function () {
    return this.c2g_1;
  };
  protoOf($serializer).l10 = function () {
    var tmp0_cached = Companion_getInstance_1().a2g_1;
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
      throwMissingFieldException(seen0, 511, $serializer_getInstance().c2g_1);
    }
    $this.e2g_1 = seconds;
    $this.f2g_1 = minutes;
    $this.g2g_1 = hours;
    $this.h2g_1 = dayOfWeek;
    $this.i2g_1 = dayOfMonth;
    $this.j2g_1 = dayOfYear;
    $this.k2g_1 = month;
    $this.l2g_1 = year;
    $this.m2g_1 = timestamp;
    return $this;
  }
  function GMTDate_init_$Create$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker) {
    return GMTDate_init_$Init$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker, objectCreate(protoOf(GMTDate)));
  }
  function GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    Companion_getInstance_1();
    this.e2g_1 = seconds;
    this.f2g_1 = minutes;
    this.g2g_1 = hours;
    this.h2g_1 = dayOfWeek;
    this.i2g_1 = dayOfMonth;
    this.j2g_1 = dayOfYear;
    this.k2g_1 = month;
    this.l2g_1 = year;
    this.m2g_1 = timestamp;
  }
  protoOf(GMTDate).n2g = function (other) {
    return this.m2g_1.k3(other.m2g_1);
  };
  protoOf(GMTDate).d = function (other) {
    return this.n2g(other instanceof GMTDate ? other : THROW_CCE());
  };
  protoOf(GMTDate).toString = function () {
    return 'GMTDate(seconds=' + this.e2g_1 + ', minutes=' + this.f2g_1 + ', hours=' + this.g2g_1 + ', dayOfWeek=' + this.h2g_1.toString() + ', dayOfMonth=' + this.i2g_1 + ', dayOfYear=' + this.j2g_1 + ', month=' + this.k2g_1.toString() + ', year=' + this.l2g_1 + ', timestamp=' + this.m2g_1.toString() + ')';
  };
  protoOf(GMTDate).hashCode = function () {
    var result = this.e2g_1;
    result = imul(result, 31) + this.f2g_1 | 0;
    result = imul(result, 31) + this.g2g_1 | 0;
    result = imul(result, 31) + this.h2g_1.hashCode() | 0;
    result = imul(result, 31) + this.i2g_1 | 0;
    result = imul(result, 31) + this.j2g_1 | 0;
    result = imul(result, 31) + this.k2g_1.hashCode() | 0;
    result = imul(result, 31) + this.l2g_1 | 0;
    result = imul(result, 31) + this.m2g_1.hashCode() | 0;
    return result;
  };
  protoOf(GMTDate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GMTDate))
      return false;
    if (!(this.e2g_1 === other.e2g_1))
      return false;
    if (!(this.f2g_1 === other.f2g_1))
      return false;
    if (!(this.g2g_1 === other.g2g_1))
      return false;
    if (!this.h2g_1.equals(other.h2g_1))
      return false;
    if (!(this.i2g_1 === other.i2g_1))
      return false;
    if (!(this.j2g_1 === other.j2g_1))
      return false;
    if (!this.k2g_1.equals(other.k2g_1))
      return false;
    if (!(this.l2g_1 === other.l2g_1))
      return false;
    if (!equalsLong(this.m2g_1, other.m2g_1))
      return false;
    return true;
  };
  var static_init_called_0;
  function static_init_0() {
    if (static_init_called_0)
      return Unit_instance;
    static_init_called_0 = true;
    WeekDay_MONDAY_instance = new WeekDay('MONDAY', 0, 'Mon');
    WeekDay_TUESDAY_instance = new WeekDay('TUESDAY', 1, 'Tue');
    WeekDay_WEDNESDAY_instance = new WeekDay('WEDNESDAY', 2, 'Wed');
    WeekDay_THURSDAY_instance = new WeekDay('THURSDAY', 3, 'Thu');
    WeekDay_FRIDAY_instance = new WeekDay('FRIDAY', 4, 'Fri');
    WeekDay_SATURDAY_instance = new WeekDay('SATURDAY', 5, 'Sat');
    WeekDay_SUNDAY_instance = new WeekDay('SUNDAY', 6, 'Sun');
    if (Companion_instance_4 == null) {
      Companion_instance;
      new Companion_2();
    }
  }
  var WeekDay_MONDAY_instance;
  var WeekDay_TUESDAY_instance;
  var WeekDay_WEDNESDAY_instance;
  var WeekDay_THURSDAY_instance;
  var WeekDay_FRIDAY_instance;
  var WeekDay_SATURDAY_instance;
  var WeekDay_SUNDAY_instance;
  function Companion_2() {
  }
  protoOf(Companion_2).o2g = function (ordinal) {
    return get_entries().d1(ordinal);
  };
  var Companion_instance_4;
  function Companion_getInstance_2() {
    return Companion_instance_4;
  }
  function values() {
    static_init_0();
    return [WeekDay_MONDAY_getInstance(), WeekDay_TUESDAY_getInstance(), WeekDay_WEDNESDAY_getInstance(), WeekDay_THURSDAY_getInstance(), WeekDay_FRIDAY_getInstance(), WeekDay_SATURDAY_getInstance(), WeekDay_SUNDAY_getInstance()];
  }
  function get_entries() {
    static_init_0();
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var $ENTRIES;
  function WeekDay(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.r2g_1 = value;
  }
  var static_init_called_1;
  function static_init_1() {
    if (static_init_called_1)
      return Unit_instance;
    static_init_called_1 = true;
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
    if (Companion_instance_5 == null) {
      Companion_instance;
      new Companion_3();
    }
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
  protoOf(Companion_3).o2g = function (ordinal) {
    return get_entries_0().d1(ordinal);
  };
  var Companion_instance_5;
  function Companion_getInstance_3() {
    return Companion_instance_5;
  }
  function values_0() {
    static_init_1();
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  function get_entries_0() {
    static_init_1();
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var $ENTRIES_0;
  function Month(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.u2g_1 = value;
  }
  function WeekDay_MONDAY_getInstance() {
    static_init_0();
    return WeekDay_MONDAY_instance;
  }
  function WeekDay_TUESDAY_getInstance() {
    static_init_0();
    return WeekDay_TUESDAY_instance;
  }
  function WeekDay_WEDNESDAY_getInstance() {
    static_init_0();
    return WeekDay_WEDNESDAY_instance;
  }
  function WeekDay_THURSDAY_getInstance() {
    static_init_0();
    return WeekDay_THURSDAY_instance;
  }
  function WeekDay_FRIDAY_getInstance() {
    static_init_0();
    return WeekDay_FRIDAY_instance;
  }
  function WeekDay_SATURDAY_getInstance() {
    static_init_0();
    return WeekDay_SATURDAY_instance;
  }
  function WeekDay_SUNDAY_getInstance() {
    static_init_0();
    return WeekDay_SUNDAY_instance;
  }
  function Month_JANUARY_getInstance() {
    static_init_1();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    static_init_1();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    static_init_1();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    static_init_1();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    static_init_1();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    static_init_1();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    static_init_1();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    static_init_1();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    static_init_1();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    static_init_1();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    static_init_1();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    static_init_1();
    return Month_DECEMBER_instance;
  }
  var CONDITION_FALSE;
  var ALREADY_REMOVED;
  var LIST_EMPTY;
  var REMOVE_PREPARED;
  var NO_DECISION;
  function LockFreeLinkedListNode() {
  }
  protoOf(LockFreeLinkedListNode).r1r = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.v2g_1;
    while (true) {
      var next = this_0.kotlinx$atomicfu$value;
      if (!(next instanceof OpDescriptor))
        return next;
      next.w2g(this);
    }
  };
  protoOf(LockFreeLinkedListNode).x2g = function () {
    return unwrap(this.r1r());
  };
  function Symbol(symbol) {
    this.y2g_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return this.y2g_1;
  };
  function Removed() {
  }
  function OpDescriptor() {
  }
  function unwrap(_this__u8e3s4) {
    _init_properties_LockFreeLinkedList_kt__wekxce();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof Removed ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z2g_1;
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
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function $proceedLoopCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i2h_1 = _this__u8e3s4;
  }
  protoOf($proceedLoopCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 6;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.j2h_1 = this.i2h_1.p2h_1;
            if (this.j2h_1 === -1) {
              this.o8_1 = 5;
              continue $sm;
            } else {
              this.o8_1 = 2;
              continue $sm;
            }

          case 2:
            this.k2h_1 = this.i2h_1.m2h_1;
            if (this.j2h_1 >= this.k2h_1.e1()) {
              this.i2h_1.q2h();
              this.o8_1 = 5;
              continue $sm;
            } else {
              this.o8_1 = 3;
              continue $sm;
            }

          case 3:
            var executeInterceptor = this.k2h_1.d1(this.j2h_1);
            this.i2h_1.p2h_1 = this.j2h_1 + 1 | 0;
            this.o8_1 = 4;
            suspendResult = executeInterceptor(this.i2h_1, this.i2h_1.o2h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.o8_1 = 1;
            continue $sm;
          case 5:
            return this.i2h_1.o2h_1;
          case 6:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 6) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  function DebugPipelineContext(context, interceptors, subject, coroutineContext) {
    PipelineContext.call(this, context);
    this.m2h_1 = interceptors;
    this.n2h_1 = coroutineContext;
    this.o2h_1 = subject;
    this.p2h_1 = 0;
  }
  protoOf(DebugPipelineContext).g1e = function () {
    return this.n2h_1;
  };
  protoOf(DebugPipelineContext).r2h = function () {
    return this.o2h_1;
  };
  protoOf(DebugPipelineContext).q2h = function () {
    this.p2h_1 = -1;
  };
  protoOf(DebugPipelineContext).s2h = function (subject, $completion) {
    this.o2h_1 = subject;
    return this.t2h($completion);
  };
  protoOf(DebugPipelineContext).t2h = function ($completion) {
    var index = this.p2h_1;
    if (index < 0)
      return this.o2h_1;
    if (index >= this.m2h_1.e1()) {
      this.q2h();
      return this.o2h_1;
    }
    return proceedLoop(this, $completion);
  };
  protoOf(DebugPipelineContext).u2h = function (initial, $completion) {
    this.p2h_1 = 0;
    this.o2h_1 = initial;
    return this.t2h($completion);
  };
  function PhaseContent_init_$Init$(phase, relation, $this) {
    var tmp = Companion_getInstance_4().v2h_1;
    PhaseContent.call($this, phase, relation, isInterface(tmp, KtMutableList) ? tmp : THROW_CCE());
    // Inline function 'kotlin.check' call
    if (!Companion_getInstance_4().v2h_1.r()) {
      var message = 'The shared empty array list has been modified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PhaseContent_init_$Create$(phase, relation) {
    return PhaseContent_init_$Init$(phase, relation, objectCreate(protoOf(PhaseContent)));
  }
  function copiedInterceptors($this) {
    return toMutableList($this.y2h_1);
  }
  function copyInterceptors($this) {
    $this.y2h_1 = copiedInterceptors($this);
    $this.z2h_1 = false;
  }
  function Companion_4() {
    Companion_instance_6 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.v2h_1 = ArrayList_init_$Create$();
  }
  var Companion_instance_6;
  function Companion_getInstance_4() {
    if (Companion_instance_6 == null)
      new Companion_4();
    return Companion_instance_6;
  }
  function PhaseContent(phase, relation, interceptors) {
    Companion_getInstance_4();
    this.w2h_1 = phase;
    this.x2h_1 = relation;
    this.y2h_1 = interceptors;
    this.z2h_1 = true;
  }
  protoOf(PhaseContent).a2i = function () {
    return this.y2h_1.r();
  };
  protoOf(PhaseContent).e1 = function () {
    return this.y2h_1.e1();
  };
  protoOf(PhaseContent).b2i = function (interceptor) {
    if (this.z2h_1) {
      copyInterceptors(this);
    }
    this.y2h_1.c1(interceptor);
  };
  protoOf(PhaseContent).c2i = function (destination) {
    var interceptors = this.y2h_1;
    if (destination instanceof ArrayList) {
      destination.s5(destination.e1() + interceptors.e1() | 0);
    }
    var inductionVariable = 0;
    var last = interceptors.e1();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        destination.c1(interceptors.d1(index));
      }
       while (inductionVariable < last);
  };
  protoOf(PhaseContent).d2i = function () {
    this.z2h_1 = true;
    return this.y2h_1;
  };
  protoOf(PhaseContent).toString = function () {
    return 'Phase `' + this.w2h_1.e2i_1 + '`, ' + this.e1() + ' handlers';
  };
  function _set_interceptors__wod97b($this, _set____db54di) {
    var tmp0 = $this.j2i_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Pipeline$_get_interceptors_$ref_u6zl4e();
    // Inline function 'kotlinx.atomicfu.AtomicRef.setValue' call
    getPropertyCallableRef('interceptors', 1, tmp, tmp_0, Pipeline$_set_interceptors_$ref_13vc1m());
    tmp0.kotlinx$atomicfu$value = _set____db54di;
    return Unit_instance;
  }
  function _get_interceptors__h4min7($this) {
    var tmp0 = $this.j2i_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Pipeline$_get_interceptors_$ref_u6zl4e();
    // Inline function 'kotlinx.atomicfu.AtomicRef.getValue' call
    getPropertyCallableRef('interceptors', 1, tmp, tmp_0, Pipeline$_set_interceptors_$ref_13vc1m());
    return tmp0.kotlinx$atomicfu$value;
  }
  function createContext($this, context, subject, coroutineContext) {
    return pipelineContextFor(context, sharedInterceptorsList($this), subject, coroutineContext, $this.m2i());
  }
  function findPhase($this, phase) {
    var phasesList = $this.h2i_1;
    var inductionVariable = 0;
    var last = phasesList.e1();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.d1(index);
        if (current === phase) {
          var content = PhaseContent_init_$Create$(phase, Last_getInstance());
          phasesList.x2(index, content);
          return content;
        }
        var tmp;
        if (current instanceof PhaseContent) {
          tmp = current.w2h_1 === phase;
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
    var phasesList = $this.h2i_1;
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
            tmp_0 = current.w2h_1 === phase;
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
    var phasesList = $this.h2i_1;
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
            tmp_0 = current.w2h_1 === phase;
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
    var interceptorsQuantity = $this.i2i_1;
    if (interceptorsQuantity === 0) {
      notSharedInterceptorsList($this, emptyList());
      return emptyList();
    }
    var phases = $this.h2i_1;
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
          if (phaseContent.a2i())
            continue $l$loop_0;
          var interceptors = phaseContent.d2i();
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
        phase.c2i(destination);
      }
       while (!(phaseIndex_0 === last_0));
    notSharedInterceptorsList($this, destination);
    return destination;
  }
  function sharedInterceptorsList($this) {
    if (_get_interceptors__h4min7($this) == null) {
      cacheInterceptors($this);
    }
    $this.k2i_1 = true;
    return ensureNotNull(_get_interceptors__h4min7($this));
  }
  function resetInterceptorsList($this) {
    _set_interceptors__wod97b($this, null);
    $this.k2i_1 = false;
    $this.l2i_1 = null;
  }
  function notSharedInterceptorsList($this, list) {
    _set_interceptors__wod97b($this, list);
    $this.k2i_1 = false;
    $this.l2i_1 = null;
  }
  function setInterceptorsListFromPhase($this, phaseContent) {
    _set_interceptors__wod97b($this, phaseContent.d2i());
    $this.k2i_1 = false;
    $this.l2i_1 = phaseContent.w2h_1;
  }
  function tryAddToPhaseFastPath($this, phase, block) {
    var currentInterceptors = _get_interceptors__h4min7($this);
    if ($this.h2i_1.r() || currentInterceptors == null) {
      return false;
    }
    var tmp;
    if ($this.k2i_1) {
      tmp = true;
    } else {
      tmp = !isInterface(currentInterceptors, KtMutableList);
    }
    if (tmp) {
      return false;
    }
    if (equals_0($this.l2i_1, phase)) {
      currentInterceptors.c1(block);
      return true;
    }
    if (equals_0(phase, last($this.h2i_1)) || findPhaseIndex($this, phase) === get_lastIndex_0($this.h2i_1)) {
      ensureNotNull(findPhase($this, phase)).b2i(block);
      currentInterceptors.c1(block);
      return true;
    }
    return false;
  }
  function Pipeline$_get_interceptors_$ref_u6zl4e() {
    return constructCallableReference(function (p0) {
      return _get_interceptors__h4min7(p0);
    }, 1, 0, 15);
  }
  function Pipeline$_set_interceptors_$ref_13vc1m() {
    return constructCallableReference(function (p0, p1) {
      _set_interceptors__wod97b(p0, p1);
      return Unit_instance;
    }, 2, 0, 16);
  }
  function Pipeline(phases) {
    this.f2i_1 = AttributesJsFn(true);
    this.g2i_1 = false;
    this.h2i_1 = mutableListOf(phases.slice());
    this.i2i_1 = 0;
    this.j2i_1 = atomic$ref$1(null);
    this.k2i_1 = false;
    this.l2i_1 = null;
  }
  protoOf(Pipeline).m2i = function () {
    return this.g2i_1;
  };
  protoOf(Pipeline).n2i = function (context, subject, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.u8();
    return createContext(this, context, subject, tmp$ret$0).u2h(subject, $completion);
  };
  protoOf(Pipeline).p2i = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_instance;
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference.toString() + ' was not registered for this pipeline');
    }
    var lastRelatedPhaseIndex = index;
    var inductionVariable = index + 1 | 0;
    var last = get_lastIndex_0(this.h2i_1);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.h2i_1.d1(i);
        var tmp0_safe_receiver = tmp instanceof PhaseContent ? tmp : null;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x2h_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var relation = tmp_0;
        var tmp2_safe_receiver = relation instanceof After ? relation : null;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.q2i_1;
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
    this.h2i_1.y2(lastRelatedPhaseIndex + 1 | 0, PhaseContent_init_$Create$(phase, new After(reference)));
  };
  protoOf(Pipeline).r2i = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_instance;
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference.toString() + ' was not registered for this pipeline');
    }
    this.h2i_1.y2(index, PhaseContent_init_$Create$(phase, new Before(reference)));
  };
  protoOf(Pipeline).s2i = function (phase, block) {
    var tmp0_elvis_lhs = findPhase(this, phase);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new InvalidPhaseException('Phase ' + phase.toString() + ' was not registered for this pipeline');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var phaseContent = tmp;
    if (tryAddToPhaseFastPath(this, phase, block)) {
      this.i2i_1 = this.i2i_1 + 1 | 0;
      return Unit_instance;
    }
    phaseContent.b2i(block);
    this.i2i_1 = this.i2i_1 + 1 | 0;
    resetInterceptorsList(this);
    this.t2i();
  };
  protoOf(Pipeline).t2i = function () {
  };
  protoOf(Pipeline).toString = function () {
    return anyToString(this);
  };
  function PipelineContext(context) {
    this.o2i_1 = context;
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
    this.e2i_1 = name;
  }
  protoOf(PipelinePhase).toString = function () {
    return "Phase('" + this.e2i_1 + "')";
  };
  function InvalidPhaseException(message) {
    extendThrowable(this, message);
    captureStack(this, InvalidPhaseException);
  }
  function After(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.q2i_1 = relativeTo;
  }
  function Before(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.u2i_1 = relativeTo;
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
      var currentIndex = $this.b2j_1;
      if (currentIndex === $this.w2i_1.e1()) {
        if (!direct) {
          // Inline function 'kotlin.Companion.success' call
          var value = $this.y2i_1;
          var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
          resumeRootWith($this, tmp$ret$0);
          return false;
        }
        return true;
      }
      $this.b2j_1 = currentIndex + 1 | 0;
      var next = $this.w2i_1.d1(currentIndex);
      try {
        var result = pipelineStartCoroutineUninterceptedOrReturn(next, $this, $this.y2i_1, $this.x2i_1);
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
    if (!($this.a2j_1 >= 0)) {
      var message = 'No more continuations to resume';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var next = ensureNotNull($this.z2i_1[$this.a2j_1]);
    var _unary__edvuaz = $this.a2j_1;
    $this.a2j_1 = _unary__edvuaz - 1 | 0;
    $this.z2i_1[_unary__edvuaz] = null;
    var interceptor = next.u8().b9(Key_instance_0);
    var tmp;
    if (interceptor instanceof CoroutineDispatcher) {
      tmp = interceptor.k1l(next.u8()) ? intercepted(next) : next;
    } else {
      tmp = intercepted(next);
    }
    var toResume = tmp;
    var exception = Result__exceptionOrNull_impl_p6xea9(result);
    if (exception == null) {
      toResume.z8(result);
    } else {
      var recoveredException = recoverStackTraceBridge(exception, next);
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(recoveredException));
      toResume.z8(tmp$ret$3);
    }
  }
  function discardLastRootContinuation($this) {
    // Inline function 'kotlin.check' call
    if (!($this.a2j_1 >= 0)) {
      var message = 'No more continuations to resume';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var _unary__edvuaz = $this.a2j_1;
    $this.a2j_1 = _unary__edvuaz - 1 | 0;
    $this.z2i_1[_unary__edvuaz] = null;
  }
  function SuspendFunctionGun$continuation$1(this$0) {
    this.d2j_1 = this$0;
    this.c2j_1 = -2147483648;
  }
  protoOf(SuspendFunctionGun$continuation$1).u8 = function () {
    var inductionVariable = this.d2j_1.a2j_1;
    if (0 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var cont = this.d2j_1.z2i_1[index];
        if (!(cont === this) && !(cont == null))
          return cont.u8();
      }
       while (0 <= inductionVariable);
    // Inline function 'kotlin.error' call
    var message = 'Not started';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(SuspendFunctionGun$continuation$1).kg = function (result) {
    // Inline function 'kotlin.onFailure' call
    var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(result);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(tmp0_safe_receiver));
      resumeRootWith(this.d2j_1, tmp$ret$4);
      return Unit_instance;
    }
    loop(this.d2j_1, false);
  };
  protoOf(SuspendFunctionGun$continuation$1).z8 = function (result) {
    return this.kg(result);
  };
  function SuspendFunctionGun(initial, context, interceptors) {
    PipelineContext.call(this, context);
    this.w2i_1 = interceptors;
    var tmp = this;
    tmp.x2i_1 = new SuspendFunctionGun$continuation$1(this);
    this.y2i_1 = initial;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.w2i_1.e1();
    tmp_0.z2i_1 = Array(size);
    this.a2j_1 = -1;
    this.b2j_1 = 0;
  }
  protoOf(SuspendFunctionGun).g1e = function () {
    return this.x2i_1.u8();
  };
  protoOf(SuspendFunctionGun).r2h = function () {
    return this.y2i_1;
  };
  protoOf(SuspendFunctionGun).t2h = function ($completion) {
    var tmp$ret$0;
    $l$block_0: {
      if (this.b2j_1 === this.w2i_1.e1()) {
        tmp$ret$0 = this.y2i_1;
        break $l$block_0;
      }
      this.e2j($completion);
      if (loop(this, true)) {
        discardLastRootContinuation(this);
        tmp$ret$0 = this.y2i_1;
        break $l$block_0;
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  };
  protoOf(SuspendFunctionGun).s2h = function (subject, $completion) {
    this.y2i_1 = subject;
    return this.t2h($completion);
  };
  protoOf(SuspendFunctionGun).u2h = function (initial, $completion) {
    this.b2j_1 = 0;
    if (this.b2j_1 === this.w2i_1.e1())
      return initial;
    this.y2i_1 = initial;
    // Inline function 'kotlin.check' call
    if (!(this.a2j_1 < 0)) {
      var message = 'Already started';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.t2h($completion);
  };
  protoOf(SuspendFunctionGun).e2j = function (continuation) {
    this.a2j_1 = this.a2j_1 + 1 | 0;
    this.z2i_1[this.a2j_1] = continuation;
  };
  function TypeInfo(type, isNullable, kotlinType) {
    kotlinType = kotlinType === VOID ? null : kotlinType;
    this.f2j_1 = type;
    this.g2j_1 = isNullable;
    this.h2j_1 = kotlinType;
    var tmp;
    if (this.g2j_1) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = this.h2j_1;
      tmp = !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l()) === true);
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = 'TypeInfo for nullable kotlinType ' + toString_1(this.h2j_1) + ' must have isNullable set to true';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(TypeInfo).hashCode = function () {
    var tmp0_safe_receiver = this.h2j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return imul(31, tmp1_elvis_lhs == null ? this.f2j_1.hashCode() : tmp1_elvis_lhs) + getBooleanHashCode(this.g2j_1) | 0;
  };
  protoOf(TypeInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypeInfo))
      return false;
    if (!(this.g2j_1 === other.g2j_1))
      return false;
    var tmp;
    if (!(this.h2j_1 == null) || !(other.h2j_1 == null)) {
      tmp = equals_0(this.h2j_1, other.h2j_1);
    } else {
      tmp = this.f2j_1.equals(other.f2j_1);
    }
    return tmp;
  };
  protoOf(TypeInfo).toString = function () {
    var tmp0_elvis_lhs = this.h2j_1;
    return 'TypeInfo(' + toString(tmp0_elvis_lhs == null ? this.f2j_1 : tmp0_elvis_lhs) + ')';
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
    return constructCallableReference(function (p0) {
      return get_platform(p0);
    }, 1, 0, 17);
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
    var dayOfWeek = Companion_instance_4.o2g((date.getUTCDay() + 6 | 0) % 7 | 0);
    var month = Companion_instance_5.o2g(date.getUTCMonth());
    return new GMTDate(date.getUTCSeconds(), date.getUTCMinutes(), date.getUTCHours(), dayOfWeek, date.getUTCDate(), date.getUTCFullYear(), month, date.getUTCFullYear(), numberToLong(date.getTime()));
  }
  function getTimeMillis() {
    return numberToLong((new Date()).getTime());
  }
  function InvalidTimestampException(timestamp) {
    IllegalStateException_init_$Init$('Invalid date timestamp exception: ' + timestamp.toString(), this);
    captureStack(this, InvalidTimestampException);
  }
  function AttributesJsFn(concurrent) {
    concurrent = concurrent === VOID ? false : concurrent;
    return new AttributesJs();
  }
  function AttributesJs() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.i2j_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(AttributesJs).u2c = function (key) {
    return this.i2j_1.t2(key);
  };
  protoOf(AttributesJs).v2c = function (key) {
    return this.i2j_1.r2(key);
  };
  protoOf(AttributesJs).w2c = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.i2j_1.a3(key, value);
  };
  protoOf(AttributesJs).y2c = function (key) {
    this.i2j_1.b3(key);
  };
  protoOf(AttributesJs).z2c = function (key, block) {
    var tmp0_safe_receiver = this.i2j_1.t2(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return !(tmp0_safe_receiver == null) ? tmp0_safe_receiver : THROW_CCE();
    }
    // Inline function 'kotlin.also' call
    var this_0 = block();
    // Inline function 'kotlin.collections.set' call
    this.i2j_1.a3(key, this_0);
    return this_0;
  };
  protoOf(AttributesJs).a2d = function () {
    return toList(this.i2j_1.u2());
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
  function generateNonceBlocking(length) {
    length = length === VOID ? 32 : length;
    _init_properties_Crypto_web_kt__nxveo7();
    var buffer = toJsArray(new Int8Array((length / 2 | 0) + 1 | 0));
    get__crypto().getRandomValues(buffer);
    return substring(toHexString(toByteArray(buffer)), 0, length);
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
  function KtorSimpleLogger(name) {
    return new KtorSimpleLogger$1();
  }
  function getKtorLogLevel() {
    return process ? process.env.KTOR_LOG_LEVEL : null;
  }
  function KtorSimpleLogger$1() {
    var tmp = this;
    var tmp_0;
    switch (PlatformUtils_getInstance().q2e_1 || PlatformUtils_getInstance().p2e_1) {
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
    tmp.j2j_1 = tmp_0;
  }
  protoOf(KtorSimpleLogger$1).k2j = function () {
    return this.j2j_1;
  };
  protoOf(KtorSimpleLogger$1).l2j = function (message) {
    if (this.j2j_1.d3(LogLevel_WARN_getInstance()) > 0)
      return Unit_instance;
    console.warn(message);
  };
  protoOf(KtorSimpleLogger$1).m2j = function (message, cause) {
    if (this.j2j_1.d3(LogLevel_DEBUG_getInstance()) > 0)
      return Unit_instance;
    console.debug('DEBUG: ' + message + ', cause: ' + cause.toString());
  };
  protoOf(KtorSimpleLogger$1).n2j = function (message) {
    if (this.j2j_1.d3(LogLevel_TRACE_getInstance()) > 0)
      return Unit_instance;
    console.debug('TRACE: ' + message);
  };
  protoOf(KtorSimpleLogger$1).o2j = function (message, cause) {
    if (this.j2j_1.d3(LogLevel_TRACE_getInstance()) > 0)
      return Unit_instance;
    console.debug('TRACE: ' + message + ', cause: ' + cause.toString());
  };
  function get_isTraceEnabled(_this__u8e3s4) {
    return _this__u8e3s4.k2j().d3(LogLevel_TRACE_getInstance()) <= 0;
  }
  var static_init_called_2;
  function static_init_2() {
    if (static_init_called_2)
      return Unit_instance;
    static_init_called_2 = true;
    LogLevel_TRACE_instance = new LogLevel('TRACE', 0);
    LogLevel_DEBUG_instance = new LogLevel('DEBUG', 1);
    LogLevel_INFO_instance = new LogLevel('INFO', 2);
    LogLevel_WARN_instance = new LogLevel('WARN', 3);
    LogLevel_ERROR_instance = new LogLevel('ERROR', 4);
    LogLevel_NONE_instance = new LogLevel('NONE', 5);
  }
  var LogLevel_TRACE_instance;
  var LogLevel_DEBUG_instance;
  var LogLevel_INFO_instance;
  var LogLevel_WARN_instance;
  var LogLevel_ERROR_instance;
  var LogLevel_NONE_instance;
  function values_1() {
    static_init_2();
    return [LogLevel_TRACE_getInstance(), LogLevel_DEBUG_getInstance(), LogLevel_INFO_getInstance(), LogLevel_WARN_getInstance(), LogLevel_ERROR_getInstance(), LogLevel_NONE_getInstance()];
  }
  function get_entries_1() {
    static_init_2();
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var $ENTRIES_1;
  function LogLevel(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LogLevel_TRACE_getInstance() {
    static_init_2();
    return LogLevel_TRACE_instance;
  }
  function LogLevel_DEBUG_getInstance() {
    static_init_2();
    return LogLevel_DEBUG_instance;
  }
  function LogLevel_INFO_getInstance() {
    static_init_2();
    return LogLevel_INFO_instance;
  }
  function LogLevel_WARN_getInstance() {
    static_init_2();
    return LogLevel_WARN_instance;
  }
  function LogLevel_ERROR_getInstance() {
    static_init_2();
    return LogLevel_ERROR_instance;
  }
  function LogLevel_NONE_getInstance() {
    static_init_2();
    return LogLevel_NONE_instance;
  }
  function pipelineStartCoroutineUninterceptedOrReturn(interceptor, context, subject, continuation) {
    var coroutine = pipelineStartCoroutineUninterceptedOrReturn$slambda_0(interceptor, context, subject, null);
    // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
    return startCoroutineUninterceptedOrReturnNonGeneratorVersion(coroutine, continuation);
  }
  function pipelineStartCoroutineUninterceptedOrReturn$slambda($interceptor, $context, $subject, resultContinuation) {
    this.x2j_1 = $interceptor;
    this.y2j_1 = $context;
    this.z2j_1 = $subject;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pipelineStartCoroutineUninterceptedOrReturn$slambda).l29 = function ($completion) {
    var tmp = this.a2k($completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(pipelineStartCoroutineUninterceptedOrReturn$slambda).j9 = function ($completion) {
    return this.l29($completion);
  };
  protoOf(pipelineStartCoroutineUninterceptedOrReturn$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = this.x2j_1(this.y2j_1, this.z2j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 2) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(pipelineStartCoroutineUninterceptedOrReturn$slambda).a2k = function (completion) {
    return new pipelineStartCoroutineUninterceptedOrReturn$slambda(this.x2j_1, this.y2j_1, this.z2j_1, completion);
  };
  function pipelineStartCoroutineUninterceptedOrReturn$slambda_0($interceptor, $context, $subject, resultContinuation) {
    var i = new pipelineStartCoroutineUninterceptedOrReturn$slambda($interceptor, $context, $subject, resultContinuation);
    return constructCallableReference(function ($completion) {
      return i.l29($completion);
    }, 0);
  }
  function get_DISABLE_SFG() {
    return DISABLE_SFG;
  }
  var DISABLE_SFG;
  function withCause(_this__u8e3s4, cause) {
    return _this__u8e3s4;
  }
  function instanceOf(_this__u8e3s4, type) {
    return type.sa(_this__u8e3s4);
  }
  //region block: post-declaration
  protoOf(CaseInsensitiveMap).asJsReadonlyMapView = asJsReadonlyMapView;
  protoOf($serializer).m10 = typeParametersSerializers;
  protoOf(AttributesJs).t2c = get;
  protoOf(AttributesJs).x2c = set;
  //endregion
  //region block: init
  Companion_instance_2 = new Companion_0();
  Companion_instance_4 = new Companion_2();
  Companion_instance_5 = new Companion_3();
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
  _.$_$.g = KtorSimpleLogger;
  _.$_$.h = get_isTraceEnabled;
  _.$_$.i = PipelineContext;
  _.$_$.j = PipelinePhase;
  _.$_$.k = Pipeline;
  _.$_$.l = TypeInfo;
  _.$_$.m = instanceOf;
  _.$_$.n = AttributeKey;
  _.$_$.o = AttributesJsFn;
  _.$_$.p = Attributes;
  _.$_$.q = SilentSupervisor;
  _.$_$.r = forEach;
  _.$_$.s = get_0;
  _.$_$.t = StringValuesBuilderImpl;
  _.$_$.u = StringValuesImpl;
  _.$_$.v = StringValuesSingleImpl;
  _.$_$.w = StringValues;
  _.$_$.x = appendAll;
  _.$_$.y = generateNonce;
  _.$_$.z = isLowerCase;
  _.$_$.a1 = putAll;
  _.$_$.b1 = toCharArray;
  _.$_$.c1 = toLowerCasePreservingASCIIRules;
  _.$_$.d1 = toMap;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-utils.js.map
