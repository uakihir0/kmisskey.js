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
  var protoOf = kotlin_kotlin.$_$.yb;
  var initMetadataForInterface = kotlin_kotlin.$_$.cb;
  var VOID = kotlin_kotlin.$_$.c;
  var getKClassFromExpression = kotlin_kotlin.$_$.qc;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.m;
  var Unit_instance = kotlin_kotlin.$_$.z;
  var emptyList = kotlin_kotlin.$_$.o6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.c1;
  var lazy = kotlin_kotlin.$_$.ug;
  var KProperty1 = kotlin_kotlin.$_$.wc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.va;
  var toString = kotlin_kotlin.$_$.bc;
  var initMetadataForClass = kotlin_kotlin.$_$.ya;
  var objectCreate = kotlin_kotlin.$_$.xb;
  var captureStack = kotlin_kotlin.$_$.ja;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.i2;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.k2;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.m2;
  var IllegalArgumentException = kotlin_kotlin.$_$.rf;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.p3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.o3;
  var THROW_CCE = kotlin_kotlin.$_$.yf;
  var isInterface = kotlin_kotlin.$_$.nb;
  var KClass = kotlin_kotlin.$_$.tc;
  var Triple = kotlin_kotlin.$_$.zf;
  var getKClass = kotlin_kotlin.$_$.rc;
  var Pair = kotlin_kotlin.$_$.vf;
  var Entry = kotlin_kotlin.$_$.j5;
  var KtMap = kotlin_kotlin.$_$.l5;
  var KtMutableMap = kotlin_kotlin.$_$.o5;
  var LinkedHashMap = kotlin_kotlin.$_$.g5;
  var HashMap = kotlin_kotlin.$_$.e5;
  var KtSet = kotlin_kotlin.$_$.q5;
  var KtMutableSet = kotlin_kotlin.$_$.p5;
  var LinkedHashSet = kotlin_kotlin.$_$.h5;
  var HashSet = kotlin_kotlin.$_$.f5;
  var Collection = kotlin_kotlin.$_$.d5;
  var KtList = kotlin_kotlin.$_$.i5;
  var KtMutableList = kotlin_kotlin.$_$.m5;
  var ArrayList = kotlin_kotlin.$_$.c5;
  var copyToArray = kotlin_kotlin.$_$.l6;
  var Result = kotlin_kotlin.$_$.wf;
  var ensureNotNull = kotlin_kotlin.$_$.pg;
  var equals = kotlin_kotlin.$_$.sa;
  var getStringHashCode = kotlin_kotlin.$_$.wa;
  var isBlank = kotlin_kotlin.$_$.od;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var toList = kotlin_kotlin.$_$.e8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.n1;
  var toHashSet = kotlin_kotlin.$_$.b8;
  var toBooleanArray = kotlin_kotlin.$_$.z7;
  var withIndex = kotlin_kotlin.$_$.l8;
  var to = kotlin_kotlin.$_$.ah;
  var toMap = kotlin_kotlin.$_$.g8;
  var lazy_0 = kotlin_kotlin.$_$.vg;
  var contentEquals = kotlin_kotlin.$_$.w5;
  var initMetadataForObject = kotlin_kotlin.$_$.eb;
  var Long = kotlin_kotlin.$_$.tf;
  var Char = kotlin_kotlin.$_$.jf;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.d3;
  var Duration = kotlin_kotlin.$_$.df;
  var Companion_getInstance = kotlin_kotlin.$_$.p;
  var Instant = kotlin_kotlin.$_$.ef;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.q;
  var Uuid = kotlin_kotlin.$_$.gf;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.r;
  var toIntOrNull = kotlin_kotlin.$_$.pe;
  var hashCode = kotlin_kotlin.$_$.xa;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var isArray = kotlin_kotlin.$_$.fb;
  var arrayIterator = kotlin_kotlin.$_$.ha;
  var asList = kotlin_kotlin.$_$.t5;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.i1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q1;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.r1;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.o1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.s1;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.t1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.k1;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.l1;
  var until = kotlin_kotlin.$_$.mc;
  var step = kotlin_kotlin.$_$.lc;
  var getValue = kotlin_kotlin.$_$.x6;
  var longArray = kotlin_kotlin.$_$.sb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.za;
  var get_lastIndex = kotlin_kotlin.$_$.e7;
  var shiftLeft = kotlin_kotlin.$_$.ba;
  var bitwiseOr = kotlin_kotlin.$_$.m9;
  var equalsLong = kotlin_kotlin.$_$.s9;
  var invert = kotlin_kotlin.$_$.u9;
  var countTrailingZeroBits = kotlin_kotlin.$_$.ng;
  var indexOf = kotlin_kotlin.$_$.y6;
  var contentToString = kotlin_kotlin.$_$.a6;
  var Enum = kotlin_kotlin.$_$.of;
  var joinToString = kotlin_kotlin.$_$.b7;
  var toString_0 = kotlin_kotlin.$_$.zg;
  var KTypeParameter = kotlin_kotlin.$_$.xc;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.m1;
  var booleanArray = kotlin_kotlin.$_$.ia;
  var emptyMap = kotlin_kotlin.$_$.p6;
  var contentHashCode = kotlin_kotlin.$_$.z5;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.h;
  var isByteArray = kotlin_kotlin.$_$.hb;
  var coerceAtLeast = kotlin_kotlin.$_$.hc;
  var copyOf = kotlin_kotlin.$_$.g6;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.s;
  var isCharArray = kotlin_kotlin.$_$.ib;
  var charArray = kotlin_kotlin.$_$.la;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.i;
  var isDoubleArray = kotlin_kotlin.$_$.kb;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.j;
  var isFloatArray = kotlin_kotlin.$_$.lb;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.t;
  var isLongArray = kotlin_kotlin.$_$.v9;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.x;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.p4;
  var ULongArray = kotlin_kotlin.$_$.eg;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.l4;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i4;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.n4;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j4;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.k;
  var isIntArray = kotlin_kotlin.$_$.mb;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.w;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.g4;
  var UIntArray = kotlin_kotlin.$_$.cg;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.c4;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.z3;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.e4;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.a4;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.l;
  var isShortArray = kotlin_kotlin.$_$.pb;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.y;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.y4;
  var UShortArray = kotlin_kotlin.$_$.gg;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.u4;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.r4;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.w4;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.s4;
  var Companion_getInstance_7 = kotlin_kotlin.$_$.v;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.x3;
  var UByteArray = kotlin_kotlin.$_$.ag;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.u3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.q3;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.v3;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.r3;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.g;
  var isBooleanArray = kotlin_kotlin.$_$.gb;
  var copyOf_0 = kotlin_kotlin.$_$.f6;
  var copyOf_1 = kotlin_kotlin.$_$.h6;
  var copyOf_2 = kotlin_kotlin.$_$.i6;
  var copyOf_3 = kotlin_kotlin.$_$.d6;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.q4;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.m4;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.o4;
  var copyOf_4 = kotlin_kotlin.$_$.k6;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.h4;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.d4;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.f4;
  var copyOf_5 = kotlin_kotlin.$_$.c6;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.z4;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.v4;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.x4;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.y3;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.t3;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.w3;
  var copyOf_6 = kotlin_kotlin.$_$.e6;
  var trimIndent = kotlin_kotlin.$_$.af;
  var Unit = kotlin_kotlin.$_$.ig;
  var charSequenceLength = kotlin_kotlin.$_$.oa;
  var lastOrNull = kotlin_kotlin.$_$.g7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.f7;
  var last = kotlin_kotlin.$_$.h7;
  var ULong = kotlin_kotlin.$_$.fg;
  var UInt = kotlin_kotlin.$_$.dg;
  var UByte = kotlin_kotlin.$_$.bg;
  var UShort = kotlin_kotlin.$_$.hg;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wg;
  var asSequence = kotlin_kotlin.$_$.u5;
  var get_js = kotlin_kotlin.$_$.rb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.o;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var get_indices = kotlin_kotlin.$_$.a7;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.s2;
  var get_indices_0 = kotlin_kotlin.$_$.z6;
  var get_longArrayClass = kotlin_kotlin.$_$.w9;
  var mapOf = kotlin_kotlin.$_$.l7;
  var Companion_instance = kotlin_kotlin.$_$.u;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m3;
  var createFailure = kotlin_kotlin.$_$.og;
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
    return deserializer.fp(this);
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
    return $super === VOID ? this.rs(descriptor, index, deserializer, previousValue) : $super.rs.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.fs(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.ep(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.dp().eq();
    if (isNullabilitySupported) {
      return this.xt(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.at();
    } else {
      this.au();
      this.xt(serializer, value);
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
    return this.p19(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
    var tmp0_elvis_lhs = _this__u8e3s4.gp(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.hp());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.ip(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(getKClassFromExpression(value), _this__u8e3s4.hp());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.rp('type', serializer_0(StringCompanionObject_instance).dp());
      $this$buildSerialDescriptor.rp('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.sp_1.o() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.lp_1 = this$0.tp_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.sp_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return function (p0) {
      return p0.dp();
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.sp_1 = baseClass;
    this.tp_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.up_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).hp = function () {
    return this.sp_1;
  };
  protoOf(PolymorphicSerializer).dp = function () {
    var tmp0 = this.up_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.n1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.sp_1) + ')';
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
    this.wp_1 = missingFields;
    this.xp_1 = serialName;
  }
  protoOf(MissingFieldException).yp = function (newMessage) {
    return new MissingFieldException(newMessage, this, this.wp_1, this.xp_1);
  };
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
      var tmp$ret$2 = typeOrThrow(item);
      destination.b1(tmp$ret$2);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.r()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.aq(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.zp()) {
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
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.aq(rootClass) : tmp0_elvis_lhs;
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
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.bq(rootClass, serializers) : tmp3_elvis_lhs;
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
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().cq(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().cq(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().dq(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().dq(clazz, types);
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
    if (_this__u8e3s4.dp().eq()) {
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.aq(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.dp();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.jq_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.fq_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.iq_1 = original;
    this.jq_1 = kClass;
    this.kq_1 = this.iq_1.lq() + '<' + this.jq_1.o() + '>';
  }
  protoOf(ContextDescriptor).lq = function () {
    return this.kq_1;
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
    return equals(this.iq_1, another.iq_1) && another.jq_1.equals(this.jq_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.jq_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.kq_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.jq_1) + ', original: ' + toString(this.iq_1) + ')';
  };
  protoOf(ContextDescriptor).mq = function () {
    return this.iq_1.mq();
  };
  protoOf(ContextDescriptor).eq = function () {
    return this.iq_1.eq();
  };
  protoOf(ContextDescriptor).nq = function () {
    return this.iq_1.nq();
  };
  protoOf(ContextDescriptor).oq = function () {
    return this.iq_1.oq();
  };
  protoOf(ContextDescriptor).pq = function () {
    return this.iq_1.pq();
  };
  protoOf(ContextDescriptor).qq = function (index) {
    return this.iq_1.qq(index);
  };
  protoOf(ContextDescriptor).rq = function (name) {
    return this.iq_1.rq(name);
  };
  protoOf(ContextDescriptor).sq = function (index) {
    return this.iq_1.sq(index);
  };
  protoOf(ContextDescriptor).tq = function (index) {
    return this.iq_1.tq(index);
  };
  protoOf(ContextDescriptor).uq = function (index) {
    return this.iq_1.uq(index);
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
    this.wq_1 = $this_elementNames;
    this.vq_1 = $this_elementNames.oq();
  }
  protoOf(elementNames$1).u = function () {
    return this.vq_1 > 0;
  };
  protoOf(elementNames$1).v = function () {
    var tmp = this.wq_1.oq();
    var _unary__edvuaz = this.vq_1;
    this.vq_1 = _unary__edvuaz - 1 | 0;
    return this.wq_1.qq(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.xq_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).t = function () {
    return new elementNames$1(this.xq_1);
  };
  function elementDescriptors$1($this_elementDescriptors) {
    this.zq_1 = $this_elementDescriptors;
    this.yq_1 = $this_elementDescriptors.oq();
  }
  protoOf(elementDescriptors$1).u = function () {
    return this.yq_1 > 0;
  };
  protoOf(elementDescriptors$1).v = function () {
    var tmp = this.zq_1.oq();
    var _unary__edvuaz = this.yq_1;
    this.yq_1 = _unary__edvuaz - 1 | 0;
    return this.zq_1.tq(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.ar_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).t = function () {
    return new elementDescriptors$1(this.ar_1);
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
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.mp_1.e1(), toList(typeParameters), sdBuilder);
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
    this.jp_1 = serialName;
    this.kp_1 = false;
    this.lp_1 = emptyList();
    this.mp_1 = ArrayList_init_$Create$_0();
    this.np_1 = HashSet_init_$Create$();
    this.op_1 = ArrayList_init_$Create$_0();
    this.pp_1 = ArrayList_init_$Create$_0();
    this.qp_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).br = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.np_1.b1(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.jp_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.mp_1.b1(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.op_1.b1(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.pp_1.b1(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.qp_1.b1(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).rp = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.br(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.br.call(this, elementName, descriptor, annotations, isOptional);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.mp_1.e1(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.nr_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.n1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.mr_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return function (p0) {
      return _get__hashCode__tgwhef(p0);
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.cr_1 = serialName;
    this.dr_1 = kind;
    this.er_1 = elementsCount;
    this.fr_1 = builder.lp_1;
    this.gr_1 = toHashSet(builder.mp_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.mp_1;
    tmp.hr_1 = copyToArray(this_0);
    this.ir_1 = compactArray(builder.op_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.pp_1;
    tmp_0.jr_1 = copyToArray(this_1);
    this.kr_1 = toBooleanArray(builder.qp_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.hr_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$4 = to(item.jf_1, item.if_1);
      destination.b1(tmp$ret$4);
    }
    tmp_1.lr_1 = toMap(destination);
    this.mr_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.nr_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).lq = function () {
    return this.cr_1;
  };
  protoOf(SerialDescriptorImpl).mq = function () {
    return this.dr_1;
  };
  protoOf(SerialDescriptorImpl).oq = function () {
    return this.er_1;
  };
  protoOf(SerialDescriptorImpl).pq = function () {
    return this.fr_1;
  };
  protoOf(SerialDescriptorImpl).or = function () {
    return this.gr_1;
  };
  protoOf(SerialDescriptorImpl).qq = function (index) {
    return getChecked(this.hr_1, index);
  };
  protoOf(SerialDescriptorImpl).rq = function (name) {
    var tmp0_elvis_lhs = this.lr_1.s2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).sq = function (index) {
    return getChecked(this.jr_1, index);
  };
  protoOf(SerialDescriptorImpl).tq = function (index) {
    return getChecked(this.ir_1, index);
  };
  protoOf(SerialDescriptorImpl).uq = function (index) {
    return getChecked_0(this.kr_1, index);
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
      if (!(this.lq() === other.lq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.mr_1, other.mr_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.oq() === other.oq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.oq();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.tq(index).lq() === other.tq(index).lq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.tq(index).mq(), other.tq(index).mq())) {
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
  protoOf(AbstractDecoder).pr = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).qr = function () {
    return true;
  };
  protoOf(AbstractDecoder).rr = function () {
    return null;
  };
  protoOf(AbstractDecoder).sr = function () {
    var tmp = this.pr();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).tr = function () {
    var tmp = this.pr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ur = function () {
    var tmp = this.pr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).vr = function () {
    var tmp = this.pr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).wr = function () {
    var tmp = this.pr();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).xr = function () {
    var tmp = this.pr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).yr = function () {
    var tmp = this.pr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).zr = function () {
    var tmp = this.pr();
    return tmp instanceof Char ? tmp.w1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).as = function () {
    var tmp = this.pr();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).bs = function (enumDescriptor) {
    var tmp = this.pr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).cs = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).ds = function (deserializer, previousValue) {
    return this.es(deserializer);
  };
  protoOf(AbstractDecoder).fs = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).gs = function (descriptor) {
  };
  protoOf(AbstractDecoder).hs = function (descriptor, index) {
    return this.sr();
  };
  protoOf(AbstractDecoder).is = function (descriptor, index) {
    return this.tr();
  };
  protoOf(AbstractDecoder).js = function (descriptor, index) {
    return this.ur();
  };
  protoOf(AbstractDecoder).ks = function (descriptor, index) {
    return this.vr();
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
    return this.cs(descriptor.tq(index));
  };
  protoOf(AbstractDecoder).rs = function (descriptor, index, deserializer, previousValue) {
    return this.ds(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).ts = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.dp().eq();
    var tmp;
    if (isNullabilitySupported || this.qr()) {
      tmp = this.ds(deserializer, previousValue);
    } else {
      tmp = this.rr();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).fs = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).gs = function (descriptor) {
  };
  protoOf(AbstractEncoder).ys = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).zs = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).at = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).bt = function (value) {
    return this.zs(value);
  };
  protoOf(AbstractEncoder).ct = function (value) {
    return this.zs(value);
  };
  protoOf(AbstractEncoder).dt = function (value) {
    return this.zs(value);
  };
  protoOf(AbstractEncoder).et = function (value) {
    return this.zs(value);
  };
  protoOf(AbstractEncoder).ft = function (value) {
    return this.zs(value);
  };
  protoOf(AbstractEncoder).gt = function (value) {
    return this.zs(value);
  };
  protoOf(AbstractEncoder).ht = function (value) {
    return this.zs(value);
  };
  protoOf(AbstractEncoder).it = function (value) {
    return this.zs(new Char(value));
  };
  protoOf(AbstractEncoder).jt = function (value) {
    return this.zs(value);
  };
  protoOf(AbstractEncoder).kt = function (enumDescriptor, index) {
    return this.zs(index);
  };
  protoOf(AbstractEncoder).lt = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).mt = function (descriptor, index, value) {
    if (this.ys(descriptor, index)) {
      this.bt(value);
    }
  };
  protoOf(AbstractEncoder).nt = function (descriptor, index, value) {
    if (this.ys(descriptor, index)) {
      this.ct(value);
    }
  };
  protoOf(AbstractEncoder).ot = function (descriptor, index, value) {
    if (this.ys(descriptor, index)) {
      this.dt(value);
    }
  };
  protoOf(AbstractEncoder).pt = function (descriptor, index, value) {
    if (this.ys(descriptor, index)) {
      this.et(value);
    }
  };
  protoOf(AbstractEncoder).qt = function (descriptor, index, value) {
    if (this.ys(descriptor, index)) {
      this.ft(value);
    }
  };
  protoOf(AbstractEncoder).rt = function (descriptor, index, value) {
    if (this.ys(descriptor, index)) {
      this.gt(value);
    }
  };
  protoOf(AbstractEncoder).st = function (descriptor, index, value) {
    if (this.ys(descriptor, index)) {
      this.ht(value);
    }
  };
  protoOf(AbstractEncoder).tt = function (descriptor, index, value) {
    if (this.ys(descriptor, index)) {
      this.it(value);
    }
  };
  protoOf(AbstractEncoder).ut = function (descriptor, index, value) {
    if (this.ys(descriptor, index)) {
      this.jt(value);
    }
  };
  protoOf(AbstractEncoder).vt = function (descriptor, index) {
    return this.ys(descriptor, index) ? this.lt(descriptor.tq(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).wt = function (descriptor, index, serializer, value) {
    if (this.ys(descriptor, index)) {
      this.xt(serializer, value);
    }
  };
  protoOf(AbstractEncoder).yt = function (descriptor, index, serializer, value) {
    if (this.ys(descriptor, index)) {
      this.zt(serializer, value);
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
    var klassName = compositeDecoder.ps($this.dp(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.ss($this.dp(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).vp = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer_0(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.dp();
    var composite = encoder.fs(descriptor);
    composite.ut(this.dp(), 0, actualSerializer.dp().lq());
    var tmp = this.dp();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$2 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.wt(tmp, 1, tmp$ret$2, value);
    composite.gs(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).ep = function (encoder, value) {
    return this.vp(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).fp = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.dp();
    var composite = decoder.fs(descriptor);
    var tmp$ret$1;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.vs()) {
        tmp$ret$1 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.ws(this.dp());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.ps(this.dp(), index);
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
            value = composite.ss(this.dp(), index, serializer);
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
    composite.gs(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).gp = function (decoder, klassName) {
    return decoder.us().du(this.hp(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).ip = function (encoder, value) {
    return encoder.us().eu(this.hp(), value);
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
    this.fu_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).dp = function () {
    return this.fu_1;
  };
  protoOf(NothingSerializer_0).gu = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).ep = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.gu(encoder, tmp);
  };
  protoOf(NothingSerializer_0).fp = function (decoder) {
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
    this.hu_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).dp = function () {
    return this.hu_1;
  };
  protoOf(DurationSerializer).iu = function (encoder, value) {
    encoder.jt(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).ep = function (encoder, value) {
    return this.iu(encoder, value instanceof Duration ? value.rl_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).ju = function (decoder) {
    return Companion_getInstance().sl(decoder.as());
  };
  protoOf(DurationSerializer).fp = function (decoder) {
    return new Duration(this.ju(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.ku_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).dp = function () {
    return this.ku_1;
  };
  protoOf(InstantSerializer).lu = function (encoder, value) {
    encoder.jt(value.toString());
  };
  protoOf(InstantSerializer).ep = function (encoder, value) {
    return this.lu(encoder, value instanceof Instant ? value : THROW_CCE());
  };
  protoOf(InstantSerializer).fp = function (decoder) {
    return Companion_getInstance_0().em(decoder.as());
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.mu_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).dp = function () {
    return this.mu_1;
  };
  protoOf(UuidSerializer).nu = function (encoder, value) {
    encoder.jt(value.toString());
  };
  protoOf(UuidSerializer).ep = function (encoder, value) {
    return this.nu(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).fp = function (decoder) {
    return Companion_getInstance_1().kn(decoder.as());
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
  protoOf(ArrayClassDesc).lq = function () {
    return 'kotlin.Array';
  };
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).lq = function () {
    return 'kotlin.collections.ArrayList';
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).lq = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).lq = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.qu_1 = elementDescriptor;
    this.ru_1 = 1;
  }
  protoOf(ListLikeDescriptor).mq = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).oq = function () {
    return this.ru_1;
  };
  protoOf(ListLikeDescriptor).qq = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).rq = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).uq = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.lq() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).sq = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.lq() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).tq = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.lq() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.qu_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.qu_1, other.qu_1) && this.lq() === other.lq())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.qu_1), 31) + getStringHashCode(this.lq()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.lq() + '(' + toString(this.qu_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.uu_1 = serialName;
    this.vu_1 = keyDescriptor;
    this.wu_1 = valueDescriptor;
    this.xu_1 = 2;
  }
  protoOf(MapLikeDescriptor).lq = function () {
    return this.uu_1;
  };
  protoOf(MapLikeDescriptor).mq = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).oq = function () {
    return this.xu_1;
  };
  protoOf(MapLikeDescriptor).qq = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).rq = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).uq = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.lq() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).sq = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.lq() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).tq = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.lq() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.vu_1;
        break;
      case 1:
        tmp = this.wu_1;
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
    if (!(this.lq() === other.lq()))
      return false;
    if (!equals(this.vu_1, other.vu_1))
      return false;
    if (!equals(this.wu_1, other.wu_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.lq());
    result = imul(31, result) + hashCode(this.vu_1) | 0;
    result = imul(31, result) + hashCode(this.wu_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.lq() + '(' + toString(this.vu_1) + ', ' + toString(this.wu_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.ev_1 = primitive.lq() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).lq = function () {
    return this.ev_1;
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.gv_1 = kClass;
    this.hv_1 = new ArrayClassDesc(eSerializer.dp());
  }
  protoOf(ReferenceArraySerializer).dp = function () {
    return this.hv_1;
  };
  protoOf(ReferenceArraySerializer).iv = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).jv = function (_this__u8e3s4) {
    return this.iv((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).kv = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).lv = function (_this__u8e3s4) {
    return this.kv((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).mv = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).nv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ReferenceArraySerializer).ov = function (_this__u8e3s4) {
    return this.nv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).pv = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.gv_1);
  };
  protoOf(ReferenceArraySerializer).qv = function (_this__u8e3s4) {
    return this.pv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).rv = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).sv = function (_this__u8e3s4) {
    return this.rv((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).tv = function (_this__u8e3s4, size) {
    return _this__u8e3s4.r5(size);
  };
  protoOf(ReferenceArraySerializer).uv = function (_this__u8e3s4, size) {
    return this.tv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).vv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a3(index, element);
  };
  protoOf(ReferenceArraySerializer).wv = function (_this__u8e3s4, index, element) {
    return this.vv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.ew_1 = new ArrayListClassDesc(element.dp());
  }
  protoOf(ArrayListSerializer).dp = function () {
    return this.ew_1;
  };
  protoOf(ArrayListSerializer).mv = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).fw = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ArrayListSerializer).ov = function (_this__u8e3s4) {
    return this.fw(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).gw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).qv = function (_this__u8e3s4) {
    return this.gw(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).hw = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).sv = function (_this__u8e3s4) {
    return this.hw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).iw = function (_this__u8e3s4, size) {
    return _this__u8e3s4.r5(size);
  };
  protoOf(ArrayListSerializer).uv = function (_this__u8e3s4, size) {
    return this.iw(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).jw = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a3(index, element);
  };
  protoOf(ArrayListSerializer).wv = function (_this__u8e3s4, index, element) {
    return this.jw(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.pw_1 = new LinkedHashMapClassDesc(kSerializer.dp(), vSerializer.dp());
  }
  protoOf(LinkedHashMapSerializer).dp = function () {
    return this.pw_1;
  };
  protoOf(LinkedHashMapSerializer).qw = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(LinkedHashMapSerializer).jv = function (_this__u8e3s4) {
    return this.qw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).rw = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.l1().t();
  };
  protoOf(LinkedHashMapSerializer).lv = function (_this__u8e3s4) {
    return this.rw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).mv = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).sw = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(LinkedHashMapSerializer).ov = function (_this__u8e3s4) {
    return this.sw(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).tw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).qv = function (_this__u8e3s4) {
    return this.tw(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).uw = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).sv = function (_this__u8e3s4) {
    return this.uw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).vw = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).uv = function (_this__u8e3s4, size) {
    return this.vw(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.bx_1 = new HashSetClassDesc(eSerializer.dp());
  }
  protoOf(HashSetSerializer).dp = function () {
    return this.bx_1;
  };
  protoOf(HashSetSerializer).mv = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).cx = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(HashSetSerializer).ov = function (_this__u8e3s4) {
    return this.cx(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).dx = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).qv = function (_this__u8e3s4) {
    return this.dx(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).ex = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).sv = function (_this__u8e3s4) {
    return this.ex((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).fx = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).uv = function (_this__u8e3s4, size) {
    return this.fx(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).gx = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b1(element);
  };
  protoOf(HashSetSerializer).wv = function (_this__u8e3s4, index, element) {
    return this.gx(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.ix_1 = new LinkedHashSetClassDesc(eSerializer.dp());
  }
  protoOf(LinkedHashSetSerializer).dp = function () {
    return this.ix_1;
  };
  protoOf(LinkedHashSetSerializer).mv = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).jx = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(LinkedHashSetSerializer).ov = function (_this__u8e3s4) {
    return this.jx(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).kx = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).qv = function (_this__u8e3s4) {
    return this.kx(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).ex = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).sv = function (_this__u8e3s4) {
    return this.ex((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).lx = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).uv = function (_this__u8e3s4, size) {
    return this.lx(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).mx = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b1(element);
  };
  protoOf(LinkedHashSetSerializer).wv = function (_this__u8e3s4, index, element) {
    return this.mx(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.px_1 = new HashMapClassDesc(kSerializer.dp(), vSerializer.dp());
  }
  protoOf(HashMapSerializer).dp = function () {
    return this.px_1;
  };
  protoOf(HashMapSerializer).qw = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(HashMapSerializer).jv = function (_this__u8e3s4) {
    return this.qw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).rw = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.l1().t();
  };
  protoOf(HashMapSerializer).lv = function (_this__u8e3s4) {
    return this.rw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).mv = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).qx = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(HashMapSerializer).ov = function (_this__u8e3s4) {
    return this.qx(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).rx = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).qv = function (_this__u8e3s4) {
    return this.rx(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).uw = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).sv = function (_this__u8e3s4) {
    return this.uw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).sx = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).uv = function (_this__u8e3s4, size) {
    return this.sx(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.xv_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).yv = function (encoder, value) {
    var size = this.jv(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.dp();
    var composite = encoder.bu(descriptor, size);
    var iterator = this.lv(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.wt(this.dp(), index, this.xv_1, iterator.v());
      }
       while (inductionVariable < size);
    composite.gs(descriptor);
  };
  protoOf(CollectionLikeSerializer).ep = function (encoder, value) {
    return this.yv(encoder, value);
  };
  protoOf(CollectionLikeSerializer).zv = function (decoder, builder, startIndex, size) {
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
        this.aw(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).aw = function (decoder, index, builder, checkIndex) {
    this.wv(builder, index, decoder.ss(this.dp(), index, this.xv_1));
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).lw = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(CollectionSerializer).jv = function (_this__u8e3s4) {
    return this.lw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).mw = function (_this__u8e3s4) {
    return _this__u8e3s4.t();
  };
  protoOf(CollectionSerializer).lv = function (_this__u8e3s4) {
    return this.mw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.ww_1 = keySerializer;
    this.xw_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).yw = function (decoder, builder, startIndex, size) {
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
        this.zw(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).zv = function (decoder, builder, startIndex, size) {
    return this.yw(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).zw = function (decoder, index, builder, checkIndex) {
    var key = decoder.ss(this.dp(), index, this.ww_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.ws(this.dp());
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
      var tmp_2 = this.xw_1.dp().mq();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.rs(this.dp(), vIndex, this.xw_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.ss(this.dp(), vIndex, this.xw_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.v2(key, value);
  };
  protoOf(MapLikeSerializer).aw = function (decoder, index, builder, checkIndex) {
    return this.zw(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).yv = function (encoder, value) {
    var size = this.jv(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.dp();
    var composite = encoder.bu(descriptor, size);
    var iterator = this.lv(value);
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
      var tmp = this.dp();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.wt(tmp, _unary__edvuaz, this.ww_1, k);
      var tmp_0 = this.dp();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.wt(tmp_0, _unary__edvuaz_0, this.xw_1, v);
    }
    composite.gs(descriptor);
  };
  protoOf(MapLikeSerializer).ep = function (encoder, value) {
    return this.yv(encoder, value);
  };
  function readSize($this, decoder, builder) {
    var size = decoder.xs($this.dp());
    $this.uv(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).cw = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.sv(previous);
    var builder = tmp1_elvis_lhs == null ? this.mv() : tmp1_elvis_lhs;
    var startIndex = this.ov(builder);
    var compositeDecoder = decoder.fs(this.dp());
    if (compositeDecoder.vs()) {
      this.zv(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.ws(this.dp());
        if (index === -1)
          break $l$loop;
        this.bw(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.gs(this.dp());
    return this.qv(builder);
  };
  protoOf(AbstractCollectionSerializer).fp = function (decoder) {
    return this.cw(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).bw = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.aw(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.aw.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.ux_1 = new PrimitiveArrayDescriptor(primitiveSerializer.dp());
  }
  protoOf(PrimitiveArraySerializer).dp = function () {
    return this.ux_1;
  };
  protoOf(PrimitiveArraySerializer).vx = function (_this__u8e3s4) {
    return _this__u8e3s4.wx();
  };
  protoOf(PrimitiveArraySerializer).ov = function (_this__u8e3s4) {
    return this.vx(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).xx = function (_this__u8e3s4) {
    return _this__u8e3s4.yx();
  };
  protoOf(PrimitiveArraySerializer).qv = function (_this__u8e3s4) {
    return this.xx(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).zx = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ay(size);
  };
  protoOf(PrimitiveArraySerializer).uv = function (_this__u8e3s4, size) {
    return this.zx(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).by = function (_this__u8e3s4) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).lv = function (_this__u8e3s4) {
    return this.by(_this__u8e3s4);
  };
  protoOf(PrimitiveArraySerializer).cy = function (_this__u8e3s4, index, element) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).wv = function (_this__u8e3s4, index, element) {
    return this.cy(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  protoOf(PrimitiveArraySerializer).mv = function () {
    return this.sv(this.dy());
  };
  protoOf(PrimitiveArraySerializer).gy = function (encoder, value) {
    var size = this.jv(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.ux_1;
    var composite = encoder.bu(descriptor, size);
    this.fy(composite, value, size);
    composite.gs(descriptor);
  };
  protoOf(PrimitiveArraySerializer).ep = function (encoder, value) {
    return this.gy(encoder, value);
  };
  protoOf(PrimitiveArraySerializer).yv = function (encoder, value) {
    return this.gy(encoder, value);
  };
  protoOf(PrimitiveArraySerializer).fp = function (decoder) {
    return this.cw(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).hy = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.wx() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.ay(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.ay.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.iy_1 = longArray(0);
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
    $this.my_1[slot] = bitwiseOr($this.my_1[slot], shiftLeft(new Long(1, 0), offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.my_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.my_1[slot];
        while (!equalsLong(slotMarks, new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(invert(slotMarks));
          slotMarks = bitwiseOr(slotMarks, shiftLeft(new Long(1, 0), indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.ky_1($this.jy_1, index)) {
            $this.my_1[slot] = slotMarks;
            return index;
          }
        }
        $this.my_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.jy_1 = descriptor;
    this.ky_1 = readIfAbsent;
    var elementsCount = this.jy_1.oq();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = shiftLeft(new Long(-1, -1), elementsCount);
      }
      tmp.ly_1 = tmp_0;
      this.my_1 = Companion_getInstance_8().iy_1;
    } else {
      this.ly_1 = new Long(0, 0);
      this.my_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).ny = function (index) {
    if (index < 64) {
      this.ly_1 = bitwiseOr(this.ly_1, shiftLeft(new Long(1, 0), index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).oy = function () {
    var elementsCount = this.jy_1.oq();
    while (!equalsLong(this.ly_1, new Long(-1, -1))) {
      var index = countTrailingZeroBits(invert(this.ly_1));
      this.ly_1 = bitwiseOr(this.ly_1, shiftLeft(new Long(1, 0), index));
      if (this.ky_1(this.jy_1, index)) {
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
    var d = new EnumDescriptor(serialName, $this.py_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.py_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.ez(element.z_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.qy_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer$_get_descriptor_$ref_j67dlw() {
    return function (p0) {
      return p0.dp();
    };
  }
  function EnumSerializer(serialName, values) {
    this.py_1 = values;
    this.qy_1 = null;
    var tmp = this;
    tmp.ry_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).dp = function () {
    var tmp0 = this.ry_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, EnumSerializer$_get_descriptor_$ref_j67dlw(), null);
    return tmp0.n1();
  };
  protoOf(EnumSerializer).fz = function (encoder, value) {
    var index = indexOf(this.py_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.dp().lq() + ', ' + ('must be one of ' + contentToString(this.py_1)));
    }
    encoder.kt(this.dp(), index);
  };
  protoOf(EnumSerializer).ep = function (encoder, value) {
    return this.fz(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).fp = function (decoder) {
    var index = decoder.bs(this.dp());
    if (!(0 <= index ? index <= (this.py_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.dp().lq() + ' enum values, ' + ('values size is ' + this.py_1.length));
    }
    return this.py_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.dp().lq() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.tz_1;
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
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.qq(tmp_2), OBJECT_getInstance(), []);
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
    this.sz_1 = ENUM_getInstance();
    var tmp = this;
    tmp.tz_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).mq = function () {
    return this.sz_1;
  };
  protoOf(EnumDescriptor).tq = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!isInterface(other, SerialDescriptor))
      return false;
    if (!(other.mq() === ENUM_getInstance()))
      return false;
    if (!(this.lq() === other.lq()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.lq() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.lq());
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
    this.i10_1 = true;
  }
  protoOf(InlineClassDescriptor).nq = function () {
    return this.i10_1;
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
      if (!(this.lq() === other.lq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.i10_1 && contentEquals(this.uz(), other.uz()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.oq() === other.oq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.oq();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.tq(index).lq() === other.tq(index).lq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.tq(index).mq(), other.tq(index).mq())) {
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
    this.j10_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).k10 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.j10_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).dp = function () {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).ep = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).fp = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function missingFieldExceptionWithNewMessage(exception, message) {
    return exception.yp(message);
  }
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.m10_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).us = function () {
    return this.m10_1;
  };
  protoOf(NoOpEncoder).zs = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).at = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).bt = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ct = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).dt = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).et = function (value) {
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
  protoOf(NoOpEncoder).kt = function (enumDescriptor, index) {
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
    this.n10_1 = OBJECT_getInstance();
    this.o10_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).mq = function () {
    return this.n10_1;
  };
  protoOf(NothingSerialDescriptor).lq = function () {
    return this.o10_1;
  };
  protoOf(NothingSerialDescriptor).oq = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).qq = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).rq = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).uq = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).tq = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).sq = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.o10_1) + imul(31, this.n10_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.p10_1 = serializer;
    this.q10_1 = new SerialDescriptorForNullable(this.p10_1.dp());
  }
  protoOf(NullableSerializer).dp = function () {
    return this.q10_1;
  };
  protoOf(NullableSerializer).r10 = function (encoder, value) {
    if (!(value == null)) {
      encoder.au();
      encoder.xt(this.p10_1, value);
    } else {
      encoder.at();
    }
  };
  protoOf(NullableSerializer).ep = function (encoder, value) {
    return this.r10(encoder, value);
  };
  protoOf(NullableSerializer).fp = function (decoder) {
    return decoder.qr() ? decoder.es(this.p10_1) : decoder.rr();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.p10_1, other.p10_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.p10_1);
  };
  function SerialDescriptorForNullable(original) {
    this.fq_1 = original;
    this.gq_1 = this.fq_1.lq() + '?';
    this.hq_1 = cachedSerialNames(this.fq_1);
  }
  protoOf(SerialDescriptorForNullable).lq = function () {
    return this.gq_1;
  };
  protoOf(SerialDescriptorForNullable).or = function () {
    return this.hq_1;
  };
  protoOf(SerialDescriptorForNullable).eq = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.fq_1, other.fq_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.fq_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.fq_1), 31);
  };
  protoOf(SerialDescriptorForNullable).mq = function () {
    return this.fq_1.mq();
  };
  protoOf(SerialDescriptorForNullable).nq = function () {
    return this.fq_1.nq();
  };
  protoOf(SerialDescriptorForNullable).oq = function () {
    return this.fq_1.oq();
  };
  protoOf(SerialDescriptorForNullable).pq = function () {
    return this.fq_1.pq();
  };
  protoOf(SerialDescriptorForNullable).qq = function (index) {
    return this.fq_1.qq(index);
  };
  protoOf(SerialDescriptorForNullable).rq = function (name) {
    return this.fq_1.rq(name);
  };
  protoOf(SerialDescriptorForNullable).sq = function (index) {
    return this.fq_1.sq(index);
  };
  protoOf(SerialDescriptorForNullable).tq = function (index) {
    return this.fq_1.tq(index);
  };
  protoOf(SerialDescriptorForNullable).uq = function (index) {
    return this.fq_1.uq(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.lp_1 = this$0.t10_1;
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
      return p0.dp();
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.s10_1 = objectInstance;
    this.t10_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.u10_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).dp = function () {
    var tmp0 = this.u10_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.n1();
  };
  protoOf(ObjectSerializer).vp = function (encoder, value) {
    encoder.fs(this.dp()).gs(this.dp());
  };
  protoOf(ObjectSerializer).ep = function (encoder, value) {
    return this.vp(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).fp = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.dp();
    var composite = decoder.fs(descriptor);
    var tmp$ret$1;
    $l$block_0: {
      if (composite.vs()) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.ws(this.dp());
      if (index === -1) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$1;
    composite.gs(descriptor);
    return this.s10_1;
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
    var tmp0 = _this__u8e3s4.tj_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.tj_1);
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
      return _this__u8e3s4.or();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.oq());
    var inductionVariable = 0;
    var last = _this__u8e3s4.oq();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.qq(i);
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
          var element = descriptor.qq(i);
          missingFields.b1(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.lq());
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
                var element = descriptor.qq(imul(maskSlot, 32) + i | 0);
                missingFields.b1(element);
              }
              missingFieldsBits = missingFieldsBits >>> 1 | 0;
            }
             while (inductionVariable_0 < 32);
        }
      }
       while (inductionVariable <= last);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.lq());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.bz_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.n1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.dz_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.n1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.wy_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.wy_1[i];
        indices.v2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.ty_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k10();
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
      var tmp0_safe_receiver = this$0.ty_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l10();
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
          var tmp$ret$2 = item.dp();
          destination.b1(tmp$ret$2);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return function (p0) {
      return p0.uz();
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.uz());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.sy_1 = serialName;
    this.ty_1 = generatedSerializer;
    this.uy_1 = elementsCount;
    this.vy_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.uy_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.wy_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.uy_1;
    tmp_3.xy_1 = Array(size);
    this.yy_1 = null;
    this.zy_1 = booleanArray(this.uy_1);
    this.az_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.bz_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.cz_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.dz_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).lq = function () {
    return this.sy_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).oq = function () {
    return this.uy_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).mq = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).pq = function () {
    var tmp0_elvis_lhs = this.yy_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).or = function () {
    return this.az_1.t2();
  };
  protoOf(PluginGeneratedSerialDescriptor).uz = function () {
    var tmp0 = this.cz_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.n1();
  };
  protoOf(PluginGeneratedSerialDescriptor).vz = function (name, isOptional) {
    this.vy_1 = this.vy_1 + 1 | 0;
    this.wy_1[this.vy_1] = name;
    this.zy_1[this.vy_1] = isOptional;
    this.xy_1[this.vy_1] = null;
    if (this.vy_1 === (this.uy_1 - 1 | 0)) {
      this.az_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).ez = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.vz(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.vz.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).tq = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).dp();
  };
  protoOf(PluginGeneratedSerialDescriptor).uq = function (index) {
    return getChecked_0(this.zy_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).sq = function (index) {
    var tmp0_elvis_lhs = getChecked(this.xy_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).qq = function (index) {
    return getChecked(this.wy_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).rq = function (name) {
    var tmp0_elvis_lhs = this.az_1.s2(name);
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
      if (!(this.lq() === other.lq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.uz(), other.uz())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.oq() === other.oq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.oq();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.tq(index).lq() === other.tq(index).lq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.tq(index).mq(), other.tq(index).mq())) {
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
    var result = getStringHashCode(_this__u8e3s4.lq());
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
      var tmp0_safe_receiver = element.lq();
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
      var tmp0_safe_receiver_0 = element_0.mq();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.oq());
    var tmp_0 = _this__u8e3s4.lq() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.qq(i) + ': ' + $this_toStringImpl.tq(i).lq();
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
  protoOf(ByteArraySerializer_0).y10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).jv = function (_this__u8e3s4) {
    return this.y10((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).z10 = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).sv = function (_this__u8e3s4) {
    return this.z10((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).dy = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).a11 = function (decoder, index, builder, checkIndex) {
    builder.d11(decoder.is(this.ux_1, index));
  };
  protoOf(ByteArraySerializer_0).aw = function (decoder, index, builder, checkIndex) {
    return this.a11(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.a11(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).e11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.nt(this.ux_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).fy = function (encoder, content, size) {
    return this.e11(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.b11_1 = bufferWithData;
    this.c11_1 = bufferWithData.length;
    this.ay(10);
  }
  protoOf(ByteArrayBuilder).wx = function () {
    return this.c11_1;
  };
  protoOf(ByteArrayBuilder).ay = function (requiredCapacity) {
    if (this.b11_1.length < requiredCapacity)
      this.b11_1 = copyOf(this.b11_1, coerceAtLeast(requiredCapacity, imul(this.b11_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).d11 = function (c) {
    this.hy();
    var tmp = this.b11_1;
    var _unary__edvuaz = this.c11_1;
    this.c11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).yx = function () {
    return copyOf(this.b11_1, this.c11_1);
  };
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_2()));
  }
  protoOf(CharArraySerializer_0).h11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).jv = function (_this__u8e3s4) {
    return this.h11((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).i11 = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).sv = function (_this__u8e3s4) {
    return this.i11((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).dy = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).j11 = function (decoder, index, builder, checkIndex) {
    builder.m11(decoder.os(this.ux_1, index));
  };
  protoOf(CharArraySerializer_0).aw = function (decoder, index, builder, checkIndex) {
    return this.j11(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.j11(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).n11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.tt(this.ux_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).fy = function (encoder, content, size) {
    return this.n11(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(DoubleArraySerializer_0).q11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).jv = function (_this__u8e3s4) {
    return this.q11((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).r11 = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).sv = function (_this__u8e3s4) {
    return this.r11((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).dy = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).s11 = function (decoder, index, builder, checkIndex) {
    builder.v11(decoder.ns(this.ux_1, index));
  };
  protoOf(DoubleArraySerializer_0).aw = function (decoder, index, builder, checkIndex) {
    return this.s11(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.s11(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).w11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.st(this.ux_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).fy = function (encoder, content, size) {
    return this.w11(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(FloatArraySerializer_0).z11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).jv = function (_this__u8e3s4) {
    return this.z11((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).a12 = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).sv = function (_this__u8e3s4) {
    return this.a12((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).dy = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).b12 = function (decoder, index, builder, checkIndex) {
    builder.e12(decoder.ms(this.ux_1, index));
  };
  protoOf(FloatArraySerializer_0).aw = function (decoder, index, builder, checkIndex) {
    return this.b12(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.b12(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).f12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.rt(this.ux_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).fy = function (encoder, content, size) {
    return this.f12(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(LongArraySerializer_0).i12 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).jv = function (_this__u8e3s4) {
    return this.i12((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).j12 = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).sv = function (_this__u8e3s4) {
    return this.j12((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).dy = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).k12 = function (decoder, index, builder, checkIndex) {
    builder.n12(decoder.ls(this.ux_1, index));
  };
  protoOf(LongArraySerializer_0).aw = function (decoder, index, builder, checkIndex) {
    return this.k12(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.k12(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).o12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.qt(this.ux_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).fy = function (encoder, content, size) {
    return this.o12(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(ULongArraySerializer_0).r12 = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).jv = function (_this__u8e3s4) {
    return this.r12(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.so_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).s12 = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).sv = function (_this__u8e3s4) {
    return this.s12(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.so_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).t12 = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).dy = function () {
    return new ULongArray(this.t12());
  };
  protoOf(ULongArraySerializer_0).u12 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.qs(this.ux_1, index).wr();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.x12(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).aw = function (decoder, index, builder, checkIndex) {
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
        var tmp = encoder.vt(this.ux_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.ft(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).fy = function (encoder, content, size) {
    return this.y12(encoder, content instanceof ULongArray ? content.so_1 : THROW_CCE(), size);
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
  protoOf(IntArraySerializer_0).jv = function (_this__u8e3s4) {
    return this.b13((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).c13 = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).sv = function (_this__u8e3s4) {
    return this.c13((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).dy = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).d13 = function (decoder, index, builder, checkIndex) {
    builder.g13(decoder.ks(this.ux_1, index));
  };
  protoOf(IntArraySerializer_0).aw = function (decoder, index, builder, checkIndex) {
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
        encoder.pt(this.ux_1, i, content[i]);
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
  protoOf(UIntArraySerializer_0).jv = function (_this__u8e3s4) {
    return this.k13(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.io_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).l13 = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).sv = function (_this__u8e3s4) {
    return this.l13(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.io_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).m13 = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).dy = function () {
    return new UIntArray(this.m13());
  };
  protoOf(UIntArraySerializer_0).n13 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.qs(this.ux_1, index).vr();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.q13(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).aw = function (decoder, index, builder, checkIndex) {
    return this.n13(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.n13(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).r13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.vt(this.ux_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.et(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).fy = function (encoder, content, size) {
    return this.r13(encoder, content instanceof UIntArray ? content.io_1 : THROW_CCE(), size);
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
  protoOf(ShortArraySerializer_0).u13 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).jv = function (_this__u8e3s4) {
    return this.u13((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).v13 = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).sv = function (_this__u8e3s4) {
    return this.v13((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).dy = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).w13 = function (decoder, index, builder, checkIndex) {
    builder.z13(decoder.js(this.ux_1, index));
  };
  protoOf(ShortArraySerializer_0).aw = function (decoder, index, builder, checkIndex) {
    return this.w13(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.w13(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).a14 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ot(this.ux_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).fy = function (encoder, content, size) {
    return this.a14(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UShortArraySerializer_0).d14 = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).jv = function (_this__u8e3s4) {
    return this.d14(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.cp_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).e14 = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).sv = function (_this__u8e3s4) {
    return this.e14(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.cp_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).f14 = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).dy = function () {
    return new UShortArray(this.f14());
  };
  protoOf(UShortArraySerializer_0).g14 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.qs(this.ux_1, index).ur();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.j14(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).aw = function (decoder, index, builder, checkIndex) {
    return this.g14(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.g14(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).k14 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.vt(this.ux_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.dt(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).fy = function (encoder, content, size) {
    return this.k14(encoder, content instanceof UShortArray ? content.cp_1 : THROW_CCE(), size);
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
  protoOf(UByteArraySerializer_0).n14 = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).jv = function (_this__u8e3s4) {
    return this.n14(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.yn_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).o14 = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).sv = function (_this__u8e3s4) {
    return this.o14(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.yn_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).p14 = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).dy = function () {
    return new UByteArray(this.p14());
  };
  protoOf(UByteArraySerializer_0).q14 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.qs(this.ux_1, index).tr();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.t14(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).aw = function (decoder, index, builder, checkIndex) {
    return this.q14(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.q14(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).u14 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.vt(this.ux_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.ct(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).fy = function (encoder, content, size) {
    return this.u14(encoder, content instanceof UByteArray ? content.yn_1 : THROW_CCE(), size);
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
  protoOf(BooleanArraySerializer_0).x14 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).jv = function (_this__u8e3s4) {
    return this.x14((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).y14 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).sv = function (_this__u8e3s4) {
    return this.y14((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).dy = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).z14 = function (decoder, index, builder, checkIndex) {
    builder.c15(decoder.hs(this.ux_1, index));
  };
  protoOf(BooleanArraySerializer_0).aw = function (decoder, index, builder, checkIndex) {
    return this.z14(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    return this.z14(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).d15 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.mt(this.ux_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).fy = function (encoder, content, size) {
    return this.d15(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.k11_1 = bufferWithData;
    this.l11_1 = bufferWithData.length;
    this.ay(10);
  }
  protoOf(CharArrayBuilder).wx = function () {
    return this.l11_1;
  };
  protoOf(CharArrayBuilder).ay = function (requiredCapacity) {
    if (this.k11_1.length < requiredCapacity)
      this.k11_1 = copyOf_0(this.k11_1, coerceAtLeast(requiredCapacity, imul(this.k11_1.length, 2)));
  };
  protoOf(CharArrayBuilder).m11 = function (c) {
    this.hy();
    var tmp = this.k11_1;
    var _unary__edvuaz = this.l11_1;
    this.l11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).yx = function () {
    return copyOf_0(this.k11_1, this.l11_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.t11_1 = bufferWithData;
    this.u11_1 = bufferWithData.length;
    this.ay(10);
  }
  protoOf(DoubleArrayBuilder).wx = function () {
    return this.u11_1;
  };
  protoOf(DoubleArrayBuilder).ay = function (requiredCapacity) {
    if (this.t11_1.length < requiredCapacity)
      this.t11_1 = copyOf_1(this.t11_1, coerceAtLeast(requiredCapacity, imul(this.t11_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).v11 = function (c) {
    this.hy();
    var tmp = this.t11_1;
    var _unary__edvuaz = this.u11_1;
    this.u11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).yx = function () {
    return copyOf_1(this.t11_1, this.u11_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.c12_1 = bufferWithData;
    this.d12_1 = bufferWithData.length;
    this.ay(10);
  }
  protoOf(FloatArrayBuilder).wx = function () {
    return this.d12_1;
  };
  protoOf(FloatArrayBuilder).ay = function (requiredCapacity) {
    if (this.c12_1.length < requiredCapacity)
      this.c12_1 = copyOf_2(this.c12_1, coerceAtLeast(requiredCapacity, imul(this.c12_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).e12 = function (c) {
    this.hy();
    var tmp = this.c12_1;
    var _unary__edvuaz = this.d12_1;
    this.d12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).yx = function () {
    return copyOf_2(this.c12_1, this.d12_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.l12_1 = bufferWithData;
    this.m12_1 = bufferWithData.length;
    this.ay(10);
  }
  protoOf(LongArrayBuilder).wx = function () {
    return this.m12_1;
  };
  protoOf(LongArrayBuilder).ay = function (requiredCapacity) {
    if (this.l12_1.length < requiredCapacity)
      this.l12_1 = copyOf_3(this.l12_1, coerceAtLeast(requiredCapacity, imul(this.l12_1.length, 2)));
  };
  protoOf(LongArrayBuilder).n12 = function (c) {
    this.hy();
    var tmp = this.l12_1;
    var _unary__edvuaz = this.m12_1;
    this.m12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).yx = function () {
    return copyOf_3(this.l12_1, this.m12_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.v12_1 = bufferWithData;
    this.w12_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.ay(10);
  }
  protoOf(ULongArrayBuilder).wx = function () {
    return this.w12_1;
  };
  protoOf(ULongArrayBuilder).ay = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.v12_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.v12_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.v12_1), 2));
      tmp.v12_1 = _ULongArray___init__impl__twm1l3_0(copyOf_3(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).x12 = function (c) {
    this.hy();
    var tmp = this.v12_1;
    var _unary__edvuaz = this.w12_1;
    this.w12_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).e15 = function () {
    var tmp0 = this.v12_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.w12_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_3(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).yx = function () {
    return new ULongArray(this.e15());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.e13_1 = bufferWithData;
    this.f13_1 = bufferWithData.length;
    this.ay(10);
  }
  protoOf(IntArrayBuilder).wx = function () {
    return this.f13_1;
  };
  protoOf(IntArrayBuilder).ay = function (requiredCapacity) {
    if (this.e13_1.length < requiredCapacity)
      this.e13_1 = copyOf_4(this.e13_1, coerceAtLeast(requiredCapacity, imul(this.e13_1.length, 2)));
  };
  protoOf(IntArrayBuilder).g13 = function (c) {
    this.hy();
    var tmp = this.e13_1;
    var _unary__edvuaz = this.f13_1;
    this.f13_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).yx = function () {
    return copyOf_4(this.e13_1, this.f13_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.o13_1 = bufferWithData;
    this.p13_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.ay(10);
  }
  protoOf(UIntArrayBuilder).wx = function () {
    return this.p13_1;
  };
  protoOf(UIntArrayBuilder).ay = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.o13_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.o13_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.o13_1), 2));
      tmp.o13_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_4(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).q13 = function (c) {
    this.hy();
    var tmp = this.o13_1;
    var _unary__edvuaz = this.p13_1;
    this.p13_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).f15 = function () {
    var tmp0 = this.o13_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.p13_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_4(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).yx = function () {
    return new UIntArray(this.f15());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.x13_1 = bufferWithData;
    this.y13_1 = bufferWithData.length;
    this.ay(10);
  }
  protoOf(ShortArrayBuilder).wx = function () {
    return this.y13_1;
  };
  protoOf(ShortArrayBuilder).ay = function (requiredCapacity) {
    if (this.x13_1.length < requiredCapacity)
      this.x13_1 = copyOf_5(this.x13_1, coerceAtLeast(requiredCapacity, imul(this.x13_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).z13 = function (c) {
    this.hy();
    var tmp = this.x13_1;
    var _unary__edvuaz = this.y13_1;
    this.y13_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).yx = function () {
    return copyOf_5(this.x13_1, this.y13_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.h14_1 = bufferWithData;
    this.i14_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.ay(10);
  }
  protoOf(UShortArrayBuilder).wx = function () {
    return this.i14_1;
  };
  protoOf(UShortArrayBuilder).ay = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.h14_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.h14_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.h14_1), 2));
      tmp.h14_1 = _UShortArray___init__impl__9b26ef_0(copyOf_5(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).j14 = function (c) {
    this.hy();
    var tmp = this.h14_1;
    var _unary__edvuaz = this.i14_1;
    this.i14_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).g15 = function () {
    var tmp0 = this.h14_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.i14_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_5(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).yx = function () {
    return new UShortArray(this.g15());
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.r14_1 = bufferWithData;
    this.s14_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.ay(10);
  }
  protoOf(UByteArrayBuilder).wx = function () {
    return this.s14_1;
  };
  protoOf(UByteArrayBuilder).ay = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.r14_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.r14_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.r14_1), 2));
      tmp.r14_1 = _UByteArray___init__impl__ip4y9n_0(copyOf(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).t14 = function (c) {
    this.hy();
    var tmp = this.r14_1;
    var _unary__edvuaz = this.s14_1;
    this.s14_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).h15 = function () {
    var tmp0 = this.r14_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.s14_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).yx = function () {
    return new UByteArray(this.h15());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.a15_1 = bufferWithData;
    this.b15_1 = bufferWithData.length;
    this.ay(10);
  }
  protoOf(BooleanArrayBuilder).wx = function () {
    return this.b15_1;
  };
  protoOf(BooleanArrayBuilder).ay = function (requiredCapacity) {
    if (this.a15_1.length < requiredCapacity)
      this.a15_1 = copyOf_6(this.a15_1, coerceAtLeast(requiredCapacity, imul(this.a15_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).c15 = function (c) {
    this.hy();
    var tmp = this.a15_1;
    var _unary__edvuaz = this.b15_1;
    this.b15_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).yx = function () {
    return copyOf_6(this.a15_1, this.b15_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.i15_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).dp = function () {
    return this.i15_1;
  };
  protoOf(StringSerializer).j15 = function (encoder, value) {
    return encoder.jt(value);
  };
  protoOf(StringSerializer).ep = function (encoder, value) {
    return this.j15(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).fp = function (decoder) {
    return decoder.as();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.k15_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).dp = function () {
    return this.k15_1;
  };
  protoOf(BooleanSerializer).l15 = function (encoder, value) {
    return encoder.bt(value);
  };
  protoOf(BooleanSerializer).ep = function (encoder, value) {
    return this.l15(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).fp = function (decoder) {
    return decoder.sr();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.m15_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).dp = function () {
    return this.m15_1;
  };
  protoOf(IntSerializer).n15 = function (encoder, value) {
    return encoder.et(value);
  };
  protoOf(IntSerializer).ep = function (encoder, value) {
    return this.n15(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).fp = function (decoder) {
    return decoder.vr();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.o15_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).dp = function () {
    return this.o15_1;
  };
  protoOf(FloatSerializer).p15 = function (encoder, value) {
    return encoder.gt(value);
  };
  protoOf(FloatSerializer).ep = function (encoder, value) {
    return this.p15(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).fp = function (decoder) {
    return decoder.xr();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.q15_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).dp = function () {
    return this.q15_1;
  };
  protoOf(DoubleSerializer).r15 = function (encoder, value) {
    return encoder.ht(value);
  };
  protoOf(DoubleSerializer).ep = function (encoder, value) {
    return this.r15(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).fp = function (decoder) {
    return decoder.yr();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.s15_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).dp = function () {
    return this.s15_1;
  };
  protoOf(LongSerializer).t15 = function (encoder, value) {
    return encoder.ft(value);
  };
  protoOf(LongSerializer).ep = function (encoder, value) {
    return this.t15(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).fp = function (decoder) {
    return decoder.wr();
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
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.u15_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.u15_1 = serialName;
    this.v15_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).lq = function () {
    return this.u15_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).mq = function () {
    return this.v15_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).oq = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).qq = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).rq = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).uq = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).tq = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).sq = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.u15_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.u15_1 === other.u15_1 && equals(this.v15_1, other.v15_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.u15_1) + imul(31, this.v15_1.hashCode()) | 0;
  };
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().u2();
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var primitive = _iterator__ex2g4s.v();
      var primitiveName = primitive.dp().lq();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).o() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.w15_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).dp = function () {
    return this.w15_1;
  };
  protoOf(ByteSerializer).x15 = function (encoder, value) {
    return encoder.ct(value);
  };
  protoOf(ByteSerializer).ep = function (encoder, value) {
    return this.x15(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).fp = function (decoder) {
    return decoder.tr();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.y15_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).dp = function () {
    return this.y15_1;
  };
  protoOf(ShortSerializer).z15 = function (encoder, value) {
    return encoder.dt(value);
  };
  protoOf(ShortSerializer).ep = function (encoder, value) {
    return this.z15(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).fp = function (decoder) {
    return decoder.ur();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.a16_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).dp = function () {
    return this.a16_1;
  };
  protoOf(CharSerializer).b16 = function (encoder, value) {
    return encoder.it(value);
  };
  protoOf(CharSerializer).ep = function (encoder, value) {
    return this.b16(encoder, value instanceof Char ? value.w1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).c16 = function (decoder) {
    return decoder.zr();
  };
  protoOf(CharSerializer).fp = function (decoder) {
    return new Char(this.c16(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.d16_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).dp = function () {
    return this.d16_1.dp();
  };
  protoOf(UnitSerializer).e16 = function (encoder, value) {
    this.d16_1.vp(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).ep = function (encoder, value) {
    return this.e16(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).f16 = function (decoder) {
    this.d16_1.fp(decoder);
  };
  protoOf(UnitSerializer).fp = function (decoder) {
    this.f16(decoder);
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
  protoOf(NamedValueDecoder).i16 = function (_this__u8e3s4, index) {
    return this.k16(this.j16(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).k16 = function (nestedName) {
    var tmp0_elvis_lhs = this.n16();
    return this.o16(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).j16 = function (descriptor, index) {
    return descriptor.qq(index);
  };
  protoOf(NamedValueDecoder).o16 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).p16 = function () {
    return this.l16_1.r() ? '$' : joinToString(this.l16_1, '.', '$.');
  };
  function NamedValueEncoder() {
    TaggedEncoder.call(this);
  }
  protoOf(NamedValueEncoder).i16 = function (_this__u8e3s4, index) {
    return this.k16(this.j16(_this__u8e3s4, index));
  };
  protoOf(NamedValueEncoder).k16 = function (nestedName) {
    var tmp0_elvis_lhs = this.n16();
    return this.o16(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueEncoder).j16 = function (descriptor, index) {
    return descriptor.qq(index);
  };
  protoOf(NamedValueEncoder).o16 = function (parentName, childName) {
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
    $this.d17(tag);
    var r = block();
    if (!$this.m16_1) {
      $this.e17();
    }
    $this.m16_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.ds($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.dp().eq();
      var tmp;
      if (isNullabilitySupported || tmp0.qr()) {
        tmp = this$0.ds($deserializer, $previousValue);
      } else {
        tmp = tmp0.rr();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.l16_1 = ArrayList_init_$Create$_0();
    this.m16_1 = false;
  }
  protoOf(TaggedDecoder).us = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).q16 = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).r16 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).s16 = function (tag) {
    var tmp = this.q16(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).t16 = function (tag) {
    var tmp = this.q16(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).u16 = function (tag) {
    var tmp = this.q16(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).v16 = function (tag) {
    var tmp = this.q16(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).w16 = function (tag) {
    var tmp = this.q16(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).x16 = function (tag) {
    var tmp = this.q16(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).y16 = function (tag) {
    var tmp = this.q16(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).z16 = function (tag) {
    var tmp = this.q16(tag);
    return tmp instanceof Char ? tmp.w1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).a17 = function (tag) {
    var tmp = this.q16(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).b17 = function (tag, enumDescriptor) {
    var tmp = this.q16(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).c17 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.d17(tag);
    return this;
  };
  protoOf(TaggedDecoder).ds = function (deserializer, previousValue) {
    return this.es(deserializer);
  };
  protoOf(TaggedDecoder).cs = function (descriptor) {
    return this.c17(this.e17(), descriptor);
  };
  protoOf(TaggedDecoder).qr = function () {
    var tmp0_elvis_lhs = this.n16();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.r16(currentTag);
  };
  protoOf(TaggedDecoder).rr = function () {
    return null;
  };
  protoOf(TaggedDecoder).sr = function () {
    return this.s16(this.e17());
  };
  protoOf(TaggedDecoder).tr = function () {
    return this.t16(this.e17());
  };
  protoOf(TaggedDecoder).ur = function () {
    return this.u16(this.e17());
  };
  protoOf(TaggedDecoder).vr = function () {
    return this.v16(this.e17());
  };
  protoOf(TaggedDecoder).wr = function () {
    return this.w16(this.e17());
  };
  protoOf(TaggedDecoder).xr = function () {
    return this.x16(this.e17());
  };
  protoOf(TaggedDecoder).yr = function () {
    return this.y16(this.e17());
  };
  protoOf(TaggedDecoder).zr = function () {
    return this.z16(this.e17());
  };
  protoOf(TaggedDecoder).as = function () {
    return this.a17(this.e17());
  };
  protoOf(TaggedDecoder).bs = function (enumDescriptor) {
    return this.b17(this.e17(), enumDescriptor);
  };
  protoOf(TaggedDecoder).fs = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).gs = function (descriptor) {
  };
  protoOf(TaggedDecoder).hs = function (descriptor, index) {
    return this.s16(this.i16(descriptor, index));
  };
  protoOf(TaggedDecoder).is = function (descriptor, index) {
    return this.t16(this.i16(descriptor, index));
  };
  protoOf(TaggedDecoder).js = function (descriptor, index) {
    return this.u16(this.i16(descriptor, index));
  };
  protoOf(TaggedDecoder).ks = function (descriptor, index) {
    return this.v16(this.i16(descriptor, index));
  };
  protoOf(TaggedDecoder).ls = function (descriptor, index) {
    return this.w16(this.i16(descriptor, index));
  };
  protoOf(TaggedDecoder).ms = function (descriptor, index) {
    return this.x16(this.i16(descriptor, index));
  };
  protoOf(TaggedDecoder).ns = function (descriptor, index) {
    return this.y16(this.i16(descriptor, index));
  };
  protoOf(TaggedDecoder).os = function (descriptor, index) {
    return this.z16(this.i16(descriptor, index));
  };
  protoOf(TaggedDecoder).ps = function (descriptor, index) {
    return this.a17(this.i16(descriptor, index));
  };
  protoOf(TaggedDecoder).qs = function (descriptor, index) {
    return this.c17(this.i16(descriptor, index), descriptor.tq(index));
  };
  protoOf(TaggedDecoder).rs = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.i16(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).ts = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.i16(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).n16 = function () {
    return lastOrNull(this.l16_1);
  };
  protoOf(TaggedDecoder).d17 = function (name) {
    this.l16_1.b1(name);
  };
  protoOf(TaggedDecoder).e17 = function () {
    var r = this.l16_1.b3(get_lastIndex_0(this.l16_1));
    this.m16_1 = true;
    return r;
  };
  function encodeElement($this, desc, index) {
    var tag = $this.i16(desc, index);
    $this.d17(tag);
    return true;
  }
  function TaggedEncoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.g17_1 = ArrayList_init_$Create$_0();
  }
  protoOf(TaggedEncoder).us = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedEncoder).h17 = function (tag, value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(TaggedEncoder).i17 = function (tag) {
  };
  protoOf(TaggedEncoder).j17 = function (tag) {
    throw SerializationException_init_$Create$_0('null is not supported');
  };
  protoOf(TaggedEncoder).k17 = function (tag, value) {
    return this.h17(tag, value);
  };
  protoOf(TaggedEncoder).l17 = function (tag, value) {
    return this.h17(tag, value);
  };
  protoOf(TaggedEncoder).m17 = function (tag, value) {
    return this.h17(tag, value);
  };
  protoOf(TaggedEncoder).n17 = function (tag, value) {
    return this.h17(tag, value);
  };
  protoOf(TaggedEncoder).o17 = function (tag, value) {
    return this.h17(tag, value);
  };
  protoOf(TaggedEncoder).p17 = function (tag, value) {
    return this.h17(tag, value);
  };
  protoOf(TaggedEncoder).q17 = function (tag, value) {
    return this.h17(tag, value);
  };
  protoOf(TaggedEncoder).r17 = function (tag, value) {
    return this.h17(tag, new Char(value));
  };
  protoOf(TaggedEncoder).s17 = function (tag, value) {
    return this.h17(tag, value);
  };
  protoOf(TaggedEncoder).t17 = function (tag, enumDescriptor, ordinal) {
    return this.h17(tag, ordinal);
  };
  protoOf(TaggedEncoder).u17 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.d17(tag);
    return this;
  };
  protoOf(TaggedEncoder).lt = function (descriptor) {
    return this.u17(this.e17(), descriptor);
  };
  protoOf(TaggedEncoder).au = function () {
    return this.i17(this.w17());
  };
  protoOf(TaggedEncoder).at = function () {
    return this.j17(this.e17());
  };
  protoOf(TaggedEncoder).bt = function (value) {
    return this.q17(this.e17(), value);
  };
  protoOf(TaggedEncoder).ct = function (value) {
    return this.l17(this.e17(), value);
  };
  protoOf(TaggedEncoder).dt = function (value) {
    return this.m17(this.e17(), value);
  };
  protoOf(TaggedEncoder).et = function (value) {
    return this.k17(this.e17(), value);
  };
  protoOf(TaggedEncoder).ft = function (value) {
    return this.n17(this.e17(), value);
  };
  protoOf(TaggedEncoder).gt = function (value) {
    return this.o17(this.e17(), value);
  };
  protoOf(TaggedEncoder).ht = function (value) {
    return this.p17(this.e17(), value);
  };
  protoOf(TaggedEncoder).it = function (value) {
    return this.r17(this.e17(), value);
  };
  protoOf(TaggedEncoder).jt = function (value) {
    return this.s17(this.e17(), value);
  };
  protoOf(TaggedEncoder).kt = function (enumDescriptor, index) {
    return this.t17(this.e17(), enumDescriptor, index);
  };
  protoOf(TaggedEncoder).fs = function (descriptor) {
    return this;
  };
  protoOf(TaggedEncoder).gs = function (descriptor) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.g17_1.r()) {
      this.e17();
    }
    this.v17(descriptor);
  };
  protoOf(TaggedEncoder).v17 = function (descriptor) {
  };
  protoOf(TaggedEncoder).mt = function (descriptor, index, value) {
    return this.q17(this.i16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).nt = function (descriptor, index, value) {
    return this.l17(this.i16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).ot = function (descriptor, index, value) {
    return this.m17(this.i16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).pt = function (descriptor, index, value) {
    return this.k17(this.i16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).qt = function (descriptor, index, value) {
    return this.n17(this.i16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).rt = function (descriptor, index, value) {
    return this.o17(this.i16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).st = function (descriptor, index, value) {
    return this.p17(this.i16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).tt = function (descriptor, index, value) {
    return this.r17(this.i16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).ut = function (descriptor, index, value) {
    return this.s17(this.i16(descriptor, index), value);
  };
  protoOf(TaggedEncoder).vt = function (descriptor, index) {
    return this.u17(this.i16(descriptor, index), descriptor.tq(index));
  };
  protoOf(TaggedEncoder).wt = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.xt(serializer, value);
    }
  };
  protoOf(TaggedEncoder).yt = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.zt(serializer, value);
    }
  };
  protoOf(TaggedEncoder).w17 = function () {
    return last(this.g17_1);
  };
  protoOf(TaggedEncoder).n16 = function () {
    return lastOrNull(this.g17_1);
  };
  protoOf(TaggedEncoder).d17 = function (name) {
    this.g17_1.b1(name);
  };
  protoOf(TaggedEncoder).e17 = function () {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.g17_1.r()) {
      tmp = this.g17_1.b3(get_lastIndex_0(this.g17_1));
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
    this.x17_1 = key;
    this.y17_1 = value;
  }
  protoOf(MapEntry).m1 = function () {
    return this.x17_1;
  };
  protoOf(MapEntry).n1 = function () {
    return this.y17_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.x17_1) + ', value=' + toString_0(this.y17_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.x17_1 == null ? 0 : hashCode(this.x17_1);
    result = imul(result, 31) + (this.y17_1 == null ? 0 : hashCode(this.y17_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    if (!equals(this.x17_1, other.x17_1))
      return false;
    if (!equals(this.y17_1, other.y17_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.rp('key', $keySerializer.dp());
      $this$buildSerialDescriptor.rp('value', $valueSerializer.dp());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.b18_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).dp = function () {
    return this.b18_1;
  };
  protoOf(MapEntrySerializer_0).c18 = function (_this__u8e3s4) {
    return _this__u8e3s4.m1();
  };
  protoOf(MapEntrySerializer_0).d18 = function (_this__u8e3s4) {
    return this.c18((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).e18 = function (_this__u8e3s4) {
    return _this__u8e3s4.n1();
  };
  protoOf(MapEntrySerializer_0).f18 = function (_this__u8e3s4) {
    return this.e18((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).g18 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.rp('first', $keySerializer.dp());
      $this$buildClassSerialDescriptor.rp('second', $valueSerializer.dp());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.m18_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).dp = function () {
    return this.m18_1;
  };
  protoOf(PairSerializer_0).n18 = function (_this__u8e3s4) {
    return _this__u8e3s4.sf_1;
  };
  protoOf(PairSerializer_0).d18 = function (_this__u8e3s4) {
    return this.n18(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).o18 = function (_this__u8e3s4) {
    return _this__u8e3s4.tf_1;
  };
  protoOf(PairSerializer_0).f18 = function (_this__u8e3s4) {
    return this.o18(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).g18 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.ss($this.s18_1, 0, $this.p18_1);
    var b = composite.ss($this.s18_1, 1, $this.q18_1);
    var c = composite.ss($this.s18_1, 2, $this.r18_1);
    composite.gs($this.s18_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.ws($this.s18_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.ss($this.s18_1, 0, $this.p18_1);
          break;
        case 1:
          b = composite.ss($this.s18_1, 1, $this.q18_1);
          break;
        case 2:
          c = composite.ss($this.s18_1, 2, $this.r18_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.gs($this.s18_1);
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
      $this$buildClassSerialDescriptor.rp('first', this$0.p18_1.dp());
      $this$buildClassSerialDescriptor.rp('second', this$0.q18_1.dp());
      $this$buildClassSerialDescriptor.rp('third', this$0.r18_1.dp());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.p18_1 = aSerializer;
    this.q18_1 = bSerializer;
    this.r18_1 = cSerializer;
    var tmp = this;
    tmp.s18_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).dp = function () {
    return this.s18_1;
  };
  protoOf(TripleSerializer_0).t18 = function (encoder, value) {
    var structuredEncoder = encoder.fs(this.s18_1);
    structuredEncoder.wt(this.s18_1, 0, this.p18_1, value.hn_1);
    structuredEncoder.wt(this.s18_1, 1, this.q18_1, value.in_1);
    structuredEncoder.wt(this.s18_1, 2, this.r18_1, value.jn_1);
    structuredEncoder.gs(this.s18_1);
  };
  protoOf(TripleSerializer_0).ep = function (encoder, value) {
    return this.t18(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).fp = function (decoder) {
    var composite = decoder.fs(this.s18_1);
    if (composite.vs()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.h18_1 = keySerializer;
    this.i18_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).j18 = function (encoder, value) {
    var structuredEncoder = encoder.fs(this.dp());
    structuredEncoder.wt(this.dp(), 0, this.h18_1, this.d18(value));
    structuredEncoder.wt(this.dp(), 1, this.i18_1, this.f18(value));
    structuredEncoder.gs(this.dp());
  };
  protoOf(KeyValueSerializer).ep = function (encoder, value) {
    return this.j18(encoder, value);
  };
  protoOf(KeyValueSerializer).fp = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.dp();
    var composite = decoder.fs(descriptor);
    var tmp$ret$1;
    $l$block: {
      if (composite.vs()) {
        var key = composite.ss(this.dp(), 0, this.h18_1);
        var value = composite.ss(this.dp(), 1, this.i18_1);
        tmp$ret$1 = this.g18(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.ws(this.dp());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.ss(this.dp(), 0, this.h18_1);
            break;
          case 1:
            value_0 = composite.ss(this.dp(), 1, this.i18_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      tmp$ret$1 = this.g18(key_0, value_0);
    }
    var result = tmp$ret$1;
    composite.gs(descriptor);
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
    this.u18_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_6(Companion_getInstance_3()));
  }
  protoOf(ULongSerializer).dp = function () {
    return this.u18_1;
  };
  protoOf(ULongSerializer).v18 = function (encoder, value) {
    var tmp = encoder.lt(this.u18_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.ft(tmp$ret$0);
  };
  protoOf(ULongSerializer).ep = function (encoder, value) {
    return this.v18(encoder, value instanceof ULong ? value.no_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).w18 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.cs(this.u18_1).wr();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).fp = function (decoder) {
    return new ULong(this.w18(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.x18_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_7(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).dp = function () {
    return this.x18_1;
  };
  protoOf(UIntSerializer).y18 = function (encoder, value) {
    var tmp = encoder.lt(this.x18_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.et(tmp$ret$0);
  };
  protoOf(UIntSerializer).ep = function (encoder, value) {
    return this.y18(encoder, value instanceof UInt ? value.do_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).z18 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.cs(this.x18_1).vr();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).fp = function (decoder) {
    return new UInt(this.z18(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.a19_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_5(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).dp = function () {
    return this.a19_1;
  };
  protoOf(UByteSerializer).b19 = function (encoder, value) {
    var tmp = encoder.lt(this.a19_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.ct(tmp$ret$0);
  };
  protoOf(UByteSerializer).ep = function (encoder, value) {
    return this.b19(encoder, value instanceof UByte ? value.tn_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).c19 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.cs(this.a19_1).tr();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).fp = function (decoder) {
    return new UByte(this.c19(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.d19_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).dp = function () {
    return this.d19_1;
  };
  protoOf(UShortSerializer).e19 = function (encoder, value) {
    var tmp = encoder.lt(this.d19_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.dt(tmp$ret$0);
  };
  protoOf(UShortSerializer).ep = function (encoder, value) {
    return this.e19(encoder, value instanceof UShort ? value.xo_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).f19 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.cs(this.d19_1).ur();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).fp = function (decoder) {
    return new UShort(this.f19(decoder));
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
  protoOf(SerializersModule).aq = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.bq(kClass, typeArgumentsSerializers) : $super.bq.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.h19_1 = class2ContextualFactory;
    this.i19_1 = polyBase2Serializers;
    this.j19_1 = polyBase2DefaultSerializerProvider;
    this.k19_1 = polyBase2NamedSerializers;
    this.l19_1 = polyBase2DefaultDeserializerProvider;
    this.m19_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).zp = function () {
    return this.m19_1;
  };
  protoOf(SerialModuleImpl).eu = function (baseClass, value) {
    if (!baseClass.ra(value))
      return null;
    var tmp0_safe_receiver = this.i19_1.s2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.j19_1.s2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).du = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.k19_1.s2(baseClass);
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
    var tmp_1 = this.l19_1.s2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).bq = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.h19_1.s2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n19(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).g19 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.h19_1.l1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.n1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.q19_1;
        collector.r19(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.p19(kclass, serial.o19_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.i19_1.l1().t();
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
        collector.s19(tmp_1, tmp_2, tmp$ret$15);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.j19_1.l1().t();
    while (_iterator__ex2g4s_2.u()) {
      var element_2 = _iterator__ex2g4s_2.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.n1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.t19(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.l19_1.l1().t();
    while (_iterator__ex2g4s_3.u()) {
      var element_3 = _iterator__ex2g4s_3.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.n1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.u19(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.q19_1 = serializer;
  }
  protoOf(Argless).n19 = function (typeArgumentsSerializers) {
    return this.q19_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.q19_1, this.q19_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.q19_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.o19_1 = provider;
  }
  protoOf(WithTypeArguments).n19 = function (typeArgumentsSerializers) {
    return this.o19_1(typeArgumentsSerializers);
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
    tmp.v19_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.w19_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.x19_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.y19_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.z19_1 = HashMap_init_$Create$();
    this.a1a_1 = false;
  }
  protoOf(SerializersModuleBuilder).r19 = function (kClass, serializer) {
    return this.b1a(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).p19 = function (kClass, provider) {
    return this.b1a(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).s19 = function (baseClass, actualClass, actualSerializer) {
    this.c1a(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).t19 = function (baseClass, defaultSerializerProvider) {
    this.d1a(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).u19 = function (baseClass, defaultDeserializerProvider) {
    this.e1a(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).f1a = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.v19_1.s2(forClass);
      if (!(previous == null) && !equals(previous, provider)) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + toString(forClass) + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.v19_1.v2(forClass, provider);
    if (isInterface_0(forClass))
      this.a1a_1 = true;
  };
  protoOf(SerializersModuleBuilder).b1a = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.f1a(forClass, provider, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.f1a.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).d1a = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.x19_1.s2(baseClass);
    if (!(previous == null) && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.x19_1.v2(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).e1a = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.z19_1.s2(baseClass);
    if (!(previous == null) && !equals(previous, defaultDeserializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.z19_1.v2(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).g1a = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.dp().lq();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.w19_1;
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
    var this_1 = this.y19_1;
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
        names.w2(previousSerializer.dp().lq());
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
  protoOf(SerializersModuleBuilder).c1a = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.g1a(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.g1a.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).yx = function () {
    return new SerialModuleImpl(this.v19_1, this.w19_1, this.x19_1, this.y19_1, this.z19_1, this.a1a_1);
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
    this.h1a_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.h1a_1.equals(tmp0_other_with_cast.h1a_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.h1a_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.h1a_1) + ')';
  };
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp0_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().ib()) {
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
    return rootClass.equals(PrimitiveClasses_getInstance().qb());
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
          var tmp_1 = assocObject.v10(args.slice());
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
    return mapOf([to(PrimitiveClasses_getInstance().rb(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_9(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().ub(), CharArraySerializer()), to(PrimitiveClasses_getInstance().pb(), serializer_10(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().zb(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().ob(), serializer_11(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().yb(), FloatArraySerializer()), to(getKClass(Long), serializer_6(Companion_getInstance_3())), to(get_longArrayClass(), LongArraySerializer()), to(getKClass(ULong), serializer_1(Companion_getInstance_4())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().mb(), serializer_7(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().xb(), IntArraySerializer()), to(getKClass(UInt), serializer_2(Companion_getInstance_5())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().lb(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().wb(), ShortArraySerializer()), to(getKClass(UShort), serializer_4(Companion_getInstance_6())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().kb(), serializer_5(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().vb(), ByteArraySerializer()), to(getKClass(UByte), serializer_3(Companion_getInstance_7())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().jb(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().tb(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().ib(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Instant), serializer_15(Companion_getInstance_0())), to(getKClass(Uuid), serializer_16(Companion_getInstance_1()))]);
  }
  function get_isInterfaceHack(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().ib())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function createCache$1($factory) {
    this.i1a_1 = $factory;
  }
  protoOf(createCache$1).cq = function (key) {
    return this.i1a_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.j1a_1 = $factory;
  }
  protoOf(createParametrizedCache$1).dq = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.j1a_1(key, types);
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
  protoOf(SerialDescriptorImpl).eq = get_isNullable;
  protoOf(SerialDescriptorImpl).nq = get_isInline;
  protoOf(AbstractDecoder).ss = decodeSerializableElement$default;
  protoOf(AbstractDecoder).es = decodeSerializableValue;
  protoOf(AbstractDecoder).vs = decodeSequentially;
  protoOf(AbstractDecoder).xs = decodeCollectionSize;
  protoOf(AbstractEncoder).au = encodeNotNullMark;
  protoOf(AbstractEncoder).bu = beginCollection;
  protoOf(AbstractEncoder).xt = encodeSerializableValue;
  protoOf(AbstractEncoder).zt = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).cu = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).eq = get_isNullable;
  protoOf(ListLikeDescriptor).nq = get_isInline;
  protoOf(ListLikeDescriptor).pq = get_annotations;
  protoOf(MapLikeDescriptor).eq = get_isNullable;
  protoOf(MapLikeDescriptor).nq = get_isInline;
  protoOf(MapLikeDescriptor).pq = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).eq = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).nq = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).l10 = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).eq = get_isNullable;
  protoOf(NothingSerialDescriptor).nq = get_isInline;
  protoOf(NothingSerialDescriptor).pq = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).eq = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).nq = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).pq = get_annotations;
  protoOf(TaggedDecoder).ss = decodeSerializableElement$default;
  protoOf(TaggedDecoder).es = decodeSerializableValue;
  protoOf(TaggedDecoder).vs = decodeSequentially;
  protoOf(TaggedDecoder).xs = decodeCollectionSize;
  protoOf(TaggedEncoder).bu = beginCollection;
  protoOf(TaggedEncoder).xt = encodeSerializableValue;
  protoOf(TaggedEncoder).zt = encodeNullableSerializableValue;
  protoOf(TaggedEncoder).cu = shouldEncodeElementDefault;
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
