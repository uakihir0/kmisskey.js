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
  var protoOf = kotlin_kotlin.$_$.ic;
  var initMetadataForInterface = kotlin_kotlin.$_$.mb;
  var VOID = kotlin_kotlin.$_$.c;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.q2;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var constructCallableReference = kotlin_kotlin.$_$.ab;
  var emptyList = kotlin_kotlin.$_$.x6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g2;
  var lazy = kotlin_kotlin.$_$.fh;
  var KProperty1 = kotlin_kotlin.$_$.hd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.fb;
  var toString = kotlin_kotlin.$_$.lc;
  var initMetadataForClass = kotlin_kotlin.$_$.ib;
  var getKClassFromExpression = kotlin_kotlin.$_$.bd;
  var objectCreate = kotlin_kotlin.$_$.hc;
  var captureStack = kotlin_kotlin.$_$.sa;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.m4;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.o4;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.q4;
  var IllegalArgumentException = kotlin_kotlin.$_$.cg;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.e6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i3;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.s;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.r;
  var THROW_CCE = kotlin_kotlin.$_$.jg;
  var isInterface = kotlin_kotlin.$_$.xb;
  var KClass = kotlin_kotlin.$_$.ed;
  var Triple = kotlin_kotlin.$_$.kg;
  var getKClass = kotlin_kotlin.$_$.cd;
  var Pair = kotlin_kotlin.$_$.gg;
  var Entry = kotlin_kotlin.$_$.q5;
  var KtMap = kotlin_kotlin.$_$.s5;
  var KtMutableMap = kotlin_kotlin.$_$.v5;
  var LinkedHashMap = kotlin_kotlin.$_$.n5;
  var HashMap = kotlin_kotlin.$_$.l5;
  var KtSet = kotlin_kotlin.$_$.x5;
  var KtMutableSet = kotlin_kotlin.$_$.w5;
  var LinkedHashSet = kotlin_kotlin.$_$.o5;
  var HashSet = kotlin_kotlin.$_$.m5;
  var Collection = kotlin_kotlin.$_$.k5;
  var KtList = kotlin_kotlin.$_$.p5;
  var KtMutableList = kotlin_kotlin.$_$.t5;
  var ArrayList = kotlin_kotlin.$_$.j5;
  var copyToArray = kotlin_kotlin.$_$.u6;
  var Result = kotlin_kotlin.$_$.hg;
  var ensureNotNull = kotlin_kotlin.$_$.ah;
  var equals = kotlin_kotlin.$_$.cb;
  var getStringHashCode = kotlin_kotlin.$_$.gb;
  var isBlank = kotlin_kotlin.$_$.zd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p4;
  var toList = kotlin_kotlin.$_$.m8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.p3;
  var toHashSet = kotlin_kotlin.$_$.j8;
  var toBooleanArray = kotlin_kotlin.$_$.h8;
  var withIndex = kotlin_kotlin.$_$.t8;
  var to = kotlin_kotlin.$_$.lh;
  var toMap = kotlin_kotlin.$_$.o8;
  var lazy_0 = kotlin_kotlin.$_$.gh;
  var contentEquals = kotlin_kotlin.$_$.f6;
  var initMetadataForObject = kotlin_kotlin.$_$.ob;
  var Long = kotlin_kotlin.$_$.eg;
  var Char = kotlin_kotlin.$_$.uf;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.g;
  var Duration = kotlin_kotlin.$_$.of;
  var Companion_getInstance = kotlin_kotlin.$_$.t2;
  var Instant = kotlin_kotlin.$_$.pf;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.u2;
  var Uuid = kotlin_kotlin.$_$.rf;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.v2;
  var toIntOrNull = kotlin_kotlin.$_$.af;
  var hashCode = kotlin_kotlin.$_$.hb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.t4;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.w4;
  var isArray = kotlin_kotlin.$_$.pb;
  var arrayIterator = kotlin_kotlin.$_$.qa;
  var coerceAtLeast = kotlin_kotlin.$_$.rc;
  var addAll = kotlin_kotlin.$_$.y5;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.k3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.t3;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.q3;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v3;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.w3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m3;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.n3;
  var until = kotlin_kotlin.$_$.wc;
  var step = kotlin_kotlin.$_$.vc;
  var getValue = kotlin_kotlin.$_$.g7;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.r3;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.o3;
  var LinkedHashSet_init_$Create$_1 = kotlin_kotlin.$_$.u3;
  var HashMap_init_$Create$_1 = kotlin_kotlin.$_$.l3;
  var longArray = kotlin_kotlin.$_$.cc;
  var initMetadataForCompanion = kotlin_kotlin.$_$.jb;
  var get_lastIndex = kotlin_kotlin.$_$.n7;
  var shiftLeft = kotlin_kotlin.$_$.ja;
  var bitwiseOr = kotlin_kotlin.$_$.v9;
  var equalsLong = kotlin_kotlin.$_$.ba;
  var invert = kotlin_kotlin.$_$.da;
  var countTrailingZeroBits = kotlin_kotlin.$_$.yg;
  var indexOf = kotlin_kotlin.$_$.h7;
  var contentToString = kotlin_kotlin.$_$.j6;
  var Enum = kotlin_kotlin.$_$.zf;
  var joinToString = kotlin_kotlin.$_$.k7;
  var toString_0 = kotlin_kotlin.$_$.kh;
  var KTypeParameter = kotlin_kotlin.$_$.id;
  var booleanArray = kotlin_kotlin.$_$.ra;
  var emptyMap = kotlin_kotlin.$_$.y6;
  var contentHashCode = kotlin_kotlin.$_$.i6;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.l2;
  var isByteArray = kotlin_kotlin.$_$.rb;
  var copyOf = kotlin_kotlin.$_$.p6;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.w2;
  var isCharArray = kotlin_kotlin.$_$.sb;
  var copyOf_0 = kotlin_kotlin.$_$.o6;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.m2;
  var isDoubleArray = kotlin_kotlin.$_$.ub;
  var copyOf_1 = kotlin_kotlin.$_$.q6;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.n2;
  var isFloatArray = kotlin_kotlin.$_$.vb;
  var copyOf_2 = kotlin_kotlin.$_$.r6;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.y2;
  var isLongArray = kotlin_kotlin.$_$.ea;
  var copyOf_3 = kotlin_kotlin.$_$.m6;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.c3;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.s1;
  var ULongArray = kotlin_kotlin.$_$.pg;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.t1;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.p1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.l1;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.q1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.m1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.o2;
  var isIntArray = kotlin_kotlin.$_$.wb;
  var copyOf_4 = kotlin_kotlin.$_$.t6;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.b3;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.j1;
  var UIntArray = kotlin_kotlin.$_$.ng;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.k1;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.g1;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.c1;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.h1;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.d1;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.p2;
  var isShortArray = kotlin_kotlin.$_$.zb;
  var copyOf_5 = kotlin_kotlin.$_$.l6;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.d3;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.b2;
  var UShortArray = kotlin_kotlin.$_$.rg;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.c2;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.y1;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.u1;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.z1;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.v1;
  var Companion_getInstance_7 = kotlin_kotlin.$_$.a3;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.a1;
  var UByteArray = kotlin_kotlin.$_$.lg;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.b1;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.w;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.t;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.y;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.u;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.k2;
  var isBooleanArray = kotlin_kotlin.$_$.qb;
  var copyOf_6 = kotlin_kotlin.$_$.n6;
  var charArray = kotlin_kotlin.$_$.ua;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.o1;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.r1;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.f1;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.i1;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.x1;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.a2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.x;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.z;
  var trimIndent = kotlin_kotlin.$_$.lf;
  var Unit = kotlin_kotlin.$_$.tg;
  var charSequenceLength = kotlin_kotlin.$_$.xa;
  var lastOrNull = kotlin_kotlin.$_$.p7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.o7;
  var last = kotlin_kotlin.$_$.q7;
  var ULong = kotlin_kotlin.$_$.qg;
  var UInt = kotlin_kotlin.$_$.og;
  var UByte = kotlin_kotlin.$_$.mg;
  var UShort = kotlin_kotlin.$_$.sg;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.hh;
  var asSequence = kotlin_kotlin.$_$.c6;
  var get_js = kotlin_kotlin.$_$.bc;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.s2;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var get_indices = kotlin_kotlin.$_$.j7;
  var get_indices_0 = kotlin_kotlin.$_$.i7;
  var mapOf = kotlin_kotlin.$_$.u7;
  var Companion_instance = kotlin_kotlin.$_$.z2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p;
  var createFailure = kotlin_kotlin.$_$.zg;
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
    return deserializer.np(this);
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
    return $super === VOID ? this.zs(descriptor, index, deserializer, previousValue) : $super.zs.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.ns(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.mp(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.lp().mq();
    if (isNullabilitySupported) {
      return this.fu(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.it();
    } else {
      this.iu();
      this.fu(serializer, value);
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
    return this.m19(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.wp('type', serializer_0(StringCompanionObject_instance).lp());
      $this$buildSerialDescriptor.wp('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.xp_1.o() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.qp_1 = this$0.yp_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.xp_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return constructCallableReference(function (p0) {
      return p0.lp();
    }, 1, 0, 1);
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.xp_1 = baseClass;
    this.yp_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.zp_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).aq = function () {
    return this.xp_1;
  };
  protoOf(PolymorphicSerializer).lp = function () {
    var tmp0 = this.zp_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.n1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.xp_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.dq(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.aq());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.cq(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.aq());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
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
    this.eq_1 = missingFields;
    this.fq_1 = serialName;
  }
  protoOf(MissingFieldException).gq = function (newMessage) {
    return new MissingFieldException(newMessage, this, this.eq_1, this.fq_1);
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
      destination.c1(tmp$ret$2);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.r()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.iq(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.hq()) {
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
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.iq(rootClass) : tmp0_elvis_lhs;
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
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.jq(rootClass, serializers) : tmp3_elvis_lhs;
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
        destination.c1(tmp$ret$2);
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
        destination_0.c1(tmp$ret$5);
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
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().kq(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().kq(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().lq(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().lq(clazz, types);
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
    if (_this__u8e3s4.lp().mq()) {
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.iq(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.lp();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.rq_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.nq_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.qq_1 = original;
    this.rq_1 = kClass;
    this.sq_1 = this.qq_1.tq() + '<' + this.rq_1.o() + '>';
  }
  protoOf(ContextDescriptor).tq = function () {
    return this.sq_1;
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
    return equals(this.qq_1, another.qq_1) && another.rq_1.equals(this.rq_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.rq_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.sq_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.rq_1) + ', original: ' + toString(this.qq_1) + ')';
  };
  protoOf(ContextDescriptor).uq = function () {
    return this.qq_1.uq();
  };
  protoOf(ContextDescriptor).mq = function () {
    return this.qq_1.mq();
  };
  protoOf(ContextDescriptor).vq = function () {
    return this.qq_1.vq();
  };
  protoOf(ContextDescriptor).wq = function () {
    return this.qq_1.wq();
  };
  protoOf(ContextDescriptor).xq = function () {
    return this.qq_1.xq();
  };
  protoOf(ContextDescriptor).yq = function (index) {
    return this.qq_1.yq(index);
  };
  protoOf(ContextDescriptor).zq = function (name) {
    return this.qq_1.zq(name);
  };
  protoOf(ContextDescriptor).ar = function (index) {
    return this.qq_1.ar(index);
  };
  protoOf(ContextDescriptor).br = function (index) {
    return this.qq_1.br(index);
  };
  protoOf(ContextDescriptor).cr = function (index) {
    return this.qq_1.cr(index);
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
    this.er_1 = $this_elementNames;
    this.dr_1 = $this_elementNames.wq();
  }
  protoOf(elementNames$1).u = function () {
    return this.dr_1 > 0;
  };
  protoOf(elementNames$1).v = function () {
    var tmp = this.er_1.wq();
    var _unary__edvuaz = this.dr_1;
    this.dr_1 = _unary__edvuaz - 1 | 0;
    return this.er_1.yq(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.fr_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).t = function () {
    return new elementNames$1(this.fr_1);
  };
  function elementDescriptors$1($this_elementDescriptors) {
    this.hr_1 = $this_elementDescriptors;
    this.gr_1 = $this_elementDescriptors.wq();
  }
  protoOf(elementDescriptors$1).u = function () {
    return this.gr_1 > 0;
  };
  protoOf(elementDescriptors$1).v = function () {
    var tmp = this.hr_1.wq();
    var _unary__edvuaz = this.gr_1;
    this.gr_1 = _unary__edvuaz - 1 | 0;
    return this.hr_1.br(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.ir_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).t = function () {
    return new elementDescriptors$1(this.ir_1);
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
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.rp_1.e1(), toList(typeParameters), sdBuilder);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.rp_1.e1(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.op_1 = serialName;
    this.pp_1 = false;
    this.qp_1 = emptyList();
    this.rp_1 = ArrayList_init_$Create$_0();
    this.sp_1 = HashSet_init_$Create$();
    this.tp_1 = ArrayList_init_$Create$_0();
    this.up_1 = ArrayList_init_$Create$_0();
    this.vp_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).jr = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.sp_1.c1(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.op_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.rp_1.c1(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.tp_1.c1(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.up_1.c1(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.vp_1.c1(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).wp = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.jr(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.jr.call(this, elementName, descriptor, annotations, isOptional);
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
    var tmp0 = $this.vr_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.n1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.ur_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef(p0);
    }, 1, 0, 2);
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.kr_1 = serialName;
    this.lr_1 = kind;
    this.mr_1 = elementsCount;
    this.nr_1 = builder.qp_1;
    this.or_1 = toHashSet(builder.rp_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.rp_1;
    tmp.pr_1 = copyToArray(this_0);
    this.qr_1 = compactArray(builder.tp_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.up_1;
    tmp_0.rr_1 = copyToArray(this_1);
    this.sr_1 = toBooleanArray(builder.vp_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.pr_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$4 = to(item.pf_1, item.of_1);
      destination.c1(tmp$ret$4);
    }
    tmp_1.tr_1 = toMap(destination);
    this.ur_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.vr_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).tq = function () {
    return this.kr_1;
  };
  protoOf(SerialDescriptorImpl).uq = function () {
    return this.lr_1;
  };
  protoOf(SerialDescriptorImpl).wq = function () {
    return this.mr_1;
  };
  protoOf(SerialDescriptorImpl).xq = function () {
    return this.nr_1;
  };
  protoOf(SerialDescriptorImpl).wr = function () {
    return this.or_1;
  };
  protoOf(SerialDescriptorImpl).yq = function (index) {
    return getChecked(this.pr_1, index);
  };
  protoOf(SerialDescriptorImpl).zq = function (name) {
    var tmp0_elvis_lhs = this.tr_1.t2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).ar = function (index) {
    return getChecked(this.rr_1, index);
  };
  protoOf(SerialDescriptorImpl).br = function (index) {
    return getChecked(this.qr_1, index);
  };
  protoOf(SerialDescriptorImpl).cr = function (index) {
    return getChecked_0(this.sr_1, index);
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
      if (!(this.tq() === other.tq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.ur_1, other.ur_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.wq() === other.wq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.wq();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.br(index).tq() === other.br(index).tq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.br(index).uq(), other.br(index).uq())) {
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
  protoOf(AbstractDecoder).xr = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).yr = function () {
    return true;
  };
  protoOf(AbstractDecoder).zr = function () {
    return null;
  };
  protoOf(AbstractDecoder).as = function () {
    var tmp = this.xr();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).bs = function () {
    var tmp = this.xr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).cs = function () {
    var tmp = this.xr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ds = function () {
    var tmp = this.xr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).es = function () {
    var tmp = this.xr();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).fs = function () {
    var tmp = this.xr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).gs = function () {
    var tmp = this.xr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).hs = function () {
    var tmp = this.xr();
    return tmp instanceof Char ? tmp.x1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).is = function () {
    var tmp = this.xr();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).js = function (enumDescriptor) {
    var tmp = this.xr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ks = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).ls = function (deserializer, previousValue) {
    return this.ms(deserializer);
  };
  protoOf(AbstractDecoder).ns = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).os = function (descriptor) {
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
    return this.fs();
  };
  protoOf(AbstractDecoder).vs = function (descriptor, index) {
    return this.gs();
  };
  protoOf(AbstractDecoder).ws = function (descriptor, index) {
    return this.hs();
  };
  protoOf(AbstractDecoder).xs = function (descriptor, index) {
    return this.is();
  };
  protoOf(AbstractDecoder).ys = function (descriptor, index) {
    return this.ks(descriptor.br(index));
  };
  protoOf(AbstractDecoder).zs = function (descriptor, index, deserializer, previousValue) {
    return this.ls(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).bt = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.lp().mq();
    var tmp;
    if (isNullabilitySupported || this.yr()) {
      tmp = this.ls(deserializer, previousValue);
    } else {
      tmp = this.zr();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).ns = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).os = function (descriptor) {
  };
  protoOf(AbstractEncoder).gt = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).ht = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).it = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).jt = function (value) {
    return this.ht(value);
  };
  protoOf(AbstractEncoder).kt = function (value) {
    return this.ht(value);
  };
  protoOf(AbstractEncoder).lt = function (value) {
    return this.ht(value);
  };
  protoOf(AbstractEncoder).mt = function (value) {
    return this.ht(value);
  };
  protoOf(AbstractEncoder).nt = function (value) {
    return this.ht(value);
  };
  protoOf(AbstractEncoder).ot = function (value) {
    return this.ht(value);
  };
  protoOf(AbstractEncoder).pt = function (value) {
    return this.ht(value);
  };
  protoOf(AbstractEncoder).qt = function (value) {
    return this.ht(new Char(value));
  };
  protoOf(AbstractEncoder).rt = function (value) {
    return this.ht(value);
  };
  protoOf(AbstractEncoder).st = function (enumDescriptor, index) {
    return this.ht(index);
  };
  protoOf(AbstractEncoder).tt = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).ut = function (descriptor, index, value) {
    if (this.gt(descriptor, index)) {
      this.jt(value);
    }
  };
  protoOf(AbstractEncoder).vt = function (descriptor, index, value) {
    if (this.gt(descriptor, index)) {
      this.kt(value);
    }
  };
  protoOf(AbstractEncoder).wt = function (descriptor, index, value) {
    if (this.gt(descriptor, index)) {
      this.lt(value);
    }
  };
  protoOf(AbstractEncoder).xt = function (descriptor, index, value) {
    if (this.gt(descriptor, index)) {
      this.mt(value);
    }
  };
  protoOf(AbstractEncoder).yt = function (descriptor, index, value) {
    if (this.gt(descriptor, index)) {
      this.nt(value);
    }
  };
  protoOf(AbstractEncoder).zt = function (descriptor, index, value) {
    if (this.gt(descriptor, index)) {
      this.ot(value);
    }
  };
  protoOf(AbstractEncoder).au = function (descriptor, index, value) {
    if (this.gt(descriptor, index)) {
      this.pt(value);
    }
  };
  protoOf(AbstractEncoder).bu = function (descriptor, index, value) {
    if (this.gt(descriptor, index)) {
      this.qt(value);
    }
  };
  protoOf(AbstractEncoder).cu = function (descriptor, index, value) {
    if (this.gt(descriptor, index)) {
      this.rt(value);
    }
  };
  protoOf(AbstractEncoder).du = function (descriptor, index) {
    return this.gt(descriptor, index) ? this.tt(descriptor.br(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).eu = function (descriptor, index, serializer, value) {
    if (this.gt(descriptor, index)) {
      this.fu(serializer, value);
    }
  };
  protoOf(AbstractEncoder).gu = function (descriptor, index, serializer, value) {
    if (this.gt(descriptor, index)) {
      this.hu(serializer, value);
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
    var klassName = compositeDecoder.xs($this.lp(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.at($this.lp(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).bq = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.lp();
    var composite = encoder.ns(descriptor);
    composite.cu(this.lp(), 0, actualSerializer.lp().tq());
    var tmp = this.lp();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$2 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.eu(tmp, 1, tmp$ret$2, value);
    composite.os(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).mp = function (encoder, value) {
    return this.bq(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).np = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.lp();
    var composite = decoder.ns(descriptor);
    var tmp$ret$1;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.dt()) {
        tmp$ret$1 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.et(this.lp());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.xs(this.lp(), index);
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
            var serializer = findPolymorphicSerializer_0(this, composite, klassName);
            value = composite.at(this.lp(), index, serializer);
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
    composite.os(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).cq = function (decoder, klassName) {
    return decoder.ct().lu(this.aq(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).dq = function (encoder, value) {
    return encoder.ct().mu(this.aq(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.o();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.o() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.o() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.nu_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).lp = function () {
    return this.nu_1;
  };
  protoOf(NothingSerializer_0).ou = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).mp = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.ou(encoder, tmp);
  };
  protoOf(NothingSerializer_0).np = function (decoder) {
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
    this.pu_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).lp = function () {
    return this.pu_1;
  };
  protoOf(DurationSerializer).qu = function (encoder, value) {
    encoder.rt(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).mp = function (encoder, value) {
    return this.qu(encoder, value instanceof Duration ? value.zl_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).ru = function (decoder) {
    return Companion_getInstance().am(decoder.is());
  };
  protoOf(DurationSerializer).np = function (decoder) {
    return new Duration(this.ru(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.su_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).lp = function () {
    return this.su_1;
  };
  protoOf(InstantSerializer).tu = function (encoder, value) {
    encoder.rt(value.toString());
  };
  protoOf(InstantSerializer).mp = function (encoder, value) {
    return this.tu(encoder, value instanceof Instant ? value : THROW_CCE());
  };
  protoOf(InstantSerializer).np = function (decoder) {
    return Companion_getInstance_0().mm(decoder.is());
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.uu_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).lp = function () {
    return this.uu_1;
  };
  protoOf(UuidSerializer).vu = function (encoder, value) {
    encoder.rt(value.toString());
  };
  protoOf(UuidSerializer).mp = function (encoder, value) {
    return this.vu(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).np = function (decoder) {
    return Companion_getInstance_1().sn(decoder.is());
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
  protoOf(ArrayClassDesc).tq = function () {
    return 'kotlin.Array';
  };
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).tq = function () {
    return 'kotlin.collections.ArrayList';
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).tq = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).tq = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.yu_1 = elementDescriptor;
    this.zu_1 = 1;
  }
  protoOf(ListLikeDescriptor).uq = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).wq = function () {
    return this.zu_1;
  };
  protoOf(ListLikeDescriptor).yq = function (index) {
    requireNonNegativeIndex(index, this.tq());
    return index.toString();
  };
  protoOf(ListLikeDescriptor).zq = function (name) {
    var tmp0_safe_receiver = toIntOrNull(name);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver >= 0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? -3 : tmp1_elvis_lhs;
  };
  protoOf(ListLikeDescriptor).cr = function (index) {
    requireNonNegativeIndex(index, this.tq());
    return false;
  };
  protoOf(ListLikeDescriptor).ar = function (index) {
    requireNonNegativeIndex(index, this.tq());
    return emptyList();
  };
  protoOf(ListLikeDescriptor).br = function (index) {
    requireNonNegativeIndex(index, this.tq());
    return this.yu_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.yu_1, other.yu_1) && this.tq() === other.tq())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.yu_1), 31) + getStringHashCode(this.tq()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.tq() + '(' + toString(this.yu_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.cv_1 = serialName;
    this.dv_1 = keyDescriptor;
    this.ev_1 = valueDescriptor;
    this.fv_1 = 2;
  }
  protoOf(MapLikeDescriptor).tq = function () {
    return this.cv_1;
  };
  protoOf(MapLikeDescriptor).uq = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).wq = function () {
    return this.fv_1;
  };
  protoOf(MapLikeDescriptor).yq = function (index) {
    requireNonNegativeIndex(index, this.tq());
    return index.toString();
  };
  protoOf(MapLikeDescriptor).zq = function (name) {
    var tmp0_safe_receiver = toIntOrNull(name);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver >= 0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? -3 : tmp1_elvis_lhs;
  };
  protoOf(MapLikeDescriptor).cr = function (index) {
    requireNonNegativeIndex(index, this.tq());
    return false;
  };
  protoOf(MapLikeDescriptor).ar = function (index) {
    requireNonNegativeIndex(index, this.tq());
    return emptyList();
  };
  protoOf(MapLikeDescriptor).br = function (index) {
    requireNonNegativeIndex(index, this.tq());
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.dv_1;
        break;
      case 1:
        tmp = this.ev_1;
        break;
      default:
        // Inline function 'kotlin.error' call

        var message = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.tq() === other.tq()))
      return false;
    if (!equals(this.dv_1, other.dv_1))
      return false;
    if (!equals(this.ev_1, other.ev_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.tq());
    result = imul(31, result) + hashCode(this.dv_1) | 0;
    result = imul(31, result) + hashCode(this.ev_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.tq() + '(' + toString(this.dv_1) + ', ' + toString(this.ev_1) + ')';
  };
  function requireNonNegativeIndex(index, name) {
    if (index < 0)
      throw IndexOutOfBoundsException_init_$Create$('Illegal index ' + index + ', ' + name + ' expects only non-negative indices');
  }
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.mv_1 = primitive.tq() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).tq = function () {
    return this.mv_1;
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.ov_1 = kClass;
    this.pv_1 = new ArrayClassDesc(eSerializer.lp());
  }
  protoOf(ReferenceArraySerializer).lp = function () {
    return this.pv_1;
  };
  protoOf(ReferenceArraySerializer).qv = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).rv = function (_this__u8e3s4) {
    return this.qv((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).sv = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).tv = function (_this__u8e3s4) {
    return this.sv((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).uv = function (initialCapacityHint) {
    if (initialCapacityHint === -1) {
      // Inline function 'kotlin.collections.arrayListOf' call
      return ArrayList_init_$Create$_0();
    }
    return ArrayList_init_$Create$(initialCapacityHint);
  };
  protoOf(ReferenceArraySerializer).vv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ReferenceArraySerializer).wv = function (_this__u8e3s4) {
    return this.vv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).xv = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.ov_1);
  };
  protoOf(ReferenceArraySerializer).yv = function (_this__u8e3s4) {
    return this.xv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).zv = function (_this__u8e3s4, expectedSize) {
    var expectedCapacity = coerceAtLeast(expectedSize, 0);
    // Inline function 'kotlin.also' call
    var this_0 = ArrayList_init_$Create$(expectedCapacity);
    addAll(this_0, _this__u8e3s4);
    return this_0;
  };
  protoOf(ReferenceArraySerializer).aw = function (_this__u8e3s4, expectedSize) {
    return this.zv((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(ReferenceArraySerializer).bw = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.y2(index, element);
  };
  protoOf(ReferenceArraySerializer).cw = function (_this__u8e3s4, index, element) {
    return this.bw(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.kw_1 = new ArrayListClassDesc(element.lp());
  }
  protoOf(ArrayListSerializer).lp = function () {
    return this.kw_1;
  };
  protoOf(ArrayListSerializer).uv = function (initialCapacityHint) {
    if (initialCapacityHint === -1) {
      // Inline function 'kotlin.collections.arrayListOf' call
      return ArrayList_init_$Create$_0();
    }
    return ArrayList_init_$Create$(initialCapacityHint);
  };
  protoOf(ArrayListSerializer).lw = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ArrayListSerializer).wv = function (_this__u8e3s4) {
    return this.lw(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).mw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).yv = function (_this__u8e3s4) {
    return this.mw(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).nw = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof ArrayList) {
      // Inline function 'kotlin.also' call
      _this__u8e3s4.s5(expectedSize);
      return _this__u8e3s4;
    }
    if (expectedSize === _this__u8e3s4.e1())
      return ArrayList_init_$Create$_1(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = ArrayList_init_$Create$(expectedSize);
    this_0.i1(_this__u8e3s4);
    return this_0;
  };
  protoOf(ArrayListSerializer).aw = function (_this__u8e3s4, expectedSize) {
    return this.nw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(ArrayListSerializer).ow = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.y2(index, element);
  };
  protoOf(ArrayListSerializer).cw = function (_this__u8e3s4, index, element) {
    return this.ow(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.uw_1 = new LinkedHashMapClassDesc(kSerializer.lp(), vSerializer.lp());
  }
  protoOf(LinkedHashMapSerializer).lp = function () {
    return this.uw_1;
  };
  protoOf(LinkedHashMapSerializer).vw = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(LinkedHashMapSerializer).rv = function (_this__u8e3s4) {
    return this.vw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).ww = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.l1().t();
  };
  protoOf(LinkedHashMapSerializer).tv = function (_this__u8e3s4) {
    return this.ww((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).uv = function (initialCapacityHint) {
    if (initialCapacityHint === -1)
      return LinkedHashMap_init_$Create$();
    return newLinkedHashMap(initialCapacityHint);
  };
  protoOf(LinkedHashMapSerializer).xw = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(LinkedHashMapSerializer).wv = function (_this__u8e3s4) {
    return this.xw(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).yw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).yv = function (_this__u8e3s4) {
    return this.yw(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).zw = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof LinkedHashMap)
      return _this__u8e3s4;
    if (expectedSize <= _this__u8e3s4.e1())
      return LinkedHashMap_init_$Create$_0(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = newLinkedHashMap(expectedSize);
    this_0.c3(_this__u8e3s4);
    return this_0;
  };
  protoOf(LinkedHashMapSerializer).aw = function (_this__u8e3s4, expectedSize) {
    return this.zw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.fx_1 = new HashSetClassDesc(eSerializer.lp());
  }
  protoOf(HashSetSerializer).lp = function () {
    return this.fx_1;
  };
  protoOf(HashSetSerializer).uv = function (initialCapacityHint) {
    if (initialCapacityHint === -1)
      return HashSet_init_$Create$();
    return newHashSet(initialCapacityHint);
  };
  protoOf(HashSetSerializer).gx = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(HashSetSerializer).wv = function (_this__u8e3s4) {
    return this.gx(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).hx = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).yv = function (_this__u8e3s4) {
    return this.hx(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).ix = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof HashSet)
      return _this__u8e3s4;
    if (expectedSize <= _this__u8e3s4.e1())
      return HashSet_init_$Create$_0(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = newHashSet(expectedSize);
    this_0.i1(_this__u8e3s4);
    return this_0;
  };
  protoOf(HashSetSerializer).aw = function (_this__u8e3s4, expectedSize) {
    return this.ix((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(HashSetSerializer).jx = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.c1(element);
  };
  protoOf(HashSetSerializer).cw = function (_this__u8e3s4, index, element) {
    return this.jx(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.lx_1 = new LinkedHashSetClassDesc(eSerializer.lp());
  }
  protoOf(LinkedHashSetSerializer).lp = function () {
    return this.lx_1;
  };
  protoOf(LinkedHashSetSerializer).uv = function (initialCapacityHint) {
    if (initialCapacityHint === -1) {
      // Inline function 'kotlin.collections.linkedSetOf' call
      return LinkedHashSet_init_$Create$();
    }
    return newLinkedHashSet(initialCapacityHint);
  };
  protoOf(LinkedHashSetSerializer).mx = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(LinkedHashSetSerializer).wv = function (_this__u8e3s4) {
    return this.mx(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).nx = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).yv = function (_this__u8e3s4) {
    return this.nx(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).ix = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof LinkedHashSet)
      return _this__u8e3s4;
    if (expectedSize <= _this__u8e3s4.e1())
      return LinkedHashSet_init_$Create$_0(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = newLinkedHashSet(expectedSize);
    this_0.i1(_this__u8e3s4);
    return this_0;
  };
  protoOf(LinkedHashSetSerializer).aw = function (_this__u8e3s4, expectedSize) {
    return this.ix((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(LinkedHashSetSerializer).ox = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.c1(element);
  };
  protoOf(LinkedHashSetSerializer).cw = function (_this__u8e3s4, index, element) {
    return this.ox(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.rx_1 = new HashMapClassDesc(kSerializer.lp(), vSerializer.lp());
  }
  protoOf(HashMapSerializer).lp = function () {
    return this.rx_1;
  };
  protoOf(HashMapSerializer).vw = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(HashMapSerializer).rv = function (_this__u8e3s4) {
    return this.vw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).ww = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.l1().t();
  };
  protoOf(HashMapSerializer).tv = function (_this__u8e3s4) {
    return this.ww((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).uv = function (initialCapacityHint) {
    if (initialCapacityHint === -1)
      return HashMap_init_$Create$();
    return newHashMap(initialCapacityHint);
  };
  protoOf(HashMapSerializer).sx = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(HashMapSerializer).wv = function (_this__u8e3s4) {
    return this.sx(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).tx = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).yv = function (_this__u8e3s4) {
    return this.tx(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).zw = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof HashMap)
      return _this__u8e3s4;
    if (expectedSize <= _this__u8e3s4.e1())
      return HashMap_init_$Create$_0(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = newHashMap(expectedSize);
    this_0.c3(_this__u8e3s4);
    return this_0;
  };
  protoOf(HashMapSerializer).aw = function (_this__u8e3s4, expectedSize) {
    return this.zw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.dw_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).ew = function (encoder, value) {
    var size = this.rv(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.lp();
    var composite = encoder.ju(descriptor, size);
    var iterator = this.tv(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.eu(this.lp(), index, this.dw_1, iterator.v());
      }
       while (inductionVariable < size);
    composite.os(descriptor);
  };
  protoOf(CollectionLikeSerializer).mp = function (encoder, value) {
    return this.ew(encoder, value);
  };
  protoOf(CollectionLikeSerializer).fw = function (decoder, builder, startIndex, size) {
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
        this.gw(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).gw = function (decoder, index, builder, checkIndex) {
    this.cw(builder, index, decoder.at(this.lp(), index, this.dw_1));
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).qw = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(CollectionSerializer).rv = function (_this__u8e3s4) {
    return this.qw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).rw = function (_this__u8e3s4) {
    return _this__u8e3s4.t();
  };
  protoOf(CollectionSerializer).tv = function (_this__u8e3s4) {
    return this.rw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
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
  protoOf(MapLikeSerializer).fw = function (decoder, builder, startIndex, size) {
    return this.cx(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).dx = function (decoder, index, builder, checkIndex) {
    var key = decoder.at(this.lp(), index, this.ax_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.et(this.lp());
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
    if (builder.r2(key)) {
      var tmp_2 = this.bx_1.lp().uq();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.zs(this.lp(), vIndex, this.bx_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.at(this.lp(), vIndex, this.bx_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.a3(key, value);
  };
  protoOf(MapLikeSerializer).gw = function (decoder, index, builder, checkIndex) {
    return this.dx(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).ew = function (encoder, value) {
    var size = this.rv(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.lp();
    var composite = encoder.ju(descriptor, size);
    var iterator = this.tv(value);
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
      var tmp = this.lp();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.eu(tmp, _unary__edvuaz, this.ax_1, k);
      var tmp_0 = this.lp();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.eu(tmp_0, _unary__edvuaz_0, this.bx_1, v);
    }
    composite.os(descriptor);
  };
  protoOf(MapLikeSerializer).mp = function (encoder, value) {
    return this.ew(encoder, value);
  };
  function newLinkedHashMap(expectedCapacity) {
    var capacity = estimateCapacityForHashMap(expectedCapacity);
    return LinkedHashMap_init_$Create$_1(capacity);
  }
  function newHashSet(expectedCapacity) {
    var capacity = estimateCapacityForHashMap(expectedCapacity);
    return HashSet_init_$Create$_1(capacity);
  }
  function newLinkedHashSet(expectedCapacity) {
    var capacity = estimateCapacityForHashMap(expectedCapacity);
    return LinkedHashSet_init_$Create$_1(capacity);
  }
  function newHashMap(expectedCapacity) {
    var capacity = estimateCapacityForHashMap(expectedCapacity);
    return HashMap_init_$Create$_1(capacity);
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).iw = function (decoder, previous) {
    var compositeDecoder = decoder.ns(this.lp());
    var expectedSize = compositeDecoder.ft(this.lp());
    // Inline function 'kotlin.require' call
    if (!(expectedSize >= -1)) {
      var message = 'Decoded collection size should be either non-negative, or -1 (meaning, unknown). Was: ' + expectedSize;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    if (!(previous == null)) {
      tmp = this.aw(previous, this.rv(previous) + coerceAtLeast(expectedSize, 0) | 0);
    } else {
      tmp = this.uv(expectedSize);
    }
    var builder = tmp;
    var startIndex = this.wv(builder);
    if (compositeDecoder.dt()) {
      this.fw(compositeDecoder, builder, startIndex, expectedSize);
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.et(this.lp());
        if (index === -1)
          break $l$loop;
        this.hw(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.os(this.lp());
    return this.yv(builder);
  };
  protoOf(AbstractCollectionSerializer).np = function (decoder) {
    return this.iw(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).hw = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.gw(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.gw.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.vx_1 = new PrimitiveArrayDescriptor(primitiveSerializer.lp());
  }
  protoOf(PrimitiveArraySerializer).lp = function () {
    return this.vx_1;
  };
  protoOf(PrimitiveArraySerializer).wx = function (_this__u8e3s4) {
    return _this__u8e3s4.xx();
  };
  protoOf(PrimitiveArraySerializer).wv = function (_this__u8e3s4) {
    return this.wx(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).yx = function (_this__u8e3s4) {
    return _this__u8e3s4.zx();
  };
  protoOf(PrimitiveArraySerializer).yv = function (_this__u8e3s4) {
    return this.yx(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).ay = function (_this__u8e3s4) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).tv = function (_this__u8e3s4) {
    return this.ay(_this__u8e3s4);
  };
  protoOf(PrimitiveArraySerializer).by = function (_this__u8e3s4, index, element) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).cw = function (_this__u8e3s4, index, element) {
    return this.by(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  protoOf(PrimitiveArraySerializer).uv = function (initialCapacityHint) {
    if (initialCapacityHint === -1)
      return this.cy();
    return this.dy(initialCapacityHint);
  };
  protoOf(PrimitiveArraySerializer).gy = function (encoder, value) {
    var size = this.rv(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.vx_1;
    var composite = encoder.ju(descriptor, size);
    this.fy(composite, value, size);
    composite.os(descriptor);
  };
  protoOf(PrimitiveArraySerializer).mp = function (encoder, value) {
    return this.gy(encoder, value);
  };
  protoOf(PrimitiveArraySerializer).ew = function (encoder, value) {
    return this.gy(encoder, value);
  };
  protoOf(PrimitiveArraySerializer).np = function (decoder) {
    return this.iw(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).iy = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.xx() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.hy(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.hy.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.jy_1 = longArray(0);
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
    $this.ny_1[slot] = bitwiseOr($this.ny_1[slot], shiftLeft(new Long(1, 0), offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.ny_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.ny_1[slot];
        while (!equalsLong(slotMarks, new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(invert(slotMarks));
          slotMarks = bitwiseOr(slotMarks, shiftLeft(new Long(1, 0), indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.ly_1($this.ky_1, index)) {
            $this.ny_1[slot] = slotMarks;
            return index;
          }
        }
        $this.ny_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.ky_1 = descriptor;
    this.ly_1 = readIfAbsent;
    var elementsCount = this.ky_1.wq();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = shiftLeft(new Long(-1, -1), elementsCount);
      }
      tmp.my_1 = tmp_0;
      this.ny_1 = Companion_getInstance_8().jy_1;
    } else {
      this.my_1 = new Long(0, 0);
      this.ny_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).oy = function (index) {
    if (index < 64) {
      this.my_1 = bitwiseOr(this.my_1, shiftLeft(new Long(1, 0), index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).py = function () {
    var elementsCount = this.ky_1.wq();
    while (!equalsLong(this.my_1, new Long(-1, -1))) {
      var index = countTrailingZeroBits(invert(this.my_1));
      this.my_1 = bitwiseOr(this.my_1, shiftLeft(new Long(1, 0), index));
      if (this.ly_1(this.ky_1, index)) {
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
    var d = new EnumDescriptor(serialName, $this.qy_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.qy_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.fz(element.z_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.ry_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer$_get_descriptor_$ref_j67dlw() {
    return constructCallableReference(function (p0) {
      return p0.lp();
    }, 1, 0, 3);
  }
  function EnumSerializer(serialName, values) {
    this.qy_1 = values;
    this.ry_1 = null;
    var tmp = this;
    tmp.sy_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).lp = function () {
    var tmp0 = this.sy_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, EnumSerializer$_get_descriptor_$ref_j67dlw(), null);
    return tmp0.n1();
  };
  protoOf(EnumSerializer).gz = function (encoder, value) {
    var index = indexOf(this.qy_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.lp().tq() + ', ' + ('must be one of ' + contentToString(this.qy_1)));
    }
    encoder.st(this.lp(), index);
  };
  protoOf(EnumSerializer).mp = function (encoder, value) {
    return this.gz(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).np = function (decoder) {
    var index = decoder.js(this.lp());
    if (!(0 <= index ? index <= (this.qy_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.lp().tq() + ' enum values, ' + ('values size is ' + this.qy_1.length));
    }
    return this.qy_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.lp().tq() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.uz_1;
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
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.yq(tmp_2), OBJECT_getInstance(), []);
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
    this.tz_1 = ENUM_getInstance();
    var tmp = this;
    tmp.uz_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).uq = function () {
    return this.tz_1;
  };
  protoOf(EnumDescriptor).br = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!isInterface(other, SerialDescriptor))
      return false;
    if (!(other.uq() === ENUM_getInstance()))
      return false;
    if (!(this.tq() === other.tq()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.tq() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.tq());
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
    this.j10_1 = true;
  }
  protoOf(InlineClassDescriptor).vq = function () {
    return this.j10_1;
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
      if (!(this.tq() === other.tq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.j10_1 && contentEquals(this.vz(), other.vz()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.wq() === other.wq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.wq();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.br(index).tq() === other.br(index).tq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.br(index).uq(), other.br(index).uq())) {
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
    this.k10_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).l10 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.k10_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).lp = function () {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).mp = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).np = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function missingFieldExceptionWithNewMessage(exception, message) {
    return exception.gq(message);
  }
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.n10_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).ct = function () {
    return this.n10_1;
  };
  protoOf(NoOpEncoder).ht = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).it = function () {
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
  protoOf(NoOpEncoder).ot = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).pt = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).qt = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).rt = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).st = function (enumDescriptor, index) {
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
    this.o10_1 = OBJECT_getInstance();
    this.p10_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).uq = function () {
    return this.o10_1;
  };
  protoOf(NothingSerialDescriptor).tq = function () {
    return this.p10_1;
  };
  protoOf(NothingSerialDescriptor).wq = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).yq = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).zq = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).cr = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).br = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).ar = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.p10_1) + imul(31, this.o10_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.q10_1 = serializer;
    this.r10_1 = new SerialDescriptorForNullable(this.q10_1.lp());
  }
  protoOf(NullableSerializer).lp = function () {
    return this.r10_1;
  };
  protoOf(NullableSerializer).s10 = function (encoder, value) {
    if (!(value == null)) {
      encoder.iu();
      encoder.fu(this.q10_1, value);
    } else {
      encoder.it();
    }
  };
  protoOf(NullableSerializer).mp = function (encoder, value) {
    return this.s10(encoder, value);
  };
  protoOf(NullableSerializer).np = function (decoder) {
    return decoder.yr() ? decoder.ms(this.q10_1) : decoder.zr();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.q10_1, other.q10_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.q10_1);
  };
  function SerialDescriptorForNullable(original) {
    this.nq_1 = original;
    this.oq_1 = this.nq_1.tq() + '?';
    this.pq_1 = cachedSerialNames(this.nq_1);
  }
  protoOf(SerialDescriptorForNullable).tq = function () {
    return this.oq_1;
  };
  protoOf(SerialDescriptorForNullable).wr = function () {
    return this.pq_1;
  };
  protoOf(SerialDescriptorForNullable).mq = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.nq_1, other.nq_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.nq_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.nq_1), 31);
  };
  protoOf(SerialDescriptorForNullable).uq = function () {
    return this.nq_1.uq();
  };
  protoOf(SerialDescriptorForNullable).vq = function () {
    return this.nq_1.vq();
  };
  protoOf(SerialDescriptorForNullable).wq = function () {
    return this.nq_1.wq();
  };
  protoOf(SerialDescriptorForNullable).xq = function () {
    return this.nq_1.xq();
  };
  protoOf(SerialDescriptorForNullable).yq = function (index) {
    return this.nq_1.yq(index);
  };
  protoOf(SerialDescriptorForNullable).zq = function (name) {
    return this.nq_1.zq(name);
  };
  protoOf(SerialDescriptorForNullable).ar = function (index) {
    return this.nq_1.ar(index);
  };
  protoOf(SerialDescriptorForNullable).br = function (index) {
    return this.nq_1.br(index);
  };
  protoOf(SerialDescriptorForNullable).cr = function (index) {
    return this.nq_1.cr(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.qp_1 = this$0.u10_1;
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
      return p0.lp();
    }, 1, 0, 5);
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.t10_1 = objectInstance;
    this.u10_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.v10_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).lp = function () {
    var tmp0 = this.v10_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.n1();
  };
  protoOf(ObjectSerializer).bq = function (encoder, value) {
    encoder.ns(this.lp()).os(this.lp());
  };
  protoOf(ObjectSerializer).mp = function (encoder, value) {
    return this.bq(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).np = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.lp();
    var composite = decoder.ns(descriptor);
    var tmp$ret$1;
    $l$block_0: {
      if (composite.dt()) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.et(this.lp());
      if (index === -1) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$1;
    composite.os(descriptor);
    return this.t10_1;
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
    var tmp0 = _this__u8e3s4.zj_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.zj_1);
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
      return _this__u8e3s4.wr();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.wq());
    var inductionVariable = 0;
    var last = _this__u8e3s4.wq();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.yq(i);
        result.c1(element);
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
          var element = descriptor.yq(i);
          missingFields.c1(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.tq());
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
                var element = descriptor.yq(imul(maskSlot, 32) + i | 0);
                missingFields.c1(element);
              }
              missingFieldsBits = missingFieldsBits >>> 1 | 0;
            }
             while (inductionVariable_0 < 32);
        }
      }
       while (inductionVariable <= last);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.tq());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.cz_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.n1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.ez_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.n1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.xy_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.xy_1[i];
        indices.a3(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.uy_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l10();
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
      var tmp0_safe_receiver = this$0.uy_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m10();
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
          var tmp$ret$2 = item.lp();
          destination.c1(tmp$ret$2);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return constructCallableReference(function (p0) {
      return p0.vz();
    }, 1, 0, 7);
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.vz());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    }, 1, 0, 8);
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.ty_1 = serialName;
    this.uy_1 = generatedSerializer;
    this.vy_1 = elementsCount;
    this.wy_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.vy_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.xy_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.vy_1;
    tmp_3.yy_1 = Array(size);
    this.zy_1 = null;
    this.az_1 = booleanArray(this.vy_1);
    this.bz_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.cz_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.dz_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.ez_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).tq = function () {
    return this.ty_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).wq = function () {
    return this.vy_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).uq = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).xq = function () {
    var tmp0_elvis_lhs = this.zy_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).wr = function () {
    return this.bz_1.u2();
  };
  protoOf(PluginGeneratedSerialDescriptor).vz = function () {
    var tmp0 = this.dz_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.n1();
  };
  protoOf(PluginGeneratedSerialDescriptor).wz = function (name, isOptional) {
    this.wy_1 = this.wy_1 + 1 | 0;
    this.xy_1[this.wy_1] = name;
    this.az_1[this.wy_1] = isOptional;
    this.yy_1[this.wy_1] = null;
    if (this.wy_1 === (this.vy_1 - 1 | 0)) {
      this.bz_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).fz = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.wz(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.wz.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).br = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).lp();
  };
  protoOf(PluginGeneratedSerialDescriptor).cr = function (index) {
    return getChecked_0(this.az_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).ar = function (index) {
    var tmp0_elvis_lhs = getChecked(this.yy_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).yq = function (index) {
    return getChecked(this.xy_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).zq = function (name) {
    var tmp0_elvis_lhs = this.bz_1.t2(name);
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
      if (!(this.tq() === other.tq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.vz(), other.vz())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.wq() === other.wq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.wq();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.br(index).tq() === other.br(index).tq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.br(index).uq(), other.br(index).uq())) {
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
    var result = getStringHashCode(_this__u8e3s4.tq());
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
      var tmp0_safe_receiver = element.tq();
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
      var tmp0_safe_receiver_0 = element_0.uq();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.wq());
    var tmp_0 = _this__u8e3s4.tq() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.yq(i) + ': ' + $this_toStringImpl.br(i).tq();
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
  protoOf(ByteArraySerializer_0).z10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).rv = function (_this__u8e3s4) {
    return this.z10((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).a11 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return ByteArrayBuilder_init_$Create$(_this__u8e3s4);
    return new ByteArrayBuilder(copyOf(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(ByteArraySerializer_0).aw = function (_this__u8e3s4, expectedSize) {
    return this.a11((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(ByteArraySerializer_0).dy = function (size) {
    return ByteArrayBuilder_init_$Create$_0(size);
  };
  protoOf(ByteArraySerializer_0).cy = function () {
    return ByteArrayBuilder_init_$Create$_1();
  };
  protoOf(ByteArraySerializer_0).b11 = function (decoder, index, builder, checkIndex) {
    builder.e11(decoder.qs(this.vx_1, index));
  };
  protoOf(ByteArraySerializer_0).gw = function (decoder, index, builder, checkIndex) {
    return this.b11(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.b11(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).f11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.vt(this.vx_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).fy = function (encoder, content, size) {
    return this.f11(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function ByteArrayBuilder_init_$Init$(bufferWithData, $this) {
    ByteArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function ByteArrayBuilder_init_$Create$(bufferWithData) {
    return ByteArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(ByteArrayBuilder)));
  }
  function ByteArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    ByteArrayBuilder.call($this, new Int8Array(initialCapacity), 0);
    return $this;
  }
  function ByteArrayBuilder_init_$Create$_0(initialCapacity) {
    return ByteArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(ByteArrayBuilder)));
  }
  function ByteArrayBuilder_init_$Init$_1($this) {
    ByteArrayBuilder.call($this, new Int8Array(10), 0);
    return $this;
  }
  function ByteArrayBuilder_init_$Create$_1() {
    return ByteArrayBuilder_init_$Init$_1(objectCreate(protoOf(ByteArrayBuilder)));
  }
  function ByteArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.c11_1 = bufferWithData;
    this.d11_1 = initialPosition;
  }
  protoOf(ByteArrayBuilder).xx = function () {
    return this.d11_1;
  };
  protoOf(ByteArrayBuilder).hy = function (requiredCapacity) {
    if (this.c11_1.length < requiredCapacity)
      this.c11_1 = copyOf(this.c11_1, coerceAtLeast(requiredCapacity, imul(this.c11_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).e11 = function (c) {
    this.iy();
    var tmp = this.c11_1;
    var _unary__edvuaz = this.d11_1;
    this.d11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).zx = function () {
    return copyOf(this.c11_1, this.d11_1);
  };
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_2()));
  }
  protoOf(CharArraySerializer_0).i11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).rv = function (_this__u8e3s4) {
    return this.i11((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).j11 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return CharArrayBuilder_init_$Create$(_this__u8e3s4);
    return new CharArrayBuilder(copyOf_0(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(CharArraySerializer_0).aw = function (_this__u8e3s4, expectedSize) {
    return this.j11((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(CharArraySerializer_0).dy = function (size) {
    return CharArrayBuilder_init_$Create$_0(size);
  };
  protoOf(CharArraySerializer_0).cy = function () {
    return CharArrayBuilder_init_$Create$_1();
  };
  protoOf(CharArraySerializer_0).k11 = function (decoder, index, builder, checkIndex) {
    builder.n11(decoder.ws(this.vx_1, index));
  };
  protoOf(CharArraySerializer_0).gw = function (decoder, index, builder, checkIndex) {
    return this.k11(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.k11(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).o11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.bu(this.vx_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).fy = function (encoder, content, size) {
    return this.o11(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(DoubleArraySerializer_0).r11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).rv = function (_this__u8e3s4) {
    return this.r11((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).s11 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return DoubleArrayBuilder_init_$Create$(_this__u8e3s4);
    return new DoubleArrayBuilder(copyOf_1(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(DoubleArraySerializer_0).aw = function (_this__u8e3s4, expectedSize) {
    return this.s11((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(DoubleArraySerializer_0).dy = function (size) {
    return DoubleArrayBuilder_init_$Create$_0(size);
  };
  protoOf(DoubleArraySerializer_0).cy = function () {
    return DoubleArrayBuilder_init_$Create$_1();
  };
  protoOf(DoubleArraySerializer_0).t11 = function (decoder, index, builder, checkIndex) {
    builder.w11(decoder.vs(this.vx_1, index));
  };
  protoOf(DoubleArraySerializer_0).gw = function (decoder, index, builder, checkIndex) {
    return this.t11(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.t11(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).x11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.au(this.vx_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).fy = function (encoder, content, size) {
    return this.x11(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(FloatArraySerializer_0).a12 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).rv = function (_this__u8e3s4) {
    return this.a12((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).b12 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return FloatArrayBuilder_init_$Create$(_this__u8e3s4);
    return new FloatArrayBuilder(copyOf_2(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(FloatArraySerializer_0).aw = function (_this__u8e3s4, expectedSize) {
    return this.b12((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(FloatArraySerializer_0).dy = function (size) {
    return FloatArrayBuilder_init_$Create$_0(size);
  };
  protoOf(FloatArraySerializer_0).cy = function () {
    return FloatArrayBuilder_init_$Create$_1();
  };
  protoOf(FloatArraySerializer_0).c12 = function (decoder, index, builder, checkIndex) {
    builder.f12(decoder.us(this.vx_1, index));
  };
  protoOf(FloatArraySerializer_0).gw = function (decoder, index, builder, checkIndex) {
    return this.c12(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.c12(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).g12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.zt(this.vx_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).fy = function (encoder, content, size) {
    return this.g12(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(LongArraySerializer_0).j12 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).rv = function (_this__u8e3s4) {
    return this.j12((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).k12 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return LongArrayBuilder_init_$Create$(_this__u8e3s4);
    return new LongArrayBuilder(copyOf_3(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(LongArraySerializer_0).aw = function (_this__u8e3s4, expectedSize) {
    return this.k12((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(LongArraySerializer_0).dy = function (size) {
    return LongArrayBuilder_init_$Create$_0(size);
  };
  protoOf(LongArraySerializer_0).cy = function () {
    return LongArrayBuilder_init_$Create$_1();
  };
  protoOf(LongArraySerializer_0).l12 = function (decoder, index, builder, checkIndex) {
    builder.o12(decoder.ts(this.vx_1, index));
  };
  protoOf(LongArraySerializer_0).gw = function (decoder, index, builder, checkIndex) {
    return this.l12(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.l12(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).p12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.yt(this.vx_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).fy = function (encoder, content, size) {
    return this.p12(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(ULongArraySerializer_0).s12 = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).rv = function (_this__u8e3s4) {
    return this.s12(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.ap_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).t12 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4))
      return ULongArrayBuilder_init_$Create$(_this__u8e3s4);
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0 = _ULongArray___init__impl__twm1l3(copyOf_3(_ULongArray___get_storage__impl__28e64j(_this__u8e3s4), expectedSize));
    return new ULongArrayBuilder(tmp$ret$0, _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4));
  };
  protoOf(ULongArraySerializer_0).aw = function (_this__u8e3s4, expectedSize) {
    return this.t12(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.ap_1 : THROW_CCE(), expectedSize);
  };
  protoOf(ULongArraySerializer_0).dy = function (size) {
    return ULongArrayBuilder_init_$Create$_0(size);
  };
  protoOf(ULongArraySerializer_0).cy = function () {
    return ULongArrayBuilder_init_$Create$_1();
  };
  protoOf(ULongArraySerializer_0).u12 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.ys(this.vx_1, index).es();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.x12(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).gw = function (decoder, index, builder, checkIndex) {
    return this.u12(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.u12(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).y12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.du(this.vx_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.nt(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).fy = function (encoder, content, size) {
    return this.y12(encoder, content instanceof ULongArray ? content.ap_1 : THROW_CCE(), size);
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
  protoOf(IntArraySerializer_0).b13 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).rv = function (_this__u8e3s4) {
    return this.b13((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).c13 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return IntArrayBuilder_init_$Create$(_this__u8e3s4);
    return new IntArrayBuilder(copyOf_4(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(IntArraySerializer_0).aw = function (_this__u8e3s4, expectedSize) {
    return this.c13((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(IntArraySerializer_0).dy = function (size) {
    return IntArrayBuilder_init_$Create$_0(size);
  };
  protoOf(IntArraySerializer_0).cy = function () {
    return IntArrayBuilder_init_$Create$_1();
  };
  protoOf(IntArraySerializer_0).d13 = function (decoder, index, builder, checkIndex) {
    builder.g13(decoder.ss(this.vx_1, index));
  };
  protoOf(IntArraySerializer_0).gw = function (decoder, index, builder, checkIndex) {
    return this.d13(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.d13(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).h13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.xt(this.vx_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).fy = function (encoder, content, size) {
    return this.h13(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UIntArraySerializer_0).k13 = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).rv = function (_this__u8e3s4) {
    return this.k13(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.qo_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).l13 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4))
      return UIntArrayBuilder_init_$Create$(_this__u8e3s4);
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0 = _UIntArray___init__impl__ghjpc6(copyOf_4(_UIntArray___get_storage__impl__92a0v0(_this__u8e3s4), expectedSize));
    return new UIntArrayBuilder(tmp$ret$0, _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4));
  };
  protoOf(UIntArraySerializer_0).aw = function (_this__u8e3s4, expectedSize) {
    return this.l13(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.qo_1 : THROW_CCE(), expectedSize);
  };
  protoOf(UIntArraySerializer_0).dy = function (size) {
    return UIntArrayBuilder_init_$Create$_0(size);
  };
  protoOf(UIntArraySerializer_0).cy = function () {
    return UIntArrayBuilder_init_$Create$_1();
  };
  protoOf(UIntArraySerializer_0).m13 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.ys(this.vx_1, index).ds();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.p13(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).gw = function (decoder, index, builder, checkIndex) {
    return this.m13(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.m13(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).q13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.du(this.vx_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.mt(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).fy = function (encoder, content, size) {
    return this.q13(encoder, content instanceof UIntArray ? content.qo_1 : THROW_CCE(), size);
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
  protoOf(ShortArraySerializer_0).t13 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).rv = function (_this__u8e3s4) {
    return this.t13((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).u13 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return ShortArrayBuilder_init_$Create$(_this__u8e3s4);
    return new ShortArrayBuilder(copyOf_5(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(ShortArraySerializer_0).aw = function (_this__u8e3s4, expectedSize) {
    return this.u13((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(ShortArraySerializer_0).dy = function (size) {
    return ShortArrayBuilder_init_$Create$_0(size);
  };
  protoOf(ShortArraySerializer_0).cy = function () {
    return ShortArrayBuilder_init_$Create$_1();
  };
  protoOf(ShortArraySerializer_0).v13 = function (decoder, index, builder, checkIndex) {
    builder.y13(decoder.rs(this.vx_1, index));
  };
  protoOf(ShortArraySerializer_0).gw = function (decoder, index, builder, checkIndex) {
    return this.v13(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.v13(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).z13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.wt(this.vx_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).fy = function (encoder, content, size) {
    return this.z13(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UShortArraySerializer_0).c14 = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).rv = function (_this__u8e3s4) {
    return this.c14(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.kp_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).d14 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _UShortArray___get_size__impl__jqto1b(_this__u8e3s4))
      return UShortArrayBuilder_init_$Create$(_this__u8e3s4);
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0 = _UShortArray___init__impl__9b26ef(copyOf_5(_UShortArray___get_storage__impl__t2jpv5(_this__u8e3s4), expectedSize));
    return new UShortArrayBuilder(tmp$ret$0, _UShortArray___get_size__impl__jqto1b(_this__u8e3s4));
  };
  protoOf(UShortArraySerializer_0).aw = function (_this__u8e3s4, expectedSize) {
    return this.d14(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.kp_1 : THROW_CCE(), expectedSize);
  };
  protoOf(UShortArraySerializer_0).dy = function (size) {
    return UShortArrayBuilder_init_$Create$_0(size);
  };
  protoOf(UShortArraySerializer_0).cy = function () {
    return UShortArrayBuilder_init_$Create$_1();
  };
  protoOf(UShortArraySerializer_0).e14 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.ys(this.vx_1, index).cs();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.h14(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).gw = function (decoder, index, builder, checkIndex) {
    return this.e14(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.e14(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).i14 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.du(this.vx_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.lt(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).fy = function (encoder, content, size) {
    return this.i14(encoder, content instanceof UShortArray ? content.kp_1 : THROW_CCE(), size);
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
  protoOf(UByteArraySerializer_0).l14 = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).rv = function (_this__u8e3s4) {
    return this.l14(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.go_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).m14 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4))
      return UByteArrayBuilder_init_$Create$(_this__u8e3s4);
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0 = _UByteArray___init__impl__ip4y9n(copyOf(_UByteArray___get_storage__impl__d4kctt(_this__u8e3s4), expectedSize));
    return new UByteArrayBuilder(tmp$ret$0, _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4));
  };
  protoOf(UByteArraySerializer_0).aw = function (_this__u8e3s4, expectedSize) {
    return this.m14(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.go_1 : THROW_CCE(), expectedSize);
  };
  protoOf(UByteArraySerializer_0).dy = function (size) {
    return UByteArrayBuilder_init_$Create$_0(size);
  };
  protoOf(UByteArraySerializer_0).cy = function () {
    return UByteArrayBuilder_init_$Create$_1();
  };
  protoOf(UByteArraySerializer_0).n14 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.ys(this.vx_1, index).bs();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.q14(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).gw = function (decoder, index, builder, checkIndex) {
    return this.n14(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.n14(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).r14 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.du(this.vx_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.kt(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).fy = function (encoder, content, size) {
    return this.r14(encoder, content instanceof UByteArray ? content.go_1 : THROW_CCE(), size);
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
  protoOf(BooleanArraySerializer_0).u14 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).rv = function (_this__u8e3s4) {
    return this.u14((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).v14 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return BooleanArrayBuilder_init_$Create$(_this__u8e3s4);
    return new BooleanArrayBuilder(copyOf_6(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(BooleanArraySerializer_0).aw = function (_this__u8e3s4, expectedSize) {
    return this.v14((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(BooleanArraySerializer_0).dy = function (size) {
    return BooleanArrayBuilder_init_$Create$_0(size);
  };
  protoOf(BooleanArraySerializer_0).cy = function () {
    return BooleanArrayBuilder_init_$Create$_1();
  };
  protoOf(BooleanArraySerializer_0).w14 = function (decoder, index, builder, checkIndex) {
    builder.z14(decoder.ps(this.vx_1, index));
  };
  protoOf(BooleanArraySerializer_0).gw = function (decoder, index, builder, checkIndex) {
    return this.w14(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.w14(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).a15 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ut(this.vx_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).fy = function (encoder, content, size) {
    return this.a15(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder_init_$Init$(bufferWithData, $this) {
    CharArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function CharArrayBuilder_init_$Create$(bufferWithData) {
    return CharArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(CharArrayBuilder)));
  }
  function CharArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    CharArrayBuilder.call($this, charArray(initialCapacity), 0);
    return $this;
  }
  function CharArrayBuilder_init_$Create$_0(initialCapacity) {
    return CharArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(CharArrayBuilder)));
  }
  function CharArrayBuilder_init_$Init$_1($this) {
    CharArrayBuilder.call($this, charArray(10), 0);
    return $this;
  }
  function CharArrayBuilder_init_$Create$_1() {
    return CharArrayBuilder_init_$Init$_1(objectCreate(protoOf(CharArrayBuilder)));
  }
  function CharArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.l11_1 = bufferWithData;
    this.m11_1 = initialPosition;
  }
  protoOf(CharArrayBuilder).xx = function () {
    return this.m11_1;
  };
  protoOf(CharArrayBuilder).hy = function (requiredCapacity) {
    if (this.l11_1.length < requiredCapacity)
      this.l11_1 = copyOf_0(this.l11_1, coerceAtLeast(requiredCapacity, imul(this.l11_1.length, 2)));
  };
  protoOf(CharArrayBuilder).n11 = function (c) {
    this.iy();
    var tmp = this.l11_1;
    var _unary__edvuaz = this.m11_1;
    this.m11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).zx = function () {
    return copyOf_0(this.l11_1, this.m11_1);
  };
  function DoubleArrayBuilder_init_$Init$(bufferWithData, $this) {
    DoubleArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function DoubleArrayBuilder_init_$Create$(bufferWithData) {
    return DoubleArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(DoubleArrayBuilder)));
  }
  function DoubleArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    DoubleArrayBuilder.call($this, new Float64Array(initialCapacity), 0);
    return $this;
  }
  function DoubleArrayBuilder_init_$Create$_0(initialCapacity) {
    return DoubleArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(DoubleArrayBuilder)));
  }
  function DoubleArrayBuilder_init_$Init$_1($this) {
    DoubleArrayBuilder.call($this, new Float64Array(10), 0);
    return $this;
  }
  function DoubleArrayBuilder_init_$Create$_1() {
    return DoubleArrayBuilder_init_$Init$_1(objectCreate(protoOf(DoubleArrayBuilder)));
  }
  function DoubleArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.u11_1 = bufferWithData;
    this.v11_1 = initialPosition;
  }
  protoOf(DoubleArrayBuilder).xx = function () {
    return this.v11_1;
  };
  protoOf(DoubleArrayBuilder).hy = function (requiredCapacity) {
    if (this.u11_1.length < requiredCapacity)
      this.u11_1 = copyOf_1(this.u11_1, coerceAtLeast(requiredCapacity, imul(this.u11_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).w11 = function (c) {
    this.iy();
    var tmp = this.u11_1;
    var _unary__edvuaz = this.v11_1;
    this.v11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).zx = function () {
    return copyOf_1(this.u11_1, this.v11_1);
  };
  function FloatArrayBuilder_init_$Init$(bufferWithData, $this) {
    FloatArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function FloatArrayBuilder_init_$Create$(bufferWithData) {
    return FloatArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(FloatArrayBuilder)));
  }
  function FloatArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    FloatArrayBuilder.call($this, new Float32Array(initialCapacity), 0);
    return $this;
  }
  function FloatArrayBuilder_init_$Create$_0(initialCapacity) {
    return FloatArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(FloatArrayBuilder)));
  }
  function FloatArrayBuilder_init_$Init$_1($this) {
    FloatArrayBuilder.call($this, new Float32Array(10), 0);
    return $this;
  }
  function FloatArrayBuilder_init_$Create$_1() {
    return FloatArrayBuilder_init_$Init$_1(objectCreate(protoOf(FloatArrayBuilder)));
  }
  function FloatArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.d12_1 = bufferWithData;
    this.e12_1 = initialPosition;
  }
  protoOf(FloatArrayBuilder).xx = function () {
    return this.e12_1;
  };
  protoOf(FloatArrayBuilder).hy = function (requiredCapacity) {
    if (this.d12_1.length < requiredCapacity)
      this.d12_1 = copyOf_2(this.d12_1, coerceAtLeast(requiredCapacity, imul(this.d12_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).f12 = function (c) {
    this.iy();
    var tmp = this.d12_1;
    var _unary__edvuaz = this.e12_1;
    this.e12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).zx = function () {
    return copyOf_2(this.d12_1, this.e12_1);
  };
  function LongArrayBuilder_init_$Init$(bufferWithData, $this) {
    LongArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function LongArrayBuilder_init_$Create$(bufferWithData) {
    return LongArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(LongArrayBuilder)));
  }
  function LongArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    LongArrayBuilder.call($this, longArray(initialCapacity), 0);
    return $this;
  }
  function LongArrayBuilder_init_$Create$_0(initialCapacity) {
    return LongArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(LongArrayBuilder)));
  }
  function LongArrayBuilder_init_$Init$_1($this) {
    LongArrayBuilder.call($this, longArray(10), 0);
    return $this;
  }
  function LongArrayBuilder_init_$Create$_1() {
    return LongArrayBuilder_init_$Init$_1(objectCreate(protoOf(LongArrayBuilder)));
  }
  function LongArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.m12_1 = bufferWithData;
    this.n12_1 = initialPosition;
  }
  protoOf(LongArrayBuilder).xx = function () {
    return this.n12_1;
  };
  protoOf(LongArrayBuilder).hy = function (requiredCapacity) {
    if (this.m12_1.length < requiredCapacity)
      this.m12_1 = copyOf_3(this.m12_1, coerceAtLeast(requiredCapacity, imul(this.m12_1.length, 2)));
  };
  protoOf(LongArrayBuilder).o12 = function (c) {
    this.iy();
    var tmp = this.m12_1;
    var _unary__edvuaz = this.n12_1;
    this.n12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).zx = function () {
    return copyOf_3(this.m12_1, this.n12_1);
  };
  function ULongArrayBuilder_init_$Init$(bufferWithData, $this) {
    ULongArrayBuilder.call($this, bufferWithData, _ULongArray___get_size__impl__ju6dtr(bufferWithData));
    return $this;
  }
  function ULongArrayBuilder_init_$Create$(bufferWithData) {
    return ULongArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(ULongArrayBuilder)));
  }
  function ULongArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    ULongArrayBuilder.call($this, _ULongArray___init__impl__twm1l3_0(initialCapacity), 0);
    return $this;
  }
  function ULongArrayBuilder_init_$Create$_0(initialCapacity) {
    return ULongArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(ULongArrayBuilder)));
  }
  function ULongArrayBuilder_init_$Init$_1($this) {
    ULongArrayBuilder.call($this, _ULongArray___init__impl__twm1l3_0(10), 0);
    return $this;
  }
  function ULongArrayBuilder_init_$Create$_1() {
    return ULongArrayBuilder_init_$Init$_1(objectCreate(protoOf(ULongArrayBuilder)));
  }
  function ULongArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.v12_1 = bufferWithData;
    this.w12_1 = initialPosition;
  }
  protoOf(ULongArrayBuilder).xx = function () {
    return this.w12_1;
  };
  protoOf(ULongArrayBuilder).hy = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.v12_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.v12_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.v12_1), 2));
      tmp.v12_1 = _ULongArray___init__impl__twm1l3(copyOf_3(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).x12 = function (c) {
    this.iy();
    var tmp = this.v12_1;
    var _unary__edvuaz = this.w12_1;
    this.w12_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).b15 = function () {
    var tmp0 = this.v12_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.w12_1;
    return _ULongArray___init__impl__twm1l3(copyOf_3(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).zx = function () {
    return new ULongArray(this.b15());
  };
  function IntArrayBuilder_init_$Init$(bufferWithData, $this) {
    IntArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function IntArrayBuilder_init_$Create$(bufferWithData) {
    return IntArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(IntArrayBuilder)));
  }
  function IntArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    IntArrayBuilder.call($this, new Int32Array(initialCapacity), 0);
    return $this;
  }
  function IntArrayBuilder_init_$Create$_0(initialCapacity) {
    return IntArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(IntArrayBuilder)));
  }
  function IntArrayBuilder_init_$Init$_1($this) {
    IntArrayBuilder.call($this, new Int32Array(10), 0);
    return $this;
  }
  function IntArrayBuilder_init_$Create$_1() {
    return IntArrayBuilder_init_$Init$_1(objectCreate(protoOf(IntArrayBuilder)));
  }
  function IntArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.e13_1 = bufferWithData;
    this.f13_1 = initialPosition;
  }
  protoOf(IntArrayBuilder).xx = function () {
    return this.f13_1;
  };
  protoOf(IntArrayBuilder).hy = function (requiredCapacity) {
    if (this.e13_1.length < requiredCapacity)
      this.e13_1 = copyOf_4(this.e13_1, coerceAtLeast(requiredCapacity, imul(this.e13_1.length, 2)));
  };
  protoOf(IntArrayBuilder).g13 = function (c) {
    this.iy();
    var tmp = this.e13_1;
    var _unary__edvuaz = this.f13_1;
    this.f13_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).zx = function () {
    return copyOf_4(this.e13_1, this.f13_1);
  };
  function UIntArrayBuilder_init_$Init$(bufferWithData, $this) {
    UIntArrayBuilder.call($this, bufferWithData, _UIntArray___get_size__impl__r6l8ci(bufferWithData));
    return $this;
  }
  function UIntArrayBuilder_init_$Create$(bufferWithData) {
    return UIntArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(UIntArrayBuilder)));
  }
  function UIntArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    UIntArrayBuilder.call($this, _UIntArray___init__impl__ghjpc6_0(initialCapacity), 0);
    return $this;
  }
  function UIntArrayBuilder_init_$Create$_0(initialCapacity) {
    return UIntArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(UIntArrayBuilder)));
  }
  function UIntArrayBuilder_init_$Init$_1($this) {
    UIntArrayBuilder.call($this, _UIntArray___init__impl__ghjpc6_0(10), 0);
    return $this;
  }
  function UIntArrayBuilder_init_$Create$_1() {
    return UIntArrayBuilder_init_$Init$_1(objectCreate(protoOf(UIntArrayBuilder)));
  }
  function UIntArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.n13_1 = bufferWithData;
    this.o13_1 = initialPosition;
  }
  protoOf(UIntArrayBuilder).xx = function () {
    return this.o13_1;
  };
  protoOf(UIntArrayBuilder).hy = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.n13_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.n13_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.n13_1), 2));
      tmp.n13_1 = _UIntArray___init__impl__ghjpc6(copyOf_4(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).p13 = function (c) {
    this.iy();
    var tmp = this.n13_1;
    var _unary__edvuaz = this.o13_1;
    this.o13_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).c15 = function () {
    var tmp0 = this.n13_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.o13_1;
    return _UIntArray___init__impl__ghjpc6(copyOf_4(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).zx = function () {
    return new UIntArray(this.c15());
  };
  function ShortArrayBuilder_init_$Init$(bufferWithData, $this) {
    ShortArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function ShortArrayBuilder_init_$Create$(bufferWithData) {
    return ShortArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(ShortArrayBuilder)));
  }
  function ShortArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    ShortArrayBuilder.call($this, new Int16Array(initialCapacity), 0);
    return $this;
  }
  function ShortArrayBuilder_init_$Create$_0(initialCapacity) {
    return ShortArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(ShortArrayBuilder)));
  }
  function ShortArrayBuilder_init_$Init$_1($this) {
    ShortArrayBuilder.call($this, new Int16Array(10), 0);
    return $this;
  }
  function ShortArrayBuilder_init_$Create$_1() {
    return ShortArrayBuilder_init_$Init$_1(objectCreate(protoOf(ShortArrayBuilder)));
  }
  function ShortArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.w13_1 = bufferWithData;
    this.x13_1 = initialPosition;
  }
  protoOf(ShortArrayBuilder).xx = function () {
    return this.x13_1;
  };
  protoOf(ShortArrayBuilder).hy = function (requiredCapacity) {
    if (this.w13_1.length < requiredCapacity)
      this.w13_1 = copyOf_5(this.w13_1, coerceAtLeast(requiredCapacity, imul(this.w13_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).y13 = function (c) {
    this.iy();
    var tmp = this.w13_1;
    var _unary__edvuaz = this.x13_1;
    this.x13_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).zx = function () {
    return copyOf_5(this.w13_1, this.x13_1);
  };
  function UShortArrayBuilder_init_$Init$(bufferWithData, $this) {
    UShortArrayBuilder.call($this, bufferWithData, _UShortArray___get_size__impl__jqto1b(bufferWithData));
    return $this;
  }
  function UShortArrayBuilder_init_$Create$(bufferWithData) {
    return UShortArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(UShortArrayBuilder)));
  }
  function UShortArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    UShortArrayBuilder.call($this, _UShortArray___init__impl__9b26ef_0(initialCapacity), 0);
    return $this;
  }
  function UShortArrayBuilder_init_$Create$_0(initialCapacity) {
    return UShortArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(UShortArrayBuilder)));
  }
  function UShortArrayBuilder_init_$Init$_1($this) {
    UShortArrayBuilder.call($this, _UShortArray___init__impl__9b26ef_0(10), 0);
    return $this;
  }
  function UShortArrayBuilder_init_$Create$_1() {
    return UShortArrayBuilder_init_$Init$_1(objectCreate(protoOf(UShortArrayBuilder)));
  }
  function UShortArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.f14_1 = bufferWithData;
    this.g14_1 = initialPosition;
  }
  protoOf(UShortArrayBuilder).xx = function () {
    return this.g14_1;
  };
  protoOf(UShortArrayBuilder).hy = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.f14_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.f14_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.f14_1), 2));
      tmp.f14_1 = _UShortArray___init__impl__9b26ef(copyOf_5(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).h14 = function (c) {
    this.iy();
    var tmp = this.f14_1;
    var _unary__edvuaz = this.g14_1;
    this.g14_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).d15 = function () {
    var tmp0 = this.f14_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.g14_1;
    return _UShortArray___init__impl__9b26ef(copyOf_5(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).zx = function () {
    return new UShortArray(this.d15());
  };
  function UByteArrayBuilder_init_$Init$(bufferWithData, $this) {
    UByteArrayBuilder.call($this, bufferWithData, _UByteArray___get_size__impl__h6pkdv(bufferWithData));
    return $this;
  }
  function UByteArrayBuilder_init_$Create$(bufferWithData) {
    return UByteArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(UByteArrayBuilder)));
  }
  function UByteArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    UByteArrayBuilder.call($this, _UByteArray___init__impl__ip4y9n_0(initialCapacity), 0);
    return $this;
  }
  function UByteArrayBuilder_init_$Create$_0(initialCapacity) {
    return UByteArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(UByteArrayBuilder)));
  }
  function UByteArrayBuilder_init_$Init$_1($this) {
    UByteArrayBuilder.call($this, _UByteArray___init__impl__ip4y9n_0(10), 0);
    return $this;
  }
  function UByteArrayBuilder_init_$Create$_1() {
    return UByteArrayBuilder_init_$Init$_1(objectCreate(protoOf(UByteArrayBuilder)));
  }
  function UByteArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.o14_1 = bufferWithData;
    this.p14_1 = initialPosition;
  }
  protoOf(UByteArrayBuilder).xx = function () {
    return this.p14_1;
  };
  protoOf(UByteArrayBuilder).hy = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.o14_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.o14_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.o14_1), 2));
      tmp.o14_1 = _UByteArray___init__impl__ip4y9n(copyOf(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).q14 = function (c) {
    this.iy();
    var tmp = this.o14_1;
    var _unary__edvuaz = this.p14_1;
    this.p14_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).e15 = function () {
    var tmp0 = this.o14_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.p14_1;
    return _UByteArray___init__impl__ip4y9n(copyOf(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).zx = function () {
    return new UByteArray(this.e15());
  };
  function BooleanArrayBuilder_init_$Init$(bufferWithData, $this) {
    BooleanArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function BooleanArrayBuilder_init_$Create$(bufferWithData) {
    return BooleanArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(BooleanArrayBuilder)));
  }
  function BooleanArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    BooleanArrayBuilder.call($this, booleanArray(initialCapacity), 0);
    return $this;
  }
  function BooleanArrayBuilder_init_$Create$_0(initialCapacity) {
    return BooleanArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(BooleanArrayBuilder)));
  }
  function BooleanArrayBuilder_init_$Init$_1($this) {
    BooleanArrayBuilder.call($this, booleanArray(10), 0);
    return $this;
  }
  function BooleanArrayBuilder_init_$Create$_1() {
    return BooleanArrayBuilder_init_$Init$_1(objectCreate(protoOf(BooleanArrayBuilder)));
  }
  function BooleanArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.x14_1 = bufferWithData;
    this.y14_1 = initialPosition;
  }
  protoOf(BooleanArrayBuilder).xx = function () {
    return this.y14_1;
  };
  protoOf(BooleanArrayBuilder).hy = function (requiredCapacity) {
    if (this.x14_1.length < requiredCapacity)
      this.x14_1 = copyOf_6(this.x14_1, coerceAtLeast(requiredCapacity, imul(this.x14_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).z14 = function (c) {
    this.iy();
    var tmp = this.x14_1;
    var _unary__edvuaz = this.y14_1;
    this.y14_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).zx = function () {
    return copyOf_6(this.x14_1, this.y14_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.f15_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).lp = function () {
    return this.f15_1;
  };
  protoOf(StringSerializer).g15 = function (encoder, value) {
    return encoder.rt(value);
  };
  protoOf(StringSerializer).mp = function (encoder, value) {
    return this.g15(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).np = function (decoder) {
    return decoder.is();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.h15_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).lp = function () {
    return this.h15_1;
  };
  protoOf(BooleanSerializer).i15 = function (encoder, value) {
    return encoder.jt(value);
  };
  protoOf(BooleanSerializer).mp = function (encoder, value) {
    return this.i15(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).np = function (decoder) {
    return decoder.as();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.j15_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).lp = function () {
    return this.j15_1;
  };
  protoOf(IntSerializer).k15 = function (encoder, value) {
    return encoder.mt(value);
  };
  protoOf(IntSerializer).mp = function (encoder, value) {
    return this.k15(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).np = function (decoder) {
    return decoder.ds();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.l15_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).lp = function () {
    return this.l15_1;
  };
  protoOf(FloatSerializer).m15 = function (encoder, value) {
    return encoder.ot(value);
  };
  protoOf(FloatSerializer).mp = function (encoder, value) {
    return this.m15(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).np = function (decoder) {
    return decoder.fs();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.n15_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).lp = function () {
    return this.n15_1;
  };
  protoOf(DoubleSerializer).o15 = function (encoder, value) {
    return encoder.pt(value);
  };
  protoOf(DoubleSerializer).mp = function (encoder, value) {
    return this.o15(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).np = function (decoder) {
    return decoder.gs();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.p15_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).lp = function () {
    return this.p15_1;
  };
  protoOf(LongSerializer).q15 = function (encoder, value) {
    return encoder.nt(value);
  };
  protoOf(LongSerializer).mp = function (encoder, value) {
    return this.q15(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).np = function (decoder) {
    return decoder.es();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().t2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.r15_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.r15_1 = serialName;
    this.s15_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).tq = function () {
    return this.r15_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).uq = function () {
    return this.s15_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).wq = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).yq = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).zq = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).cr = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).br = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).ar = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.r15_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.r15_1 === other.r15_1 && equals(this.s15_1, other.s15_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.r15_1) + imul(31, this.s15_1.hashCode()) | 0;
  };
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().v2();
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var primitive = _iterator__ex2g4s.v();
      var primitiveName = primitive.lp().tq();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).o() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.t15_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).lp = function () {
    return this.t15_1;
  };
  protoOf(ByteSerializer).u15 = function (encoder, value) {
    return encoder.kt(value);
  };
  protoOf(ByteSerializer).mp = function (encoder, value) {
    return this.u15(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).np = function (decoder) {
    return decoder.bs();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.v15_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).lp = function () {
    return this.v15_1;
  };
  protoOf(ShortSerializer).w15 = function (encoder, value) {
    return encoder.lt(value);
  };
  protoOf(ShortSerializer).mp = function (encoder, value) {
    return this.w15(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).np = function (decoder) {
    return decoder.cs();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.x15_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).lp = function () {
    return this.x15_1;
  };
  protoOf(CharSerializer).y15 = function (encoder, value) {
    return encoder.qt(value);
  };
  protoOf(CharSerializer).mp = function (encoder, value) {
    return this.y15(encoder, value instanceof Char ? value.x1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).z15 = function (decoder) {
    return decoder.hs();
  };
  protoOf(CharSerializer).np = function (decoder) {
    return new Char(this.z15(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.a16_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).lp = function () {
    return this.a16_1.lp();
  };
  protoOf(UnitSerializer).b16 = function (encoder, value) {
    this.a16_1.bq(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).mp = function (encoder, value) {
    return this.b16(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).c16 = function (decoder) {
    this.a16_1.np(decoder);
  };
  protoOf(UnitSerializer).np = function (decoder) {
    this.c16(decoder);
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
  protoOf(NamedValueDecoder).f16 = function (_this__u8e3s4, index) {
    return this.h16(this.g16(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).h16 = function (nestedName) {
    var tmp0_elvis_lhs = this.k16();
    return this.l16(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).g16 = function (descriptor, index) {
    return descriptor.yq(index);
  };
  protoOf(NamedValueDecoder).l16 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).m16 = function () {
    return this.i16_1.r() ? '$' : joinToString(this.i16_1, '.', '$.');
  };
  function NamedValueEncoder() {
    TaggedEncoder.call(this);
  }
  protoOf(NamedValueEncoder).f16 = function (_this__u8e3s4, index) {
    return this.h16(this.g16(_this__u8e3s4, index));
  };
  protoOf(NamedValueEncoder).h16 = function (nestedName) {
    var tmp0_elvis_lhs = this.k16();
    return this.l16(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueEncoder).g16 = function (descriptor, index) {
    return descriptor.yq(index);
  };
  protoOf(NamedValueEncoder).l16 = function (parentName, childName) {
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
    $this.a17(tag);
    var r = block();
    if (!$this.j16_1) {
      $this.b17();
    }
    $this.j16_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.ls($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.lp().mq();
      var tmp;
      if (isNullabilitySupported || tmp0.yr()) {
        tmp = this$0.ls($deserializer, $previousValue);
      } else {
        tmp = tmp0.zr();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.i16_1 = ArrayList_init_$Create$_0();
    this.j16_1 = false;
  }
  protoOf(TaggedDecoder).ct = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).n16 = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).o16 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).p16 = function (tag) {
    var tmp = this.n16(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).q16 = function (tag) {
    var tmp = this.n16(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).r16 = function (tag) {
    var tmp = this.n16(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).s16 = function (tag) {
    var tmp = this.n16(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).t16 = function (tag) {
    var tmp = this.n16(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).u16 = function (tag) {
    var tmp = this.n16(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).v16 = function (tag) {
    var tmp = this.n16(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).w16 = function (tag) {
    var tmp = this.n16(tag);
    return tmp instanceof Char ? tmp.x1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).x16 = function (tag) {
    var tmp = this.n16(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).y16 = function (tag, enumDescriptor) {
    var tmp = this.n16(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).z16 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.a17(tag);
    return this;
  };
  protoOf(TaggedDecoder).ls = function (deserializer, previousValue) {
    return this.ms(deserializer);
  };
  protoOf(TaggedDecoder).ks = function (descriptor) {
    return this.z16(this.b17(), descriptor);
  };
  protoOf(TaggedDecoder).yr = function () {
    var tmp0_elvis_lhs = this.k16();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.o16(currentTag);
  };
  protoOf(TaggedDecoder).zr = function () {
    return null;
  };
  protoOf(TaggedDecoder).as = function () {
    return this.p16(this.b17());
  };
  protoOf(TaggedDecoder).bs = function () {
    return this.q16(this.b17());
  };
  protoOf(TaggedDecoder).cs = function () {
    return this.r16(this.b17());
  };
  protoOf(TaggedDecoder).ds = function () {
    return this.s16(this.b17());
  };
  protoOf(TaggedDecoder).es = function () {
    return this.t16(this.b17());
  };
  protoOf(TaggedDecoder).fs = function () {
    return this.u16(this.b17());
  };
  protoOf(TaggedDecoder).gs = function () {
    return this.v16(this.b17());
  };
  protoOf(TaggedDecoder).hs = function () {
    return this.w16(this.b17());
  };
  protoOf(TaggedDecoder).is = function () {
    return this.x16(this.b17());
  };
  protoOf(TaggedDecoder).js = function (enumDescriptor) {
    return this.y16(this.b17(), enumDescriptor);
  };
  protoOf(TaggedDecoder).ns = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).os = function (descriptor) {
  };
  protoOf(TaggedDecoder).ps = function (descriptor, index) {
    return this.p16(this.f16(descriptor, index));
  };
  protoOf(TaggedDecoder).qs = function (descriptor, index) {
    return this.q16(this.f16(descriptor, index));
  };
  protoOf(TaggedDecoder).rs = function (descriptor, index) {
    return this.r16(this.f16(descriptor, index));
  };
  protoOf(TaggedDecoder).ss = function (descriptor, index) {
    return this.s16(this.f16(descriptor, index));
  };
  protoOf(TaggedDecoder).ts = function (descriptor, index) {
    return this.t16(this.f16(descriptor, index));
  };
  protoOf(TaggedDecoder).us = function (descriptor, index) {
    return this.u16(this.f16(descriptor, index));
  };
  protoOf(TaggedDecoder).vs = function (descriptor, index) {
    return this.v16(this.f16(descriptor, index));
  };
  protoOf(TaggedDecoder).ws = function (descriptor, index) {
    return this.w16(this.f16(descriptor, index));
  };
  protoOf(TaggedDecoder).xs = function (descriptor, index) {
    return this.x16(this.f16(descriptor, index));
  };
  protoOf(TaggedDecoder).ys = function (descriptor, index) {
    return this.z16(this.f16(descriptor, index), descriptor.br(index));
  };
  protoOf(TaggedDecoder).zs = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.f16(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).bt = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.f16(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).k16 = function () {
    return lastOrNull(this.i16_1);
  };
  protoOf(TaggedDecoder).a17 = function (name) {
    this.i16_1.c1(name);
  };
  protoOf(TaggedDecoder).b17 = function () {
    var r = this.i16_1.z2(get_lastIndex_0(this.i16_1));
    this.j16_1 = true;
    return r;
  };
  function encodeElement($this, desc, index) {
    var tag = $this.f16(desc, index);
    $this.a17(tag);
    return true;
  }
  function TaggedEncoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.d17_1 = ArrayList_init_$Create$_0();
  }
  protoOf(TaggedEncoder).ct = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedEncoder).e17 = function (tag, value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(TaggedEncoder).f17 = function (tag) {
  };
  protoOf(TaggedEncoder).g17 = function (tag) {
    throw SerializationException_init_$Create$_0('null is not supported');
  };
  protoOf(TaggedEncoder).h17 = function (tag, value) {
    return this.e17(tag, value);
  };
  protoOf(TaggedEncoder).i17 = function (tag, value) {
    return this.e17(tag, value);
  };
  protoOf(TaggedEncoder).j17 = function (tag, value) {
    return this.e17(tag, value);
  };
  protoOf(TaggedEncoder).k17 = function (tag, value) {
    return this.e17(tag, value);
  };
  protoOf(TaggedEncoder).l17 = function (tag, value) {
    return this.e17(tag, value);
  };
  protoOf(TaggedEncoder).m17 = function (tag, value) {
    return this.e17(tag, value);
  };
  protoOf(TaggedEncoder).n17 = function (tag, value) {
    return this.e17(tag, value);
  };
  protoOf(TaggedEncoder).o17 = function (tag, value) {
    return this.e17(tag, new Char(value));
  };
  protoOf(TaggedEncoder).p17 = function (tag, value) {
    return this.e17(tag, value);
  };
  protoOf(TaggedEncoder).q17 = function (tag, enumDescriptor, ordinal) {
    return this.e17(tag, ordinal);
  };
  protoOf(TaggedEncoder).r17 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.a17(tag);
    return this;
  };
  protoOf(TaggedEncoder).tt = function (descriptor) {
    return this.r17(this.b17(), descriptor);
  };
  protoOf(TaggedEncoder).iu = function () {
    return this.f17(this.t17());
  };
  protoOf(TaggedEncoder).it = function () {
    return this.g17(this.b17());
  };
  protoOf(TaggedEncoder).jt = function (value) {
    return this.n17(this.b17(), value);
  };
  protoOf(TaggedEncoder).kt = function (value) {
    return this.i17(this.b17(), value);
  };
  protoOf(TaggedEncoder).lt = function (value) {
    return this.j17(this.b17(), value);
  };
  protoOf(TaggedEncoder).mt = function (value) {
    return this.h17(this.b17(), value);
  };
  protoOf(TaggedEncoder).nt = function (value) {
    return this.k17(this.b17(), value);
  };
  protoOf(TaggedEncoder).ot = function (value) {
    return this.l17(this.b17(), value);
  };
  protoOf(TaggedEncoder).pt = function (value) {
    return this.m17(this.b17(), value);
  };
  protoOf(TaggedEncoder).qt = function (value) {
    return this.o17(this.b17(), value);
  };
  protoOf(TaggedEncoder).rt = function (value) {
    return this.p17(this.b17(), value);
  };
  protoOf(TaggedEncoder).st = function (enumDescriptor, index) {
    return this.q17(this.b17(), enumDescriptor, index);
  };
  protoOf(TaggedEncoder).ns = function (descriptor) {
    return this;
  };
  protoOf(TaggedEncoder).os = function (descriptor) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.d17_1.r()) {
      this.b17();
    }
    this.s17(descriptor);
  };
  protoOf(TaggedEncoder).s17 = function (descriptor) {
  };
  protoOf(TaggedEncoder).ut = function (descriptor, index, value) {
    return this.n17(this.f16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).vt = function (descriptor, index, value) {
    return this.i17(this.f16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).wt = function (descriptor, index, value) {
    return this.j17(this.f16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).xt = function (descriptor, index, value) {
    return this.h17(this.f16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).yt = function (descriptor, index, value) {
    return this.k17(this.f16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).zt = function (descriptor, index, value) {
    return this.l17(this.f16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).au = function (descriptor, index, value) {
    return this.m17(this.f16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).bu = function (descriptor, index, value) {
    return this.o17(this.f16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).cu = function (descriptor, index, value) {
    return this.p17(this.f16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).du = function (descriptor, index) {
    return this.r17(this.f16(descriptor, index), descriptor.br(index));
  };
  protoOf(TaggedEncoder).eu = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.fu(serializer, value);
    }
  };
  protoOf(TaggedEncoder).gu = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.hu(serializer, value);
    }
  };
  protoOf(TaggedEncoder).t17 = function () {
    return last(this.d17_1);
  };
  protoOf(TaggedEncoder).k16 = function () {
    return lastOrNull(this.d17_1);
  };
  protoOf(TaggedEncoder).a17 = function (name) {
    this.d17_1.c1(name);
  };
  protoOf(TaggedEncoder).b17 = function () {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.d17_1.r()) {
      tmp = this.d17_1.z2(get_lastIndex_0(this.d17_1));
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
    this.u17_1 = key;
    this.v17_1 = value;
  }
  protoOf(MapEntry).m1 = function () {
    return this.u17_1;
  };
  protoOf(MapEntry).n1 = function () {
    return this.v17_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.u17_1) + ', value=' + toString_0(this.v17_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.u17_1 == null ? 0 : hashCode(this.u17_1);
    result = imul(result, 31) + (this.v17_1 == null ? 0 : hashCode(this.v17_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    if (!equals(this.u17_1, other.u17_1))
      return false;
    if (!equals(this.v17_1, other.v17_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.wp('key', $keySerializer.lp());
      $this$buildSerialDescriptor.wp('value', $valueSerializer.lp());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.y17_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).lp = function () {
    return this.y17_1;
  };
  protoOf(MapEntrySerializer_0).z17 = function (_this__u8e3s4) {
    return _this__u8e3s4.m1();
  };
  protoOf(MapEntrySerializer_0).a18 = function (_this__u8e3s4) {
    return this.z17((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).b18 = function (_this__u8e3s4) {
    return _this__u8e3s4.n1();
  };
  protoOf(MapEntrySerializer_0).c18 = function (_this__u8e3s4) {
    return this.b18((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).d18 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.wp('first', $keySerializer.lp());
      $this$buildClassSerialDescriptor.wp('second', $valueSerializer.lp());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.j18_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).lp = function () {
    return this.j18_1;
  };
  protoOf(PairSerializer_0).k18 = function (_this__u8e3s4) {
    return _this__u8e3s4.yf_1;
  };
  protoOf(PairSerializer_0).a18 = function (_this__u8e3s4) {
    return this.k18(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).l18 = function (_this__u8e3s4) {
    return _this__u8e3s4.zf_1;
  };
  protoOf(PairSerializer_0).c18 = function (_this__u8e3s4) {
    return this.l18(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).d18 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.at($this.p18_1, 0, $this.m18_1);
    var b = composite.at($this.p18_1, 1, $this.n18_1);
    var c = composite.at($this.p18_1, 2, $this.o18_1);
    composite.os($this.p18_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.et($this.p18_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.at($this.p18_1, 0, $this.m18_1);
          break;
        case 1:
          b = composite.at($this.p18_1, 1, $this.n18_1);
          break;
        case 2:
          c = composite.at($this.p18_1, 2, $this.o18_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.os($this.p18_1);
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
      $this$buildClassSerialDescriptor.wp('first', this$0.m18_1.lp());
      $this$buildClassSerialDescriptor.wp('second', this$0.n18_1.lp());
      $this$buildClassSerialDescriptor.wp('third', this$0.o18_1.lp());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.m18_1 = aSerializer;
    this.n18_1 = bSerializer;
    this.o18_1 = cSerializer;
    var tmp = this;
    tmp.p18_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).lp = function () {
    return this.p18_1;
  };
  protoOf(TripleSerializer_0).q18 = function (encoder, value) {
    var structuredEncoder = encoder.ns(this.p18_1);
    structuredEncoder.eu(this.p18_1, 0, this.m18_1, value.pn_1);
    structuredEncoder.eu(this.p18_1, 1, this.n18_1, value.qn_1);
    structuredEncoder.eu(this.p18_1, 2, this.o18_1, value.rn_1);
    structuredEncoder.os(this.p18_1);
  };
  protoOf(TripleSerializer_0).mp = function (encoder, value) {
    return this.q18(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).np = function (decoder) {
    var composite = decoder.ns(this.p18_1);
    if (composite.dt()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.e18_1 = keySerializer;
    this.f18_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).g18 = function (encoder, value) {
    var structuredEncoder = encoder.ns(this.lp());
    structuredEncoder.eu(this.lp(), 0, this.e18_1, this.a18(value));
    structuredEncoder.eu(this.lp(), 1, this.f18_1, this.c18(value));
    structuredEncoder.os(this.lp());
  };
  protoOf(KeyValueSerializer).mp = function (encoder, value) {
    return this.g18(encoder, value);
  };
  protoOf(KeyValueSerializer).np = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.lp();
    var composite = decoder.ns(descriptor);
    var tmp$ret$1;
    $l$block: {
      if (composite.dt()) {
        var key = composite.at(this.lp(), 0, this.e18_1);
        var value = composite.at(this.lp(), 1, this.f18_1);
        tmp$ret$1 = this.d18(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.et(this.lp());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.at(this.lp(), 0, this.e18_1);
            break;
          case 1:
            value_0 = composite.at(this.lp(), 1, this.f18_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      tmp$ret$1 = this.d18(key_0, value_0);
    }
    var result = tmp$ret$1;
    composite.os(descriptor);
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
    this.r18_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_6(Companion_getInstance_3()));
  }
  protoOf(ULongSerializer).lp = function () {
    return this.r18_1;
  };
  protoOf(ULongSerializer).s18 = function (encoder, value) {
    var tmp = encoder.tt(this.r18_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.nt(tmp$ret$0);
  };
  protoOf(ULongSerializer).mp = function (encoder, value) {
    return this.s18(encoder, value instanceof ULong ? value.vo_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).t18 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.ks(this.r18_1).es();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).np = function (decoder) {
    return new ULong(this.t18(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.u18_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_7(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).lp = function () {
    return this.u18_1;
  };
  protoOf(UIntSerializer).v18 = function (encoder, value) {
    var tmp = encoder.tt(this.u18_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.mt(tmp$ret$0);
  };
  protoOf(UIntSerializer).mp = function (encoder, value) {
    return this.v18(encoder, value instanceof UInt ? value.lo_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).w18 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.ks(this.u18_1).ds();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).np = function (decoder) {
    return new UInt(this.w18(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.x18_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_5(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).lp = function () {
    return this.x18_1;
  };
  protoOf(UByteSerializer).y18 = function (encoder, value) {
    var tmp = encoder.tt(this.x18_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.kt(tmp$ret$0);
  };
  protoOf(UByteSerializer).mp = function (encoder, value) {
    return this.y18(encoder, value instanceof UByte ? value.bo_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).z18 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.ks(this.x18_1).bs();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).np = function (decoder) {
    return new UByte(this.z18(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.a19_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).lp = function () {
    return this.a19_1;
  };
  protoOf(UShortSerializer).b19 = function (encoder, value) {
    var tmp = encoder.tt(this.a19_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.lt(tmp$ret$0);
  };
  protoOf(UShortSerializer).mp = function (encoder, value) {
    return this.b19(encoder, value instanceof UShort ? value.fp_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).c19 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.ks(this.a19_1).cs();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).np = function (decoder) {
    return new UShort(this.c19(decoder));
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
  protoOf(SerializersModule).iq = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.jq(kClass, typeArgumentsSerializers) : $super.jq.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.e19_1 = class2ContextualFactory;
    this.f19_1 = polyBase2Serializers;
    this.g19_1 = polyBase2DefaultSerializerProvider;
    this.h19_1 = polyBase2NamedSerializers;
    this.i19_1 = polyBase2DefaultDeserializerProvider;
    this.j19_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).hq = function () {
    return this.j19_1;
  };
  protoOf(SerialModuleImpl).mu = function (baseClass, value) {
    if (!baseClass.sa(value))
      return null;
    var tmp0_safe_receiver = this.f19_1.t2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.g19_1.t2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).lu = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.h19_1.t2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).t2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.i19_1.t2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).jq = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.e19_1.t2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k19(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).d19 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.e19_1.l1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.n1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.n19_1;
        collector.o19(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.m19(kclass, serial.l19_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.f19_1.l1().t();
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
        collector.p19(tmp_1, tmp_2, tmp$ret$15);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.g19_1.l1().t();
    while (_iterator__ex2g4s_2.u()) {
      var element_2 = _iterator__ex2g4s_2.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.n1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.q19(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.i19_1.l1().t();
    while (_iterator__ex2g4s_3.u()) {
      var element_3 = _iterator__ex2g4s_3.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.n1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.r19(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.n19_1 = serializer;
  }
  protoOf(Argless).k19 = function (typeArgumentsSerializers) {
    return this.n19_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.n19_1, this.n19_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.n19_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.l19_1 = provider;
  }
  protoOf(WithTypeArguments).k19 = function (typeArgumentsSerializers) {
    return this.l19_1(typeArgumentsSerializers);
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
    tmp.s19_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.t19_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.u19_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.v19_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.w19_1 = HashMap_init_$Create$();
    this.x19_1 = false;
  }
  protoOf(SerializersModuleBuilder).o19 = function (kClass, serializer) {
    return this.y19(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).m19 = function (kClass, provider) {
    return this.y19(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).p19 = function (baseClass, actualClass, actualSerializer) {
    this.z19(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).q19 = function (baseClass, defaultSerializerProvider) {
    this.a1a(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).r19 = function (baseClass, defaultDeserializerProvider) {
    this.b1a(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).c1a = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.s19_1.t2(forClass);
      if (!(previous == null) && !equals(previous, provider)) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + toString(forClass) + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.s19_1.a3(forClass, provider);
    if (isInterface_0(forClass))
      this.x19_1 = true;
  };
  protoOf(SerializersModuleBuilder).y19 = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.c1a(forClass, provider, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.c1a.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).a1a = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.u19_1.t2(baseClass);
    if (!(previous == null) && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.u19_1.a3(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).b1a = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.w19_1.t2(baseClass);
    if (!(previous == null) && !equals(previous, defaultDeserializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.w19_1.a3(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).d1a = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.lp().tq();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.t19_1;
    var value = this_0.t2(baseClass);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer = HashMap_init_$Create$();
      this_0.a3(baseClass, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var baseClassSerializers = tmp;
    // Inline function 'kotlin.collections.getOrPut' call
    var this_1 = this.v19_1;
    var value_0 = this_1.t2(baseClass);
    var tmp_0;
    if (value_0 == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer_0 = HashMap_init_$Create$();
      this_1.a3(baseClass, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    var names = tmp_0;
    var previousSerializer = baseClassSerializers.t2(concreteClass);
    if (!(previousSerializer == null) && !equals(previousSerializer, concreteSerializer)) {
      if (allowOverwrite)
        names.b3(previousSerializer.lp().tq());
      else
        throw SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass);
    }
    var previousByName = names.t2(name);
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
        baseClassSerializers.b3(previousClass);
      else
        throw IllegalArgumentException_init_$Create$("Multiple polymorphic serializers in a scope of '" + toString(baseClass) + "' " + ("have the same serial name '" + name + "': " + toString(concreteSerializer) + " for '" + toString(concreteClass) + "' and " + toString(previousByName) + " for '" + toString(previousClass) + "'"));
    }
    // Inline function 'kotlin.collections.set' call
    baseClassSerializers.a3(concreteClass, concreteSerializer);
    // Inline function 'kotlin.collections.set' call
    names.a3(name, concreteSerializer);
  };
  protoOf(SerializersModuleBuilder).z19 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.d1a(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.d1a.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).zx = function () {
    return new SerialModuleImpl(this.s19_1, this.t19_1, this.u19_1, this.v19_1, this.w19_1, this.x19_1);
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
    this.e1a_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.e1a_1.equals(tmp0_other_with_cast.e1a_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.e1a_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.e1a_1) + ')';
  };
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp0_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().mb()) {
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
    return rootClass.equals(PrimitiveClasses_getInstance().ub());
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
          var tmp_1 = assocObject.w10(args.slice());
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
  function estimateCapacityForHashMap(requiredCapacity) {
    return requiredCapacity;
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().vb(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_9(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().yb(), CharArraySerializer()), to(PrimitiveClasses_getInstance().tb(), serializer_10(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().fc(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().sb(), serializer_11(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().ec(), FloatArraySerializer()), to(PrimitiveClasses_getInstance().rb(), serializer_6(Companion_getInstance_3())), to(PrimitiveClasses_getInstance().dc(), LongArraySerializer()), to(getKClass(ULong), serializer_1(Companion_getInstance_4())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().qb(), serializer_7(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().bc(), IntArraySerializer()), to(getKClass(UInt), serializer_2(Companion_getInstance_5())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().pb(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().ac(), ShortArraySerializer()), to(getKClass(UShort), serializer_4(Companion_getInstance_6())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().ob(), serializer_5(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().zb(), ByteArraySerializer()), to(getKClass(UByte), serializer_3(Companion_getInstance_7())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().nb(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().xb(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().mb(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Instant), serializer_15(Companion_getInstance_0())), to(getKClass(Uuid), serializer_16(Companion_getInstance_1()))]);
  }
  function get_isInterfaceHack(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().mb())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function createCache$1($factory) {
    this.f1a_1 = $factory;
  }
  protoOf(createCache$1).kq = function (key) {
    return this.f1a_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.g1a_1 = $factory;
  }
  protoOf(createParametrizedCache$1).lq = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.g1a_1(key, types);
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
  protoOf(SerialDescriptorImpl).mq = get_isNullable;
  protoOf(SerialDescriptorImpl).vq = get_isInline;
  protoOf(AbstractDecoder).at = decodeSerializableElement$default;
  protoOf(AbstractDecoder).ms = decodeSerializableValue;
  protoOf(AbstractDecoder).dt = decodeSequentially;
  protoOf(AbstractDecoder).ft = decodeCollectionSize;
  protoOf(AbstractEncoder).iu = encodeNotNullMark;
  protoOf(AbstractEncoder).ju = beginCollection;
  protoOf(AbstractEncoder).fu = encodeSerializableValue;
  protoOf(AbstractEncoder).hu = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).ku = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).mq = get_isNullable;
  protoOf(ListLikeDescriptor).vq = get_isInline;
  protoOf(ListLikeDescriptor).xq = get_annotations;
  protoOf(MapLikeDescriptor).mq = get_isNullable;
  protoOf(MapLikeDescriptor).vq = get_isInline;
  protoOf(MapLikeDescriptor).xq = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).mq = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).vq = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).m10 = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).mq = get_isNullable;
  protoOf(NothingSerialDescriptor).vq = get_isInline;
  protoOf(NothingSerialDescriptor).xq = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).mq = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).vq = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).xq = get_annotations;
  protoOf(TaggedDecoder).at = decodeSerializableElement$default;
  protoOf(TaggedDecoder).ms = decodeSerializableValue;
  protoOf(TaggedDecoder).dt = decodeSequentially;
  protoOf(TaggedDecoder).ft = decodeCollectionSize;
  protoOf(TaggedEncoder).ju = beginCollection;
  protoOf(TaggedEncoder).fu = encodeSerializableValue;
  protoOf(TaggedEncoder).hu = encodeNullableSerializableValue;
  protoOf(TaggedEncoder).ku = shouldEncodeElementDefault;
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
  _.$_$.p = SerializationException_init_$Create$_0;
  _.$_$.q = SerializationException_init_$Init$_1;
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
  _.$_$.t2 = serializerOrNull;
  _.$_$.u2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
