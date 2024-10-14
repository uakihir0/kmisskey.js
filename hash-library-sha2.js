(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './core-library-digest.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./core-library-digest.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['core-library-digest'] === 'undefined') {
      throw new Error("Error loading module 'hash-library-sha2'. Its dependency 'core-library-digest' was not found. Please, check whether 'core-library-digest' is loaded prior to 'hash-library-sha2'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'hash-library-sha2'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'hash-library-sha2'.");
    }
    globalThis['hash-library-sha2'] = factory(typeof globalThis['hash-library-sha2'] === 'undefined' ? {} : globalThis['hash-library-sha2'], globalThis['core-library-digest'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_org_kotlincrypto_core_digest, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Digest_init_$Init$ = kotlin_org_kotlincrypto_core_digest.$_$.b;
  var protoOf = kotlin_kotlin.$_$.wb;
  var objectCreate = kotlin_kotlin.$_$.vb;
  var Digest_init_$Init$_0 = kotlin_org_kotlincrypto_core_digest.$_$.a;
  var initMetadataForCompanion = kotlin_kotlin.$_$.xa;
  var Digest = kotlin_org_kotlincrypto_core_digest.$_$.c;
  var fill = kotlin_kotlin.$_$.i7;
  var fill_0 = kotlin_kotlin.$_$.h7;
  var initMetadataForClass = kotlin_kotlin.$_$.wa;
  var VOID = kotlin_kotlin.$_$.f;
  var toByte = kotlin_kotlin.$_$.xb;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Bit32Digest, 'Bit32Digest', VOID, Digest);
  initMetadataForClass(SHA256, 'SHA256', SHA256_init_$Create$, Bit32Digest);
  //endregion
  function _get_K__7mlnxi($this) {
    return $this.K_1;
  }
  function _get_h0__ndc14z($this) {
    return $this.h0__1;
  }
  function _get_h1__ndc15u($this) {
    return $this.h1__1;
  }
  function _get_h2__ndc16p($this) {
    return $this.h2__1;
  }
  function _get_h3__ndc17k($this) {
    return $this.h3__1;
  }
  function _get_h4__ndc18f($this) {
    return $this.h4__1;
  }
  function _get_h5__ndc19a($this) {
    return $this.h5__1;
  }
  function _get_h6__ndc1a5($this) {
    return $this.h6__1;
  }
  function _get_h7__ndc1b0($this) {
    return $this.h7__1;
  }
  function _get_x__7mlp09($this) {
    return $this.x_1;
  }
  function _get_state__b8zcm8($this) {
    return $this.state_1;
  }
  function Bit32Digest_init_$Init$(d, h0, h1, h2, h3, h4, h5, h6, h7, $this) {
    Digest_init_$Init$('SHA-' + d, 64, d / 8 | 0, $this);
    Bit32Digest.call($this);
    $this.h0__1 = h0;
    $this.h1__1 = h1;
    $this.h2__1 = h2;
    $this.h3__1 = h3;
    $this.h4__1 = h4;
    $this.h5__1 = h5;
    $this.h6__1 = h6;
    $this.h7__1 = h7;
    $this.x_1 = new Int32Array(64);
    var tmp = $this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.state_1 = new Int32Array([h0, h1, h2, h3, h4, h5, h6, h7]);
    return $this;
  }
  function Bit32Digest_init_$Create$(d, h0, h1, h2, h3, h4, h5, h6, h7) {
    return Bit32Digest_init_$Init$(d, h0, h1, h2, h3, h4, h5, h6, h7, objectCreate(protoOf(Bit32Digest)));
  }
  function Bit32Digest_init_$Init$_0(state, digest, $this) {
    Digest_init_$Init$_0(state, $this);
    Bit32Digest.call($this);
    $this.h0__1 = digest.h0__1;
    $this.h1__1 = digest.h1__1;
    $this.h2__1 = digest.h2__1;
    $this.h3__1 = digest.h3__1;
    $this.h4__1 = digest.h4__1;
    $this.h5__1 = digest.h5__1;
    $this.h6__1 = digest.h6__1;
    $this.h7__1 = digest.h7__1;
    var tmp = $this;
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.x_1 = digest.x_1.slice();
    var tmp_0 = $this;
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.state_1 = digest.state_1.slice();
    return $this;
  }
  function Bit32Digest_init_$Create$_0(state, digest) {
    return Bit32Digest_init_$Init$_0(state, digest, objectCreate(protoOf(Bit32Digest)));
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.K_1 = new Int32Array([1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  protoOf(Bit32Digest).compress_gp7th6_k$ = function (input, offset) {
    var x = this.x_1;
    var j = offset;
    var inductionVariable = 0;
    if (inductionVariable < 16)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp4 = j;
        j = tmp4 + 1 | 0;
        var tmp = (input[tmp4] & 255) << 24;
        var tmp3 = j;
        j = tmp3 + 1 | 0;
        var tmp_0 = tmp | (input[tmp3] & 255) << 16;
        var tmp2 = j;
        j = tmp2 + 1 | 0;
        var tmp_1 = tmp_0 | (input[tmp2] & 255) << 8;
        var tmp1 = j;
        j = tmp1 + 1 | 0;
        x[i] = tmp_1 | input[tmp1] & 255;
      }
       while (inductionVariable < 16);
    var inductionVariable_0 = 16;
    if (inductionVariable_0 < 64)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var x15 = x[i_0 - 15 | 0];
        var s0 = (x15 >>> 7 | 0 | x15 << 25) ^ (x15 >>> 18 | 0 | x15 << 14) ^ (x15 >>> 3 | 0);
        var x2 = x[i_0 - 2 | 0];
        var s1 = (x2 >>> 17 | 0 | x2 << 15) ^ (x2 >>> 19 | 0 | x2 << 13) ^ (x2 >>> 10 | 0);
        var x16 = x[i_0 - 16 | 0];
        var x7 = x[i_0 - 7 | 0];
        x[i_0] = ((x16 + s0 | 0) + x7 | 0) + s1 | 0;
      }
       while (inductionVariable_0 < 64);
    var k = Companion_getInstance().K_1;
    var a = this.state_1[0];
    var b = this.state_1[1];
    var c = this.state_1[2];
    var d = this.state_1[3];
    var e = this.state_1[4];
    var f = this.state_1[5];
    var g = this.state_1[6];
    var h = this.state_1[7];
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < 64)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var s0_0 = (a >>> 2 | 0 | a << 30) ^ (a >>> 13 | 0 | a << 19) ^ (a >>> 22 | 0 | a << 10);
        var s1_0 = (e >>> 6 | 0 | e << 26) ^ (e >>> 11 | 0 | e << 21) ^ (e >>> 25 | 0 | e << 7);
        var ch = e & f ^ ~e & g;
        var maj = a & b ^ a & c ^ b & c;
        var t1 = (((h + s1_0 | 0) + ch | 0) + k[i_1] | 0) + x[i_1] | 0;
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
       while (inductionVariable_1 < 64);
    var tmp7_array = this.state_1;
    tmp7_array[0] = tmp7_array[0] + a | 0;
    var tmp9_array = this.state_1;
    tmp9_array[1] = tmp9_array[1] + b | 0;
    var tmp11_array = this.state_1;
    tmp11_array[2] = tmp11_array[2] + c | 0;
    var tmp13_array = this.state_1;
    tmp13_array[3] = tmp13_array[3] + d | 0;
    var tmp15_array = this.state_1;
    tmp15_array[4] = tmp15_array[4] + e | 0;
    var tmp17_array = this.state_1;
    tmp17_array[5] = tmp17_array[5] + f | 0;
    var tmp19_array = this.state_1;
    tmp19_array[6] = tmp19_array[6] + g | 0;
    var tmp21_array = this.state_1;
    tmp21_array[7] = tmp21_array[7] + h | 0;
  };
  protoOf(Bit32Digest).digest_ypphse_k$ = function (bitLength, bufferOffset, buffer) {
    buffer[bufferOffset] = -128;
    var size = bufferOffset + 1 | 0;
    if (size > 56) {
      fill(buffer, 0, size, 64);
      this.compress_gp7th6_k$(buffer, 0);
      fill(buffer, 0, 0, size);
    } else {
      fill(buffer, 0, size, 56);
    }
    buffer[56] = bitLength.ushr_z7nmq8_k$(56).toByte_edm0nx_k$();
    buffer[57] = bitLength.ushr_z7nmq8_k$(48).toByte_edm0nx_k$();
    buffer[58] = bitLength.ushr_z7nmq8_k$(40).toByte_edm0nx_k$();
    buffer[59] = bitLength.ushr_z7nmq8_k$(32).toByte_edm0nx_k$();
    buffer[60] = bitLength.ushr_z7nmq8_k$(24).toByte_edm0nx_k$();
    buffer[61] = bitLength.ushr_z7nmq8_k$(16).toByte_edm0nx_k$();
    buffer[62] = bitLength.ushr_z7nmq8_k$(8).toByte_edm0nx_k$();
    buffer[63] = bitLength.toByte_edm0nx_k$();
    this.compress_gp7th6_k$(buffer, 0);
    return this.out_xqimoe_k$(this.state_1[0], this.state_1[1], this.state_1[2], this.state_1[3], this.state_1[4], this.state_1[5], this.state_1[6], this.state_1[7]);
  };
  protoOf(Bit32Digest).resetDigest_pqcjz7_k$ = function () {
    fill_0(this.x_1, 0);
    this.state_1[0] = this.h0__1;
    this.state_1[1] = this.h1__1;
    this.state_1[2] = this.h2__1;
    this.state_1[3] = this.h3__1;
    this.state_1[4] = this.h4__1;
    this.state_1[5] = this.h5__1;
    this.state_1[6] = this.h6__1;
    this.state_1[7] = this.h7__1;
  };
  function Bit32Digest() {
    Companion_getInstance();
  }
  function SHA256_init_$Init$($this) {
    Bit32Digest_init_$Init$(256, 1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225, $this);
    SHA256.call($this);
    return $this;
  }
  function SHA256_init_$Create$() {
    return SHA256_init_$Init$(objectCreate(protoOf(SHA256)));
  }
  function SHA256_init_$Init$_0(state, digest, $this) {
    Bit32Digest_init_$Init$_0(state, digest, $this);
    SHA256.call($this);
    return $this;
  }
  function SHA256_init_$Create$_0(state, digest) {
    return SHA256_init_$Init$_0(state, digest, objectCreate(protoOf(SHA256)));
  }
  protoOf(SHA256).copy_ykyomj_k$ = function (state) {
    return SHA256_init_$Create$_0(state, this);
  };
  protoOf(SHA256).out_xqimoe_k$ = function (a, b, c, d, e, f, g, h) {
    // Inline function 'kotlin.byteArrayOf' call
    return new Int8Array([toByte(a >> 24), toByte(a >> 16), toByte(a >> 8), toByte(a), toByte(b >> 24), toByte(b >> 16), toByte(b >> 8), toByte(b), toByte(c >> 24), toByte(c >> 16), toByte(c >> 8), toByte(c), toByte(d >> 24), toByte(d >> 16), toByte(d >> 8), toByte(d), toByte(e >> 24), toByte(e >> 16), toByte(e >> 8), toByte(e), toByte(f >> 24), toByte(f >> 16), toByte(f >> 8), toByte(f), toByte(g >> 24), toByte(g >> 16), toByte(g >> 8), toByte(g), toByte(h >> 24), toByte(h >> 16), toByte(h >> 8), toByte(h)]);
  };
  function SHA256() {
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SHA256_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=hash-library-sha2.js.map
