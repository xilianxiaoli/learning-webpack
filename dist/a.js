!
function(e) {
    var t = {};
    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r),
        o.l = !0,
        o.exports
    }
    r.m = e,
    r.c = t,
    r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    },
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o,
        function(t) {
            return e[t]
        }.bind(null, o));
        return n
    },
    r.n = function(e) {
        var t = e && e.__esModule ?
        function() {
            return e.
        default
        }:
        function() {
            return e
        };
        return r.d(t, "a", t),
        t
    },
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    r.p = "",
    r(r.s = 0)
} ([function(e, t, r) {
    "use strict";
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function o() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return o = function() {
            return e
        },
        e
    }
    function u(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== n(e) && "function" != typeof e) return {
        default:
            e
        };
        var t = o();
        if (t && t.has(e)) return t.get(e);
        var r = {},
        u = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
            var f = u ? Object.getOwnPropertyDescriptor(e, i) : null;
            f && (f.get || f.set) ? Object.defineProperty(r, i, f) : r[i] = e[i]
        }
        return r.
    default = e,
        t && t.set(e, r),
        r
    }
    function i(e, t, r, n, o, u, i) {
        try {
            var f = e[u](i),
            c = f.value
        } catch(e) {
            return void r(e)
        }
        f.done ? t(c) : Promise.resolve(c).then(n, o)
    }
    var f = function() {
        var e, t = (e = regeneratorRuntime.mark((function e() {
            return regeneratorRuntime.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    Promise.resolve().then((function() {
                        return u(r(1))
                    }));
                case 2:
                    return e.abrupt("return", e.sent);
                case 3:
                case "end":
                    return e.stop()
                }
            }), e)
        })),
        function() {
            var t = this,
            r = arguments;
            return new Promise((function(n, o) {
                var u = e.apply(t, r);
                function f(e) {
                    i(u, n, o, f, c, "next", e)
                }
                function c(e) {
                    i(u, n, o, f, c, "throw", e)
                }
                f(void 0)
            }))
        });
        return function() {
            return t.apply(this, arguments)
        }
    } ();
    console.log(f().
default, 234)
},
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.
default = function() {
        return "hello, aysnc module"
    }
}]);