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
  var protoOf = kotlin_kotlin.$_$.ac;
  var initMetadataForObject = kotlin_kotlin.$_$.gb;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.z;
  var initMetadataForClass = kotlin_kotlin.$_$.ab;
  var toString = kotlin_kotlin.$_$.dc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var charSequenceLength = kotlin_kotlin.$_$.qa;
  var charSequenceGet = kotlin_kotlin.$_$.pa;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.f3;
  var equals = kotlin_kotlin.$_$.ua;
  var toString_0 = kotlin_kotlin.$_$.bh;
  var Enum = kotlin_kotlin.$_$.qf;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var getKClassFromExpression = kotlin_kotlin.$_$.sc;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v2;
  var THROW_CCE = kotlin_kotlin.$_$.ag;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var isInterface = kotlin_kotlin.$_$.pb;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var initMetadataForInterface = kotlin_kotlin.$_$.eb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bb;
  var hashCode = kotlin_kotlin.$_$.za;
  var joinToString = kotlin_kotlin.$_$.c7;
  var KtList = kotlin_kotlin.$_$.j5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.b2;
  var KtMap = kotlin_kotlin.$_$.m5;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var getBooleanHashCode = kotlin_kotlin.$_$.wa;
  var getStringHashCode = kotlin_kotlin.$_$.ya;
  var toDouble = kotlin_kotlin.$_$.pe;
  var numberRangeToNumber = kotlin_kotlin.$_$.wb;
  var ClosedRange = kotlin_kotlin.$_$.ic;
  var contains = kotlin_kotlin.$_$.mc;
  var convertToInt = kotlin_kotlin.$_$.r9;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.x2;
  var toDoubleOrNull = kotlin_kotlin.$_$.oe;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.m;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yg;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var toLongOrNull = kotlin_kotlin.$_$.ue;
  var toULongOrNull = kotlin_kotlin.$_$.ze;
  var ULong = kotlin_kotlin.$_$.hg;
  var Companion_getInstance = kotlin_kotlin.$_$.x;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.k4;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.me;
  var KProperty1 = kotlin_kotlin.$_$.yc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xa;
  var lazy = kotlin_kotlin.$_$.xg;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var captureStack = kotlin_kotlin.$_$.la;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var defineProp = kotlin_kotlin.$_$.ta;
  var fromInt = kotlin_kotlin.$_$.v9;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.a4;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.c4;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.j4;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.l4;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.r3;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.t3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.s4;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.u4;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var charSequenceSubSequence = kotlin_kotlin.$_$.ra;
  var coerceAtLeast = kotlin_kotlin.$_$.jc;
  var coerceAtMost = kotlin_kotlin.$_$.kc;
  var isBlank = kotlin_kotlin.$_$.qd;
  var Collection = kotlin_kotlin.$_$.e5;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var toSet = kotlin_kotlin.$_$.k8;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var singleOrNull = kotlin_kotlin.$_$.x7;
  var emptyMap = kotlin_kotlin.$_$.q6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.s1;
  var getValue = kotlin_kotlin.$_$.y6;
  var copyOf = kotlin_kotlin.$_$.k6;
  var arrayCopy = kotlin_kotlin.$_$.t5;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.of;
  var invoke = kotlin_kotlin.$_$.sg;
  var CoroutineImpl = kotlin_kotlin.$_$.h9;
  var DeepRecursiveScope = kotlin_kotlin.$_$.pf;
  var Unit = kotlin_kotlin.$_$.kg;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p8;
  var initMetadataForLambda = kotlin_kotlin.$_$.fb;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cb;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var getKClass = kotlin_kotlin.$_$.tc;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var ensureNotNull = kotlin_kotlin.$_$.rg;
  var substringBefore = kotlin_kotlin.$_$.ie;
  var removeSuffix = kotlin_kotlin.$_$.xd;
  var substringAfter = kotlin_kotlin.$_$.he;
  var contains_0 = kotlin_kotlin.$_$.ed;
  var plus = kotlin_kotlin.$_$.zg;
  var missingFieldExceptionWithNewMessage = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var convertToByte = kotlin_kotlin.$_$.q9;
  var equalsLong = kotlin_kotlin.$_$.u9;
  var convertToShort = kotlin_kotlin.$_$.s9;
  var IllegalArgumentException = kotlin_kotlin.$_$.tf;
  var isFinite = kotlin_kotlin.$_$.ug;
  var isFinite_0 = kotlin_kotlin.$_$.tg;
  var charCodeAt = kotlin_kotlin.$_$.oa;
  var toUInt = kotlin_kotlin.$_$.ye;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.b4;
  var toULong = kotlin_kotlin.$_$.af;
  var toUByte = kotlin_kotlin.$_$.xe;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.s3;
  var toUShort = kotlin_kotlin.$_$.bf;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.t4;
  var objectCreate = kotlin_kotlin.$_$.zb;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var toString_1 = kotlin_kotlin.$_$.m3;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.w;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.v;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.y;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var setOf = kotlin_kotlin.$_$.w7;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.l3;
  var numberToChar = kotlin_kotlin.$_$.xb;
  var equals_0 = kotlin_kotlin.$_$.ld;
  var toByte = kotlin_kotlin.$_$.bc;
  var startsWith = kotlin_kotlin.$_$.de;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var single = kotlin_kotlin.$_$.ae;
  var Char = kotlin_kotlin.$_$.lf;
  var emptySet = kotlin_kotlin.$_$.r6;
  var plus_0 = kotlin_kotlin.$_$.o7;
  var toInt = kotlin_kotlin.$_$.se;
  var toList = kotlin_kotlin.$_$.e8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.k9;
  var NamedValueEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var enumEntries = kotlin_kotlin.$_$.j9;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var toNumber = kotlin_kotlin.$_$.ga;
  var last = kotlin_kotlin.$_$.i7;
  var removeLast = kotlin_kotlin.$_$.t7;
  var lastIndexOf = kotlin_kotlin.$_$.ud;
  var Long = kotlin_kotlin.$_$.vf;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.h3;
  var multiply = kotlin_kotlin.$_$.aa;
  var add = kotlin_kotlin.$_$.m9;
  var subtract = kotlin_kotlin.$_$.fa;
  var compare = kotlin_kotlin.$_$.p9;
  var numberToLong = kotlin_kotlin.$_$.ca;
  var negate = kotlin_kotlin.$_$.ba;
  var charArray = kotlin_kotlin.$_$.na;
  var indexOf = kotlin_kotlin.$_$.od;
  var indexOf_0 = kotlin_kotlin.$_$.pd;
  var substring = kotlin_kotlin.$_$.ke;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.a2;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.j1;
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
  initMetadataForClass(Key, 'Key', Key);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [JsonDecoder]);
  initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', VOID, AbstractDecoder);
  initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [JsonEncoder]);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [JsonDecoder]);
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
    this.y2z_1 = configuration;
    this.z2z_1 = serializersModule;
    this.a30_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).us = function () {
    return this.z2z_1;
  };
  protoOf(Json).b30 = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.h30();
    }
  };
  protoOf(Json).c30 = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.dp(), null);
    var result = input.es(deserializer);
    lexer.v30();
    return result;
  };
  protoOf(Json).d30 = function (serializer, value) {
    return writeJson(this, value, serializer);
  };
  protoOf(Json).e30 = function (deserializer, element) {
    return readJson(this, element, deserializer);
  };
  protoOf(Json).f30 = function (string) {
    return this.c30(JsonElementSerializer_getInstance(), string);
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.p31();
    return new JsonImpl(conf, builder.n31_1);
  }
  function JsonBuilder(json) {
    this.w30_1 = json.y2z_1.q31_1;
    this.x30_1 = json.y2z_1.v31_1;
    this.y30_1 = json.y2z_1.r31_1;
    this.z30_1 = json.y2z_1.s31_1;
    this.a31_1 = json.y2z_1.u31_1;
    this.b31_1 = json.y2z_1.w31_1;
    this.c31_1 = json.y2z_1.x31_1;
    this.d31_1 = json.y2z_1.z31_1;
    this.e31_1 = json.y2z_1.g32_1;
    this.f31_1 = json.y2z_1.b32_1;
    this.g31_1 = json.y2z_1.c32_1;
    this.h31_1 = json.y2z_1.d32_1;
    this.i31_1 = json.y2z_1.e32_1;
    this.j31_1 = json.y2z_1.f32_1;
    this.k31_1 = json.y2z_1.a32_1;
    this.l31_1 = json.y2z_1.t31_1;
    this.m31_1 = json.y2z_1.y31_1;
    this.n31_1 = json.us();
    this.o31_1 = json.y2z_1.h32_1;
  }
  protoOf(JsonBuilder).p31 = function () {
    if (this.m31_1) {
      // Inline function 'kotlin.require' call
      if (!(this.d31_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.e31_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.a31_1) {
      // Inline function 'kotlin.require' call
      if (!(this.b31_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.b31_1 === '    ')) {
      var tmp0 = this.b31_1;
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.b31_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.w30_1, this.y30_1, this.z30_1, this.l31_1, this.a31_1, this.x30_1, this.b31_1, this.c31_1, this.m31_1, this.d31_1, this.k31_1, this.f31_1, this.g31_1, this.h31_1, this.i31_1, this.j31_1, this.e31_1, this.o31_1);
  };
  function validateConfiguration($this) {
    if (equals($this.us(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.y2z_1);
    $this.us().g19(collector);
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
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode, exceptionsWithDebugInfo) {
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
    this.q31_1 = encodeDefaults;
    this.r31_1 = ignoreUnknownKeys;
    this.s31_1 = isLenient;
    this.t31_1 = allowStructuredMapKeys;
    this.u31_1 = prettyPrint;
    this.v31_1 = explicitNulls;
    this.w31_1 = prettyPrintIndent;
    this.x31_1 = coerceInputValues;
    this.y31_1 = useArrayPolymorphism;
    this.z31_1 = classDiscriminator;
    this.a32_1 = allowSpecialFloatingPointValues;
    this.b32_1 = useAlternativeNames;
    this.c32_1 = namingStrategy;
    this.d32_1 = decodeEnumsCaseInsensitive;
    this.e32_1 = allowTrailingComma;
    this.f32_1 = allowComments;
    this.g32_1 = classDiscriminatorMode;
    this.h32_1 = exceptionsWithDebugInfo;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.q31_1 + ', ignoreUnknownKeys=' + this.r31_1 + ', isLenient=' + this.s31_1 + ', ' + ('allowStructuredMapKeys=' + this.t31_1 + ', prettyPrint=' + this.u31_1 + ', explicitNulls=' + this.v31_1 + ', ') + ("prettyPrintIndent='" + this.w31_1 + "', coerceInputValues=" + this.x31_1 + ', useArrayPolymorphism=' + this.y31_1 + ', ') + ("classDiscriminator='" + this.z31_1 + "', allowSpecialFloatingPointValues=" + this.a32_1 + ', ') + ('useAlternativeNames=' + this.b32_1 + ', namingStrategy=' + toString_0(this.c32_1) + ', decodeEnumsCaseInsensitive=' + this.d32_1 + ', ') + ('allowTrailingComma=' + this.e32_1 + ', allowComments=' + this.f32_1 + ', classDiscriminatorMode=' + this.g32_1.toString() + ', exceptionsWithDebugInfo=' + this.h32_1 + ')');
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
  function ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  function throwSubtypeNotRegistered($this, subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.o();
    var subClassName = tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs;
    var scope = "in the scope of '" + baseClass.o() + "'";
    throw SerializationException_init_$Create$("Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function JsonContentPolymorphicSerializer(baseClass) {
    this.i32_1 = baseClass;
    this.j32_1 = buildSerialDescriptor('JsonContentPolymorphicSerializer<' + this.i32_1.o() + '>', SEALED_getInstance(), []);
  }
  protoOf(JsonContentPolymorphicSerializer).dp = function () {
    return this.j32_1;
  };
  protoOf(JsonContentPolymorphicSerializer).vp = function (encoder, value) {
    var tmp0_elvis_lhs = encoder.us().eu(this.i32_1, value);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? serializerOrNull(getKClassFromExpression(value)) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throwSubtypeNotRegistered(this, getKClassFromExpression(value), this.i32_1);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var actualSerializer = tmp;
    (isInterface(actualSerializer, KSerializer) ? actualSerializer : THROW_CCE()).ep(encoder, value);
  };
  protoOf(JsonContentPolymorphicSerializer).ep = function (encoder, value) {
    return this.vp(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(JsonContentPolymorphicSerializer).fp = function (decoder) {
    var input = asJsonDecoder(decoder);
    var tree = input.k32();
    var tmp = this.l32(tree);
    var actualSerializer = isInterface(tmp, KSerializer) ? tmp : THROW_CCE();
    return input.m32().e30(actualSerializer, tree);
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
    this.n32_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.n32_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.n32_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.n32_1, ',', '[', ']');
  };
  protoOf(JsonArray).r = function () {
    return this.n32_1.r();
  };
  protoOf(JsonArray).o32 = function (element) {
    return this.n32_1.j2(element);
  };
  protoOf(JsonArray).j2 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.o32(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).t = function () {
    return this.n32_1.t();
  };
  protoOf(JsonArray).p32 = function (elements) {
    return this.n32_1.k2(elements);
  };
  protoOf(JsonArray).k2 = function (elements) {
    return this.p32(elements);
  };
  protoOf(JsonArray).d1 = function (index) {
    return this.n32_1.d1(index);
  };
  protoOf(JsonArray).q32 = function (element) {
    return this.n32_1.l2(element);
  };
  protoOf(JsonArray).l2 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.q32(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).r32 = function (element) {
    return this.n32_1.m2(element);
  };
  protoOf(JsonArray).m2 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.r32(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).n2 = function () {
    return this.n32_1.n2();
  };
  protoOf(JsonArray).j1 = function (index) {
    return this.n32_1.j1(index);
  };
  protoOf(JsonArray).o2 = function (fromIndex, toIndex) {
    return this.n32_1.o2(fromIndex, toIndex);
  };
  protoOf(JsonArray).asJsReadonlyArrayView = function () {
    return this.n32_1.asJsReadonlyArrayView();
  };
  protoOf(JsonArray).e1 = function () {
    return this.n32_1.e1();
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
    this.s32_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.s32_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.s32_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.s32_1.l1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).r = function () {
    return this.s32_1.r();
  };
  protoOf(JsonObject).c2e = function (key) {
    return this.s32_1.q2(key);
  };
  protoOf(JsonObject).q2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.c2e((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).t32 = function (value) {
    return this.s32_1.r2(value);
  };
  protoOf(JsonObject).r2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.t32(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonObject).p2e = function (key) {
    return this.s32_1.s2(key);
  };
  protoOf(JsonObject).s2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.p2e((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).asJsReadonlyMapView = function () {
    return this.s32_1.asJsReadonlyMapView();
  };
  protoOf(JsonObject).e1 = function () {
    return this.s32_1.e1();
  };
  protoOf(JsonObject).t2 = function () {
    return this.s32_1.t2();
  };
  protoOf(JsonObject).u2 = function () {
    return this.s32_1.u2();
  };
  protoOf(JsonObject).l1 = function () {
    return this.s32_1.l1();
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
    return this.v32();
  };
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.v32();
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
    this.w32_1 = 'null';
  }
  protoOf(JsonNull).u32 = function () {
    return false;
  };
  protoOf(JsonNull).v32 = function () {
    return this.w32_1;
  };
  protoOf(JsonNull).x32 = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).v10 = function (typeParamsSerializers) {
    return this.x32();
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
    this.y32_1 = isString;
    this.z32_1 = coerceToInlineType;
    this.a33_1 = toString(body);
    if (!(this.z32_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.z32_1.nq()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).u32 = function () {
    return this.y32_1;
  };
  protoOf(JsonLiteral).v32 = function () {
    return this.a33_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.y32_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.a33_1);
      tmp = this_0.toString();
    } else {
      tmp = this.a33_1;
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
    if (!(this.y32_1 === other.y32_1))
      return false;
    if (!(this.a33_1 === other.a33_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.y32_1);
    result = imul(31, result) + getStringHashCode(this.a33_1) | 0;
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
    return toBooleanStrictOrNull_0(_this__u8e3s4.v32());
  }
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return StringJsonLexer_0(Default_getInstance(), _this__u8e3s4.v32()).b33();
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.v32();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.v32());
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
      throw NumberFormatException_init_$Create$(_this__u8e3s4.v32() + ' is not an Int');
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
    var this_0 = _this__u8e3s4.v32();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDoubleOrNull(this_0);
  }
  function get_doubleOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDoubleOrNull(_this__u8e3s4.v32());
  }
  function get_boolean(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = toBooleanStrictOrNull_0(_this__u8e3s4.v32());
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
    tmp.d33_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonObjectBuilder).e33 = function (key, element) {
    return this.d33_1.v2(key, element);
  };
  protoOf(JsonObjectBuilder).p31 = function () {
    return new JsonObject(this.d33_1);
  };
  function JsonArrayBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.f33_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonArrayBuilder).g33 = function (element) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.f33_1.b1(element);
    return true;
  };
  protoOf(JsonArrayBuilder).p31 = function () {
    return new JsonArray(this.f33_1);
  };
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.rp('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.rp('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.rp('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.rp('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.rp('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().h33_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().i33_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().j33_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().k33_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().l33_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.m33_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).dp = function () {
    return this.m33_1;
  };
  protoOf(JsonElementSerializer).n33 = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.xt(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.xt(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.xt(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(JsonElementSerializer).ep = function (encoder, value) {
    return this.n33(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).fp = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.k32();
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
    this.o33_1 = ListSerializer(JsonElementSerializer_getInstance()).dp();
    this.p33_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).lq = function () {
    return this.p33_1;
  };
  protoOf(JsonArrayDescriptor).qq = function (index) {
    return this.o33_1.qq(index);
  };
  protoOf(JsonArrayDescriptor).rq = function (name) {
    return this.o33_1.rq(name);
  };
  protoOf(JsonArrayDescriptor).sq = function (index) {
    return this.o33_1.sq(index);
  };
  protoOf(JsonArrayDescriptor).tq = function (index) {
    return this.o33_1.tq(index);
  };
  protoOf(JsonArrayDescriptor).uq = function (index) {
    return this.o33_1.uq(index);
  };
  protoOf(JsonArrayDescriptor).mq = function () {
    return this.o33_1.mq();
  };
  protoOf(JsonArrayDescriptor).eq = function () {
    return this.o33_1.eq();
  };
  protoOf(JsonArrayDescriptor).nq = function () {
    return this.o33_1.nq();
  };
  protoOf(JsonArrayDescriptor).oq = function () {
    return this.o33_1.oq();
  };
  protoOf(JsonArrayDescriptor).pq = function () {
    return this.o33_1.pq();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.l33_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).dp = function () {
    return this.l33_1;
  };
  protoOf(JsonArraySerializer).q33 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).ep(encoder, value);
  };
  protoOf(JsonArraySerializer).ep = function (encoder, value) {
    return this.q33(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).fp = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).fp(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.r33_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).dp();
    this.s33_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).lq = function () {
    return this.s33_1;
  };
  protoOf(JsonObjectDescriptor).qq = function (index) {
    return this.r33_1.qq(index);
  };
  protoOf(JsonObjectDescriptor).rq = function (name) {
    return this.r33_1.rq(name);
  };
  protoOf(JsonObjectDescriptor).sq = function (index) {
    return this.r33_1.sq(index);
  };
  protoOf(JsonObjectDescriptor).tq = function (index) {
    return this.r33_1.tq(index);
  };
  protoOf(JsonObjectDescriptor).uq = function (index) {
    return this.r33_1.uq(index);
  };
  protoOf(JsonObjectDescriptor).mq = function () {
    return this.r33_1.mq();
  };
  protoOf(JsonObjectDescriptor).eq = function () {
    return this.r33_1.eq();
  };
  protoOf(JsonObjectDescriptor).nq = function () {
    return this.r33_1.nq();
  };
  protoOf(JsonObjectDescriptor).oq = function () {
    return this.r33_1.oq();
  };
  protoOf(JsonObjectDescriptor).pq = function () {
    return this.r33_1.pq();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.k33_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).dp = function () {
    return this.k33_1;
  };
  protoOf(JsonObjectSerializer).t33 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).ep(encoder, value);
  };
  protoOf(JsonObjectSerializer).ep = function (encoder, value) {
    return this.t33(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).fp = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).fp(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.h33_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).dp = function () {
    return this.h33_1;
  };
  protoOf(JsonPrimitiveSerializer).u33 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.xt(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.xt(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).ep = function (encoder, value) {
    return this.u33(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).fp = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.k32();
    if (!(result instanceof JsonPrimitive)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.m32().y2z_1.h32_1) {
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
    this.i33_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).dp = function () {
    return this.i33_1;
  };
  protoOf(JsonNullSerializer).v33 = function (encoder, value) {
    verify(encoder);
    encoder.at();
  };
  protoOf(JsonNullSerializer).ep = function (encoder, value) {
    return this.v33(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).fp = function (decoder) {
    verify_0(decoder);
    if (decoder.qr()) {
      throw decodingExceptionOf("Expected 'null' literal");
    }
    decoder.rr();
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
    this.j33_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).dp = function () {
    return this.j33_1;
  };
  protoOf(JsonLiteralSerializer).w33 = function (encoder, value) {
    verify(encoder);
    if (value.y32_1) {
      return encoder.jt(value.a33_1);
    }
    if (!(value.z32_1 == null)) {
      return encoder.lt(value.z32_1).jt(value.a33_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.a33_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.ft(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.a33_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).no_1;
      var tmp_1 = encoder.lt(serializer_0(Companion_getInstance()).dp());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$4 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.ft(tmp$ret$4);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.a33_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.ht(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.a33_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.bt(tmp3_safe_receiver);
    }
    encoder.jt(value.a33_1);
  };
  protoOf(JsonLiteralSerializer).ep = function (encoder, value) {
    return this.w33(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).fp = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.k32();
    if (!(result instanceof JsonLiteral)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.m32().y2z_1.h32_1) {
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
    var tmp0 = $this.x33_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
    return tmp0.n1();
  }
  function defer$o$_get_original_$ref_3cje7k() {
    return function (p0) {
      return _get_original__l7ku1m(p0);
    };
  }
  function defer$1($deferred) {
    this.x33_1 = lazy($deferred);
  }
  protoOf(defer$1).lq = function () {
    return _get_original__l7ku1m(this).lq();
  };
  protoOf(defer$1).mq = function () {
    return _get_original__l7ku1m(this).mq();
  };
  protoOf(defer$1).oq = function () {
    return _get_original__l7ku1m(this).oq();
  };
  protoOf(defer$1).qq = function (index) {
    return _get_original__l7ku1m(this).qq(index);
  };
  protoOf(defer$1).rq = function (name) {
    return _get_original__l7ku1m(this).rq(name);
  };
  protoOf(defer$1).sq = function (index) {
    return _get_original__l7ku1m(this).sq(index);
  };
  protoOf(defer$1).tq = function (index) {
    return _get_original__l7ku1m(this).tq(index);
  };
  protoOf(defer$1).uq = function (index) {
    return _get_original__l7ku1m(this).uq(index);
  };
  function JsonEncoder() {
  }
  function JsonDecodingException(fullMessage, shortMessage, offset, path, input, hint) {
    JsonException.call(this, fullMessage);
    captureStack(this, JsonDecodingException);
    this.a34_1 = shortMessage;
    this.b34_1 = offset;
    this.c34_1 = path;
    this.d34_1 = input;
    this.e34_1 = hint;
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
    this.c33_1 = message;
    delete this.message;
  }
  protoOf(JsonException).e = function () {
    return this.c33_1;
  };
  function JsonEncodingException(shortMessage, classSerialName, hint) {
    classSerialName = classSerialName === VOID ? null : classSerialName;
    hint = hint === VOID ? null : hint;
    JsonException.call(this, formatEncodingException(shortMessage, hint));
    captureStack(this, JsonEncodingException);
    this.g34_1 = shortMessage;
    this.h34_1 = classSerialName;
    this.i34_1 = hint;
  }
  function Composer(writer) {
    this.j34_1 = writer;
    this.k34_1 = true;
  }
  protoOf(Composer).l34 = function () {
    this.k34_1 = true;
  };
  protoOf(Composer).m34 = function () {
    return Unit_instance;
  };
  protoOf(Composer).n34 = function () {
    this.k34_1 = false;
  };
  protoOf(Composer).o34 = function () {
    this.k34_1 = false;
  };
  protoOf(Composer).p34 = function () {
    return Unit_instance;
  };
  protoOf(Composer).q34 = function (v) {
    return this.j34_1.r34(v);
  };
  protoOf(Composer).s34 = function (v) {
    return this.j34_1.t34(v);
  };
  protoOf(Composer).u34 = function (v) {
    return this.j34_1.t34(v.toString());
  };
  protoOf(Composer).v34 = function (v) {
    return this.j34_1.t34(v.toString());
  };
  protoOf(Composer).w34 = function (v) {
    return this.j34_1.x34(fromInt(v));
  };
  protoOf(Composer).y34 = function (v) {
    return this.j34_1.x34(fromInt(v));
  };
  protoOf(Composer).z34 = function (v) {
    return this.j34_1.x34(fromInt(v));
  };
  protoOf(Composer).a35 = function (v) {
    return this.j34_1.x34(v);
  };
  protoOf(Composer).b35 = function (v) {
    return this.j34_1.t34(v.toString());
  };
  protoOf(Composer).c35 = function (value) {
    return this.j34_1.d35(value);
  };
  function Composer_0(sb, json) {
    return json.y2z_1.u31_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.g35_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).z34 = function (v) {
    if (this.g35_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.c35(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.s34(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).a35 = function (v) {
    if (this.g35_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.c35(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.s34(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).w34 = function (v) {
    if (this.g35_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.c35(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.s34(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).y34 = function (v) {
    if (this.g35_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.c35(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.s34(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.j35_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).c35 = function (value) {
    if (this.j35_1) {
      protoOf(Composer).c35.call(this, value);
    } else {
      protoOf(Composer).s34.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.m35_1 = json;
    this.n35_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).l34 = function () {
    this.k34_1 = true;
    this.n35_1 = this.n35_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).m34 = function () {
    this.n35_1 = this.n35_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).n34 = function () {
    this.k34_1 = false;
    this.s34('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.n35_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.s34(this.m35_1.y2z_1.w31_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).o34 = function () {
    if (this.k34_1)
      this.k34_1 = false;
    else {
      this.n34();
    }
  };
  protoOf(ComposerWithPrettyPrint).p34 = function () {
    this.q34(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.p35_1 = (!descriptor.uq(index) && descriptor.tq(index).eq());
    return $this.p35_1;
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
    tmp.o35_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.p35_1 = false;
  }
  protoOf(JsonElementMarker).q35 = function (index) {
    this.o35_1.ny(index);
  };
  protoOf(JsonElementMarker).r35 = function () {
    return this.o35_1.oy();
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
  function decodingExceptionOf(shortMessage) {
    return new JsonDecodingException(formatDecodingException(-1, shortMessage, null, null, null), shortMessage, -1, null, null, null);
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
    _this__u8e3s4.s35('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.r30_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.t35(nonFiniteFpMessage(result, null), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function InvalidFloatingPointEncoded(value, key) {
    key = key === VOID ? null : key;
    return new JsonEncodingException(nonFiniteFpMessage(value, key), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.lq() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.mq().toString() + "'"), keyDescriptor.lq(), "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function access$nonFiniteFpMessage$tJsonExceptionsKt(value, key) {
    return nonFiniteFpMessage(value, key);
  }
  function decodingExceptionOf_0(_this__u8e3s4, shortMessage, offset, path, hint, input) {
    // Inline function 'kotlinx.serialization.json.internal.ifDebugInput' call
    var tmp;
    if (_this__u8e3s4.q30_1.h32_1) {
      tmp = toString(minify(input, offset));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    return new JsonDecodingException(formatDecodingException(offset, shortMessage, path, hint, inputValue), shortMessage, offset, path, inputValue, hint);
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
    if (json.y2z_1.r31_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.pq();
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
    var index = _this__u8e3s4.rq(name);
    if (!(index === -3))
      return index;
    if (!json.y2z_1.b32_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.lq() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.qq(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.mq(), CLASS_getInstance()) ? json.y2z_1.c32_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.v35(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function getJsonEncodedNames(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? jsonCachedSerialNames(_this__u8e3s4) : toSet(serializationNamesIndices(_this__u8e3s4, json, strategy));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.y2z_1.d32_1 && equals(descriptor.mq(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).s2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.v35(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.oq();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.sq(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element instanceof JsonNames) {
            destination.b1(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w35_1;
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
          tmp_0 = _this__u8e3s4.qq(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.x35(_this__u8e3s4, i, _this__u8e3s4.qq(i));
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
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      // Inline function 'kotlin.collections.mutableSetOf' call
      var trackingSet = LinkedHashSet_init_$Create$();
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.oq();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.qq(tmp_2);
        var name = $strategy.x35($this_serializationNamesIndices, tmp_2, baseName);
        if (!trackingSet.b1(name))
          throw new JsonEncodingException("The transformed name '" + name + "' for property " + baseName + ' already exists ' + ('in ' + toString($this_serializationNamesIndices)), $this_serializationNamesIndices.lq());
        tmp_1[tmp_2] = name;
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.mq(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).q2(name)) {
      throw decodingExceptionOf("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.qq(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.qq(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.v2(name, index);
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
    var newSize = imul($this.b36_1, 2);
    $this.z35_1 = copyOf($this.z35_1, newSize);
    var tmp = 0;
    var tmp_0 = new Int32Array(newSize);
    while (tmp < newSize) {
      tmp_0[tmp] = -1;
      tmp = tmp + 1 | 0;
    }
    var newIndices = tmp_0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.a36_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
    $this.a36_1 = newIndices;
  }
  function JsonPath(configuration) {
    this.y35_1 = configuration;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.z35_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.a36_1 = tmp_2;
    this.b36_1 = -1;
  }
  protoOf(JsonPath).c36 = function (sd) {
    this.b36_1 = this.b36_1 + 1 | 0;
    var depth = this.b36_1;
    if (depth === this.z35_1.length) {
      resize(this);
    }
    this.z35_1[depth] = sd;
  };
  protoOf(JsonPath).d36 = function (index) {
    this.a36_1[this.b36_1] = index;
  };
  protoOf(JsonPath).e36 = function (key) {
    var tmp;
    if (!(this.a36_1[this.b36_1] === -2)) {
      this.b36_1 = this.b36_1 + 1 | 0;
      tmp = this.b36_1 === this.z35_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.z35_1[this.b36_1] = this.y35_1.h32_1 ? key : RedactedKey_instance;
    this.a36_1[this.b36_1] = -2;
  };
  protoOf(JsonPath).f36 = function () {
    if (this.a36_1[this.b36_1] === -2) {
      this.z35_1[this.b36_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).g36 = function () {
    var depth = this.b36_1;
    if (this.a36_1[depth] === -2) {
      this.a36_1[depth] = -1;
      this.b36_1 = this.b36_1 - 1 | 0;
    }
    if (!(this.b36_1 === -1)) {
      this.b36_1 = this.b36_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).h36 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q('$');
    // Inline function 'kotlin.repeat' call
    var times = this.b36_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.z35_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.mq(), LIST_getInstance())) {
            if (!(this.a36_1[index] === -1)) {
              this_0.q('[');
              this_0.dc(this.a36_1[index]);
              this_0.q(']');
            }
          } else {
            var idx = this.a36_1[index];
            if (idx >= 0) {
              this_0.q('.');
              this_0.q(element.qq(idx));
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
    return this.h36();
  };
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.mq();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.i36_1)
      return Unit_instance;
    if (!$this.j36_1)
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
    this.i36_1 = configuration.y31_1;
    this.j36_1 = !configuration.g32_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).p19 = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).s19 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.dp();
    checkKind(this, descriptor, actualClass);
  };
  protoOf(JsonSerializersModuleValidator).t19 = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).u19 = function (baseClass, defaultDeserializerProvider) {
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().e1();
    var tmp$ret$0 = Array(size);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.xt(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.t36_1.x36(6);
    if ($this.t36_1.y36() === 4) {
      $this.t36_1.t35('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.t36_1.z36()) {
      var key = $this.u36_1 ? $this.t36_1.b37() : $this.t36_1.a37();
      $this.t36_1.x36(5);
      var element = $this.c37();
      // Inline function 'kotlin.collections.set' call
      result.v2(key, element);
      lastToken = $this.t36_1.d37();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.t36_1.t35('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.t36_1.x36(7);
    } else if (lastToken === 4) {
      if (!$this.v36_1) {
        invalidTrailingComma($this.t36_1);
      }
      $this.t36_1.x36(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, $receiver, $completion) {
    var tmp = new $readObjectCOROUTINE$($this, $receiver, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function readArray($this) {
    var lastToken = $this.t36_1.d37();
    if ($this.t36_1.y36() === 4) {
      $this.t36_1.t35('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.t36_1.z36()) {
      var element = $this.c37();
      result.b1(element);
      lastToken = $this.t36_1.d37();
      if (!(lastToken === 4)) {
        var tmp0 = $this.t36_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.r30_1;
        if (!condition) {
          var tmp$ret$2 = 'Expected end of the array or comma';
          tmp0.t35(tmp$ret$2, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.t36_1.x36(9);
    } else if (lastToken === 4) {
      if (!$this.v36_1) {
        invalidTrailingComma($this.t36_1, 'array');
      }
      $this.t36_1.x36(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.u36_1 || !isString) {
      tmp = $this.t36_1.b37();
    } else {
      tmp = $this.t36_1.a37();
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
    this.a38_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).e38 = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.f38($this$DeepRecursiveFunction, it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.e38(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            var tmp0_subject = this.a38_1.t36_1.y36();
            if (tmp0_subject === 1) {
              this.d38_1 = readValue(this.a38_1, true);
              this.n8_1 = 2;
              continue $sm;
            } else {
              if (tmp0_subject === 0) {
                this.d38_1 = readValue(this.a38_1, false);
                this.n8_1 = 2;
                continue $sm;
              } else {
                if (tmp0_subject === 6) {
                  this.n8_1 = 1;
                  suspendResult = readObject_0(this.a38_1, this.b38_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject === 8) {
                    this.d38_1 = readArray(this.a38_1);
                    this.n8_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.a38_1.t36_1.t35("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.d38_1 = suspendResult;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            return this.d38_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).f38 = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.a38_1, completion);
    i.b38_1 = $this$DeepRecursiveFunction;
    i.c38_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.e38($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m37_1 = _this__u8e3s4;
    this.n37_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 5;
            this.p37_1 = this.m37_1;
            this.q37_1 = this.p37_1.t36_1.x36(6);
            if (this.p37_1.t36_1.y36() === 4) {
              this.p37_1.t36_1.t35('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.o37_1 = LinkedHashMap_init_$Create$();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!this.p37_1.t36_1.z36()) {
              this.n8_1 = 4;
              continue $sm;
            }

            this.r37_1 = this.p37_1.u36_1 ? this.p37_1.t36_1.b37() : this.p37_1.t36_1.a37();
            this.p37_1.t36_1.x36(5);
            this.n8_1 = 2;
            suspendResult = this.n37_1.vm(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.o37_1;
            var key = this.r37_1;
            tmp0.v2(key, element);
            this.q37_1 = this.p37_1.t36_1.d37();
            var tmp0_subject = this.q37_1;
            if (tmp0_subject === 4) {
              this.n8_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.n8_1 = 4;
                continue $sm;
              } else {
                this.p37_1.t36_1.t35('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.n8_1 = 1;
            continue $sm;
          case 4:
            if (this.q37_1 === 6) {
              this.p37_1.t36_1.x36(7);
            } else if (this.q37_1 === 4) {
              if (!this.p37_1.v36_1) {
                invalidTrailingComma(this.p37_1.t36_1);
              }
              this.p37_1.t36_1.x36(7);
            }

            return new JsonObject(this.o37_1);
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
  function JsonTreeReader(configuration, lexer) {
    this.t36_1 = lexer;
    this.u36_1 = configuration.s31_1;
    this.v36_1 = configuration.e32_1;
    this.w36_1 = 0;
  }
  protoOf(JsonTreeReader).c37 = function () {
    var token = this.t36_1.y36();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.w36_1 = this.w36_1 + 1 | 0;
      if (this.w36_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.w36_1 = this.w36_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.t36_1.t35('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.pq().t();
    while (_iterator__ex2g4s.u()) {
      var annotation = _iterator__ex2g4s.v();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.g38_1;
    }
    return json.y2z_1.z31_1;
  }
  function throwJsonElementPolymorphicException(serialName, element) {
    var tmp0_shortMessage = 'Class with serial name ' + serialName + ' cannot be serialized polymorphically because it is represented as ' + getKClassFromExpression(element).o() + '.';
    throw new JsonEncodingException(tmp0_shortMessage, serialName, 'Make sure that its JsonTransformingSerializer returns JsonObject, so class discriminator can be added to it.');
  }
  function access$checkEncodingConflicts$tPolymorphicKt($receiver, serializer, actualSerializer, classDiscriminator) {
    return checkEncodingConflicts($receiver, serializer, actualSerializer, classDiscriminator);
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
  function checkEncodingConflicts(_this__u8e3s4, serializer, actualSerializer, classDiscriminator) {
    if (getJsonEncodedNames(actualSerializer.dp(), _this__u8e3s4).j2(classDiscriminator)) {
      var baseName = serializer.dp().lq();
      var actualName = actualSerializer.dp().lq();
      var text = _this__u8e3s4.y2z_1.g32_1.equals(ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance()) && baseName === actualName ? 'in ALL_JSON_OBJECTS class discriminator mode' : "as base class '" + baseName + "'";
      var tmp0_shortMessage = "Class '" + actualName + "' cannot be serialized " + text + ' because' + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'.");
      var tmp1_hint = 'You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.';
      throw new JsonEncodingException(tmp0_shortMessage, actualName, tmp1_hint);
    }
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.u35_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).h38 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.u35_1;
    var value_0 = this_0.s2(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.v2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.v2(tmp2, value_1);
  };
  protoOf(DescriptorSchemaCache).v35 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.i38(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.h38(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).i38 = function (descriptor, key) {
    var tmp0_safe_receiver = this.u35_1.s2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.s2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.j38_1 = discriminatorToSkip;
  }
  function trySkip($this, $receiver, unknownKey) {
    if ($receiver == null)
      return false;
    if ($receiver.j38_1 === unknownKey) {
      $receiver.j38_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.ws(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.k30_1.y36() === 4) {
      $this.k30_1.t35('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.m30_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.m30_1 === -1)) {
        hasComma = $this.k30_1.l38();
      }
    } else {
      $this.k30_1.k38(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.k30_1.z36()) {
      if (decodingKey) {
        if ($this.m30_1 === -1) {
          var tmp0 = $this.k30_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.r30_1;
          if (!condition) {
            var tmp$ret$1 = 'Unexpected leading comma';
            tmp0.t35(tmp$ret$1, position);
          }
        } else {
          var tmp0_0 = $this.k30_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp0_0.r30_1;
          if (!condition_0) {
            var tmp$ret$3 = 'Expected comma after the key-value pair';
            tmp0_0.t35(tmp$ret$3, position_0);
          }
        }
      }
      $this.m30_1 = $this.m30_1 + 1 | 0;
      tmp = $this.m30_1;
    } else {
      if (hasComma && !$this.i30_1.y2z_1.e32_1) {
        invalidTrailingComma($this.k30_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.i30_1;
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.uq(index);
      var elementDescriptor = descriptor.tq(index);
      var tmp;
      if (isOptional && !elementDescriptor.eq()) {
        tmp = $this.k30_1.m38(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.mq(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.eq()) {
          tmp_0 = $this.k30_1.m38(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.k30_1.n38($this.o30_1.s31_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.y2z_1.v31_1 && elementDescriptor.eq();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.k30_1.a37();
          tmp$ret$0 = true;
          break $l$block_2;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.k30_1.l38();
    while ($this.k30_1.z36()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.k30_1.k38(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.i30_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.o30_1.x31_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.k30_1.l38();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.p30_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.q35(index);
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
    if (hasComma && !$this.i30_1.y2z_1.e32_1) {
      invalidTrailingComma($this.k30_1);
    }
    var tmp1_safe_receiver = $this.p30_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.r35();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.i30_1) || trySkip($this, $this.n30_1, key)) {
      $this.k30_1.p38($this.o30_1.s31_1);
    } else {
      $this.k30_1.s30_1.g36();
      $this.k30_1.o38(key);
    }
    return $this.k30_1.l38();
  }
  function decodeListIndex($this) {
    var hasComma = $this.k30_1.l38();
    var tmp;
    if ($this.k30_1.z36()) {
      if (!($this.m30_1 === -1) && !hasComma) {
        $this.k30_1.t35('Expected end of the array or comma');
      }
      $this.m30_1 = $this.m30_1 + 1 | 0;
      tmp = $this.m30_1;
    } else {
      if (hasComma && !$this.i30_1.y2z_1.e32_1) {
        invalidTrailingComma($this.k30_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.o30_1.s31_1) {
      tmp = $this.k30_1.r38();
    } else {
      tmp = $this.k30_1.q38();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.i30_1 = json;
    this.j30_1 = mode;
    this.k30_1 = lexer;
    this.l30_1 = this.i30_1.us();
    this.m30_1 = -1;
    this.n30_1 = discriminatorHolder;
    this.o30_1 = this.i30_1.y2z_1;
    this.p30_1 = this.o30_1.v31_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).m32 = function () {
    return this.i30_1;
  };
  protoOf(StreamingJsonDecoder).us = function () {
    return this.l30_1;
  };
  protoOf(StreamingJsonDecoder).k32 = function () {
    return (new JsonTreeReader(this.i30_1.y2z_1, this.k30_1)).c37();
  };
  protoOf(StreamingJsonDecoder).es = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.i30_1.y2z_1.y31_1;
      }
      if (tmp) {
        return deserializer.fp(this);
      }
      var discriminator = classDiscriminator(deserializer.dp(), this.i30_1);
      var tmp0_elvis_lhs = this.k30_1.s38(discriminator, this.o30_1.s31_1);
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
            tmp_1 = this.m32().y2z_1.y31_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.fp(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.dp(), this.m32());
          var tmp2_0 = this.k32();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.dp().lq();
          if (!(tmp2_0 instanceof JsonObject)) {
            var tmp2_1 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2_0).o() + ' as the serialized body of ' + serialName;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path = this.k30_1.s30_1.h36();
            var tmp_2;
            if (this.m32().y2z_1.h32_1) {
              var tmp$ret$6 = toString(tmp2_0);
              tmp_2 = toString(minify(tmp$ret$6));
            } else {
              tmp_2 = null;
            }
            var inputValue = tmp_2;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path, null, inputValue), tmp2_1, -1, path, inputValue, null);
          }
          var jsonTree = tmp2_0;
          var tmp0_safe_receiver = jsonTree.p2e(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_3;
          try {
            tmp_3 = findPolymorphicSerializer(tmp2, this, type);
          } catch ($p) {
            var tmp_4;
            if ($p instanceof SerializationException) {
              var it = $p;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var shortMessage = ensureNotNull(it.message);
              var tmp_5;
              if (this.m32().y2z_1.h32_1) {
                var tmp$ret$10 = jsonTree.toString();
                tmp_5 = toString(minify(tmp$ret$10));
              } else {
                tmp_5 = null;
              }
              var inputValue_0 = tmp_5;
              throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue_0), shortMessage, -1, null, inputValue_0, null);
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_3;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.m32(), discriminator_0, jsonTree, actualSerializer);
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
          this.k30_1.t35(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.n30_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.fp(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw missingFieldExceptionWithNewMessage(e, plus(e.message, ' at path: ') + this.k30_1.s30_1.h36());
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).fs = function (descriptor) {
    var newMode = switchMode(this.i30_1, descriptor);
    this.k30_1.s30_1.c36(descriptor);
    this.k30_1.k38(newMode.v38_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.a1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.i30_1, newMode, this.k30_1, descriptor, this.n30_1);
        break;
      default:
        var tmp_0;
        if (this.j30_1.equals(newMode) && this.i30_1.y2z_1.v31_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.i30_1, newMode, this.k30_1, descriptor, this.n30_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).gs = function (descriptor) {
    if (descriptor.oq() === 0 && ignoreUnknownKeys(descriptor, this.i30_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.k30_1.l38() && !this.i30_1.y2z_1.e32_1) {
      invalidTrailingComma(this.k30_1, '');
    }
    this.k30_1.k38(this.j30_1.w38_1);
    this.k30_1.s30_1.g36();
  };
  protoOf(StreamingJsonDecoder).qr = function () {
    var tmp;
    var tmp0_safe_receiver = this.p30_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p35_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.k30_1.x38();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).rr = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).rs = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.j30_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.k30_1.s30_1.f36();
    }
    var value = protoOf(AbstractDecoder).rs.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.k30_1.s30_1.e36(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).ws = function (descriptor) {
    var index;
    switch (this.j30_1.a1_1) {
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
    if (!this.j30_1.equals(WriteMode_MAP_getInstance())) {
      this.k30_1.s30_1.d36(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).sr = function () {
    return this.k30_1.y38();
  };
  protoOf(StreamingJsonDecoder).tr = function () {
    var value = this.k30_1.z38();
    if (!equalsLong(value, fromInt(convertToByte(value)))) {
      this.k30_1.t35("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  };
  protoOf(StreamingJsonDecoder).ur = function () {
    var value = this.k30_1.z38();
    if (!equalsLong(value, fromInt(convertToShort(value)))) {
      this.k30_1.t35("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  };
  protoOf(StreamingJsonDecoder).vr = function () {
    var value = this.k30_1.z38();
    if (!equalsLong(value, fromInt(convertToInt(value)))) {
      this.k30_1.t35("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  };
  protoOf(StreamingJsonDecoder).wr = function () {
    return this.k30_1.z38();
  };
  protoOf(StreamingJsonDecoder).xr = function () {
    var tmp0 = this.k30_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.b37();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.t35("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.i30_1.y2z_1.a32_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.k30_1, result);
  };
  protoOf(StreamingJsonDecoder).yr = function () {
    var tmp0 = this.k30_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.b37();
      try {
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.t35("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.i30_1.y2z_1.a32_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.k30_1, result);
  };
  protoOf(StreamingJsonDecoder).zr = function () {
    var string = this.k30_1.b37();
    if (!(string.length === 1)) {
      this.k30_1.t35("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  };
  protoOf(StreamingJsonDecoder).as = function () {
    var tmp;
    if (this.o30_1.s31_1) {
      tmp = this.k30_1.r38();
    } else {
      tmp = this.k30_1.a37();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).cs = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.k30_1, this.i30_1) : protoOf(AbstractDecoder).cs.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).bs = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.i30_1, this.as(), ' at path ' + this.k30_1.s30_1.h36());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.a39_1 = lexer;
    this.b39_1 = json.us();
  }
  protoOf(JsonDecoderForUnsignedTypes).us = function () {
    return this.b39_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).ws = function (descriptor) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).vr = function () {
    var tmp0 = this.a39_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.b37();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.t35("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).wr = function () {
    var tmp0 = this.a39_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.b37();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.t35("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).tr = function () {
    var tmp0 = this.a39_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.b37();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.t35("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).ur = function () {
    var tmp0 = this.a39_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.b37();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.t35("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
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
    $this.k36_1.n34();
    $this.jt(discriminator);
    $this.k36_1.q34(_Char___init__impl__6a9atx(58));
    $this.k36_1.p34();
    $this.jt(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.k36_1 = composer;
    this.l36_1 = json;
    this.m36_1 = mode;
    this.n36_1 = modeReuseCache;
    this.o36_1 = this.l36_1.us();
    this.p36_1 = this.l36_1.y2z_1;
    this.q36_1 = false;
    this.r36_1 = null;
    this.s36_1 = null;
    var i = this.m36_1.a1_1;
    if (!(this.n36_1 == null)) {
      if (!(this.n36_1[i] === null) || !(this.n36_1[i] === this)) {
        this.n36_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).m32 = function () {
    return this.l36_1;
  };
  protoOf(StreamingJsonEncoder).us = function () {
    return this.o36_1;
  };
  protoOf(StreamingJsonEncoder).y33 = function (element) {
    var tmp;
    if (!(this.r36_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.s36_1, element);
    }
    this.xt(JsonElementSerializer_getInstance(), element);
  };
  protoOf(StreamingJsonEncoder).cu = function (descriptor, index) {
    return this.p36_1.q31_1;
  };
  protoOf(StreamingJsonEncoder).xt = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.m32().y2z_1.y31_1) {
        serializer.ep(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.m32().y2z_1.g32_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.m32().y2z_1.g32_1.a1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.dp().mq();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.dp(), this.m32()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.dp()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        access$checkEncodingConflicts$tPolymorphicKt(this.m32(), serializer, actualSerializer, baseClassDiscriminator);
        checkKind_0(actualSerializer.dp().mq());
        var serialName = actualSerializer.dp().lq();
        this.r36_1 = baseClassDiscriminator;
        this.s36_1 = serialName;
      }
      actualSerializer.ep(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).fs = function (descriptor) {
    var newMode = switchMode(this.l36_1, descriptor);
    if (!(newMode.v38_1 === _Char___init__impl__6a9atx(0))) {
      this.k36_1.q34(newMode.v38_1);
      this.k36_1.l34();
    }
    var discriminator = this.r36_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.s36_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.lq() : tmp0_elvis_lhs);
      this.r36_1 = null;
      this.s36_1 = null;
    }
    if (this.m36_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.n36_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.a1_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.k36_1, this.l36_1, newMode, this.n36_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).gs = function (descriptor) {
    if (!(this.m36_1.w38_1 === _Char___init__impl__6a9atx(0))) {
      this.k36_1.m34();
      this.k36_1.o34();
      this.k36_1.q34(this.m36_1.w38_1);
    }
  };
  protoOf(StreamingJsonEncoder).ys = function (descriptor, index) {
    switch (this.m36_1.a1_1) {
      case 1:
        if (!this.k36_1.k34_1) {
          this.k36_1.q34(_Char___init__impl__6a9atx(44));
        }

        this.k36_1.n34();
        break;
      case 2:
        if (!this.k36_1.k34_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.k36_1.q34(_Char___init__impl__6a9atx(44));
            this.k36_1.n34();
            tmp_0 = true;
          } else {
            this.k36_1.q34(_Char___init__impl__6a9atx(58));
            this.k36_1.p34();
            tmp_0 = false;
          }
          tmp.q36_1 = tmp_0;
        } else {
          this.q36_1 = true;
          this.k36_1.n34();
        }

        break;
      case 3:
        if (index === 0)
          this.q36_1 = true;
        if (index === 1) {
          this.k36_1.q34(_Char___init__impl__6a9atx(44));
          this.k36_1.p34();
          this.q36_1 = false;
        }

        break;
      default:
        if (!this.k36_1.k34_1) {
          this.k36_1.q34(_Char___init__impl__6a9atx(44));
        }

        this.k36_1.n34();
        this.jt(getJsonElementName(descriptor, this.l36_1, index));
        this.k36_1.q34(_Char___init__impl__6a9atx(58));
        this.k36_1.p34();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).yt = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.p36_1.v31_1) {
      protoOf(AbstractEncoder).yt.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).lt = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.k36_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.k36_1;
      } else {
        var tmp0 = this.k36_1.j34_1;
        var p1 = this.q36_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
      }
      var tmp$ret$0 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$0, this.l36_1, this.m36_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.k36_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.k36_1;
      } else {
        var tmp0_0 = this.k36_1.j34_1;
        var p1_0 = this.q36_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
      }
      var tmp$ret$2 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$2, this.l36_1, this.m36_1, null);
    } else if (!(this.r36_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.s36_1 = descriptor.lq();
      tmp = this;
    } else {
      tmp = protoOf(AbstractEncoder).lt.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).at = function () {
    this.k36_1.s34('null');
  };
  protoOf(StreamingJsonEncoder).bt = function (value) {
    if (this.q36_1) {
      this.jt(value.toString());
    } else {
      this.k36_1.b35(value);
    }
  };
  protoOf(StreamingJsonEncoder).ct = function (value) {
    if (this.q36_1) {
      this.jt(value.toString());
    } else {
      this.k36_1.w34(value);
    }
  };
  protoOf(StreamingJsonEncoder).dt = function (value) {
    if (this.q36_1) {
      this.jt(value.toString());
    } else {
      this.k36_1.y34(value);
    }
  };
  protoOf(StreamingJsonEncoder).et = function (value) {
    if (this.q36_1) {
      this.jt(value.toString());
    } else {
      this.k36_1.z34(value);
    }
  };
  protoOf(StreamingJsonEncoder).ft = function (value) {
    if (this.q36_1) {
      this.jt(value.toString());
    } else {
      this.k36_1.a35(value);
    }
  };
  protoOf(StreamingJsonEncoder).gt = function (value) {
    if (this.q36_1) {
      this.jt(value.toString());
    } else {
      this.k36_1.u34(value);
    }
    if (!this.p36_1.a32_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  };
  protoOf(StreamingJsonEncoder).ht = function (value) {
    if (this.q36_1) {
      this.jt(value.toString());
    } else {
      this.k36_1.v34(value);
    }
    if (!this.p36_1.a32_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  };
  protoOf(StreamingJsonEncoder).it = function (value) {
    this.jt(toString_1(value));
  };
  protoOf(StreamingJsonEncoder).jt = function (value) {
    return this.k36_1.c35(value);
  };
  protoOf(StreamingJsonEncoder).kt = function (enumDescriptor, index) {
    this.jt(enumDescriptor.qq(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.nq() && get_unsignedNumberDescriptors().j2(_this__u8e3s4);
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.nq() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).dp(), serializer_0(Companion_getInstance()).dp(), serializer_2(Companion_getInstance_1()).dp(), serializer_3(Companion_getInstance_2()).dp()]);
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
          _this__u8e3s4.ac(value, lastPos, i);
          _this__u8e3s4.q(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.ac(value, lastPos, value.length);
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
    return input.es(deserializer);
  }
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.dp())).es(deserializer);
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    var tmp2 = "Failed to parse literal '" + literal.toString() + "' as " + type + ' value';
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var path = $this.i39(tag);
    var tmp;
    if ($this.m32().y2z_1.h32_1) {
      var tmp$ret$3 = toString($this.j39());
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
    this.e39_1 = json;
    this.f39_1 = value;
    this.g39_1 = polymorphicDiscriminator;
    this.h39_1 = this.m32().y2z_1;
  }
  protoOf(AbstractJsonTreeDecoder).m32 = function () {
    return this.e39_1;
  };
  protoOf(AbstractJsonTreeDecoder).n1 = function () {
    return this.f39_1;
  };
  protoOf(AbstractJsonTreeDecoder).us = function () {
    return this.m32().us();
  };
  protoOf(AbstractJsonTreeDecoder).j39 = function () {
    var tmp0_safe_receiver = this.n16();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.k39(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.n1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).i39 = function (currentTag) {
    return this.p16() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).k32 = function () {
    return this.j39();
  };
  protoOf(AbstractJsonTreeDecoder).es = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.m32().y2z_1.y31_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.fp(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.dp(), this.m32());
      var tmp2 = this.k32();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.dp().lq();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.p16();
        var tmp_0;
        if (this.m32().y2z_1.h32_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var jsonTree = tmp2;
      var tmp0_safe_receiver = jsonTree.p2e(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_1;
      try {
        tmp_1 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof SerializationException) {
          var it = $p;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var shortMessage = ensureNotNull(it.message);
          var tmp_3;
          if (this.m32().y2z_1.h32_1) {
            var tmp$ret$10 = jsonTree.toString();
            tmp_3 = toString(minify(tmp$ret$10));
          } else {
            tmp_3 = null;
          }
          var inputValue_0 = tmp_3;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue_0), shortMessage, -1, null, inputValue_0, null);
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_1;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.m32(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).o16 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).fs = function (descriptor) {
    var currentObject = this.j39();
    var tmp0_subject = descriptor.mq();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.m32();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.lq();
      if (!(currentObject instanceof JsonArray)) {
        var tmp2 = 'Expected ' + getKClass(JsonArray).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.p16();
        var tmp_2;
        if (this.m32().y2z_1.h32_1) {
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
        var this_0 = this.m32();
        var keyDescriptor = carrierDescriptor(descriptor.tq(0), this_0.us());
        var keyKind = keyDescriptor.mq();
        var tmp_3;
        var tmp_4;
        if (keyKind instanceof PrimitiveKind) {
          tmp_4 = true;
        } else {
          tmp_4 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_4) {
          var tmp_5 = this.m32();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.lq();
          if (!(currentObject instanceof JsonObject)) {
            var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_0;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path_0 = this.p16();
            var tmp_6;
            if (this.m32().y2z_1.h32_1) {
              var tmp$ret$15 = toString(currentObject);
              tmp_6 = toString(minify(tmp$ret$15));
            } else {
              tmp_6 = null;
            }
            var inputValue_0 = tmp_6;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path_0, null, inputValue_0), tmp2_0, -1, path_0, inputValue_0, null);
          }
          tmp_3 = new JsonTreeMapDecoder(tmp_5, currentObject);
        } else {
          if (this_0.y2z_1.t31_1) {
            var tmp_7 = this.m32();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.lq();
            if (!(currentObject instanceof JsonArray)) {
              var tmp2_1 = 'Expected ' + getKClass(JsonArray).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_1;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var path_1 = this.p16();
              var tmp_8;
              if (this.m32().y2z_1.h32_1) {
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
        var tmp_9 = this.m32();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.lq();
        if (!(currentObject instanceof JsonObject)) {
          var tmp2_2 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_2;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path_2 = this.p16();
          var tmp_10;
          if (this.m32().y2z_1.h32_1) {
            var tmp$ret$30 = toString(currentObject);
            tmp_10 = toString(minify(tmp$ret$30));
          } else {
            tmp_10 = null;
          }
          var inputValue_2 = tmp_10;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_2, path_2, null, inputValue_2), tmp2_2, -1, path_2, inputValue_2, null);
        }
        tmp = new JsonTreeDecoder(tmp_9, currentObject, this.g39_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).gs = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).qr = function () {
    var tmp = this.j39();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).l39 = function (tag, enumDescriptor) {
    var tmp = this.m32();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.k39(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.lq();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.i39(tag);
      var tmp_0;
      if (this.m32().y2z_1.h32_1) {
        var tmp$ret$7 = toString(tmp2);
        tmp_0 = toString(minify(tmp$ret$7));
      } else {
        tmp_0 = null;
      }
      var inputValue = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.v32());
  };
  protoOf(AbstractJsonTreeDecoder).b17 = function (tag, enumDescriptor) {
    return this.l39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).m39 = function (tag) {
    return !(this.k39(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).r16 = function (tag) {
    return this.m39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).n39 = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.k39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'boolean';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i39(tag);
        var tmp;
        if (this.m32().y2z_1.h32_1) {
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
  protoOf(AbstractJsonTreeDecoder).s16 = function (tag) {
    return this.n39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).o39 = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.k39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'byte';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i39(tag);
        var tmp;
        if (this.m32().y2z_1.h32_1) {
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
  protoOf(AbstractJsonTreeDecoder).t16 = function (tag) {
    return this.o39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).p39 = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.k39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'short';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i39(tag);
        var tmp;
        if (this.m32().y2z_1.h32_1) {
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
  protoOf(AbstractJsonTreeDecoder).u16 = function (tag) {
    return this.p39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).q39 = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.k39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'int';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i39(tag);
        var tmp;
        if (this.m32().y2z_1.h32_1) {
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
  protoOf(AbstractJsonTreeDecoder).v16 = function (tag) {
    return this.q39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).r39 = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.k39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'long';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i39(tag);
        var tmp;
        if (this.m32().y2z_1.h32_1) {
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
  protoOf(AbstractJsonTreeDecoder).w16 = function (tag) {
    return this.r39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).s39 = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.k39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'float';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i39(tag);
        var tmp;
        if (this.m32().y2z_1.h32_1) {
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
    var specialFp = this.m32().y2z_1.a32_1;
    if (specialFp || isFinite(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.m32().y2z_1.h32_1) {
      var tmp$ret$13 = toString(this.j39());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).x16 = function (tag) {
    return this.s39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).t39 = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.k39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'double';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i39(tag);
        var tmp;
        if (this.m32().y2z_1.h32_1) {
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
    var specialFp = this.m32().y2z_1.a32_1;
    if (specialFp || isFinite_0(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.m32().y2z_1.h32_1) {
      var tmp$ret$13 = toString(this.j39());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).y16 = function (tag) {
    return this.t39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).u39 = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.k39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'char';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i39(tag);
        var tmp;
        if (this.m32().y2z_1.h32_1) {
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
        var tmp0_elvis_lhs = new Char(single(literal.v32()));
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0.w1_1;
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
  protoOf(AbstractJsonTreeDecoder).z16 = function (tag) {
    return this.u39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).v39 = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.k39(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'string';
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.i39(tag);
      var tmp;
      if (this.m32().y2z_1.h32_1) {
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
      var tmp4 = this.i39(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint = "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.";
      var tmp_0;
      if (this.m32().y2z_1.h32_1) {
        var tmp$ret$10 = toString(this.j39());
        tmp_0 = toString(minify(tmp$ret$10));
      } else {
        tmp_0 = null;
      }
      var inputValue_0 = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, tmp4, hint, inputValue_0), tmp2_0, -1, tmp4, inputValue_0, hint);
    }
    if (!value_0.y32_1 && !this.m32().y2z_1.s31_1) {
      var tmp2_1 = "String literal for value of key '" + tag + "' should be quoted";
      var tmp4_0 = this.i39(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint_0 = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
      var tmp_1;
      if (this.m32().y2z_1.h32_1) {
        var tmp$ret$14 = toString(this.j39());
        tmp_1 = toString(minify(tmp$ret$14));
      } else {
        tmp_1 = null;
      }
      var inputValue_1 = tmp_1;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, tmp4_0, hint_0, inputValue_1), tmp2_1, -1, tmp4_0, inputValue_1, hint_0);
    }
    return value_0.a33_1;
  };
  protoOf(AbstractJsonTreeDecoder).a17 = function (tag) {
    return this.v39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).w39 = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.m32();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.k39(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.lq();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i39(tag);
        var tmp_1;
        if (this.m32().y2z_1.h32_1) {
          var tmp$ret$7 = toString(tmp2);
          tmp_1 = toString(minify(tmp$ret$7));
        } else {
          tmp_1 = null;
        }
        var inputValue = tmp_1;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.v32());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.m32());
    } else {
      tmp = protoOf(NamedValueDecoder).c17.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).c17 = function (tag, inlineDescriptor) {
    return this.w39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).cs = function (descriptor) {
    return !(this.n16() == null) ? protoOf(NamedValueDecoder).cs.call(this, descriptor) : (new JsonPrimitiveDecoder(this.m32(), this.n1(), this.g39_1)).cs(descriptor);
  };
  function setForceNull($this, descriptor, index) {
    $this.g3a_1 = (!$this.m32().y2z_1.v31_1 && !descriptor.uq(index) && descriptor.tq(index).eq());
    return $this.g3a_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.d3a_1 = value;
    this.e3a_1 = polyDescriptor;
    this.f3a_1 = 0;
    this.g3a_1 = false;
  }
  protoOf(JsonTreeDecoder).n1 = function () {
    return this.d3a_1;
  };
  protoOf(JsonTreeDecoder).ws = function (descriptor) {
    $l$loop: while (this.f3a_1 < descriptor.oq()) {
      var _unary__edvuaz = this.f3a_1;
      this.f3a_1 = _unary__edvuaz + 1 | 0;
      var name = this.i16(descriptor, _unary__edvuaz);
      var index = this.f3a_1 - 1 | 0;
      this.g3a_1 = false;
      var tmp;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.n1();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).q2(name)) {
        tmp = true;
      } else {
        tmp = setForceNull(this, descriptor, index);
      }
      if (tmp) {
        if (!this.h39_1.x31_1)
          return index;
        var tmp0 = this.m32();
        var tmp$ret$2;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.uq(index);
          var elementDescriptor = descriptor.tq(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.eq()) {
            var tmp_1 = this.h3a(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.mq(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.eq()) {
              var tmp_3 = this.h3a(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$2 = false;
              break $l$block_2;
            }
            var tmp_4 = this.h3a(name);
            var tmp0_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$2 = false;
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            var enumValue = tmp_5;
            var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
            var coerceToNull = !tmp0.y2z_1.v31_1 && elementDescriptor.eq();
            if (enumIndex === -3 && (isOptional || coerceToNull)) {
              if (setForceNull(this, descriptor, index))
                return index;
              tmp$ret$2 = true;
              break $l$block_2;
            }
          }
          tmp$ret$2 = false;
        }
        if (tmp$ret$2)
          continue $l$loop;
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).qr = function () {
    return !this.g3a_1 && protoOf(AbstractJsonTreeDecoder).qr.call(this);
  };
  protoOf(JsonTreeDecoder).j16 = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.m32());
    var baseName = descriptor.qq(index);
    if (strategy == null) {
      if (!this.h39_1.b32_1)
        return baseName;
      if (this.n1().t2().j2(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.m32(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.n1().t2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (deserializationNamesMap_0.s2(element) === index) {
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
    var fallbackName = strategy == null ? null : strategy.x35(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).k39 = function (tag) {
    return getValue(this.n1(), tag);
  };
  protoOf(JsonTreeDecoder).h3a = function (tag) {
    return this.n1().p2e(tag);
  };
  protoOf(JsonTreeDecoder).fs = function (descriptor) {
    if (descriptor === this.e3a_1) {
      var tmp = this.m32();
      var tmp2 = this.j39();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.e3a_1.lq();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.p16();
        var tmp_0;
        if (this.m32().y2z_1.h32_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      return new JsonTreeDecoder(tmp, tmp2, this.g39_1, this.e3a_1);
    }
    return protoOf(AbstractJsonTreeDecoder).fs.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).gs = function (descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.m32())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.mq();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.m32());
    var tmp_1;
    if (strategy == null && !this.h39_1.b32_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.m32(), descriptor).t2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.m32()).i38(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.n1().t2().t();
    while (_iterator__ex2g4s.u()) {
      var key = _iterator__ex2g4s.v();
      if (!names.j2(key) && !(key === this.g39_1)) {
        var tmp2 = "Encountered an unknown key '" + key + "'";
        var tmp4 = this.p16();
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var hint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.";
        var tmp_3;
        if (this.m32().y2z_1.h32_1) {
          var tmp$ret$4 = this.n1().toString();
          tmp_3 = toString(minify(tmp$ret$4));
        } else {
          tmp_3 = null;
        }
        var inputValue = tmp_3;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, tmp4, hint, inputValue), tmp2, -1, tmp4, inputValue, hint);
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.o3a_1 = value;
    this.p3a_1 = this.o3a_1.e1();
    this.q3a_1 = -1;
  }
  protoOf(JsonTreeListDecoder).n1 = function () {
    return this.o3a_1;
  };
  protoOf(JsonTreeListDecoder).j16 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).k39 = function (tag) {
    return this.o3a_1.d1(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).ws = function (descriptor) {
    while (this.q3a_1 < (this.p3a_1 - 1 | 0)) {
      this.q3a_1 = this.q3a_1 + 1 | 0;
      return this.q3a_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.x3a_1 = value;
    this.d17('primitive');
  }
  protoOf(JsonPrimitiveDecoder).n1 = function () {
    return this.x3a_1;
  };
  protoOf(JsonPrimitiveDecoder).ws = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).k39 = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.x3a_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.i3b_1 = value;
    this.j3b_1 = toList(this.i3b_1.t2());
    this.k3b_1 = imul(this.j3b_1.e1(), 2);
    this.l3b_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).n1 = function () {
    return this.i3b_1;
  };
  protoOf(JsonTreeMapDecoder).j16 = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.j3b_1.d1(i);
  };
  protoOf(JsonTreeMapDecoder).ws = function (descriptor) {
    while (this.l3b_1 < (this.k3b_1 - 1 | 0)) {
      this.l3b_1 = this.l3b_1 + 1 | 0;
      return this.l3b_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).k39 = function (tag) {
    return (this.l3b_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.i3b_1, tag);
  };
  protoOf(JsonTreeMapDecoder).gs = function (descriptor) {
  };
  function writeJson(json, value, serializer) {
    var result = {_v: null};
    var encoder = new JsonTreeEncoder(json, writeJson$lambda(result));
    encoder.xt(serializer, value);
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
    tmp.y3b_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonTreeEncoder).z3b = function (key, element) {
    // Inline function 'kotlin.collections.set' call
    this.y3b_1.v2(key, element);
  };
  protoOf(JsonTreeEncoder).yt = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.p3b_1.v31_1) {
      protoOf(AbstractJsonTreeEncoder).yt.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(JsonTreeEncoder).a3c = function () {
    return new JsonObject(this.y3b_1);
  };
  function inlineUnsignedNumberEncoder($this, tag) {
    return new AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1($this, tag);
  }
  function inlineUnquotedLiteralEncoder($this, tag, inlineDescriptor) {
    return new AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1($this, tag, inlineDescriptor);
  }
  function AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1(this$0, $tag) {
    this.p3c_1 = this$0;
    this.q3c_1 = $tag;
    AbstractEncoder.call(this);
    this.o3c_1 = this$0.n3b_1.us();
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).us = function () {
    return this.o3c_1;
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).r3c = function (s) {
    return this.p3c_1.z3b(this.q3c_1, new JsonLiteral(s, false));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).et = function (value) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
    return this.r3c(UInt__toString_impl_dbgl21(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).ft = function (value) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(value);
    return this.r3c(ULong__toString_impl_f9au7k(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).ct = function (value) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
    return this.r3c(UByte__toString_impl_v72jg(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).dt = function (value) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(value);
    return this.r3c(UShort__toString_impl_edaoee(tmp$ret$0));
  };
  function AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1(this$0, $tag, $inlineDescriptor) {
    this.s3c_1 = this$0;
    this.t3c_1 = $tag;
    this.u3c_1 = $inlineDescriptor;
    AbstractEncoder.call(this);
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).us = function () {
    return this.s3c_1.n3b_1.us();
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).jt = function (value) {
    return this.s3c_1.z3b(this.t3c_1, new JsonLiteral(value, false, this.u3c_1));
  };
  function AbstractJsonTreeEncoder$beginStructure$lambda(this$0) {
    return function (node) {
      this$0.z3b(this$0.w17(), node);
      return Unit_instance;
    };
  }
  function AbstractJsonTreeEncoder(json, nodeConsumer) {
    NamedValueEncoder.call(this);
    this.n3b_1 = json;
    this.o3b_1 = nodeConsumer;
    this.p3b_1 = this.n3b_1.y2z_1;
    this.q3b_1 = null;
    this.r3b_1 = null;
  }
  protoOf(AbstractJsonTreeEncoder).m32 = function () {
    return this.n3b_1;
  };
  protoOf(AbstractJsonTreeEncoder).us = function () {
    return this.n3b_1.us();
  };
  protoOf(AbstractJsonTreeEncoder).j16 = function (descriptor, index) {
    return getJsonElementName(descriptor, this.n3b_1, index);
  };
  protoOf(AbstractJsonTreeEncoder).y33 = function (element) {
    var tmp;
    if (!(this.q3b_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.r3b_1, element);
    }
    this.xt(JsonElementSerializer_getInstance(), element);
  };
  protoOf(AbstractJsonTreeEncoder).cu = function (descriptor, index) {
    return this.p3b_1.q31_1;
  };
  protoOf(AbstractJsonTreeEncoder).o16 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeEncoder).au = function () {
  };
  protoOf(AbstractJsonTreeEncoder).at = function () {
    var tmp0_elvis_lhs = this.n16();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.o3b_1(JsonNull_getInstance());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tag = tmp;
    this.b3c(tag);
  };
  protoOf(AbstractJsonTreeEncoder).b3c = function (tag) {
    return this.z3b(tag, JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeEncoder).j17 = function (tag) {
    return this.b3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeEncoder).c3c = function (tag, value) {
    return this.z3b(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).k17 = function (tag, value) {
    return this.c3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).d3c = function (tag, value) {
    return this.z3b(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).l17 = function (tag, value) {
    return this.d3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).e3c = function (tag, value) {
    return this.z3b(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).m17 = function (tag, value) {
    return this.e3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).f3c = function (tag, value) {
    return this.z3b(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).n17 = function (tag, value) {
    return this.f3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).g3c = function (tag, value) {
    this.z3b(tag, JsonPrimitive_1(value));
    if (!this.p3b_1.a32_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, tag);
    }
  };
  protoOf(AbstractJsonTreeEncoder).o17 = function (tag, value) {
    return this.g3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).xt = function (serializer, value) {
    if (!(this.n16() == null) || !get_requiresTopLevelTag(carrierDescriptor(serializer.dp(), this.us()))) {
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
        if (this.m32().y2z_1.y31_1) {
          serializer.ep(this, value);
          break $l$block;
        }
        var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
        var tmp;
        if (isPolymorphicSerializer) {
          tmp = !this.m32().y2z_1.g32_1.equals(ClassDiscriminatorMode_NONE_getInstance());
        } else {
          var tmp_0;
          switch (this.m32().y2z_1.g32_1.a1_1) {
            case 0:
            case 2:
              tmp_0 = false;
              break;
            case 1:
              // Inline function 'kotlin.let' call

              var it = serializer.dp().mq();
              tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp = tmp_0;
        }
        var needDiscriminator = tmp;
        var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.dp(), this.m32()) : null;
        var tmp_1;
        if (isPolymorphicSerializer) {
          var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
          $l$block_0: {
            // Inline function 'kotlin.requireNotNull' call
            if (value == null) {
              var message = 'Value for serializer ' + toString(serializer.dp()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            } else {
              break $l$block_0;
            }
          }
          var actual = findPolymorphicSerializer_0(casted, this, value);
          tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
        } else {
          tmp_1 = serializer;
        }
        var actualSerializer = tmp_1;
        if (!(baseClassDiscriminator == null)) {
          access$checkEncodingConflicts$tPolymorphicKt(this.m32(), serializer, actualSerializer, baseClassDiscriminator);
          checkKind_0(actualSerializer.dp().mq());
          var serialName = actualSerializer.dp().lq();
          this.q3b_1 = baseClassDiscriminator;
          this.r3b_1 = serialName;
        }
        actualSerializer.ep(this, value);
      }
    } else {
      // Inline function 'kotlin.run' call
      (new JsonPrimitiveEncoder(this.n3b_1, this.o3b_1)).xt(serializer, value);
    }
  };
  protoOf(AbstractJsonTreeEncoder).h3c = function (tag, value) {
    this.z3b(tag, JsonPrimitive_1(value));
    if (!this.p3b_1.a32_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, tag);
    }
  };
  protoOf(AbstractJsonTreeEncoder).p17 = function (tag, value) {
    return this.h3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).i3c = function (tag, value) {
    return this.z3b(tag, JsonPrimitive_2(value));
  };
  protoOf(AbstractJsonTreeEncoder).q17 = function (tag, value) {
    return this.i3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).j3c = function (tag, value) {
    return this.z3b(tag, JsonPrimitive_0(toString_1(value)));
  };
  protoOf(AbstractJsonTreeEncoder).r17 = function (tag, value) {
    return this.j3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).k3c = function (tag, value) {
    return this.z3b(tag, JsonPrimitive_0(value));
  };
  protoOf(AbstractJsonTreeEncoder).s17 = function (tag, value) {
    return this.k3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).l3c = function (tag, enumDescriptor, ordinal) {
    return this.z3b(tag, JsonPrimitive_0(enumDescriptor.qq(ordinal)));
  };
  protoOf(AbstractJsonTreeEncoder).t17 = function (tag, enumDescriptor, ordinal) {
    return this.l3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor, ordinal);
  };
  protoOf(AbstractJsonTreeEncoder).m3c = function (tag, value) {
    this.z3b(tag, JsonPrimitive_0(toString(value)));
  };
  protoOf(AbstractJsonTreeEncoder).h17 = function (tag, value) {
    return this.m3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).n3c = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? inlineUnsignedNumberEncoder(this, tag) : get_isUnquotedLiteral(inlineDescriptor) ? inlineUnquotedLiteralEncoder(this, tag, inlineDescriptor) : protoOf(NamedValueEncoder).u17.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).u17 = function (tag, inlineDescriptor) {
    return this.n3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).lt = function (descriptor) {
    var tmp;
    if (!(this.n16() == null)) {
      if (!(this.q3b_1 == null))
        this.r3b_1 = descriptor.lq();
      tmp = protoOf(NamedValueEncoder).lt.call(this, descriptor);
    } else {
      tmp = (new JsonPrimitiveEncoder(this.n3b_1, this.o3b_1)).lt(descriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeEncoder).fs = function (descriptor) {
    var tmp;
    if (this.n16() == null) {
      tmp = this.o3b_1;
    } else {
      tmp = AbstractJsonTreeEncoder$beginStructure$lambda(this);
    }
    var consumer = tmp;
    var tmp0_subject = descriptor.mq();
    var tmp_0;
    var tmp_1;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_1) {
      tmp_0 = new JsonTreeListEncoder(this.n3b_1, consumer);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.n3b_1;
        var keyDescriptor = carrierDescriptor(descriptor.tq(0), this_0.us());
        var keyKind = keyDescriptor.mq();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          tmp_2 = new JsonTreeMapEncoder(this.n3b_1, consumer);
        } else {
          if (this_0.y2z_1.t31_1) {
            tmp_2 = new JsonTreeListEncoder(this.n3b_1, consumer);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp_0 = tmp_2;
      } else {
        tmp_0 = new JsonTreeEncoder(this.n3b_1, consumer);
      }
    }
    var encoder = tmp_0;
    var discriminator = this.q3b_1;
    if (!(discriminator == null)) {
      if (encoder instanceof JsonTreeMapEncoder) {
        encoder.z3b('key', JsonPrimitive_0(discriminator));
        var tmp1_elvis_lhs = this.r3b_1;
        encoder.z3b('value', JsonPrimitive_0(tmp1_elvis_lhs == null ? descriptor.lq() : tmp1_elvis_lhs));
      } else {
        var tmp2_elvis_lhs = this.r3b_1;
        encoder.z3b(discriminator, JsonPrimitive_0(tmp2_elvis_lhs == null ? descriptor.lq() : tmp2_elvis_lhs));
      }
      this.q3b_1 = null;
      this.r3b_1 = null;
    }
    return encoder;
  };
  protoOf(AbstractJsonTreeEncoder).v17 = function (descriptor) {
    this.o3b_1(this.a3c());
  };
  function get_requiresTopLevelTag(_this__u8e3s4) {
    var tmp;
    var tmp_0 = _this__u8e3s4.mq();
    if (tmp_0 instanceof PrimitiveKind) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.mq() === ENUM_getInstance();
    }
    return tmp;
  }
  function JsonPrimitiveEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    this.k3d_1 = null;
    this.d17('primitive');
  }
  protoOf(JsonPrimitiveEncoder).z3b = function (key, element) {
    // Inline function 'kotlin.require' call
    if (!(key === 'primitive')) {
      var message = "This output can only consume primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.k3d_1 == null)) {
      var message_0 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.k3d_1 = element;
    this.o3b_1(element);
  };
  protoOf(JsonPrimitiveEncoder).a3c = function () {
    var tmp0 = this.k3d_1;
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
    tmp.r3d_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonTreeListEncoder).j16 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListEncoder).z3b = function (key, element) {
    var idx = toInt(key);
    this.r3d_1.a3(idx, element);
  };
  protoOf(JsonTreeListEncoder).a3c = function () {
    return new JsonArray(this.r3d_1);
  };
  function _get_tag__e6h4qf($this) {
    var tmp = $this.c3d_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('tag');
    }
  }
  function JsonTreeMapEncoder(json, nodeConsumer) {
    JsonTreeEncoder.call(this, json, nodeConsumer);
    this.d3d_1 = true;
  }
  protoOf(JsonTreeMapEncoder).z3b = function (key, element) {
    if (this.d3d_1) {
      var tmp = this;
      var tmp_0;
      if (element instanceof JsonPrimitive) {
        tmp_0 = element.v32();
      } else {
        if (element instanceof JsonObject) {
          throw InvalidKeyKindException(JsonObjectSerializer_getInstance().k33_1);
        } else {
          if (element instanceof JsonArray) {
            throw InvalidKeyKindException(JsonArraySerializer_getInstance().l33_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      tmp.c3d_1 = tmp_0;
      this.d3d_1 = false;
    } else {
      var tmp0 = this.y3b_1;
      // Inline function 'kotlin.collections.set' call
      var key_0 = _get_tag__e6h4qf(this);
      tmp0.v2(key_0, element);
      this.d3d_1 = true;
    }
  };
  protoOf(JsonTreeMapEncoder).a3c = function () {
    return new JsonObject(this.y3b_1);
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
    this.v38_1 = begin;
    this.w38_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.mq();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.tq(0), _this__u8e3s4.us());
          var keyKind = keyDescriptor.mq();
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
            if (_this__u8e3s4.y2z_1.t31_1) {
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
    if (equals(_this__u8e3s4.mq(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.nq()) {
      tmp = carrierDescriptor(_this__u8e3s4.tq(0), module_0);
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
    $this.s3d(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.s3d(lastPosition, currentPosition);
    var result = $this.u30_1.toString();
    $this.u30_1.gc(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.t30_1);
    $this.t30_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.t3d(), $this.r30_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.u3d(currentPosition);
    if (currentPosition === -1) {
      $this.t35('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.t3d();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.t3d(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.t35("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.u30_1.s(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.r30_1 = startPos;
      $this.v3d();
      if (($this.r30_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.t35('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.r30_1);
    }
    $this.u30_1.s(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.t35("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.u3d(start);
    if (current >= charSequenceLength($this.t3d()) || current === -1) {
      $this.t35('EOF');
    }
    var tmp = $this.t3d();
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
        $this.t35("Expected valid boolean literal prefix, but had '" + $this.b37() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.t3d()) - current | 0) < literalSuffix.length) {
      $this.t35('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charCodeAt(literalSuffix, i);
        var actual = charSequenceGet($this.t3d(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.t35("Expected valid boolean literal prefix, but had '" + $this.b37() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.r30_1 = current + literalSuffix.length | 0;
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
    this.q30_1 = configuration;
    this.r30_1 = 0;
    this.s30_1 = new JsonPath(this.q30_1);
    this.t30_1 = null;
    this.u30_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).v3d = function () {
  };
  protoOf(AbstractJsonLexer).l38 = function () {
    var current = this.w3d();
    var source = this.t3d();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.r30_1 = this.r30_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).x3d = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).v30 = function () {
    var nextToken = this.d37();
    if (!(nextToken === 10)) {
      this.t35('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.t3d(), this.r30_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).x36 = function (expected) {
    var token = this.d37();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true && this.r30_1 > 0 ? this.r30_1 - 1 | 0 : this.r30_1;
      var s = this.r30_1 === charSequenceLength(this.t3d()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.t3d(), position));
      var tmp$ret$1 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.t35(tmp$ret$1, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).y3d = function (expected) {
    if (this.r30_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.r30_1;
        try {
          this.r30_1 = this.r30_1 - 1 | 0;
          tmp$ret$0 = this.b37();
          break $l$block;
        }finally {
          this.r30_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$0;
      if (inputLiteral === 'null') {
        this.s35("Expected string literal but 'null' literal was found", this.r30_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true && this.r30_1 > 0 ? this.r30_1 - 1 | 0 : this.r30_1;
    var s = this.r30_1 === charSequenceLength(this.t3d()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.t3d(), position));
    var tmp$ret$3 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.t35(tmp$ret$3, position);
  };
  protoOf(AbstractJsonLexer).y36 = function () {
    var source = this.t3d();
    var cpos = this.r30_1;
    $l$loop_0: while (true) {
      cpos = this.u3d(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.r30_1 = cpos;
      return charToTokenClass(ch);
    }
    this.r30_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).m38 = function (doConsume) {
    var current = this.w3d();
    current = this.u3d(current);
    var len = charSequenceLength(this.t3d()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.t3d(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.t3d(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.r30_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).x38 = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.m38(doConsume) : $super.m38.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).n38 = function (isLenient) {
    var token = this.y36();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.b37();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.a37();
    }
    var string = tmp;
    this.t30_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).z3d = function () {
    this.t30_1 = null;
  };
  protoOf(AbstractJsonLexer).p1a = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.t3d();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).a37 = function () {
    if (!(this.t30_1 == null)) {
      return takePeeked(this);
    }
    return this.q38();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.u3d(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.t35('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.s3d(lastPosition, currentPosition);
          currentPosition = this.u3d(currentPosition);
          if (currentPosition === -1) {
            this.t35('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.p1a(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.r30_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).r38 = function () {
    var result = this.b37();
    if (result === 'null' && wasUnquotedString(this)) {
      this.t35("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).b37 = function () {
    if (!(this.t30_1 == null)) {
      return takePeeked(this);
    }
    var current = this.w3d();
    if (current >= charSequenceLength(this.t3d()) || current === -1) {
      this.t35('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.t3d(), current));
    if (token === 1) {
      return this.a37();
    }
    if (!(token === 0)) {
      this.t35('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.t3d(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.t3d(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.t3d())) {
        usedAppend = true;
        this.s3d(this.r30_1, current);
        var eof = this.u3d(current);
        if (eof === -1) {
          this.r30_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.p1a(this.r30_1, current);
    } else {
      tmp = decodedString(this, this.r30_1, current);
    }
    var result = tmp;
    this.r30_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).s3d = function (fromIndex, toIndex) {
    this.u30_1.ac(this.t3d(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).p38 = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.y36();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.b37();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.y36();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.b37();
        else
          this.q38();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.b1(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8)) {
          this.t35('found ] instead of }');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6)) {
          this.t35('found } instead of ]');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.t35('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.d37();
      if (tokenStack.e1() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.t3d()) + "', currentPosition=" + this.r30_1 + ')';
  };
  protoOf(AbstractJsonLexer).o38 = function (key) {
    var processed = this.p1a(0, this.r30_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.s35("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).s35 = function (message, position, hint) {
    throw decodingExceptionOf_0(this, message, position, this.s30_1.h36(), hint, this.t3d());
  };
  protoOf(AbstractJsonLexer).t35 = function (message, position, hint, $super) {
    position = position === VOID ? this.r30_1 : position;
    hint = hint === VOID ? null : hint;
    return $super === VOID ? this.s35(message, position, hint) : $super.s35.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).z38 = function () {
    var current = this.w3d();
    current = this.u3d(current);
    if (current >= charSequenceLength(this.t3d()) || current === -1) {
      this.t35('EOF');
    }
    var tmp;
    if (charSequenceGet(this.t3d(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.t3d())) {
        this.t35('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.t3d()))) {
      var ch = charSequenceGet(this.t3d(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.t35("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current);
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.t35("Unexpected symbol '-' in numeric literal", current);
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.t35("Unexpected symbol '+' in numeric literal", current);
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.t35("Unexpected symbol '-' in numeric literal", current);
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
        this.t35("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current - 1 | 0);
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
        this.t35('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.t35('Expected numeric literal', current);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.t35('EOF');
      }
      if (!(charSequenceGet(this.t3d(), current) === _Char___init__impl__6a9atx(34))) {
        this.t35('Expected closing quotation mark', current);
      }
      current = current + 1 | 0;
    }
    this.r30_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(new Long(-1, 2147483647)) || doubleAccumulator < toNumber(new Long(0, -2147483648))) {
        this.t35('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.t35("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!equalsLong(accumulator, new Long(0, -2147483648))) {
      tmp_0 = negate(accumulator);
    } else {
      this.t35('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).b33 = function () {
    var result = this.z38();
    var next = this.d37();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true && this.r30_1 > 0 ? this.r30_1 - 1 | 0 : this.r30_1;
      var s = this.r30_1 === charSequenceLength(this.t3d()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.t3d(), position));
      var tmp$ret$1 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.t35(tmp$ret$1, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).y38 = function () {
    var current = this.w3d();
    if (current === charSequenceLength(this.t3d())) {
      this.t35('EOF');
    }
    var tmp;
    if (charSequenceGet(this.t3d(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.r30_1 === charSequenceLength(this.t3d())) {
        this.t35('EOF');
      }
      if (!(charSequenceGet(this.t3d(), this.r30_1) === _Char___init__impl__6a9atx(34))) {
        this.t35('Expected closing quotation mark');
      }
      this.r30_1 = this.r30_1 + 1 | 0;
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
      var tmp_0 = CharMappings_getInstance().b3e_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().a3e_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.a3e_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.b3e_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.a3e_1 = charArray(117);
    this.b3e_1 = new Int8Array(126);
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
  protoOf(StringJsonLexerWithComments).d37 = function () {
    var source = this.t3d();
    var cpos = this.w3d();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.r30_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).z36 = function () {
    var current = this.w3d();
    if (current >= this.t3d().length || current === -1)
      return false;
    return this.x3d(charCodeAt(this.t3d(), current));
  };
  protoOf(StringJsonLexerWithComments).k38 = function (expected) {
    var source = this.t3d();
    var current = this.w3d();
    if (current >= source.length || current === -1) {
      this.r30_1 = -1;
      this.y3d(expected);
    }
    var c = charCodeAt(source, current);
    this.r30_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.y3d(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).y36 = function () {
    var source = this.t3d();
    var cpos = this.w3d();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.r30_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).w3d = function () {
    var current = this.r30_1;
    if (current === -1)
      return current;
    var source = this.t3d();
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
            this.r30_1 = source.length;
            this.t35('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.r30_1 = current;
    return current;
  };
  function StringJsonLexer(source, configuration) {
    AbstractJsonLexer.call(this, configuration);
    this.n3e_1 = source;
  }
  protoOf(StringJsonLexer).t3d = function () {
    return this.n3e_1;
  };
  protoOf(StringJsonLexer).u3d = function (position) {
    return position < this.t3d().length ? position : -1;
  };
  protoOf(StringJsonLexer).d37 = function () {
    var source = this.t3d();
    var cpos = this.r30_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.r30_1 = cpos;
      return charToTokenClass(c);
    }
    this.r30_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).z36 = function () {
    var current = this.r30_1;
    if (current === -1)
      return false;
    var source = this.t3d();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.r30_1 = current;
      return this.x3d(c);
    }
    this.r30_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).w3d = function () {
    var current = this.r30_1;
    if (current === -1)
      return current;
    var source = this.t3d();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.r30_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).k38 = function (expected) {
    if (this.r30_1 === -1) {
      this.y3d(expected);
    }
    var source = this.t3d();
    var cpos = this.r30_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.r30_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.y3d(expected);
    }
    this.r30_1 = -1;
    this.y3d(expected);
  };
  protoOf(StringJsonLexer).q38 = function () {
    this.k38(_Char___init__impl__6a9atx(34));
    var current = this.r30_1;
    var closingQuote = indexOf_0(this.t3d(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.b37();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false && this.r30_1 > 0 ? this.r30_1 - 1 | 0 : this.r30_1;
      var s = this.r30_1 === charSequenceLength(this.t3d()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.t3d(), position));
      var tmp$ret$1 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.t35(tmp$ret$1, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.t3d(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.t3d(), this.r30_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.r30_1 = closingQuote + 1 | 0;
    return substring(this.t3d(), current, closingQuote);
  };
  protoOf(StringJsonLexer).s38 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.r30_1;
    try {
      if (!(this.d37() === 6))
        return null;
      var firstKey = this.n38(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.z3d();
      if (!(this.d37() === 5))
        return null;
      return this.n38(isLenient);
    }finally {
      this.r30_1 = positionSnapshot;
      this.z3d();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.y2z_1.f32_1 ? new StringJsonLexer(source, json.y2z_1) : new StringJsonLexerWithComments(source, json.y2z_1);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.a30_1;
  }
  function JsonToStringWriter() {
    this.g30_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).x34 = function (value) {
    this.g30_1.ec(value);
  };
  protoOf(JsonToStringWriter).r34 = function (char) {
    this.g30_1.s(char);
  };
  protoOf(JsonToStringWriter).t34 = function (text) {
    this.g30_1.q(text);
  };
  protoOf(JsonToStringWriter).d35 = function (text) {
    printQuoted(this.g30_1, text);
  };
  protoOf(JsonToStringWriter).h30 = function () {
    this.g30_1.hc();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.g30_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).eq = get_isNullable;
  protoOf(defer$1).nq = get_isInline;
  protoOf(defer$1).pq = get_annotations;
  defineProp(protoOf(JsonException), 'message', function () {
    return this.e();
  });
  protoOf(JsonSerializersModuleValidator).r19 = contextual;
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
