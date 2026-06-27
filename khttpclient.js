(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-io.js', './ktor-ktor-http.js', './ktor-ktor-client-core.js', './ktor-ktor-utils.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-client-core.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'khttpclient'.");
    }
    globalThis.khttpclient = factory(typeof khttpclient === 'undefined' ? {} : khttpclient, globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-io'], globalThis['ktor-ktor-http'], globalThis['ktor-ktor-client-core'], globalThis['ktor-ktor-utils'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.w2;
  var Enum = kotlin_kotlin.$_$.sf;
  var protoOf = kotlin_kotlin.$_$.bc;
  var initMetadataForClass = kotlin_kotlin.$_$.bb;
  var VOID = kotlin_kotlin.$_$.c;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.c1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.cb;
  var split = kotlin_kotlin.$_$.ee;
  var lastOrNull = kotlin_kotlin.$_$.h7;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var Image_getInstance = kotlin_io_ktor_ktor_http.$_$.d;
  var Video_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var ContentType_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.n;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.h9;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.k;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.g;
  var url = kotlin_io_ktor_ktor_client_core.$_$.i;
  var toString = kotlin_kotlin.$_$.ec;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n4;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.h1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.e2;
  var headers = kotlin_io_ktor_ktor_client_core.$_$.h;
  var timeout = kotlin_io_ktor_ktor_client_core.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e3;
  var ensureNotNull = kotlin_kotlin.$_$.tg;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var contentType = kotlin_io_ktor_ktor_http.$_$.s1;
  var FormBuilder = kotlin_io_ktor_ktor_client_core.$_$.c;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.e1;
  var append = kotlin_io_ktor_ktor_http.$_$.l1;
  var copyToArray = kotlin_kotlin.$_$.m6;
  var formData = kotlin_io_ktor_ktor_client_core.$_$.f;
  var MultiPartFormDataContent = kotlin_io_ktor_ktor_client_core.$_$.e;
  var getKClass = kotlin_kotlin.$_$.vc;
  var arrayOf = kotlin_kotlin.$_$.pg;
  var createKType = kotlin_kotlin.$_$.tc;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.l;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.x;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.m;
  var ParametersBuilder = kotlin_io_ktor_ktor_http.$_$.g1;
  var FormDataContent = kotlin_io_ktor_ktor_client_core.$_$.d;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.j;
  var first = kotlin_kotlin.$_$.w6;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.o;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.j;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p8;
  var closeFinally = kotlin_kotlin.$_$.qg;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.db;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n3;
  var toMap = kotlin_io_ktor_ktor_utils.$_$.d1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.l2;
  var THROW_CCE = kotlin_kotlin.$_$.cg;
  var isByteArray = kotlin_kotlin.$_$.kb;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.j;
  var decodeToString = kotlin_kotlin.$_$.id;
  var constructCallableReference = kotlin_kotlin.$_$.ta;
  var lazy = kotlin_kotlin.$_$.zg;
  var KProperty1 = kotlin_kotlin.$_$.ad;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ya;
  var isBlank = kotlin_kotlin.$_$.sd;
  var ProxyBuilder_instance = kotlin_io_ktor_ktor_client_core.$_$.a;
  var Url = kotlin_io_ktor_ktor_http.$_$.k1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Type, 'Type', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForClass(HttpParameter, 'HttpParameter');
  initMetadataForCoroutine($proceedCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpRequest, 'HttpRequest', HttpRequest, VOID, VOID, [0, 1]);
  initMetadataForCoroutine($fromCOROUTINE$, CoroutineImpl);
  initMetadataForCompanion(Companion_0, VOID, VOID, [1]);
  initMetadataForClass(HttpResponse, 'HttpResponse');
  //endregion
  var Type_QUERY_instance;
  var Type_PARAM_instance;
  var Type_FILE_instance;
  var Type_JSON_instance;
  var Type_entriesInitialized;
  function Type_initEntries() {
    if (Type_entriesInitialized)
      return Unit_instance;
    Type_entriesInitialized = true;
    Type_QUERY_instance = new Type('QUERY', 0);
    Type_PARAM_instance = new Type('PARAM', 1);
    Type_FILE_instance = new Type('FILE', 2);
    Type_JSON_instance = new Type('JSON', 3);
  }
  function Type(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion() {
  }
  protoOf(Companion).h55 = function (key, value) {
    return new HttpParameter(Type_PARAM_getInstance(), key, value);
  };
  protoOf(Companion).i55 = function (key, fileName, fileBody) {
    return new HttpParameter(Type_FILE_getInstance(), key, null, fileName, fileBody);
  };
  protoOf(Companion).j55 = function (json) {
    return new HttpParameter(Type_JSON_getInstance(), 'json', null, 'file.json', toByteArray(json));
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    return Companion_instance;
  }
  function Type_QUERY_getInstance() {
    Type_initEntries();
    return Type_QUERY_instance;
  }
  function Type_PARAM_getInstance() {
    Type_initEntries();
    return Type_PARAM_instance;
  }
  function Type_FILE_getInstance() {
    Type_initEntries();
    return Type_FILE_instance;
  }
  function Type_JSON_getInstance() {
    Type_initEntries();
    return Type_JSON_instance;
  }
  function HttpParameter(type, key, value, fileName, fileBody) {
    value = value === VOID ? null : value;
    fileName = fileName === VOID ? null : fileName;
    fileBody = fileBody === VOID ? null : fileBody;
    this.k55_1 = type;
    this.l55_1 = key;
    this.m55_1 = value;
    this.n55_1 = fileName;
    this.o55_1 = fileBody;
  }
  protoOf(HttpParameter).p55 = function () {
    var tmp0_safe_receiver = this.n55_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : split(tmp0_safe_receiver, ['.']);
    return tmp1_safe_receiver == null ? null : lastOrNull(tmp1_safe_receiver);
  };
  protoOf(HttpParameter).q55 = function () {
    switch (this.p55()) {
      case 'txt':
        return Text_getInstance().b2n_1;
      case 'html':
        return Text_getInstance().e2n_1;
      case 'css':
        return Text_getInstance().c2n_1;
      case 'csv':
        return Text_getInstance().d2n_1;
      case 'jpg':
      case 'jpeg':
        return Image_getInstance().i2m_1;
      case 'png':
        return Image_getInstance().k2m_1;
      case 'gif':
        return Image_getInstance().f2m_1;
      case 'svg':
        return Image_getInstance().l2m_1;
      case 'mpeg':
        return Video_getInstance().l2n_1;
      case 'mp4':
        return Video_getInstance().m2n_1;
      case 'mov':
        return Video_getInstance().o2n_1;
      case 'webm':
        return ContentType_init_$Create$('video', 'webm');
      case 'json':
        return Application_getInstance().g2l_1;
      case 'xml':
        return Application_getInstance().m2l_1;
      case 'zip':
        return Application_getInstance().p2l_1;
      case 'pdf':
        return Application_getInstance().s2l_1;
    }
    return Application_getInstance().j2l_1;
  };
  function proceed($this, method, $completion) {
    var tmp = new $proceedCOROUTINE$($this, method, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function canSendOnly($this, param) {
    if (param.k55_1.equals(Type_JSON_getInstance()))
      return true;
    var tmp0_subject = param.q55();
    return tmp0_subject.equals(Application_getInstance().g2l_1) ? true : tmp0_subject.equals(Image_getInstance().i2m_1) ? true : tmp0_subject.equals(Image_getInstance().k2m_1) ? true : tmp0_subject.equals(Image_getInstance().f2m_1) ? true : tmp0_subject.equals(Video_getInstance().l2n_1) ? true : tmp0_subject.equals(Video_getInstance().m2n_1) ? true : tmp0_subject.equals(Video_getInstance().o2n_1) ? true : tmp0_subject.equals(ContentType_init_$Create$('video', 'webm')) ? true : false;
  }
  function HttpRequest$proceed$lambda($req) {
    return function ($this$HttpClient) {
      applySystemProxy($this$HttpClient);
      var tmp;
      if ($req.u56_1) {
        applySkipSSLValidation($this$HttpClient);
        tmp = Unit_instance;
      }
      $this$HttpClient.l3y_1 = $req.t56_1;
      return Unit_instance;
    };
  }
  function HttpRequest$proceed$lambda_0($req) {
    return function ($this$headers) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $req.q56_1.l1().t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        // Inline function 'kotlin.collections.component1' call
        var k = element.m1();
        // Inline function 'kotlin.collections.component2' call
        var v = element.n1();
        $this$headers.u2f(k, v);
      }
      return Unit_instance;
    };
  }
  function HttpRequest$proceed$lambda_1($req) {
    return function ($this$timeout) {
      $this$timeout.n4n($req.v56_1);
      $this$timeout.o4n($req.w56_1);
      $this$timeout.p4n($req.x56_1);
      return Unit_instance;
    };
  }
  function $proceedCOROUTINE$(_this__u8e3s4, method, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z55_1 = _this__u8e3s4;
    this.a56_1 = method;
  }
  protoOf($proceedCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 9;
            this.g56_1 = this.z55_1;
            var tmp_0 = this;
            tmp_0.h56_1 = HttpClient(HttpRequest$proceed$lambda(this.g56_1));
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.d56_1 = this.h56_1;
            this.c56_1 = null;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            this.n8_1 = 3;
            continue $sm;
          case 3:
            this.o8_1 = 8;
            this.o8_1 = 7;
            var client = this.d56_1;
            var tmp0_safe_receiver = this.z55_1.n56_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              this.z55_1.q56_1.v2('Accept', tmp0_safe_receiver);
            }

            var tmp1_safe_receiver = this.z55_1.o56_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              var tmp0 = this.z55_1.q56_1;
              var key = 'User-Agent';
              tmp0.v2(key, tmp1_safe_receiver);
            }

            this.f56_1 = Companion_getInstance_3();
            var this_0 = new HttpRequestBuilder();
            this_0.v3x_1 = this.a56_1;
            if (!(this.g56_1.m56_1 == null)) {
              var tmp0_0 = this.g56_1.m56_1;
              var tmp$ret$0 = Unit_instance;
              l$ret$1: do {
                if (tmp0_0 == null) {
                  var message = 'Required value was null.';
                  throw IllegalStateException_init_$Create$(toString(message));
                } else {
                  tmp$ret$0 = tmp0_0;
                  break l$ret$1;
                }
              }
               while (false);
              var tmp_1 = tmp$ret$0;
              takeFrom(this_0.u3x_1, URLBuilder(tmp_1));
            } else {
              url(this_0, this.g56_1.i56_1, this.g56_1.j56_1, this.g56_1.l56_1, this.g56_1.k56_1);
            }

            headers(this_0, HttpRequest$proceed$lambda_0(this.g56_1));
            timeout(this_0, HttpRequest$proceed$lambda_1(this.g56_1));
            if (!this.z55_1.r56_1 && !this.z55_1.s56_1 && this.g56_1.p56_1.e1() === 1 && canSendOnly(this.z55_1, first(this.g56_1.p56_1))) {
              var param = first(this.g56_1.p56_1);
              var body = new ByteArrayContent(ensureNotNull(param.o55_1), param.q55());
              if (body == null) {
                this_0.x3x_1 = NullBody_instance;
                var tmp_2 = getKClass(ByteArrayContent);
                var tmp_3;
                try {
                  tmp_3 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
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
                this_0.p43(new TypeInfo(tmp_2, tmp_3));
              } else {
                if (body instanceof OutgoingContent) {
                  this_0.x3x_1 = body;
                  this_0.p43(null);
                } else {
                  this_0.x3x_1 = body;
                  var tmp_5 = getKClass(ByteArrayContent);
                  var tmp_6;
                  try {
                    tmp_6 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
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
                  this_0.p43(new TypeInfo(tmp_5, tmp_6));
                }
              }
            } else {
              if (this.a56_1.equals(Companion_getInstance_1().f2s_1)) {
                var _iterator__ex2g4s = this.g56_1.p56_1.t();
                while (_iterator__ex2g4s.u()) {
                  var element = _iterator__ex2g4s.v();
                  if (element.k55_1.a1_1 === 0) {
                    this_0.u3x_1.r2v_1.u2f(element.l55_1, ensureNotNull(element.m55_1));
                  } else {
                    throw IllegalStateException_init_$Create$('Request Body is not supported in the GET method.');
                  }
                }
              } else {
                var tmp0_1 = this.g56_1.p56_1;
                var destination = ArrayList_init_$Create$();
                var _iterator__ex2g4s_0 = tmp0_1.t();
                while (_iterator__ex2g4s_0.u()) {
                  var element_0 = _iterator__ex2g4s_0.v();
                  if (element_0.k55_1.equals(Type_QUERY_getInstance())) {
                    destination.b1(element_0);
                  }
                }
                var queries = destination;
                var tmp0_2 = this.g56_1.p56_1;
                var destination_0 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_1 = tmp0_2.t();
                while (_iterator__ex2g4s_1.u()) {
                  var element_1 = _iterator__ex2g4s_1.v();
                  if (element_1.k55_1.equals(Type_PARAM_getInstance())) {
                    destination_0.b1(element_1);
                  }
                }
                var params = destination_0;
                var tmp0_3 = this.g56_1.p56_1;
                var destination_1 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_2 = tmp0_3.t();
                while (_iterator__ex2g4s_2.u()) {
                  var element_2 = _iterator__ex2g4s_2.v();
                  if (element_2.k55_1.equals(Type_FILE_getInstance())) {
                    destination_1.b1(element_2);
                  }
                }
                var files = destination_1;
                if (!queries.r()) {
                  var _iterator__ex2g4s_3 = queries.t();
                  while (_iterator__ex2g4s_3.u()) {
                    var element_3 = _iterator__ex2g4s_3.v();
                    this_0.u3x_1.r2v_1.u2f(element_3.l55_1, ensureNotNull(element_3.m55_1));
                  }
                }
                var tmp_8;
                if (!params.r()) {
                  tmp_8 = true;
                } else {
                  tmp_8 = !files.r();
                }
                if (tmp_8) {
                  if (this.z55_1.s56_1) {
                    if (!files.r()) {
                      throw IllegalStateException_init_$Create$('ApplicationFormUrlEncoded cannot send files.');
                    }
                    contentType(this_0, Application_getInstance().r2l_1);
                    Companion_getInstance_0();
                    var this_1 = ParametersBuilder();
                    var _iterator__ex2g4s_4 = params.t();
                    while (_iterator__ex2g4s_4.u()) {
                      var element_4 = _iterator__ex2g4s_4.v();
                      this_1.u2f(element_4.l55_1, ensureNotNull(element_4.m55_1));
                    }
                    var body_0 = new FormDataContent(this_1.y2n());
                    if (body_0 == null) {
                      this_0.x3x_1 = NullBody_instance;
                      var tmp_9 = getKClass(FormDataContent);
                      var tmp_10;
                      try {
                        tmp_10 = createKType(getKClass(FormDataContent), arrayOf([]), false);
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
                      this_0.p43(new TypeInfo(tmp_9, tmp_10));
                    } else {
                      if (body_0 instanceof OutgoingContent) {
                        this_0.x3x_1 = body_0;
                        this_0.p43(null);
                      } else {
                        this_0.x3x_1 = body_0;
                        var tmp_12 = getKClass(FormDataContent);
                        var tmp_13;
                        try {
                          tmp_13 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                        } catch ($p_2) {
                          var tmp_14;
                          if ($p_2 instanceof Error) {
                            var _unused_var__etf5q3_2 = $p_2;
                            tmp_14 = null;
                          } else {
                            throw $p_2;
                          }
                          tmp_13 = tmp_14;
                        }
                        this_0.p43(new TypeInfo(tmp_12, tmp_13));
                      }
                    }
                  } else {
                    contentType(this_0, MultiPart_getInstance().u2m_1);
                    var this_2 = new FormBuilder();
                    var _iterator__ex2g4s_5 = params.t();
                    while (_iterator__ex2g4s_5.u()) {
                      var element_5 = _iterator__ex2g4s_5.v();
                      this_2.j4w(element_5.l55_1, ensureNotNull(element_5.m55_1));
                    }
                    var _iterator__ex2g4s_6 = files.t();
                    while (_iterator__ex2g4s_6.u()) {
                      var element_6 = _iterator__ex2g4s_6.v();
                      var tmp_15 = ensureNotNull(element_6.o55_1);
                      Companion_getInstance();
                      var this_3 = new HeadersBuilder();
                      append(this_3, 'Content-Type', element_6.q55());
                      this_3.u2f('Content-Disposition', 'filename=' + element_6.n55_1);
                      this_2.k4w(element_6.l55_1, tmp_15, this_3.y2n());
                    }
                    var this_4 = this_2.l4w();
                    var body_1 = new MultiPartFormDataContent(formData(copyToArray(this_4).slice()));
                    if (body_1 == null) {
                      this_0.x3x_1 = NullBody_instance;
                      var tmp_16 = getKClass(MultiPartFormDataContent);
                      var tmp_17;
                      try {
                        tmp_17 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                      } catch ($p_3) {
                        var tmp_18;
                        if ($p_3 instanceof Error) {
                          var _unused_var__etf5q3_3 = $p_3;
                          tmp_18 = null;
                        } else {
                          throw $p_3;
                        }
                        tmp_17 = tmp_18;
                      }
                      this_0.p43(new TypeInfo(tmp_16, tmp_17));
                    } else {
                      if (body_1 instanceof OutgoingContent) {
                        this_0.x3x_1 = body_1;
                        this_0.p43(null);
                      } else {
                        this_0.x3x_1 = body_1;
                        var tmp_19 = getKClass(MultiPartFormDataContent);
                        var tmp_20;
                        try {
                          tmp_20 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                        } catch ($p_4) {
                          var tmp_21;
                          if ($p_4 instanceof Error) {
                            var _unused_var__etf5q3_4 = $p_4;
                            tmp_21 = null;
                          } else {
                            throw $p_4;
                          }
                          tmp_20 = tmp_21;
                        }
                        this_0.p43(new TypeInfo(tmp_19, tmp_20));
                      }
                    }
                  }
                }
              }
            }

            this.n8_1 = 4;
            suspendResult = (new HttpStatement(this_0, client)).e4z(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var ARGUMENT = suspendResult;
            this.n8_1 = 5;
            suspendResult = this.f56_1.z56(ARGUMENT, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.e56_1 = suspendResult;
            this.o8_1 = 9;
            this.n8_1 = 6;
            var tmp_22 = this;
            continue $sm;
          case 6:
            var tmp_23 = this.e56_1;
            this.o8_1 = 9;
            closeFinally(this.d56_1, this.c56_1);
            this.b56_1 = tmp_23;
            this.n8_1 = 11;
            continue $sm;
          case 7:
            this.o8_1 = 8;
            var tmp_24 = this.q8_1;
            if (tmp_24 instanceof Error) {
              var e = this.q8_1;
              var tmp_25 = this;
              this.c56_1 = e;
              throw e;
            } else {
              throw this.q8_1;
            }

          case 8:
            this.o8_1 = 9;
            var t = this.q8_1;
            closeFinally(this.d56_1, this.c56_1);
            throw t;
          case 9:
            throw this.q8_1;
          case 10:
            this.o8_1 = 9;
            closeFinally(this.d56_1, this.c56_1);
            if (false) {
              this.n8_1 = 1;
              continue $sm;
            }

            this.n8_1 = 11;
            continue $sm;
          case 11:
            return this.b56_1;
        }
      } catch ($p_5) {
        var e_0 = $p_5;
        if (this.o8_1 === 9) {
          throw e_0;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e_0;
        }
      }
     while (true);
  };
  function HttpRequest() {
    this.i56_1 = 'https';
    this.j56_1 = null;
    this.k56_1 = null;
    this.l56_1 = null;
    this.m56_1 = null;
    this.n56_1 = null;
    this.o56_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.p56_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.q56_1 = LinkedHashMap_init_$Create$();
    this.r56_1 = false;
    this.s56_1 = false;
    this.t56_1 = true;
    this.u56_1 = false;
    this.v56_1 = null;
    this.w56_1 = null;
    this.x56_1 = null;
  }
  protoOf(HttpRequest).a57 = function (url) {
    // Inline function 'kotlin.also' call
    this.m56_1 = url;
    return this;
  };
  protoOf(HttpRequest).b57 = function (accept) {
    // Inline function 'kotlin.also' call
    this.n56_1 = accept;
    return this;
  };
  protoOf(HttpRequest).c57 = function (key, value) {
    // Inline function 'kotlin.also' call
    this.p56_1.b1(Companion_instance.h55(key, toString(value)));
    return this;
  };
  protoOf(HttpRequest).i55 = function (key, fileName, fileBody) {
    // Inline function 'kotlin.also' call
    this.p56_1.b1(Companion_instance.i55(key, fileName, fileBody));
    return this;
  };
  protoOf(HttpRequest).j55 = function (json) {
    // Inline function 'kotlin.also' call
    this.p56_1.b1(Companion_instance.j55(json));
    return this;
  };
  protoOf(HttpRequest).d57 = function ($completion) {
    return proceed(this, Companion_getInstance_1().g2s_1, $completion);
  };
  function HttpResponse$Companion$mapper$lambda($this$Json) {
    $this$Json.f31_1 = true;
    return Unit_instance;
  }
  function $fromCOROUTINE$(_this__u8e3s4, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m57_1 = _this__u8e3s4;
    this.n57_1 = response;
  }
  protoOf($fromCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.p57_1 = this.n57_1.t3z().c2v_1;
            this.o57_1 = toMap(this.n57_1.e2s());
            var this_0 = this.n57_1;
            this.n8_1 = 1;
            var tmp_0 = this_0.k3z();
            var tmp_1 = PrimitiveClasses_getInstance().yb();
            var tmp_2;
            try {
              tmp_2 = createKType(PrimitiveClasses_getInstance().yb(), arrayOf([]), false);
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

            suspendResult = tmp_0.h3z(new TypeInfo(tmp_1, tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = (!(suspendResult == null) ? isByteArray(suspendResult) : false) ? suspendResult : THROW_CCE();
            return new HttpResponse(this.p57_1, this.o57_1, ARGUMENT);
          case 2:
            throw this.q8_1;
        }
      } catch ($p_0) {
        var e = $p_0;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.y56_1 = Json(VOID, HttpResponse$Companion$mapper$lambda);
  }
  protoOf(Companion_0).z56 = function (response, $completion) {
    var tmp = new $fromCOROUTINE$(this, response, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function HttpResponse$stringBody$delegate$lambda(this$0) {
    return function () {
      return decodeToString(this$0.s57_1);
    };
  }
  function HttpResponse$_get_stringBody_$ref_nmyr7m() {
    return constructCallableReference(function (p0) {
      return p0.u57();
    }, 1, 0, 34);
  }
  function HttpResponse(status, headers, body) {
    Companion_getInstance_3();
    this.q57_1 = status;
    this.r57_1 = headers;
    this.s57_1 = body;
    var tmp = this;
    tmp.t57_1 = lazy(HttpResponse$stringBody$delegate$lambda(this));
  }
  protoOf(HttpResponse).u57 = function () {
    var tmp0 = this.t57_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('stringBody', 1, tmp, HttpResponse$_get_stringBody_$ref_nmyr7m(), null);
    return tmp0.n1();
  };
  function applySystemProxy(_this__u8e3s4) {
    var proxyUrl = proxyUrlFromEnv();
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(proxyUrl == null || isBlank(proxyUrl))) {
      _this__u8e3s4.b3z(applySystemProxy$lambda(proxyUrl));
    }
  }
  function applySystemProxy$lambda($proxyUrl) {
    return function ($this$engine) {
      $this$engine.g44_1 = ProxyBuilder_instance.g55(Url($proxyUrl));
      return Unit_instance;
    };
  }
  function applySkipSSLValidation(_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('Skip SSL Validation is not supported on JS target.');
  }
  function proxyUrlFromEnv() {
    return null;
  }
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = HttpRequest;
  //endregion
  return _;
}));

//# sourceMappingURL=khttpclient.js.map
