(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './core-library-digest.js', './bitops-library-bits.js', './kotlin-kotlin-stdlib.js', './bitops-library-endian.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./core-library-digest.js'), require('./bitops-library-bits.js'), require('./kotlin-kotlin-stdlib.js'), require('./bitops-library-endian.js'));
  else {
    if (typeof globalThis['core-library-digest'] === 'undefined') {
      throw new Error("Error loading module 'hash-library-sha2'. Its dependency 'core-library-digest' was not found. Please, check whether 'core-library-digest' is loaded prior to 'hash-library-sha2'.");
    }
    if (typeof globalThis['bitops-library-bits'] === 'undefined') {
      throw new Error("Error loading module 'hash-library-sha2'. Its dependency 'bitops-library-bits' was not found. Please, check whether 'bitops-library-bits' is loaded prior to 'hash-library-sha2'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'hash-library-sha2'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'hash-library-sha2'.");
    }
    if (typeof globalThis['bitops-library-endian'] === 'undefined') {
      throw new Error("Error loading module 'hash-library-sha2'. Its dependency 'bitops-library-endian' was not found. Please, check whether 'bitops-library-endian' is loaded prior to 'hash-library-sha2'.");
    }
    globalThis['hash-library-sha2'] = factory(typeof globalThis['hash-library-sha2'] === 'undefined' ? {} : globalThis['hash-library-sha2'], globalThis['core-library-digest'], globalThis['bitops-library-bits'], globalThis['kotlin-kotlin-stdlib'], globalThis['bitops-library-endian']);
  }
}(function (_, kotlin_org_kotlincrypto_core_digest, kotlin_org_kotlincrypto_bitops_bits, kotlin_kotlin, kotlin_org_kotlincrypto_bitops_endian) {
  'use strict';
  //region block: imports
  var Digest_init_$Init$ = kotlin_org_kotlincrypto_core_digest.$_$.a;
  var Bit32_init_$Create$ = kotlin_org_kotlincrypto_bitops_bits.$_$.a;
  var protoOf = kotlin_kotlin.$_$.ob;
  var initMetadataForCompanion = kotlin_kotlin.$_$.pa;
  var Digest = kotlin_org_kotlincrypto_core_digest.$_$.b;
  var Big_getInstance = kotlin_org_kotlincrypto_bitops_endian.$_$.a;
  var Unit_instance = kotlin_kotlin.$_$.v4;
  var fill = kotlin_kotlin.$_$.k6;
  var fill_0 = kotlin_kotlin.$_$.j6;
  var arrayCopy = kotlin_kotlin.$_$.l5;
  var initMetadataForClass = kotlin_kotlin.$_$.oa;
  var VOID = kotlin_kotlin.$_$.b;
  var objectCreate = kotlin_kotlin.$_$.nb;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Bit32Digest, 'Bit32Digest', VOID, Digest);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(SHA256, 'SHA256', SHA256_init_$Create$, Bit32Digest);
  //endregion
  function Bit32Digest_init_$Init$(bitStrength, h, $this) {
    Digest_init_$Init$('SHA-' + bitStrength, 64, bitStrength / 8 | 0, $this);
    Bit32Digest.call($this);
    $this.y39_1 = h;
    $this.z39_1 = new Int32Array(64);
    var tmp = $this;
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.a3a_1 = h.slice();
    $this.b3a_1 = Bit32_init_$Create$(64);
    return $this;
  }
  function Companion() {
    Companion_instance = this;
    this.c3a_1 = 64;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.d3a_1 = new Int32Array([1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  protoOf(Bit32Digest).v38 = function (input, offset) {
    var x = this.z39_1;
    Big_getInstance();
    // Inline function 'org.kotlincrypto.bitops.endian.Big.bePackIntoUnsafe' call
    var sourceIndexEnd = offset + 64 | 0;
    Big_getInstance().t39(input, x, 0, offset, sourceIndexEnd);
    var inductionVariable = 16;
    if (inductionVariable < 64)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var x15 = x[i - 15 | 0];
        var s0 = (x15 >>> 7 | 0 | x15 << 25) ^ (x15 >>> 18 | 0 | x15 << 14) ^ (x15 >>> 3 | 0);
        var x2 = x[i - 2 | 0];
        var s1 = (x2 >>> 17 | 0 | x2 << 15) ^ (x2 >>> 19 | 0 | x2 << 13) ^ (x2 >>> 10 | 0);
        var x16 = x[i - 16 | 0];
        var x7 = x[i - 7 | 0];
        x[i] = ((x16 + s0 | 0) + x7 | 0) + s1 | 0;
      }
       while (inductionVariable < 64);
    var k = Companion_getInstance().d3a_1;
    var state = this.a3a_1;
    var a = state[0];
    var b = state[1];
    var c = state[2];
    var d = state[3];
    var e = state[4];
    var f = state[5];
    var g = state[6];
    var h = state[7];
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < 64)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var s0_0 = (a >>> 2 | 0 | a << 30) ^ (a >>> 13 | 0 | a << 19) ^ (a >>> 22 | 0 | a << 10);
        var s1_0 = (e >>> 6 | 0 | e << 26) ^ (e >>> 11 | 0 | e << 21) ^ (e >>> 25 | 0 | e << 7);
        var ch = e & f ^ ~e & g;
        var maj = a & b ^ a & c ^ b & c;
        var t1 = (((h + s1_0 | 0) + ch | 0) + k[i_0] | 0) + x[i_0] | 0;
        var t2 = s0_0 + maj | 0;
        h = g;
        g = f;
        f = e;
        e = d + t1 | 0;
        d = c;
        c = b;
        b = a;
        a = t1 + t2 | 0;
      }
       while (inductionVariable_0 < 64);
    state[0] = state[0] + a | 0;
    state[1] = state[1] + b | 0;
    state[2] = state[2] + c | 0;
    state[3] = state[3] + d | 0;
    state[4] = state[4] + e | 0;
    state[5] = state[5] + f | 0;
    state[6] = state[6] + g | 0;
    state[7] = state[7] + h | 0;
    this.b3a_1.g39();
  };
  protoOf(Bit32Digest).t38 = function (buf, bufPos) {
    var digest = new Int8Array(this.p38());
    this.e3a(digest, 0, buf, bufPos);
    return digest;
  };
  protoOf(Bit32Digest).e3a = function (dest, destOffset, buf, bufPos) {
    var tmp0_container = this.b3a_1.h39(bufPos).e39();
    var bitsLo = tmp0_container.yf();
    var bitsHi = tmp0_container.zf();
    buf[bufPos] = -128;
    if ((bufPos + 1 | 0) > 56) {
      this.v38(buf, 0);
      fill(buf, 0, 0, 56);
    }
    // Inline function 'org.kotlincrypto.bitops.endian.Big.bePackIntoUnsafe' call
    Big_getInstance();
    Big_getInstance().r39(bitsHi, buf, 56);
    // Inline function 'org.kotlincrypto.bitops.endian.Big.bePackIntoUnsafe' call
    Big_getInstance();
    Big_getInstance().r39(bitsLo, buf, 60);
    this.v38(buf, 0);
    Big_getInstance();
    var tmp2 = this.a3a_1;
    // Inline function 'org.kotlincrypto.bitops.endian.Big.bePackIntoUnsafe' call
    var sourceIndexEnd = this.p38() / 4 | 0;
    Big_getInstance().s39(tmp2, dest, destOffset, 0, sourceIndexEnd);
  };
  protoOf(Bit32Digest).u38 = function () {
    fill_0(this.z39_1, 0);
    var tmp0 = this.y39_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destination = this.a3a_1;
    var endIndex = tmp0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination, 0, 0, endIndex);
    this.b3a_1.i39();
  };
  function Bit32Digest() {
    Companion_getInstance();
  }
  function SHA256_init_$Init$($this) {
    Bit32Digest_init_$Init$(256, Companion_getInstance_0().f3a_1, $this);
    SHA256.call($this);
    return $this;
  }
  function SHA256_init_$Create$() {
    return SHA256_init_$Init$(objectCreate(protoOf(SHA256)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.f3a_1 = new Int32Array([1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225]);
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function SHA256() {
    Companion_getInstance_0();
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SHA256_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=hash-library-sha2.js.map
