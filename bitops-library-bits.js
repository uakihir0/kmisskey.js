(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'bitops-library-bits'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'bitops-library-bits'.");
    }
    globalThis['bitops-library-bits'] = factory(typeof globalThis['bitops-library-bits'] === 'undefined' ? {} : globalThis['bitops-library-bits'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ob;
  var objectCreate = kotlin_kotlin.$_$.nb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.pa;
  var toString = kotlin_kotlin.$_$.rb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var Unit_instance = kotlin_kotlin.$_$.v4;
  var initMetadataForClass = kotlin_kotlin.$_$.oa;
  var VOID = kotlin_kotlin.$_$.b;
  var hashCode = kotlin_kotlin.$_$.na;
  var getBooleanHashCode = kotlin_kotlin.$_$.ka;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.kg;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Final_1, 'Final');
  initMetadataForClass(Final, 'Final', VOID, Final_1);
  initMetadataForClass(Final_0, 'Final', VOID, Final_1);
  initMetadataForClass(Counter, 'Counter');
  initMetadataForClass(Bit32, 'Bit32', VOID, Counter);
  initMetadataForClass(Bit64, 'Bit64', VOID, Counter);
  //endregion
  function Final_init_$Init$(lo, hi, $this) {
    Final.call($this, lo, hi, false);
    return $this;
  }
  function Final_init_$Create$(lo, hi) {
    return Final_init_$Init$(lo, hi, objectCreate(protoOf(Final)));
  }
  function Companion() {
    this.w38_1 = 1048576;
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function Bit32_init_$Init$(lo, hi, incrementBy, $this) {
    Counter.call($this);
    Bit32.call($this);
    // Inline function 'kotlin.require' call
    if (!(incrementBy > 0)) {
      var message = 'incrementBy[' + incrementBy + '] must be greater than 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(incrementBy <= 1048576)) {
      var message_0 = 'incrementBy[' + incrementBy + '] must be less than or equal to 1048576';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!((incrementBy % 8 | 0) === 0)) {
      var message_1 = 'incrementBy[' + incrementBy + '] must be a factor of 8';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.require' call
    if (!((-2147483648 % incrementBy | 0) === 0)) {
      var message_2 = 'Int.MIN_VALUE % incrementBy[' + incrementBy + '] != 0';
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
    // Inline function 'kotlin.require' call
    if (!((lo % incrementBy | 0) === 0)) {
      var message_3 = 'lo must be a factor of incrementBy[' + incrementBy + ']';
      throw IllegalArgumentException_init_$Create$(toString(message_3));
    }
    $this.y38_1 = incrementBy;
    $this.z38_1 = lo;
    $this.a39_1 = hi;
    return $this;
  }
  function Bit32_init_$Init$_0(incrementBy, $this) {
    Bit32_init_$Init$(0, 0, incrementBy, $this);
    return $this;
  }
  function Bit32_init_$Create$(incrementBy) {
    return Bit32_init_$Init$_0(incrementBy, objectCreate(protoOf(Bit32)));
  }
  function Final(lo, hi, isBits) {
    Final_1.call(this, isBits);
    this.c39_1 = lo;
    this.d39_1 = hi;
  }
  protoOf(Final).yf = function () {
    return this.c39_1;
  };
  protoOf(Final).zf = function () {
    return this.d39_1;
  };
  protoOf(Final).e39 = function () {
    if (this.f39_1)
      return this;
    return new Final(this.c39_1 << 3, this.d39_1 << 3 | (this.c39_1 >>> 29 | 0), true);
  };
  function Final_0() {
  }
  protoOf(Bit32).g39 = function () {
    this.z38_1 = this.z38_1 + this.y38_1 | 0;
    if (this.z38_1 === 0) {
      this.a39_1 = this.a39_1 + 1 | 0;
    }
  };
  protoOf(Bit32).h39 = function (additional) {
    var lo = this.z38_1;
    var hi = this.a39_1;
    var lt0 = lo < 0;
    lo = lo + additional | 0;
    if (lt0 && lo >= 0) {
      hi = hi + 1 | 0;
    }
    return Final_init_$Create$(lo, hi);
  };
  protoOf(Bit32).i39 = function () {
    this.z38_1 = 0;
    this.a39_1 = 0;
  };
  function Bit32() {
  }
  function Bit64() {
  }
  function Final_1(isBits) {
    this.f39_1 = isBits;
  }
  protoOf(Final_1).equals = function (other) {
    var tmp;
    if (other instanceof Final_1) {
      tmp = hashCode(other) === this.hashCode();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Final_1).hashCode = function () {
    var result = 17;
    if (this instanceof Final) {
      result = imul(result, 31) + this.c39_1 | 0;
      result = imul(result, 31) + this.d39_1 | 0;
    } else {
      if (this instanceof Final_0) {
        result = imul(result, 31) + this.k39_1.hashCode() | 0;
        result = imul(result, 31) + this.l39_1.hashCode() | 0;
      }
    }
    result = imul(result, 31) + getBooleanHashCode(this.f39_1) | 0;
    return result;
  };
  protoOf(Final_1).toString = function () {
    var tmp;
    if (this instanceof Final) {
      tmp = 'Counter.Bit32.Final[lo=' + this.c39_1 + ', hi=' + this.d39_1 + ']';
    } else {
      if (this instanceof Final_0) {
        tmp = 'Counter.Bit64.Final[lo=' + this.k39_1.toString() + ', hi=' + this.l39_1.toString() + ']';
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  };
  function Counter() {
    this.m39_1 = new Object();
  }
  protoOf(Counter).equals = function (other) {
    var tmp;
    if (other instanceof Counter) {
      tmp = hashCode(other) === this.hashCode();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Counter).hashCode = function () {
    return 527 + hashCode(this.m39_1) | 0;
  };
  protoOf(Counter).toString = function () {
    var tmp;
    if (this instanceof Bit32) {
      tmp = 'Bit32[lo=' + this.z38_1 + ', hi=' + this.a39_1 + ', incrementBy=' + this.y38_1 + ']';
    } else {
      if (this instanceof Bit64) {
        tmp = 'Bit64[lo=' + this.p39_1.toString() + ', hi=' + this.q39_1.toString() + ', incrementBy=' + this.o39_1.toString() + ']';
      } else {
        noWhenBranchMatchedException();
      }
    }
    // Inline function 'kotlin.let' call
    return 'Counter.' + tmp + '@' + this.hashCode();
  };
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Bit32_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=bitops-library-bits.js.map
