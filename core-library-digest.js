(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './error-library-error.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./error-library-error.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'core-library-digest'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'core-library-digest'.");
    }
    if (typeof globalThis['error-library-error'] === 'undefined') {
      throw new Error("Error loading module 'core-library-digest'. Its dependency 'error-library-error' was not found. Please, check whether 'error-library-error' is loaded prior to 'core-library-digest'.");
    }
    globalThis['core-library-digest'] = factory(typeof globalThis['core-library-digest'] === 'undefined' ? {} : globalThis['core-library-digest'], globalThis['kotlin-kotlin-stdlib'], globalThis['error-library-error']);
  }
}(function (_, kotlin_kotlin, kotlin_org_kotlincrypto_error) {
  'use strict';
  //region block: imports
  var hashCode = kotlin_kotlin.$_$.xa;
  var isBlank = kotlin_kotlin.$_$.od;
  var Unit_instance = kotlin_kotlin.$_$.z;
  var toString = kotlin_kotlin.$_$.bc;
  var InvalidParameterException_init_$Create$ = kotlin_org_kotlincrypto_error.$_$.a;
  var protoOf = kotlin_kotlin.$_$.yb;
  var fill = kotlin_kotlin.$_$.s6;
  var arrayCopy = kotlin_kotlin.$_$.s5;
  var equals = kotlin_kotlin.$_$.sa;
  var initMetadataForClass = kotlin_kotlin.$_$.ya;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Digest, 'Digest');
  //endregion
  function _Buffer___init__impl__mrnqm7(value) {
    return value;
  }
  function _Buffer___get_value__impl__xxr8tn($this) {
    return $this;
  }
  function Buffer__hashCode_impl_3ylui6($this) {
    return hashCode($this);
  }
  function Digest_init_$Init$(algorithm, blockSize, digestLength, $this) {
    Digest.call($this);
    var tmp = $this;
    // Inline function 'org.kotlincrypto.core.digest.internal.initializeBuffer' call
    // Inline function 'kotlin.text.isNotBlank' call
    var tmp0 = !isBlank(algorithm);
    $l$block: {
      // Inline function 'org.kotlincrypto.error.requireParam' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0) {
        break $l$block;
      }
      var message = 'algorithm cannot be blank';
      throw InvalidParameterException_init_$Create$(toString(message));
    }
    var tmp0_0 = blockSize > 0;
    $l$block_0: {
      // Inline function 'org.kotlincrypto.error.requireParam' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_0) {
        break $l$block_0;
      }
      var message_0 = 'blockSize must be greater than 0';
      throw InvalidParameterException_init_$Create$(toString(message_0));
    }
    var tmp0_1 = (blockSize % 8 | 0) === 0;
    $l$block_1: {
      // Inline function 'org.kotlincrypto.error.requireParam' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_1) {
        break $l$block_1;
      }
      var message_1 = 'blockSize must be a factor of 8';
      throw InvalidParameterException_init_$Create$(toString(message_1));
    }
    var tmp0_2 = digestLength >= 0;
    $l$block_2: {
      // Inline function 'org.kotlincrypto.error.requireParam' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_2) {
        break $l$block_2;
      }
      var message_2 = 'digestLength cannot be negative';
      throw InvalidParameterException_init_$Create$(toString(message_2));
    }
    tmp.a3d_1 = _Buffer___init__impl__mrnqm7(new Int8Array(blockSize));
    $this.y3c_1 = algorithm;
    $this.z3c_1 = digestLength;
    $this.b3d_1 = 0;
    return $this;
  }
  protoOf(Digest).c3d = function () {
    return this.z3c_1;
  };
  protoOf(Digest).d3d = function () {
    return this.y3c_1;
  };
  protoOf(Digest).e3d = function (input) {
    // Inline function 'org.kotlincrypto.core.digest.internal.commonDigest' call
    var this_0 = this.a3d_1;
    // Inline function 'kotlin.contracts.contract' call
    var p2 = input.length;
    this.f3d(input, 0, p2);
    // Inline function 'org.kotlincrypto.core.digest.internal.commonDigest' call
    var bufPos = this.b3d_1;
    // Inline function 'kotlin.contracts.contract' call
    fill(_Buffer___get_value__impl__xxr8tn(this_0), 0, bufPos);
    var p0 = _Buffer___get_value__impl__xxr8tn(this_0);
    var digest = this.g3d(p0, bufPos);
    // Inline function 'org.kotlincrypto.core.digest.internal.commonReset' call
    // Inline function 'kotlin.contracts.contract' call
    fill(_Buffer___get_value__impl__xxr8tn(this_0), 0);
    this.b3d_1 = 0;
    this.h3d();
    return digest;
  };
  protoOf(Digest).f3d = function (input, offset, len) {
    var tmp0 = this.a3d_1;
    var tmp8 = this.b3d_1;
    $l$block: {
      // Inline function 'org.kotlincrypto.core.digest.internal.commonUpdate' call
      // Inline function 'kotlin.contracts.contract' call
      var buf = _Buffer___get_value__impl__xxr8tn(tmp0);
      var blockSize = buf.length;
      var limitInput = offset + len | 0;
      var posInput = offset;
      var posBuf = tmp8;
      if (posBuf > 0) {
        if ((posBuf + len | 0) < blockSize) {
          var tmp4 = posBuf;
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = posInput;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = input;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, buf, tmp4, startIndex, limitInput);
          this.b3d_1 = posBuf + len | 0;
          break $l$block;
        }
        var needed = blockSize - posBuf | 0;
        var tmp4_0 = posBuf;
        var tmp6 = posInput;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = posInput + needed | 0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = input;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, buf, tmp4_0, tmp6, endIndex);
        this.i3d(buf, 0);
        posBuf = 0;
        posInput = posInput + needed | 0;
      }
      $l$loop: while (posInput < limitInput) {
        var posNext = posInput + blockSize | 0;
        if (posNext > limitInput) {
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex_0 = posInput;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_1 = input;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_1, buf, 0, startIndex_0, limitInput);
          posBuf = limitInput - posInput | 0;
          break $l$loop;
        }
        var p1 = posInput;
        this.i3d(input, p1);
        posInput = posNext;
      }
      this.b3d_1 = posBuf;
    }
  };
  protoOf(Digest).equals = function (other) {
    var tmp;
    if (other instanceof Digest) {
      tmp = equals(other.a3d_1, this.a3d_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Digest).hashCode = function () {
    return Buffer__hashCode_impl_3ylui6(this.a3d_1);
  };
  protoOf(Digest).toString = function () {
    // Inline function 'org.kotlincrypto.core.digest.internal.commonToString' call
    return 'Digest[' + this.d3d() + ']@' + this.hashCode();
  };
  function Digest() {
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Digest_init_$Init$;
  _.$_$.b = Digest;
  //endregion
  return _;
}));

//# sourceMappingURL=core-library-digest.js.map
