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
  var Unit_instance = kotlin_kotlin.$_$.v4;
  var Enum = kotlin_kotlin.$_$.cf;
  var protoOf = kotlin_kotlin.$_$.ob;
  var initMetadataForClass = kotlin_kotlin.$_$.oa;
  var VOID = kotlin_kotlin.$_$.b;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.b1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.pa;
  var split = kotlin_kotlin.$_$.pd;
  var lastOrNull = kotlin_kotlin.$_$.x6;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var Image_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var Video_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var ContentType_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.a;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.c;
  var ensureNotNull = kotlin_kotlin.$_$.dg;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.e1;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.j;
  var append = kotlin_io_ktor_ktor_http.$_$.l1;
  var CoroutineImpl = kotlin_kotlin.$_$.v8;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.j;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.f;
  var url = kotlin_io_ktor_ktor_client_core.$_$.h;
  var toString = kotlin_kotlin.$_$.rb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.h1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.d2;
  var headers = kotlin_io_ktor_ktor_client_core.$_$.g;
  var timeout = kotlin_io_ktor_ktor_client_core.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var contentType = kotlin_io_ktor_ktor_http.$_$.s1;
  var formData = kotlin_io_ktor_ktor_client_core.$_$.e;
  var MultiPartFormDataContent = kotlin_io_ktor_ktor_client_core.$_$.d;
  var getKClass = kotlin_kotlin.$_$.gc;
  var arrayOf = kotlin_kotlin.$_$.zf;
  var createKType = kotlin_kotlin.$_$.ec;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.j;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.x;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.b;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.n;
  var ParametersBuilder = kotlin_io_ktor_ktor_http.$_$.g1;
  var FormDataContent = kotlin_io_ktor_ktor_client_core.$_$.c;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.k;
  var first = kotlin_kotlin.$_$.m6;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.o;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.i;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.e8;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.qa;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  var toMap = kotlin_io_ktor_ktor_utils.$_$.a1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.k4;
  var THROW_CCE = kotlin_kotlin.$_$.mf;
  var isByteArray = kotlin_kotlin.$_$.xa;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.j;
  var decodeToString = kotlin_kotlin.$_$.tc;
  var lazy = kotlin_kotlin.$_$.jg;
  var KProperty1 = kotlin_kotlin.$_$.lc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.la;
  var isBlank = kotlin_kotlin.$_$.dd;
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
  protoOf(Companion).w4o = function (key, value) {
    return new HttpParameter(Type_PARAM_getInstance(), key, value);
  };
  protoOf(Companion).x4o = function (key, fileName, fileBody) {
    return new HttpParameter(Type_FILE_getInstance(), key, null, fileName, fileBody);
  };
  protoOf(Companion).y4o = function (json) {
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
    this.z4o_1 = type;
    this.a4p_1 = key;
    this.b4p_1 = value;
    this.c4p_1 = fileName;
    this.d4p_1 = fileBody;
  }
  protoOf(HttpParameter).e4p = function () {
    var tmp0_safe_receiver = this.c4p_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : split(tmp0_safe_receiver, ['.']);
    return tmp1_safe_receiver == null ? null : lastOrNull(tmp1_safe_receiver);
  };
  protoOf(HttpParameter).f4p = function () {
    switch (this.e4p()) {
      case 'txt':
        return Text_getInstance().n2i_1;
      case 'html':
        return Text_getInstance().q2i_1;
      case 'css':
        return Text_getInstance().o2i_1;
      case 'csv':
        return Text_getInstance().p2i_1;
      case 'jpg':
      case 'jpeg':
        return Image_getInstance().u2h_1;
      case 'png':
        return Image_getInstance().w2h_1;
      case 'gif':
        return Image_getInstance().r2h_1;
      case 'svg':
        return Image_getInstance().x2h_1;
      case 'mpeg':
        return Video_getInstance().x2i_1;
      case 'mp4':
        return Video_getInstance().y2i_1;
      case 'mov':
        return Video_getInstance().a2j_1;
      case 'webm':
        return ContentType_init_$Create$('video', 'webm');
      case 'json':
        return Application_getInstance().s2g_1;
      case 'xml':
        return Application_getInstance().y2g_1;
      case 'zip':
        return Application_getInstance().b2h_1;
      case 'pdf':
        return Application_getInstance().e2h_1;
    }
    return Application_getInstance().v2g_1;
  };
  function proceed($this, method, $completion) {
    var tmp = new $proceedCOROUTINE$($this, method, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function canSendOnly($this, param) {
    if (param.z4o_1.equals(Type_JSON_getInstance()))
      return true;
    var tmp0_subject = param.f4p();
    return tmp0_subject.equals(Application_getInstance().s2g_1) ? true : tmp0_subject.equals(Image_getInstance().u2h_1) ? true : tmp0_subject.equals(Image_getInstance().w2h_1) ? true : tmp0_subject.equals(Image_getInstance().r2h_1) ? true : tmp0_subject.equals(Video_getInstance().x2i_1) ? true : tmp0_subject.equals(Video_getInstance().y2i_1) ? true : tmp0_subject.equals(Video_getInstance().a2j_1) ? true : tmp0_subject.equals(ContentType_init_$Create$('video', 'webm')) ? true : false;
  }
  function HttpRequest$proceed$lambda($req) {
    return function ($this$HttpClient) {
      applySystemProxy($this$HttpClient);
      var tmp;
      if ($req.d4q_1) {
        applySkipSSLValidation($this$HttpClient);
        tmp = Unit_instance;
      }
      $this$HttpClient.b3k_1 = $req.c4q_1;
      return Unit_instance;
    };
  }
  function HttpRequest$proceed$lambda_0($req) {
    return function ($this$headers) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $req.z4p_1.k1().t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        // Inline function 'kotlin.collections.component1' call
        var k = element.l1();
        // Inline function 'kotlin.collections.component2' call
        var v = element.m1();
        $this$headers.y2b(k, v);
      }
      return Unit_instance;
    };
  }
  function HttpRequest$proceed$lambda_1($req) {
    return function ($this$timeout) {
      $this$timeout.f49($req.e4q_1);
      $this$timeout.g49($req.f4q_1);
      $this$timeout.h49($req.g4q_1);
      return Unit_instance;
    };
  }
  function HttpRequest$proceed$lambda_2($params, $files) {
    return function ($this$formData) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = $params.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        $this$formData.e4g(element.a4p_1, ensureNotNull(element.b4p_1));
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = $files.t();
      while (_iterator__ex2g4s_0.u()) {
        var element_0 = _iterator__ex2g4s_0.v();
        var tmp = ensureNotNull(element_0.d4p_1);
        // Inline function 'io.ktor.http.Companion.build' call
        Companion_getInstance();
        // Inline function 'kotlin.apply' call
        var this_0 = new HeadersBuilder();
        append(this_0, HttpHeaders_getInstance().d2k_1, element_0.f4p());
        this_0.y2b(HttpHeaders_getInstance().x2j_1, 'filename=' + element_0.c4p_1);
        var tmp$ret$4 = this_0.k2j();
        $this$formData.f4g(element_0.a4p_1, tmp, tmp$ret$4);
      }
      return Unit_instance;
    };
  }
  function $proceedCOROUTINE$(_this__u8e3s4, method, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o4p_1 = _this__u8e3s4;
    this.p4p_1 = method;
  }
  protoOf($proceedCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            var req = this.o4p_1;
            var client = HttpClient(HttpRequest$proceed$lambda(req));
            var tmp0_safe_receiver = this.o4p_1.w4p_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              this.o4p_1.z4p_1.v2('Accept', tmp0_safe_receiver);
            }

            var tmp1_safe_receiver = this.o4p_1.x4p_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              var tmp0 = this.o4p_1.z4p_1;
              var key = 'User-Agent';
              tmp0.v2(key, tmp1_safe_receiver);
            }

            this.q4p_1 = Companion_getInstance_3();
            var this_0 = new HttpRequestBuilder();
            this_0.l3j_1 = this.p4p_1;
            if (!(req.v4p_1 == null)) {
              var tmp0_0 = req.v4p_1;
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
              takeFrom(this_0.k3j_1, URLBuilder(tmp_0));
            } else {
              url(this_0, req.r4p_1, req.s4p_1, req.u4p_1, req.t4p_1);
            }

            headers(this_0, HttpRequest$proceed$lambda_0(req));
            timeout(this_0, HttpRequest$proceed$lambda_1(req));
            if (!this.o4p_1.a4q_1 && !this.o4p_1.b4q_1 && req.y4p_1.e1() === 1 && canSendOnly(this.o4p_1, first(req.y4p_1))) {
              var param = first(req.y4p_1);
              var body = new ByteArrayContent(ensureNotNull(param.d4p_1), param.f4p());
              if (body == null) {
                this_0.n3j_1 = NullBody_instance;
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
                this_0.f3p(new TypeInfo(tmp_1, tmp_2));
              } else {
                if (body instanceof OutgoingContent) {
                  this_0.n3j_1 = body;
                  this_0.f3p(null);
                } else {
                  this_0.n3j_1 = body;
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
                  this_0.f3p(new TypeInfo(tmp_4, tmp_5));
                }
              }
            } else {
              if (this.p4p_1.equals(Companion_getInstance_1().p2n_1)) {
                var _iterator__ex2g4s = req.y4p_1.t();
                while (_iterator__ex2g4s.u()) {
                  var element = _iterator__ex2g4s.v();
                  if (element.z4o_1.a1_1 === 0) {
                    this_0.k3j_1.z2q_1.y2b(element.a4p_1, ensureNotNull(element.b4p_1));
                  } else {
                    throw IllegalStateException_init_$Create$('Request Body is not supported in the GET method.');
                  }
                }
              } else {
                var tmp0_1 = req.y4p_1;
                var destination = ArrayList_init_$Create$();
                var _iterator__ex2g4s_0 = tmp0_1.t();
                while (_iterator__ex2g4s_0.u()) {
                  var element_0 = _iterator__ex2g4s_0.v();
                  if (element_0.z4o_1.equals(Type_QUERY_getInstance())) {
                    destination.b1(element_0);
                  }
                }
                var queries = destination;
                var tmp0_2 = req.y4p_1;
                var destination_0 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_1 = tmp0_2.t();
                while (_iterator__ex2g4s_1.u()) {
                  var element_1 = _iterator__ex2g4s_1.v();
                  if (element_1.z4o_1.equals(Type_PARAM_getInstance())) {
                    destination_0.b1(element_1);
                  }
                }
                var params = destination_0;
                var tmp0_3 = req.y4p_1;
                var destination_1 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_2 = tmp0_3.t();
                while (_iterator__ex2g4s_2.u()) {
                  var element_2 = _iterator__ex2g4s_2.v();
                  if (element_2.z4o_1.equals(Type_FILE_getInstance())) {
                    destination_1.b1(element_2);
                  }
                }
                var files = destination_1;
                if (!queries.r()) {
                  var _iterator__ex2g4s_3 = queries.t();
                  while (_iterator__ex2g4s_3.u()) {
                    var element_3 = _iterator__ex2g4s_3.v();
                    this_0.k3j_1.z2q_1.y2b(element_3.a4p_1, ensureNotNull(element_3.b4p_1));
                  }
                }
                var tmp_7;
                if (!params.r()) {
                  tmp_7 = true;
                } else {
                  tmp_7 = !files.r();
                }
                if (tmp_7) {
                  if (this.o4p_1.b4q_1) {
                    if (!files.r()) {
                      throw IllegalStateException_init_$Create$('ApplicationFormUrlEncoded cannot send files.');
                    }
                    contentType(this_0, Application_getInstance().d2h_1);
                    Companion_getInstance_0();
                    var this_1 = ParametersBuilder();
                    var _iterator__ex2g4s_4 = params.t();
                    while (_iterator__ex2g4s_4.u()) {
                      var element_4 = _iterator__ex2g4s_4.v();
                      this_1.y2b(element_4.a4p_1, ensureNotNull(element_4.b4p_1));
                    }
                    var body_0 = new FormDataContent(this_1.k2j());
                    if (body_0 == null) {
                      this_0.n3j_1 = NullBody_instance;
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
                      this_0.f3p(new TypeInfo(tmp_8, tmp_9));
                    } else {
                      if (body_0 instanceof OutgoingContent) {
                        this_0.n3j_1 = body_0;
                        this_0.f3p(null);
                      } else {
                        this_0.n3j_1 = body_0;
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
                        this_0.f3p(new TypeInfo(tmp_11, tmp_12));
                      }
                    }
                  } else {
                    contentType(this_0, MultiPart_getInstance().g2i_1);
                    var body_1 = new MultiPartFormDataContent(formData(HttpRequest$proceed$lambda_2(params, files)));
                    if (body_1 == null) {
                      this_0.n3j_1 = NullBody_instance;
                      var tmp_14 = getKClass(MultiPartFormDataContent);
                      var tmp_15;
                      try {
                        tmp_15 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                      } catch ($p) {
                        var tmp_16;
                        if ($p instanceof Error) {
                          var _unused_var__etf5q3_3 = $p;
                          tmp_16 = null;
                        } else {
                          throw $p;
                        }
                        tmp_15 = tmp_16;
                      }
                      this_0.f3p(new TypeInfo(tmp_14, tmp_15));
                    } else {
                      if (body_1 instanceof OutgoingContent) {
                        this_0.n3j_1 = body_1;
                        this_0.f3p(null);
                      } else {
                        this_0.n3j_1 = body_1;
                        var tmp_17 = getKClass(MultiPartFormDataContent);
                        var tmp_18;
                        try {
                          tmp_18 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                        } catch ($p) {
                          var tmp_19;
                          if ($p instanceof Error) {
                            var _unused_var__etf5q3_4 = $p;
                            tmp_19 = null;
                          } else {
                            throw $p;
                          }
                          tmp_18 = tmp_19;
                        }
                        this_0.f3p(new TypeInfo(tmp_17, tmp_18));
                      }
                    }
                  }
                }
              }
            }

            this.n8_1 = 1;
            suspendResult = (new HttpStatement(this_0, client)).x4i(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.n8_1 = 2;
            suspendResult = this.q4p_1.i4q(ARGUMENT, this);
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
    this.r4p_1 = 'https';
    this.s4p_1 = null;
    this.t4p_1 = null;
    this.u4p_1 = null;
    this.v4p_1 = null;
    this.w4p_1 = null;
    this.x4p_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.y4p_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.z4p_1 = LinkedHashMap_init_$Create$();
    this.a4q_1 = false;
    this.b4q_1 = false;
    this.c4q_1 = true;
    this.d4q_1 = false;
    this.e4q_1 = null;
    this.f4q_1 = null;
    this.g4q_1 = null;
  }
  protoOf(HttpRequest).j4q = function (url) {
    // Inline function 'kotlin.also' call
    this.v4p_1 = url;
    return this;
  };
  protoOf(HttpRequest).k4q = function (accept) {
    // Inline function 'kotlin.also' call
    this.w4p_1 = accept;
    return this;
  };
  protoOf(HttpRequest).l4q = function (key, value) {
    // Inline function 'kotlin.also' call
    this.y4p_1.b1(Companion_instance.w4o(key, toString(value)));
    return this;
  };
  protoOf(HttpRequest).x4o = function (key, fileName, fileBody) {
    // Inline function 'kotlin.also' call
    this.y4p_1.b1(Companion_instance.x4o(key, fileName, fileBody));
    return this;
  };
  protoOf(HttpRequest).y4o = function (json) {
    // Inline function 'kotlin.also' call
    this.y4p_1.b1(Companion_instance.y4o(json));
    return this;
  };
  protoOf(HttpRequest).m4q = function ($completion) {
    return proceed(this, Companion_getInstance_1().q2n_1, $completion);
  };
  function HttpResponse$Companion$mapper$lambda($this$Json) {
    $this$Json.k2v_1 = true;
    return Unit_instance;
  }
  function $fromCOROUTINE$(_this__u8e3s4, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v4q_1 = _this__u8e3s4;
    this.w4q_1 = response;
  }
  protoOf($fromCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.y4q_1 = this.w4q_1.j3l().k2q_1;
            this.x4q_1 = toMap(this.w4q_1.o2n());
            var this_0 = this.w4q_1;
            this.n8_1 = 1;
            var tmp_0 = this_0.a3l();
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

            suspendResult = tmp_0.x3k(new TypeInfo(tmp_1, tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = (!(suspendResult == null) ? isByteArray(suspendResult) : false) ? suspendResult : THROW_CCE();
            return new HttpResponse(this.y4q_1, this.x4q_1, ARGUMENT);
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
    tmp.h4q_1 = Json(VOID, HttpResponse$Companion$mapper$lambda);
  }
  protoOf(Companion_0).i4q = function (response, $completion) {
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
      return decodeToString(this$0.b4r_1);
    };
  }
  function HttpResponse$_get_stringBody_$ref_nmyr7m() {
    return function (p0) {
      return p0.d4r();
    };
  }
  function HttpResponse(status, headers, body) {
    Companion_getInstance_3();
    this.z4q_1 = status;
    this.a4r_1 = headers;
    this.b4r_1 = body;
    var tmp = this;
    tmp.c4r_1 = lazy(HttpResponse$stringBody$delegate$lambda(this));
  }
  protoOf(HttpResponse).d4r = function () {
    var tmp0 = this.c4r_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('stringBody', 1, tmp, HttpResponse$_get_stringBody_$ref_nmyr7m(), null);
    return tmp0.m1();
  };
  function applySystemProxy(_this__u8e3s4) {
    var proxyUrl = proxyUrlFromEnv();
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(proxyUrl == null || isBlank(proxyUrl))) {
      _this__u8e3s4.r3k(applySystemProxy$lambda(proxyUrl));
    }
  }
  function applySystemProxy$lambda($proxyUrl) {
    return function ($this$engine) {
      $this$engine.w3p_1 = ProxyBuilder_instance.s4o(Url($proxyUrl));
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
