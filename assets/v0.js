self.AMP_CONFIG = {
  "pump-early-frame": 1,
  "chunked-amp": 1,
  "amp-ad-ff-adx-ady": 0.01,
  "amp-list-load-more": 1,
  "amp-consent-v2": 1,
  canary: 0,
  "amp-story-v1": 1,
  "hidden-mutation-observer": 1,
  "amp-list-viewport-resize": 1,
  a4aProfilingRate: 0.01,
  "allow-url-opt-in": [
    "ios-scrollable-iframe",
    "pump-early-frame",
    "macro-after-long-task",
    "twitter-default-placeholder",
    "twitter-default-placeholder-fade",
    "twitter-default-placeholder-pulse"
  ],
  "version-locking": 1,
  "amp-auto-ads-adsense-holdout": 0.1,
  "as-use-attr-for-format": 0.01,
  "adsense-ad-size-optimization": 0.01,
  "blurry-placeholder": 1,
  "amp-playbuzz": 1,
  flexAdSlots: 0.05,
  "amp-action-macro": 1,
  "fixed-elements-in-lightbox": 1,
  "amp-access-iframe": 1,
  "ios-scrollable-iframe": 0,
  doubleclickSraExp: 0.01,
  "allow-doc-opt-in": [
    "amp-next-page",
    "inabox-viewport-friendly",
    "inabox-resources-lite",
    "inabox-viewer-lite",
    "inabox-viewport-lite"
  ],
  "amp-sidebar-swipe-to-dismiss": 1,
  doubleclickSraReportExcludedBlock: 0.1,
  "ampdoc-closest": 1,
  "amp-story-responsive-units": 1,
  "ios-fixed-no-transfer": 0,
  "macro-after-long-task": 0,
  "use-responsive-ads-for-responsive-sizing-in-auto-ads": 0.05,
  "fix-inconsistent-responsive-height-selection": 0.05,
  v: "011910302211460",
  type: "production"
};
/*AMP_CONFIG*/ var global = self;
self.AMP = self.AMP || [];
try {
  (function(_) {
    var f,
      aa =
        "function" == typeof Object.create
          ? Object.create
          : function(a) {
              function b() {}
              b.prototype = a;
              return new b();
            },
      ca;
    if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
    else {
      var da;
      a: {
        var ea = { a: !0 },
          fa = {};
        try {
          fa.__proto__ = ea;
          da = fa.a;
          break a;
        } catch (a) {}
        da = !1;
      }
      ca = da
        ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
              throw new TypeError(a + " is not extensible");
            return a;
          }
        : null;
    }
    var ha = ca;
    function p(a, b) {
      a.prototype = aa(b.prototype);
      a.prototype.constructor = a;
      if (ha) ha(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Nh = b.prototype;
    }
    var ia = (function(a) {
      return "undefined" != typeof window && window === a
        ? a
        : "undefined" != typeof global && null != global
        ? global
        : a;
    })(this);
    function ja(a, b) {
      var c = b || 0,
        d = this.length;
      for (b = 0 <= c ? c : Math.max(d + c, 0); b < d; b++) {
        var e = this[b];
        if (e === a || (a !== a && e !== e)) return !0;
      }
      return !1;
    }
    var ka = /^[a-z][a-z0-9._]*-[a-z0-9._-]*$/,
      la = "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(
        " "
      ),
      ma = { childList: !0, subtree: !0 };
    function na(a, b) {
      if (!ka.test(b) || la.includes(b))
        throw new a('invalid custom element name "' + b + '"');
    }
    function oa(a) {
      new Promise(function() {
        throw a;
      });
    }
    function pa(a, b) {
      this.o = a;
      this.Cc = b;
      this.Cf = a.Object.create(null);
    }
    pa.prototype.define = function(a, b, c) {
      this.Cc.define(a, b, c);
      var d = this.Cf,
        e = d[a];
      e && (e.resolve(), delete d[a]);
    };
    pa.prototype.get = function(a) {
      var b = this.Cc.getByName(a);
      if (b) return b.ctor;
    };
    pa.prototype.whenDefined = function(a) {
      var b = this.o,
        c = b.Promise;
      na(b.SyntaxError, a);
      if (this.Cc.getByName(a)) return c.resolve();
      b = this.Cf;
      var d = b[a];
      if (d) return d.promise;
      var e,
        g = new c(function(a) {
          return (e = a);
        });
      b[a] = { promise: g, resolve: e };
      return g;
    };
    pa.prototype.upgrade = function(a) {
      this.Cc.upgrade(a);
    };
    function qa(a) {
      this.o = a;
      this.ld = a.Object.create(null);
      this.Ga = "";
      this.ea = this.kd = null;
      this.be = [a.document];
    }
    f = qa.prototype;
    f.current = function() {
      var a = this.kd;
      this.kd = null;
      return a;
    };
    f.getByName = function(a) {
      var b = this.ld[a];
      if (b) return b;
    };
    f.getByConstructor = function(a) {
      var b = this.ld,
        c;
      for (c in b) {
        var d = b[c];
        if (d.ctor === a) return d;
      }
    };
    f.define = function(a, b, c) {
      var d = this,
        e = this.o,
        g = e.Error;
      e = e.SyntaxError;
      if (c) throw new g("Extending native custom elements is not supported");
      na(e, a);
      if (this.getByName(a) || this.getByConstructor(b))
        throw new g('duplicate definition "' + a + '"');
      this.ld[a] = { name: a, ctor: b };
      ra(this, a);
      this.be.forEach(function(b) {
        d.upgrade(b, a);
      });
    };
    f.upgrade = function(a, b) {
      var c = !!b,
        d = sa(a, b || this.Ga);
      for (a = 0; a < d.length; a++) {
        var e = d[a];
        c ? ta(this, e) : this.upgradeSelf(e);
      }
    };
    f.upgradeSelf = function(a) {
      var b = this.getByName(a.localName);
      b && ua(this, a, b);
    };
    function sa(a, b) {
      return b && a.querySelectorAll ? a.querySelectorAll(b) : [];
    }
    function ua(a, b, c) {
      c = c.ctor;
      if (!(b instanceof c)) {
        a.kd = b;
        try {
          var d = new c();
          if (d !== b)
            throw new a.o.Error(
              "Constructor illegally returned a different instance."
            );
        } catch (e) {
          oa(e);
        }
      }
    }
    function ta(a, b) {
      var c = a.getByName(b.localName);
      if (c && (ua(a, b, c), b.connectedCallback))
        try {
          b.connectedCallback();
        } catch (d) {
          oa(d);
        }
    }
    function ra(a, b) {
      if (a.Ga) a.Ga += "," + b;
      else {
        a.Ga = b;
        var c = new a.o.MutationObserver(function(b) {
          b && va(a, b);
        });
        a.ea = c;
        a.be.forEach(function(a) {
          c.observe(a, ma);
        });
        wa(a.o, a);
      }
    }
    f.observe = function(a) {
      this.be.push(a);
      this.ea && this.ea.observe(a, ma);
    };
    f.sync = function() {
      this.ea && va(this, this.ea.takeRecords());
    };
    function va(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        if (d) {
          var e = d,
            g = e.addedNodes,
            h = e.removedNodes;
          for (e = 0; e < g.length; e++) {
            var k = g[e],
              l = sa(k, a.Ga);
            ta(a, k);
            for (k = 0; k < l.length; k++) ta(a, l[k]);
          }
          for (e = 0; e < h.length; e++) {
            k = h[e];
            var m = sa(k, a.Ga);
            if (k.disconnectedCallback)
              try {
                k.disconnectedCallback();
              } catch (r) {
                oa(r);
              }
            for (k = 0; k < m.length; k++) {
              var n = m[k];
              if (n.disconnectedCallback)
                try {
                  n.disconnectedCallback();
                } catch (r) {
                  oa(r);
                }
            }
          }
        }
      }
    }
    function wa(a, b) {
      var c = a.Object,
        d = a.document,
        e = a.Document.prototype,
        g = a.Element.prototype,
        h = a.Node.prototype,
        k = e,
        l = k.createElement,
        m = k.importNode;
      k = h;
      var n = k.appendChild,
        r = k.cloneNode,
        t = k.insertBefore,
        v = k.removeChild,
        y = k.replaceChild;
      e.createElement = function(a) {
        var c = b.getByName(a);
        return c ? new c.ctor() : l.apply(this, arguments);
      };
      e.importNode = function() {
        var a = m.apply(this, arguments);
        a && this === d && (b.upgradeSelf(a), b.upgrade(a));
        return a;
      };
      h.appendChild = function() {
        var a = n.apply(this, arguments);
        b.sync();
        return a;
      };
      h.insertBefore = function() {
        var a = t.apply(this, arguments);
        b.sync();
        return a;
      };
      h.removeChild = function() {
        var a = v.apply(this, arguments);
        b.sync();
        return a;
      };
      h.replaceChild = function() {
        var a = y.apply(this, arguments);
        b.sync();
        return a;
      };
      h.cloneNode = function() {
        var a = r.apply(this, arguments);
        a.ownerDocument === d && (b.upgradeSelf(a), b.upgrade(a));
        return a;
      };
      var x = g,
        A = c.getOwnPropertyDescriptor(x, "innerHTML");
      A ||
        ((x = a.HTMLElement.prototype.__proto__),
        (A = c.getOwnPropertyDescriptor(x, "innerHTML")));
      var J = A.set;
      A.set = function(a) {
        J.call(this, a);
        b.upgrade(this);
      };
      c.defineProperty(x, "innerHTML", A);
    }
    function xa() {
      function a() {
        var a = this.constructor,
          b = k.current();
        b || ((b = k.getByConstructor(a)), (b = h.call(g, b.name)));
        b.__proto__ = a.prototype;
        return b;
      }
      var b = ya,
        c = b.Element,
        d = b.HTMLElement,
        e = b.Object,
        g = b.document,
        h = g.createElement,
        k = new qa(b),
        l = new pa(b, k);
      e.defineProperty(b, "customElements", {
        enumerable: !0,
        configurable: !0,
        value: l
      });
      c = c.prototype;
      var m = c.attachShadow,
        n = c.createShadowRoot;
      m &&
        ((c.attachShadow = function(a) {
          var b = m.apply(this, arguments);
          k.observe(b);
          return b;
        }),
        (c.attachShadow.toString = function() {
          return m.toString();
        }));
      n &&
        ((c.createShadowRoot = function() {
          var a = n.apply(this, arguments);
          k.observe(a);
          return a;
        }),
        (c.createShadowRoot.toString = function() {
          return n.toString();
        }));
      za(e, d, a);
      b.HTMLElement = a;
      a.call || (a.call = b.Function.call);
    }
    function za(a, b, c) {
      c.prototype = a.create(b.prototype, {
        constructor: { configurable: !0, writable: !0, value: c }
      });
      c.__proto__ = b;
    }
    function Ca(a, b) {
      var c = void 0 === b ? this.contains(a) : !b;
      if (c) return this.remove(a), !1;
      this.add(a);
      return !0;
    }
    function Ea() {
      var a = self;
      if (
        /Trident|MSIE|IEMobile/i.test(a.navigator.userAgent) &&
        a.DOMTokenList
      ) {
        a.Object.defineProperty(a.DOMTokenList.prototype, "toggle", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: Ca
        });
        var b = a.DOMTokenList.prototype.add;
        a.DOMTokenList.prototype.add = function() {
          for (var a = 0; a < arguments.length; a++) b.call(this, arguments[a]);
        };
      }
    }
    function Fa(a) {
      return a == this || this.documentElement.contains(a);
    }
    function Ga(a, b) {
      b = void 0 === b ? "" : b;
      try {
        return decodeURIComponent(a);
      } catch (c) {
        return b;
      }
    }
    var Ha = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
    function q(a) {
      var b = Object.create(null);
      if (!a) return b;
      for (var c; (c = Ha.exec(a)); ) {
        var d = Ga(c[1], c[1]),
          e = c[2] ? Ga(c[2].replace(/\+/g, " "), c[2]) : "";
        b[d] = e;
      }
      return b;
    }
    var Ia = "";
    function u(a) {
      var b = a || self;
      if (b.__AMP_MODE) b = b.__AMP_MODE;
      else {
        var c = self.AMP_CONFIG || {};
        var d = !!c.test || !1;
        var e = q(b.location.originalHash || b.location.hash);
        c = c.spt;
        var g = q(b.location.search);
        Ia ||
          (Ia =
            b.AMP_CONFIG && b.AMP_CONFIG.v
              ? b.AMP_CONFIG.v
              : "011910302211460");
        d = {
          localDev: !1,
          development: !!(
            0 <=
              ["1", "actions", "amp", "amp4ads", "amp4email"].indexOf(
                e.development
              ) || b.AMP_DEV_MODE
          ),
          examiner: "2" == e.development,
          geoOverride: e["amp-geo"],
          userLocationOverride: e["amp-user-location"],
          minified: !0,
          lite: void 0 != g.amp_lite,
          test: d,
          log: e.log,
          version: "1910302211460",
          rtvVersion: Ia,
          singlePassType: c
        };
        b = b.__AMP_MODE = d;
      }
      return b;
    }
    var Ja = Object.prototype.toString;
    function w(a) {
      return Array.isArray(a);
    }
    function Ka(a) {
      return "[object Object]" === Ja.call(a);
    }
    function La(a) {
      return "number" === typeof a && isFinite(a);
    }
    function Ma(a) {
      var b = !1,
        c = null,
        d = a;
      return function(a) {
        for (var e = [], h = 0; h < arguments.length; ++h)
          e[h - 0] = arguments[h];
        b || ((c = d.apply(self, e)), (b = !0), (d = null));
        return c;
      };
    }
    var Na = self.AMP_CONFIG || {},
      Oa = {
        thirdParty: Na.thirdPartyUrl || "https://3p.ampproject.net",
        thirdPartyFrameHost: Na.thirdPartyFrameHost || "ampproject.net",
        thirdPartyFrameRegex:
          ("string" == typeof Na.thirdPartyFrameRegex
            ? new RegExp(Na.thirdPartyFrameRegex)
            : Na.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/,
        cdn: Na.cdnUrl || "https://cdn.ampproject.org",
        cdnProxyRegex:
          ("string" == typeof Na.cdnProxyRegex
            ? new RegExp(Na.cdnProxyRegex)
            : Na.cdnProxyRegex) ||
          /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,
        localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
        errorReporting:
          Na.errorReportingUrl || "https://amp-error-reporting.appspot.com/r",
        localDev: Na.localDev || !1,
        trustedViewerHosts: [
          /(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,
          /(^|\.)gmail\.(com|dev)$/
        ]
      },
      Pa = { urls: Oa };
    function Qa() {}
    function Ra(a) {
      return 0 <= a.indexOf("\u200b\u200b\u200b");
    }
    var Sa = void 0;
    function Ta(a) {
      Sa = a;
    }
    function Ua(a, b) {
      return b.reduce(function(a, b) {
        return a + "&s[]=" + encodeURIComponent(String(Va(b)));
      }, "https://log.amp.dev/?v=011910302211460&id=" + encodeURIComponent(a));
    }
    function Wa(a, b, c) {
      var d = this;
      c = void 0 === c ? "" : c;
      this.win = a;
      this.Ug = b;
      this.Vg =
        this.win.console && this.win.console.log && "0" != u().log
          ? this.Ug({
              localDev: !1,
              development: u(void 0).development,
              filter: u(void 0).filter,
              minified: !0,
              lite: u(void 0).lite,
              test: !1,
              log: u(void 0).log,
              version: u(void 0).version,
              rtvVersion: u(void 0).rtvVersion,
              singlePassType: u(void 0).singlePassType
            })
          : 0;
      this.Lc = c;
      this.pc = null;
      this.Bg = Ma(function() {
        a.fetch(Oa.cdn + "/rtv/011910302211460/log-messages.simple.json")
          .then(function(a) {
            return a.json();
          }, Qa)
          .then(function(a) {
            a && (d.pc = a);
          });
      });
    }
    function Xa(a) {
      return void 0 !== Sa ? Sa : a.Vg;
    }
    function Ya(a, b, c, d) {
      if (0 != Xa(a)) {
        var e = a.win.console.log;
        "ERROR" == c
          ? (e = a.win.console.error || e)
          : "INFO" == c
          ? (e = a.win.console.info || e)
          : "WARN" == c && (e = a.win.console.warn || e);
        c = d;
        c = w(c[0]) ? Za(a, c[0]) : c;
        b = "[" + b + "]";
        "string" === typeof c[0] ? (c[0] = b + " " + c[0]) : c.unshift(b);
        e.apply(a.win.console, c);
      }
    }
    f = Wa.prototype;
    f.isEnabled = function() {
      return 0 != Xa(this);
    };
    f.fine = function(a, b) {
      4 <= Xa(this) &&
        Ya(this, a, "FINE", Array.prototype.slice.call(arguments, 1));
    };
    f.info = function(a, b) {
      3 <= Xa(this) &&
        Ya(this, a, "INFO", Array.prototype.slice.call(arguments, 1));
    };
    f.warn = function(a, b) {
      2 <= Xa(this) &&
        Ya(this, a, "WARN", Array.prototype.slice.call(arguments, 1));
    };
    f.va = function(a, b) {
      if (1 <= Xa(this))
        Ya(this, a, "ERROR", Array.prototype.slice.call(arguments, 1));
      else {
        var c = $a.apply(null, Array.prototype.slice.call(arguments, 1));
        ab(this, c);
        return c;
      }
    };
    f.error = function(a, b) {
      var c = this.va.apply(this, arguments);
      c && ((c.name = a || c.name), self.__AMP_REPORT_ERROR(c));
    };
    f.expectedError = function(a, b) {
      var c = this.va.apply(this, arguments);
      c && ((c.expected = !0), self.__AMP_REPORT_ERROR(c));
    };
    f.createError = function(a) {
      var b = $a.apply(null, arguments);
      ab(this, b);
      return b;
    };
    f.createExpectedError = function(a) {
      var b = $a.apply(null, arguments);
      ab(this, b);
      b.expected = !0;
      return b;
    };
    f.assert = function(a, b, c) {
      var d;
      if (w(b)) return this.assert.apply(this, [a].concat(Za(this, b)));
      if (!a) {
        var e = (b || "Assertion failed").split("%s"),
          g = e.shift(),
          h = g,
          k = [],
          l = 2;
        for ("" != g && k.push(g); 0 < e.length; ) {
          var m = e.shift(),
            n = arguments[l++];
          n && n.tagName && (d = n);
          k.push(n);
          g = m.trim();
          "" != g && k.push(g);
          h += Va(n) + m;
        }
        l = Error(h);
        l.fromAssert = !0;
        l.associatedElement = d;
        l.messageArray = k;
        ab(this, l);
        self.__AMP_REPORT_ERROR(l);
        throw l;
      }
      return a;
    };
    f.assertElement = function(a, b) {
      bb(this, a, a && 1 == a.nodeType, "Element expected", b);
      return a;
    };
    f.assertString = function(a, b) {
      bb(this, a, "string" == typeof a, "String expected", b);
      return a;
    };
    f.assertNumber = function(a, b) {
      bb(this, a, "number" == typeof a, "Number expected", b);
      return a;
    };
    f.assertArray = function(a, b) {
      bb(this, a, w(a), "Array expected", b);
      return a;
    };
    f.assertBoolean = function(a, b) {
      bb(this, a, !!a === a, "Boolean expected", b);
      return a;
    };
    f.assertEnumValue = function(a, b, c) {
      a: {
        for (var d in a)
          if (a[d] === b) {
            a = !0;
            break a;
          }
        a = !1;
      }
      if (a) return b;
      this.assert(!1, 'Unknown %s value: "%s"', c || "enum", b);
    };
    function ab(a, b) {
      b = db(b);
      a.Lc
        ? b.message
          ? -1 == b.message.indexOf(a.Lc) && (b.message += a.Lc)
          : (b.message = a.Lc)
        : Ra(b.message) &&
          (b.message = b.message.replace("\u200b\u200b\u200b", ""));
    }
    function Za(a, b) {
      var c = b.shift();
      u(a.win).development && a.Bg();
      return a.pc && c in a.pc
        ? [a.pc[c]].concat(b)
        : ["More info at " + Ua(c, b)];
    }
    function bb(a, b, c, d, e) {
      w(e) ? a.assert(c, e.concat(b)) : a.assert(c, (e || d) + ": %s", b);
    }
    function Va(a) {
      return a && 1 == a.nodeType
        ? a.tagName.toLowerCase() + (a.id ? "#" + a.id : "")
        : a;
    }
    function db(a) {
      var b = Object.getOwnPropertyDescriptor(a, "message");
      if (b && b.writable) return a;
      var c = a.stack,
        d = Error(a.message),
        e;
      for (e in a) d[e] = a[e];
      d.stack = c;
      return d;
    }
    function $a(a) {
      for (var b = null, c = "", d = 0; d < arguments.length; d++) {
        var e = arguments[d];
        e instanceof Error && !b ? (b = db(e)) : (c && (c += " "), (c += e));
      }
      b ? c && (b.message = c + ": " + b.message) : (b = Error(c));
      return b;
    }
    function eb(a) {
      var b = $a.apply(null, arguments);
      setTimeout(function() {
        self.__AMP_REPORT_ERROR(b);
        throw b;
      });
    }
    self.__AMP_LOG = self.__AMP_LOG || {
      user: null,
      dev: null,
      userForEmbed: null
    };
    var fb = self.__AMP_LOG,
      gb = null;
    function z(a) {
      fb.user || (fb.user = hb("\u200b\u200b\u200b"));
      var b = fb.user.win;
      return a && a.ownerDocument.defaultView != b
        ? fb.userForEmbed
          ? fb.userForEmbed
          : (fb.userForEmbed = hb("\u200b\u200b\u200b\u200b"))
        : fb.user;
    }
    function hb(a) {
      if (!gb) throw Error("failed to call initLogConstructor");
      return new gb(
        self,
        function(a) {
          var b = parseInt(a.log, 10);
          return a.development || 1 <= b ? 4 : 2;
        },
        a
      );
    }
    function C() {
      if (fb.dev) return fb.dev;
      if (!gb) throw Error("failed to call initLogConstructor");
      return (fb.dev = new gb(self, function(a) {
        a = parseInt(a.log, 10);
        return 3 <= a ? 4 : 2 <= a ? 3 : 0;
      }));
    }
    function D(a, b, c, d, e, g) {
      return z().assert(
        a,
        b,
        c,
        d,
        e,
        g,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0
      );
    }
    var ib = Object.prototype.hasOwnProperty;
    function E(a) {
      var b = Object.create(null);
      a && Object.assign(b, a);
      return b;
    }
    function G(a) {
      return a || {};
    }
    function I() {
      var a, b;
      this.promise = new Promise(function(c, d) {
        a = c;
        b = d;
      });
      this.resolve = a;
      this.reject = b;
    }
    function K(a) {
      return new Promise(function(b) {
        b(a());
      });
    } /*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
    var jb = /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;
    function kb(a, b, c, d, e) {
      return e
        ? e
        : b
        ? "\ufffd"
        : d
        ? a.slice(0, -1) +
          "\\" +
          a
            .slice(-1)
            .charCodeAt(0)
            .toString(16) +
          " "
        : "\\" + a;
    }
    var lb;
    function mb(a) {
      try {
        var b = a.ownerDocument,
          c = b.createElement("div"),
          d = b.createElement("div");
        c.appendChild(d);
        return c.querySelector(":scope div") === d;
      } catch (e) {
        return !1;
      }
    }
    function nb(a, b) {
      var c = a.length - b.length;
      return 0 <= c && a.indexOf(b, c) == c;
    }
    function L(a, b) {
      return b.length > a.length ? !1 : 0 == a.lastIndexOf(b, 0);
    }
    function ob(a) {
      return a.trimStart ? a.trimStart() : (a + "_").trim().slice(0, -1);
    }
    function pb(a, b, c) {
      if (b(a)) c();
      else {
        var d = a.ownerDocument.defaultView;
        if (d.MutationObserver) {
          var e = new d.MutationObserver(function() {
            b(a) && (e.disconnect(), c());
          });
          e.observe(a, { childList: !0 });
        } else
          var g = d.setInterval(function() {
            b(a) && (d.clearInterval(g), c());
          }, 5);
      }
    }
    function qb(a, b) {
      pb(
        a.documentElement,
        function() {
          return !!a.body;
        },
        b
      );
    }
    function rb(a) {
      return new Promise(function(b) {
        return qb(a, b);
      });
    }
    function sb(a) {
      var b = a.isConnected;
      if (void 0 !== b) return b;
      do
        if (((a = tb(a)), a.host)) a = a.host;
        else break;
      while (1);
      return a.nodeType === Node.DOCUMENT_NODE;
    }
    function tb(a) {
      if (Node.prototype.getRootNode) return a.getRootNode() || a;
      for (; a.parentNode && !ub(a); a = a.parentNode);
      return a;
    }
    function ub(a) {
      return a
        ? "I-AMPHTML-SHADOW-ROOT" == a.tagName
          ? !0
          : 11 == a.nodeType &&
            "[object ShadowRoot]" === Object.prototype.toString.call(a)
        : !1;
    }
    function vb(a, b) {
      for (var c; a && a !== c; a = a.parentElement) if (b(a)) return a;
      return null;
    }
    function wb(a, b) {
      for (; a; a = a.parentNode) if (b(a)) return a;
      return null;
    }
    function xb(a, b) {
      return a.closest
        ? a.closest(b)
        : vb(a, function(a) {
            return yb(a, b);
          });
    }
    function zb(a, b) {
      var c = [];
      for (a = a.firstElementChild; a; a = a.nextElementSibling)
        b(a) && c.push(a);
      return c;
    }
    function Ab(a, b) {
      for (a = a.lastElementChild; a; a = a.previousElementSibling)
        if (b(a)) return a;
      return null;
    }
    function Bb(a, b) {
      var c = [];
      for (a = a.firstChild; a; a = a.nextSibling) b(a) && c.push(a);
      return c;
    }
    function Cb(a, b) {
      /^[\w-]+$/.test(b);
      return Db(a, "> [" + b + "]");
    }
    function yb(a, b) {
      var c =
        a.matches ||
        a.webkitMatchesSelector ||
        a.mozMatchesSelector ||
        a.msMatchesSelector ||
        a.oMatchesSelector;
      return c ? c.call(a, b) : !1;
    }
    function Eb(a, b) {
      var c = "i-amphtml-scoped";
      a.classList.add(c);
      var d = b.replace(/^|,/g, "$&." + c + " "),
        e = a.querySelectorAll(d);
      a.classList.remove(c);
      return e;
    }
    function Db(a, b) {
      if (void 0 !== lb ? lb : (lb = mb(a)))
        return a.querySelector(b.replace(/^|,/g, "$&:scope "));
      var c = Eb(a, b);
      return void 0 === c[0] ? null : c[0];
    }
    function Fb(a, b, c, d) {
      try {
        var e = a.open(b, c, d);
      } catch (h) {
        C().error("DOM", "Failed to open url on target: ", c, h);
      }
      if (!(c = e || "_top" == c)) {
        c = d || "";
        var g;
        "number" !== typeof g && (g = 0);
        c = g + 8 > c.length ? !1 : -1 !== c.indexOf("noopener", g);
      }
      c || (e = a.open(b, "_top"));
      return e;
    }
    function Gb(a) {
      try {
        a.focus();
      } catch (b) {}
    }
    function Hb(a) {
      return a.parent && a.parent != a;
    }
    function Ib(a) {
      var b = Object.create(null),
        c;
      for (c in a)
        if (Jb(a, c)) {
          var d = a[c];
          b[c] = Ka(d) ? Ib(d) : d;
        }
      return b;
    }
    function Kb(a) {
      return JSON.parse(a);
    }
    function Jb(a, b) {
      return null == a || "object" != typeof a
        ? !1
        : Object.prototype.hasOwnProperty.call(a, b);
    }
    function Lb(a) {
      return "undefined" !== typeof TextEncoder
        ? new TextEncoder("utf-8").encode(a)
        : Mb(unescape(encodeURIComponent(a)));
    }
    function Mb(a) {
      for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        b[c] = d;
      }
      return b;
    }
    function Nb(a) {
      for (var b = Array(a.length), c = 0; c < a.length; c++)
        b[c] = String.fromCharCode(a[c]);
      return b.join("");
    }
    var Ob = { document: 1, text: 2 },
      Pb = ["GET", "POST"];
    function Qb(a, b) {
      b = void 0 === b ? {} : b;
      return new Promise(function(c, d) {
        var e = Rb(b.method || "GET"),
          g = Sb(e, a);
        "include" == b.credentials && (g.withCredentials = !0);
        b.responseType in Ob && (g.responseType = b.responseType);
        b.headers &&
          Object.keys(b.headers).forEach(function(a) {
            g.setRequestHeader(a, b.headers[a]);
          });
        g.onreadystatechange = function() {
          2 > g.readyState ||
            (100 > g.status || 599 < g.status
              ? ((g.onreadystatechange = null),
                d(z().createExpectedError("Unknown HTTP status " + g.status)))
              : 4 == g.readyState && c(new Tb(g)));
        };
        g.onerror = function() {
          d(z().createExpectedError("Network failure"));
        };
        g.onabort = function() {
          d(z().createExpectedError("Request aborted"));
        };
        "POST" == e ? g.send(b.body) : g.send();
      });
    }
    function Sb(a, b) {
      var c = new XMLHttpRequest();
      if ("withCredentials" in c) c.open(a, b, !0);
      else throw C().createExpectedError("CORS is not supported");
      return c;
    }
    function Tb(a) {
      this.Ma = a;
      this.status = this.Ma.status;
      this.statusText = this.Ma.statusText;
      this.ok = 200 <= this.status && 300 > this.status;
      this.headers = new Ub(a);
      this.bodyUsed = !1;
      this.body = null;
      this.url = a.responseURL;
    }
    Tb.prototype.clone = function() {
      return new Tb(this.Ma);
    };
    function Vb(a) {
      a.bodyUsed = !0;
      return Promise.resolve(a.Ma.responseText);
    }
    Tb.prototype.text = function() {
      return Vb(this);
    };
    Tb.prototype.json = function() {
      return Vb(this).then(Kb);
    };
    Tb.prototype.arrayBuffer = function() {
      return Vb(this).then(Lb);
    };
    function Rb(a) {
      if (void 0 === a) return "GET";
      a = a.toUpperCase();
      Pb.includes(a);
      return a;
    }
    function Ub(a) {
      this.Ma = a;
    }
    Ub.prototype.get = function(a) {
      return this.Ma.getResponseHeader(a);
    };
    Ub.prototype.has = function(a) {
      return null != this.Ma.getResponseHeader(a);
    };
    function Wb(a, b) {
      b = void 0 === b ? {} : b;
      var c = E();
      a = Object.assign(
        {
          status: 200,
          statusText: "OK",
          responseText: a ? String(a) : "",
          getResponseHeader: function(a) {
            var b = String(a).toLowerCase();
            return ib.call(c, b) ? c[b] : null;
          }
        },
        b
      );
      a.status = void 0 === b.status ? 200 : parseInt(b.status, 10);
      if (w(b.headers))
        b.headers.forEach(function(a) {
          var b = a[1];
          c[String(a[0]).toLowerCase()] = String(b);
        });
      else if (Ka(b.headers))
        for (var d in b.headers)
          c[String(d).toLowerCase()] = String(b.headers[d]);
      b.statusText && (a.statusText = String(b.statusText));
      Tb.call(this, a);
    }
    p(Wb, Tb);
    function M(a, b, c, d) {
      return {
        left: a,
        top: b,
        width: c,
        height: d,
        bottom: b + d,
        right: a + c,
        x: a,
        y: b
      };
    }
    function Xb(a) {
      for (
        var b = -Infinity, c = Infinity, d = -Infinity, e = Infinity, g = 0;
        g < arguments.length;
        g++
      ) {
        var h = arguments[g];
        if (
          h &&
          ((b = Math.max(b, h.left)),
          (c = Math.min(c, h.left + h.width)),
          (d = Math.max(d, h.top)),
          (e = Math.min(e, h.top + h.height)),
          c < b || e < d)
        )
          return null;
      }
      return Infinity == c ? null : M(b, d, c - b, e - d);
    }
    function Yb(a, b, c) {
      return M(
        a.left - a.width * b,
        a.top - a.height * c,
        a.width * (1 + 2 * b),
        a.height * (1 + 2 * c)
      );
    }
    function Zb(a, b, c) {
      return (0 == b && 0 == c) || (0 == a.width && 0 == a.height)
        ? a
        : M(a.left + b, a.top + c, a.width, a.height);
    }
    var $b;
    function ac() {
      return sb(this) ? $b.call(this) : M(0, 0, 0, 0);
    }
    function bc() {
      var a = cc;
      if (!a.document) return !1;
      try {
        var b = a.document.createElement("div");
        return 0 !== b.getBoundingClientRect().top;
      } catch (c) {
        return !0;
      }
    }
    function dc(a) {
      return (a = Number(a)) ? (0 < a ? 1 : -1) : a;
    }
    var ec = Object.prototype.hasOwnProperty;
    function fc(a, b) {
      if (null == a)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var c = Object(a), d = 1; d < arguments.length; d++) {
        var e = arguments[d];
        if (null != e) for (var g in e) ec.call(e, g) && (c[g] = e[g]);
      }
      return c;
    }
    function gc(a) {
      return Object.keys(a).map(function(b) {
        return a[b];
      });
    }
    function hc(a) {
      if (!(this instanceof hc))
        throw new TypeError("Constructor Promise requires `new`");
      if (!ic(a)) throw new TypeError("Must pass resolver function");
      this._state = jc;
      this._value = [];
      this._isChainEnd = !0;
      kc(this, lc(this, mc), lc(this, nc), { then: a });
    }
    hc.prototype.then = function(a, b) {
      a = ic(a) ? a : void 0;
      b = ic(b) ? b : void 0;
      if (a || b) this._isChainEnd = !1;
      return this._state(this._value, a, b);
    };
    hc.prototype.catch = function(a) {
      return this.then(void 0, a);
    };
    function oc(a) {
      var b = this;
      return a === Object(a) && a instanceof this
        ? a
        : new b(function(b) {
            b(a);
          });
    }
    function pc(a) {
      return new this(function(b, c) {
        c(a);
      });
    }
    function qc(a) {
      var b = this;
      return new b(function(c, d) {
        var e = a.length,
          g = Array(e);
        if (0 === e) return c(g);
        rc(a, function(a, k) {
          b.resolve(a).then(function(a) {
            g[k] = a;
            0 === --e && c(g);
          }, d);
        });
      });
    }
    function sc(a) {
      var b = this;
      return new b(function(c, d) {
        for (var e = 0; e < a.length; e++) b.resolve(a[e]).then(c, d);
      });
    }
    function mc(a, b, c, d) {
      if (!b)
        return d && ((b = d.promise), (b._state = mc), (b._value = a)), this;
      d || (d = new tc(this.constructor));
      uc(vc(d, b, a));
      return d.promise;
    }
    function nc(a, b, c, d) {
      if (!c)
        return d && ((b = d.promise), (b._state = nc), (b._value = a)), this;
      d || (d = new tc(this.constructor));
      uc(vc(d, c, a));
      return d.promise;
    }
    function jc(a, b, c, d) {
      if (!d) {
        if (!b && !c) return this;
        d = new tc(this.constructor);
      }
      a.push({
        deferred: d,
        onFulfilled: b || d.resolve,
        onRejected: c || d.reject
      });
      return d.promise;
    }
    function tc(a) {
      var b = this;
      this.promise = new a(function(a, d) {
        b.resolve = a;
        b.reject = d;
      });
      return b;
    }
    function wc(a, b, c, d) {
      var e = a._value;
      a._state = b;
      a._value = c;
      d &&
        b === jc &&
        d._state(c, void 0, void 0, {
          promise: a,
          resolve: void 0,
          reject: void 0
        });
      for (var g = 0; g < e.length; g++) {
        var h = e[g];
        a._state(c, h.onFulfilled, h.onRejected, h.deferred);
      }
      e.length = 0;
      b === nc &&
        a._isChainEnd &&
        setTimeout(function() {
          if (a._isChainEnd) throw c;
        }, 0);
    }
    function lc(a, b) {
      return function(c) {
        wc(a, b, c);
      };
    }
    function xc() {}
    function ic(a) {
      return "function" === typeof a;
    }
    function rc(a, b) {
      for (var c = 0; c < a.length; c++) b(a[c], c);
    }
    function vc(a, b, c) {
      var d = a.promise,
        e = a.resolve,
        g = a.reject;
      return function() {
        try {
          var a = b(c);
          kc(d, e, g, a, a);
        } catch (k) {
          g(k);
        }
      };
    }
    var uc = (function() {
      function a() {
        for (var a = 0; a < e; a++) {
          var b = d[a];
          d[a] = null;
          b();
        }
        e = 0;
      }
      function b(a) {
        0 === e && c();
        d[e++] = a;
      }
      if ("undefined" !== typeof window && window.postMessage) {
        window.addEventListener("message", a);
        var c = function() {
          window.postMessage("macro-task", "*");
        };
      } else
        c = function() {
          setTimeout(a, 0);
        };
      var d = Array(16),
        e = 0;
      return b;
    })();
    function kc(a, b, c, d, e) {
      var g = c,
        h;
      try {
        if (d === a) throw new TypeError("Cannot fulfill promise with itself");
        var k = d === Object(d);
        if (k && d instanceof a.constructor) wc(a, d._state, d._value, d);
        else if (k && (h = d.then) && ic(h)) {
          var l = function(d) {
            l = g = xc;
            kc(a, b, c, d, d);
          };
          g = function(a) {
            l = g = xc;
            c(a);
          };
          h.call(
            e,
            function(a) {
              l(a);
            },
            function(a) {
              g(a);
            }
          );
        } else b(d);
      } catch (m) {
        g(m);
      }
    }
    (function(a) {
      a.fetch ||
        (Object.defineProperty(a, "fetch", {
          value: Qb,
          writable: !0,
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(a, "Response", {
          value: Wb,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }));
    })(self);
    (function(a) {
      a.Math.sign ||
        a.Object.defineProperty(a.Math, "sign", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: dc
        });
    })(self);
    (function(a) {
      a.Object.assign ||
        a.Object.defineProperty(a.Object, "assign", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: fc
        });
    })(self);
    (function(a) {
      a.Object.values ||
        a.Object.defineProperty(a.Object, "values", {
          configurable: !0,
          writable: !0,
          value: gc
        });
    })(self);
    (function(a) {
      a.Promise ||
        ((a.Promise = hc),
        hc.default && (a.Promise = hc.default),
        (a.Promise.resolve = oc),
        (a.Promise.reject = pc),
        (a.Promise.all = qc),
        (a.Promise.race = sc));
    })(self);
    (function(a) {
      a.Array.prototype.includes ||
        a.Object.defineProperty(Array.prototype, "includes", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: ja
        });
    })(self);
    if (self.document) {
      Ea();
      var yc = self,
        zc = yc.HTMLDocument || yc.Document;
      zc &&
        !zc.prototype.contains &&
        yc.Object.defineProperty(zc.prototype, "contains", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: Fa
        });
      var cc = self;
      bc() &&
        (($b = Element.prototype.getBoundingClientRect),
        cc.Object.defineProperty(
          cc.Element.prototype,
          "getBoundingClientRect",
          { value: ac }
        ));
      var ya = self,
        Ac = ya.document,
        Bc,
        Cc = ya.customElements;
      Bc = !!(Cc && Cc.define && Cc.get && Cc.whenDefined);
      var Dc;
      if (!(Dc = !Ac)) {
        var Ec;
        if ((Ec = Bc))
          Ec = -1 === ya.HTMLElement.toString().indexOf("[native code]");
        Dc = Ec;
      }
      Dc || xa();
    }
    function Fc() {
      var a = 100;
      this.rg = a;
      this.Vc = this.W = 0;
      this.Oa = Object.create(null);
    }
    Fc.prototype.has = function(a) {
      return !!this.Oa[a];
    };
    Fc.prototype.get = function(a) {
      var b = this.Oa[a];
      if (b) return (b.access = ++this.Vc), b.payload;
    };
    Fc.prototype.put = function(a, b) {
      this.has(a) || this.W++;
      this.Oa[a] = { payload: b, access: this.Vc };
      if (!(this.W <= this.rg)) {
        C().warn("lru-cache", "Trimming LRU cache");
        a = this.Oa;
        var c = this.Vc + 1,
          d;
        for (d in a) {
          var e = a[d].access;
          if (e < c) {
            c = e;
            var g = d;
          }
        }
        void 0 !== g && (delete a[g], this.W--);
      }
    };
    var Gc = G({ c: !0, v: !0, a: !0, ad: !0, action: !0 }),
      Hc,
      Ic,
      Jc = /[?&]amp_js[^&]*/,
      Kc = /[?&]amp_gsa[^&]*/,
      Lc = /[?&]amp_r[^&]*/,
      Mc = /[?&]amp_kit[^&]*/,
      Nc = /[?&]usqp[^&]*/,
      Oc = ["javascript:", "data:", "vbscript:"];
    function O(a, b) {
      Hc ||
        ((Hc = self.document.createElement("a")),
        (Ic = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new Fc())));
      return Pc(Hc, a, b ? null : Ic);
    }
    function Pc(a, b, c) {
      if (c && c.has(b)) return c.get(b);
      a.href = b;
      a.protocol || (a.href = a.href);
      var d = {
        href: a.href,
        protocol: a.protocol,
        host: a.host,
        hostname: a.hostname,
        port: "0" == a.port ? "" : a.port,
        pathname: a.pathname,
        search: a.search,
        hash: a.hash,
        origin: null
      };
      "/" !== d.pathname[0] && (d.pathname = "/" + d.pathname);
      if (
        ("http:" == d.protocol && 80 == d.port) ||
        ("https:" == d.protocol && 443 == d.port)
      )
        (d.port = ""), (d.host = d.hostname);
      var e =
        a.origin && "null" != a.origin
          ? a.origin
          : "data:" != d.protocol && d.host
          ? d.protocol + "//" + d.host
          : d.href;
      d.origin = e;
      var g = d;
      c && c.put(b, g);
      return g;
    }
    function Qc(a, b, c) {
      if (!b) return a;
      var d = a.split("#", 2),
        e = d[0].split("?", 2),
        g =
          e[0] +
          (e[1] ? (c ? "?" + b + "&" + e[1] : "?" + e[1] + "&" + b) : "?" + b);
      return (g += d[1] ? "#" + d[1] : "");
    }
    function Rc(a, b) {
      return Qc(a, Sc(b));
    }
    function Sc(a) {
      var b = [],
        c;
      for (c in a) {
        var d = a[c];
        if (null != d)
          if (w(d))
            for (var e = 0; e < d.length; e++) {
              var g = d[e];
              b.push(encodeURIComponent(c) + "=" + encodeURIComponent(g));
            }
          else b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d));
      }
      return b.join("&");
    }
    function Tc(a) {
      "string" == typeof a && (a = O(a));
      return (
        "https:" == a.protocol ||
        "localhost" == a.hostname ||
        "127.0.0.1" == a.hostname ||
        nb(a.hostname, ".localhost")
      );
    }
    function Uc(a, b, c) {
      c = void 0 === c ? "source" : c;
      D(null != a, "%s %s must be available", b, c);
      var d = a;
      D(
        Tc(d) || /^(\/\/)/.test(d),
        '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',
        b,
        c,
        d
      );
      return d;
    }
    function Vc(a) {
      var b = a.indexOf("#");
      return -1 == b ? a : a.substring(0, b);
    }
    function P(a) {
      "string" == typeof a && (a = O(a));
      return Oa.cdnProxyRegex.test(a.origin);
    }
    function Wc(a) {
      if (!a) return !0;
      "string" == typeof a && (a = O(a));
      return !Oc.includes(a.protocol);
    }
    function Xc(a) {
      var b = O(a),
        c = Yc(b.search);
      return b.origin + b.pathname + c + b.hash;
    }
    function Yc(a) {
      if (!a || "?" == a) return "";
      var b = a
        .replace(Jc, "")
        .replace(Kc, "")
        .replace(Lc, "")
        .replace(Mc, "")
        .replace(Nc, "")
        .replace(/^[?&]/, "");
      return b ? "?" + b : "";
    }
    function Zc(a) {
      "string" == typeof a && (a = O(a));
      if (!P(a)) return a.href;
      var b = a.pathname.split("/");
      D(Gc[b[1]], "Unknown path prefix in url %s", a.href);
      var c = b[2],
        d =
          "s" == c
            ? "https://" + decodeURIComponent(b[3])
            : "http://" + decodeURIComponent(c);
      D(0 < d.indexOf("."), "Expected a . in origin %s", d);
      b.splice(1, "s" == c ? 3 : 2);
      return d + b.join("/") + Yc(a.search) + (a.hash || "");
    }
    function $c(a) {
      return O(Zc(a)).origin;
    }
    function ad(a, b) {
      bd(b);
      var c = $c(a.location.href);
      a =
        encodeURIComponent("__amp_source_origin") + "=" + encodeURIComponent(c);
      return Qc(b, a, void 0);
    }
    function bd(a) {
      var b = O(a),
        c = q(b.search);
      D(!("__amp_source_origin" in c), "Source origin is not allowed in %s", a);
    }
    function cd(a) {
      return !(!a.AMP_CONFIG || !a.AMP_CONFIG.canary);
    }
    function Q(a, b) {
      var c = dd(a);
      return !!c[b];
    }
    function ed(a, b, c, d) {
      var e = Q(a, b),
        g = !(void 0 !== c ? !c : e);
      if (g != e && ((dd(a)[b] = g), !d)) {
        var h = fd(a);
        h[b] = g;
        var k = h,
          l = [],
          m;
        for (m in k) l.push((!1 === k[m] ? "-" : "") + m);
        try {
          "localStorage" in a &&
            a.localStorage.setItem("amp-experiment-toggles", l.join(","));
        } catch (n) {
          z().error(
            "EXPERIMENTS",
            "Failed to save experiments to localStorage."
          );
        }
        z().warn(
          "EXPERIMENTS",
          '"%s" experiment %s for the domain "%s". See: https://amp.dev/documentation/guides-and-tutorials/learn/experimental',
          b,
          g ? "enabled" : "disabled",
          a.location.hostname
        );
      }
      return g;
    }
    function dd(a) {
      if (a.__AMP__EXPERIMENT_TOGGLES) return a.__AMP__EXPERIMENT_TOGGLES;
      a.__AMP__EXPERIMENT_TOGGLES = Object.create(null);
      var b = a.__AMP__EXPERIMENT_TOGGLES;
      if (a.AMP_CONFIG)
        for (var c in a.AMP_CONFIG) {
          var d = a.AMP_CONFIG[c];
          "number" === typeof d &&
            0 <= d &&
            1 >= d &&
            (b[c] = Math.random() < d);
        }
      if (
        a.AMP_CONFIG &&
        Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"]) &&
        0 < a.AMP_CONFIG["allow-doc-opt-in"].length
      ) {
        var e = a.AMP_CONFIG["allow-doc-opt-in"],
          g = a.document.head.querySelector(
            'meta[name="amp-experiments-opt-in"]'
          );
        if (g) {
          var h = g.getAttribute("content").split(",");
          for (c = 0; c < h.length; c++)
            -1 != e.indexOf(h[c]) && (b[h[c]] = !0);
        }
      }
      Object.assign(b, fd(a));
      if (
        a.AMP_CONFIG &&
        Array.isArray(a.AMP_CONFIG["allow-url-opt-in"]) &&
        0 < a.AMP_CONFIG["allow-url-opt-in"].length
      ) {
        c = a.AMP_CONFIG["allow-url-opt-in"];
        a = q(a.location.originalHash || a.location.hash);
        for (var k = 0; k < c.length; k++) {
          var l = a["e-" + c[k]];
          "1" == l && (b[c[k]] = !0);
          "0" == l && (b[c[k]] = !1);
        }
      }
      return b;
    }
    function fd(a) {
      var b = "";
      try {
        "localStorage" in a &&
          (b = a.localStorage.getItem("amp-experiment-toggles"));
      } catch (e) {
        C().warn(
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
    function gd(a, b) {
      var c = a.ownerDocument.defaultView,
        d = hd(c),
        e = c != d,
        g = Q(d, "ampdoc-fie");
      e && !g
        ? (b = id(c, b) ? jd(c, b) : null)
        : ((a = kd(a)), (a = R(a)), (b = id(a, b) ? jd(a, b) : null));
      return b;
    }
    function ld(a, b, c) {
      var d = hd(a);
      id(a, b);
      if (Q(d, "ampdoc-fie")) {
        var e = kd(a.document);
        md(
          R(e),
          e,
          b,
          function() {
            return c;
          },
          !0
        );
      } else
        md(a, a, b, function() {
          return c;
        }),
          jd(a, b);
    }
    function S(a, b, c) {
      var d;
      a = hd(a);
      md(a, a, b, c);
      d && jd(a, b);
    }
    function T(a, b, c, d) {
      var e = kd(a),
        g = R(e);
      md(g, e, b, c);
      d && jd(g, b);
    }
    function U(a, b) {
      a = hd(a);
      return jd(a, b);
    }
    function nd(a) {
      a = hd(a);
      return id(a, "performance") ? jd(a, "performance") : null;
    }
    function od(a, b) {
      var c = kd(a);
      c = R(c);
      return jd(c, b);
    }
    function pd(a, b) {
      return qd(R(a), b);
    }
    function hd(a) {
      return a.__AMP_TOP || (a.__AMP_TOP = a);
    }
    function rd(a, b) {
      var c = (a.ownerDocument || a).defaultView;
      a = b || hd(c);
      if (c && c != a && hd(c) == a)
        try {
          return c.frameElement;
        } catch (d) {}
      return null;
    }
    function kd(a) {
      return a.nodeType
        ? U((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a)
        : a;
    }
    function R(a) {
      a = kd(a);
      return a.isSingleDoc() ? a.win : a;
    }
    function jd(a, b) {
      id(a, b);
      var c = sd(a);
      a = c[b];
      a.obj ||
        ((a.obj = new a.ctor(a.context)),
        (a.ctor = null),
        (a.context = null),
        a.resolve && a.resolve(a.obj));
      return a.obj;
    }
    function md(a, b, c, d, e) {
      var g = sd(a),
        h = g[c];
      h ||
        (h = g[c] = {
          obj: null,
          promise: null,
          resolve: null,
          reject: null,
          context: null,
          ctor: null
        });
      if (e || (!h.ctor && !h.obj))
        (h.ctor = d), (h.context = b), h.resolve && jd(a, c);
    }
    function td(a, b) {
      var c = qd(a, b);
      if (c) return c;
      a = sd(a);
      a[b] = ud();
      return a[b].promise;
    }
    function qd(a, b) {
      var c = sd(a)[b];
      if (c) {
        if (c.promise) return c.promise;
        jd(a, b);
        return (c.promise = Promise.resolve(c.obj));
      }
      return null;
    }
    function sd(a) {
      var b = a.__AMP_SERVICES;
      b || (b = a.__AMP_SERVICES = {});
      return b;
    }
    function vd(a, b) {
      var c = jd(R(a.getParent()), b);
      md(R(a), a, b, function() {
        return c;
      });
    }
    function id(a, b) {
      a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
      return !(!a || (!a.ctor && !a.obj));
    }
    function ud() {
      var a = new I(),
        b = a.promise,
        c = a.resolve;
      a = a.reject;
      b.catch(function() {});
      return {
        obj: null,
        promise: b,
        resolve: c,
        reject: a,
        context: null,
        ctor: null
      };
    }
    function wd(a, b, c) {
      var d = qd(a, b);
      return d ? d : xd(a, b, c, !0);
    }
    function yd(a, b, c) {
      return zd(a, b, c, void 0).then(function(a) {
        return D(
          a,
          "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.",
          b,
          c,
          c,
          c
        );
      });
    }
    function zd(a, b, c, d) {
      var e = pd(a, b);
      if (e) return e;
      var g = kd(a);
      return g
        .waitForBodyOpen()
        .then(function() {
          return Ad(g.win, c, g.win.document.head);
        })
        .then(function() {
          if (d) var e = pd(a, b);
          else
            (e = g.win),
              (e =
                e.__AMP_EXTENDED_ELEMENTS && e.__AMP_EXTENDED_ELEMENTS[c]
                  ? td(R(a), b)
                  : null);
          return e;
        });
    }
    function Bd(a) {
      var b = gd(a, "bind");
      if (b) return Promise.resolve(b);
      b = a.ownerDocument.defaultView;
      var c = hd(b);
      return b !== c ? xd(b, "bind", "amp-bind") : zd(a, "bind", "amp-bind");
    }
    function Cd(a) {
      if (!a) return [];
      for (
        var b = {},
          c = a.querySelectorAll(
            "script[custom-element],script[custom-template]"
          ),
          d = 0;
        d < c.length;
        d++
      ) {
        var e = c[d];
        e =
          e.getAttribute("custom-element") || e.getAttribute("custom-template");
        b[e] = !0;
      }
      return Object.keys(b);
    }
    function Dd(a) {
      var b = "amp-form";
      return a.waitForBodyOpen().then(function() {
        var c = a.getHeadNode(),
          d = b;
        return Cd(c).includes(d);
      });
    }
    function Ad(a, b, c) {
      if (!Cd(c).includes(b)) return Promise.resolve();
      var d = U(a, "extensions");
      return d.waitForExtension(a, b);
    }
    function xd(a, b, c, d) {
      return rb(a.document)
        .then(function() {
          return Ad(a, c, a.document.head);
        })
        .then(function() {
          return d
            ? qd(a, b)
            : a.__AMP_EXTENDED_ELEMENTS && a.__AMP_EXTENDED_ELEMENTS[c]
            ? td(a, b)
            : null;
        });
    }
    function Ed(a) {
      return U(a, "ampdoc");
    }
    function Fd(a) {
      return od(a, "documentInfo").get();
    }
    function Gd(a) {
      return U(a, "extensions");
    }
    function Hd(a) {
      return U(a, "performance");
    }
    function Id(a) {
      return U(a, "platform");
    }
    function Jd(a) {
      return od(a, "resources");
    }
    function V(a) {
      return U(a, "timer");
    }
    function W(a) {
      return od(a, "viewer");
    }
    function Kd(a) {
      return U(a, "vsync");
    }
    function Ld(a) {
      return od(a, "viewport");
    }
    var Md;
    function Nd(a) {
      a = a.ownerDocument || a;
      (Md && Md.ownerDocument === a) || (Md = a.createElement("div"));
      return Od;
    }
    function Od(a) {
      var b = Md;
      b.innerHTML = a[0];
      a = b.firstElementChild;
      b.removeChild(a);
      return a;
    }
    var Rd,
      Sd = "Webkit webkit Moz moz ms O o".split(" ");
    function Td(a, b, c) {
      if (L(b, "--")) return b;
      Rd || (Rd = E());
      var d = Rd[b];
      if (!d || c) {
        d = b;
        if (void 0 === a[b]) {
          var e = b.charAt(0).toUpperCase() + b.slice(1);
          a: {
            for (var g = 0; g < Sd.length; g++) {
              var h = Sd[g] + e;
              if (void 0 !== a[h]) {
                e = h;
                break a;
              }
            }
            e = "";
          }
          var k = e;
          void 0 !== a[k] && (d = k);
        }
        c || (Rd[b] = d);
      }
      return d;
    }
    function Ud(a, b) {
      a = a.style;
      for (var c in b) a.setProperty(Td(a, c), b[c].toString(), "important");
    }
    function X(a, b, c, d) {
      (b = Td(a.style, b, void 0)) && (a.style[b] = d ? c + d : c);
    }
    function Vd(a, b) {
      if ((b = Td(a.style, b, void 0))) return a.style[b];
    }
    function Wd(a, b) {
      for (var c in b) X(a, c, b[c]);
    }
    function Xd(a, b) {
      void 0 === b && (b = a.hasAttribute("hidden"));
      b ? a.removeAttribute("hidden") : a.setAttribute("hidden", "");
    }
    function Yd(a, b) {
      return a.getComputedStyle(b) || E();
    }
    var Zd = [
        '<i-amphtml-sizer class=i-amphtml-sizer><img alt="" role=presentation aria-hidden=true class=i-amphtml-intrinsic-sizer></i-amphtml-sizer>'
      ],
      $d = {
        NODISPLAY: "nodisplay",
        FIXED: "fixed",
        FIXED_HEIGHT: "fixed-height",
        RESPONSIVE: "responsive",
        CONTAINER: "container",
        FILL: "fill",
        FLEX_ITEM: "flex-item",
        FLUID: "fluid",
        INTRINSIC: "intrinsic"
      },
      ae = {
        "AMP-PIXEL": { width: "0px", height: "0px" },
        "AMP-ANALYTICS": { width: "1px", height: "1px" },
        "AMP-AUDIO": null,
        "AMP-SOCIAL-SHARE": { width: "60px", height: "44px" }
      },
      be = {
        "AMP-AD": !0,
        "AMP-ANIM": !0,
        "AMP-EMBED": !0,
        "AMP-FACEBOOK": !0,
        "AMP-FACEBOOK-COMMENTS": !0,
        "AMP-FACEBOOK-PAGE": !0,
        "AMP-GOOGLE-DOCUMENT-EMBED": !0,
        "AMP-IFRAME": !0,
        "AMP-IMG": !0,
        "AMP-INSTAGRAM": !0,
        "AMP-LIST": !0,
        "AMP-PINTEREST": !0,
        "AMP-PLAYBUZZ": !0,
        "AMP-TWITTER": !0
      },
      ce = /^amp\-(video|.+player)|AMP-BRIGHTCOVE|AMP-DAILYMOTION|AMP-YOUTUBE|AMP-VIMEO|AMP-IMA-VIDEO/i;
    function de(a) {
      for (var b in $d) if ($d[b] == a) return $d[b];
    }
    function ee(a) {
      return (
        "fixed" == a ||
        "fixed-height" == a ||
        "responsive" == a ||
        "fill" == a ||
        "flex-item" == a ||
        "fluid" == a ||
        "intrinsic" == a
      );
    }
    function fe(a) {
      if ("number" == typeof a) return a + "px";
      if (
        a &&
        /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(a)
      )
        return /^\d+(\.\d+)?$/.test(a) ? a + "px" : a;
    }
    function ge(a) {
      D(
        /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(a),
        "Invalid length value: %s",
        a
      );
      return a;
    }
    function he(a) {
      D(
        /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|%)$/.test(a),
        "Invalid length or percent value: %s",
        a
      );
      return a;
    }
    function ie(a) {
      ge(a);
      var b = D(a.match(/[a-z]+/i), "Failed to read units from %s", a);
      return b[0];
    }
    function je(a) {
      a = parseFloat(a);
      return La(a) ? a : void 0;
    }
    var ke;
    function le(a, b, c, d) {
      var e = a,
        g = c;
      var h = function(a) {
        try {
          return g(a);
        } catch (n) {
          throw (self.__AMP_REPORT_ERROR(n), n);
        }
      };
      var k = me(),
        l = !1;
      d && (l = d.capture);
      e.addEventListener(b, h, k ? d : l);
      return function() {
        e && e.removeEventListener(b, h, k ? d : l);
        h = e = g = null;
      };
    }
    function me() {
      if (void 0 !== ke) return ke;
      ke = !1;
      try {
        var a = {
          get capture() {
            ke = !0;
          }
        };
        self.addEventListener("test-options", null, a);
        self.removeEventListener("test-options", null, a);
      } catch (b) {}
      return ke;
    }
    function ne(a, b, c) {
      return le(a, b, c, void 0);
    }
    function oe(a, b, c, d) {
      var e = c,
        g = le(
          a,
          b,
          function(a) {
            try {
              e(a);
            } finally {
              (e = null), g();
            }
          },
          d
        );
      return g;
    }
    function pe(a, b) {
      var c,
        d = new Promise(function(b) {
          c = oe(a, "click", b, void 0);
        });
      d.then(c, c);
      b && b(c);
      return d;
    }
    function qe(a) {
      return !!(
        a.complete ||
        "complete" == a.readyState ||
        (re(a) && 0 < a.readyState) ||
        (a.document && "complete" == a.document.readyState)
      );
    }
    function se(a) {
      var b, c;
      if (qe(a)) return Promise.resolve(a);
      var d = re(a);
      if (d && a.__AMP_MEDIA_LOAD_FAILURE_SRC === a.currentSrc)
        return Promise.reject(a);
      var e = new Promise(function(e, h) {
        b = d ? oe(a, "loadedmetadata", e, { capture: !0 }) : oe(a, "load", e);
        if (a.tagName) {
          var g = a;
          if (
            d &&
            !a.hasAttribute("src") &&
            ((g = Ab(a, function(a) {
              return "SOURCE" === a.tagName;
            })),
            !g)
          )
            return h(Error("Media has no source."));
          c = oe(g, "error", h);
        }
      });
      return e.then(
        function() {
          c && c();
          return a;
        },
        function() {
          b && b();
          re(a) && (a.__AMP_MEDIA_LOAD_FAILURE_SRC = a.currentSrc || !0);
          var c = a;
          c && c.src && (c = c.src);
          throw z().createError("Failed to load:", c);
        }
      );
    }
    function re(a) {
      return "AUDIO" === a.tagName || "VIDEO" === a.tagName;
    }
    function te(a) {
      return "loading" != a.readyState && "uninitialized" != a.readyState;
    }
    function ue(a) {
      return "complete" == a.readyState;
    }
    function ve(a, b) {
      we(a, te, b);
    }
    function we(a, b, c) {
      var d = b(a);
      if (d) c(a);
      else {
        var e = function() {
          b(a) &&
            (d || ((d = !0), c(a)),
            a.removeEventListener("readystatechange", e));
        };
        a.addEventListener("readystatechange", e);
      }
    }
    function xe(a) {
      return new Promise(function(b) {
        ve(a, b);
      });
    }
    function ye(a) {
      return new Promise(function(b) {
        we(a, ue, b);
      });
    }
    var ze = ["<link rel=preload referrerpolicy=origin>"],
      Ae = null;
    function Be(a) {
      this.md = a.document;
      this.ud = a.document.head;
      this.xb = {};
      this.bg = {};
      this.ga = Id(a);
      this.xb[O(a.location.href).origin] = !0;
      a: {
        if (!Ae) {
          var b = a.document.createElement("link");
          var c = b.relList;
          b.as = "invalid-value";
          if (!c || !c.supports) {
            b = {};
            break a;
          }
          Ae = {
            preconnect: c.supports("preconnect"),
            preload: c.supports("preload"),
            onlyValidAs: "invalid-value" != b.as
          };
        }
        b = Ae;
      }
      this.Xb = b;
      this.O = V(a);
    }
    Be.prototype.url = function(a, b, c) {
      var d = this;
      a.whenFirstVisible().then(function() {
        d.Ob(a, b, c);
      });
    };
    Be.prototype.Ob = function(a, b, c) {
      if (Ce(b)) {
        a = O(b).origin;
        var d = Date.now(),
          e = this.xb[a];
        if (e && d < e) c && (this.xb[a] = d + 18e4);
        else {
          this.xb[a] = d + (c ? 18e4 : 1e4);
          if (!this.Xb.preconnect) {
            var g = this.md.createElement("link");
            g.setAttribute("rel", "dns-prefetch");
            g.setAttribute("href", a);
            this.ud.appendChild(g);
          }
          var h = this.md.createElement("link");
          h.setAttribute("rel", "preconnect");
          h.setAttribute("href", a);
          h.setAttribute("referrerpolicy", "origin");
          this.ud.appendChild(h);
          this.O.delay(function() {
            g && g.parentNode && g.parentNode.removeChild(g);
            h.parentNode && h.parentNode.removeChild(h);
          }, 1e4);
          De(this, a);
        }
      }
    };
    Be.prototype.preload = function(a, b, c) {
      var d = this;
      Ce(b) &&
        !this.bg[b] &&
        ((this.bg[b] = !0),
        this.url(a, b, !0),
        this.Xb.preload &&
          (("document" == c && this.ga.isSafari()) ||
            a.whenFirstVisible().then(function() {
              var a = Nd(d.md)(ze);
              a.setAttribute("href", b);
              a.as = d.Xb.onlyValidAs ? "fetch" : "";
              d.ud.appendChild(a);
            })));
    };
    function Ce(a) {
      return L(a, "https:") || L(a, "http:") ? !0 : !1;
    }
    function De(a, b) {
      if (!a.Xb.preconnect && (a.ga.isSafari() || a.ga.isIos())) {
        var c = Date.now();
        a.xb[b] = c + 18e4;
        var d = c - (c % 18e4);
        a = new XMLHttpRequest();
        a.open(
          "HEAD",
          b + "/robots.txt?_AMP_safari_preconnect_polyfill_cachebust=" + d,
          !0
        );
        a.withCredentials = !0;
        a.send();
      }
    }
    function Ee(a, b) {
      this.Ef = a;
      this.zg = b;
      this.B = null;
    }
    function Fe(a) {
      a.B || (a.B = kd(a.zg));
      return a.B;
    }
    Ee.prototype.url = function(a, b) {
      this.Ef.url(Fe(this), a, b);
    };
    Ee.prototype.preload = function(a, b) {
      this.Ef.preload(Fe(this), a, b);
    };
    function Ge(a) {
      var b = a.ownerDocument.defaultView;
      S(b, "preconnect", Be);
      b = U(b, "preconnect");
      return new Ee(b, a);
    }
    function He() {
      var a = self.document;
      ye(a).then(function() {
        var b = a.documentElement,
          c = Ge(b);
        b = Fd(b);
        c.url(b.sourceUrl);
        c.url(b.canonicalUrl);
      });
    }
    function Ie(a) {
      this.element = a;
      this.layout_ = "nodisplay";
      this.layoutWidth_ = -1;
      this.inViewport_ = !1;
      this.win = a.ownerDocument.defaultView;
      this.defaultActionAlias_ = this.actionMap_ = null;
      this.preconnect = Ge(this.element);
    }
    f = Ie.prototype;
    f.signals = function() {
      return this.element.signals();
    };
    f.getDefaultActionAlias = function() {
      return this.defaultActionAlias_;
    };
    f.getLayoutPriority = function() {
      return 0;
    };
    f.updateLayoutPriority = function(a) {
      this.element.getResources().updateLayoutPriority(this.element, a);
    };
    f.getLayout = function() {
      return this.layout_;
    };
    f.getLayoutBox = function() {
      return this.element.getLayoutBox();
    };
    f.getPageLayoutBox = function() {
      return this.element.getPageLayoutBox();
    };
    f.getWin = function() {
      return this.win;
    };
    f.getAmpDoc = function() {
      return this.element.getAmpDoc();
    };
    f.getVsync = function() {
      return Kd(this.win);
    };
    f.getLayoutWidth = function() {
      return this.layoutWidth_;
    };
    f.getConsentPolicy = function() {
      var a = null;
      this.element.hasAttribute("data-block-on-consent") &&
        (a = this.element.getAttribute("data-block-on-consent") || "default");
      return a;
    };
    f.isLayoutSupported = function(a) {
      return "nodisplay" == a;
    };
    f.isAlwaysFixed = function() {
      return !1;
    };
    f.isInViewport = function() {
      return this.inViewport_;
    };
    f.upgradeCallback = function() {
      return null;
    };
    f.createdCallback = function() {};
    f.firstAttachedCallback = function() {};
    f.buildCallback = function() {};
    f.preconnectCallback = function() {};
    f.detachedCallback = function() {};
    f.prerenderAllowed = function() {
      return !1;
    };
    f.isBuildRenderBlocking = function() {
      return !1;
    };
    f.createPlaceholderCallback = function() {
      return null;
    };
    f.createLoaderLogoCallback = function() {
      return {};
    };
    f.renderOutsideViewport = function() {
      return "inabox" == u(this.win).runtime || 3;
    };
    f.idleRenderOutsideViewport = function() {
      return !1;
    };
    f.isRelayoutNeeded = function() {
      return !1;
    };
    f.layoutCallback = function() {
      return Promise.resolve();
    };
    f.firstLayoutCompleted = function() {
      this.togglePlaceholder(!1);
    };
    f.viewportCallback = function() {};
    f.pauseCallback = function() {};
    f.resumeCallback = function() {};
    f.unlayoutCallback = function() {
      return !1;
    };
    f.unlayoutOnPause = function() {
      return !1;
    };
    f.reconstructWhenReparented = function() {
      return !0;
    };
    f.loadPromise = function(a) {
      return se(a);
    };
    function Je(a) {
      a.actionMap_ || (a.actionMap_ = a.win.Object.create(null));
    }
    f.registerAction = function(a, b, c) {
      c = void 0 === c ? 100 : c;
      Je(this);
      this.actionMap_[a] = { handler: b, minTrust: c };
    };
    f.registerDefaultAction = function(a, b, c) {
      b = void 0 === b ? "activate" : b;
      this.registerAction(b, a, void 0 === c ? 100 : c);
      this.defaultActionAlias_ = b;
    };
    f.executeAction = function(a) {
      var b = a.method;
      "activate" === b && (b = this.defaultActionAlias_ || b);
      Je(this);
      var c = this.actionMap_[b];
      D(c, "Method not found: " + b + " in " + this.element.tagName);
      b = c.handler;
      if (a.satisfiesTrust(c.minTrust)) return b(a);
    };
    f.propagateAttributes = function(a, b, c) {
      a = w(a) ? a : [a];
      for (var d = 0; d < a.length; d++) {
        var e = a[d],
          g = this.element.getAttribute(e);
        null !== g ? b.setAttribute(e, g) : c && b.removeAttribute(e);
      }
    };
    f.forwardEvents = function(a, b) {
      var c = this,
        d = (w(a) ? a : [a]).map(function(a) {
          return ne(b, a, function(b) {
            c.element.dispatchCustomEvent(a, b.data || {});
          });
        });
      return function() {
        return d.forEach(function(a) {
          return a();
        });
      };
    };
    f.getPlaceholder = function() {
      return this.element.getPlaceholder();
    };
    f.togglePlaceholder = function(a) {
      this.element.togglePlaceholder(a);
    };
    f.getFallback = function() {
      return this.element.getFallback();
    };
    f.toggleFallback = function(a) {
      this.element.toggleFallback(a);
    };
    f.toggleLoading = function(a, b) {
      this.element.toggleLoading(a, { force: !!b });
    };
    f.isLoadingReused = function() {
      return !1;
    };
    f.getOverflowElement = function() {
      return this.element.getOverflowElement();
    };
    f.renderStarted = function() {
      this.element.renderStarted();
    };
    f.getRealChildNodes = function() {
      return this.element.getRealChildNodes();
    };
    f.getRealChildren = function() {
      return this.element.getRealChildren();
    };
    f.applyFillContent = function(a, b) {
      a.classList.add("i-amphtml-fill-content");
      b && a.classList.add("i-amphtml-replaced-content");
    };
    f.getViewport = function() {
      return Ld(this.getAmpDoc());
    };
    f.getIntersectionElementLayoutBox = function() {
      return this.getLayoutBox();
    };
    f.changeHeight = function(a) {
      this.element.getResources().changeSize(this.element, a, void 0);
    };
    f.collapse = function() {
      this.element.getResources().collapseElement(this.element);
    };
    f.attemptCollapse = function() {
      return this.element.getResources().attemptCollapse(this.element);
    };
    f.attemptChangeHeight = function(a) {
      return this.element
        .getResources()
        .attemptChangeSize(this.element, a, void 0);
    };
    f.attemptChangeSize = function(a, b, c) {
      return this.element
        .getResources()
        .attemptChangeSize(this.element, a, b, void 0, c);
    };
    f.measureElement = function(a) {
      return this.element.getResources().measureElement(a);
    };
    f.mutateElement = function(a, b) {
      return this.measureMutateElement(null, a, b);
    };
    f.measureMutateElement = function(a, b, c) {
      return this.element
        .getResources()
        .measureMutateElement(c || this.element, a, b);
    };
    f.collapsedCallback = function() {};
    f.expand = function() {
      this.element.getResources().expandElement(this.element);
    };
    f.expandedCallback = function() {};
    f.mutatedAttributesCallback = function() {};
    f.onLayoutMeasure = function() {};
    f.onMeasureChanged = function() {};
    f.user = function() {
      return z(this.element);
    };
    function Ke(a, b) {
      this.element = a;
      this.win = a.ownerDocument.defaultView || b;
      this.h = W(this.element);
      this.compileCallback();
    }
    f = Ke.prototype;
    f.compileCallback = function() {};
    f.setHtml = function() {
      throw Error("Not implemented");
    };
    f.render = function() {
      throw Error("Not implemented");
    };
    f.unwrap = function(a) {
      for (var b = null, c = a.firstChild; null != c; c = c.nextSibling)
        if (3 == c.nodeType) {
          if (c.textContent.trim()) {
            b = null;
            break;
          }
        } else if (8 != c.nodeType)
          if (1 == c.nodeType)
            if (b) {
              b = null;
              break;
            } else b = c;
          else b = null;
      return b || a;
    };
    f.viewerCanRenderTemplates = function() {
      return this.h.hasCapability("viewerRenderTemplate");
    };
    function Le(a) {
      this.o = a;
      this.Lb = {};
      this.ie = {};
    }
    f = Le.prototype;
    f.setHtmlForTemplate = function(a, b) {
      return Me(this, a).then(function(a) {
        return a.setHtml(b);
      });
    };
    f.renderTemplate = function(a, b) {
      return Me(this, a).then(function(a) {
        return a.render(b);
      });
    };
    f.renderTemplateArray = function(a, b) {
      return 0 == b.length
        ? Promise.resolve([])
        : Me(this, a).then(function(a) {
            return b.map(function(b) {
              return a.render(b);
            });
          });
    };
    f.findAndRenderTemplate = function(a, b, c) {
      return this.renderTemplate(this.findTemplate(a, c), b);
    };
    f.findAndSetHtmlForTemplate = function(a, b, c) {
      return this.setHtmlForTemplate(this.findTemplate(a, c), b);
    };
    f.findAndRenderTemplateArray = function(a, b, c) {
      return this.renderTemplateArray(this.findTemplate(a, c), b);
    };
    f.hasTemplate = function(a, b) {
      return !!this.maybeFindTemplate(a, b);
    };
    f.findTemplate = function(a, b) {
      b = this.maybeFindTemplate(a, b);
      D(b, "Template not found for %s", a);
      var c = b.tagName;
      D(
        "TEMPLATE" == c ||
          ("SCRIPT" == c && "text/plain" === b.getAttribute("type")),
        'Template must be defined in a <template> or <script type="text/plain"> tag'
      );
      return b;
    };
    f.maybeFindTemplate = function(a, b) {
      var c = a.getAttribute("template");
      return c
        ? tb(a).getElementById(c)
        : b
        ? Db(a, b)
        : a.querySelector("template, script");
    };
    function Me(a, b) {
      var c = b.__AMP_IMPL_;
      if (c) return Promise.resolve(c);
      c = "";
      var d = b.tagName;
      "TEMPLATE" == d
        ? (c = b.getAttribute("type"))
        : "SCRIPT" == d && (c = b.getAttribute("template"));
      D(c, "Type must be specified: %s", b);
      if ((d = b.__AMP_WAIT_)) return d;
      d = Ne(a, c).then(function(c) {
        var d = (b.__AMP_IMPL_ = new c(b, a.o));
        delete b.__AMP_WAIT_;
        return d;
      });
      return (b.__AMP_WAIT_ = d);
    }
    function Ne(a, b) {
      if (a.Lb[b]) return a.Lb[b];
      var c = new I(),
        d = c.promise;
      c = c.resolve;
      a.Lb[b] = d;
      a.ie[b] = c;
      return d;
    }
    var Oe = {
      PRERENDER: "prerender",
      VISIBLE: "visible",
      HIDDEN: "hidden",
      PAUSED: "paused",
      INACTIVE: "inactive"
    };
    var Pe =
      "html{overflow-x:hidden!important}html.i-amphtml-fie{height:100%!important;width:100%!important}html:not([amp4ads]),html:not([amp4ads]) body{height:auto!important}html:not([amp4ads]) body{margin:0!important}body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}html.i-amphtml-singledoc.i-amphtml-embedded{-ms-touch-action:pan-y;touch-action:pan-y}html.i-amphtml-fie>body,html.i-amphtml-singledoc>body{overflow:visible!important}html.i-amphtml-fie:not(.i-amphtml-inabox)>body,html.i-amphtml-singledoc:not(.i-amphtml-inabox)>body{position:relative!important}html.i-amphtml-webview>body{overflow-x:hidden!important;overflow-y:visible!important;min-height:100vh!important}html.i-amphtml-ios-embed-legacy>body{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important}html.i-amphtml-ios-embed{overflow-y:auto!important;position:static}#i-amphtml-wrapper{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;margin:0!important;display:block!important}html.i-amphtml-ios-embed.i-amphtml-ios-overscroll,html.i-amphtml-ios-embed.i-amphtml-ios-overscroll>#i-amphtml-wrapper{-webkit-overflow-scrolling:touch!important}#i-amphtml-wrapper>body{position:relative!important;border-top:1px solid transparent!important}#i-amphtml-wrapper+body{visibility:visible}#i-amphtml-wrapper+body .i-amphtml-lightbox-element,#i-amphtml-wrapper+body[i-amphtml-lightbox]{visibility:hidden}#i-amphtml-wrapper+body[i-amphtml-lightbox] .i-amphtml-lightbox-element{visibility:visible}#i-amphtml-wrapper.i-amphtml-scroll-disabled,.i-amphtml-scroll-disabled{overflow-x:hidden!important;overflow-y:hidden!important}amp-instagram{padding:54px 0px 0px!important;background-color:#fff}amp-iframe iframe{box-sizing:border-box!important}[amp-access][amp-access-hide]{display:none}[subscriptions-dialog],body:not(.i-amphtml-subs-ready) [subscriptions-action],body:not(.i-amphtml-subs-ready) [subscriptions-section]{display:none!important}amp-experiment,amp-live-list>[update],amp-share-tracking{display:none}.i-amphtml-jank-meter{position:fixed;background-color:rgba(232,72,95,0.5);bottom:0;right:0;color:#fff;font-size:16px;z-index:1000;padding:5px}amp-list[resizable-children]>.i-amphtml-loading-container.amp-hidden{display:none!important}amp-list[load-more] [load-more-button],amp-list[load-more] [load-more-end],amp-list[load-more] [load-more-failed],amp-list[load-more] [load-more-loading]{display:none}amp-story-page,amp-story[standalone]{min-height:1px!important;display:block!important;height:100%!important;margin:0!important;padding:0!important;overflow:hidden!important;width:100%!important}amp-story[standalone]{background-color:#202125!important;position:relative!important}amp-story-page{background-color:#757575}amp-story .amp-active>div{display:none!important}amp-story-page:not(:first-of-type):not([distance]):not([active]){transform:translateY(1000vh)!important}amp-autocomplete{position:relative!important;display:inline-block!important}amp-autocomplete>input{padding:.5rem;border:1px solid rgba(0,0,0,0.33)}.i-amphtml-autocomplete-results,amp-autocomplete>input{font-size:1rem;line-height:1.5rem}[amp-fx^=fly-in]{visibility:hidden}\n/*# sourceURL=/css/ampdoc.css*/";
    var Qe =
      "[hidden]{display:none!important}.i-amphtml-element{display:inline-block}.i-amphtml-blurry-placeholder{transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important}[layout=nodisplay]:not(.i-amphtml-element){display:none!important}.i-amphtml-layout-fixed,[layout=fixed][width][height]:not(.i-amphtml-layout-fixed){display:inline-block;position:relative}.i-amphtml-layout-responsive,[layout=responsive][width][height]:not(.i-amphtml-layout-responsive),[width][height][sizes]:not(.i-amphtml-layout-responsive){display:block;position:relative}.i-amphtml-layout-intrinsic{display:inline-block;position:relative;max-width:100%}.i-amphtml-intrinsic-sizer{max-width:100%;display:block!important}.i-amphtml-layout-container,.i-amphtml-layout-fixed-height,[layout=container],[layout=fixed-height][height]{display:block;position:relative}.i-amphtml-layout-fill,[layout=fill]:not(.i-amphtml-layout-fill){display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-layout-flex-item,[layout=flex-item]:not(.i-amphtml-layout-flex-item){display:block;position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.i-amphtml-layout-fluid{position:relative}.i-amphtml-layout-size-defined{overflow:hidden!important}.i-amphtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-amphtml-sizer{display:block!important}.i-amphtml-blurry-placeholder,.i-amphtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-amphtml-layout-size-defined .i-amphtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-layout-intrinsic .i-amphtml-sizer{max-width:100%}.i-amphtml-replaced-content,.i-amphtml-screen-reader{padding:0!important;border:none!important}.i-amphtml-screen-reader{position:fixed!important;top:0px!important;left:0px!important;width:4px!important;height:4px!important;opacity:0!important;overflow:hidden!important;margin:0!important;display:block!important;visibility:visible!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:8px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:12px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:16px!important}.i-amphtml-unresolved{position:relative;overflow:hidden!important}.i-amphtml-select-disabled{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.i-amphtml-notbuilt,[layout]:not(.i-amphtml-element){position:relative;overflow:hidden!important;color:transparent!important}.i-amphtml-notbuilt:not(.i-amphtml-layout-container)>*,[layout]:not([layout=container]):not(.i-amphtml-element)>*{display:none}.i-amphtml-ghost{visibility:hidden!important}.i-amphtml-element>[placeholder],[layout]:not(.i-amphtml-element)>[placeholder]{display:block}.i-amphtml-element>[placeholder].amp-hidden,.i-amphtml-element>[placeholder].hidden{visibility:hidden}.i-amphtml-element:not(.amp-notsupported)>[fallback],.i-amphtml-layout-container>[placeholder].amp-hidden,.i-amphtml-layout-container>[placeholder].hidden{display:none}.i-amphtml-layout-size-defined>[fallback],.i-amphtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}.i-amphtml-notbuilt>[placeholder]{display:block!important}.i-amphtml-hidden-by-media-query{display:none!important}.i-amphtml-element-error{background:red!important;color:#fff!important;position:relative!important}.i-amphtml-element-error:before{content:attr(error-message)}i-amp-scroll-container,i-amphtml-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-amp-scroll-container.amp-active,i-amphtml-scroll-container.amp-active{overflow:auto;-webkit-overflow-scrolling:touch}.i-amphtml-loading-container{display:block!important;pointer-events:none;z-index:1}.i-amphtml-notbuilt>.i-amphtml-loading-container{display:block!important}.i-amphtml-loading-container.amp-hidden{visibility:hidden}.i-amphtml-element>[overflow]{cursor:pointer;position:relative;z-index:2;visibility:hidden}.i-amphtml-element>[overflow].amp-visible{visibility:visible}template{display:none!important}.amp-border-box,.amp-border-box *,.amp-border-box :after,.amp-border-box :before{box-sizing:border-box}amp-pixel{display:none!important}amp-analytics,amp-story-auto-ads{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}html.i-amphtml-fie>amp-analytics{position:initial!important}[visible-when-invalid]:not(.visible),amp-list [fetch-error],form [submit-error],form [submit-success],form [submitting]{display:none}amp-accordion{display:block!important}amp-accordion>section{float:none!important}amp-accordion>section>*{float:none!important;display:block!important;overflow:hidden!important;position:relative!important}amp-accordion,amp-accordion>section{margin:0}amp-accordion>section>:last-child{display:none!important}amp-accordion>section[expanded]>:last-child{display:block!important}\n/*# sourceURL=/css/ampshared.css*/"; /*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
    var Re;
    function Se() {
      var a;
      if (void 0 === Re) {
        var b = a || Element;
        Re = b.prototype.attachShadow
          ? "v1"
          : b.prototype.createShadowRoot
          ? "v0"
          : "none";
      }
      return Re;
    }
    var Te = {
      "amp-dynamic-css-classes": "[custom-element=amp-dynamic-css-classes]",
      variant: "amp-experiment",
      "amp-story-render": "amp-story[standalone]"
    };
    function Ue(a) {
      var b = Ve(a).map(function(b) {
        var c = td(a, b).then(function(a) {
          return a && We(a)
            ? a.whenReady().then(function() {
                return a;
              })
            : a;
        });
        return V(a).timeoutPromise(
          3e3,
          c,
          "Render timeout waiting for service " + b + " to be ready."
        );
      });
      return Promise.all(b);
    }
    function We(a) {
      var b = a;
      return "function" == typeof b.whenReady;
    }
    function Ve(a) {
      var b = a.document;
      return Object.keys(Te).filter(function(a) {
        return b.querySelector(Te[a]);
      });
    }
    function Xe(a, b, c, d, e) {
      var g = a.getHeadNode(),
        h = Ye(g, Ze(g, b), d || !1, e || null);
      if (c) {
        var k = a.getRootNode();
        if ($e(k, h)) c(h);
        else
          var l = setInterval(function() {
            $e(k, h) && (clearInterval(l), c(h));
          }, 4);
      }
    }
    function Ye(a, b, c, d) {
      var e = a.__AMP_CSS_SM;
      e || (e = a.__AMP_CSS_SM = E());
      var g = !c && d && "amp-custom" != d && "amp-keyframes" != d,
        h = c ? "amp-runtime" : g ? "amp-extension=" + d : null;
      if (h) {
        var k = af(a, e, h);
        if (k) return k.textContent !== b && (k.textContent = b), k;
      }
      var l = (a.ownerDocument || a).createElement("style");
      l.textContent = b;
      var m = null;
      c
        ? l.setAttribute("amp-runtime", "")
        : g
        ? (l.setAttribute("amp-extension", d || ""),
          (m = af(a, e, "amp-runtime")))
        : (d && l.setAttribute(d, ""), (m = a.lastChild));
      b = m;
      a.insertBefore(l, b ? b.nextSibling : a.firstChild);
      h && (e[h] = l);
      return l;
    }
    function af(a, b, c) {
      return b[c]
        ? b[c]
        : (a = a.querySelector("style[" + c + "]"))
        ? (b[c] = a)
        : null;
    }
    function Ze(a, b) {
      return (a = a.__AMP_CSS_TR) ? a(b) : b;
    }
    var bf = !1;
    function cf() {
      var a = self.document,
        b = a.defaultView;
      rb(a)
        .then(function() {
          return Ue(b);
        })
        .catch(function(a) {
          eb(a);
          return [];
        })
        .then(function(c) {
          bf = !0;
          df(a);
          kd(a)
            .signals()
            .signal("render-start");
          if (0 < c.length) {
            var d = Jd(a.documentElement);
            d.schedulePass(1, !0);
          }
          try {
            var e = Hd(b);
            e.tick("mbv");
            e.flush();
          } catch (g) {}
        });
    }
    function ef(a) {
      bf || ((bf = !0), df(a));
    }
    function df(a) {
      Wd(a.body, { opacity: 1, visibility: "visible", animation: "none" });
    }
    function $e(a, b) {
      var c = a.styleSheets;
      for (a = 0; a < c.length; a++) {
        var d = c[a];
        if (d.ownerNode == b) return !0;
      }
      return !1;
    }
    var ff = { composed: !1 };
    function gf(a) {
      return "none" != Se() && Node.prototype.getRootNode
        ? a.getRootNode(ff)
        : wb(a, function(a) {
            return ub(a);
          });
    }
    function hf(a, b) {
      function c(c) {
        h = null;
        g = a.setTimeout(d, e);
        b.apply(null, c);
      }
      function d() {
        g = 0;
        h && c(h);
      }
      var e = 100,
        g = 0,
        h = null;
      return function(a) {
        for (var b = [], d = 0; d < arguments.length; ++d)
          b[d - 0] = arguments[d];
        g ? (h = b) : c(b);
      };
    }
    function jf(a, b) {
      function c() {
        d = 0;
        var h = 300 - (a.Date.now() - e);
        if (0 < h) d = a.setTimeout(c, h);
        else {
          var k = g;
          g = null;
          b.apply(null, k);
        }
      }
      var d = 0,
        e = 0,
        g = null;
      return function(b) {
        for (var h = [], l = 0; l < arguments.length; ++l)
          h[l - 0] = arguments[l];
        e = a.Date.now();
        g = h;
        d || (d = a.setTimeout(c, 300));
      };
    }
    function kf() {
      var a = 1.5,
        b = lf(a);
      return function(a) {
        return setTimeout(a, b());
      };
    }
    function lf(a) {
      var b = a || 2,
        c = 0;
      return function() {
        var a = Math.pow(b, c++);
        var e = a * (e || 0.3) * Math.random();
        0.5 < Math.random() && (e *= -1);
        a += e;
        return 1e3 * a;
      };
    }
    function mf(a, b) {
      zd(a, "amp-analytics-instrumentation", "amp-analytics").then(function(c) {
        c && c.triggerEventForTarget(a, "user-error", b);
      });
    }
    var nf = self.__AMP_ERRORS || [];
    self.__AMP_ERRORS = nf;
    function of(a) {
      of = kf();
      return of(a);
    }
    function pf(a) {
      try {
        return JSON.stringify(a);
      } catch (b) {
        return String(a);
      }
    }
    var qf;
    function rf(a, b) {
      try {
        if (a)
          if (void 0 !== a.message) a = db(a);
          else {
            var c = a;
            a = Error(pf(c));
            a.origError = c;
          }
        else a = Error("Unknown error");
        if (a.reported) return a;
        a.reported = !0;
        var d = b || a.associatedElement;
        d &&
          d.classList &&
          (d.classList.add("i-amphtml-error"),
          u().development &&
            (d.classList.add("i-amphtml-element-error"),
            d.setAttribute("error-message", a.message)));
        if (self.console) {
          var e = console.error || console.log;
          a.messageArray
            ? e.apply(console, a.messageArray)
            : d
            ? e.call(console, a.message, d)
            : e.call(console, a.message);
        }
        d && d.Da && d.Da("amp:error", a.message);
        sf.call(void 0, void 0, void 0, void 0, void 0, a);
      } catch (g) {
        setTimeout(function() {
          throw g;
        });
      }
      return a;
    }
    function tf(a) {
      return a
        ? "string" == typeof a
          ? L(a, "BLOCK_BY_CONSENT")
          : "string" == typeof a.message
          ? L(a.message, "BLOCK_BY_CONSENT")
          : !1
        : !1;
    }
    function uf() {
      var a = self;
      a.onerror = sf;
      a.addEventListener("unhandledrejection", function(a) {
        !a.reason ||
        ("CANCELLED" !== a.reason.message &&
          "BLOCK_BY_CONSENT" !== a.reason.message &&
          "AbortError" !== a.reason.message)
          ? rf(a.reason || Error("rejected promise " + a))
          : a.preventDefault();
      });
    }
    function sf(a, b, c, d, e) {
      var g = this;
      this && this.document && ef(this.document);
      if (!u().development) {
        var h = !1;
        try {
          h = vf();
        } catch (l) {}
        if (!(h && 0.01 < Math.random())) {
          var k = wf(a, b, c, d, e, h);
          k &&
            of(function() {
              try {
                return xf(g, k).catch(function() {});
              } catch (l) {}
            });
        }
      }
    }
    function xf(a, b) {
      return yf(a, b).then(function(a) {
        if (!a) {
          var c = new XMLHttpRequest();
          c.open("POST", Oa.errorReporting, !0);
          c.send(JSON.stringify(b));
        }
      });
    }
    function yf(a, b) {
      a = Ed(a);
      if (!a.isSingleDoc()) return Promise.resolve(!1);
      var c = a.getSingleDoc(),
        d = c.getRootNode().documentElement,
        e = d.hasAttribute("report-errors-to-viewer");
      if (!e) return Promise.resolve(!1);
      var g = W(c);
      return g.hasCapability("errorReporter")
        ? g.isTrustedViewer().then(function(a) {
            if (!a) return !1;
            g.sendMessage(
              "error",
              G({
                m: b.m,
                a: b.a,
                s: b.s,
                el: b.el,
                ex: b.ex,
                v: b.v,
                jse: b.jse
              })
            );
            return !0;
          })
        : Promise.resolve(!1);
    }
    function wf(a, b, c, d, e, g) {
      var h = a;
      e && (h = e.message ? e.message : String(e));
      h || (h = "Unknown error");
      a = h;
      var k = !(!e || !e.expected);
      if (!/_reported_/.test(a) && "CANCELLED" != a) {
        var l = !(self && self.window),
          m = Math.random();
        if (-1 != a.indexOf("Failed to load:") || "Script error." == a || l)
          if (((k = !0), 0.001 < m)) return;
        var n = Ra(a);
        if (!(n && 0.1 < m)) {
          h = Object.create(null);
          h.v = u().rtvVersion;
          h.noAmp = g ? "1" : "0";
          h.m = a.replace("\u200b\u200b\u200b", "");
          h.a = n ? "1" : "0";
          h.ex = k ? "1" : "0";
          h.dw = l ? "1" : "0";
          var r = "1p";
          self.context && self.context.location
            ? ((h["3p"] = "1"), (r = "3p"))
            : u().runtime && (r = u().runtime);
          u().singlePassType && (h.spt = u().singlePassType);
          h.rt = r;
          "inabox" === r && (h.adid = u().a4aId);
          h.ca = cd(self) ? "1" : "0";
          g = self;
          h.bt =
            g.AMP_CONFIG && g.AMP_CONFIG.type ? g.AMP_CONFIG.type : "unknown";
          self.location.ancestorOrigins &&
            self.location.ancestorOrigins[0] &&
            (h.or = self.location.ancestorOrigins[0]);
          self.viewerState && (h.vs = self.viewerState);
          self.parent && self.parent != self && (h.iem = "1");
          if (self.AMP && self.AMP.viewer) {
            var t = self.AMP.viewer.getResolvedViewerUrl(),
              v = self.AMP.viewer.maybeGetMessagingOrigin();
            t && (h.rvu = t);
            v && (h.mso = v);
          }
          qf || (qf = zf());
          h.jse = qf;
          var y = [];
          g = self.__AMP__EXPERIMENT_TOGGLES || null;
          for (var x in g) y.push(x + "=" + (g[x] ? "1" : "0"));
          h.exps = y.join(",");
          e
            ? ((h.el = e.associatedElement ? e.associatedElement.tagName : "u"),
              e.args && (h.args = JSON.stringify(e.args)),
              n || e.ignoreStack || !e.stack || (h.s = e.stack),
              e.message && (e.message += " _reported_"))
            : ((h.f = b || ""), (h.l = c || ""), (h.c = d || ""));
          h.r = self.document ? self.document.referrer : "";
          h.ae = nf.join(",");
          h.fr = self.location.originalHash || self.location.hash;
          b = a;
          25 <= nf.length && nf.splice(0, nf.length - 25 + 1);
          nf.push(b);
          return h;
        }
      }
    }
    function vf() {
      var a = self;
      if (!a.document) return !1;
      a = a.document.querySelectorAll("script[src]");
      for (var b = 0; b < a.length; b++)
        if (!P(a[b].src.toLowerCase())) return !0;
      return !1;
    }
    function zf() {
      function a() {}
      a.prototype.t = function() {
        throw Error("message");
      };
      var b = new a();
      try {
        b.t();
      } catch (d) {
        b = d.stack;
        if (L(b, "t@")) return "Safari";
        if (-1 < b.indexOf(".prototype.t@")) return "Firefox";
        var c = b.split("\n").pop();
        if (/\bat .* \(/i.test(c)) return "IE";
        if (L(b, "Error: message")) return "Chrome";
      }
      return "unknown";
    }
    var Af = "__AMP_ACTION_MAP__" + Math.random(),
      Bf = { form: ["submit", "clear"] },
      Cf = {
        button: !0,
        checkbox: !0,
        link: !0,
        listbox: !0,
        menuitem: !0,
        menuitemcheckbox: !0,
        menuitemradio: !0,
        option: !0,
        radio: !0,
        scrollbar: !0,
        slider: !0,
        spinbutton: !0,
        switch: !0,
        tab: !0,
        treeitem: !0
      };
    function Df(a, b, c, d, e, g, h, k, l, m) {
      k = void 0 === k ? "?" : k;
      l = void 0 === l ? null : l;
      m = void 0 === m ? Math.random() : m;
      this.node = a;
      this.method = b;
      this.args = c;
      this.source = d;
      this.caller = e;
      this.event = g;
      this.trust = h;
      this.actionEventType = k;
      this.tagOrTarget = l || a.tagName;
      this.sequenceId = m;
    }
    Df.prototype.satisfiesTrust = function(a) {
      return La(this.trust)
        ? this.trust < a
          ? (z().error(
              "Action",
              '"' +
                this.actionEventType +
                '" is not allowed to invoke "' +
                (this.tagOrTarget + "." + this.method + '".')
            ),
            !1)
          : !0
        : (C().error(
            "Action",
            "Invalid trust for '" + this.method + "': " + this.trust
          ),
          !1);
    };
    function Ef(a, b) {
      this.ampdoc = a;
      this.V = b || a.getRootNode();
      this.La = Ff(this);
      this.qd = E();
      this.df = E();
      this.addEvent("tap");
      this.addEvent("submit");
      this.addEvent("change");
      this.addEvent("input-debounced");
      this.addEvent("input-throttled");
      this.addEvent("valid");
      this.addEvent("invalid");
    }
    Ef.installInEmbedWindow = function(a, b) {
      ld(a, "action", new Ef(b, a.document));
    };
    f = Ef.prototype;
    f.addEvent = function(a) {
      var b = this;
      if ("tap" == a)
        this.V.addEventListener("click", function(c) {
          c.defaultPrevented || b.trigger(c.target, a, c, 100);
        }),
          this.V.addEventListener("keydown", function(c) {
            var d = c.key,
              e = c.target;
            if ("Enter" == d || " " == d) {
              var k = e.getAttribute("role");
              if ((d = k)) (d = k.toLowerCase()), (d = ib.call(Cf, d));
              var l = d;
              if (!c.defaultPrevented && l) {
                var m = b.trigger(e, a, c, 100);
                m && c.preventDefault();
              }
            }
          });
      else if ("submit" == a)
        this.V.addEventListener(a, function(c) {
          b.trigger(c.target, a, c, 100);
        });
      else if ("change" == a)
        this.V.addEventListener(a, function(c) {
          var d = c.target;
          Gf(c);
          b.trigger(d, a, c, 100);
        });
      else if ("input-debounced" == a) {
        var c = jf(this.ampdoc.win, function(c) {
          b.trigger(c.target, a, c, 100);
        });
        this.V.addEventListener("input", function(a) {
          var b = new Hf(a);
          Gf(b);
          c(b);
        });
      } else if ("input-throttled" == a) {
        var d = hf(this.ampdoc.win, function(c) {
          b.trigger(c.target, a, c, 100);
        });
        this.V.addEventListener("input", function(a) {
          a = new Hf(a);
          Gf(a);
          d(a);
        });
      } else
        ("valid" != a && "invalid" != a) ||
          this.V.addEventListener(a, function(c) {
            b.trigger(c.target, a, c, 100);
          });
    };
    f.addGlobalTarget = function(a, b) {
      this.qd[a] = b;
    };
    f.addGlobalMethodHandler = function(a, b, c) {
      this.df[a] = { handler: b, minTrust: void 0 === c ? 100 : c };
    };
    f.trigger = function(a, b, c, d, e) {
      return If(this, a, b, c, d, e);
    };
    f.execute = function(a, b, c, d, e, g, h) {
      a = new Df(a, b, c, d, e, g, h);
      Jf(this, a);
    };
    f.installActionHandler = function(a, b) {
      var c = a.getAttribute("id") || "";
      "amp-" === c.substring(0, 4) || a.tagName.toLowerCase();
      if (a.__AMP_ACTION_HANDLER__)
        C().error("Action", "Action handler already installed for " + a);
      else {
        a.__AMP_ACTION_HANDLER__ = b;
        var d = a.__AMP_ACTION_QUEUE__;
        w(d) &&
          V(a.ownerDocument.defaultView).delay(function() {
            d.forEach(function(a) {
              try {
                b(a);
              } catch (g) {
                C().error("Action", "Action execution failed:", a, g);
              }
            });
            a.__AMP_ACTION_QUEUE__.length = 0;
          }, 1);
      }
    };
    f.hasAction = function(a, b, c) {
      return !!Kf(a, b, c);
    };
    f.hasResolvableAction = function(a, b, c) {
      var d = this,
        e = Kf(a, b, c);
      return e
        ? e.actionInfos.some(function(a) {
            return !!Lf(d, a.target);
          })
        : !1;
    };
    f.hasResolvableActionForTarget = function(a, b, c, d) {
      var e = this;
      return (a = Kf(a, b, d))
        ? a.actionInfos.some(function(a) {
            return Lf(e, a.target) == c;
          })
        : !1;
    };
    function Lf(a, b) {
      return a.qd[b] ? a.V : a.V.getElementById(b);
    }
    f.setWhitelist = function(a) {
      this.La = a;
    };
    f.addToWhitelist = function(a, b) {
      this.La || (this.La = []);
      this.La.push({ tagOrTarget: a, method: b });
    };
    function If(a, b, c, d, e, g) {
      var h = Kf(b, c);
      if (!h) return !1;
      var k = Math.random(),
        l = null;
      h.actionInfos.forEach(function(m) {
        function n() {
          var g = Lf(a, r);
          if (g)
            return (
              (g = new Df(g, t, y, b, h.node, d, e, c, g.tagName || r, k)),
              Jf(a, g)
            );
          a.va('Target "' + r + '" not found for action [' + v + "].");
        }
        var r = m.target,
          t = m.method,
          v = m.str,
          y = Mf(m.args, d, g);
        l = l ? l.then(n) : n();
      });
      return 1 <= h.actionInfos.length;
    }
    f.va = function(a, b) {
      if (b) throw ((a = z().createError("[Action] " + a)), rf(a, b), a);
      z().error("Action", a);
    };
    function Jf(a, b) {
      var c = b.method,
        d = b.tagOrTarget;
      if (a.La && !Nf(b, a.La))
        return (
          a.va(
            '"' +
              d +
              "." +
              c +
              '" is not whitelisted ' +
              JSON.stringify(a.La) +
              "."
          ),
          null
        );
      var e = a.qd[d];
      if (e) return e(b);
      var g = b.node,
        h = a.df[c];
      if (h && b.satisfiesTrust(h.minTrust)) return h.handler(b);
      var k = g.tagName.toLowerCase();
      if ("amp-" === k.substring(0, 4))
        return (
          g.enqueAction
            ? g.enqueAction(b)
            : a.va('Unrecognized AMP element "' + k + '".', g),
          null
        );
      var l = Bf[k];
      if (
        "amp-" === (g.getAttribute("id") || "").substring(0, 4) ||
        (l && -1 < l.indexOf(c))
      )
        return (
          (a = g.__AMP_ACTION_HANDLER__)
            ? a(b)
            : ((g.__AMP_ACTION_QUEUE__ = g.__AMP_ACTION_QUEUE__ || []),
              g.__AMP_ACTION_QUEUE__.push(b)),
          null
        );
      a.va("Target (" + d + ") doesn't support \"" + c + '" action.', b.caller);
      return null;
    }
    function Kf(a, b, c) {
      for (; a && (!c || a != c); ) {
        var d = b;
        var e = a;
        var g = d,
          h = e[Af];
        void 0 === h &&
          ((h = null),
          e.hasAttribute("on")
            ? ((g = e.getAttribute("on")), (h = Of(g, e)), (e[Af] = h))
            : e.hasAttribute("execute") &&
              ((h = e.getAttribute("execute")),
              (h = Of(g + ":" + h, e)),
              (e[Af] = h)));
        var k = (e = h) ? e[d] || null : null;
        if (k && !a.disabled && !yb(a, ":disabled"))
          return { node: a, actionInfos: k };
        a = a.parentElement;
      }
      return null;
    }
    f.setActions = function(a, b) {
      a.setAttribute("on", b);
      delete a[Af];
    };
    function Ff(a) {
      var b = a.ampdoc.getRootNode().head;
      return b
        ? (b = b.querySelector('meta[name="amp-action-whitelist"]'))
          ? b
              .getAttribute("content")
              .split(",")
              .filter(function(a) {
                return a;
              })
              .map(function(b) {
                var c = b.split(".");
                if (2 > c.length)
                  a.va("Invalid action whitelist entry: " + b + ".");
                else
                  return (
                    (b = c[0].trim()),
                    (c = c[1].trim()),
                    { tagOrTarget: b, method: c }
                  );
              })
              .filter(function(a) {
                return a;
              })
          : null
        : null;
    }
    function Gf(a) {
      var b = E(),
        c = a.target;
      void 0 !== c.value && (b.value = c.value);
      "INPUT" == c.tagName && (b.valueAsNumber = Number(c.value));
      void 0 !== c.checked && (b.checked = c.checked);
      if (void 0 !== c.min || void 0 !== c.max)
        (b.min = c.min), (b.max = c.max);
      0 < Object.keys(b).length && (a.detail = b);
    }
    function Nf(a, b) {
      var c = a.method,
        d = a.node;
      a = a.tagOrTarget;
      "activate" === c &&
        "function" == typeof d.getDefaultActionAlias &&
        (c = d.getDefaultActionAlias());
      var e = c.toLowerCase(),
        g = a.toLowerCase();
      return b.some(function(a) {
        return (a.tagOrTarget.toLowerCase() !== g && "*" !== a.tagOrTarget) ||
          a.method.toLowerCase() !== e
          ? !1
          : !0;
      });
    }
    function Hf(a) {
      this.detail = null;
      var b = this || E(),
        c;
      for (c in a) b[c] = "function" === typeof a[c] ? Pf : a[c];
    }
    function Pf() {}
    function Of(a, b) {
      var c = Qf.bind(null, a, b),
        d = Rf.bind(null, a, b);
      b = null;
      var e = new Sf(a);
      do {
        var g = e.next();
        if (g.type != Tf && (g.type != Uf || ";" != g.value))
          if (g.type == Vf || g.type == Wf) {
            var h = g.value;
            d(e.next(), [Uf], ":");
            var k = [];
            do {
              var l = d(e.next(), [Vf, Wf]).value,
                m = "activate",
                n = null;
              var r = e.peek();
              if (
                r.type == Uf &&
                "." == r.value &&
                (e.next(),
                (m = d(e.next(), [Vf, Wf]).value || m),
                (r = e.peek()),
                r.type == Uf && "(" == r.value)
              ) {
                e.next();
                n = e;
                var t = d,
                  v = c,
                  y = n.peek(),
                  x = null;
                if (y.type == Xf) {
                  x = E();
                  var A = n.next().value;
                  x.__AMP_OBJECT_STRING__ = A;
                  t(n.next(), [Uf], ")");
                } else {
                  do {
                    var J = (A = n.next());
                    y = J.type;
                    J = J.value;
                    if (y != Uf || ("," != J && ")" != J))
                      if (y == Vf || y == Wf) {
                        t(n.next(), [Uf], "=");
                        A = t(n.next(!0), [Vf, Wf]);
                        var N = [A];
                        if (A.type == Wf)
                          for (
                            y = n.peek();
                            y.type == Uf && "." == y.value;
                            y = n.peek()
                          )
                            n.next(), (A = t(n.next(!1), [Wf])), N.push(A);
                        y = Yf(N);
                        x || (x = E());
                        x[J] = y;
                        y = n.peek();
                        v(
                          y.type == Uf && ("," == y.value || ")" == y.value),
                          "Expected either [,] or [)]"
                        );
                      } else
                        v(!1, "; unexpected token [" + (A.value || "") + "]");
                  } while (A.type != Uf || ")" != A.value);
                }
                n = x;
              }
              k.push({ event: h, target: l, method: m, args: n, str: a });
              r = e.peek();
            } while (r.type == Uf && "," == r.value && e.next());
            b || (b = E());
            b[h] = k;
          } else c(!1, "; unexpected token [" + (g.value || "") + "]");
      } while (g.type != Tf);
      return b;
    }
    function Yf(a) {
      return 0 == a.length
        ? null
        : 1 == a.length
        ? a[0].value
        : {
            expression: a
              .map(function(a) {
                return a.value;
              })
              .join(".")
          };
    }
    function Mf(a, b, c) {
      if (!a) return a;
      var d = c || G({});
      b && (b = b.detail) && (d.event = b);
      var e = E();
      Object.keys(a).forEach(function(b) {
        var c = a[b];
        if ("object" == typeof c && c.expression) {
          c = c.expression;
          if ("." == c) c = d;
          else {
            c = c.split(".");
            for (var g = d, l = 0; l < c.length; l++) {
              var m = c[l];
              if (m && g && void 0 !== g[m] && Jb(g, m)) g = g[m];
              else {
                g = void 0;
                break;
              }
            }
            c = g;
          }
          var n = c;
          c = void 0 === n ? null : n;
        }
        e[b] = d[c] ? d[c] : c;
      });
      return e;
    }
    function Qf(a, b, c, d) {
      return D(c, "Invalid action definition in %s: [%s] %s", b, a, d || "");
    }
    function Rf(a, b, c, d, e) {
      void 0 !== e
        ? Qf(a, b, d.includes(c.type) && c.value == e, "; expected [" + e + "]")
        : Qf(a, b, d.includes(c.type));
      return c;
    }
    var Tf = 1,
      Uf = 2,
      Vf = 3,
      Wf = 4,
      Xf = 5;
    function Sf(a) {
      this.K = a;
      this.wd = -1;
    }
    Sf.prototype.next = function(a) {
      var b = Zf(this, a || !1);
      this.wd = b.index;
      return b;
    };
    Sf.prototype.peek = function(a) {
      return Zf(this, a || !1);
    };
    function Zf(a, b) {
      var c = a.wd + 1;
      if (c >= a.K.length) return { type: Tf, index: a.wd };
      var d = a.K.charAt(c);
      if (-1 != " \t\n\r\f\v\u00a0\u2028\u2029".indexOf(d)) {
        for (
          c++;
          c < a.K.length &&
          -1 != " \t\n\r\f\v\u00a0\u2028\u2029".indexOf(a.K.charAt(c));
          c++
        );
        if (c >= a.K.length) return { type: Tf, index: c };
        d = a.K.charAt(c);
      }
      if (b && ($f(d) || ("." == d && c + 1 < a.K.length && $f(a.K[c + 1])))) {
        for (var e = "." == d, g = c + 1; g < a.K.length; g++) {
          var h = a.K.charAt(g);
          if ("." == h) e = !0;
          else if (!$f(h)) break;
        }
        a = a.K.substring(c, g);
        a = e ? parseFloat(a) : parseInt(a, 10);
        c = g - 1;
        return { type: Vf, value: a, index: c };
      }
      if (-1 != ";:.()=,|!".indexOf(d)) return { type: Uf, value: d, index: c };
      if (-1 != "\"'".indexOf(d)) {
        g = -1;
        for (var k = c + 1; k < a.K.length; k++)
          if (a.K.charAt(k) == d) {
            g = k;
            break;
          }
        if (-1 == g) return { type: 0, index: c };
        a = a.K.substring(c + 1, g);
        c = g;
        return { type: Vf, value: a, index: c };
      }
      if ("{" == d) {
        var l = 1;
        g = -1;
        for (d = c + 1; d < a.K.length; d++) {
          var m = a.K[d];
          "{" == m ? l++ : "}" == m && l--;
          if (0 >= l) {
            g = d;
            break;
          }
        }
        if (-1 == g) return { type: 0, index: c };
        a = a.K.substring(c, g + 1);
        c = g;
        return { type: Xf, value: a, index: c };
      }
      for (
        g = c + 1;
        g < a.K.length &&
        -1 ==
          " \t\n\r\f\x0B\u00a0\u2028\u2029;:.()=,|!\"'{}".indexOf(
            a.K.charAt(g)
          );
        g++
      );
      a = a.K.substring(c, g);
      c = g - 1;
      return !b || ("true" != a && "false" != a)
        ? $f(a.charAt(0))
          ? { type: Vf, value: a, index: c }
          : { type: Wf, value: a, index: c }
        : { type: Vf, value: "true" == a, index: c };
    }
    function $f(a) {
      return "0" <= a && "9" >= a;
    }
    function ag(a, b) {
      for (var c = [], d = 0, e = 0; e < a.length; e++) {
        var g = a[e];
        b(g, e, a) ? c.push(g) : (d < e && (a[d] = g), d++);
      }
      d < a.length && (a.length = d);
      return c;
    }
    function bg(a, b) {
      for (var c = 0; c < a.length; c++) if (b(a[c], c, a)) return c;
      return -1;
    }
    function cg(a) {
      return !!a && "function" == typeof a.getFormData;
    }
    var dg = ["GET", "POST"],
      eg = [w, Ka];
    function fg(a, b) {
      var c = Object.assign({}, b);
      if (cg(b.body)) {
        var d = b.body;
        c.headers["Content-Type"] = "multipart/form-data;charset=utf-8";
        b = d.entries();
        for (var e = [], g = b.next(); !g.done; g = b.next()) e.push(g.value);
        c.body = e;
      }
      return { input: a, init: c };
    }
    function gg(a, b) {
      D(Ka(a), "Object expected: %s", a);
      var c = "document" == b;
      if (!c) return new Response(a.body, a.init);
      var d = E(),
        e = {
          status: 200,
          statusText: "OK",
          getResponseHeader: function(a) {
            return d[String(a).toLowerCase()] || null;
          }
        };
      if (a.init) {
        var g = a.init;
        w(g.headers) &&
          g.headers.forEach(function(a) {
            var b = a[1];
            d[String(a[0]).toLowerCase()] = String(b);
          });
        g.status && (e.status = parseInt(g.status, 10));
        g.statusText && (e.statusText = String(g.statusText));
      }
      return new Response(a.body ? String(a.body) : "", e);
    }
    function hg(a, b, c, d) {
      if (!b) return Promise.resolve();
      var e = d.prerenderSafe ? Promise.resolve() : b.whenFirstVisible(),
        g = W(b),
        h = P(c),
        k = g.hasCapability("xhrInterceptor"),
        l = d.bypassInterceptorForDev && !1;
      return h ||
        !k ||
        l ||
        !b.getRootNode().documentElement.hasAttribute("allow-xhr-interception")
        ? e
        : e
            .then(function() {
              return g.isTrustedViewer();
            })
            .then(function(b) {
              if (b || Q(a, "untrusted-xhr-interception")) {
                var e = G({ originalRequest: fg(c, d) });
                return g.sendMessageAwaitResponse("xhr", e).then(function(a) {
                  return gg(a, d.responseType);
                });
              }
            });
    }
    function ig(a, b, c) {
      !1 !== c.ampCors && (b = ad(a, b));
      return b;
    }
    function jg(a, b) {
      a = a || {};
      var c = a.method;
      void 0 === c ? (c = "GET") : ((c = c.toUpperCase()), dg.includes(c));
      a.method = c;
      a.headers = a.headers || G({});
      b && (a.headers.Accept = b);
      return a;
    }
    function kg(a, b, c) {
      c = c || {};
      var d = a.origin || O(a.location.href).origin,
        e = O(b).origin;
      d == e &&
        ((c.headers = c.headers || {}),
        (c.headers["AMP-Same-Origin"] = "true"));
      return c;
    }
    function lg(a) {
      var b = jg(a, "application/json");
      if ("POST" == b.method && !cg(b.body)) {
        eg.some(function(a) {
          return a(b.body);
        });
        b.headers["Content-Type"] =
          b.headers["Content-Type"] || "text/plain;charset=utf-8";
        var c = b.headers["Content-Type"];
        b.body =
          "application/x-www-form-urlencoded" === c
            ? Sc(b.body)
            : JSON.stringify(b.body);
      }
      return b;
    }
    function mg(a) {
      return new Promise(function(b) {
        if (a.ok) return b(a);
        b = a.status;
        var c = z().createError("HTTP error " + b);
        c.retriable = 415 == b || (500 <= b && 600 > b);
        c.response = a;
        throw c;
      });
    }
    function ng(a) {
      this.win = a;
      a = Ed(a);
      this.ig = a.isSingleDoc() ? a.getSingleDoc() : null;
    }
    f = ng.prototype;
    f.Cg = function(a, b) {
      var c = arguments,
        d = this;
      return hg(this.win, this.ig, a, b).then(function(a) {
        if (a) return a;
        if (cg(b.body)) {
          var e = b.body;
          b.body = e.getFormData();
        }
        return d.win.fetch.apply(null, c);
      });
    };
    function og(a, b, c) {
      c = void 0 === c ? {} : c;
      b = ig(a.win, b, c);
      c = kg(a.win, b, c);
      return a.Cg(b, c).then(
        function(a) {
          return a;
        },
        function(a) {
          var c = O(b).origin;
          throw z().createExpectedError(
            "XHR",
            "Failed fetching (" + c + "/...):",
            a && a.message
          );
        }
      );
    }
    f.fetchJson = function(a, b) {
      return this.fetch(a, lg(b));
    };
    f.fetchText = function(a, b) {
      return this.fetch(a, jg(b, "text/plain"));
    };
    f.fetch = function(a, b) {
      b = jg(b);
      return og(this, a, b).then(function(a) {
        return mg(a);
      });
    };
    f.sendSignal = function(a, b) {
      return og(this, a, b).then(function(a) {
        return mg(a);
      });
    };
    f.getCorsUrl = function(a, b) {
      return ad(a, b);
    };
    function pg(a) {
      ng.call(this, a);
      this.mb = E();
    }
    p(pg, ng);
    pg.prototype.fetch = function(a, b) {
      var c = this,
        d = (b && b.headers && b.headers.Accept) || "",
        e = !b || !b.method || "GET" === b.method,
        g = Vc(a) + d,
        h = !!this.mb[g];
      if (e && h)
        return this.mb[g].then(function(a) {
          return a.clone();
        });
      var k = ng.prototype.fetch.call(this, a, b);
      e &&
        (this.mb[g] = k.then(
          function(a) {
            delete c.mb[g];
            return a.clone();
          },
          function(a) {
            delete c.mb[g];
            throw a;
          }
        ));
      return k;
    };
    function qg(a, b) {
      var c = rg(a);
      if (!c) return null;
      var d = c.split(";");
      for (a = 0; a < d.length; a++) {
        var e = d[a].trim(),
          g = e.indexOf("="),
          h;
        if ((h = -1 != g))
          (h = e.substring(0, g).trim()), (h = Ga(h, void 0) == b);
        if (h) return (b = e.substring(g + 1).trim()), Ga(b, b);
      }
      return null;
    }
    function rg(a) {
      try {
        return a.document.cookie;
      } catch (b) {
        return "";
      }
    }
    function sg(a, b, c, d) {
      var e = { highestAvailableDomain: !0 };
      e = void 0 === e ? {} : e;
      if (e.allowOnProxyOrigin)
        D(
          !e.highestAvailableDomain,
          "Could not support higestAvailable Domain on proxy origin, specify domain explicitly"
        );
      else {
        D(
          !P(a.location.href),
          "Should never attempt to set cookie on proxy origin: " + b
        );
        var g = O(a.location.href).hostname.toLowerCase(),
          h = O(Oa.cdn).hostname.toLowerCase();
        D(
          !(g == h || nb(g, "." + h)),
          "Should never attempt to set cookie on proxy origin. (in depth check): " +
            b
        );
      }
      g = void 0;
      if (e.domain) g = e.domain;
      else if (e.highestAvailableDomain)
        a: if (
          (g =
            a.document.head &&
            a.document.head.querySelector("meta[name='amp-cookie-scope']"))
        )
          (g = g.getAttribute("content") || ""),
            (h = $c(a.location.href)),
            (g = nb(h, "." + g) ? g : h.split("://")[1]);
        else {
          if (!P(a.location.href)) {
            g = a.location.hostname.split(".");
            h = g[g.length - 1];
            var k;
            for (k = "-test-amp-cookie-tmp"; qg(a, k); )
              k = "-test-amp-cookie-tmp0";
            for (var l = g.length - 2; 0 <= l; l--)
              if (
                ((h = g[l] + "." + h),
                tg(a, k, "delete", Date.now() + 1e3, h),
                "delete" == qg(a, k))
              ) {
                tg(a, k, "delete", Date.now() - 1e3, h);
                g = h;
                break a;
              }
          }
          g = null;
        }
      tg(a, b, c, d, g, e.sameSite);
    }
    function tg(a, b, c, d, e, g) {
      "ampproject.org" == e && ((c = "delete"), (d = 0));
      b =
        encodeURIComponent(b) +
        "=" +
        encodeURIComponent(c) +
        "; path=/" +
        (e ? "; domain=" + e : "") +
        "; expires=" +
        new Date(d).toUTCString();
      c = g;
      try {
        a.document.cookie = b + (c ? "; SameSite=" + c : "");
      } catch (h) {}
    }
    function ug(a) {
      this.o = a.win;
      this.O = V(this.o);
      this.hd = {};
      var b = Fd(a).canonicalUrl;
      this.gd = b ? O(b).origin : null;
    }
    ug.prototype.getScopedCid = function(a, b) {
      var c = this;
      if (this.hd[b]) return this.hd[b];
      var d;
      return (this.hd[b] = this.O.poll(200, function() {
        d = qg(c.o, "AMP_TOKEN");
        return "$RETRIEVING" !== d;
      }).then(function() {
        if ("$OPT_OUT" === d) return "$OPT_OUT";
        var e = "$NOT_FOUND" === d && P(c.o.document.referrer);
        if (!e && d && "$" === d[0]) return null;
        (d && (!d || "$" !== d[0])) || vg(c, "$RETRIEVING", 3e4);
        return c
          .lb(
            "https://ampcid.google.com/v1/publisher:getClientId?key=" + a,
            b,
            d
          )
          .then(function(e) {
            var g = c.ff(e);
            if (!g && e.alternateUrl) {
              var k = e.alternateUrl + "?key=" + a;
              return c.lb(k, b, d).then(c.ff.bind(c));
            }
            return g;
          })
          .catch(function(a) {
            vg(c, "$ERROR", 3e4);
            a && a.response
              ? a.response.json().then(function(a) {
                  C().error("GoogleCidApi", JSON.stringify(a));
                })
              : C().error("GoogleCidApi", a);
            return null;
          });
      }));
    };
    ug.prototype.lb = function(a, b, c) {
      b = G({ originScope: b, canonicalOrigin: this.gd });
      c && (b.securityToken = c);
      return this.O.timeoutPromise(
        3e4,
        U(this.o, "xhr")
          .fetchJson(a, {
            method: "POST",
            ampCors: !1,
            credentials: "include",
            mode: "cors",
            body: b
          })
          .then(function(a) {
            return a.json();
          })
      );
    };
    ug.prototype.ff = function(a) {
      if (a.optOut) return vg(this, "$OPT_OUT", 31536e6), "$OPT_OUT";
      if (a.clientId) return vg(this, a.securityToken, 31536e6), a.clientId;
      if (a.alternateUrl) return null;
      vg(this, "$NOT_FOUND", 36e5);
      return null;
    };
    function vg(a, b, c) {
      if (b) {
        var d = a.o,
          e = c;
        a = a.o.Date.now() + e;
        sg(d, "AMP_TOKEN", b, a);
      }
    }
    function wg(a) {
      this.B = a;
      this.h = W(this.B);
      this.$d = null;
      this.O = V(this.B.win);
    }
    wg.prototype.isSupported = function() {
      return this.h.isCctEmbedded() && this.h.isProxyOrigin();
    };
    wg.prototype.getScopedCid = function(a) {
      var b = this;
      if (!this.h.isCctEmbedded()) return Promise.resolve(null);
      this.$d ||
        (this.$d = this.lb(
          "https://ampcid.google.com/v1/cache:getClientId?key=AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc"
        ));
      return this.$d.then(function(c) {
        return c ? xg(b, c, a) : null;
      });
    };
    wg.prototype.lb = function(a, b) {
      var c = this;
      b = void 0 === b ? !0 : b;
      var d = G({ publisherOrigin: $c(this.B.win.location) }),
        e = "fetchCidTimeout";
      return this.O.timeoutPromise(
        3e4,
        U(this.B.win, "xhr").fetchJson(a, {
          method: "POST",
          ampCors: !1,
          credentials: "include",
          mode: "cors",
          body: d
        }),
        e
      )
        .then(function(a) {
          return a.json().then(function(a) {
            if (a.optOut) return null;
            var d = a.publisherClientId;
            if (!d && b && a.alternateUrl) {
              var e =
                a.alternateUrl + "?key=AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc";
              return c.lb(e, !1);
            }
            return d;
          });
        })
        .catch(function(a) {
          if (a && a.response)
            a.response.json().then(function(a) {
              C().error("CacheCidApi", JSON.stringify(a));
            });
          else {
            var b = a && a.message == e;
            b
              ? C().expectedError("CacheCidApi", a)
              : C().error("CacheCidApi", a);
          }
          return null;
        });
    };
    function xg(a, b, c) {
      b = b + ";" + c;
      return U(a.B.win, "crypto")
        .sha384Base64(b)
        .then(function(a) {
          return "amp-" + a;
        });
    }
    function yg(a) {
      this.B = a;
      this.h = W(this.B);
      this.gd = (a = Fd(this.B).canonicalUrl) ? O(a).origin : null;
    }
    yg.prototype.isSupported = function() {
      return this.h.hasCapability("cid")
        ? this.h.isTrustedViewer()
        : Promise.resolve(!1);
    };
    yg.prototype.getScopedCid = function(a, b) {
      b = G({ scope: b, clientIdApi: !!a, canonicalOrigin: this.gd });
      a && (b.apiKey = a);
      return this.h.sendMessageAwaitResponse("cid", b);
    };
    var zg = { "+": "-", "/": "_", "=": "." };
    function Ag(a) {
      a = Nb(a);
      return btoa(a).replace(/[+/=]/g, function(a) {
        return zg[a];
      });
    }
    var Bg = /^[a-zA-Z0-9-_.]+$/,
      Cg = { googleanalytics: "AMP_ECID_GOOGLE" },
      Dg = { googleanalytics: "AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM" };
    function Eg(a) {
      this.ampdoc = a;
      this.Xc = null;
      this.nd = Object.create(null);
      this.Le = new wg(a);
      this.dg = new yg(a);
      this.sg = new ug(a);
      this.Wc = null;
    }
    Eg.prototype.get = function(a, b, c) {
      var d = this;
      D(
        Bg.test(a.scope) && Bg.test(a.cookieName),
        "The CID scope and cookie name must only use the characters [a-zA-Z0-9-_.]+\nInstead found: %s",
        a.scope
      );
      return b
        .then(function() {
          return d.ampdoc.whenFirstVisible();
        })
        .then(function() {
          return Fg(d.ampdoc);
        })
        .then(function(e) {
          if (e) return "";
          var g = Gg(d, a, c || b);
          return V(d.ampdoc.win)
            .timeoutPromise(
              1e4,
              g,
              'Getting cid for "' + a.scope + '" timed out'
            )
            .catch(function(a) {
              eb(a);
            });
        });
    };
    Eg.prototype.optOut = function() {
      return Hg(this.ampdoc);
    };
    function Gg(a, b, c) {
      var d = b.scope,
        e = O(a.ampdoc.win.location.href);
      if (!P(e)) {
        var g = Ig(a, d);
        return g
          ? a.sg.getScopedCid(g, d).then(function(e) {
              if ("$OPT_OUT" == e) return null;
              if (e) {
                var g = b.cookieName || d;
                Jg(a.ampdoc.win, g, e);
                return e;
              }
              return Kg(a, b, c);
            })
          : Kg(a, b, c);
      }
      return a.dg.isSupported().then(function(b) {
        if (b) {
          var g = Ig(a, d);
          return a.dg.getScopedCid(g, d);
        }
        return a.Le.isSupported() && Ig(a, d)
          ? a.Le.getScopedCid(d).then(function(b) {
              return b ? b : Lg(a, c, d, e);
            })
          : Lg(a, c, d, e);
      });
    }
    function Lg(a, b, c, d) {
      return Mg(a, b).then(function(b) {
        return U(a.ampdoc.win, "crypto").sha384Base64(b + Ng(d) + c);
      });
    }
    function Ig(a, b) {
      a.Wc || (a.Wc = Pg(a));
      return a.Wc[b];
    }
    function Pg(a) {
      var b = {},
        c = a.ampdoc.win.document.head.querySelector(
          "meta[name=amp-google-client-id-api]"
        );
      c &&
        c.hasAttribute("content") &&
        c
          .getAttribute("content")
          .split(",")
          .forEach(function(a) {
            a = a.trim();
            if (0 < a.indexOf("=")) {
              var d = a.split("=");
              a = d[0].trim();
              b[a] = d[1].trim();
            } else {
              var g = a;
              (a = Cg[g])
                ? (b[a] = Dg[g])
                : z().warn(
                    "CID",
                    "Unsupported client for Google CID API: " +
                      g +
                      ".Please remove or correct " +
                      c.outerHTML
                  );
            }
          });
      return b;
    }
    function Hg(a) {
      W(a).sendMessage("cidOptOut", {});
      return td(R(a), "storage").then(function(a) {
        return a.set("amp-cid-optout", !0);
      });
    }
    function Fg(a) {
      return td(R(a), "storage")
        .then(function(a) {
          return a.get("amp-cid-optout").then(function(a) {
            return !!a;
          });
        })
        .catch(function() {
          return !1;
        });
    }
    function Jg(a, b, c) {
      var d = Date.now() + 31536e6;
      sg(a, b, c, d);
    }
    function Kg(a, b, c) {
      var d = a.ampdoc.win,
        e = b.scope,
        g = b.cookieName || e,
        h = qg(d, g);
      if (!h && !b.createCookieIfNotPresent) return Promise.resolve(null);
      if (a.nd[e]) return a.nd[e];
      if (h) return /^amp-/.test(h) && Jg(d, g, h), Promise.resolve(h);
      var k = Qg(d).then(function(a) {
        return "amp-" + a;
      });
      Promise.all([k, c]).then(function(a) {
        var b = a[0],
          c = qg(d, g);
        c || Jg(d, g, b);
      });
      return (a.nd[e] = k);
    }
    function Ng(a) {
      D(P(a), "Expected proxy origin %s", a.origin);
      return $c(a);
    }
    function Mg(a, b) {
      if (a.Xc) return a.Xc;
      var c = a.ampdoc.win;
      return (a.Xc = Rg(a.ampdoc).then(function(d) {
        var e = !1;
        if (d && !Sg(d)) {
          var g = Promise.resolve(d.cid);
          Tg(d) && (e = !0);
        } else (g = U(c, "crypto").sha384Base64(Ug(c))), (e = !0);
        e &&
          g.then(function(c) {
            Vg(a.ampdoc, b, c);
          });
        return g;
      }));
    }
    function Vg(a, b, c) {
      var d = a.win;
      Hb(d)
        ? Wg(a, Xg(c))
        : b.then(function() {
            try {
              d.localStorage.setItem("amp-cid", Xg(c));
            } catch (e) {}
          });
    }
    function Wg(a, b) {
      var c = W(a);
      return c.isTrustedViewer().then(function(a) {
        if (a)
          return (
            C().expectedError("CID", "Viewer does not provide cap=cid"),
            c.sendMessageAwaitResponse("cid", b).then(function(a) {
              var b;
              if ((b = a)) {
                try {
                  var c = Kb(a);
                } catch (k) {
                  c = null;
                }
                b = !c;
              }
              return b
                ? (C().expectedError("CID", "invalid cid format"),
                  JSON.stringify(G({ time: Date.now(), cid: a })))
                : a;
            })
          );
      });
    }
    function Xg(a) {
      return JSON.stringify(G({ time: Date.now(), cid: a }));
    }
    function Rg(a) {
      var b = a.win;
      try {
        var c = b.localStorage.getItem("amp-cid");
      } catch (e) {}
      var d = Promise.resolve(c);
      !c && Hb(b) && (d = Wg(a));
      return d.then(function(a) {
        if (!a) return null;
        a = Kb(a);
        return { time: a.time, cid: a.cid };
      });
    }
    function Sg(a) {
      var b = a.time,
        c = Date.now();
      return b + 31536e6 < c;
    }
    function Tg(a) {
      a = a.time;
      var b = Date.now();
      return a + 864e5 < b;
    }
    function Ug(a) {
      if (a.crypto && a.crypto.getRandomValues) {
        var b = new Uint8Array(16);
        a.crypto.getRandomValues(b);
      } else b = null;
      return b
        ? b
        : String(
            a.location.href +
              Date.now() +
              a.Math.random() +
              a.screen.width +
              a.screen.height
          );
    }
    function Qg(a) {
      var b = Ug(a);
      if ("string" == typeof b) return U(a, "crypto").sha384Base64(b);
      var c = b;
      return K(function() {
        return Ag(c).replace(/\.+$/, "");
      });
    }
    function Yg(a) {
      this.o = a;
      var b = null,
        c = !1;
      a.crypto &&
        (a.crypto.subtle
          ? (b = a.crypto.subtle)
          : a.crypto.webkitSubtle && ((b = a.crypto.webkitSubtle), (c = !0)));
      this.pkcsAlgo = { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
      this.subtle = b;
      this.Rg = c;
      this.zb = null;
    }
    f = Yg.prototype;
    f.sha384 = function(a) {
      var b = this;
      "string" === typeof a && (a = Mb(a));
      if (!this.subtle || this.zb)
        return (this.zb || Zg(this)).then(function(b) {
          return b(a);
        });
      try {
        return this.subtle.digest({ name: "SHA-384" }, a).then(
          function(a) {
            return new Uint8Array(a);
          },
          function(c) {
            c.message &&
              0 > c.message.indexOf("secure origin") &&
              z().error(
                "Crypto",
                "SubtleCrypto failed, fallback to closure lib.",
                c
              );
            return Zg(b).then(function() {
              return b.sha384(a);
            });
          }
        );
      } catch (c) {
        return (
          C().error(
            "Crypto",
            "SubtleCrypto failed, fallback to closure lib.",
            c
          ),
          Zg(this).then(function() {
            return b.sha384(a);
          })
        );
      }
    };
    f.sha384Base64 = function(a) {
      return this.sha384(a).then(function(a) {
        return Ag(a);
      });
    };
    f.uniform = function(a) {
      return this.sha384(a).then(function(a) {
        for (var b = 0, d = 2; 0 <= d; d--) b = (b + a[d]) / 256;
        return b;
      });
    };
    function Zg(a) {
      return a.zb
        ? a.zb
        : (a.zb = Gd(a.o)
            .preloadExtension("amp-crypto-polyfill")
            .then(function() {
              return U(a.o, "crypto-polyfill");
            }));
    }
    f.isPkcsAvailable = function() {
      return !!this.subtle && !1 !== this.o.isSecureContext;
    };
    f.importPkcsKey = function(a) {
      this.isPkcsAvailable();
      var b = this.Rg ? Lb(JSON.stringify(a)) : a;
      return this.subtle.importKey("jwk", b, this.pkcsAlgo, !0, ["verify"]);
    };
    f.verifyPkcs = function(a, b, c) {
      this.isPkcsAvailable();
      return this.subtle.verify(this.pkcsAlgo, a, b, c);
    };
    var $g = ["prefetch", "preload", "preconnect", "dns-prefetch"];
    function ah(a) {
      this.B = a;
      this.Wd = this.xd = null;
    }
    ah.prototype.get = function() {
      if (this.xd) return this.xd;
      var a = this.B,
        b = a.getUrl(),
        c = Zc(b),
        d = (b = a.getRootNode()) && b.AMP && b.AMP.canonicalUrl;
      if (!d) {
        var e = b.querySelector("link[rel=canonical]");
        d = e ? O(e.href).href : c;
      }
      var g = String(Math.floor(1e4 * a.win.Math.random())),
        h = bh(a.win.document),
        k = ch(a.win.document),
        l = dh(a);
      return (this.xd = {
        get sourceUrl() {
          return Zc(a.getUrl());
        },
        canonicalUrl: d,
        pageViewId: g,
        get pageViewId64() {
          this.Wd || (this.Wd = Qg(a.win));
          return this.Wd;
        },
        linkRels: h,
        metaTags: k,
        replaceParams: l
      });
    };
    function bh(a) {
      var b = E();
      if (a.head) {
        var c = a.head.querySelectorAll("link[rel]");
        a = {};
        for (var d = 0; d < c.length; a = { $a: a.$a }, d++) {
          var e = c[d];
          a.$a = e.href;
          var g = e.getAttribute("rel");
          g &&
            a.$a &&
            g.split(/\s+/).forEach(
              (function(a) {
                return function(c) {
                  if (-1 == $g.indexOf(c)) {
                    var d = b[c];
                    d
                      ? (w(d) || (d = b[c] = [d]), d.push(a.$a))
                      : (b[c] = a.$a);
                  }
                };
              })(a)
            );
        }
      }
      return b;
    }
    function ch(a) {
      var b = E();
      if (a.head) {
        var c = a.head.querySelectorAll("meta[name]");
        for (a = 0; a < c.length; a++) {
          var d = c[a],
            e = d.getAttribute("content");
          if ((d = d.getAttribute("name")) && e) {
            var g = b[d];
            g ? (w(g) || (g = b[d] = [g]), g.push(e)) : (b[d] = e);
          }
        }
      }
      return b;
    }
    function dh(a) {
      var b;
      (b = !a.isSingleDoc()) ||
        ((b = a.win.location.href),
        "string" == typeof b && (b = O(b)),
        (b = "a" != (P(b) ? b.pathname.split("/", 2)[1] : null)));
      if (b) return null;
      a = O(a.win.location.href);
      var c = q(a.search).amp_r;
      return void 0 === c ? null : q(c);
    }
    var eh = null,
      fh = ["gclid", "gclsrc"],
      gh = [/^t.co$/];
    function hh() {
      return D(eh, "E#19457 trackImpressionPromise");
    }
    function ih() {
      var a = self,
        b = new I(),
        c = b.promise,
        d = b.resolve;
      eh = V(a)
        .timeoutPromise(8e3, c, "TrackImpressionPromise timeout")
        .catch(function(a) {
          C().warn("IMPRESSION", a);
        });
      b = W(a.document.documentElement);
      var e = b.isTrustedViewer(),
        g = b.getReferrerUrl().then(function(a) {
          return jh(a);
        });
      Promise.all([e, g]).then(function(b) {
        var c = b[0],
          e = b[1];
        if (c || e || Q(a, "alp")) {
          var g = kh(a),
            h = lh(a);
          Promise.all([g, h]).then(
            function() {
              d();
            },
            function() {}
          );
        } else d();
      });
    }
    function kh(a) {
      var b = W(a.document.documentElement);
      return b.getParam("replaceUrl")
        ? b.hasCapability("replaceUrl")
          ? b.sendMessageAwaitResponse("getReplaceUrl", void 0).then(
              function(a) {
                a && "object" == typeof a
                  ? b.replaceUrl(a.replaceUrl || null)
                  : C().warn("IMPRESSION", "get invalid replaceUrl response");
              },
              function(a) {
                C().warn(
                  "IMPRESSION",
                  "Error request replaceUrl from viewer",
                  a
                );
              }
            )
          : (b.replaceUrl(b.getParam("replaceUrl") || null), Promise.resolve())
        : Promise.resolve();
    }
    function jh(a) {
      var b = O(a);
      return "https:" != b.protocol
        ? !1
        : gh.some(function(a) {
            return a.test(b.hostname);
          });
    }
    function lh(a) {
      var b = kd(a.document.documentElement),
        c = W(b).getParam("click");
      if (!c) return Promise.resolve();
      if (0 != c.indexOf("https://"))
        return (
          z().warn(
            "IMPRESSION",
            "click fragment param should start with https://. Found ",
            c
          ),
          Promise.resolve()
        );
      a.location.hash && (a.location.hash = "");
      return b
        .whenFirstVisible()
        .then(function() {
          return mh(a, c);
        })
        .then(function(b) {
          if (b) {
            var c = b.location;
            (b = b.tracking_url || c) && !P(b) && (new Image().src = b);
            if (c && a.history.replaceState) {
              b = W(a.document.documentElement);
              var d = a.location.href;
              c = O(c);
              c = q(c.search);
              c = Rc(d, c);
              a.history.replaceState(null, "", c);
              b.maybeUpdateFragmentForCct();
            }
          }
        })
        .catch(function(a) {
          z().warn("IMPRESSION", "Error on request clickUrl: ", a);
        });
    }
    function mh(a, b) {
      return U(a, "xhr")
        .fetchJson(b, { credentials: "include" })
        .then(function(a) {
          return 204 == a.status ? null : a.json();
        });
    }
    function nh(a) {
      return a.whenReady().then(function() {
        return !!a
          .getBody()
          .querySelector("amp-analytics[type=googleanalytics]");
      });
    }
    function oh() {
      this.D = [];
    }
    oh.prototype.peek = function() {
      var a = this.D.length;
      return a ? this.D[a - 1].item : null;
    };
    oh.prototype.enqueue = function(a, b) {
      if (isNaN(b)) throw Error("Priority must not be NaN.");
      for (var c = b, d = -1, e = 0, g = this.D.length; e <= g; ) {
        d = Math.floor((e + g) / 2);
        if (d === this.D.length) break;
        if (this.D[d].priority < c) e = d + 1;
        else if (0 < d && this.D[d - 1].priority >= c) g = d - 1;
        else break;
      }
      this.D.splice(d, 0, { item: a, priority: b });
    };
    oh.prototype.forEach = function(a) {
      for (var b = this.D.length; b--; ) a(this.D[b].item);
    };
    oh.prototype.dequeue = function() {
      return this.D.length ? this.D.pop().item : null;
    };
    ia.Object.defineProperties(oh.prototype, {
      length: {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return this.D.length;
        }
      }
    });
    var ph = ["_top", "_blank"];
    function qh(a, b) {
      var c = this;
      this.ampdoc = a;
      this.ia = b || a.getRootNode();
      this.G = Ld(this.ampdoc);
      this.h = W(this.ampdoc);
      this.M = od(this.ampdoc, "history");
      this.ga = Id(this.ampdoc.win);
      this.Qg = this.ga.isIos() && this.ga.isSafari();
      this.rb = Hb(this.ampdoc.win) && this.h.isOvertakeHistory();
      this.Cd =
        this.ia != this.ampdoc.getRootNode() || !!this.ampdoc.getParent();
      this.Pg = "inabox" == u(this.ampdoc.win).runtime;
      this.Mf =
        this.ia.nodeType == Node.DOCUMENT_NODE
          ? this.ia.documentElement
          : this.ia;
      this.eb = this.Jg.bind(this);
      this.ia.addEventListener("click", this.eb);
      this.ia.addEventListener("contextmenu", this.eb);
      this.ve = !1;
      nh(this.ampdoc).then(function(a) {
        c.ve = a;
      });
      this.Uc = null;
      this.ue = new oh();
      this.yf = new oh();
    }
    qh.installInEmbedWindow = function(a, b) {
      ld(a, "navigation", new qh(b, a.document));
    };
    f = qh.prototype;
    f.cleanup = function() {
      this.eb &&
        (this.ia.removeEventListener("click", this.eb),
        this.ia.removeEventListener("contextmenu", this.eb));
    };
    f.openWindow = function(a, b, c, d) {
      var e = "";
      (!this.ga.isIos() && this.ga.isChrome()) || d || (e += "noopener");
      var g = Fb(a, b, c, e);
      g && !d && (g.opener = null);
    };
    f.navigateTo = function(a, b, c, d) {
      var e = void 0 === d ? {} : d;
      d = void 0 === e.target ? "_top" : e.target;
      e = void 0 === e.opener ? !1 : e.opener;
      b = rh(this, b);
      var g = gd(this.Mf, "url");
      if (g.isProtocolValid(b))
        if (
          (D(ph.includes(d), "Target '" + d + "' not supported."),
          (b = g.getSourceUrl(b)),
          "_blank" == d)
        )
          this.openWindow(a, b, d, e);
        else {
          if (
            c &&
            (this.Uc || (this.Uc = sh(this)),
            this.Uc.includes(c) && this.navigateToAmpUrl(b, c))
          )
            return;
          a.top.location.href = b;
        }
      else z().error("navigation", "Cannot navigate to invalid protocol: " + b);
    };
    f.navigateToAmpUrl = function(a, b) {
      return this.h.hasCapability("a2a")
        ? (this.h.sendMessage("a2aNavigate", G({ url: a, requestedBy: b })), !0)
        : !1;
    };
    function sh(a) {
      return (a = a.ia.querySelector('meta[name="amp-to-amp-navigation"]')) &&
        a.hasAttribute("content")
        ? a
            .getAttribute("content")
            .split(",")
            .map(function(a) {
              return a.trim();
            })
        : [];
    }
    f.Jg = function(a) {
      if (!a.defaultPrevented) {
        var b = xb(a.__AMP_CUSTOM_LINKER_TARGET__ || a.target, "A");
        if (b && b.href)
          if ("click" == a.type) {
            th(this, b);
            var c = uh(this, b.href),
              d;
            if ((d = !vh(this, a, b, c))) {
              if (this.rb) {
                d = b.ownerDocument.defaultView;
                var e = b.href,
                  g = c.protocol;
                "ftp:" == g
                  ? (Fb(d, e, "_blank"), a.preventDefault(), (d = !0))
                  : ((g = /^(https?|mailto):$/.test(g)),
                    this.Qg && !g
                      ? (Fb(d, e, "_top"), a.preventDefault(), (d = !0))
                      : (d = !1));
              } else d = !1;
              d = !d;
            }
            if (d)
              if (
                ((d = uh(this, "")),
                wh(c) != wh(d) && (xh(this, b, a), (c = uh(this, b.href))),
                (e = wh(c)),
                (g = wh(d)),
                c.hash && e == g)
              )
                yh(this, a, c, d);
              else if (this.Cd || this.Pg)
                (a = (b.getAttribute("target") || "").toLowerCase()),
                  "_top" != a &&
                    "_blank" != a &&
                    b.setAttribute("target", "_blank");
          } else "contextmenu" == a.type && (th(this, b), xh(this, b, a));
      }
    };
    function xh(a, b, c) {
      a.ue.forEach(function(a) {
        a(b, c);
      });
    }
    function rh(a, b) {
      a.yf.forEach(function(a) {
        b = a(b);
      });
      return b;
    }
    function th(a, b) {
      var c = null;
      if (a.ve && !a.Cd) {
        a = O(a.ampdoc.win.location.href);
        var d = q(a.search);
        a = [];
        for (var e = 0; e < fh.length; e++) {
          var g = fh[e];
          "undefined" !== typeof d[g] && a.push(g);
        }
        d = b.getAttribute("data-amp-addparams");
        e = b.href;
        d && (e = Rc(e, q(d)));
        d = O(e);
        d = q(d.search);
        for (e = a.length - 1; 0 <= e; e--)
          "undefined" !== typeof d[a[e]] && a.splice(e, 1);
        d = "";
        for (e = 0; e < a.length; e++)
          (g = a[e]),
            (d +=
              0 == e
                ? g + "=QUERY_PARAM(" + g + ")"
                : "&" + g + "=QUERY_PARAM(" + g + ")");
        c = d;
      }
      var h = gd(b, "url-replace");
      h.maybeExpandLink(b, c);
    }
    function vh(a, b, c, d) {
      if (!c.hasAttribute("rel")) return !1;
      var e = c
        .getAttribute("rel")
        .split(" ")
        .map(function(a) {
          return a.trim();
        });
      return e.includes("amphtml")
        ? a.navigateToAmpUrl(d.href, "<a rel=amphtml>")
          ? (b.preventDefault(), !0)
          : !1
        : !1;
    }
    function yh(a, b, c, d) {
      if (Id(a.ampdoc.win).isIe()) {
        var e = c.hash.substring(1),
          g = a.ampdoc.getElementById(e);
        g &&
          (/^(?:a|select|input|button|textarea)$/i.test(g.tagName) ||
            (g.tabIndex = -1),
          Gb(g));
      }
      b.preventDefault();
      if (!a.Cd) {
        var h = c.hash.slice(1),
          k = null;
        if (h) {
          var l = String(h).replace(jb, kb);
          k =
            a.ia.getElementById(h) || a.ia.querySelector('a[name="' + l + '"]');
        }
        c.hash != d.hash
          ? a.M.replaceStateForTarget(c.hash).then(function() {
              zh(a, k, h);
            })
          : zh(a, k, h);
      }
    }
    f.registerAnchorMutator = function(a, b) {
      this.ue.enqueue(a, b);
    };
    f.registerNavigateToMutator = function(a, b) {
      this.yf.enqueue(a, b);
    };
    function zh(a, b, c) {
      b
        ? (a.G.scrollIntoView(b),
          V(a.ampdoc.win).delay(function() {
            return a.G.scrollIntoView(b);
          }, 1))
        : C().warn(
            "navigation",
            "failed to find element with id=" + c + " or a[name=" + c + "]"
          );
    }
    function uh(a, b) {
      return gd(a.Mf, "url").parse(b);
    }
    function wh(a) {
      return "" + a.origin + a.pathname + a.search;
    }
    function Ah(a) {
      Dd(a).then(function(b) {
        b && a.getRootNode().addEventListener("submit", Bh, !0);
      });
    }
    function Bh(a) {
      if (!a.defaultPrevented) {
        var b = a.target;
        if (b && "FORM" == b.tagName) {
          var c = b.classList.contains("i-amphtml-form"),
            d;
          (d = c
            ? !b.hasAttribute("amp-novalidate")
            : !b.hasAttribute("novalidate")) &&
            b.checkValidity &&
            !b.checkValidity() &&
            a.preventDefault();
          for (var e = b.elements, g = 0; g < e.length; g++)
            D(
              !e[g].name || "__amp_source_origin" != e[g].name,
              "Illegal input name, %s found: %s",
              "__amp_source_origin",
              e[g]
            );
          g = b.getAttribute("action");
          var h = b.getAttribute("action-xhr"),
            k = (b.getAttribute("method") || "GET").toUpperCase();
          h &&
            (Uc(h, b, "action-xhr"),
            D(!P(h), "form action-xhr should not be on AMP CDN: %s", b),
            bd(h));
          g &&
            (Uc(g, b, "action"),
            D(!P(g), "form action should not be on AMP CDN: %s", b),
            bd(g));
          if ("GET" == k)
            D(
              h || g,
              "form action-xhr or action attribute is required for method=GET: %s",
              b
            );
          else if ("POST" == k) {
            if (g) {
              var l = "form";
              z().error(
                l,
                "action attribute is invalid for method=POST: %s",
                b
              );
            }
            h ||
              (a.preventDefault(),
              D(
                !1,
                "Only XHR based (via action-xhr attribute) submissions are support for POST requests. %s",
                b
              ));
          }
          (g = b.getAttribute("target"))
            ? D(
                "_blank" == g || "_top" == g,
                "form target=%s is invalid can only be _blank or _top: %s",
                g,
                b
              )
            : b.setAttribute("target", "_top");
          h &&
            (a.preventDefault(),
            a.stopImmediatePropagation(),
            gd(b, "action").execute(b, "submit", null, b, b, a, 100));
        }
      }
    }
    function Y() {
      this.X = null;
    }
    f = Y.prototype;
    f.add = function(a) {
      var b = this;
      this.X || (this.X = []);
      this.X.push(a);
      return function() {
        b.remove(a);
      };
    };
    f.remove = function(a) {
      this.X && ((a = this.X.indexOf(a)), -1 < a && this.X.splice(a, 1));
    };
    f.removeAll = function() {
      this.X && (this.X.length = 0);
    };
    f.fire = function(a) {
      if (this.X) for (var b = this.X, c = 0; c < b.length; c++) (0, b[c])(a);
    };
    f.getHandlerCount = function() {
      return this.X ? this.X.length : 0;
    };
    var Ch = { attributes: !0, attributeFilter: ["hidden"], subtree: !0 };
    function Dh(a, b) {
      this.V = b || a.getRootNode();
      this.o = (this.V.ownerDocument || this.V).defaultView;
      this.Va = this.ea = null;
    }
    Dh.installInEmbedWindow = function(a, b) {
      ld(a, "hidden-observer", new Dh(b, a.document));
    };
    Dh.prototype.add = function(a) {
      var b = this;
      Eh(this);
      var c = this.Va.add(a);
      return function() {
        c();
        0 === b.Va.getHandlerCount() && b.dispose();
      };
    };
    function Eh(a) {
      if (!a.ea) {
        a.Va = new Y();
        var b = new a.o.MutationObserver(function(b) {
          b && a.Va.fire(b);
        });
        a.ea = b;
        b.observe(a.V, Ch);
      }
    }
    Dh.prototype.dispose = function() {
      this.ea &&
        (this.ea.disconnect(), this.Va.removeAll(), (this.Va = this.ea = null));
    };
    function Fh(a) {
      try {
        return a.state;
      } catch (b) {
        return null;
      }
    }
    function Gh(a, b) {
      this.B = a;
      this.O = V(a.win);
      this.j = b;
      this.C = 0;
      this.Ja = [];
      this.D = [];
      this.j.setOnStateUpdated(this.Y.bind(this));
    }
    f = Gh.prototype;
    f.cleanup = function() {
      this.j.cleanup();
    };
    f.push = function(a, b) {
      var c = this;
      return Hh(
        this,
        function() {
          return c.j.push(b).then(function(b) {
            c.Y(b);
            a && (c.Ja[b.stackIndex] = a);
            return b.stackIndex;
          });
        },
        "push"
      );
    };
    f.pop = function(a) {
      var b = this;
      return Hh(
        this,
        function() {
          return b.j.pop(a).then(function(a) {
            b.Y(a);
          });
        },
        "pop"
      );
    };
    f.replace = function(a) {
      var b = this;
      return Hh(
        this,
        function() {
          return b.j.replace(a);
        },
        "replace"
      );
    };
    f.get = function() {
      var a = this;
      return Hh(
        this,
        function() {
          return a.j.get();
        },
        "get"
      );
    };
    f.goBack = function() {
      var a = this;
      return Hh(
        this,
        function() {
          return 0 >= a.C
            ? Promise.resolve()
            : a.j.pop(a.C).then(function(b) {
                a.Y(b);
              });
        },
        "goBack"
      );
    };
    f.replaceStateForTarget = function(a) {
      var b = this,
        c = this.B.win.location.hash;
      return this.push(function() {
        b.B.win.location.replace(c || "#");
      }).then(function() {
        b.j.replaceStateForTarget(a);
      });
    };
    f.getFragment = function() {
      return this.j.getFragment();
    };
    f.updateFragment = function(a) {
      "#" == a[0] && (a = a.substr(1));
      return this.j.updateFragment(a);
    };
    f.Y = function(a) {
      this.C = a.stackIndex;
      Ih(this, a);
    };
    function Ih(a, b) {
      if (!(a.C >= a.Ja.length - 1)) {
        for (var c = [], d = a.Ja.length - 1; d > a.C; d--)
          a.Ja[d] && (c.push(a.Ja[d]), (a.Ja[d] = void 0));
        a.Ja.splice(a.C + 1);
        if (0 < c.length)
          for (d = { ab: 0 }; d.ab < c.length; d = { ab: d.ab }, d.ab++)
            a.O.delay(
              (function(a) {
                return function() {
                  return c[a.ab](b);
                };
              })(d),
              1
            );
      }
    }
    function Hh(a, b, c) {
      var d = new I(),
        e = d.promise,
        g = Error("history trace for " + c + ": ");
      a.D.push({ callback: b, resolve: d.resolve, reject: d.reject, trace: g });
      1 == a.D.length && Jh(a);
      return e;
    }
    function Jh(a) {
      if (0 != a.D.length) {
        var b = a.D[0];
        try {
          var c = b.callback();
        } catch (d) {
          c = Promise.reject(d);
        }
        c.then(
          function(a) {
            b.resolve(a);
          },
          function(a) {
            C().error("History", "failed to execute a task:", a);
            b.trace && ((b.trace.message += a), C().error("History", b.trace));
            b.reject(a);
          }
        ).then(function() {
          a.D.splice(0, 1);
          Jh(a);
        });
      }
    }
    function Kh(a) {
      var b = this;
      this.win = a;
      this.O = V(a);
      a = this.win.history;
      this.Ka = a.length - 1;
      var c = Fh(a);
      c &&
        void 0 !== c["AMP.History"] &&
        (this.Ka = Math.min(c["AMP.History"], this.Ka));
      this.C = this.Ka;
      this.Y = null;
      this.Dh = "state" in a;
      this.Ya = Lh(this, this.C);
      if (a.pushState && a.replaceState) {
        this.uc = a.originalPushState || a.pushState.bind(a);
        this.wb = a.originalReplaceState || a.replaceState.bind(a);
        var d = function(a, c, d) {
          b.Ya = a;
          b.uc(a, c, d || null);
        };
        var e = function(a, c, d) {
          b.Ya = a;
          void 0 !== d ? b.wb(a, c, d) : b.wb(a, c);
        };
        a.originalPushState || (a.originalPushState = this.uc);
        a.originalReplaceState || (a.originalReplaceState = this.wb);
      } else
        (d = function(a) {
          b.Ya = a;
        }),
          (e = function(a) {
            b.Ya = a;
          });
      this.lh = d;
      this.Dc = e;
      try {
        this.Dc(Lh(this, this.C, !0));
      } catch (g) {
        C().error("History", "Initial replaceState failed: " + g.message);
      }
      a.pushState = this.jf.bind(this);
      a.replaceState = this.vd.bind(this);
      this.Ac = function() {
        var a = Mh(b),
          c = a ? a["AMP.History"] : void 0,
          d = b.C,
          e = b.Sc;
        b.Sc = void 0;
        d > b.win.history.length - 2 &&
          ((d = b.win.history.length - 2), b.sa(Nh(a, { stackIndex: d })));
        d =
          void 0 == c
            ? d + 1
            : c < b.win.history.length
            ? c
            : b.win.history.length - 1;
        a || (a = {});
        a["AMP.History"] = d;
        b.Dc(a, void 0, void 0);
        d != b.C && b.sa(Nh(a, { stackIndex: d }));
        d < b.Ka && (b.Ka = d);
        e && e.resolve();
      };
      this.win.addEventListener("popstate", this.Ac);
    }
    f = Kh.prototype;
    f.cleanup = function() {
      this.uc && (this.win.history.pushState = this.uc);
      this.wb && (this.win.history.replaceState = this.wb);
      this.win.removeEventListener("popstate", this.Ac);
    };
    function Lh(a, b, c) {
      a = E(c ? Mh(a) : void 0);
      a["AMP.History"] = b;
      return a;
    }
    f.setOnStateUpdated = function(a) {
      this.Y = a;
    };
    f.push = function(a) {
      var b = this;
      return Oh(this, function() {
        var c = Nh(Mh(b), a || {});
        b.jf(c, void 0, c.fragment ? "#" + c.fragment : void 0);
        return K(function() {
          return Nh(c, { stackIndex: b.C });
        });
      });
    };
    f.pop = function(a) {
      var b = this;
      a = Math.max(a, this.Ka);
      return Oh(this, function() {
        return Ph(b, b.C - a + 1);
      }).then(function(a) {
        return Nh(Mh(b), { stackIndex: a });
      });
    };
    f.replace = function(a) {
      var b = this;
      a = void 0 === a ? {} : a;
      return Oh(this, function() {
        var c = Nh(Mh(b), a || {}),
          d = (c.url || "").replace(/#.*/, ""),
          e = c.fragment ? "#" + c.fragment : "";
        b.vd(c, c.title, d || e ? d + e : void 0);
        return K(function() {
          return Nh(c, { stackIndex: b.C });
        });
      });
    };
    f.get = function() {
      var a = this;
      return K(function() {
        return Nh(Mh(a), { stackIndex: a.C });
      });
    };
    f.backTo = function(a) {
      var b = this;
      a = Math.max(a, this.Ka);
      return Oh(this, function() {
        return Ph(b, b.C - a);
      });
    };
    function Mh(a) {
      return a.Dh ? Fh(a.win.history) : a.Ya;
    }
    function Oh(a, b) {
      return a.Sc ? a.Sc.promise.then(b, b) : b();
    }
    function Qh(a) {
      var b = new I(),
        c = b.resolve,
        d = b.reject;
      b = a.O.timeoutPromise(500, b.promise);
      a.Sc = { promise: b, resolve: c, reject: d };
      return b;
    }
    function Ph(a, b) {
      if (0 >= b) return Promise.resolve(a.C);
      a.Ya = Lh(a, a.C - b);
      var c = Qh(a);
      a.win.history.go(-b);
      return c.then(function() {
        return Promise.resolve(a.C);
      });
    }
    f.jf = function(a, b, c) {
      a || (a = {});
      var d = this.C + 1;
      a["AMP.History"] = d;
      this.lh(a, b, c);
      d != this.win.history.length - 1 &&
        ((d = this.win.history.length - 1), (a["AMP.History"] = d), this.Dc(a));
      a = Nh(a, { stackIndex: d });
      this.sa(a);
    };
    f.replaceStateForTarget = function(a) {
      var b = this;
      Oh(this, function() {
        b.win.removeEventListener("popstate", b.Ac);
        try {
          b.win.location.replace(a);
        } finally {
          b.win.addEventListener("popstate", b.Ac);
        }
        b.vd();
        return Promise.resolve();
      });
    };
    f.vd = function(a, b, c) {
      a || (a = {});
      var d = Math.min(this.C, this.win.history.length - 1);
      a["AMP.History"] = d;
      this.Dc(a, b, c);
      a = Nh(a, { stackIndex: d });
      this.sa(a);
    };
    f.sa = function(a) {
      a.stackIndex = Math.min(a.stackIndex, this.win.history.length - 1);
      this.C != a.stackIndex && ((this.C = a.stackIndex), this.Y && this.Y(a));
    };
    f.getFragment = function() {
      var a = this.win.location.hash;
      a = a.substr(1);
      return Promise.resolve(a);
    };
    f.updateFragment = function(a) {
      return this.replace({ fragment: a });
    };
    function Nh(a, b) {
      var c = Object.assign({}, (a && a.data) || {}, b.data || {});
      return Object.assign({}, a || {}, b, { data: c });
    }
    function Rh(a, b) {
      var c = this;
      this.win = a;
      this.h = b;
      this.C = 0;
      this.Y = null;
      this.Hh = this.h.onMessage("historyPopped", function(a) {
        void 0 !== a.newStackIndex && (a.stackIndex = a.newStackIndex);
        Sh(a)
          ? c.sa(a)
          : C().warn("History", 'Ignored unexpected "historyPopped" data:', a);
      });
    }
    f = Rh.prototype;
    f.replaceStateForTarget = function(a) {
      this.win.location.replace(a);
    };
    f.cleanup = function() {
      this.Hh();
    };
    f.setOnStateUpdated = function(a) {
      this.Y = a;
    };
    function Th(a, b, c) {
      if (Sh(a)) return a;
      C().warn("History", 'Ignored unexpected "%s" data:', c, a);
      return b;
    }
    function Sh(a) {
      return !!a && void 0 !== a.stackIndex;
    }
    f.push = function(a) {
      var b = this,
        c = Object.assign({ stackIndex: this.C + 1 }, a || {}),
        d = "pushHistory";
      return this.h.sendMessageAwaitResponse(d, c).then(function(a) {
        a = Th(a, c, d);
        b.sa(a);
        return a;
      });
    };
    f.pop = function(a) {
      var b = this;
      if (a > this.C) return this.get();
      a = G({ stackIndex: this.C });
      var c = "popHistory";
      return this.h.sendMessageAwaitResponse(c, a).then(function(a) {
        var d = G({ stackIndex: b.C - 1 });
        a = Th(a, d, c);
        b.sa(a);
        return a;
      });
    };
    f.replace = function(a) {
      var b = this;
      if (a && a.url) {
        if (!this.h.hasCapability("fullReplaceHistory")) {
          var c = G({ stackIndex: this.C });
          return Promise.resolve(c);
        }
        var d = a.url.replace(/#.*/, "");
        a.url = d;
      }
      var e = Object.assign({ stackIndex: this.C }, a || {});
      return this.h
        .sendMessageAwaitResponse("replaceHistory", e, !0)
        .then(function(a) {
          a = Th(a, e, "replaceHistory");
          b.sa(a);
          return a;
        });
    };
    f.get = function() {
      return Promise.resolve({
        data: void 0,
        fragment: "",
        stackIndex: this.C,
        title: ""
      });
    };
    f.sa = function(a) {
      var b = a.stackIndex;
      this.C != b && ((this.C = b), this.Y && this.Y(a));
    };
    f.getFragment = function() {
      return this.h.hasCapability("fragment")
        ? this.h
            .sendMessageAwaitResponse("getFragment", void 0, !0)
            .then(function(a) {
              if (!a) return "";
              "#" == a[0] && (a = a.substr(1));
              return a;
            })
        : Promise.resolve("");
    };
    f.updateFragment = function(a) {
      return this.h.hasCapability("fragment")
        ? this.h.sendMessageAwaitResponse(
            "replaceHistory",
            G({ fragment: a }),
            !0
          )
        : Promise.resolve();
    };
    function Uh(a) {
      var b = W(a);
      b.isOvertakeHistory() || a.win.__AMP_TEST_IFRAME
        ? (b = new Rh(a.win, b))
        : (S(a.win, "global-history-binding", Kh),
          (b = U(a.win, "global-history-binding")));
      return new Gh(a, b);
    }
    function Vh(a) {
      if (!a.hasAttribute("src") && 0 == "srcset" in a) {
        var b = a.getAttribute("srcset"),
          c = /\S+/.exec(b);
        if (null != c) {
          var d = c[0];
          a.setAttribute("src", d);
        }
      }
    }
    var Wh = [];
    function Xh(a) {
      Ie.call(this, a);
      Wh.push(this);
    }
    p(Xh, Ie);
    Xh.prototype.getLayoutPriority = function() {
      return 0;
    };
    Xh.prototype.isLayoutSupported = function() {
      return !0;
    };
    Xh.prototype.reconstructWhenReparented = function() {
      return !1;
    };
    var Yh = { 0: "cld", 2: "adld" };
    function Zh(a, b) {
      this.o = a;
      this.zc = nd(a);
      this.Zb = this.Yb = null;
      this.Ue = !1;
      this.Jd = Yh[b];
    }
    Zh.prototype.enterViewport = function() {
      this.Jd && !this.Yb && ((this.Yb = this.o.Date.now()), $h(this));
    };
    Zh.prototype.startLayout = function() {
      this.Jd && !this.Zb && ((this.Zb = this.o.Date.now()), $h(this));
    };
    function $h(a) {
      if (a.zc && a.zc.isPerformanceTrackingOn() && !a.Ue && a.Yb && a.Zb) {
        var b = a.o.Math.max(a.Zb - a.Yb, 0);
        a.zc.tickDelta(a.Jd, b);
        a.zc.throttledFlush();
        a.Ue = !0;
      }
    }
    function ai(a, b, c) {
      b.__AMP__RESOURCE = this;
      this.Lg = a;
      this.element = b;
      this.debugid = b.tagName.toLowerCase() + "#" + a;
      this.hostWin = b.ownerDocument.defaultView;
      this.w = c;
      this.Sg = b.hasAttribute("placeholder");
      this.pb = !1;
      this.Wa = void 0;
      this.H = b.isBuilt() ? 1 : 0;
      this.Zd = -1;
      this.da = 0;
      this.pf = null;
      this.fc = !1;
      this.ba = M(-1e4, -1e4, 0, 0);
      this.zd = null;
      this.Fd = !1;
      this.Ra = this.ka = null;
      this.Yd = void 0;
      this.sf = !1;
      a = new I();
      this.Wg = a.promise;
      this.Md = a.resolve;
    }
    function Z(a) {
      return a.__AMP__RESOURCE;
    }
    f = ai.prototype;
    f.getId = function() {
      return this.Lg;
    };
    f.updateOwner = function(a) {
      this.Wa = a;
    };
    f.getOwner = function() {
      if (void 0 === this.Wa) {
        for (var a = this.element; a; a = a.parentElement)
          if (a.__AMP__OWNER) {
            this.Wa = a.__AMP__OWNER;
            break;
          }
        void 0 === this.Wa && (this.Wa = null);
      }
      return this.Wa;
    };
    f.hasOwner = function() {
      return !!this.getOwner();
    };
    f.getLayoutPriority = function() {
      return -1 != this.Zd ? this.Zd : this.element.getLayoutPriority();
    };
    f.updateLayoutPriority = function(a) {
      this.Zd = a;
    };
    f.getState = function() {
      return this.H;
    };
    f.isBuilt = function() {
      return this.element.isBuilt();
    };
    f.isBuilding = function() {
      return this.pb;
    };
    f.whenBuilt = function() {
      return this.element.signals().whenSignal("res-built");
    };
    f.build = function() {
      var a = this;
      if (this.pb || !this.element.isUpgraded()) return null;
      this.pb = !0;
      return this.element.build().then(
        function() {
          a.pb = !1;
          a.H = 1;
          a.element.signals().signal("res-built");
        },
        function(b) {
          a.maybeReportErrorOnBuildFailure(b);
          a.pb = !1;
          a.element.signals().rejectSignal("res-built", b);
          throw b;
        }
      );
    };
    f.maybeReportErrorOnBuildFailure = function(a) {
      tf(a) || C().error("Resource", "failed to build:", this.debugid, a);
    };
    f.applySizesAndMediaQuery = function() {
      this.element.applySizesAndMediaQuery();
    };
    f.changeSize = function(a, b, c) {
      this.element.changeSize(a, b, c);
      this.requestMeasure();
    };
    f.overflowCallback = function(a, b, c, d) {
      a && (this.Yd = { height: b, width: c, margins: d });
      this.element.overflowCallback(a, b, c, d);
    };
    f.resetPendingChangeSize = function() {
      this.Yd = void 0;
    };
    f.getPendingChangeSize = function() {
      return this.Yd;
    };
    f.getUpgradeDelayMs = function() {
      return this.element.getUpgradeDelayMs();
    };
    f.measure = function() {
      if (
        !(
          this.Sg &&
          this.element.parentElement &&
          L(this.element.parentElement.tagName, "AMP-")
        ) ||
        "__AMP__RESOURCE" in this.element.parentElement
      ) {
        this.Fd = !1;
        var a = this.ba,
          b = Ld(this.element),
          c = b.getLayoutRect(this.element);
        this.ba = c;
        var d = !1;
        if (b.supportsPositionFixed() && this.isDisplayed())
          for (
            var e = this.w.getAmpdoc().win,
              g = e.document.body,
              h = this.element;
            h && h != g;
            h = h.offsetParent
          ) {
            if (h.isAlwaysFixed && h.isAlwaysFixed()) {
              d = !0;
              break;
            }
            if (b.isDeclaredFixed(h) && "fixed" == Yd(e, h).position) {
              d = !0;
              break;
            }
          }
        if ((this.fc = d))
          this.ba = Zb(c, -b.getScrollLeft(), -b.getScrollTop());
        var k = this.ba;
        b = a;
        c = k;
        var l = !(b.width == c.width && b.height === c.height);
        (1 != this.H && a.top == k.top && !l) ||
          !this.element.isUpgraded() ||
          0 == this.H ||
          (1 != this.H && !this.element.isRelayoutNeeded()) ||
          (this.H = 2);
        this.hasBeenMeasured() || (this.zd = k);
        this.element.updateLayoutBox(k, l);
      }
    };
    f.completeCollapse = function() {
      Xd(this.element, !1);
      this.ba = M(this.ba.left, this.ba.top, 0, 0);
      this.fc = !1;
      this.element.updateLayoutBox(this.getLayoutBox());
      var a = this.getOwner();
      a && a.collapsedCallback(this.element);
    };
    f.completeExpand = function() {
      Xd(this.element, !0);
      this.requestMeasure();
    };
    f.isMeasureRequested = function() {
      return this.Fd;
    };
    f.hasBeenMeasured = function() {
      return !!this.zd;
    };
    f.requestMeasure = function() {
      this.Fd = !0;
    };
    f.getLayoutBox = function() {
      if (!this.fc) return this.ba;
      var a = Ld(this.element);
      return Zb(this.ba, a.getScrollLeft(), a.getScrollTop());
    };
    f.getPageLayoutBox = function() {
      return this.ba;
    };
    f.getPageLayoutBoxAsync = function() {
      var a = this;
      return this.hasBeenMeasured()
        ? K(function() {
            return a.getPageLayoutBox();
          })
        : Kd(this.hostWin).measurePromise(function() {
            a.measure();
            return a.getPageLayoutBox();
          });
    };
    f.getInitialLayoutBox = function() {
      return this.zd || this.ba;
    };
    f.isDisplayed = function() {
      var a = "fluid" == this.element.getLayout(),
        b = this.getLayoutBox(),
        c = 0 < b.height && 0 < b.width;
      return (
        (a || c) &&
        !!this.element.ownerDocument &&
        !!this.element.ownerDocument.defaultView
      );
    };
    f.isFixed = function() {
      return this.fc;
    };
    f.overlaps = function(a) {
      var b = this.getLayoutBox();
      return (
        b.top <= a.bottom &&
        a.top <= b.bottom &&
        b.left <= a.right &&
        a.left <= b.right
      );
    };
    f.prerenderAllowed = function() {
      return this.element.prerenderAllowed();
    };
    f.isBuildRenderBlocking = function() {
      return this.element.isBuildRenderBlocking();
    };
    f.whenWithinViewport = function(a) {
      if (!this.isLayoutPending() || !0 === a) return Promise.resolve();
      var b = a;
      a = String(b);
      if (this.ka && this.ka[a]) return this.ka[a].promise;
      if (this.isWithinViewportRatio(b)) return Promise.resolve();
      this.ka = this.ka || {};
      this.ka[a] = new I();
      return this.ka[a].promise;
    };
    function bi(a) {
      if (a.ka) {
        var b = a.getDistanceViewportRatio(),
          c;
        for (c in a.ka)
          a.isWithinViewportRatio(parseFloat(c), b) &&
            (a.ka[c].resolve(), delete a.ka[c]);
      }
    }
    f.getDistanceViewportRatio = function() {
      var a = Ld(this.element).getRect(),
        b = this.getLayoutBox(),
        c = this.w.getScrollDirection(),
        d = 1,
        e = 0;
      if (a.right < b.left || a.left > b.right) return { distance: !1 };
      if (a.bottom < b.top) (e = b.top - a.bottom), -1 == c && (d = 2);
      else if (a.top > b.bottom) (e = a.top - b.bottom), 1 == c && (d = 2);
      else return { distance: !0 };
      return { distance: e, scrollPenalty: d, viewportHeight: a.height };
    };
    f.isWithinViewportRatio = function(a, b) {
      if ("boolean" === typeof a) return a;
      var c = b || this.getDistanceViewportRatio(),
        d = c.distance,
        e = c.viewportHeight;
      return "boolean" == typeof d ? d : d < (e * a) / c.scrollPenalty;
    };
    f.renderOutsideViewport = function() {
      bi(this);
      return (
        this.hasOwner() ||
        this.isWithinViewportRatio(this.element.renderOutsideViewport())
      );
    };
    f.idleRenderOutsideViewport = function() {
      return this.isWithinViewportRatio(
        this.element.idleRenderOutsideViewport()
      );
    };
    f.layoutScheduled = function(a) {
      this.H = 3;
      this.element.layoutScheduleTime = a;
    };
    f.layoutCanceled = function() {
      this.H = this.hasBeenMeasured() ? 2 : 1;
    };
    f.startLayout = function() {
      var a = this;
      if (this.Ra) return this.Ra;
      if (4 == this.H) return Promise.resolve();
      if (5 == this.H) return Promise.reject(this.pf);
      this.isDisplayed();
      if (0 < this.da && !this.element.isRelayoutNeeded())
        return (this.H = 4), Promise.resolve();
      this.da++;
      this.H = 3;
      return (this.Ra = new Promise(function(b, c) {
        Kd(a.hostWin).mutate(function() {
          try {
            b(a.element.layoutCallback());
          } catch (d) {
            c(d);
          }
        });
      }).then(
        function() {
          return ci(a, !0);
        },
        function(b) {
          return ci(a, !1, b);
        }
      ));
    };
    function ci(a, b, c) {
      a.Md && (a.Md(), (a.Md = null));
      a.Ra = null;
      a.sf = !0;
      a.H = b ? 4 : 5;
      a.pf = c;
      if (!b) return Promise.reject(c);
    }
    f.isLayoutPending = function() {
      return 4 != this.H && 5 != this.H;
    };
    f.loadedOnce = function() {
      return this.Wg;
    };
    f.hasLoadedOnce = function() {
      return this.sf;
    };
    f.isInViewport = function() {
      var a = this.element.isInViewport();
      a && bi(this);
      return a;
    };
    f.setInViewport = function(a) {
      this.element.viewportCallback(a);
    };
    f.unlayout = function() {
      0 != this.H &&
        1 != this.H &&
        (this.setInViewport(!1),
        this.element.unlayoutCallback() &&
          (this.element.togglePlaceholder(!0),
          (this.H = 1),
          (this.da = 0),
          (this.Ra = null)));
    };
    f.getTaskId = function(a) {
      return this.debugid + "#" + a;
    };
    f.pause = function() {
      this.element.pauseCallback();
      this.element.unlayoutOnPause() && this.unlayout();
    };
    f.pauseOnRemove = function() {
      this.element.pauseCallback();
    };
    f.resume = function() {
      this.element.resumeCallback();
    };
    f.unload = function() {
      this.pause();
      this.unlayout();
    };
    f.disconnect = function() {
      delete this.element.__AMP__RESOURCE;
      this.element.disconnect(!0);
    };
    function di() {
      this.wa = E();
      this.Z = null;
    }
    f = di.prototype;
    f.get = function(a) {
      a = this.wa[a];
      return null == a ? null : a;
    };
    f.whenSignal = function(a) {
      var b = this.Z && this.Z[a];
      if (!b) {
        var c = this.wa[a];
        null != c
          ? (b = {
              promise:
                "number" == typeof c ? Promise.resolve(c) : Promise.reject(c)
            })
          : ((c = new I()),
            (b = { promise: c.promise, resolve: c.resolve, reject: c.reject }));
        this.Z || (this.Z = E());
        this.Z[a] = b;
      }
      return b.promise;
    };
    f.signal = function(a, b) {
      if (null == this.wa[a]) {
        var c = b || Date.now();
        this.wa[a] = c;
        (a = this.Z && this.Z[a]) &&
          a.resolve &&
          (a.resolve(c), (a.resolve = void 0), (a.reject = void 0));
      }
    };
    f.rejectSignal = function(a, b) {
      null == this.wa[a] &&
        ((this.wa[a] = b),
        (a = this.Z && this.Z[a]) &&
          a.reject &&
          (a.reject(b), (a.resolve = void 0), (a.reject = void 0)));
    };
    f.reset = function(a) {
      this.wa[a] && delete this.wa[a];
      var b = this.Z && this.Z[a];
      b && !b.resolve && delete this.Z[a];
    };
    function ei(a, b) {
      return Gd(a.win)
        .installExtensionForDoc(a, "amp-loader")
        .then(function() {
          return yd(b, "loader", "amp-loader");
        });
    }
    function fi(a, b, c, d) {
      var e = Date.now(),
        g = b.ownerDocument.createElement("div");
      ei(a, b).then(function(a) {
        var h = Date.now() - e;
        a.initializeLoader(b, g, h, c, d);
      });
      return g;
    }
    function gi(a, b, c) {
      var d = this;
      this.O = V(a);
      this.Kg = b;
      this.ug = c || 0;
      this.ma = -1;
      this.Td = 0;
      this.Ha = !1;
      this.og = function() {
        d.yc();
      };
    }
    gi.prototype.isPending = function() {
      return -1 != this.ma;
    };
    gi.prototype.schedule = function(a) {
      a = a || this.ug;
      this.Ha && 10 > a && (a = 10);
      var b = Date.now() + a;
      return !this.isPending() || -10 > b - this.Td
        ? (this.cancel(),
          (this.Td = b),
          (this.ma = this.O.delay(this.og, a)),
          !0)
        : !1;
    };
    gi.prototype.yc = function() {
      this.ma = -1;
      this.Td = 0;
      this.Ha = !0;
      this.Kg();
      this.Ha = !1;
    };
    gi.prototype.cancel = function() {
      this.isPending() && (this.O.cancel(this.ma), (this.ma = -1));
    };
    var hi = Date.now();
    function ii(a, b) {
      var c = a.split(",");
      D(0 < c.length, "sizes has to have at least one size");
      var d = [];
      c.forEach(function(a) {
        a = a.replace(/\s+/g, " ").trim();
        if (0 != a.length) {
          var c = a.charAt(a.length - 1),
            e,
            k = !1;
          if (")" == c) {
            k = !0;
            var l = 1;
            for (e = a.length - 2; 0 <= e; e--) {
              var m = a.charAt(e);
              "(" == m ? l-- : ")" == m && l++;
              if (0 == l) break;
            }
            var n = e - 1;
            if (0 < e)
              for (
                e--;
                0 <= e &&
                ((m = a.charAt(e)),
                "%" == m ||
                  "-" == m ||
                  "_" == m ||
                  ("a" <= m && "z" >= m) ||
                  ("A" <= m && "Z" >= m) ||
                  ("0" <= m && "9" >= m));
                e--
              );
            D(e < n, 'Invalid CSS function in "%s"', a);
          } else
            for (
              e = a.length - 2;
              0 <= e &&
              ((m = a.charAt(e)),
              "%" == m ||
                "." == m ||
                ("a" <= m && "z" >= m) ||
                ("A" <= m && "Z" >= m) ||
                ("0" <= m && "9" >= m));
              e--
            );
          if (0 <= e) {
            var r = a.substring(0, e + 1).trim();
            var t = a.substring(e + 1).trim();
          } else (t = a), (r = void 0);
          d.push({ mediaQuery: r, size: k ? t : b ? he(t) : ge(t) });
        }
      });
      return new ji(d);
    }
    function ji(a) {
      D(0 < a.length, "SizeList must have at least one option");
      this.Bh = a;
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        b < a.length - 1
          ? D(
              c.mediaQuery,
              "All options except for the last must have a media condition"
            )
          : D(!c.mediaQuery, "The last option must not have a media condition");
      }
    }
    ji.prototype.select = function(a) {
      for (var b = this.Bh, c = b.length - 1, d = 0; d < c; d++) {
        var e = b[d];
        if (a.matchMedia(e.mediaQuery).matches) return e.size;
      }
      return b[c].size;
    };
    var ki = /nochunking=1/.test(self.location.hash),
      li = Promise.resolve();
    function mi(a) {
      T(a, "chunk", ni);
      return od(a, "chunk");
    }
    function oi(a, b, c) {
      if (ki) li.then(b);
      else {
        var d = mi(a.documentElement || a);
        d.runForStartup(b);
        c &&
          d.runForStartup(function() {
            d.ze = !0;
          });
      }
    }
    function pi(a, b) {
      ki ? li.then(b) : mi(a).run(b, 10);
    }
    function qi(a) {
      this.state = "not_run";
      this.od = a;
    }
    function ri(a, b) {
      if ("run" != a.state) {
        a.state = "run";
        try {
          a.od(b);
        } catch (c) {
          throw (a.Bf(), c);
        }
      }
    }
    qi.prototype.Mh = function() {
      return this.od.displayName || this.od.name;
    };
    qi.prototype.Bf = function() {};
    qi.prototype.kf = function() {
      return !1;
    };
    qi.prototype.cg = function() {
      return !1;
    };
    function si(a, b, c) {
      qi.call(this, a);
      this.Pe = c;
    }
    p(si, qi);
    si.prototype.Bf = function() {
      ef(self.document);
    };
    si.prototype.kf = function() {
      return this.Pe.ampdoc.isVisible();
    };
    si.prototype.cg = function() {
      return this.Pe.Re;
    };
    function ni(a) {
      var b = this;
      this.ampdoc = a;
      this.o = a.win;
      this.J = new oh();
      this.Be = this.We.bind(this);
      this.jb = 0;
      this.Xg = Q(this.o, "macro-after-long-task");
      this.Fc = !1;
      this.ze = this.o.document.documentElement.hasAttribute(
        "i-amphtml-no-boilerplate"
      );
      this.o.addEventListener("message", function(a) {
        "amp-macro-task" == a.data && b.We(null);
      });
      this.Re = !1;
      td(R(a), "viewer").then(function() {
        b.Re = !0;
      });
      a.onVisibilityChanged(function() {
        a.isVisible() && b.ra();
      });
    }
    ni.prototype.run = function(a, b) {
      a = new qi(a);
      this.J.enqueue(a, b);
      this.ra();
    };
    ni.prototype.runForStartup = function(a) {
      a = new si(a, this.o, this);
      this.J.enqueue(a, Number.POSITIVE_INFINITY);
      this.ra();
    };
    function ti(a, b) {
      for (var c = a.J.peek(); c && "not_run" !== c.state; )
        a.J.dequeue(), (c = a.J.peek());
      c && b && a.J.dequeue();
      return c;
    }
    ni.prototype.We = function(a) {
      var b = this,
        c = ti(this, !0);
      if (!c) return (this.Fc = !1), (this.jb = 0), !1;
      try {
        var d = Date.now();
        ri(c, a);
      } finally {
        li.then()
          .then()
          .then()
          .then()
          .then()
          .then()
          .then()
          .then()
          .then(function() {
            b.Fc = !1;
            b.jb += Date.now() - d;
            b.ra();
          });
      }
      return !0;
    };
    function ui(a) {
      a.Xg && a.ze && 5 < a.jb
        ? ((a.jb = 0), vi(a))
        : li.then(function() {
            a.Be(null);
          });
    }
    ni.prototype.ra = function() {
      if (!this.Fc) {
        var a = ti(this);
        a &&
          (a.kf()
            ? ((this.Fc = !0), ui(this))
            : a.cg() && this.o.requestIdleCallback
            ? wi(this.o, this.Be)
            : vi(this));
      }
    };
    function vi(a) {
      a.o.postMessage("amp-macro-task", "*");
    }
    function wi(a, b) {
      function c(g) {
        if (g.timeRemaining() < d) {
          var h = 2e3 - (Date.now() - e);
          0 >= h || g.didTimeout
            ? b(g)
            : a.requestIdleCallback(c, { timeout: h });
        } else b(g);
      }
      var d = 15,
        e = Date.now();
      a.requestIdleCallback(c, { timeout: 2e3 });
    }
    var xi = [
        '<div class="i-amphtml-loading-container i-amphtml-fill-content amp-hidden"></div>'
      ],
      yi;
    function zi(a, b) {
      function c(a) {
        return d.call(this, a) || this;
      }
      var d = Ai(a);
      p(c, d);
      c.prototype.elementName = function() {
        return b;
      };
      return c;
    }
    function Ai(a) {
      function b(a) {
        a = c.call(this, a) || this;
        a.createdCallback();
        return a;
      }
      if (a.__AMP_BASE_CE_CLASS) return a.__AMP_BASE_CE_CLASS;
      var c = a.HTMLElement;
      p(b, c);
      b.prototype.createdCallback = function() {
        this.ec = this.Ke = !1;
        this.ed = null;
        this.readyState = "loading";
        this.everAttached = !1;
        this.w = this.B = null;
        this.layout_ = "nodisplay";
        this.rf = this.layoutWidth_ = -1;
        this.da = 0;
        this.yb = this.Qa = this.Dd = !1;
        this.bc = this.Ic = this.nc = void 0;
        this.warnOnMissingOverflow = !0;
        this.kc = this.Nd = this.sizerElement = void 0;
        this.Od = this.Ea = null;
        this.layoutScheduleTime = this.fa = void 0;
        var b = this,
          c =
            a.__AMP_EXTENDED_ELEMENTS &&
            a.__AMP_EXTENDED_ELEMENTS[this.elementName()];
        this.implementation_ = new c(this);
        this.Za = 1;
        this.ag = 0;
        this.sb = this.Ca = void 0;
        this.F = new di();
        var g = nd(a);
        this.Df = g && g.isPerformanceTrackingOn();
        this.Ld = null;
        b.__AMP_UPG_RES &&
          (b.__AMP_UPG_RES(b), delete b.__AMP_UPG_RES, delete b.__AMP_UPG_PRM);
      };
      b.prototype.elementName = function() {};
      b.prototype.signals = function() {
        return this.F;
      };
      b.prototype.getAmpDoc = function() {
        return this.B;
      };
      b.prototype.getResources = function() {
        return this.w;
      };
      b.prototype.isUpgraded = function() {
        return 2 == this.Za;
      };
      b.prototype.whenUpgraded = function() {
        return this.F.whenSignal("upgraded");
      };
      b.prototype.upgrade = function(a) {
        this.sb ||
          1 != this.Za ||
          ((this.implementation_ = new a(this)),
          this.everAttached && this.Yf());
      };
      b.prototype.getUpgradeDelayMs = function() {
        return this.ag;
      };
      b.prototype.jd = function(b, c) {
        this.ag = a.Date.now() - c;
        this.Za = 2;
        this.implementation_ = b;
        this.classList.remove("amp-unresolved");
        this.classList.remove("i-amphtml-unresolved");
        this.implementation_.createdCallback();
        this.kg();
        this.implementation_.layout_ = this.layout_;
        this.implementation_.layoutWidth_ = this.layoutWidth_;
        this.implementation_.firstAttachedCallback();
        this.Da("amp:attached");
        this.getResources().upgraded(this);
        this.F.signal("upgraded");
      };
      b.prototype.kg = function() {
        "nodisplay" == this.layout_ ||
          this.implementation_.isLayoutSupported(this.layout_) ||
          (D(
            this.getAttribute("layout"),
            "The element did not specify a layout attribute. Check https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/control_layout and the respective element documentation for details."
          ),
          D(!1, "Layout not supported: " + this.layout_));
      };
      b.prototype.isBuilt = function() {
        return this.Ke;
      };
      b.prototype.whenBuilt = function() {
        return this.F.whenSignal("built");
      };
      b.prototype.getLayoutPriority = function() {
        this.isUpgraded();
        return this.implementation_.getLayoutPriority();
      };
      b.prototype.getDefaultActionAlias = function() {
        this.isUpgraded();
        return this.implementation_.getDefaultActionAlias();
      };
      b.prototype.build = function() {
        var a = this;
        this.isUpgraded();
        return this.ed
          ? this.ed
          : (this.ed = new Promise(function(b, c) {
              var d = a.Dg();
              d
                ? zd(a, "consentPolicyManager", "amp-consent")
                    .then(function(a) {
                      return a ? a.whenPolicyUnblock(d) : !0;
                    })
                    .then(function(d) {
                      d
                        ? b(a.implementation_.buildCallback())
                        : c(Error("BLOCK_BY_CONSENT"));
                    })
                : b(a.implementation_.buildCallback());
            }).then(
              function() {
                a.preconnect(!1);
                a.Ke = !0;
                a.classList.remove("i-amphtml-notbuilt");
                a.classList.remove("amp-notbuilt");
                a.F.signal("built");
                a.Qa && a.Zf(!0);
                a.Ca && V(a.ownerDocument.defaultView).delay(a.wg.bind(a), 1);
                if (!a.getPlaceholder()) {
                  var b = a.createPlaceholder();
                  b && a.appendChild(b);
                }
              },
              function(b) {
                a.F.rejectSignal("built", b);
                tf(b) || rf(b, a);
                throw b;
              }
            ));
      };
      b.prototype.preconnect = function(a) {
        var b = this;
        a
          ? this.implementation_.preconnectCallback(a)
          : oi(self.document, function() {
              var c = b.tagName;
              b.ownerDocument
                ? b.ownerDocument.defaultView
                  ? b.implementation_.preconnectCallback(a)
                  : C().error(c, "preconnect without defaultView")
                : C().error(c, "preconnect without ownerDocument");
            });
      };
      b.prototype.isAlwaysFixed = function() {
        return this.implementation_.isAlwaysFixed();
      };
      b.prototype.updateLayoutBox = function(a, b) {
        var c = this;
        this.layoutWidth_ = a.width;
        this.rf = a.height;
        this.isUpgraded() &&
          (this.implementation_.layoutWidth_ = this.layoutWidth_);
        if (this.isBuilt())
          try {
            if ((this.implementation_.onLayoutMeasure(), b))
              this.implementation_.onMeasureChanged();
          } catch (h) {
            rf(h, this);
          }
        this.gc() &&
          (this.Qa
            ? this.toggleLoading(!0)
            : 1e3 > a.top &&
              0 <= a.top &&
              this.rc(function() {
                return c.Ff();
              }));
      };
      b.prototype.cf = function() {
        void 0 !== this.sizerElement ||
          ("responsive" !== this.layout_ && "intrinsic" !== this.layout_) ||
          (this.sizerElement = this.querySelector("i-amphtml-sizer"));
        return this.sizerElement || null;
      };
      b.prototype.rh = function(a) {
        if ("responsive" === this.layout_) X(a, "paddingTop", "0");
        else if ("intrinsic" === this.layout_) {
          var b = a.querySelector(".i-amphtml-intrinsic-sizer");
          b && b.setAttribute("src", "");
        }
      };
      b.prototype.applySizesAndMediaQuery = function() {
        void 0 === this.nc && (this.nc = this.getAttribute("media") || null);
        if (this.nc) {
          var a = this.ownerDocument.defaultView;
          this.classList.toggle(
            "i-amphtml-hidden-by-media-query",
            !a.matchMedia(this.nc).matches
          );
        }
        if (void 0 === this.Ic) {
          var b = this.getAttribute("sizes");
          this.Ic = b ? ii(b) : null;
        }
        this.Ic &&
          X(this, "width", this.Ic.select(this.ownerDocument.defaultView));
        void 0 === this.bc &&
          "responsive" === this.layout_ &&
          (this.bc = (b = this.getAttribute("heights")) ? ii(b, !0) : null);
        this.bc &&
          (b = this.cf()) &&
          X(b, "paddingTop", this.bc.select(this.ownerDocument.defaultView));
      };
      b.prototype.changeSize = function(a, b, c) {
        var d = this.cf();
        d &&
          ((this.sizerElement = null),
          this.rh(d),
          this.rc(function() {
            d && d.parentElement && d.parentElement.removeChild(d);
          }));
        void 0 !== a && X(this, "height", a, "px");
        void 0 !== b && X(this, "width", b, "px");
        c &&
          (null != c.top && X(this, "marginTop", c.top, "px"),
          null != c.right && X(this, "marginRight", c.right, "px"),
          null != c.bottom && X(this, "marginBottom", c.bottom, "px"),
          null != c.left && X(this, "marginLeft", c.left, "px"));
        this.Ng() && this.Ah();
        this.dispatchCustomEvent("amp:size-changed");
      };
      b.prototype.connectedCallback = function() {
        void 0 === yi &&
          (yi = "content" in self.document.createElement("template"));
        yi || void 0 !== this.sb || (this.sb = !!xb(this, "template"));
        if (!this.sb && !this.ec && sb(this)) {
          this.ec = !0;
          this.everAttached ||
            (this.classList.add("i-amphtml-element"),
            this.classList.add("i-amphtml-notbuilt"),
            this.classList.add("amp-notbuilt"));
          if (!this.B) {
            var a = this.ownerDocument.defaultView,
              b = Ed(a).getAmpDoc(this);
            this.B = b;
            var c = this.tagName.toLowerCase();
            this.implementation_ instanceof Xh &&
              !b.declaresExtension(c) &&
              Gd(a).installExtensionForDoc(b, c);
          }
          this.w || (this.w = Jd(this.B));
          this.getResources().add(this);
          if (this.everAttached) {
            var h = this.reconstructWhenReparented();
            h && this.Jf();
            this.isUpgraded() &&
              (h && this.getResources().upgraded(this),
              this.Da("amp:attached"));
          } else {
            this.everAttached = !0;
            try {
              var k = this.getAttribute("i-amphtml-layout");
              if (k) {
                var l = de(k);
                ("responsive" != l && "intrinsic" != l) ||
                !this.firstElementChild
                  ? "nodisplay" == l &&
                    (Xd(this, !1), (this.style.display = ""))
                  : (this.sizerElement =
                      this.querySelector("i-amphtml-sizer") || void 0);
                var m = l;
              } else {
                var n = this.getAttribute("layout"),
                  r = this.getAttribute("width"),
                  t = this.getAttribute("height"),
                  v = this.getAttribute("sizes"),
                  y = this.getAttribute("heights"),
                  x = n ? de(n) : null;
                D(void 0 !== x, "Unknown layout: %s", n);
                var A = r && "auto" != r ? fe(r) : r;
                D(void 0 !== A, "Invalid width value: %s", r);
                var J = t && "fluid" != t ? fe(t) : t;
                D(void 0 !== J, "Invalid height value: %s", t);
                var N;
                if (
                  !(N = (x && "fixed" != x && "fixed-height" != x) || (A && J))
                ) {
                  var Da = this.tagName;
                  Da = Da.toUpperCase();
                  N = void 0 === ae[Da];
                }
                if (N) {
                  var F = A;
                  var B = J;
                } else {
                  var ba = this.tagName.toUpperCase();
                  if (!ae[ba]) {
                    var Aa = this.ownerDocument,
                      Ba = ba.replace(/^AMP\-/, ""),
                      cb = Aa.createElement(Ba);
                    cb.controls = !0;
                    Wd(cb, { position: "absolute", visibility: "hidden" });
                    Aa.body.appendChild(cb);
                    ae[ba] = {
                      width: (cb.offsetWidth || 1) + "px",
                      height: (cb.offsetHeight || 1) + "px"
                    };
                    Aa.body.removeChild(cb);
                  }
                  var Og = ae[ba];
                  F = A || "fixed-height" == x ? A : Og.width;
                  B = J || Og.height;
                }
                var H = x
                  ? x
                  : F || B
                  ? "fluid" == B
                    ? "fluid"
                    : !B || (F && "auto" != F)
                    ? B && F && (v || y)
                      ? "responsive"
                      : "fixed"
                    : "fixed-height"
                  : "container";
                ("fixed" != H &&
                  "fixed-height" != H &&
                  "responsive" != H &&
                  "intrinsic" != H) ||
                  D(B, "Expected height to be available: %s", t);
                "fixed-height" == H &&
                  D(
                    !F || "auto" == F,
                    'Expected width to be either absent or equal "auto" for fixed-height layout: %s',
                    r
                  );
                ("fixed" != H && "responsive" != H && "intrinsic" != H) ||
                  D(
                    F && "auto" != F,
                    'Expected width to be available and not equal to "auto": %s',
                    r
                  );
                "responsive" == H || "intrinsic" == H
                  ? D(
                      ie(F) == ie(B),
                      "Length units should be the same for width and height: %s, %s",
                      r,
                      t
                    )
                  : D(
                      null === y,
                      'Unexpected "heights" attribute for none-responsive layout'
                    );
                this.classList.add("i-amphtml-layout-" + H);
                ee(H) && this.classList.add("i-amphtml-layout-size-defined");
                if ("nodisplay" == H) Xd(this, !1), (this.style.display = "");
                else if ("fixed" == H) Wd(this, { width: F, height: B });
                else if ("fixed-height" == H) X(this, "height", B);
                else if ("responsive" == H) {
                  var Pd = this.ownerDocument.createElement("i-amphtml-sizer");
                  Wd(Pd, { paddingTop: (je(B) / je(F)) * 100 + "%" });
                  this.insertBefore(Pd, this.firstChild);
                  this.sizerElement = Pd;
                } else if ("intrinsic" == H) {
                  var Qd = Nd(this)(Zd);
                  Qd.firstElementChild.setAttribute(
                    "src",
                    'data:image/svg+xml;charset=utf-8,<svg height="' +
                      B +
                      '" width="' +
                      F +
                      '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>'
                  );
                  this.insertBefore(Qd, this.firstChild);
                  this.sizerElement = Qd;
                } else
                  "fill" != H &&
                    "container" != H &&
                    ("flex-item" == H
                      ? (F && X(this, "width", F), B && X(this, "height", B))
                      : "fluid" == H &&
                        (this.classList.add("i-amphtml-layout-awaiting-size"),
                        F && X(this, "width", F),
                        X(this, "height", 0)));
                this.setAttribute("i-amphtml-layout", H);
                m = H;
              }
              this.layout_ = m;
            } catch (nl) {
              rf(nl, this);
            }
            this.implementation_ instanceof Xh || this.Yf();
            this.isUpgraded() ||
              (this.classList.add("amp-unresolved"),
              this.classList.add("i-amphtml-unresolved"),
              this.Da("amp:stubbed"));
          }
        }
      };
      b.prototype.Ng = function() {
        return this.classList.contains("i-amphtml-layout-awaiting-size");
      };
      b.prototype.Ah = function() {
        this.classList.remove("i-amphtml-layout-awaiting-size");
      };
      b.prototype.attachedCallback = function() {
        this.connectedCallback();
      };
      b.prototype.Yf = function() {
        var b = this,
          c = this.implementation_;
        if (1 == this.Za) {
          this.Za = 4;
          var g = a.Date.now(),
            h = c.upgradeCallback();
          h
            ? "function" == typeof h.then
              ? h
                  .then(function(a) {
                    b.jd(a || c, g);
                  })
                  .catch(function(a) {
                    b.Za = 3;
                    eb(a);
                  })
              : this.jd(h, g)
            : this.jd(c, g);
        }
      };
      b.prototype.disconnectedCallback = function() {
        this.disconnect(!1);
      };
      b.prototype.detachedCallback = function() {
        this.disconnectedCallback();
      };
      b.prototype.disconnect = function(a) {
        this.sb ||
          !this.ec ||
          (!a && sb(this)) ||
          (a && this.classList.remove("i-amphtml-element"),
          (this.ec = !1),
          this.getResources().remove(this),
          this.implementation_.detachedCallback());
      };
      b.prototype.dispatchCustomEvent = function(a, b) {
        b = b || {};
        var c = this.ownerDocument.createEvent("Event");
        c.data = b;
        c.initEvent(a, !0, !0);
        this.dispatchEvent(c);
      };
      b.prototype.Da = function() {};
      b.prototype.prerenderAllowed = function() {
        return this.implementation_.prerenderAllowed();
      };
      b.prototype.isBuildRenderBlocking = function() {
        return this.implementation_.isBuildRenderBlocking();
      };
      b.prototype.createPlaceholder = function() {
        return this.implementation_.createPlaceholderCallback();
      };
      b.prototype.createLoaderLogo = function() {
        return this.implementation_.createLoaderLogoCallback();
      };
      b.prototype.renderOutsideViewport = function() {
        return this.implementation_.renderOutsideViewport();
      };
      b.prototype.idleRenderOutsideViewport = function() {
        return this.implementation_.idleRenderOutsideViewport();
      };
      b.prototype.getLayoutBox = function() {
        return this.nb().getLayoutBox();
      };
      b.prototype.getPageLayoutBox = function() {
        return this.nb().getPageLayoutBox();
      };
      b.prototype.getOwner = function() {
        return this.nb().getOwner();
      };
      b.prototype.getIntersectionChangeEntry = function() {
        var a = this.implementation_.getIntersectionElementLayoutBox(),
          b = this.getOwner(),
          c = this.implementation_.getViewport().getRect(),
          h = b && b.getLayoutBox(),
          k = Xb(a, h, c) || M(0, 0, 0, 0);
        b = k.width * k.height;
        var l = a.width * a.height;
        b = 0 === l ? 0 : b / l;
        if ((l = c))
          (k = Zb(k, -c.left, -c.top)),
            (a = Zb(a, -c.left, -c.top)),
            (l = Zb(l, -c.left, -c.top));
        return {
          time:
            "undefined" !== typeof performance && performance.now
              ? performance.now()
              : Date.now() - hi,
          rootBounds: l,
          boundingClientRect: a,
          intersectionRect: k,
          intersectionRatio: b
        };
      };
      b.prototype.nb = function() {
        return this.getResources().getResourceForElement(this);
      };
      b.prototype.getResourceId = function() {
        return this.nb().getId();
      };
      b.prototype.isRelayoutNeeded = function() {
        return this.implementation_.isRelayoutNeeded();
      };
      b.prototype.getImpl = function(a) {
        var b = this,
          c = (a = void 0 === a ? !0 : a)
            ? this.whenBuilt()
            : this.whenUpgraded();
        return c.then(function() {
          return b.implementation_;
        });
      };
      b.prototype.getLayout = function() {
        return this.layout_;
      };
      b.prototype.layoutCallback = function() {
        var a = this;
        this.isBuilt();
        this.Da("amp:load:start");
        var b = 0 == this.da;
        this.F.reset("unload");
        b && this.F.signal("load-start");
        this.Df && this.bf().startLayout();
        var c = K(function() {
          return a.implementation_.layoutCallback();
        });
        this.preconnect(!0);
        this.classList.add("i-amphtml-layout");
        return c.then(
          function() {
            b && a.F.signal("load-end");
            a.readyState = "complete";
            a.da++;
            a.toggleLoading(!1, { cleanup: !0 });
            a.Dd ||
              (a.implementation_.firstLayoutCompleted(),
              (a.Dd = !0),
              a.Da("amp:load:end"));
          },
          function(c) {
            b && a.F.rejectSignal("load-end", c);
            a.da++;
            a.toggleLoading(!1, { cleanup: !0 });
            throw c;
          }
        );
      };
      b.prototype.isInViewport = function() {
        return this.Qa;
      };
      b.prototype.viewportCallback = function(a) {
        var b = this;
        a != this.Qa &&
          this.ownerDocument &&
          this.ownerDocument.defaultView &&
          ((this.Qa = a),
          0 == this.da &&
            (a
              ? V(this.ownerDocument.defaultView).delay(function() {
                  b.Qa &&
                    b.ownerDocument &&
                    b.ownerDocument.defaultView &&
                    b.toggleLoading(!0);
                }, 100)
              : this.toggleLoading(!1)),
          this.isBuilt() && this.Zf(a));
      };
      b.prototype.Zf = function(a) {
        this.implementation_.inViewport_ = a;
        this.implementation_.viewportCallback(a);
        a && this.Df && this.bf().enterViewport();
      };
      b.prototype.isPaused = function() {
        return this.yb;
      };
      b.prototype.pauseCallback = function() {
        this.yb ||
          ((this.yb = !0),
          this.viewportCallback(!1),
          this.isBuilt() && this.implementation_.pauseCallback());
      };
      b.prototype.resumeCallback = function() {
        this.yb &&
          ((this.yb = !1),
          this.isBuilt() && this.implementation_.resumeCallback());
      };
      b.prototype.unlayoutCallback = function() {
        if (!this.isBuilt()) return !1;
        this.F.signal("unload");
        var a = this.implementation_.unlayoutCallback();
        a && this.Jf();
        return a;
      };
      b.prototype.Jf = function() {
        this.da = 0;
        this.Dd = !1;
        this.F.reset("render-start");
        this.F.reset("load-start");
        this.F.reset("load-end");
        this.F.reset("ini-load");
      };
      b.prototype.unlayoutOnPause = function() {
        return this.implementation_.unlayoutOnPause();
      };
      b.prototype.reconstructWhenReparented = function() {
        return this.implementation_.reconstructWhenReparented();
      };
      b.prototype.collapse = function() {
        this.implementation_.collapse();
      };
      b.prototype.collapsedCallback = function(a) {
        this.implementation_.collapsedCallback(a);
      };
      b.prototype.expand = function() {
        this.implementation_.expand();
      };
      b.prototype.expandedCallback = function(a) {
        this.implementation_.expandedCallback(a);
      };
      b.prototype.mutatedAttributesCallback = function(a) {
        this.implementation_.mutatedAttributesCallback(a);
      };
      b.prototype.enqueAction = function(a) {
        this.isBuilt()
          ? this.Xe(a, !1)
          : (void 0 === this.Ca && (this.Ca = []), this.Ca.push(a));
      };
      b.prototype.wg = function() {
        var a = this;
        if (this.Ca) {
          var b = this.Ca;
          this.Ca = null;
          b.forEach(function(b) {
            a.Xe(b, !0);
          });
        }
      };
      b.prototype.Xe = function(a, b) {
        try {
          this.implementation_.executeAction(a, b);
        } catch (g) {
          eb("Action execution failed:", g, a.node.tagName, a.method);
        }
      };
      b.prototype.Dg = function() {
        var a = this.getAttribute("data-block-on-consent");
        if (null === a)
          if (
            ((a = this.getAmpDoc()),
            (a = Fd(a).metaTags["amp-consent-blocking"])
              ? "string" !== typeof a
                ? (z().error(
                    "CONSENT",
                    "Invalid amp-consent-blocking value, ignore meta tag"
                  ),
                  (a = !1))
                : ((a = a
                    .toUpperCase()
                    .replace(/\s/g, "")
                    .split(",")),
                  (a = a.includes(this.tagName) ? !0 : !1))
              : (a = !1),
            a)
          )
            (a = "default"), this.setAttribute("data-block-on-consent", a);
          else return null;
        return "" == a || "default" == a
          ? this.implementation_.getConsentPolicy()
          : a;
      };
      b.prototype.getRealChildNodes = function() {
        return Bb(this, function(a) {
          return !Bi(a);
        });
      };
      b.prototype.getRealChildren = function() {
        return zb(this, function(a) {
          return !Bi(a);
        });
      };
      b.prototype.getPlaceholder = function() {
        return Ab(this, function(a) {
          return a.hasAttribute("placeholder") && !("placeholder" in a);
        });
      };
      b.prototype.togglePlaceholder = function(a) {
        if (a) {
          var b = this.getPlaceholder();
          b && b.classList.remove("amp-hidden");
        } else {
          /^[\w-]+$/.test("placeholder");
          var c = (void 0 !== lb
          ? lb
          : (lb = mb(this)))
            ? this.querySelectorAll(
                "> [placeholder]".replace(/^|,/g, "$&:scope ")
              )
            : Eb(this, "> [placeholder]");
          for (b = 0; b < c.length; b++)
            "placeholder" in c[b] || c[b].classList.add("amp-hidden");
        }
      };
      b.prototype.getFallback = function() {
        return Cb(this, "fallback");
      };
      b.prototype.toggleFallback = function(a) {
        var b = this.nb().getState();
        if (!a || (0 != b && 1 != b && 2 != b))
          if ((this.classList.toggle("amp-notsupported", a), 1 == a)) {
            var c = this.getFallback();
            c && od(this.getAmpDoc(), "owners").scheduleLayout(this, c);
          }
      };
      b.prototype.renderStarted = function() {
        this.F.signal("render-start");
        this.togglePlaceholder(!1);
        this.toggleLoading(!1);
      };
      b.prototype.gc = function() {
        if (this.isInA4A()) return !1;
        void 0 === this.Nd && (this.Nd = this.hasAttribute("noloading"));
        var a;
        (a = 0 < this.da || 0 >= this.layoutWidth_ || this.Nd) ||
          ((a = this.tagName.toUpperCase()),
          (a = !(be[a] || ("AMP-VIDEO" == a ? 0 : ce.test(a)))));
        return a || Bi(this) || !ee(this.layout_) ? !1 : !0;
      };
      b.prototype.isInA4A = function() {
        return (
          (this.B && this.B.win != this.ownerDocument.defaultView) ||
          "inabox" == u().runtime
        );
      };
      b.prototype.Ff = function() {
        if (this.gc() && !this.Ea) {
          var a = Nd(this.ownerDocument)(xi),
            b = fi(this.getAmpDoc(), this, this.layoutWidth_, this.rf);
          a.appendChild(b);
          this.appendChild(a);
          this.Ea = a;
          this.Od = b;
        }
      };
      b.prototype.toggleLoading = function(a, b) {
        var c = this,
          d = b && b.cleanup,
          e = b && b.force;
        if (
          !a ||
          this.implementation_.isLoadingReused() ||
          !(0 < this.da || this.F.get("render-start"))
        )
          if (a !== this.kc || b)
            if ((this.kc = a) || this.Ea)
              !a || e || this.gc()
                ? this.rc(function() {
                    var a = c.kc;
                    !a || e || c.gc() || (a = !1);
                    a && c.Ff();
                    if (
                      c.Ea &&
                      (c.Ea.classList.toggle("amp-hidden", !a),
                      c.Od.classList.toggle("amp-active", a),
                      !a && d && !c.implementation_.isLoadingReused())
                    ) {
                      var b = c.Ea;
                      c.Ea = null;
                      c.Od = null;
                      c.rc(function() {
                        var a = b;
                        a.parentElement && a.parentElement.removeChild(a);
                      });
                    }
                  })
                : (this.kc = !1);
      };
      b.prototype.bf = function() {
        this.Ld ||
          (this.Ld = new Zh(
            this.ownerDocument.defaultView,
            this.getLayoutPriority()
          ));
        return this.Ld;
      };
      b.prototype.getOverflowElement = function() {
        void 0 === this.fa &&
          (this.fa = Cb(this, "overflow")) &&
          (this.fa.hasAttribute("tabindex") ||
            this.fa.setAttribute("tabindex", "0"),
          this.fa.hasAttribute("role") ||
            this.fa.setAttribute("role", "button"));
        return this.fa;
      };
      b.prototype.overflowCallback = function(a, b, c) {
        var d = this;
        this.getOverflowElement();
        this.fa
          ? (this.fa.classList.toggle("amp-visible", a),
            (this.fa.onclick = a
              ? function() {
                  var a = d.getResources();
                  a.changeSize(d, b, c);
                  a.mutateElement(d, function() {
                    d.overflowCallback(!1, b, c);
                  });
                }
              : null))
          : a &&
            this.warnOnMissingOverflow &&
            z().warn(
              "CustomElement",
              "Cannot resize element and overflow is not available",
              this
            );
      };
      b.prototype.rc = function(a) {
        this.w ? this.getResources().mutateElement(this, a) : a();
      };
      a.__AMP_BASE_CE_CLASS = b;
      return a.__AMP_BASE_CE_CLASS;
    }
    function Bi(a) {
      var b = "string" == typeof a ? a : a.tagName;
      return (b && L(b.toLowerCase(), "i-")) ||
        (a.tagName &&
          (a.hasAttribute("placeholder") ||
            a.hasAttribute("fallback") ||
            a.hasAttribute("overflow")))
        ? !0
        : !1;
    }
    function Ci(a) {
      a.__AMP_EXTENDED_ELEMENTS || (a.__AMP_EXTENDED_ELEMENTS = {});
      return a.__AMP_EXTENDED_ELEMENTS;
    }
    function Di(a, b) {
      try {
        a.upgrade(b);
      } catch (c) {
        rf(c, a);
      }
    }
    function Ei(a) {
      Cd(a.getHeadNode()).forEach(function(b) {
        a.declareExtension(b);
        Fi(a.win, b);
      });
    }
    function Fi(a, b) {
      Ci(a)[b] || Gi(a, b, Xh);
    }
    function Gi(a, b, c) {
      Ci(a)[b] = c;
      var d = zi(a, b);
      a.customElements.define(b, d);
    }
    var Hi = "alt title referrerpolicy aria-label aria-describedby aria-labelledby srcset src sizes".split(
      " "
    );
    function Ii(a) {
      Ie.call(this, a);
      this.Gf = this.Rb = !0;
      this.Oc = this.Pc = this.I = null;
      this.Qf = 0;
    }
    p(Ii, Ie);
    f = Ii.prototype;
    f.mutatedAttributesCallback = function(a) {
      if (this.I) {
        var b = Hi.filter(function(b) {
          return void 0 !== a[b];
        });
        a.src &&
          !a.srcset &&
          this.element.hasAttribute("srcset") &&
          (this.element.removeAttribute("srcset"),
          b.push("srcset"),
          this.user().warn(
            "amp-img",
            "Removed [srcset] since [src] was mutated. Recommend adding a [srcset] binding to support responsive images.",
            this.element
          ));
        this.propagateAttributes(b, this.I, !0);
        Vh(this.I);
      }
    };
    f.onMeasureChanged = function() {
      Ji(this, !1);
    };
    f.preconnectCallback = function(a) {
      var b = this.element.getAttribute("src");
      b
        ? this.preconnect.url(b, a)
        : (b = this.element.getAttribute("srcset")) &&
          (b = /\S+/.exec(b)) &&
          this.preconnect.url(b[0], a);
    };
    f.firstAttachedCallback = function() {
      this.element.hasAttribute("noprerender") && (this.Gf = !1);
    };
    f.isLayoutSupported = function(a) {
      return ee(a);
    };
    f.dc = function() {
      if (!this.I) {
        this.Rb = !this.element.hasAttribute("fallback");
        this.element.hasAttribute("i-amphtml-ssr") &&
          (this.I = this.element.querySelector("img"));
        this.I = this.I || new Image();
        this.I.setAttribute("decoding", "async");
        this.element.id && this.I.setAttribute("amp-img-id", this.element.id);
        "img" == this.element.getAttribute("role") &&
          (this.element.removeAttribute("role"),
          this.user().error(
            "amp-img",
            "Setting role=img on amp-img elements breaks screen readers please just set alt or ARIA attributes, they will be correctly propagated for the underlying <img> element."
          ));
        Ji(this, !0);
        this.propagateAttributes(Hi, this.I);
        Vh(this.I);
        this.applyFillContent(this.I, !0);
        var a = this.element,
          b = this.I;
        a.hasAttribute("object-fit") &&
          X(b, "object-fit", a.getAttribute("object-fit"));
        a.hasAttribute("object-position") &&
          X(b, "object-position", a.getAttribute("object-position"));
        this.element.appendChild(this.I);
      }
    };
    function Ji(a, b) {
      if (a.I && !a.element.getAttribute("sizes")) {
        var c = a.element.getAttribute("srcset");
        if (
          c &&
          !/[0-9]+x(?:,|$)/.test(c) &&
          ((c = a.getLayoutWidth()), Ki(a, c))
        ) {
          var d = a.getViewport().getWidth(),
            e = "(max-width: " + d + "px) " + c + "px, ",
            g = c + "px";
          "fixed" !== a.getLayout() &&
            (g = Math.max(Math.round((100 * c) / d), 100) + "vw");
          var h = e + g;
          b
            ? a.I.setAttribute("sizes", h)
            : a.mutateElement(function() {
                a.I.setAttribute("sizes", h);
              });
          a.Qf = c;
        }
      }
    }
    function Ki(a, b) {
      return a.I.hasAttribute("sizes") ? b > a.Qf : !0;
    }
    f.prerenderAllowed = function() {
      return this.Gf;
    };
    f.reconstructWhenReparented = function() {
      return !1;
    };
    f.layoutCallback = function() {
      var a = this;
      this.dc();
      var b = this.I;
      this.Pc = ne(b, "load", function() {
        return Li(a);
      });
      this.Oc = ne(b, "error", function() {
        return Mi(a);
      });
      return 0 >= this.getLayoutWidth()
        ? Promise.resolve()
        : this.loadPromise(b);
    };
    f.unlayoutCallback = function() {
      this.Oc && (this.Oc(), (this.Oc = null));
      this.Pc && (this.Pc(), (this.Pc = null));
      return !0;
    };
    f.firstLayoutCompleted = function() {
      var a = this.getPlaceholder();
      a &&
      a.classList.contains("i-amphtml-blurry-placeholder") &&
      Q(this.win, "blurry-placeholder")
        ? Ud(a, { opacity: 0 })
        : this.togglePlaceholder(!1);
    };
    function Li(a) {
      !a.Rb &&
        a.I.classList.contains("i-amphtml-ghost") &&
        a.getVsync().mutate(function() {
          a.I.classList.remove("i-amphtml-ghost");
          a.toggleFallback(!1);
        });
    }
    function Mi(a) {
      a.Rb &&
        (a.getVsync().mutate(function() {
          a.I.classList.add("i-amphtml-ghost");
          a.toggleFallback(!0);
          a.togglePlaceholder(!1);
        }),
        (a.Rb = !1));
    }
    function Ni(a) {
      this.win = a;
      this.mg = this.ah.bind(this);
      this.ng = this.bh.bind(this);
      this.Zc = this.Ce = this.$c = null;
      this.sd =
        "ontouchstart" in a ||
        (void 0 !== a.navigator.maxTouchPoints &&
          0 < a.navigator.maxTouchPoints) ||
        void 0 !== a.DocumentTouch;
      this.ub = !1;
      this.win.document.addEventListener("keydown", this.mg);
      this.win.document.addEventListener("mousedown", this.ng);
      this.rd = !0;
      this.wf = 0;
      this.Fh = new Y();
      this.xf = new Y();
      this.Id = new Y();
      this.sd &&
        ((this.rd = !this.sd),
        (this.$c = this.dh.bind(this)),
        oe(a.document, "mousemove", this.$c));
    }
    f = Ni.prototype;
    f.isTouchDetected = function() {
      return this.sd;
    };
    f.onTouchDetected = function(a, b) {
      b && a(this.isTouchDetected());
      return this.Fh.add(a);
    };
    f.isMouseDetected = function() {
      return this.rd;
    };
    f.onMouseDetected = function(a, b) {
      b && a(this.isMouseDetected());
      return this.xf.add(a);
    };
    f.isKeyboardActive = function() {
      return this.ub;
    };
    f.onKeyboardStateChanged = function(a, b) {
      b && a(this.isKeyboardActive());
      return this.Id.add(a);
    };
    f.ah = function(a) {
      this.ub ||
        a.defaultPrevented ||
        ((a = a.target),
        a &&
          ("INPUT" == a.tagName ||
            "TEXTAREA" == a.tagName ||
            "SELECT" == a.tagName ||
            "OPTION" == a.tagName ||
            a.hasAttribute("contenteditable"))) ||
        ((this.ub = !0), this.Id.fire(!0));
    };
    f.bh = function() {
      this.ub && ((this.ub = !1), this.Id.fire(!1));
    };
    f.dh = function(a) {
      var b = this;
      if (a.sourceCapabilities && a.sourceCapabilities.firesTouchEvents)
        this.vf();
      else {
        this.Zc ||
          ((this.Zc = this.$g.bind(this)), (this.Ce = this.vf.bind(this)));
        var c,
          d = pe(this.win.document, function(a) {
            c = a;
          });
        return V(this.win)
          .timeoutPromise(300, d)
          .then(this.Ce, function() {
            c && c();
            b.Zc();
          });
      }
    };
    f.$g = function() {
      this.rd = !0;
      this.xf.fire(!0);
    };
    f.vf = function() {
      this.wf++;
      3 >= this.wf && oe(this.win.document, "mousemove", this.$c);
    };
    function Oi() {
      Ie.apply(this, arguments);
    }
    p(Oi, Ie);
    Oi.prototype.isLayoutSupported = function(a) {
      return "container" == a || ee(a);
    };
    Oi.prototype.buildCallback = function() {
      if ("container" != this.getLayout()) {
        var a = this.win.document.createElement("div");
        this.applyFillContent(a);
        this.getRealChildNodes().forEach(function(b) {
          a.appendChild(b);
        });
        this.element.appendChild(a);
      }
    };
    Oi.prototype.prerenderAllowed = function() {
      return !0;
    };
    function Pi(a) {
      return w(a) ? a : [a];
    }
    function Qi(a) {
      this.w = Jd(a);
    }
    f = Qi.prototype;
    f.setOwner = function(a, b) {
      b.contains(a);
      Z(a) && Z(a).updateOwner(b);
      a.__AMP__OWNER = b;
      a = a.getElementsByClassName("i-amphtml-element");
      for (b = 0; b < a.length; b++) {
        var c = a[b];
        Z(c) && Z(c).updateOwner(void 0);
      }
    };
    f.schedulePreload = function(a, b) {
      Ri(this, this.w.getResourceForElement(a), !1, Pi(b));
    };
    f.scheduleLayout = function(a, b) {
      Ri(this, this.w.getResourceForElement(a), !0, Pi(b));
    };
    f.schedulePause = function(a, b) {
      var c = this.w.getResourceForElement(a);
      b = Pi(b);
      Si(this, c, b, function(a) {
        a.pause();
      });
    };
    f.scheduleResume = function(a, b) {
      a = this.w.getResourceForElement(a);
      b = Pi(b);
      Si(this, a, b, function(a) {
        a.resume();
      });
    };
    f.scheduleUnlayout = function(a, b) {
      a = this.w.getResourceForElement(a);
      b = Pi(b);
      Si(this, a, b, function(a) {
        a.unlayout();
      });
    };
    f.updateInViewport = function(a, b, c) {
      Ti(this, this.w.getResourceForElement(a), Pi(b), c);
    };
    f.requireLayout = function(a, b) {
      var c = this,
        d = [];
      Ui(this, a, function(a) {
        4 != a.getState() &&
          (3 != a.getState()
            ? d.push(
                a.whenBuilt().then(function() {
                  a.measure();
                  if (a.isDisplayed())
                    return (
                      c.w.scheduleLayoutOrPreload(a, !0, b, !0), a.loadedOnce()
                    );
                })
              )
            : a.isDisplayed() && d.push(a.loadedOnce()));
      });
      return Promise.all(d);
    };
    function Si(a, b, c, d) {
      c.forEach(function(c) {
        b.element.contains(c);
        Ui(a, c, d);
      });
    }
    function Ui(a, b, c) {
      if (b.classList.contains("i-amphtml-element"))
        c(a.w.getResourceForElement(b)),
          (b = b.getPlaceholder()) && Ui(a, b, c);
      else {
        var d = b.getElementsByClassName("i-amphtml-element");
        b = [];
        for (var e = 0; e < d.length; e++) {
          for (var g = d[e], h = !1, k = 0; k < b.length; k++)
            if (b[k].contains(g)) {
              h = !0;
              break;
            }
          h || (b.push(g), c(a.w.getResourceForElement(g)));
        }
      }
    }
    function Ri(a, b, c, d) {
      Si(a, b, d, function(d) {
        0 === d.getState()
          ? d.whenBuilt().then(function() {
              Vi(a, d, !c, b.getLayoutPriority());
            })
          : Vi(a, d, !c, b.getLayoutPriority());
      });
    }
    function Vi(a, b, c, d) {
      b.measure();
      2 === b.getState() &&
        b.isDisplayed() &&
        a.w.scheduleLayoutOrPreload(b, !c, d);
    }
    function Ti(a, b, c, d) {
      var e = b.isInViewport() && d;
      Si(a, b, c, function(a) {
        a.setInViewport(e);
      });
    }
    function Wi(a, b, c) {
      c = void 0 === c ? !1 : c;
      a = new a.Image();
      c && (a.referrerPolicy = "no-referrer");
      a.src = b;
      return a;
    }
    function Xi(a) {
      Ie.call(this, a);
      this.je = null;
    }
    p(Xi, Ie);
    Xi.prototype.isLayoutSupported = function() {
      return !0;
    };
    Xi.prototype.buildCallback = function() {
      this.element.setAttribute("aria-hidden", "true");
      (this.Bc = this.element.getAttribute("referrerpolicy")) &&
        D(
          "no-referrer" == this.Bc,
          'amp-pixel: invalid "referrerpolicy" value "' +
            this.Bc +
            '". Only "no-referrer" is supported'
        );
      this.element.hasAttribute("i-amphtml-ssr") &&
      this.element.querySelector("img")
        ? C().info("amp-pixel", "inabox img already present")
        : this.getAmpDoc()
            .whenFirstVisible()
            .then(this.Gh.bind(this));
    };
    Xi.prototype.Gh = function() {
      var a = this;
      if (this.je) return C().error("amp-pixel", "duplicate pixel"), this.je;
      this.je = V(this.win)
        .promise(1)
        .then(function() {
          var b = a.element.getAttribute("src");
          if (b)
            return gd(a.element, "url-replace")
              .expandUrlAsync(Yi(b))
              .then(function(b) {
                var c = a.win,
                  e = a.Bc;
                e &&
                  "no-referrer" !== e &&
                  z().error("pixel", "Unsupported referrerPolicy: %s", e);
                if ("no-referrer" === e)
                  if ("referrerPolicy" in Image.prototype) c = Wi(c, b, !0);
                  else {
                    var g = c.document;
                    e = G({ src: "about:blank", style: "display:none" });
                    g = g.createElement("iframe");
                    for (var h in e) g.setAttribute(h, e[h]);
                    c.document.body.appendChild(g);
                    Wi(g.contentWindow, b);
                    c = g;
                  }
                else c = Wi(c, b);
                var k = c;
                C().info("amp-pixel", "pixel triggered: ", b);
                return k;
              });
        });
    };
    function Yi(a) {
      D(
        /^(https:\/\/|\/\/)/i.test(a),
        'The <amp-pixel> src attribute must start with "https://" or "//". Invalid value: ' +
          a
      );
      return a;
    }
    function Zi(a) {
      this.P = a.navigator;
      this.o = a;
    }
    f = Zi.prototype;
    f.isAndroid = function() {
      return /Android/i.test(this.P.userAgent);
    };
    f.isIos = function() {
      return /iPhone|iPad|iPod/i.test(this.P.userAgent);
    };
    f.isSafari = function() {
      return (
        /Safari/i.test(this.P.userAgent) &&
        !this.isChrome() &&
        !this.isIe() &&
        !this.isEdge() &&
        !this.isFirefox() &&
        !this.isOpera()
      );
    };
    f.isChrome = function() {
      return (
        /Chrome|CriOS/i.test(this.P.userAgent) &&
        !this.isEdge() &&
        !this.isOpera()
      );
    };
    f.isFirefox = function() {
      return /Firefox|FxiOS/i.test(this.P.userAgent) && !this.isEdge();
    };
    f.isOpera = function() {
      return /OPR\/|Opera|OPiOS/i.test(this.P.userAgent);
    };
    f.isIe = function() {
      return /Trident|MSIE|IEMobile/i.test(this.P.userAgent);
    };
    f.isEdge = function() {
      return /Edge/i.test(this.P.userAgent);
    };
    f.isWebKit = function() {
      return /WebKit/i.test(this.P.userAgent) && !this.isEdge();
    };
    f.isWindows = function() {
      return /Windows/i.test(this.P.userAgent);
    };
    f.isStandalone = function() {
      return (
        (this.isIos() && this.P.standalone) ||
        (this.isChrome() &&
          this.o.matchMedia("(display-mode: standalone)").matches)
      );
    };
    f.isBot = function() {
      return /bot/i.test(this.P.userAgent);
    };
    f.getMajorVersion = function() {
      return this.isSafari()
        ? this.isIos()
          ? this.getIosMajorVersion() || 0
          : $i(this, /\sVersion\/(\d+)/, 1)
        : this.isChrome()
        ? $i(this, /(Chrome|CriOS)\/(\d+)/, 2)
        : this.isFirefox()
        ? $i(this, /(Firefox|FxiOS)\/(\d+)/, 2)
        : this.isOpera()
        ? $i(this, /(OPR|Opera|OPiOS)\/(\d+)/, 2)
        : this.isIe()
        ? $i(this, /MSIE\s(\d+)/, 1)
        : this.isEdge()
        ? $i(this, /Edge\/(\d+)/, 1)
        : 0;
    };
    function $i(a, b, c) {
      if (!a.P.userAgent) return 0;
      a = a.P.userAgent.match(b);
      return !a || c >= a.length ? 0 : parseInt(a[c], 10);
    }
    f.getIosVersionString = function() {
      if (!this.P.userAgent || !this.isIos()) return "";
      var a = this.P.userAgent.match(/OS ([0-9]+[_.][0-9]+([_.][0-9]+)?)\b/);
      return a ? (a = a[1].replace(/_/g, ".")) : "";
    };
    f.getIosMajorVersion = function() {
      var a = this.getIosVersionString();
      return "" == a ? null : Number(a.split(".")[0]);
    };
    function aj(a) {
      this.H = a;
      this.Xf = Object.create(null);
    }
    aj.prototype.addTransition = function(a, b, c) {
      var d = a + "|" + b;
      this.Xf[d] = c;
    };
    aj.prototype.setState = function(a) {
      var b = this.H;
      this.H = a;
      (a = this.Xf[b + "|" + a]) && a();
    };
    function bj(a) {
      var b = 6e4,
        c = this;
      this.win = a;
      this.kh = b;
      this.M = [];
      this.zf = new Y();
      this.Ne = function(a) {
        a.target && 1 == a.target.nodeType && cj(c, a.target);
      };
      this.Me = function() {
        V(a).delay(function() {
          cj(c, c.win.document.activeElement);
        }, 500);
      };
      this.win.document.addEventListener("focus", this.Ne, !0);
      this.win.addEventListener("blur", this.Me);
    }
    f = bj.prototype;
    f.Lh = function() {
      this.win.document.removeEventListener("focus", this.Ne, !0);
      this.win.removeEventListener("blur", this.Me);
    };
    f.onFocus = function(a) {
      return this.zf.add(a);
    };
    function cj(a, b) {
      var c = Date.now();
      0 == a.M.length || a.M[a.M.length - 1].el != b
        ? a.M.push({ el: b, time: c })
        : (a.M[a.M.length - 1].time = c);
      a.purgeBefore(c - a.kh);
      a.zf.fire(b);
    }
    f.getLast = function() {
      return 0 == this.M.length ? null : this.M[this.M.length - 1].el;
    };
    f.purgeBefore = function(a) {
      for (var b = this.M.length - 1, c = 0; c < this.M.length; c++)
        if (this.M[c].time >= a) {
          b = c - 1;
          break;
        }
      -1 != b && this.M.splice(0, b + 1);
    };
    f.hasDescendantsOf = function(a) {
      this.win.document.activeElement &&
        cj(this, this.win.document.activeElement);
      for (var b = 0; b < this.M.length; b++)
        if (a.contains(this.M[b].el)) return !0;
      return !1;
    };
    function dj() {
      this.J = [];
      this.Kb = {};
      this.mf = this.nf = 0;
    }
    f = dj.prototype;
    f.getSize = function() {
      return this.J.length;
    };
    f.getLastEnqueueTime = function() {
      return this.nf;
    };
    f.getLastDequeueTime = function() {
      return this.mf;
    };
    f.getTaskById = function(a) {
      return this.Kb[a] || null;
    };
    f.enqueue = function(a) {
      this.J.push(a);
      this.Kb[a.id] = a;
      this.nf = Date.now();
    };
    f.dequeue = function(a) {
      var b = this.removeAtIndex(a, this.J.indexOf(this.Kb[a.id]));
      if (!b) return !1;
      this.mf = Date.now();
      return !0;
    };
    f.peek = function(a, b) {
      for (var c = 1e6, d = null, e = 0; e < this.J.length; e++) {
        var g = this.J[e],
          h = a(g, b);
        h < c && ((c = h), (d = g));
      }
      return d;
    };
    f.forEach = function(a) {
      this.J.forEach(a);
    };
    f.removeAtIndex = function(a, b) {
      var c = this.Kb[a.id];
      if (!c || this.J[b] != c) return !1;
      this.J.splice(b, 1);
      delete this.Kb[a.id];
      return !0;
    };
    f.purge = function(a) {
      for (var b = this.J.length; b--; )
        a(this.J[b]) && this.removeAtIndex(this.J[b], b);
    };
    function ej(a) {
      var b;
      return !(b || Id(a)).isIe() || fj(a)
        ? null
        : new Promise(function(b) {
            var c = Date.now() + 2e3,
              e = a.setInterval(function() {
                var d = Date.now(),
                  h = fj(a);
                if (h || d > c)
                  a.clearInterval(e),
                    b(),
                    h || C().error("ie-media-bug", "IE media never resolved");
              }, 10);
          });
    }
    function fj(a) {
      var b =
        "(min-width: " +
        (a.innerWidth - 1) +
        "px) AND (max-width: " +
        (a.innerWidth + 1 + "px)");
      try {
        return a.matchMedia(b).matches;
      } catch (c) {
        return C().error("ie-media-bug", "IE matchMedia failed: ", c), !0;
      }
    }
    function gj(a) {
      var b = this;
      this.ampdoc = a;
      this.win = a.win;
      this.h = W(a);
      this.oa = this.h.isRuntimeOn();
      this.Og = !1;
      this.vh = 0;
      this.w = [];
      this.Je = this.re = 0;
      this.ja = this.ampdoc.isVisible();
      this.xa = this.h.getPrerenderSize();
      this.ib = !1;
      this.Ze = !0;
      this.se = !1;
      this.$b = -1;
      this.Eb = !0;
      this.Fb = -1;
      this.Kd = this.jc = 0;
      this.yc = new gi(this.win, function() {
        return b.doPass();
      });
      this.If = new gi(this.win, function() {
        b.Eb = !0;
        b.schedulePass();
      });
      this.na = new dj();
      this.D = new dj();
      this.De = this.qg.bind(this);
      this.ha = [];
      this.pa = [];
      this.Bd = !1;
      this.G = Ld(this.ampdoc);
      this.A = Kd(this.win);
      this.qe = new bj(this.win);
      this.pe = !1;
      this.Vb = 0;
      this.Sa = !1;
      this.xc = [];
      this.$e = new I();
      this.fg = new aj(this.ampdoc.getVisibilityState());
      this.G.onChanged(function(a) {
        b.jc = Date.now();
        b.Kd = a.velocity;
        a.relayoutAll && ((b.Eb = !0), (b.Sa = !0));
        b.schedulePass();
      });
      this.G.onScroll(function() {
        b.jc = Date.now();
      });
      this.ampdoc.onVisibilityChanged(function() {
        -1 == b.$b && b.ampdoc.isVisible() && (b.$b = Date.now());
        b.schedulePass();
      });
      this.h.onRuntimeState(function(a) {
        b.oa = a;
        b.schedulePass(1);
      });
      this.qe.onFocus(function(a) {
        hj(b, a);
      });
      oi(this.ampdoc, function() {
        ij(b, b.fg);
        b.schedulePass(0);
      });
      jj(this);
    }
    function jj(a) {
      a.ampdoc.whenReady().then(function() {
        function b() {
          return a.If.schedule();
        }
        a.ib = !0;
        kj(a);
        a.pa = null;
        var c = ej(a.win);
        c ? c.then(b) : b();
        lj(a);
        Promise.race([se(a.win), V(a.win).promise(3100)]).then(b);
        a.win.document.fonts &&
          "loaded" != a.win.document.fonts.status &&
          a.win.document.fonts.ready.then(b);
      });
    }
    f = gj.prototype;
    f.get = function() {
      return this.w.slice(0);
    };
    f.getAmpdoc = function() {
      return this.ampdoc;
    };
    function lj(a) {
      var b = U(a.win, "input");
      b.onTouchDetected(function(b) {
        mj(a, "amp-mode-touch", b);
      }, !0);
      b.onMouseDetected(function(b) {
        mj(a, "amp-mode-mouse", b);
      }, !0);
      b.onKeyboardStateChanged(function(b) {
        mj(a, "amp-mode-keyboard-active", b);
      }, !0);
    }
    function mj(a, b, c) {
      a.ampdoc.waitForBodyOpen().then(function(d) {
        a.A.mutate(function() {
          d.classList.toggle(b, c);
        });
      });
    }
    f.getResourceForElement = function(a) {
      return Z(a);
    };
    f.getResourceForElementOptional = function(a) {
      return Z(a);
    };
    f.getScrollDirection = function() {
      return Math.sign(this.Kd) || 1;
    };
    f.add = function(a) {
      this.re++;
      1 == this.re && this.G.ensureReadyForElements();
      var b = Z(a);
      b && 0 != b.getState() && !a.reconstructWhenReparented()
        ? b.requestMeasure()
        : (b = new ai(++this.vh, a, this));
      this.w.push(b);
      this.If.schedule(1e3);
    };
    function nj(a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      d = void 0 === d ? !0 : d;
      e = void 0 === e ? !1 : e;
      var g = a.oa || a.Og,
        h =
          "prerender" != a.ampdoc.getVisibilityState() || b.prerenderAllowed();
      g &&
        h &&
        (a.ib
          ? oj(a, b, d, e)
          : b.isBuilt() ||
            b.isBuilding() ||
            (c && a.pa.includes(b)) ||
            (a.pa.push(b), kj(a, d)));
    }
    function kj(a, b) {
      if (!a.Bd)
        try {
          a.Bd = !0;
          b = void 0 === b ? !0 : b;
          b = void 0 === b ? !0 : b;
          for (var c = 0; c < a.pa.length; c++) {
            var d = a.pa[c],
              e;
            if (!(e = a.ib))
              a: {
                var g = a.ampdoc.getRootNode(),
                  h = d.element;
                do
                  if (h.nextSibling) {
                    e = !0;
                    break a;
                  }
                while ((h = h.parentNode) && h != g);
                e = !1;
              }
            e && (a.pa.splice(c--, 1), oj(a, d, b));
          }
        } finally {
          a.Bd = !1;
        }
    }
    function oj(a, b, c, d) {
      d = void 0 === d ? !1 : d;
      if (
        20 > a.Je ||
        a.ampdoc.hasBeenVisible() ||
        d ||
        b.isBuildRenderBlocking()
      )
        if ((d = b.build()))
          a.Je++,
            c &&
              d.then(
                function() {
                  return a.schedulePass();
                },
                function(c) {
                  pj(a, b);
                  if (!tf(c)) throw c;
                }
              );
    }
    f.remove = function(a) {
      (a = Z(a)) && pj(this, a);
    };
    function pj(a, b) {
      var c = a.w.indexOf(b);
      -1 != c && a.w.splice(c, 1);
      b.isBuilt() && b.pauseOnRemove();
      qj(a, b, !0);
    }
    f.upgraded = function(a) {
      a = Z(a);
      nj(this, a);
    };
    f.updateLayoutPriority = function(a, b) {
      var c = Z(a);
      c.updateLayoutPriority(b);
      this.D.forEach(function(a) {
        a.resource == c && (a.priority = b);
      });
      this.schedulePass();
    };
    f.changeSize = function(a, b, c, d, e) {
      rj(this, Z(a), b, c, e, void 0, !0, d);
    };
    f.attemptChangeSize = function(a, b, c, d, e) {
      var g = this;
      return new Promise(function(h, k) {
        rj(g, Z(a), b, c, d, e, !1, function(a) {
          a ? h() : k(Error("changeSize attempt denied"));
        });
      });
    };
    f.measureElement = function(a) {
      return this.A.measurePromise(a);
    };
    f.mutateElement = function(a, b) {
      return this.measureMutateElement(a, null, b);
    };
    f.measureMutateElement = function(a, b, c) {
      return sj(this, a, b, c);
    };
    function sj(a, b, c, d) {
      function e() {
        var c = a.G.getLayoutRect(b);
        return 0 != c.width && 0 != c.height ? c.top : -1;
      }
      var g = -1;
      return a.A.runPromise({
        measure: function() {
          c && c();
          g = e();
        },
        mutate: function() {
          d();
          b.classList.contains("i-amphtml-element") && Z(b).requestMeasure();
          for (
            var c = b.getElementsByClassName("i-amphtml-element"), k = 0;
            k < c.length;
            k++
          )
            Z(c[k]).requestMeasure();
          -1 != g && tj(a, g);
          a.schedulePass(70);
          a.A.measure(function() {
            var b = e();
            -1 != b && b != g && (tj(a, b), a.schedulePass(70));
            a.Sa = !0;
          });
        }
      });
    }
    f.dirtyElement = function(a) {
      var b = !1,
        c = a.classList.contains("i-amphtml-element");
      c ? ((a = Z(a)), tj(this, a.getLayoutBox().top)) : (b = !0);
      this.schedulePass(70, b);
    };
    f.attemptCollapse = function(a) {
      var b = this;
      return new Promise(function(c, d) {
        rj(b, Z(a), 0, 0, void 0, void 0, !1, function(b) {
          b
            ? (Z(a).completeCollapse(), c())
            : d(C().createExpectedError("collapse attempt denied"));
        });
      });
    };
    f.collapseElement = function(a) {
      var b = this.G.getLayoutRect(a),
        c = Z(a);
      0 != b.width &&
        0 != b.height &&
        (Q(this.win, "dirty-collapse-element")
          ? this.dirtyElement(a)
          : tj(this, b.top));
      c.completeCollapse();
      this.schedulePass(70);
    };
    f.expandElement = function(a) {
      var b = Z(a);
      b.completeExpand();
      (b = b.getOwner()) && b.expandedCallback(a);
      this.schedulePass(70);
    };
    f.schedulePass = function(a, b) {
      b && (this.Eb = !0);
      return this.yc.schedule(a);
    };
    function uj(a) {
      a.pe ||
        ((a.pe = !0),
        a.A.mutate(function() {
          return a.doPass();
        }));
    }
    f.ampInitComplete = function() {
      this.se = !0;
      this.schedulePass();
    };
    f.onNextPass = function(a) {
      this.xc.push(a);
    };
    f.doPass = function() {
      var a = this;
      if (this.oa) {
        this.ja = this.ampdoc.isVisible();
        this.xa = this.h.getPrerenderSize();
        var b = this.ib && this.Ze;
        if (b) {
          this.Ze = !1;
          var c = this.win.document,
            d = Fd(this.ampdoc);
          this.h.sendMessage(
            "documentLoaded",
            G({
              title: c.title,
              sourceUrl: Zc(this.ampdoc.getUrl()),
              serverLayout: c.documentElement.hasAttribute("i-amphtml-element"),
              linkRels: d.linkRels,
              metaTags: d.metaTags
            }),
            !0
          );
          this.Vb = this.G.getContentHeight();
          this.h.sendMessage("documentHeight", G({ height: this.Vb }), !0);
        }
        this.G.getSize();
        this.yc.cancel();
        this.pe = !1;
        this.fg.setState(this.ampdoc.getVisibilityState());
        this.ib &&
          this.se &&
          !this.ampdoc.signals().get("ready-scan") &&
          this.ampdoc.signals().signal("ready-scan");
        this.Sa &&
          ((this.Sa = !1),
          this.A.measure(function() {
            var b = a.G.getContentHeight();
            b != a.Vb &&
              (a.h.sendMessage("documentHeight", G({ height: b }), !0),
              (a.Vb = b),
              a.G.contentHeightChanged());
          }));
        for (c = 0; c < this.xc.length; c++) (0, this.xc[c])();
        this.xc.length = 0;
      }
    };
    function vj(a) {
      var b = Date.now(),
        c = a.G.getRect(),
        d = c.height / 10,
        e = c.height / 10,
        g = (0.01 > Math.abs(a.Kd) && 500 < b - a.jc) || 1e3 < b - a.jc;
      if (0 < a.ha.length) {
        var h = a.ha;
        a.ha = [];
        var k = -1,
          l = [],
          m = 0;
        for (b = 0; b < h.length; b++) {
          var n = h[b],
            r = n,
            t = r.resource;
          r = r.event;
          var v = t.getLayoutBox(),
            y = 0,
            x = 0,
            A = 0,
            J = 0,
            N = v,
            Da = N.top,
            F = N.bottom,
            B = void 0;
          n.marginChange &&
            ((B = n.marginChange.newMargins),
            (N = n.marginChange.currentMargins),
            void 0 != B.top && (y = B.top - N.top),
            void 0 != B.bottom && (x = B.bottom - N.bottom),
            void 0 != B.left && (A = B.left - N.left),
            void 0 != B.right && (J = B.right - N.right),
            y && (Da = v.top - N.top),
            x && (F = v.bottom + N.bottom));
          var ba = n.newHeight - v.height,
            Aa = n.newWidth - v.width,
            Ba = !1;
          if (0 != ba || 0 != y || 0 != x || 0 != Aa || 0 != A || 0 != J)
            if (n.force || !a.ja) Ba = !0;
            else if (
              a.qe.hasDescendantsOf(t.element) ||
              (r && r.userActivation && r.userActivation.hasBeenActive)
            )
              Ba = !0;
            else if (
              Da >= c.bottom - e ||
              (0 == y && v.bottom + Math.min(ba, 0) >= c.bottom - e)
            )
              Ba = !0;
            else if (1 < c.top && F <= c.top + d) {
              if (0 > ba && c.top + m < -ba) continue;
              g ? ((m += ba), l.push(n)) : a.ha.push(n);
              continue;
            } else
              wj(a, t, v)
                ? (Ba = !0)
                : 0 > ba ||
                  0 > y ||
                  0 > x ||
                  (n.newHeight == v.height && xj(t.element, n.newWidth || 0)
                    ? (Ba = !0)
                    : n.resource.overflowCallback(
                        !0,
                        n.newHeight,
                        n.newWidth,
                        B
                      ));
          Ba &&
            (0 <= v.top && (k = -1 == k ? v.top : Math.min(k, v.top)),
            n.resource.changeSize(n.newHeight, n.newWidth, B),
            n.resource.overflowCallback(!1, n.newHeight, n.newWidth, B),
            (a.Sa = !0));
          n.callback && n.callback(Ba);
        }
        -1 != k && tj(a, k);
        0 < l.length &&
          a.A.run(
            {
              measure: function(b) {
                b.scrollHeight = a.G.getScrollHeight();
                b.scrollTop = a.G.getScrollTop();
              },
              mutate: function(b) {
                var c = -1;
                l.forEach(function(a) {
                  var b = a.resource.getLayoutBox();
                  c = -1 == c ? b.top : Math.min(c, b.top);
                  a.resource.changeSize(
                    a.newHeight,
                    a.newWidth,
                    a.marginChange ? a.marginChange.newMargins : void 0
                  );
                  a.callback && a.callback(!0);
                });
                -1 != c && tj(a, c);
                var d = a.G.getScrollHeight();
                d != b.scrollHeight &&
                  a.G.setScrollTop(b.scrollTop + (d - b.scrollHeight));
                a.Sa = !0;
              }
            },
            {}
          );
      }
    }
    function xj(a, b) {
      a = a.parentElement;
      if (!a || 1 < a.childElementCount) return !1;
      var c = (a.getImpl && a.getImpl().getLayoutWidth()) || -1;
      return c >= b;
    }
    function wj(a, b, c) {
      var d,
        e = a.G.getContentHeight();
      a = Math.max(0.85 * e, e - 1e3);
      var g = c || b.getLayoutBox(),
        h = d || b.getInitialLayoutBox();
      return g.bottom >= a || h.bottom >= a;
    }
    function tj(a, b) {
      a.Fb = -1 == a.Fb ? b : Math.min(b, a.Fb);
    }
    function hj(a, b) {
      var c = vb(b, function(a) {
        return !!Z(a);
      });
      if (c) {
        b = Z(c);
        var d = b.getPendingChangeSize();
        void 0 !== d && rj(a, b, d.height, d.width, d.margins, void 0, !0);
      }
    }
    function yj(a) {
      var b = Date.now(),
        c = a.Eb;
      a.Eb = !1;
      var d = a.Fb;
      a.Fb = -1;
      for (var e = 0, g = 0, h = 0; h < a.w.length; h++) {
        var k = a.w[h];
        0 != k.getState() || k.isBuilding() || nj(a, k, !0);
        if (c || !k.hasBeenMeasured() || 1 == k.getState())
          k.applySizesAndMediaQuery(), e++;
        k.isMeasureRequested() && g++;
      }
      var l;
      if (0 < e || 0 < g || c || -1 != d)
        for (h = 0; h < a.w.length; h++)
          if (((k = a.w[h]), !k.hasOwner() || k.isMeasureRequested()))
            if (
              c ||
              1 == k.getState() ||
              !k.hasBeenMeasured() ||
              k.isMeasureRequested() ||
              (-1 != d && k.getLayoutBox().bottom >= d)
            ) {
              var m = k.isDisplayed();
              k.measure();
              m && !k.isDisplayed() && (l || (l = []), l.push(k));
            }
      l &&
        a.A.mutate(function() {
          l.forEach(function(b) {
            b.unload();
            qj(a, b);
          });
        });
      c = a.G.getRect();
      var n = a.ja ? Yb(c, 0.25, 2) : 0 < a.xa ? Yb(c, 0, a.xa - 1) : null;
      var r = a.ja ? Yb(c, 0.25, 0.25) : c;
      for (c = 0; c < a.w.length; c++)
        if (((d = a.w[c]), 0 != d.getState() && !d.hasOwner())) {
          var t = a.ja && d.isDisplayed() && d.overlaps(r);
          d.setInViewport(t);
        }
      if (n)
        for (c = 0; c < a.w.length; c++)
          (d = a.w[c]),
            !d.isBuilt() &&
              !d.hasOwner() &&
              d.hasBeenMeasured() &&
              d.isDisplayed() &&
              d.overlaps(n) &&
              nj(a, d, !0, void 0, !0),
            2 != d.getState() ||
              d.hasOwner() ||
              (d.isDisplayed() &&
                d.overlaps(n) &&
                a.scheduleLayoutOrPreload(d, !0));
      if (
        a.ja &&
        0 == a.na.getSize() &&
        0 == a.D.getSize() &&
        b > a.na.getLastDequeueTime() + 5e3
      ) {
        var v = 0;
        for (b = 0; b < a.w.length && 4 > v; b++)
          (c = a.w[b]),
            2 == c.getState() &&
              !c.hasOwner() &&
              c.isDisplayed() &&
              c.idleRenderOutsideViewport() &&
              (a.scheduleLayoutOrPreload(c, !1), v++);
        for (b = 0; b < a.w.length && 4 > v; b++)
          (c = a.w[b]),
            2 == c.getState() &&
              !c.hasOwner() &&
              c.isDisplayed() &&
              (a.scheduleLayoutOrPreload(c, !1), v++);
      }
    }
    f.qg = function(a) {
      var b = this.G.getRect(),
        c = a.resource.getLayoutBox(),
        d = Math.floor((c.top - b.top) / b.height);
      Math.sign(d) != this.getScrollDirection() && (d *= 2);
      d = Math.abs(d);
      return 10 * a.priority + d;
    };
    function zj(a, b) {
      var c = Date.now();
      if (0 == a.na.getSize()) {
        if (-1 === a.$b) return 0;
        var d = 1e3 * b.priority;
        return Math.max(d - (c - a.$b), 0);
      }
      var e = 0;
      a.na.forEach(function(a) {
        e = Math.max(
          e,
          Math.max(1e3 * (b.priority - a.priority), 0) - (c - a.startTime)
        );
      });
      return e;
    }
    f.ph = function(a) {
      this.D.getTaskById(a.id) || this.D.enqueue(a);
    };
    f.Tf = function(a, b, c) {
      this.na.dequeue(a);
      this.schedulePass(1e3);
      if (!b)
        return (
          C().info("Resources", "task failed:", a.id, a.resource.debugid, c),
          Promise.reject(c)
        );
    };
    function rj(a, b, c, d, e, g, h, k) {
      b.hasBeenMeasured() && !e
        ? Aj(a, b, c, d, void 0, g, h, k)
        : a.A.measure(function() {
            b.hasBeenMeasured() || b.measure();
            if (e) {
              var l = Yd(a.win, b.element);
              l = {
                top: parseInt(l.marginTop, 10) || 0,
                right: parseInt(l.marginRight, 10) || 0,
                bottom: parseInt(l.marginBottom, 10) || 0,
                left: parseInt(l.marginLeft, 10) || 0
              };
              l = { newMargins: e, currentMargins: l };
            } else l = void 0;
            var m = l;
            Aj(a, b, c, d, m, g, h, k);
          });
    }
    function Aj(a, b, c, d, e, g, h, k) {
      b.resetPendingChangeSize();
      var l = b.getPageLayoutBox();
      if (
        !(l =
          (void 0 !== c && c != l.height) || (void 0 !== d && d != l.width)) &&
        (l = void 0 !== e)
      ) {
        l = e.currentMargins;
        var m = e.newMargins;
        l =
          (void 0 !== m.top && m.top != l.top) ||
          (void 0 !== m.right && m.right != l.right) ||
          (void 0 !== m.bottom && m.bottom != l.bottom) ||
          (void 0 !== m.left && m.left != l.left);
      }
      if (l) {
        l = null;
        for (m = 0; m < a.ha.length; m++)
          if (a.ha[m].resource == b) {
            l = a.ha[m];
            break;
          }
        l
          ? ((l.newHeight = c),
            (l.newWidth = d),
            (l.marginChange = e),
            (l.event = g),
            (l.force = h || l.force),
            (l.callback = k))
          : a.ha.push({
              resource: b,
              newHeight: c,
              newWidth: d,
              marginChange: e,
              event: g,
              force: h,
              callback: k
            });
        uj(a);
      } else
        void 0 === c &&
          void 0 === d &&
          void 0 === e &&
          C().error(
            "Resources",
            "attempting to change size with undefined dimensions",
            b.debugid
          ),
          k && k(!0);
    }
    function Bj(a, b, c) {
      return 0 != b.getState() &&
        b.isDisplayed() &&
        (a.ja ||
          ("prerender" == a.ampdoc.getVisibilityState() &&
            b.prerenderAllowed())) &&
        (c ||
          b.isInViewport() ||
          b.renderOutsideViewport() ||
          b.idleRenderOutsideViewport())
        ? !0
        : !1;
    }
    f.scheduleLayoutOrPreload = function(a, b, c, d) {
      0 != a.getState() && a.isDisplayed();
      d = d || !1;
      Bj(this, a, d) &&
        (b
          ? this.ra(a, "L", 0, c || 0, d, a.startLayout.bind(a))
          : this.ra(a, "P", 2, c || 0, d, a.startLayout.bind(a)));
    };
    f.ra = function(a, b, c, d, e, g) {
      b = a.getTaskId(b);
      a = {
        id: b,
        resource: a,
        priority: Math.max(a.getLayoutPriority(), d) + c,
        forceOutsideViewport: e,
        callback: g,
        scheduleTime: Date.now(),
        startTime: 0,
        promise: null
      };
      var h = this.D.getTaskById(b);
      if (!h || a.priority < h.priority)
        h && this.D.dequeue(h),
          this.D.enqueue(a),
          this.schedulePass(zj(this, a));
      a.resource.layoutScheduled(a.scheduleTime);
    };
    f.whenFirstPass = function() {
      return this.$e.promise;
    };
    function ij(a, b) {
      function c() {
        a.w.forEach(function(a) {
          return a.resume();
        });
        h();
      }
      function d() {
        a.w.forEach(function(b) {
          b.unload();
          qj(a, b);
        });
        try {
          a.win.getSelection().removeAllRanges();
        } catch (k) {}
      }
      function e() {
        a.w.forEach(function(a) {
          return a.pause();
        });
      }
      function g() {}
      function h() {
        var b = a.G.getSize();
        if (0 < b.height && 0 < b.width) {
          0 < a.ha.length && vj(a);
          yj(a);
          b = Date.now();
          for (
            var c = -1, d = Object.create(null), e = a.D.peek(a.De, d);
            e;

          ) {
            c = zj(a, e);
            if (16 < c) break;
            a.D.dequeue(e);
            (c = a.na.getTaskById(e.id))
              ? ((e = a.ph.bind(a, e)), c.promise.then(e, e))
              : (e.resource.measure(),
                Bj(a, e.resource, e.forceOutsideViewport)
                  ? ((e.promise = e.callback()),
                    (e.startTime = b),
                    a.na.enqueue(e),
                    e.promise
                      .then(a.Tf.bind(a, e, !0), a.Tf.bind(a, e, !1))
                      .catch(rf))
                  : e.resource.layoutCanceled());
            e = a.D.peek(a.De, d);
            c = -1;
          }
          0 <= c
            ? (b = c)
            : ((b = 2 * (b - a.na.getLastDequeueTime())),
              (b = Math.max(Math.min(3e4, b), 5e3)));
          0 < a.ha.length && (b = Math.min(b, 500));
          a.ja && a.schedulePass(b);
          a.$e.resolve();
        }
      }
      b.addTransition("prerender", "prerender", h);
      b.addTransition("prerender", "visible", h);
      b.addTransition("prerender", "hidden", h);
      b.addTransition("prerender", "inactive", h);
      b.addTransition("prerender", "paused", h);
      b.addTransition("visible", "visible", h);
      b.addTransition("visible", "hidden", h);
      b.addTransition("visible", "inactive", d);
      b.addTransition("visible", "paused", e);
      b.addTransition("hidden", "visible", h);
      b.addTransition("hidden", "hidden", h);
      b.addTransition("hidden", "inactive", d);
      b.addTransition("hidden", "paused", e);
      b.addTransition("inactive", "visible", c);
      b.addTransition("inactive", "hidden", c);
      b.addTransition("inactive", "inactive", g);
      b.addTransition("inactive", "paused", h);
      b.addTransition("paused", "visible", c);
      b.addTransition("paused", "hidden", h);
      b.addTransition("paused", "inactive", d);
      b.addTransition("paused", "paused", g);
    }
    function qj(a, b, c) {
      1 == b.getState() &&
        (a.D.purge(function(a) {
          return a.resource == b;
        }),
        a.na.purge(function(a) {
          return a.resource == b;
        }),
        ag(a.ha, function(a) {
          return a.resource === b;
        }));
      if (0 == b.getState() && c && a.pa) {
        var d = a.pa.indexOf(b);
        -1 != d && a.pa.splice(d, 1);
      }
    }
    var Cj = /^i-amphtml-/;
    function Dj(a, b) {
      this.ampdoc = a;
      b = b ? b.document.documentElement : a.getHeadNode();
      this.w = Jd(a);
      this.G = Ld(a);
      a = gd(b, "action");
      a.addGlobalTarget("AMP", this.Eg.bind(this));
      a.addGlobalMethodHandler("hide", this.ef.bind(this));
      a.addGlobalMethodHandler("show", this.hf.bind(this));
      a.addGlobalMethodHandler("toggleVisibility", this.Ig.bind(this));
      a.addGlobalMethodHandler("scrollTo", this.gf.bind(this));
      a.addGlobalMethodHandler("focus", this.Fg.bind(this));
      a.addGlobalMethodHandler("toggleClass", this.Hg.bind(this));
    }
    Dj.installInEmbedWindow = function(a, b) {
      ld(a, "standard-actions", new Dj(b, a));
    };
    f = Dj.prototype;
    f.Eg = function(a) {
      if (!a.satisfiesTrust(100)) return null;
      var b = a.node,
        c = a.method,
        d = a.args,
        e = (b.ownerDocument || b).defaultView;
      switch (c) {
        case "pushState":
        case "setState":
          return Bd(
            b.nodeType === Node.DOCUMENT_NODE ? b.documentElement : b
          ).then(function(b) {
            D(b, "AMP-BIND is not installed.");
            return b.invoke(a);
          });
        case "navigateTo":
          return Ej(this, a);
        case "closeOrNavigateTo":
          return Fj(this, a);
        case "scrollTo":
          return (
            D(d.id, "AMP.scrollTo must provide element ID"),
            (a.node = kd(b).getElementById(d.id)),
            this.gf(a)
          );
        case "goBack":
          return od(this.ampdoc, "history").goBack(), null;
        case "print":
          return e.print(), null;
        case "optoutOfCid":
          return td(R(this.ampdoc), "cid")
            .then(function(a) {
              return a.optOut();
            })
            .catch(function(a) {
              C().error("STANDARD-ACTIONS", "Failed to opt out of CID", a);
            });
      }
      throw z().createError("Unknown AMP action ", c);
    };
    function Ej(a, b) {
      var c = b.node,
        d = b.caller,
        e = b.method,
        g = b.args,
        h = (c.ownerDocument || c).defaultView;
      b = Promise.resolve();
      L(d.tagName, "AMP-") &&
        (b = d.getImpl().then(function(a) {
          "function" == typeof a.throwIfCannotNavigate &&
            a.throwIfCannotNavigate();
        }));
      return b.then(
        function() {
          od(a.ampdoc, "navigation").navigateTo(h, g.url, "AMP." + e, {
            target: g.target,
            opener: g.opener
          });
        },
        function(a) {
          z().error("STANDARD-ACTIONS", a.message);
        }
      );
    }
    function Fj(a, b) {
      var c = b.node;
      c = (c.ownerDocument || c).defaultView;
      var d = c.parent != c,
        e = c.opener && a.ampdoc.isSingleDoc() && !d,
        g = !1;
      e && (c.close(), (g = c.closed));
      return g ? Promise.resolve() : Ej(a, b);
    }
    f.gf = function(a) {
      var b = a.node,
        c = (a = a.args) && a.position,
        d = a && a.duration;
      c && !["top", "bottom", "center"].includes(c) && (c = void 0);
      La(d) || (d = void 0);
      return this.G.animateScrollIntoView(b, c, d);
    };
    f.Fg = function(a) {
      Gb(a.node);
      return null;
    };
    f.ef = function(a) {
      var b = a.node;
      this.w.mutateElement(b, function() {
        b.classList.contains("i-amphtml-element") ? b.collapse() : Xd(b, !1);
      });
      return null;
    };
    f.hf = function(a) {
      var b = a.node,
        c = b.ownerDocument.defaultView;
      if (b.classList.contains("i-amphtml-layout-nodisplay"))
        return (
          z().warn(
            "STANDARD-ACTIONS",
            "Elements with layout=nodisplay cannot be dynamically shown.",
            b
          ),
          null
        );
      this.w.measureElement(function() {
        "none" != Yd(c, b).display ||
          b.hasAttribute("hidden") ||
          z().warn(
            "STANDARD-ACTIONS",
            'Elements can only be dynamically shown when they have the "hidden" attribute set or when they were dynamically hidden.',
            b
          );
      });
      var d = b.hasAttribute("autofocus") ? b : b.querySelector("[autofocus]");
      d && Id(c).isIos()
        ? Gj(b, d)
        : this.w.mutateElement(b, function() {
            Gj(b, d);
          });
      return null;
    };
    function Gj(a, b) {
      a.classList.contains("i-amphtml-element") ? a.expand() : Xd(a, !0);
      b && Gb(b);
    }
    f.Ig = function(a) {
      return a.node.hasAttribute("hidden") ? this.hf(a) : this.ef(a);
    };
    f.Hg = function(a) {
      var b = a.node,
        c = a.args,
        d = z().assertString(c["class"], "Argument 'class' must be a string.");
      if (Cj.test(d)) return null;
      this.w.mutateElement(b, function() {
        if (void 0 !== c.force) {
          var a = z().assertBoolean(
            c.force,
            "Optional argument 'force' must be a boolean."
          );
          b.classList.toggle(d, a);
        } else b.classList.toggle(d);
      });
      return null;
    };
    function Hj(a, b, c) {
      this.ampdoc = a;
      this.h = b;
      this.j = c;
      this.vc = $c(this.ampdoc.win.location);
      this.Kc = null;
    }
    f = Hj.prototype;
    f.get = function(a) {
      return Ij(this).then(function(b) {
        return b.get(a);
      });
    };
    f.set = function(a, b, c) {
      return this.setNonBoolean(a, b, c);
    };
    f.setNonBoolean = function(a, b, c) {
      return Jj(this, function(d) {
        return d.set(a, b, c);
      });
    };
    f.remove = function(a) {
      return Jj(this, function(b) {
        return b.remove(a);
      });
    };
    function Ij(a) {
      a.Kc ||
        (a.Kc = a.j
          .loadBlob(a.vc)
          .then(function(a) {
            return a ? Kb(atob(a)) : {};
          })
          .catch(function(a) {
            C().expectedError("Storage", "Failed to load store: ", a);
            return {};
          })
          .then(function(a) {
            return new Kj(a);
          }));
      return a.Kc;
    }
    function Jj(a, b) {
      return Ij(a)
        .then(function(c) {
          b(c);
          c = btoa(JSON.stringify(c.obj));
          return a.j.saveBlob(a.vc, c);
        })
        .then(a.pg.bind(a));
    }
    function Lj(a) {
      a.h.onBroadcast(function(b) {
        "amp-storage-reset" == b.type && b.origin == a.vc && (a.Kc = null);
      });
    }
    f.pg = function() {
      this.h.broadcast({ type: "amp-storage-reset", origin: this.vc });
    };
    function Kj(a) {
      var b;
      this.obj = Ib(a);
      this.Yg = b || 8;
      this.ta = this.obj.vv || Object.create(null);
      this.obj.vv || (this.obj.vv = this.ta);
    }
    Kj.prototype.get = function(a) {
      return (a = this.ta[a]) ? a.v : void 0;
    };
    Kj.prototype.set = function(a, b, c) {
      if (void 0 !== this.ta[a]) {
        a = this.ta[a];
        var d = Date.now();
        c && (d = a.t);
        a.v = b;
        a.t = d;
      } else this.ta[a] = G({ v: b, t: Date.now() });
      b = Object.keys(this.ta);
      if (b.length > this.Yg) {
        var e = Infinity,
          g = null;
        for (c = 0; c < b.length; c++)
          (a = this.ta[b[c]]), a.t < e && ((g = b[c]), (e = a.t));
        g && delete this.ta[g];
      }
    };
    Kj.prototype.remove = function(a) {
      delete this.ta[a];
    };
    function Mj(a) {
      this.win = a;
      try {
        if ("localStorage" in this.win) {
          this.win.localStorage.getItem("test");
          var b = !0;
        } else b = !1;
      } catch (c) {
        b = !1;
      }
      this.Ed = b;
      this.Ed ||
        ((a = Error("localStorage not supported.")),
        C().expectedError("Storage", a));
    }
    Mj.prototype.loadBlob = function(a) {
      var b = this;
      return new Promise(function(c) {
        b.Ed ? c(b.win.localStorage.getItem("amp-store:" + a)) : c(null);
      });
    };
    Mj.prototype.saveBlob = function(a, b) {
      var c = this;
      return new Promise(function(d) {
        c.Ed && c.win.localStorage.setItem("amp-store:" + a, b);
        d();
      });
    };
    function Nj(a) {
      this.h = a;
    }
    Nj.prototype.loadBlob = function(a) {
      return this.h
        .sendMessageAwaitResponse("loadStore", G({ origin: a }))
        .then(function(a) {
          return a.blob;
        });
    };
    Nj.prototype.saveBlob = function(a, b) {
      return this.h.sendMessageAwaitResponse(
        "saveStore",
        G({ origin: a, blob: b })
      );
    };
    function Oj(a) {
      T(
        a,
        "storage",
        function() {
          var b = W(a),
            c = parseInt(b.getParam("storage"), 10),
            d = c ? new Nj(b) : new Mj(a.win);
          b = new Hj(a, b, d);
          Lj(b);
          return b;
        },
        !0
      );
    }
    function Pj(a) {
      this.win = a;
      this.uh = this.win.Promise.resolve();
      this.Eh = 0;
      this.fd = {};
      this.ge = Date.now();
    }
    f = Pj.prototype;
    f.timeSinceStart = function() {
      return Date.now() - this.ge;
    };
    f.delay = function(a, b) {
      var c = this;
      if (!b) {
        var d = "p" + this.Eh++;
        this.uh
          .then(function() {
            c.fd[d] ? delete c.fd[d] : a();
          })
          .catch(rf);
        return d;
      }
      return this.win.setTimeout(function() {
        try {
          a();
        } catch (e) {
          throw (rf(e), e);
        }
      }, b);
    };
    f.cancel = function(a) {
      "string" == typeof a ? (this.fd[a] = !0) : this.win.clearTimeout(a);
    };
    f.promise = function(a) {
      var b = this;
      return new this.win.Promise(function(c) {
        var d = b.delay(c, a);
        if (-1 == d) throw Error("Failed to schedule timer.");
      });
    };
    f.timeoutPromise = function(a, b, c) {
      function d() {
        e.cancel(g);
      }
      var e = this,
        g,
        h = new this.win.Promise(function(b, d) {
          g = e.delay(function() {
            d(z().createError(c || "timeout"));
          }, a);
          if (-1 == g) throw Error("Failed to schedule timer.");
        });
      if (!b) return h;
      b.then(d, d);
      return this.win.Promise.race([h, b]);
    };
    f.poll = function(a, b) {
      var c = this;
      return new this.win.Promise(function(d) {
        var e = c.win.setInterval(function() {
          b() && (c.win.clearInterval(e), d());
        }, a);
      });
    };
    function Qj(a, b) {
      a = b || a.getRootNode();
      this.jg = (a.ownerDocument || a).createElement("a");
      this.Oa = new Fc();
    }
    Qj.installInEmbedWindow = function(a, b) {
      ld(a, "url", new Qj(b, a.document));
    };
    f = Qj.prototype;
    f.parse = function(a, b) {
      return Pc(this.jg, a, b ? null : this.Oa);
    };
    function Rj(a, b) {
      return "string" !== typeof b ? b : a.parse(b);
    }
    f.isProtocolValid = function(a) {
      return Wc(a);
    };
    f.getSourceOrigin = function(a) {
      return $c(Rj(this, a));
    };
    f.getSourceUrl = function(a) {
      return Zc(Rj(this, a));
    };
    f.assertHttpsUrl = function(a, b, c) {
      return Uc(a, b, void 0 === c ? "source" : c);
    };
    f.assertAbsoluteHttpOrHttpsUrl = function(a) {
      D(
        /^https?:/i.test(a),
        'URL must start with "http://" or "https://". Invalid value: %s',
        a
      );
      return O(a).href;
    };
    f.isProxyOrigin = function(a) {
      return P(Rj(this, a));
    };
    f.isSecure = function(a) {
      return Tc(Rj(this, a));
    };
    f.getWinOrigin = function(a) {
      return a.origin || Rj(this, a.location.href).origin;
    };
    f.getCdnUrlOnOrigin = function(a) {
      if (P(a)) return a;
      var b = Rj(this, a),
        c = b.host,
        d = b.hash,
        e = b.pathname;
      b = b.search;
      var g = encodeURIComponent(c);
      return Oa.cdn + "/c/" + g + e + b + d;
    };
    var Sj = {
      navigationStart: 1,
      redirectStart: 1,
      redirectEnd: 1,
      fetchStart: 1,
      domainLookupStart: 1,
      domainLookupEnd: 1,
      connectStart: 1,
      secureConnectionStart: 1,
      connectEnd: 1,
      requestStart: 1,
      responseStart: 1,
      responseEnd: 1,
      domLoading: 2,
      domInteractive: 2,
      domContentLoaded: 2,
      domComplete: 2,
      loadEventStart: 3,
      loadEventEnd: 4
    };
    function Tj(a, b, c) {
      var d = Sj[b] || 3,
        e = c ? Sj[c] || 3 : d,
        g = Math.max(d, e);
      if (1 === g) var h = Promise.resolve();
      else if (2 === g) h = ye(a.document);
      else if (3 === g) h = se(a);
      else if (4 === g) {
        var k = V(a);
        h = se(a).then(function() {
          return k.promise(1);
        });
      }
      return h.then(function() {
        return Uj(a, b, c);
      });
    }
    function Uj(a, b, c) {
      var d = a.performance && a.performance.timing;
      if (d && 0 != d.navigationStart) {
        var e = void 0 === c ? d[b] : d[c] - d[b];
        if (La(e) && !(0 > e)) return e;
      }
    }
    function Vj(a, b) {
      var c = a.performance && a.performance.navigation;
      if (c && void 0 !== c[b]) return c[b];
    }
    function Wj(a) {
      this.ampdoc = a;
      this.ya = Object.create(null);
      this.Ad = !1;
      Xj(this);
    }
    f = Wj.prototype;
    f.dc = function() {
      this.initialize();
      this.Ad = !0;
    };
    f.initialize = function() {};
    f.get = function(a) {
      this.Ad || this.dc();
      return this.ya[a];
    };
    f.set = function(a, b) {
      a.indexOf("RETURN");
      this.ya[a] = this.ya[a] || { sync: void 0, async: void 0 };
      this.ya[a].sync = b;
      return this;
    };
    f.setAsync = function(a, b) {
      a.indexOf("RETURN");
      this.ya[a] = this.ya[a] || { sync: void 0, async: void 0 };
      this.ya[a].async = b;
      return this;
    };
    f.setBoth = function(a, b, c) {
      return this.set(a, b).setAsync(a, c);
    };
    f.getExpr = function(a, b) {
      this.Ad || this.dc();
      var c = Object.assign({}, this.ya, a);
      return Yj(this, Object.keys(c), b);
    };
    function Yj(a, b, c) {
      Xj(a) &&
        (b = b.filter(function(b) {
          return Xj(a).includes(b);
        }));
      c &&
        (b = b.filter(function(a) {
          return c[a];
        }));
      if (0 === b.length) {
        var d = /_^/g;
        return d;
      }
      b.sort(function(a, b) {
        return b.length - a.length;
      });
      var e =
        "\\$?(" +
        b
          .map(function(a) {
            return "$" === a[0] ? "\\" + a : a;
          })
          .join("|") +
        ")";
      return new RegExp(e, "g");
    }
    function Xj(a) {
      if (a.me) return a.me;
      var b = a.ampdoc.getRootNode().head;
      if (!b) return null;
      b = b.querySelector('meta[name="amp-allowed-url-macros"]');
      if (!b) return null;
      a.me = b
        .getAttribute("content")
        .split(",")
        .map(function(a) {
          return a.trim();
        });
      return a.me;
    }
    var Zj = { ANCESTOR_ORIGIN: !0 };
    function ak(a, b, c, d, e, g) {
      this.$ = a;
      this.bb = b;
      this.Qe = c;
      this.Xa = d;
      this.gg = e;
      this.Ag = !g;
    }
    ak.prototype.expand = function(a) {
      if (!a.length) return this.Xa ? a : Promise.resolve(a);
      var b = this.$.getExpr(this.bb, this.gg);
      b = bk(a, b);
      return b.length ? ck(this, a, b) : this.Xa ? a : Promise.resolve(a);
    };
    ak.prototype.getMacroNames = function(a) {
      var b = this.$.getExpr(this.bb, this.gg);
      return (a = a.match(b)) ? a : [];
    };
    function bk(a, b) {
      var c = [];
      a.replace(b, function(a, b, g) {
        a = a.length;
        var d = a + g - 1;
        c.push({ start: g, stop: d, name: b, length: a });
      });
      return c;
    }
    function ck(a, b, c) {
      function d(r) {
        for (var t = "", v = [], y = []; g < b.length && h <= c.length; ) {
          if (k && g === k.start) {
            t.trim().length && v.push(l ? ob(t) : t);
            var x = void 0;
            x =
              a.bb && ib.call(a.bb, k.name)
                ? { name: k.name, prioritized: a.bb[k.name], encode: r }
                : Object.assign({}, a.$.get(k.name), {
                    name: k.name,
                    encode: r
                  });
            g = k.stop + 1;
            k = c[++h];
            "(" === b[g]
              ? (g++, l++, e.push(x), v.push(d(!1)))
              : v.push(dk(a, x));
            t = "";
          } else {
            if ("`" === b[g])
              m
                ? (m = !1)
                : ((n = m = !0),
                  D(
                    "" === t.trim(),
                    'The substring "' +
                      t +
                      '" was lost during url-replacement. Please ensure the url syntax is correct'
                  ),
                  (t = ""));
            else if (l && "," === b[g] && !m) {
              if (t.length) {
                var A = n ? t : t.trim();
                v.push(A);
                n = !1;
              }
              y.push(v);
              v = [];
              "," === b[g + 1] && (y.push([""]), g++);
              t = "";
            } else {
              if (l && ")" === b[g] && !m) {
                g++;
                l--;
                x = e.pop();
                var J = n ? t : t.trim();
                J && v.push(J);
                y.push(v);
                n = !1;
                return dk(a, x, y);
              }
              t += b[g];
            }
            g++;
          }
          g === b.length && t.length && v.push(t);
        }
        return a.Xa
          ? v.join("")
          : Promise.all(v)
              .then(function(a) {
                return a.join("");
              })
              .catch(function(a) {
                eb(a);
                return "";
              });
      }
      var e = [],
        g = 0,
        h = 0,
        k = c[h],
        l = 0,
        m = !1,
        n = !1;
      return d(a.Ag);
    }
    function dk(a, b, c) {
      var d = b,
        e = d.encode;
      d = d.name;
      if (void 0 != b.prioritized) var g = b.prioritized;
      else
        a.Xa && void 0 != b.sync
          ? (g = b.sync)
          : a.Xa
          ? (z().error("Expander", "ignoring async replacement key: ", b.name),
            (g = ""))
          : (g = b.async || b.sync);
      var h = e && !Zj[d];
      return a.Xa
        ? ((a = ek(a, g, d, c)), h ? encodeURIComponent(a) : a)
        : fk(a, g, d, c).then(function(a) {
            return h ? encodeURIComponent(a) : a;
          });
    }
    function fk(a, b, c, d) {
      try {
        var e =
          "function" === typeof b
            ? d
              ? gk(d).then(function(a) {
                  return b.apply(null, a);
                })
              : K(b)
            : Promise.resolve(b);
        return e
          .then(function(b) {
            hk(a, c, b, d);
            return null == b ? "" : b;
          })
          .catch(function(b) {
            eb(b);
            hk(a, c, "", d);
            return Promise.resolve("");
          });
      } catch (g) {
        return eb(g), hk(a, c, "", d), Promise.resolve("");
      }
    }
    function gk(a) {
      return Promise.all(
        a.map(function(a) {
          return Promise.all(a).then(function(a) {
            return a.join("");
          });
        })
      );
    }
    function ek(a, b, c, d) {
      try {
        var e = b;
        "function" === typeof b && (e = b.apply(null, ik(d)));
        if (e && e.then) {
          z().error("Expander", "ignoring async macro resolution");
          var g = "";
        } else
          "string" === typeof e ||
          "number" === typeof e ||
          "boolean" === typeof e
            ? (hk(a, c, e, d), (g = e.toString()))
            : (hk(a, c, "", d), (g = ""));
        return g;
      } catch (h) {
        return eb(h), hk(a, c, "", d), "";
      }
    }
    function ik(a) {
      return a
        ? a.map(function(a) {
            return a.join("");
          })
        : a;
    }
    function hk(a, b, c, d) {
      if (a.Qe) {
        var e = "";
        if (d) {
          var g = d
            .filter(function(a) {
              return "" !== a;
            })
            .join(",");
          e = "(" + g + ")";
        }
        a.Qe["" + b + e] = c || "";
      }
    }
    function jk(a) {
      return function() {
        return new Date()[a]();
      };
    }
    function kk(a, b) {
      return function() {
        return a[b];
      };
    }
    function lk(a) {
      Wj.call(this, a);
      this.ee = null;
    }
    p(lk, Wj);
    function mk(a, b, c, d) {
      a.setBoth(
        b,
        function() {
          return Uj(a.ampdoc.win, c, d);
        },
        function() {
          return Tj(a.ampdoc.win, c, d);
        }
      );
    }
    lk.prototype.initialize = function() {
      function a() {
        var a = nk(b);
        return Vc(ok(b, a.sourceUrl));
      }
      var b = this,
        c = this.ampdoc.win,
        d = this.ampdoc.getHeadNode(),
        e = Ld(this.ampdoc);
      this.set("RANDOM", function() {
        return Math.random();
      });
      var g = Object.create(null);
      this.set("COUNTER", function(a) {
        return (g[a] = (g[a] | 0) + 1);
      });
      this.set("CANONICAL_URL", function() {
        return nk(b).canonicalUrl;
      });
      this.set("CANONICAL_HOST", function() {
        return O(nk(b).canonicalUrl).host;
      });
      this.set("CANONICAL_HOSTNAME", function() {
        return O(nk(b).canonicalUrl).hostname;
      });
      this.set("CANONICAL_PATH", function() {
        return O(nk(b).canonicalUrl).pathname;
      });
      this.setAsync("DOCUMENT_REFERRER", function() {
        return W(b.ampdoc).getReferrerUrl();
      });
      this.setAsync("EXTERNAL_REFERRER", function() {
        return W(b.ampdoc)
          .getReferrerUrl()
          .then(function(a) {
            if (!a) return null;
            var b = O(Zc(a)).hostname,
              d = c.location.hostname;
            return b === d ? null : a;
          });
      });
      this.set("TITLE", function() {
        var a = c.document;
        return a.originalTitle || a.title;
      });
      this.set("AMPDOC_URL", function() {
        return Vc(ok(b, c.location.href));
      });
      this.set("AMPDOC_HOST", function() {
        var a = O(c.location.href);
        return a && a.host;
      });
      this.set("AMPDOC_HOSTNAME", function() {
        var a = O(c.location.href);
        return a && a.hostname;
      });
      this.setBoth(
        "SOURCE_URL",
        function() {
          return a();
        },
        function() {
          return hh().then(function() {
            return a();
          });
        }
      );
      this.set("SOURCE_HOST", function() {
        return O(nk(b).sourceUrl).host;
      });
      this.set("SOURCE_HOSTNAME", function() {
        return O(nk(b).sourceUrl).hostname;
      });
      this.set("SOURCE_PATH", function() {
        return O(nk(b).sourceUrl).pathname;
      });
      this.set("PAGE_VIEW_ID", function() {
        return nk(b).pageViewId;
      });
      this.setAsync("PAGE_VIEW_ID_64", function() {
        return nk(b).pageViewId64;
      });
      this.setBoth(
        "QUERY_PARAM",
        function(a, c) {
          return pk(b, a, void 0 === c ? "" : c);
        },
        function(a, c) {
          c = void 0 === c ? "" : c;
          return hh().then(function() {
            return pk(b, a, c);
          });
        }
      );
      this.set("FRAGMENT_PARAM", function(a, c) {
        c = void 0 === c ? "" : c;
        D(
          a,
          "The first argument to FRAGMENT_PARAM, the fragment string param is required"
        );
        D("string" == typeof a, "param should be a string");
        var d = q(b.ampdoc.win.location.originalHash);
        return void 0 === d[a] ? c : d[a];
      });
      this.setAsync("ANCESTOR_ORIGIN", qk(this));
      var h = null;
      this.setBoth(
        "CLIENT_ID",
        function(a) {
          return h ? h[a] : null;
        },
        function(a, c, e) {
          D(
            a,
            "The first argument to CLIENT_ID, the fallback Cookie name, is required"
          );
          var g = Promise.resolve();
          c &&
            (g = yd(d, "userNotificationManager", "amp-user-notification").then(
              function(a) {
                return a.get(c);
              }
            ));
          return td(R(b.ampdoc), "cid")
            .then(function(b) {
              return b.get(
                { scope: a, createCookieIfNotPresent: !0, cookieName: e },
                g
              );
            })
            .then(function(b) {
              h || (h = Object.create(null));
              var c = e || a;
              b &&
                "_ga" == c &&
                ("string" === typeof b
                  ? (b = b.replace(/^(GA1|1)\.[\d-]+\./, ""))
                  : C().error(
                      "UrlReplacements",
                      "non-string cid, what is it?",
                      Object.keys(b)
                    ));
              return (h[a] = b);
            });
        }
      );
      this.setAsync("VARIANT", function(a) {
        return rk(
          b,
          function(b) {
            var c = b[a];
            D(
              void 0 !== c,
              "The value passed to VARIANT() is not a valid experiment name:" +
                a
            );
            return null === c ? "none" : c;
          },
          "VARIANT"
        );
      });
      this.setAsync("VARIANTS", function() {
        return rk(
          b,
          function(a) {
            var b = [],
              c;
            for (c in a) b.push(c + "." + (a[c] || "none"));
            return b.join("!");
          },
          "VARIANTS"
        );
      });
      this.setAsync("AMP_GEO", function(a) {
        return sk(b, function(b) {
          return a
            ? (D(
                "ISOCountry" === a,
                "The value passed to AMP_GEO() is not valid name:" + a
              ),
              b[a] || "unknown")
            : b.matchedISOCountryGroups.join(",");
        });
      });
      this.setAsync("AMP_USER_LOCATION", function(a) {
        return tk(
          b,
          function(b) {
            return b.getReplacementLocation("AMP_USER_LOCATION", a);
          },
          "AMP_USER_LOCATION"
        );
      });
      this.setAsync("AMP_USER_LOCATION_POLL", function(a) {
        return tk(
          b,
          function(b) {
            return b.getReplacementLocation("AMP_USER_LOCATION_POLL", a, !0);
          },
          "AMP_USER_LOCATION_POLL"
        );
      });
      this.setAsync("SHARE_TRACKING_INCOMING", function() {
        return uk(
          b,
          function(a) {
            return a.incomingFragment;
          },
          "SHARE_TRACKING_INCOMING"
        );
      });
      this.setAsync("SHARE_TRACKING_OUTGOING", function() {
        return uk(
          b,
          function(a) {
            return a.outgoingFragment;
          },
          "SHARE_TRACKING_OUTGOING"
        );
      });
      this.set("TIMESTAMP", jk("getTime"));
      this.set("TIMESTAMP_ISO", jk("toISOString"));
      this.set("TIMEZONE", jk("getTimezoneOffset"));
      this.set("TIMEZONE_CODE", function() {
        if ("Intl" in c && "DateTimeFormat" in c.Intl)
          var a = new Intl.DateTimeFormat().resolvedOptions().timeZone;
        return a || "";
      });
      this.set("SCROLL_TOP", function() {
        return e.getScrollTop();
      });
      this.set("SCROLL_LEFT", function() {
        return e.getScrollLeft();
      });
      this.set("SCROLL_HEIGHT", function() {
        return e.getScrollHeight();
      });
      this.set("SCROLL_WIDTH", function() {
        return e.getScrollWidth();
      });
      this.set("VIEWPORT_HEIGHT", function() {
        return e.getHeight();
      });
      this.set("VIEWPORT_WIDTH", function() {
        return e.getWidth();
      });
      var k = c.screen;
      this.set("SCREEN_WIDTH", kk(k, "width"));
      this.set("SCREEN_HEIGHT", kk(k, "height"));
      this.set("AVAILABLE_SCREEN_HEIGHT", kk(k, "availHeight"));
      this.set("AVAILABLE_SCREEN_WIDTH", kk(k, "availWidth"));
      this.set("SCREEN_COLOR_DEPTH", kk(k, "colorDepth"));
      this.set("DOCUMENT_CHARSET", function() {
        var a = c.document;
        return a.characterSet || a.charset;
      });
      this.set("BROWSER_LANGUAGE", function() {
        var a = c.navigator;
        return (
          a.language ||
          a.userLanguage ||
          a.browserLanguage ||
          ""
        ).toLowerCase();
      });
      this.set("USER_AGENT", function() {
        return c.navigator.userAgent;
      });
      mk(this, "PAGE_LOAD_TIME", "navigationStart", "loadEventStart");
      mk(this, "DOMAIN_LOOKUP_TIME", "domainLookupStart", "domainLookupEnd");
      mk(this, "TCP_CONNECT_TIME", "connectStart", "connectEnd");
      mk(this, "SERVER_RESPONSE_TIME", "requestStart", "responseStart");
      mk(this, "PAGE_DOWNLOAD_TIME", "responseStart", "responseEnd");
      mk(this, "REDIRECT_TIME", "navigationStart", "fetchStart");
      mk(this, "DOM_INTERACTIVE_TIME", "navigationStart", "domInteractive");
      mk(
        this,
        "CONTENT_LOAD_TIME",
        "navigationStart",
        "domContentLoadedEventStart"
      );
      this.setAsync("ACCESS_READER_ID", function() {
        return vk(
          b,
          function(a) {
            return a.getAccessReaderId();
          },
          "ACCESS_READER_ID"
        );
      });
      this.setAsync("AUTHDATA", function(a) {
        D(a, "The first argument to AUTHDATA, the field, is required");
        return vk(
          b,
          function(b) {
            return b.getAuthdataField(a);
          },
          "AUTHDATA"
        );
      });
      this.setAsync("VIEWER", function() {
        return W(b.ampdoc)
          .getViewerOrigin()
          .then(function(a) {
            return void 0 == a ? "" : a;
          });
      });
      this.setAsync("TOTAL_ENGAGED_TIME", function() {
        return yd(d, "activity", "amp-analytics").then(function(a) {
          return a.getTotalEngagedTime();
        });
      });
      this.setAsync("INCREMENTAL_ENGAGED_TIME", function(a, b) {
        return yd(d, "activity", "amp-analytics").then(function(c) {
          return c.getIncrementalEngagedTime(a, "false" !== b);
        });
      });
      this.set("NAV_TIMING", function(a, b) {
        D(
          a,
          "The first argument to NAV_TIMING, the start attribute name, is required"
        );
        return Uj(c, a, b);
      });
      this.setAsync("NAV_TIMING", function(a, b) {
        D(
          a,
          "The first argument to NAV_TIMING, the start attribute name, is required"
        );
        return Tj(c, a, b);
      });
      this.set("NAV_TYPE", function() {
        return Vj(c, "type");
      });
      this.set("NAV_REDIRECT_COUNT", function() {
        return Vj(c, "redirectCount");
      });
      this.set("AMP_VERSION", function() {
        return "1910302211460";
      });
      this.set("BACKGROUND_STATE", function() {
        return b.ampdoc.isVisible() ? "0" : "1";
      });
      this.setAsync("VIDEO_STATE", function(a, c) {
        var d = b.ampdoc.getRootNode(),
          e = z().assertElement(
            d.getElementById(a),
            'Could not find an element with id="' + a + '" for VIDEO_STATE'
          );
        return od(b.ampdoc, "video-manager")
          .getAnalyticsDetails(e)
          .then(function(a) {
            return a ? a[c] : "";
          });
      });
      this.setAsync(
        "STORY_PAGE_INDEX",
        wk(this, "pageIndex", "STORY_PAGE_INDEX")
      );
      this.setAsync("STORY_PAGE_ID", wk(this, "pageId", "STORY_PAGE_ID"));
      this.setAsync("FIRST_CONTENTFUL_PAINT", function() {
        return K(function() {
          return Hd(c).getFirstContentfulPaint();
        });
      });
      this.setAsync("FIRST_VIEWPORT_READY", function() {
        return K(function() {
          return Hd(c).getFirstViewportReady();
        });
      });
      this.setAsync("MAKE_BODY_VISIBLE", function() {
        return K(function() {
          return Hd(c).getMakeBodyVisible();
        });
      });
      this.setAsync("AMP_STATE", function(a) {
        var c = b.ampdoc.getRootNode();
        return Bd(c.documentElement || c).then(function(b) {
          return b ? b.getStateValue(a) : "";
        });
      });
    };
    function ok(a, b) {
      if ((a = nk(a).replaceParams)) {
        var c = Xc(b),
          d = O(c);
        d = q(d.search);
        for (var e = G({}), g = Object.keys(a), h = 0; h < g.length; h++)
          ib.call(d, g[h]) || (e[g[h]] = a[g[h]]);
        a = Rc(c, e);
      } else a = b;
      return a;
    }
    function nk(a) {
      return Fd(a.ampdoc);
    }
    function vk(a, b, c) {
      a = a.ampdoc.getHeadNode();
      return Promise.all([
        zd(a, "access", "amp-access"),
        zd(a, "subscriptions", "amp-subscriptions")
      ]).then(function(a) {
        a = a[0] || a[1];
        return a
          ? b(a)
          : (z().error(
              "UrlReplacements",
              "Access or subsciptions service is not installed to access: ",
              c
            ),
            null);
      });
    }
    function pk(a, b, c) {
      D(
        b,
        "The first argument to QUERY_PARAM, the query string param is required"
      );
      var d = O(Xc(a.ampdoc.win.location.href));
      d = q(d.search);
      a = nk(a).replaceParams;
      return "undefined" !== typeof d[b]
        ? d[b]
        : a && "undefined" !== typeof a[b]
        ? a[b]
        : c;
    }
    function rk(a, b, c) {
      return zd(a.ampdoc.getHeadNode(), "variant", "amp-experiment", !0)
        .then(function(a) {
          D(a, "To use variable %s, amp-experiment should be configured", c);
          return a.getVariants();
        })
        .then(function(a) {
          return b(a);
        });
    }
    function sk(a, b) {
      a = a.ampdoc.getHeadNode();
      return zd(a, "geo", "amp-geo", !0).then(function(a) {
        D(a, "To use variable %s, amp-geo should be configured", "AMP_GEO");
        return b(a);
      });
    }
    function tk(a, b, c) {
      a = a.ampdoc.getHeadNode();
      return zd(a, "user-location", "amp-user-location", !0).then(function(a) {
        D(a, "To use variable %s, amp-user-location should be configured", c);
        return b(a);
      });
    }
    function uk(a, b, c) {
      a.ee || (a.ee = wd(a.ampdoc.win, "share-tracking", "amp-share-tracking"));
      return a.ee.then(function(a) {
        D(a, "To use variable %s, amp-share-tracking should be configured", c);
        return b(a);
      });
    }
    function wk(a, b, c) {
      return function() {
        return wd(a.ampdoc.win, "story-variable", "amp-story").then(function(
          a
        ) {
          D(a, "To use variable %s amp-story should be configured", c);
          return a[b];
        });
      };
    }
    function qk(a) {
      return function(b, c) {
        c = void 0 === c ? "" : c;
        return wd(
          a.ampdoc.win,
          "viewer-integration-variable",
          "amp-viewer-integration"
        ).then(function(a) {
          D(
            a,
            "To use variable %s amp-viewer-integration must be installed",
            "ANCESTOR_ORIGIN"
          );
          return a.ancestorOrigin(b, c);
        });
      };
    }
    function xk(a, b) {
      this.ampdoc = a;
      this.$ = b;
    }
    f = xk.prototype;
    f.expandStringSync = function(a, b, c, d) {
      return new ak(this.$, b, c, !0, d, !0).expand(a);
    };
    f.expandStringAsync = function(a, b, c) {
      return new ak(this.$, b, void 0, void 0, c, !0).expand(a);
    };
    f.expandUrlSync = function(a, b, c, d) {
      return yk(a, new ak(this.$, b, c, !0, d).expand(a));
    };
    f.expandUrlAsync = function(a, b, c, d) {
      return new ak(this.$, b, void 0, void 0, c, d)
        .expand(a)
        .then(function(b) {
          return yk(a, b);
        });
    };
    f.expandInputValueAsync = function(a) {
      return zk(this, a, !1);
    };
    f.expandInputValueSync = function(a) {
      return zk(this, a, !0);
    };
    function zk(a, b, c) {
      "INPUT" == b.tagName && (b.getAttribute("type") || "").toLowerCase();
      var d = Ak(b);
      if (!d) return c ? b.value : Promise.resolve(b.value);
      void 0 === b["amp-original-value"] && (b["amp-original-value"] = b.value);
      a = new ak(a.$, void 0, void 0, c, d).expand(
        b["amp-original-value"] || b.value
      );
      return c
        ? (b.value = a)
        : a.then(function(a) {
            return (b.value = a);
          });
    }
    function Ak(a, b) {
      if ((a = a.getAttribute("data-amp-replace"))) {
        var c = {};
        a.trim()
          .split(/\s+/)
          .forEach(function(a) {
            !b || ib.call(b, a)
              ? (c[a] = !0)
              : z().warn("URL", "Ignoring unsupported replacement", a);
          });
        return c;
      }
    }
    f.maybeExpandLink = function(a, b) {
      var c = {
          CLIENT_ID: !0,
          QUERY_PARAM: !0,
          PAGE_VIEW_ID: !0,
          PAGE_VIEW_ID_64: !0,
          NAV_TIMING: !0
        },
        d = a.getAttribute("data-amp-addparams") || "",
        e = Ak(a, c);
      if (e || d || b) {
        var g = a["amp-original-href"] || a.getAttribute("href"),
          h = O(g);
        null == a["amp-original-href"] && (a["amp-original-href"] = g);
        d && (g = Rc(g, q(d)));
        a: {
          var k = Fd(this.ampdoc);
          if (
            h.origin == O(k.canonicalUrl).origin ||
            h.origin == O(k.sourceUrl).origin
          )
            h = !0;
          else {
            if (
              (k = this.ampdoc
                .getRootNode()
                .querySelector(
                  "meta[name=amp-link-variable-allowed-origin]"
                )) &&
              k.hasAttribute("content")
            ) {
              k = k
                .getAttribute("content")
                .trim()
                .split(/\s+/);
              for (var l = 0; l < k.length; l++)
                if (h.origin == O(k[l]).origin) {
                  h = !0;
                  break a;
                }
            }
            h = !1;
          }
        }
        var m = h;
        if (!m)
          return (
            e &&
              z().warn(
                "URL",
                "Ignoring link replacement %s because the link does not go to the document's source, canonical, or whitelisted origin.",
                g
              ),
            (a.href = g)
          );
        if (b) {
          if (!e || !e.QUERY_PARAM) {
            var n = { QUERY_PARAM: !0 };
            b = this.expandUrlSync(b, void 0, void 0, n);
          }
          g = Rc(g, q(b));
        }
        e && (g = this.expandUrlSync(g, void 0, void 0, e));
        return (a.href = g);
      }
    };
    f.collectVars = function(a, b) {
      var c = Object.create(null);
      return new ak(this.$, b, c).expand(a).then(function() {
        return c;
      });
    };
    f.collectUnwhitelistedVarsSync = function(a) {
      var b = a.getAttribute("src"),
        c = new ak(this.$).getMacroNames(b),
        d = Ak(a);
      return d
        ? c.filter(function(a) {
            return !d[a];
          })
        : c;
    };
    function yk(a, b) {
      var c = O(b, !0).protocol,
        d = O(a, !0).protocol;
      if (c != d)
        return (
          z().error(
            "UrlReplacements",
            "Illegal replacement of the protocol: ",
            a
          ),
          a
        );
      D(Wc(b), "The replacement url has invalid protocol: %s", b);
      return b;
    }
    f.getVariableSource = function() {
      return this.$;
    };
    function Bk(a) {
      T(a, "url-replace", function(a) {
        return new xk(a, new lk(a));
      });
    }
    var Ck = /^(https?:\/\/)((www[0-9]*|web|ftp|wap|home|mobile|amp|m)\.)+/i;
    function Dk(a) {
      var b = this;
      this.ampdoc = a;
      this.win = a.win;
      this.rb = Hb(this.win);
      this.oa = !0;
      this.Vd = !1;
      this.xa = 1;
      this.Pd = E();
      this.oc = E();
      this.Lf = new Y();
      this.Ie = new Y();
      this.qc = this.Ta = null;
      this.Ua = [];
      this.ob = E();
      a.isSingleDoc() && Object.assign(this.ob, q(this.win.location.hash));
      this.oa = !parseInt(a.getParam("off"), 10);
      this.Vd = !(!parseInt(a.getParam("history"), 10) && !this.Vd);
      this.xa = parseInt(a.getParam("prerenderSize"), 10) || this.xa;
      this.qb = null;
      this.Tg = P(O(this.ampdoc.win.location.href));
      var c = new I();
      this.Zg = c.resolve;
      this.Fa = Ek(this, c.promise);
      this.ne = this.Hd = null;
      var d = a.getParam("referrer");
      this.Nc =
        this.isEmbedded() && null != d && !1 !== Fk(this)
          ? d
          : this.win.document.referrer;
      this.nh = new Promise(function(c) {
        b.isEmbedded() && null != a.getParam("referrer")
          ? b.isTrustedViewer().then(function(d) {
              d
                ? c(a.getParam("referrer"))
                : (c(b.win.document.referrer),
                  b.Nc != b.win.document.referrer &&
                    (C().expectedError(
                      "Viewer",
                      "Untrusted viewer referrer override: " +
                        b.Nc +
                        " at " +
                        b.qc
                    ),
                    (b.Nc = b.win.document.referrer)));
            })
          : c(b.win.document.referrer);
      });
      this.Ec = Vc(this.win.location.href || "");
      this.Kh = new Promise(function(c) {
        var d = a.getParam("viewerUrl");
        b.isEmbedded() && d
          ? b.isTrustedViewer().then(function(a) {
              a
                ? (b.Ec = d)
                : C().expectedError(
                    "Viewer",
                    "Untrusted viewer url override: " + d + " at " + b.qc
                  );
              c(b.Ec);
            })
          : c(b.Ec);
      });
      if (this.ob.click) {
        var e = Vc(this.win.location.href);
        e != this.win.location.href &&
          this.win.history.replaceState &&
          (this.win.location.originalHash ||
            (this.win.location.originalHash = this.win.location.hash),
          this.win.history.replaceState({}, "", e),
          delete this.ob.click);
      }
      this.ampdoc.whenFirstVisible().then(function() {
        b.maybeUpdateFragmentForCct();
      });
    }
    function Ek(a, b) {
      var c = !(
        !(
          (a.rb &&
            !a.win.__AMP_TEST_IFRAME &&
            (a.ampdoc.getParam("origin") ||
              a.ampdoc.getParam("visibilityState") ||
              -1 != a.win.location.search.indexOf("amp_js_v"))) ||
          a.isWebviewEmbedded() ||
          a.isCctEmbedded()
        ) && a.ampdoc.isSingleDoc()
      );
      return c
        ? V(a.win)
            .timeoutPromise(2e4, b, "initMessagingChannel")
            .catch(function(a) {
              a = Gk(a);
              rf(a);
              throw a;
            })
        : null;
    }
    f = Dk.prototype;
    f.getAmpDoc = function() {
      return this.ampdoc;
    };
    f.getParam = function(a) {
      return this.ampdoc.getParam(a);
    };
    f.hasCapability = function(a) {
      var b = this.ampdoc.getParam("cap");
      return b ? -1 != b.split(",").indexOf(a) : !1;
    };
    f.isEmbedded = function() {
      return !!this.Fa;
    };
    f.isWebviewEmbedded = function() {
      return !this.rb && "1" == this.ampdoc.getParam("webview");
    };
    f.isCctEmbedded = function() {
      if (null != this.qb) return this.qb;
      this.qb = !1;
      if (!this.rb) {
        var a = q(this.win.location.search);
        this.qb = "1" === a.amp_gsa && L(a.amp_js_v || "", "a");
      }
      return this.qb;
    };
    f.isProxyOrigin = function() {
      return this.Tg;
    };
    f.maybeUpdateFragmentForCct = function() {
      if (this.isCctEmbedded() && this.win.history.replaceState) {
        var a = $c(this.win.location.href),
          b = Fd(this.ampdoc).canonicalUrl,
          c = $c(b);
        Hk(a, c) &&
          ((this.ob.ampshare = b),
          this.win.history.replaceState({}, "", "#" + Sc(this.ob)));
      }
    };
    function Hk(a, b) {
      function c(a) {
        return 2 < a.split(".").length ? a.replace(Ck, "$1") : a;
      }
      return c(a) == c(b);
    }
    f.isRuntimeOn = function() {
      return this.oa;
    };
    f.toggleRuntime = function() {
      this.oa = !this.oa;
      this.Lf.fire(this.oa);
    };
    f.onRuntimeState = function(a) {
      return this.Lf.add(a);
    };
    f.isOvertakeHistory = function() {
      return this.Vd;
    };
    f.getVisibilityState = function() {
      return this.ampdoc.getVisibilityState();
    };
    f.isVisible = function() {
      return this.ampdoc.isVisible();
    };
    f.hasBeenVisible = function() {
      return this.ampdoc.hasBeenVisible();
    };
    f.whenFirstVisible = function() {
      return this.ampdoc.whenFirstVisible();
    };
    f.whenNextVisible = function() {
      return this.ampdoc.whenNextVisible();
    };
    f.getFirstVisibleTime = function() {
      return this.ampdoc.getFirstVisibleTime();
    };
    f.getLastVisibleTime = function() {
      return this.ampdoc.getLastVisibleTime();
    };
    f.onVisibilityChanged = function(a) {
      return this.ampdoc.onVisibilityChanged(a);
    };
    f.getPrerenderSize = function() {
      return this.xa;
    };
    f.getResolvedViewerUrl = function() {
      return this.Ec;
    };
    f.getViewerUrl = function() {
      return this.Kh;
    };
    f.maybeGetMessagingOrigin = function() {
      return this.qc;
    };
    f.getUnconfirmedReferrerUrl = function() {
      return this.Nc;
    };
    f.getReferrerUrl = function() {
      return this.nh;
    };
    f.isTrustedViewer = function() {
      if (!this.Hd) {
        var a = Fk(this);
        this.Hd =
          void 0 !== a
            ? Promise.resolve(a)
            : this.Fa.then(function(a) {
                return a ? Ik(a) : !1;
              });
      }
      return this.Hd;
    };
    function Fk(a) {
      if (!a.isEmbedded()) return !1;
      if (
        a.win.location.ancestorOrigins &&
        !a.isWebviewEmbedded() &&
        !a.isCctEmbedded()
      )
        return (
          0 < a.win.location.ancestorOrigins.length &&
          Ik(a.win.location.ancestorOrigins[0])
        );
    }
    f.getViewerOrigin = function() {
      if (!this.ne) {
        var a;
        this.isEmbedded()
          ? this.win.location.ancestorOrigins &&
            0 < this.win.location.ancestorOrigins.length &&
            (a = this.win.location.ancestorOrigins[0])
          : (a = "");
        this.ne =
          void 0 !== a
            ? Promise.resolve(a)
            : V(this.win)
                .timeoutPromise(1e3, this.Fa)
                .catch(function() {
                  return "";
                });
      }
      return this.ne;
    };
    function Ik(a) {
      var b = O(a);
      a = b.protocol;
      return "x-thread:" == a
        ? !0
        : "https:" != a
        ? !1
        : Oa.trustedViewerHosts.some(function(a) {
            return a.test(b.hostname);
          });
    }
    f.onMessage = function(a, b) {
      var c = this.Pd[a];
      c || ((c = new Y()), (this.Pd[a] = c));
      return c.add(b);
    };
    f.onMessageRespond = function(a, b) {
      var c = this;
      this.oc[a] = b;
      return function() {
        c.oc[a] === b && delete c.oc[a];
      };
    };
    f.receiveMessage = function(a, b) {
      if ("visibilitychange" == a) {
        void 0 !== b.prerenderSize && (this.xa = b.prerenderSize);
        if ((b = b.state))
          (b = C().assertEnumValue(Oe, b, "VisibilityState")),
            "hidden" === b &&
              (b =
                null != this.ampdoc.getLastVisibleTime()
                  ? "inactive"
                  : "prerender"),
            this.ampdoc.overrideVisibilityState(b);
        return Promise.resolve();
      }
      if ("broadcast" == a) return this.Ie.fire(b), Promise.resolve();
      var c = this.Pd[a];
      c && c.fire(b);
      if ((a = this.oc[a])) return a(b);
      if (c) return Promise.resolve();
    };
    f.setMessageDeliverer = function(a, b) {
      var c = this;
      if (this.Ta) throw Error("message channel can only be initialized once");
      if (null == b) throw Error("message channel must have an origin");
      this.Ta = a;
      this.qc = b;
      this.Zg(b);
      0 < this.Ua.length &&
        ((a = this.Ua.slice(0)),
        (this.Ua = []),
        a.forEach(function(a) {
          var b = c.Ta(a.eventType, a.data, a.awaitResponse);
          a.awaitResponse && a.responseResolver(b);
        }));
    };
    f.sendMessage = function(a, b, c) {
      Jk(this, a, b, void 0 === c ? !1 : c, !1);
    };
    f.sendMessageAwaitResponse = function(a, b, c) {
      return Jk(this, a, b, void 0 === c ? !1 : c, !0);
    };
    function Jk(a, b, c, d, e) {
      if (a.Ta)
        return K(function() {
          return a.Ta(b, c, e);
        });
      if (!a.Fa) return e ? Promise.reject(Gk()) : Promise.resolve();
      if (!d)
        return a.Fa.then(function() {
          return a.Ta(b, c, e);
        });
      var g = bg(a.Ua, function(a) {
        return a.eventType == b;
      });
      if (-1 != g)
        (d = a.Ua.splice(g, 1)[0]),
          (d.data = c),
          (d.awaitResponse = d.awaitResponse || e);
      else {
        d = new I();
        var h = d.resolve;
        d = {
          eventType: b,
          data: c,
          awaitResponse: e,
          responsePromise: d.promise,
          responseResolver: h
        };
      }
      a.Ua.push(d);
      return d.responsePromise;
    }
    f.broadcast = function(a) {
      return this.Fa
        ? Jk(this, "broadcast", a, !1, !1).then(
            function() {
              return !0;
            },
            function() {
              return !1;
            }
          )
        : Promise.resolve(!1);
    };
    f.onBroadcast = function(a) {
      return this.Ie.add(a);
    };
    f.whenMessagingReady = function() {
      return this.Fa;
    };
    f.replaceUrl = function(a) {
      if (a && this.ampdoc.isSingleDoc() && this.win.history.replaceState)
        try {
          var b = O(this.win.location.href),
            c = O(Vc(a) + this.win.location.hash);
          b.origin == c.origin &&
            $c(b) == $c(c) &&
            (this.win.history.replaceState({}, "", c.href),
            (this.win.location.originalHref = b.href));
        } catch (d) {
          C().error("Viewer", "replaceUrl failed", d);
        }
    };
    function Gk(a) {
      return a instanceof Error
        ? ((a = db(a)), (a.message = "No messaging channel: " + a.message), a)
        : Error("No messaging channel: " + a);
    }
    function Kk(a, b, c, d) {
      var e = new Lk(a, b, c, d);
      return e.solveYValueFromXValue.bind(e);
    }
    function Lk(a, b, c, d) {
      var e = 1,
        g = 1;
      this.y0 = this.x0 = 0;
      this.x1 = a;
      this.y1 = b;
      this.x2 = c;
      this.y2 = d;
      this.x3 = e;
      this.y3 = g;
    }
    f = Lk.prototype;
    f.solveYValueFromXValue = function(a) {
      return this.getPointY(this.solvePositionFromXValue(a));
    };
    f.solvePositionFromXValue = function(a) {
      var b = 1e-6,
        c = (a - this.x0) / (this.x3 - this.x0);
      if (0 >= c) return 0;
      if (1 <= c) return 1;
      for (var d = 0, e = 1, g = 0, h = 0; 8 > h; h++) {
        g = this.getPointX(c);
        var k = (this.getPointX(c + b) - g) / b;
        if (Math.abs(g - a) < b) return c;
        if (Math.abs(k) < b) break;
        else g < a ? (d = c) : (e = c), (c -= (g - a) / k);
      }
      for (h = 0; Math.abs(g - a) > b && 8 > h; h++)
        g < a ? ((d = c), (c = (c + e) / 2)) : ((e = c), (c = (c + d) / 2)),
          (g = this.getPointX(c));
      return c;
    };
    f.getPointX = function(a) {
      if (0 == a) return this.x0;
      if (1 == a) return this.x3;
      var b = this.lerp(this.x0, this.x1, a),
        c = this.lerp(this.x1, this.x2, a),
        d = this.lerp(this.x2, this.x3, a);
      b = this.lerp(b, c, a);
      c = this.lerp(c, d, a);
      return this.lerp(b, c, a);
    };
    f.getPointY = function(a) {
      if (0 == a) return this.y0;
      if (1 == a) return this.y3;
      var b = this.lerp(this.y0, this.y1, a),
        c = this.lerp(this.y1, this.y2, a),
        d = this.lerp(this.y2, this.y3, a);
      b = this.lerp(b, c, a);
      c = this.lerp(c, d, a);
      return this.lerp(b, c, a);
    };
    f.lerp = function(a, b, c) {
      return a + c * (b - a);
    };
    var Mk = Kk(0.25, 0.1, 0.25, 1),
      Nk = Kk(0.42, 0, 1, 1),
      Ok = Kk(0, 0, 0.58, 1),
      Pk = Kk(0.42, 0, 0.58, 1),
      Qk = {
        linear: function(a) {
          return a;
        },
        ease: Mk,
        "ease-in": Nk,
        "ease-out": Ok,
        "ease-in-out": Pk
      };
    function Rk(a) {
      if (!a) return null;
      if ("string" == typeof a) {
        if (-1 != a.indexOf("cubic-bezier")) {
          var b = a.match(/cubic-bezier\((.+)\)/);
          if (b && ((b = b[1].split(",").map(parseFloat)), 4 == b.length)) {
            for (var c = 0; 4 > c; c++) if (isNaN(b[c])) return null;
            return Kk(b[0], b[1], b[2], b[3]);
          }
          return null;
        }
        return Qk[a];
      }
      return a;
    }
    function Sk() {}
    function Tk(a) {
      var b;
      this.hb = a;
      this.A = b || Kd(self);
      this.Se = null;
      this.S = [];
    }
    function Uk(a, b, c, d) {
      return new Tk(a)
        .setCurve(d)
        .add(0, b, 1)
        .start(c);
    }
    Tk.prototype.setCurve = function(a) {
      a && (this.Se = Rk(a));
      return this;
    };
    Tk.prototype.add = function(a, b, c, d) {
      this.S.push({ delay: a, func: b, duration: c, curve: Rk(d) });
      return this;
    };
    Tk.prototype.start = function(a) {
      var b = new Vk(this.A, this.hb, this.S, this.Se, a);
      return b;
    };
    function Vk(a, b, c, d, e) {
      this.A = a;
      this.hb = b;
      this.S = [];
      for (b = 0; b < c.length; b++) {
        var g = c[b];
        this.S.push({
          delay: g.delay,
          func: g.func,
          duration: g.duration,
          curve: g.curve || d,
          started: !1,
          completed: !1
        });
      }
      this.yg = e;
      this.ge = Date.now();
      this.Ha = !0;
      this.H = {};
      c = new I();
      this.Hf = c.promise;
      this.sh = c.resolve;
      this.oh = c.reject;
      this.Uf = this.A.createAnimTask(this.hb, { mutate: this.Ch.bind(this) });
      this.A.canAnimate(this.hb)
        ? this.Uf(this.H)
        : (C().warn("Animation", "cannot animate"), Wk(this, !1, 0));
    }
    Vk.prototype.then = function(a, b) {
      return a || b ? this.Hf.then(a, b) : this.Hf;
    };
    Vk.prototype.thenAlways = function(a) {
      a = a || Sk;
      return this.then(a, a);
    };
    Vk.prototype.halt = function(a) {
      Wk(this, !1, a || 0);
    };
    function Wk(a, b, c) {
      if (a.Ha) {
        a.Ha = !1;
        if (0 != c) {
          1 < a.S.length &&
            a.S.sort(function(a, b) {
              return a.delay + a.duration - (b.delay + b.duration);
            });
          try {
            if (0 < c) for (c = 0; c < a.S.length; c++) a.S[c].func(1, !0);
            else for (var d = a.S.length - 1; 0 <= d; d--) a.S[d].func(0, !1);
          } catch (e) {
            C().error("Animation", "completion failed: " + e, e), (b = !1);
          }
        }
        b ? a.sh() : a.oh();
      }
    }
    Vk.prototype.Ch = function() {
      if (this.Ha) {
        for (
          var a = Date.now(), b = Math.min((a - this.ge) / this.yg, 1), c = 0;
          c < this.S.length;
          c++
        ) {
          var d = this.S[c];
          !d.started && b >= d.delay && (d.started = !0);
        }
        for (c = 0; c < this.S.length; c++)
          if (((d = this.S[c]), d.started && !d.completed))
            a: {
              var e;
              if (0 < d.duration) {
                var g = (e = Math.min((b - d.delay) / d.duration, 1));
                if (d.curve && 1 != g)
                  try {
                    g = d.curve(e);
                  } catch (h) {
                    C().error("Animation", "step curve failed: " + h, h);
                    Wk(this, !1, 0);
                    break a;
                  }
              } else g = e = 1;
              1 == e && (d.completed = !0);
              try {
                d.func(g, d.completed);
              } catch (h) {
                C().error("Animation", "step mutate failed: " + h, h),
                  Wk(this, !1, 0);
              }
            }
        1 == b
          ? Wk(this, !0, 0)
          : this.A.canAnimate(this.hb)
          ? this.Uf(this.H)
          : (C().warn("Animation", "cancel animation"), Wk(this, !1, 0));
      }
    };
    function Xk(a) {
      return -1 !== a.tagName.indexOf("LIGHTBOX");
    }
    function Yk(a, b, c, d, e) {
      var g = this;
      this.ampdoc = a;
      this.A = b;
      this.lg = c;
      this.Ub = this.N = d;
      this.Nb = e && a.isSingleDoc();
      this.Ba = null;
      this.tg = 0;
      this.L = [];
      this.Qc = new gi(a.win, function() {
        g.update();
      });
      this.cc = null;
      this.ac = [];
      this.Jc = [];
    }
    f = Yk.prototype;
    f.enterLightbox = function(a, b) {
      var c = this,
        d = Zk(this);
      d && d.setLightboxMode(!0);
      a &&
        b &&
        b.then(function() {
          $k(c, a, !0);
          al(c);
          c.update();
        });
    };
    f.leaveLightbox = function() {
      var a = Zk(this);
      a && a.setLightboxMode(!1);
      var b = ag(this.L, function(a) {
        return !!a.lightboxed;
      });
      bl(this, b);
      this.L.length || cl(this);
    };
    f.setup = function() {
      var a = this.ampdoc.getRootNode(),
        b = a.styleSheets;
      if (b) {
        this.ac.length = 0;
        for (var c = (this.Jc.length = 0); c < b.length; c++) {
          var d = b[c];
          if (!d) {
            C().error("FixedLayer", "Aborting setup due to null stylesheet.");
            return;
          }
          var e = d,
            g = e.disabled,
            h = e.ownerNode;
          g ||
            !h ||
            "STYLE" != h.tagName ||
            h.hasAttribute("amp-boilerplate") ||
            h.hasAttribute("amp-runtime") ||
            h.hasAttribute("amp-extension") ||
            dl(this, d.cssRules);
        }
        $k(this, a, void 0);
        al(this);
        this.update();
        0 < this.L.length && this.observeHiddenMutations();
        a = Id(this.ampdoc.win);
        0 < this.L.length &&
          !this.Nb &&
          a.isIos() &&
          z().warn(
            "FixedLayer",
            "Please test this page inside of an AMP Viewer such as Google's because the fixed or sticky positioning might have slightly different layout."
          );
      }
    };
    f.observeHiddenMutations = function() {
      Q(this.ampdoc.win, "hidden-mutation-observer") && el(this);
    };
    function cl(a) {
      a.Qc.cancel();
      var b = a.cc;
      b && (b(), (a.cc = null));
    }
    function el(a) {
      if (!a.cc) {
        var b = a.ampdoc.getRootNode();
        a.cc = gd(b.documentElement || b, "hidden-observer").add(function() {
          a.Qc.isPending() || a.Qc.schedule(16);
        });
      }
    }
    f.updatePaddingTop = function(a, b) {
      this.N = a;
      b || (this.Ub = a);
      this.update();
    };
    f.transformMutate = function(a) {
      a
        ? this.L.forEach(function(b) {
            b.fixedNow &&
              b.top &&
              (X(b.element, "transition", "none"),
              b.transform && "none" != b.transform
                ? X(b.element, "transform", b.transform + " " + a)
                : X(b.element, "transform", a));
          })
        : this.L.forEach(function(a) {
            a.fixedNow &&
              a.top &&
              Wd(a.element, { transform: "", transition: "" });
          });
    };
    f.addElement = function(a, b) {
      var c = fl(this, a, "*", "fixed", b);
      if (!c) return Promise.resolve();
      al(this);
      this.observeHiddenMutations();
      return this.update();
    };
    f.removeElement = function(a) {
      a = gl(this, a);
      bl(this, a);
    };
    function bl(a, b) {
      0 < b.length &&
        a.Ba &&
        a.A.mutate(function() {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            "fixed" == d.position && a.Ba.returnFrom(d);
          }
        });
    }
    f.isDeclaredFixed = function(a) {
      return !!a.__AMP_DECLFIXED;
    };
    f.isDeclaredSticky = function(a) {
      return !!a.__AMP_DECLSTICKY;
    };
    f.update = function() {
      var a = this,
        b = this.L.filter(function(b) {
          return !a.ampdoc.contains(b.element);
        });
      b.forEach(function(b) {
        return gl(a, b.element);
      });
      if (0 == this.L.length) return Promise.resolve();
      this.Qc.cancel();
      var c = !1;
      return this.A.runPromise(
        {
          measure: function(b) {
            for (
              var d = a.L, g = [], h = a.ampdoc.win, k = 0;
              k < d.length;
              k++
            )
              Ud(d[k].element, {
                top: "",
                bottom: "-9999vh",
                transition: "none"
              });
            for (k = 0; k < d.length; k++) g.push(Yd(h, d[k].element).top);
            for (k = 0; k < d.length; k++) X(d[k].element, "bottom", "");
            for (k = 0; k < d.length; k++) {
              var l = d[k],
                m = l,
                n = m.element,
                r = m.forceTransfer;
              m = Yd(h, n);
              var t = n.offsetWidth,
                v = n.offsetHeight,
                y = n.offsetTop,
                x = m,
                A = void 0 === x.position ? "" : x.position,
                J = void 0 === x.display ? "" : x.display;
              n = x.bottom;
              var N = x.zIndex,
                Da = parseFloat(m.opacity);
              x = m[Td(m, "transform")];
              m = m.top;
              var F = "fixed" === A && (r || (0 < t && 0 < v)),
                B = nb(A, "sticky"),
                ba = "none" !== J;
              if (ba && (F || B)) {
                if ("auto" === m || g[k] !== m)
                  m = F && y === a.Ub + a.lg ? "0px" : "";
                var Aa = !1;
                F &&
                  (Aa =
                    !0 === r
                      ? !0
                      : !1 === r
                      ? !1
                      : 0 < Da && 300 > v && !(!m && !n));
                Aa && (c = !0);
                b[l.id] = {
                  fixed: F,
                  sticky: B,
                  transferrable: Aa,
                  top: m,
                  zIndex: N,
                  transform: x
                };
              } else
                b[l.id] = {
                  fixed: !1,
                  sticky: !1,
                  transferrable: !1,
                  top: "",
                  zIndex: ""
                };
            }
          },
          mutate: function(b) {
            c && a.Nb && Zk(a).update();
            for (var d = a.L, g = 0; g < d.length; g++) {
              var h = d[g],
                k = b[h.id];
              X(h.element, "transition", "none");
              X(h.element, "transition", "");
              if (k) {
                var l = g,
                  m = k,
                  n = h.element,
                  r = h.fixedNow;
                h.fixedNow = m.fixed;
                h.stickyNow = m.sticky;
                h.top = m.fixed || m.sticky ? m.top : "";
                h.transform = m.transform;
                !r ||
                  (m.fixed && m.transferrable) ||
                  !a.Ba ||
                  a.Ba.returnFrom(h);
                m.top &&
                  (m.fixed || m.sticky) &&
                  !h.lightboxed &&
                  (m.fixed || !a.Nb
                    ? X(n, "top", "calc(" + m.top + " + " + a.N + "px)")
                    : a.Ub === a.N
                    ? X(n, "top", m.top)
                    : X(n, "top", "calc(" + m.top + " - " + a.Ub + "px)"));
                a.Nb && m.fixed && m.transferrable && Zk(a).transferTo(h, l, m);
              }
            }
          }
        },
        {}
      ).catch(function(a) {
        C().error("FixedLayer", "Failed to mutate fixed elements:", a);
      });
    };
    function $k(a, b, c) {
      try {
        for (var d = 0; d < a.ac.length; d++)
          for (
            var e = a.ac[d], g = b.querySelectorAll(e), h = 0;
            h < g.length && !(10 < a.L.length);
            h++
          )
            fl(a, g[h], e, "fixed", void 0, c);
        for (d = 0; d < a.Jc.length; d++) {
          var k = a.Jc[d],
            l = b.querySelectorAll(k);
          for (e = 0; e < l.length; e++) fl(a, l[e], k, "sticky", void 0, c);
        }
      } catch (m) {
        C().error("FixedLayer", "Failed to setup fixed elements:", m);
      }
    }
    function fl(a, b, c, d, e, g) {
      e ||
        (b.hasAttribute("style") &&
          (Vd(b, "top") || Vd(b, "bottom")) &&
          z().error(
            "FixedLayer",
            "Inline styles with `top`, `bottom` and other CSS rules are not supported yet for fixed or sticky elements (#14186). Unexpected behavior may occur.",
            b
          ));
      if (Xk(b)) return !1;
      var h = vb(b, Xk);
      if (!g && h) return !1;
      g = a.L;
      for (var k = [], l = 0; l < g.length; l++) {
        var m = g[l].element;
        if (m === b) break;
        if (m.contains(b)) return !1;
        b.contains(m) && k.push(m);
      }
      for (l = 0; l < k.length; l++) a.removeElement(k[l]);
      l = null;
      for (m = 0; m < g.length; m++) {
        var n = g[m];
        if (n.element == b && n.position == d) {
          l = n;
          break;
        }
      }
      m = "fixed" == d;
      l
        ? l.selectors.includes(c) || l.selectors.push(c)
        : ((a = "F" + a.tg++),
          b.setAttribute("i-amphtml-fixedid", a),
          m ? (b.__AMP_DECLFIXED = !0) : (b.__AMP_DECLSTICKY = !0),
          (l = {
            id: a,
            element: b,
            position: d,
            selectors: [c],
            fixedNow: !1,
            stickyNow: !1,
            lightboxed: !!h
          }),
          g.push(l));
      l.forceTransfer = m ? e : !1;
      return !0;
    }
    function gl(a, b) {
      for (var c = [], d = 0; d < a.L.length; d++) {
        var e = a.L[d];
        e.element === b &&
          (e.lightboxed ||
            a.A.mutate(function() {
              X(b, "top", "");
            }),
          a.L.splice(d, 1),
          c.push(e));
      }
      a.L.length || cl(a);
      return c;
    }
    function al(a) {
      a.L.sort(function(a, c) {
        var b = a.element;
        var e = c.element;
        b =
          b === e
            ? 0
            : b.compareDocumentPosition(e) &
              (Node.DOCUMENT_POSITION_PRECEDING |
                Node.DOCUMENT_POSITION_CONTAINS)
            ? 1
            : -1;
        return b;
      });
    }
    function Zk(a) {
      if (!a.Nb || a.Ba) return a.Ba;
      var b = a.ampdoc.win.document;
      a.Ba = b.body.shadowRoot ? new hl(b, a.A) : new il(b, a.A);
      return a.Ba;
    }
    function dl(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        if (4 == d.type || 12 == d.type) dl(a, d.cssRules);
        else if (1 == d.type) {
          var e = d.selectorText;
          d = d.style.position;
          "*" !== e &&
            d &&
            ("fixed" === d ? a.ac.push(e) : nb(d, "sticky") && a.Jc.push(e));
        }
      }
    }
    function il(a, b) {
      this.U = a;
      this.A = b;
      this.R = a.body.cloneNode(!1);
      this.R.removeAttribute("style");
      b = this.R;
      var c = {
        position: "absolute",
        top: 0,
        left: 0,
        height: 0,
        width: 0,
        pointerEvents: "none",
        overflow: "hidden",
        animation: "none",
        background: "none",
        border: "none",
        borderImage: "none",
        boxSizing: "border-box",
        boxShadow: "none",
        float: "none",
        margin: 0,
        opacity: 1,
        outline: "none",
        padding: "none",
        transform: "none",
        transition: "none"
      };
      "display" in c &&
        C().error(
          "STYLE",
          "`display` style detected in styles. You must use toggle instead."
        );
      Wd(b, c);
      this.R.style.display = "block";
      a.documentElement.appendChild(this.R);
    }
    f = il.prototype;
    f.getRoot = function() {
      return this.R;
    };
    f.setLightboxMode = function(a) {
      var b = this;
      this.A.mutate(function() {
        var c = b.getRoot();
        a
          ? c.setAttribute("i-amphtml-lightbox", "")
          : c.removeAttribute("i-amphtml-lightbox");
      });
    };
    f.update = function() {
      for (
        var a = this.U.body,
          b = this.R,
          c = a.attributes,
          d = b.attributes,
          e = 0;
        e < c.length;
        e++
      ) {
        var g = c[e];
        "style" !== g.name && d.setNamedItem(g.cloneNode(!1));
      }
      for (e = 0; e < d.length; e++)
        (g = d[e].name),
          "style" === g ||
            "i-amphtml-lightbox" === g ||
            a.hasAttribute(g) ||
            (b.removeAttribute(g), e--);
    };
    f.transferTo = function(a, b, c) {
      var d = a.element;
      if (d.parentElement != this.R) {
        z().warn(
          "FixedLayer",
          "In order to improve scrolling performance in Safari, we now move the element to a fixed positioning layer:",
          a.element
        );
        if (!a.placeholder) {
          X(d, "pointer-events", "initial");
          var e = (a.placeholder = this.U.createElement("i-amphtml-fpa"));
          Xd(e, !1);
          e.setAttribute("i-amphtml-fixedid", a.id);
        }
        X(d, "zIndex", "calc(" + (1e4 + b) + " + " + (c.zIndex || 0) + ")");
        a.lightboxed && d.classList.add("i-amphtml-lightbox-element");
        d.parentElement.replaceChild(a.placeholder, d);
        this.R.appendChild(d);
        a.selectors.some(function(a) {
          try {
            var b = yb(d, a);
          } catch (k) {
            C().error("FixedLayer", "Failed to test query match:", k), (b = !1);
          }
          return b;
        }) ||
          (z().warn(
            "FixedLayer",
            "Failed to move the element to the fixed position layer. This is most likely due to the compound CSS selector:",
            a.element
          ),
          this.returnFrom(a));
      }
    };
    f.returnFrom = function(a) {
      if (a.placeholder && this.U.contains(a.placeholder)) {
        var b = a.element,
          c = a.placeholder;
        a.lightboxed && b.classList.remove("i-amphtml-lightbox-element");
        this.U.contains(b)
          ? (X(a.element, "zIndex", ""), c.parentElement.replaceChild(b, c))
          : c.parentElement.removeChild(c);
      }
    };
    function hl(a, b) {
      this.A = b;
      this.R = a.createElement("div");
      this.R.id = "i-amphtml-fixed-layer";
      Ud(this.R, {
        position: "absolute",
        top: 0,
        left: 0,
        height: 0,
        width: 0,
        overflow: "hidden"
      });
      var c = a.createElement("slot");
      c.setAttribute("name", "i-amphtml-fixed");
      this.R.appendChild(c);
      a.body.shadowRoot.appendChild(this.R);
    }
    f = hl.prototype;
    f.getRoot = function() {
      return this.R;
    };
    f.setLightboxMode = function(a) {
      var b = this;
      this.A.mutate(function() {
        X(b.getRoot(), "visibility", a ? "hidden" : "visible");
      });
    };
    f.update = function() {};
    f.transferTo = function(a) {
      var b = a.element;
      z().warn(
        "FixedLayer",
        "In order to improve scrolling performance in Safari, we now move the element to a fixed positioning layer:",
        a.element
      );
      b.setAttribute("slot", "i-amphtml-fixed");
    };
    f.returnFrom = function(a) {
      a.element.removeAttribute("slot");
    };
    function jl(a, b) {
      for (b = b.lastElementChild; b; b = b.previousElementSibling)
        if (0 < b.getBoundingClientRect().height) {
          var c = Yd(a, b);
          if ("static" == c.position || "relative" == c.position) {
            var d = c;
            break;
          }
        }
      return d ? parseInt(d.marginBottom, 10) : 0;
    }
    function kl(a) {
      var b = this;
      this.win = a;
      this.A = Kd(a);
      a = this.win.document;
      var c = a.documentElement,
        d = c.className;
      c.classList.add("i-amphtml-ios-embed");
      var e = a.createElement("html");
      this.T = e;
      e.id = "i-amphtml-wrapper";
      e.className = d;
      this.Aa = new Y();
      this.za = new Y();
      this.gb = this.Af.bind(this);
      this.fb = function() {
        return b.za.fire();
      };
      this.N = 0;
      this.Nf = !1;
      qb(a, this.Of.bind(this));
      xe(a).then(function() {
        c.classList.add("i-amphtml-ios-overscroll");
      });
    }
    f = kl.prototype;
    f.ensureReadyForElements = function() {
      this.Of();
    };
    f.Of = function() {
      if (!this.Nf) {
        this.Nf = !0;
        var a = this.win.document,
          b = a.body;
        a.documentElement.appendChild(this.T);
        this.T.appendChild(b);
        Object.defineProperty(a, "body", {
          get: function() {
            return b;
          }
        });
        this.Af();
      }
    };
    f.connect = function() {
      this.win.addEventListener("resize", this.fb);
      this.T.addEventListener("scroll", this.gb);
    };
    f.disconnect = function() {
      this.win.removeEventListener("resize", this.fb);
      this.T.removeEventListener("scroll", this.gb);
    };
    f.getBorderTop = function() {
      return 1;
    };
    f.requiresFixedLayerTransfer = function() {
      if (!Q(this.win, "ios-fixed-no-transfer")) return !0;
      var a = parseFloat(Id(this.win).getIosVersionString());
      return 12.2 > a;
    };
    f.overrideGlobalScrollTo = function() {
      return !0;
    };
    f.supportsPositionFixed = function() {
      return !0;
    };
    f.onScroll = function(a) {
      this.Aa.add(a);
    };
    f.onResize = function(a) {
      this.za.add(a);
    };
    f.updatePaddingTop = function(a) {
      this.N = a;
      Ud(this.T, { "padding-top": a + "px" });
    };
    f.hideViewerHeader = function(a) {
      a || this.updatePaddingTop(0);
    };
    f.showViewerHeader = function(a, b) {
      a || this.updatePaddingTop(b);
    };
    f.disableScroll = function() {
      this.T.classList.add("i-amphtml-scroll-disabled");
    };
    f.resetScroll = function() {
      this.T.classList.remove("i-amphtml-scroll-disabled");
    };
    f.updateLightboxMode = function() {
      return Promise.resolve();
    };
    f.getSize = function() {
      return { width: this.win.innerWidth, height: this.win.innerHeight };
    };
    f.getScrollTop = function() {
      return this.T.scrollTop;
    };
    f.getScrollLeft = function() {
      return 0;
    };
    f.getScrollWidth = function() {
      return this.T.scrollWidth;
    };
    f.getScrollHeight = function() {
      return this.T.scrollHeight;
    };
    f.getContentHeight = function() {
      var a = this.win.document.body,
        b = a.getBoundingClientRect().height,
        c = jl(this.win, a);
      a = Yd(this.win, a);
      return (
        parseInt(a.marginTop, 10) +
        this.N +
        b +
        c +
        parseInt(a.marginBottom, 10)
      );
    };
    f.contentHeightChanged = function() {};
    f.getLayoutRect = function(a, b, c) {
      a = a.getBoundingClientRect();
      var d = void 0 != c ? c : this.getScrollTop(),
        e = void 0 != b ? b : this.getScrollLeft();
      return M(
        Math.round(a.left + e),
        Math.round(a.top + d),
        Math.round(a.width),
        Math.round(a.height)
      );
    };
    f.getRootClientRectAsync = function() {
      return Promise.resolve(null);
    };
    f.setScrollTop = function(a) {
      this.T.scrollTop = a || 1;
    };
    f.Af = function(a) {
      0 == this.T.scrollTop &&
        ((this.T.scrollTop = 1), a && a.preventDefault());
      a && this.Aa.fire();
    };
    f.getScrollingElement = function() {
      return this.T;
    };
    f.getScrollingElementScrollsLikeViewport = function() {
      return !1;
    };
    function ll(a) {
      var b = this;
      this.ampdoc = a;
      this.win = a.win;
      this.ga = Id(this.win);
      this.Aa = new Y();
      this.za = new Y();
      this.qh = this.ga.isIos() && this.win.parent !== this.win;
      this.gb = this.Gg.bind(this);
      this.fb = function() {
        return b.za.fire();
      };
    }
    f = ll.prototype;
    f.Gg = function() {
      this.qh &&
        0 < this.getScrollingElement().scrollLeft &&
        (this.getScrollingElement().scrollLeft = 0);
      this.Aa.fire();
    };
    f.connect = function() {
      this.win.addEventListener("scroll", this.gb);
      this.win.addEventListener("resize", this.fb);
    };
    f.disconnect = function() {
      this.win.removeEventListener("scroll", this.gb);
      this.win.removeEventListener("resize", this.fb);
    };
    f.ensureReadyForElements = function() {};
    f.getBorderTop = function() {
      return 0;
    };
    f.requiresFixedLayerTransfer = function() {
      return !1;
    };
    f.overrideGlobalScrollTo = function() {
      return !1;
    };
    f.supportsPositionFixed = function() {
      return !0;
    };
    f.onScroll = function(a) {
      this.Aa.add(a);
    };
    f.onResize = function(a) {
      this.za.add(a);
    };
    f.updatePaddingTop = function(a) {
      Ud(this.win.document.documentElement, { "padding-top": a + "px" });
    };
    f.hideViewerHeader = function(a) {
      a || this.updatePaddingTop(0);
    };
    f.showViewerHeader = function(a, b) {
      a || this.updatePaddingTop(b);
    };
    f.disableScroll = function() {
      this.win.document.documentElement.classList.add(
        "i-amphtml-scroll-disabled"
      );
    };
    f.resetScroll = function() {
      this.win.document.documentElement.classList.remove(
        "i-amphtml-scroll-disabled"
      );
    };
    f.updateLightboxMode = function() {
      return Promise.resolve();
    };
    f.getSize = function() {
      var a = this.win.innerWidth,
        b = this.win.innerHeight;
      if (a && b) return { width: a, height: b };
      var c = this.win.document.documentElement;
      return { width: c.clientWidth, height: c.clientHeight };
    };
    f.getScrollTop = function() {
      var a = this.getScrollingElement().scrollTop || this.win.pageYOffset,
        b = this.ampdoc.getRootNode().host;
      return b ? a - b.offsetTop : a;
    };
    f.getScrollLeft = function() {
      return 0;
    };
    f.getScrollWidth = function() {
      return this.getScrollingElement().scrollWidth;
    };
    f.getScrollHeight = function() {
      return this.getScrollingElement().scrollHeight;
    };
    f.getContentHeight = function() {
      var a = this.getScrollingElement(),
        b = a.getBoundingClientRect(),
        c = b.top + this.getScrollTop(),
        d = Id(this.win).isSafari() ? jl(this.win, a) : 0;
      a = Yd(this.win, a);
      return (
        c +
        parseInt(a.marginTop, 10) +
        b.height +
        d +
        parseInt(a.marginBottom, 10)
      );
    };
    f.contentHeightChanged = function() {};
    f.getLayoutRect = function(a, b, c) {
      a = a.getBoundingClientRect();
      c = void 0 != c ? c : this.getScrollTop();
      b = void 0 != b ? b : this.getScrollLeft();
      return M(
        Math.round(a.left + b),
        Math.round(a.top + c),
        Math.round(a.width),
        Math.round(a.height)
      );
    };
    f.getRootClientRectAsync = function() {
      return Promise.resolve(null);
    };
    f.setScrollTop = function(a) {
      this.getScrollingElement().scrollTop = a;
    };
    f.getScrollingElement = function() {
      var a = this.win.document;
      return a.scrollingElement
        ? a.scrollingElement
        : a.body && this.ga.isWebKit()
        ? a.body
        : a.documentElement;
    };
    f.getScrollingElementScrollsLikeViewport = function() {
      return !0;
    };
    function ml(a) {
      var b = 500,
        c = 0;
      return Math.min(Math.max(a, c), b);
    }
    function ol(a, b) {
      return function(c) {
        return a + (b - a) * c;
      };
    }
    function pl(a, b, c) {
      var d = this,
        e = a.win;
      this.ampdoc = a;
      this.pd = this.ampdoc.win.document;
      this.j = b;
      this.h = c;
      this.Ia = this.W = this.Db = null;
      this.ce = !1;
      this.Gc = null;
      this.N = Number(c.getParam("paddingTop") || 0);
      this.ic = 0;
      this.O = V(e);
      this.A = Kd(e);
      this.de = !1;
      this.xh = 0;
      this.Oe = new Y();
      this.Aa = new Y();
      this.za = new Y();
      this.Ud = this.Pb = void 0;
      this.aa = new Yk(
        a,
        this.A,
        this.j.getBorderTop(),
        this.N,
        this.j.requiresFixedLayerTransfer()
      );
      a.whenReady().then(function() {
        return d.aa.setup();
      });
      this.h.onMessage("viewport", this.Ih.bind(this));
      this.h.onMessage("scroll", this.Jh.bind(this));
      this.h.onMessage("disableScroll", this.xg.bind(this));
      this.j.updatePaddingTop(this.N);
      this.j.onScroll(this.yh.bind(this));
      this.j.onResize(this.Kf.bind(this));
      this.onScroll(this.zh.bind(this));
      this.ja = !1;
      this.ampdoc.onVisibilityChanged(this.$f.bind(this));
      this.$f();
      var g = this.pd.documentElement;
      a.isSingleDoc() && g.classList.add("i-amphtml-singledoc");
      c.isEmbedded()
        ? g.classList.add("i-amphtml-embedded")
        : g.classList.add("i-amphtml-standalone");
      Hb(e) && g.classList.add("i-amphtml-iframed");
      "1" === c.getParam("webview") && g.classList.add("i-amphtml-webview");
      Hb(e) &&
        "scrollRestoration" in e.history &&
        (e.history.scrollRestoration = "manual");
      if (this.j.overrideGlobalScrollTo())
        try {
          Object.defineProperty(e, "scrollTo", {
            value: function(a, b) {
              return d.setScrollTop(b);
            }
          }),
            ["pageYOffset", "scrollY"].forEach(function(a) {
              Object.defineProperty(e, a, {
                get: function() {
                  return d.getScrollTop();
                }
              });
            });
        } catch (h) {}
    }
    f = pl.prototype;
    f.dispose = function() {
      this.j.disconnect();
    };
    f.ensureReadyForElements = function() {
      this.j.ensureReadyForElements();
    };
    f.$f = function() {
      var a = this.ampdoc.isVisible();
      a != this.ja &&
        ((this.ja = a)
          ? (this.j.connect(), this.W && this.Kf())
          : this.j.disconnect());
    };
    f.getPaddingTop = function() {
      return this.N;
    };
    f.getScrollTop = function() {
      null == this.Ia && (this.Ia = this.j.getScrollTop());
      return this.Ia;
    };
    f.getScrollLeft = function() {
      null == this.Gc && (this.Gc = this.j.getScrollLeft());
      return this.Gc;
    };
    f.setScrollTop = function(a) {
      this.Ia = null;
      this.j.setScrollTop(a);
    };
    f.updatePaddingBottom = function(a) {
      this.ampdoc.waitForBodyOpen().then(function(b) {
        X(b, "borderBottom", a + "px solid transparent");
      });
    };
    f.getSize = function() {
      if (this.W) return this.W;
      this.W = this.j.getSize();
      if (0 == this.W.width || 0 == this.W.height) {
        var a = this.ampdoc.getVisibilityState();
        ("prerender" == a || "visible" == a) &&
          0.01 > Math.random() &&
          C().error("Viewport", "viewport has zero dimensions");
      }
      return this.W;
    };
    f.getHeight = function() {
      return this.getSize().height;
    };
    f.getWidth = function() {
      return this.getSize().width;
    };
    f.getScrollWidth = function() {
      return this.j.getScrollWidth();
    };
    f.getScrollHeight = function() {
      return this.j.getScrollHeight();
    };
    f.getContentHeight = function() {
      return this.j.getContentHeight();
    };
    f.contentHeightChanged = function() {
      this.j.contentHeightChanged();
    };
    f.getRect = function() {
      if (null == this.Db) {
        var a = this.getScrollTop(),
          b = this.getScrollLeft(),
          c = this.getSize();
        this.Db = M(b, a, c.width, c.height);
      }
      return this.Db;
    };
    f.getLayoutRect = function(a) {
      var b = this.getScrollLeft(),
        c = this.getScrollTop(),
        d = rd(a, this.ampdoc.win);
      return d
        ? ((a = this.j.getLayoutRect(a, 0, 0)),
          (b = this.j.getLayoutRect(d, b, c)),
          M(
            Math.round(a.left + b.left),
            Math.round(a.top + b.top),
            Math.round(a.width),
            Math.round(a.height)
          ))
        : this.j.getLayoutRect(a, b, c);
    };
    f.getClientRectAsync = function(a) {
      var b = this.A.measurePromise(function() {
          return a.getBoundingClientRect();
        }),
        c = this.j.getRootClientRectAsync(),
        d = rd(a, this.ampdoc.win);
      d &&
        (c = this.A.measurePromise(function() {
          return d.getBoundingClientRect();
        }));
      return Promise.all([b, c]).then(function(a) {
        var b = a[0];
        return (a = a[1])
          ? Zb(b, a.left, a.top)
          : M(Number(b.left), Number(b.top), Number(b.width), Number(b.height));
      });
    };
    f.supportsPositionFixed = function() {
      return this.j.supportsPositionFixed();
    };
    f.isDeclaredFixed = function(a) {
      return this.aa.isDeclaredFixed(a);
    };
    f.scrollIntoView = function(a) {
      var b = this;
      return ql(this, a).then(function(c) {
        return rl(b, a, c);
      });
    };
    function rl(a, b, c) {
      var d = a.j.getLayoutRect(b).top,
        e = K(function() {
          return Math.max(0, d - a.N);
        });
      e.then(function(b) {
        return sl(a, c, b);
      });
    }
    f.animateScrollIntoView = function(a, b, c, d) {
      var e = this;
      b = void 0 === b ? "top" : b;
      return ql(this, a).then(function(g) {
        return e.animateScrollWithinParent(a, g, b, c, d);
      });
    };
    f.animateScrollWithinParent = function(a, b, c, d, e) {
      var g = this,
        h = this.j.getLayoutRect(a),
        k = (b == this.j.getScrollingElement()
          ? this.getSize()
          : this.getLayoutRect(b)
        ).height;
      switch (c) {
        case "bottom":
          var l = -k + h.height;
          break;
        case "center":
          l = -k / 2 + h.height / 2;
          break;
        default:
          l = 0;
      }
      return tl(this, b).then(function(a) {
        var c = h.top - g.N + l,
          k = Math.max(0, c);
        if (k != a) return ul(g, b, a, k, d, e);
      });
    };
    function ul(a, b, c, d, e, g) {
      g = void 0 === g ? "ease-in" : g;
      e = void 0 !== e ? e : Math.floor(ml(0.65 * Math.abs(c - d)));
      var h = ol(c, d);
      return Uk(
        b,
        function(c) {
          sl(a, b, h(c));
        },
        e,
        g
      ).thenAlways(function() {
        sl(a, b, d);
      });
    }
    function ql(a, b) {
      return a.A.measurePromise(function() {
        return xb(b, ".i-amphtml-scrollable") || a.j.getScrollingElement();
      });
    }
    function sl(a, b, c) {
      b == a.j.getScrollingElement()
        ? a.j.setScrollTop(c)
        : a.A.mutate(function() {
            b.scrollTop = c;
          });
    }
    function tl(a, b) {
      return b == a.j.getScrollingElement()
        ? K(function() {
            return a.getScrollTop();
          })
        : a.A.measurePromise(function() {
            return b.scrollTop;
          });
    }
    f.getScrollingElement = function() {
      return this.j.getScrollingElement();
    };
    f.onChanged = function(a) {
      return this.Oe.add(a);
    };
    f.onScroll = function(a) {
      return this.Aa.add(a);
    };
    f.onResize = function(a) {
      return this.za.add(a);
    };
    f.enterLightboxMode = function(a, b) {
      this.h.sendMessage("requestFullOverlay", {}, !0);
      this.enterOverlayMode();
      this.aa.enterLightbox(a, b);
      a && this.maybeEnterFieLightboxMode(a);
      return this.j.updateLightboxMode(!0);
    };
    f.leaveLightboxMode = function(a) {
      this.h.sendMessage("cancelFullOverlay", {}, !0);
      this.aa.leaveLightbox();
      this.leaveOverlayMode();
      a && this.maybeLeaveFieLightboxMode(a);
      return this.j.updateLightboxMode(!1);
    };
    f.isLightboxExperimentOn = function() {
      return Q(this.ampdoc.win, "amp-lightbox-a4a-proto");
    };
    f.maybeEnterFieLightboxMode = function(a) {
      var b = vl(this, a);
      b && (this.isLightboxExperimentOn(), b.enterFullOverlayMode());
    };
    f.maybeLeaveFieLightboxMode = function(a) {
      (a = vl(this, a)) && a.leaveFullOverlayMode();
    };
    function vl(a, b) {
      var c = rd(b, a.ampdoc.win);
      return c && c.__AMP_EMBED__;
    }
    f.enterOverlayMode = function() {
      this.disableTouchZoom();
      this.disableScroll();
    };
    f.leaveOverlayMode = function() {
      this.resetScroll();
      this.restoreOriginalTouchZoom();
    };
    f.disableScroll = function() {
      var a = this,
        b = this.ampdoc.win,
        c = b.document.documentElement,
        d;
      this.A.measure(function() {
        var e = Yd(b, c).marginRight,
          g = a.ampdoc.win,
          h = g.innerWidth - g.document.documentElement.clientWidth;
        d = parseInt(e, 10) + h;
      });
      this.A.mutate(function() {
        X(c, "margin-right", d, "px");
        a.j.disableScroll();
      });
    };
    f.resetScroll = function() {
      var a = this,
        b = this.ampdoc.win.document.documentElement;
      this.A.mutate(function() {
        X(b, "margin-right", "");
        a.j.resetScroll();
      });
    };
    f.resetTouchZoom = function() {
      var a = this,
        b = this.ampdoc.win.innerHeight,
        c = this.pd.documentElement.clientHeight;
      (b && c && b === c) ||
        (this.disableTouchZoom() &&
          this.O.delay(function() {
            a.restoreOriginalTouchZoom();
          }, 50));
    };
    f.disableTouchZoom = function() {
      var a = wl(this);
      if (!a) return !1;
      var b = a.content,
        c = { "maximum-scale": "1", "user-scalable": "no" };
      var d = Object.create(null);
      if (b)
        for (var e = b.split(/,|;/), g = 0; g < e.length; g++) {
          var h = e[g].split("="),
            k = h[0].trim();
          h = h[1];
          h = (h || "").trim();
          k && (d[k] = h);
        }
      e = !1;
      for (var l in c)
        d[l] !== c[l] &&
          ((e = !0), void 0 !== c[l] ? (d[l] = c[l]) : delete d[l]);
      if (e) {
        b = "";
        for (var m in d)
          0 < b.length && (b += ","), (b = d[m] ? b + (m + "=" + d[m]) : b + m);
        d = b;
      } else d = b;
      return xl(this, d);
    };
    f.restoreOriginalTouchZoom = function() {
      return void 0 !== this.Ud ? xl(this, this.Ud) : !1;
    };
    f.updateFixedLayer = function() {
      this.aa.update();
    };
    f.addToFixedLayer = function(a, b) {
      return this.aa.addElement(a, b);
    };
    f.removeFromFixedLayer = function(a) {
      this.aa.removeElement(a);
    };
    function xl(a, b) {
      return (a = wl(a)) && a.content != b ? ((a.content = b), !0) : !1;
    }
    function wl(a) {
      if (Hb(a.ampdoc.win)) return null;
      void 0 === a.Pb &&
        ((a.Pb = a.pd.querySelector("meta[name=viewport]")),
        a.Pb && (a.Ud = a.Pb.content));
      return a.Pb;
    }
    f.Jh = function(a) {
      var b = a.scrollTop;
      this.setScrollTop(b);
    };
    f.Ih = function(a) {
      var b = this,
        c = a.paddingTop,
        d = a.duration || 0,
        e = a.curve,
        g = a["transient"];
      if (void 0 != c && c != this.N) {
        this.ic = this.N;
        this.N = c;
        var h = yl(this, d, e, g);
        c < this.ic
          ? this.j.hideViewerHeader(g, this.ic)
          : h.then(function() {
              b.j.showViewerHeader(g, c);
            });
      }
    };
    f.xg = function(a) {
      a ? this.disableScroll() : this.resetScroll();
    };
    function yl(a, b, c, d) {
      a.aa.updatePaddingTop(a.N, d);
      if (0 >= b) return Promise.resolve();
      var e = ol(a.ic - a.N, 0);
      return Uk(
        a.ampdoc.getRootNode(),
        function(b) {
          b = e(b);
          a.aa.transformMutate("translateY(" + b + "px)");
        },
        b,
        c
      ).thenAlways(function() {
        a.aa.transformMutate(null);
      });
    }
    function zl(a, b, c) {
      var d = a.getSize(),
        e = a.getScrollTop(),
        g = a.getScrollLeft();
      a.Oe.fire({
        relayoutAll: b,
        top: e,
        left: g,
        width: d.width,
        height: d.height,
        velocity: c
      });
    }
    f.yh = function() {
      var a = this;
      this.Db = null;
      this.xh++;
      this.Gc = this.j.getScrollLeft();
      var b = this.j.getScrollTop();
      if (!(0 > b)) {
        this.Ia = b;
        if (!this.de) {
          this.de = !0;
          var c = Date.now();
          this.O.delay(function() {
            a.A.measure(function() {
              a.Wf(c, b);
            });
          }, 36);
        }
        this.Aa.fire();
      }
    };
    f.Wf = function(a, b) {
      var c = this,
        d = (this.Ia = this.j.getScrollTop()),
        e = Date.now(),
        g = 0;
      e != a && (g = (d - b) / (e - a));
      0.03 > Math.abs(g)
        ? (zl(this, !1, g), (this.de = !1))
        : this.O.delay(function() {
            return c.A.measure(c.Wf.bind(c, e, d));
          }, 20);
    };
    f.zh = function() {
      var a = this;
      this.ce ||
        ((this.ce = !0),
        this.A.measure(function() {
          a.ce = !1;
          a.h.sendMessage("scroll", G({ scrollTop: a.getScrollTop() }), !0);
        }));
    };
    f.Kf = function() {
      var a = this;
      this.Db = null;
      var b = this.W;
      this.W = null;
      var c = this.getSize();
      this.aa.update().then(function() {
        var d = !b || b.width != c.width;
        zl(a, d, 0);
        var e = d || b.height != c.height;
        e && a.za.fire({ relayoutAll: d, width: c.width, height: c.height });
      });
    };
    function Al(a) {
      var b = W(a),
        c = a.win,
        d;
      if ((d = a.isSingleDoc())) {
        d = b.getParam("viewportType") || Bl;
        if (Id(c).isIos() && d == Bl) {
          var e = Q(c, "ios-scrollable-iframe");
          Hb(c) || !u(c).development || e
            ? (Hb(c), (d = Hb(c) && b.isEmbedded() && !e ? Cl : d))
            : (d = Cl);
        }
        d = d == Cl;
      }
      c = d ? new kl(c) : new ll(a);
      return new pl(a, c, b);
    }
    var Bl = "natural",
      Cl = "natural-ios-embed";
    var Dl = ["<div class=i-amphtml-jank-meter></div>"];
    function El(a) {
      this.o = a;
      this.mc = this.lc = this.Mb = this.Sb = 0;
      this.Gb = null;
      this.qa = nd(a);
      this.vb = this.xe = this.ye = null;
      Fl(this);
    }
    El.prototype.onScheduled = function() {
      Gl(this) && null == this.Gb && (this.Gb = this.o.Date.now());
    };
    El.prototype.onRun = function() {
      if (Gl(this) && null != this.Gb) {
        var a = this.o.Date.now() - this.Gb;
        this.Gb = null;
        this.Mb++;
        16 < a && (this.Sb++, C().info("JANK", "Paint latency: " + a + "ms"));
        if (this.qa && 200 == this.Mb) {
          var b = this.o.Math.floor(((this.Mb - this.Sb) / this.Mb) * 100);
          this.qa.tickDelta("gfp", b);
          this.qa.tickDelta("bf", this.Sb);
          this.vb &&
            (this.qa.tickDelta("lts", this.mc),
            this.qa.tickDelta("ltc", this.lc),
            this.vb.disconnect(),
            (this.vb = null));
          var c = 0;
          this.ye &&
            null != this.xe &&
            ((c = this.o.Math.max(
              0,
              this.o.Math.floor(100 * this.ye.level - this.xe)
            )),
            this.qa.tickDelta("bd", c));
          this.qa.flush();
          if (Q(this.o, "jank-meter")) {
            var d = c,
              e = this.o.document,
              g = Nd(e)(Dl);
            g.textContent =
              "bf:" +
              this.Sb +
              ", lts: " +
              this.mc +
              ", ltc:" +
              (this.lc + ", bd:" + d);
            e.body.appendChild(g);
          }
        }
      }
    };
    function Gl(a) {
      return (
        Q(a.o, "jank-meter") ||
        (a.qa && a.qa.isPerformanceTrackingOn() && 200 > a.Mb)
      );
    }
    function Fl(a) {
      Gl(a) &&
        Hl(a.o) &&
        ((a.vb = new a.o.PerformanceObserver(function(b) {
          for (var c = b.getEntries(), d = 0; d < c.length; d++)
            if ("longtask" == c[d].entryType) {
              var e = a.o.Math.floor(c[d].duration / 50);
              "cross-origin-descendant" == c[d].name
                ? ((a.lc += e),
                  z().info(
                    "LONGTASK",
                    "from child frame " + c[d].duration + "ms"
                  ))
                : ((a.mc += e),
                  C().info(
                    "LONGTASK",
                    "from self frame " + c[d].duration + "ms"
                  ));
            }
        })),
        a.vb.observe({ entryTypes: ["longtask"] }));
    }
    function Hl(a) {
      return (
        !!a.PerformanceObserver &&
        !!a.TaskAttributionTiming &&
        "containerName" in a.TaskAttributionTiming.prototype
      );
    }
    function Il(a) {
      var b = Td(a, "visibilityState", !0);
      if (a[b]) return a[b];
      var c = Td(a, "hidden", !0);
      return a[c] ? (a[c] ? "hidden" : "visible") : "visible";
    }
    function Jl(a, b) {
      if (a.addEventListener) {
        var c = Kl(a);
        c && a.addEventListener(c, b);
      }
    }
    function Ll(a, b) {
      if (a.removeEventListener) {
        var c = Kl(a);
        c && a.removeEventListener(c, b);
      }
    }
    function Kl(a) {
      a = Td(a, "hidden", !0);
      var b = a.indexOf("Hidden");
      return -1 != b
        ? a.substring(0, b) + "Visibilitychange"
        : "visibilitychange";
    }
    function Ml(a) {
      this.win = a;
      this.ua = Ed(this.win);
      this.mh = Nl(this);
      this.J = [];
      this.Sd = [];
      this.he = [];
      this.Rd = [];
      this.ma = !1;
      this.Qd = this.sc = null;
      this.cd = this.wh.bind(this);
      this.Mg = new gi(this.win, this.cd, 16);
      this.we = new gi(this.win, this.cd, 40);
      this.bd = this.jh.bind(this);
      if (this.ua.isSingleDoc())
        this.ua.getSingleDoc().onVisibilityChanged(this.bd);
      else Jl(this.win.document, this.bd);
      this.lf = new El(this.win);
    }
    f = Ml.prototype;
    f.dispose = function() {
      Ll(this.win.document, this.bd);
    };
    f.jh = function() {
      this.ma && Ol(this);
    };
    f.run = function(a, b) {
      this.J.push(a);
      this.he.push(b || void 0);
      this.ra();
    };
    f.runPromise = function(a, b) {
      this.run(a, b);
      if (this.sc) return this.sc;
      a = new I();
      this.Qd = a.resolve;
      return (this.sc = a.promise);
    };
    f.createTask = function(a) {
      var b = this;
      return function(c) {
        b.run(a, c);
      };
    };
    f.mutate = function(a) {
      this.run({ measure: void 0, mutate: a });
    };
    f.mutatePromise = function(a) {
      return this.runPromise({ measure: void 0, mutate: a });
    };
    f.measure = function(a) {
      this.run({ measure: a, mutate: void 0 });
    };
    f.measurePromise = function(a) {
      var b = this;
      return new Promise(function(c) {
        b.measure(function() {
          c(a());
        });
      });
    };
    f.canAnimate = function(a) {
      return Pl(this, a);
    };
    function Pl(a, b) {
      return "visible" != Il(a.win.document)
        ? !1
        : a.ua.isSingleDoc()
        ? a.ua.getSingleDoc().isVisible()
        : b
        ? ((a = a.ua.getAmpDocIfAvailable(b)), !a || a.isVisible())
        : !0;
    }
    f.runAnim = function(a, b, c) {
      if (!Pl(this, a))
        return (
          C().warn(
            "VSYNC",
            "Did not schedule a vsync request, because document was invisible"
          ),
          !1
        );
      this.run(b, c);
      return !0;
    };
    f.createAnimTask = function(a, b) {
      var c = this;
      return function(d) {
        return c.runAnim(a, b, d);
      };
    };
    f.runAnimMutateSeries = function(a, b, c) {
      var d = this;
      return Pl(this, a)
        ? new Promise(function(e, g) {
            var h = Date.now(),
              k = 0,
              l = d.createAnimTask(a, {
                mutate: function(a) {
                  var d = Date.now() - h;
                  b(d, d - k, a)
                    ? c && d > c
                      ? g(Error("timeout"))
                      : ((k = d), l(a))
                    : e();
                }
              });
            l({});
          })
        : Promise.reject(Error("CANCELLED"));
    };
    f.ra = function() {
      this.ma || ((this.ma = !0), this.lf.onScheduled(), Ol(this));
    };
    function Ol(a) {
      Pl(a) ? (a.mh(a.cd), a.we.schedule()) : a.Mg.schedule();
    }
    f.wh = function() {
      this.we.cancel();
      this.ma = !1;
      this.lf.onRun();
      var a = this.J,
        b = this.he,
        c = this.Qd;
      this.sc = this.Qd = null;
      this.J = this.Sd;
      this.he = this.Rd;
      for (var d = 0; d < a.length; d++)
        a[d].measure && !Ql(a[d].measure, b[d]) && (a[d].mutate = void 0);
      for (d = 0; d < a.length; d++) a[d].mutate && Ql(a[d].mutate, b[d]);
      this.Sd = a;
      this.Rd = b;
      this.Sd.length = 0;
      this.Rd.length = 0;
      c && c();
    };
    function Nl(a) {
      var b = a.win.requestAnimationFrame || a.win.webkitRequestAnimationFrame;
      if (b) return b.bind(a.win);
      var c = 0;
      return function(b) {
        var d = Date.now(),
          g = Math.max(0, 16 - (d - c));
        c = d + g;
        a.win.setTimeout(b, g);
      };
    }
    function Ql(a, b) {
      try {
        var c = a(b);
        void 0 !== c &&
          C().error(
            "VSYNC",
            "callback returned a value but vsync cannot propogate it: %s",
            a.toString()
          );
      } catch (d) {
        return eb(d), !1;
      }
      return !0;
    }
    function Rl(a) {
      S(a, "crypto", Yg);
      S(a, "batched-xhr", pg);
      S(a, "platform", Zi);
      S(a, "templates", Le);
      S(a, "timer", Pj);
      S(a, "timer", Pj);
      S(a, "vsync", Ml);
      S(a, "xhr", ng);
      S(a, "input", Ni);
    }
    var Sl = ["amp-ad", "amp-embed", "amp-video"],
      Tl = ["amp-mustache"];
    function Ul(a) {
      this.win = a;
      this.ua = Ed(a);
      this.Wb = {};
      this.Pa = null;
    }
    f = Ul.prototype;
    f.registerExtension = function(a, b, c) {
      var d = Vl(this, a, !0);
      try {
        (this.Pa = a),
          b(c, c._),
          (d.loaded = !0),
          d.resolve && d.resolve(d.extension);
      } catch (e) {
        throw ((d.error = e), d.reject && d.reject(e), e);
      } finally {
        this.Pa = null;
      }
    };
    f.waitForExtension = function(a, b, c) {
      return V(a).timeoutPromise(
        c || 8e3,
        Wl(Vl(this, b, !1)),
        "Render timeout waiting for extension " + b + " to be load."
      );
    };
    f.preloadExtension = function(a, b) {
      "amp-embed" == a && (a = "amp-ad");
      var c = Vl(this, a, !1);
      if (c.loaded || c.error) var d = !1;
      else
        void 0 === c.scriptPresent &&
          ((d = Xl(this, a)), (c.scriptPresent = !!d)),
          (d = !c.scriptPresent);
      if (d) {
        d = b;
        b = this.win.document.createElement("script");
        b.async = !0;
        L(a, "_")
          ? (d = "")
          : b.setAttribute(
              0 <= Tl.indexOf(a) ? "custom-template" : "custom-element",
              a
            );
        b.setAttribute("data-script", a);
        b.setAttribute("i-amphtml-inserted", "");
        var e = Oa.cdn;
        var g = u().rtvVersion;
        null == d && (d = "0.1");
        b.src = e + "/rtv/" + g + "/v0/" + a + (d ? "-" + d : "") + ".js";
        this.win.document.head.appendChild(b);
        c.scriptPresent = !0;
      }
      return Wl(c);
    };
    f.installExtensionForDoc = function(a, b, c) {
      var d = this,
        e = a.getRootNode(),
        g = e.__AMP_EXT_LDR;
      g || (g = e.__AMP_EXT_LDR = E());
      if (g[b]) return g[b];
      Fi(a.win, b);
      return (g[b] = this.preloadExtension(b, c).then(function() {
        return d.installExtensionInDoc(a, b);
      }));
    };
    f.reloadExtension = function(a) {
      var b = Xl(this, a, !1);
      this.Wb[a] && delete this.Wb[a];
      b.setAttribute("i-amphtml-loaded-new-version", a);
      b = b.src.match(/^(.*)\/(.*)-([0-9.]+)\.js$/i);
      var c = {
        extensionId: b ? b[2] : void 0,
        extensionVersion: b ? b[3] : void 0
      };
      return this.preloadExtension(a, c.extensionVersion);
    };
    function Xl(a, b, c) {
      c = void 0 === c ? !0 : c;
      var d =
        ":not([i-amphtml-loaded-new-version])" +
        (c ? "" : ":not([i-amphtml-inserted])");
      return a.win.document.head.querySelector(
        'script[src*="/' + b + '-"]' + d
      );
    }
    f.loadElementClass = function(a) {
      return this.preloadExtension(a).then(function(b) {
        return b.elements[a].implementationClass;
      });
    };
    f.addElement = function(a, b, c) {
      Yl(this, a).extension.elements[a] = { implementationClass: b, css: c };
      this.addDocFactory(function(d) {
        Zl(d, a, b, c);
      });
    };
    function Zl(a, b, c, d) {
      d
        ? Xe(
            a,
            d,
            function() {
              $l(a.win, b, c);
            },
            !1,
            b
          )
        : $l(a.win, b, c);
    }
    function $l(a, b, c) {
      var d = Ci(a);
      if (!d[b]) Gi(a, b, c);
      else if (d[b] != c)
        for (
          D(
            d[b] == Xh,
            "%s is already registered. The script tag for %s is likely included twice in the page.",
            b,
            b
          ),
            d[b] = c,
            d = 0;
          d < Wh.length;
          d++
        ) {
          var e = Wh[d].element;
          e.tagName.toLowerCase() == b &&
            e.ownerDocument.defaultView == a &&
            (Di(e, c), Wh.splice(d--, 1));
        }
      S(a, b, am);
    }
    f.addService = function(a, b) {
      Yl(this).extension.services.push({ serviceName: a, serviceClass: b });
      this.addDocFactory(function(c) {
        T(c, a, b, !0);
      });
    };
    f.addDocFactory = function(a, b) {
      var c = Yl(this, b);
      c.docFactories.push(a);
      if (this.Pa && this.ua.isSingleDoc()) {
        var d = this.ua.getAmpDoc(this.win.document);
        (d.declaresExtension(this.Pa) || c.auto) && a(d);
      }
    };
    f.installExtensionsInDoc = function(a, b) {
      var c = this,
        d = [];
      b.forEach(function(b) {
        d.push(c.installExtensionInDoc(a, b));
      });
      return Promise.all(d);
    };
    f.installExtensionInDoc = function(a, b) {
      var c = Vl(this, b, !1);
      return Wl(c).then(function() {
        a.declareExtension(b);
        c.docFactories.forEach(function(c) {
          try {
            c(a);
          } catch (e) {
            eb("Doc factory failed: ", e, b);
          }
        });
      });
    };
    function Vl(a, b, c) {
      var d = a.Wb[b];
      d ||
        ((d = {
          extension: { elements: {}, services: [] },
          auto: c,
          docFactories: [],
          promise: void 0,
          resolve: void 0,
          reject: void 0,
          loaded: void 0,
          error: void 0,
          scriptPresent: void 0
        }),
        (a.Wb[b] = d));
      return d;
    }
    function Yl(a, b) {
      a.Pa || C().error("extensions", "unknown extension for ", b);
      return Vl(a, a.Pa || "_UNKNOWN_", !0);
    }
    function Wl(a) {
      if (!a.promise)
        if (a.loaded) a.promise = Promise.resolve(a.extension);
        else if (a.error) a.promise = Promise.reject(a.error);
        else {
          var b = new I();
          a.promise = b.promise;
          a.resolve = b.resolve;
          a.reject = b.reject;
        }
      return a.promise;
    }
    function bm(a) {
      Sl.forEach(function(b) {
        Fi(a, b);
      });
    }
    function am() {
      return {};
    }
    (function() {
      gb = Wa;
      C();
      z();
    })();
    (function(a) {
      self.__AMP_REPORT_ERROR = a;
    })(
      function(a, b, c) {
        rf(b, c);
        b &&
          a &&
          Ra(b.message) &&
          !(0 <= b.message.indexOf("\u200b\u200b\u200b\u200b")) &&
          Ed(a).isSingleDoc() &&
          ((b = G({ errorName: b.name, errorMessage: b.message })),
          (a = Ed(a)
            .getSingleDoc()
            .getRootNode()),
          mf(a.documentElement || a.body || a, b));
      }.bind(null, self)
    );
    function cm(a) {
      function b(a) {
        function b() {
          g.then(function() {
            "function" == typeof a
              ? a(c.AMP, c.AMP._)
              : e.registerExtension(a.n, a.f, c.AMP);
          });
        }
        "function" != typeof a && a.i
          ? dm(e, a).then(function() {
              return em(c, a, b);
            })
          : em(c, a, b);
      }
      var c = self;
      if (c.__AMP_TAG) Promise.resolve();
      else {
        c.__AMP_TAG = !0;
        var d = c.AMP || [];
        S(c, "extensions", Ul);
        var e = Gd(c);
        Rl(c);
        bm(c);
        c.AMP = { win: c, _: c.AMP ? c.AMP._ : void 0 };
        c.AMP.config = Pa;
        c.AMP.BaseElement = Ie;
        c.AMP.BaseTemplate = Ke;
        c.AMP.registerElement = e.addElement.bind(e);
        c.AMP.registerTemplate = function(a, b) {
          var d = U(c, "templates");
          if (d.Lb[a]) {
            var e = d.ie[a];
            D(e, "Duplicate template type: %s", a);
            delete d.ie[a];
            e(b);
          } else d.Lb[a] = Promise.resolve(b);
        };
        c.AMP.registerServiceForDoc = e.addService.bind(e);
        c.AMP.isExperimentOn = Q.bind(null, c);
        c.AMP.toggleExperiment = ed.bind(null, c);
        c.AMP.setLogLevel = Ta.bind(null);
        c.AMP.setTickFunction = function() {};
        var g = a(c, e);
        for (a = 0; a < d.length; a++) {
          var h = d[a];
          if (fm(c, h)) d.splice(a--, 1);
          else if ("function" == typeof h || "high" == h.p) {
            try {
              b(h);
            } catch (k) {
              C().error("runtime", "Extension failed: ", k, h.n);
            }
            d.splice(a--, 1);
          }
        }
        gm(c, function() {
          c.AMP.push = function(a) {
            fm(c, a) || b(a);
          };
          for (var a = 0; a < d.length; a++) {
            var e = d[a];
            if (!fm(c, e))
              try {
                b(e);
              } catch (m) {
                C().error("runtime", "Extension failed: ", m, e.n);
              }
          }
          d.length = 0;
        });
        c.AMP.push || (c.AMP.push = d.push.bind(d));
        Id(c).isIos() && X(c.document.documentElement, "cursor", "pointer");
      }
    }
    function dm(a, b) {
      if (Array.isArray(b.i))
        return (
          (b = b.i.map(function(b) {
            return a.preloadExtension(b);
          })),
          Promise.all(b)
        );
      if ("string" == typeof b.i) return a.preloadExtension(b.i);
      C().error("RUNTIME", "dependency is neither an array or a string", b.i);
      return Promise.resolve();
    }
    function em(a, b, c) {
      "function" == typeof b || "high" == b.p
        ? Promise.resolve().then(c)
        : ((c.displayName = b.n), oi(a.document, c));
    }
    function hm() {
      cm(function(a) {
        var b = a.document.documentElement,
          c = Ed(a).getSingleDoc();
        a.AMP.ampdoc = c;
        var d = W(b);
        a.AMP.viewer = d;
        u().development &&
          ((a.AMP.toggleRuntime = d.toggleRuntime.bind(d)),
          (a.AMP.resources = Jd(b)));
        b = Ld(b);
        a.AMP.viewport = {};
        a.AMP.viewport.getScrollLeft = b.getScrollLeft.bind(b);
        a.AMP.viewport.getScrollWidth = b.getScrollWidth.bind(b);
        a.AMP.viewport.getWidth = b.getWidth.bind(b);
        return rb(a.document).then(function() {
          Ei(c);
        });
      });
    }
    function fm(a, b) {
      if (
        !Q(a, "version-locking") ||
        "function" == typeof b ||
        "1910302211460" == b.v
      )
        return !1;
      Gd(a).reloadExtension(b.n);
      return !0;
    }
    function gm(a, b) {
      Q(a, "pump-early-frame")
        ? a.document.body
          ? 0 < Ve(a).length
            ? b()
            : V(a).delay(b, 1)
          : b()
        : b();
    }
    function im() {
      var a = self;
      ve(a.document, function() {
        return jm(a);
      });
    }
    function jm(a) {
      var b = 0,
        c = a.performance;
      c &&
        c.timing &&
        c.timing.responseStart &&
        (b = Date.now() - c.timing.responseStart);
      var d = Math.max(1, 250 - b);
      a.setTimeout(function() {
        km(a);
        var b = a.document.styleSheets;
        if (b) {
          for (
            var c = a.document.querySelectorAll(
                'link[rel~="stylesheet"]:not([href^="' +
                  String(Oa.cdn).replace(jb, kb) +
                  '"])'
              ),
              h = [],
              k = 0;
            k < c.length;
            k++
          ) {
            for (var l = c[k], m = !1, n = 0; n < b.length; n++)
              if (b[n].ownerNode == l) {
                m = !0;
                break;
              }
            m || h.push(l);
          }
          k = {};
          for (l = 0; l < h.length; k = { la: k.la, Tc: k.Tc }, l++)
            (k.la = h[l]),
              (k.Tc = k.la.media || "all"),
              (k.la.media = "print"),
              (k.la.onload = (function(b) {
                return function() {
                  b.la.media = b.Tc;
                  km(a);
                };
              })(k)),
              k.la.setAttribute("i-amphtml-timeout", d),
              k.la.parentNode.insertBefore(k.la, k.la.nextSibling);
        }
      }, d);
    }
    function km(a) {
      a = a.document;
      if (a.fonts && a.fonts.values)
        for (var b = a.fonts.values(); (a = b.next()); ) {
          var c = a.value;
          if (!c) break;
          "loading" == c.status &&
            "display" in c &&
            "auto" == c.display &&
            (c.display = "swap");
        }
    }
    function lm(a) {
      var b = ["\u26a1", "amp"],
        c = a.documentElement,
        d = b.some(function(a) {
          return c.hasAttribute(a);
        });
      return d;
    }
    function mm(a) {
      var b = a.win;
      lm(b.document) &&
        a.isSingleDoc() &&
        pi(a, function() {
          Gd(b).installExtensionForDoc(a, "amp-auto-lightbox");
        });
    }
    function nm(a) {
      var b = !0;
      this.win = a;
      this.Hb = null;
      if (b) {
        var c = E();
        a.name &&
          0 == a.name.indexOf("__AMP__") &&
          Object.assign(c, q(a.name.substring(7)));
        a.location && a.location.hash && Object.assign(c, q(a.location.hash));
        this.Hb = new om(a, { params: c });
        a.document.__AMPDOC = this.Hb;
      }
      this.hg = Q(a, "ampdoc-fie");
      this.uf = !b;
    }
    f = nm.prototype;
    f.isSingleDoc = function() {
      return !!this.Hb;
    };
    f.getSingleDoc = function() {
      return this.Hb;
    };
    f.getAmpDocIfAvailable = function(a) {
      if (this.hg) {
        for (var b = a; b; ) {
          var c =
            a.everAttached && "function" === typeof a.getAmpDoc
              ? a.getAmpDoc()
              : null;
          if (c) return c;
          b = tb(b);
          if (!b) break;
          var d = b.__AMPDOC;
          if (d) return d;
          b = b.host ? b.host : rd(b, this.win);
        }
        return null;
      }
      for (b = a; b; ) {
        if (
          (d =
            a.everAttached && "function" === typeof a.getAmpDoc
              ? a.getAmpDoc()
              : null)
        )
          return d;
        if ((d = rd(b, this.win))) b = d;
        else {
          if (!this.uf) break;
          b = 9 == b.nodeType ? b : gf(b);
          if (!b) break;
          if ((d = b.__AMPDOC)) return d;
          b = b.host;
        }
      }
      return this.Hb;
    };
    f.getAmpDoc = function(a) {
      var b = this.getAmpDocIfAvailable(a);
      if (!b) throw C().createError("No ampdoc found for", a);
      return b;
    };
    f.installShadowDoc = function(a, b, c) {
      this.uf = !0;
      a = new pm(this.win, a, b, c);
      return (b.__AMPDOC = a);
    };
    f.installFieDoc = function(a, b, c) {
      var d = b.document;
      a = new qm(b, a, this.getAmpDoc(b.frameElement), c);
      return (d.__AMPDOC = a);
    };
    function rm(a, b, c) {
      var d = this;
      this.win = a;
      this.wc = b;
      this.F = (c && c.signals) || new di();
      this.Xd = (c && c.params) || E();
      this.Te = [];
      this.oe =
        (c && c.visibilityState) ||
        (this.Xd.visibilityState &&
          C().assertEnumValue(
            Oe,
            this.Xd.visibilityState,
            "VisibilityState"
          )) ||
        null;
      this.Rc = null;
      this.eg = new Y();
      this.qf = null;
      this.ke = [];
      var e = this.le.bind(this);
      this.wc && this.ke.push(this.wc.onVisibilityChanged(e));
      Jl(this.win.document, e);
      this.ke.push(function() {
        return Ll(d.win.document, e);
      });
      this.le();
    }
    f = rm.prototype;
    f.dispose = function() {
      this.ke.forEach(function(a) {
        return a();
      });
    };
    f.isSingleDoc = function() {
      return null;
    };
    f.getParent = function() {
      return this.wc;
    };
    f.getWin = function() {
      return this.win;
    };
    f.signals = function() {
      return this.F;
    };
    f.getParam = function(a) {
      a = this.Xd[a];
      return null == a ? null : a;
    };
    f.declaresExtension = function(a) {
      return -1 != this.Te.indexOf(a);
    };
    f.declareExtension = function(a) {
      this.declaresExtension(a) || this.Te.push(a);
    };
    f.getRootNode = function() {
      return null;
    };
    f.getHeadNode = function() {};
    f.isBodyAvailable = function() {
      return !1;
    };
    f.getBody = function() {
      return null;
    };
    f.waitForBodyOpen = function() {
      return null;
    };
    f.isReady = function() {
      return null;
    };
    f.whenReady = function() {
      return null;
    };
    f.getUrl = function() {
      return null;
    };
    f.getElementById = function(a) {
      return this.getRootNode().getElementById(a);
    };
    f.contains = function(a) {
      return this.getRootNode().contains(a);
    };
    f.overrideVisibilityState = function(a) {
      this.oe != a && ((this.oe = a), this.le());
    };
    f.le = function() {
      for (
        var a = Il(this.win.document), b = "visible", c = this.wc;
        c;
        c = c.getParent()
      )
        if ("visible" != c.getVisibilityState()) {
          b = c.getVisibilityState();
          break;
        }
      var d = this.oe || "visible";
      c =
        "visible" == d && "visible" == b && "visible" == a
          ? "visible"
          : "hidden" == a && "paused" == d
          ? a
          : "paused" == d || "inactive" == d
          ? d
          : "paused" == b || "inactive" == b
          ? b
          : "prerender" == d || "prerender" == a || "prerender" == b
          ? "prerender"
          : "hidden";
      this.Rc != c &&
        ((this.Rc = c),
        "visible" == c
          ? ((this.qf = Date.now()),
            this.F.signal("-ampdoc-first-visible"),
            this.F.signal("-ampdoc-next-visible"))
          : this.F.reset("-ampdoc-next-visible"),
        this.eg.fire());
    };
    f.whenFirstVisible = function() {
      return this.F.whenSignal("-ampdoc-first-visible").then(function() {});
    };
    f.whenNextVisible = function() {
      return this.F.whenSignal("-ampdoc-next-visible").then(function() {});
    };
    f.getFirstVisibleTime = function() {
      return this.F.get("-ampdoc-first-visible");
    };
    f.getLastVisibleTime = function() {
      return this.qf;
    };
    f.getVisibilityState = function() {
      return this.Rc;
    };
    f.isVisible = function() {
      return "visible" == this.Rc;
    };
    f.hasBeenVisible = function() {
      return null != this.getLastVisibleTime();
    };
    f.onVisibilityChanged = function(a) {
      return this.eg.add(a);
    };
    function om(a, b) {
      rm.call(this, a, null, b);
      var c = this;
      this.cb = this.win.document.body
        ? Promise.resolve(this.win.document.body)
        : rb(this.win.document).then(function() {
            return c.getBody();
          });
      this.Ab = xe(this.win.document);
    }
    p(om, rm);
    f = om.prototype;
    f.isSingleDoc = function() {
      return !0;
    };
    f.getRootNode = function() {
      return this.win.document;
    };
    f.getUrl = function() {
      return this.win.location.href;
    };
    f.getHeadNode = function() {
      return this.win.document.head;
    };
    f.isBodyAvailable = function() {
      return !!this.win.document.body;
    };
    f.getBody = function() {
      return this.win.document.body;
    };
    f.waitForBodyOpen = function() {
      return this.cb;
    };
    f.isReady = function() {
      return te(this.win.document);
    };
    f.whenReady = function() {
      return this.Ab;
    };
    function pm(a, b, c, d) {
      rm.call(this, a, null, d);
      this.Ob = b;
      this.Pf = c;
      this.Yc = null;
      var e = new I();
      this.cb = e.promise;
      this.Ae = e.resolve;
      this.Cb = !1;
      var g = new I();
      this.Ab = g.promise;
      this.Bb = g.resolve;
    }
    p(pm, rm);
    f = pm.prototype;
    f.isSingleDoc = function() {
      return !1;
    };
    f.getRootNode = function() {
      return this.Pf;
    };
    f.getUrl = function() {
      return this.Ob;
    };
    f.getHeadNode = function() {
      return this.Pf;
    };
    f.isBodyAvailable = function() {
      return !!this.Yc;
    };
    f.getBody = function() {
      return this.Yc;
    };
    f.setBody = function(a) {
      this.Yc = a;
      this.Ae(a);
      this.Ae = void 0;
    };
    f.waitForBodyOpen = function() {
      return this.cb;
    };
    f.isReady = function() {
      return this.Cb;
    };
    f.setReady = function() {
      this.Cb = !0;
      this.Bb();
      this.Bb = void 0;
    };
    f.whenReady = function() {
      return this.Ab;
    };
    function qm(a, b, c, d) {
      rm.call(this, a, c, d);
      var e = this;
      this.Ob = b;
      this.cb = this.win.document.body
        ? Promise.resolve(this.win.document.body)
        : rb(this.win.document).then(function() {
            return e.getBody();
          });
      this.Cb = !1;
      a = new I();
      this.Ab = a.promise;
      this.Bb = a.resolve;
    }
    p(qm, rm);
    f = qm.prototype;
    f.isSingleDoc = function() {
      return !1;
    };
    f.getRootNode = function() {
      return this.win.document;
    };
    f.getUrl = function() {
      return this.Ob;
    };
    f.getHeadNode = function() {
      return this.win.document.head;
    };
    f.isBodyAvailable = function() {
      return !!this.win.document.body;
    };
    f.getBody = function() {
      return this.win.document.body;
    };
    f.waitForBodyOpen = function() {
      return this.cb;
    };
    f.isReady = function() {
      return this.Cb;
    };
    f.whenReady = function() {
      return this.Ab;
    };
    f.setReady = function() {
      this.Cb = !0;
      this.Bb();
      this.Bb = void 0;
    };
    function sm() {
      var a = self;
      S(a, "ampdoc", function() {
        return new nm(a);
      });
    }
    function tm(a) {
      return new Promise(function(b) {
        a.waitForBodyOpen().then(function() {
          var c = a.getBody();
          pb(
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
    var um = ["AMP-AD", "AMP-ANALYTICS", "AMP-PIXEL", "AMP-AD-EXIT"];
    function vm(a, b, c) {
      var d = !0;
      a = kd(a);
      return wm(a, b, function(a) {
        return !a.isDisplayed() ||
          (!a.overlaps(c) && !a.isFixed()) ||
          (d && !a.prerenderAllowed())
          ? !1
          : !0;
      }).then(function(a) {
        var b = [];
        a.forEach(function(a) {
          um.includes(a.element.tagName) || b.push(a.loadedOnce());
        });
        return Promise.all(b);
      });
    }
    function wm(a, b, c) {
      return a
        .signals()
        .whenSignal("ready-scan")
        .then(function() {
          var c = [];
          Jd(a)
            .get()
            .forEach(function(a) {
              a.hasBeenMeasured() ||
                a.hostWin != b ||
                a.hasOwner() ||
                c.push(a.getPageLayoutBoxAsync());
            });
          return Promise.all(c);
        })
        .then(function() {
          return Jd(a)
            .get()
            .filter(function(a) {
              return (
                a.hostWin == b && !a.hasOwner() && a.hasBeenMeasured() && c(a)
              );
            });
        });
    }
    function xm(a) {
      var b = this;
      this.win = a;
      this.yd = this.win.Date.now();
      this.kb = [];
      this.w = this.h = this.B = null;
      this.tb = this.Gd = !1;
      this.Ve = E();
      this.te = "";
      this.af = this.Ye = this.tf = null;
      this.Na = this.Qb = this.Hc = this.hc = 0;
      this.Sf = this.Rf = this.Jb = this.Ib = !1;
      var c = this.win.PerformanceObserver;
      if (c) {
        var d = c.supportedEntryTypes;
        d &&
          ((this.Ib = this.win.PerformanceObserver.supportedEntryTypes.includes(
            "layoutShift"
          )),
          (this.Jb = this.win.PerformanceObserver.supportedEntryTypes.includes(
            "layout-shift"
          )),
          (this.Rf = this.win.PerformanceObserver.supportedEntryTypes.includes(
            "firstInput"
          )),
          (this.Sf = this.win.PerformanceObserver.supportedEntryTypes.includes(
            "first-input"
          )));
      }
      this.Tb = this.ih.bind(this);
      this.tc = this.tc.bind(this);
      this.addEnabledExperiment("rtv-" + u(this.win).rtvVersion);
      cd(this.win) && this.addEnabledExperiment("canary");
      xe(a.document).then(function() {
        b.tick("dr");
        b.flush();
      });
      ye(a.document).then(function() {
        b.tick("ol");
        if (
          !b.win.PerformancePaintTiming &&
          b.win.chrome &&
          "function" == typeof b.win.chrome.loadTimes
        ) {
          var a =
            1e3 * b.win.chrome.loadTimes().firstPaintTime -
            b.win.performance.timing.navigationStart;
          1 >= a || b.tickDelta("fp", a);
        }
        b.flush();
      });
      ym(this);
      zm(this);
    }
    f = xm.prototype;
    f.coreServicesAvailable = function() {
      var a = this,
        b = this.win.document.documentElement;
      this.B = kd(b);
      this.h = W(b);
      this.w = Jd(b);
      this.tb = this.h.isEmbedded() && "1" === this.h.getParam("csi");
      this.B.onVisibilityChanged(this.flush.bind(this));
      Am(this);
      var c = this.h.whenMessagingReady();
      this.B.whenFirstVisible().then(function() {
        a.tick("ofv");
        a.flush();
      });
      this.win.PerformanceLayoutJank &&
        (this.win.addEventListener("visibilitychange", this.Tb, {
          capture: !0
        }),
        this.B.onVisibilityChanged(this.tc));
      if (this.Ib || this.Jb)
        this.win.addEventListener("visibilitychange", this.Tb, { capture: !0 }),
          this.B.onVisibilityChanged(this.tc);
      return c
        ? c
            .then(function() {
              a.tickDelta("msr", a.win.Date.now() - a.yd);
              return Bm(a);
            })
            .then(function() {
              a.Gd = !0;
              Cm(a);
              a.flush();
            })
        : Promise.resolve();
    };
    function Bm(a) {
      var b = Ed(a.win).getSingleDoc();
      return tm(b).then(function(b) {
        b && a.addEnabledExperiment("story");
      });
    }
    function ym(a) {
      function b(b) {
        "first-paint" != b.name || c
          ? "first-contentful-paint" != b.name || d
            ? ("firstInput" !== b.entryType && "first-input" !== b.entryType) ||
              e
              ? "layoutJank" === b.entryType
                ? (a.Qb += b.fraction)
                : "layoutShift" === b.entryType
                ? (a.Na += b.value)
                : "layout-shift" !== b.entryType ||
                  b.hadRecentInput ||
                  (a.Na += b.value)
              : (a.tickDelta("fid", b.processingStart - b.startTime), (e = !0))
            : (a.tickDelta("fcp", b.startTime + b.duration), (d = !0))
          : (a.tickDelta("fp", b.startTime + b.duration), (c = !0));
      }
      var c = !1,
        d = !1,
        e = !1,
        g = [];
      a.win.PerformancePaintTiming &&
        (a.win.performance.getEntriesByType("paint").forEach(b),
        g.push("paint"));
      a.Rf &&
        (a.win.performance.getEntriesByType("firstInput").forEach(b),
        g.push("firstInput"));
      if (a.Sf) {
        var h = new a.win.PerformanceObserver(function(c) {
          c.getEntries().forEach(b);
          a.flush();
        });
        h.observe({ type: "first-input", buffered: !0 });
      }
      a.win.PerformanceLayoutJank &&
        (a.win.performance.getEntriesByType("layoutJank").forEach(b),
        g.push("layoutJank"));
      a.Ib &&
        (a.win.performance.getEntriesByType("layoutShift").forEach(b),
        g.push("layoutShift"));
      if (a.Jb) {
        var k = new a.win.PerformanceObserver(function(c) {
          c.getEntries().forEach(b);
          a.flush();
        });
        k.observe({ type: "layout-shift", buffered: !0 });
      }
      if (0 !== g.length) {
        var l = new a.win.PerformanceObserver(function(c) {
          c.getEntries().forEach(b);
          a.flush();
        });
        try {
          l.observe({ entryTypes: g });
        } catch (m) {
          C().warn(m);
        }
      }
    }
    function zm(a) {
      if (a.win.perfMetrics && a.win.perfMetrics.onFirstInputDelay)
        a.win.perfMetrics.onFirstInputDelay(function(b) {
          a.tickDelta("fid-polyfill", b);
          a.flush();
        });
    }
    f.ih = function() {
      "hidden" === this.win.document.visibilityState &&
        (this.win.PerformanceLayoutJank && Dm(this),
        (this.Ib || this.Jb) && Em(this));
    };
    f.tc = function() {
      "inactive" === this.B.getVisibilityState() &&
        (this.win.PerformanceLayoutJank && Dm(this),
        (this.Ib || this.Jb) && Em(this));
    };
    function Dm(a) {
      0 === a.hc
        ? (a.tickDelta("lj", a.Qb), a.flush(), (a.hc = 1))
        : 1 === a.hc &&
          (a.tickDelta("lj-2", a.Qb),
          a.flush(),
          (a.hc = 2),
          a.win.removeEventListener("visibilitychange", a.Tb, { capture: !0 }));
    }
    function Em(a) {
      0 === a.Hc
        ? (a.tickDelta("cls", a.Na), a.flush(), (a.Hc = 1))
        : 1 === a.Hc &&
          (a.tickDelta("cls-2", a.Na),
          a.flush(),
          (a.Hc = 2),
          a.win.removeEventListener("visibilitychange", a.Tb, { capture: !0 }));
    }
    function Am(a) {
      var b = !a.B.hasBeenVisible(),
        c = b ? -1 : a.yd;
      a.B.whenFirstVisible().then(function() {
        c = a.win.Date.now();
        a.mark("visible");
      });
      Fm(a).then(function() {
        if (b) {
          var d = -1 < c ? a.win.Date.now() - c : 0;
          a.B.whenFirstVisible().then(function() {
            a.tickDelta("pc", d);
          });
          Gm(a, d);
          a.mark("pc");
        } else a.tick("pc"), Gm(a, a.win.Date.now() - c);
        a.flush();
      });
    }
    function Fm(a) {
      var b = a.win.document.documentElement,
        c = Ld(b).getSize(),
        d = M(0, 0, c.width, c.height);
      return a.w.whenFirstPass().then(function() {
        return vm(b, a.win, d);
      });
    }
    f.tick = function(a, b) {
      var c = void 0 == b ? this.win.Date.now() : void 0,
        d = G({
          label: a,
          value: c,
          delta: null != b ? Math.max(b, 0) : void 0
        });
      this.Gd && this.tb
        ? this.h.sendMessage("tick", d)
        : (50 <= this.kb.length && this.kb.shift(), this.kb.push(d));
      1 == arguments.length && this.mark(a);
      var e = Math.round(null != b ? Math.max(b, 0) : c - this.yd);
      switch (a) {
        case "fcp":
          this.Ye = e;
          break;
        case "pc":
          this.af = e;
          break;
        case "mbv":
          this.tf = e;
      }
    };
    f.mark = function(a) {
      this.win.performance &&
        this.win.performance.mark &&
        1 == arguments.length &&
        this.win.performance.mark(a);
    };
    f.tickDelta = function(a, b) {
      this.tick(a, b);
    };
    f.tickSinceVisible = function(a) {
      var b = this.win.Date.now(),
        c = this.B ? this.B.getFirstVisibleTime() : 0;
      this.tickDelta(a, c ? Math.max(b - c, 0) : 0);
    };
    f.flush = function() {
      this.Gd &&
        this.tb &&
        this.h.sendMessage("sendCsi", G({ ampexp: this.te }), !0);
    };
    f.throttledFlush = function() {
      this.Vf || (this.Vf = hf(this.win, this.flush.bind(this)));
      this.Vf();
    };
    f.addEnabledExperiment = function(a) {
      this.Ve[a] = !0;
      this.te = Object.keys(this.Ve).join(",");
    };
    function Cm(a) {
      a.h &&
        (a.tb &&
          a.kb.forEach(function(b) {
            a.h.sendMessage("tick", b);
          }),
        (a.kb.length = 0));
    }
    function Gm(a, b) {
      a.h && a.h.sendMessage("prerenderComplete", G({ value: b }), !0);
    }
    f.isPerformanceTrackingOn = function() {
      return this.tb;
    };
    f.getFirstContentfulPaint = function() {
      return this.Ye;
    };
    f.getMakeBodyVisible = function() {
      return this.tf;
    };
    f.getFirstViewportReady = function() {
      return this.af;
    };
    function Hm(a, b) {
      this.U = a;
      this.G = b;
      this.Mc = !1;
      this.fe = 0;
      this.He = this.hh.bind(this);
      this.Ge = this.gh.bind(this);
      this.Fe = this.fh.bind(this);
      this.Ee = this.eh.bind(this);
      this.U.addEventListener("touchstart", this.He, !0);
    }
    f = Hm.prototype;
    f.cleanup = function() {
      Im(this);
      this.U.removeEventListener("touchstart", this.He, !0);
    };
    f.hh = function(a) {
      this.Mc ||
        !a.touches ||
        1 != a.touches.length ||
        0 < this.G.getScrollTop() ||
        ((a = a.touches[0].clientY),
        (this.Mc = !0),
        (this.fe = a),
        this.U.addEventListener("touchmove", this.Ge, !0),
        this.U.addEventListener("touchend", this.Fe, !0),
        this.U.addEventListener("touchcancel", this.Ee, !0));
    };
    function Im(a) {
      a.Mc = !1;
      a.fe = 0;
      a.U.removeEventListener("touchmove", a.Ge, !0);
      a.U.removeEventListener("touchend", a.Fe, !0);
      a.U.removeEventListener("touchcancel", a.Ee, !0);
    }
    f.gh = function(a) {
      if (this.Mc) {
        var b = a.touches[0].clientY - this.fe;
        0 < b && a.preventDefault();
        0 != b && Im(this);
      }
    };
    f.fh = function() {
      Im(this);
    };
    f.eh = function() {
      Im(this);
    };
    function Jm(a) {
      var b = a.win;
      lm(b.document) &&
        Id(a.win).isStandalone() &&
        pi(a, function() {
          Gd(b)
            .installExtensionForDoc(a, "amp-standalone")
            .then(function() {
              return yd(a.getBody(), "standalone", "amp-standalone");
            })
            .then(function(a) {
              return a.initialize();
            });
        });
    }
    function Km() {
      var a = self,
        b = a.location.href;
      if (!L(b, "about:")) {
        var c = !1;
        u().development &&
          (c = "0" !== q(a.location.originalHash || a.location.hash).validate);
        c
          ? Lm(a.document, Oa.cdn + "/v0/validator.js").then(function() {
              amp.validator.validateUrlAndLog(b, a.document);
            })
          : u().examiner && Lm(a.document, Oa.cdn + "/examiner.js");
      }
    }
    function Lm(a, b) {
      var c = a.createElement("script");
      c.src = b;
      b = se(c).then(
        function() {
          a.head.removeChild(c);
        },
        function() {}
      );
      a.head.appendChild(c);
      return b;
    }
    if (!self.IS_AMP_ALT) {
      self.location && (self.location.originalHash = self.location.hash);
      var ampdocService;
      try {
        uf(), sm(), (ampdocService = Ed(self));
      } catch (a) {
        throw (ef(self.document), a);
      }
      oi(self.document, function() {
        var a = ampdocService.getAmpDoc(self.document);
        S(self, "performance", xm);
        var b = Hd(self);
        self.document.documentElement.hasAttribute(
          "i-amphtml-no-boilerplate"
        ) && b.addEnabledExperiment("no-boilerplate");
        S(self, "platform", Zi);
        im();
        b.tick("is");
        Xe(
          a,
          Pe + Qe,
          function() {
            oi(self.document, function() {
              Rl(self);
              var c = !!a.getParent();
              T(a, "url", Qj, !0);
              c ? vd(a, "documentInfo") : T(a, "documentInfo", ah);
              c ? vd(a, "cid") : T(a, "cid", Eg);
              c ? vd(a, "viewer") : T(a, "viewer", Dk, !0);
              c ? vd(a, "viewport") : T(a, "viewport", Al, !0);
              T(a, "hidden-observer", Dh);
              c ? vd(a, "history") : T(a, "history", Uh);
              c ? vd(a, "resources") : T(a, "resources", gj);
              c ? vd(a, "owners") : T(a, "owners", Qi);
              c ? vd(a, "url-replace") : Bk(a);
              T(a, "action", Ef, !0);
              T(a, "standard-actions", Dj, !0);
              c ? vd(a, "storage") : Oj(a);
              T(a, "navigation", qh, !0);
              Ah(a);
              b.coreServicesAvailable();
              ih();
            });
            oi(self.document, function() {
              hm();
            });
            oi(self.document, function() {
              var a = self;
              Gi(a, "amp-img", Ii);
              Gi(a, "amp-pixel", Xi);
              Gi(a, "amp-layout", Oi);
            });
            oi(self.document, function() {
              Ei(a);
            });
            oi(
              self.document,
              function() {
                var b = self,
                  d = b.document.documentElement;
                "0" == W(d).getParam("p2r") &&
                  Id(b).isChrome() &&
                  new Hm(b.document, Ld(d));
                mm(a);
                Jm(a);
                Km();
                cf();
                He();
              },
              !0
            );
            oi(self.document, function() {
              b.tick("e_is");
              Jd(a).ampInitComplete();
              b.flush();
            });
          },
          !0,
          "amp-runtime"
        );
      });
      self.console &&
        (console.info || console.log).call(
          console,
          "Powered by AMP \u26a1 HTML \u2013 Version 1910302211460",
          self.location.href
        );
      self.document.documentElement.setAttribute(
        "amp-version",
        "1910302211460"
      );
    }
  })((AMP._ = AMP._ || {}));
} catch (e) {
  setTimeout(function() {
    var s = document.body.style;
    s.opacity = 1;
    s.visibility = "visible";
    s.animation = "none";
    s.WebkitAnimation = "none;";
  }, 1000);
  throw e;
}

//# sourceMappingURL=v0.js.map
