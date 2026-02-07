var id = (e) => {
  throw TypeError(e);
};
var Wl = (e, t, n) => t.has(e) || id("Cannot " + n);
var T = (e, t, n) => (
    Wl(e, t, "read from private field"),
    n ? n.call(e) : t.get(e)
  ),
  ne = (e, t, n) =>
    t.has(e)
      ? id("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  q = (e, t, n, r) => (
    Wl(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  Ie = (e, t, n) => (Wl(e, t, "access private method"), n);
var $i = (e, t, n, r) => ({
  set _(o) {
    q(e, t, o, n);
  },
  get _() {
    return T(e, t, r);
  },
});
function Vv(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function pp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var hp = { exports: {} },
  ol = {},
  mp = { exports: {} },
  Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pi = Symbol.for("react.element"),
  Hv = Symbol.for("react.portal"),
  Wv = Symbol.for("react.fragment"),
  Qv = Symbol.for("react.strict_mode"),
  Kv = Symbol.for("react.profiler"),
  Gv = Symbol.for("react.provider"),
  Yv = Symbol.for("react.context"),
  qv = Symbol.for("react.forward_ref"),
  Xv = Symbol.for("react.suspense"),
  Zv = Symbol.for("react.memo"),
  Jv = Symbol.for("react.lazy"),
  sd = Symbol.iterator;
function e0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (sd && e[sd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var gp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  vp = Object.assign,
  yp = {};
function yo(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = yp),
    (this.updater = n || gp));
}
yo.prototype.isReactComponent = {};
yo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
yo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function xp() {}
xp.prototype = yo.prototype;
function Lu(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = yp),
    (this.updater = n || gp));
}
var Du = (Lu.prototype = new xp());
Du.constructor = Lu;
vp(Du, yo.prototype);
Du.isPureReactComponent = !0;
var ld = Array.isArray,
  wp = Object.prototype.hasOwnProperty,
  Iu = { current: null },
  Sp = { key: !0, ref: !0, __self: !0, __source: !0 };
function bp(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      wp.call(t, r) && !Sp.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Pi,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Iu.current,
  };
}
function t0(e, t) {
  return {
    $$typeof: Pi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function zu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Pi;
}
function n0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ad = /\/+/g;
function Ql(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? n0("" + e.key)
    : t.toString(36);
}
function us(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Pi:
          case Hv:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Ql(s, 0) : r),
      ld(o)
        ? ((n = ""),
          e != null && (n = e.replace(ad, "$&/") + "/"),
          us(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (zu(o) &&
            (o = t0(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(ad, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), ld(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + Ql(i, l);
      s += us(i, t, n, a, o);
    }
  else if (((a = e0(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      ((i = i.value), (a = r + Ql(i, l++)), (s += us(i, t, n, a, o)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return s;
}
function Bi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    us(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function r0(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ye = { current: null },
  cs = { transition: null },
  o0 = {
    ReactCurrentDispatcher: Ye,
    ReactCurrentBatchConfig: cs,
    ReactCurrentOwner: Iu,
  };
function Cp() {
  throw Error("act(...) is not supported in production builds of React.");
}
Z.Children = {
  map: Bi,
  forEach: function (e, t, n) {
    Bi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Bi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Bi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!zu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
Z.Component = yo;
Z.Fragment = Wv;
Z.Profiler = Kv;
Z.PureComponent = Lu;
Z.StrictMode = Qv;
Z.Suspense = Xv;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o0;
Z.act = Cp;
Z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = vp({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Iu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      wp.call(t, a) &&
        !Sp.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Pi, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Yv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Gv, _context: e }),
    (e.Consumer = e)
  );
};
Z.createElement = bp;
Z.createFactory = function (e) {
  var t = bp.bind(null, e);
  return ((t.type = e), t);
};
Z.createRef = function () {
  return { current: null };
};
Z.forwardRef = function (e) {
  return { $$typeof: qv, render: e };
};
Z.isValidElement = zu;
Z.lazy = function (e) {
  return { $$typeof: Jv, _payload: { _status: -1, _result: e }, _init: r0 };
};
Z.memo = function (e, t) {
  return { $$typeof: Zv, type: e, compare: t === void 0 ? null : t };
};
Z.startTransition = function (e) {
  var t = cs.transition;
  cs.transition = {};
  try {
    e();
  } finally {
    cs.transition = t;
  }
};
Z.unstable_act = Cp;
Z.useCallback = function (e, t) {
  return Ye.current.useCallback(e, t);
};
Z.useContext = function (e) {
  return Ye.current.useContext(e);
};
Z.useDebugValue = function () {};
Z.useDeferredValue = function (e) {
  return Ye.current.useDeferredValue(e);
};
Z.useEffect = function (e, t) {
  return Ye.current.useEffect(e, t);
};
Z.useId = function () {
  return Ye.current.useId();
};
Z.useImperativeHandle = function (e, t, n) {
  return Ye.current.useImperativeHandle(e, t, n);
};
Z.useInsertionEffect = function (e, t) {
  return Ye.current.useInsertionEffect(e, t);
};
Z.useLayoutEffect = function (e, t) {
  return Ye.current.useLayoutEffect(e, t);
};
Z.useMemo = function (e, t) {
  return Ye.current.useMemo(e, t);
};
Z.useReducer = function (e, t, n) {
  return Ye.current.useReducer(e, t, n);
};
Z.useRef = function (e) {
  return Ye.current.useRef(e);
};
Z.useState = function (e) {
  return Ye.current.useState(e);
};
Z.useSyncExternalStore = function (e, t, n) {
  return Ye.current.useSyncExternalStore(e, t, n);
};
Z.useTransition = function () {
  return Ye.current.useTransition();
};
Z.version = "18.3.1";
mp.exports = Z;
var S = mp.exports;
const O = pp(S),
  Fu = Vv({ __proto__: null, default: O }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var i0 = S,
  s0 = Symbol.for("react.element"),
  l0 = Symbol.for("react.fragment"),
  a0 = Object.prototype.hasOwnProperty,
  u0 = i0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  c0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ep(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref));
  for (r in t) a0.call(t, r) && !c0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: s0,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: u0.current,
  };
}
ol.Fragment = l0;
ol.jsx = Ep;
ol.jsxs = Ep;
hp.exports = ol;
var y = hp.exports,
  kp = { exports: {} },
  ht = {},
  Pp = { exports: {} },
  Np = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, R) {
    var D = N.length;
    N.push(R);
    e: for (; 0 < D; ) {
      var U = (D - 1) >>> 1,
        $ = N[U];
      if (0 < o($, R)) ((N[U] = R), (N[D] = $), (D = U));
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var R = N[0],
      D = N.pop();
    if (D !== R) {
      N[0] = D;
      e: for (var U = 0, $ = N.length, G = $ >>> 1; U < G; ) {
        var Q = 2 * (U + 1) - 1,
          ie = N[Q],
          ve = Q + 1,
          Y = N[ve];
        if (0 > o(ie, D))
          ve < $ && 0 > o(Y, ie)
            ? ((N[U] = Y), (N[ve] = D), (U = ve))
            : ((N[U] = ie), (N[Q] = D), (U = Q));
        else if (ve < $ && 0 > o(Y, D)) ((N[U] = Y), (N[ve] = D), (U = ve));
        else break e;
      }
    }
    return R;
  }
  function o(N, R) {
    var D = N.sortIndex - R.sortIndex;
    return D !== 0 ? D : N.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    d = null,
    m = 3,
    p = !1,
    x = !1,
    g = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(N) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= N)
        (r(u), (R.sortIndex = R.expirationTime), t(a, R));
      else break;
      R = n(u);
    }
  }
  function b(N) {
    if (((g = !1), v(N), !x))
      if (n(a) !== null) ((x = !0), B(C));
      else {
        var R = n(u);
        R !== null && V(b, R.startTime - N);
      }
  }
  function C(N, R) {
    ((x = !1), g && ((g = !1), h(P), (P = -1)), (p = !0));
    var D = m;
    try {
      for (
        v(R), d = n(a);
        d !== null && (!(d.expirationTime > R) || (N && !I()));
      ) {
        var U = d.callback;
        if (typeof U == "function") {
          ((d.callback = null), (m = d.priorityLevel));
          var $ = U(d.expirationTime <= R);
          ((R = e.unstable_now()),
            typeof $ == "function" ? (d.callback = $) : d === n(a) && r(a),
            v(R));
        } else r(a);
        d = n(a);
      }
      if (d !== null) var G = !0;
      else {
        var Q = n(u);
        (Q !== null && V(b, Q.startTime - R), (G = !1));
      }
      return G;
    } finally {
      ((d = null), (m = D), (p = !1));
    }
  }
  var E = !1,
    k = null,
    P = -1,
    A = 5,
    j = -1;
  function I() {
    return !(e.unstable_now() - j < A);
  }
  function L() {
    if (k !== null) {
      var N = e.unstable_now();
      j = N;
      var R = !0;
      try {
        R = k(!0, N);
      } finally {
        R ? H() : ((E = !1), (k = null));
      }
    } else E = !1;
  }
  var H;
  if (typeof f == "function")
    H = function () {
      f(L);
    };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(),
      W = M.port2;
    ((M.port1.onmessage = L),
      (H = function () {
        W.postMessage(null);
      }));
  } else
    H = function () {
      w(L, 0);
    };
  function B(N) {
    ((k = N), E || ((E = !0), H()));
  }
  function V(N, R) {
    P = w(function () {
      N(e.unstable_now());
    }, R);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || p || ((x = !0), B(C));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (A = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (N) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = m;
      }
      var D = m;
      m = R;
      try {
        return N();
      } finally {
        m = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, R) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var D = m;
      m = N;
      try {
        return R();
      } finally {
        m = D;
      }
    }),
    (e.unstable_scheduleCallback = function (N, R, D) {
      var U = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? U + D : U))
          : (D = U),
        N)
      ) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return (
        ($ = D + $),
        (N = {
          id: c++,
          callback: R,
          priorityLevel: N,
          startTime: D,
          expirationTime: $,
          sortIndex: -1,
        }),
        D > U
          ? ((N.sortIndex = D),
            t(u, N),
            n(a) === null &&
              N === n(u) &&
              (g ? (h(P), (P = -1)) : (g = !0), V(b, D - U)))
          : ((N.sortIndex = $), t(a, N), x || p || ((x = !0), B(C))),
        N
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (N) {
      var R = m;
      return function () {
        var D = m;
        m = R;
        try {
          return N.apply(this, arguments);
        } finally {
          m = D;
        }
      };
    }));
})(Np);
Pp.exports = Np;
var d0 = Pp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var f0 = S,
  ft = d0;
function _(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Tp = new Set(),
  ei = {};
function Nr(e, t) {
  (ao(e, t), ao(e + "Capture", t));
}
function ao(e, t) {
  for (ei[e] = t, e = 0; e < t.length; e++) Tp.add(t[e]);
}
var gn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ka = Object.prototype.hasOwnProperty,
  p0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ud = {},
  cd = {};
function h0(e) {
  return ka.call(cd, e)
    ? !0
    : ka.call(ud, e)
      ? !1
      : p0.test(e)
        ? (cd[e] = !0)
        : ((ud[e] = !0), !1);
}
function m0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function g0(e, t, n, r) {
  if (t === null || typeof t > "u" || m0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function qe(e, t, n, r, o, i, s) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s));
}
var De = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    De[e] = new qe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  De[t] = new qe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  De[e] = new qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  De[e] = new qe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    De[e] = new qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  De[e] = new qe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  De[e] = new qe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  De[e] = new qe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  De[e] = new qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var $u = /[\-:]([a-z])/g;
function Bu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($u, Bu);
    De[t] = new qe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($u, Bu);
    De[t] = new qe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace($u, Bu);
  De[t] = new qe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  De[e] = new qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
De.xlinkHref = new qe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  De[e] = new qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Uu(e, t, n, r) {
  var o = De.hasOwnProperty(t) ? De[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (g0(t, n, o, r) && (n = null),
    r || o === null
      ? h0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var bn = f0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ui = Symbol.for("react.element"),
  _r = Symbol.for("react.portal"),
  Mr = Symbol.for("react.fragment"),
  Vu = Symbol.for("react.strict_mode"),
  Pa = Symbol.for("react.profiler"),
  Rp = Symbol.for("react.provider"),
  Ap = Symbol.for("react.context"),
  Hu = Symbol.for("react.forward_ref"),
  Na = Symbol.for("react.suspense"),
  Ta = Symbol.for("react.suspense_list"),
  Wu = Symbol.for("react.memo"),
  On = Symbol.for("react.lazy"),
  jp = Symbol.for("react.offscreen"),
  dd = Symbol.iterator;
function To(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (dd && e[dd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ge = Object.assign,
  Kl;
function zo(e) {
  if (Kl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Kl = (t && t[1]) || "";
    }
  return (
    `
` +
    Kl +
    e
  );
}
var Gl = !1;
function Yl(e, t) {
  if (!e || Gl) return "";
  Gl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];
      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    ((Gl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? zo(e) : "";
}
function v0(e) {
  switch (e.tag) {
    case 5:
      return zo(e.type);
    case 16:
      return zo("Lazy");
    case 13:
      return zo("Suspense");
    case 19:
      return zo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Yl(e.type, !1)), e);
    case 11:
      return ((e = Yl(e.type.render, !1)), e);
    case 1:
      return ((e = Yl(e.type, !0)), e);
    default:
      return "";
  }
}
function Ra(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mr:
      return "Fragment";
    case _r:
      return "Portal";
    case Pa:
      return "Profiler";
    case Vu:
      return "StrictMode";
    case Na:
      return "Suspense";
    case Ta:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ap:
        return (e.displayName || "Context") + ".Consumer";
      case Rp:
        return (e._context.displayName || "Context") + ".Provider";
      case Hu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Wu:
        return (
          (t = e.displayName || null),
          t !== null ? t : Ra(e.type) || "Memo"
        );
      case On:
        ((t = e._payload), (e = e._init));
        try {
          return Ra(e(t));
        } catch {}
    }
  return null;
}
function y0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ra(t);
    case 8:
      return t === Vu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Zn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Op(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function x0(e) {
  var t = Op(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          ((r = "" + s), i.call(this, s));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Vi(e) {
  e._valueTracker || (e._valueTracker = x0(e));
}
function _p(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Op(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Es(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Aa(e, t) {
  var n = t.checked;
  return ge({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function fd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Zn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Mp(e, t) {
  ((t = t.checked), t != null && Uu(e, "checked", t, !1));
}
function ja(e, t) {
  Mp(e, t);
  var n = Zn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Oa(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Oa(e, t.type, Zn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function pd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Oa(e, t, n) {
  (t !== "number" || Es(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Fo = Array.isArray;
function Wr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Zn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function _a(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return ge({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function hd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (Fo(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Zn(n) };
}
function Lp(e, t) {
  var n = Zn(t.value),
    r = Zn(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function md(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Dp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ma(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Dp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Hi,
  Ip = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Hi = Hi || document.createElement("div"),
          Hi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Hi.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ti(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Vo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  w0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vo).forEach(function (e) {
  w0.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vo[t] = Vo[e]));
  });
});
function zp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Vo.hasOwnProperty(e) && Vo[e])
      ? ("" + t).trim()
      : t + "px";
}
function Fp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = zp(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o));
    }
}
var S0 = ge(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function La(e, t) {
  if (t) {
    if (S0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function Da(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ia = null;
function Qu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var za = null,
  Qr = null,
  Kr = null;
function gd(e) {
  if ((e = Ri(e))) {
    if (typeof za != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = ul(t)), za(e.stateNode, e.type, t));
  }
}
function $p(e) {
  Qr ? (Kr ? Kr.push(e) : (Kr = [e])) : (Qr = e);
}
function Bp() {
  if (Qr) {
    var e = Qr,
      t = Kr;
    if (((Kr = Qr = null), gd(e), t)) for (e = 0; e < t.length; e++) gd(t[e]);
  }
}
function Up(e, t) {
  return e(t);
}
function Vp() {}
var ql = !1;
function Hp(e, t, n) {
  if (ql) return e(t, n);
  ql = !0;
  try {
    return Up(e, t, n);
  } finally {
    ((ql = !1), (Qr !== null || Kr !== null) && (Vp(), Bp()));
  }
}
function ni(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ul(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var Fa = !1;
if (gn)
  try {
    var Ro = {};
    (Object.defineProperty(Ro, "passive", {
      get: function () {
        Fa = !0;
      },
    }),
      window.addEventListener("test", Ro, Ro),
      window.removeEventListener("test", Ro, Ro));
  } catch {
    Fa = !1;
  }
function b0(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ho = !1,
  ks = null,
  Ps = !1,
  $a = null,
  C0 = {
    onError: function (e) {
      ((Ho = !0), (ks = e));
    },
  };
function E0(e, t, n, r, o, i, s, l, a) {
  ((Ho = !1), (ks = null), b0.apply(C0, arguments));
}
function k0(e, t, n, r, o, i, s, l, a) {
  if ((E0.apply(this, arguments), Ho)) {
    if (Ho) {
      var u = ks;
      ((Ho = !1), (ks = null));
    } else throw Error(_(198));
    Ps || ((Ps = !0), ($a = u));
  }
}
function Tr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Wp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function vd(e) {
  if (Tr(e) !== e) throw Error(_(188));
}
function P0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tr(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return (vd(o), e);
        if (i === r) return (vd(o), t);
        i = i.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) ((n = o), (r = i));
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          ((s = !0), (n = o), (r = i));
          break;
        }
        if (l === r) {
          ((s = !0), (r = o), (n = i));
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            ((s = !0), (n = i), (r = o));
            break;
          }
          if (l === r) {
            ((s = !0), (r = i), (n = o));
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function Qp(e) {
  return ((e = P0(e)), e !== null ? Kp(e) : null);
}
function Kp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Kp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Gp = ft.unstable_scheduleCallback,
  yd = ft.unstable_cancelCallback,
  N0 = ft.unstable_shouldYield,
  T0 = ft.unstable_requestPaint,
  be = ft.unstable_now,
  R0 = ft.unstable_getCurrentPriorityLevel,
  Ku = ft.unstable_ImmediatePriority,
  Yp = ft.unstable_UserBlockingPriority,
  Ns = ft.unstable_NormalPriority,
  A0 = ft.unstable_LowPriority,
  qp = ft.unstable_IdlePriority,
  il = null,
  Jt = null;
function j0(e) {
  if (Jt && typeof Jt.onCommitFiberRoot == "function")
    try {
      Jt.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var zt = Math.clz32 ? Math.clz32 : M0,
  O0 = Math.log,
  _0 = Math.LN2;
function M0(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((O0(e) / _0) | 0)) | 0);
}
var Wi = 64,
  Qi = 4194304;
function $o(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ts(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = $o(l)) : ((i &= s), i !== 0 && (r = $o(i)));
  } else ((s = n & ~o), s !== 0 ? (r = $o(s)) : i !== 0 && (r = $o(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - zt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
  return r;
}
function L0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function D0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var s = 31 - zt(i),
      l = 1 << s,
      a = o[s];
    (a === -1
      ? (!(l & n) || l & r) && (o[s] = L0(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l));
  }
}
function Ba(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Xp() {
  var e = Wi;
  return ((Wi <<= 1), !(Wi & 4194240) && (Wi = 64), e);
}
function Xl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ni(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - zt(t)),
    (e[t] = n));
}
function I0(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - zt(n),
      i = 1 << o;
    ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i));
  }
}
function Gu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - zt(n),
      o = 1 << r;
    ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
  }
}
var oe = 0;
function Zp(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Jp,
  Yu,
  eh,
  th,
  nh,
  Ua = !1,
  Ki = [],
  Hn = null,
  Wn = null,
  Qn = null,
  ri = new Map(),
  oi = new Map(),
  Mn = [],
  z0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function xd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Hn = null;
      break;
    case "dragenter":
    case "dragleave":
      Wn = null;
      break;
    case "mouseover":
    case "mouseout":
      Qn = null;
      break;
    case "pointerover":
    case "pointerout":
      ri.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oi.delete(t.pointerId);
  }
}
function Ao(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Ri(t)), t !== null && Yu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function F0(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return ((Hn = Ao(Hn, e, t, n, r, o)), !0);
    case "dragenter":
      return ((Wn = Ao(Wn, e, t, n, r, o)), !0);
    case "mouseover":
      return ((Qn = Ao(Qn, e, t, n, r, o)), !0);
    case "pointerover":
      var i = o.pointerId;
      return (ri.set(i, Ao(ri.get(i) || null, e, t, n, r, o)), !0);
    case "gotpointercapture":
      return (
        (i = o.pointerId),
        oi.set(i, Ao(oi.get(i) || null, e, t, n, r, o)),
        !0
      );
  }
  return !1;
}
function rh(e) {
  var t = ur(e.target);
  if (t !== null) {
    var n = Tr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Wp(n)), t !== null)) {
          ((e.blockedOn = t),
            nh(e.priority, function () {
              eh(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ds(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Va(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Ia = r), n.target.dispatchEvent(r), (Ia = null));
    } else return ((t = Ri(n)), t !== null && Yu(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function wd(e, t, n) {
  ds(e) && n.delete(t);
}
function $0() {
  ((Ua = !1),
    Hn !== null && ds(Hn) && (Hn = null),
    Wn !== null && ds(Wn) && (Wn = null),
    Qn !== null && ds(Qn) && (Qn = null),
    ri.forEach(wd),
    oi.forEach(wd));
}
function jo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ua ||
      ((Ua = !0),
      ft.unstable_scheduleCallback(ft.unstable_NormalPriority, $0)));
}
function ii(e) {
  function t(o) {
    return jo(o, e);
  }
  if (0 < Ki.length) {
    jo(Ki[0], e);
    for (var n = 1; n < Ki.length; n++) {
      var r = Ki[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Hn !== null && jo(Hn, e),
      Wn !== null && jo(Wn, e),
      Qn !== null && jo(Qn, e),
      ri.forEach(t),
      oi.forEach(t),
      n = 0;
    n < Mn.length;
    n++
  )
    ((r = Mn[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Mn.length && ((n = Mn[0]), n.blockedOn === null); )
    (rh(n), n.blockedOn === null && Mn.shift());
}
var Gr = bn.ReactCurrentBatchConfig,
  Rs = !0;
function B0(e, t, n, r) {
  var o = oe,
    i = Gr.transition;
  Gr.transition = null;
  try {
    ((oe = 1), qu(e, t, n, r));
  } finally {
    ((oe = o), (Gr.transition = i));
  }
}
function U0(e, t, n, r) {
  var o = oe,
    i = Gr.transition;
  Gr.transition = null;
  try {
    ((oe = 4), qu(e, t, n, r));
  } finally {
    ((oe = o), (Gr.transition = i));
  }
}
function qu(e, t, n, r) {
  if (Rs) {
    var o = Va(e, t, n, r);
    if (o === null) (la(e, t, r, As, n), xd(e, r));
    else if (F0(o, e, t, n, r)) r.stopPropagation();
    else if ((xd(e, r), t & 4 && -1 < z0.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ri(o);
        if (
          (i !== null && Jp(i),
          (i = Va(e, t, n, r)),
          i === null && la(e, t, r, As, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else la(e, t, r, null, n);
  }
}
var As = null;
function Va(e, t, n, r) {
  if (((As = null), (e = Qu(r)), (e = ur(e)), e !== null))
    if (((t = Tr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Wp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((As = e), null);
}
function oh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (R0()) {
        case Ku:
          return 1;
        case Yp:
          return 4;
        case Ns:
        case A0:
          return 16;
        case qp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Bn = null,
  Xu = null,
  fs = null;
function ih() {
  if (fs) return fs;
  var e,
    t = Xu,
    n = t.length,
    r,
    o = "value" in Bn ? Bn.value : Bn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (fs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ps(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Gi() {
  return !0;
}
function Sd() {
  return !1;
}
function mt(e) {
  function t(n, r, o, i, s) {
    ((this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null));
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Gi
        : Sd),
      (this.isPropagationStopped = Sd),
      this
    );
  }
  return (
    ge(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Gi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Gi));
      },
      persist: function () {},
      isPersistent: Gi,
    }),
    t
  );
}
var xo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zu = mt(xo),
  Ti = ge({}, xo, { view: 0, detail: 0 }),
  V0 = mt(Ti),
  Zl,
  Jl,
  Oo,
  sl = ge({}, Ti, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ju,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Oo &&
            (Oo && e.type === "mousemove"
              ? ((Zl = e.screenX - Oo.screenX), (Jl = e.screenY - Oo.screenY))
              : (Jl = Zl = 0),
            (Oo = e)),
          Zl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Jl;
    },
  }),
  bd = mt(sl),
  H0 = ge({}, sl, { dataTransfer: 0 }),
  W0 = mt(H0),
  Q0 = ge({}, Ti, { relatedTarget: 0 }),
  ea = mt(Q0),
  K0 = ge({}, xo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  G0 = mt(K0),
  Y0 = ge({}, xo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  q0 = mt(Y0),
  X0 = ge({}, xo, { data: 0 }),
  Cd = mt(X0),
  Z0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  J0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ey = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ty(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ey[e]) ? !!t[e] : !1;
}
function Ju() {
  return ty;
}
var ny = ge({}, Ti, {
    key: function (e) {
      if (e.key) {
        var t = Z0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ps(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? J0[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ju,
    charCode: function (e) {
      return e.type === "keypress" ? ps(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ps(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  ry = mt(ny),
  oy = ge({}, sl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ed = mt(oy),
  iy = ge({}, Ti, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ju,
  }),
  sy = mt(iy),
  ly = ge({}, xo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ay = mt(ly),
  uy = ge({}, sl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  cy = mt(uy),
  dy = [9, 13, 27, 32],
  ec = gn && "CompositionEvent" in window,
  Wo = null;
gn && "documentMode" in document && (Wo = document.documentMode);
var fy = gn && "TextEvent" in window && !Wo,
  sh = gn && (!ec || (Wo && 8 < Wo && 11 >= Wo)),
  kd = " ",
  Pd = !1;
function lh(e, t) {
  switch (e) {
    case "keyup":
      return dy.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ah(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Lr = !1;
function py(e, t) {
  switch (e) {
    case "compositionend":
      return ah(t);
    case "keypress":
      return t.which !== 32 ? null : ((Pd = !0), kd);
    case "textInput":
      return ((e = t.data), e === kd && Pd ? null : e);
    default:
      return null;
  }
}
function hy(e, t) {
  if (Lr)
    return e === "compositionend" || (!ec && lh(e, t))
      ? ((e = ih()), (fs = Xu = Bn = null), (Lr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return sh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var my = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Nd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!my[e.type] : t === "textarea";
}
function uh(e, t, n, r) {
  ($p(r),
    (t = js(t, "onChange")),
    0 < t.length &&
      ((n = new Zu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Qo = null,
  si = null;
function gy(e) {
  wh(e, 0);
}
function ll(e) {
  var t = zr(e);
  if (_p(t)) return e;
}
function vy(e, t) {
  if (e === "change") return t;
}
var ch = !1;
if (gn) {
  var ta;
  if (gn) {
    var na = "oninput" in document;
    if (!na) {
      var Td = document.createElement("div");
      (Td.setAttribute("oninput", "return;"),
        (na = typeof Td.oninput == "function"));
    }
    ta = na;
  } else ta = !1;
  ch = ta && (!document.documentMode || 9 < document.documentMode);
}
function Rd() {
  Qo && (Qo.detachEvent("onpropertychange", dh), (si = Qo = null));
}
function dh(e) {
  if (e.propertyName === "value" && ll(si)) {
    var t = [];
    (uh(t, si, e, Qu(e)), Hp(gy, t));
  }
}
function yy(e, t, n) {
  e === "focusin"
    ? (Rd(), (Qo = t), (si = n), Qo.attachEvent("onpropertychange", dh))
    : e === "focusout" && Rd();
}
function xy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ll(si);
}
function wy(e, t) {
  if (e === "click") return ll(t);
}
function Sy(e, t) {
  if (e === "input" || e === "change") return ll(t);
}
function by(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Bt = typeof Object.is == "function" ? Object.is : by;
function li(e, t) {
  if (Bt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ka.call(t, o) || !Bt(e[o], t[o])) return !1;
  }
  return !0;
}
function Ad(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function jd(e, t) {
  var n = Ad(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ad(n);
  }
}
function fh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? fh(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function ph() {
  for (var e = window, t = Es(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Es(e.document);
  }
  return t;
}
function tc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Cy(e) {
  var t = ph(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    fh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && tc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        ((r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = jd(n, i)));
        var s = jd(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Ey = gn && "documentMode" in document && 11 >= document.documentMode,
  Dr = null,
  Ha = null,
  Ko = null,
  Wa = !1;
function Od(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Wa ||
    Dr == null ||
    Dr !== Es(r) ||
    ((r = Dr),
    "selectionStart" in r && tc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ko && li(Ko, r)) ||
      ((Ko = r),
      (r = js(Ha, "onSelect")),
      0 < r.length &&
        ((t = new Zu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Dr))));
}
function Yi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ir = {
    animationend: Yi("Animation", "AnimationEnd"),
    animationiteration: Yi("Animation", "AnimationIteration"),
    animationstart: Yi("Animation", "AnimationStart"),
    transitionend: Yi("Transition", "TransitionEnd"),
  },
  ra = {},
  hh = {};
gn &&
  ((hh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ir.animationend.animation,
    delete Ir.animationiteration.animation,
    delete Ir.animationstart.animation),
  "TransitionEvent" in window || delete Ir.transitionend.transition);
function al(e) {
  if (ra[e]) return ra[e];
  if (!Ir[e]) return e;
  var t = Ir[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in hh) return (ra[e] = t[n]);
  return e;
}
var mh = al("animationend"),
  gh = al("animationiteration"),
  vh = al("animationstart"),
  yh = al("transitionend"),
  xh = new Map(),
  _d =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function rr(e, t) {
  (xh.set(e, t), Nr(t, [e]));
}
for (var oa = 0; oa < _d.length; oa++) {
  var ia = _d[oa],
    ky = ia.toLowerCase(),
    Py = ia[0].toUpperCase() + ia.slice(1);
  rr(ky, "on" + Py);
}
rr(mh, "onAnimationEnd");
rr(gh, "onAnimationIteration");
rr(vh, "onAnimationStart");
rr("dblclick", "onDoubleClick");
rr("focusin", "onFocus");
rr("focusout", "onBlur");
rr(yh, "onTransitionEnd");
ao("onMouseEnter", ["mouseout", "mouseover"]);
ao("onMouseLeave", ["mouseout", "mouseover"]);
ao("onPointerEnter", ["pointerout", "pointerover"]);
ao("onPointerLeave", ["pointerout", "pointerover"]);
Nr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Nr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Nr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Nr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Bo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Ny = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));
function Md(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), k0(r, t, void 0, e), (e.currentTarget = null));
}
function wh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          (Md(o, l, u), (i = a));
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          (Md(o, l, u), (i = a));
        }
    }
  }
  if (Ps) throw ((e = $a), (Ps = !1), ($a = null), e);
}
function ce(e, t) {
  var n = t[qa];
  n === void 0 && (n = t[qa] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Sh(t, e, 2, !1), n.add(r));
}
function sa(e, t, n) {
  var r = 0;
  (t && (r |= 4), Sh(n, e, r, t));
}
var qi = "_reactListening" + Math.random().toString(36).slice(2);
function ai(e) {
  if (!e[qi]) {
    ((e[qi] = !0),
      Tp.forEach(function (n) {
        n !== "selectionchange" && (Ny.has(n) || sa(n, !1, e), sa(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[qi] || ((t[qi] = !0), sa("selectionchange", !1, t));
  }
}
function Sh(e, t, n, r) {
  switch (oh(t)) {
    case 1:
      var o = B0;
      break;
    case 4:
      o = U0;
      break;
    default:
      o = qu;
  }
  ((n = o.bind(null, t, n, e)),
    (o = void 0),
    !Fa ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1));
}
function la(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = ur(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Hp(function () {
    var u = i,
      c = Qu(n),
      d = [];
    e: {
      var m = xh.get(e);
      if (m !== void 0) {
        var p = Zu,
          x = e;
        switch (e) {
          case "keypress":
            if (ps(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = ry;
            break;
          case "focusin":
            ((x = "focus"), (p = ea));
            break;
          case "focusout":
            ((x = "blur"), (p = ea));
            break;
          case "beforeblur":
          case "afterblur":
            p = ea;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = W0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = sy;
            break;
          case mh:
          case gh:
          case vh:
            p = G0;
            break;
          case yh:
            p = ay;
            break;
          case "scroll":
            p = V0;
            break;
          case "wheel":
            p = cy;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = q0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Ed;
        }
        var g = (t & 4) !== 0,
          w = !g && e === "scroll",
          h = g ? (m !== null ? m + "Capture" : null) : m;
        g = [];
        for (var f = u, v; f !== null; ) {
          v = f;
          var b = v.stateNode;
          if (
            (v.tag === 5 &&
              b !== null &&
              ((v = b),
              h !== null && ((b = ni(f, h)), b != null && g.push(ui(f, b, v)))),
            w)
          )
            break;
          f = f.return;
        }
        0 < g.length &&
          ((m = new p(m, x, null, n, c)), d.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Ia &&
            (x = n.relatedTarget || n.fromElement) &&
            (ur(x) || x[vn]))
        )
          break e;
        if (
          (p || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          p
            ? ((x = n.relatedTarget || n.toElement),
              (p = u),
              (x = x ? ur(x) : null),
              x !== null &&
                ((w = Tr(x)), x !== w || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((p = null), (x = u)),
          p !== x)
        ) {
          if (
            ((g = bd),
            (b = "onMouseLeave"),
            (h = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Ed),
              (b = "onPointerLeave"),
              (h = "onPointerEnter"),
              (f = "pointer")),
            (w = p == null ? m : zr(p)),
            (v = x == null ? m : zr(x)),
            (m = new g(b, f + "leave", p, n, c)),
            (m.target = w),
            (m.relatedTarget = v),
            (b = null),
            ur(c) === u &&
              ((g = new g(h, f + "enter", x, n, c)),
              (g.target = v),
              (g.relatedTarget = w),
              (b = g)),
            (w = b),
            p && x)
          )
            t: {
              for (g = p, h = x, f = 0, v = g; v; v = Or(v)) f++;
              for (v = 0, b = h; b; b = Or(b)) v++;
              for (; 0 < f - v; ) ((g = Or(g)), f--);
              for (; 0 < v - f; ) ((h = Or(h)), v--);
              for (; f--; ) {
                if (g === h || (h !== null && g === h.alternate)) break t;
                ((g = Or(g)), (h = Or(h)));
              }
              g = null;
            }
          else g = null;
          (p !== null && Ld(d, m, p, g, !1),
            x !== null && w !== null && Ld(d, w, x, g, !0));
        }
      }
      e: {
        if (
          ((m = u ? zr(u) : window),
          (p = m.nodeName && m.nodeName.toLowerCase()),
          p === "select" || (p === "input" && m.type === "file"))
        )
          var C = vy;
        else if (Nd(m))
          if (ch) C = Sy;
          else {
            C = xy;
            var E = yy;
          }
        else
          (p = m.nodeName) &&
            p.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (C = wy);
        if (C && (C = C(e, u))) {
          uh(d, C, n, c);
          break e;
        }
        (E && E(e, m, u),
          e === "focusout" &&
            (E = m._wrapperState) &&
            E.controlled &&
            m.type === "number" &&
            Oa(m, "number", m.value));
      }
      switch (((E = u ? zr(u) : window), e)) {
        case "focusin":
          (Nd(E) || E.contentEditable === "true") &&
            ((Dr = E), (Ha = u), (Ko = null));
          break;
        case "focusout":
          Ko = Ha = Dr = null;
          break;
        case "mousedown":
          Wa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Wa = !1), Od(d, n, c));
          break;
        case "selectionchange":
          if (Ey) break;
        case "keydown":
        case "keyup":
          Od(d, n, c);
      }
      var k;
      if (ec)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Lr
          ? lh(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      (P &&
        (sh &&
          n.locale !== "ko" &&
          (Lr || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Lr && (k = ih())
            : ((Bn = c),
              (Xu = "value" in Bn ? Bn.value : Bn.textContent),
              (Lr = !0))),
        (E = js(u, P)),
        0 < E.length &&
          ((P = new Cd(P, e, null, n, c)),
          d.push({ event: P, listeners: E }),
          k ? (P.data = k) : ((k = ah(n)), k !== null && (P.data = k)))),
        (k = fy ? py(e, n) : hy(e, n)) &&
          ((u = js(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Cd("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = k))));
    }
    wh(d, t);
  });
}
function ui(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function js(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    (o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = ni(e, n)),
      i != null && r.unshift(ui(e, i, o)),
      (i = ni(e, t)),
      i != null && r.push(ui(e, i, o))),
      (e = e.return));
  }
  return r;
}
function Or(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ld(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    (l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = ni(n, i)), a != null && s.unshift(ui(n, a, l)))
        : o || ((a = ni(n, i)), a != null && s.push(ui(n, a, l)))),
      (n = n.return));
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Ty = /\r\n?/g,
  Ry = /\u0000|\uFFFD/g;
function Dd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ty,
      `
`,
    )
    .replace(Ry, "");
}
function Xi(e, t, n) {
  if (((t = Dd(t)), Dd(e) !== t && n)) throw Error(_(425));
}
function Os() {}
var Qa = null,
  Ka = null;
function Ga(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ya = typeof setTimeout == "function" ? setTimeout : void 0,
  Ay = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Id = typeof Promise == "function" ? Promise : void 0,
  jy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Id < "u"
        ? function (e) {
            return Id.resolve(null).then(e).catch(Oy);
          }
        : Ya;
function Oy(e) {
  setTimeout(function () {
    throw e;
  });
}
function aa(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(o), ii(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ii(t);
}
function Kn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function zd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var wo = Math.random().toString(36).slice(2),
  Xt = "__reactFiber$" + wo,
  ci = "__reactProps$" + wo,
  vn = "__reactContainer$" + wo,
  qa = "__reactEvents$" + wo,
  _y = "__reactListeners$" + wo,
  My = "__reactHandles$" + wo;
function ur(e) {
  var t = e[Xt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[vn] || n[Xt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = zd(e); e !== null; ) {
          if ((n = e[Xt])) return n;
          e = zd(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Ri(e) {
  return (
    (e = e[Xt] || e[vn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function zr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function ul(e) {
  return e[ci] || null;
}
var Xa = [],
  Fr = -1;
function or(e) {
  return { current: e };
}
function de(e) {
  0 > Fr || ((e.current = Xa[Fr]), (Xa[Fr] = null), Fr--);
}
function le(e, t) {
  (Fr++, (Xa[Fr] = e.current), (e.current = t));
}
var Jn = {},
  Ue = or(Jn),
  tt = or(!1),
  wr = Jn;
function uo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function nt(e) {
  return ((e = e.childContextTypes), e != null);
}
function _s() {
  (de(tt), de(Ue));
}
function Fd(e, t, n) {
  if (Ue.current !== Jn) throw Error(_(168));
  (le(Ue, t), le(tt, n));
}
function bh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(_(108, y0(e) || "Unknown", o));
  return ge({}, n, r);
}
function Ms(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jn),
    (wr = Ue.current),
    le(Ue, e),
    le(tt, tt.current),
    !0
  );
}
function $d(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  (n
    ? ((e = bh(e, t, wr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      de(tt),
      de(Ue),
      le(Ue, e))
    : de(tt),
    le(tt, n));
}
var dn = null,
  cl = !1,
  ua = !1;
function Ch(e) {
  dn === null ? (dn = [e]) : dn.push(e);
}
function Ly(e) {
  ((cl = !0), Ch(e));
}
function ir() {
  if (!ua && dn !== null) {
    ua = !0;
    var e = 0,
      t = oe;
    try {
      var n = dn;
      for (oe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((dn = null), (cl = !1));
    } catch (o) {
      throw (dn !== null && (dn = dn.slice(e + 1)), Gp(Ku, ir), o);
    } finally {
      ((oe = t), (ua = !1));
    }
  }
  return null;
}
var $r = [],
  Br = 0,
  Ls = null,
  Ds = 0,
  vt = [],
  yt = 0,
  Sr = null,
  pn = 1,
  hn = "";
function lr(e, t) {
  (($r[Br++] = Ds), ($r[Br++] = Ls), (Ls = e), (Ds = t));
}
function Eh(e, t, n) {
  ((vt[yt++] = pn), (vt[yt++] = hn), (vt[yt++] = Sr), (Sr = e));
  var r = pn;
  e = hn;
  var o = 32 - zt(r) - 1;
  ((r &= ~(1 << o)), (n += 1));
  var i = 32 - zt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    ((i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (pn = (1 << (32 - zt(t) + o)) | (n << o) | r),
      (hn = i + e));
  } else ((pn = (1 << i) | (n << o) | r), (hn = e));
}
function nc(e) {
  e.return !== null && (lr(e, 1), Eh(e, 1, 0));
}
function rc(e) {
  for (; e === Ls; )
    ((Ls = $r[--Br]), ($r[Br] = null), (Ds = $r[--Br]), ($r[Br] = null));
  for (; e === Sr; )
    ((Sr = vt[--yt]),
      (vt[yt] = null),
      (hn = vt[--yt]),
      (vt[yt] = null),
      (pn = vt[--yt]),
      (vt[yt] = null));
}
var ct = null,
  ut = null,
  fe = !1,
  It = null;
function kh(e, t) {
  var n = xt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Bd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ct = e), (ut = Kn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ct = e), (ut = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Sr !== null ? { id: pn, overflow: hn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = xt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ct = e),
            (ut = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Za(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ja(e) {
  if (fe) {
    var t = ut;
    if (t) {
      var n = t;
      if (!Bd(e, t)) {
        if (Za(e)) throw Error(_(418));
        t = Kn(n.nextSibling);
        var r = ct;
        t && Bd(e, t)
          ? kh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (fe = !1), (ct = e));
      }
    } else {
      if (Za(e)) throw Error(_(418));
      ((e.flags = (e.flags & -4097) | 2), (fe = !1), (ct = e));
    }
  }
}
function Ud(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ct = e;
}
function Zi(e) {
  if (e !== ct) return !1;
  if (!fe) return (Ud(e), (fe = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ga(e.type, e.memoizedProps))),
    t && (t = ut))
  ) {
    if (Za(e)) throw (Ph(), Error(_(418)));
    for (; t; ) (kh(e, t), (t = Kn(t.nextSibling)));
  }
  if ((Ud(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ut = Kn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ut = null;
    }
  } else ut = ct ? Kn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ph() {
  for (var e = ut; e; ) e = Kn(e.nextSibling);
}
function co() {
  ((ut = ct = null), (fe = !1));
}
function oc(e) {
  It === null ? (It = [e]) : It.push(e);
}
var Dy = bn.ReactCurrentBatchConfig;
function _o(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Ji(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Vd(e) {
  var t = e._init;
  return t(e._payload);
}
function Nh(e) {
  function t(h, f) {
    if (e) {
      var v = h.deletions;
      v === null ? ((h.deletions = [f]), (h.flags |= 16)) : v.push(f);
    }
  }
  function n(h, f) {
    if (!e) return null;
    for (; f !== null; ) (t(h, f), (f = f.sibling));
    return null;
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      (f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling));
    return h;
  }
  function o(h, f) {
    return ((h = Xn(h, f)), (h.index = 0), (h.sibling = null), h);
  }
  function i(h, f, v) {
    return (
      (h.index = v),
      e
        ? ((v = h.alternate),
          v !== null
            ? ((v = v.index), v < f ? ((h.flags |= 2), f) : v)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    );
  }
  function s(h) {
    return (e && h.alternate === null && (h.flags |= 2), h);
  }
  function l(h, f, v, b) {
    return f === null || f.tag !== 6
      ? ((f = ga(v, h.mode, b)), (f.return = h), f)
      : ((f = o(f, v)), (f.return = h), f);
  }
  function a(h, f, v, b) {
    var C = v.type;
    return C === Mr
      ? c(h, f, v.props.children, b, v.key)
      : f !== null &&
          (f.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === On &&
              Vd(C) === f.type))
        ? ((b = o(f, v.props)), (b.ref = _o(h, f, v)), (b.return = h), b)
        : ((b = ws(v.type, v.key, v.props, null, h.mode, b)),
          (b.ref = _o(h, f, v)),
          (b.return = h),
          b);
  }
  function u(h, f, v, b) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== v.containerInfo ||
      f.stateNode.implementation !== v.implementation
      ? ((f = va(v, h.mode, b)), (f.return = h), f)
      : ((f = o(f, v.children || [])), (f.return = h), f);
  }
  function c(h, f, v, b, C) {
    return f === null || f.tag !== 7
      ? ((f = xr(v, h.mode, b, C)), (f.return = h), f)
      : ((f = o(f, v)), (f.return = h), f);
  }
  function d(h, f, v) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return ((f = ga("" + f, h.mode, v)), (f.return = h), f);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ui:
          return (
            (v = ws(f.type, f.key, f.props, null, h.mode, v)),
            (v.ref = _o(h, null, f)),
            (v.return = h),
            v
          );
        case _r:
          return ((f = va(f, h.mode, v)), (f.return = h), f);
        case On:
          var b = f._init;
          return d(h, b(f._payload), v);
      }
      if (Fo(f) || To(f))
        return ((f = xr(f, h.mode, v, null)), (f.return = h), f);
      Ji(h, f);
    }
    return null;
  }
  function m(h, f, v, b) {
    var C = f !== null ? f.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return C !== null ? null : l(h, f, "" + v, b);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ui:
          return v.key === C ? a(h, f, v, b) : null;
        case _r:
          return v.key === C ? u(h, f, v, b) : null;
        case On:
          return ((C = v._init), m(h, f, C(v._payload), b));
      }
      if (Fo(v) || To(v)) return C !== null ? null : c(h, f, v, b, null);
      Ji(h, v);
    }
    return null;
  }
  function p(h, f, v, b, C) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return ((h = h.get(v) || null), l(f, h, "" + b, C));
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ui:
          return (
            (h = h.get(b.key === null ? v : b.key) || null),
            a(f, h, b, C)
          );
        case _r:
          return (
            (h = h.get(b.key === null ? v : b.key) || null),
            u(f, h, b, C)
          );
        case On:
          var E = b._init;
          return p(h, f, v, E(b._payload), C);
      }
      if (Fo(b) || To(b)) return ((h = h.get(v) || null), c(f, h, b, C, null));
      Ji(f, b);
    }
    return null;
  }
  function x(h, f, v, b) {
    for (
      var C = null, E = null, k = f, P = (f = 0), A = null;
      k !== null && P < v.length;
      P++
    ) {
      k.index > P ? ((A = k), (k = null)) : (A = k.sibling);
      var j = m(h, k, v[P], b);
      if (j === null) {
        k === null && (k = A);
        break;
      }
      (e && k && j.alternate === null && t(h, k),
        (f = i(j, f, P)),
        E === null ? (C = j) : (E.sibling = j),
        (E = j),
        (k = A));
    }
    if (P === v.length) return (n(h, k), fe && lr(h, P), C);
    if (k === null) {
      for (; P < v.length; P++)
        ((k = d(h, v[P], b)),
          k !== null &&
            ((f = i(k, f, P)),
            E === null ? (C = k) : (E.sibling = k),
            (E = k)));
      return (fe && lr(h, P), C);
    }
    for (k = r(h, k); P < v.length; P++)
      ((A = p(k, h, P, v[P], b)),
        A !== null &&
          (e && A.alternate !== null && k.delete(A.key === null ? P : A.key),
          (f = i(A, f, P)),
          E === null ? (C = A) : (E.sibling = A),
          (E = A)));
    return (
      e &&
        k.forEach(function (I) {
          return t(h, I);
        }),
      fe && lr(h, P),
      C
    );
  }
  function g(h, f, v, b) {
    var C = To(v);
    if (typeof C != "function") throw Error(_(150));
    if (((v = C.call(v)), v == null)) throw Error(_(151));
    for (
      var E = (C = null), k = f, P = (f = 0), A = null, j = v.next();
      k !== null && !j.done;
      P++, j = v.next()
    ) {
      k.index > P ? ((A = k), (k = null)) : (A = k.sibling);
      var I = m(h, k, j.value, b);
      if (I === null) {
        k === null && (k = A);
        break;
      }
      (e && k && I.alternate === null && t(h, k),
        (f = i(I, f, P)),
        E === null ? (C = I) : (E.sibling = I),
        (E = I),
        (k = A));
    }
    if (j.done) return (n(h, k), fe && lr(h, P), C);
    if (k === null) {
      for (; !j.done; P++, j = v.next())
        ((j = d(h, j.value, b)),
          j !== null &&
            ((f = i(j, f, P)),
            E === null ? (C = j) : (E.sibling = j),
            (E = j)));
      return (fe && lr(h, P), C);
    }
    for (k = r(h, k); !j.done; P++, j = v.next())
      ((j = p(k, h, P, j.value, b)),
        j !== null &&
          (e && j.alternate !== null && k.delete(j.key === null ? P : j.key),
          (f = i(j, f, P)),
          E === null ? (C = j) : (E.sibling = j),
          (E = j)));
    return (
      e &&
        k.forEach(function (L) {
          return t(h, L);
        }),
      fe && lr(h, P),
      C
    );
  }
  function w(h, f, v, b) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Mr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Ui:
          e: {
            for (var C = v.key, E = f; E !== null; ) {
              if (E.key === C) {
                if (((C = v.type), C === Mr)) {
                  if (E.tag === 7) {
                    (n(h, E.sibling),
                      (f = o(E, v.props.children)),
                      (f.return = h),
                      (h = f));
                    break e;
                  }
                } else if (
                  E.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === On &&
                    Vd(C) === E.type)
                ) {
                  (n(h, E.sibling),
                    (f = o(E, v.props)),
                    (f.ref = _o(h, E, v)),
                    (f.return = h),
                    (h = f));
                  break e;
                }
                n(h, E);
                break;
              } else t(h, E);
              E = E.sibling;
            }
            v.type === Mr
              ? ((f = xr(v.props.children, h.mode, b, v.key)),
                (f.return = h),
                (h = f))
              : ((b = ws(v.type, v.key, v.props, null, h.mode, b)),
                (b.ref = _o(h, f, v)),
                (b.return = h),
                (h = b));
          }
          return s(h);
        case _r:
          e: {
            for (E = v.key; f !== null; ) {
              if (f.key === E)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === v.containerInfo &&
                  f.stateNode.implementation === v.implementation
                ) {
                  (n(h, f.sibling),
                    (f = o(f, v.children || [])),
                    (f.return = h),
                    (h = f));
                  break e;
                } else {
                  n(h, f);
                  break;
                }
              else t(h, f);
              f = f.sibling;
            }
            ((f = va(v, h.mode, b)), (f.return = h), (h = f));
          }
          return s(h);
        case On:
          return ((E = v._init), w(h, f, E(v._payload), b));
      }
      if (Fo(v)) return x(h, f, v, b);
      if (To(v)) return g(h, f, v, b);
      Ji(h, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = o(f, v)), (f.return = h), (h = f))
          : (n(h, f), (f = ga(v, h.mode, b)), (f.return = h), (h = f)),
        s(h))
      : n(h, f);
  }
  return w;
}
var fo = Nh(!0),
  Th = Nh(!1),
  Is = or(null),
  zs = null,
  Ur = null,
  ic = null;
function sc() {
  ic = Ur = zs = null;
}
function lc(e) {
  var t = Is.current;
  (de(Is), (e._currentValue = t));
}
function eu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Yr(e, t) {
  ((zs = e),
    (ic = Ur = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (et = !0), (e.firstContext = null)));
}
function St(e) {
  var t = e._currentValue;
  if (ic !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ur === null)) {
      if (zs === null) throw Error(_(308));
      ((Ur = e), (zs.dependencies = { lanes: 0, firstContext: e }));
    } else Ur = Ur.next = e;
  return t;
}
var cr = null;
function ac(e) {
  cr === null ? (cr = [e]) : cr.push(e);
}
function Rh(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ac(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    yn(e, r)
  );
}
function yn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var _n = !1;
function uc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ah(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function mn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Gn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ee & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      yn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ac(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    yn(e, n)
  );
}
function hs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Gu(e, n));
  }
}
function Hd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (o = i = s) : (i = i.next = s), (n = n.next));
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Fs(e, t, n, r) {
  var o = e.updateQueue;
  _n = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    ((a.next = null), s === null ? (i = u) : (s.next = u), (s = a));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var d = o.baseState;
    ((s = 0), (c = u = a = null), (l = i));
    do {
      var m = l.lane,
        p = l.eventTime;
      if ((r & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var x = e,
            g = l;
          switch (((m = t), (p = n), g.tag)) {
            case 1:
              if (((x = g.payload), typeof x == "function")) {
                d = x.call(p, d, m);
                break e;
              }
              d = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = g.payload),
                (m = typeof x == "function" ? x.call(p, d, m) : x),
                m == null)
              )
                break e;
              d = ge({}, d, m);
              break e;
            case 2:
              _n = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [l]) : m.push(l));
      } else
        ((p = {
          eventTime: p,
          lane: m,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (a = d)) : (c = c.next = p),
          (s |= m));
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        ((m = l),
          (l = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (a = d),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do ((s |= o.lane), (o = o.next));
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    ((Cr |= s), (e.lanes = s), (e.memoizedState = d));
  }
}
function Wd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(_(191, o));
        o.call(r);
      }
    }
}
var Ai = {},
  en = or(Ai),
  di = or(Ai),
  fi = or(Ai);
function dr(e) {
  if (e === Ai) throw Error(_(174));
  return e;
}
function cc(e, t) {
  switch ((le(fi, t), le(di, e), le(en, Ai), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ma(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ma(t, e)));
  }
  (de(en), le(en, t));
}
function po() {
  (de(en), de(di), de(fi));
}
function jh(e) {
  dr(fi.current);
  var t = dr(en.current),
    n = Ma(t, e.type);
  t !== n && (le(di, e), le(en, n));
}
function dc(e) {
  di.current === e && (de(en), de(di));
}
var pe = or(0);
function $s(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var ca = [];
function fc() {
  for (var e = 0; e < ca.length; e++)
    ca[e]._workInProgressVersionPrimary = null;
  ca.length = 0;
}
var ms = bn.ReactCurrentDispatcher,
  da = bn.ReactCurrentBatchConfig,
  br = 0,
  me = null,
  Te = null,
  Oe = null,
  Bs = !1,
  Go = !1,
  pi = 0,
  Iy = 0;
function ze() {
  throw Error(_(321));
}
function pc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Bt(e[n], t[n])) return !1;
  return !0;
}
function hc(e, t, n, r, o, i) {
  if (
    ((br = i),
    (me = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ms.current = e === null || e.memoizedState === null ? By : Uy),
    (e = n(r, o)),
    Go)
  ) {
    i = 0;
    do {
      if (((Go = !1), (pi = 0), 25 <= i)) throw Error(_(301));
      ((i += 1),
        (Oe = Te = null),
        (t.updateQueue = null),
        (ms.current = Vy),
        (e = n(r, o)));
    } while (Go);
  }
  if (
    ((ms.current = Us),
    (t = Te !== null && Te.next !== null),
    (br = 0),
    (Oe = Te = me = null),
    (Bs = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function mc() {
  var e = pi !== 0;
  return ((pi = 0), e);
}
function Kt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Oe === null ? (me.memoizedState = Oe = e) : (Oe = Oe.next = e), Oe);
}
function bt() {
  if (Te === null) {
    var e = me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Te.next;
  var t = Oe === null ? me.memoizedState : Oe.next;
  if (t !== null) ((Oe = t), (Te = e));
  else {
    if (e === null) throw Error(_(310));
    ((Te = e),
      (e = {
        memoizedState: Te.memoizedState,
        baseState: Te.baseState,
        baseQueue: Te.baseQueue,
        queue: Te.queue,
        next: null,
      }),
      Oe === null ? (me.memoizedState = Oe = e) : (Oe = Oe.next = e));
  }
  return Oe;
}
function hi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fa(e) {
  var t = bt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = Te,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      ((o.next = i.next), (i.next = s));
    }
    ((r.baseQueue = o = i), (n.pending = null));
  }
  if (o !== null) {
    ((i = o.next), (r = r.baseState));
    var l = (s = null),
      a = null,
      u = i;
    do {
      var c = u.lane;
      if ((br & c) === c)
        (a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (a === null ? ((l = a = d), (s = r)) : (a = a.next = d),
          (me.lanes |= c),
          (Cr |= c));
      }
      u = u.next;
    } while (u !== null && u !== i);
    (a === null ? (s = r) : (a.next = l),
      Bt(r, t.memoizedState) || (et = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do ((i = o.lane), (me.lanes |= i), (Cr |= i), (o = o.next));
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function pa(e) {
  var t = bt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do ((i = e(i, s.action)), (s = s.next));
    while (s !== o);
    (Bt(i, t.memoizedState) || (et = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function Oh() {}
function _h(e, t) {
  var n = me,
    r = bt(),
    o = t(),
    i = !Bt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (et = !0)),
    (r = r.queue),
    gc(Dh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Oe !== null && Oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      mi(9, Lh.bind(null, n, r, o, t), void 0, null),
      _e === null)
    )
      throw Error(_(349));
    br & 30 || Mh(n, t, o);
  }
  return o;
}
function Mh(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (me.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Lh(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Ih(t) && zh(e));
}
function Dh(e, t, n) {
  return n(function () {
    Ih(t) && zh(e);
  });
}
function Ih(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Bt(e, n);
  } catch {
    return !0;
  }
}
function zh(e) {
  var t = yn(e, 1);
  t !== null && Ft(t, e, 1, -1);
}
function Qd(e) {
  var t = Kt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = $y.bind(null, me, e)),
    [t.memoizedState, e]
  );
}
function mi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (me.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Fh() {
  return bt().memoizedState;
}
function gs(e, t, n, r) {
  var o = Kt();
  ((me.flags |= e),
    (o.memoizedState = mi(1 | t, n, void 0, r === void 0 ? null : r)));
}
function dl(e, t, n, r) {
  var o = bt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Te !== null) {
    var s = Te.memoizedState;
    if (((i = s.destroy), r !== null && pc(r, s.deps))) {
      o.memoizedState = mi(t, n, i, r);
      return;
    }
  }
  ((me.flags |= e), (o.memoizedState = mi(1 | t, n, i, r)));
}
function Kd(e, t) {
  return gs(8390656, 8, e, t);
}
function gc(e, t) {
  return dl(2048, 8, e, t);
}
function $h(e, t) {
  return dl(4, 2, e, t);
}
function Bh(e, t) {
  return dl(4, 4, e, t);
}
function Uh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Vh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    dl(4, 4, Uh.bind(null, t, e), n)
  );
}
function vc() {}
function Hh(e, t) {
  var n = bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Wh(e, t) {
  var n = bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Qh(e, t, n) {
  return br & 21
    ? (Bt(n, t) || ((n = Xp()), (me.lanes |= n), (Cr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (et = !0)), (e.memoizedState = n));
}
function zy(e, t) {
  var n = oe;
  ((oe = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = da.transition;
  da.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((oe = n), (da.transition = r));
  }
}
function Kh() {
  return bt().memoizedState;
}
function Fy(e, t, n) {
  var r = qn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Gh(e))
  )
    Yh(t, n);
  else if (((n = Rh(e, t, n, r)), n !== null)) {
    var o = Ge();
    (Ft(n, e, r, o), qh(n, t, r));
  }
}
function $y(e, t, n) {
  var r = qn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Gh(e)) Yh(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Bt(l, s))) {
          var a = t.interleaved;
          (a === null
            ? ((o.next = o), ac(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Rh(e, t, o, r)),
      n !== null && ((o = Ge()), Ft(n, e, r, o), qh(n, t, r)));
  }
}
function Gh(e) {
  var t = e.alternate;
  return e === me || (t !== null && t === me);
}
function Yh(e, t) {
  Go = Bs = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function qh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Gu(e, n));
  }
}
var Us = {
    readContext: St,
    useCallback: ze,
    useContext: ze,
    useEffect: ze,
    useImperativeHandle: ze,
    useInsertionEffect: ze,
    useLayoutEffect: ze,
    useMemo: ze,
    useReducer: ze,
    useRef: ze,
    useState: ze,
    useDebugValue: ze,
    useDeferredValue: ze,
    useTransition: ze,
    useMutableSource: ze,
    useSyncExternalStore: ze,
    useId: ze,
    unstable_isNewReconciler: !1,
  },
  By = {
    readContext: St,
    useCallback: function (e, t) {
      return ((Kt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: St,
    useEffect: Kd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        gs(4194308, 4, Uh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return gs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return gs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Kt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Kt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Fy.bind(null, me, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Kt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Qd,
    useDebugValue: vc,
    useDeferredValue: function (e) {
      return (Kt().memoizedState = e);
    },
    useTransition: function () {
      var e = Qd(!1),
        t = e[0];
      return ((e = zy.bind(null, e[1])), (Kt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = me,
        o = Kt();
      if (fe) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), _e === null)) throw Error(_(349));
        br & 30 || Mh(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Kd(Dh.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        mi(9, Lh.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Kt(),
        t = _e.identifierPrefix;
      if (fe) {
        var n = hn,
          r = pn;
        ((n = (r & ~(1 << (32 - zt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = pi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Iy++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Uy = {
    readContext: St,
    useCallback: Hh,
    useContext: St,
    useEffect: gc,
    useImperativeHandle: Vh,
    useInsertionEffect: $h,
    useLayoutEffect: Bh,
    useMemo: Wh,
    useReducer: fa,
    useRef: Fh,
    useState: function () {
      return fa(hi);
    },
    useDebugValue: vc,
    useDeferredValue: function (e) {
      var t = bt();
      return Qh(t, Te.memoizedState, e);
    },
    useTransition: function () {
      var e = fa(hi)[0],
        t = bt().memoizedState;
      return [e, t];
    },
    useMutableSource: Oh,
    useSyncExternalStore: _h,
    useId: Kh,
    unstable_isNewReconciler: !1,
  },
  Vy = {
    readContext: St,
    useCallback: Hh,
    useContext: St,
    useEffect: gc,
    useImperativeHandle: Vh,
    useInsertionEffect: $h,
    useLayoutEffect: Bh,
    useMemo: Wh,
    useReducer: pa,
    useRef: Fh,
    useState: function () {
      return pa(hi);
    },
    useDebugValue: vc,
    useDeferredValue: function (e) {
      var t = bt();
      return Te === null ? (t.memoizedState = e) : Qh(t, Te.memoizedState, e);
    },
    useTransition: function () {
      var e = pa(hi)[0],
        t = bt().memoizedState;
      return [e, t];
    },
    useMutableSource: Oh,
    useSyncExternalStore: _h,
    useId: Kh,
    unstable_isNewReconciler: !1,
  };
function Ot(e, t) {
  if (e && e.defaultProps) {
    ((t = ge({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function tu(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ge({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var fl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ge(),
      o = qn(e),
      i = mn(r, o);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = Gn(e, i, o)),
      t !== null && (Ft(t, e, o, r), hs(t, e, o)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ge(),
      o = qn(e),
      i = mn(r, o);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Gn(e, i, o)),
      t !== null && (Ft(t, e, o, r), hs(t, e, o)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ge(),
      r = qn(e),
      o = mn(n, r);
    ((o.tag = 2),
      t != null && (o.callback = t),
      (t = Gn(e, o, r)),
      t !== null && (Ft(t, e, r, n), hs(t, e, r)));
  },
};
function Gd(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !li(n, r) || !li(o, i)
        : !0
  );
}
function Xh(e, t, n) {
  var r = !1,
    o = Jn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = St(i))
      : ((o = nt(t) ? wr : Ue.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? uo(e, o) : Jn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = fl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Yd(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && fl.enqueueReplaceState(t, t.state, null));
}
function nu(e, t, n, r) {
  var o = e.stateNode;
  ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), uc(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (o.context = St(i))
    : ((i = nt(t) ? wr : Ue.current), (o.context = uo(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (tu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && fl.enqueueReplaceState(o, o.state, null),
      Fs(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function ho(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += v0(r)), (r = r.return));
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ha(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ru(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Hy = typeof WeakMap == "function" ? WeakMap : Map;
function Zh(e, t, n) {
  ((n = mn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Hs || ((Hs = !0), (pu = r)), ru(e, t));
    }),
    n
  );
}
function Jh(e, t, n) {
  ((n = mn(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    ((n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ru(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (ru(e, t),
          typeof r != "function" &&
            (Yn === null ? (Yn = new Set([this])) : Yn.add(this)));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function qd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Hy();
    var o = new Set();
    r.set(t, o);
  } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
  o.has(n) || (o.add(n), (e = o1.bind(null, e, t, n)), t.then(e, e));
}
function Xd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Zd(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = mn(-1, 1)), (t.tag = 2), Gn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Wy = bn.ReactCurrentOwner,
  et = !1;
function Qe(e, t, n, r) {
  t.child = e === null ? Th(t, null, n, r) : fo(t, e.child, n, r);
}
function Jd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Yr(t, o),
    (r = hc(e, t, n, r, i, o)),
    (n = mc()),
    e !== null && !et
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        xn(e, t, o))
      : (fe && n && nc(t), (t.flags |= 1), Qe(e, t, r, o), t.child)
  );
}
function ef(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !kc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), em(e, t, i, r, o))
      : ((e = ws(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : li), n(s, r) && e.ref === t.ref)
    )
      return xn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Xn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function em(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (li(i, r) && e.ref === t.ref)
      if (((et = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (et = !0);
      else return ((t.lanes = e.lanes), xn(e, t, o));
  }
  return ou(e, t, n, r, o);
}
function tm(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        le(Hr, lt),
        (lt |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          le(Hr, lt),
          (lt |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        le(Hr, lt),
        (lt |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      le(Hr, lt),
      (lt |= r));
  return (Qe(e, t, o, n), t.child);
}
function nm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ou(e, t, n, r, o) {
  var i = nt(n) ? wr : Ue.current;
  return (
    (i = uo(t, i)),
    Yr(t, o),
    (n = hc(e, t, n, r, i, o)),
    (r = mc()),
    e !== null && !et
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        xn(e, t, o))
      : (fe && r && nc(t), (t.flags |= 1), Qe(e, t, n, o), t.child)
  );
}
function tf(e, t, n, r, o) {
  if (nt(n)) {
    var i = !0;
    Ms(t);
  } else i = !1;
  if ((Yr(t, o), t.stateNode === null))
    (vs(e, t), Xh(t, n, r), nu(t, n, r, o), (r = !0));
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = St(u))
      : ((u = nt(n) ? wr : Ue.current), (u = uo(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    (d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Yd(t, s, r, u)),
      (_n = !1));
    var m = t.memoizedState;
    ((s.state = m),
      Fs(t, r, s, o),
      (a = t.memoizedState),
      l !== r || m !== a || tt.current || _n
        ? (typeof c == "function" && (tu(t, n, c, r), (a = t.memoizedState)),
          (l = _n || Gd(t, n, l, r, m, a, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((s = t.stateNode),
      Ah(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Ot(t.type, l)),
      (s.props = u),
      (d = t.pendingProps),
      (m = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = St(a))
        : ((a = nt(n) ? wr : Ue.current), (a = uo(t, a))));
    var p = n.getDerivedStateFromProps;
    ((c =
      typeof p == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== d || m !== a) && Yd(t, s, r, a)),
      (_n = !1),
      (m = t.memoizedState),
      (s.state = m),
      Fs(t, r, s, o));
    var x = t.memoizedState;
    l !== d || m !== x || tt.current || _n
      ? (typeof p == "function" && (tu(t, n, p, r), (x = t.memoizedState)),
        (u = _n || Gd(t, n, u, r, m, x, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, x, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, x, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (s.props = r),
        (s.state = x),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return iu(e, t, n, r, i, o);
}
function iu(e, t, n, r, o, i) {
  nm(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return (o && $d(t, n, !1), xn(e, t, i));
  ((r = t.stateNode), (Wy.current = t));
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = fo(t, e.child, null, i)), (t.child = fo(t, null, l, i)))
      : Qe(e, t, l, i),
    (t.memoizedState = r.state),
    o && $d(t, n, !0),
    t.child
  );
}
function rm(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Fd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Fd(e, t.context, !1),
    cc(e, t.containerInfo));
}
function nf(e, t, n, r, o) {
  return (co(), oc(o), (t.flags |= 256), Qe(e, t, n, r), t.child);
}
var su = { dehydrated: null, treeContext: null, retryLane: 0 };
function lu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function om(e, t, n) {
  var r = t.pendingProps,
    o = pe.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    le(pe, o & 1),
    e === null)
  )
    return (
      Ja(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = ml(s, r, 0, null)),
              (e = xr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = lu(n)),
              (t.memoizedState = su),
              e)
            : yc(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Qy(e, t, s, r, l, o, n);
  if (i) {
    ((i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling));
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Xn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = Xn(l, i)) : ((i = xr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? lu(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = su),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Xn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function yc(e, t) {
  return (
    (t = ml({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function es(e, t, n, r) {
  return (
    r !== null && oc(r),
    fo(t, e.child, null, n),
    (e = yc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Qy(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ha(Error(_(422)))), es(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = ml({ mode: "visible", children: r.children }, o, 0, null)),
          (i = xr(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && fo(t, e.child, null, s),
          (t.child.memoizedState = lu(s)),
          (t.memoizedState = su),
          i);
  if (!(t.mode & 1)) return es(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (
      (r = l),
      (i = Error(_(419))),
      (r = ha(i, r, void 0)),
      es(e, t, s, r)
    );
  }
  if (((l = (s & e.childLanes) !== 0), et || l)) {
    if (((r = _e), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      ((o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), yn(e, o), Ft(r, e, o, -1)));
    }
    return (Ec(), (r = ha(Error(_(421)))), es(e, t, s, r));
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = i1.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ut = Kn(o.nextSibling)),
      (ct = t),
      (fe = !0),
      (It = null),
      e !== null &&
        ((vt[yt++] = pn),
        (vt[yt++] = hn),
        (vt[yt++] = Sr),
        (pn = e.id),
        (hn = e.overflow),
        (Sr = t)),
      (t = yc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function rf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), eu(e.return, t, n));
}
function ma(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function im(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Qe(e, t, r.children, n), (r = pe.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && rf(e, n, t);
        else if (e.tag === 19) rf(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((le(pe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          ((e = n.alternate),
            e !== null && $s(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ma(t, !1, o, n, i));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && $s(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        ma(t, !0, n, null, i);
        break;
      case "together":
        ma(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function vs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function xn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Cr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Xn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Xn(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Ky(e, t, n) {
  switch (t.tag) {
    case 3:
      (rm(t), co());
      break;
    case 5:
      jh(t);
      break;
    case 1:
      nt(t.type) && Ms(t);
      break;
    case 4:
      cc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      (le(Is, r._currentValue), (r._currentValue = o));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (le(pe, pe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? om(e, t, n)
            : (le(pe, pe.current & 1),
              (e = xn(e, t, n)),
              e !== null ? e.sibling : null);
      le(pe, pe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return im(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        le(pe, pe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), tm(e, t, n));
  }
  return xn(e, t, n);
}
var sm, au, lm, am;
sm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
au = function () {};
lm = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    ((e = t.stateNode), dr(en.current));
    var i = null;
    switch (n) {
      case "input":
        ((o = Aa(e, o)), (r = Aa(e, r)), (i = []));
        break;
      case "select":
        ((o = ge({}, o, { value: void 0 })),
          (r = ge({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((o = _a(e, o)), (r = _a(e, r)), (i = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Os);
    }
    La(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ei.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else (n || (i || (i = []), i.push(u, n)), (n = a));
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (i = i || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (ei.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && ce("scroll", e),
                    i || l === a || (i = []))
                  : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
am = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Mo(e, t) {
  if (!fe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling));
  else
    for (o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Gy(e, t, n) {
  var r = t.pendingProps;
  switch ((rc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Fe(t), null);
    case 1:
      return (nt(t.type) && _s(), Fe(t), null);
    case 3:
      return (
        (r = t.stateNode),
        po(),
        de(tt),
        de(Ue),
        fc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Zi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), It !== null && (gu(It), (It = null)))),
        au(e, t),
        Fe(t),
        null
      );
    case 5:
      dc(t);
      var o = dr(fi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (lm(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return (Fe(t), null);
        }
        if (((e = dr(en.current)), Zi(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[Xt] = t), (r[ci] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (ce("cancel", r), ce("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Bo.length; o++) ce(Bo[o], r);
              break;
            case "source":
              ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (ce("error", r), ce("load", r));
              break;
            case "details":
              ce("toggle", r);
              break;
            case "input":
              (fd(r, i), ce("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                ce("invalid", r));
              break;
            case "textarea":
              (hd(r, i), ce("invalid", r));
          }
          (La(n, i), (o = null));
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Xi(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Xi(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : ei.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  ce("scroll", r);
            }
          switch (n) {
            case "input":
              (Vi(r), pd(r, i, !0));
              break;
            case "textarea":
              (Vi(r), md(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Os);
          }
          ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Dp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Xt] = t),
            (e[ci] = r),
            sm(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((s = Da(n, r)), n)) {
              case "dialog":
                (ce("cancel", e), ce("close", e), (o = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (ce("load", e), (o = r));
                break;
              case "video":
              case "audio":
                for (o = 0; o < Bo.length; o++) ce(Bo[o], e);
                o = r;
                break;
              case "source":
                (ce("error", e), (o = r));
                break;
              case "img":
              case "image":
              case "link":
                (ce("error", e), ce("load", e), (o = r));
                break;
              case "details":
                (ce("toggle", e), (o = r));
                break;
              case "input":
                (fd(e, r), (o = Aa(e, r)), ce("invalid", e));
                break;
              case "option":
                o = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ge({}, r, { value: void 0 })),
                  ce("invalid", e));
                break;
              case "textarea":
                (hd(e, r), (o = _a(e, r)), ce("invalid", e));
                break;
              default:
                o = r;
            }
            (La(n, o), (l = o));
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? Fp(e, a)
                  : i === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Ip(e, a))
                    : i === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && ti(e, a)
                        : typeof a == "number" && ti(e, "" + a)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (ei.hasOwnProperty(i)
                          ? a != null && i === "onScroll" && ce("scroll", e)
                          : a != null && Uu(e, i, a, s));
              }
            switch (n) {
              case "input":
                (Vi(e), pd(e, r, !1));
                break;
              case "textarea":
                (Vi(e), md(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Zn(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Wr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Wr(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Os);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Fe(t), null);
    case 6:
      if (e && t.stateNode != null) am(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = dr(fi.current)), dr(en.current), Zi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Xt] = t),
            (i = r.nodeValue !== n) && ((e = ct), e !== null))
          )
            switch (e.tag) {
              case 3:
                Xi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Xi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Xt] = t),
            (t.stateNode = r));
      }
      return (Fe(t), null);
    case 13:
      if (
        (de(pe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (fe && ut !== null && t.mode & 1 && !(t.flags & 128))
          (Ph(), co(), (t.flags |= 98560), (i = !1));
        else if (((i = Zi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(_(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(_(317));
            i[Xt] = t;
          } else
            (co(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Fe(t), (i = !1));
        } else (It !== null && (gu(It), (It = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || pe.current & 1 ? Re === 0 && (Re = 3) : Ec())),
          t.updateQueue !== null && (t.flags |= 4),
          Fe(t),
          null);
    case 4:
      return (
        po(),
        au(e, t),
        e === null && ai(t.stateNode.containerInfo),
        Fe(t),
        null
      );
    case 10:
      return (lc(t.type._context), Fe(t), null);
    case 17:
      return (nt(t.type) && _s(), Fe(t), null);
    case 19:
      if ((de(pe), (i = t.memoizedState), i === null)) return (Fe(t), null);
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Mo(i, !1);
        else {
          if (Re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = $s(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Mo(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (le(pe, (pe.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            be() > mo &&
            ((t.flags |= 128), (r = !0), Mo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = $s(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Mo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !fe)
            )
              return (Fe(t), null);
          } else
            2 * be() - i.renderingStartTime > mo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Mo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = be()),
          (t.sibling = null),
          (n = pe.current),
          le(pe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Fe(t), null);
    case 22:
    case 23:
      return (
        Cc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? lt & 1073741824 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function Yy(e, t) {
  switch ((rc(t), t.tag)) {
    case 1:
      return (
        nt(t.type) && _s(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        po(),
        de(tt),
        de(Ue),
        fc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (dc(t), null);
    case 13:
      if (
        (de(pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(_(340));
        co();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (de(pe), null);
    case 4:
      return (po(), null);
    case 10:
      return (lc(t.type._context), null);
    case 22:
    case 23:
      return (Cc(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var ts = !1,
  Be = !1,
  qy = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function Vr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        we(e, t, r);
      }
    else n.current = null;
}
function uu(e, t, n) {
  try {
    n();
  } catch (r) {
    we(e, t, r);
  }
}
var of = !1;
function Xy(e, t) {
  if (((Qa = Rs), (e = ph()), tc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            d = e,
            m = null;
          t: for (;;) {
            for (
              var p;
              d !== n || (o !== 0 && d.nodeType !== 3) || (l = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (a = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (p = d.firstChild) !== null;
            )
              ((m = d), (d = p));
            for (;;) {
              if (d === e) break t;
              if (
                (m === n && ++u === o && (l = s),
                m === i && ++c === r && (a = s),
                (p = d.nextSibling) !== null)
              )
                break;
              ((d = m), (m = d.parentNode));
            }
            d = p;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ka = { focusedElem: e, selectionRange: n }, Rs = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (z = e));
    else
      for (; z !== null; ) {
        t = z;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var g = x.memoizedProps,
                    w = x.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Ot(t.type, g),
                      w,
                    );
                  h.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (b) {
          we(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (z = e));
          break;
        }
        z = t.return;
      }
  return ((x = of), (of = !1), x);
}
function Yo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        ((o.destroy = void 0), i !== void 0 && uu(t, n, i));
      }
      o = o.next;
    } while (o !== r);
  }
}
function pl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function cu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function um(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), um(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Xt], delete t[ci], delete t[qa], delete t[_y], delete t[My])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function cm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function sf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || cm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function du(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Os)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (du(e, t, n), e = e.sibling; e !== null; )
      (du(e, t, n), (e = e.sibling));
}
function fu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (fu(e, t, n), e = e.sibling; e !== null; )
      (fu(e, t, n), (e = e.sibling));
}
var Me = null,
  Dt = !1;
function Tn(e, t, n) {
  for (n = n.child; n !== null; ) (dm(e, t, n), (n = n.sibling));
}
function dm(e, t, n) {
  if (Jt && typeof Jt.onCommitFiberUnmount == "function")
    try {
      Jt.onCommitFiberUnmount(il, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Be || Vr(n, t);
    case 6:
      var r = Me,
        o = Dt;
      ((Me = null),
        Tn(e, t, n),
        (Me = r),
        (Dt = o),
        Me !== null &&
          (Dt
            ? ((e = Me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Me.removeChild(n.stateNode)));
      break;
    case 18:
      Me !== null &&
        (Dt
          ? ((e = Me),
            (n = n.stateNode),
            e.nodeType === 8
              ? aa(e.parentNode, n)
              : e.nodeType === 1 && aa(e, n),
            ii(e))
          : aa(Me, n.stateNode));
      break;
    case 4:
      ((r = Me),
        (o = Dt),
        (Me = n.stateNode.containerInfo),
        (Dt = !0),
        Tn(e, t, n),
        (Me = r),
        (Dt = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Be &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          ((i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && uu(n, t, s),
            (o = o.next));
        } while (o !== r);
      }
      Tn(e, t, n);
      break;
    case 1:
      if (
        !Be &&
        (Vr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (l) {
          we(n, t, l);
        }
      Tn(e, t, n);
      break;
    case 21:
      Tn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Be = (r = Be) || n.memoizedState !== null), Tn(e, t, n), (Be = r))
        : Tn(e, t, n);
      break;
    default:
      Tn(e, t, n);
  }
}
function lf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new qy()),
      t.forEach(function (r) {
        var o = s1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      }));
  }
}
function At(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ((Me = l.stateNode), (Dt = !1));
              break e;
            case 3:
              ((Me = l.stateNode.containerInfo), (Dt = !0));
              break e;
            case 4:
              ((Me = l.stateNode.containerInfo), (Dt = !0));
              break e;
          }
          l = l.return;
        }
        if (Me === null) throw Error(_(160));
        (dm(i, s, o), (Me = null), (Dt = !1));
        var a = o.alternate;
        (a !== null && (a.return = null), (o.return = null));
      } catch (u) {
        we(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (fm(t, e), (t = t.sibling));
}
function fm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((At(t, e), Qt(e), r & 4)) {
        try {
          (Yo(3, e, e.return), pl(3, e));
        } catch (g) {
          we(e, e.return, g);
        }
        try {
          Yo(5, e, e.return);
        } catch (g) {
          we(e, e.return, g);
        }
      }
      break;
    case 1:
      (At(t, e), Qt(e), r & 512 && n !== null && Vr(n, n.return));
      break;
    case 5:
      if (
        (At(t, e),
        Qt(e),
        r & 512 && n !== null && Vr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ti(o, "");
        } catch (g) {
          we(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (l === "input" && i.type === "radio" && i.name != null && Mp(o, i),
              Da(l, s));
            var u = Da(l, i);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                d = a[s + 1];
              c === "style"
                ? Fp(o, d)
                : c === "dangerouslySetInnerHTML"
                  ? Ip(o, d)
                  : c === "children"
                    ? ti(o, d)
                    : Uu(o, c, d, u);
            }
            switch (l) {
              case "input":
                ja(o, i);
                break;
              case "textarea":
                Lp(o, i);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? Wr(o, !!i.multiple, p, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Wr(o, !!i.multiple, i.defaultValue, !0)
                      : Wr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ci] = i;
          } catch (g) {
            we(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((At(t, e), Qt(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        ((o = e.stateNode), (i = e.memoizedProps));
        try {
          o.nodeValue = i;
        } catch (g) {
          we(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (At(t, e), Qt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ii(t.containerInfo);
        } catch (g) {
          we(e, e.return, g);
        }
      break;
    case 4:
      (At(t, e), Qt(e));
      break;
    case 13:
      (At(t, e),
        Qt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Sc = be())),
        r & 4 && lf(e));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Be = (u = Be) || c), At(t, e), (Be = u)) : At(t, e),
        Qt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (z = e, c = e.child; c !== null; ) {
            for (d = z = c; z !== null; ) {
              switch (((m = z), (p = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Yo(4, m, m.return);
                  break;
                case 1:
                  Vr(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    ((r = m), (n = m.return));
                    try {
                      ((t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount());
                    } catch (g) {
                      we(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Vr(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    uf(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = m), (z = p)) : uf(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                ((o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = d.stateNode),
                      (a = d.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = zp("display", s))));
              } catch (g) {
                we(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                we(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            ((d.child.return = d), (d = d.child));
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            (c === d && (c = null), (d = d.return));
          }
          (c === d && (c = null),
            (d.sibling.return = d.return),
            (d = d.sibling));
        }
      }
      break;
    case 19:
      (At(t, e), Qt(e), r & 4 && lf(e));
      break;
    case 21:
      break;
    default:
      (At(t, e), Qt(e));
  }
}
function Qt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (cm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ti(o, ""), (r.flags &= -33));
          var i = sf(e);
          fu(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = sf(e);
          du(e, l, s);
          break;
        default:
          throw Error(_(161));
      }
    } catch (a) {
      we(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Zy(e, t, n) {
  ((z = e), pm(e));
}
function pm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var o = z,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ts;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Be;
        l = ts;
        var u = Be;
        if (((ts = s), (Be = a) && !u))
          for (z = o; z !== null; )
            ((s = z),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? cf(o)
                : a !== null
                  ? ((a.return = s), (z = a))
                  : cf(o));
        for (; i !== null; ) ((z = i), pm(i), (i = i.sibling));
        ((z = o), (ts = l), (Be = u));
      }
      af(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (z = i)) : af(e);
  }
}
function af(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Be || pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Be)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ot(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Wd(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Wd(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && ii(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(_(163));
          }
        Be || (t.flags & 512 && cu(t));
      } catch (m) {
        we(t, t.return, m);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (z = n));
      break;
    }
    z = t.return;
  }
}
function uf(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (z = n));
      break;
    }
    z = t.return;
  }
}
function cf(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            pl(4, t);
          } catch (a) {
            we(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              we(t, o, a);
            }
          }
          var i = t.return;
          try {
            cu(t);
          } catch (a) {
            we(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            cu(t);
          } catch (a) {
            we(t, s, a);
          }
      }
    } catch (a) {
      we(t, t.return, a);
    }
    if (t === e) {
      z = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      ((l.return = t.return), (z = l));
      break;
    }
    z = t.return;
  }
}
var Jy = Math.ceil,
  Vs = bn.ReactCurrentDispatcher,
  xc = bn.ReactCurrentOwner,
  wt = bn.ReactCurrentBatchConfig,
  ee = 0,
  _e = null,
  Pe = null,
  Le = 0,
  lt = 0,
  Hr = or(0),
  Re = 0,
  gi = null,
  Cr = 0,
  hl = 0,
  wc = 0,
  qo = null,
  Je = null,
  Sc = 0,
  mo = 1 / 0,
  cn = null,
  Hs = !1,
  pu = null,
  Yn = null,
  ns = !1,
  Un = null,
  Ws = 0,
  Xo = 0,
  hu = null,
  ys = -1,
  xs = 0;
function Ge() {
  return ee & 6 ? be() : ys !== -1 ? ys : (ys = be());
}
function qn(e) {
  return e.mode & 1
    ? ee & 2 && Le !== 0
      ? Le & -Le
      : Dy.transition !== null
        ? (xs === 0 && (xs = Xp()), xs)
        : ((e = oe),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : oh(e.type))),
          e)
    : 1;
}
function Ft(e, t, n, r) {
  if (50 < Xo) throw ((Xo = 0), (hu = null), Error(_(185)));
  (Ni(e, n, r),
    (!(ee & 2) || e !== _e) &&
      (e === _e && (!(ee & 2) && (hl |= n), Re === 4 && Ln(e, Le)),
      rt(e, r),
      n === 1 && ee === 0 && !(t.mode & 1) && ((mo = be() + 500), cl && ir())));
}
function rt(e, t) {
  var n = e.callbackNode;
  D0(e, t);
  var r = Ts(e, e === _e ? Le : 0);
  if (r === 0)
    (n !== null && yd(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && yd(n), t === 1))
      (e.tag === 0 ? Ly(df.bind(null, e)) : Ch(df.bind(null, e)),
        jy(function () {
          !(ee & 6) && ir();
        }),
        (n = null));
    else {
      switch (Zp(r)) {
        case 1:
          n = Ku;
          break;
        case 4:
          n = Yp;
          break;
        case 16:
          n = Ns;
          break;
        case 536870912:
          n = qp;
          break;
        default:
          n = Ns;
      }
      n = Sm(n, hm.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function hm(e, t) {
  if (((ys = -1), (xs = 0), ee & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (qr() && e.callbackNode !== n) return null;
  var r = Ts(e, e === _e ? Le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Qs(e, r);
  else {
    t = r;
    var o = ee;
    ee |= 2;
    var i = gm();
    (_e !== e || Le !== t) && ((cn = null), (mo = be() + 500), yr(e, t));
    do
      try {
        n1();
        break;
      } catch (l) {
        mm(e, l);
      }
    while (!0);
    (sc(),
      (Vs.current = i),
      (ee = o),
      Pe !== null ? (t = 0) : ((_e = null), (Le = 0), (t = Re)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Ba(e)), o !== 0 && ((r = o), (t = mu(e, o)))), t === 1)
    )
      throw ((n = gi), yr(e, 0), Ln(e, r), rt(e, be()), n);
    if (t === 6) Ln(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !e1(o) &&
          ((t = Qs(e, r)),
          t === 2 && ((i = Ba(e)), i !== 0 && ((r = i), (t = mu(e, i)))),
          t === 1))
      )
        throw ((n = gi), yr(e, 0), Ln(e, r), rt(e, be()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          ar(e, Je, cn);
          break;
        case 3:
          if (
            (Ln(e, r), (r & 130023424) === r && ((t = Sc + 500 - be()), 10 < t))
          ) {
            if (Ts(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              (Ge(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = Ya(ar.bind(null, e, Je, cn), t);
            break;
          }
          ar(e, Je, cn);
          break;
        case 4:
          if ((Ln(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - zt(r);
            ((i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i));
          }
          if (
            ((r = o),
            (r = be() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Jy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ya(ar.bind(null, e, Je, cn), r);
            break;
          }
          ar(e, Je, cn);
          break;
        case 5:
          ar(e, Je, cn);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return (rt(e, be()), e.callbackNode === n ? hm.bind(null, e) : null);
}
function mu(e, t) {
  var n = qo;
  return (
    e.current.memoizedState.isDehydrated && (yr(e, t).flags |= 256),
    (e = Qs(e, t)),
    e !== 2 && ((t = Je), (Je = n), t !== null && gu(t)),
    e
  );
}
function gu(e) {
  Je === null ? (Je = e) : Je.push.apply(Je, e);
}
function e1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Bt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Ln(e, t) {
  for (
    t &= ~wc,
      t &= ~hl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - zt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function df(e) {
  if (ee & 6) throw Error(_(327));
  qr();
  var t = Ts(e, 0);
  if (!(t & 1)) return (rt(e, be()), null);
  var n = Qs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ba(e);
    r !== 0 && ((t = r), (n = mu(e, r)));
  }
  if (n === 1) throw ((n = gi), yr(e, 0), Ln(e, t), rt(e, be()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ar(e, Je, cn),
    rt(e, be()),
    null
  );
}
function bc(e, t) {
  var n = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    ((ee = n), ee === 0 && ((mo = be() + 500), cl && ir()));
  }
}
function Er(e) {
  Un !== null && Un.tag === 0 && !(ee & 6) && qr();
  var t = ee;
  ee |= 1;
  var n = wt.transition,
    r = oe;
  try {
    if (((wt.transition = null), (oe = 1), e)) return e();
  } finally {
    ((oe = r), (wt.transition = n), (ee = t), !(ee & 6) && ir());
  }
}
function Cc() {
  ((lt = Hr.current), de(Hr));
}
function yr(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ay(n)), Pe !== null))
    for (n = Pe.return; n !== null; ) {
      var r = n;
      switch ((rc(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && _s());
          break;
        case 3:
          (po(), de(tt), de(Ue), fc());
          break;
        case 5:
          dc(r);
          break;
        case 4:
          po();
          break;
        case 13:
          de(pe);
          break;
        case 19:
          de(pe);
          break;
        case 10:
          lc(r.type._context);
          break;
        case 22:
        case 23:
          Cc();
      }
      n = n.return;
    }
  if (
    ((_e = e),
    (Pe = e = Xn(e.current, null)),
    (Le = lt = t),
    (Re = 0),
    (gi = null),
    (wc = hl = Cr = 0),
    (Je = qo = null),
    cr !== null)
  ) {
    for (t = 0; t < cr.length; t++)
      if (((n = cr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          ((i.next = o), (r.next = s));
        }
        n.pending = r;
      }
    cr = null;
  }
  return e;
}
function mm(e, t) {
  do {
    var n = Pe;
    try {
      if ((sc(), (ms.current = Us), Bs)) {
        for (var r = me.memoizedState; r !== null; ) {
          var o = r.queue;
          (o !== null && (o.pending = null), (r = r.next));
        }
        Bs = !1;
      }
      if (
        ((br = 0),
        (Oe = Te = me = null),
        (Go = !1),
        (pi = 0),
        (xc.current = null),
        n === null || n.return === null)
      ) {
        ((Re = 1), (gi = t), (Pe = null));
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = Le),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = Xd(s);
          if (p !== null) {
            ((p.flags &= -257),
              Zd(p, s, l, i, t),
              p.mode & 1 && qd(i, u, t),
              (t = p),
              (a = u));
            var x = t.updateQueue;
            if (x === null) {
              var g = new Set();
              (g.add(a), (t.updateQueue = g));
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              (qd(i, u, t), Ec());
              break e;
            }
            a = Error(_(426));
          }
        } else if (fe && l.mode & 1) {
          var w = Xd(s);
          if (w !== null) {
            (!(w.flags & 65536) && (w.flags |= 256),
              Zd(w, s, l, i, t),
              oc(ho(a, l)));
            break e;
          }
        }
        ((i = a = ho(a, l)),
          Re !== 4 && (Re = 2),
          qo === null ? (qo = [i]) : qo.push(i),
          (i = s));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var h = Zh(i, a, t);
              Hd(i, h);
              break e;
            case 1:
              l = a;
              var f = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Yn === null || !Yn.has(v))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var b = Jh(i, l, t);
                Hd(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ym(n);
    } catch (C) {
      ((t = C), Pe === n && n !== null && (Pe = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function gm() {
  var e = Vs.current;
  return ((Vs.current = Us), e === null ? Us : e);
}
function Ec() {
  ((Re === 0 || Re === 3 || Re === 2) && (Re = 4),
    _e === null || (!(Cr & 268435455) && !(hl & 268435455)) || Ln(_e, Le));
}
function Qs(e, t) {
  var n = ee;
  ee |= 2;
  var r = gm();
  (_e !== e || Le !== t) && ((cn = null), yr(e, t));
  do
    try {
      t1();
      break;
    } catch (o) {
      mm(e, o);
    }
  while (!0);
  if ((sc(), (ee = n), (Vs.current = r), Pe !== null)) throw Error(_(261));
  return ((_e = null), (Le = 0), Re);
}
function t1() {
  for (; Pe !== null; ) vm(Pe);
}
function n1() {
  for (; Pe !== null && !N0(); ) vm(Pe);
}
function vm(e) {
  var t = wm(e.alternate, e, lt);
  ((e.memoizedProps = e.pendingProps),
    t === null ? ym(e) : (Pe = t),
    (xc.current = null));
}
function ym(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Yy(n, t)), n !== null)) {
        ((n.flags &= 32767), (Pe = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Re = 6), (Pe = null));
        return;
      }
    } else if (((n = Gy(n, t, lt)), n !== null)) {
      Pe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Pe = t;
      return;
    }
    Pe = t = e;
  } while (t !== null);
  Re === 0 && (Re = 5);
}
function ar(e, t, n) {
  var r = oe,
    o = wt.transition;
  try {
    ((wt.transition = null), (oe = 1), r1(e, t, n, r));
  } finally {
    ((wt.transition = o), (oe = r));
  }
  return null;
}
function r1(e, t, n, r) {
  do qr();
  while (Un !== null);
  if (ee & 6) throw Error(_(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (I0(e, i),
    e === _e && ((Pe = _e = null), (Le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ns ||
      ((ns = !0),
      Sm(Ns, function () {
        return (qr(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = wt.transition), (wt.transition = null));
    var s = oe;
    oe = 1;
    var l = ee;
    ((ee |= 4),
      (xc.current = null),
      Xy(e, n),
      fm(n, e),
      Cy(Ka),
      (Rs = !!Qa),
      (Ka = Qa = null),
      (e.current = n),
      Zy(n),
      T0(),
      (ee = l),
      (oe = s),
      (wt.transition = i));
  } else e.current = n;
  if (
    (ns && ((ns = !1), (Un = e), (Ws = o)),
    (i = e.pendingLanes),
    i === 0 && (Yn = null),
    j0(n.stateNode),
    rt(e, be()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
  if (Hs) throw ((Hs = !1), (e = pu), (pu = null), e);
  return (
    Ws & 1 && e.tag !== 0 && qr(),
    (i = e.pendingLanes),
    i & 1 ? (e === hu ? Xo++ : ((Xo = 0), (hu = e))) : (Xo = 0),
    ir(),
    null
  );
}
function qr() {
  if (Un !== null) {
    var e = Zp(Ws),
      t = wt.transition,
      n = oe;
    try {
      if (((wt.transition = null), (oe = 16 > e ? 16 : e), Un === null))
        var r = !1;
      else {
        if (((e = Un), (Un = null), (Ws = 0), ee & 6)) throw Error(_(331));
        var o = ee;
        for (ee |= 4, z = e.current; z !== null; ) {
          var i = z,
            s = i.child;
          if (z.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (z = u; z !== null; ) {
                  var c = z;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yo(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) ((d.return = c), (z = d));
                  else
                    for (; z !== null; ) {
                      c = z;
                      var m = c.sibling,
                        p = c.return;
                      if ((um(c), c === u)) {
                        z = null;
                        break;
                      }
                      if (m !== null) {
                        ((m.return = p), (z = m));
                        break;
                      }
                      z = p;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var g = x.child;
                if (g !== null) {
                  x.child = null;
                  do {
                    var w = g.sibling;
                    ((g.sibling = null), (g = w));
                  } while (g !== null);
                }
              }
              z = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) ((s.return = i), (z = s));
          else
            e: for (; z !== null; ) {
              if (((i = z), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Yo(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                ((h.return = i.return), (z = h));
                break e;
              }
              z = i.return;
            }
        }
        var f = e.current;
        for (z = f; z !== null; ) {
          s = z;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) ((v.return = s), (z = v));
          else
            e: for (s = f; z !== null; ) {
              if (((l = z), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pl(9, l);
                  }
                } catch (C) {
                  we(l, l.return, C);
                }
              if (l === s) {
                z = null;
                break e;
              }
              var b = l.sibling;
              if (b !== null) {
                ((b.return = l.return), (z = b));
                break e;
              }
              z = l.return;
            }
        }
        if (
          ((ee = o), ir(), Jt && typeof Jt.onPostCommitFiberRoot == "function")
        )
          try {
            Jt.onPostCommitFiberRoot(il, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((oe = n), (wt.transition = t));
    }
  }
  return !1;
}
function ff(e, t, n) {
  ((t = ho(n, t)),
    (t = Zh(e, t, 1)),
    (e = Gn(e, t, 1)),
    (t = Ge()),
    e !== null && (Ni(e, 1, t), rt(e, t)));
}
function we(e, t, n) {
  if (e.tag === 3) ff(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ff(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Yn === null || !Yn.has(r)))
        ) {
          ((e = ho(n, e)),
            (e = Jh(t, e, 1)),
            (t = Gn(t, e, 1)),
            (e = Ge()),
            t !== null && (Ni(t, 1, e), rt(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function o1(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Ge()),
    (e.pingedLanes |= e.suspendedLanes & n),
    _e === e &&
      (Le & n) === n &&
      (Re === 4 || (Re === 3 && (Le & 130023424) === Le && 500 > be() - Sc)
        ? yr(e, 0)
        : (wc |= n)),
    rt(e, t));
}
function xm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Qi), (Qi <<= 1), !(Qi & 130023424) && (Qi = 4194304))
      : (t = 1));
  var n = Ge();
  ((e = yn(e, t)), e !== null && (Ni(e, t, n), rt(e, n)));
}
function i1(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), xm(e, n));
}
function s1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  (r !== null && r.delete(t), xm(e, n));
}
var wm;
wm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || tt.current) et = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((et = !1), Ky(e, t, n));
      et = !!(e.flags & 131072);
    }
  else ((et = !1), fe && t.flags & 1048576 && Eh(t, Ds, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (vs(e, t), (e = t.pendingProps));
      var o = uo(t, Ue.current);
      (Yr(t, n), (o = hc(null, t, r, e, o, n)));
      var i = mc();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            nt(r) ? ((i = !0), Ms(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            uc(t),
            (o.updater = fl),
            (t.stateNode = o),
            (o._reactInternals = t),
            nu(t, r, e, n),
            (t = iu(null, t, r, !0, i, n)))
          : ((t.tag = 0), fe && i && nc(t), Qe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (vs(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = a1(r)),
          (e = Ot(r, e)),
          o)
        ) {
          case 0:
            t = ou(null, t, r, e, n);
            break e;
          case 1:
            t = tf(null, t, r, e, n);
            break e;
          case 11:
            t = Jd(null, t, r, e, n);
            break e;
          case 14:
            t = ef(null, t, r, Ot(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ot(r, o)),
        ou(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ot(r, o)),
        tf(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((rm(t), e === null)) throw Error(_(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Ah(e, t),
          Fs(t, r, null, n));
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((o = ho(Error(_(423)), t)), (t = nf(e, t, r, n, o)));
            break e;
          } else if (r !== o) {
            ((o = ho(Error(_(424)), t)), (t = nf(e, t, r, n, o)));
            break e;
          } else
            for (
              ut = Kn(t.stateNode.containerInfo.firstChild),
                ct = t,
                fe = !0,
                It = null,
                n = Th(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((co(), r === o)) {
            t = xn(e, t, n);
            break e;
          }
          Qe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        jh(t),
        e === null && Ja(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Ga(r, o) ? (s = null) : i !== null && Ga(r, i) && (t.flags |= 32),
        nm(e, t),
        Qe(e, t, s, n),
        t.child
      );
    case 6:
      return (e === null && Ja(t), null);
    case 13:
      return om(e, t, n);
    case 4:
      return (
        cc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = fo(t, null, r, n)) : Qe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ot(r, o)),
        Jd(e, t, r, o, n)
      );
    case 7:
      return (Qe(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Qe(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Qe(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          le(Is, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Bt(i.value, s)) {
            if (i.children === o.children && !tt.current) {
              t = xn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      ((a = mn(-1, n & -n)), (a.tag = 2));
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a));
                      }
                    }
                    ((i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      eu(i.return, n, t),
                      (l.lanes |= n));
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(_(341));
                ((s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  eu(s, n, t),
                  (s = i.sibling));
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    ((i.return = s.return), (s = i));
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        (Qe(e, t, o.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Yr(t, n),
        (o = St(o)),
        (r = r(o)),
        (t.flags |= 1),
        Qe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Ot(r, t.pendingProps)),
        (o = Ot(r.type, o)),
        ef(e, t, r, o, n)
      );
    case 15:
      return em(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ot(r, o)),
        vs(e, t),
        (t.tag = 1),
        nt(r) ? ((e = !0), Ms(t)) : (e = !1),
        Yr(t, n),
        Xh(t, r, o),
        nu(t, r, o, n),
        iu(null, t, r, !0, e, n)
      );
    case 19:
      return im(e, t, n);
    case 22:
      return tm(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function Sm(e, t) {
  return Gp(e, t);
}
function l1(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function xt(e, t, n, r) {
  return new l1(e, t, n, r);
}
function kc(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function a1(e) {
  if (typeof e == "function") return kc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Hu)) return 11;
    if (e === Wu) return 14;
  }
  return 2;
}
function Xn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = xt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ws(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) kc(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Mr:
        return xr(n.children, o, i, t);
      case Vu:
        ((s = 8), (o |= 8));
        break;
      case Pa:
        return (
          (e = xt(12, n, t, o | 2)),
          (e.elementType = Pa),
          (e.lanes = i),
          e
        );
      case Na:
        return ((e = xt(13, n, t, o)), (e.elementType = Na), (e.lanes = i), e);
      case Ta:
        return ((e = xt(19, n, t, o)), (e.elementType = Ta), (e.lanes = i), e);
      case jp:
        return ml(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Rp:
              s = 10;
              break e;
            case Ap:
              s = 9;
              break e;
            case Hu:
              s = 11;
              break e;
            case Wu:
              s = 14;
              break e;
            case On:
              ((s = 16), (r = null));
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = xt(s, n, t, o)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function xr(e, t, n, r) {
  return ((e = xt(7, e, r, t)), (e.lanes = n), e);
}
function ml(e, t, n, r) {
  return (
    (e = xt(22, e, r, t)),
    (e.elementType = jp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ga(e, t, n) {
  return ((e = xt(6, e, null, t)), (e.lanes = n), e);
}
function va(e, t, n) {
  return (
    (t = xt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function u1(e, t, n, r, o) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Xl(0)),
    (this.expirationTimes = Xl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function Pc(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new u1(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = xt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    uc(i),
    e
  );
}
function c1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: _r,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function bm(e) {
  if (!e) return Jn;
  e = e._reactInternals;
  e: {
    if (Tr(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (nt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (nt(n)) return bh(e, n, t);
  }
  return t;
}
function Cm(e, t, n, r, o, i, s, l, a) {
  return (
    (e = Pc(n, r, !0, e, o, i, s, l, a)),
    (e.context = bm(null)),
    (n = e.current),
    (r = Ge()),
    (o = qn(n)),
    (i = mn(r, o)),
    (i.callback = t ?? null),
    Gn(n, i, o),
    (e.current.lanes = o),
    Ni(e, o, r),
    rt(e, r),
    e
  );
}
function gl(e, t, n, r) {
  var o = t.current,
    i = Ge(),
    s = qn(o);
  return (
    (n = bm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = mn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Gn(o, t, s)),
    e !== null && (Ft(e, o, s, i), hs(e, o, s)),
    s
  );
}
function Ks(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function pf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Nc(e, t) {
  (pf(e, t), (e = e.alternate) && pf(e, t));
}
function d1() {
  return null;
}
var Em =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Tc(e) {
  this._internalRoot = e;
}
vl.prototype.render = Tc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  gl(e, t, null, null);
};
vl.prototype.unmount = Tc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Er(function () {
      gl(null, e, null, null);
    }),
      (t[vn] = null));
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = th();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Mn.length && t !== 0 && t < Mn[n].priority; n++);
    (Mn.splice(n, 0, e), n === 0 && rh(e));
  }
};
function Rc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function yl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function hf() {}
function f1(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Ks(s);
        i.call(u);
      };
    }
    var s = Cm(t, r, e, 0, null, !1, !1, "", hf);
    return (
      (e._reactRootContainer = s),
      (e[vn] = s.current),
      ai(e.nodeType === 8 ? e.parentNode : e),
      Er(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Ks(a);
      l.call(u);
    };
  }
  var a = Pc(e, 0, !1, null, null, !1, !1, "", hf);
  return (
    (e._reactRootContainer = a),
    (e[vn] = a.current),
    ai(e.nodeType === 8 ? e.parentNode : e),
    Er(function () {
      gl(t, a, n, r);
    }),
    a
  );
}
function xl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Ks(s);
        l.call(a);
      };
    }
    gl(t, s, e, o);
  } else s = f1(n, t, e, o, r);
  return Ks(s);
}
Jp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = $o(t.pendingLanes);
        n !== 0 &&
          (Gu(t, n | 1), rt(t, be()), !(ee & 6) && ((mo = be() + 500), ir()));
      }
      break;
    case 13:
      (Er(function () {
        var r = yn(e, 1);
        if (r !== null) {
          var o = Ge();
          Ft(r, e, 1, o);
        }
      }),
        Nc(e, 1));
  }
};
Yu = function (e) {
  if (e.tag === 13) {
    var t = yn(e, 134217728);
    if (t !== null) {
      var n = Ge();
      Ft(t, e, 134217728, n);
    }
    Nc(e, 134217728);
  }
};
eh = function (e) {
  if (e.tag === 13) {
    var t = qn(e),
      n = yn(e, t);
    if (n !== null) {
      var r = Ge();
      Ft(n, e, t, r);
    }
    Nc(e, t);
  }
};
th = function () {
  return oe;
};
nh = function (e, t) {
  var n = oe;
  try {
    return ((oe = e), t());
  } finally {
    oe = n;
  }
};
za = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ja(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ul(r);
            if (!o) throw Error(_(90));
            (_p(r), ja(r, o));
          }
        }
      }
      break;
    case "textarea":
      Lp(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Wr(e, !!n.multiple, t, !1));
  }
};
Up = bc;
Vp = Er;
var p1 = { usingClientEntryPoint: !1, Events: [Ri, zr, ul, $p, Bp, bc] },
  Lo = {
    findFiberByHostInstance: ur,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  h1 = {
    bundleType: Lo.bundleType,
    version: Lo.version,
    rendererPackageName: Lo.rendererPackageName,
    rendererConfig: Lo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: bn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Qp(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Lo.findFiberByHostInstance || d1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var rs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!rs.isDisabled && rs.supportsFiber)
    try {
      ((il = rs.inject(h1)), (Jt = rs));
    } catch {}
}
ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = p1;
ht.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Rc(t)) throw Error(_(200));
  return c1(e, t, null, n);
};
ht.createRoot = function (e, t) {
  if (!Rc(e)) throw Error(_(299));
  var n = !1,
    r = "",
    o = Em;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Pc(e, 1, !1, null, null, n, !1, r, o)),
    (e[vn] = t.current),
    ai(e.nodeType === 8 ? e.parentNode : e),
    new Tc(t)
  );
};
ht.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return ((e = Qp(t)), (e = e === null ? null : e.stateNode), e);
};
ht.flushSync = function (e) {
  return Er(e);
};
ht.hydrate = function (e, t, n) {
  if (!yl(t)) throw Error(_(200));
  return xl(null, e, t, !0, n);
};
ht.hydrateRoot = function (e, t, n) {
  if (!Rc(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Em;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Cm(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[vn] = t.current),
    ai(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o));
  return new vl(t);
};
ht.render = function (e, t, n) {
  if (!yl(t)) throw Error(_(200));
  return xl(null, e, t, !1, n);
};
ht.unmountComponentAtNode = function (e) {
  if (!yl(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (Er(function () {
        xl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[vn] = null));
        });
      }),
      !0)
    : !1;
};
ht.unstable_batchedUpdates = bc;
ht.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!yl(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return xl(e, t, n, !1, r);
};
ht.version = "18.3.1-next-f1338f8080-20240426";
function km() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(km);
    } catch (e) {
      console.error(e);
    }
}
(km(), (kp.exports = ht));
var ji = kp.exports;
const Pm = pp(ji);
var Nm,
  mf = ji;
((Nm = mf.createRoot), mf.hydrateRoot);
const m1 = 1,
  g1 = 1e6;
let ya = 0;
function v1() {
  return ((ya = (ya + 1) % Number.MAX_SAFE_INTEGER), ya.toString());
}
const xa = new Map(),
  gf = (e) => {
    if (xa.has(e)) return;
    const t = setTimeout(() => {
      (xa.delete(e), Zo({ type: "REMOVE_TOAST", toastId: e }));
    }, g1);
    xa.set(e, t);
  },
  y1 = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, m1) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? gf(n)
            : e.toasts.forEach((r) => {
                gf(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  Ss = [];
let bs = { toasts: [] };
function Zo(e) {
  ((bs = y1(bs, e)),
    Ss.forEach((t) => {
      t(bs);
    }));
}
function x1({ ...e }) {
  const t = v1(),
    n = (o) => Zo({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => Zo({ type: "DISMISS_TOAST", toastId: t });
  return (
    Zo({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function w1() {
  const [e, t] = S.useState(bs);
  return (
    S.useEffect(
      () => (
        Ss.push(t),
        () => {
          const n = Ss.indexOf(t);
          n > -1 && Ss.splice(n, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: x1,
      dismiss: (n) => Zo({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function Ce(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function vf(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Tm(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = vf(o, t);
      return (!n && typeof i == "function" && (n = !0), i);
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : vf(e[o], null);
        }
      };
  };
}
function pt(...e) {
  return S.useCallback(Tm(...e), e);
}
function So(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = S.createContext(s),
      a = n.length;
    n = [...n, s];
    const u = (d) => {
      var h;
      const { scope: m, children: p, ...x } = d,
        g = ((h = m == null ? void 0 : m[e]) == null ? void 0 : h[a]) || l,
        w = S.useMemo(() => x, Object.values(x));
      return y.jsx(g.Provider, { value: w, children: p });
    };
    u.displayName = i + "Provider";
    function c(d, m) {
      var g;
      const p = ((g = m == null ? void 0 : m[e]) == null ? void 0 : g[a]) || l,
        x = S.useContext(p);
      if (x) return x;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = n.map((s) => S.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return S.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return ((o.scopeName = e), [r, S1(o, ...t)]);
}
function S1(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const d = a(i)[`__scope${u}`];
        return { ...l, ...d };
      }, {});
      return S.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function Gs(e) {
  const t = C1(e),
    n = S.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        l = S.Children.toArray(i),
        a = l.find(k1);
      if (a) {
        const u = a.props.children,
          c = l.map((d) =>
            d === a
              ? S.Children.count(u) > 1
                ? S.Children.only(null)
                : S.isValidElement(u)
                  ? u.props.children
                  : null
              : d,
          );
        return y.jsx(t, {
          ...s,
          ref: o,
          children: S.isValidElement(u) ? S.cloneElement(u, void 0, c) : null,
        });
      }
      return y.jsx(t, { ...s, ref: o, children: i });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
var b1 = Gs("Slot");
function C1(e) {
  const t = S.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (S.isValidElement(o)) {
      const s = N1(o),
        l = P1(i, o.props);
      return (
        o.type !== S.Fragment && (l.ref = r ? Tm(r, s) : s),
        S.cloneElement(o, l)
      );
    }
    return S.Children.count(o) > 1 ? S.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var Rm = Symbol("radix.slottable");
function E1(e) {
  const t = ({ children: n }) => y.jsx(y.Fragment, { children: n });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = Rm), t);
}
function k1(e) {
  return (
    S.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === Rm
  );
}
function P1(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...l) => {
            const a = i(...l);
            return (o(...l), a);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...i })
        : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function N1(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Am(e) {
  const t = e + "CollectionProvider",
    [n, r] = So(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (g) => {
      const { scope: w, children: h } = g,
        f = O.useRef(null),
        v = O.useRef(new Map()).current;
      return y.jsx(o, { scope: w, itemMap: v, collectionRef: f, children: h });
    };
  s.displayName = t;
  const l = e + "CollectionSlot",
    a = Gs(l),
    u = O.forwardRef((g, w) => {
      const { scope: h, children: f } = g,
        v = i(l, h),
        b = pt(w, v.collectionRef);
      return y.jsx(a, { ref: b, children: f });
    });
  u.displayName = l;
  const c = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    m = Gs(c),
    p = O.forwardRef((g, w) => {
      const { scope: h, children: f, ...v } = g,
        b = O.useRef(null),
        C = pt(w, b),
        E = i(c, h);
      return (
        O.useEffect(
          () => (
            E.itemMap.set(b, { ref: b, ...v }),
            () => void E.itemMap.delete(b)
          ),
        ),
        y.jsx(m, { [d]: "", ref: C, children: f })
      );
    });
  p.displayName = c;
  function x(g) {
    const w = i(e + "CollectionConsumer", g);
    return O.useCallback(() => {
      const f = w.collectionRef.current;
      if (!f) return [];
      const v = Array.from(f.querySelectorAll(`[${d}]`));
      return Array.from(w.itemMap.values()).sort(
        (E, k) => v.indexOf(E.ref.current) - v.indexOf(k.ref.current),
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: p }, x, r];
}
var T1 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Ae = T1.reduce((e, t) => {
    const n = Gs(`Primitive.${t}`),
      r = S.forwardRef((o, i) => {
        const { asChild: s, ...l } = o,
          a = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          y.jsx(a, { ...l, ref: i })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function jm(e, t) {
  e && ji.flushSync(() => e.dispatchEvent(t));
}
function er(e) {
  const t = S.useRef(e);
  return (
    S.useEffect(() => {
      t.current = e;
    }),
    S.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function R1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = er(e);
  S.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var A1 = "DismissableLayer",
  vu = "dismissableLayer.update",
  j1 = "dismissableLayer.pointerDownOutside",
  O1 = "dismissableLayer.focusOutside",
  yf,
  Om = S.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Ac = S.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: l,
        ...a
      } = e,
      u = S.useContext(Om),
      [c, d] = S.useState(null),
      m =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, p] = S.useState({}),
      x = pt(t, (k) => d(k)),
      g = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      h = g.indexOf(w),
      f = c ? g.indexOf(c) : -1,
      v = u.layersWithOutsidePointerEventsDisabled.size > 0,
      b = f >= h,
      C = M1((k) => {
        const P = k.target,
          A = [...u.branches].some((j) => j.contains(P));
        !b ||
          A ||
          (o == null || o(k),
          s == null || s(k),
          k.defaultPrevented || l == null || l());
      }, m),
      E = L1((k) => {
        const P = k.target;
        [...u.branches].some((j) => j.contains(P)) ||
          (i == null || i(k),
          s == null || s(k),
          k.defaultPrevented || l == null || l());
      }, m);
    return (
      R1((k) => {
        f === u.layers.size - 1 &&
          (r == null || r(k),
          !k.defaultPrevented && l && (k.preventDefault(), l()));
      }, m),
      S.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((yf = m.body.style.pointerEvents),
                (m.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            xf(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (m.body.style.pointerEvents = yf);
            }
          );
      }, [c, m, n, u]),
      S.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            xf());
        },
        [c, u],
      ),
      S.useEffect(() => {
        const k = () => p({});
        return (
          document.addEventListener(vu, k),
          () => document.removeEventListener(vu, k)
        );
      }, []),
      y.jsx(Ae.div, {
        ...a,
        ref: x,
        style: {
          pointerEvents: v ? (b ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Ce(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: Ce(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: Ce(
          e.onPointerDownCapture,
          C.onPointerDownCapture,
        ),
      })
    );
  });
Ac.displayName = A1;
var _1 = "DismissableLayerBranch",
  _m = S.forwardRef((e, t) => {
    const n = S.useContext(Om),
      r = S.useRef(null),
      o = pt(t, r);
    return (
      S.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      y.jsx(Ae.div, { ...e, ref: o })
    );
  });
_m.displayName = _1;
function M1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = er(e),
    r = S.useRef(!1),
    o = S.useRef(() => {});
  return (
    S.useEffect(() => {
      const i = (l) => {
          if (l.target && !r.current) {
            let a = function () {
              Mm(j1, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = a),
                t.addEventListener("click", o.current, { once: !0 }))
              : a();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        (window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function L1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = er(e),
    r = S.useRef(!1);
  return (
    S.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          Mm(O1, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function xf() {
  const e = new CustomEvent(vu);
  document.dispatchEvent(e);
}
function Mm(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? jm(o, i) : o.dispatchEvent(i));
}
var D1 = Ac,
  I1 = _m,
  nn = globalThis != null && globalThis.document ? S.useLayoutEffect : () => {},
  z1 = "Portal",
  Lm = S.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, i] = S.useState(!1);
    nn(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return s ? Pm.createPortal(y.jsx(Ae.div, { ...r, ref: t }), s) : null;
  });
Lm.displayName = z1;
function F1(e, t) {
  return S.useReducer((n, r) => t[n][r] ?? n, e);
}
var wl = (e) => {
  const { present: t, children: n } = e,
    r = $1(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : S.Children.only(n),
    i = pt(r.ref, B1(o));
  return typeof n == "function" || r.isPresent
    ? S.cloneElement(o, { ref: i })
    : null;
};
wl.displayName = "Presence";
function $1(e) {
  const [t, n] = S.useState(),
    r = S.useRef(null),
    o = S.useRef(e),
    i = S.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [l, a] = F1(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    S.useEffect(() => {
      const u = os(r.current);
      i.current = l === "mounted" ? u : "none";
    }, [l]),
    nn(() => {
      const u = r.current,
        c = o.current;
      if (c !== e) {
        const m = i.current,
          p = os(u);
        (e
          ? a("MOUNT")
          : p === "none" || (u == null ? void 0 : u.display) === "none"
            ? a("UNMOUNT")
            : a(c && m !== p ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e));
      }
    }, [e, a]),
    nn(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          d = (p) => {
            const g = os(r.current).includes(p.animationName);
            if (p.target === t && g && (a("ANIMATION_END"), !o.current)) {
              const w = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                })));
            }
          },
          m = (p) => {
            p.target === t && (i.current = os(r.current));
          };
        return (
          t.addEventListener("animationstart", m),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            (c.clearTimeout(u),
              t.removeEventListener("animationstart", m),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d));
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: S.useCallback((u) => {
        ((r.current = u ? getComputedStyle(u) : null), n(u));
      }, []),
    }
  );
}
function os(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function B1(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var U1 = Fu[" useInsertionEffect ".trim().toString()] || nn;
function Sl({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, i, s] = V1({ defaultProp: t, onChange: n }),
    l = e !== void 0,
    a = l ? e : o;
  {
    const c = S.useRef(e !== void 0);
    S.useEffect(() => {
      const d = c.current;
      (d !== l &&
        console.warn(
          `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (c.current = l));
    }, [l, r]);
  }
  const u = S.useCallback(
    (c) => {
      var d;
      if (l) {
        const m = H1(c) ? c(e) : c;
        m !== e && ((d = s.current) == null || d.call(s, m));
      } else i(c);
    },
    [l, e, i, s],
  );
  return [a, u];
}
function V1({ defaultProp: e, onChange: t }) {
  const [n, r] = S.useState(e),
    o = S.useRef(n),
    i = S.useRef(t);
  return (
    U1(() => {
      i.current = t;
    }, [t]),
    S.useEffect(() => {
      var s;
      o.current !== n &&
        ((s = i.current) == null || s.call(i, n), (o.current = n));
    }, [n, o]),
    [n, r, i]
  );
}
function H1(e) {
  return typeof e == "function";
}
var W1 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  Q1 = "VisuallyHidden",
  bl = S.forwardRef((e, t) =>
    y.jsx(Ae.span, { ...e, ref: t, style: { ...W1, ...e.style } }),
  );
bl.displayName = Q1;
var K1 = bl,
  jc = "ToastProvider",
  [Oc, G1, Y1] = Am("Toast"),
  [Dm, C2] = So("Toast", [Y1]),
  [q1, Cl] = Dm(jc),
  Im = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: s,
      } = e,
      [l, a] = S.useState(null),
      [u, c] = S.useState(0),
      d = S.useRef(!1),
      m = S.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${jc}\`. Expected non-empty \`string\`.`,
        ),
      y.jsx(Oc.Provider, {
        scope: t,
        children: y.jsx(q1, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: u,
          viewport: l,
          onViewportChange: a,
          onToastAdd: S.useCallback(() => c((p) => p + 1), []),
          onToastRemove: S.useCallback(() => c((p) => p - 1), []),
          isFocusedToastEscapeKeyDownRef: d,
          isClosePausedRef: m,
          children: s,
        }),
      })
    );
  };
Im.displayName = jc;
var zm = "ToastViewport",
  X1 = ["F8"],
  yu = "toast.viewportPause",
  xu = "toast.viewportResume",
  Fm = S.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = X1,
        label: o = "Notifications ({hotkey})",
        ...i
      } = e,
      s = Cl(zm, n),
      l = G1(n),
      a = S.useRef(null),
      u = S.useRef(null),
      c = S.useRef(null),
      d = S.useRef(null),
      m = pt(t, d, s.onViewportChange),
      p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      x = s.toastCount > 0;
    (S.useEffect(() => {
      const w = (h) => {
        var v;
        r.length !== 0 &&
          r.every((b) => h[b] || h.code === b) &&
          ((v = d.current) == null || v.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [r]),
      S.useEffect(() => {
        const w = a.current,
          h = d.current;
        if (x && w && h) {
          const f = () => {
              if (!s.isClosePausedRef.current) {
                const E = new CustomEvent(yu);
                (h.dispatchEvent(E), (s.isClosePausedRef.current = !0));
              }
            },
            v = () => {
              if (s.isClosePausedRef.current) {
                const E = new CustomEvent(xu);
                (h.dispatchEvent(E), (s.isClosePausedRef.current = !1));
              }
            },
            b = (E) => {
              !w.contains(E.relatedTarget) && v();
            },
            C = () => {
              w.contains(document.activeElement) || v();
            };
          return (
            w.addEventListener("focusin", f),
            w.addEventListener("focusout", b),
            w.addEventListener("pointermove", f),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", f),
            window.addEventListener("focus", v),
            () => {
              (w.removeEventListener("focusin", f),
                w.removeEventListener("focusout", b),
                w.removeEventListener("pointermove", f),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", f),
                window.removeEventListener("focus", v));
            }
          );
        }
      }, [x, s.isClosePausedRef]));
    const g = S.useCallback(
      ({ tabbingDirection: w }) => {
        const f = l().map((v) => {
          const b = v.ref.current,
            C = [b, ...cx(b)];
          return w === "forwards" ? C : C.reverse();
        });
        return (w === "forwards" ? f.reverse() : f).flat();
      },
      [l],
    );
    return (
      S.useEffect(() => {
        const w = d.current;
        if (w) {
          const h = (f) => {
            var C, E, k;
            const v = f.altKey || f.ctrlKey || f.metaKey;
            if (f.key === "Tab" && !v) {
              const P = document.activeElement,
                A = f.shiftKey;
              if (f.target === w && A) {
                (C = u.current) == null || C.focus();
                return;
              }
              const L = g({ tabbingDirection: A ? "backwards" : "forwards" }),
                H = L.findIndex((M) => M === P);
              wa(L.slice(H + 1))
                ? f.preventDefault()
                : A
                  ? (E = u.current) == null || E.focus()
                  : (k = c.current) == null || k.focus();
            }
          };
          return (
            w.addEventListener("keydown", h),
            () => w.removeEventListener("keydown", h)
          );
        }
      }, [l, g]),
      y.jsxs(I1, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", p),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : "none" },
        children: [
          x &&
            y.jsx(wu, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = g({ tabbingDirection: "forwards" });
                wa(w);
              },
            }),
          y.jsx(Oc.Slot, {
            scope: n,
            children: y.jsx(Ae.ol, { tabIndex: -1, ...i, ref: m }),
          }),
          x &&
            y.jsx(wu, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const w = g({ tabbingDirection: "backwards" });
                wa(w);
              },
            }),
        ],
      })
    );
  });
Fm.displayName = zm;
var $m = "ToastFocusProxy",
  wu = S.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      i = Cl($m, n);
    return y.jsx(bl, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const l = s.relatedTarget;
        !((u = i.viewport) != null && u.contains(l)) && r();
      },
    });
  });
wu.displayName = $m;
var Oi = "Toast",
  Z1 = "toast.swipeStart",
  J1 = "toast.swipeMove",
  ex = "toast.swipeCancel",
  tx = "toast.swipeEnd",
  Bm = S.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
      [l, a] = Sl({ prop: r, defaultProp: o ?? !0, onChange: i, caller: Oi });
    return y.jsx(wl, {
      present: n || l,
      children: y.jsx(ox, {
        open: l,
        ...s,
        ref: t,
        onClose: () => a(!1),
        onPause: er(e.onPause),
        onResume: er(e.onResume),
        onSwipeStart: Ce(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Ce(e.onSwipeMove, (u) => {
          const { x: c, y: d } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${c}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${d}px`,
            ));
        }),
        onSwipeCancel: Ce(e.onSwipeCancel, (u) => {
          (u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: Ce(e.onSwipeEnd, (u) => {
          const { x: c, y: d } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${c}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${d}px`,
            ),
            a(!1));
        }),
      }),
    });
  });
Bm.displayName = Oi;
var [nx, rx] = Dm(Oi, { onClose() {} }),
  ox = S.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: l,
        onPause: a,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: d,
        onSwipeCancel: m,
        onSwipeEnd: p,
        ...x
      } = e,
      g = Cl(Oi, n),
      [w, h] = S.useState(null),
      f = pt(t, (M) => h(M)),
      v = S.useRef(null),
      b = S.useRef(null),
      C = o || g.duration,
      E = S.useRef(0),
      k = S.useRef(C),
      P = S.useRef(0),
      { onToastAdd: A, onToastRemove: j } = g,
      I = er(() => {
        var W;
        ((w == null ? void 0 : w.contains(document.activeElement)) &&
          ((W = g.viewport) == null || W.focus()),
          s());
      }),
      L = S.useCallback(
        (M) => {
          !M ||
            M === 1 / 0 ||
            (window.clearTimeout(P.current),
            (E.current = new Date().getTime()),
            (P.current = window.setTimeout(I, M)));
        },
        [I],
      );
    (S.useEffect(() => {
      const M = g.viewport;
      if (M) {
        const W = () => {
            (L(k.current), u == null || u());
          },
          B = () => {
            const V = new Date().getTime() - E.current;
            ((k.current = k.current - V),
              window.clearTimeout(P.current),
              a == null || a());
          };
        return (
          M.addEventListener(yu, B),
          M.addEventListener(xu, W),
          () => {
            (M.removeEventListener(yu, B), M.removeEventListener(xu, W));
          }
        );
      }
    }, [g.viewport, C, a, u, L]),
      S.useEffect(() => {
        i && !g.isClosePausedRef.current && L(C);
      }, [i, C, g.isClosePausedRef, L]),
      S.useEffect(() => (A(), () => j()), [A, j]));
    const H = S.useMemo(() => (w ? Gm(w) : null), [w]);
    return g.viewport
      ? y.jsxs(y.Fragment, {
          children: [
            H &&
              y.jsx(ix, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: H,
              }),
            y.jsx(nx, {
              scope: n,
              onClose: I,
              children: ji.createPortal(
                y.jsx(Oc.ItemSlot, {
                  scope: n,
                  children: y.jsx(D1, {
                    asChild: !0,
                    onEscapeKeyDown: Ce(l, () => {
                      (g.isFocusedToastEscapeKeyDownRef.current || I(),
                        (g.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: y.jsx(Ae.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": g.swipeDirection,
                      ...x,
                      ref: f,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: Ce(e.onKeyDown, (M) => {
                        M.key === "Escape" &&
                          (l == null || l(M.nativeEvent),
                          M.nativeEvent.defaultPrevented ||
                            ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                            I()));
                      }),
                      onPointerDown: Ce(e.onPointerDown, (M) => {
                        M.button === 0 &&
                          (v.current = { x: M.clientX, y: M.clientY });
                      }),
                      onPointerMove: Ce(e.onPointerMove, (M) => {
                        if (!v.current) return;
                        const W = M.clientX - v.current.x,
                          B = M.clientY - v.current.y,
                          V = !!b.current,
                          N = ["left", "right"].includes(g.swipeDirection),
                          R = ["left", "up"].includes(g.swipeDirection)
                            ? Math.min
                            : Math.max,
                          D = N ? R(0, W) : 0,
                          U = N ? 0 : R(0, B),
                          $ = M.pointerType === "touch" ? 10 : 2,
                          G = { x: D, y: U },
                          Q = { originalEvent: M, delta: G };
                        V
                          ? ((b.current = G), is(J1, d, Q, { discrete: !1 }))
                          : wf(G, g.swipeDirection, $)
                            ? ((b.current = G),
                              is(Z1, c, Q, { discrete: !1 }),
                              M.target.setPointerCapture(M.pointerId))
                            : (Math.abs(W) > $ || Math.abs(B) > $) &&
                              (v.current = null);
                      }),
                      onPointerUp: Ce(e.onPointerUp, (M) => {
                        const W = b.current,
                          B = M.target;
                        if (
                          (B.hasPointerCapture(M.pointerId) &&
                            B.releasePointerCapture(M.pointerId),
                          (b.current = null),
                          (v.current = null),
                          W)
                        ) {
                          const V = M.currentTarget,
                            N = { originalEvent: M, delta: W };
                          (wf(W, g.swipeDirection, g.swipeThreshold)
                            ? is(tx, p, N, { discrete: !0 })
                            : is(ex, m, N, { discrete: !0 }),
                            V.addEventListener(
                              "click",
                              (R) => R.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                g.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  ix = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = Cl(Oi, t),
      [i, s] = S.useState(!1),
      [l, a] = S.useState(!1);
    return (
      ax(() => s(!0)),
      S.useEffect(() => {
        const u = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      l
        ? null
        : y.jsx(Lm, {
            asChild: !0,
            children: y.jsx(bl, {
              ...r,
              children:
                i && y.jsxs(y.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  sx = "ToastTitle",
  Um = S.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return y.jsx(Ae.div, { ...r, ref: t });
  });
Um.displayName = sx;
var lx = "ToastDescription",
  Vm = S.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return y.jsx(Ae.div, { ...r, ref: t });
  });
Vm.displayName = lx;
var Hm = "ToastAction",
  Wm = S.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? y.jsx(Km, {
          altText: n,
          asChild: !0,
          children: y.jsx(_c, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Hm}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
Wm.displayName = Hm;
var Qm = "ToastClose",
  _c = S.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = rx(Qm, n);
    return y.jsx(Km, {
      asChild: !0,
      children: y.jsx(Ae.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: Ce(e.onClick, o.onClose),
      }),
    });
  });
_c.displayName = Qm;
var Km = S.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return y.jsx(Ae.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function Gm(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        ux(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (i) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...Gm(r));
      }
    }),
    t
  );
}
function is(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? jm(o, i) : o.dispatchEvent(i));
}
var wf = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function ax(e = () => {}) {
  const t = er(e);
  nn(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
      }
    );
  }, [t]);
}
function ux(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function cx(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function wa(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var dx = Im,
  Ym = Fm,
  qm = Bm,
  Xm = Um,
  Zm = Vm,
  Jm = Wm,
  eg = _c;
function tg(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = tg(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function ng() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = tg(e)) && (r && (r += " "), (r += t));
  return r;
}
const Sf = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  bf = ng,
  rg = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return bf(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const c = n == null ? void 0 : n[u],
          d = i == null ? void 0 : i[u];
        if (c === null) return null;
        const m = Sf(c) || Sf(d);
        return o[u][m];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [d, m] = c;
          return (m === void 0 || (u[d] = m), u);
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: d, className: m, ...p } = c;
              return Object.entries(p).every((x) => {
                let [g, w] = x;
                return Array.isArray(w)
                  ? w.includes({ ...i, ...l }[g])
                  : { ...i, ...l }[g] === w;
              })
                ? [...u, d, m]
                : u;
            }, []);
    return bf(
      e,
      s,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fx = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  og = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var px = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hx = S.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...l
    },
    a,
  ) =>
    S.createElement(
      "svg",
      {
        ref: a,
        ...px,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: og("lucide", o),
        ...l,
      },
      [
        ...s.map(([u, c]) => S.createElement(u, c)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ee = (e, t) => {
  const n = S.forwardRef(({ className: r, ...o }, i) =>
    S.createElement(hx, {
      ref: i,
      iconNode: t,
      className: og(`lucide-${fx(e)}`, r),
      ...o,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mx = Ee("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gx = Ee("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vx = Ee("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yx = Ee("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg",
    },
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xx = Ee("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wx = Ee("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sx = Ee("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bx = Ee("Compass", [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cx = Ee("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ex = Ee("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kx = Ee("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mc = Ee("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Px = Ee("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nx = Ee("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tx = Ee("Quote", [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0",
    },
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rx = Ee("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ax = Ee("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jx = Ee("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ox = Ee("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _x = Ee("Utensils", [
  ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
  ["path", { d: "M7 2v20", key: "1473qp" }],
  [
    "path",
    { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ig = Ee("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Lc = "-",
  Mx = (e) => {
    const t = Dx(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const l = s.split(Lc);
        return (l[0] === "" && l.length !== 1 && l.shift(), sg(l, t) || Lx(s));
      },
      getConflictingClassGroupIds: (s, l) => {
        const a = n[s] || [];
        return l && r[s] ? [...a, ...r[s]] : a;
      },
    };
  },
  sg = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? sg(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(Lc);
    return (s = t.validators.find(({ validator: l }) => l(i))) == null
      ? void 0
      : s.classGroupId;
  },
  Cf = /^\[(.+)\]$/,
  Lx = (e) => {
    if (Cf.test(e)) {
      const t = Cf.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Dx = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      zx(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        Su(s, r, i, t);
      }),
      r
    );
  },
  Su = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : Ef(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (Ix(o)) {
          Su(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        Su(s, Ef(t, i), n, r);
      });
    });
  },
  Ef = (e, t) => {
    let n = e;
    return (
      t.split(Lc).forEach((r) => {
        (n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r)));
      }),
      n
    );
  },
  Ix = (e) => e.isThemeGetter,
  zx = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
                ? Object.fromEntries(
                    Object.entries(i).map(([s, l]) => [t + s, l]),
                  )
                : i,
          );
          return [n, o];
        })
      : e,
  Fx = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      (n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map())));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return (o(i, s), s);
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  lg = "!",
  $x = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (l) => {
        const a = [];
        let u = 0,
          c = 0,
          d;
        for (let w = 0; w < l.length; w++) {
          let h = l[w];
          if (u === 0) {
            if (h === o && (r || l.slice(w, w + i) === t)) {
              (a.push(l.slice(c, w)), (c = w + i));
              continue;
            }
            if (h === "/") {
              d = w;
              continue;
            }
          }
          h === "[" ? u++ : h === "]" && u--;
        }
        const m = a.length === 0 ? l : l.substring(c),
          p = m.startsWith(lg),
          x = p ? m.substring(1) : m,
          g = d && d > c ? d - c : void 0;
        return {
          modifiers: a,
          hasImportantModifier: p,
          baseClassName: x,
          maybePostfixModifierPosition: g,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: s }) : s;
  },
  Bx = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  Ux = (e) => ({ cache: Fx(e.cacheSize), parseClassName: $x(e), ...Mx(e) }),
  Vx = /\s+/,
  Hx = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(Vx);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
      const u = s[a],
        {
          modifiers: c,
          hasImportantModifier: d,
          baseClassName: m,
          maybePostfixModifierPosition: p,
        } = n(u);
      let x = !!p,
        g = r(x ? m.substring(0, p) : m);
      if (!g) {
        if (!x) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((g = r(m)), !g)) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        x = !1;
      }
      const w = Bx(c).join(":"),
        h = d ? w + lg : w,
        f = h + g;
      if (i.includes(f)) continue;
      i.push(f);
      const v = o(g, x);
      for (let b = 0; b < v.length; ++b) {
        const C = v[b];
        i.push(h + C);
      }
      l = u + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function Wx() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ag(t)) && (r && (r += " "), (r += n));
  return r;
}
const ag = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = ag(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function Qx(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(a) {
    const u = t.reduce((c, d) => d(c), e());
    return ((n = Ux(u)), (r = n.cache.get), (o = n.cache.set), (i = l), l(a));
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const c = Hx(a, n);
    return (o(a, c), c);
  }
  return function () {
    return i(Wx.apply(null, arguments));
  };
}
const ue = (e) => {
    const t = (n) => n[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  ug = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Kx = /^\d+\/\d+$/,
  Gx = new Set(["px", "full", "screen"]),
  Yx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  qx =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Xx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Zx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Jx =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  an = (e) => Xr(e) || Gx.has(e) || Kx.test(e),
  Rn = (e) => bo(e, "length", lw),
  Xr = (e) => !!e && !Number.isNaN(Number(e)),
  Sa = (e) => bo(e, "number", Xr),
  Do = (e) => !!e && Number.isInteger(Number(e)),
  ew = (e) => e.endsWith("%") && Xr(e.slice(0, -1)),
  X = (e) => ug.test(e),
  An = (e) => Yx.test(e),
  tw = new Set(["length", "size", "percentage"]),
  nw = (e) => bo(e, tw, cg),
  rw = (e) => bo(e, "position", cg),
  ow = new Set(["image", "url"]),
  iw = (e) => bo(e, ow, uw),
  sw = (e) => bo(e, "", aw),
  Io = () => !0,
  bo = (e, t, n) => {
    const r = ug.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  lw = (e) => qx.test(e) && !Xx.test(e),
  cg = () => !1,
  aw = (e) => Zx.test(e),
  uw = (e) => Jx.test(e),
  cw = () => {
    const e = ue("colors"),
      t = ue("spacing"),
      n = ue("blur"),
      r = ue("brightness"),
      o = ue("borderColor"),
      i = ue("borderRadius"),
      s = ue("borderSpacing"),
      l = ue("borderWidth"),
      a = ue("contrast"),
      u = ue("grayscale"),
      c = ue("hueRotate"),
      d = ue("invert"),
      m = ue("gap"),
      p = ue("gradientColorStops"),
      x = ue("gradientColorStopPositions"),
      g = ue("inset"),
      w = ue("margin"),
      h = ue("opacity"),
      f = ue("padding"),
      v = ue("saturate"),
      b = ue("scale"),
      C = ue("sepia"),
      E = ue("skew"),
      k = ue("space"),
      P = ue("translate"),
      A = () => ["auto", "contain", "none"],
      j = () => ["auto", "hidden", "clip", "visible", "scroll"],
      I = () => ["auto", X, t],
      L = () => [X, t],
      H = () => ["", an, Rn],
      M = () => ["auto", Xr, X],
      W = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      B = () => ["solid", "dashed", "dotted", "double", "none"],
      V = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      N = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      R = () => ["", "0", X],
      D = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      U = () => [Xr, X];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Io],
        spacing: [an, Rn],
        blur: ["none", "", An, X],
        brightness: U(),
        borderColor: [e],
        borderRadius: ["none", "", "full", An, X],
        borderSpacing: L(),
        borderWidth: H(),
        contrast: U(),
        grayscale: R(),
        hueRotate: U(),
        invert: R(),
        gap: L(),
        gradientColorStops: [e],
        gradientColorStopPositions: [ew, Rn],
        inset: I(),
        margin: I(),
        opacity: U(),
        padding: L(),
        saturate: U(),
        scale: U(),
        sepia: R(),
        skew: U(),
        space: L(),
        translate: L(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", X] }],
        container: ["container"],
        columns: [{ columns: [An] }],
        "break-after": [{ "break-after": D() }],
        "break-before": [{ "break-before": D() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...W(), X] }],
        overflow: [{ overflow: j() }],
        "overflow-x": [{ "overflow-x": j() }],
        "overflow-y": [{ "overflow-y": j() }],
        overscroll: [{ overscroll: A() }],
        "overscroll-x": [{ "overscroll-x": A() }],
        "overscroll-y": [{ "overscroll-y": A() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [g] }],
        "inset-x": [{ "inset-x": [g] }],
        "inset-y": [{ "inset-y": [g] }],
        start: [{ start: [g] }],
        end: [{ end: [g] }],
        top: [{ top: [g] }],
        right: [{ right: [g] }],
        bottom: [{ bottom: [g] }],
        left: [{ left: [g] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Do, X] }],
        basis: [{ basis: I() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", X] }],
        grow: [{ grow: R() }],
        shrink: [{ shrink: R() }],
        order: [{ order: ["first", "last", "none", Do, X] }],
        "grid-cols": [{ "grid-cols": [Io] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Do, X] }, X] }],
        "col-start": [{ "col-start": M() }],
        "col-end": [{ "col-end": M() }],
        "grid-rows": [{ "grid-rows": [Io] }],
        "row-start-end": [{ row: ["auto", { span: [Do, X] }, X] }],
        "row-start": [{ "row-start": M() }],
        "row-end": [{ "row-end": M() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", X] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", X] }],
        gap: [{ gap: [m] }],
        "gap-x": [{ "gap-x": [m] }],
        "gap-y": [{ "gap-y": [m] }],
        "justify-content": [{ justify: ["normal", ...N()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...N(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...N(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [f] }],
        px: [{ px: [f] }],
        py: [{ py: [f] }],
        ps: [{ ps: [f] }],
        pe: [{ pe: [f] }],
        pt: [{ pt: [f] }],
        pr: [{ pr: [f] }],
        pb: [{ pb: [f] }],
        pl: [{ pl: [f] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [k] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [k] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", X, t] }],
        "min-w": [{ "min-w": [X, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              X,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [An] },
              An,
            ],
          },
        ],
        h: [{ h: [X, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [X, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", An, Rn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Sa,
            ],
          },
        ],
        "font-family": [{ font: [Io] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              X,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Xr, Sa] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              an,
              X,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", X] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", X] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [h] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [h] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...B(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", an, Rn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", an, X] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: L() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              X,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", X] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [h] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...W(), rw] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", nw] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              iw,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [x] }],
        "gradient-via-pos": [{ via: [x] }],
        "gradient-to-pos": [{ to: [x] }],
        "gradient-from": [{ from: [p] }],
        "gradient-via": [{ via: [p] }],
        "gradient-to": [{ to: [p] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [h] }],
        "border-style": [{ border: [...B(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [h] }],
        "divide-style": [{ divide: B() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...B()] }],
        "outline-offset": [{ "outline-offset": [an, X] }],
        "outline-w": [{ outline: [an, Rn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: H() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [h] }],
        "ring-offset-w": [{ "ring-offset": [an, Rn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", An, sw] }],
        "shadow-color": [{ shadow: [Io] }],
        opacity: [{ opacity: [h] }],
        "mix-blend": [{ "mix-blend": [...V(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": V() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", An, X] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [v] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [h] }],
        "backdrop-saturate": [{ "backdrop-saturate": [v] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              X,
            ],
          },
        ],
        duration: [{ duration: U() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", X] }],
        delay: [{ delay: U() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", X] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [b] }],
        "scale-x": [{ "scale-x": [b] }],
        "scale-y": [{ "scale-y": [b] }],
        rotate: [{ rotate: [Do, X] }],
        "translate-x": [{ "translate-x": [P] }],
        "translate-y": [{ "translate-y": [P] }],
        "skew-x": [{ "skew-x": [E] }],
        "skew-y": [{ "skew-y": [E] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              X,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              X,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": L() }],
        "scroll-mx": [{ "scroll-mx": L() }],
        "scroll-my": [{ "scroll-my": L() }],
        "scroll-ms": [{ "scroll-ms": L() }],
        "scroll-me": [{ "scroll-me": L() }],
        "scroll-mt": [{ "scroll-mt": L() }],
        "scroll-mr": [{ "scroll-mr": L() }],
        "scroll-mb": [{ "scroll-mb": L() }],
        "scroll-ml": [{ "scroll-ml": L() }],
        "scroll-p": [{ "scroll-p": L() }],
        "scroll-px": [{ "scroll-px": L() }],
        "scroll-py": [{ "scroll-py": L() }],
        "scroll-ps": [{ "scroll-ps": L() }],
        "scroll-pe": [{ "scroll-pe": L() }],
        "scroll-pt": [{ "scroll-pt": L() }],
        "scroll-pr": [{ "scroll-pr": L() }],
        "scroll-pb": [{ "scroll-pb": L() }],
        "scroll-pl": [{ "scroll-pl": L() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", X] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [an, Rn, Sa] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  dw = Qx(cw);
function Se(...e) {
  return dw(ng(e));
}
const fw = dx,
  dg = S.forwardRef(({ className: e, ...t }, n) =>
    y.jsx(Ym, {
      ref: n,
      className: Se(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
dg.displayName = Ym.displayName;
const pw = rg(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  fg = S.forwardRef(({ className: e, variant: t, ...n }, r) =>
    y.jsx(qm, { ref: r, className: Se(pw({ variant: t }), e), ...n }),
  );
fg.displayName = qm.displayName;
const hw = S.forwardRef(({ className: e, ...t }, n) =>
  y.jsx(Jm, {
    ref: n,
    className: Se(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e,
    ),
    ...t,
  }),
);
hw.displayName = Jm.displayName;
const pg = S.forwardRef(({ className: e, ...t }, n) =>
  y.jsx(eg, {
    ref: n,
    className: Se(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: y.jsx(ig, { className: "h-4 w-4" }),
  }),
);
pg.displayName = eg.displayName;
const hg = S.forwardRef(({ className: e, ...t }, n) =>
  y.jsx(Xm, { ref: n, className: Se("text-sm font-semibold", e), ...t }),
);
hg.displayName = Xm.displayName;
const mg = S.forwardRef(({ className: e, ...t }, n) =>
  y.jsx(Zm, { ref: n, className: Se("text-sm opacity-90", e), ...t }),
);
mg.displayName = Zm.displayName;
function mw() {
  const { toasts: e } = w1();
  return y.jsxs(fw, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
        return y.jsxs(
          fg,
          {
            ...i,
            children: [
              y.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && y.jsx(hg, { children: n }),
                  r && y.jsx(mg, { children: r }),
                ],
              }),
              o,
              y.jsx(pg, {}),
            ],
          },
          t,
        );
      }),
      y.jsx(dg, {}),
    ],
  });
}
var kf = ["light", "dark"],
  gw = "(prefers-color-scheme: dark)",
  vw = S.createContext(void 0),
  yw = { setTheme: (e) => {}, themes: [] },
  xw = () => {
    var e;
    return (e = S.useContext(vw)) != null ? e : yw;
  };
S.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: i,
    value: s,
    attrs: l,
    nonce: a,
  }) => {
    let u = i === "system",
      c =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map((x) => `'${x}'`).join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      d = o
        ? kf.includes(i) && i
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      m = (x, g = !1, w = !0) => {
        let h = s ? s[x] : x,
          f = g ? x + "|| ''" : `'${h}'`,
          v = "";
        return (
          o &&
            w &&
            !g &&
            kf.includes(x) &&
            (v += `d.style.colorScheme = '${x}';`),
          n === "class"
            ? g || h
              ? (v += `c.add(${f})`)
              : (v += "null")
            : h && (v += `d[s](n,${f})`),
          v
        );
      },
      p = e
        ? `!function(){${c}${m(e)}}()`
        : r
          ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${gw}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${m(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + m(i, !1, !1) + "}"}${d}}catch(e){}}()`
          : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${m(s ? "x[e]" : "e", !0)}}else{${m(i, !1, !1)};}${d}}catch(t){}}();`;
    return S.createElement("script", {
      nonce: a,
      dangerouslySetInnerHTML: { __html: p },
    });
  },
);
var ww = (e) => {
    switch (e) {
      case "success":
        return Cw;
      case "info":
        return kw;
      case "warning":
        return Ew;
      case "error":
        return Pw;
      default:
        return null;
    }
  },
  Sw = Array(12).fill(0),
  bw = ({ visible: e, className: t }) =>
    O.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      O.createElement(
        "div",
        { className: "sonner-spinner" },
        Sw.map((n, r) =>
          O.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          }),
        ),
      ),
    ),
  Cw = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  Ew = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  kw = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  Pw = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  Nw = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    O.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    O.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  Tw = () => {
    let [e, t] = O.useState(document.hidden);
    return (
      O.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  bu = 1,
  Rw = class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : bu++,
            i = this.toasts.find((l) => l.id === o),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i
              ? (this.toasts = this.toasts.map((l) =>
                  l.id === o
                    ? (this.publish({ ...l, ...e, id: o, title: n }),
                      { ...l, ...e, id: o, dismissible: s, title: n })
                    : l,
                ))
              : this.addToast({ title: n, ...r, dismissible: s, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0,
            i,
            s = r
              .then(async (a) => {
                if (((i = ["resolve", a]), O.isValidElement(a)))
                  ((o = !1),
                    this.create({ id: n, type: "default", message: a }));
                else if (jw(a) && !a.ok) {
                  o = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${a.status}`)
                        : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${a.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(a)
                        : t.success,
                    c =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: c,
                  });
                }
              })
              .catch(async (a) => {
                if (((i = ["reject", a]), t.error !== void 0)) {
                  o = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(a) : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                }
              })
              .finally(() => {
                var a;
                (o && (this.dismiss(n), (n = void 0)),
                  (a = t.finally) == null || a.call(t));
              }),
            l = () =>
              new Promise((a, u) =>
                s.then(() => (i[0] === "reject" ? u(i[1]) : a(i[1]))).catch(u),
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: l }
            : Object.assign(n, { unwrap: l });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || bu++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  },
  Ze = new Rw(),
  Aw = (e, t) => {
    let n = (t == null ? void 0 : t.id) || bu++;
    return (Ze.addToast({ title: e, ...t, id: n }), n);
  },
  jw = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  Ow = Aw,
  _w = () => Ze.toasts,
  Mw = () => Ze.getActiveToasts();
Object.assign(
  Ow,
  {
    success: Ze.success,
    info: Ze.info,
    warning: Ze.warning,
    error: Ze.error,
    custom: Ze.custom,
    message: Ze.message,
    promise: Ze.promise,
    dismiss: Ze.dismiss,
    loading: Ze.loading,
  },
  { getHistory: _w, getToasts: Mw },
);
function Lw(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  ((r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e)));
}
Lw(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ss(e) {
  return e.label !== void 0;
}
var Dw = 3,
  Iw = "32px",
  zw = "16px",
  Pf = 4e3,
  Fw = 356,
  $w = 14,
  Bw = 20,
  Uw = 200;
function jt(...e) {
  return e.filter(Boolean).join(" ");
}
function Vw(e) {
  let [t, n] = e.split("-"),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
var Hw = (e) => {
  var t, n, r, o, i, s, l, a, u, c, d;
  let {
      invert: m,
      toast: p,
      unstyled: x,
      interacting: g,
      setHeights: w,
      visibleToasts: h,
      heights: f,
      index: v,
      toasts: b,
      expanded: C,
      removeToast: E,
      defaultRichColors: k,
      closeButton: P,
      style: A,
      cancelButtonStyle: j,
      actionButtonStyle: I,
      className: L = "",
      descriptionClassName: H = "",
      duration: M,
      position: W,
      gap: B,
      loadingIcon: V,
      expandByDefault: N,
      classNames: R,
      icons: D,
      closeButtonAriaLabel: U = "Close toast",
      pauseWhenPageIsHidden: $,
    } = e,
    [G, Q] = O.useState(null),
    [ie, ve] = O.useState(null),
    [Y, ye] = O.useState(!1),
    [je, ke] = O.useState(!1),
    [te, F] = O.useState(!1),
    [J, ae] = O.useState(!1),
    [Ne, Ve] = O.useState(!1),
    [it, st] = O.useState(0),
    [He, Wt] = O.useState(0),
    Ct = O.useRef(p.duration || M || Pf),
    Rr = O.useRef(null),
    Et = O.useRef(null),
    Li = v === 0,
    Di = v + 1 <= h,
    Xe = p.type,
    ln = p.dismissible !== !1,
    Bl = p.className || "",
    ko = p.descriptionClassName || "",
    kt = O.useMemo(
      () => f.findIndex((K) => K.toastId === p.id) || 0,
      [f, p.id],
    ),
    Po = O.useMemo(() => {
      var K;
      return (K = p.closeButton) != null ? K : P;
    }, [p.closeButton, P]),
    Ar = O.useMemo(() => p.duration || M || Pf, [p.duration, M]),
    Cn = O.useRef(0),
    En = O.useRef(0),
    Ii = O.useRef(0),
    kn = O.useRef(null),
    [Ul, Vl] = W.split("-"),
    No = O.useMemo(
      () => f.reduce((K, re, se) => (se >= kt ? K : K + re.height), 0),
      [f, kt],
    ),
    zi = Tw(),
    Fi = p.invert || m,
    jr = Xe === "loading";
  ((En.current = O.useMemo(() => kt * B + No, [kt, No])),
    O.useEffect(() => {
      Ct.current = Ar;
    }, [Ar]),
    O.useEffect(() => {
      ye(!0);
    }, []),
    O.useEffect(() => {
      let K = Et.current;
      if (K) {
        let re = K.getBoundingClientRect().height;
        return (
          Wt(re),
          w((se) => [
            { toastId: p.id, height: re, position: p.position },
            ...se,
          ]),
          () => w((se) => se.filter((Nt) => Nt.toastId !== p.id))
        );
      }
    }, [w, p.id]),
    O.useLayoutEffect(() => {
      if (!Y) return;
      let K = Et.current,
        re = K.style.height;
      K.style.height = "auto";
      let se = K.getBoundingClientRect().height;
      ((K.style.height = re),
        Wt(se),
        w((Nt) =>
          Nt.find((Tt) => Tt.toastId === p.id)
            ? Nt.map((Tt) => (Tt.toastId === p.id ? { ...Tt, height: se } : Tt))
            : [{ toastId: p.id, height: se, position: p.position }, ...Nt],
        ));
    }, [Y, p.title, p.description, w, p.id]));
  let Pt = O.useCallback(() => {
    (ke(!0),
      st(En.current),
      w((K) => K.filter((re) => re.toastId !== p.id)),
      setTimeout(() => {
        E(p);
      }, Uw));
  }, [p, E, w, En]);
  (O.useEffect(() => {
    if (
      (p.promise && Xe === "loading") ||
      p.duration === 1 / 0 ||
      p.type === "loading"
    )
      return;
    let K;
    return (
      C || g || ($ && zi)
        ? (() => {
            if (Ii.current < Cn.current) {
              let re = new Date().getTime() - Cn.current;
              Ct.current = Ct.current - re;
            }
            Ii.current = new Date().getTime();
          })()
        : Ct.current !== 1 / 0 &&
          ((Cn.current = new Date().getTime()),
          (K = setTimeout(() => {
            var re;
            ((re = p.onAutoClose) == null || re.call(p, p), Pt());
          }, Ct.current))),
      () => clearTimeout(K)
    );
  }, [C, g, p, Xe, $, zi, Pt]),
    O.useEffect(() => {
      p.delete && Pt();
    }, [Pt, p.delete]));
  function Hl() {
    var K, re, se;
    return D != null && D.loading
      ? O.createElement(
          "div",
          {
            className: jt(
              R == null ? void 0 : R.loader,
              (K = p == null ? void 0 : p.classNames) == null
                ? void 0
                : K.loader,
              "sonner-loader",
            ),
            "data-visible": Xe === "loading",
          },
          D.loading,
        )
      : V
        ? O.createElement(
            "div",
            {
              className: jt(
                R == null ? void 0 : R.loader,
                (re = p == null ? void 0 : p.classNames) == null
                  ? void 0
                  : re.loader,
                "sonner-loader",
              ),
              "data-visible": Xe === "loading",
            },
            V,
          )
        : O.createElement(bw, {
            className: jt(
              R == null ? void 0 : R.loader,
              (se = p == null ? void 0 : p.classNames) == null
                ? void 0
                : se.loader,
            ),
            visible: Xe === "loading",
          });
  }
  return O.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Et,
      className: jt(
        L,
        Bl,
        R == null ? void 0 : R.toast,
        (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast,
        R == null ? void 0 : R.default,
        R == null ? void 0 : R[Xe],
        (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[Xe],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = p.richColors) != null ? r : k,
      "data-styled": !(p.jsx || p.unstyled || x),
      "data-mounted": Y,
      "data-promise": !!p.promise,
      "data-swiped": Ne,
      "data-removed": je,
      "data-visible": Di,
      "data-y-position": Ul,
      "data-x-position": Vl,
      "data-index": v,
      "data-front": Li,
      "data-swiping": te,
      "data-dismissible": ln,
      "data-type": Xe,
      "data-invert": Fi,
      "data-swipe-out": J,
      "data-swipe-direction": ie,
      "data-expanded": !!(C || (N && Y)),
      style: {
        "--index": v,
        "--toasts-before": v,
        "--z-index": b.length - v,
        "--offset": `${je ? it : En.current}px`,
        "--initial-height": N ? "auto" : `${He}px`,
        ...A,
        ...p.style,
      },
      onDragEnd: () => {
        (F(!1), Q(null), (kn.current = null));
      },
      onPointerDown: (K) => {
        jr ||
          !ln ||
          ((Rr.current = new Date()),
          st(En.current),
          K.target.setPointerCapture(K.pointerId),
          K.target.tagName !== "BUTTON" &&
            (F(!0), (kn.current = { x: K.clientX, y: K.clientY })));
      },
      onPointerUp: () => {
        var K, re, se, Nt;
        if (J || !ln) return;
        kn.current = null;
        let Tt = Number(
            ((K = Et.current) == null
              ? void 0
              : K.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          Pn = Number(
            ((re = Et.current) == null
              ? void 0
              : re.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          sr =
            new Date().getTime() -
            ((se = Rr.current) == null ? void 0 : se.getTime()),
          Rt = G === "x" ? Tt : Pn,
          Nn = Math.abs(Rt) / sr;
        if (Math.abs(Rt) >= Bw || Nn > 0.11) {
          (st(En.current),
            (Nt = p.onDismiss) == null || Nt.call(p, p),
            ve(
              G === "x" ? (Tt > 0 ? "right" : "left") : Pn > 0 ? "down" : "up",
            ),
            Pt(),
            ae(!0),
            Ve(!1));
          return;
        }
        (F(!1), Q(null));
      },
      onPointerMove: (K) => {
        var re, se, Nt, Tt;
        if (
          !kn.current ||
          !ln ||
          ((re = window.getSelection()) == null
            ? void 0
            : re.toString().length) > 0
        )
          return;
        let Pn = K.clientY - kn.current.y,
          sr = K.clientX - kn.current.x,
          Rt = (se = e.swipeDirections) != null ? se : Vw(W);
        !G &&
          (Math.abs(sr) > 1 || Math.abs(Pn) > 1) &&
          Q(Math.abs(sr) > Math.abs(Pn) ? "x" : "y");
        let Nn = { x: 0, y: 0 };
        (G === "y"
          ? (Rt.includes("top") || Rt.includes("bottom")) &&
            ((Rt.includes("top") && Pn < 0) ||
              (Rt.includes("bottom") && Pn > 0)) &&
            (Nn.y = Pn)
          : G === "x" &&
            (Rt.includes("left") || Rt.includes("right")) &&
            ((Rt.includes("left") && sr < 0) ||
              (Rt.includes("right") && sr > 0)) &&
            (Nn.x = sr),
          (Math.abs(Nn.x) > 0 || Math.abs(Nn.y) > 0) && Ve(!0),
          (Nt = Et.current) == null ||
            Nt.style.setProperty("--swipe-amount-x", `${Nn.x}px`),
          (Tt = Et.current) == null ||
            Tt.style.setProperty("--swipe-amount-y", `${Nn.y}px`));
      },
    },
    Po && !p.jsx
      ? O.createElement(
          "button",
          {
            "aria-label": U,
            "data-disabled": jr,
            "data-close-button": !0,
            onClick:
              jr || !ln
                ? () => {}
                : () => {
                    var K;
                    (Pt(), (K = p.onDismiss) == null || K.call(p, p));
                  },
            className: jt(
              R == null ? void 0 : R.closeButton,
              (o = p == null ? void 0 : p.classNames) == null
                ? void 0
                : o.closeButton,
            ),
          },
          (i = D == null ? void 0 : D.close) != null ? i : Nw,
        )
      : null,
    p.jsx || S.isValidElement(p.title)
      ? p.jsx
        ? p.jsx
        : typeof p.title == "function"
          ? p.title()
          : p.title
      : O.createElement(
          O.Fragment,
          null,
          Xe || p.icon || p.promise
            ? O.createElement(
                "div",
                {
                  "data-icon": "",
                  className: jt(
                    R == null ? void 0 : R.icon,
                    (s = p == null ? void 0 : p.classNames) == null
                      ? void 0
                      : s.icon,
                  ),
                },
                p.promise || (p.type === "loading" && !p.icon)
                  ? p.icon || Hl()
                  : null,
                p.type !== "loading"
                  ? p.icon || (D == null ? void 0 : D[Xe]) || ww(Xe)
                  : null,
              )
            : null,
          O.createElement(
            "div",
            {
              "data-content": "",
              className: jt(
                R == null ? void 0 : R.content,
                (l = p == null ? void 0 : p.classNames) == null
                  ? void 0
                  : l.content,
              ),
            },
            O.createElement(
              "div",
              {
                "data-title": "",
                className: jt(
                  R == null ? void 0 : R.title,
                  (a = p == null ? void 0 : p.classNames) == null
                    ? void 0
                    : a.title,
                ),
              },
              typeof p.title == "function" ? p.title() : p.title,
            ),
            p.description
              ? O.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: jt(
                      H,
                      ko,
                      R == null ? void 0 : R.description,
                      (u = p == null ? void 0 : p.classNames) == null
                        ? void 0
                        : u.description,
                    ),
                  },
                  typeof p.description == "function"
                    ? p.description()
                    : p.description,
                )
              : null,
          ),
          S.isValidElement(p.cancel)
            ? p.cancel
            : p.cancel && ss(p.cancel)
              ? O.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: p.cancelButtonStyle || j,
                    onClick: (K) => {
                      var re, se;
                      ss(p.cancel) &&
                        ln &&
                        ((se = (re = p.cancel).onClick) == null ||
                          se.call(re, K),
                        Pt());
                    },
                    className: jt(
                      R == null ? void 0 : R.cancelButton,
                      (c = p == null ? void 0 : p.classNames) == null
                        ? void 0
                        : c.cancelButton,
                    ),
                  },
                  p.cancel.label,
                )
              : null,
          S.isValidElement(p.action)
            ? p.action
            : p.action && ss(p.action)
              ? O.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: p.actionButtonStyle || I,
                    onClick: (K) => {
                      var re, se;
                      ss(p.action) &&
                        ((se = (re = p.action).onClick) == null ||
                          se.call(re, K),
                        !K.defaultPrevented && Pt());
                    },
                    className: jt(
                      R == null ? void 0 : R.actionButton,
                      (d = p == null ? void 0 : p.classNames) == null
                        ? void 0
                        : d.actionButton,
                    ),
                  },
                  p.action.label,
                )
              : null,
        ),
  );
};
function Nf() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function Ww(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, o) => {
      let i = o === 1,
        s = i ? "--mobile-offset" : "--offset",
        l = i ? zw : Iw;
      function a(u) {
        ["top", "right", "bottom", "left"].forEach((c) => {
          n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? a(r)
        : typeof r == "object"
          ? ["top", "right", "bottom", "left"].forEach((u) => {
              r[u] === void 0
                ? (n[`${s}-${u}`] = l)
                : (n[`${s}-${u}`] =
                    typeof r[u] == "number" ? `${r[u]}px` : r[u]);
            })
          : a(l);
    }),
    n
  );
}
var Qw = S.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: o = ["altKey", "KeyT"],
      expand: i,
      closeButton: s,
      className: l,
      offset: a,
      mobileOffset: u,
      theme: c = "light",
      richColors: d,
      duration: m,
      style: p,
      visibleToasts: x = Dw,
      toastOptions: g,
      dir: w = Nf(),
      gap: h = $w,
      loadingIcon: f,
      icons: v,
      containerAriaLabel: b = "Notifications",
      pauseWhenPageIsHidden: C,
    } = e,
    [E, k] = O.useState([]),
    P = O.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(E.filter(($) => $.position).map(($) => $.position)),
          ),
        ),
      [E, r],
    ),
    [A, j] = O.useState([]),
    [I, L] = O.useState(!1),
    [H, M] = O.useState(!1),
    [W, B] = O.useState(
      c !== "system"
        ? c
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    V = O.useRef(null),
    N = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    R = O.useRef(null),
    D = O.useRef(!1),
    U = O.useCallback(($) => {
      k((G) => {
        var Q;
        return (
          ((Q = G.find((ie) => ie.id === $.id)) != null && Q.delete) ||
            Ze.dismiss($.id),
          G.filter(({ id: ie }) => ie !== $.id)
        );
      });
    }, []);
  return (
    O.useEffect(
      () =>
        Ze.subscribe(($) => {
          if ($.dismiss) {
            k((G) => G.map((Q) => (Q.id === $.id ? { ...Q, delete: !0 } : Q)));
            return;
          }
          setTimeout(() => {
            Pm.flushSync(() => {
              k((G) => {
                let Q = G.findIndex((ie) => ie.id === $.id);
                return Q !== -1
                  ? [...G.slice(0, Q), { ...G[Q], ...$ }, ...G.slice(Q + 1)]
                  : [$, ...G];
              });
            });
          });
        }),
      [],
    ),
    O.useEffect(() => {
      if (c !== "system") {
        B(c);
        return;
      }
      if (
        (c === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? B("dark")
            : B("light")),
        typeof window > "u")
      )
        return;
      let $ = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        $.addEventListener("change", ({ matches: G }) => {
          B(G ? "dark" : "light");
        });
      } catch {
        $.addListener(({ matches: Q }) => {
          try {
            B(Q ? "dark" : "light");
          } catch (ie) {
            console.error(ie);
          }
        });
      }
    }, [c]),
    O.useEffect(() => {
      E.length <= 1 && L(!1);
    }, [E]),
    O.useEffect(() => {
      let $ = (G) => {
        var Q, ie;
        (o.every((ve) => G[ve] || G.code === ve) &&
          (L(!0), (Q = V.current) == null || Q.focus()),
          G.code === "Escape" &&
            (document.activeElement === V.current ||
              ((ie = V.current) != null &&
                ie.contains(document.activeElement))) &&
            L(!1));
      };
      return (
        document.addEventListener("keydown", $),
        () => document.removeEventListener("keydown", $)
      );
    }, [o]),
    O.useEffect(() => {
      if (V.current)
        return () => {
          R.current &&
            (R.current.focus({ preventScroll: !0 }),
            (R.current = null),
            (D.current = !1));
        };
    }, [V.current]),
    O.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${b} ${N}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      P.map(($, G) => {
        var Q;
        let [ie, ve] = $.split("-");
        return E.length
          ? O.createElement(
              "ol",
              {
                key: $,
                dir: w === "auto" ? Nf() : w,
                tabIndex: -1,
                ref: V,
                className: l,
                "data-sonner-toaster": !0,
                "data-theme": W,
                "data-y-position": ie,
                "data-lifted": I && E.length > 1 && !i,
                "data-x-position": ve,
                style: {
                  "--front-toast-height": `${((Q = A[0]) == null ? void 0 : Q.height) || 0}px`,
                  "--width": `${Fw}px`,
                  "--gap": `${h}px`,
                  ...p,
                  ...Ww(a, u),
                },
                onBlur: (Y) => {
                  D.current &&
                    !Y.currentTarget.contains(Y.relatedTarget) &&
                    ((D.current = !1),
                    R.current &&
                      (R.current.focus({ preventScroll: !0 }),
                      (R.current = null)));
                },
                onFocus: (Y) => {
                  (Y.target instanceof HTMLElement &&
                    Y.target.dataset.dismissible === "false") ||
                    D.current ||
                    ((D.current = !0), (R.current = Y.relatedTarget));
                },
                onMouseEnter: () => L(!0),
                onMouseMove: () => L(!0),
                onMouseLeave: () => {
                  H || L(!1);
                },
                onDragEnd: () => L(!1),
                onPointerDown: (Y) => {
                  (Y.target instanceof HTMLElement &&
                    Y.target.dataset.dismissible === "false") ||
                    M(!0);
                },
                onPointerUp: () => M(!1),
              },
              E.filter((Y) => (!Y.position && G === 0) || Y.position === $).map(
                (Y, ye) => {
                  var je, ke;
                  return O.createElement(Hw, {
                    key: Y.id,
                    icons: v,
                    index: ye,
                    toast: Y,
                    defaultRichColors: d,
                    duration:
                      (je = g == null ? void 0 : g.duration) != null ? je : m,
                    className: g == null ? void 0 : g.className,
                    descriptionClassName:
                      g == null ? void 0 : g.descriptionClassName,
                    invert: n,
                    visibleToasts: x,
                    closeButton:
                      (ke = g == null ? void 0 : g.closeButton) != null
                        ? ke
                        : s,
                    interacting: H,
                    position: $,
                    style: g == null ? void 0 : g.style,
                    unstyled: g == null ? void 0 : g.unstyled,
                    classNames: g == null ? void 0 : g.classNames,
                    cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                    actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                    removeToast: U,
                    toasts: E.filter((te) => te.position == Y.position),
                    heights: A.filter((te) => te.position == Y.position),
                    setHeights: j,
                    expandByDefault: i,
                    gap: h,
                    loadingIcon: f,
                    expanded: I,
                    pauseWhenPageIsHidden: C,
                    swipeDirections: e.swipeDirections,
                  });
                },
              ),
            )
          : null;
      }),
    )
  );
});
const Kw = ({ ...e }) => {
  const { theme: t = "system" } = xw();
  return y.jsx(Qw, {
    theme: t,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...e,
  });
};
var Gw = Fu[" useId ".trim().toString()] || (() => {}),
  Yw = 0;
function gg(e) {
  const [t, n] = S.useState(Gw());
  return (
    nn(() => {
      n((r) => r ?? String(Yw++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const qw = ["top", "right", "bottom", "left"],
  tr = Math.min,
  at = Math.max,
  Ys = Math.round,
  ls = Math.floor,
  tn = (e) => ({ x: e, y: e }),
  Xw = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Zw = { start: "end", end: "start" };
function Cu(e, t, n) {
  return at(e, tr(t, n));
}
function wn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Sn(e) {
  return e.split("-")[0];
}
function Co(e) {
  return e.split("-")[1];
}
function Dc(e) {
  return e === "x" ? "y" : "x";
}
function Ic(e) {
  return e === "y" ? "height" : "width";
}
const Jw = new Set(["top", "bottom"]);
function Zt(e) {
  return Jw.has(Sn(e)) ? "y" : "x";
}
function zc(e) {
  return Dc(Zt(e));
}
function eS(e, t, n) {
  n === void 0 && (n = !1);
  const r = Co(e),
    o = zc(e),
    i = Ic(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (t.reference[i] > t.floating[i] && (s = qs(s)), [s, qs(s)]);
}
function tS(e) {
  const t = qs(e);
  return [Eu(e), t, Eu(t)];
}
function Eu(e) {
  return e.replace(/start|end/g, (t) => Zw[t]);
}
const Tf = ["left", "right"],
  Rf = ["right", "left"],
  nS = ["top", "bottom"],
  rS = ["bottom", "top"];
function oS(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? Rf : Tf) : t ? Tf : Rf;
    case "left":
    case "right":
      return t ? nS : rS;
    default:
      return [];
  }
}
function iS(e, t, n, r) {
  const o = Co(e);
  let i = oS(Sn(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Eu)))),
    i
  );
}
function qs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Xw[t]);
}
function sS(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function vg(e) {
  return typeof e != "number"
    ? sS(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Xs(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Af(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = Zt(t),
    s = zc(t),
    l = Ic(s),
    a = Sn(t),
    u = i === "y",
    c = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    m = r[l] / 2 - o[l] / 2;
  let p;
  switch (a) {
    case "top":
      p = { x: c, y: r.y - o.height };
      break;
    case "bottom":
      p = { x: c, y: r.y + r.height };
      break;
    case "right":
      p = { x: r.x + r.width, y: d };
      break;
    case "left":
      p = { x: r.x - o.width, y: d };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (Co(t)) {
    case "start":
      p[s] -= m * (n && u ? -1 : 1);
      break;
    case "end":
      p[s] += m * (n && u ? -1 : 1);
      break;
  }
  return p;
}
const lS = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    l = i.filter(Boolean),
    a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: c, y: d } = Af(u, r, a),
    m = r,
    p = {},
    x = 0;
  for (let g = 0; g < l.length; g++) {
    const { name: w, fn: h } = l[g],
      {
        x: f,
        y: v,
        data: b,
        reset: C,
      } = await h({
        x: c,
        y: d,
        initialPlacement: r,
        placement: m,
        strategy: o,
        middlewareData: p,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    ((c = f ?? c),
      (d = v ?? d),
      (p = { ...p, [w]: { ...p[w], ...b } }),
      C &&
        x <= 50 &&
        (x++,
        typeof C == "object" &&
          (C.placement && (m = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : C.rects),
          ({ x: c, y: d } = Af(u, m, a))),
        (g = -1)));
  }
  return { x: c, y: d, placement: m, strategy: o, middlewareData: p };
};
async function vi(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: l, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: d = "floating",
      altBoundary: m = !1,
      padding: p = 0,
    } = wn(t, e),
    x = vg(p),
    w = l[m ? (d === "floating" ? "reference" : "floating") : d],
    h = Xs(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: a,
      }),
    ),
    f =
      d === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    v = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(l.floating)),
    b = (await (i.isElement == null ? void 0 : i.isElement(v)))
      ? (await (i.getScale == null ? void 0 : i.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = Xs(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: f,
            offsetParent: v,
            strategy: a,
          })
        : f,
    );
  return {
    top: (h.top - C.top + x.top) / b.y,
    bottom: (C.bottom - h.bottom + x.bottom) / b.y,
    left: (h.left - C.left + x.left) / b.x,
    right: (C.right - h.right + x.right) / b.x,
  };
}
const aS = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: l,
          middlewareData: a,
        } = t,
        { element: u, padding: c = 0 } = wn(e, t) || {};
      if (u == null) return {};
      const d = vg(c),
        m = { x: n, y: r },
        p = zc(o),
        x = Ic(p),
        g = await s.getDimensions(u),
        w = p === "y",
        h = w ? "top" : "left",
        f = w ? "bottom" : "right",
        v = w ? "clientHeight" : "clientWidth",
        b = i.reference[x] + i.reference[p] - m[p] - i.floating[x],
        C = m[p] - i.reference[p],
        E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let k = E ? E[v] : 0;
      (!k || !(await (s.isElement == null ? void 0 : s.isElement(E)))) &&
        (k = l.floating[v] || i.floating[x]);
      const P = b / 2 - C / 2,
        A = k / 2 - g[x] / 2 - 1,
        j = tr(d[h], A),
        I = tr(d[f], A),
        L = j,
        H = k - g[x] - I,
        M = k / 2 - g[x] / 2 + P,
        W = Cu(L, M, H),
        B =
          !a.arrow &&
          Co(o) != null &&
          M !== W &&
          i.reference[x] / 2 - (M < L ? j : I) - g[x] / 2 < 0,
        V = B ? (M < L ? M - L : M - H) : 0;
      return {
        [p]: m[p] + V,
        data: {
          [p]: W,
          centerOffset: M - W - V,
          ...(B && { alignmentOffset: V }),
        },
        reset: B,
      };
    },
  }),
  uS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: l,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: d = !0,
              fallbackPlacements: m,
              fallbackStrategy: p = "bestFit",
              fallbackAxisSideDirection: x = "none",
              flipAlignment: g = !0,
              ...w
            } = wn(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const h = Sn(o),
            f = Zt(l),
            v = Sn(l) === l,
            b = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            C = m || (v || !g ? [qs(l)] : tS(l)),
            E = x !== "none";
          !m && E && C.push(...iS(l, g, x, b));
          const k = [l, ...C],
            P = await vi(t, w),
            A = [];
          let j = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((c && A.push(P[h]), d)) {
            const M = eS(o, s, b);
            A.push(P[M[0]], P[M[1]]);
          }
          if (
            ((j = [...j, { placement: o, overflows: A }]),
            !A.every((M) => M <= 0))
          ) {
            var I, L;
            const M = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1,
              W = k[M];
            if (
              W &&
              (!(d === "alignment" ? f !== Zt(W) : !1) ||
                j.every((N) => N.overflows[0] > 0 && Zt(N.placement) === f))
            )
              return {
                data: { index: M, overflows: j },
                reset: { placement: W },
              };
            let B =
              (L = j
                .filter((V) => V.overflows[0] <= 0)
                .sort((V, N) => V.overflows[1] - N.overflows[1])[0]) == null
                ? void 0
                : L.placement;
            if (!B)
              switch (p) {
                case "bestFit": {
                  var H;
                  const V =
                    (H = j
                      .filter((N) => {
                        if (E) {
                          const R = Zt(N.placement);
                          return R === f || R === "y";
                        }
                        return !0;
                      })
                      .map((N) => [
                        N.placement,
                        N.overflows
                          .filter((R) => R > 0)
                          .reduce((R, D) => R + D, 0),
                      ])
                      .sort((N, R) => N[1] - R[1])[0]) == null
                      ? void 0
                      : H[0];
                  V && (B = V);
                  break;
                }
                case "initialPlacement":
                  B = l;
                  break;
              }
            if (o !== B) return { reset: { placement: B } };
          }
          return {};
        },
      }
    );
  };
function jf(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Of(e) {
  return qw.some((t) => e[t] >= 0);
}
const cS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...o } = wn(e, t);
          switch (r) {
            case "referenceHidden": {
              const i = await vi(t, { ...o, elementContext: "reference" }),
                s = jf(i, n.reference);
              return {
                data: { referenceHiddenOffsets: s, referenceHidden: Of(s) },
              };
            }
            case "escaped": {
              const i = await vi(t, { ...o, altBoundary: !0 }),
                s = jf(i, n.floating);
              return { data: { escapedOffsets: s, escaped: Of(s) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  yg = new Set(["left", "top"]);
async function dS(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = Sn(n),
    l = Co(n),
    a = Zt(n) === "y",
    u = yg.has(s) ? -1 : 1,
    c = i && a ? -1 : 1,
    d = wn(t, e);
  let {
    mainAxis: m,
    crossAxis: p,
    alignmentAxis: x,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    l && typeof x == "number" && (p = l === "end" ? x * -1 : x),
    a ? { x: p * c, y: m * u } : { x: m * u, y: p * c }
  );
}
const fS = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: l } = t,
            a = await dS(t, e);
          return s === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: i + a.y, data: { ...a, placement: s } };
        },
      }
    );
  },
  pS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: l = {
                fn: (w) => {
                  let { x: h, y: f } = w;
                  return { x: h, y: f };
                },
              },
              ...a
            } = wn(e, t),
            u = { x: n, y: r },
            c = await vi(t, a),
            d = Zt(Sn(o)),
            m = Dc(d);
          let p = u[m],
            x = u[d];
          if (i) {
            const w = m === "y" ? "top" : "left",
              h = m === "y" ? "bottom" : "right",
              f = p + c[w],
              v = p - c[h];
            p = Cu(f, p, v);
          }
          if (s) {
            const w = d === "y" ? "top" : "left",
              h = d === "y" ? "bottom" : "right",
              f = x + c[w],
              v = x - c[h];
            x = Cu(f, x, v);
          }
          const g = l.fn({ ...t, [m]: p, [d]: x });
          return {
            ...g,
            data: { x: g.x - n, y: g.y - r, enabled: { [m]: i, [d]: s } },
          };
        },
      }
    );
  },
  hS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = wn(e, t),
            c = { x: n, y: r },
            d = Zt(o),
            m = Dc(d);
          let p = c[m],
            x = c[d];
          const g = wn(l, t),
            w =
              typeof g == "number"
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g };
          if (a) {
            const v = m === "y" ? "height" : "width",
              b = i.reference[m] - i.floating[v] + w.mainAxis,
              C = i.reference[m] + i.reference[v] - w.mainAxis;
            p < b ? (p = b) : p > C && (p = C);
          }
          if (u) {
            var h, f;
            const v = m === "y" ? "width" : "height",
              b = yg.has(Sn(o)),
              C =
                i.reference[d] -
                i.floating[v] +
                ((b && ((h = s.offset) == null ? void 0 : h[d])) || 0) +
                (b ? 0 : w.crossAxis),
              E =
                i.reference[d] +
                i.reference[v] +
                (b ? 0 : ((f = s.offset) == null ? void 0 : f[d]) || 0) -
                (b ? w.crossAxis : 0);
            x < C ? (x = C) : x > E && (x = E);
          }
          return { [m]: p, [d]: x };
        },
      }
    );
  },
  mS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: l } = t,
            { apply: a = () => {}, ...u } = wn(e, t),
            c = await vi(t, u),
            d = Sn(o),
            m = Co(o),
            p = Zt(o) === "y",
            { width: x, height: g } = i.floating;
          let w, h;
          d === "top" || d === "bottom"
            ? ((w = d),
              (h =
                m ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((h = d), (w = m === "end" ? "top" : "bottom"));
          const f = g - c.top - c.bottom,
            v = x - c.left - c.right,
            b = tr(g - c[w], f),
            C = tr(x - c[h], v),
            E = !t.middlewareData.shift;
          let k = b,
            P = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (P = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (k = f),
            E && !m)
          ) {
            const j = at(c.left, 0),
              I = at(c.right, 0),
              L = at(c.top, 0),
              H = at(c.bottom, 0);
            p
              ? (P = x - 2 * (j !== 0 || I !== 0 ? j + I : at(c.left, c.right)))
              : (k =
                  g - 2 * (L !== 0 || H !== 0 ? L + H : at(c.top, c.bottom)));
          }
          await a({ ...t, availableWidth: P, availableHeight: k });
          const A = await s.getDimensions(l.floating);
          return x !== A.width || g !== A.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function El() {
  return typeof window < "u";
}
function Eo(e) {
  return xg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function dt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function sn(e) {
  var t;
  return (t = (xg(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function xg(e) {
  return El() ? e instanceof Node || e instanceof dt(e).Node : !1;
}
function Ut(e) {
  return El() ? e instanceof Element || e instanceof dt(e).Element : !1;
}
function rn(e) {
  return El() ? e instanceof HTMLElement || e instanceof dt(e).HTMLElement : !1;
}
function _f(e) {
  return !El() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof dt(e).ShadowRoot;
}
const gS = new Set(["inline", "contents"]);
function _i(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Vt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !gS.has(o);
}
const vS = new Set(["table", "td", "th"]);
function yS(e) {
  return vS.has(Eo(e));
}
const xS = [":popover-open", ":modal"];
function kl(e) {
  return xS.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const wS = ["transform", "translate", "scale", "rotate", "perspective"],
  SS = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  bS = ["paint", "layout", "strict", "content"];
function Fc(e) {
  const t = $c(),
    n = Ut(e) ? Vt(e) : e;
  return (
    wS.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    SS.some((r) => (n.willChange || "").includes(r)) ||
    bS.some((r) => (n.contain || "").includes(r))
  );
}
function CS(e) {
  let t = nr(e);
  for (; rn(t) && !go(t); ) {
    if (Fc(t)) return t;
    if (kl(t)) return null;
    t = nr(t);
  }
  return null;
}
function $c() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const ES = new Set(["html", "body", "#document"]);
function go(e) {
  return ES.has(Eo(e));
}
function Vt(e) {
  return dt(e).getComputedStyle(e);
}
function Pl(e) {
  return Ut(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function nr(e) {
  if (Eo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (_f(e) && e.host) || sn(e);
  return _f(t) ? t.host : t;
}
function wg(e) {
  const t = nr(e);
  return go(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : rn(t) && _i(t)
      ? t
      : wg(t);
}
function yi(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const o = wg(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = dt(o);
  if (i) {
    const l = ku(s);
    return t.concat(
      s,
      s.visualViewport || [],
      _i(o) ? o : [],
      l && n ? yi(l) : [],
    );
  }
  return t.concat(o, yi(o, [], n));
}
function ku(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Sg(e) {
  const t = Vt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = rn(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    l = Ys(n) !== i || Ys(r) !== s;
  return (l && ((n = i), (r = s)), { width: n, height: r, $: l });
}
function Bc(e) {
  return Ut(e) ? e : e.contextElement;
}
function Zr(e) {
  const t = Bc(e);
  if (!rn(t)) return tn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = Sg(t);
  let s = (i ? Ys(n.width) : n.width) / r,
    l = (i ? Ys(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: s, y: l }
  );
}
const kS = tn(0);
function bg(e) {
  const t = dt(e);
  return !$c() || !t.visualViewport
    ? kS
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function PS(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== dt(e)) ? !1 : t);
}
function kr(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const o = e.getBoundingClientRect(),
    i = Bc(e);
  let s = tn(1);
  t && (r ? Ut(r) && (s = Zr(r)) : (s = Zr(e)));
  const l = PS(i, n, r) ? bg(i) : tn(0);
  let a = (o.left + l.x) / s.x,
    u = (o.top + l.y) / s.y,
    c = o.width / s.x,
    d = o.height / s.y;
  if (i) {
    const m = dt(i),
      p = r && Ut(r) ? dt(r) : r;
    let x = m,
      g = ku(x);
    for (; g && r && p !== x; ) {
      const w = Zr(g),
        h = g.getBoundingClientRect(),
        f = Vt(g),
        v = h.left + (g.clientLeft + parseFloat(f.paddingLeft)) * w.x,
        b = h.top + (g.clientTop + parseFloat(f.paddingTop)) * w.y;
      ((a *= w.x),
        (u *= w.y),
        (c *= w.x),
        (d *= w.y),
        (a += v),
        (u += b),
        (x = dt(g)),
        (g = ku(x)));
    }
  }
  return Xs({ width: c, height: d, x: a, y: u });
}
function Uc(e, t) {
  const n = Pl(e).scrollLeft;
  return t ? t.left + n : kr(sn(e)).left + n;
}
function Cg(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : Uc(e, r)),
    i = r.top + t.scrollTop;
  return { x: o, y: i };
}
function NS(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = sn(r),
    l = t ? kl(t.floating) : !1;
  if (r === s || (l && i)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = tn(1);
  const c = tn(0),
    d = rn(r);
  if (
    (d || (!d && !i)) &&
    ((Eo(r) !== "body" || _i(s)) && (a = Pl(r)), rn(r))
  ) {
    const p = kr(r);
    ((u = Zr(r)), (c.x = p.x + r.clientLeft), (c.y = p.y + r.clientTop));
  }
  const m = s && !d && !i ? Cg(s, a, !0) : tn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + c.x + m.x,
    y: n.y * u.y - a.scrollTop * u.y + c.y + m.y,
  };
}
function TS(e) {
  return Array.from(e.getClientRects());
}
function RS(e) {
  const t = sn(e),
    n = Pl(e),
    r = e.ownerDocument.body,
    o = at(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = at(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Uc(e);
  const l = -n.scrollTop;
  return (
    Vt(r).direction === "rtl" && (s += at(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: l }
  );
}
function AS(e, t) {
  const n = dt(e),
    r = sn(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    ((i = o.width), (s = o.height));
    const u = $c();
    (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: i, height: s, x: l, y: a };
}
const jS = new Set(["absolute", "fixed"]);
function OS(e, t) {
  const n = kr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = rn(e) ? Zr(e) : tn(1),
    s = e.clientWidth * i.x,
    l = e.clientHeight * i.y,
    a = o * i.x,
    u = r * i.y;
  return { width: s, height: l, x: a, y: u };
}
function Mf(e, t, n) {
  let r;
  if (t === "viewport") r = AS(e, n);
  else if (t === "document") r = RS(sn(e));
  else if (Ut(t)) r = OS(t, n);
  else {
    const o = bg(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Xs(r);
}
function Eg(e, t) {
  const n = nr(e);
  return n === t || !Ut(n) || go(n)
    ? !1
    : Vt(n).position === "fixed" || Eg(n, t);
}
function _S(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = yi(e, [], !1).filter((l) => Ut(l) && Eo(l) !== "body"),
    o = null;
  const i = Vt(e).position === "fixed";
  let s = i ? nr(e) : e;
  for (; Ut(s) && !go(s); ) {
    const l = Vt(s),
      a = Fc(s);
    (!a && l.position === "fixed" && (o = null),
      (
        i
          ? !a && !o
          : (!a && l.position === "static" && !!o && jS.has(o.position)) ||
            (_i(s) && !a && Eg(e, s))
      )
        ? (r = r.filter((c) => c !== s))
        : (o = l),
      (s = nr(s)));
  }
  return (t.set(e, r), r);
}
function MS(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? kl(t)
          ? []
          : _S(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = s[0],
    a = s.reduce(
      (u, c) => {
        const d = Mf(t, c, o);
        return (
          (u.top = at(d.top, u.top)),
          (u.right = tr(d.right, u.right)),
          (u.bottom = tr(d.bottom, u.bottom)),
          (u.left = at(d.left, u.left)),
          u
        );
      },
      Mf(t, l, o),
    );
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function LS(e) {
  const { width: t, height: n } = Sg(e);
  return { width: t, height: n };
}
function DS(e, t, n) {
  const r = rn(t),
    o = sn(t),
    i = n === "fixed",
    s = kr(e, !0, i, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = tn(0);
  function u() {
    a.x = Uc(o);
  }
  if (r || (!r && !i))
    if (((Eo(t) !== "body" || _i(o)) && (l = Pl(t)), r)) {
      const p = kr(t, !0, i, t);
      ((a.x = p.x + t.clientLeft), (a.y = p.y + t.clientTop));
    } else o && u();
  i && !r && o && u();
  const c = o && !r && !i ? Cg(o, l) : tn(0),
    d = s.left + l.scrollLeft - a.x - c.x,
    m = s.top + l.scrollTop - a.y - c.y;
  return { x: d, y: m, width: s.width, height: s.height };
}
function ba(e) {
  return Vt(e).position === "static";
}
function Lf(e, t) {
  if (!rn(e) || Vt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (sn(e) === n && (n = n.ownerDocument.body), n);
}
function kg(e, t) {
  const n = dt(e);
  if (kl(e)) return n;
  if (!rn(e)) {
    let o = nr(e);
    for (; o && !go(o); ) {
      if (Ut(o) && !ba(o)) return o;
      o = nr(o);
    }
    return n;
  }
  let r = Lf(e, t);
  for (; r && yS(r) && ba(r); ) r = Lf(r, t);
  return r && go(r) && ba(r) && !Fc(r) ? n : r || CS(e) || n;
}
const IS = async function (e) {
  const t = this.getOffsetParent || kg,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: DS(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function zS(e) {
  return Vt(e).direction === "rtl";
}
const FS = {
  convertOffsetParentRelativeRectToViewportRelativeRect: NS,
  getDocumentElement: sn,
  getClippingRect: MS,
  getOffsetParent: kg,
  getElementRects: IS,
  getClientRects: TS,
  getDimensions: LS,
  getScale: Zr,
  isElement: Ut,
  isRTL: zS,
};
function Pg(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function $S(e, t) {
  let n = null,
    r;
  const o = sn(e);
  function i() {
    var l;
    (clearTimeout(r), (l = n) == null || l.disconnect(), (n = null));
  }
  function s(l, a) {
    (l === void 0 && (l = !1), a === void 0 && (a = 1), i());
    const u = e.getBoundingClientRect(),
      { left: c, top: d, width: m, height: p } = u;
    if ((l || t(), !m || !p)) return;
    const x = ls(d),
      g = ls(o.clientWidth - (c + m)),
      w = ls(o.clientHeight - (d + p)),
      h = ls(c),
      v = {
        rootMargin: -x + "px " + -g + "px " + -w + "px " + -h + "px",
        threshold: at(0, tr(1, a)) || 1,
      };
    let b = !0;
    function C(E) {
      const k = E[0].intersectionRatio;
      if (k !== a) {
        if (!b) return s();
        k
          ? s(!1, k)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      (k === 1 && !Pg(u, e.getBoundingClientRect()) && s(), (b = !1));
    }
    try {
      n = new IntersectionObserver(C, { ...v, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, v);
    }
    n.observe(e);
  }
  return (s(!0), i);
}
function BS(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = Bc(e),
    c = o || i ? [...(u ? yi(u) : []), ...yi(t)] : [];
  c.forEach((h) => {
    (o && h.addEventListener("scroll", n, { passive: !0 }),
      i && h.addEventListener("resize", n));
  });
  const d = u && l ? $S(u, n) : null;
  let m = -1,
    p = null;
  s &&
    ((p = new ResizeObserver((h) => {
      let [f] = h;
      (f &&
        f.target === u &&
        p &&
        (p.unobserve(t),
        cancelAnimationFrame(m),
        (m = requestAnimationFrame(() => {
          var v;
          (v = p) == null || v.observe(t);
        }))),
        n());
    })),
    u && !a && p.observe(u),
    p.observe(t));
  let x,
    g = a ? kr(e) : null;
  a && w();
  function w() {
    const h = kr(e);
    (g && !Pg(g, h) && n(), (g = h), (x = requestAnimationFrame(w)));
  }
  return (
    n(),
    () => {
      var h;
      (c.forEach((f) => {
        (o && f.removeEventListener("scroll", n),
          i && f.removeEventListener("resize", n));
      }),
        d == null || d(),
        (h = p) == null || h.disconnect(),
        (p = null),
        a && cancelAnimationFrame(x));
    }
  );
}
const US = fS,
  VS = pS,
  HS = uS,
  WS = mS,
  QS = cS,
  Df = aS,
  KS = hS,
  GS = (e, t, n) => {
    const r = new Map(),
      o = { platform: FS, ...n },
      i = { ...o.platform, _c: r };
    return lS(e, t, { ...o, platform: i });
  };
var YS = typeof document < "u",
  qS = function () {},
  Cs = YS ? S.useLayoutEffect : qS;
function Zs(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Zs(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Zs(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ng(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function If(e, t) {
  const n = Ng(e);
  return Math.round(t * n) / n;
}
function Ca(e) {
  const t = S.useRef(e);
  return (
    Cs(() => {
      t.current = e;
    }),
    t
  );
}
function XS(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: l = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [c, d] = S.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [m, p] = S.useState(r);
  Zs(m, r) || p(r);
  const [x, g] = S.useState(null),
    [w, h] = S.useState(null),
    f = S.useCallback((N) => {
      N !== E.current && ((E.current = N), g(N));
    }, []),
    v = S.useCallback((N) => {
      N !== k.current && ((k.current = N), h(N));
    }, []),
    b = i || x,
    C = s || w,
    E = S.useRef(null),
    k = S.useRef(null),
    P = S.useRef(c),
    A = a != null,
    j = Ca(a),
    I = Ca(o),
    L = Ca(u),
    H = S.useCallback(() => {
      if (!E.current || !k.current) return;
      const N = { placement: t, strategy: n, middleware: m };
      (I.current && (N.platform = I.current),
        GS(E.current, k.current, N).then((R) => {
          const D = { ...R, isPositioned: L.current !== !1 };
          M.current &&
            !Zs(P.current, D) &&
            ((P.current = D),
            ji.flushSync(() => {
              d(D);
            }));
        }));
    }, [m, t, n, I, L]);
  Cs(() => {
    u === !1 &&
      P.current.isPositioned &&
      ((P.current.isPositioned = !1), d((N) => ({ ...N, isPositioned: !1 })));
  }, [u]);
  const M = S.useRef(!1);
  (Cs(
    () => (
      (M.current = !0),
      () => {
        M.current = !1;
      }
    ),
    [],
  ),
    Cs(() => {
      if ((b && (E.current = b), C && (k.current = C), b && C)) {
        if (j.current) return j.current(b, C, H);
        H();
      }
    }, [b, C, H, j, A]));
  const W = S.useMemo(
      () => ({ reference: E, floating: k, setReference: f, setFloating: v }),
      [f, v],
    ),
    B = S.useMemo(() => ({ reference: b, floating: C }), [b, C]),
    V = S.useMemo(() => {
      const N = { position: n, left: 0, top: 0 };
      if (!B.floating) return N;
      const R = If(B.floating, c.x),
        D = If(B.floating, c.y);
      return l
        ? {
            ...N,
            transform: "translate(" + R + "px, " + D + "px)",
            ...(Ng(B.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: R, top: D };
    }, [n, l, B.floating, c.x, c.y]);
  return S.useMemo(
    () => ({ ...c, update: H, refs: W, elements: B, floatingStyles: V }),
    [c, H, W, B, V],
  );
}
const ZS = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Df({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? Df({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  },
  JS = (e, t) => ({ ...US(e), options: [e, t] }),
  eb = (e, t) => ({ ...VS(e), options: [e, t] }),
  tb = (e, t) => ({ ...KS(e), options: [e, t] }),
  nb = (e, t) => ({ ...HS(e), options: [e, t] }),
  rb = (e, t) => ({ ...WS(e), options: [e, t] }),
  ob = (e, t) => ({ ...QS(e), options: [e, t] }),
  ib = (e, t) => ({ ...ZS(e), options: [e, t] });
var sb = "Arrow",
  Tg = S.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return y.jsx(Ae.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : y.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Tg.displayName = sb;
var lb = Tg;
function ab(e) {
  const [t, n] = S.useState(void 0);
  return (
    nn(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, l;
          if ("borderBoxSize" in i) {
            const a = i.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            ((s = u.inlineSize), (l = u.blockSize));
          } else ((s = e.offsetWidth), (l = e.offsetHeight));
          n({ width: s, height: l });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var Rg = "Popper",
  [Ag, jg] = So(Rg),
  [E2, Og] = Ag(Rg),
  _g = "PopperAnchor",
  Mg = S.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = Og(_g, n),
      s = S.useRef(null),
      l = pt(t, s);
    return (
      S.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : y.jsx(Ae.div, { ...o, ref: l })
    );
  });
Mg.displayName = _g;
var Vc = "PopperContent",
  [ub, cb] = Ag(Vc),
  Lg = S.forwardRef((e, t) => {
    var Y, ye, je, ke, te, F;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: l = 0,
        avoidCollisions: a = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: d = "partial",
        hideWhenDetached: m = !1,
        updatePositionStrategy: p = "optimized",
        onPlaced: x,
        ...g
      } = e,
      w = Og(Vc, n),
      [h, f] = S.useState(null),
      v = pt(t, (J) => f(J)),
      [b, C] = S.useState(null),
      E = ab(b),
      k = (E == null ? void 0 : E.width) ?? 0,
      P = (E == null ? void 0 : E.height) ?? 0,
      A = r + (i !== "center" ? "-" + i : ""),
      j =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      I = Array.isArray(u) ? u : [u],
      L = I.length > 0,
      H = { padding: j, boundary: I.filter(fb), altBoundary: L },
      {
        refs: M,
        floatingStyles: W,
        placement: B,
        isPositioned: V,
        middlewareData: N,
      } = XS({
        strategy: "fixed",
        placement: A,
        whileElementsMounted: (...J) =>
          BS(...J, { animationFrame: p === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          JS({ mainAxis: o + P, alignmentAxis: s }),
          a &&
            eb({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === "partial" ? tb() : void 0,
              ...H,
            }),
          a && nb({ ...H }),
          rb({
            ...H,
            apply: ({
              elements: J,
              rects: ae,
              availableWidth: Ne,
              availableHeight: Ve,
            }) => {
              const { width: it, height: st } = ae.reference,
                He = J.floating.style;
              (He.setProperty("--radix-popper-available-width", `${Ne}px`),
                He.setProperty("--radix-popper-available-height", `${Ve}px`),
                He.setProperty("--radix-popper-anchor-width", `${it}px`),
                He.setProperty("--radix-popper-anchor-height", `${st}px`));
            },
          }),
          b && ib({ element: b, padding: l }),
          pb({ arrowWidth: k, arrowHeight: P }),
          m && ob({ strategy: "referenceHidden", ...H }),
        ],
      }),
      [R, D] = zg(B),
      U = er(x);
    nn(() => {
      V && (U == null || U());
    }, [V, U]);
    const $ = (Y = N.arrow) == null ? void 0 : Y.x,
      G = (ye = N.arrow) == null ? void 0 : ye.y,
      Q = ((je = N.arrow) == null ? void 0 : je.centerOffset) !== 0,
      [ie, ve] = S.useState();
    return (
      nn(() => {
        h && ve(window.getComputedStyle(h).zIndex);
      }, [h]),
      y.jsx("div", {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...W,
          transform: V ? W.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ie,
          "--radix-popper-transform-origin": [
            (ke = N.transformOrigin) == null ? void 0 : ke.x,
            (te = N.transformOrigin) == null ? void 0 : te.y,
          ].join(" "),
          ...(((F = N.hide) == null ? void 0 : F.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: y.jsx(ub, {
          scope: n,
          placedSide: R,
          onArrowChange: C,
          arrowX: $,
          arrowY: G,
          shouldHideArrow: Q,
          children: y.jsx(Ae.div, {
            "data-side": R,
            "data-align": D,
            ...g,
            ref: v,
            style: { ...g.style, animation: V ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Lg.displayName = Vc;
var Dg = "PopperArrow",
  db = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Ig = S.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = cb(Dg, r),
      s = db[i.placedSide];
    return y.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: y.jsx(lb, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
Ig.displayName = Dg;
function fb(e) {
  return e !== null;
}
var pb = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, h, f;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
      l = s ? 0 : e.arrowWidth,
      a = s ? 0 : e.arrowHeight,
      [u, c] = zg(n),
      d = { start: "0%", center: "50%", end: "100%" }[c],
      m = (((h = o.arrow) == null ? void 0 : h.x) ?? 0) + l / 2,
      p = (((f = o.arrow) == null ? void 0 : f.y) ?? 0) + a / 2;
    let x = "",
      g = "";
    return (
      u === "bottom"
        ? ((x = s ? d : `${m}px`), (g = `${-a}px`))
        : u === "top"
          ? ((x = s ? d : `${m}px`), (g = `${r.floating.height + a}px`))
          : u === "right"
            ? ((x = `${-a}px`), (g = s ? d : `${p}px`))
            : u === "left" &&
              ((x = `${r.floating.width + a}px`), (g = s ? d : `${p}px`)),
      { data: { x, y: g } }
    );
  },
});
function zg(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var hb = Mg,
  mb = Lg,
  gb = Ig,
  [Nl, k2] = So("Tooltip", [jg]),
  Hc = jg(),
  Fg = "TooltipProvider",
  vb = 700,
  zf = "tooltip.open",
  [yb, $g] = Nl(Fg),
  Bg = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = vb,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      s = S.useRef(!0),
      l = S.useRef(!1),
      a = S.useRef(0);
    return (
      S.useEffect(() => {
        const u = a.current;
        return () => window.clearTimeout(u);
      }, []),
      y.jsx(yb, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: S.useCallback(() => {
          (window.clearTimeout(a.current), (s.current = !1));
        }, []),
        onClose: S.useCallback(() => {
          (window.clearTimeout(a.current),
            (a.current = window.setTimeout(() => (s.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: S.useCallback((u) => {
          l.current = u;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
Bg.displayName = Fg;
var Ug = "Tooltip",
  [P2, Tl] = Nl(Ug),
  Pu = "TooltipTrigger",
  xb = S.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Tl(Pu, n),
      i = $g(Pu, n),
      s = Hc(n),
      l = S.useRef(null),
      a = pt(t, l, o.onTriggerChange),
      u = S.useRef(!1),
      c = S.useRef(!1),
      d = S.useCallback(() => (u.current = !1), []);
    return (
      S.useEffect(
        () => () => document.removeEventListener("pointerup", d),
        [d],
      ),
      y.jsx(hb, {
        asChild: !0,
        ...s,
        children: y.jsx(Ae.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: a,
          onPointerMove: Ce(e.onPointerMove, (m) => {
            m.pointerType !== "touch" &&
              !c.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: Ce(e.onPointerLeave, () => {
            (o.onTriggerLeave(), (c.current = !1));
          }),
          onPointerDown: Ce(e.onPointerDown, () => {
            (o.open && o.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", d, { once: !0 }));
          }),
          onFocus: Ce(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: Ce(e.onBlur, o.onClose),
          onClick: Ce(e.onClick, o.onClose),
        }),
      })
    );
  });
xb.displayName = Pu;
var wb = "TooltipPortal",
  [N2, Sb] = Nl(wb, { forceMount: void 0 }),
  vo = "TooltipContent",
  Vg = S.forwardRef((e, t) => {
    const n = Sb(vo, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
      s = Tl(vo, e.__scopeTooltip);
    return y.jsx(wl, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? y.jsx(Hg, { side: o, ...i, ref: t })
        : y.jsx(bb, { side: o, ...i, ref: t }),
    });
  }),
  bb = S.forwardRef((e, t) => {
    const n = Tl(vo, e.__scopeTooltip),
      r = $g(vo, e.__scopeTooltip),
      o = S.useRef(null),
      i = pt(t, o),
      [s, l] = S.useState(null),
      { trigger: a, onClose: u } = n,
      c = o.current,
      { onPointerInTransitChange: d } = r,
      m = S.useCallback(() => {
        (l(null), d(!1));
      }, [d]),
      p = S.useCallback(
        (x, g) => {
          const w = x.currentTarget,
            h = { x: x.clientX, y: x.clientY },
            f = Nb(h, w.getBoundingClientRect()),
            v = Tb(h, f),
            b = Rb(g.getBoundingClientRect()),
            C = jb([...v, ...b]);
          (l(C), d(!0));
        },
        [d],
      );
    return (
      S.useEffect(() => () => m(), [m]),
      S.useEffect(() => {
        if (a && c) {
          const x = (w) => p(w, c),
            g = (w) => p(w, a);
          return (
            a.addEventListener("pointerleave", x),
            c.addEventListener("pointerleave", g),
            () => {
              (a.removeEventListener("pointerleave", x),
                c.removeEventListener("pointerleave", g));
            }
          );
        }
      }, [a, c, p, m]),
      S.useEffect(() => {
        if (s) {
          const x = (g) => {
            const w = g.target,
              h = { x: g.clientX, y: g.clientY },
              f =
                (a == null ? void 0 : a.contains(w)) ||
                (c == null ? void 0 : c.contains(w)),
              v = !Ab(h, s);
            f ? m() : v && (m(), u());
          };
          return (
            document.addEventListener("pointermove", x),
            () => document.removeEventListener("pointermove", x)
          );
        }
      }, [a, c, s, u, m]),
      y.jsx(Hg, { ...e, ref: i })
    );
  }),
  [Cb, Eb] = Nl(Ug, { isInside: !1 }),
  kb = E1("TooltipContent"),
  Hg = S.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        ...l
      } = e,
      a = Tl(vo, n),
      u = Hc(n),
      { onClose: c } = a;
    return (
      S.useEffect(
        () => (
          document.addEventListener(zf, c),
          () => document.removeEventListener(zf, c)
        ),
        [c],
      ),
      S.useEffect(() => {
        if (a.trigger) {
          const d = (m) => {
            const p = m.target;
            p != null && p.contains(a.trigger) && c();
          };
          return (
            window.addEventListener("scroll", d, { capture: !0 }),
            () => window.removeEventListener("scroll", d, { capture: !0 })
          );
        }
      }, [a.trigger, c]),
      y.jsx(Ac, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: c,
        children: y.jsxs(mb, {
          "data-state": a.stateAttribute,
          ...u,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            y.jsx(kb, { children: r }),
            y.jsx(Cb, {
              scope: n,
              isInside: !0,
              children: y.jsx(K1, {
                id: a.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
Vg.displayName = vo;
var Wg = "TooltipArrow",
  Pb = S.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Hc(n);
    return Eb(Wg, n).isInside ? null : y.jsx(gb, { ...o, ...r, ref: t });
  });
Pb.displayName = Wg;
function Nb(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Tb(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function Rb(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function Ab(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i],
      a = t[s],
      u = l.x,
      c = l.y,
      d = a.x,
      m = a.y;
    c > r != m > r && n < ((d - u) * (r - c)) / (m - c) + u && (o = !o);
  }
  return o;
}
function jb(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    Ob(t)
  );
}
function Ob(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var _b = Bg,
  Qg = Vg;
const Mb = _b,
  Lb = S.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    y.jsx(Qg, {
      ref: r,
      sideOffset: t,
      className: Se(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...n,
    }),
  );
Lb.displayName = Qg.displayName;
var Rl = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Al = typeof window > "u" || "Deno" in globalThis;
function _t() {}
function Db(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ib(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function zb(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Nu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Fb(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ff(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: l,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== Wc(s, t.options)) return !1;
    } else if (!wi(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const a = t.isActive();
    if ((n === "active" && !a) || (n === "inactive" && a)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function $f(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (xi(t.options.mutationKey) !== xi(i)) return !1;
    } else if (!wi(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function Wc(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || xi)(e);
}
function xi(e) {
  return JSON.stringify(e, (t, n) =>
    Tu(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n,
  );
}
function wi(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? Object.keys(t).every((n) => wi(e[n], t[n]))
        : !1;
}
function Kg(e, t) {
  if (e === t) return e;
  const n = Bf(e) && Bf(t);
  if (n || (Tu(e) && Tu(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      i = n ? t : Object.keys(t),
      s = i.length,
      l = n ? [] : {},
      a = new Set(r);
    let u = 0;
    for (let c = 0; c < s; c++) {
      const d = n ? c : i[c];
      ((!n && a.has(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((l[d] = void 0), u++)
        : ((l[d] = Kg(e[d], t[d])), l[d] === e[d] && e[d] !== void 0 && u++);
    }
    return o === s && u === o ? e : l;
  }
  return t;
}
function Bf(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Tu(e) {
  if (!Uf(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !Uf(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Uf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function $b(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Bb(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? Kg(e, t)
      : t;
}
function Ub(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Vb(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Qc = Symbol();
function Gg(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Qc
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var fr,
  Dn,
  eo,
  ip,
  Hb =
    ((ip = class extends Rl {
      constructor() {
        super();
        ne(this, fr);
        ne(this, Dn);
        ne(this, eo);
        q(this, eo, (t) => {
          if (!Al && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        T(this, Dn) || this.setEventListener(T(this, eo));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = T(this, Dn)) == null || t.call(this), q(this, Dn, void 0));
      }
      setEventListener(t) {
        var n;
        (q(this, eo, t),
          (n = T(this, Dn)) == null || n.call(this),
          q(
            this,
            Dn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          ));
      }
      setFocused(t) {
        T(this, fr) !== t && (q(this, fr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof T(this, fr) == "boolean"
          ? T(this, fr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (fr = new WeakMap()),
    (Dn = new WeakMap()),
    (eo = new WeakMap()),
    ip),
  Yg = new Hb(),
  to,
  In,
  no,
  sp,
  Wb =
    ((sp = class extends Rl {
      constructor() {
        super();
        ne(this, to, !0);
        ne(this, In);
        ne(this, no);
        q(this, no, (t) => {
          if (!Al && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", n),
                  window.removeEventListener("offline", r));
              }
            );
          }
        });
      }
      onSubscribe() {
        T(this, In) || this.setEventListener(T(this, no));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = T(this, In)) == null || t.call(this), q(this, In, void 0));
      }
      setEventListener(t) {
        var n;
        (q(this, no, t),
          (n = T(this, In)) == null || n.call(this),
          q(this, In, t(this.setOnline.bind(this))));
      }
      setOnline(t) {
        T(this, to) !== t &&
          (q(this, to, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return T(this, to);
      }
    }),
    (to = new WeakMap()),
    (In = new WeakMap()),
    (no = new WeakMap()),
    sp),
  Js = new Wb();
function Qb() {
  let e, t;
  const n = new Promise((o, i) => {
    ((e = o), (t = i));
  });
  ((n.status = "pending"), n.catch(() => {}));
  function r(o) {
    (Object.assign(n, o), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (o) => {
      (r({ status: "fulfilled", value: o }), e(o));
    }),
    (n.reject = (o) => {
      (r({ status: "rejected", reason: o }), t(o));
    }),
    n
  );
}
function Kb(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function qg(e) {
  return (e ?? "online") === "online" ? Js.isOnline() : !0;
}
var Xg = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent));
  }
};
function Ea(e) {
  return e instanceof Xg;
}
function Zg(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const i = Qb(),
    s = (g) => {
      var w;
      r || (m(new Xg(g)), (w = e.abort) == null || w.call(e));
    },
    l = () => {
      t = !0;
    },
    a = () => {
      t = !1;
    },
    u = () =>
      Yg.isFocused() &&
      (e.networkMode === "always" || Js.isOnline()) &&
      e.canRun(),
    c = () => qg(e.networkMode) && e.canRun(),
    d = (g) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onSuccess) == null || w.call(e, g),
        o == null || o(),
        i.resolve(g));
    },
    m = (g) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onError) == null || w.call(e, g),
        o == null || o(),
        i.reject(g));
    },
    p = () =>
      new Promise((g) => {
        var w;
        ((o = (h) => {
          (r || u()) && g(h);
        }),
          (w = e.onPause) == null || w.call(e));
      }).then(() => {
        var g;
        ((o = void 0), r || (g = e.onContinue) == null || g.call(e));
      }),
    x = () => {
      if (r) return;
      let g;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        g = w ?? e.fn();
      } catch (h) {
        g = Promise.reject(h);
      }
      Promise.resolve(g)
        .then(d)
        .catch((h) => {
          var E;
          if (r) return;
          const f = e.retry ?? (Al ? 0 : 3),
            v = e.retryDelay ?? Kb,
            b = typeof v == "function" ? v(n, h) : v,
            C =
              f === !0 ||
              (typeof f == "number" && n < f) ||
              (typeof f == "function" && f(n, h));
          if (t || !C) {
            m(h);
            return;
          }
          (n++,
            (E = e.onFail) == null || E.call(e, n, h),
            $b(b)
              .then(() => (u() ? void 0 : p()))
              .then(() => {
                t ? m(h) : x();
              }));
        });
    };
  return {
    promise: i,
    cancel: s,
    continue: () => (o == null || o(), i),
    cancelRetry: l,
    continueRetry: a,
    canStart: c,
    start: () => (c() ? x() : p().then(x), i),
  };
}
var Gb = (e) => setTimeout(e, 0);
function Yb() {
  let e = [],
    t = 0,
    n = (l) => {
      l();
    },
    r = (l) => {
      l();
    },
    o = Gb;
  const i = (l) => {
      t
        ? e.push(l)
        : o(() => {
            n(l);
          });
    },
    s = () => {
      const l = e;
      ((e = []),
        l.length &&
          o(() => {
            r(() => {
              l.forEach((a) => {
                n(a);
              });
            });
          }));
    };
  return {
    batch: (l) => {
      let a;
      t++;
      try {
        a = l();
      } finally {
        (t--, t || s());
      }
      return a;
    },
    batchCalls:
      (l) =>
      (...a) => {
        i(() => {
          l(...a);
        });
      },
    schedule: i,
    setNotifyFunction: (l) => {
      n = l;
    },
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      o = l;
    },
  };
}
var Ke = Yb(),
  pr,
  lp,
  Jg =
    ((lp = class {
      constructor() {
        ne(this, pr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          Ib(this.gcTime) &&
            q(
              this,
              pr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Al ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        T(this, pr) && (clearTimeout(T(this, pr)), q(this, pr, void 0));
      }
    }),
    (pr = new WeakMap()),
    lp),
  ro,
  hr,
  gt,
  mr,
  $e,
  Ei,
  gr,
  Mt,
  un,
  ap,
  qb =
    ((ap = class extends Jg {
      constructor(t) {
        super();
        ne(this, Mt);
        ne(this, ro);
        ne(this, hr);
        ne(this, gt);
        ne(this, mr);
        ne(this, $e);
        ne(this, Ei);
        ne(this, gr);
        (q(this, gr, !1),
          q(this, Ei, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          q(this, mr, t.client),
          q(this, gt, T(this, mr).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          q(this, ro, Zb(this.options)),
          (this.state = t.state ?? T(this, ro)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = T(this, $e)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        ((this.options = { ...T(this, Ei), ...t }),
          this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          T(this, gt).remove(this);
      }
      setData(t, n) {
        const r = Bb(this.state.data, t, this.options);
        return (
          Ie(this, Mt, un).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        Ie(this, Mt, un).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = T(this, $e)) == null ? void 0 : r.promise;
        return (
          (o = T(this, $e)) == null || o.cancel(t),
          n ? n.then(_t).catch(_t) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(T(this, ro)));
      }
      isActive() {
        return this.observers.some((t) => Fb(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Qc ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Nu(t.options.staleTime, this) === "static",
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
            ? !1
            : this.state.isInvalidated
              ? !0
              : !zb(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = T(this, $e)) == null || n.continue());
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = T(this, $e)) == null || n.continue());
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          T(this, gt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (T(this, $e) &&
              (T(this, gr)
                ? T(this, $e).cancel({ revert: !0 })
                : T(this, $e).cancelRetry()),
            this.scheduleGc()),
          T(this, gt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Ie(this, Mt, un).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (T(this, $e))
            return (T(this, $e).continueRetry(), T(this, $e).promise);
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const m = this.observers.find((p) => p.options.queryFn);
          m && this.setOptions(m.options);
        }
        const r = new AbortController(),
          o = (m) => {
            Object.defineProperty(m, "signal", {
              enumerable: !0,
              get: () => (q(this, gr, !0), r.signal),
            });
          },
          i = () => {
            const m = Gg(this.options, n),
              x = (() => {
                const g = {
                  client: T(this, mr),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (o(g), g);
              })();
            return (
              q(this, gr, !1),
              this.options.persister ? this.options.persister(m, x, this) : m(x)
            );
          },
          l = (() => {
            const m = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: T(this, mr),
              state: this.state,
              fetchFn: i,
            };
            return (o(m), m);
          })();
        ((u = this.options.behavior) == null || u.onFetch(l, this),
          q(this, hr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = l.fetchOptions) == null ? void 0 : c.meta)) &&
            Ie(this, Mt, un).call(this, {
              type: "fetch",
              meta: (d = l.fetchOptions) == null ? void 0 : d.meta,
            }));
        const a = (m) => {
          var p, x, g, w;
          ((Ea(m) && m.silent) ||
            Ie(this, Mt, un).call(this, { type: "error", error: m }),
            Ea(m) ||
              ((x = (p = T(this, gt).config).onError) == null ||
                x.call(p, m, this),
              (w = (g = T(this, gt).config).onSettled) == null ||
                w.call(g, this.state.data, m, this)),
            this.scheduleGc());
        };
        return (
          q(
            this,
            $e,
            Zg({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: l.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (m) => {
                var p, x, g, w;
                if (m === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(m);
                } catch (h) {
                  a(h);
                  return;
                }
                ((x = (p = T(this, gt).config).onSuccess) == null ||
                  x.call(p, m, this),
                  (w = (g = T(this, gt).config).onSettled) == null ||
                    w.call(g, m, this.state.error, this),
                  this.scheduleGc());
              },
              onError: a,
              onFail: (m, p) => {
                Ie(this, Mt, un).call(this, {
                  type: "failed",
                  failureCount: m,
                  error: p,
                });
              },
              onPause: () => {
                Ie(this, Mt, un).call(this, { type: "pause" });
              },
              onContinue: () => {
                Ie(this, Mt, un).call(this, { type: "continue" });
              },
              retry: l.options.retry,
              retryDelay: l.options.retryDelay,
              networkMode: l.options.networkMode,
              canRun: () => !0,
            }),
          ),
          T(this, $e).start()
        );
      }
    }),
    (ro = new WeakMap()),
    (hr = new WeakMap()),
    (gt = new WeakMap()),
    (mr = new WeakMap()),
    ($e = new WeakMap()),
    (Ei = new WeakMap()),
    (gr = new WeakMap()),
    (Mt = new WeakSet()),
    (un = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...Xb(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              q(this, hr, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const o = t.error;
            return Ea(o) && o.revert && T(this, hr)
              ? { ...T(this, hr), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      ((this.state = n(this.state)),
        Ke.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            T(this, gt).notify({ query: this, type: "updated", action: t }));
        }));
    }),
    ap);
function Xb(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: qg(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function Zb(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Gt,
  up,
  Jb =
    ((up = class extends Rl {
      constructor(t = {}) {
        super();
        ne(this, Gt);
        ((this.config = t), q(this, Gt, new Map()));
      }
      build(t, n, r) {
        const o = n.queryKey,
          i = n.queryHash ?? Wc(o, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new qb({
              client: t,
              queryKey: o,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        T(this, Gt).has(t.queryHash) ||
          (T(this, Gt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = T(this, Gt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && T(this, Gt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Ke.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return T(this, Gt).get(t);
      }
      getAll() {
        return [...T(this, Gt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Ff(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Ff(t, r)) : n;
      }
      notify(t) {
        Ke.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Ke.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Ke.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Gt = new WeakMap()),
    up),
  Yt,
  We,
  vr,
  qt,
  jn,
  cp,
  eC =
    ((cp = class extends Jg {
      constructor(t) {
        super();
        ne(this, qt);
        ne(this, Yt);
        ne(this, We);
        ne(this, vr);
        ((this.mutationId = t.mutationId),
          q(this, We, t.mutationCache),
          q(this, Yt, []),
          (this.state = t.state || tC()),
          this.setOptions(t.options),
          this.scheduleGc());
      }
      setOptions(t) {
        ((this.options = t), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        T(this, Yt).includes(t) ||
          (T(this, Yt).push(t),
          this.clearGcTimeout(),
          T(this, We).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        (q(
          this,
          Yt,
          T(this, Yt).filter((n) => n !== t),
        ),
          this.scheduleGc(),
          T(this, We).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          }));
      }
      optionalRemove() {
        T(this, Yt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : T(this, We).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = T(this, vr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, s, l, a, u, c, d, m, p, x, g, w, h, f, v, b, C, E, k, P;
        const n = () => {
          Ie(this, qt, jn).call(this, { type: "continue" });
        };
        q(
          this,
          vr,
          Zg({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (A, j) => {
              Ie(this, qt, jn).call(this, {
                type: "failed",
                failureCount: A,
                error: j,
              });
            },
            onPause: () => {
              Ie(this, qt, jn).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => T(this, We).canRun(this),
          }),
        );
        const r = this.state.status === "pending",
          o = !T(this, vr).canStart();
        try {
          if (r) n();
          else {
            (Ie(this, qt, jn).call(this, {
              type: "pending",
              variables: t,
              isPaused: o,
            }),
              await ((s = (i = T(this, We).config).onMutate) == null
                ? void 0
                : s.call(i, t, this)));
            const j = await ((a = (l = this.options).onMutate) == null
              ? void 0
              : a.call(l, t));
            j !== this.state.context &&
              Ie(this, qt, jn).call(this, {
                type: "pending",
                context: j,
                variables: t,
                isPaused: o,
              });
          }
          const A = await T(this, vr).start();
          return (
            await ((c = (u = T(this, We).config).onSuccess) == null
              ? void 0
              : c.call(u, A, t, this.state.context, this)),
            await ((m = (d = this.options).onSuccess) == null
              ? void 0
              : m.call(d, A, t, this.state.context)),
            await ((x = (p = T(this, We).config).onSettled) == null
              ? void 0
              : x.call(
                  p,
                  A,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((w = (g = this.options).onSettled) == null
              ? void 0
              : w.call(g, A, null, t, this.state.context)),
            Ie(this, qt, jn).call(this, { type: "success", data: A }),
            A
          );
        } catch (A) {
          try {
            throw (
              await ((f = (h = T(this, We).config).onError) == null
                ? void 0
                : f.call(h, A, t, this.state.context, this)),
              await ((b = (v = this.options).onError) == null
                ? void 0
                : b.call(v, A, t, this.state.context)),
              await ((E = (C = T(this, We).config).onSettled) == null
                ? void 0
                : E.call(
                    C,
                    void 0,
                    A,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((P = (k = this.options).onSettled) == null
                ? void 0
                : P.call(k, void 0, A, t, this.state.context)),
              A
            );
          } finally {
            Ie(this, qt, jn).call(this, { type: "error", error: A });
          }
        } finally {
          T(this, We).runNext(this);
        }
      }
    }),
    (Yt = new WeakMap()),
    (We = new WeakMap()),
    (vr = new WeakMap()),
    (qt = new WeakSet()),
    (jn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      ((this.state = n(this.state)),
        Ke.batch(() => {
          (T(this, Yt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            T(this, We).notify({ mutation: this, type: "updated", action: t }));
        }));
    }),
    cp);
function tC() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var fn,
  Lt,
  ki,
  dp,
  nC =
    ((dp = class extends Rl {
      constructor(t = {}) {
        super();
        ne(this, fn);
        ne(this, Lt);
        ne(this, ki);
        ((this.config = t),
          q(this, fn, new Set()),
          q(this, Lt, new Map()),
          q(this, ki, 0));
      }
      build(t, n, r) {
        const o = new eC({
          mutationCache: this,
          mutationId: ++$i(this, ki)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return (this.add(o), o);
      }
      add(t) {
        T(this, fn).add(t);
        const n = as(t);
        if (typeof n == "string") {
          const r = T(this, Lt).get(n);
          r ? r.push(t) : T(this, Lt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (T(this, fn).delete(t)) {
          const n = as(t);
          if (typeof n == "string") {
            const r = T(this, Lt).get(n);
            if (r)
              if (r.length > 1) {
                const o = r.indexOf(t);
                o !== -1 && r.splice(o, 1);
              } else r[0] === t && T(this, Lt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = as(t);
        if (typeof n == "string") {
          const r = T(this, Lt).get(n),
            o =
              r == null ? void 0 : r.find((i) => i.state.status === "pending");
          return !o || o === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = as(t);
        if (typeof n == "string") {
          const o =
            (r = T(this, Lt).get(n)) == null
              ? void 0
              : r.find((i) => i !== t && i.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Ke.batch(() => {
          (T(this, fn).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            T(this, fn).clear(),
            T(this, Lt).clear());
        });
      }
      getAll() {
        return Array.from(T(this, fn));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => $f(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => $f(t, n));
      }
      notify(t) {
        Ke.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Ke.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(_t))),
        );
      }
    }),
    (fn = new WeakMap()),
    (Lt = new WeakMap()),
    (ki = new WeakMap()),
    dp);
function as(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function Vf(e) {
  return {
    onFetch: (t, n) => {
      var c, d, m, p, x;
      const r = t.options,
        o =
          (m =
            (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : d.fetchMore) == null
            ? void 0
            : m.direction,
        i = ((p = t.state.data) == null ? void 0 : p.pages) || [],
        s = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
      let l = { pages: [], pageParams: [] },
        a = 0;
      const u = async () => {
        let g = !1;
        const w = (v) => {
            Object.defineProperty(v, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (g = !0)
                  : t.signal.addEventListener("abort", () => {
                      g = !0;
                    }),
                t.signal
              ),
            });
          },
          h = Gg(t.options, t.fetchOptions),
          f = async (v, b, C) => {
            if (g) return Promise.reject();
            if (b == null && v.pages.length) return Promise.resolve(v);
            const k = (() => {
                const I = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: b,
                  direction: C ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return (w(I), I);
              })(),
              P = await h(k),
              { maxPages: A } = t.options,
              j = C ? Vb : Ub;
            return {
              pages: j(v.pages, P, A),
              pageParams: j(v.pageParams, b, A),
            };
          };
        if (o && i.length) {
          const v = o === "backward",
            b = v ? rC : Hf,
            C = { pages: i, pageParams: s },
            E = b(r, C);
          l = await f(C, E, v);
        } else {
          const v = e ?? i.length;
          do {
            const b = a === 0 ? (s[0] ?? r.initialPageParam) : Hf(r, l);
            if (a > 0 && b == null) break;
            ((l = await f(l, b)), a++);
          } while (a < v);
        }
        return l;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var g, w;
            return (w = (g = t.options).persister) == null
              ? void 0
              : w.call(
                  g,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n,
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function Hf(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function rC(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var xe,
  zn,
  Fn,
  oo,
  io,
  $n,
  so,
  lo,
  fp,
  oC =
    ((fp = class {
      constructor(e = {}) {
        ne(this, xe);
        ne(this, zn);
        ne(this, Fn);
        ne(this, oo);
        ne(this, io);
        ne(this, $n);
        ne(this, so);
        ne(this, lo);
        (q(this, xe, e.queryCache || new Jb()),
          q(this, zn, e.mutationCache || new nC()),
          q(this, Fn, e.defaultOptions || {}),
          q(this, oo, new Map()),
          q(this, io, new Map()),
          q(this, $n, 0));
      }
      mount() {
        ($i(this, $n)._++,
          T(this, $n) === 1 &&
            (q(
              this,
              so,
              Yg.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), T(this, xe).onFocus());
              }),
            ),
            q(
              this,
              lo,
              Js.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), T(this, xe).onOnline());
              }),
            )));
      }
      unmount() {
        var e, t;
        ($i(this, $n)._--,
          T(this, $n) === 0 &&
            ((e = T(this, so)) == null || e.call(this),
            q(this, so, void 0),
            (t = T(this, lo)) == null || t.call(this),
            q(this, lo, void 0)));
      }
      isFetching(e) {
        return T(this, xe).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return T(this, zn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = T(this, xe).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = T(this, xe).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Nu(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return T(this, xe)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = T(this, xe).get(r.queryHash),
          i = o == null ? void 0 : o.state.data,
          s = Db(t, i);
        if (s !== void 0)
          return T(this, xe)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Ke.batch(() =>
          T(this, xe)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = T(this, xe).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = T(this, xe);
        Ke.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = T(this, xe);
        return Ke.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          ),
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = Ke.batch(() =>
            T(this, xe)
              .findAll(e)
              .map((o) => o.cancel(n)),
          );
        return Promise.all(r).then(_t).catch(_t);
      }
      invalidateQueries(e, t = {}) {
        return Ke.batch(
          () => (
            T(this, xe)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t,
                )
          ),
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = Ke.batch(() =>
            T(this, xe)
              .findAll(e)
              .filter((o) => !o.isDisabled() && !o.isStatic())
              .map((o) => {
                let i = o.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(_t)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              }),
          );
        return Promise.all(r).then(_t);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = T(this, xe).build(this, t);
        return n.isStaleByTime(Nu(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(_t).catch(_t);
      }
      fetchInfiniteQuery(e) {
        return ((e.behavior = Vf(e.pages)), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(_t).catch(_t);
      }
      ensureInfiniteQueryData(e) {
        return ((e.behavior = Vf(e.pages)), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return Js.isOnline()
          ? T(this, zn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return T(this, xe);
      }
      getMutationCache() {
        return T(this, zn);
      }
      getDefaultOptions() {
        return T(this, Fn);
      }
      setDefaultOptions(e) {
        q(this, Fn, e);
      }
      setQueryDefaults(e, t) {
        T(this, oo).set(xi(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...T(this, oo).values()],
          n = {};
        return (
          t.forEach((r) => {
            wi(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        T(this, io).set(xi(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...T(this, io).values()],
          n = {};
        return (
          t.forEach((r) => {
            wi(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...T(this, Fn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Wc(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === Qc && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...T(this, Fn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        (T(this, xe).clear(), T(this, zn).clear());
      }
    }),
    (xe = new WeakMap()),
    (zn = new WeakMap()),
    (Fn = new WeakMap()),
    (oo = new WeakMap()),
    (io = new WeakMap()),
    ($n = new WeakMap()),
    (so = new WeakMap()),
    (lo = new WeakMap()),
    fp),
  iC = S.createContext(void 0),
  sC = ({ client: e, children: t }) => (
    S.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    y.jsx(iC.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function el() {
  return (
    (el = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    el.apply(this, arguments)
  );
}
var Vn;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(Vn || (Vn = {}));
const Wf = "popstate";
function lC(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: l } = r.location;
    return Ru(
      "",
      { pathname: i, search: s, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : tv(o);
  }
  return uC(t, n, null, e);
}
function ot(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ev(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function aC() {
  return Math.random().toString(36).substr(2, 8);
}
function Qf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ru(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    el(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? jl(t) : t,
      { state: n, key: (t && t.key) || r || aC() },
    )
  );
}
function tv(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function jl(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function uC(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    l = Vn.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), s.replaceState(el({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    l = Vn.Pop;
    let w = c(),
      h = w == null ? null : w - u;
    ((u = w), a && a({ action: l, location: g.location, delta: h }));
  }
  function m(w, h) {
    l = Vn.Push;
    let f = Ru(g.location, w, h);
    u = c() + 1;
    let v = Qf(f, u),
      b = g.createHref(f);
    try {
      s.pushState(v, "", b);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(b);
    }
    i && a && a({ action: l, location: g.location, delta: 1 });
  }
  function p(w, h) {
    l = Vn.Replace;
    let f = Ru(g.location, w, h);
    u = c();
    let v = Qf(f, u),
      b = g.createHref(f);
    (s.replaceState(v, "", b),
      i && a && a({ action: l, location: g.location, delta: 0 }));
  }
  function x(w) {
    let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
      f = typeof w == "string" ? w : tv(w);
    return (
      (f = f.replace(/ $/, "%20")),
      ot(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          f,
      ),
      new URL(f, h)
    );
  }
  let g = {
    get action() {
      return l;
    },
    get location() {
      return e(o, s);
    },
    listen(w) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Wf, d),
        (a = w),
        () => {
          (o.removeEventListener(Wf, d), (a = null));
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: x,
    encodeLocation(w) {
      let h = x(w);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: m,
    replace: p,
    go(w) {
      return s.go(w);
    },
  };
  return g;
}
var Kf;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(Kf || (Kf = {}));
function cC(e, t, n) {
  return (n === void 0 && (n = "/"), dC(e, t, n, !1));
}
function dC(e, t, n, r) {
  let o = typeof t == "string" ? jl(t) : t,
    i = ov(o.pathname || "/", n);
  if (i == null) return null;
  let s = nv(e);
  fC(s);
  let l = null;
  for (let a = 0; l == null && a < s.length; ++a) {
    let u = CC(i);
    l = SC(s[a], u, r);
  }
  return l;
}
function nv(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let o = (i, s, l) => {
    let a = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (ot(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Jr([r, a.relativePath]),
      c = n.concat(a);
    (i.children &&
      i.children.length > 0 &&
      (ot(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      nv(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: xC(u, i.index), routesMeta: c }));
  };
  return (
    e.forEach((i, s) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, s);
      else for (let a of rv(i.path)) o(i, s, a);
    }),
    t
  );
}
function rv(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = rv(r.join("/")),
    l = [];
  return (
    l.push(...s.map((a) => (a === "" ? i : [i, a].join("/")))),
    o && l.push(...s),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function fC(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : wC(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const pC = /^:[\w-]+$/,
  hC = 3,
  mC = 2,
  gC = 1,
  vC = 10,
  yC = -2,
  Gf = (e) => e === "*";
function xC(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Gf) && (r += yC),
    t && (r += mC),
    n
      .filter((o) => !Gf(o))
      .reduce((o, i) => o + (pC.test(i) ? hC : i === "" ? gC : vC), r)
  );
}
function wC(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function SC(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l],
      u = l === r.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      d = Yf(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        c,
      ),
      m = a.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Yf(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          c,
        )),
      !d)
    )
      return null;
    (Object.assign(o, d.params),
      s.push({
        params: o,
        pathname: Jr([i, d.pathname]),
        pathnameBase: EC(Jr([i, d.pathnameBase])),
        route: m,
      }),
      d.pathnameBase !== "/" && (i = Jr([i, d.pathnameBase])));
  }
  return s;
}
function Yf(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = bC(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: m, isOptional: p } = c;
      if (m === "*") {
        let g = l[d] || "";
        s = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const x = l[d];
      return (
        p && !x ? (u[m] = void 0) : (u[m] = (x || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function bC(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ev(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function CC(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ev(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function ov(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Jr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  EC = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function kC(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const iv = ["post", "put", "patch", "delete"];
new Set(iv);
const PC = ["get", ...iv];
new Set(PC);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function tl() {
  return (
    (tl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    tl.apply(this, arguments)
  );
}
const NC = S.createContext(null),
  TC = S.createContext(null),
  sv = S.createContext(null),
  Ol = S.createContext(null),
  _l = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  lv = S.createContext(null);
function Kc() {
  return S.useContext(Ol) != null;
}
function RC() {
  return (Kc() || ot(!1), S.useContext(Ol).location);
}
function AC(e, t) {
  return jC(e, t);
}
function jC(e, t, n, r) {
  Kc() || ot(!1);
  let { navigator: o } = S.useContext(sv),
    { matches: i } = S.useContext(_l),
    s = i[i.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : "/";
  s && s.route;
  let u = RC(),
    c;
  if (t) {
    var d;
    let w = typeof t == "string" ? jl(t) : t;
    (a === "/" || ((d = w.pathname) != null && d.startsWith(a)) || ot(!1),
      (c = w));
  } else c = u;
  let m = c.pathname || "/",
    p = m;
  if (a !== "/") {
    let w = a.replace(/^\//, "").split("/");
    p = "/" + m.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let x = cC(e, { pathname: p }),
    g = DC(
      x &&
        x.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, l, w.params),
            pathname: Jr([
              a,
              o.encodeLocation
                ? o.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? a
                : Jr([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
      r,
    );
  return t && g
    ? S.createElement(
        Ol.Provider,
        {
          value: {
            location: tl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: Vn.Pop,
          },
        },
        g,
      )
    : g;
}
function OC() {
  let e = $C(),
    t = kC(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: o }, n) : null,
    null,
  );
}
const _C = S.createElement(OC, null);
class MC extends S.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? S.createElement(
          _l.Provider,
          { value: this.props.routeContext },
          S.createElement(lv.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function LC(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = S.useContext(NC);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(_l.Provider, { value: t }, r)
  );
}
function DC(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let c = s.findIndex(
      (d) => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0,
    );
    (c >= 0 || ot(!1), (s = s.slice(0, Math.min(s.length, c + 1))));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let d = s[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: m, errors: p } = n,
          x =
            d.route.loader &&
            m[d.route.id] === void 0 &&
            (!p || p[d.route.id] === void 0);
        if (d.route.lazy || x) {
          ((a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]));
          break;
        }
      }
    }
  return s.reduceRight((c, d, m) => {
    let p,
      x = !1,
      g = null,
      w = null;
    n &&
      ((p = l && d.route.id ? l[d.route.id] : void 0),
      (g = d.route.errorElement || _C),
      a &&
        (u < 0 && m === 0
          ? ((x = !0), (w = null))
          : u === m &&
            ((x = !0), (w = d.route.hydrateFallbackElement || null))));
    let h = t.concat(s.slice(0, m + 1)),
      f = () => {
        let v;
        return (
          p
            ? (v = g)
            : x
              ? (v = w)
              : d.route.Component
                ? (v = S.createElement(d.route.Component, null))
                : d.route.element
                  ? (v = d.route.element)
                  : (v = c),
          S.createElement(LC, {
            match: d,
            routeContext: { outlet: c, matches: h, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || m === 0)
      ? S.createElement(MC, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: p,
          children: f(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var Au = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(Au || {});
function IC(e) {
  let t = S.useContext(TC);
  return (t || ot(!1), t);
}
function zC(e) {
  let t = S.useContext(_l);
  return (t || ot(!1), t);
}
function FC(e) {
  let t = zC(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || ot(!1), n.route.id);
}
function $C() {
  var e;
  let t = S.useContext(lv),
    n = IC(Au.UseRouteError),
    r = FC(Au.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function BC(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function av(e) {
  ot(!1);
}
function UC(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Vn.Pop,
    navigator: i,
    static: s = !1,
    future: l,
  } = e;
  Kc() && ot(!1);
  let a = t.replace(/^\/*/, "/"),
    u = S.useMemo(
      () => ({
        basename: a,
        navigator: i,
        static: s,
        future: tl({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, i, s],
    );
  typeof r == "string" && (r = jl(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: m = "",
      state: p = null,
      key: x = "default",
    } = r,
    g = S.useMemo(() => {
      let w = ov(c, a);
      return w == null
        ? null
        : {
            location: { pathname: w, search: d, hash: m, state: p, key: x },
            navigationType: o,
          };
    }, [a, c, d, m, p, x, o]);
  return g == null
    ? null
    : S.createElement(
        sv.Provider,
        { value: u },
        S.createElement(Ol.Provider, { children: n, value: g }),
      );
}
function VC(e) {
  let { children: t, location: n } = e;
  return AC(ju(t), n);
}
new Promise(() => {});
function ju(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, o) => {
      if (!S.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === S.Fragment) {
        n.push.apply(n, ju(r.props.children, i));
        return;
      }
      (r.type !== av && ot(!1), !r.props.index || !r.props.children || ot(!1));
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (s.children = ju(r.props.children, i)), n.push(s));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const HC = "6";
try {
  window.__reactRouterVersion = HC;
} catch {}
const WC = "startTransition",
  qf = Fu[WC];
function QC(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = S.useRef();
  i.current == null && (i.current = lC({ window: o, v5Compat: !0 }));
  let s = i.current,
    [l, a] = S.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = S.useCallback(
      (d) => {
        u && qf ? qf(() => a(d)) : a(d);
      },
      [a, u],
    );
  return (
    S.useLayoutEffect(() => s.listen(c), [s, c]),
    S.useEffect(() => BC(r), [r]),
    S.createElement(UC, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: r,
    })
  );
}
var Xf;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(Xf || (Xf = {}));
var Zf;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(Zf || (Zf = {}));
const KC = rg(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  on = S.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
      const s = r ? b1 : "button";
      return y.jsx(s, {
        className: Se(KC({ variant: t, size: n, className: e })),
        ref: i,
        ...o,
      });
    },
  );
on.displayName = "Button";
const Jf = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Packages", href: "#packages" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ],
  GC = "971501234567",
  YC =
    "Hi! I'm interested in booking a Dubai Desert Safari with Visit White Desert. Can you help me?",
  qC = () => {
    const [e, t] = S.useState(!1),
      n = (o) => {
        var i;
        if ((t(!1), o === "#")) {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        (i = document.querySelector(o)) == null ||
          i.scrollIntoView({ behavior: "smooth" });
      },
      r = () => {
        const o = `https://wa.me/${GC}?text=${encodeURIComponent(YC)}`;
        window.open(o, "_blank");
      };
    return y.jsx("nav", {
      className:
        "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b",
      children: y.jsxs("div", {
        className: "max-w-7xl mx-auto px-4",
        children: [
          y.jsxs("div", {
            className: "flex items-center justify-between h-16",
            children: [
              y.jsx("div", {
                className: "flex-shrink-0",
                children: y.jsxs("span", {
                  className: "text-xl font-bold",
                  children: [
                    y.jsx("span", {
                      className: "text-amber-600",
                      children: "Visit",
                    }),
                    y.jsx("span", {
                      className: "text-foreground",
                      children: "White",
                    }),
                    y.jsx("span", {
                      className: "text-amber-500",
                      children: "Desert",
                    }),
                  ],
                }),
              }),
              y.jsx("div", {
                className: "hidden md:flex items-center gap-8",
                children: Jf.map((o) =>
                  y.jsx(
                    "button",
                    {
                      onClick: () => n(o.href),
                      className:
                        "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                      children: o.name,
                    },
                    o.name,
                  ),
                ),
              }),
              y.jsx("div", {
                className: "hidden md:block",
                children: y.jsx(on, {
                  onClick: r,
                  className:
                    "bg-green-500 hover:bg-green-600 text-white font-semibold",
                  children: "Book Now",
                }),
              }),
              y.jsx("button", {
                className: "md:hidden p-2",
                onClick: () => t(!e),
                children: e
                  ? y.jsx(ig, { className: "w-6 h-6" })
                  : y.jsx(kx, { className: "w-6 h-6" }),
              }),
            ],
          }),
          e &&
            y.jsx("div", {
              className: "md:hidden py-4 border-t",
              children: y.jsxs("div", {
                className: "flex flex-col gap-4",
                children: [
                  Jf.map((o) =>
                    y.jsx(
                      "button",
                      {
                        onClick: () => n(o.href),
                        className:
                          "text-left px-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                        children: o.name,
                      },
                      o.name,
                    ),
                  ),
                  y.jsx(on, {
                    onClick: r,
                    className:
                      "bg-green-500 hover:bg-green-600 text-white font-semibold mt-2",
                    children: "Book Now",
                  }),
                ],
              }),
            }),
        ],
      }),
    });
  },
  XC = "/white-safari-desert/assets/dubai-desert-hero-DBcDELxm.mp4",
  ZC = "971501234567",
  JC =
    "Hi! I'm interested in booking a Dubai Desert Safari with Visit White Desert. Can you help me?",
  eE = () => {
    const e = () => {
        var n;
        (n = document.getElementById("packages")) == null ||
          n.scrollIntoView({ behavior: "smooth" });
      },
      t = () => {
        const n = `https://wa.me/${ZC}?text=${encodeURIComponent(JC)}`;
        window.open(n, "_blank");
      };
    return y.jsxs("section", {
      className:
        "relative min-h-screen flex items-center justify-center overflow-hidden pt-16",
      children: [
        y.jsxs("div", {
          className: "absolute inset-0",
          children: [
            y.jsx("video", {
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              className: "w-full h-full object-cover",
              children: y.jsx("source", { src: XC, type: "video/mp4" }),
            }),
            y.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70",
            }),
          ],
        }),
        y.jsx("div", {
          className:
            "absolute top-1/4 left-10 w-20 h-20 rounded-full bg-amber-500/20 blur-xl animate-pulse",
        }),
        y.jsx("div", {
          className:
            "absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-amber-600/20 blur-xl animate-pulse delay-1000",
        }),
        y.jsxs("div", {
          className: "relative z-10 text-center px-4 max-w-5xl mx-auto",
          children: [
            y.jsx("span", {
              className:
                "inline-block px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium mb-6 backdrop-blur-sm",
              children: "🌟 Dubai's #1 Rated Desert Safari Experience",
            }),
            y.jsxs("h1", {
              className:
                "text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight",
              children: [
                "Experience the",
                y.jsx("span", {
                  className: "block text-amber-400",
                  children: "Dubai Desert Magic",
                }),
              ],
            }),
            y.jsx("p", {
              className:
                "text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed",
              children:
                "Embark on an extraordinary journey through Dubai's majestic golden dunes. Thrilling dune bashing, mesmerizing belly dance, authentic BBQ dinner, and unforgettable sunsets await.",
            }),
            y.jsxs("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              children: [
                y.jsxs(on, {
                  onClick: t,
                  size: "lg",
                  className:
                    "bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 text-lg group",
                  children: [
                    y.jsx(Mc, { className: "mr-2 w-5 h-5" }),
                    "Book via WhatsApp",
                  ],
                }),
                y.jsxs(on, {
                  onClick: e,
                  size: "lg",
                  variant: "outline",
                  className:
                    "border-white/50 text-white hover:bg-white/10 px-8 py-6 text-lg",
                  children: [
                    y.jsx(Nx, { className: "mr-2 w-5 h-5" }),
                    "View Packages",
                  ],
                }),
              ],
            }),
            y.jsxs("div", {
              className:
                "mt-16 flex flex-wrap justify-center gap-8 text-white/60 text-sm",
              children: [
                y.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    y.jsx("span", {
                      className: "text-amber-400",
                      children: "✓",
                    }),
                    " 50,000+ Happy Travelers",
                  ],
                }),
                y.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    y.jsx("span", {
                      className: "text-amber-400",
                      children: "✓",
                    }),
                    " 4.9/5 TripAdvisor Rating",
                  ],
                }),
                y.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    y.jsx("span", {
                      className: "text-amber-400",
                      children: "✓",
                    }),
                    " Free Hotel Pickup",
                  ],
                }),
              ],
            }),
          ],
        }),
        y.jsx("div", {
          className:
            "absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce",
          children: y.jsx("div", {
            className:
              "w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2",
            children: y.jsx("div", {
              className: "w-1 h-2 bg-white/50 rounded-full",
            }),
          }),
        }),
      ],
    });
  },
  tE = [
    { icon: Ox, value: "50,000+", label: "Happy Guests" },
    { icon: Ex, value: "Dubai", label: "Premium Location" },
    { icon: vx, value: "12+", label: "Years Experience" },
    { icon: Sx, value: "24/7", label: "WhatsApp Support" },
  ],
  nE = () =>
    y.jsx("section", {
      id: "about",
      className: "py-20 px-4 bg-muted/30",
      children: y.jsx("div", {
        className: "max-w-7xl mx-auto",
        children: y.jsxs("div", {
          className: "grid lg:grid-cols-2 gap-12 items-center",
          children: [
            y.jsxs("div", {
              children: [
                y.jsx("span", {
                  className:
                    "text-amber-600 font-semibold text-sm uppercase tracking-wider",
                  children: "About Visit White Desert",
                }),
                y.jsx("h2", {
                  className: "text-4xl font-bold mt-2 mb-6",
                  children: "Dubai's Premier Desert Safari Experience",
                }),
                y.jsx("p", {
                  className: "text-muted-foreground text-lg mb-6",
                  children:
                    "Since 2012, Visit White Desert has been crafting extraordinary desert experiences in the heart of Dubai. Our expert guides and premium services have made us the top choice for travelers seeking authentic Arabian adventures.",
                }),
                y.jsx("p", {
                  className: "text-muted-foreground mb-8",
                  children:
                    "From thrilling dune bashing in luxury Land Cruisers to enchanting belly dance performances and traditional BBQ dinners under the stars – we offer the complete Dubai desert experience. Whether you're seeking adrenaline-pumping adventures or peaceful sunset moments, we have the perfect package for you.",
                }),
                y.jsx("div", {
                  className: "grid grid-cols-2 md:grid-cols-4 gap-6",
                  children: tE.map((e, t) =>
                    y.jsxs(
                      "div",
                      {
                        className: "text-center",
                        children: [
                          y.jsx("div", {
                            className:
                              "inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-3",
                            children: y.jsx(e.icon, { className: "w-6 h-6" }),
                          }),
                          y.jsx("div", {
                            className: "text-2xl font-bold",
                            children: e.value,
                          }),
                          y.jsx("div", {
                            className: "text-sm text-muted-foreground",
                            children: e.label,
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
            y.jsxs("div", {
              className: "grid grid-cols-2 gap-4",
              children: [
                y.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    y.jsx("img", {
                      src: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400&h=300&fit=crop",
                      alt: "Dubai desert dunes",
                      className: "rounded-lg w-full h-48 object-cover",
                    }),
                    y.jsx("img", {
                      src: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=400&h=400&fit=crop",
                      alt: "Camel ride in Dubai",
                      className: "rounded-lg w-full h-64 object-cover",
                    }),
                  ],
                }),
                y.jsxs("div", {
                  className: "space-y-4 pt-8",
                  children: [
                    y.jsx("img", {
                      src: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=400&h=400&fit=crop",
                      alt: "Dubai desert camp",
                      className: "rounded-lg w-full h-64 object-cover",
                    }),
                    y.jsx("img", {
                      src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=300&fit=crop",
                      alt: "Dubai sunset view",
                      className: "rounded-lg w-full h-48 object-cover",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  Ml = S.forwardRef(({ className: e, ...t }, n) =>
    y.jsx("div", {
      ref: n,
      className: Se(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        e,
      ),
      ...t,
    }),
  );
Ml.displayName = "Card";
const uv = S.forwardRef(({ className: e, ...t }, n) =>
  y.jsx("div", {
    ref: n,
    className: Se("flex flex-col space-y-1.5 p-6", e),
    ...t,
  }),
);
uv.displayName = "CardHeader";
const cv = S.forwardRef(({ className: e, ...t }, n) =>
  y.jsx("h3", {
    ref: n,
    className: Se("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  }),
);
cv.displayName = "CardTitle";
const dv = S.forwardRef(({ className: e, ...t }, n) =>
  y.jsx("p", {
    ref: n,
    className: Se("text-sm text-muted-foreground", e),
    ...t,
  }),
);
dv.displayName = "CardDescription";
const Ll = S.forwardRef(({ className: e, ...t }, n) =>
  y.jsx("div", { ref: n, className: Se("p-6 pt-0", e), ...t }),
);
Ll.displayName = "CardContent";
const fv = S.forwardRef(({ className: e, ...t }, n) =>
  y.jsx("div", {
    ref: n,
    className: Se("flex items-center p-6 pt-0", e),
    ...t,
  }),
);
fv.displayName = "CardFooter";
const rE = [
    {
      icon: Rx,
      title: "Safety First",
      description:
        "Professional Dubai-licensed drivers with extensive desert experience ensure your safety throughout the journey.",
    },
    {
      icon: Ax,
      title: "Luxury Experience",
      description:
        "Premium Land Cruisers, gourmet Arabic dining, and VIP amenities for an unforgettable Dubai adventure.",
    },
    {
      icon: Cx,
      title: "Personalized Service",
      description:
        "Customizable packages tailored to your preferences, from adventure seekers to romantic desert getaways.",
    },
    {
      icon: bx,
      title: "Expert Local Guides",
      description:
        "Emirati guides who know every dune and hidden gem, sharing authentic Dubai culture and traditions.",
    },
    {
      icon: yx,
      title: "Insta-Worthy Moments",
      description:
        "Stunning Dubai desert locations and golden hour timing for picture-perfect memories.",
    },
    {
      icon: _x,
      title: "Authentic Arabic Cuisine",
      description:
        "Traditional BBQ dinner with shisha, Arabic coffee, and dates served in authentic Bedouin style camps.",
    },
  ],
  oE = () =>
    y.jsx("section", {
      id: "features",
      className: "py-20 px-4",
      children: y.jsxs("div", {
        className: "max-w-7xl mx-auto",
        children: [
          y.jsxs("div", {
            className: "text-center mb-12",
            children: [
              y.jsx("span", {
                className:
                  "text-amber-600 font-semibold text-sm uppercase tracking-wider",
                children: "Why Choose Visit White Desert",
              }),
              y.jsx("h2", {
                className: "text-4xl font-bold mt-2 mb-4",
                children: "The Ultimate Dubai Desert Experience",
              }),
              y.jsx("p", {
                className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                children:
                  "We go beyond ordinary safaris to deliver extraordinary moments in Dubai's magnificent desert.",
              }),
            ],
          }),
          y.jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: rE.map((e, t) =>
              y.jsx(
                Ml,
                {
                  className:
                    "border-0 shadow-md hover:shadow-lg transition-shadow",
                  children: y.jsxs(Ll, {
                    className: "p-6",
                    children: [
                      y.jsx("div", {
                        className:
                          "inline-flex items-center justify-center w-14 h-14 rounded-lg bg-amber-100 text-amber-600 mb-4",
                        children: y.jsx(e.icon, { className: "w-7 h-7" }),
                      }),
                      y.jsx("h3", {
                        className: "text-xl font-semibold mb-2",
                        children: e.title,
                      }),
                      y.jsx("p", {
                        className: "text-muted-foreground",
                        children: e.description,
                      }),
                    ],
                  }),
                },
                t,
              ),
            ),
          }),
        ],
      }),
    }),
  iE = "1234567890",
  sE = ({ pkg: e }) => {
    const t = () => {
      const n = `Hi! I'm interested in the ${e.name} package ($${e.price}). Can you help me book?`,
        r = `https://wa.me/${iE}?text=${encodeURIComponent(n)}`;
      window.open(r, "_blank");
    };
    return y.jsxs(Ml, {
      className: `relative overflow-hidden transition-all duration-300 hover:shadow-xl ${e.popular ? "border-amber-500 border-2" : ""}`,
      children: [
        e.popular &&
          y.jsx("div", {
            className:
              "absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-semibold z-10",
            children: "Most Popular",
          }),
        y.jsx("div", {
          className: "h-48 bg-cover bg-center",
          style: { backgroundImage: `url(${e.image})` },
        }),
        y.jsxs(uv, {
          children: [
            y.jsx(cv, { className: "text-2xl", children: e.name }),
            y.jsx(dv, { className: "text-lg", children: e.duration }),
          ],
        }),
        y.jsxs(Ll, {
          children: [
            y.jsx("p", {
              className: "text-muted-foreground mb-4",
              children: e.description,
            }),
            y.jsx("ul", {
              className: "space-y-2",
              children: e.features.map((n, r) =>
                y.jsxs(
                  "li",
                  {
                    className: "flex items-center gap-2",
                    children: [
                      y.jsx(xx, { className: "h-4 w-4 text-amber-500" }),
                      y.jsx("span", { className: "text-sm", children: n }),
                    ],
                  },
                  r,
                ),
              ),
            }),
          ],
        }),
        y.jsxs(fv, {
          className: "flex justify-between items-center",
          children: [
            y.jsxs("div", {
              className: "text-3xl font-bold text-amber-600",
              children: ["$", e.price],
            }),
            y.jsxs(on, {
              onClick: t,
              className: "bg-green-500 hover:bg-green-600 text-white",
              children: [y.jsx(Mc, { className: "h-4 w-4 mr-2" }), "Book Now"],
            }),
          ],
        }),
      ],
    });
  },
  lE = [
    {
      src: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop",
      alt: "Desert sunset",
      span: "col-span-2 row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=400&h=300&fit=crop",
      alt: "Dune bashing",
      span: "col-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400&h=300&fit=crop",
      alt: "Camel caravan",
      span: "col-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=400&h=300&fit=crop",
      alt: "Desert camp",
      span: "col-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=400&h=300&fit=crop",
      alt: "Night sky",
      span: "col-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=600&h=400&fit=crop",
      alt: "Desert adventure",
      span: "col-span-2",
    },
  ],
  aE = () =>
    y.jsx("section", {
      id: "gallery",
      className: "py-20 px-4 bg-muted/30",
      children: y.jsxs("div", {
        className: "max-w-7xl mx-auto",
        children: [
          y.jsxs("div", {
            className: "text-center mb-12",
            children: [
              y.jsx("span", {
                className:
                  "text-amber-600 font-semibold text-sm uppercase tracking-wider",
                children: "Gallery",
              }),
              y.jsx("h2", {
                className: "text-4xl font-bold mt-2 mb-4",
                children: "Capture the Magic",
              }),
              y.jsx("p", {
                className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                children:
                  "Glimpses of extraordinary moments from our desert adventures.",
              }),
            ],
          }),
          y.jsx("div", {
            className:
              "grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]",
            children: lE.map((e, t) =>
              y.jsx(
                "div",
                {
                  className: `${e.span} overflow-hidden rounded-lg group cursor-pointer`,
                  children: y.jsx("img", {
                    src: e.src,
                    alt: e.alt,
                    className:
                      "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                  }),
                },
                t,
              ),
            ),
          }),
        ],
      }),
    });
function uE(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ep(e) {
  return uE(e) || Array.isArray(e);
}
function cE() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function Gc(e, t) {
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})),
    i = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== i
    ? !1
    : n.every((s) => {
        const l = e[s],
          a = t[s];
        return typeof l == "function"
          ? `${l}` == `${a}`
          : !ep(l) || !ep(a)
            ? l === a
            : Gc(l, a);
      });
}
function tp(e) {
  return e
    .concat()
    .sort((t, n) => (t.name > n.name ? 1 : -1))
    .map((t) => t.options);
}
function dE(e, t) {
  if (e.length !== t.length) return !1;
  const n = tp(e),
    r = tp(t);
  return n.every((o, i) => {
    const s = r[i];
    return Gc(o, s);
  });
}
function Yc(e) {
  return typeof e == "number";
}
function Ou(e) {
  return typeof e == "string";
}
function Dl(e) {
  return typeof e == "boolean";
}
function np(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function he(e) {
  return Math.abs(e);
}
function qc(e) {
  return Math.sign(e);
}
function Jo(e, t) {
  return he(e - t);
}
function fE(e, t) {
  if (e === 0 || t === 0 || he(e) <= he(t)) return 0;
  const n = Jo(he(e), he(t));
  return he(n / e);
}
function pE(e) {
  return Math.round(e * 100) / 100;
}
function Si(e) {
  return bi(e).map(Number);
}
function $t(e) {
  return e[Mi(e)];
}
function Mi(e) {
  return Math.max(0, e.length - 1);
}
function Xc(e, t) {
  return t === Mi(e);
}
function rp(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function bi(e) {
  return Object.keys(e);
}
function pv(e, t) {
  return [e, t].reduce(
    (n, r) => (
      bi(r).forEach((o) => {
        const i = n[o],
          s = r[o],
          l = np(i) && np(s);
        n[o] = l ? pv(i, s) : s;
      }),
      n
    ),
    {},
  );
}
function _u(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function hE(e, t) {
  const n = { start: r, center: o, end: i };
  function r() {
    return 0;
  }
  function o(a) {
    return i(a) / 2;
  }
  function i(a) {
    return t - a;
  }
  function s(a, u) {
    return Ou(e) ? n[e](a) : e(t, a, u);
  }
  return { measure: s };
}
function Ci() {
  let e = [];
  function t(o, i, s, l = { passive: !0 }) {
    let a;
    if ("addEventListener" in o)
      (o.addEventListener(i, s, l), (a = () => o.removeEventListener(i, s, l)));
    else {
      const u = o;
      (u.addListener(s), (a = () => u.removeListener(s)));
    }
    return (e.push(a), r);
  }
  function n() {
    e = e.filter((o) => o());
  }
  const r = { add: t, clear: n };
  return r;
}
function mE(e, t, n, r) {
  const o = Ci(),
    i = 1e3 / 60;
  let s = null,
    l = 0,
    a = 0;
  function u() {
    o.add(e, "visibilitychange", () => {
      e.hidden && x();
    });
  }
  function c() {
    (p(), o.clear());
  }
  function d(w) {
    if (!a) return;
    s || ((s = w), n(), n());
    const h = w - s;
    for (s = w, l += h; l >= i; ) (n(), (l -= i));
    const f = l / i;
    (r(f), a && (a = t.requestAnimationFrame(d)));
  }
  function m() {
    a || (a = t.requestAnimationFrame(d));
  }
  function p() {
    (t.cancelAnimationFrame(a), (s = null), (l = 0), (a = 0));
  }
  function x() {
    ((s = null), (l = 0));
  }
  return { init: u, destroy: c, start: m, stop: p, update: n, render: r };
}
function gE(e, t) {
  const n = t === "rtl",
    r = e === "y",
    o = r ? "y" : "x",
    i = r ? "x" : "y",
    s = !r && n ? -1 : 1,
    l = c(),
    a = d();
  function u(x) {
    const { height: g, width: w } = x;
    return r ? g : w;
  }
  function c() {
    return r ? "top" : n ? "right" : "left";
  }
  function d() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function m(x) {
    return x * s;
  }
  return {
    scroll: o,
    cross: i,
    startEdge: l,
    endEdge: a,
    measureSize: u,
    direction: m,
  };
}
function Pr(e = 0, t = 0) {
  const n = he(e - t);
  function r(u) {
    return u < e;
  }
  function o(u) {
    return u > t;
  }
  function i(u) {
    return r(u) || o(u);
  }
  function s(u) {
    return i(u) ? (r(u) ? e : t) : u;
  }
  function l(u) {
    return n ? u - n * Math.ceil((u - t) / n) : u;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: s,
    reachedAny: i,
    reachedMax: o,
    reachedMin: r,
    removeOffset: l,
  };
}
function hv(e, t, n) {
  const { constrain: r } = Pr(0, e),
    o = e + 1;
  let i = s(t);
  function s(m) {
    return n ? he((o + m) % o) : r(m);
  }
  function l() {
    return i;
  }
  function a(m) {
    return ((i = s(m)), d);
  }
  function u(m) {
    return c().set(l() + m);
  }
  function c() {
    return hv(e, l(), n);
  }
  const d = { get: l, set: a, add: u, clone: c };
  return d;
}
function vE(e, t, n, r, o, i, s, l, a, u, c, d, m, p, x, g, w, h, f) {
  const { cross: v, direction: b } = e,
    C = ["INPUT", "SELECT", "TEXTAREA"],
    E = { passive: !1 },
    k = Ci(),
    P = Ci(),
    A = Pr(50, 225).constrain(p.measure(20)),
    j = { mouse: 300, touch: 400 },
    I = { mouse: 500, touch: 600 },
    L = x ? 43 : 25;
  let H = !1,
    M = 0,
    W = 0,
    B = !1,
    V = !1,
    N = !1,
    R = !1;
  function D(F) {
    if (!f) return;
    function J(Ne) {
      (Dl(f) || f(F, Ne)) && ve(Ne);
    }
    const ae = t;
    k.add(ae, "dragstart", (Ne) => Ne.preventDefault(), E)
      .add(ae, "touchmove", () => {}, E)
      .add(ae, "touchend", () => {})
      .add(ae, "touchstart", J)
      .add(ae, "mousedown", J)
      .add(ae, "touchcancel", ye)
      .add(ae, "contextmenu", ye)
      .add(ae, "click", je, !0);
  }
  function U() {
    (k.clear(), P.clear());
  }
  function $() {
    const F = R ? n : t;
    P.add(F, "touchmove", Y, E)
      .add(F, "touchend", ye)
      .add(F, "mousemove", Y, E)
      .add(F, "mouseup", ye);
  }
  function G(F) {
    const J = F.nodeName || "";
    return C.includes(J);
  }
  function Q() {
    return (x ? I : j)[R ? "mouse" : "touch"];
  }
  function ie(F, J) {
    const ae = d.add(qc(F) * -1),
      Ne = c.byDistance(F, !x).distance;
    return x || he(F) < A
      ? Ne
      : w && J
        ? Ne * 0.5
        : c.byIndex(ae.get(), 0).distance;
  }
  function ve(F) {
    const J = _u(F, r);
    ((R = J),
      (N = x && J && !F.buttons && H),
      (H = Jo(o.get(), s.get()) >= 2),
      !(J && F.button !== 0) &&
        (G(F.target) ||
          ((B = !0),
          i.pointerDown(F),
          u.useFriction(0).useDuration(0),
          o.set(s),
          $(),
          (M = i.readPoint(F)),
          (W = i.readPoint(F, v)),
          m.emit("pointerDown"))));
  }
  function Y(F) {
    if (!_u(F, r) && F.touches.length >= 2) return ye(F);
    const ae = i.readPoint(F),
      Ne = i.readPoint(F, v),
      Ve = Jo(ae, M),
      it = Jo(Ne, W);
    if (!V && !R && (!F.cancelable || ((V = Ve > it), !V))) return ye(F);
    const st = i.pointerMove(F);
    (Ve > g && (N = !0),
      u.useFriction(0.3).useDuration(0.75),
      l.start(),
      o.add(b(st)),
      F.preventDefault());
  }
  function ye(F) {
    const ae = c.byDistance(0, !1).index !== d.get(),
      Ne = i.pointerUp(F) * Q(),
      Ve = ie(b(Ne), ae),
      it = fE(Ne, Ve),
      st = L - 10 * it,
      He = h + it / 50;
    ((V = !1),
      (B = !1),
      P.clear(),
      u.useDuration(st).useFriction(He),
      a.distance(Ve, !x),
      (R = !1),
      m.emit("pointerUp"));
  }
  function je(F) {
    N && (F.stopPropagation(), F.preventDefault(), (N = !1));
  }
  function ke() {
    return B;
  }
  return { init: D, destroy: U, pointerDown: ke };
}
function yE(e, t) {
  let r, o;
  function i(d) {
    return d.timeStamp;
  }
  function s(d, m) {
    const x = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (_u(d, t) ? d : d.touches[0])[x];
  }
  function l(d) {
    return ((r = d), (o = d), s(d));
  }
  function a(d) {
    const m = s(d) - s(o),
      p = i(d) - i(r) > 170;
    return ((o = d), p && (r = d), m);
  }
  function u(d) {
    if (!r || !o) return 0;
    const m = s(o) - s(r),
      p = i(d) - i(r),
      x = i(d) - i(o) > 170,
      g = m / p;
    return p && !x && he(g) > 0.1 ? g : 0;
  }
  return { pointerDown: l, pointerMove: a, pointerUp: u, readPoint: s };
}
function xE() {
  function e(n) {
    const { offsetTop: r, offsetLeft: o, offsetWidth: i, offsetHeight: s } = n;
    return {
      top: r,
      right: o + i,
      bottom: r + s,
      left: o,
      width: i,
      height: s,
    };
  }
  return { measure: e };
}
function wE(e) {
  function t(r) {
    return e * (r / 100);
  }
  return { measure: t };
}
function SE(e, t, n, r, o, i, s) {
  const l = [e].concat(r);
  let a,
    u,
    c = [],
    d = !1;
  function m(w) {
    return o.measureSize(s.measure(w));
  }
  function p(w) {
    if (!i) return;
    ((u = m(e)), (c = r.map(m)));
    function h(f) {
      for (const v of f) {
        if (d) return;
        const b = v.target === e,
          C = r.indexOf(v.target),
          E = b ? u : c[C],
          k = m(b ? e : r[C]);
        if (he(k - E) >= 0.5) {
          (w.reInit(), t.emit("resize"));
          break;
        }
      }
    }
    ((a = new ResizeObserver((f) => {
      (Dl(i) || i(w, f)) && h(f);
    })),
      n.requestAnimationFrame(() => {
        l.forEach((f) => a.observe(f));
      }));
  }
  function x() {
    ((d = !0), a && a.disconnect());
  }
  return { init: p, destroy: x };
}
function bE(e, t, n, r, o, i) {
  let s = 0,
    l = 0,
    a = o,
    u = i,
    c = e.get(),
    d = 0;
  function m() {
    const E = r.get() - e.get(),
      k = !a;
    let P = 0;
    return (
      k
        ? ((s = 0), n.set(r), e.set(r), (P = E))
        : (n.set(e), (s += E / a), (s *= u), (c += s), e.add(s), (P = c - d)),
      (l = qc(P)),
      (d = c),
      C
    );
  }
  function p() {
    const E = r.get() - t.get();
    return he(E) < 0.001;
  }
  function x() {
    return a;
  }
  function g() {
    return l;
  }
  function w() {
    return s;
  }
  function h() {
    return v(o);
  }
  function f() {
    return b(i);
  }
  function v(E) {
    return ((a = E), C);
  }
  function b(E) {
    return ((u = E), C);
  }
  const C = {
    direction: g,
    duration: x,
    velocity: w,
    seek: m,
    settled: p,
    useBaseFriction: f,
    useBaseDuration: h,
    useFriction: b,
    useDuration: v,
  };
  return C;
}
function CE(e, t, n, r, o) {
  const i = o.measure(10),
    s = o.measure(50),
    l = Pr(0.1, 0.99);
  let a = !1;
  function u() {
    return !(a || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function c(p) {
    if (!u()) return;
    const x = e.reachedMin(t.get()) ? "min" : "max",
      g = he(e[x] - t.get()),
      w = n.get() - t.get(),
      h = l.constrain(g / s);
    (n.subtract(w * h),
      !p &&
        he(w) < i &&
        (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction()));
  }
  function d(p) {
    a = !p;
  }
  return { shouldConstrain: u, constrain: c, toggleActive: d };
}
function EE(e, t, n, r, o) {
  const i = Pr(-t + e, 0),
    s = d(),
    l = c(),
    a = m();
  function u(x, g) {
    return Jo(x, g) <= 1;
  }
  function c() {
    const x = s[0],
      g = $t(s),
      w = s.lastIndexOf(x),
      h = s.indexOf(g) + 1;
    return Pr(w, h);
  }
  function d() {
    return n
      .map((x, g) => {
        const { min: w, max: h } = i,
          f = i.constrain(x),
          v = !g,
          b = Xc(n, g);
        return v ? h : b || u(w, f) ? w : u(h, f) ? h : f;
      })
      .map((x) => parseFloat(x.toFixed(3)));
  }
  function m() {
    if (t <= e + o) return [i.max];
    if (r === "keepSnaps") return s;
    const { min: x, max: g } = l;
    return s.slice(x, g);
  }
  return { snapsContained: a, scrollContainLimit: l };
}
function kE(e, t, n) {
  const r = t[0],
    o = n ? r - e : $t(t);
  return { limit: Pr(o, r) };
}
function PE(e, t, n, r) {
  const i = t.min + 0.1,
    s = t.max + 0.1,
    { reachedMin: l, reachedMax: a } = Pr(i, s);
  function u(m) {
    return m === 1 ? a(n.get()) : m === -1 ? l(n.get()) : !1;
  }
  function c(m) {
    if (!u(m)) return;
    const p = e * (m * -1);
    r.forEach((x) => x.add(p));
  }
  return { loop: c };
}
function NE(e) {
  const { max: t, length: n } = e;
  function r(i) {
    const s = i - t;
    return n ? s / -n : 0;
  }
  return { get: r };
}
function TE(e, t, n, r, o) {
  const { startEdge: i, endEdge: s } = e,
    { groupSlides: l } = o,
    a = d().map(t.measure),
    u = m(),
    c = p();
  function d() {
    return l(r)
      .map((g) => $t(g)[s] - g[0][i])
      .map(he);
  }
  function m() {
    return r.map((g) => n[i] - g[i]).map((g) => -he(g));
  }
  function p() {
    return l(u)
      .map((g) => g[0])
      .map((g, w) => g + a[w]);
  }
  return { snaps: u, snapsAligned: c };
}
function RE(e, t, n, r, o, i) {
  const { groupSlides: s } = o,
    { min: l, max: a } = r,
    u = c();
  function c() {
    const m = s(i),
      p = !e || t === "keepSnaps";
    return n.length === 1
      ? [i]
      : p
        ? m
        : m.slice(l, a).map((x, g, w) => {
            const h = !g,
              f = Xc(w, g);
            if (h) {
              const v = $t(w[0]) + 1;
              return rp(v);
            }
            if (f) {
              const v = Mi(i) - $t(w)[0] + 1;
              return rp(v, $t(w)[0]);
            }
            return x;
          });
  }
  return { slideRegistry: u };
}
function AE(e, t, n, r, o) {
  const { reachedAny: i, removeOffset: s, constrain: l } = r;
  function a(x) {
    return x.concat().sort((g, w) => he(g) - he(w))[0];
  }
  function u(x) {
    const g = e ? s(x) : l(x),
      w = t
        .map((f, v) => ({ diff: c(f - g, 0), index: v }))
        .sort((f, v) => he(f.diff) - he(v.diff)),
      { index: h } = w[0];
    return { index: h, distance: g };
  }
  function c(x, g) {
    const w = [x, x + n, x - n];
    if (!e) return x;
    if (!g) return a(w);
    const h = w.filter((f) => qc(f) === g);
    return h.length ? a(h) : $t(w) - n;
  }
  function d(x, g) {
    const w = t[x] - o.get(),
      h = c(w, g);
    return { index: x, distance: h };
  }
  function m(x, g) {
    const w = o.get() + x,
      { index: h, distance: f } = u(w),
      v = !e && i(w);
    if (!g || v) return { index: h, distance: x };
    const b = t[h] - f,
      C = x + c(b, 0);
    return { index: h, distance: C };
  }
  return { byDistance: m, byIndex: d, shortcut: c };
}
function jE(e, t, n, r, o, i, s) {
  function l(d) {
    const m = d.distance,
      p = d.index !== t.get();
    (i.add(m),
      m && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())),
      p && (n.set(t.get()), t.set(d.index), s.emit("select")));
  }
  function a(d, m) {
    const p = o.byDistance(d, m);
    l(p);
  }
  function u(d, m) {
    const p = t.clone().set(d),
      x = o.byIndex(p.get(), m);
    l(x);
  }
  return { distance: a, index: u };
}
function OE(e, t, n, r, o, i, s, l) {
  const a = { passive: !0, capture: !0 };
  let u = 0;
  function c(p) {
    if (!l) return;
    function x(g) {
      if (new Date().getTime() - u > 10) return;
      (s.emit("slideFocusStart"), (e.scrollLeft = 0));
      const f = n.findIndex((v) => v.includes(g));
      Yc(f) && (o.useDuration(0), r.index(f, 0), s.emit("slideFocus"));
    }
    (i.add(document, "keydown", d, !1),
      t.forEach((g, w) => {
        i.add(
          g,
          "focus",
          (h) => {
            (Dl(l) || l(p, h)) && x(w);
          },
          a,
        );
      }));
  }
  function d(p) {
    p.code === "Tab" && (u = new Date().getTime());
  }
  return { init: c };
}
function Uo(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(a) {
    t = s(a);
  }
  function o(a) {
    t += s(a);
  }
  function i(a) {
    t -= s(a);
  }
  function s(a) {
    return Yc(a) ? a : a.get();
  }
  return { get: n, set: r, add: o, subtract: i };
}
function mv(e, t) {
  const n = e.scroll === "x" ? s : l,
    r = t.style;
  let o = null,
    i = !1;
  function s(m) {
    return `translate3d(${m}px,0px,0px)`;
  }
  function l(m) {
    return `translate3d(0px,${m}px,0px)`;
  }
  function a(m) {
    if (i) return;
    const p = pE(e.direction(m));
    p !== o && ((r.transform = n(p)), (o = p));
  }
  function u(m) {
    i = !m;
  }
  function c() {
    i ||
      ((r.transform = ""),
      t.getAttribute("style") || t.removeAttribute("style"));
  }
  return { clear: c, to: a, toggleActive: u };
}
function _E(e, t, n, r, o, i, s, l, a) {
  const c = Si(o),
    d = Si(o).reverse(),
    m = h().concat(f());
  function p(k, P) {
    return k.reduce((A, j) => A - o[j], P);
  }
  function x(k, P) {
    return k.reduce((A, j) => (p(A, P) > 0 ? A.concat([j]) : A), []);
  }
  function g(k) {
    return i.map((P, A) => ({
      start: P - r[A] + 0.5 + k,
      end: P + t - 0.5 + k,
    }));
  }
  function w(k, P, A) {
    const j = g(P);
    return k.map((I) => {
      const L = A ? 0 : -n,
        H = A ? n : 0,
        M = A ? "end" : "start",
        W = j[I][M];
      return {
        index: I,
        loopPoint: W,
        slideLocation: Uo(-1),
        translate: mv(e, a[I]),
        target: () => (l.get() > W ? L : H),
      };
    });
  }
  function h() {
    const k = s[0],
      P = x(d, k);
    return w(P, n, !1);
  }
  function f() {
    const k = t - s[0] - 1,
      P = x(c, k);
    return w(P, -n, !0);
  }
  function v() {
    return m.every(({ index: k }) => {
      const P = c.filter((A) => A !== k);
      return p(P, t) <= 0.1;
    });
  }
  function b() {
    m.forEach((k) => {
      const { target: P, translate: A, slideLocation: j } = k,
        I = P();
      I !== j.get() && (A.to(I), j.set(I));
    });
  }
  function C() {
    m.forEach((k) => k.translate.clear());
  }
  return { canLoop: v, clear: C, loop: b, loopPoints: m };
}
function ME(e, t, n) {
  let r,
    o = !1;
  function i(a) {
    if (!n) return;
    function u(c) {
      for (const d of c)
        if (d.type === "childList") {
          (a.reInit(), t.emit("slidesChanged"));
          break;
        }
    }
    ((r = new MutationObserver((c) => {
      o || ((Dl(n) || n(a, c)) && u(c));
    })),
      r.observe(e, { childList: !0 }));
  }
  function s() {
    (r && r.disconnect(), (o = !0));
  }
  return { init: i, destroy: s };
}
function LE(e, t, n, r) {
  const o = {};
  let i = null,
    s = null,
    l,
    a = !1;
  function u() {
    ((l = new IntersectionObserver(
      (x) => {
        a ||
          (x.forEach((g) => {
            const w = t.indexOf(g.target);
            o[w] = g;
          }),
          (i = null),
          (s = null),
          n.emit("slidesInView"));
      },
      { root: e.parentElement, threshold: r },
    )),
      t.forEach((x) => l.observe(x)));
  }
  function c() {
    (l && l.disconnect(), (a = !0));
  }
  function d(x) {
    return bi(o).reduce((g, w) => {
      const h = parseInt(w),
        { isIntersecting: f } = o[h];
      return (((x && f) || (!x && !f)) && g.push(h), g);
    }, []);
  }
  function m(x = !0) {
    if (x && i) return i;
    if (!x && s) return s;
    const g = d(x);
    return (x && (i = g), x || (s = g), g);
  }
  return { init: u, destroy: c, get: m };
}
function DE(e, t, n, r, o, i) {
  const { measureSize: s, startEdge: l, endEdge: a } = e,
    u = n[0] && o,
    c = x(),
    d = g(),
    m = n.map(s),
    p = w();
  function x() {
    if (!u) return 0;
    const f = n[0];
    return he(t[l] - f[l]);
  }
  function g() {
    if (!u) return 0;
    const f = i.getComputedStyle($t(r));
    return parseFloat(f.getPropertyValue(`margin-${a}`));
  }
  function w() {
    return n
      .map((f, v, b) => {
        const C = !v,
          E = Xc(b, v);
        return C ? m[v] + c : E ? m[v] + d : b[v + 1][l] - f[l];
      })
      .map(he);
  }
  return { slideSizes: m, slideSizesWithGaps: p, startGap: c, endGap: d };
}
function IE(e, t, n, r, o, i, s, l, a) {
  const { startEdge: u, endEdge: c, direction: d } = e,
    m = Yc(n);
  function p(h, f) {
    return Si(h)
      .filter((v) => v % f === 0)
      .map((v) => h.slice(v, v + f));
  }
  function x(h) {
    return h.length
      ? Si(h)
          .reduce((f, v, b) => {
            const C = $t(f) || 0,
              E = C === 0,
              k = v === Mi(h),
              P = o[u] - i[C][u],
              A = o[u] - i[v][c],
              j = !r && E ? d(s) : 0,
              I = !r && k ? d(l) : 0,
              L = he(A - I - (P + j));
            return (b && L > t + a && f.push(v), k && f.push(h.length), f);
          }, [])
          .map((f, v, b) => {
            const C = Math.max(b[v - 1] || 0);
            return h.slice(C, f);
          })
      : [];
  }
  function g(h) {
    return m ? p(h, n) : x(h);
  }
  return { groupSlides: g };
}
function zE(e, t, n, r, o, i, s) {
  const {
      align: l,
      axis: a,
      direction: u,
      startIndex: c,
      loop: d,
      duration: m,
      dragFree: p,
      dragThreshold: x,
      inViewThreshold: g,
      slidesToScroll: w,
      skipSnaps: h,
      containScroll: f,
      watchResize: v,
      watchSlides: b,
      watchDrag: C,
      watchFocus: E,
    } = i,
    k = 2,
    P = xE(),
    A = P.measure(t),
    j = n.map(P.measure),
    I = gE(a, u),
    L = I.measureSize(A),
    H = wE(L),
    M = hE(l, L),
    W = !d && !!f,
    B = d || !!f,
    {
      slideSizes: V,
      slideSizesWithGaps: N,
      startGap: R,
      endGap: D,
    } = DE(I, A, j, n, B, o),
    U = IE(I, L, w, d, A, j, R, D, k),
    { snaps: $, snapsAligned: G } = TE(I, M, A, j, U),
    Q = -$t($) + $t(N),
    { snapsContained: ie, scrollContainLimit: ve } = EE(L, Q, G, f, k),
    Y = W ? ie : G,
    { limit: ye } = kE(Q, Y, d),
    je = hv(Mi(Y), c, d),
    ke = je.clone(),
    te = Si(n),
    F = ({
      dragHandler: kt,
      scrollBody: Po,
      scrollBounds: Ar,
      options: { loop: Cn },
    }) => {
      (Cn || Ar.constrain(kt.pointerDown()), Po.seek());
    },
    J = (
      {
        scrollBody: kt,
        translate: Po,
        location: Ar,
        offsetLocation: Cn,
        previousLocation: En,
        scrollLooper: Ii,
        slideLooper: kn,
        dragHandler: Ul,
        animation: Vl,
        eventHandler: No,
        scrollBounds: zi,
        options: { loop: Fi },
      },
      jr,
    ) => {
      const Pt = kt.settled(),
        Hl = !zi.shouldConstrain(),
        K = Fi ? Pt : Pt && Hl,
        re = K && !Ul.pointerDown();
      re && Vl.stop();
      const se = Ar.get() * jr + En.get() * (1 - jr);
      (Cn.set(se),
        Fi && (Ii.loop(kt.direction()), kn.loop()),
        Po.to(Cn.get()),
        re && No.emit("settle"),
        K || No.emit("scroll"));
    },
    ae = mE(
      r,
      o,
      () => F(ko),
      (kt) => J(ko, kt),
    ),
    Ne = 0.68,
    Ve = Y[je.get()],
    it = Uo(Ve),
    st = Uo(Ve),
    He = Uo(Ve),
    Wt = Uo(Ve),
    Ct = bE(it, He, st, Wt, m, Ne),
    Rr = AE(d, Y, Q, ye, Wt),
    Et = jE(ae, je, ke, Ct, Rr, Wt, s),
    Li = NE(ye),
    Di = Ci(),
    Xe = LE(t, n, s, g),
    { slideRegistry: ln } = RE(W, f, Y, ve, U, te),
    Bl = OE(e, n, ln, Et, Ct, Di, s, E),
    ko = {
      ownerDocument: r,
      ownerWindow: o,
      eventHandler: s,
      containerRect: A,
      slideRects: j,
      animation: ae,
      axis: I,
      dragHandler: vE(
        I,
        e,
        r,
        o,
        Wt,
        yE(I, o),
        it,
        ae,
        Et,
        Ct,
        Rr,
        je,
        s,
        H,
        p,
        x,
        h,
        Ne,
        C,
      ),
      eventStore: Di,
      percentOfView: H,
      index: je,
      indexPrevious: ke,
      limit: ye,
      location: it,
      offsetLocation: He,
      previousLocation: st,
      options: i,
      resizeHandler: SE(t, s, o, n, I, v, P),
      scrollBody: Ct,
      scrollBounds: CE(ye, He, Wt, Ct, H),
      scrollLooper: PE(Q, ye, He, [it, He, st, Wt]),
      scrollProgress: Li,
      scrollSnapList: Y.map(Li.get),
      scrollSnaps: Y,
      scrollTarget: Rr,
      scrollTo: Et,
      slideLooper: _E(I, L, Q, V, N, $, Y, He, n),
      slideFocus: Bl,
      slidesHandler: ME(t, s, b),
      slidesInView: Xe,
      slideIndexes: te,
      slideRegistry: ln,
      slidesToScroll: U,
      target: Wt,
      translate: mv(I, t),
    };
  return ko;
}
function FE() {
  let e = {},
    t;
  function n(u) {
    t = u;
  }
  function r(u) {
    return e[u] || [];
  }
  function o(u) {
    return (r(u).forEach((c) => c(t, u)), a);
  }
  function i(u, c) {
    return ((e[u] = r(u).concat([c])), a);
  }
  function s(u, c) {
    return ((e[u] = r(u).filter((d) => d !== c)), a);
  }
  function l() {
    e = {};
  }
  const a = { init: n, emit: o, off: s, on: i, clear: l };
  return a;
}
const $E = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0,
};
function BE(e) {
  function t(i, s) {
    return pv(i, s || {});
  }
  function n(i) {
    const s = i.breakpoints || {},
      l = bi(s)
        .filter((a) => e.matchMedia(a).matches)
        .map((a) => s[a])
        .reduce((a, u) => t(a, u), {});
    return t(i, l);
  }
  function r(i) {
    return i
      .map((s) => bi(s.breakpoints || {}))
      .reduce((s, l) => s.concat(l), [])
      .map(e.matchMedia);
  }
  return { mergeOptions: t, optionsAtMedia: n, optionsMediaQueries: r };
}
function UE(e) {
  let t = [];
  function n(i, s) {
    return (
      (t = s.filter(({ options: l }) => e.optionsAtMedia(l).active !== !1)),
      t.forEach((l) => l.init(i, e)),
      s.reduce((l, a) => Object.assign(l, { [a.name]: a }), {})
    );
  }
  function r() {
    t = t.filter((i) => i.destroy());
  }
  return { init: n, destroy: r };
}
function nl(e, t, n) {
  const r = e.ownerDocument,
    o = r.defaultView,
    i = BE(o),
    s = UE(i),
    l = Ci(),
    a = FE(),
    { mergeOptions: u, optionsAtMedia: c, optionsMediaQueries: d } = i,
    { on: m, off: p, emit: x } = a,
    g = I;
  let w = !1,
    h,
    f = u($E, nl.globalOptions),
    v = u(f),
    b = [],
    C,
    E,
    k;
  function P() {
    const { container: te, slides: F } = v;
    E = (Ou(te) ? e.querySelector(te) : te) || e.children[0];
    const ae = Ou(F) ? E.querySelectorAll(F) : F;
    k = [].slice.call(ae || E.children);
  }
  function A(te) {
    const F = zE(e, E, k, r, o, te, a);
    if (te.loop && !F.slideLooper.canLoop()) {
      const J = Object.assign({}, te, { loop: !1 });
      return A(J);
    }
    return F;
  }
  function j(te, F) {
    w ||
      ((f = u(f, te)),
      (v = c(f)),
      (b = F || b),
      P(),
      (h = A(v)),
      d([f, ...b.map(({ options: J }) => J)]).forEach((J) =>
        l.add(J, "change", I),
      ),
      v.active &&
        (h.translate.to(h.location.get()),
        h.animation.init(),
        h.slidesInView.init(),
        h.slideFocus.init(ke),
        h.eventHandler.init(ke),
        h.resizeHandler.init(ke),
        h.slidesHandler.init(ke),
        h.options.loop && h.slideLooper.loop(),
        E.offsetParent && k.length && h.dragHandler.init(ke),
        (C = s.init(ke, b))));
  }
  function I(te, F) {
    const J = U();
    (L(), j(u({ startIndex: J }, te), F), a.emit("reInit"));
  }
  function L() {
    (h.dragHandler.destroy(),
      h.eventStore.clear(),
      h.translate.clear(),
      h.slideLooper.clear(),
      h.resizeHandler.destroy(),
      h.slidesHandler.destroy(),
      h.slidesInView.destroy(),
      h.animation.destroy(),
      s.destroy(),
      l.clear());
  }
  function H() {
    w || ((w = !0), l.clear(), L(), a.emit("destroy"), a.clear());
  }
  function M(te, F, J) {
    !v.active ||
      w ||
      (h.scrollBody.useBaseFriction().useDuration(F === !0 ? 0 : v.duration),
      h.scrollTo.index(te, J || 0));
  }
  function W(te) {
    const F = h.index.add(1).get();
    M(F, te, -1);
  }
  function B(te) {
    const F = h.index.add(-1).get();
    M(F, te, 1);
  }
  function V() {
    return h.index.add(1).get() !== U();
  }
  function N() {
    return h.index.add(-1).get() !== U();
  }
  function R() {
    return h.scrollSnapList;
  }
  function D() {
    return h.scrollProgress.get(h.offsetLocation.get());
  }
  function U() {
    return h.index.get();
  }
  function $() {
    return h.indexPrevious.get();
  }
  function G() {
    return h.slidesInView.get();
  }
  function Q() {
    return h.slidesInView.get(!1);
  }
  function ie() {
    return C;
  }
  function ve() {
    return h;
  }
  function Y() {
    return e;
  }
  function ye() {
    return E;
  }
  function je() {
    return k;
  }
  const ke = {
    canScrollNext: V,
    canScrollPrev: N,
    containerNode: ye,
    internalEngine: ve,
    destroy: H,
    off: p,
    on: m,
    emit: x,
    plugins: ie,
    previousScrollSnap: $,
    reInit: g,
    rootNode: Y,
    scrollNext: W,
    scrollPrev: B,
    scrollProgress: D,
    scrollSnapList: R,
    scrollTo: M,
    selectedScrollSnap: U,
    slideNodes: je,
    slidesInView: G,
    slidesNotInView: Q,
  };
  return (j(t, n), setTimeout(() => a.emit("init"), 0), ke);
}
nl.globalOptions = void 0;
function Zc(e = {}, t = []) {
  const n = S.useRef(e),
    r = S.useRef(t),
    [o, i] = S.useState(),
    [s, l] = S.useState(),
    a = S.useCallback(() => {
      o && o.reInit(n.current, r.current);
    }, [o]);
  return (
    S.useEffect(() => {
      Gc(n.current, e) || ((n.current = e), a());
    }, [e, a]),
    S.useEffect(() => {
      dE(r.current, t) || ((r.current = t), a());
    }, [t, a]),
    S.useEffect(() => {
      if (cE() && s) {
        nl.globalOptions = Zc.globalOptions;
        const u = nl(s, n.current, r.current);
        return (i(u), () => u.destroy());
      } else i(void 0);
    }, [s, i]),
    [l, o]
  );
}
Zc.globalOptions = void 0;
const gv = S.createContext(null);
function Il() {
  const e = S.useContext(gv);
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const vv = S.forwardRef(
  (
    {
      orientation: e = "horizontal",
      opts: t,
      setApi: n,
      plugins: r,
      className: o,
      children: i,
      ...s
    },
    l,
  ) => {
    const [a, u] = Zc({ ...t, axis: e === "horizontal" ? "x" : "y" }, r),
      [c, d] = S.useState(!1),
      [m, p] = S.useState(!1),
      x = S.useCallback((f) => {
        f && (d(f.canScrollPrev()), p(f.canScrollNext()));
      }, []),
      g = S.useCallback(() => {
        u == null || u.scrollPrev();
      }, [u]),
      w = S.useCallback(() => {
        u == null || u.scrollNext();
      }, [u]),
      h = S.useCallback(
        (f) => {
          f.key === "ArrowLeft"
            ? (f.preventDefault(), g())
            : f.key === "ArrowRight" && (f.preventDefault(), w());
        },
        [g, w],
      );
    return (
      S.useEffect(() => {
        !u || !n || n(u);
      }, [u, n]),
      S.useEffect(() => {
        if (u)
          return (
            x(u),
            u.on("reInit", x),
            u.on("select", x),
            () => {
              u == null || u.off("select", x);
            }
          );
      }, [u, x]),
      y.jsx(gv.Provider, {
        value: {
          carouselRef: a,
          api: u,
          opts: t,
          orientation:
            e ||
            ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: g,
          scrollNext: w,
          canScrollPrev: c,
          canScrollNext: m,
        },
        children: y.jsx("div", {
          ref: l,
          onKeyDownCapture: h,
          className: Se("relative", o),
          role: "region",
          "aria-roledescription": "carousel",
          ...s,
          children: i,
        }),
      })
    );
  },
);
vv.displayName = "Carousel";
const yv = S.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = Il();
  return y.jsx("div", {
    ref: r,
    className: "",
    children: y.jsx("div", {
      ref: n,
      className: Se("flex", o === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t,
    }),
  });
});
yv.displayName = "CarouselContent";
const xv = S.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = Il();
  return y.jsx("div", {
    ref: n,
    role: "group",
    "aria-roledescription": "slide",
    className: Se(
      "min-w-0 shrink-0 grow-0 basis-full",
      r === "horizontal" ? "pl-4" : "pt-4",
      e,
    ),
    ...t,
  });
});
xv.displayName = "CarouselItem";
const wv = S.forwardRef(
  ({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
    const { orientation: i, scrollPrev: s, canScrollPrev: l } = Il();
    return y.jsxs(on, {
      ref: o,
      variant: t,
      size: n,
      className: Se(
        "absolute h-8 w-8 rounded-full",
        i === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e,
      ),
      disabled: !l,
      onClick: s,
      ...r,
      children: [
        y.jsx(mx, { className: "h-4 w-4" }),
        y.jsx("span", { className: "sr-only", children: "Previous slide" }),
      ],
    });
  },
);
wv.displayName = "CarouselPrevious";
const Sv = S.forwardRef(
  ({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
    const { orientation: i, scrollNext: s, canScrollNext: l } = Il();
    return y.jsxs(on, {
      ref: o,
      variant: t,
      size: n,
      className: Se(
        "absolute h-8 w-8 rounded-full",
        i === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e,
      ),
      disabled: !l,
      onClick: s,
      ...r,
      children: [
        y.jsx(gx, { className: "h-4 w-4" }),
        y.jsx("span", { className: "sr-only", children: "Next slide" }),
      ],
    });
  },
);
Sv.displayName = "CarouselNext";
const VE = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Visit White Desert gave us the best Dubai experience! The sunset views were breathtaking, and our guide was so knowledgeable. The BBQ dinner under the stars was absolutely magical.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Mohammed Al-Rashid",
      location: "London, UK",
      rating: 5,
      text: "Best desert safari in Dubai by far! The dune bashing was thrilling, and the belly dance show was mesmerizing. Highly recommend the VIP package – worth every dirham!",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Emma Chen",
      location: "Sydney, Australia",
      rating: 5,
      text: "Perfect for families! Our kids loved the camel ride and sandboarding. The team made sure everyone was comfortable. Will definitely book again on our next Dubai trip!",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      name: "Raj Patel",
      location: "Mumbai, India",
      rating: 5,
      text: "Incredible experience from start to finish! The hotel pickup was on time, the desert camp was beautiful, and the henna painting was a lovely touch. Thank you Visit White Desert!",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      name: "Lisa Mueller",
      location: "Berlin, Germany",
      rating: 5,
      text: "The overnight camping was a dream come true! Sleeping under the Dubai stars, waking up to the most beautiful sunrise over the dunes. An unforgettable experience!",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    },
    {
      name: "Ahmed Hassan",
      location: "Cairo, Egypt",
      rating: 5,
      text: "As someone from a desert country, I was skeptical, but Visit White Desert exceeded all expectations. The Dubai desert has its own unique beauty and they showcase it perfectly!",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
  ],
  HE = () =>
    y.jsx("section", {
      id: "testimonials",
      className: "py-20 px-4",
      children: y.jsxs("div", {
        className: "max-w-7xl mx-auto",
        children: [
          y.jsxs("div", {
            className: "text-center mb-12",
            children: [
              y.jsx("span", {
                className:
                  "text-amber-600 font-semibold text-sm uppercase tracking-wider",
                children: "Testimonials",
              }),
              y.jsx("h2", {
                className: "text-4xl font-bold mt-2 mb-4",
                children: "What Our Guests Say",
              }),
              y.jsx("p", {
                className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                children:
                  "Real stories from travelers who've experienced Dubai's desert magic with us.",
              }),
            ],
          }),
          y.jsxs(vv, {
            opts: { align: "start", loop: !0 },
            className: "w-full max-w-6xl mx-auto",
            children: [
              y.jsx(yv, {
                className: "-ml-4",
                children: VE.map((e, t) =>
                  y.jsx(
                    xv,
                    {
                      className: "pl-4 md:basis-1/2 lg:basis-1/3",
                      children: y.jsx(Ml, {
                        className: "border-0 shadow-lg relative h-full",
                        children: y.jsxs(Ll, {
                          className: "p-6 pt-10",
                          children: [
                            y.jsx("div", {
                              className: "absolute -top-4 left-6",
                              children: y.jsx("div", {
                                className:
                                  "w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center",
                                children: y.jsx(Tx, {
                                  className: "w-5 h-5 text-white",
                                }),
                              }),
                            }),
                            y.jsxs("p", {
                              className:
                                "text-muted-foreground mb-6 italic line-clamp-4",
                              children: ['"', e.text, '"'],
                            }),
                            y.jsxs("div", {
                              className: "flex items-center gap-4",
                              children: [
                                y.jsx("img", {
                                  src: e.avatar,
                                  alt: e.name,
                                  className:
                                    "w-12 h-12 rounded-full object-cover",
                                }),
                                y.jsxs("div", {
                                  children: [
                                    y.jsx("div", {
                                      className: "font-semibold",
                                      children: e.name,
                                    }),
                                    y.jsx("div", {
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: e.location,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            y.jsx("div", {
                              className: "flex gap-1 mt-4",
                              children: Array.from({ length: e.rating }).map(
                                (n, r) =>
                                  y.jsx(
                                    jx,
                                    {
                                      className:
                                        "w-4 h-4 fill-amber-400 text-amber-400",
                                    },
                                    r,
                                  ),
                              ),
                            }),
                          ],
                        }),
                      }),
                    },
                    t,
                  ),
                ),
              }),
              y.jsxs("div", {
                className: "flex justify-center gap-4 mt-8",
                children: [
                  y.jsx(wv, { className: "static translate-y-0" }),
                  y.jsx(Sv, { className: "static translate-y-0" }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
var zl = "Collapsible",
  [WE, bv] = So(zl),
  [QE, Jc] = WE(zl),
  Cv = S.forwardRef((e, t) => {
    const {
        __scopeCollapsible: n,
        open: r,
        defaultOpen: o,
        disabled: i,
        onOpenChange: s,
        ...l
      } = e,
      [a, u] = Sl({ prop: r, defaultProp: o ?? !1, onChange: s, caller: zl });
    return y.jsx(QE, {
      scope: n,
      disabled: i,
      contentId: gg(),
      open: a,
      onOpenToggle: S.useCallback(() => u((c) => !c), [u]),
      children: y.jsx(Ae.div, {
        "data-state": td(a),
        "data-disabled": i ? "" : void 0,
        ...l,
        ref: t,
      }),
    });
  });
Cv.displayName = zl;
var Ev = "CollapsibleTrigger",
  kv = S.forwardRef((e, t) => {
    const { __scopeCollapsible: n, ...r } = e,
      o = Jc(Ev, n);
    return y.jsx(Ae.button, {
      type: "button",
      "aria-controls": o.contentId,
      "aria-expanded": o.open || !1,
      "data-state": td(o.open),
      "data-disabled": o.disabled ? "" : void 0,
      disabled: o.disabled,
      ...r,
      ref: t,
      onClick: Ce(e.onClick, o.onOpenToggle),
    });
  });
kv.displayName = Ev;
var ed = "CollapsibleContent",
  Pv = S.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = Jc(ed, e.__scopeCollapsible);
    return y.jsx(wl, {
      present: n || o.open,
      children: ({ present: i }) => y.jsx(KE, { ...r, ref: t, present: i }),
    });
  });
Pv.displayName = ed;
var KE = S.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...i } = e,
    s = Jc(ed, n),
    [l, a] = S.useState(r),
    u = S.useRef(null),
    c = pt(t, u),
    d = S.useRef(0),
    m = d.current,
    p = S.useRef(0),
    x = p.current,
    g = s.open || l,
    w = S.useRef(g),
    h = S.useRef(void 0);
  return (
    S.useEffect(() => {
      const f = requestAnimationFrame(() => (w.current = !1));
      return () => cancelAnimationFrame(f);
    }, []),
    nn(() => {
      const f = u.current;
      if (f) {
        ((h.current = h.current || {
          transitionDuration: f.style.transitionDuration,
          animationName: f.style.animationName,
        }),
          (f.style.transitionDuration = "0s"),
          (f.style.animationName = "none"));
        const v = f.getBoundingClientRect();
        ((d.current = v.height),
          (p.current = v.width),
          w.current ||
            ((f.style.transitionDuration = h.current.transitionDuration),
            (f.style.animationName = h.current.animationName)),
          a(r));
      }
    }, [s.open, r]),
    y.jsx(Ae.div, {
      "data-state": td(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !g,
      ...i,
      ref: c,
      style: {
        "--radix-collapsible-content-height": m ? `${m}px` : void 0,
        "--radix-collapsible-content-width": x ? `${x}px` : void 0,
        ...e.style,
      },
      children: g && o,
    })
  );
});
function td(e) {
  return e ? "open" : "closed";
}
var GE = Cv,
  YE = kv,
  qE = Pv,
  XE = S.createContext(void 0);
function ZE(e) {
  const t = S.useContext(XE);
  return e || t || "ltr";
}
var Ht = "Accordion",
  JE = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
  [nd, e2, t2] = Am(Ht),
  [Fl, T2] = So(Ht, [t2, bv]),
  rd = bv(),
  Nv = O.forwardRef((e, t) => {
    const { type: n, ...r } = e,
      o = r,
      i = r;
    return y.jsx(nd.Provider, {
      scope: e.__scopeAccordion,
      children:
        n === "multiple"
          ? y.jsx(i2, { ...i, ref: t })
          : y.jsx(o2, { ...o, ref: t }),
    });
  });
Nv.displayName = Ht;
var [Tv, n2] = Fl(Ht),
  [Rv, r2] = Fl(Ht, { collapsible: !1 }),
  o2 = O.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: r,
        onValueChange: o = () => {},
        collapsible: i = !1,
        ...s
      } = e,
      [l, a] = Sl({ prop: n, defaultProp: r ?? "", onChange: o, caller: Ht });
    return y.jsx(Tv, {
      scope: e.__scopeAccordion,
      value: O.useMemo(() => (l ? [l] : []), [l]),
      onItemOpen: a,
      onItemClose: O.useCallback(() => i && a(""), [i, a]),
      children: y.jsx(Rv, {
        scope: e.__scopeAccordion,
        collapsible: i,
        children: y.jsx(Av, { ...s, ref: t }),
      }),
    });
  }),
  i2 = O.forwardRef((e, t) => {
    const { value: n, defaultValue: r, onValueChange: o = () => {}, ...i } = e,
      [s, l] = Sl({ prop: n, defaultProp: r ?? [], onChange: o, caller: Ht }),
      a = O.useCallback((c) => l((d = []) => [...d, c]), [l]),
      u = O.useCallback((c) => l((d = []) => d.filter((m) => m !== c)), [l]);
    return y.jsx(Tv, {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: a,
      onItemClose: u,
      children: y.jsx(Rv, {
        scope: e.__scopeAccordion,
        collapsible: !0,
        children: y.jsx(Av, { ...i, ref: t }),
      }),
    });
  }),
  [s2, $l] = Fl(Ht),
  Av = O.forwardRef((e, t) => {
    const {
        __scopeAccordion: n,
        disabled: r,
        dir: o,
        orientation: i = "vertical",
        ...s
      } = e,
      l = O.useRef(null),
      a = pt(l, t),
      u = e2(n),
      d = ZE(o) === "ltr",
      m = Ce(e.onKeyDown, (p) => {
        var P;
        if (!JE.includes(p.key)) return;
        const x = p.target,
          g = u().filter((A) => {
            var j;
            return !((j = A.ref.current) != null && j.disabled);
          }),
          w = g.findIndex((A) => A.ref.current === x),
          h = g.length;
        if (w === -1) return;
        p.preventDefault();
        let f = w;
        const v = 0,
          b = h - 1,
          C = () => {
            ((f = w + 1), f > b && (f = v));
          },
          E = () => {
            ((f = w - 1), f < v && (f = b));
          };
        switch (p.key) {
          case "Home":
            f = v;
            break;
          case "End":
            f = b;
            break;
          case "ArrowRight":
            i === "horizontal" && (d ? C() : E());
            break;
          case "ArrowDown":
            i === "vertical" && C();
            break;
          case "ArrowLeft":
            i === "horizontal" && (d ? E() : C());
            break;
          case "ArrowUp":
            i === "vertical" && E();
            break;
        }
        const k = f % h;
        (P = g[k].ref.current) == null || P.focus();
      });
    return y.jsx(s2, {
      scope: n,
      disabled: r,
      direction: o,
      orientation: i,
      children: y.jsx(nd.Slot, {
        scope: n,
        children: y.jsx(Ae.div, {
          ...s,
          "data-orientation": i,
          ref: a,
          onKeyDown: r ? void 0 : m,
        }),
      }),
    });
  }),
  rl = "AccordionItem",
  [l2, od] = Fl(rl),
  jv = O.forwardRef((e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e,
      i = $l(rl, n),
      s = n2(rl, n),
      l = rd(n),
      a = gg(),
      u = (r && s.value.includes(r)) || !1,
      c = i.disabled || e.disabled;
    return y.jsx(l2, {
      scope: n,
      open: u,
      disabled: c,
      triggerId: a,
      children: y.jsx(GE, {
        "data-orientation": i.orientation,
        "data-state": Iv(u),
        ...l,
        ...o,
        ref: t,
        disabled: c,
        open: u,
        onOpenChange: (d) => {
          d ? s.onItemOpen(r) : s.onItemClose(r);
        },
      }),
    });
  });
jv.displayName = rl;
var Ov = "AccordionHeader",
  _v = O.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...r } = e,
      o = $l(Ht, n),
      i = od(Ov, n);
    return y.jsx(Ae.h3, {
      "data-orientation": o.orientation,
      "data-state": Iv(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      ...r,
      ref: t,
    });
  });
_v.displayName = Ov;
var Mu = "AccordionTrigger",
  Mv = O.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...r } = e,
      o = $l(Ht, n),
      i = od(Mu, n),
      s = r2(Mu, n),
      l = rd(n);
    return y.jsx(nd.ItemSlot, {
      scope: n,
      children: y.jsx(YE, {
        "aria-disabled": (i.open && !s.collapsible) || void 0,
        "data-orientation": o.orientation,
        id: i.triggerId,
        ...l,
        ...r,
        ref: t,
      }),
    });
  });
Mv.displayName = Mu;
var Lv = "AccordionContent",
  Dv = O.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...r } = e,
      o = $l(Ht, n),
      i = od(Lv, n),
      s = rd(n);
    return y.jsx(qE, {
      role: "region",
      "aria-labelledby": i.triggerId,
      "data-orientation": o.orientation,
      ...s,
      ...r,
      ref: t,
      style: {
        "--radix-accordion-content-height":
          "var(--radix-collapsible-content-height)",
        "--radix-accordion-content-width":
          "var(--radix-collapsible-content-width)",
        ...e.style,
      },
    });
  });
Dv.displayName = Lv;
function Iv(e) {
  return e ? "open" : "closed";
}
var a2 = Nv,
  u2 = jv,
  c2 = _v,
  zv = Mv,
  Fv = Dv;
const d2 = a2,
  $v = S.forwardRef(({ className: e, ...t }, n) =>
    y.jsx(u2, { ref: n, className: Se("border-b", e), ...t }),
  );
$v.displayName = "AccordionItem";
const Bv = S.forwardRef(({ className: e, children: t, ...n }, r) =>
  y.jsx(c2, {
    className: "flex",
    children: y.jsxs(zv, {
      ref: r,
      className: Se(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        e,
      ),
      ...n,
      children: [
        t,
        y.jsx(wx, {
          className: "h-4 w-4 shrink-0 transition-transform duration-200",
        }),
      ],
    }),
  }),
);
Bv.displayName = zv.displayName;
const Uv = S.forwardRef(({ className: e, children: t, ...n }, r) =>
  y.jsx(Fv, {
    ref: r,
    className:
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: y.jsx("div", { className: Se("pb-4 pt-0", e), children: t }),
  }),
);
Uv.displayName = Fv.displayName;
const f2 = [
    {
      question: "What should I wear for the Dubai desert safari?",
      answer:
        "We recommend wearing comfortable, loose-fitting clothing. Light colors are best as they reflect heat. Bring sunglasses, a hat, and sunscreen. For evening safaris, consider bringing a light jacket as Dubai desert temperatures can drop after sunset.",
    },
    {
      question: "Is the dune bashing safe for children?",
      answer:
        "Yes, our dune bashing is conducted by Dubai-licensed professional drivers with years of experience. However, we recommend that children be at least 4 years old. Pregnant women and people with back problems should opt for a gentler ride or skip dune bashing.",
    },
    {
      question: "What's included in Visit White Desert packages?",
      answer:
        "All packages include hotel pickup and drop-off from anywhere in Dubai, professional guide, refreshments, and activities as listed. Premium packages include BBQ dinner, belly dance show, Tanoura dance, henna painting, and additional activities like camel riding and sandboarding.",
    },
    {
      question: "Do you provide hotel pickup from all Dubai locations?",
      answer:
        "Yes! We provide complimentary pickup and drop-off from all hotels, residences, and major landmarks across Dubai, Sharjah, and Ajman. Just share your location via WhatsApp and we'll be there!",
    },
    {
      question: "What's the best time for a Dubai desert safari?",
      answer:
        "The best season is from October to April when temperatures are pleasant. Evening safaris (3-4 PM departure) are most popular as you can enjoy the magical Dubai sunset. Morning safaris offer cooler temperatures and unique lighting for photography.",
    },
    {
      question: "How do I book and what's the cancellation policy?",
      answer:
        "Simply message us on WhatsApp for instant booking! We require 24-hour advance booking. Free cancellation is available up to 24 hours before the tour. For same-day bookings, contact us directly on WhatsApp.",
    },
  ],
  p2 = () =>
    y.jsx("section", {
      id: "faq",
      className: "py-20 px-4 bg-muted/30",
      children: y.jsxs("div", {
        className: "max-w-3xl mx-auto",
        children: [
          y.jsxs("div", {
            className: "text-center mb-12",
            children: [
              y.jsx("span", {
                className:
                  "text-amber-600 font-semibold text-sm uppercase tracking-wider",
                children: "FAQ",
              }),
              y.jsx("h2", {
                className: "text-4xl font-bold mt-2 mb-4",
                children: "Frequently Asked Questions",
              }),
              y.jsx("p", {
                className: "text-xl text-muted-foreground",
                children:
                  "Everything you need to know about your Dubai desert adventure.",
              }),
            ],
          }),
          y.jsx(d2, {
            type: "single",
            collapsible: !0,
            className: "space-y-4",
            children: f2.map((e, t) =>
              y.jsxs(
                $v,
                {
                  value: `item-${t}`,
                  className: "bg-background rounded-lg px-6 border shadow-sm",
                  children: [
                    y.jsx(Bv, {
                      className: "text-left font-semibold hover:no-underline",
                      children: e.question,
                    }),
                    y.jsx(Uv, {
                      className: "text-muted-foreground",
                      children: e.answer,
                    }),
                  ],
                },
                t,
              ),
            ),
          }),
        ],
      }),
    }),
  op = "971501234567",
  h2 =
    "Hi! I'm interested in booking a Dubai Desert Safari with Visit White Desert. Can you help me?",
  m2 = () => {
    const e = () => {
      const t = `https://wa.me/${op}?text=${encodeURIComponent(h2)}`;
      window.open(t, "_blank");
    };
    return y.jsxs("section", {
      id: "booking",
      className: "py-20 px-4 relative overflow-hidden",
      children: [
        y.jsx("div", {
          className: "absolute inset-0 bg-cover bg-center",
          style: {
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=1920&q=80')",
          },
        }),
        y.jsxs("div", {
          className: "relative z-10 max-w-4xl mx-auto text-center text-white",
          children: [
            y.jsx("h2", {
              className: "text-4xl md:text-5xl font-bold mb-6",
              children: "Ready for Your Dubai Desert Adventure?",
            }),
            y.jsx("p", {
              className: "text-xl text-white/80 mb-8 max-w-2xl mx-auto",
              children:
                "Book with Visit White Desert today and get 15% off on all packages! Limited time offer.",
            }),
            y.jsxs("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              children: [
                y.jsxs(on, {
                  onClick: e,
                  size: "lg",
                  className:
                    "bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 text-lg",
                  children: [
                    y.jsx(Mc, { className: "mr-2 w-5 h-5" }),
                    "Book via WhatsApp",
                  ],
                }),
                y.jsxs(on, {
                  size: "lg",
                  variant: "outline",
                  className:
                    "border-white text-white hover:bg-white/10 px-8 py-6 text-lg",
                  onClick: () => window.open(`tel:+${op}`, "_self"),
                  children: [
                    y.jsx(Px, { className: "mr-2 w-5 h-5" }),
                    "Call Us Now",
                  ],
                }),
              ],
            }),
            y.jsx("p", {
              className: "mt-8 text-white/60 text-sm",
              children:
                "⭐ 4.9/5 rating from 10,000+ happy travelers • TripAdvisor Travellers' Choice",
            }),
          ],
        }),
      ],
    });
  },
  g2 = [
    {
      id: "morning",
      name: "Morning Desert Safari",
      price: 150,
      duration: "4 Hours",
      description:
        "Start your day with an exhilarating Dubai desert adventure as the sun rises over the golden dunes.",
      features: [
        "Dune bashing in Land Cruiser",
        "Camel ride experience",
        "Sandboarding on dunes",
        "Arabic coffee & dates",
        "Hotel pickup & drop-off",
      ],
      image:
        "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&q=80",
    },
    {
      id: "evening",
      name: "Evening Desert Safari",
      price: 200,
      duration: "6 Hours",
      description:
        "Experience the magic of Dubai's sunset in the desert with dinner and live entertainment.",
      features: [
        "Thrilling dune bashing",
        "Stunning sunset views",
        "BBQ dinner buffet",
        "Belly dance & Tanoura show",
        "Henna painting",
        "Shisha lounge",
      ],
      image:
        "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800&q=80",
      popular: !0,
    },
    {
      id: "overnight",
      name: "Overnight Desert Camp",
      price: 450,
      duration: "18 Hours",
      description:
        "Sleep under the Dubai stars in a luxury desert camp with all premium amenities.",
      features: [
        "All Evening Safari activities",
        "Luxury tent accommodation",
        "Breakfast included",
        "Stargazing experience",
        "Morning desert walk",
        "Private bathroom facilities",
      ],
      image:
        "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80",
    },
    {
      id: "vip",
      name: "VIP Private Safari",
      price: 800,
      duration: "8 Hours",
      description:
        "The ultimate luxury Dubai desert experience with private services and exclusive amenities.",
      features: [
        "Private Land Cruiser & guide",
        "Falcon photography session",
        "Premium dinner menu",
        "Exclusive VIP seating",
        "Champagne & refreshments",
        "Professional photo session",
        "Luxury hotel transfers",
      ],
      image:
        "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80",
    },
  ],
  v2 = "971501234567",
  y2 =
    "Hi! I'm interested in booking a Dubai Desert Safari with Visit White Desert. Can you help me?",
  x2 = () => {
    const e = () => {
      const t = `https://wa.me/${v2}?text=${encodeURIComponent(y2)}`;
      window.open(t, "_blank");
    };
    return y.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        y.jsx(qC, {}),
        y.jsx(eE, {}),
        y.jsx(nE, {}),
        y.jsx(oE, {}),
        y.jsx("section", {
          id: "packages",
          className: "py-20 px-4 bg-muted/30",
          children: y.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [
              y.jsxs("div", {
                className: "text-center mb-12",
                children: [
                  y.jsx("span", {
                    className:
                      "text-amber-600 font-semibold text-sm uppercase tracking-wider",
                    children: "Our Packages",
                  }),
                  y.jsx("h2", {
                    className: "text-4xl font-bold mt-2 mb-4",
                    children: "Choose Your Dubai Adventure",
                  }),
                  y.jsx("p", {
                    className:
                      "text-xl text-muted-foreground max-w-2xl mx-auto",
                    children:
                      "From sunrise thrills to starlit nights – find the perfect Dubai desert experience.",
                  }),
                ],
              }),
              y.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: g2.map((t) => y.jsx(sE, { pkg: t }, t.id)),
              }),
            ],
          }),
        }),
        y.jsx(aE, {}),
        y.jsx(HE, {}),
        y.jsx(p2, {}),
        y.jsx(m2, {}),
        y.jsx("footer", {
          className: "bg-foreground text-background py-16 px-4",
          children: y.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [
              y.jsxs("div", {
                className: "grid md:grid-cols-4 gap-8 mb-12",
                children: [
                  y.jsxs("div", {
                    className: "md:col-span-2",
                    children: [
                      y.jsxs("h3", {
                        className: "text-2xl font-bold mb-4",
                        children: [
                          y.jsx("span", {
                            className: "text-amber-500",
                            children: "Visit",
                          }),
                          "White",
                          y.jsx("span", {
                            className: "text-amber-400",
                            children: "Desert",
                          }),
                        ],
                      }),
                      y.jsx("p", {
                        className: "text-background/70 mb-4 max-w-md",
                        children:
                          "Dubai's premier desert safari experience since 2012. Licensed by Dubai Tourism and insured for your peace of mind.",
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    children: [
                      y.jsx("h4", {
                        className: "font-semibold mb-4",
                        children: "Quick Links",
                      }),
                      y.jsxs("ul", {
                        className: "space-y-2 text-background/70",
                        children: [
                          y.jsx("li", {
                            children: y.jsx("a", {
                              href: "#about",
                              className:
                                "hover:text-background transition-colors",
                              children: "About Us",
                            }),
                          }),
                          y.jsx("li", {
                            children: y.jsx("a", {
                              href: "#packages",
                              className:
                                "hover:text-background transition-colors",
                              children: "Packages",
                            }),
                          }),
                          y.jsx("li", {
                            children: y.jsx("a", {
                              href: "#gallery",
                              className:
                                "hover:text-background transition-colors",
                              children: "Gallery",
                            }),
                          }),
                          y.jsx("li", {
                            children: y.jsx("a", {
                              href: "#faq",
                              className:
                                "hover:text-background transition-colors",
                              children: "FAQ",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    children: [
                      y.jsx("h4", {
                        className: "font-semibold mb-4",
                        children: "Contact Us",
                      }),
                      y.jsxs("ul", {
                        className: "space-y-2 text-background/70",
                        children: [
                          y.jsx("li", { children: "📞 +971 50 123 4567" }),
                          y.jsx("li", {
                            children: "✉️ info@visitwhitedesert.com",
                          }),
                          y.jsx("li", { children: "📍 Dubai, UAE" }),
                        ],
                      }),
                      y.jsx("button", {
                        onClick: e,
                        className:
                          "mt-4 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors",
                        children: "💬 WhatsApp Us",
                      }),
                    ],
                  }),
                ],
              }),
              y.jsx("div", {
                className:
                  "border-t border-background/20 pt-8 text-center text-background/60 text-sm",
                children: y.jsx("p", {
                  children:
                    "© 2024 Visit White Desert. All rights reserved. | Dubai Desert Safari Tours",
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  w2 = new oC(),
  S2 = () =>
    y.jsx(sC, {
      client: w2,
      children: y.jsxs(Mb, {
        children: [
          y.jsx(mw, {}),
          y.jsx(Kw, {}),
          y.jsx(QC, {
            children: y.jsx(VC, {
              children: y.jsx(av, { path: "/", element: y.jsx(x2, {}) }),
            }),
          }),
        ],
      }),
    });
Nm(document.getElementById("root")).render(y.jsx(S2, {}));
