window.app = function(t) {
    function e(r) {
        if (n[r])
            return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, e),
        o.l = !0,
        o.exports
    }
    var n = {};
    return e.m = t,
    e.c = n,
    e.i = function(t) {
        return t
    }
    ,
    e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }
    ,
    e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return e.d(n, "a", n),
        n
    }
    ,
    e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    e.p = "",
    e(e.s = 90)
}([function(t, e, n) {
    "use strict";
    var r = n(30)("wks")
      , o = n(21)
      , i = n(1).Symbol
      , s = "function" == typeof i
      , a = t.exports = function(t) {
        return r[t] || (r[t] = s && i[t] || (s ? i : o)("Symbol." + t))
    }
    ;
    a.store = r
}
, function(t, e, n) {
    "use strict";
    var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = r)
}
, function(t, e, n) {
    "use strict";
    var r = n(11);
    t.exports = function(t) {
        if (!r(t))
            throw TypeError(t + " is not an object!");
        return t
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(12)
      , o = n(29);
    t.exports = n(5) ? function(t, e, n) {
        return r.f(t, e, o(1, n))
    }
    : function(t, e, n) {
        return t[e] = n,
        t
    }
}
, function(t, e, n) {
    "use strict";
    var r = t.exports = {
        version: "2.4.0"
    };
    "number" == typeof __e && (__e = r)
}
, function(t, e, n) {
    "use strict";
    t.exports = !n(25)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(t, e, n) {
    "use strict";
    var r = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return r.call(t, e)
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = {}
}
, function(t, e, n) {
    "use strict";
    var r = n(1)
      , o = n(3)
      , i = n(6)
      , s = n(21)("src")
      , a = "toString"
      , c = Function[a]
      , u = ("" + c).split(a);
    n(4).inspectSource = function(t) {
        return c.call(t)
    }
    ,
    (t.exports = function(t, e, n, a) {
        var c = "function" == typeof n;
        c && (i(n, "name") || o(n, "name", e)),
        t[e] !== n && (c && (i(n, s) || o(n, s, t[e] ? "" + t[e] : u.join(String(e)))),
        t === r ? t[e] = n : a ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e],
        o(t, e, n)))
    }
    )(Function.prototype, a, function() {
        return "function" == typeof this && this[s] || c.call(this)
    })
}
, function(t, e, n) {
    "use strict";
    var r = {}.toString;
    t.exports = function(t) {
        return r.call(t).slice(8, -1)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(13);
    t.exports = function(t, e, n) {
        if (r(t),
        void 0 === e)
            return t;
        switch (n) {
        case 1:
            return function(n) {
                return t.call(e, n)
            }
            ;
        case 2:
            return function(n, r) {
                return t.call(e, n, r)
            }
            ;
        case 3:
            return function(n, r, o) {
                return t.call(e, n, r, o)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
    t.exports = function(t) {
        return "object" === ("undefined" == typeof t ? "undefined" : r(t)) ? null !== t : "function" == typeof t
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(2)
      , o = n(42)
      , i = n(62)
      , s = Object.defineProperty;
    e.f = n(5) ? Object.defineProperty : function(t, e, n) {
        if (r(t),
        e = i(e, !0),
        r(n),
        o)
            try {
                return s(t, e, n)
            } catch (t) {}
        if ("get"in n || "set"in n)
            throw TypeError("Accessors not supported!");
        return "value"in n && (t[e] = n.value),
        t
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        if ("function" != typeof t)
            throw TypeError(t + " is not a function!");
        return t
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(9)
      , o = n(0)("toStringTag")
      , i = "Arguments" == r(function() {
        return arguments
    }())
      , s = function(t, e) {
        try {
            return t[e]
        } catch (t) {}
    };
    t.exports = function(t) {
        var e, n, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = s(e = Object(t), o)) ? n : i ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        if (void 0 == t)
            throw TypeError("Can't call method on  " + t);
        return t
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(11)
      , o = n(1).document
      , i = r(o) && r(o.createElement);
    t.exports = function(t) {
        return i ? o.createElement(t) : {}
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(12).f
      , o = n(6)
      , i = n(0)("toStringTag");
    t.exports = function(t, e, n) {
        t && !o(t = n ? t : t.prototype, i) && r(t, i, {
            configurable: !0,
            value: e
        })
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(30)("keys")
      , o = n(21);
    t.exports = function(t) {
        return r[t] || (r[t] = o(t))
    }
}
, function(t, e, n) {
    "use strict";
    var r = Math.ceil
      , o = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? o : r)(t)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(44)
      , o = n(15);
    t.exports = function(t) {
        return r(o(t))
    }
}
, function(t, e, n) {
    "use strict";
    var r = 0
      , o = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++r + o).toString(36))
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        createElement: function(t, e) {
            var n = document.createElement(t);
            e && Array.prototype.forEach.call(Object.keys(e), function(t) {
                n.setAttribute(t, e[t])
            });
            for (var r = function t(e) {
                Array.prototype.forEach.call(e, function(e) {
                    "string" == typeof e || "number" == typeof e ? n.textContent += e : Array.isArray(e) ? t(e) : n.appendChild(e)
                })
            }, o = arguments.length, i = Array(o > 2 ? o - 2 : 0), s = 2; s < o; s++)
                i[s - 2] = arguments[s];
            return r(i),
            n
        }
    },
    t.exports = e.default
}
, function(t, e, n) {
    "use strict";
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}
, function(t, e, n) {
    "use strict";
    var r = n(1)
      , o = n(4)
      , i = n(3)
      , s = n(8)
      , a = n(10)
      , c = "prototype"
      , u = function t(e, n, u) {
        var l, f, h, d, p = e & t.F, v = e & t.G, y = e & t.S, m = e & t.P, g = e & t.B, w = v ? r : y ? r[n] || (r[n] = {}) : (r[n] || {})[c], b = v ? o : o[n] || (o[n] = {}), _ = b[c] || (b[c] = {});
        v && (u = n);
        for (l in u)
            f = !p && w && void 0 !== w[l],
            h = (f ? w : u)[l],
            d = g && f ? a(h, r) : m && "function" == typeof h ? a(Function.call, h) : h,
            w && s(w, l, h, e & t.U),
            b[l] != h && i(b, l, d),
            m && _[l] != h && (_[l] = h)
    };
    r.core = o,
    u.F = 1,
    u.G = 2,
    u.S = 4,
    u.P = 8,
    u.B = 16,
    u.W = 32,
    u.U = 64,
    u.R = 128,
    t.exports = u
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = n(1).document && document.documentElement
}
, function(t, e, n) {
    "use strict";
    var r = n(28)
      , o = n(24)
      , i = n(8)
      , s = n(3)
      , a = n(6)
      , c = n(7)
      , u = n(47)
      , l = n(17)
      , f = n(53)
      , h = n(0)("iterator")
      , d = !([].keys && "next"in [].keys())
      , p = "@@iterator"
      , v = "keys"
      , y = "values"
      , m = function() {
        return this
    };
    t.exports = function(t, e, n, g, w, b, _) {
        u(n, e, g);
        var S, x, E, k = function(t) {
            if (!d && t in A)
                return A[t];
            switch (t) {
            case v:
                return function() {
                    return new n(this,t)
                }
                ;
            case y:
                return function() {
                    return new n(this,t)
                }
            }
            return function() {
                return new n(this,t)
            }
        }, T = e + " Iterator", O = w == y, C = !1, A = t.prototype, P = A[h] || A[p] || w && A[w], j = P || k(w), M = w ? O ? k("entries") : j : void 0, F = "Array" == e ? A.entries || P : P;
        if (F && (E = f(F.call(new t)),
        E !== Object.prototype && (l(E, T, !0),
        r || a(E, h) || s(E, h, m))),
        O && P && P.name !== y && (C = !0,
        j = function() {
            return P.call(this)
        }
        ),
        r && !_ || !d && !C && A[h] || s(A, h, j),
        c[e] = j,
        c[T] = m,
        w)
            if (S = {
                values: O ? j : k(y),
                keys: b ? j : k(v),
                entries: M
            },
            _)
                for (x in S)
                    x in A || i(A, x, S[x]);
            else
                o(o.P + o.F * (d || C), e, S);
        return S
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = !1
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(1)
      , o = "__core-js_shared__"
      , i = r[o] || (r[o] = {});
    t.exports = function(t) {
        return i[t] || (i[t] = {})
    }
}
, function(t, e, n) {
    "use strict";
    var r, o, i, s = n(10), a = n(43), c = n(26), u = n(16), l = n(1), f = l.process, h = l.setImmediate, d = l.clearImmediate, p = l.MessageChannel, v = 0, y = {}, m = "onreadystatechange", g = function() {
        var t = +this;
        if (y.hasOwnProperty(t)) {
            var e = y[t];
            delete y[t],
            e()
        }
    }, w = function(t) {
        g.call(t.data)
    };
    h && d || (h = function(t) {
        for (var e = [], n = 1; arguments.length > n; )
            e.push(arguments[n++]);
        return y[++v] = function() {
            a("function" == typeof t ? t : Function(t), e)
        }
        ,
        r(v),
        v
    }
    ,
    d = function(t) {
        delete y[t]
    }
    ,
    "process" == n(9)(f) ? r = function(t) {
        f.nextTick(s(g, t, 1))
    }
    : p ? (o = new p,
    i = o.port2,
    o.port1.onmessage = w,
    r = s(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(t) {
        l.postMessage(t + "", "*")
    }
    ,
    l.addEventListener("message", w, !1)) : r = m in u("script") ? function(t) {
        c.appendChild(u("script"))[m] = function() {
            c.removeChild(this),
            g.call(t)
        }
    }
    : function(t) {
        setTimeout(s(g, t, 1), 0)
    }
    ),
    t.exports = {
        set: h,
        clear: d
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(19)
      , o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0
    }
}
, function(t, e) {
    (function(e) {
        t.exports = e
    }
    ).call(e, {})
}
, function(t, e, n) {
    "use strict";
    n(65),
    n(67),
    n(68),
    n(66),
    t.exports = n(4).Promise
}
, function(t, e, n) {
    "use strict";
    try {
        var r = new window.CustomEvent("test");
        if (r.preventDefault(),
        r.defaultPrevented !== !0)
            throw new Error("Could not prevent default")
    } catch (t) {
        var o = function(t, e) {
            var n, r;
            return e = e || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            },
            n = document.createEvent("CustomEvent"),
            n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
            r = n.preventDefault,
            n.preventDefault = function() {
                r.call(this);
                try {
                    Object.defineProperty(this, "defaultPrevented", {
                        get: function() {
                            return !0
                        }
                    })
                } catch (t) {
                    this.defaultPrevented = !0
                }
            }
            ,
            n
        };
        o.prototype = window.Event.prototype,
        window.CustomEvent = o
    }
}
, function(t, e, n) {
    "use strict";
    !function(t) {
        function e(t) {
            if ("string" != typeof t && (t = String(t)),
            /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
                throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }
        function n(t) {
            return "string" != typeof t && (t = String(t)),
            t
        }
        function r(t) {
            var e = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: void 0 === e,
                        value: e
                    }
                }
            };
            return m.iterable && (e[Symbol.iterator] = function() {
                return e
            }
            ),
            e
        }
        function o(t) {
            this.map = {},
            t instanceof o ? t.forEach(function(t, e) {
                this.append(e, t)
            }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e])
            }, this)
        }
        function i(t) {
            return t.bodyUsed ? Promise.reject(new TypeError("Already read")) : void (t.bodyUsed = !0)
        }
        function s(t) {
            return new Promise(function(e, n) {
                t.onload = function() {
                    e(t.result)
                }
                ,
                t.onerror = function() {
                    n(t.error)
                }
            }
            )
        }
        function a(t) {
            var e = new FileReader
              , n = s(e);
            return e.readAsArrayBuffer(t),
            n
        }
        function c(t) {
            var e = new FileReader
              , n = s(e);
            return e.readAsText(t),
            n
        }
        function u(t) {
            for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++)
                n[r] = String.fromCharCode(e[r]);
            return n.join("")
        }
        function l(t) {
            if (t.slice)
                return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)),
            e.buffer
        }
        function f() {
            return this.bodyUsed = !1,
            this._initBody = function(t) {
                if (this._bodyInit = t,
                t)
                    if ("string" == typeof t)
                        this._bodyText = t;
                    else if (m.blob && Blob.prototype.isPrototypeOf(t))
                        this._bodyBlob = t;
                    else if (m.formData && FormData.prototype.isPrototypeOf(t))
                        this._bodyFormData = t;
                    else if (m.searchParams && URLSearchParams.prototype.isPrototypeOf(t))
                        this._bodyText = t.toString();
                    else if (m.arrayBuffer && m.blob && w(t))
                        this._bodyArrayBuffer = l(t.buffer),
                        this._bodyInit = new Blob([this._bodyArrayBuffer]);
                    else {
                        if (!m.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !b(t))
                            throw new Error("unsupported BodyInit type");
                        this._bodyArrayBuffer = l(t)
                    }
                else
                    this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : m.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }
            ,
            m.blob && (this.blob = function() {
                var t = i(this);
                if (t)
                    return t;
                if (this._bodyBlob)
                    return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }
            ,
            this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? i(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(a)
            }
            ),
            this.text = function() {
                var t = i(this);
                if (t)
                    return t;
                if (this._bodyBlob)
                    return c(this._bodyBlob);
                if (this._bodyArrayBuffer)
                    return Promise.resolve(u(this._bodyArrayBuffer));
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }
            ,
            m.formData && (this.formData = function() {
                return this.text().then(p)
            }
            ),
            this.json = function() {
                return this.text().then(JSON.parse)
            }
            ,
            this
        }
        function h(t) {
            var e = t.toUpperCase();
            return _.indexOf(e) > -1 ? e : t
        }
        function d(t, e) {
            e = e || {};
            var n = e.body;
            if (t instanceof d) {
                if (t.bodyUsed)
                    throw new TypeError("Already read");
                this.url = t.url,
                this.credentials = t.credentials,
                e.headers || (this.headers = new o(t.headers)),
                this.method = t.method,
                this.mode = t.mode,
                n || null == t._bodyInit || (n = t._bodyInit,
                t.bodyUsed = !0)
            } else
                this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "omit",
            !e.headers && this.headers || (this.headers = new o(e.headers)),
            this.method = h(e.method || this.method || "GET"),
            this.mode = e.mode || this.mode || null,
            this.referrer = null,
            ("GET" === this.method || "HEAD" === this.method) && n)
                throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n)
        }
        function p(t) {
            var e = new FormData;
            return t.trim().split("&").forEach(function(t) {
                if (t) {
                    var n = t.split("=")
                      , r = n.shift().replace(/\+/g, " ")
                      , o = n.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(r), decodeURIComponent(o))
                }
            }),
            e
        }
        function v(t) {
            var e = new o;
            return t.split(/\r?\n/).forEach(function(t) {
                var n = t.split(":")
                  , r = n.shift().trim();
                if (r) {
                    var o = n.join(":").trim();
                    e.append(r, o)
                }
            }),
            e
        }
        function y(t, e) {
            e || (e = {}),
            this.type = "default",
            this.status = "status"in e ? e.status : 200,
            this.ok = this.status >= 200 && this.status < 300,
            this.statusText = "statusText"in e ? e.statusText : "OK",
            this.headers = new o(e.headers),
            this.url = e.url || "",
            this._initBody(t)
        }
        if (!t.fetch) {
            var m = {
                searchParams: "URLSearchParams"in t,
                iterable: "Symbol"in t && "iterator"in Symbol,
                blob: "FileReader"in t && "Blob"in t && function() {
                    try {
                        return new Blob,
                        !0
                    } catch (t) {
                        return !1
                    }
                }(),
                formData: "FormData"in t,
                arrayBuffer: "ArrayBuffer"in t
            };
            if (m.arrayBuffer)
                var g = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                  , w = function(t) {
                    return t && DataView.prototype.isPrototypeOf(t)
                }
                  , b = ArrayBuffer.isView || function(t) {
                    return t && g.indexOf(Object.prototype.toString.call(t)) > -1
                }
                ;
            o.prototype.append = function(t, r) {
                t = e(t),
                r = n(r);
                var o = this.map[t];
                this.map[t] = o ? o + "," + r : r
            }
            ,
            o.prototype.delete = function(t) {
                delete this.map[e(t)]
            }
            ,
            o.prototype.get = function(t) {
                return t = e(t),
                this.has(t) ? this.map[t] : null
            }
            ,
            o.prototype.has = function(t) {
                return this.map.hasOwnProperty(e(t))
            }
            ,
            o.prototype.set = function(t, r) {
                this.map[e(t)] = n(r)
            }
            ,
            o.prototype.forEach = function(t, e) {
                for (var n in this.map)
                    this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
            }
            ,
            o.prototype.keys = function() {
                var t = [];
                return this.forEach(function(e, n) {
                    t.push(n)
                }),
                r(t)
            }
            ,
            o.prototype.values = function() {
                var t = [];
                return this.forEach(function(e) {
                    t.push(e)
                }),
                r(t)
            }
            ,
            o.prototype.entries = function() {
                var t = [];
                return this.forEach(function(e, n) {
                    t.push([n, e])
                }),
                r(t)
            }
            ,
            m.iterable && (o.prototype[Symbol.iterator] = o.prototype.entries);
            var _ = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            d.prototype.clone = function() {
                return new d(this,{
                    body: this._bodyInit
                })
            }
            ,
            f.call(d.prototype),
            f.call(y.prototype),
            y.prototype.clone = function() {
                return new y(this._bodyInit,{
                    status: this.status,
                    statusText: this.statusText,
                    headers: new o(this.headers),
                    url: this.url
                })
            }
            ,
            y.error = function() {
                var t = new y(null,{
                    status: 0,
                    statusText: ""
                });
                return t.type = "error",
                t
            }
            ;
            var S = [301, 302, 303, 307, 308];
            y.redirect = function(t, e) {
                if (S.indexOf(e) === -1)
                    throw new RangeError("Invalid status code");
                return new y(null,{
                    status: e,
                    headers: {
                        location: t
                    }
                })
            }
            ,
            t.Headers = o,
            t.Request = d,
            t.Response = y,
            t.fetch = function(t, e) {
                return new Promise(function(n, r) {
                    var o = new d(t,e)
                      , i = new XMLHttpRequest;
                    i.onload = function() {
                        var t = {
                            status: i.status,
                            statusText: i.statusText,
                            headers: v(i.getAllResponseHeaders() || "")
                        };
                        t.url = "responseURL"in i ? i.responseURL : t.headers.get("X-Request-URL");
                        var e = "response"in i ? i.response : i.responseText;
                        n(new y(e,t))
                    }
                    ,
                    i.onerror = function() {
                        r(new TypeError("Network request failed"))
                    }
                    ,
                    i.ontimeout = function() {
                        r(new TypeError("Network request failed"))
                    }
                    ,
                    i.open(o.method, o.url, !0),
                    "include" === o.credentials && (i.withCredentials = !0),
                    "responseType"in i && m.blob && (i.responseType = "blob"),
                    o.headers.forEach(function(t, e) {
                        i.setRequestHeader(e, t)
                    }),
                    i.send("undefined" == typeof o._bodyInit ? null : o._bodyInit)
                }
                )
            }
            ,
            t.fetch.polyfill = !0
        }
    }("undefined" != typeof self ? self : void 0)
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(69)
      , o = n.n(r)
      , i = n(72);
    n.d(e, "initialize", function() {
        return s
    });
    var s = function(t) {
        new i.a.Event.Listener(document,"DOMContentLoaded",function() {
            Modernizr.addTest("ios", function() {
                return !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
            }),
            Modernizr.addTest("standalone", function() {
                return !!navigator.standalone
            }),
            o.a.attach(document.body);
            var t = document.querySelectorAll("table:not([class])");
            if (Array.prototype.forEach.call(t, function(t) {
                var e = document.createElement("div");
                e.classList.add("md-typeset__table"),
                t.nextSibling ? t.parentNode.insertBefore(e, t.nextSibling) : t.parentNode.appendChild(e),
                e.appendChild(t)
            }),
            Modernizr.ios) {
                var e = document.querySelectorAll("[data-md-scrollfix]");
                Array.prototype.forEach.call(e, function(t) {
                    t.addEventListener("touchstart", function() {
                        var e = t.scrollTop;
                        0 === e ? t.scrollTop = 1 : e + t.offsetHeight === t.scrollHeight && (t.scrollTop = e - 1)
                    })
                })
            }
        }
        ).listen(),
        new i.a.Event.MatchMedia("(min-width: 1220px)",new i.a.Event.Listener(window,["scroll", "resize", "orientationchange"],new i.a.Sidebar.Position("[data-md-component=navigation]"))),
        new i.a.Event.MatchMedia("(min-width: 960px)",new i.a.Event.Listener(window,["scroll", "resize", "orientationchange"],new i.a.Sidebar.Position("[data-md-component=toc]"))),
        new i.a.Event.MatchMedia("(min-width: 960px)",new i.a.Event.Listener(window,"scroll",new i.a.Nav.Blur("[data-md-component=toc] .md-nav__link")));
        var e = document.querySelectorAll("[data-md-component=collapsible]");
        Array.prototype.forEach.call(e, function(t) {
            new i.a.Event.MatchMedia("(min-width: 1220px)",new i.a.Event.Listener(t.previousElementSibling,"click",new i.a.Nav.Collapse(t)))
        }),
        new i.a.Event.MatchMedia("(max-width: 1219px)",new i.a.Event.Listener("[data-md-component=navigation] [data-md-toggle]","change",new i.a.Nav.Scrolling("[data-md-component=navigation] nav"))),
        new i.a.Event.MatchMedia("(max-width: 959px)",new i.a.Event.Listener("[data-md-toggle=search]","change",new i.a.Search.Lock("[data-md-toggle=search]"))),
        new i.a.Event.Listener(document.forms.search.query,["focus", "keyup"],new i.a.Search.Result("[data-md-component=result]",function() {
            return fetch(t.url.base + "/mkdocs/search_index.json", {
                credentials: "same-origin"
            }).then(function(t) {
                return t.json()
            }).then(function(e) {
                return e.docs.map(function(e) {
                    return e.location = t.url.base + e.location,
                    e
                })
            })
        }
        )).listen(),
        new i.a.Event.MatchMedia("(max-width: 1219px)",new i.a.Event.Listener("[data-md-component=overlay]","touchstart",function(t) {
            return t.preventDefault()
        }
        )),
        new i.a.Event.MatchMedia("(max-width: 959px)",new i.a.Event.Listener("[data-md-component=navigation] [href^='#']","click",function() {
            var t = document.querySelector("[data-md-toggle=drawer]");
            t.checked && (t.checked = !1,
            t.dispatchEvent(new CustomEvent("change")))
        }
        )),
        new i.a.Event.Listener("[data-md-toggle=search]","change",function(t) {
            // setTimeout(function(t) {
            //     var e = document.forms.search.query;
            //     t.checked && e.focus()
            // }, 400, t.target)
            function callback(t){
                var e = document.forms.search.query;
                t.checked && e.focus();
            }
            setTimeout(function() {
                callback(t.target);
            }, 400);
        }
        ).listen(),
        new i.a.Event.MatchMedia("(min-width: 960px)",new i.a.Event.Listener(document.forms.search.query,"focus",function() {
            var t = document.querySelector("[data-md-toggle=search]");
            t.checked || (t.checked = !0,
            t.dispatchEvent(new CustomEvent("change")))
        }
        )),
        new i.a.Event.MatchMedia("(min-width: 960px)",new i.a.Event.Listener(document.body,"click",function() {
            var t = document.querySelector("[data-md-toggle=search]");
            t.checked && (t.checked = !1,
            t.dispatchEvent(new CustomEvent("change")))
        }
        )),
        new i.a.Event.Listener(window,"keyup",function(t) {
            var e = t.keyCode || t.which;
            if (27 === e) {
                var n = document.querySelector("[data-md-toggle=search]");
                n.checked && (n.checked = !1,
                n.dispatchEvent(new CustomEvent("change")),
                document.forms.search.query.blur())
            }
        }
        ).listen(),
        new i.a.Event.MatchMedia("(min-width: 960px)",new i.a.Event.Listener("[data-md-toggle=search]","click",function(t) {
            return t.stopPropagation()
        }
        )),
        new i.a.Event.MatchMedia("(min-width: 960px)",new i.a.Event.Listener("[data-md-component=search]","click",function(t) {
            return t.stopPropagation()
        }
        )),
        function() {
            var t = document.querySelector("[data-md-source]");
            if (!t)
                return Promise.resolve([]);
            switch (t.dataset.mdSource) {
            case "github":
                return new i.a.Source.Adapter.GitHub(t).fetch();
            default:
                return Promise.resolve([])
            }
        }().then(function(t) {
            var e = document.querySelectorAll("[data-md-source]");
            Array.prototype.forEach.call(e, function(e) {
                new i.a.Source.Repository(e).initialize(t)
            })
        })
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(0)("unscopables")
      , o = Array.prototype;
    void 0 == o[r] && n(3)(o, r, {}),
    t.exports = function(t) {
        o[r][t] = !0
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t, e, n, r) {
        if (!(t instanceof e) || void 0 !== r && r in t)
            throw TypeError(n + ": incorrect invocation!");
        return t
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(20)
      , o = n(32)
      , i = n(60);
    t.exports = function(t) {
        return function(e, n, s) {
            var a, c = r(e), u = o(c.length), l = i(s, u);
            if (t && n != n) {
                for (; u > l; )
                    if (a = c[l++],
                    a != a)
                        return !0
            } else
                for (; u > l; l++)
                    if ((t || l in c) && c[l] === n)
                        return t || l || 0;
            return !t && -1
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(10)
      , o = n(46)
      , i = n(45)
      , s = n(2)
      , a = n(32)
      , c = n(63)
      , u = {}
      , l = {}
      , f = t.exports = function(t, e, n, f, h) {
        var d, p, v, y, m = h ? function() {
            return t
        }
        : c(t), g = r(n, f, e ? 2 : 1), w = 0;
        if ("function" != typeof m)
            throw TypeError(t + " is not iterable!");
        if (i(m)) {
            for (d = a(t.length); d > w; w++)
                if (y = e ? g(s(p = t[w])[0], p[1]) : g(t[w]),
                y === u || y === l)
                    return y
        } else
            for (v = m.call(t); !(p = v.next()).done; )
                if (y = o(v, g, p.value, e),
                y === u || y === l)
                    return y
    }
    ;
    f.BREAK = u,
    f.RETURN = l
}
, function(t, e, n) {
    "use strict";
    t.exports = !n(5) && !n(25)(function() {
        return 7 != Object.defineProperty(n(16)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t, e, n) {
        var r = void 0 === n;
        switch (e.length) {
        case 0:
            return r ? t() : t.call(n);
        case 1:
            return r ? t(e[0]) : t.call(n, e[0]);
        case 2:
            return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
        case 3:
            return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
        case 4:
            return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(9);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(7)
      , o = n(0)("iterator")
      , i = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (r.Array === t || i[o] === t)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(2);
    t.exports = function(t, e, n, o) {
        try {
            return o ? e(r(n)[0], n[1]) : e(n)
        } catch (e) {
            var i = t.return;
            throw void 0 !== i && r(i.call(t)),
            e
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(51)
      , o = n(29)
      , i = n(17)
      , s = {};
    n(3)(s, n(0)("iterator"), function() {
        return this
    }),
    t.exports = function(t, e, n) {
        t.prototype = r(s, {
            next: o(1, n)
        }),
        i(t, e + " Iterator")
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(0)("iterator")
      , o = !1;
    try {
        var i = [7][r]();
        i.return = function() {
            o = !0
        }
        ,
        Array.from(i, function() {
            throw 2
        })
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !o)
            return !1;
        var n = !1;
        try {
            var i = [7]
              , s = i[r]();
            s.next = function() {
                return {
                    done: n = !0
                }
            }
            ,
            i[r] = function() {
                return s
            }
            ,
            t(i)
        } catch (t) {}
        return n
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(1)
      , o = n(31).set
      , i = r.MutationObserver || r.WebKitMutationObserver
      , s = r.process
      , a = r.Promise
      , c = "process" == n(9)(s);
    t.exports = function() {
        var t, e, n, u = function() {
            var r, o;
            for (c && (r = s.domain) && r.exit(); t; ) {
                o = t.fn,
                t = t.next;
                try {
                    o()
                } catch (r) {
                    throw t ? n() : e = void 0,
                    r
                }
            }
            e = void 0,
            r && r.enter()
        };
        if (c)
            n = function() {
                s.nextTick(u)
            }
            ;
        else if (i) {
            var l = !0
              , f = document.createTextNode("");
            new i(u).observe(f, {
                characterData: !0
            }),
            n = function() {
                f.data = l = !l
            }
        } else if (a && a.resolve) {
            var h = a.resolve();
            n = function() {
                h.then(u)
            }
        } else
            n = function() {
                o.call(r, u)
            }
            ;
        return function(r) {
            var o = {
                fn: r,
                next: void 0
            };
            e && (e.next = o),
            t || (t = o,
            n()),
            e = o
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(2)
      , o = n(52)
      , i = n(23)
      , s = n(18)("IE_PROTO")
      , a = function() {}
      , c = "prototype"
      , u = function() {
        var t, e = n(16)("iframe"), r = i.length, o = "<", s = ">";
        for (e.style.display = "none",
        n(26).appendChild(e),
        e.src = "javascript:",
        t = e.contentWindow.document,
        t.open(),
        t.write(o + "script" + s + "document.F=Object" + o + "/script" + s),
        t.close(),
        u = t.F; r--; )
            delete u[c][i[r]];
        return u()
    };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (a[c] = r(t),
        n = new a,
        a[c] = null,
        n[s] = t) : n = u(),
        void 0 === e ? n : o(n, e)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(12)
      , o = n(2)
      , i = n(55);
    t.exports = n(5) ? Object.defineProperties : function(t, e) {
        o(t);
        for (var n, s = i(e), a = s.length, c = 0; a > c; )
            r.f(t, n = s[c++], e[n]);
        return t
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(6)
      , o = n(61)
      , i = n(18)("IE_PROTO")
      , s = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = o(t),
        r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(6)
      , o = n(20)
      , i = n(40)(!1)
      , s = n(18)("IE_PROTO");
    t.exports = function(t, e) {
        var n, a = o(t), c = 0, u = [];
        for (n in a)
            n != s && r(a, n) && u.push(n);
        for (; e.length > c; )
            r(a, n = e[c++]) && (~i(u, n) || u.push(n));
        return u
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(54)
      , o = n(23);
    t.exports = Object.keys || function(t) {
        return r(t, o)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(8);
    t.exports = function(t, e, n) {
        for (var o in e)
            r(t, o, e[o], n);
        return t
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(1)
      , o = n(12)
      , i = n(5)
      , s = n(0)("species");
    t.exports = function(t) {
        var e = r[t];
        i && e && !e[s] && o.f(e, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(2)
      , o = n(13)
      , i = n(0)("species");
    t.exports = function(t, e) {
        var n, s = r(t).constructor;
        return void 0 === s || void 0 == (n = r(s)[i]) ? e : o(n)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(19)
      , o = n(15);
    t.exports = function(t) {
        return function(e, n) {
            var i, s, a = String(o(e)), c = r(n), u = a.length;
            return c < 0 || c >= u ? t ? "" : void 0 : (i = a.charCodeAt(c),
            i < 55296 || i > 56319 || c + 1 === u || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343 ? t ? a.charAt(c) : i : t ? a.slice(c, c + 2) : (i - 55296 << 10) + (s - 56320) + 65536)
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(19)
      , o = Math.max
      , i = Math.min;
    t.exports = function(t, e) {
        return t = r(t),
        t < 0 ? o(t + e, 0) : i(t, e)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(15);
    t.exports = function(t) {
        return Object(r(t))
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(11);
    t.exports = function(t, e) {
        if (!r(t))
            return t;
        var n, o;
        if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t)))
            return o;
        if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t)))
            return o;
        if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t)))
            return o;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(14)
      , o = n(0)("iterator")
      , i = n(7);
    t.exports = n(4).getIteratorMethod = function(t) {
        if (void 0 != t)
            return t[o] || t["@@iterator"] || i[r(t)]
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(38)
      , o = n(49)
      , i = n(7)
      , s = n(20);
    t.exports = n(27)(Array, "Array", function(t, e) {
        this._t = s(t),
        this._i = 0,
        this._k = e
    }, function() {
        var t = this._t
          , e = this._k
          , n = this._i++;
        return !t || n >= t.length ? (this._t = void 0,
        o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
    }, "values"),
    i.Arguments = i.Array,
    r("keys"),
    r("values"),
    r("entries")
}
, function(t, e, n) {
    "use strict";
    var r = n(14)
      , o = {};
    o[n(0)("toStringTag")] = "z",
    o + "" != "[object z]" && n(8)(Object.prototype, "toString", function() {
        return "[object " + r(this) + "]"
    }, !0)
}
, function(t, e, n) {
    "use strict";
    var r, o, i, s = n(28), a = n(1), c = n(10), u = n(14), l = n(24), f = n(11), h = n(13), d = n(39), p = n(41), v = n(58), y = n(31).set, m = n(50)(), g = "Promise", w = a.TypeError, b = a.process, _ = a[g], b = a.process, S = "process" == u(b), x = function() {}, E = !!function() {
        try {
            var t = _.resolve(1)
              , e = (t.constructor = {})[n(0)("species")] = function(t) {
                t(x, x)
            }
            ;
            return (S || "function" == typeof PromiseRejectionEvent) && t.then(x)instanceof e
        } catch (t) {}
    }(), k = function(t, e) {
        return t === e || t === _ && e === i
    }, T = function(t) {
        var e;
        return !(!f(t) || "function" != typeof (e = t.then)) && e
    }, O = function(t) {
        return k(_, t) ? new C(t) : new o(t)
    }, C = o = function(t) {
        var e, n;
        this.promise = new t(function(t, r) {
            if (void 0 !== e || void 0 !== n)
                throw w("Bad Promise constructor");
            e = t,
            n = r
        }
        ),
        this.resolve = h(e),
        this.reject = h(n)
    }
    , A = function(t) {
        try {
            t()
        } catch (t) {
            return {
                error: t
            }
        }
    }, P = function(t, e) {
        if (!t._n) {
            t._n = !0;
            var n = t._c;
            m(function() {
                for (var r = t._v, o = 1 == t._s, i = 0, s = function(e) {
                    var n, i, s = o ? e.ok : e.fail, a = e.resolve, c = e.reject, u = e.domain;
                    try {
                        s ? (o || (2 == t._h && F(t),
                        t._h = 1),
                        s === !0 ? n = r : (u && u.enter(),
                        n = s(r),
                        u && u.exit()),
                        n === e.promise ? c(w("Promise-chain cycle")) : (i = T(n)) ? i.call(n, a, c) : a(n)) : c(r)
                    } catch (t) {
                        c(t)
                    }
                }; n.length > i; )
                    s(n[i++]);
                t._c = [],
                t._n = !1,
                e && !t._h && j(t)
            })
        }
    }, j = function(t) {
        y.call(a, function() {
            var e, n, r, o = t._v;
            if (M(t) && (e = A(function() {
                S ? b.emit("unhandledRejection", o, t) : (n = a.onunhandledrejection) ? n({
                    promise: t,
                    reason: o
                }) : (r = a.console) && r.error && r.error("Unhandled promise rejection", o)
            }),
            t._h = S || M(t) ? 2 : 1),
            t._a = void 0,
            e)
                throw e.error
        })
    }, M = function t(e) {
        if (1 == e._h)
            return !1;
        for (var n, r = e._a || e._c, o = 0; r.length > o; )
            if (n = r[o++],
            n.fail || !t(n.promise))
                return !1;
        return !0
    }, F = function(t) {
        y.call(a, function() {
            var e;
            S ? b.emit("rejectionHandled", t) : (e = a.onrejectionhandled) && e({
                promise: t,
                reason: t._v
            })
        })
    }, L = function(t) {
        var e = this;
        e._d || (e._d = !0,
        e = e._w || e,
        e._v = t,
        e._s = 2,
        e._a || (e._a = e._c.slice()),
        P(e, !0))
    }, N = function t(e) {
        var n, r = this;
        if (!r._d) {
            r._d = !0,
            r = r._w || r;
            try {
                if (r === e)
                    throw w("Promise can't be resolved itself");
                (n = T(e)) ? m(function() {
                    var o = {
                        _w: r,
                        _d: !1
                    };
                    try {
                        n.call(e, c(t, o, 1), c(L, o, 1))
                    } catch (t) {
                        L.call(o, t)
                    }
                }) : (r._v = e,
                r._s = 1,
                P(r, !1))
            } catch (t) {
                L.call({
                    _w: r,
                    _d: !1
                }, t)
            }
        }
    };
    E || (_ = function(t) {
        d(this, _, g, "_h"),
        h(t),
        r.call(this);
        try {
            t(c(N, this, 1), c(L, this, 1))
        } catch (t) {
            L.call(this, t)
        }
    }
    ,
    r = function(t) {
        this._c = [],
        this._a = void 0,
        this._s = 0,
        this._d = !1,
        this._v = void 0,
        this._h = 0,
        this._n = !1
    }
    ,
    r.prototype = n(56)(_.prototype, {
        then: function(t, e) {
            var n = O(v(this, _));
            return n.ok = "function" != typeof t || t,
            n.fail = "function" == typeof e && e,
            n.domain = S ? b.domain : void 0,
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && P(this, !1),
            n.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }),
    C = function() {
        var t = new r;
        this.promise = t,
        this.resolve = c(N, t, 1),
        this.reject = c(L, t, 1)
    }
    ),
    l(l.G + l.W + l.F * !E, {
        Promise: _
    }),
    n(17)(_, g),
    n(57)(g),
    i = n(4)[g],
    l(l.S + l.F * !E, g, {
        reject: function(t) {
            var e = O(this)
              , n = e.reject;
            return n(t),
            e.promise
        }
    }),
    l(l.S + l.F * (s || !E), g, {
        resolve: function(t) {
            if (t instanceof _ && k(t.constructor, this))
                return t;
            var e = O(this)
              , n = e.resolve;
            return n(t),
            e.promise
        }
    }),
    l(l.S + l.F * !(E && n(48)(function(t) {
        _.all(t).catch(x)
    })), g, {
        all: function(t) {
            var e = this
              , n = O(e)
              , r = n.resolve
              , o = n.reject
              , i = A(function() {
                var n = []
                  , i = 0
                  , s = 1;
                p(t, !1, function(t) {
                    var a = i++
                      , c = !1;
                    n.push(void 0),
                    s++,
                    e.resolve(t).then(function(t) {
                        c || (c = !0,
                        n[a] = t,
                        --s || r(n))
                    }, o)
                }),
                --s || r(n)
            });
            return i && o(i.error),
            n.promise
        },
        race: function(t) {
            var e = this
              , n = O(e)
              , r = n.reject
              , o = A(function() {
                p(t, !1, function(t) {
                    e.resolve(t).then(n.resolve, r)
                })
            });
            return o && r(o.error),
            n.promise
        }
    })
}
, function(t, e, n) {
    "use strict";
    var r = n(59)(!0);
    n(27)(String, "String", function(t) {
        this._t = String(t),
        this._i = 0
    }, function() {
        var t, e = this._t, n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = r(e, n),
        this._i += t.length,
        {
            value: t,
            done: !1
        })
    })
}
, function(t, e, n) {
    "use strict";
    for (var r = n(64), o = n(8), i = n(1), s = n(3), a = n(7), c = n(0), u = c("iterator"), l = c("toStringTag"), f = a.Array, h = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], d = 0; d < 5; d++) {
        var p, v = h[d], y = i[v], m = y && y.prototype;
        if (m) {
            m[u] || s(m, u, f),
            m[l] || s(m, l, v),
            a[v] = f;
            for (p in r)
                m[p] || o(m, p, r[p], !0)
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
    !function() {
        function i(t, e) {
            function n(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }
            var r;
            if (e = e || {},
            this.trackingClick = !1,
            this.trackingClickStart = 0,
            this.targetElement = null,
            this.touchStartX = 0,
            this.touchStartY = 0,
            this.lastTouchIdentifier = 0,
            this.touchBoundary = e.touchBoundary || 10,
            this.layer = t,
            this.tapDelay = e.tapDelay || 200,
            this.tapTimeout = e.tapTimeout || 700,
            !i.notNeeded(t)) {
                for (var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], s = this, c = 0, u = o.length; c < u; c++)
                    s[o[c]] = n(s[o[c]], s);
                a && (t.addEventListener("mouseover", this.onMouse, !0),
                t.addEventListener("mousedown", this.onMouse, !0),
                t.addEventListener("mouseup", this.onMouse, !0)),
                t.addEventListener("click", this.onClick, !0),
                t.addEventListener("touchstart", this.onTouchStart, !1),
                t.addEventListener("touchmove", this.onTouchMove, !1),
                t.addEventListener("touchend", this.onTouchEnd, !1),
                t.addEventListener("touchcancel", this.onTouchCancel, !1),
                Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, r) {
                    var o = Node.prototype.removeEventListener;
                    "click" === e ? o.call(t, e, n.hijacked || n, r) : o.call(t, e, n, r)
                }
                ,
                t.addEventListener = function(e, n, r) {
                    var o = Node.prototype.addEventListener;
                    "click" === e ? o.call(t, e, n.hijacked || (n.hijacked = function(t) {
                        t.propagationStopped || n(t)
                    }
                    ), r) : o.call(t, e, n, r)
                }
                ),
                "function" == typeof t.onclick && (r = t.onclick,
                t.addEventListener("click", function(t) {
                    r(t)
                }, !1),
                t.onclick = null)
            }
        }
        var s = navigator.userAgent.indexOf("Windows Phone") >= 0
          , a = navigator.userAgent.indexOf("Android") > 0 && !s
          , c = /iP(ad|hone|od)/.test(navigator.userAgent) && !s
          , u = c && /OS 4_\d(_\d)?/.test(navigator.userAgent)
          , l = c && /OS [6-7]_\d/.test(navigator.userAgent)
          , f = navigator.userAgent.indexOf("BB10") > 0;
        i.prototype.needsClick = function(t) {
            switch (t.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (t.disabled)
                    return !0;
                break;
            case "input":
                if (c && "file" === t.type || t.disabled)
                    return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
            }
            return /\bneedsclick\b/.test(t.className)
        }
        ,
        i.prototype.needsFocus = function(t) {
            switch (t.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !a;
            case "input":
                switch (t.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                    return !1
                }
                return !t.disabled && !t.readOnly;
            default:
                return /\bneedsfocus\b/.test(t.className)
            }
        }
        ,
        i.prototype.sendClick = function(t, e) {
            var n, r;
            document.activeElement && document.activeElement !== t && document.activeElement.blur(),
            r = e.changedTouches[0],
            n = document.createEvent("MouseEvents"),
            n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null),
            n.forwardedTouchEvent = !0,
            t.dispatchEvent(n)
        }
        ,
        i.prototype.determineEventType = function(t) {
            return a && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
        }
        ,
        i.prototype.focus = function(t) {
            var e;
            c && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length,
            t.setSelectionRange(e, e)) : t.focus()
        }
        ,
        i.prototype.updateScrollParent = function(t) {
            var e, n;
            if (e = t.fastClickScrollParent,
            !e || !e.contains(t)) {
                n = t;
                do {
                    if (n.scrollHeight > n.offsetHeight) {
                        e = n,
                        t.fastClickScrollParent = n;
                        break
                    }
                    n = n.parentElement
                } while (n)
            }
            e && (e.fastClickLastScrollTop = e.scrollTop)
        }
        ,
        i.prototype.getTargetElementFromEventTarget = function(t) {
            return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
        }
        ,
        i.prototype.onTouchStart = function(t) {
            var e, n, r;
            if (t.targetTouches.length > 1)
                return !0;
            if (e = this.getTargetElementFromEventTarget(t.target),
            n = t.targetTouches[0],
            c) {
                if (r = window.getSelection(),
                r.rangeCount && !r.isCollapsed)
                    return !0;
                if (!u) {
                    if (n.identifier && n.identifier === this.lastTouchIdentifier)
                        return t.preventDefault(),
                        !1;
                    this.lastTouchIdentifier = n.identifier,
                    this.updateScrollParent(e)
                }
            }
            return this.trackingClick = !0,
            this.trackingClickStart = t.timeStamp,
            this.targetElement = e,
            this.touchStartX = n.pageX,
            this.touchStartY = n.pageY,
            t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(),
            !0
        }
        ,
        i.prototype.touchHasMoved = function(t) {
            var e = t.changedTouches[0]
              , n = this.touchBoundary;
            return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n
        }
        ,
        i.prototype.onTouchMove = function(t) {
            return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1,
            this.targetElement = null),
            !0)
        }
        ,
        i.prototype.findControl = function(t) {
            return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }
        ,
        i.prototype.onTouchEnd = function(t) {
            var e, n, r, o, i, s = this.targetElement;
            if (!this.trackingClick)
                return !0;
            if (t.timeStamp - this.lastClickTime < this.tapDelay)
                return this.cancelNextClick = !0,
                !0;
            if (t.timeStamp - this.trackingClickStart > this.tapTimeout)
                return !0;
            if (this.cancelNextClick = !1,
            this.lastClickTime = t.timeStamp,
            n = this.trackingClickStart,
            this.trackingClick = !1,
            this.trackingClickStart = 0,
            l && (i = t.changedTouches[0],
            s = document.elementFromPoint(i.pageX - window.pageXOffset, i.pageY - window.pageYOffset) || s,
            s.fastClickScrollParent = this.targetElement.fastClickScrollParent),
            r = s.tagName.toLowerCase(),
            "label" === r) {
                if (e = this.findControl(s)) {
                    if (this.focus(s),
                    a)
                        return !1;
                    s = e
                }
            } else if (this.needsFocus(s))
                return t.timeStamp - n > 100 || c && window.top !== window && "input" === r ? (this.targetElement = null,
                !1) : (this.focus(s),
                this.sendClick(s, t),
                c && "select" === r || (this.targetElement = null,
                t.preventDefault()),
                !1);
            return !(!c || u || (o = s.fastClickScrollParent,
            !o || o.fastClickLastScrollTop === o.scrollTop)) || (this.needsClick(s) || (t.preventDefault(),
            this.sendClick(s, t)),
            !1)
        }
        ,
        i.prototype.onTouchCancel = function() {
            this.trackingClick = !1,
            this.targetElement = null
        }
        ,
        i.prototype.onMouse = function(t) {
            return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0,
            t.stopPropagation(),
            t.preventDefault(),
            !1))))
        }
        ,
        i.prototype.onClick = function(t) {
            var e;
            return this.trackingClick ? (this.targetElement = null,
            this.trackingClick = !1,
            !0) : "submit" === t.target.type && 0 === t.detail || (e = this.onMouse(t),
            e || (this.targetElement = null),
            e)
        }
        ,
        i.prototype.destroy = function() {
            var t = this.layer;
            a && (t.removeEventListener("mouseover", this.onMouse, !0),
            t.removeEventListener("mousedown", this.onMouse, !0),
            t.removeEventListener("mouseup", this.onMouse, !0)),
            t.removeEventListener("click", this.onClick, !0),
            t.removeEventListener("touchstart", this.onTouchStart, !1),
            t.removeEventListener("touchmove", this.onTouchMove, !1),
            t.removeEventListener("touchend", this.onTouchEnd, !1),
            t.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }
        ,
        i.notNeeded = function(t) {
            var e, n, r, o;
            if ("undefined" == typeof window.ontouchstart)
                return !0;
            if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!a)
                    return !0;
                if (e = document.querySelector("meta[name=viewport]")) {
                    if (e.content.indexOf("user-scalable=no") !== -1)
                        return !0;
                    if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth)
                        return !0
                }
            }
            if (f && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),
            r[1] >= 10 && r[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
                if (e.content.indexOf("user-scalable=no") !== -1)
                    return !0;
                if (document.documentElement.scrollWidth <= window.outerWidth)
                    return !0
            }
            return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (o = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1],
            !!(o >= 27 && (e = document.querySelector("meta[name=viewport]"),
            e && (e.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction))
        }
        ,
        i.attach = function(t, e) {
            return new i(t,e)
        }
        ,
        "object" === o(n(33)) && n(33) ? (r = function() {
            return i
        }
        .call(e, n, e, t),
        !(void 0 !== r && (t.exports = r))) : "undefined" != typeof t && t.exports ? (t.exports = i.attach,
        t.exports.FastClick = i) : window.FastClick = i
    }()
}
, function(t, e, n) {
    "use strict";
    var r, o, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
    !function(s) {
        var a = !1;
        if (r = s,
        o = "function" == typeof r ? r.call(e, n, e, t) : r,
        !(void 0 !== o && (t.exports = o)),
        a = !0,
        "object" === i(e) && (t.exports = s(),
        a = !0),
        !a) {
            var c = window.Cookies
              , u = window.Cookies = s();
            u.noConflict = function() {
                return window.Cookies = c,
                u
            }
        }
    }(function() {
        function t() {
            for (var t = 0, e = {}; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    e[r] = n[r]
            }
            return e
        }
        function e(n) {
            function r(e, o, i) {
                var s;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if (i = t({
                            path: "/"
                        }, r.defaults, i),
                        "number" == typeof i.expires) {
                            var a = new Date;
                            a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires),
                            i.expires = a
                        }
                        try {
                            s = JSON.stringify(o),
                            /^[\{\[]/.test(s) && (o = s)
                        } catch (t) {}
                        return o = n.write ? n.write(o, e) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                        e = encodeURIComponent(String(e)),
                        e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent),
                        e = e.replace(/[\(\)]/g, escape),
                        document.cookie = [e, "=", o, i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
                    }
                    e || (s = {});
                    for (var c = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, l = 0; l < c.length; l++) {
                        var f = c[l].split("=")
                          , h = f.slice(1).join("=");
                        '"' === h.charAt(0) && (h = h.slice(1, -1));
                        try {
                            var d = f[0].replace(u, decodeURIComponent);
                            if (h = n.read ? n.read(h, d) : n(h, d) || h.replace(u, decodeURIComponent),
                            this.json)
                                try {
                                    h = JSON.parse(h)
                                } catch (t) {}
                            if (e === d) {
                                s = h;
                                break
                            }
                            e || (s[d] = h)
                        } catch (t) {}
                    }
                    return s
                }
            }
            return r.set = r,
            r.get = function(t) {
                return r.call(r, t)
            }
            ,
            r.getJSON = function() {
                return r.apply({
                    json: !0
                }, [].slice.call(arguments))
            }
            ,
            r.defaults = {},
            r.remove = function(e, n) {
                r(e, "", t(n, {
                    expires: -1
                }))
            }
            ,
            r.withConverter = e,
            r
        }
        return e(function() {})
    })
}
, function(t, e, n) {
    "use strict";
    var r, o;
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
    !function() {
        var i = function t(e) {
            var n = new t.Index;
            return n.pipeline.add(t.trimmer, t.stopWordFilter, t.stemmer),
            e && e.call(n, n),
            n
        };
        i.version = "0.7.2",
        i.utils = {},
        i.utils.warn = function(t) {
            return function(e) {
                t.console && console.warn && console.warn(e)
            }
        }(this),
        i.utils.asString = function(t) {
            return void 0 === t || null === t ? "" : t.toString()
        }
        ,
        i.EventEmitter = function() {
            this.events = {}
        }
        ,
        i.EventEmitter.prototype.addListener = function() {
            var t = Array.prototype.slice.call(arguments)
              , e = t.pop()
              , n = t;
            if ("function" != typeof e)
                throw new TypeError("last argument must be a function");
            n.forEach(function(t) {
                this.hasHandler(t) || (this.events[t] = []),
                this.events[t].push(e)
            }, this)
        }
        ,
        i.EventEmitter.prototype.removeListener = function(t, e) {
            if (this.hasHandler(t)) {
                var n = this.events[t].indexOf(e);
                this.events[t].splice(n, 1),
                this.events[t].length || delete this.events[t]
            }
        }
        ,
        i.EventEmitter.prototype.emit = function(t) {
            if (this.hasHandler(t)) {
                var e = Array.prototype.slice.call(arguments, 1);
                this.events[t].forEach(function(t) {
                    t.apply(void 0, e)
                })
            }
        }
        ,
        i.EventEmitter.prototype.hasHandler = function(t) {
            return t in this.events
        }
        ,
        i.tokenizer = function(t) {
            if (!arguments.length || null == t || void 0 == t)
                return [];
            if (Array.isArray(t))
                return t.map(function(t) {
                    return i.utils.asString(t).toLowerCase()
                });
            var e = i.tokenizer.seperator || i.tokenizer.separator;
            return t.toString().trim().toLowerCase().split(e)
        }
        ,
        i.tokenizer.seperator = !1,
        i.tokenizer.separator = /[\s\-]+/,
        i.tokenizer.load = function(t) {
            var e = this.registeredFunctions[t];
            if (!e)
                throw new Error("Cannot load un-registered function: " + t);
            return e
        }
        ,
        i.tokenizer.label = "default",
        i.tokenizer.registeredFunctions = {
            default: i.tokenizer
        },
        i.tokenizer.registerFunction = function(t, e) {
            e in this.registeredFunctions && i.utils.warn("Overwriting existing tokenizer: " + e),
            t.label = e,
            this.registeredFunctions[e] = t
        }
        ,
        i.Pipeline = function() {
            this._stack = []
        }
        ,
        i.Pipeline.registeredFunctions = {},
        i.Pipeline.registerFunction = function(t, e) {
            e in this.registeredFunctions && i.utils.warn("Overwriting existing registered function: " + e),
            t.label = e,
            i.Pipeline.registeredFunctions[t.label] = t
        }
        ,
        i.Pipeline.warnIfFunctionNotRegistered = function(t) {
            var e = t.label && t.label in this.registeredFunctions;
            e || i.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", t)
        }
        ,
        i.Pipeline.load = function(t) {
            var e = new i.Pipeline;
            return t.forEach(function(t) {
                var n = i.Pipeline.registeredFunctions[t];
                if (!n)
                    throw new Error("Cannot load un-registered function: " + t);
                e.add(n)
            }),
            e
        }
        ,
        i.Pipeline.prototype.add = function() {
            var t = Array.prototype.slice.call(arguments);
            t.forEach(function(t) {
                i.Pipeline.warnIfFunctionNotRegistered(t),
                this._stack.push(t)
            }, this)
        }
        ,
        i.Pipeline.prototype.after = function(t, e) {
            i.Pipeline.warnIfFunctionNotRegistered(e);
            var n = this._stack.indexOf(t);
            if (n == -1)
                throw new Error("Cannot find existingFn");
            n += 1,
            this._stack.splice(n, 0, e)
        }
        ,
        i.Pipeline.prototype.before = function(t, e) {
            i.Pipeline.warnIfFunctionNotRegistered(e);
            var n = this._stack.indexOf(t);
            if (n == -1)
                throw new Error("Cannot find existingFn");
            this._stack.splice(n, 0, e)
        }
        ,
        i.Pipeline.prototype.remove = function(t) {
            var e = this._stack.indexOf(t);
            e != -1 && this._stack.splice(e, 1)
        }
        ,
        i.Pipeline.prototype.run = function(t) {
            for (var e = [], n = t.length, r = this._stack.length, o = 0; o < n; o++) {
                for (var i = t[o], s = 0; s < r && (i = this._stack[s](i, o, t),
                void 0 !== i && "" !== i); s++)
                    ;
                void 0 !== i && "" !== i && e.push(i)
            }
            return e
        }
        ,
        i.Pipeline.prototype.reset = function() {
            this._stack = []
        }
        ,
        i.Pipeline.prototype.toJSON = function() {
            return this._stack.map(function(t) {
                return i.Pipeline.warnIfFunctionNotRegistered(t),
                t.label
            })
        }
        ,
        i.Vector = function() {
            this._magnitude = null,
            this.list = void 0,
            this.length = 0
        }
        ,
        i.Vector.Node = function(t, e, n) {
            this.idx = t,
            this.val = e,
            this.next = n
        }
        ,
        i.Vector.prototype.insert = function(t, e) {
            this._magnitude = void 0;
            var n = this.list;
            if (!n)
                return this.list = new i.Vector.Node(t,e,n),
                this.length++;
            if (t < n.idx)
                return this.list = new i.Vector.Node(t,e,n),
                this.length++;
            for (var r = n, o = n.next; void 0 != o; ) {
                if (t < o.idx)
                    return r.next = new i.Vector.Node(t,e,o),
                    this.length++;
                r = o,
                o = o.next
            }
            return r.next = new i.Vector.Node(t,e,o),
            this.length++
        }
        ,
        i.Vector.prototype.magnitude = function() {
            if (this._magnitude)
                return this._magnitude;
            for (var t, e = this.list, n = 0; e; )
                t = e.val,
                n += t * t,
                e = e.next;
            return this._magnitude = Math.sqrt(n)
        }
        ,
        i.Vector.prototype.dot = function(t) {
            for (var e = this.list, n = t.list, r = 0; e && n; )
                e.idx < n.idx ? e = e.next : e.idx > n.idx ? n = n.next : (r += e.val * n.val,
                e = e.next,
                n = n.next);
            return r
        }
        ,
        i.Vector.prototype.similarity = function(t) {
            return this.dot(t) / (this.magnitude() * t.magnitude())
        }
        ,
        i.SortedSet = function() {
            this.length = 0,
            this.elements = []
        }
        ,
        i.SortedSet.load = function(t) {
            var e = new this;
            return e.elements = t,
            e.length = t.length,
            e
        }
        ,
        i.SortedSet.prototype.add = function() {
            var t, e;
            for (t = 0; t < arguments.length; t++)
                e = arguments[t],
                ~this.indexOf(e) || this.elements.splice(this.locationFor(e), 0, e);
            this.length = this.elements.length
        }
        ,
        i.SortedSet.prototype.toArray = function() {
            return this.elements.slice()
        }
        ,
        i.SortedSet.prototype.map = function(t, e) {
            return this.elements.map(t, e)
        }
        ,
        i.SortedSet.prototype.forEach = function(t, e) {
            return this.elements.forEach(t, e)
        }
        ,
        i.SortedSet.prototype.indexOf = function(t) {
            for (var e = 0, n = this.elements.length, r = n - e, o = e + Math.floor(r / 2), i = this.elements[o]; r > 1; ) {
                if (i === t)
                    return o;
                i < t && (e = o),
                i > t && (n = o),
                r = n - e,
                o = e + Math.floor(r / 2),
                i = this.elements[o]
            }
            return i === t ? o : -1
        }
        ,
        i.SortedSet.prototype.locationFor = function(t) {
            for (var e = 0, n = this.elements.length, r = n - e, o = e + Math.floor(r / 2), i = this.elements[o]; r > 1; )
                i < t && (e = o),
                i > t && (n = o),
                r = n - e,
                o = e + Math.floor(r / 2),
                i = this.elements[o];
            return i > t ? o : i < t ? o + 1 : void 0
        }
        ,
        i.SortedSet.prototype.intersect = function(t) {
            for (var e = new i.SortedSet, n = 0, r = 0, o = this.length, s = t.length, a = this.elements, c = t.elements; ; ) {
                if (n > o - 1 || r > s - 1)
                    break;
                a[n] !== c[r] ? a[n] < c[r] ? n++ : a[n] > c[r] && r++ : (e.add(a[n]),
                n++,
                r++)
            }
            return e
        }
        ,
        i.SortedSet.prototype.clone = function() {
            var t = new i.SortedSet;
            return t.elements = this.toArray(),
            t.length = t.elements.length,
            t
        }
        ,
        i.SortedSet.prototype.union = function(t) {
            var e, n, r;
            this.length >= t.length ? (e = this,
            n = t) : (e = t,
            n = this),
            r = e.clone();
            for (var o = 0, i = n.toArray(); o < i.length; o++)
                r.add(i[o]);
            return r
        }
        ,
        i.SortedSet.prototype.toJSON = function() {
            return this.toArray()
        }
        ,
        i.Index = function() {
            this._fields = [],
            this._ref = "id",
            this.pipeline = new i.Pipeline,
            this.documentStore = new i.Store,
            this.tokenStore = new i.TokenStore,
            this.corpusTokens = new i.SortedSet,
            this.eventEmitter = new i.EventEmitter,
            this.tokenizerFn = i.tokenizer,
            this._idfCache = {},
            this.on("add", "remove", "update", function() {
                this._idfCache = {}
            }
            .bind(this))
        }
        ,
        i.Index.prototype.on = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.eventEmitter.addListener.apply(this.eventEmitter, t)
        }
        ,
        i.Index.prototype.off = function(t, e) {
            return this.eventEmitter.removeListener(t, e)
        }
        ,
        i.Index.load = function(t) {
            t.version !== i.version && i.utils.warn("version mismatch: current " + i.version + " importing " + t.version);
            var e = new this;
            return e._fields = t.fields,
            e._ref = t.ref,
            e.tokenizer(i.tokenizer.load(t.tokenizer)),
            e.documentStore = i.Store.load(t.documentStore),
            e.tokenStore = i.TokenStore.load(t.tokenStore),
            e.corpusTokens = i.SortedSet.load(t.corpusTokens),
            e.pipeline = i.Pipeline.load(t.pipeline),
            e
        }
        ,
        i.Index.prototype.field = function(t, e) {
            var e = e || {}
              , n = {
                name: t,
                boost: e.boost || 1
            };
            return this._fields.push(n),
            this
        }
        ,
        i.Index.prototype.ref = function(t) {
            return this._ref = t,
            this
        }
        ,
        i.Index.prototype.tokenizer = function(t) {
            var e = t.label && t.label in i.tokenizer.registeredFunctions;
            return e || i.utils.warn("Function is not a registered tokenizer. This may cause problems when serialising the index"),
            this.tokenizerFn = t,
            this
        }
        ,
        i.Index.prototype.add = function(t, e) {
            var n = {}
              , r = new i.SortedSet
              , o = t[this._ref]
              , e = void 0 === e || e;
            this._fields.forEach(function(e) {
                var o = this.pipeline.run(this.tokenizerFn(t[e.name]));
                n[e.name] = o;
                for (var i = 0; i < o.length; i++) {
                    var s = o[i];
                    r.add(s),
                    this.corpusTokens.add(s)
                }
            }, this),
            this.documentStore.set(o, r);
            for (var s = 0; s < r.length; s++) {
                for (var a = r.elements[s], c = 0, u = 0; u < this._fields.length; u++) {
                    var l = this._fields[u]
                      , f = n[l.name]
                      , h = f.length;
                    if (h) {
                        for (var d = 0, p = 0; p < h; p++)
                            f[p] === a && d++;
                        c += d / h * l.boost
                    }
                }
                this.tokenStore.add(a, {
                    ref: o,
                    tf: c
                })
            }
            e && this.eventEmitter.emit("add", t, this)
        }
        ,
        i.Index.prototype.remove = function(t, e) {
            var n = t[this._ref]
              , e = void 0 === e || e;
            if (this.documentStore.has(n)) {
                var r = this.documentStore.get(n);
                this.documentStore.remove(n),
                r.forEach(function(t) {
                    this.tokenStore.remove(t, n)
                }, this),
                e && this.eventEmitter.emit("remove", t, this)
            }
        }
        ,
        i.Index.prototype.update = function(t, e) {
            var e = void 0 === e || e;
            this.remove(t, !1),
            this.add(t, !1),
            e && this.eventEmitter.emit("update", t, this)
        }
        ,
        i.Index.prototype.idf = function(t) {
            var e = "@" + t;
            if (Object.prototype.hasOwnProperty.call(this._idfCache, e))
                return this._idfCache[e];
            var n = this.tokenStore.count(t)
              , r = 1;
            return n > 0 && (r = 1 + Math.log(this.documentStore.length / n)),
            this._idfCache[e] = r
        }
        ,
        i.Index.prototype.search = function(t) {
            var e = this.pipeline.run(this.tokenizerFn(t))
              , n = new i.Vector
              , r = []
              , o = this._fields.reduce(function(t, e) {
                return t + e.boost
            }, 0)
              , s = e.some(function(t) {
                return this.tokenStore.has(t)
            }, this);
            if (!s)
                return [];
            e.forEach(function(t, e, s) {
                var a = 1 / s.length * this._fields.length * o
                  , c = this
                  , u = this.tokenStore.expand(t).reduce(function(e, r) {
                    var o = c.corpusTokens.indexOf(r)
                      , s = c.idf(r)
                      , u = 1
                      , l = new i.SortedSet;
                    if (r !== t) {
                        var f = Math.max(3, r.length - t.length);
                        u = 1 / Math.log(f)
                    }
                    o > -1 && n.insert(o, a * s * u);
                    for (var h = c.tokenStore.get(r), d = Object.keys(h), p = d.length, v = 0; v < p; v++)
                        l.add(h[d[v]].ref);
                    return e.union(l)
                }, new i.SortedSet);
                r.push(u)
            }, this);
            var a = r.reduce(function(t, e) {
                return t.intersect(e)
            });
            return a.map(function(t) {
                return {
                    ref: t,
                    score: n.similarity(this.documentVector(t))
                }
            }, this).sort(function(t, e) {
                return e.score - t.score
            })
        }
        ,
        i.Index.prototype.documentVector = function(t) {
            for (var e = this.documentStore.get(t), n = e.length, r = new i.Vector, o = 0; o < n; o++) {
                var s = e.elements[o]
                  , a = this.tokenStore.get(s)[t].tf
                  , c = this.idf(s);
                r.insert(this.corpusTokens.indexOf(s), a * c)
            }
            return r
        }
        ,
        i.Index.prototype.toJSON = function() {
            return {
                version: i.version,
                fields: this._fields,
                ref: this._ref,
                tokenizer: this.tokenizerFn.label,
                documentStore: this.documentStore.toJSON(),
                tokenStore: this.tokenStore.toJSON(),
                corpusTokens: this.corpusTokens.toJSON(),
                pipeline: this.pipeline.toJSON()
            }
        }
        ,
        i.Index.prototype.use = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            e.unshift(this),
            t.apply(this, e)
        }
        ,
        i.Store = function() {
            this.store = {},
            this.length = 0
        }
        ,
        i.Store.load = function(t) {
            var e = new this;
            return e.length = t.length,
            e.store = Object.keys(t.store).reduce(function(e, n) {
                return e[n] = i.SortedSet.load(t.store[n]),
                e
            }, {}),
            e
        }
        ,
        i.Store.prototype.set = function(t, e) {
            this.has(t) || this.length++,
            this.store[t] = e
        }
        ,
        i.Store.prototype.get = function(t) {
            return this.store[t]
        }
        ,
        i.Store.prototype.has = function(t) {
            return t in this.store
        }
        ,
        i.Store.prototype.remove = function(t) {
            this.has(t) && (delete this.store[t],
            this.length--)
        }
        ,
        i.Store.prototype.toJSON = function() {
            return {
                store: this.store,
                length: this.length
            }
        }
        ,
        i.stemmer = function() {
            var t = {
                ational: "ate",
                tional: "tion",
                enci: "ence",
                anci: "ance",
                izer: "ize",
                bli: "ble",
                alli: "al",
                entli: "ent",
                eli: "e",
                ousli: "ous",
                ization: "ize",
                ation: "ate",
                ator: "ate",
                alism: "al",
                iveness: "ive",
                fulness: "ful",
                ousness: "ous",
                aliti: "al",
                iviti: "ive",
                biliti: "ble",
                logi: "log"
            }
              , e = {
                icate: "ic",
                ative: "",
                alize: "al",
                iciti: "ic",
                ical: "ic",
                ful: "",
                ness: ""
            }
              , n = "[^aeiou]"
              , r = "[aeiouy]"
              , o = n + "[^aeiouy]*"
              , i = r + "[aeiou]*"
              , s = "^(" + o + ")?" + i + o
              , a = "^(" + o + ")?" + i + o + "(" + i + ")?$"
              , c = "^(" + o + ")?" + i + o + i + o
              , u = "^(" + o + ")?" + r
              , l = new RegExp(s)
              , f = new RegExp(c)
              , h = new RegExp(a)
              , d = new RegExp(u)
              , p = /^(.+?)(ss|i)es$/
              , v = /^(.+?)([^s])s$/
              , y = /^(.+?)eed$/
              , m = /^(.+?)(ed|ing)$/
              , g = /.$/
              , w = /(at|bl|iz)$/
              , b = new RegExp("([^aeiouylsz])\\1$")
              , _ = new RegExp("^" + o + r + "[^aeiouwxy]$")
              , S = /^(.+?[^aeiou])y$/
              , x = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/
              , E = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/
              , k = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/
              , T = /^(.+?)(s|t)(ion)$/
              , O = /^(.+?)e$/
              , C = /ll$/
              , A = new RegExp("^" + o + r + "[^aeiouwxy]$")
              , P = function(n) {
                var r, o, i, s, a, c, u;
                if (n.length < 3)
                    return n;
                if (i = n.substr(0, 1),
                "y" == i && (n = i.toUpperCase() + n.substr(1)),
                s = p,
                a = v,
                s.test(n) ? n = n.replace(s, "$1$2") : a.test(n) && (n = n.replace(a, "$1$2")),
                s = y,
                a = m,
                s.test(n)) {
                    var P = s.exec(n);
                    s = l,
                    s.test(P[1]) && (s = g,
                    n = n.replace(s, ""))
                } else if (a.test(n)) {
                    var P = a.exec(n);
                    r = P[1],
                    a = d,
                    a.test(r) && (n = r,
                    a = w,
                    c = b,
                    u = _,
                    a.test(n) ? n += "e" : c.test(n) ? (s = g,
                    n = n.replace(s, "")) : u.test(n) && (n += "e"))
                }
                if (s = S,
                s.test(n)) {
                    var P = s.exec(n);
                    r = P[1],
                    n = r + "i"
                }
                if (s = x,
                s.test(n)) {
                    var P = s.exec(n);
                    r = P[1],
                    o = P[2],
                    s = l,
                    s.test(r) && (n = r + t[o])
                }
                if (s = E,
                s.test(n)) {
                    var P = s.exec(n);
                    r = P[1],
                    o = P[2],
                    s = l,
                    s.test(r) && (n = r + e[o])
                }
                if (s = k,
                a = T,
                s.test(n)) {
                    var P = s.exec(n);
                    r = P[1],
                    s = f,
                    s.test(r) && (n = r)
                } else if (a.test(n)) {
                    var P = a.exec(n);
                    r = P[1] + P[2],
                    a = f,
                    a.test(r) && (n = r)
                }
                if (s = O,
                s.test(n)) {
                    var P = s.exec(n);
                    r = P[1],
                    s = f,
                    a = h,
                    c = A,
                    (s.test(r) || a.test(r) && !c.test(r)) && (n = r)
                }
                return s = C,
                a = f,
                s.test(n) && a.test(n) && (s = g,
                n = n.replace(s, "")),
                "y" == i && (n = i.toLowerCase() + n.substr(1)),
                n
            };
            return P
        }(),
        i.Pipeline.registerFunction(i.stemmer, "stemmer"),
        i.generateStopWordFilter = function(t) {
            var e = t.reduce(function(t, e) {
                return t[e] = e,
                t
            }, {});
            return function(t) {
                if (t && e[t] !== t)
                    return t
            }
        }
        ,
        i.stopWordFilter = i.generateStopWordFilter([] || ["a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"]),
        i.Pipeline.registerFunction(i.stopWordFilter, "stopWordFilter"),
        i.trimmer = function(t) {
            return t.replace(/^\W+/, "").replace(/\W+$/, "")
        }
        ,
        i.Pipeline.registerFunction(i.trimmer, "trimmer"),
        i.TokenStore = function() {
            this.root = {
                docs: {}
            },
            this.length = 0
        }
        ,
        i.TokenStore.load = function(t) {
            var e = new this;
            return e.root = t.root,
            e.length = t.length,
            e
        }
        ,
        i.TokenStore.prototype.add = function(t, e, n) {
            var n = n || this.root
              , r = t.charAt(0)
              , o = t.slice(1);
            return r in n || (n[r] = {
                docs: {}
            }),
            0 === o.length ? (n[r].docs[e.ref] = e,
            void (this.length += 1)) : this.add(o, e, n[r])
        }
        ,
        i.TokenStore.prototype.has = function(t) {
            if (!t)
                return !1;
            for (var e = this.root, n = 0; n < t.length; n++) {
                if (!e[t.charAt(n)])
                    return !1;
                e = e[t.charAt(n)]
            }
            return !0
        }
        ,
        i.TokenStore.prototype.getNode = function(t) {
            if (!t)
                return {};
            for (var e = this.root, n = 0; n < t.length; n++) {
                if (!e[t.charAt(n)])
                    return {};
                e = e[t.charAt(n)]
            }
            return e
        }
        ,
        i.TokenStore.prototype.get = function(t, e) {
            return this.getNode(t, e).docs || {}
        }
        ,
        i.TokenStore.prototype.count = function(t, e) {
            return Object.keys(this.get(t, e)).length
        }
        ,
        i.TokenStore.prototype.remove = function(t, e) {
            if (t) {
                for (var n = this.root, r = 0; r < t.length; r++) {
                    if (!(t.charAt(r)in n))
                        return;
                    n = n[t.charAt(r)]
                }
                delete n.docs[e]
            }
        }
        ,
        i.TokenStore.prototype.expand = function(t, e) {
            var n = this.getNode(t)
              , r = n.docs || {}
              , e = e || [];
            return Object.keys(r).length && e.push(t),
            Object.keys(n).forEach(function(n) {
                "docs" !== n && e.concat(this.expand(t + n, e))
            }, this),
            e
        }
        ,
        i.TokenStore.prototype.toJSON = function() {
            return {
                root: this.root,
                length: this.length
            }
        }
        ,
        function(i, s) {
            r = s,
            o = "function" == typeof r ? r.call(e, n, e, t) : r,
            !(void 0 !== o && (t.exports = o))
        }(this, function() {
            return i
        })
    }()
}
, function(t, e, n) {
    "use strict";
    var r = n(73)
      , o = n(76)
      , i = n(80)
      , s = n(83)
      , a = n(85);
    e.a = {
        Event: r.a,
        Nav: o.a,
        Search: i.a,
        Sidebar: s.a,
        Source: a.a
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(74)
      , o = n(75);
    e.a = {
        Listener: r.a,
        MatchMedia: o.a
    }
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }()
      , i = function() {
        function t(e, n, o) {
            var i = this;
            r(this, t),
            this.els_ = "string" == typeof e ? document.querySelectorAll(e) : [].concat(e),
            this.handler_ = "function" == typeof o ? {
                update: o
            } : o,
            this.events_ = [].concat(n),
            this.update_ = function(t) {
                return i.handler_.update(t)
            }
        }
        return o(t, [{
            key: "listen",
            value: function() {
                var t = this;
                Array.prototype.forEach.call(this.els_, function(e) {
                    t.events_.forEach(function(n) {
                        e.addEventListener(n, t.update_, !1)
                    })
                }),
                "function" == typeof this.handler_.setup && this.handler_.setup()
            }
        }, {
            key: "unlisten",
            value: function() {
                var t = this;
                Array.prototype.forEach.call(this.els_, function(e) {
                    t.events_.forEach(function(n) {
                        e.removeEventListener(n, t.update_)
                    })
                }),
                "function" == typeof this.handler_.reset && this.handler_.reset()
            }
        }]),
        t
    }();
    e.a = i
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var o = function t(e, n) {
        r(this, t),
        this.handler_ = function(t) {
            t.matches ? n.listen() : n.unlisten()
        }
        ;
        var o = window.matchMedia(e);
        o.addListener(this.handler_),
        this.handler_(o)
    };
    e.a = o
}
, function(t, e, n) {
    "use strict";
    var r = n(77)
      , o = n(78)
      , i = n(79);
    e.a = {
        Blur: r.a,
        Collapse: o.a,
        Scrolling: i.a
    }
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }()
      , i = function() {
        function t(e) {
            r(this, t),
            this.els_ = "string" == typeof e ? document.querySelectorAll(e) : e,
            this.index_ = 0,
            this.offset_ = window.pageYOffset,
            this.dir_ = !1,
            this.anchors_ = [].map.call(this.els_, function(t) {
                return document.getElementById(t.hash.substring(1))
            })
        }
        return o(t, [{
            key: "setup",
            value: function() {
                this.update()
            }
        }, {
            key: "update",
            value: function() {
                var t = window.pageYOffset
                  , e = this.offset_ - t < 0;
                if (this.dir_ !== e && (this.index_ = e ? this.index_ = 0 : this.index_ = this.els_.length - 1),
                0 !== this.anchors_.length) {
                    if (this.offset_ <= t)
                        for (var n = this.index_ + 1; n < this.els_.length && this.anchors_[n].offsetTop - 80 <= t; n++)
                            n > 0 && (this.els_[n - 1].dataset.mdState = "blur"),
                            this.index_ = n;
                    else
                        for (var r = this.index_; r >= 0; r--) {
                            if (!(this.anchors_[r].offsetTop - 80 > t)) {
                                this.index_ = r;
                                break
                            }
                            r > 0 && (this.els_[r - 1].dataset.mdState = "")
                        }
                    this.offset_ = t,
                    this.dir_ = e
                }
            }
        }, {
            key: "reset",
            value: function() {
                Array.prototype.forEach.call(this.els_, function(t) {
                    t.dataset.mdState = ""
                }),
                this.index_ = 0,
                this.offset_ = window.pageYOffset
            }
        }]),
        t
    }();
    e.a = i
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }()
      , i = function() {
        function t(e) {
            r(this, t),
            this.el_ = "string" == typeof e ? document.querySelector(e) : e
        }
        return o(t, [{
            key: "update",
            value: function() {
                var t = this
                  , e = this.el_.getBoundingClientRect().height;
                e ? (this.el_.style.maxHeight = e + "px",
                requestAnimationFrame(function() {
                    t.el_.setAttribute("data-md-state", "animate"),
                    t.el_.style.maxHeight = "0px"
                })) : !function() {
                    t.el_.setAttribute("data-md-state", "expand"),
                    t.el_.style.maxHeight = "";
                    var e = t.el_.getBoundingClientRect().height;
                    t.el_.removeAttribute("data-md-state"),
                    t.el_.style.maxHeight = "0px",
                    requestAnimationFrame(function() {
                        t.el_.setAttribute("data-md-state", "animate"),
                        t.el_.style.maxHeight = e + "px"
                    })
                }();
                var n = function t(e) {
                    e.target.removeAttribute("data-md-state"),
                    e.target.style.maxHeight = "",
                    e.target.removeEventListener("transitionend", t)
                };
                this.el_.addEventListener("transitionend", n, !1)
            }
        }, {
            key: "reset",
            value: function() {
                this.el_.dataset.mdState = "",
                this.el_.style.maxHeight = ""
            }
        }]),
        t
    }();
    e.a = i
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }()
      , i = function() {
        function t(e) {
            r(this, t),
            this.el_ = "string" == typeof e ? document.querySelector(e) : e
        }
        return o(t, [{
            key: "setup",
            value: function() {
                this.el_.children[1].style.webkitOverflowScrolling = "touch";
                var t = this.el_.querySelectorAll("[data-md-toggle]");
                Array.prototype.forEach.call(t, function(t) {
                    if (t.checked) {
                        for (var e = t.nextElementSibling; "NAV" !== e.tagName; )
                            e = e.nextElementSibling;
                        var n = t.parentNode.parentNode
                          , r = e.children[e.children.length - 1];
                        n.style.webkitOverflowScrolling = "",
                        r.style.webkitOverflowScrolling = "touch"
                    }
                })
            }
        }, {
            key: "update",
            value: function(t) {
                for (var e = t.target.nextElementSibling; "NAV" !== e.tagName; )
                    e = e.nextElementSibling;
                var n = t.target.parentNode.parentNode
                  , r = e.children[e.children.length - 1];
                n.style.webkitOverflowScrolling = "",
                r.style.webkitOverflowScrolling = "",
                t.target.checked || !function() {
                    var t = function t() {
                        n.style.webkitOverflowScrolling = "touch",
                        e.removeEventListener("transitionend", t)
                    };
                    e.addEventListener("transitionend", t, !1)
                }(),
                t.target.checked && !function() {
                    var t = function t() {
                        r.style.webkitOverflowScrolling = "touch",
                        e.removeEventListener("transitionend", t, !1)
                    };
                    e.addEventListener("transitionend", t, !1)
                }()
            }
        }, {
            key: "reset",
            value: function() {
                this.el_.children[1].style.webkitOverflowScrolling = "";
                var t = this.el_.querySelectorAll("[data-md-toggle]");
                Array.prototype.forEach.call(t, function(t) {
                    if (t.checked) {
                        for (var e = t.nextElementSibling; "NAV" !== e.tagName; )
                            e = e.nextElementSibling;
                        var n = t.parentNode.parentNode
                          , r = e.children[e.children.length - 1];
                        n.style.webkitOverflowScrolling = "",
                        r.style.webkitOverflowScrolling = ""
                    }
                })
            }
        }]),
        t
    }();
    e.a = i
}
, function(t, e, n) {
    "use strict";
    var r = n(81)
      , o = n(82);
    e.a = {
        Lock: r.a,
        Result: o.a
    }
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }()
      , i = function() {
        function t(e) {
            r(this, t),
            this.el_ = "string" == typeof e ? document.querySelector(e) : e
        }
        return o(t, [{
            key: "setup",
            value: function() {
                this.update()
            }
        }, {
            key: "update",
            value: function() {
                var t = this;
                this.el_.checked ? (this.offset_ = window.pageYOffset,
                setTimeout(function() {
                    window.scrollTo(0, 0),
                    t.el_.checked && (document.body.dataset.mdState = "lock")
                }, 400)) : (document.body.dataset.mdState = "",
                setTimeout(function() {
                    "undefined" != typeof t.offset_ && window.scrollTo(0, t.offset_)
                }, 100))
            }
        }, {
            key: "reset",
            value: function() {
                "lock" === document.body.dataset.mdState && window.scrollTo(0, this.offset_),
                document.body.dataset.mdState = ""
            }
        }]),
        t
    }();
    e.a = i
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        var o = n(71)
          , i = n.n(o)
          , s = function() {
            function t(t, e) {
                var n = []
                  , r = !0
                  , o = !1
                  , i = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value),
                    !e || n.length !== e); r = !0)
                        ;
                } catch (t) {
                    o = !0,
                    i = t
                } finally {
                    try {
                        !r && a.return && a.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
                return n
            }
            return function(e, n) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return t(e, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
          , a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n),
                r && t(e, r),
                e
            }
        }()
          , c = function() {
            function e(n, o) {
                r(this, e),
                this.el_ = "string" == typeof n ? document.querySelector(n) : n,
                this.data_ = o,
                this.meta_ = t.createElement("div", {
                    class: "md-search-result__meta"
                }, "Type to start searching"),
                this.list_ = t.createElement("ol", {
                    class: "md-search-result__list"
                }),
                this.el_.appendChild(this.meta_),
                this.el_.appendChild(this.list_),
                this.truncate_ = function(t, e) {
                    var n = e;
                    if (t.length > n) {
                        for (; " " !== t[n] && --n > 0; )
                            ;
                        return t.substring(0, n) + "..."
                    }
                    return t
                }
            }
            return a(e, [{
                key: "update",
                value: function(e) {
                    var n = this;
                    if ("focus" !== e.type || this.index_) {
                        if ("keyup" === e.type) {
                            for (; this.list_.firstChild; )
                                this.list_.removeChild(this.list_.firstChild);
                            var r = this.index_.search(e.target.value);
                            r.forEach(function(e) {
                                var r = n.data_[e.ref]
                                  , o = r.location.split("#")
                                  , i = s(o, 1)
                                  , a = i[0];
                                a = a.replace(/^(\/?\.{2})+/g, ""),
                                n.list_.appendChild(t.createElement("li", {
                                    class: "md-search-result__item"
                                }, t.createElement("a", {
                                    href: r.location,
                                    title: r.title,
                                    class: "md-search-result__link",
                                    "data-md-rel": a === document.location.pathname ? "anchor" : ""
                                }, t.createElement("article", {
                                    class: "md-search-result__article"
                                }, t.createElement("h1", {
                                    class: "md-search-result__title"
                                }, r.title), t.createElement("p", {
                                    class: "md-search-result__teaser"
                                }, n.truncate_(r.text, 140))))))
                            });
                            var o = this.list_.querySelectorAll("[data-md-rel=anchor]");
                            Array.prototype.forEach.call(o, function(t) {
                                t.addEventListener("click", function(e) {
                                    var n = document.querySelector("[data-md-toggle=search]");
                                    n.checked && (n.checked = !1,
                                    n.dispatchEvent(new CustomEvent("change"))),
                                    e.preventDefault(),
                                    setTimeout(function() {
                                        document.location.href = t.href
                                    }, 100)
                                })
                            }),
                            this.meta_.textContent = r.length + " search result" + (1 !== r.length ? "s" : "")
                        }
                    } else
                        !function() {
                            var t = function(t) {
                                n.index_ = i()(function() {
                                    this.field("title", {
                                        boost: 10
                                    }),
                                    this.field("text"),
                                    this.ref("location")
                                }),
                                n.data_ = t.reduce(function(t, e) {
                                    return n.index_.add(e),
                                    t[e.location] = e,
                                    t
                                }, {})
                            };
                            setTimeout(function() {
                                return "function" == typeof n.data_ ? n.data_().then(t) : t(n.data_)
                            }, 250)
                        }()
                }
            }]),
            e
        }();
        e.a = c
    }
    ).call(e, n(22))
}
, function(t, e, n) {
    "use strict";
    var r = n(84);
    e.a = {
        Position: r.a
    }
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }()
      , i = function() {
        function t(e) {
            r(this, t),
            this.el_ = "string" == typeof e ? document.querySelector(e) : e,
            this.parent_ = this.el_.parentNode,
            this.height_ = 0
        }
        return o(t, [{
            key: "setup",
            value: function() {
                this.offset_ = this.el_.offsetTop - this.parent_.offsetTop,
                this.update()
            }
        }, {
            key: "update",
            value: function() {
                var t = window.pageYOffset
                  , e = window.innerHeight;
                this.bounds_ = {
                    top: this.parent_.offsetTop,
                    bottom: this.parent_.offsetTop + this.parent_.offsetHeight
                };
                var n = e - this.bounds_.top - Math.max(0, this.offset_ - t) - Math.max(0, t + e - this.bounds_.bottom);
                n !== this.height_ && (this.el_.style.height = (this.height_ = n) + "px"),
                t >= this.offset_ ? "lock" !== this.el_.dataset.mdState && (this.el_.dataset.mdState = "lock") : "lock" === this.el_.dataset.mdState && (this.el_.dataset.mdState = "")
            }
        }, {
            key: "reset",
            value: function() {
                this.el_.dataset.mdState = "",
                this.el_.style.height = "",
                this.height_ = 0
            }
        }]),
        t
    }();
    e.a = i
}
, function(t, e, n) {
    "use strict";
    var r = n(86)
      , o = n(89);
    e.a = {
        Adapter: r.a,
        Repository: o.a
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(88);
    e.a = {
        GitHub: r.a
    }
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var o = n(70)
      , i = n.n(o)
      , s = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }()
      , a = function() {
        function t(e) {
            r(this, t),
            this.el_ = "string" == typeof e ? document.querySelector(e) : e,
            this.base_ = this.el_.href,
            this.salt_ = this.hash_(this.base_)
        }
        return s(t, [{
            key: "fetch",
            value: function() {
                var t = this;
                return new Promise(function(e) {
                    var n = i.a.getJSON(t.salt_ + ".cache-source");
                    "undefined" != typeof n ? e(n) : t.fetch_().then(function(n) {
                        i.a.set(t.salt_ + ".cache-source", n, {
                            expires: 1 / 96
                        }),
                        e(n)
                    })
                }
                )
            }
        }, {
            key: "fetch_",
            value: function() {
                throw new Error("fetch_(): Not implemented")
            }
        }, {
            key: "format_",
            value: function(t) {
                return t > 1e4 ? (t / 1e3).toFixed(0) + "k" : t > 1e3 ? (t / 1e3).toFixed(1) + "k" : t
            }
        }, {
            key: "hash_",
            value: function(t) {
                var e = 0;
                if (0 === t.length)
                    return e;
                for (var n = 0, r = t.length; n < r; n++)
                    e = (e << 5) - e + t.charCodeAt(n),
                    e |= 0;
                return e
            }
        }]),
        t
    }();
    e.a = a
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function i(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = n(87)
      , a = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }()
      , c = function(t) {
        function e(t) {
            r(this, e);
            var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return n.base_ = n.base_.replace("github.com/", "api.github.com/repos/"),
            n
        }
        return i(e, t),
        a(e, [{
            key: "fetch_",
            value: function() {
                var t = this;
                return fetch(this.base_).then(function(t) {
                    return t.json()
                }).then(function(e) {
                    return [t.format_(e.stargazers_count) + " Stars", t.format_(e.forks_count) + " Forks"]
                })
            }
        }]),
        e
    }(s.a);
    e.a = c
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n),
                r && t(e, r),
                e
            }
        }()
          , o = function() {
            function e(t) {
                n(this, e),
                this.el_ = "string" == typeof t ? document.querySelector(t) : t
            }
            return r(e, [{
                key: "initialize",
                value: function(e) {
                    e.length && this.el_.children[this.el_.children.length - 1].appendChild(t.createElement("ul", {
                        class: "md-source__facts"
                    }, e.map(function(e) {
                        return t.createElement("li", {
                            class: "md-source__fact"
                        }, e)
                    }))),
                    this.el_.dataset.mdState = "done"
                }
            }]),
            e
        }();
        e.a = o
    }
    ).call(e, n(22))
}
, function(t, e, n) {
    n(34),
    n(35),
    n(36),
    t.exports = n(37)
}
]);
