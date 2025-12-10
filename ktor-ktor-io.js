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
  var Companion_instance = kotlin_kotlin.$_$.p4;
  var Unit_instance = kotlin_kotlin.$_$.u4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l2;
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ka;
  var initMetadataForObject = kotlin_kotlin.$_$.pa;
  var toString = kotlin_kotlin.$_$.jg;
  var hashCode = kotlin_kotlin.$_$.ia;
  var equals = kotlin_kotlin.$_$.da;
  var initMetadataForClass = kotlin_kotlin.$_$.ja;
  var createFailure = kotlin_kotlin.$_$.xf;
  var Result = kotlin_kotlin.$_$.ff;
  var initMetadataForInterface = kotlin_kotlin.$_$.na;
  var toString_0 = kotlin_kotlin.$_$.ee;
  var newThrowable = kotlin_kotlin.$_$.fb;
  var stackTraceToString = kotlin_kotlin.$_$.hg;
  var VOID = kotlin_kotlin.$_$.b;
  var isInterface = kotlin_kotlin.$_$.ya;
  var CoroutineImpl = kotlin_kotlin.$_$.t8;
  var fromInt = kotlin_kotlin.$_$.g9;
  var compare = kotlin_kotlin.$_$.a9;
  var numberToLong = kotlin_kotlin.$_$.l9;
  var add = kotlin_kotlin.$_$.x8;
  var intercepted = kotlin_kotlin.$_$.g8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.fg;
  var returnIfSuspended = kotlin_kotlin.$_$.e;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d8;
  var Long = kotlin_kotlin.$_$.cf;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.la;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var convertToInt = kotlin_kotlin.$_$.c9;
  var IllegalStateException = kotlin_kotlin.$_$.bf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.p1;
  var captureStack = kotlin_kotlin.$_$.u9;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var decodeToString = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.d;
  var replace = kotlin_kotlin.$_$.gd;
  var indexOf = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.i;
  var THROW_CCE = kotlin_kotlin.$_$.hf;
  var equalsLong = kotlin_kotlin.$_$.f9;
  var get_ONE = kotlin_kotlin.$_$.w8;
  var toString_1 = kotlin_kotlin.$_$.nb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var subtract = kotlin_kotlin.$_$.o9;
  var EOFException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.a;
  var readString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.o;
  var closeFinally = kotlin_kotlin.$_$.vf;
  var readByteString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.l;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.a4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var startCoroutineCancellable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var Continuation = kotlin_kotlin.$_$.n8;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.ma;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var initMetadataForLambda = kotlin_kotlin.$_$.oa;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.w;
  var CancellationException = kotlin_kotlin.$_$.c8;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var readString_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.m;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var listOf = kotlin_kotlin.$_$.z6;
  var IOException_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.e;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.z;
  var charSequenceLength = kotlin_kotlin.$_$.z9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var readString_1 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.n;
  var encodeToByteArray = kotlin_kotlin.$_$.rc;
  var writeString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.p;
  var AutoCloseable = kotlin_kotlin.$_$.qe;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d2;
  var replace_0 = kotlin_kotlin.$_$.hd;
  var getStringHashCode = kotlin_kotlin.$_$.ha;
  var IOException_init_$Init$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.b;
  var charSequenceSubSequence = kotlin_kotlin.$_$.aa;
  var readByteArray_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var isCharSequence = kotlin_kotlin.$_$.ua;
  var trim = kotlin_kotlin.$_$.me;
  var toByte = kotlin_kotlin.$_$.lb;
  var decodeToString_0 = kotlin_kotlin.$_$.pc;
  var setOf = kotlin_kotlin.$_$.l7;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var charSequenceGet = kotlin_kotlin.$_$.y9;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.j2;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject(Empty, 'Empty');
  initMetadataForClass(Closed, 'Closed');
  function resume() {
    return this.e1w().j8(Companion_getInstance().b1w_1);
  }
  function resume_0(throwable) {
    var tmp = this.e1w();
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
    return tmp.j8(tmp1_elvis_lhs == null ? Companion_getInstance().b1w_1 : tmp1_elvis_lhs.jl_1);
  }
  initMetadataForInterface(Task, 'Task');
  initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
  initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
  initMetadataForCoroutine($awaitContentCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushAndCloseCOROUTINE$, CoroutineImpl);
  function awaitContent$default(min, $completion, $super) {
    min = min === VOID ? 1 : min;
    return $super === VOID ? this.l1y(min, $completion) : $super.l1y.call(this, min, $completion);
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
    this.l1g();
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
    this.a1w_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    tmp.b1w_1 = _Result___init__impl__xyqfz8(Unit_instance);
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
    this.c1w_1 = cause;
  }
  protoOf(Closed).toString = function () {
    return 'Closed(cause=' + toString(this.c1w_1) + ')';
  };
  protoOf(Closed).hashCode = function () {
    return this.c1w_1 == null ? 0 : hashCode(this.c1w_1);
  };
  protoOf(Closed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    if (!equals(this.c1w_1, other.c1w_1))
      return false;
    return true;
  };
  function Task() {
  }
  function Read(continuation) {
    this.i1w_1 = continuation;
    this.j1w_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.i1w_1), 16));
      stackTraceToString(this_0);
      tmp.j1w_1 = this_0;
    }
  }
  protoOf(Read).e1w = function () {
    return this.i1w_1;
  };
  protoOf(Read).d1w = function () {
    return this.j1w_1;
  };
  protoOf(Read).f1w = function () {
    return 'read';
  };
  function Write(continuation) {
    this.k1w_1 = continuation;
    this.l1w_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.k1w_1), 16));
      stackTraceToString(this_0);
      tmp.l1w_1 = this_0;
    }
  }
  protoOf(Write).e1w = function () {
    return this.k1w_1;
  };
  protoOf(Write).d1w = function () {
    return this.l1w_1;
  };
  protoOf(Write).f1w = function () {
    return 'write';
  };
  function moveFlushToReadBuffer($this) {
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    $this.p1w_1;
    $this.n1w_1.h1a($this.r1w_1);
    $this.o1w_1 = 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = $this.q1w_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Write) {
      tmp = $this.q1w_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.g1w();
    }
  }
  function closeSlot($this, cause) {
    var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().a1w_1;
    var continuation = $this.q1w_1.atomicfu$getAndSet(closeContinuation);
    if (isInterface(continuation, Task)) {
      continuation.h1w(cause);
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
    this.c1x_1 = _this__u8e3s4;
    this.d1x_1 = min;
  }
  protoOf($awaitContentCOROUTINE$).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 4;
            rethrowCloseCauseIfNeeded(this.c1x_1);
            if (compare(this.c1x_1.r1w_1.n(), fromInt(this.d1x_1)) >= 0)
              return true;
            this.e1x_1 = this.c1x_1;
            this.y7_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(add(numberToLong(this.c1x_1.o1w_1), this.c1x_1.r1w_1.n()), fromInt(this.d1x_1)) < 0 && this.c1x_1.t1w_1.kotlinx$atomicfu$value == null)) {
              this.y7_1 = 3;
              continue $sm;
            }

            this.y7_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.o1h();
            var tmp0 = this.e1x_1;
            var tmp2 = new Read(cancellable);
            l$ret$1: do {
              var previous = tmp0.q1w_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.q1w_1.atomicfu$compareAndSet(previous, tmp2)) {
                  tmp2.g1w();
                  break l$ret$1;
                }
              }
              if (previous instanceof Read) {
                previous.h1w(new ConcurrentIOException(tmp2.f1w(), previous.d1w()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.g1w();
                } else {
                  if (previous instanceof Closed) {
                    tmp2.h1w(previous.c1w_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(compare(add(numberToLong(this.c1x_1.o1w_1), this.c1x_1.r1w_1.n()), fromInt(this.d1x_1)) < 0 && this.c1x_1.t1w_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.q1w_1.kotlinx$atomicfu$value;
                var tmp_0;
                if (current instanceof Read) {
                  tmp_0 = tmp0.q1w_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  current.g1w();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.u1e(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.y7_1 = 1;
            continue $sm;
          case 3:
            if (compare(this.c1x_1.r1w_1.n(), new Long(1048576, 0)) < 0) {
              moveFlushToReadBuffer(this.c1x_1);
            }

            return compare(this.c1x_1.r1w_1.n(), fromInt(this.d1x_1)) >= 0;
          case 4:
            throw this.b8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z7_1 === 4) {
          throw e;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e;
        }
      }
     while (true);
  };
  function $flushCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n1x_1 = _this__u8e3s4;
  }
  protoOf($flushCOROUTINE$).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 4;
            rethrowCloseCauseIfNeeded(this.n1x_1);
            this.n1x_1.p1x();
            if (this.n1x_1.o1w_1 < 1048576)
              return Unit_instance;
            this.o1x_1 = this.n1x_1;
            this.y7_1 = 1;
            continue $sm;
          case 1:
            if (!(this.n1x_1.o1w_1 >= 1048576 && this.n1x_1.t1w_1.kotlinx$atomicfu$value == null)) {
              this.y7_1 = 3;
              continue $sm;
            }

            this.y7_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.o1h();
            var tmp0 = this.o1x_1;
            var tmp2 = new Write(cancellable);
            l$ret$1: do {
              var previous = tmp0.q1w_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.q1w_1.atomicfu$compareAndSet(previous, tmp2)) {
                  tmp2.g1w();
                  break l$ret$1;
                }
              }
              if (previous instanceof Write) {
                previous.h1w(new ConcurrentIOException(tmp2.f1w(), previous.d1w()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.g1w();
                } else {
                  if (previous instanceof Closed) {
                    tmp2.h1w(previous.c1w_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(this.n1x_1.o1w_1 >= 1048576 && this.n1x_1.t1w_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.q1w_1.kotlinx$atomicfu$value;
                var tmp_0;
                if (current instanceof Write) {
                  tmp_0 = tmp0.q1w_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  current.g1w();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.u1e(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.y7_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.b8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z7_1 === 4) {
          throw e;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e;
        }
      }
     while (true);
  };
  function $flushAndCloseCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y1x_1 = _this__u8e3s4;
  }
  protoOf($flushAndCloseCOROUTINE$).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 4;
            var this_0 = this.y1x_1;
            this.z7_1 = 2;
            var tmp_0 = this;
            tmp_0.a1y_1 = Companion_instance;
            this.y7_1 = 1;
            suspendResult = this_0.b1y(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_1 = this;
            this.a1y_1;
            tmp_1.z1x_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.z7_1 = 4;
            this.y7_1 = 3;
            continue $sm;
          case 2:
            this.z7_1 = 4;
            var tmp_2 = this.b8_1;
            if (tmp_2 instanceof Error) {
              var e = this.b8_1;
              var tmp_3 = this;
              tmp_3.z1x_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.y7_1 = 3;
              continue $sm;
            } else {
              throw this.b8_1;
            }

          case 3:
            this.z7_1 = 4;
            if (!this.y1x_1.t1w_1.atomicfu$compareAndSet(null, get_CLOSED()))
              return Unit_instance;
            closeSlot(this.y1x_1, null);
            return Unit_instance;
          case 4:
            throw this.b8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.z7_1 === 4) {
          throw e_0;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e_0;
        }
      }
     while (true);
  };
  function ByteChannel(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    this.m1w_1 = autoFlush;
    this.n1w_1 = new Buffer();
    this.o1w_1 = 0;
    this.p1w_1 = new Object();
    this.q1w_1 = atomic$ref$1(Empty_instance);
    this.r1w_1 = new Buffer();
    this.s1w_1 = new Buffer();
    this.t1w_1 = atomic$ref$1(null);
  }
  protoOf(ByteChannel).c1y = function () {
    return this.m1w_1;
  };
  protoOf(ByteChannel).d1y = function () {
    var tmp0_safe_receiver = this.t1w_1.kotlinx$atomicfu$value;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.f1y(ClosedReadChannelException$_init_$ref_ix0089());
    }
    if (this.r1w_1.e19()) {
      moveFlushToReadBuffer(this);
    }
    return this.r1w_1;
  };
  protoOf(ByteChannel).g1y = function () {
    if (this.h1y()) {
      var tmp0_safe_receiver = this.t1w_1.kotlinx$atomicfu$value;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp = tmp0_safe_receiver.f1y(ClosedWriteChannelException$_init_$ref_ef15ty());
      }
      if (tmp == null)
        throw new ClosedWriteChannelException();
    }
    return this.s1w_1;
  };
  protoOf(ByteChannel).i1y = function () {
    var tmp0_safe_receiver = this.t1w_1.kotlinx$atomicfu$value;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j1y();
  };
  protoOf(ByteChannel).h1y = function () {
    return !(this.t1w_1.kotlinx$atomicfu$value == null);
  };
  protoOf(ByteChannel).k1y = function () {
    return !(this.i1y() == null) || (this.h1y() && this.o1w_1 === 0 && this.r1w_1.e19());
  };
  protoOf(ByteChannel).l1y = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$(this, min, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  };
  protoOf(ByteChannel).b1y = function ($completion) {
    var tmp = new $flushCOROUTINE$(this, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  };
  protoOf(ByteChannel).p1x = function () {
    if (this.s1w_1.e19())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.p1w_1;
    var count = convertToInt(this.s1w_1.n());
    this.n1w_1.w1a(this.s1w_1);
    this.o1w_1 = this.o1w_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.q1w_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Read) {
      tmp = this.q1w_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.g1w();
    }
  };
  protoOf(ByteChannel).n3 = function () {
    this.p1x();
    if (!this.t1w_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
  };
  protoOf(ByteChannel).n1y = function ($completion) {
    var tmp = new $flushAndCloseCOROUTINE$(this, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  };
  protoOf(ByteChannel).o1y = function (cause) {
    if (!(this.t1w_1.kotlinx$atomicfu$value == null))
      return Unit_instance;
    var closedToken = new CloseToken(cause);
    this.t1w_1.atomicfu$compareAndSet(null, closedToken);
    var wrappedCause = closedToken.j1y();
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
    this_0.n1a(content, offset, offset + length | 0);
    var source = this_0;
    return ByteReadChannel_0(source);
  }
  function ByteReadChannel_0(source) {
    return new SourceByteReadChannel(source);
  }
  function buildPartialMatchTable($this) {
    var table = new Int32Array($this.q1y_1.n());
    var j = 0;
    var inductionVariable = 1;
    var last = $this.q1y_1.n();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        while (j > 0 && !($this.q1y_1.m(i) === $this.q1y_1.m(j))) {
          j = table[j - 1 | 0];
        }
        if ($this.q1y_1.m(i) === $this.q1y_1.m(j)) {
          j = j + 1 | 0;
        }
        table[i] = j;
      }
       while (inductionVariable < last);
    return table;
  }
  function advanceToNextPotentialMatch($this, $completion) {
    var tmp = new $advanceToNextPotentialMatchCOROUTINE$($this, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  }
  function checkFullMatch($this, $completion) {
    var tmp = new $checkFullMatchCOROUTINE$($this, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  }
  function checkBounds($this, extra) {
    if (compare(add($this.w1y_1, extra), $this.s1y_1) > 0) {
      throw IOException_init_$Create$('Limit of ' + $this.s1y_1.toString() + ' bytes exceeded ' + ('while searching for "' + toSingleLineString($this, $this.q1y_1) + '"'));
    }
  }
  function toSingleLineString($this, _this__u8e3s4) {
    return replace(decodeToString(_this__u8e3s4), '\n', '\\n');
  }
  function $findNextCOROUTINE$(_this__u8e3s4, ignoreMissing, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b20_1 = _this__u8e3s4;
    this.c20_1 = ignoreMissing;
  }
  protoOf($findNextCOROUTINE$).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 9;
            this.b20_1.w1y_1 = new Long(0, 0);
            this.y7_1 = 1;
            continue $sm;
          case 1:
            if (!this.b20_1.t1y_1.e19()) {
              this.d20_1 = true;
              this.y7_1 = 3;
              continue $sm;
            } else {
              this.y7_1 = 2;
              suspendResult = this.b20_1.p1y_1.m1y(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.d20_1 = suspendResult;
            this.y7_1 = 3;
            continue $sm;
          case 3:
            if (!this.d20_1) {
              this.y7_1 = 7;
              continue $sm;
            }

            this.y7_1 = 4;
            suspendResult = advanceToNextPotentialMatch(this.b20_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.y7_1 = 5;
            suspendResult = checkFullMatch(this.b20_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (suspendResult) {
              return this.b20_1.w1y_1;
            } else {
              this.y7_1 = 6;
              continue $sm;
            }

          case 6:
            this.y7_1 = 1;
            continue $sm;
          case 7:
            if (!this.c20_1) {
              throw IOException_init_$Create$('Expected "' + toSingleLineString(this.b20_1, this.b20_1.q1y_1) + '" but encountered end of input');
            }

            this.b20_1.w1y_1 = add(this.b20_1.w1y_1, this.b20_1.v1y_1.h1a(this.b20_1.r1y_1.g1y()));
            this.y7_1 = 8;
            suspendResult = this.b20_1.r1y_1.b1y(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return this.b20_1.w1y_1;
          case 9:
            throw this.b8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z7_1 === 9) {
          throw e;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e;
        }
      }
     while (true);
  };
  function $advanceToNextPotentialMatchCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g1z_1 = _this__u8e3s4;
  }
  protoOf($advanceToNextPotentialMatchCOROUTINE$).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 8;
            this.y7_1 = 1;
            continue $sm;
          case 1:
            if (!this.g1z_1.t1y_1.e19()) {
              this.h1z_1 = true;
              this.y7_1 = 3;
              continue $sm;
            } else {
              this.y7_1 = 2;
              suspendResult = this.g1z_1.p1y_1.m1y(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.h1z_1 = suspendResult;
            this.y7_1 = 3;
            continue $sm;
          case 3:
            if (!this.h1z_1) {
              this.y7_1 = 7;
              continue $sm;
            }

            var nextMatch = indexOf(this.g1z_1.t1y_1, this.g1z_1.q1y_1.m(0));
            if (equalsLong(nextMatch, new Long(-1, -1))) {
              var tmp_0 = this.g1z_1.t1y_1;
              checkBounds(this.g1z_1, (tmp_0 instanceof Buffer ? tmp_0 : THROW_CCE()).n());
              this.g1z_1.w1y_1 = add(this.g1z_1.w1y_1, this.g1z_1.t1y_1.h1a(this.g1z_1.r1y_1.g1y()));
              this.y7_1 = 5;
              suspendResult = flushIfNeeded(this.g1z_1.r1y_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              checkBounds(this.g1z_1, nextMatch);
              var tmp_1 = this.g1z_1;
              var tmp_2 = this.g1z_1.w1y_1;
              var tmp_3 = this.g1z_1.r1y_1.g1y();
              tmp_1.w1y_1 = add(tmp_2, this.g1z_1.t1y_1.e1a(tmp_3 instanceof Buffer ? tmp_3 : THROW_CCE(), nextMatch));
              this.y7_1 = 4;
              suspendResult = flushIfNeeded(this.g1z_1.r1y_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 4:
            return Unit_instance;
          case 5:
            this.y7_1 = 6;
            continue $sm;
          case 6:
            this.y7_1 = 1;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.b8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z7_1 === 8) {
          throw e;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e;
        }
      }
     while (true);
  };
  function $checkFullMatchCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q1z_1 = _this__u8e3s4;
  }
  protoOf($checkFullMatchCOROUTINE$).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 8;
            this.y7_1 = 1;
            continue $sm;
          case 1:
            if (!this.q1z_1.t1y_1.e19()) {
              this.s1z_1 = true;
              this.y7_1 = 3;
              continue $sm;
            } else {
              this.y7_1 = 2;
              suspendResult = this.q1z_1.p1y_1.m1y(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.s1z_1 = suspendResult;
            this.y7_1 = 3;
            continue $sm;
          case 3:
            if (!this.s1z_1) {
              this.y7_1 = 7;
              continue $sm;
            }

            this.r1z_1 = this.q1z_1.t1y_1.h19();
            if (this.q1z_1.x1y_1 > 0 && !(this.r1z_1 === this.q1z_1.q1y_1.m(this.q1z_1.x1y_1))) {
              var oldMatchIndex = this.q1z_1.x1y_1;
              while (this.q1z_1.x1y_1 > 0 && !(this.r1z_1 === this.q1z_1.q1y_1.m(this.q1z_1.x1y_1))) {
                this.q1z_1.x1y_1 = this.q1z_1.u1y_1[this.q1z_1.x1y_1 - 1 | 0];
              }
              var retained = fromInt(oldMatchIndex - this.q1z_1.x1y_1 | 0);
              checkBounds(this.q1z_1, retained);
              var tmp_0 = this.q1z_1;
              var tmp_1 = this.q1z_1.w1y_1;
              var tmp_2 = this.q1z_1.r1y_1.g1y();
              tmp_0.w1y_1 = add(tmp_1, this.q1z_1.v1y_1.e1a(tmp_2 instanceof Buffer ? tmp_2 : THROW_CCE(), retained));
              if (this.q1z_1.x1y_1 === 0 && !(this.r1z_1 === this.q1z_1.q1y_1.m(this.q1z_1.x1y_1))) {
                this.y7_1 = 6;
                suspendResult = writeByte(this.q1z_1.r1y_1, this.r1z_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.y7_1 = 4;
                continue $sm;
              }
            } else {
              this.y7_1 = 5;
              continue $sm;
            }

          case 4:
            this.y7_1 = 5;
            continue $sm;
          case 5:
            this.q1z_1.x1y_1 = this.q1z_1.x1y_1 + 1 | 0;
            if (this.q1z_1.x1y_1 === this.q1z_1.q1y_1.n()) {
              return true;
            }

            this.q1z_1.v1y_1.x1a(this.r1z_1);
            this.y7_1 = 1;
            continue $sm;
          case 6:
            var _unary__edvuaz = this.q1z_1.w1y_1;
            this.q1z_1.w1y_1 = add(_unary__edvuaz, get_ONE());
            return false;
          case 7:
            return false;
          case 8:
            throw this.b8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z7_1 === 8) {
          throw e;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e;
        }
      }
     while (true);
  };
  function ByteChannelScanner(channel, matchString, writeChannel, limit) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    this.p1y_1 = channel;
    this.q1y_1 = matchString;
    this.r1y_1 = writeChannel;
    this.s1y_1 = limit;
    // Inline function 'kotlin.require' call
    if (!(this.q1y_1.n() > 0)) {
      var message = 'Empty match string not permitted for scanning';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    this.t1y_1 = this.p1y_1.d1y();
    this.u1y_1 = buildPartialMatchTable(this);
    this.v1y_1 = new Buffer();
    this.w1y_1 = new Long(0, 0);
    this.x1y_1 = 0;
  }
  protoOf(ByteChannelScanner).e20 = function (ignoreMissing, $completion) {
    var tmp = new $findNextCOROUTINE$(this, ignoreMissing, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  };
  function ByteReadChannel$Companion$Empty$1() {
    this.f20_1 = null;
    this.g20_1 = new Buffer();
  }
  protoOf(ByteReadChannel$Companion$Empty$1).i1y = function () {
    return this.f20_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).k1y = function () {
    return true;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).d1y = function () {
    return this.g20_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).l1y = function (min, $completion) {
    return false;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).o1y = function (cause) {
  };
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.h20_1 = new ByteReadChannel$Companion$Empty$1();
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
    _this__u8e3s4.o1y(IOException_init_$Create$('Channel was cancelled'));
  }
  function readRemaining(_this__u8e3s4, $completion) {
    var tmp = new $readRemainingCOROUTINE$(_this__u8e3s4, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  }
  function discard(_this__u8e3s4, max, $completion) {
    max = max === VOID ? new Long(-1, 2147483647) : max;
    var tmp = new $discardCOROUTINE$(_this__u8e3s4, max, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  }
  function readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var tmp = new $readAvailableCOROUTINE$(_this__u8e3s4, buffer, offset, length, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  }
  function toByteArray(_this__u8e3s4, $completion) {
    var tmp = new $toByteArrayCOROUTINE$(_this__u8e3s4, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  }
  function copyTo(_this__u8e3s4, channel, limit, $completion) {
    var tmp = new $copyToCOROUTINE$(_this__u8e3s4, channel, limit, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  }
  function skipIfFound(_this__u8e3s4, byteString, $completion) {
    var tmp = new $skipIfFoundCOROUTINE$(_this__u8e3s4, byteString, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  }
  function readPacket(_this__u8e3s4, packet, $completion) {
    var tmp = new $readPacketCOROUTINE$(_this__u8e3s4, packet, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  }
  function readUntil(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, $completion) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    ignoreMissing = ignoreMissing === VOID ? false : ignoreMissing;
    return (new ByteChannelScanner(_this__u8e3s4, matchString, writeChannel, limit)).e20(ignoreMissing, $completion);
  }
  function readUTF8LineTo(_this__u8e3s4, out, max, lineEnding, $completion) {
    max = max === VOID ? 2147483647 : max;
    lineEnding = lineEnding === VOID ? Companion_getInstance_1().j23_1 : lineEnding;
    var tmp = new $readUTF8LineToCOROUTINE$(_this__u8e3s4, out, max, lineEnding, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  }
  function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.i1y();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.i1y();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function get_availableForRead(_this__u8e3s4) {
    return convertToInt(_this__u8e3s4.d1y().d19().n());
  }
  function readBuffer(_this__u8e3s4, $completion) {
    var tmp = new $readBufferCOROUTINE$(_this__u8e3s4, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  }
  function peek(_this__u8e3s4, count, $completion) {
    var tmp = new $peekCOROUTINE$(_this__u8e3s4, count, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  }
  function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.i1y();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function copyTo_0(_this__u8e3s4, channel, $completion) {
    var tmp = new $copyToCOROUTINE$_0(_this__u8e3s4, channel, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  }
  function readUTF8LineTo$checkLineEndingAllowed($lineEnding, lineEndingToCheck) {
    if (!LineEndingMode__contains_impl_q5pr68($lineEnding, lineEndingToCheck)) {
      throw IOException_init_$Create$('Unexpected line ending ' + LineEndingMode__toString_impl_j4h76r(lineEndingToCheck) + ', while expected ' + LineEndingMode__toString_impl_j4h76r($lineEnding));
    }
  }
  function $readRemainingCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q20_1 = _this__u8e3s4;
  }
  protoOf($readRemainingCOROUTINE$).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 4;
            this.r20_1 = BytePacketBuilder();
            this.y7_1 = 1;
            continue $sm;
          case 1:
            if (!!this.q20_1.k1y()) {
              this.y7_1 = 3;
              continue $sm;
            }

            this.r20_1.w1a(this.q20_1.d1y());
            this.y7_1 = 2;
            suspendResult = this.q20_1.m1y(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.y7_1 = 1;
            continue $sm;
          case 3:
            rethrowCloseCauseIfNeeded_0(this.q20_1);
            return this.r20_1.d19();
          case 4:
            throw this.b8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z7_1 === 4) {
          throw e;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e;
        }
      }
     while (true);
  };
  function $discardCOROUTINE$(_this__u8e3s4, max, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a21_1 = _this__u8e3s4;
    this.b21_1 = max;
  }
  protoOf($discardCOROUTINE$).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 5;
            this.c21_1 = this.b21_1;
            this.y7_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(this.c21_1, new Long(0, 0)) > 0 && !this.a21_1.k1y())) {
              this.y7_1 = 4;
              continue $sm;
            }

            if (get_availableForRead(this.a21_1) === 0) {
              this.y7_1 = 2;
              suspendResult = this.a21_1.m1y(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.y7_1 = 3;
              continue $sm;
            }

          case 2:
            this.y7_1 = 3;
            continue $sm;
          case 3:
            var tmp0 = this.c21_1;
            var b = get_remaining(this.a21_1.d1y());
            var count = compare(tmp0, b) <= 0 ? tmp0 : b;
            discard_0(this.a21_1.d1y(), count);
            this.c21_1 = subtract(this.c21_1, count);
            this.y7_1 = 1;
            continue $sm;
          case 4:
            return subtract(this.b21_1, this.c21_1);
          case 5:
            throw this.b8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z7_1 === 5) {
          throw e;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e;
        }
      }
     while (true);
  };
  function $readAvailableCOROUTINE$(_this__u8e3s4, buffer, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l21_1 = _this__u8e3s4;
    this.m21_1 = buffer;
    this.n21_1 = offset;
    this.o21_1 = length;
  }
  protoOf($readAvailableCOROUTINE$).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 3;
            if (this.l21_1.k1y())
              return -1;
            if (this.l21_1.d1y().e19()) {
              this.y7_1 = 1;
              suspendResult = this.l21_1.m1y(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.y7_1 = 2;
              continue $sm;
            }

          case 1:
            this.y7_1 = 2;
            continue $sm;
          case 2:
            if (this.l21_1.k1y())
              return -1;
            return readAvailable_0(this.l21_1.d1y(), this.m21_1, this.n21_1, this.o21_1);
          case 3:
            throw this.b8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z7_1 === 3) {
          throw e;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e;
        }
      }
     while (true);
  };
  function $toByteArrayCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x21_1 = _this__u8e3s4;
  }
  protoOf($toByteArrayCOROUTINE$).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 2;
            this.y7_1 = 1;
            suspendResult = readBuffer(this.x21_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes(ARGUMENT);
          case 2:
            throw this.b8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z7_1 === 2) {
          throw e;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e;
        }
      }
     while (true);
  };
  function $copyToCOROUTINE$(_this__u8e3s4, channel, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g22_1 = _this__u8e3s4;
    this.h22_1 = channel;
    this.i22_1 = limit;
  }
  protoOf($copyToCOROUTINE$).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 12;
            this.j22_1 = this.i22_1;
            this.y7_1 = 1;
            continue $sm;
          case 1:
            this.z7_1 = 8;
            this.z7_1 = 7;
            this.y7_1 = 2;
            continue $sm;
          case 2:
            if (!(!this.g22_1.k1y() && compare(this.j22_1, new Long(0, 0)) > 0)) {
              this.y7_1 = 6;
              continue $sm;
            }

            if (this.g22_1.d1y().e19()) {
              this.y7_1 = 3;
              suspendResult = this.g22_1.m1y(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.y7_1 = 4;
              continue $sm;
            }

          case 3:
            this.y7_1 = 4;
            continue $sm;
          case 4:
            var tmp0 = this.j22_1;
            var b = get_remaining(this.g22_1.d1y());
            var count = compare(tmp0, b) <= 0 ? tmp0 : b;
            this.g22_1.d1y().g1a(this.h22_1.g1y(), count);
            this.j22_1 = subtract(this.j22_1, count);
            this.y7_1 = 5;
            suspendResult = this.h22_1.b1y(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.y7_1 = 2;
            continue $sm;
          case 6:
            this.z7_1 = 12;
            this.y7_1 = 10;
            continue $sm;
          case 7:
            this.z7_1 = 8;
            var tmp_0 = this.b8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.b8_1;
              this.g22_1.o1y(cause);
              close_0(this.h22_1, cause);
              throw cause;
            } else {
              throw this.b8_1;
            }

          case 8:
            this.z7_1 = 12;
            this.k22_1 = this.b8_1;
            this.y7_1 = 9;
            suspendResult = this.h22_1.b1y(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            throw this.k22_1;
          case 10:
            this.z7_1 = 12;
            this.y7_1 = 11;
            suspendResult = this.h22_1.b1y(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            return subtract(this.i22_1, this.j22_1);
          case 12:
            throw this.b8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z7_1 === 12) {
          throw e;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e;
        }
      }
     while (true);
  };
  function $skipIfFoundCOROUTINE$(_this__u8e3s4, byteString, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t22_1 = _this__u8e3s4;
    this.u22_1 = byteString;
  }
  protoOf($skipIfFoundCOROUTINE$).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 4;
            this.y7_1 = 1;
            suspendResult = peek(this.t22_1, this.u22_1.n(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (equals(ARGUMENT, this.u22_1)) {
              this.y7_1 = 3;
              suspendResult = discard(this.t22_1, fromInt(this.u22_1.n()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.y7_1 = 2;
              continue $sm;
            }

          case 2:
            return false;
          case 3:
            return true;
          case 4:
            throw this.b8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z7_1 === 4) {
          throw e;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e;
        }
      }
     while (true);
  };
  function $readPacketCOROUTINE$(_this__u8e3s4, packet, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d23_1 = _this__u8e3s4;
    this.e23_1 = packet;
  }
  protoOf($readPacketCOROUTINE$).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 6;
            this.f23_1 = new Buffer();
            this.y7_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(this.f23_1.n(), fromInt(this.e23_1)) < 0)) {
              this.y7_1 = 5;
              continue $sm;
            }

            if (this.d23_1.d1y().e19()) {
              this.y7_1 = 2;
              suspendResult = this.d23_1.m1y(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.y7_1 = 3;
              continue $sm;
            }

          case 2:
            this.y7_1 = 3;
            continue $sm;
          case 3:
            if (this.d23_1.k1y()) {
              this.y7_1 = 5;
              continue $sm;
            } else {
              this.y7_1 = 4;
              continue $sm;
            }

          case 4:
            if (compare(get_remaining(this.d23_1.d1y()), subtract(numberToLong(this.e23_1), this.f23_1.n())) > 0) {
              this.d23_1.d1y().g1a(this.f23_1, subtract(numberToLong(this.e23_1), this.f23_1.n()));
            } else {
              this.d23_1.d1y().h1a(this.f23_1);
            }

            this.y7_1 = 1;
            continue $sm;
          case 5:
            if (compare(this.f23_1.n(), fromInt(this.e23_1)) < 0) {
              throw EOFException_init_$Create$('Not enough data available, required ' + this.e23_1 + ' bytes but only ' + this.f23_1.n().toString() + ' available');
            }

            return this.f23_1;
          case 6:
            throw this.b8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z7_1 === 6) {
          throw e;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e;
        }
      }
     while (true);
  };
  function $readUTF8LineToCOROUTINE$(_this__u8e3s4, out, max, lineEnding, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t23_1 = _this__u8e3s4;
    this.u23_1 = out;
    this.v23_1 = max;
    this.w23_1 = lineEnding;
  }
  protoOf($readUTF8LineToCOROUTINE$).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 21;
            if (this.t23_1.d1y().e19()) {
              this.y7_1 = 1;
              suspendResult = this.t23_1.m1y(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.y7_1 = 2;
              continue $sm;
            }

          case 1:
            this.y7_1 = 2;
            continue $sm;
          case 2:
            if (this.t23_1.k1y())
              return false;
            var tmp_0 = this;
            tmp_0.c24_1 = new Buffer();
            this.y7_1 = 3;
            continue $sm;
          case 3:
            this.z23_1 = this.c24_1;
            this.y23_1 = null;
            this.y7_1 = 4;
            continue $sm;
          case 4:
            this.y7_1 = 5;
            continue $sm;
          case 5:
            this.y7_1 = 6;
            continue $sm;
          case 6:
            this.z7_1 = 18;
            this.z7_1 = 17;
            this.b24_1 = this.z23_1;
            this.y7_1 = 7;
            continue $sm;
          case 7:
            if (!!this.t23_1.k1y()) {
              this.y7_1 = 14;
              continue $sm;
            }

            this.y7_1 = 8;
            continue $sm;
          case 8:
            if (!!this.t23_1.d1y().e19()) {
              this.y7_1 = 12;
              continue $sm;
            }

            var b = this.t23_1.d1y().h19();
            if (b === 13) {
              if (this.t23_1.d1y().e19()) {
                this.y7_1 = 10;
                suspendResult = this.t23_1.m1y(VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.y7_1 = 11;
                continue $sm;
              }
            } else {
              if (b === 10) {
                readUTF8LineTo$checkLineEndingAllowed(this.w23_1, Companion_getInstance_1().h23_1);
                this.u23_1.h(readString(this.b24_1));
                this.a24_1 = true;
                this.z7_1 = 21;
                this.y7_1 = 15;
                continue $sm;
              } else {
                this.b24_1.x1a(b);
                this.y7_1 = 9;
                continue $sm;
              }
            }

          case 9:
            this.y7_1 = 8;
            continue $sm;
          case 10:
            this.y7_1 = 11;
            continue $sm;
          case 11:
            if (this.t23_1.d1y().d19().z19(new Long(0, 0)) === 10) {
              readUTF8LineTo$checkLineEndingAllowed(this.w23_1, Companion_getInstance_1().i23_1);
              discard_0(this.t23_1.d1y(), new Long(1, 0));
            } else {
              readUTF8LineTo$checkLineEndingAllowed(this.w23_1, Companion_getInstance_1().g23_1);
            }

            this.u23_1.h(readString(this.b24_1));
            this.a24_1 = true;
            this.z7_1 = 21;
            this.y7_1 = 15;
            continue $sm;
          case 12:
            if (compare(this.b24_1.n(), fromInt(this.v23_1)) >= 0) {
              throw new TooLongLineException('Line exceeds limit of ' + this.v23_1 + ' characters');
            }

            this.y7_1 = 13;
            suspendResult = this.t23_1.m1y(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 13:
            this.y7_1 = 7;
            continue $sm;
          case 14:
            var tmp_1 = this;
            var this_0 = compare(this.b24_1.n(), new Long(0, 0)) > 0;
            if (this_0) {
              this.u23_1.h(readString(this.b24_1));
            }

            tmp_1.a24_1 = this_0;
            this.z7_1 = 21;
            this.y7_1 = 15;
            var tmp_2 = this;
            continue $sm;
          case 15:
            var tmp_3 = this.a24_1;
            this.z7_1 = 21;
            closeFinally(this.z23_1, this.y23_1);
            return tmp_3;
          case 16:
            this.z7_1 = 21;
            var tmp_4 = this;
            closeFinally(this.z23_1, this.y23_1);
            tmp_4.x23_1 = Unit_instance;
            this.y7_1 = 20;
            continue $sm;
          case 17:
            this.z7_1 = 18;
            var tmp_5 = this.b8_1;
            if (tmp_5 instanceof Error) {
              var e = this.b8_1;
              var tmp_6 = this;
              this.y23_1 = e;
              throw e;
            } else {
              throw this.b8_1;
            }

          case 18:
            this.z7_1 = 21;
            var t = this.b8_1;
            closeFinally(this.z23_1, this.y23_1);
            throw t;
          case 19:
            this.z7_1 = 21;
            closeFinally(this.z23_1, this.y23_1);
            if (false) {
              this.y7_1 = 3;
              continue $sm;
            }

            this.y7_1 = 20;
            continue $sm;
          case 20:
            return Unit_instance;
          case 21:
            throw this.b8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.z7_1 === 21) {
          throw e_0;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e_0;
        }
      }
     while (true);
  };
  function $readBufferCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l24_1 = _this__u8e3s4;
  }
  protoOf($readBufferCOROUTINE$).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 4;
            this.m24_1 = new Buffer();
            this.y7_1 = 1;
            continue $sm;
          case 1:
            if (!!this.l24_1.k1y()) {
              this.y7_1 = 3;
              continue $sm;
            }

            this.m24_1.w1a(this.l24_1.d1y());
            this.y7_1 = 2;
            suspendResult = this.l24_1.m1y(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.y7_1 = 1;
            continue $sm;
          case 3:
            var tmp0_safe_receiver = this.l24_1.i1y();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            return this.m24_1;
          case 4:
            throw this.b8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z7_1 === 4) {
          throw e;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e;
        }
      }
     while (true);
  };
  function $peekCOROUTINE$(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v24_1 = _this__u8e3s4;
    this.w24_1 = count;
  }
  protoOf($peekCOROUTINE$).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 3;
            if (this.v24_1.k1y())
              return null;
            this.y7_1 = 1;
            suspendResult = this.v24_1.l1y(this.w24_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (!suspendResult) {
              return null;
            } else {
              this.y7_1 = 2;
              continue $sm;
            }

          case 2:
            return readByteString(this.v24_1.d1y().i1a(), this.w24_1);
          case 3:
            throw this.b8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z7_1 === 3) {
          throw e;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e;
        }
      }
     while (true);
  };
  function $copyToCOROUTINE$_0(_this__u8e3s4, channel, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f25_1 = _this__u8e3s4;
    this.g25_1 = channel;
  }
  protoOf($copyToCOROUTINE$_0).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 11;
            this.h25_1 = new Long(0, 0);
            this.y7_1 = 1;
            continue $sm;
          case 1:
            this.z7_1 = 7;
            this.z7_1 = 6;
            this.y7_1 = 2;
            continue $sm;
          case 2:
            if (!!this.f25_1.k1y()) {
              this.y7_1 = 5;
              continue $sm;
            }

            this.h25_1 = add(this.h25_1, this.f25_1.d1y().h1a(this.g25_1.g1y()));
            this.y7_1 = 3;
            suspendResult = this.g25_1.b1y(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.y7_1 = 4;
            suspendResult = this.f25_1.m1y(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.y7_1 = 2;
            continue $sm;
          case 5:
            this.z7_1 = 11;
            this.y7_1 = 9;
            continue $sm;
          case 6:
            this.z7_1 = 7;
            var tmp_0 = this.b8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.b8_1;
              this.f25_1.o1y(cause);
              close_0(this.g25_1, cause);
              throw cause;
            } else {
              throw this.b8_1;
            }

          case 7:
            this.z7_1 = 11;
            this.i25_1 = this.b8_1;
            this.y7_1 = 8;
            suspendResult = this.g25_1.b1y(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            throw this.i25_1;
          case 9:
            this.z7_1 = 11;
            this.y7_1 = 10;
            suspendResult = this.g25_1.b1y(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            return this.h25_1;
          case 11:
            throw this.b8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z7_1 === 11) {
          throw e;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e;
        }
      }
     while (true);
  };
  function ByteWriteChannel() {
  }
  function flushIfNeeded(_this__u8e3s4, $completion) {
    var tmp = new $flushIfNeededCOROUTINE$(_this__u8e3s4, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  }
  function $flushIfNeededCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r25_1 = _this__u8e3s4;
  }
  protoOf($flushIfNeededCOROUTINE$).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 3;
            rethrowCloseCauseIfNeeded_1(this.r25_1);
            if (this.r25_1.c1y() || get_size(this.r25_1.g1y()) >= 1048576) {
              this.y7_1 = 1;
              suspendResult = this.r25_1.b1y(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.y7_1 = 2;
              continue $sm;
            }

          case 1:
            this.y7_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.b8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z7_1 === 3) {
          throw e;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e;
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
    this.s25_1 = channel;
    this.t25_1 = job;
  }
  protoOf(WriterJob).w1i = function () {
    return this.t25_1;
  };
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    autoFlush = autoFlush === VOID ? false : autoFlush;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return writer_0(_this__u8e3s4, coroutineContext, new ByteChannel(), block);
  }
  function WriterScope(channel, coroutineContext) {
    this.u25_1 = channel;
    this.v25_1 = coroutineContext;
  }
  protoOf(WriterScope).p1c = function () {
    return this.v25_1;
  };
  function writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? value.length : endIndex;
    _this__u8e3s4.g1y().n1a(value, startIndex, endIndex);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function close_0(_this__u8e3s4, cause) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    if (cause == null) {
      fireAndForget(ByteWriteChannel$flushAndClose$ref_0(_this__u8e3s4));
    } else {
      _this__u8e3s4.o1y(cause);
    }
  }
  function invokeOnCompletion(_this__u8e3s4, block) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return _this__u8e3s4.w1i().r1d(block);
  }
  function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    // Inline function 'kotlin.apply' call
    var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel, null));
    this_0.r1d(writer$lambda(channel));
    var job = this_0;
    return new WriterJob(channel, job);
  }
  function fireAndForget(_this__u8e3s4) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
  }
  function writeByte(_this__u8e3s4, value, $completion) {
    _this__u8e3s4.g1y().x1a(value);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function writePacket(_this__u8e3s4, source, $completion) {
    var tmp = new $writePacketCOROUTINE$(_this__u8e3s4, source, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  }
  function NO_CALLBACK$1() {
    this.g26_1 = EmptyCoroutineContext_getInstance();
  }
  protoOf(NO_CALLBACK$1).e8 = function () {
    return this.g26_1;
  };
  protoOf(NO_CALLBACK$1).f8 = function (result) {
    return Unit_instance;
  };
  protoOf(NO_CALLBACK$1).j8 = function (result) {
    return this.f8(result);
  };
  function ByteWriteChannel$flushAndClose$ref(p0) {
    this.h26_1 = p0;
  }
  protoOf(ByteWriteChannel$flushAndClose$ref).i26 = function ($completion) {
    return this.h26_1.n1y($completion);
  };
  protoOf(ByteWriteChannel$flushAndClose$ref).p9 = function ($completion) {
    return this.i26($completion);
  };
  function ByteWriteChannel$flushAndClose$ref_0(p0) {
    var i = new ByteWriteChannel$flushAndClose$ref(p0);
    var l = function ($completion) {
      return i.i26($completion);
    };
    l.callableName = 'flushAndClose';
    l.$arity = 0;
    return l;
  }
  function writer$slambda($block, $channel, resultContinuation) {
    this.r26_1 = $block;
    this.s26_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(writer$slambda).a27 = function ($this$launch, $completion) {
    var tmp = this.b27($this$launch, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  };
  protoOf(writer$slambda).s8 = function (p1, $completion) {
    return this.a27((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(writer$slambda).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 14;
            this.w26_1 = Job(get_job(this.t26_1.p1c()));
            this.y7_1 = 1;
            continue $sm;
          case 1:
            this.z7_1 = 4;
            this.z7_1 = 3;
            this.y7_1 = 2;
            suspendResult = this.r26_1(new WriterScope(this.s26_1, this.t26_1.p1c().sg(this.w26_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w26_1.r1j();
            var tmp_0;
            if (get_job(this.t26_1.p1c()).l1d()) {
              this.s26_1.o1y(get_job(this.t26_1.p1c()).o1d());
              tmp_0 = Unit_instance;
            }

            this.z7_1 = 14;
            this.y7_1 = 9;
            continue $sm;
          case 3:
            this.z7_1 = 4;
            var tmp_1 = this.b8_1;
            if (tmp_1 instanceof Error) {
              var cause = this.b8_1;
              cancel(this.w26_1, 'Exception thrown while writing to channel', cause);
              this.s26_1.o1y(cause);
              this.z7_1 = 14;
              this.y7_1 = 9;
              continue $sm;
            } else {
              throw this.b8_1;
            }

          case 4:
            this.z7_1 = 14;
            this.x26_1 = this.b8_1;
            this.y7_1 = 5;
            suspendResult = this.w26_1.v1d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.t26_1;
            this.z7_1 = 7;
            var tmp_2 = this;
            tmp_2.z26_1 = Companion_instance;
            this.y7_1 = 6;
            suspendResult = this.s26_1.n1y(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_3 = this;
            this.z26_1;
            tmp_3.y26_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.z7_1 = 14;
            this.y7_1 = 8;
            continue $sm;
          case 7:
            this.z7_1 = 14;
            var tmp_4 = this.b8_1;
            if (tmp_4 instanceof Error) {
              var e = this.b8_1;
              var tmp_5 = this;
              tmp_5.y26_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.y7_1 = 8;
              continue $sm;
            } else {
              throw this.b8_1;
            }

          case 8:
            this.z7_1 = 14;
            throw this.x26_1;
          case 9:
            this.z7_1 = 14;
            this.y7_1 = 10;
            suspendResult = this.w26_1.v1d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.t26_1;
            this.z7_1 = 12;
            var tmp_6 = this;
            tmp_6.v26_1 = Companion_instance;
            this.y7_1 = 11;
            suspendResult = this.s26_1.n1y(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            var tmp_7 = this;
            this.v26_1;
            tmp_7.u26_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.z7_1 = 14;
            this.y7_1 = 13;
            continue $sm;
          case 12:
            this.z7_1 = 14;
            var tmp_8 = this.b8_1;
            if (tmp_8 instanceof Error) {
              var e_0 = this.b8_1;
              var tmp_9 = this;
              tmp_9.u26_1 = _Result___init__impl__xyqfz8(createFailure(e_0));
              this.y7_1 = 13;
              continue $sm;
            } else {
              throw this.b8_1;
            }

          case 13:
            this.z7_1 = 14;
            return Unit_instance;
          case 14:
            throw this.b8_1;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.z7_1 === 14) {
          throw e_1;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(writer$slambda).b27 = function ($this$launch, completion) {
    var i = new writer$slambda(this.r26_1, this.s26_1, completion);
    i.t26_1 = $this$launch;
    return i;
  };
  function writer$slambda_0($block, $channel, resultContinuation) {
    var i = new writer$slambda($block, $channel, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a27($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function writer$lambda($channel) {
    return function (it) {
      var tmp;
      if (!(it == null) && !$channel.h1y()) {
        $channel.o1y(it);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function $writePacketCOROUTINE$(_this__u8e3s4, source, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e26_1 = _this__u8e3s4;
    this.f26_1 = source;
  }
  protoOf($writePacketCOROUTINE$).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 4;
            this.y7_1 = 1;
            continue $sm;
          case 1:
            if (!!this.f26_1.e19()) {
              this.y7_1 = 3;
              continue $sm;
            }

            this.e26_1.g1y().r1a(this.f26_1, get_remaining(this.f26_1));
            this.y7_1 = 2;
            suspendResult = flushIfNeeded(this.e26_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.y7_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.b8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z7_1 === 4) {
          throw e;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e;
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
    this.e1y_1 = origin;
  }
  protoOf(CloseToken).c27 = function (wrap) {
    var tmp0_subject = this.e1y_1;
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (isInterface(tmp0_subject, CopyableThrowable)) {
        tmp = this.e1y_1.a1k();
      } else {
        if (tmp0_subject instanceof CancellationException) {
          tmp = CancellationException_init_$Create$(this.e1y_1.message, this.e1y_1);
        } else {
          tmp = wrap(this.e1y_1);
        }
      }
    }
    return tmp;
  };
  protoOf(CloseToken).j1y = function (wrap, $super) {
    var tmp;
    if (wrap === VOID) {
      tmp = ClosedByteChannelException$_init_$ref_yjp351();
    } else {
      tmp = wrap;
    }
    wrap = tmp;
    return $super === VOID ? this.c27(wrap) : $super.c27.call(this, wrap);
  };
  protoOf(CloseToken).f1y = function (wrap) {
    var tmp0_safe_receiver = this.c27(wrap);
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
    var appended = $this.e27_1.w1a($this.d27_1.d1y());
    $this.f27_1 = add($this.f27_1, appended);
  }
  function updateConsumed($this) {
    $this.g27_1 = add($this.g27_1, subtract($this.f27_1, $this.e27_1.n()));
    $this.f27_1 = $this.e27_1.n();
  }
  function $awaitContentCOROUTINE$_0(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p27_1 = _this__u8e3s4;
    this.q27_1 = min;
  }
  protoOf($awaitContentCOROUTINE$_0).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 3;
            if (compare(this.p27_1.d1y().n(), fromInt(this.q27_1)) >= 0) {
              return true;
            }

            this.y7_1 = 1;
            suspendResult = this.p27_1.d27_1.l1y(this.q27_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              transferFromDelegate(this.p27_1);
              return true;
            } else {
              this.y7_1 = 2;
              continue $sm;
            }

          case 2:
            return false;
          case 3:
            throw this.b8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z7_1 === 3) {
          throw e;
        } else {
          this.y7_1 = this.z7_1;
          this.b8_1 = e;
        }
      }
     while (true);
  };
  function CountedByteReadChannel(delegate) {
    this.d27_1 = delegate;
    this.e27_1 = new Buffer();
    this.f27_1 = new Long(0, 0);
    this.g27_1 = new Long(0, 0);
  }
  protoOf(CountedByteReadChannel).r27 = function () {
    updateConsumed(this);
    return this.g27_1;
  };
  protoOf(CountedByteReadChannel).i1y = function () {
    return this.d27_1.i1y();
  };
  protoOf(CountedByteReadChannel).k1y = function () {
    return this.e27_1.e19() && this.d27_1.k1y();
  };
  protoOf(CountedByteReadChannel).d1y = function () {
    transferFromDelegate(this);
    return this.e27_1;
  };
  protoOf(CountedByteReadChannel).l1y = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$_0(this, min, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  };
  protoOf(CountedByteReadChannel).o1y = function (cause) {
    this.d27_1.o1y(cause);
    this.e27_1.n3();
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
    if ($this === Companion_getInstance_1().g23_1) {
      tmp = 'CR';
    } else if ($this === Companion_getInstance_1().h23_1) {
      tmp = 'LF';
    } else if ($this === Companion_getInstance_1().i23_1) {
      tmp = 'CRLF';
    } else {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = Companion_getInstance_1().k23_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        var it = element.s27_1;
        if (LineEndingMode__contains_impl_q5pr68($this, it)) {
          destination.g(element);
        }
      }
      tmp = toString_1(destination);
    }
    return tmp;
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.g23_1 = _LineEndingMode___init__impl__jo5bul(1);
    this.h23_1 = _LineEndingMode___init__impl__jo5bul(2);
    this.i23_1 = _LineEndingMode___init__impl__jo5bul(4);
    this.j23_1 = _LineEndingMode___init__impl__jo5bul(7);
    this.k23_1 = listOf([new LineEndingMode(this.g23_1), new LineEndingMode(this.h23_1), new LineEndingMode(this.i23_1)]);
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
    if (!($this === other.s27_1))
      return false;
    return true;
  }
  function LineEndingMode(mode) {
    Companion_getInstance_1();
    this.s27_1 = mode;
  }
  protoOf(LineEndingMode).toString = function () {
    return LineEndingMode__toString_impl_j4h76r(this.s27_1);
  };
  protoOf(LineEndingMode).hashCode = function () {
    return LineEndingMode__hashCode_impl_2mopm4(this.s27_1);
  };
  protoOf(LineEndingMode).equals = function (other) {
    return LineEndingMode__equals_impl_qyr4nk(this.s27_1, other);
  };
  function SourceByteReadChannel(source) {
    this.t27_1 = source;
    this.u27_1 = null;
  }
  protoOf(SourceByteReadChannel).i1y = function () {
    var tmp0_safe_receiver = this.u27_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j1y();
  };
  protoOf(SourceByteReadChannel).k1y = function () {
    return this.t27_1.e19();
  };
  protoOf(SourceByteReadChannel).d1y = function () {
    var tmp0_safe_receiver = this.i1y();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.t27_1.d19();
  };
  protoOf(SourceByteReadChannel).l1y = function (min, $completion) {
    var tmp0_safe_receiver = this.i1y();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.t27_1.g19(fromInt(min));
  };
  protoOf(SourceByteReadChannel).o1y = function (cause) {
    if (!(this.u27_1 == null))
      return Unit_instance;
    this.t27_1.n3();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.u27_1 = new CloseToken(IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  };
  function decode(_this__u8e3s4, input, max) {
    max = max === VOID ? 2147483647 : max;
    var tmp0 = fromInt(max);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = input.d19().n();
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
    return !_this__u8e3s4.e19();
  }
  function readBytes(_this__u8e3s4, count) {
    count = count === VOID ? convertToInt(_this__u8e3s4.n()) : count;
    return readByteArray(_this__u8e3s4, count);
  }
  function writeFully_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    _this__u8e3s4.n1a(buffer, offset, offset + length | 0);
  }
  function BytePacketBuilder() {
    return new Buffer();
  }
  function build(_this__u8e3s4) {
    return _this__u8e3s4.d19();
  }
  function get_size(_this__u8e3s4) {
    return convertToInt(_this__u8e3s4.d19().n());
  }
  var ByteReadPacketEmpty;
  function get_remaining(_this__u8e3s4) {
    _init_properties_ByteReadPacket_kt__28475y();
    return _this__u8e3s4.d19().n();
  }
  function takeWhile(_this__u8e3s4, block) {
    _init_properties_ByteReadPacket_kt__28475y();
    while (!_this__u8e3s4.e19() && block(_this__u8e3s4.d19())) {
    }
  }
  function discard_0(_this__u8e3s4, count) {
    count = count === VOID ? new Long(-1, 2147483647) : count;
    _init_properties_ByteReadPacket_kt__28475y();
    _this__u8e3s4.g19(count);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(_this__u8e3s4);
    var countToDiscard = compare(count, b) <= 0 ? count : b;
    _this__u8e3s4.d19().b1a(countToDiscard);
    return countToDiscard;
  }
  function ByteReadPacket(array, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? array.length : length;
    _init_properties_ByteReadPacket_kt__28475y();
    // Inline function 'kotlin.apply' call
    var this_0 = new Buffer();
    this_0.n1a(array, offset, offset + length | 0);
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
    var result = _this__u8e3s4.c1a(buffer, offset, offset + length | 0);
    return result === -1 ? 0 : result;
  }
  function readText_0(_this__u8e3s4, charset, max) {
    charset = charset === VOID ? Charsets_getInstance().v27_1 : charset;
    max = max === VOID ? 2147483647 : max;
    if (charset.equals(Charsets_getInstance().v27_1)) {
      if (max === 2147483647)
        return readString_0(_this__u8e3s4);
      var tmp0 = _this__u8e3s4.d19().n();
      // Inline function 'kotlin.math.min' call
      var b = fromInt(max);
      var count = compare(tmp0, b) <= 0 ? tmp0 : b;
      return readString_1(_this__u8e3s4, count);
    }
    return decode(charset.y27(), _this__u8e3s4, max);
  }
  function toByteArray_0(_this__u8e3s4, charset) {
    charset = charset === VOID ? Charsets_getInstance().v27_1 : charset;
    if (charset.equals(Charsets_getInstance().v27_1))
      return encodeToByteArray(_this__u8e3s4, VOID, VOID, true);
    return encodeToByteArray_0(charset.z27(), _this__u8e3s4, 0, _this__u8e3s4.length);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
    charset = charset === VOID ? Charsets_getInstance().v27_1 : charset;
    if (charset === Charsets_getInstance().v27_1) {
      return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
    }
    encodeToImpl(charset.z27(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function get_ByteArrayPool() {
    _init_properties_ByteArrayPool_kt__kfi3uj();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  protoOf(ByteArrayPool$1).d28 = function () {
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
  protoOf(NoPoolImpl).l28 = function (instance) {
    return Unit_instance;
  };
  protoOf(NoPoolImpl).l1g = function () {
    return Unit_instance;
  };
  function Companion_2() {
  }
  protoOf(Companion_2).m28 = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().v27_1;
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
      return Charsets_getInstance().w27_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  var Companion_instance_3;
  function Companion_getInstance_2() {
    return Companion_instance_3;
  }
  function Charset(_name) {
    this.x27_1 = _name;
  }
  protoOf(Charset).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.x27_1 === other.x27_1;
  };
  protoOf(Charset).hashCode = function () {
    return getStringHashCode(this.x27_1);
  };
  protoOf(Charset).toString = function () {
    return this.x27_1;
  };
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.x27_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.v27_1 = new CharsetImpl('UTF-8');
    this.w27_1 = new CharsetImpl('ISO-8859-1');
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
    this.n28_1 = _charset;
  }
  function forName(_this__u8e3s4, name) {
    return Companion_instance_3.m28(name);
  }
  function CharsetEncoder(_charset) {
    this.o28_1 = _charset;
  }
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
    var tmp0 = input.d19().n();
    // Inline function 'kotlin.comparisons.minOf' call
    var b = fromInt(max);
    var count = compare(tmp0, b) <= 0 ? tmp0 : b;
    var tmp = readByteArray(input, convertToInt(count));
    var array = tmp instanceof Int8Array ? tmp : THROW_CCE();
    var tmp_0;
    try {
      tmp_0 = decoder.p28(array);
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
    dst.h(result);
    return result.length;
  }
  function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(fromIndex <= toIndex)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().w27_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().v27_1)) {
      var message_0 = 'Only UTF-8 encoding is supported in JS';
      throw IllegalArgumentException_init_$Create$(toString_1(message_0));
    }
    var encoder = new TextEncoder();
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
    var result = encoder.encode(tmp$ret$5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    dst.q1a(result);
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
  protoOf(CharsetImpl).z27 = function () {
    return new CharsetEncoderImpl(this);
  };
  protoOf(CharsetImpl).y27 = function () {
    return new CharsetDecoderImpl(this);
  };
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.n28_1;
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.o28_1;
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
    this.s28_1 = charset;
  }
  protoOf(CharsetEncoderImpl).toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.s28_1.toString() + ')';
  };
  protoOf(CharsetEncoderImpl).hashCode = function () {
    return this.s28_1.hashCode();
  };
  protoOf(CharsetEncoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    if (!this.s28_1.equals(other.s28_1))
      return false;
    return true;
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.u28_1 = charset;
  }
  protoOf(CharsetDecoderImpl).toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.u28_1.toString() + ')';
  };
  protoOf(CharsetDecoderImpl).hashCode = function () {
    return this.u28_1.hashCode();
  };
  protoOf(CharsetDecoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    if (!this.u28_1.equals(other.u28_1))
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
    this.v28_1 = $this_toKtor;
  }
  protoOf(toKtor$1).p28 = function (buffer) {
    return this.v28_1.decode(buffer);
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
    this.w28_1 = fatal;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString_1(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    if (!get_ENCODING_ALIASES().q1(requestedEncoding)) {
      var message = encoding + ' is not supported.';
      throw IllegalStateException_init_$Create$(toString_1(message));
    }
  }
  protoOf(TextDecoderFallback).p28 = function (buffer) {
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
          if (!!this.w28_1) {
            var message = 'Invalid character: ' + point;
            throw IllegalStateException_init_$Create$(toString_1(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.x1a(toByte(point >> 8));
        }
        builder.x1a(toByte(point & 255));
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
    return Dispatchers_getInstance().h1n_1;
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
        dst.x1a(toByte(character));
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
    this.e28_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.e28_1;
    tmp.f28_1 = Array(size);
    this.g28_1 = 0;
  }
  protoOf(DefaultPool).h28 = function (instance) {
  };
  protoOf(DefaultPool).i28 = function (instance) {
    return instance;
  };
  protoOf(DefaultPool).j28 = function (instance) {
  };
  protoOf(DefaultPool).k28 = function () {
    if (this.g28_1 === 0)
      return this.d28();
    this.g28_1 = this.g28_1 - 1 | 0;
    var idx = this.g28_1;
    var tmp = this.f28_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.f28_1[idx] = null;
    return this.i28(instance);
  };
  protoOf(DefaultPool).l28 = function (instance) {
    this.j28(instance);
    if (this.g28_1 === this.e28_1) {
      this.h28(instance);
    } else {
      var _unary__edvuaz = this.g28_1;
      this.g28_1 = _unary__edvuaz + 1 | 0;
      this.f28_1[_unary__edvuaz] = instance;
    }
  };
  protoOf(DefaultPool).l1g = function () {
    var inductionVariable = 0;
    var last = this.g28_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.f28_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.f28_1[i] = null;
        this.h28(instance);
      }
       while (inductionVariable < last);
    this.g28_1 = 0;
  };
  //region block: post-declaration
  protoOf(Read).g1w = resume;
  protoOf(Read).h1w = resume_0;
  protoOf(Write).g1w = resume;
  protoOf(Write).h1w = resume_0;
  protoOf(ByteChannel).m1y = awaitContent$default;
  protoOf(ByteReadChannel$Companion$Empty$1).m1y = awaitContent$default;
  protoOf(CountedByteReadChannel).m1y = awaitContent$default;
  protoOf(SourceByteReadChannel).m1y = awaitContent$default;
  protoOf(DefaultPool).n3 = close;
  protoOf(NoPoolImpl).n3 = close;
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
