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
  var VOID = kotlin_kotlin.$_$.b;
  var copyOfRange = kotlin_kotlin.$_$.t5;
  var protoOf = kotlin_kotlin.$_$.kb;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var toCharArray = kotlin_kotlin.$_$.vd;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ka;
  var getKClassFromExpression = kotlin_kotlin.$_$.bc;
  var THROW_CCE = kotlin_kotlin.$_$.hf;
  var Unit_instance = kotlin_kotlin.$_$.u4;
  var contentEquals = kotlin_kotlin.$_$.p5;
  var contentHashCode = kotlin_kotlin.$_$.q5;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.p2;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.q2;
  var compareTo = kotlin_kotlin.$_$.ba;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.z;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d2;
  var Comparable = kotlin_kotlin.$_$.te;
  var initMetadataForClass = kotlin_kotlin.$_$.ja;
  var decodeToString = kotlin_kotlin.$_$.pc;
  var initMetadataForObject = kotlin_kotlin.$_$.pa;
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
    this.q18_1 = new ByteString(new Int8Array(0), null);
    this.r18_1 = toCharArray('0123456789abcdef');
  }
  protoOf(Companion).s18 = function (byteArray) {
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
    this.t18_1 = data;
    this.u18_1 = 0;
  }
  protoOf(ByteString).n = function () {
    return this.t18_1.length;
  };
  protoOf(ByteString).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ByteString))
      THROW_CCE();
    if (!(other.t18_1.length === this.t18_1.length))
      return false;
    if (!(other.u18_1 === 0) && !(this.u18_1 === 0) && !(other.u18_1 === this.u18_1))
      return false;
    return contentEquals(this.t18_1, other.t18_1);
  };
  protoOf(ByteString).hashCode = function () {
    var hc = this.u18_1;
    if (hc === 0) {
      hc = contentHashCode(this.t18_1);
      this.u18_1 = hc;
    }
    return hc;
  };
  protoOf(ByteString).m = function (index) {
    if (index < 0 || index >= this.n())
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of byte string bounds: [0..' + this.n() + ')');
    return this.t18_1[index];
  };
  protoOf(ByteString).v18 = function (startIndex, endIndex) {
    var tmp;
    if (startIndex === endIndex) {
      tmp = Companion_getInstance().q18_1;
    } else {
      tmp = ByteString_init_$Create$(this.t18_1, startIndex, endIndex);
    }
    return tmp;
  };
  protoOf(ByteString).w18 = function (startIndex, endIndex, $super) {
    endIndex = endIndex === VOID ? this.n() : endIndex;
    return $super === VOID ? this.v18(startIndex, endIndex) : $super.v18.call(this, startIndex, endIndex);
  };
  protoOf(ByteString).x18 = function (other) {
    if (other === this)
      return 0;
    var localData = this.t18_1;
    var otherData = other.t18_1;
    var inductionVariable = 0;
    var tmp0 = this.n();
    // Inline function 'kotlin.math.min' call
    var b = other.n();
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
        var tmp$ret$4 = _UByte___get_data__impl__jof9qr(other_0) & 255;
        var cmp = compareTo(tmp, tmp$ret$4);
        if (!(cmp === 0))
          return cmp;
      }
       while (inductionVariable < last);
    return compareTo(this.n(), other.n());
  };
  protoOf(ByteString).d = function (other) {
    return this.x18(other instanceof ByteString ? other : THROW_CCE());
  };
  protoOf(ByteString).toString = function () {
    if (isEmpty(this)) {
      return 'ByteString(size=0)';
    }
    var sizeStr = this.n().toString();
    var len = (22 + sizeStr.length | 0) + imul(this.n(), 2) | 0;
    // Inline function 'kotlin.with' call
    var $this$with = StringBuilder_init_$Create$(len);
    $this$with.q7('ByteString(size=');
    $this$with.q7(sizeStr);
    $this$with.q7(' hex=');
    var localData = this.t18_1;
    var inductionVariable = 0;
    var last = this.n();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = localData[i];
        $this$with.r7(Companion_getInstance().r18_1[(b >>> 4 | 0) & 15]);
        $this$with.r7(Companion_getInstance().r18_1[b & 15]);
      }
       while (inductionVariable < last);
    return $this$with.r7(_Char___init__impl__6a9atx(41)).toString();
  };
  protoOf(ByteString).y18 = function () {
    return this.t18_1;
  };
  function ByteString_0(bytes) {
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (bytes.length === 0) {
      tmp = Companion_getInstance().q18_1;
    } else {
      tmp = Companion_getInstance().s18(bytes);
    }
    return tmp;
  }
  function decodeToString_0(_this__u8e3s4) {
    return decodeToString(_this__u8e3s4.y18());
  }
  function isEmpty(_this__u8e3s4) {
    return _this__u8e3s4.n() === 0;
  }
  function UnsafeByteStringOperations() {
  }
  protoOf(UnsafeByteStringOperations).z18 = function (array) {
    return Companion_getInstance().s18(array);
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
  _.$_$.a = ByteString_init_$Create$;
  _.$_$.b = UnsafeByteStringOperations_instance;
  _.$_$.c = ByteString_0;
  _.$_$.d = decodeToString_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-io-kotlinx-io-bytestring.js.map
