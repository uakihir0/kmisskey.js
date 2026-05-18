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
  var Unit_instance = kotlin_kotlin.$_$.z;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var ensureNotNull = kotlin_kotlin.$_$.rg;
  var protoOf = kotlin_kotlin.$_$.ac;
  var objectCreate = kotlin_kotlin.$_$.zb;
  var CancellationException = kotlin_kotlin.$_$.o8;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var CoroutineImpl = kotlin_kotlin.$_$.h9;
  var THROW_CCE = kotlin_kotlin.$_$.ag;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.i;
  var toString = kotlin_kotlin.$_$.dc;
  var getKClassFromExpression = kotlin_kotlin.$_$.sc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p8;
  var initMetadataForLambda = kotlin_kotlin.$_$.fb;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cb;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var AttributesJsFn = kotlin_io_ktor_ktor_utils.$_$.o;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.n;
  var AutoCloseable = kotlin_kotlin.$_$.jf;
  var isInterface = kotlin_kotlin.$_$.pb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var initMetadataForClass = kotlin_kotlin.$_$.ab;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q1;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.a;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.k1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.o;
  var arrayOf = kotlin_kotlin.$_$.ng;
  var createKType = kotlin_kotlin.$_$.rc;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.l;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bb;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.m;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.ua;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.k9;
  var IllegalStateException = kotlin_kotlin.$_$.uf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.o2;
  var captureStack = kotlin_kotlin.$_$.la;
  var defineProp = kotlin_kotlin.$_$.ta;
  var UnsupportedOperationException = kotlin_kotlin.$_$.lg;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.c3;
  var trimIndent = kotlin_kotlin.$_$.cf;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.q1;
  var fromInt = kotlin_kotlin.$_$.v9;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.j1;
  var readRemaining = kotlin_io_ktor_ktor_io.$_$.i;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.p2;
  var initMetadataForInterface = kotlin_kotlin.$_$.eb;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yg;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var writer = kotlin_io_ktor_ktor_io.$_$.v1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.w;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.v;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.b;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.t;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.u;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.r;
  var ContentWrapper = kotlin_io_ktor_ktor_http.$_$.s;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.m1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.x;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var emptySet = kotlin_kotlin.$_$.r6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h1;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.j1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.v1;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var getKClass = kotlin_kotlin.$_$.tc;
  var getStarKTypeProjection = kotlin_kotlin.$_$.uc;
  var ioDispatcher = kotlin_io_ktor_ktor_io.$_$.s1;
  var SilentSupervisor = kotlin_io_ktor_ktor_utils.$_$.q;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var lazy = kotlin_kotlin.$_$.xg;
  var KProperty1 = kotlin_kotlin.$_$.yc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xa;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var KtMutableMap = kotlin_kotlin.$_$.p5;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.pc;
  var setOf = kotlin_kotlin.$_$.v7;
  var get = kotlin_kotlin.$_$.d9;
  var fold = kotlin_kotlin.$_$.c9;
  var minusKey = kotlin_kotlin.$_$.e9;
  var plus = kotlin_kotlin.$_$.g9;
  var Element = kotlin_kotlin.$_$.f9;
  var joinToString = kotlin_kotlin.$_$.c7;
  var setOf_0 = kotlin_kotlin.$_$.w7;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.j;
  var isSuspendFunction = kotlin_kotlin.$_$.sb;
  var initMetadataForObject = kotlin_kotlin.$_$.gb;
  var MalformedInputException = kotlin_io_ktor_ktor_io.$_$.p;
  var Unit = kotlin_kotlin.$_$.kg;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.g;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var toLong = kotlin_kotlin.$_$.ve;
  var contentType = kotlin_io_ktor_ktor_http.$_$.r1;
  var isByteArray = kotlin_kotlin.$_$.jb;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.c1;
  var Long = kotlin_kotlin.$_$.vf;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.d;
  var rethrowCloseCauseIfNeeded = kotlin_io_ktor_ktor_io.$_$.u1;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.c;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var CIOMultipartDataBase = kotlin_io_ktor_ktor_http_cio.$_$.a;
  var MultiPartData = kotlin_io_ktor_ktor_http.$_$.p;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.o1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.f1;
  var invokeOnCompletion = kotlin_io_ktor_ktor_io.$_$.r1;
  var attachWriterJob = kotlin_io_ktor_ktor_io.$_$.n1;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.l;
  var Source = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.h;
  var readText = kotlin_io_ktor_ktor_io.$_$.t1;
  var toInt = kotlin_kotlin.$_$.se;
  var reversed = kotlin_kotlin.$_$.u7;
  var Attributes = kotlin_io_ktor_ktor_utils.$_$.p;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.s1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.a;
  var toList = kotlin_kotlin.$_$.d8;
  var sortedWith = kotlin_kotlin.$_$.y7;
  var Collection = kotlin_kotlin.$_$.e5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.b2;
  var charSequenceLength = kotlin_kotlin.$_$.qa;
  var get_name = kotlin_io_ktor_ktor_io.$_$.t;
  var roundToInt = kotlin_kotlin.$_$.fc;
  var firstOrNull = kotlin_kotlin.$_$.v6;
  var FunctionAdapter = kotlin_kotlin.$_$.ha;
  var Comparator = kotlin_kotlin.$_$.nf;
  var hashCode = kotlin_kotlin.$_$.za;
  var compareValues = kotlin_kotlin.$_$.n8;
  var charset = kotlin_io_ktor_ktor_http.$_$.p1;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.g2;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.o1;
  var readText_0 = kotlin_io_ktor_ktor_io.$_$.y;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.l;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.n1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.f2;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.z1;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.m1;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.j;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.db;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var Default_getInstance = kotlin_kotlin.$_$.n;
  var equalsLong = kotlin_kotlin.$_$.u9;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var toLongOrNull = kotlin_kotlin.$_$.ue;
  var multiply = kotlin_kotlin.$_$.aa;
  var compare = kotlin_kotlin.$_$.p9;
  var toNumber = kotlin_kotlin.$_$.ga;
  var numberToLong = kotlin_kotlin.$_$.ca;
  var add = kotlin_kotlin.$_$.m9;
  var Companion_instance = kotlin_kotlin.$_$.u;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.n3;
  var createFailure = kotlin_kotlin.$_$.qg;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.o3;
  var toString_0 = kotlin_kotlin.$_$.bh;
  var trimMargin = kotlin_kotlin.$_$.df;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var isWebsocket = kotlin_io_ktor_ktor_http.$_$.a2;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var get_isTraceEnabled = kotlin_io_ktor_ktor_utils.$_$.h;
  var KProperty0 = kotlin_kotlin.$_$.xc;
  var createKTypeParameter = kotlin_kotlin.$_$.qc;
  var NullBody = kotlin_io_ktor_ktor_http.$_$.q;
  var WebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.o;
  var DefaultWebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.k;
  var generateNonce = kotlin_io_ktor_ktor_utils.$_$.y;
  var Default_getInstance_0 = kotlin_kotlin.$_$.f;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.e1;
  var emptyList = kotlin_kotlin.$_$.p6;
  var addAll = kotlin_kotlin.$_$.s5;
  var parseWebSocketExtensions = kotlin_io_ktor_ktor_websockets.$_$.q;
  var WebSocketExtensionsConfig = kotlin_io_ktor_ktor_websockets.$_$.m;
  var WebSocketChannelsConfig = kotlin_io_ktor_ktor_websockets.$_$.l;
  var Companion_getInstance_3 = kotlin_io_ktor_ktor_websockets.$_$.b;
  var DefaultWebSocketSession_0 = kotlin_io_ktor_ktor_websockets.$_$.j;
  var IllegalStateException_init_$Init$_1 = kotlin_kotlin.$_$.r2;
  var KtList = kotlin_kotlin.$_$.j5;
  var WebSocketExtension = kotlin_io_ktor_ktor_websockets.$_$.n;
  var ByteChannel = kotlin_io_ktor_ktor_io.$_$.i1;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.i1;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.e2;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.x;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.a1;
  var GMTDate = kotlin_io_ktor_ktor_utils.$_$.d;
  var set = kotlin_io_ktor_ktor_http.$_$.c2;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.k;
  var formUrlEncode = kotlin_io_ktor_ktor_http.$_$.v1;
  var toByteArray_0 = kotlin_io_ktor_ktor_io.$_$.c1;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.d1;
  var writeFully_0 = kotlin_io_ktor_ktor_io.$_$.m;
  var copyTo_0 = kotlin_io_ktor_ktor_io.$_$.e;
  var closeFinally = kotlin_kotlin.$_$.og;
  var close = kotlin_io_ktor_ktor_io.$_$.p1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g1;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.u;
  var writeText = kotlin_io_ktor_ktor_io.$_$.e1;
  var build = kotlin_io_ktor_ktor_io.$_$.w;
  var BinaryChannelItem = kotlin_io_ktor_ktor_http.$_$.y;
  var FormItem = kotlin_io_ktor_ktor_http.$_$.b1;
  var BinaryItem = kotlin_io_ktor_ktor_http.$_$.z;
  var FileItem = kotlin_io_ktor_ktor_http.$_$.a1;
  var toString_1 = kotlin_kotlin.$_$.we;
  var take = kotlin_kotlin.$_$.le;
  var writePacket = kotlin_io_ktor_ktor_io.$_$.n;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_http.$_$.h;
  var get_remaining = kotlin_io_ktor_ktor_io.$_$.z;
  var isNumber = kotlin_kotlin.$_$.qb;
  var getStringHashCode = kotlin_kotlin.$_$.ya;
  var quote = kotlin_io_ktor_ktor_http.$_$.b2;
  var isQuoted = kotlin_io_ktor_ktor_http.$_$.y1;
  var ByteReadPacket = kotlin_io_ktor_ktor_io.$_$.v;
  var decode = kotlin_io_ktor_ktor_io.$_$.q;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.f1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.f;
  var KtMutableList = kotlin_kotlin.$_$.n5;
  var Companion_getInstance_5 = kotlin_io_ktor_ktor_http.$_$.k;
  var equals_0 = kotlin_kotlin.$_$.ld;
  var flatten = kotlin_kotlin.$_$.x6;
  var copyToArray = kotlin_kotlin.$_$.m6;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var CancellationException_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var headersOf = kotlin_io_ktor_ktor_http.$_$.x1;
  var intercepted = kotlin_kotlin.$_$.s8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var listOf = kotlin_kotlin.$_$.k7;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.y1;
  var Error_init_$Create$ = kotlin_kotlin.$_$.d2;
  var Companion_getInstance_6 = kotlin_io_ktor_ktor_websockets.$_$.a;
  var Codes_CLOSED_ABNORMALLY_getInstance = kotlin_io_ktor_ktor_websockets.$_$.c;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.h;
  var Binary_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.f;
  var CloseReason = kotlin_io_ktor_ktor_websockets.$_$.i;
  var Close_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.g;
  var Codes_NORMAL_getInstance = kotlin_io_ktor_ktor_websockets.$_$.d;
  var decodeToString = kotlin_kotlin.$_$.hd;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var from = kotlin_io_ktor_ktor_websockets.$_$.p;
  var send = kotlin_io_ktor_ktor_websockets.$_$.e;
  var toTypedArray = kotlin_kotlin.$_$.l8;
  var get_supportsRequestBody = kotlin_io_ktor_ktor_http.$_$.d2;
  var isEmpty = kotlin_io_ktor_ktor_http.$_$.d1;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
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
    return this.d3z().j1e();
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
    var tmp = Phases_getInstance_0().y3x_1;
    client.k3v_1.x2i(tmp, HttpClientEngine$install$slambda_0(client, this, null));
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
  initMetadataForClass(defaultTransformers$2$content$1, VOID, VOID, ByteArrayContent);
  initMetadataForClass(defaultTransformers$2$content$2, VOID, VOID, ReadChannelContent);
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
  initMetadataForFunctionReference(PipelineContext$proceed$ref, VOID, VOID, [0]);
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
  initMetadataForCoroutine($cleanupCOROUTINE$, CoroutineImpl);
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
  initMetadataForClass(ConnectTimeoutException, 'ConnectTimeoutException', VOID, IOException);
  initMetadataForClass(InterruptedIOException, 'InterruptedIOException', VOID, IOException);
  initMetadataForClass(SocketTimeoutException, 'SocketTimeoutException', VOID, InterruptedIOException);
  initMetadataForObject(ProxyBuilder, 'ProxyBuilder');
  //endregion
  function HttpClient_init_$Init$(engine, userConfig, manageEngine, $this) {
    HttpClient.call($this, engine, userConfig);
    $this.e3v_1 = manageEngine;
    if ($this.e3v_1) {
      if (engine instanceof HttpClientEngineBase) {
        engine.s3v_1.atomicfu$incrementAndGet();
      }
      var tmp = ensureNotNull($this.h3v_1.a9(Key_instance));
      tmp.l1f(HttpClient$_init_$lambda_36nm6w(engine));
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
        tmp = $engine.s3v_1.atomicfu$decrementAndGet() <= 0;
      }
      var shouldClose = tmp;
      var tmp_0;
      if (shouldClose) {
        var tmp_1;
        if (cause == null) {
          $engine.h4();
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
    this.d3w_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda).g3w = function ($this$intercept, call, $completion) {
    var tmp = this.h3w($this$intercept, call, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpClient$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            var tmp_0 = this.f3w_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.f3w_1) + '(' + toString(getKClassFromExpression(this.f3w_1)) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.n8_1 = 1;
            suspendResult = this.d3w_1.l3v_1.s2i(Unit_instance, this.f3w_1.n3w(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            this.f3w_1.o3w(response);
            this.n8_1 = 2;
            suspendResult = this.e3w_1.x2h(this.f3w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 3) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpClient$slambda).h3w = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.d3w_1, completion);
    i.e3w_1 = $this$intercept;
    i.f3w_1 = call;
    return i;
  };
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    var l = function ($this$intercept, call, $completion) {
      return i.g3w($this$intercept, call, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClient$lambda($this$install) {
    defaultTransformers($this$install);
    return Unit_instance;
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.x3w_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda_1).b3x = function ($this$intercept, it, $completion) {
    var tmp = this.c3x($this$intercept, it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpClient$slambda_1).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b3x(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.y3w_1.y2h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.a3x_1 = suspendResult;
            this.o8_1 = 3;
            this.n8_1 = 4;
            continue $sm;
          case 2:
            this.o8_1 = 3;
            var tmp_0 = this.q8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.q8_1;
              var tmp_1 = this;
              this.x3w_1.o3v_1.k3g(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.y3w_1.t2i_1.n3w(), cause));
              throw cause;
            } else {
              throw this.q8_1;
            }

          case 3:
            throw this.q8_1;
          case 4:
            this.o8_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 3) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpClient$slambda_1).c3x = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.x3w_1, completion);
    i.y3w_1 = $this$intercept;
    i.z3w_1 = it;
    return i;
  };
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.b3x($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l3x_1 = _this__u8e3s4;
    this.m3x_1 = builder;
  }
  protoOf($executeCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.l3x_1.o3v_1.k3g(get_HttpRequestCreated(), this.m3x_1);
            this.n8_1 = 1;
            suspendResult = this.l3x_1.i3v_1.s2i(this.m3x_1, this.m3x_1.q3x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult instanceof HttpClientCall ? suspendResult : THROW_CCE();
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function HttpClient(engine, userConfig) {
    userConfig = userConfig === VOID ? new HttpClientConfig() : userConfig;
    this.c3v_1 = engine;
    this.d3v_1 = userConfig;
    this.e3v_1 = false;
    this.f3v_1 = atomic$boolean$1(false);
    this.g3v_1 = Job(this.c3v_1.j1e().a9(Key_instance));
    this.h3v_1 = this.c3v_1.j1e().ah(this.g3v_1);
    this.i3v_1 = new HttpRequestPipeline();
    this.j3v_1 = new HttpResponsePipeline();
    this.k3v_1 = new HttpSendPipeline();
    this.l3v_1 = new HttpReceivePipeline();
    this.m3v_1 = AttributesJsFn(true);
    this.n3v_1 = this.c3v_1.t3x();
    this.o3v_1 = new Events();
    this.p3v_1 = new HttpClientConfig();
    this.c3v_1.u3x(this);
    var tmp = Phases_getInstance_0().z3x_1;
    this.k3v_1.x2i(tmp, HttpClient$slambda_0(this, null));
    // Inline function 'kotlin.with' call
    var $this$with = this.d3v_1;
    this.p3v_1.i3y(get_HttpRequestLifecycle());
    this.p3v_1.i3y(get_BodyProgress());
    this.p3v_1.i3y(get_SaveBody());
    if ($this$with.f3y_1) {
      this.p3v_1.j3y('DefaultTransformers', HttpClient$lambda);
    }
    this.p3v_1.i3y(Plugin_getInstance());
    this.p3v_1.i3y(get_HttpCallValidator());
    if ($this$with.e3y_1) {
      this.p3v_1.i3y(get_HttpRedirect());
    }
    this.p3v_1.k3y($this$with);
    if ($this$with.f3y_1) {
      this.p3v_1.i3y(get_HttpPlainText());
    }
    addDefaultResponseValidation(this.p3v_1);
    this.p3v_1.u3x(this);
    var tmp_0 = Phases_getInstance_2().l3y_1;
    this.j3v_1.x2i(tmp_0, HttpClient$slambda_2(this, null));
  }
  protoOf(HttpClient).j1e = function () {
    return this.h3v_1;
  };
  protoOf(HttpClient).q3y = function (builder, $completion) {
    var tmp = new $executeCOROUTINE$(this, builder, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpClient).h4 = function () {
    var success = this.f3v_1.atomicfu$compareAndSet(false, true);
    if (!success)
      return Unit_instance;
    var installedFeatures = this.m3v_1.y2c(get_PLUGIN_INSTALLED_LIST());
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = installedFeatures.f2d().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var plugin = installedFeatures.y2c(element instanceof AttributeKey ? element : THROW_CCE());
      if (isInterface(plugin, AutoCloseable)) {
        plugin.h4();
      }
    }
    this.g3v_1.l1l();
  };
  protoOf(HttpClient).toString = function () {
    return 'HttpClient[' + toString(this.c3v_1) + ']';
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
    var engine = engineFactory.r3y(config.d3y_1);
    return HttpClient_init_$Create$(engine, config, true);
  }
  function HttpClient$lambda_0(_this__u8e3s4) {
    return Unit_instance;
  }
  function installPlugin($this, plugin) {
    if ($this.a3y_1.q2(plugin.m1()))
      return Unit_instance;
    var tmp0 = $this.a3y_1;
    var tmp2 = plugin.m1();
    // Inline function 'kotlin.collections.set' call
    var value = HttpClientConfig$installPlugin$lambda(plugin);
    tmp0.v2(tmp2, value);
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
      var attributes = scope.m3v_1.e2d(tmp, HttpClientConfig$installPlugin$lambda$lambda);
      var config = ensureNotNull(scope.p3v_1.b3y_1.s2($plugin.m1()));
      var pluginData = $plugin.s3y(config);
      $plugin.t3y(pluginData, scope);
      attributes.b2d($plugin.m1(), pluginData);
      return Unit_instance;
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.a3y_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.b3y_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.c3y_1 = LinkedHashMap_init_$Create$();
    var tmp_2 = this;
    tmp_2.d3y_1 = HttpClientConfig$engineConfig$lambda;
    this.e3y_1 = true;
    this.f3y_1 = true;
    this.g3y_1 = false;
    this.h3y_1 = PlatformUtils_getInstance().a2f_1;
  }
  protoOf(HttpClientConfig).u3y = function (block) {
    var oldConfig = this.d3y_1;
    var tmp = this;
    tmp.d3y_1 = HttpClientConfig$engine$lambda(oldConfig, block);
  };
  protoOf(HttpClientConfig).v3y = function (plugin, configure) {
    var previousConfigBlock = this.b3y_1.s2(plugin.m1());
    var tmp0 = this.b3y_1;
    var tmp2 = plugin.m1();
    // Inline function 'kotlin.collections.set' call
    var value = HttpClientConfig$install$lambda_0(previousConfigBlock, configure);
    tmp0.v2(tmp2, value);
    installPlugin(this, plugin);
  };
  protoOf(HttpClientConfig).i3y = function (plugin, configure, $super) {
    var tmp;
    if (configure === VOID) {
      tmp = HttpClientConfig$install$lambda;
    } else {
      tmp = configure;
    }
    configure = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.v3y(plugin, configure);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.v3y.call(this, plugin, configure);
    }
    return tmp_0;
  };
  protoOf(HttpClientConfig).j3y = function (key, block) {
    // Inline function 'kotlin.collections.set' call
    this.c3y_1.v2(key, block);
  };
  protoOf(HttpClientConfig).u3x = function (client) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.a3y_1.u2().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.apply' call
      element(client);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.c3y_1.u2().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.apply' call
      element_0(client);
    }
  };
  protoOf(HttpClientConfig).k3y = function (other) {
    this.e3y_1 = other.e3y_1;
    this.f3y_1 = other.f3y_1;
    this.g3y_1 = other.g3y_1;
    var tmp0 = this.a3y_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map = other.a3y_1;
    tmp0.x2(map);
    var tmp0_0 = this.b3y_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map_0 = other.b3y_1;
    tmp0_0.x2(map_0);
    var tmp0_1 = this.c3y_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map_1 = other.c3y_1;
    tmp0_1.x2(map_1);
  };
  function replaceResponse(_this__u8e3s4, headers, content) {
    headers = headers === VOID ? _this__u8e3s4.n3w().x2r() : headers;
    return new DelegatedCall(_this__u8e3s4.i3w_1, _this__u8e3s4, content, headers);
  }
  function DelegatedCall(client, originCall, responseContent, responseHeaders) {
    responseHeaders = responseHeaders === VOID ? originCall.n3w().x2r() : responseHeaders;
    HttpClientCall.call(this, client);
    this.k3w_1 = new DelegatedRequest(this, originCall.w3y());
    this.l3w_1 = new DelegatedResponse(this, originCall.n3w(), responseContent, responseHeaders);
  }
  function DelegatedRequest(call, origin) {
    this.b3z_1 = origin;
    this.c3z_1 = call;
  }
  protoOf(DelegatedRequest).d3z = function () {
    return this.c3z_1;
  };
  protoOf(DelegatedRequest).j1e = function () {
    return this.b3z_1.j1e();
  };
  protoOf(DelegatedRequest).e3z = function () {
    return this.b3z_1.e3z();
  };
  protoOf(DelegatedRequest).f3z = function () {
    return this.b3z_1.f3z();
  };
  protoOf(DelegatedRequest).x3y = function () {
    return this.b3z_1.x3y();
  };
  protoOf(DelegatedRequest).v32 = function () {
    return this.b3z_1.v32();
  };
  protoOf(DelegatedRequest).x2r = function () {
    return this.b3z_1.x2r();
  };
  function DelegatedResponse(call, origin, content, headers) {
    headers = headers === VOID ? origin.x2r() : headers;
    HttpResponse.call(this);
    this.g3z_1 = call;
    this.h3z_1 = origin;
    this.i3z_1 = content;
    this.j3z_1 = headers;
    this.k3z_1 = this.h3z_1.j1e();
  }
  protoOf(DelegatedResponse).d3z = function () {
    return this.g3z_1;
  };
  protoOf(DelegatedResponse).x2r = function () {
    return this.j3z_1;
  };
  protoOf(DelegatedResponse).l3z = function () {
    return this.i3z_1(this.h3z_1);
  };
  protoOf(DelegatedResponse).j1e = function () {
    return this.k3z_1;
  };
  protoOf(DelegatedResponse).m3z = function () {
    return this.h3z_1.m3z();
  };
  protoOf(DelegatedResponse).n3z = function () {
    return this.h3z_1.n3z();
  };
  protoOf(DelegatedResponse).o3z = function () {
    return this.h3z_1.o3z();
  };
  protoOf(DelegatedResponse).p3z = function () {
    return this.h3z_1.p3z();
  };
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.k3w_1 = new DefaultHttpRequest($this, requestData);
    $this.l3w_1 = new DefaultHttpResponse($this, responseData);
    $this.x3y().d2d(Companion_getInstance_7().q3z_1);
    var tmp = responseData.v3z_1;
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.x3y().b2d(Companion_getInstance_7().q3z_1, responseData.v3z_1);
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
    var tmp$ret$2 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.q3z_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_0;
  function Companion_getInstance_7() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function $bodyNullableCOROUTINE$(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g40_1 = _this__u8e3s4;
    this.h40_1 = info;
  }
  protoOf($bodyNullableCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 5;
            this.o8_1 = 4;
            if (instanceOf(this.g40_1.n3w(), this.h40_1.k2j_1))
              return this.g40_1.n3w();
            if (!this.g40_1.y3y() && !get_isSaved(this.g40_1.n3w()) && !this.g40_1.j3w_1.atomicfu$compareAndSet(false, true)) {
              throw new DoubleReceiveException(this.g40_1);
            }

            var tmp0_elvis_lhs = this.g40_1.x3y().z2c(Companion_getInstance_7().q3z_1);
            if (tmp0_elvis_lhs == null) {
              this.n8_1 = 1;
              suspendResult = this.g40_1.z3y(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i40_1 = tmp0_elvis_lhs;
              this.n8_1 = 2;
              continue $sm;
            }

          case 1:
            this.i40_1 = suspendResult;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            var responseData = this.i40_1;
            var subject = new HttpResponseContainer(this.h40_1, responseData);
            this.n8_1 = 3;
            suspendResult = this.g40_1.i3w_1.j3v_1.s2i(this.g40_1, subject, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var this_0 = suspendResult.k40_1;
            var tmp_0;
            if (!equals(this_0, NullBody_instance)) {
              tmp_0 = this_0;
            } else {
              tmp_0 = null;
            }

            var result = tmp_0;
            if (!(result == null) && !instanceOf(result, this.h40_1.k2j_1)) {
              var from = getKClassFromExpression(result);
              var to = this.h40_1.k2j_1;
              throw new NoTransformationFoundException(this.g40_1.n3w(), from, to);
            }

            return result;
          case 4:
            this.o8_1 = 5;
            var tmp_1 = this.q8_1;
            if (tmp_1 instanceof Error) {
              var cause = this.q8_1;
              cancel_0(this.g40_1.n3w(), 'Receive failed', cause);
              throw cause;
            } else {
              throw this.q8_1;
            }

          case 5:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 5) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function HttpClientCall(client) {
    Companion_getInstance_7();
    this.i3w_1 = client;
    this.j3w_1 = atomic$boolean$1(false);
    this.m3w_1 = false;
  }
  protoOf(HttpClientCall).j1e = function () {
    return this.n3w().j1e();
  };
  protoOf(HttpClientCall).x3y = function () {
    return this.w3y().x3y();
  };
  protoOf(HttpClientCall).w3y = function () {
    var tmp = this.k3w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  protoOf(HttpClientCall).n3w = function () {
    var tmp = this.l3w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  protoOf(HttpClientCall).y3y = function () {
    return this.m3w_1;
  };
  protoOf(HttpClientCall).z3y = function ($completion) {
    return this.n3w().l3z();
  };
  protoOf(HttpClientCall).a3z = function (info, $completion) {
    var tmp = new $bodyNullableCOROUTINE$(this, info, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpClientCall).toString = function () {
    return 'HttpClientCall[' + this.w3y().f3z().toString() + ', ' + this.n3w().m3z().toString() + ']';
  };
  protoOf(HttpClientCall).o3w = function (response) {
    this.l3w_1 = response;
  };
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, DoubleReceiveException);
    this.l40_1 = 'Response already received: ' + call.toString();
    delete this.message;
  }
  protoOf(DoubleReceiveException).e = function () {
    return this.l40_1;
  };
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    captureStack(this, NoTransformationFoundException);
    this.m40_1 = trimIndent("\n        Expected response body of the type '" + toString(to) + "' but was '" + toString(from) + "'\n        In response from `" + get_request(response).f3z().toString() + '`\n        Response status `' + response.m3z().toString() + '`\n        Response header `ContentType: ' + response.x2r().p2e('Content-Type') + '` \n        Request header `Accept: ' + get_request(response).x2r().p2e('Accept') + '`\n        \n        You can read how to resolve NoTransformationFoundException at FAQ: \n        https://ktor.io/docs/faq.html#no-transformation-found-exception\n    ');
    delete this.message;
  }
  protoOf(NoTransformationFoundException).e = function () {
    return this.m40_1;
  };
  function save(_this__u8e3s4, $completion) {
    var tmp = new $saveCOROUTINE$(_this__u8e3s4, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.b41_1 = responseBody;
    this.k3w_1 = new SavedHttpRequest(this, request);
    this.l3w_1 = new SavedHttpResponse(this, this.b41_1, response);
    checkContentLength(contentLength(response), fromInt(this.b41_1.length), request.e3z());
    this.c41_1 = true;
  }
  protoOf(SavedHttpCall).y3y = function () {
    return this.c41_1;
  };
  function SavedHttpRequest(call, origin) {
    this.d41_1 = origin;
    this.e41_1 = call;
  }
  protoOf(SavedHttpRequest).d3z = function () {
    return this.e41_1;
  };
  protoOf(SavedHttpRequest).j1e = function () {
    return this.d41_1.j1e();
  };
  protoOf(SavedHttpRequest).e3z = function () {
    return this.d41_1.e3z();
  };
  protoOf(SavedHttpRequest).f3z = function () {
    return this.d41_1.f3z();
  };
  protoOf(SavedHttpRequest).x3y = function () {
    return this.d41_1.x3y();
  };
  protoOf(SavedHttpRequest).v32 = function () {
    return this.d41_1.v32();
  };
  protoOf(SavedHttpRequest).x2r = function () {
    return this.d41_1.x2r();
  };
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.f41_1 = call;
    this.g41_1 = body;
    this.h41_1 = origin.m3z();
    this.i41_1 = origin.n3z();
    this.j41_1 = origin.o3z();
    this.k41_1 = origin.p3z();
    this.l41_1 = origin.x2r();
    this.m41_1 = origin.j1e();
  }
  protoOf(SavedHttpResponse).d3z = function () {
    return this.f41_1;
  };
  protoOf(SavedHttpResponse).m3z = function () {
    return this.h41_1;
  };
  protoOf(SavedHttpResponse).n3z = function () {
    return this.i41_1;
  };
  protoOf(SavedHttpResponse).o3z = function () {
    return this.j41_1;
  };
  protoOf(SavedHttpResponse).p3z = function () {
    return this.k41_1;
  };
  protoOf(SavedHttpResponse).x2r = function () {
    return this.l41_1;
  };
  protoOf(SavedHttpResponse).j1e = function () {
    return this.m41_1;
  };
  protoOf(SavedHttpResponse).l3z = function () {
    return ByteReadChannel_0(this.g41_1);
  };
  function $saveCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v40_1 = _this__u8e3s4;
  }
  protoOf($saveCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var tmp_0 = this.v40_1;
            if (tmp_0 instanceof SavedHttpCall)
              return this.v40_1;
            this.n8_1 = 1;
            suspendResult = readRemaining(this.v40_1.n3w().l3z(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readByteArray(ARGUMENT);
            return new SavedHttpCall(this.v40_1.i3w_1, this.v40_1.w3y(), this.v40_1.n3w(), responseBody);
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
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
      tmp = getContent($this, delegate.s2z());
    } else {
      if (delegate instanceof ByteArrayContent) {
        tmp = ByteReadChannel_0(delegate.o2x());
      } else {
        if (delegate instanceof ProtocolUpgrade) {
          throw new UnsupportedContentTypeException(delegate);
        } else {
          if (delegate instanceof NoContent) {
            tmp = Companion_getInstance().w23_1;
          } else {
            if (delegate instanceof ReadChannelContent) {
              tmp = delegate.m2z();
            } else {
              if (delegate instanceof WriteChannelContent) {
                var tmp_0 = GlobalScope_instance;
                tmp = writer(tmp_0, $this.q41_1, true, ObservableContent$getContent$slambda_0(delegate, null)).s23_1;
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
    this.a42_1 = $delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ObservableContent$getContent$slambda).r3t = function ($this$writer, $completion) {
    var tmp = this.s3t($this$writer, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(ObservableContent$getContent$slambda).j9 = function (p1, $completion) {
    return this.r3t(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ObservableContent$getContent$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.a42_1.o2z(this.b42_1.o29_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(ObservableContent$getContent$slambda).s3t = function ($this$writer, completion) {
    var i = new ObservableContent$getContent$slambda(this.a42_1, completion);
    i.b42_1 = $this$writer;
    return i;
  };
  function ObservableContent$getContent$slambda_0($delegate, resultContinuation) {
    var i = new ObservableContent$getContent$slambda($delegate, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.r3t($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.p41_1 = delegate;
    this.q41_1 = callContext;
    this.r41_1 = listener;
  }
  protoOf(ObservableContent).m2x = function () {
    return this.p41_1.m2x();
  };
  protoOf(ObservableContent).n2x = function () {
    return this.p41_1.n2x();
  };
  protoOf(ObservableContent).x2r = function () {
    return this.p41_1.x2r();
  };
  protoOf(ObservableContent).m2z = function () {
    return observable(getContent(this, this.p41_1), this.q41_1, this.n2x(), this.r41_1);
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
        $client.o3v_1.k3g(get_HttpResponseCancelled(), $response);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _get_closed__iwkfs1($this) {
    var tmp0_safe_receiver = $this.j1e().a9(Key_instance);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k1e();
    return !(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
  }
  function executeWithinCallContext($this, requestData, $completion) {
    var tmp = new $executeWithinCallContextCOROUTINE$($this, requestData, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function checkExtensions($this, requestData) {
    var _iterator__ex2g4s = requestData.s42_1.t();
    while (_iterator__ex2g4s.u()) {
      var requestedExtension = _iterator__ex2g4s.v();
      // Inline function 'kotlin.require' call
      if (!$this.t42().j2(requestedExtension)) {
        var message = "Engine doesn't support " + toString(requestedExtension);
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  function HttpClientEngine$install$slambda($client, this$0, resultContinuation) {
    this.c43_1 = $client;
    this.d43_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$install$slambda).g3w = function ($this$intercept, content, $completion) {
    var tmp = this.h3w($this$intercept, content, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpClientEngine$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$install$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            var this_0 = new HttpRequestBuilder();
            this_0.h43(this.e43_1.t2i_1);
            var body = this.f43_1;
            if (body == null) {
              this_0.q3x_1 = NullBody_instance;
              var tmp_0 = PrimitiveClasses_getInstance().gb();
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
              this_0.i43(new TypeInfo(tmp_0, tmp_1));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.q3x_1 = body;
                this_0.i43(null);
              } else {
                this_0.q3x_1 = body;
                var tmp_3 = PrimitiveClasses_getInstance().gb();
                var tmp_4;
                try {
                  tmp_4 = createKType(PrimitiveClasses_getInstance().gb(), arrayOf([]), false);
                } catch ($p) {
                  var tmp_5;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3_0 = $p;
                    tmp_5 = null;
                  } else {
                    throw $p;
                  }
                  tmp_4 = tmp_5;
                }
                this_0.i43(new TypeInfo(tmp_3, tmp_4));
              }
            }

            var builder = this_0;
            this.c43_1.o3v_1.k3g(get_HttpRequestIsReadyForSending(), builder);
            var tmp_6 = this;
            var this_1 = builder.r2n();
            this_1.r42_1.b2d(get_CLIENT_CONFIG(), this.c43_1.p3v_1);
            tmp_6.g43_1 = this_1;
            validateHeaders(this.g43_1);
            checkExtensions(this.d43_1, this.g43_1);
            this.n8_1 = 1;
            suspendResult = executeWithinCallContext(this.d43_1, this.g43_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var responseData = suspendResult;
            var call = HttpClientCall_init_$Create$(this.c43_1, this.g43_1, responseData);
            var response = call.n3w();
            this.c43_1.o3v_1.k3g(get_HttpResponseReceived(), response);
            var tmp_7 = get_job(response.j1e());
            tmp_7.l1f(HttpClientEngine$install$slambda$lambda(this.c43_1, response));
            this.n8_1 = 2;
            suspendResult = this.e43_1.x2h(call, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 3) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpClientEngine$install$slambda).h3w = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.c43_1, this.d43_1, completion);
    i.e43_1 = $this$intercept;
    i.f43_1 = content;
    return i;
  };
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    var l = function ($this$intercept, content, $completion) {
      return i.g3w($this$intercept, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.r43_1 = this$0;
    this.s43_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).u43 = function ($this$async, $completion) {
    var tmp = this.v2a($this$async, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).j9 = function (p1, $completion) {
    return this.u43((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            if (_get_closed__iwkfs1(this.r43_1)) {
              throw new ClientEngineClosedException();
            }

            this.n8_1 = 1;
            suspendResult = this.r43_1.v43(this.s43_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).v2a = function ($this$async, completion) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.r43_1, this.s43_1, completion);
    i.t43_1 = $this$async;
    return i;
  };
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.u43($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $executeWithinCallContextCOROUTINE$(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k42_1 = _this__u8e3s4;
    this.l42_1 = requestData;
  }
  protoOf($executeWithinCallContextCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            this.n8_1 = 1;
            suspendResult = createCallContext(this.k42_1, this.l42_1.q42_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var callContext = suspendResult;
            var context = callContext.ah(new KtorCallContextElement(callContext));
            this.n8_1 = 2;
            suspendResult = async(this.k42_1, context, VOID, HttpClientEngine$executeWithinCallContext$slambda_0(this.k42_1, this.l42_1, null)).n1h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 3) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function HttpClientEngine() {
  }
  function validateHeaders(request) {
    _init_properties_HttpClientEngine_kt__h91z5h();
    var requestHeaders = request.o42_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = requestHeaders.g2f();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (HttpHeaders_getInstance().q2r_1.j2(element)) {
        destination.b1(element);
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
    var callContext = _this__u8e3s4.j1e().ah(callJob).ah(get_CALL_COROUTINE());
    $l$block: {
      // Inline function 'io.ktor.client.engine.attachToUserJob' call
      // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp0_elvis_lhs = $completion.t8().a9(Key_instance);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var userJob = tmp;
      var cleanupHandler = userJob.n1f(true, VOID, createCallContext$lambda(callJob));
      callJob.l1f(createCallContext$lambda_0(cleanupHandler));
    }
    return callContext;
  }
  function createCallContext$lambda($callJob) {
    return function (cause) {
      if (cause == null)
        return Unit_instance;
      var tmp1_elvis_lhs = cause instanceof CancellationException ? cause : null;
      var cancellation = tmp1_elvis_lhs == null ? CancellationException_init_$Create$_0(cause.message) : tmp1_elvis_lhs;
      $callJob.s1f(cancellation);
      return Unit_instance;
    };
  }
  function createCallContext$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.f1i();
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
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(HttpClientConfig), arrayOf([getStarKTypeProjection()]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      CLIENT_CONFIG = new AttributeKey(name, tmp$ret$1);
    }
  }
  function HttpClientEngineBase$dispatcher$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.t3x().x43_1;
      return tmp0_elvis_lhs == null ? ioDispatcher() : tmp0_elvis_lhs;
    };
  }
  function HttpClientEngineBase$_get_dispatcher_$ref_kz5x8v() {
    return function (p0) {
      return p0.a44();
    };
  }
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor().ah(this$0.a44()).ah(new CoroutineName(this$0.q3v_1 + '-context'));
    };
  }
  function HttpClientEngineBase$_get_coroutineContext_$ref_p82ehr() {
    return function (p0) {
      return p0.j1e();
    };
  }
  function HttpClientEngineBase(engineName) {
    this.q3v_1 = engineName;
    this.r3v_1 = atomic$boolean$1(false);
    this.s3v_1 = atomic$int$1(0);
    var tmp = this;
    tmp.t3v_1 = lazy(HttpClientEngineBase$dispatcher$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.u3v_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  protoOf(HttpClientEngineBase).a44 = function () {
    var tmp0 = this.t3v_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('dispatcher', 1, tmp, HttpClientEngineBase$_get_dispatcher_$ref_kz5x8v(), null);
    return tmp0.n1();
  };
  protoOf(HttpClientEngineBase).j1e = function () {
    var tmp0 = this.u3v_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('coroutineContext', 1, tmp, HttpClientEngineBase$_get_coroutineContext_$ref_p82ehr(), null);
    return tmp0.n1();
  };
  protoOf(HttpClientEngineBase).h4 = function () {
    if (!this.r3v_1.atomicfu$compareAndSet(false, true))
      return Unit_instance;
    var tmp = this.j1e().a9(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, CompletableJob) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var requestJob = tmp_0;
    requestJob.l1l();
  };
  function ClientEngineClosedException(cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$_0('Client already closed', this);
    captureStack(this, ClientEngineClosedException);
    this.b44_1 = cause;
    delete this.cause;
  }
  protoOf(ClientEngineClosedException).f = function () {
    return this.b44_1;
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
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(KtMutableMap), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpClientEngineCapability), arrayOf([getStarKTypeProjection()]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().gb(), arrayOf([]), false))]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      ENGINE_CAPABILITIES_KEY = new AttributeKey(name, tmp$ret$1);
      DEFAULT_CAPABILITIES = setOf(HttpTimeoutCapability_instance);
    }
  }
  function HttpClientEngineConfig() {
    this.w43_1 = 4;
    this.x43_1 = null;
    this.y43_1 = false;
    this.z43_1 = null;
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
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.t8();
    return ensureNotNull(tmp$ret$0.a9(Companion_instance_1)).c44_1;
  }
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_8() {
    return Companion_instance_1;
  }
  function KtorCallContextElement(callContext) {
    this.c44_1 = callContext;
  }
  protoOf(KtorCallContextElement).m1 = function () {
    return Companion_instance_1;
  };
  function mergeHeaders(requestHeaders, content, block) {
    _init_properties_Utils_kt__jo07cx();
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.h2f(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.p2e('User-Agent') == null && content.x2r().p2e('User-Agent') == null;
    if (missingAgent && needUserAgent()) {
      block('User-Agent', get_KTOR_DEFAULT_USER_AGENT());
    }
    var tmp0_safe_receiver = content.m2x();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? content.x2r().p2e('Content-Type') : tmp1_elvis_lhs;
    var type = tmp2_elvis_lhs == null ? requestHeaders.p2e('Content-Type') : tmp2_elvis_lhs;
    var tmp3_safe_receiver = content.n2x();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? content.x2r().p2e('Content-Length') : tmp4_elvis_lhs;
    var length = tmp5_elvis_lhs == null ? requestHeaders.p2e('Content-Length') : tmp5_elvis_lhs;
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
    return !PlatformUtils_getInstance().u2e_1;
  }
  function mergeHeaders$lambda($requestHeaders, $content) {
    return function ($this$buildHeaders) {
      $this$buildHeaders.o2f($requestHeaders);
      $this$buildHeaders.o2f($content.x2r());
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
    this.l44_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterRenderHook$install$slambda).g3w = function ($this$intercept, content, $completion) {
    var tmp = this.h3w($this$intercept, content, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(AfterRenderHook$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterRenderHook$install$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            var tmp_0 = this.n44_1;
            if (!(tmp_0 instanceof OutgoingContent))
              return Unit_instance;
            this.n8_1 = 1;
            suspendResult = this.l44_1(this.m44_1.t2i_1, this.n44_1, this);
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
            this.n8_1 = 2;
            suspendResult = this.m44_1.x2h(newContent, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 3) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(AfterRenderHook$install$slambda).h3w = function ($this$intercept, content, completion) {
    var i = new AfterRenderHook$install$slambda(this.l44_1, completion);
    i.m44_1 = $this$intercept;
    i.n44_1 = content;
    return i;
  };
  function AfterRenderHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterRenderHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, content, $completion) {
      return i.g3w($this$intercept, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function AfterRenderHook() {
  }
  protoOf(AfterRenderHook).o44 = function (client, handler) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    client.i3v_1.u2i(Phases_getInstance().s44_1, observableContentPhase);
    client.i3v_1.x2i(observableContentPhase, AfterRenderHook$install$slambda_0(handler, null));
  };
  protoOf(AfterRenderHook).u44 = function (client, handler) {
    return this.o44(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var AfterRenderHook_instance;
  function AfterRenderHook_getInstance() {
    return AfterRenderHook_instance;
  }
  function AfterReceiveHook$install$slambda($handler, resultContinuation) {
    this.d45_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterReceiveHook$install$slambda).g45 = function ($this$intercept, response, $completion) {
    var tmp = this.h45($this$intercept, response, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(AfterReceiveHook$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g45(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterReceiveHook$install$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            this.n8_1 = 1;
            suspendResult = this.d45_1(this.f45_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var newResponse = suspendResult;
            if (!(newResponse == null)) {
              this.n8_1 = 2;
              suspendResult = this.e45_1.x2h(newResponse, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 3;
              continue $sm;
            }

          case 2:
            this.n8_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 4) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(AfterReceiveHook$install$slambda).h45 = function ($this$intercept, response, completion) {
    var i = new AfterReceiveHook$install$slambda(this.d45_1, completion);
    i.e45_1 = $this$intercept;
    i.f45_1 = response;
    return i;
  };
  function AfterReceiveHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterReceiveHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, response, $completion) {
      return i.g45($this$intercept, response, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function AfterReceiveHook() {
  }
  protoOf(AfterReceiveHook).i45 = function (client, handler) {
    var tmp = Phases_getInstance_1().l45_1;
    client.l3v_1.x2i(tmp, AfterReceiveHook$install$slambda_0(handler, null));
  };
  protoOf(AfterReceiveHook).u44 = function (client, handler) {
    return this.i45(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var AfterReceiveHook_instance;
  function AfterReceiveHook_getInstance() {
    return AfterReceiveHook_instance;
  }
  function withObservableDownload(_this__u8e3s4, listener) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = _this__u8e3s4.d3z();
    return replaceResponse(tmp, VOID, withObservableDownload$lambda(listener)).n3w();
  }
  function BodyProgress$lambda($this$createClientPlugin) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = AfterRenderHook_instance;
    $this$createClientPlugin.r45(tmp, BodyProgress$lambda$slambda_0(null));
    var tmp_0 = AfterReceiveHook_instance;
    $this$createClientPlugin.r45(tmp_0, BodyProgress$lambda$slambda_2(null));
    return Unit_instance;
  }
  function BodyProgress$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda).c46 = function (request, content, $completion) {
    var tmp = this.d46(request, content, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(BodyProgress$lambda$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.c46(tmp, p2 instanceof OutgoingContent ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        if (tmp === 0) {
          this.o8_1 = 1;
          var tmp0_elvis_lhs = this.a46_1.s3x_1.z2c(get_UploadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return new ObservableContent(this.b46_1, this.a46_1.r3x_1, listener);
        } else if (tmp === 1) {
          throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda).d46 = function (request, content, completion) {
    var i = new BodyProgress$lambda$slambda(completion);
    i.a46_1 = request;
    i.b46_1 = content;
    return i;
  };
  function BodyProgress$lambda$slambda_0(resultContinuation) {
    var i = new BodyProgress$lambda$slambda(resultContinuation);
    var l = function (request, content, $completion) {
      return i.c46(request, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress$lambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda_1).n46 = function (response, $completion) {
    var tmp = this.o46(response, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(BodyProgress$lambda$slambda_1).j9 = function (p1, $completion) {
    return this.n46(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        if (tmp === 0) {
          this.o8_1 = 1;
          var tmp0_elvis_lhs = this.m46_1.d3z().w3y().x3y().z2c(get_DownloadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return withObservableDownload(this.m46_1, listener);
        } else if (tmp === 1) {
          throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda_1).o46 = function (response, completion) {
    var i = new BodyProgress$lambda$slambda_1(completion);
    i.m46_1 = response;
    return i;
  };
  function BodyProgress$lambda$slambda_2(resultContinuation) {
    var i = new BodyProgress$lambda$slambda_1(resultContinuation);
    var l = function (response, $completion) {
      return i.n46(response, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function withObservableDownload$lambda($listener) {
    return function ($this$replaceResponse) {
      return observable($this$replaceResponse.l3z(), $this$replaceResponse.j1e(), contentLength($this$replaceResponse), $listener);
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
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(ProgressListener), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      UploadProgressListenerAttributeKey = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'DownloadProgressListenerAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_2 = getKClass(ProgressListener);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_3;
      try {
        tmp_3 = createKType(getKClass(ProgressListener), arrayOf([]), false);
      } catch ($p) {
        var tmp_4;
        if ($p instanceof Error) {
          var _unused_var__etf5q3_0 = $p;
          tmp_4 = null;
        } else {
          throw $p;
        }
        tmp_3 = tmp_4;
      }
      var tmp$ret$2_0 = tmp_3;
      var tmp$ret$1_0 = new TypeInfo(tmp_2, tmp$ret$2_0);
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
    this.p46_1 = response;
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, RedirectResponseException);
    this.r46_1 = 'Unhandled redirect: ' + response.d3z().w3y().e3z().i2s_1 + ' ' + response.d3z().w3y().f3z().toString() + '. ' + ('Status: ' + response.m3z().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(RedirectResponseException).e = function () {
    return this.r46_1;
  };
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ClientRequestException);
    this.t46_1 = 'Client request(' + response.d3z().w3y().e3z().i2s_1 + ' ' + response.d3z().w3y().f3z().toString() + ') ' + ('invalid: ' + response.m3z().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(ClientRequestException).e = function () {
    return this.t46_1;
  };
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ServerResponseException);
    this.v46_1 = 'Server error(' + response.d3z().w3y().e3z().i2s_1 + ' ' + response.d3z().w3y().f3z().toString() + ': ' + (response.m3z().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(ServerResponseException).e = function () {
    return this.v46_1;
  };
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(addDefaultResponseValidation$lambda$slambda).i47 = function (response, $completion) {
    var tmp = this.o46(response, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).j9 = function (p1, $completion) {
    return this.i47(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 5;
            var expectSuccess = this.e47_1.d3z().x3y().y2c(get_ExpectSuccessAttributeKey());
            if (!expectSuccess) {
              get_LOGGER().r2j('Skipping default response validation for ' + this.e47_1.d3z().w3y().f3z().toString());
              return Unit_instance;
            }

            this.g47_1 = this.e47_1.m3z().v2u_1;
            var originCall = this.e47_1.d3z();
            if (this.g47_1 < 300 || originCall.x3y().a2d(get_ValidateMark())) {
              return Unit_instance;
            }

            this.n8_1 = 1;
            suspendResult = save(originCall, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = suspendResult;
            this_0.x3y().b2d(get_ValidateMark(), Unit_instance);
            var exceptionCall = this_0;
            this.f47_1 = exceptionCall.n3w();
            this.o8_1 = 3;
            this.n8_1 = 2;
            suspendResult = bodyAsText(this.f47_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h47_1 = suspendResult;
            this.o8_1 = 5;
            this.n8_1 = 4;
            continue $sm;
          case 3:
            this.o8_1 = 5;
            var tmp_0 = this.q8_1;
            if (tmp_0 instanceof MalformedInputException) {
              var _unused_var__etf5q3 = this.q8_1;
              var tmp_1 = this;
              tmp_1.h47_1 = '<body failed decoding>';
              this.n8_1 = 4;
              continue $sm;
            } else {
              throw this.q8_1;
            }

          case 4:
            this.o8_1 = 5;
            var exceptionResponseText = this.h47_1;
            var tmp0_subject = this.g47_1;
            var exception = (300 <= tmp0_subject ? tmp0_subject <= 399 : false) ? new RedirectResponseException(this.f47_1, exceptionResponseText) : (400 <= tmp0_subject ? tmp0_subject <= 499 : false) ? new ClientRequestException(this.f47_1, exceptionResponseText) : (500 <= tmp0_subject ? tmp0_subject <= 599 : false) ? new ServerResponseException(this.f47_1, exceptionResponseText) : new ResponseException(this.f47_1, exceptionResponseText);
            get_LOGGER().r2j('Default response validation for ' + this.e47_1.d3z().w3y().f3z().toString() + ' failed with ' + exception.toString());
            throw exception;
          case 5:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 5) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).o46 = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.e47_1 = response;
    return i;
  };
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    var l = function (response, $completion) {
      return i.i47(response, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.l47_1 = $this_addDefaultResponseValidation.g3y_1;
      $this$HttpResponseValidator.m47(addDefaultResponseValidation$lambda$slambda_0(null));
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
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
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
    var tmp = Phases_getInstance().s44_1;
    _this__u8e3s4.i3v_1.x2i(tmp, defaultTransformers$slambda_0(null));
    var tmp_0 = Phases_getInstance_2().m3y_1;
    _this__u8e3s4.j3v_1.x2i(tmp_0, defaultTransformers$slambda_2(_this__u8e3s4, null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$2$content$1($contentType, $body) {
    this.q47_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    tmp.o47_1 = $contentType == null ? Application_getInstance().c2l_1 : $contentType;
    this.p47_1 = fromInt($body.length);
  }
  protoOf(defaultTransformers$2$content$1).m2x = function () {
    return this.o47_1;
  };
  protoOf(defaultTransformers$2$content$1).n2x = function () {
    return this.p47_1;
  };
  protoOf(defaultTransformers$2$content$1).o2x = function () {
    return this.q47_1;
  };
  function defaultTransformers$2$content$2($this_intercept, $contentType, $body) {
    this.u47_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.t2i_1.p3x_1.p2e('Content-Length');
    tmp.s47_1 = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
    var tmp_0 = this;
    tmp_0.t47_1 = $contentType == null ? Application_getInstance().c2l_1 : $contentType;
  }
  protoOf(defaultTransformers$2$content$2).n2x = function () {
    return this.s47_1;
  };
  protoOf(defaultTransformers$2$content$2).m2x = function () {
    return this.t47_1;
  };
  protoOf(defaultTransformers$2$content$2).m2z = function () {
    return this.u47_1;
  };
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda).g3w = function ($this$intercept, body, $completion) {
    var tmp = this.h3w($this$intercept, body, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(defaultTransformers$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            if (this.d48_1.t2i_1.p3x_1.p2e('Accept') == null) {
              this.d48_1.t2i_1.p3x_1.n2f('Accept', '*/*');
            }

            var contentType_0 = contentType(this.d48_1.t2i_1);
            var tmp0_subject = this.e48_1;
            var tmp_0;
            if (typeof tmp0_subject === 'string') {
              tmp_0 = new TextContent(this.e48_1, contentType_0 == null ? Text_getInstance().u2m_1 : contentType_0);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_0 = new defaultTransformers$2$content$1(contentType_0, this.e48_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_0 = new defaultTransformers$2$content$2(this.d48_1, contentType_0, this.e48_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_0 = this.e48_1;
                  } else {
                    tmp_0 = platformRequestDefaultTransform(contentType_0, this.d48_1.t2i_1, this.e48_1);
                  }
                }
              }
            }

            var content = tmp_0;
            if (!((content == null ? null : content.m2x()) == null)) {
              this.d48_1.t2i_1.p3x_1.p2f('Content-Type');
              get_LOGGER_0().r2j('Transformed with default transformers request body for ' + this.d48_1.t2i_1.n3x_1.toString() + ' from ' + toString(getKClassFromExpression(this.e48_1)));
              this.n8_1 = 1;
              suspendResult = this.d48_1.x2h(content, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 2;
              continue $sm;
            }

          case 1:
            this.n8_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 3) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(defaultTransformers$slambda).h3w = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.d48_1 = $this$intercept;
    i.e48_1 = body;
    return i;
  };
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    var l = function ($this$intercept, body, $completion) {
      return i.g3w($this$intercept, body, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.n48_1 = $body;
    this.o48_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda$slambda).r3t = function ($this$writer, $completion) {
    var tmp = this.s3t($this$writer, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(defaultTransformers$slambda$slambda).j9 = function (p1, $completion) {
    return this.r3t(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            this.o8_1 = 3;
            this.n8_1 = 1;
            suspendResult = copyTo(this.n48_1, this.p48_1.o29_1, new Long(-1, 2147483647), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            rethrowCloseCauseIfNeeded(this.n48_1);
            this.o8_1 = 4;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            this.o8_1 = 4;
            return Unit_instance;
          case 3:
            this.o8_1 = 4;
            var tmp_0 = this.q8_1;
            if (tmp_0 instanceof CancellationException) {
              var cause = this.q8_1;
              cancel(this.o48_1, cause);
              throw cause;
            } else {
              var tmp_1 = this.q8_1;
              if (tmp_1 instanceof Error) {
                var cause_0 = this.q8_1;
                cancel_0(this.o48_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.q8_1;
              }
            }

          case 4:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 4) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(defaultTransformers$slambda$slambda).s3t = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.n48_1, this.o48_1, completion);
    i.p48_1 = $this$writer;
    return i;
  };
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.r3t($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function defaultTransformers$slambda$lambda($responseJobHolder) {
    return function (it) {
      $responseJobHolder.l1l();
      return Unit_instance;
    };
  }
  function defaultTransformers$slambda_1($this_defaultTransformers, resultContinuation) {
    this.y48_1 = $this_defaultTransformers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda_1).b3x = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.c3x($this$intercept, _destruct__k2r9zo, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(defaultTransformers$slambda_1).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b3x(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 12;
            this.b49_1 = this.a49_1.uf();
            var body = this.a49_1.vf();
            if (!isInterface(body, ByteReadChannel))
              return Unit_instance;
            var response = this.z48_1.t2i_1.n3w();
            var tmp0_subject = this.b49_1.k2j_1;
            if (tmp0_subject.equals(getKClass(Unit))) {
              cancel_1(body);
              this.n8_1 = 10;
              suspendResult = this.z48_1.x2h(new HttpResponseContainer(this.b49_1, Unit_instance), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (tmp0_subject.equals(PrimitiveClasses_getInstance().mb())) {
                this.n8_1 = 8;
                suspendResult = readRemaining(body, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (tmp0_subject.equals(getKClass(Source)) || tmp0_subject.equals(getKClass(Source))) {
                  this.n8_1 = 6;
                  suspendResult = readRemaining(body, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject.equals(PrimitiveClasses_getInstance().vb())) {
                    this.n8_1 = 4;
                    suspendResult = toByteArray(body, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp0_subject.equals(getKClass(ByteReadChannel))) {
                      var responseJobHolder = Job(get_job(response.j1e()));
                      var this_0 = writer(this.z48_1, this.y48_1.h3v_1, VOID, defaultTransformers$slambda$slambda_0(body, response, null));
                      invokeOnCompletion(this_0, defaultTransformers$slambda$lambda(responseJobHolder));
                      attachWriterJob(body, this_0);
                      var channel = this_0.s23_1;
                      this.n8_1 = 3;
                      suspendResult = this.z48_1.x2h(new HttpResponseContainer(this.b49_1, channel), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (tmp0_subject.equals(getKClass(HttpStatusCode))) {
                        cancel_1(body);
                        this.n8_1 = 2;
                        suspendResult = this.z48_1.x2h(new HttpResponseContainer(this.b49_1, response.m3z()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        if (tmp0_subject.equals(getKClass(MultiPartData))) {
                          var tmp0 = this.z48_1.t2i_1.n3w().x2r().p2e('Content-Type');
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
                          var contentType = Companion_getInstance_0().kn(rawContentType);
                          if (!contentType.n2n(MultiPart_getInstance().n2m_1)) {
                            var message_0 = 'Expected multipart/form-data, got ' + contentType.toString();
                            throw IllegalStateException_init_$Create$(toString(message_0));
                          }
                          var tmp1_safe_receiver = this.z48_1.t2i_1.n3w().x2r().p2e('Content-Length');
                          var contentLength_0 = tmp1_safe_receiver == null ? null : toLong(tmp1_safe_receiver);
                          var body_0 = new CIOMultipartDataBase(this.z48_1.j1e(), body, rawContentType, contentLength_0);
                          var parsedResponse = new HttpResponseContainer(this.b49_1, body_0);
                          this.n8_1 = 1;
                          suspendResult = this.z48_1.x2h(parsedResponse, this);
                          if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                          }
                          continue $sm;
                        } else {
                          this.c49_1 = null;
                          this.n8_1 = 11;
                          continue $sm;
                        }
                      }
                    }
                  }
                }
              }
            }

          case 1:
            this.c49_1 = suspendResult;
            this.n8_1 = 11;
            continue $sm;
          case 2:
            this.c49_1 = suspendResult;
            this.n8_1 = 11;
            continue $sm;
          case 3:
            this.c49_1 = suspendResult;
            this.n8_1 = 11;
            continue $sm;
          case 4:
            var bytes = suspendResult;
            checkContentLength(contentLength(this.z48_1.t2i_1.n3w()), fromInt(bytes.length), this.z48_1.t2i_1.w3y().e3z());
            this.n8_1 = 5;
            suspendResult = this.z48_1.x2h(new HttpResponseContainer(this.b49_1, bytes), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.c49_1 = suspendResult;
            this.n8_1 = 11;
            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = new HttpResponseContainer(this.b49_1, ARGUMENT);
            this.n8_1 = 7;
            suspendResult = this.z48_1.x2h(ARGUMENT_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.c49_1 = suspendResult;
            this.n8_1 = 11;
            continue $sm;
          case 8:
            var ARGUMENT_1 = suspendResult;
            var ARGUMENT_2 = readText(ARGUMENT_1);
            var ARGUMENT_3 = toInt(ARGUMENT_2);
            var ARGUMENT_4 = new HttpResponseContainer(this.b49_1, ARGUMENT_3);
            this.n8_1 = 9;
            suspendResult = this.z48_1.x2h(ARGUMENT_4, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.c49_1 = suspendResult;
            this.n8_1 = 11;
            continue $sm;
          case 10:
            this.c49_1 = suspendResult;
            this.n8_1 = 11;
            continue $sm;
          case 11:
            var result = this.c49_1;
            if (!(result == null)) {
              get_LOGGER_0().r2j('Transformed with default transformers response body ' + ('for ' + this.z48_1.t2i_1.w3y().f3z().toString() + ' to ' + toString(this.b49_1.k2j_1)));
            }

            return Unit_instance;
          case 12:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 12) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(defaultTransformers$slambda_1).c3x = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new defaultTransformers$slambda_1(this.y48_1, completion);
    i.z48_1 = $this$intercept;
    i.a49_1 = _destruct__k2r9zo;
    return i;
  };
  function defaultTransformers$slambda_2($this_defaultTransformers, resultContinuation) {
    var i = new defaultTransformers$slambda_1($this_defaultTransformers, resultContinuation);
    var l = function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.b3x($this$intercept, _destruct__k2r9zo, $completion);
    };
    l.$arity = 2;
    return l;
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
    tmp.j47_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.k47_1 = ArrayList_init_$Create$();
    this.l47_1 = true;
  }
  protoOf(HttpCallValidatorConfig).m47 = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.j47_1.b1(block);
  };
  function ExceptionHandlerWrapper() {
  }
  function RequestExceptionHandlerWrapper() {
  }
  function RequestError$install$slambda($handler, resultContinuation) {
    this.l49_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestError$install$slambda).g3w = function ($this$intercept, it, $completion) {
    var tmp = this.h3w($this$intercept, it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(RequestError$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RequestError$install$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 5;
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.m49_1.y2h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o49_1 = suspendResult;
            this.o8_1 = 5;
            this.n8_1 = 4;
            continue $sm;
          case 2:
            this.o8_1 = 5;
            var tmp_0 = this.q8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.q8_1;
              this.n8_1 = 3;
              suspendResult = this.l49_1(HttpRequest(this.m49_1.t2i_1), cause, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.q8_1;
            }

          case 3:
            var error = suspendResult;
            var tmp_1 = this;
            if (!(error == null))
              throw error;
            tmp_1.o49_1 = Unit_instance;
            this.n8_1 = 4;
            continue $sm;
          case 4:
            this.o8_1 = 5;
            return Unit_instance;
          case 5:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 5) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(RequestError$install$slambda).h3w = function ($this$intercept, it, completion) {
    var i = new RequestError$install$slambda(this.l49_1, completion);
    i.m49_1 = $this$intercept;
    i.n49_1 = it;
    return i;
  };
  function RequestError$install$slambda_0($handler, resultContinuation) {
    var i = new RequestError$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.g3w($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function RequestError() {
  }
  protoOf(RequestError).p49 = function (client, handler) {
    var tmp = Phases_getInstance().p44_1;
    client.i3v_1.x2i(tmp, RequestError$install$slambda_0(handler, null));
  };
  protoOf(RequestError).u44 = function (client, handler) {
    return this.p49(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var RequestError_instance;
  function RequestError_getInstance() {
    return RequestError_instance;
  }
  function ReceiveError$install$slambda($handler, resultContinuation) {
    this.y49_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReceiveError$install$slambda).b3x = function ($this$intercept, it, $completion) {
    var tmp = this.c3x($this$intercept, it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(ReceiveError$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b3x(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ReceiveError$install$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 5;
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.z49_1.y2h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.b4a_1 = suspendResult;
            this.o8_1 = 5;
            this.n8_1 = 4;
            continue $sm;
          case 2:
            this.o8_1 = 5;
            var tmp_0 = this.q8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.q8_1;
              this.n8_1 = 3;
              suspendResult = this.y49_1(this.z49_1.t2i_1.w3y(), cause, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.q8_1;
            }

          case 3:
            var error = suspendResult;
            var tmp_1 = this;
            if (!(error == null))
              throw error;
            tmp_1.b4a_1 = Unit_instance;
            this.n8_1 = 4;
            continue $sm;
          case 4:
            this.o8_1 = 5;
            return Unit_instance;
          case 5:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 5) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(ReceiveError$install$slambda).c3x = function ($this$intercept, it, completion) {
    var i = new ReceiveError$install$slambda(this.y49_1, completion);
    i.z49_1 = $this$intercept;
    i.a4a_1 = it;
    return i;
  };
  function ReceiveError$install$slambda_0($handler, resultContinuation) {
    var i = new ReceiveError$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.b3x($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ReceiveError() {
  }
  protoOf(ReceiveError).p49 = function (client, handler) {
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    client.j3v_1.w2i(Phases_getInstance_2().l3y_1, BeforeReceive);
    client.j3v_1.x2i(BeforeReceive, ReceiveError$install$slambda_0(handler, null));
  };
  protoOf(ReceiveError).u44 = function (client, handler) {
    return this.p49(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
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
    _this__u8e3s4.v3y(get_HttpCallValidator(), block);
  }
  function HttpCallValidatorConfig$_init_$ref_m1o2g9() {
    var l = function () {
      return new HttpCallValidatorConfig();
    };
    l.callableName = '<init>';
    return l;
  }
  function HttpCallValidator$lambda($this$createClientPlugin) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    var responseValidators = reversed($this$createClientPlugin.o45_1.j47_1);
    var callExceptionHandlers = reversed($this$createClientPlugin.o45_1.k47_1);
    var expectSuccess = $this$createClientPlugin.o45_1.l47_1;
    var tmp = SetupRequest_instance;
    $this$createClientPlugin.r45(tmp, HttpCallValidator$lambda$slambda_0(expectSuccess, null));
    var tmp_0 = Send_instance;
    $this$createClientPlugin.r45(tmp_0, HttpCallValidator$lambda$slambda_2(responseValidators, null));
    var tmp_1 = RequestError_instance;
    $this$createClientPlugin.r45(tmp_1, HttpCallValidator$lambda$slambda_4(callExceptionHandlers, null));
    var tmp_2 = ReceiveError_instance;
    $this$createClientPlugin.r45(tmp_2, HttpCallValidator$lambda$slambda_6(callExceptionHandlers, null));
    return Unit_instance;
  }
  function invoke$validateResponse(responseValidators, response, $completion) {
    var tmp = new $invoke$validateResponseCOROUTINE$(responseValidators, response, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function invoke$processException(callExceptionHandlers, cause, request, $completion) {
    var tmp = new $invoke$processExceptionCOROUTINE$(callExceptionHandlers, cause, request, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function HttpCallValidator$lambda$slambda$lambda($expectSuccess) {
    return function () {
      return $expectSuccess;
    };
  }
  function HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation) {
    this.h4b_1 = $expectSuccess;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda).j4b = function (request, $completion) {
    var tmp = this.k4b(request, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpCallValidator$lambda$slambda).j9 = function (p1, $completion) {
    return this.j4b(p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        if (tmp === 0) {
          this.o8_1 = 1;
          var tmp_0 = get_ExpectSuccessAttributeKey();
          this.i4b_1.s3x_1.e2d(tmp_0, HttpCallValidator$lambda$slambda$lambda(this.h4b_1));
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpCallValidator$lambda$slambda).k4b = function (request, completion) {
    var i = new HttpCallValidator$lambda$slambda(this.h4b_1, completion);
    i.i4b_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_0($expectSuccess, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation);
    var l = function (request, $completion) {
      return i.j4b(request, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation) {
    this.t4b_1 = $responseValidators;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_1).x4b = function ($this$on, request, $completion) {
    var tmp = this.y4b($this$on, request, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpCallValidator$lambda$slambda_1).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.x4b(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            this.n8_1 = 1;
            suspendResult = this.u4b_1.b4c(this.v4b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w4b_1 = suspendResult;
            this.n8_1 = 2;
            suspendResult = invoke$validateResponse(this.t4b_1, this.w4b_1.n3w(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.w4b_1;
          case 3:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 3) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpCallValidator$lambda$slambda_1).y4b = function ($this$on, request, completion) {
    var i = new HttpCallValidator$lambda$slambda_1(this.t4b_1, completion);
    i.u4b_1 = $this$on;
    i.v4b_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_2($responseValidators, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation);
    var l = function ($this$on, request, $completion) {
      return i.x4b($this$on, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation) {
    this.k4c_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_3).o4c = function (request, cause, $completion) {
    var tmp = this.p4c(request, cause, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpCallValidator$lambda$slambda_3).h9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.o4c(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_3).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n4c_1 = unwrapCancellationException(this.m4c_1);
            this.n8_1 = 1;
            suspendResult = invoke$processException(this.k4c_1, this.n4c_1, this.l4c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.n4c_1;
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpCallValidator$lambda$slambda_3).p4c = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_3(this.k4c_1, completion);
    i.l4c_1 = request;
    i.m4c_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_4($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation);
    var l = function (request, cause, $completion) {
      return i.o4c(request, cause, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation) {
    this.y4c_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_5).o4c = function (request, cause, $completion) {
    var tmp = this.p4c(request, cause, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpCallValidator$lambda$slambda_5).h9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.o4c(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_5).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.b4d_1 = unwrapCancellationException(this.a4d_1);
            this.n8_1 = 1;
            suspendResult = invoke$processException(this.y4c_1, this.b4d_1, this.z4c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.b4d_1;
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpCallValidator$lambda$slambda_5).p4c = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_5(this.y4c_1, completion);
    i.z4c_1 = request;
    i.a4d_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_6($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation);
    var l = function (request, cause, $completion) {
      return i.o4c(request, cause, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $invoke$validateResponseCOROUTINE$(responseValidators, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k4a_1 = responseValidators;
    this.l4a_1 = response;
  }
  protoOf($invoke$validateResponseCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            get_LOGGER_1().r2j('Validating response for request ' + this.l4a_1.d3z().w3y().f3z().toString());
            this.m4a_1 = this.k4a_1.t();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!this.m4a_1.u()) {
              this.n8_1 = 3;
              continue $sm;
            }

            var element = this.m4a_1.v();
            this.n8_1 = 2;
            suspendResult = element(this.l4a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n8_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 4) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function $invoke$processExceptionCOROUTINE$(callExceptionHandlers, cause, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v4a_1 = callExceptionHandlers;
    this.w4a_1 = cause;
    this.x4a_1 = request;
  }
  protoOf($invoke$processExceptionCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 6;
            get_LOGGER_1().r2j('Processing exception ' + this.w4a_1.toString() + ' for request ' + this.x4a_1.f3z().toString());
            this.y4a_1 = this.v4a_1.t();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!this.y4a_1.u()) {
              this.n8_1 = 5;
              continue $sm;
            }

            var element = this.y4a_1.v();
            if (element instanceof ExceptionHandlerWrapper) {
              this.n8_1 = 3;
              suspendResult = element.d4d_1(this.w4a_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (element instanceof RequestExceptionHandlerWrapper) {
                this.n8_1 = 2;
                suspendResult = element.c4d_1(this.w4a_1, this.x4a_1, this);
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
            this.n8_1 = 4;
            continue $sm;
          case 3:
            this.n8_1 = 4;
            continue $sm;
          case 4:
            this.n8_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
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
  function HttpRequest$1($builder) {
    this.i4d_1 = $builder;
    this.e4d_1 = $builder.o3x_1;
    this.f4d_1 = $builder.n3x_1.r2n();
    this.g4d_1 = $builder.s3x_1;
    this.h4d_1 = $builder.p3x_1.r2n();
  }
  protoOf(HttpRequest$1).d3z = function () {
    // Inline function 'kotlin.error' call
    var message = 'Call is not initialized';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(HttpRequest$1).e3z = function () {
    return this.e4d_1;
  };
  protoOf(HttpRequest$1).f3z = function () {
    return this.f4d_1;
  };
  protoOf(HttpRequest$1).x3y = function () {
    return this.g4d_1;
  };
  protoOf(HttpRequest$1).x2r = function () {
    return this.h4d_1;
  };
  protoOf(HttpRequest$1).v32 = function () {
    var tmp = this.i4d_1.q3x_1;
    var tmp0_elvis_lhs = tmp instanceof OutgoingContent ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Content was not transformed to OutgoingContent yet. Current body is ' + toString(this.i4d_1.q3x_1);
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
      var tmp_0 = PrimitiveClasses_getInstance().jb();
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(PrimitiveClasses_getInstance().jb(), arrayOf([]), false);
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
      var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
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
    var tmp0_safe_receiver = _this__u8e3s4.m3v_1.z2c(get_PLUGIN_INSTALLED_LIST());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z2c(plugin.m1());
  }
  var properties_initialized_HttpClientPlugin_kt_p98320;
  function _init_properties_HttpClientPlugin_kt__cypu1m() {
    if (!properties_initialized_HttpClientPlugin_kt_p98320) {
      properties_initialized_HttpClientPlugin_kt_p98320 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ApplicationPluginRegistry';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Attributes);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(Attributes), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
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
    tmp.j4d_1 = LinkedHashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.k4d_1 = LinkedHashMap_init_$Create$();
    this.l4d_1 = null;
    this.m4d_1 = Charsets_getInstance().u2b_1;
  }
  function RenderRequestHook$install$slambda($handler, resultContinuation) {
    this.v4d_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RenderRequestHook$install$slambda).g3w = function ($this$intercept, content, $completion) {
    var tmp = this.h3w($this$intercept, content, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(RenderRequestHook$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RenderRequestHook$install$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            this.n8_1 = 1;
            suspendResult = this.v4d_1(this.w4d_1.t2i_1, this.x4d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (!(result == null)) {
              this.n8_1 = 2;
              suspendResult = this.w4d_1.x2h(result, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 3;
              continue $sm;
            }

          case 2:
            this.n8_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 4) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(RenderRequestHook$install$slambda).h3w = function ($this$intercept, content, completion) {
    var i = new RenderRequestHook$install$slambda(this.v4d_1, completion);
    i.w4d_1 = $this$intercept;
    i.x4d_1 = content;
    return i;
  };
  function RenderRequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RenderRequestHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, content, $completion) {
      return i.g3w($this$intercept, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function RenderRequestHook() {
  }
  protoOf(RenderRequestHook).y4d = function (client, handler) {
    var tmp = Phases_getInstance().s44_1;
    client.i3v_1.x2i(tmp, RenderRequestHook$install$slambda_0(handler, null));
  };
  protoOf(RenderRequestHook).u44 = function (client, handler) {
    return this.y4d(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var RenderRequestHook_instance;
  function RenderRequestHook_getInstance() {
    return RenderRequestHook_instance;
  }
  function HttpPlainTextConfig$_init_$ref_isjudo() {
    var l = function () {
      return new HttpPlainTextConfig();
    };
    l.callableName = '<init>';
    return l;
  }
  function HttpPlainText$lambda($this$createClientPlugin) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.collections.sortedByDescending' call
    var this_0 = toList($this$createClientPlugin.o45_1.k4d_1);
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = HttpPlainText$lambda$lambda;
    var tmp$ret$1 = new sam$kotlin_Comparator$0(tmp);
    var withQuality = sortedWith(this_0, tmp$ret$1);
    var responseCharsetFallback = $this$createClientPlugin.o45_1.m4d_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = $this$createClientPlugin.o45_1.j4d_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (!$this$createClientPlugin.o45_1.k4d_1.q2(element)) {
        destination.b1(element);
      }
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = HttpPlainText$lambda$lambda_0;
    var tmp$ret$6 = new sam$kotlin_Comparator$0(tmp_0);
    var withoutQuality = sortedWith(destination, tmp$ret$6);
    var tmp_1;
    var tmp0_0 = $this$createClientPlugin.o45_1.j4d_1;
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
        if (!element_0.equals(Charsets_getInstance().u2b_1)) {
          tmp$ret$7 = true;
          break $l$block_0;
        }
      }
      tmp$ret$7 = false;
    }
    if (tmp$ret$7) {
      tmp_1 = true;
    } else {
      var tmp0_1 = $this$createClientPlugin.o45_1.k4d_1.t2();
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
          if (!element_1.equals(Charsets_getInstance().u2b_1)) {
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
        var charset = element_3.uf();
        var quality = element_3.vf();
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
    var tmp0_elvis_lhs = $this$createClientPlugin.o45_1.l4d_1;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(withoutQuality) : tmp0_elvis_lhs;
    var tmp_5;
    if (tmp1_elvis_lhs == null) {
      var tmp2_safe_receiver = firstOrNull(withQuality);
      tmp_5 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.sf_1;
    } else {
      tmp_5 = tmp1_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_5;
    var requestCharset = tmp3_elvis_lhs == null ? Charsets_getInstance().u2b_1 : tmp3_elvis_lhs;
    var tmp_6 = RenderRequestHook_instance;
    $this$createClientPlugin.r45(tmp_6, HttpPlainText$lambda$slambda_0(acceptCharsetHeader, requestCharset, null));
    $this$createClientPlugin.z4d(HttpPlainText$lambda$slambda_2(responseCharsetFallback, null));
    return Unit_instance;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.a4e_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).sd = function (a, b) {
    return this.a4e_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.sd(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).k3 = function () {
    return this.a4e_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.k3(), other.k3());
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
    return hashCode(this.k3());
  };
  function HttpPlainText$lambda$lambda(a, b) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.tf_1;
    var tmp$ret$2 = a.tf_1;
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
    var contentType = requestContentType == null ? Text_getInstance().u2m_1 : requestContentType;
    var tmp2_elvis_lhs = requestContentType == null ? null : charset(requestContentType);
    var charset_0 = tmp2_elvis_lhs == null ? requestCharset : tmp2_elvis_lhs;
    get_LOGGER_2().r2j('Sending request body to ' + request.n3x_1.toString() + ' as text/plain with charset ' + charset_0.toString());
    return new TextContent(content, withCharset(contentType, charset_0));
  }
  function invoke$read(responseCharsetFallback, call, body) {
    var tmp0_elvis_lhs = charset_0(call.n3w());
    var actualCharset = tmp0_elvis_lhs == null ? responseCharsetFallback : tmp0_elvis_lhs;
    get_LOGGER_2().r2j('Reading response body for ' + call.w3y().f3z().toString() + ' as String with charset ' + actualCharset.toString());
    return readText_0(body, actualCharset);
  }
  function invoke$addAcceptCharsetHeader(_this__u8e3s4, value) {
    if (value == null || !(_this__u8e3s4.p3x_1.p2e('Accept-Charset') == null))
      return Unit_instance;
    get_LOGGER_2().r2j('Adding Accept-Charset=' + value + ' to ' + _this__u8e3s4.n3x_1.toString());
    _this__u8e3s4.p3x_1.l2f('Accept-Charset', value);
  }
  function HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation) {
    this.j4e_1 = $acceptCharsetHeader;
    this.k4e_1 = $requestCharset;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda).n4e = function (request, content, $completion) {
    var tmp = this.o4e(request, content, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpPlainText$lambda$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.n4e(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        if (tmp === 0) {
          this.o8_1 = 1;
          invoke$addAcceptCharsetHeader(this.l4e_1, this.j4e_1);
          var tmp_0 = this.m4e_1;
          if (!(typeof tmp_0 === 'string'))
            return null;
          var contentType_0 = contentType(this.l4e_1);
          if (!(contentType_0 == null) && !(contentType_0.k2n_1 === Text_getInstance().u2m_1.k2n_1)) {
            return null;
          }
          return invoke$wrapContent(this.k4e_1, this.l4e_1, this.m4e_1, contentType_0);
        } else if (tmp === 1) {
          throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpPlainText$lambda$slambda).o4e = function (request, content, completion) {
    var i = new HttpPlainText$lambda$slambda(this.j4e_1, this.k4e_1, completion);
    i.l4e_1 = request;
    i.m4e_1 = content;
    return i;
  };
  function HttpPlainText$lambda$slambda_0($acceptCharsetHeader, $requestCharset, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation);
    var l = function (request, content, $completion) {
      return i.n4e(request, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation) {
    this.x4e_1 = $responseCharsetFallback;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda_1).c4f = function ($this$transformResponseBody, response, content, requestedType, $completion) {
    var tmp = this.d4f($this$transformResponseBody, response, content, requestedType, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpPlainText$lambda$slambda_1).e4f = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
    var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
    return this.c4f(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            if (!this.b4f_1.k2j_1.equals(PrimitiveClasses_getInstance().rb()))
              return null;
            this.n8_1 = 1;
            suspendResult = readRemaining(this.a4f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return invoke$read(this.x4e_1, this.z4e_1.d3z(), bodyBytes);
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpPlainText$lambda$slambda_1).d4f = function ($this$transformResponseBody, response, content, requestedType, completion) {
    var i = new HttpPlainText$lambda$slambda_1(this.x4e_1, completion);
    i.y4e_1 = $this$transformResponseBody;
    i.z4e_1 = response;
    i.a4f_1 = content;
    i.b4f_1 = requestedType;
    return i;
  };
  function HttpPlainText$lambda$slambda_2($responseCharsetFallback, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation);
    var l = function ($this$transformResponseBody, response, content, requestedType, $completion) {
      return i.c4f($this$transformResponseBody, response, content, requestedType, $completion);
    };
    l.$arity = 4;
    return l;
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
    this.f4f_1 = true;
    this.g4f_1 = false;
  }
  function isRedirect(_this__u8e3s4) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var tmp0_subject = _this__u8e3s4.v2u_1;
    return tmp0_subject === Companion_getInstance_1().e2t_1.v2u_1 || tmp0_subject === Companion_getInstance_1().f2t_1.v2u_1 || (tmp0_subject === Companion_getInstance_1().k2t_1.v2u_1 || (tmp0_subject === Companion_getInstance_1().l2t_1.v2u_1 || tmp0_subject === Companion_getInstance_1().g2t_1.v2u_1)) ? true : false;
  }
  function HttpRedirectConfig$_init_$ref_rhym9t() {
    var l = function () {
      return new HttpRedirectConfig();
    };
    l.callableName = '<init>';
    return l;
  }
  function HttpRedirect$lambda($this$createClientPlugin) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var checkHttpMethod = $this$createClientPlugin.o45_1.f4f_1;
    var allowHttpsDowngrade = $this$createClientPlugin.o45_1.g4f_1;
    var tmp = Send_instance;
    $this$createClientPlugin.r45(tmp, HttpRedirect$lambda$slambda_0(checkHttpMethod, allowHttpsDowngrade, $this$createClientPlugin, null));
    return Unit_instance;
  }
  function invoke$handleCall(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion) {
    var tmp = new $invoke$handleCallCOROUTINE$(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    this.e4g_1 = $checkHttpMethod;
    this.f4g_1 = $allowHttpsDowngrade;
    this.g4g_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRedirect$lambda$slambda).x4b = function ($this$on, request, $completion) {
    var tmp = this.y4b($this$on, request, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpRedirect$lambda$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.x4b(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRedirect$lambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            this.n8_1 = 1;
            suspendResult = this.h4g_1.b4c(this.i4g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var origin = suspendResult;
            if (this.e4g_1 && !get_ALLOWED_FOR_REDIRECT().j2(origin.w3y().e3z())) {
              return origin;
            }

            this.n8_1 = 2;
            suspendResult = invoke$handleCall(this.h4g_1, this.i4g_1, origin, this.f4g_1, this.g4g_1.n45_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 3) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpRedirect$lambda$slambda).y4b = function ($this$on, request, completion) {
    var i = new HttpRedirect$lambda$slambda(this.e4g_1, this.f4g_1, this.g4g_1, completion);
    i.h4g_1 = $this$on;
    i.i4g_1 = request;
    return i;
  };
  function HttpRedirect$lambda$slambda_0($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    var i = new HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation);
    var l = function ($this$on, request, $completion) {
      return i.x4b($this$on, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $invoke$handleCallCOROUTINE$(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p4f_1 = _this__u8e3s4;
    this.q4f_1 = context;
    this.r4f_1 = origin;
    this.s4f_1 = allowHttpsDowngrade;
    this.t4f_1 = client;
  }
  protoOf($invoke$handleCallCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            this.u4f_1 = this.r4f_1;
            this.v4f_1 = this.q4f_1;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.n8_1 = 4;
              continue $sm;
            }

            var previousProtocol = this.u4f_1.w3y().f3z().a2w_1;
            var previousAuthority = get_authority(this.u4f_1.w3y().f3z());
            if (!isRedirect(this.u4f_1.n3w().m3z()))
              return this.u4f_1;
            var location = this.u4f_1.n3w().x2r().p2e('Location');
            if (location == null) {
              get_LOGGER_3().p2j('Location header missing from redirect response ' + this.u4f_1.w3y().f3z().toString() + '; returning response as is');
              return this.u4f_1;
            }

            this.t4f_1.o3v_1.k3g(get_HttpResponseRedirectEvent(), this.u4f_1.n3w());
            get_LOGGER_3().r2j('Received redirect response to ' + location + ' for request ' + this.u4f_1.w3y().f3z().toString());
            var tmp_0 = this;
            var this_0 = new HttpRequestBuilder();
            this_0.h43(this.v4f_1);
            this_0.n3x_1.k2v_1.y2();
            takeFrom(this_0.n3x_1, location);
            if (!this.s4f_1 && isSecure(previousProtocol) && !isSecure(this_0.n3x_1.n2v())) {
              get_LOGGER_3().r2j('Blocked redirect from ' + this.u4f_1.w3y().f3z().toString() + ' to ' + location + ' due to HTTPS downgrade');
              return this.u4f_1;
            }

            if (!(previousAuthority === get_authority_0(this_0.n3x_1))) {
              this_0.p3x_1.p2f('Authorization');
              get_LOGGER_3().r2j('Removing Authorization header for cross-authority redirect: ' + (previousAuthority + ' -> ' + this_0.n3x_1.x2w()));
            }

            tmp_0.v4f_1 = this_0;
            this.n8_1 = 2;
            suspendResult = this.p4f_1.b4c(this.v4f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.u4f_1 = suspendResult;
            this.n8_1 = 1;
            continue $sm;
          case 3:
            throw this.q8_1;
          case 4:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 3) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_HttpRedirect_kt_klj746;
  function _init_properties_HttpRedirect_kt__ure7fo() {
    if (!properties_initialized_HttpRedirect_kt_klj746) {
      properties_initialized_HttpRedirect_kt_klj746 = true;
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_2().y2r_1, Companion_getInstance_2().d2s_1]);
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
    this.r4g_1 = _this__u8e3s4;
  }
  protoOf($invokeCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var tmp0 = this.r4g_1.s4g_1;
            this.n8_1 = 1;
            suspendResult = tmp0.y2h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function PipelineContext$proceed$ref(p0) {
    this.s4g_1 = p0;
  }
  protoOf(PipelineContext$proceed$ref).c2a = function ($completion) {
    var tmp = new $invokeCOROUTINE$(this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(PipelineContext$proceed$ref).i9 = function ($completion) {
    return this.c2a($completion);
  };
  function PipelineContext$proceed$ref_0(p0) {
    var i = new PipelineContext$proceed$ref(p0);
    var l = function ($completion) {
      return i.c2a($completion);
    };
    l.$arity = 0;
    return l;
  }
  function SetupRequestContext$install$slambda($handler, resultContinuation) {
    this.b4h_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequestContext$install$slambda).g3w = function ($this$intercept, it, $completion) {
    var tmp = this.h3w($this$intercept, it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(SetupRequestContext$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SetupRequestContext$install$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.b4h_1(this.c4h_1.t2i_1, PipelineContext$proceed$ref_0(this.c4h_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(SetupRequestContext$install$slambda).h3w = function ($this$intercept, it, completion) {
    var i = new SetupRequestContext$install$slambda(this.b4h_1, completion);
    i.c4h_1 = $this$intercept;
    i.d4h_1 = it;
    return i;
  };
  function SetupRequestContext$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequestContext$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.g3w($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function SetupRequestContext() {
  }
  protoOf(SetupRequestContext).e4h = function (client, handler) {
    var tmp = Phases_getInstance().p44_1;
    client.i3v_1.x2i(tmp, SetupRequestContext$install$slambda_0(handler, null));
  };
  protoOf(SetupRequestContext).u44 = function (client, handler) {
    return this.e4h(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var SetupRequestContext_instance;
  function SetupRequestContext_getInstance() {
    return SetupRequestContext_instance;
  }
  function attachToClientEngineJob(requestJob, clientEngineJob) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var handler = clientEngineJob.l1f(attachToClientEngineJob$lambda(requestJob));
    requestJob.l1f(attachToClientEngineJob$lambda_0(handler));
  }
  function HttpRequestLifecycle$lambda($this$createClientPlugin) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var tmp = SetupRequestContext_instance;
    $this$createClientPlugin.r45(tmp, HttpRequestLifecycle$lambda$slambda_0($this$createClientPlugin, null));
    return Unit_instance;
  }
  function HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation) {
    this.n4h_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestLifecycle$lambda$slambda).r4h = function (request, proceed, $completion) {
    var tmp = this.s4h(request, proceed, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.r4h(tmp, (!(p2 == null) ? isSuspendFunction(p2, 0) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 6;
            this.q4h_1 = SupervisorJob(this.o4h_1.r3x_1);
            attachToClientEngineJob(this.q4h_1, ensureNotNull(this.n4h_1.n45_1.h3v_1.a9(Key_instance)));
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 4;
            this.o8_1 = 3;
            this.o4h_1.r3x_1 = this.q4h_1;
            this.n8_1 = 2;
            suspendResult = this.p4h_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o8_1 = 6;
            this.n8_1 = 5;
            continue $sm;
          case 3:
            this.o8_1 = 4;
            var tmp_0 = this.q8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.q8_1;
              this.q4h_1.k1l(cause);
              throw cause;
            } else {
              throw this.q8_1;
            }

          case 4:
            this.o8_1 = 6;
            var t = this.q8_1;
            this.q4h_1.l1l();
            throw t;
          case 5:
            this.o8_1 = 6;
            this.q4h_1.l1l();
            return Unit_instance;
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
  protoOf(HttpRequestLifecycle$lambda$slambda).s4h = function (request, proceed, completion) {
    var i = new HttpRequestLifecycle$lambda$slambda(this.n4h_1, completion);
    i.o4h_1 = request;
    i.p4h_1 = proceed;
    return i;
  };
  function HttpRequestLifecycle$lambda$slambda_0($this_createClientPlugin, resultContinuation) {
    var i = new HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation);
    var l = function (request, proceed, $completion) {
      return i.r4h(request, proceed, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function attachToClientEngineJob$lambda($requestJob) {
    return function (cause) {
      if (!(cause == null)) {
        get_LOGGER_4().r2j('Cancelling request because engine Job failed with error: ' + cause.toString());
        cancel_2($requestJob, 'Engine failed', cause);
      } else {
        get_LOGGER_4().r2j('Cancelling request because engine Job completed');
        $requestJob.l1l();
      }
      return Unit_instance;
    };
  }
  function attachToClientEngineJob$lambda_0($handler) {
    return function (it) {
      $handler.f1i();
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
    this.t4h_1 = request;
    this.u4h_1 = retryCount;
    this.v4h_1 = response;
    this.w4h_1 = cause;
  }
  function randomMs($this, randomizationMs) {
    return equalsLong(randomizationMs, new Long(0, 0)) ? new Long(0, 0) : Default_getInstance().oi(randomizationMs);
  }
  function HttpRequestRetryConfig$delay$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetryConfig$delay$slambda).g4i = function (it, $completion) {
    var tmp = this.h4i(it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).j9 = function (p1, $completion) {
    return this.g4i(p1 instanceof Long ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = delay(this.f4i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).h4i = function (it, completion) {
    var i = new HttpRequestRetryConfig$delay$slambda(completion);
    i.f4i_1 = it;
    return i;
  };
  function HttpRequestRetryConfig$delay$slambda_0(resultContinuation) {
    var i = new HttpRequestRetryConfig$delay$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.g4i(it, $completion);
    };
    l.$arity = 1;
    return l;
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
    var it = response.m3z().v2u_1;
    return 500 <= it ? it <= 599 : false;
  }
  function HttpRequestRetryConfig$delayMillis$lambda($respectRetryAfterHeader, $block) {
    return function (_this__u8e3s4, it) {
      var tmp;
      if ($respectRetryAfterHeader) {
        var tmp0_safe_receiver = _this__u8e3s4.j4i_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x2r();
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.p2e('Retry-After');
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
    tmp.o4i_1 = HttpRequestRetryConfig$delay$slambda_0(null);
    var tmp_0 = this;
    tmp_0.p4i_1 = HttpRequestRetryConfig$modifyRequest$lambda;
    this.q4i_1 = 0;
    this.r4i(3);
    this.s4i();
  }
  protoOf(HttpRequestRetryConfig).t4i = function () {
    var tmp = this.l4i_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetry');
    }
  };
  protoOf(HttpRequestRetryConfig).u4i = function () {
    var tmp = this.m4i_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetryOnException');
    }
  };
  protoOf(HttpRequestRetryConfig).v4i = function () {
    var tmp = this.n4i_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('delayMillis');
    }
  };
  protoOf(HttpRequestRetryConfig).w4i = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.q4i_1 = maxRetries;
    this.l4i_1 = block;
  };
  protoOf(HttpRequestRetryConfig).x4i = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.q4i_1 = maxRetries;
    this.m4i_1 = block;
  };
  protoOf(HttpRequestRetryConfig).y4i = function (maxRetries, retryOnTimeout) {
    this.x4i(maxRetries, HttpRequestRetryConfig$retryOnException$lambda(retryOnTimeout));
  };
  protoOf(HttpRequestRetryConfig).z4i = function (maxRetries, retryOnTimeout, $super) {
    maxRetries = maxRetries === VOID ? -1 : maxRetries;
    retryOnTimeout = retryOnTimeout === VOID ? false : retryOnTimeout;
    var tmp;
    if ($super === VOID) {
      this.y4i(maxRetries, retryOnTimeout);
      tmp = Unit_instance;
    } else {
      tmp = $super.y4i.call(this, maxRetries, retryOnTimeout);
    }
    return tmp;
  };
  protoOf(HttpRequestRetryConfig).a4j = function (maxRetries) {
    this.w4i(maxRetries, HttpRequestRetryConfig$retryOnServerErrors$lambda);
  };
  protoOf(HttpRequestRetryConfig).r4i = function (maxRetries) {
    this.a4j(maxRetries);
    this.z4i(maxRetries);
  };
  protoOf(HttpRequestRetryConfig).b4j = function (respectRetryAfterHeader, block) {
    var tmp = this;
    tmp.n4i_1 = HttpRequestRetryConfig$delayMillis$lambda(respectRetryAfterHeader, block);
  };
  protoOf(HttpRequestRetryConfig).c4j = function (base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader) {
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
    this.b4j(respectRetryAfterHeader, HttpRequestRetryConfig$exponentialDelay$lambda(base, baseDelayMs, maxDelayMs, this, randomizationMs));
  };
  protoOf(HttpRequestRetryConfig).s4i = function (base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader, $super) {
    base = base === VOID ? 2.0 : base;
    baseDelayMs = baseDelayMs === VOID ? new Long(1000, 0) : baseDelayMs;
    maxDelayMs = maxDelayMs === VOID ? new Long(60000, 0) : maxDelayMs;
    randomizationMs = randomizationMs === VOID ? new Long(1000, 0) : randomizationMs;
    respectRetryAfterHeader = respectRetryAfterHeader === VOID ? true : respectRetryAfterHeader;
    var tmp;
    if ($super === VOID) {
      this.c4j(base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader);
      tmp = Unit_instance;
    } else {
      tmp = $super.c4j.call(this, base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader);
    }
    return tmp;
  };
  function HttpRetryShouldRetryContext(retryCount) {
    this.d4j_1 = retryCount;
  }
  function HttpRetryDelayContext(request, response, cause) {
    this.i4i_1 = request;
    this.j4i_1 = response;
    this.k4i_1 = cause;
  }
  function HttpRetryModifyRequestContext(request, response, cause, retryCount) {
    this.e4j_1 = request;
    this.f4j_1 = response;
    this.g4j_1 = cause;
    this.h4j_1 = retryCount;
  }
  function throwOnInvalidResponseBody(_this__u8e3s4, $completion) {
    var tmp = new $throwOnInvalidResponseBodyCOROUTINE$(_this__u8e3s4, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
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
    var l = function () {
      return new HttpRequestRetryConfig();
    };
    l.callableName = '<init>';
    return l;
  }
  function HttpRequestRetry$lambda($this$createClientPlugin) {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    var shouldRetry = $this$createClientPlugin.o45_1.t4i();
    var shouldRetryOnException = $this$createClientPlugin.o45_1.u4i();
    var delayMillis = $this$createClientPlugin.o45_1.v4i();
    var delay = $this$createClientPlugin.o45_1.o4i_1;
    var maxRetries = $this$createClientPlugin.o45_1.q4i_1;
    var modifyRequest = $this$createClientPlugin.o45_1.p4i_1;
    $this$createClientPlugin.u4j(HttpRequestRetry$lambda$slambda_0(maxRetries, null));
    var tmp = Send_instance;
    $this$createClientPlugin.r45(tmp, HttpRequestRetry$lambda$slambda_2(shouldRetry, shouldRetryOnException, maxRetries, delayMillis, modifyRequest, $this$createClientPlugin, delay, null));
    return Unit_instance;
  }
  function HttpRequestRetry$lambda$prepareRequest$lambda($subRequest) {
    return function (cause) {
      var tmp = $subRequest.r3x_1;
      var subRequestJob = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
      if (cause == null) {
        subRequestJob.l1l();
      } else {
        subRequestJob.k1l(cause);
      }
      return Unit_instance;
    };
  }
  function invoke$shouldRetry(retryCount, maxRetries, shouldRetry, call) {
    return retryCount < maxRetries && shouldRetry(new HttpRetryShouldRetryContext(retryCount + 1 | 0), call.w3y(), call.n3w());
  }
  function invoke$shouldRetryOnException(retryCount, maxRetries, shouldRetry, subRequest, cause) {
    return retryCount < maxRetries && shouldRetry(new HttpRetryShouldRetryContext(retryCount + 1 | 0), subRequest, cause);
  }
  function invoke$prepareRequest(request) {
    var subRequest = (new HttpRequestBuilder()).v4j(request);
    var tmp = request.r3x_1;
    tmp.l1f(HttpRequestRetry$lambda$prepareRequest$lambda(subRequest));
    return subRequest;
  }
  function HttpRequestRetry$lambda$slambda($maxRetries, resultContinuation) {
    this.e4k_1 = $maxRetries;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetry$lambda$slambda).i4k = function ($this$onRequest, request, _unused_var__etf5q3, $completion) {
    var tmp = this.j4k($this$onRequest, request, _unused_var__etf5q3, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpRequestRetry$lambda$slambda).k4k = function (p1, p2, p3, $completion) {
    var tmp = p1 instanceof OnRequestContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
    return this.i4k(tmp, tmp_0, !(p3 == null) ? p3 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetry$lambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        if (tmp === 0) {
          this.o8_1 = 1;
          var tmp0_elvis_lhs = this.g4k_1.s3x_1.z2c(get_MaxRetriesPerRequestAttributeKey());
          var maxRetriesValue = tmp0_elvis_lhs == null ? this.e4k_1 : tmp0_elvis_lhs;
          this.g4k_1.s3x_1.b2d(get_MaxRetriesPerRequestAttributeKey(), maxRetriesValue);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpRequestRetry$lambda$slambda).j4k = function ($this$onRequest, request, _unused_var__etf5q3, completion) {
    var i = new HttpRequestRetry$lambda$slambda(this.e4k_1, completion);
    i.f4k_1 = $this$onRequest;
    i.g4k_1 = request;
    i.h4k_1 = _unused_var__etf5q3;
    return i;
  };
  function HttpRequestRetry$lambda$slambda_0($maxRetries, resultContinuation) {
    var i = new HttpRequestRetry$lambda$slambda($maxRetries, resultContinuation);
    var l = function ($this$onRequest, request, _unused_var__etf5q3, $completion) {
      return i.i4k($this$onRequest, request, _unused_var__etf5q3, $completion);
    };
    l.$arity = 3;
    return l;
  }
  function HttpRequestRetry$lambda$slambda_1($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation) {
    this.t4k_1 = $shouldRetry;
    this.u4k_1 = $shouldRetryOnException;
    this.v4k_1 = $maxRetries;
    this.w4k_1 = $delayMillis;
    this.x4k_1 = $modifyRequest;
    this.y4k_1 = $this_createClientPlugin;
    this.z4k_1 = $delay;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetry$lambda$slambda_1).x4b = function ($this$on, request, $completion) {
    var tmp = this.y4b($this$on, request, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.x4b(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 8;
            this.d4l_1 = 0;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.b4l_1.s3x_1.z2c(get_ShouldRetryPerRequestAttributeKey());
            tmp_0.k4l_1 = tmp0_elvis_lhs == null ? this.t4k_1 : tmp0_elvis_lhs;
            var tmp_1 = this;
            var tmp1_elvis_lhs = this.b4l_1.s3x_1.z2c(get_ShouldRetryOnExceptionPerRequestAttributeKey());
            tmp_1.i4l_1 = tmp1_elvis_lhs == null ? this.u4k_1 : tmp1_elvis_lhs;
            var tmp_2 = this;
            var tmp2_elvis_lhs = this.b4l_1.s3x_1.z2c(get_MaxRetriesPerRequestAttributeKey());
            tmp_2.j4l_1 = tmp2_elvis_lhs == null ? this.v4k_1 : tmp2_elvis_lhs;
            var tmp_3 = this;
            var tmp3_elvis_lhs = this.b4l_1.s3x_1.z2c(get_RetryDelayPerRequestAttributeKey());
            tmp_3.e4l_1 = tmp3_elvis_lhs == null ? this.w4k_1 : tmp3_elvis_lhs;
            var tmp_4 = this;
            var tmp4_elvis_lhs = this.b4l_1.s3x_1.z2c(get_ModifyRequestPerRequestAttributeKey());
            tmp_4.l4l_1 = tmp4_elvis_lhs == null ? this.x4k_1 : tmp4_elvis_lhs;
            this.f4l_1 = null;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.n8_1 = 9;
              continue $sm;
            }

            this.h4l_1 = invoke$prepareRequest(this.b4l_1);
            this.o8_1 = 5;
            if (!(this.f4l_1 == null)) {
              var modifyRequestContext = new HttpRetryModifyRequestContext(this.b4l_1, this.f4l_1.v4h_1, this.f4l_1.w4h_1, this.f4l_1.u4h_1);
              this.l4l_1(modifyRequestContext, this.h4l_1);
            }

            this.n8_1 = 2;
            suspendResult = this.a4l_1.b4c(this.h4l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.c4l_1 = suspendResult;
            if (!invoke$shouldRetry(this.d4l_1, this.j4l_1, this.k4l_1, this.c4l_1)) {
              this.n8_1 = 4;
              suspendResult = throwOnInvalidResponseBody(this.c4l_1.n3w(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 3;
              continue $sm;
            }

          case 3:
            var tmp_5 = this;
            this.d4l_1 = this.d4l_1 + 1 | 0;
            tmp_5.g4l_1 = new HttpRetryEventData(this.h4l_1, this.d4l_1, this.c4l_1.n3w(), null);
            this.o8_1 = 8;
            this.n8_1 = 6;
            continue $sm;
          case 4:
            this.o8_1 = 8;
            this.n8_1 = 9;
            continue $sm;
          case 5:
            this.o8_1 = 8;
            var tmp_6 = this.q8_1;
            if (tmp_6 instanceof Error) {
              var cause = this.q8_1;
              var tmp_7 = this;
              if (!invoke$shouldRetryOnException(this.d4l_1, this.j4l_1, this.i4l_1, this.h4l_1, cause)) {
                throw cause;
              }
              this.d4l_1 = this.d4l_1 + 1 | 0;
              tmp_7.g4l_1 = new HttpRetryEventData(this.h4l_1, this.d4l_1, null, cause);
              this.n8_1 = 6;
              continue $sm;
            } else {
              throw this.q8_1;
            }

          case 6:
            this.o8_1 = 8;
            var retryData = this.g4l_1;
            this.f4l_1 = retryData;
            this.y4k_1.n45_1.o3v_1.k3g(get_HttpRequestRetryEvent(), this.f4l_1);
            var delayContext = new HttpRetryDelayContext(this.f4l_1.t4h_1, this.f4l_1.v4h_1, this.f4l_1.w4h_1);
            this.n8_1 = 7;
            suspendResult = this.z4k_1(this.e4l_1(delayContext, this.d4l_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            get_LOGGER_5().r2j('Retrying request ' + this.b4l_1.n3x_1.toString() + ' attempt: ' + this.d4l_1);
            this.n8_1 = 1;
            continue $sm;
          case 8:
            throw this.q8_1;
          case 9:
            return this.c4l_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 8) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).y4b = function ($this$on, request, completion) {
    var i = new HttpRequestRetry$lambda$slambda_1(this.t4k_1, this.u4k_1, this.v4k_1, this.w4k_1, this.x4k_1, this.y4k_1, this.z4k_1, completion);
    i.a4l_1 = $this$on;
    i.b4l_1 = request;
    return i;
  };
  function HttpRequestRetry$lambda$slambda_2($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation) {
    var i = new HttpRequestRetry$lambda$slambda_1($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation);
    var l = function ($this$on, request, $completion) {
      return i.x4b($this$on, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $throwOnInvalidResponseBodyCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q4j_1 = _this__u8e3s4;
  }
  protoOf($throwOnInvalidResponseBodyCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 6;
            if (get_isSaved(this.q4j_1)) {
              this.r4j_1 = this.q4j_1.l3z();
              this.n8_1 = 1;
              continue $sm;
            } else {
              this.s4j_1 = false;
              this.n8_1 = 4;
              continue $sm;
            }

          case 1:
            this.o8_1 = 5;
            this.n8_1 = 2;
            suspendResult = this.r4j_1.y21(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.t4j_1 = suspendResult;
            this.o8_1 = 6;
            this.n8_1 = 3;
            continue $sm;
          case 3:
            var tmp_0 = this.t4j_1;
            this.o8_1 = 6;
            var this_0 = this.r4j_1;
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
              get_LOGGER_5().q2j('Failed to close response body channel', tmp0_safe_receiver);
            }

            this.s4j_1 = tmp_0;
            this.n8_1 = 4;
            continue $sm;
          case 4:
            return this.s4j_1;
          case 5:
            this.o8_1 = 6;
            var t = this.q8_1;
            var this_2 = this.r4j_1;
            var tmp_3;
            try {
              cancel_1(this_2);
              tmp_3 = _Result___init__impl__xyqfz8(Unit_instance);
            } catch ($p) {
              var tmp_4;
              if ($p instanceof Error) {
                var e_0 = $p;
                tmp_4 = _Result___init__impl__xyqfz8(createFailure(e_0));
              } else {
                throw $p;
              }
              tmp_3 = tmp_4;
            }

            var this_3 = tmp_3;
            var tmp0_safe_receiver_0 = Result__exceptionOrNull_impl_p6xea9(this_3);
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              get_LOGGER_5().q2j('Failed to close response body channel', tmp0_safe_receiver_0);
            }

            throw t;
          case 6:
            throw this.q8_1;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.o8_1 === 6) {
          throw e_1;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e_1;
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
      var tmp_0 = PrimitiveClasses_getInstance().mb();
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(PrimitiveClasses_getInstance().mb(), arrayOf([]), false);
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
      var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
      MaxRetriesPerRequestAttributeKey = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'ShouldRetryPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_3 = PrimitiveClasses_getInstance().functionClass(3);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_4;
      try {
        tmp_4 = createKType(PrimitiveClasses_getInstance().functionClass(3), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryShouldRetryContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequest_0), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpResponse), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().jb(), arrayOf([]), false))]), false);
      } catch ($p) {
        var tmp_5;
        if ($p instanceof Error) {
          var _unused_var__etf5q3_0 = $p;
          tmp_5 = null;
        } else {
          throw $p;
        }
        tmp_4 = tmp_5;
      }
      var tmp$ret$2_0 = tmp_4;
      var tmp$ret$1_0 = new TypeInfo(tmp_3, tmp$ret$2_0);
      ShouldRetryPerRequestAttributeKey = new AttributeKey(name_0, tmp$ret$1_0);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_1 = 'ShouldRetryOnExceptionPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_6 = PrimitiveClasses_getInstance().functionClass(3);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_7;
      try {
        tmp_7 = createKType(PrimitiveClasses_getInstance().functionClass(3), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryShouldRetryContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequestBuilder), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().sb(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().jb(), arrayOf([]), false))]), false);
      } catch ($p) {
        var tmp_8;
        if ($p instanceof Error) {
          var _unused_var__etf5q3_1 = $p;
          tmp_8 = null;
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp$ret$2_1 = tmp_7;
      var tmp$ret$1_1 = new TypeInfo(tmp_6, tmp$ret$2_1);
      ShouldRetryOnExceptionPerRequestAttributeKey = new AttributeKey(name_1, tmp$ret$1_1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_2 = 'ModifyRequestPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_9 = PrimitiveClasses_getInstance().functionClass(2);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_10;
      try {
        tmp_10 = createKType(PrimitiveClasses_getInstance().functionClass(2), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryModifyRequestContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequestBuilder), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(Unit), arrayOf([]), false))]), false);
      } catch ($p) {
        var tmp_11;
        if ($p instanceof Error) {
          var _unused_var__etf5q3_2 = $p;
          tmp_11 = null;
        } else {
          throw $p;
        }
        tmp_10 = tmp_11;
      }
      var tmp$ret$2_2 = tmp_10;
      var tmp$ret$1_2 = new TypeInfo(tmp_9, tmp$ret$2_2);
      ModifyRequestPerRequestAttributeKey = new AttributeKey(name_2, tmp$ret$1_2);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_3 = 'RetryDelayPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_12 = PrimitiveClasses_getInstance().functionClass(2);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_13;
      try {
        tmp_13 = createKType(PrimitiveClasses_getInstance().functionClass(2), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryDelayContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().mb(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(Long), arrayOf([]), false))]), false);
      } catch ($p) {
        var tmp_14;
        if ($p instanceof Error) {
          var _unused_var__etf5q3_3 = $p;
          tmp_14 = null;
        } else {
          throw $p;
        }
        tmp_13 = tmp_14;
      }
      var tmp$ret$2_3 = tmp_13;
      var tmp$ret$1_3 = new TypeInfo(tmp_12, tmp$ret$2_3);
      RetryDelayPerRequestAttributeKey = new AttributeKey(name_3, tmp$ret$1_3);
    }
  }
  function Sender() {
  }
  function HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.v4l_1 = $plugin;
    this.w4l_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpSend$Plugin$install$slambda).g3w = function ($this$intercept, content, $completion) {
    var tmp = this.h3w($this$intercept, content, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpSend$Plugin$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpSend$Plugin$install$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            var tmp_0 = this.y4l_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var message = trimMargin('\n|Fail to prepare request body for sending. \n|The body type is: ' + toString(getKClassFromExpression(this.y4l_1)) + ', with Content-Type: ' + toString_0(contentType(this.x4l_1.t2i_1)) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.');
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp0 = this.x4l_1.t2i_1;
            var body = this.y4l_1;
            if (body == null) {
              tmp0.q3x_1 = NullBody_instance;
              var tmp_1 = getKClass(OutgoingContent);
              var tmp_2;
              try {
                tmp_2 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
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
              tmp0.i43(new TypeInfo(tmp_1, tmp_2));
            } else {
              if (body instanceof OutgoingContent) {
                tmp0.q3x_1 = body;
                tmp0.i43(null);
              } else {
                tmp0.q3x_1 = body;
                var tmp_4 = getKClass(OutgoingContent);
                var tmp_5;
                try {
                  tmp_5 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
                } catch ($p) {
                  var tmp_6;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3_0 = $p;
                    tmp_6 = null;
                  } else {
                    throw $p;
                  }
                  tmp_5 = tmp_6;
                }
                tmp0.i43(new TypeInfo(tmp_4, tmp_5));
              }
            }

            var maxRetries = this.x4l_1.t2i_1.s3x_1.z2c(get_MaxRetriesPerRequestAttributeKey());
            var tmp_7;
            if (!(maxRetries == null) && maxRetries >= this.v4l_1.z4l_1) {
              var tmp_8;
              if (maxRetries < 2147483647) {
                tmp_8 = maxRetries + 1 | 0;
              } else {
                tmp_8 = maxRetries;
              }
              tmp_7 = tmp_8;
            } else {
              tmp_7 = this.v4l_1.z4l_1;
            }

            var maxSendCount = tmp_7;
            var realSender = new DefaultSender(maxSendCount, this.w4l_1);
            var interceptedSender = realSender;
            var _iterator__ex2g4s = reversed(this.v4l_1.a4m_1).t();
            while (_iterator__ex2g4s.u()) {
              var interceptor = _iterator__ex2g4s.v();
              interceptedSender = new InterceptedSender(interceptor, interceptedSender);
            }

            this.n8_1 = 1;
            suspendResult = interceptedSender.m4l(this.x4l_1.t2i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var call = suspendResult;
            this.n8_1 = 2;
            suspendResult = this.x4l_1.x2h(call, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 3) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpSend$Plugin$install$slambda).h3w = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.v4l_1, this.w4l_1, completion);
    i.x4l_1 = $this$intercept;
    i.y4l_1 = content;
    return i;
  };
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, content, $completion) {
      return i.g3w($this$intercept, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$_0(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j4m_1 = _this__u8e3s4;
    this.k4m_1 = requestBuilder;
  }
  protoOf($executeCOROUTINE$_0).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var tmp0_safe_receiver = this.j4m_1.o4m_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel(tmp0_safe_receiver);
            }

            if (this.j4m_1.n4m_1 >= this.j4m_1.l4m_1) {
              throw new SendCountExceedException('Max send count ' + this.j4m_1.l4m_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var _unary__edvuaz = this.j4m_1.n4m_1;
            this.j4m_1.n4m_1 = _unary__edvuaz + 1 | 0;
            this.n8_1 = 1;
            suspendResult = this.j4m_1.m4m_1.k3v_1.s2i(this.k4m_1, this.k4m_1.q3x_1, this);
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
            this.j4m_1.o4m_1 = call;
            return call;
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function Config() {
    this.p4m_1 = 20;
  }
  function Plugin() {
    Plugin_instance = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'HttpSend';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(HttpSend);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(HttpSend), arrayOf([]), false);
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
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.q4m_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin).m1 = function () {
    return this.q4m_1;
  };
  protoOf(Plugin).r4m = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config();
    block(this_0);
    var config = this_0;
    return new HttpSend(config.p4m_1);
  };
  protoOf(Plugin).s3y = function (block) {
    return this.r4m(block);
  };
  protoOf(Plugin).s4m = function (plugin, scope) {
    var tmp = Phases_getInstance().t44_1;
    scope.i3v_1.x2i(tmp, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  protoOf(Plugin).t3y = function (plugin, scope) {
    return this.s4m(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.t4m_1 = interceptor;
    this.u4m_1 = nextSender;
  }
  protoOf(InterceptedSender).m4l = function (requestBuilder, $completion) {
    return this.t4m_1(this.u4m_1, requestBuilder, $completion);
  };
  function DefaultSender(maxSendCount, client) {
    this.l4m_1 = maxSendCount;
    this.m4m_1 = client;
    this.n4m_1 = 0;
    this.o4m_1 = null;
  }
  protoOf(DefaultSender).m4l = function (requestBuilder, $completion) {
    var tmp = new $executeCOROUTINE$_0(this, requestBuilder, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  function HttpSend(maxSendCount) {
    Plugin_getInstance();
    maxSendCount = maxSendCount === VOID ? 20 : maxSendCount;
    this.z4l_1 = maxSendCount;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.a4m_1 = ArrayList_init_$Create$();
  }
  protoOf(HttpSend).v4m = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.a4m_1.b1(block);
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
    var tmp = request.n3x_1.x2w();
    var tmp0_safe_receiver = request.w4m(HttpTimeoutCapability_instance);
    HttpRequestTimeoutException.call($this, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a4n());
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
    this.b4n_1 = url;
    this.c4n_1 = timeoutMillis;
  }
  protoOf(HttpRequestTimeoutException).u1l = function () {
    return new HttpRequestTimeoutException(this.b4n_1, this.c4n_1, this.cause);
  };
  function HttpTimeoutConfig_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    requestTimeoutMillis = requestTimeoutMillis === VOID ? null : requestTimeoutMillis;
    connectTimeoutMillis = connectTimeoutMillis === VOID ? null : connectTimeoutMillis;
    socketTimeoutMillis = socketTimeoutMillis === VOID ? null : socketTimeoutMillis;
    HttpTimeoutConfig.call($this);
    $this.d4n(requestTimeoutMillis);
    $this.e4n(connectTimeoutMillis);
    $this.f4n(socketTimeoutMillis);
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
    this.g4n_1 = new Long(-1, 2147483647);
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'TimeoutConfiguration';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(HttpTimeoutConfig);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(HttpTimeoutConfig), arrayOf([]), false);
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
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.h4n_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_2;
  function Companion_getInstance_9() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  protoOf(HttpTimeoutConfig).d4n = function (value) {
    this.x4m_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).a4n = function () {
    return this.x4m_1;
  };
  protoOf(HttpTimeoutConfig).e4n = function (value) {
    this.y4m_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).i4n = function () {
    return this.y4m_1;
  };
  protoOf(HttpTimeoutConfig).f4n = function (value) {
    this.z4m_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).j4n = function () {
    return this.z4m_1;
  };
  protoOf(HttpTimeoutConfig).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof HttpTimeoutConfig))
      THROW_CCE();
    if (!equals(this.x4m_1, other.x4m_1))
      return false;
    if (!equals(this.y4m_1, other.y4m_1))
      return false;
    if (!equals(this.z4m_1, other.z4m_1))
      return false;
    return true;
  };
  protoOf(HttpTimeoutConfig).hashCode = function () {
    var tmp0_safe_receiver = this.x4m_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.y4m_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.z4m_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  function HttpTimeoutConfig() {
    Companion_getInstance_9();
    this.x4m_1 = new Long(0, 0);
    this.y4m_1 = new Long(0, 0);
    this.z4m_1 = new Long(0, 0);
  }
  function get_supportsRequestTimeout(_this__u8e3s4) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var tmp;
    var tmp_0;
    if (!isWebsocket(_this__u8e3s4.n3x_1.n2v())) {
      var tmp_1 = _this__u8e3s4.q3x_1;
      tmp_0 = !(tmp_1 instanceof ClientUpgradeContent);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_2 = _this__u8e3s4.q3x_1;
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
    var executionContext = request.r3x_1;
    var tmp = new CoroutineName('request-timeout');
    var killer = launch(_this__u8e3s4, tmp, VOID, applyRequestTimeout$slambda_0(requestTimeout, request, executionContext, null));
    var tmp_0 = request.r3x_1;
    tmp_0.l1f(applyRequestTimeout$lambda(killer));
  }
  function timeout(_this__u8e3s4, block) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var tmp = HttpTimeoutCapability_instance;
    // Inline function 'kotlin.apply' call
    var this_0 = HttpTimeoutConfig_init_$Create$();
    block(this_0);
    return _this__u8e3s4.k4n(tmp, this_0);
  }
  function HttpTimeoutConfig$_init_$ref_dl1k0m() {
    return function () {
      return HttpTimeoutConfig_init_$Create$();
    };
  }
  function HttpTimeout$lambda($this$createClientPlugin) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var requestTimeoutMillis = $this$createClientPlugin.o45_1.a4n();
    var connectTimeoutMillis = $this$createClientPlugin.o45_1.i4n();
    var socketTimeoutMillis = $this$createClientPlugin.o45_1.j4n();
    var tmp = Send_instance;
    $this$createClientPlugin.r45(tmp, HttpTimeout$lambda$slambda_0(connectTimeoutMillis, socketTimeoutMillis, requestTimeoutMillis, null));
    return Unit_instance;
  }
  function invoke$hasNotNullTimeouts(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, supportsRequestTimeout) {
    return supportsRequestTimeout && !(requestTimeoutMillis == null) || !(connectTimeoutMillis == null) || !(socketTimeoutMillis == null);
  }
  function HttpTimeout$lambda$slambda($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation) {
    this.t4n_1 = $connectTimeoutMillis;
    this.u4n_1 = $socketTimeoutMillis;
    this.v4n_1 = $requestTimeoutMillis;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpTimeout$lambda$slambda).x4b = function ($this$on, request, $completion) {
    var tmp = this.y4b($this$on, request, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpTimeout$lambda$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.x4b(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpTimeout$lambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var callerContext = this.t8();
            var supportsRequestTimeout = get_supportsRequestTimeout(this.x4n_1);
            var configuration = this.x4n_1.w4m(HttpTimeoutCapability_instance);
            if (configuration == null && invoke$hasNotNullTimeouts(this.v4n_1, this.t4n_1, this.u4n_1, supportsRequestTimeout)) {
              configuration = HttpTimeoutConfig_init_$Create$();
              this.x4n_1.k4n(HttpTimeoutCapability_instance, configuration);
            }

            var tmp0_safe_receiver = configuration;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp0_elvis_lhs = tmp0_safe_receiver.i4n();
              tmp0_safe_receiver.e4n(tmp0_elvis_lhs == null ? this.t4n_1 : tmp0_elvis_lhs);
              var tmp1_elvis_lhs = tmp0_safe_receiver.j4n();
              tmp0_safe_receiver.f4n(tmp1_elvis_lhs == null ? this.u4n_1 : tmp1_elvis_lhs);
              if (supportsRequestTimeout) {
                var tmp2_elvis_lhs = tmp0_safe_receiver.a4n();
                tmp0_safe_receiver.d4n(tmp2_elvis_lhs == null ? this.v4n_1 : tmp2_elvis_lhs);
                applyRequestTimeout(CoroutineScope_0(callerContext), this.x4n_1, tmp0_safe_receiver.a4n());
              }
            }

            this.n8_1 = 1;
            suspendResult = this.w4n_1.b4c(this.x4n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpTimeout$lambda$slambda).y4b = function ($this$on, request, completion) {
    var i = new HttpTimeout$lambda$slambda(this.t4n_1, this.u4n_1, this.v4n_1, completion);
    i.w4n_1 = $this$on;
    i.x4n_1 = request;
    return i;
  };
  function HttpTimeout$lambda$slambda_0($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation) {
    var i = new HttpTimeout$lambda$slambda($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation);
    var l = function ($this$on, request, $completion) {
      return i.x4b($this$on, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function applyRequestTimeout$slambda($requestTimeout, $request, $executionContext, resultContinuation) {
    this.g4o_1 = $requestTimeout;
    this.h4o_1 = $request;
    this.i4o_1 = $executionContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(applyRequestTimeout$slambda).u2a = function ($this$launch, $completion) {
    var tmp = this.v2a($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(applyRequestTimeout$slambda).j9 = function (p1, $completion) {
    return this.u2a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(applyRequestTimeout$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = delay(this.g4o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cause = HttpRequestTimeoutException_init_$Create$(this.h4o_1);
            var this_0 = get_LOGGER_6();
            if (get_isTraceEnabled(this_0)) {
              this_0.r2j('Request timeout: ' + this.h4o_1.n3x_1.toString());
            }

            cancel_2(this.i4o_1, ensureNotNull(cause.message), cause);
            return Unit_instance;
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(applyRequestTimeout$slambda).v2a = function ($this$launch, completion) {
    var i = new applyRequestTimeout$slambda(this.g4o_1, this.h4o_1, this.i4o_1, completion);
    i.j4o_1 = $this$launch;
    return i;
  };
  function applyRequestTimeout$slambda_0($requestTimeout, $request, $executionContext, resultContinuation) {
    var i = new applyRequestTimeout$slambda($requestTimeout, $request, $executionContext, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.u2a($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function applyRequestTimeout$lambda($killer) {
    return function (it) {
      $killer.t1f();
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
    return _this__u8e3s4.d3z().x3y().a2d(get_RESPONSE_BODY_SAVED());
  }
  function SaveBodyPluginConfig() {
    this.k4o_1 = false;
  }
  function LOGGER$delegate$lambda() {
    _init_properties_SaveBody_kt__lbc3fj();
    return KtorSimpleLogger('io.ktor.client.plugins.SaveBody');
  }
  function _get_LOGGER_$ref_77hhxy() {
    return function () {
      return get_LOGGER_7();
    };
  }
  function SaveBody$lambda($this$createClientPlugin) {
    _init_properties_SaveBody_kt__lbc3fj();
    var tmp = Phases_getInstance_1().j45_1;
    $this$createClientPlugin.n45_1.l3v_1.x2i(tmp, SaveBody$lambda$slambda_0(null));
    return Unit_instance;
  }
  function SaveBody$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SaveBody$lambda$slambda).g45 = function ($this$intercept, response, $completion) {
    var tmp = this.h45($this$intercept, response, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(SaveBody$lambda$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g45(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SaveBody$lambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 6;
            this.x4o_1 = this.u4o_1.d3z();
            this.v4o_1 = this.x4o_1.x3y();
            if (this.v4o_1.a2d(get_SKIP_SAVE_BODY())) {
              var this_0 = get_LOGGER_7();
              if (get_isTraceEnabled(this_0)) {
                this_0.r2j('Skipping body saving for ' + this.x4o_1.w3y().f3z().toString());
              }
              return Unit_instance;
            }

            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 5;
            var this_1 = get_LOGGER_7();
            if (get_isTraceEnabled(this_1)) {
              this_1.r2j('Saving body for ' + this.x4o_1.w3y().f3z().toString());
            }

            this.n8_1 = 2;
            suspendResult = save(this.x4o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w4o_1 = suspendResult.n3w();
            this.o8_1 = 6;
            this.n8_1 = 3;
            continue $sm;
          case 3:
            var tmp_0 = this.w4o_1;
            this.o8_1 = 6;
            this.t4o_1;
            var tmp_1;
            try {
              cancel_1(this.u4o_1.l3z());
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

            var this_2 = tmp_1;
            var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(this_2);
            if (tmp0_safe_receiver == null)
              null;
            else {
              get_LOGGER_7().q2j('Failed to cancel response body', tmp0_safe_receiver);
            }

            var savedResponse = tmp_0;
            this.v4o_1.b2d(get_RESPONSE_BODY_SAVED(), Unit_instance);
            this.n8_1 = 4;
            suspendResult = this.t4o_1.x2h(savedResponse, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            this.o8_1 = 6;
            var t = this.q8_1;
            this.t4o_1;
            var tmp_3;
            try {
              cancel_1(this.u4o_1.l3z());
              tmp_3 = _Result___init__impl__xyqfz8(Unit_instance);
            } catch ($p) {
              var tmp_4;
              if ($p instanceof Error) {
                var e_0 = $p;
                tmp_4 = _Result___init__impl__xyqfz8(createFailure(e_0));
              } else {
                throw $p;
              }
              tmp_3 = tmp_4;
            }

            var this_3 = tmp_3;
            var tmp0_safe_receiver_0 = Result__exceptionOrNull_impl_p6xea9(this_3);
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              get_LOGGER_7().q2j('Failed to cancel response body', tmp0_safe_receiver_0);
            }

            throw t;
          case 6:
            throw this.q8_1;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.o8_1 === 6) {
          throw e_1;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(SaveBody$lambda$slambda).h45 = function ($this$intercept, response, completion) {
    var i = new SaveBody$lambda$slambda(completion);
    i.t4o_1 = $this$intercept;
    i.u4o_1 = response;
    return i;
  };
  function SaveBody$lambda$slambda_0(resultContinuation) {
    var i = new SaveBody$lambda$slambda(resultContinuation);
    var l = function ($this$intercept, response, $completion) {
      return i.g45($this$intercept, response, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function SaveBodyPluginConfig$_init_$ref_lwjaof() {
    var l = function () {
      return new SaveBodyPluginConfig();
    };
    l.callableName = '<init>';
    return l;
  }
  function SaveBodyPlugin$lambda($this$createClientPlugin) {
    _init_properties_SaveBody_kt__lbc3fj();
    if ($this$createClientPlugin.o45_1.k4o_1) {
      get_LOGGER_7().p2j('It is no longer possible to disable body saving for all requests. Use client.prepareRequest(...).execute { ... } syntax to prevent saving the body in memory.\n\nThis API is deprecated and will be removed in Ktor 4.0.0\nIf you were relying on this functionality, share your use case by commenting on this issue: https://youtrack.jetbrains.com/issue/KTOR-8367/');
    } else {
      get_LOGGER_7().p2j('The SaveBodyPlugin plugin is deprecated and can be safely removed. Request bodies are now saved in memory by default for all non-streaming responses.');
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
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      SKIP_SAVE_BODY = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'ResponseBodySaved';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_2 = getKClass(Unit);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_3;
      try {
        tmp_3 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p) {
        var tmp_4;
        if ($p instanceof Error) {
          var _unused_var__etf5q3_0 = $p;
          tmp_4 = null;
        } else {
          throw $p;
        }
        tmp_3 = tmp_4;
      }
      var tmp$ret$2_0 = tmp_3;
      var tmp$ret$1_0 = new TypeInfo(tmp_2, tmp$ret$2_0);
      RESPONSE_BODY_SAVED = new AttributeKey(name_0, tmp$ret$1_0);
      LOGGER$delegate = lazy(LOGGER$delegate$lambda);
      SaveBody = createClientPlugin('SaveBody', SaveBody$lambda);
      var tmp_5 = SaveBodyPluginConfig$_init_$ref_lwjaof();
      SaveBodyPlugin = createClientPlugin_0('DoubleReceivePlugin', tmp_5, SaveBodyPlugin$lambda);
    }
  }
  function HookHandler(hook, handler) {
    this.y4o_1 = hook;
    this.z4o_1 = handler;
  }
  protoOf(HookHandler).u3x = function (client) {
    this.y4o_1.u44(client, this.z4o_1);
  };
  function ClientPluginBuilder$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginBuilder(key, client, pluginConfig) {
    this.m45_1 = key;
    this.n45_1 = client;
    this.o45_1 = pluginConfig;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.p45_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    tmp_0.q45_1 = ClientPluginBuilder$onClose$lambda;
  }
  protoOf(ClientPluginBuilder).u4j = function (block) {
    this.r45(RequestHook_instance, block);
  };
  protoOf(ClientPluginBuilder).z4d = function (block) {
    this.r45(TransformResponseBodyHook_instance, block);
  };
  protoOf(ClientPluginBuilder).r45 = function (hook, handler) {
    this.p45_1.b1(new HookHandler(hook, handler));
  };
  function ClientPluginInstance$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginInstance(key, config, body) {
    this.a4p_1 = key;
    this.b4p_1 = config;
    this.c4p_1 = body;
    var tmp = this;
    tmp.d4p_1 = ClientPluginInstance$onClose$lambda;
  }
  protoOf(ClientPluginInstance).u3x = function (scope) {
    var tmp0 = new ClientPluginBuilder(this.a4p_1, scope, this.b4p_1);
    // Inline function 'kotlin.apply' call
    this.c4p_1(tmp0);
    var pluginBuilder = tmp0;
    this.d4p_1 = pluginBuilder.q45_1;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = pluginBuilder.p45_1.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      element.u3x(scope);
    }
  };
  protoOf(ClientPluginInstance).h4 = function () {
    this.d4p_1();
  };
  function SetupRequest$install$slambda($handler, resultContinuation) {
    this.m4p_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequest$install$slambda).g3w = function ($this$intercept, it, $completion) {
    var tmp = this.h3w($this$intercept, it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(SetupRequest$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SetupRequest$install$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.m4p_1(this.n4p_1.t2i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(SetupRequest$install$slambda).h3w = function ($this$intercept, it, completion) {
    var i = new SetupRequest$install$slambda(this.m4p_1, completion);
    i.n4p_1 = $this$intercept;
    i.o4p_1 = it;
    return i;
  };
  function SetupRequest$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequest$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.g3w($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function SetupRequest() {
  }
  protoOf(SetupRequest).p4p = function (client, handler) {
    var tmp = Phases_getInstance().p44_1;
    client.i3v_1.x2i(tmp, SetupRequest$install$slambda_0(handler, null));
  };
  protoOf(SetupRequest).u44 = function (client, handler) {
    return this.p4p(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var SetupRequest_instance;
  function SetupRequest_getInstance() {
    return SetupRequest_instance;
  }
  function Sender_0(httpSendSender, coroutineContext) {
    this.z4b_1 = httpSendSender;
    this.a4c_1 = coroutineContext;
  }
  protoOf(Sender_0).j1e = function () {
    return this.a4c_1;
  };
  protoOf(Sender_0).b4c = function (requestBuilder, $completion) {
    return this.z4b_1.m4l(requestBuilder, $completion);
  };
  function Send$install$slambda($handler, $client, resultContinuation) {
    this.y4p_1 = $handler;
    this.z4p_1 = $client;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Send$install$slambda).c4q = function ($this$intercept, request, $completion) {
    var tmp = this.d4q($this$intercept, request, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(Send$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.c4q(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Send$install$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.y4p_1(new Sender_0(this.a4q_1, this.z4p_1.h3v_1), this.b4q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Send$install$slambda).d4q = function ($this$intercept, request, completion) {
    var i = new Send$install$slambda(this.y4p_1, this.z4p_1, completion);
    i.a4q_1 = $this$intercept;
    i.b4q_1 = request;
    return i;
  };
  function Send$install$slambda_0($handler, $client, resultContinuation) {
    var i = new Send$install$slambda($handler, $client, resultContinuation);
    var l = function ($this$intercept, request, $completion) {
      return i.c4q($this$intercept, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Send() {
  }
  protoOf(Send).e4q = function (client, handler) {
    var tmp = plugin(client, Plugin_getInstance());
    tmp.v4m(Send$install$slambda_0(handler, client, null));
  };
  protoOf(Send).u44 = function (client, handler) {
    return this.e4q(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
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
    this.f4q_1 = createConfiguration;
    this.g4q_1 = body;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(ClientPluginInstance);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(ClientPluginInstance), arrayOf([createInvariantKTypeProjection(createKType(createKTypeParameter('PluginConfigT', arrayOf([createKType(PrimitiveClasses_getInstance().gb(), arrayOf([]), false)]), 'invariant', false, 'io.ktor.client.plugins.api.ClientPluginImpl'), arrayOf([]), false))]), false);
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
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.h4q_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(ClientPluginImpl).m1 = function () {
    return this.h4q_1;
  };
  protoOf(ClientPluginImpl).i4q = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.f4q_1();
    block(this_0);
    var config = this_0;
    return new ClientPluginInstance(this.h4q_1, config, this.g4q_1);
  };
  protoOf(ClientPluginImpl).s3y = function (block) {
    return this.i4q(block);
  };
  protoOf(ClientPluginImpl).j4q = function (plugin, scope) {
    plugin.u3x(scope);
  };
  protoOf(ClientPluginImpl).t3y = function (plugin, scope) {
    return this.j4q(plugin instanceof ClientPluginInstance ? plugin : THROW_CCE(), scope);
  };
  function createClientPlugin$lambda() {
    return Unit_instance;
  }
  function TransformResponseBodyContext() {
  }
  function OnRequestContext() {
  }
  function RequestHook$install$slambda($handler, resultContinuation) {
    this.s4q_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestHook$install$slambda).g3w = function ($this$intercept, it, $completion) {
    var tmp = this.h3w($this$intercept, it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(RequestHook$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RequestHook$install$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.s4q_1(new OnRequestContext(), this.t4q_1.t2i_1, this.t4q_1.w2h(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(RequestHook$install$slambda).h3w = function ($this$intercept, it, completion) {
    var i = new RequestHook$install$slambda(this.s4q_1, completion);
    i.t4q_1 = $this$intercept;
    i.u4q_1 = it;
    return i;
  };
  function RequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RequestHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.g3w($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function RequestHook() {
  }
  protoOf(RequestHook).v4q = function (client, handler) {
    var tmp = Phases_getInstance().q44_1;
    client.i3v_1.x2i(tmp, RequestHook$install$slambda_0(handler, null));
  };
  protoOf(RequestHook).u44 = function (client, handler) {
    return this.v4q(client, (!(handler == null) ? isSuspendFunction(handler, 3) : false) ? handler : THROW_CCE());
  };
  var RequestHook_instance;
  function RequestHook_getInstance() {
    return RequestHook_instance;
  }
  function TransformResponseBodyHook$install$slambda($handler, resultContinuation) {
    this.e4r_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TransformResponseBodyHook$install$slambda).b3x = function ($this$intercept, it, $completion) {
    var tmp = this.c3x($this$intercept, it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(TransformResponseBodyHook$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b3x(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(TransformResponseBodyHook$install$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            var _destruct__k2r9zo = this.f4r_1.w2h();
            this.h4r_1 = _destruct__k2r9zo.uf();
            var content = _destruct__k2r9zo.vf();
            if (!isInterface(content, ByteReadChannel))
              return Unit_instance;
            this.n8_1 = 1;
            suspendResult = this.e4r_1(new TransformResponseBodyContext(), this.f4r_1.t2i_1.n3w(), content, this.h4r_1, this);
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
              tmp_1 = !this.h4r_1.k2j_1.ra(newContent);
            } else {
              tmp_1 = false;
            }

            if (tmp_1) {
              throw IllegalStateException_init_$Create$('transformResponseBody returned ' + toString(newContent) + ' but expected value of type ' + this.h4r_1.toString());
            }

            this.n8_1 = 2;
            suspendResult = this.f4r_1.x2h(new HttpResponseContainer(this.h4r_1, newContent), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 3) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(TransformResponseBodyHook$install$slambda).c3x = function ($this$intercept, it, completion) {
    var i = new TransformResponseBodyHook$install$slambda(this.e4r_1, completion);
    i.f4r_1 = $this$intercept;
    i.g4r_1 = it;
    return i;
  };
  function TransformResponseBodyHook$install$slambda_0($handler, resultContinuation) {
    var i = new TransformResponseBodyHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.b3x($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function TransformResponseBodyHook() {
  }
  protoOf(TransformResponseBodyHook).i4r = function (client, handler) {
    var tmp = Phases_getInstance_2().n3y_1;
    client.j3v_1.x2i(tmp, TransformResponseBodyHook$install$slambda_0(handler, null));
  };
  protoOf(TransformResponseBodyHook).u44 = function (client, handler) {
    return this.i4r(client, (!(handler == null) ? isSuspendFunction(handler, 4) : false) ? handler : THROW_CCE());
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
    this.j4r_1 = delegate;
    this.k4r_1 = call;
  }
  protoOf(DefaultClientWebSocketSession).b3h = function (frame, $completion) {
    return this.j4r_1.b3h(frame, $completion);
  };
  protoOf(DefaultClientWebSocketSession).q21 = function ($completion) {
    return this.j4r_1.q21($completion);
  };
  protoOf(DefaultClientWebSocketSession).x3g = function (_set____db54di) {
    this.j4r_1.x3g(_set____db54di);
  };
  protoOf(DefaultClientWebSocketSession).y3g = function () {
    return this.j4r_1.y3g();
  };
  protoOf(DefaultClientWebSocketSession).z3g = function () {
    return this.j4r_1.z3g();
  };
  protoOf(DefaultClientWebSocketSession).a3h = function () {
    return this.j4r_1.a3h();
  };
  protoOf(DefaultClientWebSocketSession).j1e = function () {
    return this.j4r_1.j1e();
  };
  protoOf(DefaultClientWebSocketSession).w3g = function (negotiatedExtensions) {
    this.j4r_1.w3g(negotiatedExtensions);
  };
  function DelegatingClientWebSocketSession(call, session) {
    this.l4r_1 = session;
    this.m4r_1 = call;
  }
  protoOf(DelegatingClientWebSocketSession).b3h = function (frame, $completion) {
    return this.l4r_1.b3h(frame, $completion);
  };
  protoOf(DelegatingClientWebSocketSession).q21 = function ($completion) {
    return this.l4r_1.q21($completion);
  };
  protoOf(DelegatingClientWebSocketSession).x3g = function (_set____db54di) {
    this.l4r_1.x3g(_set____db54di);
  };
  protoOf(DelegatingClientWebSocketSession).y3g = function () {
    return this.l4r_1.y3g();
  };
  protoOf(DelegatingClientWebSocketSession).z3g = function () {
    return this.l4r_1.z3g();
  };
  protoOf(DelegatingClientWebSocketSession).a3h = function () {
    return this.l4r_1.a3h();
  };
  protoOf(DelegatingClientWebSocketSession).j1e = function () {
    return this.l4r_1.j1e();
  };
  function WebSocketContent() {
    ClientUpgradeContent.call(this);
    var tmp = this;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    var nonce = generateNonce(16);
    this_0.q(Default_getInstance_0().fi(nonce));
    tmp.p4r_1 = this_0.toString();
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new HeadersBuilder();
    this_1.n2f('Upgrade', 'websocket');
    this_1.n2f('Connection', 'Upgrade');
    this_1.n2f('Sec-WebSocket-Key', this.p4r_1);
    this_1.n2f('Sec-WebSocket-Version', '13');
    tmp_0.q4r_1 = this_1.r2n();
  }
  protoOf(WebSocketContent).x2r = function () {
    return this.q4r_1;
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
    this.z4r_1 = $extensionsSupported;
    this.a4s_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebSockets$Plugin$install$slambda).g3w = function ($this$intercept, it, $completion) {
    var tmp = this.h3w($this$intercept, it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(WebSockets$Plugin$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3w(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(WebSockets$Plugin$install$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            if (!isWebsocket(this.b4s_1.t2i_1.n3x_1.n2v())) {
              var this_0 = get_LOGGER_8();
              if (get_isTraceEnabled(this_0)) {
                this_0.r2j('Skipping WebSocket plugin for non-websocket request: ' + this.b4s_1.t2i_1.n3x_1.toString());
              }
              return Unit_instance;
            }

            var this_1 = get_LOGGER_8();
            if (get_isTraceEnabled(this_1)) {
              this_1.r2j('Sending WebSocket request ' + this.b4s_1.t2i_1.n3x_1.toString());
            }

            this.b4s_1.t2i_1.k4n(WebSocketCapability_instance, Unit_instance);
            if (this.z4r_1) {
              installExtensions(this.a4s_1, this.b4s_1.t2i_1);
            }

            this.b4s_1.t2i_1.s3x_1.c2d(get_WEBSOCKETS_KEY(), this.a4s_1);
            this.n8_1 = 1;
            suspendResult = this.b4s_1.x2h(new WebSocketContent(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(WebSockets$Plugin$install$slambda).h3w = function ($this$intercept, it, completion) {
    var i = new WebSockets$Plugin$install$slambda(this.z4r_1, this.a4s_1, completion);
    i.b4s_1 = $this$intercept;
    i.c4s_1 = it;
    return i;
  };
  function WebSockets$Plugin$install$slambda_0($extensionsSupported, $plugin, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda($extensionsSupported, $plugin, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.g3w($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation) {
    this.l4s_1 = $plugin;
    this.m4s_1 = $extensionsSupported;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebSockets$Plugin$install$slambda_1).b3x = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.c3x($this$intercept, _destruct__k2r9zo, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(WebSockets$Plugin$install$slambda_1).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b3x(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(WebSockets$Plugin$install$slambda_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var info = this.o4s_1.uf();
            var session = this.o4s_1.vf();
            var response = this.n4s_1.t2i_1.n3w();
            var status = response.m3z();
            var requestContent = get_request(response).v32();
            if (!(requestContent instanceof WebSocketContent)) {
              var this_0 = get_LOGGER_8();
              if (get_isTraceEnabled(this_0)) {
                this_0.r2j('Skipping non-websocket response from ' + this.n4s_1.t2i_1.w3y().f3z().toString() + ': ' + toString(requestContent));
              }
              return Unit_instance;
            }

            if (!status.equals(Companion_getInstance_1().t2s_1)) {
              throw WebSocketException_init_$Create$('Handshake exception, expected status code ' + Companion_getInstance_1().t2s_1.v2u_1 + ' but was ' + status.v2u_1);
            }

            if (!isInterface(session, WebSocketSession)) {
              throw WebSocketException_init_$Create$('Handshake exception, expected `WebSocketSession` content but was ' + toString(getKClassFromExpression(session)));
            }

            var this_1 = get_LOGGER_8();
            if (get_isTraceEnabled(this_1)) {
              this_1.r2j('Receive websocket session from ' + this.n4s_1.t2i_1.w3y().f3z().toString() + ': ' + toString(session));
            }

            if (!equalsLong(this.l4s_1.q4s_1, new Long(2147483647, 0))) {
              session.x3g(this.l4s_1.q4s_1);
            }

            var tmp_0;
            if (info.k2j_1.equals(getKClass(DefaultClientWebSocketSession))) {
              var defaultSession = this.l4s_1.u4s(session);
              var clientSession = new DefaultClientWebSocketSession(this.n4s_1.t2i_1, defaultSession);
              var tmp_1;
              if (this.m4s_1) {
                tmp_1 = completeNegotiation(this.l4s_1, this.n4s_1.t2i_1);
              } else {
                tmp_1 = emptyList();
              }
              var negotiated = tmp_1;
              clientSession.w3g(negotiated);
              tmp_0 = clientSession;
            } else {
              tmp_0 = new DelegatingClientWebSocketSession(this.n4s_1.t2i_1, session);
            }

            var clientSession_0 = tmp_0;
            this.n8_1 = 1;
            suspendResult = this.n4s_1.x2h(new HttpResponseContainer(info, clientSession_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(WebSockets$Plugin$install$slambda_1).c3x = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new WebSockets$Plugin$install$slambda_1(this.l4s_1, this.m4s_1, completion);
    i.n4s_1 = $this$intercept;
    i.o4s_1 = _destruct__k2r9zo;
    return i;
  };
  function WebSockets$Plugin$install$slambda_2($plugin, $extensionsSupported, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation);
    var l = function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.b3x($this$intercept, _destruct__k2r9zo, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function installExtensions($this, context) {
    var installed = $this.r4s_1.r2n();
    context.s3x_1.b2d(get_REQUEST_EXTENSIONS_KEY(), installed);
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = installed.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var list = element.p3o();
      addAll(destination, list);
    }
    var protocols = destination;
    addNegotiatedProtocols($this, context, protocols);
  }
  function completeNegotiation($this, call) {
    var tmp0_safe_receiver = call.n3w().x2r().p2e('Sec-WebSocket-Extensions');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = parseWebSocketExtensions(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var serverExtensions = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    var clientExtensions = call.x3y().y2c(get_REQUEST_EXTENSIONS_KEY());
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = clientExtensions.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (element.q3o(serverExtensions)) {
        destination.b1(element);
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
    this.v4s_1 = new WebSocketExtensionsConfig();
    this.w4s_1 = new WebSocketChannelsConfig();
    this.x4s_1 = new Long(0, 0);
    this.y4s_1 = new Long(2147483647, 0);
    this.z4s_1 = null;
  }
  function Plugin_0() {
    Plugin_instance_0 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'Websocket';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(WebSockets);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(WebSockets), arrayOf([]), false);
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
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.a4t_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin_0).m1 = function () {
    return this.a4t_1;
  };
  protoOf(Plugin_0).b4t = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config_0();
    block(this_0);
    var config = this_0;
    return new WebSockets(config.x4s_1, config.y4s_1, config.v4s_1, config.z4s_1, config.w4s_1);
  };
  protoOf(Plugin_0).s3y = function (block) {
    return this.b4t(block);
  };
  protoOf(Plugin_0).c4t = function (plugin, scope) {
    var extensionsSupported = scope.c3v_1.t42().j2(WebSocketExtensionsCapability_instance);
    var tmp = Phases_getInstance().s44_1;
    scope.i3v_1.x2i(tmp, WebSockets$Plugin$install$slambda_0(extensionsSupported, plugin, null));
    var tmp_0 = Phases_getInstance_2().n3y_1;
    scope.j3v_1.x2i(tmp_0, WebSockets$Plugin$install$slambda_2(plugin, extensionsSupported, null));
  };
  protoOf(Plugin_0).t3y = function (plugin, scope) {
    return this.c4t(plugin instanceof WebSockets ? plugin : THROW_CCE(), scope);
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
    channelsConfig = channelsConfig === VOID ? Companion_getInstance_3().c3h_1 : channelsConfig;
    this.p4s_1 = pingIntervalMillis;
    this.q4s_1 = maxFrameSize;
    this.r4s_1 = extensionsConfig;
    this.s4s_1 = contentConverter;
    this.t4s_1 = channelsConfig;
  }
  protoOf(WebSockets).u4s = function (session) {
    if (isInterface(session, DefaultWebSocketSession))
      return session;
    // Inline function 'kotlin.Long.times' call
    var this_0 = this.p4s_1;
    var timeoutMillis = multiply(this_0, fromInt(2));
    // Inline function 'kotlin.also' call
    var this_1 = DefaultWebSocketSession_0(session, this.p4s_1, timeoutMillis, this.t4s_1);
    this_1.x3g(this.q4s_1);
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
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(WebSocketExtension), arrayOf([getStarKTypeProjection()]), false))]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      REQUEST_EXTENSIONS_KEY = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'Websocket plugin config';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_2 = getKClass(WebSockets);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_3;
      try {
        tmp_3 = createKType(getKClass(WebSockets), arrayOf([]), false);
      } catch ($p) {
        var tmp_4;
        if ($p instanceof Error) {
          var _unused_var__etf5q3_0 = $p;
          tmp_4 = null;
        } else {
          throw $p;
        }
        tmp_3 = tmp_4;
      }
      var tmp$ret$2_0 = tmp_3;
      var tmp$ret$1_0 = new TypeInfo(tmp_2, tmp$ret$2_0);
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
    tmp.e4t_1 = lazy(ClientUpgradeContent$content$delegate$lambda);
  }
  function DefaultHttpRequest(call, data) {
    this.f4t_1 = call;
    this.g4t_1 = data.n42_1;
    this.h4t_1 = data.m42_1;
    this.i4t_1 = data.p42_1;
    this.j4t_1 = data.o42_1;
    this.k4t_1 = data.r42_1;
  }
  protoOf(DefaultHttpRequest).d3z = function () {
    return this.f4t_1;
  };
  protoOf(DefaultHttpRequest).j1e = function () {
    return this.d3z().j1e();
  };
  protoOf(DefaultHttpRequest).e3z = function () {
    return this.g4t_1;
  };
  protoOf(DefaultHttpRequest).f3z = function () {
    return this.h4t_1;
  };
  protoOf(DefaultHttpRequest).v32 = function () {
    return this.i4t_1;
  };
  protoOf(DefaultHttpRequest).x2r = function () {
    return this.j4t_1;
  };
  protoOf(DefaultHttpRequest).x3y = function () {
    return this.k4t_1;
  };
  function get_ResponseAdapterAttributeKey() {
    _init_properties_HttpRequest_kt__813lx1();
    return ResponseAdapterAttributeKey;
  }
  var ResponseAdapterAttributeKey;
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_10() {
    return Companion_instance_3;
  }
  function HttpRequestBuilder$setCapability$lambda() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    return LinkedHashMap_init_$Create$();
  }
  function HttpRequestBuilder() {
    this.n3x_1 = new URLBuilder();
    this.o3x_1 = Companion_getInstance_2().y2r_1;
    this.p3x_1 = new HeadersBuilder();
    this.q3x_1 = EmptyContent_getInstance();
    this.r3x_1 = SupervisorJob();
    this.s3x_1 = AttributesJsFn(true);
  }
  protoOf(HttpRequestBuilder).x2r = function () {
    return this.p3x_1;
  };
  protoOf(HttpRequestBuilder).i43 = function (value) {
    if (!(value == null)) {
      this.s3x_1.b2d(get_BodyTypeAttributeKey(), value);
    } else {
      this.s3x_1.d2d(get_BodyTypeAttributeKey());
    }
  };
  protoOf(HttpRequestBuilder).l4t = function () {
    return this.s3x_1.z2c(get_BodyTypeAttributeKey());
  };
  protoOf(HttpRequestBuilder).r2n = function () {
    var tmp = this.n3x_1.r2n();
    var tmp_0 = this.o3x_1;
    var tmp_1 = this.p3x_1.r2n();
    var tmp_2 = this.q3x_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'No request transformation found: ' + toString(this.q3x_1);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.r3x_1, this.s3x_1);
  };
  protoOf(HttpRequestBuilder).h43 = function (builder) {
    this.r3x_1 = builder.r3x_1;
    return this.v4j(builder);
  };
  protoOf(HttpRequestBuilder).v4j = function (builder) {
    this.o3x_1 = builder.o3x_1;
    this.q3x_1 = builder.q3x_1;
    this.i43(builder.l4t());
    takeFrom_0(this.n3x_1, builder.n3x_1);
    this.n3x_1.i2v_1 = this.n3x_1.i2v_1;
    appendAll(this.p3x_1, builder.p3x_1);
    putAll(this.s3x_1, builder.s3x_1);
    return this;
  };
  protoOf(HttpRequestBuilder).k4n = function (key, capability) {
    var tmp = get_ENGINE_CAPABILITIES_KEY();
    var capabilities = this.s3x_1.e2d(tmp, HttpRequestBuilder$setCapability$lambda);
    // Inline function 'kotlin.collections.set' call
    capabilities.v2(key, capability);
  };
  protoOf(HttpRequestBuilder).w4m = function (key) {
    var tmp0_safe_receiver = this.s3x_1.z2c(get_ENGINE_CAPABILITIES_KEY());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s2(key);
  };
  function HttpRequest_0() {
  }
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.m42_1 = url;
    this.n42_1 = method;
    this.o42_1 = headers;
    this.p42_1 = body;
    this.q42_1 = executionContext;
    this.r42_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.r42_1.z2c(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t2();
    tmp.s42_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  protoOf(HttpRequestData).toString = function () {
    return 'HttpRequestData(url=' + this.m42_1.toString() + ', method=' + this.n42_1.toString() + ')';
  };
  function ResponseAdapter() {
  }
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.r3z_1 = statusCode;
    this.s3z_1 = requestTime;
    this.t3z_1 = headers;
    this.u3z_1 = version;
    this.v3z_1 = body;
    this.w3z_1 = callContext;
    this.x3z_1 = GMTDate();
  }
  protoOf(HttpResponseData).toString = function () {
    return 'HttpResponseData=(statusCode=' + this.r3z_1.toString() + ')';
  };
  function isUpgradeRequest(_this__u8e3s4) {
    _init_properties_HttpRequest_kt__813lx1();
    var tmp = _this__u8e3s4.p42_1;
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
    set(_this__u8e3s4.n3x_1, scheme, host, port, path, block);
  }
  function headers(_this__u8e3s4, block) {
    _init_properties_HttpRequest_kt__813lx1();
    // Inline function 'kotlin.apply' call
    var this_0 = _this__u8e3s4.x2r();
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
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(ResponseAdapter), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      ResponseAdapterAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function Phases() {
    Phases_instance = this;
    this.p44_1 = new PipelinePhase('Before');
    this.q44_1 = new PipelinePhase('State');
    this.r44_1 = new PipelinePhase('Transform');
    this.s44_1 = new PipelinePhase('Render');
    this.t44_1 = new PipelinePhase('Send');
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
    Pipeline.call(this, [Phases_getInstance().p44_1, Phases_getInstance().q44_1, Phases_getInstance().r44_1, Phases_getInstance().s44_1, Phases_getInstance().t44_1]);
    this.u4t_1 = developmentMode;
  }
  protoOf(HttpRequestPipeline).r2i = function () {
    return this.u4t_1;
  };
  function Phases_0() {
    Phases_instance_0 = this;
    this.v3x_1 = new PipelinePhase('Before');
    this.w3x_1 = new PipelinePhase('State');
    this.x3x_1 = new PipelinePhase('Monitoring');
    this.y3x_1 = new PipelinePhase('Engine');
    this.z3x_1 = new PipelinePhase('Receive');
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
    Pipeline.call(this, [Phases_getInstance_0().v3x_1, Phases_getInstance_0().w3x_1, Phases_getInstance_0().x3x_1, Phases_getInstance_0().y3x_1, Phases_getInstance_0().z3x_1]);
    this.c4u_1 = developmentMode;
  }
  protoOf(HttpSendPipeline).r2i = function () {
    return this.c4u_1;
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
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(TypeInfo), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
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
    this.e4u_1 = formData;
    this.f4u_1 = toByteArray_0(formUrlEncode(this.e4u_1));
    this.g4u_1 = fromInt(this.f4u_1.length);
    this.h4u_1 = withCharset(Application_getInstance().k2l_1, Charsets_getInstance().u2b_1);
  }
  protoOf(FormDataContent).n2x = function () {
    return this.g4u_1;
  };
  protoOf(FormDataContent).m2x = function () {
    return this.h4u_1;
  };
  protoOf(FormDataContent).o2x = function () {
    return this.f4u_1;
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
    this.q4u_1 = _this__u8e3s4;
    this.r4u_1 = channel;
  }
  protoOf($writeToCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 25;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 21;
            this.o8_1 = 20;
            this.y4u_1 = this.q4u_1.h4v_1.t();
            this.n8_1 = 2;
            continue $sm;
          case 2:
            if (!this.y4u_1.u()) {
              this.n8_1 = 18;
              continue $sm;
            }

            this.x4u_1 = this.y4u_1.v();
            this.n8_1 = 3;
            suspendResult = writeFully_0(this.r4u_1, this.q4u_1.d4v_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.n8_1 = 4;
            suspendResult = writeFully_0(this.r4u_1, this.x4u_1.j4v_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.n8_1 = 5;
            suspendResult = writeFully_0(this.r4u_1, get_RN_BYTES(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var tmp0_subject = this.x4u_1;
            if (tmp0_subject instanceof InputPart) {
              this.w4u_1 = this.x4u_1.q4v_1();
              this.n8_1 = 7;
              continue $sm;
            } else {
              if (tmp0_subject instanceof ChannelPart) {
                this.n8_1 = 6;
                suspendResult = copyTo_0(this.x4u_1.n4v_1(), this.r4u_1, this);
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
            this.t4u_1 = suspendResult;
            this.n8_1 = 16;
            continue $sm;
          case 7:
            this.v4u_1 = this.w4u_1;
            this.u4u_1 = null;
            this.n8_1 = 8;
            continue $sm;
          case 8:
            this.n8_1 = 9;
            continue $sm;
          case 9:
            this.o8_1 = 13;
            this.o8_1 = 12;
            var input = this.v4u_1;
            this.n8_1 = 10;
            suspendResult = copyTo_1(input, this.r4u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.n8_1 = 11;
            var tmp_1 = this;
            continue $sm;
          case 11:
            this.o8_1 = 20;
            closeFinally(this.v4u_1, this.u4u_1);
            this.n8_1 = 15;
            continue $sm;
          case 12:
            this.o8_1 = 13;
            var tmp_2 = this.q8_1;
            if (tmp_2 instanceof Error) {
              var e = this.q8_1;
              var tmp_3 = this;
              this.u4u_1 = e;
              throw e;
            } else {
              throw this.q8_1;
            }

          case 13:
            this.o8_1 = 20;
            var t = this.q8_1;
            closeFinally(this.v4u_1, this.u4u_1);
            throw t;
          case 14:
            this.o8_1 = 20;
            closeFinally(this.v4u_1, this.u4u_1);
            if (false) {
              this.n8_1 = 7;
              continue $sm;
            }

            this.n8_1 = 15;
            continue $sm;
          case 15:
            this.t4u_1 = Unit_instance;
            this.n8_1 = 16;
            continue $sm;
          case 16:
            this.n8_1 = 17;
            suspendResult = writeFully_0(this.r4u_1, get_RN_BYTES(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 17:
            this.n8_1 = 2;
            continue $sm;
          case 18:
            this.n8_1 = 19;
            suspendResult = writeFully_0(this.r4u_1, this.q4u_1.e4v_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 19:
            this.o8_1 = 25;
            this.n8_1 = 23;
            continue $sm;
          case 20:
            this.o8_1 = 21;
            var tmp_4 = this.q8_1;
            if (tmp_4 instanceof Error) {
              var cause = this.q8_1;
              close(this.r4u_1, cause);
              this.o8_1 = 25;
              this.n8_1 = 23;
              continue $sm;
            } else {
              throw this.q8_1;
            }

          case 21:
            this.o8_1 = 25;
            this.s4u_1 = this.q8_1;
            this.n8_1 = 22;
            suspendResult = this.r4u_1.z21(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 22:
            throw this.s4u_1;
          case 23:
            this.o8_1 = 25;
            this.n8_1 = 24;
            suspendResult = this.r4u_1.z21(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 24:
            return Unit_instance;
          case 25:
            throw this.q8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o8_1 === 25) {
          throw e_0;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e_0;
        }
      }
     while (true);
  };
  function MultiPartFormDataContent(parts, boundary, contentType) {
    boundary = boundary === VOID ? generateBoundary() : boundary;
    contentType = contentType === VOID ? MultiPart_getInstance().n2m_1.m2n('boundary', boundary) : contentType;
    WriteChannelContent.call(this);
    this.a4v_1 = parts;
    this.b4v_1 = boundary;
    this.c4v_1 = contentType;
    this.d4v_1 = toByteArray_0('--' + this.b4v_1 + '\r\n');
    this.e4v_1 = toByteArray_0('--' + this.b4v_1 + '--\r\n');
    this.f4v_1 = this.e4v_1.length;
    this.g4v_1 = imul(get_RN_BYTES().length, 2) + this.d4v_1.length | 0;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.a4v_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var headersBuilder = BytePacketBuilder();
      var _iterator__ex2g4s_0 = item.h2z_1.c2f().t();
      while (_iterator__ex2g4s_0.u()) {
        var _destruct__k2r9zo = _iterator__ex2g4s_0.v();
        // Inline function 'kotlin.collections.component1' call
        var key = _destruct__k2r9zo.m1();
        // Inline function 'kotlin.collections.component2' call
        var values = _destruct__k2r9zo.n1();
        writeText(headersBuilder, key + ': ' + joinToString(values, '; '));
        writeFully(headersBuilder, get_RN_BYTES());
      }
      var tmp0_safe_receiver = item.h2z_1.p2e('Content-Length');
      var bodySize = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
      var tmp_0;
      if (item instanceof FileItem) {
        var headers = readByteArray(build(headersBuilder));
        var tmp_1;
        if (bodySize == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.Long.plus' call
          var other = this.g4v_1;
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
        tmp_0 = new ChannelPart(headers, item.w4v_1, size);
      } else {
        if (item instanceof BinaryItem) {
          var headers_0 = readByteArray(build(headersBuilder));
          var tmp_3;
          if (bodySize == null) {
            tmp_3 = null;
          } else {
            // Inline function 'kotlin.Long.plus' call
            var other_1 = this.g4v_1;
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
          tmp_0 = new InputPart(headers_0, item.z2y_1, size_0);
        } else {
          if (item instanceof FormItem) {
            // Inline function 'io.ktor.utils.io.core.buildPacket' call
            var builder = new Buffer();
            writeText(builder, item.t2y_1);
            var bytes = readByteArray(builder);
            var provider = MultiPartFormDataContent$rawParts$lambda(bytes);
            if (bodySize == null) {
              writeText(headersBuilder, 'Content-Length: ' + bytes.length);
              writeFully(headersBuilder, get_RN_BYTES());
            }
            var headers_1 = readByteArray(build(headersBuilder));
            var size_1 = (bytes.length + this.g4v_1 | 0) + headers_1.length | 0;
            tmp_0 = new InputPart(headers_1, provider, fromInt(size_1));
          } else {
            if (item instanceof BinaryChannelItem) {
              var headers_2 = readByteArray(build(headersBuilder));
              var tmp_5;
              if (bodySize == null) {
                tmp_5 = null;
              } else {
                // Inline function 'kotlin.Long.plus' call
                var other_3 = this.g4v_1;
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
              tmp_0 = new ChannelPart(headers_2, item.f2z_1, size_2);
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
      var tmp$ret$2 = tmp_0;
      destination.b1(tmp$ret$2);
    }
    tmp.h4v_1 = destination;
    this.i4v_1 = null;
    var rawLength = new Long(0, 0);
    var _iterator__ex2g4s_1 = this.h4v_1.t();
    $l$loop: while (_iterator__ex2g4s_1.u()) {
      var part = _iterator__ex2g4s_1.v();
      var size_3 = part.k4v_1;
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
      var other_5 = this.f4v_1;
      rawLength = add(tmp0, fromInt(other_5));
    }
    this.i4v_1 = rawLength;
  }
  protoOf(MultiPartFormDataContent).m2x = function () {
    return this.c4v_1;
  };
  protoOf(MultiPartFormDataContent).n2x = function () {
    return this.i4v_1;
  };
  protoOf(MultiPartFormDataContent).o2z = function (channel, $completion) {
    var tmp = new $writeToCOROUTINE$(this, channel, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
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
        this_0.q(toString_1(Default_getInstance().wf(), 16));
      }
       while (inductionVariable < 32);
    var tmp$ret$0 = this_0.toString();
    return take(tmp$ret$0, 70);
  }
  function InputPart(headers, provider, size) {
    PreparedPart.call(this, headers, size);
    this.q4v_1 = provider;
  }
  function ChannelPart(headers, provider, size) {
    PreparedPart.call(this, headers, size);
    this.n4v_1 = provider;
  }
  function PreparedPart(headers, size) {
    this.j4v_1 = headers;
    this.k4v_1 = size;
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
    tmp.x4v_1 = ArrayList_init_$Create$();
  }
  protoOf(FormBuilder).y4v = function (key, value, headers) {
    var tmp0 = this.x4v_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new FormPart(key, value, headers);
    tmp0.b1(element);
  };
  protoOf(FormBuilder).z4v = function (key, value, headers, $super) {
    headers = headers === VOID ? Companion_getInstance_4().o2n_1 : headers;
    var tmp;
    if ($super === VOID) {
      this.y4v(key, value, headers);
      tmp = Unit_instance;
    } else {
      tmp = $super.y4v.call(this, key, value, headers);
    }
    return tmp;
  };
  protoOf(FormBuilder).a4w = function (key, value, headers) {
    var tmp0 = this.x4v_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new FormPart(key, value, headers);
    tmp0.b1(element);
  };
  protoOf(FormBuilder).b4w = function () {
    return this.x4v_1;
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
      var key = element.uf();
      var value = element.vf();
      var headers = element.f4w();
      // Inline function 'kotlin.apply' call
      var this_0 = new HeadersBuilder();
      this_0.n2f('Content-Disposition', 'form-data; name=' + quoteForMultipart(key));
      this_0.o2f(headers);
      var partHeaders = this_0;
      var tmp;
      if (typeof value === 'string') {
        tmp = new FormItem(value, formData$lambda, partHeaders.r2n());
      } else {
        if (isNumber(value)) {
          var tmp_0 = toString(value);
          tmp = new FormItem(tmp_0, formData$lambda_0, partHeaders.r2n());
        } else {
          if (typeof value === 'boolean') {
            var tmp_1 = value.toString();
            tmp = new FormItem(tmp_1, formData$lambda_1, partHeaders.r2n());
          } else {
            if (isByteArray(value)) {
              partHeaders.n2f('Content-Length', value.length.toString());
              var tmp_2 = formData$lambda_2(value);
              tmp = new BinaryItem(tmp_2, formData$lambda_3, partHeaders.r2n());
            } else {
              if (isInterface(value, Source)) {
                if (value instanceof Buffer) {
                  partHeaders.n2f('Content-Length', get_remaining(value).toString());
                }
                var tmp_3 = formData$lambda_4(value);
                tmp = new BinaryItem(tmp_3, formData$lambda_5(value), partHeaders.r2n());
              } else {
                if (value instanceof InputProvider) {
                  var size = value.i4w_1;
                  if (!(size == null)) {
                    partHeaders.n2f('Content-Length', size.toString());
                  }
                  tmp = new BinaryItem(value.j4w_1, formData$lambda_6, partHeaders.r2n());
                } else {
                  if (value instanceof ChannelProvider) {
                    var size_0 = value.g4w_1;
                    if (!(size_0 == null)) {
                      partHeaders.n2f('Content-Length', size_0.toString());
                    }
                    tmp = new BinaryChannelItem(value.h4w_1, partHeaders.r2n());
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
      result.b1(part);
    }
    return result;
  }
  function FormPart(key, value, headers) {
    headers = headers === VOID ? Companion_getInstance_4().o2n_1 : headers;
    this.c4w_1 = key;
    this.d4w_1 = value;
    this.e4w_1 = headers;
  }
  protoOf(FormPart).uf = function () {
    return this.c4w_1;
  };
  protoOf(FormPart).vf = function () {
    return this.d4w_1;
  };
  protoOf(FormPart).f4w = function () {
    return this.e4w_1;
  };
  protoOf(FormPart).toString = function () {
    return 'FormPart(key=' + this.c4w_1 + ', value=' + toString(this.d4w_1) + ', headers=' + toString(this.e4w_1) + ')';
  };
  protoOf(FormPart).hashCode = function () {
    var result = getStringHashCode(this.c4w_1);
    result = imul(result, 31) + hashCode(this.d4w_1) | 0;
    result = imul(result, 31) + hashCode(this.e4w_1) | 0;
    return result;
  };
  protoOf(FormPart).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FormPart))
      return false;
    if (!(this.c4w_1 === other.c4w_1))
      return false;
    if (!equals(this.d4w_1, other.d4w_1))
      return false;
    if (!equals(this.e4w_1, other.e4w_1))
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
      return $value.c1c();
    };
  }
  function formData$lambda_5($value) {
    return function () {
      $value.h4();
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
      _this__u8e3s4.x2r().n2f(key, toString(value));
      tmp = Unit_instance;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? Unit_instance : tmp1_elvis_lhs;
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.k4w_1 = call;
    this.l4w_1 = responseData.w3z_1;
    this.m4w_1 = responseData.r3z_1;
    this.n4w_1 = responseData.u3z_1;
    this.o4w_1 = responseData.s3z_1;
    this.p4w_1 = responseData.x3z_1;
    var tmp = this;
    var tmp_0 = responseData.v3z_1;
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.q4w_1 = tmp0_elvis_lhs == null ? Companion_getInstance().w23_1 : tmp0_elvis_lhs;
    this.r4w_1 = responseData.t3z_1;
  }
  protoOf(DefaultHttpResponse).d3z = function () {
    return this.k4w_1;
  };
  protoOf(DefaultHttpResponse).j1e = function () {
    return this.l4w_1;
  };
  protoOf(DefaultHttpResponse).m3z = function () {
    return this.m4w_1;
  };
  protoOf(DefaultHttpResponse).n3z = function () {
    return this.n4w_1;
  };
  protoOf(DefaultHttpResponse).o3z = function () {
    return this.o4w_1;
  };
  protoOf(DefaultHttpResponse).p3z = function () {
    return this.p4w_1;
  };
  protoOf(DefaultHttpResponse).l3z = function () {
    return this.q4w_1;
  };
  protoOf(DefaultHttpResponse).x2r = function () {
    return this.r4w_1;
  };
  function HttpResponse() {
  }
  protoOf(HttpResponse).toString = function () {
    return 'HttpResponse[' + get_request(this).f3z().toString() + ', ' + this.m3z().toString() + ']';
  };
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.d3z().w3y();
  }
  function bodyAsText(_this__u8e3s4, fallbackCharset, $completion) {
    fallbackCharset = fallbackCharset === VOID ? Charsets_getInstance().u2b_1 : fallbackCharset;
    var tmp = new $bodyAsTextCOROUTINE$(_this__u8e3s4, fallbackCharset, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function $bodyAsTextCOROUTINE$(_this__u8e3s4, fallbackCharset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a4x_1 = _this__u8e3s4;
    this.b4x_1 = fallbackCharset;
  }
  protoOf($bodyAsTextCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var tmp0_elvis_lhs = charset_0(this.a4x_1);
            var originCharset = tmp0_elvis_lhs == null ? this.b4x_1 : tmp0_elvis_lhs;
            this.c4x_1 = originCharset.x2b();
            var this_0 = this.a4x_1;
            this.n8_1 = 1;
            var tmp_0 = this_0.d3z();
            var tmp_1 = getKClass(Source);
            var tmp_2;
            try {
              tmp_2 = createKType(getKClass(Source), arrayOf([]), false);
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

            suspendResult = tmp_0.a3z(new TypeInfo(tmp_1, tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var input = (!(suspendResult == null) ? isInterface(suspendResult, Source) : false) ? suspendResult : THROW_CCE();
            return decode(this.c4x_1, input);
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function Phases_1() {
    Phases_instance_1 = this;
    this.j45_1 = new PipelinePhase('Before');
    this.k45_1 = new PipelinePhase('State');
    this.l45_1 = new PipelinePhase('After');
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
    Pipeline.call(this, [Phases_getInstance_1().j45_1, Phases_getInstance_1().k45_1, Phases_getInstance_1().l45_1]);
    this.k4x_1 = developmentMode;
  }
  protoOf(HttpReceivePipeline).r2i = function () {
    return this.k4x_1;
  };
  function Phases_2() {
    Phases_instance_2 = this;
    this.l3y_1 = new PipelinePhase('Receive');
    this.m3y_1 = new PipelinePhase('Parse');
    this.n3y_1 = new PipelinePhase('Transform');
    this.o3y_1 = new PipelinePhase('State');
    this.p3y_1 = new PipelinePhase('After');
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
    Pipeline.call(this, [Phases_getInstance_2().l3y_1, Phases_getInstance_2().m3y_1, Phases_getInstance_2().n3y_1, Phases_getInstance_2().o3y_1, Phases_getInstance_2().p3y_1]);
    this.s4x_1 = developmentMode;
  }
  protoOf(HttpResponsePipeline).r2i = function () {
    return this.s4x_1;
  };
  function HttpResponseContainer(expectedType, response) {
    this.j40_1 = expectedType;
    this.k40_1 = response;
  }
  protoOf(HttpResponseContainer).uf = function () {
    return this.j40_1;
  };
  protoOf(HttpResponseContainer).vf = function () {
    return this.k40_1;
  };
  protoOf(HttpResponseContainer).toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.j40_1.toString() + ', response=' + toString(this.k40_1) + ')';
  };
  protoOf(HttpResponseContainer).hashCode = function () {
    var result = this.j40_1.hashCode();
    result = imul(result, 31) + hashCode(this.k40_1) | 0;
    return result;
  };
  protoOf(HttpResponseContainer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    if (!this.j40_1.equals(other.j40_1))
      return false;
    if (!equals(this.k40_1, other.k40_1))
      return false;
    return true;
  };
  function $fetchResponseCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b4y_1 = _this__u8e3s4;
  }
  protoOf($fetchResponseCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 7;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 6;
            var builder = (new HttpRequestBuilder()).h43(this.b4y_1.f4y_1);
            this.n8_1 = 2;
            suspendResult = this.b4y_1.g4y_1.q3y(builder, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.e4y_1 = suspendResult;
            this.n8_1 = 3;
            suspendResult = save(this.e4y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.d4y_1 = suspendResult.n3w();
            this.n8_1 = 4;
            suspendResult = this.b4y_1.h4y(this.e4y_1.n3w(), null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var tmp_0 = this;
            return this.d4y_1;
          case 5:
            return this.c4y_1;
          case 6:
            this.o8_1 = 7;
            var tmp_1 = this.q8_1;
            if (tmp_1 instanceof CancellationException) {
              var cause = this.q8_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.q8_1;
            }

          case 7:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 7) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function $cleanupCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, cause, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q4y_1 = _this__u8e3s4;
    this.r4y_1 = _this__u8e3s4_0;
    this.s4y_1 = cause;
  }
  protoOf($cleanupCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var tmp_0 = get_job(this.r4y_1.j1e());
            var job = isInterface(tmp_0, CompletableJob) ? tmp_0 : THROW_CCE();
            this.t4y_1 = job;
            var $this$apply = this.t4y_1;
            var tmp0_subject = this.s4y_1;
            if (tmp0_subject == null)
              $this$apply.l1l();
            else {
              if (tmp0_subject instanceof CancellationException) {
                $this$apply.s1f(this.s4y_1);
              } else {
                $this$apply.s1f(CancellationException_init_$Create$('Exception occurred during request execution', this.s4y_1));
              }
            }

            if (!get_isSaved(this.r4y_1)) {
              try {
                cancel_1(this.r4y_1.l3z());
              } catch ($p) {
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                } else {
                  throw $p;
                }
              }
            }

            this.n8_1 = 1;
            suspendResult = $this$apply.p1f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function HttpStatement(builder, client) {
    this.f4y_1 = builder;
    this.g4y_1 = client;
  }
  protoOf(HttpStatement).u4y = function ($completion) {
    return this.v4y($completion);
  };
  protoOf(HttpStatement).v4y = function ($completion) {
    var tmp = new $fetchResponseCOROUTINE$(this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpStatement).h4y = function (_this__u8e3s4, cause, $completion) {
    var tmp = new $cleanupCOROUTINE$(this, _this__u8e3s4, cause, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpStatement).toString = function () {
    return 'HttpStatement[' + this.f4y_1.n3x_1.toString() + ']';
  };
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_instance;
    return writer(tmp, context, true, observable$slambda_0(_this__u8e3s4, listener, contentLength, null)).s23_1;
  }
  function observable$slambda($this_observable, $listener, $contentLength, resultContinuation) {
    this.e4z_1 = $this_observable;
    this.f4z_1 = $listener;
    this.g4z_1 = $contentLength;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(observable$slambda).r3t = function ($this$writer, $completion) {
    var tmp = this.s3t($this$writer, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(observable$slambda).j9 = function (p1, $completion) {
    return this.r3t(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(observable$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 16;
            this.n4z_1 = get_ByteArrayPool();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.j4z_1 = this.n4z_1;
            this.i4z_1 = this.j4z_1.j2c();
            this.n8_1 = 2;
            continue $sm;
          case 2:
            this.n8_1 = 3;
            continue $sm;
          case 3:
            this.o8_1 = 15;
            this.m4z_1 = this.i4z_1;
            this.k4z_1 = new Long(0, 0);
            this.n8_1 = 4;
            continue $sm;
          case 4:
            if (!!this.e4z_1.w21()) {
              this.n8_1 = 9;
              continue $sm;
            }

            this.n8_1 = 5;
            suspendResult = readAvailable(this.e4z_1, this.m4z_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.l4z_1 = suspendResult;
            if (this.l4z_1 <= 0) {
              this.n8_1 = 4;
              continue $sm;
            } else {
              this.n8_1 = 6;
              continue $sm;
            }

          case 6:
            this.n8_1 = 7;
            suspendResult = writeFully_0(this.h4z_1.o29_1, this.m4z_1, 0, this.l4z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var tmp_0 = this;
            var tmp0 = this.k4z_1;
            var other = this.l4z_1;
            tmp_0.k4z_1 = add(tmp0, fromInt(other));
            this.n8_1 = 8;
            suspendResult = this.f4z_1.n41(this.k4z_1, this.g4z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.n8_1 = 4;
            continue $sm;
          case 9:
            var closedCause = this.e4z_1.v21();
            close(this.h4z_1.o29_1, closedCause);
            if (closedCause == null && equalsLong(this.k4z_1, new Long(0, 0))) {
              this.n8_1 = 10;
              suspendResult = this.f4z_1.n41(this.k4z_1, this.g4z_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 11;
              continue $sm;
            }

          case 10:
            this.n8_1 = 11;
            continue $sm;
          case 11:
            this.o8_1 = 16;
            this.n8_1 = 12;
            var tmp_1 = this;
            continue $sm;
          case 12:
            this.o8_1 = 16;
            this.j4z_1.k2c(this.i4z_1);
            this.n8_1 = 14;
            continue $sm;
          case 13:
            this.o8_1 = 16;
            this.j4z_1.k2c(this.i4z_1);
            if (false) {
              this.n8_1 = 1;
              continue $sm;
            }

            this.n8_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            this.o8_1 = 16;
            var t = this.q8_1;
            this.j4z_1.k2c(this.i4z_1);
            throw t;
          case 16:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 16) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(observable$slambda).s3t = function ($this$writer, completion) {
    var i = new observable$slambda(this.e4z_1, this.f4z_1, this.g4z_1, completion);
    i.h4z_1 = $this$writer;
    return i;
  };
  function observable$slambda_0($this_observable, $listener, $contentLength, resultContinuation) {
    var i = new observable$slambda($this_observable, $listener, $contentLength, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.r3t($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
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
    this.o4z_1 = response;
    this.p4z_1 = cause;
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
    this.r4z_1 = new Long(0, 0);
  }
  protoOf(EmptyContent).n2x = function () {
    return this.r4z_1;
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
    if (method.equals(Companion_getInstance_2().d2s_1) || method.equals(Companion_getInstance_2().e2s_1))
      return Unit_instance;
    var header = _this__u8e3s4.p2e('Content-Encoding');
    if (header == null) {
      if (!alwaysRemove)
        return Unit_instance;
    } else {
      var tmp = get_DecompressionListAttribute();
      attributes.e2d(tmp, dropCompressionHeaders$lambda).b1(header);
    }
    _this__u8e3s4.p2f('Content-Encoding');
    _this__u8e3s4.p2f('Content-Length');
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
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(KtMutableList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().rb(), arrayOf([]), false))]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
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
    return this_0.r2n();
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
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(FetchOptions), arrayOf([]), false);
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
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.s4z_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_4;
  function Companion_getInstance_11() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function FetchOptions(requestInit) {
    Companion_getInstance_11();
    this.t4z_1 = requestInit;
  }
  function get_initHook() {
    return initHook;
  }
  var initHook;
  function Js() {
  }
  protoOf(Js).u4z = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new JsClientEngineConfig();
    block(this_0);
    return new JsClientEngine(this_0);
  };
  protoOf(Js).r3y = function (block) {
    return this.u4z(block);
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
    tmp.z4z_1 = JsClientEngineConfig$requestInit$lambda;
    this.a50_1 = Object.create(null);
  }
  function initHook$init$() {
    engines_getInstance().c50(Js_instance);
    return Unit_instance;
  }
  function createWebSocket($this, urlString_capturingHack, headers, $completion) {
    var tmp = new $createWebSocketCOROUTINE$($this, urlString_capturingHack, headers, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function executeWebSocketRequest($this, request, callContext, $completion) {
    var tmp = new $executeWebSocketRequestCOROUTINE$($this, request, callContext, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
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
    this.p51_1 = _this__u8e3s4;
    this.q51_1 = data;
  }
  protoOf($executeCOROUTINE$_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 6;
            this.n8_1 = 1;
            suspendResult = callContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.r51_1 = suspendResult;
            this.t51_1 = this.q51_1.r42_1.y2c(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.q51_1)) {
              this.n8_1 = 5;
              suspendResult = executeWebSocketRequest(this.p51_1, this.q51_1, this.r51_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 2;
              continue $sm;
            }

          case 2:
            this.s51_1 = GMTDate();
            this.n8_1 = 3;
            suspendResult = ktor_toRaw(this.q51_1, this.t51_1, this.r51_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var rawRequest = suspendResult;
            var tmp0_safe_receiver = this.q51_1.r42_1.z2c(Companion_getInstance_11().s4z_1);
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t4z_1;
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
              tmp_0 = JsClientEngine$execute$lambda;
            } else {
              tmp_0 = tmp1_elvis_lhs;
            }

            var fetchOptions = tmp_0;
            this.n8_1 = 4;
            suspendResult = commonFetch(this.q51_1.m42_1.toString(), rawRequest, fetchOptions, this.p51_1.z51_1, get_job(this.r51_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers, this.q51_1.n42_1, this.q51_1.r42_1);
            var version = Companion_getInstance_5().l2s_1;
            var body = readBody(CoroutineScope_0(this.r51_1), rawResponse);
            var tmp2_safe_receiver = this.q51_1.r42_1.z2c(get_ResponseAdapterAttributeKey());
            var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.m4t(this.q51_1, status, headers, body, this.q51_1.p42_1, this.r51_1);
            var responseBody = tmp3_elvis_lhs == null ? body : tmp3_elvis_lhs;
            return new HttpResponseData(status, this.s51_1, headers, version, responseBody, this.r51_1);
          case 5:
            return suspendResult;
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
  function $createWebSocketCOROUTINE$(_this__u8e3s4, urlString_capturingHack, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l50_1 = _this__u8e3s4;
    this.m50_1 = urlString_capturingHack;
    this.n50_1 = headers;
  }
  protoOf($createWebSocketCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            var tmp0 = this.n50_1.g2f();
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.t();
            while (_iterator__ex2g4s.u()) {
              var element = _iterator__ex2g4s.v();
              if (equals_0(element, 'Sec-WebSocket-Protocol', true)) {
                destination.b1(element);
              }
            }

            var protocolHeaderNames = destination;
            var tmp_0 = this;
            var destination_0 = ArrayList_init_$Create$();
            var _iterator__ex2g4s_0 = protocolHeaderNames.t();
            while (_iterator__ex2g4s_0.u()) {
              var element_0 = _iterator__ex2g4s_0.v();
              var tmp0_safe_receiver = this.n50_1.f2f(element_0);
              if (tmp0_safe_receiver == null)
                null;
              else {
                destination_0.b1(tmp0_safe_receiver);
              }
            }

            var this_0 = flatten(destination_0);
            tmp_0.p50_1 = copyToArray(this_0);
            if (PlatformUtils_getInstance().u2e_1) {
              this.o50_1 = new WebSocket(this.m50_1, this.p50_1);
              this.n8_1 = 2;
              continue $sm;
            } else {
              var ws_import = import('ws');
              this.n8_1 = 1;
              suspendResult = await_0(ws_import, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var ws_capturingHack = suspendResult.default;
            var headers_capturingHack = new JsClientEngine$createWebSocket$headers_capturingHack$1();
            this.n50_1.h2f(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
            this.o50_1 = new ws_capturingHack(this.m50_1, this.p50_1, {headers: headers_capturingHack});
            this.n8_1 = 2;
            continue $sm;
          case 2:
            return this.o50_1;
          case 3:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 3) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function $executeWebSocketRequestCOROUTINE$(_this__u8e3s4, request, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y50_1 = _this__u8e3s4;
    this.z50_1 = request;
    this.a51_1 = callContext;
  }
  protoOf($executeWebSocketRequestCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 5;
            this.c51_1 = GMTDate();
            this.f51_1 = this.z50_1.m42_1.toString();
            this.g51_1 = this.z50_1.r42_1.y2c(get_WEBSOCKETS_KEY());
            this.n8_1 = 1;
            suspendResult = createWebSocket(this.y50_1, this.f51_1, this.z50_1.o42_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.d51_1 = suspendResult;
            this.b51_1 = new JsWebSocketSession(this.a51_1, this.d51_1, this.g51_1.t4s_1);
            this.o8_1 = 3;
            this.n8_1 = 2;
            suspendResult = awaitConnection(this.d51_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.e51_1 = suspendResult;
            this.o8_1 = 5;
            this.n8_1 = 4;
            continue $sm;
          case 3:
            this.o8_1 = 5;
            var tmp_0 = this.q8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.q8_1;
              var tmp_1 = this;
              cancel_3(this.a51_1, CancellationException_0('Failed to connect to ' + this.f51_1, cause));
              throw cause;
            } else {
              throw this.q8_1;
            }

          case 4:
            this.o8_1 = 5;
            var this_0 = this.d51_1.protocol;
            var tmp_2;
            if (charSequenceLength(this_0) > 0) {
              tmp_2 = this_0;
            } else {
              tmp_2 = null;
            }

            var protocol = tmp_2;
            var headers = !(protocol == null) ? headersOf('Sec-WebSocket-Protocol', protocol) : Companion_getInstance_4().o2n_1;
            return new HttpResponseData(Companion_getInstance_1().t2s_1, this.c51_1, headers, Companion_getInstance_5().l2s_1, this.b51_1, this.a51_1);
          case 5:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 5) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.z51_1 = config;
    this.a52_1 = setOf_0([HttpTimeoutCapability_instance, WebSocketCapability_instance, SSECapability_instance]);
    // Inline function 'kotlin.check' call
    if (!(this.z51_1.z43_1 == null)) {
      var message = 'Proxy unsupported in Js engine.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(JsClientEngine).t3x = function () {
    return this.z51_1;
  };
  protoOf(JsClientEngine).t42 = function () {
    return this.a52_1;
  };
  protoOf(JsClientEngine).v43 = function (data, $completion) {
    var tmp = new $executeCOROUTINE$_1(this, data, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  function mapToKtor(_this__u8e3s4, method, attributes) {
    return buildHeaders(mapToKtor$lambda(_this__u8e3s4, method, attributes));
  }
  function awaitConnection(_this__u8e3s4, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.i1j();
    $l$block: {
      if (cancellable.f1f()) {
        break $l$block;
      }
      // Inline function 'io.ktor.client.utils.addEventListener' call
      var events = ['error'];
      var events_0 = listOf(arrayConcat([['open'], events]));
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
      cancellable.u1h(awaitConnection$lambda_1(disposable_0, _this__u8e3s4));
    }
    return cancellable.o1g();
  }
  function sam$kotlinx_coroutines_DisposableHandle$0(function_0) {
    this.b52_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).f1i = function () {
    return this.b52_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).k3 = function () {
    return this.b52_1;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DisposableHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.k3(), other.k3());
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
    return hashCode(this.k3());
  };
  function mapToKtor$lambda$lambda($this_buildHeaders) {
    return function (value, key) {
      $this_buildHeaders.n2f(key, value);
      return Unit_instance;
    };
  }
  function mapToKtor$lambda($this_mapToKtor, $method, $attributes) {
    return function ($this$buildHeaders) {
      // Inline function 'kotlin.js.asDynamic' call
      $this_mapToKtor.forEach(mapToKtor$lambda$lambda($this$buildHeaders));
      dropCompressionHeaders($this$buildHeaders, $method, $attributes, PlatformUtils_getInstance().u2e_1);
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
        $disposable.f1i();
      }
      var tmp0_subject = event.type;
      if (tmp0_subject === 'open') {
        var tmp0 = $continuation;
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var value = $this_awaitConnection;
        var tmp$ret$5 = _Result___init__impl__xyqfz8(value);
        tmp0.y8(tmp$ret$5);
      } else if (tmp0_subject === 'error') {
        var tmp0_0 = $continuation;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = WebSocketException_init_$Create$(asString(event));
        var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(exception));
        tmp0_0.y8(tmp$ret$7);
      }
      return Unit_instance;
    };
  }
  function awaitConnection$lambda_1($disposable, $this_awaitConnection) {
    return function (cause) {
      $disposable.f1i();
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
      return Companion_getInstance().w23_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer(_this__u8e3s4, VOID, VOID, channelFromStream$slambda_0(stream, null)).s23_1;
  }
  function readChunk(_this__u8e3s4, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    var tmp = _this__u8e3s4.read();
    var tmp_0 = tmp.then(readChunk$lambda(safe));
    tmp_0.catch(readChunk$lambda_0(safe));
    return safe.f9();
  }
  function channelFromStream$slambda$lambda(it) {
    return Unit_instance;
  }
  function channelFromStream$slambda($stream, resultContinuation) {
    this.k52_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(channelFromStream$slambda).r3t = function ($this$writer, $completion) {
    var tmp = this.s3t($this$writer, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(channelFromStream$slambda).j9 = function (p1, $completion) {
    return this.r3t(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(channelFromStream$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 9;
            this.n52_1 = this.k52_1.getReader();
            this.o8_1 = 7;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.n8_1 = 6;
              continue $sm;
            }

            this.n8_1 = 2;
            suspendResult = readChunk(this.n52_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_elvis_lhs = suspendResult;
            if (tmp0_elvis_lhs == null) {
              this.n8_1 = 6;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.o52_1 = tmp0_elvis_lhs;
              this.n8_1 = 3;
              continue $sm;
            }

          case 3:
            var chunk = this.o52_1;
            this.n8_1 = 4;
            suspendResult = writeFully_0(this.l52_1.o29_1, asByteArray(chunk), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.n8_1 = 5;
            suspendResult = this.l52_1.o29_1.q21(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.n8_1 = 1;
            continue $sm;
          case 6:
            this.o8_1 = 9;
            this.n8_1 = 10;
            continue $sm;
          case 7:
            this.o8_1 = 9;
            var tmp_1 = this.q8_1;
            if (tmp_1 instanceof Error) {
              this.m52_1 = this.q8_1;
              this.n8_1 = 8;
              var tmp_2 = this.n52_1.cancel(this.m52_1);
              suspendResult = await_0(tmp_2.catch(channelFromStream$slambda$lambda), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.q8_1;
            }

          case 8:
            throw this.m52_1;
          case 9:
            throw this.q8_1;
          case 10:
            this.o8_1 = 9;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 9) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(channelFromStream$slambda).s3t = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.k52_1, completion);
    i.l52_1 = $this$writer;
    return i;
  };
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.r3t($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function readChunk$lambda($continuation) {
    return function (it) {
      var chunk = it.value;
      var result = it.done ? null : chunk;
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(result);
      this_0.y8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function readChunk$lambda_0($continuation) {
    return function (cause) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
      this_0.y8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function commonFetch(input, init, requestConfig, config, callJob, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.i1j();
    var controller = AbortController_0();
    init.signal = controller.signal;
    config.z4z_1(init);
    requestConfig(init);
    callJob.n1f(true, VOID, commonFetch$lambda(controller));
    var tmp;
    if (PlatformUtils_getInstance().u2e_1) {
      tmp = fetch(input, init);
    } else {
      var options = Object.assign(Object.create(null), init, config.a50_1);
      tmp = fetch(input, options);
    }
    var promise = tmp;
    var tmp_0 = commonFetch$lambda_0(cancellable);
    promise.then(tmp_0, commonFetch$lambda_1(cancellable));
    return cancellable.o1g();
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
      this_0.y8(tmp$ret$1);
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
      tmp0.y8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function isReservedStatusCode($this, $receiver) {
    // Inline function 'kotlin.let' call
    var resolved = Companion_getInstance_6().s3g($receiver);
    return resolved == null || equals(resolved, Codes_CLOSED_ABNORMALLY_getInstance());
  }
  function sam$kotlinx_coroutines_DisposableHandle$0_0(function_0) {
    this.p52_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).f1i = function () {
    return this.p52_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).k3 = function () {
    return this.p52_1;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DisposableHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.k3(), other.k3());
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
    return hashCode(this.k3());
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
          this$0.s52_1.k1l(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0.t52_1.n1v(frame);
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
      this$0.s52_1.k1l(cause);
      this$0.t52_1.r1v(cause);
      this$0.u52_1.v1v();
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
      this$0.s52_1.j1l(reason);
      this$0.t52_1.n1v(Close_init_$Create$(reason));
      this$0.t52_1.t1v();
      this$0.u52_1.v1v();
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
        this$0.r52_1.close();
      } else {
        this$0.r52_1.close(Codes_NORMAL_getInstance().p3g_1, 'Client failed');
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
        if (tmp0.r52_1.readyState === WebSocket.OPEN) {
          if (cause == null) {
            this$0.r52_1.close();
          } else {
            this$0.r52_1.close(Codes_NORMAL_getInstance().p3g_1, 'Client failed');
          }
          break $l$block;
        }
        // Inline function 'io.ktor.client.utils.addEventListener' call
        var this_0 = tmp0.r52_1;
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
      $onMessage.f1i();
      $onError.f1i();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$slambda(this$0, resultContinuation) {
    this.g53_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsWebSocketSession$slambda).u2a = function ($this$launch, $completion) {
    var tmp = this.v2a($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(JsWebSocketSession$slambda).j9 = function (p1, $completion) {
    return this.u2a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JsWebSocketSession$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 10;
            this.l53_1 = this.g53_1.u52_1;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.j53_1 = this.l53_1;
            this.i53_1 = null;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            this.n8_1 = 3;
            continue $sm;
          case 3:
            this.o8_1 = 9;
            this.o8_1 = 8;
            this.k53_1 = this.j53_1.t();
            this.n8_1 = 4;
            continue $sm;
          case 4:
            this.n8_1 = 5;
            suspendResult = this.k53_1.p1t(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.n8_1 = 6;
              continue $sm;
            }

            var e = this.k53_1.v();
            switch (e.r3k_1.a1_1) {
              case 0:
                var text = e.s3k_1;
                this.g53_1.r52_1.send(decodeToString(text, 0, 0 + text.length | 0));
                break;
              case 1:
                var tmp_0 = e.s3k_1;
                var source = tmp_0 instanceof Int8Array ? tmp_0 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.g53_1.r52_1.send(frameData);
                break;
              case 2:
                var builder = new Buffer();
                writeFully(builder, e.s3k_1);
                var data = builder;
                var code = data.l1b();
                var reason = readText(data);
                this.g53_1.s52_1.j1l(new CloseReason(code, reason));
                if (isReservedStatusCode(this.g53_1, code)) {
                  this.g53_1.r52_1.close();
                } else {
                  this.g53_1.r52_1.close(code, reason);
                }

                break;
              case 3:
              case 4:
                break;
              default:
                noWhenBranchMatchedException();
                break;
            }

            this.n8_1 = 4;
            continue $sm;
          case 6:
            this.o8_1 = 10;
            this.n8_1 = 7;
            var tmp_1 = this;
            continue $sm;
          case 7:
            this.o8_1 = 10;
            cancelConsumed(this.j53_1, this.i53_1);
            this.n8_1 = 12;
            continue $sm;
          case 8:
            this.o8_1 = 9;
            var tmp_2 = this.q8_1;
            if (tmp_2 instanceof Error) {
              var e_0 = this.q8_1;
              var tmp_3 = this;
              this.i53_1 = e_0;
              throw e_0;
            } else {
              throw this.q8_1;
            }

          case 9:
            this.o8_1 = 10;
            var t = this.q8_1;
            cancelConsumed(this.j53_1, this.i53_1);
            throw t;
          case 10:
            throw this.q8_1;
          case 11:
            this.o8_1 = 10;
            cancelConsumed(this.j53_1, this.i53_1);
            if (false) {
              this.n8_1 = 1;
              continue $sm;
            }

            this.n8_1 = 12;
            continue $sm;
          case 12:
            return Unit_instance;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.o8_1 === 10) {
          throw e_1;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(JsWebSocketSession$slambda).v2a = function ($this$launch, completion) {
    var i = new JsWebSocketSession$slambda(this.g53_1, completion);
    i.h53_1 = $this$launch;
    return i;
  };
  function JsWebSocketSession$slambda_0(this$0, resultContinuation) {
    var i = new JsWebSocketSession$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.u2a($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JsWebSocketSession(coroutineContext, websocket, channelsConfig) {
    this.q52_1 = coroutineContext;
    this.r52_1 = websocket;
    this.s52_1 = CompletableDeferred();
    this.t52_1 = from(Factory_getInstance(), channelsConfig.d3h_1);
    this.u52_1 = from(Factory_getInstance(), channelsConfig.e3h_1);
    this.v52_1 = this.t52_1;
    this.w52_1 = this.u52_1;
    this.x52_1 = this.s52_1;
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_0 = this.r52_1;
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
    var this_1 = this.r52_1;
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
    var this_2 = this.r52_1;
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
    var tmp0_safe_receiver = this.q52_1.a9(Key_instance);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1f(JsWebSocketSession$lambda_5(this, onMessage, onError));
    }
    // Inline function 'org.w3c.dom.ARRAYBUFFER' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9 = 'arraybuffer';
    this.r52_1.binaryType = tmp$ret$9;
    launch(this, VOID, VOID, JsWebSocketSession$slambda_0(this, null));
    // Inline function 'kotlin.require' call
    if (!!channelsConfig.d3h_1.j3o()) {
      var message = 'Suspendable channels are not supported in JS.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(JsWebSocketSession).j1e = function () {
    return this.q52_1;
  };
  protoOf(JsWebSocketSession).z3g = function () {
    return this.v52_1;
  };
  protoOf(JsWebSocketSession).a3h = function () {
    return this.w52_1;
  };
  protoOf(JsWebSocketSession).x3g = function (_) {
    throw WebSocketException_init_$Create$('Max frame size switch is not supported in Js engine.');
  };
  protoOf(JsWebSocketSession).y3g = function () {
    return new Long(-1, 2147483647);
  };
  protoOf(JsWebSocketSession).w3g = function (negotiatedExtensions) {
    // Inline function 'kotlin.require' call
    if (!negotiatedExtensions.r()) {
      var message = 'Extensions are not supported.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(JsWebSocketSession).q21 = function ($completion) {
    return Unit_instance;
  };
  function ktor_toRaw(_this__u8e3s4, clientConfig, callContext, $completion) {
    var tmp = new $toRawCOROUTINE$(_this__u8e3s4, clientConfig, callContext, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
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
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
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
      $this$buildObject.method = $this_toRaw.n42_1.i2s_1;
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.e3y_1) {
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
    this.r54_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getBodyBytes$slambda).r3t = function ($this$writer, $completion) {
    var tmp = this.s3t($this$writer, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(getBodyBytes$slambda).j9 = function (p1, $completion) {
    return this.r3t(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(getBodyBytes$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.r54_1.o2z(this.s54_1.o29_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(getBodyBytes$slambda).s3t = function ($this$writer, completion) {
    var i = new getBodyBytes$slambda(this.r54_1, completion);
    i.s54_1 = $this$writer;
    return i;
  };
  function getBodyBytes$slambda_0($content, resultContinuation) {
    var i = new getBodyBytes$slambda($content, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.r3t($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $toRawCOROUTINE$(_this__u8e3s4, clientConfig, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u53_1 = _this__u8e3s4;
    this.v53_1 = clientConfig;
    this.w53_1 = callContext;
  }
  protoOf($toRawCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.x53_1 = {};
            var this_0 = this.u53_1;
            var skipContentLengthHeader = !get_supportsRequestBody(this_0.n42_1) && isEmpty(this_0.p42_1);
            mergeHeaders(this_0.o42_1, this_0.p42_1, toRaw$lambda(skipContentLengthHeader, this.x53_1));
            this.n8_1 = 1;
            suspendResult = getBodyBytes(this.u53_1.p42_1, this.w53_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return buildObject(toRaw$lambda_0(this.u53_1, this.x53_1, this.v53_1, bodyBytes));
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function $getBodyBytesCOROUTINE$(content, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g54_1 = content;
    this.h54_1 = callContext;
  }
  protoOf($getBodyBytesCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            var tmp0_subject = this.g54_1;
            if (tmp0_subject instanceof ByteArrayContent) {
              this.i54_1 = this.g54_1.o2x();
              this.n8_1 = 5;
              continue $sm;
            } else {
              if (tmp0_subject instanceof ReadChannelContent) {
                this.n8_1 = 3;
                suspendResult = readRemaining(this.g54_1.m2z(), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (tmp0_subject instanceof WriteChannelContent) {
                  this.n8_1 = 2;
                  var tmp_0 = GlobalScope_instance;
                  suspendResult = readRemaining(writer(tmp_0, this.h54_1, VOID, getBodyBytes$slambda_0(this.g54_1, null)).s23_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject instanceof ContentWrapper) {
                    this.n8_1 = 1;
                    suspendResult = getBodyBytes(this.g54_1.s2z(), this.h54_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp0_subject instanceof NoContent) {
                      this.i54_1 = null;
                      this.n8_1 = 5;
                      continue $sm;
                    } else {
                      if (tmp0_subject instanceof ProtocolUpgrade) {
                        var tmp_1 = this;
                        throw new UnsupportedContentTypeException(this.g54_1);
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
            this.i54_1 = suspendResult;
            this.n8_1 = 5;
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.i54_1 = readByteArray(ARGUMENT);
            this.n8_1 = 5;
            continue $sm;
          case 3:
            var ARGUMENT_0 = suspendResult;
            this.i54_1 = readByteArray(ARGUMENT_0);
            this.n8_1 = 5;
            continue $sm;
          case 4:
            throw this.q8_1;
          case 5:
            return this.i54_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 4) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function Node(item, next) {
    this.t54_1 = item;
    this.u54_1 = next;
  }
  function engines$iterator$1() {
    this.v54_1 = engines_getInstance().b50_1.kotlinx$atomicfu$value;
  }
  protoOf(engines$iterator$1).v = function () {
    var result = ensureNotNull(this.v54_1);
    this.v54_1 = result.u54_1;
    return result.t54_1;
  };
  protoOf(engines$iterator$1).u = function () {
    return !(null == this.v54_1);
  };
  function engines() {
    engines_instance = this;
    this.b50_1 = atomic$ref$1(null);
  }
  protoOf(engines).c50 = function (item) {
    $l$loop: while (true) {
      var current = this.b50_1.kotlinx$atomicfu$value;
      var new_0 = new Node(item, current);
      if (this.b50_1.atomicfu$compareAndSet(current, new_0))
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
  function ConnectTimeoutException() {
  }
  function SocketTimeoutException() {
  }
  function InterruptedIOException() {
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
  function ProxyBuilder() {
  }
  protoOf(ProxyBuilder).w54 = function (url) {
    // Inline function 'kotlin.error' call
    var message = 'Proxy unsupported in js client engine.';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  var ProxyBuilder_instance;
  function ProxyBuilder_getInstance() {
    return ProxyBuilder_instance;
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers(_this__u8e3s4) {
  }
  //region block: post-declaration
  defineProp(protoOf(DoubleReceiveException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(NoTransformationFoundException), 'message', function () {
    return this.e();
  });
  protoOf(HttpClientEngineBase).t42 = get_supportedCapabilities;
  protoOf(HttpClientEngineBase).u3x = install;
  defineProp(protoOf(ClientEngineClosedException), 'cause', function () {
    return this.f();
  });
  protoOf(KtorCallContextElement).a9 = get;
  protoOf(KtorCallContextElement).zg = fold;
  protoOf(KtorCallContextElement).yg = minusKey;
  protoOf(KtorCallContextElement).ah = plus;
  defineProp(protoOf(RedirectResponseException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(ClientRequestException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(ServerResponseException), 'message', function () {
    return this.e();
  });
  protoOf(HttpRequest$1).j1e = get_coroutineContext;
  protoOf(JsWebSocketSession).b3h = send;
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
  useEngineDispatcher = true;
  ProxyBuilder_instance = new ProxyBuilder();
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
