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
  var protoOf = kotlin_kotlin.$_$.ob;
  var initMetadataForObject = kotlin_kotlin.$_$.ua;
  var VOID = kotlin_kotlin.$_$.b;
  var Unit_instance = kotlin_kotlin.$_$.v4;
  var initMetadataForClass = kotlin_kotlin.$_$.oa;
  var toString = kotlin_kotlin.$_$.rb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var charSequenceLength = kotlin_kotlin.$_$.ea;
  var charSequenceGet = kotlin_kotlin.$_$.da;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e2;
  var equals = kotlin_kotlin.$_$.ia;
  var toString_0 = kotlin_kotlin.$_$.ng;
  var Enum = kotlin_kotlin.$_$.cf;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var getKClassFromExpression = kotlin_kotlin.$_$.fc;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var THROW_CCE = kotlin_kotlin.$_$.mf;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var isInterface = kotlin_kotlin.$_$.db;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var initMetadataForInterface = kotlin_kotlin.$_$.sa;
  var initMetadataForCompanion = kotlin_kotlin.$_$.pa;
  var hashCode = kotlin_kotlin.$_$.na;
  var joinToString = kotlin_kotlin.$_$.s6;
  var KtList = kotlin_kotlin.$_$.c5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.b1;
  var KtMap = kotlin_kotlin.$_$.f5;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var getBooleanHashCode = kotlin_kotlin.$_$.ka;
  var getStringHashCode = kotlin_kotlin.$_$.ma;
  var toDouble = kotlin_kotlin.$_$.ce;
  var numberRangeToNumber = kotlin_kotlin.$_$.kb;
  var ClosedRange = kotlin_kotlin.$_$.vb;
  var contains = kotlin_kotlin.$_$.zb;
  var convertToInt = kotlin_kotlin.$_$.f9;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var toDoubleOrNull = kotlin_kotlin.$_$.be;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.i4;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.kg;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var toLongOrNull = kotlin_kotlin.$_$.he;
  var toULongOrNull = kotlin_kotlin.$_$.me;
  var ULong = kotlin_kotlin.$_$.tf;
  var Companion_getInstance = kotlin_kotlin.$_$.t4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j3;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.zd;
  var KProperty1 = kotlin_kotlin.$_$.lc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.la;
  var lazy = kotlin_kotlin.$_$.jg;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var fromInt = kotlin_kotlin.$_$.j9;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.z2;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.b3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i3;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.k3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.q2;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.s2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.r3;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.t3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var captureStack = kotlin_kotlin.$_$.z9;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceSubSequence = kotlin_kotlin.$_$.fa;
  var coerceAtLeast = kotlin_kotlin.$_$.wb;
  var coerceAtMost = kotlin_kotlin.$_$.xb;
  var Collection = kotlin_kotlin.$_$.x4;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var singleOrNull = kotlin_kotlin.$_$.n7;
  var emptyMap = kotlin_kotlin.$_$.h6;
  var getValue = kotlin_kotlin.$_$.o6;
  var copyOf = kotlin_kotlin.$_$.c6;
  var arrayCopy = kotlin_kotlin.$_$.l5;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.af;
  var invoke = kotlin_kotlin.$_$.eg;
  var CoroutineImpl = kotlin_kotlin.$_$.v8;
  var DeepRecursiveScope = kotlin_kotlin.$_$.bf;
  var Unit = kotlin_kotlin.$_$.wf;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.e8;
  var initMetadataForLambda = kotlin_kotlin.$_$.ta;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.qa;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var getKClass = kotlin_kotlin.$_$.gc;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var ensureNotNull = kotlin_kotlin.$_$.dg;
  var substringBefore = kotlin_kotlin.$_$.vd;
  var removeSuffix = kotlin_kotlin.$_$.kd;
  var substringAfter = kotlin_kotlin.$_$.ud;
  var contains_0 = kotlin_kotlin.$_$.rc;
  var plus = kotlin_kotlin.$_$.lg;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var convertToByte = kotlin_kotlin.$_$.e9;
  var equalsLong = kotlin_kotlin.$_$.i9;
  var convertToShort = kotlin_kotlin.$_$.g9;
  var IllegalArgumentException = kotlin_kotlin.$_$.ff;
  var isFinite = kotlin_kotlin.$_$.gg;
  var isFinite_0 = kotlin_kotlin.$_$.fg;
  var charCodeAt = kotlin_kotlin.$_$.ca;
  var toUInt = kotlin_kotlin.$_$.le;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.a3;
  var toULong = kotlin_kotlin.$_$.ne;
  var toUByte = kotlin_kotlin.$_$.ke;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.r2;
  var toUShort = kotlin_kotlin.$_$.oe;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.s3;
  var objectCreate = kotlin_kotlin.$_$.nb;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var toString_1 = kotlin_kotlin.$_$.l2;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.s4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.r4;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.u4;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var setOf = kotlin_kotlin.$_$.m7;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.k2;
  var numberToChar = kotlin_kotlin.$_$.lb;
  var equals_0 = kotlin_kotlin.$_$.yc;
  var toByte = kotlin_kotlin.$_$.pb;
  var startsWith = kotlin_kotlin.$_$.qd;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var single = kotlin_kotlin.$_$.nd;
  var Char = kotlin_kotlin.$_$.xe;
  var emptySet = kotlin_kotlin.$_$.i6;
  var plus_0 = kotlin_kotlin.$_$.e7;
  var toInt = kotlin_kotlin.$_$.fe;
  var toList = kotlin_kotlin.$_$.u7;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.y8;
  var NamedValueEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var enumEntries = kotlin_kotlin.$_$.x8;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var toNumber = kotlin_kotlin.$_$.u9;
  var last = kotlin_kotlin.$_$.y6;
  var removeLast = kotlin_kotlin.$_$.j7;
  var lastIndexOf = kotlin_kotlin.$_$.hd;
  var Long = kotlin_kotlin.$_$.hf;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.g2;
  var multiply = kotlin_kotlin.$_$.o9;
  var add = kotlin_kotlin.$_$.a9;
  var subtract = kotlin_kotlin.$_$.t9;
  var compare = kotlin_kotlin.$_$.d9;
  var numberToLong = kotlin_kotlin.$_$.q9;
  var negate = kotlin_kotlin.$_$.p9;
  var charArray = kotlin_kotlin.$_$.ba;
  var indexOf = kotlin_kotlin.$_$.bd;
  var indexOf_0 = kotlin_kotlin.$_$.cd;
  var substring = kotlin_kotlin.$_$.xd;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.k;
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
    this.l2u_1 = configuration;
    this.m2u_1 = serializersModule;
    this.n2u_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).xr = function () {
    return this.m2u_1;
  };
  protoOf(Json).o2u = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.u2u();
    }
  };
  protoOf(Json).p2u = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.ho(), null);
    var result = input.hr(deserializer);
    lexer.h2v();
    return result;
  };
  protoOf(Json).q2u = function (serializer, value) {
    return writeJson(this, value, serializer);
  };
  protoOf(Json).r2u = function (deserializer, element) {
    return readJson(this, element, deserializer);
  };
  protoOf(Json).s2u = function (string) {
    return this.p2u(JsonElementSerializer_getInstance(), string);
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.a2w();
    return new JsonImpl(conf, builder.z2v_1);
  }
  function JsonBuilder(json) {
    this.i2v_1 = json.l2u_1.b2w_1;
    this.j2v_1 = json.l2u_1.g2w_1;
    this.k2v_1 = json.l2u_1.c2w_1;
    this.l2v_1 = json.l2u_1.d2w_1;
    this.m2v_1 = json.l2u_1.f2w_1;
    this.n2v_1 = json.l2u_1.h2w_1;
    this.o2v_1 = json.l2u_1.i2w_1;
    this.p2v_1 = json.l2u_1.k2w_1;
    this.q2v_1 = json.l2u_1.r2w_1;
    this.r2v_1 = json.l2u_1.m2w_1;
    this.s2v_1 = json.l2u_1.n2w_1;
    this.t2v_1 = json.l2u_1.o2w_1;
    this.u2v_1 = json.l2u_1.p2w_1;
    this.v2v_1 = json.l2u_1.q2w_1;
    this.w2v_1 = json.l2u_1.l2w_1;
    this.x2v_1 = json.l2u_1.e2w_1;
    this.y2v_1 = json.l2u_1.j2w_1;
    this.z2v_1 = json.xr();
  }
  protoOf(JsonBuilder).a2w = function () {
    if (this.y2v_1) {
      // Inline function 'kotlin.require' call
      if (!(this.p2v_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.q2v_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.m2v_1) {
      // Inline function 'kotlin.require' call
      if (!(this.n2v_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.n2v_1 === '    ')) {
      var tmp0 = this.n2v_1;
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.n2v_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.i2v_1, this.k2v_1, this.l2v_1, this.x2v_1, this.m2v_1, this.j2v_1, this.n2v_1, this.o2v_1, this.y2v_1, this.p2v_1, this.w2v_1, this.r2v_1, this.s2v_1, this.t2v_1, this.u2v_1, this.v2v_1, this.q2v_1);
  };
  function validateConfiguration($this) {
    if (equals($this.xr(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.l2u_1);
    $this.xr().j18(collector);
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
    this.b2w_1 = encodeDefaults;
    this.c2w_1 = ignoreUnknownKeys;
    this.d2w_1 = isLenient;
    this.e2w_1 = allowStructuredMapKeys;
    this.f2w_1 = prettyPrint;
    this.g2w_1 = explicitNulls;
    this.h2w_1 = prettyPrintIndent;
    this.i2w_1 = coerceInputValues;
    this.j2w_1 = useArrayPolymorphism;
    this.k2w_1 = classDiscriminator;
    this.l2w_1 = allowSpecialFloatingPointValues;
    this.m2w_1 = useAlternativeNames;
    this.n2w_1 = namingStrategy;
    this.o2w_1 = decodeEnumsCaseInsensitive;
    this.p2w_1 = allowTrailingComma;
    this.q2w_1 = allowComments;
    this.r2w_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.b2w_1 + ', ignoreUnknownKeys=' + this.c2w_1 + ', isLenient=' + this.d2w_1 + ', ' + ('allowStructuredMapKeys=' + this.e2w_1 + ', prettyPrint=' + this.f2w_1 + ', explicitNulls=' + this.g2w_1 + ', ') + ("prettyPrintIndent='" + this.h2w_1 + "', coerceInputValues=" + this.i2w_1 + ', useArrayPolymorphism=' + this.j2w_1 + ', ') + ("classDiscriminator='" + this.k2w_1 + "', allowSpecialFloatingPointValues=" + this.l2w_1 + ', ') + ('useAlternativeNames=' + this.m2w_1 + ', namingStrategy=' + toString_0(this.n2w_1) + ', decodeEnumsCaseInsensitive=' + this.o2w_1 + ', ') + ('allowTrailingComma=' + this.p2w_1 + ', allowComments=' + this.q2w_1 + ', classDiscriminatorMode=' + this.r2w_1.toString() + ')');
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
    var tmp0_elvis_lhs = subClass.o();
    var subClassName = tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs;
    var scope = "in the scope of '" + baseClass.o() + "'";
    throw SerializationException_init_$Create$("Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function JsonContentPolymorphicSerializer(baseClass) {
    this.s2w_1 = baseClass;
    this.t2w_1 = buildSerialDescriptor('JsonContentPolymorphicSerializer<' + this.s2w_1.o() + '>', SEALED_getInstance(), []);
  }
  protoOf(JsonContentPolymorphicSerializer).ho = function () {
    return this.t2w_1;
  };
  protoOf(JsonContentPolymorphicSerializer).zo = function (encoder, value) {
    var tmp0_elvis_lhs = encoder.xr().ht(this.s2w_1, value);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? serializerOrNull(getKClassFromExpression(value)) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throwSubtypeNotRegistered(this, getKClassFromExpression(value), this.s2w_1);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var actualSerializer = tmp;
    (isInterface(actualSerializer, KSerializer) ? actualSerializer : THROW_CCE()).io(encoder, value);
  };
  protoOf(JsonContentPolymorphicSerializer).io = function (encoder, value) {
    return this.zo(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(JsonContentPolymorphicSerializer).jo = function (decoder) {
    var input = asJsonDecoder(decoder);
    var tree = input.u2w();
    var tmp = this.v2w(tree);
    var actualSerializer = isInterface(tmp, KSerializer) ? tmp : THROW_CCE();
    return input.w2w().r2u(actualSerializer, tree);
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
    this.x2w_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.x2w_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.x2w_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.x2w_1, ',', '[', ']');
  };
  protoOf(JsonArray).r = function () {
    return this.x2w_1.r();
  };
  protoOf(JsonArray).y2w = function (element) {
    return this.x2w_1.i2(element);
  };
  protoOf(JsonArray).i2 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.y2w(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).t = function () {
    return this.x2w_1.t();
  };
  protoOf(JsonArray).z2w = function (elements) {
    return this.x2w_1.j2(elements);
  };
  protoOf(JsonArray).j2 = function (elements) {
    return this.z2w(elements);
  };
  protoOf(JsonArray).d1 = function (index) {
    return this.x2w_1.d1(index);
  };
  protoOf(JsonArray).a2x = function (element) {
    return this.x2w_1.k2(element);
  };
  protoOf(JsonArray).k2 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.a2x(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).b2x = function (element) {
    return this.x2w_1.l2(element);
  };
  protoOf(JsonArray).l2 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.b2x(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).m2 = function () {
    return this.x2w_1.m2();
  };
  protoOf(JsonArray).n2 = function (index) {
    return this.x2w_1.n2(index);
  };
  protoOf(JsonArray).o2 = function (fromIndex, toIndex) {
    return this.x2w_1.o2(fromIndex, toIndex);
  };
  protoOf(JsonArray).asJsReadonlyArrayView = function () {
    return this.x2w_1.asJsReadonlyArrayView();
  };
  protoOf(JsonArray).e1 = function () {
    return this.x2w_1.e1();
  };
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.l1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.m1();
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
    this.c2x_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.c2x_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.c2x_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.c2x_1.k1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).r = function () {
    return this.c2x_1.r();
  };
  protoOf(JsonObject).i2a = function (key) {
    return this.c2x_1.q2(key);
  };
  protoOf(JsonObject).q2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.i2a((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).d2x = function (value) {
    return this.c2x_1.r2(value);
  };
  protoOf(JsonObject).r2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.d2x(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonObject).k2a = function (key) {
    return this.c2x_1.s2(key);
  };
  protoOf(JsonObject).s2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.k2a((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).asJsReadonlyMapView = function () {
    return this.c2x_1.asJsReadonlyMapView();
  };
  protoOf(JsonObject).e1 = function () {
    return this.c2x_1.e1();
  };
  protoOf(JsonObject).t2 = function () {
    return this.c2x_1.t2();
  };
  protoOf(JsonObject).u2 = function () {
    return this.c2x_1.u2();
  };
  protoOf(JsonObject).k1 = function () {
    return this.c2x_1.k1();
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
    return this.f2x();
  };
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.f2x();
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
    this.g2x_1 = 'null';
  }
  protoOf(JsonNull).e2x = function () {
    return false;
  };
  protoOf(JsonNull).f2x = function () {
    return this.g2x_1;
  };
  protoOf(JsonNull).h2x = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).yz = function (typeParamsSerializers) {
    return this.h2x();
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
    this.i2x_1 = isString;
    this.j2x_1 = coerceToInlineType;
    this.k2x_1 = toString(body);
    if (!(this.j2x_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.j2x_1.qp()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).e2x = function () {
    return this.i2x_1;
  };
  protoOf(JsonLiteral).f2x = function () {
    return this.k2x_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.i2x_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.k2x_1);
      tmp = this_0.toString();
    } else {
      tmp = this.k2x_1;
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
    if (!(this.i2x_1 === other.i2x_1))
      return false;
    if (!(this.k2x_1 === other.k2x_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.i2x_1);
    result = imul(31, result) + getStringHashCode(this.k2x_1) | 0;
    return result;
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.f2x());
  }
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return (new StringJsonLexer(_this__u8e3s4.f2x())).l2x();
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.f2x();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.f2x());
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
      throw NumberFormatException_init_$Create$(_this__u8e3s4.f2x() + ' is not an Int');
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
    var this_0 = _this__u8e3s4.f2x();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDoubleOrNull(this_0);
  }
  function get_doubleOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDoubleOrNull(_this__u8e3s4.f2x());
  }
  function get_boolean(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = toBooleanStrictOrNull_0(_this__u8e3s4.f2x());
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
    tmp.m2x_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonObjectBuilder).n2x = function (key, element) {
    return this.m2x_1.v2(key, element);
  };
  protoOf(JsonObjectBuilder).a2w = function () {
    return new JsonObject(this.m2x_1);
  };
  function JsonArrayBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.o2x_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonArrayBuilder).p2x = function (element) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.o2x_1.b1(element);
    return true;
  };
  protoOf(JsonArrayBuilder).a2w = function () {
    return new JsonArray(this.o2x_1);
  };
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.vo('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.vo('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.vo('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.vo('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.vo('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().q2x_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().r2x_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().s2x_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().t2x_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().u2x_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.v2x_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).ho = function () {
    return this.v2x_1;
  };
  protoOf(JsonElementSerializer).w2x = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.at(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.at(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.at(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(JsonElementSerializer).io = function (encoder, value) {
    return this.w2x(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).jo = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.u2w();
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
    this.x2x_1 = ListSerializer(JsonElementSerializer_getInstance()).ho();
    this.y2x_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).op = function () {
    return this.y2x_1;
  };
  protoOf(JsonArrayDescriptor).tp = function (index) {
    return this.x2x_1.tp(index);
  };
  protoOf(JsonArrayDescriptor).up = function (name) {
    return this.x2x_1.up(name);
  };
  protoOf(JsonArrayDescriptor).vp = function (index) {
    return this.x2x_1.vp(index);
  };
  protoOf(JsonArrayDescriptor).wp = function (index) {
    return this.x2x_1.wp(index);
  };
  protoOf(JsonArrayDescriptor).xp = function (index) {
    return this.x2x_1.xp(index);
  };
  protoOf(JsonArrayDescriptor).pp = function () {
    return this.x2x_1.pp();
  };
  protoOf(JsonArrayDescriptor).hp = function () {
    return this.x2x_1.hp();
  };
  protoOf(JsonArrayDescriptor).qp = function () {
    return this.x2x_1.qp();
  };
  protoOf(JsonArrayDescriptor).rp = function () {
    return this.x2x_1.rp();
  };
  protoOf(JsonArrayDescriptor).sp = function () {
    return this.x2x_1.sp();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.u2x_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).ho = function () {
    return this.u2x_1;
  };
  protoOf(JsonArraySerializer).z2x = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).io(encoder, value);
  };
  protoOf(JsonArraySerializer).io = function (encoder, value) {
    return this.z2x(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).jo = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).jo(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.a2y_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).ho();
    this.b2y_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).op = function () {
    return this.b2y_1;
  };
  protoOf(JsonObjectDescriptor).tp = function (index) {
    return this.a2y_1.tp(index);
  };
  protoOf(JsonObjectDescriptor).up = function (name) {
    return this.a2y_1.up(name);
  };
  protoOf(JsonObjectDescriptor).vp = function (index) {
    return this.a2y_1.vp(index);
  };
  protoOf(JsonObjectDescriptor).wp = function (index) {
    return this.a2y_1.wp(index);
  };
  protoOf(JsonObjectDescriptor).xp = function (index) {
    return this.a2y_1.xp(index);
  };
  protoOf(JsonObjectDescriptor).pp = function () {
    return this.a2y_1.pp();
  };
  protoOf(JsonObjectDescriptor).hp = function () {
    return this.a2y_1.hp();
  };
  protoOf(JsonObjectDescriptor).qp = function () {
    return this.a2y_1.qp();
  };
  protoOf(JsonObjectDescriptor).rp = function () {
    return this.a2y_1.rp();
  };
  protoOf(JsonObjectDescriptor).sp = function () {
    return this.a2y_1.sp();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.t2x_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).ho = function () {
    return this.t2x_1;
  };
  protoOf(JsonObjectSerializer).c2y = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).io(encoder, value);
  };
  protoOf(JsonObjectSerializer).io = function (encoder, value) {
    return this.c2y(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).jo = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).jo(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.q2x_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).ho = function () {
    return this.q2x_1;
  };
  protoOf(JsonPrimitiveSerializer).d2y = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.at(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.at(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).io = function (encoder, value) {
    return this.d2y(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).jo = function (decoder) {
    var result = asJsonDecoder(decoder).u2w();
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
    this.r2x_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).ho = function () {
    return this.r2x_1;
  };
  protoOf(JsonNullSerializer).e2y = function (encoder, value) {
    verify(encoder);
    encoder.ds();
  };
  protoOf(JsonNullSerializer).io = function (encoder, value) {
    return this.e2y(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).jo = function (decoder) {
    verify_0(decoder);
    if (decoder.tq()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.uq();
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
    this.s2x_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).ho = function () {
    return this.s2x_1;
  };
  protoOf(JsonLiteralSerializer).f2y = function (encoder, value) {
    verify(encoder);
    if (value.i2x_1) {
      return encoder.ms(value.k2x_1);
    }
    if (!(value.j2x_1 == null)) {
      return encoder.os(value.j2x_1).ms(value.k2x_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.k2x_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.is(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.k2x_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).pn_1;
      var tmp_1 = encoder.os(serializer_0(Companion_getInstance()).ho());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.is(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.k2x_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.ks(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.k2x_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.es(tmp3_safe_receiver);
    }
    encoder.ms(value.k2x_1);
  };
  protoOf(JsonLiteralSerializer).io = function (encoder, value) {
    return this.f2y(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).jo = function (decoder) {
    var result = asJsonDecoder(decoder).u2w();
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
    var tmp0 = $this.g2y_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
    return tmp0.m1();
  }
  function defer$o$_get_original_$ref_3cje7k() {
    return function (p0) {
      return _get_original__l7ku1m(p0);
    };
  }
  function defer$1($deferred) {
    this.g2y_1 = lazy($deferred);
  }
  protoOf(defer$1).op = function () {
    return _get_original__l7ku1m(this).op();
  };
  protoOf(defer$1).pp = function () {
    return _get_original__l7ku1m(this).pp();
  };
  protoOf(defer$1).rp = function () {
    return _get_original__l7ku1m(this).rp();
  };
  protoOf(defer$1).tp = function (index) {
    return _get_original__l7ku1m(this).tp(index);
  };
  protoOf(defer$1).up = function (name) {
    return _get_original__l7ku1m(this).up(name);
  };
  protoOf(defer$1).vp = function (index) {
    return _get_original__l7ku1m(this).vp(index);
  };
  protoOf(defer$1).wp = function (index) {
    return _get_original__l7ku1m(this).wp(index);
  };
  protoOf(defer$1).xp = function (index) {
    return _get_original__l7ku1m(this).xp(index);
  };
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.i2y_1 = writer;
    this.j2y_1 = true;
  }
  protoOf(Composer).k2y = function () {
    this.j2y_1 = true;
  };
  protoOf(Composer).l2y = function () {
    return Unit_instance;
  };
  protoOf(Composer).m2y = function () {
    this.j2y_1 = false;
  };
  protoOf(Composer).n2y = function () {
    this.j2y_1 = false;
  };
  protoOf(Composer).o2y = function () {
    return Unit_instance;
  };
  protoOf(Composer).p2y = function (v) {
    return this.i2y_1.q2y(v);
  };
  protoOf(Composer).r2y = function (v) {
    return this.i2y_1.s2y(v);
  };
  protoOf(Composer).t2y = function (v) {
    return this.i2y_1.s2y(v.toString());
  };
  protoOf(Composer).u2y = function (v) {
    return this.i2y_1.s2y(v.toString());
  };
  protoOf(Composer).v2y = function (v) {
    return this.i2y_1.w2y(fromInt(v));
  };
  protoOf(Composer).x2y = function (v) {
    return this.i2y_1.w2y(fromInt(v));
  };
  protoOf(Composer).y2y = function (v) {
    return this.i2y_1.w2y(fromInt(v));
  };
  protoOf(Composer).z2y = function (v) {
    return this.i2y_1.w2y(v);
  };
  protoOf(Composer).a2z = function (v) {
    return this.i2y_1.s2y(v.toString());
  };
  protoOf(Composer).b2z = function (value) {
    return this.i2y_1.c2z(value);
  };
  function Composer_0(sb, json) {
    return json.l2u_1.f2w_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.f2z_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).y2y = function (v) {
    if (this.f2z_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.b2z(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.r2y(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).z2y = function (v) {
    if (this.f2z_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.b2z(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.r2y(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).v2y = function (v) {
    if (this.f2z_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.b2z(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.r2y(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).x2y = function (v) {
    if (this.f2z_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.b2z(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.r2y(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.i2z_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).b2z = function (value) {
    if (this.i2z_1) {
      protoOf(Composer).b2z.call(this, value);
    } else {
      protoOf(Composer).r2y.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.l2z_1 = json;
    this.m2z_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).k2y = function () {
    this.j2y_1 = true;
    this.m2z_1 = this.m2z_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).l2y = function () {
    this.m2z_1 = this.m2z_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).m2y = function () {
    this.j2y_1 = false;
    this.r2y('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.m2z_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.r2y(this.l2z_1.l2u_1.h2w_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).n2y = function () {
    if (this.j2y_1)
      this.j2y_1 = false;
    else {
      this.m2y();
    }
  };
  protoOf(ComposerWithPrettyPrint).o2y = function () {
    this.p2y(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.o2z_1 = (!descriptor.xp(index) && descriptor.wp(index).hp());
    return $this.o2z_1;
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
    tmp.n2z_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.o2z_1 = false;
  }
  protoOf(JsonElementMarker).p2z = function (index) {
    this.n2z_1.qx(index);
  };
  protoOf(JsonElementMarker).q2z = function () {
    return this.n2z_1.rx();
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
    _this__u8e3s4.r2z('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.d2v_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.s2z('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
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
    return new JsonEncodingException("Value of type '" + keyDescriptor.op() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.pp().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
    if (json.l2u_1.c2w_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.sp();
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
      var tmp$ret$1 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.up(name);
    if (!(index === -3))
      return index;
    if (!json.l2u_1.m2w_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.op() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.tp(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.pp(), CLASS_getInstance()) ? json.l2u_1.n2w_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.u2z(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.l2u_1.o2w_1 && equals(descriptor.pp(), ENUM_getInstance());
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
    return tmp.u2z(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.rp();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.vp(i);
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
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v2z_1;
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
          tmp_0 = _this__u8e3s4.tp(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.w2z(_this__u8e3s4, i, _this__u8e3s4.tp(i));
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
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.rp();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.tp(tmp_2);
        tmp_1[tmp_2] = $strategy.w2z($this_serializationNamesIndices, tmp_2, baseName);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.pp(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).q2(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.tp(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.tp(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
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
  function resize($this) {
    var newSize = imul($this.z2z_1, 2);
    $this.x2z_1 = copyOf($this.x2z_1, newSize);
    var tmp = 0;
    var tmp_0 = new Int32Array(newSize);
    while (tmp < newSize) {
      tmp_0[tmp] = -1;
      tmp = tmp + 1 | 0;
    }
    var newIndices = tmp_0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.y2z_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
    $this.y2z_1 = newIndices;
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.x2z_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.y2z_1 = tmp_2;
    this.z2z_1 = -1;
  }
  protoOf(JsonPath).a30 = function (sd) {
    this.z2z_1 = this.z2z_1 + 1 | 0;
    var depth = this.z2z_1;
    if (depth === this.x2z_1.length) {
      resize(this);
    }
    this.x2z_1[depth] = sd;
  };
  protoOf(JsonPath).b30 = function (index) {
    this.y2z_1[this.z2z_1] = index;
  };
  protoOf(JsonPath).c30 = function (key) {
    var tmp;
    if (!(this.y2z_1[this.z2z_1] === -2)) {
      this.z2z_1 = this.z2z_1 + 1 | 0;
      tmp = this.z2z_1 === this.x2z_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.x2z_1[this.z2z_1] = key;
    this.y2z_1[this.z2z_1] = -2;
  };
  protoOf(JsonPath).d30 = function () {
    if (this.y2z_1[this.z2z_1] === -2) {
      this.x2z_1[this.z2z_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).e30 = function () {
    var depth = this.z2z_1;
    if (this.y2z_1[depth] === -2) {
      this.y2z_1[depth] = -1;
      this.z2z_1 = this.z2z_1 - 1 | 0;
    }
    if (!(this.z2z_1 === -1)) {
      this.z2z_1 = this.z2z_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).f30 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q('$');
    // Inline function 'kotlin.repeat' call
    var times = this.z2z_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.x2z_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.pp(), LIST_getInstance())) {
            if (!(this.y2z_1[index] === -1)) {
              this_0.q('[');
              this_0.dc(this.y2z_1[index]);
              this_0.q(']');
            }
          } else {
            var idx = this.y2z_1[index];
            if (idx >= 0) {
              this_0.q('.');
              this_0.q(element.tp(idx));
            }
          }
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
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.f30();
  };
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.pp();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.h30_1)
      return Unit_instance;
    if (!$this.i30_1)
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
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.rp();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.tp(i);
        if (name === $this.g30_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, rename property with @SerialName annotation or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function JsonSerializersModuleValidator(configuration) {
    this.g30_1 = configuration.k2w_1;
    this.h30_1 = configuration.j2w_1;
    this.i30_1 = !configuration.r2w_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).s18 = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).v18 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.ho();
    checkKind(this, descriptor, actualClass);
    if (!this.h30_1 && this.i30_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(JsonSerializersModuleValidator).w18 = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).x18 = function (baseClass, defaultDeserializerProvider) {
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().e1();
    var tmp$ret$0 = Array(size);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.at(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.s30_1.w30(6);
    if ($this.s30_1.x30() === 4) {
      $this.s30_1.s2z('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.s30_1.y30()) {
      var key = $this.t30_1 ? $this.s30_1.a31() : $this.s30_1.z30();
      $this.s30_1.w30(5);
      var element = $this.b31();
      // Inline function 'kotlin.collections.set' call
      result.v2(key, element);
      lastToken = $this.s30_1.c31();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.s30_1.s2z('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.s30_1.w30(7);
    } else if (lastToken === 4) {
      if (!$this.u30_1) {
        invalidTrailingComma($this.s30_1);
      }
      $this.s30_1.w30(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, _this__u8e3s4, $completion) {
    var tmp = new $readObjectCOROUTINE$($this, _this__u8e3s4, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function readArray($this) {
    var lastToken = $this.s30_1.c31();
    if ($this.s30_1.x30() === 4) {
      $this.s30_1.s2z('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.s30_1.y30()) {
      var element = $this.b31();
      result.b1(element);
      lastToken = $this.s30_1.c31();
      if (!(lastToken === 4)) {
        var tmp0 = $this.s30_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.d2v_1;
        if (!condition) {
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.s2z(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.s30_1.w30(9);
    } else if (lastToken === 4) {
      if (!$this.u30_1) {
        invalidTrailingComma($this.s30_1, 'array');
      }
      $this.s30_1.w30(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.t30_1 || !isString) {
      tmp = $this.s30_1.a31();
    } else {
      tmp = $this.s30_1.z30();
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
    this.z31_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).d32 = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.e32($this$DeepRecursiveFunction, it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).h9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.d32(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            var tmp0_subject = this.z31_1.s30_1.x30();
            if (tmp0_subject === 1) {
              this.c32_1 = readValue(this.z31_1, true);
              this.n8_1 = 2;
              continue $sm;
            } else {
              if (tmp0_subject === 0) {
                this.c32_1 = readValue(this.z31_1, false);
                this.n8_1 = 2;
                continue $sm;
              } else {
                if (tmp0_subject === 6) {
                  this.n8_1 = 1;
                  suspendResult = readObject_0(this.z31_1, this.a32_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject === 8) {
                    this.c32_1 = readArray(this.z31_1);
                    this.n8_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.z31_1.s30_1.s2z("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.c32_1 = suspendResult;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            return this.c32_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).e32 = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.z31_1, completion);
    i.a32_1 = $this$DeepRecursiveFunction;
    i.b32_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.d32($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l31_1 = _this__u8e3s4;
    this.m31_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 5;
            this.o31_1 = this.l31_1;
            this.p31_1 = this.o31_1.s30_1.w30(6);
            if (this.o31_1.s30_1.x30() === 4) {
              this.o31_1.s30_1.s2z('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.n31_1 = LinkedHashMap_init_$Create$();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!this.o31_1.s30_1.y30()) {
              this.n8_1 = 4;
              continue $sm;
            }

            this.q31_1 = this.o31_1.t30_1 ? this.o31_1.s30_1.a31() : this.o31_1.s30_1.z30();
            this.o31_1.s30_1.w30(5);
            this.n8_1 = 2;
            suspendResult = this.m31_1.vl(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.n31_1;
            var key = this.q31_1;
            tmp0.v2(key, element);
            this.p31_1 = this.o31_1.s30_1.c31();
            var tmp0_subject = this.p31_1;
            if (tmp0_subject === 4) {
              this.n8_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.n8_1 = 4;
                continue $sm;
              } else {
                this.o31_1.s30_1.s2z('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.n8_1 = 1;
            continue $sm;
          case 4:
            if (this.p31_1 === 6) {
              this.o31_1.s30_1.w30(7);
            } else if (this.p31_1 === 4) {
              if (!this.o31_1.u30_1) {
                invalidTrailingComma(this.o31_1.s30_1);
              }
              this.o31_1.s30_1.w30(7);
            }

            return new JsonObject(this.n31_1);
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
    this.s30_1 = lexer;
    this.t30_1 = configuration.d2w_1;
    this.u30_1 = configuration.p2w_1;
    this.v30_1 = 0;
  }
  protoOf(JsonTreeReader).b31 = function () {
    var token = this.s30_1.x30();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.v30_1 = this.v30_1 + 1 | 0;
      if (this.v30_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.v30_1 = this.v30_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.s30_1.s2z('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.sp().t();
    while (_iterator__ex2g4s.u()) {
      var annotation = _iterator__ex2g4s.v();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.f32_1;
    }
    return json.l2u_1.k2w_1;
  }
  function throwJsonElementPolymorphicException(serialName, element) {
    throw new JsonEncodingException('Class with serial name ' + serialName + ' cannot be serialized polymorphically because it is represented as ' + getKClassFromExpression(element).o() + '. Make sure that its JsonTransformingSerializer returns JsonObject, so class discriminator can be added to it.');
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.ho()).i2(classDiscriminator)) {
      var baseName = serializer.ho().op();
      var actualName = actualSerializer.ho().op();
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
    this.t2z_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).g32 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.t2z_1;
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
  protoOf(DescriptorSchemaCache).u2z = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.h32(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.g32(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).h32 = function (descriptor, key) {
    var tmp0_safe_receiver = this.t2z_1.s2(descriptor);
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
    this.i32_1 = discriminatorToSkip;
  }
  function trySkip($this, _this__u8e3s4, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.i32_1 === unknownKey) {
      _this__u8e3s4.i32_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.zr(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.x2u_1.x30() === 4) {
      $this.x2u_1.s2z('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.z2u_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.z2u_1 === -1)) {
        hasComma = $this.x2u_1.k32();
      }
    } else {
      $this.x2u_1.j32(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.x2u_1.y30()) {
      if (decodingKey) {
        if ($this.z2u_1 === -1) {
          var tmp0 = $this.x2u_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.d2v_1;
          if (!condition) {
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.s2z(tmp$ret$0, position);
          }
        } else {
          var tmp0_0 = $this.x2u_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp0_0.d2v_1;
          if (!condition_0) {
            var tmp$ret$2 = 'Expected comma after the key-value pair';
            tmp0_0.s2z(tmp$ret$2, position_0);
          }
        }
      }
      $this.z2u_1 = $this.z2u_1 + 1 | 0;
      tmp = $this.z2u_1;
    } else {
      if (hasComma && !$this.v2u_1.l2u_1.p2w_1) {
        invalidTrailingComma($this.x2u_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.v2u_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.xp(index);
      var elementDescriptor = descriptor.wp(index);
      var tmp;
      if (isOptional && !elementDescriptor.hp()) {
        tmp = $this.x2u_1.l32(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.pp(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.hp()) {
          tmp_0 = $this.x2u_1.l32(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.x2u_1.m32($this.b2v_1.d2w_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.l2u_1.g2w_1 && elementDescriptor.hp();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.x2u_1.z30();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.x2u_1.k32();
    while ($this.x2u_1.y30()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.x2u_1.j32(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.v2u_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.b2v_1.i2w_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.x2u_1.k32();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.c2v_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.p2z(index);
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
    if (hasComma && !$this.v2u_1.l2u_1.p2w_1) {
      invalidTrailingComma($this.x2u_1);
    }
    var tmp1_safe_receiver = $this.c2v_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q2z();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.v2u_1) || trySkip($this, $this.a2v_1, key)) {
      $this.x2u_1.o32($this.b2v_1.d2w_1);
    } else {
      $this.x2u_1.e2v_1.e30();
      $this.x2u_1.n32(key);
    }
    return $this.x2u_1.k32();
  }
  function decodeListIndex($this) {
    var hasComma = $this.x2u_1.k32();
    var tmp;
    if ($this.x2u_1.y30()) {
      if (!($this.z2u_1 === -1) && !hasComma) {
        $this.x2u_1.s2z('Expected end of the array or comma');
      }
      $this.z2u_1 = $this.z2u_1 + 1 | 0;
      tmp = $this.z2u_1;
    } else {
      if (hasComma && !$this.v2u_1.l2u_1.p2w_1) {
        invalidTrailingComma($this.x2u_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.b2v_1.d2w_1) {
      tmp = $this.x2u_1.q32();
    } else {
      tmp = $this.x2u_1.p32();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.v2u_1 = json;
    this.w2u_1 = mode;
    this.x2u_1 = lexer;
    this.y2u_1 = this.v2u_1.xr();
    this.z2u_1 = -1;
    this.a2v_1 = discriminatorHolder;
    this.b2v_1 = this.v2u_1.l2u_1;
    this.c2v_1 = this.b2v_1.g2w_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).w2w = function () {
    return this.v2u_1;
  };
  protoOf(StreamingJsonDecoder).xr = function () {
    return this.y2u_1;
  };
  protoOf(StreamingJsonDecoder).u2w = function () {
    return (new JsonTreeReader(this.v2u_1.l2u_1, this.x2u_1)).b31();
  };
  protoOf(StreamingJsonDecoder).hr = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.v2u_1.l2u_1.j2w_1;
      }
      if (tmp) {
        return deserializer.jo(this);
      }
      var discriminator = classDiscriminator(deserializer.ho(), this.v2u_1);
      var tmp0_elvis_lhs = this.x2u_1.r32(discriminator, this.b2v_1.d2w_1);
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
            tmp_1 = this.w2w().l2u_1.j2w_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.jo(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.ho(), this.w2w());
          var tmp0 = this.u2w();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.ho().op();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).o();
            var tmp_3 = getKClassFromExpression(tmp0).o();
            var tmp$ret$1 = this.x2u_1.e2v_1.f30();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.k2a(discriminator_0);
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
          tmp$ret$0 = readPolymorphicJson(this.w2w(), discriminator_0, jsonTree, actualSerializer);
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
          this.x2u_1.s2z(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.a2v_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.jo(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.bp_1, plus(e.message, ' at path: ') + this.x2u_1.e2v_1.f30(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).ir = function (descriptor) {
    var newMode = switchMode(this.v2u_1, descriptor);
    this.x2u_1.e2v_1.a30(descriptor);
    this.x2u_1.j32(newMode.u32_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.a1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.v2u_1, newMode, this.x2u_1, descriptor, this.a2v_1);
        break;
      default:
        var tmp_0;
        if (this.w2u_1.equals(newMode) && this.v2u_1.l2u_1.g2w_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.v2u_1, newMode, this.x2u_1, descriptor, this.a2v_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).jr = function (descriptor) {
    if (descriptor.rp() === 0 && ignoreUnknownKeys(descriptor, this.v2u_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.x2u_1.k32() && !this.v2u_1.l2u_1.p2w_1) {
      invalidTrailingComma(this.x2u_1, '');
    }
    this.x2u_1.j32(this.w2u_1.v32_1);
    this.x2u_1.e2v_1.e30();
  };
  protoOf(StreamingJsonDecoder).tq = function () {
    var tmp;
    var tmp0_safe_receiver = this.c2v_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o2z_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.x2u_1.w32();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).uq = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).ur = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.w2u_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.x2u_1.e2v_1.d30();
    }
    var value = protoOf(AbstractDecoder).ur.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.x2u_1.e2v_1.c30(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).zr = function (descriptor) {
    var index;
    switch (this.w2u_1.a1_1) {
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
    if (!this.w2u_1.equals(WriteMode_MAP_getInstance())) {
      this.x2u_1.e2v_1.b30(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).vq = function () {
    return this.x2u_1.x32();
  };
  protoOf(StreamingJsonDecoder).wq = function () {
    var value = this.x2u_1.y32();
    if (!equalsLong(value, fromInt(convertToByte(value)))) {
      this.x2u_1.s2z("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  };
  protoOf(StreamingJsonDecoder).xq = function () {
    var value = this.x2u_1.y32();
    if (!equalsLong(value, fromInt(convertToShort(value)))) {
      this.x2u_1.s2z("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  };
  protoOf(StreamingJsonDecoder).yq = function () {
    var value = this.x2u_1.y32();
    if (!equalsLong(value, fromInt(convertToInt(value)))) {
      this.x2u_1.s2z("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  };
  protoOf(StreamingJsonDecoder).zq = function () {
    return this.x2u_1.y32();
  };
  protoOf(StreamingJsonDecoder).ar = function () {
    var tmp0 = this.x2u_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.a31();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.s2z("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.v2u_1.l2u_1.l2w_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.x2u_1, result);
  };
  protoOf(StreamingJsonDecoder).br = function () {
    var tmp0 = this.x2u_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.a31();
      try {
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.s2z("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.v2u_1.l2u_1.l2w_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.x2u_1, result);
  };
  protoOf(StreamingJsonDecoder).cr = function () {
    var string = this.x2u_1.a31();
    if (!(string.length === 1)) {
      this.x2u_1.s2z("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  };
  protoOf(StreamingJsonDecoder).dr = function () {
    var tmp;
    if (this.b2v_1.d2w_1) {
      tmp = this.x2u_1.q32();
    } else {
      tmp = this.x2u_1.z30();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).fr = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.x2u_1, this.v2u_1) : protoOf(AbstractDecoder).fr.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).er = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.v2u_1, this.dr(), ' at path ' + this.x2u_1.e2v_1.f30());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.z32_1 = lexer;
    this.a33_1 = json.xr();
  }
  protoOf(JsonDecoderForUnsignedTypes).xr = function () {
    return this.a33_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).zr = function (descriptor) {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).yq = function () {
    var tmp0 = this.z32_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.a31();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.s2z("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).zq = function () {
    var tmp0 = this.z32_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.a31();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.s2z("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).wq = function () {
    var tmp0 = this.z32_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.a31();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.s2z("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).xq = function () {
    var tmp0 = this.z32_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.a31();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.s2z("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
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
    $this.j30_1.m2y();
    $this.ms(discriminator);
    $this.j30_1.p2y(_Char___init__impl__6a9atx(58));
    $this.j30_1.o2y();
    $this.ms(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.j30_1 = composer;
    this.k30_1 = json;
    this.l30_1 = mode;
    this.m30_1 = modeReuseCache;
    this.n30_1 = this.k30_1.xr();
    this.o30_1 = this.k30_1.l2u_1;
    this.p30_1 = false;
    this.q30_1 = null;
    this.r30_1 = null;
    var i = this.l30_1.a1_1;
    if (!(this.m30_1 == null)) {
      if (!(this.m30_1[i] === null) || !(this.m30_1[i] === this)) {
        this.m30_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).w2w = function () {
    return this.k30_1;
  };
  protoOf(StreamingJsonEncoder).xr = function () {
    return this.n30_1;
  };
  protoOf(StreamingJsonEncoder).h2y = function (element) {
    var tmp;
    if (!(this.q30_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.r30_1, element);
    }
    this.at(JsonElementSerializer_getInstance(), element);
  };
  protoOf(StreamingJsonEncoder).ft = function (descriptor, index) {
    return this.o30_1.b2w_1;
  };
  protoOf(StreamingJsonEncoder).at = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.w2w().l2u_1.j2w_1) {
        serializer.io(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.w2w().l2u_1.r2w_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.w2w().l2u_1.r2w_1.a1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.ho().pp();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.ho(), this.w2w()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.ho()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
          checkKind_0(actual.ho().pp());
        }
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        var serialName = actualSerializer.ho().op();
        this.q30_1 = baseClassDiscriminator;
        this.r30_1 = serialName;
      }
      actualSerializer.io(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).ir = function (descriptor) {
    var newMode = switchMode(this.k30_1, descriptor);
    if (!(newMode.u32_1 === _Char___init__impl__6a9atx(0))) {
      this.j30_1.p2y(newMode.u32_1);
      this.j30_1.k2y();
    }
    var discriminator = this.q30_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.r30_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.op() : tmp0_elvis_lhs);
      this.q30_1 = null;
      this.r30_1 = null;
    }
    if (this.l30_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.m30_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.a1_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.j30_1, this.k30_1, newMode, this.m30_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).jr = function (descriptor) {
    if (!(this.l30_1.v32_1 === _Char___init__impl__6a9atx(0))) {
      this.j30_1.l2y();
      this.j30_1.n2y();
      this.j30_1.p2y(this.l30_1.v32_1);
    }
  };
  protoOf(StreamingJsonEncoder).bs = function (descriptor, index) {
    switch (this.l30_1.a1_1) {
      case 1:
        if (!this.j30_1.j2y_1) {
          this.j30_1.p2y(_Char___init__impl__6a9atx(44));
        }

        this.j30_1.m2y();
        break;
      case 2:
        if (!this.j30_1.j2y_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.j30_1.p2y(_Char___init__impl__6a9atx(44));
            this.j30_1.m2y();
            tmp_0 = true;
          } else {
            this.j30_1.p2y(_Char___init__impl__6a9atx(58));
            this.j30_1.o2y();
            tmp_0 = false;
          }
          tmp.p30_1 = tmp_0;
        } else {
          this.p30_1 = true;
          this.j30_1.m2y();
        }

        break;
      case 3:
        if (index === 0)
          this.p30_1 = true;
        if (index === 1) {
          this.j30_1.p2y(_Char___init__impl__6a9atx(44));
          this.j30_1.o2y();
          this.p30_1 = false;
        }

        break;
      default:
        if (!this.j30_1.j2y_1) {
          this.j30_1.p2y(_Char___init__impl__6a9atx(44));
        }

        this.j30_1.m2y();
        this.ms(getJsonElementName(descriptor, this.k30_1, index));
        this.j30_1.p2y(_Char___init__impl__6a9atx(58));
        this.j30_1.o2y();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).bt = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.o30_1.g2w_1) {
      protoOf(AbstractEncoder).bt.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).os = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.j30_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.j30_1;
      } else {
        var tmp0 = this.j30_1.i2y_1;
        var p1 = this.p30_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
      }
      var tmp$ret$1 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$1, this.k30_1, this.l30_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.j30_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.j30_1;
      } else {
        var tmp0_0 = this.j30_1.i2y_1;
        var p1_0 = this.p30_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
      }
      var tmp$ret$3 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$3, this.k30_1, this.l30_1, null);
    } else if (!(this.q30_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.r30_1 = descriptor.op();
      tmp = this;
    } else {
      tmp = protoOf(AbstractEncoder).os.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).ds = function () {
    this.j30_1.r2y('null');
  };
  protoOf(StreamingJsonEncoder).es = function (value) {
    if (this.p30_1) {
      this.ms(value.toString());
    } else {
      this.j30_1.a2z(value);
    }
  };
  protoOf(StreamingJsonEncoder).fs = function (value) {
    if (this.p30_1) {
      this.ms(value.toString());
    } else {
      this.j30_1.v2y(value);
    }
  };
  protoOf(StreamingJsonEncoder).gs = function (value) {
    if (this.p30_1) {
      this.ms(value.toString());
    } else {
      this.j30_1.x2y(value);
    }
  };
  protoOf(StreamingJsonEncoder).hs = function (value) {
    if (this.p30_1) {
      this.ms(value.toString());
    } else {
      this.j30_1.y2y(value);
    }
  };
  protoOf(StreamingJsonEncoder).is = function (value) {
    if (this.p30_1) {
      this.ms(value.toString());
    } else {
      this.j30_1.z2y(value);
    }
  };
  protoOf(StreamingJsonEncoder).js = function (value) {
    if (this.p30_1) {
      this.ms(value.toString());
    } else {
      this.j30_1.t2y(value);
    }
    if (!this.o30_1.l2w_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.j30_1.i2y_1));
    }
  };
  protoOf(StreamingJsonEncoder).ks = function (value) {
    if (this.p30_1) {
      this.ms(value.toString());
    } else {
      this.j30_1.u2y(value);
    }
    if (!this.o30_1.l2w_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.j30_1.i2y_1));
    }
  };
  protoOf(StreamingJsonEncoder).ls = function (value) {
    this.ms(toString_1(value));
  };
  protoOf(StreamingJsonEncoder).ms = function (value) {
    return this.j30_1.b2z(value);
  };
  protoOf(StreamingJsonEncoder).ns = function (enumDescriptor, index) {
    this.ms(enumDescriptor.tp(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.qp() && get_unsignedNumberDescriptors().i2(_this__u8e3s4);
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.qp() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).ho(), serializer_0(Companion_getInstance()).ho(), serializer_2(Companion_getInstance_1()).ho(), serializer_3(Companion_getInstance_2()).ho()]);
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
    return input.hr(deserializer);
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.h33(tag), toString($this.i33()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.d33_1 = json;
    this.e33_1 = value;
    this.f33_1 = polymorphicDiscriminator;
    this.g33_1 = this.w2w().l2u_1;
  }
  protoOf(AbstractJsonTreeDecoder).w2w = function () {
    return this.d33_1;
  };
  protoOf(AbstractJsonTreeDecoder).m1 = function () {
    return this.e33_1;
  };
  protoOf(AbstractJsonTreeDecoder).xr = function () {
    return this.w2w().xr();
  };
  protoOf(AbstractJsonTreeDecoder).i33 = function () {
    var tmp0_safe_receiver = this.q15();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.j33(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.m1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).h33 = function (currentTag) {
    return this.s15() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).u2w = function () {
    return this.i33();
  };
  protoOf(AbstractJsonTreeDecoder).hr = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.w2w().l2u_1.j2w_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.jo(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.ho(), this.w2w());
      var tmp0 = this.u2w();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.ho().op();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).o();
        var tmp_1 = getKClassFromExpression(tmp0).o();
        var tmp$ret$1 = this.s15();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.k2a(discriminator);
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
      tmp$ret$0 = readPolymorphicJson(this.w2w(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).r15 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).ir = function (descriptor) {
    var currentObject = this.i33();
    var tmp0_subject = descriptor.pp();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.w2w();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.op();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).o();
        var tmp_3 = getKClassFromExpression(currentObject).o();
        var tmp$ret$0 = this.s15();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.w2w();
        var keyDescriptor = carrierDescriptor(descriptor.wp(0), this_0.xr());
        var keyKind = keyDescriptor.pp();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          var tmp_6 = this.w2w();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.op();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).o();
            var tmp_8 = getKClassFromExpression(currentObject).o();
            var tmp$ret$3 = this.s15();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.l2u_1.e2w_1) {
            var tmp_9 = this.w2w();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.op();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).o();
              var tmp_11 = getKClassFromExpression(currentObject).o();
              var tmp$ret$7 = this.s15();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.w2w();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.op();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).o();
          var tmp_14 = getKClassFromExpression(currentObject).o();
          var tmp$ret$12 = this.s15();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.f33_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).jr = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).tq = function () {
    var tmp = this.i33();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).k33 = function (tag, enumDescriptor) {
    var tmp = this.w2w();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.j33(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.op();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp_0 = getKClass(JsonPrimitive).o();
      var tmp_1 = getKClassFromExpression(tmp2).o();
      var tmp$ret$0 = this.h33(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.f2x());
  };
  protoOf(AbstractJsonTreeDecoder).e16 = function (tag, enumDescriptor) {
    return this.k33((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).l33 = function (tag) {
    return !(this.j33(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).u15 = function (tag) {
    return this.l33((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).m33 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j33(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.h33(tag);
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
  protoOf(AbstractJsonTreeDecoder).v15 = function (tag) {
    return this.m33((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).n33 = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j33(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.h33(tag);
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
  protoOf(AbstractJsonTreeDecoder).w15 = function (tag) {
    return this.n33((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).o33 = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j33(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.h33(tag);
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
  protoOf(AbstractJsonTreeDecoder).x15 = function (tag) {
    return this.o33((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).p33 = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j33(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.h33(tag);
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
  protoOf(AbstractJsonTreeDecoder).y15 = function (tag) {
    return this.p33((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).q33 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j33(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.h33(tag);
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
  protoOf(AbstractJsonTreeDecoder).z15 = function (tag) {
    return this.q33((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).r33 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j33(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.h33(tag);
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
    var specialFp = this.w2w().l2u_1.l2w_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.i33()));
  };
  protoOf(AbstractJsonTreeDecoder).a16 = function (tag) {
    return this.r33((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).s33 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j33(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.h33(tag);
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
    var specialFp = this.w2w().l2u_1.l2w_1;
    if (specialFp || isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.i33()));
  };
  protoOf(AbstractJsonTreeDecoder).b16 = function (tag) {
    return this.s33((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).t33 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j33(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.h33(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.f2x()));
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1.v1_1;
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
  protoOf(AbstractJsonTreeDecoder).c16 = function (tag) {
    return this.t33((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).u33 = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.j33(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).o();
      var tmp_0 = getKClassFromExpression(value).o();
      var tmp$ret$0 = this.h33(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.h33(tag), toString(this.i33()));
    if (!value_0.i2x_1 && !this.w2w().l2u_1.d2w_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.h33(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.i33()));
    }
    return value_0.k2x_1;
  };
  protoOf(AbstractJsonTreeDecoder).d16 = function (tag) {
    return this.u33((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).v33 = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.w2w();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.j33(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.op();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp_1 = getKClass(JsonPrimitive).o();
        var tmp_2 = getKClassFromExpression(tmp2).o();
        var tmp$ret$0 = this.h33(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.f2x());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.w2w());
    } else {
      tmp = protoOf(NamedValueDecoder).f16.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).f16 = function (tag, inlineDescriptor) {
    return this.v33((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).fr = function (descriptor) {
    return !(this.q15() == null) ? protoOf(NamedValueDecoder).fr.call(this, descriptor) : (new JsonPrimitiveDecoder(this.w2w(), this.m1(), this.f33_1)).fr(descriptor);
  };
  function setForceNull($this, descriptor, index) {
    $this.f34_1 = (!$this.w2w().l2u_1.g2w_1 && !descriptor.xp(index) && descriptor.wp(index).hp());
    return $this.f34_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.c34_1 = value;
    this.d34_1 = polyDescriptor;
    this.e34_1 = 0;
    this.f34_1 = false;
  }
  protoOf(JsonTreeDecoder).m1 = function () {
    return this.c34_1;
  };
  protoOf(JsonTreeDecoder).zr = function (descriptor) {
    $l$loop: while (this.e34_1 < descriptor.rp()) {
      var _unary__edvuaz = this.e34_1;
      this.e34_1 = _unary__edvuaz + 1 | 0;
      var name = this.l15(descriptor, _unary__edvuaz);
      var index = this.e34_1 - 1 | 0;
      this.f34_1 = false;
      var tmp;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.m1();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).q2(name)) {
        tmp = true;
      } else {
        tmp = setForceNull(this, descriptor, index);
      }
      if (tmp) {
        if (!this.g33_1.i2w_1)
          return index;
        var tmp0 = this.w2w();
        var tmp$ret$3;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.xp(index);
          var elementDescriptor = descriptor.wp(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.hp()) {
            var tmp_1 = this.g34(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$3 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.pp(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.hp()) {
              var tmp_3 = this.g34(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$3 = false;
              break $l$block_2;
            }
            var tmp_4 = this.g34(name);
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
            var coerceToNull = !tmp0.l2u_1.g2w_1 && elementDescriptor.hp();
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
  protoOf(JsonTreeDecoder).tq = function () {
    return !this.f34_1 && protoOf(AbstractJsonTreeDecoder).tq.call(this);
  };
  protoOf(JsonTreeDecoder).m15 = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.w2w());
    var baseName = descriptor.tp(index);
    if (strategy == null) {
      if (!this.g33_1.m2w_1)
        return baseName;
      if (this.m1().t2().i2(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.w2w(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.m1().t2();
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
    var fallbackName = strategy == null ? null : strategy.w2z(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).j33 = function (tag) {
    return getValue(this.m1(), tag);
  };
  protoOf(JsonTreeDecoder).g34 = function (tag) {
    return this.m1().k2a(tag);
  };
  protoOf(JsonTreeDecoder).ir = function (descriptor) {
    if (descriptor === this.d34_1) {
      var tmp = this.w2w();
      var tmp2 = this.i33();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.d34_1.op();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).o();
        var tmp_1 = getKClassFromExpression(tmp2).o();
        var tmp$ret$0 = this.s15();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
      }
      return new JsonTreeDecoder(tmp, tmp2, this.f33_1, this.d34_1);
    }
    return protoOf(AbstractJsonTreeDecoder).ir.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).jr = function (descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.w2w())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.pp();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.w2w());
    var tmp_1;
    if (strategy == null && !this.g33_1.m2w_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.w2w(), descriptor).t2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.w2w()).h32(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.m1().t2().t();
    while (_iterator__ex2g4s.u()) {
      var key = _iterator__ex2g4s.v();
      if (!names.i2(key) && !(key === this.f33_1)) {
        throw JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "' at element: " + this.s15() + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.m1().toString()))));
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.n34_1 = value;
    this.o34_1 = this.n34_1.e1();
    this.p34_1 = -1;
  }
  protoOf(JsonTreeListDecoder).m1 = function () {
    return this.n34_1;
  };
  protoOf(JsonTreeListDecoder).m15 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).j33 = function (tag) {
    return this.n34_1.d1(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).zr = function (descriptor) {
    while (this.p34_1 < (this.o34_1 - 1 | 0)) {
      this.p34_1 = this.p34_1 + 1 | 0;
      return this.p34_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.w34_1 = value;
    this.g16('primitive');
  }
  protoOf(JsonPrimitiveDecoder).m1 = function () {
    return this.w34_1;
  };
  protoOf(JsonPrimitiveDecoder).zr = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).j33 = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.w34_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.h35_1 = value;
    this.i35_1 = toList(this.h35_1.t2());
    this.j35_1 = imul(this.i35_1.e1(), 2);
    this.k35_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).m1 = function () {
    return this.h35_1;
  };
  protoOf(JsonTreeMapDecoder).m15 = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.i35_1.d1(i);
  };
  protoOf(JsonTreeMapDecoder).zr = function (descriptor) {
    while (this.k35_1 < (this.j35_1 - 1 | 0)) {
      this.k35_1 = this.k35_1 + 1 | 0;
      return this.k35_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).j33 = function (tag) {
    return (this.k35_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.h35_1, tag);
  };
  protoOf(JsonTreeMapDecoder).jr = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.ho())).hr(deserializer);
  }
  function writeJson(json, value, serializer) {
    var result = {_v: null};
    var encoder = new JsonTreeEncoder(json, writeJson$lambda(result));
    encoder.at(serializer, value);
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
    tmp.x35_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonTreeEncoder).y35 = function (key, element) {
    // Inline function 'kotlin.collections.set' call
    this.x35_1.v2(key, element);
  };
  protoOf(JsonTreeEncoder).bt = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.o35_1.g2w_1) {
      protoOf(AbstractJsonTreeEncoder).bt.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(JsonTreeEncoder).z35 = function () {
    return new JsonObject(this.x35_1);
  };
  function inlineUnsignedNumberEncoder($this, tag) {
    return new AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1($this, tag);
  }
  function inlineUnquotedLiteralEncoder($this, tag, inlineDescriptor) {
    return new AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1($this, tag, inlineDescriptor);
  }
  function AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1(this$0, $tag) {
    this.o36_1 = this$0;
    this.p36_1 = $tag;
    AbstractEncoder.call(this);
    this.n36_1 = this$0.m35_1.xr();
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).xr = function () {
    return this.n36_1;
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).q36 = function (s) {
    return this.o36_1.y35(this.p36_1, new JsonLiteral(s, false));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).hs = function (value) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
    return this.q36(UInt__toString_impl_dbgl21(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).is = function (value) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(value);
    return this.q36(ULong__toString_impl_f9au7k(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).fs = function (value) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
    return this.q36(UByte__toString_impl_v72jg(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).gs = function (value) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(value);
    return this.q36(UShort__toString_impl_edaoee(tmp$ret$0));
  };
  function AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1(this$0, $tag, $inlineDescriptor) {
    this.r36_1 = this$0;
    this.s36_1 = $tag;
    this.t36_1 = $inlineDescriptor;
    AbstractEncoder.call(this);
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).xr = function () {
    return this.r36_1.m35_1.xr();
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).ms = function (value) {
    return this.r36_1.y35(this.s36_1, new JsonLiteral(value, false, this.t36_1));
  };
  function AbstractJsonTreeEncoder$beginStructure$lambda(this$0) {
    return function (node) {
      this$0.y35(this$0.z16(), node);
      return Unit_instance;
    };
  }
  function AbstractJsonTreeEncoder(json, nodeConsumer) {
    NamedValueEncoder.call(this);
    this.m35_1 = json;
    this.n35_1 = nodeConsumer;
    this.o35_1 = this.m35_1.l2u_1;
    this.p35_1 = null;
    this.q35_1 = null;
  }
  protoOf(AbstractJsonTreeEncoder).w2w = function () {
    return this.m35_1;
  };
  protoOf(AbstractJsonTreeEncoder).xr = function () {
    return this.m35_1.xr();
  };
  protoOf(AbstractJsonTreeEncoder).m15 = function (descriptor, index) {
    return getJsonElementName(descriptor, this.m35_1, index);
  };
  protoOf(AbstractJsonTreeEncoder).h2y = function (element) {
    var tmp;
    if (!(this.p35_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.q35_1, element);
    }
    this.at(JsonElementSerializer_getInstance(), element);
  };
  protoOf(AbstractJsonTreeEncoder).ft = function (descriptor, index) {
    return this.o35_1.b2w_1;
  };
  protoOf(AbstractJsonTreeEncoder).r15 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeEncoder).dt = function () {
  };
  protoOf(AbstractJsonTreeEncoder).ds = function () {
    var tmp0_elvis_lhs = this.q15();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.n35_1(JsonNull_getInstance());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tag = tmp;
    this.a36(tag);
  };
  protoOf(AbstractJsonTreeEncoder).a36 = function (tag) {
    return this.y35(tag, JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeEncoder).m16 = function (tag) {
    return this.a36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeEncoder).b36 = function (tag, value) {
    return this.y35(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).n16 = function (tag, value) {
    return this.b36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).c36 = function (tag, value) {
    return this.y35(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).o16 = function (tag, value) {
    return this.c36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).d36 = function (tag, value) {
    return this.y35(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).p16 = function (tag, value) {
    return this.d36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).e36 = function (tag, value) {
    return this.y35(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).q16 = function (tag, value) {
    return this.e36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).f36 = function (tag, value) {
    this.y35(tag, JsonPrimitive_1(value));
    if (!this.o35_1.l2w_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded_0(value, tag, toString(this.z35()));
    }
  };
  protoOf(AbstractJsonTreeEncoder).r16 = function (tag, value) {
    return this.f36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).at = function (serializer, value) {
    if (!(this.q15() == null) || !get_requiresTopLevelTag(carrierDescriptor(serializer.ho(), this.xr()))) {
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
        if (this.w2w().l2u_1.j2w_1) {
          serializer.io(this, value);
          break $l$block;
        }
        var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
        var tmp;
        if (isPolymorphicSerializer) {
          tmp = !this.w2w().l2u_1.r2w_1.equals(ClassDiscriminatorMode_NONE_getInstance());
        } else {
          var tmp_0;
          switch (this.w2w().l2u_1.r2w_1.a1_1) {
            case 0:
            case 2:
              tmp_0 = false;
              break;
            case 1:
              // Inline function 'kotlin.let' call

              var it = serializer.ho().pp();
              tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp = tmp_0;
        }
        var needDiscriminator = tmp;
        var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.ho(), this.w2w()) : null;
        var tmp_1;
        if (isPolymorphicSerializer) {
          var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
          $l$block_0: {
            // Inline function 'kotlin.requireNotNull' call
            if (value == null) {
              var message = 'Value for serializer ' + toString(serializer.ho()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            } else {
              break $l$block_0;
            }
          }
          var actual = findPolymorphicSerializer_0(casted, this, value);
          if (!(baseClassDiscriminator == null)) {
            access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
            checkKind_0(actual.ho().pp());
          }
          tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
        } else {
          tmp_1 = serializer;
        }
        var actualSerializer = tmp_1;
        if (!(baseClassDiscriminator == null)) {
          var serialName = actualSerializer.ho().op();
          this.p35_1 = baseClassDiscriminator;
          this.q35_1 = serialName;
        }
        actualSerializer.io(this, value);
      }
    } else {
      // Inline function 'kotlin.apply' call
      (new JsonPrimitiveEncoder(this.m35_1, this.n35_1)).at(serializer, value);
    }
  };
  protoOf(AbstractJsonTreeEncoder).g36 = function (tag, value) {
    this.y35(tag, JsonPrimitive_1(value));
    if (!this.o35_1.l2w_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded_0(value, tag, toString(this.z35()));
    }
  };
  protoOf(AbstractJsonTreeEncoder).s16 = function (tag, value) {
    return this.g36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).h36 = function (tag, value) {
    return this.y35(tag, JsonPrimitive_2(value));
  };
  protoOf(AbstractJsonTreeEncoder).t16 = function (tag, value) {
    return this.h36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).i36 = function (tag, value) {
    return this.y35(tag, JsonPrimitive_0(toString_1(value)));
  };
  protoOf(AbstractJsonTreeEncoder).u16 = function (tag, value) {
    return this.i36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).j36 = function (tag, value) {
    return this.y35(tag, JsonPrimitive_0(value));
  };
  protoOf(AbstractJsonTreeEncoder).v16 = function (tag, value) {
    return this.j36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).k36 = function (tag, enumDescriptor, ordinal) {
    return this.y35(tag, JsonPrimitive_0(enumDescriptor.tp(ordinal)));
  };
  protoOf(AbstractJsonTreeEncoder).w16 = function (tag, enumDescriptor, ordinal) {
    return this.k36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor, ordinal);
  };
  protoOf(AbstractJsonTreeEncoder).l36 = function (tag, value) {
    this.y35(tag, JsonPrimitive_0(toString(value)));
  };
  protoOf(AbstractJsonTreeEncoder).k16 = function (tag, value) {
    return this.l36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).m36 = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? inlineUnsignedNumberEncoder(this, tag) : get_isUnquotedLiteral(inlineDescriptor) ? inlineUnquotedLiteralEncoder(this, tag, inlineDescriptor) : protoOf(NamedValueEncoder).x16.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).x16 = function (tag, inlineDescriptor) {
    return this.m36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).os = function (descriptor) {
    var tmp;
    if (!(this.q15() == null)) {
      if (!(this.p35_1 == null))
        this.q35_1 = descriptor.op();
      tmp = protoOf(NamedValueEncoder).os.call(this, descriptor);
    } else {
      tmp = (new JsonPrimitiveEncoder(this.m35_1, this.n35_1)).os(descriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeEncoder).ir = function (descriptor) {
    var tmp;
    if (this.q15() == null) {
      tmp = this.n35_1;
    } else {
      tmp = AbstractJsonTreeEncoder$beginStructure$lambda(this);
    }
    var consumer = tmp;
    var tmp0_subject = descriptor.pp();
    var tmp_0;
    var tmp_1;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_1) {
      tmp_0 = new JsonTreeListEncoder(this.m35_1, consumer);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.m35_1;
        var keyDescriptor = carrierDescriptor(descriptor.wp(0), this_0.xr());
        var keyKind = keyDescriptor.pp();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          tmp_2 = new JsonTreeMapEncoder(this.m35_1, consumer);
        } else {
          if (this_0.l2u_1.e2w_1) {
            tmp_2 = new JsonTreeListEncoder(this.m35_1, consumer);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp_0 = tmp_2;
      } else {
        tmp_0 = new JsonTreeEncoder(this.m35_1, consumer);
      }
    }
    var encoder = tmp_0;
    var discriminator = this.p35_1;
    if (!(discriminator == null)) {
      if (encoder instanceof JsonTreeMapEncoder) {
        encoder.y35('key', JsonPrimitive_0(discriminator));
        var tmp1_elvis_lhs = this.q35_1;
        encoder.y35('value', JsonPrimitive_0(tmp1_elvis_lhs == null ? descriptor.op() : tmp1_elvis_lhs));
      } else {
        var tmp2_elvis_lhs = this.q35_1;
        encoder.y35(discriminator, JsonPrimitive_0(tmp2_elvis_lhs == null ? descriptor.op() : tmp2_elvis_lhs));
      }
      this.p35_1 = null;
      this.q35_1 = null;
    }
    return encoder;
  };
  protoOf(AbstractJsonTreeEncoder).y16 = function (descriptor) {
    this.n35_1(this.z35());
  };
  function get_requiresTopLevelTag(_this__u8e3s4) {
    var tmp;
    var tmp_0 = _this__u8e3s4.pp();
    if (tmp_0 instanceof PrimitiveKind) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.pp() === ENUM_getInstance();
    }
    return tmp;
  }
  function JsonPrimitiveEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    this.j37_1 = null;
    this.g16('primitive');
  }
  protoOf(JsonPrimitiveEncoder).y35 = function (key, element) {
    // Inline function 'kotlin.require' call
    if (!(key === 'primitive')) {
      var message = "This output can only consume primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.j37_1 == null)) {
      var message_0 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.j37_1 = element;
    this.n35_1(element);
  };
  protoOf(JsonPrimitiveEncoder).z35 = function () {
    var tmp0 = this.j37_1;
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
    tmp.q37_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonTreeListEncoder).m15 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListEncoder).y35 = function (key, element) {
    var idx = toInt(key);
    this.q37_1.a3(idx, element);
  };
  protoOf(JsonTreeListEncoder).z35 = function () {
    return new JsonArray(this.q37_1);
  };
  function _get_tag__e6h4qf($this) {
    var tmp = $this.b37_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('tag');
    }
  }
  function JsonTreeMapEncoder(json, nodeConsumer) {
    JsonTreeEncoder.call(this, json, nodeConsumer);
    this.c37_1 = true;
  }
  protoOf(JsonTreeMapEncoder).y35 = function (key, element) {
    if (this.c37_1) {
      var tmp = this;
      var tmp_0;
      if (element instanceof JsonPrimitive) {
        tmp_0 = element.f2x();
      } else {
        if (element instanceof JsonObject) {
          throw InvalidKeyKindException(JsonObjectSerializer_getInstance().t2x_1);
        } else {
          if (element instanceof JsonArray) {
            throw InvalidKeyKindException(JsonArraySerializer_getInstance().u2x_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      tmp.b37_1 = tmp_0;
      this.c37_1 = false;
    } else {
      var tmp0 = this.x35_1;
      // Inline function 'kotlin.collections.set' call
      var key_0 = _get_tag__e6h4qf(this);
      tmp0.v2(key_0, element);
      this.c37_1 = true;
    }
  };
  protoOf(JsonTreeMapEncoder).z35 = function () {
    return new JsonObject(this.x35_1);
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
    this.u32_1 = begin;
    this.v32_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.pp();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.wp(0), _this__u8e3s4.xr());
          var keyKind = keyDescriptor.pp();
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
            if (_this__u8e3s4.l2u_1.e2w_1) {
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
    if (equals(_this__u8e3s4.pp(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.qp()) {
      tmp = carrierDescriptor(_this__u8e3s4.wp(0), module_0);
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
    $this.r37(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.r37(lastPosition, currentPosition);
    var result = $this.g2v_1.toString();
    $this.g2v_1.gc(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.f2v_1);
    $this.f2v_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.s37(), $this.d2v_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.t37(currentPosition);
    if (currentPosition === -1) {
      $this.s2z('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.s37();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.s37(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.s2z("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.g2v_1.s(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.d2v_1 = startPos;
      $this.u37();
      if (($this.d2v_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.s2z('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.d2v_1);
    }
    $this.g2v_1.s(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.s2z("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.t37(start);
    if (current >= charSequenceLength($this.s37()) || current === -1) {
      $this.s2z('EOF');
    }
    var tmp = $this.s37();
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
        $this.s2z("Expected valid boolean literal prefix, but had '" + $this.a31() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.s37()) - current | 0) < literalSuffix.length) {
      $this.s2z('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charCodeAt(literalSuffix, i);
        var actual = charSequenceGet($this.s37(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.s2z("Expected valid boolean literal prefix, but had '" + $this.a31() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.d2v_1 = current + literalSuffix.length | 0;
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
    this.d2v_1 = 0;
    this.e2v_1 = new JsonPath();
    this.f2v_1 = null;
    this.g2v_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).u37 = function () {
  };
  protoOf(AbstractJsonLexer).k32 = function () {
    var current = this.v37();
    var source = this.s37();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.d2v_1 = this.d2v_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).w37 = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).h2v = function () {
    var nextToken = this.c31();
    if (!(nextToken === 10)) {
      this.s2z('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.s37(), this.d2v_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).w30 = function (expected) {
    var token = this.c31();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true ? this.d2v_1 - 1 | 0 : this.d2v_1;
      var s = this.d2v_1 === charSequenceLength(this.s37()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.s37(), position));
      var tmp$ret$0 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.s2z(tmp$ret$0, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).x37 = function (expected) {
    if (this.d2v_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.d2v_1;
        try {
          this.d2v_1 = this.d2v_1 - 1 | 0;
          tmp$ret$1 = this.a31();
          break $l$block;
        }finally {
          this.d2v_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.r2z("Expected string literal but 'null' literal was found", this.d2v_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true ? this.d2v_1 - 1 | 0 : this.d2v_1;
    var s = this.d2v_1 === charSequenceLength(this.s37()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.s37(), position));
    var tmp$ret$2 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.s2z(tmp$ret$2, position);
  };
  protoOf(AbstractJsonLexer).x30 = function () {
    var source = this.s37();
    var cpos = this.d2v_1;
    $l$loop_0: while (true) {
      cpos = this.t37(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.d2v_1 = cpos;
      return charToTokenClass(ch);
    }
    this.d2v_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).l32 = function (doConsume) {
    var current = this.v37();
    current = this.t37(current);
    var len = charSequenceLength(this.s37()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.s37(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.s37(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.d2v_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).w32 = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.l32(doConsume) : $super.l32.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).m32 = function (isLenient) {
    var token = this.x30();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.a31();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.z30();
    }
    var string = tmp;
    this.f2v_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).y37 = function () {
    this.f2v_1 = null;
  };
  protoOf(AbstractJsonLexer).s19 = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.s37();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).z30 = function () {
    if (!(this.f2v_1 == null)) {
      return takePeeked(this);
    }
    return this.p32();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.t37(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.s2z('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.r37(lastPosition, currentPosition);
          currentPosition = this.t37(currentPosition);
          if (currentPosition === -1) {
            this.s2z('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.s19(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.d2v_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).q32 = function () {
    var result = this.a31();
    if (result === 'null' && wasUnquotedString(this)) {
      this.s2z("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).a31 = function () {
    if (!(this.f2v_1 == null)) {
      return takePeeked(this);
    }
    var current = this.v37();
    if (current >= charSequenceLength(this.s37()) || current === -1) {
      this.s2z('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.s37(), current));
    if (token === 1) {
      return this.z30();
    }
    if (!(token === 0)) {
      this.s2z('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.s37(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.s37(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.s37())) {
        usedAppend = true;
        this.r37(this.d2v_1, current);
        var eof = this.t37(current);
        if (eof === -1) {
          this.d2v_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.s19(this.d2v_1, current);
    } else {
      tmp = decodedString(this, this.d2v_1, current);
    }
    var result = tmp;
    this.d2v_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).r37 = function (fromIndex, toIndex) {
    this.g2v_1.ac(this.s37(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).o32 = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.x30();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.a31();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.x30();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.a31();
        else
          this.p32();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.b1(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.d2v_1, 'found ] instead of } at path: ' + this.e2v_1.toString(), this.s37());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.d2v_1, 'found } instead of ] at path: ' + this.e2v_1.toString(), this.s37());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.s2z('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.c31();
      if (tokenStack.e1() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.s37()) + "', currentPosition=" + this.d2v_1 + ')';
  };
  protoOf(AbstractJsonLexer).n32 = function (key) {
    var processed = this.s19(0, this.d2v_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    throw new JsonDecodingException("Encountered an unknown key '" + key + "' at offset " + lastIndexOf_0 + ' at path: ' + this.e2v_1.f30() + "\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.s37(), lastIndexOf_0))));
  };
  protoOf(AbstractJsonLexer).r2z = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.e2v_1.f30() + hintMessage, this.s37());
  };
  protoOf(AbstractJsonLexer).s2z = function (message, position, hint, $super) {
    position = position === VOID ? this.d2v_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.r2z(message, position, hint) : $super.r2z.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).y32 = function () {
    var current = this.v37();
    current = this.t37(current);
    if (current >= charSequenceLength(this.s37()) || current === -1) {
      this.s2z('EOF');
    }
    var tmp;
    if (charSequenceGet(this.s37(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.s37())) {
        this.s2z('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.s37()))) {
      var ch = charSequenceGet(this.s37(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.s2z('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.s2z("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.s2z("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.s2z("Unexpected symbol '-' in numeric literal");
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
        this.s2z("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
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
        this.s2z('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.s2z('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.s2z('EOF');
      }
      if (!(charSequenceGet(this.s37(), current) === _Char___init__impl__6a9atx(34))) {
        this.s2z('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.d2v_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(new Long(-1, 2147483647)) || doubleAccumulator < toNumber(new Long(0, -2147483648))) {
        this.s2z('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.s2z("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!equalsLong(accumulator, new Long(0, -2147483648))) {
      tmp_0 = negate(accumulator);
    } else {
      this.s2z('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).l2x = function () {
    var result = this.y32();
    var next = this.c31();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true ? this.d2v_1 - 1 | 0 : this.d2v_1;
      var s = this.d2v_1 === charSequenceLength(this.s37()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.s37(), position));
      var tmp$ret$0 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.s2z(tmp$ret$0, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).x32 = function () {
    var current = this.v37();
    if (current === charSequenceLength(this.s37())) {
      this.s2z('EOF');
    }
    var tmp;
    if (charSequenceGet(this.s37(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.d2v_1 === charSequenceLength(this.s37())) {
        this.s2z('EOF');
      }
      if (!(charSequenceGet(this.s37(), this.d2v_1) === _Char___init__impl__6a9atx(34))) {
        this.s2z('Expected closing quotation mark');
      }
      this.d2v_1 = this.d2v_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().a38_1;
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
    return c < 117 ? CharMappings_getInstance().z37_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.z37_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.a38_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.z37_1 = charArray(117);
    this.a38_1 = new Int8Array(126);
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
  protoOf(StringJsonLexerWithComments).c31 = function () {
    var source = this.s37();
    var cpos = this.v37();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.d2v_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).y30 = function () {
    var current = this.v37();
    if (current >= this.s37().length || current === -1)
      return false;
    return this.w37(charCodeAt(this.s37(), current));
  };
  protoOf(StringJsonLexerWithComments).j32 = function (expected) {
    var source = this.s37();
    var current = this.v37();
    if (current >= source.length || current === -1) {
      this.d2v_1 = -1;
      this.x37(expected);
    }
    var c = charCodeAt(source, current);
    this.d2v_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.x37(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).x30 = function () {
    var source = this.s37();
    var cpos = this.v37();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.d2v_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).v37 = function () {
    var current = this.d2v_1;
    if (current === -1)
      return current;
    var source = this.s37();
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
            this.d2v_1 = source.length;
            this.s2z('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.d2v_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.k38_1 = source;
  }
  protoOf(StringJsonLexer).s37 = function () {
    return this.k38_1;
  };
  protoOf(StringJsonLexer).t37 = function (position) {
    return position < this.s37().length ? position : -1;
  };
  protoOf(StringJsonLexer).c31 = function () {
    var source = this.s37();
    var cpos = this.d2v_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.d2v_1 = cpos;
      return charToTokenClass(c);
    }
    this.d2v_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).y30 = function () {
    var current = this.d2v_1;
    if (current === -1)
      return false;
    var source = this.s37();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.d2v_1 = current;
      return this.w37(c);
    }
    this.d2v_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).v37 = function () {
    var current = this.d2v_1;
    if (current === -1)
      return current;
    var source = this.s37();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.d2v_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).j32 = function (expected) {
    if (this.d2v_1 === -1) {
      this.x37(expected);
    }
    var source = this.s37();
    var cpos = this.d2v_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.d2v_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.x37(expected);
    }
    this.d2v_1 = -1;
    this.x37(expected);
  };
  protoOf(StringJsonLexer).p32 = function () {
    this.j32(_Char___init__impl__6a9atx(34));
    var current = this.d2v_1;
    var closingQuote = indexOf_0(this.s37(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.a31();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false ? this.d2v_1 - 1 | 0 : this.d2v_1;
      var s = this.d2v_1 === charSequenceLength(this.s37()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.s37(), position));
      var tmp$ret$0 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.s2z(tmp$ret$0, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.s37(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.s37(), this.d2v_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.d2v_1 = closingQuote + 1 | 0;
    return substring(this.s37(), current, closingQuote);
  };
  protoOf(StringJsonLexer).r32 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.d2v_1;
    try {
      if (!(this.c31() === 6))
        return null;
      var firstKey = this.m32(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.y37();
      if (!(this.c31() === 5))
        return null;
      return this.m32(isLenient);
    }finally {
      this.d2v_1 = positionSnapshot;
      this.y37();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.l2u_1.q2w_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.n2u_1;
  }
  function JsonToStringWriter() {
    this.t2u_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).w2y = function (value) {
    this.t2u_1.ec(value);
  };
  protoOf(JsonToStringWriter).q2y = function (char) {
    this.t2u_1.s(char);
  };
  protoOf(JsonToStringWriter).s2y = function (text) {
    this.t2u_1.q(text);
  };
  protoOf(JsonToStringWriter).c2z = function (text) {
    printQuoted(this.t2u_1, text);
  };
  protoOf(JsonToStringWriter).u2u = function () {
    this.t2u_1.hc();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.t2u_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).hp = get_isNullable;
  protoOf(defer$1).qp = get_isInline;
  protoOf(defer$1).sp = get_annotations;
  protoOf(JsonSerializersModuleValidator).u18 = contextual;
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
