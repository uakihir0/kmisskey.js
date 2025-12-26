(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.mb;
  var initMetadataForInterface = kotlin_kotlin.$_$.qa;
  var VOID = kotlin_kotlin.$_$.b;
  var getKClassFromExpression = kotlin_kotlin.$_$.dc;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.h4;
  var Unit_instance = kotlin_kotlin.$_$.u4;
  var emptyList = kotlin_kotlin.$_$.f6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.gg;
  var KProperty1 = kotlin_kotlin.$_$.jc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ja;
  var toString = kotlin_kotlin.$_$.pb;
  var initMetadataForClass = kotlin_kotlin.$_$.ma;
  var objectCreate = kotlin_kotlin.$_$.lb;
  var captureStack = kotlin_kotlin.$_$.x9;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.h1;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.j1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.l1;
  var IllegalArgumentException = kotlin_kotlin.$_$.df;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.n5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.o2;
  var THROW_CCE = kotlin_kotlin.$_$.kf;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.n2;
  var isInterface = kotlin_kotlin.$_$.bb;
  var KClass = kotlin_kotlin.$_$.gc;
  var Triple = kotlin_kotlin.$_$.lf;
  var getKClass = kotlin_kotlin.$_$.ec;
  var Pair = kotlin_kotlin.$_$.hf;
  var Entry = kotlin_kotlin.$_$.c5;
  var KtMap = kotlin_kotlin.$_$.e5;
  var KtMutableMap = kotlin_kotlin.$_$.g5;
  var LinkedHashMap = kotlin_kotlin.$_$.z4;
  var HashMap = kotlin_kotlin.$_$.x4;
  var KtSet = kotlin_kotlin.$_$.i5;
  var KtMutableSet = kotlin_kotlin.$_$.h5;
  var LinkedHashSet = kotlin_kotlin.$_$.a5;
  var HashSet = kotlin_kotlin.$_$.y4;
  var Collection = kotlin_kotlin.$_$.w4;
  var KtList = kotlin_kotlin.$_$.b5;
  var KtMutableList = kotlin_kotlin.$_$.f5;
  var ArrayList = kotlin_kotlin.$_$.v4;
  var copyToArray = kotlin_kotlin.$_$.d6;
  var Result = kotlin_kotlin.$_$.if;
  var ensureNotNull = kotlin_kotlin.$_$.bg;
  var equals = kotlin_kotlin.$_$.ga;
  var getStringHashCode = kotlin_kotlin.$_$.ka;
  var isBlank = kotlin_kotlin.$_$.bd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var toList = kotlin_kotlin.$_$.u7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var toHashSet = kotlin_kotlin.$_$.r7;
  var toBooleanArray = kotlin_kotlin.$_$.p7;
  var withIndex = kotlin_kotlin.$_$.a8;
  var to = kotlin_kotlin.$_$.mg;
  var toMap = kotlin_kotlin.$_$.w7;
  var lazy_0 = kotlin_kotlin.$_$.hg;
  var contentEquals = kotlin_kotlin.$_$.o5;
  var initMetadataForObject = kotlin_kotlin.$_$.sa;
  var Long = kotlin_kotlin.$_$.ff;
  var Char = kotlin_kotlin.$_$.ve;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.c2;
  var Duration = kotlin_kotlin.$_$.qe;
  var Companion_getInstance = kotlin_kotlin.$_$.k4;
  var Instant = kotlin_kotlin.$_$.re;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.l4;
  var Uuid = kotlin_kotlin.$_$.se;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.m4;
  var toIntOrNull = kotlin_kotlin.$_$.ce;
  var hashCode = kotlin_kotlin.$_$.la;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var isArray = kotlin_kotlin.$_$.ta;
  var arrayIterator = kotlin_kotlin.$_$.v9;
  var asList = kotlin_kotlin.$_$.l5;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.i;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.s;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var until = kotlin_kotlin.$_$.zb;
  var step = kotlin_kotlin.$_$.yb;
  var getValue = kotlin_kotlin.$_$.n6;
  var longArray = kotlin_kotlin.$_$.gb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.na;
  var get_lastIndex = kotlin_kotlin.$_$.u6;
  var shiftLeft = kotlin_kotlin.$_$.p9;
  var bitwiseOr = kotlin_kotlin.$_$.a9;
  var equalsLong = kotlin_kotlin.$_$.g9;
  var invert = kotlin_kotlin.$_$.i9;
  var countTrailingZeroBits = kotlin_kotlin.$_$.zf;
  var indexOf = kotlin_kotlin.$_$.o6;
  var contentToString = kotlin_kotlin.$_$.s5;
  var Enum = kotlin_kotlin.$_$.af;
  var joinToString = kotlin_kotlin.$_$.r6;
  var toString_0 = kotlin_kotlin.$_$.lg;
  var KTypeParameter = kotlin_kotlin.$_$.kc;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.m;
  var booleanArray = kotlin_kotlin.$_$.w9;
  var emptyMap = kotlin_kotlin.$_$.g6;
  var contentHashCode = kotlin_kotlin.$_$.r5;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.c4;
  var isByteArray = kotlin_kotlin.$_$.va;
  var coerceAtLeast = kotlin_kotlin.$_$.ub;
  var copyOf = kotlin_kotlin.$_$.y5;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.n4;
  var isCharArray = kotlin_kotlin.$_$.wa;
  var charArray = kotlin_kotlin.$_$.z9;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.d4;
  var isDoubleArray = kotlin_kotlin.$_$.ya;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.e4;
  var isFloatArray = kotlin_kotlin.$_$.za;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.o4;
  var isLongArray = kotlin_kotlin.$_$.j9;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.s4;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.o3;
  var ULongArray = kotlin_kotlin.$_$.qf;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.k3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.h3;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.m3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.i3;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.f4;
  var isIntArray = kotlin_kotlin.$_$.ab;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.r4;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.f3;
  var UIntArray = kotlin_kotlin.$_$.of;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.b3;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.y2;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.d3;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.z2;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.g4;
  var isShortArray = kotlin_kotlin.$_$.db;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.t4;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.x3;
  var UShortArray = kotlin_kotlin.$_$.sf;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.t3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.q3;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.v3;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.r3;
  var Companion_getInstance_7 = kotlin_kotlin.$_$.q4;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.w2;
  var UByteArray = kotlin_kotlin.$_$.mf;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.t2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.p2;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.u2;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.q2;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.b4;
  var isBooleanArray = kotlin_kotlin.$_$.ua;
  var copyOf_0 = kotlin_kotlin.$_$.x5;
  var copyOf_1 = kotlin_kotlin.$_$.z5;
  var copyOf_2 = kotlin_kotlin.$_$.a6;
  var copyOf_3 = kotlin_kotlin.$_$.v5;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.p3;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.l3;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.n3;
  var copyOf_4 = kotlin_kotlin.$_$.c6;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.g3;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.c3;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.e3;
  var copyOf_5 = kotlin_kotlin.$_$.u5;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.y3;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.u3;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.w3;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.x2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.s2;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.v2;
  var copyOf_6 = kotlin_kotlin.$_$.w5;
  var trimIndent = kotlin_kotlin.$_$.ne;
  var Unit = kotlin_kotlin.$_$.uf;
  var charSequenceLength = kotlin_kotlin.$_$.ca;
  var lastOrNull = kotlin_kotlin.$_$.w6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.v6;
  var last = kotlin_kotlin.$_$.x6;
  var ULong = kotlin_kotlin.$_$.rf;
  var UInt = kotlin_kotlin.$_$.pf;
  var UByte = kotlin_kotlin.$_$.nf;
  var UShort = kotlin_kotlin.$_$.tf;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ig;
  var asSequence = kotlin_kotlin.$_$.m5;
  var get_js = kotlin_kotlin.$_$.fb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.j4;
  var findAssociatedObject = kotlin_kotlin.$_$.a;
  var get_indices = kotlin_kotlin.$_$.q6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var get_indices_0 = kotlin_kotlin.$_$.p6;
  var get_longArrayClass = kotlin_kotlin.$_$.k9;
  var mapOf = kotlin_kotlin.$_$.b7;
  var Companion_instance = kotlin_kotlin.$_$.p4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l2;
  var createFailure = kotlin_kotlin.$_$.ag;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SerializationStrategy, 'SerializationStrategy');
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [SerializationStrategy, DeserializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicSerializer, 'PolymorphicSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SealedClassSerializer, 'SealedClassSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(UnknownFieldException, 'UnknownFieldException', VOID, SerializationException);
  initMetadataForClass(MissingFieldException, 'MissingFieldException', VOID, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementNames$1);
  initMetadataForClass(elementNames$$inlined$Iterable$1);
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(BYTE, 'BYTE', VOID, PrimitiveKind);
  initMetadataForObject(CHAR, 'CHAR', VOID, PrimitiveKind);
  initMetadataForObject(SHORT, 'SHORT', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(LONG, 'LONG', VOID, PrimitiveKind);
  initMetadataForObject(FLOAT, 'FLOAT', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(SEALED, 'SEALED', VOID, PolymorphicKind);
  initMetadataForObject(OPEN, 'OPEN', VOID, PolymorphicKind);
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.go(this);
  }
  initMetadataForInterface(Decoder, 'Decoder');
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.rr(descriptor, index, deserializer, previousValue) : $super.rr.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.fr(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.fo(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.eo().ep();
    if (isNullabilitySupported) {
      return this.xs(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.as();
    } else {
      this.at();
      this.xs(serializer, value);
    }
  }
  initMetadataForInterface(Encoder, 'Encoder');
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  initMetadataForInterface(CompositeEncoder, 'CompositeEncoder');
  initMetadataForClass(AbstractEncoder, 'AbstractEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForObject(NothingSerializer_0, 'NothingSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DurationSerializer, 'DurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(InstantSerializer, 'InstantSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UuidSerializer, 'UuidSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayClassDesc, 'ArrayClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(MapLikeDescriptor, 'MapLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(HashSetClassDesc, 'HashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(HashMapClassDesc, 'HashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(ReferenceArraySerializer, 'ReferenceArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(MapLikeSerializer, 'MapLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(LinkedHashMapSerializer, 'LinkedHashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(HashSetSerializer, 'HashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(LinkedHashSetSerializer, 'LinkedHashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(HashMapSerializer, 'HashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(PrimitiveArraySerializer, 'PrimitiveArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ElementMarker, 'ElementMarker');
  initMetadataForClass(EnumSerializer, 'EnumSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(EnumDescriptor, 'EnumDescriptor', VOID, PluginGeneratedSerialDescriptor);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(NoOpEncoder, 'NoOpEncoder', VOID, AbstractEncoder);
  initMetadataForObject(NothingSerialDescriptor, 'NothingSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(SerializerFactory, 'SerializerFactory');
  initMetadataForObject(ByteArraySerializer_0, 'ByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForClass(ByteArrayBuilder, 'ByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForObject(CharArraySerializer_0, 'CharArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(DoubleArraySerializer_0, 'DoubleArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(FloatArraySerializer_0, 'FloatArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(LongArraySerializer_0, 'LongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ULongArraySerializer_0, 'ULongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(IntArraySerializer_0, 'IntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UIntArraySerializer_0, 'UIntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ShortArraySerializer_0, 'ShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UShortArraySerializer_0, 'UShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UByteArraySerializer_0, 'UByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(BooleanArraySerializer_0, 'BooleanArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForClass(CharArrayBuilder, 'CharArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(DoubleArrayBuilder, 'DoubleArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(FloatArrayBuilder, 'FloatArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(LongArrayBuilder, 'LongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ULongArrayBuilder, 'ULongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(IntArrayBuilder, 'IntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UIntArrayBuilder, 'UIntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ShortArrayBuilder, 'ShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UShortArrayBuilder, 'UShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UByteArrayBuilder, 'UByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(BooleanArrayBuilder, 'BooleanArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FloatSerializer, 'FloatSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(ByteSerializer, 'ByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ShortSerializer, 'ShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(CharSerializer, 'CharSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UnitSerializer, 'UnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(TaggedDecoder, 'TaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForClass(NamedValueDecoder, 'NamedValueDecoder', VOID, TaggedDecoder);
  initMetadataForClass(TaggedEncoder, 'TaggedEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForClass(NamedValueEncoder, 'NamedValueEncoder', VOID, TaggedEncoder);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(KeyValueSerializer, 'KeyValueSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(MapEntrySerializer_0, 'MapEntrySerializer', VOID, KeyValueSerializer);
  initMetadataForClass(PairSerializer_0, 'PairSerializer', VOID, KeyValueSerializer);
  initMetadataForClass(TripleSerializer_0, 'TripleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ULongSerializer, 'ULongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UIntSerializer, 'UIntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UByteSerializer, 'UByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UShortSerializer, 'UShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(ContextualProvider, 'ContextualProvider');
  initMetadataForClass(Argless, 'Argless', VOID, ContextualProvider);
  initMetadataForClass(WithTypeArguments, 'WithTypeArguments', VOID, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.p18(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  initMetadataForInterface(SerializersModuleCollector, 'SerializersModuleCollector');
  initMetadataForClass(SerializersModuleBuilder, 'SerializersModuleBuilder', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForClass(SerializerAlreadyRegisteredException, 'SerializerAlreadyRegisteredException', VOID, IllegalArgumentException);
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  initMetadataForClass(createCache$1);
  initMetadataForClass(createParametrizedCache$1);
  //endregion
  function KSerializer() {
  }
  function DeserializationStrategy() {
  }
  function SerializationStrategy() {
  }
  function findPolymorphicSerializer(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.ho(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.io());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.jo(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(getKClassFromExpression(value), _this__u8e3s4.io());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.so('type', serializer_0(StringCompanionObject_instance).eo());
      $this$buildSerialDescriptor.so('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.to_1.o() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.mo_1 = this$0.uo_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.to_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return function (p0) {
      return p0.eo();
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.to_1 = baseClass;
    this.uo_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.vo_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).io = function () {
    return this.to_1;
  };
  protoOf(PolymorphicSerializer).eo = function () {
    var tmp0 = this.vo_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.m1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.to_1) + ')';
  };
  function SealedClassSerializer$_get_descriptor_$ref_m511rz() {
    return function (p0) {
      return p0.eo();
    };
  }
  function SealedClassSerializer() {
  }
  protoOf(SealedClassSerializer).eo = function () {
    var tmp0 = this.xo_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, SealedClassSerializer$_get_descriptor_$ref_m511rz(), null);
    return tmp0.m1();
  };
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.e1() === 1 ? "Field '" + missingFields.d1(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.yo_1 = missingFields;
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.l();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.k();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$0 = typeOrThrow(item);
      destination.b1(tmp$ret$0);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.r()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.ap(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.zo()) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.Result.getOrNull' call
        var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
        var tmp_2;
        if (_Result___get_isFailure__impl__jpiriv(this_1)) {
          tmp_2 = null;
        } else {
          var tmp_3 = _Result___get_value__impl__bjfvqg(this_1);
          tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        }
        tmp_1 = tmp_2;
      }
      tmp = tmp_1;
    }
    var cachedSerializer = tmp;
    if (!(cachedSerializer == null))
      return cachedSerializer;
    var tmp_4;
    if (typeArguments.r()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.ap(rootClass) : tmp0_elvis_lhs;
      var tmp_5;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_5 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_5 = tmp1_elvis_lhs;
      }
      tmp_4 = tmp_5;
    } else {
      var tmp2_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_6;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_6 = tmp2_elvis_lhs;
      }
      var serializers = tmp_6;
      var tmp3_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.bp(rootClass, serializers) : tmp3_elvis_lhs;
      var tmp_7;
      if (tmp4_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_7 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_7 = tmp4_elvis_lhs;
      }
      tmp_4 = tmp_7;
    }
    var contextualSerializer = tmp_4;
    var tmp_8;
    if (contextualSerializer == null) {
      tmp_8 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_8 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp6_safe_receiver = tmp_8;
    return tmp6_safe_receiver == null ? null : nullable(tmp6_safe_receiver, isNullable);
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s = typeArguments.t();
      while (_iterator__ex2g4s.u()) {
        var item = _iterator__ex2g4s.v();
        var tmp$ret$0 = serializer(_this__u8e3s4, item);
        destination.b1(tmp$ret$0);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s_0 = typeArguments.t();
      while (_iterator__ex2g4s_0.u()) {
        var item_0 = _iterator__ex2g4s_0.v();
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$3 = tmp_0;
        destination_0.b1(tmp$ret$3);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (_this__u8e3s4.equals(getKClass(Collection)) || _this__u8e3s4.equals(getKClass(KtList)) || (_this__u8e3s4.equals(getKClass(KtMutableList)) || _this__u8e3s4.equals(getKClass(ArrayList)))) {
      tmp = new ArrayListSerializer(serializers.d1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.d1(0));
    } else if (_this__u8e3s4.equals(getKClass(KtSet)) || (_this__u8e3s4.equals(getKClass(KtMutableSet)) || _this__u8e3s4.equals(getKClass(LinkedHashSet)))) {
      tmp = new LinkedHashSetSerializer(serializers.d1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(KtMap)) || (_this__u8e3s4.equals(getKClass(KtMutableMap)) || _this__u8e3s4.equals(getKClass(LinkedHashMap)))) {
      tmp = new LinkedHashMapSerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.d1(0), serializers.d1(1), serializers.d1(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.d1(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.d1(0).j();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().cp(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().cp(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().dp(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().dp(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_nullable(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_0 = isInterface(tmp2_safe_receiver, KSerializer) ? tmp2_safe_receiver : THROW_CCE();
    }
    return tmp_0;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.d1(0).j();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.d1(0).j();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.eo().ep()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function serializer_1(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function serializer_5(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return InstantSerializer_getInstance();
  }
  function serializer_16(_this__u8e3s4) {
    return UuidSerializer_getInstance();
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.ap(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.eo();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.jp_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.fp_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.ip_1 = original;
    this.jp_1 = kClass;
    this.kp_1 = this.ip_1.lp() + '<' + this.jp_1.o() + '>';
  }
  protoOf(ContextDescriptor).lp = function () {
    return this.kp_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.ip_1, another.ip_1) && another.jp_1.equals(this.jp_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.jp_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.kp_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.jp_1) + ', original: ' + toString(this.ip_1) + ')';
  };
  protoOf(ContextDescriptor).mp = function () {
    return this.ip_1.mp();
  };
  protoOf(ContextDescriptor).ep = function () {
    return this.ip_1.ep();
  };
  protoOf(ContextDescriptor).np = function () {
    return this.ip_1.np();
  };
  protoOf(ContextDescriptor).op = function () {
    return this.ip_1.op();
  };
  protoOf(ContextDescriptor).pp = function () {
    return this.ip_1.pp();
  };
  protoOf(ContextDescriptor).qp = function (index) {
    return this.ip_1.qp(index);
  };
  protoOf(ContextDescriptor).rp = function (name) {
    return this.ip_1.rp(name);
  };
  protoOf(ContextDescriptor).sp = function (index) {
    return this.ip_1.sp(index);
  };
  protoOf(ContextDescriptor).tp = function (index) {
    return this.ip_1.tp(index);
  };
  protoOf(ContextDescriptor).up = function (index) {
    return this.ip_1.up(index);
  };
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function SerialDescriptor() {
  }
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementNames$$inlined$Iterable$1(_this__u8e3s4);
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementDescriptors$$inlined$Iterable$1(_this__u8e3s4);
  }
  function elementNames$1($this_elementNames) {
    this.wp_1 = $this_elementNames;
    this.vp_1 = $this_elementNames.op();
  }
  protoOf(elementNames$1).u = function () {
    return this.vp_1 > 0;
  };
  protoOf(elementNames$1).v = function () {
    var tmp = this.wp_1.op();
    var _unary__edvuaz = this.vp_1;
    this.vp_1 = _unary__edvuaz - 1 | 0;
    return this.wp_1.qp(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.xp_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).t = function () {
    return new elementNames$1(this.xp_1);
  };
  function elementDescriptors$1($this_elementDescriptors) {
    this.zp_1 = $this_elementDescriptors;
    this.yp_1 = $this_elementDescriptors.op();
  }
  protoOf(elementDescriptors$1).u = function () {
    return this.yp_1 > 0;
  };
  protoOf(elementDescriptors$1).v = function () {
    var tmp = this.zp_1.op();
    var _unary__edvuaz = this.yp_1;
    this.yp_1 = _unary__edvuaz - 1 | 0;
    return this.zp_1.tp(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.aq_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).t = function () {
    return new elementDescriptors$1(this.aq_1);
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.no_1.e1(), toList(typeParameters), sdBuilder);
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.ko_1 = serialName;
    this.lo_1 = false;
    this.mo_1 = emptyList();
    this.no_1 = ArrayList_init_$Create$_0();
    this.oo_1 = HashSet_init_$Create$();
    this.po_1 = ArrayList_init_$Create$_0();
    this.qo_1 = ArrayList_init_$Create$_0();
    this.ro_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).bq = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.oo_1.b1(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.ko_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.no_1.b1(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.po_1.b1(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.qo_1.b1(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.ro_1.b1(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).so = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.bq(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.bq.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!equals(kind, CLASS_getInstance())) {
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.no_1.e1(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.nq_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.m1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.mq_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return function (p0) {
      return _get__hashCode__tgwhef(p0);
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.cq_1 = serialName;
    this.dq_1 = kind;
    this.eq_1 = elementsCount;
    this.fq_1 = builder.mo_1;
    this.gq_1 = toHashSet(builder.no_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.no_1;
    tmp.hq_1 = copyToArray(this_0);
    this.iq_1 = compactArray(builder.po_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.qo_1;
    tmp_0.jq_1 = copyToArray(this_1);
    this.kq_1 = toBooleanArray(builder.ro_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.hq_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = to(item.kf_1, item.jf_1);
      destination.b1(tmp$ret$2);
    }
    tmp_1.lq_1 = toMap(destination);
    this.mq_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.nq_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).lp = function () {
    return this.cq_1;
  };
  protoOf(SerialDescriptorImpl).mp = function () {
    return this.dq_1;
  };
  protoOf(SerialDescriptorImpl).op = function () {
    return this.eq_1;
  };
  protoOf(SerialDescriptorImpl).pp = function () {
    return this.fq_1;
  };
  protoOf(SerialDescriptorImpl).oq = function () {
    return this.gq_1;
  };
  protoOf(SerialDescriptorImpl).qp = function (index) {
    return getChecked(this.hq_1, index);
  };
  protoOf(SerialDescriptorImpl).rp = function (name) {
    var tmp0_elvis_lhs = this.lq_1.s2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).sp = function (index) {
    return getChecked(this.jq_1, index);
  };
  protoOf(SerialDescriptorImpl).tp = function (index) {
    return getChecked(this.iq_1, index);
  };
  protoOf(SerialDescriptorImpl).up = function (index) {
    return getChecked_0(this.kq_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.lp() === other.lp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.mq_1, other.mq_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.op() === other.op())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.op();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.tp(index).lp() === other.tp(index).lp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.tp(index).mp(), other.tp(index).mp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    return toStringImpl(this);
  };
  function buildClassSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function buildSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).o());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).pq = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).qq = function () {
    return true;
  };
  protoOf(AbstractDecoder).rq = function () {
    return null;
  };
  protoOf(AbstractDecoder).sq = function () {
    var tmp = this.pq();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).tq = function () {
    var tmp = this.pq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).uq = function () {
    var tmp = this.pq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).vq = function () {
    var tmp = this.pq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).wq = function () {
    var tmp = this.pq();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).xq = function () {
    var tmp = this.pq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).yq = function () {
    var tmp = this.pq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).zq = function () {
    var tmp = this.pq();
    return tmp instanceof Char ? tmp.v1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).ar = function () {
    var tmp = this.pq();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).br = function (enumDescriptor) {
    var tmp = this.pq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).cr = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).dr = function (deserializer, previousValue) {
    return this.er(deserializer);
  };
  protoOf(AbstractDecoder).fr = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).gr = function (descriptor) {
  };
  protoOf(AbstractDecoder).hr = function (descriptor, index) {
    return this.sq();
  };
  protoOf(AbstractDecoder).ir = function (descriptor, index) {
    return this.tq();
  };
  protoOf(AbstractDecoder).jr = function (descriptor, index) {
    return this.uq();
  };
  protoOf(AbstractDecoder).kr = function (descriptor, index) {
    return this.vq();
  };
  protoOf(AbstractDecoder).lr = function (descriptor, index) {
    return this.wq();
  };
  protoOf(AbstractDecoder).mr = function (descriptor, index) {
    return this.xq();
  };
  protoOf(AbstractDecoder).nr = function (descriptor, index) {
    return this.yq();
  };
  protoOf(AbstractDecoder).or = function (descriptor, index) {
    return this.zq();
  };
  protoOf(AbstractDecoder).pr = function (descriptor, index) {
    return this.ar();
  };
  protoOf(AbstractDecoder).qr = function (descriptor, index) {
    return this.cr(descriptor.tp(index));
  };
  protoOf(AbstractDecoder).rr = function (descriptor, index, deserializer, previousValue) {
    return this.dr(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).tr = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.eo().ep();
    var tmp;
    if (isNullabilitySupported || this.qq()) {
      tmp = this.dr(deserializer, previousValue);
    } else {
      tmp = this.rq();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).fr = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).gr = function (descriptor) {
  };
  protoOf(AbstractEncoder).yr = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).zr = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).as = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).bs = function (value) {
    return this.zr(value);
  };
  protoOf(AbstractEncoder).cs = function (value) {
    return this.zr(value);
  };
  protoOf(AbstractEncoder).ds = function (value) {
    return this.zr(value);
  };
  protoOf(AbstractEncoder).es = function (value) {
    return this.zr(value);
  };
  protoOf(AbstractEncoder).fs = function (value) {
    return this.zr(value);
  };
  protoOf(AbstractEncoder).gs = function (value) {
    return this.zr(value);
  };
  protoOf(AbstractEncoder).hs = function (value) {
    return this.zr(value);
  };
  protoOf(AbstractEncoder).is = function (value) {
    return this.zr(new Char(value));
  };
  protoOf(AbstractEncoder).js = function (value) {
    return this.zr(value);
  };
  protoOf(AbstractEncoder).ks = function (enumDescriptor, index) {
    return this.zr(index);
  };
  protoOf(AbstractEncoder).ls = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).ms = function (descriptor, index, value) {
    if (this.yr(descriptor, index)) {
      this.bs(value);
    }
  };
  protoOf(AbstractEncoder).ns = function (descriptor, index, value) {
    if (this.yr(descriptor, index)) {
      this.cs(value);
    }
  };
  protoOf(AbstractEncoder).os = function (descriptor, index, value) {
    if (this.yr(descriptor, index)) {
      this.ds(value);
    }
  };
  protoOf(AbstractEncoder).ps = function (descriptor, index, value) {
    if (this.yr(descriptor, index)) {
      this.es(value);
    }
  };
  protoOf(AbstractEncoder).qs = function (descriptor, index, value) {
    if (this.yr(descriptor, index)) {
      this.fs(value);
    }
  };
  protoOf(AbstractEncoder).rs = function (descriptor, index, value) {
    if (this.yr(descriptor, index)) {
      this.gs(value);
    }
  };
  protoOf(AbstractEncoder).ss = function (descriptor, index, value) {
    if (this.yr(descriptor, index)) {
      this.hs(value);
    }
  };
  protoOf(AbstractEncoder).ts = function (descriptor, index, value) {
    if (this.yr(descriptor, index)) {
      this.is(value);
    }
  };
  protoOf(AbstractEncoder).us = function (descriptor, index, value) {
    if (this.yr(descriptor, index)) {
      this.js(value);
    }
  };
  protoOf(AbstractEncoder).vs = function (descriptor, index) {
    return this.yr(descriptor, index) ? this.ls(descriptor.tp(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).ws = function (descriptor, index, serializer, value) {
    if (this.yr(descriptor, index)) {
      this.xs(serializer, value);
    }
  };
  protoOf(AbstractEncoder).ys = function (descriptor, index, serializer, value) {
    if (this.yr(descriptor, index)) {
      this.zs(serializer, value);
    }
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.pr($this.eo(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.sr($this.eo(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).wo = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer_0(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.eo();
    var composite = encoder.fr(descriptor);
    composite.us(this.eo(), 0, actualSerializer.eo().lp());
    var tmp = this.eo();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.ws(tmp, 1, tmp$ret$0, value);
    composite.gr(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).fo = function (encoder, value) {
    return this.wo(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).go = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.eo();
    var composite = decoder.fr(descriptor);
    var tmp$ret$0;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.vr()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.wr(this.eo());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.pr(this.eo(), index);
            break;
          case 1:
            var tmp0 = klassName;
            var tmp$ret$2;
            $l$block_0: {
              // Inline function 'kotlin.requireNotNull' call
              if (tmp0 == null) {
                var message = 'Cannot read polymorphic value before its type token';
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$2 = tmp0;
                break $l$block_0;
              }
            }

            klassName = tmp$ret$2;
            var serializer = findPolymorphicSerializer(this, composite, klassName);
            value = composite.sr(this.eo(), index, serializer);
            break;
          default:
            var tmp0_elvis_lhs = klassName;
            throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
        }
      }
      var tmp0_0 = value;
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0_0 == null) {
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp0_0;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$0 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.gr(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).ho = function (decoder, klassName) {
    return decoder.ur().dt(this.io(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).jo = function (encoder, value) {
    return encoder.ur().et(this.io(), value);
  };
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.o() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.o() + "' has to be sealed and '@Serializable'."));
  }
  function throwSubtypeNotRegistered_0(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.o();
    throwSubtypeNotRegistered(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.ft_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).eo = function () {
    return this.ft_1;
  };
  protoOf(NothingSerializer_0).gt = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).fo = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.gt(encoder, tmp);
  };
  protoOf(NothingSerializer_0).go = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.ht_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).eo = function () {
    return this.ht_1;
  };
  protoOf(DurationSerializer).it = function (encoder, value) {
    encoder.js(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).fo = function (encoder, value) {
    return this.it(encoder, value instanceof Duration ? value.ok_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).jt = function (decoder) {
    return Companion_getInstance().pk(decoder.ar());
  };
  protoOf(DurationSerializer).go = function (decoder) {
    return new Duration(this.jt(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.kt_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).eo = function () {
    return this.kt_1;
  };
  protoOf(InstantSerializer).lt = function (encoder, value) {
    encoder.js(value.toString());
  };
  protoOf(InstantSerializer).fo = function (encoder, value) {
    return this.lt(encoder, value instanceof Instant ? value : THROW_CCE());
  };
  protoOf(InstantSerializer).go = function (decoder) {
    return Companion_getInstance_0().bl(decoder.ar());
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.mt_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).eo = function () {
    return this.mt_1;
  };
  protoOf(UuidSerializer).nt = function (encoder, value) {
    encoder.js(value.toString());
  };
  protoOf(UuidSerializer).fo = function (encoder, value) {
    return this.nt(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).go = function (decoder) {
    return Companion_getInstance_1().hm(decoder.ar());
  };
  var UuidSerializer_instance;
  function UuidSerializer_getInstance() {
    if (UuidSerializer_instance == null)
      new UuidSerializer();
    return UuidSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).lp = function () {
    return 'kotlin.Array';
  };
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).lp = function () {
    return 'kotlin.collections.ArrayList';
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).lp = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).lp = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.qt_1 = elementDescriptor;
    this.rt_1 = 1;
  }
  protoOf(ListLikeDescriptor).mp = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).op = function () {
    return this.rt_1;
  };
  protoOf(ListLikeDescriptor).qp = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).rp = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).up = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.lp() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).sp = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.lp() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).tp = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.lp() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.qt_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.qt_1, other.qt_1) && this.lp() === other.lp())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.qt_1), 31) + getStringHashCode(this.lp()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.lp() + '(' + toString(this.qt_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.ut_1 = serialName;
    this.vt_1 = keyDescriptor;
    this.wt_1 = valueDescriptor;
    this.xt_1 = 2;
  }
  protoOf(MapLikeDescriptor).lp = function () {
    return this.ut_1;
  };
  protoOf(MapLikeDescriptor).mp = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).op = function () {
    return this.xt_1;
  };
  protoOf(MapLikeDescriptor).qp = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).rp = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).up = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.lp() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).sp = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.lp() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).tp = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.lp() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.vt_1;
        break;
      case 1:
        tmp = this.wt_1;
        break;
      default:
        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.lp() === other.lp()))
      return false;
    if (!equals(this.vt_1, other.vt_1))
      return false;
    if (!equals(this.wt_1, other.wt_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.lp());
    result = imul(31, result) + hashCode(this.vt_1) | 0;
    result = imul(31, result) + hashCode(this.wt_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.lp() + '(' + toString(this.vt_1) + ', ' + toString(this.wt_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.eu_1 = primitive.lp() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).lp = function () {
    return this.eu_1;
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.gu_1 = kClass;
    this.hu_1 = new ArrayClassDesc(eSerializer.eo());
  }
  protoOf(ReferenceArraySerializer).eo = function () {
    return this.hu_1;
  };
  protoOf(ReferenceArraySerializer).iu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).ju = function (_this__u8e3s4) {
    return this.iu((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ku = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).lu = function (_this__u8e3s4) {
    return this.ku((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).mu = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).nu = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ReferenceArraySerializer).ou = function (_this__u8e3s4) {
    return this.nu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).pu = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.gu_1);
  };
  protoOf(ReferenceArraySerializer).qu = function (_this__u8e3s4) {
    return this.pu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ru = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).su = function (_this__u8e3s4) {
    return this.ru((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).tu = function (_this__u8e3s4, size) {
    return _this__u8e3s4.r5(size);
  };
  protoOf(ReferenceArraySerializer).uu = function (_this__u8e3s4, size) {
    return this.tu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).vu = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a3(index, element);
  };
  protoOf(ReferenceArraySerializer).wu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.vu(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.ev_1 = new ArrayListClassDesc(element.eo());
  }
  protoOf(ArrayListSerializer).eo = function () {
    return this.ev_1;
  };
  protoOf(ArrayListSerializer).mu = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).fv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ArrayListSerializer).ou = function (_this__u8e3s4) {
    return this.fv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).gv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).qu = function (_this__u8e3s4) {
    return this.gv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).hv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).su = function (_this__u8e3s4) {
    return this.hv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).iv = function (_this__u8e3s4, size) {
    return _this__u8e3s4.r5(size);
  };
  protoOf(ArrayListSerializer).uu = function (_this__u8e3s4, size) {
    return this.iv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).jv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a3(index, element);
  };
  protoOf(ArrayListSerializer).wu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.jv(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.pv_1 = new LinkedHashMapClassDesc(kSerializer.eo(), vSerializer.eo());
  }
  protoOf(LinkedHashMapSerializer).eo = function () {
    return this.pv_1;
  };
  protoOf(LinkedHashMapSerializer).qv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(LinkedHashMapSerializer).ju = function (_this__u8e3s4) {
    return this.qv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).rv = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.k1().t();
  };
  protoOf(LinkedHashMapSerializer).lu = function (_this__u8e3s4) {
    return this.rv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).mu = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).sv = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(LinkedHashMapSerializer).ou = function (_this__u8e3s4) {
    return this.sv(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).tv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).qu = function (_this__u8e3s4) {
    return this.tv(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).uv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).su = function (_this__u8e3s4) {
    return this.uv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).vv = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).uu = function (_this__u8e3s4, size) {
    return this.vv(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.bw_1 = new HashSetClassDesc(eSerializer.eo());
  }
  protoOf(HashSetSerializer).eo = function () {
    return this.bw_1;
  };
  protoOf(HashSetSerializer).mu = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).cw = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(HashSetSerializer).ou = function (_this__u8e3s4) {
    return this.cw(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).dw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).qu = function (_this__u8e3s4) {
    return this.dw(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).ew = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).su = function (_this__u8e3s4) {
    return this.ew((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).fw = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).uu = function (_this__u8e3s4, size) {
    return this.fw(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).gw = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b1(element);
  };
  protoOf(HashSetSerializer).wu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.gw(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.iw_1 = new LinkedHashSetClassDesc(eSerializer.eo());
  }
  protoOf(LinkedHashSetSerializer).eo = function () {
    return this.iw_1;
  };
  protoOf(LinkedHashSetSerializer).mu = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).jw = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(LinkedHashSetSerializer).ou = function (_this__u8e3s4) {
    return this.jw(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).kw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).qu = function (_this__u8e3s4) {
    return this.kw(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).ew = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).su = function (_this__u8e3s4) {
    return this.ew((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).lw = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).uu = function (_this__u8e3s4, size) {
    return this.lw(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).mw = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b1(element);
  };
  protoOf(LinkedHashSetSerializer).wu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.mw(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.pw_1 = new HashMapClassDesc(kSerializer.eo(), vSerializer.eo());
  }
  protoOf(HashMapSerializer).eo = function () {
    return this.pw_1;
  };
  protoOf(HashMapSerializer).qv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(HashMapSerializer).ju = function (_this__u8e3s4) {
    return this.qv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).rv = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.k1().t();
  };
  protoOf(HashMapSerializer).lu = function (_this__u8e3s4) {
    return this.rv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).mu = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).qw = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(HashMapSerializer).ou = function (_this__u8e3s4) {
    return this.qw(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).rw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).qu = function (_this__u8e3s4) {
    return this.rw(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).uv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).su = function (_this__u8e3s4) {
    return this.uv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).sw = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).uu = function (_this__u8e3s4, size) {
    return this.sw(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.xu_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).yu = function (encoder, value) {
    var size = this.ju(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.eo();
    var composite = encoder.bt(descriptor, size);
    var iterator = this.lu(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.ws(this.eo(), index, this.xu_1, iterator.v());
      }
       while (inductionVariable < size);
    composite.gr(descriptor);
  };
  protoOf(CollectionLikeSerializer).fo = function (encoder, value) {
    return this.yu(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).zu = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.av(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).av = function (decoder, index, builder, checkIndex) {
    this.wu(builder, index, decoder.sr(this.eo(), index, this.xu_1));
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).lv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(CollectionSerializer).ju = function (_this__u8e3s4) {
    return this.lv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).mv = function (_this__u8e3s4) {
    return _this__u8e3s4.t();
  };
  protoOf(CollectionSerializer).lu = function (_this__u8e3s4) {
    return this.mv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.wv_1 = keySerializer;
    this.xv_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).yv = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.p1_1;
    var last = progression.q1_1;
    var step_0 = progression.r1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.zv(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).zu = function (decoder, builder, startIndex, size) {
    return this.yv(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).zv = function (decoder, index, builder, checkIndex) {
    var key = decoder.sr(this.eo(), index, this.wv_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.wr(this.eo());
      // Inline function 'kotlin.require' call
      if (!(this_0 === (index + 1 | 0))) {
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.q2(key)) {
      var tmp_2 = this.xv_1.eo().mp();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.rr(this.eo(), vIndex, this.xv_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.sr(this.eo(), vIndex, this.xv_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.v2(key, value);
  };
  protoOf(MapLikeSerializer).av = function (decoder, index, builder, checkIndex) {
    return this.zv(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).yu = function (encoder, value) {
    var size = this.ju(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.eo();
    var composite = encoder.bt(descriptor, size);
    var iterator = this.lu(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = iterator;
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var k = element.l1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.m1();
      var tmp = this.eo();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.ws(tmp, _unary__edvuaz, this.wv_1, k);
      var tmp_0 = this.eo();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.ws(tmp_0, _unary__edvuaz_0, this.xv_1, v);
    }
    composite.gr(descriptor);
  };
  protoOf(MapLikeSerializer).fo = function (encoder, value) {
    return this.yu(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function readSize($this, decoder, builder) {
    var size = decoder.xr($this.eo());
    $this.uu(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).cv = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.su(previous);
    var builder = tmp1_elvis_lhs == null ? this.mu() : tmp1_elvis_lhs;
    var startIndex = this.ou(builder);
    var compositeDecoder = decoder.fr(this.eo());
    if (compositeDecoder.vr()) {
      this.zu(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.wr(this.eo());
        if (index === -1)
          break $l$loop;
        this.bv(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.gr(this.eo());
    return this.qu(builder);
  };
  protoOf(AbstractCollectionSerializer).go = function (decoder) {
    return this.cv(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).bv = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.av(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.av.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.uw_1 = new PrimitiveArrayDescriptor(primitiveSerializer.eo());
  }
  protoOf(PrimitiveArraySerializer).eo = function () {
    return this.uw_1;
  };
  protoOf(PrimitiveArraySerializer).vw = function (_this__u8e3s4) {
    return _this__u8e3s4.ww();
  };
  protoOf(PrimitiveArraySerializer).ou = function (_this__u8e3s4) {
    return this.vw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).xw = function (_this__u8e3s4) {
    return _this__u8e3s4.yw();
  };
  protoOf(PrimitiveArraySerializer).qu = function (_this__u8e3s4) {
    return this.xw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).zw = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ax(size);
  };
  protoOf(PrimitiveArraySerializer).uu = function (_this__u8e3s4, size) {
    return this.zw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).bx = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).lu = function (_this__u8e3s4) {
    return this.bx((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).cx = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).wu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.cx(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).mu = function () {
    return this.su(this.dx());
  };
  protoOf(PrimitiveArraySerializer).gx = function (encoder, value) {
    var size = this.ju(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.uw_1;
    var composite = encoder.bt(descriptor, size);
    this.fx(composite, value, size);
    composite.gr(descriptor);
  };
  protoOf(PrimitiveArraySerializer).fo = function (encoder, value) {
    return this.gx(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).yu = function (encoder, value) {
    return this.gx(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).go = function (decoder) {
    return this.cv(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).hx = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.ww() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.ax(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.ax.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.ix_1 = longArray(0);
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = shiftLeft(new Long(-1, -1), elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.mx_1[slot] = bitwiseOr($this.mx_1[slot], shiftLeft(new Long(1, 0), offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.mx_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.mx_1[slot];
        while (!equalsLong(slotMarks, new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(invert(slotMarks));
          slotMarks = bitwiseOr(slotMarks, shiftLeft(new Long(1, 0), indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.kx_1($this.jx_1, index)) {
            $this.mx_1[slot] = slotMarks;
            return index;
          }
        }
        $this.mx_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.jx_1 = descriptor;
    this.kx_1 = readIfAbsent;
    var elementsCount = this.jx_1.op();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = shiftLeft(new Long(-1, -1), elementsCount);
      }
      tmp.lx_1 = tmp_0;
      this.mx_1 = Companion_getInstance_8().ix_1;
    } else {
      this.lx_1 = new Long(0, 0);
      this.mx_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).nx = function (index) {
    if (index < 64) {
      this.lx_1 = bitwiseOr(this.lx_1, shiftLeft(new Long(1, 0), index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).ox = function () {
    var elementsCount = this.jx_1.op();
    while (!equalsLong(this.lx_1, new Long(-1, -1))) {
      var index = countTrailingZeroBits(invert(this.lx_1));
      this.lx_1 = bitwiseOr(this.lx_1, shiftLeft(new Long(1, 0), index));
      if (this.kx_1(this.jx_1, index)) {
        return index;
      }
    }
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.px_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.px_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.ey(element.z_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.qx_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer$_get_descriptor_$ref_j67dlw() {
    return function (p0) {
      return p0.eo();
    };
  }
  function EnumSerializer(serialName, values) {
    this.px_1 = values;
    this.qx_1 = null;
    var tmp = this;
    tmp.rx_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).eo = function () {
    var tmp0 = this.rx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, EnumSerializer$_get_descriptor_$ref_j67dlw(), null);
    return tmp0.m1();
  };
  protoOf(EnumSerializer).fy = function (encoder, value) {
    var index = indexOf(this.px_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.eo().lp() + ', ' + ('must be one of ' + contentToString(this.px_1)));
    }
    encoder.ks(this.eo(), index);
  };
  protoOf(EnumSerializer).fo = function (encoder, value) {
    return this.fy(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).go = function (decoder) {
    var index = decoder.br(this.eo());
    if (!(0 <= index ? index <= (this.px_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.eo().lp() + ' enum values, ' + ('values size is ' + this.px_1.length));
    }
    return this.px_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.eo().lp() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.ty_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('elementDescriptors', 1, tmp, EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a(), null);
    return tmp0.m1();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.qp(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a() {
    return function (p0) {
      return _get_elementDescriptors__y23q9p(p0);
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.sy_1 = ENUM_getInstance();
    var tmp = this;
    tmp.ty_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).mp = function () {
    return this.sy_1;
  };
  protoOf(EnumDescriptor).tp = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.mp() === ENUM_getInstance()))
      return false;
    if (!(this.lp() === other.lp()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.lp() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.lp());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = get_elementNames(this).t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var elementsHashCode = accumulator;
    result = imul(31, result) + elementsHashCode | 0;
    return result;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.iz_1 = true;
  }
  protoOf(InlineClassDescriptor).np = function () {
    return this.iz_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.lp() === other.lp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.iz_1 && contentEquals(this.uy(), other.uy()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.op() === other.op())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.op();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.tp(index).lp() === other.tp(index).lp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.tp(index).mp(), other.tp(index).mp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.jz_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).kz = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.jz_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).eo = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).fo = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).go = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.mz_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).ur = function () {
    return this.mz_1;
  };
  protoOf(NoOpEncoder).zr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).as = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).bs = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).cs = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ds = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).es = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).fs = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).gs = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).hs = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).is = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).js = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ks = function (enumDescriptor, index) {
    return Unit_instance;
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.nz_1 = OBJECT_getInstance();
    this.oz_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).mp = function () {
    return this.nz_1;
  };
  protoOf(NothingSerialDescriptor).lp = function () {
    return this.oz_1;
  };
  protoOf(NothingSerialDescriptor).op = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).qp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).rp = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).up = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).tp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).sp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.oz_1) + imul(31, this.nz_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.pz_1 = serializer;
    this.qz_1 = new SerialDescriptorForNullable(this.pz_1.eo());
  }
  protoOf(NullableSerializer).eo = function () {
    return this.qz_1;
  };
  protoOf(NullableSerializer).rz = function (encoder, value) {
    if (!(value == null)) {
      encoder.at();
      encoder.xs(this.pz_1, value);
    } else {
      encoder.as();
    }
  };
  protoOf(NullableSerializer).fo = function (encoder, value) {
    return this.rz(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).go = function (decoder) {
    return decoder.qq() ? decoder.er(this.pz_1) : decoder.rq();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.pz_1, other.pz_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.pz_1);
  };
  function SerialDescriptorForNullable(original) {
    this.fp_1 = original;
    this.gp_1 = this.fp_1.lp() + '?';
    this.hp_1 = cachedSerialNames(this.fp_1);
  }
  protoOf(SerialDescriptorForNullable).lp = function () {
    return this.gp_1;
  };
  protoOf(SerialDescriptorForNullable).oq = function () {
    return this.hp_1;
  };
  protoOf(SerialDescriptorForNullable).ep = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.fp_1, other.fp_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.fp_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.fp_1), 31);
  };
  protoOf(SerialDescriptorForNullable).mp = function () {
    return this.fp_1.mp();
  };
  protoOf(SerialDescriptorForNullable).np = function () {
    return this.fp_1.np();
  };
  protoOf(SerialDescriptorForNullable).op = function () {
    return this.fp_1.op();
  };
  protoOf(SerialDescriptorForNullable).pp = function () {
    return this.fp_1.pp();
  };
  protoOf(SerialDescriptorForNullable).qp = function (index) {
    return this.fp_1.qp(index);
  };
  protoOf(SerialDescriptorForNullable).rp = function (name) {
    return this.fp_1.rp(name);
  };
  protoOf(SerialDescriptorForNullable).sp = function (index) {
    return this.fp_1.sp(index);
  };
  protoOf(SerialDescriptorForNullable).tp = function (index) {
    return this.fp_1.tp(index);
  };
  protoOf(SerialDescriptorForNullable).up = function (index) {
    return this.fp_1.up(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.mo_1 = this$0.tz_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer$_get_descriptor_$ref_7z4xb6() {
    return function (p0) {
      return p0.eo();
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.sz_1 = objectInstance;
    this.tz_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.uz_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).eo = function () {
    var tmp0 = this.uz_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.m1();
  };
  protoOf(ObjectSerializer).wo = function (encoder, value) {
    encoder.fr(this.eo()).gr(this.eo());
  };
  protoOf(ObjectSerializer).fo = function (encoder, value) {
    return this.wo(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).go = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.eo();
    var composite = decoder.fr(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      if (composite.vr()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.wr(this.eo());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$0;
    composite.gr(descriptor);
    return this.sz_1;
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.j();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        throw IllegalArgumentException_init_$Create$('Captured type parameter ' + toString(t) + ' from generic non-reified function. ' + ('Such functionality cannot be supported because ' + toString(t) + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + toString(t) + '.'));
      } else {
        throw IllegalArgumentException_init_$Create$('Only KClass supported as classifier, got ' + toString_0(t));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function typeOrThrow(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0 = _this__u8e3s4.qi_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.qi_1);
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.r())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.oq();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.op());
    var inductionVariable = 0;
    var last = _this__u8e3s4.op();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.qp(i);
        result.b1(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.o();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.qp(i);
          missingFields.b1(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.lp());
  }
  function throwArrayMissingFieldException(seenArray, goldenMaskArray, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var inductionVariable = 0;
    var last = goldenMaskArray.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var maskSlot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var missingFieldsBits = goldenMaskArray[maskSlot] & ~seenArray[maskSlot];
        if (!(missingFieldsBits === 0)) {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < 32)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (!((missingFieldsBits & 1) === 0)) {
                // Inline function 'kotlin.collections.plusAssign' call
                var element = descriptor.qp(imul(maskSlot, 32) + i | 0);
                missingFields.b1(element);
              }
              missingFieldsBits = missingFieldsBits >>> 1 | 0;
            }
             while (inductionVariable_0 < 32);
        }
      }
       while (inductionVariable <= last);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.lp());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.by_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.m1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.dy_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.m1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.wx_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.wx_1[i];
        indices.v2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.tx_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kz();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca() {
    return function (p0) {
      return _get_childSerializers__7vnyfa(p0);
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.tx_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lz();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0 = item.eo();
          destination.b1(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return function (p0) {
      return p0.uy();
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.uy());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.sx_1 = serialName;
    this.tx_1 = generatedSerializer;
    this.ux_1 = elementsCount;
    this.vx_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.ux_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.wx_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.ux_1;
    tmp_3.xx_1 = Array(size);
    this.yx_1 = null;
    this.zx_1 = booleanArray(this.ux_1);
    this.ay_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.by_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.cy_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.dy_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).lp = function () {
    return this.sx_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).op = function () {
    return this.ux_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).mp = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).pp = function () {
    var tmp0_elvis_lhs = this.yx_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).oq = function () {
    return this.ay_1.t2();
  };
  protoOf(PluginGeneratedSerialDescriptor).uy = function () {
    var tmp0 = this.cy_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.m1();
  };
  protoOf(PluginGeneratedSerialDescriptor).vy = function (name, isOptional) {
    this.vx_1 = this.vx_1 + 1 | 0;
    this.wx_1[this.vx_1] = name;
    this.zx_1[this.vx_1] = isOptional;
    this.xx_1[this.vx_1] = null;
    if (this.vx_1 === (this.ux_1 - 1 | 0)) {
      this.ay_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).ey = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.vy(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.vy.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).tp = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).eo();
  };
  protoOf(PluginGeneratedSerialDescriptor).up = function (index) {
    return getChecked_0(this.zx_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).sp = function (index) {
    var tmp0_elvis_lhs = getChecked(this.xx_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).qp = function (index) {
    return getChecked(this.wx_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).rp = function (name) {
    var tmp0_elvis_lhs = this.ay_1.s2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.lp() === other.lp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.uy(), other.uy())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.op() === other.op())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.op();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.tp(index).lp() === other.tp(index).lp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.tp(index).mp(), other.tp(index).mp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    return toStringImpl(this);
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.lp());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.lp();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.mp();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.op());
    var tmp_0 = _this__u8e3s4.lp() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.qp(i) + ': ' + $this_toStringImpl.tp(i).lp();
    };
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  function SerializerFactory() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).yz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.yz((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).zz = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).su = function (_this__u8e3s4) {
    return this.zz((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).dx = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).a10 = function (decoder, index, builder, checkIndex) {
    builder.d10(decoder.ir(this.uw_1, index));
  };
  protoOf(ByteArraySerializer_0).av = function (decoder, index, builder, checkIndex) {
    return this.a10(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.a10(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).e10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ns(this.uw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).fx = function (encoder, content, size) {
    return this.e10(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.b10_1 = bufferWithData;
    this.c10_1 = bufferWithData.length;
    this.ax(10);
  }
  protoOf(ByteArrayBuilder).ww = function () {
    return this.c10_1;
  };
  protoOf(ByteArrayBuilder).ax = function (requiredCapacity) {
    if (this.b10_1.length < requiredCapacity)
      this.b10_1 = copyOf(this.b10_1, coerceAtLeast(requiredCapacity, imul(this.b10_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).d10 = function (c) {
    this.hx();
    var tmp = this.b10_1;
    var _unary__edvuaz = this.c10_1;
    this.c10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).yw = function () {
    return copyOf(this.b10_1, this.c10_1);
  };
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_2()));
  }
  protoOf(CharArraySerializer_0).h10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.h10((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).i10 = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).su = function (_this__u8e3s4) {
    return this.i10((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).dx = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).j10 = function (decoder, index, builder, checkIndex) {
    builder.m10(decoder.or(this.uw_1, index));
  };
  protoOf(CharArraySerializer_0).av = function (decoder, index, builder, checkIndex) {
    return this.j10(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.j10(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).n10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ts(this.uw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).fx = function (encoder, content, size) {
    return this.n10(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).q10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.q10((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).r10 = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).su = function (_this__u8e3s4) {
    return this.r10((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).dx = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).s10 = function (decoder, index, builder, checkIndex) {
    builder.v10(decoder.nr(this.uw_1, index));
  };
  protoOf(DoubleArraySerializer_0).av = function (decoder, index, builder, checkIndex) {
    return this.s10(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.s10(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).w10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ss(this.uw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).fx = function (encoder, content, size) {
    return this.w10(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).z10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.z10((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).a11 = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).su = function (_this__u8e3s4) {
    return this.a11((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).dx = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).b11 = function (decoder, index, builder, checkIndex) {
    builder.e11(decoder.mr(this.uw_1, index));
  };
  protoOf(FloatArraySerializer_0).av = function (decoder, index, builder, checkIndex) {
    return this.b11(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.b11(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).f11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.rs(this.uw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).fx = function (encoder, content, size) {
    return this.f11(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(Companion_getInstance_3()));
  }
  protoOf(LongArraySerializer_0).i11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.i11((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).j11 = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).su = function (_this__u8e3s4) {
    return this.j11((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).dx = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).k11 = function (decoder, index, builder, checkIndex) {
    builder.n11(decoder.lr(this.uw_1, index));
  };
  protoOf(LongArraySerializer_0).av = function (decoder, index, builder, checkIndex) {
    return this.k11(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.k11(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).o11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.qs(this.uw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).fx = function (encoder, content, size) {
    return this.o11(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_4()));
  }
  protoOf(ULongArraySerializer_0).r11 = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.r11(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.rn_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).s11 = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).su = function (_this__u8e3s4) {
    return this.s11(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.rn_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).t11 = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).dx = function () {
    return new ULongArray(this.t11());
  };
  protoOf(ULongArraySerializer_0).u11 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.qr(this.uw_1, index).wq();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.x11(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).av = function (decoder, index, builder, checkIndex) {
    return this.u11(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.u11(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).y11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.vs(this.uw_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.fs(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).fx = function (encoder, content, size) {
    return this.y11(encoder, content instanceof ULongArray ? content.rn_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).b12 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.b12((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).c12 = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).su = function (_this__u8e3s4) {
    return this.c12((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).dx = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).d12 = function (decoder, index, builder, checkIndex) {
    builder.g12(decoder.kr(this.uw_1, index));
  };
  protoOf(IntArraySerializer_0).av = function (decoder, index, builder, checkIndex) {
    return this.d12(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.d12(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).h12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ps(this.uw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).fx = function (encoder, content, size) {
    return this.h12(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(Companion_getInstance_5()));
  }
  protoOf(UIntArraySerializer_0).k12 = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.k12(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.gn_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).l12 = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).su = function (_this__u8e3s4) {
    return this.l12(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.gn_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).m12 = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).dx = function () {
    return new UIntArray(this.m12());
  };
  protoOf(UIntArraySerializer_0).n12 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.qr(this.uw_1, index).vq();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.q12(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).av = function (decoder, index, builder, checkIndex) {
    return this.n12(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.n12(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).r12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.vs(this.uw_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.es(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).fx = function (encoder, content, size) {
    return this.r12(encoder, content instanceof UIntArray ? content.gn_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).u12 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.u12((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).v12 = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).su = function (_this__u8e3s4) {
    return this.v12((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).dx = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).w12 = function (decoder, index, builder, checkIndex) {
    builder.z12(decoder.jr(this.uw_1, index));
  };
  protoOf(ShortArraySerializer_0).av = function (decoder, index, builder, checkIndex) {
    return this.w12(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.w12(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).a13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.os(this.uw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).fx = function (encoder, content, size) {
    return this.a13(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_6()));
  }
  protoOf(UShortArraySerializer_0).d13 = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.d13(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.co_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).e13 = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).su = function (_this__u8e3s4) {
    return this.e13(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.co_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).f13 = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).dx = function () {
    return new UShortArray(this.f13());
  };
  protoOf(UShortArraySerializer_0).g13 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.qr(this.uw_1, index).uq();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.j13(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).av = function (decoder, index, builder, checkIndex) {
    return this.g13(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.g13(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).k13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.vs(this.uw_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.ds(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).fx = function (encoder, content, size) {
    return this.k13(encoder, content instanceof UShortArray ? content.co_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_7()));
  }
  protoOf(UByteArraySerializer_0).n13 = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.n13(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.vm_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).o13 = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).su = function (_this__u8e3s4) {
    return this.o13(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.vm_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).p13 = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).dx = function () {
    return new UByteArray(this.p13());
  };
  protoOf(UByteArraySerializer_0).q13 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.qr(this.uw_1, index).tq();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.t13(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).av = function (decoder, index, builder, checkIndex) {
    return this.q13(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.q13(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).u13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.vs(this.uw_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.cs(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).fx = function (encoder, content, size) {
    return this.u13(encoder, content instanceof UByteArray ? content.vm_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).x13 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.x13((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).y13 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).su = function (_this__u8e3s4) {
    return this.y13((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).dx = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).z13 = function (decoder, index, builder, checkIndex) {
    builder.c14(decoder.hr(this.uw_1, index));
  };
  protoOf(BooleanArraySerializer_0).av = function (decoder, index, builder, checkIndex) {
    return this.z13(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.z13(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).d14 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ms(this.uw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).fx = function (encoder, content, size) {
    return this.d14(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.k10_1 = bufferWithData;
    this.l10_1 = bufferWithData.length;
    this.ax(10);
  }
  protoOf(CharArrayBuilder).ww = function () {
    return this.l10_1;
  };
  protoOf(CharArrayBuilder).ax = function (requiredCapacity) {
    if (this.k10_1.length < requiredCapacity)
      this.k10_1 = copyOf_0(this.k10_1, coerceAtLeast(requiredCapacity, imul(this.k10_1.length, 2)));
  };
  protoOf(CharArrayBuilder).m10 = function (c) {
    this.hx();
    var tmp = this.k10_1;
    var _unary__edvuaz = this.l10_1;
    this.l10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).yw = function () {
    return copyOf_0(this.k10_1, this.l10_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.t10_1 = bufferWithData;
    this.u10_1 = bufferWithData.length;
    this.ax(10);
  }
  protoOf(DoubleArrayBuilder).ww = function () {
    return this.u10_1;
  };
  protoOf(DoubleArrayBuilder).ax = function (requiredCapacity) {
    if (this.t10_1.length < requiredCapacity)
      this.t10_1 = copyOf_1(this.t10_1, coerceAtLeast(requiredCapacity, imul(this.t10_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).v10 = function (c) {
    this.hx();
    var tmp = this.t10_1;
    var _unary__edvuaz = this.u10_1;
    this.u10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).yw = function () {
    return copyOf_1(this.t10_1, this.u10_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.c11_1 = bufferWithData;
    this.d11_1 = bufferWithData.length;
    this.ax(10);
  }
  protoOf(FloatArrayBuilder).ww = function () {
    return this.d11_1;
  };
  protoOf(FloatArrayBuilder).ax = function (requiredCapacity) {
    if (this.c11_1.length < requiredCapacity)
      this.c11_1 = copyOf_2(this.c11_1, coerceAtLeast(requiredCapacity, imul(this.c11_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).e11 = function (c) {
    this.hx();
    var tmp = this.c11_1;
    var _unary__edvuaz = this.d11_1;
    this.d11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).yw = function () {
    return copyOf_2(this.c11_1, this.d11_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.l11_1 = bufferWithData;
    this.m11_1 = bufferWithData.length;
    this.ax(10);
  }
  protoOf(LongArrayBuilder).ww = function () {
    return this.m11_1;
  };
  protoOf(LongArrayBuilder).ax = function (requiredCapacity) {
    if (this.l11_1.length < requiredCapacity)
      this.l11_1 = copyOf_3(this.l11_1, coerceAtLeast(requiredCapacity, imul(this.l11_1.length, 2)));
  };
  protoOf(LongArrayBuilder).n11 = function (c) {
    this.hx();
    var tmp = this.l11_1;
    var _unary__edvuaz = this.m11_1;
    this.m11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).yw = function () {
    return copyOf_3(this.l11_1, this.m11_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.v11_1 = bufferWithData;
    this.w11_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.ax(10);
  }
  protoOf(ULongArrayBuilder).ww = function () {
    return this.w11_1;
  };
  protoOf(ULongArrayBuilder).ax = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.v11_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.v11_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.v11_1), 2));
      tmp.v11_1 = _ULongArray___init__impl__twm1l3_0(copyOf_3(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).x11 = function (c) {
    this.hx();
    var tmp = this.v11_1;
    var _unary__edvuaz = this.w11_1;
    this.w11_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).e14 = function () {
    var tmp0 = this.v11_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.w11_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_3(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).yw = function () {
    return new ULongArray(this.e14());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.e12_1 = bufferWithData;
    this.f12_1 = bufferWithData.length;
    this.ax(10);
  }
  protoOf(IntArrayBuilder).ww = function () {
    return this.f12_1;
  };
  protoOf(IntArrayBuilder).ax = function (requiredCapacity) {
    if (this.e12_1.length < requiredCapacity)
      this.e12_1 = copyOf_4(this.e12_1, coerceAtLeast(requiredCapacity, imul(this.e12_1.length, 2)));
  };
  protoOf(IntArrayBuilder).g12 = function (c) {
    this.hx();
    var tmp = this.e12_1;
    var _unary__edvuaz = this.f12_1;
    this.f12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).yw = function () {
    return copyOf_4(this.e12_1, this.f12_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.o12_1 = bufferWithData;
    this.p12_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.ax(10);
  }
  protoOf(UIntArrayBuilder).ww = function () {
    return this.p12_1;
  };
  protoOf(UIntArrayBuilder).ax = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.o12_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.o12_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.o12_1), 2));
      tmp.o12_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_4(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).q12 = function (c) {
    this.hx();
    var tmp = this.o12_1;
    var _unary__edvuaz = this.p12_1;
    this.p12_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).f14 = function () {
    var tmp0 = this.o12_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.p12_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_4(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).yw = function () {
    return new UIntArray(this.f14());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.x12_1 = bufferWithData;
    this.y12_1 = bufferWithData.length;
    this.ax(10);
  }
  protoOf(ShortArrayBuilder).ww = function () {
    return this.y12_1;
  };
  protoOf(ShortArrayBuilder).ax = function (requiredCapacity) {
    if (this.x12_1.length < requiredCapacity)
      this.x12_1 = copyOf_5(this.x12_1, coerceAtLeast(requiredCapacity, imul(this.x12_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).z12 = function (c) {
    this.hx();
    var tmp = this.x12_1;
    var _unary__edvuaz = this.y12_1;
    this.y12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).yw = function () {
    return copyOf_5(this.x12_1, this.y12_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.h13_1 = bufferWithData;
    this.i13_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.ax(10);
  }
  protoOf(UShortArrayBuilder).ww = function () {
    return this.i13_1;
  };
  protoOf(UShortArrayBuilder).ax = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.h13_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.h13_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.h13_1), 2));
      tmp.h13_1 = _UShortArray___init__impl__9b26ef_0(copyOf_5(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).j13 = function (c) {
    this.hx();
    var tmp = this.h13_1;
    var _unary__edvuaz = this.i13_1;
    this.i13_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).g14 = function () {
    var tmp0 = this.h13_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.i13_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_5(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).yw = function () {
    return new UShortArray(this.g14());
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.r13_1 = bufferWithData;
    this.s13_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.ax(10);
  }
  protoOf(UByteArrayBuilder).ww = function () {
    return this.s13_1;
  };
  protoOf(UByteArrayBuilder).ax = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.r13_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.r13_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.r13_1), 2));
      tmp.r13_1 = _UByteArray___init__impl__ip4y9n_0(copyOf(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).t13 = function (c) {
    this.hx();
    var tmp = this.r13_1;
    var _unary__edvuaz = this.s13_1;
    this.s13_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).h14 = function () {
    var tmp0 = this.r13_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.s13_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).yw = function () {
    return new UByteArray(this.h14());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.a14_1 = bufferWithData;
    this.b14_1 = bufferWithData.length;
    this.ax(10);
  }
  protoOf(BooleanArrayBuilder).ww = function () {
    return this.b14_1;
  };
  protoOf(BooleanArrayBuilder).ax = function (requiredCapacity) {
    if (this.a14_1.length < requiredCapacity)
      this.a14_1 = copyOf_6(this.a14_1, coerceAtLeast(requiredCapacity, imul(this.a14_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).c14 = function (c) {
    this.hx();
    var tmp = this.a14_1;
    var _unary__edvuaz = this.b14_1;
    this.b14_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).yw = function () {
    return copyOf_6(this.a14_1, this.b14_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.i14_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).eo = function () {
    return this.i14_1;
  };
  protoOf(StringSerializer).j14 = function (encoder, value) {
    return encoder.js(value);
  };
  protoOf(StringSerializer).fo = function (encoder, value) {
    return this.j14(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).go = function (decoder) {
    return decoder.ar();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.k14_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).eo = function () {
    return this.k14_1;
  };
  protoOf(BooleanSerializer).l14 = function (encoder, value) {
    return encoder.bs(value);
  };
  protoOf(BooleanSerializer).fo = function (encoder, value) {
    return this.l14(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).go = function (decoder) {
    return decoder.sq();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.m14_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).eo = function () {
    return this.m14_1;
  };
  protoOf(IntSerializer).n14 = function (encoder, value) {
    return encoder.es(value);
  };
  protoOf(IntSerializer).fo = function (encoder, value) {
    return this.n14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).go = function (decoder) {
    return decoder.vq();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.o14_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).eo = function () {
    return this.o14_1;
  };
  protoOf(FloatSerializer).p14 = function (encoder, value) {
    return encoder.gs(value);
  };
  protoOf(FloatSerializer).fo = function (encoder, value) {
    return this.p14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).go = function (decoder) {
    return decoder.xq();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.q14_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).eo = function () {
    return this.q14_1;
  };
  protoOf(DoubleSerializer).r14 = function (encoder, value) {
    return encoder.hs(value);
  };
  protoOf(DoubleSerializer).fo = function (encoder, value) {
    return this.r14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).go = function (decoder) {
    return decoder.yq();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.s14_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).eo = function () {
    return this.s14_1;
  };
  protoOf(LongSerializer).t14 = function (encoder, value) {
    return encoder.fs(value);
  };
  protoOf(LongSerializer).fo = function (encoder, value) {
    return this.t14(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).go = function (decoder) {
    return decoder.wq();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().s2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.u14_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.u14_1 = serialName;
    this.v14_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).lp = function () {
    return this.u14_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).mp = function () {
    return this.v14_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).op = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).qp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).rp = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).up = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).tp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).sp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.u14_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.u14_1 === other.u14_1 && equals(this.v14_1, other.v14_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.u14_1) + imul(31, this.v14_1.hashCode()) | 0;
  };
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().u2();
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var primitive = _iterator__ex2g4s.v();
      var primitiveName = primitive.eo().lp();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).o() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.w14_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).eo = function () {
    return this.w14_1;
  };
  protoOf(ByteSerializer).x14 = function (encoder, value) {
    return encoder.cs(value);
  };
  protoOf(ByteSerializer).fo = function (encoder, value) {
    return this.x14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).go = function (decoder) {
    return decoder.tq();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.y14_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).eo = function () {
    return this.y14_1;
  };
  protoOf(ShortSerializer).z14 = function (encoder, value) {
    return encoder.ds(value);
  };
  protoOf(ShortSerializer).fo = function (encoder, value) {
    return this.z14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).go = function (decoder) {
    return decoder.uq();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.a15_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).eo = function () {
    return this.a15_1;
  };
  protoOf(CharSerializer).b15 = function (encoder, value) {
    return encoder.is(value);
  };
  protoOf(CharSerializer).fo = function (encoder, value) {
    return this.b15(encoder, value instanceof Char ? value.v1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).c15 = function (decoder) {
    return decoder.zq();
  };
  protoOf(CharSerializer).go = function (decoder) {
    return new Char(this.c15(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.d15_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).eo = function () {
    return this.d15_1.eo();
  };
  protoOf(UnitSerializer).e15 = function (encoder, value) {
    this.d15_1.wo(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).fo = function (encoder, value) {
    return this.e15(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).f15 = function (decoder) {
    this.d15_1.go(decoder);
  };
  protoOf(UnitSerializer).go = function (decoder) {
    this.f15(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = initBuiltins();
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).i15 = function (_this__u8e3s4, index) {
    return this.k15(this.j15(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).k15 = function (nestedName) {
    var tmp0_elvis_lhs = this.n15();
    return this.o15(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).j15 = function (descriptor, index) {
    return descriptor.qp(index);
  };
  protoOf(NamedValueDecoder).o15 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).p15 = function () {
    return this.l15_1.r() ? '$' : joinToString(this.l15_1, '.', '$.');
  };
  function NamedValueEncoder() {
    TaggedEncoder.call(this);
  }
  protoOf(NamedValueEncoder).i15 = function (_this__u8e3s4, index) {
    return this.k15(this.j15(_this__u8e3s4, index));
  };
  protoOf(NamedValueEncoder).k15 = function (nestedName) {
    var tmp0_elvis_lhs = this.n15();
    return this.o15(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueEncoder).j15 = function (descriptor, index) {
    return descriptor.qp(index);
  };
  protoOf(NamedValueEncoder).o15 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  function tagBlock($this, tag, block) {
    $this.d16(tag);
    var r = block();
    if (!$this.m15_1) {
      $this.e16();
    }
    $this.m15_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.dr($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.eo().ep();
      var tmp;
      if (isNullabilitySupported || tmp0.qq()) {
        tmp = this$0.dr($deserializer, $previousValue);
      } else {
        tmp = tmp0.rq();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.l15_1 = ArrayList_init_$Create$_0();
    this.m15_1 = false;
  }
  protoOf(TaggedDecoder).ur = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).q15 = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).r15 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).s15 = function (tag) {
    var tmp = this.q15(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).t15 = function (tag) {
    var tmp = this.q15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).u15 = function (tag) {
    var tmp = this.q15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).v15 = function (tag) {
    var tmp = this.q15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).w15 = function (tag) {
    var tmp = this.q15(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).x15 = function (tag) {
    var tmp = this.q15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).y15 = function (tag) {
    var tmp = this.q15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).z15 = function (tag) {
    var tmp = this.q15(tag);
    return tmp instanceof Char ? tmp.v1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).a16 = function (tag) {
    var tmp = this.q15(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).b16 = function (tag, enumDescriptor) {
    var tmp = this.q15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).c16 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.d16(tag);
    return this;
  };
  protoOf(TaggedDecoder).dr = function (deserializer, previousValue) {
    return this.er(deserializer);
  };
  protoOf(TaggedDecoder).cr = function (descriptor) {
    return this.c16(this.e16(), descriptor);
  };
  protoOf(TaggedDecoder).qq = function () {
    var tmp0_elvis_lhs = this.n15();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.r15(currentTag);
  };
  protoOf(TaggedDecoder).rq = function () {
    return null;
  };
  protoOf(TaggedDecoder).sq = function () {
    return this.s15(this.e16());
  };
  protoOf(TaggedDecoder).tq = function () {
    return this.t15(this.e16());
  };
  protoOf(TaggedDecoder).uq = function () {
    return this.u15(this.e16());
  };
  protoOf(TaggedDecoder).vq = function () {
    return this.v15(this.e16());
  };
  protoOf(TaggedDecoder).wq = function () {
    return this.w15(this.e16());
  };
  protoOf(TaggedDecoder).xq = function () {
    return this.x15(this.e16());
  };
  protoOf(TaggedDecoder).yq = function () {
    return this.y15(this.e16());
  };
  protoOf(TaggedDecoder).zq = function () {
    return this.z15(this.e16());
  };
  protoOf(TaggedDecoder).ar = function () {
    return this.a16(this.e16());
  };
  protoOf(TaggedDecoder).br = function (enumDescriptor) {
    return this.b16(this.e16(), enumDescriptor);
  };
  protoOf(TaggedDecoder).fr = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).gr = function (descriptor) {
  };
  protoOf(TaggedDecoder).hr = function (descriptor, index) {
    return this.s15(this.i15(descriptor, index));
  };
  protoOf(TaggedDecoder).ir = function (descriptor, index) {
    return this.t15(this.i15(descriptor, index));
  };
  protoOf(TaggedDecoder).jr = function (descriptor, index) {
    return this.u15(this.i15(descriptor, index));
  };
  protoOf(TaggedDecoder).kr = function (descriptor, index) {
    return this.v15(this.i15(descriptor, index));
  };
  protoOf(TaggedDecoder).lr = function (descriptor, index) {
    return this.w15(this.i15(descriptor, index));
  };
  protoOf(TaggedDecoder).mr = function (descriptor, index) {
    return this.x15(this.i15(descriptor, index));
  };
  protoOf(TaggedDecoder).nr = function (descriptor, index) {
    return this.y15(this.i15(descriptor, index));
  };
  protoOf(TaggedDecoder).or = function (descriptor, index) {
    return this.z15(this.i15(descriptor, index));
  };
  protoOf(TaggedDecoder).pr = function (descriptor, index) {
    return this.a16(this.i15(descriptor, index));
  };
  protoOf(TaggedDecoder).qr = function (descriptor, index) {
    return this.c16(this.i15(descriptor, index), descriptor.tp(index));
  };
  protoOf(TaggedDecoder).rr = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.i15(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).tr = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.i15(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).n15 = function () {
    return lastOrNull(this.l15_1);
  };
  protoOf(TaggedDecoder).d16 = function (name) {
    this.l15_1.b1(name);
  };
  protoOf(TaggedDecoder).e16 = function () {
    var r = this.l15_1.b3(get_lastIndex_0(this.l15_1));
    this.m15_1 = true;
    return r;
  };
  function encodeElement($this, desc, index) {
    var tag = $this.i15(desc, index);
    $this.d16(tag);
    return true;
  }
  function TaggedEncoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.g16_1 = ArrayList_init_$Create$_0();
  }
  protoOf(TaggedEncoder).ur = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedEncoder).h16 = function (tag, value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(TaggedEncoder).i16 = function (tag) {
  };
  protoOf(TaggedEncoder).j16 = function (tag) {
    throw SerializationException_init_$Create$_0('null is not supported');
  };
  protoOf(TaggedEncoder).k16 = function (tag, value) {
    return this.h16(tag, value);
  };
  protoOf(TaggedEncoder).l16 = function (tag, value) {
    return this.h16(tag, value);
  };
  protoOf(TaggedEncoder).m16 = function (tag, value) {
    return this.h16(tag, value);
  };
  protoOf(TaggedEncoder).n16 = function (tag, value) {
    return this.h16(tag, value);
  };
  protoOf(TaggedEncoder).o16 = function (tag, value) {
    return this.h16(tag, value);
  };
  protoOf(TaggedEncoder).p16 = function (tag, value) {
    return this.h16(tag, value);
  };
  protoOf(TaggedEncoder).q16 = function (tag, value) {
    return this.h16(tag, value);
  };
  protoOf(TaggedEncoder).r16 = function (tag, value) {
    return this.h16(tag, new Char(value));
  };
  protoOf(TaggedEncoder).s16 = function (tag, value) {
    return this.h16(tag, value);
  };
  protoOf(TaggedEncoder).t16 = function (tag, enumDescriptor, ordinal) {
    return this.h16(tag, ordinal);
  };
  protoOf(TaggedEncoder).u16 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.d16(tag);
    return this;
  };
  protoOf(TaggedEncoder).ls = function (descriptor) {
    return this.u16(this.e16(), descriptor);
  };
  protoOf(TaggedEncoder).at = function () {
    return this.i16(this.w16());
  };
  protoOf(TaggedEncoder).as = function () {
    return this.j16(this.e16());
  };
  protoOf(TaggedEncoder).bs = function (value) {
    return this.q16(this.e16(), value);
  };
  protoOf(TaggedEncoder).cs = function (value) {
    return this.l16(this.e16(), value);
  };
  protoOf(TaggedEncoder).ds = function (value) {
    return this.m16(this.e16(), value);
  };
  protoOf(TaggedEncoder).es = function (value) {
    return this.k16(this.e16(), value);
  };
  protoOf(TaggedEncoder).fs = function (value) {
    return this.n16(this.e16(), value);
  };
  protoOf(TaggedEncoder).gs = function (value) {
    return this.o16(this.e16(), value);
  };
  protoOf(TaggedEncoder).hs = function (value) {
    return this.p16(this.e16(), value);
  };
  protoOf(TaggedEncoder).is = function (value) {
    return this.r16(this.e16(), value);
  };
  protoOf(TaggedEncoder).js = function (value) {
    return this.s16(this.e16(), value);
  };
  protoOf(TaggedEncoder).ks = function (enumDescriptor, index) {
    return this.t16(this.e16(), enumDescriptor, index);
  };
  protoOf(TaggedEncoder).fr = function (descriptor) {
    return this;
  };
  protoOf(TaggedEncoder).gr = function (descriptor) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.g16_1.r()) {
      this.e16();
    }
    this.v16(descriptor);
  };
  protoOf(TaggedEncoder).v16 = function (descriptor) {
  };
  protoOf(TaggedEncoder).ms = function (descriptor, index, value) {
    return this.q16(this.i15(descriptor, index), value);
  };
  protoOf(TaggedEncoder).ns = function (descriptor, index, value) {
    return this.l16(this.i15(descriptor, index), value);
  };
  protoOf(TaggedEncoder).os = function (descriptor, index, value) {
    return this.m16(this.i15(descriptor, index), value);
  };
  protoOf(TaggedEncoder).ps = function (descriptor, index, value) {
    return this.k16(this.i15(descriptor, index), value);
  };
  protoOf(TaggedEncoder).qs = function (descriptor, index, value) {
    return this.n16(this.i15(descriptor, index), value);
  };
  protoOf(TaggedEncoder).rs = function (descriptor, index, value) {
    return this.o16(this.i15(descriptor, index), value);
  };
  protoOf(TaggedEncoder).ss = function (descriptor, index, value) {
    return this.p16(this.i15(descriptor, index), value);
  };
  protoOf(TaggedEncoder).ts = function (descriptor, index, value) {
    return this.r16(this.i15(descriptor, index), value);
  };
  protoOf(TaggedEncoder).us = function (descriptor, index, value) {
    return this.s16(this.i15(descriptor, index), value);
  };
  protoOf(TaggedEncoder).vs = function (descriptor, index) {
    return this.u16(this.i15(descriptor, index), descriptor.tp(index));
  };
  protoOf(TaggedEncoder).ws = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.xs(serializer, value);
    }
  };
  protoOf(TaggedEncoder).ys = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.zs(serializer, value);
    }
  };
  protoOf(TaggedEncoder).w16 = function () {
    return last(this.g16_1);
  };
  protoOf(TaggedEncoder).n15 = function () {
    return lastOrNull(this.g16_1);
  };
  protoOf(TaggedEncoder).d16 = function (name) {
    this.g16_1.b1(name);
  };
  protoOf(TaggedEncoder).e16 = function () {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.g16_1.r()) {
      tmp = this.g16_1.b3(get_lastIndex_0(this.g16_1));
    } else {
      throw SerializationException_init_$Create$_0('No tag in stack for requested element');
    }
    return tmp;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.x16_1 = key;
    this.y16_1 = value;
  }
  protoOf(MapEntry).l1 = function () {
    return this.x16_1;
  };
  protoOf(MapEntry).m1 = function () {
    return this.y16_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.x16_1) + ', value=' + toString_0(this.y16_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.x16_1 == null ? 0 : hashCode(this.x16_1);
    result = imul(result, 31) + (this.y16_1 == null ? 0 : hashCode(this.y16_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.x16_1, tmp0_other_with_cast.x16_1))
      return false;
    if (!equals(this.y16_1, tmp0_other_with_cast.y16_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.so('key', $keySerializer.eo());
      $this$buildSerialDescriptor.so('value', $valueSerializer.eo());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.b17_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).eo = function () {
    return this.b17_1;
  };
  protoOf(MapEntrySerializer_0).c17 = function (_this__u8e3s4) {
    return _this__u8e3s4.l1();
  };
  protoOf(MapEntrySerializer_0).d17 = function (_this__u8e3s4) {
    return this.c17((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).e17 = function (_this__u8e3s4) {
    return _this__u8e3s4.m1();
  };
  protoOf(MapEntrySerializer_0).f17 = function (_this__u8e3s4) {
    return this.e17((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).g17 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.so('first', $keySerializer.eo());
      $this$buildClassSerialDescriptor.so('second', $valueSerializer.eo());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.m17_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).eo = function () {
    return this.m17_1;
  };
  protoOf(PairSerializer_0).n17 = function (_this__u8e3s4) {
    return _this__u8e3s4.tf_1;
  };
  protoOf(PairSerializer_0).d17 = function (_this__u8e3s4) {
    return this.n17(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).o17 = function (_this__u8e3s4) {
    return _this__u8e3s4.uf_1;
  };
  protoOf(PairSerializer_0).f17 = function (_this__u8e3s4) {
    return this.o17(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).g17 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.sr($this.s17_1, 0, $this.p17_1);
    var b = composite.sr($this.s17_1, 1, $this.q17_1);
    var c = composite.sr($this.s17_1, 2, $this.r17_1);
    composite.gr($this.s17_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.wr($this.s17_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.sr($this.s17_1, 0, $this.p17_1);
          break;
        case 1:
          b = composite.sr($this.s17_1, 1, $this.q17_1);
          break;
        case 2:
          c = composite.sr($this.s17_1, 2, $this.r17_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.gr($this.s17_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : !(b == null)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : !(c == null)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.so('first', this$0.p17_1.eo());
      $this$buildClassSerialDescriptor.so('second', this$0.q17_1.eo());
      $this$buildClassSerialDescriptor.so('third', this$0.r17_1.eo());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.p17_1 = aSerializer;
    this.q17_1 = bSerializer;
    this.r17_1 = cSerializer;
    var tmp = this;
    tmp.s17_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).eo = function () {
    return this.s17_1;
  };
  protoOf(TripleSerializer_0).t17 = function (encoder, value) {
    var structuredEncoder = encoder.fr(this.s17_1);
    structuredEncoder.ws(this.s17_1, 0, this.p17_1, value.em_1);
    structuredEncoder.ws(this.s17_1, 1, this.q17_1, value.fm_1);
    structuredEncoder.ws(this.s17_1, 2, this.r17_1, value.gm_1);
    structuredEncoder.gr(this.s17_1);
  };
  protoOf(TripleSerializer_0).fo = function (encoder, value) {
    return this.t17(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).go = function (decoder) {
    var composite = decoder.fr(this.s17_1);
    if (composite.vr()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.h17_1 = keySerializer;
    this.i17_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).j17 = function (encoder, value) {
    var structuredEncoder = encoder.fr(this.eo());
    structuredEncoder.ws(this.eo(), 0, this.h17_1, this.d17(value));
    structuredEncoder.ws(this.eo(), 1, this.i17_1, this.f17(value));
    structuredEncoder.gr(this.eo());
  };
  protoOf(KeyValueSerializer).fo = function (encoder, value) {
    return this.j17(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).go = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.eo();
    var composite = decoder.fr(descriptor);
    var tmp$ret$0;
    $l$block: {
      if (composite.vr()) {
        var key = composite.sr(this.eo(), 0, this.h17_1);
        var value = composite.sr(this.eo(), 1, this.i17_1);
        tmp$ret$0 = this.g17(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.wr(this.eo());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.sr(this.eo(), 0, this.h17_1);
            break;
          case 1:
            value_0 = composite.sr(this.eo(), 1, this.i17_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      var tmp = (key_0 == null ? true : !(key_0 == null)) ? key_0 : THROW_CCE();
      tmp$ret$0 = this.g17(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.gr(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.u17_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_6(Companion_getInstance_3()));
  }
  protoOf(ULongSerializer).eo = function () {
    return this.u17_1;
  };
  protoOf(ULongSerializer).v17 = function (encoder, value) {
    var tmp = encoder.ls(this.u17_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.fs(tmp$ret$0);
  };
  protoOf(ULongSerializer).fo = function (encoder, value) {
    return this.v17(encoder, value instanceof ULong ? value.mn_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).w17 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.cr(this.u17_1).wq();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).go = function (decoder) {
    return new ULong(this.w17(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.x17_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_7(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).eo = function () {
    return this.x17_1;
  };
  protoOf(UIntSerializer).y17 = function (encoder, value) {
    var tmp = encoder.ls(this.x17_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.es(tmp$ret$0);
  };
  protoOf(UIntSerializer).fo = function (encoder, value) {
    return this.y17(encoder, value instanceof UInt ? value.bn_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).z17 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.cr(this.x17_1).vq();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).go = function (decoder) {
    return new UInt(this.z17(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.a18_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_5(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).eo = function () {
    return this.a18_1;
  };
  protoOf(UByteSerializer).b18 = function (encoder, value) {
    var tmp = encoder.ls(this.a18_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.cs(tmp$ret$0);
  };
  protoOf(UByteSerializer).fo = function (encoder, value) {
    return this.b18(encoder, value instanceof UByte ? value.qm_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).c18 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.cr(this.a18_1).tq();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).go = function (decoder) {
    return new UByte(this.c18(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.d18_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).eo = function () {
    return this.d18_1;
  };
  protoOf(UShortSerializer).e18 = function (encoder, value) {
    var tmp = encoder.ls(this.d18_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.ds(tmp$ret$0);
  };
  protoOf(UShortSerializer).fo = function (encoder, value) {
    return this.e18(encoder, value instanceof UShort ? value.xn_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).f18 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.cr(this.d18_1).uq();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).go = function (decoder) {
    return new UShort(this.f18(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).ap = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.bp(kClass, typeArgumentsSerializers) : $super.bp.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.h18_1 = class2ContextualFactory;
    this.i18_1 = polyBase2Serializers;
    this.j18_1 = polyBase2DefaultSerializerProvider;
    this.k18_1 = polyBase2NamedSerializers;
    this.l18_1 = polyBase2DefaultDeserializerProvider;
    this.m18_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).zo = function () {
    return this.m18_1;
  };
  protoOf(SerialModuleImpl).et = function (baseClass, value) {
    if (!baseClass.oa(value))
      return null;
    var tmp0_safe_receiver = this.i18_1.s2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.j18_1.s2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).dt = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.k18_1.s2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).s2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.l18_1.s2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).bp = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.h18_1.s2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n18(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).g18 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.h18_1.k1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.l1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.m1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.q18_1;
        collector.r18(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.p18(kclass, serial.o18_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.i18_1.k1().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.l1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.m1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.k1().t();
      while (_iterator__ex2g4s_1.u()) {
        var element_1 = _iterator__ex2g4s_1.v();
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.l1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.m1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$11 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.s18(tmp_1, tmp_2, tmp$ret$11);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.j18_1.k1().t();
    while (_iterator__ex2g4s_2.u()) {
      var element_2 = _iterator__ex2g4s_2.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.l1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.m1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.t18(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.l18_1.k1().t();
    while (_iterator__ex2g4s_3.u()) {
      var element_3 = _iterator__ex2g4s_3.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.l1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.m1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.u18(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.q18_1 = serializer;
  }
  protoOf(Argless).n18 = function (typeArgumentsSerializers) {
    return this.q18_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.q18_1, this.q18_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.q18_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.o18_1 = provider;
  }
  protoOf(WithTypeArguments).n18 = function (typeArgumentsSerializers) {
    return this.o18_1(typeArgumentsSerializers);
  };
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap(), false);
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.v18_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.w18_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.x18_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.y18_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.z18_1 = HashMap_init_$Create$();
    this.a19_1 = false;
  }
  protoOf(SerializersModuleBuilder).r18 = function (kClass, serializer) {
    return this.b19(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).p18 = function (kClass, provider) {
    return this.b19(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).s18 = function (baseClass, actualClass, actualSerializer) {
    this.c19(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).t18 = function (baseClass, defaultSerializerProvider) {
    this.d19(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).u18 = function (baseClass, defaultDeserializerProvider) {
    this.e19(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).f19 = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.v18_1.s2(forClass);
      if (!(previous == null) && !equals(previous, provider)) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + toString(forClass) + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.v18_1.v2(forClass, provider);
    if (isInterface_0(forClass))
      this.a19_1 = true;
  };
  protoOf(SerializersModuleBuilder).b19 = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.f19(forClass, provider, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.f19.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).d19 = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.x18_1.s2(baseClass);
    if (!(previous == null) && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + toString(baseClass) + ' is already registered: ' + toString_0(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.x18_1.v2(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).e19 = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.z18_1.s2(baseClass);
    if (!(previous == null) && !equals(previous, defaultDeserializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + toString(baseClass) + ' is already registered: ' + toString_0(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.z18_1.v2(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).g19 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.eo().lp();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.w18_1;
    var value = this_0.s2(baseClass);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer = HashMap_init_$Create$();
      this_0.v2(baseClass, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var baseClassSerializers = tmp;
    // Inline function 'kotlin.collections.getOrPut' call
    var this_1 = this.y18_1;
    var value_0 = this_1.s2(baseClass);
    var tmp_0;
    if (value_0 == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer_0 = HashMap_init_$Create$();
      this_1.v2(baseClass, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    var names = tmp_0;
    var previousSerializer = baseClassSerializers.s2(concreteClass);
    if (!(previousSerializer == null) && !equals(previousSerializer, concreteSerializer)) {
      if (allowOverwrite)
        names.w2(previousSerializer.eo().lp());
      else
        throw SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass);
    }
    var previousByName = names.s2(name);
    if (!(previousByName == null) && !equals(previousByName, concreteSerializer)) {
      // Inline function 'kotlin.sequences.find' call
      var tmp0 = asSequence(baseClassSerializers);
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlin.sequences.firstOrNull' call
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element.m1() === previousByName) {
            tmp$ret$7 = element;
            break $l$block;
          }
        }
        tmp$ret$7 = null;
      }
      var tmp0_safe_receiver = tmp$ret$7;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l1();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        var message = 'Name ' + name + ' is registered in the module but no Kotlin class is associated with it.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var previousClass = tmp_1;
      if (allowOverwrite)
        baseClassSerializers.w2(previousClass);
      else
        throw IllegalArgumentException_init_$Create$("Multiple polymorphic serializers in a scope of '" + toString(baseClass) + "' " + ("have the same serial name '" + name + "': " + toString(concreteSerializer) + " for '" + toString(concreteClass) + "' and " + toString_0(previousByName) + " for '" + toString(previousClass) + "'"));
    }
    // Inline function 'kotlin.collections.set' call
    baseClassSerializers.v2(concreteClass, concreteSerializer);
    // Inline function 'kotlin.collections.set' call
    names.v2(name, concreteSerializer);
  };
  protoOf(SerializersModuleBuilder).c19 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.g19(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.g19.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).yw = function () {
    return new SerialModuleImpl(this.v18_1, this.w18_1, this.x18_1, this.y18_1, this.z18_1, this.a19_1);
  };
  function SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, $this) {
    SerializerAlreadyRegisteredException.call($this, 'Serializer for ' + toString(concreteClass) + ' already registered in the scope of ' + toString(baseClass));
    return $this;
  }
  function SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass) {
    var tmp = SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, objectCreate(protoOf(SerializerAlreadyRegisteredException)));
    captureStack(tmp, SerializerAlreadyRegisteredException_init_$Create$);
    return tmp;
  }
  function SerializerAlreadyRegisteredException(msg) {
    IllegalArgumentException_init_$Init$_0(msg, this);
    captureStack(this, SerializerAlreadyRegisteredException);
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.h19_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.h19_1.equals(tmp0_other_with_cast.h19_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.h19_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.h19_1) + ')';
  };
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp0_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().fb()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isInterface_0(_this__u8e3s4) {
    return get_isInterfaceHack(_this__u8e3s4);
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().nb());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = isInterface(assocObject, KSerializer) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.vz(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          tmp_0 = null;
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().ob(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_9(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().rb(), CharArraySerializer()), to(PrimitiveClasses_getInstance().mb(), serializer_10(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().wb(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().lb(), serializer_11(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().vb(), FloatArraySerializer()), to(getKClass(Long), serializer_6(Companion_getInstance_3())), to(get_longArrayClass(), LongArraySerializer()), to(getKClass(ULong), serializer_1(Companion_getInstance_4())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().jb(), serializer_7(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().ub(), IntArraySerializer()), to(getKClass(UInt), serializer_2(Companion_getInstance_5())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().ib(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().tb(), ShortArraySerializer()), to(getKClass(UShort), serializer_4(Companion_getInstance_6())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().hb(), serializer_5(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().sb(), ByteArraySerializer()), to(getKClass(UByte), serializer_3(Companion_getInstance_7())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().gb(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().qb(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().fb(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Instant), serializer_15(Companion_getInstance_0())), to(getKClass(Uuid), serializer_16(Companion_getInstance_1()))]);
  }
  function get_isInterfaceHack(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().fb())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function createCache$1($factory) {
    this.i19_1 = $factory;
  }
  protoOf(createCache$1).cp = function (key) {
    return this.i19_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.j19_1 = $factory;
  }
  protoOf(createParametrizedCache$1).dp = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.j19_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).ep = get_isNullable;
  protoOf(SerialDescriptorImpl).np = get_isInline;
  protoOf(AbstractDecoder).sr = decodeSerializableElement$default;
  protoOf(AbstractDecoder).er = decodeSerializableValue;
  protoOf(AbstractDecoder).vr = decodeSequentially;
  protoOf(AbstractDecoder).xr = decodeCollectionSize;
  protoOf(AbstractEncoder).at = encodeNotNullMark;
  protoOf(AbstractEncoder).bt = beginCollection;
  protoOf(AbstractEncoder).xs = encodeSerializableValue;
  protoOf(AbstractEncoder).zs = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).ct = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).ep = get_isNullable;
  protoOf(ListLikeDescriptor).np = get_isInline;
  protoOf(ListLikeDescriptor).pp = get_annotations;
  protoOf(MapLikeDescriptor).ep = get_isNullable;
  protoOf(MapLikeDescriptor).np = get_isInline;
  protoOf(MapLikeDescriptor).pp = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).ep = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).np = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).lz = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).ep = get_isNullable;
  protoOf(NothingSerialDescriptor).np = get_isInline;
  protoOf(NothingSerialDescriptor).pp = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).ep = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).np = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).pp = get_annotations;
  protoOf(TaggedDecoder).sr = decodeSerializableElement$default;
  protoOf(TaggedDecoder).er = decodeSerializableValue;
  protoOf(TaggedDecoder).vr = decodeSequentially;
  protoOf(TaggedDecoder).xr = decodeCollectionSize;
  protoOf(TaggedEncoder).bt = beginCollection;
  protoOf(TaggedEncoder).xs = encodeSerializableValue;
  protoOf(TaggedEncoder).zs = encodeNullableSerializableValue;
  protoOf(TaggedEncoder).ct = shouldEncodeElementDefault;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SerializationException_init_$Init$_0;
  _.$_$.b = SerializationException_init_$Create$_0;
  _.$_$.c = UnknownFieldException_init_$Create$;
  _.$_$.d = SEALED_getInstance;
  _.$_$.e = STRING_getInstance;
  _.$_$.f = CONTEXTUAL_getInstance;
  _.$_$.g = ENUM_getInstance;
  _.$_$.h = CLASS_getInstance;
  _.$_$.i = LIST_getInstance;
  _.$_$.j = MAP_getInstance;
  _.$_$.k = OBJECT_getInstance;
  _.$_$.l = BooleanSerializer_getInstance;
  _.$_$.m = ByteArraySerializer_getInstance;
  _.$_$.n = DoubleSerializer_getInstance;
  _.$_$.o = FloatSerializer_getInstance;
  _.$_$.p = IntSerializer_getInstance;
  _.$_$.q = LongSerializer_getInstance;
  _.$_$.r = StringSerializer_getInstance;
  _.$_$.s = ArraySerializer;
  _.$_$.t = ListSerializer;
  _.$_$.u = MapSerializer;
  _.$_$.v = get_nullable;
  _.$_$.w = serializer_0;
  _.$_$.x = serializer_4;
  _.$_$.y = serializer_2;
  _.$_$.z = serializer_3;
  _.$_$.a1 = serializer_1;
  _.$_$.b1 = PolymorphicKind;
  _.$_$.c1 = PrimitiveKind;
  _.$_$.d1 = PrimitiveSerialDescriptor;
  _.$_$.e1 = get_annotations;
  _.$_$.f1 = get_isInline;
  _.$_$.g1 = get_isNullable;
  _.$_$.h1 = SerialDescriptor;
  _.$_$.i1 = ENUM;
  _.$_$.j1 = buildClassSerialDescriptor;
  _.$_$.k1 = buildSerialDescriptor;
  _.$_$.l1 = getContextualDescriptor;
  _.$_$.m1 = AbstractDecoder;
  _.$_$.n1 = AbstractEncoder;
  _.$_$.o1 = CompositeDecoder;
  _.$_$.p1 = CompositeEncoder;
  _.$_$.q1 = Decoder;
  _.$_$.r1 = Encoder;
  _.$_$.s1 = AbstractPolymorphicSerializer;
  _.$_$.t1 = ArrayListSerializer;
  _.$_$.u1 = ElementMarker;
  _.$_$.v1 = typeParametersSerializers;
  _.$_$.w1 = GeneratedSerializer;
  _.$_$.x1 = InlinePrimitiveDescriptor;
  _.$_$.y1 = LinkedHashMapSerializer;
  _.$_$.z1 = NamedValueDecoder;
  _.$_$.a2 = NamedValueEncoder;
  _.$_$.b2 = PluginGeneratedSerialDescriptor;
  _.$_$.c2 = ReferenceArraySerializer;
  _.$_$.d2 = SerializerFactory;
  _.$_$.e2 = createSimpleEnumSerializer;
  _.$_$.f2 = jsonCachedSerialNames;
  _.$_$.g2 = throwArrayMissingFieldException;
  _.$_$.h2 = throwMissingFieldException;
  _.$_$.i2 = EmptySerializersModule_0;
  _.$_$.j2 = SerializersModuleBuilder;
  _.$_$.k2 = contextual;
  _.$_$.l2 = SerializersModuleCollector;
  _.$_$.m2 = DeserializationStrategy;
  _.$_$.n2 = KSerializer;
  _.$_$.o2 = MissingFieldException;
  _.$_$.p2 = SealedClassSerializer;
  _.$_$.q2 = SerializationException;
  _.$_$.r2 = SerializationStrategy;
  _.$_$.s2 = findPolymorphicSerializer;
  _.$_$.t2 = findPolymorphicSerializer_0;
  _.$_$.u2 = serializerOrNull;
  _.$_$.v2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
