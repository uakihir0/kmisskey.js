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
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForInterface = kotlin_kotlin.$_$.na;
  var VOID = kotlin_kotlin.$_$.b;
  var getKClassFromExpression = kotlin_kotlin.$_$.bc;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.h4;
  var Unit_instance = kotlin_kotlin.$_$.u4;
  var emptyList = kotlin_kotlin.$_$.f6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.dg;
  var KProperty1 = kotlin_kotlin.$_$.hc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ga;
  var toString = kotlin_kotlin.$_$.nb;
  var initMetadataForClass = kotlin_kotlin.$_$.ja;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var captureStack = kotlin_kotlin.$_$.u9;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.h1;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.j1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.l1;
  var IllegalArgumentException = kotlin_kotlin.$_$.af;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.n5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.o2;
  var THROW_CCE = kotlin_kotlin.$_$.hf;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.n2;
  var isInterface = kotlin_kotlin.$_$.ya;
  var KClass = kotlin_kotlin.$_$.ec;
  var Triple = kotlin_kotlin.$_$.if;
  var getKClass = kotlin_kotlin.$_$.cc;
  var Pair = kotlin_kotlin.$_$.ef;
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
  var Result = kotlin_kotlin.$_$.ff;
  var ensureNotNull = kotlin_kotlin.$_$.yf;
  var equals = kotlin_kotlin.$_$.da;
  var getStringHashCode = kotlin_kotlin.$_$.ha;
  var isBlank = kotlin_kotlin.$_$.zc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var toList = kotlin_kotlin.$_$.u7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var toHashSet = kotlin_kotlin.$_$.r7;
  var toBooleanArray = kotlin_kotlin.$_$.p7;
  var withIndex = kotlin_kotlin.$_$.a8;
  var to = kotlin_kotlin.$_$.kg;
  var toMap = kotlin_kotlin.$_$.w7;
  var lazy_0 = kotlin_kotlin.$_$.eg;
  var contentEquals = kotlin_kotlin.$_$.o5;
  var initMetadataForObject = kotlin_kotlin.$_$.pa;
  var Long = kotlin_kotlin.$_$.cf;
  var Char = kotlin_kotlin.$_$.se;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.c2;
  var Duration = kotlin_kotlin.$_$.ne;
  var Companion_getInstance = kotlin_kotlin.$_$.k4;
  var Instant = kotlin_kotlin.$_$.oe;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.l4;
  var Uuid = kotlin_kotlin.$_$.pe;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.m4;
  var toIntOrNull = kotlin_kotlin.$_$.zd;
  var hashCode = kotlin_kotlin.$_$.ia;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var isArray = kotlin_kotlin.$_$.qa;
  var arrayIterator = kotlin_kotlin.$_$.s9;
  var asList = kotlin_kotlin.$_$.l5;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.i;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.s;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var until = kotlin_kotlin.$_$.xb;
  var step = kotlin_kotlin.$_$.wb;
  var getValue = kotlin_kotlin.$_$.n6;
  var longArray = kotlin_kotlin.$_$.eb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ka;
  var get_lastIndex = kotlin_kotlin.$_$.u6;
  var shiftLeft = kotlin_kotlin.$_$.m9;
  var bitwiseOr = kotlin_kotlin.$_$.z8;
  var equalsLong = kotlin_kotlin.$_$.f9;
  var invert = kotlin_kotlin.$_$.h9;
  var countTrailingZeroBits = kotlin_kotlin.$_$.wf;
  var indexOf = kotlin_kotlin.$_$.o6;
  var contentToString = kotlin_kotlin.$_$.s5;
  var Enum = kotlin_kotlin.$_$.xe;
  var joinToString = kotlin_kotlin.$_$.r6;
  var toString_0 = kotlin_kotlin.$_$.jg;
  var KTypeParameter = kotlin_kotlin.$_$.ic;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.m;
  var booleanArray = kotlin_kotlin.$_$.t9;
  var emptyMap = kotlin_kotlin.$_$.g6;
  var contentHashCode = kotlin_kotlin.$_$.r5;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.c4;
  var isByteArray = kotlin_kotlin.$_$.sa;
  var coerceAtLeast = kotlin_kotlin.$_$.sb;
  var copyOf = kotlin_kotlin.$_$.y5;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.n4;
  var isCharArray = kotlin_kotlin.$_$.ta;
  var charArray = kotlin_kotlin.$_$.w9;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.d4;
  var isDoubleArray = kotlin_kotlin.$_$.va;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.e4;
  var isFloatArray = kotlin_kotlin.$_$.wa;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.o4;
  var isLongArray = kotlin_kotlin.$_$.za;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.s4;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.o3;
  var ULongArray = kotlin_kotlin.$_$.nf;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.k3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.h3;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.m3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.i3;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.f4;
  var isIntArray = kotlin_kotlin.$_$.xa;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.r4;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.f3;
  var UIntArray = kotlin_kotlin.$_$.lf;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.b3;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.y2;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.d3;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.z2;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.g4;
  var isShortArray = kotlin_kotlin.$_$.bb;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.t4;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.x3;
  var UShortArray = kotlin_kotlin.$_$.pf;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.t3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.q3;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.v3;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.r3;
  var Companion_getInstance_7 = kotlin_kotlin.$_$.q4;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.w2;
  var UByteArray = kotlin_kotlin.$_$.jf;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.t2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.p2;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.u2;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.q2;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.b4;
  var isBooleanArray = kotlin_kotlin.$_$.ra;
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
  var trimIndent = kotlin_kotlin.$_$.ke;
  var Unit = kotlin_kotlin.$_$.rf;
  var charSequenceLength = kotlin_kotlin.$_$.z9;
  var lastOrNull = kotlin_kotlin.$_$.w6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.v6;
  var last = kotlin_kotlin.$_$.x6;
  var ULong = kotlin_kotlin.$_$.of;
  var UInt = kotlin_kotlin.$_$.mf;
  var UByte = kotlin_kotlin.$_$.kf;
  var UShort = kotlin_kotlin.$_$.qf;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.fg;
  var asSequence = kotlin_kotlin.$_$.m5;
  var get_js = kotlin_kotlin.$_$.db;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.j4;
  var findAssociatedObject = kotlin_kotlin.$_$.a;
  var get_indices = kotlin_kotlin.$_$.q6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var get_indices_0 = kotlin_kotlin.$_$.p6;
  var mapOf = kotlin_kotlin.$_$.b7;
  var Companion_instance = kotlin_kotlin.$_$.p4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l2;
  var createFailure = kotlin_kotlin.$_$.xf;
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
    return deserializer.mn(this);
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
    return $super === VOID ? this.xq(descriptor, index, deserializer, previousValue) : $super.xq.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.lq(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.ln(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.kn().ko();
    if (isNullabilitySupported) {
      return this.ds(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.gr();
    } else {
      this.gs();
      this.ds(serializer, value);
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
    return this.v17(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
    var tmp0_elvis_lhs = _this__u8e3s4.nn(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.on());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.pn(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(getKClassFromExpression(value), _this__u8e3s4.on());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.yn('type', serializer_0(StringCompanionObject_instance).kn());
      $this$buildSerialDescriptor.yn('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.zn_1.z9() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.sn_1 = this$0.ao_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.zn_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return function (p0) {
      return p0.kn();
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.zn_1 = baseClass;
    this.ao_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.bo_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).on = function () {
    return this.zn_1;
  };
  protoOf(PolymorphicSerializer).kn = function () {
    var tmp0 = this.bo_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.v();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.zn_1) + ')';
  };
  function SealedClassSerializer$_get_descriptor_$ref_m511rz() {
    return function (p0) {
      return p0.kn();
    };
  }
  function SealedClassSerializer() {
  }
  protoOf(SealedClassSerializer).kn = function () {
    var tmp0 = this.do_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, SealedClassSerializer$_get_descriptor_$ref_m511rz(), null);
    return tmp0.v();
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
    MissingFieldException.call($this, missingFields, missingFields.n() === 1 ? "Field '" + missingFields.m(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing", null);
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
    this.eo_1 = missingFields;
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
    var isNullable = type.pa();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.oa();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      var tmp$ret$0 = typeOrThrow(item);
      destination.g(tmp$ret$0);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.l()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.go(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.fo()) {
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
    if (typeArguments.l()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.go(rootClass) : tmp0_elvis_lhs;
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
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.ho(rootClass, serializers) : tmp3_elvis_lhs;
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
      var _iterator__ex2g4s = typeArguments.i();
      while (_iterator__ex2g4s.j()) {
        var item = _iterator__ex2g4s.k();
        var tmp$ret$0 = serializer(_this__u8e3s4, item);
        destination.g(tmp$ret$0);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s_0 = typeArguments.i();
      while (_iterator__ex2g4s_0.j()) {
        var item_0 = _iterator__ex2g4s_0.k();
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$3 = tmp_0;
        destination_0.g(tmp$ret$3);
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
      tmp = new ArrayListSerializer(serializers.m(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.m(0));
    } else if (_this__u8e3s4.equals(getKClass(KtSet)) || (_this__u8e3s4.equals(getKClass(KtMutableSet)) || _this__u8e3s4.equals(getKClass(LinkedHashSet)))) {
      tmp = new LinkedHashSetSerializer(serializers.m(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.m(0), serializers.m(1));
    } else if (_this__u8e3s4.equals(getKClass(KtMap)) || (_this__u8e3s4.equals(getKClass(KtMutableMap)) || _this__u8e3s4.equals(getKClass(LinkedHashMap)))) {
      tmp = new LinkedHashMapSerializer(serializers.m(0), serializers.m(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.m(0), serializers.m(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.m(0), serializers.m(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.m(0), serializers.m(1), serializers.m(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.m(0));
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
      return $typeArguments.m(0).na();
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
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().io(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().io(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().jo(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().jo(clazz, types);
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
      return $types.m(0).na();
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
      return $types.m(0).na();
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
    if (_this__u8e3s4.kn().ko()) {
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.go(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.kn();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.po_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.lo_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.oo_1 = original;
    this.po_1 = kClass;
    this.qo_1 = this.oo_1.ro() + '<' + this.po_1.z9() + '>';
  }
  protoOf(ContextDescriptor).ro = function () {
    return this.qo_1;
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
    return equals(this.oo_1, another.oo_1) && another.po_1.equals(this.po_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.po_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.qo_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.po_1) + ', original: ' + toString(this.oo_1) + ')';
  };
  protoOf(ContextDescriptor).so = function () {
    return this.oo_1.so();
  };
  protoOf(ContextDescriptor).ko = function () {
    return this.oo_1.ko();
  };
  protoOf(ContextDescriptor).to = function () {
    return this.oo_1.to();
  };
  protoOf(ContextDescriptor).uo = function () {
    return this.oo_1.uo();
  };
  protoOf(ContextDescriptor).vo = function () {
    return this.oo_1.vo();
  };
  protoOf(ContextDescriptor).wo = function (index) {
    return this.oo_1.wo(index);
  };
  protoOf(ContextDescriptor).xo = function (name) {
    return this.oo_1.xo(name);
  };
  protoOf(ContextDescriptor).yo = function (index) {
    return this.oo_1.yo(index);
  };
  protoOf(ContextDescriptor).zo = function (index) {
    return this.oo_1.zo(index);
  };
  protoOf(ContextDescriptor).ap = function (index) {
    return this.oo_1.ap(index);
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
    this.cp_1 = $this_elementNames;
    this.bp_1 = $this_elementNames.uo();
  }
  protoOf(elementNames$1).j = function () {
    return this.bp_1 > 0;
  };
  protoOf(elementNames$1).k = function () {
    var tmp = this.cp_1.uo();
    var _unary__edvuaz = this.bp_1;
    this.bp_1 = _unary__edvuaz - 1 | 0;
    return this.cp_1.wo(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.dp_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).i = function () {
    return new elementNames$1(this.dp_1);
  };
  function elementDescriptors$1($this_elementDescriptors) {
    this.fp_1 = $this_elementDescriptors;
    this.ep_1 = $this_elementDescriptors.uo();
  }
  protoOf(elementDescriptors$1).j = function () {
    return this.ep_1 > 0;
  };
  protoOf(elementDescriptors$1).k = function () {
    var tmp = this.fp_1.uo();
    var _unary__edvuaz = this.ep_1;
    this.ep_1 = _unary__edvuaz - 1 | 0;
    return this.fp_1.zo(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.gp_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).i = function () {
    return new elementDescriptors$1(this.gp_1);
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
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.tn_1.n(), toList(typeParameters), sdBuilder);
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
    this.qn_1 = serialName;
    this.rn_1 = false;
    this.sn_1 = emptyList();
    this.tn_1 = ArrayList_init_$Create$_0();
    this.un_1 = HashSet_init_$Create$();
    this.vn_1 = ArrayList_init_$Create$_0();
    this.wn_1 = ArrayList_init_$Create$_0();
    this.xn_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).hp = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.un_1.g(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.qn_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.tn_1.g(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.vn_1.g(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.wn_1.g(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.xn_1.g(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).yn = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.hp(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.hp.call(this, elementName, descriptor, annotations, isOptional);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.tn_1.n(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.tp_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.v();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.sp_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return function (p0) {
      return _get__hashCode__tgwhef(p0);
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.ip_1 = serialName;
    this.jp_1 = kind;
    this.kp_1 = elementsCount;
    this.lp_1 = builder.sn_1;
    this.mp_1 = toHashSet(builder.tn_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.tn_1;
    tmp.np_1 = copyToArray(this_0);
    this.op_1 = compactArray(builder.vn_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.wn_1;
    tmp_0.pp_1 = copyToArray(this_1);
    this.qp_1 = toBooleanArray(builder.xn_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.np_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      var tmp$ret$2 = to(item.bf_1, item.af_1);
      destination.g(tmp$ret$2);
    }
    tmp_1.rp_1 = toMap(destination);
    this.sp_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.tp_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).ro = function () {
    return this.ip_1;
  };
  protoOf(SerialDescriptorImpl).so = function () {
    return this.jp_1;
  };
  protoOf(SerialDescriptorImpl).uo = function () {
    return this.kp_1;
  };
  protoOf(SerialDescriptorImpl).vo = function () {
    return this.lp_1;
  };
  protoOf(SerialDescriptorImpl).up = function () {
    return this.mp_1;
  };
  protoOf(SerialDescriptorImpl).wo = function (index) {
    return getChecked(this.np_1, index);
  };
  protoOf(SerialDescriptorImpl).xo = function (name) {
    var tmp0_elvis_lhs = this.rp_1.w1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).yo = function (index) {
    return getChecked(this.pp_1, index);
  };
  protoOf(SerialDescriptorImpl).zo = function (index) {
    return getChecked(this.op_1, index);
  };
  protoOf(SerialDescriptorImpl).ap = function (index) {
    return getChecked_0(this.qp_1, index);
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
      if (!(this.ro() === other.ro())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.sp_1, other.sp_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.uo() === other.uo())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.uo();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.zo(index).ro() === other.zo(index).ro())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.zo(index).so(), other.zo(index).so())) {
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
    return ensureNotNull(getKClassFromExpression(this).z9());
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
  protoOf(AbstractDecoder).vp = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).wp = function () {
    return true;
  };
  protoOf(AbstractDecoder).xp = function () {
    return null;
  };
  protoOf(AbstractDecoder).yp = function () {
    var tmp = this.vp();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).zp = function () {
    var tmp = this.vp();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).aq = function () {
    var tmp = this.vp();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).bq = function () {
    var tmp = this.vp();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).cq = function () {
    var tmp = this.vp();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).dq = function () {
    var tmp = this.vp();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).eq = function () {
    var tmp = this.vp();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).fq = function () {
    var tmp = this.vp();
    return tmp instanceof Char ? tmp.e1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).gq = function () {
    var tmp = this.vp();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).hq = function (enumDescriptor) {
    var tmp = this.vp();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).iq = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).jq = function (deserializer, previousValue) {
    return this.kq(deserializer);
  };
  protoOf(AbstractDecoder).lq = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).mq = function (descriptor) {
  };
  protoOf(AbstractDecoder).nq = function (descriptor, index) {
    return this.yp();
  };
  protoOf(AbstractDecoder).oq = function (descriptor, index) {
    return this.zp();
  };
  protoOf(AbstractDecoder).pq = function (descriptor, index) {
    return this.aq();
  };
  protoOf(AbstractDecoder).qq = function (descriptor, index) {
    return this.bq();
  };
  protoOf(AbstractDecoder).rq = function (descriptor, index) {
    return this.cq();
  };
  protoOf(AbstractDecoder).sq = function (descriptor, index) {
    return this.dq();
  };
  protoOf(AbstractDecoder).tq = function (descriptor, index) {
    return this.eq();
  };
  protoOf(AbstractDecoder).uq = function (descriptor, index) {
    return this.fq();
  };
  protoOf(AbstractDecoder).vq = function (descriptor, index) {
    return this.gq();
  };
  protoOf(AbstractDecoder).wq = function (descriptor, index) {
    return this.iq(descriptor.zo(index));
  };
  protoOf(AbstractDecoder).xq = function (descriptor, index, deserializer, previousValue) {
    return this.jq(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).zq = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.kn().ko();
    var tmp;
    if (isNullabilitySupported || this.wp()) {
      tmp = this.jq(deserializer, previousValue);
    } else {
      tmp = this.xp();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).lq = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).mq = function (descriptor) {
  };
  protoOf(AbstractEncoder).er = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).fr = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).gr = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).hr = function (value) {
    return this.fr(value);
  };
  protoOf(AbstractEncoder).ir = function (value) {
    return this.fr(value);
  };
  protoOf(AbstractEncoder).jr = function (value) {
    return this.fr(value);
  };
  protoOf(AbstractEncoder).kr = function (value) {
    return this.fr(value);
  };
  protoOf(AbstractEncoder).lr = function (value) {
    return this.fr(value);
  };
  protoOf(AbstractEncoder).mr = function (value) {
    return this.fr(value);
  };
  protoOf(AbstractEncoder).nr = function (value) {
    return this.fr(value);
  };
  protoOf(AbstractEncoder).or = function (value) {
    return this.fr(new Char(value));
  };
  protoOf(AbstractEncoder).pr = function (value) {
    return this.fr(value);
  };
  protoOf(AbstractEncoder).qr = function (enumDescriptor, index) {
    return this.fr(index);
  };
  protoOf(AbstractEncoder).rr = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).sr = function (descriptor, index, value) {
    if (this.er(descriptor, index)) {
      this.hr(value);
    }
  };
  protoOf(AbstractEncoder).tr = function (descriptor, index, value) {
    if (this.er(descriptor, index)) {
      this.ir(value);
    }
  };
  protoOf(AbstractEncoder).ur = function (descriptor, index, value) {
    if (this.er(descriptor, index)) {
      this.jr(value);
    }
  };
  protoOf(AbstractEncoder).vr = function (descriptor, index, value) {
    if (this.er(descriptor, index)) {
      this.kr(value);
    }
  };
  protoOf(AbstractEncoder).wr = function (descriptor, index, value) {
    if (this.er(descriptor, index)) {
      this.lr(value);
    }
  };
  protoOf(AbstractEncoder).xr = function (descriptor, index, value) {
    if (this.er(descriptor, index)) {
      this.mr(value);
    }
  };
  protoOf(AbstractEncoder).yr = function (descriptor, index, value) {
    if (this.er(descriptor, index)) {
      this.nr(value);
    }
  };
  protoOf(AbstractEncoder).zr = function (descriptor, index, value) {
    if (this.er(descriptor, index)) {
      this.or(value);
    }
  };
  protoOf(AbstractEncoder).as = function (descriptor, index, value) {
    if (this.er(descriptor, index)) {
      this.pr(value);
    }
  };
  protoOf(AbstractEncoder).bs = function (descriptor, index) {
    return this.er(descriptor, index) ? this.rr(descriptor.zo(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).cs = function (descriptor, index, serializer, value) {
    if (this.er(descriptor, index)) {
      this.ds(serializer, value);
    }
  };
  protoOf(AbstractEncoder).es = function (descriptor, index, serializer, value) {
    if (this.er(descriptor, index)) {
      this.fs(serializer, value);
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
    var klassName = compositeDecoder.vq($this.kn(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.yq($this.kn(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).co = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer_0(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.kn();
    var composite = encoder.lq(descriptor);
    composite.as(this.kn(), 0, actualSerializer.kn().ro());
    var tmp = this.kn();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.cs(tmp, 1, tmp$ret$0, value);
    composite.mq(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).ln = function (encoder, value) {
    return this.co(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).mn = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.kn();
    var composite = decoder.lq(descriptor);
    var tmp$ret$0;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.br()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.cr(this.kn());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.vq(this.kn(), index);
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
            value = composite.yq(this.kn(), index, serializer);
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
    composite.mq(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).nn = function (decoder, klassName) {
    return decoder.ar().js(this.on(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).pn = function (encoder, value) {
    return encoder.ar().ks(this.on(), value);
  };
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.z9() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.z9() + "' has to be sealed and '@Serializable'."));
  }
  function throwSubtypeNotRegistered_0(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.z9();
    throwSubtypeNotRegistered(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.ls_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).kn = function () {
    return this.ls_1;
  };
  protoOf(NothingSerializer_0).ms = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).ln = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.ms(encoder, tmp);
  };
  protoOf(NothingSerializer_0).mn = function (decoder) {
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
    this.ns_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).kn = function () {
    return this.ns_1;
  };
  protoOf(DurationSerializer).os = function (encoder, value) {
    encoder.pr(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).ln = function (encoder, value) {
    return this.os(encoder, value instanceof Duration ? value.bk_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).ps = function (decoder) {
    return Companion_getInstance().ak(decoder.gq());
  };
  protoOf(DurationSerializer).mn = function (decoder) {
    return new Duration(this.ps(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.qs_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).kn = function () {
    return this.qs_1;
  };
  protoOf(InstantSerializer).rs = function (encoder, value) {
    encoder.pr(value.toString());
  };
  protoOf(InstantSerializer).ln = function (encoder, value) {
    return this.rs(encoder, value instanceof Instant ? value : THROW_CCE());
  };
  protoOf(InstantSerializer).mn = function (decoder) {
    return Companion_getInstance_0().hk(decoder.gq());
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.ss_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).kn = function () {
    return this.ss_1;
  };
  protoOf(UuidSerializer).ts = function (encoder, value) {
    encoder.pr(value.toString());
  };
  protoOf(UuidSerializer).ln = function (encoder, value) {
    return this.ts(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).mn = function (decoder) {
    return Companion_getInstance_1().nl(decoder.gq());
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
  protoOf(ArrayClassDesc).ro = function () {
    return 'kotlin.Array';
  };
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).ro = function () {
    return 'kotlin.collections.ArrayList';
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).ro = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).ro = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.ws_1 = elementDescriptor;
    this.xs_1 = 1;
  }
  protoOf(ListLikeDescriptor).so = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).uo = function () {
    return this.xs_1;
  };
  protoOf(ListLikeDescriptor).wo = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).xo = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).ap = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.ro() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).yo = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.ro() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).zo = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.ro() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.ws_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.ws_1, other.ws_1) && this.ro() === other.ro())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.ws_1), 31) + getStringHashCode(this.ro()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.ro() + '(' + toString(this.ws_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.at_1 = serialName;
    this.bt_1 = keyDescriptor;
    this.ct_1 = valueDescriptor;
    this.dt_1 = 2;
  }
  protoOf(MapLikeDescriptor).ro = function () {
    return this.at_1;
  };
  protoOf(MapLikeDescriptor).so = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).uo = function () {
    return this.dt_1;
  };
  protoOf(MapLikeDescriptor).wo = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).xo = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).ap = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.ro() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).yo = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.ro() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).zo = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.ro() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.bt_1;
        break;
      case 1:
        tmp = this.ct_1;
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
    if (!(this.ro() === other.ro()))
      return false;
    if (!equals(this.bt_1, other.bt_1))
      return false;
    if (!equals(this.ct_1, other.ct_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.ro());
    result = imul(31, result) + hashCode(this.bt_1) | 0;
    result = imul(31, result) + hashCode(this.ct_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.ro() + '(' + toString(this.bt_1) + ', ' + toString(this.ct_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.kt_1 = primitive.ro() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).ro = function () {
    return this.kt_1;
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.mt_1 = kClass;
    this.nt_1 = new ArrayClassDesc(eSerializer.kn());
  }
  protoOf(ReferenceArraySerializer).kn = function () {
    return this.nt_1;
  };
  protoOf(ReferenceArraySerializer).ot = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).pt = function (_this__u8e3s4) {
    return this.ot((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).qt = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).rt = function (_this__u8e3s4) {
    return this.qt((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).st = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).tt = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(ReferenceArraySerializer).ut = function (_this__u8e3s4) {
    return this.tt(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).vt = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.mt_1);
  };
  protoOf(ReferenceArraySerializer).wt = function (_this__u8e3s4) {
    return this.vt(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).xt = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).yt = function (_this__u8e3s4) {
    return this.xt((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).zt = function (_this__u8e3s4, size) {
    return _this__u8e3s4.y4(size);
  };
  protoOf(ReferenceArraySerializer).au = function (_this__u8e3s4, size) {
    return this.zt(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).bu = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.e2(index, element);
  };
  protoOf(ReferenceArraySerializer).cu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.bu(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.ku_1 = new ArrayListClassDesc(element.kn());
  }
  protoOf(ArrayListSerializer).kn = function () {
    return this.ku_1;
  };
  protoOf(ArrayListSerializer).st = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).lu = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(ArrayListSerializer).ut = function (_this__u8e3s4) {
    return this.lu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).mu = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).wt = function (_this__u8e3s4) {
    return this.mu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).nu = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).yt = function (_this__u8e3s4) {
    return this.nu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).ou = function (_this__u8e3s4, size) {
    return _this__u8e3s4.y4(size);
  };
  protoOf(ArrayListSerializer).au = function (_this__u8e3s4, size) {
    return this.ou(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).pu = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.e2(index, element);
  };
  protoOf(ArrayListSerializer).cu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.pu(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.vu_1 = new LinkedHashMapClassDesc(kSerializer.kn(), vSerializer.kn());
  }
  protoOf(LinkedHashMapSerializer).kn = function () {
    return this.vu_1;
  };
  protoOf(LinkedHashMapSerializer).wu = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(LinkedHashMapSerializer).pt = function (_this__u8e3s4) {
    return this.wu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).xu = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.t().i();
  };
  protoOf(LinkedHashMapSerializer).rt = function (_this__u8e3s4) {
    return this.xu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).st = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).yu = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.n(), 2);
  };
  protoOf(LinkedHashMapSerializer).ut = function (_this__u8e3s4) {
    return this.yu(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).zu = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).wt = function (_this__u8e3s4) {
    return this.zu(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).av = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).yt = function (_this__u8e3s4) {
    return this.av((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).bv = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).au = function (_this__u8e3s4, size) {
    return this.bv(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.hv_1 = new HashSetClassDesc(eSerializer.kn());
  }
  protoOf(HashSetSerializer).kn = function () {
    return this.hv_1;
  };
  protoOf(HashSetSerializer).st = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).iv = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(HashSetSerializer).ut = function (_this__u8e3s4) {
    return this.iv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).jv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).wt = function (_this__u8e3s4) {
    return this.jv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).kv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).yt = function (_this__u8e3s4) {
    return this.kv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).lv = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).au = function (_this__u8e3s4, size) {
    return this.lv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).mv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.g(element);
  };
  protoOf(HashSetSerializer).cu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.mv(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.ov_1 = new LinkedHashSetClassDesc(eSerializer.kn());
  }
  protoOf(LinkedHashSetSerializer).kn = function () {
    return this.ov_1;
  };
  protoOf(LinkedHashSetSerializer).st = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).pv = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(LinkedHashSetSerializer).ut = function (_this__u8e3s4) {
    return this.pv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).qv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).wt = function (_this__u8e3s4) {
    return this.qv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).kv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).yt = function (_this__u8e3s4) {
    return this.kv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).rv = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).au = function (_this__u8e3s4, size) {
    return this.rv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).sv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.g(element);
  };
  protoOf(LinkedHashSetSerializer).cu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.sv(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.vv_1 = new HashMapClassDesc(kSerializer.kn(), vSerializer.kn());
  }
  protoOf(HashMapSerializer).kn = function () {
    return this.vv_1;
  };
  protoOf(HashMapSerializer).wu = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(HashMapSerializer).pt = function (_this__u8e3s4) {
    return this.wu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).xu = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.t().i();
  };
  protoOf(HashMapSerializer).rt = function (_this__u8e3s4) {
    return this.xu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).st = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).wv = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.n(), 2);
  };
  protoOf(HashMapSerializer).ut = function (_this__u8e3s4) {
    return this.wv(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).xv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).wt = function (_this__u8e3s4) {
    return this.xv(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).av = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).yt = function (_this__u8e3s4) {
    return this.av((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).yv = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).au = function (_this__u8e3s4, size) {
    return this.yv(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.du_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).eu = function (encoder, value) {
    var size = this.pt(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.kn();
    var composite = encoder.hs(descriptor, size);
    var iterator = this.rt(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.cs(this.kn(), index, this.du_1, iterator.k());
      }
       while (inductionVariable < size);
    composite.mq(descriptor);
  };
  protoOf(CollectionLikeSerializer).ln = function (encoder, value) {
    return this.eu(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).fu = function (decoder, builder, startIndex, size) {
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
        this.gu(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).gu = function (decoder, index, builder, checkIndex) {
    this.cu(builder, index, decoder.yq(this.kn(), index, this.du_1));
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).ru = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(CollectionSerializer).pt = function (_this__u8e3s4) {
    return this.ru((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).su = function (_this__u8e3s4) {
    return _this__u8e3s4.i();
  };
  protoOf(CollectionSerializer).rt = function (_this__u8e3s4) {
    return this.su((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.cv_1 = keySerializer;
    this.dv_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).ev = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.fv(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).fu = function (decoder, builder, startIndex, size) {
    return this.ev(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).fv = function (decoder, index, builder, checkIndex) {
    var key = decoder.yq(this.kn(), index, this.cv_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.cr(this.kn());
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
    if (builder.u1(key)) {
      var tmp_2 = this.dv_1.kn().so();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.xq(this.kn(), vIndex, this.dv_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.yq(this.kn(), vIndex, this.dv_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.z1(key, value);
  };
  protoOf(MapLikeSerializer).gu = function (decoder, index, builder, checkIndex) {
    return this.fv(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).eu = function (encoder, value) {
    var size = this.pt(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.kn();
    var composite = encoder.hs(descriptor, size);
    var iterator = this.rt(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = iterator;
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'kotlin.collections.component1' call
      var k = element.u();
      // Inline function 'kotlin.collections.component2' call
      var v = element.v();
      var tmp = this.kn();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.cs(tmp, _unary__edvuaz, this.cv_1, k);
      var tmp_0 = this.kn();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.cs(tmp_0, _unary__edvuaz_0, this.dv_1, v);
    }
    composite.mq(descriptor);
  };
  protoOf(MapLikeSerializer).ln = function (encoder, value) {
    return this.eu(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function readSize($this, decoder, builder) {
    var size = decoder.dr($this.kn());
    $this.au(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).iu = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.yt(previous);
    var builder = tmp1_elvis_lhs == null ? this.st() : tmp1_elvis_lhs;
    var startIndex = this.ut(builder);
    var compositeDecoder = decoder.lq(this.kn());
    if (compositeDecoder.br()) {
      this.fu(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.cr(this.kn());
        if (index === -1)
          break $l$loop;
        this.hu(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.mq(this.kn());
    return this.wt(builder);
  };
  protoOf(AbstractCollectionSerializer).mn = function (decoder) {
    return this.iu(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).hu = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.gu(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.gu.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.aw_1 = new PrimitiveArrayDescriptor(primitiveSerializer.kn());
  }
  protoOf(PrimitiveArraySerializer).kn = function () {
    return this.aw_1;
  };
  protoOf(PrimitiveArraySerializer).bw = function (_this__u8e3s4) {
    return _this__u8e3s4.cw();
  };
  protoOf(PrimitiveArraySerializer).ut = function (_this__u8e3s4) {
    return this.bw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).dw = function (_this__u8e3s4) {
    return _this__u8e3s4.ew();
  };
  protoOf(PrimitiveArraySerializer).wt = function (_this__u8e3s4) {
    return this.dw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).fw = function (_this__u8e3s4, size) {
    return _this__u8e3s4.gw(size);
  };
  protoOf(PrimitiveArraySerializer).au = function (_this__u8e3s4, size) {
    return this.fw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).hw = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).rt = function (_this__u8e3s4) {
    return this.hw((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).iw = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).cu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.iw(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).st = function () {
    return this.yt(this.jw());
  };
  protoOf(PrimitiveArraySerializer).mw = function (encoder, value) {
    var size = this.pt(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.aw_1;
    var composite = encoder.hs(descriptor, size);
    this.lw(composite, value, size);
    composite.mq(descriptor);
  };
  protoOf(PrimitiveArraySerializer).ln = function (encoder, value) {
    return this.mw(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).eu = function (encoder, value) {
    return this.mw(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).mn = function (decoder) {
    return this.iu(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).nw = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.cw() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.gw(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.gw.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.ow_1 = longArray(0);
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
    $this.sw_1[slot] = bitwiseOr($this.sw_1[slot], shiftLeft(new Long(1, 0), offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.sw_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.sw_1[slot];
        while (!equalsLong(slotMarks, new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(invert(slotMarks));
          slotMarks = bitwiseOr(slotMarks, shiftLeft(new Long(1, 0), indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.qw_1($this.pw_1, index)) {
            $this.sw_1[slot] = slotMarks;
            return index;
          }
        }
        $this.sw_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.pw_1 = descriptor;
    this.qw_1 = readIfAbsent;
    var elementsCount = this.pw_1.uo();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = shiftLeft(new Long(-1, -1), elementsCount);
      }
      tmp.rw_1 = tmp_0;
      this.sw_1 = Companion_getInstance_8().ow_1;
    } else {
      this.rw_1 = new Long(0, 0);
      this.sw_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).tw = function (index) {
    if (index < 64) {
      this.rw_1 = bitwiseOr(this.rw_1, shiftLeft(new Long(1, 0), index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).uw = function () {
    var elementsCount = this.pw_1.uo();
    while (!equalsLong(this.rw_1, new Long(-1, -1))) {
      var index = countTrailingZeroBits(invert(this.rw_1));
      this.rw_1 = bitwiseOr(this.rw_1, shiftLeft(new Long(1, 0), index));
      if (this.qw_1(this.pw_1, index)) {
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
    var d = new EnumDescriptor(serialName, $this.vw_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.vw_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.kx(element.g2_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.ww_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer$_get_descriptor_$ref_j67dlw() {
    return function (p0) {
      return p0.kn();
    };
  }
  function EnumSerializer(serialName, values) {
    this.vw_1 = values;
    this.ww_1 = null;
    var tmp = this;
    tmp.xw_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).kn = function () {
    var tmp0 = this.xw_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, EnumSerializer$_get_descriptor_$ref_j67dlw(), null);
    return tmp0.v();
  };
  protoOf(EnumSerializer).lx = function (encoder, value) {
    var index = indexOf(this.vw_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.kn().ro() + ', ' + ('must be one of ' + contentToString(this.vw_1)));
    }
    encoder.qr(this.kn(), index);
  };
  protoOf(EnumSerializer).ln = function (encoder, value) {
    return this.lx(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).mn = function (decoder) {
    var index = decoder.hq(this.kn());
    if (!(0 <= index ? index <= (this.vw_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.kn().ro() + ' enum values, ' + ('values size is ' + this.vw_1.length));
    }
    return this.vw_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.kn().ro() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.zx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('elementDescriptors', 1, tmp, EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a(), null);
    return tmp0.v();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.wo(tmp_2), OBJECT_getInstance(), []);
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
    this.yx_1 = ENUM_getInstance();
    var tmp = this;
    tmp.zx_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).so = function () {
    return this.yx_1;
  };
  protoOf(EnumDescriptor).zo = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.so() === ENUM_getInstance()))
      return false;
    if (!(this.ro() === other.ro()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.ro() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.ro());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = get_elementNames(this).i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
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
    this.oy_1 = true;
  }
  protoOf(InlineClassDescriptor).to = function () {
    return this.oy_1;
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
      if (!(this.ro() === other.ro())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.oy_1 && contentEquals(this.ay(), other.ay()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.uo() === other.uo())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.uo();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.zo(index).ro() === other.zo(index).ro())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.zo(index).so(), other.zo(index).so())) {
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
    this.py_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).qy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.py_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).kn = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).ln = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).mn = function (decoder) {
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
    this.sy_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).ar = function () {
    return this.sy_1;
  };
  protoOf(NoOpEncoder).fr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).gr = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).hr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ir = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).jr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).kr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).lr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).mr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).nr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).or = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).pr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).qr = function (enumDescriptor, index) {
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
    this.ty_1 = OBJECT_getInstance();
    this.uy_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).so = function () {
    return this.ty_1;
  };
  protoOf(NothingSerialDescriptor).ro = function () {
    return this.uy_1;
  };
  protoOf(NothingSerialDescriptor).uo = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).wo = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).xo = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).ap = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).zo = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).yo = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.uy_1) + imul(31, this.ty_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.vy_1 = serializer;
    this.wy_1 = new SerialDescriptorForNullable(this.vy_1.kn());
  }
  protoOf(NullableSerializer).kn = function () {
    return this.wy_1;
  };
  protoOf(NullableSerializer).xy = function (encoder, value) {
    if (!(value == null)) {
      encoder.gs();
      encoder.ds(this.vy_1, value);
    } else {
      encoder.gr();
    }
  };
  protoOf(NullableSerializer).ln = function (encoder, value) {
    return this.xy(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).mn = function (decoder) {
    return decoder.wp() ? decoder.kq(this.vy_1) : decoder.xp();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.vy_1, other.vy_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.vy_1);
  };
  function SerialDescriptorForNullable(original) {
    this.lo_1 = original;
    this.mo_1 = this.lo_1.ro() + '?';
    this.no_1 = cachedSerialNames(this.lo_1);
  }
  protoOf(SerialDescriptorForNullable).ro = function () {
    return this.mo_1;
  };
  protoOf(SerialDescriptorForNullable).up = function () {
    return this.no_1;
  };
  protoOf(SerialDescriptorForNullable).ko = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.lo_1, other.lo_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.lo_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.lo_1), 31);
  };
  protoOf(SerialDescriptorForNullable).so = function () {
    return this.lo_1.so();
  };
  protoOf(SerialDescriptorForNullable).to = function () {
    return this.lo_1.to();
  };
  protoOf(SerialDescriptorForNullable).uo = function () {
    return this.lo_1.uo();
  };
  protoOf(SerialDescriptorForNullable).vo = function () {
    return this.lo_1.vo();
  };
  protoOf(SerialDescriptorForNullable).wo = function (index) {
    return this.lo_1.wo(index);
  };
  protoOf(SerialDescriptorForNullable).xo = function (name) {
    return this.lo_1.xo(name);
  };
  protoOf(SerialDescriptorForNullable).yo = function (index) {
    return this.lo_1.yo(index);
  };
  protoOf(SerialDescriptorForNullable).zo = function (index) {
    return this.lo_1.zo(index);
  };
  protoOf(SerialDescriptorForNullable).ap = function (index) {
    return this.lo_1.ap(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.sn_1 = this$0.zy_1;
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
      return p0.kn();
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.yy_1 = objectInstance;
    this.zy_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.az_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).kn = function () {
    var tmp0 = this.az_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.v();
  };
  protoOf(ObjectSerializer).co = function (encoder, value) {
    encoder.lq(this.kn()).mq(this.kn());
  };
  protoOf(ObjectSerializer).ln = function (encoder, value) {
    return this.co(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).mn = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.kn();
    var composite = decoder.lq(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      if (composite.br()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.cr(this.kn());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$0;
    composite.mq(descriptor);
    return this.yy_1;
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.na();
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
    var tmp0 = _this__u8e3s4.fi_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.fi_1);
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
    if (!(_this__u8e3s4 == null || _this__u8e3s4.l())) {
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
      return _this__u8e3s4.up();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.uo());
    var inductionVariable = 0;
    var last = _this__u8e3s4.uo();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.wo(i);
        result.g(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.z9();
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
          var element = descriptor.wo(i);
          missingFields.g(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.ro());
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
                var element = descriptor.wo(imul(maskSlot, 32) + i | 0);
                missingFields.g(element);
              }
              missingFieldsBits = missingFieldsBits >>> 1 | 0;
            }
             while (inductionVariable_0 < 32);
        }
      }
       while (inductionVariable <= last);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.ro());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.hx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.v();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.jx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.v();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.cx_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.cx_1[i];
        indices.z1(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.zw_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qy();
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
      var tmp0_safe_receiver = this$0.zw_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ry();
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
          var tmp$ret$0 = item.kn();
          destination.g(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return function (p0) {
      return p0.ay();
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.ay());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.yw_1 = serialName;
    this.zw_1 = generatedSerializer;
    this.ax_1 = elementsCount;
    this.bx_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.ax_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.cx_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.ax_1;
    tmp_3.dx_1 = Array(size);
    this.ex_1 = null;
    this.fx_1 = booleanArray(this.ax_1);
    this.gx_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.hx_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.ix_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.jx_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).ro = function () {
    return this.yw_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).uo = function () {
    return this.ax_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).so = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).vo = function () {
    var tmp0_elvis_lhs = this.ex_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).up = function () {
    return this.gx_1.x1();
  };
  protoOf(PluginGeneratedSerialDescriptor).ay = function () {
    var tmp0 = this.ix_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.v();
  };
  protoOf(PluginGeneratedSerialDescriptor).by = function (name, isOptional) {
    this.bx_1 = this.bx_1 + 1 | 0;
    this.cx_1[this.bx_1] = name;
    this.fx_1[this.bx_1] = isOptional;
    this.dx_1[this.bx_1] = null;
    if (this.bx_1 === (this.ax_1 - 1 | 0)) {
      this.gx_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).kx = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.by(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.by.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).zo = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).kn();
  };
  protoOf(PluginGeneratedSerialDescriptor).ap = function (index) {
    return getChecked_0(this.fx_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).yo = function (index) {
    var tmp0_elvis_lhs = getChecked(this.dx_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).wo = function (index) {
    return getChecked(this.cx_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).xo = function (name) {
    var tmp0_elvis_lhs = this.gx_1.w1(name);
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
      if (!(this.ro() === other.ro())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.ay(), other.ay())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.uo() === other.uo())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.uo();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.zo(index).ro() === other.zo(index).ro())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.zo(index).so(), other.zo(index).so())) {
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
    var result = getStringHashCode(_this__u8e3s4.ro());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.ro();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.i();
    while (_iterator__ex2g4s_0.j()) {
      var element_0 = _iterator__ex2g4s_0.k();
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.so();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.uo());
    var tmp_0 = _this__u8e3s4.ro() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.wo(i) + ': ' + $this_toStringImpl.zo(i).ro();
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
  protoOf(ByteArraySerializer_0).ez = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).pt = function (_this__u8e3s4) {
    return this.ez((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).fz = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.fz((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).jw = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).gz = function (decoder, index, builder, checkIndex) {
    builder.jz(decoder.oq(this.aw_1, index));
  };
  protoOf(ByteArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.gz(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).kw = function (decoder, index, builder, checkIndex) {
    return this.gz(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).kz = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.tr(this.aw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).lw = function (encoder, content, size) {
    return this.kz(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.hz_1 = bufferWithData;
    this.iz_1 = bufferWithData.length;
    this.gw(10);
  }
  protoOf(ByteArrayBuilder).cw = function () {
    return this.iz_1;
  };
  protoOf(ByteArrayBuilder).gw = function (requiredCapacity) {
    if (this.hz_1.length < requiredCapacity)
      this.hz_1 = copyOf(this.hz_1, coerceAtLeast(requiredCapacity, imul(this.hz_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).jz = function (c) {
    this.nw();
    var tmp = this.hz_1;
    var _unary__edvuaz = this.iz_1;
    this.iz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).ew = function () {
    return copyOf(this.hz_1, this.iz_1);
  };
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_2()));
  }
  protoOf(CharArraySerializer_0).nz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).pt = function (_this__u8e3s4) {
    return this.nz((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).oz = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.oz((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).jw = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).pz = function (decoder, index, builder, checkIndex) {
    builder.sz(decoder.uq(this.aw_1, index));
  };
  protoOf(CharArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.pz(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).kw = function (decoder, index, builder, checkIndex) {
    return this.pz(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).tz = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.zr(this.aw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).lw = function (encoder, content, size) {
    return this.tz(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(DoubleArraySerializer_0).wz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).pt = function (_this__u8e3s4) {
    return this.wz((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).xz = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.xz((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).jw = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).yz = function (decoder, index, builder, checkIndex) {
    builder.b10(decoder.tq(this.aw_1, index));
  };
  protoOf(DoubleArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.yz(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).kw = function (decoder, index, builder, checkIndex) {
    return this.yz(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).c10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.yr(this.aw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).lw = function (encoder, content, size) {
    return this.c10(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(FloatArraySerializer_0).f10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).pt = function (_this__u8e3s4) {
    return this.f10((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).g10 = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.g10((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).jw = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).h10 = function (decoder, index, builder, checkIndex) {
    builder.k10(decoder.sq(this.aw_1, index));
  };
  protoOf(FloatArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.h10(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).kw = function (decoder, index, builder, checkIndex) {
    return this.h10(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).l10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.xr(this.aw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).lw = function (encoder, content, size) {
    return this.l10(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(LongArraySerializer_0).o10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).pt = function (_this__u8e3s4) {
    return this.o10((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).p10 = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.p10((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).jw = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).q10 = function (decoder, index, builder, checkIndex) {
    builder.t10(decoder.rq(this.aw_1, index));
  };
  protoOf(LongArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.q10(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).kw = function (decoder, index, builder, checkIndex) {
    return this.q10(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).u10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.wr(this.aw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).lw = function (encoder, content, size) {
    return this.u10(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(ULongArraySerializer_0).x10 = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).pt = function (_this__u8e3s4) {
    return this.x10(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.xm_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).y10 = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.y10(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.xm_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).z10 = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).jw = function () {
    return new ULongArray(this.z10());
  };
  protoOf(ULongArraySerializer_0).a11 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.wq(this.aw_1, index).cq();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.d11(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.a11(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).kw = function (decoder, index, builder, checkIndex) {
    return this.a11(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).e11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.bs(this.aw_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.lr(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).lw = function (encoder, content, size) {
    return this.e11(encoder, content instanceof ULongArray ? content.xm_1 : THROW_CCE(), size);
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
  protoOf(IntArraySerializer_0).h11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).pt = function (_this__u8e3s4) {
    return this.h11((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).i11 = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.i11((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).jw = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).j11 = function (decoder, index, builder, checkIndex) {
    builder.m11(decoder.qq(this.aw_1, index));
  };
  protoOf(IntArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.j11(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).kw = function (decoder, index, builder, checkIndex) {
    return this.j11(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).n11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.vr(this.aw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).lw = function (encoder, content, size) {
    return this.n11(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UIntArraySerializer_0).q11 = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).pt = function (_this__u8e3s4) {
    return this.q11(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.mm_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).r11 = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.r11(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.mm_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).s11 = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).jw = function () {
    return new UIntArray(this.s11());
  };
  protoOf(UIntArraySerializer_0).t11 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.wq(this.aw_1, index).bq();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.w11(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.t11(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).kw = function (decoder, index, builder, checkIndex) {
    return this.t11(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).x11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.bs(this.aw_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.kr(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).lw = function (encoder, content, size) {
    return this.x11(encoder, content instanceof UIntArray ? content.mm_1 : THROW_CCE(), size);
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
  protoOf(ShortArraySerializer_0).a12 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).pt = function (_this__u8e3s4) {
    return this.a12((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).b12 = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.b12((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).jw = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).c12 = function (decoder, index, builder, checkIndex) {
    builder.f12(decoder.pq(this.aw_1, index));
  };
  protoOf(ShortArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.c12(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).kw = function (decoder, index, builder, checkIndex) {
    return this.c12(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).g12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ur(this.aw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).lw = function (encoder, content, size) {
    return this.g12(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UShortArraySerializer_0).j12 = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).pt = function (_this__u8e3s4) {
    return this.j12(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.in_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).k12 = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.k12(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.in_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).l12 = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).jw = function () {
    return new UShortArray(this.l12());
  };
  protoOf(UShortArraySerializer_0).m12 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.wq(this.aw_1, index).aq();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.p12(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.m12(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).kw = function (decoder, index, builder, checkIndex) {
    return this.m12(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).q12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.bs(this.aw_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.jr(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).lw = function (encoder, content, size) {
    return this.q12(encoder, content instanceof UShortArray ? content.in_1 : THROW_CCE(), size);
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
  protoOf(UByteArraySerializer_0).t12 = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).pt = function (_this__u8e3s4) {
    return this.t12(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.bm_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).u12 = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.u12(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.bm_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).v12 = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).jw = function () {
    return new UByteArray(this.v12());
  };
  protoOf(UByteArraySerializer_0).w12 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.wq(this.aw_1, index).zp();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.z12(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.w12(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).kw = function (decoder, index, builder, checkIndex) {
    return this.w12(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).a13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.bs(this.aw_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.ir(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).lw = function (encoder, content, size) {
    return this.a13(encoder, content instanceof UByteArray ? content.bm_1 : THROW_CCE(), size);
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
  protoOf(BooleanArraySerializer_0).d13 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).pt = function (_this__u8e3s4) {
    return this.d13((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).e13 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.e13((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).jw = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).f13 = function (decoder, index, builder, checkIndex) {
    builder.i13(decoder.nq(this.aw_1, index));
  };
  protoOf(BooleanArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.f13(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).kw = function (decoder, index, builder, checkIndex) {
    return this.f13(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).j13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.sr(this.aw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).lw = function (encoder, content, size) {
    return this.j13(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.qz_1 = bufferWithData;
    this.rz_1 = bufferWithData.length;
    this.gw(10);
  }
  protoOf(CharArrayBuilder).cw = function () {
    return this.rz_1;
  };
  protoOf(CharArrayBuilder).gw = function (requiredCapacity) {
    if (this.qz_1.length < requiredCapacity)
      this.qz_1 = copyOf_0(this.qz_1, coerceAtLeast(requiredCapacity, imul(this.qz_1.length, 2)));
  };
  protoOf(CharArrayBuilder).sz = function (c) {
    this.nw();
    var tmp = this.qz_1;
    var _unary__edvuaz = this.rz_1;
    this.rz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).ew = function () {
    return copyOf_0(this.qz_1, this.rz_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.zz_1 = bufferWithData;
    this.a10_1 = bufferWithData.length;
    this.gw(10);
  }
  protoOf(DoubleArrayBuilder).cw = function () {
    return this.a10_1;
  };
  protoOf(DoubleArrayBuilder).gw = function (requiredCapacity) {
    if (this.zz_1.length < requiredCapacity)
      this.zz_1 = copyOf_1(this.zz_1, coerceAtLeast(requiredCapacity, imul(this.zz_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).b10 = function (c) {
    this.nw();
    var tmp = this.zz_1;
    var _unary__edvuaz = this.a10_1;
    this.a10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).ew = function () {
    return copyOf_1(this.zz_1, this.a10_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.i10_1 = bufferWithData;
    this.j10_1 = bufferWithData.length;
    this.gw(10);
  }
  protoOf(FloatArrayBuilder).cw = function () {
    return this.j10_1;
  };
  protoOf(FloatArrayBuilder).gw = function (requiredCapacity) {
    if (this.i10_1.length < requiredCapacity)
      this.i10_1 = copyOf_2(this.i10_1, coerceAtLeast(requiredCapacity, imul(this.i10_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).k10 = function (c) {
    this.nw();
    var tmp = this.i10_1;
    var _unary__edvuaz = this.j10_1;
    this.j10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).ew = function () {
    return copyOf_2(this.i10_1, this.j10_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.r10_1 = bufferWithData;
    this.s10_1 = bufferWithData.length;
    this.gw(10);
  }
  protoOf(LongArrayBuilder).cw = function () {
    return this.s10_1;
  };
  protoOf(LongArrayBuilder).gw = function (requiredCapacity) {
    if (this.r10_1.length < requiredCapacity)
      this.r10_1 = copyOf_3(this.r10_1, coerceAtLeast(requiredCapacity, imul(this.r10_1.length, 2)));
  };
  protoOf(LongArrayBuilder).t10 = function (c) {
    this.nw();
    var tmp = this.r10_1;
    var _unary__edvuaz = this.s10_1;
    this.s10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).ew = function () {
    return copyOf_3(this.r10_1, this.s10_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.b11_1 = bufferWithData;
    this.c11_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.gw(10);
  }
  protoOf(ULongArrayBuilder).cw = function () {
    return this.c11_1;
  };
  protoOf(ULongArrayBuilder).gw = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.b11_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.b11_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.b11_1), 2));
      tmp.b11_1 = _ULongArray___init__impl__twm1l3_0(copyOf_3(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).d11 = function (c) {
    this.nw();
    var tmp = this.b11_1;
    var _unary__edvuaz = this.c11_1;
    this.c11_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).k13 = function () {
    var tmp0 = this.b11_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.c11_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_3(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).ew = function () {
    return new ULongArray(this.k13());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.k11_1 = bufferWithData;
    this.l11_1 = bufferWithData.length;
    this.gw(10);
  }
  protoOf(IntArrayBuilder).cw = function () {
    return this.l11_1;
  };
  protoOf(IntArrayBuilder).gw = function (requiredCapacity) {
    if (this.k11_1.length < requiredCapacity)
      this.k11_1 = copyOf_4(this.k11_1, coerceAtLeast(requiredCapacity, imul(this.k11_1.length, 2)));
  };
  protoOf(IntArrayBuilder).m11 = function (c) {
    this.nw();
    var tmp = this.k11_1;
    var _unary__edvuaz = this.l11_1;
    this.l11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).ew = function () {
    return copyOf_4(this.k11_1, this.l11_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.u11_1 = bufferWithData;
    this.v11_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.gw(10);
  }
  protoOf(UIntArrayBuilder).cw = function () {
    return this.v11_1;
  };
  protoOf(UIntArrayBuilder).gw = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.u11_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.u11_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.u11_1), 2));
      tmp.u11_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_4(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).w11 = function (c) {
    this.nw();
    var tmp = this.u11_1;
    var _unary__edvuaz = this.v11_1;
    this.v11_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).l13 = function () {
    var tmp0 = this.u11_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.v11_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_4(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).ew = function () {
    return new UIntArray(this.l13());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.d12_1 = bufferWithData;
    this.e12_1 = bufferWithData.length;
    this.gw(10);
  }
  protoOf(ShortArrayBuilder).cw = function () {
    return this.e12_1;
  };
  protoOf(ShortArrayBuilder).gw = function (requiredCapacity) {
    if (this.d12_1.length < requiredCapacity)
      this.d12_1 = copyOf_5(this.d12_1, coerceAtLeast(requiredCapacity, imul(this.d12_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).f12 = function (c) {
    this.nw();
    var tmp = this.d12_1;
    var _unary__edvuaz = this.e12_1;
    this.e12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).ew = function () {
    return copyOf_5(this.d12_1, this.e12_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.n12_1 = bufferWithData;
    this.o12_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.gw(10);
  }
  protoOf(UShortArrayBuilder).cw = function () {
    return this.o12_1;
  };
  protoOf(UShortArrayBuilder).gw = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.n12_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.n12_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.n12_1), 2));
      tmp.n12_1 = _UShortArray___init__impl__9b26ef_0(copyOf_5(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).p12 = function (c) {
    this.nw();
    var tmp = this.n12_1;
    var _unary__edvuaz = this.o12_1;
    this.o12_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).m13 = function () {
    var tmp0 = this.n12_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.o12_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_5(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).ew = function () {
    return new UShortArray(this.m13());
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.x12_1 = bufferWithData;
    this.y12_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.gw(10);
  }
  protoOf(UByteArrayBuilder).cw = function () {
    return this.y12_1;
  };
  protoOf(UByteArrayBuilder).gw = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.x12_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.x12_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.x12_1), 2));
      tmp.x12_1 = _UByteArray___init__impl__ip4y9n_0(copyOf(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).z12 = function (c) {
    this.nw();
    var tmp = this.x12_1;
    var _unary__edvuaz = this.y12_1;
    this.y12_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).n13 = function () {
    var tmp0 = this.x12_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.y12_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).ew = function () {
    return new UByteArray(this.n13());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.g13_1 = bufferWithData;
    this.h13_1 = bufferWithData.length;
    this.gw(10);
  }
  protoOf(BooleanArrayBuilder).cw = function () {
    return this.h13_1;
  };
  protoOf(BooleanArrayBuilder).gw = function (requiredCapacity) {
    if (this.g13_1.length < requiredCapacity)
      this.g13_1 = copyOf_6(this.g13_1, coerceAtLeast(requiredCapacity, imul(this.g13_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).i13 = function (c) {
    this.nw();
    var tmp = this.g13_1;
    var _unary__edvuaz = this.h13_1;
    this.h13_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).ew = function () {
    return copyOf_6(this.g13_1, this.h13_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.o13_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).kn = function () {
    return this.o13_1;
  };
  protoOf(StringSerializer).p13 = function (encoder, value) {
    return encoder.pr(value);
  };
  protoOf(StringSerializer).ln = function (encoder, value) {
    return this.p13(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).mn = function (decoder) {
    return decoder.gq();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.q13_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).kn = function () {
    return this.q13_1;
  };
  protoOf(BooleanSerializer).r13 = function (encoder, value) {
    return encoder.hr(value);
  };
  protoOf(BooleanSerializer).ln = function (encoder, value) {
    return this.r13(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).mn = function (decoder) {
    return decoder.yp();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.s13_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).kn = function () {
    return this.s13_1;
  };
  protoOf(IntSerializer).t13 = function (encoder, value) {
    return encoder.kr(value);
  };
  protoOf(IntSerializer).ln = function (encoder, value) {
    return this.t13(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).mn = function (decoder) {
    return decoder.bq();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.u13_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).kn = function () {
    return this.u13_1;
  };
  protoOf(FloatSerializer).v13 = function (encoder, value) {
    return encoder.mr(value);
  };
  protoOf(FloatSerializer).ln = function (encoder, value) {
    return this.v13(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).mn = function (decoder) {
    return decoder.dq();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.w13_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).kn = function () {
    return this.w13_1;
  };
  protoOf(DoubleSerializer).x13 = function (encoder, value) {
    return encoder.nr(value);
  };
  protoOf(DoubleSerializer).ln = function (encoder, value) {
    return this.x13(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).mn = function (decoder) {
    return decoder.eq();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.y13_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).kn = function () {
    return this.y13_1;
  };
  protoOf(LongSerializer).z13 = function (encoder, value) {
    return encoder.lr(value);
  };
  protoOf(LongSerializer).ln = function (encoder, value) {
    return this.z13(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).mn = function (decoder) {
    return decoder.cq();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().w1(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.a14_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.a14_1 = serialName;
    this.b14_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).ro = function () {
    return this.a14_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).so = function () {
    return this.b14_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).uo = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).wo = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).xo = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).ap = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).zo = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).yo = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.a14_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.a14_1 === other.a14_1 && equals(this.b14_1, other.b14_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.a14_1) + imul(31, this.b14_1.hashCode()) | 0;
  };
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().y1();
    var _iterator__ex2g4s = values.i();
    while (_iterator__ex2g4s.j()) {
      var primitive = _iterator__ex2g4s.k();
      var primitiveName = primitive.kn().ro();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).z9() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.c14_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).kn = function () {
    return this.c14_1;
  };
  protoOf(ByteSerializer).d14 = function (encoder, value) {
    return encoder.ir(value);
  };
  protoOf(ByteSerializer).ln = function (encoder, value) {
    return this.d14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).mn = function (decoder) {
    return decoder.zp();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.e14_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).kn = function () {
    return this.e14_1;
  };
  protoOf(ShortSerializer).f14 = function (encoder, value) {
    return encoder.jr(value);
  };
  protoOf(ShortSerializer).ln = function (encoder, value) {
    return this.f14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).mn = function (decoder) {
    return decoder.aq();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.g14_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).kn = function () {
    return this.g14_1;
  };
  protoOf(CharSerializer).h14 = function (encoder, value) {
    return encoder.or(value);
  };
  protoOf(CharSerializer).ln = function (encoder, value) {
    return this.h14(encoder, value instanceof Char ? value.e1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).i14 = function (decoder) {
    return decoder.fq();
  };
  protoOf(CharSerializer).mn = function (decoder) {
    return new Char(this.i14(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.j14_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).kn = function () {
    return this.j14_1.kn();
  };
  protoOf(UnitSerializer).k14 = function (encoder, value) {
    this.j14_1.co(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).ln = function (encoder, value) {
    return this.k14(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).l14 = function (decoder) {
    this.j14_1.mn(decoder);
  };
  protoOf(UnitSerializer).mn = function (decoder) {
    this.l14(decoder);
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
  protoOf(NamedValueDecoder).o14 = function (_this__u8e3s4, index) {
    return this.q14(this.p14(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).q14 = function (nestedName) {
    var tmp0_elvis_lhs = this.t14();
    return this.u14(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).p14 = function (descriptor, index) {
    return descriptor.wo(index);
  };
  protoOf(NamedValueDecoder).u14 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).v14 = function () {
    return this.r14_1.l() ? '$' : joinToString(this.r14_1, '.', '$.');
  };
  function NamedValueEncoder() {
    TaggedEncoder.call(this);
  }
  protoOf(NamedValueEncoder).o14 = function (_this__u8e3s4, index) {
    return this.q14(this.p14(_this__u8e3s4, index));
  };
  protoOf(NamedValueEncoder).q14 = function (nestedName) {
    var tmp0_elvis_lhs = this.t14();
    return this.u14(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueEncoder).p14 = function (descriptor, index) {
    return descriptor.wo(index);
  };
  protoOf(NamedValueEncoder).u14 = function (parentName, childName) {
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
    $this.j15(tag);
    var r = block();
    if (!$this.s14_1) {
      $this.k15();
    }
    $this.s14_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.jq($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.kn().ko();
      var tmp;
      if (isNullabilitySupported || tmp0.wp()) {
        tmp = this$0.jq($deserializer, $previousValue);
      } else {
        tmp = tmp0.xp();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.r14_1 = ArrayList_init_$Create$_0();
    this.s14_1 = false;
  }
  protoOf(TaggedDecoder).ar = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).w14 = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).x14 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).y14 = function (tag) {
    var tmp = this.w14(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).z14 = function (tag) {
    var tmp = this.w14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).a15 = function (tag) {
    var tmp = this.w14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).b15 = function (tag) {
    var tmp = this.w14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).c15 = function (tag) {
    var tmp = this.w14(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).d15 = function (tag) {
    var tmp = this.w14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).e15 = function (tag) {
    var tmp = this.w14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).f15 = function (tag) {
    var tmp = this.w14(tag);
    return tmp instanceof Char ? tmp.e1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).g15 = function (tag) {
    var tmp = this.w14(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).h15 = function (tag, enumDescriptor) {
    var tmp = this.w14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).i15 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.j15(tag);
    return this;
  };
  protoOf(TaggedDecoder).jq = function (deserializer, previousValue) {
    return this.kq(deserializer);
  };
  protoOf(TaggedDecoder).iq = function (descriptor) {
    return this.i15(this.k15(), descriptor);
  };
  protoOf(TaggedDecoder).wp = function () {
    var tmp0_elvis_lhs = this.t14();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.x14(currentTag);
  };
  protoOf(TaggedDecoder).xp = function () {
    return null;
  };
  protoOf(TaggedDecoder).yp = function () {
    return this.y14(this.k15());
  };
  protoOf(TaggedDecoder).zp = function () {
    return this.z14(this.k15());
  };
  protoOf(TaggedDecoder).aq = function () {
    return this.a15(this.k15());
  };
  protoOf(TaggedDecoder).bq = function () {
    return this.b15(this.k15());
  };
  protoOf(TaggedDecoder).cq = function () {
    return this.c15(this.k15());
  };
  protoOf(TaggedDecoder).dq = function () {
    return this.d15(this.k15());
  };
  protoOf(TaggedDecoder).eq = function () {
    return this.e15(this.k15());
  };
  protoOf(TaggedDecoder).fq = function () {
    return this.f15(this.k15());
  };
  protoOf(TaggedDecoder).gq = function () {
    return this.g15(this.k15());
  };
  protoOf(TaggedDecoder).hq = function (enumDescriptor) {
    return this.h15(this.k15(), enumDescriptor);
  };
  protoOf(TaggedDecoder).lq = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).mq = function (descriptor) {
  };
  protoOf(TaggedDecoder).nq = function (descriptor, index) {
    return this.y14(this.o14(descriptor, index));
  };
  protoOf(TaggedDecoder).oq = function (descriptor, index) {
    return this.z14(this.o14(descriptor, index));
  };
  protoOf(TaggedDecoder).pq = function (descriptor, index) {
    return this.a15(this.o14(descriptor, index));
  };
  protoOf(TaggedDecoder).qq = function (descriptor, index) {
    return this.b15(this.o14(descriptor, index));
  };
  protoOf(TaggedDecoder).rq = function (descriptor, index) {
    return this.c15(this.o14(descriptor, index));
  };
  protoOf(TaggedDecoder).sq = function (descriptor, index) {
    return this.d15(this.o14(descriptor, index));
  };
  protoOf(TaggedDecoder).tq = function (descriptor, index) {
    return this.e15(this.o14(descriptor, index));
  };
  protoOf(TaggedDecoder).uq = function (descriptor, index) {
    return this.f15(this.o14(descriptor, index));
  };
  protoOf(TaggedDecoder).vq = function (descriptor, index) {
    return this.g15(this.o14(descriptor, index));
  };
  protoOf(TaggedDecoder).wq = function (descriptor, index) {
    return this.i15(this.o14(descriptor, index), descriptor.zo(index));
  };
  protoOf(TaggedDecoder).xq = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.o14(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).zq = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.o14(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).t14 = function () {
    return lastOrNull(this.r14_1);
  };
  protoOf(TaggedDecoder).j15 = function (name) {
    this.r14_1.g(name);
  };
  protoOf(TaggedDecoder).k15 = function () {
    var r = this.r14_1.f2(get_lastIndex_0(this.r14_1));
    this.s14_1 = true;
    return r;
  };
  function encodeElement($this, desc, index) {
    var tag = $this.o14(desc, index);
    $this.j15(tag);
    return true;
  }
  function TaggedEncoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.m15_1 = ArrayList_init_$Create$_0();
  }
  protoOf(TaggedEncoder).ar = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedEncoder).n15 = function (tag, value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(TaggedEncoder).o15 = function (tag) {
  };
  protoOf(TaggedEncoder).p15 = function (tag) {
    throw SerializationException_init_$Create$_0('null is not supported');
  };
  protoOf(TaggedEncoder).q15 = function (tag, value) {
    return this.n15(tag, value);
  };
  protoOf(TaggedEncoder).r15 = function (tag, value) {
    return this.n15(tag, value);
  };
  protoOf(TaggedEncoder).s15 = function (tag, value) {
    return this.n15(tag, value);
  };
  protoOf(TaggedEncoder).t15 = function (tag, value) {
    return this.n15(tag, value);
  };
  protoOf(TaggedEncoder).u15 = function (tag, value) {
    return this.n15(tag, value);
  };
  protoOf(TaggedEncoder).v15 = function (tag, value) {
    return this.n15(tag, value);
  };
  protoOf(TaggedEncoder).w15 = function (tag, value) {
    return this.n15(tag, value);
  };
  protoOf(TaggedEncoder).x15 = function (tag, value) {
    return this.n15(tag, new Char(value));
  };
  protoOf(TaggedEncoder).y15 = function (tag, value) {
    return this.n15(tag, value);
  };
  protoOf(TaggedEncoder).z15 = function (tag, enumDescriptor, ordinal) {
    return this.n15(tag, ordinal);
  };
  protoOf(TaggedEncoder).a16 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.j15(tag);
    return this;
  };
  protoOf(TaggedEncoder).rr = function (descriptor) {
    return this.a16(this.k15(), descriptor);
  };
  protoOf(TaggedEncoder).gs = function () {
    return this.o15(this.c16());
  };
  protoOf(TaggedEncoder).gr = function () {
    return this.p15(this.k15());
  };
  protoOf(TaggedEncoder).hr = function (value) {
    return this.w15(this.k15(), value);
  };
  protoOf(TaggedEncoder).ir = function (value) {
    return this.r15(this.k15(), value);
  };
  protoOf(TaggedEncoder).jr = function (value) {
    return this.s15(this.k15(), value);
  };
  protoOf(TaggedEncoder).kr = function (value) {
    return this.q15(this.k15(), value);
  };
  protoOf(TaggedEncoder).lr = function (value) {
    return this.t15(this.k15(), value);
  };
  protoOf(TaggedEncoder).mr = function (value) {
    return this.u15(this.k15(), value);
  };
  protoOf(TaggedEncoder).nr = function (value) {
    return this.v15(this.k15(), value);
  };
  protoOf(TaggedEncoder).or = function (value) {
    return this.x15(this.k15(), value);
  };
  protoOf(TaggedEncoder).pr = function (value) {
    return this.y15(this.k15(), value);
  };
  protoOf(TaggedEncoder).qr = function (enumDescriptor, index) {
    return this.z15(this.k15(), enumDescriptor, index);
  };
  protoOf(TaggedEncoder).lq = function (descriptor) {
    return this;
  };
  protoOf(TaggedEncoder).mq = function (descriptor) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.m15_1.l()) {
      this.k15();
    }
    this.b16(descriptor);
  };
  protoOf(TaggedEncoder).b16 = function (descriptor) {
  };
  protoOf(TaggedEncoder).sr = function (descriptor, index, value) {
    return this.w15(this.o14(descriptor, index), value);
  };
  protoOf(TaggedEncoder).tr = function (descriptor, index, value) {
    return this.r15(this.o14(descriptor, index), value);
  };
  protoOf(TaggedEncoder).ur = function (descriptor, index, value) {
    return this.s15(this.o14(descriptor, index), value);
  };
  protoOf(TaggedEncoder).vr = function (descriptor, index, value) {
    return this.q15(this.o14(descriptor, index), value);
  };
  protoOf(TaggedEncoder).wr = function (descriptor, index, value) {
    return this.t15(this.o14(descriptor, index), value);
  };
  protoOf(TaggedEncoder).xr = function (descriptor, index, value) {
    return this.u15(this.o14(descriptor, index), value);
  };
  protoOf(TaggedEncoder).yr = function (descriptor, index, value) {
    return this.v15(this.o14(descriptor, index), value);
  };
  protoOf(TaggedEncoder).zr = function (descriptor, index, value) {
    return this.x15(this.o14(descriptor, index), value);
  };
  protoOf(TaggedEncoder).as = function (descriptor, index, value) {
    return this.y15(this.o14(descriptor, index), value);
  };
  protoOf(TaggedEncoder).bs = function (descriptor, index) {
    return this.a16(this.o14(descriptor, index), descriptor.zo(index));
  };
  protoOf(TaggedEncoder).cs = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.ds(serializer, value);
    }
  };
  protoOf(TaggedEncoder).es = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.fs(serializer, value);
    }
  };
  protoOf(TaggedEncoder).c16 = function () {
    return last(this.m15_1);
  };
  protoOf(TaggedEncoder).t14 = function () {
    return lastOrNull(this.m15_1);
  };
  protoOf(TaggedEncoder).j15 = function (name) {
    this.m15_1.g(name);
  };
  protoOf(TaggedEncoder).k15 = function () {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.m15_1.l()) {
      tmp = this.m15_1.f2(get_lastIndex_0(this.m15_1));
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
    this.d16_1 = key;
    this.e16_1 = value;
  }
  protoOf(MapEntry).u = function () {
    return this.d16_1;
  };
  protoOf(MapEntry).v = function () {
    return this.e16_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.d16_1) + ', value=' + toString_0(this.e16_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.d16_1 == null ? 0 : hashCode(this.d16_1);
    result = imul(result, 31) + (this.e16_1 == null ? 0 : hashCode(this.e16_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.d16_1, tmp0_other_with_cast.d16_1))
      return false;
    if (!equals(this.e16_1, tmp0_other_with_cast.e16_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.yn('key', $keySerializer.kn());
      $this$buildSerialDescriptor.yn('value', $valueSerializer.kn());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.h16_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).kn = function () {
    return this.h16_1;
  };
  protoOf(MapEntrySerializer_0).i16 = function (_this__u8e3s4) {
    return _this__u8e3s4.u();
  };
  protoOf(MapEntrySerializer_0).j16 = function (_this__u8e3s4) {
    return this.i16((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).k16 = function (_this__u8e3s4) {
    return _this__u8e3s4.v();
  };
  protoOf(MapEntrySerializer_0).l16 = function (_this__u8e3s4) {
    return this.k16((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).m16 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.yn('first', $keySerializer.kn());
      $this$buildClassSerialDescriptor.yn('second', $valueSerializer.kn());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.s16_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).kn = function () {
    return this.s16_1;
  };
  protoOf(PairSerializer_0).t16 = function (_this__u8e3s4) {
    return _this__u8e3s4.kf_1;
  };
  protoOf(PairSerializer_0).j16 = function (_this__u8e3s4) {
    return this.t16(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).u16 = function (_this__u8e3s4) {
    return _this__u8e3s4.lf_1;
  };
  protoOf(PairSerializer_0).l16 = function (_this__u8e3s4) {
    return this.u16(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).m16 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.yq($this.y16_1, 0, $this.v16_1);
    var b = composite.yq($this.y16_1, 1, $this.w16_1);
    var c = composite.yq($this.y16_1, 2, $this.x16_1);
    composite.mq($this.y16_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.cr($this.y16_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.yq($this.y16_1, 0, $this.v16_1);
          break;
        case 1:
          b = composite.yq($this.y16_1, 1, $this.w16_1);
          break;
        case 2:
          c = composite.yq($this.y16_1, 2, $this.x16_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.mq($this.y16_1);
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
      $this$buildClassSerialDescriptor.yn('first', this$0.v16_1.kn());
      $this$buildClassSerialDescriptor.yn('second', this$0.w16_1.kn());
      $this$buildClassSerialDescriptor.yn('third', this$0.x16_1.kn());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.v16_1 = aSerializer;
    this.w16_1 = bSerializer;
    this.x16_1 = cSerializer;
    var tmp = this;
    tmp.y16_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).kn = function () {
    return this.y16_1;
  };
  protoOf(TripleSerializer_0).z16 = function (encoder, value) {
    var structuredEncoder = encoder.lq(this.y16_1);
    structuredEncoder.cs(this.y16_1, 0, this.v16_1, value.kl_1);
    structuredEncoder.cs(this.y16_1, 1, this.w16_1, value.ll_1);
    structuredEncoder.cs(this.y16_1, 2, this.x16_1, value.ml_1);
    structuredEncoder.mq(this.y16_1);
  };
  protoOf(TripleSerializer_0).ln = function (encoder, value) {
    return this.z16(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).mn = function (decoder) {
    var composite = decoder.lq(this.y16_1);
    if (composite.br()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.n16_1 = keySerializer;
    this.o16_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).p16 = function (encoder, value) {
    var structuredEncoder = encoder.lq(this.kn());
    structuredEncoder.cs(this.kn(), 0, this.n16_1, this.j16(value));
    structuredEncoder.cs(this.kn(), 1, this.o16_1, this.l16(value));
    structuredEncoder.mq(this.kn());
  };
  protoOf(KeyValueSerializer).ln = function (encoder, value) {
    return this.p16(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).mn = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.kn();
    var composite = decoder.lq(descriptor);
    var tmp$ret$0;
    $l$block: {
      if (composite.br()) {
        var key = composite.yq(this.kn(), 0, this.n16_1);
        var value = composite.yq(this.kn(), 1, this.o16_1);
        tmp$ret$0 = this.m16(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.cr(this.kn());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.yq(this.kn(), 0, this.n16_1);
            break;
          case 1:
            value_0 = composite.yq(this.kn(), 1, this.o16_1);
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
      tmp$ret$0 = this.m16(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.mq(descriptor);
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
    this.a17_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_6(Companion_getInstance_3()));
  }
  protoOf(ULongSerializer).kn = function () {
    return this.a17_1;
  };
  protoOf(ULongSerializer).b17 = function (encoder, value) {
    var tmp = encoder.rr(this.a17_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.lr(tmp$ret$0);
  };
  protoOf(ULongSerializer).ln = function (encoder, value) {
    return this.b17(encoder, value instanceof ULong ? value.sm_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).c17 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.iq(this.a17_1).cq();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).mn = function (decoder) {
    return new ULong(this.c17(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.d17_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_7(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).kn = function () {
    return this.d17_1;
  };
  protoOf(UIntSerializer).e17 = function (encoder, value) {
    var tmp = encoder.rr(this.d17_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.kr(tmp$ret$0);
  };
  protoOf(UIntSerializer).ln = function (encoder, value) {
    return this.e17(encoder, value instanceof UInt ? value.hm_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).f17 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.iq(this.d17_1).bq();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).mn = function (decoder) {
    return new UInt(this.f17(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.g17_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_5(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).kn = function () {
    return this.g17_1;
  };
  protoOf(UByteSerializer).h17 = function (encoder, value) {
    var tmp = encoder.rr(this.g17_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.ir(tmp$ret$0);
  };
  protoOf(UByteSerializer).ln = function (encoder, value) {
    return this.h17(encoder, value instanceof UByte ? value.wl_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).i17 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.iq(this.g17_1).zp();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).mn = function (decoder) {
    return new UByte(this.i17(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.j17_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).kn = function () {
    return this.j17_1;
  };
  protoOf(UShortSerializer).k17 = function (encoder, value) {
    var tmp = encoder.rr(this.j17_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.jr(tmp$ret$0);
  };
  protoOf(UShortSerializer).ln = function (encoder, value) {
    return this.k17(encoder, value instanceof UShort ? value.dn_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).l17 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.iq(this.j17_1).aq();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).mn = function (decoder) {
    return new UShort(this.l17(decoder));
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
  protoOf(SerializersModule).go = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.ho(kClass, typeArgumentsSerializers) : $super.ho.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.n17_1 = class2ContextualFactory;
    this.o17_1 = polyBase2Serializers;
    this.p17_1 = polyBase2DefaultSerializerProvider;
    this.q17_1 = polyBase2NamedSerializers;
    this.r17_1 = polyBase2DefaultDeserializerProvider;
    this.s17_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).fo = function () {
    return this.s17_1;
  };
  protoOf(SerialModuleImpl).ks = function (baseClass, value) {
    if (!baseClass.aa(value))
      return null;
    var tmp0_safe_receiver = this.o17_1.w1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.p17_1.w1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).js = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.q17_1.w1(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).w1(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.r17_1.w1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).ho = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.n17_1.w1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t17(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).m17 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.n17_1.t().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.u();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.v();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.w17_1;
        collector.x17(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.v17(kclass, serial.u17_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.o17_1.t().i();
    while (_iterator__ex2g4s_0.j()) {
      var element_0 = _iterator__ex2g4s_0.k();
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.u();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.v();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.t().i();
      while (_iterator__ex2g4s_1.j()) {
        var element_1 = _iterator__ex2g4s_1.k();
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.u();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.v();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$11 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.y17(tmp_1, tmp_2, tmp$ret$11);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.p17_1.t().i();
    while (_iterator__ex2g4s_2.j()) {
      var element_2 = _iterator__ex2g4s_2.k();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.u();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.v();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.z17(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.r17_1.t().i();
    while (_iterator__ex2g4s_3.j()) {
      var element_3 = _iterator__ex2g4s_3.k();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.u();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.v();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.a18(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.w17_1 = serializer;
  }
  protoOf(Argless).t17 = function (typeArgumentsSerializers) {
    return this.w17_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.w17_1, this.w17_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.w17_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.u17_1 = provider;
  }
  protoOf(WithTypeArguments).t17 = function (typeArgumentsSerializers) {
    return this.u17_1(typeArgumentsSerializers);
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
    tmp.b18_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.c18_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.d18_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.e18_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.f18_1 = HashMap_init_$Create$();
    this.g18_1 = false;
  }
  protoOf(SerializersModuleBuilder).x17 = function (kClass, serializer) {
    return this.h18(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).v17 = function (kClass, provider) {
    return this.h18(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).y17 = function (baseClass, actualClass, actualSerializer) {
    this.i18(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).z17 = function (baseClass, defaultSerializerProvider) {
    this.j18(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).a18 = function (baseClass, defaultDeserializerProvider) {
    this.k18(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).l18 = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.b18_1.w1(forClass);
      if (!(previous == null) && !equals(previous, provider)) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + toString(forClass) + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.b18_1.z1(forClass, provider);
    if (isInterface_0(forClass))
      this.g18_1 = true;
  };
  protoOf(SerializersModuleBuilder).h18 = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.l18(forClass, provider, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.l18.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).j18 = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.d18_1.w1(baseClass);
    if (!(previous == null) && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + toString(baseClass) + ' is already registered: ' + toString_0(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.d18_1.z1(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).k18 = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.f18_1.w1(baseClass);
    if (!(previous == null) && !equals(previous, defaultDeserializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + toString(baseClass) + ' is already registered: ' + toString_0(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.f18_1.z1(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).m18 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.kn().ro();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.c18_1;
    var value = this_0.w1(baseClass);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer = HashMap_init_$Create$();
      this_0.z1(baseClass, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var baseClassSerializers = tmp;
    // Inline function 'kotlin.collections.getOrPut' call
    var this_1 = this.e18_1;
    var value_0 = this_1.w1(baseClass);
    var tmp_0;
    if (value_0 == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer_0 = HashMap_init_$Create$();
      this_1.z1(baseClass, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    var names = tmp_0;
    var previousSerializer = baseClassSerializers.w1(concreteClass);
    if (!(previousSerializer == null) && !equals(previousSerializer, concreteSerializer)) {
      if (allowOverwrite)
        names.a2(previousSerializer.kn().ro());
      else
        throw SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass);
    }
    var previousByName = names.w1(name);
    if (!(previousByName == null) && !equals(previousByName, concreteSerializer)) {
      // Inline function 'kotlin.sequences.find' call
      var tmp0 = asSequence(baseClassSerializers);
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlin.sequences.firstOrNull' call
        var _iterator__ex2g4s = tmp0.i();
        while (_iterator__ex2g4s.j()) {
          var element = _iterator__ex2g4s.k();
          if (element.v() === previousByName) {
            tmp$ret$7 = element;
            break $l$block;
          }
        }
        tmp$ret$7 = null;
      }
      var tmp0_safe_receiver = tmp$ret$7;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        var message = 'Name ' + name + ' is registered in the module but no Kotlin class is associated with it.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var previousClass = tmp_1;
      if (allowOverwrite)
        baseClassSerializers.a2(previousClass);
      else
        throw IllegalArgumentException_init_$Create$("Multiple polymorphic serializers in a scope of '" + toString(baseClass) + "' " + ("have the same serial name '" + name + "': " + toString(concreteSerializer) + " for '" + toString(concreteClass) + "' and " + toString_0(previousByName) + " for '" + toString(previousClass) + "'"));
    }
    // Inline function 'kotlin.collections.set' call
    baseClassSerializers.z1(concreteClass, concreteSerializer);
    // Inline function 'kotlin.collections.set' call
    names.z1(name, concreteSerializer);
  };
  protoOf(SerializersModuleBuilder).i18 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.m18(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.m18.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).ew = function () {
    return new SerialModuleImpl(this.b18_1, this.c18_1, this.d18_1, this.e18_1, this.f18_1, this.g18_1);
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
    this.n18_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.n18_1.equals(tmp0_other_with_cast.n18_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.n18_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.n18_1) + ')';
  };
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp0_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().xa()) {
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
    return rootClass.equals(PrimitiveClasses_getInstance().fb());
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
          var tmp_1 = assocObject.bz(args.slice());
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
    return mapOf([to(PrimitiveClasses_getInstance().gb(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_9(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().jb(), CharArraySerializer()), to(PrimitiveClasses_getInstance().eb(), serializer_10(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().pb(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().db(), serializer_11(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().ob(), FloatArraySerializer()), to(getKClass(Long), serializer_6(Companion_getInstance_3())), to(PrimitiveClasses_getInstance().nb(), LongArraySerializer()), to(getKClass(ULong), serializer_1(Companion_getInstance_4())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().bb(), serializer_7(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().mb(), IntArraySerializer()), to(getKClass(UInt), serializer_2(Companion_getInstance_5())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().ab(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().lb(), ShortArraySerializer()), to(getKClass(UShort), serializer_4(Companion_getInstance_6())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().za(), serializer_5(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().kb(), ByteArraySerializer()), to(getKClass(UByte), serializer_3(Companion_getInstance_7())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().ya(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().ib(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().xa(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Instant), serializer_15(Companion_getInstance_0())), to(getKClass(Uuid), serializer_16(Companion_getInstance_1()))]);
  }
  function get_isInterfaceHack(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().xa())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function createCache$1($factory) {
    this.o18_1 = $factory;
  }
  protoOf(createCache$1).io = function (key) {
    return this.o18_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.p18_1 = $factory;
  }
  protoOf(createParametrizedCache$1).jo = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.p18_1(key, types);
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
  protoOf(SerialDescriptorImpl).ko = get_isNullable;
  protoOf(SerialDescriptorImpl).to = get_isInline;
  protoOf(AbstractDecoder).yq = decodeSerializableElement$default;
  protoOf(AbstractDecoder).kq = decodeSerializableValue;
  protoOf(AbstractDecoder).br = decodeSequentially;
  protoOf(AbstractDecoder).dr = decodeCollectionSize;
  protoOf(AbstractEncoder).gs = encodeNotNullMark;
  protoOf(AbstractEncoder).hs = beginCollection;
  protoOf(AbstractEncoder).ds = encodeSerializableValue;
  protoOf(AbstractEncoder).fs = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).is = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).ko = get_isNullable;
  protoOf(ListLikeDescriptor).to = get_isInline;
  protoOf(ListLikeDescriptor).vo = get_annotations;
  protoOf(MapLikeDescriptor).ko = get_isNullable;
  protoOf(MapLikeDescriptor).to = get_isInline;
  protoOf(MapLikeDescriptor).vo = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).ko = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).to = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).ry = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).ko = get_isNullable;
  protoOf(NothingSerialDescriptor).to = get_isInline;
  protoOf(NothingSerialDescriptor).vo = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).ko = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).to = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).vo = get_annotations;
  protoOf(TaggedDecoder).yq = decodeSerializableElement$default;
  protoOf(TaggedDecoder).kq = decodeSerializableValue;
  protoOf(TaggedDecoder).br = decodeSequentially;
  protoOf(TaggedDecoder).dr = decodeCollectionSize;
  protoOf(TaggedEncoder).hs = beginCollection;
  protoOf(TaggedEncoder).ds = encodeSerializableValue;
  protoOf(TaggedEncoder).fs = encodeNullableSerializableValue;
  protoOf(TaggedEncoder).is = shouldEncodeElementDefault;
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
