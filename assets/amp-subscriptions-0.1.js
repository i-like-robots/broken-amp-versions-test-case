(self.AMP = self.AMP || []).push({
  n: "amp-subscriptions",
  v: "1910302211460",
  f: function(AMP, _) {
    var h,
      aa =
        "function" == typeof Object.create
          ? Object.create
          : function(a) {
              function b() {}
              b.prototype = a;
              return new b();
            },
      ba;
    if ("function" == typeof Object.setPrototypeOf) ba = Object.setPrototypeOf;
    else {
      var ca;
      a: {
        var da = { a: !0 },
          ea = {};
        try {
          ea.__proto__ = da;
          ca = ea.a;
          break a;
        } catch (a) {}
        ca = !1;
      }
      ba = ca
        ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
              throw new TypeError(a + " is not extensible");
            return a;
          }
        : null;
    }
    var fa = ba;
    function ha(a, b) {
      a.prototype = aa(b.prototype);
      a.prototype.constructor = a;
      if (fa) fa(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Gb = b.prototype;
    }
    var ia = Object.prototype.hasOwnProperty;
    function ja() {
      var a,
        b = Object.create(null);
      a && Object.assign(b, a);
      return b;
    }
    function p(a) {
      return a || {};
    }
    function r() {
      var a, b;
      this.promise = new Promise(function(c, d) {
        a = c;
        b = d;
      });
      this.resolve = a;
      this.reject = b;
    }
    function ka(a, b) {
      b = void 0 === b ? "" : b;
      try {
        return decodeURIComponent(a);
      } catch (c) {
        return b;
      }
    }
    var la = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
    function v(a) {
      var b = Object.create(null);
      if (!a) return b;
      for (var c; (c = la.exec(a)); ) {
        var d = ka(c[1], c[1]),
          e = c[2] ? ka(c[2].replace(/\+/g, " "), c[2]) : "";
        b[d] = e;
      }
      return b;
    }
    var ma = "";
    function na() {
      var a,
        b = a || self;
      if (b.__AMP_MODE) var c = b.__AMP_MODE;
      else {
        c = b;
        var d = self.AMP_CONFIG || {},
          e = !!d.test || !1,
          f = v(c.location.originalHash || c.location.hash);
        d = d.spt;
        var g = v(c.location.search);
        ma ||
          (ma =
            c.AMP_CONFIG && c.AMP_CONFIG.v
              ? c.AMP_CONFIG.v
              : "011910302211460");
        c = {
          localDev: !1,
          development: !!(
            0 <=
              ["1", "actions", "amp", "amp4ads", "amp4email"].indexOf(
                f.development
              ) || c.AMP_DEV_MODE
          ),
          examiner: "2" == f.development,
          geoOverride: f["amp-geo"],
          userLocationOverride: f["amp-user-location"],
          minified: !0,
          lite: void 0 != g.amp_lite,
          test: e,
          log: f.log,
          version: "1910302211460",
          rtvVersion: ma,
          singlePassType: d
        };
        c = b.__AMP_MODE = c;
      }
      return c;
    }
    var B = self.AMP_CONFIG || {},
      ra = {
        thirdParty: B.thirdPartyUrl || "https://3p.ampproject.net",
        thirdPartyFrameHost: B.thirdPartyFrameHost || "ampproject.net",
        thirdPartyFrameRegex:
          ("string" == typeof B.thirdPartyFrameRegex
            ? new RegExp(B.thirdPartyFrameRegex)
            : B.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/,
        cdn: B.cdnUrl || "https://cdn.ampproject.org",
        cdnProxyRegex:
          ("string" == typeof B.cdnProxyRegex
            ? new RegExp(B.cdnProxyRegex)
            : B.cdnProxyRegex) ||
          /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,
        localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
        errorReporting:
          B.errorReportingUrl || "https://amp-error-reporting.appspot.com/r",
        localDev: B.localDev || !1,
        trustedViewerHosts: [
          /(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,
          /(^|\.)gmail\.(com|dev)$/
        ]
      };
    self.__AMP_LOG = self.__AMP_LOG || {
      user: null,
      dev: null,
      userForEmbed: null
    };
    var C = self.__AMP_LOG;
    function D() {
      if (!C.user) throw Error("failed to call initLogConstructor");
      return C.user;
    }
    function sa() {
      if (C.dev) return C.dev;
      throw Error("failed to call initLogConstructor");
    }
    function E(a, b, c, d, e) {
      return D().assert(
        a,
        b,
        c,
        d,
        e,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0
      );
    }
    function ta() {
      var a = 100;
      this.kb = a;
      this.L = this.Pa = 0;
      this.ma = Object.create(null);
    }
    ta.prototype.has = function(a) {
      return !!this.ma[a];
    };
    ta.prototype.get = function(a) {
      var b = this.ma[a];
      if (b) return (b.access = ++this.L), b.payload;
    };
    ta.prototype.put = function(a, b) {
      this.has(a) || this.Pa++;
      this.ma[a] = { payload: b, access: this.L };
      if (!(this.Pa <= this.kb)) {
        sa().warn("lru-cache", "Trimming LRU cache");
        a = this.ma;
        var c = this.L + 1,
          d;
        for (d in a) {
          var e = a[d].access;
          if (e < c) {
            c = e;
            var f = d;
          }
        }
        void 0 !== f && (delete a[f], this.Pa--);
      }
    };
    var ua = p({ c: !0, v: !0, a: !0, ad: !0, action: !0 }),
      va,
      wa,
      xa = /[?&]amp_js[^&]*/,
      ya = /[?&]amp_gsa[^&]*/,
      za = /[?&]amp_r[^&]*/,
      Aa = /[?&]amp_kit[^&]*/,
      Ba = /[?&]usqp[^&]*/;
    function Ca(a) {
      return a.origin || F(a.location.href).origin;
    }
    function F(a) {
      var b;
      va ||
        ((va = self.document.createElement("a")),
        (wa = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new ta())));
      var c = b ? null : wa,
        d = va;
      if (c && c.has(a)) a = c.get(a);
      else {
        d.href = a;
        d.protocol || (d.href = d.href);
        var e = {
          href: d.href,
          protocol: d.protocol,
          host: d.host,
          hostname: d.hostname,
          port: "0" == d.port ? "" : d.port,
          pathname: d.pathname,
          search: d.search,
          hash: d.hash,
          origin: null
        };
        "/" !== e.pathname[0] && (e.pathname = "/" + e.pathname);
        if (
          ("http:" == e.protocol && 80 == e.port) ||
          ("https:" == e.protocol && 443 == e.port)
        )
          (e.port = ""), (e.host = e.hostname);
        e.origin =
          d.origin && "null" != d.origin
            ? d.origin
            : "data:" != e.protocol && e.host
            ? e.protocol + "//" + e.host
            : e.href;
        c && c.put(a, e);
        a = e;
      }
      return a;
    }
    function Da(a, b) {
      b = encodeURIComponent("crypt") + "=" + encodeURIComponent(b);
      if (b) {
        a = a.split("#", 2);
        var c = a[0].split("?", 2);
        b = c[0] + (c[1] ? "?" + c[1] + "&" + b : "?" + b);
        b += a[1] ? "#" + a[1] : "";
      } else b = a;
      return b;
    }
    function Ea(a, b) {
      var c = void 0 === c ? "source" : c;
      E(null != a, "%s %s must be available", b, c);
      var d = a;
      a = d;
      "string" == typeof a && (a = F(a));
      var e;
      (e =
        "https:" == a.protocol ||
        "localhost" == a.hostname ||
        "127.0.0.1" == a.hostname) ||
        ((a = a.hostname),
        (e = a.length - 10),
        (e = 0 <= e && a.indexOf(".localhost", e) == e));
      E(
        e || /^(\/\/)/.test(d),
        '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',
        b,
        c,
        d
      );
      return d;
    }
    function Fa(a) {
      var b = "";
      try {
        "localStorage" in a &&
          (b = a.localStorage.getItem("amp-experiment-toggles"));
      } catch (e) {
        sa().warn(
          "EXPERIMENTS",
          "Failed to retrieve experiments from localStorage."
        );
      }
      var c = b ? b.split(/\s*,\s*/g) : [];
      a = Object.create(null);
      for (var d = 0; d < c.length; d++)
        0 != c[d].length &&
          ("-" == c[d][0] ? (a[c[d].substr(1)] = !1) : (a[c[d]] = !0));
      return a;
    }
    function G(a, b) {
      a = a.__AMP_TOP || (a.__AMP_TOP = a);
      return H(a, b);
    }
    function K(a, b) {
      var c = Ga(a);
      c = L(c);
      return H(c, b);
    }
    function Ga(a) {
      return a.nodeType
        ? G((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a)
        : a;
    }
    function L(a) {
      a = Ga(a);
      return a.isSingleDoc() ? a.win : a;
    }
    function H(a, b) {
      Ha(a, b);
      var c = Ia(a);
      a = c[b];
      a.obj ||
        ((a.obj = new a.ctor(a.context)),
        (a.ctor = null),
        (a.context = null),
        a.resolve && a.resolve(a.obj));
      return a.obj;
    }
    function Ja(a, b) {
      var c = Ka(a, b);
      if (c) return c;
      a = Ia(a);
      a[b] = La();
      return a[b].promise;
    }
    function Ka(a, b) {
      var c = Ia(a)[b];
      if (c) {
        if (c.promise) return c.promise;
        H(a, b);
        return (c.promise = Promise.resolve(c.obj));
      }
      return null;
    }
    function Ia(a) {
      var b = a.__AMP_SERVICES;
      b || (b = a.__AMP_SERVICES = {});
      return b;
    }
    function Ha(a, b) {
      a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
      return !(!a || (!a.ctor && !a.obj));
    }
    function La() {
      var a = new r(),
        b = a,
        c = b.promise,
        d = b.resolve;
      b = b.reject;
      c.catch(function() {});
      return {
        obj: null,
        promise: c,
        resolve: d,
        reject: b,
        context: null,
        ctor: null
      };
    } /*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
    var Ma;
    function Na(a, b, c) {
      if (b(a)) c();
      else {
        var d = a.ownerDocument.defaultView;
        if (d.MutationObserver) {
          var e = new d.MutationObserver(function() {
            b(a) && (e.disconnect(), c());
          });
          e.observe(a, { childList: !0 });
        } else
          var f = d.setInterval(function() {
            b(a) && (d.clearInterval(f), c());
          }, 5);
      }
    }
    function Oa(a, b, c) {
      a = a.createElement(b);
      for (var d in c) a.setAttribute(d, c[d]);
      return a;
    }
    function Pa(a, b) {
      for (var c; a && a !== c; a = a.parentElement) if (b(a)) return a;
      return null;
    }
    function Qa(a) {
      return a.closest
        ? a.closest("[subscriptions-action]")
        : Pa(a, function(a) {
            var b =
              a.matches ||
              a.webkitMatchesSelector ||
              a.mozMatchesSelector ||
              a.msMatchesSelector ||
              a.oMatchesSelector;
            return b ? b.call(a, "[subscriptions-action]") : !1;
          });
    }
    function Ra(a) {
      /^[\w-]+$/.test("footer");
      if (void 0 !== Ma) var b = Ma;
      else {
        try {
          var c = a.ownerDocument,
            d = c.createElement("div"),
            e = c.createElement("div");
          d.appendChild(e);
          b = d.querySelector(":scope div") === e;
        } catch (f) {
          b = !1;
        }
        b = Ma = b;
      }
      b
        ? (a = a.querySelector("> footer".replace(/^|,/g, "$&:scope ")))
        : (a.classList.add("i-amphtml-scoped"),
          (b = "> footer".replace(/^|,/g, "$&.i-amphtml-scoped ")),
          (b = a.querySelectorAll(b)),
          a.classList.remove("i-amphtml-scoped"),
          (a = void 0 === b[0] ? null : b[0]));
      return a;
    }
    function Sa(a, b) {
      for (var c = a.length, d = 0; d < c; d++) b(a[d], d);
    }
    function Ta(a, b, c) {
      try {
        var d = a.open(b, "_blank", c);
      } catch (g) {
        sa().error("DOM", "Failed to open url on target: ", "_blank", g);
      }
      var e;
      if (!(e = d || !1)) {
        e = c || "";
        var f;
        "number" !== typeof f && (f = 0);
        e = f + 8 > e.length ? !1 : -1 !== e.indexOf("noopener", f);
      }
      e || (d = a.open(b, "_top"));
      return d;
    }
    function Ua(a) {
      var b = Ka(L(a), "amp-analytics-instrumentation");
      if (b) return b;
      var c = Ga(a);
      return c
        .waitForBodyOpen()
        .then(function() {
          var a = c.win;
          var b = c.win.document.head;
          if (b) {
            var f = {};
            b = b.querySelectorAll(
              "script[custom-element],script[custom-template]"
            );
            for (var g = 0; g < b.length; g++) {
              var k = b[g];
              k =
                k.getAttribute("custom-element") ||
                k.getAttribute("custom-template");
              f[k] = !0;
            }
            f = Object.keys(f);
          } else f = [];
          a = f.includes("amp-analytics")
            ? G(a, "extensions").waitForExtension(a, "amp-analytics")
            : Promise.resolve();
          return a;
        })
        .then(function() {
          var b = c.win;
          return b.__AMP_EXTENDED_ELEMENTS &&
            b.__AMP_EXTENDED_ELEMENTS["amp-analytics"]
            ? Ja(L(a), "amp-analytics-instrumentation")
            : null;
        });
    }
    function Va(a, b, c) {
      Ua(a).then(function(d) {
        d && d.triggerEventForTarget(a, b, c);
      });
    }
    function O(a) {
      this.ob = a;
      this.Ka = [];
    }
    O.prototype.registerEventListener = function(a) {
      this.Ka.push(a);
    };
    O.prototype.serviceEvent = function(a, b, c, d) {
      this.event(a, Object.assign(p({ serviceId: b }), c), d);
    };
    O.prototype.event = function(a, b, c) {
      c = c || p({});
      var d =
        "subscriptions-action" !== a
          ? a
          : a + ("-" + c.action + "-" + c.status);
      D().info("amp-subscriptions", d, b || "");
      b = b || p({});
      Va(this.ob, d, b);
      for (var e = 0; e < this.Ka.length; e++) this.Ka[e](a, b, c);
    };
    O.prototype.actionEvent = function(a, b, c, d) {
      this.serviceEvent(
        "subscriptions-action",
        a,
        d,
        p({ action: b, status: c })
      );
    };
    function Wa(a) {
      if ("undefined" !== typeof TextDecoder)
        return new TextDecoder("utf-8").decode(a);
      for (
        var b = new Uint8Array(a.buffer || a), c = Array(b.length), d = 0;
        d < b.length;
        d++
      )
        c[d] = String.fromCharCode(b[d]);
      var e = c.join("");
      return decodeURIComponent(escape(e));
    }
    function P(a) {
      for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        b[c] = d;
      }
      return b;
    }
    var Xa = { "-": "+", _: "/", ".": "=" };
    function Ya(a) {
      var b = atob(
        a.replace(/[-_.]/g, function(a) {
          return Xa[a];
        })
      );
      return P(b);
    }
    function Za(a, b) {
      if ("." == b) return a;
      b = b.split(".");
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        if (
          d &&
          a &&
          void 0 !== a[d] &&
          (null == a || "object" != typeof a
            ? 0
            : Object.prototype.hasOwnProperty.call(a, d))
        )
          a = a[d];
        else {
          a = void 0;
          break;
        }
      }
      return a;
    }
    function $a(a, b) {
      try {
        return JSON.parse(a);
      } catch (c) {
        return b && b(c), null;
      }
    }
    function ab(a) {
      this.h = a;
      this.pa = null;
      var b = this.h.getRootNode().querySelector("script[cryptokeys]");
      this.pb = (b && $a(b.textContent)) || null;
    }
    ab.prototype.getEncryptedKeys = function() {
      return this.pb;
    };
    ab.prototype.getEncryptedDocumentKey = function(a) {
      var b = this.getEncryptedKeys();
      return b ? b[a] || null : null;
    };
    ab.prototype.tryToDecryptDocument = function(a) {
      var b = this;
      return this.pa
        ? this.pa
        : (this.pa = this.h.whenReady().then(function() {
            var c = b.h.getRootNode().querySelectorAll("script[ciphertext]"),
              d = [];
            Sa(c, function(b) {
              d.push(
                bb(b.textContent, a).then(function(a) {
                  b.outerHTML = a;
                })
              );
            });
            return Promise.all(d);
          }));
    };
    function bb(a, b) {
      a = a.replace(/\s+/g, "");
      var c = P(atob(a));
      return cb(b).then(function(a) {
        return crypto.subtle
          .decrypt(
            { name: "AES-CTR", counter: new Uint8Array(16), length: 128 },
            a,
            c
          )
          .then(function(a) {
            return Wa(new Uint8Array(a));
          });
      });
    }
    function cb(a) {
      var b = P(atob(a));
      return crypto.subtle.importKey("raw", b, "AES-CTR", !0, ["decrypt"]);
    }
    var db,
      eb = "Webkit webkit Moz moz ms O o".split(" ");
    function fb(a, b) {
      var c;
      if (2 > b.length ? 0 : 0 == b.lastIndexOf("--", 0)) return b;
      db || (db = ja());
      var d = db[b];
      if (!d || c) {
        d = b;
        if (void 0 === a[b]) {
          var e = b.charAt(0).toUpperCase() + b.slice(1);
          a: {
            for (var f = 0; f < eb.length; f++) {
              var g = eb[f] + e;
              if (void 0 !== a[g]) {
                e = g;
                break a;
              }
            }
            e = "";
          }
          var k = e;
          void 0 !== a[k] && (d = k);
        }
        c || (db[b] = d);
      }
      return d;
    }
    function gb(a, b) {
      a = a.style;
      for (var c in b) a.setProperty(fb(a, c), b[c].toString(), "important");
    }
    function Q(a, b) {
      void 0 === b && (b = a.hasAttribute("hidden"));
      b ? a.removeAttribute("hidden") : a.setAttribute("hidden", "");
    }
    function hb(a) {
      var b = this;
      this.h = a;
      this.ia = G(a.win, "vsync");
      this.S = G(a.win, "timer");
      this.U = K(a, "viewport");
      this.ha = !1;
      this.Da = null;
      this.ab = Promise.resolve();
      a = this.h.win.document;
      this.B = Oa(a, "amp-subscriptions-dialog", { role: "dialog" });
      Q(this.B, !1);
      this.Ba = Oa(a, "button", {
        class: "i-amphtml-subs-dialog-close-button"
      });
      this.showCloseAction(!1);
      this.B.appendChild(this.Ba);
      this.Ba.addEventListener("click", function() {
        b.close();
      });
      this.h.getBody().appendChild(this.B);
      gb(this.B, { transform: "translateY(100%)" });
    }
    h = hb.prototype;
    h.getRoot = function() {
      return this.B;
    };
    h.isVisible = function() {
      return this.ha;
    };
    h.open = function(a, b) {
      var c = this;
      b = void 0 === b ? !0 : b;
      return ib(this, function() {
        return jb(c, a, b);
      });
    };
    h.close = function() {
      var a = this;
      return ib(this, function() {
        return kb(a);
      });
    };
    function ib(a, b) {
      return (a.ab = a.ab.then(b));
    }
    function jb(a, b, c) {
      c = void 0 === c ? !0 : c;
      a.Da ? a.B.replaceChild(b, a.Da) : a.B.appendChild(b);
      a.Da = b;
      if (a.ha) return Promise.resolve();
      a.ha = !0;
      return a.ia
        .mutatePromise(function() {
          Q(a.B, !0);
          a.showCloseAction(c);
        })
        .then(function() {
          return a.ia
            .mutatePromise(function() {
              gb(a.B, { transform: "translateY(0)" });
            })
            .then(function() {
              return a.S.promise(300);
            });
        })
        .then(function() {
          var b;
          return a.ia.runPromise({
            measure: function() {
              b = a.B.offsetHeight;
            },
            mutate: function() {
              a.U.updatePaddingBottom(b);
              a.U.addToFixedLayer(a.B, !0);
            }
          });
        });
    }
    function kb(a) {
      return a.ha
        ? a.ia
            .mutatePromise(function() {
              gb(a.B, { transform: "translateY(100%)" });
            })
            .then(function() {
              return a.S.promise(300);
            })
            .then(function() {
              return a.ia.mutatePromise(function() {
                Q(a.B, !1);
                a.U.updatePaddingBottom(0);
                a.ha = !1;
              });
            })
        : Promise.resolve();
    }
    h.showCloseAction = function(a) {
      Q(this.Ba, a);
    };
    function lb(a) {
      var b = a.readyState;
      return "loading" != b && "uninitialized" != b;
    }
    function mb(a, b) {
      var c = lb,
        d = c(a);
      if (d) b(a);
      else {
        var e = function() {
          c(a) &&
            (d || ((d = !0), b(a)),
            a.removeEventListener("readystatechange", e));
        };
        a.addEventListener("readystatechange", e);
      }
    }
    function nb(a) {
      return new Promise(function(b) {
        mb(a, b);
      });
    }
    function ob(a) {
      var b = !!a.document;
      this.ya = b ? a : a.defaultView;
      this.j = b ? a.document : a;
    }
    h = ob.prototype;
    h.getWin = function() {
      return this.ya;
    };
    h.getRootNode = function() {
      return this.j;
    };
    h.getRootElement = function() {
      return this.j.documentElement;
    };
    h.getHead = function() {
      return this.j.head;
    };
    h.getBody = function() {
      return this.j.body;
    };
    h.isReady = function() {
      return lb(this.j);
    };
    h.whenReady = function() {
      return nb(this.j);
    };
    h.addToFixedLayer = function() {
      return Promise.resolve();
    };
    function pb(a) {
      return 9 === a.nodeType || a.document ? new ob(a) : a;
    }
    function R(a, b) {
      var c = a.indexOf(":");
      if (-1 != c) {
        var d = a;
        var e = d.substring(0, c);
        var f = d.substring(c + 1);
        if ("*" == f) throw Error("wildcard disallowed");
      } else (e = a), (f = d = null);
      this.Ma = e;
      this.$ = d;
      this.sb = f;
      this.ub = b;
    }
    R.prototype.getPublicationId = function() {
      return this.Ma;
    };
    R.prototype.getProductId = function() {
      return this.$;
    };
    R.prototype.getLabel = function() {
      return this.sb;
    };
    R.prototype.isLocked = function() {
      return this.ub;
    };
    function qb(a) {
      console.log.apply(console, arguments);
    }
    function rb(a) {
      if (/swg.debug=1/.test(self.location.hash)) {
        var b = Array.prototype.slice.call(arguments, 0);
        b.unshift("[Subscriptions]");
        qb.apply(qb, b);
      }
    }
    var sb = "CreativeWork Article NewsArticle Blog Comment Course HowTo Message Review WebPage".split(
        " "
      ),
      tb = new RegExp(sb.join("|"));
    function ub(a) {
      var b = this;
      this.j = pb(a);
      this.W = null;
      this.na = new Promise(function(a) {
        b.W = a;
      });
      this.vb = new vb(this.j);
      this.tb = new wb(this.j);
      this.wb = new xb(this.j);
    }
    ub.prototype.resolveConfig = function() {
      Promise.resolve().then(this.check.bind(this));
      this.j.whenReady().then(this.check.bind(this));
      return this.na;
    };
    ub.prototype.check = function() {
      if (!this.W) return null;
      var a = this.vb.check();
      a || (a = this.tb.check());
      a || (a = this.wb.check());
      a
        ? (this.W(a), (this.W = null))
        : this.j.isReady() &&
          (this.W(
            Promise.reject(Error("No config could be discovered in the page"))
          ),
          (this.W = null));
      rb(a);
      return a;
    };
    function S() {}
    S.prototype.checkValue = function(a, b) {
      return a ? this.checkArray(yb(a), b) : !1;
    };
    S.prototype.checkString = function(a, b) {
      return a ? this.checkArray(a.split(/\s+/), b) : !1;
    };
    S.prototype.checkArray = function(a, b) {
      var c = !1;
      a.forEach(function(a) {
        c = c || b.includes(a.replace(/^http:\/\/schema.org\//i, ""));
      });
      return c;
    };
    function yb(a) {
      return Array.isArray(a) ? a : [a];
    }
    function vb(a) {
      this.j = a;
    }
    vb.prototype.check = function() {
      if (!this.j.getBody()) return null;
      var a = zb(this.j.getRootNode(), "subscriptions-product-id");
      if (!a) return null;
      var b = zb(this.j.getRootNode(), "subscriptions-accessible-for-free"),
        c = (b && "false" == b.toLowerCase()) || !1;
      return new R(a, c);
    };
    function wb(a) {
      this.j = a;
      this.ca = new S();
    }
    wb.prototype.check = function() {
      if (!this.j.getBody()) return null;
      for (
        var a = this.j.isReady(),
          b = this.j
            .getRootNode()
            .querySelectorAll('script[type="application/ld+json"]'),
          c = 0;
        c < b.length;
        c++
      ) {
        var d = b[c],
          e;
        if ((e = !d["__SWG-SEEN__"] && d.textContent) && !(e = a))
          a: {
            e = d;
            do
              if (e.nextSibling) {
                e = !0;
                break a;
              }
            while ((e = e.parentNode) && void 0 != e);
            e = !1;
          }
        if (e && ((d["__SWG-SEEN__"] = !0), tb.test(d.textContent))) {
          var f = this.Sa(d);
          if (f) return f;
        }
      }
      return null;
    };
    wb.prototype.Sa = function(a) {
      a: {
        try {
          var b = JSON.parse(a.textContent);
          break a;
        } catch (f) {}
        b = void 0;
      }
      a = b;
      if (!a || !this.ca.checkValue(a["@type"], sb)) return null;
      b = null;
      var c = Cb(a, "isPartOf");
      if (c) for (var d = 0; d < c.length && !(b = this.Ea(c[d])); d++);
      if (!b) return null;
      var e = Db(Eb(a, "isAccessibleForFree"));
      return new R(b, !e);
    };
    function Db(a) {
      var b = !0;
      if (null == a || "" === a) return b;
      if ("boolean" == typeof a) return a;
      if ("string" == typeof a) {
        var c = a.toLowerCase();
        if ("false" == c) return !1;
        if ("true" == c) return !0;
      }
      return b;
    }
    wb.prototype.Ea = function(a) {
      return this.ca.checkValue(a["@type"], ["Product"])
        ? Eb(a, "productID")
        : null;
    };
    function Cb(a, b) {
      a = a[b];
      return null == a || "" === a ? null : Array.isArray(a) ? a : [a];
    }
    function Eb(a, b) {
      var c = Cb(a, b);
      a = c && c[0];
      return null == a || "" === a ? null : a;
    }
    function xb(a) {
      this.j = a;
      this.$ = this.L = null;
      this.ca = new S();
    }
    function Fb(a, b) {
      var c = "alreadySeenForAccessInfo",
        d = b.querySelectorAll("[itemprop='isAccessibleForFree']");
      for (b = 0; d[b]; b++) {
        var e = d[b],
          f = e.getAttribute("content") || e.textContent;
        if (f && Gb(a, e, c)) {
          var g = null;
          "true" == f.toLowerCase()
            ? (g = !0)
            : "false" == f.toLowerCase() && (g = !1);
          return g;
        }
      }
      return null;
    }
    function Gb(a, b, c) {
      for (var d = b; d && !d[c]; d = d.parentNode)
        if (((d[c] = !0), d.hasAttribute && d.hasAttribute("itemscope")))
          return (d = d.getAttribute("itemtype")), a.ca.checkString(d, sb);
      return !1;
    }
    xb.prototype.Ea = function(a) {
      a = a.querySelectorAll('[itemprop="productID"]');
      for (var b = 0; a[b]; b++) {
        var c = a[b],
          d = c.getAttribute("content") || c.textContent;
        c = c.closest("[itemtype][itemscope]");
        if (
          !(
            -1 >=
            c.getAttribute("itemtype").indexOf("http://schema.org/Product")
          ) &&
          Gb(this, c.parentElement, "alreadySeenForProductInfo")
        )
          return d;
      }
      return null;
    };
    function Hb(a) {
      var b = null;
      null != a.L ? (b = !a.L) : a.j.isReady() && (b = !1);
      return null != a.$ && null != b ? new R(a.$, b) : null;
    }
    xb.prototype.Sa = function() {
      var a = this,
        b = Hb(this);
      if (b) return b;
      for (
        var c = Array.prototype.slice
            .call(
              this.j.getRootNode().querySelectorAll("[itemscope][itemtype]")
            )
            .filter(function(b) {
              return a.ca.checkString(b.getAttribute("itemtype"), sb);
            }),
          d = 0;
        c[d] && null == b;
        d++
      )
        (b = c[d]),
          null == this.L && (this.L = Fb(this, b)),
          this.$ || (this.$ = this.Ea(b)),
          (b = Hb(this));
      return b;
    };
    xb.prototype.check = function() {
      return this.j.getBody() ? this.Sa() : null;
    };
    function zb(a, b) {
      return (a = a.querySelector('meta[name="' + b + '"]'))
        ? a.getAttribute("content")
        : null;
    }
    function Ib(a) {
      this.h = a;
      this.U = K(this.h, "viewport");
    }
    h = Ib.prototype;
    h.getWin = function() {
      return this.h.win;
    };
    h.getRootNode = function() {
      return this.h.getRootNode();
    };
    h.getRootElement = function() {
      var a = this.h.getRootNode();
      return a.documentElement || a.body || a;
    };
    h.getHead = function() {
      return this.h.getHeadNode();
    };
    h.getBody = function() {
      return this.h.isBodyAvailable() ? this.h.getBody() : null;
    };
    h.isReady = function() {
      return this.h.isReady();
    };
    h.whenReady = function() {
      return this.h.whenReady();
    };
    h.addToFixedLayer = function(a) {
      return this.U.addToFixedLayer(a, !0);
    };
    function T(a) {
      var b = a.source,
        c = void 0 === a.raw ? "" : a.raw,
        d = a.service,
        e = void 0 === a.granted ? !1 : a.granted,
        f = void 0 === a.grantReason ? "" : a.grantReason,
        g = a.dataObject;
      a = a.decryptedDocumentKey;
      this.raw = c;
      this.source = b;
      this.service = d;
      this.granted = e;
      this.grantReason = f;
      this.data = g;
      this.decryptedDocumentKey = a;
    }
    function U(a) {
      return new T({ source: "", raw: "", service: a, granted: !1 });
    }
    T.prototype.json = function() {
      var a = p({
        source: this.source,
        service: this.service,
        granted: this.granted,
        grantReason: this.grantReason,
        data: this.data
      });
      return a;
    };
    T.prototype.jsonForPingback = function() {
      return Object.assign({}, { raw: this.raw }, this.json());
    };
    function Jb(a) {
      var b = void 0 === b ? null : b;
      a || (a = {});
      var c = b || JSON.stringify(a);
      return new T({
        source: a.source || "",
        raw: c,
        service: "",
        granted: a.granted || !1,
        grantReason: a.grantReason,
        dataObject: a.data || null,
        decryptedDocumentKey: a.decryptedDocumentKey || null
      });
    }
    T.prototype.isSubscriber = function() {
      return this.granted && "SUBSCRIBER" === this.grantReason;
    };
    var Kb = {
        IS_READY_TO_PAY: "isReadyToPay",
        SUPPORTS_VIEWER: "supportsViewer"
      },
      Lb = {};
    function Mb() {
      this.C = null;
    }
    h = Mb.prototype;
    h.add = function(a) {
      var b = this;
      this.C || (this.C = []);
      this.C.push(a);
      return function() {
        b.remove(a);
      };
    };
    h.remove = function(a) {
      this.C && ((a = this.C.indexOf(a)), -1 < a && this.C.splice(a, 1));
    };
    h.removeAll = function() {
      this.C && (this.C.length = 0);
    };
    h.fire = function(a) {
      if (this.C) for (var b = this.C, c = 0; c < b.length; c++) (0, b[c])(a);
    };
    h.getHandlerCount = function() {
      return this.C ? this.C.length : 0;
    };
    function Nb(a, b, c, d) {
      var e = this;
      this.K = d || {};
      this.Oa = a;
      this.M = {};
      this.Fa = {};
      a.forEach(function(a) {
        e.Fa[a] = new r();
      });
      this.La = new Mb();
      this.bb = new Mb();
      this.V = this.X = this.G = this.I = null;
      this.ea = [];
      this.Ga = c;
      this.wa = Object.assign(Lb, b);
    }
    h = Nb.prototype;
    h.resolvePlatform = function(a, b) {
      this.K[a] = b;
      this.bb.fire({ serviceId: a });
    };
    h.resetPlatformStore = function() {
      for (var a in this.K) this.K[a].reset();
      return new Nb(this.Oa, this.wa, this.Ga, this.K);
    };
    h.onPlatformResolves = function(a, b) {
      var c = this,
        d = this.K[a];
      d
        ? b(d)
        : this.bb.add(function(d) {
            d.serviceId === a && b(c.getPlatform(a));
          });
    };
    h.getPlatform = function(a) {
      return this.K[a];
    };
    h.getLocalPlatform = function() {
      var a = this.getPlatform("local");
      return a;
    };
    h.getAvailablePlatforms = function() {
      var a = [],
        b;
      for (b in this.K) {
        var c = this.K[b];
        a.push(c);
      }
      return a;
    };
    h.onChange = function(a) {
      this.La.add(a);
    };
    h.resolveEntitlement = function(a, b) {
      b && (b.service = a);
      this.M[a] = b;
      var c = this.Fa[a];
      c && c.resolve(b);
      -1 != this.ea.indexOf(a) && this.ea.splice(this.ea.indexOf(a));
      b.granted && Ob(this, b);
      this.La.fire({ serviceId: a, entitlement: b });
    };
    h.getResolvedEntitlementFor = function(a) {
      return this.M[a];
    };
    h.getEntitlementPromiseFor = function(a) {
      return this.Fa[a].promise;
    };
    h.getScoreFactorStates = function() {
      var a = this,
        b = p({});
      return Promise.all(
        this.Oa.map(function(c) {
          b[c] = {};
          return Promise.all(
            Object.values(Kb).map(function(d) {
              return Pb(a, c, d).then(function(a) {
                b[c][d] = a;
              });
            })
          );
        })
      ).then(function() {
        return b;
      });
    };
    function Pb(a, b, c) {
      return a.getEntitlementPromiseFor(b).then(function() {
        return a.K[b].getSupportedScoreFactor(c);
      });
    }
    h.getGrantStatus = function() {
      var a = this;
      if (null !== this.I) return this.I.promise;
      this.I = new r();
      for (var b in this.M) {
        var c = this.M[b];
        c.granted && (Ob(this, c), this.I.resolve(!0));
      }
      if (V(this)) this.I.resolve(!1);
      else
        this.onChange(function(b) {
          b.entitlement.granted ? a.I.resolve(!0) : V(a) && a.I.resolve(!1);
        });
      return this.I.promise;
    };
    function Ob(a, b) {
      if (
        (!a.G && b.granted) ||
        (a.G && !a.G.isSubscriber() && b.isSubscriber())
      )
        a.G = b;
    }
    h.getGrantEntitlement = function() {
      var a = this;
      if (this.X) return this.X.promise;
      this.X = new r();
      (this.G && this.G.isSubscriber()) || V(this)
        ? this.X.resolve(this.G)
        : this.La.add(function() {
            ((a.G && a.G.isSubscriber()) || V(a)) && a.X.resolve(a.G);
          });
      return this.X.promise;
    };
    h.reset = function() {
      this.I = null;
    };
    h.getAllPlatformsEntitlements = function() {
      var a = this;
      if (this.V) return this.V.promise;
      this.V = new r();
      if (V(this)) this.V.resolve(Qb(this));
      else
        this.onChange(function() {
          V(a) && a.V.resolve(Qb(a));
        });
      return this.V.promise;
    };
    function Qb(a) {
      var b = [],
        c;
      for (c in a.M) ia.call(a.M, c) && b.push(a.M[c]);
      return b;
    }
    h.selectPlatform = function() {
      var a = this;
      return this.getAllPlatformsEntitlements().then(function() {
        var b;
        a: {
          V(a);
          for (b = a.getAvailablePlatforms(); b.length; ) {
            var c = b.pop();
            if (a.getResolvedEntitlementFor(c.getServiceId()).isSubscriber()) {
              b = c;
              break a;
            }
          }
          b = Rb(a, Sb(a));
        }
        return b;
      });
    };
    function V(a) {
      var b = Object.keys(a.M).length;
      return b === a.Oa.length;
    }
    function Tb(a, b, c) {
      c = c.getSupportedScoreFactor(b);
      return "number" !== typeof c ? 0 : a.wa[b] * Math.min(1, Math.max(-1, c));
    }
    function Sb(a) {
      return a.getAvailablePlatforms().map(function(b) {
        return { platform: b, weight: Ub(a, b) };
      });
    }
    function Ub(a, b) {
      var c = [0],
        d = b.getBaseScore(),
        e;
      for (e in a.wa) ia.call(a.wa, e) && c.push(Tb(a, e, b));
      return (
        d +
        c.reduce(function(a, b) {
          return a + b;
        })
      );
    }
    function Rb(a, b) {
      var c = a.getLocalPlatform();
      b.sort(function(a, b) {
        return b.weight == a.weight && a.platform == c
          ? -1
          : b.weight - a.weight;
      });
      return b[0].platform;
    }
    function Vb(a) {
      var b = a.getAvailablePlatforms().map(function(a) {
        var b = a.getSupportedScoreFactor("supportsViewer");
        return { platform: a, weight: "number" == typeof b ? b : 0 };
      });
      return Rb(a, b);
    }
    h.reportPlatformFailureAndFallback = function(a) {
      if (a === this.getLocalPlatform().getServiceId() && this.Ga)
        this.resolveEntitlement(
          this.getLocalPlatform().getServiceId(),
          this.Ga
        ),
          D().warn(
            "amp-subscriptions",
            "Local platform has failed to resolve,  using fallback entitlement."
          );
      else if (-1 == this.ea.indexOf(a)) {
        var b = U(a);
        this.resolveEntitlement(a, b);
        this.ea.push(a);
      }
    };
    h.selectPlatformForLogin = function() {
      return Vb(this);
    };
    function Wb(a) {
      this.h = a;
      this.gb = K(a, "resources");
      this.setGrantState(null);
      this.h.getBody().classList.add("i-amphtml-subs-ready");
      this.addLoadingBar();
    }
    function Xb(a, b) {
      a.gb.mutateElement(a.h.getBody(), function() {
        a.h.getBody().classList.toggle("i-amphtml-subs-grant-unk", null === b);
        a.h.getBody().classList.toggle("i-amphtml-subs-grant-yes", !0 === b);
        a.h.getBody().classList.toggle("i-amphtml-subs-grant-no", !1 === b);
      });
    }
    Wb.prototype.addLoadingBar = function() {
      var a = this;
      return this.h.whenReady().then(function() {
        var b = a.h.getBody();
        if (!b.querySelector("[subscriptions-section=loading]")) {
          var c = Oa(
            a.h.win.document,
            "div",
            p({
              class: "i-amphtml-subs-progress",
              "subscriptions-section": "loading"
            })
          );
          b.insertBefore(c, Ra(b));
        }
      });
    };
    function Yb(a, b) {
      a.gb.mutateElement(a.h.getBody(), function() {
        a.h.getBody().classList.toggle("i-amphtml-subs-loading", b);
      });
    }
    Wb.prototype.setGrantState = function(a) {
      Xb(this, a);
    };
    Wb.prototype.toggleLoading = function(a) {
      Yb(this, a);
    };
    function Zb(a) {
      this.H = a;
    }
    h = Zb.prototype;
    h.getPageConfig = function() {
      return this.H.getPageConfig();
    };
    h.getReaderId = function(a) {
      return this.H.getReaderId(a);
    };
    h.getEncryptedDocumentKey = function(a) {
      return this.H.getEncryptedDocumentKey(a);
    };
    h.getAnalytics = function() {
      return this.H.getAnalytics();
    };
    h.getScoreFactorStates = function() {
      return this.H.getScoreFactorStates();
    };
    h.delegateActionToLocal = function(a) {
      return this.delegateActionToService(a, "local");
    };
    h.delegateActionToService = function(a, b) {
      return this.H.delegateActionToService(a, b);
    };
    h.decorateServiceAction = function(a, b, c, d) {
      this.H.decorateServiceAction(a, b, c, d);
    };
    h.resetPlatforms = function() {
      this.H.resetPlatforms();
    };
    h.getDialog = function() {
      return this.H.getDialog();
    };
    h.selectPlatformForLogin = function() {
      return this.H.selectPlatformForLogin();
    };
    function $b(a) {
      a = a.trim();
      a = a.replace(/^\-+BEGIN[^-]*\-+/, "");
      a = a.replace(/\-+END[^-]*\-+$/, "");
      a = a.replace(/[\r\n]/g, "").trim();
      return P(atob(a));
    }
    function ac(a) {
      this.win = a;
      this.xa =
        (a.crypto && (a.crypto.subtle || a.crypto.webkitSubtle)) || null;
    }
    ac.prototype.decode = function(a) {
      return bc(a).payload;
    };
    ac.prototype.isVerificationSupported = function() {
      return !!this.xa;
    };
    ac.prototype.decodeAndVerify = function(a, b) {
      var c = this;
      if (!this.xa) throw Error("Crypto is not supported on this platform");
      var d = new Promise(function(b) {
        return b(bc(a));
      });
      return d.then(function(a) {
        var d = a.header.alg;
        if (!d || "RS256" != d) throw Error("Only alg=RS256 is supported");
        return cc(c, b)
          .then(function(b) {
            var d = Ya(a.sig);
            return c.xa.verify(
              { name: "RSASSA-PKCS1-v1_5" },
              b,
              d,
              P(a.verifiable)
            );
          })
          .then(function(b) {
            if (b) return a.payload;
            throw Error("Signature verification failed");
          });
      });
    };
    function bc(a) {
      function b() {
        throw Error('Invalid token: "' + a + '"');
      }
      var c = a.split(".");
      3 != c.length && b();
      var d = Ya(c[0]),
        e = Ya(c[1]);
      return {
        header: $a(Wa(d), b),
        payload: $a(Wa(e), b),
        verifiable: c[0] + "." + c[1],
        sig: c[2]
      };
    }
    function cc(a, b) {
      return b.then(function(b) {
        return a.xa.importKey(
          "spki",
          $b(b),
          { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } },
          !1,
          ["verify"]
        );
      });
    }
    var W;
    function dc(a, b, c) {
      var d = void 0,
        e = a,
        f = c;
      var g = function(a) {
        try {
          return f(a);
        } catch (z) {
          throw (self.__AMP_REPORT_ERROR(z), z);
        }
      };
      var k = ec(),
        l = !1;
      d && (l = d.capture);
      e.addEventListener(b, g, k ? d : l);
      return function() {
        e && e.removeEventListener(b, g, k ? d : l);
        g = e = f = null;
      };
    }
    function ec() {
      if (void 0 !== W) return W;
      W = !1;
      try {
        var a = {
          get capture() {
            W = !0;
          }
        };
        self.addEventListener("test-options", null, a);
        self.removeEventListener("test-options", null, a);
      } catch (b) {}
      return W;
    }
    function fc(a, b) {
      return dc(a, "message", b);
    }
    function gc(a, b) {
      var c = b,
        d = dc(a, "click", function(a) {
          try {
            c(a);
          } finally {
            (c = null), d();
          }
        });
      return d;
    }
    var hc = /RETURN_URL/;
    function ic(a, b) {
      var c = K(a, "viewer");
      return (parseInt(a.getParam("dialog"), 10)
        ? new jc(c, b)
        : new kc(a.win, c, b)
      ).open();
    }
    function jc(a, b) {
      this.viewer = a;
      this.urlOrPromise = b;
    }
    jc.prototype.getLoginUrl = function() {
      var a =
        "string" == typeof this.urlOrPromise
          ? Promise.resolve(this.urlOrPromise)
          : this.urlOrPromise;
      return a.then(function(a) {
        return lc(a, "RETURN_URL");
      });
    };
    jc.prototype.open = function() {
      var a = this;
      return this.getLoginUrl().then(function(b) {
        return a.viewer.sendMessageAwaitResponse("openDialog", p({ url: b }));
      });
    };
    function kc(a, b, c) {
      this.win = a;
      this.viewer = b;
      this.urlOrPromise = c;
      this.ta = this.Y = this.da = this.w = this.Na = this.fa = null;
    }
    kc.prototype.open = function() {
      var a = this;
      E(!this.fa, "Dialog already opened");
      return new Promise(function(b, c) {
        a.fa = b;
        a.Na = c;
        mc(a);
      }).then(
        function(b) {
          nc(a);
          return b;
        },
        function(b) {
          nc(a);
          throw b;
        }
      );
    };
    function nc(a) {
      a.fa = null;
      a.Na = null;
      if (a.w) {
        try {
          a.w.close();
        } catch (b) {}
        a.w = null;
      }
      a.Y && (a.win.clearInterval(a.Y), (a.Y = null));
      a.ta && (a.ta(), (a.ta = null));
    }
    kc.prototype.getLoginUrl = function() {
      var a = this;
      return ("string" == typeof this.urlOrPromise
        ? Promise.resolve(this.urlOrPromise)
        : this.urlOrPromise
      ).then(function(b) {
        return lc(b, oc(a));
      });
    };
    function mc(a) {
      var b = a.win.screen,
        c = Math.floor(Math.min(700, 0.9 * b.width)),
        d = Math.floor(Math.min(450, 0.9 * b.height)),
        e =
          "height=" +
          d +
          ",width=" +
          c +
          ",left=" +
          Math.floor((b.width - c) / 2) +
          ",top=" +
          Math.floor((b.height - d) / 2);
      b = e + ",resizable=yes,scrollbars=yes";
      var f = oc(a);
      a.da = null;
      "string" == typeof a.urlOrPromise
        ? ((c = lc(a.urlOrPromise, f)),
          (a.w = Ta(a.win, c, b)),
          a.w && (a.da = Promise.resolve()))
        : ((a.w = Ta(a.win, "", b)),
          a.w &&
            (a.da = a.urlOrPromise.then(
              function(b) {
                b = lc(b, f);
                a.w.location.replace(b);
              },
              function(a) {
                throw Error("failed to resolve url: " + a);
              }
            )));
      a.da
        ? a.da.then(
            function() {
              pc(a, f);
            },
            function(b) {
              qc(a, null, b);
            }
          )
        : qc(a, null, Error("failed to open dialog"));
    }
    function pc(a, b) {
      var c = F(b).origin;
      a.Y = a.win.setInterval(function() {
        a.w.closed &&
          (a.win.clearInterval(a.Y),
          (a.Y = null),
          a.win.setTimeout(function() {
            qc(a, "");
          }, 3e3));
      }, 500);
      a.ta = fc(a.win, function(b) {
        b.origin == c &&
          b.data &&
          "amp" == b.data.sentinel &&
          "result" == b.data.type &&
          (a.w &&
            a.w.postMessage(p({ sentinel: "amp", type: "result-ack" }), c),
          qc(a, b.data.result));
      });
    }
    function qc(a, b, c) {
      a.fa && (c ? a.Na(c) : a.fa(b), nc(a));
    }
    function oc(a) {
      var b = a.viewer.getResolvedViewerUrl();
      return (
        ra.cdn + "/v0/amp-login-done-0.1.html?url=" + encodeURIComponent(b)
      );
    }
    function lc(a, b) {
      return hc.test(a)
        ? a.replace(hc, encodeURIComponent(b))
        : a +
            (-1 == a.indexOf("?") ? "?" : "&") +
            "return=" +
            encodeURIComponent(b);
    }
    function rc(a, b, c, d) {
      for (var e in d) Ea(d[e], "action " + e);
      this.ka = d;
      this.Aa = {};
      this.T = b;
      this.la = c;
      this.N = null;
      this.Wa = 0;
      this.xb = ic.bind(null, a);
      this.build();
    }
    rc.prototype.build = function() {
      var a = this;
      if (0 == Object.keys(this.ka).length) return null;
      var b = [],
        c = {},
        d;
      for (d in this.ka)
        (c.ja = d),
          b.push(
            this.T.buildUrl(this.ka[c.ja], !0).then(
              (function(b) {
                return function(c) {
                  a.Aa[b.ja] = c;
                };
              })(c)
            )
          ),
          (c = { ja: c.ja });
      return Promise.all(b).then(function() {
        return a.Aa;
      });
    };
    rc.prototype.execute = function(a) {
      E(this.ka[a], "Action URL is not configured: %s", a);
      var b = E(this.Aa[a], "Action URL is not ready: %s", a);
      return sc(this, b, a);
    };
    function sc(a, b, c) {
      var d = Date.now();
      if (a.N && 1e3 > d - a.Wa) return a.N;
      a.la.actionEvent("local", c, "started");
      var e = a.xb(b),
        f = e
          .then(function(b) {
            a.N = null;
            b = v(b).success;
            var d = "true" == b || "yes" == b || "1" == b;
            d
              ? a.la.actionEvent("local", c, "success")
              : a.la.actionEvent("local", c, "rejected");
            return d || !b;
          })
          .catch(function(b) {
            a.la.actionEvent("local", c, "failed");
            a.N == f && (a.N = null);
            throw b;
          });
      a.N = f;
      a.Wa = d;
      return a.N;
    }
    var tc = (function() {
      function a(a, b, c, d) {
        c = c || {};
        for (d = a.length; d--; c[a[d]] = b);
        return c;
      }
      function b() {
        this.yy = {};
      }
      var c = [1, 3],
        d = [1, 4],
        e = [1, 18],
        f = [1, 19],
        g = [1, 14],
        k = [1, 15],
        l = [1, 16],
        m = [1, 17],
        z = [1, 21],
        x = [1, 22],
        q = [5, 6, 7, 10],
        w = [5, 6, 7, 10, 15, 16, 17, 18, 19, 20, 21],
        M = [5, 6, 7, 10, 15, 16, 17, 18, 19, 20, 21, 25, 27],
        J = {
          trace: function() {},
          yy: {},
          Db: {
            error: 2,
            result: 3,
            search_condition: 4,
            EOF: 5,
            OR: 6,
            AND: 7,
            NOT: 8,
            "(": 9,
            ")": 10,
            predicate: 11,
            comparison_predicate: 12,
            truthy_predicate: 13,
            scalar_exp: 14,
            EQ: 15,
            DEQ: 16,
            NEQ: 17,
            LT: 18,
            LTE: 19,
            GT: 20,
            GTE: 21,
            atom: 22,
            field_ref: 23,
            literal: 24,
            DOT: 25,
            field_name: 26,
            "[": 27,
            string: 28,
            "]": 29,
            NAME: 30,
            STRING: 31,
            NUMERIC: 32,
            TRUE: 33,
            FALSE: 34,
            NULL: 35,
            $accept: 0,
            $end: 1
          },
          ga: {
            2: "error",
            5: "EOF",
            6: "OR",
            7: "AND",
            8: "NOT",
            9: "(",
            10: ")",
            15: "EQ",
            16: "DEQ",
            17: "NEQ",
            18: "LT",
            19: "LTE",
            20: "GT",
            21: "GTE",
            25: "DOT",
            27: "[",
            29: "]",
            30: "NAME",
            31: "STRING",
            32: "NUMERIC",
            33: "TRUE",
            34: "FALSE",
            35: "NULL"
          },
          eb: [
            0,
            [3, 2],
            [4, 3],
            [4, 3],
            [4, 2],
            [4, 3],
            [4, 1],
            [11, 1],
            [11, 1],
            [12, 3],
            [12, 3],
            [12, 3],
            [12, 3],
            [12, 3],
            [12, 3],
            [12, 3],
            [13, 1],
            [14, 1],
            [14, 1],
            [22, 1],
            [23, 3],
            [23, 4],
            [23, 1],
            [26, 1],
            [28, 1],
            [24, 1],
            [24, 1],
            [24, 1],
            [24, 1],
            [24, 1]
          ],
          performAction: function(a, b, c, d, e, f) {
            var g = f.length - 1;
            switch (e) {
              case 1:
                return f[g - 1];
              case 2:
                this.m = f[g - 2] || f[g];
                break;
              case 3:
                this.m = f[g - 2] && f[g];
                break;
              case 4:
                this.m = !f[g];
                break;
              case 5:
                this.m = f[g - 1];
                break;
              case 6:
              case 7:
              case 8:
              case 17:
              case 18:
              case 19:
                this.m = f[g];
                break;
              case 9:
                this.m = f[g - 2] === f[g];
                break;
              case 10:
                throw Error('"==" is not allowed, use "="');
              case 11:
                this.m = f[g - 2] !== f[g];
                break;
              case 12:
                this.m = typeof f[g - 2] == typeof f[g] && f[g - 2] < f[g];
                break;
              case 13:
                this.m = typeof f[g - 2] == typeof f[g] && f[g - 2] <= f[g];
                break;
              case 14:
                this.m = typeof f[g - 2] == typeof f[g] && f[g - 2] > f[g];
                break;
              case 15:
                this.m = typeof f[g - 2] == typeof f[g] && f[g - 2] >= f[g];
                break;
              case 16:
                this.m =
                  void 0 !== f[g] &&
                  null !== f[g] &&
                  "" !== f[g] &&
                  0 !== f[g] &&
                  !1 !== f[g];
                break;
              case 20:
                this.m =
                  "[object Object]" ==
                    Object.prototype.toString.call(f[g - 2]) &&
                  f[g - 2].hasOwnProperty(f[g])
                    ? f[g - 2][f[g]]
                    : null;
                break;
              case 21:
                this.m =
                  "[object Object]" ==
                    Object.prototype.toString.call(f[g - 3]) &&
                  f[g - 3].hasOwnProperty(f[g - 1])
                    ? f[g - 3][f[g - 1]]
                    : null;
                break;
              case 22:
                this.m = void 0 !== d[f[g]] ? d[f[g]] : null;
                break;
              case 23:
                this.m = a;
                break;
              case 24:
                this.m = a.substring(1, a.length - 1);
                break;
              case 26:
                this.m = Number(a);
                break;
              case 27:
                this.m = !0;
                break;
              case 28:
                this.m = !1;
                break;
              case 29:
                this.m = null;
            }
          },
          table: [
            {
              3: 1,
              4: 2,
              8: c,
              9: d,
              11: 5,
              12: 6,
              13: 7,
              14: 8,
              22: 9,
              23: 10,
              24: 11,
              26: 12,
              28: 13,
              30: e,
              31: f,
              32: g,
              33: k,
              34: l,
              35: m
            },
            { 1: [3] },
            { 5: [1, 20], 6: z, 7: x },
            {
              4: 23,
              8: c,
              9: d,
              11: 5,
              12: 6,
              13: 7,
              14: 8,
              22: 9,
              23: 10,
              24: 11,
              26: 12,
              28: 13,
              30: e,
              31: f,
              32: g,
              33: k,
              34: l,
              35: m
            },
            {
              4: 24,
              8: c,
              9: d,
              11: 5,
              12: 6,
              13: 7,
              14: 8,
              22: 9,
              23: 10,
              24: 11,
              26: 12,
              28: 13,
              30: e,
              31: f,
              32: g,
              33: k,
              34: l,
              35: m
            },
            a(q, [2, 6]),
            a(q, [2, 7]),
            a(q, [2, 8]),
            a(q, [2, 16], {
              15: [1, 25],
              16: [1, 26],
              17: [1, 27],
              18: [1, 28],
              19: [1, 29],
              20: [1, 30],
              21: [1, 31]
            }),
            a(w, [2, 17]),
            a(w, [2, 18], { 25: [1, 32], 27: [1, 33] }),
            a(w, [2, 19]),
            a(M, [2, 22]),
            a(w, [2, 25]),
            a(w, [2, 26]),
            a(w, [2, 27]),
            a(w, [2, 28]),
            a(w, [2, 29]),
            a(M, [2, 23]),
            a([5, 6, 7, 10, 15, 16, 17, 18, 19, 20, 21, 29], [2, 24]),
            { 1: [2, 1] },
            {
              4: 34,
              8: c,
              9: d,
              11: 5,
              12: 6,
              13: 7,
              14: 8,
              22: 9,
              23: 10,
              24: 11,
              26: 12,
              28: 13,
              30: e,
              31: f,
              32: g,
              33: k,
              34: l,
              35: m
            },
            {
              4: 35,
              8: c,
              9: d,
              11: 5,
              12: 6,
              13: 7,
              14: 8,
              22: 9,
              23: 10,
              24: 11,
              26: 12,
              28: 13,
              30: e,
              31: f,
              32: g,
              33: k,
              34: l,
              35: m
            },
            a(q, [2, 4]),
            { 6: z, 7: x, 10: [1, 36] },
            {
              14: 37,
              22: 9,
              23: 10,
              24: 11,
              26: 12,
              28: 13,
              30: e,
              31: f,
              32: g,
              33: k,
              34: l,
              35: m
            },
            {
              14: 38,
              22: 9,
              23: 10,
              24: 11,
              26: 12,
              28: 13,
              30: e,
              31: f,
              32: g,
              33: k,
              34: l,
              35: m
            },
            {
              14: 39,
              22: 9,
              23: 10,
              24: 11,
              26: 12,
              28: 13,
              30: e,
              31: f,
              32: g,
              33: k,
              34: l,
              35: m
            },
            {
              14: 40,
              22: 9,
              23: 10,
              24: 11,
              26: 12,
              28: 13,
              30: e,
              31: f,
              32: g,
              33: k,
              34: l,
              35: m
            },
            {
              14: 41,
              22: 9,
              23: 10,
              24: 11,
              26: 12,
              28: 13,
              30: e,
              31: f,
              32: g,
              33: k,
              34: l,
              35: m
            },
            {
              14: 42,
              22: 9,
              23: 10,
              24: 11,
              26: 12,
              28: 13,
              30: e,
              31: f,
              32: g,
              33: k,
              34: l,
              35: m
            },
            {
              14: 43,
              22: 9,
              23: 10,
              24: 11,
              26: 12,
              28: 13,
              30: e,
              31: f,
              32: g,
              33: k,
              34: l,
              35: m
            },
            { 26: 44, 30: e },
            { 28: 45, 31: f },
            a([5, 6, 10], [2, 2], { 7: x }),
            a(q, [2, 3]),
            a(q, [2, 5]),
            a(q, [2, 9]),
            a(q, [2, 10]),
            a(q, [2, 11]),
            a(q, [2, 12]),
            a(q, [2, 13]),
            a(q, [2, 14]),
            a(q, [2, 15]),
            a(M, [2, 20]),
            { 29: [1, 46] },
            a(M, [2, 21])
          ],
          defaultActions: { 20: [2, 1] },
          parseError: function(a, b) {
            if (b.recoverable) this.trace(a);
            else throw ((a = Error(a)), (a.hash = b), a);
          },
          parse: function(a) {
            function b() {
              var a = n.lex() || w;
              "number" !== typeof a && (a = c.Db[a] || a);
              return a;
            }
            var c = this,
              d = [0],
              e = [null],
              f = [],
              g = this.table,
              k = "",
              oa = 0,
              l = 0,
              m = 0,
              q = 2,
              w = 1,
              z = f.slice.call(arguments, 1),
              n = Object.create(this.lexer),
              I = { yy: {} };
            for (t in this.yy)
              Object.prototype.hasOwnProperty.call(this.yy, t) &&
                (I.yy[t] = this.yy[t]);
            n.setInput(a, I.yy);
            I.yy.lexer = n;
            I.yy.parser = this;
            "undefined" == typeof n.yylloc && (n.yylloc = {});
            var x = n.yylloc;
            f.push(x);
            var M = n.options && n.options.ranges;
            this.parseError =
              "function" === typeof I.yy.parseError
                ? I.yy.parseError
                : Object.getPrototypeOf(this).parseError;
            for (var u, J, y, N = {}, pa, A, Ab, qa; ; ) {
              y = d[d.length - 1];
              if (this.defaultActions[y]) var t = this.defaultActions[y];
              else {
                if (null === u || "undefined" == typeof u) u = b();
                t = g[y] && g[y][u];
              }
              if ("undefined" === typeof t || !t.length || !t[0]) {
                var Bb = "";
                qa = [];
                for (pa in g[y])
                  this.ga[pa] && pa > q && qa.push("'" + this.ga[pa] + "'");
                Bb = n.showPosition
                  ? "Parse error on line " +
                    (oa + 1) +
                    ":\n" +
                    n.showPosition() +
                    "\nExpecting " +
                    qa.join(", ") +
                    ", got '" +
                    (this.ga[u] || u) +
                    "'"
                  : "Parse error on line " +
                    (oa + 1) +
                    ": Unexpected " +
                    (u == w ? "end of input" : "'" + (this.ga[u] || u) + "'");
                this.parseError(Bb, {
                  text: n.match,
                  token: this.ga[u] || u,
                  line: n.yylineno,
                  loc: x,
                  expected: qa
                });
              }
              if (t[0] instanceof Array && 1 < t.length)
                throw Error(
                  "Parse Error: multiple actions possible at state: " +
                    y +
                    ", token: " +
                    u
                );
              switch (t[0]) {
                case 1:
                  d.push(u);
                  e.push(n.yytext);
                  f.push(n.yylloc);
                  d.push(t[1]);
                  u = null;
                  J
                    ? ((u = J), (J = null))
                    : ((l = n.yyleng),
                      (k = n.yytext),
                      (oa = n.yylineno),
                      (x = n.yylloc),
                      0 < m && m--);
                  break;
                case 2:
                  A = this.eb[t[1]][1];
                  N.m = e[e.length - A];
                  N.Va = {
                    first_line: f[f.length - (A || 1)].first_line,
                    last_line: f[f.length - 1].last_line,
                    first_column: f[f.length - (A || 1)].first_column,
                    last_column: f[f.length - 1].last_column
                  };
                  M &&
                    (N.Va.range = [
                      f[f.length - (A || 1)].range[0],
                      f[f.length - 1].range[1]
                    ]);
                  y = this.performAction.apply(
                    N,
                    [k, l, oa, I.yy, t[1], e, f].concat(z)
                  );
                  if ("undefined" !== typeof y) return y;
                  A &&
                    ((d = d.slice(0, -2 * A)),
                    (e = e.slice(0, -1 * A)),
                    (f = f.slice(0, -1 * A)));
                  d.push(this.eb[t[1]][0]);
                  e.push(N.m);
                  f.push(N.Va);
                  Ab = g[d[d.length - 2]][d[d.length - 1]];
                  d.push(Ab);
                  break;
                case 3:
                  return !0;
              }
            }
          }
        },
        Rc = (function() {
          return {
            EOF: 1,
            parseError: function(a, b) {
              if (this.yy.parser) this.yy.parser.parseError(a, b);
              else throw Error(a);
            },
            setInput: function(a, b) {
              this.yy = b || this.yy || {};
              this._input = a;
              this._more = this._backtrack = this.done = !1;
              this.yylineno = this.yyleng = 0;
              this.yytext = this.matched = this.match = "";
              this.conditionStack = ["INITIAL"];
              this.yylloc = {
                first_line: 1,
                first_column: 0,
                last_line: 1,
                last_column: 0
              };
              this.options.ranges && (this.yylloc.range = [0, 0]);
              this.offset = 0;
              return this;
            },
            input: function() {
              var a = this._input[0];
              this.yytext += a;
              this.yyleng++;
              this.offset++;
              this.match += a;
              this.matched += a;
              var b = a.match(/(?:\r\n?|\n).*/g);
              b
                ? (this.yylineno++, this.yylloc.last_line++)
                : this.yylloc.last_column++;
              this.options.ranges && this.yylloc.range[1]++;
              this._input = this._input.slice(1);
              return a;
            },
            unput: function(a) {
              var b = a.length,
                c = a.split(/(?:\r\n?|\n)/g);
              this._input = a + this._input;
              this.yytext = this.yytext.substr(0, this.yytext.length - b);
              this.offset -= b;
              var d = this.match.split(/(?:\r\n?|\n)/g);
              this.match = this.match.substr(0, this.match.length - 1);
              this.matched = this.matched.substr(0, this.matched.length - 1);
              c.length - 1 && (this.yylineno -= c.length - 1);
              a = this.yylloc.range;
              this.yylloc = {
                first_line: this.yylloc.first_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.first_column,
                last_column: c
                  ? (c.length === d.length ? this.yylloc.first_column : 0) +
                    d[d.length - c.length].length -
                    c[0].length
                  : this.yylloc.first_column - b
              };
              this.options.ranges &&
                (this.yylloc.range = [a[0], a[0] + this.yyleng - b]);
              this.yyleng = this.yytext.length;
              return this;
            },
            more: function() {
              this._more = !0;
              return this;
            },
            reject: function() {
              if (this.options.backtrack_lexer) this._backtrack = !0;
              else
                return this.parseError(
                  "Lexical error on line " +
                    (this.yylineno + 1) +
                    ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" +
                    this.showPosition(),
                  { text: "", token: null, line: this.yylineno }
                );
              return this;
            },
            less: function(a) {
              this.unput(this.match.slice(a));
            },
            pastInput: function() {
              var a = this.matched.substr(
                0,
                this.matched.length - this.match.length
              );
              return (
                (20 < a.length ? "..." : "") + a.substr(-20).replace(/\n/g, "")
              );
            },
            upcomingInput: function() {
              var a = this.match;
              20 > a.length && (a += this._input.substr(0, 20 - a.length));
              return (a.substr(0, 20) + (20 < a.length ? "..." : "")).replace(
                /\n/g,
                ""
              );
            },
            showPosition: function() {
              var a = this.pastInput(),
                b = Array(a.length + 1).join("-");
              return a + this.upcomingInput() + "\n" + b + "^";
            },
            test_match: function(a, b) {
              var c;
              if (this.options.backtrack_lexer) {
                var d = {
                  yylineno: this.yylineno,
                  yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                  },
                  yytext: this.yytext,
                  match: this.match,
                  matches: this.matches,
                  matched: this.matched,
                  yyleng: this.yyleng,
                  offset: this.offset,
                  _more: this._more,
                  _input: this._input,
                  yy: this.yy,
                  conditionStack: this.conditionStack.slice(0),
                  done: this.done
                };
                this.options.ranges &&
                  (d.yylloc.range = this.yylloc.range.slice(0));
              }
              if ((c = a[0].match(/(?:\r\n?|\n).*/g)))
                this.yylineno += c.length;
              this.yylloc = {
                first_line: this.yylloc.last_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.last_column,
                last_column: c
                  ? c[c.length - 1].length -
                    c[c.length - 1].match(/\r?\n?/)[0].length
                  : this.yylloc.last_column + a[0].length
              };
              this.yytext += a[0];
              this.match += a[0];
              this.matches = a;
              this.yyleng = this.yytext.length;
              this.options.ranges &&
                (this.yylloc.range = [
                  this.offset,
                  (this.offset += this.yyleng)
                ]);
              this._backtrack = this._more = !1;
              this._input = this._input.slice(a[0].length);
              this.matched += a[0];
              a = this.performAction.call(
                this,
                this.yy,
                this,
                b,
                this.conditionStack[this.conditionStack.length - 1]
              );
              this.done && this._input && (this.done = !1);
              if (a) return a;
              if (this._backtrack) for (var e in d) this[e] = d[e];
              return !1;
            },
            next: function() {
              if (this.done) return this.EOF;
              this._input || (this.done = !0);
              var a;
              this._more || (this.match = this.yytext = "");
              for (var b = this._currentRules(), c = 0; c < b.length; c++)
                if (
                  (a = this._input.match(this.rules[b[c]])) &&
                  (!d || a[0].length > d[0].length)
                ) {
                  var d = a;
                  var e = c;
                  if (this.options.backtrack_lexer) {
                    d = this.test_match(a, b[c]);
                    if (!1 !== d) return d;
                    if (this._backtrack) d = !1;
                    else return !1;
                  } else if (!this.options.flex) break;
                }
              return d
                ? ((d = this.test_match(d, b[e])), !1 !== d ? d : !1)
                : "" === this._input
                ? this.EOF
                : this.parseError(
                    "Lexical error on line " +
                      (this.yylineno + 1) +
                      ". Unrecognized text.\n" +
                      this.showPosition(),
                    { text: "", token: null, line: this.yylineno }
                  );
            },
            lex: function() {
              var a = this.next();
              return a ? a : this.lex();
            },
            begin: function(a) {
              this.conditionStack.push(a);
            },
            popState: function() {
              return 0 < this.conditionStack.length - 1
                ? this.conditionStack.pop()
                : this.conditionStack[0];
            },
            _currentRules: function() {
              return this.conditionStack.length &&
                this.conditionStack[this.conditionStack.length - 1]
                ? this.conditions[
                    this.conditionStack[this.conditionStack.length - 1]
                  ].rules
                : this.conditions.INITIAL.rules;
            },
            topState: function(a) {
              a = this.conditionStack.length - 1 - Math.abs(a || 0);
              return 0 <= a ? this.conditionStack[a] : "INITIAL";
            },
            pushState: function(a) {
              this.begin(a);
            },
            stateStackSize: function() {
              return this.conditionStack.length;
            },
            options: {},
            performAction: function(a, b, c) {
              switch (c) {
                case 1:
                  return 7;
                case 2:
                  return 6;
                case 3:
                  return 8;
                case 4:
                  return 35;
                case 5:
                  return 33;
                case 6:
                  return 33;
                case 7:
                  return 34;
                case 8:
                  return 34;
                case 9:
                  return 9;
                case 10:
                  return 10;
                case 11:
                  return 27;
                case 12:
                  return 29;
                case 13:
                  return "|";
                case 14:
                  return 19;
                case 15:
                  return 18;
                case 16:
                  return 21;
                case 17:
                  return 20;
                case 18:
                  return 17;
                case 19:
                  return 16;
                case 20:
                  return 15;
                case 21:
                  return 32;
                case 22:
                  return 30;
                case 23:
                  return 31;
                case 24:
                  return 31;
                case 25:
                  return 25;
                case 26:
                  return "INVALID";
                case 27:
                  return 5;
              }
            },
            rules: [
              /^(?:\s+)/,
              /^(?:AND\b)/,
              /^(?:OR\b)/,
              /^(?:NOT\b)/,
              /^(?:NULL\b)/,
              /^(?:TRUE\b)/,
              /^(?:true\b)/,
              /^(?:FALSE\b)/,
              /^(?:false\b)/,
              /^(?:\()/,
              /^(?:\))/,
              /^(?:\[)/,
              /^(?:\])/,
              /^(?:\|)/,
              /^(?:<=)/,
              /^(?:<)/,
              /^(?:>=)/,
              /^(?:>)/,
              /^(?:!=)/,
              /^(?:==)/,
              /^(?:=)/,
              /^(?:-?[0-9]+(\.[0-9]+)?\b)/,
              /^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,
              /^(?:'[^']*')/,
              /^(?:"[^"]*")/,
              /^(?:\.)/,
              /^(?:.)/,
              /^(?:$)/
            ],
            conditions: {
              INITIAL: {
                rules: [
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                  16,
                  17,
                  18,
                  19,
                  20,
                  21,
                  22,
                  23,
                  24,
                  25,
                  26,
                  27
                ],
                inclusive: !0
              }
            }
          };
        })();
      J.lexer = Rc;
      b.prototype = J;
      J.Parser = b;
      return new b();
    })();
    function uc(a, b) {
      try {
        return (tc.yy = b), !!tc.parse(a);
      } finally {
        tc.yy = null;
      }
    }
    function vc(a, b) {
      return uc(a, b);
    }
    function wc(a, b, c) {
      this.h = a;
      this.va = a.getRootNode();
      this.w = b;
      this.Eb = G(a.win, "templates");
      this.o = c;
    }
    wc.prototype.render = function(a) {
      return Promise.all([xc(this, a), yc(this, a)]);
    };
    wc.prototype.reset = function() {
      this.w.close();
      return zc(this, {}, this.va, function() {
        return !1;
      });
    };
    function xc(a, b) {
      zc(a, b, a.va, vc);
    }
    function yc(a, b) {
      return a.h
        .whenReady()
        .then(function() {
          for (
            var c = a.h
                .getRootNode()
                .querySelectorAll(
                  "[subscriptions-dialog][subscriptions-display]"
                ),
              d = 0;
            d < c.length;
            d++
          ) {
            var e = c[d],
              f = e.getAttribute("subscriptions-display");
            if (f && uc(f, b)) return e;
          }
        })
        .then(function(c) {
          if (c) {
            if ("TEMPLATE" == c.tagName)
              return a.Eb.renderTemplate(c, b).then(function(c) {
                return zc(a, b, c, vc);
              });
            var d = c.cloneNode(!0);
            d.removeAttribute("subscriptions-dialog");
            d.removeAttribute("subscriptions-display");
            return d;
          }
        })
        .then(function(b) {
          if (b) return a.w.open(b, !0);
        });
    }
    function zc(a, b, c, d) {
      return a.h.whenReady().then(function() {
        for (
          var e =
              '[subscriptions-action], [subscriptions-section="actions"], [subscriptions-actions]',
            f = c.querySelectorAll(e),
            g = 0;
          g < f.length;
          g++
        ) {
          var k = f[g],
            l = k.getAttribute("subscriptions-display");
          l && d(l, b)
            ? (k.classList.add("i-amphtml-subs-display"),
              k.getAttribute("subscriptions-service") &&
                k.getAttribute("subscriptions-action") &&
                "false" !== k.getAttribute("subscriptions-decorate") &&
                !k.hasAttribute("i-amphtml-subs-decorated") &&
                (a.o.decorateServiceAction(
                  k,
                  k.getAttribute("subscriptions-service"),
                  k.getAttribute("subscriptions-action"),
                  null
                ),
                k.setAttribute("i-amphtml-subs-decorated", !0)))
            : k.classList.remove("i-amphtml-subs-display");
        }
        return c;
      });
    }
    function Ac(a, b) {
      var c = a.getHeadNode();
      a = c;
      var d = a.ownerDocument.defaultView,
        e = d.__AMP_TOP || (d.__AMP_TOP = d),
        f = d != e;
      if (e.__AMP__EXPERIMENT_TOGGLES) var g = e.__AMP__EXPERIMENT_TOGGLES;
      else {
        e.__AMP__EXPERIMENT_TOGGLES = Object.create(null);
        g = e.__AMP__EXPERIMENT_TOGGLES;
        if (e.AMP_CONFIG)
          for (var k in e.AMP_CONFIG) {
            var l = e.AMP_CONFIG[k];
            "number" === typeof l &&
              0 <= l &&
              1 >= l &&
              (g[k] = Math.random() < l);
          }
        if (
          e.AMP_CONFIG &&
          Array.isArray(e.AMP_CONFIG["allow-doc-opt-in"]) &&
          0 < e.AMP_CONFIG["allow-doc-opt-in"].length &&
          ((k = e.AMP_CONFIG["allow-doc-opt-in"]),
          (l = e.document.head.querySelector(
            'meta[name="amp-experiments-opt-in"]'
          )))
        ) {
          l = l.getAttribute("content").split(",");
          for (var m = 0; m < l.length; m++)
            -1 != k.indexOf(l[m]) && (g[l[m]] = !0);
        }
        Object.assign(g, Fa(e));
        if (
          e.AMP_CONFIG &&
          Array.isArray(e.AMP_CONFIG["allow-url-opt-in"]) &&
          0 < e.AMP_CONFIG["allow-url-opt-in"].length
        )
          for (
            k = e.AMP_CONFIG["allow-url-opt-in"],
              e = v(e.location.originalHash || e.location.hash),
              l = 0;
            l < k.length;
            l++
          )
            (m = e["e-" + k[l]]),
              "1" == m && (g[k[l]] = !0),
              "0" == m && (g[k[l]] = !1);
      }
      g = !!g["ampdoc-fie"];
      f && !g
        ? (a = Ha(d, "url-replace") ? H(d, "url-replace") : null)
        : ((a = Ga(a)),
          (a = L(a)),
          (a = Ha(a, "url-replace") ? H(a, "url-replace") : null));
      this.hb = a;
      this.Ab = b;
      this.za = null;
    }
    Ac.prototype.setAuthResponse = function(a) {
      this.za = a;
    };
    Ac.prototype.buildUrl = function(a, b) {
      var c = this;
      return Bc(this, b).then(function(b) {
        return c.hb.expandUrlAsync(a, b);
      });
    };
    Ac.prototype.collectUrlVars = function(a, b) {
      var c = this;
      return Bc(this, b).then(function(b) {
        return c.hb.collectVars(a, b);
      });
    };
    function Bc(a, b) {
      return a.Ab.then(function(c) {
        var d = { READER_ID: c, ACCESS_READER_ID: c };
        b &&
          (d.AUTHDATA = function(b) {
            if (a.za) return Za(a.za, b);
          });
        return d;
      });
    }
    function X(a, b, c) {
      this.h = a;
      this.va = a.getRootNode();
      this.J = b;
      this.zb = !!this.J.pingbackAllEntitlements;
      this.o = c;
      this.T = new Ac(this.h, this.o.getReaderId("local"));
      this.A = c.getAnalytics();
      E(this.J.actions, "Actions have not been defined in the service config");
      this.Xa = new rc(
        this.h,
        this.T,
        this.A,
        this.validateActionMap(this.J.actions)
      );
      this.R = new wc(this.h, c.getDialog(), this.o);
    }
    h = X.prototype;
    h.getServiceId = function() {
      return "local";
    };
    h.validateActionMap = function(a) {
      E(a.login, 'Action "login" is not present in action map');
      E(a.subscribe, 'Action "subscribe" is not present in action map');
      return a;
    };
    function Cc(a) {
      a.va.addEventListener("click", function(b) {
        var c = Qa(b.target);
        c &&
          ((b = c.getAttribute("subscriptions-action")),
          (c = c.getAttribute("subscriptions-service")),
          "local" == c
            ? a.executeAction(b)
            : "auto" == (c || "auto")
            ? "login" == b
              ? ((c = a.o.selectPlatformForLogin()),
                a.o.delegateActionToService(b, c.getServiceId()))
              : a.executeAction(b)
            : c && a.o.delegateActionToService(b, c));
      });
    }
    h.activate = function(a) {
      var b = this;
      Dc(this, a).then(function(a) {
        b.R.render(a);
      });
    };
    function Dc(a, b) {
      var c = b.json();
      return a.o
        .getScoreFactorStates()
        .then(function(b) {
          c.factors = b;
          return a.T.setAuthResponse(c);
        })
        .then(function() {
          return a.Xa.build();
        })
        .then(function() {
          return c;
        });
    }
    h.reset = function() {
      this.R.reset();
    };
    h.executeAction = function(a) {
      var b = this,
        c = this.Xa.execute(a);
      return c.then(function(a) {
        a && b.o.resetPlatforms();
        return !!a;
      });
    };
    h.isPrerenderSafe = function() {
      return !1;
    };
    h.getSupportedScoreFactor = function() {
      return 0;
    };
    h.getBaseScore = function() {
      return this.J.baseScore || 0;
    };
    h.getEntitlements = function() {};
    h.pingback = function() {};
    h.pingbackReturnsAllEntitlements = function() {
      return this.zb;
    };
    h.isPingbackEnabled = function() {
      return !1;
    };
    h.decorateUI = function() {};
    function Ec(a, b, c) {
      this.ya = a;
      this.Qa = b;
      this.D = c;
      this.Z = this.Ra = null;
      this.Ya = this.qb.bind(this);
      this.Bb = 0;
      this.Ua = {};
    }
    h = Ec.prototype;
    h.connect = function(a) {
      if (this.Z) throw Error("already connected");
      this.Z = a;
      this.ya.addEventListener("message", this.Ya);
    };
    h.disconnect = function() {
      this.Z &&
        ((this.Z = null), this.ya.removeEventListener("message", this.Ya));
    };
    h.isConnected = function() {
      return null != this.D;
    };
    h.getTarget = function() {
      var a = Fc(this);
      if (!a) throw Error("not connected");
      return a;
    };
    function Fc(a) {
      a.Z && !a.Ra && (a.Ra = "function" == typeof a.Qa ? a.Qa() : a.Qa);
      return a.Ra;
    }
    h.getTargetOrigin = function() {
      if (null == this.D) throw Error("not connected");
      return this.D;
    };
    h.sendCommand = function(a, b) {
      Gc(this, void 0, a, b);
    };
    h.sendCommandRsvp = function(a, b) {
      var c = String(++this.Bb),
        d = null,
        e = new Promise(function(a) {
          d = a;
        });
      this.Ua[c] = { promise: e, resolver: d };
      Gc(this, c, a, b);
      return e;
    };
    function Gc(a, b, c, d) {
      var e = a.getTarget();
      a = "connect" == c ? (null != a.D ? a.D : "*") : a.getTargetOrigin();
      e.postMessage(
        { sentinel: "__AMP__", _rsvp: b, cmd: c, payload: d || null },
        a
      );
    }
    h.qb = function(a) {
      var b = this,
        c = a.data;
      if (c && "__AMP__" == c.sentinel) {
        var d = a.origin,
          e = c.cmd,
          f = c.payload || null;
        null == this.D && "start" == e && (this.D = d);
        null == this.D && a.source && Fc(this) == a.source && (this.D = d);
        if (d == this.D) {
          var g = c._rsvp,
            k = !!g && "rsvp" != e;
          a = this.Ha(g, e, f);
          k &&
            Promise.resolve(a).then(
              function(a) {
                Gc(b, g, "rsvp", { result: a });
              },
              function(a) {
                Gc(b, g, "rsvp", { error: String(a) });
              }
            );
        }
      }
    };
    h.Ha = function(a, b, c) {
      if ("rsvp" == b) {
        var d = a && this.Ua[a];
        d &&
          ("error" in c
            ? d.resolver(Promise.reject(Error(c.error)))
            : d.resolver(c.result),
          delete this.Ua[a]);
      } else return this.Z(b, c);
    };
    function Hc(a, b, c) {
      X.call(this, a, b, c);
      var d = this;
      this.Ia = E(this.J.iframeSrc, '"iframeSrc" URL must be specified');
      Ea(this.Ia, "iframe Url");
      (this.ra = this.J.iframeVars || null) &&
        E(Array.isArray(this.ra), '"iframeVars" must be an array');
      this.D = F(this.Ia).origin;
      this.Ca = this.oa = null;
      this.sa = a.win.document.createElement("iframe");
      Q(this.sa, !1);
      this.ua = new Ec(
        this.h.win,
        function() {
          return d.sa.contentWindow;
        },
        this.D
      );
      this.na = null;
      Cc(this);
    }
    ha(Hc, X);
    h = Hc.prototype;
    h.getEntitlements = function() {
      var a = this;
      return this.connect().then(function() {
        return a.ua
          .sendCommandRsvp("authorize", {})
          .then(function(a) {
            a.source = "local-iframe";
            return a;
          })
          .then(function(a) {
            return Jb(a);
          });
      });
    };
    h.isPingbackEnabled = function() {
      return !0;
    };
    h.pingback = function(a) {
      var b = this;
      return this.connect().then(function() {
        return b.ua.sendCommandRsvp("pingback", { entitlement: a });
      });
    };
    h.connect = function() {
      if (!this.Ca) {
        var a = new r();
        this.Ca = a.promise;
        this.oa = a.resolve;
        this.na = Ic(this);
        this.ua.connect(this.Ha.bind(this));
        this.h.getBody().appendChild(this.sa);
        this.sa.src = this.Ia;
      }
      return this.Ca;
    };
    function Ic(a) {
      return new Promise(function(b) {
        var c = JSON.parse(JSON.stringify(a.J)),
          d = a.o.getPageConfig();
        c.pageConfig = {
          publicationId: d.getPublicationId(),
          productId: d.getProductId(),
          encryptedDocumentKey: a.o.getEncryptedDocumentKey("local") || null
        };
        if (a.ra) {
          var e = a.ra.join("&");
          a.T.collectUrlVars(e, !1).then(function(a) {
            c.iframeVars = a;
            b(c);
          });
        } else b(c);
      });
    }
    h.Ha = function(a) {
      var b = this;
      "connect" == a &&
        this.na.then(function(a) {
          b.ua
            .sendCommandRsvp("start", {
              protocol: "amp-subscriptions",
              config: a
            })
            .then(function() {
              b.oa && (b.oa(), (b.oa = null));
            });
        });
    };
    function Y(a, b, c) {
      X.call(this, a, b, c);
      this.jb = Ea(
        E(
          this.J.authorizationUrl,
          "Service config does not have authorization Url"
        ),
        "Authorization Url"
      );
      this.ib = G(this.h.win, "xhr");
      this.cb = this.J.pingbackUrl || null;
      Cc(this);
    }
    ha(Y, X);
    Y.prototype.getEntitlements = function() {
      var a = this;
      return this.T.buildUrl(this.jb, !1).then(function(b) {
        var c = a.o.getEncryptedDocumentKey("local");
        c && (b = Da(b, c));
        return a.ib
          .fetchJson(b, { credentials: "include" })
          .then(function(a) {
            return a.json();
          })
          .then(function(a) {
            return Jb(a);
          });
      });
    };
    Y.prototype.isPingbackEnabled = function() {
      return !!this.cb;
    };
    function Jc(a) {
      if (Array.isArray(a)) {
        var b = [];
        a.forEach(function(a) {
          b.push(a.jsonForPingback());
        });
        return JSON.stringify(b);
      }
      return JSON.stringify(a.jsonForPingback());
    }
    Y.prototype.pingback = function(a) {
      var b = this;
      if (this.isPingbackEnabled) {
        var c = this.cb;
        return this.T.buildUrl(c, !0).then(function(c) {
          return b.ib.sendSignal(c, {
            method: "POST",
            credentials: "include",
            headers: p({ "Content-Type": "text/plain" }),
            body: Jc(a)
          });
        });
      }
    };
    function Kc(a, b, c) {
      return "iframe" === b.type ? new Hc(a, b, c) : new Y(a, b, c);
    }
    function Lc(a, b, c, d) {
      this.h = a;
      this.o = c;
      this.O = c.getPageConfig();
      this.P = Kc(a, b, c);
      this.ba = K(this.h, "viewer");
      this.ba.onMessage("subscriptionchange", this.Cb.bind(this));
      this.rb = new ac(a.win);
      this.Ma = this.O.getPublicationId();
      this.mb = this.O.getProductId();
      this.yb = d;
    }
    h = Lc.prototype;
    h.isPrerenderSafe = function() {
      return !0;
    };
    h.getEntitlements = function() {
      var a = this,
        b = p({ publicationId: this.Ma, productId: this.mb, origin: this.yb }),
        c = this.o.getEncryptedDocumentKey("google.com");
      c && (b.encryptedDocumentKey = c);
      var d = this.ba
        .sendMessageAwaitResponse("auth", b)
        .then(function(b) {
          var c = (b || {}).authorization,
            d = (b || {}).decryptedDocumentKey;
          return c ? Mc(a, c, d) : U("local");
        })
        .catch(function(b) {
          a.ba.sendMessage("auth-rejected", p({ reason: b.message }));
          throw b;
        });
      return d;
    };
    function Mc(a, b, c) {
      return new Promise(function(d) {
        var e = Ca(a.h.win);
        var f = a.h.win.location;
        "string" == typeof f && (f = F(f));
        var g = f;
        "string" == typeof g && (g = F(g));
        if (ra.cdnProxyRegex.test(g.origin)) {
          g = f.pathname.split("/");
          E(ua[g[1]], "Unknown path prefix in url %s", f.href);
          var k = g[2],
            l =
              "s" == k
                ? "https://" + decodeURIComponent(g[3])
                : "http://" + decodeURIComponent(k);
          E(0 < l.indexOf("."), "Expected a . in origin %s", l);
          g.splice(1, "s" == k ? 3 : 2);
          g = l + g.join("/");
          k =
            (k = f.search) && "?" != k
              ? (k = k
                  .replace(xa, "")
                  .replace(ya, "")
                  .replace(za, "")
                  .replace(Aa, "")
                  .replace(Ba, "")
                  .replace(/^[?&]/, ""))
                ? "?" + k
                : ""
              : "";
          f = g + k + (f.hash || "");
        } else f = f.href;
        f = F(f).origin;
        var m = a.rb.decode(b),
          z = E(a.O.getProductId(), "Product id is null");
        if (m.aud != e && m.aud != f)
          throw D().createError('The mismatching "aud" field: ' + m.aud);
        if (m.exp < Math.floor(Date.now() / 1e3))
          throw D().createError("Payload is expired");
        e = m.entitlements;
        f = U("local");
        if (Array.isArray(e))
          for (g = 0; g < e.length; g++) {
            if (-1 !== e[g].products.indexOf(z)) {
              var x = e[g];
              f = new T({
                source: "viewer",
                raw: b,
                granted: !0,
                grantReason: x.subscriptionToken ? "SUBSCRIBER" : "",
                dataObject: x,
                decryptedDocumentKey: c
              });
              break;
            }
          }
        else
          m.metering && !m.entitlements
            ? (f = new T({
                source: m.iss || "",
                raw: b,
                granted: !0,
                grantReason: "METERING",
                dataObject: m.metering,
                decryptedDocumentKey: c
              }))
            : e &&
              (f = new T({
                source: "viewer",
                raw: b,
                granted: e.granted,
                grantReason: e.subscriptionToken ? "SUBSCRIBER" : "",
                dataObject: e,
                decryptedDocumentKey: c
              }));
        f.service = "local";
        d(f);
      });
    }
    h.getServiceId = function() {
      return this.P.getServiceId();
    };
    h.activate = function() {};
    h.reset = function() {};
    h.isPingbackEnabled = function() {
      return this.P.isPingbackEnabled();
    };
    h.pingbackReturnsAllEntitlements = function() {
      return this.P.pingbackReturnsAllEntitlements();
    };
    h.pingback = function(a) {
      this.P.pingback(a);
    };
    h.getSupportedScoreFactor = function(a) {
      return this.P.getSupportedScoreFactor(a);
    };
    h.getBaseScore = function() {
      return 0;
    };
    h.executeAction = function(a) {
      return this.P.executeAction(a);
    };
    h.decorateUI = function(a, b, c) {
      return this.P.decorateUI(a, b, c);
    };
    h.Cb = function() {
      this.o.resetPlatforms();
    };
    function Nc(a, b) {
      var c =
          "[subscriptions-action]:not(.i-amphtml-subs-display),[subscriptions-actions]:not(.i-amphtml-subs-display),[subscriptions-section=actions]:not(.i-amphtml-subs-display),body.i-amphtml-subs-delegated [subscriptions-section=actions],body.i-amphtml-subs-grant-unk [subscriptions-action],body.i-amphtml-subs-grant-unk [subscriptions-section=actions],body:not(.i-amphtml-subs-grant-no) [subscriptions-section=content-not-granted],body:not(.i-amphtml-subs-grant-yes) [subscriptions-section=content],body:not(.i-amphtml-subs-loading) [subscriptions-section=loading]{display:none!important}amp-subscriptions-dialog{display:block!important;position:fixed!important;bottom:0!important;left:0!important;margin-left:0!important;width:100%!important;z-index:2147483641!important;max-height:90vh;box-sizing:border-box;opacity:1;background-image:none;background-color:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,0.2);margin-bottom:0;transition:transform 0.3s ease-in}.i-amphtml-subs-dialog-close-button{position:absolute;width:28px;height:28px;top:-28px;right:0;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='13' viewBox='341 8 13 13' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%234F4F4F' d='M354 9.31L352.69 8l-5.19 5.19L342.31 8 341 9.31l5.19 5.19-5.19 5.19 1.31 1.31 5.19-5.19 5.19 5.19 1.31-1.31-5.19-5.19z' fill-rule='evenodd'/%3E%3C/svg%3E\");background-size:13px 13px;background-position:9px;background-color:#fff;background-repeat:no-repeat;box-shadow:0 -1px 1px 0 rgba(0,0,0,0.2);border:none;border-radius:12px 0 0 0;cursor:pointer}body:not(.i-amphtml-subs-grant-yes) .i-amphtml-subs-dialog-close-button{display:none}.i-amphtml-subs-progress{height:2px;background-color:#ccc;position:relative;margin:8px;overflow:hidden}.i-amphtml-subs-progress:after{content:\"\";background-color:#2196f3;height:2px;position:absolute;left:0;top:0;width:20%;animation:i-amphtml-subs-loading-progress 1500ms ease-in-out infinite}@keyframes i-amphtml-subs-loading-progress{0%{transform:translateX(-100%)}to{transform:translateX(500%)}}@media (min-width:480px){amp-subscriptions-dialog{width:480px!important;left:-240px!important;margin-left:50vw!important}}\n/*# sourceURL=/extensions/amp-subscriptions/0.1/amp-subscriptions.css*/",
        d = !1,
        e = "amp-subscriptions",
        f = a.getHeadNode(),
        g = Oc(f, Pc(f, c), d || !1, e || null);
      if (b) {
        var k = a.getRootNode();
        if (Qc(k, g)) b(g);
        else
          var l = setInterval(function() {
            Qc(k, g) && (clearInterval(l), b(g));
          }, 4);
      }
    }
    function Oc(a, b, c, d) {
      var e = a.__AMP_CSS_SM;
      e || (e = a.__AMP_CSS_SM = ja());
      var f = !c && d && "amp-custom" != d && "amp-keyframes" != d,
        g = c ? "amp-runtime" : f ? "amp-extension=" + d : null;
      if (g) {
        var k = Sc(a, e, g);
        if (k) return k.textContent !== b && (k.textContent = b), k;
      }
      var l = (a.ownerDocument || a).createElement("style");
      l.textContent = b;
      var m = null;
      c
        ? l.setAttribute("amp-runtime", "")
        : f
        ? (l.setAttribute("amp-extension", d || ""),
          (m = Sc(a, e, "amp-runtime")))
        : (d && l.setAttribute(d, ""), (m = a.lastChild));
      b = m;
      a.insertBefore(l, b ? b.nextSibling : a.firstChild);
      g && (e[g] = l);
      return l;
    }
    function Sc(a, b, c) {
      return b[c]
        ? b[c]
        : (a = a.querySelector("style[" + c + "]"))
        ? (b[c] = a)
        : null;
    }
    function Pc(a, b) {
      return (a = a.__AMP_CSS_TR) ? a(b) : b;
    }
    function Qc(a, b) {
      var c = a.styleSheets;
      for (a = 0; a < c.length; a++) {
        var d = c[a];
        if (d.ownerNode == b) return !0;
      }
      return !1;
    }
    self.__AMP_ERRORS = self.__AMP_ERRORS || [];
    function Tc(a) {
      this.h = a;
      this.aa = null;
      this.S = G(a.win, "timer");
      this.U = K(a, "viewport");
    }
    Tc.prototype.scheduleView = function(a) {
      var b = this;
      this.aa = null;
      return this.h.whenReady().then(function() {
        return new Promise(function(a) {
          b.h.isVisible() && a();
          b.h.onVisibilityChanged(function() {
            b.h.isVisible() && a();
          });
        }).then(function() {
          return Uc(b, a);
        });
      });
    };
    function Uc(a, b) {
      if (a.aa) return a.aa;
      a.aa = Vc(a, b).catch(function(b) {
        a.aa = null;
        throw b;
      });
      return a.aa;
    }
    function Vc(a, b) {
      if (0 == b) return Promise.resolve();
      var c = [];
      return new Promise(function(d, e) {
        c.push(
          a.h.onVisibilityChanged(function() {
            a.h.isVisible() || e(Error("CANCELLED"));
          })
        );
        var f = a.S.delay(d, b);
        c.push(function() {
          return a.S.cancel(f);
        });
        c.push(a.U.onScroll(d));
        c.push(gc(a.h.getRootNode(), d));
      }).then(
        function() {
          c.forEach(function(a) {
            return a();
          });
        },
        function(a) {
          c.forEach(function(a) {
            return a();
          });
          throw a;
        }
      );
    }
    function Wc(a) {
      return new Promise(function(b) {
        a.waitForBodyOpen().then(function() {
          var c = a.getBody();
          Na(
            c,
            function() {
              return !!c.firstElementChild;
            },
            function() {
              b("AMP-STORY" === c.firstElementChild.tagName);
            }
          );
        });
      });
    }
    function Xc(a) {
      var b = a.getElementById("amp-subscriptions");
      this.h = a;
      Nc(a, function() {});
      this.Ja = null;
      this.R = new Wb(a);
      this.l = this.F = this.O = null;
      this.Za = D().assertElement(b);
      this.A = new O(this.Za);
      this.o = new Zb(this);
      this.w = new hb(a);
      this.Fb = new Tc(a);
      this.ba = K(a, "viewer");
      this.Ta = null;
      this.S = G(a.win, "timer");
      this.nb =
        (this.qa = this.ba.hasCapability("auth")) &&
        this.ba.hasCapability("paywall");
      this.lb = Ja(L(a), "cid");
      this.fb = {};
      this.$a = new ab(a);
    }
    function Z(a) {
      if (!a.Ja) {
        var b = new Ib(a.h),
          c = new ub(b);
        a.Ja = Promise.all([Yc(a), c.resolveConfig()]).then(function(b) {
          a.F = b[0];
          a.O = b[1];
        });
      }
      return a.Ja;
    }
    function Yc(a) {
      return new Promise(function(b, c) {
        var d = $a(a.Za.textContent, function(a) {
          c('Failed to parse "amp-subscriptions" JSON: ' + a);
        });
        b(d);
      });
    }
    h = Xc.prototype;
    h.getAnalytics = function() {
      return this.A;
    };
    h.registerPlatform = function(a, b) {
      var c = this;
      return Z(this).then(function() {
        if (!c.qa) {
          var d = c.F.services.filter(function(b) {
              return (b.serviceId || "local") === a;
            }),
            e = E(d[0], "No matching services for the ID found"),
            f = b(e, c.o);
          c.l.resolvePlatform(f.getServiceId(), f);
          c.A.serviceEvent(
            "subscriptions-service-registered",
            f.getServiceId()
          );
          c.A.serviceEvent(
            "subscriptions-platform-registered",
            f.getServiceId()
          );
          Zc(c, f);
        }
      });
    };
    function $c(a, b) {
      a.R.toggleLoading(!1);
      (!b && a.nb) || a.R.setGrantState(b);
      a.Ta = a.Fb.scheduleView(2e3);
    }
    function ad(a, b, c) {
      a.l.resolveEntitlement(b, c);
      c.decryptedDocumentKey &&
        a.$a.tryToDecryptDocument(c.decryptedDocumentKey);
      a.A.serviceEvent("subscriptions-entitlement-resolved", b);
    }
    function Zc(a, b) {
      var c = 3e3;
      na().development && (c = 6e3);
      var d = b.isPrerenderSafe() ? Promise.resolve() : a.h.whenFirstVisible();
      d.then(function() {
        return a.S.timeoutPromise(c, b.getEntitlements())
          .then(function(c) {
            c = c || U(b.getServiceId());
            ad(a, b.getServiceId(), c);
            return c;
          })
          .catch(function(c) {
            var d = b.getServiceId();
            a.l.reportPlatformFailureAndFallback(d);
            throw D().createError("fetch entitlements failed for " + d, c);
          });
      });
    }
    h.start = function() {
      var a = this;
      Z(this).then(function() {
        a.A.event("subscriptions-started");
        a.R.toggleLoading(!0);
        E(a.O, "Page config is null");
        if (a.qa) bd(a), cd(a, !1);
        else if (a.F.alwaysGrant) $c(a, !0);
        else {
          E(a.F.services, "Services not configured in service config");
          var b = a.F.services.map(function(a) {
            return a.serviceId || "local";
          });
          dd(a, b);
          a.F.services.forEach(function(b) {
            "local" == (b.serviceId || "local") &&
              a.l.resolvePlatform("local", Kc(a.h, b, a.o));
          });
          a.l.getAvailablePlatforms().forEach(function(b) {
            Zc(a, b);
          });
          Wc(a.h).then(function(b) {
            cd(a, !b);
          });
        }
      });
      return this;
    };
    function dd(a, b) {
      var c = a.F.fallbackEntitlement
        ? Jb(a.F.fallbackEntitlement)
        : U("local");
      a.l = new Nb(b, a.F.score, c);
    }
    function bd(a) {
      var b = Ca(a.h.win);
      dd(a, ["local"]);
      a.F.services.forEach(function(c) {
        if ("local" == (c.serviceId || "local")) {
          var d = new Lc(a.h, c, a.o, b);
          a.l.resolvePlatform("local", d);
          d.getEntitlements()
            .then(function(b) {
              ad(a, "local", b);
            })
            .catch(function(b) {
              a.l.reportPlatformFailureAndFallback("local");
              sa().error("amp-subscriptions", "Viewer auth failed:", b);
            });
        }
      });
    }
    h.getReaderId = function(a) {
      var b = this.fb[a];
      if (!b) {
        var c = Promise.resolve(),
          d = "amp-access" + ("local" == a ? "" : "-" + a);
        b = this.lb.then(function(a) {
          return a.get({ scope: d, createCookieIfNotPresent: !0 }, c);
        });
        this.fb[a] = b;
      }
      return b;
    };
    h.getEncryptedDocumentKey = function(a) {
      return this.$a.getEncryptedDocumentKey(a);
    };
    h.getDialog = function() {
      return this.w;
    };
    h.maybeSelectAndActivatePlatform = function() {
      var a = this;
      Z(this).then(function() {
        a.qa || a.F.alwaysGrant || ed(a);
      });
    };
    function cd(a, b) {
      b = void 0 === b ? !0 : b;
      a.l.getGrantStatus().then(function(b) {
        $c(a, b);
        fd(a);
      });
      b && ed(a);
    }
    function ed(a) {
      var b = Promise.all([
        a.l.getGrantStatus(),
        a.l.selectPlatform(),
        a.l.getGrantEntitlement()
      ]);
      b.then(function(b) {
        var c = b[1],
          e = b[2],
          f = a.l.getResolvedEntitlementFor(c.getServiceId()),
          g = e || f;
        c.activate(f, e);
        a.A.serviceEvent("subscriptions-service-activated", c.getServiceId());
        a.A.serviceEvent("subscriptions-platform-activated", c.getServiceId());
        g.granted
          ? a.A.serviceEvent("subscriptions-access-granted", g.service)
          : (a.A.serviceEvent(
              "subscriptions-paywall-activated",
              c.getServiceId()
            ),
            a.A.serviceEvent("subscriptions-access-denied", c.getServiceId()));
      });
    }
    function fd(a) {
      if (a.Ta) {
        var b = a.l.getLocalPlatform();
        a.Ta.then(function() {
          return b.pingbackReturnsAllEntitlements()
            ? a.l.getAllPlatformsEntitlements()
            : a.l.getGrantEntitlement().then(function(a) {
                return a || U("local");
              });
        }).then(function(a) {
          b.isPingbackEnabled() && b.pingback(a);
        });
      }
    }
    h.getPageConfig = function() {
      return this.O;
    };
    h.resetPlatforms = function() {
      var a = this;
      this.l = this.l.resetPlatformStore();
      this.R.toggleLoading(!0);
      this.l.getAvailablePlatforms().forEach(function(b) {
        Zc(a, b);
      });
      this.A.serviceEvent("subscriptions-service-re-authorized", "");
      this.A.serviceEvent("subscriptions-platform-re-authorized", "");
      cd(this);
    };
    h.delegateActionToLocal = function(a) {
      return this.delegateActionToService(a, "local");
    };
    h.delegateActionToService = function(a, b) {
      var c = this;
      return new Promise(function(d) {
        c.l.onPlatformResolves(b, function(e) {
          c.A.event(
            "subscriptions-action-delegated",
            p({ action: a, serviceId: b }),
            p({ action: a, status: "started" })
          );
          d(e.executeAction(a));
        });
      });
    };
    h.decorateServiceAction = function(a, b, c, d) {
      this.l.onPlatformResolves(b, function(b) {
        b.decorateUI(a, c, d);
      });
    };
    h.selectPlatformForLogin = function() {
      return this.l.selectPlatformForLogin();
    };
    h.getAccessReaderId = function() {
      var a = this;
      return Z(this).then(function() {
        return a.getReaderId("local");
      });
    };
    h.getAuthdataField = function(a) {
      var b = this;
      return Z(this)
        .then(function() {
          return b.l.getEntitlementPromiseFor("local");
        })
        .then(function(b) {
          return Za(b.json(), a);
        });
    };
    h.getScoreFactorStates = function() {
      return this.l.getScoreFactorStates();
    };
    (function(a) {
      a.registerServiceForDoc("subscriptions", function(a) {
        return new Xc(a).start();
      });
    })(self.AMP);
  }
});

//# sourceMappingURL=amp-subscriptions-0.1.js.map
