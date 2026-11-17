(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var protoOf = kotlin_kotlin.$_$.ic;
  var initMetadataForObject = kotlin_kotlin.$_$.ob;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var initMetadataForClass = kotlin_kotlin.$_$.ib;
  var toString = kotlin_kotlin.$_$.lc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p4;
  var charSequenceLength = kotlin_kotlin.$_$.xa;
  var charSequenceGet = kotlin_kotlin.$_$.wa;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h;
  var equals = kotlin_kotlin.$_$.cb;
  var toString_0 = kotlin_kotlin.$_$.kh;
  var Enum = kotlin_kotlin.$_$.zf;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var getKClassFromExpression = kotlin_kotlin.$_$.bd;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var THROW_CCE = kotlin_kotlin.$_$.jg;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var isInterface = kotlin_kotlin.$_$.xb;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var initMetadataForInterface = kotlin_kotlin.$_$.mb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.jb;
  var hashCode = kotlin_kotlin.$_$.hb;
  var joinToString = kotlin_kotlin.$_$.k7;
  var KtList = kotlin_kotlin.$_$.p5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e4;
  var KtMap = kotlin_kotlin.$_$.s5;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var getBooleanHashCode = kotlin_kotlin.$_$.eb;
  var getStringHashCode = kotlin_kotlin.$_$.gb;
  var toDouble = kotlin_kotlin.$_$.ye;
  var numberRangeToNumber = kotlin_kotlin.$_$.ec;
  var ClosedRange = kotlin_kotlin.$_$.qc;
  var contains = kotlin_kotlin.$_$.uc;
  var convertToInt = kotlin_kotlin.$_$.y9;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.a5;
  var toDoubleOrNull = kotlin_kotlin.$_$.xe;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.t4;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.q2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.hh;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var toLongOrNull = kotlin_kotlin.$_$.df;
  var toULongOrNull = kotlin_kotlin.$_$.if;
  var ULong = kotlin_kotlin.$_$.qg;
  var Companion_getInstance = kotlin_kotlin.$_$.c3;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.m1;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.ve;
  var KProperty1 = kotlin_kotlin.$_$.hd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.fb;
  var constructCallableReference = kotlin_kotlin.$_$.ab;
  var lazy = kotlin_kotlin.$_$.gh;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var captureStack = kotlin_kotlin.$_$.sa;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var defineProp = kotlin_kotlin.$_$.bb;
  var fromInt = kotlin_kotlin.$_$.ca;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.c1;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.e1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.l1;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.n1;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.t;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.v;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.u1;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.w1;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var charSequenceSubSequence = kotlin_kotlin.$_$.ya;
  var coerceAtLeast = kotlin_kotlin.$_$.rc;
  var coerceAtMost = kotlin_kotlin.$_$.sc;
  var isBlank = kotlin_kotlin.$_$.zd;
  var Collection = kotlin_kotlin.$_$.k5;
  var toSet = kotlin_kotlin.$_$.r8;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var singleOrNull = kotlin_kotlin.$_$.e8;
  var emptyMap = kotlin_kotlin.$_$.y6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v3;
  var getValue = kotlin_kotlin.$_$.g7;
  var copyOf = kotlin_kotlin.$_$.s6;
  var arrayCopy = kotlin_kotlin.$_$.a6;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var to = kotlin_kotlin.$_$.lh;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.xf;
  var invoke = kotlin_kotlin.$_$.bh;
  var CoroutineImpl = kotlin_kotlin.$_$.o9;
  var DeepRecursiveScope = kotlin_kotlin.$_$.yf;
  var Unit = kotlin_kotlin.$_$.tg;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var initMetadataForLambda = kotlin_kotlin.$_$.nb;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.kb;
  var enumEntries = kotlin_kotlin.$_$.q9;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var getKClass = kotlin_kotlin.$_$.cd;
  var Exception = kotlin_kotlin.$_$.bg;
  var ensureNotNull = kotlin_kotlin.$_$.ah;
  var contains_0 = kotlin_kotlin.$_$.nd;
  var plus = kotlin_kotlin.$_$.ih;
  var missingFieldExceptionWithNewMessage = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var convertToByte = kotlin_kotlin.$_$.x9;
  var equalsLong = kotlin_kotlin.$_$.ba;
  var convertToShort = kotlin_kotlin.$_$.z9;
  var IllegalArgumentException = kotlin_kotlin.$_$.cg;
  var isFinite = kotlin_kotlin.$_$.dh;
  var isFinite_0 = kotlin_kotlin.$_$.ch;
  var charCodeAt = kotlin_kotlin.$_$.va;
  var toUInt = kotlin_kotlin.$_$.hf;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.d1;
  var toULong = kotlin_kotlin.$_$.jf;
  var toUByte = kotlin_kotlin.$_$.gf;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.u;
  var toUShort = kotlin_kotlin.$_$.kf;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.v1;
  var objectCreate = kotlin_kotlin.$_$.hc;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var toString_1 = kotlin_kotlin.$_$.o;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.b3;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.a3;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.d3;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var setOf = kotlin_kotlin.$_$.d8;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.n;
  var numberToChar = kotlin_kotlin.$_$.fc;
  var equals_0 = kotlin_kotlin.$_$.ud;
  var toByte = kotlin_kotlin.$_$.jc;
  var startsWith = kotlin_kotlin.$_$.ne;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var single = kotlin_kotlin.$_$.ke;
  var Char = kotlin_kotlin.$_$.uf;
  var toInt = kotlin_kotlin.$_$.bf;
  var toList = kotlin_kotlin.$_$.l8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.r9;
  var NamedValueEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var toNumber = kotlin_kotlin.$_$.na;
  var last = kotlin_kotlin.$_$.q7;
  var removeLast = kotlin_kotlin.$_$.a8;
  var lastIndexOf = kotlin_kotlin.$_$.fe;
  var Long = kotlin_kotlin.$_$.eg;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.j;
  var multiply = kotlin_kotlin.$_$.ga;
  var add = kotlin_kotlin.$_$.t9;
  var subtract = kotlin_kotlin.$_$.ma;
  var compare = kotlin_kotlin.$_$.w9;
  var numberToLong = kotlin_kotlin.$_$.ia;
  var negate = kotlin_kotlin.$_$.ha;
  var charArray = kotlin_kotlin.$_$.ua;
  var indexOf = kotlin_kotlin.$_$.xd;
  var indexOf_0 = kotlin_kotlin.$_$.yd;
  var substring = kotlin_kotlin.$_$.te;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.d4;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.l3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Json, 'Json');
  initMetadataForObject(Default, 'Default', VOID, Json);
  initMetadataForClass(JsonBuilder, 'JsonBuilder');
  initMetadataForClass(JsonImpl, 'JsonImpl', VOID, Json);
  initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
  initMetadataForClass(JsonIgnoreUnknownKeys, 'JsonIgnoreUnknownKeys');
  initMetadataForClass(JsonNames, 'JsonNames');
  initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
  initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode', VOID, Enum);
  initMetadataForClass(JsonContentPolymorphicSerializer, 'JsonContentPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive, [SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
  initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
  initMetadataForClass(JsonObjectBuilder, 'JsonObjectBuilder');
  initMetadataForClass(JsonArrayBuilder, 'JsonArrayBuilder');
  initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
  initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
  initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
  initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
  initMetadataForClass(Composer, 'Composer');
  initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', VOID, Composer);
  initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', VOID, Composer);
  initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', VOID, Composer);
  initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
  initMetadataForObject(Tombstone, 'Tombstone');
  initMetadataForObject(RedactedKey, 'RedactedKey');
  initMetadataForClass(JsonPath, 'JsonPath');
  initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($readObjectCOROUTINE$, CoroutineImpl);
  initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
  initMetadataForClass(LexerMode, 'LexerMode', VOID, Enum);
  initMetadataForInterface(PolymorphicJsonDecoder, 'PolymorphicJsonDecoder', VOID, VOID, [JsonDecoder]);
  initMetadataForClass(Key, 'Key', Key);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [PolymorphicJsonDecoder]);
  initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', VOID, AbstractDecoder);
  initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [JsonEncoder]);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [PolymorphicJsonDecoder]);
  initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder', VOID, JsonTreeDecoder);
  initMetadataForClass(AbstractJsonTreeEncoder, 'AbstractJsonTreeEncoder', VOID, NamedValueEncoder, [JsonEncoder]);
  initMetadataForClass(JsonTreeEncoder, 'JsonTreeEncoder', VOID, AbstractJsonTreeEncoder);
  initMetadataForClass(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1, VOID, VOID, AbstractEncoder);
  initMetadataForClass(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1, VOID, VOID, AbstractEncoder);
  initMetadataForClass(JsonPrimitiveEncoder, 'JsonPrimitiveEncoder', VOID, AbstractJsonTreeEncoder);
  initMetadataForClass(JsonTreeListEncoder, 'JsonTreeListEncoder', VOID, AbstractJsonTreeEncoder);
  initMetadataForClass(JsonTreeMapEncoder, 'JsonTreeMapEncoder', VOID, JsonTreeEncoder);
  initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
  initMetadataForObject(CharMappings, 'CharMappings');
  initMetadataForClass(StringJsonLexer, 'StringJsonLexer', VOID, AbstractJsonLexer);
  initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments', VOID, StringJsonLexer);
  initMetadataForClass(StringJsonWriter, 'StringJsonWriter', StringJsonWriter);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.d30_1 = configuration;
    this.e30_1 = serializersModule;
    this.f30_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).ct = function () {
    return this.e30_1;
  };
  protoOf(Json).g30 = function (serializer, value) {
    var result = new StringJsonWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.m30();
    }
  };
  protoOf(Json).h30 = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, LexerMode_OBJ_getInstance(), lexer, deserializer.lp(), null);
    var result = input.ms(deserializer);
    lexer.a31();
    return result;
  };
  protoOf(Json).i30 = function (serializer, value) {
    return writeJson(this, value, serializer);
  };
  protoOf(Json).j30 = function (deserializer, element) {
    return readJson(this, element, deserializer);
  };
  protoOf(Json).k30 = function (string) {
    return this.h30(JsonElementSerializer_getInstance(), string);
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.v31();
    return new JsonImpl(conf, builder.s31_1);
  }
  function JsonBuilder(json) {
    this.b31_1 = json.d30_1.w31_1;
    this.c31_1 = json.d30_1.b32_1;
    this.d31_1 = json.d30_1.x31_1;
    this.e31_1 = json.d30_1.y31_1;
    this.f31_1 = json.d30_1.a32_1;
    this.g31_1 = json.d30_1.c32_1;
    this.h31_1 = json.d30_1.d32_1;
    this.i31_1 = json.d30_1.f32_1;
    this.j31_1 = json.d30_1.m32_1;
    this.k31_1 = json.d30_1.h32_1;
    this.l31_1 = json.d30_1.i32_1;
    this.m31_1 = json.d30_1.j32_1;
    this.n31_1 = json.d30_1.k32_1;
    this.o31_1 = json.d30_1.l32_1;
    this.p31_1 = json.d30_1.g32_1;
    this.q31_1 = json.d30_1.z31_1;
    this.r31_1 = json.d30_1.e32_1;
    this.s31_1 = json.ct();
    this.t31_1 = json.d30_1.n32_1;
    this.u31_1 = json.d30_1.o32_1;
  }
  protoOf(JsonBuilder).v31 = function () {
    if (this.r31_1) {
      // Inline function 'kotlin.require' call
      if (!(this.i31_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.j31_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.f31_1) {
      // Inline function 'kotlin.require' call
      if (!(this.g31_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.g31_1 === '    ')) {
      var tmp0 = this.g31_1;
      var tmp$ret$6;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$6 = false;
            break $l$block;
          }
        }
        tmp$ret$6 = true;
      }
      var allWhitespaces = tmp$ret$6;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.g31_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.b31_1, this.d31_1, this.e31_1, this.q31_1, this.f31_1, this.c31_1, this.g31_1, this.h31_1, this.r31_1, this.i31_1, this.p31_1, this.k31_1, this.l31_1, this.m31_1, this.n31_1, this.o31_1, this.j31_1, this.t31_1, this.u31_1);
  };
  function validateConfiguration($this) {
    if (equals($this.ct(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.d30_1);
    $this.ct().d19(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonIgnoreUnknownKeys() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode, exceptionsWithDebugInfo, maxNestingDepth) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    allowComments = allowComments === VOID ? false : allowComments;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    exceptionsWithDebugInfo = exceptionsWithDebugInfo === VOID ? true : exceptionsWithDebugInfo;
    maxNestingDepth = maxNestingDepth === VOID ? 400 : maxNestingDepth;
    this.w31_1 = encodeDefaults;
    this.x31_1 = ignoreUnknownKeys;
    this.y31_1 = isLenient;
    this.z31_1 = allowStructuredMapKeys;
    this.a32_1 = prettyPrint;
    this.b32_1 = explicitNulls;
    this.c32_1 = prettyPrintIndent;
    this.d32_1 = coerceInputValues;
    this.e32_1 = useArrayPolymorphism;
    this.f32_1 = classDiscriminator;
    this.g32_1 = allowSpecialFloatingPointValues;
    this.h32_1 = useAlternativeNames;
    this.i32_1 = namingStrategy;
    this.j32_1 = decodeEnumsCaseInsensitive;
    this.k32_1 = allowTrailingComma;
    this.l32_1 = allowComments;
    this.m32_1 = classDiscriminatorMode;
    this.n32_1 = exceptionsWithDebugInfo;
    this.o32_1 = maxNestingDepth;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.w31_1 + ', ignoreUnknownKeys=' + this.x31_1 + ', isLenient=' + this.y31_1 + ', ' + ('allowStructuredMapKeys=' + this.z31_1 + ', prettyPrint=' + this.a32_1 + ', explicitNulls=' + this.b32_1 + ', ') + ("prettyPrintIndent='" + this.c32_1 + "', coerceInputValues=" + this.d32_1 + ', useArrayPolymorphism=' + this.e32_1 + ', ') + ("classDiscriminator='" + this.f32_1 + "', allowSpecialFloatingPointValues=" + this.g32_1 + ', ') + ('useAlternativeNames=' + this.h32_1 + ', namingStrategy=' + toString_0(this.i32_1) + ', decodeEnumsCaseInsensitive=' + this.j32_1 + ', ') + ('allowTrailingComma=' + this.k32_1 + ', allowComments=' + this.l32_1 + ', classDiscriminatorMode=' + this.m32_1.toString() + ', ') + ('exceptionsWithDebugInfo=' + this.n32_1 + ', maxNestingDepth=' + this.o32_1 + ')');
  };
  var static_init_called;
  function static_init() {
    if (static_init_called)
      return Unit_instance;
    static_init_called = true;
    ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
    ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
    ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
  }
  var ClassDiscriminatorMode_NONE_instance;
  var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  var ClassDiscriminatorMode_POLYMORPHIC_instance;
  function ClassDiscriminatorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClassDiscriminatorMode_NONE_getInstance() {
    static_init();
    return ClassDiscriminatorMode_NONE_instance;
  }
  function ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance() {
    static_init();
    return ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    static_init();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  function throwSubtypeNotRegistered($this, subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.o();
    var subClassName = tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs;
    var scope = "in the scope of '" + baseClass.o() + "'";
    throw SerializationException_init_$Create$("Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function JsonContentPolymorphicSerializer(baseClass) {
    this.p32_1 = baseClass;
    this.q32_1 = buildSerialDescriptor('JsonContentPolymorphicSerializer<' + this.p32_1.o() + '>', SEALED_getInstance(), []);
  }
  protoOf(JsonContentPolymorphicSerializer).lp = function () {
    return this.q32_1;
  };
  protoOf(JsonContentPolymorphicSerializer).bq = function (encoder, value) {
    var tmp0_elvis_lhs = encoder.ct().mu(this.p32_1, value);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? serializerOrNull(getKClassFromExpression(value)) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throwSubtypeNotRegistered(this, getKClassFromExpression(value), this.p32_1);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var actualSerializer = tmp;
    (isInterface(actualSerializer, KSerializer) ? actualSerializer : THROW_CCE()).mp(encoder, value);
  };
  protoOf(JsonContentPolymorphicSerializer).mp = function (encoder, value) {
    return this.bq(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(JsonContentPolymorphicSerializer).np = function (decoder) {
    var input = asJsonDecoder(decoder);
    var tree = input.r32();
    var tmp = this.s32(tree);
    var actualSerializer = isInterface(tmp, KSerializer) ? tmp : THROW_CCE();
    return input.t32().j30(actualSerializer, tree);
  };
  function JsonDecoder() {
  }
  function get_jsonUnquotedLiteralDescriptor() {
    _init_properties_JsonElement_kt__7cbdc2();
    return jsonUnquotedLiteralDescriptor;
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_3() {
    return Companion_instance;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.u32_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.u32_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.u32_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.u32_1, ',', '[', ']');
  };
  protoOf(JsonArray).r = function () {
    return this.u32_1.r();
  };
  protoOf(JsonArray).v32 = function (element) {
    return this.u32_1.j2(element);
  };
  protoOf(JsonArray).j2 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.v32(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).t = function () {
    return this.u32_1.t();
  };
  protoOf(JsonArray).w32 = function (elements) {
    return this.u32_1.k2(elements);
  };
  protoOf(JsonArray).k2 = function (elements) {
    return this.w32(elements);
  };
  protoOf(JsonArray).d1 = function (index) {
    return this.u32_1.d1(index);
  };
  protoOf(JsonArray).x32 = function (element) {
    return this.u32_1.m2(element);
  };
  protoOf(JsonArray).m2 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.x32(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).y32 = function (element) {
    return this.u32_1.n2(element);
  };
  protoOf(JsonArray).n2 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.y32(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).o2 = function () {
    return this.u32_1.o2();
  };
  protoOf(JsonArray).j1 = function (index) {
    return this.u32_1.j1(index);
  };
  protoOf(JsonArray).p2 = function (fromIndex, toIndex) {
    return this.u32_1.p2(fromIndex, toIndex);
  };
  protoOf(JsonArray).asJsReadonlyArrayView = function () {
    return this.u32_1.asJsReadonlyArrayView();
  };
  protoOf(JsonArray).e1 = function () {
    return this.u32_1.e1();
  };
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.m1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.n1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, k);
    this_0.s(_Char___init__impl__6a9atx(58));
    this_0.w(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.z32_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.z32_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.z32_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.z32_1.l1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).r = function () {
    return this.z32_1.r();
  };
  protoOf(JsonObject).x2d = function (key) {
    return this.z32_1.r2(key);
  };
  protoOf(JsonObject).r2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.x2d((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).a33 = function (value) {
    return this.z32_1.s2(value);
  };
  protoOf(JsonObject).s2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.a33(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonObject).k2e = function (key) {
    return this.z32_1.t2(key);
  };
  protoOf(JsonObject).t2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.k2e((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).asJsReadonlyMapView = function () {
    return this.z32_1.asJsReadonlyMapView();
  };
  protoOf(JsonObject).e1 = function () {
    return this.z32_1.e1();
  };
  protoOf(JsonObject).u2 = function () {
    return this.z32_1.u2();
  };
  protoOf(JsonObject).v2 = function () {
    return this.z32_1.v2();
  };
  protoOf(JsonObject).l1 = function () {
    return this.z32_1.l1();
  };
  function get_jsonArray(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonArray ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonArray');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.c33();
  };
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.c33();
    }
    return tmp;
  }
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function get_jsonObject(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonObject ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonObject');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.d33_1 = 'null';
  }
  protoOf(JsonNull).b33 = function () {
    return false;
  };
  protoOf(JsonNull).c33 = function () {
    return this.d33_1;
  };
  protoOf(JsonNull).e33 = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).w10 = function (typeParamsSerializers) {
    return this.e33();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.f33_1 = isString;
    this.g33_1 = coerceToInlineType;
    this.h33_1 = toString(body);
    if (!(this.g33_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.g33_1.vq()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).b33 = function () {
    return this.f33_1;
  };
  protoOf(JsonLiteral).c33 = function () {
    return this.h33_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.f33_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.h33_1);
      tmp = this_0.toString();
    } else {
      tmp = this.h33_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.f33_1 === other.f33_1))
      return false;
    if (!(this.h33_1 === other.h33_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.f33_1);
    result = imul(31, result) + getStringHashCode(this.h33_1) | 0;
    return result;
  };
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.c33());
  }
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return StringJsonLexer_0(Default_getInstance(), _this__u8e3s4.c33()).i33();
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.c33();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.c33());
  }
  function JsonPrimitive_1(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonPrimitive_2(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function get_intOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNull' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp0_elvis_lhs = tmp;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    var result = tmp_1;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(-2147483648, 2147483647);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      return null;
    return convertToInt(result);
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNumberFormatException' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.e());
      } else {
        throw $p;
      }
    }
    var result = tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(-2147483648, 2147483647);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      throw NumberFormatException_init_$Create$(_this__u8e3s4.c33() + ' is not an Int');
    return convertToInt(result);
  }
  function get_longOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNull' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNumberFormatException' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.e());
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function get_floatOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloatOrNull' call
    var this_0 = _this__u8e3s4.c33();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDoubleOrNull(this_0);
  }
  function get_doubleOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDoubleOrNull(_this__u8e3s4.c33());
  }
  function get_boolean(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = toBooleanStrictOrNull_0(_this__u8e3s4.c33());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$(_this__u8e3s4.toString() + ' does not represent a Boolean');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonObjectBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.k33_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonObjectBuilder).l33 = function (key, element) {
    return this.k33_1.a3(key, element);
  };
  protoOf(JsonObjectBuilder).v31 = function () {
    return new JsonObject(this.k33_1);
  };
  function JsonArrayBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m33_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonArrayBuilder).n33 = function (element) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.m33_1.c1(element);
    return true;
  };
  protoOf(JsonArrayBuilder).v31 = function () {
    return new JsonArray(this.m33_1);
  };
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.wp('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.wp('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.wp('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.wp('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.wp('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().o33_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().p33_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().q33_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().r33_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().s33_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.t33_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).lp = function () {
    return this.t33_1;
  };
  protoOf(JsonElementSerializer).u33 = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.fu(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.fu(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.fu(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(JsonElementSerializer).mp = function (encoder, value) {
    return this.u33(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).np = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.r32();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.v33_1 = ListSerializer(JsonElementSerializer_getInstance()).lp();
    this.w33_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).tq = function () {
    return this.w33_1;
  };
  protoOf(JsonArrayDescriptor).yq = function (index) {
    return this.v33_1.yq(index);
  };
  protoOf(JsonArrayDescriptor).zq = function (name) {
    return this.v33_1.zq(name);
  };
  protoOf(JsonArrayDescriptor).ar = function (index) {
    return this.v33_1.ar(index);
  };
  protoOf(JsonArrayDescriptor).br = function (index) {
    return this.v33_1.br(index);
  };
  protoOf(JsonArrayDescriptor).cr = function (index) {
    return this.v33_1.cr(index);
  };
  protoOf(JsonArrayDescriptor).uq = function () {
    return this.v33_1.uq();
  };
  protoOf(JsonArrayDescriptor).mq = function () {
    return this.v33_1.mq();
  };
  protoOf(JsonArrayDescriptor).vq = function () {
    return this.v33_1.vq();
  };
  protoOf(JsonArrayDescriptor).wq = function () {
    return this.v33_1.wq();
  };
  protoOf(JsonArrayDescriptor).xq = function () {
    return this.v33_1.xq();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.s33_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).lp = function () {
    return this.s33_1;
  };
  protoOf(JsonArraySerializer).x33 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).mp(encoder, value);
  };
  protoOf(JsonArraySerializer).mp = function (encoder, value) {
    return this.x33(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).np = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).np(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.y33_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).lp();
    this.z33_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).tq = function () {
    return this.z33_1;
  };
  protoOf(JsonObjectDescriptor).yq = function (index) {
    return this.y33_1.yq(index);
  };
  protoOf(JsonObjectDescriptor).zq = function (name) {
    return this.y33_1.zq(name);
  };
  protoOf(JsonObjectDescriptor).ar = function (index) {
    return this.y33_1.ar(index);
  };
  protoOf(JsonObjectDescriptor).br = function (index) {
    return this.y33_1.br(index);
  };
  protoOf(JsonObjectDescriptor).cr = function (index) {
    return this.y33_1.cr(index);
  };
  protoOf(JsonObjectDescriptor).uq = function () {
    return this.y33_1.uq();
  };
  protoOf(JsonObjectDescriptor).mq = function () {
    return this.y33_1.mq();
  };
  protoOf(JsonObjectDescriptor).vq = function () {
    return this.y33_1.vq();
  };
  protoOf(JsonObjectDescriptor).wq = function () {
    return this.y33_1.wq();
  };
  protoOf(JsonObjectDescriptor).xq = function () {
    return this.y33_1.xq();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.r33_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).lp = function () {
    return this.r33_1;
  };
  protoOf(JsonObjectSerializer).a34 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).mp(encoder, value);
  };
  protoOf(JsonObjectSerializer).mp = function (encoder, value) {
    return this.a34(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).np = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).np(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.o33_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).lp = function () {
    return this.o33_1;
  };
  protoOf(JsonPrimitiveSerializer).b34 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.fu(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.fu(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).mp = function (encoder, value) {
    return this.b34(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).np = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.r32();
    if (!(result instanceof JsonPrimitive)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.t32().d30_1.n32_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.p33_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).lp = function () {
    return this.p33_1;
  };
  protoOf(JsonNullSerializer).c34 = function (encoder, value) {
    verify(encoder);
    encoder.it();
  };
  protoOf(JsonNullSerializer).mp = function (encoder, value) {
    return this.c34(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).np = function (decoder) {
    verify_0(decoder);
    if (decoder.yr()) {
      throw decodingExceptionOf("Expected 'null' literal");
    }
    decoder.zr();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.q33_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).lp = function () {
    return this.q33_1;
  };
  protoOf(JsonLiteralSerializer).d34 = function (encoder, value) {
    verify(encoder);
    if (value.f33_1) {
      return encoder.rt(value.h33_1);
    }
    if (!(value.g33_1 == null)) {
      return encoder.tt(value.g33_1).rt(value.h33_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.h33_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.nt(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.h33_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).vo_1;
      var tmp_1 = encoder.tt(serializer_0(Companion_getInstance()).lp());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$4 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.nt(tmp$ret$4);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.h33_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.pt(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.h33_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.jt(tmp3_safe_receiver);
    }
    encoder.rt(value.h33_1);
  };
  protoOf(JsonLiteralSerializer).mp = function (encoder, value) {
    return this.d34(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).np = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.r32();
    if (!(result instanceof JsonLiteral)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.t32().d30_1.n32_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    var tmp0 = $this.e34_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
    return tmp0.n1();
  }
  function defer$o$_get_original_$ref_3cje7k() {
    return constructCallableReference(function (p0) {
      return _get_original__l7ku1m(p0);
    }, 1, 0, 22);
  }
  function defer$1($deferred) {
    this.e34_1 = lazy($deferred);
  }
  protoOf(defer$1).tq = function () {
    return _get_original__l7ku1m(this).tq();
  };
  protoOf(defer$1).uq = function () {
    return _get_original__l7ku1m(this).uq();
  };
  protoOf(defer$1).wq = function () {
    return _get_original__l7ku1m(this).wq();
  };
  protoOf(defer$1).yq = function (index) {
    return _get_original__l7ku1m(this).yq(index);
  };
  protoOf(defer$1).zq = function (name) {
    return _get_original__l7ku1m(this).zq(name);
  };
  protoOf(defer$1).ar = function (index) {
    return _get_original__l7ku1m(this).ar(index);
  };
  protoOf(defer$1).br = function (index) {
    return _get_original__l7ku1m(this).br(index);
  };
  protoOf(defer$1).cr = function (index) {
    return _get_original__l7ku1m(this).cr(index);
  };
  function JsonEncoder() {
  }
  function JsonDecodingException(fullMessage, shortMessage, offset, path, input, hint, cause) {
    cause = cause === VOID ? null : cause;
    JsonException.call(this, fullMessage, cause);
    captureStack(this, JsonDecodingException);
    this.h34_1 = shortMessage;
    this.i34_1 = offset;
    this.j34_1 = path;
    this.k34_1 = input;
    this.l34_1 = hint;
  }
  function JsonException(message, cause) {
    SerializationException_init_$Init$(message, cause, this);
    captureStack(this, JsonException);
    this.j33_1 = message;
    delete this.message;
  }
  protoOf(JsonException).e = function () {
    return this.j33_1;
  };
  function JsonEncodingException(shortMessage, classSerialName, hint, cause) {
    classSerialName = classSerialName === VOID ? null : classSerialName;
    hint = hint === VOID ? null : hint;
    cause = cause === VOID ? null : cause;
    JsonException.call(this, formatEncodingException(shortMessage, hint), cause);
    captureStack(this, JsonEncodingException);
    this.n34_1 = shortMessage;
    this.o34_1 = classSerialName;
    this.p34_1 = hint;
  }
  function Composer(writer) {
    this.q34_1 = writer;
    this.r34_1 = true;
  }
  protoOf(Composer).s34 = function () {
    this.r34_1 = true;
  };
  protoOf(Composer).t34 = function () {
    return Unit_instance;
  };
  protoOf(Composer).u34 = function () {
    this.r34_1 = false;
  };
  protoOf(Composer).v34 = function () {
    this.r34_1 = false;
  };
  protoOf(Composer).w34 = function () {
    return Unit_instance;
  };
  protoOf(Composer).x34 = function (v) {
    return this.q34_1.y34(v);
  };
  protoOf(Composer).z34 = function (v) {
    return this.q34_1.a35(v);
  };
  protoOf(Composer).b35 = function (v) {
    return this.q34_1.a35(v.toString());
  };
  protoOf(Composer).c35 = function (v) {
    return this.q34_1.a35(v.toString());
  };
  protoOf(Composer).d35 = function (v) {
    return this.q34_1.e35(fromInt(v));
  };
  protoOf(Composer).f35 = function (v) {
    return this.q34_1.e35(fromInt(v));
  };
  protoOf(Composer).g35 = function (v) {
    return this.q34_1.e35(fromInt(v));
  };
  protoOf(Composer).h35 = function (v) {
    return this.q34_1.e35(v);
  };
  protoOf(Composer).i35 = function (v) {
    return this.q34_1.a35(v.toString());
  };
  protoOf(Composer).j35 = function (value) {
    return this.q34_1.k35(value);
  };
  function Composer_0(sb, json) {
    return json.d30_1.a32_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.n35_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).g35 = function (v) {
    if (this.n35_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.j35(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.z34(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).h35 = function (v) {
    if (this.n35_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.j35(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.z34(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).d35 = function (v) {
    if (this.n35_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.j35(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.z34(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).f35 = function (v) {
    if (this.n35_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.j35(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.z34(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.q35_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).j35 = function (value) {
    if (this.q35_1) {
      protoOf(Composer).j35.call(this, value);
    } else {
      protoOf(Composer).z34.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.t35_1 = json;
    this.u35_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).s34 = function () {
    this.r34_1 = true;
    this.u35_1 = this.u35_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).t34 = function () {
    this.u35_1 = this.u35_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).u34 = function () {
    this.r34_1 = false;
    this.z34('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.u35_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.z34(this.t35_1.d30_1.c32_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).v34 = function () {
    if (this.r34_1)
      this.r34_1 = false;
    else {
      this.u34();
    }
  };
  protoOf(ComposerWithPrettyPrint).w34 = function () {
    this.x34(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.w35_1 = (!descriptor.cr(index) && descriptor.br(index).mq());
    return $this.w35_1;
  }
  function JsonElementMarker$readIfAbsent$ref(p0) {
    return constructCallableReference(function (p0_0, p1) {
      var tmp0 = p0;
      return readIfAbsent(tmp0, p0_0, p1);
    }, 2, 0, 23, 'readIfAbsent', [p0]);
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.v35_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.w35_1 = false;
  }
  protoOf(JsonElementMarker).x35 = function (index) {
    this.v35_1.oy(index);
  };
  protoOf(JsonElementMarker).y35 = function () {
    return this.v35_1.py();
  };
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp2 = coerceAtLeast(start_0, 0);
    // Inline function 'kotlin.text.substring' call
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex_0)) + suffix;
  }
  function access$formatDecodingException$tJsonExceptionsKt(offset, shortMessage, path, hint, input) {
    return formatDecodingException(offset, shortMessage, path, hint, input);
  }
  function decodingExceptionOf(shortMessage, hint) {
    hint = hint === VOID ? null : hint;
    return new JsonDecodingException(formatDecodingException(-1, shortMessage, null, hint, null), shortMessage, -1, null, null, hint);
  }
  function formatDecodingException(offset, shortMessage, path, hint, input) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if (offset >= 0) {
      this_0.q('Unexpected JSON token at offset ' + offset + ': ');
    }
    this_0.q(shortMessage);
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(path == null || isBlank(path))) {
      this_0.q(' at path: ');
      this_0.q(path);
    }
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(hint == null || isBlank(hint))) {
      this_0.q('\n' + hint);
    }
    if (!(input == null)) {
      this_0.q('\nJSON input: ');
      this_0.q(input);
    }
    return this_0.toString();
  }
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.z35('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.w30_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.a36(nonFiniteFpMessage(result, null), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function InvalidFloatingPointEncoded(value, key) {
    key = key === VOID ? null : key;
    return new JsonEncodingException(nonFiniteFpMessage(value, key), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.tq() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.uq().toString() + "'"), keyDescriptor.tq(), "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function access$nonFiniteFpMessage$tJsonExceptionsKt(value, key) {
    return nonFiniteFpMessage(value, key);
  }
  function decodingExceptionOf_0(_this__u8e3s4, shortMessage, offset, path, hint, input, cause) {
    cause = cause === VOID ? null : cause;
    // Inline function 'kotlinx.serialization.json.internal.ifDebugInput' call
    var tmp;
    if (_this__u8e3s4.v30_1.n32_1) {
      tmp = toString(minify(input, offset));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    return new JsonDecodingException(formatDecodingException(offset, shortMessage, path, hint, inputValue), shortMessage, offset, path, inputValue, hint, cause);
  }
  function formatEncodingException(shortMessage, hint) {
    var tmp;
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (hint == null || isBlank(hint)) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    return shortMessage + tmp;
  }
  function nonFiniteFpMessage(value, key) {
    return 'Unexpected special floating-point value ' + toString(value) + (!(key == null) ? ' with key ' + key + '. ' : '. ') + 'By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification.';
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  function ignoreUnknownKeys(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp;
    if (json.d30_1.x31_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.xq();
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.r();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element instanceof JsonIgnoreUnknownKeys) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$0);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.zq(name);
    if (!(index === -3))
      return index;
    if (!json.d30_1.h32_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.tq() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.yq(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function getJsonEncodedNames(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? jsonCachedSerialNames(_this__u8e3s4) : toSet(serializationNamesIndices(_this__u8e3s4, json, strategy));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.d30_1.j32_1 && equals(descriptor.uq(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).t2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.uq(), CLASS_getInstance()) ? json.d30_1.i32_1 : null;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.c36(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.c36(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.wq();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.ar(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element instanceof JsonNames) {
            destination.c1(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d36_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp1_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp1_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.yq(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.e36(_this__u8e3s4, i, _this__u8e3s4.yq(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.r()) {
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      // Inline function 'kotlin.collections.mutableSetOf' call
      var trackingSet = LinkedHashSet_init_$Create$();
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.wq();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.yq(tmp_2);
        var name = $strategy.e36($this_serializationNamesIndices, tmp_2, baseName);
        if (!trackingSet.c1(name))
          throw new JsonEncodingException("The transformed name '" + name + "' for property " + baseName + ' already exists ' + ('in ' + toString($this_serializationNamesIndices)), $this_serializationNamesIndices.tq());
        tmp_1[tmp_2] = name;
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.uq(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).r2(name)) {
      throw decodingExceptionOf("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.yq(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.yq(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.a3(name, index);
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function RedactedKey() {
  }
  var RedactedKey_instance;
  function RedactedKey_getInstance() {
    return RedactedKey_instance;
  }
  function resize($this) {
    var newSize = imul($this.j36_1, 2);
    $this.h36_1 = copyOf($this.h36_1, newSize);
    var tmp = 0;
    var tmp_0 = new Int32Array(newSize);
    while (tmp < newSize) {
      tmp_0[tmp] = -1;
      tmp = tmp + 1 | 0;
    }
    var newIndices = tmp_0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.i36_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
    $this.i36_1 = newIndices;
  }
  function JsonPath(configuration) {
    this.f36_1 = configuration.o32_1;
    this.g36_1 = configuration.n32_1;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.h36_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.i36_1 = tmp_2;
    this.j36_1 = -1;
  }
  protoOf(JsonPath).k36 = function (sd) {
    this.j36_1 = this.j36_1 + 1 | 0;
    var depth = this.j36_1;
    if (depth >= this.f36_1) {
      jsonTooNested(this.f36_1);
    }
    if (depth === this.h36_1.length) {
      resize(this);
    }
    this.h36_1[depth] = sd;
  };
  protoOf(JsonPath).l36 = function (index) {
    this.i36_1[this.j36_1] = index;
  };
  protoOf(JsonPath).m36 = function (key) {
    var tmp;
    if (!(this.i36_1[this.j36_1] === -2)) {
      this.j36_1 = this.j36_1 + 1 | 0;
      tmp = this.j36_1 === this.h36_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.h36_1[this.j36_1] = this.g36_1 ? key : RedactedKey_instance;
    this.i36_1[this.j36_1] = -2;
  };
  protoOf(JsonPath).n36 = function () {
    if (this.i36_1[this.j36_1] === -2) {
      this.h36_1[this.j36_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).o36 = function () {
    var depth = this.j36_1;
    if (this.i36_1[depth] === -2) {
      this.i36_1[depth] = -1;
      this.j36_1 = this.j36_1 - 1 | 0;
    }
    if (!(this.j36_1 === -1)) {
      this.j36_1 = this.j36_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).p36 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q('$');
    // Inline function 'kotlin.repeat' call
    var times = this.j36_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.h36_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.uq(), LIST_getInstance())) {
            if (!(this.i36_1[index] === -1)) {
              this_0.q('[');
              this_0.jc(this.i36_1[index]);
              this_0.q(']');
            }
          } else {
            var idx = this.i36_1[index];
            if (idx >= 0) {
              this_0.q('.');
              this_0.q(element.yq(idx));
            }
          }
        } else {
          if (element === RedactedKey_instance) {
            this_0.q('[<debug info disabled>]');
          } else {
            if (!(element === Tombstone_instance)) {
              this_0.q('[');
              this_0.q("'");
              this_0.w(element);
              this_0.q("'");
              this_0.q(']');
            }
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.p36();
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.xq().t();
    while (_iterator__ex2g4s.u()) {
      var annotation = _iterator__ex2g4s.v();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.q36_1;
    }
    return json.d30_1.f32_1;
  }
  function subtypeNotRegisteredMessageJson(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.o() + "'";
    var tmp;
    if (subClassName == null) {
      tmp = to('Class discriminator was missing and no default serializers were registered ' + scope, null);
    } else {
      tmp = to("Serializer for subclass '" + subClassName + "' is not found " + scope, "Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n" + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.o() + "' has to be sealed and '@Serializable'."));
    }
    return tmp;
  }
  function throwJsonElementPolymorphicException(serialName, element) {
    var tmp0_shortMessage = 'Class with serial name ' + serialName + ' cannot be serialized polymorphically because it is represented as ' + getKClassFromExpression(element).o() + '.';
    throw new JsonEncodingException(tmp0_shortMessage, serialName, 'Make sure that its JsonTransformingSerializer returns JsonObject, so class discriminator can be added to it.');
  }
  function access$checkEncodingConflicts$tJsonPolymorphicHelpersKt($receiver, serializer, actualSerializer, classDiscriminator) {
    return checkEncodingConflicts($receiver, serializer, actualSerializer, classDiscriminator);
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function checkEncodingConflicts(_this__u8e3s4, serializer, actualSerializer, classDiscriminator) {
    if (getJsonEncodedNames(actualSerializer.lp(), _this__u8e3s4).j2(classDiscriminator)) {
      var baseName = serializer.lp().tq();
      var actualName = actualSerializer.lp().tq();
      var text = _this__u8e3s4.d30_1.m32_1.equals(ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance()) && baseName === actualName ? 'in ALL_JSON_OBJECTS class discriminator mode' : "as base class '" + baseName + "'";
      var tmp0_shortMessage = "Class '" + actualName + "' cannot be serialized " + text + ' because' + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'.");
      var tmp1_hint = 'You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.';
      throw new JsonEncodingException(tmp0_shortMessage, actualName, tmp1_hint);
    }
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.uq();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.r36_1)
      return Unit_instance;
    if (!$this.s36_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function JsonSerializersModuleValidator(configuration) {
    this.r36_1 = configuration.e32_1;
    this.s36_1 = !configuration.m32_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).m19 = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).p19 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.lp();
    checkKind_0(this, descriptor, actualClass);
  };
  protoOf(JsonSerializersModuleValidator).q19 = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).r19 = function (baseClass, defaultDeserializerProvider) {
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = LexerMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().e1();
    var tmp$ret$0 = Array(size);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.fu(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.c37_1.h37(6);
    if ($this.c37_1.i37() === 4) {
      $this.c37_1.a36('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.c37_1.j37()) {
      var key = $this.d37_1 ? $this.c37_1.l37() : $this.c37_1.k37();
      $this.c37_1.h37(5);
      var element = $this.m37();
      // Inline function 'kotlin.collections.set' call
      result.a3(key, element);
      lastToken = $this.c37_1.n37();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.c37_1.a36('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.c37_1.h37(7);
    } else if (lastToken === 4) {
      if (!$this.e37_1) {
        invalidTrailingComma($this.c37_1);
      }
      $this.c37_1.h37(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, $receiver, $completion) {
    var tmp = new $readObjectCOROUTINE$($this, $receiver, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function readArray($this) {
    var lastToken = $this.c37_1.n37();
    if ($this.c37_1.i37() === 4) {
      $this.c37_1.a36('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.c37_1.j37()) {
      var element = $this.m37();
      result.c1(element);
      lastToken = $this.c37_1.n37();
      if (!(lastToken === 4)) {
        var tmp0 = $this.c37_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.w30_1;
        if (!condition) {
          var tmp$ret$2 = 'Expected end of the array or comma';
          tmp0.a36(tmp$ret$2, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.c37_1.h37(9);
    } else if (lastToken === 4) {
      if (!$this.e37_1) {
        invalidTrailingComma($this.c37_1, 'array');
      }
      $this.c37_1.h37(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.d37_1 || !isString) {
      tmp = $this.c37_1.l37();
    } else {
      tmp = $this.c37_1.k37();
    }
    var string = tmp;
    if (!isString && string === 'null')
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.k38_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).p38 = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.q38($this$DeepRecursiveFunction, it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.p38(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            var tmp0_subject = this.k38_1.c37_1.i37();
            if (tmp0_subject === 1) {
              this.n38_1 = readValue(this.k38_1, true);
              this.o8_1 = 2;
              continue $sm;
            } else {
              if (tmp0_subject === 0) {
                this.n38_1 = readValue(this.k38_1, false);
                this.o8_1 = 2;
                continue $sm;
              } else {
                if (tmp0_subject === 6) {
                  this.o38_1 = this.k38_1;
                  this.o38_1.g37_1 = this.o38_1.g37_1 + 1 | 0;
                  if (this.o38_1.g37_1 >= this.o38_1.f37_1) {
                    jsonTooNested(this.o38_1.f37_1);
                  }
                  this.o8_1 = 1;
                  suspendResult = readObject_0(this.k38_1, this.l38_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject === 8) {
                    var tmp_0 = this;
                    var this_0 = this.k38_1;
                    this_0.g37_1 = this_0.g37_1 + 1 | 0;
                    if (this_0.g37_1 >= this_0.f37_1) {
                      jsonTooNested(this_0.f37_1);
                    }
                    var result = readArray(this.k38_1);
                    this_0.g37_1 = this_0.g37_1 - 1 | 0;
                    tmp_0.n38_1 = result;
                    this.o8_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_1 = this;
                    this.k38_1.c37_1.a36("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            var result_0 = suspendResult;
            this.o38_1.g37_1 = this.o38_1.g37_1 - 1 | 0;
            this.n38_1 = result_0;
            this.o8_1 = 2;
            continue $sm;
          case 2:
            return this.n38_1;
          case 3:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 3) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).q38 = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.k38_1, completion);
    i.l38_1 = $this$DeepRecursiveFunction;
    i.m38_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$DeepRecursiveFunction, it, $completion) {
      return i.p38($this$DeepRecursiveFunction, it, $completion);
    }, 2);
  }
  function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w37_1 = _this__u8e3s4;
    this.x37_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 5;
            this.z37_1 = this.w37_1;
            this.a38_1 = this.z37_1.c37_1.h37(6);
            if (this.z37_1.c37_1.i37() === 4) {
              this.z37_1.c37_1.a36('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.y37_1 = LinkedHashMap_init_$Create$();
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!this.z37_1.c37_1.j37()) {
              this.o8_1 = 4;
              continue $sm;
            }

            this.b38_1 = this.z37_1.d37_1 ? this.z37_1.c37_1.l37() : this.z37_1.c37_1.k37();
            this.z37_1.c37_1.h37(5);
            this.o8_1 = 2;
            suspendResult = this.x37_1.dn(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.y37_1;
            var key = this.b38_1;
            tmp0.a3(key, element);
            this.a38_1 = this.z37_1.c37_1.n37();
            var tmp0_subject = this.a38_1;
            if (tmp0_subject === 4) {
              this.o8_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.o8_1 = 4;
                continue $sm;
              } else {
                this.z37_1.c37_1.a36('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.o8_1 = 1;
            continue $sm;
          case 4:
            if (this.a38_1 === 6) {
              this.z37_1.c37_1.h37(7);
            } else if (this.a38_1 === 4) {
              if (!this.z37_1.e37_1) {
                invalidTrailingComma(this.z37_1.c37_1);
              }
              this.z37_1.c37_1.h37(7);
            }

            return new JsonObject(this.y37_1);
          case 5:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 5) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.c37_1 = lexer;
    this.d37_1 = configuration.y31_1;
    this.e37_1 = configuration.k32_1;
    this.f37_1 = configuration.o32_1;
    this.g37_1 = this.c37_1.x30_1.j36_1;
  }
  protoOf(JsonTreeReader).m37 = function () {
    var token = this.c37_1.i37();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      this.g37_1 = this.g37_1 + 1 | 0;
      if (this.g37_1 >= this.f37_1) {
        jsonTooNested(this.f37_1);
      }
      var result;
      if (this.g37_1 === 200) {
        this.g37_1 = this.g37_1 - 1 | 0;
        result = readDeepRecursive(this);
      } else {
        result = readObject(this);
        this.g37_1 = this.g37_1 - 1 | 0;
      }
      tmp = result;
    } else if (token === 8) {
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.withDepthControl' call
      this.g37_1 = this.g37_1 + 1 | 0;
      if (this.g37_1 >= this.f37_1) {
        jsonTooNested(this.f37_1);
      }
      var result_0 = readArray(this);
      this.g37_1 = this.g37_1 - 1 | 0;
      tmp = result_0;
    } else {
      this.c37_1.a36('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function jsonTooNested(maxStackDepth) {
    throw decodingExceptionOf('Json input is too nested and may be impossible to parse without stack overflow.', 'Current nesting limit is ' + maxStackDepth + ". To adjust it, use 'maxNestingDepth' in 'Json {}' builder.");
  }
  var static_init_called_0;
  function static_init_0() {
    if (static_init_called_0)
      return Unit_instance;
    static_init_called_0 = true;
    LexerMode_OBJ_instance = new LexerMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    LexerMode_LIST_instance = new LexerMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
    LexerMode_MAP_instance = new LexerMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    LexerMode_POLY_OBJ_instance = new LexerMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  }
  var LexerMode_OBJ_instance;
  var LexerMode_LIST_instance;
  var LexerMode_MAP_instance;
  var LexerMode_POLY_OBJ_instance;
  function values() {
    static_init_0();
    return [LexerMode_OBJ_getInstance(), LexerMode_LIST_getInstance(), LexerMode_MAP_getInstance(), LexerMode_POLY_OBJ_getInstance()];
  }
  function get_entries() {
    static_init_0();
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var $ENTRIES;
  function LexerMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.t38_1 = begin;
    this.u38_1 = end;
  }
  function modeFor(_this__u8e3s4, desc) {
    var tmp0_subject = desc.uq();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = LexerMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = LexerMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.br(0), _this__u8e3s4.ct());
          var keyKind = keyDescriptor.uq();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            tmp_0 = LexerMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.d30_1.z31_1) {
              tmp_0 = LexerMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = LexerMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.uq(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.vq()) {
      tmp = carrierDescriptor(_this__u8e3s4.br(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function LexerMode_OBJ_getInstance() {
    static_init_0();
    return LexerMode_OBJ_instance;
  }
  function LexerMode_LIST_getInstance() {
    static_init_0();
    return LexerMode_LIST_instance;
  }
  function LexerMode_MAP_getInstance() {
    static_init_0();
    return LexerMode_MAP_instance;
  }
  function LexerMode_POLY_OBJ_getInstance() {
    static_init_0();
    return LexerMode_POLY_OBJ_instance;
  }
  function PolymorphicJsonDecoder() {
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.b36_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).w38 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.b36_1;
    var value_0 = this_0.t2(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.a3(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.a3(tmp2, value_1);
  };
  protoOf(DescriptorSchemaCache).c36 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.x38(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.w38(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).x38 = function (descriptor, key) {
    var tmp0_safe_receiver = this.b36_1.t2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.t2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.y38_1 = discriminatorToSkip;
  }
  function trySkip($this, $receiver, unknownKey) {
    if ($receiver == null)
      return false;
    if ($receiver.y38_1 === unknownKey) {
      $receiver.y38_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.et(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.p30_1.i37() === 4) {
      $this.p30_1.a36('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.r30_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.r30_1 === -1)) {
        hasComma = $this.p30_1.a39();
      }
    } else {
      $this.p30_1.z38(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.p30_1.j37()) {
      if (decodingKey) {
        if ($this.r30_1 === -1) {
          var tmp0 = $this.p30_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.w30_1;
          if (!condition) {
            var tmp$ret$1 = 'Unexpected leading comma';
            tmp0.a36(tmp$ret$1, position);
          }
        } else {
          var tmp0_0 = $this.p30_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp0_0.w30_1;
          if (!condition_0) {
            var tmp$ret$3 = 'Expected comma after the key-value pair';
            tmp0_0.a36(tmp$ret$3, position_0);
          }
        }
      }
      $this.r30_1 = $this.r30_1 + 1 | 0;
      tmp = $this.r30_1;
    } else {
      if (hasComma && !$this.n30_1.d30_1.k32_1) {
        invalidTrailingComma($this.p30_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.n30_1;
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.cr(index);
      var elementDescriptor = descriptor.br(index);
      var tmp;
      if (isOptional && !elementDescriptor.mq()) {
        tmp = $this.p30_1.b39(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.uq(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.mq()) {
          tmp_0 = $this.p30_1.b39(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.p30_1.c39($this.t30_1.y31_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.d30_1.b32_1 && elementDescriptor.mq();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.p30_1.k37();
          tmp$ret$0 = true;
          break $l$block_2;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.p30_1.a39();
    while ($this.p30_1.j37()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.p30_1.z38(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.n30_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.t30_1.d32_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.p30_1.a39();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.u30_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.x35(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, descriptor, key);
      }
    }
    if (hasComma && !$this.n30_1.d30_1.k32_1) {
      invalidTrailingComma($this.p30_1);
    }
    var tmp1_safe_receiver = $this.u30_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y35();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.n30_1) || trySkip($this, $this.s30_1, key)) {
      $this.p30_1.e39($this.t30_1.y31_1);
    } else {
      $this.p30_1.x30_1.o36();
      $this.p30_1.d39(key);
    }
    return $this.p30_1.a39();
  }
  function decodeListIndex($this) {
    var hasComma = $this.p30_1.a39();
    var tmp;
    if ($this.p30_1.j37()) {
      if (!($this.r30_1 === -1) && !hasComma) {
        $this.p30_1.a36('Expected end of the array or comma');
      }
      $this.r30_1 = $this.r30_1 + 1 | 0;
      tmp = $this.r30_1;
    } else {
      if (hasComma && !$this.n30_1.d30_1.k32_1) {
        invalidTrailingComma($this.p30_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.t30_1.y31_1) {
      tmp = $this.p30_1.g39();
    } else {
      tmp = $this.p30_1.f39();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.n30_1 = json;
    this.o30_1 = mode;
    this.p30_1 = lexer;
    this.q30_1 = this.n30_1.ct();
    this.r30_1 = -1;
    this.s30_1 = discriminatorHolder;
    this.t30_1 = this.n30_1.d30_1;
    this.u30_1 = this.t30_1.b32_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).t32 = function () {
    return this.n30_1;
  };
  protoOf(StreamingJsonDecoder).ct = function () {
    return this.q30_1;
  };
  protoOf(StreamingJsonDecoder).v38 = function () {
    var tmp0_safe_receiver = this.s30_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y38_1;
  };
  protoOf(StreamingJsonDecoder).r32 = function () {
    return (new JsonTreeReader(this.n30_1.d30_1, this.p30_1)).m37();
  };
  protoOf(StreamingJsonDecoder).ms = function (deserializer) {
    var tmp2_withExceptionHandling_this = this.p30_1.x30_1;
    var tmp3_withExceptionHandling_this = this.p30_1;
    // Inline function 'kotlinx.serialization.json.internal.withExceptionHandling' call
    var tmp;
    try {
      var tmp_0;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp_0 = true;
      } else {
        tmp_0 = this.n30_1.d30_1.e32_1;
      }
      if (tmp_0) {
        return deserializer.np(this);
      }
      var discriminator = classDiscriminator(deserializer.lp(), this.n30_1);
      var tmp0_elvis_lhs = this.p30_1.h39(discriminator, this.t30_1.y31_1);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$2;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_2;
          if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
            tmp_2 = true;
          } else {
            tmp_2 = this.t32().d30_1.e32_1;
          }
          if (tmp_2) {
            tmp$ret$2 = tmp2.np(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.lp(), this.t32());
          var tmp2_0 = this.r32();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.lp().tq();
          if (!(tmp2_0 instanceof JsonObject)) {
            var tmp2_1 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2_0).o() + ' as the serialized body of ' + serialName;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path = this.p30_1.x30_1.p36();
            var tmp_3;
            if (this.t32().d30_1.n32_1) {
              var tmp$ret$8 = toString(tmp2_0);
              tmp_3 = toString(minify(tmp$ret$8));
            } else {
              tmp_3 = null;
            }
            var inputValue = tmp_3;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path, null, inputValue), tmp2_1, -1, path, inputValue, null);
          }
          var jsonTree = tmp2_0;
          var tmp0_safe_receiver = jsonTree.k2e(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_4 = tmp2.cq(this, type);
          var actualSerializer = (!(tmp_4 == null) ? isInterface(tmp_4, DeserializationStrategy) : false) ? tmp_4 : null;
          if (actualSerializer == null) {
            var _destruct__k2r9zo = subtypeNotRegisteredMessageJson(type, tmp2.aq());
            var message = _destruct__k2r9zo.ag();
            var hint = _destruct__k2r9zo.bg();
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path_0 = this.p30_1.x30_1.p36();
            var tmp_5;
            if (this.t32().d30_1.n32_1) {
              var tmp$ret$13 = jsonTree.toString();
              tmp_5 = toString(minify(tmp$ret$13));
            } else {
              tmp_5 = null;
            }
            var inputValue_0 = tmp_5;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, message, path_0, hint, inputValue_0), message, -1, path_0, inputValue_0, hint);
          }
          tmp$ret$2 = readPolymorphicJson(this.t32(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_1;
      var tmp_6 = deserializer.cq(this, type_0);
      var actualSerializer_0 = (!(tmp_6 == null) ? isInterface(tmp_6, DeserializationStrategy) : false) ? tmp_6 : null;
      if (actualSerializer_0 == null) {
        var _destruct__k2r9zo_0 = subtypeNotRegisteredMessageJson(type_0, deserializer.aq());
        var message_0 = _destruct__k2r9zo_0.ag();
        var hint_0 = _destruct__k2r9zo_0.bg();
        this.p30_1.a36(message_0, VOID, hint_0);
      }
      this.s30_1 = new DiscriminatorHolder(discriminator);
      tmp = actualSerializer_0.np(this);
    } catch ($p) {
      var tmp_7;
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        var tmp_8 = plus(e.message, ' at path: ');
        var tmp$ret$14 = tmp2_withExceptionHandling_this.p36();
        throw missingFieldExceptionWithNewMessage(e, tmp_8 + tmp$ret$14);
      } else {
        if ($p instanceof SerializationException) {
          var e_0 = $p;
          throw e_0;
        } else {
          if ($p instanceof Exception) {
            var e_1 = $p;
            // Inline function 'kotlinx.serialization.json.internal.errorFromDeserializer' call
            var path_1 = tmp2_withExceptionHandling_this.p36();
            var causeMessage = e_1.message;
            var shortMessage = 'Deserialization failed because of ' + (causeMessage == null ? 'an exception' : "'" + causeMessage + "' exception") + ' in the decoder';
            var tmp_9;
            if (this.t32().d30_1.n32_1) {
              var tmp$ret$19 = tmp3_withExceptionHandling_this.i39();
              tmp_9 = toString(minify(tmp$ret$19));
            } else {
              tmp_9 = null;
            }
            var inputValue_1 = tmp_9;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, path_1, null, inputValue_1), shortMessage, -1, path_1, inputValue_1, null, e_1);
          } else {
            throw $p;
          }
        }
      }
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).ns = function (descriptor) {
    var newMode = modeFor(this.n30_1, descriptor);
    this.p30_1.x30_1.k36(descriptor);
    this.p30_1.z38(newMode.t38_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.a1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.n30_1, newMode, this.p30_1, descriptor, this.s30_1);
        break;
      default:
        var tmp_0;
        if (this.o30_1.equals(newMode) && this.n30_1.d30_1.b32_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.n30_1, newMode, this.p30_1, descriptor, this.s30_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).os = function (descriptor) {
    if (descriptor.wq() === 0 && ignoreUnknownKeys(descriptor, this.n30_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.p30_1.a39() && !this.n30_1.d30_1.k32_1) {
      invalidTrailingComma(this.p30_1, '');
    }
    this.p30_1.z38(this.o30_1.u38_1);
    this.p30_1.x30_1.o36();
  };
  protoOf(StreamingJsonDecoder).yr = function () {
    var tmp;
    var tmp0_safe_receiver = this.u30_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w35_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.p30_1.j39();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).zr = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).zs = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.o30_1.equals(LexerMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.p30_1.x30_1.n36();
    }
    var value = protoOf(AbstractDecoder).zs.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.p30_1.x30_1.m36(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).et = function (descriptor) {
    var index;
    switch (this.o30_1.a1_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.o30_1.equals(LexerMode_MAP_getInstance())) {
      this.p30_1.x30_1.l36(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).as = function () {
    return this.p30_1.k39();
  };
  protoOf(StreamingJsonDecoder).bs = function () {
    var value = this.p30_1.l39();
    if (!equalsLong(value, fromInt(convertToByte(value)))) {
      this.p30_1.a36("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  };
  protoOf(StreamingJsonDecoder).cs = function () {
    var value = this.p30_1.l39();
    if (!equalsLong(value, fromInt(convertToShort(value)))) {
      this.p30_1.a36("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  };
  protoOf(StreamingJsonDecoder).ds = function () {
    var value = this.p30_1.l39();
    if (!equalsLong(value, fromInt(convertToInt(value)))) {
      this.p30_1.a36("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  };
  protoOf(StreamingJsonDecoder).es = function () {
    return this.p30_1.l39();
  };
  protoOf(StreamingJsonDecoder).fs = function () {
    var tmp0 = this.p30_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.l37();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.a36("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.n30_1.d30_1.g32_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.p30_1, result);
  };
  protoOf(StreamingJsonDecoder).gs = function () {
    var tmp0 = this.p30_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.l37();
      try {
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.a36("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.n30_1.d30_1.g32_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.p30_1, result);
  };
  protoOf(StreamingJsonDecoder).hs = function () {
    var string = this.p30_1.l37();
    if (!(string.length === 1)) {
      this.p30_1.a36("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  };
  protoOf(StreamingJsonDecoder).is = function () {
    var tmp;
    if (this.t30_1.y31_1) {
      tmp = this.p30_1.g39();
    } else {
      tmp = this.p30_1.k37();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).ks = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.p30_1, this.n30_1) : protoOf(AbstractDecoder).ks.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).js = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.n30_1, this.is(), ' at path ' + this.p30_1.x30_1.p36());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.m39_1 = lexer;
    this.n39_1 = json.ct();
  }
  protoOf(JsonDecoderForUnsignedTypes).ct = function () {
    return this.n39_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).et = function (descriptor) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).ds = function () {
    var tmp0 = this.m39_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.l37();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.a36("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).es = function () {
    var tmp0 = this.m39_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.l37();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.a36("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).bs = function () {
    var tmp0 = this.m39_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.l37();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.a36("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).cs = function () {
    var tmp0 = this.m39_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.l37();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.a36("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, discriminator, serialName) {
    $this.t36_1.u34();
    $this.rt(discriminator);
    $this.t36_1.x34(_Char___init__impl__6a9atx(58));
    $this.t36_1.w34();
    $this.rt(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.t36_1 = composer;
    this.u36_1 = json;
    this.v36_1 = mode;
    this.w36_1 = modeReuseCache;
    this.x36_1 = this.u36_1.ct();
    this.y36_1 = this.u36_1.d30_1;
    this.z36_1 = false;
    this.a37_1 = null;
    this.b37_1 = null;
    var i = this.v36_1.a1_1;
    if (!(this.w36_1 == null)) {
      if (!(this.w36_1[i] === null) || !(this.w36_1[i] === this)) {
        this.w36_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).t32 = function () {
    return this.u36_1;
  };
  protoOf(StreamingJsonEncoder).ct = function () {
    return this.x36_1;
  };
  protoOf(StreamingJsonEncoder).f34 = function (element) {
    var tmp;
    if (!(this.a37_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.b37_1, element);
    }
    this.fu(JsonElementSerializer_getInstance(), element);
  };
  protoOf(StreamingJsonEncoder).ku = function (descriptor, index) {
    return this.y36_1.w31_1;
  };
  protoOf(StreamingJsonEncoder).fu = function (serializer, value) {
    // Inline function 'kotlinx.serialization.json.internal.withExceptionHandling' call
    var tmp;
    try {
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
        if (this.t32().d30_1.e32_1) {
          serializer.mp(this, value);
          break $l$block;
        }
        var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
        var tmp_0;
        if (isPolymorphicSerializer) {
          tmp_0 = !this.t32().d30_1.m32_1.equals(ClassDiscriminatorMode_NONE_getInstance());
        } else {
          var tmp_1;
          switch (this.t32().d30_1.m32_1.a1_1) {
            case 0:
            case 2:
              tmp_1 = false;
              break;
            case 1:
              // Inline function 'kotlin.let' call

              var it = serializer.lp().uq();
              tmp_1 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp_0 = tmp_1;
        }
        var needDiscriminator = tmp_0;
        var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.lp(), this.t32()) : null;
        var tmp_2;
        if (isPolymorphicSerializer) {
          var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
          $l$block_0: {
            // Inline function 'kotlin.requireNotNull' call
            if (value == null) {
              var message = 'Value for serializer ' + toString(serializer.lp()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            } else {
              break $l$block_0;
            }
          }
          var tmp1_elvis_lhs = casted.dq(this, value);
          var tmp_3;
          if (tmp1_elvis_lhs == null) {
            // Inline function 'kotlin.run' call
            var tmp0_elvis_lhs = getKClassFromExpression(value).o();
            var subClassName = tmp0_elvis_lhs == null ? toString(getKClassFromExpression(value)) : tmp0_elvis_lhs;
            var _destruct__k2r9zo = subtypeNotRegisteredMessageJson(subClassName, casted.aq());
            var message_0 = _destruct__k2r9zo.ag();
            var hint = _destruct__k2r9zo.bg();
            throw new JsonEncodingException(message_0, subClassName, hint);
          } else {
            tmp_3 = tmp1_elvis_lhs;
          }
          var actual = tmp_3;
          tmp_2 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
        } else {
          tmp_2 = serializer;
        }
        var actualSerializer = tmp_2;
        if (!(baseClassDiscriminator == null)) {
          access$checkEncodingConflicts$tJsonPolymorphicHelpersKt(this.t32(), serializer, actualSerializer, baseClassDiscriminator);
          checkKind(actualSerializer.lp().uq());
          var serialName = actualSerializer.lp().tq();
          this.a37_1 = baseClassDiscriminator;
          this.b37_1 = serialName;
        }
        actualSerializer.mp(this, value);
      }
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof SerializationException) {
        var e = $p;
        throw e;
      } else {
        if ($p instanceof Exception) {
          var e_0 = $p;
          var causeMessage = e_0.message;
          var classSerialName = serializer.lp().tq();
          var message_1 = 'Serialization ' + (isBlank(classSerialName) ? '' : "of '" + classSerialName + "' ") + 'failed because of ' + (causeMessage == null ? 'an exception' : "'" + causeMessage + "' exception") + ' in the encoder';
          throw new JsonEncodingException(message_1, classSerialName, VOID, e_0);
        } else {
          throw $p;
        }
      }
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).ns = function (descriptor) {
    var newMode = modeFor(this.u36_1, descriptor);
    if (!(newMode.t38_1 === _Char___init__impl__6a9atx(0))) {
      this.t36_1.x34(newMode.t38_1);
      this.t36_1.s34();
    }
    var discriminator = this.a37_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.b37_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.tq() : tmp0_elvis_lhs);
      this.a37_1 = null;
      this.b37_1 = null;
    }
    if (this.v36_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.w36_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.a1_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.t36_1, this.u36_1, newMode, this.w36_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).os = function (descriptor) {
    if (!(this.v36_1.u38_1 === _Char___init__impl__6a9atx(0))) {
      this.t36_1.t34();
      this.t36_1.v34();
      this.t36_1.x34(this.v36_1.u38_1);
    }
  };
  protoOf(StreamingJsonEncoder).gt = function (descriptor, index) {
    switch (this.v36_1.a1_1) {
      case 1:
        if (!this.t36_1.r34_1) {
          this.t36_1.x34(_Char___init__impl__6a9atx(44));
        }

        this.t36_1.u34();
        break;
      case 2:
        if (!this.t36_1.r34_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.t36_1.x34(_Char___init__impl__6a9atx(44));
            this.t36_1.u34();
            tmp_0 = true;
          } else {
            this.t36_1.x34(_Char___init__impl__6a9atx(58));
            this.t36_1.w34();
            tmp_0 = false;
          }
          tmp.z36_1 = tmp_0;
        } else {
          this.z36_1 = true;
          this.t36_1.u34();
        }

        break;
      case 3:
        if (index === 0)
          this.z36_1 = true;
        if (index === 1) {
          this.t36_1.x34(_Char___init__impl__6a9atx(44));
          this.t36_1.w34();
          this.z36_1 = false;
        }

        break;
      default:
        if (!this.t36_1.r34_1) {
          this.t36_1.x34(_Char___init__impl__6a9atx(44));
        }

        this.t36_1.u34();
        this.rt(getJsonElementName(descriptor, this.u36_1, index));
        this.t36_1.x34(_Char___init__impl__6a9atx(58));
        this.t36_1.w34();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).gu = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.y36_1.b32_1) {
      protoOf(AbstractEncoder).gu.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).tt = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.t36_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.t36_1;
      } else {
        var tmp0 = this.t36_1.q34_1;
        var p1 = this.z36_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
      }
      var tmp$ret$0 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$0, this.u36_1, this.v36_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.t36_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.t36_1;
      } else {
        var tmp0_0 = this.t36_1.q34_1;
        var p1_0 = this.z36_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
      }
      var tmp$ret$2 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$2, this.u36_1, this.v36_1, null);
    } else if (!(this.a37_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.b37_1 = descriptor.tq();
      tmp = this;
    } else {
      tmp = protoOf(AbstractEncoder).tt.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).it = function () {
    this.t36_1.z34('null');
  };
  protoOf(StreamingJsonEncoder).jt = function (value) {
    if (this.z36_1) {
      this.rt(value.toString());
    } else {
      this.t36_1.i35(value);
    }
  };
  protoOf(StreamingJsonEncoder).kt = function (value) {
    if (this.z36_1) {
      this.rt(value.toString());
    } else {
      this.t36_1.d35(value);
    }
  };
  protoOf(StreamingJsonEncoder).lt = function (value) {
    if (this.z36_1) {
      this.rt(value.toString());
    } else {
      this.t36_1.f35(value);
    }
  };
  protoOf(StreamingJsonEncoder).mt = function (value) {
    if (this.z36_1) {
      this.rt(value.toString());
    } else {
      this.t36_1.g35(value);
    }
  };
  protoOf(StreamingJsonEncoder).nt = function (value) {
    if (this.z36_1) {
      this.rt(value.toString());
    } else {
      this.t36_1.h35(value);
    }
  };
  protoOf(StreamingJsonEncoder).ot = function (value) {
    if (this.z36_1) {
      this.rt(value.toString());
    } else {
      this.t36_1.b35(value);
    }
    if (!this.y36_1.g32_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  };
  protoOf(StreamingJsonEncoder).pt = function (value) {
    if (this.z36_1) {
      this.rt(value.toString());
    } else {
      this.t36_1.c35(value);
    }
    if (!this.y36_1.g32_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  };
  protoOf(StreamingJsonEncoder).qt = function (value) {
    this.rt(toString_1(value));
  };
  protoOf(StreamingJsonEncoder).rt = function (value) {
    return this.t36_1.j35(value);
  };
  protoOf(StreamingJsonEncoder).st = function (enumDescriptor, index) {
    this.rt(enumDescriptor.yq(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.vq() && get_unsignedNumberDescriptors().j2(_this__u8e3s4);
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.vq() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).lp(), serializer_0(Companion_getInstance()).lp(), serializer_2(Companion_getInstance_1()).lp(), serializer_3(Companion_getInstance_2()).lp()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.s(_Char___init__impl__6a9atx(34));
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charCodeAt(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
          _this__u8e3s4.gc(value, lastPos, i);
          _this__u8e3s4.q(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.gc(value, lastPos, value.length);
    else
      _this__u8e3s4.q(value);
    _this__u8e3s4.s(_Char___init__impl__6a9atx(34));
  }
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function toBooleanStrictOrNull_0(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.arrayOfNulls' call
      // Inline function 'kotlin.apply' call
      var this_0 = Array(93);
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(128);
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      var tmp = Char__toInt_impl_vasixd(this_8);
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(34);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_9);
      this_7[tmp] = toByte(tmp$ret$3);
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(92);
      var tmp_0 = Char__toInt_impl_vasixd(this_10);
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(92);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_11);
      this_7[tmp_0] = toByte(tmp$ret$5);
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(9);
      var tmp_1 = Char__toInt_impl_vasixd(this_12);
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(116);
      var tmp$ret$7 = Char__toInt_impl_vasixd(this_13);
      this_7[tmp_1] = toByte(tmp$ret$7);
      // Inline function 'kotlin.code' call
      var this_14 = _Char___init__impl__6a9atx(8);
      var tmp_2 = Char__toInt_impl_vasixd(this_14);
      // Inline function 'kotlin.code' call
      var this_15 = _Char___init__impl__6a9atx(98);
      var tmp$ret$9 = Char__toInt_impl_vasixd(this_15);
      this_7[tmp_2] = toByte(tmp$ret$9);
      // Inline function 'kotlin.code' call
      var this_16 = _Char___init__impl__6a9atx(10);
      var tmp_3 = Char__toInt_impl_vasixd(this_16);
      // Inline function 'kotlin.code' call
      var this_17 = _Char___init__impl__6a9atx(110);
      var tmp$ret$11 = Char__toInt_impl_vasixd(this_17);
      this_7[tmp_3] = toByte(tmp$ret$11);
      // Inline function 'kotlin.code' call
      var this_18 = _Char___init__impl__6a9atx(13);
      var tmp_4 = Char__toInt_impl_vasixd(this_18);
      // Inline function 'kotlin.code' call
      var this_19 = _Char___init__impl__6a9atx(114);
      var tmp$ret$13 = Char__toInt_impl_vasixd(this_19);
      this_7[tmp_4] = toByte(tmp$ret$13);
      // Inline function 'kotlin.code' call
      var this_20 = _Char___init__impl__6a9atx(102);
      var tmp$ret$14 = Char__toInt_impl_vasixd(this_20);
      this_7[12] = toByte(tmp$ret$14);
      ESCAPE_MARKERS = this_7;
    }
  }
  function readJson(json, element, deserializer, previousDecoder) {
    previousDecoder = previousDecoder === VOID ? null : previousDecoder;
    var tmp0_safe_receiver = (!(previousDecoder == null) ? isInterface(previousDecoder, PolymorphicJsonDecoder) : false) ? previousDecoder : null;
    var discriminator = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v38();
    var tmp;
    if (element instanceof JsonObject) {
      tmp = new JsonTreeDecoder(json, element, deserializer.lp(), discriminator);
    } else {
      if (element instanceof JsonArray) {
        tmp = new JsonTreeListDecoder(json, element);
      } else {
        var tmp_0;
        if (element instanceof JsonLiteral) {
          tmp_0 = true;
        } else {
          tmp_0 = equals(element, JsonNull_getInstance());
        }
        if (tmp_0) {
          tmp = new JsonPrimitiveDecoder(json, element instanceof JsonPrimitive ? element : THROW_CCE());
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    var input = tmp;
    return input.ms(deserializer);
  }
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    var descriptor = deserializer.lp();
    return (new JsonTreeDecoder(_this__u8e3s4, element, descriptor, discriminator, descriptor)).ms(deserializer);
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    var tmp2 = "Failed to parse literal '" + literal.toString() + "' as " + type + ' value';
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var path = $this.u39(tag);
    var tmp;
    if ($this.t32().d30_1.n32_1) {
      var tmp$ret$3 = toString($this.v39());
      tmp = toString(minify(tmp$ret$3));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.q39_1 = json;
    this.r39_1 = value;
    this.s39_1 = polymorphicDiscriminator;
    this.t39_1 = this.t32().d30_1;
  }
  protoOf(AbstractJsonTreeDecoder).t32 = function () {
    return this.q39_1;
  };
  protoOf(AbstractJsonTreeDecoder).n1 = function () {
    return this.r39_1;
  };
  protoOf(AbstractJsonTreeDecoder).ct = function () {
    return this.t32().ct();
  };
  protoOf(AbstractJsonTreeDecoder).v38 = function () {
    return this.s39_1;
  };
  protoOf(AbstractJsonTreeDecoder).v39 = function () {
    var tmp0_safe_receiver = this.k16();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.w39(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.n1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).u39 = function (currentTag) {
    return this.m16() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).r32 = function () {
    return this.v39();
  };
  protoOf(AbstractJsonTreeDecoder).ms = function (deserializer) {
    var tmp2_withExceptionHandling_this = this.v39();
    // Inline function 'kotlinx.serialization.json.internal.withExceptionHandling' call
    var tmp;
    try {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
        var tmp_0;
        if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
          tmp_0 = true;
        } else {
          tmp_0 = this.t32().d30_1.e32_1;
        }
        if (tmp_0) {
          tmp$ret$2 = deserializer.np(this);
          break $l$block;
        }
        var discriminator = classDiscriminator(deserializer.lp(), this.t32());
        var tmp2 = this.r32();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName = deserializer.lp().tq();
        if (!(tmp2 instanceof JsonObject)) {
          var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path = this.m16();
          var tmp_1;
          if (this.t32().d30_1.n32_1) {
            var tmp$ret$8 = toString(tmp2);
            tmp_1 = toString(minify(tmp$ret$8));
          } else {
            tmp_1 = null;
          }
          var inputValue = tmp_1;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
        }
        var jsonTree = tmp2;
        var tmp0_safe_receiver = jsonTree.k2e(discriminator);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
        var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
        var tmp_2 = deserializer.cq(this, type);
        var actualSerializer = (!(tmp_2 == null) ? isInterface(tmp_2, DeserializationStrategy) : false) ? tmp_2 : null;
        if (actualSerializer == null) {
          var _destruct__k2r9zo = subtypeNotRegisteredMessageJson(type, deserializer.aq());
          var message = _destruct__k2r9zo.ag();
          var hint = _destruct__k2r9zo.bg();
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path_0 = this.m16();
          var tmp_3;
          if (this.t32().d30_1.n32_1) {
            var tmp$ret$13 = jsonTree.toString();
            tmp_3 = toString(minify(tmp$ret$13));
          } else {
            tmp_3 = null;
          }
          var inputValue_0 = tmp_3;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, message, path_0, hint, inputValue_0), message, -1, path_0, inputValue_0, hint);
        }
        tmp$ret$2 = readPolymorphicJson(this.t32(), discriminator, jsonTree, actualSerializer);
      }
      tmp = tmp$ret$2;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        var tmp_5 = plus(e.message, ' at path: ');
        var tmp$ret$14 = this.m16();
        throw missingFieldExceptionWithNewMessage(e, tmp_5 + tmp$ret$14);
      } else {
        if ($p instanceof SerializationException) {
          var e_0 = $p;
          throw e_0;
        } else {
          if ($p instanceof Exception) {
            var e_1 = $p;
            // Inline function 'kotlinx.serialization.json.internal.errorFromDeserializer' call
            var path_1 = this.m16();
            var causeMessage = e_1.message;
            var shortMessage = 'Deserialization failed because of ' + (causeMessage == null ? 'an exception' : "'" + causeMessage + "' exception") + ' in the decoder';
            var tmp_6;
            if (this.t32().d30_1.n32_1) {
              var tmp$ret$19 = toString(tmp2_withExceptionHandling_this);
              tmp_6 = toString(minify(tmp$ret$19));
            } else {
              tmp_6 = null;
            }
            var inputValue_1 = tmp_6;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, path_1, null, inputValue_1), shortMessage, -1, path_1, inputValue_1, null, e_1);
          } else {
            throw $p;
          }
        }
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).l16 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).ns = function (descriptor) {
    var currentObject = this.v39();
    var tmp0_subject = descriptor.uq();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.t32();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.tq();
      if (!(currentObject instanceof JsonArray)) {
        var tmp2 = 'Expected ' + getKClass(JsonArray).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.m16();
        var tmp_2;
        if (this.t32().d30_1.n32_1) {
          var tmp$ret$6 = toString(currentObject);
          tmp_2 = toString(minify(tmp$ret$6));
        } else {
          tmp_2 = null;
        }
        var inputValue = tmp_2;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.t32();
        var keyDescriptor = carrierDescriptor(descriptor.br(0), this_0.ct());
        var keyKind = keyDescriptor.uq();
        var tmp_3;
        var tmp_4;
        if (keyKind instanceof PrimitiveKind) {
          tmp_4 = true;
        } else {
          tmp_4 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_4) {
          var tmp_5 = this.t32();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.tq();
          if (!(currentObject instanceof JsonObject)) {
            var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_0;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path_0 = this.m16();
            var tmp_6;
            if (this.t32().d30_1.n32_1) {
              var tmp$ret$15 = toString(currentObject);
              tmp_6 = toString(minify(tmp$ret$15));
            } else {
              tmp_6 = null;
            }
            var inputValue_0 = tmp_6;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path_0, null, inputValue_0), tmp2_0, -1, path_0, inputValue_0, null);
          }
          tmp_3 = new JsonTreeMapDecoder(tmp_5, currentObject, descriptor);
        } else {
          if (this_0.d30_1.z31_1) {
            var tmp_7 = this.t32();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.tq();
            if (!(currentObject instanceof JsonArray)) {
              var tmp2_1 = 'Expected ' + getKClass(JsonArray).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_1;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var path_1 = this.m16();
              var tmp_8;
              if (this.t32().d30_1.n32_1) {
                var tmp$ret$23 = toString(currentObject);
                tmp_8 = toString(minify(tmp$ret$23));
              } else {
                tmp_8 = null;
              }
              var inputValue_1 = tmp_8;
              throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path_1, null, inputValue_1), tmp2_1, -1, path_1, inputValue_1, null);
            }
            tmp_3 = new JsonTreeListDecoder(tmp_7, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_3;
      } else {
        var tmp_9 = this.t32();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.tq();
        if (!(currentObject instanceof JsonObject)) {
          var tmp2_2 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_2;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path_2 = this.m16();
          var tmp_10;
          if (this.t32().d30_1.n32_1) {
            var tmp$ret$30 = toString(currentObject);
            tmp_10 = toString(minify(tmp$ret$30));
          } else {
            tmp_10 = null;
          }
          var inputValue_2 = tmp_10;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_2, path_2, null, inputValue_2), tmp2_2, -1, path_2, inputValue_2, null);
        }
        tmp = new JsonTreeDecoder(tmp_9, currentObject, descriptor, this.s39_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).os = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).yr = function () {
    var tmp = this.v39();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).x39 = function (tag, enumDescriptor) {
    var tmp = this.t32();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.w39(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.tq();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.u39(tag);
      var tmp_0;
      if (this.t32().d30_1.n32_1) {
        var tmp$ret$7 = toString(tmp2);
        tmp_0 = toString(minify(tmp$ret$7));
      } else {
        tmp_0 = null;
      }
      var inputValue = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.c33());
  };
  protoOf(AbstractJsonTreeDecoder).y16 = function (tag, enumDescriptor) {
    return this.x39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).y39 = function (tag) {
    return !(this.w39(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).o16 = function (tag) {
    return this.y39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).z39 = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.w39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'boolean';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.u39(tag);
        var tmp;
        if (this.t32().d30_1.n32_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).p16 = function (tag) {
    return this.z39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).a3a = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.w39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'byte';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.u39(tag);
        var tmp;
        if (this.t32().d30_1.n32_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToByte(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).q16 = function (tag) {
    return this.a3a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).b3a = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.w39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'short';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.u39(tag);
        var tmp;
        if (this.t32().d30_1.n32_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToShort(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).r16 = function (tag) {
    return this.b3a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).c3a = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.w39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'int';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.u39(tag);
        var tmp;
        if (this.t32().d30_1.n32_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToInt(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).s16 = function (tag) {
    return this.c3a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).d3a = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.w39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'long';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.u39(tag);
        var tmp;
        if (this.t32().d30_1.n32_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).t16 = function (tag) {
    return this.d3a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).e3a = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.w39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'float';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.u39(tag);
        var tmp;
        if (this.t32().d30_1.n32_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.t32().d30_1.g32_1;
    if (specialFp || isFinite(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.t32().d30_1.n32_1) {
      var tmp$ret$13 = toString(this.v39());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).u16 = function (tag) {
    return this.e3a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).f3a = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.w39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'double';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.u39(tag);
        var tmp;
        if (this.t32().d30_1.n32_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.t32().d30_1.g32_1;
    if (specialFp || isFinite_0(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.t32().d30_1.n32_1) {
      var tmp$ret$13 = toString(this.v39());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).v16 = function (tag) {
    return this.f3a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).g3a = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.w39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'char';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.u39(tag);
        var tmp;
        if (this.t32().d30_1.n32_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.c33()));
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0.x1_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).w16 = function (tag) {
    return this.g3a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).h3a = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.w39(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'string';
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.u39(tag);
      var tmp;
      if (this.t32().d30_1.n32_1) {
        var tmp$ret$6 = toString(value);
        tmp = toString(minify(tmp$ret$6));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral)) {
      var tmp2_0 = "Expected string value for a non-null key '" + tag + "', got null literal instead";
      var tmp4 = this.u39(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint = "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.";
      var tmp_0;
      if (this.t32().d30_1.n32_1) {
        var tmp$ret$10 = toString(this.v39());
        tmp_0 = toString(minify(tmp$ret$10));
      } else {
        tmp_0 = null;
      }
      var inputValue_0 = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, tmp4, hint, inputValue_0), tmp2_0, -1, tmp4, inputValue_0, hint);
    }
    if (!value_0.f33_1 && !this.t32().d30_1.y31_1) {
      var tmp2_1 = "String literal for value of key '" + tag + "' should be quoted";
      var tmp4_0 = this.u39(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint_0 = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
      var tmp_1;
      if (this.t32().d30_1.n32_1) {
        var tmp$ret$14 = toString(this.v39());
        tmp_1 = toString(minify(tmp$ret$14));
      } else {
        tmp_1 = null;
      }
      var inputValue_1 = tmp_1;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, tmp4_0, hint_0, inputValue_1), tmp2_1, -1, tmp4_0, inputValue_1, hint_0);
    }
    return value_0.h33_1;
  };
  protoOf(AbstractJsonTreeDecoder).x16 = function (tag) {
    return this.h3a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).i3a = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.t32();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.w39(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.tq();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.u39(tag);
        var tmp_1;
        if (this.t32().d30_1.n32_1) {
          var tmp$ret$7 = toString(tmp2);
          tmp_1 = toString(minify(tmp$ret$7));
        } else {
          tmp_1 = null;
        }
        var inputValue = tmp_1;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.c33());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.t32());
    } else {
      tmp = protoOf(NamedValueDecoder).z16.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).z16 = function (tag, inlineDescriptor) {
    return this.i3a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).ks = function (descriptor) {
    return !(this.k16() == null) ? protoOf(NamedValueDecoder).ks.call(this, descriptor) : (new JsonPrimitiveDecoder(this.t32(), this.n1(), this.s39_1)).ks(descriptor);
  };
  function coerceInputValue_0($this, descriptor, index, element) {
    var tmp0 = $this.t32();
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.cr(index);
      var elementDescriptor = descriptor.br(index);
      var tmp;
      if (isOptional && !elementDescriptor.mq()) {
        tmp = element instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.uq(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.mq()) {
          tmp_0 = element instanceof JsonNull;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_2;
        }
        var tmp0_safe_receiver = element instanceof JsonPrimitive ? element : null;
        var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.d30_1.b32_1 && elementDescriptor.mq();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          tmp$ret$0 = true;
          break $l$block_2;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function throwUnknownKey($this, key) {
    var tmp2 = "Encountered an unknown key '" + key + "'";
    var tmp4 = $this.m16();
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.";
    var tmp;
    if ($this.t32().d30_1.n32_1) {
      var tmp$ret$3 = $this.n1().toString();
      tmp = toString(minify(tmp$ret$3));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, tmp4, hint, inputValue), tmp2, -1, tmp4, inputValue, hint);
  }
  function JsonTreeDecoder(json, value, descriptor, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.p3a_1 = value;
    this.q3a_1 = polyDescriptor;
    this.r3a_1 = this.n1().l1().t();
    this.s3a_1 = this.t39_1.b32_1 ? null : new JsonElementMarker(descriptor);
    this.t3a_1 = null;
    this.u3a_1 = null;
  }
  protoOf(JsonTreeDecoder).n1 = function () {
    return this.p3a_1;
  };
  protoOf(JsonTreeDecoder).et = function (descriptor) {
    var entries = this.r3a_1;
    $l$loop: while (entries.u()) {
      var entry = entries.v();
      var key = entry.m1();
      var index = getJsonNameIndex(descriptor, this.t32(), key);
      if (!(index === -3)) {
        if (this.t39_1.d32_1 && coerceInputValue_0(this, descriptor, index, entry.n1())) {
          continue $l$loop;
        }
        var tmp0_safe_receiver = this.s3a_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.x35(index);
        }
        this.t3a_1 = key;
        this.u3a_1 = entry.n1();
        return index;
      }
      if (!(key === this.s39_1) && !ignoreUnknownKeys(descriptor, this.t32())) {
        throwUnknownKey(this, key);
      }
    }
    var tmp1_safe_receiver = this.s3a_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y35();
    var markerIndex = tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
    if (!(markerIndex === -1)) {
      this.t3a_1 = descriptor.yq(markerIndex);
      this.u3a_1 = null;
    }
    return markerIndex;
  };
  protoOf(JsonTreeDecoder).yr = function () {
    var tmp;
    var tmp0_safe_receiver = this.s3a_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w35_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = protoOf(AbstractJsonTreeDecoder).yr.call(this);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JsonTreeDecoder).g16 = function (descriptor, index) {
    var tmp0_elvis_lhs = this.t3a_1;
    return tmp0_elvis_lhs == null ? descriptor.yq(index) : tmp0_elvis_lhs;
  };
  protoOf(JsonTreeDecoder).w39 = function (tag) {
    var tmp0_elvis_lhs = this.u3a_1;
    return tmp0_elvis_lhs == null ? getValue(this.n1(), tag) : tmp0_elvis_lhs;
  };
  protoOf(JsonTreeDecoder).ns = function (descriptor) {
    if (descriptor === this.q3a_1) {
      var tmp = this.t32();
      var tmp2 = this.v39();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.q3a_1.tq();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.m16();
        var tmp_0;
        if (this.t32().d30_1.n32_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      return new JsonTreeDecoder(tmp, tmp2, descriptor, this.s39_1, this.q3a_1);
    }
    return protoOf(AbstractJsonTreeDecoder).ns.call(this, descriptor);
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.b3b_1 = value;
    this.c3b_1 = this.b3b_1.e1();
    this.d3b_1 = -1;
  }
  protoOf(JsonTreeListDecoder).n1 = function () {
    return this.b3b_1;
  };
  protoOf(JsonTreeListDecoder).g16 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).w39 = function (tag) {
    return this.b3b_1.d1(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).et = function (descriptor) {
    while (this.d3b_1 < (this.c3b_1 - 1 | 0)) {
      this.d3b_1 = this.d3b_1 + 1 | 0;
      return this.d3b_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.k3b_1 = value;
    this.a17('primitive');
  }
  protoOf(JsonPrimitiveDecoder).n1 = function () {
    return this.k3b_1;
  };
  protoOf(JsonPrimitiveDecoder).et = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).w39 = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.k3b_1;
  };
  function JsonTreeMapDecoder(json, value, descriptor) {
    JsonTreeDecoder.call(this, json, value, descriptor);
    this.x3b_1 = toList(value.u2());
    this.y3b_1 = imul(this.x3b_1.e1(), 2);
    this.z3b_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).g16 = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.x3b_1.d1(i);
  };
  protoOf(JsonTreeMapDecoder).et = function (descriptor) {
    while (this.z3b_1 < (this.y3b_1 - 1 | 0)) {
      this.z3b_1 = this.z3b_1 + 1 | 0;
      return this.z3b_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).w39 = function (tag) {
    return (this.z3b_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.n1(), tag);
  };
  protoOf(JsonTreeMapDecoder).os = function (descriptor) {
  };
  function writeJson(json, value, serializer) {
    var result = {_v: null};
    var encoder = new JsonTreeEncoder(json, writeJson$lambda(result));
    encoder.fu(serializer, value);
    var tmp;
    if (result._v == null) {
      throwUninitializedPropertyAccessException('result');
    } else {
      tmp = result._v;
    }
    return tmp;
  }
  function JsonTreeEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.m3c_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonTreeEncoder).n3c = function (key, element) {
    // Inline function 'kotlin.collections.set' call
    this.m3c_1.a3(key, element);
  };
  protoOf(JsonTreeEncoder).gu = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.d3c_1.b32_1) {
      protoOf(AbstractJsonTreeEncoder).gu.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(JsonTreeEncoder).o3c = function () {
    return new JsonObject(this.m3c_1);
  };
  function inlineUnsignedNumberEncoder($this, tag) {
    return new AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1($this, tag);
  }
  function inlineUnquotedLiteralEncoder($this, tag, inlineDescriptor) {
    return new AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1($this, tag, inlineDescriptor);
  }
  function AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1(this$0, $tag) {
    this.d3d_1 = this$0;
    this.e3d_1 = $tag;
    AbstractEncoder.call(this);
    this.c3d_1 = this$0.b3c_1.ct();
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).ct = function () {
    return this.c3d_1;
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).f3d = function (s) {
    return this.d3d_1.n3c(this.e3d_1, new JsonLiteral(s, false));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).mt = function (value) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
    return this.f3d(UInt__toString_impl_dbgl21(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).nt = function (value) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(value);
    return this.f3d(ULong__toString_impl_f9au7k(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).kt = function (value) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
    return this.f3d(UByte__toString_impl_v72jg(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).lt = function (value) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(value);
    return this.f3d(UShort__toString_impl_edaoee(tmp$ret$0));
  };
  function AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1(this$0, $tag, $inlineDescriptor) {
    this.g3d_1 = this$0;
    this.h3d_1 = $tag;
    this.i3d_1 = $inlineDescriptor;
    AbstractEncoder.call(this);
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).ct = function () {
    return this.g3d_1.b3c_1.ct();
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).rt = function (value) {
    return this.g3d_1.n3c(this.h3d_1, new JsonLiteral(value, false, this.i3d_1));
  };
  function AbstractJsonTreeEncoder$beginStructure$lambda(this$0) {
    return function (node) {
      this$0.n3c(this$0.t17(), node);
      return Unit_instance;
    };
  }
  function AbstractJsonTreeEncoder(json, nodeConsumer) {
    NamedValueEncoder.call(this);
    this.b3c_1 = json;
    this.c3c_1 = nodeConsumer;
    this.d3c_1 = this.b3c_1.d30_1;
    this.e3c_1 = null;
    this.f3c_1 = null;
  }
  protoOf(AbstractJsonTreeEncoder).t32 = function () {
    return this.b3c_1;
  };
  protoOf(AbstractJsonTreeEncoder).ct = function () {
    return this.b3c_1.ct();
  };
  protoOf(AbstractJsonTreeEncoder).g16 = function (descriptor, index) {
    return getJsonElementName(descriptor, this.b3c_1, index);
  };
  protoOf(AbstractJsonTreeEncoder).f34 = function (element) {
    var tmp;
    if (!(this.e3c_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.f3c_1, element);
    }
    this.fu(JsonElementSerializer_getInstance(), element);
  };
  protoOf(AbstractJsonTreeEncoder).ku = function (descriptor, index) {
    return this.d3c_1.w31_1;
  };
  protoOf(AbstractJsonTreeEncoder).l16 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeEncoder).iu = function () {
  };
  protoOf(AbstractJsonTreeEncoder).it = function () {
    var tmp0_elvis_lhs = this.k16();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.c3c_1(JsonNull_getInstance());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tag = tmp;
    this.p3c(tag);
  };
  protoOf(AbstractJsonTreeEncoder).p3c = function (tag) {
    return this.n3c(tag, JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeEncoder).g17 = function (tag) {
    return this.p3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeEncoder).q3c = function (tag, value) {
    return this.n3c(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).h17 = function (tag, value) {
    return this.q3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).r3c = function (tag, value) {
    return this.n3c(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).i17 = function (tag, value) {
    return this.r3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).s3c = function (tag, value) {
    return this.n3c(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).j17 = function (tag, value) {
    return this.s3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).t3c = function (tag, value) {
    return this.n3c(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).k17 = function (tag, value) {
    return this.t3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).u3c = function (tag, value) {
    this.n3c(tag, JsonPrimitive_1(value));
    if (!this.d3c_1.g32_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, tag);
    }
  };
  protoOf(AbstractJsonTreeEncoder).l17 = function (tag, value) {
    return this.u3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).fu = function (serializer, value) {
    // Inline function 'kotlinx.serialization.json.internal.withExceptionHandling' call
    var tmp;
    try {
      if (!(this.k16() == null) || !get_requiresTopLevelTag(carrierDescriptor(serializer.lp(), this.ct()))) {
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
          if (this.t32().d30_1.e32_1) {
            serializer.mp(this, value);
            break $l$block;
          }
          var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
          var tmp_0;
          if (isPolymorphicSerializer) {
            tmp_0 = !this.t32().d30_1.m32_1.equals(ClassDiscriminatorMode_NONE_getInstance());
          } else {
            var tmp_1;
            switch (this.t32().d30_1.m32_1.a1_1) {
              case 0:
              case 2:
                tmp_1 = false;
                break;
              case 1:
                // Inline function 'kotlin.let' call

                var it = serializer.lp().uq();
                tmp_1 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
                break;
              default:
                noWhenBranchMatchedException();
                break;
            }
            tmp_0 = tmp_1;
          }
          var needDiscriminator = tmp_0;
          var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.lp(), this.t32()) : null;
          var tmp_2;
          if (isPolymorphicSerializer) {
            var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
            $l$block_0: {
              // Inline function 'kotlin.requireNotNull' call
              if (value == null) {
                var message = 'Value for serializer ' + toString(serializer.lp()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                break $l$block_0;
              }
            }
            var tmp1_elvis_lhs = casted.dq(this, value);
            var tmp_3;
            if (tmp1_elvis_lhs == null) {
              // Inline function 'kotlin.run' call
              var tmp0_elvis_lhs = getKClassFromExpression(value).o();
              var subClassName = tmp0_elvis_lhs == null ? toString(getKClassFromExpression(value)) : tmp0_elvis_lhs;
              var _destruct__k2r9zo = subtypeNotRegisteredMessageJson(subClassName, casted.aq());
              var message_0 = _destruct__k2r9zo.ag();
              var hint = _destruct__k2r9zo.bg();
              throw new JsonEncodingException(message_0, subClassName, hint);
            } else {
              tmp_3 = tmp1_elvis_lhs;
            }
            var actual = tmp_3;
            tmp_2 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
          } else {
            tmp_2 = serializer;
          }
          var actualSerializer = tmp_2;
          if (!(baseClassDiscriminator == null)) {
            access$checkEncodingConflicts$tJsonPolymorphicHelpersKt(this.t32(), serializer, actualSerializer, baseClassDiscriminator);
            checkKind(actualSerializer.lp().uq());
            var serialName = actualSerializer.lp().tq();
            this.e3c_1 = baseClassDiscriminator;
            this.f3c_1 = serialName;
          }
          actualSerializer.mp(this, value);
        }
      } else {
        // Inline function 'kotlin.run' call
        (new JsonPrimitiveEncoder(this.b3c_1, this.c3c_1)).fu(serializer, value);
      }
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof SerializationException) {
        var e = $p;
        throw e;
      } else {
        if ($p instanceof Exception) {
          var e_0 = $p;
          var causeMessage = e_0.message;
          var classSerialName = serializer.lp().tq();
          var message_1 = 'Serialization ' + (isBlank(classSerialName) ? '' : "of '" + classSerialName + "' ") + 'failed because of ' + (causeMessage == null ? 'an exception' : "'" + causeMessage + "' exception") + ' in the encoder';
          throw new JsonEncodingException(message_1, classSerialName, VOID, e_0);
        } else {
          throw $p;
        }
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeEncoder).v3c = function (tag, value) {
    this.n3c(tag, JsonPrimitive_1(value));
    if (!this.d3c_1.g32_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, tag);
    }
  };
  protoOf(AbstractJsonTreeEncoder).m17 = function (tag, value) {
    return this.v3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).w3c = function (tag, value) {
    return this.n3c(tag, JsonPrimitive_2(value));
  };
  protoOf(AbstractJsonTreeEncoder).n17 = function (tag, value) {
    return this.w3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).x3c = function (tag, value) {
    return this.n3c(tag, JsonPrimitive_0(toString_1(value)));
  };
  protoOf(AbstractJsonTreeEncoder).o17 = function (tag, value) {
    return this.x3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).y3c = function (tag, value) {
    return this.n3c(tag, JsonPrimitive_0(value));
  };
  protoOf(AbstractJsonTreeEncoder).p17 = function (tag, value) {
    return this.y3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).z3c = function (tag, enumDescriptor, ordinal) {
    return this.n3c(tag, JsonPrimitive_0(enumDescriptor.yq(ordinal)));
  };
  protoOf(AbstractJsonTreeEncoder).q17 = function (tag, enumDescriptor, ordinal) {
    return this.z3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor, ordinal);
  };
  protoOf(AbstractJsonTreeEncoder).a3d = function (tag, value) {
    this.n3c(tag, JsonPrimitive_0(toString(value)));
  };
  protoOf(AbstractJsonTreeEncoder).e17 = function (tag, value) {
    return this.a3d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).b3d = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? inlineUnsignedNumberEncoder(this, tag) : get_isUnquotedLiteral(inlineDescriptor) ? inlineUnquotedLiteralEncoder(this, tag, inlineDescriptor) : protoOf(NamedValueEncoder).r17.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).r17 = function (tag, inlineDescriptor) {
    return this.b3d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).tt = function (descriptor) {
    var tmp;
    if (!(this.k16() == null)) {
      if (!(this.e3c_1 == null))
        this.f3c_1 = descriptor.tq();
      tmp = protoOf(NamedValueEncoder).tt.call(this, descriptor);
    } else {
      tmp = (new JsonPrimitiveEncoder(this.b3c_1, this.c3c_1)).tt(descriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeEncoder).ns = function (descriptor) {
    var tmp;
    if (this.k16() == null) {
      tmp = this.c3c_1;
    } else {
      tmp = AbstractJsonTreeEncoder$beginStructure$lambda(this);
    }
    var consumer = tmp;
    var tmp0_subject = descriptor.uq();
    var tmp_0;
    var tmp_1;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_1) {
      tmp_0 = new JsonTreeListEncoder(this.b3c_1, consumer);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.b3c_1;
        var keyDescriptor = carrierDescriptor(descriptor.br(0), this_0.ct());
        var keyKind = keyDescriptor.uq();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          tmp_2 = new JsonTreeMapEncoder(this.b3c_1, consumer);
        } else {
          if (this_0.d30_1.z31_1) {
            tmp_2 = new JsonTreeListEncoder(this.b3c_1, consumer);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp_0 = tmp_2;
      } else {
        tmp_0 = new JsonTreeEncoder(this.b3c_1, consumer);
      }
    }
    var encoder = tmp_0;
    var discriminator = this.e3c_1;
    if (!(discriminator == null)) {
      if (encoder instanceof JsonTreeMapEncoder) {
        encoder.n3c('key', JsonPrimitive_0(discriminator));
        var tmp1_elvis_lhs = this.f3c_1;
        encoder.n3c('value', JsonPrimitive_0(tmp1_elvis_lhs == null ? descriptor.tq() : tmp1_elvis_lhs));
      } else {
        var tmp2_elvis_lhs = this.f3c_1;
        encoder.n3c(discriminator, JsonPrimitive_0(tmp2_elvis_lhs == null ? descriptor.tq() : tmp2_elvis_lhs));
      }
      this.e3c_1 = null;
      this.f3c_1 = null;
    }
    return encoder;
  };
  protoOf(AbstractJsonTreeEncoder).s17 = function (descriptor) {
    this.c3c_1(this.o3c());
  };
  function get_requiresTopLevelTag(_this__u8e3s4) {
    var tmp;
    var tmp_0 = _this__u8e3s4.uq();
    if (tmp_0 instanceof PrimitiveKind) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.uq() === ENUM_getInstance();
    }
    return tmp;
  }
  function JsonPrimitiveEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    this.y3d_1 = null;
    this.a17('primitive');
  }
  protoOf(JsonPrimitiveEncoder).n3c = function (key, element) {
    // Inline function 'kotlin.require' call
    if (!(key === 'primitive')) {
      var message = "This output can only consume primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.y3d_1 == null)) {
      var message_0 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.y3d_1 = element;
    this.c3c_1(element);
  };
  protoOf(JsonPrimitiveEncoder).o3c = function () {
    var tmp0 = this.y3d_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Primitive element has not been recorded. Is call to .encodeXxx is missing in serializer?';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$0;
  };
  function JsonTreeListEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.f3e_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonTreeListEncoder).g16 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListEncoder).n3c = function (key, element) {
    var idx = toInt(key);
    this.f3e_1.y2(idx, element);
  };
  protoOf(JsonTreeListEncoder).o3c = function () {
    return new JsonArray(this.f3e_1);
  };
  function _get_tag__e6h4qf($this) {
    var tmp = $this.q3d_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('tag');
    }
  }
  function JsonTreeMapEncoder(json, nodeConsumer) {
    JsonTreeEncoder.call(this, json, nodeConsumer);
    this.r3d_1 = true;
  }
  protoOf(JsonTreeMapEncoder).n3c = function (key, element) {
    if (this.r3d_1) {
      var tmp = this;
      var tmp_0;
      if (element instanceof JsonPrimitive) {
        tmp_0 = element.c33();
      } else {
        if (element instanceof JsonObject) {
          throw InvalidKeyKindException(JsonObjectSerializer_getInstance().r33_1);
        } else {
          if (element instanceof JsonArray) {
            throw InvalidKeyKindException(JsonArraySerializer_getInstance().s33_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      tmp.q3d_1 = tmp_0;
      this.r3d_1 = false;
    } else {
      var tmp0 = this.m3c_1;
      // Inline function 'kotlin.collections.set' call
      var key_0 = _get_tag__e6h4qf(this);
      tmp0.a3(key_0, element);
      this.r3d_1 = true;
    }
  };
  protoOf(JsonTreeMapEncoder).o3c = function () {
    return new JsonObject(this.m3c_1);
  };
  function writeJson$lambda($result) {
    return function (it) {
      $result._v = it;
      return Unit_instance;
    };
  }
  function appendEscape($this, lastPosition, current) {
    $this.g3e(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.g3e(lastPosition, currentPosition);
    var result = $this.z30_1.toString();
    $this.z30_1.mc(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.y30_1);
    $this.y30_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.i39(), $this.w30_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.h3e(currentPosition);
    if (currentPosition === -1) {
      $this.a36('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.i39();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.i39(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.a36("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.z30_1.s(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.w30_1 = startPos;
      $this.i3e();
      if (($this.w30_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.a36('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.w30_1);
    }
    $this.z30_1.s(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.a36("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.h3e(start);
    if (current >= charSequenceLength($this.i39()) || current === -1) {
      $this.a36('EOF');
    }
    var tmp = $this.i39();
    var _unary__edvuaz = current;
    current = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(tmp, _unary__edvuaz);
    var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.a36("Expected valid boolean literal prefix, but had '" + $this.l37() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.i39()) - current | 0) < literalSuffix.length) {
      $this.a36('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charCodeAt(literalSuffix, i);
        var actual = charSequenceGet($this.i39(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.a36("Expected valid boolean literal prefix, but had '" + $this.l37() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.w30_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer(configuration) {
    this.v30_1 = configuration;
    this.w30_1 = 0;
    this.x30_1 = new JsonPath(this.v30_1);
    this.y30_1 = null;
    this.z30_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).i3e = function () {
  };
  protoOf(AbstractJsonLexer).a39 = function () {
    var current = this.j3e();
    var source = this.i39();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.w30_1 = this.w30_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).k3e = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).a31 = function () {
    var nextToken = this.n37();
    if (!(nextToken === 10)) {
      this.a36('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.i39(), this.w30_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).h37 = function (expected) {
    var token = this.n37();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true && this.w30_1 > 0 ? this.w30_1 - 1 | 0 : this.w30_1;
      var s = this.w30_1 === charSequenceLength(this.i39()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.i39(), position));
      var tmp$ret$1 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.a36(tmp$ret$1, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).l3e = function (expected) {
    if (this.w30_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.w30_1;
        try {
          this.w30_1 = this.w30_1 - 1 | 0;
          tmp$ret$0 = this.l37();
          break $l$block;
        }finally {
          this.w30_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$0;
      if (inputLiteral === 'null') {
        this.z35("Expected string literal but 'null' literal was found", this.w30_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true && this.w30_1 > 0 ? this.w30_1 - 1 | 0 : this.w30_1;
    var s = this.w30_1 === charSequenceLength(this.i39()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.i39(), position));
    var tmp$ret$3 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.a36(tmp$ret$3, position);
  };
  protoOf(AbstractJsonLexer).i37 = function () {
    var source = this.i39();
    var cpos = this.w30_1;
    $l$loop_0: while (true) {
      cpos = this.h3e(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.w30_1 = cpos;
      return charToTokenClass(ch);
    }
    this.w30_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).b39 = function (doConsume) {
    var current = this.j3e();
    current = this.h3e(current);
    var len = charSequenceLength(this.i39()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.i39(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.i39(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.w30_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).j39 = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.b39(doConsume) : $super.b39.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).c39 = function (isLenient) {
    var token = this.i37();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.l37();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.k37();
    }
    var string = tmp;
    this.y30_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).m3e = function () {
    this.y30_1 = null;
  };
  protoOf(AbstractJsonLexer).m1a = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.i39();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).k37 = function () {
    if (!(this.y30_1 == null)) {
      return takePeeked(this);
    }
    return this.f39();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.h3e(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.a36('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.g3e(lastPosition, currentPosition);
          currentPosition = this.h3e(currentPosition);
          if (currentPosition === -1) {
            this.a36('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.m1a(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.w30_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).g39 = function () {
    var result = this.l37();
    if (result === 'null' && wasUnquotedString(this)) {
      this.a36("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).l37 = function () {
    if (!(this.y30_1 == null)) {
      return takePeeked(this);
    }
    var current = this.j3e();
    if (current >= charSequenceLength(this.i39()) || current === -1) {
      this.a36('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.i39(), current));
    if (token === 1) {
      return this.k37();
    }
    if (!(token === 0)) {
      this.a36('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.i39(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.i39(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.i39())) {
        usedAppend = true;
        this.g3e(this.w30_1, current);
        var eof = this.h3e(current);
        if (eof === -1) {
          this.w30_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.m1a(this.w30_1, current);
    } else {
      tmp = decodedString(this, this.w30_1, current);
    }
    var result = tmp;
    this.w30_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).g3e = function (fromIndex, toIndex) {
    this.z30_1.gc(this.i39(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).e39 = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.i37();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.l37();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.i37();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.l37();
        else
          this.f39();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.c1(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8)) {
          this.a36('found ] instead of }');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6)) {
          this.a36('found } instead of ]');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.a36('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.n37();
      if (tokenStack.e1() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.i39()) + "', currentPosition=" + this.w30_1 + ')';
  };
  protoOf(AbstractJsonLexer).d39 = function (key) {
    var processed = this.m1a(0, this.w30_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.z35("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).z35 = function (message, position, hint) {
    throw decodingExceptionOf_0(this, message, position, this.x30_1.p36(), hint, this.i39());
  };
  protoOf(AbstractJsonLexer).a36 = function (message, position, hint, $super) {
    position = position === VOID ? this.w30_1 : position;
    hint = hint === VOID ? null : hint;
    return $super === VOID ? this.z35(message, position, hint) : $super.z35.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).l39 = function () {
    var current = this.j3e();
    current = this.h3e(current);
    if (current >= charSequenceLength(this.i39()) || current === -1) {
      this.a36('EOF');
    }
    var tmp;
    if (charSequenceGet(this.i39(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.i39())) {
        this.a36('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.i39()))) {
      var ch = charSequenceGet(this.i39(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.a36("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current);
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.a36("Unexpected symbol '-' in numeric literal", current);
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.a36("Unexpected symbol '+' in numeric literal", current);
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.a36("Unexpected symbol '-' in numeric literal", current);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.a36("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current - 1 | 0);
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        var this_0 = exponentAccumulator;
        // Inline function 'kotlin.Long.plus' call
        var this_1 = multiply(this_0, fromInt(10));
        exponentAccumulator = add(this_1, fromInt(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      var this_2 = accumulator;
      // Inline function 'kotlin.Long.minus' call
      var this_3 = multiply(this_2, fromInt(10));
      accumulator = subtract(this_3, fromInt(digit));
      if (compare(accumulator, new Long(0, 0)) > 0) {
        this.a36('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.a36('Expected numeric literal', current);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.a36('EOF');
      }
      if (!(charSequenceGet(this.i39(), current) === _Char___init__impl__6a9atx(34))) {
        this.a36('Expected closing quotation mark', current);
      }
      current = current + 1 | 0;
    }
    this.w30_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(new Long(-1, 2147483647)) || doubleAccumulator < toNumber(new Long(0, -2147483648))) {
        this.a36('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.a36("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!equalsLong(accumulator, new Long(0, -2147483648))) {
      tmp_0 = negate(accumulator);
    } else {
      this.a36('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).i33 = function () {
    var result = this.l39();
    var next = this.n37();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true && this.w30_1 > 0 ? this.w30_1 - 1 | 0 : this.w30_1;
      var s = this.w30_1 === charSequenceLength(this.i39()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.i39(), position));
      var tmp$ret$1 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.a36(tmp$ret$1, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).k39 = function () {
    var current = this.j3e();
    if (current === charSequenceLength(this.i39())) {
      this.a36('EOF');
    }
    var tmp;
    if (charSequenceGet(this.i39(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.w30_1 === charSequenceLength(this.i39())) {
        this.a36('EOF');
      }
      if (!(charSequenceGet(this.i39(), this.w30_1) === _Char___init__impl__6a9atx(34))) {
        this.a36('Expected closing quotation mark');
      }
      this.w30_1 = this.w30_1 + 1 | 0;
    }
    return result;
  };
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().o3e_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().n3e_1[c] : _Char___init__impl__6a9atx(0);
  }
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.n3e_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.o3e_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.n3e_1 = charArray(117);
    this.o3e_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexerWithComments(source, configuration) {
    StringJsonLexer.call(this, source, configuration);
  }
  protoOf(StringJsonLexerWithComments).n37 = function () {
    var source = this.i39();
    var cpos = this.j3e();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.w30_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).j37 = function () {
    var current = this.j3e();
    if (current >= this.i39().length || current === -1)
      return false;
    return this.k3e(charCodeAt(this.i39(), current));
  };
  protoOf(StringJsonLexerWithComments).z38 = function (expected) {
    var source = this.i39();
    var current = this.j3e();
    if (current >= source.length || current === -1) {
      this.w30_1 = -1;
      this.l3e(expected);
    }
    var c = charCodeAt(source, current);
    this.w30_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.l3e(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).i37 = function () {
    var source = this.i39();
    var cpos = this.j3e();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.w30_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).j3e = function () {
    var current = this.w30_1;
    if (current === -1)
      return current;
    var source = this.i39();
    $l$loop_1: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop_1;
      }
      if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
        var tmp0_subject = charCodeAt(source, current + 1 | 0);
        if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
          current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
          if (current === -1) {
            current = source.length;
          } else {
            current = current + 1 | 0;
          }
          continue $l$loop_1;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
          current = indexOf(source, '*/', current + 2 | 0);
          if (current === -1) {
            this.w30_1 = source.length;
            this.a36('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.w30_1 = current;
    return current;
  };
  function StringJsonLexer(source, configuration) {
    AbstractJsonLexer.call(this, configuration);
    this.a3f_1 = source;
  }
  protoOf(StringJsonLexer).i39 = function () {
    return this.a3f_1;
  };
  protoOf(StringJsonLexer).h3e = function (position) {
    return position < this.i39().length ? position : -1;
  };
  protoOf(StringJsonLexer).n37 = function () {
    var source = this.i39();
    var cpos = this.w30_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.w30_1 = cpos;
      return charToTokenClass(c);
    }
    this.w30_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).j37 = function () {
    var current = this.w30_1;
    if (current === -1)
      return false;
    var source = this.i39();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.w30_1 = current;
      return this.k3e(c);
    }
    this.w30_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).j3e = function () {
    var current = this.w30_1;
    if (current === -1)
      return current;
    var source = this.i39();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.w30_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).z38 = function (expected) {
    if (this.w30_1 === -1) {
      this.l3e(expected);
    }
    var source = this.i39();
    var cpos = this.w30_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.w30_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.l3e(expected);
    }
    this.w30_1 = -1;
    this.l3e(expected);
  };
  protoOf(StringJsonLexer).f39 = function () {
    this.z38(_Char___init__impl__6a9atx(34));
    var current = this.w30_1;
    var closingQuote = indexOf_0(this.i39(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.l37();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false && this.w30_1 > 0 ? this.w30_1 - 1 | 0 : this.w30_1;
      var s = this.w30_1 === charSequenceLength(this.i39()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.i39(), position));
      var tmp$ret$1 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.a36(tmp$ret$1, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.i39(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.i39(), this.w30_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.w30_1 = closingQuote + 1 | 0;
    return substring(this.i39(), current, closingQuote);
  };
  protoOf(StringJsonLexer).h39 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.w30_1;
    try {
      if (!(this.n37() === 6))
        return null;
      var firstKey = this.c39(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.m3e();
      if (!(this.n37() === 5))
        return null;
      return this.c39(isLenient);
    }finally {
      this.w30_1 = positionSnapshot;
      this.m3e();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.d30_1.l32_1 ? new StringJsonLexer(source, json.d30_1) : new StringJsonLexerWithComments(source, json.d30_1);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.f30_1;
  }
  function StringJsonWriter() {
    this.l30_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(StringJsonWriter).e35 = function (value) {
    this.l30_1.kc(value);
  };
  protoOf(StringJsonWriter).y34 = function (char) {
    this.l30_1.s(char);
  };
  protoOf(StringJsonWriter).a35 = function (text) {
    this.l30_1.q(text);
  };
  protoOf(StringJsonWriter).k35 = function (text) {
    printQuoted(this.l30_1, text);
  };
  protoOf(StringJsonWriter).m30 = function () {
    this.l30_1.nc();
  };
  protoOf(StringJsonWriter).toString = function () {
    return this.l30_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).mq = get_isNullable;
  protoOf(defer$1).vq = get_isInline;
  protoOf(defer$1).xq = get_annotations;
  defineProp(protoOf(JsonException), 'message', function () {
    return this.e();
  });
  protoOf(JsonSerializersModuleValidator).o19 = contextual;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Tombstone_instance = new Tombstone();
  RedactedKey_instance = new RedactedKey();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = JsonArrayBuilder;
  _.$_$.b = JsonArray;
  _.$_$.c = JsonContentPolymorphicSerializer;
  _.$_$.d = JsonDecoder;
  _.$_$.e = JsonEncoder;
  _.$_$.f = JsonObjectBuilder;
  _.$_$.g = JsonObject;
  _.$_$.h = JsonPrimitive_0;
  _.$_$.i = JsonPrimitive;
  _.$_$.j = Json_0;
  _.$_$.k = get_boolean;
  _.$_$.l = get_booleanOrNull;
  _.$_$.m = get_contentOrNull;
  _.$_$.n = get_double;
  _.$_$.o = get_doubleOrNull;
  _.$_$.p = get_float;
  _.$_$.q = get_floatOrNull;
  _.$_$.r = get_int;
  _.$_$.s = get_intOrNull;
  _.$_$.t = get_jsonArray;
  _.$_$.u = get_jsonObject;
  _.$_$.v = get_jsonPrimitive;
  _.$_$.w = get_long;
  _.$_$.x = get_longOrNull;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
