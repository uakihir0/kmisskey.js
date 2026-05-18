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
  var protoOf = kotlin_kotlin.$_$.ac;
  var objectCreate = kotlin_kotlin.$_$.zb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bb;
  var toString = kotlin_kotlin.$_$.dc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var Unit_instance = kotlin_kotlin.$_$.z;
  var initMetadataForClass = kotlin_kotlin.$_$.ab;
  var VOID = kotlin_kotlin.$_$.c;
  var hashCode = kotlin_kotlin.$_$.za;
  var getBooleanHashCode = kotlin_kotlin.$_$.wa;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yg;
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
    this.z3e_1 = 1048576;
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
    $this.b3f_1 = incrementBy;
    $this.c3f_1 = lo;
    $this.d3f_1 = hi;
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
    this.f3f_1 = lo;
    this.g3f_1 = hi;
  }
  protoOf(Final).uf = function () {
    return this.f3f_1;
  };
  protoOf(Final).vf = function () {
    return this.g3f_1;
  };
  protoOf(Final).h3f = function () {
    if (this.i3f_1)
      return this;
    return new Final(this.f3f_1 << 3, this.g3f_1 << 3 | (this.f3f_1 >>> 29 | 0), true);
  };
  function Final_0() {
  }
  protoOf(Bit32).j3f = function () {
    this.c3f_1 = this.c3f_1 + this.b3f_1 | 0;
    if (this.c3f_1 === 0) {
      this.d3f_1 = this.d3f_1 + 1 | 0;
    }
  };
  protoOf(Bit32).k3f = function (additional) {
    var lo = this.c3f_1;
    var hi = this.d3f_1;
    var lt0 = lo < 0;
    lo = lo + additional | 0;
    if (lt0 && lo >= 0) {
      hi = hi + 1 | 0;
    }
    return Final_init_$Create$(lo, hi);
  };
  protoOf(Bit32).l3f = function () {
    this.c3f_1 = 0;
    this.d3f_1 = 0;
  };
  function Bit32() {
  }
  function Bit64() {
  }
  function Final_1(isBits) {
    this.i3f_1 = isBits;
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
      result = imul(result, 31) + this.f3f_1 | 0;
      result = imul(result, 31) + this.g3f_1 | 0;
    } else {
      if (this instanceof Final_0) {
        result = imul(result, 31) + this.n3f_1.hashCode() | 0;
        result = imul(result, 31) + this.o3f_1.hashCode() | 0;
      }
    }
    result = imul(result, 31) + getBooleanHashCode(this.i3f_1) | 0;
    return result;
  };
  protoOf(Final_1).toString = function () {
    var tmp;
    if (this instanceof Final) {
      tmp = 'Counter.Bit32.Final[lo=' + this.f3f_1 + ', hi=' + this.g3f_1 + ']';
    } else {
      if (this instanceof Final_0) {
        tmp = 'Counter.Bit64.Final[lo=' + this.n3f_1.toString() + ', hi=' + this.o3f_1.toString() + ']';
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  };
  function Counter() {
    this.p3f_1 = new Object();
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
    return 527 + hashCode(this.p3f_1) | 0;
  };
  protoOf(Counter).toString = function () {
    var tmp;
    if (this instanceof Bit32) {
      tmp = 'Bit32[lo=' + this.c3f_1 + ', hi=' + this.d3f_1 + ', incrementBy=' + this.b3f_1 + ']';
    } else {
      if (this instanceof Bit64) {
        tmp = 'Bit64[lo=' + this.s3f_1.toString() + ', hi=' + this.t3f_1.toString() + ', incrementBy=' + this.r3f_1.toString() + ']';
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
