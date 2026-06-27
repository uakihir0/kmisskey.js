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
  var protoOf = kotlin_kotlin.$_$.bc;
  var initMetadataForInterface = kotlin_kotlin.$_$.fb;
  var VOID = kotlin_kotlin.$_$.c;
  var getKClassFromExpression = kotlin_kotlin.$_$.uc;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.j2;
  var Unit_instance = kotlin_kotlin.$_$.w2;
  var constructCallableReference = kotlin_kotlin.$_$.ta;
  var emptyList = kotlin_kotlin.$_$.p6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.z2;
  var lazy = kotlin_kotlin.$_$.yg;
  var KProperty1 = kotlin_kotlin.$_$.ad;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ya;
  var toString = kotlin_kotlin.$_$.ec;
  var initMetadataForClass = kotlin_kotlin.$_$.bb;
  var objectCreate = kotlin_kotlin.$_$.ac;
  var captureStack = kotlin_kotlin.$_$.la;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.g4;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.i4;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.k4;
  var IllegalArgumentException = kotlin_kotlin.$_$.vf;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d3;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.p;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.o;
  var THROW_CCE = kotlin_kotlin.$_$.cg;
  var isInterface = kotlin_kotlin.$_$.qb;
  var KClass = kotlin_kotlin.$_$.xc;
  var Triple = kotlin_kotlin.$_$.dg;
  var getKClass = kotlin_kotlin.$_$.vc;
  var Pair = kotlin_kotlin.$_$.zf;
  var Entry = kotlin_kotlin.$_$.k5;
  var KtMap = kotlin_kotlin.$_$.m5;
  var KtMutableMap = kotlin_kotlin.$_$.p5;
  var LinkedHashMap = kotlin_kotlin.$_$.h5;
  var HashMap = kotlin_kotlin.$_$.f5;
  var KtSet = kotlin_kotlin.$_$.r5;
  var KtMutableSet = kotlin_kotlin.$_$.q5;
  var LinkedHashSet = kotlin_kotlin.$_$.i5;
  var HashSet = kotlin_kotlin.$_$.g5;
  var Collection = kotlin_kotlin.$_$.e5;
  var KtList = kotlin_kotlin.$_$.j5;
  var KtMutableList = kotlin_kotlin.$_$.n5;
  var ArrayList = kotlin_kotlin.$_$.d5;
  var copyToArray = kotlin_kotlin.$_$.m6;
  var Result = kotlin_kotlin.$_$.ag;
  var ensureNotNull = kotlin_kotlin.$_$.tg;
  var equals = kotlin_kotlin.$_$.va;
  var getStringHashCode = kotlin_kotlin.$_$.za;
  var isBlank = kotlin_kotlin.$_$.sd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j4;
  var toList = kotlin_kotlin.$_$.f8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.k3;
  var toHashSet = kotlin_kotlin.$_$.c8;
  var toBooleanArray = kotlin_kotlin.$_$.a8;
  var withIndex = kotlin_kotlin.$_$.m8;
  var to = kotlin_kotlin.$_$.eh;
  var toMap = kotlin_kotlin.$_$.h8;
  var lazy_0 = kotlin_kotlin.$_$.zg;
  var contentEquals = kotlin_kotlin.$_$.x5;
  var initMetadataForObject = kotlin_kotlin.$_$.hb;
  var Long = kotlin_kotlin.$_$.xf;
  var Char = kotlin_kotlin.$_$.nf;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.d;
  var Duration = kotlin_kotlin.$_$.hf;
  var Companion_getInstance = kotlin_kotlin.$_$.m2;
  var Instant = kotlin_kotlin.$_$.if;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.n2;
  var Uuid = kotlin_kotlin.$_$.kf;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.o2;
  var toIntOrNull = kotlin_kotlin.$_$.te;
  var hashCode = kotlin_kotlin.$_$.ab;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n4;
  var isArray = kotlin_kotlin.$_$.ib;
  var arrayIterator = kotlin_kotlin.$_$.ja;
  var asList = kotlin_kotlin.$_$.u5;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.f3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.o3;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.l3;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.p3;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.q3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.h3;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.i3;
  var until = kotlin_kotlin.$_$.pc;
  var step = kotlin_kotlin.$_$.oc;
  var getValue = kotlin_kotlin.$_$.y6;
  var longArray = kotlin_kotlin.$_$.vb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.cb;
  var get_lastIndex = kotlin_kotlin.$_$.f7;
  var shiftLeft = kotlin_kotlin.$_$.da;
  var bitwiseOr = kotlin_kotlin.$_$.o9;
  var equalsLong = kotlin_kotlin.$_$.u9;
  var invert = kotlin_kotlin.$_$.w9;
  var countTrailingZeroBits = kotlin_kotlin.$_$.rg;
  var indexOf = kotlin_kotlin.$_$.z6;
  var contentToString = kotlin_kotlin.$_$.b6;
  var Enum = kotlin_kotlin.$_$.sf;
  var joinToString = kotlin_kotlin.$_$.c7;
  var toString_0 = kotlin_kotlin.$_$.dh;
  var KTypeParameter = kotlin_kotlin.$_$.bd;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.j3;
  var booleanArray = kotlin_kotlin.$_$.ka;
  var emptyMap = kotlin_kotlin.$_$.q6;
  var contentHashCode = kotlin_kotlin.$_$.a6;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.e2;
  var isByteArray = kotlin_kotlin.$_$.kb;
  var coerceAtLeast = kotlin_kotlin.$_$.kc;
  var copyOf = kotlin_kotlin.$_$.h6;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.p2;
  var isCharArray = kotlin_kotlin.$_$.lb;
  var charArray = kotlin_kotlin.$_$.na;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.f2;
  var isDoubleArray = kotlin_kotlin.$_$.nb;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.g2;
  var isFloatArray = kotlin_kotlin.$_$.ob;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.q2;
  var isLongArray = kotlin_kotlin.$_$.x9;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.u2;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.p1;
  var ULongArray = kotlin_kotlin.$_$.ig;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.l1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i1;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.n1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.h2;
  var isIntArray = kotlin_kotlin.$_$.pb;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.t2;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.g1;
  var UIntArray = kotlin_kotlin.$_$.gg;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.c1;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.z;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.e1;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.a1;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.i2;
  var isShortArray = kotlin_kotlin.$_$.sb;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.v2;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.y1;
  var UShortArray = kotlin_kotlin.$_$.kg;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.u1;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.r1;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.w1;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.s1;
  var Companion_getInstance_7 = kotlin_kotlin.$_$.s2;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.x;
  var UByteArray = kotlin_kotlin.$_$.eg;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.u;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.q;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.v;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.r;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.d2;
  var isBooleanArray = kotlin_kotlin.$_$.jb;
  var copyOf_0 = kotlin_kotlin.$_$.g6;
  var copyOf_1 = kotlin_kotlin.$_$.i6;
  var copyOf_2 = kotlin_kotlin.$_$.j6;
  var copyOf_3 = kotlin_kotlin.$_$.e6;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.q1;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.m1;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.o1;
  var copyOf_4 = kotlin_kotlin.$_$.l6;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.h1;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.d1;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.f1;
  var copyOf_5 = kotlin_kotlin.$_$.d6;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.z1;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.v1;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.x1;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.y;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.t;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.w;
  var copyOf_6 = kotlin_kotlin.$_$.f6;
  var trimIndent = kotlin_kotlin.$_$.ef;
  var Unit = kotlin_kotlin.$_$.mg;
  var charSequenceLength = kotlin_kotlin.$_$.qa;
  var lastOrNull = kotlin_kotlin.$_$.h7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.g7;
  var last = kotlin_kotlin.$_$.i7;
  var ULong = kotlin_kotlin.$_$.jg;
  var UInt = kotlin_kotlin.$_$.hg;
  var UByte = kotlin_kotlin.$_$.fg;
  var UShort = kotlin_kotlin.$_$.lg;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ah;
  var asSequence = kotlin_kotlin.$_$.v5;
  var get_js = kotlin_kotlin.$_$.ub;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.l2;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var get_indices = kotlin_kotlin.$_$.b7;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.q4;
  var get_indices_0 = kotlin_kotlin.$_$.a7;
  var get_longArrayClass = kotlin_kotlin.$_$.y9;
  var mapOf = kotlin_kotlin.$_$.m7;
  var Companion_instance = kotlin_kotlin.$_$.r2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m;
  var createFailure = kotlin_kotlin.$_$.sg;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SerializationStrategy, 'SerializationStrategy');
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [SerializationStrategy, DeserializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicSerializer, 'PolymorphicSerializer', VOID, AbstractPolymorphicSerializer);
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
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(SEALED, 'SEALED', VOID, PolymorphicKind);
  initMetadataForObject(OPEN, 'OPEN', VOID, PolymorphicKind);
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
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
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.jp(this);
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
    return $super === VOID ? this.vs(descriptor, index, deserializer, previousValue) : $super.vs.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.js(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.ip(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.hp().iq();
    if (isNullabilitySupported) {
      return this.bu(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.et();
    } else {
      this.eu();
      this.bu(serializer, value);
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
  initMetadataForObject(ByteArraySerializer_0, 'ByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForClass(ByteArrayBuilder, 'ByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForObject(CharArraySerializer_0, 'CharArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(DoubleArraySerializer_0, 'DoubleArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(FloatArraySerializer_0, 'FloatArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(LongArraySerializer_0, 'LongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ULongArraySerializer_0, 'ULongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(IntArraySerializer_0, 'IntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UIntArraySerializer_0, 'UIntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ShortArraySerializer_0, 'ShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UShortArraySerializer_0, 'UShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UByteArraySerializer_0, 'UByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(BooleanArraySerializer_0, 'BooleanArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
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
    return this.t19(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
    var tmp0_elvis_lhs = _this__u8e3s4.kp(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.lp());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.mp(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(getKClassFromExpression(value), _this__u8e3s4.lp());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.vp('type', serializer_0(StringCompanionObject_instance).hp());
      $this$buildSerialDescriptor.vp('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.wp_1.o() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.pp_1 = this$0.xp_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.wp_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return constructCallableReference(function (p0) {
      return p0.hp();
    }, 1, 0, 1);
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.wp_1 = baseClass;
    this.xp_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.yp_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).lp = function () {
    return this.wp_1;
  };
  protoOf(PolymorphicSerializer).hp = function () {
    var tmp0 = this.yp_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.n1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.wp_1) + ')';
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
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    var tmp0_message = missingFields.e1() === 1 ? "Field '" + missingFields.d1(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing";
    MissingFieldException.call($this, tmp0_message, null, missingFields, serialName);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(message, cause, missingFields, serialName) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.aq_1 = missingFields;
    this.bq_1 = serialName;
  }
  protoOf(MissingFieldException).cq = function (newMessage) {
    return new MissingFieldException(newMessage, this, this.aq_1, this.bq_1);
  };
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
      var tmp$ret$2 = typeOrThrow(item);
      destination.b1(tmp$ret$2);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.r()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.eq(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.dq()) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.Result.getOrNull' call
        var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
        tmp_1 = _Result___get_isFailure__impl__jpiriv(this_1) ? null : _Result___get_value__impl__bjfvqg(this_1);
      }
      tmp = tmp_1;
    }
    var cachedSerializer = tmp;
    if (!(cachedSerializer == null))
      return cachedSerializer;
    var tmp_2;
    if (typeArguments.r()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.eq(rootClass) : tmp0_elvis_lhs;
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_3 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      tmp_2 = tmp_3;
    } else {
      var tmp2_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_4;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var serializers = tmp_4;
      var tmp3_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.fq(rootClass, serializers) : tmp3_elvis_lhs;
      var tmp_5;
      if (tmp4_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_5 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_5 = tmp4_elvis_lhs;
      }
      tmp_2 = tmp_5;
    }
    var contextualSerializer = tmp_2;
    var tmp_6;
    if (contextualSerializer == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_6 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp6_safe_receiver = tmp_6;
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
        var tmp$ret$2 = serializer(_this__u8e3s4, item);
        destination.b1(tmp$ret$2);
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
        var tmp$ret$5 = tmp_0;
        destination_0.b1(tmp$ret$5);
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
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().gq(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().gq(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().hq(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().hq(clazz, types);
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
    if (_this__u8e3s4.hp().iq()) {
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.eq(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.hp();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.nq_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.jq_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.mq_1 = original;
    this.nq_1 = kClass;
    this.oq_1 = this.mq_1.pq() + '<' + this.nq_1.o() + '>';
  }
  protoOf(ContextDescriptor).pq = function () {
    return this.oq_1;
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
    return equals(this.mq_1, another.mq_1) && another.nq_1.equals(this.nq_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.nq_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.oq_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.nq_1) + ', original: ' + toString(this.mq_1) + ')';
  };
  protoOf(ContextDescriptor).qq = function () {
    return this.mq_1.qq();
  };
  protoOf(ContextDescriptor).iq = function () {
    return this.mq_1.iq();
  };
  protoOf(ContextDescriptor).rq = function () {
    return this.mq_1.rq();
  };
  protoOf(ContextDescriptor).sq = function () {
    return this.mq_1.sq();
  };
  protoOf(ContextDescriptor).tq = function () {
    return this.mq_1.tq();
  };
  protoOf(ContextDescriptor).uq = function (index) {
    return this.mq_1.uq(index);
  };
  protoOf(ContextDescriptor).vq = function (name) {
    return this.mq_1.vq(name);
  };
  protoOf(ContextDescriptor).wq = function (index) {
    return this.mq_1.wq(index);
  };
  protoOf(ContextDescriptor).xq = function (index) {
    return this.mq_1.xq(index);
  };
  protoOf(ContextDescriptor).yq = function (index) {
    return this.mq_1.yq(index);
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
    this.ar_1 = $this_elementNames;
    this.zq_1 = $this_elementNames.sq();
  }
  protoOf(elementNames$1).u = function () {
    return this.zq_1 > 0;
  };
  protoOf(elementNames$1).v = function () {
    var tmp = this.ar_1.sq();
    var _unary__edvuaz = this.zq_1;
    this.zq_1 = _unary__edvuaz - 1 | 0;
    return this.ar_1.uq(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.br_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).t = function () {
    return new elementNames$1(this.br_1);
  };
  function elementDescriptors$1($this_elementDescriptors) {
    this.dr_1 = $this_elementDescriptors;
    this.cr_1 = $this_elementDescriptors.sq();
  }
  protoOf(elementDescriptors$1).u = function () {
    return this.cr_1 > 0;
  };
  protoOf(elementDescriptors$1).v = function () {
    var tmp = this.dr_1.sq();
    var _unary__edvuaz = this.cr_1;
    this.cr_1 = _unary__edvuaz - 1 | 0;
    return this.dr_1.xq(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.er_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).t = function () {
    return new elementDescriptors$1(this.er_1);
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
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.qp_1.e1(), toList(typeParameters), sdBuilder);
  }
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.qp_1.e1(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.np_1 = serialName;
    this.op_1 = false;
    this.pp_1 = emptyList();
    this.qp_1 = ArrayList_init_$Create$_0();
    this.rp_1 = HashSet_init_$Create$();
    this.sp_1 = ArrayList_init_$Create$_0();
    this.tp_1 = ArrayList_init_$Create$_0();
    this.up_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).fr = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.rp_1.b1(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.np_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.qp_1.b1(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.sp_1.b1(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.tp_1.b1(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.up_1.b1(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).vp = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.fr(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.fr.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.rr_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.n1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.qr_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef(p0);
    }, 1, 0, 2);
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.gr_1 = serialName;
    this.hr_1 = kind;
    this.ir_1 = elementsCount;
    this.jr_1 = builder.pp_1;
    this.kr_1 = toHashSet(builder.qp_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.qp_1;
    tmp.lr_1 = copyToArray(this_0);
    this.mr_1 = compactArray(builder.sp_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.tp_1;
    tmp_0.nr_1 = copyToArray(this_1);
    this.or_1 = toBooleanArray(builder.up_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.lr_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$4 = to(item.nf_1, item.mf_1);
      destination.b1(tmp$ret$4);
    }
    tmp_1.pr_1 = toMap(destination);
    this.qr_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.rr_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).pq = function () {
    return this.gr_1;
  };
  protoOf(SerialDescriptorImpl).qq = function () {
    return this.hr_1;
  };
  protoOf(SerialDescriptorImpl).sq = function () {
    return this.ir_1;
  };
  protoOf(SerialDescriptorImpl).tq = function () {
    return this.jr_1;
  };
  protoOf(SerialDescriptorImpl).sr = function () {
    return this.kr_1;
  };
  protoOf(SerialDescriptorImpl).uq = function (index) {
    return getChecked(this.lr_1, index);
  };
  protoOf(SerialDescriptorImpl).vq = function (name) {
    var tmp0_elvis_lhs = this.pr_1.s2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).wq = function (index) {
    return getChecked(this.nr_1, index);
  };
  protoOf(SerialDescriptorImpl).xq = function (index) {
    return getChecked(this.mr_1, index);
  };
  protoOf(SerialDescriptorImpl).yq = function (index) {
    return getChecked_0(this.or_1, index);
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
      if (!(this.pq() === other.pq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.qr_1, other.qr_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.sq() === other.sq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.sq();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.xq(index).pq() === other.xq(index).pq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.xq(index).qq(), other.xq(index).qq())) {
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
  protoOf(AbstractDecoder).tr = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).ur = function () {
    return true;
  };
  protoOf(AbstractDecoder).vr = function () {
    return null;
  };
  protoOf(AbstractDecoder).wr = function () {
    var tmp = this.tr();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).xr = function () {
    var tmp = this.tr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).yr = function () {
    var tmp = this.tr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).zr = function () {
    var tmp = this.tr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).as = function () {
    var tmp = this.tr();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).bs = function () {
    var tmp = this.tr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).cs = function () {
    var tmp = this.tr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ds = function () {
    var tmp = this.tr();
    return tmp instanceof Char ? tmp.w1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).es = function () {
    var tmp = this.tr();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).fs = function (enumDescriptor) {
    var tmp = this.tr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).gs = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).hs = function (deserializer, previousValue) {
    return this.is(deserializer);
  };
  protoOf(AbstractDecoder).js = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).ks = function (descriptor) {
  };
  protoOf(AbstractDecoder).ls = function (descriptor, index) {
    return this.wr();
  };
  protoOf(AbstractDecoder).ms = function (descriptor, index) {
    return this.xr();
  };
  protoOf(AbstractDecoder).ns = function (descriptor, index) {
    return this.yr();
  };
  protoOf(AbstractDecoder).os = function (descriptor, index) {
    return this.zr();
  };
  protoOf(AbstractDecoder).ps = function (descriptor, index) {
    return this.as();
  };
  protoOf(AbstractDecoder).qs = function (descriptor, index) {
    return this.bs();
  };
  protoOf(AbstractDecoder).rs = function (descriptor, index) {
    return this.cs();
  };
  protoOf(AbstractDecoder).ss = function (descriptor, index) {
    return this.ds();
  };
  protoOf(AbstractDecoder).ts = function (descriptor, index) {
    return this.es();
  };
  protoOf(AbstractDecoder).us = function (descriptor, index) {
    return this.gs(descriptor.xq(index));
  };
  protoOf(AbstractDecoder).vs = function (descriptor, index, deserializer, previousValue) {
    return this.hs(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).xs = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.hp().iq();
    var tmp;
    if (isNullabilitySupported || this.ur()) {
      tmp = this.hs(deserializer, previousValue);
    } else {
      tmp = this.vr();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).js = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).ks = function (descriptor) {
  };
  protoOf(AbstractEncoder).ct = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).dt = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).et = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).ft = function (value) {
    return this.dt(value);
  };
  protoOf(AbstractEncoder).gt = function (value) {
    return this.dt(value);
  };
  protoOf(AbstractEncoder).ht = function (value) {
    return this.dt(value);
  };
  protoOf(AbstractEncoder).it = function (value) {
    return this.dt(value);
  };
  protoOf(AbstractEncoder).jt = function (value) {
    return this.dt(value);
  };
  protoOf(AbstractEncoder).kt = function (value) {
    return this.dt(value);
  };
  protoOf(AbstractEncoder).lt = function (value) {
    return this.dt(value);
  };
  protoOf(AbstractEncoder).mt = function (value) {
    return this.dt(new Char(value));
  };
  protoOf(AbstractEncoder).nt = function (value) {
    return this.dt(value);
  };
  protoOf(AbstractEncoder).ot = function (enumDescriptor, index) {
    return this.dt(index);
  };
  protoOf(AbstractEncoder).pt = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).qt = function (descriptor, index, value) {
    if (this.ct(descriptor, index)) {
      this.ft(value);
    }
  };
  protoOf(AbstractEncoder).rt = function (descriptor, index, value) {
    if (this.ct(descriptor, index)) {
      this.gt(value);
    }
  };
  protoOf(AbstractEncoder).st = function (descriptor, index, value) {
    if (this.ct(descriptor, index)) {
      this.ht(value);
    }
  };
  protoOf(AbstractEncoder).tt = function (descriptor, index, value) {
    if (this.ct(descriptor, index)) {
      this.it(value);
    }
  };
  protoOf(AbstractEncoder).ut = function (descriptor, index, value) {
    if (this.ct(descriptor, index)) {
      this.jt(value);
    }
  };
  protoOf(AbstractEncoder).vt = function (descriptor, index, value) {
    if (this.ct(descriptor, index)) {
      this.kt(value);
    }
  };
  protoOf(AbstractEncoder).wt = function (descriptor, index, value) {
    if (this.ct(descriptor, index)) {
      this.lt(value);
    }
  };
  protoOf(AbstractEncoder).xt = function (descriptor, index, value) {
    if (this.ct(descriptor, index)) {
      this.mt(value);
    }
  };
  protoOf(AbstractEncoder).yt = function (descriptor, index, value) {
    if (this.ct(descriptor, index)) {
      this.nt(value);
    }
  };
  protoOf(AbstractEncoder).zt = function (descriptor, index) {
    return this.ct(descriptor, index) ? this.pt(descriptor.xq(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).au = function (descriptor, index, serializer, value) {
    if (this.ct(descriptor, index)) {
      this.bu(serializer, value);
    }
  };
  protoOf(AbstractEncoder).cu = function (descriptor, index, serializer, value) {
    if (this.ct(descriptor, index)) {
      this.du(serializer, value);
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
    var klassName = compositeDecoder.ts($this.hp(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.ws($this.hp(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).zp = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer_0(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.hp();
    var composite = encoder.js(descriptor);
    composite.yt(this.hp(), 0, actualSerializer.hp().pq());
    var tmp = this.hp();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$2 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.au(tmp, 1, tmp$ret$2, value);
    composite.ks(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).ip = function (encoder, value) {
    return this.zp(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).jp = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.hp();
    var composite = decoder.js(descriptor);
    var tmp$ret$1;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.zs()) {
        tmp$ret$1 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.at(this.hp());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.ts(this.hp(), index);
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
            value = composite.ws(this.hp(), index, serializer);
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
      tmp$ret$1 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$1;
    composite.ks(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).kp = function (decoder, klassName) {
    return decoder.ys().hu(this.lp(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).mp = function (encoder, value) {
    return encoder.ys().iu(this.lp(), value);
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
    this.ju_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).hp = function () {
    return this.ju_1;
  };
  protoOf(NothingSerializer_0).ku = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).ip = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.ku(encoder, tmp);
  };
  protoOf(NothingSerializer_0).jp = function (decoder) {
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
    this.lu_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).hp = function () {
    return this.lu_1;
  };
  protoOf(DurationSerializer).mu = function (encoder, value) {
    encoder.nt(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).ip = function (encoder, value) {
    return this.mu(encoder, value instanceof Duration ? value.vl_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).nu = function (decoder) {
    return Companion_getInstance().wl(decoder.es());
  };
  protoOf(DurationSerializer).jp = function (decoder) {
    return new Duration(this.nu(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.ou_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).hp = function () {
    return this.ou_1;
  };
  protoOf(InstantSerializer).pu = function (encoder, value) {
    encoder.nt(value.toString());
  };
  protoOf(InstantSerializer).ip = function (encoder, value) {
    return this.pu(encoder, value instanceof Instant ? value : THROW_CCE());
  };
  protoOf(InstantSerializer).jp = function (decoder) {
    return Companion_getInstance_0().im(decoder.es());
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.qu_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).hp = function () {
    return this.qu_1;
  };
  protoOf(UuidSerializer).ru = function (encoder, value) {
    encoder.nt(value.toString());
  };
  protoOf(UuidSerializer).ip = function (encoder, value) {
    return this.ru(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).jp = function (decoder) {
    return Companion_getInstance_1().on(decoder.es());
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
  protoOf(ArrayClassDesc).pq = function () {
    return 'kotlin.Array';
  };
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).pq = function () {
    return 'kotlin.collections.ArrayList';
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).pq = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).pq = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.uu_1 = elementDescriptor;
    this.vu_1 = 1;
  }
  protoOf(ListLikeDescriptor).qq = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).sq = function () {
    return this.vu_1;
  };
  protoOf(ListLikeDescriptor).uq = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).vq = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).yq = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.pq() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).wq = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.pq() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).xq = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.pq() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.uu_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.uu_1, other.uu_1) && this.pq() === other.pq())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.uu_1), 31) + getStringHashCode(this.pq()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.pq() + '(' + toString(this.uu_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.yu_1 = serialName;
    this.zu_1 = keyDescriptor;
    this.av_1 = valueDescriptor;
    this.bv_1 = 2;
  }
  protoOf(MapLikeDescriptor).pq = function () {
    return this.yu_1;
  };
  protoOf(MapLikeDescriptor).qq = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).sq = function () {
    return this.bv_1;
  };
  protoOf(MapLikeDescriptor).uq = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).vq = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).yq = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.pq() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).wq = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.pq() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).xq = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.pq() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.zu_1;
        break;
      case 1:
        tmp = this.av_1;
        break;
      default:
        // Inline function 'kotlin.error' call

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
    if (!(this.pq() === other.pq()))
      return false;
    if (!equals(this.zu_1, other.zu_1))
      return false;
    if (!equals(this.av_1, other.av_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.pq());
    result = imul(31, result) + hashCode(this.zu_1) | 0;
    result = imul(31, result) + hashCode(this.av_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.pq() + '(' + toString(this.zu_1) + ', ' + toString(this.av_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.iv_1 = primitive.pq() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).pq = function () {
    return this.iv_1;
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.kv_1 = kClass;
    this.lv_1 = new ArrayClassDesc(eSerializer.hp());
  }
  protoOf(ReferenceArraySerializer).hp = function () {
    return this.lv_1;
  };
  protoOf(ReferenceArraySerializer).mv = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).nv = function (_this__u8e3s4) {
    return this.mv((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ov = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).pv = function (_this__u8e3s4) {
    return this.ov((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).qv = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).rv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ReferenceArraySerializer).sv = function (_this__u8e3s4) {
    return this.rv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).tv = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.kv_1);
  };
  protoOf(ReferenceArraySerializer).uv = function (_this__u8e3s4) {
    return this.tv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).vv = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).wv = function (_this__u8e3s4) {
    return this.vv((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).xv = function (_this__u8e3s4, size) {
    return _this__u8e3s4.r5(size);
  };
  protoOf(ReferenceArraySerializer).yv = function (_this__u8e3s4, size) {
    return this.xv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).zv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a3(index, element);
  };
  protoOf(ReferenceArraySerializer).aw = function (_this__u8e3s4, index, element) {
    return this.zv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.iw_1 = new ArrayListClassDesc(element.hp());
  }
  protoOf(ArrayListSerializer).hp = function () {
    return this.iw_1;
  };
  protoOf(ArrayListSerializer).qv = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).jw = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ArrayListSerializer).sv = function (_this__u8e3s4) {
    return this.jw(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).kw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).uv = function (_this__u8e3s4) {
    return this.kw(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).lw = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).wv = function (_this__u8e3s4) {
    return this.lw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).mw = function (_this__u8e3s4, size) {
    return _this__u8e3s4.r5(size);
  };
  protoOf(ArrayListSerializer).yv = function (_this__u8e3s4, size) {
    return this.mw(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).nw = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a3(index, element);
  };
  protoOf(ArrayListSerializer).aw = function (_this__u8e3s4, index, element) {
    return this.nw(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.tw_1 = new LinkedHashMapClassDesc(kSerializer.hp(), vSerializer.hp());
  }
  protoOf(LinkedHashMapSerializer).hp = function () {
    return this.tw_1;
  };
  protoOf(LinkedHashMapSerializer).uw = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(LinkedHashMapSerializer).nv = function (_this__u8e3s4) {
    return this.uw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).vw = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.l1().t();
  };
  protoOf(LinkedHashMapSerializer).pv = function (_this__u8e3s4) {
    return this.vw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).qv = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).ww = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(LinkedHashMapSerializer).sv = function (_this__u8e3s4) {
    return this.ww(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).xw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).uv = function (_this__u8e3s4) {
    return this.xw(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).yw = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).wv = function (_this__u8e3s4) {
    return this.yw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).zw = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).yv = function (_this__u8e3s4, size) {
    return this.zw(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.fx_1 = new HashSetClassDesc(eSerializer.hp());
  }
  protoOf(HashSetSerializer).hp = function () {
    return this.fx_1;
  };
  protoOf(HashSetSerializer).qv = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).gx = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(HashSetSerializer).sv = function (_this__u8e3s4) {
    return this.gx(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).hx = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).uv = function (_this__u8e3s4) {
    return this.hx(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).ix = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).wv = function (_this__u8e3s4) {
    return this.ix((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).jx = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).yv = function (_this__u8e3s4, size) {
    return this.jx(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).kx = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b1(element);
  };
  protoOf(HashSetSerializer).aw = function (_this__u8e3s4, index, element) {
    return this.kx(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.mx_1 = new LinkedHashSetClassDesc(eSerializer.hp());
  }
  protoOf(LinkedHashSetSerializer).hp = function () {
    return this.mx_1;
  };
  protoOf(LinkedHashSetSerializer).qv = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).nx = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(LinkedHashSetSerializer).sv = function (_this__u8e3s4) {
    return this.nx(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).ox = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).uv = function (_this__u8e3s4) {
    return this.ox(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).ix = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).wv = function (_this__u8e3s4) {
    return this.ix((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).px = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).yv = function (_this__u8e3s4, size) {
    return this.px(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).qx = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b1(element);
  };
  protoOf(LinkedHashSetSerializer).aw = function (_this__u8e3s4, index, element) {
    return this.qx(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.tx_1 = new HashMapClassDesc(kSerializer.hp(), vSerializer.hp());
  }
  protoOf(HashMapSerializer).hp = function () {
    return this.tx_1;
  };
  protoOf(HashMapSerializer).uw = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(HashMapSerializer).nv = function (_this__u8e3s4) {
    return this.uw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).vw = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.l1().t();
  };
  protoOf(HashMapSerializer).pv = function (_this__u8e3s4) {
    return this.vw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).qv = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).ux = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(HashMapSerializer).sv = function (_this__u8e3s4) {
    return this.ux(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).vx = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).uv = function (_this__u8e3s4) {
    return this.vx(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).yw = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).wv = function (_this__u8e3s4) {
    return this.yw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).wx = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).yv = function (_this__u8e3s4, size) {
    return this.wx(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.bw_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).cw = function (encoder, value) {
    var size = this.nv(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.hp();
    var composite = encoder.fu(descriptor, size);
    var iterator = this.pv(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.au(this.hp(), index, this.bw_1, iterator.v());
      }
       while (inductionVariable < size);
    composite.ks(descriptor);
  };
  protoOf(CollectionLikeSerializer).ip = function (encoder, value) {
    return this.cw(encoder, value);
  };
  protoOf(CollectionLikeSerializer).dw = function (decoder, builder, startIndex, size) {
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
        this.ew(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).ew = function (decoder, index, builder, checkIndex) {
    this.aw(builder, index, decoder.ws(this.hp(), index, this.bw_1));
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).pw = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(CollectionSerializer).nv = function (_this__u8e3s4) {
    return this.pw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).qw = function (_this__u8e3s4) {
    return _this__u8e3s4.t();
  };
  protoOf(CollectionSerializer).pv = function (_this__u8e3s4) {
    return this.qw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.ax_1 = keySerializer;
    this.bx_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).cx = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.q1_1;
    var last = progression.r1_1;
    var step_0 = progression.s1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.dx(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).dw = function (decoder, builder, startIndex, size) {
    return this.cx(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).dx = function (decoder, index, builder, checkIndex) {
    var key = decoder.ws(this.hp(), index, this.ax_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.at(this.hp());
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
      var tmp_2 = this.bx_1.hp().qq();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.vs(this.hp(), vIndex, this.bx_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.ws(this.hp(), vIndex, this.bx_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.v2(key, value);
  };
  protoOf(MapLikeSerializer).ew = function (decoder, index, builder, checkIndex) {
    return this.dx(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).cw = function (encoder, value) {
    var size = this.nv(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.hp();
    var composite = encoder.fu(descriptor, size);
    var iterator = this.pv(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = iterator;
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var k = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.n1();
      var tmp = this.hp();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.au(tmp, _unary__edvuaz, this.ax_1, k);
      var tmp_0 = this.hp();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.au(tmp_0, _unary__edvuaz_0, this.bx_1, v);
    }
    composite.ks(descriptor);
  };
  protoOf(MapLikeSerializer).ip = function (encoder, value) {
    return this.cw(encoder, value);
  };
  function readSize($this, decoder, builder) {
    var size = decoder.bt($this.hp());
    $this.yv(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).gw = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.wv(previous);
    var builder = tmp1_elvis_lhs == null ? this.qv() : tmp1_elvis_lhs;
    var startIndex = this.sv(builder);
    var compositeDecoder = decoder.js(this.hp());
    if (compositeDecoder.zs()) {
      this.dw(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.at(this.hp());
        if (index === -1)
          break $l$loop;
        this.fw(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.ks(this.hp());
    return this.uv(builder);
  };
  protoOf(AbstractCollectionSerializer).jp = function (decoder) {
    return this.gw(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).fw = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.ew(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.ew.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.yx_1 = new PrimitiveArrayDescriptor(primitiveSerializer.hp());
  }
  protoOf(PrimitiveArraySerializer).hp = function () {
    return this.yx_1;
  };
  protoOf(PrimitiveArraySerializer).zx = function (_this__u8e3s4) {
    return _this__u8e3s4.ay();
  };
  protoOf(PrimitiveArraySerializer).sv = function (_this__u8e3s4) {
    return this.zx(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).by = function (_this__u8e3s4) {
    return _this__u8e3s4.cy();
  };
  protoOf(PrimitiveArraySerializer).uv = function (_this__u8e3s4) {
    return this.by(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).dy = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ey(size);
  };
  protoOf(PrimitiveArraySerializer).yv = function (_this__u8e3s4, size) {
    return this.dy(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).fy = function (_this__u8e3s4) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).pv = function (_this__u8e3s4) {
    return this.fy(_this__u8e3s4);
  };
  protoOf(PrimitiveArraySerializer).gy = function (_this__u8e3s4, index, element) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).aw = function (_this__u8e3s4, index, element) {
    return this.gy(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  protoOf(PrimitiveArraySerializer).qv = function () {
    return this.wv(this.hy());
  };
  protoOf(PrimitiveArraySerializer).ky = function (encoder, value) {
    var size = this.nv(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.yx_1;
    var composite = encoder.fu(descriptor, size);
    this.jy(composite, value, size);
    composite.ks(descriptor);
  };
  protoOf(PrimitiveArraySerializer).ip = function (encoder, value) {
    return this.ky(encoder, value);
  };
  protoOf(PrimitiveArraySerializer).cw = function (encoder, value) {
    return this.ky(encoder, value);
  };
  protoOf(PrimitiveArraySerializer).jp = function (decoder) {
    return this.gw(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).ly = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.ay() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.ey(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.ey.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.my_1 = longArray(0);
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
    $this.qy_1[slot] = bitwiseOr($this.qy_1[slot], shiftLeft(new Long(1, 0), offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.qy_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.qy_1[slot];
        while (!equalsLong(slotMarks, new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(invert(slotMarks));
          slotMarks = bitwiseOr(slotMarks, shiftLeft(new Long(1, 0), indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.oy_1($this.ny_1, index)) {
            $this.qy_1[slot] = slotMarks;
            return index;
          }
        }
        $this.qy_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.ny_1 = descriptor;
    this.oy_1 = readIfAbsent;
    var elementsCount = this.ny_1.sq();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = shiftLeft(new Long(-1, -1), elementsCount);
      }
      tmp.py_1 = tmp_0;
      this.qy_1 = Companion_getInstance_8().my_1;
    } else {
      this.py_1 = new Long(0, 0);
      this.qy_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).ry = function (index) {
    if (index < 64) {
      this.py_1 = bitwiseOr(this.py_1, shiftLeft(new Long(1, 0), index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).sy = function () {
    var elementsCount = this.ny_1.sq();
    while (!equalsLong(this.py_1, new Long(-1, -1))) {
      var index = countTrailingZeroBits(invert(this.py_1));
      this.py_1 = bitwiseOr(this.py_1, shiftLeft(new Long(1, 0), index));
      if (this.oy_1(this.ny_1, index)) {
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
    var d = new EnumDescriptor(serialName, $this.ty_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.ty_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.iz(element.z_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.uy_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer$_get_descriptor_$ref_j67dlw() {
    return constructCallableReference(function (p0) {
      return p0.hp();
    }, 1, 0, 3);
  }
  function EnumSerializer(serialName, values) {
    this.ty_1 = values;
    this.uy_1 = null;
    var tmp = this;
    tmp.vy_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).hp = function () {
    var tmp0 = this.vy_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, EnumSerializer$_get_descriptor_$ref_j67dlw(), null);
    return tmp0.n1();
  };
  protoOf(EnumSerializer).jz = function (encoder, value) {
    var index = indexOf(this.ty_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.hp().pq() + ', ' + ('must be one of ' + contentToString(this.ty_1)));
    }
    encoder.ot(this.hp(), index);
  };
  protoOf(EnumSerializer).ip = function (encoder, value) {
    return this.jz(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).jp = function (decoder) {
    var index = decoder.fs(this.hp());
    if (!(0 <= index ? index <= (this.ty_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.hp().pq() + ' enum values, ' + ('values size is ' + this.ty_1.length));
    }
    return this.ty_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.hp().pq() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.xz_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('elementDescriptors', 1, tmp, EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a(), null);
    return tmp0.n1();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.uq(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a() {
    return constructCallableReference(function (p0) {
      return _get_elementDescriptors__y23q9p(p0);
    }, 1, 0, 4);
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.wz_1 = ENUM_getInstance();
    var tmp = this;
    tmp.xz_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).qq = function () {
    return this.wz_1;
  };
  protoOf(EnumDescriptor).xq = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!isInterface(other, SerialDescriptor))
      return false;
    if (!(other.qq() === ENUM_getInstance()))
      return false;
    if (!(this.pq() === other.pq()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.pq() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.pq());
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
    this.m10_1 = true;
  }
  protoOf(InlineClassDescriptor).rq = function () {
    return this.m10_1;
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
      if (!(this.pq() === other.pq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.m10_1 && contentEquals(this.yz(), other.yz()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.sq() === other.sq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.sq();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.xq(index).pq() === other.xq(index).pq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.xq(index).qq(), other.xq(index).qq())) {
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
    this.n10_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).o10 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.n10_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).hp = function () {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).ip = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).jp = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function missingFieldExceptionWithNewMessage(exception, message) {
    return exception.cq(message);
  }
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.q10_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).ys = function () {
    return this.q10_1;
  };
  protoOf(NoOpEncoder).dt = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).et = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ft = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).gt = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ht = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).it = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).jt = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).kt = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).lt = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).mt = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).nt = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ot = function (enumDescriptor, index) {
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
    this.r10_1 = OBJECT_getInstance();
    this.s10_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).qq = function () {
    return this.r10_1;
  };
  protoOf(NothingSerialDescriptor).pq = function () {
    return this.s10_1;
  };
  protoOf(NothingSerialDescriptor).sq = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).uq = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).vq = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).yq = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).xq = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).wq = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.s10_1) + imul(31, this.r10_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.t10_1 = serializer;
    this.u10_1 = new SerialDescriptorForNullable(this.t10_1.hp());
  }
  protoOf(NullableSerializer).hp = function () {
    return this.u10_1;
  };
  protoOf(NullableSerializer).v10 = function (encoder, value) {
    if (!(value == null)) {
      encoder.eu();
      encoder.bu(this.t10_1, value);
    } else {
      encoder.et();
    }
  };
  protoOf(NullableSerializer).ip = function (encoder, value) {
    return this.v10(encoder, value);
  };
  protoOf(NullableSerializer).jp = function (decoder) {
    return decoder.ur() ? decoder.is(this.t10_1) : decoder.vr();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.t10_1, other.t10_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.t10_1);
  };
  function SerialDescriptorForNullable(original) {
    this.jq_1 = original;
    this.kq_1 = this.jq_1.pq() + '?';
    this.lq_1 = cachedSerialNames(this.jq_1);
  }
  protoOf(SerialDescriptorForNullable).pq = function () {
    return this.kq_1;
  };
  protoOf(SerialDescriptorForNullable).sr = function () {
    return this.lq_1;
  };
  protoOf(SerialDescriptorForNullable).iq = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.jq_1, other.jq_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.jq_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.jq_1), 31);
  };
  protoOf(SerialDescriptorForNullable).qq = function () {
    return this.jq_1.qq();
  };
  protoOf(SerialDescriptorForNullable).rq = function () {
    return this.jq_1.rq();
  };
  protoOf(SerialDescriptorForNullable).sq = function () {
    return this.jq_1.sq();
  };
  protoOf(SerialDescriptorForNullable).tq = function () {
    return this.jq_1.tq();
  };
  protoOf(SerialDescriptorForNullable).uq = function (index) {
    return this.jq_1.uq(index);
  };
  protoOf(SerialDescriptorForNullable).vq = function (name) {
    return this.jq_1.vq(name);
  };
  protoOf(SerialDescriptorForNullable).wq = function (index) {
    return this.jq_1.wq(index);
  };
  protoOf(SerialDescriptorForNullable).xq = function (index) {
    return this.jq_1.xq(index);
  };
  protoOf(SerialDescriptorForNullable).yq = function (index) {
    return this.jq_1.yq(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.pp_1 = this$0.x10_1;
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
    return constructCallableReference(function (p0) {
      return p0.hp();
    }, 1, 0, 5);
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.w10_1 = objectInstance;
    this.x10_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.y10_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).hp = function () {
    var tmp0 = this.y10_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.n1();
  };
  protoOf(ObjectSerializer).zp = function (encoder, value) {
    encoder.js(this.hp()).ks(this.hp());
  };
  protoOf(ObjectSerializer).ip = function (encoder, value) {
    return this.zp(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).jp = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.hp();
    var composite = decoder.js(descriptor);
    var tmp$ret$1;
    $l$block_0: {
      if (composite.zs()) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.at(this.hp());
      if (index === -1) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$1;
    composite.ks(descriptor);
    return this.w10_1;
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
    var tmp0 = _this__u8e3s4.xj_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.xj_1);
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$0;
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
      return _this__u8e3s4.sr();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.sq());
    var inductionVariable = 0;
    var last = _this__u8e3s4.sq();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.uq(i);
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
          var element = descriptor.uq(i);
          missingFields.b1(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.pq());
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
                var element = descriptor.uq(imul(maskSlot, 32) + i | 0);
                missingFields.b1(element);
              }
              missingFieldsBits = missingFieldsBits >>> 1 | 0;
            }
             while (inductionVariable_0 < 32);
        }
      }
       while (inductionVariable <= last);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.pq());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.fz_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.n1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.hz_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.n1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.az_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.az_1[i];
        indices.v2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.xy_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o10();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca() {
    return constructCallableReference(function (p0) {
      return _get_childSerializers__7vnyfa(p0);
    }, 1, 0, 6);
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.xy_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p10();
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
          var tmp$ret$2 = item.hp();
          destination.b1(tmp$ret$2);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return constructCallableReference(function (p0) {
      return p0.yz();
    }, 1, 0, 7);
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.yz());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    }, 1, 0, 8);
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.wy_1 = serialName;
    this.xy_1 = generatedSerializer;
    this.yy_1 = elementsCount;
    this.zy_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.yy_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.az_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.yy_1;
    tmp_3.bz_1 = Array(size);
    this.cz_1 = null;
    this.dz_1 = booleanArray(this.yy_1);
    this.ez_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.fz_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.gz_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.hz_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).pq = function () {
    return this.wy_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).sq = function () {
    return this.yy_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).qq = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).tq = function () {
    var tmp0_elvis_lhs = this.cz_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).sr = function () {
    return this.ez_1.t2();
  };
  protoOf(PluginGeneratedSerialDescriptor).yz = function () {
    var tmp0 = this.gz_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.n1();
  };
  protoOf(PluginGeneratedSerialDescriptor).zz = function (name, isOptional) {
    this.zy_1 = this.zy_1 + 1 | 0;
    this.az_1[this.zy_1] = name;
    this.dz_1[this.zy_1] = isOptional;
    this.bz_1[this.zy_1] = null;
    if (this.zy_1 === (this.yy_1 - 1 | 0)) {
      this.ez_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).iz = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.zz(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.zz.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).xq = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).hp();
  };
  protoOf(PluginGeneratedSerialDescriptor).yq = function (index) {
    return getChecked_0(this.dz_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).wq = function (index) {
    var tmp0_elvis_lhs = getChecked(this.bz_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).uq = function (index) {
    return getChecked(this.az_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).vq = function (name) {
    var tmp0_elvis_lhs = this.ez_1.s2(name);
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
      if (!(this.pq() === other.pq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.yz(), other.yz())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.sq() === other.sq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.sq();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.xq(index).pq() === other.xq(index).pq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.xq(index).qq(), other.xq(index).qq())) {
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
    var result = getStringHashCode(_this__u8e3s4.pq());
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
      var tmp0_safe_receiver = element.pq();
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
      var tmp0_safe_receiver_0 = element_0.qq();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.sq());
    var tmp_0 = _this__u8e3s4.pq() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.uq(i) + ': ' + $this_toStringImpl.xq(i).pq();
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
  protoOf(ByteArraySerializer_0).c11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).nv = function (_this__u8e3s4) {
    return this.c11((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).d11 = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).wv = function (_this__u8e3s4) {
    return this.d11((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).hy = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).e11 = function (decoder, index, builder, checkIndex) {
    builder.h11(decoder.ms(this.yx_1, index));
  };
  protoOf(ByteArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.e11(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).iy = function (decoder, index, builder, checkIndex) {
    return this.e11(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).i11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.rt(this.yx_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).jy = function (encoder, content, size) {
    return this.i11(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.f11_1 = bufferWithData;
    this.g11_1 = bufferWithData.length;
    this.ey(10);
  }
  protoOf(ByteArrayBuilder).ay = function () {
    return this.g11_1;
  };
  protoOf(ByteArrayBuilder).ey = function (requiredCapacity) {
    if (this.f11_1.length < requiredCapacity)
      this.f11_1 = copyOf(this.f11_1, coerceAtLeast(requiredCapacity, imul(this.f11_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).h11 = function (c) {
    this.ly();
    var tmp = this.f11_1;
    var _unary__edvuaz = this.g11_1;
    this.g11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).cy = function () {
    return copyOf(this.f11_1, this.g11_1);
  };
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_2()));
  }
  protoOf(CharArraySerializer_0).l11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).nv = function (_this__u8e3s4) {
    return this.l11((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).m11 = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).wv = function (_this__u8e3s4) {
    return this.m11((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).hy = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).n11 = function (decoder, index, builder, checkIndex) {
    builder.q11(decoder.ss(this.yx_1, index));
  };
  protoOf(CharArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.n11(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).iy = function (decoder, index, builder, checkIndex) {
    return this.n11(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).r11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.xt(this.yx_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).jy = function (encoder, content, size) {
    return this.r11(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(DoubleArraySerializer_0).u11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).nv = function (_this__u8e3s4) {
    return this.u11((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).v11 = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).wv = function (_this__u8e3s4) {
    return this.v11((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).hy = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).w11 = function (decoder, index, builder, checkIndex) {
    builder.z11(decoder.rs(this.yx_1, index));
  };
  protoOf(DoubleArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.w11(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).iy = function (decoder, index, builder, checkIndex) {
    return this.w11(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).a12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.wt(this.yx_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).jy = function (encoder, content, size) {
    return this.a12(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(FloatArraySerializer_0).d12 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).nv = function (_this__u8e3s4) {
    return this.d12((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).e12 = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).wv = function (_this__u8e3s4) {
    return this.e12((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).hy = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).f12 = function (decoder, index, builder, checkIndex) {
    builder.i12(decoder.qs(this.yx_1, index));
  };
  protoOf(FloatArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.f12(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).iy = function (decoder, index, builder, checkIndex) {
    return this.f12(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).j12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.vt(this.yx_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).jy = function (encoder, content, size) {
    return this.j12(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(LongArraySerializer_0).m12 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).nv = function (_this__u8e3s4) {
    return this.m12((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).n12 = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).wv = function (_this__u8e3s4) {
    return this.n12((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).hy = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).o12 = function (decoder, index, builder, checkIndex) {
    builder.r12(decoder.ps(this.yx_1, index));
  };
  protoOf(LongArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.o12(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).iy = function (decoder, index, builder, checkIndex) {
    return this.o12(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).s12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ut(this.yx_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).jy = function (encoder, content, size) {
    return this.s12(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(ULongArraySerializer_0).v12 = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).nv = function (_this__u8e3s4) {
    return this.v12(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.wo_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).w12 = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).wv = function (_this__u8e3s4) {
    return this.w12(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.wo_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).x12 = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).hy = function () {
    return new ULongArray(this.x12());
  };
  protoOf(ULongArraySerializer_0).y12 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.us(this.yx_1, index).as();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.b13(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.y12(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).iy = function (decoder, index, builder, checkIndex) {
    return this.y12(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).c13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.zt(this.yx_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.jt(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).jy = function (encoder, content, size) {
    return this.c13(encoder, content instanceof ULongArray ? content.wo_1 : THROW_CCE(), size);
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
  protoOf(IntArraySerializer_0).f13 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).nv = function (_this__u8e3s4) {
    return this.f13((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).g13 = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).wv = function (_this__u8e3s4) {
    return this.g13((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).hy = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).h13 = function (decoder, index, builder, checkIndex) {
    builder.k13(decoder.os(this.yx_1, index));
  };
  protoOf(IntArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.h13(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).iy = function (decoder, index, builder, checkIndex) {
    return this.h13(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).l13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.tt(this.yx_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).jy = function (encoder, content, size) {
    return this.l13(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UIntArraySerializer_0).o13 = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).nv = function (_this__u8e3s4) {
    return this.o13(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.mo_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).p13 = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).wv = function (_this__u8e3s4) {
    return this.p13(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.mo_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).q13 = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).hy = function () {
    return new UIntArray(this.q13());
  };
  protoOf(UIntArraySerializer_0).r13 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.us(this.yx_1, index).zr();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.u13(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.r13(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).iy = function (decoder, index, builder, checkIndex) {
    return this.r13(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).v13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.zt(this.yx_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.it(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).jy = function (encoder, content, size) {
    return this.v13(encoder, content instanceof UIntArray ? content.mo_1 : THROW_CCE(), size);
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
  protoOf(ShortArraySerializer_0).y13 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).nv = function (_this__u8e3s4) {
    return this.y13((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).z13 = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).wv = function (_this__u8e3s4) {
    return this.z13((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).hy = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).a14 = function (decoder, index, builder, checkIndex) {
    builder.d14(decoder.ns(this.yx_1, index));
  };
  protoOf(ShortArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.a14(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).iy = function (decoder, index, builder, checkIndex) {
    return this.a14(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).e14 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.st(this.yx_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).jy = function (encoder, content, size) {
    return this.e14(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UShortArraySerializer_0).h14 = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).nv = function (_this__u8e3s4) {
    return this.h14(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.gp_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).i14 = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).wv = function (_this__u8e3s4) {
    return this.i14(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.gp_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).j14 = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).hy = function () {
    return new UShortArray(this.j14());
  };
  protoOf(UShortArraySerializer_0).k14 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.us(this.yx_1, index).yr();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.n14(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.k14(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).iy = function (decoder, index, builder, checkIndex) {
    return this.k14(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).o14 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.zt(this.yx_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.ht(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).jy = function (encoder, content, size) {
    return this.o14(encoder, content instanceof UShortArray ? content.gp_1 : THROW_CCE(), size);
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
  protoOf(UByteArraySerializer_0).r14 = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).nv = function (_this__u8e3s4) {
    return this.r14(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.co_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).s14 = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).wv = function (_this__u8e3s4) {
    return this.s14(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.co_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).t14 = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).hy = function () {
    return new UByteArray(this.t14());
  };
  protoOf(UByteArraySerializer_0).u14 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.us(this.yx_1, index).xr();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.x14(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.u14(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).iy = function (decoder, index, builder, checkIndex) {
    return this.u14(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).y14 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.zt(this.yx_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.gt(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).jy = function (encoder, content, size) {
    return this.y14(encoder, content instanceof UByteArray ? content.co_1 : THROW_CCE(), size);
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
  protoOf(BooleanArraySerializer_0).b15 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).nv = function (_this__u8e3s4) {
    return this.b15((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).c15 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).wv = function (_this__u8e3s4) {
    return this.c15((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).hy = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).d15 = function (decoder, index, builder, checkIndex) {
    builder.g15(decoder.ls(this.yx_1, index));
  };
  protoOf(BooleanArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.d15(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).iy = function (decoder, index, builder, checkIndex) {
    return this.d15(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).h15 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.qt(this.yx_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).jy = function (encoder, content, size) {
    return this.h15(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.o11_1 = bufferWithData;
    this.p11_1 = bufferWithData.length;
    this.ey(10);
  }
  protoOf(CharArrayBuilder).ay = function () {
    return this.p11_1;
  };
  protoOf(CharArrayBuilder).ey = function (requiredCapacity) {
    if (this.o11_1.length < requiredCapacity)
      this.o11_1 = copyOf_0(this.o11_1, coerceAtLeast(requiredCapacity, imul(this.o11_1.length, 2)));
  };
  protoOf(CharArrayBuilder).q11 = function (c) {
    this.ly();
    var tmp = this.o11_1;
    var _unary__edvuaz = this.p11_1;
    this.p11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).cy = function () {
    return copyOf_0(this.o11_1, this.p11_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.x11_1 = bufferWithData;
    this.y11_1 = bufferWithData.length;
    this.ey(10);
  }
  protoOf(DoubleArrayBuilder).ay = function () {
    return this.y11_1;
  };
  protoOf(DoubleArrayBuilder).ey = function (requiredCapacity) {
    if (this.x11_1.length < requiredCapacity)
      this.x11_1 = copyOf_1(this.x11_1, coerceAtLeast(requiredCapacity, imul(this.x11_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).z11 = function (c) {
    this.ly();
    var tmp = this.x11_1;
    var _unary__edvuaz = this.y11_1;
    this.y11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).cy = function () {
    return copyOf_1(this.x11_1, this.y11_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.g12_1 = bufferWithData;
    this.h12_1 = bufferWithData.length;
    this.ey(10);
  }
  protoOf(FloatArrayBuilder).ay = function () {
    return this.h12_1;
  };
  protoOf(FloatArrayBuilder).ey = function (requiredCapacity) {
    if (this.g12_1.length < requiredCapacity)
      this.g12_1 = copyOf_2(this.g12_1, coerceAtLeast(requiredCapacity, imul(this.g12_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).i12 = function (c) {
    this.ly();
    var tmp = this.g12_1;
    var _unary__edvuaz = this.h12_1;
    this.h12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).cy = function () {
    return copyOf_2(this.g12_1, this.h12_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.p12_1 = bufferWithData;
    this.q12_1 = bufferWithData.length;
    this.ey(10);
  }
  protoOf(LongArrayBuilder).ay = function () {
    return this.q12_1;
  };
  protoOf(LongArrayBuilder).ey = function (requiredCapacity) {
    if (this.p12_1.length < requiredCapacity)
      this.p12_1 = copyOf_3(this.p12_1, coerceAtLeast(requiredCapacity, imul(this.p12_1.length, 2)));
  };
  protoOf(LongArrayBuilder).r12 = function (c) {
    this.ly();
    var tmp = this.p12_1;
    var _unary__edvuaz = this.q12_1;
    this.q12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).cy = function () {
    return copyOf_3(this.p12_1, this.q12_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.z12_1 = bufferWithData;
    this.a13_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.ey(10);
  }
  protoOf(ULongArrayBuilder).ay = function () {
    return this.a13_1;
  };
  protoOf(ULongArrayBuilder).ey = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.z12_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.z12_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.z12_1), 2));
      tmp.z12_1 = _ULongArray___init__impl__twm1l3_0(copyOf_3(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).b13 = function (c) {
    this.ly();
    var tmp = this.z12_1;
    var _unary__edvuaz = this.a13_1;
    this.a13_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).i15 = function () {
    var tmp0 = this.z12_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.a13_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_3(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).cy = function () {
    return new ULongArray(this.i15());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.i13_1 = bufferWithData;
    this.j13_1 = bufferWithData.length;
    this.ey(10);
  }
  protoOf(IntArrayBuilder).ay = function () {
    return this.j13_1;
  };
  protoOf(IntArrayBuilder).ey = function (requiredCapacity) {
    if (this.i13_1.length < requiredCapacity)
      this.i13_1 = copyOf_4(this.i13_1, coerceAtLeast(requiredCapacity, imul(this.i13_1.length, 2)));
  };
  protoOf(IntArrayBuilder).k13 = function (c) {
    this.ly();
    var tmp = this.i13_1;
    var _unary__edvuaz = this.j13_1;
    this.j13_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).cy = function () {
    return copyOf_4(this.i13_1, this.j13_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.s13_1 = bufferWithData;
    this.t13_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.ey(10);
  }
  protoOf(UIntArrayBuilder).ay = function () {
    return this.t13_1;
  };
  protoOf(UIntArrayBuilder).ey = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.s13_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.s13_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.s13_1), 2));
      tmp.s13_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_4(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).u13 = function (c) {
    this.ly();
    var tmp = this.s13_1;
    var _unary__edvuaz = this.t13_1;
    this.t13_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).j15 = function () {
    var tmp0 = this.s13_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.t13_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_4(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).cy = function () {
    return new UIntArray(this.j15());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.b14_1 = bufferWithData;
    this.c14_1 = bufferWithData.length;
    this.ey(10);
  }
  protoOf(ShortArrayBuilder).ay = function () {
    return this.c14_1;
  };
  protoOf(ShortArrayBuilder).ey = function (requiredCapacity) {
    if (this.b14_1.length < requiredCapacity)
      this.b14_1 = copyOf_5(this.b14_1, coerceAtLeast(requiredCapacity, imul(this.b14_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).d14 = function (c) {
    this.ly();
    var tmp = this.b14_1;
    var _unary__edvuaz = this.c14_1;
    this.c14_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).cy = function () {
    return copyOf_5(this.b14_1, this.c14_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.l14_1 = bufferWithData;
    this.m14_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.ey(10);
  }
  protoOf(UShortArrayBuilder).ay = function () {
    return this.m14_1;
  };
  protoOf(UShortArrayBuilder).ey = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.l14_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.l14_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.l14_1), 2));
      tmp.l14_1 = _UShortArray___init__impl__9b26ef_0(copyOf_5(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).n14 = function (c) {
    this.ly();
    var tmp = this.l14_1;
    var _unary__edvuaz = this.m14_1;
    this.m14_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).k15 = function () {
    var tmp0 = this.l14_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.m14_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_5(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).cy = function () {
    return new UShortArray(this.k15());
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.v14_1 = bufferWithData;
    this.w14_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.ey(10);
  }
  protoOf(UByteArrayBuilder).ay = function () {
    return this.w14_1;
  };
  protoOf(UByteArrayBuilder).ey = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.v14_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.v14_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.v14_1), 2));
      tmp.v14_1 = _UByteArray___init__impl__ip4y9n_0(copyOf(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).x14 = function (c) {
    this.ly();
    var tmp = this.v14_1;
    var _unary__edvuaz = this.w14_1;
    this.w14_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).l15 = function () {
    var tmp0 = this.v14_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.w14_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).cy = function () {
    return new UByteArray(this.l15());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.e15_1 = bufferWithData;
    this.f15_1 = bufferWithData.length;
    this.ey(10);
  }
  protoOf(BooleanArrayBuilder).ay = function () {
    return this.f15_1;
  };
  protoOf(BooleanArrayBuilder).ey = function (requiredCapacity) {
    if (this.e15_1.length < requiredCapacity)
      this.e15_1 = copyOf_6(this.e15_1, coerceAtLeast(requiredCapacity, imul(this.e15_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).g15 = function (c) {
    this.ly();
    var tmp = this.e15_1;
    var _unary__edvuaz = this.f15_1;
    this.f15_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).cy = function () {
    return copyOf_6(this.e15_1, this.f15_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.m15_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).hp = function () {
    return this.m15_1;
  };
  protoOf(StringSerializer).n15 = function (encoder, value) {
    return encoder.nt(value);
  };
  protoOf(StringSerializer).ip = function (encoder, value) {
    return this.n15(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).jp = function (decoder) {
    return decoder.es();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.o15_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).hp = function () {
    return this.o15_1;
  };
  protoOf(BooleanSerializer).p15 = function (encoder, value) {
    return encoder.ft(value);
  };
  protoOf(BooleanSerializer).ip = function (encoder, value) {
    return this.p15(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).jp = function (decoder) {
    return decoder.wr();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.q15_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).hp = function () {
    return this.q15_1;
  };
  protoOf(IntSerializer).r15 = function (encoder, value) {
    return encoder.it(value);
  };
  protoOf(IntSerializer).ip = function (encoder, value) {
    return this.r15(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).jp = function (decoder) {
    return decoder.zr();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.s15_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).hp = function () {
    return this.s15_1;
  };
  protoOf(FloatSerializer).t15 = function (encoder, value) {
    return encoder.kt(value);
  };
  protoOf(FloatSerializer).ip = function (encoder, value) {
    return this.t15(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).jp = function (decoder) {
    return decoder.bs();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.u15_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).hp = function () {
    return this.u15_1;
  };
  protoOf(DoubleSerializer).v15 = function (encoder, value) {
    return encoder.lt(value);
  };
  protoOf(DoubleSerializer).ip = function (encoder, value) {
    return this.v15(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).jp = function (decoder) {
    return decoder.cs();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.w15_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).hp = function () {
    return this.w15_1;
  };
  protoOf(LongSerializer).x15 = function (encoder, value) {
    return encoder.jt(value);
  };
  protoOf(LongSerializer).ip = function (encoder, value) {
    return this.x15(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).jp = function (decoder) {
    return decoder.as();
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
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.y15_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.y15_1 = serialName;
    this.z15_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).pq = function () {
    return this.y15_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).qq = function () {
    return this.z15_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).sq = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).uq = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).vq = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).yq = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).xq = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).wq = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.y15_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.y15_1 === other.y15_1 && equals(this.z15_1, other.z15_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.y15_1) + imul(31, this.z15_1.hashCode()) | 0;
  };
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().u2();
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var primitive = _iterator__ex2g4s.v();
      var primitiveName = primitive.hp().pq();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).o() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.a16_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).hp = function () {
    return this.a16_1;
  };
  protoOf(ByteSerializer).b16 = function (encoder, value) {
    return encoder.gt(value);
  };
  protoOf(ByteSerializer).ip = function (encoder, value) {
    return this.b16(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).jp = function (decoder) {
    return decoder.xr();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.c16_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).hp = function () {
    return this.c16_1;
  };
  protoOf(ShortSerializer).d16 = function (encoder, value) {
    return encoder.ht(value);
  };
  protoOf(ShortSerializer).ip = function (encoder, value) {
    return this.d16(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).jp = function (decoder) {
    return decoder.yr();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.e16_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).hp = function () {
    return this.e16_1;
  };
  protoOf(CharSerializer).f16 = function (encoder, value) {
    return encoder.mt(value);
  };
  protoOf(CharSerializer).ip = function (encoder, value) {
    return this.f16(encoder, value instanceof Char ? value.w1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).g16 = function (decoder) {
    return decoder.ds();
  };
  protoOf(CharSerializer).jp = function (decoder) {
    return new Char(this.g16(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.h16_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).hp = function () {
    return this.h16_1.hp();
  };
  protoOf(UnitSerializer).i16 = function (encoder, value) {
    this.h16_1.zp(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).ip = function (encoder, value) {
    return this.i16(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).j16 = function (decoder) {
    this.h16_1.jp(decoder);
  };
  protoOf(UnitSerializer).jp = function (decoder) {
    this.j16(decoder);
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
  protoOf(NamedValueDecoder).m16 = function (_this__u8e3s4, index) {
    return this.o16(this.n16(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).o16 = function (nestedName) {
    var tmp0_elvis_lhs = this.r16();
    return this.s16(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).n16 = function (descriptor, index) {
    return descriptor.uq(index);
  };
  protoOf(NamedValueDecoder).s16 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).t16 = function () {
    return this.p16_1.r() ? '$' : joinToString(this.p16_1, '.', '$.');
  };
  function NamedValueEncoder() {
    TaggedEncoder.call(this);
  }
  protoOf(NamedValueEncoder).m16 = function (_this__u8e3s4, index) {
    return this.o16(this.n16(_this__u8e3s4, index));
  };
  protoOf(NamedValueEncoder).o16 = function (nestedName) {
    var tmp0_elvis_lhs = this.r16();
    return this.s16(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueEncoder).n16 = function (descriptor, index) {
    return descriptor.uq(index);
  };
  protoOf(NamedValueEncoder).s16 = function (parentName, childName) {
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
    $this.h17(tag);
    var r = block();
    if (!$this.q16_1) {
      $this.i17();
    }
    $this.q16_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.hs($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.hp().iq();
      var tmp;
      if (isNullabilitySupported || tmp0.ur()) {
        tmp = this$0.hs($deserializer, $previousValue);
      } else {
        tmp = tmp0.vr();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.p16_1 = ArrayList_init_$Create$_0();
    this.q16_1 = false;
  }
  protoOf(TaggedDecoder).ys = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).u16 = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).v16 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).w16 = function (tag) {
    var tmp = this.u16(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).x16 = function (tag) {
    var tmp = this.u16(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).y16 = function (tag) {
    var tmp = this.u16(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).z16 = function (tag) {
    var tmp = this.u16(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).a17 = function (tag) {
    var tmp = this.u16(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).b17 = function (tag) {
    var tmp = this.u16(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).c17 = function (tag) {
    var tmp = this.u16(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).d17 = function (tag) {
    var tmp = this.u16(tag);
    return tmp instanceof Char ? tmp.w1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).e17 = function (tag) {
    var tmp = this.u16(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).f17 = function (tag, enumDescriptor) {
    var tmp = this.u16(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).g17 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.h17(tag);
    return this;
  };
  protoOf(TaggedDecoder).hs = function (deserializer, previousValue) {
    return this.is(deserializer);
  };
  protoOf(TaggedDecoder).gs = function (descriptor) {
    return this.g17(this.i17(), descriptor);
  };
  protoOf(TaggedDecoder).ur = function () {
    var tmp0_elvis_lhs = this.r16();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.v16(currentTag);
  };
  protoOf(TaggedDecoder).vr = function () {
    return null;
  };
  protoOf(TaggedDecoder).wr = function () {
    return this.w16(this.i17());
  };
  protoOf(TaggedDecoder).xr = function () {
    return this.x16(this.i17());
  };
  protoOf(TaggedDecoder).yr = function () {
    return this.y16(this.i17());
  };
  protoOf(TaggedDecoder).zr = function () {
    return this.z16(this.i17());
  };
  protoOf(TaggedDecoder).as = function () {
    return this.a17(this.i17());
  };
  protoOf(TaggedDecoder).bs = function () {
    return this.b17(this.i17());
  };
  protoOf(TaggedDecoder).cs = function () {
    return this.c17(this.i17());
  };
  protoOf(TaggedDecoder).ds = function () {
    return this.d17(this.i17());
  };
  protoOf(TaggedDecoder).es = function () {
    return this.e17(this.i17());
  };
  protoOf(TaggedDecoder).fs = function (enumDescriptor) {
    return this.f17(this.i17(), enumDescriptor);
  };
  protoOf(TaggedDecoder).js = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).ks = function (descriptor) {
  };
  protoOf(TaggedDecoder).ls = function (descriptor, index) {
    return this.w16(this.m16(descriptor, index));
  };
  protoOf(TaggedDecoder).ms = function (descriptor, index) {
    return this.x16(this.m16(descriptor, index));
  };
  protoOf(TaggedDecoder).ns = function (descriptor, index) {
    return this.y16(this.m16(descriptor, index));
  };
  protoOf(TaggedDecoder).os = function (descriptor, index) {
    return this.z16(this.m16(descriptor, index));
  };
  protoOf(TaggedDecoder).ps = function (descriptor, index) {
    return this.a17(this.m16(descriptor, index));
  };
  protoOf(TaggedDecoder).qs = function (descriptor, index) {
    return this.b17(this.m16(descriptor, index));
  };
  protoOf(TaggedDecoder).rs = function (descriptor, index) {
    return this.c17(this.m16(descriptor, index));
  };
  protoOf(TaggedDecoder).ss = function (descriptor, index) {
    return this.d17(this.m16(descriptor, index));
  };
  protoOf(TaggedDecoder).ts = function (descriptor, index) {
    return this.e17(this.m16(descriptor, index));
  };
  protoOf(TaggedDecoder).us = function (descriptor, index) {
    return this.g17(this.m16(descriptor, index), descriptor.xq(index));
  };
  protoOf(TaggedDecoder).vs = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.m16(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).xs = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.m16(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).r16 = function () {
    return lastOrNull(this.p16_1);
  };
  protoOf(TaggedDecoder).h17 = function (name) {
    this.p16_1.b1(name);
  };
  protoOf(TaggedDecoder).i17 = function () {
    var r = this.p16_1.b3(get_lastIndex_0(this.p16_1));
    this.q16_1 = true;
    return r;
  };
  function encodeElement($this, desc, index) {
    var tag = $this.m16(desc, index);
    $this.h17(tag);
    return true;
  }
  function TaggedEncoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.k17_1 = ArrayList_init_$Create$_0();
  }
  protoOf(TaggedEncoder).ys = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedEncoder).l17 = function (tag, value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(TaggedEncoder).m17 = function (tag) {
  };
  protoOf(TaggedEncoder).n17 = function (tag) {
    throw SerializationException_init_$Create$_0('null is not supported');
  };
  protoOf(TaggedEncoder).o17 = function (tag, value) {
    return this.l17(tag, value);
  };
  protoOf(TaggedEncoder).p17 = function (tag, value) {
    return this.l17(tag, value);
  };
  protoOf(TaggedEncoder).q17 = function (tag, value) {
    return this.l17(tag, value);
  };
  protoOf(TaggedEncoder).r17 = function (tag, value) {
    return this.l17(tag, value);
  };
  protoOf(TaggedEncoder).s17 = function (tag, value) {
    return this.l17(tag, value);
  };
  protoOf(TaggedEncoder).t17 = function (tag, value) {
    return this.l17(tag, value);
  };
  protoOf(TaggedEncoder).u17 = function (tag, value) {
    return this.l17(tag, value);
  };
  protoOf(TaggedEncoder).v17 = function (tag, value) {
    return this.l17(tag, new Char(value));
  };
  protoOf(TaggedEncoder).w17 = function (tag, value) {
    return this.l17(tag, value);
  };
  protoOf(TaggedEncoder).x17 = function (tag, enumDescriptor, ordinal) {
    return this.l17(tag, ordinal);
  };
  protoOf(TaggedEncoder).y17 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.h17(tag);
    return this;
  };
  protoOf(TaggedEncoder).pt = function (descriptor) {
    return this.y17(this.i17(), descriptor);
  };
  protoOf(TaggedEncoder).eu = function () {
    return this.m17(this.a18());
  };
  protoOf(TaggedEncoder).et = function () {
    return this.n17(this.i17());
  };
  protoOf(TaggedEncoder).ft = function (value) {
    return this.u17(this.i17(), value);
  };
  protoOf(TaggedEncoder).gt = function (value) {
    return this.p17(this.i17(), value);
  };
  protoOf(TaggedEncoder).ht = function (value) {
    return this.q17(this.i17(), value);
  };
  protoOf(TaggedEncoder).it = function (value) {
    return this.o17(this.i17(), value);
  };
  protoOf(TaggedEncoder).jt = function (value) {
    return this.r17(this.i17(), value);
  };
  protoOf(TaggedEncoder).kt = function (value) {
    return this.s17(this.i17(), value);
  };
  protoOf(TaggedEncoder).lt = function (value) {
    return this.t17(this.i17(), value);
  };
  protoOf(TaggedEncoder).mt = function (value) {
    return this.v17(this.i17(), value);
  };
  protoOf(TaggedEncoder).nt = function (value) {
    return this.w17(this.i17(), value);
  };
  protoOf(TaggedEncoder).ot = function (enumDescriptor, index) {
    return this.x17(this.i17(), enumDescriptor, index);
  };
  protoOf(TaggedEncoder).js = function (descriptor) {
    return this;
  };
  protoOf(TaggedEncoder).ks = function (descriptor) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.k17_1.r()) {
      this.i17();
    }
    this.z17(descriptor);
  };
  protoOf(TaggedEncoder).z17 = function (descriptor) {
  };
  protoOf(TaggedEncoder).qt = function (descriptor, index, value) {
    return this.u17(this.m16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).rt = function (descriptor, index, value) {
    return this.p17(this.m16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).st = function (descriptor, index, value) {
    return this.q17(this.m16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).tt = function (descriptor, index, value) {
    return this.o17(this.m16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).ut = function (descriptor, index, value) {
    return this.r17(this.m16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).vt = function (descriptor, index, value) {
    return this.s17(this.m16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).wt = function (descriptor, index, value) {
    return this.t17(this.m16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).xt = function (descriptor, index, value) {
    return this.v17(this.m16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).yt = function (descriptor, index, value) {
    return this.w17(this.m16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).zt = function (descriptor, index) {
    return this.y17(this.m16(descriptor, index), descriptor.xq(index));
  };
  protoOf(TaggedEncoder).au = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.bu(serializer, value);
    }
  };
  protoOf(TaggedEncoder).cu = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.du(serializer, value);
    }
  };
  protoOf(TaggedEncoder).a18 = function () {
    return last(this.k17_1);
  };
  protoOf(TaggedEncoder).r16 = function () {
    return lastOrNull(this.k17_1);
  };
  protoOf(TaggedEncoder).h17 = function (name) {
    this.k17_1.b1(name);
  };
  protoOf(TaggedEncoder).i17 = function () {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.k17_1.r()) {
      tmp = this.k17_1.b3(get_lastIndex_0(this.k17_1));
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
    this.b18_1 = key;
    this.c18_1 = value;
  }
  protoOf(MapEntry).m1 = function () {
    return this.b18_1;
  };
  protoOf(MapEntry).n1 = function () {
    return this.c18_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.b18_1) + ', value=' + toString_0(this.c18_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.b18_1 == null ? 0 : hashCode(this.b18_1);
    result = imul(result, 31) + (this.c18_1 == null ? 0 : hashCode(this.c18_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    if (!equals(this.b18_1, other.b18_1))
      return false;
    if (!equals(this.c18_1, other.c18_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.vp('key', $keySerializer.hp());
      $this$buildSerialDescriptor.vp('value', $valueSerializer.hp());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.f18_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).hp = function () {
    return this.f18_1;
  };
  protoOf(MapEntrySerializer_0).g18 = function (_this__u8e3s4) {
    return _this__u8e3s4.m1();
  };
  protoOf(MapEntrySerializer_0).h18 = function (_this__u8e3s4) {
    return this.g18((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).i18 = function (_this__u8e3s4) {
    return _this__u8e3s4.n1();
  };
  protoOf(MapEntrySerializer_0).j18 = function (_this__u8e3s4) {
    return this.i18((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).k18 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.vp('first', $keySerializer.hp());
      $this$buildClassSerialDescriptor.vp('second', $valueSerializer.hp());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.q18_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).hp = function () {
    return this.q18_1;
  };
  protoOf(PairSerializer_0).r18 = function (_this__u8e3s4) {
    return _this__u8e3s4.wf_1;
  };
  protoOf(PairSerializer_0).h18 = function (_this__u8e3s4) {
    return this.r18(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).s18 = function (_this__u8e3s4) {
    return _this__u8e3s4.xf_1;
  };
  protoOf(PairSerializer_0).j18 = function (_this__u8e3s4) {
    return this.s18(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).k18 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.ws($this.w18_1, 0, $this.t18_1);
    var b = composite.ws($this.w18_1, 1, $this.u18_1);
    var c = composite.ws($this.w18_1, 2, $this.v18_1);
    composite.ks($this.w18_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.at($this.w18_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.ws($this.w18_1, 0, $this.t18_1);
          break;
        case 1:
          b = composite.ws($this.w18_1, 1, $this.u18_1);
          break;
        case 2:
          c = composite.ws($this.w18_1, 2, $this.v18_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.ks($this.w18_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    return new Triple(a, b, c);
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.vp('first', this$0.t18_1.hp());
      $this$buildClassSerialDescriptor.vp('second', this$0.u18_1.hp());
      $this$buildClassSerialDescriptor.vp('third', this$0.v18_1.hp());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.t18_1 = aSerializer;
    this.u18_1 = bSerializer;
    this.v18_1 = cSerializer;
    var tmp = this;
    tmp.w18_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).hp = function () {
    return this.w18_1;
  };
  protoOf(TripleSerializer_0).x18 = function (encoder, value) {
    var structuredEncoder = encoder.js(this.w18_1);
    structuredEncoder.au(this.w18_1, 0, this.t18_1, value.ln_1);
    structuredEncoder.au(this.w18_1, 1, this.u18_1, value.mn_1);
    structuredEncoder.au(this.w18_1, 2, this.v18_1, value.nn_1);
    structuredEncoder.ks(this.w18_1);
  };
  protoOf(TripleSerializer_0).ip = function (encoder, value) {
    return this.x18(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).jp = function (decoder) {
    var composite = decoder.js(this.w18_1);
    if (composite.zs()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.l18_1 = keySerializer;
    this.m18_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).n18 = function (encoder, value) {
    var structuredEncoder = encoder.js(this.hp());
    structuredEncoder.au(this.hp(), 0, this.l18_1, this.h18(value));
    structuredEncoder.au(this.hp(), 1, this.m18_1, this.j18(value));
    structuredEncoder.ks(this.hp());
  };
  protoOf(KeyValueSerializer).ip = function (encoder, value) {
    return this.n18(encoder, value);
  };
  protoOf(KeyValueSerializer).jp = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.hp();
    var composite = decoder.js(descriptor);
    var tmp$ret$1;
    $l$block: {
      if (composite.zs()) {
        var key = composite.ws(this.hp(), 0, this.l18_1);
        var value = composite.ws(this.hp(), 1, this.m18_1);
        tmp$ret$1 = this.k18(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.at(this.hp());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.ws(this.hp(), 0, this.l18_1);
            break;
          case 1:
            value_0 = composite.ws(this.hp(), 1, this.m18_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      tmp$ret$1 = this.k18(key_0, value_0);
    }
    var result = tmp$ret$1;
    composite.ks(descriptor);
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
    this.y18_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_6(Companion_getInstance_3()));
  }
  protoOf(ULongSerializer).hp = function () {
    return this.y18_1;
  };
  protoOf(ULongSerializer).z18 = function (encoder, value) {
    var tmp = encoder.pt(this.y18_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.jt(tmp$ret$0);
  };
  protoOf(ULongSerializer).ip = function (encoder, value) {
    return this.z18(encoder, value instanceof ULong ? value.ro_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).a19 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.gs(this.y18_1).as();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).jp = function (decoder) {
    return new ULong(this.a19(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.b19_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_7(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).hp = function () {
    return this.b19_1;
  };
  protoOf(UIntSerializer).c19 = function (encoder, value) {
    var tmp = encoder.pt(this.b19_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.it(tmp$ret$0);
  };
  protoOf(UIntSerializer).ip = function (encoder, value) {
    return this.c19(encoder, value instanceof UInt ? value.ho_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).d19 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.gs(this.b19_1).zr();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).jp = function (decoder) {
    return new UInt(this.d19(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.e19_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_5(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).hp = function () {
    return this.e19_1;
  };
  protoOf(UByteSerializer).f19 = function (encoder, value) {
    var tmp = encoder.pt(this.e19_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.gt(tmp$ret$0);
  };
  protoOf(UByteSerializer).ip = function (encoder, value) {
    return this.f19(encoder, value instanceof UByte ? value.xn_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).g19 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.gs(this.e19_1).xr();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).jp = function (decoder) {
    return new UByte(this.g19(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.h19_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).hp = function () {
    return this.h19_1;
  };
  protoOf(UShortSerializer).i19 = function (encoder, value) {
    var tmp = encoder.pt(this.h19_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.ht(tmp$ret$0);
  };
  protoOf(UShortSerializer).ip = function (encoder, value) {
    return this.i19(encoder, value instanceof UShort ? value.bp_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).j19 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.gs(this.h19_1).yr();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).jp = function (decoder) {
    return new UShort(this.j19(decoder));
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
  protoOf(SerializersModule).eq = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.fq(kClass, typeArgumentsSerializers) : $super.fq.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.l19_1 = class2ContextualFactory;
    this.m19_1 = polyBase2Serializers;
    this.n19_1 = polyBase2DefaultSerializerProvider;
    this.o19_1 = polyBase2NamedSerializers;
    this.p19_1 = polyBase2DefaultDeserializerProvider;
    this.q19_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).dq = function () {
    return this.q19_1;
  };
  protoOf(SerialModuleImpl).iu = function (baseClass, value) {
    if (!baseClass.ra(value))
      return null;
    var tmp0_safe_receiver = this.m19_1.s2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.n19_1.s2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).hu = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.o19_1.s2(baseClass);
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
    var tmp_1 = this.p19_1.s2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).fq = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.l19_1.s2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r19(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).k19 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.l19_1.l1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.n1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.u19_1;
        collector.v19(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.t19(kclass, serial.s19_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.m19_1.l1().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.m1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.n1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.l1().t();
      while (_iterator__ex2g4s_1.u()) {
        var element_1 = _iterator__ex2g4s_1.v();
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.m1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.n1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$15 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.w19(tmp_1, tmp_2, tmp$ret$15);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.n19_1.l1().t();
    while (_iterator__ex2g4s_2.u()) {
      var element_2 = _iterator__ex2g4s_2.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.n1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.x19(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.p19_1.l1().t();
    while (_iterator__ex2g4s_3.u()) {
      var element_3 = _iterator__ex2g4s_3.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.n1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.y19(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.u19_1 = serializer;
  }
  protoOf(Argless).r19 = function (typeArgumentsSerializers) {
    return this.u19_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.u19_1, this.u19_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.u19_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.s19_1 = provider;
  }
  protoOf(WithTypeArguments).r19 = function (typeArgumentsSerializers) {
    return this.s19_1(typeArgumentsSerializers);
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
    tmp.z19_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.a1a_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.b1a_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.c1a_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.d1a_1 = HashMap_init_$Create$();
    this.e1a_1 = false;
  }
  protoOf(SerializersModuleBuilder).v19 = function (kClass, serializer) {
    return this.f1a(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).t19 = function (kClass, provider) {
    return this.f1a(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).w19 = function (baseClass, actualClass, actualSerializer) {
    this.g1a(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).x19 = function (baseClass, defaultSerializerProvider) {
    this.h1a(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).y19 = function (baseClass, defaultDeserializerProvider) {
    this.i1a(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).j1a = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.z19_1.s2(forClass);
      if (!(previous == null) && !equals(previous, provider)) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + toString(forClass) + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.z19_1.v2(forClass, provider);
    if (isInterface_0(forClass))
      this.e1a_1 = true;
  };
  protoOf(SerializersModuleBuilder).f1a = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.j1a(forClass, provider, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.j1a.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).h1a = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.b1a_1.s2(baseClass);
    if (!(previous == null) && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.b1a_1.v2(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).i1a = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.d1a_1.s2(baseClass);
    if (!(previous == null) && !equals(previous, defaultDeserializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.d1a_1.v2(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).k1a = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.hp().pq();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.a1a_1;
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
    var this_1 = this.c1a_1;
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
        names.w2(previousSerializer.hp().pq());
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
          if (element.n1() === previousByName) {
            tmp$ret$7 = element;
            break $l$block;
          }
        }
        tmp$ret$7 = null;
      }
      var tmp0_safe_receiver = tmp$ret$7;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.error' call
        var message = 'Name ' + name + ' is registered in the module but no Kotlin class is associated with it.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var previousClass = tmp_1;
      if (allowOverwrite)
        baseClassSerializers.w2(previousClass);
      else
        throw IllegalArgumentException_init_$Create$("Multiple polymorphic serializers in a scope of '" + toString(baseClass) + "' " + ("have the same serial name '" + name + "': " + toString(concreteSerializer) + " for '" + toString(concreteClass) + "' and " + toString(previousByName) + " for '" + toString(previousClass) + "'"));
    }
    // Inline function 'kotlin.collections.set' call
    baseClassSerializers.v2(concreteClass, concreteSerializer);
    // Inline function 'kotlin.collections.set' call
    names.v2(name, concreteSerializer);
  };
  protoOf(SerializersModuleBuilder).g1a = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.k1a(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.k1a.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).cy = function () {
    return new SerialModuleImpl(this.z19_1, this.a1a_1, this.b1a_1, this.c1a_1, this.d1a_1, this.e1a_1);
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
    this.l1a_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.l1a_1.equals(tmp0_other_with_cast.l1a_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.l1a_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.l1a_1) + ')';
  };
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp0_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().lb()) {
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
    return rootClass.equals(PrimitiveClasses_getInstance().tb());
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
          var tmp_1 = assocObject.z10(args.slice());
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
    return mapOf([to(PrimitiveClasses_getInstance().ub(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_9(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().xb(), CharArraySerializer()), to(PrimitiveClasses_getInstance().sb(), serializer_10(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().dc(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().rb(), serializer_11(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().cc(), FloatArraySerializer()), to(getKClass(Long), serializer_6(Companion_getInstance_3())), to(get_longArrayClass(), LongArraySerializer()), to(getKClass(ULong), serializer_1(Companion_getInstance_4())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().pb(), serializer_7(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().ac(), IntArraySerializer()), to(getKClass(UInt), serializer_2(Companion_getInstance_5())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().ob(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().zb(), ShortArraySerializer()), to(getKClass(UShort), serializer_4(Companion_getInstance_6())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().nb(), serializer_5(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().yb(), ByteArraySerializer()), to(getKClass(UByte), serializer_3(Companion_getInstance_7())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().mb(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().wb(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().lb(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Instant), serializer_15(Companion_getInstance_0())), to(getKClass(Uuid), serializer_16(Companion_getInstance_1()))]);
  }
  function get_isInterfaceHack(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().lb())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function createCache$1($factory) {
    this.m1a_1 = $factory;
  }
  protoOf(createCache$1).gq = function (key) {
    return this.m1a_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.n1a_1 = $factory;
  }
  protoOf(createParametrizedCache$1).hq = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.n1a_1(key, types);
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
  protoOf(SerialDescriptorImpl).iq = get_isNullable;
  protoOf(SerialDescriptorImpl).rq = get_isInline;
  protoOf(AbstractDecoder).ws = decodeSerializableElement$default;
  protoOf(AbstractDecoder).is = decodeSerializableValue;
  protoOf(AbstractDecoder).zs = decodeSequentially;
  protoOf(AbstractDecoder).bt = decodeCollectionSize;
  protoOf(AbstractEncoder).eu = encodeNotNullMark;
  protoOf(AbstractEncoder).fu = beginCollection;
  protoOf(AbstractEncoder).bu = encodeSerializableValue;
  protoOf(AbstractEncoder).du = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).gu = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).iq = get_isNullable;
  protoOf(ListLikeDescriptor).rq = get_isInline;
  protoOf(ListLikeDescriptor).tq = get_annotations;
  protoOf(MapLikeDescriptor).iq = get_isNullable;
  protoOf(MapLikeDescriptor).rq = get_isInline;
  protoOf(MapLikeDescriptor).tq = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).iq = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).rq = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).p10 = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).iq = get_isNullable;
  protoOf(NothingSerialDescriptor).rq = get_isInline;
  protoOf(NothingSerialDescriptor).tq = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).iq = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).rq = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).tq = get_annotations;
  protoOf(TaggedDecoder).ws = decodeSerializableElement$default;
  protoOf(TaggedDecoder).is = decodeSerializableValue;
  protoOf(TaggedDecoder).zs = decodeSequentially;
  protoOf(TaggedDecoder).bt = decodeCollectionSize;
  protoOf(TaggedEncoder).fu = beginCollection;
  protoOf(TaggedEncoder).bu = encodeSerializableValue;
  protoOf(TaggedEncoder).du = encodeNullableSerializableValue;
  protoOf(TaggedEncoder).gu = shouldEncodeElementDefault;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SEALED_getInstance;
  _.$_$.b = STRING_getInstance;
  _.$_$.c = CONTEXTUAL_getInstance;
  _.$_$.d = ENUM_getInstance;
  _.$_$.e = CLASS_getInstance;
  _.$_$.f = LIST_getInstance;
  _.$_$.g = MAP_getInstance;
  _.$_$.h = OBJECT_getInstance;
  _.$_$.i = BooleanSerializer_getInstance;
  _.$_$.j = ByteArraySerializer_getInstance;
  _.$_$.k = DoubleSerializer_getInstance;
  _.$_$.l = FloatSerializer_getInstance;
  _.$_$.m = IntSerializer_getInstance;
  _.$_$.n = LongSerializer_getInstance;
  _.$_$.o = StringSerializer_getInstance;
  _.$_$.p = SerializationException_init_$Init$_0;
  _.$_$.q = SerializationException_init_$Create$_0;
  _.$_$.r = UnknownFieldException_init_$Create$;
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
  _.$_$.g2 = missingFieldExceptionWithNewMessage;
  _.$_$.h2 = throwArrayMissingFieldException;
  _.$_$.i2 = throwMissingFieldException;
  _.$_$.j2 = EmptySerializersModule_0;
  _.$_$.k2 = SerializersModuleBuilder;
  _.$_$.l2 = contextual;
  _.$_$.m2 = SerializersModuleCollector;
  _.$_$.n2 = DeserializationStrategy;
  _.$_$.o2 = KSerializer;
  _.$_$.p2 = MissingFieldException;
  _.$_$.q2 = SerializableWith;
  _.$_$.r2 = SerializationException;
  _.$_$.s2 = SerializationStrategy;
  _.$_$.t2 = findPolymorphicSerializer;
  _.$_$.u2 = findPolymorphicSerializer_0;
  _.$_$.v2 = serializerOrNull;
  _.$_$.w2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
