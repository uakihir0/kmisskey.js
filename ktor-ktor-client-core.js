(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './ktor-ktor-utils.js', './kotlinx-atomicfu.js', './ktor-ktor-events.js', './ktor-ktor-io.js', './ktor-ktor-http.js', './kotlinx-io-kotlinx-io-core.js', './ktor-ktor-http-cio.js', './ktor-ktor-websockets.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-atomicfu.js'), require('./ktor-ktor-events.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-http.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./ktor-ktor-http-cio.js'), require('./ktor-ktor-websockets.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-events'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-events' was not found. Please, check whether 'ktor-ktor-events' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-http-cio'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-http-cio' was not found. Please, check whether 'ktor-ktor-http-cio' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-websockets'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-websockets' was not found. Please, check whether 'ktor-ktor-websockets' is loaded prior to 'ktor-ktor-client-core'.");
    }
    globalThis['ktor-ktor-client-core'] = factory(typeof globalThis['ktor-ktor-client-core'] === 'undefined' ? {} : globalThis['ktor-ktor-client-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['ktor-ktor-utils'], globalThis['kotlinx-atomicfu'], globalThis['ktor-ktor-events'], globalThis['ktor-ktor-io'], globalThis['ktor-ktor-http'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['ktor-ktor-http-cio'], globalThis['ktor-ktor-websockets']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_io_ktor_ktor_events, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_io_ktor_ktor_http_cio, kotlin_io_ktor_ktor_websockets) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var ensureNotNull = kotlin_kotlin.$_$.ah;
  var protoOf = kotlin_kotlin.$_$.ic;
  var objectCreate = kotlin_kotlin.$_$.hc;
  var CancellationException = kotlin_kotlin.$_$.v8;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.a4;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var CoroutineImpl = kotlin_kotlin.$_$.o9;
  var THROW_CCE = kotlin_kotlin.$_$.jg;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.i;
  var toString = kotlin_kotlin.$_$.lc;
  var getKClassFromExpression = kotlin_kotlin.$_$.bd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.t4;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var initMetadataForLambda = kotlin_kotlin.$_$.nb;
  var VOID = kotlin_kotlin.$_$.c;
  var constructCallableReference = kotlin_kotlin.$_$.ab;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.kb;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var AttributesJsFn = kotlin_io_ktor_ktor_utils.$_$.o;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.n;
  var AutoCloseable = kotlin_kotlin.$_$.sf;
  var isInterface = kotlin_kotlin.$_$.xb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var initMetadataForClass = kotlin_kotlin.$_$.ib;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s3;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.a;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.k1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.s2;
  var arrayOf = kotlin_kotlin.$_$.wg;
  var createKType = kotlin_kotlin.$_$.ad;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.l;
  var initMetadataForCompanion = kotlin_kotlin.$_$.jb;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.m;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.cb;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.r9;
  var IllegalStateException = kotlin_kotlin.$_$.dg;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.r4;
  var captureStack = kotlin_kotlin.$_$.sa;
  var defineProp = kotlin_kotlin.$_$.bb;
  var UnsupportedOperationException = kotlin_kotlin.$_$.ug;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.f5;
  var trimIndent = kotlin_kotlin.$_$.lf;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.r1;
  var fromInt = kotlin_kotlin.$_$.ca;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.j1;
  var readBuffer = kotlin_io_ktor_ktor_io.$_$.h;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.s4;
  var initMetadataForInterface = kotlin_kotlin.$_$.mb;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.hh;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var writer = kotlin_io_ktor_ktor_io.$_$.w1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.x;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.w;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.c;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.u;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.v;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.s;
  var ContentWrapper = kotlin_io_ktor_ktor_http.$_$.t;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.m1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p4;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.y;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var emptySet = kotlin_kotlin.$_$.z6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j3;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.k1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.y3;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var getKClass = kotlin_kotlin.$_$.cd;
  var getStarKTypeProjection = kotlin_kotlin.$_$.dd;
  var ioDispatcher = kotlin_io_ktor_ktor_io.$_$.t1;
  var SilentSupervisor = kotlin_io_ktor_ktor_utils.$_$.q;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var lazy = kotlin_kotlin.$_$.gh;
  var KProperty1 = kotlin_kotlin.$_$.hd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.fb;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var KtMutableMap = kotlin_kotlin.$_$.v5;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.yc;
  var setOf = kotlin_kotlin.$_$.c8;
  var get = kotlin_kotlin.$_$.k9;
  var fold = kotlin_kotlin.$_$.j9;
  var minusKey = kotlin_kotlin.$_$.l9;
  var plus = kotlin_kotlin.$_$.n9;
  var Element = kotlin_kotlin.$_$.m9;
  var joinToString = kotlin_kotlin.$_$.k7;
  var setOf_0 = kotlin_kotlin.$_$.d8;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.j;
  var isSuspendFunction = kotlin_kotlin.$_$.ac;
  var initMetadataForObject = kotlin_kotlin.$_$.ob;
  var get_isTraceEnabled = kotlin_io_ktor_ktor_utils.$_$.h;
  var MalformedInputException = kotlin_io_ktor_ktor_io.$_$.p;
  var Unit = kotlin_kotlin.$_$.tg;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.g;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var toLong = kotlin_kotlin.$_$.ef;
  var contentType = kotlin_io_ktor_ktor_http.$_$.s1;
  var isByteArray = kotlin_kotlin.$_$.rb;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.d1;
  var Long = kotlin_kotlin.$_$.eg;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.e;
  var rethrowCloseCauseIfNeeded = kotlin_io_ktor_ktor_io.$_$.v1;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.c;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var CIOMultipartDataBase = kotlin_io_ktor_ktor_http_cio.$_$.a;
  var MultiPartData = kotlin_io_ktor_ktor_http.$_$.q;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.p1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.g1;
  var ByteChannel = kotlin_io_ktor_ktor_io.$_$.i1;
  var writer_0 = kotlin_io_ktor_ktor_io.$_$.x1;
  var invokeOnCompletion = kotlin_io_ktor_ktor_io.$_$.s1;
  var attachJob = kotlin_io_ktor_ktor_io.$_$.n1;
  var attachWriterJob = kotlin_io_ktor_ktor_io.$_$.o1;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.m;
  var Source = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.h;
  var readText = kotlin_io_ktor_ktor_io.$_$.u1;
  var toInt = kotlin_kotlin.$_$.bf;
  var reversed = kotlin_kotlin.$_$.b8;
  var Attributes = kotlin_io_ktor_ktor_utils.$_$.p;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v3;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.b;
  var toList = kotlin_kotlin.$_$.k8;
  var sortedWith = kotlin_kotlin.$_$.f8;
  var Collection = kotlin_kotlin.$_$.k5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e4;
  var charSequenceLength = kotlin_kotlin.$_$.xa;
  var get_name = kotlin_io_ktor_ktor_io.$_$.t;
  var roundToInt = kotlin_kotlin.$_$.nc;
  var firstOrNull = kotlin_kotlin.$_$.d7;
  var FunctionAdapter = kotlin_kotlin.$_$.oa;
  var Comparator = kotlin_kotlin.$_$.wf;
  var hashCode = kotlin_kotlin.$_$.hb;
  var compareValues = kotlin_kotlin.$_$.u8;
  var charset = kotlin_io_ktor_ktor_http.$_$.q1;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.i2;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.p1;
  var readText_0 = kotlin_io_ktor_ktor_io.$_$.y;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.l;
  var listOf = kotlin_kotlin.$_$.r7;
  var plus_0 = kotlin_kotlin.$_$.x7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i3;
  var checkIndexOverflow = kotlin_kotlin.$_$.d6;
  var get_lastIndex = kotlin_kotlin.$_$.o7;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.o1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.h2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h;
  var substringBefore = kotlin_kotlin.$_$.re;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.b2;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.n1;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.j;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var KFunctionImpl = kotlin_kotlin.$_$.xc;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.lb;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var Default_getInstance = kotlin_kotlin.$_$.r2;
  var equalsLong = kotlin_kotlin.$_$.ba;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var toLongOrNull = kotlin_kotlin.$_$.df;
  var multiply = kotlin_kotlin.$_$.ga;
  var compare = kotlin_kotlin.$_$.w9;
  var toNumber = kotlin_kotlin.$_$.na;
  var numberToLong = kotlin_kotlin.$_$.ia;
  var add = kotlin_kotlin.$_$.t9;
  var Companion_instance = kotlin_kotlin.$_$.z2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p;
  var createFailure = kotlin_kotlin.$_$.zg;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.q;
  var toString_0 = kotlin_kotlin.$_$.kh;
  var trimMargin = kotlin_kotlin.$_$.mf;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var isWebsocket = kotlin_io_ktor_ktor_http.$_$.c2;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.t2;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.d2;
  var toDuration = kotlin_kotlin.$_$.qf;
  var delay_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var KProperty0 = kotlin_kotlin.$_$.gd;
  var Exception = kotlin_kotlin.$_$.bg;
  var createKTypeParameter = kotlin_kotlin.$_$.zc;
  var NullBody = kotlin_io_ktor_ktor_http.$_$.r;
  var WebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.o;
  var DefaultWebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.k;
  var generateNonce = kotlin_io_ktor_ktor_utils.$_$.y;
  var Default_getInstance_0 = kotlin_kotlin.$_$.j2;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.f1;
  var emptyList = kotlin_kotlin.$_$.x6;
  var addAll = kotlin_kotlin.$_$.z5;
  var parseWebSocketExtensions = kotlin_io_ktor_ktor_websockets.$_$.q;
  var WebSocketExtensionsConfig = kotlin_io_ktor_ktor_websockets.$_$.m;
  var WebSocketChannelsConfig = kotlin_io_ktor_ktor_websockets.$_$.l;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_websockets.$_$.d;
  var DefaultWebSocketSession_0 = kotlin_io_ktor_ktor_websockets.$_$.j;
  var IllegalStateException_init_$Init$_1 = kotlin_kotlin.$_$.u4;
  var KtList = kotlin_kotlin.$_$.p5;
  var WebSocketExtension = kotlin_io_ktor_ktor_websockets.$_$.n;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.j1;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.g2;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.x;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.a1;
  var GMTDate = kotlin_io_ktor_ktor_utils.$_$.d;
  var set = kotlin_io_ktor_ktor_http.$_$.e2;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.k;
  var formUrlEncode = kotlin_io_ktor_ktor_http.$_$.w1;
  var toByteArray_0 = kotlin_io_ktor_ktor_io.$_$.c1;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.d1;
  var writeFully_0 = kotlin_io_ktor_ktor_io.$_$.n;
  var copyTo_0 = kotlin_io_ktor_ktor_io.$_$.f;
  var closeFinally = kotlin_kotlin.$_$.xg;
  var close = kotlin_io_ktor_ktor_io.$_$.q1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.e6;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.u;
  var writeText = kotlin_io_ktor_ktor_io.$_$.e1;
  var build = kotlin_io_ktor_ktor_io.$_$.w;
  var BinaryChannelItem = kotlin_io_ktor_ktor_http.$_$.z;
  var FormItem = kotlin_io_ktor_ktor_http.$_$.c1;
  var BinaryItem = kotlin_io_ktor_ktor_http.$_$.a1;
  var FileItem = kotlin_io_ktor_ktor_http.$_$.b1;
  var toString_1 = kotlin_kotlin.$_$.ff;
  var take = kotlin_kotlin.$_$.ue;
  var writePacket = kotlin_io_ktor_ktor_io.$_$.o;
  var Companion_getInstance_5 = kotlin_io_ktor_ktor_http.$_$.h;
  var get_remaining = kotlin_io_ktor_ktor_io.$_$.z;
  var isNumber = kotlin_kotlin.$_$.yb;
  var getStringHashCode = kotlin_kotlin.$_$.gb;
  var quote = kotlin_io_ktor_ktor_http.$_$.d2;
  var isQuoted = kotlin_io_ktor_ktor_http.$_$.a2;
  var ByteReadPacket = kotlin_io_ktor_ktor_io.$_$.v;
  var decode = kotlin_io_ktor_ktor_io.$_$.q;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.s;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.r;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.f1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.g;
  var KtMutableList = kotlin_kotlin.$_$.t5;
  var Companion_getInstance_6 = kotlin_io_ktor_ktor_http.$_$.k;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var equals_0 = kotlin_kotlin.$_$.ud;
  var flatten = kotlin_kotlin.$_$.f7;
  var copyToArray = kotlin_kotlin.$_$.u6;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var CancellationException_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var headersOf = kotlin_io_ktor_ktor_http.$_$.y1;
  var intercepted = kotlin_kotlin.$_$.z8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var listOf_0 = kotlin_kotlin.$_$.s7;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.b4;
  var Error_init_$Create$ = kotlin_kotlin.$_$.g4;
  var Companion_getInstance_7 = kotlin_io_ktor_ktor_websockets.$_$.c;
  var Codes_CLOSED_ABNORMALLY_getInstance = kotlin_io_ktor_ktor_websockets.$_$.a;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.h;
  var Binary_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.f;
  var CloseReason = kotlin_io_ktor_ktor_websockets.$_$.i;
  var Close_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.g;
  var Codes_NORMAL_getInstance = kotlin_io_ktor_ktor_websockets.$_$.b;
  var decodeToString = kotlin_kotlin.$_$.qd;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var from = kotlin_io_ktor_ktor_websockets.$_$.p;
  var send = kotlin_io_ktor_ktor_websockets.$_$.e;
  var toTypedArray = kotlin_kotlin.$_$.s8;
  var get_supportsRequestBody = kotlin_io_ktor_ktor_http.$_$.f2;
  var isEmpty = kotlin_io_ktor_ktor_http.$_$.e1;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var isNaN_0 = kotlin_kotlin.$_$.eh;
  var encodeURLParameter = kotlin_io_ktor_ktor_http.$_$.v1;
  var get_hostWithPort = kotlin_io_ktor_ktor_http.$_$.z1;
  var Companion_getInstance_8 = kotlin_io_ktor_ktor_http.$_$.n;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(HttpClient$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpClient$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($executeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpClient, 'HttpClient', VOID, VOID, [CoroutineScope, AutoCloseable], [1]);
  initMetadataForClass(HttpClientConfig, 'HttpClientConfig', HttpClientConfig);
  initMetadataForClass(HttpClientCall, 'HttpClientCall', VOID, VOID, [CoroutineScope], [0, 1]);
  initMetadataForClass(DelegatedCall, 'DelegatedCall', VOID, HttpClientCall, VOID, [0, 1]);
  function get_coroutineContext() {
    return this.r3z().g1e();
  }
  initMetadataForInterface(HttpRequest_0, 'HttpRequest', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(DelegatedRequest, 'DelegatedRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForClass(HttpResponse, 'HttpResponse', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(DelegatedResponse, 'DelegatedResponse', VOID, HttpResponse);
  initMetadataForCompanion(Companion);
  initMetadataForCoroutine($bodyNullableCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DoubleReceiveException, 'DoubleReceiveException', VOID, IllegalStateException);
  initMetadataForClass(NoTransformationFoundException, 'NoTransformationFoundException', VOID, UnsupportedOperationException);
  initMetadataForClass(SavedHttpCall, 'SavedHttpCall', VOID, HttpClientCall, VOID, [0, 1]);
  initMetadataForClass(SavedHttpRequest, 'SavedHttpRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForClass(SavedHttpResponse, 'SavedHttpResponse', VOID, HttpResponse);
  initMetadataForCoroutine($saveCOROUTINE$, CoroutineImpl);
  initMetadataForClass(UnsupportedContentTypeException, 'UnsupportedContentTypeException', VOID, IllegalStateException);
  initMetadataForInterface(ProgressListener, 'ProgressListener', VOID, VOID, VOID, [2]);
  initMetadataForLambda(ObservableContent$getContent$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ObservableContent, 'ObservableContent', VOID, ReadChannelContent);
  initMetadataForLambda(HttpClientEngine$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpClientEngine$executeWithinCallContext$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($executeWithinCallContextCOROUTINE$, CoroutineImpl);
  function get_supportedCapabilities() {
    return emptySet();
  }
  function install(client) {
    var tmp = Phases_getInstance_0().m3y_1;
    client.y3v_1.s2i(tmp, HttpClientEngine$install$slambda_0(client, this, null));
  }
  initMetadataForInterface(HttpClientEngine, 'HttpClientEngine', VOID, VOID, [CoroutineScope, AutoCloseable], [1]);
  initMetadataForClass(HttpClientEngineBase, 'HttpClientEngineBase', VOID, VOID, [HttpClientEngine], [1]);
  initMetadataForClass(ClientEngineClosedException, 'ClientEngineClosedException', ClientEngineClosedException, IllegalStateException);
  initMetadataForInterface(HttpClientEngineCapability, 'HttpClientEngineCapability');
  initMetadataForClass(HttpClientEngineConfig, 'HttpClientEngineConfig', HttpClientEngineConfig);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(KtorCallContextElement, 'KtorCallContextElement', VOID, VOID, [Element]);
  initMetadataForLambda(AfterRenderHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(AfterRenderHook, 'AfterRenderHook');
  initMetadataForLambda(AfterReceiveHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(AfterReceiveHook, 'AfterReceiveHook');
  initMetadataForLambda(BodyProgress$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(BodyProgress$lambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ResponseException, 'ResponseException', VOID, IllegalStateException);
  initMetadataForClass(RedirectResponseException, 'RedirectResponseException', VOID, ResponseException);
  initMetadataForClass(ClientRequestException, 'ClientRequestException', VOID, ResponseException);
  initMetadataForClass(ServerResponseException, 'ServerResponseException', VOID, ResponseException);
  initMetadataForLambda(addDefaultResponseValidation$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(defaultTransformers$1$content$1, VOID, VOID, ByteArrayContent);
  initMetadataForClass(defaultTransformers$1$content$2, VOID, VOID, ReadChannelContent);
  initMetadataForLambda(defaultTransformers$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(defaultTransformers$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(defaultTransformers$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForClass(HttpCallValidatorConfig, 'HttpCallValidatorConfig', HttpCallValidatorConfig);
  initMetadataForClass(ExceptionHandlerWrapper, 'ExceptionHandlerWrapper');
  initMetadataForClass(RequestExceptionHandlerWrapper, 'RequestExceptionHandlerWrapper');
  initMetadataForLambda(RequestError$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(RequestError, 'RequestError');
  initMetadataForLambda(ReceiveError$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(ReceiveError, 'ReceiveError');
  initMetadataForLambda(HttpCallValidator$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_3, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_5, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($invoke$validateResponseCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($invoke$processExceptionCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpRequest$1, VOID, VOID, VOID, [HttpRequest_0]);
  initMetadataForClass(HttpPlainTextConfig, 'HttpPlainTextConfig', HttpPlainTextConfig);
  initMetadataForLambda(RenderRequestHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(RenderRequestHook, 'RenderRequestHook');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForLambda(HttpPlainText$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpPlainText$lambda$slambda_1, CoroutineImpl, VOID, [4]);
  initMetadataForClass(HttpRedirectConfig, 'HttpRedirectConfig', HttpRedirectConfig);
  initMetadataForLambda(HttpRedirect$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($invoke$handleCallCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($invokeCOROUTINE$, CoroutineImpl);
  initMetadataForFunctionReference(PipelineContext$proceed$ref, KFunctionImpl, VOID, [0]);
  initMetadataForLambda(SetupRequestContext$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(SetupRequestContext, 'SetupRequestContext');
  initMetadataForLambda(HttpRequestLifecycle$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(HttpRetryEventData, 'HttpRetryEventData');
  initMetadataForLambda(HttpRequestRetryConfig$delay$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(HttpRequestRetryConfig, 'HttpRequestRetryConfig', HttpRequestRetryConfig);
  initMetadataForClass(HttpRetryShouldRetryContext, 'HttpRetryShouldRetryContext');
  initMetadataForClass(HttpRetryDelayContext, 'HttpRetryDelayContext');
  initMetadataForClass(HttpRetryModifyRequestContext, 'HttpRetryModifyRequestContext');
  initMetadataForLambda(HttpRequestRetry$lambda$slambda, CoroutineImpl, VOID, [3]);
  initMetadataForLambda(HttpRequestRetry$lambda$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($throwOnInvalidResponseBodyCOROUTINE$, CoroutineImpl);
  initMetadataForInterface(Sender, 'Sender', VOID, VOID, VOID, [1]);
  initMetadataForLambda(HttpSend$Plugin$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($executeCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(Config, 'Config', Config);
  initMetadataForObject(Plugin, 'Plugin');
  initMetadataForClass(InterceptedSender, 'InterceptedSender', VOID, VOID, [Sender], [1]);
  initMetadataForClass(DefaultSender, 'DefaultSender', VOID, VOID, [Sender], [1]);
  initMetadataForClass(HttpSend, 'HttpSend');
  initMetadataForClass(SendCountExceedException, 'SendCountExceedException', VOID, IllegalStateException);
  initMetadataForObject(HttpTimeoutCapability, 'HttpTimeoutCapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForClass(HttpRequestTimeoutException, 'HttpRequestTimeoutException', VOID, IOException, [CopyableThrowable]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(HttpTimeoutConfig, 'HttpTimeoutConfig', HttpTimeoutConfig_init_$Create$);
  initMetadataForLambda(HttpTimeout$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(applyRequestTimeout$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SaveBodyPluginConfig, 'SaveBodyPluginConfig', SaveBodyPluginConfig);
  initMetadataForLambda(SaveBody$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(HookHandler, 'HookHandler');
  initMetadataForClass(ClientPluginBuilder, 'ClientPluginBuilder');
  initMetadataForClass(ClientPluginInstance, 'ClientPluginInstance', VOID, VOID, [AutoCloseable]);
  initMetadataForLambda(SetupRequest$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(SetupRequest, 'SetupRequest');
  initMetadataForClass(Sender_0, 'Sender', VOID, VOID, [CoroutineScope], [1]);
  initMetadataForLambda(Send$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(Send, 'Send');
  initMetadataForClass(ClientPluginImpl, 'ClientPluginImpl');
  initMetadataForClass(TransformResponseBodyContext, 'TransformResponseBodyContext');
  initMetadataForClass(OnRequestContext, 'OnRequestContext');
  initMetadataForLambda(RequestHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(RequestHook, 'RequestHook');
  initMetadataForLambda(TransformResponseBodyHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(TransformResponseBodyHook, 'TransformResponseBodyHook');
  initMetadataForObject(SSECapability, 'SSECapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForClass(SSEClientContent, 'SSEClientContent', VOID, ContentWrapper);
  initMetadataForClass(DefaultClientWebSocketSession, 'DefaultClientWebSocketSession', VOID, VOID, [WebSocketSession, DefaultWebSocketSession], [1, 0]);
  initMetadataForClass(DelegatingClientWebSocketSession, 'DelegatingClientWebSocketSession', VOID, VOID, [WebSocketSession], [1, 0]);
  initMetadataForClass(ClientUpgradeContent, 'ClientUpgradeContent', VOID, NoContent, VOID, [1]);
  initMetadataForClass(WebSocketContent, 'WebSocketContent', WebSocketContent, ClientUpgradeContent, VOID, [1]);
  initMetadataForLambda(WebSockets$Plugin$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(WebSockets$Plugin$install$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForClass(Config_0, 'Config', Config_0);
  initMetadataForObject(Plugin_0, 'Plugin');
  initMetadataForClass(WebSockets, 'WebSockets');
  initMetadataForObject(WebSocketExtensionsCapability, 'WebSocketExtensionsCapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForObject(WebSocketCapability, 'WebSocketCapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForClass(WebSocketException, 'WebSocketException', VOID, IllegalStateException);
  initMetadataForClass(DefaultHttpRequest, 'DefaultHttpRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(HttpRequestBuilder, 'HttpRequestBuilder', HttpRequestBuilder);
  initMetadataForClass(HttpRequestData, 'HttpRequestData');
  initMetadataForInterface(ResponseAdapter, 'ResponseAdapter');
  initMetadataForClass(HttpResponseData, 'HttpResponseData');
  initMetadataForObject(Phases, 'Phases');
  initMetadataForClass(HttpRequestPipeline, 'HttpRequestPipeline', HttpRequestPipeline, Pipeline, VOID, [2]);
  initMetadataForObject(Phases_0, 'Phases');
  initMetadataForClass(HttpSendPipeline, 'HttpSendPipeline', HttpSendPipeline, Pipeline, VOID, [2]);
  initMetadataForClass(FormDataContent, 'FormDataContent', VOID, ByteArrayContent);
  initMetadataForCoroutine($writeToCOROUTINE$, CoroutineImpl);
  initMetadataForClass(MultiPartFormDataContent, 'MultiPartFormDataContent', VOID, WriteChannelContent, VOID, [1]);
  initMetadataForClass(PreparedPart, 'PreparedPart');
  initMetadataForClass(InputPart, 'InputPart', VOID, PreparedPart);
  initMetadataForClass(ChannelPart, 'ChannelPart', VOID, PreparedPart);
  initMetadataForClass(FormBuilder, 'FormBuilder');
  initMetadataForClass(FormPart, 'FormPart');
  initMetadataForClass(InputProvider, 'InputProvider');
  initMetadataForClass(ChannelProvider, 'ChannelProvider');
  initMetadataForClass(DefaultHttpResponse, 'DefaultHttpResponse', VOID, HttpResponse);
  initMetadataForCoroutine($bodyAsTextCOROUTINE$, CoroutineImpl);
  initMetadataForObject(Phases_1, 'Phases');
  initMetadataForClass(HttpReceivePipeline, 'HttpReceivePipeline', HttpReceivePipeline, Pipeline, VOID, [2]);
  initMetadataForObject(Phases_2, 'Phases');
  initMetadataForClass(HttpResponsePipeline, 'HttpResponsePipeline', HttpResponsePipeline, Pipeline, VOID, [2]);
  initMetadataForClass(HttpResponseContainer, 'HttpResponseContainer');
  initMetadataForCoroutine($fetchResponseCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpStatement, 'HttpStatement', VOID, VOID, VOID, [1, 0, 2]);
  initMetadataForLambda(observable$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(HttpResponseReceiveFail, 'HttpResponseReceiveFail');
  initMetadataForObject(EmptyContent, 'EmptyContent', VOID, NoContent);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(FetchOptions, 'FetchOptions');
  initMetadataForObject(Js, 'Js');
  initMetadataForClass(JsClientEngineConfig, 'JsClientEngineConfig', JsClientEngineConfig, HttpClientEngineConfig);
  initMetadataForClass(JsClientEngine$createWebSocket$headers_capturingHack$1);
  initMetadataForCoroutine($executeCOROUTINE$_1, CoroutineImpl);
  initMetadataForCoroutine($createWebSocketCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($executeWebSocketRequestCOROUTINE$, CoroutineImpl);
  initMetadataForClass(JsClientEngine, 'JsClientEngine', VOID, HttpClientEngineBase, VOID, [1, 2]);
  initMetadataForClass(sam$kotlinx_coroutines_DisposableHandle$0, 'sam$kotlinx_coroutines_DisposableHandle$0', VOID, VOID, [DisposableHandle, FunctionAdapter]);
  initMetadataForLambda(channelFromStream$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_DisposableHandle$0_0, 'sam$kotlinx_coroutines_DisposableHandle$0', VOID, VOID, [DisposableHandle, FunctionAdapter]);
  initMetadataForLambda(JsWebSocketSession$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(JsWebSocketSession, 'JsWebSocketSession', VOID, VOID, [DefaultWebSocketSession], [0, 1]);
  initMetadataForLambda(getBodyBytes$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($toRawCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($getBodyBytesCOROUTINE$, CoroutineImpl);
  initMetadataForClass(Node, 'Node');
  initMetadataForClass(engines$iterator$1);
  initMetadataForObject(engines, 'engines');
  initMetadataForClass(EngineEntry, 'EngineEntry');
  initMetadataForClass(ProxyConfig, 'ProxyConfig', ProxyConfig_init_$Create$);
  initMetadataForObject(ProxyBuilder, 'ProxyBuilder');
  initMetadataForClass(ConnectTimeoutException, 'ConnectTimeoutException', VOID, IOException);
  initMetadataForClass(InterruptedIOException, 'InterruptedIOException', VOID, IOException);
  initMetadataForClass(SocketTimeoutException, 'SocketTimeoutException', VOID, InterruptedIOException);
  //endregion
  function HttpClient_init_$Init$(engine, userConfig, manageEngine, $this) {
    HttpClient.call($this, engine, userConfig);
    $this.s3v_1 = manageEngine;
    if ($this.s3v_1) {
      if (engine instanceof HttpClientEngineBase) {
        engine.g3w_1.atomicfu$incrementAndGet();
      }
      var tmp = ensureNotNull($this.v3v_1.b9(Key_instance));
      tmp.i1f(HttpClient$_init_$lambda_36nm6w(engine));
    }
    return $this;
  }
  function HttpClient_init_$Create$(engine, userConfig, manageEngine) {
    return HttpClient_init_$Init$(engine, userConfig, manageEngine, objectCreate(protoOf(HttpClient)));
  }
  function HttpClient$_init_$lambda_36nm6w($engine) {
    return function (cause) {
      var tmp;
      if (!($engine instanceof HttpClientEngineBase)) {
        tmp = true;
      } else {
        tmp = $engine.g3w_1.atomicfu$decrementAndGet() <= 0;
      }
      var shouldClose = tmp;
      var tmp_0;
      if (shouldClose) {
        var tmp_1;
        if (cause == null) {
          $engine.i4();
          tmp_1 = Unit_instance;
        } else {
          var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
          cancel($engine, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Client scope is canceled', cause) : tmp0_elvis_lhs);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }
      return Unit_instance;
    };
  }
  function HttpClient$slambda(this$0, resultContinuation) {
    this.r3w_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda).u3w = function ($this$intercept, call, $completion) {
    var tmp = this.v3w($this$intercept, call, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpClient$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.u3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            var tmp_0 = this.t3w_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.t3w_1) + '(' + toString(getKClassFromExpression(this.t3w_1)) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.o8_1 = 1;
            suspendResult = this.r3w_1.z3v_1.n2i(Unit_instance, this.t3w_1.b3x(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            this.t3w_1.c3x(response);
            this.o8_1 = 2;
            suspendResult = this.s3w_1.s2h(this.t3w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 3) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpClient$slambda).v3w = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.r3w_1, completion);
    i.s3w_1 = $this$intercept;
    i.t3w_1 = call;
    return i;
  };
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, call, $completion) {
      return i.u3w($this$intercept, call, $completion);
    }, 2);
  }
  function HttpClient$lambda($this$install) {
    defaultTransformers($this$install);
    return Unit_instance;
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.l3x_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda_1).p3x = function ($this$intercept, it, $completion) {
    var tmp = this.q3x($this$intercept, it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpClient$slambda_1).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.p3x(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda_1).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = this.m3x_1.t2h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o3x_1 = suspendResult;
            this.p8_1 = 3;
            this.o8_1 = 4;
            continue $sm;
          case 2:
            this.p8_1 = 3;
            var tmp_0 = this.r8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.r8_1;
              var tmp_1 = this;
              this.l3x_1.c3w_1.y3g(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.m3x_1.o2i_1.b3x(), cause));
              throw cause;
            } else {
              throw this.r8_1;
            }

          case 3:
            throw this.r8_1;
          case 4:
            this.p8_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 3) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpClient$slambda_1).q3x = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.l3x_1, completion);
    i.m3x_1 = $this$intercept;
    i.n3x_1 = it;
    return i;
  };
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.p3x($this$intercept, it, $completion);
    }, 2);
  }
  function $executeCOROUTINE$(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z3x_1 = _this__u8e3s4;
    this.a3y_1 = builder;
  }
  protoOf($executeCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.z3x_1.c3w_1.y3g(get_HttpRequestCreated(), this.a3y_1);
            this.o8_1 = 1;
            suspendResult = this.z3x_1.w3v_1.n2i(this.a3y_1, this.a3y_1.e3y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult instanceof HttpClientCall ? suspendResult : THROW_CCE();
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
  function HttpClient(engine, userConfig) {
    userConfig = userConfig === VOID ? new HttpClientConfig() : userConfig;
    this.q3v_1 = engine;
    this.r3v_1 = userConfig;
    this.s3v_1 = false;
    this.t3v_1 = atomic$boolean$1(false);
    this.u3v_1 = Job(this.q3v_1.g1e().b9(Key_instance));
    this.v3v_1 = this.q3v_1.g1e().gh(this.u3v_1);
    this.w3v_1 = new HttpRequestPipeline();
    this.x3v_1 = new HttpResponsePipeline();
    this.y3v_1 = new HttpSendPipeline();
    this.z3v_1 = new HttpReceivePipeline();
    this.a3w_1 = AttributesJsFn(true);
    this.b3w_1 = this.q3v_1.h3y();
    this.c3w_1 = new Events();
    this.d3w_1 = new HttpClientConfig();
    this.q3v_1.i3y(this);
    var tmp = Phases_getInstance_0().n3y_1;
    this.y3v_1.s2i(tmp, HttpClient$slambda_0(this, null));
    // Inline function 'kotlin.with' call
    var $this$with = this.r3v_1;
    this.d3w_1.w3y(get_HttpRequestLifecycle());
    this.d3w_1.w3y(get_BodyProgress());
    this.d3w_1.w3y(get_SaveBody());
    if ($this$with.t3y_1) {
      this.d3w_1.x3y('DefaultTransformers', HttpClient$lambda);
    }
    this.d3w_1.w3y(Plugin_getInstance());
    this.d3w_1.w3y(get_HttpCallValidator());
    if ($this$with.s3y_1) {
      this.d3w_1.w3y(get_HttpRedirect());
    }
    this.d3w_1.y3y($this$with);
    if ($this$with.t3y_1) {
      this.d3w_1.w3y(get_HttpPlainText());
    }
    addDefaultResponseValidation(this.d3w_1);
    this.d3w_1.i3y(this);
    var tmp_0 = Phases_getInstance_2().z3y_1;
    this.x3v_1.s2i(tmp_0, HttpClient$slambda_2(this, null));
  }
  protoOf(HttpClient).g1e = function () {
    return this.v3v_1;
  };
  protoOf(HttpClient).e3z = function (builder, $completion) {
    var tmp = new $executeCOROUTINE$(this, builder, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpClient).i4 = function () {
    var success = this.t3v_1.atomicfu$compareAndSet(false, true);
    if (!success)
      return Unit_instance;
    var installedFeatures = this.a3w_1.t2c(get_PLUGIN_INSTALLED_LIST());
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = installedFeatures.a2d().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var plugin = installedFeatures.t2c(element instanceof AttributeKey ? element : THROW_CCE());
      if (isInterface(plugin, AutoCloseable)) {
        plugin.i4();
      }
    }
    this.u3v_1.i1l();
  };
  protoOf(HttpClient).toString = function () {
    return 'HttpClient[' + toString(this.q3v_1) + ']';
  };
  function HttpClient_0(engineFactory, block) {
    var tmp;
    if (block === VOID) {
      tmp = HttpClient$lambda_0;
    } else {
      tmp = block;
    }
    block = tmp;
    // Inline function 'kotlin.apply' call
    var this_0 = new HttpClientConfig();
    block(this_0);
    var config = this_0;
    var engine = engineFactory.f3z(config.r3y_1);
    return HttpClient_init_$Create$(engine, config, true);
  }
  function HttpClient$lambda_0(_this__u8e3s4) {
    return Unit_instance;
  }
  function installPlugin($this, plugin) {
    if ($this.o3y_1.r2(plugin.m1()))
      return Unit_instance;
    var tmp0 = $this.o3y_1;
    var tmp2 = plugin.m1();
    // Inline function 'kotlin.collections.set' call
    var value = HttpClientConfig$installPlugin$lambda(plugin);
    tmp0.a3(tmp2, value);
  }
  function HttpClientConfig$engineConfig$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function HttpClientConfig$engine$lambda($oldConfig, $block) {
    return function (_this__u8e3s4) {
      $oldConfig(_this__u8e3s4);
      $block(_this__u8e3s4);
      return Unit_instance;
    };
  }
  function HttpClientConfig$install$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function HttpClientConfig$install$lambda_0($previousConfigBlock, $configure) {
    return function (_this__u8e3s4) {
      var tmp0_safe_receiver = $previousConfigBlock;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(_this__u8e3s4);
      $configure(!(_this__u8e3s4 == null) ? _this__u8e3s4 : THROW_CCE());
      return Unit_instance;
    };
  }
  function HttpClientConfig$installPlugin$lambda$lambda() {
    return AttributesJsFn(true);
  }
  function HttpClientConfig$installPlugin$lambda($plugin) {
    return function (scope) {
      var tmp = get_PLUGIN_INSTALLED_LIST();
      var attributes = scope.a3w_1.z2c(tmp, HttpClientConfig$installPlugin$lambda$lambda);
      var config = ensureNotNull(scope.d3w_1.p3y_1.t2($plugin.m1()));
      var pluginData = $plugin.g3z(config);
      $plugin.h3z(pluginData, scope);
      attributes.w2c($plugin.m1(), pluginData);
      return Unit_instance;
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.o3y_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.p3y_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.q3y_1 = LinkedHashMap_init_$Create$();
    var tmp_2 = this;
    tmp_2.r3y_1 = HttpClientConfig$engineConfig$lambda;
    this.s3y_1 = true;
    this.t3y_1 = true;
    this.u3y_1 = false;
    this.v3y_1 = PlatformUtils_getInstance().v2e_1;
  }
  protoOf(HttpClientConfig).i3z = function (block) {
    var oldConfig = this.r3y_1;
    var tmp = this;
    tmp.r3y_1 = HttpClientConfig$engine$lambda(oldConfig, block);
  };
  protoOf(HttpClientConfig).j3z = function (plugin, configure) {
    var previousConfigBlock = this.p3y_1.t2(plugin.m1());
    var tmp0 = this.p3y_1;
    var tmp2 = plugin.m1();
    // Inline function 'kotlin.collections.set' call
    var value = HttpClientConfig$install$lambda_0(previousConfigBlock, configure);
    tmp0.a3(tmp2, value);
    installPlugin(this, plugin);
  };
  protoOf(HttpClientConfig).w3y = function (plugin, configure, $super) {
    var tmp;
    if (configure === VOID) {
      tmp = HttpClientConfig$install$lambda;
    } else {
      tmp = configure;
    }
    configure = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.j3z(plugin, configure);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.j3z.call(this, plugin, configure);
    }
    return tmp_0;
  };
  protoOf(HttpClientConfig).x3y = function (key, block) {
    // Inline function 'kotlin.collections.set' call
    this.q3y_1.a3(key, block);
  };
  protoOf(HttpClientConfig).i3y = function (client) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.o3y_1.v2().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.apply' call
      element(client);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.q3y_1.v2().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.apply' call
      element_0(client);
    }
  };
  protoOf(HttpClientConfig).y3y = function (other) {
    this.s3y_1 = other.s3y_1;
    this.t3y_1 = other.t3y_1;
    this.u3y_1 = other.u3y_1;
    var tmp0 = this.o3y_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map = other.o3y_1;
    tmp0.c3(map);
    var tmp0_0 = this.p3y_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map_0 = other.p3y_1;
    tmp0_0.c3(map_0);
    var tmp0_1 = this.q3y_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map_1 = other.q3y_1;
    tmp0_1.c3(map_1);
  };
  function replaceResponse(_this__u8e3s4, headers, content) {
    headers = headers === VOID ? _this__u8e3s4.b3x().b2s() : headers;
    return new DelegatedCall(_this__u8e3s4.w3w_1, _this__u8e3s4, content, headers);
  }
  function DelegatedCall(client, originCall, responseContent, responseHeaders) {
    responseHeaders = responseHeaders === VOID ? originCall.b3x().b2s() : responseHeaders;
    HttpClientCall.call(this, client);
    this.y3w_1 = new DelegatedRequest(this, originCall.k3z());
    this.z3w_1 = new DelegatedResponse(this, originCall.b3x(), responseContent, responseHeaders);
  }
  function DelegatedRequest(call, origin) {
    this.p3z_1 = origin;
    this.q3z_1 = call;
  }
  protoOf(DelegatedRequest).r3z = function () {
    return this.q3z_1;
  };
  protoOf(DelegatedRequest).g1e = function () {
    return this.p3z_1.g1e();
  };
  protoOf(DelegatedRequest).s3z = function () {
    return this.p3z_1.s3z();
  };
  protoOf(DelegatedRequest).t3z = function () {
    return this.p3z_1.t3z();
  };
  protoOf(DelegatedRequest).l3z = function () {
    return this.p3z_1.l3z();
  };
  protoOf(DelegatedRequest).c33 = function () {
    return this.p3z_1.c33();
  };
  protoOf(DelegatedRequest).b2s = function () {
    return this.p3z_1.b2s();
  };
  function DelegatedResponse(call, origin, content, headers) {
    headers = headers === VOID ? origin.b2s() : headers;
    HttpResponse.call(this);
    this.u3z_1 = call;
    this.v3z_1 = origin;
    this.w3z_1 = content;
    this.x3z_1 = headers;
    this.y3z_1 = this.v3z_1.g1e();
  }
  protoOf(DelegatedResponse).r3z = function () {
    return this.u3z_1;
  };
  protoOf(DelegatedResponse).b2s = function () {
    return this.x3z_1;
  };
  protoOf(DelegatedResponse).z3z = function () {
    return this.w3z_1(this.v3z_1);
  };
  protoOf(DelegatedResponse).g1e = function () {
    return this.y3z_1;
  };
  protoOf(DelegatedResponse).a40 = function () {
    return this.v3z_1.a40();
  };
  protoOf(DelegatedResponse).b40 = function () {
    return this.v3z_1.b40();
  };
  protoOf(DelegatedResponse).c40 = function () {
    return this.v3z_1.c40();
  };
  protoOf(DelegatedResponse).d40 = function () {
    return this.v3z_1.d40();
  };
  function resolveOrigin(_this__u8e3s4) {
    var $this = _this__u8e3s4;
    $l$1: do {
      $l$0: do {
        var tmp;
        if ($this instanceof DelegatedResponse) {
          $this = $this.v3z_1;
          continue $l$0;
        } else {
          tmp = $this;
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.y3w_1 = new DefaultHttpRequest($this, requestData);
    $this.z3w_1 = new DefaultHttpResponse($this, responseData);
    $this.l3z().y2c(Companion_getInstance_9().e40_1);
    var tmp = responseData.j40_1;
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.l3z().w2c(Companion_getInstance_9().e40_1, responseData.j40_1);
    }
    return $this;
  }
  function HttpClientCall_init_$Create$(client, requestData, responseData) {
    return HttpClientCall_init_$Init$(client, requestData, responseData, objectCreate(protoOf(HttpClientCall)));
  }
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'CustomResponse';
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
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.e40_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_0;
  function Companion_getInstance_9() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function $bodyNullableCOROUTINE$(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u40_1 = _this__u8e3s4;
    this.v40_1 = info;
  }
  protoOf($bodyNullableCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 5;
            this.p8_1 = 4;
            if (instanceOf(this.u40_1.b3x(), this.v40_1.f2j_1))
              return this.u40_1.b3x();
            if (!this.u40_1.m3z() && !get_isSaved(this.u40_1.b3x()) && !this.u40_1.x3w_1.atomicfu$compareAndSet(false, true)) {
              throw new DoubleReceiveException(this.u40_1);
            }

            var tmp0_elvis_lhs = this.u40_1.l3z().u2c(Companion_getInstance_9().e40_1);
            if (tmp0_elvis_lhs == null) {
              this.o8_1 = 1;
              suspendResult = this.u40_1.n3z(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.w40_1 = tmp0_elvis_lhs;
              this.o8_1 = 2;
              continue $sm;
            }

          case 1:
            this.w40_1 = suspendResult;
            this.o8_1 = 2;
            continue $sm;
          case 2:
            var responseData = this.w40_1;
            var subject = new HttpResponseContainer(this.v40_1, responseData);
            this.o8_1 = 3;
            suspendResult = this.u40_1.w3w_1.x3v_1.n2i(this.u40_1, subject, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var this_0 = suspendResult.y40_1;
            var tmp_0;
            if (!equals(this_0, NullBody_instance)) {
              tmp_0 = this_0;
            } else {
              tmp_0 = null;
            }

            var result = tmp_0;
            if (!(result == null) && !instanceOf(result, this.v40_1.f2j_1)) {
              var from = getKClassFromExpression(result);
              var to = this.v40_1.f2j_1;
              throw new NoTransformationFoundException(this.u40_1.b3x(), from, to);
            }

            return result;
          case 4:
            this.p8_1 = 5;
            var tmp_1 = this.r8_1;
            if (tmp_1 instanceof Error) {
              var cause = this.r8_1;
              cancel_0(this.u40_1.b3x(), 'Receive failed', cause);
              throw cause;
            } else {
              throw this.r8_1;
            }

          case 5:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 5) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  function HttpClientCall(client) {
    Companion_getInstance_9();
    this.w3w_1 = client;
    this.x3w_1 = atomic$boolean$1(false);
    this.a3x_1 = false;
  }
  protoOf(HttpClientCall).g1e = function () {
    return this.b3x().g1e();
  };
  protoOf(HttpClientCall).l3z = function () {
    return this.k3z().l3z();
  };
  protoOf(HttpClientCall).k3z = function () {
    var tmp = this.y3w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  protoOf(HttpClientCall).b3x = function () {
    var tmp = this.z3w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  protoOf(HttpClientCall).m3z = function () {
    return this.a3x_1;
  };
  protoOf(HttpClientCall).n3z = function ($completion) {
    return this.b3x().z3z();
  };
  protoOf(HttpClientCall).o3z = function (info, $completion) {
    var tmp = new $bodyNullableCOROUTINE$(this, info, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpClientCall).toString = function () {
    return 'HttpClientCall[' + this.k3z().t3z().toString() + ', ' + this.b3x().a40().toString() + ']';
  };
  protoOf(HttpClientCall).c3x = function (response) {
    this.z3w_1 = response;
  };
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, DoubleReceiveException);
    this.z40_1 = 'Response already received: ' + call.toString();
    delete this.message;
  }
  protoOf(DoubleReceiveException).e = function () {
    return this.z40_1;
  };
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    captureStack(this, NoTransformationFoundException);
    this.a41_1 = trimIndent("\n        Expected response body of the type '" + toString(to) + "' but was '" + toString(from) + "'\n        In response from `" + get_request(response).t3z().toString() + '`\n        Response status `' + response.a40().toString() + '`\n        Response header `ContentType: ' + response.b2s().k2e('Content-Type') + '` \n        Request header `Accept: ' + get_request(response).b2s().k2e('Accept') + '`\n        \n        You can read how to resolve NoTransformationFoundException at FAQ: \n        https://ktor.io/docs/faq.html#no-transformation-found-exception\n    ');
    delete this.message;
  }
  protoOf(NoTransformationFoundException).e = function () {
    return this.a41_1;
  };
  function save(_this__u8e3s4, $completion) {
    var tmp = new $saveCOROUTINE$(_this__u8e3s4, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.p41_1 = responseBody;
    this.y3w_1 = new SavedHttpRequest(this, request);
    this.z3w_1 = new SavedHttpResponse(this, this.p41_1, response);
    checkContentLength(contentLength(response), fromInt(this.p41_1.length), request.s3z());
    this.q41_1 = true;
  }
  protoOf(SavedHttpCall).m3z = function () {
    return this.q41_1;
  };
  function SavedHttpRequest(call, origin) {
    this.r41_1 = origin;
    this.s41_1 = call;
  }
  protoOf(SavedHttpRequest).r3z = function () {
    return this.s41_1;
  };
  protoOf(SavedHttpRequest).g1e = function () {
    return this.r41_1.g1e();
  };
  protoOf(SavedHttpRequest).s3z = function () {
    return this.r41_1.s3z();
  };
  protoOf(SavedHttpRequest).t3z = function () {
    return this.r41_1.t3z();
  };
  protoOf(SavedHttpRequest).l3z = function () {
    return this.r41_1.l3z();
  };
  protoOf(SavedHttpRequest).c33 = function () {
    return this.r41_1.c33();
  };
  protoOf(SavedHttpRequest).b2s = function () {
    return this.r41_1.b2s();
  };
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.t41_1 = call;
    this.u41_1 = body;
    this.v41_1 = origin.a40();
    this.w41_1 = origin.b40();
    this.x41_1 = origin.c40();
    this.y41_1 = origin.d40();
    this.z41_1 = origin.b2s();
    this.a42_1 = origin.g1e();
  }
  protoOf(SavedHttpResponse).r3z = function () {
    return this.t41_1;
  };
  protoOf(SavedHttpResponse).a40 = function () {
    return this.v41_1;
  };
  protoOf(SavedHttpResponse).b40 = function () {
    return this.w41_1;
  };
  protoOf(SavedHttpResponse).c40 = function () {
    return this.x41_1;
  };
  protoOf(SavedHttpResponse).d40 = function () {
    return this.y41_1;
  };
  protoOf(SavedHttpResponse).b2s = function () {
    return this.z41_1;
  };
  protoOf(SavedHttpResponse).g1e = function () {
    return this.a42_1;
  };
  protoOf(SavedHttpResponse).z3z = function () {
    return ByteReadChannel_0(this.u41_1);
  };
  function $saveCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j41_1 = _this__u8e3s4;
  }
  protoOf($saveCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            var tmp_0 = this.j41_1;
            if (tmp_0 instanceof SavedHttpCall)
              return this.j41_1;
            this.o8_1 = 1;
            suspendResult = readBuffer(this.j41_1.b3x().z3z(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readByteArray(ARGUMENT);
            return new SavedHttpCall(this.j41_1.w3w_1, this.j41_1.k3z(), this.j41_1.b3x(), responseBody);
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
  function UnsupportedContentTypeException(content) {
    IllegalStateException_init_$Init$_0('Failed to write body: ' + toString(getKClassFromExpression(content)), this);
    captureStack(this, UnsupportedContentTypeException);
  }
  function ProgressListener() {
  }
  function getContent($this, delegate) {
    var tmp;
    if (delegate instanceof ContentWrapper) {
      tmp = getContent($this, delegate.x2z());
    } else {
      if (delegate instanceof ByteArrayContent) {
        tmp = ByteReadChannel_0(delegate.t2x());
      } else {
        if (delegate instanceof ProtocolUpgrade) {
          throw new UnsupportedContentTypeException(delegate);
        } else {
          if (delegate instanceof NoContent) {
            tmp = Companion_getInstance().v23_1;
          } else {
            if (delegate instanceof ReadChannelContent) {
              tmp = delegate.r2z();
            } else {
              if (delegate instanceof WriteChannelContent) {
                var tmp_0 = GlobalScope_instance;
                tmp = writer(tmp_0, $this.e42_1, true, ObservableContent$getContent$slambda_0(delegate, null)).r23_1;
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function ObservableContent$getContent$slambda($delegate, resultContinuation) {
    this.o42_1 = $delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ObservableContent$getContent$slambda).f3u = function ($this$writer, $completion) {
    var tmp = this.g3u($this$writer, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(ObservableContent$getContent$slambda).k9 = function (p1, $completion) {
    return this.f3u(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ObservableContent$getContent$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = this.o42_1.t2z(this.p42_1.m29_1, this);
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
  protoOf(ObservableContent$getContent$slambda).g3u = function ($this$writer, completion) {
    var i = new ObservableContent$getContent$slambda(this.o42_1, completion);
    i.p42_1 = $this$writer;
    return i;
  };
  function ObservableContent$getContent$slambda_0($delegate, resultContinuation) {
    var i = new ObservableContent$getContent$slambda($delegate, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.f3u($this$writer, $completion);
    }, 1);
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.d42_1 = delegate;
    this.e42_1 = callContext;
    this.f42_1 = listener;
  }
  protoOf(ObservableContent).r2x = function () {
    return this.d42_1.r2x();
  };
  protoOf(ObservableContent).s2x = function () {
    return this.d42_1.s2x();
  };
  protoOf(ObservableContent).b2s = function () {
    return this.d42_1.b2s();
  };
  protoOf(ObservableContent).r2z = function () {
    return observable(getContent(this, this.d42_1), this.e42_1, this.s2x(), this.f42_1);
  };
  function get_CALL_COROUTINE() {
    _init_properties_HttpClientEngine_kt__h91z5h();
    return CALL_COROUTINE;
  }
  var CALL_COROUTINE;
  function get_CLIENT_CONFIG() {
    _init_properties_HttpClientEngine_kt__h91z5h();
    return CLIENT_CONFIG;
  }
  var CLIENT_CONFIG;
  function HttpClientEngine$install$slambda$lambda($client, $response) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        $client.c3w_1.y3g(get_HttpResponseCancelled(), $response);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _get_closed__iwkfs1($this) {
    var tmp0_safe_receiver = $this.g1e().b9(Key_instance);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h1e();
    return !(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
  }
  function executeWithinCallContext($this, requestData, $completion) {
    var tmp = new $executeWithinCallContextCOROUTINE$($this, requestData, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function checkExtensions($this, requestData) {
    var _iterator__ex2g4s = requestData.g43_1.t();
    while (_iterator__ex2g4s.u()) {
      var requestedExtension = _iterator__ex2g4s.v();
      // Inline function 'kotlin.require' call
      if (!$this.h43().j2(requestedExtension)) {
        var message = "Engine doesn't support " + toString(requestedExtension);
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  function HttpClientEngine$install$slambda($client, this$0, resultContinuation) {
    this.q43_1 = $client;
    this.r43_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$install$slambda).u3w = function ($this$intercept, content, $completion) {
    var tmp = this.v3w($this$intercept, content, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpClientEngine$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.u3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            var this_0 = new HttpRequestBuilder();
            this_0.v43(this.s43_1.o2i_1);
            var body = this.t43_1;
            if (body == null) {
              this_0.e3y_1 = NullBody_instance;
              var tmp_0 = PrimitiveClasses_getInstance().kb();
              var tmp_1 = !(null == null);
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
              this_0.w43(new TypeInfo(tmp_0, tmp_1, tmp_2));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.e3y_1 = body;
                this_0.w43(null);
              } else {
                this_0.e3y_1 = body;
                var tmp_4 = PrimitiveClasses_getInstance().kb();
                var tmp_5 = !(null == null);
                var tmp_6;
                try {
                  tmp_6 = createKType(PrimitiveClasses_getInstance().kb(), arrayOf([]), false);
                } catch ($p_0) {
                  var tmp_7;
                  if ($p_0 instanceof Error) {
                    var _unused_var__etf5q3_0 = $p_0;
                    tmp_7 = null;
                  } else {
                    throw $p_0;
                  }
                  tmp_6 = tmp_7;
                }
                this_0.w43(new TypeInfo(tmp_4, tmp_5, tmp_6));
              }
            }

            var builder = this_0;
            this.q43_1.c3w_1.y3g(get_HttpRequestIsReadyForSending(), builder);
            var tmp_8 = this;
            var this_1 = builder.v2n();
            this_1.f43_1.w2c(get_CLIENT_CONFIG(), this.q43_1.d3w_1);
            tmp_8.u43_1 = this_1;
            validateHeaders(this.u43_1);
            checkExtensions(this.r43_1, this.u43_1);
            this.o8_1 = 1;
            suspendResult = executeWithinCallContext(this.r43_1, this.u43_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var responseData = suspendResult;
            var call = HttpClientCall_init_$Create$(this.q43_1, this.u43_1, responseData);
            var response = call.b3x();
            this.q43_1.c3w_1.y3g(get_HttpResponseReceived(), response);
            var tmp_9 = get_job(response.g1e());
            tmp_9.i1f(HttpClientEngine$install$slambda$lambda(this.q43_1, response));
            this.o8_1 = 2;
            suspendResult = this.s43_1.s2h(call, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.r8_1;
        }
      } catch ($p_1) {
        var e = $p_1;
        if (this.p8_1 === 3) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpClientEngine$install$slambda).v3w = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.q43_1, this.r43_1, completion);
    i.s43_1 = $this$intercept;
    i.t43_1 = content;
    return i;
  };
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.u3w($this$intercept, content, $completion);
    }, 2);
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.f44_1 = this$0;
    this.g44_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).i44 = function ($this$async, $completion) {
    var tmp = this.r2a($this$async, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).k9 = function (p1, $completion) {
    return this.i44((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            if (_get_closed__iwkfs1(this.f44_1)) {
              throw new ClientEngineClosedException();
            }

            this.o8_1 = 1;
            suspendResult = this.f44_1.j44(this.g44_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).r2a = function ($this$async, completion) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.f44_1, this.g44_1, completion);
    i.h44_1 = $this$async;
    return i;
  };
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    return constructCallableReference(function ($this$async, $completion) {
      return i.i44($this$async, $completion);
    }, 1);
  }
  function $executeWithinCallContextCOROUTINE$(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y42_1 = _this__u8e3s4;
    this.z42_1 = requestData;
  }
  protoOf($executeWithinCallContextCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            this.o8_1 = 1;
            suspendResult = createCallContext(this.y42_1, this.z42_1.e43_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var callContext = suspendResult;
            var context = callContext.gh(new KtorCallContextElement(callContext));
            this.o8_1 = 2;
            suspendResult = async(this.y42_1, context, VOID, HttpClientEngine$executeWithinCallContext$slambda_0(this.y42_1, this.z42_1, null)).k1h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 3) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  function HttpClientEngine() {
  }
  function validateHeaders(request) {
    _init_properties_HttpClientEngine_kt__h91z5h();
    var requestHeaders = request.c43_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = requestHeaders.b2f();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (HttpHeaders_getInstance().u2r_1.j2(element)) {
        destination.c1(element);
      }
    }
    var unsafeRequestHeaders = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!unsafeRequestHeaders.r()) {
      throw new UnsafeHeaderException(toString(unsafeRequestHeaders));
    }
  }
  function createCallContext(_this__u8e3s4, parentJob, $completion) {
    var callJob = Job(parentJob);
    var callContext = _this__u8e3s4.g1e().gh(callJob).gh(get_CALL_COROUTINE());
    $l$block: {
      // Inline function 'io.ktor.client.engine.attachToUserJob' call
      // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp0_elvis_lhs = $completion.u8().b9(Key_instance);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var userJob = tmp;
      var cleanupHandler = userJob.k1f(true, VOID, createCallContext$lambda(callJob));
      callJob.i1f(createCallContext$lambda_0(cleanupHandler));
    }
    return callContext;
  }
  function createCallContext$lambda($callJob) {
    return function (cause) {
      if (cause == null)
        return Unit_instance;
      var tmp1_elvis_lhs = cause instanceof CancellationException ? cause : null;
      var cancellation = tmp1_elvis_lhs == null ? CancellationException_init_$Create$_0(cause.message) : tmp1_elvis_lhs;
      $callJob.p1f(cancellation);
      return Unit_instance;
    };
  }
  function createCallContext$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.c1i();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpClientEngine_kt_5uiebb;
  function _init_properties_HttpClientEngine_kt__h91z5h() {
    if (!properties_initialized_HttpClientEngine_kt_5uiebb) {
      properties_initialized_HttpClientEngine_kt_5uiebb = true;
      CALL_COROUTINE = new CoroutineName('call-context');
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'client-config';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(HttpClientConfig);
      var tmp_0 = null instanceof HttpClientConfig;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(HttpClientConfig), arrayOf([getStarKTypeProjection()]), false);
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
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      CLIENT_CONFIG = new AttributeKey(name, tmp$ret$1);
    }
  }
  function HttpClientEngineBase$dispatcher$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.h3y().l44_1;
      return tmp0_elvis_lhs == null ? ioDispatcher() : tmp0_elvis_lhs;
    };
  }
  function HttpClientEngineBase$_get_dispatcher_$ref_kz5x8v() {
    return constructCallableReference(function (p0) {
      return p0.o44();
    }, 1, 0, 24);
  }
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor().gh(this$0.o44()).gh(new CoroutineName(this$0.e3w_1 + '-context'));
    };
  }
  function HttpClientEngineBase$_get_coroutineContext_$ref_p82ehr() {
    return constructCallableReference(function (p0) {
      return p0.g1e();
    }, 1, 0, 25);
  }
  function HttpClientEngineBase(engineName) {
    this.e3w_1 = engineName;
    this.f3w_1 = atomic$boolean$1(false);
    this.g3w_1 = atomic$int$1(0);
    var tmp = this;
    tmp.h3w_1 = lazy(HttpClientEngineBase$dispatcher$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.i3w_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  protoOf(HttpClientEngineBase).o44 = function () {
    var tmp0 = this.h3w_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('dispatcher', 1, tmp, HttpClientEngineBase$_get_dispatcher_$ref_kz5x8v(), null);
    return tmp0.n1();
  };
  protoOf(HttpClientEngineBase).g1e = function () {
    var tmp0 = this.i3w_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('coroutineContext', 1, tmp, HttpClientEngineBase$_get_coroutineContext_$ref_p82ehr(), null);
    return tmp0.n1();
  };
  protoOf(HttpClientEngineBase).i4 = function () {
    if (!this.f3w_1.atomicfu$compareAndSet(false, true))
      return Unit_instance;
    var tmp = this.g1e().b9(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, CompletableJob) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var requestJob = tmp_0;
    requestJob.i1l();
  };
  function ClientEngineClosedException(cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$_0('Client already closed', this);
    captureStack(this, ClientEngineClosedException);
    this.p44_1 = cause;
    delete this.cause;
  }
  protoOf(ClientEngineClosedException).f = function () {
    return this.p44_1;
  };
  function get_ENGINE_CAPABILITIES_KEY() {
    _init_properties_HttpClientEngineCapability_kt__ifvyst();
    return ENGINE_CAPABILITIES_KEY;
  }
  var ENGINE_CAPABILITIES_KEY;
  var DEFAULT_CAPABILITIES;
  function HttpClientEngineCapability() {
  }
  var properties_initialized_HttpClientEngineCapability_kt_qarzcf;
  function _init_properties_HttpClientEngineCapability_kt__ifvyst() {
    if (!properties_initialized_HttpClientEngineCapability_kt_qarzcf) {
      properties_initialized_HttpClientEngineCapability_kt_qarzcf = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'EngineCapabilities';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtMutableMap);
      var tmp_0 = !(null == null) ? isInterface(null, KtMutableMap) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(KtMutableMap), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpClientEngineCapability), arrayOf([getStarKTypeProjection()]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().kb(), arrayOf([]), false))]), false);
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
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      ENGINE_CAPABILITIES_KEY = new AttributeKey(name, tmp$ret$1);
      DEFAULT_CAPABILITIES = setOf(HttpTimeoutCapability_instance);
    }
  }
  function HttpClientEngineConfig() {
    this.k44_1 = 4;
    this.l44_1 = null;
    this.m44_1 = false;
    this.n44_1 = null;
  }
  function get_KTOR_DEFAULT_USER_AGENT() {
    _init_properties_Utils_kt__jo07cx();
    return KTOR_DEFAULT_USER_AGENT;
  }
  var KTOR_DEFAULT_USER_AGENT;
  function get_DATE_HEADERS() {
    _init_properties_Utils_kt__jo07cx();
    return DATE_HEADERS;
  }
  var DATE_HEADERS;
  function callContext($completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.u8();
    return ensureNotNull(tmp$ret$0.b9(Companion_instance_1)).q44_1;
  }
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_10() {
    return Companion_instance_1;
  }
  function KtorCallContextElement(callContext) {
    this.q44_1 = callContext;
  }
  protoOf(KtorCallContextElement).m1 = function () {
    return Companion_instance_1;
  };
  function mergeHeaders(requestHeaders, content, block) {
    _init_properties_Utils_kt__jo07cx();
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.c2f(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.k2e('User-Agent') == null && content.b2s().k2e('User-Agent') == null;
    if (missingAgent && needUserAgent()) {
      block('User-Agent', get_KTOR_DEFAULT_USER_AGENT());
    }
    var tmp0_safe_receiver = content.r2x();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? content.b2s().k2e('Content-Type') : tmp1_elvis_lhs;
    var type = tmp2_elvis_lhs == null ? requestHeaders.k2e('Content-Type') : tmp2_elvis_lhs;
    var tmp3_safe_receiver = content.s2x();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? content.b2s().k2e('Content-Length') : tmp4_elvis_lhs;
    var length = tmp5_elvis_lhs == null ? requestHeaders.k2e('Content-Length') : tmp5_elvis_lhs;
    if (type == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      block('Content-Type', type);
    }
    if (length == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      block('Content-Length', length);
    }
  }
  function needUserAgent() {
    _init_properties_Utils_kt__jo07cx();
    return !PlatformUtils_getInstance().p2e_1;
  }
  function mergeHeaders$lambda($requestHeaders, $content) {
    return function ($this$buildHeaders) {
      $this$buildHeaders.j2f($requestHeaders);
      $this$buildHeaders.j2f($content.b2s());
      return Unit_instance;
    };
  }
  function mergeHeaders$lambda_0($block) {
    return function (key, values) {
      var tmp;
      if ('Content-Length' === key) {
        return Unit_instance;
      }
      var tmp_0;
      if ('Content-Type' === key) {
        return Unit_instance;
      }
      var tmp_1;
      if (get_DATE_HEADERS().j2(key)) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = values.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          $block(key, element);
        }
        tmp_1 = Unit_instance;
      } else {
        var separator = 'Cookie' === key ? '; ' : ',';
        tmp_1 = $block(key, joinToString(values, separator));
      }
      return Unit_instance;
    };
  }
  var properties_initialized_Utils_kt_xvi83j;
  function _init_properties_Utils_kt__jo07cx() {
    if (!properties_initialized_Utils_kt_xvi83j) {
      properties_initialized_Utils_kt_xvi83j = true;
      KTOR_DEFAULT_USER_AGENT = 'ktor-client';
      DATE_HEADERS = setOf_0(['Date', 'Expires', 'Last-Modified', 'If-Modified-Since', 'If-Unmodified-Since']);
    }
  }
  function get_UploadProgressListenerAttributeKey() {
    _init_properties_BodyProgress_kt__s0v569();
    return UploadProgressListenerAttributeKey;
  }
  var UploadProgressListenerAttributeKey;
  function get_DownloadProgressListenerAttributeKey() {
    _init_properties_BodyProgress_kt__s0v569();
    return DownloadProgressListenerAttributeKey;
  }
  var DownloadProgressListenerAttributeKey;
  function get_BodyProgress() {
    _init_properties_BodyProgress_kt__s0v569();
    return BodyProgress;
  }
  var BodyProgress;
  function AfterRenderHook$install$slambda($handler, resultContinuation) {
    this.z44_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterRenderHook$install$slambda).u3w = function ($this$intercept, content, $completion) {
    var tmp = this.v3w($this$intercept, content, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(AfterRenderHook$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.u3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterRenderHook$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            var tmp_0 = this.b45_1;
            if (!(tmp_0 instanceof OutgoingContent))
              return Unit_instance;
            this.o8_1 = 1;
            suspendResult = this.z44_1(this.a45_1.o2i_1, this.b45_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            var newContent = tmp_1;
            this.o8_1 = 2;
            suspendResult = this.a45_1.s2h(newContent, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 3) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(AfterRenderHook$install$slambda).v3w = function ($this$intercept, content, completion) {
    var i = new AfterRenderHook$install$slambda(this.z44_1, completion);
    i.a45_1 = $this$intercept;
    i.b45_1 = content;
    return i;
  };
  function AfterRenderHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterRenderHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.u3w($this$intercept, content, $completion);
    }, 2);
  }
  function AfterRenderHook() {
  }
  protoOf(AfterRenderHook).c45 = function (client, handler) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    client.w3v_1.p2i(Phases_getInstance().g45_1, observableContentPhase);
    client.w3v_1.s2i(observableContentPhase, AfterRenderHook$install$slambda_0(handler, null));
  };
  protoOf(AfterRenderHook).i45 = function (client, handler) {
    return this.c45(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var AfterRenderHook_instance;
  function AfterRenderHook_getInstance() {
    return AfterRenderHook_instance;
  }
  function AfterReceiveHook$install$slambda($handler, resultContinuation) {
    this.r45_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterReceiveHook$install$slambda).u45 = function ($this$intercept, response, $completion) {
    var tmp = this.v45($this$intercept, response, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(AfterReceiveHook$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.u45(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterReceiveHook$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 4;
            this.o8_1 = 1;
            suspendResult = this.r45_1(this.t45_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var newResponse = suspendResult;
            if (!(newResponse == null)) {
              this.o8_1 = 2;
              suspendResult = this.s45_1.s2h(newResponse, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o8_1 = 3;
              continue $sm;
            }

          case 2:
            this.o8_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 4) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(AfterReceiveHook$install$slambda).v45 = function ($this$intercept, response, completion) {
    var i = new AfterReceiveHook$install$slambda(this.r45_1, completion);
    i.s45_1 = $this$intercept;
    i.t45_1 = response;
    return i;
  };
  function AfterReceiveHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterReceiveHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, response, $completion) {
      return i.u45($this$intercept, response, $completion);
    }, 2);
  }
  function AfterReceiveHook() {
  }
  protoOf(AfterReceiveHook).w45 = function (client, handler) {
    var tmp = Phases_getInstance_1().z45_1;
    client.z3v_1.s2i(tmp, AfterReceiveHook$install$slambda_0(handler, null));
  };
  protoOf(AfterReceiveHook).i45 = function (client, handler) {
    return this.w45(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var AfterReceiveHook_instance;
  function AfterReceiveHook_getInstance() {
    return AfterReceiveHook_instance;
  }
  function withObservableDownload(_this__u8e3s4, listener) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = _this__u8e3s4.r3z();
    return replaceResponse(tmp, VOID, withObservableDownload$lambda(listener)).b3x();
  }
  function BodyProgress$lambda($this$createClientPlugin) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = AfterRenderHook_instance;
    $this$createClientPlugin.f46(tmp, BodyProgress$lambda$slambda_0(null));
    var tmp_0 = AfterReceiveHook_instance;
    $this$createClientPlugin.f46(tmp_0, BodyProgress$lambda$slambda_2(null));
    return Unit_instance;
  }
  function BodyProgress$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda).q46 = function (request, content, $completion) {
    var tmp = this.r46(request, content, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(BodyProgress$lambda$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.q46(tmp, p2 instanceof OutgoingContent ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        if (tmp === 0) {
          this.p8_1 = 1;
          var tmp0_elvis_lhs = this.o46_1.g3y_1.u2c(get_UploadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return new ObservableContent(this.p46_1, this.o46_1.f3y_1, listener);
        } else if (tmp === 1) {
          throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda).r46 = function (request, content, completion) {
    var i = new BodyProgress$lambda$slambda(completion);
    i.o46_1 = request;
    i.p46_1 = content;
    return i;
  };
  function BodyProgress$lambda$slambda_0(resultContinuation) {
    var i = new BodyProgress$lambda$slambda(resultContinuation);
    return constructCallableReference(function (request, content, $completion) {
      return i.q46(request, content, $completion);
    }, 2);
  }
  function BodyProgress$lambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda_1).b47 = function (response, $completion) {
    var tmp = this.c47(response, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(BodyProgress$lambda$slambda_1).k9 = function (p1, $completion) {
    return this.b47(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda_1).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        if (tmp === 0) {
          this.p8_1 = 1;
          var tmp0_elvis_lhs = this.a47_1.r3z().k3z().l3z().u2c(get_DownloadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return withObservableDownload(this.a47_1, listener);
        } else if (tmp === 1) {
          throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda_1).c47 = function (response, completion) {
    var i = new BodyProgress$lambda$slambda_1(completion);
    i.a47_1 = response;
    return i;
  };
  function BodyProgress$lambda$slambda_2(resultContinuation) {
    var i = new BodyProgress$lambda$slambda_1(resultContinuation);
    return constructCallableReference(function (response, $completion) {
      return i.b47(response, $completion);
    }, 1);
  }
  function withObservableDownload$lambda($listener) {
    return function ($this$replaceResponse) {
      return observable($this$replaceResponse.z3z(), $this$replaceResponse.g1e(), contentLength($this$replaceResponse), $listener);
    };
  }
  var properties_initialized_BodyProgress_kt_pmfrhr;
  function _init_properties_BodyProgress_kt__s0v569() {
    if (!properties_initialized_BodyProgress_kt_pmfrhr) {
      properties_initialized_BodyProgress_kt_pmfrhr = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'UploadProgressListenerAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(ProgressListener);
      var tmp_0 = !(null == null) ? isInterface(null, ProgressListener) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(ProgressListener), arrayOf([]), false);
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
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      UploadProgressListenerAttributeKey = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'DownloadProgressListenerAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_3 = getKClass(ProgressListener);
      var tmp_4 = !(null == null) ? isInterface(null, ProgressListener) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_5;
      try {
        tmp_5 = createKType(getKClass(ProgressListener), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_6;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_6 = null;
        } else {
          throw $p_0;
        }
        tmp_5 = tmp_6;
      }
      var tmp$ret$2_0 = tmp_5;
      var tmp$ret$1_0 = new TypeInfo(tmp_3, tmp_4, tmp$ret$2_0);
      DownloadProgressListenerAttributeKey = new AttributeKey(name_0, tmp$ret$1_0);
      BodyProgress = createClientPlugin('BodyProgress', BodyProgress$lambda);
    }
  }
  function get_ValidateMark() {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    return ValidateMark;
  }
  var ValidateMark;
  function get_LOGGER() {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    return LOGGER;
  }
  var LOGGER;
  function addDefaultResponseValidation(_this__u8e3s4) {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    HttpResponseValidator(_this__u8e3s4, addDefaultResponseValidation$lambda(_this__u8e3s4));
  }
  function ResponseException(response, cachedResponseText) {
    IllegalStateException_init_$Init$_0('Bad response: ' + response.toString() + '. Text: "' + cachedResponseText + '"', this);
    captureStack(this, ResponseException);
    this.d47_1 = response;
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, RedirectResponseException);
    this.f47_1 = 'Unhandled redirect: ' + response.r3z().k3z().s3z().m2s_1 + ' ' + response.r3z().k3z().t3z().toString() + '. ' + ('Status: ' + response.a40().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(RedirectResponseException).e = function () {
    return this.f47_1;
  };
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ClientRequestException);
    this.h47_1 = 'Client request(' + response.r3z().k3z().s3z().m2s_1 + ' ' + response.r3z().k3z().t3z().toString() + ') ' + ('invalid: ' + response.a40().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(ClientRequestException).e = function () {
    return this.h47_1;
  };
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ServerResponseException);
    this.j47_1 = 'Server error(' + response.r3z().k3z().s3z().m2s_1 + ' ' + response.r3z().k3z().t3z().toString() + ': ' + (response.a40().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(ServerResponseException).e = function () {
    return this.j47_1;
  };
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(addDefaultResponseValidation$lambda$slambda).w47 = function (response, $completion) {
    var tmp = this.c47(response, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).k9 = function (p1, $completion) {
    return this.w47(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 5;
            var expectSuccess = this.s47_1.r3z().l3z().t2c(get_ExpectSuccessAttributeKey());
            if (!expectSuccess) {
              var this_0 = get_LOGGER();
              if (get_isTraceEnabled(this_0)) {
                this_0.n2j('Skipping default response validation for ' + this.s47_1.r3z().k3z().t3z().toString());
              }
              return Unit_instance;
            }

            this.u47_1 = this.s47_1.a40().a2v_1;
            var originCall = this.s47_1.r3z();
            if (this.u47_1 < 300 || originCall.l3z().v2c(get_ValidateMark())) {
              return Unit_instance;
            }

            this.o8_1 = 1;
            suspendResult = save(originCall, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_1 = suspendResult;
            this_1.l3z().w2c(get_ValidateMark(), Unit_instance);
            var exceptionCall = this_1;
            this.t47_1 = exceptionCall.b3x();
            this.p8_1 = 3;
            this.o8_1 = 2;
            suspendResult = bodyAsText(this.t47_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.v47_1 = suspendResult;
            this.p8_1 = 5;
            this.o8_1 = 4;
            continue $sm;
          case 3:
            this.p8_1 = 5;
            var tmp_0 = this.r8_1;
            if (tmp_0 instanceof MalformedInputException) {
              var _unused_var__etf5q3 = this.r8_1;
              var tmp_1 = this;
              tmp_1.v47_1 = '<body failed decoding>';
              this.o8_1 = 4;
              continue $sm;
            } else {
              throw this.r8_1;
            }

          case 4:
            this.p8_1 = 5;
            var exceptionResponseText = this.v47_1;
            var tmp0_subject = this.u47_1;
            var exception = (300 <= tmp0_subject ? tmp0_subject <= 399 : false) ? new RedirectResponseException(this.t47_1, exceptionResponseText) : (400 <= tmp0_subject ? tmp0_subject <= 499 : false) ? new ClientRequestException(this.t47_1, exceptionResponseText) : (500 <= tmp0_subject ? tmp0_subject <= 599 : false) ? new ServerResponseException(this.t47_1, exceptionResponseText) : new ResponseException(this.t47_1, exceptionResponseText);
            var this_2 = get_LOGGER();
            if (get_isTraceEnabled(this_2)) {
              this_2.o2j('Default response validation for ' + this.s47_1.r3z().k3z().t3z().toString() + ' failed with exception', exception);
            }

            throw exception;
          case 5:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 5) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).c47 = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.s47_1 = response;
    return i;
  };
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    return constructCallableReference(function (response, $completion) {
      return i.w47(response, $completion);
    }, 1);
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.z47_1 = $this_addDefaultResponseValidation.u3y_1;
      $this$HttpResponseValidator.a48(addDefaultResponseValidation$lambda$slambda_0(null));
      return Unit_instance;
    };
  }
  var properties_initialized_DefaultResponseValidation_kt_akvzqt;
  function _init_properties_DefaultResponseValidation_kt__wcn8vr() {
    if (!properties_initialized_DefaultResponseValidation_kt_akvzqt) {
      properties_initialized_DefaultResponseValidation_kt_akvzqt = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ValidateMark';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Unit);
      var tmp_0 = null instanceof Unit;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(Unit), arrayOf([]), false);
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
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      ValidateMark = new AttributeKey(name, tmp$ret$1);
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.DefaultResponseValidation');
    }
  }
  function get_LOGGER_0() {
    _init_properties_DefaultTransform_kt__20knxx();
    return LOGGER_0;
  }
  var LOGGER_0;
  function defaultTransformers(_this__u8e3s4) {
    _init_properties_DefaultTransform_kt__20knxx();
    var tmp = Phases_getInstance().g45_1;
    _this__u8e3s4.w3v_1.s2i(tmp, defaultTransformers$slambda_0(null));
    var clientScope = _this__u8e3s4;
    var tmp_0 = Phases_getInstance_2().a3z_1;
    _this__u8e3s4.x3v_1.s2i(tmp_0, defaultTransformers$slambda_2(clientScope, null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$1$content$1($contentType, $body) {
    this.e48_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    tmp.c48_1 = $contentType == null ? Application_getInstance().f2l_1 : $contentType;
    this.d48_1 = fromInt($body.length);
  }
  protoOf(defaultTransformers$1$content$1).r2x = function () {
    return this.c48_1;
  };
  protoOf(defaultTransformers$1$content$1).s2x = function () {
    return this.d48_1;
  };
  protoOf(defaultTransformers$1$content$1).t2x = function () {
    return this.e48_1;
  };
  function defaultTransformers$1$content$2($this_intercept, $contentType, $body) {
    this.i48_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.o2i_1.d3y_1.k2e('Content-Length');
    tmp.g48_1 = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
    var tmp_0 = this;
    tmp_0.h48_1 = $contentType == null ? Application_getInstance().f2l_1 : $contentType;
  }
  protoOf(defaultTransformers$1$content$2).s2x = function () {
    return this.g48_1;
  };
  protoOf(defaultTransformers$1$content$2).r2x = function () {
    return this.h48_1;
  };
  protoOf(defaultTransformers$1$content$2).r2z = function () {
    return this.i48_1;
  };
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda).u3w = function ($this$intercept, body, $completion) {
    var tmp = this.v3w($this$intercept, body, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(defaultTransformers$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.u3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            if (this.r48_1.o2i_1.d3y_1.k2e('Accept') == null) {
              this.r48_1.o2i_1.d3y_1.i2f('Accept', '*/*');
            }

            var contentType_0 = contentType(this.r48_1.o2i_1);
            var tmp0_subject = this.s48_1;
            var tmp_0;
            if (typeof tmp0_subject === 'string') {
              tmp_0 = new TextContent(this.s48_1, contentType_0 == null ? Text_getInstance().x2m_1 : contentType_0);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_0 = new defaultTransformers$1$content$1(contentType_0, this.s48_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_0 = new defaultTransformers$1$content$2(this.r48_1, contentType_0, this.s48_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_0 = this.s48_1;
                  } else {
                    tmp_0 = platformRequestDefaultTransform(contentType_0, this.r48_1.o2i_1, this.s48_1);
                  }
                }
              }
            }

            var content = tmp_0;
            if (!((content == null ? null : content.r2x()) == null)) {
              this.r48_1.o2i_1.d3y_1.k2f('Content-Type');
              var this_0 = get_LOGGER_0();
              if (get_isTraceEnabled(this_0)) {
                this_0.n2j('Transformed with default transformers request body for ' + this.r48_1.o2i_1.b3y_1.toString() + ' from ' + toString(getKClassFromExpression(this.s48_1)));
              }
              this.o8_1 = 1;
              suspendResult = this.r48_1.s2h(content, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o8_1 = 2;
              continue $sm;
            }

          case 1:
            this.o8_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 3) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(defaultTransformers$slambda).v3w = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.r48_1 = $this$intercept;
    i.s48_1 = body;
    return i;
  };
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    return constructCallableReference(function ($this$intercept, body, $completion) {
      return i.u3w($this$intercept, body, $completion);
    }, 2);
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.b49_1 = $body;
    this.c49_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda$slambda).f3u = function ($this$writer, $completion) {
    var tmp = this.g3u($this$writer, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(defaultTransformers$slambda$slambda).k9 = function (p1, $completion) {
    return this.f3u(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 4;
            this.p8_1 = 3;
            this.o8_1 = 1;
            suspendResult = copyTo(this.b49_1, this.d49_1.m29_1, new Long(-1, 2147483647), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            rethrowCloseCauseIfNeeded(this.b49_1);
            this.p8_1 = 4;
            this.o8_1 = 2;
            continue $sm;
          case 2:
            this.p8_1 = 4;
            return Unit_instance;
          case 3:
            this.p8_1 = 4;
            var tmp_0 = this.r8_1;
            if (tmp_0 instanceof CancellationException) {
              var cause = this.r8_1;
              cancel(this.c49_1, cause);
              throw cause;
            } else {
              var tmp_1 = this.r8_1;
              if (tmp_1 instanceof Error) {
                var cause_0 = this.r8_1;
                cancel_0(this.c49_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.r8_1;
              }
            }

          case 4:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 4) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(defaultTransformers$slambda$slambda).g3u = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.b49_1, this.c49_1, completion);
    i.d49_1 = $this$writer;
    return i;
  };
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.f3u($this$writer, $completion);
    }, 1);
  }
  function defaultTransformers$slambda$lambda($responseJobHolder) {
    return function (it) {
      $responseJobHolder.i1l();
      return Unit_instance;
    };
  }
  function defaultTransformers$slambda_1($clientScope, resultContinuation) {
    this.m49_1 = $clientScope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda_1).p3x = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.q3x($this$intercept, _destruct__k2r9zo, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(defaultTransformers$slambda_1).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.p3x(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda_1).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 12;
            this.p49_1 = this.o49_1.ag();
            var body = this.o49_1.bg();
            if (!isInterface(body, ByteReadChannel))
              return Unit_instance;
            var response = this.n49_1.o2i_1.b3x();
            var tmp0_subject = this.p49_1.f2j_1;
            if (tmp0_subject.equals(getKClass(Unit))) {
              cancel_1(body);
              this.o8_1 = 10;
              suspendResult = this.n49_1.s2h(new HttpResponseContainer(this.p49_1, Unit_instance), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (tmp0_subject.equals(PrimitiveClasses_getInstance().qb())) {
                this.o8_1 = 8;
                suspendResult = readBuffer(body, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (tmp0_subject.equals(getKClass(Source)) || tmp0_subject.equals(getKClass(Source))) {
                  this.o8_1 = 6;
                  suspendResult = readBuffer(body, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject.equals(PrimitiveClasses_getInstance().zb())) {
                    this.o8_1 = 4;
                    suspendResult = toByteArray(body, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp0_subject.equals(getKClass(ByteReadChannel))) {
                      var responseJobHolder = Job(get_job(response.g1e()));
                      var byteChannel = new ByteChannel();
                      var this_0 = writer_0(this.m49_1, VOID, byteChannel, defaultTransformers$slambda$slambda_0(body, response, null));
                      invokeOnCompletion(this_0, defaultTransformers$slambda$lambda(responseJobHolder));
                      attachJob(byteChannel, get_job(response.g1e()));
                      attachWriterJob(body, this_0);
                      var channel = this_0.r23_1;
                      this.o8_1 = 3;
                      suspendResult = this.n49_1.s2h(new HttpResponseContainer(this.p49_1, channel), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (tmp0_subject.equals(getKClass(HttpStatusCode))) {
                        cancel_1(body);
                        this.o8_1 = 2;
                        suspendResult = this.n49_1.s2h(new HttpResponseContainer(this.p49_1, response.a40()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        if (tmp0_subject.equals(getKClass(MultiPartData))) {
                          var tmp0 = this.n49_1.o2i_1.b3x().b2s().k2e('Content-Type');
                          var tmp$ret$0;
                          l$ret$1: do {
                            if (tmp0 == null) {
                              var message = 'No content type provided for multipart';
                              throw IllegalStateException_init_$Create$(toString(message));
                            } else {
                              tmp$ret$0 = tmp0;
                              break l$ret$1;
                            }
                          }
                           while (false);
                          var rawContentType = tmp$ret$0;
                          var contentType = Companion_getInstance_0().sn(rawContentType);
                          if (!contentType.r2n(MultiPart_getInstance().q2m_1)) {
                            var message_0 = 'Expected multipart/form-data, got ' + contentType.toString();
                            throw IllegalStateException_init_$Create$(toString(message_0));
                          }
                          var tmp1_safe_receiver = this.n49_1.o2i_1.b3x().b2s().k2e('Content-Length');
                          var contentLength_0 = tmp1_safe_receiver == null ? null : toLong(tmp1_safe_receiver);
                          var body_0 = new CIOMultipartDataBase(this.n49_1.g1e(), body, rawContentType, contentLength_0);
                          var parsedResponse = new HttpResponseContainer(this.p49_1, body_0);
                          this.o8_1 = 1;
                          suspendResult = this.n49_1.s2h(parsedResponse, this);
                          if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                          }
                          continue $sm;
                        } else {
                          this.q49_1 = null;
                          this.o8_1 = 11;
                          continue $sm;
                        }
                      }
                    }
                  }
                }
              }
            }

          case 1:
            this.q49_1 = suspendResult;
            this.o8_1 = 11;
            continue $sm;
          case 2:
            this.q49_1 = suspendResult;
            this.o8_1 = 11;
            continue $sm;
          case 3:
            this.q49_1 = suspendResult;
            this.o8_1 = 11;
            continue $sm;
          case 4:
            var bytes = suspendResult;
            checkContentLength(contentLength(this.n49_1.o2i_1.b3x()), fromInt(bytes.length), this.n49_1.o2i_1.k3z().s3z());
            this.o8_1 = 5;
            suspendResult = this.n49_1.s2h(new HttpResponseContainer(this.p49_1, bytes), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.q49_1 = suspendResult;
            this.o8_1 = 11;
            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = new HttpResponseContainer(this.p49_1, ARGUMENT);
            this.o8_1 = 7;
            suspendResult = this.n49_1.s2h(ARGUMENT_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.q49_1 = suspendResult;
            this.o8_1 = 11;
            continue $sm;
          case 8:
            var ARGUMENT_1 = suspendResult;
            var ARGUMENT_2 = readText(ARGUMENT_1);
            var ARGUMENT_3 = toInt(ARGUMENT_2);
            var ARGUMENT_4 = new HttpResponseContainer(this.p49_1, ARGUMENT_3);
            this.o8_1 = 9;
            suspendResult = this.n49_1.s2h(ARGUMENT_4, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.q49_1 = suspendResult;
            this.o8_1 = 11;
            continue $sm;
          case 10:
            this.q49_1 = suspendResult;
            this.o8_1 = 11;
            continue $sm;
          case 11:
            var result = this.q49_1;
            if (!(result == null)) {
              var this_1 = get_LOGGER_0();
              if (get_isTraceEnabled(this_1)) {
                this_1.n2j('Transformed with default transformers response body for ' + this.n49_1.o2i_1.k3z().t3z().toString() + ' to ' + toString(this.p49_1.f2j_1));
              }
            }

            return Unit_instance;
          case 12:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 12) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(defaultTransformers$slambda_1).q3x = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new defaultTransformers$slambda_1(this.m49_1, completion);
    i.n49_1 = $this$intercept;
    i.o49_1 = _destruct__k2r9zo;
    return i;
  };
  function defaultTransformers$slambda_2($clientScope, resultContinuation) {
    var i = new defaultTransformers$slambda_1($clientScope, resultContinuation);
    return constructCallableReference(function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.p3x($this$intercept, _destruct__k2r9zo, $completion);
    }, 2);
  }
  var properties_initialized_DefaultTransform_kt_ossax9;
  function _init_properties_DefaultTransform_kt__20knxx() {
    if (!properties_initialized_DefaultTransform_kt_ossax9) {
      properties_initialized_DefaultTransform_kt_ossax9 = true;
      LOGGER_0 = KtorSimpleLogger('io.ktor.client.plugins.defaultTransformers');
    }
  }
  function get_LOGGER_1() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return LOGGER_1;
  }
  var LOGGER_1;
  function get_HttpCallValidator() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return HttpCallValidator;
  }
  var HttpCallValidator;
  function get_ExpectSuccessAttributeKey() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return ExpectSuccessAttributeKey;
  }
  var ExpectSuccessAttributeKey;
  function HttpCallValidatorConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.x47_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.y47_1 = ArrayList_init_$Create$();
    this.z47_1 = true;
  }
  protoOf(HttpCallValidatorConfig).a48 = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.x47_1.c1(block);
  };
  function ExceptionHandlerWrapper() {
  }
  function RequestExceptionHandlerWrapper() {
  }
  function RequestError$install$slambda($handler, resultContinuation) {
    this.z49_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestError$install$slambda).u3w = function ($this$intercept, it, $completion) {
    var tmp = this.v3w($this$intercept, it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(RequestError$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.u3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RequestError$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 5;
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = this.a4a_1.t2h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c4a_1 = suspendResult;
            this.p8_1 = 5;
            this.o8_1 = 4;
            continue $sm;
          case 2:
            this.p8_1 = 5;
            var tmp_0 = this.r8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.r8_1;
              this.o8_1 = 3;
              suspendResult = this.z49_1(HttpRequest(this.a4a_1.o2i_1), cause, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.r8_1;
            }

          case 3:
            var error = suspendResult;
            var tmp_1 = this;
            if (!(error == null))
              throw error;
            tmp_1.c4a_1 = Unit_instance;
            this.o8_1 = 4;
            continue $sm;
          case 4:
            this.p8_1 = 5;
            return Unit_instance;
          case 5:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 5) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(RequestError$install$slambda).v3w = function ($this$intercept, it, completion) {
    var i = new RequestError$install$slambda(this.z49_1, completion);
    i.a4a_1 = $this$intercept;
    i.b4a_1 = it;
    return i;
  };
  function RequestError$install$slambda_0($handler, resultContinuation) {
    var i = new RequestError$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.u3w($this$intercept, it, $completion);
    }, 2);
  }
  function RequestError() {
  }
  protoOf(RequestError).d4a = function (client, handler) {
    var tmp = Phases_getInstance().d45_1;
    client.w3v_1.s2i(tmp, RequestError$install$slambda_0(handler, null));
  };
  protoOf(RequestError).i45 = function (client, handler) {
    return this.d4a(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var RequestError_instance;
  function RequestError_getInstance() {
    return RequestError_instance;
  }
  function ReceiveError$install$slambda($handler, resultContinuation) {
    this.m4a_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReceiveError$install$slambda).p3x = function ($this$intercept, it, $completion) {
    var tmp = this.q3x($this$intercept, it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(ReceiveError$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.p3x(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ReceiveError$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 5;
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = this.n4a_1.t2h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.p4a_1 = suspendResult;
            this.p8_1 = 5;
            this.o8_1 = 4;
            continue $sm;
          case 2:
            this.p8_1 = 5;
            var tmp_0 = this.r8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.r8_1;
              this.o8_1 = 3;
              suspendResult = this.m4a_1(this.n4a_1.o2i_1.k3z(), cause, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.r8_1;
            }

          case 3:
            var error = suspendResult;
            var tmp_1 = this;
            if (!(error == null))
              throw error;
            tmp_1.p4a_1 = Unit_instance;
            this.o8_1 = 4;
            continue $sm;
          case 4:
            this.p8_1 = 5;
            return Unit_instance;
          case 5:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 5) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(ReceiveError$install$slambda).q3x = function ($this$intercept, it, completion) {
    var i = new ReceiveError$install$slambda(this.m4a_1, completion);
    i.n4a_1 = $this$intercept;
    i.o4a_1 = it;
    return i;
  };
  function ReceiveError$install$slambda_0($handler, resultContinuation) {
    var i = new ReceiveError$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.p3x($this$intercept, it, $completion);
    }, 2);
  }
  function ReceiveError() {
  }
  protoOf(ReceiveError).d4a = function (client, handler) {
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    client.x3v_1.r2i(Phases_getInstance_2().z3y_1, BeforeReceive);
    client.x3v_1.s2i(BeforeReceive, ReceiveError$install$slambda_0(handler, null));
  };
  protoOf(ReceiveError).i45 = function (client, handler) {
    return this.d4a(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var ReceiveError_instance;
  function ReceiveError_getInstance() {
    return ReceiveError_instance;
  }
  function HttpRequest(builder) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return new HttpRequest$1(builder);
  }
  function HttpResponseValidator(_this__u8e3s4, block) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    _this__u8e3s4.j3z(get_HttpCallValidator(), block);
  }
  function HttpCallValidatorConfig$_init_$ref_m1o2g9() {
    return constructCallableReference(function () {
      return new HttpCallValidatorConfig();
    }, 0, 0, 26, '<init>');
  }
  function HttpCallValidator$lambda($this$createClientPlugin) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    var responseValidators = reversed($this$createClientPlugin.c46_1.x47_1);
    var callExceptionHandlers = reversed($this$createClientPlugin.c46_1.y47_1);
    var expectSuccess = $this$createClientPlugin.c46_1.z47_1;
    var tmp = SetupRequest_instance;
    $this$createClientPlugin.f46(tmp, HttpCallValidator$lambda$slambda_0(expectSuccess, null));
    var tmp_0 = Send_instance;
    $this$createClientPlugin.f46(tmp_0, HttpCallValidator$lambda$slambda_2(responseValidators, null));
    var tmp_1 = RequestError_instance;
    $this$createClientPlugin.f46(tmp_1, HttpCallValidator$lambda$slambda_4(callExceptionHandlers, null));
    var tmp_2 = ReceiveError_instance;
    $this$createClientPlugin.f46(tmp_2, HttpCallValidator$lambda$slambda_6(callExceptionHandlers, null));
    return Unit_instance;
  }
  function invoke$validateResponse(responseValidators, response, $completion) {
    var tmp = new $invoke$validateResponseCOROUTINE$(responseValidators, response, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function invoke$processException(callExceptionHandlers, cause, request, $completion) {
    var tmp = new $invoke$processExceptionCOROUTINE$(callExceptionHandlers, cause, request, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function HttpCallValidator$lambda$slambda$lambda($expectSuccess) {
    return function () {
      return $expectSuccess;
    };
  }
  function HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation) {
    this.v4b_1 = $expectSuccess;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda).x4b = function (request, $completion) {
    var tmp = this.y4b(request, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpCallValidator$lambda$slambda).k9 = function (p1, $completion) {
    return this.x4b(p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        if (tmp === 0) {
          this.p8_1 = 1;
          var tmp_0 = get_ExpectSuccessAttributeKey();
          this.w4b_1.g3y_1.z2c(tmp_0, HttpCallValidator$lambda$slambda$lambda(this.v4b_1));
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpCallValidator$lambda$slambda).y4b = function (request, completion) {
    var i = new HttpCallValidator$lambda$slambda(this.v4b_1, completion);
    i.w4b_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_0($expectSuccess, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation);
    return constructCallableReference(function (request, $completion) {
      return i.x4b(request, $completion);
    }, 1);
  }
  function HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation) {
    this.h4c_1 = $responseValidators;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_1).l4c = function ($this$on, request, $completion) {
    var tmp = this.m4c($this$on, request, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpCallValidator$lambda$slambda_1).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.l4c(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_1).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            this.o8_1 = 1;
            suspendResult = this.i4c_1.p4c(this.j4c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k4c_1 = suspendResult;
            this.o8_1 = 2;
            suspendResult = invoke$validateResponse(this.h4c_1, this.k4c_1.b3x(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.k4c_1;
          case 3:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 3) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpCallValidator$lambda$slambda_1).m4c = function ($this$on, request, completion) {
    var i = new HttpCallValidator$lambda$slambda_1(this.h4c_1, completion);
    i.i4c_1 = $this$on;
    i.j4c_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_2($responseValidators, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.l4c($this$on, request, $completion);
    }, 2);
  }
  function HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation) {
    this.y4c_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_3).c4d = function (request, cause, $completion) {
    var tmp = this.d4d(request, cause, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpCallValidator$lambda$slambda_3).i9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.c4d(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_3).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.b4d_1 = unwrapCancellationException(this.a4d_1);
            this.o8_1 = 1;
            suspendResult = invoke$processException(this.y4c_1, this.b4d_1, this.z4c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.b4d_1;
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
  protoOf(HttpCallValidator$lambda$slambda_3).d4d = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_3(this.y4c_1, completion);
    i.z4c_1 = request;
    i.a4d_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_4($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation);
    return constructCallableReference(function (request, cause, $completion) {
      return i.c4d(request, cause, $completion);
    }, 2);
  }
  function HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation) {
    this.m4d_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_5).c4d = function (request, cause, $completion) {
    var tmp = this.d4d(request, cause, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpCallValidator$lambda$slambda_5).i9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.c4d(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_5).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.p4d_1 = unwrapCancellationException(this.o4d_1);
            this.o8_1 = 1;
            suspendResult = invoke$processException(this.m4d_1, this.p4d_1, this.n4d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.p4d_1;
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
  protoOf(HttpCallValidator$lambda$slambda_5).d4d = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_5(this.m4d_1, completion);
    i.n4d_1 = request;
    i.o4d_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_6($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation);
    return constructCallableReference(function (request, cause, $completion) {
      return i.c4d(request, cause, $completion);
    }, 2);
  }
  function $invoke$validateResponseCOROUTINE$(responseValidators, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y4a_1 = responseValidators;
    this.z4a_1 = response;
  }
  protoOf($invoke$validateResponseCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 4;
            var this_0 = get_LOGGER_1();
            if (get_isTraceEnabled(this_0)) {
              this_0.n2j('Validating response for request ' + this.z4a_1.r3z().k3z().t3z().toString());
            }

            this.a4b_1 = this.y4a_1.t();
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!this.a4b_1.u()) {
              this.o8_1 = 3;
              continue $sm;
            }

            var element = this.a4b_1.v();
            this.o8_1 = 2;
            suspendResult = element(this.z4a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o8_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 4) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  function $invoke$processExceptionCOROUTINE$(callExceptionHandlers, cause, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j4b_1 = callExceptionHandlers;
    this.k4b_1 = cause;
    this.l4b_1 = request;
  }
  protoOf($invoke$processExceptionCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 6;
            var tmp0 = get_LOGGER_1();
            var cause = this.k4b_1;
            if (get_isTraceEnabled(tmp0)) {
              tmp0.o2j('Processing exception ' + toString(getKClassFromExpression(this.k4b_1)) + ' for request ' + this.l4b_1.t3z().toString(), cause);
            }

            this.m4b_1 = this.j4b_1.t();
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!this.m4b_1.u()) {
              this.o8_1 = 5;
              continue $sm;
            }

            var element = this.m4b_1.v();
            if (element instanceof ExceptionHandlerWrapper) {
              this.o8_1 = 3;
              suspendResult = element.r4d_1(this.k4b_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (element instanceof RequestExceptionHandlerWrapper) {
                this.o8_1 = 2;
                suspendResult = element.q4d_1(this.k4b_1, this.l4b_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                noWhenBranchMatchedException();
              }
            }

            break;
          case 2:
            this.o8_1 = 4;
            continue $sm;
          case 3:
            this.o8_1 = 4;
            continue $sm;
          case 4:
            this.o8_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
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
  function HttpRequest$1($builder) {
    this.w4d_1 = $builder;
    this.s4d_1 = $builder.c3y_1;
    this.t4d_1 = $builder.b3y_1.v2n();
    this.u4d_1 = $builder.g3y_1;
    this.v4d_1 = $builder.d3y_1.v2n();
  }
  protoOf(HttpRequest$1).r3z = function () {
    // Inline function 'kotlin.error' call
    var message = 'Call is not initialized';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(HttpRequest$1).s3z = function () {
    return this.s4d_1;
  };
  protoOf(HttpRequest$1).t3z = function () {
    return this.t4d_1;
  };
  protoOf(HttpRequest$1).l3z = function () {
    return this.u4d_1;
  };
  protoOf(HttpRequest$1).b2s = function () {
    return this.v4d_1;
  };
  protoOf(HttpRequest$1).c33 = function () {
    var tmp = this.w4d_1.e3y_1;
    var tmp0_elvis_lhs = tmp instanceof OutgoingContent ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Content was not transformed to OutgoingContent yet. Current body is ' + toString(this.w4d_1.e3y_1);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  };
  var properties_initialized_HttpCallValidator_kt_xrx49w;
  function _init_properties_HttpCallValidator_kt__r6yh2y() {
    if (!properties_initialized_HttpCallValidator_kt_xrx49w) {
      properties_initialized_HttpCallValidator_kt_xrx49w = true;
      LOGGER_1 = KtorSimpleLogger('io.ktor.client.plugins.HttpCallValidator');
      var tmp = HttpCallValidatorConfig$_init_$ref_m1o2g9();
      HttpCallValidator = createClientPlugin_0('HttpResponseValidator', tmp, HttpCallValidator$lambda);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ExpectSuccessAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_0 = PrimitiveClasses_getInstance().nb();
      var tmp_1 = !(null == null) ? typeof null === 'boolean' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_2;
      try {
        tmp_2 = createKType(PrimitiveClasses_getInstance().nb(), arrayOf([]), false);
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
      var tmp$ret$2 = tmp_2;
      var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
      ExpectSuccessAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function get_PLUGIN_INSTALLED_LIST() {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    return PLUGIN_INSTALLED_LIST;
  }
  var PLUGIN_INSTALLED_LIST;
  function plugin(_this__u8e3s4, plugin) {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    var tmp0_elvis_lhs = pluginOrNull(_this__u8e3s4, plugin);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Plugin ' + toString(plugin) + ' is not installed. Consider using `install(' + plugin.m1().toString() + ')` in client config first.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function pluginOrNull(_this__u8e3s4, plugin) {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    var tmp0_safe_receiver = _this__u8e3s4.a3w_1.u2c(get_PLUGIN_INSTALLED_LIST());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u2c(plugin.m1());
  }
  var properties_initialized_HttpClientPlugin_kt_p98320;
  function _init_properties_HttpClientPlugin_kt__cypu1m() {
    if (!properties_initialized_HttpClientPlugin_kt_p98320) {
      properties_initialized_HttpClientPlugin_kt_p98320 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ApplicationPluginRegistry';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Attributes);
      var tmp_0 = !(null == null) ? isInterface(null, Attributes) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(Attributes), arrayOf([]), false);
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
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      PLUGIN_INSTALLED_LIST = new AttributeKey(name, tmp$ret$1);
    }
  }
  function get_LOGGER_2() {
    _init_properties_HttpPlainText_kt__iy89z1();
    return LOGGER_2;
  }
  var LOGGER_2;
  function get_HttpPlainText() {
    _init_properties_HttpPlainText_kt__iy89z1();
    return HttpPlainText;
  }
  var HttpPlainText;
  function HttpPlainTextConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.x4d_1 = LinkedHashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.y4d_1 = LinkedHashMap_init_$Create$();
    this.z4d_1 = null;
    this.a4e_1 = Charsets_getInstance().p2b_1;
  }
  function RenderRequestHook$install$slambda($handler, resultContinuation) {
    this.j4e_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RenderRequestHook$install$slambda).u3w = function ($this$intercept, content, $completion) {
    var tmp = this.v3w($this$intercept, content, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(RenderRequestHook$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.u3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RenderRequestHook$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 4;
            this.o8_1 = 1;
            suspendResult = this.j4e_1(this.k4e_1.o2i_1, this.l4e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (!(result == null)) {
              this.o8_1 = 2;
              suspendResult = this.k4e_1.s2h(result, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o8_1 = 3;
              continue $sm;
            }

          case 2:
            this.o8_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 4) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(RenderRequestHook$install$slambda).v3w = function ($this$intercept, content, completion) {
    var i = new RenderRequestHook$install$slambda(this.j4e_1, completion);
    i.k4e_1 = $this$intercept;
    i.l4e_1 = content;
    return i;
  };
  function RenderRequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RenderRequestHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.u3w($this$intercept, content, $completion);
    }, 2);
  }
  function RenderRequestHook() {
  }
  protoOf(RenderRequestHook).m4e = function (client, handler) {
    var tmp = Phases_getInstance().g45_1;
    client.w3v_1.s2i(tmp, RenderRequestHook$install$slambda_0(handler, null));
  };
  protoOf(RenderRequestHook).i45 = function (client, handler) {
    return this.m4e(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var RenderRequestHook_instance;
  function RenderRequestHook_getInstance() {
    return RenderRequestHook_instance;
  }
  function HttpPlainTextConfig$_init_$ref_isjudo() {
    return constructCallableReference(function () {
      return new HttpPlainTextConfig();
    }, 0, 0, 27, '<init>');
  }
  function HttpPlainText$lambda($this$createClientPlugin) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.collections.sortedByDescending' call
    var this_0 = toList($this$createClientPlugin.c46_1.y4d_1);
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = HttpPlainText$lambda$lambda;
    var tmp$ret$1 = new sam$kotlin_Comparator$0(tmp);
    var withQuality = sortedWith(this_0, tmp$ret$1);
    var responseCharsetFallback = $this$createClientPlugin.c46_1.a4e_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = $this$createClientPlugin.c46_1.x4d_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (!$this$createClientPlugin.c46_1.y4d_1.r2(element)) {
        destination.c1(element);
      }
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = HttpPlainText$lambda$lambda_0;
    var tmp$ret$6 = new sam$kotlin_Comparator$0(tmp_0);
    var withoutQuality = sortedWith(destination, tmp$ret$6);
    var tmp_1;
    var tmp0_0 = $this$createClientPlugin.c46_1.x4d_1;
    var tmp$ret$7;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_2;
      if (isInterface(tmp0_0, Collection)) {
        tmp_2 = tmp0_0.r();
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$7 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = tmp0_0.t();
      while (_iterator__ex2g4s_0.u()) {
        var element_0 = _iterator__ex2g4s_0.v();
        if (!element_0.equals(Charsets_getInstance().p2b_1)) {
          tmp$ret$7 = true;
          break $l$block_0;
        }
      }
      tmp$ret$7 = false;
    }
    if (tmp$ret$7) {
      tmp_1 = true;
    } else {
      var tmp0_1 = $this$createClientPlugin.c46_1.y4d_1.u2();
      var tmp$ret$9;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var tmp_3;
        if (isInterface(tmp0_1, Collection)) {
          tmp_3 = tmp0_1.r();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$9 = false;
          break $l$block_2;
        }
        var _iterator__ex2g4s_1 = tmp0_1.t();
        while (_iterator__ex2g4s_1.u()) {
          var element_1 = _iterator__ex2g4s_1.v();
          if (!element_1.equals(Charsets_getInstance().p2b_1)) {
            tmp$ret$9 = true;
            break $l$block_2;
          }
        }
        tmp$ret$9 = false;
      }
      tmp_1 = tmp$ret$9;
    }
    var hasRegisteredCharsets = tmp_1;
    var tmp_4;
    if (hasRegisteredCharsets) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_2 = withoutQuality.t();
      while (_iterator__ex2g4s_2.u()) {
        var element_2 = _iterator__ex2g4s_2.v();
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_1) > 0) {
          this_1.q(',');
        }
        this_1.q(get_name(element_2));
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_3 = withQuality.t();
      while (_iterator__ex2g4s_3.u()) {
        var element_3 = _iterator__ex2g4s_3.v();
        var charset = element_3.ag();
        var quality = element_3.bg();
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_1) > 0) {
          this_1.q(',');
        }
        // Inline function 'kotlin.check' call
        if (!(0.0 <= quality ? quality <= 1.0 : false)) {
          throw IllegalStateException_init_$Create$('Check failed.');
        }
        // Inline function 'kotlin.math.roundToInt' call
        var this_2 = 100 * quality;
        var truncatedQuality = roundToInt(this_2) / 100.0;
        this_1.q(get_name(charset) + ';q=' + truncatedQuality);
      }
      tmp_4 = this_1.toString();
    } else {
      tmp_4 = null;
    }
    var acceptCharsetHeader = tmp_4;
    var tmp0_elvis_lhs = $this$createClientPlugin.c46_1.z4d_1;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(withoutQuality) : tmp0_elvis_lhs;
    var tmp_5;
    if (tmp1_elvis_lhs == null) {
      var tmp2_safe_receiver = firstOrNull(withQuality);
      tmp_5 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.yf_1;
    } else {
      tmp_5 = tmp1_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_5;
    var requestCharset = tmp3_elvis_lhs == null ? Charsets_getInstance().p2b_1 : tmp3_elvis_lhs;
    var tmp_6 = RenderRequestHook_instance;
    $this$createClientPlugin.f46(tmp_6, HttpPlainText$lambda$slambda_0(acceptCharsetHeader, requestCharset, null));
    $this$createClientPlugin.n4e(HttpPlainText$lambda$slambda_2(responseCharsetFallback, null));
    return Unit_instance;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.o4e_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).yd = function (a, b) {
    return this.o4e_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.yd(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).l3 = function () {
    return this.o4e_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.l3(), other.l3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.l3());
  };
  function HttpPlainText$lambda$lambda(a, b) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.zf_1;
    var tmp$ret$2 = a.zf_1;
    return compareValues(tmp, tmp$ret$2);
  }
  function HttpPlainText$lambda$lambda_0(a, b) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = get_name(a);
    var tmp$ret$2 = get_name(b);
    return compareValues(tmp, tmp$ret$2);
  }
  function invoke$wrapContent(requestCharset, request, content, requestContentType) {
    var contentType = requestContentType == null ? Text_getInstance().x2m_1 : requestContentType;
    var tmp2_elvis_lhs = requestContentType == null ? null : charset(requestContentType);
    var charset_0 = tmp2_elvis_lhs == null ? requestCharset : tmp2_elvis_lhs;
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER_2();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$1 = 'Sending request body to ' + request.b3y_1.toString() + ' as text/plain with charset ' + charset_0.toString();
      this_0.n2j(tmp$ret$1);
    }
    return new TextContent(content, withCharset(contentType, charset_0));
  }
  function invoke$read(responseCharsetFallback, call, body) {
    var tmp0_elvis_lhs = charset_0(call.b3x());
    var actualCharset = tmp0_elvis_lhs == null ? responseCharsetFallback : tmp0_elvis_lhs;
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER_2();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$1 = 'Reading response body for ' + call.k3z().t3z().toString() + ' as String with charset ' + actualCharset.toString();
      this_0.n2j(tmp$ret$1);
    }
    return readText_0(body, actualCharset);
  }
  function invoke$addAcceptCharsetHeader(_this__u8e3s4, value) {
    if (value == null || !(_this__u8e3s4.d3y_1.k2e('Accept-Charset') == null))
      return Unit_instance;
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER_2();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$1 = 'Adding Accept-Charset=' + value + ' to ' + _this__u8e3s4.b3y_1.toString();
      this_0.n2j(tmp$ret$1);
    }
    _this__u8e3s4.d3y_1.g2f('Accept-Charset', value);
  }
  function HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation) {
    this.x4e_1 = $acceptCharsetHeader;
    this.y4e_1 = $requestCharset;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda).b4f = function (request, content, $completion) {
    var tmp = this.c4f(request, content, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpPlainText$lambda$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.b4f(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        if (tmp === 0) {
          this.p8_1 = 1;
          invoke$addAcceptCharsetHeader(this.z4e_1, this.x4e_1);
          var tmp_0 = this.a4f_1;
          if (!(typeof tmp_0 === 'string'))
            return null;
          var contentType_0 = contentType(this.z4e_1);
          if (!(contentType_0 == null) && !(contentType_0.o2n_1 === Text_getInstance().x2m_1.o2n_1)) {
            return null;
          }
          return invoke$wrapContent(this.y4e_1, this.z4e_1, this.a4f_1, contentType_0);
        } else if (tmp === 1) {
          throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpPlainText$lambda$slambda).c4f = function (request, content, completion) {
    var i = new HttpPlainText$lambda$slambda(this.x4e_1, this.y4e_1, completion);
    i.z4e_1 = request;
    i.a4f_1 = content;
    return i;
  };
  function HttpPlainText$lambda$slambda_0($acceptCharsetHeader, $requestCharset, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation);
    return constructCallableReference(function (request, content, $completion) {
      return i.b4f(request, content, $completion);
    }, 2);
  }
  function HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation) {
    this.l4f_1 = $responseCharsetFallback;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda_1).q4f = function ($this$transformResponseBody, response, content, requestedType, $completion) {
    var tmp = this.r4f($this$transformResponseBody, response, content, requestedType, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpPlainText$lambda$slambda_1).s4f = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
    var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
    return this.q4f(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda_1).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            if (!this.p4f_1.f2j_1.equals(PrimitiveClasses_getInstance().vb()))
              return null;
            this.o8_1 = 1;
            suspendResult = readBuffer(this.o4f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return invoke$read(this.l4f_1, this.n4f_1.r3z(), bodyBytes);
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
  protoOf(HttpPlainText$lambda$slambda_1).r4f = function ($this$transformResponseBody, response, content, requestedType, completion) {
    var i = new HttpPlainText$lambda$slambda_1(this.l4f_1, completion);
    i.m4f_1 = $this$transformResponseBody;
    i.n4f_1 = response;
    i.o4f_1 = content;
    i.p4f_1 = requestedType;
    return i;
  };
  function HttpPlainText$lambda$slambda_2($responseCharsetFallback, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation);
    return constructCallableReference(function ($this$transformResponseBody, response, content, requestedType, $completion) {
      return i.q4f($this$transformResponseBody, response, content, requestedType, $completion);
    }, 4);
  }
  var properties_initialized_HttpPlainText_kt_2nx4ox;
  function _init_properties_HttpPlainText_kt__iy89z1() {
    if (!properties_initialized_HttpPlainText_kt_2nx4ox) {
      properties_initialized_HttpPlainText_kt_2nx4ox = true;
      LOGGER_2 = KtorSimpleLogger('io.ktor.client.plugins.HttpPlainText');
      var tmp = HttpPlainTextConfig$_init_$ref_isjudo();
      HttpPlainText = createClientPlugin_0('HttpPlainText', tmp, HttpPlainText$lambda);
    }
  }
  function get_ALLOWED_FOR_REDIRECT() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return ALLOWED_FOR_REDIRECT;
  }
  var ALLOWED_FOR_REDIRECT;
  function get_LOGGER_3() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return LOGGER_3;
  }
  var LOGGER_3;
  function get_HttpResponseRedirectEvent() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return HttpResponseRedirectEvent;
  }
  var HttpResponseRedirectEvent;
  function get_HttpRedirect() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return HttpRedirect;
  }
  var HttpRedirect;
  function HttpRedirectConfig() {
    this.t4f_1 = true;
    this.u4f_1 = false;
  }
  function isRedirect(_this__u8e3s4) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var tmp0_subject = _this__u8e3s4.a2v_1;
    return tmp0_subject === Companion_getInstance_1().i2t_1.a2v_1 || tmp0_subject === Companion_getInstance_1().j2t_1.a2v_1 || (tmp0_subject === Companion_getInstance_1().o2t_1.a2v_1 || (tmp0_subject === Companion_getInstance_1().p2t_1.a2v_1 || tmp0_subject === Companion_getInstance_1().k2t_1.a2v_1)) ? true : false;
  }
  function removeDotSegments(_this__u8e3s4) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.none' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.r();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = _this__u8e3s4.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (element === '.' || element === '..') {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    if (tmp$ret$0)
      return _this__u8e3s4;
    var segments = firstOrNull(_this__u8e3s4) === '' ? _this__u8e3s4 : plus_0(listOf(''), _this__u8e3s4);
    var output = ArrayList_init_$Create$_0(segments.e1());
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s_0 = segments.t();
    while (_iterator__ex2g4s_0.u()) {
      var item = _iterator__ex2g4s_0.v();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var isLast = checkIndexOverflow(_unary__edvuaz) === get_lastIndex(segments);
      switch (item) {
        case '.':
          if (isLast) {
            output.c1('');
          }

          break;
        case '..':
          if (output.e1() > 1) {
            output.z2(get_lastIndex(output));
          }

          if (isLast) {
            output.c1('');
          }

          break;
        default:
          output.c1(item);
          break;
      }
    }
    return output;
  }
  function HttpRedirectConfig$_init_$ref_rhym9t() {
    return constructCallableReference(function () {
      return new HttpRedirectConfig();
    }, 0, 0, 28, '<init>');
  }
  function HttpRedirect$lambda($this$createClientPlugin) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var checkHttpMethod = $this$createClientPlugin.c46_1.t4f_1;
    var allowHttpsDowngrade = $this$createClientPlugin.c46_1.u4f_1;
    var tmp = Send_instance;
    $this$createClientPlugin.f46(tmp, HttpRedirect$lambda$slambda_0(checkHttpMethod, allowHttpsDowngrade, $this$createClientPlugin, null));
    return Unit_instance;
  }
  function invoke$handleCall(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion) {
    var tmp = new $invoke$handleCallCOROUTINE$(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    this.s4g_1 = $checkHttpMethod;
    this.t4g_1 = $allowHttpsDowngrade;
    this.u4g_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRedirect$lambda$slambda).l4c = function ($this$on, request, $completion) {
    var tmp = this.m4c($this$on, request, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpRedirect$lambda$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.l4c(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRedirect$lambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            this.o8_1 = 1;
            suspendResult = this.v4g_1.p4c(this.w4g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var origin = suspendResult;
            if (this.s4g_1 && !get_ALLOWED_FOR_REDIRECT().j2(origin.k3z().s3z())) {
              return origin;
            }

            this.o8_1 = 2;
            suspendResult = invoke$handleCall(this.v4g_1, this.w4g_1, origin, this.t4g_1, this.u4g_1.b46_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 3) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpRedirect$lambda$slambda).m4c = function ($this$on, request, completion) {
    var i = new HttpRedirect$lambda$slambda(this.s4g_1, this.t4g_1, this.u4g_1, completion);
    i.v4g_1 = $this$on;
    i.w4g_1 = request;
    return i;
  };
  function HttpRedirect$lambda$slambda_0($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    var i = new HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.l4c($this$on, request, $completion);
    }, 2);
  }
  function $invoke$handleCallCOROUTINE$(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d4g_1 = _this__u8e3s4;
    this.e4g_1 = context;
    this.f4g_1 = origin;
    this.g4g_1 = allowHttpsDowngrade;
    this.h4g_1 = client;
  }
  protoOf($invoke$handleCallCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            this.i4g_1 = this.f4g_1;
            this.j4g_1 = this.e4g_1;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.o8_1 = 4;
              continue $sm;
            }

            var previousProtocol = this.i4g_1.k3z().t3z().f2w_1;
            var previousAuthority = get_authority(this.i4g_1.k3z().t3z());
            if (!isRedirect(this.i4g_1.b3x().a40()))
              return this.i4g_1;
            var location = this.i4g_1.b3x().b2s().k2e('Location');
            if (location == null) {
              get_LOGGER_3().l2j('Location header missing from redirect response ' + this.i4g_1.k3z().t3z().toString() + '; returning response as is');
              return this.i4g_1;
            }

            this.h4g_1.c3w_1.y3g(get_HttpResponseRedirectEvent(), this.i4g_1.b3x());
            var this_0 = get_LOGGER_3();
            if (get_isTraceEnabled(this_0)) {
              this_0.n2j('Received redirect response to ' + location + ' for request ' + this.i4g_1.k3z().t3z().toString());
            }

            var tmp_0 = this;
            var this_1 = new HttpRequestBuilder();
            this_1.v43(this.j4g_1);
            this_1.b3y_1.p2v_1.w2();
            takeFrom(this_1.b3y_1, location);
            var this_2 = substringBefore(substringBefore(location, _Char___init__impl__6a9atx(35)), _Char___init__impl__6a9atx(63));
            if (charSequenceLength(this_2) > 0) {
              this_1.b3y_1.n2v_1 = removeDotSegments(this_1.b3y_1.n2v_1);
            }

            if (!this.g4g_1 && isSecure(previousProtocol) && !isSecure(this_1.b3y_1.s2v())) {
              var this_3 = get_LOGGER_3();
              if (get_isTraceEnabled(this_3)) {
                this_3.n2j('Blocked redirect from ' + this.i4g_1.k3z().t3z().toString() + ' to ' + location + ' due to HTTPS downgrade');
              }
              return this.i4g_1;
            }

            if (!(previousAuthority === get_authority_0(this_1.b3y_1))) {
              this_1.d3y_1.k2f('Authorization');
              var this_4 = get_LOGGER_3();
              if (get_isTraceEnabled(this_4)) {
                this_4.n2j('Removing Authorization header for cross-authority redirect: ' + (previousAuthority + ' -> ' + this_1.b3y_1.c2x()));
              }
            }

            tmp_0.j4g_1 = this_1;
            this.o8_1 = 2;
            suspendResult = this.d4g_1.p4c(this.j4g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i4g_1 = suspendResult;
            this.o8_1 = 1;
            continue $sm;
          case 3:
            throw this.r8_1;
          case 4:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 3) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_HttpRedirect_kt_klj746;
  function _init_properties_HttpRedirect_kt__ure7fo() {
    if (!properties_initialized_HttpRedirect_kt_klj746) {
      properties_initialized_HttpRedirect_kt_klj746 = true;
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_2().c2s_1, Companion_getInstance_2().h2s_1]);
      LOGGER_3 = KtorSimpleLogger('io.ktor.client.plugins.HttpRedirect');
      HttpResponseRedirectEvent = new EventDefinition();
      var tmp = HttpRedirectConfig$_init_$ref_rhym9t();
      HttpRedirect = createClientPlugin_0('HttpRedirect', tmp, HttpRedirect$lambda);
    }
  }
  function get_LOGGER_4() {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    return LOGGER_4;
  }
  var LOGGER_4;
  function get_HttpRequestLifecycle() {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    return HttpRequestLifecycle;
  }
  var HttpRequestLifecycle;
  function $invokeCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f4h_1 = _this__u8e3s4;
  }
  protoOf($invokeCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            var tmp0 = this.f4h_1.j4h_1;
            this.o8_1 = 1;
            suspendResult = tmp0.t2h(this);
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
  function PipelineContext$proceed$ref(p0) {
    KFunctionImpl.call(this, 9, 1, 29);
    this.j4h_1 = p0;
  }
  protoOf(PipelineContext$proceed$ref).l29 = function ($completion) {
    var tmp = new $invokeCOROUTINE$(this, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(PipelineContext$proceed$ref).j9 = function ($completion) {
    return this.l29($completion);
  };
  function PipelineContext$proceed$ref_0(p0) {
    var i = new PipelineContext$proceed$ref(p0);
    return constructCallableReference(function ($completion) {
      return i.l29($completion);
    }, 0, 9, 29, VOID, [p0]);
  }
  function SetupRequestContext$install$slambda($handler, resultContinuation) {
    this.s4h_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequestContext$install$slambda).u3w = function ($this$intercept, it, $completion) {
    var tmp = this.v3w($this$intercept, it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(SetupRequestContext$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.u3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SetupRequestContext$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = this.s4h_1(this.t4h_1.o2i_1, PipelineContext$proceed$ref_0(this.t4h_1), this);
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
  protoOf(SetupRequestContext$install$slambda).v3w = function ($this$intercept, it, completion) {
    var i = new SetupRequestContext$install$slambda(this.s4h_1, completion);
    i.t4h_1 = $this$intercept;
    i.u4h_1 = it;
    return i;
  };
  function SetupRequestContext$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequestContext$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.u3w($this$intercept, it, $completion);
    }, 2);
  }
  function SetupRequestContext() {
  }
  protoOf(SetupRequestContext).v4h = function (client, handler) {
    var tmp = Phases_getInstance().d45_1;
    client.w3v_1.s2i(tmp, SetupRequestContext$install$slambda_0(handler, null));
  };
  protoOf(SetupRequestContext).i45 = function (client, handler) {
    return this.v4h(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var SetupRequestContext_instance;
  function SetupRequestContext_getInstance() {
    return SetupRequestContext_instance;
  }
  function attachToClientEngineJob(requestJob, clientEngineJob) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var handler = clientEngineJob.i1f(attachToClientEngineJob$lambda(requestJob));
    requestJob.i1f(attachToClientEngineJob$lambda_0(handler));
  }
  function HttpRequestLifecycle$lambda($this$createClientPlugin) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var tmp = SetupRequestContext_instance;
    $this$createClientPlugin.f46(tmp, HttpRequestLifecycle$lambda$slambda_0($this$createClientPlugin, null));
    return Unit_instance;
  }
  function HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation) {
    this.e4i_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestLifecycle$lambda$slambda).i4i = function (request, proceed, $completion) {
    var tmp = this.j4i(request, proceed, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.i4i(tmp, (!(p2 == null) ? isSuspendFunction(p2, 0) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 6;
            this.h4i_1 = SupervisorJob(this.f4i_1.f3y_1);
            attachToClientEngineJob(this.h4i_1, ensureNotNull(this.e4i_1.b46_1.v3v_1.b9(Key_instance)));
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.p8_1 = 4;
            this.p8_1 = 3;
            this.f4i_1.f3y_1 = this.h4i_1;
            this.o8_1 = 2;
            suspendResult = this.g4i_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.p8_1 = 6;
            this.o8_1 = 5;
            continue $sm;
          case 3:
            this.p8_1 = 4;
            var tmp_0 = this.r8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.r8_1;
              this.h4i_1.h1l(cause);
              throw cause;
            } else {
              throw this.r8_1;
            }

          case 4:
            this.p8_1 = 6;
            var t = this.r8_1;
            this.h4i_1.i1l();
            throw t;
          case 5:
            this.p8_1 = 6;
            this.h4i_1.i1l();
            return Unit_instance;
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
  protoOf(HttpRequestLifecycle$lambda$slambda).j4i = function (request, proceed, completion) {
    var i = new HttpRequestLifecycle$lambda$slambda(this.e4i_1, completion);
    i.f4i_1 = request;
    i.g4i_1 = proceed;
    return i;
  };
  function HttpRequestLifecycle$lambda$slambda_0($this_createClientPlugin, resultContinuation) {
    var i = new HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation);
    return constructCallableReference(function (request, proceed, $completion) {
      return i.i4i(request, proceed, $completion);
    }, 2);
  }
  function attachToClientEngineJob$lambda($requestJob) {
    return function (cause) {
      if (!(cause == null)) {
        // Inline function 'io.ktor.util.logging.trace' call
        var this_0 = get_LOGGER_4();
        if (get_isTraceEnabled(this_0)) {
          var tmp$ret$1 = 'Cancelling request because engine Job failed with error';
          this_0.o2j(tmp$ret$1, cause);
        }
        cancel_2($requestJob, 'Engine failed', cause);
      } else {
        get_LOGGER_4().n2j('Cancelling request because engine Job completed');
        $requestJob.i1l();
      }
      return Unit_instance;
    };
  }
  function attachToClientEngineJob$lambda_0($handler) {
    return function (it) {
      $handler.c1i();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpRequestLifecycle_kt_3hmcrf;
  function _init_properties_HttpRequestLifecycle_kt__jgkmfx() {
    if (!properties_initialized_HttpRequestLifecycle_kt_3hmcrf) {
      properties_initialized_HttpRequestLifecycle_kt_3hmcrf = true;
      LOGGER_4 = KtorSimpleLogger('io.ktor.client.plugins.HttpRequestLifecycle');
      HttpRequestLifecycle = createClientPlugin('RequestLifecycle', HttpRequestLifecycle$lambda);
    }
  }
  function get_LOGGER_5() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return LOGGER_5;
  }
  var LOGGER_5;
  function get_HttpRequestRetryEvent() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return HttpRequestRetryEvent;
  }
  var HttpRequestRetryEvent;
  var HttpRequestRetry;
  function get_MaxRetriesPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return MaxRetriesPerRequestAttributeKey;
  }
  var MaxRetriesPerRequestAttributeKey;
  function get_ShouldRetryPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return ShouldRetryPerRequestAttributeKey;
  }
  var ShouldRetryPerRequestAttributeKey;
  function get_ShouldRetryOnExceptionPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return ShouldRetryOnExceptionPerRequestAttributeKey;
  }
  var ShouldRetryOnExceptionPerRequestAttributeKey;
  function get_ModifyRequestPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return ModifyRequestPerRequestAttributeKey;
  }
  var ModifyRequestPerRequestAttributeKey;
  function get_RetryDelayPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return RetryDelayPerRequestAttributeKey;
  }
  var RetryDelayPerRequestAttributeKey;
  function HttpRetryEventData(request, retryCount, response, cause) {
    this.k4i_1 = request;
    this.l4i_1 = retryCount;
    this.m4i_1 = response;
    this.n4i_1 = cause;
  }
  function randomMs($this, randomizationMs) {
    return equalsLong(randomizationMs, new Long(0, 0)) ? new Long(0, 0) : Default_getInstance().ui(randomizationMs);
  }
  function HttpRequestRetryConfig$delay$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetryConfig$delay$slambda).x4i = function (it, $completion) {
    var tmp = this.y4i(it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).k9 = function (p1, $completion) {
    return this.x4i(p1 instanceof Long ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = delay(this.w4i_1, this);
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
  protoOf(HttpRequestRetryConfig$delay$slambda).y4i = function (it, completion) {
    var i = new HttpRequestRetryConfig$delay$slambda(completion);
    i.w4i_1 = it;
    return i;
  };
  function HttpRequestRetryConfig$delay$slambda_0(resultContinuation) {
    var i = new HttpRequestRetryConfig$delay$slambda(resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.x4i(it, $completion);
    }, 1);
  }
  function HttpRequestRetryConfig$modifyRequest$lambda(_this__u8e3s4, it) {
    return Unit_instance;
  }
  function HttpRequestRetryConfig$retryOnException$lambda($retryOnTimeout) {
    return function ($this$retryOnExceptionIf, _unused_var__etf5q3, cause) {
      var tmp;
      if (isTimeoutException(cause)) {
        tmp = $retryOnTimeout;
      } else {
        if (cause instanceof CancellationException) {
          tmp = false;
        } else {
          tmp = true;
        }
      }
      return tmp;
    };
  }
  function HttpRequestRetryConfig$retryOnServerErrors$lambda($this$retryIf, _unused_var__etf5q3, response) {
    // Inline function 'kotlin.let' call
    var it = response.a40().a2v_1;
    return 500 <= it ? it <= 599 : false;
  }
  function HttpRequestRetryConfig$delayMillis$lambda($respectRetryAfterHeader, $block) {
    return function (_this__u8e3s4, it) {
      var tmp;
      if ($respectRetryAfterHeader) {
        var tmp0_safe_receiver = _this__u8e3s4.a4j_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b2s();
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.k2e('Retry-After');
        var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : toLongOrNull(tmp2_safe_receiver);
        var tmp_0;
        if (tmp3_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.Long.times' call
          tmp_0 = multiply(tmp3_safe_receiver, fromInt(1000));
        }
        var retryAfter = tmp_0;
        var tmp0 = $block(_this__u8e3s4, it);
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = retryAfter == null ? new Long(0, 0) : retryAfter;
        tmp = compare(tmp0, b) >= 0 ? tmp0 : b;
      } else {
        tmp = $block(_this__u8e3s4, it);
      }
      return tmp;
    };
  }
  function HttpRequestRetryConfig$exponentialDelay$lambda($base, $baseDelayMs, $maxDelayMs, this$0, $randomizationMs) {
    return function ($this$delayMillis, retry) {
      var tmp0 = $base;
      // Inline function 'kotlin.math.pow' call
      var n = retry - 1 | 0;
      var tmp$ret$0 = Math.pow(tmp0, n);
      var tmp0_0 = numberToLong(tmp$ret$0 * toNumber($baseDelayMs));
      // Inline function 'kotlin.comparisons.minOf' call
      var b = $maxDelayMs;
      var delay = compare(tmp0_0, b) <= 0 ? tmp0_0 : b;
      return add(delay, randomMs(this$0, $randomizationMs));
    };
  }
  function HttpRequestRetryConfig() {
    var tmp = this;
    tmp.f4j_1 = HttpRequestRetryConfig$delay$slambda_0(null);
    var tmp_0 = this;
    tmp_0.g4j_1 = HttpRequestRetryConfig$modifyRequest$lambda;
    this.h4j_1 = 0;
    this.i4j(3);
    this.j4j();
  }
  protoOf(HttpRequestRetryConfig).k4j = function () {
    var tmp = this.c4j_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetry');
    }
  };
  protoOf(HttpRequestRetryConfig).l4j = function () {
    var tmp = this.d4j_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetryOnException');
    }
  };
  protoOf(HttpRequestRetryConfig).m4j = function () {
    var tmp = this.e4j_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('delayMillis');
    }
  };
  protoOf(HttpRequestRetryConfig).n4j = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.h4j_1 = maxRetries;
    this.c4j_1 = block;
  };
  protoOf(HttpRequestRetryConfig).o4j = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.h4j_1 = maxRetries;
    this.d4j_1 = block;
  };
  protoOf(HttpRequestRetryConfig).p4j = function (maxRetries, retryOnTimeout) {
    this.o4j(maxRetries, HttpRequestRetryConfig$retryOnException$lambda(retryOnTimeout));
  };
  protoOf(HttpRequestRetryConfig).q4j = function (maxRetries, retryOnTimeout, $super) {
    maxRetries = maxRetries === VOID ? -1 : maxRetries;
    retryOnTimeout = retryOnTimeout === VOID ? false : retryOnTimeout;
    var tmp;
    if ($super === VOID) {
      this.p4j(maxRetries, retryOnTimeout);
      tmp = Unit_instance;
    } else {
      tmp = $super.p4j.call(this, maxRetries, retryOnTimeout);
    }
    return tmp;
  };
  protoOf(HttpRequestRetryConfig).r4j = function (maxRetries) {
    this.n4j(maxRetries, HttpRequestRetryConfig$retryOnServerErrors$lambda);
  };
  protoOf(HttpRequestRetryConfig).i4j = function (maxRetries) {
    this.r4j(maxRetries);
    this.q4j(maxRetries);
  };
  protoOf(HttpRequestRetryConfig).s4j = function (respectRetryAfterHeader, block) {
    var tmp = this;
    tmp.e4j_1 = HttpRequestRetryConfig$delayMillis$lambda(respectRetryAfterHeader, block);
  };
  protoOf(HttpRequestRetryConfig).t4j = function (base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader) {
    // Inline function 'kotlin.check' call
    if (!(base > 0)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!(compare(baseDelayMs, new Long(0, 0)) > 0)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!(compare(maxDelayMs, new Long(0, 0)) > 0)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!(compare(randomizationMs, new Long(0, 0)) >= 0)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    this.s4j(respectRetryAfterHeader, HttpRequestRetryConfig$exponentialDelay$lambda(base, baseDelayMs, maxDelayMs, this, randomizationMs));
  };
  protoOf(HttpRequestRetryConfig).j4j = function (base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader, $super) {
    base = base === VOID ? 2.0 : base;
    baseDelayMs = baseDelayMs === VOID ? new Long(1000, 0) : baseDelayMs;
    maxDelayMs = maxDelayMs === VOID ? new Long(60000, 0) : maxDelayMs;
    randomizationMs = randomizationMs === VOID ? new Long(1000, 0) : randomizationMs;
    respectRetryAfterHeader = respectRetryAfterHeader === VOID ? true : respectRetryAfterHeader;
    var tmp;
    if ($super === VOID) {
      this.t4j(base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader);
      tmp = Unit_instance;
    } else {
      tmp = $super.t4j.call(this, base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader);
    }
    return tmp;
  };
  function HttpRetryShouldRetryContext(retryCount) {
    this.u4j_1 = retryCount;
  }
  function HttpRetryDelayContext(request, response, cause) {
    this.z4i_1 = request;
    this.a4j_1 = response;
    this.b4j_1 = cause;
  }
  function HttpRetryModifyRequestContext(request, response, cause, retryCount) {
    this.v4j_1 = request;
    this.w4j_1 = response;
    this.x4j_1 = cause;
    this.y4j_1 = retryCount;
  }
  function throwOnInvalidResponseBody(_this__u8e3s4, $completion) {
    var tmp = new $throwOnInvalidResponseBodyCOROUTINE$(_this__u8e3s4, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function isTimeoutException(_this__u8e3s4) {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    var exception = unwrapCancellationException(_this__u8e3s4);
    var tmp;
    var tmp_0;
    if (exception instanceof HttpRequestTimeoutException) {
      tmp_0 = true;
    } else {
      tmp_0 = exception instanceof ConnectTimeoutException;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = exception instanceof SocketTimeoutException;
    }
    return tmp;
  }
  function HttpRequestRetryConfig$_init_$ref_mqbboi() {
    return constructCallableReference(function () {
      return new HttpRequestRetryConfig();
    }, 0, 0, 30, '<init>');
  }
  function HttpRequestRetry$lambda($this$createClientPlugin) {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    var shouldRetry = $this$createClientPlugin.c46_1.k4j();
    var shouldRetryOnException = $this$createClientPlugin.c46_1.l4j();
    var delayMillis = $this$createClientPlugin.c46_1.m4j();
    var delay = $this$createClientPlugin.c46_1.f4j_1;
    var maxRetries = $this$createClientPlugin.c46_1.h4j_1;
    var modifyRequest = $this$createClientPlugin.c46_1.g4j_1;
    $this$createClientPlugin.l4k(HttpRequestRetry$lambda$slambda_0(maxRetries, null));
    var tmp = Send_instance;
    $this$createClientPlugin.f46(tmp, HttpRequestRetry$lambda$slambda_2(shouldRetry, shouldRetryOnException, maxRetries, delayMillis, modifyRequest, $this$createClientPlugin, delay, null));
    return Unit_instance;
  }
  function HttpRequestRetry$lambda$prepareRequest$lambda($subRequest) {
    return function (cause) {
      var tmp = $subRequest.f3y_1;
      var subRequestJob = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
      if (cause == null) {
        subRequestJob.i1l();
      } else {
        subRequestJob.h1l(cause);
      }
      return Unit_instance;
    };
  }
  function invoke$shouldRetry(retryCount, maxRetries, shouldRetry, call) {
    return retryCount < maxRetries && shouldRetry(new HttpRetryShouldRetryContext(retryCount + 1 | 0), call.k3z(), call.b3x());
  }
  function invoke$shouldRetryOnException(retryCount, maxRetries, shouldRetry, subRequest, cause) {
    return retryCount < maxRetries && shouldRetry(new HttpRetryShouldRetryContext(retryCount + 1 | 0), subRequest, cause);
  }
  function invoke$prepareRequest(request) {
    var subRequest = (new HttpRequestBuilder()).m4k(request);
    var tmp = request.f3y_1;
    tmp.i1f(HttpRequestRetry$lambda$prepareRequest$lambda(subRequest));
    return subRequest;
  }
  function HttpRequestRetry$lambda$slambda($maxRetries, resultContinuation) {
    this.v4k_1 = $maxRetries;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetry$lambda$slambda).z4k = function ($this$onRequest, request, _unused_var__etf5q3, $completion) {
    var tmp = this.a4l($this$onRequest, request, _unused_var__etf5q3, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpRequestRetry$lambda$slambda).b4l = function (p1, p2, p3, $completion) {
    var tmp = p1 instanceof OnRequestContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
    return this.z4k(tmp, tmp_0, !(p3 == null) ? p3 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetry$lambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        if (tmp === 0) {
          this.p8_1 = 1;
          var tmp0_elvis_lhs = this.x4k_1.g3y_1.u2c(get_MaxRetriesPerRequestAttributeKey());
          var maxRetriesValue = tmp0_elvis_lhs == null ? this.v4k_1 : tmp0_elvis_lhs;
          this.x4k_1.g3y_1.w2c(get_MaxRetriesPerRequestAttributeKey(), maxRetriesValue);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpRequestRetry$lambda$slambda).a4l = function ($this$onRequest, request, _unused_var__etf5q3, completion) {
    var i = new HttpRequestRetry$lambda$slambda(this.v4k_1, completion);
    i.w4k_1 = $this$onRequest;
    i.x4k_1 = request;
    i.y4k_1 = _unused_var__etf5q3;
    return i;
  };
  function HttpRequestRetry$lambda$slambda_0($maxRetries, resultContinuation) {
    var i = new HttpRequestRetry$lambda$slambda($maxRetries, resultContinuation);
    return constructCallableReference(function ($this$onRequest, request, _unused_var__etf5q3, $completion) {
      return i.z4k($this$onRequest, request, _unused_var__etf5q3, $completion);
    }, 3);
  }
  function HttpRequestRetry$lambda$slambda_1($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation) {
    this.k4l_1 = $shouldRetry;
    this.l4l_1 = $shouldRetryOnException;
    this.m4l_1 = $maxRetries;
    this.n4l_1 = $delayMillis;
    this.o4l_1 = $modifyRequest;
    this.p4l_1 = $this_createClientPlugin;
    this.q4l_1 = $delay;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetry$lambda$slambda_1).l4c = function ($this$on, request, $completion) {
    var tmp = this.m4c($this$on, request, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.l4c(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 8;
            this.u4l_1 = 0;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.s4l_1.g3y_1.u2c(get_ShouldRetryPerRequestAttributeKey());
            tmp_0.b4m_1 = tmp0_elvis_lhs == null ? this.k4l_1 : tmp0_elvis_lhs;
            var tmp_1 = this;
            var tmp1_elvis_lhs = this.s4l_1.g3y_1.u2c(get_ShouldRetryOnExceptionPerRequestAttributeKey());
            tmp_1.z4l_1 = tmp1_elvis_lhs == null ? this.l4l_1 : tmp1_elvis_lhs;
            var tmp_2 = this;
            var tmp2_elvis_lhs = this.s4l_1.g3y_1.u2c(get_MaxRetriesPerRequestAttributeKey());
            tmp_2.a4m_1 = tmp2_elvis_lhs == null ? this.m4l_1 : tmp2_elvis_lhs;
            var tmp_3 = this;
            var tmp3_elvis_lhs = this.s4l_1.g3y_1.u2c(get_RetryDelayPerRequestAttributeKey());
            tmp_3.v4l_1 = tmp3_elvis_lhs == null ? this.n4l_1 : tmp3_elvis_lhs;
            var tmp_4 = this;
            var tmp4_elvis_lhs = this.s4l_1.g3y_1.u2c(get_ModifyRequestPerRequestAttributeKey());
            tmp_4.c4m_1 = tmp4_elvis_lhs == null ? this.o4l_1 : tmp4_elvis_lhs;
            this.w4l_1 = null;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.o8_1 = 9;
              continue $sm;
            }

            this.y4l_1 = invoke$prepareRequest(this.s4l_1);
            this.p8_1 = 5;
            if (!(this.w4l_1 == null)) {
              var modifyRequestContext = new HttpRetryModifyRequestContext(this.s4l_1, this.w4l_1.m4i_1, this.w4l_1.n4i_1, this.w4l_1.l4i_1);
              this.c4m_1(modifyRequestContext, this.y4l_1);
            }

            this.o8_1 = 2;
            suspendResult = this.r4l_1.p4c(this.y4l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.t4l_1 = suspendResult;
            if (!invoke$shouldRetry(this.u4l_1, this.a4m_1, this.b4m_1, this.t4l_1)) {
              this.o8_1 = 4;
              suspendResult = throwOnInvalidResponseBody(this.t4l_1.b3x(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o8_1 = 3;
              continue $sm;
            }

          case 3:
            var tmp_5 = this;
            this.u4l_1 = this.u4l_1 + 1 | 0;
            tmp_5.x4l_1 = new HttpRetryEventData(this.y4l_1, this.u4l_1, this.t4l_1.b3x(), null);
            this.p8_1 = 8;
            this.o8_1 = 6;
            continue $sm;
          case 4:
            this.p8_1 = 8;
            this.o8_1 = 9;
            continue $sm;
          case 5:
            this.p8_1 = 8;
            var tmp_6 = this.r8_1;
            if (tmp_6 instanceof Error) {
              var cause = this.r8_1;
              var tmp_7 = this;
              if (!invoke$shouldRetryOnException(this.u4l_1, this.a4m_1, this.z4l_1, this.y4l_1, cause)) {
                throw cause;
              }
              this.u4l_1 = this.u4l_1 + 1 | 0;
              tmp_7.x4l_1 = new HttpRetryEventData(this.y4l_1, this.u4l_1, null, cause);
              this.o8_1 = 6;
              continue $sm;
            } else {
              throw this.r8_1;
            }

          case 6:
            this.p8_1 = 8;
            var retryData = this.x4l_1;
            this.w4l_1 = retryData;
            this.p4l_1.b46_1.c3w_1.y3g(get_HttpRequestRetryEvent(), this.w4l_1);
            var delayContext = new HttpRetryDelayContext(this.w4l_1.k4i_1, this.w4l_1.m4i_1, this.w4l_1.n4i_1);
            this.o8_1 = 7;
            suspendResult = this.q4l_1(this.v4l_1(delayContext, this.u4l_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var this_0 = get_LOGGER_5();
            if (get_isTraceEnabled(this_0)) {
              this_0.n2j('Retrying request ' + this.s4l_1.b3y_1.toString() + ' attempt: ' + this.u4l_1);
            }

            this.o8_1 = 1;
            continue $sm;
          case 8:
            throw this.r8_1;
          case 9:
            return this.t4l_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 8) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).m4c = function ($this$on, request, completion) {
    var i = new HttpRequestRetry$lambda$slambda_1(this.k4l_1, this.l4l_1, this.m4l_1, this.n4l_1, this.o4l_1, this.p4l_1, this.q4l_1, completion);
    i.r4l_1 = $this$on;
    i.s4l_1 = request;
    return i;
  };
  function HttpRequestRetry$lambda$slambda_2($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation) {
    var i = new HttpRequestRetry$lambda$slambda_1($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.l4c($this$on, request, $completion);
    }, 2);
  }
  function $throwOnInvalidResponseBodyCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h4k_1 = _this__u8e3s4;
  }
  protoOf($throwOnInvalidResponseBodyCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 6;
            if (get_isSaved(this.h4k_1)) {
              this.i4k_1 = this.h4k_1.z3z();
              this.o8_1 = 1;
              continue $sm;
            } else {
              this.j4k_1 = false;
              this.o8_1 = 4;
              continue $sm;
            }

          case 1:
            this.p8_1 = 5;
            this.o8_1 = 2;
            suspendResult = this.i4k_1.x21(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.k4k_1 = suspendResult;
            this.p8_1 = 6;
            this.o8_1 = 3;
            continue $sm;
          case 3:
            var tmp_0 = this.k4k_1;
            this.p8_1 = 6;
            var this_0 = this.i4k_1;
            var tmp_1;
            try {
              cancel_1(this_0);
              tmp_1 = _Result___init__impl__xyqfz8(Unit_instance);
            } catch ($p) {
              var tmp_2;
              if ($p instanceof Error) {
                var e = $p;
                tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_1 = tmp_2;
            }

            var this_1 = tmp_1;
            var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(this_1);
            if (tmp0_safe_receiver == null)
              null;
            else {
              get_LOGGER_5().m2j('Failed to close response body channel', tmp0_safe_receiver);
            }

            this.j4k_1 = tmp_0;
            this.o8_1 = 4;
            continue $sm;
          case 4:
            return this.j4k_1;
          case 5:
            this.p8_1 = 6;
            var t = this.r8_1;
            var this_2 = this.i4k_1;
            var tmp_3;
            try {
              cancel_1(this_2);
              tmp_3 = _Result___init__impl__xyqfz8(Unit_instance);
            } catch ($p_0) {
              var tmp_4;
              if ($p_0 instanceof Error) {
                var e_0 = $p_0;
                tmp_4 = _Result___init__impl__xyqfz8(createFailure(e_0));
              } else {
                throw $p_0;
              }
              tmp_3 = tmp_4;
            }

            var this_3 = tmp_3;
            var tmp0_safe_receiver_0 = Result__exceptionOrNull_impl_p6xea9(this_3);
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              get_LOGGER_5().m2j('Failed to close response body channel', tmp0_safe_receiver_0);
            }

            throw t;
          case 6:
            throw this.r8_1;
        }
      } catch ($p_1) {
        var e_1 = $p_1;
        if (this.p8_1 === 6) {
          throw e_1;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e_1;
        }
      }
     while (true);
  };
  var properties_initialized_HttpRequestRetry_kt_jcpv6l;
  function _init_properties_HttpRequestRetry_kt__h4xjtt() {
    if (!properties_initialized_HttpRequestRetry_kt_jcpv6l) {
      properties_initialized_HttpRequestRetry_kt_jcpv6l = true;
      LOGGER_5 = KtorSimpleLogger('io.ktor.client.plugins.HttpRequestRetry');
      HttpRequestRetryEvent = new EventDefinition();
      var tmp = HttpRequestRetryConfig$_init_$ref_mqbboi();
      HttpRequestRetry = createClientPlugin_0('RetryFeature', tmp, HttpRequestRetry$lambda);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'MaxRetriesPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_0 = PrimitiveClasses_getInstance().qb();
      var tmp_1 = !(null == null) ? typeof null === 'number' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_2;
      try {
        tmp_2 = createKType(PrimitiveClasses_getInstance().qb(), arrayOf([]), false);
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
      var tmp$ret$2 = tmp_2;
      var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
      MaxRetriesPerRequestAttributeKey = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'ShouldRetryPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_4 = PrimitiveClasses_getInstance().functionClass(3);
      var tmp_5 = !(null == null) ? typeof null === 'function' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_6;
      try {
        tmp_6 = createKType(PrimitiveClasses_getInstance().functionClass(3), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryShouldRetryContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequest_0), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpResponse), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nb(), arrayOf([]), false))]), false);
      } catch ($p_0) {
        var tmp_7;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_7 = null;
        } else {
          throw $p_0;
        }
        tmp_6 = tmp_7;
      }
      var tmp$ret$2_0 = tmp_6;
      var tmp$ret$1_0 = new TypeInfo(tmp_4, tmp_5, tmp$ret$2_0);
      ShouldRetryPerRequestAttributeKey = new AttributeKey(name_0, tmp$ret$1_0);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_1 = 'ShouldRetryOnExceptionPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_8 = PrimitiveClasses_getInstance().functionClass(3);
      var tmp_9 = !(null == null) ? typeof null === 'function' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_10;
      try {
        tmp_10 = createKType(PrimitiveClasses_getInstance().functionClass(3), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryShouldRetryContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequestBuilder), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().wb(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nb(), arrayOf([]), false))]), false);
      } catch ($p_1) {
        var tmp_11;
        if ($p_1 instanceof Error) {
          var _unused_var__etf5q3_1 = $p_1;
          tmp_11 = null;
        } else {
          throw $p_1;
        }
        tmp_10 = tmp_11;
      }
      var tmp$ret$2_1 = tmp_10;
      var tmp$ret$1_1 = new TypeInfo(tmp_8, tmp_9, tmp$ret$2_1);
      ShouldRetryOnExceptionPerRequestAttributeKey = new AttributeKey(name_1, tmp$ret$1_1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_2 = 'ModifyRequestPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_12 = PrimitiveClasses_getInstance().functionClass(2);
      var tmp_13 = !(null == null) ? typeof null === 'function' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_14;
      try {
        tmp_14 = createKType(PrimitiveClasses_getInstance().functionClass(2), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryModifyRequestContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequestBuilder), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(Unit), arrayOf([]), false))]), false);
      } catch ($p_2) {
        var tmp_15;
        if ($p_2 instanceof Error) {
          var _unused_var__etf5q3_2 = $p_2;
          tmp_15 = null;
        } else {
          throw $p_2;
        }
        tmp_14 = tmp_15;
      }
      var tmp$ret$2_2 = tmp_14;
      var tmp$ret$1_2 = new TypeInfo(tmp_12, tmp_13, tmp$ret$2_2);
      ModifyRequestPerRequestAttributeKey = new AttributeKey(name_2, tmp$ret$1_2);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_3 = 'RetryDelayPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_16 = PrimitiveClasses_getInstance().functionClass(2);
      var tmp_17 = !(null == null) ? typeof null === 'function' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_18;
      try {
        tmp_18 = createKType(PrimitiveClasses_getInstance().functionClass(2), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryDelayContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().qb(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().rb(), arrayOf([]), false))]), false);
      } catch ($p_3) {
        var tmp_19;
        if ($p_3 instanceof Error) {
          var _unused_var__etf5q3_3 = $p_3;
          tmp_19 = null;
        } else {
          throw $p_3;
        }
        tmp_18 = tmp_19;
      }
      var tmp$ret$2_3 = tmp_18;
      var tmp$ret$1_3 = new TypeInfo(tmp_16, tmp_17, tmp$ret$2_3);
      RetryDelayPerRequestAttributeKey = new AttributeKey(name_3, tmp$ret$1_3);
    }
  }
  function Sender() {
  }
  function HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.m4m_1 = $plugin;
    this.n4m_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpSend$Plugin$install$slambda).u3w = function ($this$intercept, content, $completion) {
    var tmp = this.v3w($this$intercept, content, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpSend$Plugin$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.u3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpSend$Plugin$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            var tmp_0 = this.p4m_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var message = trimMargin('\n|Fail to prepare request body for sending. \n|The body type is: ' + toString(getKClassFromExpression(this.p4m_1)) + ', with Content-Type: ' + toString_0(contentType(this.o4m_1.o2i_1)) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.');
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp0 = this.o4m_1.o2i_1;
            var body = this.p4m_1;
            if (body == null) {
              tmp0.e3y_1 = NullBody_instance;
              var tmp_1 = getKClass(OutgoingContent);
              var tmp_2 = null instanceof OutgoingContent;
              var tmp_3;
              try {
                tmp_3 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
              } catch ($p) {
                var tmp_4;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                  tmp_4 = null;
                } else {
                  throw $p;
                }
                tmp_3 = tmp_4;
              }
              tmp0.w43(new TypeInfo(tmp_1, tmp_2, tmp_3));
            } else {
              if (body instanceof OutgoingContent) {
                tmp0.e3y_1 = body;
                tmp0.w43(null);
              } else {
                tmp0.e3y_1 = body;
                var tmp_5 = getKClass(OutgoingContent);
                var tmp_6 = null instanceof OutgoingContent;
                var tmp_7;
                try {
                  tmp_7 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
                } catch ($p_0) {
                  var tmp_8;
                  if ($p_0 instanceof Error) {
                    var _unused_var__etf5q3_0 = $p_0;
                    tmp_8 = null;
                  } else {
                    throw $p_0;
                  }
                  tmp_7 = tmp_8;
                }
                tmp0.w43(new TypeInfo(tmp_5, tmp_6, tmp_7));
              }
            }

            var maxRetries = this.o4m_1.o2i_1.g3y_1.u2c(get_MaxRetriesPerRequestAttributeKey());
            var tmp_9;
            if (!(maxRetries == null) && maxRetries >= this.m4m_1.q4m_1) {
              var tmp_10;
              if (maxRetries < 2147483647) {
                tmp_10 = maxRetries + 1 | 0;
              } else {
                tmp_10 = maxRetries;
              }
              tmp_9 = tmp_10;
            } else {
              tmp_9 = this.m4m_1.q4m_1;
            }

            var maxSendCount = tmp_9;
            var realSender = new DefaultSender(maxSendCount, this.n4m_1);
            var interceptedSender = realSender;
            var _iterator__ex2g4s = reversed(this.m4m_1.r4m_1).t();
            while (_iterator__ex2g4s.u()) {
              var interceptor = _iterator__ex2g4s.v();
              interceptedSender = new InterceptedSender(interceptor, interceptedSender);
            }

            this.o8_1 = 1;
            suspendResult = interceptedSender.d4m(this.o4m_1.o2i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var call = suspendResult;
            this.o8_1 = 2;
            suspendResult = this.o4m_1.s2h(call, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.r8_1;
        }
      } catch ($p_1) {
        var e = $p_1;
        if (this.p8_1 === 3) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpSend$Plugin$install$slambda).v3w = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.m4m_1, this.n4m_1, completion);
    i.o4m_1 = $this$intercept;
    i.p4m_1 = content;
    return i;
  };
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.u3w($this$intercept, content, $completion);
    }, 2);
  }
  function $executeCOROUTINE$_0(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a4n_1 = _this__u8e3s4;
    this.b4n_1 = requestBuilder;
  }
  protoOf($executeCOROUTINE$_0).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            var tmp0_safe_receiver = this.a4n_1.f4n_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel(tmp0_safe_receiver);
            }

            if (this.a4n_1.e4n_1 >= this.a4n_1.c4n_1) {
              throw new SendCountExceedException('Max send count ' + this.a4n_1.c4n_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var _unary__edvuaz = this.a4n_1.e4n_1;
            this.a4n_1.e4n_1 = _unary__edvuaz + 1 | 0;
            this.o8_1 = 1;
            suspendResult = this.a4n_1.d4n_1.y3v_1.n2i(this.b4n_1, this.b4n_1.e3y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var sendResult = suspendResult;
            var tmp1_elvis_lhs = sendResult instanceof HttpClientCall ? sendResult : null;
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
              var message = 'Failed to execute send pipeline. Expected [HttpClientCall], but received ' + toString(sendResult);
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              tmp_0 = tmp1_elvis_lhs;
            }

            var call = tmp_0;
            this.a4n_1.f4n_1 = call;
            return call;
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
  function Config() {
    this.g4n_1 = 20;
  }
  function Plugin() {
    Plugin_instance = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'HttpSend';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(HttpSend);
    var tmp_1 = null instanceof HttpSend;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(getKClass(HttpSend), arrayOf([]), false);
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
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.h4n_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin).m1 = function () {
    return this.h4n_1;
  };
  protoOf(Plugin).i4n = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config();
    block(this_0);
    var config = this_0;
    return new HttpSend(config.g4n_1);
  };
  protoOf(Plugin).g3z = function (block) {
    return this.i4n(block);
  };
  protoOf(Plugin).j4n = function (plugin, scope) {
    var tmp = Phases_getInstance().h45_1;
    scope.w3v_1.s2i(tmp, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  protoOf(Plugin).h3z = function (plugin, scope) {
    return this.j4n(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.k4n_1 = interceptor;
    this.l4n_1 = nextSender;
  }
  protoOf(InterceptedSender).d4m = function (requestBuilder, $completion) {
    return this.k4n_1(this.l4n_1, requestBuilder, $completion);
  };
  function DefaultSender(maxSendCount, client) {
    this.c4n_1 = maxSendCount;
    this.d4n_1 = client;
    this.e4n_1 = 0;
    this.f4n_1 = null;
  }
  protoOf(DefaultSender).d4m = function (requestBuilder, $completion) {
    var tmp = new $executeCOROUTINE$_0(this, requestBuilder, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  function HttpSend(maxSendCount) {
    Plugin_getInstance();
    maxSendCount = maxSendCount === VOID ? 20 : maxSendCount;
    this.q4m_1 = maxSendCount;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.r4m_1 = ArrayList_init_$Create$();
  }
  protoOf(HttpSend).m4n = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.r4m_1.c1(block);
  };
  function SendCountExceedException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, SendCountExceedException);
  }
  function get_LOGGER_6() {
    _init_properties_HttpTimeout_kt__pucqrr();
    return LOGGER_6;
  }
  var LOGGER_6;
  var HttpTimeout;
  function HttpTimeoutCapability() {
  }
  protoOf(HttpTimeoutCapability).toString = function () {
    return 'HttpTimeoutCapability';
  };
  protoOf(HttpTimeoutCapability).hashCode = function () {
    return 2058496954;
  };
  protoOf(HttpTimeoutCapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpTimeoutCapability))
      return false;
    return true;
  };
  var HttpTimeoutCapability_instance;
  function HttpTimeoutCapability_getInstance() {
    return HttpTimeoutCapability_instance;
  }
  function HttpRequestTimeoutException_init_$Init$(request, $this) {
    var tmp = request.b3y_1.c2x();
    var tmp0_safe_receiver = request.n4n(HttpTimeoutCapability_instance);
    HttpRequestTimeoutException.call($this, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r4n());
    return $this;
  }
  function HttpRequestTimeoutException_init_$Create$(request) {
    var tmp = HttpRequestTimeoutException_init_$Init$(request, objectCreate(protoOf(HttpRequestTimeoutException)));
    captureStack(tmp, HttpRequestTimeoutException_init_$Create$);
    return tmp;
  }
  function HttpRequestTimeoutException(url, timeoutMillis, cause) {
    cause = cause === VOID ? null : cause;
    IOException_init_$Init$('Request timeout has expired [url=' + url + ', request_timeout=' + toString(timeoutMillis == null ? 'unknown' : timeoutMillis) + ' ms]', cause, this);
    captureStack(this, HttpRequestTimeoutException);
    this.s4n_1 = url;
    this.t4n_1 = timeoutMillis;
  }
  protoOf(HttpRequestTimeoutException).r1l = function () {
    return new HttpRequestTimeoutException(this.s4n_1, this.t4n_1, this.cause);
  };
  function HttpTimeoutConfig_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    requestTimeoutMillis = requestTimeoutMillis === VOID ? null : requestTimeoutMillis;
    connectTimeoutMillis = connectTimeoutMillis === VOID ? null : connectTimeoutMillis;
    socketTimeoutMillis = socketTimeoutMillis === VOID ? null : socketTimeoutMillis;
    HttpTimeoutConfig.call($this);
    $this.u4n(requestTimeoutMillis);
    $this.v4n(connectTimeoutMillis);
    $this.w4n(socketTimeoutMillis);
    return $this;
  }
  function HttpTimeoutConfig_init_$Create$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    return HttpTimeoutConfig_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, objectCreate(protoOf(HttpTimeoutConfig)));
  }
  function checkTimeoutValue($this, value) {
    // Inline function 'kotlin.require' call
    if (!(value == null || compare(value, new Long(0, 0)) > 0)) {
      var message = 'Only positive timeout values are allowed, for infinite timeout use HttpTimeoutConfig.INFINITE_TIMEOUT_MS';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return value;
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.x4n_1 = new Long(-1, 2147483647);
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'TimeoutConfiguration';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(HttpTimeoutConfig);
    var tmp_1 = null instanceof HttpTimeoutConfig;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(getKClass(HttpTimeoutConfig), arrayOf([]), false);
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
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.y4n_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_2;
  function Companion_getInstance_11() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  protoOf(HttpTimeoutConfig).u4n = function (value) {
    this.o4n_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).r4n = function () {
    return this.o4n_1;
  };
  protoOf(HttpTimeoutConfig).v4n = function (value) {
    this.p4n_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).z4n = function () {
    return this.p4n_1;
  };
  protoOf(HttpTimeoutConfig).w4n = function (value) {
    this.q4n_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).a4o = function () {
    return this.q4n_1;
  };
  protoOf(HttpTimeoutConfig).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof HttpTimeoutConfig))
      THROW_CCE();
    if (!equals(this.o4n_1, other.o4n_1))
      return false;
    if (!equals(this.p4n_1, other.p4n_1))
      return false;
    if (!equals(this.q4n_1, other.q4n_1))
      return false;
    return true;
  };
  protoOf(HttpTimeoutConfig).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.o4n_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.p4n_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.q4n_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    result = tmp_0 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    return result;
  };
  function HttpTimeoutConfig() {
    Companion_getInstance_11();
    this.o4n_1 = new Long(0, 0);
    this.p4n_1 = new Long(0, 0);
    this.q4n_1 = new Long(0, 0);
  }
  function get_supportsRequestTimeout(_this__u8e3s4) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var tmp;
    var tmp_0;
    if (!isWebsocket(_this__u8e3s4.b3y_1.s2v())) {
      var tmp_1 = _this__u8e3s4.e3y_1;
      tmp_0 = !(tmp_1 instanceof ClientUpgradeContent);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_2 = _this__u8e3s4.e3y_1;
      tmp = !(tmp_2 instanceof SSEClientContent);
    } else {
      tmp = false;
    }
    return tmp;
  }
  function applyRequestTimeout(_this__u8e3s4, request, requestTimeout) {
    _init_properties_HttpTimeout_kt__pucqrr();
    if (requestTimeout == null || equals(requestTimeout, new Long(-1, 2147483647)))
      return Unit_instance;
    var executionContext = request.f3y_1;
    var tmp = new CoroutineName('request-timeout');
    var killer = launch(_this__u8e3s4, tmp, VOID, applyRequestTimeout$slambda_0(requestTimeout, request, executionContext, null));
    var tmp_0 = request.f3y_1;
    tmp_0.i1f(applyRequestTimeout$lambda(killer));
  }
  function timeout(_this__u8e3s4, block) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var tmp = HttpTimeoutCapability_instance;
    // Inline function 'kotlin.apply' call
    var this_0 = HttpTimeoutConfig_init_$Create$();
    block(this_0);
    return _this__u8e3s4.b4o(tmp, this_0);
  }
  function HttpTimeoutConfig$_init_$ref_dl1k0m() {
    return constructCallableReference(function () {
      return HttpTimeoutConfig_init_$Create$();
    }, 0, 0, 31);
  }
  function HttpTimeout$lambda($this$createClientPlugin) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var requestTimeoutMillis = $this$createClientPlugin.c46_1.r4n();
    var connectTimeoutMillis = $this$createClientPlugin.c46_1.z4n();
    var socketTimeoutMillis = $this$createClientPlugin.c46_1.a4o();
    var tmp = Send_instance;
    $this$createClientPlugin.f46(tmp, HttpTimeout$lambda$slambda_0(connectTimeoutMillis, socketTimeoutMillis, requestTimeoutMillis, null));
    return Unit_instance;
  }
  function invoke$hasNotNullTimeouts(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, supportsRequestTimeout) {
    return supportsRequestTimeout && !(requestTimeoutMillis == null) || !(connectTimeoutMillis == null) || !(socketTimeoutMillis == null);
  }
  function HttpTimeout$lambda$slambda($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation) {
    this.k4o_1 = $connectTimeoutMillis;
    this.l4o_1 = $socketTimeoutMillis;
    this.m4o_1 = $requestTimeoutMillis;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpTimeout$lambda$slambda).l4c = function ($this$on, request, $completion) {
    var tmp = this.m4c($this$on, request, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpTimeout$lambda$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.l4c(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpTimeout$lambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            var supportsRequestTimeout = get_supportsRequestTimeout(this.o4o_1);
            var configuration = this.o4o_1.n4n(HttpTimeoutCapability_instance);
            if (configuration == null && invoke$hasNotNullTimeouts(this.m4o_1, this.k4o_1, this.l4o_1, supportsRequestTimeout)) {
              configuration = HttpTimeoutConfig_init_$Create$();
              this.o4o_1.b4o(HttpTimeoutCapability_instance, configuration);
            }

            var tmp0_safe_receiver = configuration;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp0_elvis_lhs = tmp0_safe_receiver.z4n();
              tmp0_safe_receiver.v4n(tmp0_elvis_lhs == null ? this.k4o_1 : tmp0_elvis_lhs);
              var tmp1_elvis_lhs = tmp0_safe_receiver.a4o();
              tmp0_safe_receiver.w4n(tmp1_elvis_lhs == null ? this.l4o_1 : tmp1_elvis_lhs);
              if (supportsRequestTimeout) {
                var tmp2_elvis_lhs = tmp0_safe_receiver.r4n();
                tmp0_safe_receiver.u4n(tmp2_elvis_lhs == null ? this.m4o_1 : tmp2_elvis_lhs);
                applyRequestTimeout(this.n4o_1, this.o4o_1, tmp0_safe_receiver.r4n());
              }
            }

            this.o8_1 = 1;
            suspendResult = this.n4o_1.p4c(this.o4o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(HttpTimeout$lambda$slambda).m4c = function ($this$on, request, completion) {
    var i = new HttpTimeout$lambda$slambda(this.k4o_1, this.l4o_1, this.m4o_1, completion);
    i.n4o_1 = $this$on;
    i.o4o_1 = request;
    return i;
  };
  function HttpTimeout$lambda$slambda_0($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation) {
    var i = new HttpTimeout$lambda$slambda($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.l4c($this$on, request, $completion);
    }, 2);
  }
  function applyRequestTimeout$slambda($requestTimeout, $request, $executionContext, resultContinuation) {
    this.x4o_1 = $requestTimeout;
    this.y4o_1 = $request;
    this.z4o_1 = $executionContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(applyRequestTimeout$slambda).q2a = function ($this$launch, $completion) {
    var tmp = this.r2a($this$launch, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(applyRequestTimeout$slambda).k9 = function (p1, $completion) {
    return this.q2a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(applyRequestTimeout$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.o8_1 = 1;
            Companion_getInstance_3();
            var this_0 = this.x4o_1;
            suspendResult = delay_0(toDuration(this_0, DurationUnit_MILLISECONDS_getInstance()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cause = HttpRequestTimeoutException_init_$Create$(this.y4o_1);
            var this_1 = get_LOGGER_6();
            if (get_isTraceEnabled(this_1)) {
              this_1.n2j('Request timeout: ' + this.y4o_1.b3y_1.toString());
            }

            cancel_2(this.z4o_1, ensureNotNull(cause.message), cause);
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
  protoOf(applyRequestTimeout$slambda).r2a = function ($this$launch, completion) {
    var i = new applyRequestTimeout$slambda(this.x4o_1, this.y4o_1, this.z4o_1, completion);
    i.a4p_1 = $this$launch;
    return i;
  };
  function applyRequestTimeout$slambda_0($requestTimeout, $request, $executionContext, resultContinuation) {
    var i = new applyRequestTimeout$slambda($requestTimeout, $request, $executionContext, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.q2a($this$launch, $completion);
    }, 1);
  }
  function applyRequestTimeout$lambda($killer) {
    return function (it) {
      $killer.q1f();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpTimeout_kt_9oyjbd;
  function _init_properties_HttpTimeout_kt__pucqrr() {
    if (!properties_initialized_HttpTimeout_kt_9oyjbd) {
      properties_initialized_HttpTimeout_kt_9oyjbd = true;
      LOGGER_6 = KtorSimpleLogger('io.ktor.client.plugins.HttpTimeout');
      var tmp = HttpTimeoutConfig$_init_$ref_dl1k0m();
      HttpTimeout = createClientPlugin_0('HttpTimeout', tmp, HttpTimeout$lambda);
    }
  }
  function get_SKIP_SAVE_BODY() {
    _init_properties_SaveBody_kt__lbc3fj();
    return SKIP_SAVE_BODY;
  }
  var SKIP_SAVE_BODY;
  function get_RESPONSE_BODY_SAVED() {
    _init_properties_SaveBody_kt__lbc3fj();
    return RESPONSE_BODY_SAVED;
  }
  var RESPONSE_BODY_SAVED;
  function get_LOGGER_7() {
    _init_properties_SaveBody_kt__lbc3fj();
    var tmp0 = LOGGER$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('LOGGER', 0, tmp, _get_LOGGER_$ref_77hhxy(), null);
    return tmp0.n1();
  }
  var LOGGER$delegate;
  function get_SaveBody() {
    _init_properties_SaveBody_kt__lbc3fj();
    return SaveBody;
  }
  var SaveBody;
  var SaveBodyPlugin;
  function get_isSaved(_this__u8e3s4) {
    _init_properties_SaveBody_kt__lbc3fj();
    return _this__u8e3s4.r3z().l3z().v2c(get_RESPONSE_BODY_SAVED());
  }
  function tryCancelBody(_this__u8e3s4, e) {
    e = e === VOID ? null : e;
    _init_properties_SaveBody_kt__lbc3fj();
    var byteChannel = _this__u8e3s4.z3z();
    if (!byteChannel.t21()) {
      try {
        byteChannel.z21(e);
      } catch ($p) {
        if ($p instanceof CancellationException) {
          var cause = $p;
          throw cause;
        } else {
          if ($p instanceof Exception) {
            var cause_0 = $p;
            get_LOGGER_7().m2j('Failed to cancel response body', cause_0);
          } else {
            throw $p;
          }
        }
      }
    }
  }
  function SaveBodyPluginConfig() {
    this.b4p_1 = false;
  }
  function LOGGER$delegate$lambda() {
    _init_properties_SaveBody_kt__lbc3fj();
    return KtorSimpleLogger('io.ktor.client.plugins.SaveBody');
  }
  function _get_LOGGER_$ref_77hhxy() {
    return constructCallableReference(function () {
      return get_LOGGER_7();
    }, 0, 0, 32);
  }
  function SaveBody$lambda($this$createClientPlugin) {
    _init_properties_SaveBody_kt__lbc3fj();
    var tmp = Phases_getInstance_1().x45_1;
    $this$createClientPlugin.b46_1.z3v_1.s2i(tmp, SaveBody$lambda$slambda_0(null));
    return Unit_instance;
  }
  function SaveBody$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SaveBody$lambda$slambda).u45 = function ($this$intercept, response, $completion) {
    var tmp = this.v45($this$intercept, response, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(SaveBody$lambda$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.u45(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SaveBody$lambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 7;
            this.p4p_1 = this.l4p_1.r3z();
            this.m4p_1 = this.p4p_1.l3z();
            if (this.m4p_1.v2c(get_SKIP_SAVE_BODY())) {
              var this_0 = get_LOGGER_7();
              if (get_isTraceEnabled(this_0)) {
                this_0.n2j('Skipping body saving for ' + this.p4p_1.k3z().t3z().toString());
              }
              return Unit_instance;
            }

            this.n4p_1 = null;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.p8_1 = 4;
            this.p8_1 = 3;
            var this_1 = get_LOGGER_7();
            if (get_isTraceEnabled(this_1)) {
              this_1.n2j('Saving body for ' + this.p4p_1.k3z().t3z().toString());
            }

            this.o8_1 = 2;
            suspendResult = save(this.p4p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o4p_1 = suspendResult.b3x();
            this.p8_1 = 7;
            this.o8_1 = 5;
            continue $sm;
          case 3:
            this.p8_1 = 4;
            var tmp_0 = this.r8_1;
            if (tmp_0 instanceof Error) {
              var e = this.r8_1;
              var tmp_1 = this;
              this.n4p_1 = e;
              throw e;
            } else {
              throw this.r8_1;
            }

          case 4:
            this.p8_1 = 7;
            var t = this.r8_1;
            tryCancelBody(this.l4p_1, this.n4p_1);
            throw t;
          case 5:
            var tmp_2 = this.o4p_1;
            this.p8_1 = 7;
            tryCancelBody(this.l4p_1, this.n4p_1);
            var savedResponse = tmp_2;
            this.m4p_1.w2c(get_RESPONSE_BODY_SAVED(), Unit_instance);
            this.o8_1 = 6;
            suspendResult = this.k4p_1.s2h(savedResponse, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.r8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.p8_1 === 7) {
          throw e_0;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(SaveBody$lambda$slambda).v45 = function ($this$intercept, response, completion) {
    var i = new SaveBody$lambda$slambda(completion);
    i.k4p_1 = $this$intercept;
    i.l4p_1 = response;
    return i;
  };
  function SaveBody$lambda$slambda_0(resultContinuation) {
    var i = new SaveBody$lambda$slambda(resultContinuation);
    return constructCallableReference(function ($this$intercept, response, $completion) {
      return i.u45($this$intercept, response, $completion);
    }, 2);
  }
  function SaveBodyPluginConfig$_init_$ref_lwjaof() {
    return constructCallableReference(function () {
      return new SaveBodyPluginConfig();
    }, 0, 0, 33, '<init>');
  }
  function SaveBodyPlugin$lambda($this$createClientPlugin) {
    _init_properties_SaveBody_kt__lbc3fj();
    if ($this$createClientPlugin.c46_1.b4p_1) {
      get_LOGGER_7().l2j('It is no longer possible to disable body saving for all requests. Use client.prepareRequest(...).execute { ... } syntax to prevent saving the body in memory.\n\nThis API is deprecated and will be removed in Ktor 4.0.0\nIf you were relying on this functionality, share your use case by commenting on this issue: https://youtrack.jetbrains.com/issue/KTOR-8367/');
    } else {
      get_LOGGER_7().l2j('The SaveBodyPlugin plugin is deprecated and can be safely removed. Request bodies are now saved in memory by default for all non-streaming responses.');
    }
    return Unit_instance;
  }
  var properties_initialized_SaveBody_kt_hzvee7;
  function _init_properties_SaveBody_kt__lbc3fj() {
    if (!properties_initialized_SaveBody_kt_hzvee7) {
      properties_initialized_SaveBody_kt_hzvee7 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'SkipSaveBody';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Unit);
      var tmp_0 = null instanceof Unit;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(Unit), arrayOf([]), false);
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
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      SKIP_SAVE_BODY = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'ResponseBodySaved';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_3 = getKClass(Unit);
      var tmp_4 = null instanceof Unit;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_5;
      try {
        tmp_5 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_6;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_6 = null;
        } else {
          throw $p_0;
        }
        tmp_5 = tmp_6;
      }
      var tmp$ret$2_0 = tmp_5;
      var tmp$ret$1_0 = new TypeInfo(tmp_3, tmp_4, tmp$ret$2_0);
      RESPONSE_BODY_SAVED = new AttributeKey(name_0, tmp$ret$1_0);
      LOGGER$delegate = lazy(LOGGER$delegate$lambda);
      SaveBody = createClientPlugin('SaveBody', SaveBody$lambda);
      var tmp_7 = SaveBodyPluginConfig$_init_$ref_lwjaof();
      SaveBodyPlugin = createClientPlugin_0('DoubleReceivePlugin', tmp_7, SaveBodyPlugin$lambda);
    }
  }
  function HookHandler(hook, handler) {
    this.q4p_1 = hook;
    this.r4p_1 = handler;
  }
  protoOf(HookHandler).i3y = function (client) {
    this.q4p_1.i45(client, this.r4p_1);
  };
  function ClientPluginBuilder$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginBuilder(key, client, pluginConfig) {
    this.a46_1 = key;
    this.b46_1 = client;
    this.c46_1 = pluginConfig;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.d46_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    tmp_0.e46_1 = ClientPluginBuilder$onClose$lambda;
  }
  protoOf(ClientPluginBuilder).l4k = function (block) {
    this.f46(RequestHook_instance, block);
  };
  protoOf(ClientPluginBuilder).n4e = function (block) {
    this.f46(TransformResponseBodyHook_instance, block);
  };
  protoOf(ClientPluginBuilder).f46 = function (hook, handler) {
    this.d46_1.c1(new HookHandler(hook, handler));
  };
  function ClientPluginInstance$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginInstance(key, config, body) {
    this.s4p_1 = key;
    this.t4p_1 = config;
    this.u4p_1 = body;
    var tmp = this;
    tmp.v4p_1 = ClientPluginInstance$onClose$lambda;
  }
  protoOf(ClientPluginInstance).i3y = function (scope) {
    var tmp0 = new ClientPluginBuilder(this.s4p_1, scope, this.t4p_1);
    // Inline function 'kotlin.apply' call
    this.u4p_1(tmp0);
    var pluginBuilder = tmp0;
    this.v4p_1 = pluginBuilder.e46_1;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = pluginBuilder.d46_1.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      element.i3y(scope);
    }
  };
  protoOf(ClientPluginInstance).i4 = function () {
    this.v4p_1();
  };
  function SetupRequest$install$slambda($handler, resultContinuation) {
    this.e4q_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequest$install$slambda).u3w = function ($this$intercept, it, $completion) {
    var tmp = this.v3w($this$intercept, it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(SetupRequest$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.u3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SetupRequest$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = this.e4q_1(this.f4q_1.o2i_1, this);
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
  protoOf(SetupRequest$install$slambda).v3w = function ($this$intercept, it, completion) {
    var i = new SetupRequest$install$slambda(this.e4q_1, completion);
    i.f4q_1 = $this$intercept;
    i.g4q_1 = it;
    return i;
  };
  function SetupRequest$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequest$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.u3w($this$intercept, it, $completion);
    }, 2);
  }
  function SetupRequest() {
  }
  protoOf(SetupRequest).h4q = function (client, handler) {
    var tmp = Phases_getInstance().d45_1;
    client.w3v_1.s2i(tmp, SetupRequest$install$slambda_0(handler, null));
  };
  protoOf(SetupRequest).i45 = function (client, handler) {
    return this.h4q(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var SetupRequest_instance;
  function SetupRequest_getInstance() {
    return SetupRequest_instance;
  }
  function Sender_0(httpSendSender, coroutineContext) {
    this.n4c_1 = httpSendSender;
    this.o4c_1 = coroutineContext;
  }
  protoOf(Sender_0).g1e = function () {
    return this.o4c_1;
  };
  protoOf(Sender_0).p4c = function (requestBuilder, $completion) {
    return this.n4c_1.d4m(requestBuilder, $completion);
  };
  function Send$install$slambda($handler, $client, resultContinuation) {
    this.q4q_1 = $handler;
    this.r4q_1 = $client;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Send$install$slambda).u4q = function ($this$intercept, request, $completion) {
    var tmp = this.v4q($this$intercept, request, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(Send$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.u4q(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Send$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = this.q4q_1(new Sender_0(this.s4q_1, this.r4q_1.v3v_1), this.t4q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(Send$install$slambda).v4q = function ($this$intercept, request, completion) {
    var i = new Send$install$slambda(this.q4q_1, this.r4q_1, completion);
    i.s4q_1 = $this$intercept;
    i.t4q_1 = request;
    return i;
  };
  function Send$install$slambda_0($handler, $client, resultContinuation) {
    var i = new Send$install$slambda($handler, $client, resultContinuation);
    return constructCallableReference(function ($this$intercept, request, $completion) {
      return i.u4q($this$intercept, request, $completion);
    }, 2);
  }
  function Send() {
  }
  protoOf(Send).w4q = function (client, handler) {
    var tmp = plugin(client, Plugin_getInstance());
    tmp.m4n(Send$install$slambda_0(handler, client, null));
  };
  protoOf(Send).i45 = function (client, handler) {
    return this.w4q(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var Send_instance;
  function Send_getInstance() {
    return Send_instance;
  }
  function createClientPlugin(name, body) {
    return createClientPlugin_0(name, createClientPlugin$lambda, body);
  }
  function createClientPlugin_0(name, createConfiguration, body) {
    return new ClientPluginImpl(name, createConfiguration, body);
  }
  function ClientPluginImpl(name, createConfiguration, body) {
    this.x4q_1 = createConfiguration;
    this.y4q_1 = body;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(ClientPluginInstance);
    var tmp_1 = null instanceof ClientPluginInstance;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(getKClass(ClientPluginInstance), arrayOf([createInvariantKTypeProjection(createKType(createKTypeParameter('PluginConfigT', arrayOf([createKType(PrimitiveClasses_getInstance().kb(), arrayOf([]), false)]), 'invariant', false, 'io.ktor.client.plugins.api.ClientPluginImpl'), arrayOf([]), false))]), false);
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
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.z4q_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(ClientPluginImpl).m1 = function () {
    return this.z4q_1;
  };
  protoOf(ClientPluginImpl).a4r = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.x4q_1();
    block(this_0);
    var config = this_0;
    return new ClientPluginInstance(this.z4q_1, config, this.y4q_1);
  };
  protoOf(ClientPluginImpl).g3z = function (block) {
    return this.a4r(block);
  };
  protoOf(ClientPluginImpl).b4r = function (plugin, scope) {
    plugin.i3y(scope);
  };
  protoOf(ClientPluginImpl).h3z = function (plugin, scope) {
    return this.b4r(plugin instanceof ClientPluginInstance ? plugin : THROW_CCE(), scope);
  };
  function createClientPlugin$lambda() {
    return Unit_instance;
  }
  function TransformResponseBodyContext() {
  }
  function OnRequestContext() {
  }
  function RequestHook$install$slambda($handler, resultContinuation) {
    this.k4r_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestHook$install$slambda).u3w = function ($this$intercept, it, $completion) {
    var tmp = this.v3w($this$intercept, it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(RequestHook$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.u3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RequestHook$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = this.k4r_1(new OnRequestContext(), this.l4r_1.o2i_1, this.l4r_1.r2h(), this);
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
  protoOf(RequestHook$install$slambda).v3w = function ($this$intercept, it, completion) {
    var i = new RequestHook$install$slambda(this.k4r_1, completion);
    i.l4r_1 = $this$intercept;
    i.m4r_1 = it;
    return i;
  };
  function RequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RequestHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.u3w($this$intercept, it, $completion);
    }, 2);
  }
  function RequestHook() {
  }
  protoOf(RequestHook).n4r = function (client, handler) {
    var tmp = Phases_getInstance().e45_1;
    client.w3v_1.s2i(tmp, RequestHook$install$slambda_0(handler, null));
  };
  protoOf(RequestHook).i45 = function (client, handler) {
    return this.n4r(client, (!(handler == null) ? isSuspendFunction(handler, 3) : false) ? handler : THROW_CCE());
  };
  var RequestHook_instance;
  function RequestHook_getInstance() {
    return RequestHook_instance;
  }
  function TransformResponseBodyHook$install$slambda($handler, resultContinuation) {
    this.w4r_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TransformResponseBodyHook$install$slambda).p3x = function ($this$intercept, it, $completion) {
    var tmp = this.q3x($this$intercept, it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(TransformResponseBodyHook$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.p3x(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(TransformResponseBodyHook$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            var _destruct__k2r9zo = this.x4r_1.r2h();
            this.z4r_1 = _destruct__k2r9zo.ag();
            var content = _destruct__k2r9zo.bg();
            if (!isInterface(content, ByteReadChannel))
              return Unit_instance;
            this.o8_1 = 1;
            suspendResult = this.w4r_1(new TransformResponseBodyContext(), this.x4r_1.o2i_1.b3x(), content, this.z4r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var newContent = tmp_0;
            var tmp_1;
            if (!(newContent instanceof NullBody)) {
              tmp_1 = !this.z4r_1.f2j_1.sa(newContent);
            } else {
              tmp_1 = false;
            }

            if (tmp_1) {
              throw IllegalStateException_init_$Create$('transformResponseBody returned ' + toString(newContent) + ' but expected value of type ' + this.z4r_1.toString());
            }

            this.o8_1 = 2;
            suspendResult = this.x4r_1.s2h(new HttpResponseContainer(this.z4r_1, newContent), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 3) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(TransformResponseBodyHook$install$slambda).q3x = function ($this$intercept, it, completion) {
    var i = new TransformResponseBodyHook$install$slambda(this.w4r_1, completion);
    i.x4r_1 = $this$intercept;
    i.y4r_1 = it;
    return i;
  };
  function TransformResponseBodyHook$install$slambda_0($handler, resultContinuation) {
    var i = new TransformResponseBodyHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.p3x($this$intercept, it, $completion);
    }, 2);
  }
  function TransformResponseBodyHook() {
  }
  protoOf(TransformResponseBodyHook).a4s = function (client, handler) {
    var tmp = Phases_getInstance_2().b3z_1;
    client.x3v_1.s2i(tmp, TransformResponseBodyHook$install$slambda_0(handler, null));
  };
  protoOf(TransformResponseBodyHook).i45 = function (client, handler) {
    return this.a4s(client, (!(handler == null) ? isSuspendFunction(handler, 4) : false) ? handler : THROW_CCE());
  };
  var TransformResponseBodyHook_instance;
  function TransformResponseBodyHook_getInstance() {
    return TransformResponseBodyHook_instance;
  }
  function SSECapability() {
  }
  protoOf(SSECapability).toString = function () {
    return 'SSECapability';
  };
  protoOf(SSECapability).hashCode = function () {
    return -177755299;
  };
  protoOf(SSECapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SSECapability))
      return false;
    return true;
  };
  var SSECapability_instance;
  function SSECapability_getInstance() {
    return SSECapability_instance;
  }
  function SSEClientContent() {
  }
  function DefaultClientWebSocketSession(call, delegate) {
    this.b4s_1 = delegate;
    this.c4s_1 = call;
  }
  protoOf(DefaultClientWebSocketSession).a3i = function (frame, $completion) {
    return this.b4s_1.a3i(frame, $completion);
  };
  protoOf(DefaultClientWebSocketSession).o21 = function ($completion) {
    return this.b4s_1.o21($completion);
  };
  protoOf(DefaultClientWebSocketSession).w3h = function (_set____db54di) {
    this.b4s_1.w3h(_set____db54di);
  };
  protoOf(DefaultClientWebSocketSession).x3h = function () {
    return this.b4s_1.x3h();
  };
  protoOf(DefaultClientWebSocketSession).y3h = function () {
    return this.b4s_1.y3h();
  };
  protoOf(DefaultClientWebSocketSession).z3h = function () {
    return this.b4s_1.z3h();
  };
  protoOf(DefaultClientWebSocketSession).g1e = function () {
    return this.b4s_1.g1e();
  };
  protoOf(DefaultClientWebSocketSession).v3h = function (negotiatedExtensions) {
    this.b4s_1.v3h(negotiatedExtensions);
  };
  function DelegatingClientWebSocketSession(call, session) {
    this.d4s_1 = session;
    this.e4s_1 = call;
  }
  protoOf(DelegatingClientWebSocketSession).a3i = function (frame, $completion) {
    return this.d4s_1.a3i(frame, $completion);
  };
  protoOf(DelegatingClientWebSocketSession).o21 = function ($completion) {
    return this.d4s_1.o21($completion);
  };
  protoOf(DelegatingClientWebSocketSession).w3h = function (_set____db54di) {
    this.d4s_1.w3h(_set____db54di);
  };
  protoOf(DelegatingClientWebSocketSession).x3h = function () {
    return this.d4s_1.x3h();
  };
  protoOf(DelegatingClientWebSocketSession).y3h = function () {
    return this.d4s_1.y3h();
  };
  protoOf(DelegatingClientWebSocketSession).z3h = function () {
    return this.d4s_1.z3h();
  };
  protoOf(DelegatingClientWebSocketSession).g1e = function () {
    return this.d4s_1.g1e();
  };
  function WebSocketContent() {
    ClientUpgradeContent.call(this);
    var tmp = this;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    var nonce = generateNonce(16);
    this_0.q(Default_getInstance_0().li(nonce));
    tmp.h4s_1 = this_0.toString();
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new HeadersBuilder();
    this_1.i2f('Upgrade', 'websocket');
    this_1.i2f('Connection', 'Upgrade');
    this_1.i2f('Sec-WebSocket-Key', this.h4s_1);
    this_1.i2f('Sec-WebSocket-Version', '13');
    tmp_0.i4s_1 = this_1.v2n();
  }
  protoOf(WebSocketContent).b2s = function () {
    return this.i4s_1;
  };
  protoOf(WebSocketContent).toString = function () {
    return 'WebSocketContent';
  };
  function get_REQUEST_EXTENSIONS_KEY() {
    _init_properties_WebSockets_kt__jaqpbo();
    return REQUEST_EXTENSIONS_KEY;
  }
  var REQUEST_EXTENSIONS_KEY;
  function get_WEBSOCKETS_KEY() {
    _init_properties_WebSockets_kt__jaqpbo();
    return WEBSOCKETS_KEY;
  }
  var WEBSOCKETS_KEY;
  function get_LOGGER_8() {
    _init_properties_WebSockets_kt__jaqpbo();
    return LOGGER_7;
  }
  var LOGGER_7;
  function WebSockets$Plugin$install$slambda($extensionsSupported, $plugin, resultContinuation) {
    this.r4s_1 = $extensionsSupported;
    this.s4s_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebSockets$Plugin$install$slambda).u3w = function ($this$intercept, it, $completion) {
    var tmp = this.v3w($this$intercept, it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(WebSockets$Plugin$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.u3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(WebSockets$Plugin$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            if (!isWebsocket(this.t4s_1.o2i_1.b3y_1.s2v())) {
              var this_0 = get_LOGGER_8();
              if (get_isTraceEnabled(this_0)) {
                this_0.n2j('Skipping WebSocket plugin for non-websocket request: ' + this.t4s_1.o2i_1.b3y_1.toString());
              }
              return Unit_instance;
            }

            var this_1 = get_LOGGER_8();
            if (get_isTraceEnabled(this_1)) {
              this_1.n2j('Sending WebSocket request ' + this.t4s_1.o2i_1.b3y_1.toString());
            }

            this.t4s_1.o2i_1.b4o(WebSocketCapability_instance, Unit_instance);
            if (this.r4s_1) {
              installExtensions(this.s4s_1, this.t4s_1.o2i_1);
            }

            this.t4s_1.o2i_1.g3y_1.x2c(get_WEBSOCKETS_KEY(), this.s4s_1);
            this.o8_1 = 1;
            suspendResult = this.t4s_1.s2h(new WebSocketContent(), this);
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
  protoOf(WebSockets$Plugin$install$slambda).v3w = function ($this$intercept, it, completion) {
    var i = new WebSockets$Plugin$install$slambda(this.r4s_1, this.s4s_1, completion);
    i.t4s_1 = $this$intercept;
    i.u4s_1 = it;
    return i;
  };
  function WebSockets$Plugin$install$slambda_0($extensionsSupported, $plugin, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda($extensionsSupported, $plugin, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.u3w($this$intercept, it, $completion);
    }, 2);
  }
  function WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation) {
    this.d4t_1 = $plugin;
    this.e4t_1 = $extensionsSupported;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebSockets$Plugin$install$slambda_1).p3x = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.q3x($this$intercept, _destruct__k2r9zo, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(WebSockets$Plugin$install$slambda_1).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.p3x(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(WebSockets$Plugin$install$slambda_1).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            var info = this.g4t_1.ag();
            var session = this.g4t_1.bg();
            var response = this.f4t_1.o2i_1.b3x();
            var status = response.a40();
            var requestContent = get_request(response).c33();
            if (!(requestContent instanceof WebSocketContent)) {
              var this_0 = get_LOGGER_8();
              if (get_isTraceEnabled(this_0)) {
                this_0.n2j('Skipping non-websocket response from ' + this.f4t_1.o2i_1.k3z().t3z().toString() + ': ' + toString(requestContent));
              }
              return Unit_instance;
            }

            if (!status.equals(Companion_getInstance_1().x2s_1)) {
              throw WebSocketException_init_$Create$('Handshake exception, expected status code ' + Companion_getInstance_1().x2s_1.a2v_1 + ' but was ' + status.a2v_1);
            }

            if (!isInterface(session, WebSocketSession)) {
              throw WebSocketException_init_$Create$('Handshake exception, expected `WebSocketSession` content but was ' + toString(getKClassFromExpression(session)));
            }

            var this_1 = get_LOGGER_8();
            if (get_isTraceEnabled(this_1)) {
              this_1.n2j('Receive websocket session from ' + this.f4t_1.o2i_1.k3z().t3z().toString() + ': ' + toString(session));
            }

            if (!equalsLong(this.d4t_1.i4t_1, new Long(2147483647, 0))) {
              session.w3h(this.d4t_1.i4t_1);
            }

            var tmp_0;
            if (info.f2j_1.equals(getKClass(DefaultClientWebSocketSession))) {
              var defaultSession = this.d4t_1.m4t(session);
              var clientSession = new DefaultClientWebSocketSession(this.f4t_1.o2i_1, defaultSession);
              var tmp_1;
              if (this.e4t_1) {
                tmp_1 = completeNegotiation(this.d4t_1, this.f4t_1.o2i_1);
              } else {
                tmp_1 = emptyList();
              }
              var negotiated = tmp_1;
              clientSession.v3h(negotiated);
              tmp_0 = clientSession;
            } else {
              tmp_0 = new DelegatingClientWebSocketSession(this.f4t_1.o2i_1, session);
            }

            var clientSession_0 = tmp_0;
            this.o8_1 = 1;
            suspendResult = this.f4t_1.s2h(new HttpResponseContainer(info, clientSession_0), this);
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
  protoOf(WebSockets$Plugin$install$slambda_1).q3x = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new WebSockets$Plugin$install$slambda_1(this.d4t_1, this.e4t_1, completion);
    i.f4t_1 = $this$intercept;
    i.g4t_1 = _destruct__k2r9zo;
    return i;
  };
  function WebSockets$Plugin$install$slambda_2($plugin, $extensionsSupported, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation);
    return constructCallableReference(function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.p3x($this$intercept, _destruct__k2r9zo, $completion);
    }, 2);
  }
  function installExtensions($this, context) {
    var installed = $this.j4t_1.v2n();
    context.g3y_1.w2c(get_REQUEST_EXTENSIONS_KEY(), installed);
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = installed.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var list = element.d3p();
      addAll(destination, list);
    }
    var protocols = destination;
    addNegotiatedProtocols($this, context, protocols);
  }
  function completeNegotiation($this, call) {
    var tmp0_safe_receiver = call.b3x().b2s().k2e('Sec-WebSocket-Extensions');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = parseWebSocketExtensions(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var serverExtensions = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    var clientExtensions = call.l3z().t2c(get_REQUEST_EXTENSIONS_KEY());
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = clientExtensions.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (element.e3p(serverExtensions)) {
        destination.c1(element);
      }
    }
    return destination;
  }
  function addNegotiatedProtocols($this, context, protocols) {
    if (protocols.r())
      return Unit_instance;
    var headerValue = joinToString(protocols, ',');
    header(context, 'Sec-WebSocket-Extensions', headerValue);
  }
  function Config_0() {
    this.n4t_1 = new WebSocketExtensionsConfig();
    this.o4t_1 = new WebSocketChannelsConfig();
    this.p4t_1 = new Long(0, 0);
    this.q4t_1 = new Long(2147483647, 0);
    this.r4t_1 = null;
  }
  function Plugin_0() {
    Plugin_instance_0 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'Websocket';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(WebSockets);
    var tmp_1 = null instanceof WebSockets;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(getKClass(WebSockets), arrayOf([]), false);
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
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.s4t_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin_0).m1 = function () {
    return this.s4t_1;
  };
  protoOf(Plugin_0).t4t = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config_0();
    block(this_0);
    var config = this_0;
    return new WebSockets(config.p4t_1, config.q4t_1, config.n4t_1, config.r4t_1, config.o4t_1);
  };
  protoOf(Plugin_0).g3z = function (block) {
    return this.t4t(block);
  };
  protoOf(Plugin_0).u4t = function (plugin, scope) {
    var extensionsSupported = scope.q3v_1.h43().j2(WebSocketExtensionsCapability_instance);
    var tmp = Phases_getInstance().g45_1;
    scope.w3v_1.s2i(tmp, WebSockets$Plugin$install$slambda_0(extensionsSupported, plugin, null));
    var tmp_0 = Phases_getInstance_2().b3z_1;
    scope.x3v_1.s2i(tmp_0, WebSockets$Plugin$install$slambda_2(plugin, extensionsSupported, null));
  };
  protoOf(Plugin_0).h3z = function (plugin, scope) {
    return this.u4t(plugin instanceof WebSockets ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_0;
  function Plugin_getInstance_0() {
    if (Plugin_instance_0 == null)
      new Plugin_0();
    return Plugin_instance_0;
  }
  function WebSockets(pingIntervalMillis, maxFrameSize, extensionsConfig, contentConverter, channelsConfig) {
    Plugin_getInstance_0();
    contentConverter = contentConverter === VOID ? null : contentConverter;
    channelsConfig = channelsConfig === VOID ? Companion_getInstance_4().b3i_1 : channelsConfig;
    this.h4t_1 = pingIntervalMillis;
    this.i4t_1 = maxFrameSize;
    this.j4t_1 = extensionsConfig;
    this.k4t_1 = contentConverter;
    this.l4t_1 = channelsConfig;
  }
  protoOf(WebSockets).m4t = function (session) {
    if (isInterface(session, DefaultWebSocketSession))
      return session;
    // Inline function 'kotlin.Long.times' call
    var this_0 = this.h4t_1;
    var timeoutMillis = multiply(this_0, fromInt(2));
    // Inline function 'kotlin.also' call
    var this_1 = DefaultWebSocketSession_0(session, this.h4t_1, timeoutMillis, this.l4t_1);
    this_1.w3h(this.i4t_1);
    return this_1;
  };
  function WebSocketExtensionsCapability() {
  }
  protoOf(WebSocketExtensionsCapability).toString = function () {
    return 'WebSocketExtensionsCapability';
  };
  protoOf(WebSocketExtensionsCapability).hashCode = function () {
    return 806573237;
  };
  protoOf(WebSocketExtensionsCapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WebSocketExtensionsCapability))
      return false;
    return true;
  };
  var WebSocketExtensionsCapability_instance;
  function WebSocketExtensionsCapability_getInstance() {
    return WebSocketExtensionsCapability_instance;
  }
  function WebSocketCapability() {
  }
  protoOf(WebSocketCapability).toString = function () {
    return 'WebSocketCapability';
  };
  protoOf(WebSocketCapability).hashCode = function () {
    return -1146563391;
  };
  protoOf(WebSocketCapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WebSocketCapability))
      return false;
    return true;
  };
  var WebSocketCapability_instance;
  function WebSocketCapability_getInstance() {
    return WebSocketCapability_instance;
  }
  function WebSocketException_init_$Init$(message, $this) {
    WebSocketException.call($this, message, null);
    return $this;
  }
  function WebSocketException_init_$Create$(message) {
    var tmp = WebSocketException_init_$Init$(message, objectCreate(protoOf(WebSocketException)));
    captureStack(tmp, WebSocketException_init_$Create$);
    return tmp;
  }
  function WebSocketException(message, cause) {
    IllegalStateException_init_$Init$_1(message, cause, this);
    captureStack(this, WebSocketException);
  }
  var properties_initialized_WebSockets_kt_2t2hw2;
  function _init_properties_WebSockets_kt__jaqpbo() {
    if (!properties_initialized_WebSockets_kt_2t2hw2) {
      properties_initialized_WebSockets_kt_2t2hw2 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'Websocket extensions';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtList);
      var tmp_0 = !(null == null) ? isInterface(null, KtList) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(WebSocketExtension), arrayOf([getStarKTypeProjection()]), false))]), false);
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
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      REQUEST_EXTENSIONS_KEY = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'Websocket plugin config';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_3 = getKClass(WebSockets);
      var tmp_4 = null instanceof WebSockets;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_5;
      try {
        tmp_5 = createKType(getKClass(WebSockets), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_6;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_6 = null;
        } else {
          throw $p_0;
        }
        tmp_5 = tmp_6;
      }
      var tmp$ret$2_0 = tmp_5;
      var tmp$ret$1_0 = new TypeInfo(tmp_3, tmp_4, tmp$ret$2_0);
      WEBSOCKETS_KEY = new AttributeKey(name_0, tmp$ret$1_0);
      LOGGER_7 = KtorSimpleLogger('io.ktor.client.plugins.websocket.WebSockets');
    }
  }
  function ClientUpgradeContent$content$delegate$lambda() {
    return new ByteChannel();
  }
  function ClientUpgradeContent() {
    NoContent.call(this);
    var tmp = this;
    tmp.w4t_1 = lazy(ClientUpgradeContent$content$delegate$lambda);
  }
  function DefaultHttpRequest(call, data) {
    this.x4t_1 = call;
    this.y4t_1 = data.b43_1;
    this.z4t_1 = data.a43_1;
    this.a4u_1 = data.d43_1;
    this.b4u_1 = data.c43_1;
    this.c4u_1 = data.f43_1;
  }
  protoOf(DefaultHttpRequest).r3z = function () {
    return this.x4t_1;
  };
  protoOf(DefaultHttpRequest).g1e = function () {
    return this.r3z().g1e();
  };
  protoOf(DefaultHttpRequest).s3z = function () {
    return this.y4t_1;
  };
  protoOf(DefaultHttpRequest).t3z = function () {
    return this.z4t_1;
  };
  protoOf(DefaultHttpRequest).c33 = function () {
    return this.a4u_1;
  };
  protoOf(DefaultHttpRequest).b2s = function () {
    return this.b4u_1;
  };
  protoOf(DefaultHttpRequest).l3z = function () {
    return this.c4u_1;
  };
  function get_ResponseAdapterAttributeKey() {
    _init_properties_HttpRequest_kt__813lx1();
    return ResponseAdapterAttributeKey;
  }
  var ResponseAdapterAttributeKey;
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_12() {
    return Companion_instance_3;
  }
  function HttpRequestBuilder$setCapability$lambda() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    return LinkedHashMap_init_$Create$();
  }
  function HttpRequestBuilder() {
    this.b3y_1 = new URLBuilder();
    this.c3y_1 = Companion_getInstance_2().c2s_1;
    this.d3y_1 = new HeadersBuilder();
    this.e3y_1 = EmptyContent_getInstance();
    this.f3y_1 = SupervisorJob();
    this.g3y_1 = AttributesJsFn(true);
  }
  protoOf(HttpRequestBuilder).b2s = function () {
    return this.d3y_1;
  };
  protoOf(HttpRequestBuilder).w43 = function (value) {
    if (!(value == null)) {
      this.g3y_1.w2c(get_BodyTypeAttributeKey(), value);
    } else {
      this.g3y_1.y2c(get_BodyTypeAttributeKey());
    }
  };
  protoOf(HttpRequestBuilder).d4u = function () {
    return this.g3y_1.u2c(get_BodyTypeAttributeKey());
  };
  protoOf(HttpRequestBuilder).v2n = function () {
    var tmp = this.b3y_1.v2n();
    var tmp_0 = this.c3y_1;
    var tmp_1 = this.d3y_1.v2n();
    var tmp_2 = this.e3y_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'No request transformation found: ' + toString(this.e3y_1);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.f3y_1, this.g3y_1);
  };
  protoOf(HttpRequestBuilder).v43 = function (builder) {
    this.f3y_1 = builder.f3y_1;
    return this.m4k(builder);
  };
  protoOf(HttpRequestBuilder).m4k = function (builder) {
    this.c3y_1 = builder.c3y_1;
    this.e3y_1 = builder.e3y_1;
    this.w43(builder.d4u());
    takeFrom_0(this.b3y_1, builder.b3y_1);
    this.b3y_1.n2v_1 = this.b3y_1.n2v_1;
    appendAll(this.d3y_1, builder.d3y_1);
    putAll(this.g3y_1, builder.g3y_1);
    return this;
  };
  protoOf(HttpRequestBuilder).b4o = function (key, capability) {
    var tmp = get_ENGINE_CAPABILITIES_KEY();
    var capabilities = this.g3y_1.z2c(tmp, HttpRequestBuilder$setCapability$lambda);
    // Inline function 'kotlin.collections.set' call
    capabilities.a3(key, capability);
  };
  protoOf(HttpRequestBuilder).n4n = function (key) {
    var tmp0_safe_receiver = this.g3y_1.u2c(get_ENGINE_CAPABILITIES_KEY());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t2(key);
  };
  function HttpRequest_0() {
  }
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.a43_1 = url;
    this.b43_1 = method;
    this.c43_1 = headers;
    this.d43_1 = body;
    this.e43_1 = executionContext;
    this.f43_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.f43_1.u2c(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u2();
    tmp.g43_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  protoOf(HttpRequestData).toString = function () {
    return 'HttpRequestData(url=' + this.a43_1.toString() + ', method=' + this.b43_1.toString() + ')';
  };
  function ResponseAdapter() {
  }
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.f40_1 = statusCode;
    this.g40_1 = requestTime;
    this.h40_1 = headers;
    this.i40_1 = version;
    this.j40_1 = body;
    this.k40_1 = callContext;
    this.l40_1 = GMTDate();
  }
  protoOf(HttpResponseData).toString = function () {
    return 'HttpResponseData=(statusCode=' + this.f40_1.toString() + ')';
  };
  function isUpgradeRequest(_this__u8e3s4) {
    _init_properties_HttpRequest_kt__813lx1();
    var tmp = _this__u8e3s4.d43_1;
    return tmp instanceof ClientUpgradeContent;
  }
  function url(_this__u8e3s4, scheme, host, port, path, block) {
    scheme = scheme === VOID ? null : scheme;
    host = host === VOID ? null : host;
    port = port === VOID ? null : port;
    path = path === VOID ? null : path;
    var tmp;
    if (block === VOID) {
      tmp = url$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    _init_properties_HttpRequest_kt__813lx1();
    set(_this__u8e3s4.b3y_1, scheme, host, port, path, block);
  }
  function headers(_this__u8e3s4, block) {
    _init_properties_HttpRequest_kt__813lx1();
    // Inline function 'kotlin.apply' call
    var this_0 = _this__u8e3s4.b2s();
    block(this_0);
    return this_0;
  }
  function url$lambda(_this__u8e3s4) {
    _init_properties_HttpRequest_kt__813lx1();
    return Unit_instance;
  }
  var properties_initialized_HttpRequest_kt_zh09pz;
  function _init_properties_HttpRequest_kt__813lx1() {
    if (!properties_initialized_HttpRequest_kt_zh09pz) {
      properties_initialized_HttpRequest_kt_zh09pz = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ResponseAdapterAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(ResponseAdapter);
      var tmp_0 = !(null == null) ? isInterface(null, ResponseAdapter) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(ResponseAdapter), arrayOf([]), false);
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
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      ResponseAdapterAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function Phases() {
    Phases_instance = this;
    this.d45_1 = new PipelinePhase('Before');
    this.e45_1 = new PipelinePhase('State');
    this.f45_1 = new PipelinePhase('Transform');
    this.g45_1 = new PipelinePhase('Render');
    this.h45_1 = new PipelinePhase('Send');
  }
  var Phases_instance;
  function Phases_getInstance() {
    if (Phases_instance == null)
      new Phases();
    return Phases_instance;
  }
  function HttpRequestPipeline(developmentMode) {
    Phases_getInstance();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance().d45_1, Phases_getInstance().e45_1, Phases_getInstance().f45_1, Phases_getInstance().g45_1, Phases_getInstance().h45_1]);
    this.m4u_1 = developmentMode;
  }
  protoOf(HttpRequestPipeline).m2i = function () {
    return this.m4u_1;
  };
  function Phases_0() {
    Phases_instance_0 = this;
    this.j3y_1 = new PipelinePhase('Before');
    this.k3y_1 = new PipelinePhase('State');
    this.l3y_1 = new PipelinePhase('Monitoring');
    this.m3y_1 = new PipelinePhase('Engine');
    this.n3y_1 = new PipelinePhase('Receive');
  }
  var Phases_instance_0;
  function Phases_getInstance_0() {
    if (Phases_instance_0 == null)
      new Phases_0();
    return Phases_instance_0;
  }
  function HttpSendPipeline(developmentMode) {
    Phases_getInstance_0();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_0().j3y_1, Phases_getInstance_0().k3y_1, Phases_getInstance_0().l3y_1, Phases_getInstance_0().m3y_1, Phases_getInstance_0().n3y_1]);
    this.u4u_1 = developmentMode;
  }
  protoOf(HttpSendPipeline).m2i = function () {
    return this.u4u_1;
  };
  function get_BodyTypeAttributeKey() {
    _init_properties_RequestBody_kt__bo3lwf();
    return BodyTypeAttributeKey;
  }
  var BodyTypeAttributeKey;
  var properties_initialized_RequestBody_kt_agyv1b;
  function _init_properties_RequestBody_kt__bo3lwf() {
    if (!properties_initialized_RequestBody_kt_agyv1b) {
      properties_initialized_RequestBody_kt_agyv1b = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'BodyTypeAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(TypeInfo);
      var tmp_0 = null instanceof TypeInfo;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(TypeInfo), arrayOf([]), false);
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
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      BodyTypeAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function get_RN_BYTES() {
    _init_properties_FormDataContent_kt__7tvkbr();
    return RN_BYTES;
  }
  var RN_BYTES;
  function FormDataContent(formData) {
    ByteArrayContent.call(this);
    this.w4u_1 = formData;
    this.x4u_1 = toByteArray_0(formUrlEncode(this.w4u_1));
    this.y4u_1 = fromInt(this.x4u_1.length);
    this.z4u_1 = withCharset(Application_getInstance().n2l_1, Charsets_getInstance().p2b_1);
  }
  protoOf(FormDataContent).s2x = function () {
    return this.y4u_1;
  };
  protoOf(FormDataContent).r2x = function () {
    return this.z4u_1;
  };
  protoOf(FormDataContent).t2x = function () {
    return this.x4u_1;
  };
  function MultiPartFormDataContent$rawParts$lambda($bytes) {
    return function () {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      var builder = new Buffer();
      writeFully(builder, $bytes);
      return builder;
    };
  }
  function $writeToCOROUTINE$(_this__u8e3s4, channel, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i4v_1 = _this__u8e3s4;
    this.j4v_1 = channel;
  }
  protoOf($writeToCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 25;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.p8_1 = 21;
            this.p8_1 = 20;
            this.q4v_1 = this.i4v_1.z4v_1.t();
            this.o8_1 = 2;
            continue $sm;
          case 2:
            if (!this.q4v_1.u()) {
              this.o8_1 = 18;
              continue $sm;
            }

            this.p4v_1 = this.q4v_1.v();
            this.o8_1 = 3;
            suspendResult = writeFully_0(this.j4v_1, this.i4v_1.v4v_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.o8_1 = 4;
            suspendResult = writeFully_0(this.j4v_1, this.p4v_1.b4w_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.o8_1 = 5;
            suspendResult = writeFully_0(this.j4v_1, get_RN_BYTES(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var tmp0_subject = this.p4v_1;
            if (tmp0_subject instanceof InputPart) {
              this.o4v_1 = this.p4v_1.i4w_1();
              this.o8_1 = 7;
              continue $sm;
            } else {
              if (tmp0_subject instanceof ChannelPart) {
                this.o8_1 = 6;
                suspendResult = copyTo_0(this.p4v_1.f4w_1(), this.j4v_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_0 = this;
                noWhenBranchMatchedException();
              }
            }

            break;
          case 6:
            this.l4v_1 = suspendResult;
            this.o8_1 = 16;
            continue $sm;
          case 7:
            this.n4v_1 = this.o4v_1;
            this.m4v_1 = null;
            this.o8_1 = 8;
            continue $sm;
          case 8:
            this.o8_1 = 9;
            continue $sm;
          case 9:
            this.p8_1 = 13;
            this.p8_1 = 12;
            var input = this.n4v_1;
            this.o8_1 = 10;
            suspendResult = copyTo_1(input, this.j4v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.o8_1 = 11;
            var tmp_1 = this;
            continue $sm;
          case 11:
            this.p8_1 = 20;
            closeFinally(this.n4v_1, this.m4v_1);
            this.o8_1 = 15;
            continue $sm;
          case 12:
            this.p8_1 = 13;
            var tmp_2 = this.r8_1;
            if (tmp_2 instanceof Error) {
              var e = this.r8_1;
              var tmp_3 = this;
              this.m4v_1 = e;
              throw e;
            } else {
              throw this.r8_1;
            }

          case 13:
            this.p8_1 = 20;
            var t = this.r8_1;
            closeFinally(this.n4v_1, this.m4v_1);
            throw t;
          case 14:
            this.p8_1 = 20;
            closeFinally(this.n4v_1, this.m4v_1);
            if (false) {
              this.o8_1 = 7;
              continue $sm;
            }

            this.o8_1 = 15;
            continue $sm;
          case 15:
            this.l4v_1 = Unit_instance;
            this.o8_1 = 16;
            continue $sm;
          case 16:
            this.o8_1 = 17;
            suspendResult = writeFully_0(this.j4v_1, get_RN_BYTES(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 17:
            this.o8_1 = 2;
            continue $sm;
          case 18:
            this.o8_1 = 19;
            suspendResult = writeFully_0(this.j4v_1, this.i4v_1.w4v_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 19:
            this.p8_1 = 25;
            this.o8_1 = 23;
            continue $sm;
          case 20:
            this.p8_1 = 21;
            var tmp_4 = this.r8_1;
            if (tmp_4 instanceof Error) {
              var cause = this.r8_1;
              close(this.j4v_1, cause);
              this.p8_1 = 25;
              this.o8_1 = 23;
              continue $sm;
            } else {
              throw this.r8_1;
            }

          case 21:
            this.p8_1 = 25;
            this.k4v_1 = this.r8_1;
            this.o8_1 = 22;
            suspendResult = this.j4v_1.y21(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 22:
            throw this.k4v_1;
          case 23:
            this.p8_1 = 25;
            this.o8_1 = 24;
            suspendResult = this.j4v_1.y21(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 24:
            return Unit_instance;
          case 25:
            throw this.r8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.p8_1 === 25) {
          throw e_0;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e_0;
        }
      }
     while (true);
  };
  function MultiPartFormDataContent(parts, boundary, contentType) {
    boundary = boundary === VOID ? generateBoundary() : boundary;
    contentType = contentType === VOID ? MultiPart_getInstance().q2m_1.q2n('boundary', boundary) : contentType;
    WriteChannelContent.call(this);
    this.s4v_1 = parts;
    this.t4v_1 = boundary;
    this.u4v_1 = contentType;
    this.v4v_1 = toByteArray_0('--' + this.t4v_1 + '\r\n');
    this.w4v_1 = toByteArray_0('--' + this.t4v_1 + '--\r\n');
    this.x4v_1 = this.w4v_1.length;
    this.y4v_1 = imul(get_RN_BYTES().length, 2) + this.v4v_1.length | 0;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.s4v_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var headersBuilder = BytePacketBuilder();
      var _iterator__ex2g4s_0 = item.m2z_1.x2e().t();
      while (_iterator__ex2g4s_0.u()) {
        var _destruct__k2r9zo = _iterator__ex2g4s_0.v();
        // Inline function 'kotlin.collections.component1' call
        var key = _destruct__k2r9zo.m1();
        // Inline function 'kotlin.collections.component2' call
        var values = _destruct__k2r9zo.n1();
        writeText(headersBuilder, key + ': ' + joinToString(values, '; '));
        writeFully(headersBuilder, get_RN_BYTES());
      }
      var tmp0_safe_receiver = item.m2z_1.k2e('Content-Length');
      var bodySize = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
      var tmp_0;
      if (item instanceof FileItem) {
        var headers = readByteArray(build(headersBuilder));
        var tmp_1;
        if (bodySize == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.Long.plus' call
          var other = this.y4v_1;
          tmp_1 = add(bodySize, fromInt(other));
        }
        var tmp3_safe_receiver = tmp_1;
        var tmp_2;
        if (tmp3_safe_receiver == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.Long.plus' call
          var other_0 = headers.length;
          tmp_2 = add(tmp3_safe_receiver, fromInt(other_0));
        }
        var size = tmp_2;
        tmp_0 = new ChannelPart(headers, item.o4w_1, size);
      } else {
        if (item instanceof BinaryItem) {
          var headers_0 = readByteArray(build(headersBuilder));
          var tmp_3;
          if (bodySize == null) {
            tmp_3 = null;
          } else {
            // Inline function 'kotlin.Long.plus' call
            var other_1 = this.y4v_1;
            tmp_3 = add(bodySize, fromInt(other_1));
          }
          var tmp5_safe_receiver = tmp_3;
          var tmp_4;
          if (tmp5_safe_receiver == null) {
            tmp_4 = null;
          } else {
            // Inline function 'kotlin.Long.plus' call
            var other_2 = headers_0.length;
            tmp_4 = add(tmp5_safe_receiver, fromInt(other_2));
          }
          var size_0 = tmp_4;
          tmp_0 = new InputPart(headers_0, item.e2z_1, size_0);
        } else {
          if (item instanceof FormItem) {
            // Inline function 'io.ktor.utils.io.core.buildPacket' call
            var builder = new Buffer();
            writeText(builder, item.y2y_1);
            var bytes = readByteArray(builder);
            var provider = MultiPartFormDataContent$rawParts$lambda(bytes);
            if (bodySize == null) {
              writeText(headersBuilder, 'Content-Length: ' + bytes.length);
              writeFully(headersBuilder, get_RN_BYTES());
            }
            var headers_1 = readByteArray(build(headersBuilder));
            var size_1 = (bytes.length + this.y4v_1 | 0) + headers_1.length | 0;
            tmp_0 = new InputPart(headers_1, provider, fromInt(size_1));
          } else {
            if (item instanceof BinaryChannelItem) {
              var headers_2 = readByteArray(build(headersBuilder));
              var tmp_5;
              if (bodySize == null) {
                tmp_5 = null;
              } else {
                // Inline function 'kotlin.Long.plus' call
                var other_3 = this.y4v_1;
                tmp_5 = add(bodySize, fromInt(other_3));
              }
              var tmp7_safe_receiver = tmp_5;
              var tmp_6;
              if (tmp7_safe_receiver == null) {
                tmp_6 = null;
              } else {
                // Inline function 'kotlin.Long.plus' call
                var other_4 = headers_2.length;
                tmp_6 = add(tmp7_safe_receiver, fromInt(other_4));
              }
              var size_2 = tmp_6;
              tmp_0 = new ChannelPart(headers_2, item.k2z_1, size_2);
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
      var tmp$ret$2 = tmp_0;
      destination.c1(tmp$ret$2);
    }
    tmp.z4v_1 = destination;
    this.a4w_1 = null;
    var rawLength = new Long(0, 0);
    var _iterator__ex2g4s_1 = this.z4v_1.t();
    $l$loop: while (_iterator__ex2g4s_1.u()) {
      var part = _iterator__ex2g4s_1.v();
      var size_3 = part.c4w_1;
      if (size_3 == null) {
        rawLength = null;
        break $l$loop;
      }
      var tmp0_safe_receiver_0 = rawLength;
      rawLength = tmp0_safe_receiver_0 == null ? null : add(tmp0_safe_receiver_0, size_3);
    }
    if (!(rawLength == null)) {
      var tmp0 = rawLength;
      // Inline function 'kotlin.Long.plus' call
      var other_5 = this.x4v_1;
      rawLength = add(tmp0, fromInt(other_5));
    }
    this.a4w_1 = rawLength;
  }
  protoOf(MultiPartFormDataContent).r2x = function () {
    return this.u4v_1;
  };
  protoOf(MultiPartFormDataContent).s2x = function () {
    return this.a4w_1;
  };
  protoOf(MultiPartFormDataContent).t2z = function (channel, $completion) {
    var tmp = new $writeToCOROUTINE$(this, channel, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  function generateBoundary() {
    _init_properties_FormDataContent_kt__7tvkbr();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this_0.q(toString_1(Default_getInstance().eg(), 16));
      }
       while (inductionVariable < 32);
    var tmp$ret$0 = this_0.toString();
    return take(tmp$ret$0, 70);
  }
  function InputPart(headers, provider, size) {
    PreparedPart.call(this, headers, size);
    this.i4w_1 = provider;
  }
  function ChannelPart(headers, provider, size) {
    PreparedPart.call(this, headers, size);
    this.f4w_1 = provider;
  }
  function PreparedPart(headers, size) {
    this.b4w_1 = headers;
    this.c4w_1 = size;
  }
  function copyTo_1(_this__u8e3s4, channel, $completion) {
    return writePacket(channel, _this__u8e3s4, $completion);
  }
  var properties_initialized_FormDataContent_kt_w3e0rf;
  function _init_properties_FormDataContent_kt__7tvkbr() {
    if (!properties_initialized_FormDataContent_kt_w3e0rf) {
      properties_initialized_FormDataContent_kt_w3e0rf = true;
      RN_BYTES = toByteArray_0('\r\n');
    }
  }
  function FormBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.p4w_1 = ArrayList_init_$Create$();
  }
  protoOf(FormBuilder).q4w = function (key, value, headers) {
    var tmp0 = this.p4w_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new FormPart(key, value, headers);
    tmp0.c1(element);
  };
  protoOf(FormBuilder).r4w = function (key, value, headers, $super) {
    headers = headers === VOID ? Companion_getInstance_5().s2n_1 : headers;
    var tmp;
    if ($super === VOID) {
      this.q4w(key, value, headers);
      tmp = Unit_instance;
    } else {
      tmp = $super.q4w.call(this, key, value, headers);
    }
    return tmp;
  };
  protoOf(FormBuilder).s4w = function (key, value, headers) {
    var tmp0 = this.p4w_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new FormPart(key, value, headers);
    tmp0.c1(element);
  };
  protoOf(FormBuilder).t4w = function () {
    return this.p4w_1;
  };
  function formData(values) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = values.length;
    while (inductionVariable < last) {
      var element = values[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = element.ag();
      var value = element.bg();
      var headers = element.x4w();
      // Inline function 'kotlin.apply' call
      var this_0 = new HeadersBuilder();
      this_0.i2f('Content-Disposition', 'form-data; name=' + quoteForMultipart(key));
      this_0.j2f(headers);
      var partHeaders = this_0;
      var tmp;
      if (typeof value === 'string') {
        tmp = new FormItem(value, formData$lambda, partHeaders.v2n());
      } else {
        if (isNumber(value)) {
          var tmp_0 = toString(value);
          tmp = new FormItem(tmp_0, formData$lambda_0, partHeaders.v2n());
        } else {
          if (typeof value === 'boolean') {
            var tmp_1 = value.toString();
            tmp = new FormItem(tmp_1, formData$lambda_1, partHeaders.v2n());
          } else {
            if (isByteArray(value)) {
              partHeaders.i2f('Content-Length', value.length.toString());
              var tmp_2 = formData$lambda_2(value);
              tmp = new BinaryItem(tmp_2, formData$lambda_3, partHeaders.v2n());
            } else {
              if (isInterface(value, Source)) {
                if (value instanceof Buffer) {
                  partHeaders.i2f('Content-Length', get_remaining(value).toString());
                }
                var tmp_3 = formData$lambda_4(value);
                tmp = new BinaryItem(tmp_3, formData$lambda_5(value), partHeaders.v2n());
              } else {
                if (value instanceof InputProvider) {
                  var size = value.a4x_1;
                  if (!(size == null)) {
                    partHeaders.i2f('Content-Length', size.toString());
                  }
                  tmp = new BinaryItem(value.b4x_1, formData$lambda_6, partHeaders.v2n());
                } else {
                  if (value instanceof ChannelProvider) {
                    var size_0 = value.y4w_1;
                    if (!(size_0 == null)) {
                      partHeaders.i2f('Content-Length', size_0.toString());
                    }
                    tmp = new BinaryChannelItem(value.z4w_1, partHeaders.v2n());
                  } else {
                    // Inline function 'kotlin.error' call
                    var message = 'Unknown form content type: ' + toString(value);
                    throw IllegalStateException_init_$Create$(toString(message));
                  }
                }
              }
            }
          }
        }
      }
      var part = tmp;
      // Inline function 'kotlin.collections.plusAssign' call
      result.c1(part);
    }
    return result;
  }
  function FormPart(key, value, headers) {
    headers = headers === VOID ? Companion_getInstance_5().s2n_1 : headers;
    this.u4w_1 = key;
    this.v4w_1 = value;
    this.w4w_1 = headers;
  }
  protoOf(FormPart).ag = function () {
    return this.u4w_1;
  };
  protoOf(FormPart).bg = function () {
    return this.v4w_1;
  };
  protoOf(FormPart).x4w = function () {
    return this.w4w_1;
  };
  protoOf(FormPart).toString = function () {
    return 'FormPart(key=' + this.u4w_1 + ', value=' + toString(this.v4w_1) + ', headers=' + toString(this.w4w_1) + ')';
  };
  protoOf(FormPart).hashCode = function () {
    var result = getStringHashCode(this.u4w_1);
    result = imul(result, 31) + hashCode(this.v4w_1) | 0;
    result = imul(result, 31) + hashCode(this.w4w_1) | 0;
    return result;
  };
  protoOf(FormPart).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FormPart))
      return false;
    if (!(this.u4w_1 === other.u4w_1))
      return false;
    if (!equals(this.v4w_1, other.v4w_1))
      return false;
    if (!equals(this.w4w_1, other.w4w_1))
      return false;
    return true;
  };
  function InputProvider() {
  }
  function ChannelProvider() {
  }
  function quoteForMultipart(_this__u8e3s4) {
    return isQuoted(_this__u8e3s4) ? _this__u8e3s4 : quote(_this__u8e3s4);
  }
  function formData$lambda() {
    return Unit_instance;
  }
  function formData$lambda_0() {
    return Unit_instance;
  }
  function formData$lambda_1() {
    return Unit_instance;
  }
  function formData$lambda_2($value) {
    return function () {
      return ByteReadPacket($value);
    };
  }
  function formData$lambda_3() {
    return Unit_instance;
  }
  function formData$lambda_4($value) {
    return function () {
      return $value.z1b();
    };
  }
  function formData$lambda_5($value) {
    return function () {
      $value.i4();
      return Unit_instance;
    };
  }
  function formData$lambda_6() {
    return Unit_instance;
  }
  function header(_this__u8e3s4, key, value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      _this__u8e3s4.b2s().i2f(key, toString(value));
      tmp = Unit_instance;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? Unit_instance : tmp1_elvis_lhs;
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.c4x_1 = call;
    this.d4x_1 = responseData.k40_1;
    this.e4x_1 = responseData.f40_1;
    this.f4x_1 = responseData.i40_1;
    this.g4x_1 = responseData.g40_1;
    this.h4x_1 = responseData.l40_1;
    var tmp = this;
    var tmp_0 = responseData.j40_1;
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.i4x_1 = tmp0_elvis_lhs == null ? Companion_getInstance().v23_1 : tmp0_elvis_lhs;
    this.j4x_1 = responseData.h40_1;
  }
  protoOf(DefaultHttpResponse).r3z = function () {
    return this.c4x_1;
  };
  protoOf(DefaultHttpResponse).g1e = function () {
    return this.d4x_1;
  };
  protoOf(DefaultHttpResponse).a40 = function () {
    return this.e4x_1;
  };
  protoOf(DefaultHttpResponse).b40 = function () {
    return this.f4x_1;
  };
  protoOf(DefaultHttpResponse).c40 = function () {
    return this.g4x_1;
  };
  protoOf(DefaultHttpResponse).d40 = function () {
    return this.h4x_1;
  };
  protoOf(DefaultHttpResponse).z3z = function () {
    return this.i4x_1;
  };
  protoOf(DefaultHttpResponse).b2s = function () {
    return this.j4x_1;
  };
  function HttpResponse() {
  }
  protoOf(HttpResponse).toString = function () {
    return 'HttpResponse[' + get_request(this).t3z().toString() + ', ' + this.a40().toString() + ']';
  };
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.r3z().k3z();
  }
  function bodyAsText(_this__u8e3s4, fallbackCharset, $completion) {
    fallbackCharset = fallbackCharset === VOID ? Charsets_getInstance().p2b_1 : fallbackCharset;
    var tmp = new $bodyAsTextCOROUTINE$(_this__u8e3s4, fallbackCharset, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function $bodyAsTextCOROUTINE$(_this__u8e3s4, fallbackCharset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s4x_1 = _this__u8e3s4;
    this.t4x_1 = fallbackCharset;
  }
  protoOf($bodyAsTextCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            var tmp0_elvis_lhs = charset_0(this.s4x_1);
            var originCharset = tmp0_elvis_lhs == null ? this.t4x_1 : tmp0_elvis_lhs;
            this.u4x_1 = originCharset.g2c();
            var this_0 = this.s4x_1;
            this.o8_1 = 1;
            var tmp_0 = this_0.r3z();
            var tmp_1 = getKClass(Source);
            var tmp_2 = !(null == null) ? isInterface(null, Source) : false;
            var tmp_3;
            try {
              tmp_3 = createKType(getKClass(Source), arrayOf([]), false);
            } catch ($p) {
              var tmp_4;
              if ($p instanceof Error) {
                var _unused_var__etf5q3 = $p;
                tmp_4 = null;
              } else {
                throw $p;
              }
              tmp_3 = tmp_4;
            }

            suspendResult = tmp_0.o3z(new TypeInfo(tmp_1, tmp_2, tmp_3), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var input = (!(suspendResult == null) ? isInterface(suspendResult, Source) : false) ? suspendResult : THROW_CCE();
            return decode(this.u4x_1, input);
          case 2:
            throw this.r8_1;
        }
      } catch ($p_0) {
        var e = $p_0;
        if (this.p8_1 === 2) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  function Phases_1() {
    Phases_instance_1 = this;
    this.x45_1 = new PipelinePhase('Before');
    this.y45_1 = new PipelinePhase('State');
    this.z45_1 = new PipelinePhase('After');
  }
  var Phases_instance_1;
  function Phases_getInstance_1() {
    if (Phases_instance_1 == null)
      new Phases_1();
    return Phases_instance_1;
  }
  function HttpReceivePipeline(developmentMode) {
    Phases_getInstance_1();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_1().x45_1, Phases_getInstance_1().y45_1, Phases_getInstance_1().z45_1]);
    this.c4y_1 = developmentMode;
  }
  protoOf(HttpReceivePipeline).m2i = function () {
    return this.c4y_1;
  };
  function Phases_2() {
    Phases_instance_2 = this;
    this.z3y_1 = new PipelinePhase('Receive');
    this.a3z_1 = new PipelinePhase('Parse');
    this.b3z_1 = new PipelinePhase('Transform');
    this.c3z_1 = new PipelinePhase('State');
    this.d3z_1 = new PipelinePhase('After');
  }
  var Phases_instance_2;
  function Phases_getInstance_2() {
    if (Phases_instance_2 == null)
      new Phases_2();
    return Phases_instance_2;
  }
  function HttpResponsePipeline(developmentMode) {
    Phases_getInstance_2();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_2().z3y_1, Phases_getInstance_2().a3z_1, Phases_getInstance_2().b3z_1, Phases_getInstance_2().c3z_1, Phases_getInstance_2().d3z_1]);
    this.k4y_1 = developmentMode;
  }
  protoOf(HttpResponsePipeline).m2i = function () {
    return this.k4y_1;
  };
  function HttpResponseContainer(expectedType, response) {
    this.x40_1 = expectedType;
    this.y40_1 = response;
  }
  protoOf(HttpResponseContainer).ag = function () {
    return this.x40_1;
  };
  protoOf(HttpResponseContainer).bg = function () {
    return this.y40_1;
  };
  protoOf(HttpResponseContainer).toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.x40_1.toString() + ', response=' + toString(this.y40_1) + ')';
  };
  protoOf(HttpResponseContainer).hashCode = function () {
    var result = this.x40_1.hashCode();
    result = imul(result, 31) + hashCode(this.y40_1) | 0;
    return result;
  };
  protoOf(HttpResponseContainer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    if (!this.x40_1.equals(other.x40_1))
      return false;
    if (!equals(this.y40_1, other.y40_1))
      return false;
    return true;
  };
  function $fetchResponseCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t4y_1 = _this__u8e3s4;
  }
  protoOf($fetchResponseCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 7;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.p8_1 = 6;
            var builder = (new HttpRequestBuilder()).v43(this.t4y_1.x4y_1);
            this.o8_1 = 2;
            suspendResult = this.t4y_1.y4y_1.e3z(builder, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w4y_1 = suspendResult;
            this.o8_1 = 3;
            suspendResult = save(this.w4y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.v4y_1 = suspendResult.b3x();
            this.o8_1 = 4;
            suspendResult = this.t4y_1.z4y(this.w4y_1.b3x(), null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var tmp_0 = this;
            return this.v4y_1;
          case 5:
            return this.u4y_1;
          case 6:
            this.p8_1 = 7;
            var tmp_1 = this.r8_1;
            if (tmp_1 instanceof CancellationException) {
              var cause = this.r8_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.r8_1;
            }

          case 7:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 7) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  function HttpStatement(builder, client) {
    this.x4y_1 = builder;
    this.y4y_1 = client;
  }
  protoOf(HttpStatement).a4z = function ($completion) {
    return this.b4z($completion);
  };
  protoOf(HttpStatement).b4z = function ($completion) {
    var tmp = new $fetchResponseCOROUTINE$(this, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpStatement).z4y = function (_this__u8e3s4, cause, $completion) {
    var tmp = get_job(_this__u8e3s4.g1e());
    var job = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
    // Inline function 'kotlin.runCatching' call
    var tmp_0;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = engineContentForCleanup(_this__u8e3s4);
      tmp_0 = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp_0 = tmp_1;
    }
    // Inline function 'kotlin.Result.getOrNull' call
    var this_0 = tmp_0;
    var content = _Result___get_isFailure__impl__jpiriv(this_0) ? null : _Result___get_value__impl__bjfvqg(this_0);
    if (cause == null) {
      var contentIsClosedForRead = (content == null ? null : content.t21()) === true;
      var contentCloseCause = content == null ? null : content.e20();
      if (contentIsClosedForRead && contentCloseCause == null) {
        job.i1l();
      } else {
        // Inline function 'io.ktor.client.statement.toCancellationException' call
        var message = 'Response body was abandoned';
        var tmp0_elvis_lhs = contentCloseCause instanceof CancellationException ? contentCloseCause : null;
        var tmp$ret$5 = tmp0_elvis_lhs == null ? CancellationException_init_$Create$(message, contentCloseCause) : tmp0_elvis_lhs;
        job.p1f(tmp$ret$5);
      }
    } else {
      // Inline function 'io.ktor.client.statement.toCancellationException' call
      var message_0 = 'Exception occurred during request execution';
      var tmp0_elvis_lhs_0 = cause instanceof CancellationException ? cause : null;
      var tmp$ret$6 = tmp0_elvis_lhs_0 == null ? CancellationException_init_$Create$(message_0, cause) : tmp0_elvis_lhs_0;
      job.p1f(tmp$ret$6);
    }
    // Inline function 'kotlin.runCatching' call
    var tmp_2;
    try {
      var tmp_3;
      if (content == null) {
        tmp_3 = null;
      } else {
        cancel_1(content);
        tmp_3 = Unit_instance;
      }
      // Inline function 'kotlin.Companion.success' call
      var value_0 = tmp_3;
      tmp_2 = _Result___init__impl__xyqfz8(value_0);
    } catch ($p_0) {
      var tmp_4;
      if ($p_0 instanceof Error) {
        var e_0 = $p_0;
        // Inline function 'kotlin.Companion.failure' call
        tmp_4 = _Result___init__impl__xyqfz8(createFailure(e_0));
      } else {
        throw $p_0;
      }
      tmp_2 = tmp_4;
    }
    return job.m1f($completion);
  };
  protoOf(HttpStatement).toString = function () {
    return 'HttpStatement[' + this.x4y_1.b3y_1.toString() + ']';
  };
  function engineContentForCleanup(_this__u8e3s4) {
    if (get_isSaved(_this__u8e3s4))
      return Companion_getInstance().v23_1;
    var origin = resolveOrigin(_this__u8e3s4);
    var tmp;
    if (origin instanceof DefaultHttpResponse) {
      tmp = origin.i4x_1;
    } else {
      if (origin instanceof SavedHttpResponse) {
        tmp = Companion_getInstance().v23_1;
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_instance;
    return writer(tmp, context, true, observable$slambda_0(_this__u8e3s4, listener, contentLength, null)).r23_1;
  }
  function observable$slambda($this_observable, $listener, $contentLength, resultContinuation) {
    this.k4z_1 = $this_observable;
    this.l4z_1 = $listener;
    this.m4z_1 = $contentLength;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(observable$slambda).f3u = function ($this$writer, $completion) {
    var tmp = this.g3u($this$writer, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(observable$slambda).k9 = function (p1, $completion) {
    return this.f3u(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(observable$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 16;
            this.t4z_1 = get_ByteArrayPool();
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.p4z_1 = this.t4z_1;
            this.o4z_1 = this.p4z_1.d2c();
            this.o8_1 = 2;
            continue $sm;
          case 2:
            this.o8_1 = 3;
            continue $sm;
          case 3:
            this.p8_1 = 15;
            this.s4z_1 = this.o4z_1;
            this.q4z_1 = new Long(0, 0);
            this.o8_1 = 4;
            continue $sm;
          case 4:
            if (!!this.k4z_1.t21()) {
              this.o8_1 = 9;
              continue $sm;
            }

            this.o8_1 = 5;
            suspendResult = readAvailable(this.k4z_1, this.s4z_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.r4z_1 = suspendResult;
            if (this.r4z_1 <= 0) {
              this.o8_1 = 4;
              continue $sm;
            } else {
              this.o8_1 = 6;
              continue $sm;
            }

          case 6:
            this.o8_1 = 7;
            suspendResult = writeFully_0(this.n4z_1.m29_1, this.s4z_1, 0, this.r4z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var tmp_0 = this;
            var tmp0 = this.q4z_1;
            var other = this.r4z_1;
            tmp_0.q4z_1 = add(tmp0, fromInt(other));
            this.o8_1 = 8;
            suspendResult = this.l4z_1.b42(this.q4z_1, this.m4z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.o8_1 = 4;
            continue $sm;
          case 9:
            var closedCause = this.k4z_1.e20();
            close(this.n4z_1.m29_1, closedCause);
            if (closedCause == null && equalsLong(this.q4z_1, new Long(0, 0))) {
              this.o8_1 = 10;
              suspendResult = this.l4z_1.b42(this.q4z_1, this.m4z_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o8_1 = 11;
              continue $sm;
            }

          case 10:
            this.o8_1 = 11;
            continue $sm;
          case 11:
            this.p8_1 = 16;
            this.o8_1 = 12;
            var tmp_1 = this;
            continue $sm;
          case 12:
            this.p8_1 = 16;
            this.p4z_1.e2c(this.o4z_1);
            this.o8_1 = 14;
            continue $sm;
          case 13:
            this.p8_1 = 16;
            this.p4z_1.e2c(this.o4z_1);
            if (false) {
              this.o8_1 = 1;
              continue $sm;
            }

            this.o8_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            this.p8_1 = 16;
            var t = this.r8_1;
            this.p4z_1.e2c(this.o4z_1);
            throw t;
          case 16:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 16) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(observable$slambda).g3u = function ($this$writer, completion) {
    var i = new observable$slambda(this.k4z_1, this.l4z_1, this.m4z_1, completion);
    i.n4z_1 = $this$writer;
    return i;
  };
  function observable$slambda_0($this_observable, $listener, $contentLength, resultContinuation) {
    var i = new observable$slambda($this_observable, $listener, $contentLength, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.f3u($this$writer, $completion);
    }, 1);
  }
  function get_HttpRequestCreated() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpRequestCreated;
  }
  var HttpRequestCreated;
  function get_HttpRequestIsReadyForSending() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpRequestIsReadyForSending;
  }
  var HttpRequestIsReadyForSending;
  function get_HttpResponseReceived() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseReceived;
  }
  var HttpResponseReceived;
  function get_HttpResponseReceiveFailed() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseReceiveFailed;
  }
  var HttpResponseReceiveFailed;
  function get_HttpResponseCancelled() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseCancelled;
  }
  var HttpResponseCancelled;
  function HttpResponseReceiveFail(response, cause) {
    this.u4z_1 = response;
    this.v4z_1 = cause;
  }
  var properties_initialized_ClientEvents_kt_rdee4m;
  function _init_properties_ClientEvents_kt__xuvbz8() {
    if (!properties_initialized_ClientEvents_kt_rdee4m) {
      properties_initialized_ClientEvents_kt_rdee4m = true;
      HttpRequestCreated = new EventDefinition();
      HttpRequestIsReadyForSending = new EventDefinition();
      HttpResponseReceived = new EventDefinition();
      HttpResponseReceiveFailed = new EventDefinition();
      HttpResponseCancelled = new EventDefinition();
    }
  }
  function EmptyContent() {
    EmptyContent_instance = this;
    NoContent.call(this);
    this.x4z_1 = new Long(0, 0);
  }
  protoOf(EmptyContent).s2x = function () {
    return this.x4z_1;
  };
  protoOf(EmptyContent).toString = function () {
    return 'EmptyContent';
  };
  protoOf(EmptyContent).hashCode = function () {
    return 1450860306;
  };
  protoOf(EmptyContent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EmptyContent))
      return false;
    return true;
  };
  var EmptyContent_instance;
  function EmptyContent_getInstance() {
    if (EmptyContent_instance == null)
      new EmptyContent();
    return EmptyContent_instance;
  }
  function get_DecompressionListAttribute() {
    _init_properties_HeadersUtils_kt__fb6dxx();
    return DecompressionListAttribute;
  }
  var DecompressionListAttribute;
  function dropCompressionHeaders(_this__u8e3s4, method, attributes, alwaysRemove) {
    alwaysRemove = alwaysRemove === VOID ? false : alwaysRemove;
    _init_properties_HeadersUtils_kt__fb6dxx();
    if (method.equals(Companion_getInstance_2().h2s_1) || method.equals(Companion_getInstance_2().i2s_1))
      return Unit_instance;
    var header = _this__u8e3s4.k2e('Content-Encoding');
    if (header == null) {
      if (!alwaysRemove)
        return Unit_instance;
    } else {
      var tmp = get_DecompressionListAttribute();
      attributes.z2c(tmp, dropCompressionHeaders$lambda).c1(header);
    }
    _this__u8e3s4.k2f('Content-Encoding');
    _this__u8e3s4.k2f('Content-Length');
  }
  function dropCompressionHeaders$lambda() {
    _init_properties_HeadersUtils_kt__fb6dxx();
    // Inline function 'kotlin.collections.mutableListOf' call
    return ArrayList_init_$Create$();
  }
  var properties_initialized_HeadersUtils_kt_8c3zal;
  function _init_properties_HeadersUtils_kt__fb6dxx() {
    if (!properties_initialized_HeadersUtils_kt_8c3zal) {
      properties_initialized_HeadersUtils_kt_8c3zal = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'DecompressionListAttribute';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtMutableList);
      var tmp_0 = !(null == null) ? isInterface(null, KtMutableList) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(KtMutableList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().vb(), arrayOf([]), false))]), false);
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
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      DecompressionListAttribute = new AttributeKey(name, tmp$ret$1);
    }
  }
  function buildHeaders(block) {
    var tmp;
    if (block === VOID) {
      tmp = buildHeaders$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    // Inline function 'kotlin.apply' call
    var this_0 = new HeadersBuilder();
    block(this_0);
    return this_0.v2n();
  }
  function buildHeaders$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'FetchOptions';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(FetchOptions);
    var tmp_1 = null instanceof FetchOptions;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(getKClass(FetchOptions), arrayOf([]), false);
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
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.y4z_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_4;
  function Companion_getInstance_13() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function FetchOptions(requestInit) {
    Companion_getInstance_13();
    this.z4z_1 = requestInit;
  }
  function get_initHook() {
    return initHook;
  }
  var initHook;
  function Js() {
  }
  protoOf(Js).a50 = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new JsClientEngineConfig();
    block(this_0);
    return new JsClientEngine(this_0);
  };
  protoOf(Js).f3z = function (block) {
    return this.a50(block);
  };
  protoOf(Js).toString = function () {
    return 'Js';
  };
  protoOf(Js).hashCode = function () {
    return -527824213;
  };
  protoOf(Js).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Js))
      return false;
    return true;
  };
  var Js_instance;
  function Js_getInstance() {
    return Js_instance;
  }
  function JsClientEngineConfig$requestInit$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function JsClientEngineConfig() {
    HttpClientEngineConfig.call(this);
    var tmp = this;
    tmp.f50_1 = JsClientEngineConfig$requestInit$lambda;
    var tmp_0 = this;
    tmp_0.g50_1 = fetch$ref();
    this.h50_1 = Object.create(null);
  }
  function initHook$init$() {
    engines_getInstance().j50(Js_instance);
    return Unit_instance;
  }
  function createWebSocket($this, urlString_capturingHack, headers, $completion) {
    var tmp = new $createWebSocketCOROUTINE$($this, urlString_capturingHack, headers, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function executeWebSocketRequest($this, request, callContext, $completion) {
    var tmp = new $executeWebSocketRequestCOROUTINE$($this, request, callContext, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function JsClientEngine$execute$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function JsClientEngine$createWebSocket$headers_capturingHack$1() {
  }
  function JsClientEngine$createWebSocket$lambda($headers_capturingHack) {
    return function (name, values) {
      $headers_capturingHack[name] = joinToString(values, ',');
      return Unit_instance;
    };
  }
  function $executeCOROUTINE$_1(_this__u8e3s4, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w51_1 = _this__u8e3s4;
    this.x51_1 = data;
  }
  protoOf($executeCOROUTINE$_1).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 6;
            this.o8_1 = 1;
            suspendResult = callContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.y51_1 = suspendResult;
            this.a52_1 = this.x51_1.f43_1.t2c(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.x51_1)) {
              this.o8_1 = 5;
              suspendResult = executeWebSocketRequest(this.w51_1, this.x51_1, this.y51_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o8_1 = 2;
              continue $sm;
            }

          case 2:
            this.z51_1 = GMTDate();
            this.o8_1 = 3;
            suspendResult = ktor_toRaw(this.x51_1, this.a52_1, this.y51_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var rawRequest = suspendResult;
            var tmp0_safe_receiver = this.x51_1.f43_1.u2c(Companion_getInstance_13().y4z_1);
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z4z_1;
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
              tmp_0 = JsClientEngine$execute$lambda;
            } else {
              tmp_0 = tmp1_elvis_lhs;
            }

            var fetchOptions = tmp_0;
            this.o8_1 = 4;
            suspendResult = commonFetch(this.x51_1.a43_1.toString(), rawRequest, fetchOptions, this.w51_1.g52_1, get_job(this.y51_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers, this.x51_1.b43_1, this.x51_1.f43_1);
            var version = Companion_getInstance_6().p2s_1;
            var body = readBody(CoroutineScope_0(this.y51_1), rawResponse);
            var tmp2_safe_receiver = this.x51_1.f43_1.u2c(get_ResponseAdapterAttributeKey());
            var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.e4u(this.x51_1, status, headers, body, this.x51_1.d43_1, this.y51_1);
            var responseBody = tmp3_elvis_lhs == null ? body : tmp3_elvis_lhs;
            return new HttpResponseData(status, this.z51_1, headers, version, responseBody, this.y51_1);
          case 5:
            return suspendResult;
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
  function $createWebSocketCOROUTINE$(_this__u8e3s4, urlString_capturingHack, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s50_1 = _this__u8e3s4;
    this.t50_1 = urlString_capturingHack;
    this.u50_1 = headers;
  }
  protoOf($createWebSocketCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            var tmp0 = this.u50_1.b2f();
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.t();
            while (_iterator__ex2g4s.u()) {
              var element = _iterator__ex2g4s.v();
              if (equals_0(element, 'Sec-WebSocket-Protocol', true)) {
                destination.c1(element);
              }
            }

            var protocolHeaderNames = destination;
            var tmp_0 = this;
            var destination_0 = ArrayList_init_$Create$();
            var _iterator__ex2g4s_0 = protocolHeaderNames.t();
            while (_iterator__ex2g4s_0.u()) {
              var element_0 = _iterator__ex2g4s_0.v();
              var tmp0_safe_receiver = this.u50_1.a2f(element_0);
              if (tmp0_safe_receiver == null)
                null;
              else {
                destination_0.c1(tmp0_safe_receiver);
              }
            }

            var this_0 = flatten(destination_0);
            tmp_0.w50_1 = copyToArray(this_0);
            if (PlatformUtils_getInstance().p2e_1) {
              this.v50_1 = new WebSocket(this.t50_1, this.w50_1);
              this.o8_1 = 2;
              continue $sm;
            } else {
              var ws_import = import('ws');
              this.o8_1 = 1;
              suspendResult = await_0(ws_import, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var ws_capturingHack = suspendResult.default;
            var headers_capturingHack = new JsClientEngine$createWebSocket$headers_capturingHack$1();
            this.u50_1.c2f(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
            this.v50_1 = new ws_capturingHack(this.t50_1, this.w50_1, {headers: headers_capturingHack});
            this.o8_1 = 2;
            continue $sm;
          case 2:
            return this.v50_1;
          case 3:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 3) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  function $executeWebSocketRequestCOROUTINE$(_this__u8e3s4, request, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f51_1 = _this__u8e3s4;
    this.g51_1 = request;
    this.h51_1 = callContext;
  }
  protoOf($executeWebSocketRequestCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 5;
            this.j51_1 = GMTDate();
            this.m51_1 = this.g51_1.a43_1.toString();
            this.n51_1 = this.g51_1.f43_1.t2c(get_WEBSOCKETS_KEY());
            this.o8_1 = 1;
            suspendResult = createWebSocket(this.f51_1, this.m51_1, this.g51_1.c43_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k51_1 = suspendResult;
            this.i51_1 = new JsWebSocketSession(this.h51_1, this.k51_1, this.n51_1.l4t_1);
            this.p8_1 = 3;
            this.o8_1 = 2;
            suspendResult = awaitConnection(this.k51_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.l51_1 = suspendResult;
            this.p8_1 = 5;
            this.o8_1 = 4;
            continue $sm;
          case 3:
            this.p8_1 = 5;
            var tmp_0 = this.r8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.r8_1;
              var tmp_1 = this;
              cancel_3(this.h51_1, CancellationException_0('Failed to connect to ' + this.m51_1, cause));
              throw cause;
            } else {
              throw this.r8_1;
            }

          case 4:
            this.p8_1 = 5;
            var this_0 = this.k51_1.protocol;
            var tmp_2;
            if (charSequenceLength(this_0) > 0) {
              tmp_2 = this_0;
            } else {
              tmp_2 = null;
            }

            var protocol = tmp_2;
            var headers = !(protocol == null) ? headersOf('Sec-WebSocket-Protocol', protocol) : Companion_getInstance_5().s2n_1;
            return new HttpResponseData(Companion_getInstance_1().x2s_1, this.j51_1, headers, Companion_getInstance_6().p2s_1, this.i51_1, this.h51_1);
          case 5:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 5) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.g52_1 = config;
    this.h52_1 = setOf_0([HttpTimeoutCapability_instance, WebSocketCapability_instance, SSECapability_instance]);
    // Inline function 'kotlin.check' call
    if (!(this.g52_1.n44_1 == null)) {
      var message = 'Proxy unsupported in Js engine.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(JsClientEngine).h3y = function () {
    return this.g52_1;
  };
  protoOf(JsClientEngine).h43 = function () {
    return this.h52_1;
  };
  protoOf(JsClientEngine).j44 = function (data, $completion) {
    var tmp = new $executeCOROUTINE$_1(this, data, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  function mapToKtor(_this__u8e3s4, method, attributes) {
    return buildHeaders(mapToKtor$lambda(_this__u8e3s4, method, attributes));
  }
  function awaitConnection(_this__u8e3s4, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.f1j();
    $l$block: {
      if (cancellable.c1f()) {
        break $l$block;
      }
      // Inline function 'io.ktor.client.utils.addEventListener' call
      var events = ['error'];
      var events_0 = listOf_0(arrayConcat([['open'], events]));
      var callback = {_v: null};
      var tmp = awaitConnection$lambda(events_0, _this__u8e3s4, callback);
      var disposable = new sam$kotlinx_coroutines_DisposableHandle$0(tmp);
      callback._v = awaitConnection$lambda_0(true, disposable, cancellable, _this__u8e3s4);
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = events_0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var tmp_0;
        if (callback._v == null) {
          throwUninitializedPropertyAccessException('callback');
        } else {
          tmp_0 = callback._v;
        }
        _this__u8e3s4.addEventListener(element, tmp_0);
      }
      var disposable_0 = disposable;
      cancellable.r1h(awaitConnection$lambda_1(disposable_0, _this__u8e3s4));
    }
    return cancellable.l1g();
  }
  function sam$kotlinx_coroutines_DisposableHandle$0(function_0) {
    this.i52_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).c1i = function () {
    return this.i52_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).l3 = function () {
    return this.i52_1;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DisposableHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.l3(), other.l3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).hashCode = function () {
    return hashCode(this.l3());
  };
  function mapToKtor$lambda$lambda($this_buildHeaders) {
    return function (value, key) {
      $this_buildHeaders.i2f(key, value);
      return Unit_instance;
    };
  }
  function mapToKtor$lambda($this_mapToKtor, $method, $attributes) {
    return function ($this$buildHeaders) {
      // Inline function 'kotlin.js.asDynamic' call
      $this_mapToKtor.forEach(mapToKtor$lambda$lambda($this$buildHeaders));
      dropCompressionHeaders($this$buildHeaders, $method, $attributes, PlatformUtils_getInstance().p2e_1);
      return Unit_instance;
    };
  }
  function awaitConnection$lambda($events, $this, $callback) {
    return function () {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = $events.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var tmp;
        if ($callback._v == null) {
          throwUninitializedPropertyAccessException('callback');
        } else {
          tmp = $callback._v;
        }
        $this.removeEventListener(element, tmp);
      }
      return Unit_instance;
    };
  }
  function awaitConnection$lambda_0($once, $disposable, $continuation, $this_awaitConnection) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      if ($once) {
        $disposable.c1i();
      }
      var tmp0_subject = event.type;
      if (tmp0_subject === 'open') {
        var tmp0 = $continuation;
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var value = $this_awaitConnection;
        var tmp$ret$5 = _Result___init__impl__xyqfz8(value);
        tmp0.z8(tmp$ret$5);
      } else if (tmp0_subject === 'error') {
        var tmp0_0 = $continuation;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = WebSocketException_init_$Create$(asString(event));
        var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(exception));
        tmp0_0.z8(tmp$ret$7);
      }
      return Unit_instance;
    };
  }
  function awaitConnection$lambda_1($disposable, $this_awaitConnection) {
    return function (cause) {
      $disposable.c1i();
      var tmp;
      if (!(cause == null)) {
        $this_awaitConnection.close();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function asByteArray(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return new Int8Array(_this__u8e3s4.buffer, _this__u8e3s4.byteOffset, _this__u8e3s4.length);
  }
  function readBodyBrowser(_this__u8e3s4, response) {
    var tmp0_elvis_lhs = response.body;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance().v23_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer(_this__u8e3s4, VOID, VOID, channelFromStream$slambda_0(stream, null)).r23_1;
  }
  function readChunk(_this__u8e3s4, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    var tmp = _this__u8e3s4.read();
    var tmp_0 = tmp.then(readChunk$lambda(safe));
    tmp_0.catch(readChunk$lambda_0(safe));
    return safe.g9();
  }
  function channelFromStream$slambda$lambda(it) {
    return Unit_instance;
  }
  function channelFromStream$slambda($stream, resultContinuation) {
    this.r52_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(channelFromStream$slambda).f3u = function ($this$writer, $completion) {
    var tmp = this.g3u($this$writer, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(channelFromStream$slambda).k9 = function (p1, $completion) {
    return this.f3u(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(channelFromStream$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 9;
            this.u52_1 = this.r52_1.getReader();
            this.p8_1 = 7;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.o8_1 = 6;
              continue $sm;
            }

            this.o8_1 = 2;
            suspendResult = readChunk(this.u52_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_elvis_lhs = suspendResult;
            if (tmp0_elvis_lhs == null) {
              this.o8_1 = 6;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.v52_1 = tmp0_elvis_lhs;
              this.o8_1 = 3;
              continue $sm;
            }

          case 3:
            var chunk = this.v52_1;
            this.o8_1 = 4;
            suspendResult = writeFully_0(this.s52_1.m29_1, asByteArray(chunk), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.o8_1 = 5;
            suspendResult = this.s52_1.m29_1.o21(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.o8_1 = 1;
            continue $sm;
          case 6:
            this.p8_1 = 9;
            this.o8_1 = 10;
            continue $sm;
          case 7:
            this.p8_1 = 9;
            var tmp_1 = this.r8_1;
            if (tmp_1 instanceof Error) {
              this.t52_1 = this.r8_1;
              this.o8_1 = 8;
              var tmp_2 = this.u52_1.cancel(this.t52_1);
              suspendResult = await_0(tmp_2.catch(channelFromStream$slambda$lambda), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.r8_1;
            }

          case 8:
            throw this.t52_1;
          case 9:
            throw this.r8_1;
          case 10:
            this.p8_1 = 9;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 9) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(channelFromStream$slambda).g3u = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.r52_1, completion);
    i.s52_1 = $this$writer;
    return i;
  };
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.f3u($this$writer, $completion);
    }, 1);
  }
  function readChunk$lambda($continuation) {
    return function (it) {
      var chunk = it.value;
      var result = it.done ? null : chunk;
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(result);
      this_0.z8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function readChunk$lambda_0($continuation) {
    return function (cause) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
      this_0.z8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function commonFetch(input, init, requestConfig, config, callJob, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.f1j();
    var controller = AbortController_0();
    init.signal = controller.signal;
    config.f50_1(init);
    requestConfig(init);
    callJob.k1f(true, VOID, commonFetch$lambda(controller));
    var tmp;
    if (PlatformUtils_getInstance().p2e_1) {
      tmp = config.g50_1(input, init);
    } else {
      var options = Object.assign(Object.create(null), init, config.h50_1);
      tmp = config.g50_1(input, options);
    }
    var promise = tmp;
    var tmp_0 = commonFetch$lambda_0(cancellable);
    promise.then(tmp_0, commonFetch$lambda_1(cancellable));
    return cancellable.l1g();
  }
  function readBody(_this__u8e3s4, response) {
    return readBodyBrowser(_this__u8e3s4, response);
  }
  function AbortController_0() {
    return new AbortController();
  }
  function commonFetch$lambda($controller) {
    return function (it) {
      $controller.abort();
      return Unit_instance;
    };
  }
  function commonFetch$lambda_0($continuation) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(it);
      this_0.z8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function commonFetch$lambda_1($continuation) {
    return function (it) {
      var tmp0 = $continuation;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = Error_init_$Create$('Fail to fetch', it);
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.z8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function fetch$ref() {
    return constructCallableReference(function (p0, p1) {
      return fetch(p0, p1);
    }, 2, 0, 34, 'fetch');
  }
  function isReservedStatusCode($this, $receiver) {
    // Inline function 'kotlin.let' call
    var resolved = Companion_getInstance_7().g3h($receiver);
    return resolved == null || equals(resolved, Codes_CLOSED_ABNORMALLY_getInstance());
  }
  function sam$kotlinx_coroutines_DisposableHandle$0_0(function_0) {
    this.w52_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).c1i = function () {
    return this.w52_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).l3 = function () {
    return this.w52_1;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DisposableHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.l3(), other.l3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).hashCode = function () {
    return hashCode(this.l3());
  };
  function JsWebSocketSession$lambda(this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var data = event.data;
      var tmp;
      if (data instanceof ArrayBuffer) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = new Int8Array(data);
        tmp = Binary_init_$Create$(true, tmp$ret$3);
      } else {
        if (!(data == null) ? typeof data === 'string' : false) {
          tmp = Text_init_$Create$(data);
        } else {
          var error = IllegalStateException_init_$Create$('Unknown frame type: ' + event.type);
          this$0.z52_1.h1l(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0.a53_1.k1v(frame);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_0($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_1(this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var cause = WebSocketException_init_$Create$(asString(event));
      this$0.z52_1.h1l(cause);
      this$0.a53_1.o1v(cause);
      this$0.b53_1.s1v();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_2($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_3(this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var reason = new CloseReason(event.code, event.reason);
      this$0.z52_1.g1l(reason);
      this$0.a53_1.k1v(Close_init_$Create$(reason));
      this$0.a53_1.q1v();
      this$0.b53_1.s1v();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_4($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda$lambda($cause, this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      if ($cause == null) {
        this$0.y52_1.close();
      } else {
        this$0.y52_1.close(Codes_NORMAL_getInstance().d3h_1, 'Client failed');
      }
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda$lambda_0($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_5(this$0, $onMessage, $onError) {
    return function (cause) {
      var tmp0 = this$0;
      $l$block: {
        // Inline function 'io.ktor.client.plugins.websocket.JsWebSocketSession.runWhenOpen' call
        if (tmp0.y52_1.readyState === WebSocket.OPEN) {
          if (cause == null) {
            this$0.y52_1.close();
          } else {
            this$0.y52_1.close(Codes_NORMAL_getInstance().d3h_1, 'Client failed');
          }
          break $l$block;
        }
        // Inline function 'io.ktor.client.utils.addEventListener' call
        var this_0 = tmp0.y52_1;
        var callback = JsWebSocketSession$lambda$lambda(cause, this$0);
        // Inline function 'org.w3c.dom.AddEventListenerOptions' call
        var o = {};
        o['passive'] = false;
        o['once'] = true;
        o['capture'] = false;
        var options = (!(o == null) ? !(o == null) : false) ? o : THROW_CCE();
        this_0.addEventListener('open', callback, options);
        var tmp = JsWebSocketSession$lambda$lambda_0(this_0, 'open', callback);
        new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp);
      }
      $onMessage.c1i();
      $onError.c1i();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$slambda(this$0, resultContinuation) {
    this.n53_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsWebSocketSession$slambda).q2a = function ($this$launch, $completion) {
    var tmp = this.r2a($this$launch, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(JsWebSocketSession$slambda).k9 = function (p1, $completion) {
    return this.q2a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JsWebSocketSession$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 10;
            this.s53_1 = this.n53_1.b53_1;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.q53_1 = this.s53_1;
            this.p53_1 = null;
            this.o8_1 = 2;
            continue $sm;
          case 2:
            this.o8_1 = 3;
            continue $sm;
          case 3:
            this.p8_1 = 9;
            this.p8_1 = 8;
            this.r53_1 = this.q53_1.t();
            this.o8_1 = 4;
            continue $sm;
          case 4:
            this.o8_1 = 5;
            suspendResult = this.r53_1.m1t(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.o8_1 = 6;
              continue $sm;
            }

            var e = this.r53_1.v();
            switch (e.p3h_1.a1_1) {
              case 0:
                var text = e.q3h_1;
                this.n53_1.y52_1.send(decodeToString(text, 0, 0 + text.length | 0));
                break;
              case 1:
                var tmp_0 = e.q3h_1;
                var source = tmp_0 instanceof Int8Array ? tmp_0 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.n53_1.y52_1.send(frameData);
                break;
              case 2:
                var builder = new Buffer();
                writeFully(builder, e.q3h_1);
                var data = builder;
                var code = data.i1b();
                var reason = readText(data);
                this.n53_1.z52_1.g1l(new CloseReason(code, reason));
                if (isReservedStatusCode(this.n53_1, code)) {
                  this.n53_1.y52_1.close();
                } else {
                  this.n53_1.y52_1.close(code, reason);
                }

                break;
              case 3:
              case 4:
                break;
              default:
                noWhenBranchMatchedException();
                break;
            }

            this.o8_1 = 4;
            continue $sm;
          case 6:
            this.p8_1 = 10;
            this.o8_1 = 7;
            var tmp_1 = this;
            continue $sm;
          case 7:
            this.p8_1 = 10;
            cancelConsumed(this.q53_1, this.p53_1);
            this.o8_1 = 12;
            continue $sm;
          case 8:
            this.p8_1 = 9;
            var tmp_2 = this.r8_1;
            if (tmp_2 instanceof Error) {
              var e_0 = this.r8_1;
              var tmp_3 = this;
              this.p53_1 = e_0;
              throw e_0;
            } else {
              throw this.r8_1;
            }

          case 9:
            this.p8_1 = 10;
            var t = this.r8_1;
            cancelConsumed(this.q53_1, this.p53_1);
            throw t;
          case 10:
            throw this.r8_1;
          case 11:
            this.p8_1 = 10;
            cancelConsumed(this.q53_1, this.p53_1);
            if (false) {
              this.o8_1 = 1;
              continue $sm;
            }

            this.o8_1 = 12;
            continue $sm;
          case 12:
            return Unit_instance;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.p8_1 === 10) {
          throw e_1;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(JsWebSocketSession$slambda).r2a = function ($this$launch, completion) {
    var i = new JsWebSocketSession$slambda(this.n53_1, completion);
    i.o53_1 = $this$launch;
    return i;
  };
  function JsWebSocketSession$slambda_0(this$0, resultContinuation) {
    var i = new JsWebSocketSession$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.q2a($this$launch, $completion);
    }, 1);
  }
  function JsWebSocketSession(coroutineContext, websocket, channelsConfig) {
    this.x52_1 = coroutineContext;
    this.y52_1 = websocket;
    this.z52_1 = CompletableDeferred();
    this.a53_1 = from(Factory_getInstance(), channelsConfig.c3i_1);
    this.b53_1 = from(Factory_getInstance(), channelsConfig.d3i_1);
    this.c53_1 = this.a53_1;
    this.d53_1 = this.b53_1;
    this.e53_1 = this.z52_1;
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_0 = this.y52_1;
    var callback = JsWebSocketSession$lambda(this);
    // Inline function 'org.w3c.dom.AddEventListenerOptions' call
    var o = {};
    o['passive'] = false;
    o['once'] = false;
    o['capture'] = false;
    var options = (!(o == null) ? !(o == null) : false) ? o : THROW_CCE();
    this_0.addEventListener('message', callback, options);
    var tmp = JsWebSocketSession$lambda_0(this_0, 'message', callback);
    var onMessage = new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp);
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_1 = this.y52_1;
    var callback_0 = JsWebSocketSession$lambda_1(this);
    // Inline function 'org.w3c.dom.AddEventListenerOptions' call
    var o_0 = {};
    o_0['passive'] = false;
    o_0['once'] = false;
    o_0['capture'] = false;
    var options_0 = (!(o_0 == null) ? !(o_0 == null) : false) ? o_0 : THROW_CCE();
    this_1.addEventListener('error', callback_0, options_0);
    var tmp_0 = JsWebSocketSession$lambda_2(this_1, 'error', callback_0);
    var onError = new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp_0);
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_2 = this.y52_1;
    var callback_1 = JsWebSocketSession$lambda_3(this);
    // Inline function 'org.w3c.dom.AddEventListenerOptions' call
    var o_1 = {};
    o_1['passive'] = false;
    o_1['once'] = true;
    o_1['capture'] = false;
    var options_1 = (!(o_1 == null) ? !(o_1 == null) : false) ? o_1 : THROW_CCE();
    this_2.addEventListener('close', callback_1, options_1);
    var tmp_1 = JsWebSocketSession$lambda_4(this_2, 'close', callback_1);
    new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp_1);
    var tmp0_safe_receiver = this.x52_1.b9(Key_instance);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.i1f(JsWebSocketSession$lambda_5(this, onMessage, onError));
    }
    // Inline function 'org.w3c.dom.ARRAYBUFFER' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9 = 'arraybuffer';
    this.y52_1.binaryType = tmp$ret$9;
    launch(this, VOID, VOID, JsWebSocketSession$slambda_0(this, null));
    // Inline function 'kotlin.require' call
    if (!!channelsConfig.c3i_1.x3o()) {
      var message = 'Suspendable channels are not supported in JS.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(JsWebSocketSession).g1e = function () {
    return this.x52_1;
  };
  protoOf(JsWebSocketSession).y3h = function () {
    return this.c53_1;
  };
  protoOf(JsWebSocketSession).z3h = function () {
    return this.d53_1;
  };
  protoOf(JsWebSocketSession).w3h = function (_) {
    throw WebSocketException_init_$Create$('Max frame size switch is not supported in Js engine.');
  };
  protoOf(JsWebSocketSession).x3h = function () {
    return new Long(-1, 2147483647);
  };
  protoOf(JsWebSocketSession).v3h = function (negotiatedExtensions) {
    // Inline function 'kotlin.require' call
    if (!negotiatedExtensions.r()) {
      var message = 'Extensions are not supported.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(JsWebSocketSession).o21 = function ($completion) {
    return Unit_instance;
  };
  function ktor_toRaw(_this__u8e3s4, clientConfig, callContext, $completion) {
    var tmp = new $toRawCOROUTINE$(_this__u8e3s4, clientConfig, callContext, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function asString(_this__u8e3s4) {
    var tmp = JSON;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = ['message', 'target', 'type', 'isTrusted'];
    return tmp.stringify(_this__u8e3s4, tmp$ret$0);
  }
  function getBodyBytes(content, callContext, $completion) {
    var tmp = new $getBodyBytesCOROUTINE$(content, callContext, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function buildObject(block) {
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    return this_0;
  }
  function toRaw$lambda($skipContentLengthHeader, $jsHeaders) {
    return function (key, value) {
      var tmp;
      if ($skipContentLengthHeader && key === 'Content-Length') {
        return Unit_instance;
      }
      $jsHeaders[key] = value;
      return Unit_instance;
    };
  }
  function toRaw$lambda_0($this_toRaw, $jsHeaders, $clientConfig, $bodyBytes) {
    return function ($this$buildObject) {
      $this$buildObject.method = $this_toRaw.b43_1.m2s_1;
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.s3y_1) {
        // Inline function 'org.w3c.fetch.FOLLOW' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = 'follow';
      } else {
        // Inline function 'org.w3c.fetch.MANUAL' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = 'manual';
      }
      $this$buildObject.redirect = tmp;
      var tmp0_safe_receiver = $bodyBytes;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$buildObject.body = new Uint8Array(toTypedArray(tmp0_safe_receiver));
      }
      return Unit_instance;
    };
  }
  function getBodyBytes$slambda($content, resultContinuation) {
    this.y54_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getBodyBytes$slambda).f3u = function ($this$writer, $completion) {
    var tmp = this.g3u($this$writer, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(getBodyBytes$slambda).k9 = function (p1, $completion) {
    return this.f3u(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(getBodyBytes$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = this.y54_1.t2z(this.z54_1.m29_1, this);
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
  protoOf(getBodyBytes$slambda).g3u = function ($this$writer, completion) {
    var i = new getBodyBytes$slambda(this.y54_1, completion);
    i.z54_1 = $this$writer;
    return i;
  };
  function getBodyBytes$slambda_0($content, resultContinuation) {
    var i = new getBodyBytes$slambda($content, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.f3u($this$writer, $completion);
    }, 1);
  }
  function $toRawCOROUTINE$(_this__u8e3s4, clientConfig, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b54_1 = _this__u8e3s4;
    this.c54_1 = clientConfig;
    this.d54_1 = callContext;
  }
  protoOf($toRawCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.e54_1 = {};
            var this_0 = this.b54_1;
            var skipContentLengthHeader = !get_supportsRequestBody(this_0.b43_1) && isEmpty(this_0.d43_1);
            mergeHeaders(this_0.c43_1, this_0.d43_1, toRaw$lambda(skipContentLengthHeader, this.e54_1));
            this.o8_1 = 1;
            suspendResult = getBodyBytes(this.b54_1.d43_1, this.d54_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return buildObject(toRaw$lambda_0(this.b54_1, this.e54_1, this.c54_1, bodyBytes));
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
  function $getBodyBytesCOROUTINE$(content, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n54_1 = content;
    this.o54_1 = callContext;
  }
  protoOf($getBodyBytesCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 4;
            var tmp0_subject = this.n54_1;
            if (tmp0_subject instanceof ByteArrayContent) {
              this.p54_1 = this.n54_1.t2x();
              this.o8_1 = 5;
              continue $sm;
            } else {
              if (tmp0_subject instanceof ReadChannelContent) {
                this.o8_1 = 3;
                suspendResult = readBuffer(this.n54_1.r2z(), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (tmp0_subject instanceof WriteChannelContent) {
                  this.o8_1 = 2;
                  var tmp_0 = GlobalScope_instance;
                  suspendResult = readBuffer(writer(tmp_0, this.o54_1, VOID, getBodyBytes$slambda_0(this.n54_1, null)).r23_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject instanceof ContentWrapper) {
                    this.o8_1 = 1;
                    suspendResult = getBodyBytes(this.n54_1.x2z(), this.o54_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp0_subject instanceof NoContent) {
                      this.p54_1 = null;
                      this.o8_1 = 5;
                      continue $sm;
                    } else {
                      if (tmp0_subject instanceof ProtocolUpgrade) {
                        var tmp_1 = this;
                        throw new UnsupportedContentTypeException(this.n54_1);
                      } else {
                        var tmp_2 = this;
                        noWhenBranchMatchedException();
                      }
                    }
                  }
                }
              }
            }

            break;
          case 1:
            this.p54_1 = suspendResult;
            this.o8_1 = 5;
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.p54_1 = readByteArray(ARGUMENT);
            this.o8_1 = 5;
            continue $sm;
          case 3:
            var ARGUMENT_0 = suspendResult;
            this.p54_1 = readByteArray(ARGUMENT_0);
            this.o8_1 = 5;
            continue $sm;
          case 4:
            throw this.r8_1;
          case 5:
            return this.p54_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 4) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  function Node(entry, next) {
    this.a55_1 = entry;
    this.b55_1 = next;
  }
  function engines$iterator$1() {
    this.c55_1 = engines_getInstance().i50_1.kotlinx$atomicfu$value;
  }
  protoOf(engines$iterator$1).v = function () {
    var result = ensureNotNull(this.c55_1);
    this.c55_1 = result.b55_1;
    return result.a55_1.d55_1;
  };
  protoOf(engines$iterator$1).u = function () {
    return !(null == this.c55_1);
  };
  function engines() {
    engines_instance = this;
    this.i50_1 = atomic$ref$1(null);
  }
  protoOf(engines).j50 = function (item) {
    this.f55(item, 1.0);
  };
  protoOf(engines).f55 = function (item, priority) {
    $l$loop: while (true) {
      var current = this.i50_1.kotlinx$atomicfu$value;
      var new_0 = new Node(new EngineEntry(item, priority), current);
      if (this.i50_1.atomicfu$compareAndSet(current, new_0))
        break $l$loop;
    }
  };
  protoOf(engines).t = function () {
    return new engines$iterator$1();
  };
  var engines_instance;
  function engines_getInstance() {
    if (engines_instance == null)
      new engines();
    return engines_instance;
  }
  function EngineEntry(factory, priority) {
    priority = priority === VOID ? 1.0 : priority;
    this.d55_1 = factory;
    this.e55_1 = priority;
    // Inline function 'kotlin.require' call
    if (!!isNaN_0(this.e55_1)) {
      var message = 'Priority cannot be NaN';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function ProxyConfig_init_$Init$($this) {
    // Inline function 'kotlin.error' call
    var message = 'ProxyConfig should accept a url';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function ProxyConfig_init_$Create$() {
    return ProxyConfig_init_$Init$(objectCreate(protoOf(ProxyConfig)));
  }
  function ProxyConfig(url) {
    this.g55_1 = url;
  }
  protoOf(ProxyConfig).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.apply' call
    var this_1 = this.g55_1;
    this_0.q(this_1.f2w_1.q2v_1);
    this_0.q('://');
    if (!(this_1.x2v_1 == null)) {
      this_0.q(encodeURLParameter(ensureNotNull(this_1.x2v_1)));
      if (!(this_1.y2v_1 == null)) {
        this_0.s(_Char___init__impl__6a9atx(58));
        this_0.q(encodeURLParameter(ensureNotNull(this_1.y2v_1)));
      }
      this_0.s(_Char___init__impl__6a9atx(64));
    }
    this_0.q(get_hostWithPort(this_1));
    return this_0.toString();
  };
  function ProxyBuilder() {
  }
  protoOf(ProxyBuilder).h55 = function (url) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!equals_0(url.f2w_1.q2v_1, Companion_getInstance_8().q2w_1.q2v_1, true)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new ProxyConfig(url);
  };
  var ProxyBuilder_instance;
  function ProxyBuilder_getInstance() {
    return ProxyBuilder_instance;
  }
  function ConnectTimeoutException() {
  }
  function SocketTimeoutException() {
  }
  function InterruptedIOException() {
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers(_this__u8e3s4) {
  }
  var useEngineDispatcher;
  function unwrapCancellationException(_this__u8e3s4) {
    var exception = _this__u8e3s4;
    $l$loop: while (exception instanceof CancellationException) {
      if (equals(exception, exception.cause)) {
        return _this__u8e3s4;
      }
      exception = exception.cause;
    }
    var tmp0_elvis_lhs = exception;
    return tmp0_elvis_lhs == null ? _this__u8e3s4 : tmp0_elvis_lhs;
  }
  function get_FACTORY() {
    _init_properties_HttpClient_web_kt__pyfqvb();
    return FACTORY;
  }
  var FACTORY;
  function HttpClient_1(block) {
    var tmp;
    if (block === VOID) {
      tmp = HttpClient$lambda_1;
    } else {
      tmp = block;
    }
    block = tmp;
    _init_properties_HttpClient_web_kt__pyfqvb();
    return HttpClient_0(get_FACTORY(), block);
  }
  function HttpClient$lambda_1(_this__u8e3s4) {
    _init_properties_HttpClient_web_kt__pyfqvb();
    return Unit_instance;
  }
  var properties_initialized_HttpClient_web_kt_zbb0cl;
  function _init_properties_HttpClient_web_kt__pyfqvb() {
    if (!properties_initialized_HttpClient_web_kt_zbb0cl) {
      properties_initialized_HttpClient_web_kt_zbb0cl = true;
      var tmp0 = engines_getInstance();
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (!equals(element, Js_instance)) {
            tmp$ret$0 = element;
            break $l$block;
          }
        }
        tmp$ret$0 = null;
      }
      var tmp0_elvis_lhs = tmp$ret$0;
      FACTORY = tmp0_elvis_lhs == null ? Js_instance : tmp0_elvis_lhs;
    }
  }
  function checkContentLength(contentLength, bodySize, method) {
  }
  //region block: post-declaration
  defineProp(protoOf(DoubleReceiveException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(NoTransformationFoundException), 'message', function () {
    return this.e();
  });
  protoOf(HttpClientEngineBase).h43 = get_supportedCapabilities;
  protoOf(HttpClientEngineBase).i3y = install;
  defineProp(protoOf(ClientEngineClosedException), 'cause', function () {
    return this.f();
  });
  protoOf(KtorCallContextElement).b9 = get;
  protoOf(KtorCallContextElement).fh = fold;
  protoOf(KtorCallContextElement).eh = minusKey;
  protoOf(KtorCallContextElement).gh = plus;
  defineProp(protoOf(RedirectResponseException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(ClientRequestException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(ServerResponseException), 'message', function () {
    return this.e();
  });
  protoOf(HttpRequest$1).g1e = get_coroutineContext;
  protoOf(JsWebSocketSession).a3i = send;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  AfterRenderHook_instance = new AfterRenderHook();
  AfterReceiveHook_instance = new AfterReceiveHook();
  RequestError_instance = new RequestError();
  ReceiveError_instance = new ReceiveError();
  RenderRequestHook_instance = new RenderRequestHook();
  SetupRequestContext_instance = new SetupRequestContext();
  HttpTimeoutCapability_instance = new HttpTimeoutCapability();
  SetupRequest_instance = new SetupRequest();
  Send_instance = new Send();
  RequestHook_instance = new RequestHook();
  TransformResponseBodyHook_instance = new TransformResponseBodyHook();
  SSECapability_instance = new SSECapability();
  WebSocketExtensionsCapability_instance = new WebSocketExtensionsCapability();
  WebSocketCapability_instance = new WebSocketCapability();
  Companion_instance_3 = new Companion_2();
  Js_instance = new Js();
  ProxyBuilder_instance = new ProxyBuilder();
  useEngineDispatcher = true;
  //endregion
  //region block: eager init
  initHook = initHook$init$();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var io = _.io || (_.io = {});
    var ktor = io.ktor || (io.ktor = {});
    var client = ktor.client || (ktor.client = {});
    var engine = client.engine || (client.engine = {});
    var js = engine.js || (engine.js = {});
    defineProp(js, 'initHook', get_initHook, VOID, true);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = ProxyBuilder_instance;
  _.$_$.b = timeout;
  _.$_$.c = FormBuilder;
  _.$_$.d = FormDataContent;
  _.$_$.e = MultiPartFormDataContent;
  _.$_$.f = formData;
  _.$_$.g = HttpRequestBuilder;
  _.$_$.h = headers;
  _.$_$.i = url;
  _.$_$.j = HttpStatement;
  _.$_$.k = HttpClient_1;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-core.js.map
