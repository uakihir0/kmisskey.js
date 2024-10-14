(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './core-library-common.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./core-library-common.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'core-library-digest'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'core-library-digest'.");
    }
    if (typeof globalThis['core-library-common'] === 'undefined') {
      throw new Error("Error loading module 'core-library-digest'. Its dependency 'core-library-common' was not found. Please, check whether 'core-library-common' is loaded prior to 'core-library-digest'.");
    }
    globalThis['core-library-digest'] = factory(typeof globalThis['core-library-digest'] === 'undefined' ? {} : globalThis['core-library-digest'], globalThis['kotlin-kotlin-stdlib'], globalThis['core-library-common']);
  }
}(function (_, kotlin_kotlin, kotlin_org_kotlincrypto_core_common) {
  'use strict';
  //region block: imports
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var protoOf = kotlin_kotlin.$_$.wb;
  var initMetadataForClass = kotlin_kotlin.$_$.wa;
  var VOID = kotlin_kotlin.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.bg;
  var isBlank = kotlin_kotlin.$_$.md;
  var toString = kotlin_kotlin.$_$.ac;
  var Long = kotlin_kotlin.$_$.wf;
  var initMetadataForCompanion = kotlin_kotlin.$_$.xa;
  var Unit_getInstance = kotlin_kotlin.$_$.j5;
  var toLong = kotlin_kotlin.$_$.yb;
  var fill = kotlin_kotlin.$_$.i7;
  var Copyable = kotlin_org_kotlincrypto_core_common.$_$.b;
  var Resettable = kotlin_org_kotlincrypto_core_common.$_$.c;
  var objectCreate = kotlin_kotlin.$_$.vb;
  var equals = kotlin_kotlin.$_$.pa;
  var hashCode = kotlin_kotlin.$_$.va;
  var Algorithm = kotlin_org_kotlincrypto_core_common.$_$.a;
  var Updatable = kotlin_org_kotlincrypto_core_common.$_$.d;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DigestState, 'DigestState');
  initMetadataForClass(RealState, 'RealState', VOID, DigestState);
  initMetadataForCompanion(Companion);
  initMetadataForClass(DigestDelegate, 'DigestDelegate', VOID, VOID, [Copyable, Resettable]);
  initMetadataForClass(Digest, 'Digest', VOID, VOID, [Algorithm, Copyable, Resettable, Updatable]);
  //endregion
  function commonCheckArgs(_this__u8e3s4, offset, len) {
    if ((_this__u8e3s4.length - offset | 0) < len)
      throw IllegalArgumentException_init_$Create$('Input too short');
    if (offset < 0 || len < 0 || offset > (_this__u8e3s4.length - len | 0))
      throw IndexOutOfBoundsException_init_$Create$();
  }
  function commonToString(_this__u8e3s4) {
    return 'Digest[' + _this__u8e3s4.algorithm_3q917z_k$() + ']@' + _this__u8e3s4.hashCode();
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_bufferOffs__xc3w31($this, _set____db54di) {
    $this.bufferOffs_1 = _set____db54di;
  }
  function _get_bufferOffs__mmrkqv($this) {
    return $this.bufferOffs_1;
  }
  function _set_compressCount__ljikfc($this, _set____db54di) {
    $this.compressCount_1 = _set____db54di;
  }
  function _get_compressCount__y9tz1g($this) {
    return $this.compressCount_1;
  }
  function _get_compress__1e9wvd($this) {
    return $this.compress_1;
  }
  function _get_digest__5ry0jd($this) {
    return $this.digest_1;
  }
  function _get_resetDigest__q1iio2($this) {
    return $this.resetDigest_1;
  }
  function RealState($outer) {
    this.$this_1 = $outer;
    DigestState.call(this, $outer.algorithm_1, $outer.blockSize_1, $outer.digestLength_1);
    var tmp = this;
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.buffer_1 = this.$this_1.buffer_1.slice();
    this.bufferOffs_1 = this.$this_1.bufferOffs_1;
    this.compressCount_1 = this.$this_1.compressCount_1;
  }
  protoOf(RealState).get_buffer_bmaafd_k$ = function () {
    return this.buffer_1;
  };
  protoOf(RealState).get_bufferOffs_bclgb1_k$ = function () {
    return this.bufferOffs_1;
  };
  protoOf(RealState).get_compressCount_r3tcx0_k$ = function () {
    return this.compressCount_1;
  };
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).instance_o4rpwc_k$ = function (state, compress, digest, resetDigest) {
    var tmp = (state instanceof RealState ? state : THROW_CCE()).get_algorithm_4wyywy_k$();
    var tmp_0 = state.get_blockSize_xbjykf_k$();
    var tmp_1 = state.get_digestLength_yzsng1_k$();
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = state.buffer_1.slice();
    return new DigestDelegate(tmp, tmp_0, tmp_1, tmp$ret$1, state.bufferOffs_1, state.compressCount_1, compress, digest, resetDigest);
  };
  protoOf(Companion).instance_2vme5o_k$ = function (algorithm, blockSize, digestLength, compress, digest, resetDigest) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(algorithm)) {
      // Inline function 'org.kotlincrypto.core.digest.internal.Companion.instance.<anonymous>' call
      var message = 'algorithm cannot be blank';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(blockSize > 0)) {
      // Inline function 'org.kotlincrypto.core.digest.internal.Companion.instance.<anonymous>' call
      var message_0 = 'blockSize must be greater than 0';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((blockSize % 8 | 0) === 0)) {
      // Inline function 'org.kotlincrypto.core.digest.internal.Companion.instance.<anonymous>' call
      var message_1 = 'blockSize must be a factor of 8';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(digestLength >= 0)) {
      // Inline function 'org.kotlincrypto.core.digest.internal.Companion.instance.<anonymous>' call
      var message_2 = 'digestLength cannot be negative';
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
    return new DigestDelegate(algorithm, blockSize, digestLength, new Int8Array(blockSize), 0, new Long(0, 0), compress, digest, resetDigest);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function DigestDelegate(algorithm, blockSize, digestLength, buffer, bufferOffs, compressCount, compress, digest, resetDigest) {
    Companion_getInstance();
    this.algorithm_1 = algorithm;
    this.blockSize_1 = blockSize;
    this.digestLength_1 = digestLength;
    this.buffer_1 = buffer;
    this.bufferOffs_1 = bufferOffs;
    this.compressCount_1 = compressCount;
    this.compress_1 = compress;
    this.digest_1 = digest;
    this.resetDigest_1 = resetDigest;
  }
  protoOf(DigestDelegate).get_algorithm_4wyywy_k$ = function () {
    return this.algorithm_1;
  };
  protoOf(DigestDelegate).get_blockSize_xbjykf_k$ = function () {
    return this.blockSize_1;
  };
  protoOf(DigestDelegate).get_digestLength_yzsng1_k$ = function () {
    return this.digestLength_1;
  };
  protoOf(DigestDelegate).update_j1x7z1_k$ = function (input) {
    this.buffer_1[this.bufferOffs_1] = input;
    this.bufferOffs_1 = this.bufferOffs_1 + 1 | 0;
    if (!(this.bufferOffs_1 === this.blockSize_1))
      return Unit_getInstance();
    this.compress_1(this.buffer_1, 0);
    this.compressCount_1 = this.compressCount_1.inc_28ke_k$();
    this.bufferOffs_1 = 0;
  };
  protoOf(DigestDelegate).update_z36o2d_k$ = function (input, offset, len) {
    var i = offset;
    var remaining = len;
    while (!(this.bufferOffs_1 === 0) && remaining > 0) {
      var tmp0 = i;
      i = tmp0 + 1 | 0;
      this.update_j1x7z1_k$(input[tmp0]);
      remaining = remaining - 1 | 0;
    }
    while (remaining >= this.blockSize_1) {
      this.compress_1(input, i);
      i = i + this.blockSize_1 | 0;
      remaining = remaining - this.blockSize_1 | 0;
      this.compressCount_1 = this.compressCount_1.inc_28ke_k$();
    }
    $l$loop: while (true) {
      var tmp2 = remaining;
      remaining = tmp2 - 1 | 0;
      if (!(tmp2 > 0)) {
        break $l$loop;
      }
      var tmp3 = i;
      i = tmp3 + 1 | 0;
      this.update_j1x7z1_k$(input[tmp3]);
    }
  };
  protoOf(DigestDelegate).digest_htvjuo_k$ = function () {
    // Inline function 'kotlin.Long.times' call
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.times' call
    var this_0 = this.compressCount_1;
    var other = this.blockSize_1;
    var this_1 = this_0.times_nfzjiw_k$(toLong(other));
    var other_0 = this.bufferOffs_1;
    var bitLength = this_1.plus_r93sks_k$(toLong(other_0)).times_nfzjiw_k$(toLong(8));
    var final = this.digest_1(bitLength, this.bufferOffs_1, this.buffer_1);
    this.reset_5u6xz3_k$();
    return final;
  };
  protoOf(DigestDelegate).reset_5u6xz3_k$ = function () {
    fill(this.buffer_1, 0);
    this.bufferOffs_1 = 0;
    this.compressCount_1 = new Long(0, 0);
    this.resetDigest_1();
  };
  protoOf(DigestDelegate).copy_1tks5_k$ = function () {
    return new RealState(this);
  };
  function DigestState(algorithm, blockSize, digestLength) {
    this.algorithm_1 = algorithm;
    this.blockSize_1 = blockSize;
    this.digestLength_1 = digestLength;
  }
  protoOf(DigestState).get_algorithm_4wyywy_k$ = function () {
    return this.algorithm_1;
  };
  protoOf(DigestState).get_blockSize_xbjykf_k$ = function () {
    return this.blockSize_1;
  };
  protoOf(DigestState).get_digestLength_yzsng1_k$ = function () {
    return this.digestLength_1;
  };
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function Digest_init_$Init$(algorithm, blockSize, digestLength, $this) {
    Digest.call($this, algorithm, blockSize, digestLength, null);
    return $this;
  }
  function Digest_init_$Create$(algorithm, blockSize, digestLength) {
    return Digest_init_$Init$(algorithm, blockSize, digestLength, objectCreate(protoOf(Digest)));
  }
  function Digest_init_$Init$_0(state, $this) {
    Digest.call($this, state.get_algorithm_4wyywy_k$(), state.get_blockSize_xbjykf_k$(), state.get_digestLength_yzsng1_k$(), state);
    return $this;
  }
  function Digest_init_$Create$_0(state) {
    return Digest_init_$Init$_0(state, objectCreate(protoOf(Digest)));
  }
  function Digest$compress$ref($boundThis) {
    var l = function (p0, p1) {
      $boundThis.compress_gp7th6_k$(p0, p1);
      return Unit_getInstance();
    };
    l.callableName = 'compress';
    return l;
  }
  function Digest$digest$ref($boundThis) {
    var l = function (p0, p1, p2) {
      return $boundThis.digest_ypphse_k$(p0, p1, p2);
    };
    l.callableName = 'digest';
    return l;
  }
  function Digest$resetDigest$ref($boundThis) {
    var l = function () {
      $boundThis.resetDigest_pqcjz7_k$();
      return Unit_getInstance();
    };
    l.callableName = 'resetDigest';
    return l;
  }
  function Digest$compress$ref_0($boundThis) {
    var l = function (p0, p1) {
      $boundThis.compress_gp7th6_k$(p0, p1);
      return Unit_getInstance();
    };
    l.callableName = 'compress';
    return l;
  }
  function Digest$digest$ref_0($boundThis) {
    var l = function (p0, p1, p2) {
      return $boundThis.digest_ypphse_k$(p0, p1, p2);
    };
    l.callableName = 'digest';
    return l;
  }
  function Digest$resetDigest$ref_0($boundThis) {
    var l = function () {
      $boundThis.resetDigest_pqcjz7_k$();
      return Unit_getInstance();
    };
    l.callableName = 'resetDigest';
    return l;
  }
  function Digest(algorithm, blockSize, digestLength, state) {
    var tmp = this;
    var tmp_0;
    if (!(state == null)) {
      var tmp_1 = Companion_getInstance();
      var tmp_2 = Digest$compress$ref(this);
      var tmp_3 = Digest$digest$ref(this);
      tmp_0 = tmp_1.instance_o4rpwc_k$(state, tmp_2, tmp_3, Digest$resetDigest$ref(this));
    } else {
      var tmp_4 = Companion_getInstance();
      var tmp_5 = Digest$compress$ref_0(this);
      var tmp_6 = Digest$digest$ref_0(this);
      tmp_0 = tmp_4.instance_2vme5o_k$(algorithm, blockSize, digestLength, tmp_5, tmp_6, Digest$resetDigest$ref_0(this));
    }
    tmp.delegate_1 = tmp_0;
  }
  protoOf(Digest).algorithm_3q917z_k$ = function () {
    return this.delegate_1.get_algorithm_4wyywy_k$();
  };
  protoOf(Digest).blockSize_efexwu_k$ = function () {
    return this.delegate_1.get_blockSize_xbjykf_k$();
  };
  protoOf(Digest).digestLength_1kmpca_k$ = function () {
    return this.delegate_1.get_digestLength_yzsng1_k$();
  };
  protoOf(Digest).update_cpywm7_k$ = function (input) {
    this.updateDigest_xbmjnf_k$(input);
  };
  protoOf(Digest).update_abaron_k$ = function (input) {
    this.updateDigest_nt66yl_k$(input, 0, input.length);
  };
  protoOf(Digest).update_6igkux_k$ = function (input, offset, len) {
    // Inline function 'org.kotlincrypto.core.digest.internal.commonCheckArgs' call
    if ((input.length - offset | 0) < len)
      throw IllegalArgumentException_init_$Create$('Input too short');
    if (offset < 0 || len < 0 || offset > (input.length - len | 0))
      throw IndexOutOfBoundsException_init_$Create$();
    this.updateDigest_nt66yl_k$(input, offset, len);
  };
  protoOf(Digest).digest_m0ziv0_k$ = function () {
    return this.delegate_1.digest_htvjuo_k$();
  };
  protoOf(Digest).digest_x1av6k_k$ = function (input) {
    this.updateDigest_nt66yl_k$(input, 0, input.length);
    return this.delegate_1.digest_htvjuo_k$();
  };
  protoOf(Digest).reset_5u6xz3_k$ = function () {
    this.delegate_1.reset_5u6xz3_k$();
  };
  protoOf(Digest).equals = function (other) {
    var tmp;
    if (other instanceof Digest) {
      tmp = equals(other.delegate_1, this.delegate_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Digest).hashCode = function () {
    return hashCode(this.delegate_1);
  };
  protoOf(Digest).toString = function () {
    // Inline function 'org.kotlincrypto.core.digest.internal.commonToString' call
    return 'Digest[' + this.algorithm_3q917z_k$() + ']@' + this.hashCode();
  };
  protoOf(Digest).copy_1tks5_k$ = function () {
    return this.copy_ykyomj_k$(this.delegate_1.copy_1tks5_k$());
  };
  protoOf(Digest).updateDigest_xbmjnf_k$ = function (input) {
    this.delegate_1.update_j1x7z1_k$(input);
  };
  protoOf(Digest).updateDigest_nt66yl_k$ = function (input, offset, len) {
    this.delegate_1.update_z36o2d_k$(input, offset, len);
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Digest_init_$Init$_0;
  _.$_$.b = Digest_init_$Init$;
  _.$_$.c = Digest;
  //endregion
  return _;
}));

//# sourceMappingURL=core-library-digest.js.map
