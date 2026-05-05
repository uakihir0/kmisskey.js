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
  var ensureNotNull = kotlin_kotlin.$_$.pg;
  var protoOf = kotlin_kotlin.$_$.yb;
  var objectCreate = kotlin_kotlin.$_$.xb;
  var CancellationException = kotlin_kotlin.$_$.n8;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var CoroutineImpl = kotlin_kotlin.$_$.f9;
  var THROW_CCE = kotlin_kotlin.$_$.yf;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.j;
  var toString = kotlin_kotlin.$_$.bc;
  var getKClassFromExpression = kotlin_kotlin.$_$.qc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.o8;
  var initMetadataForLambda = kotlin_kotlin.$_$.db;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ab;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var AttributesJsFn = kotlin_io_ktor_ktor_utils.$_$.p;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.o;
  var AutoCloseable = kotlin_kotlin.$_$.hf;
  var isInterface = kotlin_kotlin.$_$.nb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var initMetadataForClass = kotlin_kotlin.$_$.ya;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q1;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.a;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.k1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.o;
  var arrayOf = kotlin_kotlin.$_$.lg;
  var createKType = kotlin_kotlin.$_$.pc;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.m;
  var initMetadataForCompanion = kotlin_kotlin.$_$.za;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.n;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.sa;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.i9;
  var IllegalStateException = kotlin_kotlin.$_$.sf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.n2;
  var captureStack = kotlin_kotlin.$_$.ja;
  var defineProp = kotlin_kotlin.$_$.ra;
  var UnsupportedOperationException = kotlin_kotlin.$_$.jg;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.b3;
  var trimIndent = kotlin_kotlin.$_$.af;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.q1;
  var fromInt = kotlin_kotlin.$_$.t9;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.j1;
  var readRemaining = kotlin_io_ktor_ktor_io.$_$.i;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.o2;
  var initMetadataForInterface = kotlin_kotlin.$_$.cb;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wg;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var writer = kotlin_io_ktor_ktor_io.$_$.t1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.w;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.v;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.b;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.t;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.u;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.r;
  var ContentWrapper = kotlin_io_ktor_ktor_http.$_$.s;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.m1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.x;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var emptySet = kotlin_kotlin.$_$.q6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h1;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.j1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.v1;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var getKClass = kotlin_kotlin.$_$.rc;
  var getStarKTypeProjection = kotlin_kotlin.$_$.sc;
  var ioDispatcher = kotlin_io_ktor_ktor_io.$_$.r1;
  var SilentSupervisor = kotlin_io_ktor_ktor_utils.$_$.r;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var lazy = kotlin_kotlin.$_$.vg;
  var KProperty1 = kotlin_kotlin.$_$.wc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.va;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var KtMutableMap = kotlin_kotlin.$_$.o5;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.nc;
  var setOf = kotlin_kotlin.$_$.u7;
  var get = kotlin_kotlin.$_$.b9;
  var fold = kotlin_kotlin.$_$.a9;
  var minusKey = kotlin_kotlin.$_$.c9;
  var plus = kotlin_kotlin.$_$.e9;
  var Element = kotlin_kotlin.$_$.d9;
  var joinToString = kotlin_kotlin.$_$.b7;
  var setOf_0 = kotlin_kotlin.$_$.v7;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.k;
  var isSuspendFunction = kotlin_kotlin.$_$.qb;
  var initMetadataForObject = kotlin_kotlin.$_$.eb;
  var MalformedInputException = kotlin_io_ktor_ktor_io.$_$.p;
  var Unit = kotlin_kotlin.$_$.ig;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.h;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var toLong = kotlin_kotlin.$_$.te;
  var contentType = kotlin_io_ktor_ktor_http.$_$.r1;
  var isByteArray = kotlin_kotlin.$_$.hb;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.c1;
  var Long = kotlin_kotlin.$_$.tf;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.d;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.c;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var CIOMultipartDataBase = kotlin_io_ktor_ktor_http_cio.$_$.a;
  var MultiPartData = kotlin_io_ktor_ktor_http.$_$.p;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.n1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.f1;
  var invokeOnCompletion = kotlin_io_ktor_ktor_io.$_$.q1;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.l;
  var Source = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.h;
  var readText = kotlin_io_ktor_ktor_io.$_$.s1;
  var toInt = kotlin_kotlin.$_$.qe;
  var reversed = kotlin_kotlin.$_$.t7;
  var Attributes = kotlin_io_ktor_ktor_utils.$_$.q;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.s1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.a;
  var toList = kotlin_kotlin.$_$.c8;
  var sortedWith = kotlin_kotlin.$_$.x7;
  var Collection = kotlin_kotlin.$_$.d5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.b2;
  var charSequenceLength = kotlin_kotlin.$_$.oa;
  var get_name = kotlin_io_ktor_ktor_io.$_$.t;
  var roundToInt = kotlin_kotlin.$_$.dc;
  var firstOrNull = kotlin_kotlin.$_$.u6;
  var FunctionAdapter = kotlin_kotlin.$_$.fa;
  var Comparator = kotlin_kotlin.$_$.lf;
  var hashCode = kotlin_kotlin.$_$.xa;
  var compareValues = kotlin_kotlin.$_$.m8;
  var charset = kotlin_io_ktor_ktor_http.$_$.p1;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.f2;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.o1;
  var readText_0 = kotlin_io_ktor_ktor_io.$_$.y;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.l;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.n1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.e2;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.z1;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.m1;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.j;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.bb;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var Default_getInstance = kotlin_kotlin.$_$.n;
  var equalsLong = kotlin_kotlin.$_$.s9;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var toLongOrNull = kotlin_kotlin.$_$.se;
  var multiply = kotlin_kotlin.$_$.y9;
  var compare = kotlin_kotlin.$_$.n9;
  var toNumber = kotlin_kotlin.$_$.ea;
  var numberToLong = kotlin_kotlin.$_$.aa;
  var add = kotlin_kotlin.$_$.k9;
  var Companion_instance = kotlin_kotlin.$_$.u;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m3;
  var createFailure = kotlin_kotlin.$_$.og;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.n3;
  var toString_0 = kotlin_kotlin.$_$.zg;
  var trimMargin = kotlin_kotlin.$_$.bf;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var isWebsocket = kotlin_io_ktor_ktor_http.$_$.a2;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var get_isTraceEnabled = kotlin_io_ktor_ktor_utils.$_$.i;
  var KProperty0 = kotlin_kotlin.$_$.vc;
  var createKTypeParameter = kotlin_kotlin.$_$.oc;
  var NullBody = kotlin_io_ktor_ktor_http.$_$.q;
  var WebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.o;
  var DefaultWebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.k;
  var generateNonce = kotlin_io_ktor_ktor_utils.$_$.z;
  var Default_getInstance_0 = kotlin_kotlin.$_$.f;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.e1;
  var emptyList = kotlin_kotlin.$_$.o6;
  var addAll = kotlin_kotlin.$_$.r5;
  var parseWebSocketExtensions = kotlin_io_ktor_ktor_websockets.$_$.q;
  var WebSocketExtensionsConfig = kotlin_io_ktor_ktor_websockets.$_$.m;
  var WebSocketChannelsConfig = kotlin_io_ktor_ktor_websockets.$_$.l;
  var Companion_getInstance_3 = kotlin_io_ktor_ktor_websockets.$_$.b;
  var DefaultWebSocketSession_0 = kotlin_io_ktor_ktor_websockets.$_$.j;
  var IllegalStateException_init_$Init$_1 = kotlin_kotlin.$_$.q2;
  var KtList = kotlin_kotlin.$_$.i5;
  var WebSocketExtension = kotlin_io_ktor_ktor_websockets.$_$.n;
  var ByteChannel = kotlin_io_ktor_ktor_io.$_$.i1;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.i1;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.d2;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.y;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.c1;
  var GMTDate = kotlin_io_ktor_ktor_utils.$_$.d;
  var set = kotlin_io_ktor_ktor_http.$_$.b2;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.l;
  var formUrlEncode = kotlin_io_ktor_ktor_http.$_$.w1;
  var toByteArray_0 = kotlin_io_ktor_ktor_io.$_$.c1;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.d1;
  var writeFully_0 = kotlin_io_ktor_ktor_io.$_$.m;
  var copyTo_0 = kotlin_io_ktor_ktor_io.$_$.e;
  var closeFinally = kotlin_kotlin.$_$.mg;
  var close = kotlin_io_ktor_ktor_io.$_$.o1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g1;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.u;
  var writeText = kotlin_io_ktor_ktor_io.$_$.e1;
  var build = kotlin_io_ktor_ktor_io.$_$.w;
  var BinaryChannelItem = kotlin_io_ktor_ktor_http.$_$.y;
  var FormItem = kotlin_io_ktor_ktor_http.$_$.b1;
  var BinaryItem = kotlin_io_ktor_ktor_http.$_$.z;
  var FileItem = kotlin_io_ktor_ktor_http.$_$.a1;
  var toString_1 = kotlin_kotlin.$_$.ue;
  var take = kotlin_kotlin.$_$.je;
  var writePacket = kotlin_io_ktor_ktor_io.$_$.n;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_http.$_$.h;
  var escapeIfNeeded = kotlin_io_ktor_ktor_http.$_$.v1;
  var get_remaining = kotlin_io_ktor_ktor_io.$_$.z;
  var isNumber = kotlin_kotlin.$_$.ob;
  var getStringHashCode = kotlin_kotlin.$_$.wa;
  var ByteReadPacket = kotlin_io_ktor_ktor_io.$_$.v;
  var decode = kotlin_io_ktor_ktor_io.$_$.q;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.f1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.f;
  var KtMutableList = kotlin_kotlin.$_$.m5;
  var Companion_getInstance_5 = kotlin_io_ktor_ktor_http.$_$.k;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var equals_0 = kotlin_kotlin.$_$.jd;
  var flatten = kotlin_kotlin.$_$.w6;
  var copyToArray = kotlin_kotlin.$_$.l6;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var CancellationException_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var headersOf = kotlin_io_ktor_ktor_http.$_$.y1;
  var intercepted = kotlin_kotlin.$_$.r8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var listOf = kotlin_kotlin.$_$.j7;
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
  var decodeToString = kotlin_kotlin.$_$.fd;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var from = kotlin_io_ktor_ktor_websockets.$_$.p;
  var send = kotlin_io_ktor_ktor_websockets.$_$.e;
  var toTypedArray = kotlin_kotlin.$_$.k8;
  var get_supportsRequestBody = kotlin_io_ktor_ktor_http.$_$.c2;
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
    return this.n3x().j1e();
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
    var tmp = Phases_getInstance_0().i3w_1;
    client.u3t_1.x2i(tmp, HttpClientEngine$install$slambda_0(client, this, null));
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
  initMetadataForClass(HttpStatement, 'HttpStatement', VOID, VOID, VOID, [1, 0]);
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
    $this.o3t_1 = manageEngine;
    if ($this.o3t_1) {
      if (engine instanceof HttpClientEngineBase) {
        engine.c3u_1.atomicfu$incrementAndGet();
      }
      var tmp = ensureNotNull($this.r3t_1.a9(Key_instance));
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
        tmp = $engine.c3u_1.atomicfu$decrementAndGet() <= 0;
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
    this.n3u_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda).q3u = function ($this$intercept, call, $completion) {
    var tmp = this.r3u($this$intercept, call, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpClient$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3u(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            var tmp_0 = this.p3u_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.p3u_1) + '(' + toString(getKClassFromExpression(this.p3u_1)) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.n8_1 = 1;
            suspendResult = this.n3u_1.v3t_1.s2i(Unit_instance, this.p3u_1.x3u(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            this.p3u_1.y3u(response);
            this.n8_1 = 2;
            suspendResult = this.o3u_1.x2h(this.p3u_1, this);
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
  protoOf(HttpClient$slambda).r3u = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.n3u_1, completion);
    i.o3u_1 = $this$intercept;
    i.p3u_1 = call;
    return i;
  };
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    var l = function ($this$intercept, call, $completion) {
      return i.q3u($this$intercept, call, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClient$lambda($this$install) {
    defaultTransformers($this$install);
    return Unit_instance;
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.h3v_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda_1).l3v = function ($this$intercept, it, $completion) {
    var tmp = this.m3v($this$intercept, it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpClient$slambda_1).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3v(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
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
            suspendResult = this.i3v_1.y2h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k3v_1 = suspendResult;
            this.o8_1 = 3;
            this.n8_1 = 4;
            continue $sm;
          case 2:
            this.o8_1 = 3;
            var tmp_0 = this.q8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.q8_1;
              var tmp_1 = this;
              this.h3v_1.y3t_1.u3e(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.i3v_1.t2i_1.x3u(), cause));
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
  protoOf(HttpClient$slambda_1).m3v = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.h3v_1, completion);
    i.i3v_1 = $this$intercept;
    i.j3v_1 = it;
    return i;
  };
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.l3v($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v3v_1 = _this__u8e3s4;
    this.w3v_1 = builder;
  }
  protoOf($executeCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.v3v_1.y3t_1.u3e(get_HttpRequestCreated(), this.w3v_1);
            this.n8_1 = 1;
            suspendResult = this.v3v_1.s3t_1.s2i(this.w3v_1, this.w3v_1.a3w_1, this);
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
    this.m3t_1 = engine;
    this.n3t_1 = userConfig;
    this.o3t_1 = false;
    this.p3t_1 = atomic$boolean$1(false);
    this.q3t_1 = Job(this.m3t_1.j1e().a9(Key_instance));
    this.r3t_1 = this.m3t_1.j1e().ah(this.q3t_1);
    this.s3t_1 = new HttpRequestPipeline();
    this.t3t_1 = new HttpResponsePipeline();
    this.u3t_1 = new HttpSendPipeline();
    this.v3t_1 = new HttpReceivePipeline();
    this.w3t_1 = AttributesJsFn(true);
    this.x3t_1 = this.m3t_1.d3w();
    this.y3t_1 = new Events();
    this.z3t_1 = new HttpClientConfig();
    this.m3t_1.e3w(this);
    var tmp = Phases_getInstance_0().j3w_1;
    this.u3t_1.x2i(tmp, HttpClient$slambda_0(this, null));
    // Inline function 'kotlin.with' call
    var $this$with = this.n3t_1;
    this.z3t_1.s3w(get_HttpRequestLifecycle());
    this.z3t_1.s3w(get_BodyProgress());
    this.z3t_1.s3w(get_SaveBody());
    if ($this$with.p3w_1) {
      this.z3t_1.t3w('DefaultTransformers', HttpClient$lambda);
    }
    this.z3t_1.s3w(Plugin_getInstance());
    this.z3t_1.s3w(get_HttpCallValidator());
    if ($this$with.o3w_1) {
      this.z3t_1.s3w(get_HttpRedirect());
    }
    this.z3t_1.u3w($this$with);
    if ($this$with.p3w_1) {
      this.z3t_1.s3w(get_HttpPlainText());
    }
    addDefaultResponseValidation(this.z3t_1);
    this.z3t_1.e3w(this);
    var tmp_0 = Phases_getInstance_2().v3w_1;
    this.t3t_1.x2i(tmp_0, HttpClient$slambda_2(this, null));
  }
  protoOf(HttpClient).j1e = function () {
    return this.r3t_1;
  };
  protoOf(HttpClient).a3x = function (builder, $completion) {
    var tmp = new $executeCOROUTINE$(this, builder, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpClient).h4 = function () {
    var success = this.p3t_1.atomicfu$compareAndSet(false, true);
    if (!success)
      return Unit_instance;
    var installedFeatures = this.w3t_1.y2c(get_PLUGIN_INSTALLED_LIST());
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = installedFeatures.f2d().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var plugin = installedFeatures.y2c(element instanceof AttributeKey ? element : THROW_CCE());
      if (isInterface(plugin, AutoCloseable)) {
        plugin.h4();
      }
    }
    this.q3t_1.l1l();
  };
  protoOf(HttpClient).toString = function () {
    return 'HttpClient[' + toString(this.m3t_1) + ']';
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
    var engine = engineFactory.b3x(config.n3w_1);
    return HttpClient_init_$Create$(engine, config, true);
  }
  function HttpClient$lambda_0(_this__u8e3s4) {
    return Unit_instance;
  }
  function installPlugin($this, plugin) {
    if ($this.k3w_1.q2(plugin.m1()))
      return Unit_instance;
    var tmp0 = $this.k3w_1;
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
      var attributes = scope.w3t_1.e2d(tmp, HttpClientConfig$installPlugin$lambda$lambda);
      var config = ensureNotNull(scope.z3t_1.l3w_1.s2($plugin.m1()));
      var pluginData = $plugin.c3x(config);
      $plugin.d3x(pluginData, scope);
      attributes.b2d($plugin.m1(), pluginData);
      return Unit_instance;
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.k3w_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.l3w_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.m3w_1 = LinkedHashMap_init_$Create$();
    var tmp_2 = this;
    tmp_2.n3w_1 = HttpClientConfig$engineConfig$lambda;
    this.o3w_1 = true;
    this.p3w_1 = true;
    this.q3w_1 = false;
    this.r3w_1 = PlatformUtils_getInstance().a2f_1;
  }
  protoOf(HttpClientConfig).e3x = function (block) {
    var oldConfig = this.n3w_1;
    var tmp = this;
    tmp.n3w_1 = HttpClientConfig$engine$lambda(oldConfig, block);
  };
  protoOf(HttpClientConfig).f3x = function (plugin, configure) {
    var previousConfigBlock = this.l3w_1.s2(plugin.m1());
    var tmp0 = this.l3w_1;
    var tmp2 = plugin.m1();
    // Inline function 'kotlin.collections.set' call
    var value = HttpClientConfig$install$lambda_0(previousConfigBlock, configure);
    tmp0.v2(tmp2, value);
    installPlugin(this, plugin);
  };
  protoOf(HttpClientConfig).s3w = function (plugin, configure, $super) {
    var tmp;
    if (configure === VOID) {
      tmp = HttpClientConfig$install$lambda;
    } else {
      tmp = configure;
    }
    configure = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.f3x(plugin, configure);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.f3x.call(this, plugin, configure);
    }
    return tmp_0;
  };
  protoOf(HttpClientConfig).t3w = function (key, block) {
    // Inline function 'kotlin.collections.set' call
    this.m3w_1.v2(key, block);
  };
  protoOf(HttpClientConfig).e3w = function (client) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.k3w_1.u2().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.apply' call
      element(client);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.m3w_1.u2().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.apply' call
      element_0(client);
    }
  };
  protoOf(HttpClientConfig).u3w = function (other) {
    this.o3w_1 = other.o3w_1;
    this.p3w_1 = other.p3w_1;
    this.q3w_1 = other.q3w_1;
    var tmp0 = this.k3w_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map = other.k3w_1;
    tmp0.x2(map);
    var tmp0_0 = this.l3w_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map_0 = other.l3w_1;
    tmp0_0.x2(map_0);
    var tmp0_1 = this.m3w_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map_1 = other.m3w_1;
    tmp0_1.x2(map_1);
  };
  function replaceResponse(_this__u8e3s4, headers, content) {
    headers = headers === VOID ? _this__u8e3s4.x3u().j2r() : headers;
    return new DelegatedCall(_this__u8e3s4.s3u_1, _this__u8e3s4, content, headers);
  }
  function DelegatedCall(client, originCall, responseContent, responseHeaders) {
    responseHeaders = responseHeaders === VOID ? originCall.x3u().j2r() : responseHeaders;
    HttpClientCall.call(this, client);
    this.u3u_1 = new DelegatedRequest(this, originCall.g3x());
    this.v3u_1 = new DelegatedResponse(this, originCall.x3u(), responseContent, responseHeaders);
  }
  function DelegatedRequest(call, origin) {
    this.l3x_1 = origin;
    this.m3x_1 = call;
  }
  protoOf(DelegatedRequest).n3x = function () {
    return this.m3x_1;
  };
  protoOf(DelegatedRequest).j1e = function () {
    return this.l3x_1.j1e();
  };
  protoOf(DelegatedRequest).o3x = function () {
    return this.l3x_1.o3x();
  };
  protoOf(DelegatedRequest).p3x = function () {
    return this.l3x_1.p3x();
  };
  protoOf(DelegatedRequest).h3x = function () {
    return this.l3x_1.h3x();
  };
  protoOf(DelegatedRequest).f31 = function () {
    return this.l3x_1.f31();
  };
  protoOf(DelegatedRequest).j2r = function () {
    return this.l3x_1.j2r();
  };
  function DelegatedResponse(call, origin, content, headers) {
    headers = headers === VOID ? origin.j2r() : headers;
    HttpResponse.call(this);
    this.q3x_1 = call;
    this.r3x_1 = origin;
    this.s3x_1 = content;
    this.t3x_1 = headers;
    this.u3x_1 = this.r3x_1.j1e();
  }
  protoOf(DelegatedResponse).n3x = function () {
    return this.q3x_1;
  };
  protoOf(DelegatedResponse).j2r = function () {
    return this.t3x_1;
  };
  protoOf(DelegatedResponse).v3x = function () {
    return this.s3x_1(this.r3x_1);
  };
  protoOf(DelegatedResponse).j1e = function () {
    return this.u3x_1;
  };
  protoOf(DelegatedResponse).w3x = function () {
    return this.r3x_1.w3x();
  };
  protoOf(DelegatedResponse).x3x = function () {
    return this.r3x_1.x3x();
  };
  protoOf(DelegatedResponse).y3x = function () {
    return this.r3x_1.y3x();
  };
  protoOf(DelegatedResponse).z3x = function () {
    return this.r3x_1.z3x();
  };
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.u3u_1 = new DefaultHttpRequest($this, requestData);
    $this.v3u_1 = new DefaultHttpResponse($this, responseData);
    $this.h3x().d2d(Companion_getInstance_7().a3y_1);
    var tmp = responseData.f3y_1;
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.h3x().b2d(Companion_getInstance_7().a3y_1, responseData.f3y_1);
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
    tmp.a3y_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_0;
  function Companion_getInstance_7() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function $bodyNullableCOROUTINE$(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q3y_1 = _this__u8e3s4;
    this.r3y_1 = info;
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
            if (instanceOf(this.q3y_1.x3u(), this.r3y_1.k2j_1))
              return this.q3y_1.x3u();
            if (!this.q3y_1.i3x() && !get_isSaved(this.q3y_1.x3u()) && !this.q3y_1.t3u_1.atomicfu$compareAndSet(false, true)) {
              throw new DoubleReceiveException(this.q3y_1);
            }

            var tmp0_elvis_lhs = this.q3y_1.h3x().z2c(Companion_getInstance_7().a3y_1);
            if (tmp0_elvis_lhs == null) {
              this.n8_1 = 1;
              suspendResult = this.q3y_1.j3x(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s3y_1 = tmp0_elvis_lhs;
              this.n8_1 = 2;
              continue $sm;
            }

          case 1:
            this.s3y_1 = suspendResult;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            var responseData = this.s3y_1;
            var subject = new HttpResponseContainer(this.r3y_1, responseData);
            this.n8_1 = 3;
            suspendResult = this.q3y_1.s3u_1.t3t_1.s2i(this.q3y_1, subject, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var this_0 = suspendResult.u3y_1;
            var tmp_0;
            if (!equals(this_0, NullBody_instance)) {
              tmp_0 = this_0;
            } else {
              tmp_0 = null;
            }

            var result = tmp_0;
            if (!(result == null) && !instanceOf(result, this.r3y_1.k2j_1)) {
              var from = getKClassFromExpression(result);
              var to = this.r3y_1.k2j_1;
              throw new NoTransformationFoundException(this.q3y_1.x3u(), from, to);
            }

            return result;
          case 4:
            this.o8_1 = 5;
            var tmp_1 = this.q8_1;
            if (tmp_1 instanceof Error) {
              var cause = this.q8_1;
              cancel_0(this.q3y_1.x3u(), 'Receive failed', cause);
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
    this.s3u_1 = client;
    this.t3u_1 = atomic$boolean$1(false);
    this.w3u_1 = false;
  }
  protoOf(HttpClientCall).j1e = function () {
    return this.x3u().j1e();
  };
  protoOf(HttpClientCall).h3x = function () {
    return this.g3x().h3x();
  };
  protoOf(HttpClientCall).g3x = function () {
    var tmp = this.u3u_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  protoOf(HttpClientCall).x3u = function () {
    var tmp = this.v3u_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  protoOf(HttpClientCall).i3x = function () {
    return this.w3u_1;
  };
  protoOf(HttpClientCall).j3x = function ($completion) {
    return this.x3u().v3x();
  };
  protoOf(HttpClientCall).k3x = function (info, $completion) {
    var tmp = new $bodyNullableCOROUTINE$(this, info, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpClientCall).toString = function () {
    return 'HttpClientCall[' + this.g3x().p3x().toString() + ', ' + this.x3u().w3x().toString() + ']';
  };
  protoOf(HttpClientCall).y3u = function (response) {
    this.v3u_1 = response;
  };
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, DoubleReceiveException);
    this.v3y_1 = 'Response already received: ' + call.toString();
    delete this.message;
  }
  protoOf(DoubleReceiveException).e = function () {
    return this.v3y_1;
  };
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    captureStack(this, NoTransformationFoundException);
    this.w3y_1 = trimIndent("\n        Expected response body of the type '" + toString(to) + "' but was '" + toString(from) + "'\n        In response from `" + get_request(response).p3x().toString() + '`\n        Response status `' + response.w3x().toString() + '`\n        Response header `ContentType: ' + response.j2r().p2e('Content-Type') + '` \n        Request header `Accept: ' + get_request(response).j2r().p2e('Accept') + '`\n        \n        You can read how to resolve NoTransformationFoundException at FAQ: \n        https://ktor.io/docs/faq.html#no-transformation-found-exception\n    ');
    delete this.message;
  }
  protoOf(NoTransformationFoundException).e = function () {
    return this.w3y_1;
  };
  function save(_this__u8e3s4, $completion) {
    var tmp = new $saveCOROUTINE$(_this__u8e3s4, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.l3z_1 = responseBody;
    this.u3u_1 = new SavedHttpRequest(this, request);
    this.v3u_1 = new SavedHttpResponse(this, this.l3z_1, response);
    checkContentLength(contentLength(response), fromInt(this.l3z_1.length), request.o3x());
    this.m3z_1 = true;
  }
  protoOf(SavedHttpCall).i3x = function () {
    return this.m3z_1;
  };
  function SavedHttpRequest(call, origin) {
    this.n3z_1 = origin;
    this.o3z_1 = call;
  }
  protoOf(SavedHttpRequest).n3x = function () {
    return this.o3z_1;
  };
  protoOf(SavedHttpRequest).j1e = function () {
    return this.n3z_1.j1e();
  };
  protoOf(SavedHttpRequest).o3x = function () {
    return this.n3z_1.o3x();
  };
  protoOf(SavedHttpRequest).p3x = function () {
    return this.n3z_1.p3x();
  };
  protoOf(SavedHttpRequest).h3x = function () {
    return this.n3z_1.h3x();
  };
  protoOf(SavedHttpRequest).f31 = function () {
    return this.n3z_1.f31();
  };
  protoOf(SavedHttpRequest).j2r = function () {
    return this.n3z_1.j2r();
  };
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.p3z_1 = call;
    this.q3z_1 = body;
    this.r3z_1 = origin.w3x();
    this.s3z_1 = origin.x3x();
    this.t3z_1 = origin.y3x();
    this.u3z_1 = origin.z3x();
    this.v3z_1 = origin.j2r();
    this.w3z_1 = origin.j1e();
  }
  protoOf(SavedHttpResponse).n3x = function () {
    return this.p3z_1;
  };
  protoOf(SavedHttpResponse).w3x = function () {
    return this.r3z_1;
  };
  protoOf(SavedHttpResponse).x3x = function () {
    return this.s3z_1;
  };
  protoOf(SavedHttpResponse).y3x = function () {
    return this.t3z_1;
  };
  protoOf(SavedHttpResponse).z3x = function () {
    return this.u3z_1;
  };
  protoOf(SavedHttpResponse).j2r = function () {
    return this.v3z_1;
  };
  protoOf(SavedHttpResponse).j1e = function () {
    return this.w3z_1;
  };
  protoOf(SavedHttpResponse).v3x = function () {
    return ByteReadChannel_0(this.q3z_1);
  };
  function $saveCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f3z_1 = _this__u8e3s4;
  }
  protoOf($saveCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var tmp_0 = this.f3z_1;
            if (tmp_0 instanceof SavedHttpCall)
              return this.f3z_1;
            this.n8_1 = 1;
            suspendResult = readRemaining(this.f3z_1.x3u().v3x(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readByteArray(ARGUMENT);
            return new SavedHttpCall(this.f3z_1.s3u_1, this.f3z_1.g3x(), this.f3z_1.x3u(), responseBody);
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
      tmp = getContent($this, delegate.c2y());
    } else {
      if (delegate instanceof ByteArrayContent) {
        tmp = ByteReadChannel_0(delegate.a2x());
      } else {
        if (delegate instanceof ProtocolUpgrade) {
          throw new UnsupportedContentTypeException(delegate);
        } else {
          if (delegate instanceof NoContent) {
            tmp = Companion_getInstance().u23_1;
          } else {
            if (delegate instanceof ReadChannelContent) {
              tmp = delegate.w2x();
            } else {
              if (delegate instanceof WriteChannelContent) {
                var tmp_0 = GlobalScope_instance;
                tmp = writer(tmp_0, $this.a40_1, true, ObservableContent$getContent$slambda_0(delegate, null)).m29_1;
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
    this.k40_1 = $delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ObservableContent$getContent$slambda).b3s = function ($this$writer, $completion) {
    var tmp = this.c3s($this$writer, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(ObservableContent$getContent$slambda).i9 = function (p1, $completion) {
    return this.b3s(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
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
            suspendResult = this.k40_1.y2x(this.l40_1.o29_1, this);
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
  protoOf(ObservableContent$getContent$slambda).c3s = function ($this$writer, completion) {
    var i = new ObservableContent$getContent$slambda(this.k40_1, completion);
    i.l40_1 = $this$writer;
    return i;
  };
  function ObservableContent$getContent$slambda_0($delegate, resultContinuation) {
    var i = new ObservableContent$getContent$slambda($delegate, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.b3s($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.z3z_1 = delegate;
    this.a40_1 = callContext;
    this.b40_1 = listener;
  }
  protoOf(ObservableContent).y2w = function () {
    return this.z3z_1.y2w();
  };
  protoOf(ObservableContent).z2w = function () {
    return this.z3z_1.z2w();
  };
  protoOf(ObservableContent).j2r = function () {
    return this.z3z_1.j2r();
  };
  protoOf(ObservableContent).w2x = function () {
    return observable(getContent(this, this.z3z_1), this.a40_1, this.z2w(), this.b40_1);
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
        $client.y3t_1.u3e(get_HttpResponseCancelled(), $response);
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
    var _iterator__ex2g4s = requestData.c41_1.t();
    while (_iterator__ex2g4s.u()) {
      var requestedExtension = _iterator__ex2g4s.v();
      // Inline function 'kotlin.require' call
      if (!$this.d41().j2(requestedExtension)) {
        var message = "Engine doesn't support " + toString(requestedExtension);
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  function HttpClientEngine$install$slambda($client, this$0, resultContinuation) {
    this.m41_1 = $client;
    this.n41_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$install$slambda).q3u = function ($this$intercept, content, $completion) {
    var tmp = this.r3u($this$intercept, content, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpClientEngine$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3u(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
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
            this_0.r41(this.o41_1.t2i_1);
            var body = this.p41_1;
            if (body == null) {
              this_0.a3w_1 = NullBody_instance;
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
              this_0.s41(new TypeInfo(tmp_0, tmp_1));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.a3w_1 = body;
                this_0.s41(null);
              } else {
                this_0.a3w_1 = body;
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
                this_0.s41(new TypeInfo(tmp_3, tmp_4));
              }
            }

            var builder = this_0;
            this.m41_1.y3t_1.u3e(get_HttpRequestIsReadyForSending(), builder);
            var tmp_6 = this;
            var this_1 = builder.f2n();
            this_1.b41_1.b2d(get_CLIENT_CONFIG(), this.m41_1.z3t_1);
            tmp_6.q41_1 = this_1;
            validateHeaders(this.q41_1);
            checkExtensions(this.n41_1, this.q41_1);
            this.n8_1 = 1;
            suspendResult = executeWithinCallContext(this.n41_1, this.q41_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var responseData = suspendResult;
            var call = HttpClientCall_init_$Create$(this.m41_1, this.q41_1, responseData);
            var response = call.x3u();
            this.m41_1.y3t_1.u3e(get_HttpResponseReceived(), response);
            var tmp_7 = get_job(response.j1e());
            tmp_7.l1f(HttpClientEngine$install$slambda$lambda(this.m41_1, response));
            this.n8_1 = 2;
            suspendResult = this.o41_1.x2h(call, this);
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
  protoOf(HttpClientEngine$install$slambda).r3u = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.m41_1, this.n41_1, completion);
    i.o41_1 = $this$intercept;
    i.p41_1 = content;
    return i;
  };
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    var l = function ($this$intercept, content, $completion) {
      return i.q3u($this$intercept, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.b42_1 = this$0;
    this.c42_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).e42 = function ($this$async, $completion) {
    var tmp = this.v2a($this$async, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).i9 = function (p1, $completion) {
    return this.e42((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            if (_get_closed__iwkfs1(this.b42_1)) {
              throw new ClientEngineClosedException();
            }

            this.n8_1 = 1;
            suspendResult = this.b42_1.f42(this.c42_1, this);
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
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.b42_1, this.c42_1, completion);
    i.d42_1 = $this$async;
    return i;
  };
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.e42($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $executeWithinCallContextCOROUTINE$(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u40_1 = _this__u8e3s4;
    this.v40_1 = requestData;
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
            suspendResult = createCallContext(this.u40_1, this.v40_1.a41_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var callContext = suspendResult;
            var context = callContext.ah(new KtorCallContextElement(callContext));
            this.n8_1 = 2;
            suspendResult = async(this.u40_1, context, VOID, HttpClientEngine$executeWithinCallContext$slambda_0(this.u40_1, this.v40_1, null)).n1h(this);
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
    var requestHeaders = request.y40_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = requestHeaders.g2f();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (HttpHeaders_getInstance().c2r_1.j2(element)) {
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
      $callJob.s1f(CancellationException_init_$Create$_0(cause.message));
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
      var tmp0_elvis_lhs = this$0.d3w().h42_1;
      return tmp0_elvis_lhs == null ? ioDispatcher() : tmp0_elvis_lhs;
    };
  }
  function HttpClientEngineBase$_get_dispatcher_$ref_kz5x8v() {
    return function (p0) {
      return p0.k42();
    };
  }
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor().ah(this$0.k42()).ah(new CoroutineName(this$0.a3u_1 + '-context'));
    };
  }
  function HttpClientEngineBase$_get_coroutineContext_$ref_p82ehr() {
    return function (p0) {
      return p0.j1e();
    };
  }
  function HttpClientEngineBase(engineName) {
    this.a3u_1 = engineName;
    this.b3u_1 = atomic$boolean$1(false);
    this.c3u_1 = atomic$int$1(0);
    var tmp = this;
    tmp.d3u_1 = lazy(HttpClientEngineBase$dispatcher$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.e3u_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  protoOf(HttpClientEngineBase).k42 = function () {
    var tmp0 = this.d3u_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('dispatcher', 1, tmp, HttpClientEngineBase$_get_dispatcher_$ref_kz5x8v(), null);
    return tmp0.n1();
  };
  protoOf(HttpClientEngineBase).j1e = function () {
    var tmp0 = this.e3u_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('coroutineContext', 1, tmp, HttpClientEngineBase$_get_coroutineContext_$ref_p82ehr(), null);
    return tmp0.n1();
  };
  protoOf(HttpClientEngineBase).h4 = function () {
    if (!this.b3u_1.atomicfu$compareAndSet(false, true))
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
    this.l42_1 = cause;
    delete this.cause;
  }
  protoOf(ClientEngineClosedException).f = function () {
    return this.l42_1;
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
    this.g42_1 = 4;
    this.h42_1 = null;
    this.i42_1 = false;
    this.j42_1 = null;
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
    return ensureNotNull(tmp$ret$0.a9(Companion_instance_1)).m42_1;
  }
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_8() {
    return Companion_instance_1;
  }
  function KtorCallContextElement(callContext) {
    this.m42_1 = callContext;
  }
  protoOf(KtorCallContextElement).m1 = function () {
    return Companion_instance_1;
  };
  function mergeHeaders(requestHeaders, content, block) {
    _init_properties_Utils_kt__jo07cx();
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.h2f(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.p2e('User-Agent') == null && content.j2r().p2e('User-Agent') == null;
    if (missingAgent && needUserAgent()) {
      block('User-Agent', get_KTOR_DEFAULT_USER_AGENT());
    }
    var tmp0_safe_receiver = content.y2w();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? content.j2r().p2e('Content-Type') : tmp1_elvis_lhs;
    var type = tmp2_elvis_lhs == null ? requestHeaders.p2e('Content-Type') : tmp2_elvis_lhs;
    var tmp3_safe_receiver = content.z2w();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? content.j2r().p2e('Content-Length') : tmp4_elvis_lhs;
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
      $this$buildHeaders.o2f($content.j2r());
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
    this.v42_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterRenderHook$install$slambda).q3u = function ($this$intercept, content, $completion) {
    var tmp = this.r3u($this$intercept, content, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(AfterRenderHook$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3u(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterRenderHook$install$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            var tmp_0 = this.x42_1;
            if (!(tmp_0 instanceof OutgoingContent))
              return Unit_instance;
            this.n8_1 = 1;
            suspendResult = this.v42_1(this.w42_1.t2i_1, this.x42_1, this);
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
            suspendResult = this.w42_1.x2h(newContent, this);
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
  protoOf(AfterRenderHook$install$slambda).r3u = function ($this$intercept, content, completion) {
    var i = new AfterRenderHook$install$slambda(this.v42_1, completion);
    i.w42_1 = $this$intercept;
    i.x42_1 = content;
    return i;
  };
  function AfterRenderHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterRenderHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, content, $completion) {
      return i.q3u($this$intercept, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function AfterRenderHook() {
  }
  protoOf(AfterRenderHook).y42 = function (client, handler) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    client.s3t_1.u2i(Phases_getInstance().c43_1, observableContentPhase);
    client.s3t_1.x2i(observableContentPhase, AfterRenderHook$install$slambda_0(handler, null));
  };
  protoOf(AfterRenderHook).e43 = function (client, handler) {
    return this.y42(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var AfterRenderHook_instance;
  function AfterRenderHook_getInstance() {
    return AfterRenderHook_instance;
  }
  function AfterReceiveHook$install$slambda($handler, resultContinuation) {
    this.n43_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterReceiveHook$install$slambda).q43 = function ($this$intercept, response, $completion) {
    var tmp = this.r43($this$intercept, response, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(AfterReceiveHook$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q43(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
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
            suspendResult = this.n43_1(this.p43_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var newResponse = suspendResult;
            if (!(newResponse == null)) {
              this.n8_1 = 2;
              suspendResult = this.o43_1.x2h(newResponse, this);
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
  protoOf(AfterReceiveHook$install$slambda).r43 = function ($this$intercept, response, completion) {
    var i = new AfterReceiveHook$install$slambda(this.n43_1, completion);
    i.o43_1 = $this$intercept;
    i.p43_1 = response;
    return i;
  };
  function AfterReceiveHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterReceiveHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, response, $completion) {
      return i.q43($this$intercept, response, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function AfterReceiveHook() {
  }
  protoOf(AfterReceiveHook).s43 = function (client, handler) {
    var tmp = Phases_getInstance_1().v43_1;
    client.v3t_1.x2i(tmp, AfterReceiveHook$install$slambda_0(handler, null));
  };
  protoOf(AfterReceiveHook).e43 = function (client, handler) {
    return this.s43(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var AfterReceiveHook_instance;
  function AfterReceiveHook_getInstance() {
    return AfterReceiveHook_instance;
  }
  function withObservableDownload(_this__u8e3s4, listener) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = _this__u8e3s4.n3x();
    return replaceResponse(tmp, VOID, withObservableDownload$lambda(listener)).x3u();
  }
  function BodyProgress$lambda($this$createClientPlugin) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = AfterRenderHook_instance;
    $this$createClientPlugin.b44(tmp, BodyProgress$lambda$slambda_0(null));
    var tmp_0 = AfterReceiveHook_instance;
    $this$createClientPlugin.b44(tmp_0, BodyProgress$lambda$slambda_2(null));
    return Unit_instance;
  }
  function BodyProgress$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda).m44 = function (request, content, $completion) {
    var tmp = this.n44(request, content, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(BodyProgress$lambda$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.m44(tmp, p2 instanceof OutgoingContent ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        if (tmp === 0) {
          this.o8_1 = 1;
          var tmp0_elvis_lhs = this.k44_1.c3w_1.z2c(get_UploadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return new ObservableContent(this.l44_1, this.k44_1.b3w_1, listener);
        } else if (tmp === 1) {
          throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda).n44 = function (request, content, completion) {
    var i = new BodyProgress$lambda$slambda(completion);
    i.k44_1 = request;
    i.l44_1 = content;
    return i;
  };
  function BodyProgress$lambda$slambda_0(resultContinuation) {
    var i = new BodyProgress$lambda$slambda(resultContinuation);
    var l = function (request, content, $completion) {
      return i.m44(request, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress$lambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda_1).x44 = function (response, $completion) {
    var tmp = this.y44(response, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(BodyProgress$lambda$slambda_1).i9 = function (p1, $completion) {
    return this.x44(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        if (tmp === 0) {
          this.o8_1 = 1;
          var tmp0_elvis_lhs = this.w44_1.n3x().g3x().h3x().z2c(get_DownloadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return withObservableDownload(this.w44_1, listener);
        } else if (tmp === 1) {
          throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda_1).y44 = function (response, completion) {
    var i = new BodyProgress$lambda$slambda_1(completion);
    i.w44_1 = response;
    return i;
  };
  function BodyProgress$lambda$slambda_2(resultContinuation) {
    var i = new BodyProgress$lambda$slambda_1(resultContinuation);
    var l = function (response, $completion) {
      return i.x44(response, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function withObservableDownload$lambda($listener) {
    return function ($this$replaceResponse) {
      return observable($this$replaceResponse.v3x(), $this$replaceResponse.j1e(), contentLength($this$replaceResponse), $listener);
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
    this.z44_1 = response;
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, RedirectResponseException);
    this.b45_1 = 'Unhandled redirect: ' + response.n3x().g3x().o3x().u2r_1 + ' ' + response.n3x().g3x().p3x().toString() + '. ' + ('Status: ' + response.w3x().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(RedirectResponseException).e = function () {
    return this.b45_1;
  };
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ClientRequestException);
    this.d45_1 = 'Client request(' + response.n3x().g3x().o3x().u2r_1 + ' ' + response.n3x().g3x().p3x().toString() + ') ' + ('invalid: ' + response.w3x().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(ClientRequestException).e = function () {
    return this.d45_1;
  };
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ServerResponseException);
    this.f45_1 = 'Server error(' + response.n3x().g3x().o3x().u2r_1 + ' ' + response.n3x().g3x().p3x().toString() + ': ' + (response.w3x().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(ServerResponseException).e = function () {
    return this.f45_1;
  };
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(addDefaultResponseValidation$lambda$slambda).s45 = function (response, $completion) {
    var tmp = this.y44(response, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).i9 = function (p1, $completion) {
    return this.s45(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 5;
            var expectSuccess = this.o45_1.n3x().h3x().y2c(get_ExpectSuccessAttributeKey());
            if (!expectSuccess) {
              get_LOGGER().r2j('Skipping default response validation for ' + this.o45_1.n3x().g3x().p3x().toString());
              return Unit_instance;
            }

            this.q45_1 = this.o45_1.w3x().h2u_1;
            var originCall = this.o45_1.n3x();
            if (this.q45_1 < 300 || originCall.h3x().a2d(get_ValidateMark())) {
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
            this_0.h3x().b2d(get_ValidateMark(), Unit_instance);
            var exceptionCall = this_0;
            this.p45_1 = exceptionCall.x3u();
            this.o8_1 = 3;
            this.n8_1 = 2;
            suspendResult = bodyAsText(this.p45_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.r45_1 = suspendResult;
            this.o8_1 = 5;
            this.n8_1 = 4;
            continue $sm;
          case 3:
            this.o8_1 = 5;
            var tmp_0 = this.q8_1;
            if (tmp_0 instanceof MalformedInputException) {
              var _unused_var__etf5q3 = this.q8_1;
              var tmp_1 = this;
              tmp_1.r45_1 = '<body failed decoding>';
              this.n8_1 = 4;
              continue $sm;
            } else {
              throw this.q8_1;
            }

          case 4:
            this.o8_1 = 5;
            var exceptionResponseText = this.r45_1;
            var tmp0_subject = this.q45_1;
            var exception = (300 <= tmp0_subject ? tmp0_subject <= 399 : false) ? new RedirectResponseException(this.p45_1, exceptionResponseText) : (400 <= tmp0_subject ? tmp0_subject <= 499 : false) ? new ClientRequestException(this.p45_1, exceptionResponseText) : (500 <= tmp0_subject ? tmp0_subject <= 599 : false) ? new ServerResponseException(this.p45_1, exceptionResponseText) : new ResponseException(this.p45_1, exceptionResponseText);
            get_LOGGER().r2j('Default response validation for ' + this.o45_1.n3x().g3x().p3x().toString() + ' failed with ' + exception.toString());
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
  protoOf(addDefaultResponseValidation$lambda$slambda).y44 = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.o45_1 = response;
    return i;
  };
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    var l = function (response, $completion) {
      return i.s45(response, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.v45_1 = $this_addDefaultResponseValidation.q3w_1;
      $this$HttpResponseValidator.w45(addDefaultResponseValidation$lambda$slambda_0(null));
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
    var tmp = Phases_getInstance().c43_1;
    _this__u8e3s4.s3t_1.x2i(tmp, defaultTransformers$slambda_0(null));
    var tmp_0 = Phases_getInstance_2().w3w_1;
    _this__u8e3s4.t3t_1.x2i(tmp_0, defaultTransformers$slambda_2(_this__u8e3s4, null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$2$content$1($contentType, $body) {
    this.a46_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    tmp.y45_1 = $contentType == null ? Application_getInstance().q2k_1 : $contentType;
    this.z45_1 = fromInt($body.length);
  }
  protoOf(defaultTransformers$2$content$1).y2w = function () {
    return this.y45_1;
  };
  protoOf(defaultTransformers$2$content$1).z2w = function () {
    return this.z45_1;
  };
  protoOf(defaultTransformers$2$content$1).a2x = function () {
    return this.a46_1;
  };
  function defaultTransformers$2$content$2($this_intercept, $contentType, $body) {
    this.e46_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.t2i_1.z3v_1.p2e('Content-Length');
    tmp.c46_1 = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
    var tmp_0 = this;
    tmp_0.d46_1 = $contentType == null ? Application_getInstance().q2k_1 : $contentType;
  }
  protoOf(defaultTransformers$2$content$2).z2w = function () {
    return this.c46_1;
  };
  protoOf(defaultTransformers$2$content$2).y2w = function () {
    return this.d46_1;
  };
  protoOf(defaultTransformers$2$content$2).w2x = function () {
    return this.e46_1;
  };
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda).q3u = function ($this$intercept, body, $completion) {
    var tmp = this.r3u($this$intercept, body, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(defaultTransformers$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3u(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            if (this.n46_1.t2i_1.z3v_1.p2e('Accept') == null) {
              this.n46_1.t2i_1.z3v_1.n2f('Accept', '*/*');
            }

            var contentType_0 = contentType(this.n46_1.t2i_1);
            var tmp0_subject = this.o46_1;
            var tmp_0;
            if (typeof tmp0_subject === 'string') {
              tmp_0 = new TextContent(this.o46_1, contentType_0 == null ? Text_getInstance().i2m_1 : contentType_0);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_0 = new defaultTransformers$2$content$1(contentType_0, this.o46_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_0 = new defaultTransformers$2$content$2(this.n46_1, contentType_0, this.o46_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_0 = this.o46_1;
                  } else {
                    tmp_0 = platformRequestDefaultTransform(contentType_0, this.n46_1.t2i_1, this.o46_1);
                  }
                }
              }
            }

            var content = tmp_0;
            if (!((content == null ? null : content.y2w()) == null)) {
              this.n46_1.t2i_1.z3v_1.p2f('Content-Type');
              get_LOGGER_0().r2j('Transformed with default transformers request body for ' + this.n46_1.t2i_1.x3v_1.toString() + ' from ' + toString(getKClassFromExpression(this.o46_1)));
              this.n8_1 = 1;
              suspendResult = this.n46_1.x2h(content, this);
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
  protoOf(defaultTransformers$slambda).r3u = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.n46_1 = $this$intercept;
    i.o46_1 = body;
    return i;
  };
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    var l = function ($this$intercept, body, $completion) {
      return i.q3u($this$intercept, body, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.x46_1 = $body;
    this.y46_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda$slambda).b3s = function ($this$writer, $completion) {
    var tmp = this.c3s($this$writer, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(defaultTransformers$slambda$slambda).i9 = function (p1, $completion) {
    return this.b3s(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = copyTo(this.x46_1, this.z46_1.o29_1, new Long(-1, 2147483647), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.a47_1 = suspendResult;
            this.o8_1 = 3;
            this.n8_1 = 4;
            continue $sm;
          case 2:
            this.o8_1 = 3;
            var tmp_0 = this.q8_1;
            if (tmp_0 instanceof CancellationException) {
              var cause = this.q8_1;
              var tmp_1 = this;
              cancel(this.y46_1, cause);
              throw cause;
            } else {
              var tmp_2 = this.q8_1;
              if (tmp_2 instanceof Error) {
                var cause_0 = this.q8_1;
                var tmp_3 = this;
                cancel_0(this.y46_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.q8_1;
              }
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
  protoOf(defaultTransformers$slambda$slambda).c3s = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.x46_1, this.y46_1, completion);
    i.z46_1 = $this$writer;
    return i;
  };
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.b3s($this$writer, $completion);
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
    this.j47_1 = $this_defaultTransformers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda_1).l3v = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.m3v($this$intercept, _destruct__k2r9zo, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(defaultTransformers$slambda_1).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3v(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 12;
            this.m47_1 = this.l47_1.uf();
            var body = this.l47_1.vf();
            if (!isInterface(body, ByteReadChannel))
              return Unit_instance;
            var response = this.k47_1.t2i_1.x3u();
            var tmp0_subject = this.m47_1.k2j_1;
            if (tmp0_subject.equals(getKClass(Unit))) {
              cancel_1(body);
              this.n8_1 = 10;
              suspendResult = this.k47_1.x2h(new HttpResponseContainer(this.m47_1, Unit_instance), this);
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
                      var responseJobHolder = Job(response.j1e().a9(Key_instance));
                      var this_0 = writer(this.k47_1, this.j47_1.r3t_1, VOID, defaultTransformers$slambda$slambda_0(body, response, null));
                      invokeOnCompletion(this_0, defaultTransformers$slambda$lambda(responseJobHolder));
                      var channel = this_0.m29_1;
                      this.n8_1 = 3;
                      suspendResult = this.k47_1.x2h(new HttpResponseContainer(this.m47_1, channel), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (tmp0_subject.equals(getKClass(HttpStatusCode))) {
                        cancel_1(body);
                        this.n8_1 = 2;
                        suspendResult = this.k47_1.x2h(new HttpResponseContainer(this.m47_1, response.w3x()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        if (tmp0_subject.equals(getKClass(MultiPartData))) {
                          var tmp0 = this.k47_1.t2i_1.x3u().j2r().p2e('Content-Type');
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
                          if (!contentType.b2n(MultiPart_getInstance().b2m_1)) {
                            var message_0 = 'Expected multipart/form-data, got ' + contentType.toString();
                            throw IllegalStateException_init_$Create$(toString(message_0));
                          }
                          var tmp1_safe_receiver = this.k47_1.t2i_1.x3u().j2r().p2e('Content-Length');
                          var contentLength_0 = tmp1_safe_receiver == null ? null : toLong(tmp1_safe_receiver);
                          var body_0 = new CIOMultipartDataBase(this.k47_1.j1e(), body, rawContentType, contentLength_0);
                          var parsedResponse = new HttpResponseContainer(this.m47_1, body_0);
                          this.n8_1 = 1;
                          suspendResult = this.k47_1.x2h(parsedResponse, this);
                          if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                          }
                          continue $sm;
                        } else {
                          this.n47_1 = null;
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
            this.n47_1 = suspendResult;
            this.n8_1 = 11;
            continue $sm;
          case 2:
            this.n47_1 = suspendResult;
            this.n8_1 = 11;
            continue $sm;
          case 3:
            this.n47_1 = suspendResult;
            this.n8_1 = 11;
            continue $sm;
          case 4:
            var bytes = suspendResult;
            checkContentLength(contentLength(this.k47_1.t2i_1.x3u()), fromInt(bytes.length), this.k47_1.t2i_1.g3x().o3x());
            this.n8_1 = 5;
            suspendResult = this.k47_1.x2h(new HttpResponseContainer(this.m47_1, bytes), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.n47_1 = suspendResult;
            this.n8_1 = 11;
            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = new HttpResponseContainer(this.m47_1, ARGUMENT);
            this.n8_1 = 7;
            suspendResult = this.k47_1.x2h(ARGUMENT_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.n47_1 = suspendResult;
            this.n8_1 = 11;
            continue $sm;
          case 8:
            var ARGUMENT_1 = suspendResult;
            var ARGUMENT_2 = readText(ARGUMENT_1);
            var ARGUMENT_3 = toInt(ARGUMENT_2);
            var ARGUMENT_4 = new HttpResponseContainer(this.m47_1, ARGUMENT_3);
            this.n8_1 = 9;
            suspendResult = this.k47_1.x2h(ARGUMENT_4, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.n47_1 = suspendResult;
            this.n8_1 = 11;
            continue $sm;
          case 10:
            this.n47_1 = suspendResult;
            this.n8_1 = 11;
            continue $sm;
          case 11:
            var result = this.n47_1;
            if (!(result == null)) {
              get_LOGGER_0().r2j('Transformed with default transformers response body ' + ('for ' + this.k47_1.t2i_1.g3x().p3x().toString() + ' to ' + toString(this.m47_1.k2j_1)));
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
  protoOf(defaultTransformers$slambda_1).m3v = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new defaultTransformers$slambda_1(this.j47_1, completion);
    i.k47_1 = $this$intercept;
    i.l47_1 = _destruct__k2r9zo;
    return i;
  };
  function defaultTransformers$slambda_2($this_defaultTransformers, resultContinuation) {
    var i = new defaultTransformers$slambda_1($this_defaultTransformers, resultContinuation);
    var l = function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.l3v($this$intercept, _destruct__k2r9zo, $completion);
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
    tmp.t45_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.u45_1 = ArrayList_init_$Create$();
    this.v45_1 = true;
  }
  protoOf(HttpCallValidatorConfig).w45 = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.t45_1.b1(block);
  };
  function ExceptionHandlerWrapper() {
  }
  function RequestExceptionHandlerWrapper() {
  }
  function RequestError$install$slambda($handler, resultContinuation) {
    this.w47_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestError$install$slambda).q3u = function ($this$intercept, it, $completion) {
    var tmp = this.r3u($this$intercept, it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(RequestError$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3u(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
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
            suspendResult = this.x47_1.y2h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.z47_1 = suspendResult;
            this.o8_1 = 5;
            this.n8_1 = 4;
            continue $sm;
          case 2:
            this.o8_1 = 5;
            var tmp_0 = this.q8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.q8_1;
              this.n8_1 = 3;
              suspendResult = this.w47_1(HttpRequest(this.x47_1.t2i_1), cause, this);
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
            tmp_1.z47_1 = Unit_instance;
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
  protoOf(RequestError$install$slambda).r3u = function ($this$intercept, it, completion) {
    var i = new RequestError$install$slambda(this.w47_1, completion);
    i.x47_1 = $this$intercept;
    i.y47_1 = it;
    return i;
  };
  function RequestError$install$slambda_0($handler, resultContinuation) {
    var i = new RequestError$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.q3u($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function RequestError() {
  }
  protoOf(RequestError).a48 = function (client, handler) {
    var tmp = Phases_getInstance().z42_1;
    client.s3t_1.x2i(tmp, RequestError$install$slambda_0(handler, null));
  };
  protoOf(RequestError).e43 = function (client, handler) {
    return this.a48(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var RequestError_instance;
  function RequestError_getInstance() {
    return RequestError_instance;
  }
  function ReceiveError$install$slambda($handler, resultContinuation) {
    this.j48_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReceiveError$install$slambda).l3v = function ($this$intercept, it, $completion) {
    var tmp = this.m3v($this$intercept, it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(ReceiveError$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3v(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
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
            suspendResult = this.k48_1.y2h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m48_1 = suspendResult;
            this.o8_1 = 5;
            this.n8_1 = 4;
            continue $sm;
          case 2:
            this.o8_1 = 5;
            var tmp_0 = this.q8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.q8_1;
              this.n8_1 = 3;
              suspendResult = this.j48_1(this.k48_1.t2i_1.g3x(), cause, this);
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
            tmp_1.m48_1 = Unit_instance;
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
  protoOf(ReceiveError$install$slambda).m3v = function ($this$intercept, it, completion) {
    var i = new ReceiveError$install$slambda(this.j48_1, completion);
    i.k48_1 = $this$intercept;
    i.l48_1 = it;
    return i;
  };
  function ReceiveError$install$slambda_0($handler, resultContinuation) {
    var i = new ReceiveError$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.l3v($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ReceiveError() {
  }
  protoOf(ReceiveError).a48 = function (client, handler) {
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    client.t3t_1.w2i(Phases_getInstance_2().v3w_1, BeforeReceive);
    client.t3t_1.x2i(BeforeReceive, ReceiveError$install$slambda_0(handler, null));
  };
  protoOf(ReceiveError).e43 = function (client, handler) {
    return this.a48(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
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
    _this__u8e3s4.f3x(get_HttpCallValidator(), block);
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
    var responseValidators = reversed($this$createClientPlugin.y43_1.t45_1);
    var callExceptionHandlers = reversed($this$createClientPlugin.y43_1.u45_1);
    var expectSuccess = $this$createClientPlugin.y43_1.v45_1;
    var tmp = SetupRequest_instance;
    $this$createClientPlugin.b44(tmp, HttpCallValidator$lambda$slambda_0(expectSuccess, null));
    var tmp_0 = Send_instance;
    $this$createClientPlugin.b44(tmp_0, HttpCallValidator$lambda$slambda_2(responseValidators, null));
    var tmp_1 = RequestError_instance;
    $this$createClientPlugin.b44(tmp_1, HttpCallValidator$lambda$slambda_4(callExceptionHandlers, null));
    var tmp_2 = ReceiveError_instance;
    $this$createClientPlugin.b44(tmp_2, HttpCallValidator$lambda$slambda_6(callExceptionHandlers, null));
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
    this.s49_1 = $expectSuccess;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda).u49 = function (request, $completion) {
    var tmp = this.v49(request, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpCallValidator$lambda$slambda).i9 = function (p1, $completion) {
    return this.u49(p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        if (tmp === 0) {
          this.o8_1 = 1;
          var tmp_0 = get_ExpectSuccessAttributeKey();
          this.t49_1.c3w_1.e2d(tmp_0, HttpCallValidator$lambda$slambda$lambda(this.s49_1));
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
  protoOf(HttpCallValidator$lambda$slambda).v49 = function (request, completion) {
    var i = new HttpCallValidator$lambda$slambda(this.s49_1, completion);
    i.t49_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_0($expectSuccess, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation);
    var l = function (request, $completion) {
      return i.u49(request, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation) {
    this.e4a_1 = $responseValidators;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_1).i4a = function ($this$on, request, $completion) {
    var tmp = this.j4a($this$on, request, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpCallValidator$lambda$slambda_1).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.i4a(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
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
            suspendResult = this.f4a_1.m4a(this.g4a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h4a_1 = suspendResult;
            this.n8_1 = 2;
            suspendResult = invoke$validateResponse(this.e4a_1, this.h4a_1.x3u(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.h4a_1;
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
  protoOf(HttpCallValidator$lambda$slambda_1).j4a = function ($this$on, request, completion) {
    var i = new HttpCallValidator$lambda$slambda_1(this.e4a_1, completion);
    i.f4a_1 = $this$on;
    i.g4a_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_2($responseValidators, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation);
    var l = function ($this$on, request, $completion) {
      return i.i4a($this$on, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation) {
    this.v4a_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_3).z4a = function (request, cause, $completion) {
    var tmp = this.a4b(request, cause, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpCallValidator$lambda$slambda_3).h9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.z4a(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_3).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.y4a_1 = unwrapCancellationException(this.x4a_1);
            this.n8_1 = 1;
            suspendResult = invoke$processException(this.v4a_1, this.y4a_1, this.w4a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.y4a_1;
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
  protoOf(HttpCallValidator$lambda$slambda_3).a4b = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_3(this.v4a_1, completion);
    i.w4a_1 = request;
    i.x4a_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_4($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation);
    var l = function (request, cause, $completion) {
      return i.z4a(request, cause, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation) {
    this.j4b_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_5).z4a = function (request, cause, $completion) {
    var tmp = this.a4b(request, cause, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpCallValidator$lambda$slambda_5).h9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.z4a(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_5).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.m4b_1 = unwrapCancellationException(this.l4b_1);
            this.n8_1 = 1;
            suspendResult = invoke$processException(this.j4b_1, this.m4b_1, this.k4b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.m4b_1;
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
  protoOf(HttpCallValidator$lambda$slambda_5).a4b = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_5(this.j4b_1, completion);
    i.k4b_1 = request;
    i.l4b_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_6($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation);
    var l = function (request, cause, $completion) {
      return i.z4a(request, cause, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $invoke$validateResponseCOROUTINE$(responseValidators, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v48_1 = responseValidators;
    this.w48_1 = response;
  }
  protoOf($invoke$validateResponseCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            get_LOGGER_1().r2j('Validating response for request ' + this.w48_1.n3x().g3x().p3x().toString());
            this.x48_1 = this.v48_1.t();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!this.x48_1.u()) {
              this.n8_1 = 3;
              continue $sm;
            }

            var element = this.x48_1.v();
            this.n8_1 = 2;
            suspendResult = element(this.w48_1, this);
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
    this.g49_1 = callExceptionHandlers;
    this.h49_1 = cause;
    this.i49_1 = request;
  }
  protoOf($invoke$processExceptionCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 6;
            get_LOGGER_1().r2j('Processing exception ' + this.h49_1.toString() + ' for request ' + this.i49_1.p3x().toString());
            this.j49_1 = this.g49_1.t();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!this.j49_1.u()) {
              this.n8_1 = 5;
              continue $sm;
            }

            var element = this.j49_1.v();
            if (element instanceof ExceptionHandlerWrapper) {
              this.n8_1 = 3;
              suspendResult = element.o4b_1(this.h49_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (element instanceof RequestExceptionHandlerWrapper) {
                this.n8_1 = 2;
                suspendResult = element.n4b_1(this.h49_1, this.i49_1, this);
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
    this.t4b_1 = $builder;
    this.p4b_1 = $builder.y3v_1;
    this.q4b_1 = $builder.x3v_1.f2n();
    this.r4b_1 = $builder.c3w_1;
    this.s4b_1 = $builder.z3v_1.f2n();
  }
  protoOf(HttpRequest$1).n3x = function () {
    // Inline function 'kotlin.error' call
    var message = 'Call is not initialized';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(HttpRequest$1).o3x = function () {
    return this.p4b_1;
  };
  protoOf(HttpRequest$1).p3x = function () {
    return this.q4b_1;
  };
  protoOf(HttpRequest$1).h3x = function () {
    return this.r4b_1;
  };
  protoOf(HttpRequest$1).j2r = function () {
    return this.s4b_1;
  };
  protoOf(HttpRequest$1).f31 = function () {
    var tmp = this.t4b_1.a3w_1;
    var tmp0_elvis_lhs = tmp instanceof OutgoingContent ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Content was not transformed to OutgoingContent yet. Current body is ' + toString(this.t4b_1.a3w_1);
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
    var tmp0_safe_receiver = _this__u8e3s4.w3t_1.z2c(get_PLUGIN_INSTALLED_LIST());
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
    tmp.u4b_1 = LinkedHashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.v4b_1 = LinkedHashMap_init_$Create$();
    this.w4b_1 = null;
    this.x4b_1 = Charsets_getInstance().u2b_1;
  }
  function RenderRequestHook$install$slambda($handler, resultContinuation) {
    this.g4c_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RenderRequestHook$install$slambda).q3u = function ($this$intercept, content, $completion) {
    var tmp = this.r3u($this$intercept, content, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(RenderRequestHook$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3u(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
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
            suspendResult = this.g4c_1(this.h4c_1.t2i_1, this.i4c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (!(result == null)) {
              this.n8_1 = 2;
              suspendResult = this.h4c_1.x2h(result, this);
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
  protoOf(RenderRequestHook$install$slambda).r3u = function ($this$intercept, content, completion) {
    var i = new RenderRequestHook$install$slambda(this.g4c_1, completion);
    i.h4c_1 = $this$intercept;
    i.i4c_1 = content;
    return i;
  };
  function RenderRequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RenderRequestHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, content, $completion) {
      return i.q3u($this$intercept, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function RenderRequestHook() {
  }
  protoOf(RenderRequestHook).j4c = function (client, handler) {
    var tmp = Phases_getInstance().c43_1;
    client.s3t_1.x2i(tmp, RenderRequestHook$install$slambda_0(handler, null));
  };
  protoOf(RenderRequestHook).e43 = function (client, handler) {
    return this.j4c(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
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
    var this_0 = toList($this$createClientPlugin.y43_1.v4b_1);
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = HttpPlainText$lambda$lambda;
    var tmp$ret$1 = new sam$kotlin_Comparator$0(tmp);
    var withQuality = sortedWith(this_0, tmp$ret$1);
    var responseCharsetFallback = $this$createClientPlugin.y43_1.x4b_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = $this$createClientPlugin.y43_1.u4b_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (!$this$createClientPlugin.y43_1.v4b_1.q2(element)) {
        destination.b1(element);
      }
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = HttpPlainText$lambda$lambda_0;
    var tmp$ret$6 = new sam$kotlin_Comparator$0(tmp_0);
    var withoutQuality = sortedWith(destination, tmp$ret$6);
    var tmp_1;
    var tmp0_0 = $this$createClientPlugin.y43_1.u4b_1;
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
      var tmp0_1 = $this$createClientPlugin.y43_1.v4b_1.t2();
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
    var tmp0_elvis_lhs = $this$createClientPlugin.y43_1.w4b_1;
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
    $this$createClientPlugin.b44(tmp_6, HttpPlainText$lambda$slambda_0(acceptCharsetHeader, requestCharset, null));
    $this$createClientPlugin.k4c(HttpPlainText$lambda$slambda_2(responseCharsetFallback, null));
    return Unit_instance;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.l4c_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).sd = function (a, b) {
    return this.l4c_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.sd(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).k3 = function () {
    return this.l4c_1;
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
    var contentType = requestContentType == null ? Text_getInstance().i2m_1 : requestContentType;
    var tmp2_elvis_lhs = requestContentType == null ? null : charset(requestContentType);
    var charset_0 = tmp2_elvis_lhs == null ? requestCharset : tmp2_elvis_lhs;
    get_LOGGER_2().r2j('Sending request body to ' + request.x3v_1.toString() + ' as text/plain with charset ' + charset_0.toString());
    return new TextContent(content, withCharset(contentType, charset_0));
  }
  function invoke$read(responseCharsetFallback, call, body) {
    var tmp0_elvis_lhs = charset_0(call.x3u());
    var actualCharset = tmp0_elvis_lhs == null ? responseCharsetFallback : tmp0_elvis_lhs;
    get_LOGGER_2().r2j('Reading response body for ' + call.g3x().p3x().toString() + ' as String with charset ' + actualCharset.toString());
    return readText_0(body, actualCharset);
  }
  function invoke$addAcceptCharsetHeader(_this__u8e3s4, value) {
    if (value == null || !(_this__u8e3s4.z3v_1.p2e('Accept-Charset') == null))
      return Unit_instance;
    get_LOGGER_2().r2j('Adding Accept-Charset=' + value + ' to ' + _this__u8e3s4.x3v_1.toString());
    _this__u8e3s4.z3v_1.l2f('Accept-Charset', value);
  }
  function HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation) {
    this.u4c_1 = $acceptCharsetHeader;
    this.v4c_1 = $requestCharset;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda).y4c = function (request, content, $completion) {
    var tmp = this.z4c(request, content, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpPlainText$lambda$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.y4c(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        if (tmp === 0) {
          this.o8_1 = 1;
          invoke$addAcceptCharsetHeader(this.w4c_1, this.u4c_1);
          var tmp_0 = this.x4c_1;
          if (!(typeof tmp_0 === 'string'))
            return null;
          var contentType_0 = contentType(this.w4c_1);
          if (!(contentType_0 == null) && !(contentType_0.y2m_1 === Text_getInstance().i2m_1.y2m_1)) {
            return null;
          }
          return invoke$wrapContent(this.v4c_1, this.w4c_1, this.x4c_1, contentType_0);
        } else if (tmp === 1) {
          throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpPlainText$lambda$slambda).z4c = function (request, content, completion) {
    var i = new HttpPlainText$lambda$slambda(this.u4c_1, this.v4c_1, completion);
    i.w4c_1 = request;
    i.x4c_1 = content;
    return i;
  };
  function HttpPlainText$lambda$slambda_0($acceptCharsetHeader, $requestCharset, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation);
    var l = function (request, content, $completion) {
      return i.y4c(request, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation) {
    this.i4d_1 = $responseCharsetFallback;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda_1).n4d = function ($this$transformResponseBody, response, content, requestedType, $completion) {
    var tmp = this.o4d($this$transformResponseBody, response, content, requestedType, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpPlainText$lambda$slambda_1).p4d = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
    var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
    return this.n4d(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            if (!this.m4d_1.k2j_1.equals(PrimitiveClasses_getInstance().rb()))
              return null;
            this.n8_1 = 1;
            suspendResult = readRemaining(this.l4d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return invoke$read(this.i4d_1, this.k4d_1.n3x(), bodyBytes);
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
  protoOf(HttpPlainText$lambda$slambda_1).o4d = function ($this$transformResponseBody, response, content, requestedType, completion) {
    var i = new HttpPlainText$lambda$slambda_1(this.i4d_1, completion);
    i.j4d_1 = $this$transformResponseBody;
    i.k4d_1 = response;
    i.l4d_1 = content;
    i.m4d_1 = requestedType;
    return i;
  };
  function HttpPlainText$lambda$slambda_2($responseCharsetFallback, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation);
    var l = function ($this$transformResponseBody, response, content, requestedType, $completion) {
      return i.n4d($this$transformResponseBody, response, content, requestedType, $completion);
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
    this.q4d_1 = true;
    this.r4d_1 = false;
  }
  function isRedirect(_this__u8e3s4) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var tmp0_subject = _this__u8e3s4.h2u_1;
    return tmp0_subject === Companion_getInstance_1().q2s_1.h2u_1 || tmp0_subject === Companion_getInstance_1().r2s_1.h2u_1 || (tmp0_subject === Companion_getInstance_1().w2s_1.h2u_1 || (tmp0_subject === Companion_getInstance_1().x2s_1.h2u_1 || tmp0_subject === Companion_getInstance_1().s2s_1.h2u_1)) ? true : false;
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
    var checkHttpMethod = $this$createClientPlugin.y43_1.q4d_1;
    var allowHttpsDowngrade = $this$createClientPlugin.y43_1.r4d_1;
    var tmp = Send_instance;
    $this$createClientPlugin.b44(tmp, HttpRedirect$lambda$slambda_0(checkHttpMethod, allowHttpsDowngrade, $this$createClientPlugin, null));
    return Unit_instance;
  }
  function invoke$handleCall(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion) {
    var tmp = new $invoke$handleCallCOROUTINE$(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    this.p4e_1 = $checkHttpMethod;
    this.q4e_1 = $allowHttpsDowngrade;
    this.r4e_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRedirect$lambda$slambda).i4a = function ($this$on, request, $completion) {
    var tmp = this.j4a($this$on, request, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpRedirect$lambda$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.i4a(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
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
            suspendResult = this.s4e_1.m4a(this.t4e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var origin = suspendResult;
            if (this.p4e_1 && !get_ALLOWED_FOR_REDIRECT().j2(origin.g3x().o3x())) {
              return origin;
            }

            this.n8_1 = 2;
            suspendResult = invoke$handleCall(this.s4e_1, this.t4e_1, origin, this.q4e_1, this.r4e_1.x43_1, this);
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
  protoOf(HttpRedirect$lambda$slambda).j4a = function ($this$on, request, completion) {
    var i = new HttpRedirect$lambda$slambda(this.p4e_1, this.q4e_1, this.r4e_1, completion);
    i.s4e_1 = $this$on;
    i.t4e_1 = request;
    return i;
  };
  function HttpRedirect$lambda$slambda_0($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    var i = new HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation);
    var l = function ($this$on, request, $completion) {
      return i.i4a($this$on, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $invoke$handleCallCOROUTINE$(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a4e_1 = _this__u8e3s4;
    this.b4e_1 = context;
    this.c4e_1 = origin;
    this.d4e_1 = allowHttpsDowngrade;
    this.e4e_1 = client;
  }
  protoOf($invoke$handleCallCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            this.f4e_1 = this.c4e_1;
            this.g4e_1 = this.b4e_1;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.n8_1 = 4;
              continue $sm;
            }

            var previousProtocol = this.f4e_1.g3x().p3x().m2v_1;
            var previousAuthority = get_authority(this.f4e_1.g3x().p3x());
            if (!isRedirect(this.f4e_1.x3u().w3x()))
              return this.f4e_1;
            var location = this.f4e_1.x3u().j2r().p2e('Location');
            if (location == null) {
              get_LOGGER_3().p2j('Location header missing from redirect response ' + this.f4e_1.g3x().p3x().toString() + '; returning response as is');
              return this.f4e_1;
            }

            this.e4e_1.y3t_1.u3e(get_HttpResponseRedirectEvent(), this.f4e_1.x3u());
            get_LOGGER_3().r2j('Received redirect response to ' + location + ' for request ' + this.f4e_1.g3x().p3x().toString());
            var tmp_0 = this;
            var this_0 = new HttpRequestBuilder();
            this_0.r41(this.g4e_1);
            this_0.x3v_1.w2u_1.y2();
            takeFrom(this_0.x3v_1, location);
            if (!this.d4e_1 && isSecure(previousProtocol) && !isSecure(this_0.x3v_1.z2u())) {
              get_LOGGER_3().r2j('Blocked redirect from ' + this.f4e_1.g3x().p3x().toString() + ' to ' + location + ' due to HTTPS downgrade');
              return this.f4e_1;
            }

            if (!(previousAuthority === get_authority_0(this_0.x3v_1))) {
              this_0.z3v_1.p2f('Authorization');
              get_LOGGER_3().r2j('Removing Authorization header for cross-authority redirect: ' + (previousAuthority + ' -> ' + this_0.x3v_1.j2w()));
            }

            tmp_0.g4e_1 = this_0;
            this.n8_1 = 2;
            suspendResult = this.a4e_1.m4a(this.g4e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.f4e_1 = suspendResult;
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
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_2().k2r_1, Companion_getInstance_2().p2r_1]);
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
    this.c4f_1 = _this__u8e3s4;
  }
  protoOf($invokeCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var tmp0 = this.c4f_1.d4f_1;
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
    this.d4f_1 = p0;
  }
  protoOf(PipelineContext$proceed$ref).c2a = function ($completion) {
    var tmp = new $invokeCOROUTINE$(this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(PipelineContext$proceed$ref).ea = function ($completion) {
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
    this.m4f_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequestContext$install$slambda).q3u = function ($this$intercept, it, $completion) {
    var tmp = this.r3u($this$intercept, it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(SetupRequestContext$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3u(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
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
            suspendResult = this.m4f_1(this.n4f_1.t2i_1, PipelineContext$proceed$ref_0(this.n4f_1), this);
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
  protoOf(SetupRequestContext$install$slambda).r3u = function ($this$intercept, it, completion) {
    var i = new SetupRequestContext$install$slambda(this.m4f_1, completion);
    i.n4f_1 = $this$intercept;
    i.o4f_1 = it;
    return i;
  };
  function SetupRequestContext$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequestContext$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.q3u($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function SetupRequestContext() {
  }
  protoOf(SetupRequestContext).p4f = function (client, handler) {
    var tmp = Phases_getInstance().z42_1;
    client.s3t_1.x2i(tmp, SetupRequestContext$install$slambda_0(handler, null));
  };
  protoOf(SetupRequestContext).e43 = function (client, handler) {
    return this.p4f(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
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
    $this$createClientPlugin.b44(tmp, HttpRequestLifecycle$lambda$slambda_0($this$createClientPlugin, null));
    return Unit_instance;
  }
  function HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation) {
    this.y4f_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestLifecycle$lambda$slambda).c4g = function (request, proceed, $completion) {
    var tmp = this.d4g(request, proceed, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.c4g(tmp, (!(p2 == null) ? isSuspendFunction(p2, 0) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 6;
            this.b4g_1 = SupervisorJob(this.z4f_1.b3w_1);
            attachToClientEngineJob(this.b4g_1, ensureNotNull(this.y4f_1.x43_1.r3t_1.a9(Key_instance)));
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 4;
            this.o8_1 = 3;
            this.z4f_1.b3w_1 = this.b4g_1;
            this.n8_1 = 2;
            suspendResult = this.a4g_1(this);
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
              this.b4g_1.k1l(cause);
              throw cause;
            } else {
              throw this.q8_1;
            }

          case 4:
            this.o8_1 = 6;
            var t = this.q8_1;
            this.b4g_1.l1l();
            throw t;
          case 5:
            this.o8_1 = 6;
            this.b4g_1.l1l();
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
  protoOf(HttpRequestLifecycle$lambda$slambda).d4g = function (request, proceed, completion) {
    var i = new HttpRequestLifecycle$lambda$slambda(this.y4f_1, completion);
    i.z4f_1 = request;
    i.a4g_1 = proceed;
    return i;
  };
  function HttpRequestLifecycle$lambda$slambda_0($this_createClientPlugin, resultContinuation) {
    var i = new HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation);
    var l = function (request, proceed, $completion) {
      return i.c4g(request, proceed, $completion);
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
    this.e4g_1 = request;
    this.f4g_1 = retryCount;
    this.g4g_1 = response;
    this.h4g_1 = cause;
  }
  function randomMs($this, randomizationMs) {
    return equalsLong(randomizationMs, new Long(0, 0)) ? new Long(0, 0) : Default_getInstance().oi(randomizationMs);
  }
  function HttpRequestRetryConfig$delay$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetryConfig$delay$slambda).r4g = function (it, $completion) {
    var tmp = this.s4g(it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).i9 = function (p1, $completion) {
    return this.r4g(p1 instanceof Long ? p1 : THROW_CCE(), $completion);
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
            suspendResult = delay(this.q4g_1, this);
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
  protoOf(HttpRequestRetryConfig$delay$slambda).s4g = function (it, completion) {
    var i = new HttpRequestRetryConfig$delay$slambda(completion);
    i.q4g_1 = it;
    return i;
  };
  function HttpRequestRetryConfig$delay$slambda_0(resultContinuation) {
    var i = new HttpRequestRetryConfig$delay$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.r4g(it, $completion);
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
    var it = response.w3x().h2u_1;
    return 500 <= it ? it <= 599 : false;
  }
  function HttpRequestRetryConfig$delayMillis$lambda($respectRetryAfterHeader, $block) {
    return function (_this__u8e3s4, it) {
      var tmp;
      if ($respectRetryAfterHeader) {
        var tmp0_safe_receiver = _this__u8e3s4.u4g_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2r();
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
    tmp.z4g_1 = HttpRequestRetryConfig$delay$slambda_0(null);
    var tmp_0 = this;
    tmp_0.a4h_1 = HttpRequestRetryConfig$modifyRequest$lambda;
    this.b4h_1 = 0;
    this.c4h(3);
    this.d4h();
  }
  protoOf(HttpRequestRetryConfig).e4h = function () {
    var tmp = this.w4g_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetry');
    }
  };
  protoOf(HttpRequestRetryConfig).f4h = function () {
    var tmp = this.x4g_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetryOnException');
    }
  };
  protoOf(HttpRequestRetryConfig).g4h = function () {
    var tmp = this.y4g_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('delayMillis');
    }
  };
  protoOf(HttpRequestRetryConfig).h4h = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.b4h_1 = maxRetries;
    this.w4g_1 = block;
  };
  protoOf(HttpRequestRetryConfig).i4h = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.b4h_1 = maxRetries;
    this.x4g_1 = block;
  };
  protoOf(HttpRequestRetryConfig).j4h = function (maxRetries, retryOnTimeout) {
    this.i4h(maxRetries, HttpRequestRetryConfig$retryOnException$lambda(retryOnTimeout));
  };
  protoOf(HttpRequestRetryConfig).k4h = function (maxRetries, retryOnTimeout, $super) {
    maxRetries = maxRetries === VOID ? -1 : maxRetries;
    retryOnTimeout = retryOnTimeout === VOID ? false : retryOnTimeout;
    var tmp;
    if ($super === VOID) {
      this.j4h(maxRetries, retryOnTimeout);
      tmp = Unit_instance;
    } else {
      tmp = $super.j4h.call(this, maxRetries, retryOnTimeout);
    }
    return tmp;
  };
  protoOf(HttpRequestRetryConfig).l4h = function (maxRetries) {
    this.h4h(maxRetries, HttpRequestRetryConfig$retryOnServerErrors$lambda);
  };
  protoOf(HttpRequestRetryConfig).c4h = function (maxRetries) {
    this.l4h(maxRetries);
    this.k4h(maxRetries);
  };
  protoOf(HttpRequestRetryConfig).m4h = function (respectRetryAfterHeader, block) {
    var tmp = this;
    tmp.y4g_1 = HttpRequestRetryConfig$delayMillis$lambda(respectRetryAfterHeader, block);
  };
  protoOf(HttpRequestRetryConfig).n4h = function (base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader) {
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
    this.m4h(respectRetryAfterHeader, HttpRequestRetryConfig$exponentialDelay$lambda(base, baseDelayMs, maxDelayMs, this, randomizationMs));
  };
  protoOf(HttpRequestRetryConfig).d4h = function (base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader, $super) {
    base = base === VOID ? 2.0 : base;
    baseDelayMs = baseDelayMs === VOID ? new Long(1000, 0) : baseDelayMs;
    maxDelayMs = maxDelayMs === VOID ? new Long(60000, 0) : maxDelayMs;
    randomizationMs = randomizationMs === VOID ? new Long(1000, 0) : randomizationMs;
    respectRetryAfterHeader = respectRetryAfterHeader === VOID ? true : respectRetryAfterHeader;
    var tmp;
    if ($super === VOID) {
      this.n4h(base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader);
      tmp = Unit_instance;
    } else {
      tmp = $super.n4h.call(this, base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader);
    }
    return tmp;
  };
  function HttpRetryShouldRetryContext(retryCount) {
    this.o4h_1 = retryCount;
  }
  function HttpRetryDelayContext(request, response, cause) {
    this.t4g_1 = request;
    this.u4g_1 = response;
    this.v4g_1 = cause;
  }
  function HttpRetryModifyRequestContext(request, response, cause, retryCount) {
    this.p4h_1 = request;
    this.q4h_1 = response;
    this.r4h_1 = cause;
    this.s4h_1 = retryCount;
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
    var shouldRetry = $this$createClientPlugin.y43_1.e4h();
    var shouldRetryOnException = $this$createClientPlugin.y43_1.f4h();
    var delayMillis = $this$createClientPlugin.y43_1.g4h();
    var delay = $this$createClientPlugin.y43_1.z4g_1;
    var maxRetries = $this$createClientPlugin.y43_1.b4h_1;
    var modifyRequest = $this$createClientPlugin.y43_1.a4h_1;
    $this$createClientPlugin.f4i(HttpRequestRetry$lambda$slambda_0(maxRetries, null));
    var tmp = Send_instance;
    $this$createClientPlugin.b44(tmp, HttpRequestRetry$lambda$slambda_2(shouldRetry, shouldRetryOnException, maxRetries, delayMillis, modifyRequest, $this$createClientPlugin, delay, null));
    return Unit_instance;
  }
  function HttpRequestRetry$lambda$prepareRequest$lambda($subRequest) {
    return function (cause) {
      var tmp = $subRequest.b3w_1;
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
    return retryCount < maxRetries && shouldRetry(new HttpRetryShouldRetryContext(retryCount + 1 | 0), call.g3x(), call.x3u());
  }
  function invoke$shouldRetryOnException(retryCount, maxRetries, shouldRetry, subRequest, cause) {
    return retryCount < maxRetries && shouldRetry(new HttpRetryShouldRetryContext(retryCount + 1 | 0), subRequest, cause);
  }
  function invoke$prepareRequest(request) {
    var subRequest = (new HttpRequestBuilder()).g4i(request);
    var tmp = request.b3w_1;
    tmp.l1f(HttpRequestRetry$lambda$prepareRequest$lambda(subRequest));
    return subRequest;
  }
  function HttpRequestRetry$lambda$slambda($maxRetries, resultContinuation) {
    this.p4i_1 = $maxRetries;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetry$lambda$slambda).t4i = function ($this$onRequest, request, _unused_var__etf5q3, $completion) {
    var tmp = this.u4i($this$onRequest, request, _unused_var__etf5q3, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpRequestRetry$lambda$slambda).v4i = function (p1, p2, p3, $completion) {
    var tmp = p1 instanceof OnRequestContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
    return this.t4i(tmp, tmp_0, !(p3 == null) ? p3 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetry$lambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        if (tmp === 0) {
          this.o8_1 = 1;
          var tmp0_elvis_lhs = this.r4i_1.c3w_1.z2c(get_MaxRetriesPerRequestAttributeKey());
          var maxRetriesValue = tmp0_elvis_lhs == null ? this.p4i_1 : tmp0_elvis_lhs;
          this.r4i_1.c3w_1.b2d(get_MaxRetriesPerRequestAttributeKey(), maxRetriesValue);
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
  protoOf(HttpRequestRetry$lambda$slambda).u4i = function ($this$onRequest, request, _unused_var__etf5q3, completion) {
    var i = new HttpRequestRetry$lambda$slambda(this.p4i_1, completion);
    i.q4i_1 = $this$onRequest;
    i.r4i_1 = request;
    i.s4i_1 = _unused_var__etf5q3;
    return i;
  };
  function HttpRequestRetry$lambda$slambda_0($maxRetries, resultContinuation) {
    var i = new HttpRequestRetry$lambda$slambda($maxRetries, resultContinuation);
    var l = function ($this$onRequest, request, _unused_var__etf5q3, $completion) {
      return i.t4i($this$onRequest, request, _unused_var__etf5q3, $completion);
    };
    l.$arity = 3;
    return l;
  }
  function HttpRequestRetry$lambda$slambda_1($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation) {
    this.e4j_1 = $shouldRetry;
    this.f4j_1 = $shouldRetryOnException;
    this.g4j_1 = $maxRetries;
    this.h4j_1 = $delayMillis;
    this.i4j_1 = $modifyRequest;
    this.j4j_1 = $this_createClientPlugin;
    this.k4j_1 = $delay;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetry$lambda$slambda_1).i4a = function ($this$on, request, $completion) {
    var tmp = this.j4a($this$on, request, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.i4a(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 8;
            this.o4j_1 = 0;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.m4j_1.c3w_1.z2c(get_ShouldRetryPerRequestAttributeKey());
            tmp_0.v4j_1 = tmp0_elvis_lhs == null ? this.e4j_1 : tmp0_elvis_lhs;
            var tmp_1 = this;
            var tmp1_elvis_lhs = this.m4j_1.c3w_1.z2c(get_ShouldRetryOnExceptionPerRequestAttributeKey());
            tmp_1.t4j_1 = tmp1_elvis_lhs == null ? this.f4j_1 : tmp1_elvis_lhs;
            var tmp_2 = this;
            var tmp2_elvis_lhs = this.m4j_1.c3w_1.z2c(get_MaxRetriesPerRequestAttributeKey());
            tmp_2.u4j_1 = tmp2_elvis_lhs == null ? this.g4j_1 : tmp2_elvis_lhs;
            var tmp_3 = this;
            var tmp3_elvis_lhs = this.m4j_1.c3w_1.z2c(get_RetryDelayPerRequestAttributeKey());
            tmp_3.p4j_1 = tmp3_elvis_lhs == null ? this.h4j_1 : tmp3_elvis_lhs;
            var tmp_4 = this;
            var tmp4_elvis_lhs = this.m4j_1.c3w_1.z2c(get_ModifyRequestPerRequestAttributeKey());
            tmp_4.w4j_1 = tmp4_elvis_lhs == null ? this.i4j_1 : tmp4_elvis_lhs;
            this.q4j_1 = null;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.n8_1 = 9;
              continue $sm;
            }

            this.s4j_1 = invoke$prepareRequest(this.m4j_1);
            this.o8_1 = 5;
            if (!(this.q4j_1 == null)) {
              var modifyRequestContext = new HttpRetryModifyRequestContext(this.m4j_1, this.q4j_1.g4g_1, this.q4j_1.h4g_1, this.q4j_1.f4g_1);
              this.w4j_1(modifyRequestContext, this.s4j_1);
            }

            this.n8_1 = 2;
            suspendResult = this.l4j_1.m4a(this.s4j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n4j_1 = suspendResult;
            if (!invoke$shouldRetry(this.o4j_1, this.u4j_1, this.v4j_1, this.n4j_1)) {
              this.n8_1 = 4;
              suspendResult = throwOnInvalidResponseBody(this.n4j_1.x3u(), this);
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
            this.o4j_1 = this.o4j_1 + 1 | 0;
            tmp_5.r4j_1 = new HttpRetryEventData(this.s4j_1, this.o4j_1, this.n4j_1.x3u(), null);
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
              if (!invoke$shouldRetryOnException(this.o4j_1, this.u4j_1, this.t4j_1, this.s4j_1, cause)) {
                throw cause;
              }
              this.o4j_1 = this.o4j_1 + 1 | 0;
              tmp_7.r4j_1 = new HttpRetryEventData(this.s4j_1, this.o4j_1, null, cause);
              this.n8_1 = 6;
              continue $sm;
            } else {
              throw this.q8_1;
            }

          case 6:
            this.o8_1 = 8;
            var retryData = this.r4j_1;
            this.q4j_1 = retryData;
            this.j4j_1.x43_1.y3t_1.u3e(get_HttpRequestRetryEvent(), this.q4j_1);
            var delayContext = new HttpRetryDelayContext(this.q4j_1.e4g_1, this.q4j_1.g4g_1, this.q4j_1.h4g_1);
            this.n8_1 = 7;
            suspendResult = this.k4j_1(this.p4j_1(delayContext, this.o4j_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            get_LOGGER_5().r2j('Retrying request ' + this.m4j_1.x3v_1.toString() + ' attempt: ' + this.o4j_1);
            this.n8_1 = 1;
            continue $sm;
          case 8:
            throw this.q8_1;
          case 9:
            return this.n4j_1;
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
  protoOf(HttpRequestRetry$lambda$slambda_1).j4a = function ($this$on, request, completion) {
    var i = new HttpRequestRetry$lambda$slambda_1(this.e4j_1, this.f4j_1, this.g4j_1, this.h4j_1, this.i4j_1, this.j4j_1, this.k4j_1, completion);
    i.l4j_1 = $this$on;
    i.m4j_1 = request;
    return i;
  };
  function HttpRequestRetry$lambda$slambda_2($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation) {
    var i = new HttpRequestRetry$lambda$slambda_1($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation);
    var l = function ($this$on, request, $completion) {
      return i.i4a($this$on, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $throwOnInvalidResponseBodyCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b4i_1 = _this__u8e3s4;
  }
  protoOf($throwOnInvalidResponseBodyCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 6;
            if (get_isSaved(this.b4i_1)) {
              this.c4i_1 = this.b4i_1.v3x();
              this.n8_1 = 1;
              continue $sm;
            } else {
              this.d4i_1 = false;
              this.n8_1 = 4;
              continue $sm;
            }

          case 1:
            this.o8_1 = 5;
            this.n8_1 = 2;
            suspendResult = this.c4i_1.z21(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.e4i_1 = suspendResult;
            this.o8_1 = 6;
            this.n8_1 = 3;
            continue $sm;
          case 3:
            var tmp_0 = this.e4i_1;
            this.o8_1 = 6;
            var this_0 = this.c4i_1;
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

            this.d4i_1 = tmp_0;
            this.n8_1 = 4;
            continue $sm;
          case 4:
            return this.d4i_1;
          case 5:
            this.o8_1 = 6;
            var t = this.q8_1;
            var this_2 = this.c4i_1;
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
    this.g4k_1 = $plugin;
    this.h4k_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpSend$Plugin$install$slambda).q3u = function ($this$intercept, content, $completion) {
    var tmp = this.r3u($this$intercept, content, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpSend$Plugin$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3u(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpSend$Plugin$install$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            var tmp_0 = this.j4k_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var message = trimMargin('\n|Fail to prepare request body for sending. \n|The body type is: ' + toString(getKClassFromExpression(this.j4k_1)) + ', with Content-Type: ' + toString_0(contentType(this.i4k_1.t2i_1)) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.');
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp0 = this.i4k_1.t2i_1;
            var body = this.j4k_1;
            if (body == null) {
              tmp0.a3w_1 = NullBody_instance;
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
              tmp0.s41(new TypeInfo(tmp_1, tmp_2));
            } else {
              if (body instanceof OutgoingContent) {
                tmp0.a3w_1 = body;
                tmp0.s41(null);
              } else {
                tmp0.a3w_1 = body;
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
                tmp0.s41(new TypeInfo(tmp_4, tmp_5));
              }
            }

            var maxRetries = this.i4k_1.t2i_1.c3w_1.z2c(get_MaxRetriesPerRequestAttributeKey());
            var tmp_7;
            if (!(maxRetries == null) && maxRetries >= this.g4k_1.k4k_1) {
              var tmp_8;
              if (maxRetries < 2147483647) {
                tmp_8 = maxRetries + 1 | 0;
              } else {
                tmp_8 = maxRetries;
              }
              tmp_7 = tmp_8;
            } else {
              tmp_7 = this.g4k_1.k4k_1;
            }

            var maxSendCount = tmp_7;
            var realSender = new DefaultSender(maxSendCount, this.h4k_1);
            var interceptedSender = realSender;
            var _iterator__ex2g4s = reversed(this.g4k_1.l4k_1).t();
            while (_iterator__ex2g4s.u()) {
              var interceptor = _iterator__ex2g4s.v();
              interceptedSender = new InterceptedSender(interceptor, interceptedSender);
            }

            this.n8_1 = 1;
            suspendResult = interceptedSender.x4j(this.i4k_1.t2i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var call = suspendResult;
            this.n8_1 = 2;
            suspendResult = this.i4k_1.x2h(call, this);
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
  protoOf(HttpSend$Plugin$install$slambda).r3u = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.g4k_1, this.h4k_1, completion);
    i.i4k_1 = $this$intercept;
    i.j4k_1 = content;
    return i;
  };
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, content, $completion) {
      return i.q3u($this$intercept, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$_0(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u4k_1 = _this__u8e3s4;
    this.v4k_1 = requestBuilder;
  }
  protoOf($executeCOROUTINE$_0).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var tmp0_safe_receiver = this.u4k_1.z4k_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel(tmp0_safe_receiver);
            }

            if (this.u4k_1.y4k_1 >= this.u4k_1.w4k_1) {
              throw new SendCountExceedException('Max send count ' + this.u4k_1.w4k_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var _unary__edvuaz = this.u4k_1.y4k_1;
            this.u4k_1.y4k_1 = _unary__edvuaz + 1 | 0;
            this.n8_1 = 1;
            suspendResult = this.u4k_1.x4k_1.u3t_1.s2i(this.v4k_1, this.v4k_1.a3w_1, this);
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
            this.u4k_1.z4k_1 = call;
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
    this.a4l_1 = 20;
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
    tmp.b4l_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin).m1 = function () {
    return this.b4l_1;
  };
  protoOf(Plugin).c4l = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config();
    block(this_0);
    var config = this_0;
    return new HttpSend(config.a4l_1);
  };
  protoOf(Plugin).c3x = function (block) {
    return this.c4l(block);
  };
  protoOf(Plugin).d4l = function (plugin, scope) {
    var tmp = Phases_getInstance().d43_1;
    scope.s3t_1.x2i(tmp, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  protoOf(Plugin).d3x = function (plugin, scope) {
    return this.d4l(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.e4l_1 = interceptor;
    this.f4l_1 = nextSender;
  }
  protoOf(InterceptedSender).x4j = function (requestBuilder, $completion) {
    return this.e4l_1(this.f4l_1, requestBuilder, $completion);
  };
  function DefaultSender(maxSendCount, client) {
    this.w4k_1 = maxSendCount;
    this.x4k_1 = client;
    this.y4k_1 = 0;
    this.z4k_1 = null;
  }
  protoOf(DefaultSender).x4j = function (requestBuilder, $completion) {
    var tmp = new $executeCOROUTINE$_0(this, requestBuilder, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  function HttpSend(maxSendCount) {
    Plugin_getInstance();
    maxSendCount = maxSendCount === VOID ? 20 : maxSendCount;
    this.k4k_1 = maxSendCount;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.l4k_1 = ArrayList_init_$Create$();
  }
  protoOf(HttpSend).g4l = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.l4k_1.b1(block);
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
    var tmp = request.x3v_1.j2w();
    var tmp0_safe_receiver = request.h4l(HttpTimeoutCapability_instance);
    HttpRequestTimeoutException.call($this, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l4l());
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
    this.m4l_1 = url;
    this.n4l_1 = timeoutMillis;
  }
  protoOf(HttpRequestTimeoutException).u1l = function () {
    return new HttpRequestTimeoutException(this.m4l_1, this.n4l_1, this.cause);
  };
  function HttpTimeoutConfig_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    requestTimeoutMillis = requestTimeoutMillis === VOID ? null : requestTimeoutMillis;
    connectTimeoutMillis = connectTimeoutMillis === VOID ? null : connectTimeoutMillis;
    socketTimeoutMillis = socketTimeoutMillis === VOID ? null : socketTimeoutMillis;
    HttpTimeoutConfig.call($this);
    $this.o4l(requestTimeoutMillis);
    $this.p4l(connectTimeoutMillis);
    $this.q4l(socketTimeoutMillis);
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
    this.r4l_1 = new Long(-1, 2147483647);
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
    tmp.s4l_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_2;
  function Companion_getInstance_9() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  protoOf(HttpTimeoutConfig).o4l = function (value) {
    this.i4l_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).l4l = function () {
    return this.i4l_1;
  };
  protoOf(HttpTimeoutConfig).p4l = function (value) {
    this.j4l_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).t4l = function () {
    return this.j4l_1;
  };
  protoOf(HttpTimeoutConfig).q4l = function (value) {
    this.k4l_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).u4l = function () {
    return this.k4l_1;
  };
  protoOf(HttpTimeoutConfig).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof HttpTimeoutConfig))
      THROW_CCE();
    if (!equals(this.i4l_1, other.i4l_1))
      return false;
    if (!equals(this.j4l_1, other.j4l_1))
      return false;
    if (!equals(this.k4l_1, other.k4l_1))
      return false;
    return true;
  };
  protoOf(HttpTimeoutConfig).hashCode = function () {
    var tmp0_safe_receiver = this.i4l_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.j4l_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.k4l_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  function HttpTimeoutConfig() {
    Companion_getInstance_9();
    this.i4l_1 = new Long(0, 0);
    this.j4l_1 = new Long(0, 0);
    this.k4l_1 = new Long(0, 0);
  }
  function get_supportsRequestTimeout(_this__u8e3s4) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var tmp;
    var tmp_0;
    if (!isWebsocket(_this__u8e3s4.x3v_1.z2u())) {
      var tmp_1 = _this__u8e3s4.a3w_1;
      tmp_0 = !(tmp_1 instanceof ClientUpgradeContent);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_2 = _this__u8e3s4.a3w_1;
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
    var executionContext = request.b3w_1;
    var tmp = new CoroutineName('request-timeout');
    var killer = launch(_this__u8e3s4, tmp, VOID, applyRequestTimeout$slambda_0(requestTimeout, request, executionContext, null));
    var tmp_0 = request.b3w_1;
    tmp_0.l1f(applyRequestTimeout$lambda(killer));
  }
  function timeout(_this__u8e3s4, block) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var tmp = HttpTimeoutCapability_instance;
    // Inline function 'kotlin.apply' call
    var this_0 = HttpTimeoutConfig_init_$Create$();
    block(this_0);
    return _this__u8e3s4.v4l(tmp, this_0);
  }
  function HttpTimeoutConfig$_init_$ref_dl1k0m() {
    return function () {
      return HttpTimeoutConfig_init_$Create$();
    };
  }
  function HttpTimeout$lambda($this$createClientPlugin) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var requestTimeoutMillis = $this$createClientPlugin.y43_1.l4l();
    var connectTimeoutMillis = $this$createClientPlugin.y43_1.t4l();
    var socketTimeoutMillis = $this$createClientPlugin.y43_1.u4l();
    var tmp = Send_instance;
    $this$createClientPlugin.b44(tmp, HttpTimeout$lambda$slambda_0(connectTimeoutMillis, socketTimeoutMillis, requestTimeoutMillis, null));
    return Unit_instance;
  }
  function invoke$hasNotNullTimeouts(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, supportsRequestTimeout) {
    return supportsRequestTimeout && !(requestTimeoutMillis == null) || !(connectTimeoutMillis == null) || !(socketTimeoutMillis == null);
  }
  function HttpTimeout$lambda$slambda($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation) {
    this.e4m_1 = $connectTimeoutMillis;
    this.f4m_1 = $socketTimeoutMillis;
    this.g4m_1 = $requestTimeoutMillis;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpTimeout$lambda$slambda).i4a = function ($this$on, request, $completion) {
    var tmp = this.j4a($this$on, request, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpTimeout$lambda$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.i4a(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpTimeout$lambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var supportsRequestTimeout = get_supportsRequestTimeout(this.i4m_1);
            var configuration = this.i4m_1.h4l(HttpTimeoutCapability_instance);
            if (configuration == null && invoke$hasNotNullTimeouts(this.g4m_1, this.e4m_1, this.f4m_1, supportsRequestTimeout)) {
              configuration = HttpTimeoutConfig_init_$Create$();
              this.i4m_1.v4l(HttpTimeoutCapability_instance, configuration);
            }

            var tmp0_safe_receiver = configuration;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp0_elvis_lhs = tmp0_safe_receiver.t4l();
              tmp0_safe_receiver.p4l(tmp0_elvis_lhs == null ? this.e4m_1 : tmp0_elvis_lhs);
              var tmp1_elvis_lhs = tmp0_safe_receiver.u4l();
              tmp0_safe_receiver.q4l(tmp1_elvis_lhs == null ? this.f4m_1 : tmp1_elvis_lhs);
              if (supportsRequestTimeout) {
                var tmp2_elvis_lhs = tmp0_safe_receiver.l4l();
                tmp0_safe_receiver.o4l(tmp2_elvis_lhs == null ? this.g4m_1 : tmp2_elvis_lhs);
                applyRequestTimeout(this.h4m_1, this.i4m_1, tmp0_safe_receiver.l4l());
              }
            }

            this.n8_1 = 1;
            suspendResult = this.h4m_1.m4a(this.i4m_1, this);
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
  protoOf(HttpTimeout$lambda$slambda).j4a = function ($this$on, request, completion) {
    var i = new HttpTimeout$lambda$slambda(this.e4m_1, this.f4m_1, this.g4m_1, completion);
    i.h4m_1 = $this$on;
    i.i4m_1 = request;
    return i;
  };
  function HttpTimeout$lambda$slambda_0($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation) {
    var i = new HttpTimeout$lambda$slambda($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation);
    var l = function ($this$on, request, $completion) {
      return i.i4a($this$on, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function applyRequestTimeout$slambda($requestTimeout, $request, $executionContext, resultContinuation) {
    this.r4m_1 = $requestTimeout;
    this.s4m_1 = $request;
    this.t4m_1 = $executionContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(applyRequestTimeout$slambda).u2a = function ($this$launch, $completion) {
    var tmp = this.v2a($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(applyRequestTimeout$slambda).i9 = function (p1, $completion) {
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
            suspendResult = delay(this.r4m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cause = HttpRequestTimeoutException_init_$Create$(this.s4m_1);
            var this_0 = get_LOGGER_6();
            if (get_isTraceEnabled(this_0)) {
              this_0.r2j('Request timeout: ' + this.s4m_1.x3v_1.toString());
            }

            cancel_2(this.t4m_1, ensureNotNull(cause.message), cause);
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
    var i = new applyRequestTimeout$slambda(this.r4m_1, this.s4m_1, this.t4m_1, completion);
    i.u4m_1 = $this$launch;
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
    return _this__u8e3s4.n3x().h3x().a2d(get_RESPONSE_BODY_SAVED());
  }
  function SaveBodyPluginConfig() {
    this.v4m_1 = false;
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
    var tmp = Phases_getInstance_1().t43_1;
    $this$createClientPlugin.x43_1.v3t_1.x2i(tmp, SaveBody$lambda$slambda_0(null));
    return Unit_instance;
  }
  function SaveBody$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SaveBody$lambda$slambda).q43 = function ($this$intercept, response, $completion) {
    var tmp = this.r43($this$intercept, response, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(SaveBody$lambda$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q43(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SaveBody$lambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 6;
            this.i4n_1 = this.f4n_1.n3x();
            this.g4n_1 = this.i4n_1.h3x();
            if (this.g4n_1.a2d(get_SKIP_SAVE_BODY())) {
              var this_0 = get_LOGGER_7();
              if (get_isTraceEnabled(this_0)) {
                this_0.r2j('Skipping body saving for ' + this.i4n_1.g3x().p3x().toString());
              }
              return Unit_instance;
            }

            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 5;
            var this_1 = get_LOGGER_7();
            if (get_isTraceEnabled(this_1)) {
              this_1.r2j('Saving body for ' + this.i4n_1.g3x().p3x().toString());
            }

            this.n8_1 = 2;
            suspendResult = save(this.i4n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h4n_1 = suspendResult.x3u();
            this.o8_1 = 6;
            this.n8_1 = 3;
            continue $sm;
          case 3:
            var tmp_0 = this.h4n_1;
            this.o8_1 = 6;
            this.e4n_1;
            var tmp_1;
            try {
              cancel_1(this.f4n_1.v3x());
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
            this.g4n_1.b2d(get_RESPONSE_BODY_SAVED(), Unit_instance);
            this.n8_1 = 4;
            suspendResult = this.e4n_1.x2h(savedResponse, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            this.o8_1 = 6;
            var t = this.q8_1;
            this.e4n_1;
            var tmp_3;
            try {
              cancel_1(this.f4n_1.v3x());
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
  protoOf(SaveBody$lambda$slambda).r43 = function ($this$intercept, response, completion) {
    var i = new SaveBody$lambda$slambda(completion);
    i.e4n_1 = $this$intercept;
    i.f4n_1 = response;
    return i;
  };
  function SaveBody$lambda$slambda_0(resultContinuation) {
    var i = new SaveBody$lambda$slambda(resultContinuation);
    var l = function ($this$intercept, response, $completion) {
      return i.q43($this$intercept, response, $completion);
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
    if ($this$createClientPlugin.y43_1.v4m_1) {
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
    this.j4n_1 = hook;
    this.k4n_1 = handler;
  }
  protoOf(HookHandler).e3w = function (client) {
    this.j4n_1.e43(client, this.k4n_1);
  };
  function ClientPluginBuilder$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginBuilder(key, client, pluginConfig) {
    this.w43_1 = key;
    this.x43_1 = client;
    this.y43_1 = pluginConfig;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z43_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    tmp_0.a44_1 = ClientPluginBuilder$onClose$lambda;
  }
  protoOf(ClientPluginBuilder).f4i = function (block) {
    this.b44(RequestHook_instance, block);
  };
  protoOf(ClientPluginBuilder).k4c = function (block) {
    this.b44(TransformResponseBodyHook_instance, block);
  };
  protoOf(ClientPluginBuilder).b44 = function (hook, handler) {
    this.z43_1.b1(new HookHandler(hook, handler));
  };
  function ClientPluginInstance$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginInstance(key, config, body) {
    this.l4n_1 = key;
    this.m4n_1 = config;
    this.n4n_1 = body;
    var tmp = this;
    tmp.o4n_1 = ClientPluginInstance$onClose$lambda;
  }
  protoOf(ClientPluginInstance).e3w = function (scope) {
    var tmp0 = new ClientPluginBuilder(this.l4n_1, scope, this.m4n_1);
    // Inline function 'kotlin.apply' call
    this.n4n_1(tmp0);
    var pluginBuilder = tmp0;
    this.o4n_1 = pluginBuilder.a44_1;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = pluginBuilder.z43_1.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      element.e3w(scope);
    }
  };
  protoOf(ClientPluginInstance).h4 = function () {
    this.o4n_1();
  };
  function SetupRequest$install$slambda($handler, resultContinuation) {
    this.x4n_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequest$install$slambda).q3u = function ($this$intercept, it, $completion) {
    var tmp = this.r3u($this$intercept, it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(SetupRequest$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3u(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
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
            suspendResult = this.x4n_1(this.y4n_1.t2i_1, this);
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
  protoOf(SetupRequest$install$slambda).r3u = function ($this$intercept, it, completion) {
    var i = new SetupRequest$install$slambda(this.x4n_1, completion);
    i.y4n_1 = $this$intercept;
    i.z4n_1 = it;
    return i;
  };
  function SetupRequest$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequest$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.q3u($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function SetupRequest() {
  }
  protoOf(SetupRequest).a4o = function (client, handler) {
    var tmp = Phases_getInstance().z42_1;
    client.s3t_1.x2i(tmp, SetupRequest$install$slambda_0(handler, null));
  };
  protoOf(SetupRequest).e43 = function (client, handler) {
    return this.a4o(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var SetupRequest_instance;
  function SetupRequest_getInstance() {
    return SetupRequest_instance;
  }
  function Sender_0(httpSendSender, coroutineContext) {
    this.k4a_1 = httpSendSender;
    this.l4a_1 = coroutineContext;
  }
  protoOf(Sender_0).j1e = function () {
    return this.l4a_1;
  };
  protoOf(Sender_0).m4a = function (requestBuilder, $completion) {
    return this.k4a_1.x4j(requestBuilder, $completion);
  };
  function Send$install$slambda($handler, $client, resultContinuation) {
    this.j4o_1 = $handler;
    this.k4o_1 = $client;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Send$install$slambda).n4o = function ($this$intercept, request, $completion) {
    var tmp = this.o4o($this$intercept, request, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(Send$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.n4o(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
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
            suspendResult = this.j4o_1(new Sender_0(this.l4o_1, this.k4o_1.r3t_1), this.m4o_1, this);
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
  protoOf(Send$install$slambda).o4o = function ($this$intercept, request, completion) {
    var i = new Send$install$slambda(this.j4o_1, this.k4o_1, completion);
    i.l4o_1 = $this$intercept;
    i.m4o_1 = request;
    return i;
  };
  function Send$install$slambda_0($handler, $client, resultContinuation) {
    var i = new Send$install$slambda($handler, $client, resultContinuation);
    var l = function ($this$intercept, request, $completion) {
      return i.n4o($this$intercept, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Send() {
  }
  protoOf(Send).p4o = function (client, handler) {
    var tmp = plugin(client, Plugin_getInstance());
    tmp.g4l(Send$install$slambda_0(handler, client, null));
  };
  protoOf(Send).e43 = function (client, handler) {
    return this.p4o(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
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
    this.q4o_1 = createConfiguration;
    this.r4o_1 = body;
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
    tmp.s4o_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(ClientPluginImpl).m1 = function () {
    return this.s4o_1;
  };
  protoOf(ClientPluginImpl).t4o = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.q4o_1();
    block(this_0);
    var config = this_0;
    return new ClientPluginInstance(this.s4o_1, config, this.r4o_1);
  };
  protoOf(ClientPluginImpl).c3x = function (block) {
    return this.t4o(block);
  };
  protoOf(ClientPluginImpl).u4o = function (plugin, scope) {
    plugin.e3w(scope);
  };
  protoOf(ClientPluginImpl).d3x = function (plugin, scope) {
    return this.u4o(plugin instanceof ClientPluginInstance ? plugin : THROW_CCE(), scope);
  };
  function createClientPlugin$lambda() {
    return Unit_instance;
  }
  function TransformResponseBodyContext() {
  }
  function OnRequestContext() {
  }
  function RequestHook$install$slambda($handler, resultContinuation) {
    this.d4p_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestHook$install$slambda).q3u = function ($this$intercept, it, $completion) {
    var tmp = this.r3u($this$intercept, it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(RequestHook$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3u(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
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
            suspendResult = this.d4p_1(new OnRequestContext(), this.e4p_1.t2i_1, this.e4p_1.w2h(), this);
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
  protoOf(RequestHook$install$slambda).r3u = function ($this$intercept, it, completion) {
    var i = new RequestHook$install$slambda(this.d4p_1, completion);
    i.e4p_1 = $this$intercept;
    i.f4p_1 = it;
    return i;
  };
  function RequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RequestHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.q3u($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function RequestHook() {
  }
  protoOf(RequestHook).g4p = function (client, handler) {
    var tmp = Phases_getInstance().a43_1;
    client.s3t_1.x2i(tmp, RequestHook$install$slambda_0(handler, null));
  };
  protoOf(RequestHook).e43 = function (client, handler) {
    return this.g4p(client, (!(handler == null) ? isSuspendFunction(handler, 3) : false) ? handler : THROW_CCE());
  };
  var RequestHook_instance;
  function RequestHook_getInstance() {
    return RequestHook_instance;
  }
  function TransformResponseBodyHook$install$slambda($handler, resultContinuation) {
    this.p4p_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TransformResponseBodyHook$install$slambda).l3v = function ($this$intercept, it, $completion) {
    var tmp = this.m3v($this$intercept, it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(TransformResponseBodyHook$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3v(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(TransformResponseBodyHook$install$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            var _destruct__k2r9zo = this.q4p_1.w2h();
            this.s4p_1 = _destruct__k2r9zo.uf();
            var content = _destruct__k2r9zo.vf();
            if (!isInterface(content, ByteReadChannel))
              return Unit_instance;
            this.n8_1 = 1;
            suspendResult = this.p4p_1(new TransformResponseBodyContext(), this.q4p_1.t2i_1.x3u(), content, this.s4p_1, this);
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
              tmp_1 = !this.s4p_1.k2j_1.ra(newContent);
            } else {
              tmp_1 = false;
            }

            if (tmp_1) {
              throw IllegalStateException_init_$Create$('transformResponseBody returned ' + toString(newContent) + ' but expected value of type ' + this.s4p_1.toString());
            }

            this.n8_1 = 2;
            suspendResult = this.q4p_1.x2h(new HttpResponseContainer(this.s4p_1, newContent), this);
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
  protoOf(TransformResponseBodyHook$install$slambda).m3v = function ($this$intercept, it, completion) {
    var i = new TransformResponseBodyHook$install$slambda(this.p4p_1, completion);
    i.q4p_1 = $this$intercept;
    i.r4p_1 = it;
    return i;
  };
  function TransformResponseBodyHook$install$slambda_0($handler, resultContinuation) {
    var i = new TransformResponseBodyHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.l3v($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function TransformResponseBodyHook() {
  }
  protoOf(TransformResponseBodyHook).t4p = function (client, handler) {
    var tmp = Phases_getInstance_2().x3w_1;
    client.t3t_1.x2i(tmp, TransformResponseBodyHook$install$slambda_0(handler, null));
  };
  protoOf(TransformResponseBodyHook).e43 = function (client, handler) {
    return this.t4p(client, (!(handler == null) ? isSuspendFunction(handler, 4) : false) ? handler : THROW_CCE());
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
    this.u4p_1 = delegate;
    this.v4p_1 = call;
  }
  protoOf(DefaultClientWebSocketSession).l3f = function (frame, $completion) {
    return this.u4p_1.l3f(frame, $completion);
  };
  protoOf(DefaultClientWebSocketSession).o21 = function ($completion) {
    return this.u4p_1.o21($completion);
  };
  protoOf(DefaultClientWebSocketSession).h3f = function (_set____db54di) {
    this.u4p_1.h3f(_set____db54di);
  };
  protoOf(DefaultClientWebSocketSession).i3f = function () {
    return this.u4p_1.i3f();
  };
  protoOf(DefaultClientWebSocketSession).j3f = function () {
    return this.u4p_1.j3f();
  };
  protoOf(DefaultClientWebSocketSession).k3f = function () {
    return this.u4p_1.k3f();
  };
  protoOf(DefaultClientWebSocketSession).j1e = function () {
    return this.u4p_1.j1e();
  };
  protoOf(DefaultClientWebSocketSession).g3f = function (negotiatedExtensions) {
    this.u4p_1.g3f(negotiatedExtensions);
  };
  function DelegatingClientWebSocketSession(call, session) {
    this.w4p_1 = session;
    this.x4p_1 = call;
  }
  protoOf(DelegatingClientWebSocketSession).l3f = function (frame, $completion) {
    return this.w4p_1.l3f(frame, $completion);
  };
  protoOf(DelegatingClientWebSocketSession).o21 = function ($completion) {
    return this.w4p_1.o21($completion);
  };
  protoOf(DelegatingClientWebSocketSession).h3f = function (_set____db54di) {
    this.w4p_1.h3f(_set____db54di);
  };
  protoOf(DelegatingClientWebSocketSession).i3f = function () {
    return this.w4p_1.i3f();
  };
  protoOf(DelegatingClientWebSocketSession).j3f = function () {
    return this.w4p_1.j3f();
  };
  protoOf(DelegatingClientWebSocketSession).k3f = function () {
    return this.w4p_1.k3f();
  };
  protoOf(DelegatingClientWebSocketSession).j1e = function () {
    return this.w4p_1.j1e();
  };
  function WebSocketContent() {
    ClientUpgradeContent.call(this);
    var tmp = this;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    var nonce = generateNonce(16);
    this_0.q(Default_getInstance_0().fi(nonce));
    tmp.a4q_1 = this_0.toString();
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new HeadersBuilder();
    this_1.n2f('Upgrade', 'websocket');
    this_1.n2f('Connection', 'Upgrade');
    this_1.n2f('Sec-WebSocket-Key', this.a4q_1);
    this_1.n2f('Sec-WebSocket-Version', '13');
    tmp_0.b4q_1 = this_1.f2n();
  }
  protoOf(WebSocketContent).j2r = function () {
    return this.b4q_1;
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
    this.k4q_1 = $extensionsSupported;
    this.l4q_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebSockets$Plugin$install$slambda).q3u = function ($this$intercept, it, $completion) {
    var tmp = this.r3u($this$intercept, it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(WebSockets$Plugin$install$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3u(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(WebSockets$Plugin$install$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            if (!isWebsocket(this.m4q_1.t2i_1.x3v_1.z2u())) {
              var this_0 = get_LOGGER_8();
              if (get_isTraceEnabled(this_0)) {
                this_0.r2j('Skipping WebSocket plugin for non-websocket request: ' + this.m4q_1.t2i_1.x3v_1.toString());
              }
              return Unit_instance;
            }

            var this_1 = get_LOGGER_8();
            if (get_isTraceEnabled(this_1)) {
              this_1.r2j('Sending WebSocket request ' + this.m4q_1.t2i_1.x3v_1.toString());
            }

            this.m4q_1.t2i_1.v4l(WebSocketCapability_instance, Unit_instance);
            if (this.k4q_1) {
              installExtensions(this.l4q_1, this.m4q_1.t2i_1);
            }

            this.m4q_1.t2i_1.c3w_1.c2d(get_WEBSOCKETS_KEY(), this.l4q_1);
            this.n8_1 = 1;
            suspendResult = this.m4q_1.x2h(new WebSocketContent(), this);
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
  protoOf(WebSockets$Plugin$install$slambda).r3u = function ($this$intercept, it, completion) {
    var i = new WebSockets$Plugin$install$slambda(this.k4q_1, this.l4q_1, completion);
    i.m4q_1 = $this$intercept;
    i.n4q_1 = it;
    return i;
  };
  function WebSockets$Plugin$install$slambda_0($extensionsSupported, $plugin, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda($extensionsSupported, $plugin, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.q3u($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation) {
    this.w4q_1 = $plugin;
    this.x4q_1 = $extensionsSupported;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebSockets$Plugin$install$slambda_1).l3v = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.m3v($this$intercept, _destruct__k2r9zo, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(WebSockets$Plugin$install$slambda_1).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3v(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(WebSockets$Plugin$install$slambda_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var info = this.z4q_1.uf();
            var session = this.z4q_1.vf();
            var response = this.y4q_1.t2i_1.x3u();
            var status = response.w3x();
            var requestContent = get_request(response).f31();
            if (!(requestContent instanceof WebSocketContent)) {
              var this_0 = get_LOGGER_8();
              if (get_isTraceEnabled(this_0)) {
                this_0.r2j('Skipping non-websocket response from ' + this.y4q_1.t2i_1.g3x().p3x().toString() + ': ' + toString(requestContent));
              }
              return Unit_instance;
            }

            if (!status.equals(Companion_getInstance_1().f2s_1)) {
              throw WebSocketException_init_$Create$('Handshake exception, expected status code ' + Companion_getInstance_1().f2s_1.h2u_1 + ' but was ' + status.h2u_1);
            }

            if (!isInterface(session, WebSocketSession)) {
              throw WebSocketException_init_$Create$('Handshake exception, expected `WebSocketSession` content but was ' + toString(getKClassFromExpression(session)));
            }

            var this_1 = get_LOGGER_8();
            if (get_isTraceEnabled(this_1)) {
              this_1.r2j('Receive websocket session from ' + this.y4q_1.t2i_1.g3x().p3x().toString() + ': ' + toString(session));
            }

            if (!equalsLong(this.w4q_1.b4r_1, new Long(2147483647, 0))) {
              session.h3f(this.w4q_1.b4r_1);
            }

            var tmp_0;
            if (info.k2j_1.equals(getKClass(DefaultClientWebSocketSession))) {
              var defaultSession = this.w4q_1.f4r(session);
              var clientSession = new DefaultClientWebSocketSession(this.y4q_1.t2i_1, defaultSession);
              var tmp_1;
              if (this.x4q_1) {
                tmp_1 = completeNegotiation(this.w4q_1, this.y4q_1.t2i_1);
              } else {
                tmp_1 = emptyList();
              }
              var negotiated = tmp_1;
              clientSession.g3f(negotiated);
              tmp_0 = clientSession;
            } else {
              tmp_0 = new DelegatingClientWebSocketSession(this.y4q_1.t2i_1, session);
            }

            var clientSession_0 = tmp_0;
            this.n8_1 = 1;
            suspendResult = this.y4q_1.x2h(new HttpResponseContainer(info, clientSession_0), this);
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
  protoOf(WebSockets$Plugin$install$slambda_1).m3v = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new WebSockets$Plugin$install$slambda_1(this.w4q_1, this.x4q_1, completion);
    i.y4q_1 = $this$intercept;
    i.z4q_1 = _destruct__k2r9zo;
    return i;
  };
  function WebSockets$Plugin$install$slambda_2($plugin, $extensionsSupported, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation);
    var l = function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.l3v($this$intercept, _destruct__k2r9zo, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function installExtensions($this, context) {
    var installed = $this.c4r_1.f2n();
    context.c3w_1.b2d(get_REQUEST_EXTENSIONS_KEY(), installed);
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = installed.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var list = element.z3m();
      addAll(destination, list);
    }
    var protocols = destination;
    addNegotiatedProtocols($this, context, protocols);
  }
  function completeNegotiation($this, call) {
    var tmp0_safe_receiver = call.x3u().j2r().p2e('Sec-WebSocket-Extensions');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = parseWebSocketExtensions(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var serverExtensions = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    var clientExtensions = call.h3x().y2c(get_REQUEST_EXTENSIONS_KEY());
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = clientExtensions.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (element.a3n(serverExtensions)) {
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
    this.g4r_1 = new WebSocketExtensionsConfig();
    this.h4r_1 = new WebSocketChannelsConfig();
    this.i4r_1 = new Long(0, 0);
    this.j4r_1 = new Long(2147483647, 0);
    this.k4r_1 = null;
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
    tmp.l4r_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin_0).m1 = function () {
    return this.l4r_1;
  };
  protoOf(Plugin_0).m4r = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config_0();
    block(this_0);
    var config = this_0;
    return new WebSockets(config.i4r_1, config.j4r_1, config.g4r_1, config.k4r_1, config.h4r_1);
  };
  protoOf(Plugin_0).c3x = function (block) {
    return this.m4r(block);
  };
  protoOf(Plugin_0).n4r = function (plugin, scope) {
    var extensionsSupported = scope.m3t_1.d41().j2(WebSocketExtensionsCapability_instance);
    var tmp = Phases_getInstance().c43_1;
    scope.s3t_1.x2i(tmp, WebSockets$Plugin$install$slambda_0(extensionsSupported, plugin, null));
    var tmp_0 = Phases_getInstance_2().x3w_1;
    scope.t3t_1.x2i(tmp_0, WebSockets$Plugin$install$slambda_2(plugin, extensionsSupported, null));
  };
  protoOf(Plugin_0).d3x = function (plugin, scope) {
    return this.n4r(plugin instanceof WebSockets ? plugin : THROW_CCE(), scope);
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
    channelsConfig = channelsConfig === VOID ? Companion_getInstance_3().m3f_1 : channelsConfig;
    this.a4r_1 = pingIntervalMillis;
    this.b4r_1 = maxFrameSize;
    this.c4r_1 = extensionsConfig;
    this.d4r_1 = contentConverter;
    this.e4r_1 = channelsConfig;
  }
  protoOf(WebSockets).f4r = function (session) {
    if (isInterface(session, DefaultWebSocketSession))
      return session;
    // Inline function 'kotlin.Long.times' call
    var this_0 = this.a4r_1;
    var timeoutMillis = multiply(this_0, fromInt(2));
    // Inline function 'kotlin.also' call
    var this_1 = DefaultWebSocketSession_0(session, this.a4r_1, timeoutMillis, this.e4r_1);
    this_1.h3f(this.b4r_1);
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
    tmp.p4r_1 = lazy(ClientUpgradeContent$content$delegate$lambda);
  }
  function DefaultHttpRequest(call, data) {
    this.q4r_1 = call;
    this.r4r_1 = data.x40_1;
    this.s4r_1 = data.w40_1;
    this.t4r_1 = data.z40_1;
    this.u4r_1 = data.y40_1;
    this.v4r_1 = data.b41_1;
  }
  protoOf(DefaultHttpRequest).n3x = function () {
    return this.q4r_1;
  };
  protoOf(DefaultHttpRequest).j1e = function () {
    return this.n3x().j1e();
  };
  protoOf(DefaultHttpRequest).o3x = function () {
    return this.r4r_1;
  };
  protoOf(DefaultHttpRequest).p3x = function () {
    return this.s4r_1;
  };
  protoOf(DefaultHttpRequest).f31 = function () {
    return this.t4r_1;
  };
  protoOf(DefaultHttpRequest).j2r = function () {
    return this.u4r_1;
  };
  protoOf(DefaultHttpRequest).h3x = function () {
    return this.v4r_1;
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
    this.x3v_1 = new URLBuilder();
    this.y3v_1 = Companion_getInstance_2().k2r_1;
    this.z3v_1 = new HeadersBuilder();
    this.a3w_1 = EmptyContent_getInstance();
    this.b3w_1 = SupervisorJob();
    this.c3w_1 = AttributesJsFn(true);
  }
  protoOf(HttpRequestBuilder).j2r = function () {
    return this.z3v_1;
  };
  protoOf(HttpRequestBuilder).s41 = function (value) {
    if (!(value == null)) {
      this.c3w_1.b2d(get_BodyTypeAttributeKey(), value);
    } else {
      this.c3w_1.d2d(get_BodyTypeAttributeKey());
    }
  };
  protoOf(HttpRequestBuilder).w4r = function () {
    return this.c3w_1.z2c(get_BodyTypeAttributeKey());
  };
  protoOf(HttpRequestBuilder).f2n = function () {
    var tmp = this.x3v_1.f2n();
    var tmp_0 = this.y3v_1;
    var tmp_1 = this.z3v_1.f2n();
    var tmp_2 = this.a3w_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'No request transformation found: ' + toString(this.a3w_1);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.b3w_1, this.c3w_1);
  };
  protoOf(HttpRequestBuilder).r41 = function (builder) {
    this.b3w_1 = builder.b3w_1;
    return this.g4i(builder);
  };
  protoOf(HttpRequestBuilder).g4i = function (builder) {
    this.y3v_1 = builder.y3v_1;
    this.a3w_1 = builder.a3w_1;
    this.s41(builder.w4r());
    takeFrom_0(this.x3v_1, builder.x3v_1);
    this.x3v_1.u2u_1 = this.x3v_1.u2u_1;
    appendAll(this.z3v_1, builder.z3v_1);
    putAll(this.c3w_1, builder.c3w_1);
    return this;
  };
  protoOf(HttpRequestBuilder).v4l = function (key, capability) {
    var tmp = get_ENGINE_CAPABILITIES_KEY();
    var capabilities = this.c3w_1.e2d(tmp, HttpRequestBuilder$setCapability$lambda);
    // Inline function 'kotlin.collections.set' call
    capabilities.v2(key, capability);
  };
  protoOf(HttpRequestBuilder).h4l = function (key) {
    var tmp0_safe_receiver = this.c3w_1.z2c(get_ENGINE_CAPABILITIES_KEY());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s2(key);
  };
  function HttpRequest_0() {
  }
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.w40_1 = url;
    this.x40_1 = method;
    this.y40_1 = headers;
    this.z40_1 = body;
    this.a41_1 = executionContext;
    this.b41_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.b41_1.z2c(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t2();
    tmp.c41_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  protoOf(HttpRequestData).toString = function () {
    return 'HttpRequestData(url=' + this.w40_1.toString() + ', method=' + this.x40_1.toString() + ')';
  };
  function ResponseAdapter() {
  }
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.b3y_1 = statusCode;
    this.c3y_1 = requestTime;
    this.d3y_1 = headers;
    this.e3y_1 = version;
    this.f3y_1 = body;
    this.g3y_1 = callContext;
    this.h3y_1 = GMTDate();
  }
  protoOf(HttpResponseData).toString = function () {
    return 'HttpResponseData=(statusCode=' + this.b3y_1.toString() + ')';
  };
  function isUpgradeRequest(_this__u8e3s4) {
    _init_properties_HttpRequest_kt__813lx1();
    var tmp = _this__u8e3s4.z40_1;
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
    set(_this__u8e3s4.x3v_1, scheme, host, port, path, block);
  }
  function headers(_this__u8e3s4, block) {
    _init_properties_HttpRequest_kt__813lx1();
    // Inline function 'kotlin.apply' call
    var this_0 = _this__u8e3s4.j2r();
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
    this.z42_1 = new PipelinePhase('Before');
    this.a43_1 = new PipelinePhase('State');
    this.b43_1 = new PipelinePhase('Transform');
    this.c43_1 = new PipelinePhase('Render');
    this.d43_1 = new PipelinePhase('Send');
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
    Pipeline.call(this, [Phases_getInstance().z42_1, Phases_getInstance().a43_1, Phases_getInstance().b43_1, Phases_getInstance().c43_1, Phases_getInstance().d43_1]);
    this.f4s_1 = developmentMode;
  }
  protoOf(HttpRequestPipeline).r2i = function () {
    return this.f4s_1;
  };
  function Phases_0() {
    Phases_instance_0 = this;
    this.f3w_1 = new PipelinePhase('Before');
    this.g3w_1 = new PipelinePhase('State');
    this.h3w_1 = new PipelinePhase('Monitoring');
    this.i3w_1 = new PipelinePhase('Engine');
    this.j3w_1 = new PipelinePhase('Receive');
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
    Pipeline.call(this, [Phases_getInstance_0().f3w_1, Phases_getInstance_0().g3w_1, Phases_getInstance_0().h3w_1, Phases_getInstance_0().i3w_1, Phases_getInstance_0().j3w_1]);
    this.n4s_1 = developmentMode;
  }
  protoOf(HttpSendPipeline).r2i = function () {
    return this.n4s_1;
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
    this.p4s_1 = formData;
    this.q4s_1 = toByteArray_0(formUrlEncode(this.p4s_1));
    this.r4s_1 = fromInt(this.q4s_1.length);
    this.s4s_1 = withCharset(Application_getInstance().y2k_1, Charsets_getInstance().u2b_1);
  }
  protoOf(FormDataContent).z2w = function () {
    return this.r4s_1;
  };
  protoOf(FormDataContent).y2w = function () {
    return this.s4s_1;
  };
  protoOf(FormDataContent).a2x = function () {
    return this.q4s_1;
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
    this.b4t_1 = _this__u8e3s4;
    this.c4t_1 = channel;
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
            this.j4t_1 = this.b4t_1.s4t_1.t();
            this.n8_1 = 2;
            continue $sm;
          case 2:
            if (!this.j4t_1.u()) {
              this.n8_1 = 18;
              continue $sm;
            }

            this.i4t_1 = this.j4t_1.v();
            this.n8_1 = 3;
            suspendResult = writeFully_0(this.c4t_1, this.b4t_1.o4t_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.n8_1 = 4;
            suspendResult = writeFully_0(this.c4t_1, this.i4t_1.u4t_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.n8_1 = 5;
            suspendResult = writeFully_0(this.c4t_1, get_RN_BYTES(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var tmp0_subject = this.i4t_1;
            if (tmp0_subject instanceof InputPart) {
              this.h4t_1 = this.i4t_1.b4u_1();
              this.n8_1 = 7;
              continue $sm;
            } else {
              if (tmp0_subject instanceof ChannelPart) {
                this.n8_1 = 6;
                suspendResult = copyTo_0(this.i4t_1.y4t_1(), this.c4t_1, this);
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
            this.e4t_1 = suspendResult;
            this.n8_1 = 16;
            continue $sm;
          case 7:
            this.g4t_1 = this.h4t_1;
            this.f4t_1 = null;
            this.n8_1 = 8;
            continue $sm;
          case 8:
            this.n8_1 = 9;
            continue $sm;
          case 9:
            this.o8_1 = 13;
            this.o8_1 = 12;
            var input = this.g4t_1;
            this.n8_1 = 10;
            suspendResult = copyTo_1(input, this.c4t_1, this);
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
            closeFinally(this.g4t_1, this.f4t_1);
            this.n8_1 = 15;
            continue $sm;
          case 12:
            this.o8_1 = 13;
            var tmp_2 = this.q8_1;
            if (tmp_2 instanceof Error) {
              var e = this.q8_1;
              var tmp_3 = this;
              this.f4t_1 = e;
              throw e;
            } else {
              throw this.q8_1;
            }

          case 13:
            this.o8_1 = 20;
            var t = this.q8_1;
            closeFinally(this.g4t_1, this.f4t_1);
            throw t;
          case 14:
            this.o8_1 = 20;
            closeFinally(this.g4t_1, this.f4t_1);
            if (false) {
              this.n8_1 = 7;
              continue $sm;
            }

            this.n8_1 = 15;
            continue $sm;
          case 15:
            this.e4t_1 = Unit_instance;
            this.n8_1 = 16;
            continue $sm;
          case 16:
            this.n8_1 = 17;
            suspendResult = writeFully_0(this.c4t_1, get_RN_BYTES(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 17:
            this.n8_1 = 2;
            continue $sm;
          case 18:
            this.n8_1 = 19;
            suspendResult = writeFully_0(this.c4t_1, this.b4t_1.p4t_1, VOID, VOID, this);
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
              close(this.c4t_1, cause);
              this.o8_1 = 25;
              this.n8_1 = 23;
              continue $sm;
            } else {
              throw this.q8_1;
            }

          case 21:
            this.o8_1 = 25;
            this.d4t_1 = this.q8_1;
            this.n8_1 = 22;
            suspendResult = this.c4t_1.a22(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 22:
            throw this.d4t_1;
          case 23:
            this.o8_1 = 25;
            this.n8_1 = 24;
            suspendResult = this.c4t_1.a22(this);
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
    contentType = contentType === VOID ? MultiPart_getInstance().b2m_1.a2n('boundary', boundary) : contentType;
    WriteChannelContent.call(this);
    this.l4t_1 = parts;
    this.m4t_1 = boundary;
    this.n4t_1 = contentType;
    this.o4t_1 = toByteArray_0('--' + this.m4t_1 + '\r\n');
    this.p4t_1 = toByteArray_0('--' + this.m4t_1 + '--\r\n');
    this.q4t_1 = this.p4t_1.length;
    this.r4t_1 = imul(get_RN_BYTES().length, 2) + this.o4t_1.length | 0;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.l4t_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var headersBuilder = BytePacketBuilder();
      var _iterator__ex2g4s_0 = item.s2x_1.c2f().t();
      while (_iterator__ex2g4s_0.u()) {
        var _destruct__k2r9zo = _iterator__ex2g4s_0.v();
        // Inline function 'kotlin.collections.component1' call
        var key = _destruct__k2r9zo.m1();
        // Inline function 'kotlin.collections.component2' call
        var values = _destruct__k2r9zo.n1();
        writeText(headersBuilder, key + ': ' + joinToString(values, '; '));
        writeFully(headersBuilder, get_RN_BYTES());
      }
      var tmp0_safe_receiver = item.s2x_1.p2e('Content-Length');
      var bodySize = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
      var tmp_0;
      if (item instanceof FileItem) {
        var headers = readByteArray(build(headersBuilder));
        var tmp_1;
        if (bodySize == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.Long.plus' call
          var other = this.r4t_1;
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
        tmp_0 = new ChannelPart(headers, item.g4u_1, size);
      } else {
        if (item instanceof BinaryItem) {
          var headers_0 = readByteArray(build(headersBuilder));
          var tmp_3;
          if (bodySize == null) {
            tmp_3 = null;
          } else {
            // Inline function 'kotlin.Long.plus' call
            var other_1 = this.r4t_1;
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
          tmp_0 = new InputPart(headers_0, item.l2x_1, size_0);
        } else {
          if (item instanceof FormItem) {
            // Inline function 'io.ktor.utils.io.core.buildPacket' call
            var builder = new Buffer();
            writeText(builder, item.g2x_1);
            var bytes = readByteArray(builder);
            var provider = MultiPartFormDataContent$rawParts$lambda(bytes);
            if (bodySize == null) {
              writeText(headersBuilder, 'Content-Length: ' + bytes.length);
              writeFully(headersBuilder, get_RN_BYTES());
            }
            var headers_1 = readByteArray(build(headersBuilder));
            var size_1 = (bytes.length + this.r4t_1 | 0) + headers_1.length | 0;
            tmp_0 = new InputPart(headers_1, provider, fromInt(size_1));
          } else {
            if (item instanceof BinaryChannelItem) {
              var headers_2 = readByteArray(build(headersBuilder));
              var tmp_5;
              if (bodySize == null) {
                tmp_5 = null;
              } else {
                // Inline function 'kotlin.Long.plus' call
                var other_3 = this.r4t_1;
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
              tmp_0 = new ChannelPart(headers_2, item.q2x_1, size_2);
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
      var tmp$ret$2 = tmp_0;
      destination.b1(tmp$ret$2);
    }
    tmp.s4t_1 = destination;
    this.t4t_1 = null;
    var rawLength = new Long(0, 0);
    var _iterator__ex2g4s_1 = this.s4t_1.t();
    $l$loop: while (_iterator__ex2g4s_1.u()) {
      var part = _iterator__ex2g4s_1.v();
      var size_3 = part.v4t_1;
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
      var other_5 = this.q4t_1;
      rawLength = add(tmp0, fromInt(other_5));
    }
    this.t4t_1 = rawLength;
  }
  protoOf(MultiPartFormDataContent).y2w = function () {
    return this.n4t_1;
  };
  protoOf(MultiPartFormDataContent).z2w = function () {
    return this.t4t_1;
  };
  protoOf(MultiPartFormDataContent).y2x = function (channel, $completion) {
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
    this.b4u_1 = provider;
  }
  function ChannelPart(headers, provider, size) {
    PreparedPart.call(this, headers, size);
    this.y4t_1 = provider;
  }
  function PreparedPart(headers, size) {
    this.u4t_1 = headers;
    this.v4t_1 = size;
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
    tmp.h4u_1 = ArrayList_init_$Create$();
  }
  protoOf(FormBuilder).i4u = function (key, value, headers) {
    var tmp0 = this.h4u_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new FormPart(key, value, headers);
    tmp0.b1(element);
  };
  protoOf(FormBuilder).j4u = function (key, value, headers, $super) {
    headers = headers === VOID ? Companion_getInstance_4().c2n_1 : headers;
    var tmp;
    if ($super === VOID) {
      this.i4u(key, value, headers);
      tmp = Unit_instance;
    } else {
      tmp = $super.i4u.call(this, key, value, headers);
    }
    return tmp;
  };
  protoOf(FormBuilder).k4u = function (key, value, headers) {
    var tmp0 = this.h4u_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new FormPart(key, value, headers);
    tmp0.b1(element);
  };
  protoOf(FormBuilder).l4u = function () {
    return this.h4u_1;
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
      var headers = element.p4u();
      // Inline function 'kotlin.apply' call
      var this_0 = new HeadersBuilder();
      this_0.n2f('Content-Disposition', 'form-data; name=' + escapeIfNeeded(key));
      this_0.o2f(headers);
      var partHeaders = this_0;
      var tmp;
      if (typeof value === 'string') {
        tmp = new FormItem(value, formData$lambda, partHeaders.f2n());
      } else {
        if (isNumber(value)) {
          var tmp_0 = toString(value);
          tmp = new FormItem(tmp_0, formData$lambda_0, partHeaders.f2n());
        } else {
          if (typeof value === 'boolean') {
            var tmp_1 = value.toString();
            tmp = new FormItem(tmp_1, formData$lambda_1, partHeaders.f2n());
          } else {
            if (isByteArray(value)) {
              partHeaders.n2f('Content-Length', value.length.toString());
              var tmp_2 = formData$lambda_2(value);
              tmp = new BinaryItem(tmp_2, formData$lambda_3, partHeaders.f2n());
            } else {
              if (isInterface(value, Source)) {
                if (value instanceof Buffer) {
                  partHeaders.n2f('Content-Length', get_remaining(value).toString());
                }
                var tmp_3 = formData$lambda_4(value);
                tmp = new BinaryItem(tmp_3, formData$lambda_5(value), partHeaders.f2n());
              } else {
                if (value instanceof InputProvider) {
                  var size = value.s4u_1;
                  if (!(size == null)) {
                    partHeaders.n2f('Content-Length', size.toString());
                  }
                  tmp = new BinaryItem(value.t4u_1, formData$lambda_6, partHeaders.f2n());
                } else {
                  if (value instanceof ChannelProvider) {
                    var size_0 = value.q4u_1;
                    if (!(size_0 == null)) {
                      partHeaders.n2f('Content-Length', size_0.toString());
                    }
                    tmp = new BinaryChannelItem(value.r4u_1, partHeaders.f2n());
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
    headers = headers === VOID ? Companion_getInstance_4().c2n_1 : headers;
    this.m4u_1 = key;
    this.n4u_1 = value;
    this.o4u_1 = headers;
  }
  protoOf(FormPart).uf = function () {
    return this.m4u_1;
  };
  protoOf(FormPart).vf = function () {
    return this.n4u_1;
  };
  protoOf(FormPart).p4u = function () {
    return this.o4u_1;
  };
  protoOf(FormPart).toString = function () {
    return 'FormPart(key=' + this.m4u_1 + ', value=' + toString(this.n4u_1) + ', headers=' + toString(this.o4u_1) + ')';
  };
  protoOf(FormPart).hashCode = function () {
    var result = getStringHashCode(this.m4u_1);
    result = imul(result, 31) + hashCode(this.n4u_1) | 0;
    result = imul(result, 31) + hashCode(this.o4u_1) | 0;
    return result;
  };
  protoOf(FormPart).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FormPart))
      return false;
    if (!(this.m4u_1 === other.m4u_1))
      return false;
    if (!equals(this.n4u_1, other.n4u_1))
      return false;
    if (!equals(this.o4u_1, other.o4u_1))
      return false;
    return true;
  };
  function InputProvider() {
  }
  function ChannelProvider() {
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
      _this__u8e3s4.j2r().n2f(key, toString(value));
      tmp = Unit_instance;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? Unit_instance : tmp1_elvis_lhs;
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.u4u_1 = call;
    this.v4u_1 = responseData.g3y_1;
    this.w4u_1 = responseData.b3y_1;
    this.x4u_1 = responseData.e3y_1;
    this.y4u_1 = responseData.c3y_1;
    this.z4u_1 = responseData.h3y_1;
    var tmp = this;
    var tmp_0 = responseData.f3y_1;
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.a4v_1 = tmp0_elvis_lhs == null ? Companion_getInstance().u23_1 : tmp0_elvis_lhs;
    this.b4v_1 = responseData.d3y_1;
  }
  protoOf(DefaultHttpResponse).n3x = function () {
    return this.u4u_1;
  };
  protoOf(DefaultHttpResponse).j1e = function () {
    return this.v4u_1;
  };
  protoOf(DefaultHttpResponse).w3x = function () {
    return this.w4u_1;
  };
  protoOf(DefaultHttpResponse).x3x = function () {
    return this.x4u_1;
  };
  protoOf(DefaultHttpResponse).y3x = function () {
    return this.y4u_1;
  };
  protoOf(DefaultHttpResponse).z3x = function () {
    return this.z4u_1;
  };
  protoOf(DefaultHttpResponse).v3x = function () {
    return this.a4v_1;
  };
  protoOf(DefaultHttpResponse).j2r = function () {
    return this.b4v_1;
  };
  function HttpResponse() {
  }
  protoOf(HttpResponse).toString = function () {
    return 'HttpResponse[' + get_request(this).p3x().toString() + ', ' + this.w3x().toString() + ']';
  };
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.n3x().g3x();
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
    this.k4v_1 = _this__u8e3s4;
    this.l4v_1 = fallbackCharset;
  }
  protoOf($bodyAsTextCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var tmp0_elvis_lhs = charset_0(this.k4v_1);
            var originCharset = tmp0_elvis_lhs == null ? this.l4v_1 : tmp0_elvis_lhs;
            this.m4v_1 = originCharset.x2b();
            var this_0 = this.k4v_1;
            this.n8_1 = 1;
            var tmp_0 = this_0.n3x();
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

            suspendResult = tmp_0.k3x(new TypeInfo(tmp_1, tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var input = (!(suspendResult == null) ? isInterface(suspendResult, Source) : false) ? suspendResult : THROW_CCE();
            return decode(this.m4v_1, input);
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
    this.t43_1 = new PipelinePhase('Before');
    this.u43_1 = new PipelinePhase('State');
    this.v43_1 = new PipelinePhase('After');
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
    Pipeline.call(this, [Phases_getInstance_1().t43_1, Phases_getInstance_1().u43_1, Phases_getInstance_1().v43_1]);
    this.u4v_1 = developmentMode;
  }
  protoOf(HttpReceivePipeline).r2i = function () {
    return this.u4v_1;
  };
  function Phases_2() {
    Phases_instance_2 = this;
    this.v3w_1 = new PipelinePhase('Receive');
    this.w3w_1 = new PipelinePhase('Parse');
    this.x3w_1 = new PipelinePhase('Transform');
    this.y3w_1 = new PipelinePhase('State');
    this.z3w_1 = new PipelinePhase('After');
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
    Pipeline.call(this, [Phases_getInstance_2().v3w_1, Phases_getInstance_2().w3w_1, Phases_getInstance_2().x3w_1, Phases_getInstance_2().y3w_1, Phases_getInstance_2().z3w_1]);
    this.c4w_1 = developmentMode;
  }
  protoOf(HttpResponsePipeline).r2i = function () {
    return this.c4w_1;
  };
  function HttpResponseContainer(expectedType, response) {
    this.t3y_1 = expectedType;
    this.u3y_1 = response;
  }
  protoOf(HttpResponseContainer).uf = function () {
    return this.t3y_1;
  };
  protoOf(HttpResponseContainer).vf = function () {
    return this.u3y_1;
  };
  protoOf(HttpResponseContainer).toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.t3y_1.toString() + ', response=' + toString(this.u3y_1) + ')';
  };
  protoOf(HttpResponseContainer).hashCode = function () {
    var result = this.t3y_1.hashCode();
    result = imul(result, 31) + hashCode(this.u3y_1) | 0;
    return result;
  };
  protoOf(HttpResponseContainer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    if (!this.t3y_1.equals(other.t3y_1))
      return false;
    if (!equals(this.u3y_1, other.u3y_1))
      return false;
    return true;
  };
  function $fetchResponseCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l4w_1 = _this__u8e3s4;
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
            var builder = (new HttpRequestBuilder()).r41(this.l4w_1.p4w_1);
            this.n8_1 = 2;
            suspendResult = this.l4w_1.q4w_1.a3x(builder, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o4w_1 = suspendResult;
            this.n8_1 = 3;
            suspendResult = save(this.o4w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.n4w_1 = suspendResult.x3u();
            this.n8_1 = 4;
            suspendResult = this.l4w_1.r4w(this.o4w_1.x3u(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var tmp_0 = this;
            return this.n4w_1;
          case 5:
            return this.m4w_1;
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
  function $cleanupCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a4x_1 = _this__u8e3s4;
    this.b4x_1 = _this__u8e3s4_0;
  }
  protoOf($cleanupCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var tmp_0 = get_job(this.b4x_1.j1e());
            var job = isInterface(tmp_0, CompletableJob) ? tmp_0 : THROW_CCE();
            this.c4x_1 = job;
            var $this$apply = this.c4x_1;
            $this$apply.l1l();
            if (!get_isSaved(this.b4x_1)) {
              try {
                cancel_1(this.b4x_1.v3x());
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
    this.p4w_1 = builder;
    this.q4w_1 = client;
  }
  protoOf(HttpStatement).d4x = function ($completion) {
    return this.e4x($completion);
  };
  protoOf(HttpStatement).e4x = function ($completion) {
    var tmp = new $fetchResponseCOROUTINE$(this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpStatement).r4w = function (_this__u8e3s4, $completion) {
    var tmp = new $cleanupCOROUTINE$(this, _this__u8e3s4, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(HttpStatement).toString = function () {
    return 'HttpStatement[' + this.p4w_1.x3v_1.toString() + ']';
  };
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_instance;
    return writer(tmp, context, true, observable$slambda_0(_this__u8e3s4, listener, contentLength, null)).m29_1;
  }
  function observable$slambda($this_observable, $listener, $contentLength, resultContinuation) {
    this.n4x_1 = $this_observable;
    this.o4x_1 = $listener;
    this.p4x_1 = $contentLength;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(observable$slambda).b3s = function ($this$writer, $completion) {
    var tmp = this.c3s($this$writer, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(observable$slambda).i9 = function (p1, $completion) {
    return this.b3s(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(observable$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 16;
            this.w4x_1 = get_ByteArrayPool();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.s4x_1 = this.w4x_1;
            this.r4x_1 = this.s4x_1.j2c();
            this.n8_1 = 2;
            continue $sm;
          case 2:
            this.n8_1 = 3;
            continue $sm;
          case 3:
            this.o8_1 = 15;
            this.v4x_1 = this.r4x_1;
            this.t4x_1 = new Long(0, 0);
            this.n8_1 = 4;
            continue $sm;
          case 4:
            if (!!this.n4x_1.x21()) {
              this.n8_1 = 9;
              continue $sm;
            }

            this.n8_1 = 5;
            suspendResult = readAvailable(this.n4x_1, this.v4x_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.u4x_1 = suspendResult;
            if (this.u4x_1 <= 0) {
              this.n8_1 = 4;
              continue $sm;
            } else {
              this.n8_1 = 6;
              continue $sm;
            }

          case 6:
            this.n8_1 = 7;
            suspendResult = writeFully_0(this.q4x_1.o29_1, this.v4x_1, 0, this.u4x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var tmp_0 = this;
            var tmp0 = this.t4x_1;
            var other = this.u4x_1;
            tmp_0.t4x_1 = add(tmp0, fromInt(other));
            this.n8_1 = 8;
            suspendResult = this.o4x_1.x3z(this.t4x_1, this.p4x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.n8_1 = 4;
            continue $sm;
          case 9:
            var closedCause = this.n4x_1.v21();
            close(this.q4x_1.o29_1, closedCause);
            if (closedCause == null && equalsLong(this.t4x_1, new Long(0, 0))) {
              this.n8_1 = 10;
              suspendResult = this.o4x_1.x3z(this.t4x_1, this.p4x_1, this);
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
            this.s4x_1.k2c(this.r4x_1);
            this.n8_1 = 14;
            continue $sm;
          case 13:
            this.o8_1 = 16;
            this.s4x_1.k2c(this.r4x_1);
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
            this.s4x_1.k2c(this.r4x_1);
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
  protoOf(observable$slambda).c3s = function ($this$writer, completion) {
    var i = new observable$slambda(this.n4x_1, this.o4x_1, this.p4x_1, completion);
    i.q4x_1 = $this$writer;
    return i;
  };
  function observable$slambda_0($this_observable, $listener, $contentLength, resultContinuation) {
    var i = new observable$slambda($this_observable, $listener, $contentLength, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.b3s($this$writer, $completion);
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
    this.x4x_1 = response;
    this.y4x_1 = cause;
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
    this.a4y_1 = new Long(0, 0);
  }
  protoOf(EmptyContent).z2w = function () {
    return this.a4y_1;
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
    if (method.equals(Companion_getInstance_2().p2r_1) || method.equals(Companion_getInstance_2().q2r_1))
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
    return this_0.f2n();
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
    tmp.b4y_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_4;
  function Companion_getInstance_11() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function FetchOptions(requestInit) {
    Companion_getInstance_11();
    this.c4y_1 = requestInit;
  }
  function get_initHook() {
    return initHook;
  }
  var initHook;
  function Js() {
  }
  protoOf(Js).d4y = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new JsClientEngineConfig();
    block(this_0);
    return new JsClientEngine(this_0);
  };
  protoOf(Js).b3x = function (block) {
    return this.d4y(block);
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
    tmp.i4y_1 = JsClientEngineConfig$requestInit$lambda;
    this.j4y_1 = Object.create(null);
  }
  function initHook$init$() {
    engines_getInstance().l4y(Js_instance);
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
    this.y4z_1 = _this__u8e3s4;
    this.z4z_1 = data;
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
            this.a50_1 = suspendResult;
            this.c50_1 = this.z4z_1.b41_1.y2c(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.z4z_1)) {
              this.n8_1 = 5;
              suspendResult = executeWebSocketRequest(this.y4z_1, this.z4z_1, this.a50_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 2;
              continue $sm;
            }

          case 2:
            this.b50_1 = GMTDate();
            this.n8_1 = 3;
            suspendResult = toRaw(this.z4z_1, this.c50_1, this.a50_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var rawRequest = suspendResult;
            var tmp0_safe_receiver = this.z4z_1.b41_1.z2c(Companion_getInstance_11().b4y_1);
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c4y_1;
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
              tmp_0 = JsClientEngine$execute$lambda;
            } else {
              tmp_0 = tmp1_elvis_lhs;
            }

            var fetchOptions = tmp_0;
            this.n8_1 = 4;
            suspendResult = commonFetch(this.z4z_1.w40_1.toString(), rawRequest, fetchOptions, this.y4z_1.i50_1, get_job(this.a50_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers, this.z4z_1.x40_1, this.z4z_1.b41_1);
            var version = Companion_getInstance_5().x2r_1;
            var body = readBody(CoroutineScope_0(this.a50_1), rawResponse);
            var tmp2_safe_receiver = this.z4z_1.b41_1.z2c(get_ResponseAdapterAttributeKey());
            var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.x4r(this.z4z_1, status, headers, body, this.z4z_1.z40_1, this.a50_1);
            var responseBody = tmp3_elvis_lhs == null ? body : tmp3_elvis_lhs;
            return new HttpResponseData(status, this.b50_1, headers, version, responseBody, this.a50_1);
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
    this.u4y_1 = _this__u8e3s4;
    this.v4y_1 = urlString_capturingHack;
    this.w4y_1 = headers;
  }
  protoOf($createWebSocketCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            var tmp0 = this.w4y_1.g2f();
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
              var tmp0_safe_receiver = this.w4y_1.f2f(element_0);
              if (tmp0_safe_receiver == null)
                null;
              else {
                destination_0.b1(tmp0_safe_receiver);
              }
            }

            var this_0 = flatten(destination_0);
            tmp_0.y4y_1 = copyToArray(this_0);
            if (PlatformUtils_getInstance().u2e_1) {
              this.x4y_1 = new WebSocket(this.v4y_1, this.y4y_1);
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
            this.w4y_1.h2f(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
            this.x4y_1 = new ws_capturingHack(this.v4y_1, this.y4y_1, {headers: headers_capturingHack});
            this.n8_1 = 2;
            continue $sm;
          case 2:
            return this.x4y_1;
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
    this.h4z_1 = _this__u8e3s4;
    this.i4z_1 = request;
    this.j4z_1 = callContext;
  }
  protoOf($executeWebSocketRequestCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 5;
            this.l4z_1 = GMTDate();
            this.o4z_1 = this.i4z_1.w40_1.toString();
            this.p4z_1 = this.i4z_1.b41_1.y2c(get_WEBSOCKETS_KEY());
            this.n8_1 = 1;
            suspendResult = createWebSocket(this.h4z_1, this.o4z_1, this.i4z_1.y40_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m4z_1 = suspendResult;
            this.k4z_1 = new JsWebSocketSession(this.j4z_1, this.m4z_1, this.p4z_1.e4r_1);
            this.o8_1 = 3;
            this.n8_1 = 2;
            suspendResult = awaitConnection(this.m4z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n4z_1 = suspendResult;
            this.o8_1 = 5;
            this.n8_1 = 4;
            continue $sm;
          case 3:
            this.o8_1 = 5;
            var tmp_0 = this.q8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.q8_1;
              var tmp_1 = this;
              cancel_3(this.j4z_1, CancellationException_0('Failed to connect to ' + this.o4z_1, cause));
              throw cause;
            } else {
              throw this.q8_1;
            }

          case 4:
            this.o8_1 = 5;
            var this_0 = this.m4z_1.protocol;
            var tmp_2;
            if (charSequenceLength(this_0) > 0) {
              tmp_2 = this_0;
            } else {
              tmp_2 = null;
            }

            var protocol = tmp_2;
            var headers = !(protocol == null) ? headersOf('Sec-WebSocket-Protocol', protocol) : Companion_getInstance_4().c2n_1;
            return new HttpResponseData(Companion_getInstance_1().f2s_1, this.l4z_1, headers, Companion_getInstance_5().x2r_1, this.k4z_1, this.j4z_1);
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
    this.i50_1 = config;
    this.j50_1 = setOf_0([HttpTimeoutCapability_instance, WebSocketCapability_instance, SSECapability_instance]);
    // Inline function 'kotlin.check' call
    if (!(this.i50_1.j42_1 == null)) {
      var message = 'Proxy unsupported in Js engine.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(JsClientEngine).d3w = function () {
    return this.i50_1;
  };
  protoOf(JsClientEngine).d41 = function () {
    return this.j50_1;
  };
  protoOf(JsClientEngine).f42 = function (data, $completion) {
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
    this.k50_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).f1i = function () {
    return this.k50_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).k3 = function () {
    return this.k50_1;
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
      return Companion_getInstance().u23_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer(_this__u8e3s4, VOID, VOID, channelFromStream$slambda_0(stream, null)).m29_1;
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
    this.t50_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(channelFromStream$slambda).b3s = function ($this$writer, $completion) {
    var tmp = this.c3s($this$writer, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(channelFromStream$slambda).i9 = function (p1, $completion) {
    return this.b3s(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(channelFromStream$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 9;
            this.w50_1 = this.t50_1.getReader();
            this.o8_1 = 7;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.n8_1 = 6;
              continue $sm;
            }

            this.n8_1 = 2;
            suspendResult = readChunk(this.w50_1, this);
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
              this.x50_1 = tmp0_elvis_lhs;
              this.n8_1 = 3;
              continue $sm;
            }

          case 3:
            var chunk = this.x50_1;
            this.n8_1 = 4;
            suspendResult = writeFully_0(this.u50_1.o29_1, asByteArray(chunk), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.n8_1 = 5;
            suspendResult = this.u50_1.o29_1.o21(this);
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
              this.v50_1 = this.q8_1;
              this.n8_1 = 8;
              var tmp_2 = this.w50_1.cancel(this.v50_1);
              suspendResult = await_0(tmp_2.catch(channelFromStream$slambda$lambda), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.q8_1;
            }

          case 8:
            throw this.v50_1;
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
  protoOf(channelFromStream$slambda).c3s = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.t50_1, completion);
    i.u50_1 = $this$writer;
    return i;
  };
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.b3s($this$writer, $completion);
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
    config.i4y_1(init);
    requestConfig(init);
    callJob.n1f(true, VOID, commonFetch$lambda(controller));
    var tmp;
    if (PlatformUtils_getInstance().u2e_1) {
      tmp = fetch(input, init);
    } else {
      var options = Object.assign(Object.create(null), init, config.j4y_1);
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
    var resolved = Companion_getInstance_6().c3f($receiver);
    return resolved == null || equals(resolved, Codes_CLOSED_ABNORMALLY_getInstance());
  }
  function sam$kotlinx_coroutines_DisposableHandle$0_0(function_0) {
    this.y50_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).f1i = function () {
    return this.y50_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).k3 = function () {
    return this.y50_1;
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
          this$0.b51_1.k1l(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0.c51_1.n1v(frame);
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
      this$0.b51_1.k1l(cause);
      this$0.c51_1.s1v(cause);
      this$0.d51_1.w1v();
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
      this$0.b51_1.j1l(reason);
      this$0.c51_1.n1v(Close_init_$Create$(reason));
      this$0.c51_1.u1v();
      this$0.d51_1.w1v();
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
        this$0.a51_1.close();
      } else {
        this$0.a51_1.close(Codes_NORMAL_getInstance().z3e_1, 'Client failed');
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
        if (tmp0.a51_1.readyState === WebSocket.OPEN) {
          if (cause == null) {
            this$0.a51_1.close();
          } else {
            this$0.a51_1.close(Codes_NORMAL_getInstance().z3e_1, 'Client failed');
          }
          break $l$block;
        }
        // Inline function 'io.ktor.client.utils.addEventListener' call
        var this_0 = tmp0.a51_1;
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
    this.p51_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsWebSocketSession$slambda).u2a = function ($this$launch, $completion) {
    var tmp = this.v2a($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(JsWebSocketSession$slambda).i9 = function (p1, $completion) {
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
            this.u51_1 = this.p51_1.d51_1;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.s51_1 = this.u51_1;
            this.r51_1 = null;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            this.n8_1 = 3;
            continue $sm;
          case 3:
            this.o8_1 = 9;
            this.o8_1 = 8;
            this.t51_1 = this.s51_1.t();
            this.n8_1 = 4;
            continue $sm;
          case 4:
            this.n8_1 = 5;
            suspendResult = this.t51_1.p1t(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.n8_1 = 6;
              continue $sm;
            }

            var e = this.t51_1.v();
            switch (e.b3j_1.a1_1) {
              case 0:
                var text = e.c3j_1;
                this.p51_1.a51_1.send(decodeToString(text, 0, 0 + text.length | 0));
                break;
              case 1:
                var tmp_0 = e.c3j_1;
                var source = tmp_0 instanceof Int8Array ? tmp_0 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.p51_1.a51_1.send(frameData);
                break;
              case 2:
                var builder = new Buffer();
                writeFully(builder, e.c3j_1);
                var data = builder;
                var code = data.l1b();
                var reason = readText(data);
                this.p51_1.b51_1.j1l(new CloseReason(code, reason));
                if (isReservedStatusCode(this.p51_1, code)) {
                  this.p51_1.a51_1.close();
                } else {
                  this.p51_1.a51_1.close(code, reason);
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
            cancelConsumed(this.s51_1, this.r51_1);
            this.n8_1 = 12;
            continue $sm;
          case 8:
            this.o8_1 = 9;
            var tmp_2 = this.q8_1;
            if (tmp_2 instanceof Error) {
              var e_0 = this.q8_1;
              var tmp_3 = this;
              this.r51_1 = e_0;
              throw e_0;
            } else {
              throw this.q8_1;
            }

          case 9:
            this.o8_1 = 10;
            var t = this.q8_1;
            cancelConsumed(this.s51_1, this.r51_1);
            throw t;
          case 10:
            throw this.q8_1;
          case 11:
            this.o8_1 = 10;
            cancelConsumed(this.s51_1, this.r51_1);
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
    var i = new JsWebSocketSession$slambda(this.p51_1, completion);
    i.q51_1 = $this$launch;
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
    this.z50_1 = coroutineContext;
    this.a51_1 = websocket;
    this.b51_1 = CompletableDeferred();
    this.c51_1 = from(Factory_getInstance(), channelsConfig.n3f_1);
    this.d51_1 = from(Factory_getInstance(), channelsConfig.o3f_1);
    this.e51_1 = this.c51_1;
    this.f51_1 = this.d51_1;
    this.g51_1 = this.b51_1;
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_0 = this.a51_1;
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
    var this_1 = this.a51_1;
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
    var this_2 = this.a51_1;
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
    var tmp0_safe_receiver = this.z50_1.a9(Key_instance);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1f(JsWebSocketSession$lambda_5(this, onMessage, onError));
    }
    // Inline function 'org.w3c.dom.ARRAYBUFFER' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9 = 'arraybuffer';
    this.a51_1.binaryType = tmp$ret$9;
    launch(this, VOID, VOID, JsWebSocketSession$slambda_0(this, null));
    // Inline function 'kotlin.require' call
    if (!!channelsConfig.n3f_1.t3m()) {
      var message = 'Suspendable channels are not supported in JS.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(JsWebSocketSession).j1e = function () {
    return this.z50_1;
  };
  protoOf(JsWebSocketSession).j3f = function () {
    return this.e51_1;
  };
  protoOf(JsWebSocketSession).k3f = function () {
    return this.f51_1;
  };
  protoOf(JsWebSocketSession).h3f = function (_) {
    throw WebSocketException_init_$Create$('Max frame size switch is not supported in Js engine.');
  };
  protoOf(JsWebSocketSession).i3f = function () {
    return new Long(-1, 2147483647);
  };
  protoOf(JsWebSocketSession).g3f = function (negotiatedExtensions) {
    // Inline function 'kotlin.require' call
    if (!negotiatedExtensions.r()) {
      var message = 'Extensions are not supported.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(JsWebSocketSession).o21 = function ($completion) {
    return Unit_instance;
  };
  function toRaw(_this__u8e3s4, clientConfig, callContext, $completion) {
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
      $this$buildObject.method = $this_toRaw.x40_1.u2r_1;
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.o3w_1) {
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
    this.a53_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getBodyBytes$slambda).b3s = function ($this$writer, $completion) {
    var tmp = this.c3s($this$writer, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(getBodyBytes$slambda).i9 = function (p1, $completion) {
    return this.b3s(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
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
            suspendResult = this.a53_1.y2x(this.b53_1.o29_1, this);
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
  protoOf(getBodyBytes$slambda).c3s = function ($this$writer, completion) {
    var i = new getBodyBytes$slambda(this.a53_1, completion);
    i.b53_1 = $this$writer;
    return i;
  };
  function getBodyBytes$slambda_0($content, resultContinuation) {
    var i = new getBodyBytes$slambda($content, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.b3s($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $toRawCOROUTINE$(_this__u8e3s4, clientConfig, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d52_1 = _this__u8e3s4;
    this.e52_1 = clientConfig;
    this.f52_1 = callContext;
  }
  protoOf($toRawCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.g52_1 = {};
            var this_0 = this.d52_1;
            var skipContentLengthHeader = !get_supportsRequestBody(this_0.x40_1) && isEmpty(this_0.z40_1);
            mergeHeaders(this_0.y40_1, this_0.z40_1, toRaw$lambda(skipContentLengthHeader, this.g52_1));
            this.n8_1 = 1;
            suspendResult = getBodyBytes(this.d52_1.z40_1, this.f52_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return buildObject(toRaw$lambda_0(this.d52_1, this.g52_1, this.e52_1, bodyBytes));
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
    this.p52_1 = content;
    this.q52_1 = callContext;
  }
  protoOf($getBodyBytesCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            var tmp0_subject = this.p52_1;
            if (tmp0_subject instanceof ByteArrayContent) {
              this.r52_1 = this.p52_1.a2x();
              this.n8_1 = 5;
              continue $sm;
            } else {
              if (tmp0_subject instanceof ReadChannelContent) {
                this.n8_1 = 3;
                suspendResult = readRemaining(this.p52_1.w2x(), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (tmp0_subject instanceof WriteChannelContent) {
                  this.n8_1 = 2;
                  var tmp_0 = GlobalScope_instance;
                  suspendResult = readRemaining(writer(tmp_0, this.q52_1, VOID, getBodyBytes$slambda_0(this.p52_1, null)).m29_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject instanceof ContentWrapper) {
                    this.n8_1 = 1;
                    suspendResult = getBodyBytes(this.p52_1.c2y(), this.q52_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp0_subject instanceof NoContent) {
                      this.r52_1 = null;
                      this.n8_1 = 5;
                      continue $sm;
                    } else {
                      if (tmp0_subject instanceof ProtocolUpgrade) {
                        var tmp_1 = this;
                        throw new UnsupportedContentTypeException(this.p52_1);
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
            this.r52_1 = suspendResult;
            this.n8_1 = 5;
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.r52_1 = readByteArray(ARGUMENT);
            this.n8_1 = 5;
            continue $sm;
          case 3:
            var ARGUMENT_0 = suspendResult;
            this.r52_1 = readByteArray(ARGUMENT_0);
            this.n8_1 = 5;
            continue $sm;
          case 4:
            throw this.q8_1;
          case 5:
            return this.r52_1;
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
    this.c53_1 = item;
    this.d53_1 = next;
  }
  function engines$iterator$1() {
    this.e53_1 = engines_getInstance().k4y_1.kotlinx$atomicfu$value;
  }
  protoOf(engines$iterator$1).v = function () {
    var result = ensureNotNull(this.e53_1);
    this.e53_1 = result.d53_1;
    return result.c53_1;
  };
  protoOf(engines$iterator$1).u = function () {
    return !(null == this.e53_1);
  };
  function engines() {
    engines_instance = this;
    this.k4y_1 = atomic$ref$1(null);
  }
  protoOf(engines).l4y = function (item) {
    $l$loop: while (true) {
      var current = this.k4y_1.kotlinx$atomicfu$value;
      var new_0 = new Node(item, current);
      if (this.k4y_1.atomicfu$compareAndSet(current, new_0))
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
  protoOf(ProxyBuilder).f53 = function (url) {
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
  protoOf(HttpClientEngineBase).d41 = get_supportedCapabilities;
  protoOf(HttpClientEngineBase).e3w = install;
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
  protoOf(JsWebSocketSession).l3f = send;
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
