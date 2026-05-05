(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-io-kotlinx-io-bytestring'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-io-kotlinx-io-bytestring'.");
    }
    globalThis['kotlinx-io-kotlinx-io-bytestring'] = factory(typeof globalThis['kotlinx-io-kotlinx-io-bytestring'] === 'undefined' ? {} : globalThis['kotlinx-io-kotlinx-io-bytestring'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.c;
  var copyOfRange = kotlin_kotlin.$_$.b6;
  var protoOf = kotlin_kotlin.$_$.yb;
  var objectCreate = kotlin_kotlin.$_$.xb;
  var toCharArray = kotlin_kotlin.$_$.le;
  var initMetadataForCompanion = kotlin_kotlin.$_$.za;
  var getKClassFromExpression = kotlin_kotlin.$_$.qc;
  var THROW_CCE = kotlin_kotlin.$_$.yf;
  var Unit_instance = kotlin_kotlin.$_$.z;
  var contentEquals = kotlin_kotlin.$_$.x5;
  var contentHashCode = kotlin_kotlin.$_$.y5;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.s2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.q3;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.r3;
  var compareTo = kotlin_kotlin.$_$.qa;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.a2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e3;
  var Comparable = kotlin_kotlin.$_$.kf;
  var initMetadataForClass = kotlin_kotlin.$_$.ya;
  var decodeToString = kotlin_kotlin.$_$.ed;
  var initMetadataForObject = kotlin_kotlin.$_$.eb;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(ByteString, 'ByteString', VOID, VOID, [Comparable]);
  initMetadataForObject(UnsafeByteStringOperations, 'UnsafeByteStringOperations');
  //endregion
  function ByteString_init_$Init$(data, startIndex, endIndex, $this) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? data.length : endIndex;
    ByteString.call($this, copyOfRange(data, startIndex, endIndex), null);
    return $this;
  }
  function ByteString_init_$Create$(data, startIndex, endIndex) {
    return ByteString_init_$Init$(data, startIndex, endIndex, objectCreate(protoOf(ByteString)));
  }
  function Companion() {
    Companion_instance = this;
    this.k1a_1 = new ByteString(new Int8Array(0), null);
    this.l1a_1 = toCharArray('0123456789abcdef');
  }
  protoOf(Companion).m1a = function (byteArray) {
    return new ByteString(byteArray, null);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ByteString(data, dummy) {
    Companion_getInstance();
    this.n1a_1 = data;
    this.o1a_1 = 0;
  }
  protoOf(ByteString).e1 = function () {
    return this.n1a_1.length;
  };
  protoOf(ByteString).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ByteString))
      THROW_CCE();
    if (!(other.n1a_1.length === this.n1a_1.length))
      return false;
    if (!(other.o1a_1 === 0) && !(this.o1a_1 === 0) && !(other.o1a_1 === this.o1a_1))
      return false;
    return contentEquals(this.n1a_1, other.n1a_1);
  };
  protoOf(ByteString).hashCode = function () {
    var hc = this.o1a_1;
    if (hc === 0) {
      hc = contentHashCode(this.n1a_1);
      this.o1a_1 = hc;
    }
    return hc;
  };
  protoOf(ByteString).d1 = function (index) {
    if (index < 0 || index >= this.e1())
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of byte string bounds: [0..' + this.e1() + ')');
    return this.n1a_1[index];
  };
  protoOf(ByteString).p1a = function (startIndex, endIndex) {
    var tmp;
    if (startIndex === endIndex) {
      tmp = Companion_getInstance().k1a_1;
    } else {
      tmp = ByteString_init_$Create$(this.n1a_1, startIndex, endIndex);
    }
    return tmp;
  };
  protoOf(ByteString).q1a = function (startIndex, endIndex, $super) {
    endIndex = endIndex === VOID ? this.e1() : endIndex;
    return $super === VOID ? this.p1a(startIndex, endIndex) : $super.p1a.call(this, startIndex, endIndex);
  };
  protoOf(ByteString).r1a = function (other) {
    if (other === this)
      return 0;
    var localData = this.n1a_1;
    var otherData = other.n1a_1;
    var inductionVariable = 0;
    var tmp0 = this.e1();
    // Inline function 'kotlin.math.min' call
    var b = other.e1();
    var last = Math.min(tmp0, b);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.toUByte' call
        var this_0 = localData[i];
        var tmp0_0 = _UByte___init__impl__g9hnc4(this_0);
        // Inline function 'kotlin.toUByte' call
        var this_1 = otherData[i];
        // Inline function 'kotlin.UByte.compareTo' call
        var other_0 = _UByte___init__impl__g9hnc4(this_1);
        // Inline function 'kotlin.UByte.toInt' call
        var tmp = _UByte___get_data__impl__jof9qr(tmp0_0) & 255;
        // Inline function 'kotlin.UByte.toInt' call
        var tmp$ret$5 = _UByte___get_data__impl__jof9qr(other_0) & 255;
        var cmp = compareTo(tmp, tmp$ret$5);
        if (!(cmp === 0))
          return cmp;
      }
       while (inductionVariable < last);
    return compareTo(this.e1(), other.e1());
  };
  protoOf(ByteString).d = function (other) {
    return this.r1a(other instanceof ByteString ? other : THROW_CCE());
  };
  protoOf(ByteString).toString = function () {
    if (isEmpty(this)) {
      return 'ByteString(size=0)';
    }
    var sizeStr = this.e1().toString();
    var len = (22 + sizeStr.length | 0) + imul(this.e1(), 2) | 0;
    // Inline function 'kotlin.with' call
    var $this$with = StringBuilder_init_$Create$(len);
    $this$with.q('ByteString(size=');
    $this$with.q(sizeStr);
    $this$with.q(' hex=');
    var localData = this.n1a_1;
    var inductionVariable = 0;
    var last = this.e1();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = localData[i];
        $this$with.s(Companion_getInstance().l1a_1[(b >>> 4 | 0) & 15]);
        $this$with.s(Companion_getInstance().l1a_1[b & 15]);
      }
       while (inductionVariable < last);
    return $this$with.s(_Char___init__impl__6a9atx(41)).toString();
  };
  protoOf(ByteString).s1a = function () {
    return this.n1a_1;
  };
  function ByteString_0(bytes) {
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (bytes.length === 0) {
      tmp = Companion_getInstance().k1a_1;
    } else {
      tmp = Companion_getInstance().m1a(bytes);
    }
    return tmp;
  }
  function decodeToString_0(_this__u8e3s4) {
    return decodeToString(_this__u8e3s4.s1a());
  }
  function isEmpty(_this__u8e3s4) {
    return _this__u8e3s4.e1() === 0;
  }
  function UnsafeByteStringOperations() {
  }
  protoOf(UnsafeByteStringOperations).t1a = function (array) {
    return Companion_getInstance().m1a(array);
  };
  var UnsafeByteStringOperations_instance;
  function UnsafeByteStringOperations_getInstance() {
    return UnsafeByteStringOperations_instance;
  }
  //region block: init
  UnsafeByteStringOperations_instance = new UnsafeByteStringOperations();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = UnsafeByteStringOperations_instance;
  _.$_$.b = ByteString_init_$Create$;
  _.$_$.c = ByteString_0;
  _.$_$.d = decodeToString_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-io-kotlinx-io-bytestring.js.map
