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
  var protoOf = kotlin_kotlin.$_$.ob;
  var initMetadataForInterface = kotlin_kotlin.$_$.sa;
  var VOID = kotlin_kotlin.$_$.b;
  var getKClassFromExpression = kotlin_kotlin.$_$.fc;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.i4;
  var Unit_instance = kotlin_kotlin.$_$.v4;
  var emptyList = kotlin_kotlin.$_$.g6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.ig;
  var KProperty1 = kotlin_kotlin.$_$.lc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.la;
  var toString = kotlin_kotlin.$_$.rb;
  var initMetadataForClass = kotlin_kotlin.$_$.oa;
  var objectCreate = kotlin_kotlin.$_$.nb;
  var captureStack = kotlin_kotlin.$_$.z9;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.i1;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.k1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.m1;
  var IllegalArgumentException = kotlin_kotlin.$_$.ff;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.p2;
  var THROW_CCE = kotlin_kotlin.$_$.mf;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.o2;
  var isInterface = kotlin_kotlin.$_$.db;
  var KClass = kotlin_kotlin.$_$.ic;
  var Triple = kotlin_kotlin.$_$.nf;
  var getKClass = kotlin_kotlin.$_$.gc;
  var Pair = kotlin_kotlin.$_$.jf;
  var Entry = kotlin_kotlin.$_$.d5;
  var KtMap = kotlin_kotlin.$_$.f5;
  var KtMutableMap = kotlin_kotlin.$_$.h5;
  var LinkedHashMap = kotlin_kotlin.$_$.a5;
  var HashMap = kotlin_kotlin.$_$.y4;
  var KtSet = kotlin_kotlin.$_$.j5;
  var KtMutableSet = kotlin_kotlin.$_$.i5;
  var LinkedHashSet = kotlin_kotlin.$_$.b5;
  var HashSet = kotlin_kotlin.$_$.z4;
  var Collection = kotlin_kotlin.$_$.x4;
  var KtList = kotlin_kotlin.$_$.c5;
  var KtMutableList = kotlin_kotlin.$_$.g5;
  var ArrayList = kotlin_kotlin.$_$.w4;
  var copyToArray = kotlin_kotlin.$_$.e6;
  var Result = kotlin_kotlin.$_$.kf;
  var ensureNotNull = kotlin_kotlin.$_$.dg;
  var equals = kotlin_kotlin.$_$.ia;
  var getStringHashCode = kotlin_kotlin.$_$.ma;
  var isBlank = kotlin_kotlin.$_$.dd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var toList = kotlin_kotlin.$_$.v7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.o;
  var toHashSet = kotlin_kotlin.$_$.s7;
  var toBooleanArray = kotlin_kotlin.$_$.q7;
  var withIndex = kotlin_kotlin.$_$.b8;
  var to = kotlin_kotlin.$_$.og;
  var toMap = kotlin_kotlin.$_$.x7;
  var lazy_0 = kotlin_kotlin.$_$.jg;
  var contentEquals = kotlin_kotlin.$_$.p5;
  var initMetadataForObject = kotlin_kotlin.$_$.ua;
  var Long = kotlin_kotlin.$_$.hf;
  var Char = kotlin_kotlin.$_$.xe;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.d2;
  var Duration = kotlin_kotlin.$_$.se;
  var Companion_getInstance = kotlin_kotlin.$_$.l4;
  var Instant = kotlin_kotlin.$_$.te;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.m4;
  var Uuid = kotlin_kotlin.$_$.ue;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.n4;
  var toIntOrNull = kotlin_kotlin.$_$.ee;
  var hashCode = kotlin_kotlin.$_$.na;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var isArray = kotlin_kotlin.$_$.va;
  var arrayIterator = kotlin_kotlin.$_$.x9;
  var asList = kotlin_kotlin.$_$.m5;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.j;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var until = kotlin_kotlin.$_$.bc;
  var step = kotlin_kotlin.$_$.ac;
  var getValue = kotlin_kotlin.$_$.o6;
  var longArray = kotlin_kotlin.$_$.ib;
  var initMetadataForCompanion = kotlin_kotlin.$_$.pa;
  var get_lastIndex = kotlin_kotlin.$_$.v6;
  var shiftLeft = kotlin_kotlin.$_$.r9;
  var bitwiseOr = kotlin_kotlin.$_$.c9;
  var equalsLong = kotlin_kotlin.$_$.i9;
  var invert = kotlin_kotlin.$_$.k9;
  var countTrailingZeroBits = kotlin_kotlin.$_$.bg;
  var indexOf = kotlin_kotlin.$_$.p6;
  var contentToString = kotlin_kotlin.$_$.t5;
  var Enum = kotlin_kotlin.$_$.cf;
  var joinToString = kotlin_kotlin.$_$.s6;
  var toString_0 = kotlin_kotlin.$_$.ng;
  var KTypeParameter = kotlin_kotlin.$_$.mc;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.n;
  var booleanArray = kotlin_kotlin.$_$.y9;
  var emptyMap = kotlin_kotlin.$_$.h6;
  var contentHashCode = kotlin_kotlin.$_$.s5;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.d4;
  var isByteArray = kotlin_kotlin.$_$.xa;
  var coerceAtLeast = kotlin_kotlin.$_$.wb;
  var copyOf = kotlin_kotlin.$_$.z5;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.o4;
  var isCharArray = kotlin_kotlin.$_$.ya;
  var charArray = kotlin_kotlin.$_$.ba;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.e4;
  var isDoubleArray = kotlin_kotlin.$_$.ab;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.f4;
  var isFloatArray = kotlin_kotlin.$_$.bb;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.p4;
  var isLongArray = kotlin_kotlin.$_$.l9;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.t4;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.p3;
  var ULongArray = kotlin_kotlin.$_$.sf;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.l3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i3;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.n3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j3;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.g4;
  var isIntArray = kotlin_kotlin.$_$.cb;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.s4;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.g3;
  var UIntArray = kotlin_kotlin.$_$.qf;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.c3;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.z2;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.e3;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.a3;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.h4;
  var isShortArray = kotlin_kotlin.$_$.fb;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.u4;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.y3;
  var UShortArray = kotlin_kotlin.$_$.uf;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.u3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.r3;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.w3;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.s3;
  var Companion_getInstance_7 = kotlin_kotlin.$_$.r4;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.x2;
  var UByteArray = kotlin_kotlin.$_$.of;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.u2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.q2;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.v2;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.r2;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.c4;
  var isBooleanArray = kotlin_kotlin.$_$.wa;
  var copyOf_0 = kotlin_kotlin.$_$.y5;
  var copyOf_1 = kotlin_kotlin.$_$.a6;
  var copyOf_2 = kotlin_kotlin.$_$.b6;
  var copyOf_3 = kotlin_kotlin.$_$.w5;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.q3;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.m3;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.o3;
  var copyOf_4 = kotlin_kotlin.$_$.d6;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.h3;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.d3;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.f3;
  var copyOf_5 = kotlin_kotlin.$_$.v5;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.z3;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.v3;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.x3;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.y2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.t2;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.w2;
  var copyOf_6 = kotlin_kotlin.$_$.x5;
  var trimIndent = kotlin_kotlin.$_$.pe;
  var Unit = kotlin_kotlin.$_$.wf;
  var charSequenceLength = kotlin_kotlin.$_$.ea;
  var lastOrNull = kotlin_kotlin.$_$.x6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.w6;
  var last = kotlin_kotlin.$_$.y6;
  var ULong = kotlin_kotlin.$_$.tf;
  var UInt = kotlin_kotlin.$_$.rf;
  var UByte = kotlin_kotlin.$_$.pf;
  var UShort = kotlin_kotlin.$_$.vf;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.kg;
  var asSequence = kotlin_kotlin.$_$.n5;
  var get_js = kotlin_kotlin.$_$.hb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.k4;
  var findAssociatedObject = kotlin_kotlin.$_$.a;
  var get_indices = kotlin_kotlin.$_$.r6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var get_indices_0 = kotlin_kotlin.$_$.q6;
  var get_longArrayClass = kotlin_kotlin.$_$.m9;
  var mapOf = kotlin_kotlin.$_$.c7;
  var Companion_instance = kotlin_kotlin.$_$.q4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m2;
  var createFailure = kotlin_kotlin.$_$.cg;
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
    return deserializer.jo(this);
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
    return $super === VOID ? this.ur(descriptor, index, deserializer, previousValue) : $super.ur.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.ir(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.io(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.ho().hp();
    if (isNullabilitySupported) {
      return this.at(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.ds();
    } else {
      this.dt();
      this.at(serializer, value);
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
    return this.s18(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
    var tmp0_elvis_lhs = _this__u8e3s4.ko(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.lo());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.mo(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(getKClassFromExpression(value), _this__u8e3s4.lo());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.vo('type', serializer_0(StringCompanionObject_instance).ho());
      $this$buildSerialDescriptor.vo('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.wo_1.o() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.po_1 = this$0.xo_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.wo_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return function (p0) {
      return p0.ho();
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.wo_1 = baseClass;
    this.xo_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.yo_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).lo = function () {
    return this.wo_1;
  };
  protoOf(PolymorphicSerializer).ho = function () {
    var tmp0 = this.yo_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.m1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.wo_1) + ')';
  };
  function SealedClassSerializer$_get_descriptor_$ref_m511rz() {
    return function (p0) {
      return p0.ho();
    };
  }
  function SealedClassSerializer() {
  }
  protoOf(SealedClassSerializer).ho = function () {
    var tmp0 = this.ap_1;
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
    this.bp_1 = missingFields;
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
      if (isInterface_0(rootClass) && !(_this__u8e3s4.dp(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.cp()) {
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
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.dp(rootClass) : tmp0_elvis_lhs;
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
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.ep(rootClass, serializers) : tmp3_elvis_lhs;
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
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().fp(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().fp(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().gp(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().gp(clazz, types);
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
    if (_this__u8e3s4.ho().hp()) {
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.dp(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.ho();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.mp_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.ip_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.lp_1 = original;
    this.mp_1 = kClass;
    this.np_1 = this.lp_1.op() + '<' + this.mp_1.o() + '>';
  }
  protoOf(ContextDescriptor).op = function () {
    return this.np_1;
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
    return equals(this.lp_1, another.lp_1) && another.mp_1.equals(this.mp_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.mp_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.np_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.mp_1) + ', original: ' + toString(this.lp_1) + ')';
  };
  protoOf(ContextDescriptor).pp = function () {
    return this.lp_1.pp();
  };
  protoOf(ContextDescriptor).hp = function () {
    return this.lp_1.hp();
  };
  protoOf(ContextDescriptor).qp = function () {
    return this.lp_1.qp();
  };
  protoOf(ContextDescriptor).rp = function () {
    return this.lp_1.rp();
  };
  protoOf(ContextDescriptor).sp = function () {
    return this.lp_1.sp();
  };
  protoOf(ContextDescriptor).tp = function (index) {
    return this.lp_1.tp(index);
  };
  protoOf(ContextDescriptor).up = function (name) {
    return this.lp_1.up(name);
  };
  protoOf(ContextDescriptor).vp = function (index) {
    return this.lp_1.vp(index);
  };
  protoOf(ContextDescriptor).wp = function (index) {
    return this.lp_1.wp(index);
  };
  protoOf(ContextDescriptor).xp = function (index) {
    return this.lp_1.xp(index);
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
    this.zp_1 = $this_elementNames;
    this.yp_1 = $this_elementNames.rp();
  }
  protoOf(elementNames$1).u = function () {
    return this.yp_1 > 0;
  };
  protoOf(elementNames$1).v = function () {
    var tmp = this.zp_1.rp();
    var _unary__edvuaz = this.yp_1;
    this.yp_1 = _unary__edvuaz - 1 | 0;
    return this.zp_1.tp(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.aq_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).t = function () {
    return new elementNames$1(this.aq_1);
  };
  function elementDescriptors$1($this_elementDescriptors) {
    this.cq_1 = $this_elementDescriptors;
    this.bq_1 = $this_elementDescriptors.rp();
  }
  protoOf(elementDescriptors$1).u = function () {
    return this.bq_1 > 0;
  };
  protoOf(elementDescriptors$1).v = function () {
    var tmp = this.cq_1.rp();
    var _unary__edvuaz = this.bq_1;
    this.bq_1 = _unary__edvuaz - 1 | 0;
    return this.cq_1.wp(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.dq_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).t = function () {
    return new elementDescriptors$1(this.dq_1);
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
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.qo_1.e1(), toList(typeParameters), sdBuilder);
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
    this.no_1 = serialName;
    this.oo_1 = false;
    this.po_1 = emptyList();
    this.qo_1 = ArrayList_init_$Create$_0();
    this.ro_1 = HashSet_init_$Create$();
    this.so_1 = ArrayList_init_$Create$_0();
    this.to_1 = ArrayList_init_$Create$_0();
    this.uo_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).eq = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.ro_1.b1(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.no_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.qo_1.b1(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.so_1.b1(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.to_1.b1(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.uo_1.b1(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).vo = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.eq(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.eq.call(this, elementName, descriptor, annotations, isOptional);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.qo_1.e1(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.qq_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.m1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.pq_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return function (p0) {
      return _get__hashCode__tgwhef(p0);
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.fq_1 = serialName;
    this.gq_1 = kind;
    this.hq_1 = elementsCount;
    this.iq_1 = builder.po_1;
    this.jq_1 = toHashSet(builder.qo_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.qo_1;
    tmp.kq_1 = copyToArray(this_0);
    this.lq_1 = compactArray(builder.so_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.to_1;
    tmp_0.mq_1 = copyToArray(this_1);
    this.nq_1 = toBooleanArray(builder.uo_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.kq_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = to(item.nf_1, item.mf_1);
      destination.b1(tmp$ret$2);
    }
    tmp_1.oq_1 = toMap(destination);
    this.pq_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.qq_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).op = function () {
    return this.fq_1;
  };
  protoOf(SerialDescriptorImpl).pp = function () {
    return this.gq_1;
  };
  protoOf(SerialDescriptorImpl).rp = function () {
    return this.hq_1;
  };
  protoOf(SerialDescriptorImpl).sp = function () {
    return this.iq_1;
  };
  protoOf(SerialDescriptorImpl).rq = function () {
    return this.jq_1;
  };
  protoOf(SerialDescriptorImpl).tp = function (index) {
    return getChecked(this.kq_1, index);
  };
  protoOf(SerialDescriptorImpl).up = function (name) {
    var tmp0_elvis_lhs = this.oq_1.s2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).vp = function (index) {
    return getChecked(this.mq_1, index);
  };
  protoOf(SerialDescriptorImpl).wp = function (index) {
    return getChecked(this.lq_1, index);
  };
  protoOf(SerialDescriptorImpl).xp = function (index) {
    return getChecked_0(this.nq_1, index);
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
      if (!(this.op() === other.op())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.pq_1, other.pq_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.rp() === other.rp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.rp();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.wp(index).op() === other.wp(index).op())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.wp(index).pp(), other.wp(index).pp())) {
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
  protoOf(AbstractDecoder).sq = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).tq = function () {
    return true;
  };
  protoOf(AbstractDecoder).uq = function () {
    return null;
  };
  protoOf(AbstractDecoder).vq = function () {
    var tmp = this.sq();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).wq = function () {
    var tmp = this.sq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).xq = function () {
    var tmp = this.sq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).yq = function () {
    var tmp = this.sq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).zq = function () {
    var tmp = this.sq();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ar = function () {
    var tmp = this.sq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).br = function () {
    var tmp = this.sq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).cr = function () {
    var tmp = this.sq();
    return tmp instanceof Char ? tmp.v1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).dr = function () {
    var tmp = this.sq();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).er = function (enumDescriptor) {
    var tmp = this.sq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).fr = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).gr = function (deserializer, previousValue) {
    return this.hr(deserializer);
  };
  protoOf(AbstractDecoder).ir = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).jr = function (descriptor) {
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
    return this.br();
  };
  protoOf(AbstractDecoder).rr = function (descriptor, index) {
    return this.cr();
  };
  protoOf(AbstractDecoder).sr = function (descriptor, index) {
    return this.dr();
  };
  protoOf(AbstractDecoder).tr = function (descriptor, index) {
    return this.fr(descriptor.wp(index));
  };
  protoOf(AbstractDecoder).ur = function (descriptor, index, deserializer, previousValue) {
    return this.gr(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).wr = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.ho().hp();
    var tmp;
    if (isNullabilitySupported || this.tq()) {
      tmp = this.gr(deserializer, previousValue);
    } else {
      tmp = this.uq();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).ir = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).jr = function (descriptor) {
  };
  protoOf(AbstractEncoder).bs = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).cs = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).ds = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).es = function (value) {
    return this.cs(value);
  };
  protoOf(AbstractEncoder).fs = function (value) {
    return this.cs(value);
  };
  protoOf(AbstractEncoder).gs = function (value) {
    return this.cs(value);
  };
  protoOf(AbstractEncoder).hs = function (value) {
    return this.cs(value);
  };
  protoOf(AbstractEncoder).is = function (value) {
    return this.cs(value);
  };
  protoOf(AbstractEncoder).js = function (value) {
    return this.cs(value);
  };
  protoOf(AbstractEncoder).ks = function (value) {
    return this.cs(value);
  };
  protoOf(AbstractEncoder).ls = function (value) {
    return this.cs(new Char(value));
  };
  protoOf(AbstractEncoder).ms = function (value) {
    return this.cs(value);
  };
  protoOf(AbstractEncoder).ns = function (enumDescriptor, index) {
    return this.cs(index);
  };
  protoOf(AbstractEncoder).os = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).ps = function (descriptor, index, value) {
    if (this.bs(descriptor, index)) {
      this.es(value);
    }
  };
  protoOf(AbstractEncoder).qs = function (descriptor, index, value) {
    if (this.bs(descriptor, index)) {
      this.fs(value);
    }
  };
  protoOf(AbstractEncoder).rs = function (descriptor, index, value) {
    if (this.bs(descriptor, index)) {
      this.gs(value);
    }
  };
  protoOf(AbstractEncoder).ss = function (descriptor, index, value) {
    if (this.bs(descriptor, index)) {
      this.hs(value);
    }
  };
  protoOf(AbstractEncoder).ts = function (descriptor, index, value) {
    if (this.bs(descriptor, index)) {
      this.is(value);
    }
  };
  protoOf(AbstractEncoder).us = function (descriptor, index, value) {
    if (this.bs(descriptor, index)) {
      this.js(value);
    }
  };
  protoOf(AbstractEncoder).vs = function (descriptor, index, value) {
    if (this.bs(descriptor, index)) {
      this.ks(value);
    }
  };
  protoOf(AbstractEncoder).ws = function (descriptor, index, value) {
    if (this.bs(descriptor, index)) {
      this.ls(value);
    }
  };
  protoOf(AbstractEncoder).xs = function (descriptor, index, value) {
    if (this.bs(descriptor, index)) {
      this.ms(value);
    }
  };
  protoOf(AbstractEncoder).ys = function (descriptor, index) {
    return this.bs(descriptor, index) ? this.os(descriptor.wp(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).zs = function (descriptor, index, serializer, value) {
    if (this.bs(descriptor, index)) {
      this.at(serializer, value);
    }
  };
  protoOf(AbstractEncoder).bt = function (descriptor, index, serializer, value) {
    if (this.bs(descriptor, index)) {
      this.ct(serializer, value);
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
    var klassName = compositeDecoder.sr($this.ho(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.vr($this.ho(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).zo = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer_0(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.ho();
    var composite = encoder.ir(descriptor);
    composite.xs(this.ho(), 0, actualSerializer.ho().op());
    var tmp = this.ho();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.zs(tmp, 1, tmp$ret$0, value);
    composite.jr(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).io = function (encoder, value) {
    return this.zo(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).jo = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.ho();
    var composite = decoder.ir(descriptor);
    var tmp$ret$0;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.yr()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.zr(this.ho());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.sr(this.ho(), index);
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
            value = composite.vr(this.ho(), index, serializer);
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
    composite.jr(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).ko = function (decoder, klassName) {
    return decoder.xr().gt(this.lo(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).mo = function (encoder, value) {
    return encoder.xr().ht(this.lo(), value);
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
    this.it_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).ho = function () {
    return this.it_1;
  };
  protoOf(NothingSerializer_0).jt = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).io = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.jt(encoder, tmp);
  };
  protoOf(NothingSerializer_0).jo = function (decoder) {
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
    this.kt_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).ho = function () {
    return this.kt_1;
  };
  protoOf(DurationSerializer).lt = function (encoder, value) {
    encoder.ms(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).io = function (encoder, value) {
    return this.lt(encoder, value instanceof Duration ? value.rk_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).mt = function (decoder) {
    return Companion_getInstance().sk(decoder.dr());
  };
  protoOf(DurationSerializer).jo = function (decoder) {
    return new Duration(this.mt(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.nt_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).ho = function () {
    return this.nt_1;
  };
  protoOf(InstantSerializer).ot = function (encoder, value) {
    encoder.ms(value.toString());
  };
  protoOf(InstantSerializer).io = function (encoder, value) {
    return this.ot(encoder, value instanceof Instant ? value : THROW_CCE());
  };
  protoOf(InstantSerializer).jo = function (decoder) {
    return Companion_getInstance_0().el(decoder.dr());
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.pt_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).ho = function () {
    return this.pt_1;
  };
  protoOf(UuidSerializer).qt = function (encoder, value) {
    encoder.ms(value.toString());
  };
  protoOf(UuidSerializer).io = function (encoder, value) {
    return this.qt(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).jo = function (decoder) {
    return Companion_getInstance_1().km(decoder.dr());
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
  protoOf(ArrayClassDesc).op = function () {
    return 'kotlin.Array';
  };
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).op = function () {
    return 'kotlin.collections.ArrayList';
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).op = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).op = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.tt_1 = elementDescriptor;
    this.ut_1 = 1;
  }
  protoOf(ListLikeDescriptor).pp = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).rp = function () {
    return this.ut_1;
  };
  protoOf(ListLikeDescriptor).tp = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).up = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).xp = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.op() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).vp = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.op() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).wp = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.op() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.tt_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.tt_1, other.tt_1) && this.op() === other.op())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.tt_1), 31) + getStringHashCode(this.op()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.op() + '(' + toString(this.tt_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.xt_1 = serialName;
    this.yt_1 = keyDescriptor;
    this.zt_1 = valueDescriptor;
    this.au_1 = 2;
  }
  protoOf(MapLikeDescriptor).op = function () {
    return this.xt_1;
  };
  protoOf(MapLikeDescriptor).pp = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).rp = function () {
    return this.au_1;
  };
  protoOf(MapLikeDescriptor).tp = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).up = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).xp = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.op() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).vp = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.op() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).wp = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.op() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.yt_1;
        break;
      case 1:
        tmp = this.zt_1;
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
    if (!(this.op() === other.op()))
      return false;
    if (!equals(this.yt_1, other.yt_1))
      return false;
    if (!equals(this.zt_1, other.zt_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.op());
    result = imul(31, result) + hashCode(this.yt_1) | 0;
    result = imul(31, result) + hashCode(this.zt_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.op() + '(' + toString(this.yt_1) + ', ' + toString(this.zt_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.hu_1 = primitive.op() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).op = function () {
    return this.hu_1;
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.ju_1 = kClass;
    this.ku_1 = new ArrayClassDesc(eSerializer.ho());
  }
  protoOf(ReferenceArraySerializer).ho = function () {
    return this.ku_1;
  };
  protoOf(ReferenceArraySerializer).lu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).mu = function (_this__u8e3s4) {
    return this.lu((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).nu = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).ou = function (_this__u8e3s4) {
    return this.nu((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).pu = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).qu = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ReferenceArraySerializer).ru = function (_this__u8e3s4) {
    return this.qu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).su = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.ju_1);
  };
  protoOf(ReferenceArraySerializer).tu = function (_this__u8e3s4) {
    return this.su(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).uu = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).vu = function (_this__u8e3s4) {
    return this.uu((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).wu = function (_this__u8e3s4, size) {
    return _this__u8e3s4.r5(size);
  };
  protoOf(ReferenceArraySerializer).xu = function (_this__u8e3s4, size) {
    return this.wu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).yu = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a3(index, element);
  };
  protoOf(ReferenceArraySerializer).zu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.yu(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.hv_1 = new ArrayListClassDesc(element.ho());
  }
  protoOf(ArrayListSerializer).ho = function () {
    return this.hv_1;
  };
  protoOf(ArrayListSerializer).pu = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).iv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ArrayListSerializer).ru = function (_this__u8e3s4) {
    return this.iv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).jv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).tu = function (_this__u8e3s4) {
    return this.jv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).kv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).vu = function (_this__u8e3s4) {
    return this.kv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).lv = function (_this__u8e3s4, size) {
    return _this__u8e3s4.r5(size);
  };
  protoOf(ArrayListSerializer).xu = function (_this__u8e3s4, size) {
    return this.lv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).mv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a3(index, element);
  };
  protoOf(ArrayListSerializer).zu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.mv(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.sv_1 = new LinkedHashMapClassDesc(kSerializer.ho(), vSerializer.ho());
  }
  protoOf(LinkedHashMapSerializer).ho = function () {
    return this.sv_1;
  };
  protoOf(LinkedHashMapSerializer).tv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(LinkedHashMapSerializer).mu = function (_this__u8e3s4) {
    return this.tv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).uv = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.k1().t();
  };
  protoOf(LinkedHashMapSerializer).ou = function (_this__u8e3s4) {
    return this.uv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).pu = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).vv = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(LinkedHashMapSerializer).ru = function (_this__u8e3s4) {
    return this.vv(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).wv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).tu = function (_this__u8e3s4) {
    return this.wv(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).xv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).vu = function (_this__u8e3s4) {
    return this.xv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).yv = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).xu = function (_this__u8e3s4, size) {
    return this.yv(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.ew_1 = new HashSetClassDesc(eSerializer.ho());
  }
  protoOf(HashSetSerializer).ho = function () {
    return this.ew_1;
  };
  protoOf(HashSetSerializer).pu = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).fw = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(HashSetSerializer).ru = function (_this__u8e3s4) {
    return this.fw(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).gw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).tu = function (_this__u8e3s4) {
    return this.gw(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).hw = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).vu = function (_this__u8e3s4) {
    return this.hw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).iw = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).xu = function (_this__u8e3s4, size) {
    return this.iw(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).jw = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b1(element);
  };
  protoOf(HashSetSerializer).zu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.jw(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.lw_1 = new LinkedHashSetClassDesc(eSerializer.ho());
  }
  protoOf(LinkedHashSetSerializer).ho = function () {
    return this.lw_1;
  };
  protoOf(LinkedHashSetSerializer).pu = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).mw = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(LinkedHashSetSerializer).ru = function (_this__u8e3s4) {
    return this.mw(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).nw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).tu = function (_this__u8e3s4) {
    return this.nw(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).hw = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).vu = function (_this__u8e3s4) {
    return this.hw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).ow = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).xu = function (_this__u8e3s4, size) {
    return this.ow(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).pw = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b1(element);
  };
  protoOf(LinkedHashSetSerializer).zu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.pw(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.sw_1 = new HashMapClassDesc(kSerializer.ho(), vSerializer.ho());
  }
  protoOf(HashMapSerializer).ho = function () {
    return this.sw_1;
  };
  protoOf(HashMapSerializer).tv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(HashMapSerializer).mu = function (_this__u8e3s4) {
    return this.tv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).uv = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.k1().t();
  };
  protoOf(HashMapSerializer).ou = function (_this__u8e3s4) {
    return this.uv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).pu = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).tw = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(HashMapSerializer).ru = function (_this__u8e3s4) {
    return this.tw(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).uw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).tu = function (_this__u8e3s4) {
    return this.uw(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).xv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).vu = function (_this__u8e3s4) {
    return this.xv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).vw = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).xu = function (_this__u8e3s4, size) {
    return this.vw(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.av_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).bv = function (encoder, value) {
    var size = this.mu(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.ho();
    var composite = encoder.et(descriptor, size);
    var iterator = this.ou(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.zs(this.ho(), index, this.av_1, iterator.v());
      }
       while (inductionVariable < size);
    composite.jr(descriptor);
  };
  protoOf(CollectionLikeSerializer).io = function (encoder, value) {
    return this.bv(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).cv = function (decoder, builder, startIndex, size) {
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
        this.dv(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).dv = function (decoder, index, builder, checkIndex) {
    this.zu(builder, index, decoder.vr(this.ho(), index, this.av_1));
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).ov = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(CollectionSerializer).mu = function (_this__u8e3s4) {
    return this.ov((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).pv = function (_this__u8e3s4) {
    return _this__u8e3s4.t();
  };
  protoOf(CollectionSerializer).ou = function (_this__u8e3s4) {
    return this.pv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.zv_1 = keySerializer;
    this.aw_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).bw = function (decoder, builder, startIndex, size) {
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
        this.cw(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).cv = function (decoder, builder, startIndex, size) {
    return this.bw(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).cw = function (decoder, index, builder, checkIndex) {
    var key = decoder.vr(this.ho(), index, this.zv_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.zr(this.ho());
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
      var tmp_2 = this.aw_1.ho().pp();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.ur(this.ho(), vIndex, this.aw_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.vr(this.ho(), vIndex, this.aw_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.v2(key, value);
  };
  protoOf(MapLikeSerializer).dv = function (decoder, index, builder, checkIndex) {
    return this.cw(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).bv = function (encoder, value) {
    var size = this.mu(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.ho();
    var composite = encoder.et(descriptor, size);
    var iterator = this.ou(value);
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
      var tmp = this.ho();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.zs(tmp, _unary__edvuaz, this.zv_1, k);
      var tmp_0 = this.ho();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.zs(tmp_0, _unary__edvuaz_0, this.aw_1, v);
    }
    composite.jr(descriptor);
  };
  protoOf(MapLikeSerializer).io = function (encoder, value) {
    return this.bv(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function readSize($this, decoder, builder) {
    var size = decoder.as($this.ho());
    $this.xu(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).fv = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.vu(previous);
    var builder = tmp1_elvis_lhs == null ? this.pu() : tmp1_elvis_lhs;
    var startIndex = this.ru(builder);
    var compositeDecoder = decoder.ir(this.ho());
    if (compositeDecoder.yr()) {
      this.cv(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.zr(this.ho());
        if (index === -1)
          break $l$loop;
        this.ev(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.jr(this.ho());
    return this.tu(builder);
  };
  protoOf(AbstractCollectionSerializer).jo = function (decoder) {
    return this.fv(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).ev = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.dv(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.dv.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.xw_1 = new PrimitiveArrayDescriptor(primitiveSerializer.ho());
  }
  protoOf(PrimitiveArraySerializer).ho = function () {
    return this.xw_1;
  };
  protoOf(PrimitiveArraySerializer).yw = function (_this__u8e3s4) {
    return _this__u8e3s4.zw();
  };
  protoOf(PrimitiveArraySerializer).ru = function (_this__u8e3s4) {
    return this.yw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).ax = function (_this__u8e3s4) {
    return _this__u8e3s4.bx();
  };
  protoOf(PrimitiveArraySerializer).tu = function (_this__u8e3s4) {
    return this.ax(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).cx = function (_this__u8e3s4, size) {
    return _this__u8e3s4.dx(size);
  };
  protoOf(PrimitiveArraySerializer).xu = function (_this__u8e3s4, size) {
    return this.cx(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).ex = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).ou = function (_this__u8e3s4) {
    return this.ex((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).fx = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).zu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.fx(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).pu = function () {
    return this.vu(this.gx());
  };
  protoOf(PrimitiveArraySerializer).jx = function (encoder, value) {
    var size = this.mu(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.xw_1;
    var composite = encoder.et(descriptor, size);
    this.ix(composite, value, size);
    composite.jr(descriptor);
  };
  protoOf(PrimitiveArraySerializer).io = function (encoder, value) {
    return this.jx(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).bv = function (encoder, value) {
    return this.jx(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).jo = function (decoder) {
    return this.fv(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).kx = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.zw() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.dx(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.dx.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.lx_1 = longArray(0);
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
    $this.px_1[slot] = bitwiseOr($this.px_1[slot], shiftLeft(new Long(1, 0), offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.px_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.px_1[slot];
        while (!equalsLong(slotMarks, new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(invert(slotMarks));
          slotMarks = bitwiseOr(slotMarks, shiftLeft(new Long(1, 0), indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.nx_1($this.mx_1, index)) {
            $this.px_1[slot] = slotMarks;
            return index;
          }
        }
        $this.px_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.mx_1 = descriptor;
    this.nx_1 = readIfAbsent;
    var elementsCount = this.mx_1.rp();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = shiftLeft(new Long(-1, -1), elementsCount);
      }
      tmp.ox_1 = tmp_0;
      this.px_1 = Companion_getInstance_8().lx_1;
    } else {
      this.ox_1 = new Long(0, 0);
      this.px_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).qx = function (index) {
    if (index < 64) {
      this.ox_1 = bitwiseOr(this.ox_1, shiftLeft(new Long(1, 0), index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).rx = function () {
    var elementsCount = this.mx_1.rp();
    while (!equalsLong(this.ox_1, new Long(-1, -1))) {
      var index = countTrailingZeroBits(invert(this.ox_1));
      this.ox_1 = bitwiseOr(this.ox_1, shiftLeft(new Long(1, 0), index));
      if (this.nx_1(this.mx_1, index)) {
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
    var d = new EnumDescriptor(serialName, $this.sx_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.sx_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.hy(element.z_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.tx_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer$_get_descriptor_$ref_j67dlw() {
    return function (p0) {
      return p0.ho();
    };
  }
  function EnumSerializer(serialName, values) {
    this.sx_1 = values;
    this.tx_1 = null;
    var tmp = this;
    tmp.ux_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).ho = function () {
    var tmp0 = this.ux_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, EnumSerializer$_get_descriptor_$ref_j67dlw(), null);
    return tmp0.m1();
  };
  protoOf(EnumSerializer).iy = function (encoder, value) {
    var index = indexOf(this.sx_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.ho().op() + ', ' + ('must be one of ' + contentToString(this.sx_1)));
    }
    encoder.ns(this.ho(), index);
  };
  protoOf(EnumSerializer).io = function (encoder, value) {
    return this.iy(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).jo = function (decoder) {
    var index = decoder.er(this.ho());
    if (!(0 <= index ? index <= (this.sx_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.ho().op() + ' enum values, ' + ('values size is ' + this.sx_1.length));
    }
    return this.sx_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.ho().op() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.wy_1;
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
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.tp(tmp_2), OBJECT_getInstance(), []);
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
    this.vy_1 = ENUM_getInstance();
    var tmp = this;
    tmp.wy_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).pp = function () {
    return this.vy_1;
  };
  protoOf(EnumDescriptor).wp = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.pp() === ENUM_getInstance()))
      return false;
    if (!(this.op() === other.op()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.op() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.op());
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
    this.lz_1 = true;
  }
  protoOf(InlineClassDescriptor).qp = function () {
    return this.lz_1;
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
      if (!(this.op() === other.op())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.lz_1 && contentEquals(this.xy(), other.xy()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.rp() === other.rp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.rp();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.wp(index).op() === other.wp(index).op())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.wp(index).pp(), other.wp(index).pp())) {
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
    this.mz_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).nz = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.mz_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).ho = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).io = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).jo = function (decoder) {
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
    this.pz_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).xr = function () {
    return this.pz_1;
  };
  protoOf(NoOpEncoder).cs = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ds = function () {
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
  protoOf(NoOpEncoder).ks = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ls = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ms = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ns = function (enumDescriptor, index) {
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
    this.qz_1 = OBJECT_getInstance();
    this.rz_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).pp = function () {
    return this.qz_1;
  };
  protoOf(NothingSerialDescriptor).op = function () {
    return this.rz_1;
  };
  protoOf(NothingSerialDescriptor).rp = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).tp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).up = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).xp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).wp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).vp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.rz_1) + imul(31, this.qz_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.sz_1 = serializer;
    this.tz_1 = new SerialDescriptorForNullable(this.sz_1.ho());
  }
  protoOf(NullableSerializer).ho = function () {
    return this.tz_1;
  };
  protoOf(NullableSerializer).uz = function (encoder, value) {
    if (!(value == null)) {
      encoder.dt();
      encoder.at(this.sz_1, value);
    } else {
      encoder.ds();
    }
  };
  protoOf(NullableSerializer).io = function (encoder, value) {
    return this.uz(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).jo = function (decoder) {
    return decoder.tq() ? decoder.hr(this.sz_1) : decoder.uq();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.sz_1, other.sz_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.sz_1);
  };
  function SerialDescriptorForNullable(original) {
    this.ip_1 = original;
    this.jp_1 = this.ip_1.op() + '?';
    this.kp_1 = cachedSerialNames(this.ip_1);
  }
  protoOf(SerialDescriptorForNullable).op = function () {
    return this.jp_1;
  };
  protoOf(SerialDescriptorForNullable).rq = function () {
    return this.kp_1;
  };
  protoOf(SerialDescriptorForNullable).hp = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.ip_1, other.ip_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.ip_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.ip_1), 31);
  };
  protoOf(SerialDescriptorForNullable).pp = function () {
    return this.ip_1.pp();
  };
  protoOf(SerialDescriptorForNullable).qp = function () {
    return this.ip_1.qp();
  };
  protoOf(SerialDescriptorForNullable).rp = function () {
    return this.ip_1.rp();
  };
  protoOf(SerialDescriptorForNullable).sp = function () {
    return this.ip_1.sp();
  };
  protoOf(SerialDescriptorForNullable).tp = function (index) {
    return this.ip_1.tp(index);
  };
  protoOf(SerialDescriptorForNullable).up = function (name) {
    return this.ip_1.up(name);
  };
  protoOf(SerialDescriptorForNullable).vp = function (index) {
    return this.ip_1.vp(index);
  };
  protoOf(SerialDescriptorForNullable).wp = function (index) {
    return this.ip_1.wp(index);
  };
  protoOf(SerialDescriptorForNullable).xp = function (index) {
    return this.ip_1.xp(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.po_1 = this$0.wz_1;
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
      return p0.ho();
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.vz_1 = objectInstance;
    this.wz_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.xz_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).ho = function () {
    var tmp0 = this.xz_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.m1();
  };
  protoOf(ObjectSerializer).zo = function (encoder, value) {
    encoder.ir(this.ho()).jr(this.ho());
  };
  protoOf(ObjectSerializer).io = function (encoder, value) {
    return this.zo(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).jo = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.ho();
    var composite = decoder.ir(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      if (composite.yr()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.zr(this.ho());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$0;
    composite.jr(descriptor);
    return this.vz_1;
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
    var tmp0 = _this__u8e3s4.ti_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.ti_1);
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
      return _this__u8e3s4.rq();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.rp());
    var inductionVariable = 0;
    var last = _this__u8e3s4.rp();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.tp(i);
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
          var element = descriptor.tp(i);
          missingFields.b1(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.op());
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
                var element = descriptor.tp(imul(maskSlot, 32) + i | 0);
                missingFields.b1(element);
              }
              missingFieldsBits = missingFieldsBits >>> 1 | 0;
            }
             while (inductionVariable_0 < 32);
        }
      }
       while (inductionVariable <= last);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.op());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.ey_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.m1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.gy_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.m1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.zx_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.zx_1[i];
        indices.v2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.wx_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nz();
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
      var tmp0_safe_receiver = this$0.wx_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.oz();
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
          var tmp$ret$0 = item.ho();
          destination.b1(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return function (p0) {
      return p0.xy();
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.xy());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.vx_1 = serialName;
    this.wx_1 = generatedSerializer;
    this.xx_1 = elementsCount;
    this.yx_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.xx_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.zx_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.xx_1;
    tmp_3.ay_1 = Array(size);
    this.by_1 = null;
    this.cy_1 = booleanArray(this.xx_1);
    this.dy_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.ey_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.fy_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.gy_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).op = function () {
    return this.vx_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).rp = function () {
    return this.xx_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).pp = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).sp = function () {
    var tmp0_elvis_lhs = this.by_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).rq = function () {
    return this.dy_1.t2();
  };
  protoOf(PluginGeneratedSerialDescriptor).xy = function () {
    var tmp0 = this.fy_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.m1();
  };
  protoOf(PluginGeneratedSerialDescriptor).yy = function (name, isOptional) {
    this.yx_1 = this.yx_1 + 1 | 0;
    this.zx_1[this.yx_1] = name;
    this.cy_1[this.yx_1] = isOptional;
    this.ay_1[this.yx_1] = null;
    if (this.yx_1 === (this.xx_1 - 1 | 0)) {
      this.dy_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).hy = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.yy(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.yy.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).wp = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).ho();
  };
  protoOf(PluginGeneratedSerialDescriptor).xp = function (index) {
    return getChecked_0(this.cy_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).vp = function (index) {
    var tmp0_elvis_lhs = getChecked(this.ay_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).tp = function (index) {
    return getChecked(this.zx_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).up = function (name) {
    var tmp0_elvis_lhs = this.dy_1.s2(name);
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
      if (!(this.op() === other.op())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.xy(), other.xy())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.rp() === other.rp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.rp();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.wp(index).op() === other.wp(index).op())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.wp(index).pp(), other.wp(index).pp())) {
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
    var result = getStringHashCode(_this__u8e3s4.op());
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
      var tmp0_safe_receiver = element.op();
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
      var tmp0_safe_receiver_0 = element_0.pp();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.rp());
    var tmp_0 = _this__u8e3s4.op() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.tp(i) + ': ' + $this_toStringImpl.wp(i).op();
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
  protoOf(ByteArraySerializer_0).b10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).mu = function (_this__u8e3s4) {
    return this.b10((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).c10 = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).vu = function (_this__u8e3s4) {
    return this.c10((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).gx = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).d10 = function (decoder, index, builder, checkIndex) {
    builder.g10(decoder.lr(this.xw_1, index));
  };
  protoOf(ByteArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.d10(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).hx = function (decoder, index, builder, checkIndex) {
    return this.d10(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).h10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.qs(this.xw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).ix = function (encoder, content, size) {
    return this.h10(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.e10_1 = bufferWithData;
    this.f10_1 = bufferWithData.length;
    this.dx(10);
  }
  protoOf(ByteArrayBuilder).zw = function () {
    return this.f10_1;
  };
  protoOf(ByteArrayBuilder).dx = function (requiredCapacity) {
    if (this.e10_1.length < requiredCapacity)
      this.e10_1 = copyOf(this.e10_1, coerceAtLeast(requiredCapacity, imul(this.e10_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).g10 = function (c) {
    this.kx();
    var tmp = this.e10_1;
    var _unary__edvuaz = this.f10_1;
    this.f10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).bx = function () {
    return copyOf(this.e10_1, this.f10_1);
  };
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_2()));
  }
  protoOf(CharArraySerializer_0).k10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).mu = function (_this__u8e3s4) {
    return this.k10((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).l10 = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).vu = function (_this__u8e3s4) {
    return this.l10((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).gx = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).m10 = function (decoder, index, builder, checkIndex) {
    builder.p10(decoder.rr(this.xw_1, index));
  };
  protoOf(CharArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.m10(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).hx = function (decoder, index, builder, checkIndex) {
    return this.m10(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).q10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ws(this.xw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).ix = function (encoder, content, size) {
    return this.q10(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(DoubleArraySerializer_0).t10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).mu = function (_this__u8e3s4) {
    return this.t10((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).u10 = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).vu = function (_this__u8e3s4) {
    return this.u10((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).gx = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).v10 = function (decoder, index, builder, checkIndex) {
    builder.y10(decoder.qr(this.xw_1, index));
  };
  protoOf(DoubleArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.v10(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).hx = function (decoder, index, builder, checkIndex) {
    return this.v10(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).z10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.vs(this.xw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).ix = function (encoder, content, size) {
    return this.z10(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(FloatArraySerializer_0).c11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).mu = function (_this__u8e3s4) {
    return this.c11((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).d11 = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).vu = function (_this__u8e3s4) {
    return this.d11((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).gx = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).e11 = function (decoder, index, builder, checkIndex) {
    builder.h11(decoder.pr(this.xw_1, index));
  };
  protoOf(FloatArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.e11(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).hx = function (decoder, index, builder, checkIndex) {
    return this.e11(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).i11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.us(this.xw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).ix = function (encoder, content, size) {
    return this.i11(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(LongArraySerializer_0).l11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).mu = function (_this__u8e3s4) {
    return this.l11((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).m11 = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).vu = function (_this__u8e3s4) {
    return this.m11((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).gx = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).n11 = function (decoder, index, builder, checkIndex) {
    builder.q11(decoder.or(this.xw_1, index));
  };
  protoOf(LongArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.n11(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).hx = function (decoder, index, builder, checkIndex) {
    return this.n11(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).r11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ts(this.xw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).ix = function (encoder, content, size) {
    return this.r11(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(ULongArraySerializer_0).u11 = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).mu = function (_this__u8e3s4) {
    return this.u11(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.un_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).v11 = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).vu = function (_this__u8e3s4) {
    return this.v11(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.un_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).w11 = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).gx = function () {
    return new ULongArray(this.w11());
  };
  protoOf(ULongArraySerializer_0).x11 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.tr(this.xw_1, index).zq();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.a12(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.x11(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).hx = function (decoder, index, builder, checkIndex) {
    return this.x11(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).b12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.ys(this.xw_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.is(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).ix = function (encoder, content, size) {
    return this.b12(encoder, content instanceof ULongArray ? content.un_1 : THROW_CCE(), size);
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
  protoOf(IntArraySerializer_0).e12 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).mu = function (_this__u8e3s4) {
    return this.e12((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).f12 = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).vu = function (_this__u8e3s4) {
    return this.f12((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).gx = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).g12 = function (decoder, index, builder, checkIndex) {
    builder.j12(decoder.nr(this.xw_1, index));
  };
  protoOf(IntArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.g12(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).hx = function (decoder, index, builder, checkIndex) {
    return this.g12(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).k12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ss(this.xw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).ix = function (encoder, content, size) {
    return this.k12(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UIntArraySerializer_0).n12 = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).mu = function (_this__u8e3s4) {
    return this.n12(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.jn_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).o12 = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).vu = function (_this__u8e3s4) {
    return this.o12(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.jn_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).p12 = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).gx = function () {
    return new UIntArray(this.p12());
  };
  protoOf(UIntArraySerializer_0).q12 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.tr(this.xw_1, index).yq();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.t12(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.q12(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).hx = function (decoder, index, builder, checkIndex) {
    return this.q12(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).u12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.ys(this.xw_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.hs(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).ix = function (encoder, content, size) {
    return this.u12(encoder, content instanceof UIntArray ? content.jn_1 : THROW_CCE(), size);
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
  protoOf(ShortArraySerializer_0).x12 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).mu = function (_this__u8e3s4) {
    return this.x12((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).y12 = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).vu = function (_this__u8e3s4) {
    return this.y12((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).gx = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).z12 = function (decoder, index, builder, checkIndex) {
    builder.c13(decoder.mr(this.xw_1, index));
  };
  protoOf(ShortArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.z12(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).hx = function (decoder, index, builder, checkIndex) {
    return this.z12(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).d13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.rs(this.xw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).ix = function (encoder, content, size) {
    return this.d13(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UShortArraySerializer_0).g13 = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).mu = function (_this__u8e3s4) {
    return this.g13(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.fo_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).h13 = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).vu = function (_this__u8e3s4) {
    return this.h13(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.fo_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).i13 = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).gx = function () {
    return new UShortArray(this.i13());
  };
  protoOf(UShortArraySerializer_0).j13 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.tr(this.xw_1, index).xq();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.m13(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.j13(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).hx = function (decoder, index, builder, checkIndex) {
    return this.j13(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).n13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.ys(this.xw_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.gs(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).ix = function (encoder, content, size) {
    return this.n13(encoder, content instanceof UShortArray ? content.fo_1 : THROW_CCE(), size);
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
  protoOf(UByteArraySerializer_0).q13 = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).mu = function (_this__u8e3s4) {
    return this.q13(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.ym_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).r13 = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).vu = function (_this__u8e3s4) {
    return this.r13(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.ym_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).s13 = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).gx = function () {
    return new UByteArray(this.s13());
  };
  protoOf(UByteArraySerializer_0).t13 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.tr(this.xw_1, index).wq();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.w13(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.t13(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).hx = function (decoder, index, builder, checkIndex) {
    return this.t13(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).x13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.ys(this.xw_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.fs(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).ix = function (encoder, content, size) {
    return this.x13(encoder, content instanceof UByteArray ? content.ym_1 : THROW_CCE(), size);
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
  protoOf(BooleanArraySerializer_0).a14 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).mu = function (_this__u8e3s4) {
    return this.a14((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).b14 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).vu = function (_this__u8e3s4) {
    return this.b14((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).gx = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).c14 = function (decoder, index, builder, checkIndex) {
    builder.f14(decoder.kr(this.xw_1, index));
  };
  protoOf(BooleanArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.c14(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).hx = function (decoder, index, builder, checkIndex) {
    return this.c14(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).g14 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ps(this.xw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).ix = function (encoder, content, size) {
    return this.g14(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.n10_1 = bufferWithData;
    this.o10_1 = bufferWithData.length;
    this.dx(10);
  }
  protoOf(CharArrayBuilder).zw = function () {
    return this.o10_1;
  };
  protoOf(CharArrayBuilder).dx = function (requiredCapacity) {
    if (this.n10_1.length < requiredCapacity)
      this.n10_1 = copyOf_0(this.n10_1, coerceAtLeast(requiredCapacity, imul(this.n10_1.length, 2)));
  };
  protoOf(CharArrayBuilder).p10 = function (c) {
    this.kx();
    var tmp = this.n10_1;
    var _unary__edvuaz = this.o10_1;
    this.o10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).bx = function () {
    return copyOf_0(this.n10_1, this.o10_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.w10_1 = bufferWithData;
    this.x10_1 = bufferWithData.length;
    this.dx(10);
  }
  protoOf(DoubleArrayBuilder).zw = function () {
    return this.x10_1;
  };
  protoOf(DoubleArrayBuilder).dx = function (requiredCapacity) {
    if (this.w10_1.length < requiredCapacity)
      this.w10_1 = copyOf_1(this.w10_1, coerceAtLeast(requiredCapacity, imul(this.w10_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).y10 = function (c) {
    this.kx();
    var tmp = this.w10_1;
    var _unary__edvuaz = this.x10_1;
    this.x10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).bx = function () {
    return copyOf_1(this.w10_1, this.x10_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.f11_1 = bufferWithData;
    this.g11_1 = bufferWithData.length;
    this.dx(10);
  }
  protoOf(FloatArrayBuilder).zw = function () {
    return this.g11_1;
  };
  protoOf(FloatArrayBuilder).dx = function (requiredCapacity) {
    if (this.f11_1.length < requiredCapacity)
      this.f11_1 = copyOf_2(this.f11_1, coerceAtLeast(requiredCapacity, imul(this.f11_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).h11 = function (c) {
    this.kx();
    var tmp = this.f11_1;
    var _unary__edvuaz = this.g11_1;
    this.g11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).bx = function () {
    return copyOf_2(this.f11_1, this.g11_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.o11_1 = bufferWithData;
    this.p11_1 = bufferWithData.length;
    this.dx(10);
  }
  protoOf(LongArrayBuilder).zw = function () {
    return this.p11_1;
  };
  protoOf(LongArrayBuilder).dx = function (requiredCapacity) {
    if (this.o11_1.length < requiredCapacity)
      this.o11_1 = copyOf_3(this.o11_1, coerceAtLeast(requiredCapacity, imul(this.o11_1.length, 2)));
  };
  protoOf(LongArrayBuilder).q11 = function (c) {
    this.kx();
    var tmp = this.o11_1;
    var _unary__edvuaz = this.p11_1;
    this.p11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).bx = function () {
    return copyOf_3(this.o11_1, this.p11_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.y11_1 = bufferWithData;
    this.z11_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.dx(10);
  }
  protoOf(ULongArrayBuilder).zw = function () {
    return this.z11_1;
  };
  protoOf(ULongArrayBuilder).dx = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.y11_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.y11_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.y11_1), 2));
      tmp.y11_1 = _ULongArray___init__impl__twm1l3_0(copyOf_3(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).a12 = function (c) {
    this.kx();
    var tmp = this.y11_1;
    var _unary__edvuaz = this.z11_1;
    this.z11_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).h14 = function () {
    var tmp0 = this.y11_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.z11_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_3(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).bx = function () {
    return new ULongArray(this.h14());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.h12_1 = bufferWithData;
    this.i12_1 = bufferWithData.length;
    this.dx(10);
  }
  protoOf(IntArrayBuilder).zw = function () {
    return this.i12_1;
  };
  protoOf(IntArrayBuilder).dx = function (requiredCapacity) {
    if (this.h12_1.length < requiredCapacity)
      this.h12_1 = copyOf_4(this.h12_1, coerceAtLeast(requiredCapacity, imul(this.h12_1.length, 2)));
  };
  protoOf(IntArrayBuilder).j12 = function (c) {
    this.kx();
    var tmp = this.h12_1;
    var _unary__edvuaz = this.i12_1;
    this.i12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).bx = function () {
    return copyOf_4(this.h12_1, this.i12_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.r12_1 = bufferWithData;
    this.s12_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.dx(10);
  }
  protoOf(UIntArrayBuilder).zw = function () {
    return this.s12_1;
  };
  protoOf(UIntArrayBuilder).dx = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.r12_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.r12_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.r12_1), 2));
      tmp.r12_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_4(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).t12 = function (c) {
    this.kx();
    var tmp = this.r12_1;
    var _unary__edvuaz = this.s12_1;
    this.s12_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).i14 = function () {
    var tmp0 = this.r12_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.s12_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_4(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).bx = function () {
    return new UIntArray(this.i14());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.a13_1 = bufferWithData;
    this.b13_1 = bufferWithData.length;
    this.dx(10);
  }
  protoOf(ShortArrayBuilder).zw = function () {
    return this.b13_1;
  };
  protoOf(ShortArrayBuilder).dx = function (requiredCapacity) {
    if (this.a13_1.length < requiredCapacity)
      this.a13_1 = copyOf_5(this.a13_1, coerceAtLeast(requiredCapacity, imul(this.a13_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).c13 = function (c) {
    this.kx();
    var tmp = this.a13_1;
    var _unary__edvuaz = this.b13_1;
    this.b13_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).bx = function () {
    return copyOf_5(this.a13_1, this.b13_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.k13_1 = bufferWithData;
    this.l13_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.dx(10);
  }
  protoOf(UShortArrayBuilder).zw = function () {
    return this.l13_1;
  };
  protoOf(UShortArrayBuilder).dx = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.k13_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.k13_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.k13_1), 2));
      tmp.k13_1 = _UShortArray___init__impl__9b26ef_0(copyOf_5(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).m13 = function (c) {
    this.kx();
    var tmp = this.k13_1;
    var _unary__edvuaz = this.l13_1;
    this.l13_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).j14 = function () {
    var tmp0 = this.k13_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.l13_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_5(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).bx = function () {
    return new UShortArray(this.j14());
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.u13_1 = bufferWithData;
    this.v13_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.dx(10);
  }
  protoOf(UByteArrayBuilder).zw = function () {
    return this.v13_1;
  };
  protoOf(UByteArrayBuilder).dx = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.u13_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.u13_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.u13_1), 2));
      tmp.u13_1 = _UByteArray___init__impl__ip4y9n_0(copyOf(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).w13 = function (c) {
    this.kx();
    var tmp = this.u13_1;
    var _unary__edvuaz = this.v13_1;
    this.v13_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).k14 = function () {
    var tmp0 = this.u13_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.v13_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).bx = function () {
    return new UByteArray(this.k14());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.d14_1 = bufferWithData;
    this.e14_1 = bufferWithData.length;
    this.dx(10);
  }
  protoOf(BooleanArrayBuilder).zw = function () {
    return this.e14_1;
  };
  protoOf(BooleanArrayBuilder).dx = function (requiredCapacity) {
    if (this.d14_1.length < requiredCapacity)
      this.d14_1 = copyOf_6(this.d14_1, coerceAtLeast(requiredCapacity, imul(this.d14_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).f14 = function (c) {
    this.kx();
    var tmp = this.d14_1;
    var _unary__edvuaz = this.e14_1;
    this.e14_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).bx = function () {
    return copyOf_6(this.d14_1, this.e14_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.l14_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).ho = function () {
    return this.l14_1;
  };
  protoOf(StringSerializer).m14 = function (encoder, value) {
    return encoder.ms(value);
  };
  protoOf(StringSerializer).io = function (encoder, value) {
    return this.m14(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).jo = function (decoder) {
    return decoder.dr();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.n14_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).ho = function () {
    return this.n14_1;
  };
  protoOf(BooleanSerializer).o14 = function (encoder, value) {
    return encoder.es(value);
  };
  protoOf(BooleanSerializer).io = function (encoder, value) {
    return this.o14(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).jo = function (decoder) {
    return decoder.vq();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.p14_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).ho = function () {
    return this.p14_1;
  };
  protoOf(IntSerializer).q14 = function (encoder, value) {
    return encoder.hs(value);
  };
  protoOf(IntSerializer).io = function (encoder, value) {
    return this.q14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).jo = function (decoder) {
    return decoder.yq();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.r14_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).ho = function () {
    return this.r14_1;
  };
  protoOf(FloatSerializer).s14 = function (encoder, value) {
    return encoder.js(value);
  };
  protoOf(FloatSerializer).io = function (encoder, value) {
    return this.s14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).jo = function (decoder) {
    return decoder.ar();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.t14_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).ho = function () {
    return this.t14_1;
  };
  protoOf(DoubleSerializer).u14 = function (encoder, value) {
    return encoder.ks(value);
  };
  protoOf(DoubleSerializer).io = function (encoder, value) {
    return this.u14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).jo = function (decoder) {
    return decoder.br();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.v14_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).ho = function () {
    return this.v14_1;
  };
  protoOf(LongSerializer).w14 = function (encoder, value) {
    return encoder.is(value);
  };
  protoOf(LongSerializer).io = function (encoder, value) {
    return this.w14(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).jo = function (decoder) {
    return decoder.zq();
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
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.x14_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.x14_1 = serialName;
    this.y14_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).op = function () {
    return this.x14_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).pp = function () {
    return this.y14_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).rp = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).tp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).up = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).xp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).wp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).vp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.x14_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.x14_1 === other.x14_1 && equals(this.y14_1, other.y14_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.x14_1) + imul(31, this.y14_1.hashCode()) | 0;
  };
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().u2();
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var primitive = _iterator__ex2g4s.v();
      var primitiveName = primitive.ho().op();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).o() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.z14_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).ho = function () {
    return this.z14_1;
  };
  protoOf(ByteSerializer).a15 = function (encoder, value) {
    return encoder.fs(value);
  };
  protoOf(ByteSerializer).io = function (encoder, value) {
    return this.a15(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).jo = function (decoder) {
    return decoder.wq();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.b15_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).ho = function () {
    return this.b15_1;
  };
  protoOf(ShortSerializer).c15 = function (encoder, value) {
    return encoder.gs(value);
  };
  protoOf(ShortSerializer).io = function (encoder, value) {
    return this.c15(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).jo = function (decoder) {
    return decoder.xq();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.d15_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).ho = function () {
    return this.d15_1;
  };
  protoOf(CharSerializer).e15 = function (encoder, value) {
    return encoder.ls(value);
  };
  protoOf(CharSerializer).io = function (encoder, value) {
    return this.e15(encoder, value instanceof Char ? value.v1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).f15 = function (decoder) {
    return decoder.cr();
  };
  protoOf(CharSerializer).jo = function (decoder) {
    return new Char(this.f15(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.g15_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).ho = function () {
    return this.g15_1.ho();
  };
  protoOf(UnitSerializer).h15 = function (encoder, value) {
    this.g15_1.zo(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).io = function (encoder, value) {
    return this.h15(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).i15 = function (decoder) {
    this.g15_1.jo(decoder);
  };
  protoOf(UnitSerializer).jo = function (decoder) {
    this.i15(decoder);
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
  protoOf(NamedValueDecoder).l15 = function (_this__u8e3s4, index) {
    return this.n15(this.m15(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).n15 = function (nestedName) {
    var tmp0_elvis_lhs = this.q15();
    return this.r15(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).m15 = function (descriptor, index) {
    return descriptor.tp(index);
  };
  protoOf(NamedValueDecoder).r15 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).s15 = function () {
    return this.o15_1.r() ? '$' : joinToString(this.o15_1, '.', '$.');
  };
  function NamedValueEncoder() {
    TaggedEncoder.call(this);
  }
  protoOf(NamedValueEncoder).l15 = function (_this__u8e3s4, index) {
    return this.n15(this.m15(_this__u8e3s4, index));
  };
  protoOf(NamedValueEncoder).n15 = function (nestedName) {
    var tmp0_elvis_lhs = this.q15();
    return this.r15(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueEncoder).m15 = function (descriptor, index) {
    return descriptor.tp(index);
  };
  protoOf(NamedValueEncoder).r15 = function (parentName, childName) {
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
    $this.g16(tag);
    var r = block();
    if (!$this.p15_1) {
      $this.h16();
    }
    $this.p15_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.gr($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.ho().hp();
      var tmp;
      if (isNullabilitySupported || tmp0.tq()) {
        tmp = this$0.gr($deserializer, $previousValue);
      } else {
        tmp = tmp0.uq();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.o15_1 = ArrayList_init_$Create$_0();
    this.p15_1 = false;
  }
  protoOf(TaggedDecoder).xr = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).t15 = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).u15 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).v15 = function (tag) {
    var tmp = this.t15(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).w15 = function (tag) {
    var tmp = this.t15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).x15 = function (tag) {
    var tmp = this.t15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).y15 = function (tag) {
    var tmp = this.t15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).z15 = function (tag) {
    var tmp = this.t15(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).a16 = function (tag) {
    var tmp = this.t15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).b16 = function (tag) {
    var tmp = this.t15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).c16 = function (tag) {
    var tmp = this.t15(tag);
    return tmp instanceof Char ? tmp.v1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).d16 = function (tag) {
    var tmp = this.t15(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).e16 = function (tag, enumDescriptor) {
    var tmp = this.t15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).f16 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.g16(tag);
    return this;
  };
  protoOf(TaggedDecoder).gr = function (deserializer, previousValue) {
    return this.hr(deserializer);
  };
  protoOf(TaggedDecoder).fr = function (descriptor) {
    return this.f16(this.h16(), descriptor);
  };
  protoOf(TaggedDecoder).tq = function () {
    var tmp0_elvis_lhs = this.q15();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.u15(currentTag);
  };
  protoOf(TaggedDecoder).uq = function () {
    return null;
  };
  protoOf(TaggedDecoder).vq = function () {
    return this.v15(this.h16());
  };
  protoOf(TaggedDecoder).wq = function () {
    return this.w15(this.h16());
  };
  protoOf(TaggedDecoder).xq = function () {
    return this.x15(this.h16());
  };
  protoOf(TaggedDecoder).yq = function () {
    return this.y15(this.h16());
  };
  protoOf(TaggedDecoder).zq = function () {
    return this.z15(this.h16());
  };
  protoOf(TaggedDecoder).ar = function () {
    return this.a16(this.h16());
  };
  protoOf(TaggedDecoder).br = function () {
    return this.b16(this.h16());
  };
  protoOf(TaggedDecoder).cr = function () {
    return this.c16(this.h16());
  };
  protoOf(TaggedDecoder).dr = function () {
    return this.d16(this.h16());
  };
  protoOf(TaggedDecoder).er = function (enumDescriptor) {
    return this.e16(this.h16(), enumDescriptor);
  };
  protoOf(TaggedDecoder).ir = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).jr = function (descriptor) {
  };
  protoOf(TaggedDecoder).kr = function (descriptor, index) {
    return this.v15(this.l15(descriptor, index));
  };
  protoOf(TaggedDecoder).lr = function (descriptor, index) {
    return this.w15(this.l15(descriptor, index));
  };
  protoOf(TaggedDecoder).mr = function (descriptor, index) {
    return this.x15(this.l15(descriptor, index));
  };
  protoOf(TaggedDecoder).nr = function (descriptor, index) {
    return this.y15(this.l15(descriptor, index));
  };
  protoOf(TaggedDecoder).or = function (descriptor, index) {
    return this.z15(this.l15(descriptor, index));
  };
  protoOf(TaggedDecoder).pr = function (descriptor, index) {
    return this.a16(this.l15(descriptor, index));
  };
  protoOf(TaggedDecoder).qr = function (descriptor, index) {
    return this.b16(this.l15(descriptor, index));
  };
  protoOf(TaggedDecoder).rr = function (descriptor, index) {
    return this.c16(this.l15(descriptor, index));
  };
  protoOf(TaggedDecoder).sr = function (descriptor, index) {
    return this.d16(this.l15(descriptor, index));
  };
  protoOf(TaggedDecoder).tr = function (descriptor, index) {
    return this.f16(this.l15(descriptor, index), descriptor.wp(index));
  };
  protoOf(TaggedDecoder).ur = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.l15(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).wr = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.l15(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).q15 = function () {
    return lastOrNull(this.o15_1);
  };
  protoOf(TaggedDecoder).g16 = function (name) {
    this.o15_1.b1(name);
  };
  protoOf(TaggedDecoder).h16 = function () {
    var r = this.o15_1.b3(get_lastIndex_0(this.o15_1));
    this.p15_1 = true;
    return r;
  };
  function encodeElement($this, desc, index) {
    var tag = $this.l15(desc, index);
    $this.g16(tag);
    return true;
  }
  function TaggedEncoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.j16_1 = ArrayList_init_$Create$_0();
  }
  protoOf(TaggedEncoder).xr = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedEncoder).k16 = function (tag, value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(TaggedEncoder).l16 = function (tag) {
  };
  protoOf(TaggedEncoder).m16 = function (tag) {
    throw SerializationException_init_$Create$_0('null is not supported');
  };
  protoOf(TaggedEncoder).n16 = function (tag, value) {
    return this.k16(tag, value);
  };
  protoOf(TaggedEncoder).o16 = function (tag, value) {
    return this.k16(tag, value);
  };
  protoOf(TaggedEncoder).p16 = function (tag, value) {
    return this.k16(tag, value);
  };
  protoOf(TaggedEncoder).q16 = function (tag, value) {
    return this.k16(tag, value);
  };
  protoOf(TaggedEncoder).r16 = function (tag, value) {
    return this.k16(tag, value);
  };
  protoOf(TaggedEncoder).s16 = function (tag, value) {
    return this.k16(tag, value);
  };
  protoOf(TaggedEncoder).t16 = function (tag, value) {
    return this.k16(tag, value);
  };
  protoOf(TaggedEncoder).u16 = function (tag, value) {
    return this.k16(tag, new Char(value));
  };
  protoOf(TaggedEncoder).v16 = function (tag, value) {
    return this.k16(tag, value);
  };
  protoOf(TaggedEncoder).w16 = function (tag, enumDescriptor, ordinal) {
    return this.k16(tag, ordinal);
  };
  protoOf(TaggedEncoder).x16 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.g16(tag);
    return this;
  };
  protoOf(TaggedEncoder).os = function (descriptor) {
    return this.x16(this.h16(), descriptor);
  };
  protoOf(TaggedEncoder).dt = function () {
    return this.l16(this.z16());
  };
  protoOf(TaggedEncoder).ds = function () {
    return this.m16(this.h16());
  };
  protoOf(TaggedEncoder).es = function (value) {
    return this.t16(this.h16(), value);
  };
  protoOf(TaggedEncoder).fs = function (value) {
    return this.o16(this.h16(), value);
  };
  protoOf(TaggedEncoder).gs = function (value) {
    return this.p16(this.h16(), value);
  };
  protoOf(TaggedEncoder).hs = function (value) {
    return this.n16(this.h16(), value);
  };
  protoOf(TaggedEncoder).is = function (value) {
    return this.q16(this.h16(), value);
  };
  protoOf(TaggedEncoder).js = function (value) {
    return this.r16(this.h16(), value);
  };
  protoOf(TaggedEncoder).ks = function (value) {
    return this.s16(this.h16(), value);
  };
  protoOf(TaggedEncoder).ls = function (value) {
    return this.u16(this.h16(), value);
  };
  protoOf(TaggedEncoder).ms = function (value) {
    return this.v16(this.h16(), value);
  };
  protoOf(TaggedEncoder).ns = function (enumDescriptor, index) {
    return this.w16(this.h16(), enumDescriptor, index);
  };
  protoOf(TaggedEncoder).ir = function (descriptor) {
    return this;
  };
  protoOf(TaggedEncoder).jr = function (descriptor) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.j16_1.r()) {
      this.h16();
    }
    this.y16(descriptor);
  };
  protoOf(TaggedEncoder).y16 = function (descriptor) {
  };
  protoOf(TaggedEncoder).ps = function (descriptor, index, value) {
    return this.t16(this.l15(descriptor, index), value);
  };
  protoOf(TaggedEncoder).qs = function (descriptor, index, value) {
    return this.o16(this.l15(descriptor, index), value);
  };
  protoOf(TaggedEncoder).rs = function (descriptor, index, value) {
    return this.p16(this.l15(descriptor, index), value);
  };
  protoOf(TaggedEncoder).ss = function (descriptor, index, value) {
    return this.n16(this.l15(descriptor, index), value);
  };
  protoOf(TaggedEncoder).ts = function (descriptor, index, value) {
    return this.q16(this.l15(descriptor, index), value);
  };
  protoOf(TaggedEncoder).us = function (descriptor, index, value) {
    return this.r16(this.l15(descriptor, index), value);
  };
  protoOf(TaggedEncoder).vs = function (descriptor, index, value) {
    return this.s16(this.l15(descriptor, index), value);
  };
  protoOf(TaggedEncoder).ws = function (descriptor, index, value) {
    return this.u16(this.l15(descriptor, index), value);
  };
  protoOf(TaggedEncoder).xs = function (descriptor, index, value) {
    return this.v16(this.l15(descriptor, index), value);
  };
  protoOf(TaggedEncoder).ys = function (descriptor, index) {
    return this.x16(this.l15(descriptor, index), descriptor.wp(index));
  };
  protoOf(TaggedEncoder).zs = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.at(serializer, value);
    }
  };
  protoOf(TaggedEncoder).bt = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.ct(serializer, value);
    }
  };
  protoOf(TaggedEncoder).z16 = function () {
    return last(this.j16_1);
  };
  protoOf(TaggedEncoder).q15 = function () {
    return lastOrNull(this.j16_1);
  };
  protoOf(TaggedEncoder).g16 = function (name) {
    this.j16_1.b1(name);
  };
  protoOf(TaggedEncoder).h16 = function () {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.j16_1.r()) {
      tmp = this.j16_1.b3(get_lastIndex_0(this.j16_1));
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
    this.a17_1 = key;
    this.b17_1 = value;
  }
  protoOf(MapEntry).l1 = function () {
    return this.a17_1;
  };
  protoOf(MapEntry).m1 = function () {
    return this.b17_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.a17_1) + ', value=' + toString_0(this.b17_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.a17_1 == null ? 0 : hashCode(this.a17_1);
    result = imul(result, 31) + (this.b17_1 == null ? 0 : hashCode(this.b17_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.a17_1, tmp0_other_with_cast.a17_1))
      return false;
    if (!equals(this.b17_1, tmp0_other_with_cast.b17_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.vo('key', $keySerializer.ho());
      $this$buildSerialDescriptor.vo('value', $valueSerializer.ho());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.e17_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).ho = function () {
    return this.e17_1;
  };
  protoOf(MapEntrySerializer_0).f17 = function (_this__u8e3s4) {
    return _this__u8e3s4.l1();
  };
  protoOf(MapEntrySerializer_0).g17 = function (_this__u8e3s4) {
    return this.f17((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).h17 = function (_this__u8e3s4) {
    return _this__u8e3s4.m1();
  };
  protoOf(MapEntrySerializer_0).i17 = function (_this__u8e3s4) {
    return this.h17((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).j17 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.vo('first', $keySerializer.ho());
      $this$buildClassSerialDescriptor.vo('second', $valueSerializer.ho());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.p17_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).ho = function () {
    return this.p17_1;
  };
  protoOf(PairSerializer_0).q17 = function (_this__u8e3s4) {
    return _this__u8e3s4.wf_1;
  };
  protoOf(PairSerializer_0).g17 = function (_this__u8e3s4) {
    return this.q17(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).r17 = function (_this__u8e3s4) {
    return _this__u8e3s4.xf_1;
  };
  protoOf(PairSerializer_0).i17 = function (_this__u8e3s4) {
    return this.r17(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).j17 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.vr($this.v17_1, 0, $this.s17_1);
    var b = composite.vr($this.v17_1, 1, $this.t17_1);
    var c = composite.vr($this.v17_1, 2, $this.u17_1);
    composite.jr($this.v17_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.zr($this.v17_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.vr($this.v17_1, 0, $this.s17_1);
          break;
        case 1:
          b = composite.vr($this.v17_1, 1, $this.t17_1);
          break;
        case 2:
          c = composite.vr($this.v17_1, 2, $this.u17_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.jr($this.v17_1);
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
      $this$buildClassSerialDescriptor.vo('first', this$0.s17_1.ho());
      $this$buildClassSerialDescriptor.vo('second', this$0.t17_1.ho());
      $this$buildClassSerialDescriptor.vo('third', this$0.u17_1.ho());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.s17_1 = aSerializer;
    this.t17_1 = bSerializer;
    this.u17_1 = cSerializer;
    var tmp = this;
    tmp.v17_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).ho = function () {
    return this.v17_1;
  };
  protoOf(TripleSerializer_0).w17 = function (encoder, value) {
    var structuredEncoder = encoder.ir(this.v17_1);
    structuredEncoder.zs(this.v17_1, 0, this.s17_1, value.hm_1);
    structuredEncoder.zs(this.v17_1, 1, this.t17_1, value.im_1);
    structuredEncoder.zs(this.v17_1, 2, this.u17_1, value.jm_1);
    structuredEncoder.jr(this.v17_1);
  };
  protoOf(TripleSerializer_0).io = function (encoder, value) {
    return this.w17(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).jo = function (decoder) {
    var composite = decoder.ir(this.v17_1);
    if (composite.yr()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.k17_1 = keySerializer;
    this.l17_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).m17 = function (encoder, value) {
    var structuredEncoder = encoder.ir(this.ho());
    structuredEncoder.zs(this.ho(), 0, this.k17_1, this.g17(value));
    structuredEncoder.zs(this.ho(), 1, this.l17_1, this.i17(value));
    structuredEncoder.jr(this.ho());
  };
  protoOf(KeyValueSerializer).io = function (encoder, value) {
    return this.m17(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).jo = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.ho();
    var composite = decoder.ir(descriptor);
    var tmp$ret$0;
    $l$block: {
      if (composite.yr()) {
        var key = composite.vr(this.ho(), 0, this.k17_1);
        var value = composite.vr(this.ho(), 1, this.l17_1);
        tmp$ret$0 = this.j17(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.zr(this.ho());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.vr(this.ho(), 0, this.k17_1);
            break;
          case 1:
            value_0 = composite.vr(this.ho(), 1, this.l17_1);
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
      tmp$ret$0 = this.j17(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.jr(descriptor);
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
    this.x17_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_6(Companion_getInstance_3()));
  }
  protoOf(ULongSerializer).ho = function () {
    return this.x17_1;
  };
  protoOf(ULongSerializer).y17 = function (encoder, value) {
    var tmp = encoder.os(this.x17_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.is(tmp$ret$0);
  };
  protoOf(ULongSerializer).io = function (encoder, value) {
    return this.y17(encoder, value instanceof ULong ? value.pn_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).z17 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.fr(this.x17_1).zq();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).jo = function (decoder) {
    return new ULong(this.z17(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.a18_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_7(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).ho = function () {
    return this.a18_1;
  };
  protoOf(UIntSerializer).b18 = function (encoder, value) {
    var tmp = encoder.os(this.a18_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.hs(tmp$ret$0);
  };
  protoOf(UIntSerializer).io = function (encoder, value) {
    return this.b18(encoder, value instanceof UInt ? value.en_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).c18 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.fr(this.a18_1).yq();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).jo = function (decoder) {
    return new UInt(this.c18(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.d18_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_5(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).ho = function () {
    return this.d18_1;
  };
  protoOf(UByteSerializer).e18 = function (encoder, value) {
    var tmp = encoder.os(this.d18_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.fs(tmp$ret$0);
  };
  protoOf(UByteSerializer).io = function (encoder, value) {
    return this.e18(encoder, value instanceof UByte ? value.tm_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).f18 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.fr(this.d18_1).wq();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).jo = function (decoder) {
    return new UByte(this.f18(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.g18_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).ho = function () {
    return this.g18_1;
  };
  protoOf(UShortSerializer).h18 = function (encoder, value) {
    var tmp = encoder.os(this.g18_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.gs(tmp$ret$0);
  };
  protoOf(UShortSerializer).io = function (encoder, value) {
    return this.h18(encoder, value instanceof UShort ? value.ao_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).i18 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.fr(this.g18_1).xq();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).jo = function (decoder) {
    return new UShort(this.i18(decoder));
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
  protoOf(SerializersModule).dp = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.ep(kClass, typeArgumentsSerializers) : $super.ep.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.k18_1 = class2ContextualFactory;
    this.l18_1 = polyBase2Serializers;
    this.m18_1 = polyBase2DefaultSerializerProvider;
    this.n18_1 = polyBase2NamedSerializers;
    this.o18_1 = polyBase2DefaultDeserializerProvider;
    this.p18_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).cp = function () {
    return this.p18_1;
  };
  protoOf(SerialModuleImpl).ht = function (baseClass, value) {
    if (!baseClass.ra(value))
      return null;
    var tmp0_safe_receiver = this.l18_1.s2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.m18_1.s2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).gt = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.n18_1.s2(baseClass);
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
    var tmp_1 = this.o18_1.s2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).ep = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.k18_1.s2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q18(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).j18 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.k18_1.k1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.l1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.m1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.t18_1;
        collector.u18(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.s18(kclass, serial.r18_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.l18_1.k1().t();
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
        collector.v18(tmp_1, tmp_2, tmp$ret$11);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.m18_1.k1().t();
    while (_iterator__ex2g4s_2.u()) {
      var element_2 = _iterator__ex2g4s_2.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.l1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.m1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.w18(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.o18_1.k1().t();
    while (_iterator__ex2g4s_3.u()) {
      var element_3 = _iterator__ex2g4s_3.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.l1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.m1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.x18(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.t18_1 = serializer;
  }
  protoOf(Argless).q18 = function (typeArgumentsSerializers) {
    return this.t18_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.t18_1, this.t18_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.t18_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.r18_1 = provider;
  }
  protoOf(WithTypeArguments).q18 = function (typeArgumentsSerializers) {
    return this.r18_1(typeArgumentsSerializers);
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
    tmp.y18_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.z18_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.a19_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.b19_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.c19_1 = HashMap_init_$Create$();
    this.d19_1 = false;
  }
  protoOf(SerializersModuleBuilder).u18 = function (kClass, serializer) {
    return this.e19(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).s18 = function (kClass, provider) {
    return this.e19(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).v18 = function (baseClass, actualClass, actualSerializer) {
    this.f19(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).w18 = function (baseClass, defaultSerializerProvider) {
    this.g19(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).x18 = function (baseClass, defaultDeserializerProvider) {
    this.h19(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).i19 = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.y18_1.s2(forClass);
      if (!(previous == null) && !equals(previous, provider)) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + toString(forClass) + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.y18_1.v2(forClass, provider);
    if (isInterface_0(forClass))
      this.d19_1 = true;
  };
  protoOf(SerializersModuleBuilder).e19 = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.i19(forClass, provider, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.i19.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).g19 = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.a19_1.s2(baseClass);
    if (!(previous == null) && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + toString(baseClass) + ' is already registered: ' + toString_0(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.a19_1.v2(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).h19 = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.c19_1.s2(baseClass);
    if (!(previous == null) && !equals(previous, defaultDeserializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + toString(baseClass) + ' is already registered: ' + toString_0(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.c19_1.v2(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).j19 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.ho().op();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.z18_1;
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
    var this_1 = this.b19_1;
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
        names.w2(previousSerializer.ho().op());
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
  protoOf(SerializersModuleBuilder).f19 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.j19(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.j19.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).bx = function () {
    return new SerialModuleImpl(this.y18_1, this.z18_1, this.a19_1, this.b19_1, this.c19_1, this.d19_1);
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
    this.k19_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.k19_1.equals(tmp0_other_with_cast.k19_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.k19_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.k19_1) + ')';
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
          var tmp_1 = assocObject.yz(args.slice());
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
    this.l19_1 = $factory;
  }
  protoOf(createCache$1).fp = function (key) {
    return this.l19_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.m19_1 = $factory;
  }
  protoOf(createParametrizedCache$1).gp = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.m19_1(key, types);
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
  protoOf(SerialDescriptorImpl).hp = get_isNullable;
  protoOf(SerialDescriptorImpl).qp = get_isInline;
  protoOf(AbstractDecoder).vr = decodeSerializableElement$default;
  protoOf(AbstractDecoder).hr = decodeSerializableValue;
  protoOf(AbstractDecoder).yr = decodeSequentially;
  protoOf(AbstractDecoder).as = decodeCollectionSize;
  protoOf(AbstractEncoder).dt = encodeNotNullMark;
  protoOf(AbstractEncoder).et = beginCollection;
  protoOf(AbstractEncoder).at = encodeSerializableValue;
  protoOf(AbstractEncoder).ct = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).ft = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).hp = get_isNullable;
  protoOf(ListLikeDescriptor).qp = get_isInline;
  protoOf(ListLikeDescriptor).sp = get_annotations;
  protoOf(MapLikeDescriptor).hp = get_isNullable;
  protoOf(MapLikeDescriptor).qp = get_isInline;
  protoOf(MapLikeDescriptor).sp = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).hp = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).qp = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).oz = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).hp = get_isNullable;
  protoOf(NothingSerialDescriptor).qp = get_isInline;
  protoOf(NothingSerialDescriptor).sp = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).hp = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).qp = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).sp = get_annotations;
  protoOf(TaggedDecoder).vr = decodeSerializableElement$default;
  protoOf(TaggedDecoder).hr = decodeSerializableValue;
  protoOf(TaggedDecoder).yr = decodeSequentially;
  protoOf(TaggedDecoder).as = decodeCollectionSize;
  protoOf(TaggedEncoder).et = beginCollection;
  protoOf(TaggedEncoder).at = encodeSerializableValue;
  protoOf(TaggedEncoder).ct = encodeNullableSerializableValue;
  protoOf(TaggedEncoder).ft = shouldEncodeElementDefault;
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
