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
  var Companion_instance = kotlin_kotlin.$_$.u;
  var Unit_instance = kotlin_kotlin.$_$.z;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m3;
  var protoOf = kotlin_kotlin.$_$.yb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.za;
  var initMetadataForObject = kotlin_kotlin.$_$.eb;
  var toString = kotlin_kotlin.$_$.zg;
  var hashCode = kotlin_kotlin.$_$.xa;
  var equals = kotlin_kotlin.$_$.sa;
  var initMetadataForClass = kotlin_kotlin.$_$.ya;
  var createFailure = kotlin_kotlin.$_$.og;
  var Result = kotlin_kotlin.$_$.wf;
  var initMetadataForInterface = kotlin_kotlin.$_$.cb;
  var toString_0 = kotlin_kotlin.$_$.ue;
  var newThrowable = kotlin_kotlin.$_$.tb;
  var stackTraceToString = kotlin_kotlin.$_$.yg;
  var VOID = kotlin_kotlin.$_$.c;
  var isInterface = kotlin_kotlin.$_$.nb;
  var CoroutineImpl = kotlin_kotlin.$_$.f9;
  var fromInt = kotlin_kotlin.$_$.t9;
  var compare = kotlin_kotlin.$_$.n9;
  var numberToLong = kotlin_kotlin.$_$.aa;
  var add = kotlin_kotlin.$_$.k9;
  var intercepted = kotlin_kotlin.$_$.r8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wg;
  var returnIfSuspended = kotlin_kotlin.$_$.e1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.o8;
  var Long = kotlin_kotlin.$_$.tf;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ab;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var convertToInt = kotlin_kotlin.$_$.p9;
  var IllegalStateException = kotlin_kotlin.$_$.sf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.q2;
  var captureStack = kotlin_kotlin.$_$.ja;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var decodeToString = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.d;
  var replace = kotlin_kotlin.$_$.wd;
  var indexOf = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.i;
  var THROW_CCE = kotlin_kotlin.$_$.yf;
  var equalsLong = kotlin_kotlin.$_$.s9;
  var get_ONE = kotlin_kotlin.$_$.j9;
  var toString_1 = kotlin_kotlin.$_$.bc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var EOFException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.a;
  var readString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.n;
  var subtract = kotlin_kotlin.$_$.da;
  var readByteString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.l;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.e;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var startCoroutineCancellable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var Continuation = kotlin_kotlin.$_$.z8;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.bb;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var initMetadataForLambda = kotlin_kotlin.$_$.db;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var CancellationException = kotlin_kotlin.$_$.n8;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var readString_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.m;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var Enum = kotlin_kotlin.$_$.of;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h1;
  var listOf = kotlin_kotlin.$_$.j7;
  var IOException_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.e;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.a2;
  var charSequenceLength = kotlin_kotlin.$_$.oa;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var encodeToByteArray = kotlin_kotlin.$_$.gd;
  var writeString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.o;
  var AutoCloseable = kotlin_kotlin.$_$.hf;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e3;
  var replace_0 = kotlin_kotlin.$_$.xd;
  var getStringHashCode = kotlin_kotlin.$_$.wa;
  var IOException_init_$Init$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.b;
  var charSequenceSubSequence = kotlin_kotlin.$_$.pa;
  var readByteArray_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var isCharSequence = kotlin_kotlin.$_$.jb;
  var trim = kotlin_kotlin.$_$.cf;
  var toByte = kotlin_kotlin.$_$.zb;
  var decodeToString_0 = kotlin_kotlin.$_$.ed;
  var setOf = kotlin_kotlin.$_$.v7;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var charSequenceGet = kotlin_kotlin.$_$.na;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.k3;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject(Empty, 'Empty');
  initMetadataForClass(Closed, 'Closed');
  function resume() {
    return this.r1z().y8(Companion_getInstance().o1z_1);
  }
  function resume_0(throwable) {
    var tmp = this.r1z();
    var tmp_0;
    if (throwable == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(throwable));
      tmp_0 = new Result(tmp$ret$0);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp.y8(tmp1_elvis_lhs == null ? Companion_getInstance().o1z_1 : tmp1_elvis_lhs.gn_1);
  }
  initMetadataForInterface(Task, 'Task');
  initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
  initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
  initMetadataForCoroutine($awaitContentCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushAndCloseCOROUTINE$, CoroutineImpl);
  function awaitContent$default(min, $completion, $super) {
    min = min === VOID ? 1 : min;
    return $super === VOID ? this.y21(min, $completion) : $super.y21.call(this, min, $completion);
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
  initMetadataForCoroutine($readBufferCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($peekCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($internalReadLineToCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($copyToCOROUTINE$_0, CoroutineImpl);
  initMetadataForCoroutine($internalReadLineTo$discardCrlfOrCrCOROUTINE$, CoroutineImpl);
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
  initMetadataForClass(LineEnding, 'LineEnding', VOID, Enum);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(LineEndingMode, 'LineEndingMode');
  initMetadataForClass(SourceByteReadChannel, 'SourceByteReadChannel', VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForClass(MalformedInputException, 'MalformedInputException', VOID, IOException);
  initMetadataForClass(TooLongLineException, 'TooLongLineException', VOID, MalformedInputException);
  function close() {
    this.f1i();
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
    this.n1z_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    tmp.o1z_1 = _Result___init__impl__xyqfz8(Unit_instance);
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
    this.p1z_1 = cause;
  }
  protoOf(Closed).toString = function () {
    return 'Closed(cause=' + toString(this.p1z_1) + ')';
  };
  protoOf(Closed).hashCode = function () {
    return this.p1z_1 == null ? 0 : hashCode(this.p1z_1);
  };
  protoOf(Closed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    if (!equals(this.p1z_1, other.p1z_1))
      return false;
    return true;
  };
  function Task() {
  }
  function Read(continuation) {
    this.v1z_1 = continuation;
    this.w1z_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.v1z_1), 16));
      stackTraceToString(this_0);
      tmp.w1z_1 = this_0;
    }
  }
  protoOf(Read).r1z = function () {
    return this.v1z_1;
  };
  protoOf(Read).q1z = function () {
    return this.w1z_1;
  };
  protoOf(Read).s1z = function () {
    return 'read';
  };
  function Write(continuation) {
    this.x1z_1 = continuation;
    this.y1z_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.x1z_1), 16));
      stackTraceToString(this_0);
      tmp.y1z_1 = this_0;
    }
  }
  protoOf(Write).r1z = function () {
    return this.x1z_1;
  };
  protoOf(Write).q1z = function () {
    return this.y1z_1;
  };
  protoOf(Write).s1z = function () {
    return 'write';
  };
  function moveFlushToReadBuffer($this) {
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    $this.c20_1;
    $this.a20_1.b1c($this.e20_1);
    $this.b20_1 = 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = $this.d20_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Write) {
      tmp = $this.d20_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.t1z();
    }
  }
  function closeSlot($this, cause) {
    var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().n1z_1;
    var continuation = $this.d20_1.atomicfu$getAndSet(closeContinuation);
    if (isInterface(continuation, Task)) {
      continuation.u1z(cause);
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
    this.p20_1 = _this__u8e3s4;
    this.q20_1 = min;
  }
  protoOf($awaitContentCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            rethrowCloseCauseIfNeeded(this.p20_1);
            if (compare(this.p20_1.e20_1.e1(), fromInt(this.q20_1)) >= 0)
              return true;
            this.r20_1 = this.p20_1;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(add(numberToLong(this.p20_1.b20_1), this.p20_1.e20_1.e1()), fromInt(this.q20_1)) < 0 && this.p20_1.g20_1.kotlinx$atomicfu$value == null)) {
              this.n8_1 = 3;
              continue $sm;
            }

            this.n8_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.i1j();
            var tmp0 = this.r20_1;
            var tmp2 = new Read(cancellable);
            l$ret$1: do {
              var previous = tmp0.d20_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.d20_1.atomicfu$compareAndSet(previous, tmp2)) {
                  tmp2.t1z();
                  break l$ret$1;
                }
              }
              if (previous instanceof Read) {
                previous.u1z(new ConcurrentIOException(tmp2.s1z(), previous.q1z()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.t1z();
                } else {
                  if (previous instanceof Closed) {
                    tmp2.u1z(previous.p1z_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(compare(add(numberToLong(this.p20_1.b20_1), this.p20_1.e20_1.e1()), fromInt(this.q20_1)) < 0 && this.p20_1.g20_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.d20_1.kotlinx$atomicfu$value;
                var tmp_0;
                if (current instanceof Read) {
                  tmp_0 = tmp0.d20_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  current.t1z();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.o1g(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n8_1 = 1;
            continue $sm;
          case 3:
            if (compare(this.p20_1.e20_1.e1(), new Long(1048576, 0)) < 0) {
              moveFlushToReadBuffer(this.p20_1);
            }

            return compare(this.p20_1.e20_1.e1(), fromInt(this.q20_1)) >= 0;
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
    this.a21_1 = _this__u8e3s4;
  }
  protoOf($flushCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            rethrowCloseCauseIfNeeded(this.a21_1);
            this.a21_1.c21();
            if (this.a21_1.b20_1 < 1048576)
              return Unit_instance;
            this.b21_1 = this.a21_1;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!(this.a21_1.b20_1 >= 1048576 && this.a21_1.g20_1.kotlinx$atomicfu$value == null)) {
              this.n8_1 = 3;
              continue $sm;
            }

            this.n8_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.i1j();
            var tmp0 = this.b21_1;
            var tmp2 = new Write(cancellable);
            l$ret$1: do {
              var previous = tmp0.d20_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.d20_1.atomicfu$compareAndSet(previous, tmp2)) {
                  tmp2.t1z();
                  break l$ret$1;
                }
              }
              if (previous instanceof Write) {
                previous.u1z(new ConcurrentIOException(tmp2.s1z(), previous.q1z()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.t1z();
                } else {
                  if (previous instanceof Closed) {
                    tmp2.u1z(previous.p1z_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(this.a21_1.b20_1 >= 1048576 && this.a21_1.g20_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.d20_1.kotlinx$atomicfu$value;
                var tmp_0;
                if (current instanceof Write) {
                  tmp_0 = tmp0.d20_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  current.t1z();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.o1g(), this);
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
    this.l21_1 = _this__u8e3s4;
  }
  protoOf($flushAndCloseCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            var this_0 = this.l21_1;
            this.o8_1 = 2;
            this.n21_1 = Companion_instance;
            this.n8_1 = 1;
            suspendResult = this_0.o21(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0 = this;
            this.n21_1;
            tmp_0.m21_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.o8_1 = 4;
            this.n8_1 = 3;
            continue $sm;
          case 2:
            this.o8_1 = 4;
            var tmp_1 = this.q8_1;
            if (tmp_1 instanceof Error) {
              var e = this.q8_1;
              var tmp_2 = this;
              tmp_2.m21_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n8_1 = 3;
              continue $sm;
            } else {
              throw this.q8_1;
            }

          case 3:
            this.o8_1 = 4;
            if (!this.l21_1.g20_1.atomicfu$compareAndSet(null, get_CLOSED()))
              return Unit_instance;
            closeSlot(this.l21_1, null);
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
    this.z1z_1 = autoFlush;
    this.a20_1 = new Buffer();
    this.b20_1 = 0;
    this.c20_1 = new Object();
    this.d20_1 = atomic$ref$1(Empty_instance);
    this.e20_1 = new Buffer();
    this.f20_1 = new Buffer();
    this.g20_1 = atomic$ref$1(null);
  }
  protoOf(ByteChannel).p21 = function () {
    return this.z1z_1;
  };
  protoOf(ByteChannel).q21 = function () {
    var tmp0_safe_receiver = this.g20_1.kotlinx$atomicfu$value;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.s21(ClosedReadChannelException$_init_$ref_ix0089());
    }
    if (this.e20_1.y1a()) {
      moveFlushToReadBuffer(this);
    }
    return this.e20_1;
  };
  protoOf(ByteChannel).t21 = function () {
    if (this.u21()) {
      var tmp0_safe_receiver = this.g20_1.kotlinx$atomicfu$value;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp = tmp0_safe_receiver.s21(ClosedWriteChannelException$_init_$ref_ef15ty());
      }
      if (tmp == null)
        throw new ClosedWriteChannelException();
    }
    return this.f20_1;
  };
  protoOf(ByteChannel).v21 = function () {
    var tmp0_safe_receiver = this.g20_1.kotlinx$atomicfu$value;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w21();
  };
  protoOf(ByteChannel).u21 = function () {
    return !(this.g20_1.kotlinx$atomicfu$value == null);
  };
  protoOf(ByteChannel).x21 = function () {
    return !(this.v21() == null) || (this.u21() && this.b20_1 === 0 && this.e20_1.y1a());
  };
  protoOf(ByteChannel).y21 = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$(this, min, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(ByteChannel).o21 = function ($completion) {
    var tmp = new $flushCOROUTINE$(this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(ByteChannel).c21 = function () {
    if (this.f20_1.y1a())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.c20_1;
    var count = convertToInt(this.f20_1.e1());
    this.a20_1.q1c(this.f20_1);
    this.b20_1 = this.b20_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.d20_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Read) {
      tmp = this.d20_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.t1z();
    }
  };
  protoOf(ByteChannel).h4 = function () {
    this.c21();
    if (!this.g20_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
  };
  protoOf(ByteChannel).a22 = function ($completion) {
    var tmp = new $flushAndCloseCOROUTINE$(this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(ByteChannel).b22 = function (cause) {
    if (!(this.g20_1.kotlinx$atomicfu$value == null))
      return Unit_instance;
    var closedToken = new CloseToken(cause);
    this.g20_1.atomicfu$compareAndSet(null, closedToken);
    var wrappedCause = closedToken.w21();
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
    this_0.h1c(content, offset, offset + length | 0);
    var source = this_0;
    return ByteReadChannel_0(source);
  }
  function ByteReadChannel_0(source) {
    return new SourceByteReadChannel(source);
  }
  function buildPartialMatchTable($this) {
    var table = new Int32Array($this.d22_1.e1());
    var j = 0;
    var inductionVariable = 1;
    var last = $this.d22_1.e1();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        while (j > 0 && !($this.d22_1.d1(i) === $this.d22_1.d1(j))) {
          j = table[j - 1 | 0];
        }
        if ($this.d22_1.d1(i) === $this.d22_1.d1(j)) {
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
    if (compare(add($this.j22_1, extra), $this.f22_1) > 0) {
      throw IOException_init_$Create$('Limit of ' + $this.f22_1.toString() + ' bytes exceeded ' + ('while searching for "' + toSingleLineString($this, $this.d22_1) + '"'));
    }
  }
  function toSingleLineString($this, $receiver) {
    return replace(decodeToString($receiver), '\n', '\\n');
  }
  function $findNextCOROUTINE$(_this__u8e3s4, ignoreMissing, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o23_1 = _this__u8e3s4;
    this.p23_1 = ignoreMissing;
  }
  protoOf($findNextCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 9;
            this.o23_1.j22_1 = new Long(0, 0);
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!this.o23_1.g22_1.y1a()) {
              this.q23_1 = true;
              this.n8_1 = 3;
              continue $sm;
            } else {
              this.n8_1 = 2;
              suspendResult = this.o23_1.c22_1.z21(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.q23_1 = suspendResult;
            this.n8_1 = 3;
            continue $sm;
          case 3:
            if (!this.q23_1) {
              this.n8_1 = 7;
              continue $sm;
            }

            this.n8_1 = 4;
            suspendResult = advanceToNextPotentialMatch(this.o23_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.n8_1 = 5;
            suspendResult = checkFullMatch(this.o23_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (suspendResult) {
              return this.o23_1.j22_1;
            } else {
              this.n8_1 = 6;
              continue $sm;
            }

          case 6:
            this.n8_1 = 1;
            continue $sm;
          case 7:
            if (!this.p23_1) {
              throw IOException_init_$Create$('Expected "' + toSingleLineString(this.o23_1, this.o23_1.d22_1) + '" but encountered end of input');
            }

            this.o23_1.j22_1 = add(this.o23_1.j22_1, this.o23_1.i22_1.b1c(this.o23_1.e22_1.t21()));
            this.n8_1 = 8;
            suspendResult = this.o23_1.e22_1.o21(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return this.o23_1.j22_1;
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
    this.t22_1 = _this__u8e3s4;
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
            if (!this.t22_1.g22_1.y1a()) {
              this.u22_1 = true;
              this.n8_1 = 3;
              continue $sm;
            } else {
              this.n8_1 = 2;
              suspendResult = this.t22_1.c22_1.z21(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.u22_1 = suspendResult;
            this.n8_1 = 3;
            continue $sm;
          case 3:
            if (!this.u22_1) {
              this.n8_1 = 7;
              continue $sm;
            }

            var nextMatch = indexOf(this.t22_1.g22_1, this.t22_1.d22_1.d1(0));
            if (equalsLong(nextMatch, new Long(-1, -1))) {
              var tmp_0 = this.t22_1.g22_1;
              checkBounds(this.t22_1, (tmp_0 instanceof Buffer ? tmp_0 : THROW_CCE()).e1());
              this.t22_1.j22_1 = add(this.t22_1.j22_1, this.t22_1.g22_1.b1c(this.t22_1.e22_1.t21()));
              this.n8_1 = 5;
              suspendResult = flushIfNeeded(this.t22_1.e22_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              checkBounds(this.t22_1, nextMatch);
              var tmp_1 = this.t22_1;
              var tmp_2 = this.t22_1.j22_1;
              var tmp_3 = this.t22_1.e22_1.t21();
              tmp_1.j22_1 = add(tmp_2, this.t22_1.g22_1.y1b(tmp_3 instanceof Buffer ? tmp_3 : THROW_CCE(), nextMatch));
              this.n8_1 = 4;
              suspendResult = flushIfNeeded(this.t22_1.e22_1, this);
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
    this.d23_1 = _this__u8e3s4;
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
            if (!this.d23_1.g22_1.y1a()) {
              this.f23_1 = true;
              this.n8_1 = 3;
              continue $sm;
            } else {
              this.n8_1 = 2;
              suspendResult = this.d23_1.c22_1.z21(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.f23_1 = suspendResult;
            this.n8_1 = 3;
            continue $sm;
          case 3:
            if (!this.f23_1) {
              this.n8_1 = 7;
              continue $sm;
            }

            this.e23_1 = this.d23_1.g22_1.b1b();
            if (this.d23_1.k22_1 > 0 && !(this.e23_1 === this.d23_1.d22_1.d1(this.d23_1.k22_1))) {
              var oldMatchIndex = this.d23_1.k22_1;
              while (this.d23_1.k22_1 > 0 && !(this.e23_1 === this.d23_1.d22_1.d1(this.d23_1.k22_1))) {
                this.d23_1.k22_1 = this.d23_1.h22_1[this.d23_1.k22_1 - 1 | 0];
              }
              var retained = fromInt(oldMatchIndex - this.d23_1.k22_1 | 0);
              checkBounds(this.d23_1, retained);
              var tmp_0 = this.d23_1;
              var tmp_1 = this.d23_1.j22_1;
              var tmp_2 = this.d23_1.e22_1.t21();
              tmp_0.j22_1 = add(tmp_1, this.d23_1.i22_1.y1b(tmp_2 instanceof Buffer ? tmp_2 : THROW_CCE(), retained));
              if (this.d23_1.k22_1 === 0 && !(this.e23_1 === this.d23_1.d22_1.d1(this.d23_1.k22_1))) {
                this.n8_1 = 6;
                suspendResult = writeByte(this.d23_1.e22_1, this.e23_1, this);
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
            this.d23_1.k22_1 = this.d23_1.k22_1 + 1 | 0;
            if (this.d23_1.k22_1 === this.d23_1.d22_1.e1()) {
              return true;
            }

            this.d23_1.i22_1.r1c(this.e23_1);
            this.n8_1 = 1;
            continue $sm;
          case 6:
            var _unary__edvuaz = this.d23_1.j22_1;
            this.d23_1.j22_1 = add(_unary__edvuaz, get_ONE());
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
    this.c22_1 = channel;
    this.d22_1 = matchString;
    this.e22_1 = writeChannel;
    this.f22_1 = limit;
    // Inline function 'kotlin.require' call
    if (!(this.d22_1.e1() > 0)) {
      var message = 'Empty match string not permitted for scanning';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    this.g22_1 = this.c22_1.q21();
    this.h22_1 = buildPartialMatchTable(this);
    this.i22_1 = new Buffer();
    this.j22_1 = new Long(0, 0);
    this.k22_1 = 0;
  }
  protoOf(ByteChannelScanner).r23 = function (ignoreMissing, $completion) {
    var tmp = new $findNextCOROUTINE$(this, ignoreMissing, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  function ByteReadChannel$Companion$Empty$1() {
    this.s23_1 = null;
    this.t23_1 = new Buffer();
  }
  protoOf(ByteReadChannel$Companion$Empty$1).v21 = function () {
    return this.s23_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).x21 = function () {
    return true;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).q21 = function () {
    return this.t23_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).y21 = function (min, $completion) {
    return false;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).b22 = function (cause) {
  };
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.u23_1 = new ByteReadChannel$Companion$Empty$1();
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
    _this__u8e3s4.b22(IOException_init_$Create$('Channel was cancelled'));
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
    return (new ByteChannelScanner(_this__u8e3s4, matchString, writeChannel, limit)).r23(ignoreMissing, $completion);
  }
  function readLineStrictTo(_this__u8e3s4, out, limit, lineEnding, $completion) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    lineEnding = lineEnding === VOID ? LineEnding_Default_getInstance() : lineEnding;
    // Inline function 'kotlin.require' call
    if (!(compare(limit, new Long(0, 0)) >= 0)) {
      var message = 'Limit (' + limit.toString() + ') should be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    return internalReadLineTo(_this__u8e3s4, out, limit, lineEnding.equals(LineEnding_Lenient_getInstance()), true, $completion);
  }
  function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.v21();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.v21();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function get_availableForRead(_this__u8e3s4) {
    return convertToInt(_this__u8e3s4.q21().x1a().e1());
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
  function internalReadLineTo(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion) {
    var tmp = new $internalReadLineToCOROUTINE$(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function throwEndOfStreamException(consumed) {
    throw EOFException_init_$Create$('Unexpected end of stream after reading ' + consumed.toString() + ' characters');
  }
  function throwTooLongLineException(limit) {
    throw new TooLongLineException('Line exceeds limit of ' + limit.toString() + ' characters');
  }
  function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.v21();
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
  function internalReadLineTo$transferString(readBuffer, $out, consumed, count) {
    if (compare(count, new Long(0, 0)) > 0) {
      var string = readString(readBuffer, count);
      $out.c1(string);
      var tmp0 = consumed._v;
      // Inline function 'kotlin.Long.plus' call
      var other = string.length;
      consumed._v = add(tmp0, fromInt(other));
    }
  }
  function internalReadLineTo$scanForSoleCr(_this__u8e3s4, $lenientLineEnding, lfIndex, limitLeft) {
    if (!$lenientLineEnding)
      return new Long(-1, -1);
    var tmp;
    if (equalsLong(lfIndex, new Long(-1, -1))) {
      // Inline function 'kotlin.Long.minus' call
      var this_0 = get_remaining(_this__u8e3s4);
      // Inline function 'kotlin.comparisons.minOf' call
      var b = subtract(this_0, fromInt(1));
      tmp = compare(limitLeft, b) <= 0 ? limitLeft : b;
    } else if (equalsLong(lfIndex, new Long(0, 0))) {
      tmp = new Long(0, 0);
    } else {
      // Inline function 'kotlin.Long.minus' call
      tmp = subtract(lfIndex, fromInt(1));
    }
    var endIndex = tmp;
    return indexOf(_this__u8e3s4, 13, VOID, endIndex);
  }
  function internalReadLineTo$discardCrlfOrCr(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, $completion) {
    var tmp = new $internalReadLineTo$discardCrlfOrCrCOROUTINE$(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function $readRemainingCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d24_1 = _this__u8e3s4;
  }
  protoOf($readRemainingCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            this.e24_1 = BytePacketBuilder();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.d24_1.x21()) {
              this.n8_1 = 3;
              continue $sm;
            }

            this.e24_1.q1c(this.d24_1.q21());
            this.n8_1 = 2;
            suspendResult = this.d24_1.z21(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n8_1 = 1;
            continue $sm;
          case 3:
            rethrowCloseCauseIfNeeded_0(this.d24_1);
            return this.e24_1.x1a();
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
    this.n24_1 = _this__u8e3s4;
    this.o24_1 = max;
  }
  protoOf($discardCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 5;
            this.p24_1 = this.o24_1;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(this.p24_1, new Long(0, 0)) > 0 && !this.n24_1.x21())) {
              this.n8_1 = 4;
              continue $sm;
            }

            if (get_availableForRead(this.n24_1) === 0) {
              this.n8_1 = 2;
              suspendResult = this.n24_1.z21(VOID, this);
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
            var tmp0 = this.p24_1;
            var b = get_remaining(this.n24_1.q21());
            var count = compare(tmp0, b) <= 0 ? tmp0 : b;
            discard_0(this.n24_1.q21(), count);
            this.p24_1 = subtract(this.p24_1, count);
            this.n8_1 = 1;
            continue $sm;
          case 4:
            return subtract(this.o24_1, this.p24_1);
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
    this.y24_1 = _this__u8e3s4;
    this.z24_1 = buffer;
    this.a25_1 = offset;
    this.b25_1 = length;
  }
  protoOf($readAvailableCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            if (this.y24_1.x21())
              return -1;
            if (this.y24_1.q21().y1a()) {
              this.n8_1 = 1;
              suspendResult = this.y24_1.z21(VOID, this);
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
            if (this.y24_1.x21())
              return -1;
            return readAvailable_0(this.y24_1.q21(), this.z24_1, this.a25_1, this.b25_1);
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
    this.k25_1 = _this__u8e3s4;
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
            suspendResult = readBuffer(this.k25_1, this);
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
    this.t25_1 = _this__u8e3s4;
    this.u25_1 = channel;
    this.v25_1 = limit;
  }
  protoOf($copyToCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 12;
            this.w25_1 = this.v25_1;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 8;
            this.o8_1 = 7;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            if (!(!this.t25_1.x21() && compare(this.w25_1, new Long(0, 0)) > 0)) {
              this.n8_1 = 6;
              continue $sm;
            }

            if (this.t25_1.q21().y1a()) {
              this.n8_1 = 3;
              suspendResult = this.t25_1.z21(VOID, this);
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
            var tmp0 = this.w25_1;
            var b = get_remaining(this.t25_1.q21());
            var count = compare(tmp0, b) <= 0 ? tmp0 : b;
            this.t25_1.q21().a1c(this.u25_1.t21(), count);
            this.w25_1 = subtract(this.w25_1, count);
            this.n8_1 = 5;
            suspendResult = this.u25_1.o21(this);
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
              this.t25_1.b22(cause);
              close_0(this.u25_1, cause);
              throw cause;
            } else {
              throw this.q8_1;
            }

          case 8:
            this.o8_1 = 12;
            this.x25_1 = this.q8_1;
            this.n8_1 = 9;
            suspendResult = this.u25_1.o21(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            throw this.x25_1;
          case 10:
            this.o8_1 = 12;
            this.n8_1 = 11;
            suspendResult = this.u25_1.o21(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            return subtract(this.v25_1, this.w25_1);
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
    this.g26_1 = _this__u8e3s4;
    this.h26_1 = byteString;
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
            suspendResult = peek(this.g26_1, this.h26_1.e1(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (equals(ARGUMENT, this.h26_1)) {
              this.n8_1 = 3;
              suspendResult = discard(this.g26_1, fromInt(this.h26_1.e1()), this);
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
    this.q26_1 = _this__u8e3s4;
    this.r26_1 = packet;
  }
  protoOf($readPacketCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 6;
            this.s26_1 = new Buffer();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(this.s26_1.e1(), fromInt(this.r26_1)) < 0)) {
              this.n8_1 = 5;
              continue $sm;
            }

            if (this.q26_1.q21().y1a()) {
              this.n8_1 = 2;
              suspendResult = this.q26_1.z21(VOID, this);
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
            if (this.q26_1.x21()) {
              this.n8_1 = 5;
              continue $sm;
            } else {
              this.n8_1 = 4;
              continue $sm;
            }

          case 4:
            if (compare(get_remaining(this.q26_1.q21()), subtract(numberToLong(this.r26_1), this.s26_1.e1())) > 0) {
              this.q26_1.q21().a1c(this.s26_1, subtract(numberToLong(this.r26_1), this.s26_1.e1()));
            } else {
              this.q26_1.q21().b1c(this.s26_1);
            }

            this.n8_1 = 1;
            continue $sm;
          case 5:
            if (compare(this.s26_1.e1(), fromInt(this.r26_1)) < 0) {
              throw EOFException_init_$Create$('Not enough data available, required ' + this.r26_1 + ' bytes but only ' + this.s26_1.e1().toString() + ' available');
            }

            return this.s26_1;
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
  function $readBufferCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b27_1 = _this__u8e3s4;
  }
  protoOf($readBufferCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            this.c27_1 = new Buffer();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.b27_1.x21()) {
              this.n8_1 = 3;
              continue $sm;
            }

            this.c27_1.q1c(this.b27_1.q21());
            this.n8_1 = 2;
            suspendResult = this.b27_1.z21(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n8_1 = 1;
            continue $sm;
          case 3:
            var tmp0_safe_receiver = this.b27_1.v21();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            return this.c27_1;
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
    this.l27_1 = _this__u8e3s4;
    this.m27_1 = count;
  }
  protoOf($peekCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            if (this.l27_1.x21())
              return null;
            this.n8_1 = 1;
            suspendResult = this.l27_1.y21(this.m27_1, this);
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
            return readByteString(this.l27_1.q21().c1c(), this.m27_1);
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
  function $internalReadLineToCOROUTINE$(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v27_1 = _this__u8e3s4;
    this.w27_1 = out;
    this.x27_1 = limit;
    this.y27_1 = lenientLineEnding;
    this.z27_1 = throwOnIncompleteLine;
  }
  protoOf($internalReadLineToCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 18;
            this.b28_1 = this.v27_1.q21();
            if (this.b28_1.y1a()) {
              this.n8_1 = 1;
              suspendResult = this.v27_1.z21(VOID, this);
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
            if (this.v27_1.x21())
              return new Long(-1, -1);
            this.a28_1 = {_v: new Long(0, 0)};
            this.n8_1 = 3;
            continue $sm;
          case 3:
            if (!(compare(this.a28_1._v, this.x27_1) < 0 && !this.v27_1.x21())) {
              this.n8_1 = 10;
              continue $sm;
            }

            var limitLeft = subtract(this.x27_1, this.a28_1._v);
            var lfIndex = indexOf(this.b28_1, 10, VOID, limitLeft);
            var crIndex = internalReadLineTo$scanForSoleCr(this.b28_1, this.y27_1, lfIndex, limitLeft);
            if (compare(crIndex, new Long(0, 0)) >= 0) {
              internalReadLineTo$transferString(this.b28_1, this.w27_1, this.a28_1, crIndex);
              discard_0(this.b28_1, new Long(1, 0));
              return this.a28_1._v;
            }

            if (equalsLong(lfIndex, new Long(0, 0))) {
              discard_0(this.b28_1, new Long(1, 0));
              return this.a28_1._v;
            }

            if (compare(lfIndex, new Long(0, 0)) > 0) {
              var tmp_0;
              var tmp_1 = this.b28_1.x1a();
              if (tmp_1.t1b(subtract(lfIndex, fromInt(1))) === 13) {
                tmp_0 = new Long(1, 0);
              } else {
                tmp_0 = new Long(0, 0);
              }
              var isCrlf = tmp_0;
              internalReadLineTo$transferString(this.b28_1, this.w27_1, this.a28_1, subtract(lfIndex, isCrlf));
              discard_0(this.b28_1, add(numberToLong(1), isCrlf));
              return this.a28_1._v;
            }

            var b = get_remaining(this.b28_1);
            var count = compare(limitLeft, b) <= 0 ? limitLeft : b;
            var tmp_2 = this.b28_1.x1a();
            if (tmp_2.t1b(subtract(count, fromInt(1))) === 13) {
              internalReadLineTo$transferString(this.b28_1, this.w27_1, this.a28_1, subtract(count, fromInt(1)));
              this.n8_1 = 4;
              suspendResult = internalReadLineTo$discardCrlfOrCr(this.b28_1, this.v27_1, this.y27_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              internalReadLineTo$transferString(this.b28_1, this.w27_1, this.a28_1, count);
              this.n8_1 = 6;
              continue $sm;
            }

          case 4:
            if (suspendResult) {
              return this.a28_1._v;
            } else {
              this.n8_1 = 5;
              continue $sm;
            }

          case 5:
            internalReadLineTo$transferString(this.b28_1, this.w27_1, this.a28_1, new Long(1, 0));
            this.n8_1 = 6;
            continue $sm;
          case 6:
            if (compare(this.a28_1._v, this.x27_1) < 0 && equalsLong(get_remaining(this.b28_1), new Long(0, 0))) {
              this.n8_1 = 7;
              suspendResult = this.v27_1.z21(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.d28_1 = false;
              this.n8_1 = 8;
              continue $sm;
            }

          case 7:
            this.d28_1 = !suspendResult;
            this.n8_1 = 8;
            continue $sm;
          case 8:
            if (this.d28_1) {
              this.n8_1 = 10;
              continue $sm;
            } else {
              this.n8_1 = 9;
              continue $sm;
            }

          case 9:
            this.n8_1 = 3;
            continue $sm;
          case 10:
            if (equalsLong(this.a28_1._v, new Long(0, 0)) && this.v27_1.x21())
              return new Long(-1, -1);
            if (!(compare(this.a28_1._v, this.x27_1) <= 0)) {
              var message = 'Consumed bytes exceed the limit: ' + this.a28_1._v.toString() + ' > ' + this.x27_1.toString() + ". It's an implementation bug, please report it.";
              throw IllegalStateException_init_$Create$(toString_1(message));
            }

            if (equalsLong(this.a28_1._v, this.x27_1)) {
              if (equalsLong(this.x27_1, new Long(-1, 2147483647)))
                throw new TooLongLineException('Max line length exceeded');
              if (equalsLong(get_remaining(this.b28_1), new Long(0, 0))) {
                this.n8_1 = 12;
                suspendResult = this.v27_1.z21(VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.c28_1 = false;
                this.n8_1 = 13;
                continue $sm;
              }
            } else {
              this.n8_1 = 11;
              continue $sm;
            }

          case 11:
            if (this.z27_1) {
              throwEndOfStreamException(this.a28_1._v);
            }

            return this.a28_1._v;
          case 12:
            this.c28_1 = !suspendResult;
            this.n8_1 = 13;
            continue $sm;
          case 13:
            if (this.c28_1) {
              throwEndOfStreamException(this.a28_1._v);
            } else {
              this.n8_1 = 14;
              continue $sm;
            }

            break;
          case 14:
            var tmp0_subject = this.b28_1.x1a().t1b(new Long(0, 0));
            if (tmp0_subject === 10) {
              discard_0(this.b28_1, new Long(1, 0));
              return this.a28_1._v;
            } else {
              if (tmp0_subject === 13) {
                this.n8_1 = 15;
                suspendResult = internalReadLineTo$discardCrlfOrCr(this.b28_1, this.v27_1, this.y27_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.n8_1 = 17;
                continue $sm;
              }
            }

          case 15:
            if (suspendResult) {
              return this.a28_1._v;
            } else {
              this.n8_1 = 16;
              continue $sm;
            }

          case 16:
            this.n8_1 = 17;
            continue $sm;
          case 17:
            throwTooLongLineException(this.x27_1);
            break;
          case 18:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 18) {
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
    this.m28_1 = _this__u8e3s4;
    this.n28_1 = channel;
  }
  protoOf($copyToCOROUTINE$_0).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 11;
            this.o28_1 = new Long(0, 0);
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 7;
            this.o8_1 = 6;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            if (!!this.m28_1.x21()) {
              this.n8_1 = 5;
              continue $sm;
            }

            this.o28_1 = add(this.o28_1, this.m28_1.q21().b1c(this.n28_1.t21()));
            this.n8_1 = 3;
            suspendResult = this.n28_1.o21(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.n8_1 = 4;
            suspendResult = this.m28_1.z21(VOID, this);
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
              this.m28_1.b22(cause);
              close_0(this.n28_1, cause);
              throw cause;
            } else {
              throw this.q8_1;
            }

          case 7:
            this.o8_1 = 11;
            this.p28_1 = this.q8_1;
            this.n8_1 = 8;
            suspendResult = this.n28_1.o21(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            throw this.p28_1;
          case 9:
            this.o8_1 = 11;
            this.n8_1 = 10;
            suspendResult = this.n28_1.o21(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            return this.o28_1;
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
  function $internalReadLineTo$discardCrlfOrCrCOROUTINE$(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y28_1 = _this__u8e3s4;
    this.z28_1 = $this_internalReadLineTo;
    this.a29_1 = $lenientLineEnding;
  }
  protoOf($internalReadLineTo$discardCrlfOrCrCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 5;
            if (compare(get_remaining(this.y28_1), new Long(2, 0)) >= 0) {
              this.c29_1 = true;
              this.n8_1 = 2;
              continue $sm;
            } else {
              this.n8_1 = 1;
              suspendResult = this.z28_1.y21(2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.c29_1 = suspendResult;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            if (this.c29_1) {
              this.b29_1 = this.y28_1.x1a().t1b(new Long(1, 0)) === 10;
              this.n8_1 = 3;
              continue $sm;
            } else {
              this.b29_1 = false;
              this.n8_1 = 3;
              continue $sm;
            }

          case 3:
            if (this.b29_1) {
              discard_0(this.y28_1, new Long(2, 0));
              return true;
            } else {
              this.n8_1 = 4;
              continue $sm;
            }

          case 4:
            if (this.a29_1) {
              discard_0(this.y28_1, new Long(1, 0));
              return true;
            }

            return false;
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
    this.l29_1 = _this__u8e3s4;
  }
  protoOf($flushIfNeededCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            rethrowCloseCauseIfNeeded_1(this.l29_1);
            if (this.l29_1.p21() || get_size(this.l29_1.t21()) >= 1048576) {
              this.n8_1 = 1;
              suspendResult = this.l29_1.o21(this);
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
    this.m29_1 = channel;
    this.n29_1 = job;
  }
  protoOf(WriterJob).q1k = function () {
    return this.n29_1;
  };
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    autoFlush = autoFlush === VOID ? false : autoFlush;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return writer_0(_this__u8e3s4, coroutineContext, new ByteChannel(), block);
  }
  function WriterScope(channel, coroutineContext) {
    this.o29_1 = channel;
    this.p29_1 = coroutineContext;
  }
  protoOf(WriterScope).j1e = function () {
    return this.p29_1;
  };
  function writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? value.length : endIndex;
    _this__u8e3s4.t21().h1c(value, startIndex, endIndex);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function close_0(_this__u8e3s4, cause) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    if (cause == null) {
      fireAndForget(ByteWriteChannel$flushAndClose$ref_0(_this__u8e3s4));
    } else {
      _this__u8e3s4.b22(cause);
    }
  }
  function invokeOnCompletion(_this__u8e3s4, block) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return _this__u8e3s4.q1k().l1f(block);
  }
  function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    // Inline function 'kotlin.apply' call
    var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel, null));
    this_0.l1f(writer$lambda(channel));
    var job = this_0;
    return new WriterJob(channel, job);
  }
  function fireAndForget(_this__u8e3s4) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
  }
  function writeByte(_this__u8e3s4, value, $completion) {
    _this__u8e3s4.t21().r1c(value);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function writePacket(_this__u8e3s4, source, $completion) {
    var tmp = new $writePacketCOROUTINE$(_this__u8e3s4, source, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function NO_CALLBACK$1() {
    this.a2a_1 = EmptyCoroutineContext_getInstance();
  }
  protoOf(NO_CALLBACK$1).t8 = function () {
    return this.a2a_1;
  };
  protoOf(NO_CALLBACK$1).u8 = function (result) {
    return Unit_instance;
  };
  protoOf(NO_CALLBACK$1).y8 = function (result) {
    return this.u8(result);
  };
  function ByteWriteChannel$flushAndClose$ref(p0) {
    this.b2a_1 = p0;
  }
  protoOf(ByteWriteChannel$flushAndClose$ref).c2a = function ($completion) {
    return this.b2a_1.a22($completion);
  };
  protoOf(ByteWriteChannel$flushAndClose$ref).ea = function ($completion) {
    return this.c2a($completion);
  };
  function ByteWriteChannel$flushAndClose$ref_0(p0) {
    var i = new ByteWriteChannel$flushAndClose$ref(p0);
    var l = function ($completion) {
      return i.c2a($completion);
    };
    l.callableName = 'flushAndClose';
    l.$arity = 0;
    return l;
  }
  function writer$slambda($block, $channel, resultContinuation) {
    this.l2a_1 = $block;
    this.m2a_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(writer$slambda).u2a = function ($this$launch, $completion) {
    var tmp = this.v2a($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(writer$slambda).i9 = function (p1, $completion) {
    return this.u2a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(writer$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 14;
            this.q2a_1 = Job(get_job(this.n2a_1.j1e()));
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 4;
            this.o8_1 = 3;
            this.n8_1 = 2;
            suspendResult = this.l2a_1(new WriterScope(this.m2a_1, this.n2a_1.j1e().ah(this.q2a_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.q2a_1.l1l();
            var tmp_0;
            if (get_job(this.n2a_1.j1e()).f1f()) {
              this.m2a_1.b22(get_job(this.n2a_1.j1e()).i1f());
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
              cancel(this.q2a_1, 'Exception thrown while writing to channel', cause);
              this.m2a_1.b22(cause);
              this.o8_1 = 14;
              this.n8_1 = 9;
              continue $sm;
            } else {
              throw this.q8_1;
            }

          case 4:
            this.o8_1 = 14;
            this.r2a_1 = this.q8_1;
            this.n8_1 = 5;
            suspendResult = this.q2a_1.p1f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.n2a_1;
            this.o8_1 = 7;
            this.t2a_1 = Companion_instance;
            this.n8_1 = 6;
            suspendResult = this.m2a_1.a22(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_2 = this;
            this.t2a_1;
            tmp_2.s2a_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.o8_1 = 14;
            this.n8_1 = 8;
            continue $sm;
          case 7:
            this.o8_1 = 14;
            var tmp_3 = this.q8_1;
            if (tmp_3 instanceof Error) {
              var e = this.q8_1;
              var tmp_4 = this;
              tmp_4.s2a_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n8_1 = 8;
              continue $sm;
            } else {
              throw this.q8_1;
            }

          case 8:
            this.o8_1 = 14;
            throw this.r2a_1;
          case 9:
            this.o8_1 = 14;
            this.n8_1 = 10;
            suspendResult = this.q2a_1.p1f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.n2a_1;
            this.o8_1 = 12;
            this.p2a_1 = Companion_instance;
            this.n8_1 = 11;
            suspendResult = this.m2a_1.a22(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            var tmp_5 = this;
            this.p2a_1;
            tmp_5.o2a_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.o8_1 = 14;
            this.n8_1 = 13;
            continue $sm;
          case 12:
            this.o8_1 = 14;
            var tmp_6 = this.q8_1;
            if (tmp_6 instanceof Error) {
              var e_0 = this.q8_1;
              var tmp_7 = this;
              tmp_7.o2a_1 = _Result___init__impl__xyqfz8(createFailure(e_0));
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
  protoOf(writer$slambda).v2a = function ($this$launch, completion) {
    var i = new writer$slambda(this.l2a_1, this.m2a_1, completion);
    i.n2a_1 = $this$launch;
    return i;
  };
  function writer$slambda_0($block, $channel, resultContinuation) {
    var i = new writer$slambda($block, $channel, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.u2a($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function writer$lambda($channel) {
    return function (it) {
      var tmp;
      if (!(it == null) && !$channel.u21()) {
        $channel.b22(it);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function $writePacketCOROUTINE$(_this__u8e3s4, source, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y29_1 = _this__u8e3s4;
    this.z29_1 = source;
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
            if (!!this.z29_1.y1a()) {
              this.n8_1 = 3;
              continue $sm;
            }

            this.y29_1.t21().l1c(this.z29_1, get_remaining(this.z29_1));
            this.n8_1 = 2;
            suspendResult = flushIfNeeded(this.y29_1, this);
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
    this.r21_1 = origin;
  }
  protoOf(CloseToken).w2a = function (wrap) {
    var tmp0_subject = this.r21_1;
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (isInterface(tmp0_subject, CopyableThrowable)) {
        tmp = this.r21_1.u1l();
      } else {
        if (tmp0_subject instanceof CancellationException) {
          tmp = CancellationException_init_$Create$(this.r21_1.message, this.r21_1);
        } else {
          tmp = wrap(this.r21_1);
        }
      }
    }
    return tmp;
  };
  protoOf(CloseToken).w21 = function (wrap, $super) {
    var tmp;
    if (wrap === VOID) {
      tmp = ClosedByteChannelException$_init_$ref_yjp351();
    } else {
      tmp = wrap;
    }
    wrap = tmp;
    return $super === VOID ? this.w2a(wrap) : $super.w2a.call(this, wrap);
  };
  protoOf(CloseToken).s21 = function (wrap) {
    var tmp0_safe_receiver = this.w2a(wrap);
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
    var appended = $this.y2a_1.q1c($this.x2a_1.q21());
    $this.z2a_1 = add($this.z2a_1, appended);
  }
  function updateConsumed($this) {
    $this.a2b_1 = add($this.a2b_1, subtract($this.z2a_1, $this.y2a_1.e1()));
    $this.z2a_1 = $this.y2a_1.e1();
  }
  function $awaitContentCOROUTINE$_0(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j2b_1 = _this__u8e3s4;
    this.k2b_1 = min;
  }
  protoOf($awaitContentCOROUTINE$_0).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            if (compare(this.j2b_1.q21().e1(), fromInt(this.k2b_1)) >= 0) {
              return true;
            }

            this.n8_1 = 1;
            suspendResult = this.j2b_1.x2a_1.y21(this.k2b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              transferFromDelegate(this.j2b_1);
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
    this.x2a_1 = delegate;
    this.y2a_1 = new Buffer();
    this.z2a_1 = new Long(0, 0);
    this.a2b_1 = new Long(0, 0);
  }
  protoOf(CountedByteReadChannel).l2b = function () {
    updateConsumed(this);
    return this.a2b_1;
  };
  protoOf(CountedByteReadChannel).v21 = function () {
    return this.x2a_1.v21();
  };
  protoOf(CountedByteReadChannel).x21 = function () {
    return this.y2a_1.y1a() && this.x2a_1.x21();
  };
  protoOf(CountedByteReadChannel).q21 = function () {
    transferFromDelegate(this);
    return this.y2a_1;
  };
  protoOf(CountedByteReadChannel).y21 = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$_0(this, min, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(CountedByteReadChannel).b22 = function (cause) {
    this.x2a_1.b22(cause);
    this.y2a_1.h4();
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
  var LineEnding_Default_instance;
  var LineEnding_Lenient_instance;
  var LineEnding_entriesInitialized;
  function LineEnding_initEntries() {
    if (LineEnding_entriesInitialized)
      return Unit_instance;
    LineEnding_entriesInitialized = true;
    LineEnding_Default_instance = new LineEnding('Default', 0);
    LineEnding_Lenient_instance = new LineEnding('Lenient', 1);
  }
  function LineEnding(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LineEnding_Default_getInstance() {
    LineEnding_initEntries();
    return LineEnding_Default_instance;
  }
  function LineEnding_Lenient_getInstance() {
    LineEnding_initEntries();
    return LineEnding_Lenient_instance;
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
    if ($this === Companion_getInstance_1().m2b_1) {
      tmp = 'CR';
    } else if ($this === Companion_getInstance_1().n2b_1) {
      tmp = 'LF';
    } else if ($this === Companion_getInstance_1().o2b_1) {
      tmp = 'CRLF';
    } else {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = Companion_getInstance_1().q2b_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var it = element.r2b_1;
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
    this.m2b_1 = _LineEndingMode___init__impl__jo5bul(1);
    this.n2b_1 = _LineEndingMode___init__impl__jo5bul(2);
    this.o2b_1 = _LineEndingMode___init__impl__jo5bul(4);
    this.p2b_1 = _LineEndingMode___init__impl__jo5bul(7);
    this.q2b_1 = listOf([new LineEndingMode(this.m2b_1), new LineEndingMode(this.n2b_1), new LineEndingMode(this.o2b_1)]);
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
    if (!($this === other.r2b_1))
      return false;
    return true;
  }
  function LineEndingMode(mode) {
    Companion_getInstance_1();
    this.r2b_1 = mode;
  }
  protoOf(LineEndingMode).toString = function () {
    return LineEndingMode__toString_impl_j4h76r(this.r2b_1);
  };
  protoOf(LineEndingMode).hashCode = function () {
    return LineEndingMode__hashCode_impl_2mopm4(this.r2b_1);
  };
  protoOf(LineEndingMode).equals = function (other) {
    return LineEndingMode__equals_impl_qyr4nk(this.r2b_1, other);
  };
  function SourceByteReadChannel(source) {
    this.s2b_1 = source;
    this.t2b_1 = null;
  }
  protoOf(SourceByteReadChannel).v21 = function () {
    var tmp0_safe_receiver = this.t2b_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w21();
  };
  protoOf(SourceByteReadChannel).x21 = function () {
    return this.s2b_1.y1a();
  };
  protoOf(SourceByteReadChannel).q21 = function () {
    var tmp0_safe_receiver = this.v21();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.s2b_1.x1a();
  };
  protoOf(SourceByteReadChannel).y21 = function (min, $completion) {
    var tmp0_safe_receiver = this.v21();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.s2b_1.a1b(fromInt(min));
  };
  protoOf(SourceByteReadChannel).b22 = function (cause) {
    if (!(this.t2b_1 == null))
      return Unit_instance;
    this.s2b_1.h4();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.t2b_1 = new CloseToken(IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  };
  function decode(_this__u8e3s4, input, max) {
    max = max === VOID ? 2147483647 : max;
    var tmp0 = fromInt(max);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = input.x1a().e1();
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
    return !_this__u8e3s4.y1a();
  }
  function readBytes(_this__u8e3s4, count) {
    count = count === VOID ? convertToInt(_this__u8e3s4.e1()) : count;
    return readByteArray(_this__u8e3s4, count);
  }
  function writeFully_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    _this__u8e3s4.h1c(buffer, offset, offset + length | 0);
  }
  function BytePacketBuilder() {
    return new Buffer();
  }
  function build(_this__u8e3s4) {
    return _this__u8e3s4.x1a();
  }
  function get_size(_this__u8e3s4) {
    return convertToInt(_this__u8e3s4.x1a().e1());
  }
  var ByteReadPacketEmpty;
  function get_remaining(_this__u8e3s4) {
    _init_properties_ByteReadPacket_kt__28475y();
    return _this__u8e3s4.x1a().e1();
  }
  function takeWhile(_this__u8e3s4, block) {
    _init_properties_ByteReadPacket_kt__28475y();
    while (!_this__u8e3s4.y1a() && block(_this__u8e3s4.x1a())) {
    }
  }
  function discard_0(_this__u8e3s4, count) {
    count = count === VOID ? new Long(-1, 2147483647) : count;
    _init_properties_ByteReadPacket_kt__28475y();
    _this__u8e3s4.a1b(count);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(_this__u8e3s4);
    var countToDiscard = compare(count, b) <= 0 ? count : b;
    _this__u8e3s4.x1a().v1b(countToDiscard);
    return countToDiscard;
  }
  function ByteReadPacket(array, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? array.length : length;
    _init_properties_ByteReadPacket_kt__28475y();
    // Inline function 'kotlin.apply' call
    var this_0 = new Buffer();
    this_0.h1c(array, offset, offset + length | 0);
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
    var result = _this__u8e3s4.w1b(buffer, offset, offset + length | 0);
    return result === -1 ? 0 : result;
  }
  function readText_0(_this__u8e3s4, charset, max) {
    charset = charset === VOID ? Charsets_getInstance().u2b_1 : charset;
    max = max === VOID ? 2147483647 : max;
    if (charset.equals(Charsets_getInstance().u2b_1)) {
      if (max === 2147483647)
        return readString_0(_this__u8e3s4);
      var tmp0 = _this__u8e3s4.x1a().e1();
      // Inline function 'kotlin.math.min' call
      var b = fromInt(max);
      var count = compare(tmp0, b) <= 0 ? tmp0 : b;
      return readString(_this__u8e3s4, count);
    }
    return decode(charset.x2b(), _this__u8e3s4, max);
  }
  function toByteArray_0(_this__u8e3s4, charset) {
    charset = charset === VOID ? Charsets_getInstance().u2b_1 : charset;
    if (charset.equals(Charsets_getInstance().u2b_1))
      return encodeToByteArray(_this__u8e3s4, VOID, VOID, true);
    return encodeToByteArray_0(charset.y2b(), _this__u8e3s4, 0, _this__u8e3s4.length);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
    charset = charset === VOID ? Charsets_getInstance().u2b_1 : charset;
    if (charset === Charsets_getInstance().u2b_1) {
      return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
    }
    encodeToImpl(charset.y2b(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function get_ByteArrayPool() {
    _init_properties_ByteArrayPool_kt__kfi3uj();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  protoOf(ByteArrayPool$1).c2c = function () {
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
  protoOf(NoPoolImpl).k2c = function (instance) {
    return Unit_instance;
  };
  protoOf(NoPoolImpl).f1i = function () {
    return Unit_instance;
  };
  function Companion_2() {
  }
  protoOf(Companion_2).l2c = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().u2b_1;
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
      return Charsets_getInstance().v2b_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  var Companion_instance_3;
  function Companion_getInstance_2() {
    return Companion_instance_3;
  }
  function Charset(_name) {
    this.w2b_1 = _name;
  }
  protoOf(Charset).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.w2b_1 === other.w2b_1;
  };
  protoOf(Charset).hashCode = function () {
    return getStringHashCode(this.w2b_1);
  };
  protoOf(Charset).toString = function () {
    return this.w2b_1;
  };
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.w2b_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.u2b_1 = new CharsetImpl('UTF-8');
    this.v2b_1 = new CharsetImpl('ISO-8859-1');
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
    this.m2c_1 = _charset;
  }
  function forName(_this__u8e3s4, name) {
    return Companion_instance_3.l2c(name);
  }
  function CharsetEncoder(_charset) {
    this.n2c_1 = _charset;
  }
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
    var tmp0 = input.x1a().e1();
    // Inline function 'kotlin.comparisons.minOf' call
    var b = fromInt(max);
    var count = compare(tmp0, b) <= 0 ? tmp0 : b;
    var array = readByteArray(input, convertToInt(count));
    var tmp;
    try {
      // Inline function 'org.khronos.webgl.toInt8Array' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = decoder.o2c(array);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        var tmp0_elvis_lhs = cause.message;
        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
      } else {
        throw $p;
      }
    }
    var result = tmp;
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
    if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().v2b_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().u2b_1)) {
      var message_0 = 'Only UTF-8 encoding is supported in JS';
      throw IllegalArgumentException_init_$Create$(toString_1(message_0));
    }
    var encoder = new TextEncoder();
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
    var result = encoder.encode(tmp$ret$5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    dst.k1c(result);
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
  protoOf(CharsetImpl).y2b = function () {
    return new CharsetEncoderImpl(this);
  };
  protoOf(CharsetImpl).x2b = function () {
    return new CharsetDecoderImpl(this);
  };
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.m2c_1;
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.n2c_1;
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
    this.r2c_1 = charset;
  }
  protoOf(CharsetEncoderImpl).toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.r2c_1.toString() + ')';
  };
  protoOf(CharsetEncoderImpl).hashCode = function () {
    return this.r2c_1.hashCode();
  };
  protoOf(CharsetEncoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    if (!this.r2c_1.equals(other.r2c_1))
      return false;
    return true;
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.t2c_1 = charset;
  }
  protoOf(CharsetDecoderImpl).toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.t2c_1.toString() + ')';
  };
  protoOf(CharsetDecoderImpl).hashCode = function () {
    return this.t2c_1.hashCode();
  };
  protoOf(CharsetDecoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    if (!this.t2c_1.equals(other.t2c_1))
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
    this.u2c_1 = $this_toKtor;
  }
  protoOf(toKtor$1).o2c = function (buffer) {
    return this.u2c_1.decode(buffer);
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
    this.v2c_1 = fatal;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString_1(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    if (!get_ENCODING_ALIASES().j2(requestedEncoding)) {
      var message = encoding + ' is not supported.';
      throw IllegalStateException_init_$Create$(toString_1(message));
    }
  }
  protoOf(TextDecoderFallback).o2c = function (buffer) {
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
          if (!!this.v2c_1) {
            var message = 'Invalid character: ' + point;
            throw IllegalStateException_init_$Create$(toString_1(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.r1c(toByte(point >> 8));
        }
        builder.r1c(toByte(point & 255));
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
    return Dispatchers_getInstance().i1p_1;
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
        dst.r1c(toByte(character));
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
    this.d2c_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.d2c_1;
    tmp.e2c_1 = Array(size);
    this.f2c_1 = 0;
  }
  protoOf(DefaultPool).g2c = function (instance) {
  };
  protoOf(DefaultPool).h2c = function (instance) {
    return instance;
  };
  protoOf(DefaultPool).i2c = function (instance) {
  };
  protoOf(DefaultPool).j2c = function () {
    if (this.f2c_1 === 0)
      return this.c2c();
    this.f2c_1 = this.f2c_1 - 1 | 0;
    var idx = this.f2c_1;
    var tmp = this.e2c_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.e2c_1[idx] = null;
    return this.h2c(instance);
  };
  protoOf(DefaultPool).k2c = function (instance) {
    this.i2c(instance);
    if (this.f2c_1 === this.d2c_1) {
      this.g2c(instance);
    } else {
      var _unary__edvuaz = this.f2c_1;
      this.f2c_1 = _unary__edvuaz + 1 | 0;
      this.e2c_1[_unary__edvuaz] = instance;
    }
  };
  protoOf(DefaultPool).f1i = function () {
    var inductionVariable = 0;
    var last = this.f2c_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.e2c_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.e2c_1[i] = null;
        this.g2c(instance);
      }
       while (inductionVariable < last);
    this.f2c_1 = 0;
  };
  //region block: post-declaration
  protoOf(Read).t1z = resume;
  protoOf(Read).u1z = resume_0;
  protoOf(Write).t1z = resume;
  protoOf(Write).u1z = resume_0;
  protoOf(ByteChannel).z21 = awaitContent$default;
  protoOf(ByteReadChannel$Companion$Empty$1).z21 = awaitContent$default;
  protoOf(CountedByteReadChannel).z21 = awaitContent$default;
  protoOf(SourceByteReadChannel).z21 = awaitContent$default;
  protoOf(DefaultPool).h4 = close;
  protoOf(NoPoolImpl).h4 = close;
  //endregion
  //region block: init
  Empty_instance = new Empty();
  Companion_instance_3 = new Companion_2();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Charsets_getInstance;
  _.$_$.b = Companion_getInstance_0;
  _.$_$.c = Companion_getInstance_1;
  _.$_$.d = copyTo;
  _.$_$.e = copyTo_0;
  _.$_$.f = readAvailable;
  _.$_$.g = readLineStrictTo;
  _.$_$.h = readPacket;
  _.$_$.i = readRemaining;
  _.$_$.j = readUntil;
  _.$_$.k = skipIfFound;
  _.$_$.l = toByteArray;
  _.$_$.m = writeFully;
  _.$_$.n = writePacket;
  _.$_$.o = LineEndingMode__plus_impl_ttpz2j;
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
  _.$_$.a1 = get_size;
  _.$_$.b1 = takeWhile;
  _.$_$.c1 = toByteArray_0;
  _.$_$.d1 = writeFully_0;
  _.$_$.e1 = writeText;
  _.$_$.f1 = get_ByteArrayPool;
  _.$_$.g1 = DefaultPool;
  _.$_$.h1 = NoPoolImpl;
  _.$_$.i1 = ByteChannel;
  _.$_$.j1 = ByteReadChannel;
  _.$_$.k1 = ByteReadChannel_1;
  _.$_$.l1 = ClosedByteChannelException;
  _.$_$.m1 = WriterScope;
  _.$_$.n1 = cancel_0;
  _.$_$.o1 = close_0;
  _.$_$.p1 = counted;
  _.$_$.q1 = invokeOnCompletion;
  _.$_$.r1 = ioDispatcher;
  _.$_$.s1 = readText;
  _.$_$.t1 = writer;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-io.js.map
