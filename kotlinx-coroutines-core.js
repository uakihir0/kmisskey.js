(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    globalThis['kotlinx-coroutines-core'] = factory(typeof globalThis['kotlinx-coroutines-core'] === 'undefined' ? {} : globalThis['kotlinx-coroutines-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.v4;
  var protoOf = kotlin_kotlin.$_$.ob;
  var THROW_CCE = kotlin_kotlin.$_$.mf;
  var Continuation = kotlin_kotlin.$_$.p8;
  var initMetadataForClass = kotlin_kotlin.$_$.oa;
  var VOID = kotlin_kotlin.$_$.b;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.b4;
  var Key_instance = kotlin_kotlin.$_$.a4;
  var equals = kotlin_kotlin.$_$.ia;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.g8;
  var toString = kotlin_kotlin.$_$.rb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var intercepted = kotlin_kotlin.$_$.h8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.e8;
  var CoroutineImpl = kotlin_kotlin.$_$.v8;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.qa;
  var initMetadataForInterface = kotlin_kotlin.$_$.sa;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var isInterface = kotlin_kotlin.$_$.db;
  var toString_0 = kotlin_kotlin.$_$.ng;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var initMetadataForObject = kotlin_kotlin.$_$.ua;
  var hashCode = kotlin_kotlin.$_$.na;
  var Companion_instance = kotlin_kotlin.$_$.q4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m2;
  var createFailure = kotlin_kotlin.$_$.cg;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.v;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.n2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.p2;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.l8;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.k8;
  var get = kotlin_kotlin.$_$.m8;
  var minusKey = kotlin_kotlin.$_$.n8;
  var ContinuationInterceptor = kotlin_kotlin.$_$.o8;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var addSuppressed = kotlin_kotlin.$_$.yf;
  var getStringHashCode = kotlin_kotlin.$_$.ma;
  var Enum = kotlin_kotlin.$_$.cf;
  var startCoroutine = kotlin_kotlin.$_$.w8;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.kg;
  var Long = kotlin_kotlin.$_$.hf;
  var compare = kotlin_kotlin.$_$.d9;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.g;
  var add = kotlin_kotlin.$_$.a9;
  var subtract = kotlin_kotlin.$_$.t9;
  var RuntimeException = kotlin_kotlin.$_$.lf;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.z1;
  var captureStack = kotlin_kotlin.$_$.z9;
  var Error_0 = kotlin_kotlin.$_$.df;
  var Error_init_$Init$ = kotlin_kotlin.$_$.c1;
  var Element = kotlin_kotlin.$_$.t8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.y8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var CancellationException = kotlin_kotlin.$_$.d8;
  var ArrayList = kotlin_kotlin.$_$.w4;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.r1;
  var plus = kotlin_kotlin.$_$.u8;
  var get_0 = kotlin_kotlin.$_$.r8;
  var fold = kotlin_kotlin.$_$.q8;
  var minusKey_0 = kotlin_kotlin.$_$.s8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.b1;
  var anyToString = kotlin_kotlin.$_$.w9;
  var UnsupportedOperationException = kotlin_kotlin.$_$.xf;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.dg;
  var fromInt = kotlin_kotlin.$_$.j9;
  var multiply = kotlin_kotlin.$_$.o9;
  var divide = kotlin_kotlin.$_$.h9;
  var modulo = kotlin_kotlin.$_$.n9;
  var convertToInt = kotlin_kotlin.$_$.f9;
  var equalsLong = kotlin_kotlin.$_$.i9;
  var bitwiseAnd = kotlin_kotlin.$_$.b9;
  var shiftRight = kotlin_kotlin.$_$.s9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var listOf = kotlin_kotlin.$_$.a7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var compareTo = kotlin_kotlin.$_$.ga;
  var last = kotlin_kotlin.$_$.id;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e2;
  var shiftLeft = kotlin_kotlin.$_$.r9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.pa;
  var NoSuchElementException = kotlin_kotlin.$_$.if;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.u1;
  var IllegalStateException = kotlin_kotlin.$_$.gf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.o1;
  var getKClass = kotlin_kotlin.$_$.gc;
  var Unit = kotlin_kotlin.$_$.wf;
  var Exception = kotlin_kotlin.$_$.ef;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.h1;
  var defineProp = kotlin_kotlin.$_$.ha;
  var toLongOrNull = kotlin_kotlin.$_$.he;
  var createCoroutineUnintercepted_0 = kotlin_kotlin.$_$.f8;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.j8;
  var plus_0 = kotlin_kotlin.$_$.h7;
  var KtList = kotlin_kotlin.$_$.c5;
  var listOf_0 = kotlin_kotlin.$_$.z6;
  var getKClassFromExpression = kotlin_kotlin.$_$.fc;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.g1;
  var removeFirstOrNull = kotlin_kotlin.$_$.i7;
  var KtMutableList = kotlin_kotlin.$_$.g5;
  var coerceIn = kotlin_kotlin.$_$.yb;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.x;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.w;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.y1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.v1e(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.v1e.call(this, cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.p1e(onCancelling, invokeImmediately, handler) : $super.p1e.call(this, onCancelling, invokeImmediately, handler);
  }
  initMetadataForInterface(Job, 'Job', VOID, VOID, [Element], [0]);
  initMetadataForInterface(ParentJob, 'ParentJob', VOID, VOID, [Job], [0]);
  initMetadataForClass(JobSupport, 'JobSupport', VOID, VOID, [Job, ParentJob], [0]);
  initMetadataForInterface(CoroutineScope, 'CoroutineScope');
  initMetadataForClass(AbstractCoroutine, 'AbstractCoroutine', VOID, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], [0]);
  initMetadataForClass(StandaloneCoroutine, 'StandaloneCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', VOID, StandaloneCoroutine, VOID, [0]);
  initMetadataForClass(ScopeCoroutine, 'ScopeCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(DispatchedCoroutine, 'DispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForCoroutine($awaitCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DeferredCoroutine, 'DeferredCoroutine', VOID, AbstractCoroutine, [AbstractCoroutine, Job], [0]);
  initMetadataForClass(LazyDeferredCoroutine, 'LazyDeferredCoroutine', VOID, DeferredCoroutine, VOID, [0]);
  initMetadataForInterface(CancellableContinuation, 'CancellableContinuation', VOID, VOID, [Continuation]);
  initMetadataForInterface(NotCompleted, 'NotCompleted');
  initMetadataForInterface(CancelHandler, 'CancelHandler', VOID, VOID, [NotCompleted]);
  initMetadataForClass(DisposeOnCancel, 'DisposeOnCancel', VOID, VOID, [CancelHandler]);
  initMetadataForClass(UserSupplied, 'UserSupplied', VOID, VOID, [CancelHandler]);
  initMetadataForInterface(Runnable, 'Runnable');
  initMetadataForClass(SchedulerTask, 'SchedulerTask', VOID, VOID, [Runnable]);
  initMetadataForClass(DispatchedTask, 'DispatchedTask', VOID, SchedulerTask);
  initMetadataForInterface(Waiter, 'Waiter');
  initMetadataForClass(CancellableContinuationImpl, 'CancellableContinuationImpl', VOID, DispatchedTask, [DispatchedTask, CancellableContinuation, Waiter]);
  initMetadataForObject(Active, 'Active', VOID, VOID, [NotCompleted]);
  initMetadataForClass(CompletedContinuation, 'CompletedContinuation');
  initMetadataForClass(LockFreeLinkedListNode, 'LockFreeLinkedListNode', LockFreeLinkedListNode);
  initMetadataForInterface(Incomplete, 'Incomplete');
  initMetadataForClass(JobNode, 'JobNode', VOID, LockFreeLinkedListNode, [LockFreeLinkedListNode, Incomplete]);
  initMetadataForClass(ChildContinuation, 'ChildContinuation', VOID, JobNode);
  initMetadataForCoroutine($awaitCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(CompletableDeferredImpl, 'CompletableDeferredImpl', VOID, JobSupport, [JobSupport, Job], [0]);
  initMetadataForInterface(CompletableJob, 'CompletableJob', VOID, VOID, [Job], [0]);
  initMetadataForClass(CompletedExceptionally, 'CompletedExceptionally');
  initMetadataForClass(CancelledContinuation, 'CancelledContinuation', VOID, CompletedExceptionally);
  initMetadataForObject(Key, 'Key', VOID, AbstractCoroutineContextKey);
  initMetadataForClass(CoroutineDispatcher, 'CoroutineDispatcher', VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  initMetadataForObject(Key_0, 'Key');
  initMetadataForObject(Key_1, 'Key');
  initMetadataForClass(CoroutineName, 'CoroutineName', VOID, AbstractCoroutineContextElement);
  initMetadataForObject(GlobalScope, 'GlobalScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(CoroutineStart, 'CoroutineStart', VOID, Enum);
  initMetadataForInterface(CopyableThrowable, 'CopyableThrowable');
  initMetadataForInterface(Delay, 'Delay', VOID, VOID, VOID, [1]);
  initMetadataForClass(EventLoop, 'EventLoop', VOID, CoroutineDispatcher);
  initMetadataForObject(ThreadLocalEventLoop, 'ThreadLocalEventLoop');
  initMetadataForClass(CompletionHandlerException, 'CompletionHandlerException', VOID, RuntimeException);
  initMetadataForClass(CoroutinesInternalError, 'CoroutinesInternalError', VOID, Error_0);
  initMetadataForObject(Key_2, 'Key');
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle');
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(Finishing, 'Finishing', VOID, SynchronizedObject, [SynchronizedObject, Incomplete]);
  initMetadataForClass(ChildCompletion, 'ChildCompletion', VOID, JobNode);
  initMetadataForClass(AwaitContinuation, 'AwaitContinuation', VOID, CancellableContinuationImpl);
  initMetadataForClass(JobImpl, 'JobImpl', VOID, JobSupport, [JobSupport, CompletableJob], [0]);
  initMetadataForClass(Empty, 'Empty', VOID, VOID, [Incomplete]);
  initMetadataForClass(LockFreeLinkedListHead, 'LockFreeLinkedListHead', LockFreeLinkedListHead, LockFreeLinkedListNode);
  initMetadataForClass(NodeList, 'NodeList', NodeList, LockFreeLinkedListHead, [LockFreeLinkedListHead, Incomplete]);
  initMetadataForClass(IncompleteStateBox, 'IncompleteStateBox');
  initMetadataForClass(InactiveNodeList, 'InactiveNodeList', VOID, VOID, [Incomplete]);
  initMetadataForClass(InvokeOnCompletion, 'InvokeOnCompletion', VOID, JobNode);
  initMetadataForClass(InvokeOnCancelling, 'InvokeOnCancelling', VOID, JobNode);
  initMetadataForClass(ResumeOnCompletion, 'ResumeOnCompletion', VOID, JobNode);
  initMetadataForClass(ChildHandleNode, 'ChildHandleNode', VOID, JobNode);
  initMetadataForClass(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', VOID, JobNode);
  initMetadataForClass(MainCoroutineDispatcher, 'MainCoroutineDispatcher', VOID, CoroutineDispatcher);
  initMetadataForClass(SupervisorJobImpl, 'SupervisorJobImpl', VOID, JobImpl, VOID, [0]);
  initMetadataForClass(TimeoutCancellationException, 'TimeoutCancellationException', VOID, CancellationException, [CancellationException, CopyableThrowable]);
  initMetadataForObject(Unconfined, 'Unconfined', VOID, CoroutineDispatcher);
  initMetadataForObject(Key_3, 'Key');
  initMetadataForClass(BufferOverflow, 'BufferOverflow', VOID, Enum);
  initMetadataForClass(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode');
  initMetadataForClass(Segment, 'Segment', VOID, ConcurrentLinkedListNode, [ConcurrentLinkedListNode, NotCompleted]);
  initMetadataForClass(ChannelSegment, 'ChannelSegment', VOID, Segment);
  initMetadataForCoroutine($hasNextCOROUTINE$, CoroutineImpl);
  initMetadataForClass(SendBroadcast, 'SendBroadcast', VOID, VOID, [Waiter]);
  initMetadataForClass(BufferedChannelIterator, 'BufferedChannelIterator', VOID, VOID, [Waiter], [0, 3]);
  initMetadataForCoroutine($sendCOROUTINE$, CoroutineImpl);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.d1t(cause) : $super.d1t.call(this, cause);
  }
  initMetadataForInterface(SendChannel, 'SendChannel', VOID, VOID, VOID, [1]);
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.v1e(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.v1e.call(this, cause);
    }
    return tmp;
  }
  initMetadataForInterface(ReceiveChannel, 'ReceiveChannel', VOID, VOID, VOID, [0]);
  initMetadataForClass(BufferedChannel, 'BufferedChannel', VOID, VOID, [SendChannel, ReceiveChannel], [1, 4, 0, 3]);
  initMetadataForClass(WaiterEB, 'WaiterEB');
  initMetadataForClass(ReceiveCatching, 'ReceiveCatching', VOID, VOID, [Waiter]);
  initMetadataForObject(Factory, 'Factory');
  initMetadataForClass(Failed, 'Failed', Failed);
  initMetadataForClass(Closed, 'Closed', VOID, Failed);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ChannelResult, 'ChannelResult');
  initMetadataForClass(ClosedReceiveChannelException, 'ClosedReceiveChannelException', VOID, NoSuchElementException);
  initMetadataForClass(ClosedSendChannelException, 'ClosedSendChannelException', VOID, IllegalStateException);
  initMetadataForClass(ChannelCoroutine, 'ChannelCoroutine', VOID, AbstractCoroutine, [AbstractCoroutine, SendChannel, ReceiveChannel], [1, 0]);
  initMetadataForClass(ConflatedBufferedChannel, 'ConflatedBufferedChannel', VOID, BufferedChannel, VOID, [1, 0]);
  initMetadataForInterface(ProducerScope, 'ProducerScope', VOID, VOID, [CoroutineScope, SendChannel], [1]);
  initMetadataForClass(ProducerCoroutine, 'ProducerCoroutine', VOID, ChannelCoroutine, [ChannelCoroutine, ProducerScope], [1, 0]);
  initMetadataForClass(SegmentOrClosed, 'SegmentOrClosed');
  initMetadataForObject(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', VOID, Exception);
  initMetadataForClass(DispatchedContinuation, 'DispatchedContinuation', VOID, DispatchedTask, [DispatchedTask, Continuation]);
  initMetadataForClass(DispatchException, 'DispatchException', VOID, Exception);
  initMetadataForClass(UndeliveredElementException, 'UndeliveredElementException', VOID, RuntimeException);
  initMetadataForClass(ContextScope, 'ContextScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForInterface(SelectInstance, 'SelectInstance');
  initMetadataForClass(ClauseData, 'ClauseData', VOID, VOID, VOID, [1]);
  initMetadataForClass(SelectImplementation, 'SelectImplementation', VOID, VOID, [CancelHandler, SelectInstance, Waiter], [0, 2]);
  initMetadataForClass(TrySelectDetailedResult, 'TrySelectDetailedResult', VOID, Enum);
  initMetadataForClass(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForObject(NodeDispatcher, 'NodeDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(MessageQueue, 'MessageQueue', VOID, VOID, [KtMutableList]);
  initMetadataForClass(ScheduledMessageQueue, 'ScheduledMessageQueue', VOID, MessageQueue);
  initMetadataForClass(WindowMessageQueue, 'WindowMessageQueue', VOID, MessageQueue);
  initMetadataForClass(UnconfinedEventLoop, 'UnconfinedEventLoop', UnconfinedEventLoop, EventLoop);
  initMetadataForObject(SetTimeoutDispatcher, 'SetTimeoutDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(ClearTimeout, 'ClearTimeout', VOID, VOID, [CancelHandler]);
  initMetadataForClass(WindowClearTimeout, 'WindowClearTimeout', VOID, ClearTimeout);
  initMetadataForClass(WindowDispatcher, 'WindowDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForClass(UndispatchedCoroutine, 'UndispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForObject(Dispatchers, 'Dispatchers');
  initMetadataForClass(JsMainDispatcher, 'JsMainDispatcher', VOID, MainCoroutineDispatcher);
  initMetadataForClass(JobCancellationException, 'JobCancellationException', VOID, CancellationException);
  initMetadataForClass(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', VOID, RuntimeException);
  initMetadataForClass(ListClosed, 'ListClosed', VOID, LockFreeLinkedListNode);
  initMetadataForClass(CommonThreadLocal, 'CommonThreadLocal', CommonThreadLocal);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.i1d(parentContext.a9(Key_instance_3));
    }
    this.l1d_1 = parentContext.eh(this);
  }
  protoOf(AbstractCoroutine).t8 = function () {
    return this.l1d_1;
  };
  protoOf(AbstractCoroutine).m1d = function () {
    return this.l1d_1;
  };
  protoOf(AbstractCoroutine).n1d = function () {
    return protoOf(JobSupport).n1d.call(this);
  };
  protoOf(AbstractCoroutine).o1d = function (value) {
  };
  protoOf(AbstractCoroutine).p1d = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).q1d = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).r1d = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.p1d(state.s1d_1, state.u1d());
    } else {
      this.o1d((state == null ? true : !(state == null)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).y8 = function (result) {
    var state = this.v1d(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.w1d(state);
  };
  protoOf(AbstractCoroutine).w1d = function (state) {
    return this.x1d(state);
  };
  protoOf(AbstractCoroutine).y1d = function (exception) {
    handleCoroutineException(this.l1d_1, exception);
  };
  protoOf(AbstractCoroutine).z1d = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.l1d_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).z1d.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).z1d.call(this);
  };
  protoOf(AbstractCoroutine).a1e = function (start, receiver, block) {
    start.d1e(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.l1f() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.a1e(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    var tmp$ret$0;
    $l$block_0: {
      var oldContext = $completion.t8();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, $completion);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.a9(Key_instance), oldContext.a9(Key_instance))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        coroutine_0.l1d_1;
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
      startCoroutineCancellable_0(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.r1f();
    }
    return tmp$ret$0;
  }
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.l1f() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.a1e(start, coroutine, block);
    return coroutine;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).i1f = function (exception) {
    handleCoroutineException(this.l1d_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.y1f_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).k1e = function () {
    startCoroutineCancellable_1(this.y1f_1, this);
  };
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.q1f_1;
    while (true) {
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.q1f_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.q1f_1;
    while (true) {
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.q1f_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this.q1f_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).x1d = function (state) {
    this.w1d(state);
  };
  protoOf(DispatchedCoroutine).w1d = function (state) {
    if (tryResume(this))
      return Unit_instance;
    resumeCancellableWith(intercepted(this.c1g_1), recoverResult(state, this.c1g_1));
  };
  protoOf(DispatchedCoroutine).r1f = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.g1e());
    if (state instanceof CompletedExceptionally)
      throw state.s1d_1;
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  function $awaitCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m1g_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.m1g_1.k1f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : !(suspendResult == null)) ? suspendResult : THROW_CCE();
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
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).q1g = function ($completion) {
    var tmp = new $awaitCOROUTINE$(this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.u1g_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).k1e = function () {
    startCoroutineCancellable_1(this.u1g_1, this);
  };
  function CancellableContinuation() {
  }
  function invokeOnCancellation(_this__u8e3s4, handler) {
    var tmp;
    if (_this__u8e3s4 instanceof CancellableContinuationImpl) {
      _this__u8e3s4.f1h(handler);
      tmp = Unit_instance;
    } else {
      throw UnsupportedOperationException_init_$Create$('third-party implementation of CancellableContinuation is not supported');
    }
    return tmp;
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    return invokeOnCancellation(_this__u8e3s4, new DisposeOnCancel(handle));
  }
  function DisposeOnCancel(handle) {
    this.g1h_1 = handle;
  }
  protoOf(DisposeOnCancel).h1h = function (cause) {
    return this.g1h_1.i1h();
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + toString(this.g1h_1) + ']';
  };
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, 1);
    }
    var tmp0_safe_receiver = delegate.p1h();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver.q1h()) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, 2);
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function UserSupplied(handler) {
    this.r1h_1 = handler;
  }
  protoOf(UserSupplied).h1h = function (cause) {
    this.r1h_1(cause);
  };
  protoOf(UserSupplied).toString = function () {
    return 'CancelHandler.UserSupplied[' + get_classSimpleName(this.r1h_1) + '@' + get_hexAddress(this) + ']';
  };
  function CancelHandler() {
  }
  function _get_parentHandle__f8dcex($this) {
    return $this.e1h_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.g1e();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.t1h_1)) {
      var tmp_0 = $this.a1h_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).s1h();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.a1h_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.u1h(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.c1h_1.kotlinx$atomicfu$value & 536870911;
    // Inline function 'kotlin.check' call
    if (!!(index === 536870911)) {
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      segment.z1h(index, cause, $this.t8());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.t8(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.c1h_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$2 = (1 << 29) + (cur & 536870911) | 0;
          if ($this.c1h_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.c1h_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$2 = (2 << 29) + (cur & 536870911) | 0;
          if ($this.c1h_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.t8().a9(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var handle = invokeOnCompletion(parent, VOID, new ChildContinuation($this));
    $this.e1h_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.d1h_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state instanceof Active) {
        if ($this.d1h_1.atomicfu$compareAndSet(state, handler))
          return Unit_instance;
      } else {
        var tmp;
        if (!(state == null) ? isInterface(state, CancelHandler) : false) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        if (tmp) {
          multipleHandlersError($this, handler, state);
        } else {
          if (state instanceof CompletedExceptionally) {
            if (!state.i1i()) {
              multipleHandlersError($this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s1d_1;
              if (isInterface(handler, CancelHandler)) {
                $this.f1i(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_instance;
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.b1i_1 == null)) {
                multipleHandlersError($this, handler, state);
              }
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              if (state.g1i()) {
                $this.f1i(handler, state.e1i_1);
                return Unit_instance;
              }
              var update = state.h1i(VOID, handler);
              if ($this.d1h_1.atomicfu$compareAndSet(state, update))
                return Unit_instance;
            } else {
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(state, handler);
              if ($this.d1h_1.atomicfu$compareAndSet(state, update_0))
                return Unit_instance;
            }
          }
        }
      }
    }
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var message = "It's prohibited to register multiple handlers, tried to register " + toString(handler) + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_instance;
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) && idempotent == null) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          tmp_1 = isInterface(state, CancelHandler);
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, isInterface(state, CancelHandler) ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.d1h_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false) {
          var update = resumedState($this, tmp0, proposedUpdate, $this.t1h_1, onCancellation, idempotent);
          if (!$this.d1h_1.atomicfu$compareAndSet(tmp0, update)) {
            break $l$block;
          }
          detachChildIfNonReusable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp0 instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) && tmp0.d1i_1 === idempotent) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var message = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function detachChildIfNonReusable($this) {
    if (!isReusable($this)) {
      $this.j1i();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.a1h_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.b1h_1 = this.a1h_1.t8();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$1 = (0 << 29) + 536870911 | 0;
    tmp.c1h_1 = atomic$int$1(tmp$ret$1);
    this.d1h_1 = atomic$ref$1(Active_instance);
    this.e1h_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).k1i = function () {
    return this.a1h_1;
  };
  protoOf(CancellableContinuationImpl).t8 = function () {
    return this.b1h_1;
  };
  protoOf(CancellableContinuationImpl).g1e = function () {
    return this.d1h_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).h1e = function () {
    var tmp = this.g1e();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).i1e = function () {
    var tmp = this.g1e();
    return tmp instanceof CancelledContinuation;
  };
  protoOf(CancellableContinuationImpl).l1i = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.h1e()) {
      handle.i1h();
      this.e1h_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).q1h = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.d1h_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.d1i_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.j1i();
      return false;
    }
    var tmp_0 = this.c1h_1;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    tmp_0.kotlinx$atomicfu$value = (0 << 29) + 536870911 | 0;
    this.d1h_1.kotlinx$atomicfu$value = Active_instance;
    return true;
  };
  protoOf(CancellableContinuationImpl).m1i = function () {
    return this.g1e();
  };
  protoOf(CancellableContinuationImpl).n1i = function (takenState, cause) {
    var this_0 = this.d1h_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state == null) ? isInterface(state, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Not completed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        if (state instanceof CompletedExceptionally)
          return Unit_instance;
        else {
          if (state instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            if (!!state.g1i()) {
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.h1i(VOID, VOID, VOID, VOID, cause);
            if (this.d1h_1.atomicfu$compareAndSet(state, update)) {
              state.o1i(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.d1h_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).p1i = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.d1h_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false))
          return false;
        var tmp;
        if (isInterface(tmp0, CancelHandler)) {
          tmp = true;
        } else {
          tmp = tmp0 instanceof Segment;
        }
        var update = new CancelledContinuation(this, cause, tmp);
        if (!this.d1h_1.atomicfu$compareAndSet(tmp0, update)) {
          break $l$block;
        }
        if (isInterface(tmp0, CancelHandler)) {
          this.f1i(tmp0, cause);
        } else {
          if (tmp0 instanceof Segment) {
            callSegmentOnCancellation(this, tmp0, cause);
          }
        }
        detachChildIfNonReusable(this);
        dispatchResume(this, this.t1h_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).q1i = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.p1i(cause);
    detachChildIfNonReusable(this);
  };
  protoOf(CancellableContinuationImpl).f1i = function (handler, cause) {
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      handler.h1h(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.t8(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).r1i = function (onCancellation, cause, value) {
    try {
      onCancellation(cause, value, this.t8());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.t8(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).s1i = function (parent) {
    return parent.l1e();
  };
  protoOf(CancellableContinuationImpl).r1f = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.t1i();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.t1i();
    }
    var state = this.g1e();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.s1d_1, this);
    if (get_isCancellableMode(this.t1h_1)) {
      var job = this.t8().a9(Key_instance_3);
      if (!(job == null) && !job.n1d()) {
        var cause = job.l1e();
        this.n1i(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.u1i(state);
  };
  protoOf(CancellableContinuationImpl).t1i = function () {
    var tmp = this.a1h_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1i(this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.j1i();
    this.p1i(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).y8 = function (result) {
    return this.w1i(toState(result, this), this.t1h_1);
  };
  protoOf(CancellableContinuationImpl).x1i = function (value, onCancellation) {
    return this.y1i(value, this.t1h_1, onCancellation);
  };
  protoOf(CancellableContinuationImpl).z1i = function (segment, index) {
    var tmp0 = this.c1h_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.index' call
        // Inline function 'kotlin.check' call
        if (!((cur & 536870911) === 536870911)) {
          var message = 'invokeOnCancellation should be called at most once';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlinx.coroutines.decision' call
        // Inline function 'kotlinx.coroutines.decisionAndIndex' call
        var upd = (cur >> 29 << 29) + index | 0;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    invokeOnCancellationImpl(this, segment);
  };
  protoOf(CancellableContinuationImpl).x1g = function (handler) {
    return invokeOnCancellation(this, new UserSupplied(handler));
  };
  protoOf(CancellableContinuationImpl).f1h = function (handler) {
    return invokeOnCancellationImpl(this, handler);
  };
  protoOf(CancellableContinuationImpl).y1i = function (proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.d1h_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false) {
          var update = resumedState(this, tmp0, proposedUpdate, resumeMode, onCancellation, null);
          if (!this.d1h_1.atomicfu$compareAndSet(tmp0, update)) {
            break $l$block;
          }
          detachChildIfNonReusable(this);
          dispatchResume(this, resumeMode);
          return Unit_instance;
        } else {
          if (tmp0 instanceof CancelledContinuation) {
            if (tmp0.d1j()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                this.r1i(onCancellation, tmp0.s1d_1, proposedUpdate);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError(this, proposedUpdate);
      }
    }
  };
  protoOf(CancellableContinuationImpl).w1i = function (proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    if ($super === VOID) {
      this.y1i(proposedUpdate, resumeMode, onCancellation);
      tmp = Unit_instance;
    } else {
      tmp = $super.y1i.call(this, proposedUpdate, resumeMode, onCancellation);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).j1i = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.i1h();
    this.e1h_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).v1g = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).w1g = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.t1h_1);
  };
  protoOf(CancellableContinuationImpl).y1g = function (_this__u8e3s4, value) {
    var tmp = this.a1h_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.k1h_1) === _this__u8e3s4) {
      tmp_0 = 4;
    } else {
      tmp_0 = this.t1h_1;
    }
    this.w1i(value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).u1i = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.a1i_1;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : !(state == null)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).e1j = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).e1j.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.a1h_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.f1j() + '(' + toDebugString(this.a1h_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).f1j = function () {
    return 'CancellableContinuation';
  };
  function NotCompleted() {
  }
  function Active() {
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    return Active_instance;
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.a1i_1 = result;
    this.b1i_1 = cancelHandler;
    this.c1i_1 = onCancellation;
    this.d1i_1 = idempotentResume;
    this.e1i_1 = cancelCause;
  }
  protoOf(CompletedContinuation).g1i = function () {
    return !(this.e1i_1 == null);
  };
  protoOf(CompletedContinuation).o1i = function (cont, cause) {
    var tmp0_safe_receiver = this.b1i_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.f1i(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.c1i_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.r1i(tmp1_safe_receiver, cause, this.a1i_1);
    }
  };
  protoOf(CompletedContinuation).i1j = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).h1i = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.a1i_1 : result;
    cancelHandler = cancelHandler === VOID ? this.b1i_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.c1i_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.d1i_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.e1i_1 : cancelCause;
    return $super === VOID ? this.i1j(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.i1j.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.a1i_1) + ', cancelHandler=' + toString_0(this.b1i_1) + ', onCancellation=' + toString_0(this.c1i_1) + ', idempotentResume=' + toString_0(this.d1i_1) + ', cancelCause=' + toString_0(this.e1i_1) + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.a1i_1 == null ? 0 : hashCode(this.a1i_1);
    result = imul(result, 31) + (this.b1i_1 == null ? 0 : hashCode(this.b1i_1)) | 0;
    result = imul(result, 31) + (this.c1i_1 == null ? 0 : hashCode(this.c1i_1)) | 0;
    result = imul(result, 31) + (this.d1i_1 == null ? 0 : hashCode(this.d1i_1)) | 0;
    result = imul(result, 31) + (this.e1i_1 == null ? 0 : hashCode(this.e1i_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.a1i_1, tmp0_other_with_cast.a1i_1))
      return false;
    if (!equals(this.b1i_1, tmp0_other_with_cast.b1i_1))
      return false;
    if (!equals(this.c1i_1, tmp0_other_with_cast.c1i_1))
      return false;
    if (!equals(this.d1i_1, tmp0_other_with_cast.d1i_1))
      return false;
    if (!equals(this.e1i_1, tmp0_other_with_cast.e1i_1))
      return false;
    return true;
  };
  function ChildContinuation(child) {
    JobNode.call(this);
    this.n1j_1 = child;
  }
  protoOf(ChildContinuation).o1j = function () {
    return true;
  };
  protoOf(ChildContinuation).h1h = function (cause) {
    this.n1j_1.q1i(this.n1j_1.s1i(this.t1j()));
  };
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (!properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred(parent) {
    parent = parent === VOID ? null : parent;
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$_0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j1k_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$_0).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.j1k_1.k1f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : !(suspendResult == null)) ? suspendResult : THROW_CCE();
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
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.i1d(parent);
  }
  protoOf(CompletableDeferredImpl).u1e = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).q1g = function ($completion) {
    var tmp = new $awaitCOROUTINE$_0(this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(CompletableDeferredImpl).m1k = function (value) {
    return this.d1f(value);
  };
  protoOf(CompletableDeferredImpl).n1k = function (exception) {
    return this.d1f(new CompletedExceptionally(exception));
  };
  function CompletableJob() {
  }
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(state.s1d_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = (state == null ? true : !(state == null)) ? state : THROW_CCE();
      tmp = _Result___init__impl__xyqfz8(value);
    }
    return tmp;
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.s1d_1 = cause;
    this.t1d_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).u1d = function () {
    return this.t1d_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).i1i = function () {
    return this.t1d_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.s1d_1.toString() + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + toString(continuation) + ' was cancelled normally') : cause, handled);
    this.c1j_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).d1j = function () {
    return this.c1j_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.getOrElse' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4) {
    // Inline function 'kotlin.getOrElse' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance_0 = this;
    var tmp = Key_instance;
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance_0;
  function Key_getInstance() {
    if (Key_instance_0 == null)
      new Key();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance();
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(CoroutineDispatcher).q1k = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).b9 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).c9 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.s1k();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function Key_0() {
  }
  var Key_instance_1;
  function Key_getInstance_0() {
    return Key_instance_1;
  }
  function handleCoroutineException(context, exception) {
    var tmp;
    if (exception instanceof DispatchException) {
      tmp = exception.t1k_1;
    } else {
      tmp = exception;
    }
    var reportException = tmp;
    try {
      var tmp0_safe_receiver = context.a9(Key_instance_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        tmp0_safe_receiver.u1k(context, reportException);
        return Unit_instance;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(reportException, t));
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, reportException);
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    var this_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    addSuppressed(this_0, originalException);
    return this_0;
  }
  function Key_1() {
  }
  var Key_instance_2;
  function Key_getInstance_1() {
    return Key_instance_2;
  }
  function CoroutineName(name) {
    AbstractCoroutineContextElement.call(this, Key_instance_2);
    this.w1k_1 = name;
  }
  protoOf(CoroutineName).toString = function () {
    return 'CoroutineName(' + this.w1k_1 + ')';
  };
  protoOf(CoroutineName).hashCode = function () {
    return getStringHashCode(this.w1k_1);
  };
  protoOf(CoroutineName).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CoroutineName))
      return false;
    var tmp0_other_with_cast = other instanceof CoroutineName ? other : THROW_CCE();
    if (!(this.w1k_1 === tmp0_other_with_cast.w1k_1))
      return false;
    return true;
  };
  function CoroutineScope() {
  }
  function GlobalScope() {
  }
  protoOf(GlobalScope).m1d = function () {
    return EmptyCoroutineContext_getInstance();
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    return GlobalScope_instance;
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.a9(Key_instance_3) == null) ? context : context.eh(Job_0()));
  }
  function cancel(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return cancel_0(_this__u8e3s4, CancellationException_0(message, cause));
  }
  function cancel_0(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.m1d().a9(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Scope cannot be cancelled because it does not have a job: ' + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.v1e(cause);
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_instance;
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).d1e = function (block, receiver, completion) {
    var tmp;
    switch (this.a1_1) {
      case 0:
        startCoroutineCancellable_0(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 1:
        tmp = Unit_instance;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).l1f = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CopyableThrowable() {
  }
  function delay(timeMillis, $completion) {
    if (compare(timeMillis, new Long(0, 0)) <= 0)
      return Unit_instance;
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.l1i();
    if (compare(timeMillis, new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.t8()).y1k(timeMillis, cancellable);
    }
    return cancellable.r1f();
  }
  function Delay() {
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.a9(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.a1l_1 = new Long(0, 0);
    this.b1l_1 = false;
    this.c1l_1 = null;
  }
  protoOf(EventLoop).d1l = function () {
    var tmp0_elvis_lhs = this.c1l_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.af();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.g1j();
    return true;
  };
  protoOf(EventLoop).e1l = function (task) {
    var tmp0_elvis_lhs = this.c1l_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      this.c1l_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.ye(task);
  };
  protoOf(EventLoop).f1l = function () {
    return compare(this.a1l_1, delta(this, true)) >= 0;
  };
  protoOf(EventLoop).g1l = function () {
    var tmp0_safe_receiver = this.c1l_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).h1l = function (unconfined) {
    this.a1l_1 = add(this.a1l_1, delta(this, unconfined));
    if (!unconfined)
      this.b1l_1 = true;
  };
  protoOf(EventLoop).i1l = function (unconfined) {
    this.a1l_1 = subtract(this.a1l_1, delta(this, unconfined));
    if (compare(this.a1l_1, new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.b1l_1) {
      this.j1l();
    }
  };
  protoOf(EventLoop).j1l = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.k1l_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).l1l = function () {
    var tmp0_elvis_lhs = this.k1l_1.n1l();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      ThreadLocalEventLoop_getInstance().k1l_1.o1l(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_2() {
  }
  var Key_instance_3;
  function Key_getInstance_2() {
    return Key_instance_3;
  }
  function Job() {
  }
  function cancel_1(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.v1e(CancellationException_0(message, cause));
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.a9(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Current context doesn't contain Job in it: " + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancel_2(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_safe_receiver = _this__u8e3s4.a9(Key_instance_3);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.v1e(cause);
    }
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function invokeOnCompletion(_this__u8e3s4, invokeImmediately, handler) {
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    var tmp;
    if (_this__u8e3s4 instanceof JobSupport) {
      tmp = _this__u8e3s4.r1e(invokeImmediately, handler);
    } else {
      var tmp_0 = handler.o1j();
      tmp = _this__u8e3s4.p1e(tmp_0, invokeImmediately, JobNode$invoke$ref(handler));
    }
    return tmp;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.a9(Key_instance_3);
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).i1h = function () {
  };
  protoOf(NonDisposableHandle).z1e = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.n1d())
      throw _this__u8e3s4.l1e();
  }
  function ParentJob() {
  }
  function JobNode$invoke$ref(p0) {
    var l = function (_this__u8e3s4) {
      p0.h1h(_this__u8e3s4);
      return Unit_instance;
    };
    l.callableName = 'invoke';
    return l;
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function JobNode() {
    LockFreeLinkedListNode.call(this);
  }
  protoOf(JobNode).t1j = function () {
    var tmp = this.s1j_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).n1d = function () {
    return true;
  };
  protoOf(JobNode).u1j = function () {
    return null;
  };
  protoOf(JobNode).i1h = function () {
    return this.t1j().t1e(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.t1j()) + ']';
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p1l_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.t1l_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.t1l_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1d_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    wasCancelling = state.u1l();
    var exceptions = state.v1l(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) || $this.i1f(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).i1i();
      }
    }
    if (!wasCancelling) {
      $this.f1f(finalException);
    }
    $this.r1d(finalState);
    var casSuccess = $this.g1d_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.r()) {
      if (state.u1l()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.q1d() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = exceptions.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (!(element instanceof CancellationException)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.d1(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = exceptions.t();
        while (_iterator__ex2g4s_0.u()) {
          var element_0 = _iterator__ex2g4s_0.v();
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.e1() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.e1());
    var unwrappedCause = unwrap(rootCause);
    var _iterator__ex2g4s = exceptions.t();
    while (_iterator__ex2g4s.u()) {
      var exception = _iterator__ex2g4s.v();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) && !(unwrapped === unwrappedCause)) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.b1(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        addSuppressed(rootCause, unwrapped);
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.g1d_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.f1f(null);
    $this.r1d(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.f1e();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      tmp0_safe_receiver.i1h();
      $this.e1e(NonDisposableHandle_instance);
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s1d_1;
    if (state instanceof JobNode) {
      try {
        state.h1h(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.y1d(new CompletionHandlerException('Exception in completion handler ' + state.toString() + ' for ' + $this.toString(), ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.u1j();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion($this, tmp2_safe_receiver, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.f1f(cause);
    list.w1l(4);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = list.v1j_1;
    while (!equals(cur, list)) {
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        tmp = node.o1j();
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.h1h(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp_0 = tmp0_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.v1j_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.y1d(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.g1f())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.f1e();
    if (parent === null || parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.z1e(cause) || isCancellation;
  }
  function notifyCompletion($this, _this__u8e3s4, cause) {
    _this__u8e3s4.w1l(1);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = _this__u8e3s4.v1j_1;
    while (!equals(cur, _this__u8e3s4)) {
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        tmp = true;
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.h1h(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp_0 = tmp0_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.v1j_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.y1d(tmp0_safe_receiver_0);
    }
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.y1l_1)
        return 0;
      if (!$this.g1d_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.k1e();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.g1d_1.atomicfu$compareAndSet(state, state.x1l_1))
          return -1;
        $this.k1e();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.y1l_1 ? list : new InactiveNodeList(list);
    $this.g1d_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.a1k(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
    var list = state.v1j_1;
    $this.g1d_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = $this.g1e();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false))
        return false;
      if (startInternal($this, state) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.l1i();
    disposeOnCancellation(cancellable, invokeOnCompletion($this, VOID, new ResumeOnCompletion(cancellable)));
    return cancellable.r1f();
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = $this.g1e();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.z1l();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.q1d() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).c1f();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = $this.g1e();
      $l$block: {
        if (tmp0 instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          if (tmp0.a1m())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0.u1l();
          if (!(cause == null) || !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0.b1m(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = tmp0.c1m();
          var tmp_0;
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            notifyCancelling($this, tmp0.q1l_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0 == null) ? isInterface(tmp0, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0.n1d()) {
              if (tryMakeCancelling($this, tmp0, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString(tmp0);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp0_elvis_lhs = state.u1j();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var message = 'State should have list: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.g1d_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.z1l())
      return get_COMPLETING_ALREADY();
    finishing.d1m(true);
    if (!(finishing === state)) {
      if (!$this.g1d_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.u1l();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      finishing.b1m(tmp0_safe_receiver.s1d_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.c1m();
    var tmp_0;
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    if (notifyRootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      notifyCancelling($this, list, notifyRootCause);
    }
    var child = nextChild($this, list);
    if (!(child == null) && tryWaitForChild($this, finishing, child, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    list.w1l(2);
    var anotherChild = nextChild($this, list);
    if (!(anotherChild == null) && tryWaitForChild($this, finishing, anotherChild, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js($this, _this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1d_1;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var handle = invokeOnCompletion(child_0.i1m_1, false, new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0));
        if (!(handle === NonDisposableHandle_instance))
          return true;
        var tmp0_elvis_lhs = nextChild($this_0, child_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = nextChild_0;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild($this, lastChild);
    if (!(waitChild == null) && tryWaitForChild($this, state, waitChild, proposedUpdate))
      return Unit_instance;
    state.q1l_1.w1l(2);
    var waitChildAgain = nextChild($this, lastChild);
    if (!(waitChildAgain == null) && tryWaitForChild($this, state, waitChildAgain, proposedUpdate)) {
      return Unit_instance;
    }
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.x1d(finalState);
  }
  function nextChild($this, _this__u8e3s4) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (!cur.x1j_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.prevNode' call
      cur = cur.w1j_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
      cur = cur.v1j_1;
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (cur.x1j_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.u1l() ? 'Cancelling' : state.z1l() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.n1d() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    SynchronizedObject.call(this);
    this.q1l_1 = list;
    this.r1l_1 = atomic$boolean$1(isCompleting);
    this.s1l_1 = atomic$ref$1(rootCause);
    this.t1l_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).u1j = function () {
    return this.q1l_1;
  };
  protoOf(Finishing).d1m = function (value) {
    this.r1l_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).z1l = function () {
    return this.r1l_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).j1m = function (value) {
    this.s1l_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).c1m = function () {
    return this.s1l_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).a1m = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).u1l = function () {
    return !(this.c1m() == null);
  };
  protoOf(Finishing).n1d = function () {
    return this.c1m() == null;
  };
  protoOf(Finishing).v1l = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        this_0.b1(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.c1m();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      list.a3(0, rootCause);
    }
    if (!(proposedException == null) && !equals(proposedException, rootCause)) {
      list.b1(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).b1m = function (exception) {
    var rootCause = this.c1m();
    if (rootCause == null) {
      this.j1m(exception);
      return Unit_instance;
    }
    if (exception === rootCause)
      return Unit_instance;
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_instance;
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        this_0.b1(eh);
        this_0.b1(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).b1(exception);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.u1l() + ', completing=' + this.z1l() + ', rootCause=' + toString_0(this.c1m()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.q1l_1.toString() + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.o1m_1 = parent;
    this.p1m_1 = state;
    this.q1m_1 = child;
    this.r1m_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).o1j = function () {
    return false;
  };
  protoOf(ChildCompletion).h1h = function (cause) {
    continueCompleting(this.o1m_1, this.p1m_1, this.q1m_1, this.r1m_1);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, 1);
    this.y1m_1 = job;
  }
  protoOf(AwaitContinuation).s1i = function (parent) {
    var state = this.y1m_1.g1e();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.c1m();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.s1d_1;
    return parent.l1e();
  };
  protoOf(AwaitContinuation).f1j = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    var cont = new AwaitContinuation(intercepted($completion), $this);
    cont.l1i();
    disposeOnCancellation(cont, invokeOnCompletion($this, VOID, new ResumeAwaitOnCompletion(cont)));
    return cont.r1f();
  }
  function JobSupport(active) {
    this.g1d_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.h1d_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).l1 = function () {
    return Key_instance_3;
  };
  protoOf(JobSupport).e1e = function (value) {
    this.h1d_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).f1e = function () {
    return this.h1d_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).i1d = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.e1e(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.j1e();
    var handle = parent.e1f(this);
    this.e1e(handle);
    if (this.h1e()) {
      handle.i1h();
      this.e1e(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).g1e = function () {
    return this.g1d_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).n1d = function () {
    var state = this.g1e();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.n1d();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).h1e = function () {
    var tmp = this.g1e();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).i1e = function () {
    var state = this.g1e();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.u1l();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).j1e = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.g1e();
      var tmp0_subject = startInternal(this, state);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).k1e = function () {
  };
  protoOf(JobSupport).l1e = function () {
    var state = this.g1e();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.c1m();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.m1e(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var message = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var message_0 = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.n1e(state.s1d_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).m1e = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.q1d() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).n1e = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.m1e(_this__u8e3s4, message) : $super.m1e.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).o1e = function (handler) {
    return this.r1e(true, new InvokeOnCompletion(handler));
  };
  protoOf(JobSupport).p1e = function (onCancelling, invokeImmediately, handler) {
    var tmp;
    if (onCancelling) {
      tmp = new InvokeOnCancelling(handler);
    } else {
      tmp = new InvokeOnCompletion(handler);
    }
    return this.r1e(invokeImmediately, tmp);
  };
  protoOf(JobSupport).r1e = function (invokeImmediately, node) {
    node.s1j_1 = this;
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        var state = this.g1e();
        if (state instanceof Empty) {
          if (state.y1l_1) {
            if (this.g1d_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$0 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.u1j();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var tmp;
              if (node.o1j()) {
                var tmp0_safe_receiver = state instanceof Finishing ? state : null;
                var rootCause = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1m();
                var tmp_0;
                if (rootCause == null) {
                  tmp_0 = list.y1j(node, 5);
                } else {
                  if (invokeImmediately) {
                    node.h1h(rootCause);
                  }
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_0;
              } else {
                tmp = list.y1j(node, 1);
              }
              if (tmp) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$0 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$0;
    if (added)
      return node;
    else if (invokeImmediately) {
      var tmp_1 = this.g1e();
      var tmp0_safe_receiver_0 = tmp_1 instanceof CompletedExceptionally ? tmp_1 : null;
      node.h1h(tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.s1d_1);
    }
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).s1e = function ($completion) {
    if (!joinInternal(this)) {
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp$ret$0 = $completion.t8();
      ensureActive(tmp$ret$0);
      return Unit_instance;
    }
    return joinSuspend(this, $completion);
  };
  protoOf(JobSupport).t1e = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.g1e();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.g1d_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.u1j() == null)) {
            node.z1j();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).u1e = function () {
    return false;
  };
  protoOf(JobSupport).v1e = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.q1d() : null, null, this);
    } else {
      tmp = cause;
    }
    this.x1e(tmp);
  };
  protoOf(JobSupport).q1d = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).x1e = function (cause) {
    this.b1f(cause);
  };
  protoOf(JobSupport).y1e = function (parentJob) {
    this.b1f(parentJob);
  };
  protoOf(JobSupport).z1e = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.b1f(cause) && this.h1f();
  };
  protoOf(JobSupport).a1f = function (cause) {
    return this.b1f(cause);
  };
  protoOf(JobSupport).b1f = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.u1e()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.x1d(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).c1f = function () {
    var state = this.g1e();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.c1m();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.s1d_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var message = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).d1f = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = this.g1e();
      $l$block: {
        var finalState = tryMakeCompleting(this, tmp0, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.x1d(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).v1d = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = this.g1e();
      $l$block: {
        var finalState = tryMakeCompleting(this, tmp0, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this.toString() + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(this, proposedUpdate));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).e1f = function (child) {
    // Inline function 'kotlin.also' call
    var this_0 = new ChildHandleNode(child);
    this_0.s1j_1 = this;
    var node = this_0;
    var tmp$ret$2;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        var state = this.g1e();
        if (state instanceof Empty) {
          if (state.y1l_1) {
            if (this.g1d_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$2 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.u1j();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var addedBeforeCancellation = list.y1j(node, 7);
              var tmp;
              if (addedBeforeCancellation) {
                tmp = true;
              } else {
                var addedBeforeCompletion = list.y1j(node, 3);
                var latestState = this.g1e();
                var tmp_0;
                if (latestState instanceof Finishing) {
                  tmp_0 = latestState.c1m();
                } else {
                  // Inline function 'kotlinx.coroutines.assert' call
                  var tmp0_safe_receiver = latestState instanceof CompletedExceptionally ? latestState : null;
                  tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1d_1;
                }
                var rootCause = tmp_0;
                node.h1h(rootCause);
                var tmp_1;
                if (addedBeforeCompletion) {
                  // Inline function 'kotlinx.coroutines.assert' call
                  tmp_1 = true;
                } else {
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_1;
              }
              if (tmp) {
                tmp$ret$2 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$2 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$2;
    if (added)
      return node;
    var tmp_2 = this.g1e();
    var tmp0_safe_receiver_0 = tmp_2 instanceof CompletedExceptionally ? tmp_2 : null;
    node.h1h(tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.s1d_1);
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).y1d = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).f1f = function (cause) {
  };
  protoOf(JobSupport).g1f = function () {
    return false;
  };
  protoOf(JobSupport).h1f = function () {
    return true;
  };
  protoOf(JobSupport).i1f = function (exception) {
    return false;
  };
  protoOf(JobSupport).r1d = function (state) {
  };
  protoOf(JobSupport).x1d = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.j1f() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).j1f = function () {
    return this.z1d() + '{' + stateString(this, this.g1e()) + '}';
  };
  protoOf(JobSupport).z1d = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).k1f = function ($completion) {
    $l$loop: while (true) {
      var state = this.g1e();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          throw state.s1d_1;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $completion);
  };
  function handlesExceptionF($this) {
    var tmp = $this.f1e();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t1j();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.h1f())
        return true;
      var tmp_1 = parentJob.f1e();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.t1j();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.i1d(parent);
    this.b1n_1 = handlesExceptionF(this);
  }
  protoOf(JobImpl).u1e = function () {
    return true;
  };
  protoOf(JobImpl).h1f = function () {
    return this.b1n_1;
  };
  protoOf(JobImpl).o1k = function () {
    return this.d1f(Unit_instance);
  };
  protoOf(JobImpl).n1k = function (exception) {
    return this.d1f(new CompletedExceptionally(exception));
  };
  function Empty(isActive) {
    this.y1l_1 = isActive;
  }
  protoOf(Empty).n1d = function () {
    return this.y1l_1;
  };
  protoOf(Empty).u1j = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.y1l_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LockFreeLinkedListHead.call(this);
  }
  protoOf(NodeList).n1d = function () {
    return true;
  };
  protoOf(NodeList).u1j = function () {
    return this;
  };
  protoOf(NodeList).f1n = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q('List{');
    this_0.q(state);
    this_0.q('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = this.v1j_1;
    while (!equals(cur, this)) {
      var node = cur;
      if (node instanceof JobNode) {
        if (first) {
          first = false;
        } else
          this_0.q(', ');
        this_0.w(node);
      }
      cur = cur.v1j_1;
    }
    this_0.q(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.f1n('Active') : protoOf(LockFreeLinkedListHead).toString.call(this);
  };
  function IncompleteStateBox(state) {
    this.p1l_1 = state;
  }
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function InactiveNodeList(list) {
    this.x1l_1 = list;
  }
  protoOf(InactiveNodeList).u1j = function () {
    return this.x1l_1;
  };
  protoOf(InactiveNodeList).n1d = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.x1l_1.f1n('New') : anyToString(this);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.k1n_1 = handler;
  }
  protoOf(InvokeOnCompletion).o1j = function () {
    return false;
  };
  protoOf(InvokeOnCompletion).h1h = function (cause) {
    return this.k1n_1(cause);
  };
  function InvokeOnCancelling(handler) {
    JobNode.call(this);
    this.p1n_1 = handler;
    this.q1n_1 = atomic$boolean$1(false);
  }
  protoOf(InvokeOnCancelling).o1j = function () {
    return true;
  };
  protoOf(InvokeOnCancelling).h1h = function (cause) {
    if (this.q1n_1.atomicfu$compareAndSet(false, true))
      this.p1n_1(cause);
  };
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.v1n_1 = continuation;
  }
  protoOf(ResumeOnCompletion).o1j = function () {
    return false;
  };
  protoOf(ResumeOnCompletion).h1h = function (cause) {
    // Inline function 'kotlin.coroutines.resume' call
    var this_0 = this.v1n_1;
    // Inline function 'kotlin.Companion.success' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
    this_0.y8(tmp$ret$0);
    return Unit_instance;
  };
  function ChildHandleNode(childJob) {
    JobNode.call(this);
    this.i1m_1 = childJob;
  }
  protoOf(ChildHandleNode).o1j = function () {
    return true;
  };
  protoOf(ChildHandleNode).h1h = function (cause) {
    return this.i1m_1.y1e(this.t1j());
  };
  protoOf(ChildHandleNode).z1e = function (cause) {
    return this.t1j().z1e(cause);
  };
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.a1o_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).o1j = function () {
    return false;
  };
  protoOf(ResumeAwaitOnCompletion).h1h = function (cause) {
    var state = this.t1j().g1e();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp0 = this.a1o_1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = state.s1d_1;
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.y8(tmp$ret$1);
    } else {
      var tmp0_0 = this.a1o_1;
      var tmp = unboxState(state);
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      var tmp$ret$3 = _Result___init__impl__xyqfz8(value);
      tmp0_0.y8(tmp$ret$3);
    }
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.d1o();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).d1o = function () {
    var main = Dispatchers_getInstance().i1o();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.c1o();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).z1e = function (cause) {
    return false;
  };
  function TimeoutCancellationException() {
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).q1k = function (context) {
    return false;
  };
  protoOf(Unconfined).r1k = function (context, block) {
    var yieldContext = context.a9(Key_instance_4);
    if (!(yieldContext == null)) {
      yieldContext.o1o_1 = true;
      return Unit_instance;
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
  }
  var Key_instance_4;
  function Key_getInstance_3() {
    return Key_instance_4;
  }
  function Waiter() {
  }
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_instance;
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function BufferOverflow_DROP_LATEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_LATEST_instance;
  }
  function get_NULL_SEGMENT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NULL_SEGMENT;
  }
  var NULL_SEGMENT;
  function get_SEGMENT_SIZE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  function get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  }
  var EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  function get_BUFFERED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return BUFFERED;
  }
  var BUFFERED;
  function get_IN_BUFFER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return IN_BUFFER;
  }
  var IN_BUFFER;
  function get_RESUMING_BY_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_RCV;
  }
  var RESUMING_BY_RCV;
  function get_RESUMING_BY_EB() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_EB;
  }
  var RESUMING_BY_EB;
  function get_POISONED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return POISONED;
  }
  var POISONED;
  function get_DONE_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return DONE_RCV;
  }
  var DONE_RCV;
  function get_INTERRUPTED_SEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_SEND;
  }
  var INTERRUPTED_SEND;
  function get_INTERRUPTED_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_RCV;
  }
  var INTERRUPTED_RCV;
  function get_CHANNEL_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CHANNEL_CLOSED;
  }
  var CHANNEL_CLOSED;
  function get_SUSPEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND;
  }
  var SUSPEND;
  function get_SUSPEND_NO_WAITER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND_NO_WAITER;
  }
  var SUSPEND_NO_WAITER;
  function get_FAILED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return FAILED;
  }
  var FAILED;
  function get_NO_RECEIVE_RESULT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_RECEIVE_RESULT;
  }
  var NO_RECEIVE_RESULT;
  function get_CLOSE_HANDLER_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_CLOSED;
  }
  var CLOSE_HANDLER_CLOSED;
  function get_CLOSE_HANDLER_INVOKED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_INVOKED;
  }
  var CLOSE_HANDLER_INVOKED;
  function get_NO_CLOSE_CAUSE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_CLOSE_CAUSE;
  }
  var NO_CLOSE_CAUSE;
  function setElementLazy($this, index, value) {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    $this.u1o_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value = value;
  }
  function ChannelSegment(id, prev, channel, pointers) {
    Segment.call(this, id, prev, pointers);
    this.t1o_1 = channel;
    this.u1o_1 = atomicfu$AtomicRefArray$ofNulls(imul(get_SEGMENT_SIZE(), 2));
  }
  protoOf(ChannelSegment).v1o = function () {
    return ensureNotNull(this.t1o_1);
  };
  protoOf(ChannelSegment).w1o = function () {
    return get_SEGMENT_SIZE();
  };
  protoOf(ChannelSegment).x1o = function (index, element) {
    setElementLazy(this, index, element);
  };
  protoOf(ChannelSegment).y1o = function (index) {
    var tmp = this.u1o_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ChannelSegment).z1o = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.y1o(index);
    this.a1p(index);
    return this_0;
  };
  protoOf(ChannelSegment).a1p = function (index) {
    setElementLazy(this, index, null);
  };
  protoOf(ChannelSegment).b1p = function (index) {
    return this.u1o_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).c1p = function (index, value) {
    this.u1o_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value = value;
  };
  protoOf(ChannelSegment).d1p = function (index, from, to) {
    return this.u1o_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$compareAndSet(from, to);
  };
  protoOf(ChannelSegment).e1p = function (index, update) {
    return this.u1o_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$getAndSet(update);
  };
  protoOf(ChannelSegment).z1h = function (index, cause, context) {
    var isSender = index >= get_SEGMENT_SIZE();
    var index_0 = isSender ? index - get_SEGMENT_SIZE() | 0 : index;
    var element = this.y1o(index_0);
    $l$loop: while (true) {
      var cur = this.b1p(index_0);
      var tmp;
      if (!(cur == null) ? isInterface(cur, Waiter) : false) {
        tmp = true;
      } else {
        tmp = cur instanceof WaiterEB;
      }
      if (tmp) {
        var update = isSender ? get_INTERRUPTED_SEND() : get_INTERRUPTED_RCV();
        if (this.d1p(index_0, cur, update)) {
          this.a1p(index_0);
          this.r1p(index_0, !isSender);
          if (isSender) {
            var tmp0_safe_receiver = this.v1o().g1p_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp0_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        }
      } else {
        if (cur === get_INTERRUPTED_SEND() || cur === get_INTERRUPTED_RCV()) {
          this.a1p(index_0);
          if (isSender) {
            var tmp1_safe_receiver = this.v1o().g1p_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp1_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        } else {
          if (cur === get_RESUMING_BY_EB() || cur === get_RESUMING_BY_RCV())
            continue $l$loop;
          else {
            if (cur === get_DONE_RCV() || cur === get_BUFFERED())
              return Unit_instance;
            else {
              if (cur === get_CHANNEL_CLOSED())
                return Unit_instance;
              else {
                // Inline function 'kotlin.error' call
                var message = 'unexpected state: ' + toString_0(cur);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  };
  protoOf(ChannelSegment).r1p = function (index, receiver) {
    if (receiver) {
      var tmp = this.v1o();
      var tmp0 = this.x1h_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      // Inline function 'kotlin.Long.plus' call
      var this_0 = multiply(tmp0, fromInt(other));
      var tmp$ret$1 = add(this_0, fromInt(index));
      tmp.s1p(tmp$ret$1);
    }
    this.t1p();
  };
  function onClosedHasNext($this) {
    $this.f1q_1 = get_CHANNEL_CLOSED();
    var tmp0_elvis_lhs = $this.h1q_1.i1q();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var cause = tmp;
    throw recoverStackTrace_0(cause);
  }
  function hasNextOnNoWaiterSuspend($this, segment, index, r, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      $this.g1q_1 = cancellable;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var this_0 = $this.h1q_1;
      var updCellResult = updateCellReceive(this_0, segment, index, r, $this);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension(this_0, $this, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (compare(r, this_0.j1q()) < 0) {
          segment.d1q();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = this_0.m1p_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if (this_0.k1q()) {
              onClosedHasNextNoWaiterSuspend($this);
              break $l$block_0;
            }
            var r_0 = this_0.i1p_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = divide(r_0, fromInt(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var tmp$ret$3 = modulo(r_0, fromInt(other_0));
            var i = convertToInt(tmp$ret$3);
            if (!equalsLong(segment_0.x1h_1, id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this_0, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive(this_0, segment_0, i, r_0, $this);
            if (updCellResult_0 === get_SUSPEND()) {
              var tmp1_safe_receiver = (!($this == null) ? isInterface($this, Waiter) : false) ? $this : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this_0, tmp1_safe_receiver, segment_0, i);
              }
            } else if (updCellResult_0 === get_FAILED()) {
              if (compare(r_0, this_0.j1q()) < 0) {
                segment_0.d1q();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              // Inline function 'kotlin.error' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.d1q();
              var element = (updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE();
              $this.f1q_1 = element;
              $this.g1q_1 = null;
              var tmp0_safe_receiver = $this.h1q_1.g1p_1;
              cancellable.x1i(true, tmp0_safe_receiver == null ? null : bindCancellationFun($this.h1q_1, tmp0_safe_receiver, element));
            }
            break $l$block_0;
          }
        }
      } else {
        segment.d1q();
        var element_0 = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
        $this.f1q_1 = element_0;
        $this.g1q_1 = null;
        var tmp0_safe_receiver_0 = $this.h1q_1.g1p_1;
        cancellable.x1i(true, tmp0_safe_receiver_0 == null ? null : bindCancellationFun($this.h1q_1, tmp0_safe_receiver_0, element_0));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.t1i();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.r1f();
  }
  function onClosedHasNextNoWaiterSuspend($this) {
    var cont = ensureNotNull($this.g1q_1);
    $this.g1q_1 = null;
    $this.f1q_1 = get_CHANNEL_CLOSED();
    var cause = $this.h1q_1.i1q();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.y8(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.y8(tmp$ret$2);
    }
  }
  function $hasNextCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t1q_1 = _this__u8e3s4;
  }
  protoOf($hasNextCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 8;
            if (!(this.t1q_1.f1q_1 === get_NO_RECEIVE_RESULT()) && !(this.t1q_1.f1q_1 === get_CHANNEL_CLOSED())) {
              var tmp_0 = this;
              tmp_0.u1q_1 = true;
              this.n8_1 = 11;
              continue $sm;
            } else {
              this.e1r_1 = this.t1q_1.h1q_1;
              this.d1r_1 = null;
              this.n8_1 = 1;
              continue $sm;
            }

          case 1:
            this.a1r_1 = this.e1r_1;
            this.b1r_1 = this.d1r_1;
            this.x1q_1 = this.a1r_1.m1p_1.kotlinx$atomicfu$value;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.n8_1 = 9;
              continue $sm;
            }

            if (this.a1r_1.k1q()) {
              var tmp_1 = this;
              tmp_1.v1q_1 = onClosedHasNext(this.t1q_1);
              this.n8_1 = 10;
              continue $sm;
            } else {
              this.n8_1 = 3;
              continue $sm;
            }

          case 3:
            this.y1q_1 = this.a1r_1.i1p_1.atomicfu$getAndIncrement$long();
            var tmp0 = this.y1q_1;
            var other = get_SEGMENT_SIZE();
            var id = divide(tmp0, fromInt(other));
            var tmp_2 = this;
            var tmp0_0 = this.y1q_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_2.z1q_1 = convertToInt(modulo(tmp0_0, fromInt(other_0)));
            if (!equalsLong(this.x1q_1.x1h_1, id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this.a1r_1, id, this.x1q_1);
              if (tmp0_elvis_lhs == null) {
                this.n8_1 = 2;
                var tmp_3 = this;
                continue $sm;
              } else {
                this.c1r_1 = tmp0_elvis_lhs;
                this.n8_1 = 4;
                continue $sm;
              }
            } else {
              this.n8_1 = 5;
              continue $sm;
            }

          case 4:
            this.x1q_1 = this.c1r_1;
            this.n8_1 = 5;
            continue $sm;
          case 5:
            var updCellResult = updateCellReceive(this.a1r_1, this.x1q_1, this.z1q_1, this.y1q_1, this.b1r_1);
            if (updCellResult === get_SUSPEND()) {
              var tmp_4 = this;
              var tmp_5 = this.b1r_1;
              var tmp1_safe_receiver = (!(tmp_5 == null) ? isInterface(tmp_5, Waiter) : false) ? tmp_5 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this.a1r_1, tmp1_safe_receiver, this.x1q_1, this.z1q_1);
              }
              this.x1q_1;
              this.z1q_1;
              this.y1q_1;
              var message = 'unreachable';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (updCellResult === get_FAILED()) {
                if (compare(this.y1q_1, this.a1r_1.j1q()) < 0) {
                  this.x1q_1.d1q();
                }
                this.n8_1 = 2;
                var tmp_6 = this;
                continue $sm;
              } else {
                if (updCellResult === get_SUSPEND_NO_WAITER()) {
                  var tmp0_1 = this.x1q_1;
                  var tmp2 = this.z1q_1;
                  var r = this.y1q_1;
                  this.n8_1 = 6;
                  suspendResult = hasNextOnNoWaiterSuspend(this.t1q_1, tmp0_1, tmp2, r, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_7 = this;
                  this.x1q_1.d1q();
                  var element = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
                  this.t1q_1.f1q_1 = element;
                  tmp_7.w1q_1 = true;
                  this.n8_1 = 7;
                  continue $sm;
                }
              }
            }

          case 6:
            var tmp_8 = this;
            return suspendResult;
          case 7:
            this.v1q_1 = this.w1q_1;
            this.n8_1 = 10;
            continue $sm;
          case 8:
            throw this.q8_1;
          case 9:
            if (false) {
              this.n8_1 = 1;
              continue $sm;
            }

            this.n8_1 = 10;
            continue $sm;
          case 10:
            this.u1q_1 = this.v1q_1;
            this.n8_1 = 11;
            continue $sm;
          case 11:
            return this.u1q_1;
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
  function _get_bufferEndCounter__2d4hee($this) {
    return $this.j1p_1.kotlinx$atomicfu$value;
  }
  function _get_isRendezvousOrUnlimited__3mdufi($this) {
    // Inline function 'kotlin.let' call
    var it = _get_bufferEndCounter__2d4hee($this);
    return equalsLong(it, new Long(0, 0)) || equalsLong(it, new Long(-1, 2147483647));
  }
  function onClosedSend($this, element, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.l1i();
    $l$block: {
      var tmp0_safe_receiver = $this.g1p_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, $this.f1r());
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = recoverStackTrace(tmp1_safe_receiver, cancellable);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
        cancellable.y8(tmp$ret$0);
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
      var exception_0 = $this.f1r();
      // Inline function 'kotlin.Companion.failure' call
      var exception_1 = recoverStackTrace(exception_0, cancellable);
      var tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(exception_1));
      cancellable.y8(tmp$ret$4);
    }
    return cancellable.r1f();
  }
  function sendOnNoWaiterSuspend($this, segment, index, element, s, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter' call
      switch (updateCellSend($this, segment, index, element, s, cancellable, false)) {
        case 0:
          segment.d1q();
          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.y8(tmp$ret$0);
          break;
        case 1:
          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.y8(tmp$ret$3);
          break;
        case 2:
          prepareSenderForSuspension($this, cancellable, segment, index);
          break;
        case 4:
          if (compare(s, $this.g1r()) < 0) {
            segment.d1q();
          }

          onClosedSendOnNoWaiterSuspend($this, element, cancellable);
          break;
        case 5:
          segment.d1q();
          $l$block_5: {
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
            var segment_0 = $this.l1p_1.kotlinx$atomicfu$value;
            $l$loop_0: while (true) {
              var sendersAndCloseStatusCur = $this.h1p_1.atomicfu$getAndIncrement$long();
              // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
              var s_0 = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
              var closed = _get_isClosedForSend0__kxgf9m($this, sendersAndCloseStatusCur);
              // Inline function 'kotlin.Long.div' call
              var other = get_SEGMENT_SIZE();
              var id = divide(s_0, fromInt(other));
              // Inline function 'kotlin.Long.rem' call
              var other_0 = get_SEGMENT_SIZE();
              var tmp$ret$9 = modulo(s_0, fromInt(other_0));
              var i = convertToInt(tmp$ret$9);
              if (!equalsLong(segment_0.x1h_1, id)) {
                var tmp0_elvis_lhs = findSegmentSend($this, id, segment_0);
                var tmp;
                if (tmp0_elvis_lhs == null) {
                  var tmp_0;
                  if (closed) {
                    onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                    break $l$block_5;
                  } else {
                    continue $l$loop_0;
                  }
                } else {
                  tmp = tmp0_elvis_lhs;
                }
                segment_0 = tmp;
              }
              switch (updateCellSend($this, segment_0, i, element, s_0, cancellable, closed)) {
                case 0:
                  segment_0.d1q();
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$12 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.y8(tmp$ret$12);
                  break $l$block_5;
                case 1:
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$15 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.y8(tmp$ret$15);
                  break $l$block_5;
                case 2:
                  if (closed) {
                    segment_0.t1p();
                    onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                    break $l$block_5;
                  }

                  var tmp2_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
                  if (tmp2_safe_receiver == null)
                    null;
                  else {
                    prepareSenderForSuspension($this, tmp2_safe_receiver, segment_0, i);
                  }

                  break $l$block_5;
                case 4:
                  if (compare(s_0, $this.g1r()) < 0) {
                    segment_0.d1q();
                  }

                  onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                  break $l$block_5;
                case 5:
                  segment_0.d1q();
                  continue $l$loop_0;
                case 3:
                  // Inline function 'kotlin.error' call

                  var message = 'unexpected';
                  throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }

          break;
        default:
          // Inline function 'kotlin.error' call

          var message_0 = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message_0));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.t1i();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.r1f();
  }
  function prepareSenderForSuspension($this, _this__u8e3s4, segment, index) {
    _this__u8e3s4.z1i(segment, index + get_SEGMENT_SIZE() | 0);
  }
  function onClosedSendOnNoWaiterSuspend($this, element, cont) {
    var tmp0_safe_receiver = $this.g1p_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, element, cont.t8());
    }
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = recoverStackTrace($this.f1r(), cont);
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.y8(tmp$ret$0);
  }
  function SendBroadcast() {
  }
  function updateCellSend($this, segment, index, element, s, waiter, closed) {
    segment.x1o(index, element);
    if (closed)
      return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
    var state = segment.b1p(index);
    if (state === null) {
      if (bufferOrRendezvousSend($this, s)) {
        if (segment.d1p(index, null, get_BUFFERED())) {
          return 1;
        }
      } else {
        if (waiter == null) {
          return 3;
        } else {
          if (segment.d1p(index, null, waiter))
            return 2;
        }
      }
    } else {
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        segment.a1p(index);
        var tmp;
        if (tryResumeReceiver($this, state, element)) {
          segment.c1p(index, get_DONE_RCV());
          $this.h1r();
          tmp = 0;
        } else {
          if (!(segment.e1p(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.r1p(index, true);
          }
          tmp = 5;
        }
        return tmp;
      }
    }
    return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
  }
  function updateCellSendSlow($this, segment, index, element, s, waiter, closed) {
    while (true) {
      var state = segment.b1p(index);
      if (state === null) {
        if (bufferOrRendezvousSend($this, s) && !closed) {
          if (segment.d1p(index, null, get_BUFFERED())) {
            return 1;
          }
        } else {
          if (closed) {
            if (segment.d1p(index, null, get_INTERRUPTED_SEND())) {
              segment.r1p(index, false);
              return 4;
            }
          } else if (waiter == null)
            return 3;
          else if (segment.d1p(index, null, waiter))
            return 2;
        }
      } else if (state === get_IN_BUFFER()) {
        if (segment.d1p(index, state, get_BUFFERED())) {
          return 1;
        }
      } else if (state === get_INTERRUPTED_RCV()) {
        segment.a1p(index);
        return 5;
      } else if (state === get_POISONED()) {
        segment.a1p(index);
        return 5;
      } else if (state === get_CHANNEL_CLOSED()) {
        segment.a1p(index);
        completeCloseOrCancel($this);
        return 4;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        segment.a1p(index);
        var tmp;
        if (state instanceof WaiterEB) {
          tmp = state.i1r_1;
        } else {
          tmp = state;
        }
        var receiver = tmp;
        var tmp_0;
        if (tryResumeReceiver($this, receiver, element)) {
          segment.c1p(index, get_DONE_RCV());
          $this.h1r();
          tmp_0 = 0;
        } else {
          if (!(segment.e1p(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.r1p(index, true);
          }
          tmp_0 = 5;
        }
        return tmp_0;
      }
    }
  }
  function shouldSendSuspend0($this, curSendersAndCloseStatus) {
    if (_get_isClosedForSend0__kxgf9m($this, curSendersAndCloseStatus))
      return false;
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var tmp$ret$0 = bitwiseAnd(curSendersAndCloseStatus, new Long(-1, 268435455));
    return !bufferOrRendezvousSend($this, tmp$ret$0);
  }
  function bufferOrRendezvousSend($this, curSenders) {
    var tmp;
    if (compare(curSenders, _get_bufferEndCounter__2d4hee($this)) < 0) {
      tmp = true;
    } else {
      var tmp0 = $this.g1r();
      // Inline function 'kotlin.Long.plus' call
      var other = $this.f1p_1;
      var tmp$ret$0 = add(tmp0, fromInt(other));
      tmp = compare(curSenders, tmp$ret$0) < 0;
    }
    return tmp;
  }
  function tryResumeReceiver($this, _this__u8e3s4, element) {
    var tmp;
    if (isInterface(_this__u8e3s4, SelectInstance)) {
      tmp = _this__u8e3s4.n1r($this, element);
    } else {
      if (_this__u8e3s4 instanceof ReceiveCatching) {
        if (!(_this__u8e3s4 instanceof ReceiveCatching))
          THROW_CCE();
        var tmp_0 = Companion_getInstance().l1r(element);
        var tmp1_safe_receiver = $this.g1p_1;
        tmp = tryResume0(_this__u8e3s4.m1r_1, new ChannelResult(tmp_0), tmp1_safe_receiver == null ? null : bindCancellationFunResult($this, tmp1_safe_receiver));
      } else {
        if (_this__u8e3s4 instanceof BufferedChannelIterator) {
          if (!(_this__u8e3s4 instanceof BufferedChannelIterator))
            THROW_CCE();
          tmp = _this__u8e3s4.j1r(element);
        } else {
          if (isInterface(_this__u8e3s4, CancellableContinuation)) {
            if (!isInterface(_this__u8e3s4, CancellableContinuation))
              THROW_CCE();
            var tmp2_safe_receiver = $this.g1p_1;
            tmp = tryResume0(_this__u8e3s4, element, tmp2_safe_receiver == null ? null : bindCancellationFun_0($this, tmp2_safe_receiver));
          } else {
            var message = 'Unexpected receiver type: ' + toString(_this__u8e3s4);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
    }
    return tmp;
  }
  function prepareReceiverForSuspension($this, _this__u8e3s4, segment, index) {
    $this.o1r();
    _this__u8e3s4.z1i(segment, index);
  }
  function updateCellReceive($this, segment, index, r, waiter) {
    var state = segment.b1p(index);
    if (state === null) {
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var this_0 = $this.h1p_1.kotlinx$atomicfu$value;
      var senders = bitwiseAnd(this_0, new Long(-1, 268435455));
      if (compare(r, senders) >= 0) {
        if (waiter === null) {
          return get_SUSPEND_NO_WAITER();
        }
        if (segment.d1p(index, state, waiter)) {
          expandBuffer($this);
          return get_SUSPEND();
        }
      }
    } else if (state === get_BUFFERED())
      if (segment.d1p(index, state, get_DONE_RCV())) {
        expandBuffer($this);
        return segment.z1o(index);
      }
    return updateCellReceiveSlow($this, segment, index, r, waiter);
  }
  function updateCellReceiveSlow($this, segment, index, r, waiter) {
    $l$loop: while (true) {
      var state = segment.b1p(index);
      if (state === null || state === get_IN_BUFFER()) {
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var this_0 = $this.h1p_1.kotlinx$atomicfu$value;
        var senders = bitwiseAnd(this_0, new Long(-1, 268435455));
        if (compare(r, senders) < 0) {
          if (segment.d1p(index, state, get_POISONED())) {
            expandBuffer($this);
            return get_FAILED();
          }
        } else {
          if (waiter === null) {
            return get_SUSPEND_NO_WAITER();
          }
          if (segment.d1p(index, state, waiter)) {
            expandBuffer($this);
            return get_SUSPEND();
          }
        }
      } else if (state === get_BUFFERED()) {
        if (segment.d1p(index, state, get_DONE_RCV())) {
          expandBuffer($this);
          return segment.z1o(index);
        }
      } else if (state === get_INTERRUPTED_SEND())
        return get_FAILED();
      else if (state === get_POISONED())
        return get_FAILED();
      else if (state === get_CHANNEL_CLOSED()) {
        expandBuffer($this);
        return get_FAILED();
      } else if (state === get_RESUMING_BY_EB())
        continue $l$loop;
      else {
        if (segment.d1p(index, state, get_RESUMING_BY_RCV())) {
          var helpExpandBuffer = state instanceof WaiterEB;
          var tmp;
          if (state instanceof WaiterEB) {
            tmp = state.i1r_1;
          } else {
            tmp = state;
          }
          var sender = tmp;
          var tmp_0;
          if (tryResumeSender($this, sender, segment, index)) {
            segment.c1p(index, get_DONE_RCV());
            expandBuffer($this);
            tmp_0 = segment.z1o(index);
          } else {
            segment.c1p(index, get_INTERRUPTED_SEND());
            segment.r1p(index, false);
            if (helpExpandBuffer) {
              expandBuffer($this);
            }
            tmp_0 = get_FAILED();
          }
          return tmp_0;
        }
      }
    }
  }
  function tryResumeSender($this, _this__u8e3s4, segment, index) {
    var tmp;
    if (isInterface(_this__u8e3s4, CancellableContinuation)) {
      if (!isInterface(_this__u8e3s4, CancellableContinuation))
        THROW_CCE();
      tmp = tryResume0(_this__u8e3s4, Unit_instance);
    } else {
      if (isInterface(_this__u8e3s4, SelectInstance)) {
        if (!(_this__u8e3s4 instanceof SelectImplementation))
          THROW_CCE();
        var trySelectResult = _this__u8e3s4.t1r($this, Unit_instance);
        if (trySelectResult === TrySelectDetailedResult_REREGISTER_getInstance()) {
          segment.a1p(index);
        }
        tmp = trySelectResult === TrySelectDetailedResult_SUCCESSFUL_getInstance();
      } else {
        if (_this__u8e3s4 instanceof SendBroadcast) {
          tmp = tryResume0(_this__u8e3s4.p1r_1, true);
        } else {
          var message = 'Unexpected waiter: ' + toString(_this__u8e3s4);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp;
  }
  function expandBuffer($this) {
    if (_get_isRendezvousOrUnlimited__3mdufi($this))
      return Unit_instance;
    var segment = $this.n1p_1.kotlinx$atomicfu$value;
    try_again: while (true) {
      var b = $this.j1p_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = divide(b, fromInt(other));
      var s = $this.j1q();
      if (compare(s, b) <= 0) {
        if (compare(segment.x1h_1, id) < 0 && !(segment.z1p() == null)) {
          moveSegmentBufferEndToSpecifiedOrLast($this, id, segment);
        }
        incCompletedExpandBufferAttempts$default($this);
        return Unit_instance;
      }
      if (!equalsLong(segment.x1h_1, id)) {
        var tmp0_elvis_lhs = findSegmentBufferEnd($this, id, segment, b);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue try_again;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var tmp$ret$1 = modulo(b, fromInt(other_0));
      var i = convertToInt(tmp$ret$1);
      if (updateCellExpandBuffer($this, segment, i, b)) {
        incCompletedExpandBufferAttempts$default($this);
        return Unit_instance;
      } else {
        incCompletedExpandBufferAttempts$default($this);
        continue try_again;
      }
    }
  }
  function updateCellExpandBuffer($this, segment, index, b) {
    var state = segment.b1p(index);
    if (!(state == null) ? isInterface(state, Waiter) : false) {
      if (compare(b, $this.i1p_1.kotlinx$atomicfu$value) >= 0) {
        if (segment.d1p(index, state, get_RESUMING_BY_EB())) {
          var tmp;
          if (tryResumeSender($this, state, segment, index)) {
            segment.c1p(index, get_BUFFERED());
            tmp = true;
          } else {
            segment.c1p(index, get_INTERRUPTED_SEND());
            segment.r1p(index, false);
            tmp = false;
          }
          return tmp;
        }
      }
    }
    return updateCellExpandBufferSlow($this, segment, index, b);
  }
  function updateCellExpandBufferSlow($this, segment, index, b) {
    $l$loop: while (true) {
      var state = segment.b1p(index);
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        if (compare(b, $this.i1p_1.kotlinx$atomicfu$value) < 0) {
          if (segment.d1p(index, state, new WaiterEB(state)))
            return true;
        } else {
          if (segment.d1p(index, state, get_RESUMING_BY_EB())) {
            var tmp;
            if (tryResumeSender($this, state, segment, index)) {
              segment.c1p(index, get_BUFFERED());
              tmp = true;
            } else {
              segment.c1p(index, get_INTERRUPTED_SEND());
              segment.r1p(index, false);
              tmp = false;
            }
            return tmp;
          }
        }
      } else {
        if (state === get_INTERRUPTED_SEND())
          return false;
        else {
          if (state === null) {
            if (segment.d1p(index, state, get_IN_BUFFER()))
              return true;
          } else {
            if (state === get_BUFFERED())
              return true;
            else {
              if (state === get_POISONED() || state === get_DONE_RCV() || state === get_INTERRUPTED_RCV())
                return true;
              else {
                if (state === get_CHANNEL_CLOSED())
                  return true;
                else {
                  if (state === get_RESUMING_BY_RCV())
                    continue $l$loop;
                  else {
                    // Inline function 'kotlin.error' call
                    var message = 'Unexpected cell state: ' + toString_0(state);
                    throw IllegalStateException_init_$Create$(toString(message));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts($this, nAttempts) {
    // Inline function 'kotlin.also' call
    var this_0 = $this.k1p_1.atomicfu$addAndGet$long(nAttempts);
    // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
    if (!equalsLong(bitwiseAnd(this_0, new Long(0, 1073741824)), new Long(0, 0))) {
      $l$loop: while (true) {
        // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
        var this_1 = $this.k1p_1.kotlinx$atomicfu$value;
        if (!!equalsLong(bitwiseAnd(this_1, new Long(0, 1073741824)), new Long(0, 0))) {
          break $l$loop;
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts$default($this, nAttempts, $super) {
    nAttempts = nAttempts === VOID ? new Long(1, 0) : nAttempts;
    return incCompletedExpandBufferAttempts($this, nAttempts);
  }
  function BufferedChannelIterator($outer) {
    this.h1q_1 = $outer;
    this.f1q_1 = get_NO_RECEIVE_RESULT();
    this.g1q_1 = null;
  }
  protoOf(BufferedChannelIterator).u1r = function ($completion) {
    var tmp = new $hasNextCOROUTINE$(this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(BufferedChannelIterator).z1i = function (segment, index) {
    var tmp0_safe_receiver = this.g1q_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1i(segment, index);
    }
  };
  protoOf(BufferedChannelIterator).v = function () {
    var result = this.f1q_1;
    // Inline function 'kotlin.check' call
    if (!!(result === get_NO_RECEIVE_RESULT())) {
      var message = '`hasNext()` has not been invoked';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.f1q_1 = get_NO_RECEIVE_RESULT();
    if (result === get_CHANNEL_CLOSED())
      throw recoverStackTrace_0(_get_receiveException__foorc1(this.h1q_1));
    return (result == null ? true : !(result == null)) ? result : THROW_CCE();
  };
  protoOf(BufferedChannelIterator).j1r = function (element) {
    var cont = ensureNotNull(this.g1q_1);
    this.g1q_1 = null;
    this.f1q_1 = element;
    var tmp0_safe_receiver = this.h1q_1.g1p_1;
    return tryResume0(cont, true, tmp0_safe_receiver == null ? null : bindCancellationFun(this.h1q_1, tmp0_safe_receiver, element));
  };
  protoOf(BufferedChannelIterator).v1r = function () {
    var cont = ensureNotNull(this.g1q_1);
    this.g1q_1 = null;
    this.f1q_1 = get_CHANNEL_CLOSED();
    var cause = this.h1q_1.i1q();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.y8(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.y8(tmp$ret$2);
    }
  };
  function _get_receiveException__foorc1($this) {
    var tmp0_elvis_lhs = $this.i1q();
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException('Channel was closed') : tmp0_elvis_lhs;
  }
  function invokeCloseHandler($this) {
    var tmp0 = $this.q1p_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.getAndUpdate' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        var tmp;
        if (cur === null) {
          tmp = get_CLOSE_HANDLER_CLOSED();
        } else {
          tmp = get_CLOSE_HANDLER_INVOKED();
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = cur;
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var closeHandler = tmp_0;
    if (typeof closeHandler !== 'function')
      THROW_CCE();
    closeHandler($this.i1q());
  }
  function markClosed($this) {
    var tmp0 = $this.h1p_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        var tmp;
        switch (convertToInt(shiftRight(cur, 60))) {
          case 0:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$1 = bitwiseAnd(cur, new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$1, 2);
            break;
          case 1:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$2 = bitwiseAnd(cur, new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$2, 3);
            break;
          default:
            return Unit_instance;
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$4 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$4 = Unit_instance;
    }
    return tmp$ret$4;
  }
  function markCancelled($this) {
    var tmp0 = $this.h1p_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var tmp$ret$0 = bitwiseAnd(cur, new Long(-1, 268435455));
        var upd = constructSendersAndCloseStatus(tmp$ret$0, 3);
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$2 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$2 = Unit_instance;
    }
    return tmp$ret$2;
  }
  function markCancellationStarted($this) {
    var tmp0 = $this.h1p_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        var tmp;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        if (convertToInt(shiftRight(cur, 60)) === 0) {
          // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
          var tmp$ret$1 = bitwiseAnd(cur, new Long(-1, 268435455));
          tmp = constructSendersAndCloseStatus(tmp$ret$1, 1);
        } else {
          return Unit_instance;
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$3 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$3 = Unit_instance;
    }
    return tmp$ret$3;
  }
  function completeCloseOrCancel($this) {
    $this.w1r();
  }
  function completeClose($this, sendersCur) {
    var lastSegment = closeLinkedList($this);
    if ($this.y1r()) {
      var lastBufferedCellGlobalIndex = markAllEmptyCellsAsClosed($this, lastSegment);
      if (!equalsLong(lastBufferedCellGlobalIndex, new Long(-1, -1))) {
        $this.x1r(lastBufferedCellGlobalIndex);
      }
    }
    cancelSuspendedReceiveRequests($this, lastSegment, sendersCur);
    return lastSegment;
  }
  function completeCancel($this, sendersCur) {
    var lastSegment = completeClose($this, sendersCur);
    removeUnprocessedElements($this, lastSegment);
  }
  function closeLinkedList($this) {
    var lastSegment = $this.n1p_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.let' call
    var it = $this.l1p_1.kotlinx$atomicfu$value;
    if (compare(it.x1h_1, lastSegment.x1h_1) > 0)
      lastSegment = it;
    // Inline function 'kotlin.let' call
    var it_0 = $this.m1p_1.kotlinx$atomicfu$value;
    if (compare(it_0.x1h_1, lastSegment.x1h_1) > 0)
      lastSegment = it_0;
    return close(lastSegment);
  }
  function markAllEmptyCellsAsClosed($this, lastSegment) {
    var segment = lastSegment;
    while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.x1h_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          var globalIndex = add(this_0, fromInt(index));
          if (compare(globalIndex, $this.g1r()) < 0)
            return new Long(-1, -1);
          cell_update: while (true) {
            var state = segment.b1p(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.d1p(index, state, get_CHANNEL_CLOSED())) {
                segment.t1p();
                break cell_update;
              }
            } else if (state === get_BUFFERED())
              return globalIndex;
            else
              break cell_update;
          }
        }
         while (0 <= inductionVariable);
      var tmp0_elvis_lhs = segment.c1q();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return new Long(-1, -1);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
  }
  function removeUnprocessedElements($this, lastSegment) {
    var onUndeliveredElement = $this.g1p_1;
    var undeliveredElementException = null;
    var suspendedSenders = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.x1h_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          var globalIndex = add(this_0, fromInt(index));
          update_cell: while (true) {
            var state = segment.b1p(index);
            if (state === get_DONE_RCV())
              break process_segments;
            else {
              if (state === get_BUFFERED()) {
                if (compare(globalIndex, $this.g1r()) < 0)
                  break process_segments;
                if (segment.d1p(index, state, get_CHANNEL_CLOSED())) {
                  if (!(onUndeliveredElement == null)) {
                    var element = segment.y1o(index);
                    undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element, undeliveredElementException);
                  }
                  segment.a1p(index);
                  segment.t1p();
                  break update_cell;
                }
              } else {
                if (state === get_IN_BUFFER() || state === null) {
                  if (segment.d1p(index, state, get_CHANNEL_CLOSED())) {
                    segment.t1p();
                    break update_cell;
                  }
                } else {
                  var tmp;
                  if (!(state == null) ? isInterface(state, Waiter) : false) {
                    tmp = true;
                  } else {
                    tmp = state instanceof WaiterEB;
                  }
                  if (tmp) {
                    if (compare(globalIndex, $this.g1r()) < 0)
                      break process_segments;
                    var tmp_0;
                    if (state instanceof WaiterEB) {
                      tmp_0 = state.i1r_1;
                    } else {
                      tmp_0 = (!(state == null) ? isInterface(state, Waiter) : false) ? state : THROW_CCE();
                    }
                    var sender = tmp_0;
                    if (segment.d1p(index, state, get_CHANNEL_CLOSED())) {
                      if (!(onUndeliveredElement == null)) {
                        var element_0 = segment.y1o(index);
                        undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element_0, undeliveredElementException);
                      }
                      suspendedSenders = InlineList__plus_impl_nuetvo(suspendedSenders, sender);
                      segment.a1p(index);
                      segment.t1p();
                      break update_cell;
                    }
                  } else {
                    if (state === get_RESUMING_BY_EB() || state === get_RESUMING_BY_RCV())
                      break process_segments;
                    else {
                      if (state === get_RESUMING_BY_EB())
                        continue update_cell;
                      else {
                        break update_cell;
                      }
                    }
                  }
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      var tmp0_elvis_lhs = segment.c1q();
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        break process_segments;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      segment = tmp_1;
    }
    var tmp0_0 = suspendedSenders;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = access$_get_holder__kkflen(tmp0_0);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp_2 = access$_get_holder__kkflen(tmp0_0);
          var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          resumeSenderOnCancelledChannel($this, it);
        } else {
          var tmp_3 = access$_get_holder__kkflen(tmp0_0);
          var list = tmp_3 instanceof ArrayList ? tmp_3 : THROW_CCE();
          var inductionVariable_0 = list.e1() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var it_0 = list.d1(i);
              resumeSenderOnCancelledChannel($this, it_0);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    var tmp1_safe_receiver = undeliveredElementException;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp1_safe_receiver;
    }
  }
  function cancelSuspendedReceiveRequests($this, lastSegment, sendersCounter) {
    var suspendedReceivers = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (!(segment == null)) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.x1h_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          var tmp$ret$1 = add(this_0, fromInt(index));
          if (compare(tmp$ret$1, sendersCounter) < 0)
            break process_segments;
          cell_update: while (true) {
            var state = segment.b1p(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.d1p(index, state, get_CHANNEL_CLOSED())) {
                segment.t1p();
                break cell_update;
              }
            } else {
              if (state instanceof WaiterEB) {
                if (segment.d1p(index, state, get_CHANNEL_CLOSED())) {
                  suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state.i1r_1);
                  segment.r1p(index, true);
                  break cell_update;
                }
              } else {
                if (!(state == null) ? isInterface(state, Waiter) : false) {
                  if (segment.d1p(index, state, get_CHANNEL_CLOSED())) {
                    suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state);
                    segment.r1p(index, true);
                    break cell_update;
                  }
                } else {
                  break cell_update;
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      segment = segment.c1q();
    }
    var tmp0_0 = suspendedReceivers;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = access$_get_holder__kkflen(tmp0_0);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp = access$_get_holder__kkflen(tmp0_0);
          var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
          resumeReceiverOnClosedChannel($this, it);
        } else {
          var tmp_0 = access$_get_holder__kkflen(tmp0_0);
          var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable_0 = list.e1() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var it_0 = list.d1(i);
              resumeReceiverOnClosedChannel($this, it_0);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
  }
  function resumeReceiverOnClosedChannel($this, _this__u8e3s4) {
    return resumeWaiterOnClosedChannel($this, _this__u8e3s4, true);
  }
  function resumeSenderOnCancelledChannel($this, _this__u8e3s4) {
    return resumeWaiterOnClosedChannel($this, _this__u8e3s4, false);
  }
  function resumeWaiterOnClosedChannel($this, _this__u8e3s4, receiver) {
    if (_this__u8e3s4 instanceof SendBroadcast) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = _this__u8e3s4.p1r_1;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      this_0.y8(tmp$ret$0);
    } else {
      if (isInterface(_this__u8e3s4, CancellableContinuation)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = receiver ? _get_receiveException__foorc1($this) : $this.f1r();
        var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
        _this__u8e3s4.y8(tmp$ret$2);
      } else {
        if (_this__u8e3s4 instanceof ReceiveCatching) {
          var tmp0 = _this__u8e3s4.m1r_1;
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = new ChannelResult(Companion_getInstance().z1r($this.i1q()));
          var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
          tmp0.y8(tmp$ret$4);
        } else {
          if (_this__u8e3s4 instanceof BufferedChannelIterator) {
            _this__u8e3s4.v1r();
          } else {
            if (isInterface(_this__u8e3s4, SelectInstance))
              _this__u8e3s4.n1r($this, get_CHANNEL_CLOSED());
            else {
              // Inline function 'kotlin.error' call
              var message = 'Unexpected waiter: ' + toString(_this__u8e3s4);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  }
  function _get_isClosedForSend0__kxgf9m($this, _this__u8e3s4) {
    return isClosed($this, _this__u8e3s4, false);
  }
  function _get_isClosedForReceive0__f7qknl($this, _this__u8e3s4) {
    return isClosed($this, _this__u8e3s4, true);
  }
  function isClosed($this, sendersAndCloseStatusCur, isClosedForReceive) {
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp;
    switch (convertToInt(shiftRight(sendersAndCloseStatusCur, 60))) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$1 = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
        completeClose($this, tmp$ret$1);
        tmp = isClosedForReceive ? !$this.a1s() : true;
        break;
      case 3:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$2 = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
        completeCancel($this, tmp$ret$2);
        tmp = true;
        break;
      default:
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call

        var message = 'unexpected close status: ' + convertToInt(shiftRight(sendersAndCloseStatusCur, 60));
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function isCellNonEmpty($this, segment, index, globalIndex) {
    while (true) {
      var state = segment.b1p(index);
      if (state === null || state === get_IN_BUFFER()) {
        if (segment.d1p(index, state, get_POISONED())) {
          expandBuffer($this);
          return false;
        }
      } else if (state === get_BUFFERED())
        return true;
      else if (state === get_INTERRUPTED_SEND())
        return false;
      else if (state === get_CHANNEL_CLOSED())
        return false;
      else if (state === get_DONE_RCV())
        return false;
      else if (state === get_POISONED())
        return false;
      else if (state === get_RESUMING_BY_EB())
        return true;
      else if (state === get_RESUMING_BY_RCV())
        return false;
      else
        return equalsLong(globalIndex, $this.g1r());
    }
  }
  function findSegmentSend($this, id, startFrom) {
    var tmp0 = $this.l1p_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.x1h_1, tmp2.x1h_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp2.v1p()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.w1p()) {
                  cur.j4();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp2.w1p()) {
                tmp2.j4();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$2;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      var tmp0_0 = startFrom.x1h_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      var tmp$ret$3 = multiply(tmp0_0, fromInt(other));
      if (compare(tmp$ret$3, $this.g1r()) < 0) {
        startFrom.d1q();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (compare(segment.x1h_1, id) > 0) {
        var tmp0_1 = segment.x1h_1;
        // Inline function 'kotlin.Long.times' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$4 = multiply(tmp0_1, fromInt(other_0));
        updateSendersCounterIfLower($this, tmp$ret$4);
        var tmp0_2 = segment.x1h_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$5 = multiply(tmp0_2, fromInt(other_1));
        if (compare(tmp$ret$5, $this.g1r()) < 0) {
          segment.d1q();
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function findSegmentReceive($this, id, startFrom) {
    var tmp0 = $this.m1p_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.x1h_1, tmp2.x1h_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp2.v1p()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.w1p()) {
                  cur.j4();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp2.w1p()) {
                tmp2.j4();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$2;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      var tmp0_0 = startFrom.x1h_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      var tmp$ret$3 = multiply(tmp0_0, fromInt(other));
      if (compare(tmp$ret$3, $this.j1q()) < 0) {
        startFrom.d1q();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (!_get_isRendezvousOrUnlimited__3mdufi($this)) {
        var tmp0_1 = _get_bufferEndCounter__2d4hee($this);
        // Inline function 'kotlin.Long.div' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$4 = divide(tmp0_1, fromInt(other_0));
        tmp_1 = compare(id, tmp$ret$4) <= 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp0_2 = $this.n1p_1;
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.internal.moveForward' call
          while (true) {
            var cur_0 = tmp0_2.kotlinx$atomicfu$value;
            if (compare(cur_0.x1h_1, segment.x1h_1) >= 0) {
              break $l$block_5;
            }
            if (!segment.v1p()) {
              break $l$block_5;
            }
            if (tmp0_2.atomicfu$compareAndSet(cur_0, segment)) {
              if (cur_0.w1p()) {
                cur_0.j4();
              }
              break $l$block_5;
            }
            if (segment.w1p()) {
              segment.j4();
            }
          }
        }
      }
      var tmp_2;
      if (compare(segment.x1h_1, id) > 0) {
        var tmp0_3 = segment.x1h_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$7 = multiply(tmp0_3, fromInt(other_1));
        updateReceiversCounterIfLower($this, tmp$ret$7);
        var tmp0_4 = segment.x1h_1;
        // Inline function 'kotlin.Long.times' call
        var other_2 = get_SEGMENT_SIZE();
        var tmp$ret$8 = multiply(tmp0_4, fromInt(other_2));
        if (compare(tmp$ret$8, $this.j1q()) < 0) {
          segment.d1q();
        }
        tmp_2 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_2 = segment;
      }
      tmp_0 = tmp_2;
    }
    return tmp_0;
  }
  function findSegmentBufferEnd($this, id, startFrom, currentBufferEndCounter) {
    var tmp0 = $this.n1p_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.x1h_1, tmp2.x1h_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp2.v1p()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.w1p()) {
                  cur.j4();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp2.w1p()) {
                tmp2.j4();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$2;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom);
      incCompletedExpandBufferAttempts$default($this);
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (compare(segment.x1h_1, id) > 0) {
        // Inline function 'kotlin.Long.plus' call
        var tmp_2 = add(currentBufferEndCounter, fromInt(1));
        var tmp0_0 = segment.x1h_1;
        // Inline function 'kotlin.Long.times' call
        var other = get_SEGMENT_SIZE();
        var tmp$ret$4 = multiply(tmp0_0, fromInt(other));
        if ($this.j1p_1.atomicfu$compareAndSet(tmp_2, tmp$ret$4)) {
          var tmp0_1 = segment.x1h_1;
          // Inline function 'kotlin.Long.times' call
          var other_0 = get_SEGMENT_SIZE();
          var tmp$ret$5 = multiply(tmp0_1, fromInt(other_0));
          incCompletedExpandBufferAttempts($this, subtract(tmp$ret$5, currentBufferEndCounter));
        } else {
          incCompletedExpandBufferAttempts$default($this);
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom) {
    var segment = startFrom;
    $l$loop: while (compare(segment.x1h_1, id) < 0) {
      var tmp0_elvis_lhs = segment.z1p();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
    while (true) {
      $l$loop_0: while (segment.u1p()) {
        var tmp1_elvis_lhs = segment.z1p();
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        segment = tmp_0;
      }
      var tmp0 = $this.n1p_1;
      var tmp2 = segment;
      var tmp$ret$0;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.moveForward' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          if (compare(cur.x1h_1, tmp2.x1h_1) >= 0) {
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (!tmp2.v1p()) {
            tmp$ret$0 = false;
            break $l$block_1;
          }
          if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
            if (cur.w1p()) {
              cur.j4();
            }
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (tmp2.w1p()) {
            tmp2.j4();
          }
        }
        tmp$ret$0 = Unit_instance;
      }
      if (tmp$ret$0)
        return Unit_instance;
    }
  }
  function updateSendersCounterIfLower($this, value) {
    var this_0 = $this.h1p_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var curCounter = bitwiseAnd(cur, new Long(-1, 268435455));
      if (compare(curCounter, value) >= 0)
        return Unit_instance;
      // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
      var tmp$ret$1 = convertToInt(shiftRight(cur, 60));
      var update = constructSendersAndCloseStatus(curCounter, tmp$ret$1);
      if ($this.h1p_1.atomicfu$compareAndSet(cur, update))
        return Unit_instance;
    }
    return Unit_instance;
  }
  function updateReceiversCounterIfLower($this, value) {
    var this_0 = $this.i1p_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      if (compare(cur, value) >= 0)
        return Unit_instance;
      if ($this.i1p_1.atomicfu$compareAndSet(cur, value))
        return Unit_instance;
    }
    return Unit_instance;
  }
  function bindCancellationFunResult($this, _this__u8e3s4) {
    return BufferedChannel$onCancellationChannelResultImplDoNotCall$ref($this);
  }
  function onCancellationChannelResultImplDoNotCall($this, cause, element, context) {
    callUndeliveredElement(ensureNotNull($this.g1p_1), ensureNotNull(ChannelResult__getOrNull_impl_f5e07h(element)), context);
  }
  function bindCancellationFun($this, _this__u8e3s4, element) {
    return BufferedChannel$bindCancellationFun$lambda(_this__u8e3s4, element);
  }
  function bindCancellationFun_0($this, _this__u8e3s4) {
    return BufferedChannel$onCancellationImplDoNotCall$ref($this);
  }
  function onCancellationImplDoNotCall($this, cause, element, context) {
    callUndeliveredElement(ensureNotNull($this.g1p_1), element, context);
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda($element, this$0, $select) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      var tmp;
      if (!($element === get_CHANNEL_CLOSED())) {
        callUndeliveredElement(this$0.g1p_1, ($element == null ? true : !($element == null)) ? $element : THROW_CCE(), $select.t8());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this$0) {
    return function (select, _unused_var__etf5q3, element) {
      return BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda(element, this$0, select);
    };
  }
  function BufferedChannel$onCancellationChannelResultImplDoNotCall$ref(p0) {
    var l = function (_this__u8e3s4, p0_0, p1) {
      var tmp0 = p0;
      onCancellationChannelResultImplDoNotCall(tmp0, _this__u8e3s4, p0_0.c1s_1, p1);
      return Unit_instance;
    };
    l.callableName = 'onCancellationChannelResultImplDoNotCall';
    return l;
  }
  function BufferedChannel$bindCancellationFun$lambda($this_bindCancellationFun, $element) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, context) {
      callUndeliveredElement($this_bindCancellationFun, $element, context);
      return Unit_instance;
    };
  }
  function BufferedChannel$onCancellationImplDoNotCall$ref(p0) {
    var l = function (_this__u8e3s4, p0_0, p1) {
      var tmp0 = p0;
      onCancellationImplDoNotCall(tmp0, _this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
    l.callableName = 'onCancellationImplDoNotCall';
    return l;
  }
  function $sendCOROUTINE$(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l1s_1 = _this__u8e3s4;
    this.m1s_1 = element;
  }
  protoOf($sendCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 11;
            this.x1s_1 = this.l1s_1;
            this.w1s_1 = this.m1s_1;
            this.v1s_1 = null;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.p1s_1 = this.x1s_1;
            this.s1s_1 = this.w1s_1;
            this.q1s_1 = this.v1s_1;
            this.o1s_1 = this.p1s_1.l1p_1.kotlinx$atomicfu$value;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.n8_1 = 12;
              continue $sm;
            }

            var sendersAndCloseStatusCur = this.p1s_1.h1p_1.atomicfu$getAndIncrement$long();
            var tmp_0 = this;
            tmp_0.r1s_1 = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
            this.t1s_1 = _get_isClosedForSend0__kxgf9m(this.p1s_1, sendersAndCloseStatusCur);
            var tmp0 = this.r1s_1;
            var other = get_SEGMENT_SIZE();
            var id = divide(tmp0, fromInt(other));
            var tmp_1 = this;
            var tmp0_0 = this.r1s_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_1.n1s_1 = convertToInt(modulo(tmp0_0, fromInt(other_0)));
            if (!equalsLong(this.o1s_1.x1h_1, id)) {
              var tmp0_elvis_lhs = findSegmentSend(this.p1s_1, id, this.o1s_1);
              if (tmp0_elvis_lhs == null) {
                if (this.t1s_1) {
                  this.n8_1 = 10;
                  suspendResult = onClosedSend(this.l1s_1, this.m1s_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.n8_1 = 2;
                  var tmp_2 = this;
                  continue $sm;
                }
              } else {
                this.u1s_1 = tmp0_elvis_lhs;
                this.n8_1 = 3;
                continue $sm;
              }
            } else {
              this.n8_1 = 4;
              continue $sm;
            }

          case 3:
            this.o1s_1 = this.u1s_1;
            this.n8_1 = 4;
            continue $sm;
          case 4:
            var tmp1_subject = updateCellSend(this.p1s_1, this.o1s_1, this.n1s_1, this.s1s_1, this.r1s_1, this.q1s_1, this.t1s_1);
            if (tmp1_subject === 0) {
              this.o1s_1.d1q();
              this.n8_1 = 13;
              continue $sm;
            } else {
              if (tmp1_subject === 1) {
                this.n8_1 = 13;
                continue $sm;
              } else {
                if (tmp1_subject === 2) {
                  if (this.t1s_1) {
                    this.o1s_1.t1p();
                    this.n8_1 = 9;
                    suspendResult = onClosedSend(this.l1s_1, this.m1s_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    this.n8_1 = 8;
                    continue $sm;
                  }
                } else {
                  if (tmp1_subject === 4) {
                    if (compare(this.r1s_1, this.p1s_1.g1r()) < 0) {
                      this.o1s_1.d1q();
                    }
                    this.n8_1 = 7;
                    suspendResult = onClosedSend(this.l1s_1, this.m1s_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp1_subject === 5) {
                      this.o1s_1.d1q();
                      this.n8_1 = 2;
                      continue $sm;
                    } else {
                      if (tmp1_subject === 3) {
                        var tmp0_1 = this.o1s_1;
                        var tmp2 = this.n1s_1;
                        var tmp4 = this.s1s_1;
                        var s = this.r1s_1;
                        this.n8_1 = 6;
                        suspendResult = sendOnNoWaiterSuspend(this.l1s_1, tmp0_1, tmp2, tmp4, s, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.n8_1 = 5;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 5:
            this.n8_1 = 2;
            continue $sm;
          case 6:
            this.n8_1 = 13;
            continue $sm;
          case 7:
            this.n8_1 = 13;
            continue $sm;
          case 8:
            var tmp_3 = this.q1s_1;
            var tmp2_safe_receiver = (!(tmp_3 == null) ? isInterface(tmp_3, Waiter) : false) ? tmp_3 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(this.p1s_1, tmp2_safe_receiver, this.o1s_1, this.n1s_1);
            }

            this.o1s_1;
            this.n1s_1;
            this.n8_1 = 13;
            continue $sm;
          case 9:
            this.n8_1 = 13;
            continue $sm;
          case 10:
            this.n8_1 = 13;
            continue $sm;
          case 11:
            throw this.q8_1;
          case 12:
            if (false) {
              this.n8_1 = 1;
              continue $sm;
            }

            this.n8_1 = 13;
            continue $sm;
          case 13:
            return Unit_instance;
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
  function BufferedChannel(capacity, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    this.f1p_1 = capacity;
    this.g1p_1 = onUndeliveredElement;
    // Inline function 'kotlin.require' call
    if (!(this.f1p_1 >= 0)) {
      var message = 'Invalid channel capacity: ' + this.f1p_1 + ', should be >=0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.h1p_1 = atomic$long$1(new Long(0, 0));
    this.i1p_1 = atomic$long$1(new Long(0, 0));
    this.j1p_1 = atomic$long$1(initialBufferEnd(this.f1p_1));
    this.k1p_1 = atomic$long$1(_get_bufferEndCounter__2d4hee(this));
    var firstSegment = new ChannelSegment(new Long(0, 0), null, this, 3);
    this.l1p_1 = atomic$ref$1(firstSegment);
    this.m1p_1 = atomic$ref$1(firstSegment);
    var tmp = this;
    var tmp_0;
    if (_get_isRendezvousOrUnlimited__3mdufi(this)) {
      var tmp_1 = get_NULL_SEGMENT();
      tmp_0 = tmp_1 instanceof ChannelSegment ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = firstSegment;
    }
    tmp.n1p_1 = atomic$ref$1(tmp_0);
    var tmp_2 = this;
    var tmp_3;
    if (this.g1p_1 == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this);
    }
    tmp_2.o1p_1 = tmp_3;
    this.p1p_1 = atomic$ref$1(get_NO_CLOSE_CAUSE());
    this.q1p_1 = atomic$ref$1(null);
  }
  protoOf(BufferedChannel).j1q = function () {
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var this_0 = this.h1p_1.kotlinx$atomicfu$value;
    return bitwiseAnd(this_0, new Long(-1, 268435455));
  };
  protoOf(BufferedChannel).g1r = function () {
    return this.i1p_1.kotlinx$atomicfu$value;
  };
  protoOf(BufferedChannel).y1s = function (element, $completion) {
    var tmp = new $sendCOROUTINE$(this, element, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(BufferedChannel).z1s = function (element) {
    if (shouldSendSuspend0(this, this.h1p_1.kotlinx$atomicfu$value))
      return Companion_getInstance().a1t();
    var tmp4 = get_INTERRUPTED_SEND();
    var tmp$ret$4;
    $l$block_4: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = this.l1p_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = this.h1p_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
        var closed = _get_isClosedForSend0__kxgf9m(this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = divide(s, fromInt(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$2 = modulo(s, fromInt(other_0));
        var i = convertToInt(tmp$ret$2);
        if (!equalsLong(segment.x1h_1, id)) {
          var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              tmp$ret$4 = Companion_getInstance().z1r(this.f1r());
              break $l$block_4;
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        switch (updateCellSend(this, segment, i, element, s, tmp4, closed)) {
          case 0:
            segment.d1q();
            tmp$ret$4 = Companion_getInstance().l1r(Unit_instance);
            break $l$block_4;
          case 1:
            tmp$ret$4 = Companion_getInstance().l1r(Unit_instance);
            break $l$block_4;
          case 2:
            if (closed) {
              segment.t1p();
              tmp$ret$4 = Companion_getInstance().z1r(this.f1r());
              break $l$block_4;
            }

            var tmp2_safe_receiver = (!(tmp4 == null) ? isInterface(tmp4, Waiter) : false) ? tmp4 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(this, tmp2_safe_receiver, segment, i);
            }

            segment.t1p();
            tmp$ret$4 = Companion_getInstance().a1t();
            break $l$block_4;
          case 4:
            if (compare(s, this.g1r()) < 0) {
              segment.d1q();
            }

            tmp$ret$4 = Companion_getInstance().z1r(this.f1r());
            break $l$block_4;
          case 5:
            segment.d1q();
            continue $l$loop_0;
          case 3:
            var message = 'unexpected';
            throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(BufferedChannel).b1t = function (element) {
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
    var waiter = get_BUFFERED();
    var segment = this.l1p_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var sendersAndCloseStatusCur = this.h1p_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var s = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
      var closed = _get_isClosedForSend0__kxgf9m(this, sendersAndCloseStatusCur);
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = divide(s, fromInt(other));
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var tmp$ret$2 = modulo(s, fromInt(other_0));
      var i = convertToInt(tmp$ret$2);
      if (!equalsLong(segment.x1h_1, id)) {
        var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (closed) {
            return Companion_getInstance().z1r(this.f1r());
          } else {
            continue $l$loop_0;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      switch (updateCellSend(this, segment, i, element, s, waiter, closed)) {
        case 0:
          segment.d1q();
          return Companion_getInstance().l1r(Unit_instance);
        case 1:
          return Companion_getInstance().l1r(Unit_instance);
        case 2:
          if (closed) {
            segment.t1p();
            return Companion_getInstance().z1r(this.f1r());
          }

          var tmp2_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
          if (tmp2_safe_receiver == null)
            null;
          else {
            prepareSenderForSuspension(this, tmp2_safe_receiver, segment, i);
          }

          var tmp0 = segment.x1h_1;
          // Inline function 'kotlin.Long.times' call

          var other_1 = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call

          var this_0 = multiply(tmp0, fromInt(other_1));
          var tmp$ret$5 = add(this_0, fromInt(i));
          this.x1r(tmp$ret$5);
          return Companion_getInstance().l1r(Unit_instance);
        case 4:
          if (compare(s, this.g1r()) < 0) {
            segment.d1q();
          }

          return Companion_getInstance().z1r(this.f1r());
        case 5:
          segment.d1q();
          continue $l$loop_0;
        case 3:
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp$ret$3;
  };
  protoOf(BufferedChannel).o1r = function () {
  };
  protoOf(BufferedChannel).h1r = function () {
  };
  protoOf(BufferedChannel).x1r = function (globalCellIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    var segment = this.m1p_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var r = this.i1p_1.kotlinx$atomicfu$value;
      // Inline function 'kotlin.Long.plus' call
      var other = this.f1p_1;
      var tmp0 = add(r, fromInt(other));
      // Inline function 'kotlin.math.max' call
      var b = _get_bufferEndCounter__2d4hee(this);
      var tmp$ret$2 = compare(tmp0, b) >= 0 ? tmp0 : b;
      if (compare(globalCellIndex, tmp$ret$2) < 0)
        return Unit_instance;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$3 = add(r, fromInt(1));
      if (!this.i1p_1.atomicfu$compareAndSet(r, tmp$ret$3))
        continue $l$loop_0;
      // Inline function 'kotlin.Long.div' call
      var other_0 = get_SEGMENT_SIZE();
      var id = divide(r, fromInt(other_0));
      // Inline function 'kotlin.Long.rem' call
      var other_1 = get_SEGMENT_SIZE();
      var tmp$ret$5 = modulo(r, fromInt(other_1));
      var i = convertToInt(tmp$ret$5);
      if (!equalsLong(segment.x1h_1, id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      var updCellResult = updateCellReceive(this, segment, i, r, null);
      if (updCellResult === get_FAILED()) {
        if (compare(r, this.j1q()) < 0) {
          segment.d1q();
        }
      } else {
        segment.d1q();
        var tmp1_safe_receiver = this.g1p_1;
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE());
        }
        var tmp2_safe_receiver = tmp_0;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          throw tmp2_safe_receiver;
        }
      }
    }
  };
  protoOf(BufferedChannel).s1p = function (globalIndex) {
    if (_get_isRendezvousOrUnlimited__3mdufi(this))
      return Unit_instance;
    while (compare(_get_bufferEndCounter__2d4hee(this), globalIndex) <= 0) {
    }
    // Inline function 'kotlin.repeat' call
    var times = get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS();
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = _get_bufferEndCounter__2d4hee(this);
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var this_0 = this.k1p_1.kotlinx$atomicfu$value;
        var ebCompleted = bitwiseAnd(this_0, new Long(-1, 1073741823));
        if (equalsLong(b, ebCompleted) && equalsLong(b, _get_bufferEndCounter__2d4hee(this)))
          return Unit_instance;
      }
       while (inductionVariable < times);
    var tmp0 = this.k1p_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var tmp$ret$3 = bitwiseAnd(cur, new Long(-1, 1073741823));
        var upd = constructEBCompletedAndPauseFlag(tmp$ret$3, true);
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    while (true) {
      var b_0 = _get_bufferEndCounter__2d4hee(this);
      var ebCompletedAndBit = this.k1p_1.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
      var ebCompleted_0 = bitwiseAnd(ebCompletedAndBit, new Long(-1, 1073741823));
      // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
      var pauseExpandBuffers = !equalsLong(bitwiseAnd(ebCompletedAndBit, new Long(0, 1073741824)), new Long(0, 0));
      if (equalsLong(b_0, ebCompleted_0) && equalsLong(b_0, _get_bufferEndCounter__2d4hee(this))) {
        var tmp0_0 = this.k1p_1;
        $l$block_0: {
          // Inline function 'kotlinx.atomicfu.update' call
          while (true) {
            var cur_0 = tmp0_0.kotlinx$atomicfu$value;
            // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
            var tmp$ret$8 = bitwiseAnd(cur_0, new Long(-1, 1073741823));
            var upd_0 = constructEBCompletedAndPauseFlag(tmp$ret$8, false);
            if (tmp0_0.atomicfu$compareAndSet(cur_0, upd_0)) {
              break $l$block_0;
            }
          }
        }
        return Unit_instance;
      }
      if (!pauseExpandBuffers) {
        this.k1p_1.atomicfu$compareAndSet(ebCompletedAndBit, constructEBCompletedAndPauseFlag(ebCompleted_0, true));
      }
    }
  };
  protoOf(BufferedChannel).t = function () {
    return new BufferedChannelIterator(this);
  };
  protoOf(BufferedChannel).i1q = function () {
    var tmp = this.p1p_1.kotlinx$atomicfu$value;
    return (tmp == null ? true : tmp instanceof Error) ? tmp : THROW_CCE();
  };
  protoOf(BufferedChannel).f1r = function () {
    var tmp0_elvis_lhs = this.i1q();
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException('Channel was closed') : tmp0_elvis_lhs;
  };
  protoOf(BufferedChannel).c1t = function () {
  };
  protoOf(BufferedChannel).d1t = function (cause) {
    return this.e1t(cause, false);
  };
  protoOf(BufferedChannel).v1e = function (cause) {
    this.g1t(cause);
  };
  protoOf(BufferedChannel).g1t = function (cause) {
    return this.e1t(cause == null ? CancellationException_init_$Create$('Channel was cancelled') : cause, true);
  };
  protoOf(BufferedChannel).e1t = function (cause, cancel) {
    if (cancel) {
      markCancellationStarted(this);
    }
    var closedByThisOperation = this.p1p_1.atomicfu$compareAndSet(get_NO_CLOSE_CAUSE(), cause);
    if (cancel) {
      markCancelled(this);
    } else {
      markClosed(this);
    }
    completeCloseOrCancel(this);
    // Inline function 'kotlin.also' call
    this.c1t();
    if (closedByThisOperation) {
      invokeCloseHandler(this);
    }
    return closedByThisOperation;
  };
  protoOf(BufferedChannel).y1r = function () {
    return false;
  };
  protoOf(BufferedChannel).w1r = function () {
    return _get_isClosedForSend0__kxgf9m(this, this.h1p_1.kotlinx$atomicfu$value);
  };
  protoOf(BufferedChannel).k1q = function () {
    return _get_isClosedForReceive0__f7qknl(this, this.h1p_1.kotlinx$atomicfu$value);
  };
  protoOf(BufferedChannel).a1s = function () {
    $l$loop: while (true) {
      var segment = this.m1p_1.kotlinx$atomicfu$value;
      var r = this.g1r();
      var s = this.j1q();
      if (compare(s, r) <= 0)
        return false;
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = divide(r, fromInt(other));
      if (!equalsLong(segment.x1h_1, id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (compare(this.m1p_1.kotlinx$atomicfu$value.x1h_1, id) < 0) {
            return false;
          } else {
            continue $l$loop;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      segment.d1q();
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var tmp$ret$1 = modulo(r, fromInt(other_0));
      var i = convertToInt(tmp$ret$1);
      if (isCellNonEmpty(this, segment, i, r))
        return true;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = add(r, fromInt(1));
      this.i1p_1.atomicfu$compareAndSet(r, tmp$ret$2);
    }
  };
  protoOf(BufferedChannel).toString = function () {
    var sb = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var this_0 = this.h1p_1.kotlinx$atomicfu$value;
    var tmp0_subject = convertToInt(shiftRight(this_0, 60));
    if (tmp0_subject === 2) {
      sb.q('closed,');
    } else if (tmp0_subject === 3) {
      sb.q('cancelled,');
    }
    sb.q('capacity=' + this.f1p_1 + ',');
    sb.q('data=[');
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = listOf([this.m1p_1.kotlinx$atomicfu$value, this.l1p_1.kotlinx$atomicfu$value, this.n1p_1.kotlinx$atomicfu$value]);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (!(element === get_NULL_SEGMENT())) {
        destination.b1(element);
      }
    }
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      var iterator = destination.t();
      if (!iterator.u())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.v();
      if (!iterator.u()) {
        tmp$ret$4 = minElem;
        break $l$block;
      }
      var minValue = minElem.x1h_1;
      do {
        var e = iterator.v();
        var v = e.x1h_1;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.u());
      tmp$ret$4 = minElem;
    }
    var firstSegment = tmp$ret$4;
    var r = this.g1r();
    var s = this.j1q();
    var segment = firstSegment;
    append_elements: while (true) {
      var inductionVariable = 0;
      var last_0 = get_SEGMENT_SIZE();
      if (inductionVariable < last_0)
        process_cell: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_0 = segment.x1h_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_1 = multiply(tmp0_0, fromInt(other));
          var globalCellIndex = add(this_1, fromInt(i));
          if (compare(globalCellIndex, s) >= 0 && compare(globalCellIndex, r) >= 0)
            break append_elements;
          var cellState = segment.b1p(i);
          var element_0 = segment.y1o(i);
          var tmp;
          if (!(cellState == null) ? isInterface(cellState, CancellableContinuation) : false) {
            tmp = compare(globalCellIndex, r) < 0 && compare(globalCellIndex, s) >= 0 ? 'receive' : compare(globalCellIndex, s) < 0 && compare(globalCellIndex, r) >= 0 ? 'send' : 'cont';
          } else {
            if (!(cellState == null) ? isInterface(cellState, SelectInstance) : false) {
              tmp = compare(globalCellIndex, r) < 0 && compare(globalCellIndex, s) >= 0 ? 'onReceive' : compare(globalCellIndex, s) < 0 && compare(globalCellIndex, r) >= 0 ? 'onSend' : 'select';
            } else {
              if (cellState instanceof ReceiveCatching) {
                tmp = 'receiveCatching';
              } else {
                if (cellState instanceof SendBroadcast) {
                  tmp = 'sendBroadcast';
                } else {
                  if (cellState instanceof WaiterEB) {
                    tmp = 'EB(' + cellState.toString() + ')';
                  } else {
                    if (equals(cellState, get_RESUMING_BY_RCV()) || equals(cellState, get_RESUMING_BY_EB())) {
                      tmp = 'resuming_sender';
                    } else {
                      if (cellState == null || (equals(cellState, get_IN_BUFFER()) || equals(cellState, get_DONE_RCV())) || (equals(cellState, get_POISONED()) || equals(cellState, get_INTERRUPTED_RCV()) || (equals(cellState, get_INTERRUPTED_SEND()) || equals(cellState, get_CHANNEL_CLOSED())))) {
                        continue process_cell;
                      } else {
                        tmp = toString(cellState);
                      }
                    }
                  }
                }
              }
            }
          }
          var cellStateString = tmp;
          if (!(element_0 == null)) {
            sb.q('(' + cellStateString + ',' + toString_0(element_0) + '),');
          } else {
            sb.q(cellStateString + ',');
          }
        }
         while (inductionVariable < last_0);
      var tmp2_elvis_lhs = segment.z1p();
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        break append_elements;
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }
      segment = tmp_0;
    }
    if (last(sb) === _Char___init__impl__6a9atx(44)) {
      sb.ic(sb.a() - 1 | 0);
    }
    sb.q(']');
    return sb.toString();
  };
  function WaiterEB(waiter) {
    this.i1r_1 = waiter;
  }
  protoOf(WaiterEB).toString = function () {
    return 'WaiterEB(' + toString(this.i1r_1) + ')';
  };
  function initialBufferEnd(capacity) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    switch (capacity) {
      case 0:
        return new Long(0, 0);
      case 2147483647:
        return new Long(-1, 2147483647);
      default:
        return fromInt(capacity);
    }
  }
  function ReceiveCatching() {
  }
  function tryResume0(_this__u8e3s4, value, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_BufferedChannel_kt__d6uc4y();
    // Inline function 'kotlin.let' call
    var token = _this__u8e3s4.v1g(value, null, onCancellation);
    var tmp;
    if (!(token == null)) {
      _this__u8e3s4.w1g(token);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function constructEBCompletedAndPauseFlag(counter, pauseEB) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return add(pauseEB ? new Long(0, 1073741824) : new Long(0, 0), counter);
  }
  function constructSendersAndCloseStatus(counter, closeStatus) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return add(shiftLeft(fromInt(closeStatus), 60), counter);
  }
  function createSegmentFunction() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return createSegment$ref();
  }
  function createSegment(id, prev) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return new ChannelSegment(id, prev, prev.v1o(), 0);
  }
  function createSegment$ref() {
    var l = function (p0, p1) {
      return createSegment(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  var properties_initialized_BufferedChannel_kt_58tjvw;
  function _init_properties_BufferedChannel_kt__d6uc4y() {
    if (!properties_initialized_BufferedChannel_kt_58tjvw) {
      properties_initialized_BufferedChannel_kt_58tjvw = true;
      NULL_SEGMENT = new ChannelSegment(new Long(-1, -1), null, null, 0);
      SEGMENT_SIZE = systemProp('kotlinx.coroutines.bufferedChannel.segmentSize', 32);
      EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS = systemProp('kotlinx.coroutines.bufferedChannel.expandBufferCompletionWaitIterations', 10000);
      BUFFERED = new Symbol('BUFFERED');
      IN_BUFFER = new Symbol('SHOULD_BUFFER');
      RESUMING_BY_RCV = new Symbol('S_RESUMING_BY_RCV');
      RESUMING_BY_EB = new Symbol('RESUMING_BY_EB');
      POISONED = new Symbol('POISONED');
      DONE_RCV = new Symbol('DONE_RCV');
      INTERRUPTED_SEND = new Symbol('INTERRUPTED_SEND');
      INTERRUPTED_RCV = new Symbol('INTERRUPTED_RCV');
      CHANNEL_CLOSED = new Symbol('CHANNEL_CLOSED');
      SUSPEND = new Symbol('SUSPEND');
      SUSPEND_NO_WAITER = new Symbol('SUSPEND_NO_WAITER');
      FAILED = new Symbol('FAILED');
      NO_RECEIVE_RESULT = new Symbol('NO_RECEIVE_RESULT');
      CLOSE_HANDLER_CLOSED = new Symbol('CLOSE_HANDLER_CLOSED');
      CLOSE_HANDLER_INVOKED = new Symbol('CLOSE_HANDLER_INVOKED');
      NO_CLOSE_CAUSE = new Symbol('NO_CLOSE_CAUSE');
    }
  }
  function Factory() {
    Factory_instance = this;
    this.i1t_1 = 2147483647;
    this.j1t_1 = 0;
    this.k1t_1 = -1;
    this.l1t_1 = -2;
    this.m1t_1 = -3;
    this.n1t_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.o1t_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel(capacity, onBufferOverflow, onUndeliveredElement) {
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    var tmp;
    switch (capacity) {
      case 0:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(0, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      case -1:
        // Inline function 'kotlin.require' call

        if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
          var message = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }

        tmp = new ConflatedBufferedChannel(1, BufferOverflow_DROP_OLDEST_getInstance(), onUndeliveredElement);
        break;
      case 2147483647:
        tmp = new BufferedChannel(2147483647, onUndeliveredElement);
        break;
      case -2:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(Factory_getInstance().o1t_1, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      default:
        tmp = onBufferOverflow === BufferOverflow_SUSPEND_getInstance() ? new BufferedChannel(capacity, onUndeliveredElement) : new ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement);
        break;
    }
    return tmp;
  }
  function ReceiveChannel() {
  }
  function SendChannel() {
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed;
  }
  function ChannelResult__getOrNull_impl_f5e07h($this) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp_0 instanceof Failed)) {
      var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw($this);
      tmp = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p1t_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed(cause) {
    Failed.call(this);
    this.p1t_1 = cause;
  }
  protoOf(Closed).equals = function (other) {
    var tmp;
    if (other instanceof Closed) {
      tmp = equals(this.p1t_1, other.p1t_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.p1t_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(Closed).toString = function () {
    return 'Closed(' + toString_0(this.p1t_1) + ')';
  };
  function Companion() {
    Companion_instance_0 = this;
    this.k1r_1 = new Failed();
  }
  protoOf(Companion).l1r = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).a1t = function () {
    return _ChannelResult___init__impl__siwsuf(this.k1r_1);
  };
  protoOf(Companion).z1r = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed(cause));
  };
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp;
    if (_ChannelResult___get_holder__impl__pm9gzw($this) instanceof Closed) {
      tmp = _ChannelResult___get_holder__impl__pm9gzw($this).toString();
    } else {
      tmp = 'Value(' + toString_0(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.c1s_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance();
    this.c1s_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.c1s_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.c1s_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.c1s_1, other);
  };
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this.t1t_1 = _channel;
  }
  protoOf(ChannelCoroutine).v1e = function (cause) {
    if (this.i1e())
      return Unit_instance;
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.q1d() : null, null, this);
    } else {
      tmp = cause;
    }
    this.x1e(tmp);
  };
  protoOf(ChannelCoroutine).h1t = function (cause, $super) {
    return this.w1e(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).x1e = function (cause) {
    var exception = this.n1e(cause);
    this.t1t_1.v1e(exception);
    this.a1f(exception);
  };
  protoOf(ChannelCoroutine).y1s = function (element, $completion) {
    return this.t1t_1.y1s(element, $completion);
  };
  protoOf(ChannelCoroutine).z1s = function (element) {
    return this.t1t_1.z1s(element);
  };
  protoOf(ChannelCoroutine).d1t = function (cause) {
    return this.t1t_1.d1t(cause);
  };
  protoOf(ChannelCoroutine).t = function () {
    return this.t1t_1.t();
  };
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp;
    if (cause == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
      tmp = tmp0_elvis_lhs == null ? CancellationException_0('Channel was consumed, consumer had failed', cause) : tmp0_elvis_lhs;
    }
    _this__u8e3s4.v1e(tmp);
  }
  function trySendImpl($this, element, isSendOp) {
    return $this.h1u_1 === BufferOverflow_DROP_LATEST_getInstance() ? trySendDropLatest($this, element, isSendOp) : $this.b1t(element);
  }
  function trySendDropLatest($this, element, isSendOp) {
    var result = protoOf(BufferedChannel).z1s.call($this, element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result) || _ChannelResult___get_isClosed__impl__mg7kuu(result))
      return result;
    if (isSendOp) {
      var tmp0_safe_receiver = $this.g1p_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        throw tmp1_safe_receiver;
      }
    }
    return Companion_getInstance().l1r(Unit_instance);
  }
  function ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    BufferedChannel.call(this, capacity, onUndeliveredElement);
    this.g1u_1 = capacity;
    this.h1u_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    if (!!(this.h1u_1 === BufferOverflow_SUSPEND_getInstance())) {
      var message = 'This implementation does not support suspension for senders, use ' + getKClass(BufferedChannel).o() + ' instead';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.g1u_1 >= 1)) {
      var message_0 = 'Buffered channel capacity must be at least 1, but ' + this.g1u_1 + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(ConflatedBufferedChannel).y1r = function () {
    return this.h1u_1.equals(BufferOverflow_DROP_OLDEST_getInstance());
  };
  protoOf(ConflatedBufferedChannel).y1s = function (element, $completion) {
    // Inline function 'kotlinx.coroutines.channels.onClosed' call
    var this_0 = trySendImpl(this, element, true);
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(this_0);
    if (tmp instanceof Closed) {
      ChannelResult__exceptionOrNull_impl_16ei30(this_0);
      var tmp0_safe_receiver = this.g1p_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, this.f1r());
        throw tmp1_safe_receiver;
      }
      throw this.f1r();
    }
    return Unit_instance;
  };
  protoOf(ConflatedBufferedChannel).z1s = function (element) {
    return trySendImpl(this, element, false);
  };
  function produce(_this__u8e3s4, context, capacity, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    return produce_0(_this__u8e3s4, context, capacity, BufferOverflow_SUSPEND_getInstance(), CoroutineStart_DEFAULT_getInstance(), null, block);
  }
  function ProducerScope() {
  }
  function produce_0(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    onCompletion = onCompletion === VOID ? null : onCompletion;
    var channel = Channel(capacity, onBufferOverflow);
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.o1e(onCompletion);
    }
    coroutine.a1e(start, coroutine, block);
    return coroutine;
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  protoOf(ProducerCoroutine).n1d = function () {
    return protoOf(ChannelCoroutine).n1d.call(this);
  };
  protoOf(ProducerCoroutine).m1u = function (value) {
    this.t1t_1.f1t();
  };
  protoOf(ProducerCoroutine).o1d = function (value) {
    return this.m1u(value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(ProducerCoroutine).p1d = function (cause, handled) {
    var processed = this.t1t_1.d1t(cause);
    if (!processed && !handled) {
      handleCoroutineException(this.l1d_1, cause);
    }
  };
  protoOf(ProducerCoroutine).h1t = function (cause, $super) {
    return this.w1e(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  function Segment(id, prev, pointers) {
    ConcurrentLinkedListNode.call(this, prev);
    this.x1h_1 = id;
    this.y1h_1 = atomic$int$1(pointers << 16);
  }
  protoOf(Segment).u1p = function () {
    return this.y1h_1.kotlinx$atomicfu$value === this.w1o() && !this.b1q();
  };
  protoOf(Segment).v1p = function () {
    var tmp0 = this.y1h_1;
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.addConditionally' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        if (!(!(cur === this.w1o()) || this.b1q())) {
          tmp$ret$1 = false;
          break $l$block_0;
        }
        if (tmp0.atomicfu$compareAndSet(cur, cur + 65536 | 0)) {
          tmp$ret$1 = true;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(Segment).w1p = function () {
    return this.y1h_1.atomicfu$addAndGet(-65536) === this.w1o() && !this.b1q();
  };
  protoOf(Segment).t1p = function () {
    if (this.y1h_1.atomicfu$incrementAndGet() === this.w1o()) {
      this.j4();
    }
  };
  function close(_this__u8e3s4) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      var it = access$_get_nextOrClosed__ywzond(this_0);
      var tmp;
      if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
        return cur;
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (next === null) {
        if (cur.e1q())
          return cur;
      } else {
        cur = next;
      }
    }
  }
  function _SegmentOrClosed___init__impl__jnexvb(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _SegmentOrClosed___get_isClosed__impl__qmxmlo($this) {
    return _get_value__a43j40($this) === get_CLOSED();
  }
  function _SegmentOrClosed___get_segment__impl__jvcr9l($this) {
    var tmp;
    if (_get_value__a43j40($this) === get_CLOSED()) {
      var message = 'Does not contain segment';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      var tmp_0 = _get_value__a43j40($this);
      tmp = tmp_0 instanceof Segment ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function SegmentOrClosed__toString_impl_pzb2an($this) {
    return 'SegmentOrClosed(value=' + toString_0($this) + ')';
  }
  function SegmentOrClosed__hashCode_impl_4855hs($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function SegmentOrClosed__equals_impl_6erq1g($this, other) {
    if (!(other instanceof SegmentOrClosed))
      return false;
    var tmp0_other_with_cast = other instanceof SegmentOrClosed ? other.b1s_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SegmentOrClosed(value) {
    this.b1s_1 = value;
  }
  protoOf(SegmentOrClosed).toString = function () {
    return SegmentOrClosed__toString_impl_pzb2an(this.b1s_1);
  };
  protoOf(SegmentOrClosed).hashCode = function () {
    return SegmentOrClosed__hashCode_impl_4855hs(this.b1s_1);
  };
  protoOf(SegmentOrClosed).equals = function (other) {
    return SegmentOrClosed__equals_impl_6erq1g(this.b1s_1, other);
  };
  function _get_nextOrClosed__w0gmuv($this) {
    return $this.x1p_1.kotlinx$atomicfu$value;
  }
  function _get_aliveSegmentLeft__mr4ndu($this) {
    var cur = $this.c1q();
    while (!(cur === null) && cur.u1p())
      cur = cur.y1p_1.kotlinx$atomicfu$value;
    return cur;
  }
  function _get_aliveSegmentRight__7ulr0b($this) {
    // Inline function 'kotlinx.coroutines.assert' call
    var cur = ensureNotNull($this.z1p());
    while (cur.u1p()) {
      var tmp0_elvis_lhs = cur.z1p();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return cur;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      cur = tmp;
    }
    return cur;
  }
  function access$_get_nextOrClosed__ywzond($this) {
    return _get_nextOrClosed__w0gmuv($this);
  }
  function ConcurrentLinkedListNode(prev) {
    this.x1p_1 = atomic$ref$1(null);
    this.y1p_1 = atomic$ref$1(prev);
  }
  protoOf(ConcurrentLinkedListNode).z1p = function () {
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
    // Inline function 'kotlin.let' call
    var it = access$_get_nextOrClosed__ywzond(this);
    var tmp;
    if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
      return null;
    } else {
      tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
    }
    return tmp;
  };
  protoOf(ConcurrentLinkedListNode).a1q = function (value) {
    return this.x1p_1.atomicfu$compareAndSet(null, value);
  };
  protoOf(ConcurrentLinkedListNode).b1q = function () {
    return this.z1p() == null;
  };
  protoOf(ConcurrentLinkedListNode).c1q = function () {
    return this.y1p_1.kotlinx$atomicfu$value;
  };
  protoOf(ConcurrentLinkedListNode).d1q = function () {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    this.y1p_1.kotlinx$atomicfu$value = null;
  };
  protoOf(ConcurrentLinkedListNode).e1q = function () {
    return this.x1p_1.atomicfu$compareAndSet(null, get_CLOSED());
  };
  protoOf(ConcurrentLinkedListNode).j4 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.b1q())
      return Unit_instance;
    $l$loop_0: while (true) {
      var prev = _get_aliveSegmentLeft__mr4ndu(this);
      var next = _get_aliveSegmentRight__7ulr0b(this);
      var tmp0 = next.y1p_1;
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          var upd = cur === null ? null : prev;
          if (tmp0.atomicfu$compareAndSet(cur, upd)) {
            break $l$block;
          }
        }
      }
      if (!(prev === null))
        prev.x1p_1.kotlinx$atomicfu$value = next;
      if (next.u1p() && !next.b1q())
        continue $l$loop_0;
      if (!(prev === null) && prev.u1p())
        continue $l$loop_0;
      return Unit_instance;
    }
  };
  function findSegmentInternal(_this__u8e3s4, id, createNewSegment) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    $l$loop: while (compare(cur.x1h_1, id) < 0 || cur.u1p()) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      var it = access$_get_nextOrClosed__ywzond(this_0);
      var tmp;
      if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
        return _SegmentOrClosed___init__impl__jnexvb(get_CLOSED());
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (!(next == null)) {
        cur = next;
        continue $l$loop;
      }
      // Inline function 'kotlin.Long.plus' call
      var this_1 = cur.x1h_1;
      var newTail = createNewSegment(add(this_1, fromInt(1)), cur);
      if (cur.a1q(newTail)) {
        if (cur.u1p()) {
          cur.j4();
        }
        cur = newTail;
      }
    }
    return _SegmentOrClosed___init__impl__jnexvb(cur);
  }
  function access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy() {
    return get_CLOSED();
  }
  var properties_initialized_ConcurrentLinkedList_kt_kwt434;
  function _init_properties_ConcurrentLinkedList_kt__5gcgzy() {
    if (!properties_initialized_ConcurrentLinkedList_kt_kwt434) {
      properties_initialized_ConcurrentLinkedList_kt_kwt434 = true;
      CLOSED = new Symbol('CLOSED');
    }
  }
  function handleUncaughtCoroutineException(context, exception) {
    var _iterator__ex2g4s = get_platformExceptionHandlers().t();
    while (_iterator__ex2g4s.u()) {
      var handler = _iterator__ex2g4s.v();
      try {
        handler.u1k(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _unused_var__etf5q3 = $p;
          return Unit_instance;
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith' call
      var state = toState_0(result);
      if (safeIsDispatchNeeded(_this__u8e3s4.k1h_1, _this__u8e3s4.t8())) {
        _this__u8e3s4.m1h_1 = state;
        _this__u8e3s4.t1h_1 = 1;
        safeDispatch(_this__u8e3s4.k1h_1, _this__u8e3s4.t8(), _this__u8e3s4);
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().l1l();
          if (false && eventLoop.g1l()) {
            break $l$block;
          }
          var tmp_0;
          if (eventLoop.f1l()) {
            _this__u8e3s4.m1h_1 = state;
            _this__u8e3s4.t1h_1 = 1;
            eventLoop.e1l(_this__u8e3s4);
            tmp_0 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.h1l(true);
            try {
              var tmp$ret$4;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.t8().a9(Key_instance_3);
                if (!(job == null) && !job.n1d()) {
                  var cause = job.l1e();
                  _this__u8e3s4.n1i(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.y8(tmp$ret$2);
                  tmp$ret$4 = true;
                  break $l$block_0;
                }
                tmp$ret$4 = false;
              }
              if (!tmp$ret$4) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                _this__u8e3s4.l1h_1;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.n1h_1;
                _this__u8e3s4.l1h_1.y8(result);
              }
              $l$loop: while (eventLoop.d1l()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.h1j(e);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.i1l(true);
            }
            tmp_0 = false;
          }
        }
      }
      tmp = Unit_instance;
    } else {
      _this__u8e3s4.y8(result);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.o1h_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.k1h_1 = dispatcher;
    this.l1h_1 = continuation;
    this.m1h_1 = get_UNDEFINED();
    this.n1h_1 = threadContextElements(this.t8());
    this.o1h_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).s1h = function () {
    return !(this.o1h_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).n1u = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.o1h_1;
    while (true) {
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).s1k = function () {
    this.n1u();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.j1i();
    }
  };
  protoOf(DispatchedContinuation).p1h = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.o1h_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state === null) {
        this.o1h_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (state instanceof CancellableContinuationImpl) {
          if (this.o1h_1.atomicfu$compareAndSet(state, get_REUSABLE_CLAIMED())) {
            return state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          }
        } else {
          if (state !== get_REUSABLE_CLAIMED()) {
            if (!(state instanceof Error)) {
              // Inline function 'kotlin.error' call
              var message = 'Inconsistent state ' + toString_0(state);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  };
  protoOf(DispatchedContinuation).v1i = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.o1h_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.o1h_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.require' call
          if (!this.o1h_1.atomicfu$compareAndSet(state, null)) {
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return state;
        } else {
          // Inline function 'kotlin.error' call
          var message_0 = 'Inconsistent state ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).u1h = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.o1h_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.o1h_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.o1h_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).m1i = function () {
    var state = this.m1h_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.m1h_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).k1i = function () {
    return this;
  };
  protoOf(DispatchedContinuation).y8 = function (result) {
    var state = toState_0(result);
    if (safeIsDispatchNeeded(this.k1h_1, this.t8())) {
      this.m1h_1 = state;
      this.t1h_1 = 0;
      safeDispatch(this.k1h_1, this.t8(), this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().l1l();
        if (false && eventLoop.g1l()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.f1l()) {
          this.m1h_1 = state;
          this.t1h_1 = 0;
          eventLoop.e1l(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.h1l(true);
          try {
            this.t8();
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.n1h_1;
            this.l1h_1.y8(result);
            $l$loop: while (eventLoop.d1l()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.h1j(e);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.i1l(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.k1h_1.toString() + ', ' + toDebugString(this.l1h_1) + ']';
  };
  protoOf(DispatchedContinuation).t8 = function () {
    return this.l1h_1.t8();
  };
  function safeDispatch(_this__u8e3s4, context, runnable) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    try {
      _this__u8e3s4.r1k(context, runnable);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        throw new DispatchException(e, _this__u8e3s4, context);
      } else {
        throw $p;
      }
    }
  }
  function safeIsDispatchNeeded(_this__u8e3s4, context) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    try {
      return _this__u8e3s4.q1k(context);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        throw new DispatchException(e, _this__u8e3s4, context);
      } else {
        throw $p;
      }
    }
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.t1h_1 = resumeMode;
  }
  protoOf(DispatchedTask).n1i = function (takenState, cause) {
  };
  protoOf(DispatchedTask).u1i = function (state) {
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).e1j = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1d_1;
  };
  protoOf(DispatchedTask).g1j = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    try {
      var tmp = this.k1i();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.l1h_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.n1h_1;
      var context = continuation.t8();
      var state = this.m1i();
      var exception = this.e1j(state);
      var job = exception == null && get_isCancellableMode(this.t1h_1) ? context.a9(Key_instance_3) : null;
      if (!(job == null) && !job.n1d()) {
        var cause = job.l1e();
        this.n1i(state, cause);
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.y8(tmp$ret$1);
      } else {
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.y8(tmp$ret$3);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.u1i(state);
          var tmp$ret$5 = _Result___init__impl__xyqfz8(value);
          continuation.y8(tmp$ret$5);
        }
      }
    } catch ($p) {
      if ($p instanceof DispatchException) {
        var e = $p;
        handleCoroutineException(this.k1i().t8(), e.t1k_1);
      } else {
        if ($p instanceof Error) {
          var e_0 = $p;
          this.h1j(e_0);
        } else {
          throw $p;
        }
      }
    }
  };
  protoOf(DispatchedTask).h1j = function (exception) {
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", exception);
    handleCoroutineException(this.k1i().t8(), reason);
  };
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.k1i();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.t1h_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.k1h_1;
      var context = delegate.t8();
      if (safeIsDispatchNeeded(dispatcher, context)) {
        safeDispatch(dispatcher, context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function DispatchException(cause, dispatcher, context) {
    Exception_init_$Init$('Coroutine dispatcher ' + dispatcher.toString() + ' threw an exception, context = ' + toString(context), cause, this);
    captureStack(this, DispatchException);
    this.t1k_1 = cause;
    delete this.cause;
  }
  protoOf(DispatchException).f = function () {
    return this.t1k_1;
  };
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().l1l();
    if (eventLoop.f1l()) {
      eventLoop.e1l(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.h1l(true);
      try {
        resume(_this__u8e3s4, _this__u8e3s4.k1i(), true);
        $l$loop: while (eventLoop.d1l()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.h1j(e);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.i1l(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.m1i();
    var exception = _this__u8e3s4.e1j(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.u1i(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      this_0.l1h_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.n1h_1;
      this_0.l1h_1.y8(result);
    } else {
      delegate.y8(result);
    }
  }
  function _InlineList___init__impl__z8n56(holder) {
    holder = holder === VOID ? null : holder;
    return holder;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).b1(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.b1((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
        list.b1(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function access$_get_holder__kkflen($this) {
    return _get_holder__f6h5pd($this);
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      handleCoroutineException(context, tmp0_safe_receiver);
    }
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    undeliveredElementException = undeliveredElementException === VOID ? null : undeliveredElementException;
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        if (!(undeliveredElementException == null) && !(undeliveredElementException.cause === ex)) {
          addSuppressed(undeliveredElementException, ex);
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + toString_0(element), ex);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.c1g_1 = uCont;
  }
  protoOf(ScopeCoroutine).g1f = function () {
    return true;
  };
  protoOf(ScopeCoroutine).x1d = function (state) {
    resumeCancellableWith(intercepted(this.c1g_1), recoverResult(state, this.c1g_1));
  };
  protoOf(ScopeCoroutine).d1g = function () {
  };
  protoOf(ScopeCoroutine).w1d = function (state) {
    this.c1g_1.y8(recoverResult(state, this.c1g_1));
  };
  function ContextScope(context) {
    this.o1u_1 = context;
  }
  protoOf(ContextScope).m1d = function () {
    return this.o1u_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + toString(this.o1u_1) + ')';
  };
  function Symbol(symbol) {
    this.p1u_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.p1u_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? 2147483647 : maxValue;
    return convertToInt(systemProp_0(propertyName, fromInt(defaultValue), fromInt(minValue), fromInt(maxValue)));
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? new Long(1, 0) : minValue;
    maxValue = maxValue === VOID ? new Long(-1, 2147483647) : maxValue;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(compare(minValue, parsed) <= 0 ? compare(parsed, maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var message_0 = "System property '" + propertyName + "' should be in range " + minValue.toString() + '..' + maxValue.toString() + ", but is '" + parsed.toString() + "'";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, completion) {
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(createCoroutineUnintercepted_0(_this__u8e3s4, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp, tmp$ret$0);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(completion, e);
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp, tmp$ret$0);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(completion, e);
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }
  function startCoroutineCancellable_1(_this__u8e3s4, fatalCompletion) {
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp, tmp$ret$0);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(fatalCompletion, e);
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }
  function dispatcherFailure(completion, e) {
    var tmp;
    if (e instanceof DispatchException) {
      tmp = e.t1k_1;
    } else {
      tmp = e;
    }
    var reportException = tmp;
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(reportException));
    completion.y8(tmp$ret$0);
    throw reportException;
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    return startUndspatched(_this__u8e3s4, true, receiver, block);
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    var actualCompletion = completion;
    var tmp;
    try {
      // Inline function 'kotlinx.coroutines.withCoroutineContext' call
      actualCompletion.t8();
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineResumed' call
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(_this__u8e3s4, receiver, actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_1;
        if (e instanceof DispatchException) {
          tmp_1 = e.t1k_1;
        } else {
          tmp_1 = e;
        }
        var reportException = tmp_1;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$5 = _Result___init__impl__xyqfz8(createFailure(reportException));
        actualCompletion.y8(tmp$ret$5);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
      var tmp$ret$7 = _Result___init__impl__xyqfz8(value_0);
      actualCompletion.y8(tmp$ret$7);
    }
  }
  function startUndspatched(_this__u8e3s4, alwaysRethrow, receiver, block) {
    var tmp;
    try {
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, receiver, _this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof DispatchException) {
        var e = $p;
        dispatchExceptionAndMakeCompleting(_this__u8e3s4, e);
      } else {
        if ($p instanceof Error) {
          var e_0 = $p;
          tmp_0 = new CompletedExceptionally(e_0);
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    var result = tmp;
    if (result === get_COROUTINE_SUSPENDED())
      return get_COROUTINE_SUSPENDED();
    var state = _this__u8e3s4.v1d(result);
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return get_COROUTINE_SUSPENDED();
    _this__u8e3s4.d1g();
    var tmp_1;
    if (state instanceof CompletedExceptionally) {
      var tmp_2;
      if (alwaysRethrow || notOwnTimeout(_this__u8e3s4, state.s1d_1)) {
        throw recoverStackTrace(state.s1d_1, _this__u8e3s4.c1g_1);
      } else {
        if (result instanceof CompletedExceptionally) {
          throw recoverStackTrace(result.s1d_1, _this__u8e3s4.c1g_1);
        } else {
          tmp_2 = result;
        }
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = unboxState(state);
    }
    return tmp_1;
  }
  function dispatchExceptionAndMakeCompleting(_this__u8e3s4, e) {
    _this__u8e3s4.d1f(new CompletedExceptionally(e.t1k_1));
    throw recoverStackTrace(e.t1k_1, _this__u8e3s4.c1g_1);
  }
  function notOwnTimeout(_this__u8e3s4, cause) {
    var tmp;
    if (!(cause instanceof TimeoutCancellationException)) {
      tmp = true;
    } else {
      tmp = !(cause.q1u_1 === _this__u8e3s4);
    }
    return tmp;
  }
  var DUMMY_PROCESS_RESULT_FUNCTION;
  function get_STATE_REG() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_REG;
  }
  var STATE_REG;
  function get_STATE_COMPLETED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_COMPLETED;
  }
  var STATE_COMPLETED;
  function get_STATE_CANCELLED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_CANCELLED;
  }
  var STATE_CANCELLED;
  function get_NO_RESULT() {
    _init_properties_Select_kt__zhm2jg();
    return NO_RESULT;
  }
  var NO_RESULT;
  var PARAM_CLAUSE_0;
  function SelectInstance() {
  }
  function trySelectInternal($this, clauseObject, internalResult) {
    $l$loop: while (true) {
      var curState = $this.q1r_1.kotlinx$atomicfu$value;
      if (isInterface(curState, CancellableContinuation)) {
        var tmp0_elvis_lhs = findClause($this, clauseObject);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var clause = tmp;
        var onCancellation = clause.u1u($this, internalResult);
        if ($this.q1r_1.atomicfu$compareAndSet(curState, clause)) {
          var cont = isInterface(curState, CancellableContinuation) ? curState : THROW_CCE();
          $this.s1r_1 = internalResult;
          if (tryResume_1(cont, onCancellation))
            return 0;
          $this.s1r_1 = get_NO_RESULT();
          return 2;
        }
      } else {
        var tmp_0;
        if (equals(curState, get_STATE_COMPLETED())) {
          tmp_0 = true;
        } else {
          tmp_0 = curState instanceof ClauseData;
        }
        if (tmp_0)
          return 3;
        else {
          if (equals(curState, get_STATE_CANCELLED()))
            return 2;
          else {
            if (equals(curState, get_STATE_REG())) {
              if ($this.q1r_1.atomicfu$compareAndSet(curState, listOf_0(clauseObject)))
                return 1;
            } else {
              if (isInterface(curState, KtList)) {
                if ($this.q1r_1.atomicfu$compareAndSet(curState, plus_0(curState, clauseObject)))
                  return 1;
              } else {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected state: ' + toString(curState);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  }
  function findClause($this, clauseObject) {
    var tmp0_elvis_lhs = $this.r1r_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = clauses.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (element.r1u_1 === clauseObject) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Clause with object ' + toString(clauseObject) + ' is not found';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function ClauseData() {
  }
  protoOf(ClauseData).u1u = function (select, internalResult) {
    var tmp0_safe_receiver = this.t1u_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver(select, this.s1u_1, internalResult);
  };
  function SelectImplementation() {
  }
  protoOf(SelectImplementation).t1r = function (clauseObject, result) {
    return TrySelectDetailedResult_0(trySelectInternal(this, clauseObject, result));
  };
  var TrySelectDetailedResult_SUCCESSFUL_instance;
  var TrySelectDetailedResult_REREGISTER_instance;
  var TrySelectDetailedResult_CANCELLED_instance;
  var TrySelectDetailedResult_ALREADY_SELECTED_instance;
  var TrySelectDetailedResult_entriesInitialized;
  function TrySelectDetailedResult_initEntries() {
    if (TrySelectDetailedResult_entriesInitialized)
      return Unit_instance;
    TrySelectDetailedResult_entriesInitialized = true;
    TrySelectDetailedResult_SUCCESSFUL_instance = new TrySelectDetailedResult('SUCCESSFUL', 0);
    TrySelectDetailedResult_REREGISTER_instance = new TrySelectDetailedResult('REREGISTER', 1);
    TrySelectDetailedResult_CANCELLED_instance = new TrySelectDetailedResult('CANCELLED', 2);
    TrySelectDetailedResult_ALREADY_SELECTED_instance = new TrySelectDetailedResult('ALREADY_SELECTED', 3);
  }
  function TrySelectDetailedResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TrySelectDetailedResult_0(trySelectInternalResult) {
    _init_properties_Select_kt__zhm2jg();
    var tmp;
    switch (trySelectInternalResult) {
      case 0:
        tmp = TrySelectDetailedResult_SUCCESSFUL_getInstance();
        break;
      case 1:
        tmp = TrySelectDetailedResult_REREGISTER_getInstance();
        break;
      case 2:
        tmp = TrySelectDetailedResult_CANCELLED_getInstance();
        break;
      case 3:
        tmp = TrySelectDetailedResult_ALREADY_SELECTED_getInstance();
        break;
      default:
        var message = 'Unexpected internal result: ' + trySelectInternalResult;
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function tryResume_1(_this__u8e3s4, onCancellation) {
    _init_properties_Select_kt__zhm2jg();
    var tmp0_elvis_lhs = _this__u8e3s4.v1g(Unit_instance, null, onCancellation);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    _this__u8e3s4.w1g(token);
    return true;
  }
  function DUMMY_PROCESS_RESULT_FUNCTION$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
    _init_properties_Select_kt__zhm2jg();
    return null;
  }
  function TrySelectDetailedResult_SUCCESSFUL_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_SUCCESSFUL_instance;
  }
  function TrySelectDetailedResult_REREGISTER_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_REREGISTER_instance;
  }
  function TrySelectDetailedResult_CANCELLED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_CANCELLED_instance;
  }
  function TrySelectDetailedResult_ALREADY_SELECTED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_ALREADY_SELECTED_instance;
  }
  var properties_initialized_Select_kt_7rpl36;
  function _init_properties_Select_kt__zhm2jg() {
    if (!properties_initialized_Select_kt_7rpl36) {
      properties_initialized_Select_kt_7rpl36 = true;
      DUMMY_PROCESS_RESULT_FUNCTION = DUMMY_PROCESS_RESULT_FUNCTION$lambda;
      STATE_REG = new Symbol('STATE_REG');
      STATE_COMPLETED = new Symbol('STATE_COMPLETED');
      STATE_CANCELLED = new Symbol('STATE_CANCELLED');
      NO_RESULT = new Symbol('NO_RESULT');
      PARAM_CLAUSE_0 = new Symbol('PARAM_CLAUSE_0');
    }
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' || typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return !(typeof navigator === 'undefined') && navigator != null && navigator.userAgent != null && !(typeof navigator.userAgent === 'undefined') && !(typeof navigator.userAgent.match === 'undefined') && navigator.userAgent.match('\\bjsdom\\b');
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).o();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).x1u = function () {
    process.nextTick(this.e1v_1.c1v_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.i1v();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue(dispatcher) {
    MessageQueue.call(this);
    this.b1v_1 = dispatcher;
    var tmp = this;
    tmp.c1v_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).j1v = function () {
    this.b1v_1.x1u();
  };
  protoOf(ScheduledMessageQueue).k1v = function () {
    setTimeout(this.c1v_1, 0);
  };
  protoOf(ScheduledMessageQueue).l1v = function (timeout) {
    setTimeout(this.c1v_1, timeout);
  };
  function w3cSetTimeout(handler, timeout) {
    return setTimeout(handler, timeout);
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.y1v_1 && event.data == this$0.z1v_1) {
        event.stopPropagation();
        this$0.i1v();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.i1v();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.y1v_1 = window_0;
    this.z1v_1 = 'dispatchCoroutine';
    this.y1v_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).j1v = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).k1v = function () {
    this.y1v_1.postMessage(this.z1v_1, '*');
  };
  function w3cSetTimeout_0(window_0, handler, timeout) {
    return setTimeout_0(window_0, handler, timeout);
  }
  function w3cClearTimeout(window_0, handle) {
    return window_0.clearTimeout(handle);
  }
  function w3cClearTimeout_0(handle) {
    return clearTimeout(handle);
  }
  function setTimeout_0(window_0, handler, timeout) {
    return window_0.setTimeout(handler, timeout);
  }
  function await_0(_this__u8e3s4, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.l1i();
    var tmp = await$lambda(cancellable);
    _this__u8e3s4.then(tmp, await$lambda_0(cancellable));
    return cancellable.r1f();
  }
  function await$lambda($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      this_0.y8(tmp$ret$0);
      return Unit_instance;
    };
  }
  function await$lambda_0($cont) {
    return function (it) {
      var tmp0 = $cont;
      var tmp0_elvis_lhs = it instanceof Error ? it : null;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = tmp0_elvis_lhs == null ? Exception_init_$Create$('Non-Kotlin exception ' + it.toString()) : tmp0_elvis_lhs;
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.y8(tmp$ret$0);
      return Unit_instance;
    };
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function propagateExceptionFinalResort(exception) {
    console.error(exception.toString());
  }
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).r1k = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).x1u = function () {
    this.e1v_1.l1v(0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      $continuation.y1g(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.e1v_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).r1k = function (context, block) {
    this.e1v_1.m1v(block);
  };
  protoOf(SetTimeoutBasedDispatcher).y1k = function (timeMillis, continuation) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new ClearTimeout(handle));
  };
  function MessageQueue() {
    this.f1v_1 = ArrayDeque_init_$Create$();
    this.g1v_1 = 16;
    this.h1v_1 = false;
  }
  protoOf(MessageQueue).m1v = function (element) {
    this.n1v(element);
    if (!this.h1v_1) {
      this.h1v_1 = true;
      this.j1v();
    }
  };
  protoOf(MessageQueue).i1v = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.g1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.g1j();
        }
         while (inductionVariable < times);
    }finally {
      if (this.r()) {
        this.h1v_1 = false;
      } else {
        this.k1v();
      }
    }
  };
  protoOf(MessageQueue).n1v = function (element) {
    return this.f1v_1.b1(element);
  };
  protoOf(MessageQueue).b1 = function (element) {
    return this.n1v((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).o1v = function (index, element) {
    this.f1v_1.a3(index, element);
  };
  protoOf(MessageQueue).a3 = function (index, element) {
    return this.o1v(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).p1v = function (elements) {
    return this.f1v_1.i1(elements);
  };
  protoOf(MessageQueue).i1 = function (elements) {
    return this.p1v(elements);
  };
  protoOf(MessageQueue).y2 = function () {
    this.f1v_1.y2();
  };
  protoOf(MessageQueue).q1v = function (index, element) {
    return this.f1v_1.z2(index, element);
  };
  protoOf(MessageQueue).z2 = function (index, element) {
    return this.q1v(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).b3 = function (index) {
    return this.f1v_1.b3(index);
  };
  protoOf(MessageQueue).m2 = function () {
    return this.f1v_1.m2();
  };
  protoOf(MessageQueue).n2 = function (index) {
    return this.f1v_1.n2(index);
  };
  protoOf(MessageQueue).o2 = function (fromIndex, toIndex) {
    return this.f1v_1.o2(fromIndex, toIndex);
  };
  protoOf(MessageQueue).r = function () {
    return this.f1v_1.r();
  };
  protoOf(MessageQueue).r1v = function (element) {
    return this.f1v_1.i2(element);
  };
  protoOf(MessageQueue).i2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.r1v((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).t = function () {
    return this.f1v_1.t();
  };
  protoOf(MessageQueue).s1v = function (elements) {
    return this.f1v_1.j2(elements);
  };
  protoOf(MessageQueue).j2 = function (elements) {
    return this.s1v(elements);
  };
  protoOf(MessageQueue).d1 = function (index) {
    return this.f1v_1.d1(index);
  };
  protoOf(MessageQueue).t1v = function (element) {
    return this.f1v_1.k2(element);
  };
  protoOf(MessageQueue).k2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.t1v((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).u1v = function (element) {
    return this.f1v_1.l2(element);
  };
  protoOf(MessageQueue).l2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.u1v((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).asJsReadonlyArrayView = function () {
    return this.f1v_1.asJsReadonlyArrayView();
  };
  protoOf(MessageQueue).e1 = function () {
    return this.f1v_1.ue_1;
  };
  function WindowClearTimeout($outer, handle) {
    this.h1w_1 = $outer;
    ClearTimeout.call(this, handle);
  }
  protoOf(WindowClearTimeout).i1h = function () {
    w3cClearTimeout(this.h1w_1.j1w_1, this.l1w_1);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      $continuation.y1g(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.j1w_1 = window_0;
    this.k1w_1 = new WindowMessageQueue(this.j1w_1);
  }
  protoOf(WindowDispatcher).r1k = function (context, block) {
    return this.k1w_1.m1v(block);
  };
  protoOf(WindowDispatcher).y1k = function (timeMillis, continuation) {
    var handle = w3cSetTimeout_0(this.j1w_1, WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new WindowClearTimeout(this, handle));
  };
  function delayToInt(timeMillis) {
    return convertToInt(coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)));
  }
  function ClearTimeout(handle) {
    this.l1w_1 = handle;
  }
  protoOf(ClearTimeout).i1h = function () {
    w3cClearTimeout_0(this.l1w_1);
  };
  protoOf(ClearTimeout).h1h = function (cause) {
    this.i1h();
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.l1w_1 + ']';
  };
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.m1d().eh(context);
    return !(combined === Dispatchers_getInstance().e1o_1) && combined.a9(Key_instance) == null ? combined.eh(Dispatchers_getInstance().e1o_1) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.eh(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).w1d = function (state) {
    return this.c1g_1.y8(recoverResult(state, this.c1g_1));
  };
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().e1o_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.e1o_1 = createDefaultDispatcher();
    this.f1o_1 = Unconfined_getInstance();
    this.g1o_1 = new JsMainDispatcher(this.e1o_1, false);
    this.h1o_1 = null;
  }
  protoOf(Dispatchers).i1o = function () {
    var tmp0_elvis_lhs = this.h1o_1;
    return tmp0_elvis_lhs == null ? this.g1o_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.r1w_1 = delegate;
    this.s1w_1 = invokeImmediately;
    this.t1w_1 = this.s1w_1 ? this : new JsMainDispatcher(this.r1w_1, true);
  }
  protoOf(JsMainDispatcher).c1o = function () {
    return this.t1w_1;
  };
  protoOf(JsMainDispatcher).q1k = function (context) {
    return !this.s1w_1;
  };
  protoOf(JsMainDispatcher).r1k = function (context, block) {
    return this.r1w_1.r1k(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.d1o();
    return tmp0_elvis_lhs == null ? this.r1w_1.toString() : tmp0_elvis_lhs;
  };
  function CancellationException_0(message, cause) {
    return CancellationException_init_$Create$_0(message, cause);
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    captureStack(this, JobCancellationException);
    this.u1w_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.u1w_1);
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.u1w_1, this.u1w_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.u1w_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function Runnable() {
  }
  function SchedulerTask() {
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
    }
  }
  function LockFreeLinkedListNode() {
    this.v1j_1 = this;
    this.w1j_1 = this;
    this.x1j_1 = false;
  }
  protoOf(LockFreeLinkedListNode).y1j = function (node, permissionsBitmask) {
    var prev = this.w1j_1;
    var tmp;
    if (prev instanceof ListClosed) {
      tmp = ((prev.y1w_1 & permissionsBitmask) === 0 && prev.y1j(node, permissionsBitmask));
    } else {
      node.v1j_1 = this;
      node.w1j_1 = prev;
      prev.v1j_1 = node;
      this.w1j_1 = node;
      tmp = true;
    }
    return tmp;
  };
  protoOf(LockFreeLinkedListNode).w1l = function (forbiddenElementsBit) {
    this.y1j(new ListClosed(forbiddenElementsBit), forbiddenElementsBit);
  };
  protoOf(LockFreeLinkedListNode).z1j = function () {
    if (this.x1j_1)
      return false;
    var prev = this.w1j_1;
    var next = this.v1j_1;
    prev.v1j_1 = next;
    next.w1j_1 = prev;
    this.x1j_1 = true;
    return true;
  };
  protoOf(LockFreeLinkedListNode).a1k = function (node) {
    if (!(this.v1j_1 === this))
      return false;
    this.y1j(node, -2147483648);
    return true;
  };
  function LockFreeLinkedListHead() {
    LockFreeLinkedListNode.call(this);
  }
  function ListClosed(forbiddenElementsBitmask) {
    LockFreeLinkedListNode.call(this);
    this.y1w_1 = forbiddenElementsBitmask;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function SynchronizedObject() {
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.m1l_1 = null;
  }
  protoOf(CommonThreadLocal).n1l = function () {
    var tmp = this.m1l_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).o1l = function (value) {
    this.m1l_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  //region block: post-declaration
  protoOf(JobSupport).q1e = invokeOnCompletion$default;
  protoOf(JobSupport).w1e = cancel$default;
  protoOf(JobSupport).eh = plus;
  protoOf(JobSupport).a9 = get_0;
  protoOf(JobSupport).dh = fold;
  protoOf(JobSupport).ch = minusKey_0;
  protoOf(CoroutineDispatcher).a9 = get;
  protoOf(CoroutineDispatcher).ch = minusKey;
  protoOf(BufferedChannel).f1t = close$default;
  protoOf(BufferedChannel).h1t = cancel$default_0;
  protoOf(ChannelCoroutine).f1t = close$default;
  defineProp(protoOf(DispatchException), 'cause', function () {
    return this.f();
  });
  //endregion
  //region block: init
  Active_instance = new Active();
  Key_instance_1 = new Key_0();
  Key_instance_2 = new Key_1();
  GlobalScope_instance = new GlobalScope();
  Key_instance_3 = new Key_2();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Key_instance_4 = new Key_3();
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = await_0;
  _.$_$.b = delay;
  _.$_$.c = withContext;
  _.$_$.d = Key_instance_1;
  _.$_$.e = Dispatchers_getInstance;
  _.$_$.f = GlobalScope_instance;
  _.$_$.g = Key_instance_3;
  _.$_$.h = Channel;
  _.$_$.i = ProducerScope;
  _.$_$.j = cancelConsumed;
  _.$_$.k = produce;
  _.$_$.l = recoverStackTrace;
  _.$_$.m = startCoroutineCancellable;
  _.$_$.n = CancellableContinuationImpl;
  _.$_$.o = CancellationException_0;
  _.$_$.p = CompletableDeferred;
  _.$_$.q = CompletableJob;
  _.$_$.r = CopyableThrowable;
  _.$_$.s = CoroutineName;
  _.$_$.t = CoroutineScope_0;
  _.$_$.u = CoroutineScope;
  _.$_$.v = Job_0;
  _.$_$.w = SupervisorJob;
  _.$_$.x = async;
  _.$_$.y = cancel_0;
  _.$_$.z = cancel_2;
  _.$_$.a1 = cancel;
  _.$_$.b1 = cancel_1;
  _.$_$.c1 = get_job;
  _.$_$.d1 = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core.js.map
