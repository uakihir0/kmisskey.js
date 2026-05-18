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
  var Unit_instance = kotlin_kotlin.$_$.z;
  var Enum = kotlin_kotlin.$_$.qf;
  var protoOf = kotlin_kotlin.$_$.ac;
  var initMetadataForClass = kotlin_kotlin.$_$.ab;
  var VOID = kotlin_kotlin.$_$.c;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.c1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bb;
  var split = kotlin_kotlin.$_$.ce;
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
  var toString = kotlin_kotlin.$_$.dc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.h1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.e2;
  var headers = kotlin_io_ktor_ktor_client_core.$_$.h;
  var timeout = kotlin_io_ktor_ktor_client_core.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h1;
  var ensureNotNull = kotlin_kotlin.$_$.rg;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var contentType = kotlin_io_ktor_ktor_http.$_$.s1;
  var FormBuilder = kotlin_io_ktor_ktor_client_core.$_$.c;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.e1;
  var append = kotlin_io_ktor_ktor_http.$_$.l1;
  var copyToArray = kotlin_kotlin.$_$.m6;
  var formData = kotlin_io_ktor_ktor_client_core.$_$.f;
  var MultiPartFormDataContent = kotlin_io_ktor_ktor_client_core.$_$.e;
  var getKClass = kotlin_kotlin.$_$.tc;
  var arrayOf = kotlin_kotlin.$_$.ng;
  var createKType = kotlin_kotlin.$_$.rc;
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
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cb;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q1;
  var toMap = kotlin_io_ktor_ktor_utils.$_$.d1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.o;
  var THROW_CCE = kotlin_kotlin.$_$.ag;
  var isByteArray = kotlin_kotlin.$_$.jb;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.j;
  var decodeToString = kotlin_kotlin.$_$.gd;
  var lazy = kotlin_kotlin.$_$.xg;
  var KProperty1 = kotlin_kotlin.$_$.yc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xa;
  var isBlank = kotlin_kotlin.$_$.qd;
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
  protoOf(Companion).x54 = function (key, value) {
    return new HttpParameter(Type_PARAM_getInstance(), key, value);
  };
  protoOf(Companion).y54 = function (key, fileName, fileBody) {
    return new HttpParameter(Type_FILE_getInstance(), key, null, fileName, fileBody);
  };
  protoOf(Companion).z54 = function (json) {
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
    this.a55_1 = type;
    this.b55_1 = key;
    this.c55_1 = value;
    this.d55_1 = fileName;
    this.e55_1 = fileBody;
  }
  protoOf(HttpParameter).f55 = function () {
    var tmp0_safe_receiver = this.d55_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : split(tmp0_safe_receiver, ['.']);
    return tmp1_safe_receiver == null ? null : lastOrNull(tmp1_safe_receiver);
  };
  protoOf(HttpParameter).g55 = function () {
    switch (this.f55()) {
      case 'txt':
        return Text_getInstance().u2m_1;
      case 'html':
        return Text_getInstance().x2m_1;
      case 'css':
        return Text_getInstance().v2m_1;
      case 'csv':
        return Text_getInstance().w2m_1;
      case 'jpg':
      case 'jpeg':
        return Image_getInstance().b2m_1;
      case 'png':
        return Image_getInstance().d2m_1;
      case 'gif':
        return Image_getInstance().y2l_1;
      case 'svg':
        return Image_getInstance().e2m_1;
      case 'mpeg':
        return Video_getInstance().e2n_1;
      case 'mp4':
        return Video_getInstance().f2n_1;
      case 'mov':
        return Video_getInstance().h2n_1;
      case 'webm':
        return ContentType_init_$Create$('video', 'webm');
      case 'json':
        return Application_getInstance().z2k_1;
      case 'xml':
        return Application_getInstance().f2l_1;
      case 'zip':
        return Application_getInstance().i2l_1;
      case 'pdf':
        return Application_getInstance().l2l_1;
    }
    return Application_getInstance().c2l_1;
  };
  function proceed($this, method, $completion) {
    var tmp = new $proceedCOROUTINE$($this, method, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function canSendOnly($this, param) {
    if (param.a55_1.equals(Type_JSON_getInstance()))
      return true;
    var tmp0_subject = param.g55();
    return tmp0_subject.equals(Application_getInstance().z2k_1) ? true : tmp0_subject.equals(Image_getInstance().b2m_1) ? true : tmp0_subject.equals(Image_getInstance().d2m_1) ? true : tmp0_subject.equals(Image_getInstance().y2l_1) ? true : tmp0_subject.equals(Video_getInstance().e2n_1) ? true : tmp0_subject.equals(Video_getInstance().f2n_1) ? true : tmp0_subject.equals(Video_getInstance().h2n_1) ? true : tmp0_subject.equals(ContentType_init_$Create$('video', 'webm')) ? true : false;
  }
  function HttpRequest$proceed$lambda($req) {
    return function ($this$HttpClient) {
      applySystemProxy($this$HttpClient);
      var tmp;
      if ($req.e56_1) {
        applySkipSSLValidation($this$HttpClient);
        tmp = Unit_instance;
      }
      $this$HttpClient.e3y_1 = $req.d56_1;
      return Unit_instance;
    };
  }
  function HttpRequest$proceed$lambda_0($req) {
    return function ($this$headers) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $req.a56_1.l1().t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        // Inline function 'kotlin.collections.component1' call
        var k = element.m1();
        // Inline function 'kotlin.collections.component2' call
        var v = element.n1();
        $this$headers.n2f(k, v);
      }
      return Unit_instance;
    };
  }
  function HttpRequest$proceed$lambda_1($req) {
    return function ($this$timeout) {
      $this$timeout.d4n($req.f56_1);
      $this$timeout.e4n($req.g56_1);
      $this$timeout.f4n($req.h56_1);
      return Unit_instance;
    };
  }
  function $proceedCOROUTINE$(_this__u8e3s4, method, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p55_1 = _this__u8e3s4;
    this.q55_1 = method;
  }
  protoOf($proceedCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            var req = this.p55_1;
            var client = HttpClient(HttpRequest$proceed$lambda(req));
            var tmp0_safe_receiver = this.p55_1.x55_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              this.p55_1.a56_1.v2('Accept', tmp0_safe_receiver);
            }

            var tmp1_safe_receiver = this.p55_1.y55_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              var tmp0 = this.p55_1.a56_1;
              var key = 'User-Agent';
              tmp0.v2(key, tmp1_safe_receiver);
            }

            this.r55_1 = Companion_getInstance_3();
            var this_0 = new HttpRequestBuilder();
            this_0.o3x_1 = this.q55_1;
            if (!(req.w55_1 == null)) {
              var tmp0_0 = req.w55_1;
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
              var tmp_0 = tmp$ret$0;
              takeFrom(this_0.n3x_1, URLBuilder(tmp_0));
            } else {
              url(this_0, req.s55_1, req.t55_1, req.v55_1, req.u55_1);
            }

            headers(this_0, HttpRequest$proceed$lambda_0(req));
            timeout(this_0, HttpRequest$proceed$lambda_1(req));
            if (!this.p55_1.b56_1 && !this.p55_1.c56_1 && req.z55_1.e1() === 1 && canSendOnly(this.p55_1, first(req.z55_1))) {
              var param = first(req.z55_1);
              var body = new ByteArrayContent(ensureNotNull(param.e55_1), param.g55());
              if (body == null) {
                this_0.q3x_1 = NullBody_instance;
                var tmp_1 = getKClass(ByteArrayContent);
                var tmp_2;
                try {
                  tmp_2 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
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
                this_0.i43(new TypeInfo(tmp_1, tmp_2));
              } else {
                if (body instanceof OutgoingContent) {
                  this_0.q3x_1 = body;
                  this_0.i43(null);
                } else {
                  this_0.q3x_1 = body;
                  var tmp_4 = getKClass(ByteArrayContent);
                  var tmp_5;
                  try {
                    tmp_5 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
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
                  this_0.i43(new TypeInfo(tmp_4, tmp_5));
                }
              }
            } else {
              if (this.q55_1.equals(Companion_getInstance_1().y2r_1)) {
                var _iterator__ex2g4s = req.z55_1.t();
                while (_iterator__ex2g4s.u()) {
                  var element = _iterator__ex2g4s.v();
                  if (element.a55_1.a1_1 === 0) {
                    this_0.n3x_1.k2v_1.n2f(element.b55_1, ensureNotNull(element.c55_1));
                  } else {
                    throw IllegalStateException_init_$Create$('Request Body is not supported in the GET method.');
                  }
                }
              } else {
                var tmp0_1 = req.z55_1;
                var destination = ArrayList_init_$Create$();
                var _iterator__ex2g4s_0 = tmp0_1.t();
                while (_iterator__ex2g4s_0.u()) {
                  var element_0 = _iterator__ex2g4s_0.v();
                  if (element_0.a55_1.equals(Type_QUERY_getInstance())) {
                    destination.b1(element_0);
                  }
                }
                var queries = destination;
                var tmp0_2 = req.z55_1;
                var destination_0 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_1 = tmp0_2.t();
                while (_iterator__ex2g4s_1.u()) {
                  var element_1 = _iterator__ex2g4s_1.v();
                  if (element_1.a55_1.equals(Type_PARAM_getInstance())) {
                    destination_0.b1(element_1);
                  }
                }
                var params = destination_0;
                var tmp0_3 = req.z55_1;
                var destination_1 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_2 = tmp0_3.t();
                while (_iterator__ex2g4s_2.u()) {
                  var element_2 = _iterator__ex2g4s_2.v();
                  if (element_2.a55_1.equals(Type_FILE_getInstance())) {
                    destination_1.b1(element_2);
                  }
                }
                var files = destination_1;
                if (!queries.r()) {
                  var _iterator__ex2g4s_3 = queries.t();
                  while (_iterator__ex2g4s_3.u()) {
                    var element_3 = _iterator__ex2g4s_3.v();
                    this_0.n3x_1.k2v_1.n2f(element_3.b55_1, ensureNotNull(element_3.c55_1));
                  }
                }
                var tmp_7;
                if (!params.r()) {
                  tmp_7 = true;
                } else {
                  tmp_7 = !files.r();
                }
                if (tmp_7) {
                  if (this.p55_1.c56_1) {
                    if (!files.r()) {
                      throw IllegalStateException_init_$Create$('ApplicationFormUrlEncoded cannot send files.');
                    }
                    contentType(this_0, Application_getInstance().k2l_1);
                    Companion_getInstance_0();
                    var this_1 = ParametersBuilder();
                    var _iterator__ex2g4s_4 = params.t();
                    while (_iterator__ex2g4s_4.u()) {
                      var element_4 = _iterator__ex2g4s_4.v();
                      this_1.n2f(element_4.b55_1, ensureNotNull(element_4.c55_1));
                    }
                    var body_0 = new FormDataContent(this_1.r2n());
                    if (body_0 == null) {
                      this_0.q3x_1 = NullBody_instance;
                      var tmp_8 = getKClass(FormDataContent);
                      var tmp_9;
                      try {
                        tmp_9 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                      } catch ($p) {
                        var tmp_10;
                        if ($p instanceof Error) {
                          var _unused_var__etf5q3_1 = $p;
                          tmp_10 = null;
                        } else {
                          throw $p;
                        }
                        tmp_9 = tmp_10;
                      }
                      this_0.i43(new TypeInfo(tmp_8, tmp_9));
                    } else {
                      if (body_0 instanceof OutgoingContent) {
                        this_0.q3x_1 = body_0;
                        this_0.i43(null);
                      } else {
                        this_0.q3x_1 = body_0;
                        var tmp_11 = getKClass(FormDataContent);
                        var tmp_12;
                        try {
                          tmp_12 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                        } catch ($p) {
                          var tmp_13;
                          if ($p instanceof Error) {
                            var _unused_var__etf5q3_2 = $p;
                            tmp_13 = null;
                          } else {
                            throw $p;
                          }
                          tmp_12 = tmp_13;
                        }
                        this_0.i43(new TypeInfo(tmp_11, tmp_12));
                      }
                    }
                  } else {
                    contentType(this_0, MultiPart_getInstance().n2m_1);
                    var this_2 = new FormBuilder();
                    var _iterator__ex2g4s_5 = params.t();
                    while (_iterator__ex2g4s_5.u()) {
                      var element_5 = _iterator__ex2g4s_5.v();
                      this_2.z4v(element_5.b55_1, ensureNotNull(element_5.c55_1));
                    }
                    var _iterator__ex2g4s_6 = files.t();
                    while (_iterator__ex2g4s_6.u()) {
                      var element_6 = _iterator__ex2g4s_6.v();
                      var tmp_14 = ensureNotNull(element_6.e55_1);
                      Companion_getInstance();
                      var this_3 = new HeadersBuilder();
                      append(this_3, 'Content-Type', element_6.g55());
                      this_3.n2f('Content-Disposition', 'filename=' + element_6.d55_1);
                      this_2.a4w(element_6.b55_1, tmp_14, this_3.r2n());
                    }
                    var this_4 = this_2.b4w();
                    var body_1 = new MultiPartFormDataContent(formData(copyToArray(this_4).slice()));
                    if (body_1 == null) {
                      this_0.q3x_1 = NullBody_instance;
                      var tmp_15 = getKClass(MultiPartFormDataContent);
                      var tmp_16;
                      try {
                        tmp_16 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                      } catch ($p) {
                        var tmp_17;
                        if ($p instanceof Error) {
                          var _unused_var__etf5q3_3 = $p;
                          tmp_17 = null;
                        } else {
                          throw $p;
                        }
                        tmp_16 = tmp_17;
                      }
                      this_0.i43(new TypeInfo(tmp_15, tmp_16));
                    } else {
                      if (body_1 instanceof OutgoingContent) {
                        this_0.q3x_1 = body_1;
                        this_0.i43(null);
                      } else {
                        this_0.q3x_1 = body_1;
                        var tmp_18 = getKClass(MultiPartFormDataContent);
                        var tmp_19;
                        try {
                          tmp_19 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                        } catch ($p) {
                          var tmp_20;
                          if ($p instanceof Error) {
                            var _unused_var__etf5q3_4 = $p;
                            tmp_20 = null;
                          } else {
                            throw $p;
                          }
                          tmp_19 = tmp_20;
                        }
                        this_0.i43(new TypeInfo(tmp_18, tmp_19));
                      }
                    }
                  }
                }
              }
            }

            this.n8_1 = 1;
            suspendResult = (new HttpStatement(this_0, client)).u4y(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.n8_1 = 2;
            suspendResult = this.r55_1.j56(ARGUMENT, this);
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
  function HttpRequest() {
    this.s55_1 = 'https';
    this.t55_1 = null;
    this.u55_1 = null;
    this.v55_1 = null;
    this.w55_1 = null;
    this.x55_1 = null;
    this.y55_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z55_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.a56_1 = LinkedHashMap_init_$Create$();
    this.b56_1 = false;
    this.c56_1 = false;
    this.d56_1 = true;
    this.e56_1 = false;
    this.f56_1 = null;
    this.g56_1 = null;
    this.h56_1 = null;
  }
  protoOf(HttpRequest).k56 = function (url) {
    // Inline function 'kotlin.also' call
    this.w55_1 = url;
    return this;
  };
  protoOf(HttpRequest).l56 = function (accept) {
    // Inline function 'kotlin.also' call
    this.x55_1 = accept;
    return this;
  };
  protoOf(HttpRequest).m56 = function (key, value) {
    // Inline function 'kotlin.also' call
    this.z55_1.b1(Companion_instance.x54(key, toString(value)));
    return this;
  };
  protoOf(HttpRequest).y54 = function (key, fileName, fileBody) {
    // Inline function 'kotlin.also' call
    this.z55_1.b1(Companion_instance.y54(key, fileName, fileBody));
    return this;
  };
  protoOf(HttpRequest).z54 = function (json) {
    // Inline function 'kotlin.also' call
    this.z55_1.b1(Companion_instance.z54(json));
    return this;
  };
  protoOf(HttpRequest).n56 = function ($completion) {
    return proceed(this, Companion_getInstance_1().z2r_1, $completion);
  };
  function HttpResponse$Companion$mapper$lambda($this$Json) {
    $this$Json.y30_1 = true;
    return Unit_instance;
  }
  function $fromCOROUTINE$(_this__u8e3s4, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w56_1 = _this__u8e3s4;
    this.x56_1 = response;
  }
  protoOf($fromCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.z56_1 = this.x56_1.m3z().v2u_1;
            this.y56_1 = toMap(this.x56_1.x2r());
            var this_0 = this.x56_1;
            this.n8_1 = 1;
            var tmp_0 = this_0.d3z();
            var tmp_1 = PrimitiveClasses_getInstance().vb();
            var tmp_2;
            try {
              tmp_2 = createKType(PrimitiveClasses_getInstance().vb(), arrayOf([]), false);
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
            var ARGUMENT = (!(suspendResult == null) ? isByteArray(suspendResult) : false) ? suspendResult : THROW_CCE();
            return new HttpResponse(this.z56_1, this.y56_1, ARGUMENT);
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
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.i56_1 = Json(VOID, HttpResponse$Companion$mapper$lambda);
  }
  protoOf(Companion_0).j56 = function (response, $completion) {
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
      return decodeToString(this$0.c57_1);
    };
  }
  function HttpResponse$_get_stringBody_$ref_nmyr7m() {
    return function (p0) {
      return p0.e57();
    };
  }
  function HttpResponse(status, headers, body) {
    Companion_getInstance_3();
    this.a57_1 = status;
    this.b57_1 = headers;
    this.c57_1 = body;
    var tmp = this;
    tmp.d57_1 = lazy(HttpResponse$stringBody$delegate$lambda(this));
  }
  protoOf(HttpResponse).e57 = function () {
    var tmp0 = this.d57_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('stringBody', 1, tmp, HttpResponse$_get_stringBody_$ref_nmyr7m(), null);
    return tmp0.n1();
  };
  function applySystemProxy(_this__u8e3s4) {
    var proxyUrl = proxyUrlFromEnv();
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(proxyUrl == null || isBlank(proxyUrl))) {
      _this__u8e3s4.u3y(applySystemProxy$lambda(proxyUrl));
    }
  }
  function applySystemProxy$lambda($proxyUrl) {
    return function ($this$engine) {
      $this$engine.z43_1 = ProxyBuilder_instance.w54(Url($proxyUrl));
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
