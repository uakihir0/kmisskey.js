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
  var Enum = kotlin_kotlin.$_$.of;
  var protoOf = kotlin_kotlin.$_$.yb;
  var initMetadataForClass = kotlin_kotlin.$_$.ya;
  var VOID = kotlin_kotlin.$_$.c;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.c1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.za;
  var split = kotlin_kotlin.$_$.ae;
  var lastOrNull = kotlin_kotlin.$_$.g7;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var Image_getInstance = kotlin_io_ktor_ktor_http.$_$.d;
  var Video_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var ContentType_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.n;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.f9;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.k;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.g;
  var url = kotlin_io_ktor_ktor_client_core.$_$.i;
  var toString = kotlin_kotlin.$_$.bc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.h1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.d2;
  var headers = kotlin_io_ktor_ktor_client_core.$_$.h;
  var timeout = kotlin_io_ktor_ktor_client_core.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h1;
  var ensureNotNull = kotlin_kotlin.$_$.pg;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var contentType = kotlin_io_ktor_ktor_http.$_$.s1;
  var FormBuilder = kotlin_io_ktor_ktor_client_core.$_$.c;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.e1;
  var append = kotlin_io_ktor_ktor_http.$_$.l1;
  var copyToArray = kotlin_kotlin.$_$.l6;
  var formData = kotlin_io_ktor_ktor_client_core.$_$.f;
  var MultiPartFormDataContent = kotlin_io_ktor_ktor_client_core.$_$.e;
  var getKClass = kotlin_kotlin.$_$.rc;
  var arrayOf = kotlin_kotlin.$_$.lg;
  var createKType = kotlin_kotlin.$_$.pc;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.m;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.x;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.m;
  var ParametersBuilder = kotlin_io_ktor_ktor_http.$_$.g1;
  var FormDataContent = kotlin_io_ktor_ktor_client_core.$_$.d;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.j;
  var first = kotlin_kotlin.$_$.v6;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.o;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.j;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.o8;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ab;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q1;
  var toMap = kotlin_io_ktor_ktor_utils.$_$.f1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.o;
  var THROW_CCE = kotlin_kotlin.$_$.yf;
  var isByteArray = kotlin_kotlin.$_$.hb;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.j;
  var decodeToString = kotlin_kotlin.$_$.ed;
  var lazy = kotlin_kotlin.$_$.vg;
  var KProperty1 = kotlin_kotlin.$_$.wc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.va;
  var isBlank = kotlin_kotlin.$_$.od;
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
  protoOf(Companion).g53 = function (key, value) {
    return new HttpParameter(Type_PARAM_getInstance(), key, value);
  };
  protoOf(Companion).h53 = function (key, fileName, fileBody) {
    return new HttpParameter(Type_FILE_getInstance(), key, null, fileName, fileBody);
  };
  protoOf(Companion).i53 = function (json) {
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
    this.j53_1 = type;
    this.k53_1 = key;
    this.l53_1 = value;
    this.m53_1 = fileName;
    this.n53_1 = fileBody;
  }
  protoOf(HttpParameter).o53 = function () {
    var tmp0_safe_receiver = this.m53_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : split(tmp0_safe_receiver, ['.']);
    return tmp1_safe_receiver == null ? null : lastOrNull(tmp1_safe_receiver);
  };
  protoOf(HttpParameter).p53 = function () {
    switch (this.o53()) {
      case 'txt':
        return Text_getInstance().i2m_1;
      case 'html':
        return Text_getInstance().l2m_1;
      case 'css':
        return Text_getInstance().j2m_1;
      case 'csv':
        return Text_getInstance().k2m_1;
      case 'jpg':
      case 'jpeg':
        return Image_getInstance().p2l_1;
      case 'png':
        return Image_getInstance().r2l_1;
      case 'gif':
        return Image_getInstance().m2l_1;
      case 'svg':
        return Image_getInstance().s2l_1;
      case 'mpeg':
        return Video_getInstance().s2m_1;
      case 'mp4':
        return Video_getInstance().t2m_1;
      case 'mov':
        return Video_getInstance().v2m_1;
      case 'webm':
        return ContentType_init_$Create$('video', 'webm');
      case 'json':
        return Application_getInstance().n2k_1;
      case 'xml':
        return Application_getInstance().t2k_1;
      case 'zip':
        return Application_getInstance().w2k_1;
      case 'pdf':
        return Application_getInstance().z2k_1;
    }
    return Application_getInstance().q2k_1;
  };
  function proceed($this, method, $completion) {
    var tmp = new $proceedCOROUTINE$($this, method, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function canSendOnly($this, param) {
    if (param.j53_1.equals(Type_JSON_getInstance()))
      return true;
    var tmp0_subject = param.p53();
    return tmp0_subject.equals(Application_getInstance().n2k_1) ? true : tmp0_subject.equals(Image_getInstance().p2l_1) ? true : tmp0_subject.equals(Image_getInstance().r2l_1) ? true : tmp0_subject.equals(Image_getInstance().m2l_1) ? true : tmp0_subject.equals(Video_getInstance().s2m_1) ? true : tmp0_subject.equals(Video_getInstance().t2m_1) ? true : tmp0_subject.equals(Video_getInstance().v2m_1) ? true : tmp0_subject.equals(ContentType_init_$Create$('video', 'webm')) ? true : false;
  }
  function HttpRequest$proceed$lambda($req) {
    return function ($this$HttpClient) {
      applySystemProxy($this$HttpClient);
      var tmp;
      if ($req.n54_1) {
        applySkipSSLValidation($this$HttpClient);
        tmp = Unit_instance;
      }
      $this$HttpClient.o3w_1 = $req.m54_1;
      return Unit_instance;
    };
  }
  function HttpRequest$proceed$lambda_0($req) {
    return function ($this$headers) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $req.j54_1.l1().t();
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
      $this$timeout.o4l($req.o54_1);
      $this$timeout.p4l($req.p54_1);
      $this$timeout.q4l($req.q54_1);
      return Unit_instance;
    };
  }
  function $proceedCOROUTINE$(_this__u8e3s4, method, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y53_1 = _this__u8e3s4;
    this.z53_1 = method;
  }
  protoOf($proceedCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            var req = this.y53_1;
            var client = HttpClient(HttpRequest$proceed$lambda(req));
            var tmp0_safe_receiver = this.y53_1.g54_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              this.y53_1.j54_1.v2('Accept', tmp0_safe_receiver);
            }

            var tmp1_safe_receiver = this.y53_1.h54_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              var tmp0 = this.y53_1.j54_1;
              var key = 'User-Agent';
              tmp0.v2(key, tmp1_safe_receiver);
            }

            this.a54_1 = Companion_getInstance_3();
            var this_0 = new HttpRequestBuilder();
            this_0.y3v_1 = this.z53_1;
            if (!(req.f54_1 == null)) {
              var tmp0_0 = req.f54_1;
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
              takeFrom(this_0.x3v_1, URLBuilder(tmp_0));
            } else {
              url(this_0, req.b54_1, req.c54_1, req.e54_1, req.d54_1);
            }

            headers(this_0, HttpRequest$proceed$lambda_0(req));
            timeout(this_0, HttpRequest$proceed$lambda_1(req));
            if (!this.y53_1.k54_1 && !this.y53_1.l54_1 && req.i54_1.e1() === 1 && canSendOnly(this.y53_1, first(req.i54_1))) {
              var param = first(req.i54_1);
              var body = new ByteArrayContent(ensureNotNull(param.n53_1), param.p53());
              if (body == null) {
                this_0.a3w_1 = NullBody_instance;
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
                this_0.s41(new TypeInfo(tmp_1, tmp_2));
              } else {
                if (body instanceof OutgoingContent) {
                  this_0.a3w_1 = body;
                  this_0.s41(null);
                } else {
                  this_0.a3w_1 = body;
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
                  this_0.s41(new TypeInfo(tmp_4, tmp_5));
                }
              }
            } else {
              if (this.z53_1.equals(Companion_getInstance_1().k2r_1)) {
                var _iterator__ex2g4s = req.i54_1.t();
                while (_iterator__ex2g4s.u()) {
                  var element = _iterator__ex2g4s.v();
                  if (element.j53_1.a1_1 === 0) {
                    this_0.x3v_1.w2u_1.n2f(element.k53_1, ensureNotNull(element.l53_1));
                  } else {
                    throw IllegalStateException_init_$Create$('Request Body is not supported in the GET method.');
                  }
                }
              } else {
                var tmp0_1 = req.i54_1;
                var destination = ArrayList_init_$Create$();
                var _iterator__ex2g4s_0 = tmp0_1.t();
                while (_iterator__ex2g4s_0.u()) {
                  var element_0 = _iterator__ex2g4s_0.v();
                  if (element_0.j53_1.equals(Type_QUERY_getInstance())) {
                    destination.b1(element_0);
                  }
                }
                var queries = destination;
                var tmp0_2 = req.i54_1;
                var destination_0 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_1 = tmp0_2.t();
                while (_iterator__ex2g4s_1.u()) {
                  var element_1 = _iterator__ex2g4s_1.v();
                  if (element_1.j53_1.equals(Type_PARAM_getInstance())) {
                    destination_0.b1(element_1);
                  }
                }
                var params = destination_0;
                var tmp0_3 = req.i54_1;
                var destination_1 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_2 = tmp0_3.t();
                while (_iterator__ex2g4s_2.u()) {
                  var element_2 = _iterator__ex2g4s_2.v();
                  if (element_2.j53_1.equals(Type_FILE_getInstance())) {
                    destination_1.b1(element_2);
                  }
                }
                var files = destination_1;
                if (!queries.r()) {
                  var _iterator__ex2g4s_3 = queries.t();
                  while (_iterator__ex2g4s_3.u()) {
                    var element_3 = _iterator__ex2g4s_3.v();
                    this_0.x3v_1.w2u_1.n2f(element_3.k53_1, ensureNotNull(element_3.l53_1));
                  }
                }
                var tmp_7;
                if (!params.r()) {
                  tmp_7 = true;
                } else {
                  tmp_7 = !files.r();
                }
                if (tmp_7) {
                  if (this.y53_1.l54_1) {
                    if (!files.r()) {
                      throw IllegalStateException_init_$Create$('ApplicationFormUrlEncoded cannot send files.');
                    }
                    contentType(this_0, Application_getInstance().y2k_1);
                    Companion_getInstance_0();
                    var this_1 = ParametersBuilder();
                    var _iterator__ex2g4s_4 = params.t();
                    while (_iterator__ex2g4s_4.u()) {
                      var element_4 = _iterator__ex2g4s_4.v();
                      this_1.n2f(element_4.k53_1, ensureNotNull(element_4.l53_1));
                    }
                    var body_0 = new FormDataContent(this_1.f2n());
                    if (body_0 == null) {
                      this_0.a3w_1 = NullBody_instance;
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
                      this_0.s41(new TypeInfo(tmp_8, tmp_9));
                    } else {
                      if (body_0 instanceof OutgoingContent) {
                        this_0.a3w_1 = body_0;
                        this_0.s41(null);
                      } else {
                        this_0.a3w_1 = body_0;
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
                        this_0.s41(new TypeInfo(tmp_11, tmp_12));
                      }
                    }
                  } else {
                    contentType(this_0, MultiPart_getInstance().b2m_1);
                    var this_2 = new FormBuilder();
                    var _iterator__ex2g4s_5 = params.t();
                    while (_iterator__ex2g4s_5.u()) {
                      var element_5 = _iterator__ex2g4s_5.v();
                      this_2.j4u(element_5.k53_1, ensureNotNull(element_5.l53_1));
                    }
                    var _iterator__ex2g4s_6 = files.t();
                    while (_iterator__ex2g4s_6.u()) {
                      var element_6 = _iterator__ex2g4s_6.v();
                      var tmp_14 = ensureNotNull(element_6.n53_1);
                      Companion_getInstance();
                      var this_3 = new HeadersBuilder();
                      append(this_3, 'Content-Type', element_6.p53());
                      this_3.n2f('Content-Disposition', 'filename=' + element_6.m53_1);
                      this_2.k4u(element_6.k53_1, tmp_14, this_3.f2n());
                    }
                    var this_4 = this_2.l4u();
                    var body_1 = new MultiPartFormDataContent(formData(copyToArray(this_4).slice()));
                    if (body_1 == null) {
                      this_0.a3w_1 = NullBody_instance;
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
                      this_0.s41(new TypeInfo(tmp_15, tmp_16));
                    } else {
                      if (body_1 instanceof OutgoingContent) {
                        this_0.a3w_1 = body_1;
                        this_0.s41(null);
                      } else {
                        this_0.a3w_1 = body_1;
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
                        this_0.s41(new TypeInfo(tmp_18, tmp_19));
                      }
                    }
                  }
                }
              }
            }

            this.n8_1 = 1;
            suspendResult = (new HttpStatement(this_0, client)).d4x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.n8_1 = 2;
            suspendResult = this.a54_1.s54(ARGUMENT, this);
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
    this.b54_1 = 'https';
    this.c54_1 = null;
    this.d54_1 = null;
    this.e54_1 = null;
    this.f54_1 = null;
    this.g54_1 = null;
    this.h54_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.i54_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.j54_1 = LinkedHashMap_init_$Create$();
    this.k54_1 = false;
    this.l54_1 = false;
    this.m54_1 = true;
    this.n54_1 = false;
    this.o54_1 = null;
    this.p54_1 = null;
    this.q54_1 = null;
  }
  protoOf(HttpRequest).t54 = function (url) {
    // Inline function 'kotlin.also' call
    this.f54_1 = url;
    return this;
  };
  protoOf(HttpRequest).u54 = function (accept) {
    // Inline function 'kotlin.also' call
    this.g54_1 = accept;
    return this;
  };
  protoOf(HttpRequest).v54 = function (key, value) {
    // Inline function 'kotlin.also' call
    this.i54_1.b1(Companion_instance.g53(key, toString(value)));
    return this;
  };
  protoOf(HttpRequest).h53 = function (key, fileName, fileBody) {
    // Inline function 'kotlin.also' call
    this.i54_1.b1(Companion_instance.h53(key, fileName, fileBody));
    return this;
  };
  protoOf(HttpRequest).i53 = function (json) {
    // Inline function 'kotlin.also' call
    this.i54_1.b1(Companion_instance.i53(json));
    return this;
  };
  protoOf(HttpRequest).w54 = function ($completion) {
    return proceed(this, Companion_getInstance_1().l2r_1, $completion);
  };
  function HttpResponse$Companion$mapper$lambda($this$Json) {
    $this$Json.i2z_1 = true;
    return Unit_instance;
  }
  function $fromCOROUTINE$(_this__u8e3s4, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f55_1 = _this__u8e3s4;
    this.g55_1 = response;
  }
  protoOf($fromCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.i55_1 = this.g55_1.w3x().h2u_1;
            this.h55_1 = toMap(this.g55_1.j2r());
            var this_0 = this.g55_1;
            this.n8_1 = 1;
            var tmp_0 = this_0.n3x();
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

            suspendResult = tmp_0.k3x(new TypeInfo(tmp_1, tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = (!(suspendResult == null) ? isByteArray(suspendResult) : false) ? suspendResult : THROW_CCE();
            return new HttpResponse(this.i55_1, this.h55_1, ARGUMENT);
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
    tmp.r54_1 = Json(VOID, HttpResponse$Companion$mapper$lambda);
  }
  protoOf(Companion_0).s54 = function (response, $completion) {
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
      return decodeToString(this$0.l55_1);
    };
  }
  function HttpResponse$_get_stringBody_$ref_nmyr7m() {
    return function (p0) {
      return p0.n55();
    };
  }
  function HttpResponse(status, headers, body) {
    Companion_getInstance_3();
    this.j55_1 = status;
    this.k55_1 = headers;
    this.l55_1 = body;
    var tmp = this;
    tmp.m55_1 = lazy(HttpResponse$stringBody$delegate$lambda(this));
  }
  protoOf(HttpResponse).n55 = function () {
    var tmp0 = this.m55_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('stringBody', 1, tmp, HttpResponse$_get_stringBody_$ref_nmyr7m(), null);
    return tmp0.n1();
  };
  function applySystemProxy(_this__u8e3s4) {
    var proxyUrl = proxyUrlFromEnv();
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(proxyUrl == null || isBlank(proxyUrl))) {
      _this__u8e3s4.e3x(applySystemProxy$lambda(proxyUrl));
    }
  }
  function applySystemProxy$lambda($proxyUrl) {
    return function ($this$engine) {
      $this$engine.j42_1 = ProxyBuilder_instance.f53(Url($proxyUrl));
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
