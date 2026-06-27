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
  var protoOf = kotlin_kotlin.$_$.bc;
  var initMetadataForObject = kotlin_kotlin.$_$.hb;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.w2;
  var initMetadataForClass = kotlin_kotlin.$_$.bb;
  var toString = kotlin_kotlin.$_$.ec;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j4;
  var charSequenceLength = kotlin_kotlin.$_$.qa;
  var charSequenceGet = kotlin_kotlin.$_$.pa;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e;
  var equals = kotlin_kotlin.$_$.va;
  var toString_0 = kotlin_kotlin.$_$.dh;
  var Enum = kotlin_kotlin.$_$.sf;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var getKClassFromExpression = kotlin_kotlin.$_$.uc;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v2;
  var THROW_CCE = kotlin_kotlin.$_$.cg;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var isInterface = kotlin_kotlin.$_$.qb;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var initMetadataForInterface = kotlin_kotlin.$_$.fb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.cb;
  var hashCode = kotlin_kotlin.$_$.ab;
  var joinToString = kotlin_kotlin.$_$.c7;
  var KtList = kotlin_kotlin.$_$.j5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.y3;
  var KtMap = kotlin_kotlin.$_$.m5;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var getBooleanHashCode = kotlin_kotlin.$_$.xa;
  var getStringHashCode = kotlin_kotlin.$_$.za;
  var toDouble = kotlin_kotlin.$_$.re;
  var numberRangeToNumber = kotlin_kotlin.$_$.xb;
  var ClosedRange = kotlin_kotlin.$_$.jc;
  var contains = kotlin_kotlin.$_$.nc;
  var convertToInt = kotlin_kotlin.$_$.r9;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.u4;
  var toDoubleOrNull = kotlin_kotlin.$_$.qe;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n4;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.j2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ah;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var toLongOrNull = kotlin_kotlin.$_$.we;
  var toULongOrNull = kotlin_kotlin.$_$.bf;
  var ULong = kotlin_kotlin.$_$.jg;
  var Companion_getInstance = kotlin_kotlin.$_$.u2;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j1;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.oe;
  var KProperty1 = kotlin_kotlin.$_$.ad;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ya;
  var constructCallableReference = kotlin_kotlin.$_$.ta;
  var lazy = kotlin_kotlin.$_$.zg;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var captureStack = kotlin_kotlin.$_$.la;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var defineProp = kotlin_kotlin.$_$.ua;
  var fromInt = kotlin_kotlin.$_$.v9;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.z;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.b1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i1;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.k1;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.q;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.s;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.r1;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.t1;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var charSequenceSubSequence = kotlin_kotlin.$_$.ra;
  var coerceAtLeast = kotlin_kotlin.$_$.kc;
  var coerceAtMost = kotlin_kotlin.$_$.lc;
  var isBlank = kotlin_kotlin.$_$.sd;
  var Collection = kotlin_kotlin.$_$.e5;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var toSet = kotlin_kotlin.$_$.k8;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var singleOrNull = kotlin_kotlin.$_$.x7;
  var emptyMap = kotlin_kotlin.$_$.q6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.p3;
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
  var DeepRecursiveFunction = kotlin_kotlin.$_$.qf;
  var invoke = kotlin_kotlin.$_$.ug;
  var CoroutineImpl = kotlin_kotlin.$_$.h9;
  var DeepRecursiveScope = kotlin_kotlin.$_$.rf;
  var Unit = kotlin_kotlin.$_$.mg;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p8;
  var initMetadataForLambda = kotlin_kotlin.$_$.gb;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.db;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var getKClass = kotlin_kotlin.$_$.vc;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var ensureNotNull = kotlin_kotlin.$_$.tg;
  var substringBefore = kotlin_kotlin.$_$.ke;
  var removeSuffix = kotlin_kotlin.$_$.zd;
  var substringAfter = kotlin_kotlin.$_$.je;
  var contains_0 = kotlin_kotlin.$_$.gd;
  var plus = kotlin_kotlin.$_$.bh;
  var missingFieldExceptionWithNewMessage = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var convertToByte = kotlin_kotlin.$_$.q9;
  var equalsLong = kotlin_kotlin.$_$.u9;
  var convertToShort = kotlin_kotlin.$_$.s9;
  var IllegalArgumentException = kotlin_kotlin.$_$.vf;
  var isFinite = kotlin_kotlin.$_$.wg;
  var isFinite_0 = kotlin_kotlin.$_$.vg;
  var charCodeAt = kotlin_kotlin.$_$.oa;
  var toUInt = kotlin_kotlin.$_$.af;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.a1;
  var toULong = kotlin_kotlin.$_$.cf;
  var toUByte = kotlin_kotlin.$_$.ze;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.r;
  var toUShort = kotlin_kotlin.$_$.df;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.s1;
  var objectCreate = kotlin_kotlin.$_$.ac;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var toString_1 = kotlin_kotlin.$_$.l;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.t2;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.s2;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.v2;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var setOf = kotlin_kotlin.$_$.w7;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.k;
  var numberToChar = kotlin_kotlin.$_$.yb;
  var equals_0 = kotlin_kotlin.$_$.nd;
  var toByte = kotlin_kotlin.$_$.cc;
  var startsWith = kotlin_kotlin.$_$.fe;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var single = kotlin_kotlin.$_$.ce;
  var Char = kotlin_kotlin.$_$.nf;
  var emptySet = kotlin_kotlin.$_$.r6;
  var plus_0 = kotlin_kotlin.$_$.o7;
  var toInt = kotlin_kotlin.$_$.ue;
  var toList = kotlin_kotlin.$_$.e8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.k9;
  var NamedValueEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var enumEntries = kotlin_kotlin.$_$.j9;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var toNumber = kotlin_kotlin.$_$.ga;
  var last = kotlin_kotlin.$_$.i7;
  var removeLast = kotlin_kotlin.$_$.t7;
  var lastIndexOf = kotlin_kotlin.$_$.wd;
  var Long = kotlin_kotlin.$_$.xf;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.g;
  var multiply = kotlin_kotlin.$_$.aa;
  var add = kotlin_kotlin.$_$.m9;
  var subtract = kotlin_kotlin.$_$.fa;
  var compare = kotlin_kotlin.$_$.p9;
  var numberToLong = kotlin_kotlin.$_$.ca;
  var negate = kotlin_kotlin.$_$.ba;
  var charArray = kotlin_kotlin.$_$.na;
  var indexOf = kotlin_kotlin.$_$.qd;
  var indexOf_0 = kotlin_kotlin.$_$.rd;
  var substring = kotlin_kotlin.$_$.me;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.x3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.g3;
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
    this.f30_1 = configuration;
    this.g30_1 = serializersModule;
    this.h30_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).ys = function () {
    return this.g30_1;
  };
  protoOf(Json).i30 = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.o30();
    }
  };
  protoOf(Json).j30 = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.hp(), null);
    var result = input.is(deserializer);
    lexer.c31();
    return result;
  };
  protoOf(Json).k30 = function (serializer, value) {
    return writeJson(this, value, serializer);
  };
  protoOf(Json).l30 = function (deserializer, element) {
    return readJson(this, element, deserializer);
  };
  protoOf(Json).m30 = function (string) {
    return this.j30(JsonElementSerializer_getInstance(), string);
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.w31();
    return new JsonImpl(conf, builder.u31_1);
  }
  function JsonBuilder(json) {
    this.d31_1 = json.f30_1.x31_1;
    this.e31_1 = json.f30_1.c32_1;
    this.f31_1 = json.f30_1.y31_1;
    this.g31_1 = json.f30_1.z31_1;
    this.h31_1 = json.f30_1.b32_1;
    this.i31_1 = json.f30_1.d32_1;
    this.j31_1 = json.f30_1.e32_1;
    this.k31_1 = json.f30_1.g32_1;
    this.l31_1 = json.f30_1.n32_1;
    this.m31_1 = json.f30_1.i32_1;
    this.n31_1 = json.f30_1.j32_1;
    this.o31_1 = json.f30_1.k32_1;
    this.p31_1 = json.f30_1.l32_1;
    this.q31_1 = json.f30_1.m32_1;
    this.r31_1 = json.f30_1.h32_1;
    this.s31_1 = json.f30_1.a32_1;
    this.t31_1 = json.f30_1.f32_1;
    this.u31_1 = json.ys();
    this.v31_1 = json.f30_1.o32_1;
  }
  protoOf(JsonBuilder).w31 = function () {
    if (this.t31_1) {
      // Inline function 'kotlin.require' call
      if (!(this.k31_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.l31_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.h31_1) {
      // Inline function 'kotlin.require' call
      if (!(this.i31_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.i31_1 === '    ')) {
      var tmp0 = this.i31_1;
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.i31_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.d31_1, this.f31_1, this.g31_1, this.s31_1, this.h31_1, this.e31_1, this.i31_1, this.j31_1, this.t31_1, this.k31_1, this.r31_1, this.m31_1, this.n31_1, this.o31_1, this.p31_1, this.q31_1, this.l31_1, this.v31_1);
  };
  function validateConfiguration($this) {
    if (equals($this.ys(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.f30_1);
    $this.ys().k19(collector);
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
    this.x31_1 = encodeDefaults;
    this.y31_1 = ignoreUnknownKeys;
    this.z31_1 = isLenient;
    this.a32_1 = allowStructuredMapKeys;
    this.b32_1 = prettyPrint;
    this.c32_1 = explicitNulls;
    this.d32_1 = prettyPrintIndent;
    this.e32_1 = coerceInputValues;
    this.f32_1 = useArrayPolymorphism;
    this.g32_1 = classDiscriminator;
    this.h32_1 = allowSpecialFloatingPointValues;
    this.i32_1 = useAlternativeNames;
    this.j32_1 = namingStrategy;
    this.k32_1 = decodeEnumsCaseInsensitive;
    this.l32_1 = allowTrailingComma;
    this.m32_1 = allowComments;
    this.n32_1 = classDiscriminatorMode;
    this.o32_1 = exceptionsWithDebugInfo;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.x31_1 + ', ignoreUnknownKeys=' + this.y31_1 + ', isLenient=' + this.z31_1 + ', ' + ('allowStructuredMapKeys=' + this.a32_1 + ', prettyPrint=' + this.b32_1 + ', explicitNulls=' + this.c32_1 + ', ') + ("prettyPrintIndent='" + this.d32_1 + "', coerceInputValues=" + this.e32_1 + ', useArrayPolymorphism=' + this.f32_1 + ', ') + ("classDiscriminator='" + this.g32_1 + "', allowSpecialFloatingPointValues=" + this.h32_1 + ', ') + ('useAlternativeNames=' + this.i32_1 + ', namingStrategy=' + toString_0(this.j32_1) + ', decodeEnumsCaseInsensitive=' + this.k32_1 + ', ') + ('allowTrailingComma=' + this.l32_1 + ', allowComments=' + this.m32_1 + ', classDiscriminatorMode=' + this.n32_1.toString() + ', exceptionsWithDebugInfo=' + this.o32_1 + ')');
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
    this.p32_1 = baseClass;
    this.q32_1 = buildSerialDescriptor('JsonContentPolymorphicSerializer<' + this.p32_1.o() + '>', SEALED_getInstance(), []);
  }
  protoOf(JsonContentPolymorphicSerializer).hp = function () {
    return this.q32_1;
  };
  protoOf(JsonContentPolymorphicSerializer).zp = function (encoder, value) {
    var tmp0_elvis_lhs = encoder.ys().iu(this.p32_1, value);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? serializerOrNull(getKClassFromExpression(value)) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throwSubtypeNotRegistered(this, getKClassFromExpression(value), this.p32_1);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var actualSerializer = tmp;
    (isInterface(actualSerializer, KSerializer) ? actualSerializer : THROW_CCE()).ip(encoder, value);
  };
  protoOf(JsonContentPolymorphicSerializer).ip = function (encoder, value) {
    return this.zp(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(JsonContentPolymorphicSerializer).jp = function (decoder) {
    var input = asJsonDecoder(decoder);
    var tree = input.r32();
    var tmp = this.s32(tree);
    var actualSerializer = isInterface(tmp, KSerializer) ? tmp : THROW_CCE();
    return input.t32().l30(actualSerializer, tree);
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
    return this.u32_1.l2(element);
  };
  protoOf(JsonArray).l2 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.x32(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).y32 = function (element) {
    return this.u32_1.m2(element);
  };
  protoOf(JsonArray).m2 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.y32(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).n2 = function () {
    return this.u32_1.n2();
  };
  protoOf(JsonArray).f1 = function (index) {
    return this.u32_1.f1(index);
  };
  protoOf(JsonArray).o2 = function (fromIndex, toIndex) {
    return this.u32_1.o2(fromIndex, toIndex);
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
  protoOf(JsonObject).j2e = function (key) {
    return this.z32_1.q2(key);
  };
  protoOf(JsonObject).q2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.j2e((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).a33 = function (value) {
    return this.z32_1.r2(value);
  };
  protoOf(JsonObject).r2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.a33(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonObject).w2e = function (key) {
    return this.z32_1.s2(key);
  };
  protoOf(JsonObject).s2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.w2e((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).asJsReadonlyMapView = function () {
    return this.z32_1.asJsReadonlyMapView();
  };
  protoOf(JsonObject).e1 = function () {
    return this.z32_1.e1();
  };
  protoOf(JsonObject).t2 = function () {
    return this.z32_1.t2();
  };
  protoOf(JsonObject).u2 = function () {
    return this.z32_1.u2();
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
  protoOf(JsonNull).z10 = function (typeParamsSerializers) {
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
      if (!this.g33_1.rq()) {
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
    return this.k33_1.v2(key, element);
  };
  protoOf(JsonObjectBuilder).w31 = function () {
    return new JsonObject(this.k33_1);
  };
  function JsonArrayBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m33_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonArrayBuilder).n33 = function (element) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.m33_1.b1(element);
    return true;
  };
  protoOf(JsonArrayBuilder).w31 = function () {
    return new JsonArray(this.m33_1);
  };
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.vp('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.vp('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.vp('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.vp('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.vp('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
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
  protoOf(JsonElementSerializer).hp = function () {
    return this.t33_1;
  };
  protoOf(JsonElementSerializer).u33 = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.bu(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.bu(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.bu(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(JsonElementSerializer).ip = function (encoder, value) {
    return this.u33(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).jp = function (decoder) {
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
    this.v33_1 = ListSerializer(JsonElementSerializer_getInstance()).hp();
    this.w33_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).pq = function () {
    return this.w33_1;
  };
  protoOf(JsonArrayDescriptor).uq = function (index) {
    return this.v33_1.uq(index);
  };
  protoOf(JsonArrayDescriptor).vq = function (name) {
    return this.v33_1.vq(name);
  };
  protoOf(JsonArrayDescriptor).wq = function (index) {
    return this.v33_1.wq(index);
  };
  protoOf(JsonArrayDescriptor).xq = function (index) {
    return this.v33_1.xq(index);
  };
  protoOf(JsonArrayDescriptor).yq = function (index) {
    return this.v33_1.yq(index);
  };
  protoOf(JsonArrayDescriptor).qq = function () {
    return this.v33_1.qq();
  };
  protoOf(JsonArrayDescriptor).iq = function () {
    return this.v33_1.iq();
  };
  protoOf(JsonArrayDescriptor).rq = function () {
    return this.v33_1.rq();
  };
  protoOf(JsonArrayDescriptor).sq = function () {
    return this.v33_1.sq();
  };
  protoOf(JsonArrayDescriptor).tq = function () {
    return this.v33_1.tq();
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
  protoOf(JsonArraySerializer).hp = function () {
    return this.s33_1;
  };
  protoOf(JsonArraySerializer).x33 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).ip(encoder, value);
  };
  protoOf(JsonArraySerializer).ip = function (encoder, value) {
    return this.x33(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).jp = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).jp(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.y33_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).hp();
    this.z33_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).pq = function () {
    return this.z33_1;
  };
  protoOf(JsonObjectDescriptor).uq = function (index) {
    return this.y33_1.uq(index);
  };
  protoOf(JsonObjectDescriptor).vq = function (name) {
    return this.y33_1.vq(name);
  };
  protoOf(JsonObjectDescriptor).wq = function (index) {
    return this.y33_1.wq(index);
  };
  protoOf(JsonObjectDescriptor).xq = function (index) {
    return this.y33_1.xq(index);
  };
  protoOf(JsonObjectDescriptor).yq = function (index) {
    return this.y33_1.yq(index);
  };
  protoOf(JsonObjectDescriptor).qq = function () {
    return this.y33_1.qq();
  };
  protoOf(JsonObjectDescriptor).iq = function () {
    return this.y33_1.iq();
  };
  protoOf(JsonObjectDescriptor).rq = function () {
    return this.y33_1.rq();
  };
  protoOf(JsonObjectDescriptor).sq = function () {
    return this.y33_1.sq();
  };
  protoOf(JsonObjectDescriptor).tq = function () {
    return this.y33_1.tq();
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
  protoOf(JsonObjectSerializer).hp = function () {
    return this.r33_1;
  };
  protoOf(JsonObjectSerializer).a34 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).ip(encoder, value);
  };
  protoOf(JsonObjectSerializer).ip = function (encoder, value) {
    return this.a34(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).jp = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).jp(decoder));
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
  protoOf(JsonPrimitiveSerializer).hp = function () {
    return this.o33_1;
  };
  protoOf(JsonPrimitiveSerializer).b34 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.bu(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.bu(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).ip = function (encoder, value) {
    return this.b34(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).jp = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.r32();
    if (!(result instanceof JsonPrimitive)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.t32().f30_1.o32_1) {
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
  protoOf(JsonNullSerializer).hp = function () {
    return this.p33_1;
  };
  protoOf(JsonNullSerializer).c34 = function (encoder, value) {
    verify(encoder);
    encoder.et();
  };
  protoOf(JsonNullSerializer).ip = function (encoder, value) {
    return this.c34(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).jp = function (decoder) {
    verify_0(decoder);
    if (decoder.ur()) {
      throw decodingExceptionOf("Expected 'null' literal");
    }
    decoder.vr();
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
  protoOf(JsonLiteralSerializer).hp = function () {
    return this.q33_1;
  };
  protoOf(JsonLiteralSerializer).d34 = function (encoder, value) {
    verify(encoder);
    if (value.f33_1) {
      return encoder.nt(value.h33_1);
    }
    if (!(value.g33_1 == null)) {
      return encoder.pt(value.g33_1).nt(value.h33_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.h33_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.jt(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.h33_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).ro_1;
      var tmp_1 = encoder.pt(serializer_0(Companion_getInstance()).hp());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$4 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.jt(tmp$ret$4);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.h33_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.lt(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.h33_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.ft(tmp3_safe_receiver);
    }
    encoder.nt(value.h33_1);
  };
  protoOf(JsonLiteralSerializer).ip = function (encoder, value) {
    return this.d34(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).jp = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.r32();
    if (!(result instanceof JsonLiteral)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.t32().f30_1.o32_1) {
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
  protoOf(defer$1).pq = function () {
    return _get_original__l7ku1m(this).pq();
  };
  protoOf(defer$1).qq = function () {
    return _get_original__l7ku1m(this).qq();
  };
  protoOf(defer$1).sq = function () {
    return _get_original__l7ku1m(this).sq();
  };
  protoOf(defer$1).uq = function (index) {
    return _get_original__l7ku1m(this).uq(index);
  };
  protoOf(defer$1).vq = function (name) {
    return _get_original__l7ku1m(this).vq(name);
  };
  protoOf(defer$1).wq = function (index) {
    return _get_original__l7ku1m(this).wq(index);
  };
  protoOf(defer$1).xq = function (index) {
    return _get_original__l7ku1m(this).xq(index);
  };
  protoOf(defer$1).yq = function (index) {
    return _get_original__l7ku1m(this).yq(index);
  };
  function JsonEncoder() {
  }
  function JsonDecodingException(fullMessage, shortMessage, offset, path, input, hint) {
    JsonException.call(this, fullMessage);
    captureStack(this, JsonDecodingException);
    this.h34_1 = shortMessage;
    this.i34_1 = offset;
    this.j34_1 = path;
    this.k34_1 = input;
    this.l34_1 = hint;
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
    this.j33_1 = message;
    delete this.message;
  }
  protoOf(JsonException).e = function () {
    return this.j33_1;
  };
  function JsonEncodingException(shortMessage, classSerialName, hint) {
    classSerialName = classSerialName === VOID ? null : classSerialName;
    hint = hint === VOID ? null : hint;
    JsonException.call(this, formatEncodingException(shortMessage, hint));
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
    return json.f30_1.b32_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
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
        this.z34(this.t35_1.f30_1.d32_1);
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
    $this.w35_1 = (!descriptor.yq(index) && descriptor.xq(index).iq());
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
    this.v35_1.ry(index);
  };
  protoOf(JsonElementMarker).y35 = function () {
    return this.v35_1.sy();
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
    _this__u8e3s4.z35('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.y30_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.a36(nonFiniteFpMessage(result, null), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function InvalidFloatingPointEncoded(value, key) {
    key = key === VOID ? null : key;
    return new JsonEncodingException(nonFiniteFpMessage(value, key), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.pq() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.qq().toString() + "'"), keyDescriptor.pq(), "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function access$nonFiniteFpMessage$tJsonExceptionsKt(value, key) {
    return nonFiniteFpMessage(value, key);
  }
  function decodingExceptionOf_0(_this__u8e3s4, shortMessage, offset, path, hint, input) {
    // Inline function 'kotlinx.serialization.json.internal.ifDebugInput' call
    var tmp;
    if (_this__u8e3s4.x30_1.o32_1) {
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
    if (json.f30_1.y31_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.tq();
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
    var index = _this__u8e3s4.vq(name);
    if (!(index === -3))
      return index;
    if (!json.f30_1.i32_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.pq() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.uq(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.qq(), CLASS_getInstance()) ? json.f30_1.j32_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.c36(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function getJsonEncodedNames(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? jsonCachedSerialNames(_this__u8e3s4) : toSet(serializationNamesIndices(_this__u8e3s4, json, strategy));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.f30_1.k32_1 && equals(descriptor.qq(), ENUM_getInstance());
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
    return tmp.c36(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.sq();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.wq(i);
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
          tmp_0 = _this__u8e3s4.uq(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.e36(_this__u8e3s4, i, _this__u8e3s4.uq(i));
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
      var tmp_0 = $this_serializationNamesIndices.sq();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.uq(tmp_2);
        var name = $strategy.e36($this_serializationNamesIndices, tmp_2, baseName);
        if (!trackingSet.b1(name))
          throw new JsonEncodingException("The transformed name '" + name + "' for property " + baseName + ' already exists ' + ('in ' + toString($this_serializationNamesIndices)), $this_serializationNamesIndices.pq());
        tmp_1[tmp_2] = name;
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.qq(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).q2(name)) {
      throw decodingExceptionOf("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.uq(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.uq(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
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
    var newSize = imul($this.i36_1, 2);
    $this.g36_1 = copyOf($this.g36_1, newSize);
    var tmp = 0;
    var tmp_0 = new Int32Array(newSize);
    while (tmp < newSize) {
      tmp_0[tmp] = -1;
      tmp = tmp + 1 | 0;
    }
    var newIndices = tmp_0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.h36_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
    $this.h36_1 = newIndices;
  }
  function JsonPath(configuration) {
    this.f36_1 = configuration;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.g36_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.h36_1 = tmp_2;
    this.i36_1 = -1;
  }
  protoOf(JsonPath).j36 = function (sd) {
    this.i36_1 = this.i36_1 + 1 | 0;
    var depth = this.i36_1;
    if (depth === this.g36_1.length) {
      resize(this);
    }
    this.g36_1[depth] = sd;
  };
  protoOf(JsonPath).k36 = function (index) {
    this.h36_1[this.i36_1] = index;
  };
  protoOf(JsonPath).l36 = function (key) {
    var tmp;
    if (!(this.h36_1[this.i36_1] === -2)) {
      this.i36_1 = this.i36_1 + 1 | 0;
      tmp = this.i36_1 === this.g36_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.g36_1[this.i36_1] = this.f36_1.o32_1 ? key : RedactedKey_instance;
    this.h36_1[this.i36_1] = -2;
  };
  protoOf(JsonPath).m36 = function () {
    if (this.h36_1[this.i36_1] === -2) {
      this.g36_1[this.i36_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).n36 = function () {
    var depth = this.i36_1;
    if (this.h36_1[depth] === -2) {
      this.h36_1[depth] = -1;
      this.i36_1 = this.i36_1 - 1 | 0;
    }
    if (!(this.i36_1 === -1)) {
      this.i36_1 = this.i36_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).o36 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q('$');
    // Inline function 'kotlin.repeat' call
    var times = this.i36_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.g36_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.qq(), LIST_getInstance())) {
            if (!(this.h36_1[index] === -1)) {
              this_0.q('[');
              this_0.hc(this.h36_1[index]);
              this_0.q(']');
            }
          } else {
            var idx = this.h36_1[index];
            if (idx >= 0) {
              this_0.q('.');
              this_0.q(element.uq(idx));
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
    return this.o36();
  };
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.qq();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.p36_1)
      return Unit_instance;
    if (!$this.q36_1)
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
    this.p36_1 = configuration.f32_1;
    this.q36_1 = !configuration.n32_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).t19 = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).w19 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.hp();
    checkKind(this, descriptor, actualClass);
  };
  protoOf(JsonSerializersModuleValidator).x19 = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).y19 = function (baseClass, defaultDeserializerProvider) {
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().e1();
    var tmp$ret$0 = Array(size);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.bu(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.a37_1.e37(6);
    if ($this.a37_1.f37() === 4) {
      $this.a37_1.a36('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.a37_1.g37()) {
      var key = $this.b37_1 ? $this.a37_1.i37() : $this.a37_1.h37();
      $this.a37_1.e37(5);
      var element = $this.j37();
      // Inline function 'kotlin.collections.set' call
      result.v2(key, element);
      lastToken = $this.a37_1.k37();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.a37_1.a36('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.a37_1.e37(7);
    } else if (lastToken === 4) {
      if (!$this.c37_1) {
        invalidTrailingComma($this.a37_1);
      }
      $this.a37_1.e37(7);
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
    var lastToken = $this.a37_1.k37();
    if ($this.a37_1.f37() === 4) {
      $this.a37_1.a36('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.a37_1.g37()) {
      var element = $this.j37();
      result.b1(element);
      lastToken = $this.a37_1.k37();
      if (!(lastToken === 4)) {
        var tmp0 = $this.a37_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.y30_1;
        if (!condition) {
          var tmp$ret$2 = 'Expected end of the array or comma';
          tmp0.a36(tmp$ret$2, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.a37_1.e37(9);
    } else if (lastToken === 4) {
      if (!$this.c37_1) {
        invalidTrailingComma($this.a37_1, 'array');
      }
      $this.a37_1.e37(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.b37_1 || !isString) {
      tmp = $this.a37_1.i37();
    } else {
      tmp = $this.a37_1.h37();
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
    this.h38_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).l38 = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.m38($this$DeepRecursiveFunction, it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.l38(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            var tmp0_subject = this.h38_1.a37_1.f37();
            if (tmp0_subject === 1) {
              this.k38_1 = readValue(this.h38_1, true);
              this.n8_1 = 2;
              continue $sm;
            } else {
              if (tmp0_subject === 0) {
                this.k38_1 = readValue(this.h38_1, false);
                this.n8_1 = 2;
                continue $sm;
              } else {
                if (tmp0_subject === 6) {
                  this.n8_1 = 1;
                  suspendResult = readObject_0(this.h38_1, this.i38_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject === 8) {
                    this.k38_1 = readArray(this.h38_1);
                    this.n8_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.h38_1.a37_1.a36("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.k38_1 = suspendResult;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            return this.k38_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).m38 = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.h38_1, completion);
    i.i38_1 = $this$DeepRecursiveFunction;
    i.j38_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$DeepRecursiveFunction, it, $completion) {
      return i.l38($this$DeepRecursiveFunction, it, $completion);
    }, 2);
  }
  function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t37_1 = _this__u8e3s4;
    this.u37_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 5;
            this.w37_1 = this.t37_1;
            this.x37_1 = this.w37_1.a37_1.e37(6);
            if (this.w37_1.a37_1.f37() === 4) {
              this.w37_1.a37_1.a36('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.v37_1 = LinkedHashMap_init_$Create$();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!this.w37_1.a37_1.g37()) {
              this.n8_1 = 4;
              continue $sm;
            }

            this.y37_1 = this.w37_1.b37_1 ? this.w37_1.a37_1.i37() : this.w37_1.a37_1.h37();
            this.w37_1.a37_1.e37(5);
            this.n8_1 = 2;
            suspendResult = this.u37_1.zm(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.v37_1;
            var key = this.y37_1;
            tmp0.v2(key, element);
            this.x37_1 = this.w37_1.a37_1.k37();
            var tmp0_subject = this.x37_1;
            if (tmp0_subject === 4) {
              this.n8_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.n8_1 = 4;
                continue $sm;
              } else {
                this.w37_1.a37_1.a36('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.n8_1 = 1;
            continue $sm;
          case 4:
            if (this.x37_1 === 6) {
              this.w37_1.a37_1.e37(7);
            } else if (this.x37_1 === 4) {
              if (!this.w37_1.c37_1) {
                invalidTrailingComma(this.w37_1.a37_1);
              }
              this.w37_1.a37_1.e37(7);
            }

            return new JsonObject(this.v37_1);
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
    this.a37_1 = lexer;
    this.b37_1 = configuration.z31_1;
    this.c37_1 = configuration.l32_1;
    this.d37_1 = 0;
  }
  protoOf(JsonTreeReader).j37 = function () {
    var token = this.a37_1.f37();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.d37_1 = this.d37_1 + 1 | 0;
      if (this.d37_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.d37_1 = this.d37_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.a37_1.a36('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.tq().t();
    while (_iterator__ex2g4s.u()) {
      var annotation = _iterator__ex2g4s.v();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.n38_1;
    }
    return json.f30_1.g32_1;
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
    if (getJsonEncodedNames(actualSerializer.hp(), _this__u8e3s4).j2(classDiscriminator)) {
      var baseName = serializer.hp().pq();
      var actualName = actualSerializer.hp().pq();
      var text = _this__u8e3s4.f30_1.n32_1.equals(ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance()) && baseName === actualName ? 'in ALL_JSON_OBJECTS class discriminator mode' : "as base class '" + baseName + "'";
      var tmp0_shortMessage = "Class '" + actualName + "' cannot be serialized " + text + ' because' + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'.");
      var tmp1_hint = 'You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.';
      throw new JsonEncodingException(tmp0_shortMessage, actualName, tmp1_hint);
    }
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.b36_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).o38 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.b36_1;
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
  protoOf(DescriptorSchemaCache).c36 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.p38(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.o38(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).p38 = function (descriptor, key) {
    var tmp0_safe_receiver = this.b36_1.s2(descriptor);
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
    this.q38_1 = discriminatorToSkip;
  }
  function trySkip($this, $receiver, unknownKey) {
    if ($receiver == null)
      return false;
    if ($receiver.q38_1 === unknownKey) {
      $receiver.q38_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.at(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.r30_1.f37() === 4) {
      $this.r30_1.a36('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.t30_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.t30_1 === -1)) {
        hasComma = $this.r30_1.s38();
      }
    } else {
      $this.r30_1.r38(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.r30_1.g37()) {
      if (decodingKey) {
        if ($this.t30_1 === -1) {
          var tmp0 = $this.r30_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.y30_1;
          if (!condition) {
            var tmp$ret$1 = 'Unexpected leading comma';
            tmp0.a36(tmp$ret$1, position);
          }
        } else {
          var tmp0_0 = $this.r30_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp0_0.y30_1;
          if (!condition_0) {
            var tmp$ret$3 = 'Expected comma after the key-value pair';
            tmp0_0.a36(tmp$ret$3, position_0);
          }
        }
      }
      $this.t30_1 = $this.t30_1 + 1 | 0;
      tmp = $this.t30_1;
    } else {
      if (hasComma && !$this.p30_1.f30_1.l32_1) {
        invalidTrailingComma($this.r30_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.p30_1;
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.yq(index);
      var elementDescriptor = descriptor.xq(index);
      var tmp;
      if (isOptional && !elementDescriptor.iq()) {
        tmp = $this.r30_1.t38(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.qq(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.iq()) {
          tmp_0 = $this.r30_1.t38(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.r30_1.u38($this.v30_1.z31_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.f30_1.c32_1 && elementDescriptor.iq();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.r30_1.h37();
          tmp$ret$0 = true;
          break $l$block_2;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.r30_1.s38();
    while ($this.r30_1.g37()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.r30_1.r38(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.p30_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.v30_1.e32_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.r30_1.s38();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.w30_1;
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
    if (hasComma && !$this.p30_1.f30_1.l32_1) {
      invalidTrailingComma($this.r30_1);
    }
    var tmp1_safe_receiver = $this.w30_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y35();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.p30_1) || trySkip($this, $this.u30_1, key)) {
      $this.r30_1.w38($this.v30_1.z31_1);
    } else {
      $this.r30_1.z30_1.n36();
      $this.r30_1.v38(key);
    }
    return $this.r30_1.s38();
  }
  function decodeListIndex($this) {
    var hasComma = $this.r30_1.s38();
    var tmp;
    if ($this.r30_1.g37()) {
      if (!($this.t30_1 === -1) && !hasComma) {
        $this.r30_1.a36('Expected end of the array or comma');
      }
      $this.t30_1 = $this.t30_1 + 1 | 0;
      tmp = $this.t30_1;
    } else {
      if (hasComma && !$this.p30_1.f30_1.l32_1) {
        invalidTrailingComma($this.r30_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.v30_1.z31_1) {
      tmp = $this.r30_1.y38();
    } else {
      tmp = $this.r30_1.x38();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.p30_1 = json;
    this.q30_1 = mode;
    this.r30_1 = lexer;
    this.s30_1 = this.p30_1.ys();
    this.t30_1 = -1;
    this.u30_1 = discriminatorHolder;
    this.v30_1 = this.p30_1.f30_1;
    this.w30_1 = this.v30_1.c32_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).t32 = function () {
    return this.p30_1;
  };
  protoOf(StreamingJsonDecoder).ys = function () {
    return this.s30_1;
  };
  protoOf(StreamingJsonDecoder).r32 = function () {
    return (new JsonTreeReader(this.p30_1.f30_1, this.r30_1)).j37();
  };
  protoOf(StreamingJsonDecoder).is = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.p30_1.f30_1.f32_1;
      }
      if (tmp) {
        return deserializer.jp(this);
      }
      var discriminator = classDiscriminator(deserializer.hp(), this.p30_1);
      var tmp0_elvis_lhs = this.r30_1.z38(discriminator, this.v30_1.z31_1);
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
            tmp_1 = this.t32().f30_1.f32_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.jp(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.hp(), this.t32());
          var tmp2_0 = this.r32();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.hp().pq();
          if (!(tmp2_0 instanceof JsonObject)) {
            var tmp2_1 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2_0).o() + ' as the serialized body of ' + serialName;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path = this.r30_1.z30_1.o36();
            var tmp_2;
            if (this.t32().f30_1.o32_1) {
              var tmp$ret$6 = toString(tmp2_0);
              tmp_2 = toString(minify(tmp$ret$6));
            } else {
              tmp_2 = null;
            }
            var inputValue = tmp_2;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path, null, inputValue), tmp2_1, -1, path, inputValue, null);
          }
          var jsonTree = tmp2_0;
          var tmp0_safe_receiver = jsonTree.w2e(discriminator_0);
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
              if (this.t32().f30_1.o32_1) {
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
          tmp$ret$0 = readPolymorphicJson(this.t32(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p_0) {
        var tmp_8;
        if ($p_0 instanceof SerializationException) {
          var it_0 = $p_0;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.r30_1.a36(message, VOID, hint);
        } else {
          throw $p_0;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.u30_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.jp(this);
    } catch ($p_1) {
      if ($p_1 instanceof MissingFieldException) {
        var e = $p_1;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw missingFieldExceptionWithNewMessage(e, plus(e.message, ' at path: ') + this.r30_1.z30_1.o36());
      } else {
        throw $p_1;
      }
    }
  };
  protoOf(StreamingJsonDecoder).js = function (descriptor) {
    var newMode = switchMode(this.p30_1, descriptor);
    this.r30_1.z30_1.j36(descriptor);
    this.r30_1.r38(newMode.c39_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.a1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.p30_1, newMode, this.r30_1, descriptor, this.u30_1);
        break;
      default:
        var tmp_0;
        if (this.q30_1.equals(newMode) && this.p30_1.f30_1.c32_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.p30_1, newMode, this.r30_1, descriptor, this.u30_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).ks = function (descriptor) {
    if (descriptor.sq() === 0 && ignoreUnknownKeys(descriptor, this.p30_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.r30_1.s38() && !this.p30_1.f30_1.l32_1) {
      invalidTrailingComma(this.r30_1, '');
    }
    this.r30_1.r38(this.q30_1.d39_1);
    this.r30_1.z30_1.n36();
  };
  protoOf(StreamingJsonDecoder).ur = function () {
    var tmp;
    var tmp0_safe_receiver = this.w30_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w35_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.r30_1.e39();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).vr = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).vs = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.q30_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.r30_1.z30_1.m36();
    }
    var value = protoOf(AbstractDecoder).vs.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.r30_1.z30_1.l36(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).at = function (descriptor) {
    var index;
    switch (this.q30_1.a1_1) {
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
    if (!this.q30_1.equals(WriteMode_MAP_getInstance())) {
      this.r30_1.z30_1.k36(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).wr = function () {
    return this.r30_1.f39();
  };
  protoOf(StreamingJsonDecoder).xr = function () {
    var value = this.r30_1.g39();
    if (!equalsLong(value, fromInt(convertToByte(value)))) {
      this.r30_1.a36("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  };
  protoOf(StreamingJsonDecoder).yr = function () {
    var value = this.r30_1.g39();
    if (!equalsLong(value, fromInt(convertToShort(value)))) {
      this.r30_1.a36("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  };
  protoOf(StreamingJsonDecoder).zr = function () {
    var value = this.r30_1.g39();
    if (!equalsLong(value, fromInt(convertToInt(value)))) {
      this.r30_1.a36("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  };
  protoOf(StreamingJsonDecoder).as = function () {
    return this.r30_1.g39();
  };
  protoOf(StreamingJsonDecoder).bs = function () {
    var tmp0 = this.r30_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.i37();
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
    var specialFp = this.p30_1.f30_1.h32_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.r30_1, result);
  };
  protoOf(StreamingJsonDecoder).cs = function () {
    var tmp0 = this.r30_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.i37();
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
    var specialFp = this.p30_1.f30_1.h32_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.r30_1, result);
  };
  protoOf(StreamingJsonDecoder).ds = function () {
    var string = this.r30_1.i37();
    if (!(string.length === 1)) {
      this.r30_1.a36("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  };
  protoOf(StreamingJsonDecoder).es = function () {
    var tmp;
    if (this.v30_1.z31_1) {
      tmp = this.r30_1.y38();
    } else {
      tmp = this.r30_1.h37();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).gs = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.r30_1, this.p30_1) : protoOf(AbstractDecoder).gs.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).fs = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.p30_1, this.es(), ' at path ' + this.r30_1.z30_1.o36());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.h39_1 = lexer;
    this.i39_1 = json.ys();
  }
  protoOf(JsonDecoderForUnsignedTypes).ys = function () {
    return this.i39_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).at = function (descriptor) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).zr = function () {
    var tmp0 = this.h39_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.i37();
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
  protoOf(JsonDecoderForUnsignedTypes).as = function () {
    var tmp0 = this.h39_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.i37();
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
  protoOf(JsonDecoderForUnsignedTypes).xr = function () {
    var tmp0 = this.h39_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.i37();
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
  protoOf(JsonDecoderForUnsignedTypes).yr = function () {
    var tmp0 = this.h39_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.i37();
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
    $this.r36_1.u34();
    $this.nt(discriminator);
    $this.r36_1.x34(_Char___init__impl__6a9atx(58));
    $this.r36_1.w34();
    $this.nt(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.r36_1 = composer;
    this.s36_1 = json;
    this.t36_1 = mode;
    this.u36_1 = modeReuseCache;
    this.v36_1 = this.s36_1.ys();
    this.w36_1 = this.s36_1.f30_1;
    this.x36_1 = false;
    this.y36_1 = null;
    this.z36_1 = null;
    var i = this.t36_1.a1_1;
    if (!(this.u36_1 == null)) {
      if (!(this.u36_1[i] === null) || !(this.u36_1[i] === this)) {
        this.u36_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).t32 = function () {
    return this.s36_1;
  };
  protoOf(StreamingJsonEncoder).ys = function () {
    return this.v36_1;
  };
  protoOf(StreamingJsonEncoder).f34 = function (element) {
    var tmp;
    if (!(this.y36_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.z36_1, element);
    }
    this.bu(JsonElementSerializer_getInstance(), element);
  };
  protoOf(StreamingJsonEncoder).gu = function (descriptor, index) {
    return this.w36_1.x31_1;
  };
  protoOf(StreamingJsonEncoder).bu = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.t32().f30_1.f32_1) {
        serializer.ip(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.t32().f30_1.n32_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.t32().f30_1.n32_1.a1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.hp().qq();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.hp(), this.t32()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.hp()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
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
        access$checkEncodingConflicts$tPolymorphicKt(this.t32(), serializer, actualSerializer, baseClassDiscriminator);
        checkKind_0(actualSerializer.hp().qq());
        var serialName = actualSerializer.hp().pq();
        this.y36_1 = baseClassDiscriminator;
        this.z36_1 = serialName;
      }
      actualSerializer.ip(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).js = function (descriptor) {
    var newMode = switchMode(this.s36_1, descriptor);
    if (!(newMode.c39_1 === _Char___init__impl__6a9atx(0))) {
      this.r36_1.x34(newMode.c39_1);
      this.r36_1.s34();
    }
    var discriminator = this.y36_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.z36_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.pq() : tmp0_elvis_lhs);
      this.y36_1 = null;
      this.z36_1 = null;
    }
    if (this.t36_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.u36_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.a1_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.r36_1, this.s36_1, newMode, this.u36_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).ks = function (descriptor) {
    if (!(this.t36_1.d39_1 === _Char___init__impl__6a9atx(0))) {
      this.r36_1.t34();
      this.r36_1.v34();
      this.r36_1.x34(this.t36_1.d39_1);
    }
  };
  protoOf(StreamingJsonEncoder).ct = function (descriptor, index) {
    switch (this.t36_1.a1_1) {
      case 1:
        if (!this.r36_1.r34_1) {
          this.r36_1.x34(_Char___init__impl__6a9atx(44));
        }

        this.r36_1.u34();
        break;
      case 2:
        if (!this.r36_1.r34_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.r36_1.x34(_Char___init__impl__6a9atx(44));
            this.r36_1.u34();
            tmp_0 = true;
          } else {
            this.r36_1.x34(_Char___init__impl__6a9atx(58));
            this.r36_1.w34();
            tmp_0 = false;
          }
          tmp.x36_1 = tmp_0;
        } else {
          this.x36_1 = true;
          this.r36_1.u34();
        }

        break;
      case 3:
        if (index === 0)
          this.x36_1 = true;
        if (index === 1) {
          this.r36_1.x34(_Char___init__impl__6a9atx(44));
          this.r36_1.w34();
          this.x36_1 = false;
        }

        break;
      default:
        if (!this.r36_1.r34_1) {
          this.r36_1.x34(_Char___init__impl__6a9atx(44));
        }

        this.r36_1.u34();
        this.nt(getJsonElementName(descriptor, this.s36_1, index));
        this.r36_1.x34(_Char___init__impl__6a9atx(58));
        this.r36_1.w34();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).cu = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.w36_1.c32_1) {
      protoOf(AbstractEncoder).cu.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).pt = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.r36_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.r36_1;
      } else {
        var tmp0 = this.r36_1.q34_1;
        var p1 = this.x36_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
      }
      var tmp$ret$0 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$0, this.s36_1, this.t36_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.r36_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.r36_1;
      } else {
        var tmp0_0 = this.r36_1.q34_1;
        var p1_0 = this.x36_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
      }
      var tmp$ret$2 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$2, this.s36_1, this.t36_1, null);
    } else if (!(this.y36_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.z36_1 = descriptor.pq();
      tmp = this;
    } else {
      tmp = protoOf(AbstractEncoder).pt.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).et = function () {
    this.r36_1.z34('null');
  };
  protoOf(StreamingJsonEncoder).ft = function (value) {
    if (this.x36_1) {
      this.nt(value.toString());
    } else {
      this.r36_1.i35(value);
    }
  };
  protoOf(StreamingJsonEncoder).gt = function (value) {
    if (this.x36_1) {
      this.nt(value.toString());
    } else {
      this.r36_1.d35(value);
    }
  };
  protoOf(StreamingJsonEncoder).ht = function (value) {
    if (this.x36_1) {
      this.nt(value.toString());
    } else {
      this.r36_1.f35(value);
    }
  };
  protoOf(StreamingJsonEncoder).it = function (value) {
    if (this.x36_1) {
      this.nt(value.toString());
    } else {
      this.r36_1.g35(value);
    }
  };
  protoOf(StreamingJsonEncoder).jt = function (value) {
    if (this.x36_1) {
      this.nt(value.toString());
    } else {
      this.r36_1.h35(value);
    }
  };
  protoOf(StreamingJsonEncoder).kt = function (value) {
    if (this.x36_1) {
      this.nt(value.toString());
    } else {
      this.r36_1.b35(value);
    }
    if (!this.w36_1.h32_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  };
  protoOf(StreamingJsonEncoder).lt = function (value) {
    if (this.x36_1) {
      this.nt(value.toString());
    } else {
      this.r36_1.c35(value);
    }
    if (!this.w36_1.h32_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  };
  protoOf(StreamingJsonEncoder).mt = function (value) {
    this.nt(toString_1(value));
  };
  protoOf(StreamingJsonEncoder).nt = function (value) {
    return this.r36_1.j35(value);
  };
  protoOf(StreamingJsonEncoder).ot = function (enumDescriptor, index) {
    this.nt(enumDescriptor.uq(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.rq() && get_unsignedNumberDescriptors().j2(_this__u8e3s4);
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.rq() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).hp(), serializer_0(Companion_getInstance()).hp(), serializer_2(Companion_getInstance_1()).hp(), serializer_3(Companion_getInstance_2()).hp()]);
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
          _this__u8e3s4.ec(value, lastPos, i);
          _this__u8e3s4.q(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.ec(value, lastPos, value.length);
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
    return input.is(deserializer);
  }
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.hp())).is(deserializer);
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    var tmp2 = "Failed to parse literal '" + literal.toString() + "' as " + type + ' value';
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var path = $this.p39(tag);
    var tmp;
    if ($this.t32().f30_1.o32_1) {
      var tmp$ret$3 = toString($this.q39());
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
    this.l39_1 = json;
    this.m39_1 = value;
    this.n39_1 = polymorphicDiscriminator;
    this.o39_1 = this.t32().f30_1;
  }
  protoOf(AbstractJsonTreeDecoder).t32 = function () {
    return this.l39_1;
  };
  protoOf(AbstractJsonTreeDecoder).n1 = function () {
    return this.m39_1;
  };
  protoOf(AbstractJsonTreeDecoder).ys = function () {
    return this.t32().ys();
  };
  protoOf(AbstractJsonTreeDecoder).q39 = function () {
    var tmp0_safe_receiver = this.r16();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.r39(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.n1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).p39 = function (currentTag) {
    return this.t16() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).r32 = function () {
    return this.q39();
  };
  protoOf(AbstractJsonTreeDecoder).is = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.t32().f30_1.f32_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.jp(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.hp(), this.t32());
      var tmp2 = this.r32();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.hp().pq();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.t16();
        var tmp_0;
        if (this.t32().f30_1.o32_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var jsonTree = tmp2;
      var tmp0_safe_receiver = jsonTree.w2e(discriminator);
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
          if (this.t32().f30_1.o32_1) {
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
      tmp$ret$0 = readPolymorphicJson(this.t32(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).s16 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).js = function (descriptor) {
    var currentObject = this.q39();
    var tmp0_subject = descriptor.qq();
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
      var serialName = descriptor.pq();
      if (!(currentObject instanceof JsonArray)) {
        var tmp2 = 'Expected ' + getKClass(JsonArray).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.t16();
        var tmp_2;
        if (this.t32().f30_1.o32_1) {
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
        var keyDescriptor = carrierDescriptor(descriptor.xq(0), this_0.ys());
        var keyKind = keyDescriptor.qq();
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
          var serialName_0 = descriptor.pq();
          if (!(currentObject instanceof JsonObject)) {
            var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_0;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path_0 = this.t16();
            var tmp_6;
            if (this.t32().f30_1.o32_1) {
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
          if (this_0.f30_1.a32_1) {
            var tmp_7 = this.t32();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.pq();
            if (!(currentObject instanceof JsonArray)) {
              var tmp2_1 = 'Expected ' + getKClass(JsonArray).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_1;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var path_1 = this.t16();
              var tmp_8;
              if (this.t32().f30_1.o32_1) {
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
        var serialName_2 = descriptor.pq();
        if (!(currentObject instanceof JsonObject)) {
          var tmp2_2 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_2;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path_2 = this.t16();
          var tmp_10;
          if (this.t32().f30_1.o32_1) {
            var tmp$ret$30 = toString(currentObject);
            tmp_10 = toString(minify(tmp$ret$30));
          } else {
            tmp_10 = null;
          }
          var inputValue_2 = tmp_10;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_2, path_2, null, inputValue_2), tmp2_2, -1, path_2, inputValue_2, null);
        }
        tmp = new JsonTreeDecoder(tmp_9, currentObject, this.n39_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).ks = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).ur = function () {
    var tmp = this.q39();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).s39 = function (tag, enumDescriptor) {
    var tmp = this.t32();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.r39(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.pq();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.p39(tag);
      var tmp_0;
      if (this.t32().f30_1.o32_1) {
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
  protoOf(AbstractJsonTreeDecoder).f17 = function (tag, enumDescriptor) {
    return this.s39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).t39 = function (tag) {
    return !(this.r39(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).v16 = function (tag) {
    return this.t39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).u39 = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.r39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'boolean';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.p39(tag);
        var tmp;
        if (this.t32().f30_1.o32_1) {
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
  protoOf(AbstractJsonTreeDecoder).w16 = function (tag) {
    return this.u39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).v39 = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.r39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'byte';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.p39(tag);
        var tmp;
        if (this.t32().f30_1.o32_1) {
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
  protoOf(AbstractJsonTreeDecoder).x16 = function (tag) {
    return this.v39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).w39 = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.r39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'short';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.p39(tag);
        var tmp;
        if (this.t32().f30_1.o32_1) {
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
  protoOf(AbstractJsonTreeDecoder).y16 = function (tag) {
    return this.w39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).x39 = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.r39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'int';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.p39(tag);
        var tmp;
        if (this.t32().f30_1.o32_1) {
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
  protoOf(AbstractJsonTreeDecoder).z16 = function (tag) {
    return this.x39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).y39 = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.r39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'long';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.p39(tag);
        var tmp;
        if (this.t32().f30_1.o32_1) {
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
  protoOf(AbstractJsonTreeDecoder).a17 = function (tag) {
    return this.y39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).z39 = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.r39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'float';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.p39(tag);
        var tmp;
        if (this.t32().f30_1.o32_1) {
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
    var specialFp = this.t32().f30_1.h32_1;
    if (specialFp || isFinite(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.t32().f30_1.o32_1) {
      var tmp$ret$13 = toString(this.q39());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).b17 = function (tag) {
    return this.z39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).a3a = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.r39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'double';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.p39(tag);
        var tmp;
        if (this.t32().f30_1.o32_1) {
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
    var specialFp = this.t32().f30_1.h32_1;
    if (specialFp || isFinite_0(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.t32().f30_1.o32_1) {
      var tmp$ret$13 = toString(this.q39());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).c17 = function (tag) {
    return this.a3a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).b3a = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.r39(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'char';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.p39(tag);
        var tmp;
        if (this.t32().f30_1.o32_1) {
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
  protoOf(AbstractJsonTreeDecoder).d17 = function (tag) {
    return this.b3a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).c3a = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.r39(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'string';
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.p39(tag);
      var tmp;
      if (this.t32().f30_1.o32_1) {
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
      var tmp4 = this.p39(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint = "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.";
      var tmp_0;
      if (this.t32().f30_1.o32_1) {
        var tmp$ret$10 = toString(this.q39());
        tmp_0 = toString(minify(tmp$ret$10));
      } else {
        tmp_0 = null;
      }
      var inputValue_0 = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, tmp4, hint, inputValue_0), tmp2_0, -1, tmp4, inputValue_0, hint);
    }
    if (!value_0.f33_1 && !this.t32().f30_1.z31_1) {
      var tmp2_1 = "String literal for value of key '" + tag + "' should be quoted";
      var tmp4_0 = this.p39(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint_0 = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
      var tmp_1;
      if (this.t32().f30_1.o32_1) {
        var tmp$ret$14 = toString(this.q39());
        tmp_1 = toString(minify(tmp$ret$14));
      } else {
        tmp_1 = null;
      }
      var inputValue_1 = tmp_1;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, tmp4_0, hint_0, inputValue_1), tmp2_1, -1, tmp4_0, inputValue_1, hint_0);
    }
    return value_0.h33_1;
  };
  protoOf(AbstractJsonTreeDecoder).e17 = function (tag) {
    return this.c3a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).d3a = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.t32();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.r39(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.pq();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.p39(tag);
        var tmp_1;
        if (this.t32().f30_1.o32_1) {
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
      tmp = protoOf(NamedValueDecoder).g17.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).g17 = function (tag, inlineDescriptor) {
    return this.d3a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).gs = function (descriptor) {
    return !(this.r16() == null) ? protoOf(NamedValueDecoder).gs.call(this, descriptor) : (new JsonPrimitiveDecoder(this.t32(), this.n1(), this.n39_1)).gs(descriptor);
  };
  function setForceNull($this, descriptor, index) {
    $this.n3a_1 = (!$this.t32().f30_1.c32_1 && !descriptor.yq(index) && descriptor.xq(index).iq());
    return $this.n3a_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.k3a_1 = value;
    this.l3a_1 = polyDescriptor;
    this.m3a_1 = 0;
    this.n3a_1 = false;
  }
  protoOf(JsonTreeDecoder).n1 = function () {
    return this.k3a_1;
  };
  protoOf(JsonTreeDecoder).at = function (descriptor) {
    $l$loop: while (this.m3a_1 < descriptor.sq()) {
      var _unary__edvuaz = this.m3a_1;
      this.m3a_1 = _unary__edvuaz + 1 | 0;
      var name = this.m16(descriptor, _unary__edvuaz);
      var index = this.m3a_1 - 1 | 0;
      this.n3a_1 = false;
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
        if (!this.o39_1.e32_1)
          return index;
        var tmp0 = this.t32();
        var tmp$ret$2;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.yq(index);
          var elementDescriptor = descriptor.xq(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.iq()) {
            var tmp_1 = this.o3a(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.qq(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.iq()) {
              var tmp_3 = this.o3a(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$2 = false;
              break $l$block_2;
            }
            var tmp_4 = this.o3a(name);
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
            var coerceToNull = !tmp0.f30_1.c32_1 && elementDescriptor.iq();
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
  protoOf(JsonTreeDecoder).ur = function () {
    return !this.n3a_1 && protoOf(AbstractJsonTreeDecoder).ur.call(this);
  };
  protoOf(JsonTreeDecoder).n16 = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.t32());
    var baseName = descriptor.uq(index);
    if (strategy == null) {
      if (!this.o39_1.i32_1)
        return baseName;
      if (this.n1().t2().j2(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.t32(), descriptor);
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
    var fallbackName = strategy == null ? null : strategy.e36(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).r39 = function (tag) {
    return getValue(this.n1(), tag);
  };
  protoOf(JsonTreeDecoder).o3a = function (tag) {
    return this.n1().w2e(tag);
  };
  protoOf(JsonTreeDecoder).js = function (descriptor) {
    if (descriptor === this.l3a_1) {
      var tmp = this.t32();
      var tmp2 = this.q39();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.l3a_1.pq();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.t16();
        var tmp_0;
        if (this.t32().f30_1.o32_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      return new JsonTreeDecoder(tmp, tmp2, this.n39_1, this.l3a_1);
    }
    return protoOf(AbstractJsonTreeDecoder).js.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).ks = function (descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.t32())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.qq();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.t32());
    var tmp_1;
    if (strategy == null && !this.o39_1.i32_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.t32(), descriptor).t2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.t32()).p38(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.n1().t2().t();
    while (_iterator__ex2g4s.u()) {
      var key = _iterator__ex2g4s.v();
      if (!names.j2(key) && !(key === this.n39_1)) {
        var tmp2 = "Encountered an unknown key '" + key + "'";
        var tmp4 = this.t16();
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var hint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.";
        var tmp_3;
        if (this.t32().f30_1.o32_1) {
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
    this.v3a_1 = value;
    this.w3a_1 = this.v3a_1.e1();
    this.x3a_1 = -1;
  }
  protoOf(JsonTreeListDecoder).n1 = function () {
    return this.v3a_1;
  };
  protoOf(JsonTreeListDecoder).n16 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).r39 = function (tag) {
    return this.v3a_1.d1(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).at = function (descriptor) {
    while (this.x3a_1 < (this.w3a_1 - 1 | 0)) {
      this.x3a_1 = this.x3a_1 + 1 | 0;
      return this.x3a_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.e3b_1 = value;
    this.h17('primitive');
  }
  protoOf(JsonPrimitiveDecoder).n1 = function () {
    return this.e3b_1;
  };
  protoOf(JsonPrimitiveDecoder).at = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).r39 = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.e3b_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.p3b_1 = value;
    this.q3b_1 = toList(this.p3b_1.t2());
    this.r3b_1 = imul(this.q3b_1.e1(), 2);
    this.s3b_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).n1 = function () {
    return this.p3b_1;
  };
  protoOf(JsonTreeMapDecoder).n16 = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.q3b_1.d1(i);
  };
  protoOf(JsonTreeMapDecoder).at = function (descriptor) {
    while (this.s3b_1 < (this.r3b_1 - 1 | 0)) {
      this.s3b_1 = this.s3b_1 + 1 | 0;
      return this.s3b_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).r39 = function (tag) {
    return (this.s3b_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.p3b_1, tag);
  };
  protoOf(JsonTreeMapDecoder).ks = function (descriptor) {
  };
  function writeJson(json, value, serializer) {
    var result = {_v: null};
    var encoder = new JsonTreeEncoder(json, writeJson$lambda(result));
    encoder.bu(serializer, value);
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
    tmp.f3c_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonTreeEncoder).g3c = function (key, element) {
    // Inline function 'kotlin.collections.set' call
    this.f3c_1.v2(key, element);
  };
  protoOf(JsonTreeEncoder).cu = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.w3b_1.c32_1) {
      protoOf(AbstractJsonTreeEncoder).cu.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(JsonTreeEncoder).h3c = function () {
    return new JsonObject(this.f3c_1);
  };
  function inlineUnsignedNumberEncoder($this, tag) {
    return new AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1($this, tag);
  }
  function inlineUnquotedLiteralEncoder($this, tag, inlineDescriptor) {
    return new AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1($this, tag, inlineDescriptor);
  }
  function AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1(this$0, $tag) {
    this.w3c_1 = this$0;
    this.x3c_1 = $tag;
    AbstractEncoder.call(this);
    this.v3c_1 = this$0.u3b_1.ys();
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).ys = function () {
    return this.v3c_1;
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).y3c = function (s) {
    return this.w3c_1.g3c(this.x3c_1, new JsonLiteral(s, false));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).it = function (value) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
    return this.y3c(UInt__toString_impl_dbgl21(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).jt = function (value) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(value);
    return this.y3c(ULong__toString_impl_f9au7k(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).gt = function (value) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
    return this.y3c(UByte__toString_impl_v72jg(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).ht = function (value) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(value);
    return this.y3c(UShort__toString_impl_edaoee(tmp$ret$0));
  };
  function AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1(this$0, $tag, $inlineDescriptor) {
    this.z3c_1 = this$0;
    this.a3d_1 = $tag;
    this.b3d_1 = $inlineDescriptor;
    AbstractEncoder.call(this);
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).ys = function () {
    return this.z3c_1.u3b_1.ys();
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).nt = function (value) {
    return this.z3c_1.g3c(this.a3d_1, new JsonLiteral(value, false, this.b3d_1));
  };
  function AbstractJsonTreeEncoder$beginStructure$lambda(this$0) {
    return function (node) {
      this$0.g3c(this$0.a18(), node);
      return Unit_instance;
    };
  }
  function AbstractJsonTreeEncoder(json, nodeConsumer) {
    NamedValueEncoder.call(this);
    this.u3b_1 = json;
    this.v3b_1 = nodeConsumer;
    this.w3b_1 = this.u3b_1.f30_1;
    this.x3b_1 = null;
    this.y3b_1 = null;
  }
  protoOf(AbstractJsonTreeEncoder).t32 = function () {
    return this.u3b_1;
  };
  protoOf(AbstractJsonTreeEncoder).ys = function () {
    return this.u3b_1.ys();
  };
  protoOf(AbstractJsonTreeEncoder).n16 = function (descriptor, index) {
    return getJsonElementName(descriptor, this.u3b_1, index);
  };
  protoOf(AbstractJsonTreeEncoder).f34 = function (element) {
    var tmp;
    if (!(this.x3b_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.y3b_1, element);
    }
    this.bu(JsonElementSerializer_getInstance(), element);
  };
  protoOf(AbstractJsonTreeEncoder).gu = function (descriptor, index) {
    return this.w3b_1.x31_1;
  };
  protoOf(AbstractJsonTreeEncoder).s16 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeEncoder).eu = function () {
  };
  protoOf(AbstractJsonTreeEncoder).et = function () {
    var tmp0_elvis_lhs = this.r16();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.v3b_1(JsonNull_getInstance());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tag = tmp;
    this.i3c(tag);
  };
  protoOf(AbstractJsonTreeEncoder).i3c = function (tag) {
    return this.g3c(tag, JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeEncoder).n17 = function (tag) {
    return this.i3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeEncoder).j3c = function (tag, value) {
    return this.g3c(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).o17 = function (tag, value) {
    return this.j3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).k3c = function (tag, value) {
    return this.g3c(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).p17 = function (tag, value) {
    return this.k3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).l3c = function (tag, value) {
    return this.g3c(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).q17 = function (tag, value) {
    return this.l3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).m3c = function (tag, value) {
    return this.g3c(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).r17 = function (tag, value) {
    return this.m3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).n3c = function (tag, value) {
    this.g3c(tag, JsonPrimitive_1(value));
    if (!this.w3b_1.h32_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, tag);
    }
  };
  protoOf(AbstractJsonTreeEncoder).s17 = function (tag, value) {
    return this.n3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).bu = function (serializer, value) {
    if (!(this.r16() == null) || !get_requiresTopLevelTag(carrierDescriptor(serializer.hp(), this.ys()))) {
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
        if (this.t32().f30_1.f32_1) {
          serializer.ip(this, value);
          break $l$block;
        }
        var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
        var tmp;
        if (isPolymorphicSerializer) {
          tmp = !this.t32().f30_1.n32_1.equals(ClassDiscriminatorMode_NONE_getInstance());
        } else {
          var tmp_0;
          switch (this.t32().f30_1.n32_1.a1_1) {
            case 0:
            case 2:
              tmp_0 = false;
              break;
            case 1:
              // Inline function 'kotlin.let' call

              var it = serializer.hp().qq();
              tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp = tmp_0;
        }
        var needDiscriminator = tmp;
        var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.hp(), this.t32()) : null;
        var tmp_1;
        if (isPolymorphicSerializer) {
          var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
          $l$block_0: {
            // Inline function 'kotlin.requireNotNull' call
            if (value == null) {
              var message = 'Value for serializer ' + toString(serializer.hp()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
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
          access$checkEncodingConflicts$tPolymorphicKt(this.t32(), serializer, actualSerializer, baseClassDiscriminator);
          checkKind_0(actualSerializer.hp().qq());
          var serialName = actualSerializer.hp().pq();
          this.x3b_1 = baseClassDiscriminator;
          this.y3b_1 = serialName;
        }
        actualSerializer.ip(this, value);
      }
    } else {
      // Inline function 'kotlin.run' call
      (new JsonPrimitiveEncoder(this.u3b_1, this.v3b_1)).bu(serializer, value);
    }
  };
  protoOf(AbstractJsonTreeEncoder).o3c = function (tag, value) {
    this.g3c(tag, JsonPrimitive_1(value));
    if (!this.w3b_1.h32_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, tag);
    }
  };
  protoOf(AbstractJsonTreeEncoder).t17 = function (tag, value) {
    return this.o3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).p3c = function (tag, value) {
    return this.g3c(tag, JsonPrimitive_2(value));
  };
  protoOf(AbstractJsonTreeEncoder).u17 = function (tag, value) {
    return this.p3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).q3c = function (tag, value) {
    return this.g3c(tag, JsonPrimitive_0(toString_1(value)));
  };
  protoOf(AbstractJsonTreeEncoder).v17 = function (tag, value) {
    return this.q3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).r3c = function (tag, value) {
    return this.g3c(tag, JsonPrimitive_0(value));
  };
  protoOf(AbstractJsonTreeEncoder).w17 = function (tag, value) {
    return this.r3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).s3c = function (tag, enumDescriptor, ordinal) {
    return this.g3c(tag, JsonPrimitive_0(enumDescriptor.uq(ordinal)));
  };
  protoOf(AbstractJsonTreeEncoder).x17 = function (tag, enumDescriptor, ordinal) {
    return this.s3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor, ordinal);
  };
  protoOf(AbstractJsonTreeEncoder).t3c = function (tag, value) {
    this.g3c(tag, JsonPrimitive_0(toString(value)));
  };
  protoOf(AbstractJsonTreeEncoder).l17 = function (tag, value) {
    return this.t3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).u3c = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? inlineUnsignedNumberEncoder(this, tag) : get_isUnquotedLiteral(inlineDescriptor) ? inlineUnquotedLiteralEncoder(this, tag, inlineDescriptor) : protoOf(NamedValueEncoder).y17.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).y17 = function (tag, inlineDescriptor) {
    return this.u3c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).pt = function (descriptor) {
    var tmp;
    if (!(this.r16() == null)) {
      if (!(this.x3b_1 == null))
        this.y3b_1 = descriptor.pq();
      tmp = protoOf(NamedValueEncoder).pt.call(this, descriptor);
    } else {
      tmp = (new JsonPrimitiveEncoder(this.u3b_1, this.v3b_1)).pt(descriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeEncoder).js = function (descriptor) {
    var tmp;
    if (this.r16() == null) {
      tmp = this.v3b_1;
    } else {
      tmp = AbstractJsonTreeEncoder$beginStructure$lambda(this);
    }
    var consumer = tmp;
    var tmp0_subject = descriptor.qq();
    var tmp_0;
    var tmp_1;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_1) {
      tmp_0 = new JsonTreeListEncoder(this.u3b_1, consumer);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.u3b_1;
        var keyDescriptor = carrierDescriptor(descriptor.xq(0), this_0.ys());
        var keyKind = keyDescriptor.qq();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          tmp_2 = new JsonTreeMapEncoder(this.u3b_1, consumer);
        } else {
          if (this_0.f30_1.a32_1) {
            tmp_2 = new JsonTreeListEncoder(this.u3b_1, consumer);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp_0 = tmp_2;
      } else {
        tmp_0 = new JsonTreeEncoder(this.u3b_1, consumer);
      }
    }
    var encoder = tmp_0;
    var discriminator = this.x3b_1;
    if (!(discriminator == null)) {
      if (encoder instanceof JsonTreeMapEncoder) {
        encoder.g3c('key', JsonPrimitive_0(discriminator));
        var tmp1_elvis_lhs = this.y3b_1;
        encoder.g3c('value', JsonPrimitive_0(tmp1_elvis_lhs == null ? descriptor.pq() : tmp1_elvis_lhs));
      } else {
        var tmp2_elvis_lhs = this.y3b_1;
        encoder.g3c(discriminator, JsonPrimitive_0(tmp2_elvis_lhs == null ? descriptor.pq() : tmp2_elvis_lhs));
      }
      this.x3b_1 = null;
      this.y3b_1 = null;
    }
    return encoder;
  };
  protoOf(AbstractJsonTreeEncoder).z17 = function (descriptor) {
    this.v3b_1(this.h3c());
  };
  function get_requiresTopLevelTag(_this__u8e3s4) {
    var tmp;
    var tmp_0 = _this__u8e3s4.qq();
    if (tmp_0 instanceof PrimitiveKind) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.qq() === ENUM_getInstance();
    }
    return tmp;
  }
  function JsonPrimitiveEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    this.r3d_1 = null;
    this.h17('primitive');
  }
  protoOf(JsonPrimitiveEncoder).g3c = function (key, element) {
    // Inline function 'kotlin.require' call
    if (!(key === 'primitive')) {
      var message = "This output can only consume primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.r3d_1 == null)) {
      var message_0 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.r3d_1 = element;
    this.v3b_1(element);
  };
  protoOf(JsonPrimitiveEncoder).h3c = function () {
    var tmp0 = this.r3d_1;
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
    tmp.y3d_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonTreeListEncoder).n16 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListEncoder).g3c = function (key, element) {
    var idx = toInt(key);
    this.y3d_1.a3(idx, element);
  };
  protoOf(JsonTreeListEncoder).h3c = function () {
    return new JsonArray(this.y3d_1);
  };
  function _get_tag__e6h4qf($this) {
    var tmp = $this.j3d_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('tag');
    }
  }
  function JsonTreeMapEncoder(json, nodeConsumer) {
    JsonTreeEncoder.call(this, json, nodeConsumer);
    this.k3d_1 = true;
  }
  protoOf(JsonTreeMapEncoder).g3c = function (key, element) {
    if (this.k3d_1) {
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
      tmp.j3d_1 = tmp_0;
      this.k3d_1 = false;
    } else {
      var tmp0 = this.f3c_1;
      // Inline function 'kotlin.collections.set' call
      var key_0 = _get_tag__e6h4qf(this);
      tmp0.v2(key_0, element);
      this.k3d_1 = true;
    }
  };
  protoOf(JsonTreeMapEncoder).h3c = function () {
    return new JsonObject(this.f3c_1);
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
    this.c39_1 = begin;
    this.d39_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.qq();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.xq(0), _this__u8e3s4.ys());
          var keyKind = keyDescriptor.qq();
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
            if (_this__u8e3s4.f30_1.a32_1) {
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
    if (equals(_this__u8e3s4.qq(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.rq()) {
      tmp = carrierDescriptor(_this__u8e3s4.xq(0), module_0);
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
    $this.z3d(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.z3d(lastPosition, currentPosition);
    var result = $this.b31_1.toString();
    $this.b31_1.kc(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.a31_1);
    $this.a31_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.a3e(), $this.y30_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.b3e(currentPosition);
    if (currentPosition === -1) {
      $this.a36('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.a3e();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.a3e(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.a36("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.b31_1.s(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.y30_1 = startPos;
      $this.c3e();
      if (($this.y30_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.a36('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.y30_1);
    }
    $this.b31_1.s(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
    var current = $this.b3e(start);
    if (current >= charSequenceLength($this.a3e()) || current === -1) {
      $this.a36('EOF');
    }
    var tmp = $this.a3e();
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
        $this.a36("Expected valid boolean literal prefix, but had '" + $this.i37() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.a3e()) - current | 0) < literalSuffix.length) {
      $this.a36('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charCodeAt(literalSuffix, i);
        var actual = charSequenceGet($this.a3e(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.a36("Expected valid boolean literal prefix, but had '" + $this.i37() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.y30_1 = current + literalSuffix.length | 0;
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
    this.x30_1 = configuration;
    this.y30_1 = 0;
    this.z30_1 = new JsonPath(this.x30_1);
    this.a31_1 = null;
    this.b31_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).c3e = function () {
  };
  protoOf(AbstractJsonLexer).s38 = function () {
    var current = this.d3e();
    var source = this.a3e();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.y30_1 = this.y30_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).e3e = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).c31 = function () {
    var nextToken = this.k37();
    if (!(nextToken === 10)) {
      this.a36('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.a3e(), this.y30_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).e37 = function (expected) {
    var token = this.k37();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true && this.y30_1 > 0 ? this.y30_1 - 1 | 0 : this.y30_1;
      var s = this.y30_1 === charSequenceLength(this.a3e()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.a3e(), position));
      var tmp$ret$1 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.a36(tmp$ret$1, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).f3e = function (expected) {
    if (this.y30_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.y30_1;
        try {
          this.y30_1 = this.y30_1 - 1 | 0;
          tmp$ret$0 = this.i37();
          break $l$block;
        }finally {
          this.y30_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$0;
      if (inputLiteral === 'null') {
        this.z35("Expected string literal but 'null' literal was found", this.y30_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true && this.y30_1 > 0 ? this.y30_1 - 1 | 0 : this.y30_1;
    var s = this.y30_1 === charSequenceLength(this.a3e()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.a3e(), position));
    var tmp$ret$3 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.a36(tmp$ret$3, position);
  };
  protoOf(AbstractJsonLexer).f37 = function () {
    var source = this.a3e();
    var cpos = this.y30_1;
    $l$loop_0: while (true) {
      cpos = this.b3e(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.y30_1 = cpos;
      return charToTokenClass(ch);
    }
    this.y30_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).t38 = function (doConsume) {
    var current = this.d3e();
    current = this.b3e(current);
    var len = charSequenceLength(this.a3e()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.a3e(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.a3e(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.y30_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).e39 = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.t38(doConsume) : $super.t38.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).u38 = function (isLenient) {
    var token = this.f37();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.i37();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.h37();
    }
    var string = tmp;
    this.a31_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).g3e = function () {
    this.a31_1 = null;
  };
  protoOf(AbstractJsonLexer).t1a = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.a3e();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).h37 = function () {
    if (!(this.a31_1 == null)) {
      return takePeeked(this);
    }
    return this.x38();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.b3e(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.a36('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.z3d(lastPosition, currentPosition);
          currentPosition = this.b3e(currentPosition);
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
      tmp = this.t1a(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.y30_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).y38 = function () {
    var result = this.i37();
    if (result === 'null' && wasUnquotedString(this)) {
      this.a36("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).i37 = function () {
    if (!(this.a31_1 == null)) {
      return takePeeked(this);
    }
    var current = this.d3e();
    if (current >= charSequenceLength(this.a3e()) || current === -1) {
      this.a36('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.a3e(), current));
    if (token === 1) {
      return this.h37();
    }
    if (!(token === 0)) {
      this.a36('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.a3e(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.a3e(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.a3e())) {
        usedAppend = true;
        this.z3d(this.y30_1, current);
        var eof = this.b3e(current);
        if (eof === -1) {
          this.y30_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.t1a(this.y30_1, current);
    } else {
      tmp = decodedString(this, this.y30_1, current);
    }
    var result = tmp;
    this.y30_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).z3d = function (fromIndex, toIndex) {
    this.b31_1.ec(this.a3e(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).w38 = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.f37();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.i37();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.f37();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.i37();
        else
          this.x38();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.b1(lastToken);
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
      this.k37();
      if (tokenStack.e1() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.a3e()) + "', currentPosition=" + this.y30_1 + ')';
  };
  protoOf(AbstractJsonLexer).v38 = function (key) {
    var processed = this.t1a(0, this.y30_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.z35("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).z35 = function (message, position, hint) {
    throw decodingExceptionOf_0(this, message, position, this.z30_1.o36(), hint, this.a3e());
  };
  protoOf(AbstractJsonLexer).a36 = function (message, position, hint, $super) {
    position = position === VOID ? this.y30_1 : position;
    hint = hint === VOID ? null : hint;
    return $super === VOID ? this.z35(message, position, hint) : $super.z35.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).g39 = function () {
    var current = this.d3e();
    current = this.b3e(current);
    if (current >= charSequenceLength(this.a3e()) || current === -1) {
      this.a36('EOF');
    }
    var tmp;
    if (charSequenceGet(this.a3e(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.a3e())) {
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
    $l$loop_4: while (!(current === charSequenceLength(this.a3e()))) {
      var ch = charSequenceGet(this.a3e(), current);
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
      if (!(charSequenceGet(this.a3e(), current) === _Char___init__impl__6a9atx(34))) {
        this.a36('Expected closing quotation mark', current);
      }
      current = current + 1 | 0;
    }
    this.y30_1 = current;
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
    var result = this.g39();
    var next = this.k37();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true && this.y30_1 > 0 ? this.y30_1 - 1 | 0 : this.y30_1;
      var s = this.y30_1 === charSequenceLength(this.a3e()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.a3e(), position));
      var tmp$ret$1 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.a36(tmp$ret$1, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).f39 = function () {
    var current = this.d3e();
    if (current === charSequenceLength(this.a3e())) {
      this.a36('EOF');
    }
    var tmp;
    if (charSequenceGet(this.a3e(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.y30_1 === charSequenceLength(this.a3e())) {
        this.a36('EOF');
      }
      if (!(charSequenceGet(this.a3e(), this.y30_1) === _Char___init__impl__6a9atx(34))) {
        this.a36('Expected closing quotation mark');
      }
      this.y30_1 = this.y30_1 + 1 | 0;
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
      var tmp_0 = CharMappings_getInstance().i3e_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().h3e_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.h3e_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.i3e_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.h3e_1 = charArray(117);
    this.i3e_1 = new Int8Array(126);
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
  protoOf(StringJsonLexerWithComments).k37 = function () {
    var source = this.a3e();
    var cpos = this.d3e();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.y30_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).g37 = function () {
    var current = this.d3e();
    if (current >= this.a3e().length || current === -1)
      return false;
    return this.e3e(charCodeAt(this.a3e(), current));
  };
  protoOf(StringJsonLexerWithComments).r38 = function (expected) {
    var source = this.a3e();
    var current = this.d3e();
    if (current >= source.length || current === -1) {
      this.y30_1 = -1;
      this.f3e(expected);
    }
    var c = charCodeAt(source, current);
    this.y30_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.f3e(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).f37 = function () {
    var source = this.a3e();
    var cpos = this.d3e();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.y30_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).d3e = function () {
    var current = this.y30_1;
    if (current === -1)
      return current;
    var source = this.a3e();
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
            this.y30_1 = source.length;
            this.a36('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.y30_1 = current;
    return current;
  };
  function StringJsonLexer(source, configuration) {
    AbstractJsonLexer.call(this, configuration);
    this.u3e_1 = source;
  }
  protoOf(StringJsonLexer).a3e = function () {
    return this.u3e_1;
  };
  protoOf(StringJsonLexer).b3e = function (position) {
    return position < this.a3e().length ? position : -1;
  };
  protoOf(StringJsonLexer).k37 = function () {
    var source = this.a3e();
    var cpos = this.y30_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.y30_1 = cpos;
      return charToTokenClass(c);
    }
    this.y30_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).g37 = function () {
    var current = this.y30_1;
    if (current === -1)
      return false;
    var source = this.a3e();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.y30_1 = current;
      return this.e3e(c);
    }
    this.y30_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).d3e = function () {
    var current = this.y30_1;
    if (current === -1)
      return current;
    var source = this.a3e();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.y30_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).r38 = function (expected) {
    if (this.y30_1 === -1) {
      this.f3e(expected);
    }
    var source = this.a3e();
    var cpos = this.y30_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.y30_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.f3e(expected);
    }
    this.y30_1 = -1;
    this.f3e(expected);
  };
  protoOf(StringJsonLexer).x38 = function () {
    this.r38(_Char___init__impl__6a9atx(34));
    var current = this.y30_1;
    var closingQuote = indexOf_0(this.a3e(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.i37();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false && this.y30_1 > 0 ? this.y30_1 - 1 | 0 : this.y30_1;
      var s = this.y30_1 === charSequenceLength(this.a3e()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.a3e(), position));
      var tmp$ret$1 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.a36(tmp$ret$1, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.a3e(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.a3e(), this.y30_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.y30_1 = closingQuote + 1 | 0;
    return substring(this.a3e(), current, closingQuote);
  };
  protoOf(StringJsonLexer).z38 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.y30_1;
    try {
      if (!(this.k37() === 6))
        return null;
      var firstKey = this.u38(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.g3e();
      if (!(this.k37() === 5))
        return null;
      return this.u38(isLenient);
    }finally {
      this.y30_1 = positionSnapshot;
      this.g3e();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.f30_1.m32_1 ? new StringJsonLexer(source, json.f30_1) : new StringJsonLexerWithComments(source, json.f30_1);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.h30_1;
  }
  function JsonToStringWriter() {
    this.n30_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).e35 = function (value) {
    this.n30_1.ic(value);
  };
  protoOf(JsonToStringWriter).y34 = function (char) {
    this.n30_1.s(char);
  };
  protoOf(JsonToStringWriter).a35 = function (text) {
    this.n30_1.q(text);
  };
  protoOf(JsonToStringWriter).k35 = function (text) {
    printQuoted(this.n30_1, text);
  };
  protoOf(JsonToStringWriter).o30 = function () {
    this.n30_1.lc();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.n30_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).iq = get_isNullable;
  protoOf(defer$1).rq = get_isInline;
  protoOf(defer$1).tq = get_annotations;
  defineProp(protoOf(JsonException), 'message', function () {
    return this.e();
  });
  protoOf(JsonSerializersModuleValidator).v19 = contextual;
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
