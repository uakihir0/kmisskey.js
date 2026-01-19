(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-io-kotlinx-io-core.js', './kotlinx-atomicfu.js', './kotlinx-io-kotlinx-io-bytestring.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./kotlinx-atomicfu.js'), require('./kotlinx-io-kotlinx-io-bytestring.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-bytestring'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-io-kotlinx-io-bytestring' was not found. Please, check whether 'kotlinx-io-kotlinx-io-bytestring' is loaded prior to 'ktor-ktor-io'.");
    }
    globalThis['ktor-ktor-io'] = factory(typeof globalThis['ktor-ktor-io'] === 'undefined' ? {} : globalThis['ktor-ktor-io'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['kotlinx-atomicfu'], globalThis['kotlinx-io-kotlinx-io-bytestring']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring) {
  'use strict';
  //region block: imports
  var Companion_instance = kotlin_kotlin.$_$.q4;
  var Unit_instance = kotlin_kotlin.$_$.v4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m2;
  var protoOf = kotlin_kotlin.$_$.ob;
  var initMetadataForCompanion = kotlin_kotlin.$_$.pa;
  var initMetadataForObject = kotlin_kotlin.$_$.ua;
  var toString = kotlin_kotlin.$_$.ng;
  var hashCode = kotlin_kotlin.$_$.na;
  var equals = kotlin_kotlin.$_$.ia;
  var initMetadataForClass = kotlin_kotlin.$_$.oa;
  var createFailure = kotlin_kotlin.$_$.cg;
  var Result = kotlin_kotlin.$_$.kf;
  var initMetadataForInterface = kotlin_kotlin.$_$.sa;
  var toString_0 = kotlin_kotlin.$_$.je;
  var newThrowable = kotlin_kotlin.$_$.jb;
  var stackTraceToString = kotlin_kotlin.$_$.mg;
  var VOID = kotlin_kotlin.$_$.b;
  var isInterface = kotlin_kotlin.$_$.db;
  var CoroutineImpl = kotlin_kotlin.$_$.v8;
  var fromInt = kotlin_kotlin.$_$.j9;
  var compare = kotlin_kotlin.$_$.d9;
  var numberToLong = kotlin_kotlin.$_$.q9;
  var add = kotlin_kotlin.$_$.a9;
  var intercepted = kotlin_kotlin.$_$.h8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.kg;
  var returnIfSuspended = kotlin_kotlin.$_$.f;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.e8;
  var Long = kotlin_kotlin.$_$.hf;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.qa;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var convertToInt = kotlin_kotlin.$_$.f9;
  var IllegalStateException = kotlin_kotlin.$_$.gf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.q1;
  var captureStack = kotlin_kotlin.$_$.z9;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var decodeToString = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.d;
  var replace = kotlin_kotlin.$_$.ld;
  var indexOf = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.i;
  var THROW_CCE = kotlin_kotlin.$_$.mf;
  var equalsLong = kotlin_kotlin.$_$.i9;
  var get_ONE = kotlin_kotlin.$_$.z8;
  var toString_1 = kotlin_kotlin.$_$.rb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var subtract = kotlin_kotlin.$_$.t9;
  var EOFException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.a;
  var readString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.o;
  var closeFinally = kotlin_kotlin.$_$.ag;
  var readByteString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.l;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.b4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var startCoroutineCancellable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var Continuation = kotlin_kotlin.$_$.p8;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.ra;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var initMetadataForLambda = kotlin_kotlin.$_$.ta;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.x;
  var CancellationException = kotlin_kotlin.$_$.d8;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var readString_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.m;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var listOf = kotlin_kotlin.$_$.a7;
  var IOException_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.e;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.a1;
  var charSequenceLength = kotlin_kotlin.$_$.ea;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var readString_1 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.n;
  var encodeToByteArray = kotlin_kotlin.$_$.vc;
  var writeString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.p;
  var AutoCloseable = kotlin_kotlin.$_$.ve;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e2;
  var replace_0 = kotlin_kotlin.$_$.md;
  var getStringHashCode = kotlin_kotlin.$_$.ma;
  var IOException_init_$Init$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.b;
  var charSequenceSubSequence = kotlin_kotlin.$_$.fa;
  var readByteArray_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var isCharSequence = kotlin_kotlin.$_$.za;
  var trim = kotlin_kotlin.$_$.re;
  var toByte = kotlin_kotlin.$_$.pb;
  var decodeToString_0 = kotlin_kotlin.$_$.tc;
  var setOf = kotlin_kotlin.$_$.m7;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var charSequenceGet = kotlin_kotlin.$_$.da;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.k2;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject(Empty, 'Empty');
  initMetadataForClass(Closed, 'Closed');
  function resume() {
    return this.d1x().y8(Companion_getInstance().a1x_1);
  }
  function resume_0(throwable) {
    var tmp = this.d1x();
    var tmp_0;
    if (throwable == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(throwable));
      tmp_0 = new Result(tmp$ret$2);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp.y8(tmp1_elvis_lhs == null ? Companion_getInstance().a1x_1 : tmp1_elvis_lhs.gm_1);
  }
  initMetadataForInterface(Task, 'Task');
  initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
  initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
  initMetadataForCoroutine($awaitContentCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushAndCloseCOROUTINE$, CoroutineImpl);
  function awaitContent$default(min, $completion, $super) {
    min = min === VOID ? 1 : min;
    return $super === VOID ? this.k1z(min, $completion) : $super.k1z.call(this, min, $completion);
  }
  initMetadataForInterface(ByteReadChannel_1, 'ByteReadChannel', VOID, VOID, VOID, [1]);
  function get_autoFlush() {
    return false;
  }
  initMetadataForInterface(ByteWriteChannel, 'ByteWriteChannel', VOID, VOID, VOID, [0]);
  initMetadataForClass(ByteChannel, 'ByteChannel', ByteChannel, VOID, [ByteReadChannel_1, ByteWriteChannel], [1, 0]);
  initMetadataForClass(ConcurrentIOException, 'ConcurrentIOException', VOID, IllegalStateException);
  initMetadataForCoroutine($findNextCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($advanceToNextPotentialMatchCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($checkFullMatchCOROUTINE$, CoroutineImpl);
  initMetadataForClass(ByteChannelScanner, 'ByteChannelScanner', VOID, VOID, VOID, [1, 0]);
  initMetadataForClass(ByteReadChannel$Companion$Empty$1, VOID, VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForCompanion(Companion_0);
  initMetadataForCoroutine($readRemainingCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($discardCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readAvailableCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($toByteArrayCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($copyToCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($skipIfFoundCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readPacketCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readUTF8LineToCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readBufferCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($peekCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($copyToCOROUTINE$_0, CoroutineImpl);
  initMetadataForCoroutine($flushIfNeededCOROUTINE$, CoroutineImpl);
  initMetadataForClass(WriterJob, 'WriterJob');
  initMetadataForClass(WriterScope, 'WriterScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(NO_CALLBACK$1, VOID, VOID, VOID, [Continuation]);
  initMetadataForFunctionReference(ByteWriteChannel$flushAndClose$ref, VOID, VOID, [0]);
  initMetadataForLambda(writer$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($writePacketCOROUTINE$, CoroutineImpl);
  initMetadataForClass(CloseToken, 'CloseToken');
  initMetadataForCoroutine($awaitContentCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(CountedByteReadChannel, 'CountedByteReadChannel', VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForClass(ClosedByteChannelException, 'ClosedByteChannelException', ClosedByteChannelException, IOException);
  initMetadataForClass(ClosedReadChannelException, 'ClosedReadChannelException', ClosedReadChannelException, ClosedByteChannelException);
  initMetadataForClass(ClosedWriteChannelException, 'ClosedWriteChannelException', ClosedWriteChannelException, ClosedByteChannelException);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(LineEndingMode, 'LineEndingMode');
  initMetadataForClass(SourceByteReadChannel, 'SourceByteReadChannel', VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForClass(MalformedInputException, 'MalformedInputException', VOID, IOException);
  initMetadataForClass(TooLongLineException, 'TooLongLineException', VOID, MalformedInputException);
  function close() {
    this.i1h();
  }
  initMetadataForInterface(ObjectPool, 'ObjectPool', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(DefaultPool, 'DefaultPool', VOID, VOID, [ObjectPool]);
  initMetadataForClass(ByteArrayPool$1, VOID, VOID, DefaultPool);
  initMetadataForClass(NoPoolImpl, 'NoPoolImpl', VOID, VOID, [ObjectPool]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Charset, 'Charset');
  initMetadataForObject(Charsets, 'Charsets');
  initMetadataForClass(CharsetDecoder, 'CharsetDecoder');
  initMetadataForClass(CharsetEncoder, 'CharsetEncoder');
  initMetadataForClass(CharsetImpl, 'CharsetImpl', VOID, Charset);
  initMetadataForClass(CharsetEncoderImpl, 'CharsetEncoderImpl', VOID, CharsetEncoder);
  initMetadataForClass(CharsetDecoderImpl, 'CharsetDecoderImpl', VOID, CharsetDecoder);
  initMetadataForClass(toKtor$1);
  initMetadataForClass(TextDecoderFallback, 'TextDecoderFallback');
  //endregion
  function Companion() {
    Companion_instance_0 = this;
    this.z1w_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    tmp.a1x_1 = _Result___init__impl__xyqfz8(Unit_instance);
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Empty() {
  }
  protoOf(Empty).toString = function () {
    return 'Empty';
  };
  protoOf(Empty).hashCode = function () {
    return -231472095;
  };
  protoOf(Empty).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Empty))
      return false;
    return true;
  };
  var Empty_instance;
  function Empty_getInstance() {
    return Empty_instance;
  }
  function Closed(cause) {
    this.b1x_1 = cause;
  }
  protoOf(Closed).toString = function () {
    return 'Closed(cause=' + toString(this.b1x_1) + ')';
  };
  protoOf(Closed).hashCode = function () {
    return this.b1x_1 == null ? 0 : hashCode(this.b1x_1);
  };
  protoOf(Closed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    if (!equals(this.b1x_1, other.b1x_1))
      return false;
    return true;
  };
  function Task() {
  }
  function Read(continuation) {
    this.h1x_1 = continuation;
    this.i1x_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.h1x_1), 16));
      stackTraceToString(this_0);
      tmp.i1x_1 = this_0;
    }
  }
  protoOf(Read).d1x = function () {
    return this.h1x_1;
  };
  protoOf(Read).c1x = function () {
    return this.i1x_1;
  };
  protoOf(Read).e1x = function () {
    return 'read';
  };
  function Write(continuation) {
    this.j1x_1 = continuation;
    this.k1x_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.j1x_1), 16));
      stackTraceToString(this_0);
      tmp.k1x_1 = this_0;
    }
  }
  protoOf(Write).d1x = function () {
    return this.j1x_1;
  };
  protoOf(Write).c1x = function () {
    return this.k1x_1;
  };
  protoOf(Write).e1x = function () {
    return 'write';
  };
  function moveFlushToReadBuffer($this) {
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    $this.o1x_1;
    $this.m1x_1.e1b($this.q1x_1);
    $this.n1x_1 = 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = $this.p1x_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Write) {
      tmp = $this.p1x_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.f1x();
    }
  }
  function closeSlot($this, cause) {
    var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().z1w_1;
    var continuation = $this.p1x_1.atomicfu$getAndSet(closeContinuation);
    if (isInterface(continuation, Task)) {
      continuation.g1x(cause);
    }
  }
  function ClosedReadChannelException$_init_$ref_ix0089() {
    var l = function (p0) {
      return new ClosedReadChannelException(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function ClosedWriteChannelException$_init_$ref_ef15ty() {
    var l = function (p0) {
      return new ClosedWriteChannelException(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function $awaitContentCOROUTINE$(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b1y_1 = _this__u8e3s4;
    this.c1y_1 = min;
  }
  protoOf($awaitContentCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            rethrowCloseCauseIfNeeded(this.b1y_1);
            if (compare(this.b1y_1.q1x_1.e1(), fromInt(this.c1y_1)) >= 0)
              return true;
            this.d1y_1 = this.b1y_1;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(add(numberToLong(this.b1y_1.n1x_1), this.b1y_1.q1x_1.e1()), fromInt(this.c1y_1)) < 0 && this.b1y_1.s1x_1.kotlinx$atomicfu$value == null)) {
              this.n8_1 = 3;
              continue $sm;
            }

            this.n8_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.l1i();
            var tmp0 = this.d1y_1;
            var tmp2 = new Read(cancellable);
            l$ret$1: do {
              var previous = tmp0.p1x_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.p1x_1.atomicfu$compareAndSet(previous, tmp2)) {
                  tmp2.f1x();
                  break l$ret$1;
                }
              }
              if (previous instanceof Read) {
                previous.g1x(new ConcurrentIOException(tmp2.e1x(), previous.c1x()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.f1x();
                } else {
                  if (previous instanceof Closed) {
                    tmp2.g1x(previous.b1x_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(compare(add(numberToLong(this.b1y_1.n1x_1), this.b1y_1.q1x_1.e1()), fromInt(this.c1y_1)) < 0 && this.b1y_1.s1x_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.p1x_1.kotlinx$atomicfu$value;
                var tmp_0;
                if (current instanceof Read) {
                  tmp_0 = tmp0.p1x_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  current.f1x();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.r1f(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n8_1 = 1;
            continue $sm;
          case 3:
            if (compare(this.b1y_1.q1x_1.e1(), new Long(1048576, 0)) < 0) {
              moveFlushToReadBuffer(this.b1y_1);
            }

            return compare(this.b1y_1.q1x_1.e1(), fromInt(this.c1y_1)) >= 0;
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
  function $flushCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m1y_1 = _this__u8e3s4;
  }
  protoOf($flushCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            rethrowCloseCauseIfNeeded(this.m1y_1);
            this.m1y_1.o1y();
            if (this.m1y_1.n1x_1 < 1048576)
              return Unit_instance;
            this.n1y_1 = this.m1y_1;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!(this.m1y_1.n1x_1 >= 1048576 && this.m1y_1.s1x_1.kotlinx$atomicfu$value == null)) {
              this.n8_1 = 3;
              continue $sm;
            }

            this.n8_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.l1i();
            var tmp0 = this.n1y_1;
            var tmp2 = new Write(cancellable);
            l$ret$1: do {
              var previous = tmp0.p1x_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.p1x_1.atomicfu$compareAndSet(previous, tmp2)) {
                  tmp2.f1x();
                  break l$ret$1;
                }
              }
              if (previous instanceof Write) {
                previous.g1x(new ConcurrentIOException(tmp2.e1x(), previous.c1x()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.f1x();
                } else {
                  if (previous instanceof Closed) {
                    tmp2.g1x(previous.b1x_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(this.m1y_1.n1x_1 >= 1048576 && this.m1y_1.s1x_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.p1x_1.kotlinx$atomicfu$value;
                var tmp_0;
                if (current instanceof Write) {
                  tmp_0 = tmp0.p1x_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  current.f1x();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.r1f(), this);
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
  function $flushAndCloseCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x1y_1 = _this__u8e3s4;
  }
  protoOf($flushAndCloseCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            var this_0 = this.x1y_1;
            this.o8_1 = 2;
            this.z1y_1 = Companion_instance;
            this.n8_1 = 1;
            suspendResult = this_0.a1z(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0 = this;
            this.z1y_1;
            tmp_0.y1y_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.o8_1 = 4;
            this.n8_1 = 3;
            continue $sm;
          case 2:
            this.o8_1 = 4;
            var tmp_1 = this.q8_1;
            if (tmp_1 instanceof Error) {
              var e = this.q8_1;
              var tmp_2 = this;
              tmp_2.y1y_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n8_1 = 3;
              continue $sm;
            } else {
              throw this.q8_1;
            }

          case 3:
            this.o8_1 = 4;
            if (!this.x1y_1.s1x_1.atomicfu$compareAndSet(null, get_CLOSED()))
              return Unit_instance;
            closeSlot(this.x1y_1, null);
            return Unit_instance;
          case 4:
            throw this.q8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o8_1 === 4) {
          throw e_0;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e_0;
        }
      }
     while (true);
  };
  function ByteChannel(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    this.l1x_1 = autoFlush;
    this.m1x_1 = new Buffer();
    this.n1x_1 = 0;
    this.o1x_1 = new Object();
    this.p1x_1 = atomic$ref$1(Empty_instance);
    this.q1x_1 = new Buffer();
    this.r1x_1 = new Buffer();
    this.s1x_1 = atomic$ref$1(null);
  }
  protoOf(ByteChannel).b1z = function () {
    return this.l1x_1;
  };
  protoOf(ByteChannel).c1z = function () {
    var tmp0_safe_receiver = this.s1x_1.kotlinx$atomicfu$value;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.e1z(ClosedReadChannelException$_init_$ref_ix0089());
    }
    if (this.q1x_1.b1a()) {
      moveFlushToReadBuffer(this);
    }
    return this.q1x_1;
  };
  protoOf(ByteChannel).f1z = function () {
    if (this.g1z()) {
      var tmp0_safe_receiver = this.s1x_1.kotlinx$atomicfu$value;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp = tmp0_safe_receiver.e1z(ClosedWriteChannelException$_init_$ref_ef15ty());
      }
      if (tmp == null)
        throw new ClosedWriteChannelException();
    }
    return this.r1x_1;
  };
  protoOf(ByteChannel).h1z = function () {
    var tmp0_safe_receiver = this.s1x_1.kotlinx$atomicfu$value;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i1z();
  };
  protoOf(ByteChannel).g1z = function () {
    return !(this.s1x_1.kotlinx$atomicfu$value == null);
  };
  protoOf(ByteChannel).j1z = function () {
    return !(this.h1z() == null) || (this.g1z() && this.n1x_1 === 0 && this.q1x_1.b1a());
  };
  protoOf(ByteChannel).k1z = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$(this, min, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(ByteChannel).a1z = function ($completion) {
    var tmp = new $flushCOROUTINE$(this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(ByteChannel).o1y = function () {
    if (this.r1x_1.b1a())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.o1x_1;
    var count = convertToInt(this.r1x_1.e1());
    this.m1x_1.t1b(this.r1x_1);
    this.n1x_1 = this.n1x_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.p1x_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Read) {
      tmp = this.p1x_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.f1x();
    }
  };
  protoOf(ByteChannel).h4 = function () {
    this.o1y();
    if (!this.s1x_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
  };
  protoOf(ByteChannel).m1z = function ($completion) {
    var tmp = new $flushAndCloseCOROUTINE$(this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(ByteChannel).n1z = function (cause) {
    if (!(this.s1x_1.kotlinx$atomicfu$value == null))
      return Unit_instance;
    var closedToken = new CloseToken(cause);
    this.s1x_1.atomicfu$compareAndSet(null, closedToken);
    var wrappedCause = closedToken.i1z();
    closeSlot(this, wrappedCause);
  };
  protoOf(ByteChannel).toString = function () {
    return 'ByteChannel[' + hashCode(this) + ']';
  };
  function ConcurrentIOException(taskName, cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$('Concurrent ' + taskName + ' attempts', cause, this);
    captureStack(this, ConcurrentIOException);
  }
  function ByteReadChannel(content, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? content.length : length;
    // Inline function 'kotlin.also' call
    var this_0 = new Buffer();
    this_0.k1b(content, offset, offset + length | 0);
    var source = this_0;
    return ByteReadChannel_0(source);
  }
  function ByteReadChannel_0(source) {
    return new SourceByteReadChannel(source);
  }
  function buildPartialMatchTable($this) {
    var table = new Int32Array($this.p1z_1.e1());
    var j = 0;
    var inductionVariable = 1;
    var last = $this.p1z_1.e1();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        while (j > 0 && !($this.p1z_1.d1(i) === $this.p1z_1.d1(j))) {
          j = table[j - 1 | 0];
        }
        if ($this.p1z_1.d1(i) === $this.p1z_1.d1(j)) {
          j = j + 1 | 0;
        }
        table[i] = j;
      }
       while (inductionVariable < last);
    return table;
  }
  function advanceToNextPotentialMatch($this, $completion) {
    var tmp = new $advanceToNextPotentialMatchCOROUTINE$($this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function checkFullMatch($this, $completion) {
    var tmp = new $checkFullMatchCOROUTINE$($this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function checkBounds($this, extra) {
    if (compare(add($this.v1z_1, extra), $this.r1z_1) > 0) {
      throw IOException_init_$Create$('Limit of ' + $this.r1z_1.toString() + ' bytes exceeded ' + ('while searching for "' + toSingleLineString($this, $this.p1z_1) + '"'));
    }
  }
  function toSingleLineString($this, _this__u8e3s4) {
    return replace(decodeToString(_this__u8e3s4), '\n', '\\n');
  }
  function $findNextCOROUTINE$(_this__u8e3s4, ignoreMissing, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a21_1 = _this__u8e3s4;
    this.b21_1 = ignoreMissing;
  }
  protoOf($findNextCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 9;
            this.a21_1.v1z_1 = new Long(0, 0);
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!this.a21_1.s1z_1.b1a()) {
              this.c21_1 = true;
              this.n8_1 = 3;
              continue $sm;
            } else {
              this.n8_1 = 2;
              suspendResult = this.a21_1.o1z_1.l1z(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.c21_1 = suspendResult;
            this.n8_1 = 3;
            continue $sm;
          case 3:
            if (!this.c21_1) {
              this.n8_1 = 7;
              continue $sm;
            }

            this.n8_1 = 4;
            suspendResult = advanceToNextPotentialMatch(this.a21_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.n8_1 = 5;
            suspendResult = checkFullMatch(this.a21_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (suspendResult) {
              return this.a21_1.v1z_1;
            } else {
              this.n8_1 = 6;
              continue $sm;
            }

          case 6:
            this.n8_1 = 1;
            continue $sm;
          case 7:
            if (!this.b21_1) {
              throw IOException_init_$Create$('Expected "' + toSingleLineString(this.a21_1, this.a21_1.p1z_1) + '" but encountered end of input');
            }

            this.a21_1.v1z_1 = add(this.a21_1.v1z_1, this.a21_1.u1z_1.e1b(this.a21_1.q1z_1.f1z()));
            this.n8_1 = 8;
            suspendResult = this.a21_1.q1z_1.a1z(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return this.a21_1.v1z_1;
          case 9:
            throw this.q8_1;
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
  function $advanceToNextPotentialMatchCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f20_1 = _this__u8e3s4;
  }
  protoOf($advanceToNextPotentialMatchCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 8;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!this.f20_1.s1z_1.b1a()) {
              this.g20_1 = true;
              this.n8_1 = 3;
              continue $sm;
            } else {
              this.n8_1 = 2;
              suspendResult = this.f20_1.o1z_1.l1z(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.g20_1 = suspendResult;
            this.n8_1 = 3;
            continue $sm;
          case 3:
            if (!this.g20_1) {
              this.n8_1 = 7;
              continue $sm;
            }

            var nextMatch = indexOf(this.f20_1.s1z_1, this.f20_1.p1z_1.d1(0));
            if (equalsLong(nextMatch, new Long(-1, -1))) {
              var tmp_0 = this.f20_1.s1z_1;
              checkBounds(this.f20_1, (tmp_0 instanceof Buffer ? tmp_0 : THROW_CCE()).e1());
              this.f20_1.v1z_1 = add(this.f20_1.v1z_1, this.f20_1.s1z_1.e1b(this.f20_1.q1z_1.f1z()));
              this.n8_1 = 5;
              suspendResult = flushIfNeeded(this.f20_1.q1z_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              checkBounds(this.f20_1, nextMatch);
              var tmp_1 = this.f20_1;
              var tmp_2 = this.f20_1.v1z_1;
              var tmp_3 = this.f20_1.q1z_1.f1z();
              tmp_1.v1z_1 = add(tmp_2, this.f20_1.s1z_1.b1b(tmp_3 instanceof Buffer ? tmp_3 : THROW_CCE(), nextMatch));
              this.n8_1 = 4;
              suspendResult = flushIfNeeded(this.f20_1.q1z_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 4:
            return Unit_instance;
          case 5:
            this.n8_1 = 6;
            continue $sm;
          case 6:
            this.n8_1 = 1;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.q8_1;
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
  function $checkFullMatchCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p20_1 = _this__u8e3s4;
  }
  protoOf($checkFullMatchCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 8;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!this.p20_1.s1z_1.b1a()) {
              this.r20_1 = true;
              this.n8_1 = 3;
              continue $sm;
            } else {
              this.n8_1 = 2;
              suspendResult = this.p20_1.o1z_1.l1z(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.r20_1 = suspendResult;
            this.n8_1 = 3;
            continue $sm;
          case 3:
            if (!this.r20_1) {
              this.n8_1 = 7;
              continue $sm;
            }

            this.q20_1 = this.p20_1.s1z_1.e1a();
            if (this.p20_1.w1z_1 > 0 && !(this.q20_1 === this.p20_1.p1z_1.d1(this.p20_1.w1z_1))) {
              var oldMatchIndex = this.p20_1.w1z_1;
              while (this.p20_1.w1z_1 > 0 && !(this.q20_1 === this.p20_1.p1z_1.d1(this.p20_1.w1z_1))) {
                this.p20_1.w1z_1 = this.p20_1.t1z_1[this.p20_1.w1z_1 - 1 | 0];
              }
              var retained = fromInt(oldMatchIndex - this.p20_1.w1z_1 | 0);
              checkBounds(this.p20_1, retained);
              var tmp_0 = this.p20_1;
              var tmp_1 = this.p20_1.v1z_1;
              var tmp_2 = this.p20_1.q1z_1.f1z();
              tmp_0.v1z_1 = add(tmp_1, this.p20_1.u1z_1.b1b(tmp_2 instanceof Buffer ? tmp_2 : THROW_CCE(), retained));
              if (this.p20_1.w1z_1 === 0 && !(this.q20_1 === this.p20_1.p1z_1.d1(this.p20_1.w1z_1))) {
                this.n8_1 = 6;
                suspendResult = writeByte(this.p20_1.q1z_1, this.q20_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.n8_1 = 4;
                continue $sm;
              }
            } else {
              this.n8_1 = 5;
              continue $sm;
            }

          case 4:
            this.n8_1 = 5;
            continue $sm;
          case 5:
            this.p20_1.w1z_1 = this.p20_1.w1z_1 + 1 | 0;
            if (this.p20_1.w1z_1 === this.p20_1.p1z_1.e1()) {
              return true;
            }

            this.p20_1.u1z_1.u1b(this.q20_1);
            this.n8_1 = 1;
            continue $sm;
          case 6:
            var _unary__edvuaz = this.p20_1.v1z_1;
            this.p20_1.v1z_1 = add(_unary__edvuaz, get_ONE());
            return false;
          case 7:
            return false;
          case 8:
            throw this.q8_1;
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
  function ByteChannelScanner(channel, matchString, writeChannel, limit) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    this.o1z_1 = channel;
    this.p1z_1 = matchString;
    this.q1z_1 = writeChannel;
    this.r1z_1 = limit;
    // Inline function 'kotlin.require' call
    if (!(this.p1z_1.e1() > 0)) {
      var message = 'Empty match string not permitted for scanning';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    this.s1z_1 = this.o1z_1.c1z();
    this.t1z_1 = buildPartialMatchTable(this);
    this.u1z_1 = new Buffer();
    this.v1z_1 = new Long(0, 0);
    this.w1z_1 = 0;
  }
  protoOf(ByteChannelScanner).d21 = function (ignoreMissing, $completion) {
    var tmp = new $findNextCOROUTINE$(this, ignoreMissing, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  function ByteReadChannel$Companion$Empty$1() {
    this.e21_1 = null;
    this.f21_1 = new Buffer();
  }
  protoOf(ByteReadChannel$Companion$Empty$1).h1z = function () {
    return this.e21_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).j1z = function () {
    return true;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).c1z = function () {
    return this.f21_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).k1z = function (min, $completion) {
    return false;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).n1z = function (cause) {
  };
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.g21_1 = new ByteReadChannel$Companion$Empty$1();
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function ByteReadChannel_1() {
  }
  function cancel_0(_this__u8e3s4) {
    _this__u8e3s4.n1z(IOException_init_$Create$('Channel was cancelled'));
  }
  function readRemaining(_this__u8e3s4, $completion) {
    var tmp = new $readRemainingCOROUTINE$(_this__u8e3s4, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function discard(_this__u8e3s4, max, $completion) {
    max = max === VOID ? new Long(-1, 2147483647) : max;
    var tmp = new $discardCOROUTINE$(_this__u8e3s4, max, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var tmp = new $readAvailableCOROUTINE$(_this__u8e3s4, buffer, offset, length, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function toByteArray(_this__u8e3s4, $completion) {
    var tmp = new $toByteArrayCOROUTINE$(_this__u8e3s4, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function copyTo(_this__u8e3s4, channel, limit, $completion) {
    var tmp = new $copyToCOROUTINE$(_this__u8e3s4, channel, limit, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function skipIfFound(_this__u8e3s4, byteString, $completion) {
    var tmp = new $skipIfFoundCOROUTINE$(_this__u8e3s4, byteString, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function readPacket(_this__u8e3s4, packet, $completion) {
    var tmp = new $readPacketCOROUTINE$(_this__u8e3s4, packet, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function readUntil(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, $completion) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    ignoreMissing = ignoreMissing === VOID ? false : ignoreMissing;
    return (new ByteChannelScanner(_this__u8e3s4, matchString, writeChannel, limit)).d21(ignoreMissing, $completion);
  }
  function readUTF8LineTo(_this__u8e3s4, out, max, lineEnding, $completion) {
    max = max === VOID ? 2147483647 : max;
    lineEnding = lineEnding === VOID ? Companion_getInstance_1().i24_1 : lineEnding;
    var tmp = new $readUTF8LineToCOROUTINE$(_this__u8e3s4, out, max, lineEnding, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.h1z();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.h1z();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function get_availableForRead(_this__u8e3s4) {
    return convertToInt(_this__u8e3s4.c1z().a1a().e1());
  }
  function readBuffer(_this__u8e3s4, $completion) {
    var tmp = new $readBufferCOROUTINE$(_this__u8e3s4, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function peek(_this__u8e3s4, count, $completion) {
    var tmp = new $peekCOROUTINE$(_this__u8e3s4, count, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.h1z();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function copyTo_0(_this__u8e3s4, channel, $completion) {
    var tmp = new $copyToCOROUTINE$_0(_this__u8e3s4, channel, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function readUTF8LineTo$checkLineEndingAllowed($lineEnding, lineEndingToCheck) {
    if (!LineEndingMode__contains_impl_q5pr68($lineEnding, lineEndingToCheck)) {
      throw IOException_init_$Create$('Unexpected line ending ' + LineEndingMode__toString_impl_j4h76r(lineEndingToCheck) + ', while expected ' + LineEndingMode__toString_impl_j4h76r($lineEnding));
    }
  }
  function $readRemainingCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p21_1 = _this__u8e3s4;
  }
  protoOf($readRemainingCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            this.q21_1 = BytePacketBuilder();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.p21_1.j1z()) {
              this.n8_1 = 3;
              continue $sm;
            }

            this.q21_1.t1b(this.p21_1.c1z());
            this.n8_1 = 2;
            suspendResult = this.p21_1.l1z(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n8_1 = 1;
            continue $sm;
          case 3:
            rethrowCloseCauseIfNeeded_0(this.p21_1);
            return this.q21_1.a1a();
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
  function $discardCOROUTINE$(_this__u8e3s4, max, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z21_1 = _this__u8e3s4;
    this.a22_1 = max;
  }
  protoOf($discardCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 5;
            this.b22_1 = this.a22_1;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(this.b22_1, new Long(0, 0)) > 0 && !this.z21_1.j1z())) {
              this.n8_1 = 4;
              continue $sm;
            }

            if (get_availableForRead(this.z21_1) === 0) {
              this.n8_1 = 2;
              suspendResult = this.z21_1.l1z(VOID, this);
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
            var tmp0 = this.b22_1;
            var b = get_remaining(this.z21_1.c1z());
            var count = compare(tmp0, b) <= 0 ? tmp0 : b;
            discard_0(this.z21_1.c1z(), count);
            this.b22_1 = subtract(this.b22_1, count);
            this.n8_1 = 1;
            continue $sm;
          case 4:
            return subtract(this.a22_1, this.b22_1);
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
  function $readAvailableCOROUTINE$(_this__u8e3s4, buffer, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k22_1 = _this__u8e3s4;
    this.l22_1 = buffer;
    this.m22_1 = offset;
    this.n22_1 = length;
  }
  protoOf($readAvailableCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            if (this.k22_1.j1z())
              return -1;
            if (this.k22_1.c1z().b1a()) {
              this.n8_1 = 1;
              suspendResult = this.k22_1.l1z(VOID, this);
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
            if (this.k22_1.j1z())
              return -1;
            return readAvailable_0(this.k22_1.c1z(), this.l22_1, this.m22_1, this.n22_1);
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
  function $toByteArrayCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w22_1 = _this__u8e3s4;
  }
  protoOf($toByteArrayCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = readBuffer(this.w22_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes(ARGUMENT);
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
  function $copyToCOROUTINE$(_this__u8e3s4, channel, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f23_1 = _this__u8e3s4;
    this.g23_1 = channel;
    this.h23_1 = limit;
  }
  protoOf($copyToCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 12;
            this.i23_1 = this.h23_1;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 8;
            this.o8_1 = 7;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            if (!(!this.f23_1.j1z() && compare(this.i23_1, new Long(0, 0)) > 0)) {
              this.n8_1 = 6;
              continue $sm;
            }

            if (this.f23_1.c1z().b1a()) {
              this.n8_1 = 3;
              suspendResult = this.f23_1.l1z(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 4;
              continue $sm;
            }

          case 3:
            this.n8_1 = 4;
            continue $sm;
          case 4:
            var tmp0 = this.i23_1;
            var b = get_remaining(this.f23_1.c1z());
            var count = compare(tmp0, b) <= 0 ? tmp0 : b;
            this.f23_1.c1z().d1b(this.g23_1.f1z(), count);
            this.i23_1 = subtract(this.i23_1, count);
            this.n8_1 = 5;
            suspendResult = this.g23_1.a1z(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.n8_1 = 2;
            continue $sm;
          case 6:
            this.o8_1 = 12;
            this.n8_1 = 10;
            continue $sm;
          case 7:
            this.o8_1 = 8;
            var tmp_0 = this.q8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.q8_1;
              this.f23_1.n1z(cause);
              close_0(this.g23_1, cause);
              throw cause;
            } else {
              throw this.q8_1;
            }

          case 8:
            this.o8_1 = 12;
            this.j23_1 = this.q8_1;
            this.n8_1 = 9;
            suspendResult = this.g23_1.a1z(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            throw this.j23_1;
          case 10:
            this.o8_1 = 12;
            this.n8_1 = 11;
            suspendResult = this.g23_1.a1z(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            return subtract(this.h23_1, this.i23_1);
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
  function $skipIfFoundCOROUTINE$(_this__u8e3s4, byteString, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s23_1 = _this__u8e3s4;
    this.t23_1 = byteString;
  }
  protoOf($skipIfFoundCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            this.n8_1 = 1;
            suspendResult = peek(this.s23_1, this.t23_1.e1(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (equals(ARGUMENT, this.t23_1)) {
              this.n8_1 = 3;
              suspendResult = discard(this.s23_1, fromInt(this.t23_1.e1()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 2;
              continue $sm;
            }

          case 2:
            return false;
          case 3:
            return true;
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
  function $readPacketCOROUTINE$(_this__u8e3s4, packet, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c24_1 = _this__u8e3s4;
    this.d24_1 = packet;
  }
  protoOf($readPacketCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 6;
            this.e24_1 = new Buffer();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(this.e24_1.e1(), fromInt(this.d24_1)) < 0)) {
              this.n8_1 = 5;
              continue $sm;
            }

            if (this.c24_1.c1z().b1a()) {
              this.n8_1 = 2;
              suspendResult = this.c24_1.l1z(VOID, this);
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
            if (this.c24_1.j1z()) {
              this.n8_1 = 5;
              continue $sm;
            } else {
              this.n8_1 = 4;
              continue $sm;
            }

          case 4:
            if (compare(get_remaining(this.c24_1.c1z()), subtract(numberToLong(this.d24_1), this.e24_1.e1())) > 0) {
              this.c24_1.c1z().d1b(this.e24_1, subtract(numberToLong(this.d24_1), this.e24_1.e1()));
            } else {
              this.c24_1.c1z().e1b(this.e24_1);
            }

            this.n8_1 = 1;
            continue $sm;
          case 5:
            if (compare(this.e24_1.e1(), fromInt(this.d24_1)) < 0) {
              throw EOFException_init_$Create$('Not enough data available, required ' + this.d24_1 + ' bytes but only ' + this.e24_1.e1().toString() + ' available');
            }

            return this.e24_1;
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
  function $readUTF8LineToCOROUTINE$(_this__u8e3s4, out, max, lineEnding, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s24_1 = _this__u8e3s4;
    this.t24_1 = out;
    this.u24_1 = max;
    this.v24_1 = lineEnding;
  }
  protoOf($readUTF8LineToCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 21;
            if (this.s24_1.c1z().b1a()) {
              this.n8_1 = 1;
              suspendResult = this.s24_1.l1z(VOID, this);
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
            if (this.s24_1.j1z())
              return false;
            this.b25_1 = new Buffer();
            this.n8_1 = 3;
            continue $sm;
          case 3:
            this.y24_1 = this.b25_1;
            this.x24_1 = null;
            this.n8_1 = 4;
            continue $sm;
          case 4:
            this.n8_1 = 5;
            continue $sm;
          case 5:
            this.n8_1 = 6;
            continue $sm;
          case 6:
            this.o8_1 = 18;
            this.o8_1 = 17;
            this.a25_1 = this.y24_1;
            this.n8_1 = 7;
            continue $sm;
          case 7:
            if (!!this.s24_1.j1z()) {
              this.n8_1 = 14;
              continue $sm;
            }

            this.n8_1 = 8;
            continue $sm;
          case 8:
            if (!!this.s24_1.c1z().b1a()) {
              this.n8_1 = 12;
              continue $sm;
            }

            var b = this.s24_1.c1z().e1a();
            if (b === 13) {
              if (this.s24_1.c1z().b1a()) {
                this.n8_1 = 10;
                suspendResult = this.s24_1.l1z(VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.n8_1 = 11;
                continue $sm;
              }
            } else {
              if (b === 10) {
                readUTF8LineTo$checkLineEndingAllowed(this.v24_1, Companion_getInstance_1().g24_1);
                this.t24_1.c1(readString(this.a25_1));
                this.z24_1 = true;
                this.o8_1 = 21;
                this.n8_1 = 15;
                continue $sm;
              } else {
                this.a25_1.u1b(b);
                this.n8_1 = 9;
                continue $sm;
              }
            }

          case 9:
            this.n8_1 = 8;
            continue $sm;
          case 10:
            this.n8_1 = 11;
            continue $sm;
          case 11:
            if (this.s24_1.c1z().a1a().w1a(new Long(0, 0)) === 10) {
              readUTF8LineTo$checkLineEndingAllowed(this.v24_1, Companion_getInstance_1().h24_1);
              discard_0(this.s24_1.c1z(), new Long(1, 0));
            } else {
              readUTF8LineTo$checkLineEndingAllowed(this.v24_1, Companion_getInstance_1().f24_1);
            }

            this.t24_1.c1(readString(this.a25_1));
            this.z24_1 = true;
            this.o8_1 = 21;
            this.n8_1 = 15;
            continue $sm;
          case 12:
            if (compare(this.a25_1.e1(), fromInt(this.u24_1)) >= 0) {
              throw new TooLongLineException('Line exceeds limit of ' + this.u24_1 + ' characters');
            }

            this.n8_1 = 13;
            suspendResult = this.s24_1.l1z(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 13:
            this.n8_1 = 7;
            continue $sm;
          case 14:
            var tmp_0 = this;
            var this_0 = compare(this.a25_1.e1(), new Long(0, 0)) > 0;
            if (this_0) {
              this.t24_1.c1(readString(this.a25_1));
            }

            tmp_0.z24_1 = this_0;
            this.o8_1 = 21;
            this.n8_1 = 15;
            var tmp_1 = this;
            continue $sm;
          case 15:
            var tmp_2 = this.z24_1;
            this.o8_1 = 21;
            closeFinally(this.y24_1, this.x24_1);
            return tmp_2;
          case 16:
            this.o8_1 = 21;
            var tmp_3 = this;
            closeFinally(this.y24_1, this.x24_1);
            tmp_3.w24_1 = Unit_instance;
            this.n8_1 = 20;
            continue $sm;
          case 17:
            this.o8_1 = 18;
            var tmp_4 = this.q8_1;
            if (tmp_4 instanceof Error) {
              var e = this.q8_1;
              var tmp_5 = this;
              this.x24_1 = e;
              throw e;
            } else {
              throw this.q8_1;
            }

          case 18:
            this.o8_1 = 21;
            var t = this.q8_1;
            closeFinally(this.y24_1, this.x24_1);
            throw t;
          case 19:
            this.o8_1 = 21;
            closeFinally(this.y24_1, this.x24_1);
            if (false) {
              this.n8_1 = 3;
              continue $sm;
            }

            this.n8_1 = 20;
            continue $sm;
          case 20:
            return Unit_instance;
          case 21:
            throw this.q8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o8_1 === 21) {
          throw e_0;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e_0;
        }
      }
     while (true);
  };
  function $readBufferCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k25_1 = _this__u8e3s4;
  }
  protoOf($readBufferCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            this.l25_1 = new Buffer();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.k25_1.j1z()) {
              this.n8_1 = 3;
              continue $sm;
            }

            this.l25_1.t1b(this.k25_1.c1z());
            this.n8_1 = 2;
            suspendResult = this.k25_1.l1z(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n8_1 = 1;
            continue $sm;
          case 3:
            var tmp0_safe_receiver = this.k25_1.h1z();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            return this.l25_1;
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
  function $peekCOROUTINE$(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u25_1 = _this__u8e3s4;
    this.v25_1 = count;
  }
  protoOf($peekCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            if (this.u25_1.j1z())
              return null;
            this.n8_1 = 1;
            suspendResult = this.u25_1.k1z(this.v25_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (!suspendResult) {
              return null;
            } else {
              this.n8_1 = 2;
              continue $sm;
            }

          case 2:
            return readByteString(this.u25_1.c1z().f1b(), this.v25_1);
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
  function $copyToCOROUTINE$_0(_this__u8e3s4, channel, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e26_1 = _this__u8e3s4;
    this.f26_1 = channel;
  }
  protoOf($copyToCOROUTINE$_0).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 11;
            this.g26_1 = new Long(0, 0);
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 7;
            this.o8_1 = 6;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            if (!!this.e26_1.j1z()) {
              this.n8_1 = 5;
              continue $sm;
            }

            this.g26_1 = add(this.g26_1, this.e26_1.c1z().e1b(this.f26_1.f1z()));
            this.n8_1 = 3;
            suspendResult = this.f26_1.a1z(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.n8_1 = 4;
            suspendResult = this.e26_1.l1z(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.n8_1 = 2;
            continue $sm;
          case 5:
            this.o8_1 = 11;
            this.n8_1 = 9;
            continue $sm;
          case 6:
            this.o8_1 = 7;
            var tmp_0 = this.q8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.q8_1;
              this.e26_1.n1z(cause);
              close_0(this.f26_1, cause);
              throw cause;
            } else {
              throw this.q8_1;
            }

          case 7:
            this.o8_1 = 11;
            this.h26_1 = this.q8_1;
            this.n8_1 = 8;
            suspendResult = this.f26_1.a1z(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            throw this.h26_1;
          case 9:
            this.o8_1 = 11;
            this.n8_1 = 10;
            suspendResult = this.f26_1.a1z(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            return this.g26_1;
          case 11:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 11) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function ByteWriteChannel() {
  }
  function flushIfNeeded(_this__u8e3s4, $completion) {
    var tmp = new $flushIfNeededCOROUTINE$(_this__u8e3s4, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function $flushIfNeededCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q26_1 = _this__u8e3s4;
  }
  protoOf($flushIfNeededCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            rethrowCloseCauseIfNeeded_1(this.q26_1);
            if (this.q26_1.b1z() || get_size(this.q26_1.f1z()) >= 1048576) {
              this.n8_1 = 1;
              suspendResult = this.q26_1.a1z(this);
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
  function get_NO_CALLBACK() {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return NO_CALLBACK;
  }
  var NO_CALLBACK;
  function WriterJob(channel, job) {
    this.r26_1 = channel;
    this.s26_1 = job;
  }
  protoOf(WriterJob).t1j = function () {
    return this.s26_1;
  };
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    autoFlush = autoFlush === VOID ? false : autoFlush;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return writer_0(_this__u8e3s4, coroutineContext, new ByteChannel(), block);
  }
  function WriterScope(channel, coroutineContext) {
    this.t26_1 = channel;
    this.u26_1 = coroutineContext;
  }
  protoOf(WriterScope).m1d = function () {
    return this.u26_1;
  };
  function writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? value.length : endIndex;
    _this__u8e3s4.f1z().k1b(value, startIndex, endIndex);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function close_0(_this__u8e3s4, cause) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    if (cause == null) {
      fireAndForget(ByteWriteChannel$flushAndClose$ref_0(_this__u8e3s4));
    } else {
      _this__u8e3s4.n1z(cause);
    }
  }
  function invokeOnCompletion(_this__u8e3s4, block) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return _this__u8e3s4.t1j().o1e(block);
  }
  function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    // Inline function 'kotlin.apply' call
    var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel, null));
    this_0.o1e(writer$lambda(channel));
    var job = this_0;
    return new WriterJob(channel, job);
  }
  function fireAndForget(_this__u8e3s4) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
  }
  function writeByte(_this__u8e3s4, value, $completion) {
    _this__u8e3s4.f1z().u1b(value);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function writePacket(_this__u8e3s4, source, $completion) {
    var tmp = new $writePacketCOROUTINE$(_this__u8e3s4, source, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function NO_CALLBACK$1() {
    this.f27_1 = EmptyCoroutineContext_getInstance();
  }
  protoOf(NO_CALLBACK$1).t8 = function () {
    return this.f27_1;
  };
  protoOf(NO_CALLBACK$1).u8 = function (result) {
    return Unit_instance;
  };
  protoOf(NO_CALLBACK$1).y8 = function (result) {
    return this.u8(result);
  };
  function ByteWriteChannel$flushAndClose$ref(p0) {
    this.g27_1 = p0;
  }
  protoOf(ByteWriteChannel$flushAndClose$ref).h27 = function ($completion) {
    return this.g27_1.m1z($completion);
  };
  protoOf(ByteWriteChannel$flushAndClose$ref).ea = function ($completion) {
    return this.h27($completion);
  };
  function ByteWriteChannel$flushAndClose$ref_0(p0) {
    var i = new ByteWriteChannel$flushAndClose$ref(p0);
    var l = function ($completion) {
      return i.h27($completion);
    };
    l.callableName = 'flushAndClose';
    l.$arity = 0;
    return l;
  }
  function writer$slambda($block, $channel, resultContinuation) {
    this.q27_1 = $block;
    this.r27_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(writer$slambda).z27 = function ($this$launch, $completion) {
    var tmp = this.a28($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(writer$slambda).i9 = function (p1, $completion) {
    return this.z27((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(writer$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 14;
            this.v27_1 = Job(get_job(this.s27_1.m1d()));
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 4;
            this.o8_1 = 3;
            this.n8_1 = 2;
            suspendResult = this.q27_1(new WriterScope(this.r27_1, this.s27_1.m1d().eh(this.v27_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.v27_1.o1k();
            var tmp_0;
            if (get_job(this.s27_1.m1d()).i1e()) {
              this.r27_1.n1z(get_job(this.s27_1.m1d()).l1e());
              tmp_0 = Unit_instance;
            }

            this.o8_1 = 14;
            this.n8_1 = 9;
            continue $sm;
          case 3:
            this.o8_1 = 4;
            var tmp_1 = this.q8_1;
            if (tmp_1 instanceof Error) {
              var cause = this.q8_1;
              cancel(this.v27_1, 'Exception thrown while writing to channel', cause);
              this.r27_1.n1z(cause);
              this.o8_1 = 14;
              this.n8_1 = 9;
              continue $sm;
            } else {
              throw this.q8_1;
            }

          case 4:
            this.o8_1 = 14;
            this.w27_1 = this.q8_1;
            this.n8_1 = 5;
            suspendResult = this.v27_1.s1e(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.s27_1;
            this.o8_1 = 7;
            this.y27_1 = Companion_instance;
            this.n8_1 = 6;
            suspendResult = this.r27_1.m1z(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_2 = this;
            this.y27_1;
            tmp_2.x27_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.o8_1 = 14;
            this.n8_1 = 8;
            continue $sm;
          case 7:
            this.o8_1 = 14;
            var tmp_3 = this.q8_1;
            if (tmp_3 instanceof Error) {
              var e = this.q8_1;
              var tmp_4 = this;
              tmp_4.x27_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n8_1 = 8;
              continue $sm;
            } else {
              throw this.q8_1;
            }

          case 8:
            this.o8_1 = 14;
            throw this.w27_1;
          case 9:
            this.o8_1 = 14;
            this.n8_1 = 10;
            suspendResult = this.v27_1.s1e(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.s27_1;
            this.o8_1 = 12;
            this.u27_1 = Companion_instance;
            this.n8_1 = 11;
            suspendResult = this.r27_1.m1z(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            var tmp_5 = this;
            this.u27_1;
            tmp_5.t27_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.o8_1 = 14;
            this.n8_1 = 13;
            continue $sm;
          case 12:
            this.o8_1 = 14;
            var tmp_6 = this.q8_1;
            if (tmp_6 instanceof Error) {
              var e_0 = this.q8_1;
              var tmp_7 = this;
              tmp_7.t27_1 = _Result___init__impl__xyqfz8(createFailure(e_0));
              this.n8_1 = 13;
              continue $sm;
            } else {
              throw this.q8_1;
            }

          case 13:
            this.o8_1 = 14;
            return Unit_instance;
          case 14:
            throw this.q8_1;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.o8_1 === 14) {
          throw e_1;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(writer$slambda).a28 = function ($this$launch, completion) {
    var i = new writer$slambda(this.q27_1, this.r27_1, completion);
    i.s27_1 = $this$launch;
    return i;
  };
  function writer$slambda_0($block, $channel, resultContinuation) {
    var i = new writer$slambda($block, $channel, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.z27($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function writer$lambda($channel) {
    return function (it) {
      var tmp;
      if (!(it == null) && !$channel.g1z()) {
        $channel.n1z(it);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function $writePacketCOROUTINE$(_this__u8e3s4, source, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d27_1 = _this__u8e3s4;
    this.e27_1 = source;
  }
  protoOf($writePacketCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.e27_1.b1a()) {
              this.n8_1 = 3;
              continue $sm;
            }

            this.d27_1.f1z().o1b(this.e27_1, get_remaining(this.e27_1));
            this.n8_1 = 2;
            suspendResult = flushIfNeeded(this.d27_1, this);
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
  var properties_initialized_ByteWriteChannelOperations_kt_acrf6u;
  function _init_properties_ByteWriteChannelOperations_kt__i7slrs() {
    if (!properties_initialized_ByteWriteChannelOperations_kt_acrf6u) {
      properties_initialized_ByteWriteChannelOperations_kt_acrf6u = true;
      NO_CALLBACK = new NO_CALLBACK$1();
    }
  }
  function get_CLOSED() {
    _init_properties_CloseToken_kt__9ucr41();
    return CLOSED;
  }
  var CLOSED;
  function ClosedByteChannelException$_init_$ref_yjp351() {
    var l = function (p0) {
      return new ClosedByteChannelException(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function CloseToken(origin) {
    this.d1z_1 = origin;
  }
  protoOf(CloseToken).b28 = function (wrap) {
    var tmp0_subject = this.d1z_1;
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (isInterface(tmp0_subject, CopyableThrowable)) {
        tmp = this.d1z_1.x1k();
      } else {
        if (tmp0_subject instanceof CancellationException) {
          tmp = CancellationException_init_$Create$(this.d1z_1.message, this.d1z_1);
        } else {
          tmp = wrap(this.d1z_1);
        }
      }
    }
    return tmp;
  };
  protoOf(CloseToken).i1z = function (wrap, $super) {
    var tmp;
    if (wrap === VOID) {
      tmp = ClosedByteChannelException$_init_$ref_yjp351();
    } else {
      tmp = wrap;
    }
    wrap = tmp;
    return $super === VOID ? this.b28(wrap) : $super.b28.call(this, wrap);
  };
  protoOf(CloseToken).e1z = function (wrap) {
    var tmp0_safe_receiver = this.b28(wrap);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return tmp;
  };
  var properties_initialized_CloseToken_kt_lgg8zn;
  function _init_properties_CloseToken_kt__9ucr41() {
    if (!properties_initialized_CloseToken_kt_lgg8zn) {
      properties_initialized_CloseToken_kt_lgg8zn = true;
      CLOSED = new CloseToken(null);
    }
  }
  function transferFromDelegate($this) {
    updateConsumed($this);
    var appended = $this.d28_1.t1b($this.c28_1.c1z());
    $this.e28_1 = add($this.e28_1, appended);
  }
  function updateConsumed($this) {
    $this.f28_1 = add($this.f28_1, subtract($this.e28_1, $this.d28_1.e1()));
    $this.e28_1 = $this.d28_1.e1();
  }
  function $awaitContentCOROUTINE$_0(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o28_1 = _this__u8e3s4;
    this.p28_1 = min;
  }
  protoOf($awaitContentCOROUTINE$_0).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            if (compare(this.o28_1.c1z().e1(), fromInt(this.p28_1)) >= 0) {
              return true;
            }

            this.n8_1 = 1;
            suspendResult = this.o28_1.c28_1.k1z(this.p28_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              transferFromDelegate(this.o28_1);
              return true;
            } else {
              this.n8_1 = 2;
              continue $sm;
            }

          case 2:
            return false;
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
  function CountedByteReadChannel(delegate) {
    this.c28_1 = delegate;
    this.d28_1 = new Buffer();
    this.e28_1 = new Long(0, 0);
    this.f28_1 = new Long(0, 0);
  }
  protoOf(CountedByteReadChannel).q28 = function () {
    updateConsumed(this);
    return this.f28_1;
  };
  protoOf(CountedByteReadChannel).h1z = function () {
    return this.c28_1.h1z();
  };
  protoOf(CountedByteReadChannel).j1z = function () {
    return this.d28_1.b1a() && this.c28_1.j1z();
  };
  protoOf(CountedByteReadChannel).c1z = function () {
    transferFromDelegate(this);
    return this.d28_1;
  };
  protoOf(CountedByteReadChannel).k1z = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$_0(this, min, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(CountedByteReadChannel).n1z = function (cause) {
    this.c28_1.n1z(cause);
    this.d28_1.h4();
  };
  function counted(_this__u8e3s4) {
    return new CountedByteReadChannel(_this__u8e3s4);
  }
  function readText(_this__u8e3s4) {
    return readString_0(_this__u8e3s4);
  }
  function ClosedByteChannelException(cause) {
    cause = cause === VOID ? null : cause;
    IOException_init_$Init$(cause == null ? null : cause.message, cause, this);
    captureStack(this, ClosedByteChannelException);
  }
  function ClosedReadChannelException(cause) {
    cause = cause === VOID ? null : cause;
    ClosedByteChannelException.call(this, cause);
    captureStack(this, ClosedReadChannelException);
  }
  function ClosedWriteChannelException(cause) {
    cause = cause === VOID ? null : cause;
    ClosedByteChannelException.call(this, cause);
    captureStack(this, ClosedWriteChannelException);
  }
  function _LineEndingMode___init__impl__jo5bul(mode) {
    return mode;
  }
  function _get_mode__dah3bc($this) {
    return $this;
  }
  function LineEndingMode__contains_impl_q5pr68($this, other) {
    return (_get_mode__dah3bc($this) | _get_mode__dah3bc(other)) === _get_mode__dah3bc($this);
  }
  function LineEndingMode__plus_impl_ttpz2j($this, other) {
    return _LineEndingMode___init__impl__jo5bul(_get_mode__dah3bc($this) | _get_mode__dah3bc(other));
  }
  function LineEndingMode__toString_impl_j4h76r($this) {
    var tmp;
    if ($this === Companion_getInstance_1().f24_1) {
      tmp = 'CR';
    } else if ($this === Companion_getInstance_1().g24_1) {
      tmp = 'LF';
    } else if ($this === Companion_getInstance_1().h24_1) {
      tmp = 'CRLF';
    } else {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = Companion_getInstance_1().j24_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var it = element.r28_1;
        if (LineEndingMode__contains_impl_q5pr68($this, it)) {
          destination.b1(element);
        }
      }
      tmp = toString_1(destination);
    }
    return tmp;
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.f24_1 = _LineEndingMode___init__impl__jo5bul(1);
    this.g24_1 = _LineEndingMode___init__impl__jo5bul(2);
    this.h24_1 = _LineEndingMode___init__impl__jo5bul(4);
    this.i24_1 = _LineEndingMode___init__impl__jo5bul(7);
    this.j24_1 = listOf([new LineEndingMode(this.f24_1), new LineEndingMode(this.g24_1), new LineEndingMode(this.h24_1)]);
  }
  var Companion_instance_2;
  function Companion_getInstance_1() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function LineEndingMode__hashCode_impl_2mopm4($this) {
    return $this;
  }
  function LineEndingMode__equals_impl_qyr4nk($this, other) {
    if (!(other instanceof LineEndingMode))
      return false;
    if (!($this === other.r28_1))
      return false;
    return true;
  }
  function LineEndingMode(mode) {
    Companion_getInstance_1();
    this.r28_1 = mode;
  }
  protoOf(LineEndingMode).toString = function () {
    return LineEndingMode__toString_impl_j4h76r(this.r28_1);
  };
  protoOf(LineEndingMode).hashCode = function () {
    return LineEndingMode__hashCode_impl_2mopm4(this.r28_1);
  };
  protoOf(LineEndingMode).equals = function (other) {
    return LineEndingMode__equals_impl_qyr4nk(this.r28_1, other);
  };
  function SourceByteReadChannel(source) {
    this.s28_1 = source;
    this.t28_1 = null;
  }
  protoOf(SourceByteReadChannel).h1z = function () {
    var tmp0_safe_receiver = this.t28_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i1z();
  };
  protoOf(SourceByteReadChannel).j1z = function () {
    return this.s28_1.b1a();
  };
  protoOf(SourceByteReadChannel).c1z = function () {
    var tmp0_safe_receiver = this.h1z();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.s28_1.a1a();
  };
  protoOf(SourceByteReadChannel).k1z = function (min, $completion) {
    var tmp0_safe_receiver = this.h1z();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.s28_1.d1a(fromInt(min));
  };
  protoOf(SourceByteReadChannel).n1z = function (cause) {
    if (!(this.t28_1 == null))
      return Unit_instance;
    this.s28_1.h4();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.t28_1 = new CloseToken(IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  };
  function decode(_this__u8e3s4, input, max) {
    max = max === VOID ? 2147483647 : max;
    var tmp0 = fromInt(max);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = input.a1a().e1();
    var tmp$ret$0 = compare(tmp0, b) <= 0 ? tmp0 : b;
    // Inline function 'kotlin.text.buildString' call
    var capacity = convertToInt(tmp$ret$0);
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    decode_0(_this__u8e3s4, input, this_0, max);
    return this_0.toString();
  }
  function encode(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
    return builder;
  }
  function TooLongLineException(message) {
    MalformedInputException.call(this, message);
    captureStack(this, TooLongLineException);
  }
  function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return Unit_instance;
    $l$loop: while (true) {
      var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, destination);
      // Inline function 'kotlin.check' call
      if (!(rc >= 0)) {
        throw IllegalStateException_init_$Create$('Check failed.');
      }
      start = start + rc | 0;
      if (start >= toIndex)
        break $l$loop;
    }
  }
  function canRead(_this__u8e3s4) {
    return !_this__u8e3s4.b1a();
  }
  function readBytes(_this__u8e3s4, count) {
    count = count === VOID ? convertToInt(_this__u8e3s4.e1()) : count;
    return readByteArray(_this__u8e3s4, count);
  }
  function writeFully_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    _this__u8e3s4.k1b(buffer, offset, offset + length | 0);
  }
  function BytePacketBuilder() {
    return new Buffer();
  }
  function build(_this__u8e3s4) {
    return _this__u8e3s4.a1a();
  }
  function get_size(_this__u8e3s4) {
    return convertToInt(_this__u8e3s4.a1a().e1());
  }
  var ByteReadPacketEmpty;
  function get_remaining(_this__u8e3s4) {
    _init_properties_ByteReadPacket_kt__28475y();
    return _this__u8e3s4.a1a().e1();
  }
  function takeWhile(_this__u8e3s4, block) {
    _init_properties_ByteReadPacket_kt__28475y();
    while (!_this__u8e3s4.b1a() && block(_this__u8e3s4.a1a())) {
    }
  }
  function discard_0(_this__u8e3s4, count) {
    count = count === VOID ? new Long(-1, 2147483647) : count;
    _init_properties_ByteReadPacket_kt__28475y();
    _this__u8e3s4.d1a(count);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(_this__u8e3s4);
    var countToDiscard = compare(count, b) <= 0 ? count : b;
    _this__u8e3s4.a1a().y1a(countToDiscard);
    return countToDiscard;
  }
  function ByteReadPacket(array, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? array.length : length;
    _init_properties_ByteReadPacket_kt__28475y();
    // Inline function 'kotlin.apply' call
    var this_0 = new Buffer();
    this_0.k1b(array, offset, offset + length | 0);
    return this_0;
  }
  var properties_initialized_ByteReadPacket_kt_hw4st4;
  function _init_properties_ByteReadPacket_kt__28475y() {
    if (!properties_initialized_ByteReadPacket_kt_hw4st4) {
      properties_initialized_ByteReadPacket_kt_hw4st4 = true;
      ByteReadPacketEmpty = new Buffer();
    }
  }
  function readAvailable_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var result = _this__u8e3s4.z1a(buffer, offset, offset + length | 0);
    return result === -1 ? 0 : result;
  }
  function readText_0(_this__u8e3s4, charset, max) {
    charset = charset === VOID ? Charsets_getInstance().u28_1 : charset;
    max = max === VOID ? 2147483647 : max;
    if (charset.equals(Charsets_getInstance().u28_1)) {
      if (max === 2147483647)
        return readString_0(_this__u8e3s4);
      var tmp0 = _this__u8e3s4.a1a().e1();
      // Inline function 'kotlin.math.min' call
      var b = fromInt(max);
      var count = compare(tmp0, b) <= 0 ? tmp0 : b;
      return readString_1(_this__u8e3s4, count);
    }
    return decode(charset.x28(), _this__u8e3s4, max);
  }
  function toByteArray_0(_this__u8e3s4, charset) {
    charset = charset === VOID ? Charsets_getInstance().u28_1 : charset;
    if (charset.equals(Charsets_getInstance().u28_1))
      return encodeToByteArray(_this__u8e3s4, VOID, VOID, true);
    return encodeToByteArray_0(charset.y28(), _this__u8e3s4, 0, _this__u8e3s4.length);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
    charset = charset === VOID ? Charsets_getInstance().u28_1 : charset;
    if (charset === Charsets_getInstance().u28_1) {
      return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
    }
    encodeToImpl(charset.y28(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function get_ByteArrayPool() {
    _init_properties_ByteArrayPool_kt__kfi3uj();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  protoOf(ByteArrayPool$1).c29 = function () {
    return new Int8Array(4096);
  };
  var properties_initialized_ByteArrayPool_kt_td6pfh;
  function _init_properties_ByteArrayPool_kt__kfi3uj() {
    if (!properties_initialized_ByteArrayPool_kt_td6pfh) {
      properties_initialized_ByteArrayPool_kt_td6pfh = true;
      ByteArrayPool = new ByteArrayPool$1();
    }
  }
  function ObjectPool() {
  }
  function NoPoolImpl() {
  }
  protoOf(NoPoolImpl).k29 = function (instance) {
    return Unit_instance;
  };
  protoOf(NoPoolImpl).i1h = function () {
    return Unit_instance;
  };
  function Companion_2() {
  }
  protoOf(Companion_2).l29 = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().u28_1;
    }
    var tmp;
    var tmp_0;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_0 = true;
        break;
      default:
        // Inline function 'kotlin.let' call

        var it = replace_0(name, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
        var tmp_1;
        if (it === 'iso-8859-1') {
          tmp_1 = true;
        } else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_1 = it.toLowerCase() === 'iso-8859-1';
        }

        tmp_0 = tmp_1;
        break;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'latin1' || name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().v28_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  var Companion_instance_3;
  function Companion_getInstance_2() {
    return Companion_instance_3;
  }
  function Charset(_name) {
    this.w28_1 = _name;
  }
  protoOf(Charset).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.w28_1 === other.w28_1;
  };
  protoOf(Charset).hashCode = function () {
    return getStringHashCode(this.w28_1);
  };
  protoOf(Charset).toString = function () {
    return this.w28_1;
  };
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.w28_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.u28_1 = new CharsetImpl('UTF-8');
    this.v28_1 = new CharsetImpl('ISO-8859-1');
  }
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function MalformedInputException(message) {
    IOException_init_$Init$_0(message, this);
    captureStack(this, MalformedInputException);
  }
  function CharsetDecoder(_charset) {
    this.m29_1 = _charset;
  }
  function forName(_this__u8e3s4, name) {
    return Companion_instance_3.l29(name);
  }
  function CharsetEncoder(_charset) {
    this.n29_1 = _charset;
  }
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
    var tmp0 = input.a1a().e1();
    // Inline function 'kotlin.comparisons.minOf' call
    var b = fromInt(max);
    var count = compare(tmp0, b) <= 0 ? tmp0 : b;
    var tmp = readByteArray(input, convertToInt(count));
    var array = tmp instanceof Int8Array ? tmp : THROW_CCE();
    var tmp_0;
    try {
      tmp_0 = decoder.o29(array);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var cause = $p;
        var tmp0_elvis_lhs = cause.message;
        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
      } else {
        throw $p;
      }
    }
    var result = tmp_0;
    dst.c1(result);
    return result.length;
  }
  function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(fromIndex <= toIndex)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().v28_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().u28_1)) {
      var message_0 = 'Only UTF-8 encoding is supported in JS';
      throw IllegalArgumentException_init_$Create$(toString_1(message_0));
    }
    var encoder = new TextEncoder();
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
    var result = encoder.encode(tmp$ret$5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    dst.n1b(result);
    return result.length;
  }
  function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    return encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
  }
  protoOf(CharsetImpl).y28 = function () {
    return new CharsetEncoderImpl(this);
  };
  protoOf(CharsetImpl).x28 = function () {
    return new CharsetDecoderImpl(this);
  };
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.m29_1;
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.n29_1;
  }
  function encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    var start = fromIndex;
    if (start >= toIndex)
      return new Int8Array(0);
    var dst = new Buffer();
    var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, dst);
    start = start + rc | 0;
    if (start === toIndex) {
      return readByteArray_0(dst);
    }
    encodeToImpl(_this__u8e3s4, dst, input, start, toIndex);
    return readByteArray_0(dst);
  }
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.r29_1 = charset;
  }
  protoOf(CharsetEncoderImpl).toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.r29_1.toString() + ')';
  };
  protoOf(CharsetEncoderImpl).hashCode = function () {
    return this.r29_1.hashCode();
  };
  protoOf(CharsetEncoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    if (!this.r29_1.equals(other.r29_1))
      return false;
    return true;
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.t29_1 = charset;
  }
  protoOf(CharsetDecoderImpl).toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.t29_1.toString() + ')';
  };
  protoOf(CharsetDecoderImpl).hashCode = function () {
    return this.t29_1.hashCode();
  };
  protoOf(CharsetDecoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    if (!this.t29_1.equals(other.t29_1))
      return false;
    return true;
  };
  function Decoder(encoding, fatal) {
    fatal = fatal === VOID ? true : fatal;
    var tmp;
    try {
      tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        tmp_0 = new TextDecoderFallback(encoding, fatal);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function toKtor(_this__u8e3s4) {
    return new toKtor$1(_this__u8e3s4);
  }
  function textDecoderOptions(fatal) {
    fatal = fatal === VOID ? false : fatal;
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.with' call
    this_0.fatal = fatal;
    return this_0;
  }
  function toKtor$1($this_toKtor) {
    this.u29_1 = $this_toKtor;
  }
  protoOf(toKtor$1).o29 = function (buffer) {
    return this.u29_1.decode(buffer);
  };
  function get_ENCODING_ALIASES() {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return ENCODING_ALIASES;
  }
  var ENCODING_ALIASES;
  function get_REPLACEMENT() {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return REPLACEMENT;
  }
  var REPLACEMENT;
  function TextDecoderFallback(encoding, fatal) {
    this.v29_1 = fatal;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString_1(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    if (!get_ENCODING_ALIASES().i2(requestedEncoding)) {
      var message = encoding + ' is not supported.';
      throw IllegalStateException_init_$Create$(toString_1(message));
    }
  }
  protoOf(TextDecoderFallback).o29 = function (buffer) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
    var inductionVariable = 0;
    var last = bytes.length;
    if (inductionVariable < last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var byte = bytes[index];
        var point = toCodePoint(byte);
        if (point < 0) {
          // Inline function 'kotlin.check' call
          if (!!this.v29_1) {
            var message = 'Invalid character: ' + point;
            throw IllegalStateException_init_$Create$(toString_1(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.u1b(toByte(point >> 8));
        }
        builder.u1b(toByte(point & 255));
      }
       while (inductionVariable < last);
    return decodeToString_0(readByteArray_0(builder));
  };
  function toCodePoint(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    var value = _this__u8e3s4 & 255;
    if (isASCII(value)) {
      return value;
    }
    return get_WIN1252_TABLE()[value - 128 | 0];
  }
  function isASCII(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
  }
  var properties_initialized_TextDecoderFallback_js_kt_6rekzk;
  function _init_properties_TextDecoderFallback_js_kt__an7r6m() {
    if (!properties_initialized_TextDecoderFallback_js_kt_6rekzk) {
      properties_initialized_TextDecoderFallback_js_kt_6rekzk = true;
      ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
      // Inline function 'kotlin.byteArrayOf' call
      REPLACEMENT = new Int8Array([-17, -65, -67]);
    }
  }
  function get_DEVELOPMENT_MODE() {
    return false;
  }
  function ioDispatcher() {
    return Dispatchers_getInstance().e1o_1;
  }
  function encodeISO88591(input, fromIndex, toIndex, dst) {
    if (fromIndex >= toIndex)
      return 0;
    var inductionVariable = fromIndex;
    if (inductionVariable < toIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(input, index);
        var character = Char__toInt_impl_vasixd(this_0);
        if (character > 255) {
          failedToMapError(character);
        }
        dst.u1b(toByte(character));
      }
       while (inductionVariable < toIndex);
    return toIndex - fromIndex | 0;
  }
  function failedToMapError(ch) {
    throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
  }
  function get_WIN1252_TABLE() {
    _init_properties_Win1252Table_kt__tl0v64();
    return WIN1252_TABLE;
  }
  var WIN1252_TABLE;
  var properties_initialized_Win1252Table_kt_pkmjoq;
  function _init_properties_Win1252Table_kt__tl0v64() {
    if (!properties_initialized_Win1252Table_kt_pkmjoq) {
      properties_initialized_Win1252Table_kt_pkmjoq = true;
      // Inline function 'kotlin.intArrayOf' call
      WIN1252_TABLE = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
    }
  }
  function DefaultPool(capacity) {
    this.d29_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.d29_1;
    tmp.e29_1 = Array(size);
    this.f29_1 = 0;
  }
  protoOf(DefaultPool).g29 = function (instance) {
  };
  protoOf(DefaultPool).h29 = function (instance) {
    return instance;
  };
  protoOf(DefaultPool).i29 = function (instance) {
  };
  protoOf(DefaultPool).j29 = function () {
    if (this.f29_1 === 0)
      return this.c29();
    this.f29_1 = this.f29_1 - 1 | 0;
    var idx = this.f29_1;
    var tmp = this.e29_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.e29_1[idx] = null;
    return this.h29(instance);
  };
  protoOf(DefaultPool).k29 = function (instance) {
    this.i29(instance);
    if (this.f29_1 === this.d29_1) {
      this.g29(instance);
    } else {
      var _unary__edvuaz = this.f29_1;
      this.f29_1 = _unary__edvuaz + 1 | 0;
      this.e29_1[_unary__edvuaz] = instance;
    }
  };
  protoOf(DefaultPool).i1h = function () {
    var inductionVariable = 0;
    var last = this.f29_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.e29_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.e29_1[i] = null;
        this.g29(instance);
      }
       while (inductionVariable < last);
    this.f29_1 = 0;
  };
  //region block: post-declaration
  protoOf(Read).f1x = resume;
  protoOf(Read).g1x = resume_0;
  protoOf(Write).f1x = resume;
  protoOf(Write).g1x = resume_0;
  protoOf(ByteChannel).l1z = awaitContent$default;
  protoOf(ByteReadChannel$Companion$Empty$1).l1z = awaitContent$default;
  protoOf(CountedByteReadChannel).l1z = awaitContent$default;
  protoOf(SourceByteReadChannel).l1z = awaitContent$default;
  protoOf(DefaultPool).h4 = close;
  protoOf(NoPoolImpl).h4 = close;
  //endregion
  //region block: init
  Empty_instance = new Empty();
  Companion_instance_3 = new Companion_2();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = copyTo;
  _.$_$.b = copyTo_0;
  _.$_$.c = readAvailable;
  _.$_$.d = readPacket;
  _.$_$.e = readRemaining;
  _.$_$.f = readUTF8LineTo;
  _.$_$.g = readUntil;
  _.$_$.h = skipIfFound;
  _.$_$.i = toByteArray;
  _.$_$.j = writeFully;
  _.$_$.k = writePacket;
  _.$_$.l = LineEndingMode__plus_impl_ttpz2j;
  _.$_$.m = Charsets_getInstance;
  _.$_$.n = Companion_getInstance_0;
  _.$_$.o = Companion_getInstance_1;
  _.$_$.p = MalformedInputException;
  _.$_$.q = decode;
  _.$_$.r = encode;
  _.$_$.s = forName;
  _.$_$.t = get_name;
  _.$_$.u = BytePacketBuilder;
  _.$_$.v = ByteReadPacket;
  _.$_$.w = build;
  _.$_$.x = canRead;
  _.$_$.y = readText_0;
  _.$_$.z = get_remaining;
  _.$_$.a1 = takeWhile;
  _.$_$.b1 = toByteArray_0;
  _.$_$.c1 = writeFully_0;
  _.$_$.d1 = writeText;
  _.$_$.e1 = get_ByteArrayPool;
  _.$_$.f1 = DefaultPool;
  _.$_$.g1 = NoPoolImpl;
  _.$_$.h1 = ByteChannel;
  _.$_$.i1 = ByteReadChannel;
  _.$_$.j1 = ByteReadChannel_1;
  _.$_$.k1 = WriterScope;
  _.$_$.l1 = cancel_0;
  _.$_$.m1 = close_0;
  _.$_$.n1 = counted;
  _.$_$.o1 = invokeOnCompletion;
  _.$_$.p1 = ioDispatcher;
  _.$_$.q1 = readText;
  _.$_$.r1 = writer;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-io.js.map
