(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-io.js', './ktor-ktor-utils.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-http'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-http'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-http'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'ktor-ktor-http'.");
    }
    globalThis['ktor-ktor-http'] = factory(typeof globalThis['ktor-ktor-http'] === 'undefined' ? {} : globalThis['ktor-ktor-http'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-io'], globalThis['ktor-ktor-utils'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.b;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.m;
  var charCodeAt = kotlin_kotlin.$_$.x9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d2;
  var substring = kotlin_kotlin.$_$.sd;
  var toString = kotlin_kotlin.$_$.nb;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.z;
  var Unit_instance = kotlin_kotlin.$_$.u4;
  var charSequenceGet = kotlin_kotlin.$_$.y9;
  var charSequenceLength = kotlin_kotlin.$_$.z9;
  var charSequenceSubSequence = kotlin_kotlin.$_$.aa;
  var toString_0 = kotlin_kotlin.$_$.k2;
  var toByte = kotlin_kotlin.$_$.lb;
  var decodeToString = kotlin_kotlin.$_$.qc;
  var Exception = kotlin_kotlin.$_$.ze;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.e1;
  var captureStack = kotlin_kotlin.$_$.u9;
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForClass = kotlin_kotlin.$_$.ja;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.f2;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var encode = kotlin_io_ktor_ktor_io.$_$.r;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.h2;
  var Char__minus_impl_a2frrh_0 = kotlin_kotlin.$_$.g2;
  var takeWhile = kotlin_io_ktor_ktor_io.$_$.a1;
  var charArray = kotlin_kotlin.$_$.w9;
  var concatToString = kotlin_kotlin.$_$.lc;
  var Char = kotlin_kotlin.$_$.se;
  var isSurrogate = kotlin_kotlin.$_$.ad;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.j2;
  var numberToChar = kotlin_kotlin.$_$.hb;
  var canRead = kotlin_io_ktor_ktor_io.$_$.x;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.i2;
  var plus = kotlin_kotlin.$_$.e7;
  var plus_0 = kotlin_kotlin.$_$.f7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.n5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var toSet = kotlin_kotlin.$_$.y7;
  var setOf = kotlin_kotlin.$_$.l7;
  var plus_1 = kotlin_kotlin.$_$.d7;
  var listOf = kotlin_kotlin.$_$.z6;
  var last = kotlin_kotlin.$_$.x6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ka;
  var emptyList = kotlin_kotlin.$_$.f6;
  var equals = kotlin_kotlin.$_$.da;
  var getStringHashCode = kotlin_kotlin.$_$.ha;
  var hashCode = kotlin_kotlin.$_$.ia;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var equals_0 = kotlin_kotlin.$_$.uc;
  var Collection = kotlin_kotlin.$_$.w4;
  var isInterface = kotlin_kotlin.$_$.ya;
  var isBlank = kotlin_kotlin.$_$.zc;
  var indexOf = kotlin_kotlin.$_$.yc;
  var THROW_CCE = kotlin_kotlin.$_$.hf;
  var isCharSequence = kotlin_kotlin.$_$.ua;
  var trim = kotlin_kotlin.$_$.me;
  var substring_0 = kotlin_kotlin.$_$.rd;
  var contains = kotlin_kotlin.$_$.oc;
  var initMetadataForObject = kotlin_kotlin.$_$.pa;
  var startsWith = kotlin_kotlin.$_$.nd;
  var plus_2 = kotlin_kotlin.$_$.g7;
  var forName = kotlin_io_ktor_ktor_io.$_$.s;
  var IllegalArgumentException = kotlin_kotlin.$_$.af;
  var get_name = kotlin_io_ktor_ktor_io.$_$.t;
  var get_lastIndex = kotlin_kotlin.$_$.v6;
  var first = kotlin_kotlin.$_$.vc;
  var last_0 = kotlin_kotlin.$_$.ed;
  var get_lastIndex_0 = kotlin_kotlin.$_$.cd;
  var StringValuesBuilderImpl = kotlin_io_ktor_ktor_utils.$_$.r;
  var listOf_0 = kotlin_kotlin.$_$.y6;
  var emptySet = kotlin_kotlin.$_$.h6;
  var get = kotlin_io_ktor_ktor_utils.$_$.q;
  var forEach = kotlin_io_ktor_ktor_utils.$_$.p;
  var StringValues = kotlin_io_ktor_ktor_utils.$_$.u;
  var StringValuesImpl = kotlin_io_ktor_ktor_utils.$_$.s;
  var emptyMap = kotlin_kotlin.$_$.g6;
  var StringValuesSingleImpl = kotlin_io_ktor_ktor_utils.$_$.t;
  var toDoubleOrNull = kotlin_kotlin.$_$.wd;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.c;
  var lazy = kotlin_kotlin.$_$.dg;
  var to = kotlin_kotlin.$_$.kg;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var asList = kotlin_kotlin.$_$.l5;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.e2;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.j1;
  var toLongOrNull = kotlin_kotlin.$_$.ce;
  var mapCapacity = kotlin_kotlin.$_$.a7;
  var coerceAtLeast = kotlin_kotlin.$_$.sb;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var Comparable = kotlin_kotlin.$_$.te;
  var addAll = kotlin_kotlin.$_$.j5;
  var joinTo = kotlin_kotlin.$_$.t6;
  var toString_1 = kotlin_kotlin.$_$.jg;
  var initMetadataForInterface = kotlin_kotlin.$_$.na;
  var isWhitespace = kotlin_kotlin.$_$.bd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var startsWith_0 = kotlin_kotlin.$_$.md;
  var charArrayOf = kotlin_kotlin.$_$.v9;
  var split = kotlin_kotlin.$_$.jd;
  var toMutableList = kotlin_kotlin.$_$.x7;
  var first_0 = kotlin_kotlin.$_$.l6;
  var joinToString = kotlin_kotlin.$_$.r6;
  var toCharArray = kotlin_io_ktor_ktor_utils.$_$.y;
  var indexOfAny = kotlin_kotlin.$_$.wc;
  var dropLast = kotlin_kotlin.$_$.e6;
  var IllegalStateException = kotlin_kotlin.$_$.bf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.p1;
  var indexOf_0 = kotlin_kotlin.$_$.xc;
  var toInt = kotlin_kotlin.$_$.ae;
  var toLowerCasePreservingASCIIRules = kotlin_io_ktor_ktor_utils.$_$.z;
  var isLowerCase = kotlin_io_ktor_ktor_utils.$_$.w;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.v;
  var startsWith_1 = kotlin_kotlin.$_$.ld;
  var lazy_0 = kotlin_kotlin.$_$.eg;
  var KProperty1 = kotlin_kotlin.$_$.hc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ga;
  var getKClassFromExpression = kotlin_kotlin.$_$.bc;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var fromInt = kotlin_kotlin.$_$.g9;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.b1;
  var take = kotlin_kotlin.$_$.td;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(URLDecodeException, 'URLDecodeException', VOID, Exception);
  initMetadataForCompanion(Companion);
  initMetadataForClass(HeaderValueWithParameters, 'HeaderValueWithParameters');
  initMetadataForClass(ContentDisposition, 'ContentDisposition', VOID, HeaderValueWithParameters);
  initMetadataForCompanion(Companion_0);
  initMetadataForObject(Application, 'Application');
  initMetadataForObject(Image, 'Image');
  initMetadataForObject(MultiPart, 'MultiPart');
  initMetadataForObject(Text, 'Text');
  initMetadataForObject(Video, 'Video');
  initMetadataForClass(ContentType, 'ContentType', VOID, HeaderValueWithParameters);
  initMetadataForClass(BadContentTypeFormatException, 'BadContentTypeFormatException', VOID, Exception);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(HeadersBuilder, 'HeadersBuilder', HeadersBuilder, StringValuesBuilderImpl);
  initMetadataForObject(EmptyHeaders, 'EmptyHeaders', VOID, VOID, [StringValues]);
  initMetadataForClass(HeadersImpl, 'HeadersImpl', HeadersImpl, StringValuesImpl, [StringValues, StringValuesImpl]);
  initMetadataForClass(HeadersSingleImpl, 'HeadersSingleImpl', VOID, StringValuesSingleImpl, [StringValues, StringValuesSingleImpl]);
  initMetadataForClass(HeaderValueParam, 'HeaderValueParam');
  initMetadataForClass(HeaderValue, 'HeaderValue');
  initMetadataForObject(HttpHeaders, 'HttpHeaders');
  initMetadataForClass(UnsafeHeaderException, 'UnsafeHeaderException', VOID, IllegalArgumentException);
  initMetadataForClass(IllegalHeaderNameException, 'IllegalHeaderNameException', VOID, IllegalArgumentException);
  initMetadataForClass(IllegalHeaderValueException, 'IllegalHeaderValueException', VOID, IllegalArgumentException);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(HttpMethod, 'HttpMethod');
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(HttpProtocolVersion, 'HttpProtocolVersion');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(HttpStatusCode, 'HttpStatusCode', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_6);
  initMetadataForInterface(Parameters, 'Parameters', VOID, VOID, [StringValues]);
  initMetadataForObject(EmptyParameters, 'EmptyParameters', VOID, VOID, [Parameters]);
  initMetadataForClass(ParametersBuilderImpl, 'ParametersBuilderImpl', ParametersBuilderImpl, StringValuesBuilderImpl);
  initMetadataForClass(ParametersImpl, 'ParametersImpl', ParametersImpl, StringValuesImpl, [Parameters, StringValuesImpl]);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(URLBuilder, 'URLBuilder', URLBuilder);
  initMetadataForClass(URLParserException, 'URLParserException', VOID, IllegalStateException);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(URLProtocol, 'URLProtocol');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(Url_0, 'Url', VOID, VOID, VOID, VOID, VOID, {0: UrlSerializer_getInstance});
  initMetadataForObject(UrlSerializer, 'UrlSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(UrlDecodedParametersBuilder, 'UrlDecodedParametersBuilder');
  initMetadataForClass(OutgoingContent, 'OutgoingContent');
  initMetadataForClass(ByteArrayContent_0, 'ByteArrayContent', VOID, OutgoingContent);
  initMetadataForClass(ByteArrayContent, 'ByteArrayContent', VOID, ByteArrayContent_0);
  initMetadataForInterface(MultiPartData, 'MultiPartData', VOID, VOID, VOID, [0]);
  initMetadataForClass(PartData, 'PartData');
  initMetadataForClass(FormItem, 'FormItem', VOID, PartData);
  initMetadataForClass(FileItem, 'FileItem', VOID, PartData);
  initMetadataForClass(BinaryItem, 'BinaryItem', VOID, PartData);
  initMetadataForClass(BinaryChannelItem, 'BinaryChannelItem', VOID, PartData);
  initMetadataForClass(NoContent, 'NoContent', VOID, OutgoingContent);
  initMetadataForClass(ReadChannelContent, 'ReadChannelContent', VOID, OutgoingContent);
  initMetadataForClass(WriteChannelContent, 'WriteChannelContent', VOID, OutgoingContent, VOID, [1]);
  initMetadataForClass(ProtocolUpgrade, 'ProtocolUpgrade', VOID, OutgoingContent, VOID, [4]);
  initMetadataForClass(ContentWrapper, 'ContentWrapper', VOID, OutgoingContent);
  initMetadataForObject(NullBody, 'NullBody');
  initMetadataForClass(TextContent, 'TextContent', VOID, ByteArrayContent_0);
  //endregion
  function get_URL_ALPHABET() {
    _init_properties_Codecs_kt__fudxxf();
    return URL_ALPHABET;
  }
  var URL_ALPHABET;
  function get_URL_ALPHABET_CHARS() {
    _init_properties_Codecs_kt__fudxxf();
    return URL_ALPHABET_CHARS;
  }
  var URL_ALPHABET_CHARS;
  function get_HEX_ALPHABET() {
    _init_properties_Codecs_kt__fudxxf();
    return HEX_ALPHABET;
  }
  var HEX_ALPHABET;
  function get_URL_PROTOCOL_PART() {
    _init_properties_Codecs_kt__fudxxf();
    return URL_PROTOCOL_PART;
  }
  var URL_PROTOCOL_PART;
  function get_VALID_PATH_PART() {
    _init_properties_Codecs_kt__fudxxf();
    return VALID_PATH_PART;
  }
  var VALID_PATH_PART;
  var ATTRIBUTE_CHARACTERS;
  function get_SPECIAL_SYMBOLS() {
    _init_properties_Codecs_kt__fudxxf();
    return SPECIAL_SYMBOLS;
  }
  var SPECIAL_SYMBOLS;
  function decodeURLPart(_this__u8e3s4, start, end, charset) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? _this__u8e3s4.length : end;
    charset = charset === VOID ? Charsets_getInstance().v27_1 : charset;
    _init_properties_Codecs_kt__fudxxf();
    return decodeScan(_this__u8e3s4, start, end, false, charset);
  }
  function decodeScan(_this__u8e3s4, start, end, plusIsSpace, charset) {
    _init_properties_Codecs_kt__fudxxf();
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charCodeAt(_this__u8e3s4, index);
        if (ch === _Char___init__impl__6a9atx(37) || (plusIsSpace && ch === _Char___init__impl__6a9atx(43))) {
          return decodeImpl(_this__u8e3s4, start, end, index, plusIsSpace, charset);
        }
      }
       while (inductionVariable < end);
    return start === 0 && end === _this__u8e3s4.length ? toString(_this__u8e3s4) : substring(_this__u8e3s4, start, end);
  }
  function decodeImpl(_this__u8e3s4, start, end, prefixEnd, plusIsSpace, charset) {
    _init_properties_Codecs_kt__fudxxf();
    var length = end - start | 0;
    var sbSize = length > 255 ? length / 3 | 0 : length;
    var sb = StringBuilder_init_$Create$(sbSize);
    if (prefixEnd > start) {
      sb.qb(_this__u8e3s4, start, prefixEnd);
    }
    var index = prefixEnd;
    var bytes = null;
    while (index < end) {
      var c = charSequenceGet(_this__u8e3s4, index);
      if (plusIsSpace && c === _Char___init__impl__6a9atx(43)) {
        sb.r7(_Char___init__impl__6a9atx(32));
        index = index + 1 | 0;
      } else if (c === _Char___init__impl__6a9atx(37)) {
        if (bytes == null) {
          bytes = new Int8Array((end - index | 0) / 3 | 0);
        }
        var count = 0;
        while (index < end && charSequenceGet(_this__u8e3s4, index) === _Char___init__impl__6a9atx(37)) {
          if ((index + 2 | 0) >= end) {
            // Inline function 'kotlin.text.substring' call
            var startIndex = index;
            var endIndex = charSequenceLength(_this__u8e3s4);
            var tmp$ret$0 = toString(charSequenceSubSequence(_this__u8e3s4, startIndex, endIndex));
            throw new URLDecodeException('Incomplete trailing HEX escape: ' + tmp$ret$0 + ', in ' + toString(_this__u8e3s4) + ' at ' + index);
          }
          var digit1 = charToHexDigit(charSequenceGet(_this__u8e3s4, index + 1 | 0));
          var digit2 = charToHexDigit(charSequenceGet(_this__u8e3s4, index + 2 | 0));
          if (digit1 === -1 || digit2 === -1) {
            throw new URLDecodeException('Wrong HEX escape: %' + toString_0(charSequenceGet(_this__u8e3s4, index + 1 | 0)) + toString_0(charSequenceGet(_this__u8e3s4, index + 2 | 0)) + ', in ' + toString(_this__u8e3s4) + ', at ' + index);
          }
          var tmp = bytes;
          var _unary__edvuaz = count;
          count = _unary__edvuaz + 1 | 0;
          tmp[_unary__edvuaz] = toByte(imul(digit1, 16) + digit2 | 0);
          index = index + 3 | 0;
        }
        sb.q7(decodeToString(bytes, 0, 0 + count | 0));
      } else {
        sb.r7(c);
        index = index + 1 | 0;
      }
    }
    return sb.toString();
  }
  function URLDecodeException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, URLDecodeException);
  }
  function charToHexDigit(c2) {
    _init_properties_Codecs_kt__fudxxf();
    return (_Char___init__impl__6a9atx(48) <= c2 ? c2 <= _Char___init__impl__6a9atx(57) : false) ? Char__minus_impl_a2frrh(c2, _Char___init__impl__6a9atx(48)) : (_Char___init__impl__6a9atx(65) <= c2 ? c2 <= _Char___init__impl__6a9atx(70) : false) ? Char__minus_impl_a2frrh(c2, _Char___init__impl__6a9atx(65)) + 10 | 0 : (_Char___init__impl__6a9atx(97) <= c2 ? c2 <= _Char___init__impl__6a9atx(102) : false) ? Char__minus_impl_a2frrh(c2, _Char___init__impl__6a9atx(97)) + 10 | 0 : -1;
  }
  function encodeURLParameter(_this__u8e3s4, spaceToPlus) {
    spaceToPlus = spaceToPlus === VOID ? false : spaceToPlus;
    _init_properties_Codecs_kt__fudxxf();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    var content = encode(Charsets_getInstance().v27_1.z27(), _this__u8e3s4);
    forEach_0(content, encodeURLParameter$lambda(this_0, spaceToPlus));
    return this_0.toString();
  }
  function encodeURLQueryComponent(_this__u8e3s4, encodeFull, spaceToPlus, charset) {
    encodeFull = encodeFull === VOID ? false : encodeFull;
    spaceToPlus = spaceToPlus === VOID ? false : spaceToPlus;
    charset = charset === VOID ? Charsets_getInstance().v27_1 : charset;
    _init_properties_Codecs_kt__fudxxf();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    var content = encode(charset.z27(), _this__u8e3s4);
    forEach_0(content, encodeURLQueryComponent$lambda(spaceToPlus, this_0, encodeFull));
    return this_0.toString();
  }
  function decodeURLQueryComponent(_this__u8e3s4, start, end, plusIsSpace, charset) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? _this__u8e3s4.length : end;
    plusIsSpace = plusIsSpace === VOID ? false : plusIsSpace;
    charset = charset === VOID ? Charsets_getInstance().v27_1 : charset;
    _init_properties_Codecs_kt__fudxxf();
    return decodeScan(_this__u8e3s4, start, end, plusIsSpace, charset);
  }
  function encodeURLPathPart(_this__u8e3s4) {
    _init_properties_Codecs_kt__fudxxf();
    return encodeURLPath(_this__u8e3s4, true);
  }
  function encodeURLParameterValue(_this__u8e3s4) {
    _init_properties_Codecs_kt__fudxxf();
    return encodeURLParameter(_this__u8e3s4, true);
  }
  function hexDigitToChar(digit) {
    _init_properties_Codecs_kt__fudxxf();
    return (0 <= digit ? digit <= 9 : false) ? Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(48), digit) : Char__minus_impl_a2frrh_0(Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(65), digit), 10);
  }
  function forEach_0(_this__u8e3s4, block) {
    _init_properties_Codecs_kt__fudxxf();
    takeWhile(_this__u8e3s4, forEach$lambda(block));
  }
  function percentEncode(_this__u8e3s4) {
    _init_properties_Codecs_kt__fudxxf();
    var code = _this__u8e3s4 & 255;
    var array = charArray(3);
    array[0] = _Char___init__impl__6a9atx(37);
    array[1] = hexDigitToChar(code >> 4);
    array[2] = hexDigitToChar(code & 15);
    return concatToString(array);
  }
  function encodeURLPath(_this__u8e3s4, encodeSlash, encodeEncoded) {
    encodeSlash = encodeSlash === VOID ? false : encodeSlash;
    encodeEncoded = encodeEncoded === VOID ? true : encodeEncoded;
    _init_properties_Codecs_kt__fudxxf();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    var charset = Charsets_getInstance().v27_1;
    var index = 0;
    $l$loop_0: while (index < _this__u8e3s4.length) {
      var current = charCodeAt(_this__u8e3s4, index);
      if (!encodeSlash && current === _Char___init__impl__6a9atx(47) || get_URL_ALPHABET_CHARS().q1(new Char(current)) || get_VALID_PATH_PART().q1(new Char(current))) {
        this_0.r7(current);
        index = index + 1 | 0;
        continue $l$loop_0;
      }
      if (!encodeEncoded && current === _Char___init__impl__6a9atx(37) && (index + 2 | 0) < _this__u8e3s4.length && get_HEX_ALPHABET().q1(new Char(charCodeAt(_this__u8e3s4, index + 1 | 0))) && get_HEX_ALPHABET().q1(new Char(charCodeAt(_this__u8e3s4, index + 2 | 0)))) {
        this_0.r7(current);
        this_0.r7(charCodeAt(_this__u8e3s4, index + 1 | 0));
        this_0.r7(charCodeAt(_this__u8e3s4, index + 2 | 0));
        index = index + 3 | 0;
        continue $l$loop_0;
      }
      var symbolSize = isSurrogate(current) ? 2 : 1;
      var tmp = encode(charset.z27(), _this__u8e3s4, index, index + symbolSize | 0);
      forEach_0(tmp, encodeURLPath$lambda(this_0));
      index = index + symbolSize | 0;
    }
    return this_0.toString();
  }
  function encodeURLParameter$lambda($$this$buildString, $spaceToPlus) {
    return function (it) {
      if (get_URL_ALPHABET().q1(it) || get_SPECIAL_SYMBOLS().q1(it))
        $$this$buildString.r7(numberToChar(it));
      else {
        var tmp;
        if ($spaceToPlus) {
          var tmp_0 = it;
          // Inline function 'kotlin.code' call
          var this_0 = _Char___init__impl__6a9atx(32);
          var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
          tmp = tmp_0 === toByte(tmp$ret$0);
        } else {
          tmp = false;
        }
        if (tmp)
          $$this$buildString.r7(_Char___init__impl__6a9atx(43));
        else {
          $$this$buildString.q7(percentEncode(it));
        }
      }
      return Unit_instance;
    };
  }
  function encodeURLQueryComponent$lambda($spaceToPlus, $$this$buildString, $encodeFull) {
    return function (it) {
      var tmp = it;
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(32);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      if (tmp === toByte(tmp$ret$0))
        if ($spaceToPlus)
          $$this$buildString.r7(_Char___init__impl__6a9atx(43));
        else
          $$this$buildString.q7('%20');
      else {
        if (get_URL_ALPHABET().q1(it) || (!$encodeFull && get_URL_PROTOCOL_PART().q1(it)))
          $$this$buildString.r7(numberToChar(it));
        else {
          $$this$buildString.q7(percentEncode(it));
        }
      }
      return Unit_instance;
    };
  }
  function forEach$lambda($block) {
    return function (buffer) {
      while (canRead(buffer)) {
        $block(buffer.h19());
      }
      return true;
    };
  }
  function encodeURLPath$lambda($$this$buildString) {
    return function (it) {
      $$this$buildString.q7(percentEncode(it));
      return Unit_instance;
    };
  }
  var properties_initialized_Codecs_kt_hkj9s1;
  function _init_properties_Codecs_kt__fudxxf() {
    if (!properties_initialized_Codecs_kt_hkj9s1) {
      properties_initialized_Codecs_kt_hkj9s1 = true;
      // Inline function 'kotlin.collections.map' call
      var this_0 = plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)));
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.i();
      while (_iterator__ex2g4s.j()) {
        var item = _iterator__ex2g4s.k();
        // Inline function 'kotlin.code' call
        var this_1 = item.e1_1;
        var tmp$ret$0 = Char__toInt_impl_vasixd(this_1);
        var tmp$ret$1 = toByte(tmp$ret$0);
        destination.g(tmp$ret$1);
      }
      URL_ALPHABET = toSet(destination);
      URL_ALPHABET_CHARS = toSet(plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57))));
      HEX_ALPHABET = toSet(plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(102)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(70))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57))));
      // Inline function 'kotlin.collections.map' call
      var this_2 = setOf([new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(47)), new Char(_Char___init__impl__6a9atx(63)), new Char(_Char___init__impl__6a9atx(35)), new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(43))]);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
      var _iterator__ex2g4s_0 = this_2.i();
      while (_iterator__ex2g4s_0.j()) {
        var item_0 = _iterator__ex2g4s_0.k();
        // Inline function 'kotlin.code' call
        var this_3 = item_0.e1_1;
        var tmp$ret$0_0 = Char__toInt_impl_vasixd(this_3);
        var tmp$ret$1_0 = toByte(tmp$ret$0_0);
        destination_0.g(tmp$ret$1_0);
      }
      URL_PROTOCOL_PART = destination_0;
      VALID_PATH_PART = setOf([new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126))]);
      ATTRIBUTE_CHARACTERS = plus_1(get_URL_ALPHABET_CHARS(), setOf([new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(35)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(94)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(96)), new Char(_Char___init__impl__6a9atx(124)), new Char(_Char___init__impl__6a9atx(126))]));
      // Inline function 'kotlin.collections.map' call
      var this_4 = listOf([new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126))]);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_4, 10));
      var _iterator__ex2g4s_1 = this_4.i();
      while (_iterator__ex2g4s_1.j()) {
        var item_1 = _iterator__ex2g4s_1.k();
        // Inline function 'kotlin.code' call
        var this_5 = item_1.e1_1;
        var tmp$ret$0_1 = Char__toInt_impl_vasixd(this_5);
        var tmp$ret$1_1 = toByte(tmp$ret$0_1);
        destination_1.g(tmp$ret$1_1);
      }
      SPECIAL_SYMBOLS = destination_1;
    }
  }
  function Companion() {
    Companion_instance = this;
    this.y2e_1 = new ContentDisposition('file');
    this.z2e_1 = new ContentDisposition('mixed');
    this.a2f_1 = new ContentDisposition('attachment');
    this.b2f_1 = new ContentDisposition('inline');
  }
  protoOf(Companion).nl = function (value) {
    // Inline function 'io.ktor.http.Companion.parse' call
    var headerValue = last(parseHeaderValue(value));
    var tmp0 = headerValue.c2f_1;
    var p = headerValue.d2f_1;
    return new ContentDisposition(tmp0, p);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ContentDisposition(disposition, parameters) {
    Companion_getInstance();
    parameters = parameters === VOID ? emptyList() : parameters;
    HeaderValueWithParameters.call(this, disposition, parameters);
  }
  protoOf(ContentDisposition).h2f = function () {
    return this.i2f_1;
  };
  protoOf(ContentDisposition).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ContentDisposition) {
      tmp_0 = this.h2f() === other.h2f();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.j2f_1, other.j2f_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ContentDisposition).hashCode = function () {
    return imul(getStringHashCode(this.h2f()), 31) + hashCode(this.j2f_1) | 0;
  };
  function ContentType_init_$Init$(contentType, contentSubtype, parameters, $this) {
    parameters = parameters === VOID ? emptyList() : parameters;
    ContentType.call($this, contentType, contentSubtype, contentType + '/' + contentSubtype, parameters);
    return $this;
  }
  function ContentType_init_$Create$(contentType, contentSubtype, parameters) {
    return ContentType_init_$Init$(contentType, contentSubtype, parameters, objectCreate(protoOf(ContentType)));
  }
  function hasParameter($this, name, value) {
    var tmp;
    switch ($this.j2f_1.n()) {
      case 0:
        tmp = false;
        break;
      case 1:
        // Inline function 'kotlin.let' call

        var it = $this.j2f_1.m(0);
        tmp = (equals_0(it.l2f_1, name, true) && equals_0(it.m2f_1, value, true));
        break;
      default:
        var tmp0 = $this.j2f_1;
        var tmp$ret$2;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var tmp_0;
          if (isInterface(tmp0, Collection)) {
            tmp_0 = tmp0.l();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = false;
            break $l$block_0;
          }
          var _iterator__ex2g4s = tmp0.i();
          while (_iterator__ex2g4s.j()) {
            var element = _iterator__ex2g4s.k();
            if (equals_0(element.l2f_1, name, true) && equals_0(element.m2f_1, value, true)) {
              tmp$ret$2 = true;
              break $l$block_0;
            }
          }
          tmp$ret$2 = false;
        }

        tmp = tmp$ret$2;
        break;
    }
    return tmp;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.o2f_1 = ContentType_init_$Create$('*', '*');
  }
  protoOf(Companion_0).nl = function (value) {
    if (isBlank(value))
      return this.o2f_1;
    // Inline function 'io.ktor.http.Companion.parse' call
    var headerValue = last(parseHeaderValue(value));
    var tmp0 = headerValue.c2f_1;
    var parameters = headerValue.d2f_1;
    var slash = indexOf(tmp0, _Char___init__impl__6a9atx(47));
    if (slash === -1) {
      // Inline function 'kotlin.text.trim' call
      if (toString(trim(isCharSequence(tmp0) ? tmp0 : THROW_CCE())) === '*')
        return Companion_getInstance_0().o2f_1;
      throw new BadContentTypeFormatException(value);
    }
    // Inline function 'kotlin.text.trim' call
    var this_0 = substring(tmp0, 0, slash);
    var type = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(type) === 0) {
      throw new BadContentTypeFormatException(value);
    }
    // Inline function 'kotlin.text.trim' call
    var this_1 = substring_0(tmp0, slash + 1 | 0);
    var subtype = toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE()));
    if (contains(type, _Char___init__impl__6a9atx(32)) || contains(subtype, _Char___init__impl__6a9atx(32))) {
      throw new BadContentTypeFormatException(value);
    }
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(subtype) === 0) {
      tmp = true;
    } else {
      tmp = contains(subtype, _Char___init__impl__6a9atx(47));
    }
    if (tmp) {
      throw new BadContentTypeFormatException(value);
    }
    return ContentType_init_$Create$(type, subtype, parameters);
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Application() {
    Application_instance = this;
    this.p2f_1 = 'application';
    this.q2f_1 = ContentType_init_$Create$('application', '*');
    this.r2f_1 = ContentType_init_$Create$('application', 'atom+xml');
    this.s2f_1 = ContentType_init_$Create$('application', 'cbor');
    this.t2f_1 = ContentType_init_$Create$('application', 'json');
    this.u2f_1 = ContentType_init_$Create$('application', 'hal+json');
    this.v2f_1 = ContentType_init_$Create$('application', 'javascript');
    this.w2f_1 = ContentType_init_$Create$('application', 'octet-stream');
    this.x2f_1 = ContentType_init_$Create$('application', 'rss+xml');
    this.y2f_1 = ContentType_init_$Create$('application', 'soap+xml');
    this.z2f_1 = ContentType_init_$Create$('application', 'xml');
    this.a2g_1 = ContentType_init_$Create$('application', 'xml-dtd');
    this.b2g_1 = ContentType_init_$Create$('application', 'yaml');
    this.c2g_1 = ContentType_init_$Create$('application', 'zip');
    this.d2g_1 = ContentType_init_$Create$('application', 'gzip');
    this.e2g_1 = ContentType_init_$Create$('application', 'x-www-form-urlencoded');
    this.f2g_1 = ContentType_init_$Create$('application', 'pdf');
    this.g2g_1 = ContentType_init_$Create$('application', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    this.h2g_1 = ContentType_init_$Create$('application', 'vnd.openxmlformats-officedocument.wordprocessingml.document');
    this.i2g_1 = ContentType_init_$Create$('application', 'vnd.openxmlformats-officedocument.presentationml.presentation');
    this.j2g_1 = ContentType_init_$Create$('application', 'protobuf');
    this.k2g_1 = ContentType_init_$Create$('application', 'wasm');
    this.l2g_1 = ContentType_init_$Create$('application', 'problem+json');
    this.m2g_1 = ContentType_init_$Create$('application', 'problem+xml');
  }
  var Application_instance;
  function Application_getInstance() {
    if (Application_instance == null)
      new Application();
    return Application_instance;
  }
  function Image() {
    Image_instance = this;
    this.n2g_1 = 'image';
    this.o2g_1 = ContentType_init_$Create$('image', '*');
    this.p2g_1 = ContentType_init_$Create$('image', 'apng');
    this.q2g_1 = ContentType_init_$Create$('image', 'avif');
    this.r2g_1 = ContentType_init_$Create$('image', 'bmp');
    this.s2g_1 = ContentType_init_$Create$('image', 'gif');
    this.t2g_1 = ContentType_init_$Create$('image', 'heic');
    this.u2g_1 = ContentType_init_$Create$('image', 'heif');
    this.v2g_1 = ContentType_init_$Create$('image', 'jpeg');
    this.w2g_1 = ContentType_init_$Create$('image', 'jxl');
    this.x2g_1 = ContentType_init_$Create$('image', 'png');
    this.y2g_1 = ContentType_init_$Create$('image', 'svg+xml');
    this.z2g_1 = ContentType_init_$Create$('image', 'tiff');
    this.a2h_1 = ContentType_init_$Create$('image', 'webp');
    this.b2h_1 = ContentType_init_$Create$('image', 'x-icon');
  }
  var Image_instance;
  function Image_getInstance() {
    if (Image_instance == null)
      new Image();
    return Image_instance;
  }
  function MultiPart() {
    MultiPart_instance = this;
    this.c2h_1 = 'multipart';
    this.d2h_1 = ContentType_init_$Create$('multipart', '*');
    this.e2h_1 = ContentType_init_$Create$('multipart', 'mixed');
    this.f2h_1 = ContentType_init_$Create$('multipart', 'alternative');
    this.g2h_1 = ContentType_init_$Create$('multipart', 'related');
    this.h2h_1 = ContentType_init_$Create$('multipart', 'form-data');
    this.i2h_1 = ContentType_init_$Create$('multipart', 'signed');
    this.j2h_1 = ContentType_init_$Create$('multipart', 'encrypted');
    this.k2h_1 = ContentType_init_$Create$('multipart', 'byteranges');
  }
  protoOf(MultiPart).l2h = function (contentType) {
    return startsWith(contentType, 'multipart/', true);
  };
  var MultiPart_instance;
  function MultiPart_getInstance() {
    if (MultiPart_instance == null)
      new MultiPart();
    return MultiPart_instance;
  }
  function Text() {
    Text_instance = this;
    this.m2h_1 = 'text';
    this.n2h_1 = ContentType_init_$Create$('text', '*');
    this.o2h_1 = ContentType_init_$Create$('text', 'plain');
    this.p2h_1 = ContentType_init_$Create$('text', 'css');
    this.q2h_1 = ContentType_init_$Create$('text', 'csv');
    this.r2h_1 = ContentType_init_$Create$('text', 'html');
    this.s2h_1 = ContentType_init_$Create$('text', 'javascript');
    this.t2h_1 = ContentType_init_$Create$('text', 'vcard');
    this.u2h_1 = ContentType_init_$Create$('text', 'xml');
    this.v2h_1 = ContentType_init_$Create$('text', 'event-stream');
  }
  var Text_instance;
  function Text_getInstance() {
    if (Text_instance == null)
      new Text();
    return Text_instance;
  }
  function Video() {
    Video_instance = this;
    this.w2h_1 = 'video';
    this.x2h_1 = ContentType_init_$Create$('video', '*');
    this.y2h_1 = ContentType_init_$Create$('video', 'mpeg');
    this.z2h_1 = ContentType_init_$Create$('video', 'mp4');
    this.a2i_1 = ContentType_init_$Create$('video', 'ogg');
    this.b2i_1 = ContentType_init_$Create$('video', 'quicktime');
  }
  var Video_instance;
  function Video_getInstance() {
    if (Video_instance == null)
      new Video();
    return Video_instance;
  }
  function ContentType(contentType, contentSubtype, existingContent, parameters) {
    Companion_getInstance_0();
    parameters = parameters === VOID ? emptyList() : parameters;
    HeaderValueWithParameters.call(this, existingContent, parameters);
    this.e2i_1 = contentType;
    this.f2i_1 = contentSubtype;
  }
  protoOf(ContentType).g2i = function (name, value) {
    if (hasParameter(this, name, value))
      return this;
    return new ContentType(this.e2i_1, this.f2i_1, this.i2f_1, plus_2(this.j2f_1, HeaderValueParam_init_$Create$(name, value)));
  };
  protoOf(ContentType).h2i = function (pattern) {
    if (!(pattern.e2i_1 === '*') && !equals_0(pattern.e2i_1, this.e2i_1, true)) {
      return false;
    }
    if (!(pattern.f2i_1 === '*') && !equals_0(pattern.f2i_1, this.f2i_1, true)) {
      return false;
    }
    var _iterator__ex2g4s = pattern.j2f_1.i();
    while (_iterator__ex2g4s.j()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.k();
      var patternName = _destruct__k2r9zo.mf();
      var patternValue = _destruct__k2r9zo.nf();
      var tmp;
      if (patternName === '*') {
        var tmp_0;
        if (patternValue === '*') {
          tmp_0 = true;
        } else {
          var tmp0 = this.j2f_1;
          var tmp$ret$0;
          $l$block_0: {
            // Inline function 'kotlin.collections.any' call
            var tmp_1;
            if (isInterface(tmp0, Collection)) {
              tmp_1 = tmp0.l();
            } else {
              tmp_1 = false;
            }
            if (tmp_1) {
              tmp$ret$0 = false;
              break $l$block_0;
            }
            var _iterator__ex2g4s_0 = tmp0.i();
            while (_iterator__ex2g4s_0.j()) {
              var element = _iterator__ex2g4s_0.k();
              if (equals_0(element.m2f_1, patternValue, true)) {
                tmp$ret$0 = true;
                break $l$block_0;
              }
            }
            tmp$ret$0 = false;
          }
          tmp_0 = tmp$ret$0;
        }
        tmp = tmp_0;
      } else {
        var value = this.k2f(patternName);
        tmp = patternValue === '*' ? !(value == null) : equals_0(value, patternValue, true);
      }
      var matches = tmp;
      if (!matches) {
        return false;
      }
    }
    return true;
  };
  protoOf(ContentType).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof ContentType) {
      tmp_1 = equals_0(this.e2i_1, other.e2i_1, true);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals_0(this.f2i_1, other.f2i_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.j2f_1, other.j2f_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ContentType).hashCode = function () {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.e2i_1.toLowerCase();
    var result = getStringHashCode(tmp$ret$1);
    var tmp = result;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = this.f2i_1.toLowerCase();
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$3) | 0) | 0;
    result = result + imul(31, hashCode(this.j2f_1)) | 0;
    return result;
  };
  function charset(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.k2f('charset');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_0;
      try {
        tmp_0 = forName(Charsets_getInstance(), tmp0_safe_receiver);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof IllegalArgumentException) {
          var exception = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function withCharset(_this__u8e3s4, charset) {
    return _this__u8e3s4.g2i('charset', get_name(charset));
  }
  function BadContentTypeFormatException(value) {
    Exception_init_$Init$('Bad Content-Type format: ' + value, this);
    captureStack(this, BadContentTypeFormatException);
  }
  function get_HeaderFieldValueSeparators() {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    return HeaderFieldValueSeparators;
  }
  var HeaderFieldValueSeparators;
  function append(_this__u8e3s4, name, value) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    _this__u8e3s4.z2a(name, value.toString());
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function HeaderValueWithParameters(content, parameters) {
    parameters = parameters === VOID ? emptyList() : parameters;
    this.i2f_1 = content;
    this.j2f_1 = parameters;
  }
  protoOf(HeaderValueWithParameters).k2f = function (name) {
    var inductionVariable = 0;
    var last = get_lastIndex(this.j2f_1);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parameter = this.j2f_1.m(index);
        if (equals_0(parameter.l2f_1, name, true)) {
          return parameter.m2f_1;
        }
      }
       while (!(index === last));
    return null;
  };
  protoOf(HeaderValueWithParameters).toString = function () {
    var tmp;
    if (this.j2f_1.l()) {
      tmp = this.i2f_1;
    } else {
      var tmp_0 = this.i2f_1.length;
      // Inline function 'kotlin.collections.sumOf' call
      var sum = 0;
      var _iterator__ex2g4s = this.j2f_1.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        var tmp_1 = sum;
        sum = tmp_1 + ((element.l2f_1.length + element.m2f_1.length | 0) + 3 | 0) | 0;
      }
      var size = tmp_0 + sum | 0;
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$(size);
      this_0.q7(this.i2f_1);
      var inductionVariable = 0;
      var last = get_lastIndex(this.j2f_1);
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element_0 = this.j2f_1.m(index);
          this_0.q7('; ');
          this_0.q7(element_0.l2f_1);
          this_0.q7('=');
          // Inline function 'io.ktor.http.escapeIfNeededTo' call
          var this_1 = element_0.m2f_1;
          if (needQuotes(this_1))
            this_0.q7(quote(this_1));
          else
            this_0.q7(this_1);
        }
         while (!(index === last));
      tmp = this_0.toString();
    }
    return tmp;
  };
  function needQuotes(_this__u8e3s4) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(_this__u8e3s4) === 0)
      return true;
    if (isQuoted(_this__u8e3s4))
      return false;
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = charCodeAt(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (get_HeaderFieldValueSeparators().q1(new Char(element)))
        return true;
    }
    return false;
  }
  function quote(_this__u8e3s4) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    quoteTo(_this__u8e3s4, this_0);
    return this_0.toString();
  }
  function isQuoted(_this__u8e3s4) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    if (_this__u8e3s4.length < 2) {
      return false;
    }
    if (!(first(_this__u8e3s4) === _Char___init__impl__6a9atx(34)) || !(last_0(_this__u8e3s4) === _Char___init__impl__6a9atx(34))) {
      return false;
    }
    var startIndex = 1;
    $l$loop: do {
      var index = indexOf(_this__u8e3s4, _Char___init__impl__6a9atx(34), startIndex);
      if (index === get_lastIndex_0(_this__u8e3s4)) {
        break $l$loop;
      }
      var slashesCount = 0;
      var slashIndex = index - 1 | 0;
      while (charCodeAt(_this__u8e3s4, slashIndex) === _Char___init__impl__6a9atx(92)) {
        slashesCount = slashesCount + 1 | 0;
        slashIndex = slashIndex - 1 | 0;
      }
      if ((slashesCount % 2 | 0) === 0) {
        return false;
      }
      startIndex = index + 1 | 0;
    }
     while (startIndex < _this__u8e3s4.length);
    return true;
  }
  function quoteTo(_this__u8e3s4, out) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    out.q7('"');
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = charCodeAt(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var ch = element;
      if (ch === _Char___init__impl__6a9atx(92))
        out.q7('\\\\');
      else if (ch === _Char___init__impl__6a9atx(10))
        out.q7('\\n');
      else if (ch === _Char___init__impl__6a9atx(13))
        out.q7('\\r');
      else if (ch === _Char___init__impl__6a9atx(9))
        out.q7('\\t');
      else if (ch === _Char___init__impl__6a9atx(34))
        out.q7('\\"');
      else
        out.r7(ch);
    }
    out.q7('"');
  }
  function escapeIfNeeded(_this__u8e3s4) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    return needQuotes(_this__u8e3s4) ? quote(_this__u8e3s4) : _this__u8e3s4;
  }
  var properties_initialized_HeaderValueWithParameters_kt_yu5xg;
  function _init_properties_HeaderValueWithParameters_kt__z6luvy() {
    if (!properties_initialized_HeaderValueWithParameters_kt_yu5xg) {
      properties_initialized_HeaderValueWithParameters_kt_yu5xg = true;
      HeaderFieldValueSeparators = setOf([new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(60)), new Char(_Char___init__impl__6a9atx(62)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(92)), new Char(_Char___init__impl__6a9atx(34)), new Char(_Char___init__impl__6a9atx(47)), new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)), new Char(_Char___init__impl__6a9atx(63)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(123)), new Char(_Char___init__impl__6a9atx(125)), new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(9)), new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(13))]);
    }
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.i2i_1 = EmptyHeaders_instance;
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function HeadersBuilder(size) {
    size = size === VOID ? 8 : size;
    StringValuesBuilderImpl.call(this, true, size);
  }
  protoOf(HeadersBuilder).l2i = function () {
    return new HeadersImpl(this.v2a_1);
  };
  protoOf(HeadersBuilder).w2a = function (name) {
    protoOf(StringValuesBuilderImpl).w2a.call(this, name);
    HttpHeaders_getInstance().j2m(name);
  };
  protoOf(HeadersBuilder).y2a = function (value) {
    protoOf(StringValuesBuilderImpl).y2a.call(this, value);
    HttpHeaders_getInstance().k2m(value);
  };
  function headersOf(name, value) {
    return new HeadersSingleImpl(name, listOf_0(value));
  }
  function EmptyHeaders() {
  }
  protoOf(EmptyHeaders).q2a = function () {
    return true;
  };
  protoOf(EmptyHeaders).r2a = function (name) {
    return null;
  };
  protoOf(EmptyHeaders).s2a = function () {
    return emptySet();
  };
  protoOf(EmptyHeaders).o2a = function () {
    return emptySet();
  };
  protoOf(EmptyHeaders).l = function () {
    return true;
  };
  protoOf(EmptyHeaders).toString = function () {
    return 'Headers ' + toString(this.o2a());
  };
  var EmptyHeaders_instance;
  function EmptyHeaders_getInstance() {
    return EmptyHeaders_instance;
  }
  function HeadersImpl(values) {
    values = values === VOID ? emptyMap() : values;
    StringValuesImpl.call(this, true, values);
  }
  protoOf(HeadersImpl).toString = function () {
    return 'Headers ' + toString(this.o2a());
  };
  function HeadersSingleImpl(name, values) {
    StringValuesSingleImpl.call(this, true, name, values);
  }
  protoOf(HeadersSingleImpl).toString = function () {
    return 'Headers ' + toString(this.o2a());
  };
  function HeaderValueParam_init_$Init$(name, value, $this) {
    HeaderValueParam.call($this, name, value, false);
    return $this;
  }
  function HeaderValueParam_init_$Create$(name, value) {
    return HeaderValueParam_init_$Init$(name, value, objectCreate(protoOf(HeaderValueParam)));
  }
  function HeaderValueParam(name, value, escapeValue) {
    this.l2f_1 = name;
    this.m2f_1 = value;
    this.n2f_1 = escapeValue;
  }
  protoOf(HeaderValueParam).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof HeaderValueParam) {
      tmp_0 = equals_0(other.l2f_1, this.l2f_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals_0(other.m2f_1, this.m2f_1, true);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HeaderValueParam).hashCode = function () {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.l2f_1.toLowerCase();
    var result = getStringHashCode(tmp$ret$1);
    var tmp = result;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = this.m2f_1.toLowerCase();
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$3) | 0) | 0;
    return result;
  };
  protoOf(HeaderValueParam).mf = function () {
    return this.l2f_1;
  };
  protoOf(HeaderValueParam).nf = function () {
    return this.m2f_1;
  };
  protoOf(HeaderValueParam).toString = function () {
    return 'HeaderValueParam(name=' + this.l2f_1 + ', value=' + this.m2f_1 + ', escapeValue=' + this.n2f_1 + ')';
  };
  function HeaderValue(value, params) {
    params = params === VOID ? emptyList() : params;
    this.c2f_1 = value;
    this.d2f_1 = params;
    var tmp = this;
    var tmp0 = this.d2f_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (element.l2f_1 === 'q') {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m2f_1;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : toDoubleOrNull(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_1;
      if (0.0 <= tmp2_safe_receiver ? tmp2_safe_receiver <= 1.0 : false) {
        tmp_1 = tmp2_safe_receiver;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var tmp3_elvis_lhs = tmp_0;
    tmp.e2f_1 = tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs;
  }
  protoOf(HeaderValue).toString = function () {
    return 'HeaderValue(value=' + this.c2f_1 + ', params=' + toString(this.d2f_1) + ')';
  };
  protoOf(HeaderValue).hashCode = function () {
    var result = getStringHashCode(this.c2f_1);
    result = imul(result, 31) + hashCode(this.d2f_1) | 0;
    return result;
  };
  protoOf(HeaderValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HeaderValue))
      return false;
    if (!(this.c2f_1 === other.c2f_1))
      return false;
    if (!equals(this.d2f_1, other.d2f_1))
      return false;
    return true;
  };
  function parseHeaderValue(text) {
    return parseHeaderValue_0(text, false);
  }
  function parseHeaderValue_0(text, parametersOnly) {
    if (text == null) {
      return emptyList();
    }
    var position = 0;
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var items = lazy(tmp, parseHeaderValue$lambda);
    while (position <= get_lastIndex_0(text)) {
      position = parseHeaderValueItem(text, position, items, parametersOnly);
    }
    return valueOrEmpty(items);
  }
  function parseHeaderValueItem(text, start, items, parametersOnly) {
    var position = start;
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var parameters = lazy(tmp, parseHeaderValueItem$lambda);
    var valueEnd = parametersOnly ? position : null;
    while (position <= get_lastIndex_0(text)) {
      var tmp0_subject = charCodeAt(text, position);
      if (tmp0_subject === _Char___init__impl__6a9atx(44)) {
        var tmp_0 = items.v();
        var tmp1_elvis_lhs = valueEnd;
        tmp_0.g(new HeaderValue(subtrim(text, start, tmp1_elvis_lhs == null ? position : tmp1_elvis_lhs), valueOrEmpty(parameters)));
        return position + 1 | 0;
      } else if (tmp0_subject === _Char___init__impl__6a9atx(59)) {
        if (valueEnd == null)
          valueEnd = position;
        position = parseHeaderValueParameter(text, position + 1 | 0, parameters);
      } else {
        var tmp_1;
        if (parametersOnly) {
          tmp_1 = parseHeaderValueParameter(text, position, parameters);
        } else {
          tmp_1 = position + 1 | 0;
        }
        position = tmp_1;
      }
    }
    var tmp_2 = items.v();
    var tmp2_elvis_lhs = valueEnd;
    tmp_2.g(new HeaderValue(subtrim(text, start, tmp2_elvis_lhs == null ? position : tmp2_elvis_lhs), valueOrEmpty(parameters)));
    return position;
  }
  function valueOrEmpty(_this__u8e3s4) {
    return _this__u8e3s4.il() ? _this__u8e3s4.v() : emptyList();
  }
  function subtrim(_this__u8e3s4, start, end) {
    // Inline function 'kotlin.text.trim' call
    var this_0 = substring(_this__u8e3s4, start, end);
    return toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
  }
  function parseHeaderValueParameter(text, start, parameters) {
    var position = start;
    while (position <= get_lastIndex_0(text)) {
      var tmp0_subject = charCodeAt(text, position);
      if (tmp0_subject === _Char___init__impl__6a9atx(61)) {
        var _destruct__k2r9zo = parseHeaderValueParameterValue(text, position + 1 | 0);
        var paramEnd = _destruct__k2r9zo.mf();
        var paramValue = _destruct__k2r9zo.nf();
        parseHeaderValueParameter$addParam(parameters, text, start, position, paramValue);
        return paramEnd;
      } else if (tmp0_subject === _Char___init__impl__6a9atx(59) || tmp0_subject === _Char___init__impl__6a9atx(44)) {
        parseHeaderValueParameter$addParam(parameters, text, start, position, '');
        return position;
      } else {
        position = position + 1 | 0;
      }
    }
    parseHeaderValueParameter$addParam(parameters, text, start, position, '');
    return position;
  }
  function parseHeaderValueParameterValue(value, start) {
    if (value.length === start) {
      return to(start, '');
    }
    var position = start;
    if (charCodeAt(value, start) === _Char___init__impl__6a9atx(34)) {
      return parseHeaderValueParameterValueQuoted(value, position + 1 | 0);
    }
    while (position <= get_lastIndex_0(value)) {
      var tmp0_subject = charCodeAt(value, position);
      if (tmp0_subject === _Char___init__impl__6a9atx(59) || tmp0_subject === _Char___init__impl__6a9atx(44))
        return to(position, subtrim(value, start, position));
      else {
        position = position + 1 | 0;
      }
    }
    return to(position, subtrim(value, start, position));
  }
  function parseHeaderValueParameterValueQuoted(value, start) {
    var position = start;
    var builder = StringBuilder_init_$Create$_0();
    loop: while (position <= get_lastIndex_0(value)) {
      var currentChar = charCodeAt(value, position);
      if (currentChar === _Char___init__impl__6a9atx(34) && nextIsDelimiterOrEnd(value, position)) {
        return to(position + 1 | 0, builder.toString());
      } else if (currentChar === _Char___init__impl__6a9atx(92) && position < (get_lastIndex_0(value) - 2 | 0)) {
        builder.r7(charCodeAt(value, position + 1 | 0));
        position = position + 2 | 0;
        continue loop;
      }
      builder.r7(currentChar);
      position = position + 1 | 0;
    }
    var tmp = position;
    var tmp0 = _Char___init__impl__6a9atx(34);
    // Inline function 'kotlin.text.plus' call
    var other = builder.toString();
    var tmp$ret$0 = toString_0(tmp0) + other;
    return to(tmp, tmp$ret$0);
  }
  function nextIsDelimiterOrEnd(_this__u8e3s4, start) {
    var position = start + 1 | 0;
    loop: while (position < _this__u8e3s4.length && charCodeAt(_this__u8e3s4, position) === _Char___init__impl__6a9atx(32)) {
      position = position + 1 | 0;
    }
    return position === _this__u8e3s4.length || charCodeAt(_this__u8e3s4, position) === _Char___init__impl__6a9atx(59) || charCodeAt(_this__u8e3s4, position) === _Char___init__impl__6a9atx(44);
  }
  function parseHeaderValueParameter$addParam($parameters, text, start, end, value) {
    var name = subtrim(text, start, end);
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(name) === 0) {
      return Unit_instance;
    }
    $parameters.v().g(HeaderValueParam_init_$Create$(name, value));
  }
  function parseHeaderValue$lambda() {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  }
  function parseHeaderValueItem$lambda() {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  }
  function HttpHeaders() {
    HttpHeaders_instance = this;
    this.m2i_1 = 'Accept';
    this.n2i_1 = 'Accept-Charset';
    this.o2i_1 = 'Accept-Encoding';
    this.p2i_1 = 'Accept-Language';
    this.q2i_1 = 'Accept-Ranges';
    this.r2i_1 = 'Age';
    this.s2i_1 = 'Allow';
    this.t2i_1 = 'ALPN';
    this.u2i_1 = 'Authentication-Info';
    this.v2i_1 = 'Authorization';
    this.w2i_1 = 'Cache-Control';
    this.x2i_1 = 'Connection';
    this.y2i_1 = 'Content-Disposition';
    this.z2i_1 = 'Content-Encoding';
    this.a2j_1 = 'Content-Language';
    this.b2j_1 = 'Content-Length';
    this.c2j_1 = 'Content-Location';
    this.d2j_1 = 'Content-Range';
    this.e2j_1 = 'Content-Type';
    this.f2j_1 = 'Cookie';
    this.g2j_1 = 'DASL';
    this.h2j_1 = 'Date';
    this.i2j_1 = 'DAV';
    this.j2j_1 = 'Depth';
    this.k2j_1 = 'Destination';
    this.l2j_1 = 'ETag';
    this.m2j_1 = 'Expect';
    this.n2j_1 = 'Expires';
    this.o2j_1 = 'From';
    this.p2j_1 = 'Forwarded';
    this.q2j_1 = 'Host';
    this.r2j_1 = 'HTTP2-Settings';
    this.s2j_1 = 'If';
    this.t2j_1 = 'If-Match';
    this.u2j_1 = 'If-Modified-Since';
    this.v2j_1 = 'If-None-Match';
    this.w2j_1 = 'If-Range';
    this.x2j_1 = 'If-Schedule-Tag-Match';
    this.y2j_1 = 'If-Unmodified-Since';
    this.z2j_1 = 'Last-Modified';
    this.a2k_1 = 'Location';
    this.b2k_1 = 'Lock-Token';
    this.c2k_1 = 'Link';
    this.d2k_1 = 'Max-Forwards';
    this.e2k_1 = 'MIME-Version';
    this.f2k_1 = 'Ordering-Type';
    this.g2k_1 = 'Origin';
    this.h2k_1 = 'Overwrite';
    this.i2k_1 = 'Position';
    this.j2k_1 = 'Pragma';
    this.k2k_1 = 'Prefer';
    this.l2k_1 = 'Preference-Applied';
    this.m2k_1 = 'Proxy-Authenticate';
    this.n2k_1 = 'Proxy-Authentication-Info';
    this.o2k_1 = 'Proxy-Authorization';
    this.p2k_1 = 'Public-Key-Pins';
    this.q2k_1 = 'Public-Key-Pins-Report-Only';
    this.r2k_1 = 'Range';
    this.s2k_1 = 'Referer';
    this.t2k_1 = 'Retry-After';
    this.u2k_1 = 'Schedule-Reply';
    this.v2k_1 = 'Schedule-Tag';
    this.w2k_1 = 'Sec-WebSocket-Accept';
    this.x2k_1 = 'Sec-WebSocket-Extensions';
    this.y2k_1 = 'Sec-WebSocket-Key';
    this.z2k_1 = 'Sec-WebSocket-Protocol';
    this.a2l_1 = 'Sec-WebSocket-Version';
    this.b2l_1 = 'Server';
    this.c2l_1 = 'Set-Cookie';
    this.d2l_1 = 'SLUG';
    this.e2l_1 = 'Strict-Transport-Security';
    this.f2l_1 = 'TE';
    this.g2l_1 = 'Timeout';
    this.h2l_1 = 'Trailer';
    this.i2l_1 = 'Transfer-Encoding';
    this.j2l_1 = 'Upgrade';
    this.k2l_1 = 'User-Agent';
    this.l2l_1 = 'Vary';
    this.m2l_1 = 'Via';
    this.n2l_1 = 'Warning';
    this.o2l_1 = 'WWW-Authenticate';
    this.p2l_1 = 'Access-Control-Allow-Origin';
    this.q2l_1 = 'Access-Control-Allow-Methods';
    this.r2l_1 = 'Access-Control-Allow-Credentials';
    this.s2l_1 = 'Access-Control-Allow-Headers';
    this.t2l_1 = 'Access-Control-Request-Method';
    this.u2l_1 = 'Access-Control-Request-Headers';
    this.v2l_1 = 'Access-Control-Expose-Headers';
    this.w2l_1 = 'Access-Control-Max-Age';
    this.x2l_1 = 'X-Http-Method-Override';
    this.y2l_1 = 'X-Forwarded-Host';
    this.z2l_1 = 'X-Forwarded-Server';
    this.a2m_1 = 'X-Forwarded-Proto';
    this.b2m_1 = 'X-Forwarded-For';
    this.c2m_1 = 'X-Forwarded-Port';
    this.d2m_1 = 'X-Request-ID';
    this.e2m_1 = 'X-Correlation-ID';
    this.f2m_1 = 'X-Total-Count';
    this.g2m_1 = 'Last-Event-ID';
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.h2m_1 = [this.i2l_1, this.j2l_1];
    this.i2m_1 = asList(this.h2m_1);
  }
  protoOf(HttpHeaders).j2m = function (name) {
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(name)) {
      var item = charSequenceGet(name, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      if (Char__compareTo_impl_ypi4mb(item, _Char___init__impl__6a9atx(32)) <= 0 || isDelimiter(item)) {
        throw new IllegalHeaderNameException(name, _unary__edvuaz);
      }
    }
  };
  protoOf(HttpHeaders).k2m = function (value) {
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(value)) {
      var item = charSequenceGet(value, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      if (Char__compareTo_impl_ypi4mb(item, _Char___init__impl__6a9atx(32)) < 0 && !(item === _Char___init__impl__6a9atx(9))) {
        throw new IllegalHeaderValueException(value, _unary__edvuaz);
      }
    }
  };
  var HttpHeaders_instance;
  function HttpHeaders_getInstance() {
    if (HttpHeaders_instance == null)
      new HttpHeaders();
    return HttpHeaders_instance;
  }
  function UnsafeHeaderException(header) {
    IllegalArgumentException_init_$Init$('Header(s) ' + header + ' are controlled by the engine and ' + 'cannot be set explicitly', this);
    captureStack(this, UnsafeHeaderException);
  }
  function isDelimiter(ch) {
    return contains('"(),/:;<=>?@[\\]{}', ch);
  }
  function IllegalHeaderNameException(headerName, position) {
    var tmp = "Header name '" + headerName + "' contains illegal character '" + toString_0(charCodeAt(headerName, position)) + "'";
    // Inline function 'kotlin.code' call
    var this_0 = charCodeAt(headerName, position);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    IllegalArgumentException_init_$Init$(tmp + (' (code ' + (tmp$ret$0 & 255) + ')'), this);
    captureStack(this, IllegalHeaderNameException);
    this.l2m_1 = headerName;
    this.m2m_1 = position;
  }
  function IllegalHeaderValueException(headerValue, position) {
    var tmp = "Header value '" + headerValue + "' contains illegal character '" + toString_0(charCodeAt(headerValue, position)) + "'";
    // Inline function 'kotlin.code' call
    var this_0 = charCodeAt(headerValue, position);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    IllegalArgumentException_init_$Init$(tmp + (' (code ' + (tmp$ret$0 & 255) + ')'), this);
    captureStack(this, IllegalHeaderValueException);
    this.n2m_1 = headerValue;
    this.o2m_1 = position;
  }
  function contentLength(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.p2m().l29(HttpHeaders_getInstance().b2j_1);
    return tmp0_safe_receiver == null ? null : toLongOrNull(tmp0_safe_receiver);
  }
  function charset_0(_this__u8e3s4) {
    var tmp0_safe_receiver = contentType_1(_this__u8e3s4);
    return tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
  }
  function contentType(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.p2m().l29(HttpHeaders_getInstance().e2j_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = Companion_getInstance_0().nl(tmp0_safe_receiver);
    }
    return tmp;
  }
  function contentType_0(_this__u8e3s4, type) {
    return _this__u8e3s4.p2m().x2a(HttpHeaders_getInstance().e2j_1, type.toString());
  }
  function contentType_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.p2m().l29(HttpHeaders_getInstance().e2j_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = Companion_getInstance_0().nl(tmp0_safe_receiver);
    }
    return tmp;
  }
  function get_REQUESTS_WITHOUT_BODY() {
    _init_properties_HttpMethod_kt__cbus5z();
    return REQUESTS_WITHOUT_BODY;
  }
  var REQUESTS_WITHOUT_BODY;
  function Companion_3() {
    Companion_instance_3 = this;
    this.q2m_1 = new HttpMethod('GET');
    this.r2m_1 = new HttpMethod('POST');
    this.s2m_1 = new HttpMethod('PUT');
    this.t2m_1 = new HttpMethod('PATCH');
    this.u2m_1 = new HttpMethod('DELETE');
    this.v2m_1 = new HttpMethod('HEAD');
    this.w2m_1 = new HttpMethod('OPTIONS');
    this.x2m_1 = listOf([this.q2m_1, this.r2m_1, this.s2m_1, this.t2m_1, this.u2m_1, this.v2m_1, this.w2m_1]);
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function HttpMethod(value) {
    Companion_getInstance_3();
    this.y2m_1 = value;
  }
  protoOf(HttpMethod).toString = function () {
    return this.y2m_1;
  };
  protoOf(HttpMethod).hashCode = function () {
    return getStringHashCode(this.y2m_1);
  };
  protoOf(HttpMethod).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpMethod))
      return false;
    if (!(this.y2m_1 === other.y2m_1))
      return false;
    return true;
  };
  function get_supportsRequestBody(_this__u8e3s4) {
    _init_properties_HttpMethod_kt__cbus5z();
    return !get_REQUESTS_WITHOUT_BODY().q1(_this__u8e3s4);
  }
  var properties_initialized_HttpMethod_kt_ogor3f;
  function _init_properties_HttpMethod_kt__cbus5z() {
    if (!properties_initialized_HttpMethod_kt_ogor3f) {
      properties_initialized_HttpMethod_kt_ogor3f = true;
      REQUESTS_WITHOUT_BODY = setOf([Companion_getInstance_3().q2m_1, Companion_getInstance_3().v2m_1, Companion_getInstance_3().w2m_1, new HttpMethod('TRACE')]);
    }
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.z2m_1 = new HttpProtocolVersion('HTTP', 3, 0);
    this.a2n_1 = new HttpProtocolVersion('HTTP', 2, 0);
    this.b2n_1 = new HttpProtocolVersion('HTTP', 1, 1);
    this.c2n_1 = new HttpProtocolVersion('HTTP', 1, 0);
    this.d2n_1 = new HttpProtocolVersion('SPDY', 3, 0);
    this.e2n_1 = new HttpProtocolVersion('QUIC', 1, 0);
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function HttpProtocolVersion(name, major, minor) {
    Companion_getInstance_4();
    this.f2n_1 = name;
    this.g2n_1 = major;
    this.h2n_1 = minor;
  }
  protoOf(HttpProtocolVersion).toString = function () {
    return this.f2n_1 + '/' + this.g2n_1 + '.' + this.h2n_1;
  };
  protoOf(HttpProtocolVersion).hashCode = function () {
    var result = getStringHashCode(this.f2n_1);
    result = imul(result, 31) + this.g2n_1 | 0;
    result = imul(result, 31) + this.h2n_1 | 0;
    return result;
  };
  protoOf(HttpProtocolVersion).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpProtocolVersion))
      return false;
    if (!(this.f2n_1 === other.f2n_1))
      return false;
    if (!(this.g2n_1 === other.g2n_1))
      return false;
    if (!(this.h2n_1 === other.h2n_1))
      return false;
    return true;
  };
  function Companion_5() {
    Companion_instance_5 = this;
    this.i2n_1 = new HttpStatusCode(100, 'Continue');
    this.j2n_1 = new HttpStatusCode(101, 'Switching Protocols');
    this.k2n_1 = new HttpStatusCode(102, 'Processing');
    this.l2n_1 = new HttpStatusCode(200, 'OK');
    this.m2n_1 = new HttpStatusCode(201, 'Created');
    this.n2n_1 = new HttpStatusCode(202, 'Accepted');
    this.o2n_1 = new HttpStatusCode(203, 'Non-Authoritative Information');
    this.p2n_1 = new HttpStatusCode(204, 'No Content');
    this.q2n_1 = new HttpStatusCode(205, 'Reset Content');
    this.r2n_1 = new HttpStatusCode(206, 'Partial Content');
    this.s2n_1 = new HttpStatusCode(207, 'Multi-Status');
    this.t2n_1 = new HttpStatusCode(300, 'Multiple Choices');
    this.u2n_1 = new HttpStatusCode(301, 'Moved Permanently');
    this.v2n_1 = new HttpStatusCode(302, 'Found');
    this.w2n_1 = new HttpStatusCode(303, 'See Other');
    this.x2n_1 = new HttpStatusCode(304, 'Not Modified');
    this.y2n_1 = new HttpStatusCode(305, 'Use Proxy');
    this.z2n_1 = new HttpStatusCode(306, 'Switch Proxy');
    this.a2o_1 = new HttpStatusCode(307, 'Temporary Redirect');
    this.b2o_1 = new HttpStatusCode(308, 'Permanent Redirect');
    this.c2o_1 = new HttpStatusCode(400, 'Bad Request');
    this.d2o_1 = new HttpStatusCode(401, 'Unauthorized');
    this.e2o_1 = new HttpStatusCode(402, 'Payment Required');
    this.f2o_1 = new HttpStatusCode(403, 'Forbidden');
    this.g2o_1 = new HttpStatusCode(404, 'Not Found');
    this.h2o_1 = new HttpStatusCode(405, 'Method Not Allowed');
    this.i2o_1 = new HttpStatusCode(406, 'Not Acceptable');
    this.j2o_1 = new HttpStatusCode(407, 'Proxy Authentication Required');
    this.k2o_1 = new HttpStatusCode(408, 'Request Timeout');
    this.l2o_1 = new HttpStatusCode(409, 'Conflict');
    this.m2o_1 = new HttpStatusCode(410, 'Gone');
    this.n2o_1 = new HttpStatusCode(411, 'Length Required');
    this.o2o_1 = new HttpStatusCode(412, 'Precondition Failed');
    this.p2o_1 = new HttpStatusCode(413, 'Payload Too Large');
    this.q2o_1 = new HttpStatusCode(414, 'Request-URI Too Long');
    this.r2o_1 = new HttpStatusCode(415, 'Unsupported Media Type');
    this.s2o_1 = new HttpStatusCode(416, 'Requested Range Not Satisfiable');
    this.t2o_1 = new HttpStatusCode(417, 'Expectation Failed');
    this.u2o_1 = new HttpStatusCode(422, 'Unprocessable Entity');
    this.v2o_1 = new HttpStatusCode(423, 'Locked');
    this.w2o_1 = new HttpStatusCode(424, 'Failed Dependency');
    this.x2o_1 = new HttpStatusCode(425, 'Too Early');
    this.y2o_1 = new HttpStatusCode(426, 'Upgrade Required');
    this.z2o_1 = new HttpStatusCode(429, 'Too Many Requests');
    this.a2p_1 = new HttpStatusCode(431, 'Request Header Fields Too Large');
    this.b2p_1 = new HttpStatusCode(500, 'Internal Server Error');
    this.c2p_1 = new HttpStatusCode(501, 'Not Implemented');
    this.d2p_1 = new HttpStatusCode(502, 'Bad Gateway');
    this.e2p_1 = new HttpStatusCode(503, 'Service Unavailable');
    this.f2p_1 = new HttpStatusCode(504, 'Gateway Timeout');
    this.g2p_1 = new HttpStatusCode(505, 'HTTP Version Not Supported');
    this.h2p_1 = new HttpStatusCode(506, 'Variant Also Negotiates');
    this.i2p_1 = new HttpStatusCode(507, 'Insufficient Storage');
    this.j2p_1 = allStatusCodes();
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = this.j2p_1;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var tmp$ret$0 = element.l2p_1;
      destination.z1(tmp$ret$0, element);
    }
    tmp.k2p_1 = destination;
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function HttpStatusCode(value, description) {
    Companion_getInstance_5();
    this.l2p_1 = value;
    this.m2p_1 = description;
  }
  protoOf(HttpStatusCode).toString = function () {
    return '' + this.l2p_1 + ' ' + this.m2p_1;
  };
  protoOf(HttpStatusCode).equals = function (other) {
    var tmp;
    if (other instanceof HttpStatusCode) {
      tmp = other.l2p_1 === this.l2p_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HttpStatusCode).hashCode = function () {
    return this.l2p_1;
  };
  protoOf(HttpStatusCode).n2p = function (other) {
    return this.l2p_1 - other.l2p_1 | 0;
  };
  protoOf(HttpStatusCode).d = function (other) {
    return this.n2p(other instanceof HttpStatusCode ? other : THROW_CCE());
  };
  function allStatusCodes() {
    return listOf([Companion_getInstance_5().i2n_1, Companion_getInstance_5().j2n_1, Companion_getInstance_5().k2n_1, Companion_getInstance_5().l2n_1, Companion_getInstance_5().m2n_1, Companion_getInstance_5().n2n_1, Companion_getInstance_5().o2n_1, Companion_getInstance_5().p2n_1, Companion_getInstance_5().q2n_1, Companion_getInstance_5().r2n_1, Companion_getInstance_5().s2n_1, Companion_getInstance_5().t2n_1, Companion_getInstance_5().u2n_1, Companion_getInstance_5().v2n_1, Companion_getInstance_5().w2n_1, Companion_getInstance_5().x2n_1, Companion_getInstance_5().y2n_1, Companion_getInstance_5().z2n_1, Companion_getInstance_5().a2o_1, Companion_getInstance_5().b2o_1, Companion_getInstance_5().c2o_1, Companion_getInstance_5().d2o_1, Companion_getInstance_5().e2o_1, Companion_getInstance_5().f2o_1, Companion_getInstance_5().g2o_1, Companion_getInstance_5().h2o_1, Companion_getInstance_5().i2o_1, Companion_getInstance_5().j2o_1, Companion_getInstance_5().k2o_1, Companion_getInstance_5().l2o_1, Companion_getInstance_5().m2o_1, Companion_getInstance_5().n2o_1, Companion_getInstance_5().o2o_1, Companion_getInstance_5().p2o_1, Companion_getInstance_5().q2o_1, Companion_getInstance_5().r2o_1, Companion_getInstance_5().s2o_1, Companion_getInstance_5().t2o_1, Companion_getInstance_5().u2o_1, Companion_getInstance_5().v2o_1, Companion_getInstance_5().w2o_1, Companion_getInstance_5().x2o_1, Companion_getInstance_5().y2o_1, Companion_getInstance_5().z2o_1, Companion_getInstance_5().a2p_1, Companion_getInstance_5().b2p_1, Companion_getInstance_5().c2p_1, Companion_getInstance_5().d2p_1, Companion_getInstance_5().e2p_1, Companion_getInstance_5().f2p_1, Companion_getInstance_5().g2p_1, Companion_getInstance_5().h2p_1, Companion_getInstance_5().i2p_1]);
  }
  function formUrlEncode(_this__u8e3s4) {
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = _this__u8e3s4.o2a();
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'kotlin.collections.map' call
      var this_0 = element.v();
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s_0 = this_0.i();
      while (_iterator__ex2g4s_0.j()) {
        var item = _iterator__ex2g4s_0.k();
        var tmp$ret$0 = to(element.u(), item);
        destination_0.g(tmp$ret$0);
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return formUrlEncode_0(destination);
  }
  function formUrlEncode_0(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    formUrlEncodeTo(_this__u8e3s4, this_0);
    return this_0.toString();
  }
  function formUrlEncodeTo(_this__u8e3s4, out) {
    joinTo(_this__u8e3s4, out, '&', VOID, VOID, VOID, VOID, formUrlEncodeTo$lambda);
  }
  function formUrlEncodeTo$lambda(it) {
    var key = encodeURLParameter(it.kf_1, true);
    var tmp;
    if (it.lf_1 == null) {
      tmp = key;
    } else {
      var value = encodeURLParameterValue(toString_1(it.lf_1));
      tmp = key + '=' + value;
    }
    return tmp;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.o2p_1 = EmptyParameters_instance;
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function Parameters() {
  }
  function EmptyParameters() {
  }
  protoOf(EmptyParameters).q2a = function () {
    return true;
  };
  protoOf(EmptyParameters).r2a = function (name) {
    return null;
  };
  protoOf(EmptyParameters).s2a = function () {
    return emptySet();
  };
  protoOf(EmptyParameters).o2a = function () {
    return emptySet();
  };
  protoOf(EmptyParameters).l = function () {
    return true;
  };
  protoOf(EmptyParameters).toString = function () {
    return 'Parameters ' + toString(this.o2a());
  };
  protoOf(EmptyParameters).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Parameters) : false) {
      tmp = other.l();
    } else {
      tmp = false;
    }
    return tmp;
  };
  var EmptyParameters_instance;
  function EmptyParameters_getInstance() {
    return EmptyParameters_instance;
  }
  function ParametersBuilder(size) {
    size = size === VOID ? 8 : size;
    return new ParametersBuilderImpl(size);
  }
  function ParametersBuilderImpl(size) {
    size = size === VOID ? 8 : size;
    StringValuesBuilderImpl.call(this, true, size);
  }
  protoOf(ParametersBuilderImpl).l2i = function () {
    return new ParametersImpl(this.v2a_1);
  };
  function ParametersImpl(values) {
    values = values === VOID ? emptyMap() : values;
    StringValuesImpl.call(this, true, values);
  }
  protoOf(ParametersImpl).toString = function () {
    return 'Parameters ' + toString(this.o2a());
  };
  function parseQueryString(query, startIndex, limit, decode) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    limit = limit === VOID ? 1000 : limit;
    decode = decode === VOID ? true : decode;
    var tmp;
    if (startIndex > get_lastIndex_0(query)) {
      tmp = Companion_getInstance_6().o2p_1;
    } else {
      // Inline function 'io.ktor.http.Companion.build' call
      Companion_getInstance_6();
      // Inline function 'kotlin.apply' call
      var this_0 = ParametersBuilder();
      parse(this_0, query, startIndex, limit, decode);
      tmp = this_0.l2i();
    }
    return tmp;
  }
  function parse(_this__u8e3s4, query, startIndex, limit, decode) {
    var count = 0;
    var nameIndex = startIndex;
    var equalIndex = -1;
    var inductionVariable = startIndex;
    var last = get_lastIndex_0(query);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (count === limit) {
          return Unit_instance;
        }
        var tmp0_subject = charCodeAt(query, index);
        if (tmp0_subject === _Char___init__impl__6a9atx(38)) {
          appendParam(_this__u8e3s4, query, nameIndex, equalIndex, index, decode);
          nameIndex = index + 1 | 0;
          equalIndex = -1;
          count = count + 1 | 0;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(61)) {
          if (equalIndex === -1) {
            equalIndex = index;
          }
        }
      }
       while (!(index === last));
    if (count === limit) {
      return Unit_instance;
    }
    appendParam(_this__u8e3s4, query, nameIndex, equalIndex, query.length, decode);
  }
  function appendParam(_this__u8e3s4, query, nameIndex, equalIndex, endIndex, decode) {
    if (equalIndex === -1) {
      var spaceNameIndex = trimStart(nameIndex, endIndex, query);
      var spaceEndIndex = trimEnd(spaceNameIndex, endIndex, query);
      if (spaceEndIndex > spaceNameIndex) {
        var name = decode ? decodeURLQueryComponent(query, spaceNameIndex, spaceEndIndex) : substring(query, spaceNameIndex, spaceEndIndex);
        _this__u8e3s4.p2a(name, emptyList());
      }
      return Unit_instance;
    }
    var spaceNameIndex_0 = trimStart(nameIndex, equalIndex, query);
    var spaceEqualIndex = trimEnd(spaceNameIndex_0, equalIndex, query);
    if (spaceEqualIndex > spaceNameIndex_0) {
      var name_0 = decode ? decodeURLQueryComponent(query, spaceNameIndex_0, spaceEqualIndex) : substring(query, spaceNameIndex_0, spaceEqualIndex);
      var spaceValueIndex = trimStart(equalIndex + 1 | 0, endIndex, query);
      var spaceEndIndex_0 = trimEnd(spaceValueIndex, endIndex, query);
      var value = decode ? decodeURLQueryComponent(query, spaceValueIndex, spaceEndIndex_0, true) : substring(query, spaceValueIndex, spaceEndIndex_0);
      _this__u8e3s4.z2a(name_0, value);
    }
  }
  function trimStart(start, end, query) {
    var spaceIndex = start;
    while (spaceIndex < end && isWhitespace(charSequenceGet(query, spaceIndex))) {
      spaceIndex = spaceIndex + 1 | 0;
    }
    return spaceIndex;
  }
  function trimEnd(start, end, text) {
    var spaceIndex = end;
    while (spaceIndex > start && isWhitespace(charSequenceGet(text, spaceIndex - 1 | 0))) {
      spaceIndex = spaceIndex - 1 | 0;
    }
    return spaceIndex;
  }
  function applyOrigin($this) {
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = $this.r2p_1;
    if (charSequenceLength(this_0) > 0) {
      tmp = true;
    } else {
      tmp = $this.d2q().b2q_1 === 'file';
    }
    if (tmp)
      return Unit_instance;
    $this.r2p_1 = Companion_getInstance_7().x2q_1.e2q_1;
    if ($this.u2p_1 == null)
      $this.u2p_1 = Companion_getInstance_7().x2q_1.p2q_1;
    if ($this.t2p_1 === 0) {
      $this.z2q(Companion_getInstance_7().x2q_1.f2q_1);
    }
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.x2q_1 = Url(get_origin(this));
    this.y2q_1 = 256;
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function URLBuilder(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery) {
    Companion_getInstance_7();
    protocol = protocol === VOID ? null : protocol;
    host = host === VOID ? '' : host;
    port = port === VOID ? 0 : port;
    user = user === VOID ? null : user;
    password = password === VOID ? null : password;
    pathSegments = pathSegments === VOID ? emptyList() : pathSegments;
    parameters = parameters === VOID ? Companion_getInstance_6().o2p_1 : parameters;
    fragment = fragment === VOID ? '' : fragment;
    trailingQuery = trailingQuery === VOID ? false : trailingQuery;
    this.r2p_1 = host;
    this.s2p_1 = trailingQuery;
    this.t2p_1 = port;
    this.u2p_1 = protocol;
    var tmp = this;
    tmp.v2p_1 = user == null ? null : encodeURLParameter(user);
    var tmp_0 = this;
    tmp_0.w2p_1 = password == null ? null : encodeURLParameter(password);
    this.x2p_1 = encodeURLQueryComponent(fragment);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(pathSegments, 10));
    var _iterator__ex2g4s = pathSegments.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      var tmp$ret$0 = encodeURLPathPart(item);
      destination.g(tmp$ret$0);
    }
    tmp_1.y2p_1 = destination;
    this.z2p_1 = encodeParameters(parameters);
    this.a2q_1 = new UrlDecodedParametersBuilder(this.z2p_1);
  }
  protoOf(URLBuilder).z2q = function (value) {
    // Inline function 'kotlin.require' call
    if (!(0 <= value ? value <= 65535 : false)) {
      var message = 'Port must be between 0 and 65535, or 0 if not set. Provided: ' + value;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.t2p_1 = value;
  };
  protoOf(URLBuilder).a2r = function (value) {
    this.u2p_1 = value;
  };
  protoOf(URLBuilder).d2q = function () {
    var tmp0_elvis_lhs = this.u2p_1;
    return tmp0_elvis_lhs == null ? Companion_getInstance_8().b2r_1 : tmp0_elvis_lhs;
  };
  protoOf(URLBuilder).h2r = function (value) {
    var tmp = this;
    tmp.v2p_1 = value == null ? null : encodeURLParameter(value);
  };
  protoOf(URLBuilder).i2r = function () {
    var tmp0_safe_receiver = this.v2p_1;
    return tmp0_safe_receiver == null ? null : decodeURLPart(tmp0_safe_receiver);
  };
  protoOf(URLBuilder).j2r = function () {
    var tmp0_safe_receiver = this.w2p_1;
    return tmp0_safe_receiver == null ? null : decodeURLPart(tmp0_safe_receiver);
  };
  protoOf(URLBuilder).k2r = function () {
    return decodeURLQueryComponent(this.x2p_1);
  };
  protoOf(URLBuilder).l2r = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.y2p_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      var tmp$ret$0 = decodeURLPart(item);
      destination.g(tmp$ret$0);
    }
    return destination;
  };
  protoOf(URLBuilder).m2r = function (value) {
    this.z2p_1 = value;
    this.a2q_1 = new UrlDecodedParametersBuilder(value);
  };
  protoOf(URLBuilder).n2r = function () {
    applyOrigin(this);
    return appendTo(this, StringBuilder_init_$Create$(256)).toString();
  };
  protoOf(URLBuilder).toString = function () {
    return appendTo(this, StringBuilder_init_$Create$(256)).toString();
  };
  protoOf(URLBuilder).l2i = function () {
    applyOrigin(this);
    return new Url_0(this.u2p_1, this.r2p_1, this.t2p_1, this.l2r(), this.a2q_1.l2i(), this.k2r(), this.i2r(), this.j2r(), this.s2p_1, this.n2r());
  };
  function get_authority(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    this_0.q7(get_encodedUserAndPassword(_this__u8e3s4));
    this_0.q7(_this__u8e3s4.r2p_1);
    if (!(_this__u8e3s4.t2p_1 === 0) && !(_this__u8e3s4.t2p_1 === _this__u8e3s4.d2q().c2q_1)) {
      this_0.q7(':');
      this_0.q7(_this__u8e3s4.t2p_1.toString());
    }
    return this_0.toString();
  }
  function appendTo(_this__u8e3s4, out) {
    out.h(_this__u8e3s4.d2q().b2q_1);
    switch (_this__u8e3s4.d2q().b2q_1) {
      case 'file':
        appendFile(out, _this__u8e3s4.r2p_1, get_encodedPath(_this__u8e3s4));
        return out;
      case 'mailto':
        appendMailto(out, get_encodedUserAndPassword(_this__u8e3s4), _this__u8e3s4.r2p_1);
        return out;
      case 'about':
        appendPayload(out, _this__u8e3s4.r2p_1);
        return out;
      case 'tel':
        appendPayload(out, _this__u8e3s4.r2p_1);
        return out;
      case 'data':
        appendPayload(out, _this__u8e3s4.r2p_1);
        return out;
    }
    out.h('://');
    out.h(get_authority(_this__u8e3s4));
    appendUrlFullPath(out, get_encodedPath(_this__u8e3s4), _this__u8e3s4.z2p_1, _this__u8e3s4.s2p_1);
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = _this__u8e3s4.x2p_1;
    if (charSequenceLength(this_0) > 0) {
      out.r7(_Char___init__impl__6a9atx(35));
      out.h(_this__u8e3s4.x2p_1);
    }
    return out;
  }
  function get_encodedUserAndPassword(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    appendUserAndPassword(this_0, _this__u8e3s4.v2p_1, _this__u8e3s4.w2p_1);
    return this_0.toString();
  }
  function appendFile(_this__u8e3s4, host, encodedPath) {
    _this__u8e3s4.h('://');
    _this__u8e3s4.h(host);
    if (!startsWith_0(encodedPath, _Char___init__impl__6a9atx(47))) {
      _this__u8e3s4.r7(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.h(encodedPath);
  }
  function set_encodedPath(_this__u8e3s4, value) {
    _this__u8e3s4.y2p_1 = isBlank(value) ? emptyList() : value === '/' ? get_ROOT_PATH() : toMutableList(split(value, charArrayOf([_Char___init__impl__6a9atx(47)])));
  }
  function get_encodedPath(_this__u8e3s4) {
    return joinPath(_this__u8e3s4.y2p_1);
  }
  function appendMailto(_this__u8e3s4, encodedUser, host) {
    _this__u8e3s4.h(':');
    _this__u8e3s4.h(encodedUser);
    _this__u8e3s4.h(host);
  }
  function appendPayload(_this__u8e3s4, host) {
    _this__u8e3s4.h(':');
    _this__u8e3s4.h(host);
  }
  function joinPath(_this__u8e3s4) {
    if (_this__u8e3s4.l())
      return '';
    if (_this__u8e3s4.n() === 1) {
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = first_0(_this__u8e3s4);
      if (charSequenceLength(this_0) === 0)
        return '/';
      return first_0(_this__u8e3s4);
    }
    return joinToString(_this__u8e3s4, '/');
  }
  function set(_this__u8e3s4, scheme, host, port, path, block) {
    scheme = scheme === VOID ? null : scheme;
    host = host === VOID ? null : host;
    port = port === VOID ? null : port;
    path = path === VOID ? null : path;
    var tmp;
    if (block === VOID) {
      tmp = set$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    if (!(scheme == null)) {
      _this__u8e3s4.a2r(Companion_getInstance_8().o2r(scheme));
    }
    if (!(host == null))
      _this__u8e3s4.r2p_1 = host;
    if (!(port == null)) {
      _this__u8e3s4.z2q(port);
    }
    if (!(path == null)) {
      set_encodedPath(_this__u8e3s4, path);
    }
    block(_this__u8e3s4);
  }
  function set$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function get_ROOT_PATH() {
    _init_properties_URLParser_kt__sf11to();
    return ROOT_PATH;
  }
  var ROOT_PATH;
  function takeFrom(_this__u8e3s4, urlString) {
    _init_properties_URLParser_kt__sf11to();
    if (isBlank(urlString))
      return _this__u8e3s4;
    var tmp;
    try {
      tmp = takeFromUnsafe(_this__u8e3s4, urlString);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        throw new URLParserException(urlString, cause);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function takeFromUnsafe(_this__u8e3s4, urlString) {
    _init_properties_URLParser_kt__sf11to();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last = charSequenceLength(urlString) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var it = charSequenceGet(urlString, index);
          if (!isWhitespace(it)) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var startIndex = tmp$ret$1;
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.text.indexOfLast' call
      var inductionVariable_0 = charSequenceLength(urlString) - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          var it_0 = charSequenceGet(urlString, index_0);
          if (!isWhitespace(it_0)) {
            tmp$ret$3 = index_0;
            break $l$block_0;
          }
        }
         while (0 <= inductionVariable_0);
      tmp$ret$3 = -1;
    }
    var endIndex = tmp$ret$3 + 1 | 0;
    var schemeLength = findScheme(urlString, startIndex, endIndex);
    if (schemeLength > 0) {
      var scheme = substring(urlString, startIndex, startIndex + schemeLength | 0);
      _this__u8e3s4.a2r(Companion_getInstance_8().o2r(scheme));
      startIndex = startIndex + (schemeLength + 1 | 0) | 0;
    }
    if (_this__u8e3s4.d2q().b2q_1 === 'data') {
      _this__u8e3s4.r2p_1 = substring(urlString, startIndex, endIndex);
      return _this__u8e3s4;
    }
    var slashCount = count(urlString, startIndex, endIndex, _Char___init__impl__6a9atx(47));
    startIndex = startIndex + slashCount | 0;
    if (_this__u8e3s4.d2q().b2q_1 === 'file') {
      parseFile(_this__u8e3s4, urlString, startIndex, endIndex, slashCount);
      return _this__u8e3s4;
    }
    if (_this__u8e3s4.d2q().b2q_1 === 'mailto') {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!(slashCount === 0)) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      parseMailto(_this__u8e3s4, urlString, startIndex, endIndex);
      return _this__u8e3s4;
    }
    if (_this__u8e3s4.d2q().b2q_1 === 'about') {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!(slashCount === 0)) {
        var message_0 = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      _this__u8e3s4.r2p_1 = substring(urlString, startIndex, endIndex);
      return _this__u8e3s4;
    }
    if (_this__u8e3s4.d2q().b2q_1 === 'tel') {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!(slashCount === 0)) {
        var message_1 = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
      _this__u8e3s4.r2p_1 = substring(urlString, startIndex, endIndex);
      return _this__u8e3s4;
    }
    if (slashCount >= 2) {
      loop: while (true) {
        // Inline function 'kotlin.takeIf' call
        var this_0 = indexOfAny(urlString, toCharArray('@/\\?#'), startIndex);
        var tmp;
        if (this_0 > 0) {
          tmp = this_0;
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var delimiter = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
        if (delimiter < endIndex && charCodeAt(urlString, delimiter) === _Char___init__impl__6a9atx(64)) {
          var passwordIndex = indexOfColonInHostPort(urlString, startIndex, delimiter);
          if (!(passwordIndex === -1)) {
            _this__u8e3s4.v2p_1 = substring(urlString, startIndex, passwordIndex);
            _this__u8e3s4.w2p_1 = substring(urlString, passwordIndex + 1 | 0, delimiter);
          } else {
            _this__u8e3s4.v2p_1 = substring(urlString, startIndex, delimiter);
          }
          startIndex = delimiter + 1 | 0;
        } else {
          fillHost(_this__u8e3s4, urlString, startIndex, delimiter);
          startIndex = delimiter;
          break loop;
        }
      }
    }
    if (startIndex >= endIndex) {
      _this__u8e3s4.y2p_1 = charCodeAt(urlString, endIndex - 1 | 0) === _Char___init__impl__6a9atx(47) ? get_ROOT_PATH() : emptyList();
      return _this__u8e3s4;
    }
    var tmp_0 = _this__u8e3s4;
    var tmp_1;
    if (slashCount === 0) {
      tmp_1 = dropLast(_this__u8e3s4.y2p_1, 1);
    } else {
      tmp_1 = emptyList();
    }
    tmp_0.y2p_1 = tmp_1;
    // Inline function 'kotlin.takeIf' call
    var this_1 = indexOfAny(urlString, toCharArray('?#'), startIndex);
    var tmp_2;
    if (this_1 > 0) {
      tmp_2 = this_1;
    } else {
      tmp_2 = null;
    }
    var tmp1_elvis_lhs = tmp_2;
    var pathEnd = tmp1_elvis_lhs == null ? endIndex : tmp1_elvis_lhs;
    if (pathEnd > startIndex) {
      var rawPath = substring(urlString, startIndex, pathEnd);
      var tmp_3;
      var tmp_4;
      if (_this__u8e3s4.y2p_1.n() === 1) {
        // Inline function 'kotlin.text.isEmpty' call
        var this_2 = first_0(_this__u8e3s4.y2p_1);
        tmp_4 = charSequenceLength(this_2) === 0;
      } else {
        tmp_4 = false;
      }
      if (tmp_4) {
        tmp_3 = emptyList();
      } else {
        tmp_3 = _this__u8e3s4.y2p_1;
      }
      var basePath = tmp_3;
      var rawChunks = rawPath === '/' ? get_ROOT_PATH() : split(rawPath, charArrayOf([_Char___init__impl__6a9atx(47)]));
      var relativePath = plus_0(slashCount === 1 ? get_ROOT_PATH() : emptyList(), rawChunks);
      _this__u8e3s4.y2p_1 = plus_0(basePath, relativePath);
      startIndex = pathEnd;
    }
    if (startIndex < endIndex && charCodeAt(urlString, startIndex) === _Char___init__impl__6a9atx(63)) {
      startIndex = parseQuery(_this__u8e3s4, urlString, startIndex, endIndex);
    }
    parseFragment(_this__u8e3s4, urlString, startIndex, endIndex);
    return _this__u8e3s4;
  }
  function URLParserException(urlString, cause) {
    IllegalStateException_init_$Init$('Fail to parse url: ' + urlString, cause, this);
    captureStack(this, URLParserException);
  }
  function findScheme(urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    var current = startIndex;
    var incorrectSchemePosition = -1;
    var firstChar = charCodeAt(urlString, current);
    if (!(_Char___init__impl__6a9atx(97) <= firstChar ? firstChar <= _Char___init__impl__6a9atx(122) : false) && !(_Char___init__impl__6a9atx(65) <= firstChar ? firstChar <= _Char___init__impl__6a9atx(90) : false)) {
      incorrectSchemePosition = current;
    }
    while (current < endIndex) {
      var char = charCodeAt(urlString, current);
      if (char === _Char___init__impl__6a9atx(58)) {
        if (!(incorrectSchemePosition === -1)) {
          throw IllegalArgumentException_init_$Create$('Illegal character in scheme at position ' + incorrectSchemePosition);
        }
        return current - startIndex | 0;
      }
      if (char === _Char___init__impl__6a9atx(47) || char === _Char___init__impl__6a9atx(63) || char === _Char___init__impl__6a9atx(35))
        return -1;
      if (incorrectSchemePosition === -1 && !(_Char___init__impl__6a9atx(97) <= char ? char <= _Char___init__impl__6a9atx(122) : false) && !(_Char___init__impl__6a9atx(65) <= char ? char <= _Char___init__impl__6a9atx(90) : false) && !(_Char___init__impl__6a9atx(48) <= char ? char <= _Char___init__impl__6a9atx(57) : false) && !(char === _Char___init__impl__6a9atx(46)) && !(char === _Char___init__impl__6a9atx(43)) && !(char === _Char___init__impl__6a9atx(45))) {
        incorrectSchemePosition = current;
      }
      current = current + 1 | 0;
    }
    return -1;
  }
  function count(urlString, startIndex, endIndex, char) {
    _init_properties_URLParser_kt__sf11to();
    var result = 0;
    $l$loop: while ((startIndex + result | 0) < endIndex && charCodeAt(urlString, startIndex + result | 0) === char) {
      result = result + 1 | 0;
    }
    return result;
  }
  function parseFile(_this__u8e3s4, urlString, startIndex, endIndex, slashCount) {
    _init_properties_URLParser_kt__sf11to();
    switch (slashCount) {
      case 1:
        _this__u8e3s4.r2p_1 = '';
        set_encodedPath(_this__u8e3s4, substring(urlString, startIndex, endIndex));
        break;
      case 2:
        var nextSlash = indexOf(urlString, _Char___init__impl__6a9atx(47), startIndex);
        if (nextSlash === -1 || nextSlash === endIndex) {
          _this__u8e3s4.r2p_1 = substring(urlString, startIndex, endIndex);
          return Unit_instance;
        }

        _this__u8e3s4.r2p_1 = substring(urlString, startIndex, nextSlash);
        set_encodedPath(_this__u8e3s4, substring(urlString, nextSlash, endIndex));
        break;
      case 3:
        _this__u8e3s4.r2p_1 = '';
        set_encodedPath(_this__u8e3s4, '/' + substring(urlString, startIndex, endIndex));
        break;
      default:
        throw IllegalArgumentException_init_$Create$('Invalid file url: ' + urlString);
    }
  }
  function parseMailto(_this__u8e3s4, urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    var delimiter = indexOf_0(urlString, '@', startIndex);
    if (delimiter === -1) {
      throw IllegalArgumentException_init_$Create$('Invalid mailto url: ' + urlString + ", it should contain '@'.");
    }
    _this__u8e3s4.h2r(decodeURLPart(substring(urlString, startIndex, delimiter)));
    _this__u8e3s4.r2p_1 = substring(urlString, delimiter + 1 | 0, endIndex);
  }
  function indexOfColonInHostPort(_this__u8e3s4, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    var skip = false;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0_subject = charCodeAt(_this__u8e3s4, index);
        if (tmp0_subject === _Char___init__impl__6a9atx(91))
          skip = true;
        else if (tmp0_subject === _Char___init__impl__6a9atx(93))
          skip = false;
        else if (tmp0_subject === _Char___init__impl__6a9atx(58))
          if (!skip)
            return index;
      }
       while (inductionVariable < endIndex);
    return -1;
  }
  function fillHost(_this__u8e3s4, urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    // Inline function 'kotlin.takeIf' call
    var this_0 = indexOfColonInHostPort(urlString, startIndex, endIndex);
    var tmp;
    if (this_0 > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var colonIndex = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
    _this__u8e3s4.r2p_1 = substring(urlString, startIndex, colonIndex);
    var tmp_0;
    if ((colonIndex + 1 | 0) < endIndex) {
      tmp_0 = toInt(substring(urlString, colonIndex + 1 | 0, endIndex));
    } else {
      tmp_0 = 0;
    }
    _this__u8e3s4.z2q(tmp_0);
  }
  function parseQuery(_this__u8e3s4, urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    if ((startIndex + 1 | 0) === endIndex) {
      _this__u8e3s4.s2p_1 = true;
      return endIndex;
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = indexOf(urlString, _Char___init__impl__6a9atx(35), startIndex + 1 | 0);
    var tmp;
    if (this_0 > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var fragmentStart = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
    var rawParameters = parseQueryString(substring(urlString, startIndex + 1 | 0, fragmentStart), VOID, VOID, false);
    rawParameters.t2a(parseQuery$lambda(_this__u8e3s4));
    return fragmentStart;
  }
  function parseFragment(_this__u8e3s4, urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    if (startIndex < endIndex && charCodeAt(urlString, startIndex) === _Char___init__impl__6a9atx(35)) {
      _this__u8e3s4.x2p_1 = substring(urlString, startIndex + 1 | 0, endIndex);
    }
  }
  function parseQuery$lambda($this_parseQuery) {
    return function (key, values) {
      $this_parseQuery.z2p_1.p2a(key, values);
      return Unit_instance;
    };
  }
  var properties_initialized_URLParser_kt_hd1g6a;
  function _init_properties_URLParser_kt__sf11to() {
    if (!properties_initialized_URLParser_kt_hd1g6a) {
      properties_initialized_URLParser_kt_hd1g6a = true;
      ROOT_PATH = listOf_0('');
    }
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.b2r_1 = new URLProtocol('http', 80);
    this.c2r_1 = new URLProtocol('https', 443);
    this.d2r_1 = new URLProtocol('ws', 80);
    this.e2r_1 = new URLProtocol('wss', 443);
    this.f2r_1 = new URLProtocol('socks', 1080);
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = listOf([this.b2r_1, this.c2r_1, this.d2r_1, this.e2r_1, this.f2r_1]);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var tmp$ret$0 = element.b2q_1;
      destination.z1(tmp$ret$0, element);
    }
    tmp.g2r_1 = destination;
  }
  protoOf(Companion_8).o2r = function (name) {
    // Inline function 'kotlin.let' call
    var it = toLowerCasePreservingASCIIRules(name);
    var tmp0_elvis_lhs = Companion_getInstance_8().g2r_1.w1(it);
    return tmp0_elvis_lhs == null ? new URLProtocol(it, 0) : tmp0_elvis_lhs;
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function URLProtocol(name, defaultPort) {
    Companion_getInstance_8();
    this.b2q_1 = name;
    this.c2q_1 = defaultPort;
    var tmp0 = this.b2q_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.all' call
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(tmp0)) {
        var element = charSequenceGet(tmp0, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        if (!isLowerCase(element)) {
          tmp$ret$1 = false;
          break $l$block;
        }
      }
      tmp$ret$1 = true;
    }
    // Inline function 'kotlin.require' call
    if (!tmp$ret$1) {
      var message = 'All characters should be lower case';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(URLProtocol).toString = function () {
    return 'URLProtocol(name=' + this.b2q_1 + ', defaultPort=' + this.c2q_1 + ')';
  };
  protoOf(URLProtocol).hashCode = function () {
    var result = getStringHashCode(this.b2q_1);
    result = imul(result, 31) + this.c2q_1 | 0;
    return result;
  };
  protoOf(URLProtocol).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof URLProtocol))
      return false;
    if (!(this.b2q_1 === other.b2q_1))
      return false;
    if (!(this.c2q_1 === other.c2q_1))
      return false;
    return true;
  };
  function isSecure(_this__u8e3s4) {
    return _this__u8e3s4.b2q_1 === 'https' || _this__u8e3s4.b2q_1 === 'wss';
  }
  function isWebsocket(_this__u8e3s4) {
    return _this__u8e3s4.b2q_1 === 'ws' || _this__u8e3s4.b2q_1 === 'wss';
  }
  function Url(urlString) {
    return URLBuilder_0(urlString).l2i();
  }
  function get_fullPath(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    appendUrlFullPath_0(this_0, _this__u8e3s4.p2r(), _this__u8e3s4.q2r(), _this__u8e3s4.k2q_1);
    return this_0.toString();
  }
  function takeFrom_0(_this__u8e3s4, url) {
    _this__u8e3s4.u2p_1 = url.u2p_1;
    _this__u8e3s4.r2p_1 = url.r2p_1;
    _this__u8e3s4.z2q(url.t2p_1);
    _this__u8e3s4.y2p_1 = url.y2p_1;
    _this__u8e3s4.v2p_1 = url.v2p_1;
    _this__u8e3s4.w2p_1 = url.w2p_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ParametersBuilder();
    appendAll(this_0, url.z2p_1);
    _this__u8e3s4.m2r(this_0);
    _this__u8e3s4.x2p_1 = url.x2p_1;
    _this__u8e3s4.s2p_1 = url.s2p_1;
    return _this__u8e3s4;
  }
  function appendUrlFullPath(_this__u8e3s4, encodedPath, encodedQueryParameters, trailingQuery) {
    var tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(encodedPath)) {
      tmp = !startsWith_1(encodedPath, '/');
    } else {
      tmp = false;
    }
    if (tmp) {
      _this__u8e3s4.r7(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.h(encodedPath);
    if (!encodedQueryParameters.l() || trailingQuery) {
      _this__u8e3s4.h('?');
    }
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = encodedQueryParameters.o2a();
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'kotlin.collections.component1' call
      var key = element.u();
      // Inline function 'kotlin.collections.component2' call
      var value = element.v();
      var tmp_0;
      if (value.l()) {
        tmp_0 = listOf_0(to(key, null));
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(value, 10));
        var _iterator__ex2g4s_0 = value.i();
        while (_iterator__ex2g4s_0.j()) {
          var item = _iterator__ex2g4s_0.k();
          var tmp$ret$3 = to(key, item);
          destination_0.g(tmp$ret$3);
        }
        tmp_0 = destination_0;
      }
      var list = tmp_0;
      addAll(destination, list);
    }
    var tmp_1 = destination;
    joinTo(tmp_1, _this__u8e3s4, '&', VOID, VOID, VOID, VOID, appendUrlFullPath$lambda);
  }
  function appendUserAndPassword(_this__u8e3s4, encodedUser, encodedPassword) {
    if (encodedUser == null) {
      return Unit_instance;
    }
    _this__u8e3s4.q7(encodedUser);
    if (!(encodedPassword == null)) {
      _this__u8e3s4.r7(_Char___init__impl__6a9atx(58));
      _this__u8e3s4.q7(encodedPassword);
    }
    _this__u8e3s4.q7('@');
  }
  function URLBuilder_0(urlString) {
    return takeFrom(new URLBuilder(), urlString);
  }
  function appendUrlFullPath_0(_this__u8e3s4, encodedPath, encodedQuery, trailingQuery) {
    var tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(encodedPath)) {
      tmp = !startsWith_1(encodedPath, '/');
    } else {
      tmp = false;
    }
    if (tmp) {
      _this__u8e3s4.r7(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.h(encodedPath);
    var tmp_0;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(encodedQuery) > 0) {
      tmp_0 = true;
    } else {
      tmp_0 = trailingQuery;
    }
    if (tmp_0) {
      _this__u8e3s4.h('?');
    }
    _this__u8e3s4.h(encodedQuery);
  }
  function get_hostWithPortIfSpecified(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.f2q_1;
    return tmp0_subject === 0 || tmp0_subject === _this__u8e3s4.q2q_1.c2q_1 ? _this__u8e3s4.e2q_1 : get_hostWithPort(_this__u8e3s4);
  }
  function get_hostWithPort(_this__u8e3s4) {
    return _this__u8e3s4.e2q_1 + ':' + _this__u8e3s4.r2r();
  }
  function appendUrlFullPath$lambda(it) {
    var key = it.kf_1;
    var tmp;
    if (it.lf_1 == null) {
      tmp = key;
    } else {
      var value = toString_1(it.lf_1);
      tmp = key + '=' + value;
    }
    return tmp;
  }
  function Companion_9() {
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function Url$segments$delegate$lambda($pathSegments) {
    return function () {
      var tmp;
      if ($pathSegments.l()) {
        return emptyList();
      }
      var tmp_0;
      var tmp_1;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = first_0($pathSegments);
      if (charSequenceLength(this_0) === 0) {
        tmp_1 = $pathSegments.n() > 1;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = 1;
      } else {
        tmp_0 = 0;
      }
      var start = tmp_0;
      var tmp_2;
      // Inline function 'kotlin.text.isEmpty' call
      var this_1 = last($pathSegments);
      if (charSequenceLength(this_1) === 0) {
        tmp_2 = get_lastIndex($pathSegments);
      } else {
        tmp_2 = get_lastIndex($pathSegments) + 1 | 0;
      }
      var end = tmp_2;
      return $pathSegments.t1(start, end);
    };
  }
  function Url$encodedPath$delegate$lambda($pathSegments, this$0) {
    return function () {
      var tmp;
      if ($pathSegments.l()) {
        return '';
      }
      var pathStartIndex = indexOf(this$0.l2q_1, _Char___init__impl__6a9atx(47), this$0.q2q_1.b2q_1.length + 3 | 0);
      var tmp_0;
      if (pathStartIndex === -1) {
        return '';
      }
      // Inline function 'kotlin.charArrayOf' call
      var tmp$ret$0 = charArrayOf([_Char___init__impl__6a9atx(63), _Char___init__impl__6a9atx(35)]);
      var pathEndIndex = indexOfAny(this$0.l2q_1, tmp$ret$0, pathStartIndex);
      var tmp_1;
      if (pathEndIndex === -1) {
        return substring_0(this$0.l2q_1, pathStartIndex);
      }
      return substring(this$0.l2q_1, pathStartIndex, pathEndIndex);
    };
  }
  function Url$_get_encodedPath_$ref_fg9j48() {
    return function (p0) {
      return p0.p2r();
    };
  }
  function Url$encodedQuery$delegate$lambda(this$0) {
    return function () {
      var queryStart = indexOf(this$0.l2q_1, _Char___init__impl__6a9atx(63)) + 1 | 0;
      var tmp;
      if (queryStart === 0) {
        return '';
      }
      var queryEnd = indexOf(this$0.l2q_1, _Char___init__impl__6a9atx(35), queryStart);
      var tmp_0;
      if (queryEnd === -1) {
        return substring_0(this$0.l2q_1, queryStart);
      }
      return substring(this$0.l2q_1, queryStart, queryEnd);
    };
  }
  function Url$_get_encodedQuery_$ref_c7vq1h() {
    return function (p0) {
      return p0.q2r();
    };
  }
  function Url$encodedPathAndQuery$delegate$lambda(this$0) {
    return function () {
      var pathStart = indexOf(this$0.l2q_1, _Char___init__impl__6a9atx(47), this$0.q2q_1.b2q_1.length + 3 | 0);
      var tmp;
      if (pathStart === -1) {
        return '';
      }
      var queryEnd = indexOf(this$0.l2q_1, _Char___init__impl__6a9atx(35), pathStart);
      var tmp_0;
      if (queryEnd === -1) {
        return substring_0(this$0.l2q_1, pathStart);
      }
      return substring(this$0.l2q_1, pathStart, queryEnd);
    };
  }
  function Url$encodedUser$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.i2q_1 == null) {
        return null;
      }
      var tmp_0;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = this$0.i2q_1;
      if (charSequenceLength(this_0) === 0) {
        return '';
      }
      var usernameStart = this$0.q2q_1.b2q_1.length + 3 | 0;
      // Inline function 'kotlin.charArrayOf' call
      var tmp$ret$1 = charArrayOf([_Char___init__impl__6a9atx(58), _Char___init__impl__6a9atx(64)]);
      var usernameEnd = indexOfAny(this$0.l2q_1, tmp$ret$1, usernameStart);
      return substring(this$0.l2q_1, usernameStart, usernameEnd);
    };
  }
  function Url$_get_encodedUser_$ref_3lb9bi() {
    return function (p0) {
      return p0.s2r();
    };
  }
  function Url$encodedPassword$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.j2q_1 == null) {
        return null;
      }
      var tmp_0;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = this$0.j2q_1;
      if (charSequenceLength(this_0) === 0) {
        return '';
      }
      var passwordStart = indexOf(this$0.l2q_1, _Char___init__impl__6a9atx(58), this$0.q2q_1.b2q_1.length + 3 | 0) + 1 | 0;
      var passwordEnd = indexOf(this$0.l2q_1, _Char___init__impl__6a9atx(64));
      return substring(this$0.l2q_1, passwordStart, passwordEnd);
    };
  }
  function Url$_get_encodedPassword_$ref_25ixc2() {
    return function (p0) {
      return p0.t2r();
    };
  }
  function Url$encodedFragment$delegate$lambda(this$0) {
    return function () {
      var fragmentStart = indexOf(this$0.l2q_1, _Char___init__impl__6a9atx(35)) + 1 | 0;
      var tmp;
      if (fragmentStart === 0) {
        return '';
      }
      return substring_0(this$0.l2q_1, fragmentStart);
    };
  }
  function Url_0(protocol, host, specifiedPort, pathSegments, parameters, fragment, user, password, trailingQuery, urlString) {
    this.e2q_1 = host;
    this.f2q_1 = specifiedPort;
    this.g2q_1 = parameters;
    this.h2q_1 = fragment;
    this.i2q_1 = user;
    this.j2q_1 = password;
    this.k2q_1 = trailingQuery;
    this.l2q_1 = urlString;
    var containsArg = this.f2q_1;
    // Inline function 'kotlin.require' call
    if (!(0 <= containsArg ? containsArg <= 65535 : false)) {
      var message = 'Port must be between 0 and 65535, or 0 if not set. Provided: ' + this.f2q_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.m2q_1 = pathSegments;
    this.n2q_1 = pathSegments;
    var tmp = this;
    tmp.o2q_1 = lazy_0(Url$segments$delegate$lambda(pathSegments));
    this.p2q_1 = protocol;
    var tmp_0 = this;
    var tmp0_elvis_lhs = this.p2q_1;
    tmp_0.q2q_1 = tmp0_elvis_lhs == null ? Companion_getInstance_8().b2r_1 : tmp0_elvis_lhs;
    var tmp_1 = this;
    tmp_1.r2q_1 = lazy_0(Url$encodedPath$delegate$lambda(pathSegments, this));
    var tmp_2 = this;
    tmp_2.s2q_1 = lazy_0(Url$encodedQuery$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.t2q_1 = lazy_0(Url$encodedPathAndQuery$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.u2q_1 = lazy_0(Url$encodedUser$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.v2q_1 = lazy_0(Url$encodedPassword$delegate$lambda(this));
    var tmp_6 = this;
    tmp_6.w2q_1 = lazy_0(Url$encodedFragment$delegate$lambda(this));
  }
  protoOf(Url_0).r2r = function () {
    // Inline function 'kotlin.takeUnless' call
    var this_0 = this.f2q_1;
    var tmp;
    if (!(this_0 === 0)) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    return tmp0_elvis_lhs == null ? this.q2q_1.c2q_1 : tmp0_elvis_lhs;
  };
  protoOf(Url_0).p2r = function () {
    var tmp0 = this.r2q_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('encodedPath', 1, tmp, Url$_get_encodedPath_$ref_fg9j48(), null);
    return tmp0.v();
  };
  protoOf(Url_0).q2r = function () {
    var tmp0 = this.s2q_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('encodedQuery', 1, tmp, Url$_get_encodedQuery_$ref_c7vq1h(), null);
    return tmp0.v();
  };
  protoOf(Url_0).s2r = function () {
    var tmp0 = this.u2q_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('encodedUser', 1, tmp, Url$_get_encodedUser_$ref_3lb9bi(), null);
    return tmp0.v();
  };
  protoOf(Url_0).t2r = function () {
    var tmp0 = this.v2q_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('encodedPassword', 1, tmp, Url$_get_encodedPassword_$ref_25ixc2(), null);
    return tmp0.v();
  };
  protoOf(Url_0).toString = function () {
    return this.l2q_1;
  };
  protoOf(Url_0).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Url_0))
      THROW_CCE();
    return this.l2q_1 === other.l2q_1;
  };
  protoOf(Url_0).hashCode = function () {
    return getStringHashCode(this.l2q_1);
  };
  function get_authority_0(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    this_0.q7(get_encodedUserAndPassword_0(_this__u8e3s4));
    this_0.q7(get_hostWithPortIfSpecified(_this__u8e3s4));
    return this_0.toString();
  }
  function UrlSerializer() {
    UrlSerializer_instance = this;
    this.u2r_1 = PrimitiveSerialDescriptor('io.ktor.http.Url', STRING_getInstance());
  }
  protoOf(UrlSerializer).kn = function () {
    return this.u2r_1;
  };
  protoOf(UrlSerializer).mn = function (decoder) {
    return Url(decoder.gq());
  };
  protoOf(UrlSerializer).v2r = function (encoder, value) {
    encoder.pr(value.toString());
  };
  protoOf(UrlSerializer).ln = function (encoder, value) {
    return this.v2r(encoder, value instanceof Url_0 ? value : THROW_CCE());
  };
  var UrlSerializer_instance;
  function UrlSerializer_getInstance() {
    if (UrlSerializer_instance == null)
      new UrlSerializer();
    return UrlSerializer_instance;
  }
  function get_encodedUserAndPassword_0(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    appendUserAndPassword(this_0, _this__u8e3s4.s2r(), _this__u8e3s4.t2r());
    return this_0.toString();
  }
  function UrlDecodedParametersBuilder(encodedParametersBuilder) {
    this.w2r_1 = encodedParametersBuilder;
    this.x2r_1 = this.w2r_1.q2a();
  }
  protoOf(UrlDecodedParametersBuilder).l2i = function () {
    return decodeParameters(this.w2r_1);
  };
  protoOf(UrlDecodedParametersBuilder).q2a = function () {
    return this.x2r_1;
  };
  protoOf(UrlDecodedParametersBuilder).r2a = function (name) {
    var tmp0_safe_receiver = this.w2r_1.r2a(encodeURLParameter(name));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var _iterator__ex2g4s = tmp0_safe_receiver.i();
      while (_iterator__ex2g4s.j()) {
        var item = _iterator__ex2g4s.k();
        var tmp$ret$0 = decodeURLQueryComponent(item, VOID, VOID, true);
        destination.g(tmp$ret$0);
      }
      tmp = destination;
    }
    return tmp;
  };
  protoOf(UrlDecodedParametersBuilder).s2a = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.w2r_1.s2a();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      var tmp$ret$0 = decodeURLQueryComponent(item);
      destination.g(tmp$ret$0);
    }
    return toSet(destination);
  };
  protoOf(UrlDecodedParametersBuilder).l = function () {
    return this.w2r_1.l();
  };
  protoOf(UrlDecodedParametersBuilder).o2a = function () {
    return decodeParameters(this.w2r_1).o2a();
  };
  protoOf(UrlDecodedParametersBuilder).z2a = function (name, value) {
    return this.w2r_1.z2a(encodeURLParameter(name), encodeURLParameterValue(value));
  };
  protoOf(UrlDecodedParametersBuilder).p2a = function (name, values) {
    var tmp = encodeURLParameter(name);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
    var _iterator__ex2g4s = values.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      var tmp$ret$0 = encodeURLParameterValue(item);
      destination.g(tmp$ret$0);
    }
    return this.w2r_1.p2a(tmp, destination);
  };
  protoOf(UrlDecodedParametersBuilder).c2 = function () {
    return this.w2r_1.c2();
  };
  function encodeParameters(parameters) {
    // Inline function 'kotlin.apply' call
    var this_0 = ParametersBuilder();
    appendAllEncoded(this_0, parameters);
    return this_0;
  }
  function decodeParameters(parameters) {
    // Inline function 'kotlin.apply' call
    var this_0 = ParametersBuilder();
    appendAllDecoded(this_0, parameters);
    return this_0.l2i();
  }
  function appendAllEncoded(_this__u8e3s4, parameters) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = parameters.s2a().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var tmp0_elvis_lhs = parameters.r2a(element);
      var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      var tmp = encodeURLParameter(element);
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
      var _iterator__ex2g4s_0 = values.i();
      while (_iterator__ex2g4s_0.j()) {
        var item = _iterator__ex2g4s_0.k();
        var tmp$ret$0 = encodeURLParameterValue(item);
        destination.g(tmp$ret$0);
      }
      _this__u8e3s4.p2a(tmp, destination);
    }
  }
  function appendAllDecoded(_this__u8e3s4, parameters) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = parameters.s2a().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var tmp0_elvis_lhs = parameters.r2a(element);
      var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      var tmp = decodeURLQueryComponent(element);
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
      var _iterator__ex2g4s_0 = values.i();
      while (_iterator__ex2g4s_0.j()) {
        var item = _iterator__ex2g4s_0.k();
        var tmp$ret$0 = decodeURLQueryComponent(item, VOID, VOID, true);
        destination.g(tmp$ret$0);
      }
      _this__u8e3s4.p2a(tmp, destination);
    }
  }
  function ByteArrayContent(bytes, contentType, status) {
    contentType = contentType === VOID ? null : contentType;
    status = status === VOID ? null : status;
    ByteArrayContent_0.call(this);
    this.z2r_1 = bytes;
    this.a2s_1 = contentType;
    this.b2s_1 = status;
  }
  protoOf(ByteArrayContent).c2s = function () {
    return this.a2s_1;
  };
  protoOf(ByteArrayContent).d2s = function () {
    return fromInt(this.z2r_1.length);
  };
  protoOf(ByteArrayContent).e2s = function () {
    return this.z2r_1;
  };
  function MultiPartData() {
  }
  function PartData$BinaryChannelItem$_init_$lambda_77jc0t() {
    return Unit_instance;
  }
  function FormItem(value, dispose, partHeaders) {
    PartData.call(this, dispose, partHeaders);
    this.k2s_1 = value;
  }
  function FileItem() {
  }
  function BinaryItem(provider, dispose, partHeaders) {
    PartData.call(this, dispose, partHeaders);
    this.p2s_1 = provider;
  }
  function BinaryChannelItem(provider, partHeaders) {
    PartData.call(this, PartData$BinaryChannelItem$_init_$lambda_77jc0t, partHeaders);
    this.u2s_1 = provider;
  }
  function PartData$contentDisposition$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.w2s_1.l29(HttpHeaders_getInstance().y2i_1);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = Companion_getInstance().nl(tmp0_safe_receiver);
      }
      return tmp;
    };
  }
  function PartData$contentType$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.w2s_1.l29(HttpHeaders_getInstance().e2j_1);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = Companion_getInstance_0().nl(tmp0_safe_receiver);
      }
      return tmp;
    };
  }
  function PartData(dispose, headers) {
    this.v2s_1 = dispose;
    this.w2s_1 = headers;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.x2s_1 = lazy(tmp_0, PartData$contentDisposition$delegate$lambda(this));
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_1.y2s_1 = lazy(tmp_2, PartData$contentType$delegate$lambda(this));
  }
  function NoContent() {
    OutgoingContent.call(this);
  }
  function ReadChannelContent() {
    OutgoingContent.call(this);
  }
  function WriteChannelContent() {
    OutgoingContent.call(this);
  }
  function ByteArrayContent_0() {
    OutgoingContent.call(this);
  }
  function ProtocolUpgrade() {
  }
  function ContentWrapper() {
  }
  protoOf(ContentWrapper).g2t = function () {
    return this.f2t_1;
  };
  function OutgoingContent() {
    this.f2s_1 = null;
  }
  protoOf(OutgoingContent).c2s = function () {
    return null;
  };
  protoOf(OutgoingContent).d2s = function () {
    return null;
  };
  protoOf(OutgoingContent).p2m = function () {
    return Companion_getInstance_2().i2i_1;
  };
  function NullBody() {
  }
  var NullBody_instance;
  function NullBody_getInstance() {
    return NullBody_instance;
  }
  function isEmpty(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof NoContent) {
      tmp = true;
    } else {
      if (_this__u8e3s4 instanceof ContentWrapper) {
        tmp = isEmpty(_this__u8e3s4.g2t());
      } else {
        tmp = false;
      }
    }
    return tmp;
  }
  function TextContent(text, contentType, status) {
    status = status === VOID ? null : status;
    ByteArrayContent_0.call(this);
    this.i2t_1 = text;
    this.j2t_1 = contentType;
    this.k2t_1 = status;
    var tmp = this;
    var tmp0_elvis_lhs = charset(this.j2t_1);
    tmp.l2t_1 = toByteArray(this.i2t_1, tmp0_elvis_lhs == null ? Charsets_getInstance().v27_1 : tmp0_elvis_lhs);
  }
  protoOf(TextContent).c2s = function () {
    return this.j2t_1;
  };
  protoOf(TextContent).d2s = function () {
    return fromInt(this.l2t_1.length);
  };
  protoOf(TextContent).e2s = function () {
    return this.l2t_1;
  };
  protoOf(TextContent).toString = function () {
    return 'TextContent[' + this.j2t_1.toString() + '] "' + take(this.i2t_1, 30) + '"';
  };
  function get_origin(_this__u8e3s4) {
    return PlatformUtils_getInstance().g2a_1 ? locationOrigin() : 'http://localhost';
  }
  function locationOrigin() {
    return function () {
      var tmpLocation = null;
      if (typeof window !== 'undefined') {
        tmpLocation = window.location;
      } else if (typeof self !== 'undefined') {
        tmpLocation = self.location;
      }
      var origin = '';
      if (tmpLocation) {
        origin = tmpLocation.origin;
      }
      return origin && origin != 'null' ? origin : 'http://localhost';
    }();
  }
  //region block: post-declaration
  protoOf(EmptyHeaders).l29 = get;
  protoOf(EmptyHeaders).t2a = forEach;
  protoOf(EmptyParameters).l29 = get;
  protoOf(EmptyParameters).t2a = forEach;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_1();
  EmptyHeaders_instance = new EmptyHeaders();
  EmptyParameters_instance = new EmptyParameters();
  Companion_instance_9 = new Companion_9();
  NullBody_instance = new NullBody();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ContentType_init_$Create$;
  _.$_$.b = NullBody_instance;
  _.$_$.c = Application_getInstance;
  _.$_$.d = Companion_getInstance_0;
  _.$_$.e = Image_getInstance;
  _.$_$.f = MultiPart_getInstance;
  _.$_$.g = Text_getInstance;
  _.$_$.h = Video_getInstance;
  _.$_$.i = Companion_getInstance_2;
  _.$_$.j = HttpHeaders_getInstance;
  _.$_$.k = Companion_getInstance_3;
  _.$_$.l = Companion_getInstance_4;
  _.$_$.m = Companion_getInstance_5;
  _.$_$.n = Companion_getInstance_6;
  _.$_$.o = ByteArrayContent;
  _.$_$.p = MultiPartData;
  _.$_$.q = NullBody;
  _.$_$.r = ByteArrayContent_0;
  _.$_$.s = ContentWrapper;
  _.$_$.t = NoContent;
  _.$_$.u = ProtocolUpgrade;
  _.$_$.v = ReadChannelContent;
  _.$_$.w = WriteChannelContent;
  _.$_$.x = OutgoingContent;
  _.$_$.y = BinaryChannelItem;
  _.$_$.z = BinaryItem;
  _.$_$.a1 = FileItem;
  _.$_$.b1 = FormItem;
  _.$_$.c1 = TextContent;
  _.$_$.d1 = isEmpty;
  _.$_$.e1 = HeadersBuilder;
  _.$_$.f1 = HttpStatusCode;
  _.$_$.g1 = ParametersBuilder;
  _.$_$.h1 = URLBuilder_0;
  _.$_$.i1 = URLBuilder;
  _.$_$.j1 = UnsafeHeaderException;
  _.$_$.k1 = Url;
  _.$_$.l1 = append;
  _.$_$.m1 = get_authority;
  _.$_$.n1 = get_authority_0;
  _.$_$.o1 = charset_0;
  _.$_$.p1 = charset;
  _.$_$.q1 = contentLength;
  _.$_$.r1 = contentType;
  _.$_$.s1 = contentType_0;
  _.$_$.t1 = decodeURLPart;
  _.$_$.u1 = encodeURLParameter;
  _.$_$.v1 = escapeIfNeeded;
  _.$_$.w1 = formUrlEncode;
  _.$_$.x1 = get_fullPath;
  _.$_$.y1 = headersOf;
  _.$_$.z1 = isSecure;
  _.$_$.a2 = isWebsocket;
  _.$_$.b2 = set;
  _.$_$.c2 = get_supportsRequestBody;
  _.$_$.d2 = takeFrom_0;
  _.$_$.e2 = takeFrom;
  _.$_$.f2 = withCharset;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-http.js.map
