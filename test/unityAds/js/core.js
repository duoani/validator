/**
 * Created by duo on 2016/8/24.
 */
document.addEventListener('DOMContentLoaded', function() { /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   3.2.1
 */

    !function() {
        var e, t, n, i, r, o, a = {}, s = {}, c = {}, u = {}, l = {}, h = {}, p = {}, d = {}, f = {}, v = {}, g = {}, _ = {}, m = {}, y = {}, E = {}, S = {}, I = {}, C = {}, A = {}, b = {}, O = {}, T = {}, w = {}, N = {}, R = {}, D = {}, k = {}, P = {}, B = {}, L = {}, U = {}, V = {}, M = {}, F = {}, x = {}, W = {}, q = {}, K = {}, H = {}, j = {}, G = {}, Y = {}, z = {}, Q = {}, J = {}, X = {}, $ = {}, Z = {}, ee = {}, te = {}, ne = {}, ie = {}, re = {}, oe = {}, ae = {}, se = {}, ce = {}, ue = {}, le = {}, he = {}, pe = {}, de = {}, fe = {}, ve = {}, ge = {}, _e = {}, me = {}, ye = {}, Ee = {}, Se = {}, Ie = {}, Ce = {}, Ae = {}, be = {}, Oe = {}, Te = {}, we = {}, Ne = {}, Re = {}, De = {}, ke = {}, Pe = {};
        (function() {
            "use strict";
            function t(e) {
                return "function" == typeof e || "object" == typeof e && null !== e;
            }
            function n(e) {
                return "function" == typeof e;
            }
            function i(e) {
                j = e;
            }
            function r(e) {
                Q = e;
            }
            function o() {
                return function() {
                    process.nextTick(l);
                };
            }
            function a() {
                return function() {
                    H(l);
                };
            }
            function s() {
                var e = 0, t = new $(l), n = document.createTextNode("");
                return t.observe(n, {
                    characterData: !0
                }), function() {
                    n.data = e = ++e % 2;
                };
            }
            function c() {
                var e = new MessageChannel();
                return e.port1.onmessage = l, function() {
                    e.port2.postMessage(0);
                };
            }
            function u() {
                return function() {
                    setTimeout(l, 1);
                };
            }
            function l() {
                for (var e = 0; z > e; e += 2) {
                    var t = te[e], n = te[e + 1];
                    t(n), te[e] = void 0, te[e + 1] = void 0;
                }
                z = 0;
            }
            function h() {
                try {
                    var e = require, t = e("vertx");
                    return H = t.runOnLoop || t.runOnContext, a();
                } catch (n) {
                    return u();
                }
            }
            function p(e, t) {
                var n = this, i = new this.constructor(f);
                void 0 === i[re] && P(i);
                var r = n._state;
                if (r) {
                    var o = arguments[r - 1];
                    Q(function() {
                        R(r, i, o, n._result);
                    });
                } else O(n, i, e, t);
                return i;
            }
            function d(e) {
                var t = this;
                if (e && "object" == typeof e && e.constructor === t) return e;
                var n = new t(f);
                return I(n, e), n;
            }
            function f() {}
            function v() {
                return new TypeError("You cannot resolve a promise with itself");
            }
            function g() {
                return new TypeError("A promises callback cannot return that same promise.");
            }
            function _(e) {
                try {
                    return e.then;
                } catch (t) {
                    return ce.error = t, ce;
                }
            }
            function m(e, t, n, i) {
                try {
                    e.call(t, n, i);
                } catch (r) {
                    return r;
                }
            }
            function y(e, t, n) {
                Q(function(e) {
                    var i = !1, r = m(n, t, function(n) {
                        i || (i = !0, t !== n ? I(e, n) : A(e, n));
                    }, function(t) {
                        i || (i = !0, b(e, t));
                    }, "Settle: " + (e._label || " unknown promise"));
                    !i && r && (i = !0, b(e, r));
                }, e);
            }
            function E(e, t) {
                t._state === ae ? A(e, t._result) : t._state === se ? b(e, t._result) : O(t, void 0, function(t) {
                    I(e, t);
                }, function(t) {
                    b(e, t);
                });
            }
            function S(e, t, i) {
                t.constructor === e.constructor && i === ne && constructor.resolve === ie ? E(e, t) : i === ce ? b(e, ce.error) : void 0 === i ? A(e, t) : n(i) ? y(e, t, i) : A(e, t);
            }
            function I(e, n) {
                e === n ? b(e, v()) : t(n) ? S(e, n, _(n)) : A(e, n);
            }
            function C(e) {
                e._onerror && e._onerror(e._result), T(e);
            }
            function A(e, t) {
                e._state === oe && (e._result = t, e._state = ae, 0 !== e._subscribers.length && Q(T, e));
            }
            function b(e, t) {
                e._state === oe && (e._state = se, e._result = t, Q(C, e));
            }
            function O(e, t, n, i) {
                var r = e._subscribers, o = r.length;
                e._onerror = null, r[o] = t, r[o + ae] = n, r[o + se] = i, 0 === o && e._state && Q(T, e);
            }
            function T(e) {
                var t = e._subscribers, n = e._state;
                if (0 !== t.length) {
                    for (var i, r, o = e._result, a = 0; a < t.length; a += 3) i = t[a], r = t[a + n],
                        i ? R(n, i, r, o) : r(o);
                    e._subscribers.length = 0;
                }
            }
            function w() {
                this.error = null;
            }
            function N(e, t) {
                try {
                    return e(t);
                } catch (n) {
                    return ue.error = n, ue;
                }
            }
            function R(e, t, i, r) {
                var o, a, s, c, u = n(i);
                if (u) {
                    if (o = N(i, r), o === ue ? (c = !0, a = o.error, o = null) : s = !0, t === o) return void b(t, g());
                } else o = r, s = !0;
                t._state !== oe || (u && s ? I(t, o) : c ? b(t, a) : e === ae ? A(t, o) : e === se && b(t, o));
            }
            function D(e, t) {
                try {
                    t(function(t) {
                        I(e, t);
                    }, function(t) {
                        b(e, t);
                    });
                } catch (n) {
                    b(e, n);
                }
            }
            function k() {
                return le++;
            }
            function P(e) {
                e[re] = le++, e._state = void 0, e._result = void 0, e._subscribers = [];
            }
            function B(e) {
                return new ve(this, e).promise;
            }
            function L(e) {
                var t = this;
                return new t(Y(e) ? function(n, i) {
                    for (var r = e.length, o = 0; r > o; o++) t.resolve(e[o]).then(n, i);
                } : function(e, t) {
                    t(new TypeError("You must pass an array to race."));
                });
            }
            function U(e) {
                var t = this, n = new t(f);
                return b(n, e), n;
            }
            function V() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
            }
            function M() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            }
            function F(e) {
                this[re] = k(), this._result = this._state = void 0, this._subscribers = [], f !== e && ("function" != typeof e && V(),
                    this instanceof F ? D(this, e) : M());
            }
            function x(e, t) {
                this._instanceConstructor = e, this.promise = new e(f), this.promise[re] || P(this.promise),
                    Y(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length),
                        0 === this.length ? A(this.promise, this._result) : (this.length = this.length || 0,
                            this._enumerate(), 0 === this._remaining && A(this.promise, this._result))) : b(this.promise, W());
            }
            function W() {
                return new Error("Array Methods must be provided an Array");
            }
            function q() {
                var e;
                if ("undefined" != typeof global) e = global; else if ("undefined" != typeof self) e = self; else try {
                    e = Function("return this")();
                } catch (t) {
                    throw new Error("polyfill failed because global object is unavailable in this environment");
                }
                var n = e.Promise;
                (!n || "[object Promise]" !== Object.prototype.toString.call(n.resolve()) || n.cast) && (e.Promise = fe);
            }
            var K;
            K = Array.isArray ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e);
            };
            var H, j, G, Y = K, z = 0, Q = function(e, t) {
                te[z] = e, te[z + 1] = t, z += 2, 2 === z && (j ? j(l) : G());
            }, J = "undefined" != typeof window ? window : void 0, X = J || {}, $ = X.MutationObserver || X.WebKitMutationObserver, Z = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), ee = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, te = new Array(1e3);
            G = Z ? o() : $ ? s() : ee ? c() : void 0 === J && "function" == typeof require ? h() : u();
            var ne = p, ie = d, re = Math.random().toString(36).substring(16), oe = void 0, ae = 1, se = 2, ce = new w(), ue = new w(), le = 0, he = B, pe = L, de = U, fe = F;
            F.all = he, F.race = pe, F.resolve = ie, F.reject = de, F._setScheduler = i, F._setAsap = r,
                F._asap = Q, F.prototype = {
                constructor: F,
                then: ne,
                "catch": function(e) {
                    return this.then(null, e);
                }
            };
            var ve = x;
            x.prototype._enumerate = function() {
                for (var e = this.length, t = this._input, n = 0; this._state === oe && e > n; n++) this._eachEntry(t[n], n);
            }, x.prototype._eachEntry = function(e, t) {
                var n = this._instanceConstructor, i = n.resolve;
                if (i === ie) {
                    var r = _(e);
                    if (r === ne && e._state !== oe) this._settledAt(e._state, t, e._result); else if ("function" != typeof r) this._remaining--,
                        this._result[t] = e; else if (n === fe) {
                        var o = new n(f);
                        S(o, e, r), this._willSettleAt(o, t);
                    } else this._willSettleAt(new n(function(t) {
                        t(e);
                    }), t);
                } else this._willSettleAt(i(e), t);
            }, x.prototype._settledAt = function(e, t, n) {
                var i = this.promise;
                i._state === oe && (this._remaining--, e === se ? b(i, n) : this._result[t] = n),
                0 === this._remaining && A(i, this._result);
            }, x.prototype._willSettleAt = function(e, t) {
                var n = this;
                O(e, void 0, function(e) {
                    n._settledAt(ae, t, e);
                }, function(e) {
                    n._settledAt(se, t, e);
                });
            };
            var ge = q, _e = {
                Promise: fe,
                polyfill: ge
            };
            e = function() {
                return _e;
            }(), ge();
        }).call(this), a = function(e) {
            !function(e) {
                e[e.ANDROID = 0] = "ANDROID", e[e.IOS = 1] = "IOS", e[e.TEST = 2] = "TEST";
            }(e.Platform || (e.Platform = {}));
            e.Platform;
            return e;
        }(a), s = function(e, t) {
            var n = function() {
                function e(e) {
                    this._batch = [], this._nativeBridge = e;
                }
                return e.prototype.queue = function(e, n, i) {
                    switch (void 0 === i && (i = []), this._nativeBridge.getPlatform()) {
                        case t.Platform.ANDROID:
                            return this.rawQueue("com.unity3d.ads.api." + e, n, i);

                        case t.Platform.IOS:
                            return this.rawQueue("UADSApi" + e, n, i);

                        default:
                            return this.rawQueue(e, n, i);
                    }
                }, e.prototype.rawQueue = function(e, t, n) {
                    var i = this;
                    return void 0 === n && (n = []), new Promise(function(r, o) {
                        var a = i._nativeBridge.registerCallback(r, o);
                        i._batch.push([ e, t, n, a.toString() ]);
                    });
                }, e.prototype.getBatch = function() {
                    return this._batch;
                }, e;
            }();
            return e.BatchInvocation = n, e;
        }(s, a), c = function(e) {
            var t = function() {
                function e(e, t) {
                    this._nativeBridge = e, this._apiClass = t;
                }
                return e.prototype.handleEvent = function(e, t) {
                    throw new Error(this._apiClass + " event " + e + " does not have an observable");
                }, e;
            }();
            return e.NativeApi = t, e;
        }(c);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        u = function(e) {
            var t = function() {
                function e() {
                    this._observers = [];
                }
                return e.prototype.subscribe = function(e) {
                    return this._observers.push(e), e;
                }, e.prototype.unsubscribe = function(e) {
                    this._observers.length && ("undefined" != typeof e ? this._observers = this._observers.filter(function(t) {
                        return t !== e;
                    }) : this._observers = []);
                }, e;
            }();
            e.Observable = t;
            var n = function(e) {
                function t() {
                    e.apply(this, arguments);
                }
                return Be(t, e), t.prototype.trigger = function() {
                    this._observers.forEach(function(e) {
                        return e();
                    });
                }, t;
            }(t);
            e.Observable0 = n;
            var i = function(e) {
                function t() {
                    e.apply(this, arguments);
                }
                return Be(t, e), t.prototype.trigger = function(e) {
                    this._observers.forEach(function(t) {
                        return t(e);
                    });
                }, t;
            }(t);
            e.Observable1 = i;
            var r = function(e) {
                function t() {
                    e.apply(this, arguments);
                }
                return Be(t, e), t.prototype.trigger = function(e, t) {
                    this._observers.forEach(function(n) {
                        return n(e, t);
                    });
                }, t;
            }(t);
            e.Observable2 = r;
            var o = function(e) {
                function t() {
                    e.apply(this, arguments);
                }
                return Be(t, e), t.prototype.trigger = function(e, t, n) {
                    this._observers.forEach(function(i) {
                        return i(e, t, n);
                    });
                }, t;
            }(t);
            e.Observable3 = o;
            var a = function(e) {
                function t() {
                    e.apply(this, arguments);
                }
                return Be(t, e), t.prototype.trigger = function(e, t, n, i) {
                    this._observers.forEach(function(r) {
                        return r(e, t, n, i);
                    });
                }, t;
            }(t);
            e.Observable4 = a;
            var s = function(e) {
                function t() {
                    e.apply(this, arguments);
                }
                return Be(t, e), t.prototype.trigger = function(e, t, n, i, r) {
                    this._observers.forEach(function(o) {
                        return o(e, t, n, i, r);
                    });
                }, t;
            }(t);
            e.Observable5 = s;
            var c = function(e) {
                function t() {
                    e.apply(this, arguments);
                }
                return Be(t, e), t.prototype.trigger = function(e, t, n, i, r, o) {
                    this._observers.forEach(function(a) {
                        return a(e, t, n, i, r, o);
                    });
                }, t;
            }(t);
            return e.Observable6 = c, e;
        }(u);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        l = function(e, t, n) {
            var i;
            !function(e) {
                e[e.ACTION = 0] = "ACTION";
            }(i || (i = {}));
            var r = function(e) {
                function t(t) {
                    e.call(this, t, "Broadcast"), this.onBroadcastAction = new n.Observable4();
                }
                return Be(t, e), t.prototype.addBroadcastListener = function(e, t) {
                    return this._nativeBridge.invoke(this._apiClass, "addBroadcastListener", [ e, t ]);
                }, t.prototype.addDataSchemeBroadcastListener = function(e, t, n) {
                    return this._nativeBridge.invoke(this._apiClass, "addBroadcastListener", [ e, t, n ]);
                }, t.prototype.removeBroadcastListener = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "removeBroadcastListener", [ e ]);
                }, t.prototype.removeAllBroadcastListeners = function() {
                    return this._nativeBridge.invoke(this._apiClass, "removeAllBroadcastListeners", []);
                }, t.prototype.handleEvent = function(t, n) {
                    t === i[i.ACTION] ? this.onBroadcastAction.trigger(n[0], n[1], n[2], n[3]) : e.prototype.handleEvent.call(this, t, n);
                }, t;
            }(t.NativeApi);
            return e.BroadcastApi = r, e;
        }(l, c, u);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        h = function(e, t, n) {
            !function(e) {
                e[e.FILE_IO_ERROR = 0] = "FILE_IO_ERROR", e[e.FILE_NOT_FOUND = 1] = "FILE_NOT_FOUND",
                    e[e.FILE_ALREADY_CACHING = 2] = "FILE_ALREADY_CACHING", e[e.NOT_CACHING = 3] = "NOT_CACHING",
                    e[e.JSON_ERROR = 4] = "JSON_ERROR", e[e.NO_INTERNET = 5] = "NO_INTERNET";
            }(e.CacheError || (e.CacheError = {}));
            e.CacheError;
            !function(e) {
                e[e.DOWNLOAD_STARTED = 0] = "DOWNLOAD_STARTED", e[e.DOWNLOAD_PROGRESS = 1] = "DOWNLOAD_PROGRESS",
                    e[e.DOWNLOAD_END = 2] = "DOWNLOAD_END", e[e.DOWNLOAD_STOPPED = 3] = "DOWNLOAD_STOPPED",
                    e[e.DOWNLOAD_ERROR = 4] = "DOWNLOAD_ERROR";
            }(e.CacheEvent || (e.CacheEvent = {}));
            var i = e.CacheEvent, r = function(e) {
                function n(n) {
                    e.call(this, n, "Cache"), this.onDownloadStarted = new t.Observable5(), this.onDownloadProgress = new t.Observable3(),
                        this.onDownloadEnd = new t.Observable6(), this.onDownloadStopped = new t.Observable6(),
                        this.onDownloadError = new t.Observable3();
                }
                return Be(n, e), n.prototype.download = function(e, t) {
                    return this._nativeBridge.invoke(this._apiClass, "download", [ e, t ]);
                }, n.prototype.stop = function() {
                    return this._nativeBridge.invoke(this._apiClass, "stop");
                }, n.prototype.isCaching = function() {
                    return this._nativeBridge.invoke(this._apiClass, "isCaching");
                }, n.prototype.getFiles = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getFiles");
                }, n.prototype.getFileInfo = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "getFileInfo", [ e ]);
                }, n.prototype.getFilePath = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "getFilePath", [ e ]);
                }, n.prototype.getHash = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "getHash", [ e ]);
                }, n.prototype.deleteFile = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "deleteFile", [ e ]);
                }, n.prototype.setProgressInterval = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setProgressInterval", [ e ]);
                }, n.prototype.getProgressInterval = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getProgressInterval");
                }, n.prototype.setTimeouts = function(e, t) {
                    return this._nativeBridge.invoke(this._apiClass, "setTimeouts", [ e, t ]);
                }, n.prototype.getTimeouts = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getTimeouts");
                }, n.prototype.getFreeSpace = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getFreeSpace");
                }, n.prototype.getTotalSpace = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getTotalSpace");
                }, n.prototype.handleEvent = function(t, n) {
                    switch (t) {
                        case i[i.DOWNLOAD_STARTED]:
                            this.onDownloadStarted.trigger(n[0], n[1], n[2], n[3], n[4]);
                            break;

                        case i[i.DOWNLOAD_PROGRESS]:
                            this.onDownloadProgress.trigger(n[0], n[1], n[2]);
                            break;

                        case i[i.DOWNLOAD_END]:
                            this.onDownloadEnd.trigger(n[0], n[1], n[2], n[3], n[4], n[5]);
                            break;

                        case i[i.DOWNLOAD_STOPPED]:
                            this.onDownloadStopped.trigger(n[0], n[1], n[2], n[3], n[4], n[5]);
                            break;

                        case i[i.DOWNLOAD_ERROR]:
                            this.onDownloadError.trigger(n[0], n[1], n[2]);
                            break;

                        default:
                            e.prototype.handleEvent.call(this, t, n);
                    }
                }, n;
            }(n.NativeApi);
            return e.CacheApi = r, e;
        }(h, u, c);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        p = function(e, t, n) {
            var i;
            !function(e) {
                e[e.CONNECTED = 0] = "CONNECTED", e[e.DISCONNECTED = 1] = "DISCONNECTED", e[e.NETWORK_CHANGE = 2] = "NETWORK_CHANGE";
            }(i || (i = {}));
            var r = function(e) {
                function n(n) {
                    e.call(this, n, "Connectivity"), this.onConnected = new t.Observable2(), this.onDisconnected = new t.Observable0();
                }
                return Be(n, e), n.prototype.setListeningStatus = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setConnectionMonitoring", [ e ]);
                }, n.prototype.handleEvent = function(t, n) {
                    switch (t) {
                        case i[i.CONNECTED]:
                            this.onConnected.trigger(n[0], n[1]);
                            break;

                        case i[i.DISCONNECTED]:
                            this.onDisconnected.trigger();
                            break;

                        case i[i.NETWORK_CHANGE]:
                            break;

                        default:
                            e.prototype.handleEvent.call(this, t, n);
                    }
                }, n;
            }(n.NativeApi);
            return e.ConnectivityApi = r, e;
        }(p, u, c);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        d = function(e, t, n, i) {
            !function(e) {
                e[e.COMPLETE = 0] = "COMPLETE", e[e.FAILED = 1] = "FAILED";
            }(e.RequestEvent || (e.RequestEvent = {}));
            var r = e.RequestEvent, o = function(e) {
                function n(n) {
                    e.call(this, n, "Request"), this.onComplete = new t.Observable5(), this.onFailed = new t.Observable3();
                }
                return Be(n, e), n.prototype.get = function(e, t, n, r, o) {
                    return this._nativeBridge.getPlatform() === i.Platform.IOS ? this._nativeBridge.invoke(this._apiClass, "get", [ e, t, n, r ]) : this._nativeBridge.invoke(this._apiClass, "get", [ e, t, n, r, o ]);
                }, n.prototype.post = function(e, t, n, r, o, a) {
                    return this._nativeBridge.getPlatform() === i.Platform.IOS ? this._nativeBridge.invoke(this._apiClass, "post", [ e, t, n, r, o ]) : this._nativeBridge.invoke(this._apiClass, "post", [ e, t, n, r, o, a ]);
                }, n.prototype.head = function(e, t, n, r, o) {
                    return this._nativeBridge.getPlatform() === i.Platform.IOS ? this._nativeBridge.invoke(this._apiClass, "head", [ e, t, n, r ]) : this._nativeBridge.invoke(this._apiClass, "head", [ e, t, n, r, o ]);
                }, n.prototype.setConnectTimeout = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setConnectTimeout", [ e ]);
                }, n.prototype.getConnectTimeout = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getConnectTimeout");
                }, n.prototype.setReadTimeout = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setReadTimeout", [ e ]);
                }, n.prototype.getReadTimeout = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getReadTimeout");
                }, n.prototype.handleEvent = function(t, n) {
                    switch (t) {
                        case r[r.COMPLETE]:
                            this.onComplete.trigger(n[0], n[1], n[2], n[3], n[4]);
                            break;

                        case r[r.FAILED]:
                            this.onFailed.trigger(n[0], n[1], n[2]);
                            break;

                        default:
                            e.prototype.handleEvent.call(this, t, n);
                    }
                }, n;
            }(n.NativeApi);
            return e.RequestApi = o, e;
        }(d, u, c, a);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        f = function(e, t, n) {
            var i;
            !function(e) {
                e[e.LIKELY_TO_KEEP_UP = 0] = "LIKELY_TO_KEEP_UP", e[e.BUFFER_EMPTY = 1] = "BUFFER_EMPTY",
                    e[e.BUFFER_FULL = 2] = "BUFFER_FULL";
            }(i || (i = {}));
            var r = function(e) {
                function n(n) {
                    e.call(this, n, "VideoPlayer"), this.onLikelyToKeepUp = new t.Observable2(), this.onBufferEmpty = new t.Observable2(),
                        this.onBufferFull = new t.Observable2();
                }
                return Be(n, e), n.prototype.handleEvent = function(e, t) {
                    switch (e) {
                        case i[i.LIKELY_TO_KEEP_UP]:
                            this.onLikelyToKeepUp.trigger(t[0], t[1]);
                            break;

                        case i[i.BUFFER_EMPTY]:
                            this.onBufferEmpty.trigger(t[0], t[1]);
                            break;

                        case i[i.BUFFER_FULL]:
                            this.onBufferFull.trigger(t[0], t[1]);
                            break;

                        default:
                            throw new Error("VideoPlayer event " + e + " does not have an observable");
                    }
                }, n;
            }(n.NativeApi);
            return e.IosVideoPlayerApi = r, e;
        }(f, u, c);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        v = function(e, t, n) {
            var i;
            !function(e) {
                e[e.INFO = 0] = "INFO";
            }(i || (i = {}));
            var r = function(e) {
                function t(t) {
                    e.call(this, t, "VideoPlayer"), this.onInfo = new n.Observable3();
                }
                return Be(t, e), t.prototype.setInfoListenerEnabled = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setInfoListenerEnabled", [ e ]);
                }, t.prototype.handleEvent = function(e, t) {
                    switch (e) {
                        case i[i.INFO]:
                            this.onInfo.trigger(t[0], t[1], t[2]);
                            break;

                        default:
                            throw new Error("VideoPlayer event " + e + " does not have an observable");
                    }
                }, t;
            }(t.NativeApi);
            return e.AndroidVideoPlayerApi = r, e;
        }(v, c, u);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        g = function(e, t, n, i, r, o) {
            var a;
            !function(e) {
                e[e.GENERIC_ERROR = 0] = "GENERIC_ERROR", e[e.PROGRESS = 1] = "PROGRESS", e[e.COMPLETED = 2] = "COMPLETED",
                    e[e.PREPARED = 3] = "PREPARED", e[e.PREPARE_ERROR = 4] = "PREPARE_ERROR", e[e.PLAY = 5] = "PLAY",
                    e[e.PAUSE_ERROR = 6] = "PAUSE_ERROR", e[e.PAUSE = 7] = "PAUSE", e[e.SEEKTO_ERROR = 8] = "SEEKTO_ERROR",
                    e[e.SEEKTO = 9] = "SEEKTO", e[e.STOP = 10] = "STOP", e[e.ILLEGAL_STATE = 11] = "ILLEGAL_STATE";
            }(a || (a = {}));
            var s = function(e) {
                function n(n) {
                    e.call(this, n, "VideoPlayer"), this.onError = new t.Observable3(), this.onProgress = new t.Observable1(),
                        this.onCompleted = new t.Observable1(), this.onPrepared = new t.Observable4(), this.onPlay = new t.Observable1(),
                        this.onPause = new t.Observable1(), this.onSeek = new t.Observable1(), this.onStop = new t.Observable1(),
                        n.getPlatform() === i.Platform.IOS ? this.Ios = new r.IosVideoPlayerApi(n) : n.getPlatform() === i.Platform.ANDROID && (this.Android = new o.AndroidVideoPlayerApi(n));
                }
                return Be(n, e), n.prototype.setProgressEventInterval = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setProgressEventInterval", [ e ]);
                }, n.prototype.getProgressEventInterval = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getProgressEventInterval");
                }, n.prototype.prepare = function(e, t) {
                    return this._nativeBridge.invoke(this._apiClass, "prepare", [ e, t ]);
                }, n.prototype.play = function() {
                    return this._nativeBridge.invoke(this._apiClass, "play");
                }, n.prototype.pause = function() {
                    return this._nativeBridge.invoke(this._apiClass, "pause");
                }, n.prototype.stop = function() {
                    return this._nativeBridge.invoke(this._apiClass, "stop");
                }, n.prototype.seekTo = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "seekTo", [ e ]);
                }, n.prototype.getCurrentPosition = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getCurrentPosition");
                }, n.prototype.getVolume = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getVolume");
                }, n.prototype.setVolume = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setVolume", [ e ]);
                }, n.prototype.handleEvent = function(e, t) {
                    switch (e) {
                        case a[a.GENERIC_ERROR]:
                            this.onError.trigger(t[0], t[1], t[2]);
                            break;

                        case a[a.PROGRESS]:
                            this.onProgress.trigger(t[0]);
                            break;

                        case a[a.COMPLETED]:
                            this.onCompleted.trigger(t[0]);
                            break;

                        case a[a.PREPARED]:
                            this.onPrepared.trigger(t[0], t[1], t[2], t[3]);
                            break;

                        case a[a.PLAY]:
                            this.onPlay.trigger(t[0]);
                            break;

                        case a[a.PAUSE]:
                            this.onPause.trigger(t[0]);
                            break;

                        case a[a.SEEKTO]:
                            this.onSeek.trigger(t[0]);
                            break;

                        case a[a.STOP]:
                            this.onStop.trigger(t[0]);
                            break;

                        default:
                            this._nativeBridge.getPlatform() === i.Platform.IOS ? this.Ios.handleEvent(e, t) : this._nativeBridge.getPlatform() === i.Platform.ANDROID && this.Android.handleEvent(e, t);
                    }
                }, n;
            }(n.NativeApi);
            return e.VideoPlayerApi = s, e;
        }(g, u, c, a, f, v), _ = function(e) {
            !function(e) {
                e[e.APPSHEET = 0] = "APPSHEET", e[e.ADUNIT = 1] = "ADUNIT", e[e.VIDEOPLAYER = 2] = "VIDEOPLAYER",
                    e[e.CACHE = 3] = "CACHE", e[e.CONNECTIVITY = 4] = "CONNECTIVITY", e[e.STORAGE = 5] = "STORAGE",
                    e[e.REQUEST = 6] = "REQUEST", e[e.RESOLVE = 7] = "RESOLVE", e[e.BROADCAST = 8] = "BROADCAST",
                    e[e.NOTIFICATION = 9] = "NOTIFICATION";
            }(e.EventCategory || (e.EventCategory = {}));
            e.EventCategory;
            return e;
        }(_);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        m = function(e, t, n) {
            !function(e) {
                e[e.COMPLETE = 0] = "COMPLETE", e[e.FAILED = 1] = "FAILED";
            }(e.ResolveEvent || (e.ResolveEvent = {}));
            var i = e.ResolveEvent, r = function(e) {
                function n(n) {
                    e.call(this, n, "Resolve"), this.onComplete = new t.Observable3(), this.onFailed = new t.Observable4();
                }
                return Be(n, e), n.prototype.resolve = function(e, t) {
                    return this._nativeBridge.invoke(this._apiClass, "resolve", [ e, t ]);
                }, n.prototype.handleEvent = function(t, n) {
                    switch (t) {
                        case i[i.COMPLETE]:
                            this.onComplete.trigger(n[0], n[1], n[2]);
                            break;

                        case i[i.FAILED]:
                            this.onFailed.trigger(n[0], n[1], n[2], n[3]);
                            break;

                        default:
                            e.prototype.handleEvent.call(this, t, n);
                    }
                }, n;
            }(n.NativeApi);
            return e.ResolveApi = r, e;
        }(m, u, c);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        y = function(e, t) {
            var n = function(e) {
                function t(t) {
                    e.call(this, t, "Intent");
                }
                return Be(t, e), t.prototype.launch = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "launch", [ e ]);
                }, t;
            }(t.NativeApi);
            return e.IntentApi = n, e;
        }(y, c), E = function(e) {
            !function(e) {
                e[e.COMPLETED = 0] = "COMPLETED", e[e.SKIPPED = 1] = "SKIPPED", e[e.ERROR = 2] = "ERROR";
            }(e.FinishState || (e.FinishState = {}));
            e.FinishState;
            return e;
        }(E);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        S = function(e, t, n) {
            var i = function(e) {
                function n(t) {
                    e.call(this, t, "Listener");
                }
                return Be(n, e), n.prototype.sendReadyEvent = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "sendReadyEvent", [ e ]);
                }, n.prototype.sendStartEvent = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "sendStartEvent", [ e ]);
                }, n.prototype.sendFinishEvent = function(e, n) {
                    return this._nativeBridge.invoke(this._apiClass, "sendFinishEvent", [ e, t.FinishState[n] ]);
                }, n.prototype.sendErrorEvent = function(e, t) {
                    return this._nativeBridge.invoke(this._apiClass, "sendErrorEvent", [ e, t ]);
                }, n;
            }(n.NativeApi);
            return e.ListenerApi = i, e;
        }(S, E, c), I = function(e) {
            !function(e) {
                e[e.READY = 0] = "READY", e[e.NOT_AVAILABLE = 1] = "NOT_AVAILABLE", e[e.DISABLED = 2] = "DISABLED",
                    e[e.WAITING = 3] = "WAITING", e[e.NO_FILL = 4] = "NO_FILL";
            }(e.PlacementState || (e.PlacementState = {}));
            var t = (e.PlacementState, function() {
                function e(e) {
                    this._id = e.id, this._name = e.name, this._default = e["default"], this._allowSkip = e.allowSkip,
                        this._skipInSeconds = e.skipInSeconds, this._disableBackButton = e.disableBackButton,
                        this._useDeviceOrientationForVideo = e.useDeviceOrientationForVideo, this._muteVideo = e.muteVideo;
                }
                return e.prototype.getId = function() {
                    return this._id;
                }, e.prototype.getName = function() {
                    return this._name;
                }, e.prototype.isDefault = function() {
                    return this._default;
                }, e.prototype.allowSkip = function() {
                    return this._allowSkip;
                }, e.prototype.allowSkipInSeconds = function() {
                    return this._skipInSeconds;
                }, e.prototype.disableBackButton = function() {
                    return this._disableBackButton;
                }, e.prototype.useDeviceOrientationForVideo = function() {
                    return this._useDeviceOrientationForVideo;
                }, e.prototype.muteVideo = function() {
                    return this._muteVideo;
                }, e;
            }());
            return e.Placement = t, e;
        }(I);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        C = function(e, t, n) {
            var i = function(e) {
                function n(t) {
                    e.call(this, t, "Placement");
                }
                return Be(n, e), n.prototype.setDefaultPlacement = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setDefaultPlacement", [ e ]);
                }, n.prototype.setPlacementState = function(e, n) {
                    return this._nativeBridge.invoke(this._apiClass, "setPlacementState", [ e, t.PlacementState[n] ]);
                }, n.prototype.setPlacementAnalytics = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setPlacementAnalytics", [ e ]);
                }, n;
            }(n.NativeApi);
            return e.PlacementApi = i, e;
        }(C, I, c);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        A = function(e, t) {
            var n = function(e) {
                function t(t) {
                    e.call(this, t, "Sdk");
                }
                return Be(t, e), t.prototype.loadComplete = function() {
                    return this._nativeBridge.invoke(this._apiClass, "loadComplete");
                }, t.prototype.initComplete = function() {
                    return this._nativeBridge.invoke(this._apiClass, "initComplete");
                }, t.prototype.setDebugMode = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setDebugMode", [ e ]);
                }, t.prototype.getDebugMode = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getDebugMode");
                }, t.prototype.logError = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "logError", [ e ]);
                }, t.prototype.logWarning = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "logWarning", [ e ]);
                }, t.prototype.logInfo = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "logInfo", [ e ]);
                }, t.prototype.logDebug = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "logDebug", [ e ]);
                }, t.prototype.setShowTimeout = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setShowTimeout", [ e ]);
                }, t.prototype.reinitialize = function() {
                    this._nativeBridge.invoke(this._apiClass, "reinitialize");
                }, t;
            }(t.NativeApi);
            return e.SdkApi = n, e;
        }(A, c);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        b = function(e, t) {
            !function(e) {
                e[e.PRIVATE = 0] = "PRIVATE", e[e.PUBLIC = 1] = "PUBLIC";
            }(e.StorageType || (e.StorageType = {}));
            var n = e.StorageType;
            !function(e) {
                e[e.COULDNT_SET_VALUE = 0] = "COULDNT_SET_VALUE", e[e.COULDNT_GET_VALUE = 1] = "COULDNT_GET_VALUE",
                    e[e.COULDNT_WRITE_STORAGE_TO_CACHE = 2] = "COULDNT_WRITE_STORAGE_TO_CACHE", e[e.COULDNT_CLEAR_STORAGE = 3] = "COULDNT_CLEAR_STORAGE",
                    e[e.COULDNT_GET_STORAGE = 4] = "COULDNT_GET_STORAGE", e[e.COULDNT_DELETE_VALUE = 5] = "COULDNT_DELETE_VALUE";
            }(e.StorageError || (e.StorageError = {}));
            var i = (e.StorageError, function(e) {
                function t(t) {
                    e.call(this, t, "Storage");
                }
                return Be(t, e), t.prototype.read = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "read", [ n[e] ]);
                }, t.prototype.write = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "write", [ n[e] ]);
                }, t.prototype.get = function(e, t) {
                    return this._nativeBridge.invoke(this._apiClass, "get", [ n[e], t ]);
                }, t.prototype.set = function(e, t, i) {
                    return this._nativeBridge.invoke(this._apiClass, "set", [ n[e], t, i ]);
                }, t.prototype["delete"] = function(e, t) {
                    return this._nativeBridge.invoke(this._apiClass, "delete", [ n[e], t ]);
                }, t.prototype.clear = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "clear", [ n[e] ]);
                }, t.prototype.getKeys = function(e, t, i) {
                    return this._nativeBridge.invoke(this._apiClass, "getKeys", [ n[e], t, i ]);
                }, t.prototype.handleEvent = function(e, t) {
                    switch (e) {}
                }, t;
            }(t.NativeApi));
            return e.StorageApi = i, e;
        }(b, c);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        O = function(e, t) {
            !function(e) {
                e[e.EXTERNAL = 0] = "EXTERNAL", e[e.INTERNAL = 1] = "INTERNAL";
            }(e.StorageType || (e.StorageType = {}));
            var n = e.StorageType, i = function(e) {
                function t(t) {
                    e.call(this, t, "DeviceInfo");
                }
                return Be(t, e), t.prototype.getAndroidId = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getAndroidId");
                }, t.prototype.getApiLevel = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getApiLevel");
                }, t.prototype.getManufacturer = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getManufacturer");
                }, t.prototype.getScreenLayout = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getScreenLayout");
                }, t.prototype.getScreenDensity = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getScreenDensity");
                }, t.prototype.isAppInstalled = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "isAppInstalled", [ e ]);
                }, t.prototype.getInstalledPackages = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "getInstalledPackages", [ e ]);
                }, t.prototype.getSystemProperty = function(e, t) {
                    return this._nativeBridge.invoke(this._apiClass, "getSystemProperty", [ e, t ]);
                }, t.prototype.getRingerMode = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getRingerMode");
                }, t.prototype.getDeviceVolume = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "getDeviceVolume", [ e ]);
                }, t.prototype.getFreeSpace = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "getFreeSpace", [ n[e] ]);
                }, t.prototype.getTotalSpace = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "getTotalSpace", [ n[e] ]);
                }, t;
            }(t.NativeApi);
            return e.AndroidDeviceInfoApi = i, e;
        }(O, c);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        T = function(e, t) {
            var n = function(e) {
                function t(t) {
                    e.call(this, t, "DeviceInfo");
                }
                return Be(t, e), t.prototype.getScreenScale = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getScreenScale");
                }, t.prototype.getUserInterfaceIdiom = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getUserInterfaceIdiom");
                }, t.prototype.getDeviceVolume = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getDeviceVolume");
                }, t.prototype.getFreeSpace = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getFreeSpace");
                }, t.prototype.getTotalSpace = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getTotalSpace");
                }, t.prototype.isSimulator = function() {
                    return this._nativeBridge.invoke(this._apiClass, "isSimulator");
                }, t.prototype.isAppleWatchPaired = function() {
                    return this._nativeBridge.invoke(this._apiClass, "isAppleWatchPaired");
                }, t;
            }(t.NativeApi);
            return e.IosDeviceInfoApi = n, e;
        }(T, c);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        w = function(e, t, n, i, r) {
            var o = function(e) {
                function t(t) {
                    e.call(this, t, "DeviceInfo"), t.getPlatform() === r.Platform.IOS ? this.Ios = new i.IosDeviceInfoApi(t) : this.Android = new n.AndroidDeviceInfoApi(t);
                }
                return Be(t, e), t.prototype.getAdvertisingTrackingId = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getAdvertisingTrackingId");
                }, t.prototype.getLimitAdTrackingFlag = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getLimitAdTrackingFlag");
                }, t.prototype.getOsVersion = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getOsVersion");
                }, t.prototype.getModel = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getModel");
                }, t.prototype.getScreenWidth = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getScreenWidth");
                }, t.prototype.getScreenHeight = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getScreenHeight");
                }, t.prototype.getTimeZone = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "getTimeZone", [ e ]);
                }, t.prototype.getConnectionType = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getConnectionType");
                }, t.prototype.getNetworkType = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getNetworkType");
                }, t.prototype.getNetworkOperator = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getNetworkOperator");
                }, t.prototype.getNetworkOperatorName = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getNetworkOperatorName");
                }, t.prototype.isRooted = function() {
                    return this._nativeBridge.invoke(this._apiClass, "isRooted");
                }, t.prototype.getUniqueEventId = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getUniqueEventId");
                }, t.prototype.getHeadset = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getHeadset");
                }, t.prototype.getSystemLanguage = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getSystemLanguage");
                }, t.prototype.getScreenBrightness = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getScreenBrightness");
                }, t.prototype.getBatteryLevel = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getBatteryLevel");
                }, t.prototype.getBatteryStatus = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getBatteryStatus");
                }, t.prototype.getFreeMemory = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getFreeMemory");
                }, t.prototype.getTotalMemory = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getTotalMemory");
                }, t;
            }(t.NativeApi);
            return e.DeviceInfoApi = o, e;
        }(w, c, O, T, a);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        N = function(e, t, n) {
            !function(e) {
                e[e.PREPARED = 0] = "PREPARED", e[e.OPENED = 1] = "OPENED", e[e.CLOSED = 2] = "CLOSED",
                    e[e.FAILED = 3] = "FAILED";
            }(e.AppSheetEvent || (e.AppSheetEvent = {}));
            var i = e.AppSheetEvent, r = function(e) {
                function t(t) {
                    e.call(this, t, "AppSheet"), this.onPrepared = new n.Observable1(), this.onOpen = new n.Observable1(),
                        this.onClose = new n.Observable1(), this.onError = new n.Observable2();
                }
                return Be(t, e), t.prototype.canOpen = function() {
                    return this._nativeBridge.invoke(this._apiClass, "canOpen");
                }, t.prototype.prepare = function(e, t) {
                    return void 0 === t && (t = 3e4), this._nativeBridge.invoke(this._apiClass, "prepare", [ e, t ]);
                }, t.prototype.present = function(e, t) {
                    return void 0 === t && (t = !0), this._nativeBridge.invoke(this._apiClass, "present", [ e, t ]);
                }, t.prototype.destroy = function(e) {
                    return "undefined" == typeof e ? this._nativeBridge.invoke(this._apiClass, "destroy") : this._nativeBridge.invoke(this._apiClass, "destroy", [ e ]);
                }, t.prototype.setPrepareTimeout = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setPrepareTimeout", [ e ]);
                }, t.prototype.getPrepareTimeout = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getPrepareTimeout");
                }, t.prototype.handleEvent = function(t, n) {
                    switch (t) {
                        case i[i.PREPARED]:
                            this.onPrepared.trigger(n[0]);
                            break;

                        case i[i.OPENED]:
                            this.onOpen.trigger(n[0]);
                            break;

                        case i[i.CLOSED]:
                            this.onClose.trigger(n[0]);
                            break;

                        case i[i.FAILED]:
                            this.onError.trigger(n[0], n[1]);
                            break;

                        default:
                            e.prototype.handleEvent.call(this, t, n);
                    }
                }, t;
            }(t.NativeApi);
            return e.AppSheetApi = r, e;
        }(N, c, u), R = function(e) {
            var t = function() {
                function e(e, t) {
                    this.resolve = e, this.reject = t;
                }
                return e;
            }();
            return e.CallbackContainer = t, e;
        }(R);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        D = function(e, t, n) {
            var i;
            !function(e) {
                e[e.ON_START = 0] = "ON_START", e[e.ON_CREATE = 1] = "ON_CREATE", e[e.ON_RESUME = 2] = "ON_RESUME",
                    e[e.ON_DESTROY = 3] = "ON_DESTROY", e[e.ON_PAUSE = 4] = "ON_PAUSE", e[e.KEY_DOWN = 5] = "KEY_DOWN",
                    e[e.ON_RESTORE = 6] = "ON_RESTORE", e[e.ON_STOP = 7] = "ON_STOP";
            }(i || (i = {}));
            var r = function(e) {
                function n(n) {
                    e.call(this, n, "AdUnit"), this.onStart = new t.Observable1(), this.onCreate = new t.Observable1(),
                        this.onResume = new t.Observable1(), this.onDestroy = new t.Observable2(), this.onPause = new t.Observable2(),
                        this.onKeyDown = new t.Observable5(), this.onRestore = new t.Observable1(), this.onStop = new t.Observable1();
                }
                return Be(n, e), n.prototype.open = function(e, t, n, i, r, o) {
                    return void 0 === i && (i = null), void 0 === r && (r = 0), void 0 === o && (o = !0),
                        this._nativeBridge.invoke(this._apiClass, "open", [ e, t, n, i, r, o ]);
                }, n.prototype.close = function() {
                    return this._nativeBridge.invoke(this._apiClass, "close");
                }, n.prototype.setViews = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setViews", [ e ]);
                }, n.prototype.getViews = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getViews");
                }, n.prototype.setOrientation = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setOrientation", [ e ]);
                }, n.prototype.getOrientation = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getOrientation");
                }, n.prototype.setKeepScreenOn = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setKeepScreenOn", [ e ]);
                }, n.prototype.setSystemUiVisibility = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setSystemUiVisibility", [ e ]);
                }, n.prototype.setKeyEventList = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setKeyEventList", [ e ]);
                }, n.prototype.handleEvent = function(t, n) {
                    switch (t) {
                        case i[i.ON_START]:
                            this.onStart.trigger(n[0]);
                            break;

                        case i[i.ON_CREATE]:
                            this.onCreate.trigger(n[0]);
                            break;

                        case i[i.ON_RESUME]:
                            this.onResume.trigger(n[0]);
                            break;

                        case i[i.ON_DESTROY]:
                            this.onDestroy.trigger(n[0], n[1]);
                            break;

                        case i[i.ON_PAUSE]:
                            this.onPause.trigger(n[0], n[1]);
                            break;

                        case i[i.KEY_DOWN]:
                            this.onKeyDown.trigger(n[0], n[1], n[2], n[3], n[4]);
                            break;

                        case i[i.ON_RESTORE]:
                            this.onRestore.trigger(n[0]);
                            break;

                        case i[i.ON_STOP]:
                            this.onStop.trigger(n[0]);
                            break;

                        default:
                            e.prototype.handleEvent.call(this, t, n);
                    }
                }, n;
            }(n.NativeApi);
            return e.AndroidAdUnitApi = r, e;
        }(D, u, c);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        k = function(e, t, n) {
            var i;
            !function(e) {
                e[e.VIEW_CONTROLLER_INIT = 0] = "VIEW_CONTROLLER_INIT", e[e.VIEW_CONTROLLER_DID_LOAD = 1] = "VIEW_CONTROLLER_DID_LOAD",
                    e[e.VIEW_CONTROLLER_DID_APPEAR = 2] = "VIEW_CONTROLLER_DID_APPEAR", e[e.VIEW_CONTROLLER_WILL_DISAPPEAR = 3] = "VIEW_CONTROLLER_WILL_DISAPPEAR",
                    e[e.VIEW_CONTROLLER_DID_DISAPPEAR = 4] = "VIEW_CONTROLLER_DID_DISAPPEAR", e[e.VIEW_CONTROLLER_DID_RECEIVE_MEMORY_WARNING = 5] = "VIEW_CONTROLLER_DID_RECEIVE_MEMORY_WARNING";
            }(i || (i = {}));
            var r = function(e) {
                function n(n) {
                    e.call(this, n, "AdUnit"), this.onViewControllerInit = new t.Observable0(), this.onViewControllerDidLoad = new t.Observable0(),
                        this.onViewControllerDidAppear = new t.Observable0(), this.onViewControllerWillDisappear = new t.Observable0(),
                        this.onViewControllerDidDisappear = new t.Observable0(), this.onViewControllerDidReceiveMemoryWarning = new t.Observable0();
                }
                return Be(n, e), n.prototype.open = function(e, t, n, i) {
                    return this._nativeBridge.invoke(this._apiClass, "open", [ e, t, n, i ]);
                }, n.prototype.close = function() {
                    return this._nativeBridge.invoke(this._apiClass, "close");
                }, n.prototype.setViews = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setViews", [ e ]);
                }, n.prototype.getViews = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getViews");
                }, n.prototype.setSupportedOrientations = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setSupportedOrientations", [ e ]);
                }, n.prototype.getSupportedOrientations = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getSupportedOrientations");
                }, n.prototype.setKeepScreenOn = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setKeepScreenOn", [ e ]);
                }, n.prototype.setStatusBarHidden = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setStatusBarHidden", [ e ]);
                }, n.prototype.getStatusBarHidden = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getStatusBarHidden");
                }, n.prototype.setShouldAutorotate = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "setShouldAutorotate", [ e ]);
                }, n.prototype.getShouldAutorotate = function() {
                    return this._nativeBridge.invoke(this._apiClass, "getShouldAutorotate");
                }, n.prototype.handleEvent = function(t, n) {
                    switch (t) {
                        case i[i.VIEW_CONTROLLER_INIT]:
                            this.onViewControllerInit.trigger();
                            break;

                        case i[i.VIEW_CONTROLLER_DID_LOAD]:
                            this.onViewControllerDidLoad.trigger();
                            break;

                        case i[i.VIEW_CONTROLLER_DID_APPEAR]:
                            this.onViewControllerDidAppear.trigger();
                            break;

                        case i[i.VIEW_CONTROLLER_WILL_DISAPPEAR]:
                            this.onViewControllerWillDisappear.trigger();
                            break;

                        case i[i.VIEW_CONTROLLER_DID_DISAPPEAR]:
                            this.onViewControllerDidDisappear.trigger();
                            break;

                        case i[i.VIEW_CONTROLLER_DID_RECEIVE_MEMORY_WARNING]:
                            this.onViewControllerDidReceiveMemoryWarning.trigger();
                            break;

                        default:
                            e.prototype.handleEvent.call(this, t, n);
                    }
                }, n;
            }(n.NativeApi);
            return e.IosAdUnitApi = r, e;
        }(k, u, c);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        P = function(e, t, n) {
            var i;
            !function(e) {
                e[e.ACTION = 0] = "ACTION";
            }(i || (i = {}));
            var r = function(e) {
                function t(t) {
                    e.call(this, t, "Notification"), this.onNotification = new n.Observable2();
                }
                return Be(t, e), t.prototype.addNotificationObserver = function(e, t) {
                    return this._nativeBridge.invoke(this._apiClass, "addNotificationObserver", [ e, t ]);
                }, t.prototype.removeNotificationObserver = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "removeNotificationObserver", [ e ]);
                }, t.prototype.removeAllNotificationObservers = function() {
                    return this._nativeBridge.invoke(this._apiClass, "removeAllNotificationObservers");
                }, t.prototype.handleEvent = function(t, n) {
                    switch (t) {
                        case i[i.ACTION]:
                            this.onNotification.trigger(n[0], n[1]);
                            break;

                        default:
                            e.prototype.handleEvent.call(this, t, n);
                    }
                }, t;
            }(t.NativeApi);
            return e.NotificationApi = r, e;
        }(P, c, u);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        B = function(e, t) {
            var n = function(e) {
                function t(t) {
                    e.call(this, t, "UrlScheme");
                }
                return Be(t, e), t.prototype.open = function(e) {
                    return this._nativeBridge.invoke(this._apiClass, "open", [ e ]);
                }, t;
            }(t.NativeApi);
            return e.UrlSchemeApi = n, e;
        }(B, c), L = function(e, t, n, i, r, o, a, s, c, u, l, h, p, d, f, v, g, _, m, y, E, S) {
            !function(e) {
                e[e.OK = 0] = "OK", e[e.ERROR = 1] = "ERROR";
            }(e.CallbackStatus || (e.CallbackStatus = {}));
            var I = e.CallbackStatus, C = function() {
                function e(e, t, s) {
                    void 0 === t && (t = _.Platform.TEST), void 0 === s && (s = !0), this.AppSheet = null,
                        this.AndroidAdUnit = null, this.Broadcast = null, this.Cache = null, this.Connectivity = null,
                        this.DeviceInfo = null, this.Intent = null, this.IosAdUnit = null, this.Listener = null,
                        this.Notification = null, this.Placement = null, this.Request = null, this.Resolve = null,
                        this.Sdk = null, this.Storage = null, this.VideoPlayer = null, this.UrlScheme = null,
                        this._callbackId = 1, this._callbackTable = {}, this._autoBatchInterval = 50, this._autoBatchEnabled = s,
                        this._platform = t, this._backend = e, this.AppSheet = new v.AppSheetApi(this),
                        t === _.Platform.IOS ? this.IosAdUnit = new y.IosAdUnitApi(this) : this.AndroidAdUnit = new m.AndroidAdUnitApi(this),
                        this.Broadcast = new n.BroadcastApi(this), this.Cache = new i.CacheApi(this), this.Connectivity = new r.ConnectivityApi(this),
                        this.DeviceInfo = new f.DeviceInfoApi(this), this.Intent = new u.IntentApi(this),
                        this.Listener = new l.ListenerApi(this), this.Notification = new E.NotificationApi(this),
                        this.Placement = new h.PlacementApi(this), this.Request = new o.RequestApi(this),
                        this.Resolve = new c.ResolveApi(this), this.Sdk = new p.SdkApi(this), this.Storage = new d.StorageApi(this),
                        this.VideoPlayer = new a.VideoPlayerApi(this), this.UrlScheme = new S.UrlSchemeApi(this);
                }
                return e.convertStatus = function(e) {
                    switch (e) {
                        case I[I.OK]:
                            return I.OK;

                        case I[I.ERROR]:
                            return I.ERROR;

                        default:
                            throw new Error("Status string is not valid: " + e);
                    }
                }, e.prototype.registerCallback = function(e, t) {
                    var n = this._callbackId++;
                    return this._callbackTable[n] = new g.CallbackContainer(e, t), n;
                }, e.prototype.invoke = function(e, n, i) {
                    var r = this;
                    if (this._autoBatchEnabled) {
                        this._autoBatch || (this._autoBatch = new t.BatchInvocation(this));
                        var o = this._autoBatch.queue(e, n, i);
                        return this._autoBatchTimer || (this._autoBatchTimer = setTimeout(function() {
                            r.invokeBatch(r._autoBatch), r._autoBatch = null, r._autoBatchTimer = null;
                        }, this._autoBatchInterval)), o;
                    }
                    var a = new t.BatchInvocation(this), o = a.queue(e, n, i);
                    return this.invokeBatch(a), o;
                }, e.prototype.rawInvoke = function(e, n, i) {
                    var r = new t.BatchInvocation(this), o = r.rawQueue(e, n, i);
                    return this.invokeBatch(r), o;
                }, e.prototype.handleCallback = function(t) {
                    var n = this;
                    t.forEach(function(t) {
                        var i = parseInt(t.shift(), 10), r = e.convertStatus(t.shift()), o = t.shift(), a = n._callbackTable[i];
                        if (!a) throw new Error("Unable to find matching callback object from callback id " + i);
                        switch (1 === o.length && (o = o[0]), r) {
                            case I.OK:
                                a.resolve(o);
                                break;

                            case I.ERROR:
                                a.reject(o);
                        }
                        delete n._callbackTable[i];
                    });
                }, e.prototype.handleEvent = function(e) {
                    var t = e.shift(), n = e.shift();
                    switch (t) {
                        case s.EventCategory[s.EventCategory.APPSHEET]:
                            this.AppSheet.handleEvent(n, e);
                            break;

                        case s.EventCategory[s.EventCategory.ADUNIT]:
                            this.getPlatform() === _.Platform.IOS ? this.IosAdUnit.handleEvent(n, e) : this.AndroidAdUnit.handleEvent(n, e);
                            break;

                        case s.EventCategory[s.EventCategory.BROADCAST]:
                            this.Broadcast.handleEvent(n, e);
                            break;

                        case s.EventCategory[s.EventCategory.CACHE]:
                            this.Cache.handleEvent(n, e);
                            break;

                        case s.EventCategory[s.EventCategory.CONNECTIVITY]:
                            this.Connectivity.handleEvent(n, e);
                            break;

                        case s.EventCategory[s.EventCategory.NOTIFICATION]:
                            this.Notification.handleEvent(n, e);
                            break;

                        case s.EventCategory[s.EventCategory.REQUEST]:
                            this.Request.handleEvent(n, e);
                            break;

                        case s.EventCategory[s.EventCategory.RESOLVE]:
                            this.Resolve.handleEvent(n, e);
                            break;

                        case s.EventCategory[s.EventCategory.VIDEOPLAYER]:
                            this.VideoPlayer.handleEvent(n, e);
                            break;

                        case s.EventCategory[s.EventCategory.STORAGE]:
                            this.Storage.handleEvent(n, e);
                            break;

                        default:
                            throw new Error("Unknown event category: " + t);
                    }
                }, e.prototype.handleInvocation = function(e) {
                    var t = this, n = e.shift(), i = e.shift(), r = e.shift();
                    e.push(function(e) {
                        for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
                        t.invokeCallback.apply(t, [ r, I[e] ].concat(n));
                    }), window[n][i].apply(window[n], e);
                }, e.prototype.setApiLevel = function(e) {
                    this._apiLevel = e;
                }, e.prototype.getApiLevel = function() {
                    return this._apiLevel;
                }, e.prototype.getPlatform = function() {
                    return this._platform;
                }, e.prototype.invokeBatch = function(t) {
                    this._backend.handleInvocation(JSON.stringify(t.getBatch()).replace(e._doubleRegExp, "$1"));
                }, e.prototype.invokeCallback = function(e, t) {
                    for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
                    this._backend.handleCallback(e, t, JSON.stringify(n));
                }, e._doubleRegExp = /"(\d+\.\d+)=double"/g, e;
            }();
            return e.NativeBridge = C, e;
        }(L, s, l, h, p, d, g, _, m, y, S, C, A, b, w, N, R, a, D, k, P, B), U = function(e) {
            !function(e) {
                e[e.STREAM_ALARM = 4] = "STREAM_ALARM", e[e.STREAM_DTMF = 8] = "STREAM_DTMF", e[e.STREAM_MUSIC = 3] = "STREAM_MUSIC",
                    e[e.STREAM_NOTIFICATION = 5] = "STREAM_NOTIFICATION", e[e.STREAM_RING = 2] = "STREAM_RING",
                    e[e.STREAM_SYSTEM = 1] = "STREAM_SYSTEM", e[e.STREAM_VOICE_CALL = 0] = "STREAM_VOICE_CALL";
            }(e.StreamType || (e.StreamType = {}));
            e.StreamType;
            return e;
        }(U), V = function(e) {
            var t = function() {
                function e() {}
                return e;
            }();
            return e.Model = t, e;
        }(V);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        M = function(e, t, n, i, r) {
            var o = function(e) {
                function n(t) {
                    e.call(this), this._nativeBridge = t;
                }
                return Be(n, e), n.prototype.fetch = function() {
                    var e = this, t = [];
                    return t.push(this._nativeBridge.DeviceInfo.getAdvertisingTrackingId().then(function(t) {
                        return e._advertisingIdentifier = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this._nativeBridge.DeviceInfo.getLimitAdTrackingFlag().then(function(t) {
                        e._nativeBridge.getPlatform() === i.Platform.IOS ? e._limitAdTracking = !t : e._limitAdTracking = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this._nativeBridge.DeviceInfo.getOsVersion().then(function(t) {
                        return e._osVersion = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this._nativeBridge.DeviceInfo.getModel().then(function(t) {
                        return e._model = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this._nativeBridge.DeviceInfo.getScreenWidth().then(function(t) {
                        return e._screenWidth = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this._nativeBridge.DeviceInfo.getScreenHeight().then(function(t) {
                        return e._screenHeight = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this._nativeBridge.DeviceInfo.getSystemLanguage().then(function(t) {
                        return e._language = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this._nativeBridge.DeviceInfo.isRooted().then(function(t) {
                        return e._rooted = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this._nativeBridge.DeviceInfo.getTimeZone(!1).then(function(t) {
                        return e._timeZone = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this._nativeBridge.DeviceInfo.getTotalMemory().then(function(t) {
                        return e._totalMemory = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), this._nativeBridge.getPlatform() === i.Platform.IOS ? (t.push(this._nativeBridge.DeviceInfo.Ios.getUserInterfaceIdiom().then(function(t) {
                        return e._userInterfaceIdiom = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this._nativeBridge.DeviceInfo.Ios.getScreenScale().then(function(t) {
                        return e._screenScale = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this._nativeBridge.DeviceInfo.Ios.isSimulator().then(function(t) {
                        return e._simulator = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this._nativeBridge.DeviceInfo.Ios.getTotalSpace().then(function(t) {
                        return e._totalInternalSpace = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    }))) : this._nativeBridge.getPlatform() === i.Platform.ANDROID && (t.push(this._nativeBridge.DeviceInfo.Android.getAndroidId().then(function(t) {
                        return e._androidId = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this._nativeBridge.DeviceInfo.Android.getApiLevel().then(function(t) {
                        return e._apiLevel = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this._nativeBridge.DeviceInfo.Android.getTotalSpace(r.StorageType.INTERNAL).then(function(t) {
                        return e._totalInternalSpace = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this._nativeBridge.DeviceInfo.Android.getTotalSpace(r.StorageType.EXTERNAL).then(function(t) {
                        return e._totalExternalSpace = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this._nativeBridge.DeviceInfo.Android.getManufacturer().then(function(t) {
                        return e._manufacturer = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this._nativeBridge.DeviceInfo.Android.getScreenDensity().then(function(t) {
                        return e._screenDensity = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this._nativeBridge.DeviceInfo.Android.getScreenLayout().then(function(t) {
                        return e._screenLayout = t;
                    })["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    }))), Promise.all(t);
                }, n.prototype.getAndroidId = function() {
                    return this._androidId;
                }, n.prototype.getAdvertisingIdentifier = function() {
                    return this._advertisingIdentifier;
                }, n.prototype.getLimitAdTracking = function() {
                    return this._limitAdTracking;
                }, n.prototype.getApiLevel = function() {
                    return this._apiLevel;
                }, n.prototype.getManufacturer = function() {
                    return this._manufacturer;
                }, n.prototype.getModel = function() {
                    return this._model;
                }, n.prototype.getNetworkType = function() {
                    var e = this;
                    return this._nativeBridge.DeviceInfo.getNetworkType().then(function(t) {
                        return e._networkType = t, e._networkType;
                    });
                }, n.prototype.getNetworkOperator = function() {
                    var e = this;
                    return this._nativeBridge.getPlatform() === i.Platform.IOS || this._nativeBridge.getPlatform() === i.Platform.ANDROID ? this._nativeBridge.DeviceInfo.getNetworkOperator().then(function(t) {
                        return e._networkOperator = t, e._networkOperator;
                    }) : Promise.resolve(this._networkOperator);
                }, n.prototype.getNetworkOperatorName = function() {
                    var e = this;
                    return this._nativeBridge.getPlatform() === i.Platform.IOS || this._nativeBridge.getPlatform() === i.Platform.ANDROID ? this._nativeBridge.DeviceInfo.getNetworkOperatorName().then(function(t) {
                        return e._networkOperatorName = t, e._networkOperatorName;
                    }) : Promise.resolve(this._networkOperatorName);
                }, n.prototype.getOsVersion = function() {
                    return this._osVersion;
                }, n.prototype.getScreenLayout = function() {
                    return this._screenLayout;
                }, n.prototype.getScreenDensity = function() {
                    return this._screenDensity;
                }, n.prototype.getScreenWidth = function() {
                    return this._screenWidth;
                }, n.prototype.getScreenHeight = function() {
                    return this._screenHeight;
                }, n.prototype.getScreenScale = function() {
                    return this._screenScale;
                }, n.prototype.getUserInterfaceIdiom = function() {
                    return this._userInterfaceIdiom;
                }, n.prototype.isRooted = function() {
                    return this._rooted;
                }, n.prototype.getConnectionType = function() {
                    var e = this;
                    return this._nativeBridge.DeviceInfo.getConnectionType().then(function(t) {
                        return e._connectionType = t, e._connectionType;
                    });
                }, n.prototype.getTimeZone = function() {
                    return this._timeZone;
                }, n.prototype.getFreeSpace = function() {
                    var e = this;
                    return this._nativeBridge.getPlatform() === i.Platform.IOS ? this._nativeBridge.DeviceInfo.Ios.getFreeSpace().then(function(t) {
                        return e._freeInternalSpace = t, e._freeInternalSpace;
                    }) : this._nativeBridge.getPlatform() === i.Platform.ANDROID ? this._nativeBridge.DeviceInfo.Android.getFreeSpace(r.StorageType.INTERNAL).then(function(t) {
                        return e._freeInternalSpace = t, e._freeInternalSpace;
                    }) : Promise.resolve(this._freeInternalSpace);
                }, n.prototype.getFreeSpaceExternal = function() {
                    var e = this;
                    return this._nativeBridge.getPlatform() === i.Platform.ANDROID ? this._nativeBridge.DeviceInfo.Android.getFreeSpace(r.StorageType.EXTERNAL).then(function(t) {
                        return e._freeExternalSpace = t, e._freeExternalSpace;
                    }) : Promise.resolve(this._freeExternalSpace);
                }, n.prototype.getTotalSpace = function() {
                    return this._totalInternalSpace;
                }, n.prototype.getTotalSpaceExternal = function() {
                    return this._totalExternalSpace;
                }, n.prototype.getLanguage = function() {
                    return this._language;
                }, n.prototype.isSimulator = function() {
                    return this._simulator;
                }, n.prototype.isAppleWatchPaired = function() {
                    var e = this;
                    return this._nativeBridge.getPlatform() === i.Platform.IOS ? this._nativeBridge.DeviceInfo.Ios.isAppleWatchPaired().then(function(t) {
                        return e._appleWatchPaired = t, e._appleWatchPaired;
                    }) : Promise.resolve(this._appleWatchPaired);
                }, n.prototype.getHeadset = function() {
                    var e = this;
                    return this._nativeBridge.DeviceInfo.getHeadset().then(function(t) {
                        return e._headset = t, e._headset;
                    });
                }, n.prototype.getRingerMode = function() {
                    var e = this;
                    return this._nativeBridge.getPlatform() === i.Platform.ANDROID ? this._nativeBridge.DeviceInfo.Android.getRingerMode().then(function(t) {
                        return e._ringerMode = t, e._ringerMode;
                    }) : Promise.resolve(this._ringerMode);
                }, n.prototype.getDeviceVolume = function() {
                    var e = this;
                    return this._nativeBridge.getPlatform() === i.Platform.IOS ? this._nativeBridge.DeviceInfo.Ios.getDeviceVolume().then(function(t) {
                        return e._volume = t, e._volume;
                    }) : this._nativeBridge.getPlatform() === i.Platform.ANDROID ? this._nativeBridge.DeviceInfo.Android.getDeviceVolume(t.StreamType.STREAM_SYSTEM).then(function(t) {
                        return e._volume = t, e._volume;
                    }) : Promise.resolve(this._volume);
                }, n.prototype.getScreenBrightness = function() {
                    var e = this;
                    return this._nativeBridge.DeviceInfo.getScreenBrightness().then(function(t) {
                        return e._screenBrightness = t, e._screenBrightness;
                    });
                }, n.prototype.getBatteryLevel = function() {
                    var e = this;
                    return this._nativeBridge.DeviceInfo.getBatteryLevel().then(function(t) {
                        return e._batteryLevel = t, e._batteryLevel;
                    });
                }, n.prototype.getBatteryStatus = function() {
                    var e = this;
                    return this._nativeBridge.DeviceInfo.getBatteryStatus().then(function(t) {
                        return e._batteryStatus = t, e._batteryStatus;
                    });
                }, n.prototype.getFreeMemory = function() {
                    var e = this;
                    return this._nativeBridge.DeviceInfo.getFreeMemory().then(function(t) {
                        return e._freeMemory = t, e._freeMemory;
                    });
                }, n.prototype.getTotalMemory = function() {
                    return this._totalMemory;
                }, n.prototype.getDTO = function() {
                    var e = this, t = [];
                    return t.push(this.getConnectionType()["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this.getNetworkType()["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this.getNetworkOperator()["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this.getNetworkOperatorName()["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this.getHeadset()["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this.getDeviceVolume()["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this.getScreenBrightness()["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this.getFreeSpace()["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this.getBatteryLevel()["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this.getBatteryStatus()["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this.getFreeMemory()["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), this._nativeBridge.getPlatform() === i.Platform.IOS && t.push(this.isAppleWatchPaired()["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), this._nativeBridge.getPlatform() === i.Platform.ANDROID && (t.push(this.getFreeSpaceExternal()["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    })), t.push(this.getRingerMode()["catch"](function(t) {
                        return e.handleDeviceInfoError(t);
                    }))), Promise.all(t).then(function(t) {
                        return {
                            androidId: e._androidId,
                            advertisingId: e._advertisingIdentifier,
                            trackingEnabled: e._limitAdTracking,
                            apiLevel: e._apiLevel,
                            osVersion: e._osVersion,
                            deviceMake: e._manufacturer,
                            deviceModel: e._model,
                            connectionType: e._connectionType,
                            networkType: e._networkType,
                            screenLayout: e._screenLayout,
                            screenDensity: e._screenDensity,
                            screenWidth: e._screenWidth,
                            screenHeight: e._screenHeight,
                            screenScale: e._screenScale,
                            userInterfaceIdiom: e._userInterfaceIdiom,
                            networkOperator: e._networkOperator,
                            networkOperatorName: e._networkOperatorName,
                            timeZone: e._timeZone,
                            headset: e._headset,
                            ringerMode: e._ringerMode,
                            language: e._language,
                            deviceVolume: e._volume,
                            screenBrightness: e._screenBrightness,
                            freeSpaceInternal: e._freeInternalSpace,
                            totalSpaceInternal: e._totalInternalSpace,
                            freeSpaceExternal: e._freeExternalSpace,
                            totalSpaceExternal: e._totalExternalSpace,
                            batteryLevel: e._batteryLevel,
                            batteryStatus: e._batteryStatus,
                            freeMemory: e._freeMemory,
                            totalMemory: e._totalMemory,
                            rooted: e._rooted,
                            simulator: e._simulator,
                            appleWatchPaired: e._appleWatchPaired
                        };
                    });
                }, n.prototype.handleDeviceInfoError = function(e) {
                    this._nativeBridge.Sdk.logWarning(JSON.stringify(e));
                }, n;
            }(n.Model);
            return e.DeviceInfo = o, e;
        }(M, U, V, a, O), F = function(e) {
            var t = function() {
                function e() {}
                return e.addParameters = function(e, t) {
                    var n = e.toString();
                    n += -1 !== n.indexOf("?") ? "&" : "?";
                    var i = [];
                    for (var r in t) if (t.hasOwnProperty(r)) {
                        var o = t[r];
                        void 0 !== o && i.push(encodeURIComponent(r) + "=" + encodeURIComponent(o));
                    }
                    return n += i.join("&");
                }, e.getQueryParameter = function(e, t) {
                    for (var n = e.split("?")[1].split("&"), i = 0; i < n.length; i++) {
                        var r = n[i].split("=");
                        if (r[0] === t) return r[1];
                    }
                    return null;
                }, e;
            }();
            return e.Url = t, e;
        }(F), x = function(e, t) {
            !function(e) {
                e[e.FORCED = 0] = "FORCED", e[e.ALLOWED = 1] = "ALLOWED", e[e.DISABLED = 2] = "DISABLED";
            }(e.CacheMode || (e.CacheMode = {}));
            var n = e.CacheMode, i = function() {
                function e(e) {
                    var i = this;
                    switch (this._placements = {}, this._defaultPlacement = null, this._enabled = e.enabled,
                        this._country = e.country, this._coppaCompliant = e.coppaCompliant, e.assetCaching) {
                        case "forced":
                            this._cacheMode = n.FORCED;
                            break;

                        case "allowed":
                            this._cacheMode = n.ALLOWED;
                            break;

                        case "disabled":
                            this._cacheMode = n.DISABLED;
                            break;

                        default:
                            throw new Error('Unknown assetCaching value "' + e.assetCaching + '"');
                    }
                    var r = e.placements;
                    r.forEach(function(e) {
                        var n = new t.Placement(e);
                        i._placements[n.getId()] = n, n.isDefault() && (i._defaultPlacement = n);
                    });
                }
                return e.prototype.isEnabled = function() {
                    return this._enabled;
                }, e.prototype.getCountry = function() {
                    return this._country;
                }, e.prototype.isCoppaCompliant = function() {
                    return this._coppaCompliant;
                }, e.prototype.getCacheMode = function() {
                    return this._cacheMode;
                }, e.prototype.getPlacement = function(e) {
                    return this._placements[e];
                }, e.prototype.getPlacements = function() {
                    return this._placements;
                }, e.prototype.getPlacementCount = function() {
                    if (!this._placements) return 0;
                    var e = 0;
                    for (var t in this._placements) this._placements.hasOwnProperty(t) && e++;
                    return e;
                }, e.prototype.getDefaultPlacement = function() {
                    return this._defaultPlacement;
                }, e;
            }();
            return e.Configuration = i, e;
        }(x, I);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        W = function(e, t) {
            var n = function(e) {
                function t(t) {
                    e.call(this), this._name = t[0], this._version = t[1];
                }
                return Be(t, e), t.getCategory = function() {
                    return "framework";
                }, t.getKeys = function() {
                    return [ "name.value", "version.value" ];
                }, t.prototype.getName = function() {
                    return this._name;
                }, t.prototype.getVersion = function() {
                    return this._version;
                }, t.prototype.getDTO = function() {
                    return {
                        frameworkName: this._name,
                        frameworkVersion: this._version
                    };
                }, t;
            }(t.Model);
            return e.FrameworkMetaData = n, e;
        }(W, V);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        q = function(e, t) {
            var n = function(e) {
                function t(t) {
                    e.call(this), this._name = t[0], this._version = t[1];
                }
                return Be(t, e), t.getCategory = function() {
                    return "adapter";
                }, t.getKeys = function() {
                    return [ "name.value", "version.value" ];
                }, t.prototype.getName = function() {
                    return this._name;
                }, t.prototype.getVersion = function() {
                    return this._version;
                }, t.prototype.getDTO = function() {
                    return {
                        adapterName: this._name,
                        adapterVersion: this._version
                    };
                }, t;
            }(t.Model);
            return e.AdapterMetaData = n, e;
        }(q, V);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        K = function(e, t) {
            var n = function(e) {
                function t(t) {
                    e.call(this), this._name = t[0], this._version = t[1], this._ordinal = parseInt(t[2], 10);
                }
                return Be(t, e), t.getCategory = function() {
                    return "mediation";
                }, t.getKeys = function() {
                    return [ "name.value", "version.value", "ordinal.value" ];
                }, t.prototype.getName = function() {
                    return this._name;
                }, t.prototype.getVersion = function() {
                    return this._version;
                }, t.prototype.getOrdinal = function() {
                    return this._ordinal;
                }, t.prototype.getDTO = function() {
                    return {
                        mediationName: this._name,
                        mediationVersion: this._version,
                        mediationOrdinal: this._ordinal
                    };
                }, t;
            }(t.Model);
            return e.MediationMetaData = n, e;
        }(K, V);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        H = function(e, t) {
            var n = function(e) {
                function t(t) {
                    e.call(this), this._serverId = t[0];
                }
                return Be(t, e), t.getCategory = function() {
                    return "player";
                }, t.getKeys = function() {
                    return [ "server_id.value" ];
                }, t.prototype.getServerId = function() {
                    return this._serverId;
                }, t.prototype.getDTO = function() {
                    return {
                        sid: this._serverId
                    };
                }, t;
            }(t.Model);
            return e.PlayerMetaData = n, e;
        }(H, V), j = function(e, t, n, i, r, o) {
            var a = function() {
                function e() {}
                return e.getValues = function(n, i, r) {
                    return e.categoryExists(n, r).then(function(e) {
                        return e ? Promise.all(i.map(function(e) {
                            return r.Storage.get(t.StorageType.PUBLIC, n + "." + e)["catch"](function() {});
                        })) : Promise.resolve(void 0);
                    });
                }, e.fetchFrameworkMetaData = function(t, i) {
                    return void 0 === i && (i = !0), e.fetch(n.FrameworkMetaData.getCategory(), n.FrameworkMetaData.getKeys(), t, i).then(function(e) {
                        return Promise.resolve(e);
                    });
                }, e.fetchAdapterMetaData = function(t, n) {
                    return void 0 === n && (n = !0), e.fetch(i.AdapterMetaData.getCategory(), i.AdapterMetaData.getKeys(), t, n).then(function(e) {
                        return Promise.resolve(e);
                    });
                }, e.fetchMediationMetaData = function(t, n) {
                    return void 0 === n && (n = !0), e.fetch(r.MediationMetaData.getCategory(), r.MediationMetaData.getKeys(), t, n).then(function(e) {
                        return Promise.resolve(e);
                    });
                }, e.fetchPlayerMetaData = function(n) {
                    return e.fetch(o.PlayerMetaData.getCategory(), o.PlayerMetaData.getKeys(), n, !1).then(function(i) {
                        return null != i ? (e.caches.player = void 0, n.Storage["delete"](t.StorageType.PUBLIC, o.PlayerMetaData.getCategory()).then(function() {
                            return i;
                        })) : Promise.resolve(i);
                    });
                }, e.fetch = function(t, n, i, r) {
                    return void 0 === r && (r = !0), r && e.caches[t] ? Promise.resolve(e.caches[t]) : e.getValues(t, n, i).then(function(n) {
                        return e.createAndCache(t, n, r);
                    });
                }, e.createAndCache = function(t, n, i) {
                    return void 0 === i && (i = !0), void 0 !== n ? (i && !e.caches[t] && (e.caches[t] = e.createByCategory(t, n)),
                        i ? e.caches[t] : e.createByCategory(t, n)) : void 0;
                }, e.createByCategory = function(e, t) {
                    switch (e) {
                        case "framework":
                            return new n.FrameworkMetaData(t);

                        case "adapter":
                            return new i.AdapterMetaData(t);

                        case "mediation":
                            return new r.MediationMetaData(t);

                        case "player":
                            return new o.PlayerMetaData(t);

                        default:
                            return null;
                    }
                }, e.clearCaches = function() {
                    e.caches = {
                        framework: void 0,
                        adapter: void 0,
                        mediation: void 0,
                        player: void 0
                    };
                }, e.categoryExists = function(e, n) {
                    return n.Storage.getKeys(t.StorageType.PUBLIC, e, !1).then(function(e) {
                        return e.length > 0;
                    });
                }, e.caches = {
                    framework: void 0,
                    adapter: void 0,
                    mediation: void 0,
                    player: void 0
                }, e;
            }();
            return e.MetaDataManager = a, e;
        }(j, b, W, q, K, H);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        G = function(e) {
            var t = function(e) {
                function t() {
                    e.apply(this, arguments);
                }
                return Be(t, e), t;
            }(SyntaxError);
            e.JsonSyntaxError = t;
            var n = function() {
                function e() {}
                return e.parse = function(e, t) {
                    try {
                        return JSON.parse(e, t);
                    } catch (n) {
                        var i = n;
                        throw i.failingContent = e, i.name = "JsonSyntaxError", i;
                    }
                }, e;
            }();
            return e.JsonParser = n, e;
        }(G), Y = function(e, t, n, i, r) {
            var o = function() {
                function e() {}
                return e.fetch = function(t, o, a, s) {
                    return i.MetaDataManager.fetchAdapterMetaData(t).then(function(i) {
                        var c = e.createConfigUrl(a, s, i);
                        return t.Sdk.logInfo("Requesting configuration from " + c), o.get(c, [], {
                            retries: 5,
                            retryDelay: 5e3,
                            followRedirects: !1,
                            retryWithConnectionEvents: !0
                        }).then(function(e) {
                            try {
                                var i = r.JsonParser.parse(e.response), o = new n.Configuration(i);
                                return t.Sdk.logInfo("Received configuration with " + o.getPlacementCount() + " placements"),
                                    o;
                            } catch (a) {
                                throw t.Sdk.logError("Config request failed " + a), new Error(a);
                            }
                        });
                    });
                }, e.setTestBaseUrl = function(t) {
                    e.ConfigBaseUrl = t + "/games";
                }, e.createConfigUrl = function(n, i, r) {
                    var o = [ e.ConfigBaseUrl, n.getGameId(), "configuration" ].join("/");
                    return o = t.Url.addParameters(o, {
                        bundleId: n.getApplicationName(),
                        encrypted: !n.isDebuggable(),
                        rooted: i.isRooted()
                    }), r && (o = t.Url.addParameters(o, r.getDTO())), o;
                }, e.ConfigBaseUrl = "https://adserver.unityads.unity3d.com/games", e;
            }();
            return e.ConfigManager = o, e;
        }(Y, F, x, j, G), z = function(e) {
            var t = function() {
                function e(e, t, n) {
                    this._isVideoCached = !1, this._id = e.id, this._appStoreId = e.appStoreId, this._appStoreCountry = e.appStoreCountry,
                        this._gameId = e.gameId, this._gameName = e.gameName, this._gameIcon = e.gameIcon,
                        this._rating = e.rating, this._ratingCount = e.ratingCount, this._landscapeImage = e.endScreenLandscape,
                        this._portraitImage = e.endScreenPortrait, this._video = e.trailerDownloadable,
                        this._videoSize = e.trailerDownloadableSize, this._streamingVideo = e.trailerStreaming,
                        this._clickAttributionUrl = e.clickAttributionUrl, this._clickAttributionUrlFollowsRedirects = e.clickAttributionUrlFollowsRedirects,
                        this._bypassAppSheet = e.bypassAppSheet, this._gamerId = t, this._abGroup = n;
                }
                return e.prototype.getId = function() {
                    return this._id;
                }, e.prototype.getAppStoreId = function() {
                    return this._appStoreId;
                }, e.prototype.getAppStoreCountry = function() {
                    return this._appStoreCountry;
                }, e.prototype.getGameId = function() {
                    return this._gameId;
                }, e.prototype.getGameName = function() {
                    return this._gameName;
                }, e.prototype.getGameIcon = function() {
                    return this._gameIcon;
                }, e.prototype.setGameIcon = function(e) {
                    this._gameIcon = e;
                }, e.prototype.getRating = function() {
                    return this._rating;
                }, e.prototype.getRatingCount = function() {
                    return this._ratingCount;
                }, e.prototype.getPortraitUrl = function() {
                    return this._portraitImage;
                }, e.prototype.setPortraitUrl = function(e) {
                    this._portraitImage = e;
                }, e.prototype.getLandscapeUrl = function() {
                    return this._landscapeImage;
                }, e.prototype.setLandscapeUrl = function(e) {
                    this._landscapeImage = e;
                }, e.prototype.getVideoUrl = function() {
                    return this._video;
                }, e.prototype.setVideoUrl = function(e) {
                    this._video = e;
                }, e.prototype.getClickAttributionUrl = function() {
                    return this._clickAttributionUrl;
                }, e.prototype.getClickAttributionUrlFollowsRedirects = function() {
                    return this._clickAttributionUrlFollowsRedirects;
                }, e.prototype.getBypassAppSheet = function() {
                    return this._bypassAppSheet;
                }, e.prototype.getGamerId = function() {
                    return this._gamerId;
                }, e.prototype.getAbGroup = function() {
                    return this._abGroup;
                }, e.prototype.isVideoCached = function() {
                    return this._isVideoCached;
                }, e.prototype.setVideoCached = function(e) {
                    this._isVideoCached = e;
                }, e;
            }();
            return e.Campaign = t, e;
        }(z);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        Q = function(e, t) {
            var n = function(e) {
                function t(t, n, i, r) {
                    e.call(this, {}, i, r), this._campaignId = n, this._vast = t;
                }
                return Be(t, e), t.prototype.getId = function() {
                    return this._campaignId;
                }, t.prototype.getVast = function() {
                    return this._vast;
                }, t.prototype.getVideoUrl = function() {
                    var t = e.prototype.getVideoUrl.call(this);
                    return t ? t : this._vast.getVideoUrl();
                }, t;
            }(t.Campaign);
            return e.VastCampaign = n, e;
        }(Q, z), J = function(e, t, n, i, r, o, a, s) {
            var c = function() {
                function e(e, n, i, r, o) {
                    this.onCampaign = new t.Observable1(), this.onVastCampaign = new t.Observable1(),
                        this.onNoFill = new t.Observable1(), this.onError = new t.Observable1(), this._nativeBridge = e,
                        this._request = n, this._clientInfo = i, this._deviceInfo = r, this._vastParser = o;
                }
                return e.setTestBaseUrl = function(t) {
                    e.CampaignBaseUrl = t + "/games";
                }, e.prototype.request = function() {
                    var e = this;
                    return Promise.all([ this.createRequestUrl(), this.createRequestBody() ]).then(function(t) {
                        var n = t[0], a = t[1];
                        return e._nativeBridge.Sdk.logInfo("Requesting ad plan from " + n), e._request.post(n, a, [], {
                            retries: 5,
                            retryDelay: 5e3,
                            followRedirects: !1,
                            retryWithConnectionEvents: !0
                        }).then(function(t) {
                            var n = s.JsonParser.parse(t.response);
                            if (n.campaign) {
                                e._nativeBridge.Sdk.logInfo("Unity Ads server returned game advertisement");
                                var a = new i.Campaign(n.campaign, n.gamerId, n.abGroup);
                                e.onCampaign.trigger(a);
                            } else "vast" in n ? null === n.vast ? (e._nativeBridge.Sdk.logInfo("Unity Ads server returned no fill"),
                                e.onNoFill.trigger(3600)) : (e._nativeBridge.Sdk.logInfo("Unity Ads server returned VAST advertisement"),
                                e._vastParser.retrieveVast(n.vast, e._nativeBridge, e._request).then(function(t) {
                                    var i = void 0;
                                    e._nativeBridge.getPlatform() === o.Platform.IOS ? i = "00005472656d6f7220694f53" : e._nativeBridge.getPlatform() === o.Platform.ANDROID && (i = "005472656d6f7220416e6472");
                                    var a = new r.VastCampaign(t, i, n.gamerId, n.abGroup);
                                    return 0 === a.getVast().getImpressionUrls().length ? void e.onError.trigger(new Error("Campaign does not have an impression url")) : (0 === a.getVast().getErrorURLTemplates().length && e._nativeBridge.Sdk.logWarning("Campaign does not have an error url for game id " + e._clientInfo.getGameId()),
                                        a.getVideoUrl() ? void e.onVastCampaign.trigger(a) : void e.onError.trigger(new Error("Campaign does not have a video url")));
                                })["catch"](function(t) {
                                    e.onError.trigger(t);
                                })) : (e._nativeBridge.Sdk.logInfo("Unity Ads server returned no fill"), e.onNoFill.trigger(3600));
                        });
                    })["catch"](function(t) {
                        e.onError.trigger(t);
                    });
                }, e.prototype.createRequestUrl = function() {
                    var t = [ e.CampaignBaseUrl, this._clientInfo.getGameId(), "fill" ].join("/");
                    this._deviceInfo.getAdvertisingIdentifier() ? t = n.Url.addParameters(t, {
                        advertisingTrackingId: this._deviceInfo.getAdvertisingIdentifier(),
                        limitAdTracking: this._deviceInfo.getLimitAdTracking()
                    }) : this._clientInfo.getPlatform() === o.Platform.ANDROID && (t = n.Url.addParameters(t, {
                        androidId: this._deviceInfo.getAndroidId()
                    })), t = n.Url.addParameters(t, {
                        deviceMake: this._deviceInfo.getManufacturer(),
                        deviceModel: this._deviceInfo.getModel(),
                        platform: o.Platform[this._clientInfo.getPlatform()].toLowerCase(),
                        screenDensity: this._deviceInfo.getScreenDensity(),
                        screenWidth: this._deviceInfo.getScreenWidth(),
                        screenHeight: this._deviceInfo.getScreenHeight(),
                        sdkVersion: this._clientInfo.getSdkVersion(),
                        screenSize: this._deviceInfo.getScreenLayout()
                    }), "undefined" != typeof navigator && navigator.userAgent && (t = n.Url.addParameters(t, {
                        webviewUa: encodeURIComponent(navigator.userAgent)
                    })), t = this._clientInfo.getPlatform() === o.Platform.IOS ? n.Url.addParameters(t, {
                        osVersion: this._deviceInfo.getOsVersion()
                    }) : n.Url.addParameters(t, {
                        apiLevel: this._deviceInfo.getApiLevel()
                    }), this._clientInfo.getTestMode() && (t = n.Url.addParameters(t, {
                        test: !0
                    }));
                    var i = [];
                    return i.push(this._deviceInfo.getConnectionType()), i.push(this._deviceInfo.getNetworkType()),
                        Promise.all(i).then(function(e) {
                            var i = e[0], r = e[1];
                            return t = n.Url.addParameters(t, {
                                connectionType: i,
                                networkType: r
                            });
                        });
                }, e.prototype.createRequestBody = function() {
                    var e = this, t = [];
                    t.push(this._deviceInfo.getFreeSpace()), t.push(this._deviceInfo.getNetworkOperator()),
                        t.push(this._deviceInfo.getNetworkOperatorName());
                    var n = {
                        bundleVersion: this._clientInfo.getApplicationVersion(),
                        bundleId: this._clientInfo.getApplicationName(),
                        language: this._deviceInfo.getLanguage(),
                        timeZone: this._deviceInfo.getTimeZone()
                    };
                    return Promise.all(t).then(function(t) {
                        var i = t[0], r = t[1], o = t[2];
                        return n.deviceFreeSpace = i, n.networkOperator = r, n.networkOperatorName = o,
                            a.MetaDataManager.fetchMediationMetaData(e._nativeBridge).then(function(e) {
                                return e && (n.mediation = e.getDTO()), JSON.stringify(n);
                            });
                    });
                }, e.CampaignBaseUrl = "https://adserver.unityads.unity3d.com/games", e;
            }();
            return e.CampaignManager = c, e;
        }(J, u, F, z, Q, a, j, G), X = function(e, t, n, i) {
            !function(e) {
                e[e.OK = 0] = "OK", e[e.STOPPED = 1] = "STOPPED";
            }(e.CacheStatus || (e.CacheStatus = {}));
            var r = e.CacheStatus, o = function() {
                function e(e, t) {
                    var n = this;
                    this._callbacks = {}, this._fileIds = {}, this._nativeBridge = e, this._wakeUpManager = t,
                        this._wakeUpManager.onNetworkConnected.subscribe(function() {
                            return n.onNetworkConnected();
                        }), this._nativeBridge.Cache.setProgressInterval(500), this._nativeBridge.Cache.onDownloadStarted.subscribe(function(e, t, i, r, o) {
                        return n.onDownloadStarted(e, t, i, r, o);
                    }), this._nativeBridge.Cache.onDownloadProgress.subscribe(function(e, t, i) {
                        return n.onDownloadProgress(e, t, i);
                    }), this._nativeBridge.Cache.onDownloadEnd.subscribe(function(e, t, i, r, o, a) {
                        return n.onDownloadEnd(e, t, i, r, o, a);
                    }), this._nativeBridge.Cache.onDownloadStopped.subscribe(function(e, t, i, r, o, a) {
                        return n.onDownloadStopped(e, t, i, r, o, a);
                    }), this._nativeBridge.Cache.onDownloadError.subscribe(function(e, t, i) {
                        return n.onDownloadError(e, t, i);
                    });
                }
                return e.getDefaultCacheOptions = function() {
                    return {
                        retries: 0
                    };
                }, e.prototype.cache = function(n, i) {
                    var o = this;
                    return "undefined" == typeof i && (i = e.getDefaultCacheOptions()), this._nativeBridge.Cache.isCaching().then(function(e) {
                        return e ? Promise.reject(t.CacheError.FILE_ALREADY_CACHING) : Promise.all([ o.shouldCache(n), o.getFileId(n) ]).then(function(e) {
                            var t = e[0], a = e[1];
                            if (!t) return Promise.resolve([ r.OK, a ]);
                            var s = o.registerCallback(n, a, i);
                            return o.downloadFile(n, a), s;
                        });
                    });
                }, e.prototype.stop = function() {
                    var e, t = !1;
                    for (e in this._callbacks) if (this._callbacks.hasOwnProperty(e)) {
                        var n = this._callbacks[e];
                        n.networkRetry ? (n.reject([ r.STOPPED, n.fileId ]), delete this._callbacks[e]) : t = !0;
                    }
                    t && this._nativeBridge.Cache.stop();
                }, e.prototype.cleanCache = function() {
                    var e = this;
                    return this._nativeBridge.Cache.getFiles().then(function(t) {
                        if (!t || !t.length) return Promise.resolve();
                        var i = new Date().getTime() - 18144e5, r = 52428800, o = [], a = 0;
                        t.sort(function(e, t) {
                            return t.mtime - e.mtime;
                        });
                        for (var s = 0; s < t.length; s++) {
                            var c = t[s];
                            a += c.size, (c.mtime < i || a > r) && o.push(c.id);
                        }
                        if (0 === o.length) return Promise.resolve();
                        e._nativeBridge.Sdk.logInfo("Unity Ads cache: Deleting " + o.length + " old files");
                        var u = [];
                        return o.map(function(t) {
                            u.push(e._nativeBridge.Storage["delete"](n.StorageType.PRIVATE, "cache." + t)),
                                u.push(e._nativeBridge.Cache.deleteFile(t));
                        }), u.push(e._nativeBridge.Storage.write(n.StorageType.PRIVATE)), Promise.all(u);
                    });
                }, e.prototype.getFileId = function(e) {
                    var t = this;
                    if (e in this._fileIds) return Promise.resolve(this._fileIds[e]);
                    var n, i = e, r = e.split("/");
                    r.length > 1 && (i = r[r.length - 1]);
                    var o = i.split(".");
                    return o.length > 1 && (n = o[o.length - 1]), this._nativeBridge.Cache.getHash(e).then(function(i) {
                        var r;
                        return r = n ? t._fileIds[e] = i + "." + n : t._fileIds[e] = i;
                    });
                }, e.prototype.getFileUrl = function(e) {
                    return this._nativeBridge.Cache.getFilePath(e).then(function(e) {
                        return "file://" + e;
                    });
                }, e.prototype.shouldCache = function(e) {
                    var t = this;
                    return this.getFileId(e).then(function(e) {
                        return t._nativeBridge.Cache.getFileInfo(e).then(function(r) {
                            return r.found && r.size > 0 ? t._nativeBridge.Storage.get(n.StorageType.PRIVATE, "cache." + e).then(function(e) {
                                var t = i.JsonParser.parse(e);
                                return !t.fullyDownloaded;
                            }) : !0;
                        });
                    });
                }, e.prototype.downloadFile = function(e, n) {
                    var i = this;
                    this._nativeBridge.Cache.download(e, n)["catch"](function(r) {
                        var o = i._callbacks[e];
                        if (o) switch (r) {
                            case t.CacheError[t.CacheError.FILE_ALREADY_CACHING]:
                                return i._nativeBridge.Sdk.logError("Unity Ads cache error: attempted to add second download from " + e + " to " + n),
                                    void o.reject(r);

                            case t.CacheError[t.CacheError.NO_INTERNET]:
                                return void i.handleRetry(o, e, t.CacheError[t.CacheError.NO_INTERNET]);

                            default:
                                return void o.reject(r);
                        }
                    });
                }, e.prototype.registerCallback = function(e, t, n) {
                    var i = this;
                    return new Promise(function(r, o) {
                        var a = {
                            fileId: t,
                            networkRetry: !1,
                            retryCount: 0,
                            resolve: r,
                            reject: o,
                            options: n
                        };
                        i._callbacks[e] = a;
                    });
                }, e.prototype.createCacheResponse = function(e, t, n, i, r, o, a) {
                    return {
                        fullyDownloaded: e,
                        url: t,
                        size: n,
                        totalSize: i,
                        duration: r,
                        responseCode: o,
                        headers: a
                    };
                }, e.prototype.writeCacheResponse = function(e, t) {
                    this._nativeBridge.Storage.set(n.StorageType.PRIVATE, "cache." + this._fileIds[e], JSON.stringify(t)),
                        this._nativeBridge.Storage.write(n.StorageType.PRIVATE);
                }, e.prototype.onDownloadStarted = function(e, t, n, i, r) {
                    0 === t && this.writeCacheResponse(e, this.createCacheResponse(!1, e, t, n, 0, i, r));
                }, e.prototype.onDownloadProgress = function(e, t, n) {
                    this._nativeBridge.Sdk.logDebug('Cache progress for "' + e + '": ' + Math.round(t / n * 100) + "%");
                }, e.prototype.onDownloadEnd = function(e, t, n, i, o, a) {
                    var s = this._callbacks[e];
                    s && (this.writeCacheResponse(e, this.createCacheResponse(!0, e, t, n, i, o, a)),
                        s.resolve([ r.OK, s.fileId ]), delete this._callbacks[e]);
                }, e.prototype.onDownloadStopped = function(e, t, n, i, o, a) {
                    var s = this._callbacks[e];
                    s && (this.writeCacheResponse(e, this.createCacheResponse(!1, e, t, n, i, o, a)),
                        s.resolve([ r.STOPPED, s.fileId ]), delete this._callbacks[e]);
                }, e.prototype.onDownloadError = function(e, n, i) {
                    var r = this._callbacks[n];
                    if (r) switch (e) {
                        case t.CacheError[t.CacheError.FILE_IO_ERROR]:
                            return void this.handleRetry(r, n, e);

                        default:
                            return r.reject(e), void delete this._callbacks[n];
                    }
                }, e.prototype.handleRetry = function(e, t, n) {
                    e.retryCount < e.options.retries ? (e.retryCount++, e.networkRetry = !0) : (e.reject(n),
                        delete this._callbacks[t]);
                }, e.prototype.onNetworkConnected = function() {
                    var e;
                    for (e in this._callbacks) if (this._callbacks.hasOwnProperty(e)) {
                        var t = this._callbacks[e];
                        t.networkRetry && (t.networkRetry = !1, this.downloadFile(e, t.fileId));
                    }
                }, e;
            }();
            return e.CacheManager = o, e;
        }(X, h, b, G), $ = function(e) {
            var t = function() {
                function e(e, t) {
                    var n = this;
                    this._nativeBridge = e, this._wakeUpManager = t, this._nativeBridge.Request.onComplete.subscribe(function(e, t, i, r, o) {
                        return n.onRequestComplete(e, t, i, r, o);
                    }), this._nativeBridge.Request.onFailed.subscribe(function(e, t, i) {
                        return n.onRequestFailed(e, t, i);
                    }), this._wakeUpManager.onNetworkConnected.subscribe(function() {
                        return n.onNetworkConnected();
                    });
                }
                return e.getHeader = function(e, t) {
                    if (e instanceof Array) for (var n = 0; n < e.length; ++n) {
                        var i = e[n];
                        if (i[0].match(new RegExp(t, "i"))) return i[1];
                    } else for (var r in e) if (e.hasOwnProperty(r) && r.match(new RegExp(t, "i"))) return e[r].toString();
                    return null;
                }, e.getDefaultRequestOptions = function() {
                    return {
                        retries: 0,
                        retryDelay: 0,
                        followRedirects: !1,
                        retryWithConnectionEvents: !1
                    };
                }, e.prototype.get = function(t, n, i) {
                    void 0 === n && (n = []), "undefined" == typeof i && (i = e.getDefaultRequestOptions());
                    var r = e._callbackId++, o = this.registerCallback(r);
                    return this.invokeRequest(r, {
                        method: 0,
                        url: t,
                        headers: n,
                        retryCount: 0,
                        options: i
                    }), o;
                }, e.prototype.post = function(t, n, i, r) {
                    void 0 === n && (n = ""), void 0 === i && (i = []), "undefined" == typeof r && (r = e.getDefaultRequestOptions()),
                        i.push([ "Content-Type", "application/json" ]);
                    var o = e._callbackId++, a = this.registerCallback(o);
                    return this.invokeRequest(o, {
                        method: 1,
                        url: t,
                        data: n,
                        headers: i,
                        retryCount: 0,
                        options: r
                    }), a;
                }, e.prototype.head = function(t, n, i) {
                    void 0 === n && (n = []), "undefined" == typeof i && (i = e.getDefaultRequestOptions());
                    var r = e._callbackId++, o = this.registerCallback(r);
                    return this.invokeRequest(r, {
                        method: 2,
                        url: t,
                        headers: n,
                        retryCount: 0,
                        options: i
                    }), o;
                }, e.prototype.registerCallback = function(t) {
                    return new Promise(function(n, i) {
                        var r = {};
                        r[0] = n, r[1] = i, e._callbacks[t] = r;
                    });
                }, e.prototype.invokeRequest = function(t, n) {
                    switch (e._requests[t] = n, n.method) {
                        case 0:
                            return this._nativeBridge.Request.get(t.toString(), n.url, n.headers, e._connectTimeout, e._readTimeout);

                        case 1:
                            return this._nativeBridge.Request.post(t.toString(), n.url, n.data, n.headers, e._connectTimeout, e._readTimeout);

                        case 2:
                            return this._nativeBridge.Request.head(t.toString(), n.url, n.headers, e._connectTimeout, e._readTimeout);

                        default:
                            throw new Error('Unsupported request method "' + n.method + '"');
                    }
                }, e.prototype.finishRequest = function(t, n) {
                    for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
                    var o = e._callbacks[t];
                    o && (o[n].apply(o, i), delete e._callbacks[t], delete e._requests[t]);
                }, e.prototype.handleFailedRequest = function(e, t, n) {
                    var i = this;
                    t.retryCount < t.options.retries ? (t.retryCount++, setTimeout(function() {
                        i.invokeRequest(e, t);
                    }, t.options.retryDelay)) : t.options.retryWithConnectionEvents || this.finishRequest(e, 1, [ t, n ]);
                }, e.prototype.onRequestComplete = function(t, n, i, r, o) {
                    var a = parseInt(t, 10), s = {
                        url: n,
                        response: i,
                        responseCode: r,
                        headers: o
                    }, c = e._requests[a];
                    if (-1 !== e._allowedResponseCodes.indexOf(r)) if (-1 !== e._redirectResponseCodes.indexOf(r) && c.options.followRedirects) {
                        var u = c.url = e.getHeader(o, "location");
                        u && u.match(/^https?/i) ? this.invokeRequest(a, c) : this.finishRequest(a, 0, s);
                    } else this.finishRequest(a, 0, s); else this.handleFailedRequest(a, c, "FAILED_AFTER_RETRIES");
                }, e.prototype.onRequestFailed = function(t, n, i) {
                    var r = parseInt(t, 10), o = e._requests[r];
                    this.handleFailedRequest(r, o, i);
                }, e.prototype.onNetworkConnected = function() {
                    var t;
                    for (t in e._requests) if (e._requests.hasOwnProperty(t)) {
                        var n = e._requests[t];
                        n.options.retryWithConnectionEvents && n.options.retries === n.retryCount && this.invokeRequest(t, n);
                    }
                }, e._connectTimeout = 3e4, e._readTimeout = 3e4, e._allowedResponseCodes = [ 200, 501, 300, 301, 302, 303, 304, 305, 306, 307, 308 ],
                    e._redirectResponseCodes = [ 300, 301, 302, 303, 304, 305, 306, 307, 308 ], e._callbackId = 1,
                    e._callbacks = {}, e._requests = {}, e;
            }();
            return e.Request = t, e;
        }($), Z = function(e) {
            var t = function() {
                function e(e) {
                    this.showSent = !1, this.startSent = !1, this.firstQuartileSent = !1, this.midpointSent = !1,
                        this.thirdQuartileSent = !1, this.viewSent = !1, this.skipSent = !1, this.impressionSent = !1,
                        this._id = e;
                }
                return e.prototype.getId = function() {
                    return this._id;
                }, e;
            }();
            return e.Session = t, e;
        }(Z), ee = function(e, t, n, i) {
            var r = function() {
                function e(e, t, n) {
                    this._eventManager = e, this._deviceInfo = t, this._nativeBridge = n;
                }
                return e.prototype.createUniqueEventMetadata = function(e, t, n) {
                    var i = this;
                    return this._eventManager.getUniqueEventId().then(function(r) {
                        return i.getInfoJson(e, r, t, n);
                    });
                }, e.prototype.getInfoJson = function(e, t, n, r) {
                    var o = this, a = {
                        eventId: t,
                        sessionId: n.getId(),
                        gamerId: e.getCampaign().getGamerId(),
                        campaignId: e.getCampaign().getId(),
                        placementId: e.getPlacement().getId(),
                        apiLevel: this._deviceInfo.getApiLevel(),
                        cached: !0,
                        advertisingId: this._deviceInfo.getAdvertisingIdentifier(),
                        trackingEnabled: this._deviceInfo.getLimitAdTracking(),
                        osVersion: this._deviceInfo.getOsVersion(),
                        sid: r,
                        deviceMake: this._deviceInfo.getManufacturer(),
                        deviceModel: this._deviceInfo.getModel()
                    }, s = [];
                    return s.push(this._deviceInfo.getNetworkType()), s.push(this._deviceInfo.getConnectionType()),
                        Promise.all(s).then(function(e) {
                            var n = e[0], r = e[1];
                            return a.networkType = n, a.connectionType = r, i.MetaDataManager.fetchMediationMetaData(o._nativeBridge).then(function(e) {
                                return e && (a.mediationName = e.getName(), a.mediationVersion = e.getVersion(),
                                    a.mediationOrdinal = e.getOrdinal()), [ t, a ];
                            });
                        });
                }, e;
            }();
            e.SessionManagerEventMetadataCreator = r;
            var o = function() {
                function e(e, t, n, i, o) {
                    this._nativeBridge = e, this._clientInfo = t, this._deviceInfo = n, this._eventManager = i,
                        this._eventMetadataCreator = o || new r(this._eventManager, this._deviceInfo, this._nativeBridge);
                }
                return e.setTestBaseUrl = function(t) {
                    e.VideoEventBaseUrl = t + "/mobile/gamers", e.ClickEventBaseUrl = t + "/mobile/campaigns";
                }, e.prototype.create = function() {
                    var e = this;
                    return this._eventManager.getUniqueEventId().then(function(n) {
                        return e._currentSession = new t.Session(n), e._eventManager.startNewSession(n);
                    });
                }, e.prototype.getSession = function() {
                    return this._currentSession;
                }, e.prototype.setSession = function(e) {
                    this._currentSession = e;
                }, e.prototype.sendShow = function(e) {
                    var t = this;
                    if (this._currentSession) {
                        if (this._currentSession.showSent) return;
                        this._currentSession.showSent = !0;
                    }
                    var n = function(n) {
                        var i = n[0], r = n[1];
                        t._eventManager.operativeEvent("show", i, r.sessionId, t.createShowEventUrl(e), JSON.stringify(r));
                    };
                    return this._eventMetadataCreator.createUniqueEventMetadata(e, this._currentSession, this._gamerServerId).then(n);
                }, e.prototype.sendImpressionEvent = function(e) {
                    if (this._currentSession) {
                        if (this._currentSession.impressionSent) return;
                        this._currentSession.impressionSent = !0;
                    }
                    e.sendImpressionEvent(this._eventManager, this._currentSession.getId()), e.sendTrackingEvent(this._eventManager, "creativeView", this._currentSession.getId());
                }, e.prototype.sendStart = function(e) {
                    var t = this;
                    if (this._currentSession) {
                        if (this._currentSession.startSent) return;
                        this._currentSession.startSent = !0;
                    }
                    var n = function(n) {
                        var i = n[0], r = n[1];
                        t._eventManager.operativeEvent("start", i, r.sessionId, t.createVideoEventUrl(e, "video_start"), JSON.stringify(r)),
                            e.sendTrackingEvent(t._eventManager, "start", r.sessionId);
                    };
                    return this._eventMetadataCreator.createUniqueEventMetadata(e, this._currentSession, this._gamerServerId).then(n);
                }, e.prototype.sendProgress = function(e, t, n, i) {
                    t && e.sendProgressEvents(this._eventManager, t.getId(), n, i);
                }, e.prototype.sendFirstQuartile = function(e) {
                    var t = this;
                    if (this._currentSession) {
                        if (this._currentSession.firstQuartileSent) return;
                        this._currentSession.firstQuartileSent = !0;
                    }
                    var n = function(n) {
                        var i = n[0], r = n[1];
                        t._eventManager.operativeEvent("first_quartile", i, r.sessionId, t.createVideoEventUrl(e, "first_quartile"), JSON.stringify(r));
                    };
                    return this._eventMetadataCreator.createUniqueEventMetadata(e, this._currentSession, this._gamerServerId).then(n);
                }, e.prototype.sendMidpoint = function(e) {
                    var t = this;
                    if (this._currentSession) {
                        if (this._currentSession.midpointSent) return;
                        this._currentSession.midpointSent = !0;
                    }
                    var n = function(n) {
                        var i = n[0], r = n[1];
                        t._eventManager.operativeEvent("midpoint", i, r.sessionId, t.createVideoEventUrl(e, "midpoint"), JSON.stringify(r));
                    };
                    return this._eventMetadataCreator.createUniqueEventMetadata(e, this._currentSession, this._gamerServerId).then(n);
                }, e.prototype.sendThirdQuartile = function(e) {
                    var t = this;
                    if (this._currentSession) {
                        if (this._currentSession.thirdQuartileSent) return;
                        this._currentSession.thirdQuartileSent = !0;
                    }
                    var n = function(n) {
                        var i = n[0], r = n[1];
                        t._eventManager.operativeEvent("third_quartile", i, r.sessionId, t.createVideoEventUrl(e, "third_quartile"), JSON.stringify(r));
                    };
                    return this._eventMetadataCreator.createUniqueEventMetadata(e, this._currentSession, this._gamerServerId).then(n);
                }, e.prototype.sendSkip = function(e, t) {
                    var n = this;
                    if (this._currentSession) {
                        if (this._currentSession.skipSent) return;
                        this._currentSession.skipSent = !0;
                    }
                    var i = function(i) {
                        var r = i[0], o = i[1];
                        t && (o.skippedAt = t), n._eventManager.operativeEvent("skip", r, n._currentSession.getId(), n.createVideoEventUrl(e, "video_skip"), JSON.stringify(o));
                    };
                    this._eventMetadataCreator.createUniqueEventMetadata(e, this._currentSession, this._gamerServerId).then(i);
                }, e.prototype.sendView = function(e) {
                    var t = this;
                    if (this._currentSession) {
                        if (this._currentSession.viewSent) return;
                        this._currentSession.viewSent = !0;
                    }
                    var n = function(n) {
                        var i = n[0], r = n[1];
                        t._eventManager.operativeEvent("view", i, r.sessionId, t.createVideoEventUrl(e, "video_end"), JSON.stringify(r)),
                            e.sendTrackingEvent(t._eventManager, "complete", r.sessionId);
                    };
                    return this._eventMetadataCreator.createUniqueEventMetadata(e, this._currentSession, this._gamerServerId).then(n);
                }, e.prototype.sendClick = function(e) {
                    var t = this, n = e.getCampaign(), i = function(n) {
                        var i = n[0], r = n[1];
                        t._eventManager.operativeEvent("click", i, t._currentSession.getId(), t.createClickEventUrl(e), JSON.stringify(r));
                    };
                    return this._eventMetadataCreator.createUniqueEventMetadata(e, this._currentSession, this._gamerServerId).then(i),
                        n.getClickAttributionUrl() ? this._eventManager.clickAttributionEvent(this._currentSession.getId(), n.getClickAttributionUrl(), n.getClickAttributionUrlFollowsRedirects()) : Promise.reject("Missing click attribution url");
                }, e.prototype.sendMute = function(e, t, n) {
                    n ? e.sendTrackingEvent(this._eventManager, "mute", t.getId()) : e.sendTrackingEvent(this._eventManager, "unmute", t.getId());
                }, e.prototype.sendVideoClickTracking = function(e, t) {
                    e.sendVideoClickTrackingEvent(this._eventManager, t.getId());
                }, e.prototype.setGamerServerId = function(e) {
                    this._gamerServerId = e;
                }, e.prototype.createShowEventUrl = function(t) {
                    var n = t.getCampaign();
                    return [ e.VideoEventBaseUrl, n.getGamerId(), "show", n.getId(), this._clientInfo.getGameId() ].join("/");
                }, e.prototype.createVideoEventUrl = function(t, n) {
                    var i = t.getCampaign();
                    return [ e.VideoEventBaseUrl, i.getGamerId(), "video", n, i.getId(), this._clientInfo.getGameId() ].join("/");
                }, e.prototype.createClickEventUrl = function(t) {
                    var i = t.getCampaign(), r = [ e.ClickEventBaseUrl, i.getId(), "click", i.getGamerId() ].join("/");
                    return n.Url.addParameters(r, {
                        gameId: this._clientInfo.getGameId(),
                        redirect: !1
                    });
                }, e.VideoEventBaseUrl = "https://adserver.unityads.unity3d.com/mobile/gamers",
                    e.ClickEventBaseUrl = "https://adserver.unityads.unity3d.com/mobile/campaigns",
                    e;
            }();
            return e.SessionManager = o, e;
        }(ee, Z, F, j), te = function(e) {
            !function(e) {
                e[e.NOT_INITIALIZED = 0] = "NOT_INITIALIZED", e[e.INITIALIZE_FAILED = 1] = "INITIALIZE_FAILED",
                    e[e.INVALID_ARGUMENT = 2] = "INVALID_ARGUMENT", e[e.VIDEO_PLAYER_ERROR = 3] = "VIDEO_PLAYER_ERROR",
                    e[e.INIT_SANITY_CHECK_FAIL = 4] = "INIT_SANITY_CHECK_FAIL", e[e.AD_BLOCKER_DETECTED = 5] = "AD_BLOCKER_DETECTED",
                    e[e.FILE_IO_ERROR = 6] = "FILE_IO_ERROR", e[e.DEVICE_ID_ERROR = 7] = "DEVICE_ID_ERROR",
                    e[e.SHOW_ERROR = 8] = "SHOW_ERROR", e[e.INTERNAL_ERROR = 9] = "INTERNAL_ERROR";
            }(e.UnityAdsError || (e.UnityAdsError = {}));
            e.UnityAdsError;
            return e;
        }(te);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        ne = function(e, t, n, i) {
            var r = function(e) {
                function t(t, n) {
                    e.call(this), this._platform = t;
                    var r = n.shift();
                    if ("string" != typeof r || !/^\d+$/.test(r)) throw new Error(i.UnityAdsError[i.UnityAdsError.INVALID_ARGUMENT]);
                    this._gameId = r, this._testMode = n.shift(), this._applicationName = n.shift(),
                        this._applicationVersion = n.shift(), this._sdkVersion = n.shift(), this._sdkVersionName = n.shift(),
                        this._debuggable = n.shift(), this._configUrl = n.shift(), this._webviewUrl = n.shift(),
                        this._webviewHash = n.shift(), this._webviewVersion = n.shift();
                }
                return Be(t, e), t.prototype.getGameId = function() {
                    return this._gameId;
                }, t.prototype.getTestMode = function() {
                    return this._testMode;
                }, t.prototype.getApplicationVersion = function() {
                    return this._applicationVersion;
                }, t.prototype.getApplicationName = function() {
                    return this._applicationName;
                }, t.prototype.getSdkVersion = function() {
                    return this._sdkVersion;
                }, t.prototype.getSdkVersionName = function() {
                    return this._sdkVersionName;
                }, t.prototype.getPlatform = function() {
                    return this._platform;
                }, t.prototype.isDebuggable = function() {
                    return this._debuggable;
                }, t.prototype.getConfigUrl = function() {
                    return this._configUrl;
                }, t.prototype.getWebviewUrl = function() {
                    return this._webviewUrl;
                }, t.prototype.getWebviewHash = function() {
                    return this._webviewHash;
                }, t.prototype.getWebviewVersion = function() {
                    return this._webviewVersion;
                }, t.prototype.getDTO = function() {
                    return {
                        gameId: this._gameId,
                        testMode: this._testMode,
                        bundleId: this._applicationName,
                        bundleVersion: this._applicationVersion,
                        sdkVersion: this._sdkVersion,
                        sdkVersionName: this._sdkVersionName,
                        platform: n.Platform[this._platform].toLowerCase(),
                        encrypted: !this._debuggable,
                        configUrl: this._configUrl,
                        webviewUrl: this._webviewUrl,
                        webviewHash: this._webviewHash,
                        webviewVersion: this._webviewVersion
                    };
                }, t;
            }(t.Model);
            return e.ClientInfo = r, e;
        }(ne, V, a, te), ie = function(e) {
            var t = function() {
                function e() {}
                return e.trigger = function(t, n, i, r) {
                    var o = [];
                    return o.push({
                        type: "ads.sdk2.diagnostics",
                        msg: n
                    }), e.createCommonObject(i, r).then(function(n) {
                        o.unshift(n);
                        var i = o.map(function(e) {
                            return JSON.stringify(e);
                        }).join("\n");
                        return t.diagnosticEvent(e.DiagnosticsBaseUrl, i);
                    });
                }, e.setTestBaseUrl = function(t) {
                    e.DiagnosticsBaseUrl = t + "/v1/events";
                }, e.createCommonObject = function(e, t) {
                    var n = {
                        common: {
                            client: e ? e.getDTO() : null,
                            device: null
                        }
                    };
                    return t ? t.getDTO().then(function(e) {
                        return n.device = e, n;
                    })["catch"](function(e) {
                        return n;
                    }) : Promise.resolve(n);
                }, e.DiagnosticsBaseUrl = "https://httpkafka.unityads.unity3d.com/v1/events", e;
            }();
            return e.Diagnostics = t, e;
        }(ie), re = function(e, t) {
            var n = function() {
                function e(e, t) {
                    this._nativeBridge = e, this._request = t;
                }
                return e.getSessionKey = function(e) {
                    return "session." + e;
                }, e.getSessionTimestampKey = function(t) {
                    return e.getSessionKey(t) + ".ts";
                }, e.getEventKey = function(t, n) {
                    return e.getSessionKey(t) + ".operative." + n;
                }, e.getUrlKey = function(t, n) {
                    return e.getEventKey(t, n) + ".url";
                }, e.getDataKey = function(t, n) {
                    return e.getEventKey(t, n) + ".data";
                }, e.prototype.operativeEvent = function(n, i, r, o, a) {
                    var s = this;
                    return this._nativeBridge.Sdk.logInfo("Unity Ads event: sending " + n + " event to " + o),
                        this._nativeBridge.Storage.set(t.StorageType.PRIVATE, e.getUrlKey(r, i), o), this._nativeBridge.Storage.set(t.StorageType.PRIVATE, e.getDataKey(r, i), a),
                        this._nativeBridge.Storage.write(t.StorageType.PRIVATE), this._request.post(o, a, [], {
                        retries: 5,
                        retryDelay: 5e3,
                        followRedirects: !1,
                        retryWithConnectionEvents: !1
                    }).then(function() {
                        return Promise.all([ s._nativeBridge.Storage["delete"](t.StorageType.PRIVATE, e.getEventKey(r, i)), s._nativeBridge.Storage.write(t.StorageType.PRIVATE) ]);
                    });
                }, e.prototype.clickAttributionEvent = function(e, t, n) {
                    return n ? this._request.get(t, [], {
                        retries: 0,
                        retryDelay: 0,
                        followRedirects: !0,
                        retryWithConnectionEvents: !1
                    }) : this._request.get(t);
                }, e.prototype.thirdPartyEvent = function(e, t, n) {
                    return this._nativeBridge.Sdk.logInfo("Unity Ads third party event: sending " + e + " event to " + n + " (session " + t + ")"),
                        this._request.get(n, [], {
                            retries: 0,
                            retryDelay: 0,
                            followRedirects: !0,
                            retryWithConnectionEvents: !1
                        });
                }, e.prototype.diagnosticEvent = function(e, t) {
                    return this._request.post(e, t);
                }, e.prototype.startNewSession = function(n) {
                    return Promise.all([ this._nativeBridge.Storage.set(t.StorageType.PRIVATE, e.getSessionTimestampKey(n), Date.now()), this._nativeBridge.Storage.write(t.StorageType.PRIVATE) ]);
                }, e.prototype.sendUnsentSessions = function() {
                    var e = this;
                    return this.getUnsentSessions().then(function(t) {
                        var n = t.map(function(t) {
                            return e.isSessionOutdated(t).then(function(n) {
                                return n ? e.deleteSession(t) : e.getUnsentOperativeEvents(t).then(function(n) {
                                    return Promise.all(n.map(function(n) {
                                        return e.resendEvent(t, n);
                                    }));
                                });
                            });
                        });
                        return Promise.all(n);
                    });
                }, e.prototype.getUniqueEventId = function() {
                    return this._nativeBridge.DeviceInfo.getUniqueEventId();
                }, e.prototype.getUnsentSessions = function() {
                    return this._nativeBridge.Storage.getKeys(t.StorageType.PRIVATE, "session", !1);
                }, e.prototype.isSessionOutdated = function(n) {
                    return this._nativeBridge.Storage.get(t.StorageType.PRIVATE, e.getSessionTimestampKey(n)).then(function(e) {
                        var t = new Date().getTime() - 6048e5, n = new Date().getTime();
                        return !(e > t && n > e);
                    })["catch"](function() {
                        return !0;
                    });
                }, e.prototype.getUnsentOperativeEvents = function(e) {
                    return this._nativeBridge.Storage.getKeys(t.StorageType.PRIVATE, "session." + e + ".operative", !1);
                }, e.prototype.resendEvent = function(n, i) {
                    var r = this;
                    return this.getStoredOperativeEvent(n, i).then(function(e) {
                        var t = e[0], o = e[1];
                        return r._nativeBridge.Sdk.logInfo("Unity Ads operative event: resending operative event to " + t + " (session " + n + ", event " + i + ")"),
                            r._request.post(t, o);
                    }).then(function() {
                        return Promise.all([ r._nativeBridge.Storage["delete"](t.StorageType.PRIVATE, e.getEventKey(n, i)), r._nativeBridge.Storage.write(t.StorageType.PRIVATE) ]);
                    });
                }, e.prototype.getStoredOperativeEvent = function(n, i) {
                    return Promise.all([ this._nativeBridge.Storage.get(t.StorageType.PRIVATE, e.getUrlKey(n, i)), this._nativeBridge.Storage.get(t.StorageType.PRIVATE, e.getDataKey(n, i)) ]);
                }, e.prototype.deleteSession = function(n) {
                    return Promise.all([ this._nativeBridge.Storage["delete"](t.StorageType.PRIVATE, e.getSessionKey(n)), this._nativeBridge.Storage.write(t.StorageType.PRIVATE) ]);
                }, e;
            }();
            return e.EventManager = n, e;
        }(re, b), oe = function(e) {
            var t = function() {
                function e(t) {
                    this._nativeBridge = t, this._nativeBridge.Resolve.onComplete.subscribe(function(t, n, i) {
                        return e.onResolveComplete(t, n, i);
                    }), this._nativeBridge.Resolve.onFailed.subscribe(function(t, n, i, r) {
                        return e.onResolveFailed(t, n, i, r);
                    });
                }
                return e.onResolveComplete = function(t, n, i) {
                    var r = e._callbacks[t];
                    r && (r[0]([ n, i ]), delete e._callbacks[t]);
                }, e.onResolveFailed = function(t, n, i, r) {
                    var o = e._callbacks[t];
                    o && (o[1]([ i, r ]), delete e._callbacks[t]);
                }, e.prototype.resolve = function(t) {
                    var n = e._callbackId++, i = this.registerCallback(n);
                    return this._nativeBridge.Resolve.resolve(n.toString(), t), i;
                }, e.prototype.registerCallback = function(t) {
                    return new Promise(function(n, i) {
                        var r = {};
                        r[0] = n, r[1] = i, e._callbacks[t] = r;
                    });
                }, e._callbackId = 1, e._callbacks = {}, e;
            }();
            return e.Resolve = t, e;
        }(oe), ae = function(e, t) {
            var n = function() {
                function e(e) {
                    var n = this;
                    this.onNetworkConnected = new t.Observable0(), this.onScreenOn = new t.Observable0(),
                        this.onScreenOff = new t.Observable0(), this.onAppForeground = new t.Observable0(),
                        this._screenListener = "screenListener", this.ACTION_SCREEN_ON = "android.intent.action.SCREEN_ON",
                        this.ACTION_SCREEN_OFF = "android.intent.action.SCREEN_OFF", this._nativeBridge = e,
                        this._lastConnected = Date.now(), this._nativeBridge.Connectivity.onConnected.subscribe(function(e, t) {
                        return n.onConnected(e, t);
                    }), this._nativeBridge.Broadcast.onBroadcastAction.subscribe(function(e, t, i, r) {
                        return n.onBroadcastAction(e, t, i, r);
                    }), this._nativeBridge.Notification.onNotification.subscribe(function(e, t) {
                        return n.onNotification(e, t);
                    });
                }
                return e.prototype.setListenConnectivity = function(e) {
                    return this._nativeBridge.Connectivity.setListeningStatus(e);
                }, e.prototype.setListenScreen = function(e) {
                    return e ? this._nativeBridge.Broadcast.addBroadcastListener(this._screenListener, [ this.ACTION_SCREEN_ON, this.ACTION_SCREEN_OFF ]) : this._nativeBridge.Broadcast.removeBroadcastListener(this._screenListener);
                }, e.prototype.setListenAppForeground = function(t) {
                    return t ? this._nativeBridge.Notification.addNotificationObserver(e._appForegroundNotification, []) : this._nativeBridge.Notification.removeNotificationObserver(e._appForegroundNotification);
                }, e.prototype.onConnected = function(e, t) {
                    var n = 9e5;
                    this._lastConnected + n < Date.now() && (this._lastConnected = Date.now(), this.onNetworkConnected.trigger());
                }, e.prototype.onBroadcastAction = function(e, t, n, i) {
                    if (e === this._screenListener) switch (t) {
                        case this.ACTION_SCREEN_ON:
                            this.onScreenOn.trigger();
                            break;

                        case this.ACTION_SCREEN_OFF:
                            this.onScreenOff.trigger();
                    }
                }, e.prototype.onNotification = function(t, n) {
                    t === e._appForegroundNotification && this.onAppForeground.trigger();
                }, e._appForegroundNotification = "UIApplicationDidBecomeActiveNotification", e;
            }();
            return e.WakeUpManager = n, e;
        }(ae, u), se = function(e) {
            !function(e) {
                e[e.SCREEN_ORIENTATION_UNSPECIFIED = -1] = "SCREEN_ORIENTATION_UNSPECIFIED", e[e.SCREEN_ORIENTATION_LANDSCAPE = 0] = "SCREEN_ORIENTATION_LANDSCAPE",
                    e[e.SCREEN_ORIENTATION_PORTRAIT = 1] = "SCREEN_ORIENTATION_PORTRAIT", e[e.SCREEN_ORIENTATION_USER = 2] = "SCREEN_ORIENTATION_USER",
                    e[e.SCREEN_ORIENTATION_BEHIND = 3] = "SCREEN_ORIENTATION_BEHIND", e[e.SCREEN_ORIENTATION_SENSOR = 4] = "SCREEN_ORIENTATION_SENSOR",
                    e[e.SCREEN_ORIENTATION_NOSENSOR = 5] = "SCREEN_ORIENTATION_NOSENSOR", e[e.SCREEN_ORIENTATION_SENSOR_LANDSCAPE = 6] = "SCREEN_ORIENTATION_SENSOR_LANDSCAPE",
                    e[e.SCREEN_ORIENTATION_SENSOR_PORTRAIT = 7] = "SCREEN_ORIENTATION_SENSOR_PORTRAIT",
                    e[e.SCREEN_ORIENTATION_REVERSE_LANDSCAPE = 8] = "SCREEN_ORIENTATION_REVERSE_LANDSCAPE",
                    e[e.SCREEN_ORIENTATION_REVERSE_PORTRAIT = 9] = "SCREEN_ORIENTATION_REVERSE_PORTRAIT",
                    e[e.SCREEN_ORIENTATION_FULL_SENSOR = 10] = "SCREEN_ORIENTATION_FULL_SENSOR", e[e.SCREEN_ORIENTATION_USER_LANDSCAPE = 11] = "SCREEN_ORIENTATION_USER_LANDSCAPE",
                    e[e.SCREEN_ORIENTATION_USER_PORTRAIT = 12] = "SCREEN_ORIENTATION_USER_PORTRAIT",
                    e[e.SCREEN_ORIENTATION_FULL_USER = 13] = "SCREEN_ORIENTATION_FULL_USER", e[e.SCREEN_ORIENTATION_LOCKED = 14] = "SCREEN_ORIENTATION_LOCKED";
            }(e.ScreenOrientation || (e.ScreenOrientation = {}));
            e.ScreenOrientation;
            return e;
        }(se), ce = function(e, t, n) {
            var i = function() {
                function e(e, t, i) {
                    this.onStart = new n.Observable0(), this.onNewAdRequestAllowed = new n.Observable0(),
                        this.onClose = new n.Observable0(), this._showing = !1, this._nativeBridge = e,
                        this._placement = t, this._campaign = i;
                }
                return e.prototype.getPlacement = function() {
                    return this._placement;
                }, e.prototype.getCampaign = function() {
                    return this._campaign;
                }, e.prototype.setFinishState = function(e) {
                    this._finishState !== t.FinishState.COMPLETED && (this._finishState = e);
                }, e.prototype.getFinishState = function() {
                    return this._finishState;
                }, e.prototype.isShowing = function() {
                    return this._showing;
                }, e.prototype.sendImpressionEvent = function(e, t) {}, e.prototype.sendTrackingEvent = function(e, t, n) {},
                    e.prototype.sendProgressEvents = function(e, t, n, i) {}, e;
            }();
            return e.AbstractAdUnit = i, e;
        }(ce, E, u), ue = function(e) {
            var t = function() {
                function e(e) {
                    this._value = e;
                }
                return e.prototype.toJSON = function() {
                    return this._value.toFixed(20) + "=double";
                }, e;
            }();
            return e.Double = t, e;
        }(ue), le = function(e) {
            !function(e) {
                e[e.INTERFACE_ORIENTATION_MASK_PORTRAIT = 2] = "INTERFACE_ORIENTATION_MASK_PORTRAIT",
                    e[e.INTERFACE_ORIENTATION_MASK_LANDSCAPE_LEFT = 16] = "INTERFACE_ORIENTATION_MASK_LANDSCAPE_LEFT",
                    e[e.INTERFACE_ORIENTATION_MASK_LANDSCAPE_RIGHT = 8] = "INTERFACE_ORIENTATION_MASK_LANDSCAPE_RIGHT",
                    e[e.INTERFACE_ORIENTATION_MASK_PORTRAIT_UPSIDE_DOWN = 4] = "INTERFACE_ORIENTATION_MASK_PORTRAIT_UPSIDE_DOWN",
                    e[e.INTERFACE_ORIENTATION_MASK_LANDSCAPE = 24] = "INTERFACE_ORIENTATION_MASK_LANDSCAPE",
                    e[e.INTERFACE_ORIENTATION_MASK_ALL = 30] = "INTERFACE_ORIENTATION_MASK_ALL", e[e.INTERFACE_ORIENTATION_MASK_ALL_BUT_UPSIDE_DOWN = 26] = "INTERFACE_ORIENTATION_MASK_ALL_BUT_UPSIDE_DOWN";
            }(e.UIInterfaceOrientationMask || (e.UIInterfaceOrientationMask = {}));
            e.UIInterfaceOrientationMask;
            return e;
        }(le);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        he = function(e, t, n, i, r, o, a) {
            var s = function(e) {
                function i(t, n, r, a, s) {
                    var c = this;
                    e.call(this, t, n, r), t.getPlatform() === o.Platform.IOS ? this._onViewControllerDidAppearObserver = this._nativeBridge.IosAdUnit.onViewControllerDidAppear.subscribe(function() {
                        return c.onViewDidAppear();
                    }) : (this._activityId = i._activityIdCounter++, this._onResumeObserver = this._nativeBridge.AndroidAdUnit.onResume.subscribe(function(e) {
                        return c.onResume(e);
                    }), this._onPauseObserver = this._nativeBridge.AndroidAdUnit.onPause.subscribe(function(e, t) {
                        return c.onPause(e, t);
                    }), this._onDestroyObserver = this._nativeBridge.AndroidAdUnit.onDestroy.subscribe(function(e, t) {
                        return c.onDestroy(e, t);
                    })), this._videoPosition = 0, this._videoQuartile = 0, this._videoActive = !0, this._watches = 0,
                        this._overlay = a, this._endScreen = s;
                }
                return Be(i, e), i.prototype.show = function() {
                    var e = this;
                    if (this._showing = !0, this.onStart.trigger(), this.setVideoActive(!0), this._nativeBridge.getPlatform() === o.Platform.IOS) {
                        var n = this._iosOptions.supportedOrientations;
                        return this._placement.useDeviceOrientationForVideo() || (this._iosOptions.supportedOrientations & a.UIInterfaceOrientationMask.INTERFACE_ORIENTATION_MASK_LANDSCAPE) !== a.UIInterfaceOrientationMask.INTERFACE_ORIENTATION_MASK_LANDSCAPE || (n = a.UIInterfaceOrientationMask.INTERFACE_ORIENTATION_MASK_LANDSCAPE),
                            this._onNotificationObserver = this._nativeBridge.Notification.onNotification.subscribe(function(t, n) {
                                return e.onNotification(t, n);
                            }), this._nativeBridge.Notification.addNotificationObserver(i._audioSessionInterrupt, [ "AVAudioSessionInterruptionTypeKey", "AVAudioSessionInterruptionOptionKey" ]),
                            this._nativeBridge.Notification.addNotificationObserver(i._audioSessionRouteChange, []),
                            this._nativeBridge.Sdk.logInfo("Opening game ad with orientation " + n), this._nativeBridge.IosAdUnit.open([ "videoplayer", "webview" ], n, !0, !0);
                    }
                    var r = this._androidOptions.requestedOrientation;
                    this._placement.useDeviceOrientationForVideo() || (r = t.ScreenOrientation.SCREEN_ORIENTATION_SENSOR_LANDSCAPE);
                    var s = [];
                    this._placement.disableBackButton() && (s = [ 4 ], this._onBackKeyObserver = this._nativeBridge.AndroidAdUnit.onKeyDown.subscribe(function(t, n, i, r) {
                        return e.onKeyEvent(t);
                    }));
                    var c = !0;
                    return this._nativeBridge.getApiLevel() < 17 && (c = !1), this._nativeBridge.Sdk.logInfo("Opening game ad with orientation " + r + ", hardware acceleration " + (c ? "enabled" : "disabled")),
                        this._nativeBridge.AndroidAdUnit.open(this._activityId, [ "videoplayer", "webview" ], r, s, 1, c);
                }, i.prototype.onKeyEvent = function(e) {
                    4 !== e || this.isVideoActive() || this.hide();
                }, i.prototype.hide = function() {
                    var e = this;
                    return this.isVideoActive() && this._nativeBridge.VideoPlayer.stop(), this.hideChildren(),
                        this.unsetReferences(), this._nativeBridge.Listener.sendFinishEvent(this.getPlacement().getId(), this.getFinishState()),
                        this._nativeBridge.getPlatform() === o.Platform.IOS ? (this._nativeBridge.IosAdUnit.onViewControllerDidAppear.unsubscribe(this._onViewControllerDidAppearObserver),
                            this._nativeBridge.Notification.onNotification.unsubscribe(this._onNotificationObserver),
                            this._nativeBridge.Notification.removeNotificationObserver(i._audioSessionInterrupt),
                            this._nativeBridge.Notification.removeNotificationObserver(i._audioSessionRouteChange),
                            this._nativeBridge.IosAdUnit.close().then(function() {
                                e._showing = !1, e.onClose.trigger();
                            })) : (this._nativeBridge.AndroidAdUnit.onResume.unsubscribe(this._onResumeObserver),
                            this._nativeBridge.AndroidAdUnit.onPause.unsubscribe(this._onPauseObserver), this._nativeBridge.AndroidAdUnit.onDestroy.unsubscribe(this._onDestroyObserver),
                            this._nativeBridge.AndroidAdUnit.onKeyDown.unsubscribe(this._onBackKeyObserver),
                            this._nativeBridge.AndroidAdUnit.close().then(function() {
                                e._showing = !1, e.onClose.trigger();
                            }));
                }, i.prototype.hideChildren = function() {
                    this.getOverlay().container().parentElement.removeChild(this.getOverlay().container()),
                        this.getEndScreen().container().parentElement.removeChild(this.getEndScreen().container());
                }, i.prototype.setNativeOptions = function(e) {
                    this._nativeBridge.getPlatform() === o.Platform.IOS ? this._iosOptions = e : this._androidOptions = e;
                }, i.prototype.isShowing = function() {
                    return this._showing;
                }, i.prototype.getWatches = function() {
                    return this._watches;
                }, i.prototype.getVideoDuration = function() {
                    return this._videoDuration;
                }, i.prototype.setVideoDuration = function(e) {
                    this._videoDuration = e;
                }, i.prototype.getVideoPosition = function() {
                    return this._videoPosition;
                }, i.prototype.setVideoPosition = function(e) {
                    this._videoPosition = e, this._videoDuration && (this._videoQuartile = Math.floor(4 * this._videoPosition / this._videoDuration));
                }, i.prototype.getVideoQuartile = function() {
                    return this._videoQuartile;
                }, i.prototype.isVideoActive = function() {
                    return this._videoActive;
                }, i.prototype.setVideoActive = function(e) {
                    this._videoActive = e;
                }, i.prototype.setWatches = function(e) {
                    this._watches = e;
                }, i.prototype.getOverlay = function() {
                    return this._overlay;
                }, i.prototype.getEndScreen = function() {
                    return this._endScreen;
                }, i.prototype.newWatch = function() {
                    this._watches += 1;
                }, i.prototype.unsetReferences = function() {
                    this._endScreen = null, this._overlay = null;
                }, i.prototype.onResume = function(e) {
                    this._showing && this.isVideoActive() && e === this._activityId && this._nativeBridge.VideoPlayer.prepare(this.getCampaign().getVideoUrl(), new r.Double(this.getPlacement().muteVideo() ? 0 : 1));
                }, i.prototype.onPause = function(e, t) {
                    e && this._showing && t === this._activityId && (this.setFinishState(n.FinishState.SKIPPED),
                        this.hide());
                }, i.prototype.onDestroy = function(e, t) {
                    this._showing && e && t === this._activityId && (this.setFinishState(n.FinishState.SKIPPED),
                        this.hide());
                }, i.prototype.onViewDidAppear = function() {
                    this._showing && this.isVideoActive() && this._nativeBridge.VideoPlayer.prepare(this.getCampaign().getVideoUrl(), new r.Double(this.getPlacement().muteVideo() ? 0 : 1));
                }, i.prototype.onNotification = function(e, t) {
                    switch (e) {
                        case i._appDidBecomeActive:
                            this._showing && this.isVideoActive() && (this._nativeBridge.Sdk.logInfo("Resuming Unity Ads video playback, app is active"),
                                this._nativeBridge.VideoPlayer.play());
                            break;

                        case i._audioSessionInterrupt:
                            var n = t;
                            0 === n.AVAudioSessionInterruptionTypeKey && 1 === n.AVAudioSessionInterruptionOptionKey && this._showing && this.isVideoActive() && (this._nativeBridge.Sdk.logInfo("Resuming Unity Ads video playback after audio interrupt"),
                                this._nativeBridge.VideoPlayer.play());
                            break;

                        case i._audioSessionRouteChange:
                            this._showing && this.isVideoActive() && (this._nativeBridge.Sdk.logInfo("Continuing Unity Ads video playback after audio session route change"),
                                this._nativeBridge.VideoPlayer.play());
                    }
                }, i._appDidBecomeActive = "UIApplicationDidBecomeActiveNotification", i._audioSessionInterrupt = "AVAudioSessionInterruptionNotification",
                    i._audioSessionRouteChange = "AVAudioSessionRouteChangeNotification", i._activityIdCounter = 1,
                    i;
            }(i.AbstractAdUnit);
            return e.VideoAdUnit = s, e;
        }(he, se, E, ce, ue, a, le);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        pe = function(e, t) {
            var n = function(e) {
                function t(t, n, i, r) {
                    e.call(this, t, n, i, r, null);
                }
                return Be(t, e), t.prototype.hideChildren = function() {
                    var e = this.getOverlay();
                    e.container().parentElement.removeChild(e.container());
                }, t.prototype.getVast = function() {
                    return this.getCampaign().getVast();
                }, t.prototype.getDuration = function() {
                    return this.getVast().getDuration();
                }, t.prototype.sendImpressionEvent = function(e, t) {
                    var n = this.getVast().getImpressionUrls();
                    if (n) for (var i = 0, r = n; i < r.length; i++) {
                        var o = r[i];
                        this.sendThirdPartyEvent(e, "vast impression", t, o);
                    }
                }, t.prototype.sendTrackingEvent = function(e, t, n) {
                    var i = this.getVast().getTrackingEventUrls(t);
                    if (i) for (var r = 0, o = i; r < o.length; r++) {
                        var a = o[r];
                        this.sendThirdPartyEvent(e, "vast " + t, n, a);
                    }
                }, t.prototype.sendProgressEvents = function(e, t, n, i) {
                    this.sendQuartileEvent(e, t, n, i, 1), this.sendQuartileEvent(e, t, n, i, 2), this.sendQuartileEvent(e, t, n, i, 3);
                }, t.prototype.getVideoClickThroughURL = function() {
                    var e = this.getVast().getVideoClickThroughURL(), t = new RegExp("^(https?)://.+$");
                    return t.test(e) ? e : null;
                }, t.prototype.sendVideoClickTrackingEvent = function(e, t) {
                    var n = this.getVast().getVideoClickTrackingURLs();
                    if (n) for (var i = 0; i < n.length; i++) this.sendThirdPartyEvent(e, "vast video click", t, n[i]);
                }, t.prototype.sendQuartileEvent = function(e, t, n, i, r) {
                    var o;
                    if (1 === r && (o = "firstQuartile"), 2 === r && (o = "midpoint"), 3 === r && (o = "thirdQuartile"),
                            this.getTrackingEventUrls(o)) {
                        var a = this.getDuration();
                        a > 0 && n / 1e3 > .25 * a * r && .25 * a * r > i / 1e3 && this.sendTrackingEvent(e, o, t);
                    }
                }, t.prototype.sendThirdPartyEvent = function(e, t, n, i) {
                    i = i.replace(/%ZONE%/, this.getPlacement().getId()), e.thirdPartyEvent(t, n, i);
                }, t.prototype.getTrackingEventUrls = function(e) {
                    return this.getVast().getTrackingEventUrls(e);
                }, t;
            }(t.VideoAdUnit);
            return e.VastAdUnit = n, e;
        }(pe, he), de = function(e, t, n, i, r, o) {
            var a = function() {
                function e() {}
                return e.onSkip = function(e, t, a) {
                    e.VideoPlayer.pause(), a.setVideoActive(!1), a.setFinishState(n.FinishState.SKIPPED),
                        t.sendSkip(a, a.getVideoPosition()), e.getPlatform() === i.Platform.IOS ? e.IosAdUnit.setViews([ "webview" ]) : e.AndroidAdUnit.setViews([ "webview" ]),
                        e.getPlatform() === i.Platform.ANDROID ? e.AndroidAdUnit.setOrientation(o.ScreenOrientation.SCREEN_ORIENTATION_FULL_SENSOR) : e.getPlatform() === i.Platform.IOS && e.IosAdUnit.setSupportedOrientations(r.UIInterfaceOrientationMask.INTERFACE_ORIENTATION_MASK_ALL),
                        a.getOverlay().hide(), this.afterSkip(a);
                }, e.afterSkip = function(e) {
                    e.getEndScreen().show(), e.onNewAdRequestAllowed.trigger();
                }, e.onMute = function(e, n, i, r) {
                    e.VideoPlayer.setVolume(new t.Double(r ? 0 : 1)), n.sendMute(i, n.getSession(), r);
                }, e.onCallButton = function(e, t, n) {
                    var r = n.getVideoClickThroughURL();
                    t.sendVideoClickTracking(n, t.getSession()), e.getPlatform() === i.Platform.IOS ? e.UrlScheme.open(r) : e.Intent.launch({
                        action: "android.intent.action.VIEW",
                        uri: r
                    });
                }, e;
            }();
            return e.OverlayEventHandlers = a, e;
        }(de, ue, E, a, le, se);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        fe = function(e, t) {
            var n = function(e) {
                function t() {
                    e.apply(this, arguments);
                }
                return Be(t, e), t.afterSkip = function(e) {
                    e.hide();
                }, t;
            }(t.OverlayEventHandlers);
            return e.VastOverlayEventHandlers = n, e;
        }(fe, de), ve = function(e, t, n) {
            var i = function() {
                function e() {}
                return e.onDownload = function(i, r, o) {
                    var a = i.getPlatform(), s = o.getCampaign();
                    s.getClickAttributionUrlFollowsRedirects() ? r.sendClick(o).then(function(e) {
                        var r = t.Request.getHeader(e.headers, "location");
                        if (!r) throw new Error("No location found");
                        a === n.Platform.IOS ? i.UrlScheme.open(r) : i.Intent.launch({
                            action: "android.intent.action.VIEW",
                            uri: r
                        });
                    }) : (r.sendClick(o), a === n.Platform.IOS ? i.AppSheet.canOpen().then(function(t) {
                        t && !s.getBypassAppSheet() ? e.openAppSheet(i, {
                            id: parseInt(s.getAppStoreId(), 10)
                        }) : i.UrlScheme.open(e.getAppStoreUrl(a, s));
                    }) : i.Intent.launch({
                        action: "android.intent.action.VIEW",
                        uri: e.getAppStoreUrl(a, s)
                    }));
                }, e.onPrivacy = function(e, t) {
                    e.getPlatform() === n.Platform.IOS ? e.UrlScheme.open(t) : e.getPlatform() === n.Platform.ANDROID && e.Intent.launch({
                        action: "android.intent.action.VIEW",
                        uri: t
                    });
                }, e.onClose = function(e, t) {
                    e.getPlatform() !== n.Platform.IOS || t.getCampaign().getBypassAppSheet() || e.AppSheet.destroy({
                        id: parseInt(t.getCampaign().getAppStoreId(), 10)
                    }), t.hide();
                }, e.getAppStoreUrl = function(e, t) {
                    return e === n.Platform.IOS ? "https://itunes.apple.com/" + t.getAppStoreCountry() + "/app/id" + t.getAppStoreId() : "market://details?id=" + t.getAppStoreId();
                }, e.openAppSheet = function(e, t) {
                    e.AppSheet.present(t).then(function() {
                        return e.AppSheet.destroy(t);
                    })["catch"](function(t) {
                        var n = t[0], i = t[1];
                        if ("APPSHEET_NOT_FOUND" === n) return e.AppSheet.prepare(i).then(function() {
                            var t = e.AppSheet.onPrepared.subscribe(function() {
                                e.AppSheet.present(i).then(function() {
                                    e.AppSheet.destroy(i);
                                }), e.AppSheet.onPrepared.unsubscribe(t);
                            });
                        });
                        throw [ n, i ];
                    });
                }, e;
            }();
            return e.EndScreenEventHandlers = i, e;
        }(ve, $, a), ge = function(e, t, n, i, r, o, a, s) {
            var c = function() {
                function e() {}
                return e.isVast = function(e) {
                    return void 0 !== e.getVast;
                }, e.onVideoPrepared = function(e, n, r) {
                    var o = this, a = n.getOverlay();
                    n.setVideoDuration(r), a.setVideoDuration(r), n.getVideoPosition() > 0 && a.setVideoProgress(n.getVideoPosition()),
                    n.getPlacement().allowSkip() && a.setSkipVisible(!0), a.setMuteEnabled(!0), a.setVideoDurationEnabled(!0),
                    this.isVast(n) && n.getVideoClickThroughURL() && a.setCallButtonVisible(!0), e.Storage.get(i.StorageType.PUBLIC, "test.debugOverlayEnabled.value").then(function(e) {
                        if (e === !0) {
                            a.setDebugMessageVisible(!0);
                            var t = "";
                            t = o.isVast(n) ? "Programmatic Ad" : "Performance Ad", a.setDebugMessage(t);
                        }
                    }), e.VideoPlayer.setVolume(new t.Double(a.isMuted() ? 0 : 1)).then(function() {
                        n.getVideoPosition() > 0 ? e.VideoPlayer.seekTo(n.getVideoPosition()).then(function() {
                            e.VideoPlayer.play();
                        }) : e.VideoPlayer.play();
                    });
                }, e.onVideoProgress = function(e, t, n, i) {
                    if (t.sendProgress(n, t.getSession(), i, n.getVideoPosition()), i > 0) {
                        var r = n.getVideoPosition();
                        r > 0 && 100 > i - r ? n.getOverlay().setSpinnerEnabled(!0) : n.getOverlay().setSpinnerEnabled(!1);
                        var o = n.getVideoQuartile();
                        n.setVideoPosition(i), 0 === o && 1 === n.getVideoQuartile() ? t.sendFirstQuartile(n) : 1 === o && 2 === n.getVideoQuartile() ? t.sendMidpoint(n) : 2 === o && 3 === n.getVideoQuartile() && t.sendThirdQuartile(n);
                    }
                    n.getOverlay().setVideoProgress(i);
                }, e.onVideoStart = function(e, t, n) {
                    t.sendImpressionEvent(n), t.sendStart(n), n.getOverlay().setSpinnerEnabled(!1),
                        e.VideoPlayer.setProgressEventInterval(250), 0 === n.getWatches() && e.Listener.sendStartEvent(n.getPlacement().getId()),
                        n.newWatch();
                }, e.onVideoCompleted = function(e, t, o) {
                    o.setVideoActive(!1), o.setFinishState(n.FinishState.COMPLETED), t.sendView(o),
                        e.getPlatform() === r.Platform.IOS ? e.IosAdUnit.setViews([ "webview" ]) : e.AndroidAdUnit.setViews([ "webview" ]),
                        this.afterVideoCompleted(e, o), e.Storage.get(i.StorageType.PUBLIC, "integration_test.value").then(function(t) {
                        t && (e.getPlatform() === r.Platform.ANDROID ? e.rawInvoke("com.unity3d.ads.test.integration.IntegrationTest", "onVideoCompleted", [ o.getPlacement().getId() ]) : e.rawInvoke("UADSIntegrationTest", "onVideoCompleted", [ o.getPlacement().getId() ]));
                    });
                }, e.onVideoError = function(e, t, i, a) {
                    t.setVideoActive(!1), t.setFinishState(n.FinishState.ERROR), e.Listener.sendErrorEvent(o.UnityAdsError[o.UnityAdsError.VIDEO_PLAYER_ERROR], "Video player error"),
                        e.getPlatform() === r.Platform.IOS ? (e.Sdk.logError("Unity Ads video player error"),
                            e.IosAdUnit.setViews([ "webview" ])) : (e.Sdk.logError("Unity Ads video player error " + i + " " + a),
                            e.AndroidAdUnit.setViews([ "webview" ])), t.getOverlay().hide();
                    var s = t.getEndScreen();
                    s && t.getEndScreen().show(), t.onNewAdRequestAllowed.trigger();
                }, e.afterVideoCompleted = function(e, t) {
                    t.getOverlay().hide(), t.getEndScreen().show(), t.onNewAdRequestAllowed.trigger(),
                        e.getPlatform() === r.Platform.ANDROID ? e.AndroidAdUnit.setOrientation(a.ScreenOrientation.SCREEN_ORIENTATION_FULL_SENSOR) : e.getPlatform() === r.Platform.IOS && e.IosAdUnit.setSupportedOrientations(s.UIInterfaceOrientationMask.INTERFACE_ORIENTATION_MASK_ALL);
                }, e;
            }();
            return e.VideoEventHandlers = c, e;
        }(ge, ue, E, b, a, te, se, le);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        _e = function(e, t) {
            var n = function(e) {
                function t() {
                    e.apply(this, arguments);
                }
                return Be(t, e), t.afterVideoCompleted = function(e, t) {
                    t.hide();
                }, t;
            }(t.VideoEventHandlers);
            return e.VastVideoEventHandlers = n, e;
        }(_e, ge), t = '<div class="btn-close-region"><a class="btn-close"><span class="icon-close"></span></a></div>\n<div class="campaign-container">\n  <div class="game-background game-background-landscape" style="background-image: url(<%= data.endScreenLandscape %>)"></div>\n  <div class="game-background game-background-portrait" style="background-image: url(<%= data.endScreenPortrait %>)"></div>\n  <div class="end-screen-info-background">\n    <div class="end-screen-stripe"></div>\n    <div class="end-screen-info">\n      <div class="game-info">\n        <div class="game-icon" style="background-image: url(<%= data.gameIcon %>)"></div>\n        <div class="name-container"><%= data.gameName %></div>\n      </div>\n      <div class="store-container">\n        <a class="store-button"></a>\n        <div class="game-store-info">\n          <span class="game-rating">\n            <span class="game-rating-mask" style="width: <%= data.rating %>%">\n            <% for (var i = 0; i < 5; i++) { %><span class="icon-star"></span><% } %>\n            </span>\n            <% for (var i = 0; i < 5; i++) { %><span class="icon-star"></span><% } %>\n          </span>\n          <br class="game-rating-br">\n          <span class="game-rating-count">\n            (<span class="game-rating-count-number"><%= data.ratingCount %></span><span class="game-rating-postfix"> Ratings</span>)\n          </span>\n        </div>\n      </div>\n      <div class="download-container">\n        <a class="btn-download">\n          <span class="download-text">Download For Free</span>\n        </a>\n      </div>\n      <div class="store-badge-container">\n        <a class="btn-store-badge"></a>\n      </div>\n      <div class="unityads-logo"></div>\n    </div>\n    <div class="privacy-button"><span class="icon-info"></span></div>\n  </div>\n</div>\n',
            me = function(e) {
                var t = function() {
                    function e(e) {
                        var t = this;
                        this._element = e, this._moved = !1, this._startX = 0, this._startY = 0, this._element.addEventListener("touchstart", function(e) {
                            return t.onTouchStart(e);
                        }, !1);
                    }
                    return e.prototype.onTouchStart = function(e) {
                        var t = this;
                        this._onTouchMoveListener = function(e) {
                            return t.onTouchMove(e);
                        }, this._onTouchEndListener = function(e) {
                            return t.onTouchEnd(e);
                        }, this._onTouchCancelListener = function(e) {
                            return t.onTouchCancel(e);
                        }, this._element.addEventListener("touchmove", this._onTouchMoveListener, !1), this._element.addEventListener("touchend", this._onTouchEndListener, !1),
                            this._element.addEventListener("touchcancel", this._onTouchCancelListener, !1),
                            this._moved = !1, this._startX = e.touches[0].clientX, this._startY = e.touches[0].clientY;
                    }, e.prototype.onTouchMove = function(t) {
                        var n = t.touches[0].clientX, i = t.touches[0].clientY;
                        (Math.abs(n - this._startX) > e._moveTolerance || Math.abs(i - this._startY) > e._moveTolerance) && (this._moved = !0);
                    }, e.prototype.onTouchEnd = function(e) {
                        if (this._element.removeEventListener("touchmove", this._onTouchMoveListener, !1),
                                this._element.removeEventListener("touchend", this._onTouchEndListener, !1), this._element.removeEventListener("touchcancel", this._onTouchCancelListener, !1),
                                this._onTouchMoveListener = void 0, this._onTouchEndListener = void 0, this._onTouchCancelListener = void 0,
                                !this._moved) {
                            var t = new MouseEvent("click", {
                                view: window,
                                bubbles: !0,
                                cancelable: !0
                            });
                            e.stopPropagation(), e.target.dispatchEvent(t) || e.preventDefault();
                        }
                    }, e.prototype.onTouchCancel = function(e) {
                        this._moved = !1, this._startX = 0, this._startY = 0;
                    }, e._moveTolerance = 10, e;
                }();
                return e.Tap = t, e;
            }(me), ye = function(e, t) {
            var n = function() {
                function e(e) {
                    this._id = e;
                }
                return e.prototype.render = function() {
                    var e = this;
                    this._container = document.createElement("div"), this._container.id = this._id,
                        this._container.innerHTML = this._template.render(this._templateData), this._bindings.forEach(function(n) {
                        for (var i = e._container.querySelectorAll(n.selector), r = 0; r < i.length; ++r) {
                            var o = i[r];
                            "click" === n.event && (n.tap = new t.Tap(o)), o.addEventListener(n.event, n.listener, !1);
                        }
                    });
                }, e.prototype.container = function() {
                    return this._container;
                }, e.prototype.show = function() {
                    this._container.style.visibility = "visible";
                }, e.prototype.hide = function() {
                    this._container.style.visibility = "hidden";
                }, e;
            }();
            return e.View = n, e;
        }(ye, me), Ee = function(e) {
            var t = function() {
                function e(t) {
                    var n = this, i = 0, r = "__p+='";
                    t.replace(e._matcher, function(n, o, a, s) {
                        return r += t.slice(i, s).replace(e._escapeRegExp, e._escapeChar), i = s + n.length,
                            o ? r += "'+\n((__t=(" + o + "))==null?'':__t)+\n'" : a && (r += "';\n" + a + "\n__p+='"),
                            n;
                    }), r += "';\n", r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
                    try {
                        var o = new Function("data", r);
                        this._templateFunction = function(e) {
                            return o.call(n, e);
                        };
                    } catch (a) {
                        throw a.source = r, a;
                    }
                }
                return e.prototype.render = function(e) {
                    return this._templateFunction(e);
                }, e._matcher = /<%=([\s\S]+?)%>|<%([\s\S]+?)%>|$/g, e._escapes = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }, e._escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g, e._escapeChar = function(t) {
                    return "\\" + e._escapes[t];
                }, e;
            }();
            return e.Template = t, e;
        }(Ee), n = '<div class="pop-up">\n  <% if(!data.isCoppaCompliant) { %>\n  <div class="privacy-text">\n    This advertisement has been served by Unity Ads.\n    Unity Ads collects and uses information gathered through your use of your apps in order to create an individualized and more relevant user experience, to predict your preferences, and to show you ads that are more likely to interest you (¡°personalized ads¡±).\n    Please read our <a href="https://unity3d.com/legal/privacy-policy">Privacy Policy</a> for a full description of our data practices.\n    You may be able to opt-out of Unity Ads¡¯ collection and use of your mobile app data for personalized ads through your device settings.\n  </div>\n  <% } else { %>\n  <div class="privacy-simple-text">\n    This advertisement has been served by Unity Ads. Please read our <a href="https://unity3d.com/legal/privacy-policy">Privacy Policy</a> for a full description of our data practices.\n  </div>\n  <% } %>\n  <div class="ok-button">Ok</div>\n</div>\n';
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        Se = function(e, t, n, i, r) {
            var o = function(e) {
                function n(n) {
                    var o = this;
                    e.call(this, "privacy"), this.onPrivacy = new r.Observable1(), this.onClose = new r.Observable0(),
                        this._template = new i.Template(t), this._templateData = {
                        isCoppaCompliant: n
                    }, this._bindings = [ {
                        event: "click",
                        listener: function(e) {
                            return o.onOkEvent(e);
                        },
                        selector: ".ok-button"
                    }, {
                        event: "click",
                        listener: function(e) {
                            return o.onPrivacyEvent(e);
                        },
                        selector: "a"
                    } ];
                }
                return Be(n, e), n.prototype.onPrivacyEvent = function(e) {
                    e.preventDefault(), this.onPrivacy.trigger(e.target.href);
                }, n.prototype.onOkEvent = function(e) {
                    e.preventDefault(), this.onClose.trigger();
                }, n;
            }(n.View);
            return e.Privacy = o, e;
        }(Se, n, ye, Ee, u);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        Ie = function(e, t, n, i, r, o) {
            var a = function(e) {
                function n(n, o) {
                    var a = this;
                    if (e.call(this, "end-screen"), this.onDownload = new r.Observable0(), this.onPrivacy = new r.Observable1(),
                            this.onClose = new r.Observable0(), this._coppaCompliant = o, this._gameName = n.getGameName(),
                            this._template = new i.Template(t), n) {
                        var s = 20 * n.getRating();
                        this._templateData = {
                            gameName: n.getGameName(),
                            gameIcon: n.getGameIcon(),
                            endScreenLandscape: n.getLandscapeUrl(),
                            endScreenPortrait: n.getPortraitUrl(),
                            rating: s.toString(),
                            ratingCount: n.getRatingCount().toString()
                        };
                    }
                    this._bindings = [ {
                        event: "click",
                        listener: function(e) {
                            return a.onDownloadEvent(e);
                        },
                        selector: ".game-background, .btn-download, .store-button, .game-icon, .store-badge-container"
                    }, {
                        event: "click",
                        listener: function(e) {
                            return a.onCloseEvent(e);
                        },
                        selector: ".btn-close-region"
                    }, {
                        event: "click",
                        listener: function(e) {
                            return a.onPrivacyEvent(e);
                        },
                        selector: ".privacy-button"
                    } ];
                }
                return Be(n, e), n.prototype.show = function() {
                    e.prototype.show.call(this);
                    var t = this._container.querySelector(".name-container");
                    t.innerHTML = this._gameName + " ";
                }, n.prototype.onDownloadEvent = function(e) {
                    e.preventDefault(), this.onDownload.trigger();
                }, n.prototype.onCloseEvent = function(e) {
                    e.preventDefault(), this.onClose.trigger();
                }, n.prototype.onPrivacyEvent = function(e) {
                    var t = this;
                    e.preventDefault();
                    var n = new o.Privacy(this._coppaCompliant);
                    n.render(), document.body.appendChild(n.container()), n.onPrivacy.subscribe(function(e) {
                        t.onPrivacy.trigger(e);
                    }), n.onClose.subscribe(function() {
                        n.hide(), n.container().parentElement.removeChild(n.container());
                    });
                }, n;
            }(n.View);
            return e.EndScreen = a, e;
        }(Ie, t, ye, Ee, u, Se), i = '<div class="skip-button">You can skip this video in <span class="skip-duration">0</span> seconds</div>\n<div class="buffering-spinner">\n    <div class="spinner-animation"></div>\n    <div class="spinner-text">Buffering</div>\n</div>\n<div class="mute-button <%= data.muted ? \'muted\' : \'\' %>">\n    <div class="mute-icon"><span class="icon-volume"></span></div>\n    <div class="unmute-icon"><span class="icon-volume-mute"></span></div>\n</div>\n<div class="video-duration-text">This video ends in <span class="video-duration">0</span> seconds</div>\n<div class="call-button">Learn More</div>\n<div class="debug-message-text"></div>';
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        Ce = function(e, t, n, i, r) {
            var o = function(e) {
                function n(n) {
                    var o = this;
                    e.call(this, "overlay"), this.onSkip = new r.Observable1(), this.onMute = new r.Observable1(),
                        this.onCallButton = new r.Observable1(), this._spinnerEnabled = !1, this._skipVisible = !1,
                        this._videoDurationEnabled = !1, this._muteEnabled = !1, this._debugMessageVisible = !1,
                        this._callButtonVisible = !1, this._template = new i.Template(t), this._muted = n,
                        this._templateData = {
                            muted: this._muted
                        }, this._bindings = [ {
                        event: "click",
                        listener: function(e) {
                            return o.onSkipEvent(e);
                        },
                        selector: ".skip-button"
                    }, {
                        event: "click",
                        listener: function(e) {
                            return o.onMuteEvent(e);
                        },
                        selector: ".mute-button"
                    }, {
                        event: "click",
                        listener: function(e) {
                            return o.onCallButtonEvent(e);
                        },
                        selector: ".call-button"
                    } ];
                }
                return Be(n, e), n.prototype.render = function() {
                    e.prototype.render.call(this), this._skipElement = this._container.querySelector(".skip-button"),
                        this._spinnerElement = this._container.querySelector(".buffering-spinner"), this._skipDurationElement = this._container.querySelector(".skip-duration"),
                        this._videoDurationElement = this._container.querySelector(".video-duration-text"),
                        this._videoDurationCounterElement = this._container.querySelector(".video-duration"),
                        this._muteButtonElement = this._container.querySelector(".mute-button"), this._debugMessageElement = this._container.querySelector(".debug-message-text"),
                        this._callButtonElement = this._container.querySelector(".call-button");
                }, n.prototype.setSpinnerEnabled = function(e) {
                    this._spinnerEnabled !== e && (this._spinnerEnabled = e, this._spinnerElement.style.display = e ? "block" : "none");
                }, n.prototype.setSkipVisible = function(e) {
                    this._skipVisible !== e && (this._skipElement.style.display = e ? "block" : "none");
                }, n.prototype.setSkipEnabled = function(e) {
                    this._skipEnabled !== e && (this._skipEnabled = e);
                }, n.prototype.setSkipDuration = function(e) {
                    this._skipDuration = this._skipRemaining = 1e3 * e, this.setSkipText(e);
                }, n.prototype.setVideoDurationEnabled = function(e) {
                    this._videoDurationEnabled !== e && (this._videoDurationEnabled = e, this._videoDurationElement.style.display = e ? "block" : "none");
                }, n.prototype.setVideoDuration = function(e) {
                    this._videoDuration = e, this._videoDurationCounterElement.innerHTML = Math.round(e / 1e3).toString();
                }, n.prototype.setVideoProgress = function(e) {
                    this._videoProgress = e, this._skipEnabled && this._skipRemaining > 0 && (this._skipRemaining = Math.round((this._skipDuration - e) / 1e3),
                        this.setSkipText(this._skipRemaining)), this._videoDuration > e ? this._videoDurationCounterElement.innerHTML = Math.round((this._videoDuration - e) / 1e3).toString() : this._videoDurationCounterElement.innerHTML = "0";
                }, n.prototype.setMuteEnabled = function(e) {
                    this._muteEnabled !== e && (this._muteEnabled = e, this._muteButtonElement.style.display = e ? "block" : "none");
                }, n.prototype.setDebugMessage = function(e) {
                    this._debugMessageElement.innerHTML = e;
                }, n.prototype.setDebugMessageVisible = function(e) {
                    this._debugMessageVisible !== e && (this._debugMessageElement.style.display = e ? "block" : "none");
                }, n.prototype.setCallButtonVisible = function(e) {
                    this._callButtonVisible !== e && (this._callButtonElement.style.display = e ? "block" : "none");
                }, n.prototype.isMuted = function() {
                    return this._muted;
                }, n.prototype.setSkipText = function(e) {
                    0 >= e ? this._skipElement.innerHTML = "Skip Video" : this._skipDurationElement.innerHTML = e.toString();
                }, n.prototype.onSkipEvent = function(e) {
                    e.preventDefault(), this._skipEnabled && this._videoProgress > this._skipDuration && this.onSkip.trigger(this._videoProgress);
                }, n.prototype.onMuteEvent = function(e) {
                    e.preventDefault(), this._muted ? (this._muteButtonElement.classList.remove("muted"),
                        this._muted = !1) : (this._muteButtonElement.classList.add("muted"), this._muted = !0),
                        this.onMute.trigger(this._muted);
                }, n.prototype.onCallButtonEvent = function(e) {
                    e.preventDefault(), this.onCallButton.trigger(!0);
                }, n;
            }(n.View);
            return e.Overlay = o, e;
        }(Ce, i, ye, Ee, u), Ae = function(e, t, n, i, r, o, a, s, c, u, l, h) {
            var p = function() {
                function e() {}
                return e.createAdUnit = function(e, t, n, r, o) {
                    return r instanceof i.VastCampaign ? this.createVastAdUnit(e, t, n, r, o) : this.createVideoAdUnit(e, t, n, r, o);
                }, e.createVideoAdUnit = function(e, n, i, r, o) {
                    var a = new l.Overlay(i.muteVideo()), s = new u.EndScreen(r, o.isCoppaCompliant()), c = new t.VideoAdUnit(e, i, r, a, s);
                    return this.prepareOverlay(a, e, n, c, i, r), this.prepareEndScreen(s, e, n, c),
                        this.prepareVideoPlayer(e, n, c), c;
                }, e.createVastAdUnit = function(e, t, i, r, o) {
                    var a = new l.Overlay(i.muteVideo()), s = new n.VastAdUnit(e, i, r, a);
                    return this.prepareOverlay(a, e, t, s, i, r), this.prepareVideoPlayer(e, t, s),
                        s;
                }, e.prepareOverlay = function(e, t, n, i, r, o) {
                    e.render(), document.body.appendChild(e.container()), this.prepareOverlayEventHandlers(e, t, n, i),
                        e.setSpinnerEnabled(!o.isVideoCached()), r.allowSkip() ? (e.setSkipEnabled(!0),
                        e.setSkipDuration(r.allowSkipInSeconds())) : e.setSkipEnabled(!1);
                }, e.prepareOverlayEventHandlers = function(e, t, i, a) {
                    a instanceof n.VastAdUnit ? (e.onSkip.subscribe(function(e) {
                        return o.VastOverlayEventHandlers.onSkip(t, i, a);
                    }), e.onMute.subscribe(function(e) {
                        return o.VastOverlayEventHandlers.onMute(t, i, a, e);
                    }), e.onCallButton.subscribe(function() {
                        return o.VastOverlayEventHandlers.onCallButton(t, i, a);
                    })) : (e.onSkip.subscribe(function(e) {
                        return r.OverlayEventHandlers.onSkip(t, i, a);
                    }), e.onMute.subscribe(function(e) {
                        return r.OverlayEventHandlers.onMute(t, i, a, e);
                    }));
                }, e.prepareEndScreen = function(e, t, n, i) {
                    e.render(), e.hide(), document.body.appendChild(e.container()), e.onDownload.subscribe(function() {
                        return a.EndScreenEventHandlers.onDownload(t, n, i);
                    }), e.onPrivacy.subscribe(function(e) {
                        return a.EndScreenEventHandlers.onPrivacy(t, e);
                    }), e.onClose.subscribe(function() {
                        return a.EndScreenEventHandlers.onClose(t, i);
                    });
                }, e.prepareVideoPlayer = function(e, t, i) {
                    var r, o, a = e.VideoPlayer.onPrepared.subscribe(function(t, n, r) {
                        return s.VideoEventHandlers.onVideoPrepared(e, i, t);
                    }), u = e.VideoPlayer.onProgress.subscribe(function(n) {
                        return s.VideoEventHandlers.onVideoProgress(e, t, i, n);
                    }), l = e.VideoPlayer.onPlay.subscribe(function() {
                        return s.VideoEventHandlers.onVideoStart(e, t, i);
                    });
                    if (i instanceof n.VastAdUnit ? (r = e.VideoPlayer.onCompleted.subscribe(function(n) {
                            return c.VastVideoEventHandlers.onVideoCompleted(e, t, i);
                        }), o = e.VideoPlayer.onError.subscribe(function(t, n, r) {
                            return c.VastVideoEventHandlers.onVideoError(e, i, t, n);
                        })) : (r = e.VideoPlayer.onCompleted.subscribe(function(n) {
                            return s.VideoEventHandlers.onVideoCompleted(e, t, i);
                        }), o = e.VideoPlayer.onError.subscribe(function(t, n, r) {
                            return s.VideoEventHandlers.onVideoError(e, i, t, n);
                        })), i.onClose.subscribe(function() {
                            e.VideoPlayer.onPrepared.unsubscribe(a), e.VideoPlayer.onProgress.unsubscribe(u),
                                e.VideoPlayer.onPlay.unsubscribe(l), e.VideoPlayer.onCompleted.unsubscribe(r), e.VideoPlayer.onError.unsubscribe(o);
                        }), e.getPlatform() === h.Platform.IOS) {
                        var p = e.VideoPlayer.Ios.onLikelyToKeepUp.subscribe(function(t, n) {
                            n === !0 && e.VideoPlayer.play();
                        });
                        i.onClose.subscribe(function() {
                            e.VideoPlayer.Ios.onLikelyToKeepUp.unsubscribe(p);
                        });
                    }
                }, e;
            }();
            return e.AdUnitFactory = p, e;
        }(Ae, he, pe, Q, de, fe, ve, ge, _e, Ie, Ce, a), be = function(e) {
            var t = function() {
                function e(e, t, n) {
                    this._ads = e, this._errorURLTemplates = t, this._additionalTrackingEvents = n;
                }
                return e.prototype.getAds = function() {
                    return this._ads;
                }, e.prototype.getErrorURLTemplates = function() {
                    var e = this.getAd();
                    if (e) {
                        var t = e.getErrorURLTemplates();
                        if (t instanceof Array) return t.concat(this._errorURLTemplates || []);
                    }
                    return this._errorURLTemplates;
                }, e.prototype.getAd = function() {
                    return this.getAds() && this.getAds().length > 0 ? this.getAds()[0] : null;
                }, e.prototype.getVideoUrl = function() {
                    var e = this.getAd();
                    if (e) for (var t = 0, n = e.getCreatives(); t < n.length; t++) for (var i = n[t], r = 0, o = i.getMediaFiles(); r < o.length; r++) {
                        var a = o[r], s = this.isPlayableMIMEType(a.getMIMEType());
                        if (a.getFileURL() && s) return a.getFileURL();
                    }
                    return null;
                }, e.prototype.getImpressionUrls = function() {
                    var e = this.getAd();
                    return e ? e.getImpressionURLTemplates() : [];
                }, e.prototype.getTrackingEventUrls = function(e) {
                    var t = this.getAd();
                    if (t) {
                        var n = t.getTrackingEventUrls(e), i = [];
                        return this._additionalTrackingEvents && (i = this._additionalTrackingEvents[e] || []),
                            n instanceof Array ? n.concat(i) : i;
                    }
                    return null;
                }, e.prototype.addTrackingEventUrl = function(e, t) {
                    this._additionalTrackingEvents || (this._additionalTrackingEvents = {}), this._additionalTrackingEvents[e] || (this._additionalTrackingEvents[e] = []),
                        this._additionalTrackingEvents[e].push(t);
                }, e.prototype.getDuration = function() {
                    var e = this.getAd();
                    return e ? e.getDuration() : null;
                }, e.prototype.getWrapperURL = function() {
                    var e = this.getAd();
                    return e ? e.getWrapperURL() : null;
                }, e.prototype.getVideoClickThroughURL = function() {
                    var e = this.getAd();
                    return e ? e.getVideoClickThroughURLTemplate() : null;
                }, e.prototype.getVideoClickTrackingURLs = function() {
                    var e = this.getAd();
                    return e ? e.getVideoClickTrackingURLTemplates() : null;
                }, e.prototype.isPlayableMIMEType = function(e) {
                    var t = "video/mp4";
                    return e === t;
                }, e;
            }();
            return e.Vast = t, e;
        }(be), Oe = function(e) {
            var t = function() {
                function e(e, t) {
                    this._type = e, this._trackingEvents = t || {};
                }
                return e.prototype.getType = function() {
                    return this._type;
                }, e.prototype.getTrackingEvents = function() {
                    return this._trackingEvents;
                }, e.prototype.addTrackingEvent = function(e, t) {
                    null == this._trackingEvents[e] && (this._trackingEvents[e] = []), this._trackingEvents[e].push(t);
                }, e;
            }();
            return e.VastCreative = t, e;
        }(Oe);
        var Be = this && this.__extends || function(e, t) {
                function n() {
                    this.constructor = e;
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            };
        Te = function(e, t) {
            var n = function(e) {
                function t(t, n, i, r, o, a, s) {
                    e.call(this, "linear"), this._duration = t || 0, this._skipDelay = n || null, this._mediaFiles = i || [],
                        this._videoClickThroughURLTemplate = r || null, this._videoClickTrackingURLTemplates = o || [],
                        this._videoCustomClickURLTemplates = a || [], this._adParameters = s || null;
                }
                return Be(t, e), t.prototype.getDuration = function() {
                    return this._duration;
                }, t.prototype.setDuration = function(e) {
                    this._duration = e;
                }, t.prototype.getSkipDelay = function() {
                    return this._skipDelay;
                }, t.prototype.setSkipDelay = function(e) {
                    this._skipDelay = e;
                }, t.prototype.getMediaFiles = function() {
                    return this._mediaFiles;
                }, t.prototype.addMediaFile = function(e) {
                    this._mediaFiles.push(e);
                }, t.prototype.getVideoClickThroughURLTemplate = function() {
                    return this._videoClickThroughURLTemplate;
                }, t.prototype.setVideoClickThroughURLTemplate = function(e) {
                    this._videoClickThroughURLTemplate = e;
                }, t.prototype.getVideoClickTrackingURLTemplates = function() {
                    return this._videoClickTrackingURLTemplates;
                }, t.prototype.addVideoClickTrackingURLTemplate = function(e) {
                    this._videoClickTrackingURLTemplates.push(e);
                }, t.prototype.getVideoCustomClickURLTemplates = function() {
                    return this._videoCustomClickURLTemplates;
                }, t.prototype.getAdParameters = function() {
                    return this._adParameters;
                }, t;
            }(t.VastCreative);
            return e.VastCreativeLinear = n, e;
        }(Te, Oe), we = function(e, t) {
            var n = function() {
                function e(e, t, n, i, r) {
                    this._id = e, this._creatives = t || [], this._errorURLTemplates = n || [], this._impressionURLTemplates = i || [],
                        this._wrapperURLs = r || [];
                }
                return e.prototype.getId = function() {
                    return this._id;
                }, e.prototype.setId = function(e) {
                    this._id = e;
                }, e.prototype.getCreatives = function() {
                    return this._creatives;
                }, e.prototype.getCreative = function() {
                    return this.getCreatives() && this.getCreatives().length > 0 ? this.getCreatives()[0] : null;
                }, e.prototype.addCreative = function(e) {
                    this._creatives.push(e);
                }, e.prototype.getErrorURLTemplates = function() {
                    return this._errorURLTemplates;
                }, e.prototype.addErrorURLTemplate = function(e) {
                    this._errorURLTemplates.push(e);
                }, e.prototype.getImpressionURLTemplates = function() {
                    return this._impressionURLTemplates;
                }, e.prototype.addImpressionURLTemplate = function(e) {
                    this._impressionURLTemplates.push(e);
                }, e.prototype.getWrapperURL = function() {
                    return this._wrapperURLs[0];
                }, e.prototype.addWrapperURL = function(e) {
                    this._wrapperURLs.push(e);
                }, e.prototype.getTrackingEventUrls = function(e) {
                    var t = this.getCreative();
                    return t && t.getTrackingEvents() ? t.getTrackingEvents()[e] : null;
                }, e.prototype.getDuration = function() {
                    var e = this.getCreative();
                    return e ? e.getDuration() : null;
                }, e.prototype.getVideoClickThroughURLTemplate = function() {
                    var e = this.getCreative();
                    return e instanceof t.VastCreativeLinear ? e.getVideoClickThroughURLTemplate() : null;
                }, e.prototype.getVideoClickTrackingURLTemplates = function() {
                    var e = this.getCreative();
                    return e instanceof t.VastCreativeLinear ? e.getVideoClickTrackingURLTemplates() : null;
                }, e.prototype.addVideoClickTrackingURLTemplate = function(e) {
                    var n = this.getCreative();
                    n instanceof t.VastCreativeLinear && n.addVideoClickTrackingURLTemplate(e);
                }, e;
            }();
            return e.VastAd = n, e;
        }(we, Te), Ne = function(e) {
            var t = function() {
                function e(e, t, n, i, r, o, a, s, c) {
                    this._fileURL = e || null, this._deliveryType = t || "progressive", this._mimeType = i || null,
                        this._codec = n || null, this._bitrate = r || 0, this._minBitrate = o || 0, this._maxBitrate = a || 0,
                        this._width = s || 0, this._height = c || 0, this._apiFramework = null, this._scalable = null,
                        this._maintainAspectRatio = null;
                }
                return e.prototype.getFileURL = function() {
                    return this._fileURL;
                }, e.prototype.getMIMEType = function() {
                    return this._mimeType;
                }, e;
            }();
            return e.VastMediaFile = t, e;
        }(Ne), function(e, t) {
            r = function() {
                return "function" == typeof t ? t() : t;
            }();
        }(this, function() {
            function e(e) {
                this.options = e || {
                        locator: {}
                    };
            }
            function t(e, t, i) {
                function o(t) {
                    var n = e[t];
                    !n && s && (n = 2 == e.length ? function(n) {
                        e(t, n);
                    } : e), a[t] = n && function(e) {
                            n("[xmldom " + t + "]	" + e + r(i));
                        } || function() {};
                }
                if (!e) {
                    if (t instanceof n) return t;
                    e = t;
                }
                var a = {}, s = e instanceof Function;
                return i = i || {}, o("warning"), o("error"), o("fatalError"), a;
            }
            function n() {
                this.cdata = !1;
            }
            function i(e, t) {
                t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber;
            }
            function r(e) {
                return e ? "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]" : void 0;
            }
            function o(e, t, n) {
                return "string" == typeof e ? e.substr(t, n) : e.length >= t + n || t ? new java.lang.String(e, t, n) + "" : e;
            }
            function a(e, t) {
                e.currentElement ? e.currentElement.appendChild(t) : e.document.appendChild(t);
            }
            var s = function() {
                function e(e, t) {
                    for (var n in e) t[n] = e[n];
                }
                function t(t, n) {
                    function i() {}
                    var r = t.prototype;
                    if (Object.create) {
                        var o = Object.create(n.prototype);
                        r.__proto__ = o;
                    }
                    r instanceof n || (i.prototype = n.prototype, i = new i(), e(r, i), t.prototype = r = i),
                    r.constructor != t && ("function" != typeof t && console.error("unknow Class:" + t),
                        r.constructor = t);
                }
                function n(e, t) {
                    if (t instanceof Error) var i = t; else i = this, Error.call(this, ee[e]), this.message = ee[e],
                    Error.captureStackTrace && Error.captureStackTrace(this, n);
                    return i.code = e, t && (this.message = this.message + ": " + t), i;
                }
                function i() {}
                function r(e, t) {
                    this._node = e, this._refresh = t, o(this);
                }
                function o(t) {
                    var n = t._node._inc || t._node.ownerDocument._inc;
                    if (t._inc != n) {
                        var i = t._refresh(t._node);
                        V(t, "length", i.length), e(i, t), t._inc = n;
                    }
                }
                function a() {}
                function s(e, t) {
                    for (var n = e.length; n--; ) if (e[n] === t) return n;
                }
                function c(e, t, n, i) {
                    if (i ? t[s(t, i)] = n : t[t.length++] = n, e) {
                        n.ownerElement = e;
                        var r = e.ownerDocument;
                        r && (i && g(r, e, i), v(r, e, n));
                    }
                }
                function u(e, t, i) {
                    var r = s(t, i);
                    if (!(r >= 0)) throw n(te, new Error());
                    for (var o = t.length - 1; o > r; ) t[r] = t[++r];
                    if (t.length = o, e) {
                        var a = e.ownerDocument;
                        a && (g(a, e, i), i.ownerElement = null);
                    }
                }
                function l(e) {
                    if (this._features = {}, e) for (var t in e) this._features = e[t];
                }
                function h() {}
                function p(e) {
                    return "<" == e && "&lt;" || ">" == e && "&gt;" || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";";
                }
                function d(e, t) {
                    if (t(e)) return !0;
                    if (e = e.firstChild) do if (d(e, t)) return !0; while (e = e.nextSibling);
                }
                function f() {}
                function v(e, t, n) {
                    e && e._inc++;
                    var i = n.namespaceURI;
                    "http://www.w3.org/2000/xmlns/" == i && (t._nsMap[n.prefix ? n.localName : ""] = n.value);
                }
                function g(e, t, n, i) {
                    e && e._inc++;
                    var r = n.namespaceURI;
                    "http://www.w3.org/2000/xmlns/" == r && delete t._nsMap[n.prefix ? n.localName : ""];
                }
                function _(e, t, n) {
                    if (e && e._inc) {
                        e._inc++;
                        var i = t.childNodes;
                        if (n) i[i.length++] = n; else {
                            for (var r = t.firstChild, o = 0; r; ) i[o++] = r, r = r.nextSibling;
                            i.length = o;
                        }
                    }
                }
                function m(e, t) {
                    var n = t.previousSibling, i = t.nextSibling;
                    return n ? n.nextSibling = i : e.firstChild = i, i ? i.previousSibling = n : e.lastChild = n,
                        _(e.ownerDocument, e), t;
                }
                function y(e, t, n) {
                    var i = t.parentNode;
                    if (i && i.removeChild(t), t.nodeType === X) {
                        var r = t.firstChild;
                        if (null == r) return t;
                        var o = t.lastChild;
                    } else r = o = t;
                    var a = n ? n.previousSibling : e.lastChild;
                    r.previousSibling = a, o.nextSibling = n, a ? a.nextSibling = r : e.firstChild = r,
                        null == n ? e.lastChild = o : n.previousSibling = o;
                    do r.parentNode = e; while (r !== o && (r = r.nextSibling));
                    return _(e.ownerDocument || e, e), t.nodeType == X && (t.firstChild = t.lastChild = null),
                        t;
                }
                function E(e, t) {
                    var n = t.parentNode;
                    if (n) {
                        var i = e.lastChild;
                        n.removeChild(t);
                        var i = e.lastChild;
                    }
                    var i = e.lastChild;
                    return t.parentNode = e, t.previousSibling = i, t.nextSibling = null, i ? i.nextSibling = t : e.firstChild = t,
                        e.lastChild = t, _(e.ownerDocument, e, t), t;
                }
                function S() {
                    this._nsMap = {};
                }
                function I() {}
                function C() {}
                function A() {}
                function b() {}
                function O() {}
                function T() {}
                function w() {}
                function N() {}
                function R() {}
                function D() {}
                function k() {}
                function P() {}
                function B(e, t, n, i) {
                    switch (e.nodeType) {
                        case W:
                            var r = e.attributes, o = r.length, a = e.firstChild, s = e.tagName;
                            i = F === e.namespaceURI || i, t.push("<", s), n && t.sort.apply(r, n);
                            for (var c = 0; o > c; c++) B(r.item(c), t, n, i);
                            if (a || i && !/^(?:meta|link|img|br|hr|input|button)$/i.test(s)) {
                                if (t.push(">"), i && /^script$/i.test(s)) a && t.push(a.data); else for (;a; ) B(a, t, n, i),
                                    a = a.nextSibling;
                                t.push("</", s, ">");
                            } else t.push("/>");
                            return;

                        case Q:
                        case X:
                            for (var a = e.firstChild; a; ) B(a, t, n, i), a = a.nextSibling;
                            return;

                        case q:
                            return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, p), '"');

                        case K:
                            return t.push(e.data.replace(/[<&]/g, p));

                        case H:
                            return t.push("<![CDATA[", e.data, "]]>");

                        case z:
                            return t.push("<!--", e.data, "-->");

                        case J:
                            var u = e.publicId, l = e.systemId;
                            if (t.push("<!DOCTYPE ", e.name), u) t.push(' PUBLIC "', u), l && "." != l && t.push('" "', l),
                                t.push('">'); else if (l && "." != l) t.push(' SYSTEM "', l, '">'); else {
                                var h = e.internalSubset;
                                h && t.push(" [", h, "]"), t.push(">");
                            }
                            return;

                        case Y:
                            return t.push("<?", e.target, " ", e.data, "?>");

                        case j:
                            return t.push("&", e.nodeName, ";");

                        default:
                            t.push("??", e.nodeName);
                    }
                }
                function L(e, t, n) {
                    var i;
                    switch (t.nodeType) {
                        case W:
                            i = t.cloneNode(!1), i.ownerDocument = e;

                        case X:
                            break;

                        case q:
                            n = !0;
                    }
                    if (i || (i = t.cloneNode(!1)), i.ownerDocument = e, i.parentNode = null, n) for (var r = t.firstChild; r; ) i.appendChild(L(e, r, n)),
                        r = r.nextSibling;
                    return i;
                }
                function U(e, t, n) {
                    var r = new t.constructor();
                    for (var o in t) {
                        var s = t[o];
                        "object" != typeof s && s != r[o] && (r[o] = s);
                    }
                    switch (t.childNodes && (r.childNodes = new i()), r.ownerDocument = e, r.nodeType) {
                        case W:
                            var c = t.attributes, u = r.attributes = new a(), l = c.length;
                            u._ownerElement = r;
                            for (var h = 0; l > h; h++) r.setAttributeNode(U(e, c.item(h), !0));
                            break;

                        case q:
                            n = !0;
                    }
                    if (n) for (var p = t.firstChild; p; ) r.appendChild(U(e, p, n)), p = p.nextSibling;
                    return r;
                }
                function V(e, t, n) {
                    e[t] = n;
                }
                function M(e) {
                    switch (e.nodeType) {
                        case 1:
                        case 11:
                            var t = [];
                            for (e = e.firstChild; e; ) 7 !== e.nodeType && 8 !== e.nodeType && t.push(M(e)),
                                e = e.nextSibling;
                            return t.join("");

                        default:
                            return e.nodeValue;
                    }
                }
                var F = "http://www.w3.org/1999/xhtml", x = {}, W = x.ELEMENT_NODE = 1, q = x.ATTRIBUTE_NODE = 2, K = x.TEXT_NODE = 3, H = x.CDATA_SECTION_NODE = 4, j = x.ENTITY_REFERENCE_NODE = 5, G = x.ENTITY_NODE = 6, Y = x.PROCESSING_INSTRUCTION_NODE = 7, z = x.COMMENT_NODE = 8, Q = x.DOCUMENT_NODE = 9, J = x.DOCUMENT_TYPE_NODE = 10, X = x.DOCUMENT_FRAGMENT_NODE = 11, $ = x.NOTATION_NODE = 12, Z = {}, ee = {}, te = (Z.INDEX_SIZE_ERR = (ee[1] = "Index size error",
                    1), Z.DOMSTRING_SIZE_ERR = (ee[2] = "DOMString size error", 2), Z.HIERARCHY_REQUEST_ERR = (ee[3] = "Hierarchy request error",
                    3), Z.WRONG_DOCUMENT_ERR = (ee[4] = "Wrong document", 4), Z.INVALID_CHARACTER_ERR = (ee[5] = "Invalid character",
                    5), Z.NO_DATA_ALLOWED_ERR = (ee[6] = "No data allowed", 6), Z.NO_MODIFICATION_ALLOWED_ERR = (ee[7] = "No modification allowed",
                    7), Z.NOT_FOUND_ERR = (ee[8] = "Not found", 8)), ne = (Z.NOT_SUPPORTED_ERR = (ee[9] = "Not supported",
                    9), Z.INUSE_ATTRIBUTE_ERR = (ee[10] = "Attribute in use", 10));
                Z.INVALID_STATE_ERR = (ee[11] = "Invalid state", 11), Z.SYNTAX_ERR = (ee[12] = "Syntax error",
                    12), Z.INVALID_MODIFICATION_ERR = (ee[13] = "Invalid modification", 13), Z.NAMESPACE_ERR = (ee[14] = "Invalid namespace",
                    14), Z.INVALID_ACCESS_ERR = (ee[15] = "Invalid access", 15);
                n.prototype = Error.prototype, e(Z, n), i.prototype = {
                    length: 0,
                    item: function(e) {
                        return this[e] || null;
                    },
                    toString: function() {
                        for (var e = [], t = 0; t < this.length; t++) B(this[t], e);
                        return e.join("");
                    }
                }, r.prototype.item = function(e) {
                    return o(this), this[e];
                }, t(r, i), a.prototype = {
                    length: 0,
                    item: i.prototype.item,
                    getNamedItem: function(e) {
                        for (var t = this.length; t--; ) {
                            var n = this[t];
                            if (n.nodeName == e) return n;
                        }
                    },
                    setNamedItem: function(e) {
                        var t = e.ownerElement;
                        if (t && t != this._ownerElement) throw new n(ne);
                        var i = this.getNamedItem(e.nodeName);
                        return c(this._ownerElement, this, e, i), i;
                    },
                    setNamedItemNS: function(e) {
                        var t, i = e.ownerElement;
                        if (i && i != this._ownerElement) throw new n(ne);
                        return t = this.getNamedItemNS(e.namespaceURI, e.localName), c(this._ownerElement, this, e, t),
                            t;
                    },
                    removeNamedItem: function(e) {
                        var t = this.getNamedItem(e);
                        return u(this._ownerElement, this, t), t;
                    },
                    removeNamedItemNS: function(e, t) {
                        var n = this.getNamedItemNS(e, t);
                        return u(this._ownerElement, this, n), n;
                    },
                    getNamedItemNS: function(e, t) {
                        for (var n = this.length; n--; ) {
                            var i = this[n];
                            if (i.localName == t && i.namespaceURI == e) return i;
                        }
                        return null;
                    }
                }, l.prototype = {
                    hasFeature: function(e, t) {
                        var n = this._features[e.toLowerCase()];
                        return n && (!t || t in n) ? !0 : !1;
                    },
                    createDocument: function(e, t, n) {
                        var r = new f();
                        if (r.implementation = this, r.childNodes = new i(), r.doctype = n, n && r.appendChild(n),
                                t) {
                            var o = r.createElementNS(e, t);
                            r.appendChild(o);
                        }
                        return r;
                    },
                    createDocumentType: function(e, t, n) {
                        var i = new T();
                        return i.name = e, i.nodeName = e, i.publicId = t, i.systemId = n, i;
                    }
                }, h.prototype = {
                    firstChild: null,
                    lastChild: null,
                    previousSibling: null,
                    nextSibling: null,
                    attributes: null,
                    parentNode: null,
                    childNodes: null,
                    ownerDocument: null,
                    nodeValue: null,
                    namespaceURI: null,
                    prefix: null,
                    localName: null,
                    insertBefore: function(e, t) {
                        return y(this, e, t);
                    },
                    replaceChild: function(e, t) {
                        this.insertBefore(e, t), t && this.removeChild(t);
                    },
                    removeChild: function(e) {
                        return m(this, e);
                    },
                    appendChild: function(e) {
                        return this.insertBefore(e, null);
                    },
                    hasChildNodes: function() {
                        return null != this.firstChild;
                    },
                    cloneNode: function(e) {
                        return U(this.ownerDocument || this, this, e);
                    },
                    normalize: function() {
                        for (var e = this.firstChild; e; ) {
                            var t = e.nextSibling;
                            t && t.nodeType == K && e.nodeType == K ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(),
                                e = t);
                        }
                    },
                    isSupported: function(e, t) {
                        return this.ownerDocument.implementation.hasFeature(e, t);
                    },
                    hasAttributes: function() {
                        return this.attributes.length > 0;
                    },
                    lookupPrefix: function(e) {
                        for (var t = this; t; ) {
                            var n = t._nsMap;
                            if (n) for (var i in n) if (n[i] == e) return i;
                            t = 2 == t.nodeType ? t.ownerDocument : t.parentNode;
                        }
                        return null;
                    },
                    lookupNamespaceURI: function(e) {
                        for (var t = this; t; ) {
                            var n = t._nsMap;
                            if (n && e in n) return n[e];
                            t = 2 == t.nodeType ? t.ownerDocument : t.parentNode;
                        }
                        return null;
                    },
                    isDefaultNamespace: function(e) {
                        var t = this.lookupPrefix(e);
                        return null == t;
                    }
                }, e(x, h), e(x, h.prototype), f.prototype = {
                    nodeName: "#document",
                    nodeType: Q,
                    doctype: null,
                    documentElement: null,
                    _inc: 1,
                    insertBefore: function(e, t) {
                        if (e.nodeType == X) {
                            for (var n = e.firstChild; n; ) {
                                var i = n.nextSibling;
                                this.insertBefore(n, t), n = i;
                            }
                            return e;
                        }
                        return null == this.documentElement && 1 == e.nodeType && (this.documentElement = e),
                            y(this, e, t), e.ownerDocument = this, e;
                    },
                    removeChild: function(e) {
                        return this.documentElement == e && (this.documentElement = null), m(this, e);
                    },
                    importNode: function(e, t) {
                        return L(this, e, t);
                    },
                    getElementById: function(e) {
                        var t = null;
                        return d(this.documentElement, function(n) {
                            return 1 == n.nodeType && n.getAttribute("id") == e ? (t = n, !0) : void 0;
                        }), t;
                    },
                    createElement: function(e) {
                        var t = new S();
                        t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.childNodes = new i();
                        var n = t.attributes = new a();
                        return n._ownerElement = t, t;
                    },
                    createDocumentFragment: function() {
                        var e = new D();
                        return e.ownerDocument = this, e.childNodes = new i(), e;
                    },
                    createTextNode: function(e) {
                        var t = new A();
                        return t.ownerDocument = this, t.appendData(e), t;
                    },
                    createComment: function(e) {
                        var t = new b();
                        return t.ownerDocument = this, t.appendData(e), t;
                    },
                    createCDATASection: function(e) {
                        var t = new O();
                        return t.ownerDocument = this, t.appendData(e), t;
                    },
                    createProcessingInstruction: function(e, t) {
                        var n = new k();
                        return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = t,
                            n;
                    },
                    createAttribute: function(e) {
                        var t = new I();
                        return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0,
                            t;
                    },
                    createEntityReference: function(e) {
                        var t = new R();
                        return t.ownerDocument = this, t.nodeName = e, t;
                    },
                    createElementNS: function(e, t) {
                        var n = new S(), r = t.split(":"), o = n.attributes = new a();
                        return n.childNodes = new i(), n.ownerDocument = this, n.nodeName = t, n.tagName = t,
                            n.namespaceURI = e, 2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t,
                            o._ownerElement = n, n;
                    },
                    createAttributeNS: function(e, t) {
                        var n = new I(), i = t.split(":");
                        return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = !0,
                            2 == i.length ? (n.prefix = i[0], n.localName = i[1]) : n.localName = t, n;
                    }
                }, t(f, h), S.prototype = {
                    nodeType: W,
                    hasAttribute: function(e) {
                        return null != this.getAttributeNode(e);
                    },
                    getAttribute: function(e) {
                        var t = this.getAttributeNode(e);
                        return t && t.value || "";
                    },
                    getAttributeNode: function(e) {
                        return this.attributes.getNamedItem(e);
                    },
                    setAttribute: function(e, t) {
                        var n = this.ownerDocument.createAttribute(e);
                        n.value = n.nodeValue = "" + t, this.setAttributeNode(n);
                    },
                    removeAttribute: function(e) {
                        var t = this.getAttributeNode(e);
                        t && this.removeAttributeNode(t);
                    },
                    appendChild: function(e) {
                        return e.nodeType === X ? this.insertBefore(e, null) : E(this, e);
                    },
                    setAttributeNode: function(e) {
                        return this.attributes.setNamedItem(e);
                    },
                    setAttributeNodeNS: function(e) {
                        return this.attributes.setNamedItemNS(e);
                    },
                    removeAttributeNode: function(e) {
                        return this.attributes.removeNamedItem(e.nodeName);
                    },
                    removeAttributeNS: function(e, t) {
                        var n = this.getAttributeNodeNS(e, t);
                        n && this.removeAttributeNode(n);
                    },
                    hasAttributeNS: function(e, t) {
                        return null != this.getAttributeNodeNS(e, t);
                    },
                    getAttributeNS: function(e, t) {
                        var n = this.getAttributeNodeNS(e, t);
                        return n && n.value || "";
                    },
                    setAttributeNS: function(e, t, n) {
                        var i = this.ownerDocument.createAttributeNS(e, t);
                        i.value = i.nodeValue = "" + n, this.setAttributeNode(i);
                    },
                    getAttributeNodeNS: function(e, t) {
                        return this.attributes.getNamedItemNS(e, t);
                    },
                    getElementsByTagName: function(e) {
                        return new r(this, function(t) {
                            var n = [];
                            return d(t, function(i) {
                                i === t || i.nodeType != W || "*" !== e && i.tagName != e || n.push(i);
                            }), n;
                        });
                    },
                    getElementsByTagNameNS: function(e, t) {
                        return new r(this, function(n) {
                            var i = [];
                            return d(n, function(r) {
                                r === n || r.nodeType !== W || "*" !== e && r.namespaceURI !== e || "*" !== t && r.localName != t || i.push(r);
                            }), i;
                        });
                    }
                }, f.prototype.getElementsByTagName = S.prototype.getElementsByTagName, f.prototype.getElementsByTagNameNS = S.prototype.getElementsByTagNameNS,
                    t(S, h), I.prototype.nodeType = q, t(I, h), C.prototype = {
                    data: "",
                    substringData: function(e, t) {
                        return this.data.substring(e, e + t);
                    },
                    appendData: function(e) {
                        e = this.data + e, this.nodeValue = this.data = e, this.length = e.length;
                    },
                    insertData: function(e, t) {
                        this.replaceData(e, 0, t);
                    },
                    appendChild: function(e) {
                        throw new Error(ee[3]);
                    },
                    deleteData: function(e, t) {
                        this.replaceData(e, t, "");
                    },
                    replaceData: function(e, t, n) {
                        var i = this.data.substring(0, e), r = this.data.substring(e + t);
                        n = i + n + r, this.nodeValue = this.data = n, this.length = n.length;
                    }
                }, t(C, h), A.prototype = {
                    nodeName: "#text",
                    nodeType: K,
                    splitText: function(e) {
                        var t = this.data, n = t.substring(e);
                        t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;
                        var i = this.ownerDocument.createTextNode(n);
                        return this.parentNode && this.parentNode.insertBefore(i, this.nextSibling), i;
                    }
                }, t(A, C), b.prototype = {
                    nodeName: "#comment",
                    nodeType: z
                }, t(b, C), O.prototype = {
                    nodeName: "#cdata-section",
                    nodeType: H
                }, t(O, C), T.prototype.nodeType = J, t(T, h), w.prototype.nodeType = $, t(w, h),
                    N.prototype.nodeType = G, t(N, h), R.prototype.nodeType = j, t(R, h), D.prototype.nodeName = "#document-fragment",
                    D.prototype.nodeType = X, t(D, h), k.prototype.nodeType = Y, t(k, h), P.prototype.serializeToString = function(e, t) {
                    return e.toString(t);
                }, h.prototype.toString = function(e) {
                    var t = [];
                    return B(this, t, e), t.join("");
                };
                try {
                    Object.defineProperty && (Object.defineProperty(r.prototype, "length", {
                        get: function() {
                            return o(this), this.$length;
                        }
                    }), Object.defineProperty(h.prototype, "textContent", {
                        get: function() {
                            return M(this);
                        },
                        set: function(e) {
                            switch (this.nodeType) {
                                case 1:
                                case 11:
                                    for (;this.firstChild; ) this.removeChild(this.firstChild);
                                    (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
                                    break;

                                default:
                                    this.data = e, this.value = value, this.nodeValue = e;
                            }
                        }
                    }), V = function(e, t, n) {
                        e["$" + t] = n;
                    });
                } catch (ie) {}
                var re = {
                    DOMImplementation: l,
                    XMLSerializer: P
                };
                return re;
            }, c = function() {
                function e(e, a, l, h, p) {
                    function d(e) {
                        if (e > 65535) {
                            e -= 65536;
                            var t = 55296 + (e >> 10), n = 56320 + (1023 & e);
                            return String.fromCharCode(t, n);
                        }
                        return String.fromCharCode(e);
                    }
                    function f(e) {
                        var t = e.slice(1, -1);
                        return t in l ? l[t] : "#" === t.charAt(0) ? d(parseInt(t.substr(1).replace("x", "0x"))) : (p.error("entity not found:" + e),
                            e);
                    }
                    function v(t) {
                        if (t > C) {
                            var n = e.substring(C, t).replace(/&#?\w+;/g, f);
                            E && g(C), h.characters(n, 0, t - C), C = t;
                        }
                    }
                    function g(t, n) {
                        for (;t >= m && (n = y.exec(e)); ) _ = n.index, m = _ + n[0].length, E.lineNumber++;
                        E.columnNumber = t - _ + 1;
                    }
                    for (var _ = 0, m = 0, y = /.+(?:\r\n?|\n)|.*$/g, E = h.locator, S = [ {
                        currentNSMap: a
                    } ], I = {}, C = 0; ;) {
                        try {
                            var A = e.indexOf("<", C);
                            if (0 > A) {
                                if (!e.substr(C).match(/^\s*$/)) {
                                    var b = h.document, O = b.createTextNode(e.substr(C));
                                    b.appendChild(O), h.currentElement = O;
                                }
                                return;
                            }
                            switch (A > C && v(A), e.charAt(A + 1)) {
                                case "/":
                                    var T = e.indexOf(">", A + 3), w = e.substring(A + 2, T), N = S.pop(), R = N.localNSMap;
                                    if (N.tagName != w && p.fatalError("end tag name: " + w + " is not match the current start tagName:" + N.tagName),
                                            h.endElement(N.uri, N.localName, w), R) for (var D in R) h.endPrefixMapping(D);
                                    T++;
                                    break;

                                case "?":
                                    E && g(A), T = c(e, A, h);
                                    break;

                                case "!":
                                    E && g(A), T = s(e, A, h, p);
                                    break;

                                default:
                                    E && g(A);
                                    var k = new u(), T = n(e, A, k, f, p), P = k.length;
                                    if (E) {
                                        if (P) for (var B = 0; P > B; B++) {
                                            var L = k[B];
                                            g(L.offset), L.offset = t(E, {});
                                        }
                                        g(T);
                                    }
                                    !k.closed && o(e, T, k.tagName, I) && (k.closed = !0, l.nbsp || p.warning("unclosed xml attribute")),
                                        i(k, h, S), "http://www.w3.org/1999/xhtml" !== k.uri || k.closed ? T++ : T = r(e, T, k.tagName, f, h);
                            }
                        } catch (U) {
                            p.error("element parse error: " + U), T = -1;
                        }
                        T > C ? C = T : v(Math.max(A, C) + 1);
                    }
                }
                function t(e, t) {
                    return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
                }
                function n(e, t, n, i, r) {
                    for (var o, a, s = ++t, c = v; ;) {
                        var u = e.charAt(s);
                        switch (u) {
                            case "=":
                                if (c === g) o = e.slice(t, s), c = m; else {
                                    if (c !== _) throw new Error("attribute equal must after attrName");
                                    c = m;
                                }
                                break;

                            case "'":
                            case '"':
                                if (c === m) {
                                    if (t = s + 1, s = e.indexOf(u, t), !(s > 0)) throw new Error("attribute value no end '" + u + "' match");
                                    a = e.slice(t, s).replace(/&#?\w+;/g, i), n.add(o, a, t - 1), c = E;
                                } else {
                                    if (c != y) throw new Error('attribute value must after "="');
                                    a = e.slice(t, s).replace(/&#?\w+;/g, i), n.add(o, a, t), r.warning('attribute "' + o + '" missed start quot(' + u + ")!!"),
                                        t = s + 1, c = E;
                                }
                                break;

                            case "/":
                                switch (c) {
                                    case v:
                                        n.setTagName(e.slice(t, s));

                                    case E:
                                    case S:
                                    case I:
                                        c = I, n.closed = !0;

                                    case y:
                                    case g:
                                    case _:
                                        break;

                                    default:
                                        throw new Error("attribute invalid close char('/')");
                                }
                                break;

                            case "":
                                r.error("unexpected end of input");

                            case ">":
                                switch (c) {
                                    case v:
                                        n.setTagName(e.slice(t, s));

                                    case E:
                                    case S:
                                    case I:
                                        break;

                                    case y:
                                    case g:
                                        a = e.slice(t, s), "/" === a.slice(-1) && (n.closed = !0, a = a.slice(0, -1));

                                    case _:
                                        c === _ && (a = o), c == y ? (r.warning('attribute "' + a + '" missed quot(")!!'),
                                            n.add(o, a.replace(/&#?\w+;/g, i), t)) : (r.warning('attribute "' + a + '" missed value!! "' + a + '" instead!!'),
                                            n.add(a, a, t));
                                        break;

                                    case m:
                                        throw new Error("attribute value missed!!");
                                }
                                return s;

                            case "?":
                                u = " ";

                            default:
                                if (" " >= u) switch (c) {
                                    case v:
                                        n.setTagName(e.slice(t, s)), c = S;
                                        break;

                                    case g:
                                        o = e.slice(t, s), c = _;
                                        break;

                                    case y:
                                        var a = e.slice(t, s).replace(/&#?\w+;/g, i);
                                        r.warning('attribute "' + a + '" missed quot(")!!'), n.add(o, a, t);

                                    case E:
                                        c = S;
                                } else switch (c) {
                                    case _:
                                        r.warning('attribute "' + o + '" missed value!! "' + o + '" instead!!'), n.add(o, o, t),
                                            t = s, c = g;
                                        break;

                                    case E:
                                        r.warning('attribute space is required"' + o + '"!!');

                                    case S:
                                        c = g, t = s;
                                        break;

                                    case m:
                                        c = y, t = s;
                                        break;

                                    case I:
                                        throw new Error("elements closed character '/' and '>' must be connected to");
                                }
                        }
                        s++;
                    }
                }
                function i(e, t, n) {
                    for (var i = e.tagName, r = null, o = n[n.length - 1].currentNSMap, s = e.length; s--; ) {
                        var c = e[s], u = c.qName, l = c.value, h = u.indexOf(":");
                        if (h > 0) var p = c.prefix = u.slice(0, h), d = u.slice(h + 1), f = "xmlns" === p && d; else d = u,
                            p = null, f = "xmlns" === u && "";
                        c.localName = d, f !== !1 && (null == r && (r = {}, a(o, o = {})), o[f] = r[f] = l,
                            c.uri = "http://www.w3.org/2000/xmlns/", t.startPrefixMapping(f, l));
                    }
                    for (var s = e.length; s--; ) {
                        c = e[s];
                        var p = c.prefix;
                        p && ("xml" === p && (c.uri = "http://www.w3.org/XML/1998/namespace"), "xmlns" !== p && (c.uri = o[p]));
                    }
                    var h = i.indexOf(":");
                    h > 0 ? (p = e.prefix = i.slice(0, h), d = e.localName = i.slice(h + 1)) : (p = null,
                        d = e.localName = i);
                    var v = e.uri = o[p || ""];
                    if (t.startElement(v, d, i, e), e.closed) {
                        if (t.endElement(v, d, i), r) for (p in r) t.endPrefixMapping(p);
                    } else e.currentNSMap = o, e.localNSMap = r, n.push(e);
                }
                function r(e, t, n, i, r) {
                    if (/^(?:script|textarea)$/i.test(n)) {
                        var o = e.indexOf("</" + n + ">", t), a = e.substring(t + 1, o);
                        if (/[&<]/.test(a)) return /^script$/i.test(n) ? (r.characters(a, 0, a.length),
                            o) : (a = a.replace(/&#?\w+;/g, i), r.characters(a, 0, a.length), o);
                    }
                    return t + 1;
                }
                function o(e, t, n, i) {
                    var r = i[n];
                    return null == r && (r = i[n] = e.lastIndexOf("</" + n + ">")), t > r;
                }
                function a(e, t) {
                    for (var n in e) t[n] = e[n];
                }
                function s(e, t, n, i) {
                    var r = e.charAt(t + 2);
                    switch (r) {
                        case "-":
                            if ("-" === e.charAt(t + 3)) {
                                var o = e.indexOf("-->", t + 4);
                                return o > t ? (n.comment(e, t + 4, o - t - 4), o + 3) : (i.error("Unclosed comment"),
                                    -1);
                            }
                            return -1;

                        default:
                            if ("CDATA[" == e.substr(t + 3, 6)) {
                                var o = e.indexOf("]]>", t + 9);
                                return n.startCDATA(), n.characters(e, t + 9, o - t - 9), n.endCDATA(), o + 3;
                            }
                            var a = h(e, t), s = a.length;
                            if (s > 1 && /!doctype/i.test(a[0][0])) {
                                var c = a[1][0], u = s > 3 && /^public$/i.test(a[2][0]) && a[3][0], l = s > 4 && a[4][0], p = a[s - 1];
                                return n.startDTD(c, u && u.replace(/^(['"])(.*?)\1$/, "$2"), l && l.replace(/^(['"])(.*?)\1$/, "$2")),
                                    n.endDTD(), p.index + p[0].length;
                            }
                    }
                    return -1;
                }
                function c(e, t, n) {
                    var i = e.indexOf("?>", t);
                    if (i) {
                        var r = e.substring(t, i).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
                        if (r) {
                            r[0].length;
                            return n.processingInstruction(r[1], r[2]), i + 2;
                        }
                        return -1;
                    }
                    return -1;
                }
                function u(e) {}
                function l(e, t) {
                    return e.__proto__ = t, e;
                }
                function h(e, t) {
                    var n, i = [], r = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
                    for (r.lastIndex = t, r.exec(e); n = r.exec(e); ) if (i.push(n), n[1]) return i;
                }
                var p = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, d = new RegExp("[\\-\\.0-9" + p.source.slice(1, -1) + "¡¤?-?\\u203F-?]"), f = new RegExp("^" + p.source + d.source + "*(?::" + p.source + d.source + "*)?$"), v = 0, g = 1, _ = 2, m = 3, y = 4, E = 5, S = 6, I = 7, C = function() {};
                C.prototype = {
                    parse: function(t, n, i) {
                        var r = this.domBuilder;
                        r.startDocument(), a(n, n = {}), e(t, n, i, r, this.errorHandler), r.endDocument();
                    }
                }, u.prototype = {
                    setTagName: function(e) {
                        if (!f.test(e)) throw new Error("invalid tagName:" + e);
                        this.tagName = e;
                    },
                    add: function(e, t, n) {
                        if (!f.test(e)) throw new Error("invalid attribute:" + e);
                        this[this.length++] = {
                            qName: e,
                            value: t,
                            offset: n
                        };
                    },
                    length: 0,
                    getLocalName: function(e) {
                        return this[e].localName;
                    },
                    getOffset: function(e) {
                        return this[e].offset;
                    },
                    getQName: function(e) {
                        return this[e].qName;
                    },
                    getURI: function(e) {
                        return this[e].uri;
                    },
                    getValue: function(e) {
                        return this[e].value;
                    }
                }, l({}, l.prototype) instanceof l || (l = function(e, t) {
                    function n() {}
                    n.prototype = t, n = new n();
                    for (t in e) n[t] = e[t];
                    return n;
                });
                var A = {
                    XMLReader: C
                };
                return A;
            }, u = s(), l = c();
            return e.prototype.parseFromString = function(e, i) {
                var r = this.options, o = new l.XMLReader(), a = r.domBuilder || new n(), s = r.errorHandler, c = r.locator, u = r.xmlns || {}, h = {
                    lt: "<",
                    gt: ">",
                    amp: "&",
                    quot: '"',
                    apos: "'"
                };
                return c && a.setDocumentLocator(c), o.errorHandler = t(s, a, c), o.domBuilder = r.domBuilder || a,
                /\/x?html?$/.test(i) && (h.nbsp = "?", h.copy = "?", u[""] = "http://www.w3.org/1999/xhtml"),
                    u.xml = u.xml || "http://www.w3.org/XML/1998/namespace", e ? o.parse(e, u, h) : o.errorHandler.error("invalid document source"),
                    a.document;
            }, n.prototype = {
                startDocument: function() {
                    this.document = new u.DOMImplementation().createDocument(null, null, null), this.locator && (this.document.documentURI = this.locator.systemId);
                },
                startElement: function(e, t, n, r) {
                    var o = this.document, s = o.createElementNS(e, n || t), c = r.length;
                    a(this, s), this.currentElement = s, this.locator && i(this.locator, s);
                    for (var u = 0; c > u; u++) {
                        var e = r.getURI(u), l = r.getValue(u), n = r.getQName(u), h = o.createAttributeNS(e, n);
                        h.getOffset && i(h.getOffset(1), h), h.value = h.nodeValue = l, s.setAttributeNode(h);
                    }
                },
                endElement: function(e, t, n) {
                    var i = this.currentElement;
                    i.tagName;
                    this.currentElement = i.parentNode;
                },
                startPrefixMapping: function(e, t) {},
                endPrefixMapping: function(e) {},
                processingInstruction: function(e, t) {
                    var n = this.document.createProcessingInstruction(e, t);
                    this.locator && i(this.locator, n), a(this, n);
                },
                ignorableWhitespace: function(e, t, n) {},
                characters: function(e, t, n) {
                    if (e = o.apply(this, arguments), this.currentElement && e) {
                        if (this.cdata) {
                            var r = this.document.createCDATASection(e);
                            this.currentElement.appendChild(r);
                        } else {
                            var r = this.document.createTextNode(e);
                            this.currentElement.appendChild(r);
                        }
                        this.locator && i(this.locator, r);
                    }
                },
                skippedEntity: function(e) {},
                endDocument: function() {
                    this.document.normalize();
                },
                setDocumentLocator: function(e) {
                    (this.locator = e) && (e.lineNumber = 0);
                },
                comment: function(e, t, n) {
                    e = o.apply(this, arguments);
                    var r = this.document.createComment(e);
                    this.locator && i(this.locator, r), a(this, r);
                },
                startCDATA: function() {
                    this.cdata = !0;
                },
                endCDATA: function() {
                    this.cdata = !1;
                },
                startDTD: function(e, t, n) {
                    var r = this.document.implementation;
                    if (r && r.createDocumentType) {
                        var o = r.createDocumentType(e, t, n);
                        this.locator && i(this.locator, o), a(this, o);
                    }
                },
                warning: function(e) {
                    console.warn("[xmldom warning]	" + e, r(this.locator));
                },
                error: function(e) {
                    console.error("[xmldom error]	" + e, r(this.locator));
                },
                fatalError: function(e) {
                    throw console.error("[xmldom fatalError]	" + e, r(this.locator)), e;
                }
            }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(e) {
                n.prototype[e] = function() {
                    return null;
                };
            }), {
                DOMParser: e
            };
        }), Re = function(e, t, n, i, r, o) {
            var a = function() {
                function e(t, n) {
                    void 0 === n && (n = e.DEFAULT_MAX_WRAPPER_DEPTH), this._domParser = t || e.createDOMParser(),
                        this._maxWrapperDepth = n;
                }
                return e.createDOMParser = function() {
                    return new o.DOMParser();
                }, e.prototype.setMaxWrapperDepth = function(e) {
                    this._maxWrapperDepth = e;
                }, e.prototype.parseVast = function(e) {
                    if (!e) throw new Error("VAST data is missing");
                    var n = this._domParser.parseFromString(decodeURIComponent(e.data).trim(), "text/xml"), i = [], r = [];
                    if (null == n) throw new Error("VAST xml data is missing");
                    if (null == n.documentElement) throw new Error("VAST xml data is missing");
                    if ("VAST" !== n.documentElement.nodeName) throw new Error("VAST xml is invalid - document element must be VAST but was " + n.documentElement.nodeName);
                    for (var o = n.documentElement.childNodes, a = 0; a < o.length; a++) {
                        var s = o[a];
                        "Error" === s.nodeName && r.push(this.parseNodeText(s));
                    }
                    for (var a = 0; a < o.length; a++) {
                        var s = o[a];
                        if (0 === i.length && "Ad" === s.nodeName) {
                            var c = this.parseAdElement(s);
                            null != c && i.push(c);
                        }
                    }
                    if (0 === i.length) throw new Error("VAST Ad tag is missing");
                    return new t.Vast(i, r, e.tracking);
                }, e.prototype.retrieveVast = function(e, t, n, i, r) {
                    var o = this;
                    void 0 === r && (r = 0);
                    var a = this.parseVast(e);
                    this.applyParentURLs(a, i);
                    var s = a.getWrapperURL();
                    if (!s) return Promise.resolve(a);
                    if (r >= this._maxWrapperDepth) throw new Error("VAST wrapper depth exceeded");
                    return t.Sdk.logInfo("Unity Ads is requesting VAST ad unit from " + s), n.get(s, [], {
                        retries: 5,
                        retryDelay: 5e3,
                        followRedirects: !0,
                        retryWithConnectionEvents: !1
                    }).then(function(e) {
                        return o.retrieveVast({
                            data: e.response,
                            tracking: {}
                        }, t, n, a, r + 1);
                    });
                }, e.prototype.applyParentURLs = function(e, t) {
                    if (t) {
                        for (var n = 0, i = t.getAd().getErrorURLTemplates(); n < i.length; n++) {
                            var r = i[n];
                            e.getAd().addErrorURLTemplate(r);
                        }
                        for (var o = 0, a = t.getAd().getImpressionURLTemplates(); o < a.length; o++) {
                            var s = a[o];
                            e.getAd().addImpressionURLTemplate(s);
                        }
                        for (var c = 0, u = t.getAd().getVideoClickTrackingURLTemplates(); c < u.length; c++) {
                            var l = u[c];
                            e.getAd().addVideoClickTrackingURLTemplate(l);
                        }
                        for (var h = 0, p = [ "creativeView", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "mute", "unmute" ]; h < p.length; h++) for (var d = p[h], f = 0, v = t.getTrackingEventUrls(d); f < v.length; f++) {
                            var g = v[f];
                            e.addTrackingEventUrl(d, g);
                        }
                    }
                }, e.prototype.parseNodeText = function(e) {
                    return e && (e.textContent || e.text);
                }, e.prototype.parseAdElement = function(e) {
                    for (var t, n = e.childNodes, i = 0; i < n.length; i++) {
                        var r = n[i];
                        if ("Wrapper" === r.nodeName) {
                            t = this.parseWrapperElement(r);
                            break;
                        }
                        if ("InLine" === r.nodeName) {
                            t = this.parseInLineElement(r);
                            break;
                        }
                    }
                    return t && t.setId(e.getAttribute("id")), t;
                }, e.prototype.parseWrapperElement = function(e) {
                    return this.parseInLineElement(e);
                }, e.prototype.parseInLineElement = function(e) {
                    for (var t = new n.VastAd(), i = e.childNodes, r = 0; r < i.length; r++) {
                        var o = i[r], a = this.parseNodeText(o);
                        switch (o.nodeName) {
                            case "Error":
                                a && t.addErrorURLTemplate(a);
                                break;

                            case "Impression":
                                a && t.addImpressionURLTemplate(a);
                                break;

                            case "Creatives":
                                for (var s = this.childsByName(o, "Creative"), c = 0; c < s.length; c++) for (var u = s[c], l = u.childNodes, h = 0; h < l.length; h++) {
                                    var p = l[h], d = void 0;
                                    switch (p.nodeName) {
                                        case "Linear":
                                            0 === t.getCreatives().length && (d = this.parseCreativeLinearElement(p), d && t.addCreative(d));
                                    }
                                }
                                break;

                            case "VASTAdTagURI":
                                a && t.addWrapperURL(a.trim());
                        }
                    }
                    return t;
                }, e.prototype.parseCreativeLinearElement = function(e) {
                    var t = new i.VastCreativeLinear();
                    if (t.setDuration(this.parseDuration(this.parseNodeText(this.childByName(e, "Duration")))),
                        -1 === t.getDuration() && "Wrapper" !== e.parentNode.parentNode.parentNode.nodeName) return null;
                    var n = e.getAttribute("skipoffset");
                    if (null == n) t.setSkipDelay(null); else if ("%" === n.charAt(n.length - 1)) {
                        var o = parseInt(n, 10);
                        t.setSkipDelay(t.getDuration() * (o / 100));
                    } else t.setSkipDelay(this.parseDuration(n));
                    var a = this.childByName(e, "VideoClicks");
                    if (null != a) {
                        t.setVideoClickThroughURLTemplate(this.parseNodeText(this.childByName(a, "ClickThrough")));
                        for (var s = this.childsByName(a, "ClickTracking"), c = 0; c < s.length; c++) {
                            var u = s[c], l = this.parseNodeText(u);
                            null != l && t.addVideoClickTrackingURLTemplate(l);
                        }
                    }
                    for (var h = this.childsByName(e, "TrackingEvents"), c = 0; c < h.length; c++) for (var p = h[c], d = this.childsByName(p, "Tracking"), f = 0; f < d.length; f++) {
                        var v = d[f], g = v.getAttribute("event"), _ = this.parseNodeText(v);
                        null != g && null != _ && t.addTrackingEvent(g, _);
                    }
                    var m = this.childsByName(e, "MediaFiles");
                    if (m.length > 0) for (var y = m[0], E = this.childsByName(y, "MediaFile"), c = 0; c < E.length; c++) {
                        var S = E[c], I = new r.VastMediaFile(this.parseNodeText(S).trim(), S.getAttribute("delivery"), S.getAttribute("codec"), S.getAttribute("type"), parseInt(S.getAttribute("bitrate") || 0, 10), parseInt(S.getAttribute("minBitrate") || 0, 10), parseInt(S.getAttribute("maxBitrate") || 0, 10), parseInt(S.getAttribute("width") || 0, 10), parseInt(S.getAttribute("height") || 0, 10));
                        t.addMediaFile(I);
                    }
                    return t;
                }, e.prototype.parseDuration = function(e) {
                    if (null == e) return -1;
                    var t = e.split(":");
                    if (3 !== t.length) return -1;
                    var n = t[2].split("."), i = parseInt(n[0], 10);
                    2 === n.length && (i += parseFloat("0." + n[1]));
                    var r = 60 * parseInt(t[1], 10), o = 60 * parseInt(t[0], 10) * 60;
                    return isNaN(o) || isNaN(r) || isNaN(i) || r > 3600 || i > 60 ? -1 : o + r + i;
                }, e.prototype.childByName = function(e, t) {
                    for (var n = e.childNodes, i = 0; i < n.length; i++) {
                        var r = n[i];
                        if (r.nodeName === t) return r;
                    }
                }, e.prototype.childsByName = function(e, t) {
                    for (var n = [], i = e.childNodes, r = 0; r < i.length; r++) {
                        var o = i[r];
                        o.nodeName === t && n.push(o);
                    }
                    return n;
                }, e.DEFAULT_MAX_WRAPPER_DEPTH = 8, e;
            }();
            return e.VastParser = a, e;
        }(Re, be, we, Te, Ne, r), De = function(e, t, n, i, r, o, a, s, c, u, l, h, p, d, f, v, g, _, m, y, E, S, I) {
            var C = function() {
                function e(e) {
                    var t = this;
                    this._showing = !1, this._initialized = !1, this._mustReinitialize = !1, this._nativeBridge = e,
                    window && window.addEventListener && window.addEventListener("error", function(e) {
                        return t.onError(e);
                    }, !1);
                }
                return e.prototype.initialize = function() {
                    var e = this;
                    return this._nativeBridge.Sdk.loadComplete().then(function(t) {
                        return e._deviceInfo = new n.DeviceInfo(e._nativeBridge), e._wakeUpManager = new m.WakeUpManager(e._nativeBridge),
                            e._cacheManager = new a.CacheManager(e._nativeBridge, e._wakeUpManager), e._request = new c.Request(e._nativeBridge, e._wakeUpManager),
                            e._resolve = new _.Resolve(e._nativeBridge), e._eventManager = new p.EventManager(e._nativeBridge, e._request),
                            e._clientInfo = new l.ClientInfo(e._nativeBridge.getPlatform(), t), e._deviceInfo.fetch();
                    }).then(function() {
                        if (e._clientInfo.getPlatform() === v.Platform.ANDROID) document.body.classList.add("android"),
                            e._nativeBridge.setApiLevel(e._deviceInfo.getApiLevel()); else if (e._clientInfo.getPlatform() === v.Platform.IOS) {
                            var t = e._deviceInfo.getModel();
                            t.match(/iphone/i) || t.match(/ipod/i) ? document.body.classList.add("iphone") : t.match(/ipad/i) && document.body.classList.add("ipad");
                        }
                        return e._sessionManager = new u.SessionManager(e._nativeBridge, e._clientInfo, e._deviceInfo, e._eventManager),
                            e._initializedAt = e._configJsonCheckedAt = Date.now(), e._nativeBridge.Sdk.initComplete(),
                            e._wakeUpManager.setListenConnectivity(!0), e._wakeUpManager.onNetworkConnected.subscribe(function() {
                            return e.onNetworkConnected();
                        }), e._nativeBridge.getPlatform() === v.Platform.IOS ? (e._wakeUpManager.setListenAppForeground(!0),
                            e._wakeUpManager.onAppForeground.subscribe(function() {
                                return e.onAppForeground();
                            })) : (e._wakeUpManager.setListenScreen(!0), e._wakeUpManager.onScreenOn.subscribe(function() {
                            return e.onScreenOn();
                        })), e._cacheManager.cleanCache(), e.setupTestEnvironment();
                    }).then(function() {
                        return i.ConfigManager.fetch(e._nativeBridge, e._request, e._clientInfo, e._deviceInfo);
                    }).then(function(t) {
                        return e._configuration = t, e._sessionManager.create();
                    }).then(function() {
                        var t = e._configuration.getDefaultPlacement();
                        return e._nativeBridge.Placement.setDefaultPlacement(t.getId()), e.setPlacementStates(s.PlacementState.NOT_AVAILABLE),
                            e._campaignManager = new o.CampaignManager(e._nativeBridge, e._request, e._clientInfo, e._deviceInfo, new E.VastParser()),
                            e._campaignManager.onCampaign.subscribe(function(t) {
                                return e.onCampaign(t);
                            }), e._campaignManager.onVastCampaign.subscribe(function(t) {
                            return e.onVastCampaign(t);
                        }), e._campaignManager.onNoFill.subscribe(function(t) {
                            return e.onNoFill(t);
                        }), e._campaignManager.onError.subscribe(function(t) {
                            return e.onCampaignError(t);
                        }), e._refillTimestamp = 0, e._campaignManager.request();
                    }).then(function() {
                        return e._initialized = !0, e._eventManager.sendUnsentSessions();
                    })["catch"](function(t) {
                        t instanceof Error && (t = {
                            message: t.message,
                            name: t.name,
                            stack: t.stack
                        }, t.message === f.UnityAdsError[f.UnityAdsError.INVALID_ARGUMENT] && e._nativeBridge.Listener.sendErrorEvent(f.UnityAdsError[f.UnityAdsError.INVALID_ARGUMENT], "Game ID is not valid")),
                            e._nativeBridge.Sdk.logError(JSON.stringify(t)), h.Diagnostics.trigger(e._eventManager, {
                            type: "initialization_error",
                            error: t
                        }, e._clientInfo, e._deviceInfo);
                    });
                }, e.prototype.show = function(e, n, i) {
                    var o = this;
                    if (i(t.CallbackStatus.OK), this._showing) return void this.showError(!1, e, "Can't show a new ad unit when ad unit is already open");
                    var a = this._configuration.getPlacement(e);
                    return a ? this._campaign ? (this._nativeBridge.getPlatform() !== v.Platform.IOS || this._campaign.getBypassAppSheet() || this._nativeBridge.AppSheet.prepare({
                        id: parseInt(this._campaign.getAppStoreId(), 10)
                    }), this._showing = !0, this.shouldReinitialize().then(function(e) {
                        o._mustReinitialize = e;
                    }), this._configuration.getCacheMode() === r.CacheMode.ALLOWED && this._cacheManager.stop(),
                        void g.MetaDataManager.fetchPlayerMetaData(this._nativeBridge).then(function(e) {
                            e && o._sessionManager.setGamerServerId(e.getServerId()), o._adUnit = y.AdUnitFactory.createAdUnit(o._nativeBridge, o._sessionManager, a, o._campaign, o._configuration),
                                o._adUnit.setNativeOptions(n), o._adUnit.onNewAdRequestAllowed.subscribe(function() {
                                return o.onNewAdRequestAllowed();
                            }), o._adUnit.onClose.subscribe(function() {
                                return o.onClose();
                            }), o._adUnit.show().then(function() {
                                o._sessionManager.sendShow(o._adUnit);
                            }), o._campaign = null, o.setPlacementStates(s.PlacementState.WAITING), o._refillTimestamp = 0,
                                o._mustRefill = !0;
                        })) : void this.showError(!0, e, "Campaign not found") : void this.showError(!0, e, "No such placement: " + e);
                }, e.prototype.showError = function(e, t, n) {
                    this._nativeBridge.Sdk.logError("Show invocation failed: " + n), this._nativeBridge.Listener.sendErrorEvent(f.UnityAdsError[f.UnityAdsError.SHOW_ERROR], n),
                    e && this._nativeBridge.Listener.sendFinishEvent(t, d.FinishState.ERROR);
                }, e.prototype.setPlacementStates = function(e) {
                    var t = this._configuration.getPlacements();
                    for (var n in t) if (t.hasOwnProperty(n)) {
                        var i = t[n];
                        this._nativeBridge.Placement.setPlacementState(i.getId(), e), e === s.PlacementState.READY && this._nativeBridge.Listener.sendReadyEvent(i.getId());
                    }
                }, e.prototype.onCampaign = function(e) {
                    var t = this;
                    this._campaign = e;
                    var n = this._configuration.getCacheMode(), i = function(e) {
                        return t._cacheManager.cache(e, {
                            retries: 5
                        }).then(function(e) {
                            var n = e[0], i = e[1];
                            if (n === a.CacheStatus.OK) return t._cacheManager.getFileUrl(i);
                            throw n;
                        })["catch"](function(n) {
                            if (n !== a.CacheStatus.STOPPED) return t.onError(n), e;
                            throw n;
                        });
                    }, o = function() {
                        return i(e.getVideoUrl()).then(function(t) {
                            e.setVideoUrl(t), e.setVideoCached(!0);
                        }).then(function() {
                            return i(e.getLandscapeUrl());
                        }).then(function(t) {
                            return e.setLandscapeUrl(t);
                        }).then(function() {
                            return i(e.getPortraitUrl());
                        }).then(function(t) {
                            return e.setPortraitUrl(t);
                        }).then(function() {
                            return i(e.getGameIcon());
                        }).then(function(t) {
                            return e.setGameIcon(t);
                        })["catch"](function(e) {
                            e === a.CacheStatus.STOPPED && t._nativeBridge.Sdk.logInfo("Caching was stopped, using streaming instead");
                        });
                    }, c = function() {
                        t.setPlacementStates(s.PlacementState.READY);
                    };
                    if (n === r.CacheMode.FORCED) o().then(function() {
                        if (t._showing) var e = t._adUnit.onClose.subscribe(function() {
                            t._adUnit.onClose.unsubscribe(e), c();
                        }); else c();
                    }); else if (n === r.CacheMode.ALLOWED) if (this._showing) var u = this._adUnit.onClose.subscribe(function() {
                        t._adUnit.onClose.unsubscribe(u), o(), c();
                    }); else o(), c(); else c();
                }, e.prototype.onVastCampaign = function(e) {
                    var t = this;
                    this._campaign = e;
                    var n = this._configuration.getCacheMode(), i = function(e) {
                        return t._cacheManager.cache(e, {
                            retries: 5
                        }).then(function(e) {
                            var n = e[0], i = e[1];
                            if (n === a.CacheStatus.OK) return t._cacheManager.getFileUrl(i);
                            throw n;
                        })["catch"](function(n) {
                            if (n !== a.CacheStatus.STOPPED) return t.onError(n), e;
                            throw n;
                        });
                    }, o = function() {
                        var n = e.getVideoUrl();
                        return t._request.head(n, [], {
                            retries: 5,
                            retryDelay: 1e3,
                            followRedirects: !0,
                            retryWithConnectionEvents: !1
                        }).then(function(r) {
                            var o = r.url || n;
                            i(o).then(function(t) {
                                e.setVideoUrl(t), e.setVideoCached(!0);
                            })["catch"](function(e) {
                                e === a.CacheStatus.STOPPED && t._nativeBridge.Sdk.logInfo("Caching was stopped, using streaming instead");
                            });
                        })["catch"](function(e) {
                            t._nativeBridge.Sdk.logError("Caching failed to get VAST video URL location: " + e);
                        });
                    }, c = function() {
                        t.setPlacementStates(s.PlacementState.READY);
                    };
                    if (n === r.CacheMode.FORCED) o().then(function() {
                        if (t._showing) var e = t._adUnit.onClose.subscribe(function() {
                            t._adUnit.onClose.unsubscribe(e), c();
                        }); else c();
                    }); else if (n === r.CacheMode.ALLOWED) if (this._showing) var u = this._adUnit.onClose.subscribe(function() {
                        t._adUnit.onClose.unsubscribe(u), o(), c();
                    }); else o(), c(); else c();
                }, e.prototype.onNoFill = function(e) {
                    this._refillTimestamp = Date.now() + 1e3 * e, this._nativeBridge.Sdk.logInfo("Unity Ads server returned no fill, no ads to show"),
                        this.setPlacementStates(s.PlacementState.NO_FILL);
                }, e.prototype.onCampaignError = function(e) {
                    e instanceof Error && (e = {
                        message: e.message,
                        name: e.name,
                        stack: e.stack
                    }), this._nativeBridge.Sdk.logError(JSON.stringify(e)), h.Diagnostics.trigger(this._eventManager, {
                        type: "campaign_request_failed",
                        error: e
                    }, this._clientInfo, this._deviceInfo), this.onNoFill(3600);
                }, e.prototype.onNewAdRequestAllowed = function() {
                    this._mustRefill && (this._mustRefill = !1, this._campaignManager.request());
                }, e.prototype.onClose = function() {
                    this._nativeBridge.Sdk.logInfo("Closing Unity Ads ad unit"), this._showing = !1,
                        this._mustReinitialize ? (this._nativeBridge.Sdk.logInfo("Unity Ads webapp has been updated, reinitializing Unity Ads"),
                            this.reinitialize()) : (this._mustRefill && (this._mustRefill = !1, this._campaignManager.request()),
                            this._sessionManager.create());
                }, e.prototype.isShowing = function() {
                    return this._showing;
                }, e.prototype.onNetworkConnected = function() {
                    var e = this;
                    !this.isShowing() && this._initialized && this.shouldReinitialize().then(function(t) {
                        t ? e.isShowing() ? e._mustReinitialize = !0 : (e._nativeBridge.Sdk.logInfo("Unity Ads webapp has been updated, reinitializing Unity Ads"),
                            e.reinitialize()) : (e.checkRefill(), e._eventManager.sendUnsentSessions());
                    });
                }, e.prototype.onScreenOn = function() {
                    this.checkRefill();
                }, e.prototype.onAppForeground = function() {
                    this.checkRefill();
                }, e.prototype.checkRefill = function() {
                    0 !== this._refillTimestamp && Date.now() > this._refillTimestamp && (this._refillTimestamp = 0,
                        this._campaignManager.request());
                }, e.prototype.onError = function(e) {
                    return h.Diagnostics.trigger(this._eventManager, {
                        type: "js_error",
                        message: e.message,
                        url: e.filename,
                        line: e.lineno,
                        column: e.colno,
                        object: e.error
                    }, this._clientInfo, this._deviceInfo), !0;
                }, e.prototype.reinitialize = function() {
                    this._nativeBridge.Sdk.reinitialize();
                }, e.prototype.getConfigJson = function() {
                    return this._request.get(this._clientInfo.getConfigUrl() + "?ts=" + Date.now() + "&sdkVersion=" + this._clientInfo.getSdkVersion());
                }, e.prototype.shouldReinitialize = function() {
                    var e = this;
                    return this._clientInfo.getWebviewHash() ? Date.now() - this._configJsonCheckedAt <= 9e5 ? Promise.resolve(!1) : this.getConfigJson().then(function(t) {
                        e._configJsonCheckedAt = Date.now();
                        var n = I.JsonParser.parse(t.response);
                        return n.hash !== e._clientInfo.getWebviewHash();
                    })["catch"](function(e) {
                        return !1;
                    }) : Promise.resolve(!1);
                }, e.prototype.setupTestEnvironment = function() {
                    var e = this;
                    this._nativeBridge.Storage.get(S.StorageType.PUBLIC, "test.serverUrl.value").then(function(t) {
                        t && (i.ConfigManager.setTestBaseUrl(t), o.CampaignManager.setTestBaseUrl(t), u.SessionManager.setTestBaseUrl(t),
                            e._nativeBridge.Storage["delete"](S.StorageType.PUBLIC, "test.serverUrl"), e._nativeBridge.Storage.write(S.StorageType.PUBLIC));
                    })["catch"](function(e) {
                        var t = e[0];
                        switch (t) {
                            case S.StorageError[S.StorageError.COULDNT_GET_VALUE]:
                                break;

                            default:
                                throw new Error(t);
                        }
                    }), this._nativeBridge.Storage.get(S.StorageType.PUBLIC, "test.kafkaUrl.value").then(function(t) {
                        t && (h.Diagnostics.setTestBaseUrl(t), e._nativeBridge.Storage["delete"](S.StorageType.PUBLIC, "test.kafkaUrl"),
                            e._nativeBridge.Storage.write(S.StorageType.PUBLIC));
                    })["catch"](function(e) {
                        var t = e[0];
                        switch (t) {
                            case S.StorageError[S.StorageError.COULDNT_GET_VALUE]:
                                break;

                            default:
                                throw new Error(t);
                        }
                    });
                }, e;
            }();
            return e.WebView = C, e;
        }(De, L, M, Y, x, J, X, I, $, ee, ne, ie, re, E, te, a, j, oe, ae, Ae, Re, b, G),
            ke = function(e) {
                var t = function() {
                    function e() {}
                    return e.prototype.handleInvocation = function(t) {
                        var n = new XMLHttpRequest();
                        n.open("POST", e._nativeUrl + "/handleInvocation", !1), n.send(t);
                    }, e.prototype.handleCallback = function(t, n, i) {
                        var r = new XMLHttpRequest();
                        r.open("POST", e._nativeUrl + "/handleCallback", !1), r.send('{"id":"' + t + '","status":"' + n + '","parameters":' + i + "}");
                    }, e._nativeUrl = "https://webviewbridge.unityads.unity3d.com", e;
                }();
                return e.IosWebViewBridge = t, e;
            }(ke), Array.prototype.forEach || (Array.prototype.forEach = function(e, t) {
            if ("function" != typeof e) throw new TypeError(e + " is not a function!");
            for (var n = this.length, i = 0; n > i; i++) e.call(t, this[i], i, this);
        }), "classList" in document.documentElement || !Object.defineProperty || "undefined" == typeof HTMLElement || Object.defineProperty(HTMLElement.prototype, "classList", {
            get: function() {
                function e(e) {
                    return function(n) {
                        var i = t.className.split(/\s+/), r = i.indexOf(n);
                        e(i, r, n), t.className = i.join(" ");
                    };
                }
                var t = this, n = {
                    add: e(function(e, t, n) {
                        ~t || e.push(n);
                    }),
                    remove: e(function(e, t) {
                        ~t && e.splice(t, 1);
                    }),
                    toggle: e(function(e, t, n) {
                        ~t ? e.splice(t, 1) : e.push(n);
                    }),
                    contains: function(e) {
                        return !!~t.className.split(/\s+/).indexOf(e);
                    },
                    item: function(e) {
                        return t.className.split(/\s+/)[e] || null;
                    }
                };
                return Object.defineProperty(n, "length", {
                    get: function() {
                        return t.className.split(/\s+/).length;
                    }
                }), n;
            }
        }), o = void 0, Pe = function(e, t, n, i, r, o) {
            var a = function(e) {
                var t = document.body.classList.contains("landscape") ? "landscape" : document.body.classList.contains("portrait") ? "portrait" : null, n = window.innerWidth / window.innerHeight >= 1 ? "landscape" : "portrait";
                t ? t !== n && (document.body.classList.remove(t), document.body.classList.add(n)) : document.body.classList.add(n);
            };
            a(null), window.addEventListener("resize", a, !1);
            var s = null;
            switch (o.Url.getQueryParameter(location.search, "platform")) {
                case "android":
                    s = new t.NativeBridge(window.webviewbridge, r.Platform.ANDROID);
                    break;

                case "ios":
                    s = new t.NativeBridge(new i.IosWebViewBridge(), r.Platform.IOS, !1);
                    break;

                default:
                    throw new Error("Unity Ads webview init failure: no platform defined, unable to initialize native bridge");
            }
            var c = window;
            return c.nativebridge = s, c.webview = new n.WebView(s), c.webview.initialize(),
                e;
        }(Pe, L, De, ke, a, F);
    }(); }, false);