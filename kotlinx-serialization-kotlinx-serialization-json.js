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
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForObject = kotlin_kotlin.$_$.pa;
  var VOID = kotlin_kotlin.$_$.b;
  var Unit_instance = kotlin_kotlin.$_$.u4;
  var initMetadataForClass = kotlin_kotlin.$_$.ja;
  var toString = kotlin_kotlin.$_$.nb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var charSequenceLength = kotlin_kotlin.$_$.z9;
  var charSequenceGet = kotlin_kotlin.$_$.y9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d2;
  var equals = kotlin_kotlin.$_$.da;
  var toString_0 = kotlin_kotlin.$_$.jg;
  var Enum = kotlin_kotlin.$_$.xe;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var getKClassFromExpression = kotlin_kotlin.$_$.bc;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var THROW_CCE = kotlin_kotlin.$_$.hf;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var isInterface = kotlin_kotlin.$_$.ya;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var initMetadataForInterface = kotlin_kotlin.$_$.na;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ka;
  var hashCode = kotlin_kotlin.$_$.ia;
  var joinToString = kotlin_kotlin.$_$.r6;
  var KtList = kotlin_kotlin.$_$.b5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.a1;
  var KtMap = kotlin_kotlin.$_$.e5;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var getBooleanHashCode = kotlin_kotlin.$_$.fa;
  var getStringHashCode = kotlin_kotlin.$_$.ha;
  var toDouble = kotlin_kotlin.$_$.xd;
  var numberRangeToNumber = kotlin_kotlin.$_$.gb;
  var ClosedRange = kotlin_kotlin.$_$.rb;
  var contains = kotlin_kotlin.$_$.vb;
  var convertToInt = kotlin_kotlin.$_$.c9;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var toDoubleOrNull = kotlin_kotlin.$_$.wd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.h4;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.fg;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var toLongOrNull = kotlin_kotlin.$_$.ce;
  var toULongOrNull = kotlin_kotlin.$_$.he;
  var ULong = kotlin_kotlin.$_$.of;
  var Companion_getInstance = kotlin_kotlin.$_$.s4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.i3;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.ud;
  var KProperty1 = kotlin_kotlin.$_$.hc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ga;
  var lazy = kotlin_kotlin.$_$.eg;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var fromInt = kotlin_kotlin.$_$.g9;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.y2;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.a3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.h3;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.j3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.p2;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.r2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.q3;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.s3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var captureStack = kotlin_kotlin.$_$.u9;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceSubSequence = kotlin_kotlin.$_$.aa;
  var coerceAtLeast = kotlin_kotlin.$_$.sb;
  var coerceAtMost = kotlin_kotlin.$_$.tb;
  var Collection = kotlin_kotlin.$_$.w4;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var singleOrNull = kotlin_kotlin.$_$.m7;
  var emptyMap = kotlin_kotlin.$_$.g6;
  var getValue = kotlin_kotlin.$_$.n6;
  var copyOf = kotlin_kotlin.$_$.b6;
  var arrayCopy = kotlin_kotlin.$_$.k5;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.ve;
  var invoke = kotlin_kotlin.$_$.zf;
  var CoroutineImpl = kotlin_kotlin.$_$.t8;
  var DeepRecursiveScope = kotlin_kotlin.$_$.we;
  var Unit = kotlin_kotlin.$_$.rf;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d8;
  var initMetadataForLambda = kotlin_kotlin.$_$.oa;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.la;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var getKClass = kotlin_kotlin.$_$.cc;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var ensureNotNull = kotlin_kotlin.$_$.yf;
  var substringBefore = kotlin_kotlin.$_$.qd;
  var removeSuffix = kotlin_kotlin.$_$.fd;
  var substringAfter = kotlin_kotlin.$_$.pd;
  var contains_0 = kotlin_kotlin.$_$.nc;
  var plus = kotlin_kotlin.$_$.gg;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var convertToByte = kotlin_kotlin.$_$.b9;
  var equalsLong = kotlin_kotlin.$_$.f9;
  var convertToShort = kotlin_kotlin.$_$.d9;
  var IllegalArgumentException = kotlin_kotlin.$_$.af;
  var isFinite = kotlin_kotlin.$_$.bg;
  var isFinite_0 = kotlin_kotlin.$_$.ag;
  var charCodeAt = kotlin_kotlin.$_$.x9;
  var toUInt = kotlin_kotlin.$_$.ge;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.z2;
  var toULong = kotlin_kotlin.$_$.ie;
  var toUByte = kotlin_kotlin.$_$.fe;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.q2;
  var toUShort = kotlin_kotlin.$_$.je;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.r3;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var toString_1 = kotlin_kotlin.$_$.k2;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.r4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.q4;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.t4;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var setOf = kotlin_kotlin.$_$.l7;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.j2;
  var numberToChar = kotlin_kotlin.$_$.hb;
  var equals_0 = kotlin_kotlin.$_$.uc;
  var toByte = kotlin_kotlin.$_$.lb;
  var startsWith = kotlin_kotlin.$_$.ld;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var single = kotlin_kotlin.$_$.id;
  var Char = kotlin_kotlin.$_$.se;
  var emptySet = kotlin_kotlin.$_$.h6;
  var plus_0 = kotlin_kotlin.$_$.d7;
  var toInt = kotlin_kotlin.$_$.ae;
  var toList = kotlin_kotlin.$_$.t7;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ig;
  var NamedValueEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var enumEntries = kotlin_kotlin.$_$.v8;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var toNumber = kotlin_kotlin.$_$.p9;
  var last = kotlin_kotlin.$_$.x6;
  var removeLast = kotlin_kotlin.$_$.i7;
  var lastIndexOf = kotlin_kotlin.$_$.dd;
  var Long = kotlin_kotlin.$_$.cf;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.f2;
  var multiply = kotlin_kotlin.$_$.j9;
  var add = kotlin_kotlin.$_$.x8;
  var subtract = kotlin_kotlin.$_$.o9;
  var compare = kotlin_kotlin.$_$.a9;
  var numberToLong = kotlin_kotlin.$_$.l9;
  var negate = kotlin_kotlin.$_$.k9;
  var charArray = kotlin_kotlin.$_$.w9;
  var indexOf = kotlin_kotlin.$_$.xc;
  var indexOf_0 = kotlin_kotlin.$_$.yc;
  var substring = kotlin_kotlin.$_$.sd;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.j;
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
  initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [JsonElement, KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [JsonElement, KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
  initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
  initMetadataForClass(JsonObjectBuilder, 'JsonObjectBuilder');
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
  initMetadataForClass(Composer, 'Composer');
  initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', VOID, Composer);
  initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', VOID, Composer);
  initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', VOID, Composer);
  initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
  initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
  initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
  initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
  initMetadataForObject(Tombstone, 'Tombstone');
  initMetadataForClass(JsonPath, 'JsonPath', JsonPath);
  initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($readObjectCOROUTINE$, CoroutineImpl);
  initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
  initMetadataForClass(Key, 'Key', Key);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
  initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', VOID, AbstractDecoder);
  initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder', VOID, JsonTreeDecoder);
  initMetadataForClass(AbstractJsonTreeEncoder, 'AbstractJsonTreeEncoder', VOID, NamedValueEncoder, [NamedValueEncoder, JsonEncoder]);
  initMetadataForClass(JsonTreeEncoder, 'JsonTreeEncoder', VOID, AbstractJsonTreeEncoder);
  initMetadataForClass(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1, VOID, VOID, AbstractEncoder);
  initMetadataForClass(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1, VOID, VOID, AbstractEncoder);
  initMetadataForClass(JsonPrimitiveEncoder, 'JsonPrimitiveEncoder', VOID, AbstractJsonTreeEncoder);
  initMetadataForClass(JsonTreeListEncoder, 'JsonTreeListEncoder', VOID, AbstractJsonTreeEncoder);
  initMetadataForClass(JsonTreeMapEncoder, 'JsonTreeMapEncoder', VOID, JsonTreeEncoder);
  initMetadataForClass(WriteMode, 'WriteMode', VOID, Enum);
  initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
  initMetadataForObject(CharMappings, 'CharMappings');
  initMetadataForClass(StringJsonLexer, 'StringJsonLexer', VOID, AbstractJsonLexer);
  initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments', VOID, StringJsonLexer);
  initMetadataForClass(JsonToStringWriter, 'JsonToStringWriter', JsonToStringWriter);
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
    this.m2t_1 = configuration;
    this.n2t_1 = serializersModule;
    this.o2t_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).ar = function () {
    return this.n2t_1;
  };
  protoOf(Json).p2t = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.v2t();
    }
  };
  protoOf(Json).q2t = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.kn(), null);
    var result = input.kq(deserializer);
    lexer.i2u();
    return result;
  };
  protoOf(Json).r2t = function (serializer, value) {
    return writeJson(this, value, serializer);
  };
  protoOf(Json).s2t = function (deserializer, element) {
    return readJson(this, element, deserializer);
  };
  protoOf(Json).t2t = function (string) {
    return this.q2t(JsonElementSerializer_getInstance(), string);
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.b2v();
    return new JsonImpl(conf, builder.a2v_1);
  }
  function JsonBuilder(json) {
    this.j2u_1 = json.m2t_1.c2v_1;
    this.k2u_1 = json.m2t_1.h2v_1;
    this.l2u_1 = json.m2t_1.d2v_1;
    this.m2u_1 = json.m2t_1.e2v_1;
    this.n2u_1 = json.m2t_1.g2v_1;
    this.o2u_1 = json.m2t_1.i2v_1;
    this.p2u_1 = json.m2t_1.j2v_1;
    this.q2u_1 = json.m2t_1.l2v_1;
    this.r2u_1 = json.m2t_1.s2v_1;
    this.s2u_1 = json.m2t_1.n2v_1;
    this.t2u_1 = json.m2t_1.o2v_1;
    this.u2u_1 = json.m2t_1.p2v_1;
    this.v2u_1 = json.m2t_1.q2v_1;
    this.w2u_1 = json.m2t_1.r2v_1;
    this.x2u_1 = json.m2t_1.m2v_1;
    this.y2u_1 = json.m2t_1.f2v_1;
    this.z2u_1 = json.m2t_1.k2v_1;
    this.a2v_1 = json.ar();
  }
  protoOf(JsonBuilder).b2v = function () {
    if (this.z2u_1) {
      // Inline function 'kotlin.require' call
      if (!(this.q2u_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.r2u_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.n2u_1) {
      // Inline function 'kotlin.require' call
      if (!(this.o2u_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.o2u_1 === '    ')) {
      var tmp0 = this.o2u_1;
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$7 = false;
            break $l$block;
          }
        }
        tmp$ret$7 = true;
      }
      var allWhitespaces = tmp$ret$7;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.o2u_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.j2u_1, this.l2u_1, this.m2u_1, this.y2u_1, this.n2u_1, this.k2u_1, this.o2u_1, this.p2u_1, this.z2u_1, this.q2u_1, this.x2u_1, this.s2u_1, this.t2u_1, this.u2u_1, this.v2u_1, this.w2u_1, this.r2u_1);
  };
  function validateConfiguration($this) {
    if (equals($this.ar(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.m2t_1);
    $this.ar().m17(collector);
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
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode) {
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
    this.c2v_1 = encodeDefaults;
    this.d2v_1 = ignoreUnknownKeys;
    this.e2v_1 = isLenient;
    this.f2v_1 = allowStructuredMapKeys;
    this.g2v_1 = prettyPrint;
    this.h2v_1 = explicitNulls;
    this.i2v_1 = prettyPrintIndent;
    this.j2v_1 = coerceInputValues;
    this.k2v_1 = useArrayPolymorphism;
    this.l2v_1 = classDiscriminator;
    this.m2v_1 = allowSpecialFloatingPointValues;
    this.n2v_1 = useAlternativeNames;
    this.o2v_1 = namingStrategy;
    this.p2v_1 = decodeEnumsCaseInsensitive;
    this.q2v_1 = allowTrailingComma;
    this.r2v_1 = allowComments;
    this.s2v_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.c2v_1 + ', ignoreUnknownKeys=' + this.d2v_1 + ', isLenient=' + this.e2v_1 + ', ' + ('allowStructuredMapKeys=' + this.f2v_1 + ', prettyPrint=' + this.g2v_1 + ', explicitNulls=' + this.h2v_1 + ', ') + ("prettyPrintIndent='" + this.i2v_1 + "', coerceInputValues=" + this.j2v_1 + ', useArrayPolymorphism=' + this.k2v_1 + ', ') + ("classDiscriminator='" + this.l2v_1 + "', allowSpecialFloatingPointValues=" + this.m2v_1 + ', ') + ('useAlternativeNames=' + this.n2v_1 + ', namingStrategy=' + toString_0(this.o2v_1) + ', decodeEnumsCaseInsensitive=' + this.p2v_1 + ', ') + ('allowTrailingComma=' + this.q2v_1 + ', allowComments=' + this.r2v_1 + ', classDiscriminatorMode=' + this.s2v_1.toString() + ')');
  };
  var ClassDiscriminatorMode_NONE_instance;
  var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  var ClassDiscriminatorMode_POLYMORPHIC_instance;
  var ClassDiscriminatorMode_entriesInitialized;
  function ClassDiscriminatorMode_initEntries() {
    if (ClassDiscriminatorMode_entriesInitialized)
      return Unit_instance;
    ClassDiscriminatorMode_entriesInitialized = true;
    ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
    ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
    ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
  }
  function ClassDiscriminatorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClassDiscriminatorMode_NONE_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_NONE_instance;
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  function throwSubtypeNotRegistered($this, subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.z9();
    var subClassName = tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs;
    var scope = "in the scope of '" + baseClass.z9() + "'";
    throw SerializationException_init_$Create$("Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function JsonContentPolymorphicSerializer(baseClass) {
    this.t2v_1 = baseClass;
    this.u2v_1 = buildSerialDescriptor('JsonContentPolymorphicSerializer<' + this.t2v_1.z9() + '>', SEALED_getInstance(), []);
  }
  protoOf(JsonContentPolymorphicSerializer).kn = function () {
    return this.u2v_1;
  };
  protoOf(JsonContentPolymorphicSerializer).co = function (encoder, value) {
    var tmp0_elvis_lhs = encoder.ar().ks(this.t2v_1, value);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? serializerOrNull(getKClassFromExpression(value)) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throwSubtypeNotRegistered(this, getKClassFromExpression(value), this.t2v_1);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var actualSerializer = tmp;
    (isInterface(actualSerializer, KSerializer) ? actualSerializer : THROW_CCE()).ln(encoder, value);
  };
  protoOf(JsonContentPolymorphicSerializer).ln = function (encoder, value) {
    return this.co(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(JsonContentPolymorphicSerializer).mn = function (decoder) {
    var input = asJsonDecoder(decoder);
    var tree = input.v2v();
    var tmp = this.w2v(tree);
    var actualSerializer = isInterface(tmp, KSerializer) ? tmp : THROW_CCE();
    return input.x2v().s2t(actualSerializer, tree);
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
    this.y2v_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.y2v_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.y2v_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.y2v_1, ',', '[', ']');
  };
  protoOf(JsonArray).l = function () {
    return this.y2v_1.l();
  };
  protoOf(JsonArray).z2v = function (element) {
    return this.y2v_1.q1(element);
  };
  protoOf(JsonArray).q1 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.z2v(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).i = function () {
    return this.y2v_1.i();
  };
  protoOf(JsonArray).a2w = function (elements) {
    return this.y2v_1.r1(elements);
  };
  protoOf(JsonArray).r1 = function (elements) {
    return this.a2w(elements);
  };
  protoOf(JsonArray).m = function (index) {
    return this.y2v_1.m(index);
  };
  protoOf(JsonArray).s1 = function (index) {
    return this.y2v_1.s1(index);
  };
  protoOf(JsonArray).t1 = function (fromIndex, toIndex) {
    return this.y2v_1.t1(fromIndex, toIndex);
  };
  protoOf(JsonArray).n = function () {
    return this.y2v_1.n();
  };
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.u();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.v();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, k);
    this_0.r7(_Char___init__impl__6a9atx(58));
    this_0.p7(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.b2w_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.b2w_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.b2w_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.b2w_1.t();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).l = function () {
    return this.b2w_1.l();
  };
  protoOf(JsonObject).j29 = function (key) {
    return this.b2w_1.u1(key);
  };
  protoOf(JsonObject).u1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.j29((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).c2w = function (value) {
    return this.b2w_1.v1(value);
  };
  protoOf(JsonObject).v1 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.c2w(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonObject).l29 = function (key) {
    return this.b2w_1.w1(key);
  };
  protoOf(JsonObject).w1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.l29((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).asJsReadonlyMapView = function () {
    return this.b2w_1.asJsReadonlyMapView();
  };
  protoOf(JsonObject).n = function () {
    return this.b2w_1.n();
  };
  protoOf(JsonObject).x1 = function () {
    return this.b2w_1.x1();
  };
  protoOf(JsonObject).y1 = function () {
    return this.b2w_1.y1();
  };
  protoOf(JsonObject).t = function () {
    return this.b2w_1.t();
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
    return this.e2w();
  };
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.e2w();
    }
    return tmp;
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
    this.f2w_1 = 'null';
  }
  protoOf(JsonNull).d2w = function () {
    return false;
  };
  protoOf(JsonNull).e2w = function () {
    return this.f2w_1;
  };
  protoOf(JsonNull).g2w = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).bz = function (typeParamsSerializers) {
    return this.g2w();
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
    this.h2w_1 = isString;
    this.i2w_1 = coerceToInlineType;
    this.j2w_1 = toString(body);
    if (!(this.i2w_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.i2w_1.to()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).d2w = function () {
    return this.h2w_1;
  };
  protoOf(JsonLiteral).e2w = function () {
    return this.j2w_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.h2w_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.j2w_1);
      tmp = this_0.toString();
    } else {
      tmp = this.j2w_1;
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
    if (!(this.h2w_1 === other.h2w_1))
      return false;
    if (!(this.j2w_1 === other.j2w_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.h2w_1);
    result = imul(31, result) + getStringHashCode(this.j2w_1) | 0;
    return result;
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.e2w());
  }
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return (new StringJsonLexer(_this__u8e3s4.e2w())).k2w();
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.e2w();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.e2w());
  }
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
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
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    var result = tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(-2147483648, 2147483647);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      throw NumberFormatException_init_$Create$(_this__u8e3s4.e2w() + ' is not an Int');
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
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function get_floatOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloatOrNull' call
    var this_0 = _this__u8e3s4.e2w();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDoubleOrNull(this_0);
  }
  function get_doubleOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDoubleOrNull(_this__u8e3s4.e2w());
  }
  function get_boolean(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = toBooleanStrictOrNull_0(_this__u8e3s4.e2w());
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
    tmp.l2w_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonObjectBuilder).m2w = function (key, element) {
    return this.l2w_1.z1(key, element);
  };
  protoOf(JsonObjectBuilder).b2v = function () {
    return new JsonObject(this.l2w_1);
  };
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.yn('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.yn('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.yn('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.yn('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.yn('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().n2w_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().o2w_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().p2w_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().q2w_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().r2w_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.s2w_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).kn = function () {
    return this.s2w_1;
  };
  protoOf(JsonElementSerializer).t2w = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.ds(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.ds(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.ds(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(JsonElementSerializer).ln = function (encoder, value) {
    return this.t2w(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).mn = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.v2v();
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
    this.u2w_1 = ListSerializer(JsonElementSerializer_getInstance()).kn();
    this.v2w_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).ro = function () {
    return this.v2w_1;
  };
  protoOf(JsonArrayDescriptor).wo = function (index) {
    return this.u2w_1.wo(index);
  };
  protoOf(JsonArrayDescriptor).xo = function (name) {
    return this.u2w_1.xo(name);
  };
  protoOf(JsonArrayDescriptor).yo = function (index) {
    return this.u2w_1.yo(index);
  };
  protoOf(JsonArrayDescriptor).zo = function (index) {
    return this.u2w_1.zo(index);
  };
  protoOf(JsonArrayDescriptor).ap = function (index) {
    return this.u2w_1.ap(index);
  };
  protoOf(JsonArrayDescriptor).so = function () {
    return this.u2w_1.so();
  };
  protoOf(JsonArrayDescriptor).ko = function () {
    return this.u2w_1.ko();
  };
  protoOf(JsonArrayDescriptor).to = function () {
    return this.u2w_1.to();
  };
  protoOf(JsonArrayDescriptor).uo = function () {
    return this.u2w_1.uo();
  };
  protoOf(JsonArrayDescriptor).vo = function () {
    return this.u2w_1.vo();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.r2w_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).kn = function () {
    return this.r2w_1;
  };
  protoOf(JsonArraySerializer).w2w = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).ln(encoder, value);
  };
  protoOf(JsonArraySerializer).ln = function (encoder, value) {
    return this.w2w(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).mn = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).mn(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.x2w_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).kn();
    this.y2w_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).ro = function () {
    return this.y2w_1;
  };
  protoOf(JsonObjectDescriptor).wo = function (index) {
    return this.x2w_1.wo(index);
  };
  protoOf(JsonObjectDescriptor).xo = function (name) {
    return this.x2w_1.xo(name);
  };
  protoOf(JsonObjectDescriptor).yo = function (index) {
    return this.x2w_1.yo(index);
  };
  protoOf(JsonObjectDescriptor).zo = function (index) {
    return this.x2w_1.zo(index);
  };
  protoOf(JsonObjectDescriptor).ap = function (index) {
    return this.x2w_1.ap(index);
  };
  protoOf(JsonObjectDescriptor).so = function () {
    return this.x2w_1.so();
  };
  protoOf(JsonObjectDescriptor).ko = function () {
    return this.x2w_1.ko();
  };
  protoOf(JsonObjectDescriptor).to = function () {
    return this.x2w_1.to();
  };
  protoOf(JsonObjectDescriptor).uo = function () {
    return this.x2w_1.uo();
  };
  protoOf(JsonObjectDescriptor).vo = function () {
    return this.x2w_1.vo();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.q2w_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).kn = function () {
    return this.q2w_1;
  };
  protoOf(JsonObjectSerializer).z2w = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).ln(encoder, value);
  };
  protoOf(JsonObjectSerializer).ln = function (encoder, value) {
    return this.z2w(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).mn = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).mn(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.n2w_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).kn = function () {
    return this.n2w_1;
  };
  protoOf(JsonPrimitiveSerializer).a2x = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.ds(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.ds(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).ln = function (encoder, value) {
    return this.a2x(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).mn = function (decoder) {
    var result = asJsonDecoder(decoder).v2v();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result)), toString(result));
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
    this.o2w_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).kn = function () {
    return this.o2w_1;
  };
  protoOf(JsonNullSerializer).b2x = function (encoder, value) {
    verify(encoder);
    encoder.gr();
  };
  protoOf(JsonNullSerializer).ln = function (encoder, value) {
    return this.b2x(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).mn = function (decoder) {
    verify_0(decoder);
    if (decoder.wp()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.xp();
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
    this.p2w_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).kn = function () {
    return this.p2w_1;
  };
  protoOf(JsonLiteralSerializer).c2x = function (encoder, value) {
    verify(encoder);
    if (value.h2w_1) {
      return encoder.pr(value.j2w_1);
    }
    if (!(value.i2w_1 == null)) {
      return encoder.rr(value.i2w_1).pr(value.j2w_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.j2w_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.lr(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.j2w_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).sm_1;
      var tmp_1 = encoder.rr(serializer_0(Companion_getInstance()).kn());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.lr(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.j2w_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.nr(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.j2w_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.hr(tmp3_safe_receiver);
    }
    encoder.pr(value.j2w_1);
  };
  protoOf(JsonLiteralSerializer).ln = function (encoder, value) {
    return this.c2x(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).mn = function (decoder) {
    var result = asJsonDecoder(decoder).v2v();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result)), toString(result));
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
    var tmp0 = $this.d2x_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
    return tmp0.v();
  }
  function defer$o$_get_original_$ref_3cje7k() {
    return function (p0) {
      return _get_original__l7ku1m(p0);
    };
  }
  function defer$1($deferred) {
    this.d2x_1 = lazy($deferred);
  }
  protoOf(defer$1).ro = function () {
    return _get_original__l7ku1m(this).ro();
  };
  protoOf(defer$1).so = function () {
    return _get_original__l7ku1m(this).so();
  };
  protoOf(defer$1).uo = function () {
    return _get_original__l7ku1m(this).uo();
  };
  protoOf(defer$1).wo = function (index) {
    return _get_original__l7ku1m(this).wo(index);
  };
  protoOf(defer$1).xo = function (name) {
    return _get_original__l7ku1m(this).xo(name);
  };
  protoOf(defer$1).yo = function (index) {
    return _get_original__l7ku1m(this).yo(index);
  };
  protoOf(defer$1).zo = function (index) {
    return _get_original__l7ku1m(this).zo(index);
  };
  protoOf(defer$1).ap = function (index) {
    return _get_original__l7ku1m(this).ap(index);
  };
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.f2x_1 = writer;
    this.g2x_1 = true;
  }
  protoOf(Composer).h2x = function () {
    this.g2x_1 = true;
  };
  protoOf(Composer).i2x = function () {
    return Unit_instance;
  };
  protoOf(Composer).j2x = function () {
    this.g2x_1 = false;
  };
  protoOf(Composer).k2x = function () {
    this.g2x_1 = false;
  };
  protoOf(Composer).l2x = function () {
    return Unit_instance;
  };
  protoOf(Composer).m2x = function (v) {
    return this.f2x_1.n2x(v);
  };
  protoOf(Composer).o2x = function (v) {
    return this.f2x_1.p2x(v);
  };
  protoOf(Composer).q2x = function (v) {
    return this.f2x_1.p2x(v.toString());
  };
  protoOf(Composer).r2x = function (v) {
    return this.f2x_1.p2x(v.toString());
  };
  protoOf(Composer).s2x = function (v) {
    return this.f2x_1.t2x(fromInt(v));
  };
  protoOf(Composer).u2x = function (v) {
    return this.f2x_1.t2x(fromInt(v));
  };
  protoOf(Composer).v2x = function (v) {
    return this.f2x_1.t2x(fromInt(v));
  };
  protoOf(Composer).w2x = function (v) {
    return this.f2x_1.t2x(v);
  };
  protoOf(Composer).x2x = function (v) {
    return this.f2x_1.p2x(v.toString());
  };
  protoOf(Composer).y2x = function (value) {
    return this.f2x_1.z2x(value);
  };
  function Composer_0(sb, json) {
    return json.m2t_1.g2v_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.c2y_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).v2x = function (v) {
    if (this.c2y_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.y2x(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.o2x(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).w2x = function (v) {
    if (this.c2y_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.y2x(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.o2x(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).s2x = function (v) {
    if (this.c2y_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.y2x(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.o2x(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).u2x = function (v) {
    if (this.c2y_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.y2x(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.o2x(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.f2y_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).y2x = function (value) {
    if (this.f2y_1) {
      protoOf(Composer).y2x.call(this, value);
    } else {
      protoOf(Composer).o2x.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.i2y_1 = json;
    this.j2y_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).h2x = function () {
    this.g2x_1 = true;
    this.j2y_1 = this.j2y_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).i2x = function () {
    this.j2y_1 = this.j2y_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).j2x = function () {
    this.g2x_1 = false;
    this.o2x('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.j2y_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.o2x(this.i2y_1.m2t_1.i2v_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).k2x = function () {
    if (this.g2x_1)
      this.g2x_1 = false;
    else {
      this.j2x();
    }
  };
  protoOf(ComposerWithPrettyPrint).l2x = function () {
    this.m2x(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.l2y_1 = (!descriptor.ap(index) && descriptor.zo(index).ko());
    return $this.l2y_1;
  }
  function JsonElementMarker$readIfAbsent$ref(p0) {
    var l = function (_this__u8e3s4, p0_0) {
      var tmp0 = p0;
      return readIfAbsent(tmp0, _this__u8e3s4, p0_0);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.k2y_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.l2y_1 = false;
  }
  protoOf(JsonElementMarker).m2y = function (index) {
    this.k2y_1.tw(index);
  };
  protoOf(JsonElementMarker).n2y = function () {
    return this.k2y_1.uw();
  };
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + toString(minify(input, offset)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
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
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.o2y('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.e2u_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.p2y('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidFloatingPointEncoded(value, output) {
    return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + "non-finite floating point values are prohibited because they do not conform JSON specification. It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output))));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function InvalidFloatingPointEncoded_0(value, key, output) {
    return new JsonEncodingException(unexpectedFpErrorMessage(value, key, output));
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.ro() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.so().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + "non-finite floating point values are prohibited because they do not conform JSON specification. It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output)));
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
    if (json.m2t_1.d2v_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.vo();
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.l();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.i();
        while (_iterator__ex2g4s.j()) {
          var element = _iterator__ex2g4s.k();
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
      var tmp$ret$1 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.xo(name);
    if (!(index === -3))
      return index;
    if (!json.m2t_1.n2v_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.ro() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.wo(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.so(), CLASS_getInstance()) ? json.m2t_1.o2v_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.r2y(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.m2t_1.p2v_1 && equals(descriptor.so(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).w1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.r2y(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.uo();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.yo(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.i();
        while (_iterator__ex2g4s.j()) {
          var element = _iterator__ex2g4s.k();
          if (element instanceof JsonNames) {
            destination.g(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s2y_1;
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
          tmp_0 = _this__u8e3s4.wo(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.t2y(_this__u8e3s4, i, _this__u8e3s4.wo(i));
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
    if (builder.l()) {
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.so(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).u1(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.wo(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.wo(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.z1(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.uo();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.wo(tmp_2);
        tmp_1[tmp_2] = $strategy.t2y($this_serializationNamesIndices, tmp_2, baseName);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
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
  function resize($this) {
    var newSize = imul($this.w2y_1, 2);
    $this.u2y_1 = copyOf($this.u2y_1, newSize);
    var tmp = 0;
    var tmp_0 = new Int32Array(newSize);
    while (tmp < newSize) {
      tmp_0[tmp] = -1;
      tmp = tmp + 1 | 0;
    }
    var newIndices = tmp_0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.v2y_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
    $this.v2y_1 = newIndices;
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.u2y_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.v2y_1 = tmp_2;
    this.w2y_1 = -1;
  }
  protoOf(JsonPath).x2y = function (sd) {
    this.w2y_1 = this.w2y_1 + 1 | 0;
    var depth = this.w2y_1;
    if (depth === this.u2y_1.length) {
      resize(this);
    }
    this.u2y_1[depth] = sd;
  };
  protoOf(JsonPath).y2y = function (index) {
    this.v2y_1[this.w2y_1] = index;
  };
  protoOf(JsonPath).z2y = function (key) {
    var tmp;
    if (!(this.v2y_1[this.w2y_1] === -2)) {
      this.w2y_1 = this.w2y_1 + 1 | 0;
      tmp = this.w2y_1 === this.u2y_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.u2y_1[this.w2y_1] = key;
    this.v2y_1[this.w2y_1] = -2;
  };
  protoOf(JsonPath).a2z = function () {
    if (this.v2y_1[this.w2y_1] === -2) {
      this.u2y_1[this.w2y_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).b2z = function () {
    var depth = this.w2y_1;
    if (this.v2y_1[depth] === -2) {
      this.v2y_1[depth] = -1;
      this.w2y_1 = this.w2y_1 - 1 | 0;
    }
    if (!(this.w2y_1 === -1)) {
      this.w2y_1 = this.w2y_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).c2z = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q7('$');
    // Inline function 'kotlin.repeat' call
    var times = this.w2y_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.u2y_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.so(), LIST_getInstance())) {
            if (!(this.v2y_1[index] === -1)) {
              this_0.q7('[');
              this_0.tb(this.v2y_1[index]);
              this_0.q7(']');
            }
          } else {
            var idx = this.v2y_1[index];
            if (idx >= 0) {
              this_0.q7('.');
              this_0.q7(element.wo(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.q7('[');
            this_0.q7("'");
            this_0.p7(element);
            this_0.q7("'");
            this_0.q7(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.c2z();
  };
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.so();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.z9() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.e2z_1)
      return Unit_instance;
    if (!$this.f2z_1)
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
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.z9() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.uo();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.wo(i);
        if (name === $this.d2z_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, rename property with @SerialName annotation or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function JsonSerializersModuleValidator(configuration) {
    this.d2z_1 = configuration.l2v_1;
    this.e2z_1 = configuration.k2v_1;
    this.f2z_1 = !configuration.s2v_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).v17 = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).y17 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.kn();
    checkKind(this, descriptor, actualClass);
    if (!this.e2z_1 && this.f2z_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(JsonSerializersModuleValidator).z17 = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).a18 = function (baseClass, defaultDeserializerProvider) {
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().n();
    var tmp$ret$0 = Array(size);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.ds(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.p2z_1.t2z(6);
    if ($this.p2z_1.u2z() === 4) {
      $this.p2z_1.p2y('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.p2z_1.v2z()) {
      var key = $this.q2z_1 ? $this.p2z_1.x2z() : $this.p2z_1.w2z();
      $this.p2z_1.t2z(5);
      var element = $this.y2z();
      // Inline function 'kotlin.collections.set' call
      result.z1(key, element);
      lastToken = $this.p2z_1.z2z();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.p2z_1.p2y('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.p2z_1.t2z(7);
    } else if (lastToken === 4) {
      if (!$this.r2z_1) {
        invalidTrailingComma($this.p2z_1);
      }
      $this.p2z_1.t2z(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, _this__u8e3s4, $completion) {
    var tmp = new $readObjectCOROUTINE$($this, _this__u8e3s4, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  }
  function readArray($this) {
    var lastToken = $this.p2z_1.z2z();
    if ($this.p2z_1.u2z() === 4) {
      $this.p2z_1.p2y('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.p2z_1.v2z()) {
      var element = $this.y2z();
      result.g(element);
      lastToken = $this.p2z_1.z2z();
      if (!(lastToken === 4)) {
        var tmp0 = $this.p2z_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.e2u_1;
        if (!condition) {
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.p2y(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.p2z_1.t2z(9);
    } else if (lastToken === 4) {
      if (!$this.r2z_1) {
        invalidTrailingComma($this.p2z_1, 'array');
      }
      $this.p2z_1.t2z(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.q2z_1 || !isString) {
      tmp = $this.p2z_1.x2z();
    } else {
      tmp = $this.p2z_1.w2z();
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
    this.w30_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).a31 = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.b31($this$DeepRecursiveFunction, it, $completion);
    tmp.a8_1 = Unit_instance;
    tmp.b8_1 = null;
    return tmp.g8();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).t8 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.a31(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 3;
            var tmp0_subject = this.w30_1.p2z_1.u2z();
            if (tmp0_subject === 1) {
              this.z30_1 = readValue(this.w30_1, true);
              this.y7_1 = 2;
              continue $sm;
            } else {
              if (tmp0_subject === 0) {
                this.z30_1 = readValue(this.w30_1, false);
                this.y7_1 = 2;
                continue $sm;
              } else {
                if (tmp0_subject === 6) {
                  this.y7_1 = 1;
                  suspendResult = readObject_0(this.w30_1, this.x30_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject === 8) {
                    this.z30_1 = readArray(this.w30_1);
                    this.y7_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.w30_1.p2z_1.p2y("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.z30_1 = suspendResult;
            this.y7_1 = 2;
            continue $sm;
          case 2:
            return this.z30_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).b31 = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.w30_1, completion);
    i.x30_1 = $this$DeepRecursiveFunction;
    i.y30_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.a31($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i30_1 = _this__u8e3s4;
    this.j30_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$).g8 = function () {
    var suspendResult = this.a8_1;
    $sm: do
      try {
        var tmp = this.y7_1;
        switch (tmp) {
          case 0:
            this.z7_1 = 5;
            this.l30_1 = this.i30_1;
            this.m30_1 = this.l30_1.p2z_1.t2z(6);
            if (this.l30_1.p2z_1.u2z() === 4) {
              this.l30_1.p2z_1.p2y('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.k30_1 = LinkedHashMap_init_$Create$();
            this.y7_1 = 1;
            continue $sm;
          case 1:
            if (!this.l30_1.p2z_1.v2z()) {
              this.y7_1 = 4;
              continue $sm;
            }

            this.n30_1 = this.l30_1.q2z_1 ? this.l30_1.p2z_1.x2z() : this.l30_1.p2z_1.w2z();
            this.l30_1.p2z_1.t2z(5);
            this.y7_1 = 2;
            suspendResult = this.j30_1.yk(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.k30_1;
            var key = this.n30_1;
            tmp0.z1(key, element);
            this.m30_1 = this.l30_1.p2z_1.z2z();
            var tmp0_subject = this.m30_1;
            if (tmp0_subject === 4) {
              this.y7_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.y7_1 = 4;
                continue $sm;
              } else {
                this.l30_1.p2z_1.p2y('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.y7_1 = 1;
            continue $sm;
          case 4:
            if (this.m30_1 === 6) {
              this.l30_1.p2z_1.t2z(7);
            } else if (this.m30_1 === 4) {
              if (!this.l30_1.r2z_1) {
                invalidTrailingComma(this.l30_1.p2z_1);
              }
              this.l30_1.p2z_1.t2z(7);
            }

            return new JsonObject(this.k30_1);
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
  function JsonTreeReader(configuration, lexer) {
    this.p2z_1 = lexer;
    this.q2z_1 = configuration.e2v_1;
    this.r2z_1 = configuration.q2v_1;
    this.s2z_1 = 0;
  }
  protoOf(JsonTreeReader).y2z = function () {
    var token = this.p2z_1.u2z();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.s2z_1 = this.s2z_1 + 1 | 0;
      if (this.s2z_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.s2z_1 = this.s2z_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.p2z_1.p2y('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.vo().i();
    while (_iterator__ex2g4s.j()) {
      var annotation = _iterator__ex2g4s.k();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.c31_1;
    }
    return json.m2t_1.l2v_1;
  }
  function throwJsonElementPolymorphicException(serialName, element) {
    throw new JsonEncodingException('Class with serial name ' + serialName + ' cannot be serialized polymorphically because it is represented as ' + getKClassFromExpression(element).z9() + '. Make sure that its JsonTransformingSerializer returns JsonObject, so class discriminator can be added to it.');
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.kn()).q1(classDiscriminator)) {
      var baseName = serializer.kn().ro();
      var actualName = actualSerializer.kn().ro();
      // Inline function 'kotlin.error' call
      var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function checkKind_0(kind) {
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
  function access$validateIfSealed$tPolymorphicKt(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.q2y_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).d31 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.q2y_1;
    var value_0 = this_0.w1(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.z1(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.z1(tmp2, value_1);
  };
  protoOf(DescriptorSchemaCache).r2y = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.e31(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.d31(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).e31 = function (descriptor, key) {
    var tmp0_safe_receiver = this.q2y_1.w1(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.w1(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.f31_1 = discriminatorToSkip;
  }
  function trySkip($this, _this__u8e3s4, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.f31_1 === unknownKey) {
      _this__u8e3s4.f31_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.cr(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.y2t_1.u2z() === 4) {
      $this.y2t_1.p2y('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.a2u_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.a2u_1 === -1)) {
        hasComma = $this.y2t_1.h31();
      }
    } else {
      $this.y2t_1.g31(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.y2t_1.v2z()) {
      if (decodingKey) {
        if ($this.a2u_1 === -1) {
          var tmp0 = $this.y2t_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.e2u_1;
          if (!condition) {
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.p2y(tmp$ret$0, position);
          }
        } else {
          var tmp0_0 = $this.y2t_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp0_0.e2u_1;
          if (!condition_0) {
            var tmp$ret$2 = 'Expected comma after the key-value pair';
            tmp0_0.p2y(tmp$ret$2, position_0);
          }
        }
      }
      $this.a2u_1 = $this.a2u_1 + 1 | 0;
      tmp = $this.a2u_1;
    } else {
      if (hasComma && !$this.w2t_1.m2t_1.q2v_1) {
        invalidTrailingComma($this.y2t_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.w2t_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.ap(index);
      var elementDescriptor = descriptor.zo(index);
      var tmp;
      if (isOptional && !elementDescriptor.ko()) {
        tmp = $this.y2t_1.i31(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.so(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.ko()) {
          tmp_0 = $this.y2t_1.i31(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.y2t_1.j31($this.c2u_1.e2v_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.m2t_1.h2v_1 && elementDescriptor.ko();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.y2t_1.w2z();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.y2t_1.h31();
    while ($this.y2t_1.v2z()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.y2t_1.g31(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.w2t_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.c2u_1.j2v_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.y2t_1.h31();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.d2u_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.m2y(index);
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
    if (hasComma && !$this.w2t_1.m2t_1.q2v_1) {
      invalidTrailingComma($this.y2t_1);
    }
    var tmp1_safe_receiver = $this.d2u_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.n2y();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.w2t_1) || trySkip($this, $this.b2u_1, key)) {
      $this.y2t_1.l31($this.c2u_1.e2v_1);
    } else {
      $this.y2t_1.f2u_1.b2z();
      $this.y2t_1.k31(key);
    }
    return $this.y2t_1.h31();
  }
  function decodeListIndex($this) {
    var hasComma = $this.y2t_1.h31();
    var tmp;
    if ($this.y2t_1.v2z()) {
      if (!($this.a2u_1 === -1) && !hasComma) {
        $this.y2t_1.p2y('Expected end of the array or comma');
      }
      $this.a2u_1 = $this.a2u_1 + 1 | 0;
      tmp = $this.a2u_1;
    } else {
      if (hasComma && !$this.w2t_1.m2t_1.q2v_1) {
        invalidTrailingComma($this.y2t_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.c2u_1.e2v_1) {
      tmp = $this.y2t_1.n31();
    } else {
      tmp = $this.y2t_1.m31();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.w2t_1 = json;
    this.x2t_1 = mode;
    this.y2t_1 = lexer;
    this.z2t_1 = this.w2t_1.ar();
    this.a2u_1 = -1;
    this.b2u_1 = discriminatorHolder;
    this.c2u_1 = this.w2t_1.m2t_1;
    this.d2u_1 = this.c2u_1.h2v_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).x2v = function () {
    return this.w2t_1;
  };
  protoOf(StreamingJsonDecoder).ar = function () {
    return this.z2t_1;
  };
  protoOf(StreamingJsonDecoder).v2v = function () {
    return (new JsonTreeReader(this.w2t_1.m2t_1, this.y2t_1)).y2z();
  };
  protoOf(StreamingJsonDecoder).kq = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.w2t_1.m2t_1.k2v_1;
      }
      if (tmp) {
        return deserializer.mn(this);
      }
      var discriminator = classDiscriminator(deserializer.kn(), this.w2t_1);
      var tmp0_elvis_lhs = this.y2t_1.o31(discriminator, this.c2u_1.e2v_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_1;
          if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
            tmp_1 = true;
          } else {
            tmp_1 = this.x2v().m2t_1.k2v_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.mn(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.kn(), this.x2v());
          var tmp0 = this.v2v();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.kn().ro();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).z9();
            var tmp_3 = getKClassFromExpression(tmp0).z9();
            var tmp$ret$1 = this.y2t_1.f2u_1.c2z();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.l29(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_4;
          try {
            tmp_4 = findPolymorphicSerializer(tmp2, this, type);
          } catch ($p) {
            var tmp_5;
            if ($p instanceof SerializationException) {
              var it = $p;
              throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_4;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.x2v(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p) {
        var tmp_8;
        if ($p instanceof SerializationException) {
          var it_0 = $p;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.y2t_1.p2y(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.b2u_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.mn(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.eo_1, plus(e.message, ' at path: ') + this.y2t_1.f2u_1.c2z(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).lq = function (descriptor) {
    var newMode = switchMode(this.w2t_1, descriptor);
    this.y2t_1.f2u_1.x2y(descriptor);
    this.y2t_1.g31(newMode.r31_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.h2_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.w2t_1, newMode, this.y2t_1, descriptor, this.b2u_1);
        break;
      default:
        var tmp_0;
        if (this.x2t_1.equals(newMode) && this.w2t_1.m2t_1.h2v_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.w2t_1, newMode, this.y2t_1, descriptor, this.b2u_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).mq = function (descriptor) {
    if (descriptor.uo() === 0 && ignoreUnknownKeys(descriptor, this.w2t_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.y2t_1.h31() && !this.w2t_1.m2t_1.q2v_1) {
      invalidTrailingComma(this.y2t_1, '');
    }
    this.y2t_1.g31(this.x2t_1.s31_1);
    this.y2t_1.f2u_1.b2z();
  };
  protoOf(StreamingJsonDecoder).wp = function () {
    var tmp;
    var tmp0_safe_receiver = this.d2u_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l2y_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.y2t_1.t31();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).xp = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).xq = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.x2t_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.y2t_1.f2u_1.a2z();
    }
    var value = protoOf(AbstractDecoder).xq.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.y2t_1.f2u_1.z2y(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).cr = function (descriptor) {
    var index;
    switch (this.x2t_1.h2_1) {
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
    if (!this.x2t_1.equals(WriteMode_MAP_getInstance())) {
      this.y2t_1.f2u_1.y2y(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).yp = function () {
    return this.y2t_1.u31();
  };
  protoOf(StreamingJsonDecoder).zp = function () {
    var value = this.y2t_1.v31();
    if (!equalsLong(value, fromInt(convertToByte(value)))) {
      this.y2t_1.p2y("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  };
  protoOf(StreamingJsonDecoder).aq = function () {
    var value = this.y2t_1.v31();
    if (!equalsLong(value, fromInt(convertToShort(value)))) {
      this.y2t_1.p2y("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  };
  protoOf(StreamingJsonDecoder).bq = function () {
    var value = this.y2t_1.v31();
    if (!equalsLong(value, fromInt(convertToInt(value)))) {
      this.y2t_1.p2y("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  };
  protoOf(StreamingJsonDecoder).cq = function () {
    return this.y2t_1.v31();
  };
  protoOf(StreamingJsonDecoder).dq = function () {
    var tmp0 = this.y2t_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.x2z();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.p2y("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.w2t_1.m2t_1.m2v_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.y2t_1, result);
  };
  protoOf(StreamingJsonDecoder).eq = function () {
    var tmp0 = this.y2t_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.x2z();
      try {
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.p2y("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.w2t_1.m2t_1.m2v_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.y2t_1, result);
  };
  protoOf(StreamingJsonDecoder).fq = function () {
    var string = this.y2t_1.x2z();
    if (!(string.length === 1)) {
      this.y2t_1.p2y("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  };
  protoOf(StreamingJsonDecoder).gq = function () {
    var tmp;
    if (this.c2u_1.e2v_1) {
      tmp = this.y2t_1.n31();
    } else {
      tmp = this.y2t_1.w2z();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).iq = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.y2t_1, this.w2t_1) : protoOf(AbstractDecoder).iq.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).hq = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.w2t_1, this.gq(), ' at path ' + this.y2t_1.f2u_1.c2z());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.w31_1 = lexer;
    this.x31_1 = json.ar();
  }
  protoOf(JsonDecoderForUnsignedTypes).ar = function () {
    return this.x31_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).cr = function (descriptor) {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).bq = function () {
    var tmp0 = this.w31_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.x2z();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.p2y("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).cq = function () {
    var tmp0 = this.w31_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.x2z();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.p2y("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).zp = function () {
    var tmp0 = this.w31_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.x2z();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.p2y("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).aq = function () {
    var tmp0 = this.w31_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.x2z();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.p2y("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
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
    $this.g2z_1.j2x();
    $this.pr(discriminator);
    $this.g2z_1.m2x(_Char___init__impl__6a9atx(58));
    $this.g2z_1.l2x();
    $this.pr(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.g2z_1 = composer;
    this.h2z_1 = json;
    this.i2z_1 = mode;
    this.j2z_1 = modeReuseCache;
    this.k2z_1 = this.h2z_1.ar();
    this.l2z_1 = this.h2z_1.m2t_1;
    this.m2z_1 = false;
    this.n2z_1 = null;
    this.o2z_1 = null;
    var i = this.i2z_1.h2_1;
    if (!(this.j2z_1 == null)) {
      if (!(this.j2z_1[i] === null) || !(this.j2z_1[i] === this)) {
        this.j2z_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).x2v = function () {
    return this.h2z_1;
  };
  protoOf(StreamingJsonEncoder).ar = function () {
    return this.k2z_1;
  };
  protoOf(StreamingJsonEncoder).e2x = function (element) {
    var tmp;
    if (!(this.n2z_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.o2z_1, element);
    }
    this.ds(JsonElementSerializer_getInstance(), element);
  };
  protoOf(StreamingJsonEncoder).is = function (descriptor, index) {
    return this.l2z_1.c2v_1;
  };
  protoOf(StreamingJsonEncoder).ds = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.x2v().m2t_1.k2v_1) {
        serializer.ln(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.x2v().m2t_1.s2v_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.x2v().m2t_1.s2v_1.h2_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.kn().so();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.kn(), this.x2v()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.kn()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
          checkKind_0(actual.kn().so());
        }
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        var serialName = actualSerializer.kn().ro();
        this.n2z_1 = baseClassDiscriminator;
        this.o2z_1 = serialName;
      }
      actualSerializer.ln(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).lq = function (descriptor) {
    var newMode = switchMode(this.h2z_1, descriptor);
    if (!(newMode.r31_1 === _Char___init__impl__6a9atx(0))) {
      this.g2z_1.m2x(newMode.r31_1);
      this.g2z_1.h2x();
    }
    var discriminator = this.n2z_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.o2z_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.ro() : tmp0_elvis_lhs);
      this.n2z_1 = null;
      this.o2z_1 = null;
    }
    if (this.i2z_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.j2z_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.h2_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.g2z_1, this.h2z_1, newMode, this.j2z_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).mq = function (descriptor) {
    if (!(this.i2z_1.s31_1 === _Char___init__impl__6a9atx(0))) {
      this.g2z_1.i2x();
      this.g2z_1.k2x();
      this.g2z_1.m2x(this.i2z_1.s31_1);
    }
  };
  protoOf(StreamingJsonEncoder).er = function (descriptor, index) {
    switch (this.i2z_1.h2_1) {
      case 1:
        if (!this.g2z_1.g2x_1) {
          this.g2z_1.m2x(_Char___init__impl__6a9atx(44));
        }

        this.g2z_1.j2x();
        break;
      case 2:
        if (!this.g2z_1.g2x_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.g2z_1.m2x(_Char___init__impl__6a9atx(44));
            this.g2z_1.j2x();
            tmp_0 = true;
          } else {
            this.g2z_1.m2x(_Char___init__impl__6a9atx(58));
            this.g2z_1.l2x();
            tmp_0 = false;
          }
          tmp.m2z_1 = tmp_0;
        } else {
          this.m2z_1 = true;
          this.g2z_1.j2x();
        }

        break;
      case 3:
        if (index === 0)
          this.m2z_1 = true;
        if (index === 1) {
          this.g2z_1.m2x(_Char___init__impl__6a9atx(44));
          this.g2z_1.l2x();
          this.m2z_1 = false;
        }

        break;
      default:
        if (!this.g2z_1.g2x_1) {
          this.g2z_1.m2x(_Char___init__impl__6a9atx(44));
        }

        this.g2z_1.j2x();
        this.pr(getJsonElementName(descriptor, this.h2z_1, index));
        this.g2z_1.m2x(_Char___init__impl__6a9atx(58));
        this.g2z_1.l2x();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).es = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.l2z_1.h2v_1) {
      protoOf(AbstractEncoder).es.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).rr = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.g2z_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.g2z_1;
      } else {
        var tmp0 = this.g2z_1.f2x_1;
        var p1 = this.m2z_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
      }
      var tmp$ret$1 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$1, this.h2z_1, this.i2z_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.g2z_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.g2z_1;
      } else {
        var tmp0_0 = this.g2z_1.f2x_1;
        var p1_0 = this.m2z_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
      }
      var tmp$ret$3 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$3, this.h2z_1, this.i2z_1, null);
    } else if (!(this.n2z_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.o2z_1 = descriptor.ro();
      tmp = this;
    } else {
      tmp = protoOf(AbstractEncoder).rr.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).gr = function () {
    this.g2z_1.o2x('null');
  };
  protoOf(StreamingJsonEncoder).hr = function (value) {
    if (this.m2z_1) {
      this.pr(value.toString());
    } else {
      this.g2z_1.x2x(value);
    }
  };
  protoOf(StreamingJsonEncoder).ir = function (value) {
    if (this.m2z_1) {
      this.pr(value.toString());
    } else {
      this.g2z_1.s2x(value);
    }
  };
  protoOf(StreamingJsonEncoder).jr = function (value) {
    if (this.m2z_1) {
      this.pr(value.toString());
    } else {
      this.g2z_1.u2x(value);
    }
  };
  protoOf(StreamingJsonEncoder).kr = function (value) {
    if (this.m2z_1) {
      this.pr(value.toString());
    } else {
      this.g2z_1.v2x(value);
    }
  };
  protoOf(StreamingJsonEncoder).lr = function (value) {
    if (this.m2z_1) {
      this.pr(value.toString());
    } else {
      this.g2z_1.w2x(value);
    }
  };
  protoOf(StreamingJsonEncoder).mr = function (value) {
    if (this.m2z_1) {
      this.pr(value.toString());
    } else {
      this.g2z_1.q2x(value);
    }
    if (!this.l2z_1.m2v_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.g2z_1.f2x_1));
    }
  };
  protoOf(StreamingJsonEncoder).nr = function (value) {
    if (this.m2z_1) {
      this.pr(value.toString());
    } else {
      this.g2z_1.r2x(value);
    }
    if (!this.l2z_1.m2v_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.g2z_1.f2x_1));
    }
  };
  protoOf(StreamingJsonEncoder).or = function (value) {
    this.pr(toString_1(value));
  };
  protoOf(StreamingJsonEncoder).pr = function (value) {
    return this.g2z_1.y2x(value);
  };
  protoOf(StreamingJsonEncoder).qr = function (enumDescriptor, index) {
    this.pr(enumDescriptor.wo(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.to() && get_unsignedNumberDescriptors().q1(_this__u8e3s4);
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.to() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).kn(), serializer_0(Companion_getInstance()).kn(), serializer_2(Companion_getInstance_1()).kn(), serializer_3(Companion_getInstance_2()).kn()]);
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
    _this__u8e3s4.r7(_Char___init__impl__6a9atx(34));
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
          _this__u8e3s4.qb(value, lastPos, i);
          _this__u8e3s4.q7(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.qb(value, lastPos, value.length);
    else
      _this__u8e3s4.q7(value);
    _this__u8e3s4.r7(_Char___init__impl__6a9atx(34));
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
      var this_7 = new Int8Array(93);
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
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_9);
      this_7[tmp] = toByte(tmp$ret$1);
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(92);
      var tmp_0 = Char__toInt_impl_vasixd(this_10);
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(92);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_11);
      this_7[tmp_0] = toByte(tmp$ret$3);
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(9);
      var tmp_1 = Char__toInt_impl_vasixd(this_12);
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(116);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_13);
      this_7[tmp_1] = toByte(tmp$ret$5);
      // Inline function 'kotlin.code' call
      var this_14 = _Char___init__impl__6a9atx(8);
      var tmp_2 = Char__toInt_impl_vasixd(this_14);
      // Inline function 'kotlin.code' call
      var this_15 = _Char___init__impl__6a9atx(98);
      var tmp$ret$7 = Char__toInt_impl_vasixd(this_15);
      this_7[tmp_2] = toByte(tmp$ret$7);
      // Inline function 'kotlin.code' call
      var this_16 = _Char___init__impl__6a9atx(10);
      var tmp_3 = Char__toInt_impl_vasixd(this_16);
      // Inline function 'kotlin.code' call
      var this_17 = _Char___init__impl__6a9atx(110);
      var tmp$ret$9 = Char__toInt_impl_vasixd(this_17);
      this_7[tmp_3] = toByte(tmp$ret$9);
      // Inline function 'kotlin.code' call
      var this_18 = _Char___init__impl__6a9atx(13);
      var tmp_4 = Char__toInt_impl_vasixd(this_18);
      // Inline function 'kotlin.code' call
      var this_19 = _Char___init__impl__6a9atx(114);
      var tmp$ret$11 = Char__toInt_impl_vasixd(this_19);
      this_7[tmp_4] = toByte(tmp$ret$11);
      // Inline function 'kotlin.code' call
      var this_20 = _Char___init__impl__6a9atx(102);
      var tmp$ret$12 = Char__toInt_impl_vasixd(this_20);
      this_7[12] = toByte(tmp$ret$12);
      ESCAPE_MARKERS = this_7;
    }
  }
  function readJson(json, element, deserializer) {
    var tmp;
    if (element instanceof JsonObject) {
      tmp = new JsonTreeDecoder(json, element);
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
    return input.kq(deserializer);
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.e32(tag), toString($this.f32()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.a32_1 = json;
    this.b32_1 = value;
    this.c32_1 = polymorphicDiscriminator;
    this.d32_1 = this.x2v().m2t_1;
  }
  protoOf(AbstractJsonTreeDecoder).x2v = function () {
    return this.a32_1;
  };
  protoOf(AbstractJsonTreeDecoder).v = function () {
    return this.b32_1;
  };
  protoOf(AbstractJsonTreeDecoder).ar = function () {
    return this.x2v().ar();
  };
  protoOf(AbstractJsonTreeDecoder).f32 = function () {
    var tmp0_safe_receiver = this.t14();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.g32(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.v() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).e32 = function (currentTag) {
    return this.v14() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).v2v = function () {
    return this.f32();
  };
  protoOf(AbstractJsonTreeDecoder).kq = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.x2v().m2t_1.k2v_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.mn(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.kn(), this.x2v());
      var tmp0 = this.v2v();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.kn().ro();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).z9();
        var tmp_1 = getKClassFromExpression(tmp0).z9();
        var tmp$ret$1 = this.v14();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.l29(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_2;
      try {
        tmp_2 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof SerializationException) {
          var it = $p;
          throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_2;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.x2v(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).u14 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).lq = function (descriptor) {
    var currentObject = this.f32();
    var tmp0_subject = descriptor.so();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.x2v();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.ro();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).z9();
        var tmp_3 = getKClassFromExpression(currentObject).z9();
        var tmp$ret$0 = this.v14();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.x2v();
        var keyDescriptor = carrierDescriptor(descriptor.zo(0), this_0.ar());
        var keyKind = keyDescriptor.so();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          var tmp_6 = this.x2v();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.ro();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).z9();
            var tmp_8 = getKClassFromExpression(currentObject).z9();
            var tmp$ret$3 = this.v14();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.m2t_1.f2v_1) {
            var tmp_9 = this.x2v();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.ro();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).z9();
              var tmp_11 = getKClassFromExpression(currentObject).z9();
              var tmp$ret$7 = this.v14();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.x2v();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.ro();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).z9();
          var tmp_14 = getKClassFromExpression(currentObject).z9();
          var tmp$ret$12 = this.v14();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.c32_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).mq = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).wp = function () {
    var tmp = this.f32();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).h32 = function (tag, enumDescriptor) {
    var tmp = this.x2v();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.g32(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.ro();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp_0 = getKClass(JsonPrimitive).z9();
      var tmp_1 = getKClassFromExpression(tmp2).z9();
      var tmp$ret$0 = this.e32(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.e2w());
  };
  protoOf(AbstractJsonTreeDecoder).h15 = function (tag, enumDescriptor) {
    return this.h32((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).i32 = function (tag) {
    return !(this.g32(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).x14 = function (tag) {
    return this.i32((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).j32 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.g32(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).z9();
        var tmp_0 = getKClassFromExpression(value).z9();
        var tmp$ret$0 = this.e32(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'boolean' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
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
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).y14 = function (tag) {
    return this.j32((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).k32 = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.g32(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).z9();
        var tmp_0 = getKClassFromExpression(value).z9();
        var tmp$ret$0 = this.e32(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'byte' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = convertToByte(result);
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
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
    return tmp$ret$5;
  };
  protoOf(AbstractJsonTreeDecoder).z14 = function (tag) {
    return this.k32((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).l32 = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.g32(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).z9();
        var tmp_0 = getKClassFromExpression(value).z9();
        var tmp$ret$0 = this.e32(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'short' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = convertToShort(result);
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
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
    return tmp$ret$5;
  };
  protoOf(AbstractJsonTreeDecoder).a15 = function (tag) {
    return this.l32((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).m32 = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.g32(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).z9();
        var tmp_0 = getKClassFromExpression(value).z9();
        var tmp$ret$0 = this.e32(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'int' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = convertToInt(result);
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
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
    return tmp$ret$5;
  };
  protoOf(AbstractJsonTreeDecoder).b15 = function (tag) {
    return this.m32((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).n32 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.g32(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).z9();
        var tmp_0 = getKClassFromExpression(value).z9();
        var tmp$ret$0 = this.e32(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'long' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
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
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).c15 = function (tag) {
    return this.n32((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).o32 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.g32(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).z9();
        var tmp_0 = getKClassFromExpression(value).z9();
        var tmp$ret$0 = this.e32(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'float' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
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
    var result = tmp$ret$4;
    var specialFp = this.x2v().m2t_1.m2v_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.f32()));
  };
  protoOf(AbstractJsonTreeDecoder).d15 = function (tag) {
    return this.o32((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).p32 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.g32(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).z9();
        var tmp_0 = getKClassFromExpression(value).z9();
        var tmp$ret$0 = this.e32(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'double' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
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
    var result = tmp$ret$4;
    var specialFp = this.x2v().m2t_1.m2v_1;
    if (specialFp || isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.f32()));
  };
  protoOf(AbstractJsonTreeDecoder).e15 = function (tag) {
    return this.p32((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).q32 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.g32(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).z9();
        var tmp_0 = getKClassFromExpression(value).z9();
        var tmp$ret$0 = this.e32(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.e2w()));
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1.e1_1;
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
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).f15 = function (tag) {
    return this.q32((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).r32 = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.g32(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).z9();
      var tmp_0 = getKClassFromExpression(value).z9();
      var tmp$ret$0 = this.e32(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.e32(tag), toString(this.f32()));
    if (!value_0.h2w_1 && !this.x2v().m2t_1.e2v_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.e32(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.f32()));
    }
    return value_0.j2w_1;
  };
  protoOf(AbstractJsonTreeDecoder).g15 = function (tag) {
    return this.r32((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).s32 = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.x2v();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.g32(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.ro();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp_1 = getKClass(JsonPrimitive).z9();
        var tmp_2 = getKClassFromExpression(tmp2).z9();
        var tmp$ret$0 = this.e32(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.e2w());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.x2v());
    } else {
      tmp = protoOf(NamedValueDecoder).i15.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).i15 = function (tag, inlineDescriptor) {
    return this.s32((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).iq = function (descriptor) {
    return !(this.t14() == null) ? protoOf(NamedValueDecoder).iq.call(this, descriptor) : (new JsonPrimitiveDecoder(this.x2v(), this.v(), this.c32_1)).iq(descriptor);
  };
  function setForceNull($this, descriptor, index) {
    $this.c33_1 = (!$this.x2v().m2t_1.h2v_1 && !descriptor.ap(index) && descriptor.zo(index).ko());
    return $this.c33_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.z32_1 = value;
    this.a33_1 = polyDescriptor;
    this.b33_1 = 0;
    this.c33_1 = false;
  }
  protoOf(JsonTreeDecoder).v = function () {
    return this.z32_1;
  };
  protoOf(JsonTreeDecoder).cr = function (descriptor) {
    $l$loop: while (this.b33_1 < descriptor.uo()) {
      var _unary__edvuaz = this.b33_1;
      this.b33_1 = _unary__edvuaz + 1 | 0;
      var name = this.o14(descriptor, _unary__edvuaz);
      var index = this.b33_1 - 1 | 0;
      this.c33_1 = false;
      var tmp;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.v();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).u1(name)) {
        tmp = true;
      } else {
        tmp = setForceNull(this, descriptor, index);
      }
      if (tmp) {
        if (!this.d32_1.j2v_1)
          return index;
        var tmp0 = this.x2v();
        var tmp$ret$3;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.ap(index);
          var elementDescriptor = descriptor.zo(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.ko()) {
            var tmp_1 = this.d33(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$3 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.so(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.ko()) {
              var tmp_3 = this.d33(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$3 = false;
              break $l$block_2;
            }
            var tmp_4 = this.d33(name);
            var tmp0_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$3 = false;
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            var enumValue = tmp_5;
            var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
            var coerceToNull = !tmp0.m2t_1.h2v_1 && elementDescriptor.ko();
            if (enumIndex === -3 && (isOptional || coerceToNull)) {
              if (setForceNull(this, descriptor, index))
                return index;
              tmp$ret$3 = true;
              break $l$block_2;
            }
          }
          tmp$ret$3 = false;
        }
        if (tmp$ret$3)
          continue $l$loop;
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).wp = function () {
    return !this.c33_1 && protoOf(AbstractJsonTreeDecoder).wp.call(this);
  };
  protoOf(JsonTreeDecoder).p14 = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.x2v());
    var baseName = descriptor.wo(index);
    if (strategy == null) {
      if (!this.d32_1.n2v_1)
        return baseName;
      if (this.v().x1().q1(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.x2v(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.v().x1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (deserializationNamesMap_0.w1(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.t2y(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).g32 = function (tag) {
    return getValue(this.v(), tag);
  };
  protoOf(JsonTreeDecoder).d33 = function (tag) {
    return this.v().l29(tag);
  };
  protoOf(JsonTreeDecoder).lq = function (descriptor) {
    if (descriptor === this.a33_1) {
      var tmp = this.x2v();
      var tmp2 = this.f32();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.a33_1.ro();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).z9();
        var tmp_1 = getKClassFromExpression(tmp2).z9();
        var tmp$ret$0 = this.v14();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
      }
      return new JsonTreeDecoder(tmp, tmp2, this.c32_1, this.a33_1);
    }
    return protoOf(AbstractJsonTreeDecoder).lq.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).mq = function (descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.x2v())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.so();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.x2v());
    var tmp_1;
    if (strategy == null && !this.d32_1.n2v_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.x2v(), descriptor).x1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.x2v()).e31(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.v().x1().i();
    while (_iterator__ex2g4s.j()) {
      var key = _iterator__ex2g4s.k();
      if (!names.q1(key) && !(key === this.c32_1)) {
        throw JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "' at element: " + this.v14() + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.v().toString()))));
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.k33_1 = value;
    this.l33_1 = this.k33_1.n();
    this.m33_1 = -1;
  }
  protoOf(JsonTreeListDecoder).v = function () {
    return this.k33_1;
  };
  protoOf(JsonTreeListDecoder).p14 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).g32 = function (tag) {
    return this.k33_1.m(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).cr = function (descriptor) {
    while (this.m33_1 < (this.l33_1 - 1 | 0)) {
      this.m33_1 = this.m33_1 + 1 | 0;
      return this.m33_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.t33_1 = value;
    this.j15('primitive');
  }
  protoOf(JsonPrimitiveDecoder).v = function () {
    return this.t33_1;
  };
  protoOf(JsonPrimitiveDecoder).cr = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).g32 = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.t33_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.e34_1 = value;
    this.f34_1 = toList(this.e34_1.x1());
    this.g34_1 = imul(this.f34_1.n(), 2);
    this.h34_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).v = function () {
    return this.e34_1;
  };
  protoOf(JsonTreeMapDecoder).p14 = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.f34_1.m(i);
  };
  protoOf(JsonTreeMapDecoder).cr = function (descriptor) {
    while (this.h34_1 < (this.g34_1 - 1 | 0)) {
      this.h34_1 = this.h34_1 + 1 | 0;
      return this.h34_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).g32 = function (tag) {
    return (this.h34_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.e34_1, tag);
  };
  protoOf(JsonTreeMapDecoder).mq = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.kn())).kq(deserializer);
  }
  function writeJson(json, value, serializer) {
    var result = {_v: null};
    var encoder = new JsonTreeEncoder(json, writeJson$lambda(result));
    encoder.ds(serializer, value);
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
    tmp.u34_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonTreeEncoder).v34 = function (key, element) {
    // Inline function 'kotlin.collections.set' call
    this.u34_1.z1(key, element);
  };
  protoOf(JsonTreeEncoder).es = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.l34_1.h2v_1) {
      protoOf(AbstractJsonTreeEncoder).es.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(JsonTreeEncoder).w34 = function () {
    return new JsonObject(this.u34_1);
  };
  function inlineUnsignedNumberEncoder($this, tag) {
    return new AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1($this, tag);
  }
  function inlineUnquotedLiteralEncoder($this, tag, inlineDescriptor) {
    return new AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1($this, tag, inlineDescriptor);
  }
  function AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1(this$0, $tag) {
    this.l35_1 = this$0;
    this.m35_1 = $tag;
    AbstractEncoder.call(this);
    this.k35_1 = this$0.j34_1.ar();
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).ar = function () {
    return this.k35_1;
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).n35 = function (s) {
    return this.l35_1.v34(this.m35_1, new JsonLiteral(s, false));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).kr = function (value) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
    return this.n35(UInt__toString_impl_dbgl21(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).lr = function (value) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(value);
    return this.n35(ULong__toString_impl_f9au7k(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).ir = function (value) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
    return this.n35(UByte__toString_impl_v72jg(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).jr = function (value) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(value);
    return this.n35(UShort__toString_impl_edaoee(tmp$ret$0));
  };
  function AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1(this$0, $tag, $inlineDescriptor) {
    this.o35_1 = this$0;
    this.p35_1 = $tag;
    this.q35_1 = $inlineDescriptor;
    AbstractEncoder.call(this);
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).ar = function () {
    return this.o35_1.j34_1.ar();
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).pr = function (value) {
    return this.o35_1.v34(this.p35_1, new JsonLiteral(value, false, this.q35_1));
  };
  function AbstractJsonTreeEncoder$beginStructure$lambda(this$0) {
    return function (node) {
      this$0.v34(this$0.c16(), node);
      return Unit_instance;
    };
  }
  function AbstractJsonTreeEncoder(json, nodeConsumer) {
    NamedValueEncoder.call(this);
    this.j34_1 = json;
    this.k34_1 = nodeConsumer;
    this.l34_1 = this.j34_1.m2t_1;
    this.m34_1 = null;
    this.n34_1 = null;
  }
  protoOf(AbstractJsonTreeEncoder).x2v = function () {
    return this.j34_1;
  };
  protoOf(AbstractJsonTreeEncoder).ar = function () {
    return this.j34_1.ar();
  };
  protoOf(AbstractJsonTreeEncoder).p14 = function (descriptor, index) {
    return getJsonElementName(descriptor, this.j34_1, index);
  };
  protoOf(AbstractJsonTreeEncoder).e2x = function (element) {
    var tmp;
    if (!(this.m34_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.n34_1, element);
    }
    this.ds(JsonElementSerializer_getInstance(), element);
  };
  protoOf(AbstractJsonTreeEncoder).is = function (descriptor, index) {
    return this.l34_1.c2v_1;
  };
  protoOf(AbstractJsonTreeEncoder).u14 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeEncoder).gs = function () {
  };
  protoOf(AbstractJsonTreeEncoder).gr = function () {
    var tmp0_elvis_lhs = this.t14();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.k34_1(JsonNull_getInstance());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tag = tmp;
    this.x34(tag);
  };
  protoOf(AbstractJsonTreeEncoder).x34 = function (tag) {
    return this.v34(tag, JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeEncoder).p15 = function (tag) {
    return this.x34((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeEncoder).y34 = function (tag, value) {
    return this.v34(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).q15 = function (tag, value) {
    return this.y34((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).z34 = function (tag, value) {
    return this.v34(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).r15 = function (tag, value) {
    return this.z34((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).a35 = function (tag, value) {
    return this.v34(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).s15 = function (tag, value) {
    return this.a35((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).b35 = function (tag, value) {
    return this.v34(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).t15 = function (tag, value) {
    return this.b35((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).c35 = function (tag, value) {
    this.v34(tag, JsonPrimitive_1(value));
    if (!this.l34_1.m2v_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded_0(value, tag, toString(this.w34()));
    }
  };
  protoOf(AbstractJsonTreeEncoder).u15 = function (tag, value) {
    return this.c35((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).ds = function (serializer, value) {
    if (!(this.t14() == null) || !get_requiresTopLevelTag(carrierDescriptor(serializer.kn(), this.ar()))) {
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
        if (this.x2v().m2t_1.k2v_1) {
          serializer.ln(this, value);
          break $l$block;
        }
        var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
        var tmp;
        if (isPolymorphicSerializer) {
          tmp = !this.x2v().m2t_1.s2v_1.equals(ClassDiscriminatorMode_NONE_getInstance());
        } else {
          var tmp_0;
          switch (this.x2v().m2t_1.s2v_1.h2_1) {
            case 0:
            case 2:
              tmp_0 = false;
              break;
            case 1:
              // Inline function 'kotlin.let' call

              var it = serializer.kn().so();
              tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp = tmp_0;
        }
        var needDiscriminator = tmp;
        var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.kn(), this.x2v()) : null;
        var tmp_1;
        if (isPolymorphicSerializer) {
          var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
          $l$block_0: {
            // Inline function 'kotlin.requireNotNull' call
            if (value == null) {
              var message = 'Value for serializer ' + toString(serializer.kn()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            } else {
              break $l$block_0;
            }
          }
          var actual = findPolymorphicSerializer_0(casted, this, value);
          if (!(baseClassDiscriminator == null)) {
            access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
            checkKind_0(actual.kn().so());
          }
          tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
        } else {
          tmp_1 = serializer;
        }
        var actualSerializer = tmp_1;
        if (!(baseClassDiscriminator == null)) {
          var serialName = actualSerializer.kn().ro();
          this.m34_1 = baseClassDiscriminator;
          this.n34_1 = serialName;
        }
        actualSerializer.ln(this, value);
      }
    } else {
      // Inline function 'kotlin.apply' call
      (new JsonPrimitiveEncoder(this.j34_1, this.k34_1)).ds(serializer, value);
    }
  };
  protoOf(AbstractJsonTreeEncoder).d35 = function (tag, value) {
    this.v34(tag, JsonPrimitive_1(value));
    if (!this.l34_1.m2v_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded_0(value, tag, toString(this.w34()));
    }
  };
  protoOf(AbstractJsonTreeEncoder).v15 = function (tag, value) {
    return this.d35((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).e35 = function (tag, value) {
    return this.v34(tag, JsonPrimitive_2(value));
  };
  protoOf(AbstractJsonTreeEncoder).w15 = function (tag, value) {
    return this.e35((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).f35 = function (tag, value) {
    return this.v34(tag, JsonPrimitive_0(toString_1(value)));
  };
  protoOf(AbstractJsonTreeEncoder).x15 = function (tag, value) {
    return this.f35((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).g35 = function (tag, value) {
    return this.v34(tag, JsonPrimitive_0(value));
  };
  protoOf(AbstractJsonTreeEncoder).y15 = function (tag, value) {
    return this.g35((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).h35 = function (tag, enumDescriptor, ordinal) {
    return this.v34(tag, JsonPrimitive_0(enumDescriptor.wo(ordinal)));
  };
  protoOf(AbstractJsonTreeEncoder).z15 = function (tag, enumDescriptor, ordinal) {
    return this.h35((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor, ordinal);
  };
  protoOf(AbstractJsonTreeEncoder).i35 = function (tag, value) {
    this.v34(tag, JsonPrimitive_0(toString(value)));
  };
  protoOf(AbstractJsonTreeEncoder).n15 = function (tag, value) {
    return this.i35((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).j35 = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? inlineUnsignedNumberEncoder(this, tag) : get_isUnquotedLiteral(inlineDescriptor) ? inlineUnquotedLiteralEncoder(this, tag, inlineDescriptor) : protoOf(NamedValueEncoder).a16.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).a16 = function (tag, inlineDescriptor) {
    return this.j35((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).rr = function (descriptor) {
    var tmp;
    if (!(this.t14() == null)) {
      if (!(this.m34_1 == null))
        this.n34_1 = descriptor.ro();
      tmp = protoOf(NamedValueEncoder).rr.call(this, descriptor);
    } else {
      tmp = (new JsonPrimitiveEncoder(this.j34_1, this.k34_1)).rr(descriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeEncoder).lq = function (descriptor) {
    var tmp;
    if (this.t14() == null) {
      tmp = this.k34_1;
    } else {
      tmp = AbstractJsonTreeEncoder$beginStructure$lambda(this);
    }
    var consumer = tmp;
    var tmp0_subject = descriptor.so();
    var tmp_0;
    var tmp_1;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_1) {
      tmp_0 = new JsonTreeListEncoder(this.j34_1, consumer);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.j34_1;
        var keyDescriptor = carrierDescriptor(descriptor.zo(0), this_0.ar());
        var keyKind = keyDescriptor.so();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          tmp_2 = new JsonTreeMapEncoder(this.j34_1, consumer);
        } else {
          if (this_0.m2t_1.f2v_1) {
            tmp_2 = new JsonTreeListEncoder(this.j34_1, consumer);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp_0 = tmp_2;
      } else {
        tmp_0 = new JsonTreeEncoder(this.j34_1, consumer);
      }
    }
    var encoder = tmp_0;
    var discriminator = this.m34_1;
    if (!(discriminator == null)) {
      if (encoder instanceof JsonTreeMapEncoder) {
        encoder.v34('key', JsonPrimitive_0(discriminator));
        var tmp1_elvis_lhs = this.n34_1;
        encoder.v34('value', JsonPrimitive_0(tmp1_elvis_lhs == null ? descriptor.ro() : tmp1_elvis_lhs));
      } else {
        var tmp2_elvis_lhs = this.n34_1;
        encoder.v34(discriminator, JsonPrimitive_0(tmp2_elvis_lhs == null ? descriptor.ro() : tmp2_elvis_lhs));
      }
      this.m34_1 = null;
      this.n34_1 = null;
    }
    return encoder;
  };
  protoOf(AbstractJsonTreeEncoder).b16 = function (descriptor) {
    this.k34_1(this.w34());
  };
  function get_requiresTopLevelTag(_this__u8e3s4) {
    var tmp;
    var tmp_0 = _this__u8e3s4.so();
    if (tmp_0 instanceof PrimitiveKind) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.so() === ENUM_getInstance();
    }
    return tmp;
  }
  function JsonPrimitiveEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    this.g36_1 = null;
    this.j15('primitive');
  }
  protoOf(JsonPrimitiveEncoder).v34 = function (key, element) {
    // Inline function 'kotlin.require' call
    if (!(key === 'primitive')) {
      var message = "This output can only consume primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.g36_1 == null)) {
      var message_0 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.g36_1 = element;
    this.k34_1(element);
  };
  protoOf(JsonPrimitiveEncoder).w34 = function () {
    var tmp0 = this.g36_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Primitive element has not been recorded. Is call to .encodeXxx is missing in serializer?';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  };
  function JsonTreeListEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.n36_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonTreeListEncoder).p14 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListEncoder).v34 = function (key, element) {
    var idx = toInt(key);
    this.n36_1.e2(idx, element);
  };
  protoOf(JsonTreeListEncoder).w34 = function () {
    return new JsonArray(this.n36_1);
  };
  function _get_tag__e6h4qf($this) {
    var tmp = $this.y35_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('tag');
    }
  }
  function JsonTreeMapEncoder(json, nodeConsumer) {
    JsonTreeEncoder.call(this, json, nodeConsumer);
    this.z35_1 = true;
  }
  protoOf(JsonTreeMapEncoder).v34 = function (key, element) {
    if (this.z35_1) {
      var tmp = this;
      var tmp_0;
      if (element instanceof JsonPrimitive) {
        tmp_0 = element.e2w();
      } else {
        if (element instanceof JsonObject) {
          throw InvalidKeyKindException(JsonObjectSerializer_getInstance().q2w_1);
        } else {
          if (element instanceof JsonArray) {
            throw InvalidKeyKindException(JsonArraySerializer_getInstance().r2w_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      tmp.y35_1 = tmp_0;
      this.z35_1 = false;
    } else {
      var tmp0 = this.u34_1;
      // Inline function 'kotlin.collections.set' call
      var key_0 = _get_tag__e6h4qf(this);
      tmp0.z1(key_0, element);
      this.z35_1 = true;
    }
  };
  protoOf(JsonTreeMapEncoder).w34 = function () {
    return new JsonObject(this.u34_1);
  };
  function writeJson$lambda($result) {
    return function (it) {
      $result._v = it;
      return Unit_instance;
    };
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
    WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  }
  var $ENTRIES;
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.r31_1 = begin;
    this.s31_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.so();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.zo(0), _this__u8e3s4.ar());
          var keyKind = keyDescriptor.so();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.m2t_1.f2v_1) {
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.so(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.to()) {
      tmp = carrierDescriptor(_this__u8e3s4.zo(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.o36(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.o36(lastPosition, currentPosition);
    var result = $this.h2u_1.toString();
    $this.h2u_1.wb(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.g2u_1);
    $this.g2u_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.p36(), $this.e2u_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.q36(currentPosition);
    if (currentPosition === -1) {
      $this.p2y('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.p36();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.p36(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.p2y("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.h2u_1.r7(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.e2u_1 = startPos;
      $this.r36();
      if (($this.e2u_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.p2y('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.e2u_1);
    }
    $this.h2u_1.r7(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.p2y("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.q36(start);
    if (current >= charSequenceLength($this.p36()) || current === -1) {
      $this.p2y('EOF');
    }
    var tmp = $this.p36();
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
        $this.p2y("Expected valid boolean literal prefix, but had '" + $this.x2z() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.p36()) - current | 0) < literalSuffix.length) {
      $this.p2y('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charCodeAt(literalSuffix, i);
        var actual = charSequenceGet($this.p36(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.p2y("Expected valid boolean literal prefix, but had '" + $this.x2z() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.e2u_1 = current + literalSuffix.length | 0;
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
  function AbstractJsonLexer() {
    this.e2u_1 = 0;
    this.f2u_1 = new JsonPath();
    this.g2u_1 = null;
    this.h2u_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).r36 = function () {
  };
  protoOf(AbstractJsonLexer).h31 = function () {
    var current = this.s36();
    var source = this.p36();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.e2u_1 = this.e2u_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).t36 = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).i2u = function () {
    var nextToken = this.z2z();
    if (!(nextToken === 10)) {
      this.p2y('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.p36(), this.e2u_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).t2z = function (expected) {
    var token = this.z2z();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true ? this.e2u_1 - 1 | 0 : this.e2u_1;
      var s = this.e2u_1 === charSequenceLength(this.p36()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.p36(), position));
      var tmp$ret$0 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.p2y(tmp$ret$0, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).u36 = function (expected) {
    if (this.e2u_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.e2u_1;
        try {
          this.e2u_1 = this.e2u_1 - 1 | 0;
          tmp$ret$1 = this.x2z();
          break $l$block;
        }finally {
          this.e2u_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.o2y("Expected string literal but 'null' literal was found", this.e2u_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true ? this.e2u_1 - 1 | 0 : this.e2u_1;
    var s = this.e2u_1 === charSequenceLength(this.p36()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.p36(), position));
    var tmp$ret$2 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.p2y(tmp$ret$2, position);
  };
  protoOf(AbstractJsonLexer).u2z = function () {
    var source = this.p36();
    var cpos = this.e2u_1;
    $l$loop_0: while (true) {
      cpos = this.q36(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.e2u_1 = cpos;
      return charToTokenClass(ch);
    }
    this.e2u_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).i31 = function (doConsume) {
    var current = this.s36();
    current = this.q36(current);
    var len = charSequenceLength(this.p36()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.p36(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.p36(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.e2u_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).t31 = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.i31(doConsume) : $super.i31.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).j31 = function (isLenient) {
    var token = this.u2z();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.x2z();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.w2z();
    }
    var string = tmp;
    this.g2u_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).v36 = function () {
    this.g2u_1 = null;
  };
  protoOf(AbstractJsonLexer).v18 = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.p36();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).w2z = function () {
    if (!(this.g2u_1 == null)) {
      return takePeeked(this);
    }
    return this.m31();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.q36(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.p2y('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.o36(lastPosition, currentPosition);
          currentPosition = this.q36(currentPosition);
          if (currentPosition === -1) {
            this.p2y('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.v18(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.e2u_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).n31 = function () {
    var result = this.x2z();
    if (result === 'null' && wasUnquotedString(this)) {
      this.p2y("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).x2z = function () {
    if (!(this.g2u_1 == null)) {
      return takePeeked(this);
    }
    var current = this.s36();
    if (current >= charSequenceLength(this.p36()) || current === -1) {
      this.p2y('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.p36(), current));
    if (token === 1) {
      return this.w2z();
    }
    if (!(token === 0)) {
      this.p2y('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.p36(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.p36(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.p36())) {
        usedAppend = true;
        this.o36(this.e2u_1, current);
        var eof = this.q36(current);
        if (eof === -1) {
          this.e2u_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.v18(this.e2u_1, current);
    } else {
      tmp = decodedString(this, this.e2u_1, current);
    }
    var result = tmp;
    this.e2u_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).o36 = function (fromIndex, toIndex) {
    this.h2u_1.qb(this.p36(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).l31 = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.u2z();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.x2z();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.u2z();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.x2z();
        else
          this.m31();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.g(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.e2u_1, 'found ] instead of } at path: ' + this.f2u_1.toString(), this.p36());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.e2u_1, 'found } instead of ] at path: ' + this.f2u_1.toString(), this.p36());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.p2y('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.z2z();
      if (tokenStack.n() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.p36()) + "', currentPosition=" + this.e2u_1 + ')';
  };
  protoOf(AbstractJsonLexer).k31 = function (key) {
    var processed = this.v18(0, this.e2u_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    throw new JsonDecodingException("Encountered an unknown key '" + key + "' at offset " + lastIndexOf_0 + ' at path: ' + this.f2u_1.c2z() + "\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.p36(), lastIndexOf_0))));
  };
  protoOf(AbstractJsonLexer).o2y = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.f2u_1.c2z() + hintMessage, this.p36());
  };
  protoOf(AbstractJsonLexer).p2y = function (message, position, hint, $super) {
    position = position === VOID ? this.e2u_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.o2y(message, position, hint) : $super.o2y.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).v31 = function () {
    var current = this.s36();
    current = this.q36(current);
    if (current >= charSequenceLength(this.p36()) || current === -1) {
      this.p2y('EOF');
    }
    var tmp;
    if (charSequenceGet(this.p36(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.p36())) {
        this.p2y('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.p36()))) {
      var ch = charSequenceGet(this.p36(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.p2y('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.p2y("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.p2y("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.p2y("Unexpected symbol '-' in numeric literal");
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
        this.p2y("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
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
        this.p2y('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.p2y('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.p2y('EOF');
      }
      if (!(charSequenceGet(this.p36(), current) === _Char___init__impl__6a9atx(34))) {
        this.p2y('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.e2u_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(new Long(-1, 2147483647)) || doubleAccumulator < toNumber(new Long(0, -2147483648))) {
        this.p2y('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.p2y("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!equalsLong(accumulator, new Long(0, -2147483648))) {
      tmp_0 = negate(accumulator);
    } else {
      this.p2y('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).k2w = function () {
    var result = this.v31();
    var next = this.z2z();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true ? this.e2u_1 - 1 | 0 : this.e2u_1;
      var s = this.e2u_1 === charSequenceLength(this.p36()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.p36(), position));
      var tmp$ret$0 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.p2y(tmp$ret$0, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).u31 = function () {
    var current = this.s36();
    if (current === charSequenceLength(this.p36())) {
      this.p2y('EOF');
    }
    var tmp;
    if (charSequenceGet(this.p36(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.e2u_1 === charSequenceLength(this.p36())) {
        this.p2y('EOF');
      }
      if (!(charSequenceGet(this.p36(), this.e2u_1) === _Char___init__impl__6a9atx(34))) {
        this.p2y('Expected closing quotation mark');
      }
      this.e2u_1 = this.e2u_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().x36_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().w36_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.w36_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.x36_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.w36_1 = charArray(117);
    this.x36_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexerWithComments(source) {
    StringJsonLexer.call(this, source);
  }
  protoOf(StringJsonLexerWithComments).z2z = function () {
    var source = this.p36();
    var cpos = this.s36();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.e2u_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).v2z = function () {
    var current = this.s36();
    if (current >= this.p36().length || current === -1)
      return false;
    return this.t36(charCodeAt(this.p36(), current));
  };
  protoOf(StringJsonLexerWithComments).g31 = function (expected) {
    var source = this.p36();
    var current = this.s36();
    if (current >= source.length || current === -1) {
      this.e2u_1 = -1;
      this.u36(expected);
    }
    var c = charCodeAt(source, current);
    this.e2u_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.u36(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).u2z = function () {
    var source = this.p36();
    var cpos = this.s36();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.e2u_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).s36 = function () {
    var current = this.e2u_1;
    if (current === -1)
      return current;
    var source = this.p36();
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
            this.e2u_1 = source.length;
            this.p2y('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.e2u_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.h37_1 = source;
  }
  protoOf(StringJsonLexer).p36 = function () {
    return this.h37_1;
  };
  protoOf(StringJsonLexer).q36 = function (position) {
    return position < this.p36().length ? position : -1;
  };
  protoOf(StringJsonLexer).z2z = function () {
    var source = this.p36();
    var cpos = this.e2u_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.e2u_1 = cpos;
      return charToTokenClass(c);
    }
    this.e2u_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).v2z = function () {
    var current = this.e2u_1;
    if (current === -1)
      return false;
    var source = this.p36();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.e2u_1 = current;
      return this.t36(c);
    }
    this.e2u_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).s36 = function () {
    var current = this.e2u_1;
    if (current === -1)
      return current;
    var source = this.p36();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.e2u_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).g31 = function (expected) {
    if (this.e2u_1 === -1) {
      this.u36(expected);
    }
    var source = this.p36();
    var cpos = this.e2u_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.e2u_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.u36(expected);
    }
    this.e2u_1 = -1;
    this.u36(expected);
  };
  protoOf(StringJsonLexer).m31 = function () {
    this.g31(_Char___init__impl__6a9atx(34));
    var current = this.e2u_1;
    var closingQuote = indexOf_0(this.p36(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.x2z();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false ? this.e2u_1 - 1 | 0 : this.e2u_1;
      var s = this.e2u_1 === charSequenceLength(this.p36()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.p36(), position));
      var tmp$ret$0 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.p2y(tmp$ret$0, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.p36(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.p36(), this.e2u_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.e2u_1 = closingQuote + 1 | 0;
    return substring(this.p36(), current, closingQuote);
  };
  protoOf(StringJsonLexer).o31 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.e2u_1;
    try {
      if (!(this.z2z() === 6))
        return null;
      var firstKey = this.j31(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.v36();
      if (!(this.z2z() === 5))
        return null;
      return this.j31(isLenient);
    }finally {
      this.e2u_1 = positionSnapshot;
      this.v36();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.m2t_1.r2v_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.o2t_1;
  }
  function JsonToStringWriter() {
    this.u2t_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).t2x = function (value) {
    this.u2t_1.ub(value);
  };
  protoOf(JsonToStringWriter).n2x = function (char) {
    this.u2t_1.r7(char);
  };
  protoOf(JsonToStringWriter).p2x = function (text) {
    this.u2t_1.q7(text);
  };
  protoOf(JsonToStringWriter).z2x = function (text) {
    printQuoted(this.u2t_1, text);
  };
  protoOf(JsonToStringWriter).v2t = function () {
    this.u2t_1.xb();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.u2t_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).ko = get_isNullable;
  protoOf(defer$1).to = get_isInline;
  protoOf(defer$1).vo = get_annotations;
  protoOf(JsonSerializersModuleValidator).x17 = contextual;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Tombstone_instance = new Tombstone();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = JsonArray;
  _.$_$.b = JsonContentPolymorphicSerializer;
  _.$_$.c = JsonDecoder;
  _.$_$.d = JsonEncoder;
  _.$_$.e = JsonObjectBuilder;
  _.$_$.f = JsonObject;
  _.$_$.g = JsonPrimitive;
  _.$_$.h = Json_0;
  _.$_$.i = get_boolean;
  _.$_$.j = get_booleanOrNull;
  _.$_$.k = get_contentOrNull;
  _.$_$.l = get_double;
  _.$_$.m = get_doubleOrNull;
  _.$_$.n = get_float;
  _.$_$.o = get_floatOrNull;
  _.$_$.p = get_int;
  _.$_$.q = get_intOrNull;
  _.$_$.r = get_jsonArray;
  _.$_$.s = get_jsonObject;
  _.$_$.t = get_jsonPrimitive;
  _.$_$.u = get_long;
  _.$_$.v = get_longOrNull;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
