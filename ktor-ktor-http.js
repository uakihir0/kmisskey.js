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
  var VOID = kotlin_kotlin.$_$.c;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.a;
  var charCodeAt = kotlin_kotlin.$_$.oa;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.f3;
  var substring = kotlin_kotlin.$_$.ke;
  var toString = kotlin_kotlin.$_$.dc;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.a2;
  var Unit_instance = kotlin_kotlin.$_$.z;
  var charSequenceGet = kotlin_kotlin.$_$.pa;
  var charSequenceLength = kotlin_kotlin.$_$.qa;
  var charSequenceSubSequence = kotlin_kotlin.$_$.ra;
  var toString_0 = kotlin_kotlin.$_$.m3;
  var toByte = kotlin_kotlin.$_$.bc;
  var decodeToString = kotlin_kotlin.$_$.hd;
  var Exception = kotlin_kotlin.$_$.sf;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.g2;
  var captureStack = kotlin_kotlin.$_$.la;
  var protoOf = kotlin_kotlin.$_$.ac;
  var initMetadataForClass = kotlin_kotlin.$_$.ab;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.h3;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.b2;
  var encode = kotlin_io_ktor_ktor_io.$_$.r;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.j3;
  var Char__minus_impl_a2frrh_0 = kotlin_kotlin.$_$.i3;
  var takeWhile = kotlin_io_ktor_ktor_io.$_$.b1;
  var charArray = kotlin_kotlin.$_$.na;
  var concatToString = kotlin_kotlin.$_$.cd;
  var Char = kotlin_kotlin.$_$.lf;
  var isSurrogate = kotlin_kotlin.$_$.rd;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.l3;
  var numberToChar = kotlin_kotlin.$_$.xb;
  var canRead = kotlin_io_ktor_ktor_io.$_$.x;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.k3;
  var plus = kotlin_kotlin.$_$.p7;
  var plus_0 = kotlin_kotlin.$_$.q7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g1;
  var toSet = kotlin_kotlin.$_$.j8;
  var setOf = kotlin_kotlin.$_$.w7;
  var plus_1 = kotlin_kotlin.$_$.o7;
  var listOf = kotlin_kotlin.$_$.k7;
  var last = kotlin_kotlin.$_$.i7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bb;
  var emptyList = kotlin_kotlin.$_$.p6;
  var equals = kotlin_kotlin.$_$.ua;
  var getStringHashCode = kotlin_kotlin.$_$.ya;
  var hashCode = kotlin_kotlin.$_$.za;
  var objectCreate = kotlin_kotlin.$_$.zb;
  var equals_0 = kotlin_kotlin.$_$.ld;
  var Collection = kotlin_kotlin.$_$.e5;
  var isInterface = kotlin_kotlin.$_$.pb;
  var isBlank = kotlin_kotlin.$_$.qd;
  var indexOf = kotlin_kotlin.$_$.pd;
  var THROW_CCE = kotlin_kotlin.$_$.ag;
  var isCharSequence = kotlin_kotlin.$_$.lb;
  var trim = kotlin_kotlin.$_$.ef;
  var take = kotlin_kotlin.$_$.le;
  var substring_0 = kotlin_kotlin.$_$.je;
  var contains = kotlin_kotlin.$_$.fd;
  var initMetadataForObject = kotlin_kotlin.$_$.gb;
  var startsWith = kotlin_kotlin.$_$.fe;
  var plus_2 = kotlin_kotlin.$_$.r7;
  var forName = kotlin_io_ktor_ktor_io.$_$.s;
  var IllegalArgumentException = kotlin_kotlin.$_$.tf;
  var get_name = kotlin_io_ktor_ktor_io.$_$.t;
  var get_lastIndex = kotlin_kotlin.$_$.g7;
  var first = kotlin_kotlin.$_$.md;
  var last_0 = kotlin_kotlin.$_$.vd;
  var get_lastIndex_0 = kotlin_kotlin.$_$.td;
  var StringValuesBuilderImpl = kotlin_io_ktor_ktor_utils.$_$.t;
  var listOf_0 = kotlin_kotlin.$_$.j7;
  var emptySet = kotlin_kotlin.$_$.r6;
  var get = kotlin_io_ktor_ktor_utils.$_$.s;
  var forEach = kotlin_io_ktor_ktor_utils.$_$.r;
  var StringValues = kotlin_io_ktor_ktor_utils.$_$.w;
  var StringValuesImpl = kotlin_io_ktor_ktor_utils.$_$.u;
  var emptyMap = kotlin_kotlin.$_$.q6;
  var StringValuesSingleImpl = kotlin_io_ktor_ktor_utils.$_$.v;
  var toDoubleOrNull = kotlin_kotlin.$_$.oe;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.b1;
  var lazy = kotlin_kotlin.$_$.wg;
  var to = kotlin_kotlin.$_$.ch;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var asList = kotlin_kotlin.$_$.u5;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.g3;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.l2;
  var toLongOrNull = kotlin_kotlin.$_$.ue;
  var mapCapacity = kotlin_kotlin.$_$.l7;
  var coerceAtLeast = kotlin_kotlin.$_$.jc;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p1;
  var Comparable = kotlin_kotlin.$_$.mf;
  var addAll = kotlin_kotlin.$_$.s5;
  var joinTo = kotlin_kotlin.$_$.e7;
  var toString_1 = kotlin_kotlin.$_$.bh;
  var initMetadataForInterface = kotlin_kotlin.$_$.eb;
  var isWhitespace = kotlin_kotlin.$_$.sd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var startsWith_0 = kotlin_kotlin.$_$.ee;
  var charArrayOf = kotlin_kotlin.$_$.ma;
  var split = kotlin_kotlin.$_$.be;
  var toMutableList = kotlin_kotlin.$_$.i8;
  var first_0 = kotlin_kotlin.$_$.w6;
  var joinToString = kotlin_kotlin.$_$.c7;
  var toCharArray = kotlin_io_ktor_ktor_utils.$_$.b1;
  var indexOfAny = kotlin_kotlin.$_$.nd;
  var dropLast = kotlin_kotlin.$_$.n6;
  var IllegalStateException = kotlin_kotlin.$_$.uf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.r2;
  var indexOf_0 = kotlin_kotlin.$_$.od;
  var toInt = kotlin_kotlin.$_$.se;
  var toLowerCasePreservingASCIIRules = kotlin_io_ktor_ktor_utils.$_$.c1;
  var isLowerCase = kotlin_io_ktor_ktor_utils.$_$.z;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.x;
  var startsWith_1 = kotlin_kotlin.$_$.de;
  var lazy_0 = kotlin_kotlin.$_$.xg;
  var KProperty1 = kotlin_kotlin.$_$.yc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xa;
  var getKClassFromExpression = kotlin_kotlin.$_$.sc;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var fromInt = kotlin_kotlin.$_$.v9;
  var CoroutineImpl = kotlin_kotlin.$_$.h9;
  var initMetadataForLambda = kotlin_kotlin.$_$.fb;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.c1;
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
  initMetadataForClass(HeadersImpl, 'HeadersImpl', HeadersImpl, StringValuesImpl, [StringValues]);
  initMetadataForClass(HeadersSingleImpl, 'HeadersSingleImpl', VOID, StringValuesSingleImpl, [StringValues]);
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
  initMetadataForClass(ParametersImpl, 'ParametersImpl', ParametersImpl, StringValuesImpl, [Parameters]);
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
  initMetadataForLambda(PartData$FormItem$_init_$slambda_xpexm6, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(PartData$BinaryItem$_init_$slambda_l0n5zl, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(PartData$BinaryChannelItem$_init_$slambda_qcg1jy, CoroutineImpl, VOID, [0]);
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
    charset = charset === VOID ? Charsets_getInstance().u2b_1 : charset;
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
      sb.ac(_this__u8e3s4, start, prefixEnd);
    }
    var index = prefixEnd;
    var bytes = null;
    while (index < end) {
      var c = charSequenceGet(_this__u8e3s4, index);
      if (plusIsSpace && c === _Char___init__impl__6a9atx(43)) {
        sb.s(_Char___init__impl__6a9atx(32));
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
        sb.q(decodeToString(bytes, 0, 0 + count | 0));
      } else {
        sb.s(c);
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
    var content = encode(Charsets_getInstance().u2b_1.y2b(), _this__u8e3s4);
    forEach_0(content, encodeURLParameter$lambda(this_0, spaceToPlus));
    return this_0.toString();
  }
  function encodeURLQueryComponent(_this__u8e3s4, encodeFull, spaceToPlus, charset) {
    encodeFull = encodeFull === VOID ? false : encodeFull;
    spaceToPlus = spaceToPlus === VOID ? false : spaceToPlus;
    charset = charset === VOID ? Charsets_getInstance().u2b_1 : charset;
    _init_properties_Codecs_kt__fudxxf();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    var content = encode(charset.y2b(), _this__u8e3s4);
    forEach_0(content, encodeURLQueryComponent$lambda(spaceToPlus, this_0, encodeFull));
    return this_0.toString();
  }
  function decodeURLQueryComponent(_this__u8e3s4, start, end, plusIsSpace, charset) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? _this__u8e3s4.length : end;
    plusIsSpace = plusIsSpace === VOID ? false : plusIsSpace;
    charset = charset === VOID ? Charsets_getInstance().u2b_1 : charset;
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
    var charset = Charsets_getInstance().u2b_1;
    var index = 0;
    $l$loop_0: while (index < _this__u8e3s4.length) {
      var current = charCodeAt(_this__u8e3s4, index);
      if (!encodeSlash && current === _Char___init__impl__6a9atx(47) || get_URL_ALPHABET_CHARS().j2(new Char(current)) || get_VALID_PATH_PART().j2(new Char(current))) {
        this_0.s(current);
        index = index + 1 | 0;
        continue $l$loop_0;
      }
      if (!encodeEncoded && current === _Char___init__impl__6a9atx(37) && (index + 2 | 0) < _this__u8e3s4.length && get_HEX_ALPHABET().j2(new Char(charCodeAt(_this__u8e3s4, index + 1 | 0))) && get_HEX_ALPHABET().j2(new Char(charCodeAt(_this__u8e3s4, index + 2 | 0)))) {
        this_0.s(current);
        this_0.s(charCodeAt(_this__u8e3s4, index + 1 | 0));
        this_0.s(charCodeAt(_this__u8e3s4, index + 2 | 0));
        index = index + 3 | 0;
        continue $l$loop_0;
      }
      var symbolSize = isSurrogate(current) ? 2 : 1;
      var tmp = encode(charset.y2b(), _this__u8e3s4, index, index + symbolSize | 0);
      forEach_0(tmp, encodeURLPath$lambda(this_0));
      index = index + symbolSize | 0;
    }
    return this_0.toString();
  }
  function encodeURLParameter$lambda($$this$buildString, $spaceToPlus) {
    return function (it) {
      if (get_URL_ALPHABET().j2(it) || get_SPECIAL_SYMBOLS().j2(it))
        $$this$buildString.s(numberToChar(it));
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
          $$this$buildString.s(_Char___init__impl__6a9atx(43));
        else {
          $$this$buildString.q(percentEncode(it));
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
          $$this$buildString.s(_Char___init__impl__6a9atx(43));
        else
          $$this$buildString.q('%20');
      else {
        if (get_URL_ALPHABET().j2(it) || (!$encodeFull && get_URL_PROTOCOL_PART().j2(it)))
          $$this$buildString.s(numberToChar(it));
        else {
          $$this$buildString.q(percentEncode(it));
        }
      }
      return Unit_instance;
    };
  }
  function forEach$lambda($block) {
    return function (buffer) {
      while (canRead(buffer)) {
        $block(buffer.b1b());
      }
      return true;
    };
  }
  function encodeURLPath$lambda($$this$buildString) {
    return function (it) {
      $$this$buildString.q(percentEncode(it));
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
      var _iterator__ex2g4s = this_0.t();
      while (_iterator__ex2g4s.u()) {
        var item = _iterator__ex2g4s.v();
        // Inline function 'kotlin.code' call
        var this_1 = item.w1_1;
        var tmp$ret$3 = Char__toInt_impl_vasixd(this_1);
        var tmp$ret$2 = toByte(tmp$ret$3);
        destination.b1(tmp$ret$2);
      }
      URL_ALPHABET = toSet(destination);
      URL_ALPHABET_CHARS = toSet(plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57))));
      HEX_ALPHABET = toSet(plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(102)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(70))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57))));
      // Inline function 'kotlin.collections.map' call
      var this_2 = setOf([new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(47)), new Char(_Char___init__impl__6a9atx(63)), new Char(_Char___init__impl__6a9atx(35)), new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(43))]);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
      var _iterator__ex2g4s_0 = this_2.t();
      while (_iterator__ex2g4s_0.u()) {
        var item_0 = _iterator__ex2g4s_0.v();
        // Inline function 'kotlin.code' call
        var this_3 = item_0.w1_1;
        var tmp$ret$3_0 = Char__toInt_impl_vasixd(this_3);
        var tmp$ret$2_0 = toByte(tmp$ret$3_0);
        destination_0.b1(tmp$ret$2_0);
      }
      URL_PROTOCOL_PART = destination_0;
      VALID_PATH_PART = setOf([new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126))]);
      ATTRIBUTE_CHARACTERS = plus_1(get_URL_ALPHABET_CHARS(), setOf([new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(35)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(94)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(96)), new Char(_Char___init__impl__6a9atx(124)), new Char(_Char___init__impl__6a9atx(126))]));
      // Inline function 'kotlin.collections.map' call
      var this_4 = listOf([new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126))]);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_4, 10));
      var _iterator__ex2g4s_1 = this_4.t();
      while (_iterator__ex2g4s_1.u()) {
        var item_1 = _iterator__ex2g4s_1.v();
        // Inline function 'kotlin.code' call
        var this_5 = item_1.w1_1;
        var tmp$ret$3_1 = Char__toInt_impl_vasixd(this_5);
        var tmp$ret$2_1 = toByte(tmp$ret$3_1);
        destination_1.b1(tmp$ret$2_1);
      }
      SPECIAL_SYMBOLS = destination_1;
    }
  }
  function Companion() {
    Companion_instance = this;
    this.e2k_1 = new ContentDisposition('file');
    this.f2k_1 = new ContentDisposition('mixed');
    this.g2k_1 = new ContentDisposition('attachment');
    this.h2k_1 = new ContentDisposition('inline');
  }
  protoOf(Companion).kn = function (value) {
    // Inline function 'io.ktor.http.Companion.parse' call
    var headerValue = last(parseHeaderValue(value));
    var tmp0 = headerValue.i2k_1;
    var p = headerValue.j2k_1;
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
  protoOf(ContentDisposition).n2k = function () {
    return this.o2k_1;
  };
  protoOf(ContentDisposition).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ContentDisposition) {
      tmp_0 = this.n2k() === other.n2k();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.p2k_1, other.p2k_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ContentDisposition).hashCode = function () {
    return imul(getStringHashCode(this.n2k()), 31) + hashCode(this.p2k_1) | 0;
  };
  var textSubTypes;
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
    switch ($this.p2k_1.e1()) {
      case 0:
        tmp = false;
        break;
      case 1:
        // Inline function 'kotlin.let' call

        var it = $this.p2k_1.d1(0);
        tmp = (equals_0(it.r2k_1, name, true) && equals_0(it.s2k_1, value, true));
        break;
      default:
        var tmp0 = $this.p2k_1;
        var tmp$ret$2;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var tmp_0;
          if (isInterface(tmp0, Collection)) {
            tmp_0 = tmp0.r();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = false;
            break $l$block_0;
          }
          var _iterator__ex2g4s = tmp0.t();
          while (_iterator__ex2g4s.u()) {
            var element = _iterator__ex2g4s.v();
            if (equals_0(element.r2k_1, name, true) && equals_0(element.s2k_1, value, true)) {
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
    this.u2k_1 = ContentType_init_$Create$('*', '*');
  }
  protoOf(Companion_0).kn = function (value) {
    if (isBlank(value))
      return this.u2k_1;
    // Inline function 'io.ktor.http.Companion.parse' call
    var headerValue = last(parseHeaderValue(value));
    var tmp0 = headerValue.i2k_1;
    var parameters = headerValue.j2k_1;
    var slash = indexOf(tmp0, _Char___init__impl__6a9atx(47));
    if (slash === -1) {
      // Inline function 'kotlin.text.trim' call
      if (toString(trim(isCharSequence(tmp0) ? tmp0 : THROW_CCE())) === '*')
        return Companion_getInstance_0().u2k_1;
      throw new BadContentTypeFormatException(value);
    }
    // Inline function 'kotlin.text.trim' call
    var this_0 = take(tmp0, slash);
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
    this.v2k_1 = 'application';
    this.w2k_1 = ContentType_init_$Create$('application', '*');
    this.x2k_1 = ContentType_init_$Create$('application', 'atom+xml');
    this.y2k_1 = ContentType_init_$Create$('application', 'cbor');
    this.z2k_1 = ContentType_init_$Create$('application', 'json');
    this.a2l_1 = ContentType_init_$Create$('application', 'hal+json');
    this.b2l_1 = ContentType_init_$Create$('application', 'javascript');
    this.c2l_1 = ContentType_init_$Create$('application', 'octet-stream');
    this.d2l_1 = ContentType_init_$Create$('application', 'rss+xml');
    this.e2l_1 = ContentType_init_$Create$('application', 'soap+xml');
    this.f2l_1 = ContentType_init_$Create$('application', 'xml');
    this.g2l_1 = ContentType_init_$Create$('application', 'xml-dtd');
    this.h2l_1 = ContentType_init_$Create$('application', 'yaml');
    this.i2l_1 = ContentType_init_$Create$('application', 'zip');
    this.j2l_1 = ContentType_init_$Create$('application', 'gzip');
    this.k2l_1 = ContentType_init_$Create$('application', 'x-www-form-urlencoded');
    this.l2l_1 = ContentType_init_$Create$('application', 'pdf');
    this.m2l_1 = ContentType_init_$Create$('application', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    this.n2l_1 = ContentType_init_$Create$('application', 'vnd.openxmlformats-officedocument.wordprocessingml.document');
    this.o2l_1 = ContentType_init_$Create$('application', 'vnd.openxmlformats-officedocument.presentationml.presentation');
    this.p2l_1 = ContentType_init_$Create$('application', 'protobuf');
    this.q2l_1 = ContentType_init_$Create$('application', 'wasm');
    this.r2l_1 = ContentType_init_$Create$('application', 'problem+json');
    this.s2l_1 = ContentType_init_$Create$('application', 'problem+xml');
  }
  var Application_instance;
  function Application_getInstance() {
    if (Application_instance == null)
      new Application();
    return Application_instance;
  }
  function Image() {
    Image_instance = this;
    this.t2l_1 = 'image';
    this.u2l_1 = ContentType_init_$Create$('image', '*');
    this.v2l_1 = ContentType_init_$Create$('image', 'apng');
    this.w2l_1 = ContentType_init_$Create$('image', 'avif');
    this.x2l_1 = ContentType_init_$Create$('image', 'bmp');
    this.y2l_1 = ContentType_init_$Create$('image', 'gif');
    this.z2l_1 = ContentType_init_$Create$('image', 'heic');
    this.a2m_1 = ContentType_init_$Create$('image', 'heif');
    this.b2m_1 = ContentType_init_$Create$('image', 'jpeg');
    this.c2m_1 = ContentType_init_$Create$('image', 'jxl');
    this.d2m_1 = ContentType_init_$Create$('image', 'png');
    this.e2m_1 = ContentType_init_$Create$('image', 'svg+xml');
    this.f2m_1 = ContentType_init_$Create$('image', 'tiff');
    this.g2m_1 = ContentType_init_$Create$('image', 'webp');
    this.h2m_1 = ContentType_init_$Create$('image', 'x-icon');
  }
  var Image_instance;
  function Image_getInstance() {
    if (Image_instance == null)
      new Image();
    return Image_instance;
  }
  function MultiPart() {
    MultiPart_instance = this;
    this.i2m_1 = 'multipart';
    this.j2m_1 = ContentType_init_$Create$('multipart', '*');
    this.k2m_1 = ContentType_init_$Create$('multipart', 'mixed');
    this.l2m_1 = ContentType_init_$Create$('multipart', 'alternative');
    this.m2m_1 = ContentType_init_$Create$('multipart', 'related');
    this.n2m_1 = ContentType_init_$Create$('multipart', 'form-data');
    this.o2m_1 = ContentType_init_$Create$('multipart', 'signed');
    this.p2m_1 = ContentType_init_$Create$('multipart', 'encrypted');
    this.q2m_1 = ContentType_init_$Create$('multipart', 'byteranges');
  }
  protoOf(MultiPart).r2m = function (contentType) {
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
    this.s2m_1 = 'text';
    this.t2m_1 = ContentType_init_$Create$('text', '*');
    this.u2m_1 = ContentType_init_$Create$('text', 'plain');
    this.v2m_1 = ContentType_init_$Create$('text', 'css');
    this.w2m_1 = ContentType_init_$Create$('text', 'csv');
    this.x2m_1 = ContentType_init_$Create$('text', 'html');
    this.y2m_1 = ContentType_init_$Create$('text', 'javascript');
    this.z2m_1 = ContentType_init_$Create$('text', 'vcard');
    this.a2n_1 = ContentType_init_$Create$('text', 'xml');
    this.b2n_1 = ContentType_init_$Create$('text', 'event-stream');
  }
  var Text_instance;
  function Text_getInstance() {
    if (Text_instance == null)
      new Text();
    return Text_instance;
  }
  function Video() {
    Video_instance = this;
    this.c2n_1 = 'video';
    this.d2n_1 = ContentType_init_$Create$('video', '*');
    this.e2n_1 = ContentType_init_$Create$('video', 'mpeg');
    this.f2n_1 = ContentType_init_$Create$('video', 'mp4');
    this.g2n_1 = ContentType_init_$Create$('video', 'ogg');
    this.h2n_1 = ContentType_init_$Create$('video', 'quicktime');
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
    this.k2n_1 = contentType;
    this.l2n_1 = contentSubtype;
  }
  protoOf(ContentType).m2n = function (name, value) {
    if (hasParameter(this, name, value))
      return this;
    return new ContentType(this.k2n_1, this.l2n_1, this.o2k_1, plus_2(this.p2k_1, HeaderValueParam_init_$Create$(name, value)));
  };
  protoOf(ContentType).n2n = function (pattern) {
    if (!(pattern.k2n_1 === '*') && !equals_0(pattern.k2n_1, this.k2n_1, true)) {
      return false;
    }
    if (!(pattern.l2n_1 === '*') && !equals_0(pattern.l2n_1, this.l2n_1, true)) {
      return false;
    }
    var _iterator__ex2g4s = pattern.p2k_1.t();
    while (_iterator__ex2g4s.u()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.v();
      var patternName = _destruct__k2r9zo.uf();
      var patternValue = _destruct__k2r9zo.vf();
      var tmp;
      if (patternName === '*') {
        var tmp_0;
        if (patternValue === '*') {
          tmp_0 = true;
        } else {
          var tmp0 = this.p2k_1;
          var tmp$ret$0;
          $l$block_0: {
            // Inline function 'kotlin.collections.any' call
            var tmp_1;
            if (isInterface(tmp0, Collection)) {
              tmp_1 = tmp0.r();
            } else {
              tmp_1 = false;
            }
            if (tmp_1) {
              tmp$ret$0 = false;
              break $l$block_0;
            }
            var _iterator__ex2g4s_0 = tmp0.t();
            while (_iterator__ex2g4s_0.u()) {
              var element = _iterator__ex2g4s_0.v();
              if (equals_0(element.s2k_1, patternValue, true)) {
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
        var value = this.q2k(patternName);
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
      tmp_1 = equals_0(this.k2n_1, other.k2n_1, true);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals_0(this.l2n_1, other.l2n_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.p2k_1, other.p2k_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ContentType).hashCode = function () {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = this.k2n_1.toLowerCase();
    var result = getStringHashCode(tmp$ret$0);
    var tmp = result;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = this.l2n_1.toLowerCase();
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$2) | 0) | 0;
    result = result + imul(31, hashCode(this.p2k_1)) | 0;
    return result;
  };
  function charset(_this__u8e3s4) {
    _init_properties_ContentTypes_kt__i9dj34();
    var tmp0_safe_receiver = _this__u8e3s4.q2k('charset');
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
          var _unused_var__etf5q3 = $p;
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
    _init_properties_ContentTypes_kt__i9dj34();
    return _this__u8e3s4.m2n('charset', get_name(charset));
  }
  function BadContentTypeFormatException(value) {
    Exception_init_$Init$('Bad Content-Type format: ' + value, this);
    captureStack(this, BadContentTypeFormatException);
  }
  var properties_initialized_ContentTypes_kt_1k2nnm;
  function _init_properties_ContentTypes_kt__i9dj34() {
    if (!properties_initialized_ContentTypes_kt_1k2nnm) {
      properties_initialized_ContentTypes_kt_1k2nnm = true;
      textSubTypes = setOf(['json', 'ld+json', 'xml', 'xhtml+xml', 'rss+xml', 'atom+xml', 'x-www-form-urlencoded', 'svg+xml']);
    }
  }
  function get_HeaderFieldValueSeparators() {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    return HeaderFieldValueSeparators;
  }
  var HeaderFieldValueSeparators;
  function append(_this__u8e3s4, name, value) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    _this__u8e3s4.n2f(name, value.toString());
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function HeaderValueWithParameters(content, parameters) {
    parameters = parameters === VOID ? emptyList() : parameters;
    this.o2k_1 = content;
    this.p2k_1 = parameters;
  }
  protoOf(HeaderValueWithParameters).q2k = function (name) {
    var inductionVariable = 0;
    var last = get_lastIndex(this.p2k_1);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parameter = this.p2k_1.d1(index);
        if (equals_0(parameter.r2k_1, name, true)) {
          return parameter.s2k_1;
        }
      }
       while (!(index === last));
    return null;
  };
  protoOf(HeaderValueWithParameters).toString = function () {
    var tmp;
    if (this.p2k_1.r()) {
      tmp = this.o2k_1;
    } else {
      var tmp_0 = this.o2k_1.length;
      // Inline function 'kotlin.collections.sumOf' call
      var sum = 0;
      var _iterator__ex2g4s = this.p2k_1.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var tmp_1 = sum;
        sum = tmp_1 + ((element.r2k_1.length + element.s2k_1.length | 0) + 3 | 0) | 0;
      }
      var size = tmp_0 + sum | 0;
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$(size);
      this_0.q(this.o2k_1);
      var inductionVariable = 0;
      var last = get_lastIndex(this.p2k_1);
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element_0 = this.p2k_1.d1(index);
          this_0.q('; ');
          this_0.q(element_0.r2k_1);
          this_0.q('=');
          // Inline function 'io.ktor.http.escapeIfNeededTo' call
          var this_1 = element_0.s2k_1;
          if (needQuotes(this_1))
            this_0.q(quote(this_1));
          else
            this_0.q(this_1);
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
      if (get_HeaderFieldValueSeparators().j2(new Char(element)))
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
    out.q('"');
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = charCodeAt(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var ch = element;
      if (ch === _Char___init__impl__6a9atx(92))
        out.q('\\\\');
      else if (ch === _Char___init__impl__6a9atx(10))
        out.q('\\n');
      else if (ch === _Char___init__impl__6a9atx(13))
        out.q('\\r');
      else if (ch === _Char___init__impl__6a9atx(9))
        out.q('\\t');
      else if (ch === _Char___init__impl__6a9atx(34))
        out.q('\\"');
      else
        out.s(ch);
    }
    out.q('"');
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
    this.o2n_1 = EmptyHeaders_instance;
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
  protoOf(HeadersBuilder).r2n = function () {
    return new HeadersImpl(this.j2f_1);
  };
  protoOf(HeadersBuilder).k2f = function (name) {
    protoOf(StringValuesBuilderImpl).k2f.call(this, name);
    HttpHeaders_getInstance().r2r(name);
  };
  protoOf(HeadersBuilder).m2f = function (value) {
    protoOf(StringValuesBuilderImpl).m2f.call(this, value);
    HttpHeaders_getInstance().s2r(value);
  };
  function headersOf(name, value) {
    return new HeadersSingleImpl(name, listOf_0(value));
  }
  function EmptyHeaders() {
  }
  protoOf(EmptyHeaders).e2f = function () {
    return true;
  };
  protoOf(EmptyHeaders).f2f = function (name) {
    return null;
  };
  protoOf(EmptyHeaders).g2f = function () {
    return emptySet();
  };
  protoOf(EmptyHeaders).c2f = function () {
    return emptySet();
  };
  protoOf(EmptyHeaders).r = function () {
    return true;
  };
  protoOf(EmptyHeaders).toString = function () {
    return 'Headers ' + toString(this.c2f());
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
    return 'Headers ' + toString(this.c2f());
  };
  function HeadersSingleImpl(name, values) {
    StringValuesSingleImpl.call(this, true, name, values);
  }
  protoOf(HeadersSingleImpl).toString = function () {
    return 'Headers ' + toString(this.c2f());
  };
  function HeaderValueParam_init_$Init$(name, value, $this) {
    HeaderValueParam.call($this, name, value, false);
    return $this;
  }
  function HeaderValueParam_init_$Create$(name, value) {
    return HeaderValueParam_init_$Init$(name, value, objectCreate(protoOf(HeaderValueParam)));
  }
  function HeaderValueParam(name, value, escapeValue) {
    this.r2k_1 = name;
    this.s2k_1 = value;
    this.t2k_1 = escapeValue;
  }
  protoOf(HeaderValueParam).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof HeaderValueParam) {
      tmp_0 = equals_0(other.r2k_1, this.r2k_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals_0(other.s2k_1, this.s2k_1, true);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HeaderValueParam).hashCode = function () {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = this.r2k_1.toLowerCase();
    var result = getStringHashCode(tmp$ret$0);
    var tmp = result;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = this.s2k_1.toLowerCase();
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$2) | 0) | 0;
    return result;
  };
  protoOf(HeaderValueParam).uf = function () {
    return this.r2k_1;
  };
  protoOf(HeaderValueParam).vf = function () {
    return this.s2k_1;
  };
  protoOf(HeaderValueParam).toString = function () {
    return 'HeaderValueParam(name=' + this.r2k_1 + ', value=' + this.s2k_1 + ', escapeValue=' + this.t2k_1 + ')';
  };
  function HeaderValue(value, params) {
    params = params === VOID ? emptyList() : params;
    this.i2k_1 = value;
    this.j2k_1 = params;
    var tmp = this;
    var tmp0 = this.j2k_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (element.r2k_1 === 'q') {
          tmp$ret$0 = element;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    var tmp0_safe_receiver = tmp$ret$0;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s2k_1;
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
    tmp.k2k_1 = tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs;
  }
  protoOf(HeaderValue).toString = function () {
    return 'HeaderValue(value=' + this.i2k_1 + ', params=' + toString(this.j2k_1) + ')';
  };
  protoOf(HeaderValue).hashCode = function () {
    var result = getStringHashCode(this.i2k_1);
    result = imul(result, 31) + hashCode(this.j2k_1) | 0;
    return result;
  };
  protoOf(HeaderValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HeaderValue))
      return false;
    if (!(this.i2k_1 === other.i2k_1))
      return false;
    if (!equals(this.j2k_1, other.j2k_1))
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
        var tmp_0 = items.n1();
        var tmp1_elvis_lhs = valueEnd;
        tmp_0.b1(new HeaderValue(subtrim(text, start, tmp1_elvis_lhs == null ? position : tmp1_elvis_lhs), valueOrEmpty(parameters)));
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
    var tmp_2 = items.n1();
    var tmp2_elvis_lhs = valueEnd;
    tmp_2.b1(new HeaderValue(subtrim(text, start, tmp2_elvis_lhs == null ? position : tmp2_elvis_lhs), valueOrEmpty(parameters)));
    return position;
  }
  function valueOrEmpty(_this__u8e3s4) {
    return _this__u8e3s4.fn() ? _this__u8e3s4.n1() : emptyList();
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
        var paramEnd = _destruct__k2r9zo.uf();
        var paramValue = _destruct__k2r9zo.vf();
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
        builder.s(charCodeAt(value, position + 1 | 0));
        position = position + 2 | 0;
        continue loop;
      }
      builder.s(currentChar);
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
  function parseHeaderValue$lambda() {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  }
  function parseHeaderValueItem$lambda() {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  }
  function parseHeaderValueParameter$addParam($parameters, text, start, end, value) {
    var name = subtrim(text, start, end);
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(name) === 0) {
      return Unit_instance;
    }
    $parameters.n1().b1(HeaderValueParam_init_$Create$(name, value));
  }
  function HttpHeaders() {
    HttpHeaders_instance = this;
    this.s2n_1 = 'Accept';
    this.t2n_1 = 'Accept-Charset';
    this.u2n_1 = 'Accept-Encoding';
    this.v2n_1 = 'Accept-Language';
    this.w2n_1 = 'Accept-Ranges';
    this.x2n_1 = 'Age';
    this.y2n_1 = 'Allow';
    this.z2n_1 = 'ALPN';
    this.a2o_1 = 'Authentication-Info';
    this.b2o_1 = 'Authorization';
    this.c2o_1 = 'Cache-Control';
    this.d2o_1 = 'Connection';
    this.e2o_1 = 'Content-Disposition';
    this.f2o_1 = 'Content-Encoding';
    this.g2o_1 = 'Content-Language';
    this.h2o_1 = 'Content-Length';
    this.i2o_1 = 'Content-Location';
    this.j2o_1 = 'Content-Range';
    this.k2o_1 = 'Content-Type';
    this.l2o_1 = 'Cookie';
    this.m2o_1 = 'DASL';
    this.n2o_1 = 'Date';
    this.o2o_1 = 'DAV';
    this.p2o_1 = 'Depth';
    this.q2o_1 = 'Destination';
    this.r2o_1 = 'ETag';
    this.s2o_1 = 'Expect';
    this.t2o_1 = 'Expires';
    this.u2o_1 = 'From';
    this.v2o_1 = 'Forwarded';
    this.w2o_1 = 'Host';
    this.x2o_1 = 'HTTP2-Settings';
    this.y2o_1 = 'If';
    this.z2o_1 = 'If-Match';
    this.a2p_1 = 'If-Modified-Since';
    this.b2p_1 = 'If-None-Match';
    this.c2p_1 = 'If-Range';
    this.d2p_1 = 'If-Schedule-Tag-Match';
    this.e2p_1 = 'If-Unmodified-Since';
    this.f2p_1 = 'Last-Modified';
    this.g2p_1 = 'Location';
    this.h2p_1 = 'Lock-Token';
    this.i2p_1 = 'Link';
    this.j2p_1 = 'Max-Forwards';
    this.k2p_1 = 'MIME-Version';
    this.l2p_1 = 'Ordering-Type';
    this.m2p_1 = 'Origin';
    this.n2p_1 = 'Overwrite';
    this.o2p_1 = 'Position';
    this.p2p_1 = 'Pragma';
    this.q2p_1 = 'Prefer';
    this.r2p_1 = 'Preference-Applied';
    this.s2p_1 = 'Proxy-Authenticate';
    this.t2p_1 = 'Proxy-Authentication-Info';
    this.u2p_1 = 'Proxy-Authorization';
    this.v2p_1 = 'Public-Key-Pins';
    this.w2p_1 = 'Public-Key-Pins-Report-Only';
    this.x2p_1 = 'Range';
    this.y2p_1 = 'Referer';
    this.z2p_1 = 'Retry-After';
    this.a2q_1 = 'Schedule-Reply';
    this.b2q_1 = 'Schedule-Tag';
    this.c2q_1 = 'Sec-WebSocket-Accept';
    this.d2q_1 = 'Sec-WebSocket-Extensions';
    this.e2q_1 = 'Sec-WebSocket-Key';
    this.f2q_1 = 'Sec-WebSocket-Protocol';
    this.g2q_1 = 'Sec-WebSocket-Version';
    this.h2q_1 = 'Server';
    this.i2q_1 = 'Set-Cookie';
    this.j2q_1 = 'SLUG';
    this.k2q_1 = 'Strict-Transport-Security';
    this.l2q_1 = 'TE';
    this.m2q_1 = 'Timeout';
    this.n2q_1 = 'Trailer';
    this.o2q_1 = 'Transfer-Encoding';
    this.p2q_1 = 'Upgrade';
    this.q2q_1 = 'User-Agent';
    this.r2q_1 = 'Vary';
    this.s2q_1 = 'Via';
    this.t2q_1 = 'Warning';
    this.u2q_1 = 'WWW-Authenticate';
    this.v2q_1 = 'Access-Control-Allow-Origin';
    this.w2q_1 = 'Access-Control-Allow-Methods';
    this.x2q_1 = 'Access-Control-Allow-Credentials';
    this.y2q_1 = 'Access-Control-Allow-Headers';
    this.z2q_1 = 'Access-Control-Request-Method';
    this.a2r_1 = 'Access-Control-Request-Headers';
    this.b2r_1 = 'Access-Control-Expose-Headers';
    this.c2r_1 = 'Access-Control-Max-Age';
    this.d2r_1 = 'X-Http-Method-Override';
    this.e2r_1 = 'X-Forwarded-Host';
    this.f2r_1 = 'X-Forwarded-Server';
    this.g2r_1 = 'X-Forwarded-Proto';
    this.h2r_1 = 'X-Forwarded-For';
    this.i2r_1 = 'X-Forwarded-Port';
    this.j2r_1 = 'X-Request-ID';
    this.k2r_1 = 'X-Correlation-ID';
    this.l2r_1 = 'X-Total-Count';
    this.m2r_1 = 'Last-Event-ID';
    this.n2r_1 = 'TDM-Reservation';
    this.o2r_1 = 'TDM-Policy';
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.p2r_1 = ['Transfer-Encoding', 'Upgrade'];
    this.q2r_1 = asList(this.p2r_1);
  }
  protoOf(HttpHeaders).r2r = function (name) {
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
  protoOf(HttpHeaders).s2r = function (value) {
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
    this.t2r_1 = headerName;
    this.u2r_1 = position;
  }
  function IllegalHeaderValueException(headerValue, position) {
    var tmp = "Header value '" + headerValue + "' contains illegal character '" + toString_0(charCodeAt(headerValue, position)) + "'";
    // Inline function 'kotlin.code' call
    var this_0 = charCodeAt(headerValue, position);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    IllegalArgumentException_init_$Init$(tmp + (' (code ' + (tmp$ret$0 & 255) + ')'), this);
    captureStack(this, IllegalHeaderValueException);
    this.v2r_1 = headerValue;
    this.w2r_1 = position;
  }
  function contentLength(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.x2r().p2e('Content-Length');
    return tmp0_safe_receiver == null ? null : toLongOrNull(tmp0_safe_receiver);
  }
  function charset_0(_this__u8e3s4) {
    var tmp0_safe_receiver = contentType_1(_this__u8e3s4);
    return tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
  }
  function contentType(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.x2r().p2e('Content-Type');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = Companion_getInstance_0().kn(tmp0_safe_receiver);
    }
    return tmp;
  }
  function contentType_0(_this__u8e3s4, type) {
    return _this__u8e3s4.x2r().l2f('Content-Type', type.toString());
  }
  function contentType_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.x2r().p2e('Content-Type');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = Companion_getInstance_0().kn(tmp0_safe_receiver);
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
    this.y2r_1 = new HttpMethod('GET');
    this.z2r_1 = new HttpMethod('POST');
    this.a2s_1 = new HttpMethod('PUT');
    this.b2s_1 = new HttpMethod('PATCH');
    this.c2s_1 = new HttpMethod('DELETE');
    this.d2s_1 = new HttpMethod('HEAD');
    this.e2s_1 = new HttpMethod('OPTIONS');
    this.f2s_1 = new HttpMethod('TRACE');
    this.g2s_1 = new HttpMethod('QUERY');
    this.h2s_1 = listOf([this.y2r_1, this.z2r_1, this.a2s_1, this.b2s_1, this.c2s_1, this.d2s_1, this.e2s_1]);
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function HttpMethod(value) {
    Companion_getInstance_3();
    this.i2s_1 = value;
  }
  protoOf(HttpMethod).toString = function () {
    return this.i2s_1;
  };
  protoOf(HttpMethod).hashCode = function () {
    return getStringHashCode(this.i2s_1);
  };
  protoOf(HttpMethod).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpMethod))
      return false;
    if (!(this.i2s_1 === other.i2s_1))
      return false;
    return true;
  };
  function get_supportsRequestBody(_this__u8e3s4) {
    _init_properties_HttpMethod_kt__cbus5z();
    return !get_REQUESTS_WITHOUT_BODY().j2(_this__u8e3s4);
  }
  var properties_initialized_HttpMethod_kt_ogor3f;
  function _init_properties_HttpMethod_kt__cbus5z() {
    if (!properties_initialized_HttpMethod_kt_ogor3f) {
      properties_initialized_HttpMethod_kt_ogor3f = true;
      REQUESTS_WITHOUT_BODY = setOf([Companion_getInstance_3().y2r_1, Companion_getInstance_3().d2s_1, Companion_getInstance_3().e2s_1, Companion_getInstance_3().f2s_1]);
    }
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.j2s_1 = new HttpProtocolVersion('HTTP', 3, 0);
    this.k2s_1 = new HttpProtocolVersion('HTTP', 2, 0);
    this.l2s_1 = new HttpProtocolVersion('HTTP', 1, 1);
    this.m2s_1 = new HttpProtocolVersion('HTTP', 1, 0);
    this.n2s_1 = new HttpProtocolVersion('SPDY', 3, 0);
    this.o2s_1 = new HttpProtocolVersion('QUIC', 1, 0);
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function HttpProtocolVersion(name, major, minor) {
    Companion_getInstance_4();
    this.p2s_1 = name;
    this.q2s_1 = major;
    this.r2s_1 = minor;
  }
  protoOf(HttpProtocolVersion).toString = function () {
    return this.p2s_1 + '/' + this.q2s_1 + '.' + this.r2s_1;
  };
  protoOf(HttpProtocolVersion).hashCode = function () {
    var result = getStringHashCode(this.p2s_1);
    result = imul(result, 31) + this.q2s_1 | 0;
    result = imul(result, 31) + this.r2s_1 | 0;
    return result;
  };
  protoOf(HttpProtocolVersion).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpProtocolVersion))
      return false;
    if (!(this.p2s_1 === other.p2s_1))
      return false;
    if (!(this.q2s_1 === other.q2s_1))
      return false;
    if (!(this.r2s_1 === other.r2s_1))
      return false;
    return true;
  };
  function Companion_5() {
    Companion_instance_5 = this;
    this.s2s_1 = new HttpStatusCode(100, 'Continue');
    this.t2s_1 = new HttpStatusCode(101, 'Switching Protocols');
    this.u2s_1 = new HttpStatusCode(102, 'Processing');
    this.v2s_1 = new HttpStatusCode(200, 'OK');
    this.w2s_1 = new HttpStatusCode(201, 'Created');
    this.x2s_1 = new HttpStatusCode(202, 'Accepted');
    this.y2s_1 = new HttpStatusCode(203, 'Non-Authoritative Information');
    this.z2s_1 = new HttpStatusCode(204, 'No Content');
    this.a2t_1 = new HttpStatusCode(205, 'Reset Content');
    this.b2t_1 = new HttpStatusCode(206, 'Partial Content');
    this.c2t_1 = new HttpStatusCode(207, 'Multi-Status');
    this.d2t_1 = new HttpStatusCode(300, 'Multiple Choices');
    this.e2t_1 = new HttpStatusCode(301, 'Moved Permanently');
    this.f2t_1 = new HttpStatusCode(302, 'Found');
    this.g2t_1 = new HttpStatusCode(303, 'See Other');
    this.h2t_1 = new HttpStatusCode(304, 'Not Modified');
    this.i2t_1 = new HttpStatusCode(305, 'Use Proxy');
    this.j2t_1 = new HttpStatusCode(306, 'Switch Proxy');
    this.k2t_1 = new HttpStatusCode(307, 'Temporary Redirect');
    this.l2t_1 = new HttpStatusCode(308, 'Permanent Redirect');
    this.m2t_1 = new HttpStatusCode(400, 'Bad Request');
    this.n2t_1 = new HttpStatusCode(401, 'Unauthorized');
    this.o2t_1 = new HttpStatusCode(402, 'Payment Required');
    this.p2t_1 = new HttpStatusCode(403, 'Forbidden');
    this.q2t_1 = new HttpStatusCode(404, 'Not Found');
    this.r2t_1 = new HttpStatusCode(405, 'Method Not Allowed');
    this.s2t_1 = new HttpStatusCode(406, 'Not Acceptable');
    this.t2t_1 = new HttpStatusCode(407, 'Proxy Authentication Required');
    this.u2t_1 = new HttpStatusCode(408, 'Request Timeout');
    this.v2t_1 = new HttpStatusCode(409, 'Conflict');
    this.w2t_1 = new HttpStatusCode(410, 'Gone');
    this.x2t_1 = new HttpStatusCode(411, 'Length Required');
    this.y2t_1 = new HttpStatusCode(412, 'Precondition Failed');
    this.z2t_1 = new HttpStatusCode(413, 'Payload Too Large');
    this.a2u_1 = new HttpStatusCode(414, 'Request-URI Too Long');
    this.b2u_1 = new HttpStatusCode(415, 'Unsupported Media Type');
    this.c2u_1 = new HttpStatusCode(416, 'Requested Range Not Satisfiable');
    this.d2u_1 = new HttpStatusCode(417, 'Expectation Failed');
    this.e2u_1 = new HttpStatusCode(422, 'Unprocessable Entity');
    this.f2u_1 = new HttpStatusCode(423, 'Locked');
    this.g2u_1 = new HttpStatusCode(424, 'Failed Dependency');
    this.h2u_1 = new HttpStatusCode(425, 'Too Early');
    this.i2u_1 = new HttpStatusCode(426, 'Upgrade Required');
    this.j2u_1 = new HttpStatusCode(429, 'Too Many Requests');
    this.k2u_1 = new HttpStatusCode(431, 'Request Header Fields Too Large');
    this.l2u_1 = new HttpStatusCode(500, 'Internal Server Error');
    this.m2u_1 = new HttpStatusCode(501, 'Not Implemented');
    this.n2u_1 = new HttpStatusCode(502, 'Bad Gateway');
    this.o2u_1 = new HttpStatusCode(503, 'Service Unavailable');
    this.p2u_1 = new HttpStatusCode(504, 'Gateway Timeout');
    this.q2u_1 = new HttpStatusCode(505, 'HTTP Version Not Supported');
    this.r2u_1 = new HttpStatusCode(506, 'Variant Also Negotiates');
    this.s2u_1 = new HttpStatusCode(507, 'Insufficient Storage');
    this.t2u_1 = allStatusCodes();
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = this.t2u_1;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var tmp$ret$2 = element.v2u_1;
      destination.v2(tmp$ret$2, element);
    }
    tmp.u2u_1 = destination;
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function HttpStatusCode(value, description) {
    Companion_getInstance_5();
    this.v2u_1 = value;
    this.w2u_1 = description;
  }
  protoOf(HttpStatusCode).toString = function () {
    return '' + this.v2u_1 + ' ' + this.w2u_1;
  };
  protoOf(HttpStatusCode).equals = function (other) {
    var tmp;
    if (other instanceof HttpStatusCode) {
      tmp = other.v2u_1 === this.v2u_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HttpStatusCode).hashCode = function () {
    return this.v2u_1;
  };
  protoOf(HttpStatusCode).x2u = function (other) {
    return this.v2u_1 - other.v2u_1 | 0;
  };
  protoOf(HttpStatusCode).d = function (other) {
    return this.x2u(other instanceof HttpStatusCode ? other : THROW_CCE());
  };
  function allStatusCodes() {
    return listOf([Companion_getInstance_5().s2s_1, Companion_getInstance_5().t2s_1, Companion_getInstance_5().u2s_1, Companion_getInstance_5().v2s_1, Companion_getInstance_5().w2s_1, Companion_getInstance_5().x2s_1, Companion_getInstance_5().y2s_1, Companion_getInstance_5().z2s_1, Companion_getInstance_5().a2t_1, Companion_getInstance_5().b2t_1, Companion_getInstance_5().c2t_1, Companion_getInstance_5().d2t_1, Companion_getInstance_5().e2t_1, Companion_getInstance_5().f2t_1, Companion_getInstance_5().g2t_1, Companion_getInstance_5().h2t_1, Companion_getInstance_5().i2t_1, Companion_getInstance_5().j2t_1, Companion_getInstance_5().k2t_1, Companion_getInstance_5().l2t_1, Companion_getInstance_5().m2t_1, Companion_getInstance_5().n2t_1, Companion_getInstance_5().o2t_1, Companion_getInstance_5().p2t_1, Companion_getInstance_5().q2t_1, Companion_getInstance_5().r2t_1, Companion_getInstance_5().s2t_1, Companion_getInstance_5().t2t_1, Companion_getInstance_5().u2t_1, Companion_getInstance_5().v2t_1, Companion_getInstance_5().w2t_1, Companion_getInstance_5().x2t_1, Companion_getInstance_5().y2t_1, Companion_getInstance_5().z2t_1, Companion_getInstance_5().a2u_1, Companion_getInstance_5().b2u_1, Companion_getInstance_5().c2u_1, Companion_getInstance_5().d2u_1, Companion_getInstance_5().e2u_1, Companion_getInstance_5().f2u_1, Companion_getInstance_5().g2u_1, Companion_getInstance_5().h2u_1, Companion_getInstance_5().i2u_1, Companion_getInstance_5().j2u_1, Companion_getInstance_5().k2u_1, Companion_getInstance_5().l2u_1, Companion_getInstance_5().m2u_1, Companion_getInstance_5().n2u_1, Companion_getInstance_5().o2u_1, Companion_getInstance_5().p2u_1, Companion_getInstance_5().q2u_1, Companion_getInstance_5().r2u_1, Companion_getInstance_5().s2u_1]);
  }
  function formUrlEncode(_this__u8e3s4) {
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = _this__u8e3s4.c2f();
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.map' call
      var this_0 = element.n1();
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s_0 = this_0.t();
      while (_iterator__ex2g4s_0.u()) {
        var item = _iterator__ex2g4s_0.v();
        var tmp$ret$5 = to(element.m1(), item);
        destination_0.b1(tmp$ret$5);
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
    var key = encodeURLParameter(it.sf_1, true);
    var tmp;
    if (it.tf_1 == null) {
      tmp = key;
    } else {
      var value = encodeURLParameterValue(toString_1(it.tf_1));
      tmp = key + '=' + value;
    }
    return tmp;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.y2u_1 = EmptyParameters_instance;
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
  protoOf(EmptyParameters).e2f = function () {
    return true;
  };
  protoOf(EmptyParameters).f2f = function (name) {
    return null;
  };
  protoOf(EmptyParameters).g2f = function () {
    return emptySet();
  };
  protoOf(EmptyParameters).c2f = function () {
    return emptySet();
  };
  protoOf(EmptyParameters).r = function () {
    return true;
  };
  protoOf(EmptyParameters).toString = function () {
    return 'Parameters ' + toString(this.c2f());
  };
  protoOf(EmptyParameters).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Parameters) : false) {
      tmp = other.r();
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
  protoOf(ParametersBuilderImpl).r2n = function () {
    return new ParametersImpl(this.j2f_1);
  };
  function ParametersImpl(values) {
    values = values === VOID ? emptyMap() : values;
    StringValuesImpl.call(this, true, values);
  }
  protoOf(ParametersImpl).toString = function () {
    return 'Parameters ' + toString(this.c2f());
  };
  function parseQueryString(query, startIndex, limit, decode) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    limit = limit === VOID ? 1000 : limit;
    decode = decode === VOID ? true : decode;
    var tmp;
    if (startIndex > get_lastIndex_0(query)) {
      tmp = Companion_getInstance_6().y2u_1;
    } else {
      // Inline function 'io.ktor.http.Companion.build' call
      Companion_getInstance_6();
      // Inline function 'kotlin.apply' call
      var this_0 = ParametersBuilder();
      parse(this_0, query, startIndex, limit, decode);
      tmp = this_0.r2n();
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
        _this__u8e3s4.d2f(name, emptyList());
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
      _this__u8e3s4.n2f(name_0, value);
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
    var this_0 = $this.b2v_1;
    if (charSequenceLength(this_0) > 0) {
      tmp = true;
    } else {
      tmp = $this.n2v().l2v_1 === 'file';
    }
    if (tmp)
      return Unit_instance;
    $this.b2v_1 = Companion_getInstance_7().h2w_1.o2v_1;
    if ($this.e2v_1 == null)
      $this.e2v_1 = Companion_getInstance_7().h2w_1.z2v_1;
    if ($this.d2v_1 === 0) {
      $this.j2w(Companion_getInstance_7().h2w_1.p2v_1);
    }
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.h2w_1 = Url(get_origin(this));
    this.i2w_1 = 256;
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
    parameters = parameters === VOID ? Companion_getInstance_6().y2u_1 : parameters;
    fragment = fragment === VOID ? '' : fragment;
    trailingQuery = trailingQuery === VOID ? false : trailingQuery;
    this.b2v_1 = host;
    this.c2v_1 = trailingQuery;
    this.d2v_1 = port;
    this.e2v_1 = protocol;
    var tmp = this;
    tmp.f2v_1 = user == null ? null : encodeURLParameter(user);
    var tmp_0 = this;
    tmp_0.g2v_1 = password == null ? null : encodeURLParameter(password);
    this.h2v_1 = encodeURLQueryComponent(fragment);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(pathSegments, 10));
    var _iterator__ex2g4s = pathSegments.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = encodeURLPathPart(item);
      destination.b1(tmp$ret$2);
    }
    tmp_1.i2v_1 = destination;
    this.j2v_1 = encodeParameters(parameters);
    this.k2v_1 = new UrlDecodedParametersBuilder(this.j2v_1);
  }
  protoOf(URLBuilder).j2w = function (value) {
    // Inline function 'kotlin.require' call
    if (!(0 <= value ? value <= 65535 : false)) {
      var message = 'Port must be between 0 and 65535, or 0 if not set. Provided: ' + value;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.d2v_1 = value;
  };
  protoOf(URLBuilder).k2w = function (value) {
    this.e2v_1 = value;
  };
  protoOf(URLBuilder).n2v = function () {
    var tmp0_elvis_lhs = this.e2v_1;
    return tmp0_elvis_lhs == null ? Companion_getInstance_8().l2w_1 : tmp0_elvis_lhs;
  };
  protoOf(URLBuilder).r2w = function (value) {
    var tmp = this;
    tmp.f2v_1 = value == null ? null : encodeURLParameter(value);
  };
  protoOf(URLBuilder).s2w = function () {
    var tmp0_safe_receiver = this.f2v_1;
    return tmp0_safe_receiver == null ? null : decodeURLPart(tmp0_safe_receiver);
  };
  protoOf(URLBuilder).t2w = function () {
    var tmp0_safe_receiver = this.g2v_1;
    return tmp0_safe_receiver == null ? null : decodeURLPart(tmp0_safe_receiver);
  };
  protoOf(URLBuilder).u2w = function () {
    return decodeURLQueryComponent(this.h2v_1);
  };
  protoOf(URLBuilder).v2w = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.i2v_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = decodeURLPart(item);
      destination.b1(tmp$ret$2);
    }
    return destination;
  };
  protoOf(URLBuilder).w2w = function (value) {
    this.j2v_1 = value;
    this.k2v_1 = new UrlDecodedParametersBuilder(value);
  };
  protoOf(URLBuilder).x2w = function () {
    applyOrigin(this);
    return appendTo(this, StringBuilder_init_$Create$(256)).toString();
  };
  protoOf(URLBuilder).toString = function () {
    return appendTo(this, StringBuilder_init_$Create$(256)).toString();
  };
  protoOf(URLBuilder).r2n = function () {
    applyOrigin(this);
    return new Url_0(this.e2v_1, this.b2v_1, this.d2v_1, this.v2w(), this.k2v_1.r2n(), this.u2w(), this.s2w(), this.t2w(), this.c2v_1, this.x2w());
  };
  function get_authority(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    this_0.q(get_encodedUserAndPassword(_this__u8e3s4));
    this_0.q(_this__u8e3s4.b2v_1);
    if (!(_this__u8e3s4.d2v_1 === 0) && !(_this__u8e3s4.d2v_1 === _this__u8e3s4.n2v().m2v_1)) {
      this_0.q(':');
      this_0.q(_this__u8e3s4.d2v_1.toString());
    }
    return this_0.toString();
  }
  function appendTo(_this__u8e3s4, out) {
    out.c1(_this__u8e3s4.n2v().l2v_1);
    switch (_this__u8e3s4.n2v().l2v_1) {
      case 'file':
        appendFile(out, _this__u8e3s4.b2v_1, get_encodedPath(_this__u8e3s4));
        return out;
      case 'mailto':
        appendMailto(out, get_encodedUserAndPassword(_this__u8e3s4), _this__u8e3s4.b2v_1);
        return out;
      case 'about':
        appendPayload(out, _this__u8e3s4.b2v_1);
        return out;
      case 'tel':
        appendPayload(out, _this__u8e3s4.b2v_1);
        return out;
      case 'data':
        appendPayload(out, _this__u8e3s4.b2v_1);
        return out;
    }
    out.c1('://');
    out.c1(get_authority(_this__u8e3s4));
    appendUrlFullPath(out, get_encodedPath(_this__u8e3s4), _this__u8e3s4.j2v_1, _this__u8e3s4.c2v_1);
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = _this__u8e3s4.h2v_1;
    if (charSequenceLength(this_0) > 0) {
      out.s(_Char___init__impl__6a9atx(35));
      out.c1(_this__u8e3s4.h2v_1);
    }
    return out;
  }
  function get_encodedUserAndPassword(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    appendUserAndPassword(this_0, _this__u8e3s4.f2v_1, _this__u8e3s4.g2v_1);
    return this_0.toString();
  }
  function appendFile(_this__u8e3s4, host, encodedPath) {
    _this__u8e3s4.c1('://');
    _this__u8e3s4.c1(host);
    if (!startsWith_0(encodedPath, _Char___init__impl__6a9atx(47))) {
      _this__u8e3s4.s(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.c1(encodedPath);
  }
  function set_encodedPath(_this__u8e3s4, value) {
    _this__u8e3s4.i2v_1 = isBlank(value) ? emptyList() : value === '/' ? get_ROOT_PATH() : toMutableList(split(value, charArrayOf([_Char___init__impl__6a9atx(47)])));
  }
  function get_encodedPath(_this__u8e3s4) {
    return joinPath(_this__u8e3s4.i2v_1);
  }
  function appendMailto(_this__u8e3s4, encodedUser, host) {
    _this__u8e3s4.c1(':');
    _this__u8e3s4.c1(encodedUser);
    _this__u8e3s4.c1(host);
  }
  function appendPayload(_this__u8e3s4, host) {
    _this__u8e3s4.c1(':');
    _this__u8e3s4.c1(host);
  }
  function joinPath(_this__u8e3s4) {
    if (_this__u8e3s4.r())
      return '';
    if (_this__u8e3s4.e1() === 1) {
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
      _this__u8e3s4.k2w(Companion_getInstance_8().y2w(scheme));
    }
    if (!(host == null))
      _this__u8e3s4.b2v_1 = host;
    if (!(port == null)) {
      _this__u8e3s4.j2w(port);
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
    var tmp$ret$0;
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
            tmp$ret$0 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = -1;
    }
    var startIndex = tmp$ret$0;
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlin.text.indexOfLast' call
      var inductionVariable_0 = charSequenceLength(urlString) - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          var it_0 = charSequenceGet(urlString, index_0);
          if (!isWhitespace(it_0)) {
            tmp$ret$2 = index_0;
            break $l$block_0;
          }
        }
         while (0 <= inductionVariable_0);
      tmp$ret$2 = -1;
    }
    var endIndex = tmp$ret$2 + 1 | 0;
    var schemeLength = findScheme(urlString, startIndex, endIndex);
    if (schemeLength > 0) {
      var scheme = substring(urlString, startIndex, startIndex + schemeLength | 0);
      _this__u8e3s4.k2w(Companion_getInstance_8().y2w(scheme));
      startIndex = startIndex + (schemeLength + 1 | 0) | 0;
    }
    if (_this__u8e3s4.n2v().l2v_1 === 'data') {
      _this__u8e3s4.b2v_1 = substring(urlString, startIndex, endIndex);
      return _this__u8e3s4;
    }
    var slashCount = count(urlString, startIndex, endIndex, _Char___init__impl__6a9atx(47));
    startIndex = startIndex + slashCount | 0;
    if (_this__u8e3s4.n2v().l2v_1 === 'file') {
      parseFile(_this__u8e3s4, urlString, startIndex, endIndex, slashCount);
      return _this__u8e3s4;
    }
    if (_this__u8e3s4.n2v().l2v_1 === 'mailto') {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!(slashCount === 0)) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      parseMailto(_this__u8e3s4, urlString, startIndex, endIndex);
      return _this__u8e3s4;
    }
    if (_this__u8e3s4.n2v().l2v_1 === 'about') {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!(slashCount === 0)) {
        var message_0 = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      _this__u8e3s4.b2v_1 = substring(urlString, startIndex, endIndex);
      return _this__u8e3s4;
    }
    if (_this__u8e3s4.n2v().l2v_1 === 'tel') {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!(slashCount === 0)) {
        var message_1 = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
      _this__u8e3s4.b2v_1 = substring(urlString, startIndex, endIndex);
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
            _this__u8e3s4.f2v_1 = substring(urlString, startIndex, passwordIndex);
            _this__u8e3s4.g2v_1 = substring(urlString, passwordIndex + 1 | 0, delimiter);
          } else {
            _this__u8e3s4.f2v_1 = substring(urlString, startIndex, delimiter);
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
      _this__u8e3s4.i2v_1 = charCodeAt(urlString, endIndex - 1 | 0) === _Char___init__impl__6a9atx(47) ? get_ROOT_PATH() : emptyList();
      return _this__u8e3s4;
    }
    var tmp_0 = _this__u8e3s4;
    var tmp_1;
    if (slashCount === 0) {
      tmp_1 = dropLast(_this__u8e3s4.i2v_1, 1);
    } else {
      tmp_1 = emptyList();
    }
    tmp_0.i2v_1 = tmp_1;
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
      if (_this__u8e3s4.i2v_1.e1() === 1) {
        // Inline function 'kotlin.text.isEmpty' call
        var this_2 = first_0(_this__u8e3s4.i2v_1);
        tmp_4 = charSequenceLength(this_2) === 0;
      } else {
        tmp_4 = false;
      }
      if (tmp_4) {
        tmp_3 = emptyList();
      } else {
        tmp_3 = _this__u8e3s4.i2v_1;
      }
      var basePath = tmp_3;
      var rawChunks = rawPath === '/' ? get_ROOT_PATH() : split(rawPath, charArrayOf([_Char___init__impl__6a9atx(47)]));
      var relativePath = plus_0(slashCount === 1 ? get_ROOT_PATH() : emptyList(), rawChunks);
      _this__u8e3s4.i2v_1 = plus_0(basePath, relativePath);
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
        _this__u8e3s4.b2v_1 = '';
        set_encodedPath(_this__u8e3s4, substring(urlString, startIndex, endIndex));
        break;
      case 2:
        var nextSlash = indexOf(urlString, _Char___init__impl__6a9atx(47), startIndex);
        if (nextSlash === -1 || nextSlash === endIndex) {
          _this__u8e3s4.b2v_1 = substring(urlString, startIndex, endIndex);
          return Unit_instance;
        }

        _this__u8e3s4.b2v_1 = substring(urlString, startIndex, nextSlash);
        set_encodedPath(_this__u8e3s4, substring(urlString, nextSlash, endIndex));
        break;
      case 3:
        _this__u8e3s4.b2v_1 = '';
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
    _this__u8e3s4.r2w(decodeURLPart(substring(urlString, startIndex, delimiter)));
    _this__u8e3s4.b2v_1 = substring(urlString, delimiter + 1 | 0, endIndex);
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
    _this__u8e3s4.b2v_1 = substring(urlString, startIndex, colonIndex);
    var tmp_0;
    if ((colonIndex + 1 | 0) < endIndex) {
      tmp_0 = toInt(substring(urlString, colonIndex + 1 | 0, endIndex));
    } else {
      tmp_0 = 0;
    }
    _this__u8e3s4.j2w(tmp_0);
  }
  function parseQuery(_this__u8e3s4, urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    if ((startIndex + 1 | 0) === endIndex) {
      _this__u8e3s4.c2v_1 = true;
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
    rawParameters.h2f(parseQuery$lambda(_this__u8e3s4));
    return fragmentStart;
  }
  function parseFragment(_this__u8e3s4, urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    if (startIndex < endIndex && charCodeAt(urlString, startIndex) === _Char___init__impl__6a9atx(35)) {
      _this__u8e3s4.h2v_1 = substring(urlString, startIndex + 1 | 0, endIndex);
    }
  }
  function parseQuery$lambda($this_parseQuery) {
    return function (key, values) {
      $this_parseQuery.j2v_1.d2f(key, values);
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
    this.l2w_1 = new URLProtocol('http', 80);
    this.m2w_1 = new URLProtocol('https', 443);
    this.n2w_1 = new URLProtocol('ws', 80);
    this.o2w_1 = new URLProtocol('wss', 443);
    this.p2w_1 = new URLProtocol('socks', 1080);
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = listOf([this.l2w_1, this.m2w_1, this.n2w_1, this.o2w_1, this.p2w_1]);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var tmp$ret$2 = element.l2v_1;
      destination.v2(tmp$ret$2, element);
    }
    tmp.q2w_1 = destination;
  }
  protoOf(Companion_8).y2w = function (name) {
    // Inline function 'kotlin.let' call
    var it = toLowerCasePreservingASCIIRules(name);
    var tmp0_elvis_lhs = Companion_getInstance_8().q2w_1.s2(it);
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
    this.l2v_1 = name;
    this.m2v_1 = defaultPort;
    var tmp0 = this.l2v_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.text.all' call
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(tmp0)) {
        var element = charSequenceGet(tmp0, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        if (!isLowerCase(element)) {
          tmp$ret$0 = false;
          break $l$block;
        }
      }
      tmp$ret$0 = true;
    }
    // Inline function 'kotlin.require' call
    if (!tmp$ret$0) {
      var message = 'All characters should be lower case';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(URLProtocol).toString = function () {
    return 'URLProtocol(name=' + this.l2v_1 + ', defaultPort=' + this.m2v_1 + ')';
  };
  protoOf(URLProtocol).hashCode = function () {
    var result = getStringHashCode(this.l2v_1);
    result = imul(result, 31) + this.m2v_1 | 0;
    return result;
  };
  protoOf(URLProtocol).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof URLProtocol))
      return false;
    if (!(this.l2v_1 === other.l2v_1))
      return false;
    if (!(this.m2v_1 === other.m2v_1))
      return false;
    return true;
  };
  function isSecure(_this__u8e3s4) {
    return _this__u8e3s4.l2v_1 === 'https' || _this__u8e3s4.l2v_1 === 'wss';
  }
  function isWebsocket(_this__u8e3s4) {
    return _this__u8e3s4.l2v_1 === 'ws' || _this__u8e3s4.l2v_1 === 'wss';
  }
  function Url(urlString) {
    return URLBuilder_0(urlString).r2n();
  }
  function get_fullPath(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    appendUrlFullPath_0(this_0, _this__u8e3s4.z2w(), _this__u8e3s4.a2x(), _this__u8e3s4.u2v_1);
    return this_0.toString();
  }
  function takeFrom_0(_this__u8e3s4, url) {
    _this__u8e3s4.e2v_1 = url.e2v_1;
    _this__u8e3s4.b2v_1 = url.b2v_1;
    _this__u8e3s4.j2w(url.d2v_1);
    _this__u8e3s4.i2v_1 = url.i2v_1;
    _this__u8e3s4.f2v_1 = url.f2v_1;
    _this__u8e3s4.g2v_1 = url.g2v_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ParametersBuilder();
    appendAll(this_0, url.j2v_1);
    _this__u8e3s4.w2w(this_0);
    _this__u8e3s4.h2v_1 = url.h2v_1;
    _this__u8e3s4.c2v_1 = url.c2v_1;
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
      _this__u8e3s4.s(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.c1(encodedPath);
    if (!encodedQueryParameters.r() || trailingQuery) {
      _this__u8e3s4.c1('?');
    }
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = encodedQueryParameters.c2f();
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var key = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.n1();
      var tmp_0;
      if (value.r()) {
        tmp_0 = listOf_0(to(key, null));
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(value, 10));
        var _iterator__ex2g4s_0 = value.t();
        while (_iterator__ex2g4s_0.u()) {
          var item = _iterator__ex2g4s_0.v();
          var tmp$ret$8 = to(key, item);
          destination_0.b1(tmp$ret$8);
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
    _this__u8e3s4.q(encodedUser);
    if (!(encodedPassword == null)) {
      _this__u8e3s4.s(_Char___init__impl__6a9atx(58));
      _this__u8e3s4.q(encodedPassword);
    }
    _this__u8e3s4.q('@');
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
      _this__u8e3s4.s(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.c1(encodedPath);
    var tmp_0;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(encodedQuery) > 0) {
      tmp_0 = true;
    } else {
      tmp_0 = trailingQuery;
    }
    if (tmp_0) {
      _this__u8e3s4.c1('?');
    }
    _this__u8e3s4.c1(encodedQuery);
  }
  function get_hostWithPortIfSpecified(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.p2v_1;
    return tmp0_subject === 0 || tmp0_subject === _this__u8e3s4.a2w_1.m2v_1 ? _this__u8e3s4.o2v_1 : get_hostWithPort(_this__u8e3s4);
  }
  function get_hostWithPort(_this__u8e3s4) {
    return _this__u8e3s4.o2v_1 + ':' + _this__u8e3s4.b2x();
  }
  function appendUrlFullPath$lambda(it) {
    var key = it.sf_1;
    var tmp;
    if (it.tf_1 == null) {
      tmp = key;
    } else {
      var value = toString_1(it.tf_1);
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
      if ($pathSegments.r()) {
        return emptyList();
      }
      var tmp_0;
      var tmp_1;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = first_0($pathSegments);
      if (charSequenceLength(this_0) === 0) {
        tmp_1 = $pathSegments.e1() > 1;
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
      return $pathSegments.o2(start, end);
    };
  }
  function Url$encodedPath$delegate$lambda($pathSegments, this$0) {
    return function () {
      var tmp;
      if ($pathSegments.r()) {
        return '';
      }
      var pathStartIndex = indexOf(this$0.v2v_1, _Char___init__impl__6a9atx(47), this$0.a2w_1.l2v_1.length + 3 | 0);
      var tmp_0;
      if (pathStartIndex === -1) {
        return '';
      }
      // Inline function 'kotlin.charArrayOf' call
      var tmp$ret$0 = charArrayOf([_Char___init__impl__6a9atx(63), _Char___init__impl__6a9atx(35)]);
      var pathEndIndex = indexOfAny(this$0.v2v_1, tmp$ret$0, pathStartIndex);
      var tmp_1;
      if (pathEndIndex === -1) {
        return substring_0(this$0.v2v_1, pathStartIndex);
      }
      return substring(this$0.v2v_1, pathStartIndex, pathEndIndex);
    };
  }
  function Url$_get_encodedPath_$ref_fg9j48() {
    return function (p0) {
      return p0.z2w();
    };
  }
  function Url$encodedQuery$delegate$lambda(this$0) {
    return function () {
      var queryStart = indexOf(this$0.v2v_1, _Char___init__impl__6a9atx(63)) + 1 | 0;
      var tmp;
      if (queryStart === 0) {
        return '';
      }
      var queryEnd = indexOf(this$0.v2v_1, _Char___init__impl__6a9atx(35), queryStart);
      var tmp_0;
      if (queryEnd === -1) {
        return substring_0(this$0.v2v_1, queryStart);
      }
      return substring(this$0.v2v_1, queryStart, queryEnd);
    };
  }
  function Url$_get_encodedQuery_$ref_c7vq1h() {
    return function (p0) {
      return p0.a2x();
    };
  }
  function Url$encodedPathAndQuery$delegate$lambda(this$0) {
    return function () {
      var pathStart = indexOf(this$0.v2v_1, _Char___init__impl__6a9atx(47), this$0.a2w_1.l2v_1.length + 3 | 0);
      var tmp;
      if (pathStart === -1) {
        return '';
      }
      var queryEnd = indexOf(this$0.v2v_1, _Char___init__impl__6a9atx(35), pathStart);
      var tmp_0;
      if (queryEnd === -1) {
        return substring_0(this$0.v2v_1, pathStart);
      }
      return substring(this$0.v2v_1, pathStart, queryEnd);
    };
  }
  function Url$encodedUser$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.s2v_1 == null) {
        return null;
      }
      var tmp_0;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = this$0.s2v_1;
      if (charSequenceLength(this_0) === 0) {
        return '';
      }
      var usernameStart = this$0.a2w_1.l2v_1.length + 3 | 0;
      // Inline function 'kotlin.charArrayOf' call
      var tmp$ret$1 = charArrayOf([_Char___init__impl__6a9atx(58), _Char___init__impl__6a9atx(64)]);
      var usernameEnd = indexOfAny(this$0.v2v_1, tmp$ret$1, usernameStart);
      return substring(this$0.v2v_1, usernameStart, usernameEnd);
    };
  }
  function Url$_get_encodedUser_$ref_3lb9bi() {
    return function (p0) {
      return p0.c2x();
    };
  }
  function Url$encodedPassword$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.t2v_1 == null) {
        return null;
      }
      var tmp_0;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = this$0.t2v_1;
      if (charSequenceLength(this_0) === 0) {
        return '';
      }
      var passwordStart = indexOf(this$0.v2v_1, _Char___init__impl__6a9atx(58), this$0.a2w_1.l2v_1.length + 3 | 0) + 1 | 0;
      var passwordEnd = indexOf(this$0.v2v_1, _Char___init__impl__6a9atx(64));
      return substring(this$0.v2v_1, passwordStart, passwordEnd);
    };
  }
  function Url$_get_encodedPassword_$ref_25ixc2() {
    return function (p0) {
      return p0.d2x();
    };
  }
  function Url$encodedFragment$delegate$lambda(this$0) {
    return function () {
      var fragmentStart = indexOf(this$0.v2v_1, _Char___init__impl__6a9atx(35)) + 1 | 0;
      var tmp;
      if (fragmentStart === 0) {
        return '';
      }
      return substring_0(this$0.v2v_1, fragmentStart);
    };
  }
  function Url_0(protocol, host, specifiedPort, pathSegments, parameters, fragment, user, password, trailingQuery, urlString) {
    this.o2v_1 = host;
    this.p2v_1 = specifiedPort;
    this.q2v_1 = parameters;
    this.r2v_1 = fragment;
    this.s2v_1 = user;
    this.t2v_1 = password;
    this.u2v_1 = trailingQuery;
    this.v2v_1 = urlString;
    var containsArg = this.p2v_1;
    // Inline function 'kotlin.require' call
    if (!(0 <= containsArg ? containsArg <= 65535 : false)) {
      var message = 'Port must be between 0 and 65535, or 0 if not set. Provided: ' + this.p2v_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.w2v_1 = pathSegments;
    this.x2v_1 = pathSegments;
    var tmp = this;
    tmp.y2v_1 = lazy_0(Url$segments$delegate$lambda(pathSegments));
    this.z2v_1 = protocol;
    var tmp_0 = this;
    var tmp0_elvis_lhs = this.z2v_1;
    tmp_0.a2w_1 = tmp0_elvis_lhs == null ? Companion_getInstance_8().l2w_1 : tmp0_elvis_lhs;
    var tmp_1 = this;
    tmp_1.b2w_1 = lazy_0(Url$encodedPath$delegate$lambda(pathSegments, this));
    var tmp_2 = this;
    tmp_2.c2w_1 = lazy_0(Url$encodedQuery$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.d2w_1 = lazy_0(Url$encodedPathAndQuery$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.e2w_1 = lazy_0(Url$encodedUser$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.f2w_1 = lazy_0(Url$encodedPassword$delegate$lambda(this));
    var tmp_6 = this;
    tmp_6.g2w_1 = lazy_0(Url$encodedFragment$delegate$lambda(this));
  }
  protoOf(Url_0).b2x = function () {
    // Inline function 'kotlin.takeUnless' call
    var this_0 = this.p2v_1;
    var tmp;
    if (!(this_0 === 0)) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    return tmp0_elvis_lhs == null ? this.a2w_1.m2v_1 : tmp0_elvis_lhs;
  };
  protoOf(Url_0).z2w = function () {
    var tmp0 = this.b2w_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('encodedPath', 1, tmp, Url$_get_encodedPath_$ref_fg9j48(), null);
    return tmp0.n1();
  };
  protoOf(Url_0).a2x = function () {
    var tmp0 = this.c2w_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('encodedQuery', 1, tmp, Url$_get_encodedQuery_$ref_c7vq1h(), null);
    return tmp0.n1();
  };
  protoOf(Url_0).c2x = function () {
    var tmp0 = this.e2w_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('encodedUser', 1, tmp, Url$_get_encodedUser_$ref_3lb9bi(), null);
    return tmp0.n1();
  };
  protoOf(Url_0).d2x = function () {
    var tmp0 = this.f2w_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('encodedPassword', 1, tmp, Url$_get_encodedPassword_$ref_25ixc2(), null);
    return tmp0.n1();
  };
  protoOf(Url_0).toString = function () {
    return this.v2v_1;
  };
  protoOf(Url_0).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Url_0))
      THROW_CCE();
    return this.v2v_1 === other.v2v_1;
  };
  protoOf(Url_0).hashCode = function () {
    return getStringHashCode(this.v2v_1);
  };
  function get_authority_0(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    this_0.q(get_encodedUserAndPassword_0(_this__u8e3s4));
    this_0.q(get_hostWithPortIfSpecified(_this__u8e3s4));
    return this_0.toString();
  }
  function UrlSerializer() {
    UrlSerializer_instance = this;
    this.e2x_1 = PrimitiveSerialDescriptor('io.ktor.http.Url', STRING_getInstance());
  }
  protoOf(UrlSerializer).dp = function () {
    return this.e2x_1;
  };
  protoOf(UrlSerializer).fp = function (decoder) {
    return Url(decoder.as());
  };
  protoOf(UrlSerializer).f2x = function (encoder, value) {
    encoder.jt(value.toString());
  };
  protoOf(UrlSerializer).ep = function (encoder, value) {
    return this.f2x(encoder, value instanceof Url_0 ? value : THROW_CCE());
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
    appendUserAndPassword(this_0, _this__u8e3s4.c2x(), _this__u8e3s4.d2x());
    return this_0.toString();
  }
  function UrlDecodedParametersBuilder(encodedParametersBuilder) {
    this.g2x_1 = encodedParametersBuilder;
    this.h2x_1 = this.g2x_1.e2f();
  }
  protoOf(UrlDecodedParametersBuilder).r2n = function () {
    return decodeParameters(this.g2x_1);
  };
  protoOf(UrlDecodedParametersBuilder).e2f = function () {
    return this.h2x_1;
  };
  protoOf(UrlDecodedParametersBuilder).f2f = function (name) {
    var tmp0_safe_receiver = this.g2x_1.f2f(encodeURLParameter(name));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var _iterator__ex2g4s = tmp0_safe_receiver.t();
      while (_iterator__ex2g4s.u()) {
        var item = _iterator__ex2g4s.v();
        var tmp$ret$2 = decodeURLQueryComponent(item, VOID, VOID, true);
        destination.b1(tmp$ret$2);
      }
      tmp = destination;
    }
    return tmp;
  };
  protoOf(UrlDecodedParametersBuilder).g2f = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.g2x_1.g2f();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = decodeURLQueryComponent(item);
      destination.b1(tmp$ret$2);
    }
    return toSet(destination);
  };
  protoOf(UrlDecodedParametersBuilder).r = function () {
    return this.g2x_1.r();
  };
  protoOf(UrlDecodedParametersBuilder).c2f = function () {
    return decodeParameters(this.g2x_1).c2f();
  };
  protoOf(UrlDecodedParametersBuilder).n2f = function (name, value) {
    return this.g2x_1.n2f(encodeURLParameter(name), encodeURLParameterValue(value));
  };
  protoOf(UrlDecodedParametersBuilder).d2f = function (name, values) {
    var tmp = encodeURLParameter(name);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = encodeURLParameterValue(item);
      destination.b1(tmp$ret$2);
    }
    return this.g2x_1.d2f(tmp, destination);
  };
  protoOf(UrlDecodedParametersBuilder).y2 = function () {
    return this.g2x_1.y2();
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
    return this_0.r2n();
  }
  function appendAllEncoded(_this__u8e3s4, parameters) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = parameters.g2f().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var tmp0_elvis_lhs = parameters.f2f(element);
      var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      var tmp = encodeURLParameter(element);
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
      var _iterator__ex2g4s_0 = values.t();
      while (_iterator__ex2g4s_0.u()) {
        var item = _iterator__ex2g4s_0.v();
        var tmp$ret$4 = encodeURLParameterValue(item);
        destination.b1(tmp$ret$4);
      }
      _this__u8e3s4.d2f(tmp, destination);
    }
  }
  function appendAllDecoded(_this__u8e3s4, parameters) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = parameters.g2f().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var tmp0_elvis_lhs = parameters.f2f(element);
      var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      var tmp = decodeURLQueryComponent(element);
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
      var _iterator__ex2g4s_0 = values.t();
      while (_iterator__ex2g4s_0.u()) {
        var item = _iterator__ex2g4s_0.v();
        var tmp$ret$4 = decodeURLQueryComponent(item, VOID, VOID, true);
        destination.b1(tmp$ret$4);
      }
      _this__u8e3s4.d2f(tmp, destination);
    }
  }
  function ByteArrayContent(bytes, contentType, status) {
    contentType = contentType === VOID ? null : contentType;
    status = status === VOID ? null : status;
    ByteArrayContent_0.call(this);
    this.j2x_1 = bytes;
    this.k2x_1 = contentType;
    this.l2x_1 = status;
  }
  protoOf(ByteArrayContent).m2x = function () {
    return this.k2x_1;
  };
  protoOf(ByteArrayContent).n2x = function () {
    return fromInt(this.j2x_1.length);
  };
  protoOf(ByteArrayContent).o2x = function () {
    return this.j2x_1;
  };
  function MultiPartData() {
  }
  function PartData$FormItem$_init_$slambda_xpexm6(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PartData$FormItem$_init_$slambda_xpexm6).c2a = function ($completion) {
    var tmp = this.d2k($completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(PartData$FormItem$_init_$slambda_xpexm6).i9 = function ($completion) {
    return this.c2a($completion);
  };
  protoOf(PartData$FormItem$_init_$slambda_xpexm6).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        if (tmp === 0) {
          this.o8_1 = 1;
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
  protoOf(PartData$FormItem$_init_$slambda_xpexm6).d2k = function (completion) {
    return new PartData$FormItem$_init_$slambda_xpexm6(completion);
  };
  function PartData$FormItem$_init_$slambda_xpexm6_0(resultContinuation) {
    var i = new PartData$FormItem$_init_$slambda_xpexm6(resultContinuation);
    var l = function ($completion) {
      return i.c2a($completion);
    };
    l.$arity = 0;
    return l;
  }
  function PartData$BinaryItem$_init_$slambda_l0n5zl(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PartData$BinaryItem$_init_$slambda_l0n5zl).c2a = function ($completion) {
    var tmp = this.d2k($completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(PartData$BinaryItem$_init_$slambda_l0n5zl).i9 = function ($completion) {
    return this.c2a($completion);
  };
  protoOf(PartData$BinaryItem$_init_$slambda_l0n5zl).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        if (tmp === 0) {
          this.o8_1 = 1;
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
  protoOf(PartData$BinaryItem$_init_$slambda_l0n5zl).d2k = function (completion) {
    return new PartData$BinaryItem$_init_$slambda_l0n5zl(completion);
  };
  function PartData$BinaryItem$_init_$slambda_l0n5zl_0(resultContinuation) {
    var i = new PartData$BinaryItem$_init_$slambda_l0n5zl(resultContinuation);
    var l = function ($completion) {
      return i.c2a($completion);
    };
    l.$arity = 0;
    return l;
  }
  function PartData$BinaryChannelItem$_init_$lambda_77jc0t() {
    return Unit_instance;
  }
  function PartData$BinaryChannelItem$_init_$slambda_qcg1jy(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PartData$BinaryChannelItem$_init_$slambda_qcg1jy).c2a = function ($completion) {
    var tmp = this.d2k($completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(PartData$BinaryChannelItem$_init_$slambda_qcg1jy).i9 = function ($completion) {
    return this.c2a($completion);
  };
  protoOf(PartData$BinaryChannelItem$_init_$slambda_qcg1jy).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        if (tmp === 0) {
          this.o8_1 = 1;
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
  protoOf(PartData$BinaryChannelItem$_init_$slambda_qcg1jy).d2k = function (completion) {
    return new PartData$BinaryChannelItem$_init_$slambda_qcg1jy(completion);
  };
  function PartData$BinaryChannelItem$_init_$slambda_qcg1jy_0(resultContinuation) {
    var i = new PartData$BinaryChannelItem$_init_$slambda_qcg1jy(resultContinuation);
    var l = function ($completion) {
      return i.c2a($completion);
    };
    l.$arity = 0;
    return l;
  }
  function FormItem(value, dispose, partHeaders, release) {
    var tmp;
    if (release === VOID) {
      tmp = PartData$FormItem$_init_$slambda_xpexm6_0(null);
    } else {
      tmp = release;
    }
    release = tmp;
    PartData.call(this, dispose, partHeaders, release);
    this.t2y_1 = value;
  }
  function FileItem() {
  }
  function BinaryItem(provider, dispose, partHeaders, release) {
    var tmp;
    if (release === VOID) {
      tmp = PartData$BinaryItem$_init_$slambda_l0n5zl_0(null);
    } else {
      tmp = release;
    }
    release = tmp;
    PartData.call(this, dispose, partHeaders, release);
    this.z2y_1 = provider;
  }
  function BinaryChannelItem(provider, partHeaders) {
    var tmp = PartData$BinaryChannelItem$_init_$lambda_77jc0t;
    PartData.call(this, tmp, partHeaders, PartData$BinaryChannelItem$_init_$slambda_qcg1jy_0(null));
    this.f2z_1 = provider;
  }
  function PartData$contentDisposition$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.h2z_1.p2e('Content-Disposition');
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = Companion_getInstance().kn(tmp0_safe_receiver);
      }
      return tmp;
    };
  }
  function PartData$contentType$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.h2z_1.p2e('Content-Type');
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = Companion_getInstance_0().kn(tmp0_safe_receiver);
      }
      return tmp;
    };
  }
  function PartData(dispose, headers, release) {
    this.g2z_1 = dispose;
    this.h2z_1 = headers;
    this.i2z_1 = release;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.j2z_1 = lazy(tmp_0, PartData$contentDisposition$delegate$lambda(this));
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_1.k2z_1 = lazy(tmp_2, PartData$contentType$delegate$lambda(this));
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
  protoOf(ContentWrapper).s2z = function () {
    return this.r2z_1;
  };
  function OutgoingContent() {
    this.p2x_1 = null;
  }
  protoOf(OutgoingContent).m2x = function () {
    return null;
  };
  protoOf(OutgoingContent).n2x = function () {
    return null;
  };
  protoOf(OutgoingContent).x2r = function () {
    return Companion_getInstance_2().o2n_1;
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
        tmp = isEmpty(_this__u8e3s4.s2z());
      } else {
        tmp = false;
      }
    }
    return tmp;
  }
  function TextContent(text, contentType, status) {
    status = status === VOID ? null : status;
    ByteArrayContent_0.call(this);
    this.u2z_1 = text;
    this.v2z_1 = contentType;
    this.w2z_1 = status;
    var tmp = this;
    var tmp0_elvis_lhs = charset(this.v2z_1);
    tmp.x2z_1 = toByteArray(this.u2z_1, tmp0_elvis_lhs == null ? Charsets_getInstance().u2b_1 : tmp0_elvis_lhs);
  }
  protoOf(TextContent).m2x = function () {
    return this.v2z_1;
  };
  protoOf(TextContent).n2x = function () {
    return fromInt(this.x2z_1.length);
  };
  protoOf(TextContent).o2x = function () {
    return this.x2z_1;
  };
  protoOf(TextContent).toString = function () {
    return 'TextContent[' + this.v2z_1.toString() + '] "' + take(this.u2z_1, 30) + '"';
  };
  function get_origin(_this__u8e3s4) {
    return PlatformUtils_getInstance().u2e_1 ? locationOrigin() : 'http://localhost';
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
  protoOf(EmptyHeaders).p2e = get;
  protoOf(EmptyHeaders).h2f = forEach;
  protoOf(EmptyParameters).p2e = get;
  protoOf(EmptyParameters).h2f = forEach;
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
  _.$_$.a = NullBody_instance;
  _.$_$.b = Application_getInstance;
  _.$_$.c = Companion_getInstance_0;
  _.$_$.d = Image_getInstance;
  _.$_$.e = MultiPart_getInstance;
  _.$_$.f = Text_getInstance;
  _.$_$.g = Video_getInstance;
  _.$_$.h = Companion_getInstance_2;
  _.$_$.i = HttpHeaders_getInstance;
  _.$_$.j = Companion_getInstance_3;
  _.$_$.k = Companion_getInstance_4;
  _.$_$.l = Companion_getInstance_5;
  _.$_$.m = Companion_getInstance_6;
  _.$_$.n = ContentType_init_$Create$;
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
  _.$_$.v1 = formUrlEncode;
  _.$_$.w1 = get_fullPath;
  _.$_$.x1 = headersOf;
  _.$_$.y1 = isQuoted;
  _.$_$.z1 = isSecure;
  _.$_$.a2 = isWebsocket;
  _.$_$.b2 = quote;
  _.$_$.c2 = set;
  _.$_$.d2 = get_supportsRequestBody;
  _.$_$.e2 = takeFrom_0;
  _.$_$.f2 = takeFrom;
  _.$_$.g2 = withCharset;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-http.js.map
