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
  var protoOf = kotlin_kotlin.$_$.yb;
  var objectCreate = kotlin_kotlin.$_$.xb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.za;
  var toString = kotlin_kotlin.$_$.bc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var Unit_instance = kotlin_kotlin.$_$.z;
  var initMetadataForClass = kotlin_kotlin.$_$.ya;
  var VOID = kotlin_kotlin.$_$.c;
  var hashCode = kotlin_kotlin.$_$.xa;
  var getBooleanHashCode = kotlin_kotlin.$_$.ua;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wg;
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
    this.j3d_1 = 1048576;
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
    $this.l3d_1 = incrementBy;
    $this.m3d_1 = lo;
    $this.n3d_1 = hi;
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
    this.p3d_1 = lo;
    this.q3d_1 = hi;
  }
  protoOf(Final).uf = function () {
    return this.p3d_1;
  };
  protoOf(Final).vf = function () {
    return this.q3d_1;
  };
  protoOf(Final).r3d = function () {
    if (this.s3d_1)
      return this;
    return new Final(this.p3d_1 << 3, this.q3d_1 << 3 | (this.p3d_1 >>> 29 | 0), true);
  };
  function Final_0() {
  }
  protoOf(Bit32).t3d = function () {
    this.m3d_1 = this.m3d_1 + this.l3d_1 | 0;
    if (this.m3d_1 === 0) {
      this.n3d_1 = this.n3d_1 + 1 | 0;
    }
  };
  protoOf(Bit32).u3d = function (additional) {
    var lo = this.m3d_1;
    var hi = this.n3d_1;
    var lt0 = lo < 0;
    lo = lo + additional | 0;
    if (lt0 && lo >= 0) {
      hi = hi + 1 | 0;
    }
    return Final_init_$Create$(lo, hi);
  };
  protoOf(Bit32).v3d = function () {
    this.m3d_1 = 0;
    this.n3d_1 = 0;
  };
  function Bit32() {
  }
  function Bit64() {
  }
  function Final_1(isBits) {
    this.s3d_1 = isBits;
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
      result = imul(result, 31) + this.p3d_1 | 0;
      result = imul(result, 31) + this.q3d_1 | 0;
    } else {
      if (this instanceof Final_0) {
        result = imul(result, 31) + this.x3d_1.hashCode() | 0;
        result = imul(result, 31) + this.y3d_1.hashCode() | 0;
      }
    }
    result = imul(result, 31) + getBooleanHashCode(this.s3d_1) | 0;
    return result;
  };
  protoOf(Final_1).toString = function () {
    var tmp;
    if (this instanceof Final) {
      tmp = 'Counter.Bit32.Final[lo=' + this.p3d_1 + ', hi=' + this.q3d_1 + ']';
    } else {
      if (this instanceof Final_0) {
        tmp = 'Counter.Bit64.Final[lo=' + this.x3d_1.toString() + ', hi=' + this.y3d_1.toString() + ']';
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  };
  function Counter() {
    this.z3d_1 = new Object();
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
    return 527 + hashCode(this.z3d_1) | 0;
  };
  protoOf(Counter).toString = function () {
    var tmp;
    if (this instanceof Bit32) {
      tmp = 'Bit32[lo=' + this.m3d_1 + ', hi=' + this.n3d_1 + ', incrementBy=' + this.l3d_1 + ']';
    } else {
      if (this instanceof Bit64) {
        tmp = 'Bit64[lo=' + this.c3e_1.toString() + ', hi=' + this.d3e_1.toString() + ', incrementBy=' + this.b3e_1.toString() + ']';
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
