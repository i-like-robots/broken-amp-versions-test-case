(self.AMP = self.AMP || []).push({
  n: "amp-subscriptions-google",
  v: "1910302211460",
  f: function(AMP, _) {
    var e,
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
    function ha() {
      var a, b;
      this.promise = new Promise(function(c, d) {
        a = c;
        b = d;
      });
      this.resolve = a;
      this.reject = b;
    }
    self.__AMP_LOG = self.__AMP_LOG || {
      user: null,
      dev: null,
      userForEmbed: null
    };
    var ia = self.__AMP_LOG;
    function ja(a, b, c, d, f, g) {
      if (!ia.user) throw Error("failed to call initLogConstructor");
      return ia.user.assert(
        a,
        b,
        c,
        d,
        f,
        g,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0
      );
    }
    function ka() {
      var a = 100;
      this.zc = a;
      this.cb = this.Pb = 0;
      this.Ma = Object.create(null);
    }
    ka.prototype.has = function(a) {
      return !!this.Ma[a];
    };
    ka.prototype.get = function(a) {
      var b = this.Ma[a];
      if (b) return (b.access = ++this.cb), b.payload;
    };
    ka.prototype.put = function(a, b) {
      this.has(a) || this.Pb++;
      this.Ma[a] = { payload: b, access: this.cb };
      if (!(this.Pb <= this.zc)) {
        if (ia.dev) a = ia.dev;
        else throw Error("failed to call initLogConstructor");
        a.warn("lru-cache", "Trimming LRU cache");
        a = this.Ma;
        var c = this.cb + 1,
          d;
        for (d in a) {
          var f = a[d].access;
          if (f < c) {
            c = f;
            var g = d;
          }
        }
        void 0 !== g && (delete a[g], this.Pb--);
      }
    };
    var la, ma;
    function na(a) {
      var b;
      la ||
        ((la = self.document.createElement("a")),
        (ma = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new ka())));
      var c = b ? null : ma,
        d = la;
      if (c && c.has(a)) a = c.get(a);
      else {
        d.href = a;
        d.protocol || (d.href = d.href);
        var f = {
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
        "/" !== f.pathname[0] && (f.pathname = "/" + f.pathname);
        if (
          ("http:" == f.protocol && 80 == f.port) ||
          ("https:" == f.protocol && 443 == f.port)
        )
          (f.port = ""), (f.host = f.hostname);
        f.origin =
          d.origin && "null" != d.origin
            ? d.origin
            : "data:" != f.protocol && f.host
            ? f.protocol + "//" + f.host
            : f.href;
        c && c.put(a, f);
        a = f;
      }
      return a;
    }
    function oa(a, b) {
      a = a.__AMP_TOP || (a.__AMP_TOP = a);
      return pa(a, b);
    }
    function qa(a, b) {
      var c = ra(a);
      c = sa(c);
      return pa(c, b);
    }
    function ra(a) {
      return a.nodeType
        ? oa((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a)
        : a;
    }
    function sa(a) {
      a = ra(a);
      return a.isSingleDoc() ? a.win : a;
    }
    function pa(a, b) {
      var c = ta(a);
      a = c[b];
      a.obj ||
        ((a.obj = new a.ctor(a.context)),
        (a.ctor = null),
        (a.context = null),
        a.resolve && a.resolve(a.obj));
      return a.obj;
    }
    function ua(a) {
      var b = ta(a).subscriptions;
      if (b) {
        if (b.promise) return b.promise;
        pa(a, "subscriptions");
        return (b.promise = Promise.resolve(b.obj));
      }
      return null;
    }
    function ta(a) {
      var b = a.__AMP_SERVICES;
      b || (b = a.__AMP_SERVICES = {});
      return b;
    }
    function va() {
      var a = new ha(),
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
    function wa(a) {
      return xa(a).then(function(a) {
        return ja(
          a,
          "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.",
          "subscriptions",
          "amp-subscriptions",
          "amp-subscriptions",
          "amp-subscriptions"
        );
      });
    }
    function xa(a) {
      var b = ua(sa(a));
      if (b) return b;
      var c = ra(a);
      return c
        .waitForBodyOpen()
        .then(function() {
          var a = c.win;
          var b = c.win.document.head;
          if (b) {
            var g = {};
            b = b.querySelectorAll(
              "script[custom-element],script[custom-template]"
            );
            for (var h = 0; h < b.length; h++) {
              var k = b[h];
              k =
                k.getAttribute("custom-element") ||
                k.getAttribute("custom-template");
              g[k] = !0;
            }
            g = Object.keys(g);
          } else g = [];
          a = g.includes("amp-subscriptions")
            ? oa(a, "extensions").waitForExtension(a, "amp-subscriptions")
            : Promise.resolve();
          return a;
        })
        .then(function() {
          var b = c.win;
          if (
            b.__AMP_EXTENDED_ELEMENTS &&
            b.__AMP_EXTENDED_ELEMENTS["amp-subscriptions"]
          ) {
            b = sa(a);
            var f = ua(b);
            f
              ? (b = f)
              : ((b = ta(b)),
                (b.subscriptions = va()),
                (b = b.subscriptions.promise));
          } else b = null;
          return b;
        });
    } /*

 Copyright 2018 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS-IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.

 Copyright 2017 The Web Activities Authors. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS-IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
    var ya = {
        UNKNOWN: 0,
        IMPRESSION_PAYWALL: 1,
        IMPRESSION_AD: 2,
        IMPRESSION_OFFERS: 3,
        IMPRESSION_SUBSCRIBE_BUTTON: 4,
        IMPRESSION_SMARTBOX: 5,
        IMPRESSION_SWG_BUTTON: 6,
        IMPRESSION_CLICK_TO_SHOW_OFFERS: 7,
        IMPRESSION_CLICK_TO_SHOW_OFFERS_OR_ALREADY_SUBSCRIBED: 8,
        IMPRESSION_SUBSCRIPTION_COMPLETE: 9,
        IMPRESSION_ACCOUNT_CHANGED: 10,
        IMPRESSION_PAGE_LOAD: 11,
        ACTION_SUBSCRIBE: 1e3,
        ACTION_PAYMENT_COMPLETE: 1001,
        ACTION_ACCOUNT_CREATED: 1002,
        ACTION_ACCOUNT_ACKNOWLEDGED: 1003,
        ACTION_SUBSCRIPTIONS_LANDING_PAGE: 1004,
        ACTION_PAYMENT_FLOW_STARTED: 1005,
        ACTION_OFFER_SELECTED: 1006,
        ACTION_SWG_BUTTON_CLICK: 1007,
        ACTION_VIEW_OFFERS: 1008,
        ACTION_ALREADY_SUBSCRIBED: 1009,
        ACTION_NEW_DEFERRED_ACCOUNT: 1010,
        EVENT_PAYMENT_FAILED: 2e3,
        EVENT_CUSTOM: 3e3,
        EVENT_CONFIRM_TX_ID: 3001,
        EVENT_CHANGED_TX_ID: 3002,
        EVENT_GPAY_NO_TX_ID: 3003,
        EVENT_GPAY_CANNOT_CONFIRM_TX_ID: 3004,
        EVENT_SUBSCRIPTION_STATE: 4e3
      },
      za = {
        UNKNOWN_CLIENT: 0,
        SWG_CLIENT: 1,
        AMP_CLIENT: 2,
        PROPENSITY_CLIENT: 3,
        SWG_SERVER: 4,
        PUBLISHER_CLIENT: 5
      };
    function q(a) {
      a = void 0 === a ? [] : a;
      this.Y = null == a[1] ? null : a[1];
    }
    q.prototype.getComplete = function() {
      return this.Y;
    };
    q.prototype.setComplete = function(a) {
      this.Y = a;
    };
    q.prototype.toArray = function() {
      return [this.label(), this.Y];
    };
    q.prototype.label = function() {
      return "AccountCreationRequest";
    };
    function r(a) {
      a = void 0 === a ? [] : a;
      this.Tb = null == a[1] ? null : a[1];
      this.yb = null == a[2] ? null : a[2];
    }
    e = r.prototype;
    e.getSubscriberOrMember = function() {
      return this.Tb;
    };
    e.setSubscriberOrMember = function(a) {
      this.Tb = a;
    };
    e.getLinkRequested = function() {
      return this.yb;
    };
    e.setLinkRequested = function(a) {
      this.yb = a;
    };
    e.toArray = function() {
      return [this.label(), this.Tb, this.yb];
    };
    e.label = function() {
      return "AlreadySubscribedResponse";
    };
    function Aa(a) {
      a = void 0 === a ? [] : a;
      this.mb = null == a[1] ? null : a[1];
      this.Xb = null == a[2] ? null : a[2];
      this.Jb = null == a[3] ? null : a[3];
      this.ac = null == a[4] ? null : a[4];
      this.Zb = null == a[5] ? null : a[5];
      this.$b = null == a[6] ? null : a[6];
      this.na = null == a[7] ? null : a[7];
      this.Hb = null == a[8] ? null : a[8];
      this.wb = a[9] || [];
    }
    e = Aa.prototype;
    e.getEmbedderOrigin = function() {
      return this.mb;
    };
    e.setEmbedderOrigin = function(a) {
      this.mb = a;
    };
    e.getTransactionId = function() {
      return this.Xb;
    };
    e.setTransactionId = function(a) {
      this.Xb = a;
    };
    e.getReferringOrigin = function() {
      return this.Jb;
    };
    e.setReferringOrigin = function(a) {
      this.Jb = a;
    };
    e.getUtmSource = function() {
      return this.ac;
    };
    e.setUtmSource = function(a) {
      this.ac = a;
    };
    e.getUtmCampaign = function() {
      return this.Zb;
    };
    e.setUtmCampaign = function(a) {
      this.Zb = a;
    };
    e.getUtmMedium = function() {
      return this.$b;
    };
    e.setUtmMedium = function(a) {
      this.$b = a;
    };
    e.getSku = function() {
      return this.na;
    };
    e.setSku = function(a) {
      this.na = a;
    };
    e.getReadyToPay = function() {
      return this.Hb;
    };
    e.setReadyToPay = function(a) {
      this.Hb = a;
    };
    e.getLabelList = function() {
      return this.wb;
    };
    e.setLabelList = function(a) {
      this.wb = a;
    };
    e.toArray = function() {
      return [
        this.label(),
        this.mb,
        this.Xb,
        this.Jb,
        this.ac,
        this.Zb,
        this.$b,
        this.na,
        this.Hb,
        this.wb
      ];
    };
    e.label = function() {
      return "AnalyticsContext";
    };
    function Ba(a) {
      a = void 0 === a ? [] : a;
      this.nb = null == a[1] ? null : a[1];
      this.ub = null == a[2] ? null : a[2];
    }
    e = Ba.prototype;
    e.getEventOriginator = function() {
      return this.nb;
    };
    e.setEventOriginator = function(a) {
      this.nb = a;
    };
    e.getIsFromUserAction = function() {
      return this.ub;
    };
    e.setIsFromUserAction = function(a) {
      this.ub = a;
    };
    e.toArray = function() {
      return [this.label(), this.nb, this.ub];
    };
    e.label = function() {
      return "AnalyticsEventMeta";
    };
    function Ca(a) {
      a = void 0 === a ? [] : a;
      this.F = null == a[1] || void 0 == a[1] ? null : new Aa(a[1]);
      this.ob = null == a[2] ? null : a[2];
      this.Ra = null == a[3] || void 0 == a[3] ? null : new Ba(a[3]);
      this.Ta = null == a[4] || void 0 == a[4] ? null : new t(a[4]);
    }
    e = Ca.prototype;
    e.getContext = function() {
      return this.F;
    };
    e.setContext = function(a) {
      this.F = a;
    };
    e.getEvent = function() {
      return this.ob;
    };
    e.setEvent = function(a) {
      this.ob = a;
    };
    e.getMeta = function() {
      return this.Ra;
    };
    e.setMeta = function(a) {
      this.Ra = a;
    };
    e.getParams = function() {
      return this.Ta;
    };
    e.setParams = function(a) {
      this.Ta = a;
    };
    e.toArray = function() {
      return [
        this.label(),
        this.F ? this.F.toArray() : [],
        this.ob,
        this.Ra ? this.Ra.toArray() : [],
        this.Ta ? this.Ta.toArray() : []
      ];
    };
    e.label = function() {
      return "AnalyticsRequest";
    };
    function u(a) {
      a = void 0 === a ? [] : a;
      this.vb = null == a[1] ? null : a[1];
    }
    u.prototype.getJwt = function() {
      return this.vb;
    };
    u.prototype.setJwt = function(a) {
      this.vb = a;
    };
    u.prototype.toArray = function() {
      return [this.label(), this.vb];
    };
    u.prototype.label = function() {
      return "EntitlementsResponse";
    };
    function t(a) {
      a = void 0 === a ? [] : a;
      this.Qb = null == a[1] ? null : a[1];
      this.qb = null == a[2] ? null : a[2];
      this.rb = null == a[3] ? null : a[3];
    }
    e = t.prototype;
    e.getSmartboxMessage = function() {
      return this.Qb;
    };
    e.setSmartboxMessage = function(a) {
      this.Qb = a;
    };
    e.getGpayTransactionId = function() {
      return this.qb;
    };
    e.setGpayTransactionId = function(a) {
      this.qb = a;
    };
    e.getHadLogged = function() {
      return this.rb;
    };
    e.setHadLogged = function(a) {
      this.rb = a;
    };
    e.toArray = function() {
      return [this.label(), this.Qb, this.qb, this.rb];
    };
    e.label = function() {
      return "EventParams";
    };
    function Da(a) {
      a = void 0 === a ? [] : a;
      this.eb = null == a[1] ? null : a[1];
      this.Wb = null == a[2] ? null : a[2];
    }
    e = Da.prototype;
    e.getAuthCode = function() {
      return this.eb;
    };
    e.setAuthCode = function(a) {
      this.eb = a;
    };
    e.getToken = function() {
      return this.Wb;
    };
    e.setToken = function(a) {
      this.Wb = a;
    };
    e.toArray = function() {
      return [this.label(), this.eb, this.Wb];
    };
    e.label = function() {
      return "LinkSaveTokenRequest";
    };
    function v(a) {
      a = void 0 === a ? [] : a;
      this.Lb = null == a[1] ? null : a[1];
    }
    v.prototype.getRequested = function() {
      return this.Lb;
    };
    v.prototype.setRequested = function(a) {
      this.Lb = a;
    };
    v.prototype.toArray = function() {
      return [this.label(), this.Lb];
    };
    v.prototype.label = function() {
      return "LinkingInfoResponse";
    };
    function Ea(a) {
      a = void 0 === a ? [] : a;
      this.na = null == a[1] ? null : a[1];
      this.Bb = null == a[2] ? null : a[2];
    }
    e = Ea.prototype;
    e.getSku = function() {
      return this.na;
    };
    e.setSku = function(a) {
      this.na = a;
    };
    e.getOldSku = function() {
      return this.Bb;
    };
    e.setOldSku = function(a) {
      this.Bb = a;
    };
    e.toArray = function() {
      return [this.label(), this.na, this.Bb];
    };
    e.label = function() {
      return "SkuSelectedResponse";
    };
    function w(a) {
      a = void 0 === a ? [] : a;
      this.tb = null == a[1] ? null : a[1];
    }
    w.prototype.getIsClicked = function() {
      return this.tb;
    };
    w.prototype.setIsClicked = function(a) {
      this.tb = a;
    };
    w.prototype.toArray = function() {
      return [this.label(), this.tb];
    };
    w.prototype.label = function() {
      return "SmartBoxMessage";
    };
    function x(a) {
      a = void 0 === a ? [] : a;
      this.Sb = null == a[1] ? null : a[1];
    }
    x.prototype.getSubscribe = function() {
      return this.Sb;
    };
    x.prototype.setSubscribe = function(a) {
      this.Sb = a;
    };
    x.prototype.toArray = function() {
      return [this.label(), this.Sb];
    };
    x.prototype.label = function() {
      return "SubscribeResponse";
    };
    function y(a) {
      a = void 0 === a ? [] : a;
      this.Ab = null == a[1] ? null : a[1];
    }
    y.prototype.getNative = function() {
      return this.Ab;
    };
    y.prototype.setNative = function(a) {
      this.Ab = a;
    };
    y.prototype.toArray = function() {
      return [this.label(), this.Ab];
    };
    y.prototype.label = function() {
      return "ViewSubscriptionsResponse";
    };
    var Fa = {
      AccountCreationRequest: q,
      AlreadySubscribedResponse: r,
      AnalyticsContext: Aa,
      AnalyticsEventMeta: Ba,
      AnalyticsRequest: Ca,
      EntitlementsResponse: u,
      EventParams: t,
      LinkSaveTokenRequest: Da,
      LinkingInfoResponse: v,
      SkuSelectedResponse: Ea,
      SmartBoxMessage: w,
      SubscribeResponse: x,
      ViewSubscriptionsResponse: y
    };
    function Ga(a, b, c, d, f, g) {
      this.code = a;
      this.data = "ok" == a ? b : null;
      this.mode = c;
      this.origin = d;
      this.originVerified = f;
      this.secureChannel = g;
      this.ok = "ok" == a;
      this.error = "failed" == a ? Error(String(b) || "") : null;
    }
    var Ha;
    function Ia(a) {
      Ha || (Ha = document.createElement("a"));
      Ha.href = a;
      return Ha;
    }
    function Ja(a) {
      if (a.origin) return a.origin;
      var b = a.protocol,
        c = a.host;
      "https:" == b && c.indexOf(":443") == c.length - 4
        ? (c = c.replace(":443", ""))
        : "http:" == b &&
          c.indexOf(":80") == c.length - 3 &&
          (c = c.replace(":80", ""));
      return b + "//" + c;
    }
    function Ka(a) {
      var b = a.indexOf("#");
      return -1 == b ? a : a.substring(0, b);
    }
    function La(a) {
      return a
        ? (/^[?#]/.test(a) ? a.slice(1) : a).split("&").reduce(function(a, c) {
            var b = c.split("=");
            c = decodeURIComponent(b[0] || "");
            b = decodeURIComponent(b[1] || "");
            c && (a[c] = b);
            return a;
          }, {})
        : {};
    }
    function Ma(a) {
      var b = { requestId: a.requestId, returnUrl: a.returnUrl, args: a.args };
      void 0 !== a.origin && (b.origin = a.origin);
      void 0 !== a.originVerified && (b.originVerified = a.originVerified);
      return JSON.stringify(b);
    }
    function Na(a, b) {
      b = "AbortError" + (b ? ": " + b : "");
      var c = null;
      if ("function" == typeof a.DOMException) {
        var d = a.DOMException;
        try {
          c = new d(b, "AbortError");
        } catch (f) {}
      }
      c || ((c = Error(b)), (c.name = "AbortError"), (c.code = 20));
      return c;
    }
    function Oa(a, b, c) {
      b.ok
        ? c(b)
        : ((a = b.error || Na(a)),
          (a.activityResult = b),
          c(Promise.reject(a)));
    }
    function Pa(a) {
      var b = a.navigator;
      return /Trident|MSIE|IEMobile/i.test(b && b.userAgent);
    }
    function Qa(a) {
      a = a.navigator;
      return /Edge/i.test(a && a.userAgent);
    }
    function Ra(a) {
      setTimeout(function() {
        throw a;
      });
    }
    function Sa(a, b, c) {
      var d = !0;
      this.c = a;
      this.Ub = b;
      this.M = c;
      this.Xc = d;
      this.Vb = null;
      this.bc = !1;
      this.da = this.Cb = this.fa = this.B = null;
      this.dc = this.Ic.bind(this);
    }
    e = Sa.prototype;
    e.connect = function(a) {
      if (this.fa) throw Error("already connected");
      this.fa = a;
      this.c.addEventListener("message", this.dc);
    };
    e.disconnect = function() {
      if (
        this.fa &&
        ((this.fa = null),
        this.B && (z(this.B), (this.B = null)),
        this.c.removeEventListener("message", this.dc),
        this.da)
      ) {
        for (var a in this.da) {
          var b = this.da[a];
          b.port1 && z(b.port1);
          b.port2 && z(b.port2);
        }
        this.da = null;
      }
    };
    e.isConnected = function() {
      return null != this.M;
    };
    e.getTarget = function() {
      var a = Ta(this);
      if (!a) throw Error("not connected");
      return a;
    };
    function Ta(a) {
      a.fa && !a.Vb && (a.Vb = "function" == typeof a.Ub ? a.Ub() : a.Ub);
      return a.Vb;
    }
    e.getTargetOrigin = function() {
      if (null == this.M) throw Error("not connected");
      return this.M;
    };
    e.sendConnectCommand = function() {
      var a = Pa(this.c) || Qa(this.c);
      this.sendCommand("connect", { acceptsChannel: a });
    };
    e.sendStartCommand = function(a) {
      var b = null;
      this.bc &&
        "function" == typeof this.c.MessageChannel &&
        (b = new this.c.MessageChannel());
      b
        ? (this.sendCommand("start", a, [b.port2]), Ua(this, b.port1))
        : this.sendCommand("start", a);
    };
    e.sendCommand = function(a, b, c) {
      var d = { sentinel: "__ACTIVITIES__", cmd: a, payload: b || null };
      if (this.B) this.B.postMessage(d, c || void 0);
      else {
        var f = this.getTarget(),
          g =
            "connect" == a
              ? null != this.M
                ? this.M
                : "*"
              : this.getTargetOrigin();
        f.postMessage(d, g, c || void 0);
      }
    };
    e.customMessage = function(a) {
      this.sendCommand("msg", a);
    };
    e.onCustomMessage = function(a) {
      this.Cb = a;
    };
    e.startChannel = function(a) {
      a = a || "";
      var b = Va(this, a);
      if (!b.port1) {
        var c = new this.c.MessageChannel();
        b.port1 = c.port1;
        b.port2 = c.port2;
        b.resolver(b.port1);
      }
      b.port2 &&
        (this.sendCommand("cnset", { name: a }, [b.port2]), (b.port2 = null));
      return b.promise;
    };
    e.askChannel = function(a) {
      a = a || "";
      var b = Va(this, a);
      b.port1 || this.sendCommand("cnget", { name: a });
      return b.promise;
    };
    function Va(a, b) {
      a.da || (a.da = {});
      var c = a.da[b];
      if (!c) {
        var d;
        c = new Promise(function(a) {
          d = a;
        });
        c = { port1: null, port2: null, resolver: d, promise: c };
        a.da[b] = c;
      }
      return c;
    }
    function Ua(a, b) {
      a.B && z(a.B);
      a.B = b;
      a.B.onmessage = function(b) {
        var c = b.data,
          f = c && c.cmd;
        c = (c && c.payload) || null;
        f && a.ra(f, c, b);
      };
    }
    e.Ic = function(a) {
      if (!this.Xc || Ta(this) == a.source) {
        var b = a.data;
        if (b && "__ACTIVITIES__" == b.sentinel) {
          var c = b.cmd;
          if (!this.B || "connect" == c || "start" == c) {
            var d = a.origin;
            b = b.payload || null;
            null == this.M && "start" == c && (this.M = d);
            null == this.M && a.source && Ta(this) == a.source && (this.M = d);
            d == this.M && this.ra(c, b, a);
          }
        }
      }
    };
    e.ra = function(a, b, c) {
      "connect" == a
        ? (this.B && (z(this.B), (this.B = null)),
          (this.bc = (b && b.acceptsChannel) || !1),
          this.fa(a, b))
        : "start" == a
        ? ((c = c.ports && c.ports[0]) && Ua(this, c), this.fa(a, b))
        : "msg" == a
        ? null != this.Cb && null != b && this.Cb(b)
        : "cnget" == a
        ? this.startChannel(b.name)
        : "cnset" == a
        ? ((a = c.ports[0]),
          (b = Va(this, b.name)),
          (b.port1 = a),
          b.resolver(a))
        : this.fa(a, b);
    };
    function z(a) {
      try {
        a.close();
      } catch (b) {}
    }
    function Wa(a, b, c) {
      var d = this;
      this.w = a;
      this.bb = b;
      this.O = c || null;
      this.c = this.w.ownerDocument.defaultView;
      this.M = Ja(Ia(b));
      this.lb = !1;
      this.ya = null;
      this.kb = new Promise(function(a) {
        d.ya = a;
      });
      this.Za = null;
      this.Ga = new Promise(function(a) {
        d.Za = a;
      });
      this.S = null;
      this.ab = new Promise(function(a) {
        d.S = a;
      });
      this.$a = this.Db = null;
      this.C = new Sa(
        this.c,
        function() {
          return d.w.contentWindow;
        },
        this.M
      );
    }
    e = Wa.prototype;
    e.getMode = function() {
      return "iframe";
    };
    e.connect = function() {
      var a = this.w;
      if ("isConnected" in a) a = a.isConnected;
      else {
        var b = a.ownerDocument && a.ownerDocument.documentElement;
        a = (b && b.contains(a)) || !1;
      }
      if (!a) throw Error("iframe must be in DOM");
      this.C.connect(this.ra.bind(this));
      this.w.src = this.bb;
      return this.kb;
    };
    e.disconnect = function() {
      this.lb = !1;
      this.C.disconnect();
    };
    e.acceptResult = function() {
      return this.ab;
    };
    e.getTargetWin = function() {
      return this.w.contentWindow || null;
    };
    e.message = function(a) {
      this.C.customMessage(a);
    };
    e.onMessage = function(a) {
      this.C.onCustomMessage(a);
    };
    e.messageChannel = function(a) {
      return this.C.askChannel(a);
    };
    e.whenReady = function() {
      return this.Ga;
    };
    e.onResizeRequest = function(a) {
      var b = this;
      this.Db = a;
      Promise.resolve().then(function() {
        null != b.$a && a(b.$a);
      });
    };
    e.resized = function() {
      this.lb && this.C.sendCommand("resized", { height: this.w.offsetHeight });
    };
    e.ra = function(a, b) {
      "connect" == a
        ? ((this.lb = !0), this.C.sendStartCommand(this.O), this.ya())
        : "result" == a
        ? this.S &&
          ((a = b.code),
          (b = new Ga(
            a,
            "failed" == a ? Error(b.data || "") : b.data,
            "iframe",
            this.C.getTargetOrigin(),
            !0,
            !0
          )),
          Oa(this.c, b, this.S),
          (this.S = null),
          this.C.sendCommand("close"),
          this.disconnect())
        : "ready" == a
        ? this.Za && (this.Za(), (this.Za = null))
        : "resize" == a && ((this.$a = b.height), this.Db && this.Db(this.$a));
    };
    function Xa(a, b, c, d, f, g) {
      var h = this,
        k = d && ("_blank" == d || "_top" == d || "_" != d[0]);
      if (!k)
        throw Error(
          'The only allowed targets are "_blank", "_top" and name targets'
        );
      this.c = a;
      this.Wc = b;
      this.bb = c;
      this.qc = d;
      this.O = f || null;
      this.D = g || {};
      this.ya = null;
      this.kb = new Promise(function(a) {
        h.ya = a;
      });
      this.S = null;
      this.ab = new Promise(function(a) {
        h.S = a;
      });
      this.C = this.la = this.ha = null;
    }
    e = Xa.prototype;
    e.getMode = function() {
      return "_top" == this.qc ? "redirect" : "popup";
    };
    e.open = function() {
      return Ya(this);
    };
    e.whenConnected = function() {
      return this.kb;
    };
    e.disconnect = function() {
      this.la && (this.c.clearInterval(this.la), (this.la = null));
      this.C && (this.C.disconnect(), (this.C = null));
      if (this.ha) {
        try {
          this.ha.close();
        } catch (a) {}
        this.ha = null;
      }
      this.S = null;
    };
    e.getTargetWin = function() {
      return this.ha;
    };
    e.acceptResult = function() {
      return this.ab;
    };
    e.message = function(a) {
      this.C.customMessage(a);
    };
    e.onMessage = function(a) {
      this.C.onCustomMessage(a);
    };
    e.messageChannel = function(a) {
      return this.C.askChannel(a);
    };
    function Ya(a) {
      var b = Za(a),
        c = a.bb;
      if (!a.D.skipRequestInUrl) {
        var d = a.D.returnUrl || Ka(a.c.location.href),
          f = Ma({ requestId: a.Wc, returnUrl: d, args: a.O });
        c =
          c +
          (-1 == c.indexOf("#") ? "#" : "&") +
          encodeURIComponent("__WA__") +
          "=" +
          encodeURIComponent(f);
      }
      var g = a.qc;
      "_top" != g && Pa(a.c) && (g = "_top");
      try {
        var h = a.c.open(c, g, b);
      } catch (k) {}
      if (!h && "_top" != g && !a.D.disableRedirectFallback) {
        g = "_top";
        try {
          h = a.c.open(c, g);
        } catch (k) {}
      }
      h
        ? ((a.ha = h), "_top" != g && $a(a))
        : ab(a, Error("failed to open window"));
      return a.ab.catch(function() {});
    }
    function Za(a) {
      var b = a.c.screen,
        c = b.availWidth || b.width,
        d = b.availHeight || b.height,
        f = a.c == a.c.top,
        g = Qa(a.c),
        h =
          f && a.c.outerWidth > a.c.innerWidth
            ? Math.min(100, a.c.outerWidth - a.c.innerWidth)
            : g
            ? 100
            : 0,
        k =
          f && a.c.outerHeight > a.c.innerHeight
            ? Math.min(100, a.c.outerHeight - a.c.innerHeight)
            : g
            ? 100
            : 0,
        l = Math.max(c - h, 0.5 * c),
        m = Math.max(d - k, 0.5 * d),
        n = Math.floor(Math.min(600, 0.9 * l)),
        p = Math.floor(Math.min(600, 0.9 * m));
      a.D.width && (n = Math.min(a.D.width, l));
      a.D.height && (p = Math.min(a.D.height, m));
      a = Math.floor((b.width - n) / 2);
      b = Math.floor((b.height - p) / 2);
      n = { height: p, width: n, resizable: "yes", scrollbars: "yes" };
      g || ((n.left = a), (n.top = b));
      p = "";
      for (var A in n) p && (p += ","), (p += A + "=" + n[A]);
      return p;
    }
    function $a(a) {
      a.la = a.c.setInterval(function() {
        bb(a, !0);
      }, 500);
      a.C = new Sa(a.c, a.ha, null);
      a.C.connect(a.ra.bind(a));
    }
    function bb(a, b) {
      if (!a.ha || a.ha.closed)
        a.la && (a.c.clearInterval(a.la), (a.la = null)),
          a.c.setTimeout(
            function() {
              try {
                cb(a, "canceled", null);
              } catch (c) {
                ab(a, c);
              }
            },
            b ? 3e3 : 0
          );
    }
    function ab(a, b) {
      a.S && a.S(Promise.reject(b));
      a.disconnect();
    }
    function cb(a, b, c) {
      if (a.S) {
        var d = a.C.isConnected();
        b = new Ga(
          b,
          c,
          "popup",
          d ? a.C.getTargetOrigin() : Ja(Ia(a.bb)),
          d,
          d
        );
        Oa(a.c, b, a.S);
        a.S = null;
      }
      a.C && a.C.sendCommand("close");
      a.disconnect();
    }
    e.ra = function(a, b) {
      var c = this;
      "connect" == a
        ? (this.C.sendStartCommand(this.O), this.ya())
        : "result" == a
        ? ((a = b.code),
          cb(this, a, "failed" == a ? Error(b.data || "") : b.data))
        : "check" == a &&
          this.c.setTimeout(function() {
            return bb(c);
          }, 200);
    };
    function db(a, b, c, d, f) {
      this.c = a;
      this.Cc = b;
      this.Ec = c;
      this.M = d;
      this.bd = f;
    }
    db.prototype.getMode = function() {
      return "redirect";
    };
    db.prototype.acceptResult = function() {
      var a = this,
        b = new Ga(this.Cc, this.Ec, "redirect", this.M, this.bd, !1);
      return new Promise(function(c) {
        Oa(a.c, b, c);
      });
    };
    function eb(a) {
      var b = this;
      this.version = "1.24";
      this.c = a;
      this.ic = a.location.hash;
      this.Kb = {};
      this.J = {};
      this.uc = null;
      this.Vc = new Promise(function(a) {
        b.uc = a;
      });
    }
    e = eb.prototype;
    e.openIframe = function(a, b, c) {
      var d = new Wa(a, b, c);
      return d.connect().then(function() {
        return d;
      });
    };
    e.open = function(a, b, c, d, f) {
      return { targetWin: fb(this, a, b, c, d, f).getTargetWin() };
    };
    e.openWithMessaging = function(a, b, c, d, f) {
      var g = fb(this, a, b, c, d, f);
      return g.whenConnected().then(function() {
        return g;
      });
    };
    e.onResult = function(a, b) {
      var c = this.Kb[a];
      c || ((c = []), (this.Kb[a] = c));
      c.push(b);
      var d = this.J[a];
      if (!d && this.ic) {
        try {
          var f = this.c,
            g = La(this.ic).__WA_RES__;
          if (g) {
            var h = JSON.parse(g);
            if (h && h.requestId == a) {
              var k = f.location.hash;
              if (k) {
                var l = encodeURIComponent("__WA_RES__") + "=";
                g = -1;
                do
                  if (((g = k.indexOf(l, g)), -1 != g)) {
                    var m = 0 < g ? k.substring(g - 1, g) : "";
                    if ("" == m || "?" == m || "#" == m || "&" == m) {
                      var n = k.indexOf("&", g + 1);
                      -1 == n && (n = k.length);
                      k = k.substring(0, g) + k.substring(n + 1);
                    } else g++;
                  }
                while (-1 != g && g < k.length);
              }
              var p = k;
              p = p || "";
              if (p != f.location.hash && f.history && f.history.replaceState)
                try {
                  f.history.replaceState(f.history.state, "", p);
                } catch (jb) {}
              var A = h.code,
                Wd = h.data,
                nc = h.origin,
                Xd = f.document.referrer && Ja(Ia(f.document.referrer));
              d = new db(f, A, Wd, nc, nc == Xd);
            } else d = null;
          } else d = null;
        } catch (jb) {
          Ra(jb), this.uc(jb);
        }
        d && (this.J[a] = d);
      }
      var oc = d;
      oc && gb(oc, b);
    };
    e.onRedirectError = function(a) {
      this.Vc.then(a);
    };
    function fb(a, b, c, d, f, g) {
      var h = new Xa(a.c, b, c, d, f, g);
      h.open().then(function() {
        hb(a, b, h);
      });
      return h;
    }
    function gb(a, b) {
      Promise.resolve().then(function() {
        b(a);
      });
    }
    function hb(a, b, c) {
      var d = a.Kb[b];
      d &&
        d.forEach(function(a) {
          gb(c, a);
        });
      a.J[b] = c;
    }
    function B(a) {
      return a && "object" == typeof a ? "AbortError" === a.name : !1;
    }
    function ib(a) {
      this.B = a;
    }
    ib.prototype.acceptResult = function() {
      return this.B.acceptResult();
    };
    function kb(a, b, c) {
      this.ba = new Wa(a, b, c);
      this.hb = {};
      this.fc = null;
    }
    e = kb.prototype;
    e.whenReady = function() {
      return this.ba.whenReady();
    };
    e.connect = function() {
      var a = this;
      return this.ba.connect().then(function() {
        a.ba.onMessage(function(b) {
          a.fc && a.fc(b);
          var c = b && b.RESPONSE;
          if (c && (b = a.hb[c[0]])) {
            a: {
              var d = c ? c[0] : null;
              if (d && (d = Fa[d])) {
                c = new d(c);
                break a;
              }
              throw Error("Deserialization failed for " + c);
            }
            b(c);
          }
        });
      });
    };
    e.disconnect = function() {
      this.ba.disconnect();
    };
    e.getMode = function() {
      return this.ba.getMode();
    };
    e.acceptResult = function() {
      return this.ba.acceptResult();
    };
    e.onResizeRequest = function(a) {
      return this.ba.onResizeRequest(a);
    };
    e.execute = function(a) {
      this.ba.message({ REQUEST: a.toArray() });
    };
    e.on = function(a, b) {
      a = new a().label();
      if (!a) throw Error("Invalid data type");
      if (this.hb[a]) throw Error("Invalid type or duplicate callback for ", a);
      this.hb[a] = b;
    };
    e.resized = function() {
      this.ba.resized();
    };
    function lb(a) {
      this.m = new eb(a);
    }
    e = lb.prototype;
    e.openIframe = function(a, b, c) {
      var d = new kb(a, b, c);
      return d.connect().then(function() {
        return d;
      });
    };
    e.open = function(a, b, c, d, f) {
      return this.m.open(a, b, c, d, f);
    };
    e.onResult = function(a, b) {
      this.m.onResult(a, function(a) {
        b(new ib(a));
      });
    };
    e.onRedirectError = function(a) {
      this.m.onRedirectError(a);
    };
    e.getOriginalWebActivityPorts = function() {
      return this.m;
    };
    function C(a, b, c) {
      var d;
      if (!a) {
        var f = (b || "Assertion failed").split("%s"),
          g = f.shift(),
          h = g,
          k = [];
        "" != g && k.push(g);
        for (g = 2; g < arguments.length; g++) {
          var l = arguments[g];
          l && l.tagName && (d = l);
          var m = f.shift();
          k.push(l);
          var n = m.trim();
          "" != n && k.push(n);
          h +=
            (l && 1 == l.nodeType
              ? l.tagName.toLowerCase() + (l.id ? "#" + l.id : "")
              : l) + m;
        }
        f = Error(h);
        f.fromAssert = !0;
        f.associatedElement = d;
        f.messageArray = k;
        throw f;
      }
      return a;
    }
    function mb(a) {
      console.log.apply(console, arguments);
    }
    function nb() {
      var a = Date.now().toString(16),
        b = a.substring(a.length - 8).toUpperCase() + "-",
        c = 0;
      a = new Uint8Array(23);
      if (crypto && crypto.getRandomValues) {
        crypto.getRandomValues(a);
        for (var d = a.length - 1; -1 < d; d--) a[d] %= 16;
      } else
        for (d = a.length - 1; -1 < d; d--)
          a[d] = Math.floor(16 * Math.random());
      var f = a;
      for (a = 9; 36 > a; a++)
        switch (a) {
          case 13:
          case 18:
          case 23:
            b += "-";
            break;
          case 14:
            b += "4";
            break;
          case 19:
            b += "0123456789ABCDEF"[(f[c++] & 3) | 8];
            break;
          default:
            b += "0123456789ABCDEF"[f[c++]];
        }
      return b;
    }
    var ob,
      pb = "Webkit webkit Moz moz ms O o".split(" "),
      qb = {
        "align-content": "normal",
        animation: "none",
        "align-items": "normal",
        "align-self": "auto",
        "alignment-baseline": "auto",
        "backface-visibility": "hidden",
        "background-clip": "border-box",
        "background-image": "none",
        "baseline-shift": "0",
        "block-size": "auto",
        border: "none",
        "border-collapse": "separate",
        bottom: "0",
        "box-sizing": "border-box",
        "break-after": "auto",
        "break-before": "auto",
        "break-inside": "auto",
        "buffered-rendering": "auto",
        "caption-side": "top",
        "caret-color": "rgb(51, 51, 51)",
        clear: "none",
        color: "rgb(51, 51, 51)",
        "color-rendering": "auto",
        "column-count": "auto",
        "column-fill": "balance",
        "column-gap": "normal",
        "column-rule-color": "rgb(51, 51, 51)",
        "column-rule-style": "none",
        "column-rule-width": "0",
        "column-span": "none",
        "column-width": "auto",
        contain: "none",
        "counter-increment": "none",
        "counter-reset": "none",
        cursor: "auto",
        direction: "inherit",
        display: "block",
        "empty-cells": "show",
        filter: "none",
        flex: "none",
        "flex-flow": "row nowrap",
        float: "none",
        "flood-color": "rgb(0, 0, 0)",
        "flood-opacity": "1",
        font: "none",
        "font-size": "medium",
        "font-family": "",
        height: "auto",
        hyphens: "manual",
        "image-rendering": "auto",
        "inline-size": "",
        isolation: "auto",
        "justify-content": "normal",
        "justify-items": "normal",
        "justify-self": "auto",
        "letter-spacing": "normal",
        "lighting-color": "rgb(255, 255, 255)",
        "line-break": "auto",
        "line-height": "normal",
        mask: "none",
        "max-block-size": "none",
        "max-height": "none",
        "max-inline-size": "none",
        "max-width": "none",
        "min-block-size": "none",
        "min-height": "0",
        "min-inline-size": "0",
        "min-width": "0",
        "mix-blend-mode": "normal",
        "object-fit": "fill",
        "offset-distance": "none",
        "offset-path": "none",
        "offset-rotate": "auto 0deg",
        opacity: "1",
        order: "0",
        orphans: "2",
        outline: "none",
        "overflow-anchor": "auto",
        "overflow-wrap": "normal",
        overflow: "visible",
        padding: "0",
        page: "",
        perspective: "none",
        "pointer-events": "auto",
        position: "static",
        quotes: "",
        resize: "none",
        right: "0",
        "scroll-behavior": "auto",
        "tab-size": "8",
        "table-layout": "auto",
        "text-align": "start",
        "text-align-last": "auto",
        "text-anchor": "start",
        "text-combine-upright": "none",
        "text-decoration": "none",
        "text-indent": "0",
        "text-orientation": "mixed",
        "text-overflow": "clip",
        "text-rendering": "auto",
        "text-shadow": "none",
        "text-size-adjust": "auto",
        "text-transform": "none",
        "text-underline-position": "auto",
        top: "auto",
        "touch-action": "auto",
        transform: "none",
        transition: "none 0s ease 0s",
        "unicode-bidi": "normal",
        "user-select": "auto",
        "vector-effect": "none",
        "vertical-align": "baseline",
        visibility: "visible",
        "white-space": "normal",
        widows: "2",
        "word-break": "normal",
        "word-spacing": "0",
        "word-wrap": "normal",
        "writing-mode": "horizontal-tb",
        zoom: "1",
        "z-index": "auto"
      };
    function rb(a, b, c) {
      if (2 > b.length ? 0 : 0 == b.lastIndexOf("--", 0)) return b;
      ob || (ob = Object.create(null));
      var d = ob[b];
      if (!d || c) {
        d = b;
        if (void 0 === a[b]) {
          var f = b.charAt(0).toUpperCase() + b.slice(1);
          a: {
            for (var g = 0; g < pb.length; g++) {
              var h = pb[g] + f;
              if (void 0 !== a[h]) {
                f = h;
                break a;
              }
            }
            f = "";
          }
          var k = f;
          void 0 !== a[k] && (d = k);
        }
        c || (ob[b] = d);
      }
      return d;
    }
    function D(a, b) {
      for (var c in b)
        a.style.setProperty(rb(b, c), b[c].toString(), "important");
    }
    function sb(a, b) {
      for (var c in b) {
        var d = a,
          f = b[c],
          g = rb(d.style, c, void 0);
        g && (d.style[g] = f);
      }
    }
    function tb(a) {
      var b = {};
      ["height"].forEach(function(a) {
        b[a] = null;
      });
      sb(a, b);
    }
    function E(a, b, c) {
      var d;
      a = a.createElement(b);
      for (var f in c) "style" == f ? sb(a, c[f]) : a.setAttribute(f, c[f]);
      if (null != d)
        if ("string" == typeof d) a.textContent = d;
        else if (d.nodeType) a.appendChild(d);
        else if ("length" in d)
          for (c = 0; c < d.length; c++) a.appendChild(d[c]);
        else C(!1, "Unsupported content: %s", d);
      return a;
    }
    function ub(a, b) {
      var c = E(a.getWin().document, "style", { type: "text/css" });
      c.textContent = b;
      a.getHead().appendChild(c);
    }
    function vb(a) {
      a = a.navigator;
      return /Edge/i.test(a && a.userAgent);
    }
    function wb(a) {
      for (
        var b = xb,
          c = a
            ? "string" == typeof a
              ? a
              : a.lang ||
                (a.ownerDocument && a.ownerDocument.documentElement.lang)
            : "",
          d = ((c && c.toLowerCase()) || "en").replace(/_/g, "-");
        d;

      ) {
        if (d in b) return b[d];
        var f = d.lastIndexOf("-");
        d = -1 != f ? d.substring(0, f) : "";
      }
      return b.en;
    }
    var yb = Object.prototype.toString;
    function F(a) {
      return "[object Object]" === yb.call(a);
    }
    function G(a, b) {
      for (var c in a) if (a[c] === b) return !0;
      return !1;
    }
    function H(a) {
      return !0 === a || !1 === a;
    }
    var zb, Ab;
    function Bb(a) {
      zb ||
        ((zb = self.document.createElement("a")),
        (Ab = self.UrlCache || (self.UrlCache = Object.create(null))));
      var b = Ab[a];
      if (b) return b;
      var c = zb;
      c.href = a;
      c.protocol || (c.href = c.href);
      var d = {
        href: c.href,
        protocol: c.protocol,
        host: c.host,
        hostname: c.hostname,
        port: "0" == c.port ? "" : c.port,
        pathname: c.pathname,
        search: c.search,
        hash: c.hash,
        origin: ""
      };
      "/" !== d.pathname[0] && (d.pathname = "/" + d.pathname);
      if (
        ("http:" == d.protocol && 80 == d.port) ||
        ("https:" == d.protocol && 443 == d.port)
      )
        (d.port = ""), (d.host = d.hostname);
      d.origin =
        c.origin && "null" != c.origin
          ? c.origin
          : "data:" != d.protocol && d.host
          ? d.protocol + "//" + d.host
          : d.href;
      return (Ab[a] = d);
    }
    function Cb(a) {
      return a
        ? (/^[?#]/.test(a) ? a.slice(1) : a).split("&").reduce(function(a, c) {
            var b = c.split("=");
            c = decodeURIComponent(b[0] || "");
            b = decodeURIComponent(b[1] || "");
            c && (a[c] = b);
            return a;
          }, {})
        : {};
    }
    function Db(a, b, c) {
      var d = a.indexOf("?"),
        f = a.indexOf("#"),
        g = "";
      -1 != f && ((g = a.substring(f)), (a = a.substring(0, f)));
      -1 == d ? (a += "?") : d < a.length - 1 && (a += "&");
      a += encodeURIComponent(b) + "=" + encodeURIComponent(c);
      return a + g;
    }
    var Eb = { nocache: 1, hr1: 36e5, hr12: 432e5 };
    function Fb() {
      return Bb("https://news.google.com").origin;
    }
    function Gb(a) {
      return "https://news.google.com/swg/_/api/v1" + a;
    }
    function Hb(a) {
      return "https://pubads.g.doubleclick.net" + a;
    }
    function I(a, b) {
      a = Db(
        "https://news.google.com" +
          (void 0 === b ? "" : b) +
          "/swg/_/ui/v1" +
          a,
        "_",
        Ib()
      );
      var c = Cb(self.location.hash)["swg.boqjsmode"];
      void 0 !== c && (a = Db(a, "jsmode", c));
      return a;
    }
    function J(a) {
      return Object.assign(a, { _client: "SwG 0.1.22.78" });
    }
    function Ib() {
      var a = "hr1",
        b = Eb[a];
      null == b && (b = 1);
      if (0 === b) return "_";
      var c = Date.now();
      return String(1 >= b ? c : Math.floor(c / b));
    }
    var Jb = { frameborder: "0", scrolling: "no" };
    function Kb(a, b, c, d) {
      this.h = a;
      this.c = a.win();
      this.l = this.c.document;
      this.m = a.activities();
      this.w = E(this.l, "iframe", Jb);
      this.ec = b;
      this.D = c;
      this.P = d;
      this.oa = I("/smartboxiframe");
      var f = {
          productId: this.h.pageConfig().getProductId(),
          publicationId: this.h.pageConfig().getPublicationId(),
          theme: (this.D && this.D.theme) || "light",
          lang: (this.D && this.D.lang) || "en"
        },
        g = this.D && this.D.messageTextColor;
      g && (f.messageTextColor = g);
      this.O = J(f);
    }
    Kb.prototype.Kc = function(a) {
      if (a && a.getIsClicked()) {
        if (!this.P) throw Error("No callback!");
        this.P();
      }
    };
    Kb.prototype.start = function() {
      var a = this;
      this.ec.addEventListener("click", function() {
        a.P();
      });
      D(this.w, {
        opacity: 1,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        height: "100%",
        right: 0,
        width: "100%"
      });
      this.ec.appendChild(this.w);
      var b = this.h
        .analytics()
        .getContext()
        .toArray();
      this.O.analyticsContext = b;
      this.m.openIframe(this.w, this.oa, this.O).then(function(b) {
        b.on(w, a.Kc.bind(a));
      });
      return this.w;
    };
    var xb = {
      en: "Subscribe with Google",
      ar: "Google \u0627\u0634\u062a\u0631\u0643\u00a0\u0645\u0639",
      de: "Abonnieren mit Google",
      es: "Suscr\u00edbete con Google",
      "es-latam": "Suscr\u00edbete con Google",
      "es-latn": "Suscr\u00edbete con Google",
      fr: "S'abonner avec Google",
      hi:
        "Google \u0915\u0947 \u095b\u0930\u093f\u092f\u0947 \u0938\u0926\u0938\u094d\u092f\u0924\u093e",
      id: "Berlangganan dengan Google",
      it: "Abbonati con Google",
      jp: "Google \u3067\u8cfc\u8aad",
      ko: "Google \uc744 \ud1b5\ud55c\uad6c\ub3c5",
      ms: "Langgan dengan Google",
      nl: "Abonneren via Google",
      no: "Abonner med Google",
      pl: "Subskrybuj z Google",
      pt: "Subscrever com o Google",
      "pt-br": "Assine com o Google",
      ru:
        "\u041f\u043e\u0434\u043f\u0438cka \u0447\u0435\u0440\u0435\u0437 Google",
      se: "Prenumerera med Google",
      th: "\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e1f\u0e32\u0e19 Google",
      tr: "Google ile Abone Ol",
      uk:
        "\u041f\u0456\u0434\u043f\u0438\u0441\u0430\u0442\u0438\u0441\u044f \u0447\u0435\u0440\u0435\u0437 Google",
      "zh-tw": "\u900f\u904e Google \u8a02\u95b1"
    };
    function K(a, b) {
      this.l = a;
      this.jb = b;
    }
    K.prototype.init = function() {
      var a = this.l.getHead();
      if (a) {
        var b = a.querySelector(
          'link[href="https://news.google.com/swg/js/v1/swg-button.css"]'
        );
        b ||
          a.appendChild(
            E(this.l.getWin().document, "link", {
              rel: "stylesheet",
              type: "text/css",
              href: "https://news.google.com/swg/js/v1/swg-button.css"
            })
          );
      }
    };
    K.prototype.create = function(a, b) {
      var c = E(this.l.getWin().document, "button", {});
      return this.attach(c, a, b);
    };
    K.prototype.attach = function(a, b, c) {
      var d = this,
        f = Lb(b);
      b = ("function" == typeof b ? b : null) || c;
      var g = f.theme;
      a.classList.add("swg-button-" + g);
      a.setAttribute("role", "button");
      f.lang && a.setAttribute("lang", f.lang);
      a.setAttribute("title", wb(a) || "");
      a.addEventListener("click", b);
      a.addEventListener("click", function() {
        d.jb.then(function(a) {
          a.eventManager().logSwgEvent(1007, !0);
        });
      });
      this.jb.then(function(a) {
        a.eventManager().logSwgEvent(6);
      });
      return a;
    };
    function Lb(a) {
      a = a && "function" != typeof a ? a : { theme: "light" };
      var b = a.theme;
      "light" !== b && "dark" !== b && (a.theme = "light");
      return a;
    }
    K.prototype.attachSmartButton = function(a, b, c, d) {
      var f = this,
        g = Lb(c);
      c = ("function" == typeof c ? c : null) || d;
      b.classList.add("swg-smart-button");
      b.addEventListener("click", function() {
        return f.jb.then(function(a) {
          return a.eventManager().logSwgEvent(1007, !0);
        });
      });
      return new Kb(a, b, g, c).start();
    };
    function Mb() {
      this.H = {};
      this.J = {};
    }
    e = Mb.prototype;
    e.setOnEntitlementsResponse = function(a) {
      L(this, 1, a);
    };
    e.triggerEntitlementsResponse = function(a) {
      return M(
        this,
        1,
        a.then(function(a) {
          return a.clone();
        })
      );
    };
    e.hasEntitlementsResponsePending = function() {
      return !!this.J[1];
    };
    e.setOnLoginRequest = function(a) {
      L(this, 4, a);
    };
    e.triggerLoginRequest = function(a) {
      return M(this, 4, a);
    };
    e.setOnLinkProgress = function(a) {
      L(this, 5, a);
    };
    e.triggerLinkProgress = function() {
      return M(this, 5, !0);
    };
    e.resetLinkProgress = function() {
      5 in this.J && delete this.J[5];
    };
    e.setOnLinkComplete = function(a) {
      L(this, 6, a);
    };
    e.triggerLinkComplete = function() {
      return M(this, 6, !0);
    };
    e.hasLinkCompletePending = function() {
      return !!this.J[6];
    };
    e.setOnSubscribeRequest = function(a) {
      L(this, 2, a);
    };
    e.triggerSubscribeRequest = function() {
      return M(this, 2, !0);
    };
    e.hasSubscribeRequestCallback = function() {
      return !!this.H[2];
    };
    e.setOnSubscribeResponse = function(a) {
      L(this, 3, a);
    };
    e.setOnContributionResponse = function(a) {
      L(this, 9, a);
    };
    e.triggerSubscribeResponse = function(a) {
      return M(
        this,
        3,
        a.then(function(a) {
          return a.clone();
        })
      );
    };
    e.triggerContributionResponse = function(a) {
      return M(
        this,
        9,
        a.then(function(a) {
          return a.clone();
        })
      );
    };
    e.hasSubscribeResponsePending = function() {
      return !!this.J[3];
    };
    e.hasContributionResponsePending = function() {
      return !!this.J[9];
    };
    e.setOnFlowStarted = function(a) {
      L(this, 7, a);
    };
    e.triggerFlowStarted = function(a, b) {
      return M(this, 7, { flow: a, data: b || {} });
    };
    e.setOnFlowCanceled = function(a) {
      L(this, 8, a);
    };
    e.triggerFlowCanceled = function(a, b) {
      return M(this, 8, { flow: a, data: b || {} });
    };
    function L(a, b, c) {
      a.H[b] = c;
      b in a.J && Nb(a, b, c, a.J[b]);
    }
    function M(a, b, c) {
      a.J[b] = c;
      var d = a.H[b];
      d && Nb(a, b, d, c);
      return !!d;
    }
    function Nb(a, b, c, d) {
      Promise.resolve().then(function() {
        c(d);
        b in a.J && delete a.J[b];
      });
    }
    function N() {}
    e = N.prototype;
    e.getElement = function() {};
    e.init = function() {};
    e.resized = function() {};
    e.whenComplete = function() {};
    e.shouldFadeBody = function() {};
    e.hasLoadingIndicator = function() {};
    function Ob(a) {
      setTimeout(function() {
        throw a;
      });
    }
    function Pb(a, b, c, d) {
      return a.acceptResult().then(function(a) {
        if (
          a.origin != b ||
          (c && !a.originVerified) ||
          (d && !a.secureChannel)
        )
          throw Error("channel mismatch");
        return a.data;
      });
    }
    var Qb = { frameborder: "0", scrolling: "no" };
    function O(a, b, c, d, f, g) {
      f = void 0 === f ? !1 : f;
      g = void 0 === g ? !1 : g;
      var h = this;
      this.c = a;
      this.l = this.c.document;
      this.w = E(this.l, "iframe", Qb);
      this.m = b;
      this.oa = c;
      this.O = d || {};
      this.$c = f;
      this.Lc = g;
      this.rc = this.B = null;
      this.Xa = new Promise(function(a) {
        h.rc = a;
      });
    }
    O.prototype = aa(N.prototype);
    O.prototype.constructor = O;
    if (fa) fa(O, N);
    else
      for (var P in N)
        if ("prototype" != P)
          if (Object.defineProperties) {
            var Rb = Object.getOwnPropertyDescriptor(N, P);
            Rb && Object.defineProperty(O, P, Rb);
          } else O[P] = N[P];
    O.qd = N.prototype;
    e = O.prototype;
    e.getElement = function() {
      return this.w;
    };
    e.init = function(a) {
      var b = this;
      return this.m.openIframe(this.w, this.oa, this.O).then(function(c) {
        return Sb(b, c, a);
      });
    };
    e.shouldFadeBody = function() {
      return this.$c;
    };
    e.hasLoadingIndicator = function() {
      return this.Lc;
    };
    function Sb(a, b, c) {
      a.B = b;
      a.rc(b);
      a.B.onResizeRequest(function(b) {
        c.resizeView(a, b);
      });
      return a.B.whenReady();
    }
    e.on = function(a, b) {
      this.Xa.then(function(c) {
        c.on(a, b);
      });
    };
    e.execute = function(a) {
      this.Xa.then(function(b) {
        b.execute(a);
      });
    };
    e.acceptResult = function() {
      return this.Xa.then(function(a) {
        return a.acceptResult();
      });
    };
    e.acceptResultAndVerify = function(a, b, c) {
      return this.Xa.then(function(d) {
        return Pb(d, a, b, c);
      });
    };
    e.whenComplete = function() {
      return this.acceptResult();
    };
    e.onCancel = function(a) {
      this.acceptResult().catch(function(b) {
        B(b) && a();
        throw b;
      });
    };
    e.resized = function() {
      this.B && this.B.resized();
    };
    var Tb = { "-": "+", _: "/", ".": "=" };
    function Ub(a) {
      for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        C(255 >= d, "Characters must be in range [0,255]");
        b[c] = d;
      }
      return b;
    }
    function Vb(a) {
      for (var b = Array(a.length), c = 0; c < a.length; c++)
        b[c] = String.fromCharCode(a[c]);
      return b.join("");
    }
    function Wb(a) {
      if ("undefined" !== typeof TextDecoder)
        return new TextDecoder("utf-8").decode(a);
      var b = Vb(new Uint8Array(a.buffer || a));
      return decodeURIComponent(escape(b));
    }
    function Xb(a) {
      return "undefined" !== typeof TextEncoder
        ? new TextEncoder("utf-8").encode(a)
        : Ub(unescape(encodeURIComponent(a)));
    }
    function Yb(a) {
      var b = atob(
        a.replace(/[-_.]/g, function(a) {
          return Tb[a];
        })
      );
      return Ub(b);
    }
    function Zb(a) {
      return JSON.parse(a);
    }
    function $b(a, b) {
      try {
        return Zb(a);
      } catch (c) {
        b && b(c);
      }
    }
    function ac() {}
    ac.prototype.decode = function(a) {
      return bc(a).payload;
    };
    function bc(a) {
      function b() {
        throw Error('Invalid token: "' + a + '"');
      }
      var c = a.split(".");
      3 != c.length && b();
      var d = Yb(c[0]),
        f = Yb(c[1]);
      return {
        header: $b(Wb(d), b),
        payload: $b(Wb(f), b),
        verifiable: c[0] + "." + c[1],
        sig: c[2]
      };
    }
    function cc(a, b, c, d, f, g, h) {
      this.service = a;
      this.raw = b;
      this.entitlements = c;
      this.isReadyToPay = g || !1;
      this.decryptedDocumentKey = h || null;
      this.Gb = d;
      this.cc = f;
    }
    e = cc.prototype;
    e.clone = function() {
      return new cc(
        this.service,
        this.raw,
        this.entitlements.map(function(a) {
          return a.clone();
        }),
        this.Gb,
        this.cc,
        this.isReadyToPay,
        this.decryptedDocumentKey
      );
    };
    e.json = function() {
      return {
        service: this.service,
        entitlements: this.entitlements.map(function(a) {
          return a.json();
        }),
        isReadyToPay: this.isReadyToPay
      };
    };
    e.enablesThis = function(a) {
      return this.enables(this.Gb, a);
    };
    e.enablesAny = function(a) {
      for (var b = 0; b < this.entitlements.length; b++)
        if (
          0 < this.entitlements[b].products.length &&
          (!a || a == this.entitlements[b].source)
        )
          return !0;
      return !1;
    };
    e.enables = function(a, b) {
      return a ? !!this.getEntitlementFor(a, b) : !1;
    };
    e.getEntitlementForThis = function(a) {
      return this.getEntitlementFor(this.Gb, a);
    };
    e.getEntitlementFor = function(a, b) {
      if (a && 0 < this.entitlements.length)
        for (var c = 0; c < this.entitlements.length; c++)
          if (
            this.entitlements[c].enables(a) &&
            (!b || b == this.entitlements[c].source)
          )
            return this.entitlements[c];
      return null;
    };
    e.getEntitlementForSource = function(a) {
      if (0 < this.entitlements.length)
        for (var b = 0; b < this.entitlements.length; b++)
          if (
            this.entitlements[b].subscriptionToken &&
            a == this.entitlements[b].source
          )
            return this.entitlements[b];
      return null;
    };
    e.ack = function() {
      this.cc(this);
    };
    function dc(a, b, c) {
      this.source = a;
      this.products = b;
      this.subscriptionToken = c;
    }
    dc.prototype.clone = function() {
      return new dc(
        this.source,
        this.products.slice(0),
        this.subscriptionToken
      );
    };
    dc.prototype.json = function() {
      return {
        source: this.source,
        products: this.products,
        subscriptionToken: this.subscriptionToken
      };
    };
    dc.prototype.enables = function(a) {
      if (!a) return !1;
      var b = a.indexOf(":");
      return -1 != b && this.products.includes(a.substring(0, b + 1) + "*")
        ? !0
        : this.products.includes(a);
    };
    function ec(a) {
      var b = Array.isArray(a) ? a : [a];
      return b.map(function(a) {
        a || (a = {});
        return new dc(a.source || "", a.products || [], a.subscriptionToken);
      });
    }
    function fc(a, b) {
      this.idToken = a;
      this.data = b;
      this.id = b.sub;
      this.email = b.email;
      this.emailVerified = b.email_verified;
      this.name = b.name;
      this.givenName = b.given_name;
      this.familyName = b.family_name;
      this.pictureUrl = b.picture;
    }
    fc.prototype.clone = function() {
      return new fc(this.idToken, this.data);
    };
    fc.prototype.json = function() {
      return {
        id: this.id,
        email: this.email,
        emailVerified: this.emailVerified,
        name: this.name,
        givenName: this.givenName,
        familyName: this.familyName,
        pictureUrl: this.pictureUrl
      };
    };
    function Q(a, b, c, d, f, g) {
      this.raw = a;
      this.purchaseData = b;
      this.userData = c;
      this.entitlements = d;
      this.productType = f;
      this.xa = g;
    }
    Q.prototype.clone = function() {
      return new Q(
        this.raw,
        this.purchaseData,
        this.userData,
        this.entitlements,
        this.productType,
        this.xa
      );
    };
    Q.prototype.json = function() {
      return {
        purchaseData: this.purchaseData.json(),
        userData: this.userData ? this.userData.json() : null,
        entitlements: this.entitlements ? this.entitlements.json() : null,
        productType: this.productType
      };
    };
    Q.prototype.complete = function() {
      return this.xa();
    };
    function R(a, b) {
      this.data = this.raw = a;
      this.signature = b;
    }
    R.prototype.clone = function() {
      return new R(this.raw, this.signature);
    };
    R.prototype.json = function() {
      return { data: this.raw, signature: this.signature };
    };
    function gc(a, b, c, d) {
      this.entitlements = a;
      this.userData = b;
      this.purchaseDataList = c;
      this.purchaseData = c[0];
      this.xa = d;
    }
    gc.prototype.clone = function() {
      return new gc(
        this.entitlements,
        this.userData,
        this.purchaseDataList,
        this.xa
      );
    };
    gc.prototype.json = function() {
      return {
        entitlements: this.entitlements.json(),
        userData: this.userData.json(),
        purchaseDataList: this.purchaseDataList.map(function(a) {
          return a.json();
        }),
        purchaseData: this.purchaseData.json()
      };
    };
    gc.prototype.complete = function() {
      return this.xa();
    };
    var hc = {
        UNKNOWN: "unknown",
        NON_SUBSCRIBER: "non_subscriber",
        SUBSCRIBER: "subscriber",
        PAST_SUBSCRIBER: "past_subscriber"
      },
      ic = {
        IMPRESSION_PAYWALL: "paywall",
        IMPRESSION_AD: "ad_shown",
        IMPRESSION_OFFERS: "offers_shown",
        ACTION_SUBSCRIPTIONS_LANDING_PAGE: "subscriptions_landing_page",
        ACTION_OFFER_SELECTED: "offer_selected",
        ACTION_PAYMENT_FLOW_STARTED: "payment_flow_start",
        ACTION_PAYMENT_COMPLETED: "payment_complete",
        EVENT_CUSTOM: "custom"
      },
      jc = { GENERAL: "general", PAYWALL: "paywall" },
      kc = { IMMEDIATE_WITH_TIME_PRORATION: 1 };
    function S(a, b, c) {
      c = void 0 === c ? "SUBSCRIPTION" : c;
      this.h = a;
      this.Ua = a.payClient();
      this.R = a.pageConfig();
      this.o = a.dialogManager();
      this.Ja = "string" == typeof b ? { skuId: b } : b;
      this.Tc = c;
      this.U = a.analytics();
      this.A = a.eventManager();
      this.prorationMode = this.Ja.replaceSkuProrationMode;
      this.prorationEnum = 0;
      this.prorationMode
        ? (this.prorationEnum = kc[this.prorationMode])
        : this.Ja.oldSku &&
          (this.prorationEnum = kc.IMMEDIATE_WITH_TIME_PRORATION);
    }
    S.prototype.start = function() {
      var a = Object.assign({}, this.Ja, {
        publicationId: this.R.getPublicationId()
      });
      this.prorationEnum && (a.replaceSkuProrationMode = this.prorationEnum);
      this.h.callbacks().triggerFlowStarted("subscribe", this.Ja);
      this.U.setSku(this.Ja.skuId);
      this.A.logSwgEvent(1005, !0);
      this.Ua.start(
        {
          apiVersion: 1,
          allowedPaymentMethods: ["CARD"],
          environment: "PRODUCTION",
          playEnvironment: "PROD",
          swg: a,
          i: {
            startTimeMs: Date.now(),
            googleTransactionId: this.U.getTransactionId(),
            productType: this.Tc
          }
        },
        { forceRedirect: "redirect" == this.h.config().windowOpenMode }
      );
      return Promise.resolve();
    };
    function lc(a) {
      this.c = a.win();
      this.h = a;
      this.m = a.activities();
      this.o = a.dialogManager();
      this.Ga = this.ta = this.j = null;
      this.U = a.analytics();
      this.A = a.eventManager();
    }
    function mc(a) {
      var b = a.eventManager();
      a.payClient().onResponse(function(c) {
        a.entitlementsManager().blockNextNotification();
        var d = new lc(a),
          f = pc(a, c, d.complete.bind(d));
        a.callbacks().triggerSubscribeResponse(f);
        return f.then(
          function(a) {
            b.logSwgEvent(1001, !0);
            d.start(a);
          },
          function(b) {
            B(b)
              ? a.callbacks().triggerFlowCanceled("subscribe")
              : (a.eventManager().logSwgEvent(2e3, !1),
                a.jserror().error("Pay failed", b));
            throw b;
          }
        );
      });
    }
    lc.prototype.start = function(a) {
      var b = this;
      if (!this.U.getSku()) {
        this.U.addLabels(["redirect"]);
        var c = qc(a.purchaseData);
        c && this.U.setSku(c);
      }
      this.A.logSwgEvent(10, !0);
      this.h.entitlementsManager().reset(!0);
      this.ta = a;
      var d = {
        publicationId: this.h.pageConfig().getPublicationId(),
        productType: this.ta.productType
      };
      a.userData && a.entitlements
        ? ((d.idToken = a.userData.idToken),
          this.h.entitlementsManager().pushNextEntitlements(a.entitlements.raw))
        : (d.loginHint = a.userData && a.userData.email);
      this.j = new O(this.c, this.m, I("/payconfirmiframe"), J(d), !0);
      this.j.on(u, this.Hc.bind(this));
      this.j.acceptResult().then(function() {
        b.o.completeView(b.j);
      });
      return (this.Ga = this.o.openView(this.j));
    };
    lc.prototype.Hc = function(a) {
      var b = a.getJwt();
      b && this.h.entitlementsManager().pushNextEntitlements(b);
    };
    lc.prototype.complete = function() {
      var a = this;
      this.A.logSwgEvent(1002, !0);
      this.h.entitlementsManager().unblockNextNotification();
      this.Ga.then(function() {
        var b = new q();
        b.setComplete(!0);
        a.j.execute(b);
      });
      return this.j
        .acceptResult()
        .catch(function() {})
        .then(function() {
          a.A.logSwgEvent(1003, !0);
          a.h.entitlementsManager().setToastShown(!0);
        });
    };
    function pc(a, b, c) {
      return b.then(function(b) {
        var d = a.analytics().getHasLogged(),
          g = void 0;
        if ("object" === typeof b && b.googleTransactionId) {
          var h = a.analytics().getTransactionId(),
            k = b.googleTransactionId;
          if (d)
            if (h === k) var l = 3001;
            else (g = new t()), g.setGpayTransactionId(k), (l = 3002);
          else a.analytics().setTransactionId(k), (l = 3004);
        } else (g = new t()), g.setHadLogged(d), (l = 3003);
        a.eventManager().logSwgEvent(l, !0, g);
        var m = null,
          n = null;
        l = null;
        b &&
          ("string" == typeof b
            ? (n = b)
            : ("productType" in b && (l = b.productType),
              "swgCallbackData" in b
                ? (m = b.swgCallbackData)
                : "integratorClientCallbackData" in b &&
                  (n = b.integratorClientCallbackData)));
        l || (l = "SUBSCRIPTION");
        n && !m && (n = atob(n)) && (m = Zb(n).swgCallbackData);
        if (!m) throw Error("unexpected payment response");
        b = n = JSON.stringify(m);
        n = new R(m.purchaseData, m.purchaseDataSignature);
        var p;
        if ((p = m.idToken)) {
          var A = new ac().decode(p);
          p = new fc(p, A);
        } else p = null;
        m = m.signedEntitlements
          ? a.entitlementsManager().parseEntitlements(m)
          : null;
        return new Q(b, n, p, m, l, c);
      });
    }
    function qc(a) {
      return ((a = $b(a.raw)) && a.productId) || null;
    }
    function rc(a, b) {
      this.h = a;
      this.D = b;
      this.c = a.win();
      this.m = a.activities();
      this.o = a.dialogManager();
      var c = (b && b.isClosable) || !0;
      this.j = new O(
        this.c,
        this.m,
        I("/contributionsiframe"),
        J({
          productId: a.pageConfig().getProductId(),
          publicationId: a.pageConfig().getPublicationId(),
          productType: "UI_CONTRIBUTION",
          list: (b && b.list) || "default",
          skus: (b && b.skus) || null,
          isClosable: c
        }),
        !0
      );
    }
    rc.prototype.Ba = function(a) {
      a.getSubscriberOrMember() &&
        this.h
          .callbacks()
          .triggerLoginRequest({ linkRequested: !!a.getLinkRequested() });
    };
    rc.prototype.Rb = function(a) {
      (a = a.getSku()) && new S(this.h, a, "UI_CONTRIBUTION").start();
    };
    rc.prototype.start = function() {
      var a = this;
      this.h.callbacks().triggerFlowStarted("showContributionOptions");
      this.j.onCancel(function() {
        a.h.callbacks().triggerFlowCanceled("showContributionOptions");
      });
      this.j.on(r, this.Ba.bind(this));
      this.j.on(Ea, this.Rb.bind(this));
      return this.o.openView(this.j);
    };
    function sc(a, b) {
      this.h = a;
      this.c = a.win();
      this.m = a.activities();
      this.o = a.dialogManager();
      this.ca = this.j = null;
      var c = { entitlements: null, consent: !0 };
      this.D = Object.assign(c, b || {});
    }
    sc.prototype.start = function() {
      var a = this,
        b = this.D.entitlements;
      if (!b || !b.getEntitlementForSource("google"))
        throw Error('No entitlements with "google" source');
      this.h.callbacks().triggerFlowStarted("completeDeferredAccountCreation");
      this.j = new O(
        this.c,
        this.m,
        I("/recoveriframe"),
        J({
          publicationId: this.h.pageConfig().getPublicationId(),
          productId: this.h.pageConfig().getProductId(),
          entitlements: (b && b.raw) || null,
          consent: this.D.consent
        }),
        !0
      );
      this.ca = this.o.openView(this.j);
      return this.j.acceptResult().then(
        function(b) {
          return tc(a, b.data);
        },
        function(b) {
          B(b)
            ? a.h
                .callbacks()
                .triggerFlowCanceled("completeDeferredAccountCreation")
            : a.o.completeView(a.j);
          throw b;
        }
      );
    };
    function tc(a, b) {
      a.h.entitlementsManager().blockNextNotification();
      var c = b.entitlements,
        d = b.idToken,
        f = b.productType,
        g = a.h
          .entitlementsManager()
          .parseEntitlements({ signedEntitlements: c });
      d = new fc(d, new ac().decode(d));
      b = b.purchaseDataList
        ? b.purchaseDataList.map(function(a) {
            return new R(a.data, a.signature);
          })
        : [new R(b.purchaseData.data, b.purchaseData.signature)];
      var h = new lc(a.h),
        k = h.complete.bind(h);
      k = new gc(g, d, b, k);
      a.h.eventManager().logSwgEvent(1010, !0);
      h.start(
        new Q("", b[0], d, g, f, function() {
          return Promise.resolve();
        })
      );
      return k;
    }
    function uc(a) {
      var b = a.readyState;
      return "loading" != b && "uninitialized" != b;
    }
    function vc(a, b) {
      var c = uc,
        d = c(a);
      if (d) b(a);
      else {
        var f = function() {
          c(a) &&
            (d || ((d = !0), b(a)),
            a.removeEventListener("readystatechange", f));
        };
        a.addEventListener("readystatechange", f);
      }
    }
    function wc(a) {
      return new Promise(function(b) {
        vc(a, b);
      });
    }
    function xc(a) {
      var b = !!a.document;
      this.c = b ? a : a.defaultView;
      this.l = b ? a.document : a;
    }
    e = xc.prototype;
    e.getWin = function() {
      return this.c;
    };
    e.getRootNode = function() {
      return this.l;
    };
    e.getRootElement = function() {
      return this.l.documentElement;
    };
    e.getHead = function() {
      return this.l.head;
    };
    e.getBody = function() {
      return this.l.body;
    };
    e.isReady = function() {
      return uc(this.l);
    };
    e.whenReady = function() {
      return wc(this.l);
    };
    e.addToFixedLayer = function() {
      return Promise.resolve();
    };
    function yc(a) {
      return 9 === a.nodeType || a.document ? new xc(a) : a;
    }
    function T(a, b, c) {
      var d = "ease-out",
        f = a.ownerDocument.defaultView,
        g = a.style.transition || "";
      return new Promise(function(g) {
        f.setTimeout(function() {
          f.setTimeout(g, c);
          var h = c + "ms " + d;
          D(
            a,
            Object.assign(
              { transition: "transform " + h + ", opacity " + h },
              b
            )
          );
        });
      }).then(function() {
        D(a, { transition: g });
      });
    }
    function zc(a, b) {
      this.l = a;
      this.W = this.l.getWin().document.createElement("swg-popup-background");
      D(this.W, {
        "z-index": b,
        display: "none",
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        "background-color": "rgba(32, 33, 36, .6)"
      });
    }
    e = zc.prototype;
    e.getElement = function() {
      return this.W;
    };
    e.isAttached = function() {
      return !!this.W.parentNode;
    };
    e.attach = function() {
      this.l.getBody().appendChild(this.W);
    };
    e.destroy = function() {
      this.l.getBody().removeChild(this.W);
    };
    e.show = function(a) {
      a = void 0 === a ? !0 : a;
      D(this.W, { display: "block", opacity: a ? 0 : 1 });
      if (a) return T(this.W, { opacity: 1 }, 300);
    };
    e.hide = function(a) {
      var b = this;
      if (void 0 === a || a)
        return T(this.W, { opacity: 0 }, 300).then(function() {
          D(b.W, { display: "none" });
        });
      D(this.W, { display: "none" });
    };
    function Ac(a) {
      this.l = a;
      this.Da = E(this.l, "swg-loading-container", {});
      this.nc = E(this.l, "swg-loading", {});
      this.Da.appendChild(this.nc);
      this.Da.style.setProperty("display", "none", "important");
      var b = this.nc;
      a = E(this.l, "swg-loading-animate", {});
      b.appendChild(a);
      b = E(this.l, "swg-loading-image", {});
      a.appendChild(b);
    }
    Ac.prototype.getElement = function() {
      return this.Da;
    };
    Ac.prototype.show = function() {
      this.Da.style.removeProperty("display");
    };
    Ac.prototype.hide = function() {
      this.Da.style.setProperty("display", "none", "important");
    };
    var Bc = { frameborder: 0, scrolling: "no", src: "about:blank" };
    function Cc(a) {
      var b = { class: "swg-dialog" },
        c = this;
      b = void 0 === b ? {} : b;
      var d = Object.assign({}, Bc, b);
      this.w = E(a, "iframe", d);
      D(this.w, qb);
      this.tc = new Promise(function(a) {
        c.w.onload = a;
      });
    }
    e = Cc.prototype;
    e.whenReady = function() {
      return this.tc;
    };
    e.getElement = function() {
      return this.w;
    };
    e.getDocument = function() {
      var a =
        this.getElement().contentDocument ||
        (this.getElement().contentWindow &&
          this.getElement().contentWindow.document);
      if (!a) throw Error("not loaded");
      return a;
    };
    e.getBody = function() {
      return this.getDocument().body;
    };
    e.isConnected = function() {
      var a = this.getElement();
      if ("isConnected" in a) a = a.isConnected;
      else {
        var b = a.ownerDocument && a.ownerDocument.documentElement;
        a = (b && b.contains(a)) || !1;
      }
      return a;
    };
    var Dc = {
        "min-height": "50px",
        border: "none",
        display: "block",
        position: "fixed",
        "z-index": 2147483647,
        "box-sizing": "border-box"
      },
      Ec = {
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        opacity: 0,
        height: 0,
        "max-height": "100%",
        "max-width": "100%",
        "min-height": "100%",
        "min-width": "100%",
        width: 0
      };
    function Fc(a) {
      var b = void 0 === b ? {} : b;
      var c = void 0 === c ? {} : c;
      this.l = a;
      this.w = new Cc(a.getWin().document);
      this.ea = new zc(a, 2147483646);
      var d = Object.assign({}, Dc, b);
      D(this.w.getElement(), d);
      sb(this.w.getElement(), c);
      this.ja = this.va = this.Na = this.Qa = null;
      this.Oa = !1;
      this.Ya = null;
      this.cd = !1;
    }
    e = Fc.prototype;
    e.open = function(a) {
      var b = this;
      a = void 0 === a ? !1 : a;
      var c = this.w;
      if (c.isConnected()) throw Error("already opened");
      this.l.getBody().appendChild(c.getElement());
      this.ea.attach();
      a
        ? (D(c.getElement(), { visibility: "hidden", opacity: 0 }),
          (this.Oa = a))
        : Gc(this);
      return this.cd
        ? this.l
            .addToFixedLayer(c.getElement())
            .then(function() {
              return c.whenReady();
            })
            .then(function() {
              Hc(b);
              return b;
            })
        : c.whenReady().then(function() {
            Hc(b);
            return b;
          });
    };
    function Hc(a) {
      var b = a.w.getBody(),
        c = a.w.getDocument();
      ub(
        yc(c),
        "body{padding:0;margin:0}swg-container,swg-loading,swg-loading-animate,swg-loading-image{display:block}swg-loading-container{width:100%!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;min-height:148px!important;height:100%!important;bottom:0!important;margin-top:5px!important;z-index:2147483647!important}@media (min-height:630px), (min-width:630px){swg-loading-container{width:560px!important;margin-left:35px!important;border-top-left-radius:8px!important;border-top-right-radius:8px!important;background-color:#fff!important;box-shadow:0 1px 1px rgba(60,64,67,.3),0 1px 4px 1px rgba(60,64,67,.15)!important}}swg-loading{z-index:2147483647!important;width:36px;height:36px;overflow:hidden;animation:mspin-rotate 1568.63ms linear infinite}swg-loading-animate{animation:mspin-revrot 5332ms steps(4) infinite}swg-loading-image{background-image:url(https://news.google.com/swg/js/v1/loader.svg);background-size:100%;width:11664px;height:36px;animation:swg-loading-film 5332ms steps(324) infinite}@keyframes swg-loading-film{0%{transform:translateX(0)}to{transform:translateX(-11664px)}}@keyframes mspin-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes mspin-revrot{0%{transform:rotate(0deg)}to{transform:rotate(-1turn)}}\n/*# sourceURL=/./src/ui/ui.css*/"
      );
      a.Qa = new Ac(c);
      b.appendChild(a.Qa.getElement());
      a.Na = E(c, "swg-container", {});
      b.appendChild(a.Na);
      D(a.getElement(), Ic());
    }
    e.close = function(a) {
      var b = this;
      var c =
        void 0 === a || a
          ? this.ia(function() {
              b.ea.hide(!0);
              return T(b.getElement(), { transform: "translateY(100%)" }, 300);
            })
          : Promise.resolve();
      return c.then(function() {
        var a = b.w.getElement();
        a.parentNode.removeChild(a);
        b.l.getRootElement().style.removeProperty("padding-bottom");
        b.ea.destroy();
      });
    };
    e.getContainer = function() {
      if (!this.Na) throw Error("not opened yet");
      return this.Na;
    };
    e.getIframe = function() {
      return this.w;
    };
    e.getElement = function() {
      return this.w.getElement();
    };
    e.getCurrentView = function() {
      return this.va;
    };
    e.openView = function(a) {
      var b = this;
      D(a.getElement(), Ec);
      this.va && this.va.hasLoadingIndicator()
        ? (this.Ya = this.va)
        : ((this.getContainer().textContent = ""), this.Qa.show());
      this.va = a;
      this.getContainer().appendChild(a.getElement());
      a.shouldFadeBody() && !this.Oa && this.ea.show(!0);
      return a.init(this).then(function() {
        D(a.getElement(), { opacity: 1 });
        b.Oa && (a.shouldFadeBody() && b.ea.show(!0), Gc(b));
        if (b.Ya) {
          var c = b.Ya.getElement();
          c.parentElement && c.parentElement.removeChild(c);
          b.Ya = null;
        } else b.Qa.hide();
      });
    };
    function Gc(a) {
      a.ia(function() {
        D(a.getElement(), {
          transform: "translateY(100%)",
          opactiy: 1,
          visibility: "visible"
        });
        return T(
          a.getElement(),
          { transform: "translateY(0)", opacity: 1, visibility: "visible" },
          300
        );
      });
      a.Oa = !1;
    }
    e.resizeView = function(a, b, c) {
      var d = this;
      c = void 0 === c ? !0 : c;
      if (this.va != a) return null;
      var f = Math.min(b, 0.9 * this.l.getWin().innerHeight);
      if (c) {
        var g = this.getElement().offsetHeight;
        c =
          f >= g
            ? this.ia(function() {
                D(d.getElement(), {
                  height: f + "px",
                  transform: "translateY(" + (f - g) + "px)"
                });
                return T(d.getElement(), { transform: "translateY(0)" }, 300);
              })
            : this.ia(function() {
                return T(
                  d.getElement(),
                  { transform: "translateY(" + (g - f) + "px)" },
                  300
                ).then(function() {
                  D(d.getElement(), {
                    height: f + "px",
                    transform: "translateY(0)"
                  });
                });
              });
      } else
        D(this.getElement(), { height: f + "px" }), (c = Promise.resolve());
      return c.then(function() {
        var c = b + 20,
          f = d.l.getRootElement();
        D(f, { "padding-bottom": c + "px" });
        a.resized();
      });
    };
    e.ia = function(a) {
      var b = this,
        c = this.ja || Promise.resolve();
      return (this.ja = c
        .then(
          function() {
            return a();
          },
          function() {}
        )
        .then(function() {
          b.ja = null;
        }));
    };
    e.kd = function() {
      return this.getElement().offsetHeight;
    };
    function Ic() {
      var a = "BOTTOM";
      switch (a) {
        case "BOTTOM":
          return { bottom: 0 };
        case "TOP":
          return { top: 0 };
        case "FLOAT":
          return {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          };
        case "FULL":
          return { position: "fixed", height: "100%", top: 0, bottom: 0 };
        default:
          return { bottom: 0 };
      }
    }
    function Jc(a) {
      var b = this;
      this.l = a;
      this.ca = this.Z = null;
      this.ma = new zc(a, 2147483647);
      this.Va = null;
      this.ma.getElement().addEventListener("click", function() {
        if (b.Va)
          try {
            b.Va.focus();
          } catch (c) {}
      });
    }
    e = Jc.prototype;
    e.openDialog = function(a) {
      a = void 0 === a ? !1 : a;
      this.ca || ((this.Z = new Fc(this.l)), (this.ca = this.Z.open(a)));
      return this.ca;
    };
    e.openView = function(a, b) {
      var c = this;
      b = void 0 === b ? !1 : b;
      a.whenComplete().catch(function(b) {
        B(b) && c.completeView(a);
        throw b;
      });
      return this.openDialog(b).then(function(b) {
        return b.openView(a);
      });
    };
    e.completeView = function(a) {
      var b = this;
      setTimeout(function() {
        b.Z &&
          b.Z.getCurrentView() == a &&
          (b.Z.close(), (b.Z = null), (b.ca = null));
      }, 100);
    };
    e.completeAll = function() {
      this.Z && (this.Z.close(), (this.ca = this.Z = null));
      this.ma.isAttached() && this.ma.destroy();
    };
    e.popupOpened = function(a) {
      this.Va = a || null;
      this.ma.isAttached() || this.ma.attach();
      this.ma.show();
    };
    e.popupClosed = function() {
      this.Va = null;
      try {
        this.ma.hide();
      } catch (a) {}
    };
    var Kc = { height: 0 },
      Lc = { frameborder: "0", scrolling: "no", class: "swg-toast" };
    function Mc(a, b, c) {
      var d = this;
      this.l = a.doc();
      this.m = a.activities();
      this.oa = b;
      this.O = c;
      this.ja = null;
      this.w = E(this.l.getWin().document, "iframe", Lc);
      D(this.w, Kc);
      this.tc = new Promise(function(a) {
        d.w.onload = a;
      });
    }
    Mc.prototype.getElement = function() {
      return this.w;
    };
    Mc.prototype.open = function() {
      this.l.getBody().appendChild(this.w);
      return Nc(this);
    };
    function Nc(a) {
      var b = 7;
      return a.m
        .openIframe(a.w, a.oa, a.O)
        .then(function(a) {
          return a.whenReady();
        })
        .then(function() {
          tb(a.w);
          a.ia(function() {
            D(a.w, {
              transform: "translateY(100%)",
              opactiy: 1,
              visibility: "visible"
            });
            return T(
              a.w,
              { transform: "translateY(0)", opacity: 1, visibility: "visible" },
              400
            );
          });
          a.l.getWin().setTimeout(function() {
            a.close();
          }, 1e3 * (b + 1));
        });
    }
    Mc.prototype.ia = function(a) {
      var b = this;
      return (this.ja = (this.ja || Promise.resolve())
        .then(
          function() {
            return a();
          },
          function() {}
        )
        .then(function() {
          b.ja = null;
        }));
    };
    Mc.prototype.close = function() {
      var a = this;
      return this.ia(function() {
        a.l.getWin().setTimeout(function() {
          a.l.getBody().removeChild(a.w);
          return Promise.resolve();
        }, 500);
        return T(
          a.w,
          { transform: "translateY(100%)", opacity: 1, visibility: "visible" },
          400
        );
      });
    };
    function Oc(a, b, c, d) {
      this.c = a;
      this.R = b;
      this.ga = this.R.getPublicationId();
      this.V = c;
      this.h = d;
      this.Nc = new ac();
      this.Ha = null;
      this.sa = 0;
      this.La = !1;
      this.K = d.storage();
      this.U = d.analytics();
      this.ka = d.config();
    }
    e = Oc.prototype;
    e.reset = function(a) {
      this.Ha = null;
      this.sa = Math.max(this.sa, a ? 3 : 0);
      a && (this.K.remove("ents"), this.K.remove("isreadytopay"));
    };
    e.clear = function() {
      this.Ha = null;
      this.sa = 0;
      this.unblockNextNotification();
      this.K.remove("ents");
      this.K.remove("toast");
      this.K.remove("isreadytopay");
    };
    e.jc = function() {
      return this.c.location.search;
    };
    e.getEntitlements = function(a) {
      var b = this;
      this.Ha || (this.Ha = Pc(this, a));
      return this.Ha.then(function(a) {
        null != a.isReadyToPay && b.U.setReadyToPay(a.isReadyToPay);
        return a;
      });
    };
    e.pushNextEntitlements = function(a, b) {
      var c = Qc(this, a, !0, b);
      return c && c.enablesThis() ? (this.K.set("ents", a), !0) : !1;
    };
    function Pc(a, b) {
      return Rc(a, b).then(function(b) {
        var c = a.La;
        a.La = !1;
        c ||
          (a.h.callbacks().triggerEntitlementsResponse(Promise.resolve(b)),
          Sc(a, b));
        return b;
      });
    }
    function Rc(a, b) {
      return Promise.all([a.K.get("ents"), a.K.get("isreadytopay")]).then(
        function(c) {
          var d = c[0],
            f = c[1];
          if (d && !b) {
            var g = Qc;
            a: {
              switch (f) {
                case "true":
                  var h = !0;
                  break a;
                case "false":
                  h = !1;
                  break a;
              }
              h = void 0;
            }
            if ((d = g(a, d, !0, h)) && d.enablesThis()) return (a.sa = 0), d;
          }
          return Tc(a, b).then(function(b) {
            b && b.enablesThis() && b.raw && a.K.set("ents", b.raw);
            return b;
          });
        }
      );
    }
    function Tc(a, b) {
      function c() {
        d--;
        return a.Aa(b).then(function(b) {
          return b.enablesThis() || 0 >= d
            ? b
            : new Promise(function(b) {
                a.c.setTimeout(function() {
                  b(c());
                }, 550);
              });
        });
      }
      var d = a.sa;
      a.sa = 0;
      return c();
    }
    e.setToastShown = function(a) {
      this.K.set("toast", a ? "1" : "0");
    };
    e.blockNextNotification = function() {
      this.La = !0;
    };
    e.unblockNextNotification = function() {
      this.La = !1;
    };
    e.parseEntitlements = function(a) {
      var b = a.isReadyToPay;
      null == b
        ? this.K.remove("isreadytopay")
        : this.K.set("isreadytopay", String(b));
      var c = a.signedEntitlements;
      if (c) {
        if ((a = Qc(this, c, !1, b))) return a;
      } else {
        var d = a.entitlements;
        if (d) return Uc(this, "", d, b);
      }
      return Uc(this, "", [], b);
    };
    function Qc(a, b, c, d) {
      var f;
      try {
        var g = a.Nc.decode(b);
        if (c) {
          var h = Date.now(),
            k = g.exp;
          if (1e3 * parseFloat(k) < h) return null;
        }
        var l = g.entitlements;
        return (l && Uc(a, b, l, d, f)) || null;
      } catch (m) {
        a.c.setTimeout(function() {
          throw m;
        });
      }
      return null;
    }
    function Uc(a, b, c, d, f) {
      return new cc(
        "subscribe.google.com",
        b,
        ec(c),
        a.R.getProductId(),
        a.yc.bind(a),
        d,
        f
      );
    }
    function Sc(a, b) {
      var c = b.getEntitlementForThis();
      c
        ? a.K.get("toast").then(function(b) {
            "1" != b &&
              c &&
              ((b = c.source || "google"),
              new Mc(
                a.h,
                I("/toastiframe"),
                J({ publicationId: a.ga, source: b })
              ).open());
          })
        : Promise.resolve();
    }
    e.yc = function(a) {
      a.getEntitlementForThis() && this.setToastShown(!0);
    };
    e.Aa = function(a) {
      var b = this,
        c = "/publication/" + encodeURIComponent(this.ga) + "/entitlements";
      a && (c += "?crypt=" + encodeURIComponent(a));
      return this.V.fetchCredentialedJson(Gb(c)).then(function(a) {
        return b.parseEntitlements(a);
      });
    };
    var Vc = ["GET", "POST"],
      Wc = { document: 1, text: 2 };
    function Xc(a) {
      this.win = a;
    }
    Xc.prototype.Aa = function(a, b) {
      C("string" == typeof a, "Only URL supported: %s", a);
      var c = b.credentials;
      C(
        void 0 === c || "include" == c || "omit" == c,
        "Only credentials=include|omit support: %s",
        c
      );
      return "document" == b.responseType
        ? Yc(a, b)
        : (this.win.fetch || Yc).apply(null, arguments);
    };
    Xc.prototype.fetch = function(a, b) {
      b = Zc(b);
      return this.Aa(a, b)
        .then(
          function(a) {
            return a;
          },
          function(b) {
            var c = Bb(a).origin;
            throw Error("XHR Failed fetching (" + c + "/...):", b && b.message);
          }
        )
        .then(function(a) {
          return $c(a);
        });
    };
    function Zc(a) {
      var b;
      a = a || {};
      var c = a.method;
      void 0 === c
        ? (c = "GET")
        : ((c = c.toUpperCase()),
          C(
            Vc.includes(c),
            "Only one of %s is currently allowed. Got %s",
            Vc.join(", "),
            c
          ));
      a.method = c;
      a.headers = a.headers || {};
      b && (a.headers.Accept = b);
      return a;
    }
    function Yc(a, b) {
      return new Promise(function(c, d) {
        var f = ad(b.method || "GET", a);
        "include" == b.credentials && (f.withCredentials = !0);
        b.responseType in Wc && (f.responseType = b.responseType);
        b.headers &&
          Object.keys(b.headers).forEach(function(a) {
            f.setRequestHeader(a, b.headers[a]);
          });
        f.onreadystatechange = function() {
          2 > f.readyState ||
            (100 > f.status || 599 < f.status
              ? ((f.onreadystatechange = null),
                d(Error("Unknown HTTP status " + f.status)))
              : 4 == f.readyState && c(new bd(f)));
        };
        f.onerror = function() {
          d(Error("Network failure"));
        };
        f.onabort = function() {
          d(Error("Request aborted"));
        };
        "POST" == b.method ? f.send(b.body) : f.send();
      });
    }
    function ad(a, b) {
      var c = new XMLHttpRequest();
      if ("withCredentials" in c) c.open(a, b, !0);
      else throw Error("CORS is not supported");
      return c;
    }
    function $c(a) {
      return new Promise(function(b) {
        if (a.ok) return b(a);
        b = a.status;
        var c = Error("HTTP error " + b);
        c.retriable = 415 == b || (500 <= b && 600 > b);
        c.response = a;
        throw c;
      });
    }
    function bd(a) {
      this.N = a;
      this.status = this.N.status;
      this.ok = 200 <= this.status && 300 > this.status;
      this.headers = new cd(a);
      this.bodyUsed = !1;
      this.body = null;
    }
    e = bd.prototype;
    e.clone = function() {
      C(!this.bodyUsed, "Body already used");
      return new bd(this.N);
    };
    function dd(a) {
      C(!a.bodyUsed, "Body already used");
      a.bodyUsed = !0;
      return Promise.resolve(a.N.responseText);
    }
    e.text = function() {
      return dd(this);
    };
    e.json = function() {
      return dd(this).then(Zb);
    };
    e.jd = function() {
      C(!this.bodyUsed, "Body already used");
      this.bodyUsed = !0;
      C(
        this.N.responseXML,
        "responseXML should exist. Make sure to return Content-Type: text/html header."
      );
      return Promise.resolve(C(this.N.responseXML));
    };
    e.arrayBuffer = function() {
      return dd(this).then(Xb);
    };
    function cd(a) {
      this.N = a;
    }
    cd.prototype.get = function(a) {
      return this.N.getResponseHeader(a);
    };
    cd.prototype.has = function(a) {
      return null != this.N.getResponseHeader(a);
    };
    function ed(a) {
      this.N = new Xc(a);
    }
    ed.prototype.fetchCredentialedJson = function(a) {
      return this.N.fetch(a, {
        method: "GET",
        headers: { Accept: "text/plain, application/json" },
        credentials: "include"
      }).then(function(a) {
        return a.json();
      });
    };
    ed.prototype.fetch = function(a, b) {
      return this.N.fetch(a, b);
    };
    function fd(a) {
      this.l = a;
      this.Pc = Promise.resolve();
    }
    fd.prototype.error = function(a) {
      var b = this,
        c = Array.prototype.slice.call(arguments, 0);
      return this.Pc.then(function() {
        var a = gd.apply(null, c);
        a.reported ||
          ((b.l.getWin().document.createElement("img").src =
            "https://news.google.com/_/SubscribewithgoogleClientUi/jserror?error=" +
            encodeURIComponent(String(a)) +
            "&script=" +
            encodeURIComponent("https://news.google.com/swg/js/v1/swg.js") +
            "&line=" +
            (a.lineNumber || 1) +
            "&trace=" +
            encodeURIComponent(a.stack)),
          (a.reported = !0));
      });
    };
    function gd(a) {
      for (var b = null, c = "", d = 0; d < arguments.length; d++) {
        var f = arguments[d];
        if (f instanceof Error && !b) {
          b = void 0;
          var g = Object.getOwnPropertyDescriptor(f, "message");
          if (g && g.writable) b = f;
          else {
            g = f.stack;
            var h = Error(f.message);
            for (b in f) h[b] = f[b];
            h.stack = g;
            b = h;
          }
        } else c && (c += " "), (c += f);
      }
      b ? c && (b.message = c + ": " + b.message) : (b = Error(c));
      return b;
    }
    function hd(a) {
      this.h = a;
      this.m = a.activities();
      this.R = a.pageConfig();
      this.o = a.dialogManager();
    }
    hd.prototype.start = function() {
      this.h.callbacks().triggerFlowStarted("linkAccount");
      var a = "redirect" == this.h.config().windowOpenMode,
        b = this.m.open(
          "swg-link",
          I("/linkbackstart"),
          a ? "_top" : "_blank",
          J({ publicationId: this.R.getPublicationId() }),
          {}
        );
      this.o.popupOpened(b && b.targetWin);
      return Promise.resolve();
    };
    function id(a, b) {
      var c = this;
      this.c = a.win();
      this.m = a.activities();
      this.o = a.dialogManager();
      this.aa = a.entitlementsManager();
      this.H = a.callbacks();
      this.j = new O(
        this.c,
        this.m,
        I("/linkconfirmiframe", "/u/" + ((b && b.index) || "0")),
        J({
          productId: a.pageConfig().getProductId(),
          publicationId: a.pageConfig().getPublicationId()
        }),
        !0
      );
      this.gc = null;
      this.Dc = new Promise(function(a) {
        c.gc = a;
      });
    }
    function jd(a) {
      a.activities().onResult("swg-link", function(b) {
        a.entitlementsManager().blockNextNotification();
        a.callbacks().triggerLinkProgress();
        a.dialogManager().popupClosed();
        return Pb(b, Fb(), !1, !1).then(
          function(b) {
            new id(a, b).start();
          },
          function(b) {
            B(b) && a.callbacks().triggerFlowCanceled("linkAccount");
          }
        );
      });
    }
    id.prototype.start = function() {
      var a = this;
      this.j
        .acceptResultAndVerify(Fb(), !0, !0)
        .then(function(b) {
          a.Y(b);
        })
        .catch(function(a) {
          setTimeout(function() {
            throw a;
          });
        })
        .then(function() {
          a.o.completeView(a.j);
        });
      return this.o.openView(this.j);
    };
    id.prototype.Y = function(a) {
      this.H.triggerLinkComplete();
      this.H.resetLinkProgress();
      this.aa.setToastShown(!0);
      this.aa.unblockNextNotification();
      this.aa.reset((a && a.success) || !1);
      a && a.entitlements && this.aa.pushNextEntitlements(a.entitlements);
      this.gc();
    };
    id.prototype.whenComplete = function() {
      return this.Dc;
    };
    function kd(a, b) {
      this.c = a.win();
      this.h = a;
      this.m = a.activities();
      this.o = a.dialogManager();
      this.P = b;
      this.j = this.ca = this.wc = null;
    }
    kd.prototype.getRequestPromise = function() {
      return this.wc;
    };
    kd.prototype.Y = function() {
      this.o.completeView(this.j);
    };
    function ld(a, b) {
      a.Y();
      var c = null;
      if (b.linked) {
        a.o.popupClosed();
        a.h.callbacks().triggerFlowStarted("linkAccount");
        c = new id(a.h, b);
        var d = c.start();
      } else d = Promise.reject(Na(a.c, "not linked"));
      var f = d.then(function() {
        a.h.callbacks().triggerLinkProgress();
        return c.whenComplete();
      });
      return f.then(function() {
        return !0;
      });
    }
    kd.prototype.Yc = function(a) {
      var b = this;
      a &&
        a.getRequested() &&
        (this.wc = new Promise(function(a) {
          a(b.P());
        })
          .then(function(a) {
            var c = new Da();
            if (a && a.token) {
              if (a.authCode)
                throw Error("Both authCode and token are available");
              c.setToken(a.token);
            } else if (a && a.authCode) c.setAuthCode(a.authCode);
            else throw Error("Neither token or authCode is available");
            b.j.execute(c);
          })
          .catch(function(a) {
            b.Y();
            throw a;
          }));
    };
    kd.prototype.start = function() {
      var a = this,
        b = {
          publicationId: this.h.pageConfig().getPublicationId(),
          isClosable: !0
        };
      this.j = new O(this.c, this.m, I("/linksaveiframe"), J(b), !1, !0);
      this.j.on(v, this.Yc.bind(this));
      this.ca = this.o.openView(this.j, !0);
      return this.j
        .acceptResultAndVerify(Fb(), !0, !0)
        .then(function(b) {
          return ld(a, b);
        })
        .catch(function(b) {
          a.Y();
          if (B(b))
            return a.h.callbacks().triggerFlowCanceled("linkAccount"), !1;
          throw b;
        });
    };
    function md(a) {
      this.h = a;
      this.c = a.win();
      this.m = a.activities();
      this.o = a.dialogManager();
      this.Ea = null;
      this.j = new O(
        this.c,
        this.m,
        I("/loginiframe"),
        J({
          publicationId: a.pageConfig().getPublicationId(),
          productId: a.pageConfig().getProductId(),
          userConsent: !0
        }),
        !0
      );
    }
    md.prototype.start = function() {
      var a = this;
      this.h.callbacks().triggerFlowStarted("showLoginPrompt");
      this.Ea = this.o.openView(this.j);
      return this.j.acceptResult().then(
        function() {
          a.o.completeView(a.j);
        },
        function(b) {
          B(b)
            ? a.h.callbacks().triggerFlowCanceled("showLoginPrompt")
            : a.o.completeView(a.j);
          throw b;
        }
      );
    };
    function nd(a) {
      this.h = a;
      this.c = a.win();
      this.m = a.activities();
      this.o = a.dialogManager();
      this.Ea = null;
      this.j = new O(
        this.c,
        this.m,
        I("/loginiframe"),
        J({
          publicationId: a.pageConfig().getPublicationId(),
          productId: a.pageConfig().getProductId(),
          userConsent: !1
        }),
        !0
      );
    }
    nd.prototype.start = function() {
      var a = this;
      this.h.callbacks().triggerFlowStarted("showLoginNotification");
      this.Ea = this.o.openView(this.j);
      return this.j.acceptResult().then(
        function() {
          a.o.completeView(a.j);
        },
        function(b) {
          a.o.completeView(a.j);
          throw b;
        }
      );
    };
    var od = {
        LOCAL: "LOCAL",
        PREPROD: "PREPROD",
        PRODUCTION: "PRODUCTION",
        SANDBOX: "SANDBOX",
        TEST: "TEST",
        TIN: "TIN"
      },
      pd = { CARD: "CARD", TOKENIZED_CARD: "TOKENIZED_CARD", UPI: "UPI" },
      qd = { CRYPTOGRAM_3DS: "CRYPTOGRAM_3DS", PAN_ONLY: "PAN_ONLY" },
      rd = {
        ESTIMATED: "ESTIMATED",
        FINAL: "FINAL",
        NOT_CURRENTLY_KNOWN: "NOT_CURRENTLY_KNOWN"
      };
    function sd(a) {
      this.I = a;
      this.P = null;
    }
    sd.prototype.onResult = function(a) {
      this.P = a;
    };
    sd.prototype.isReadyToPay = function(a) {
      var b = td(a);
      return new Promise(function(c) {
        b.canMakePayment()
          .then(function(b) {
            window.sessionStorage.setItem(
              "google.payments.api.storage.isreadytopay.result",
              b.toString()
            );
            var d = { result: b };
            2 <= a.apiVersion &&
              a.existingPaymentMethodRequired &&
              (d.paymentMethodPresent = b);
            c(d);
          })
          .catch(function() {
            window.sessionStorage.getItem(
              "google.payments.api.storage.isreadytopay.result"
            )
              ? c({
                  result:
                    "true" ==
                    window.sessionStorage.getItem(
                      "google.payments.api.storage.isreadytopay.result"
                    )
                })
              : c({ result: !1 });
          });
      });
    };
    sd.prototype.prefetchPaymentData = function(a) {
      td(
        a,
        this.I,
        a.transactionInfo.currencyCode,
        a.transactionInfo.totalPrice
      );
    };
    sd.prototype.loadPaymentData = function(a) {
      ud(this, a);
    };
    function td(a, b, c, d) {
      var f = {};
      a && (f = JSON.parse(JSON.stringify(a)));
      f.apiVersion || (f.apiVersion = 1);
      f.swg && (f.allowedPaymentMethods = ["CARD"]);
      b && "TEST" == b && (f.environment = b);
      var g = [{ supportedMethods: ["https://google.com/pay"], data: f }],
        h = {
          total: {
            label: "Estimated Total Price",
            amount: { currency: c || "USD", value: d || "0" }
          }
        };
      return new PaymentRequest(g, h);
    }
    function ud(a, b) {
      b = td(
        b,
        a.I,
        (b.transactionInfo && b.transactionInfo.currencyCode) || void 0,
        (b.transactionInfo && b.transactionInfo.totalPrice) || void 0
      );
      a.P(
        b
          .show()
          .then(function(a) {
            a.complete("success");
            return a.details;
          })
          .catch(function(a) {
            a.statusCode = "CANCELED";
            throw a;
          })
      );
    }
    function vd() {
      var a = window.document,
        b = this;
      this.l = a;
      this.$ = a.createElement("gpay-graypane");
      wd(this.$, {
        "z-index": 2147483647,
        display: "none",
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        "background-color": "rgba(32, 33, 36, .6)"
      });
      this.Wa = null;
      this.$.addEventListener("click", function() {
        if (b.Wa)
          try {
            b.Wa.focus();
          } catch (c) {}
      });
    }
    vd.prototype.show = function(a) {
      this.Wa = a || null;
      this.l.body.appendChild(this.$);
      wd(this.$, { display: "block", opacity: 0 });
      return xd(this.$, { opacity: 1 });
    };
    vd.prototype.hide = function() {
      var a = this;
      this.Wa = null;
      if (this.$.parentElement)
        return xd(this.$, { opacity: 0 }).then(function() {
          wd(a.$, { display: "none" });
          a.l.body.removeChild(a.$);
        });
    };
    function wd(a, b) {
      for (var c in b) a.style.setProperty(c, b[c].toString(), "important");
    }
    function xd(a, b) {
      var c = a.ownerDocument.defaultView,
        d = a.style.transition || "";
      return new Promise(function(d) {
        c.setTimeout(function() {
          c.setTimeout(d, 300);
          wd(
            a,
            Object.assign(
              {
                transition: "transform 300ms ease-out, opacity 300ms ease-out"
              },
              b
            )
          );
        });
      }).then(function() {
        wd(a, Object.assign({ transition: d }, b));
      });
    }
    function yd() {
      this.gd = U.contentWindow;
    }
    yd.prototype.postMessage = function(a, b) {
      this.gd.postMessage(a, b);
    };
    var U = null,
      zd = null,
      Ad = null,
      Bd = null,
      Cd = Date.now(),
      Dd = null,
      Ed = !1,
      Fd = [];
    function Gd(a, b) {
      function c(a) {
        a.data[d] && (b(a), window.removeEventListener("message", c));
      }
      var d = "isReadyToPayResponse";
      window.addEventListener("message", c);
      var f = Object.assign({ eventType: 6 }, a);
      V(f);
    }
    function V(a) {
      Ed
        ? ((a = Object.assign(
            {
              buyFlowActivityMode: Dd,
              googleTransactionId: Bd,
              originTimeMs: Cd
            },
            a
          )),
          zd.postMessage(a, Hd()))
        : Fd.push(a);
    }
    function Id() {
      var a = Jd;
      Bd = a;
    }
    function Kd() {
      Ed = !0;
      Fd.forEach(function(a) {
        V(a);
      });
      Fd.length = 0;
    }
    function Hd() {
      var a = "https://pay";
      "SANDBOX" == Ad
        ? (a += ".sandbox")
        : "PREPROD" == Ad && (a += "-preprod.sandbox");
      return a + ".google.com";
    }
    (function() {
      if (!U) {
        var a = window.gpayInitParams || {};
        Ad = a.environment || "PRODUCTION";
        U = document.createElement("iframe");
        U.src =
          "https://pay" +
          ("PREPROD" == Ad
            ? "-preprod.sandbox"
            : "SANDBOX" == Ad
            ? ".sandbox"
            : "") +
          ".google.com/gp/p/ui/payframe?origin=" +
          window.location.origin +
          "&mid=%{merchantId}";
        V({ eventType: 15, clientLatencyStartMs: Date.now() });
        U.height = "0";
        U.width = "0";
        U.style.display = "none";
        U.style.visibility = "hidden";
        U.onload = function() {
          V({ eventType: 17, clientLatencyStartMs: Date.now() });
          Kd();
        };
        document.body
          ? (document.body.appendChild(U), (zd = new yd()))
          : document.addEventListener("DOMContentLoaded", function() {
              document.body.appendChild(U);
              zd = new yd();
            });
      }
    })();
    function Ld() {
      var a = -1 != window.navigator.userAgent.indexOf("OPR/");
      if (a) return !1;
      var b = window.navigator.userAgent.match(/Android/i),
        c = window.navigator.userAgent.match(/Chrome\/([0-9]+)\./i);
      return (
        null != b &&
        "PaymentRequest" in window &&
        "Google Inc." == window.navigator.vendor &&
        null != c &&
        59 <= Number(c[1])
      );
    }
    function Md(a) {
      if (2 <= a.apiVersion) {
        var b = Nd(a);
        if (b && 1 == b.length && "CRYPTOGRAM_3DS" == b[0]) return !0;
      }
      return (
        1 == a.allowedPaymentMethods.length &&
        "TOKENIZED_CARD" == a.allowedPaymentMethods[0]
      );
    }
    function Od(a, b) {
      return 2 <= a.apiVersion && (a = Nd(a)) && a.includes(b) ? !0 : !1;
    }
    function Pd() {
      return window.location.hostname.endsWith(".google.com") ||
        void 0 === window.isSecureContext
        ? null
        : window.isSecureContext
        ? null
        : "Google Pay APIs should be called in secure context!";
    }
    function Qd(a) {
      if (a.environment && !Object.values(od).includes(a.environment))
        throw Error(
          "Parameter environment in PaymentOptions can optionally be set to PRODUCTION, otherwise it defaults to TEST."
        );
    }
    function Rd(a) {
      if (!a) return "isReadyToPayRequest must be set!";
      if (2 <= a.apiVersion) {
        if (!("apiVersionMinor" in a)) return "apiVersionMinor must be set!";
        if (
          !a.allowedPaymentMethods ||
          !Array.isArray(a.allowedPaymentMethods) ||
          0 == a.allowedPaymentMethods.length
        )
          return "for v2 allowedPaymentMethods must be set to an array containing a list of accepted payment methods";
        for (var b = 0; b < a.allowedPaymentMethods.length; b++) {
          var c = a.allowedPaymentMethods[b];
          if ("CARD" == c.type) {
            if (!c.parameters)
              return "Field parameters must be setup in each allowedPaymentMethod";
            var d = c.parameters.allowedCardNetworks;
            if (!d || !Array.isArray(d) || 0 == d.length)
              return "allowedCardNetworks must be setup in parameters for type CARD";
            var f = c.parameters.allowedAuthMethods;
            if (!f || !Array.isArray(f) || 0 == f.length || !f.every(Sd))
              return "allowedAuthMethods must be setup in parameters for type 'CARD'  and must contain 'CRYPTOGRAM_3DS' and/or 'PAN_ONLY'";
          }
        }
      } else if (
        !a.allowedPaymentMethods ||
        !Array.isArray(a.allowedPaymentMethods) ||
        0 == a.allowedPaymentMethods.length ||
        !a.allowedPaymentMethods.every(Td)
      )
        return "allowedPaymentMethods must be set to an array containing 'CARD' and/or 'TOKENIZED_CARD'!";
      return null;
    }
    function Td(a) {
      return Object.values(pd).includes(a);
    }
    function Sd(a) {
      return Object.values(qd).includes(a);
    }
    function Ud(a) {
      if (!a) return "paymentDataRequest must be set!";
      if (a.swg)
        return (a = a.swg)
          ? a.skuId && a.publicationId
            ? null
            : "Both skuId and publicationId must be provided"
          : "Swg parameters must be provided";
      if (a.transactionInfo)
        if (a.transactionInfo.currencyCode) {
          if (
            !a.transactionInfo.totalPriceStatus ||
            !Object.values(rd).includes(a.transactionInfo.totalPriceStatus)
          )
            return "totalPriceStatus in transactionInfo must be set to one of NOT_CURRENTLY_KNOWN, ESTIMATED or FINAL!";
          if (
            "NOT_CURRENTLY_KNOWN" !== a.transactionInfo.totalPriceStatus &&
            !a.transactionInfo.totalPrice
          )
            return "totalPrice in transactionInfo must be set when totalPriceStatus is ESTIMATED or FINAL!";
        } else return "currencyCode in transactionInfo must be set!";
      else return "transactionInfo must be set!";
      var b = Vd(a);
      if (b) {
        if (!b.parameters)
          return "parameters must be set in allowedPaymentMethod!";
        var c = b.parameters;
        if (c.payeeVpa)
          if (c.payeeName)
            if (c.referenceUrl) {
              if (!c.mcc)
                return "mcc in allowedPaymentMethod parameters must be set!";
              if (!c.transactionReferenceId)
                return "transactionReferenceId in allowedPaymentMethod parameters must be set!";
            } else
              return "referenceUrl in allowedPaymentMethod parameters must be set!";
          else
            return "payeeName in allowedPaymentMethod parameters must be set!";
        else return "payeeVpa in allowedPaymentMethod parameters must be set!";
        if ("INR" !== a.transactionInfo.currencyCode)
          return "currencyCode in transactionInfo must be set to INR!";
        if ("FINAL" !== a.transactionInfo.totalPriceStatus)
          return "totalPriceStatus in transactionInfo must be set to FINAL!";
        if (!a.transactionInfo.transactionNote)
          return "transactionNote in transactionInfo must be set!";
      }
      return null;
    }
    function Vd(a) {
      return !Ld() || 2 > a.apiVersion || !a.allowedPaymentMethods
        ? null
        : Yd(a, "UPI");
    }
    function Nd(a) {
      return a.allowedPaymentMethods && (a = Yd(a, "CARD")) && a.parameters
        ? a.parameters.allowedAuthMethods
        : null;
    }
    function Yd(a, b) {
      for (var c = 0; c < a.allowedPaymentMethods.length; c++) {
        var d = a.allowedPaymentMethods[c];
        if (d.type == b) return d;
      }
      return null;
    }
    function Zd(a, b, c) {
      var d = Jd;
      this.I = a;
      this.activities = b || new eb(window);
      this.ea = new vd();
      this.od = this.P = null;
      this.Ob = !1;
      this.Fc = this.B = null;
      this.ld = d;
      this.vc = c || null;
      this.Ia = null;
    }
    e = Zd.prototype;
    e.onResult = function(a) {
      this.P ||
        ((this.P = a), this.activities.onResult("GPAY", this.Rc.bind(this)));
    };
    e.Rc = function(a) {
      var b = this;
      this.ea.hide();
      this.P(
        a.acceptResult().then(
          function(a) {
            if (a.origin != $d(b)) throw Error("channel mismatch");
            var c = a.data;
            if (c.redirectEncryptedCallbackData)
              return (
                (Dd = 3),
                ae(b, c.redirectEncryptedCallbackData).then(function(a) {
                  var b = Object.assign({}, c);
                  delete b.redirectEncryptedCallbackData;
                  return Object.assign(b, a);
                })
              );
            if (!a.originVerified || !a.secureChannel)
              throw Error("channel mismatch");
            return c;
          },
          function(a) {
            var b = a.message,
              c = a.message;
            try {
              c = JSON.parse(b.substring(7));
            } catch (g) {}
            c.statusCode &&
              -1 ==
                ["DEVELOPER_ERROR", "MERCHANT_ACCOUNT_ERROR"].indexOf(
                  c.statusCode
                ) &&
              (c = { statusCode: "CANCELED" });
            "AbortError" == c && (c = { statusCode: "CANCELED" });
            return Promise.reject(c);
          }
        )
      );
    };
    function ae(a, b) {
      return new Promise(function(c, d) {
        var f = be(a),
          g = new XMLHttpRequest();
        g.open("POST", f, !0);
        "withCredentials" in g && (g.withCredentials = !0);
        g.onreadystatechange = function() {
          if (!(2 > g.readyState))
            if (100 > g.status || 599 < g.status)
              (g.onreadystatechange = null),
                d(Error("Unknown HTTP status " + g.status));
            else if (4 == g.readyState)
              try {
                c(JSON.parse(g.responseText));
              } catch (h) {
                d(h);
              }
        };
        g.onerror = function() {
          d(Error("Network failure"));
        };
        g.onabort = function() {
          d(Error("Request aborted"));
        };
        g.send(b);
      });
    }
    e.isReadyToPay = function(a) {
      var b = this;
      return new Promise(function(c) {
        if (Md(a)) c({ result: !1 });
        else {
          var d = window.navigator.userAgent,
            f = 0 < d.indexOf("GSA/") && 0 < d.indexOf("Safari");
          if (f) c({ result: !1 });
          else {
            var g = 0 < d.indexOf("FxiOS");
            if (g) c({ result: !1 });
            else {
              var h =
                0 < d.indexOf("Chrome") ||
                0 < d.indexOf("Firefox") ||
                0 < d.indexOf("Safari");
              h && 2 <= a.apiVersion && a.existingPaymentMethodRequired
                ? ((a.environment = b.I),
                  Gd(a, function(b) {
                    var d = { result: h };
                    a.existingPaymentMethodRequired &&
                      (d.paymentMethodPresent =
                        "READY_TO_PAY" == b.data.isReadyToPayResponse);
                    c(d);
                  }))
                : c({ result: h });
            }
          }
        }
      });
    };
    e.prefetchPaymentData = function() {};
    e.loadPaymentData = function(a) {
      a.swg || a.apiVersion || (a.apiVersion = 1);
      a.environment = this.I;
      Dd = a.forceRedirect ? 3 : 2;
      a = this.activities.open(
        "GPAY",
        "TIN" == this.I ? "/ui/pay" : $d(this) + "/gp/p/ui/pay",
        a.forceRedirect ? "_top" : "gp-js-popup",
        a,
        { width: 600, height: 600 }
      );
      this.ea.show(a && a.targetWin);
    };
    function $d(a) {
      if ("LOCAL" == a.I) return "";
      var b =
        "PREPROD" == a.I
          ? "pay-preprod.sandbox"
          : "SANDBOX" == a.I
          ? "pay.sandbox"
          : "pay";
      return "https://" + b + ".google.com";
    }
    function be(a) {
      var b = $d(a) + "/gp/p/apis/buyflow/process";
      a.vc && (b += "?rk=" + encodeURIComponent(a.vc));
      return b;
    }
    e.getIframeUrl = function(a, b) {
      var c = "https://pay.google.com/gp/p/ui/pay?origin=" + b;
      if ("SANDBOX" == a || "PREPROD" == a)
        c =
          "https://pay'+  (environment == Constants.Environment.PREPROD ? '-preprod' : '')+  '.sandbox.google.com/gp/p/ui/pay?origin=" +
          b;
      return c;
    };
    function ce(a, b) {
      var c = "all 250ms ease 0s";
      de(b, c);
      b.height = "0px";
      setTimeout(function() {
        a.parentNode && a.parentNode.removeChild(a);
      }, 250);
    }
    e.md = function() {
      var a = document.createElement("div");
      a.classList.add("google-payments-dialogContainer");
      var b = document.createElement("div");
      b.classList.add("iframeContainer");
      var c = document.createElement("iframe");
      c.classList.add("google-payments-dialog");
      c.setAttribute("frameborder", "0");
      c.setAttribute("scrolling", "no");
      b.appendChild(c);
      a.appendChild(b);
      document.body.appendChild(a);
      a = { container: a, iframe: c };
      b = a.iframe;
      c = a.container;
      c.addEventListener("click", this.Bc.bind(this, a));
      c.style.display = "none";
      b.style.display = "none";
      b.height = "0px";
      de(b, "all 250ms ease 0s");
      this.Ob = !1;
      return a;
    };
    e.hd = function(a) {
      a.container.parentNode &&
        (this.Fc(Promise.reject({ errorCode: "CANCELED" })),
        ce(a.container, a.iframe),
        this.B && this.B.disconnect());
    };
    e.Bc = function(a) {
      a.container.parentNode && history.back();
    };
    e.pd = function(a, b) {
      var c = this;
      a.style.display = "block";
      b.style.display = "block";
      setTimeout(function() {
        b.height = "280px";
        setTimeout(function() {
          c.Ob = !0;
          c.Ia &&
            (de(b, c.Ia.transition), (b.height = c.Ia.height), (c.Ia = null));
        }, 250);
      }, 1);
    };
    function de(a, b) {
      a.style.setProperty("transition", b);
      a.style.setProperty("-webkit-transition", b);
    }
    e.nd = function(a, b, c) {
      var d = this;
      c.swg || c.apiVersion || (c.apiVersion = 1);
      c.environment = this.I;
      var f,
        g = this.getIframeUrl(this.I, window.location.origin);
      return this.activities
        .openIframe(b, g, c)
        .then(function(a) {
          d.B = a;
          a.onMessage(function(a) {
            "resize" === a.type && d.Ob
              ? (f || (f = Date.now()),
                Date.now() < f + 250
                  ? de(b, a.transition + ", height 250ms")
                  : de(b, a.transition),
                (b.height = a.height))
              : (d.Ia = { height: a.height, transition: a.transition });
          });
          return a.acceptResult();
        })
        .then(
          function(c) {
            ce(a, b);
            history.back();
            return c.data;
          },
          function(c) {
            ce(a, b);
            history.back();
            return Promise.reject(c);
          }
        );
    };
    function ee() {}
    ee.prototype.isUpiRequest = function(a) {
      return !!Vd(a);
    };
    ee.prototype.isReadyToPay = function(a) {
      if (Vd(a))
        return a.existingPaymentMethodRequired
          ? Promise.resolve({ result: !0, paymentMethodPresent: !0 })
          : Promise.resolve({ result: !0 });
      throw Error("No Upi payment method found in handler");
    };
    ee.prototype.loadPaymentData = function(a, b, c) {
      var d = b.parameters,
        f = a.transactionInfo,
        g = [
          {
            supportedMethods: ["https://tez.google.com/pay"],
            data: {
              pa: d.payeeVpa,
              pn: d.payeeName,
              tr: d.transactionReferenceId,
              url: d.referenceUrl,
              mc: d.mcc,
              tn: f.transactionNote
            }
          }
        ];
      d.transactionId && (g[0].data.tid = d.transactionId);
      var h = new PaymentRequest(g, {
        total: {
          label: "Total",
          amount: { currency: f.currencyCode, value: f.totalPrice }
        },
        displayItems: [
          {
            label: "Original Amount",
            amount: { currency: f.currencyCode, value: f.totalPrice }
          }
        ]
      });
      c(
        fe(h)
          .then(function(a) {
            a
              ? (a = ge(h))
              : (window.location.replace(
                  "https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user"
                ),
                (a = Promise.reject({
                  errorMessage: "Cannot redirect to Tez page in Google Play."
                })));
            return a;
          })
          .then(function(c) {
            var d = b;
            var f = JSON.parse(c.tezResponse);
            if ("FAILURE" === f.Status) {
              switch (f.responseCode) {
                case "ZM":
                  d = {
                    errorCode: 3,
                    errorMessage: "Payment failure due to invalid MPIN."
                  };
                  break;
                case "Z9":
                  d = {
                    errorCode: 3,
                    errorMessage: "Payment failure due to insufficient funds."
                  };
                  break;
                case "91":
                  d = {
                    errorCode: 1,
                    errorMessage:
                      "Payment failure due to transaction timeout or connection issue."
                  };
                  break;
                default:
                  d = { errorMessage: "Payment cancelled." };
              }
              d = Promise.reject(d);
            } else d = Promise.resolve({ apiVersion: a.apiVersion, apiVersionMinor: a.apiVersionMinor, paymentMethodData: { type: d.type, tokenizationData: { type: "DIRECT", token: { protocolVersion: "ECv1", signature: "", signedMessage: { paymentMethodType: "UPI", payeeVpa: d.parameters.payeeVpa, status: f.Status, transactionReferenceId: d.parameters.transactionReferenceId, transactionId: d.parameters.transactionId ? d.parameters.transactionId : f.txnId, transactionInfo: a.transactionInfo } } } } });
            return d;
          })
          .catch(function(a) {
            a.statusCode = "CANCELED";
            return Promise.reject(a);
          })
      );
    };
    function ge(a) {
      return a.show().then(function(a) {
        a.complete("success");
        return a.details;
      });
    }
    function fe(a) {
      var b = window.sessionStorage.getItem(
        "google.payments.api.storage.upi.canMakePaymentCache"
      );
      if (b) return Promise.resolve("true" === b);
      if (!a.canMakePayment) return Promise.resolve(!0);
      var c = a.canMakePayment();
      return c.then(function(a) {
        a &&
          window.sessionStorage.setItem(
            "google.payments.api.storage.upi.canMakePaymentCache",
            a.toString()
          );
        return a;
      });
    }
    var he = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
      ""
    );
    function ie(a) {
      for (var b = Array(36), c = 0, d, f = 0; 36 > f; f++)
        8 == f || 13 == f || 18 == f || 23 == f
          ? (b[f] = "-")
          : 14 == f
          ? (b[f] = "4")
          : (2 >= c && (c = (33554432 + 16777216 * Math.random()) | 0),
            (d = c & 15),
            (c >>= 4),
            (b[f] = he[19 == f ? (d & 3) | 8 : d]));
      return b.join("") + "." + a;
    }
    var je = "actions.google.com amp-actions.sandbox.google.com amp-actions-staging.sandbox.google.com amp-actions-autopush.sandbox.google.com payments.developers.google.com payments.google.com".split(
      " "
    );
    function ke(a, b, c) {
      this.pc = b;
      Qd(a);
      this.lc = null;
      this.I = a.environment || "TEST";
      Jd ||
        (Jd =
          -1 != je.indexOf(window.location.hostname) &&
          a.i &&
          a.i.googleTransactionId
            ? a.i.googleTransactionId
            : ie(this.I));
      this.Sc = a;
      this.qa = new Zd(this.I, c, a.i && a.i.redirectKey);
      this.wa = 5;
      var d = Ld();
      this.za = d ? new sd(this.I) : this.qa;
      this.Yb = new ee();
      this.qa.onResult(this.Eb.bind(this));
      this.za.onResult(this.Eb.bind(this));
      d && (Dd = 4);
      Id();
      V({ eventType: 9, clientLatencyStartMs: Date.now() });
      window.addEventListener("message", function(a) {
        -1 != je.indexOf(window.location.hostname) &&
          "logPaymentData" === a.data.name &&
          V(a.data.data);
      });
    }
    var Jd;
    e = ke.prototype;
    e.isReadyToPay = function(a) {
      a && (a = Object.assign({}, this.Sc, a));
      var b = Date.now(),
        c = Pd() || Rd(a);
      if (c)
        return new Promise(function(a, b) {
          le("isReadyToPay", c);
          V({ eventType: 0, error: 2 });
          b({ statusCode: "DEVELOPER_ERROR", statusMessage: c });
        });
      var d = this.Pa(a);
      d.then(function(a) {
        V({
          eventType: 0,
          clientLatencyStartMs: b,
          isReadyToPayApiResponse: a
        });
        return a;
      });
      return d;
    };
    e.Pa = function(a) {
      if (this.Yb.isUpiRequest(a)) return this.Yb.isReadyToPay(a);
      if (Ld() && !me(a)) {
        if (2 <= a.apiVersion) return ne(this, a);
        var b = this.qa.isReadyToPay(a),
          c = this.za.isReadyToPay(a);
        return Md(a)
          ? c
          : c.then(function() {
              return b;
            });
      }
      var d = this.qa.isReadyToPay(a);
      return d;
    };
    function ne(a, b) {
      var c = Promise.resolve({ result: !1 });
      b.existingPaymentMethodRequired &&
        (c = Promise.resolve({ result: !1, paymentMethodPresent: !1 }));
      var d = c;
      if (Od(b, "CRYPTOGRAM_3DS")) {
        var f = JSON.parse(JSON.stringify(b));
        for (d = 0; d < f.allowedPaymentMethods.length; d++)
          "CARD" == f.allowedPaymentMethods[d].type &&
            (f.allowedPaymentMethods[d].parameters.allowedAuthMethods = [
              "CRYPTOGRAM_3DS"
            ]);
        d = a.za.isReadyToPay(f);
      }
      var g = c;
      Od(b, "PAN_ONLY") && (g = a.qa.isReadyToPay(b));
      return d.then(function(a) {
        return 1 == (a && a.result) ? a : g;
      });
    }
    e.prefetchPaymentData = function(a) {
      var b = Pd() || Ud(a);
      b
        ? le("prefetchPaymentData", b)
        : (oe(a),
          Ld() && !me(a)
            ? this.za.prefetchPaymentData(a)
            : this.qa.prefetchPaymentData(a));
    };
    e.loadPaymentData = function(a) {
      var b = this;
      V({ eventType: 5 });
      var c = Pd() || Ud(a);
      this.wa = a && a.swg ? 6 : 5;
      if (c)
        this.pc(
          new Promise(function(a, d) {
            V({ eventType: 1, error: 2, buyFlowMode: b.wa });
            le("loadPaymentData", c);
            d({ statusCode: "DEVELOPER_ERROR", statusMessage: c });
          })
        );
      else {
        var d = Vd(a);
        d
          ? this.Yb.loadPaymentData(a, d, this.Eb.bind(this))
          : (window.sessionStorage.getItem(
              "google.payments.api.storage.isreadytopay.result"
            ),
            (this.lc = Date.now()),
            oe(a),
            me(a) ? this.qa.loadPaymentData(a) : this.za.loadPaymentData(a));
      }
    };
    function le(a, b) {
      console.error("DEVELOPER_ERROR in " + a + " : " + b);
    }
    e.createButton = function() {
      var a = Date.now();
      V({ eventType: 2, clientLatencyStartMs: a });
      return null;
    };
    e.Eb = function(a) {
      var b = this;
      a.then(function() {
        V({ eventType: 1, clientLatencyStartMs: b.lc, buyFlowMode: b.wa });
      }).catch(function(a) {
        a.errorCode
          ? V({ eventType: 1, error: a.errorCode, buyFlowMode: b.wa })
          : V({ eventType: 1, error: 6, buyFlowMode: b.wa });
      });
      this.pc(a);
    };
    function oe(a) {
      var b = { startTimeMs: Date.now(), googleTransactionId: Jd };
      a.i = a.i ? Object.assign(b, a.i) : b;
    }
    function me(a) {
      return !0 === (a.i && a.i.disableNative);
    }
    var pe = null;
    function W(a) {
      if (!pe) {
        pe = {};
        var b = "";
        try {
          var c = Cb(a.location.hash)["swg.experiments"];
          c && (b += "," + c);
        } catch (d) {
          Ob(d);
        }
        b.split(",").forEach(function(b) {
          if ((b = b.trim()))
            try {
              var c = b;
              b = pe;
              var d = !1,
                h = c.indexOf(":");
              if (-1 == h) {
                var k = c;
                var l = 100;
                d = !1;
              } else
                (k = c.substring(0, h).trim()),
                  (c = c.substring(h + 1)),
                  "c" == c.substring(c.length - 1) &&
                    ((d = !0), (c = c.substring(0, c.length - 1))),
                  (l = parseInt(c, 10));
              if (isNaN(l)) throw Error("invalid fraction");
              if (99 < l) var m = !0;
              else if (1 > l) m = !1;
              else if (a.sessionStorage) {
                d = d && 20 >= l;
                try {
                  h = "subscribe.google.com:e:" + k + ":" + l + (d ? "c" : "");
                  var n = a.sessionStorage.getItem(h);
                  var p = "e" == n ? "e" : "c" == n ? "c" : null;
                  !p &&
                    100 * a.Math.random() <= l * (d ? 2 : 1) &&
                    ((p = (d ? 0.5 >= a.Math.random() : 1) ? "e" : "c"),
                    a.sessionStorage.setItem(h, p));
                  m = !!p;
                  "c" == p && (k = "c-" + k);
                } catch (A) {
                  (m = !1), Ob(A);
                }
              } else m = !1;
              b[k] = m;
            } catch (A) {
              Ob(A);
            }
        });
      }
      return pe;
    }
    function qe(a) {
      a = W(a);
      var b = [],
        c;
      for (c in a) a[c] && b.push(c);
      return b;
    }
    var re = {
      PRODUCTION: "https://pay.google.com",
      SANDBOX: "https://pay.sandbox.google.com"
    };
    function se() {
      return Db(re.PRODUCTION + "/gp/p/ui/pay", "_", Ib());
    }
    function te(a, b, c) {
      this.fb = W(a)["gpay-api"] ? new ue(a, b) : new ve(a, b, c);
    }
    te.prototype.preconnect = function(a) {
      a.prefetch(se());
      a.prefetch(
        "https://payments.google.com/payments/v4/js/integrator.js?ss=md"
      );
      a.prefetch("https://clients2.google.com/gr/gr_full_2.0.6.js");
      a.preconnect("https://www.gstatic.com/");
      a.preconnect("https://fonts.googleapis.com/");
      a.preconnect("https://www.google.com/");
    };
    te.prototype.getType = function() {
      return this.fb.getType();
    };
    te.prototype.start = function(a, b) {
      b = void 0 === b ? {} : b;
      this.fb.start(a, b);
    };
    te.prototype.onResponse = function(a) {
      this.fb.onResponse(a);
    };
    function ve(a, b, c) {
      this.c = a;
      this.m = b;
      this.o = c;
    }
    ve.prototype.getType = function() {
      return "SWG";
    };
    ve.prototype.start = function(a, b) {
      a = this.m.open(
        "GPAY",
        se(),
        b.forceRedirect ? "_top" : "_blank",
        J(a),
        {}
      );
      this.o.popupOpened((a && a.targetWin) || null);
    };
    ve.prototype.onResponse = function(a) {
      function b(b) {
        c.o.popupClosed();
        a(we(c, b));
      }
      var c = this;
      this.m.onResult("GPAY", b);
      this.m.onResult("swg-pay", b);
    };
    function we(a, b) {
      return b.acceptResult().then(function(b) {
        if (b.origin != re.PRODUCTION) throw Error("channel mismatch");
        var c = b.data;
        if (c.redirectEncryptedCallbackData)
          return new Xc(a.c)
            .fetch(re.PRODUCTION + "/gp/p/apis/buyflow/process", {
              method: "post",
              headers: { Accept: "text/plain, application/json" },
              credentials: "include",
              body: c.redirectEncryptedCallbackData,
              mode: "cors"
            })
            .then(function(a) {
              return a.json();
            })
            .then(function(a) {
              var b = Object.assign({}, c);
              delete b.redirectEncryptedCallbackData;
              return Object.assign(b, a);
            });
        if (b.originVerified && b.secureChannel) return c;
        throw Error("channel mismatch");
      });
    }
    function ue(a, b) {
      this.c = a;
      this.m = b;
      this.ta = this.Mb = null;
      this.Ib = new xe(this.c);
      a = {
        environment: "PRODUCTION",
        i: { redirectKey: this.Ib.restoreKey() }
      };
      b = this.Jc.bind(this);
      this.Ac = new ke(a, b, this.m.getOriginalWebActivityPorts());
      this.Ib.prepare();
    }
    ue.prototype.getType = function() {
      return "PAYJS";
    };
    ue.prototype.start = function(a, b) {
      var c = this;
      b.forceRedirect &&
        (a = Object.assign(a, { forceRedirect: b.forceRedirect || !1 }));
      ye(a, "disableNative", this.c != this.c.top || !W(this.c)["gpay-native"]);
      this.Ib.useVerifier(function(b) {
        b && ye(a, "redirectVerifier", b);
        c.Ac.loadPaymentData(a);
      });
    };
    ue.prototype.onResponse = function(a) {
      var b = this;
      this.Mb = a;
      var c = this.ta;
      c &&
        Promise.resolve().then(function() {
          c && a(ze(b, c));
        });
    };
    ue.prototype.Jc = function(a) {
      this.ta = a;
      this.Mb && this.Mb(ze(this, this.ta));
    };
    function ze(a, b) {
      return b.catch(function(b) {
        return "object" == typeof b && "CANCELED" == b.statusCode
          ? Promise.reject(Na(a.c, void 0))
          : Promise.reject(b);
      });
    }
    function xe(a) {
      this.c = a;
      this.Sa = !1;
      this.Fa = this.Fb = null;
    }
    xe.prototype.prepare = function() {
      return Ae(this, function() {});
    };
    xe.prototype.useVerifier = function(a) {
      var b = this;
      Ae(this, function(c) {
        if (c)
          try {
            b.c.localStorage.setItem("subscribe.google.com:rk", c.key);
          } catch (d) {
            c = null;
          }
        a((c && c.verifier) || null);
      });
    };
    xe.prototype.restoreKey = function() {
      try {
        return (
          (this.c.localStorage &&
            this.c.localStorage.getItem("subscribe.google.com:rk")) ||
          null
        );
      } catch (a) {
        return null;
      }
    };
    function Ae(a, b) {
      Be(a);
      a.Sa
        ? b(a.Fb)
        : a.Fa &&
          a.Fa.then(function(a) {
            return b(a);
          });
      return a.Fa;
    }
    function Be(a) {
      if (!a.Sa && !a.Fa) {
        var b = a.c.crypto;
        a.c.localStorage &&
        b &&
        b.getRandomValues &&
        b.subtle &&
        b.subtle.digest
          ? (a.Fa = new Promise(function(a, d) {
              var c = new Uint8Array(16);
              b.getRandomValues(c);
              var g = btoa(Vb(c));
              b.subtle.digest({ name: "SHA-384" }, Ub(g)).then(
                function(b) {
                  b = btoa(Vb(new Uint8Array(b)));
                  a({ key: g, verifier: b });
                },
                function(a) {
                  d(a);
                }
              );
            })
              .catch(function() {
                return null;
              })
              .then(function(b) {
                a.Sa = !0;
                return (a.Fb = b);
              }))
          : ((a.Sa = !0), (a.Fb = null));
      }
    }
    function ye(a, b, c) {
      var d = {};
      a.i = Object.assign(a.i || {}, ((d[b] = c), d));
    }
    function Ce(a, b) {
      this.h = a;
      this.c = a.win();
      this.m = a.activities();
      this.o = a.dialogManager();
      this.Ea = null;
      this.xc = b || null;
      this.j = new O(
        this.c,
        this.m,
        I("/waitforsubscriptionlookupiframe"),
        J({
          publicationId: a.pageConfig().getPublicationId(),
          productId: a.pageConfig().getProductId()
        }),
        !0,
        !0
      );
    }
    Ce.prototype.start = function() {
      var a = this;
      this.Ea = this.o.openView(this.j);
      return this.xc.then(
        function(b) {
          a.o.completeView(a.j);
          return b;
        },
        function(b) {
          a.o.completeView(a.j);
          throw b;
        }
      );
    };
    function De(a, b) {
      this.ka = a;
      this.V = b;
    }
    De.prototype.getOffers = function(a) {
      var b = a || this.ka.getProductId();
      if (!b)
        throw Error("getOffers requires productId in config or arguments");
      return this.Aa(b);
    };
    De.prototype.Aa = function(a) {
      a = Gb(
        "/publication/" +
          encodeURIComponent(this.ka.getPublicationId()) +
          "/offers?label=" +
          encodeURIComponent(a)
      );
      return this.V.fetchCredentialedJson(a).then(function(a) {
        return a.offers || [];
      });
    };
    function X(a, b) {
      this.h = a;
      this.c = a.win();
      this.m = a.activities();
      this.o = a.dialogManager();
      this.A = a.eventManager();
      var c = b && b.isClosable;
      void 0 == c && (c = !1);
      var d = {
        productId: a.pageConfig().getProductId(),
        publicationId: a.pageConfig().getPublicationId(),
        showNative: a.callbacks().hasSubscribeRequestCallback(),
        productType: "SUBSCRIPTION",
        list: (b && b.list) || "default",
        skus: (b && b.skus) || null,
        isClosable: c
      };
      this.prorationMode = d.replaceSkuProrationMode || void 0;
      b && b.oldSku && (d.oldSku = b.oldSku);
      if (d.oldSku) {
        C(d.skus, "Need a sku list if old sku is provided!");
        var f = d.skus,
          g = d.oldSku;
        f = f.filter(function(a) {
          return a !== g;
        });
        C(0 < f.length, "Sku list only contained offer user already has");
        d.skus = f;
      }
      if (d.skus && 1 === d.skus.length && ((a = d.skus[0]), (b = d.oldSku))) {
        new S(this.h, {
          skuId: a,
          oldSku: b,
          replaceSkuProrationMode: this.prorationMode
        }).start();
        return;
      }
      this.j = new O(this.c, this.m, I("/offersiframe"), J(d), !0);
    }
    X.prototype.Rb = function(a) {
      var b = a.getSku();
      a = a.getOldSku();
      b &&
        (this.A.logSwgEvent(1006, !0),
        new S(this.h, a ? { skuId: b, oldSku: a } : b).start());
    };
    X.prototype.Ba = function(a) {
      a.getSubscriberOrMember() &&
        (this.A.logSwgEvent(1009, !0),
        this.h
          .callbacks()
          .triggerLoginRequest({ linkRequested: !!a.getLinkRequested() }));
    };
    X.prototype.ad = function(a) {
      a.getNative() && this.h.callbacks().triggerSubscribeRequest();
    };
    X.prototype.start = function() {
      var a = this;
      return this.j
        ? (this.h.callbacks().triggerFlowStarted("showOffers"),
          this.j.onCancel(function() {
            a.h.callbacks().triggerFlowCanceled("showOffers");
          }),
          this.j.on(Ea, this.Rb.bind(this)),
          this.j.on(r, this.Ba.bind(this)),
          this.j.on(y, this.ad.bind(this)),
          this.A.logSwgEvent(3),
          this.o.openView(this.j))
        : Promise.resolve();
    };
    function Ee(a, b) {
      this.h = a;
      this.D = b;
      this.m = a.activities();
      this.o = a.dialogManager();
      this.A = a.eventManager();
      this.j = new O(
        a.win(),
        this.m,
        I("/optionsiframe"),
        J({
          publicationId: a.pageConfig().getPublicationId(),
          productId: a.pageConfig().getProductId(),
          list: (b && b.list) || "default",
          skus: (b && b.skus) || null,
          isClosable: !0
        }),
        !1
      );
    }
    Ee.prototype.start = function() {
      var a = this;
      this.h.callbacks().triggerFlowStarted("showSubscribeOption");
      this.j.onCancel(function() {
        a.h.callbacks().triggerFlowCanceled("showSubscribeOption");
      });
      this.j.on(x, this.oc.bind(this));
      this.j.acceptResult().then(
        function(b) {
          b = b.data;
          var c = new x();
          b.subscribe && c.setSubscribe(!0);
          a.oc(c);
        },
        function(b) {
          a.o.completeView(a.j);
          throw b;
        }
      );
      this.A.logSwgEvent(7);
      return this.o.openView(this.j);
    };
    Ee.prototype.oc = function(a) {
      a.getSubscribe() &&
        ((a = this.D || {}),
        void 0 == a.isClosable && (a.isClosable = !0),
        this.A.logSwgEvent(1008, !0),
        new X(this.h, a).start());
    };
    function Fe(a, b) {
      b = void 0 === b ? {} : b;
      this.h = a;
      this.D = b;
      this.c = a.win();
      this.m = a.activities();
      this.o = a.dialogManager();
      this.A = a.eventManager();
      this.j = new O(
        this.c,
        this.m,
        I("/abbrvofferiframe"),
        J({
          publicationId: a.pageConfig().getPublicationId(),
          productId: a.pageConfig().getProductId(),
          showNative: a.callbacks().hasSubscribeRequestCallback(),
          list: (b && b.list) || "default",
          skus: (b && b.skus) || null,
          isClosable: !0
        }),
        !1
      );
    }
    Fe.prototype.Ba = function(a) {
      a.getSubscriberOrMember() &&
        (this.A.logSwgEvent(1009, !0),
        this.h
          .callbacks()
          .triggerLoginRequest({ linkRequested: !!a.getLinkRequested() }));
    };
    Fe.prototype.start = function() {
      var a = this;
      this.h.callbacks().triggerFlowStarted("showAbbrvOffer");
      this.j.onCancel(function() {
        a.h.callbacks().triggerFlowCanceled("showAbbrvOffer");
      });
      this.j.on(r, this.Ba.bind(this));
      this.j.acceptResult().then(function(b) {
        b.data.viewOffers
          ? ((b = a.D || {}),
            void 0 == b.isClosable && (b.isClosable = !0),
            a.A.logSwgEvent(1008, !0),
            new X(a.h, b).start())
          : b.data["native"] &&
            (a.h.callbacks().triggerSubscribeRequest(), a.o.completeView(a.j));
      });
      this.A.logSwgEvent(8);
      return this.o.openView(this.j);
    };
    function Ge(a) {
      this.l = a;
    }
    Ge.prototype.preconnect = function(a) {
      He(this, a, "preconnect");
    };
    Ge.prototype.dnsPrefetch = function(a) {
      He(this, a, "dns-prefetch");
    };
    Ge.prototype.prefetch = function(a) {
      He(this, a, "preconnect prefetch");
    };
    Ge.prototype.preload = function(a, b) {
      He(this, a, "preconnect preload", b);
    };
    function He(a, b, c, d) {
      var f = E(a.l, "link", { rel: c, href: b });
      d && f.setAttribute("as", d);
      a.l.head.appendChild(f);
    }
    function Ie(a) {
      this.c = a;
      this.Ka = {};
    }
    Ie.prototype.get = function(a) {
      var b = this;
      this.Ka[a] ||
        (this.Ka[a] = new Promise(function(c) {
          if (b.c.sessionStorage)
            try {
              c(b.c.sessionStorage.getItem(Je(a)));
            } catch (d) {
              c(null);
            }
          else c(null);
        }));
      return this.Ka[a];
    };
    Ie.prototype.set = function(a, b) {
      var c = this;
      this.Ka[a] = Promise.resolve(b);
      return new Promise(function(d) {
        if (c.c.sessionStorage)
          try {
            c.c.sessionStorage.setItem(Je(a), b);
          } catch (f) {}
        d();
      });
    };
    Ie.prototype.remove = function(a) {
      var b = this;
      delete this.Ka[a];
      return new Promise(function(c) {
        if (b.c.sessionStorage)
          try {
            b.c.sessionStorage.removeItem(Je(a));
          } catch (d) {}
        c();
      });
    };
    function Je(a) {
      return "subscribe.google.com:" + a;
    }
    function Ke(a, b) {
      return "Event has an invalid " + a + "(" + b + ")";
    }
    function Le(a) {
      if (!F(a)) throw Error("Event must be a valid object");
      if (!G(ya, a.eventType)) throw Error(Ke("eventType", a.eventType));
      if (!G(za, a.eventOriginator))
        throw Error(Ke("eventOriginator", a.eventOriginator));
      if (!F(a.additionalParameters) && null != a.additionalParameters)
        throw Error(Ke("additionalParameters", a.additionalParameters));
      if (null != a.isFromUserAction && !H(a.isFromUserAction))
        throw Error(Ke("isFromUserAction", a.isFromUserAction));
    }
    function Me(a) {
      this.zb = [];
      this.pb = [];
      this.xb = null;
      this.Mc = a;
    }
    Me.prototype.registerEventListener = function(a) {
      if (null === a || "function" !== typeof a)
        throw Error("Event manager listeners must be a function");
      this.zb.push(a);
    };
    Me.prototype.registerEventFilterer = function(a) {
      if (null === a || "function" !== typeof a)
        throw Error("Event manager filterers must be a function");
      this.pb.push(a);
    };
    Me.prototype.logEvent = function(a) {
      var b = this;
      Le(a);
      this.xb = this.Mc.then(function() {
        for (var c = 0; c < b.pb.length; c++)
          try {
            if (1 === b.pb[c](a)) return Promise.resolve();
          } catch (d) {
            mb(d);
          }
        for (c = 0; c < b.zb.length; c++)
          try {
            b.zb[c](a);
          } catch (d) {
            mb(d);
          }
        return Promise.resolve();
      });
    };
    Me.prototype.logSwgEvent = function(a, b, c) {
      b = void 0 === b ? !1 : b;
      this.logEvent({
        eventType: a,
        eventOriginator: 1,
        isFromUserAction: b,
        additionalParameters: void 0 === c ? null : c
      });
    };
    var Ne = { display: "none" };
    function Oe(a) {
      this.l = a.doc();
      this.h = a;
      this.m = a.activities();
      this.w = E(this.l.getWin().document, "iframe", {});
      D(this.w, Ne);
      this.oa = I("/serviceiframe");
      this.ga = a.pageConfig().getPublicationId();
      this.O = J({ publicationId: this.ga });
      this.hc = !1;
      this.F = new Aa();
      this.F.setTransactionId(nb());
      this.xb = this.Nb = null;
      this.A = a.eventManager();
      this.A.registerEventListener(this.sb.bind(this));
    }
    e = Oe.prototype;
    e.setTransactionId = function(a) {
      this.F.setTransactionId(a);
    };
    e.getTransactionId = function() {
      return this.F.getTransactionId();
    };
    e.getSku = function() {
      return this.F.getSku();
    };
    e.setSku = function(a) {
      this.F.setSku(a);
    };
    e.addLabels = function(a) {
      if (a && 0 < a.length) {
        var b = [].concat(this.F.getLabelList());
        a.forEach(function(a) {
          -1 == b.indexOf(a) && b.push(a);
        });
        this.F.setLabelList(b);
      }
    };
    e.getElement = function() {
      return this.w;
    };
    e.jc = function() {
      return this.l.getWin().location.search;
    };
    function Pe(a) {
      var b = Cb(a.jc());
      a.F.setReferringOrigin(Bb(a.l.getWin().document.referrer).origin);
      var c = b.utm_campaign,
        d = b.utm_medium,
        f = b.utm_source;
      c && a.F.setUtmCampaign(c);
      d && a.F.setUtmMedium(d);
      f && a.F.setUtmSource(f);
      a.addLabels(qe(a.l.getWin()));
    }
    function Qe(a) {
      a.Nb ||
        (a.l.getBody().appendChild(a.getElement()),
        (a.Nb = a.m.openIframe(a.w, a.oa, a.O).then(function(b) {
          Pe(a);
          return b.whenReady().then(function() {
            return b;
          });
        })));
      return a.Nb;
    }
    e.setReadyToPay = function(a) {
      this.F.setReadyToPay(a);
    };
    e.close = function() {
      this.l.getBody().removeChild(this.getElement());
    };
    e.getContext = function() {
      return this.F;
    };
    e.getHasLogged = function() {
      return this.hc;
    };
    e.sb = function(a) {
      var b = this;
      4e3 !== a.eventType &&
        ((3 !== a.eventOriginator &&
          5 !== a.eventOriginator &&
          2 !== a.eventOriginator) ||
          !0 === this.h.config().enableSwgAnalytics) &&
        (this.xb = Qe(this).then(function(c) {
          var d = new Ba();
          d.setEventOriginator(a.eventOriginator);
          d.setIsFromUserAction(a.isFromUserAction);
          var f = new Ca();
          f.setEvent(a.eventType);
          f.setContext(b.F);
          f.setMeta(d);
          a.additionalParameters instanceof t &&
            f.setParams(a.additionalParameters);
          b.hc = !0;
          c.execute(f);
        }));
    };
    var Y = {},
      Re =
        ((Y.paywall = 1),
        (Y.ad_shown = 2),
        (Y.offers_shown = 3),
        (Y.subscriptions_landing_page = 1004),
        (Y.offer_selected = 1006),
        (Y.payment_flow_start = 1005),
        (Y.payment_complete = 1001),
        (Y.custom = 3e3),
        Y),
      Z = {},
      Se =
        ((Z[0] = null),
        (Z[1] = "paywall"),
        (Z[2] = "ad_shown"),
        (Z[3] = "offers_shown"),
        (Z[4] = null),
        (Z[5] = null),
        (Z[1e3] = null),
        (Z[1001] = "payment_complete"),
        (Z[1002] = null),
        (Z[1003] = null),
        (Z[1004] = "subscriptions_landing_page"),
        (Z[1005] = "payment_flow_start"),
        (Z[1006] = "offer_selected"),
        (Z[2e3] = null),
        (Z[3e3] = "custom"),
        Z);
    function Te(a, b, c) {
      this.c = a;
      this.h = b;
      this.ga = this.h.pageConfig().getPublicationId();
      this.ib = null;
      this.V = c;
      this.ed = 1;
      this.h.eventManager().registerEventListener(this.sb.bind(this));
    }
    function Ue(a, b) {
      b = b + "&u_tz=240&v=" + a.ed;
      if (!a.ib) {
        var c = a.c.document.cookie.match("(^|;)\\s*__gads\\s*=\\s*([^;]+)");
        a.ib = c && encodeURIComponent(c.pop());
      }
      var d = a.ib;
      d && (b = b + "&cookie=" + d);
      return (b = b + "&cdm=" + a.c.location.hostname);
    }
    Te.prototype.sendSubscriptionState = function(a, b) {
      var c = this.ga + ":" + a;
      b && (c = c + ":" + encodeURIComponent(b));
      var d = Hb("/subopt/data?states=") + encodeURIComponent(c);
      return this.V.fetch(Ue(this, d), {
        method: "GET",
        credentials: "include"
      });
    };
    Te.prototype.sb = function(a) {
      if (this.h.config().enablePropensity || 3 === a.eventOriginator)
        if (4e3 === a.eventType)
          this.sendSubscriptionState(
            a.additionalParameters.state,
            a.additionalParameters.productsOrSkus
          );
        else {
          var b = Se[a.eventType];
          if (null != b) {
            var c = a.additionalParameters;
            c instanceof t && (c = void 0);
            H(a.isFromUserAction) &&
              (F(c) || (c = {}), (c.is_active = a.isFromUserAction));
            a = JSON.stringify(c);
            var d = this.ga + ":" + b;
            a && (d = d + ":" + encodeURIComponent(a));
            a = Hb("/subopt/data?events=") + encodeURIComponent(d);
            this.V.fetch(Ue(this, a), {
              method: "GET",
              credentials: "include"
            });
          }
        }
    };
    Te.prototype.getPropensity = function(a, b) {
      b = Hb("/subopt/pts?products=") + this.ga + "&type=" + b + "&ref=" + a;
      return this.V.fetch(Ue(this, b), {
        method: "GET",
        credentials: "include"
      })
        .then(function(a) {
          return a.json();
        })
        .then(function(a) {
          var b = {};
          if (a.header)
            if (a.header.ok) {
              var c = a.scores;
              a = [];
              for (var g = 0; g < c.length; g++) {
                var h = c[g];
                a.push(
                  h.score
                    ? {
                        product: h.product,
                        score: { value: h.score, bucketed: 2 == h.score_type }
                      }
                    : { product: h.product, error: h.error_message }
                );
              }
              a && (b = { header: { ok: !0 }, body: { scores: a } });
            } else b = { header: { ok: !1 }, body: { error: a.error } };
          else b = { header: { ok: !1 }, body: { error: "No valid response" } };
          return b;
        });
    };
    function Ve(a, b, c) {
      this.c = a;
      this.sc = new Te(a, b, c);
      this.A = b.eventManager();
    }
    Ve.prototype.sendSubscriptionState = function(a, b) {
      if (!Object.values(hc).includes(a))
        throw Error("Invalid subscription state provided");
      if (("subscriber" == a || "past_subscriber" == a) && !b)
        throw Error(
          "Entitlements must be provided for users with active or expired subscriptions"
        );
      if (b && !F(b)) throw Error("Entitlements must be an Object");
      var c = null;
      b && (c = JSON.stringify(b));
      this.sc.sendSubscriptionState(a, c);
    };
    Ve.prototype.getPropensity = function(a) {
      if (a && !Object.values(jc).includes(a))
        throw Error("Invalid propensity type requested");
      a || (a = "general");
      return this.sc.getPropensity(this.c.document.referrer, a);
    };
    Ve.prototype.sendEvent = function(a) {
      var b = Re[a.name],
        c = null;
      if (!G(ic, a.name) || !b)
        throw Error("Invalid user event provided(" + a.name + ")");
      if (a.data)
        if (F(a.data)) (c = {}), Object.assign(c, a.data);
        else throw Error("Event data must be an Object(" + a.data + ")");
      if (H(a.active)) c || (c = {}), Object.assign(c, { is_active: a.active });
      else if (null != a.active) throw Error("Event active must be a boolean");
      this.A.logEvent({
        eventType: b,
        eventOriginator: 3,
        isFromUserAction: a.active,
        additionalParameters: c
      });
    };
    function We(a) {
      this.A = a.eventManager();
    }
    We.prototype.sendSubscriptionState = function(a, b) {
      if (!G(hc, a)) throw Error("Invalid subscription state provided");
      if (("subscriber" == a || "past_subscriber" == a) && !b)
        throw Error(
          "Entitlements must be provided for users with active or expired subscriptions"
        );
      if (b && !F(b)) throw Error("Entitlements must be an Object");
      var c = null;
      b && (c = JSON.stringify(b));
      this.A.logEvent({
        eventType: 4e3,
        eventOriginator: 5,
        isFromUserAction: null,
        additionalParameters: { state: a, productsOrSkus: c }
      });
    };
    We.prototype.sendEvent = function(a) {
      var b = null;
      if (!G(ic, a.name) || !Re[a.name])
        throw Error("Invalid user event provided(" + a.name + ")");
      if (a.data)
        if (F(a.data)) (b = {}), Object.assign(b, a.data);
        else throw Error("Event data must be an Object(" + a.data + ")");
      if (H(a.active)) b || (b = {}), Object.assign(b, { is_active: a.active });
      else if (null != a.active) throw Error("Event active must be a boolean");
      this.A.logEvent({
        eventType: Re[a.name],
        eventOriginator: 5,
        isFromUserAction: a.active,
        additionalParameters: b
      });
    };
    function Xe(a, b, c) {
      var d,
        f = this;
      c = c || {};
      c.configPromise = c.configPromise || Promise.resolve();
      this.A = new Me(c.configPromise);
      this.l = yc(a);
      this.c = this.l.getWin();
      this.ka = {
        windowOpenMode: "auto",
        analyticsMode: 0,
        enableSwgAnalytics: !1,
        enablePropensity: !1
      };
      vb(this.c) && (this.ka.windowOpenMode = "redirect");
      d && Ye(this, d);
      this.R = b;
      this.L = this.l.whenReady();
      this.kc = new fd(this.l);
      this.V = c.fetcher || new ed(this.c);
      this.K = new Ie(this.c);
      this.o = new Jc(this.l);
      this.m = new lb(this.c);
      this.Ua = new te(this.c, this.m, this.o);
      this.H = new Mb();
      this.Oc = new We(this);
      this.U = new Oe(this);
      this.aa = new Oc(this.c, this.R, this.V, this);
      this.Uc = new Ve(this.c, this, this.V);
      this.Qc = new De(this.R, this.V);
      this.gb = new K(this.l, Promise.resolve(this));
      var g = new Ge(this.c.document);
      g.prefetch("https://news.google.com/swg/js/v1/loader.svg");
      jd(this);
      mc(this);
      this.Ua.preconnect(g);
      ub(
        this.l,
        ".swg-dialog,.swg-toast{box-sizing:border-box;background-color:#fff!important}.swg-toast{position:fixed!important;bottom:0!important;max-height:46px!important;z-index:2147483647!important;border:none!important}@media (max-height:640px), (max-width:640px){.swg-dialog,.swg-toast{width:480px!important;left:-240px!important;margin-left:50vw!important;border-top-left-radius:8px!important;border-top-right-radius:8px!important;box-shadow:0 1px 1px rgba(60,64,67,.3),0 1px 4px 1px rgba(60,64,67,.15)!important}}@media (min-width:640px) and (min-height:640px){.swg-dialog{width:630px!important;left:-315px!important;margin-left:50vw!important;background-color:transparent!important;border:none!important}.swg-toast{left:0!important}}@media (max-width:480px){.swg-dialog,.swg-toast{width:100%!important;left:0!important;right:0!important;margin-left:0!important}}\n/*# sourceURL=/./src/components/dialog.css*/"
      );
      this.m.onRedirectError(function(a) {
        f.U.addLabels(["redirect"]);
        f.A.logSwgEvent(2e3, !1);
        f.kc.error("Redirect error", a);
      });
    }
    e = Xe.prototype;
    e.doc = function() {
      return this.l;
    };
    e.win = function() {
      return this.c;
    };
    e.pageConfig = function() {
      return this.R;
    };
    e.jserror = function() {
      return this.kc;
    };
    e.activities = function() {
      return this.m;
    };
    e.payClient = function() {
      return this.Ua;
    };
    e.dialogManager = function() {
      return this.o;
    };
    e.entitlementsManager = function() {
      return this.aa;
    };
    e.callbacks = function() {
      return this.H;
    };
    e.storage = function() {
      return this.K;
    };
    e.analytics = function() {
      return this.U;
    };
    e.init = function() {};
    e.configure = function(a) {
      Ye(this, a);
    };
    function Ye(a, b) {
      var c = "",
        d;
      for (d in b) {
        var f = b[d];
        switch (d) {
          case "windowOpenMode":
            "auto" != f &&
              "redirect" != f &&
              (c = "Unknown windowOpenMode: " + f);
            break;
          case "experiments":
            f.forEach(function(b) {
              W(a.c)[b] = !0;
            });
            break;
          case "analyticsMode":
            0 != f && 1 != f && (c = "Unknown analytics mode: " + f);
            break;
          case "enableSwgAnalytics":
            H(f) || (c = "Unknown enableSwgAnalytics value: " + f);
            break;
          case "enablePropensity":
            H(f) || (c = "Unknown enablePropensity value: " + f);
            break;
          default:
            c = "Unknown config property: " + d;
        }
      }
      C(!c, c || void 0);
      Object.assign(a.ka, b);
    }
    e.config = function() {
      return this.ka;
    };
    e.reset = function() {
      this.aa.reset();
      this.o.completeAll();
    };
    e.clear = function() {
      this.aa.clear();
      this.o.completeAll();
    };
    e.start = function() {
      if (!this.R.getProductId() || !this.R.isLocked())
        return Promise.resolve();
      this.getEntitlements();
    };
    e.getEntitlements = function(a) {
      return this.aa.getEntitlements(a).then(function(a) {
        return a.clone();
      });
    };
    e.setOnEntitlementsResponse = function(a) {
      this.H.setOnEntitlementsResponse(a);
    };
    e.getOffers = function(a) {
      return this.Qc.getOffers(a && a.productId);
    };
    e.showOffers = function(a) {
      var b = this;
      return this.L.then(function() {
        C(
          a ? !a.oldSku : !0,
          "The showOffers() method cannot be used to update a subscription. Use the showUpdateOffers() method instead."
        );
        return new X(b, a).start();
      });
    };
    e.showUpdateOffers = function(a) {
      var b = this;
      C(W(this.c)["replace-subscription"] || !1, "Not yet launched!");
      return this.L.then(function() {
        C(
          a ? !!a.oldSku : !1,
          "The showUpdateOffers() method cannot be used for new subscribers. Use the showOffers() method instead."
        );
        return new X(b, a).start();
      });
    };
    e.showSubscribeOption = function(a) {
      var b = this;
      return this.L.then(function() {
        return new Ee(b, a).start();
      });
    };
    e.showAbbrvOffer = function(a) {
      var b = this;
      return this.L.then(function() {
        return new Fe(b, a).start();
      });
    };
    e.showContributionOptions = function(a) {
      var b = this;
      C(W(this.c).contributions || !1, "Not yet launched!");
      return this.L.then(function() {
        return new rc(b, a).start();
      });
    };
    e.waitForSubscriptionLookup = function(a) {
      var b = this;
      return this.L.then(function() {
        return new Ce(b, a).start();
      });
    };
    e.setOnLoginRequest = function(a) {
      this.H.setOnLoginRequest(a);
    };
    e.setOnLinkComplete = function(a) {
      this.H.setOnLinkComplete(a);
    };
    e.linkAccount = function() {
      var a = this;
      return this.L.then(function() {
        return new hd(a).start();
      });
    };
    e.saveSubscription = function(a) {
      var b = this;
      return this.L.then(function() {
        return new kd(b, a).start();
      });
    };
    e.showLoginPrompt = function() {
      var a = this;
      return this.L.then(function() {
        return new md(a).start();
      });
    };
    e.showLoginNotification = function() {
      var a = this;
      return this.L.then(function() {
        return new nd(a).start();
      });
    };
    e.setOnNativeSubscribeRequest = function(a) {
      this.H.setOnSubscribeRequest(a);
    };
    e.setOnSubscribeResponse = function(a) {
      this.H.setOnSubscribeResponse(a);
    };
    e.subscribe = function(a) {
      var b = this;
      C(
        "string" === typeof a,
        "The subscribe() method can only take a sku as its parameter; for subscription updates please use the updateSubscription() method"
      );
      return this.L.then(function() {
        return new S(b, a).start();
      });
    };
    e.updateSubscription = function(a) {
      var b = this;
      C(W(this.c)["replace-subscription"] || !1, "Not yet launched!");
      C(
        a ? a.oldSku : !1,
        "The updateSubscription() method should be used for subscription updates; for new subscriptions please use the subscribe() method"
      );
      return this.L.then(function() {
        return new S(b, a).start();
      });
    };
    e.setOnContributionResponse = function(a) {
      this.H.setOnContributionResponse(a);
    };
    e.contribute = function(a) {
      var b = this;
      C(W(this.c).contributions || !1, "Not yet launched!");
      return this.L.then(function() {
        return new S(b, a, "UI_CONTRIBUTION").start();
      });
    };
    e.completeDeferredAccountCreation = function(a) {
      var b = this;
      return this.L.then(function() {
        return new sc(b, a || null).start();
      });
    };
    e.setOnFlowStarted = function(a) {
      this.H.setOnFlowStarted(a);
    };
    e.setOnFlowCanceled = function(a) {
      this.H.setOnFlowCanceled(a);
    };
    e.createButton = function(a, b) {
      return this.gb.create(a, b);
    };
    e.attachButton = function(a, b, c) {
      this.gb.attach(a, b, c);
    };
    e.attachSmartButton = function(a, b, c) {
      C(W(this.c).smartbox || !1, "Not yet launched!");
      this.gb.attachSmartButton(this, a, b, c);
    };
    e.getPropensityModule = function() {
      return Promise.resolve(this.Uc);
    };
    e.eventManager = function() {
      return this.A;
    };
    e.getLogger = function() {
      return Promise.resolve(this.Oc);
    };
    function Ze(a) {
      this.T = a;
      this.fd = qa(this.T, "viewport");
    }
    e = Ze.prototype;
    e.getWin = function() {
      return this.T.win;
    };
    e.getRootNode = function() {
      return this.T.getRootNode();
    };
    e.getRootElement = function() {
      var a = this.T.getRootNode();
      return a.documentElement || a.body || a;
    };
    e.getHead = function() {
      return this.T.getHeadNode();
    };
    e.getBody = function() {
      return this.T.isBodyAvailable() ? this.T.getBody() : null;
    };
    e.isReady = function() {
      return this.T.isReady();
    };
    e.whenReady = function() {
      return this.T.whenReady();
    };
    e.addToFixedLayer = function(a) {
      return this.fd.addToFixedLayer(a, !0);
    };
    function $e(a) {
      var b = a.source,
        c = a.service,
        d = void 0 === a.granted ? !1 : a.granted,
        f = void 0 === a.grantReason ? "" : a.grantReason,
        g = a.dataObject,
        h = a.decryptedDocumentKey;
      this.raw = void 0 === a.raw ? "" : a.raw;
      this.source = b;
      this.service = c;
      this.granted = d;
      this.grantReason = f;
      this.data = g;
      this.decryptedDocumentKey = h;
    }
    $e.prototype.json = function() {
      var a = {
        source: this.source,
        service: this.service,
        granted: this.granted,
        grantReason: this.grantReason,
        data: this.data
      };
      return a;
    };
    $e.prototype.jsonForPingback = function() {
      return Object.assign({}, { raw: this.raw }, this.json());
    };
    $e.prototype.isSubscriber = function() {
      return this.granted && "SUBSCRIBER" === this.grantReason;
    };
    function af(a, b) {
      var c =
          ".swg-button,.swg-button-dark,.swg-button-light{border:0;border-radius:4px;box-sizing:border-box;outline:0;padding:11px 8px;width:240px;min-width:150px;height:40px;min-height:40px}.swg-button-dark:after,.swg-button-light:after,.swg-button:after{display:block;max-width:200px;max-height:40px;width:100%;height:100%;margin:auto;content:\"\";border:0;background-origin:content-box;background-position:50%;background-repeat:no-repeat;background-size:contain}.swg-button,.swg-button-light{background-color:#fff;box-shadow:0 1px 1px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15)}.swg-button-light:after,.swg-button:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='235' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M169.367 19c-5.09 0-9.367-4.265-9.367-9.5s4.277-9.5 9.367-9.5c2.818 0 4.823 1.133 6.33 2.622l-1.775 1.827c-1.082-1.04-2.55-1.857-4.555-1.857-3.72 0-6.628 3.081-6.628 6.908 0 3.827 2.907 6.908 6.628 6.908 2.411 0 3.78-1 4.664-1.898.724-.745 1.19-1.806 1.37-3.265h-6.034V8.643h8.494c.09.459.139 1.02.139 1.622 0 1.95-.516 4.357-2.183 6.072-1.627 1.734-3.691 2.663-6.45 2.663z' fill='%234285F4' fill-rule='nonzero'/%3E%3Cpath d='M192 13c0 3.456-2.69 6-6 6s-6-2.544-6-6c0-3.476 2.69-6 6-6s6 2.524 6 6zm-2.63 0c0-2.164-1.563-3.636-3.37-3.636-1.807 0-3.37 1.482-3.37 3.636 0 2.134 1.563 3.636 3.37 3.636 1.807 0 3.37-1.492 3.37-3.636z' fill='%23E94235' fill-rule='nonzero'/%3E%3Cpath d='M205 13c0 3.456-2.69 6-6 6-3.3 0-6-2.544-6-6 0-3.476 2.69-6 6-6s6 2.524 6 6zm-2.62 0c0-2.164-1.563-3.636-3.37-3.636-1.807 0-3.37 1.482-3.37 3.636 0 2.134 1.563 3.636 3.37 3.636 1.807.01 3.37-1.492 3.37-3.636z' fill='%23FABB05' fill-rule='nonzero'/%3E%3Cpath d='M217 7.362v10.53c0 4.337-2.499 6.108-5.457 6.108-2.786 0-4.452-1.908-5.083-3.465l2.192-.93c.392.96 1.35 2.085 2.891 2.085 1.896 0 3.064-1.204 3.064-3.445v-.841h-.087c-.564.714-1.656 1.33-3.025 1.33-2.872 0-5.495-2.554-5.495-5.842C206 9.584 208.633 7 211.495 7c1.37 0 2.46.626 3.025 1.311h.087v-.949H217zm-2.221 5.54c0-2.066-1.35-3.582-3.064-3.582-1.742 0-3.197 1.507-3.197 3.582 0 2.045 1.455 3.533 3.197 3.533 1.714 0 3.064-1.488 3.064-3.533z' fill='%234285F4' fill-rule='nonzero'/%3E%3Cpath fill='%2334A853' fill-rule='nonzero' d='M223 1v18h-3V1z'/%3E%3Cpath d='M232.844 14.973l2.046 1.363c-.662.981-2.256 2.664-5.014 2.664-3.42 0-5.876-2.634-5.876-6 0-3.566 2.487-6 5.585-6 3.119 0 4.643 2.474 5.144 3.816l.271.681-8.032 3.326c.612 1.202 1.574 1.823 2.918 1.823s2.276-.671 2.958-1.673zm-6.307-2.163l5.375-2.224c-.301-.751-1.184-1.272-2.237-1.272-1.343 0-3.208 1.182-3.138 3.496z' fill='%23E94235' fill-rule='nonzero'/%3E%3Cpath d='M6.576 19.384c-1.248 0-2.468-.408-3.66-1.224-1.192-.816-1.972-1.96-2.34-3.432l2.016-.816c.24.944.732 1.74 1.476 2.388.744.648 1.58.972 2.508.972.96 0 1.78-.252 2.46-.756.68-.504 1.02-1.188 1.02-2.052 0-.96-.34-1.7-1.02-2.22-.68-.52-1.756-1.004-3.228-1.452-1.52-.48-2.672-1.1-3.456-1.86-.784-.76-1.176-1.732-1.176-2.916 0-1.232.488-2.304 1.464-3.216.976-.912 2.248-1.368 3.816-1.368 1.456 0 2.64.364 3.552 1.092.912.728 1.504 1.524 1.776 2.388l-2.016.84c-.144-.544-.5-1.048-1.068-1.512-.568-.464-1.3-.696-2.196-.696-.848 0-1.572.236-2.172.708-.6.472-.9 1.06-.9 1.764 0 .64.276 1.18.828 1.62.552.44 1.364.836 2.436 1.188.848.272 1.556.536 2.124.792a9.842 9.842 0 011.728 1.02 4.065 4.065 0 011.32 1.584c.296.632.444 1.364.444 2.196 0 .832-.172 1.576-.516 2.232a4.19 4.19 0 01-1.368 1.56 6.875 6.875 0 01-3.852 1.176zM24.936 19h-2.112v-1.632h-.096c-.336.56-.848 1.036-1.536 1.428a4.345 4.345 0 01-2.184.588c-1.472 0-2.588-.448-3.348-1.344-.76-.896-1.14-2.096-1.14-3.6v-7.2h2.208v6.84c0 2.192.968 3.288 2.904 3.288.912 0 1.656-.368 2.232-1.104.576-.736.864-1.584.864-2.544V7.24h2.208V19zm8.904.384c-.896 0-1.7-.192-2.412-.576-.712-.384-1.244-.864-1.596-1.44h-.096V19h-2.112V1.816h2.208V7.24l-.096 1.632h.096c.352-.576.884-1.056 1.596-1.44.712-.384 1.516-.576 2.412-.576 1.52 0 2.832.6 3.936 1.8 1.104 1.2 1.656 2.688 1.656 4.464 0 1.776-.552 3.264-1.656 4.464-1.104 1.2-2.416 1.8-3.936 1.8zm-.36-2.016c1.024 0 1.904-.388 2.64-1.164.736-.776 1.104-1.804 1.104-3.084s-.368-2.308-1.104-3.084c-.736-.776-1.616-1.164-2.64-1.164-1.04 0-1.924.384-2.652 1.152-.728.768-1.092 1.8-1.092 3.096s.364 2.328 1.092 3.096c.728.768 1.612 1.152 2.652 1.152zm12.336 2.016c-1.312 0-2.396-.32-3.252-.96a5.682 5.682 0 01-1.884-2.4l1.968-.816c.624 1.472 1.688 2.208 3.192 2.208.688 0 1.252-.152 1.692-.456.44-.304.66-.704.66-1.2 0-.768-.536-1.288-1.608-1.56l-2.376-.576c-.752-.192-1.464-.556-2.136-1.092-.672-.536-1.008-1.26-1.008-2.172 0-1.04.46-1.884 1.38-2.532.92-.648 2.012-.972 3.276-.972 1.04 0 1.968.236 2.784.708a3.99 3.99 0 011.752 2.028l-1.92.792c-.432-1.04-1.328-1.56-2.688-1.56-.656 0-1.208.136-1.656.408-.448.272-.672.64-.672 1.104 0 .672.52 1.128 1.56 1.368l2.328.552c1.104.256 1.92.696 2.448 1.32.528.624.792 1.328.792 2.112 0 1.056-.432 1.936-1.296 2.64-.864.704-1.976 1.056-3.336 1.056zm11.928 0c-1.76 0-3.208-.596-4.344-1.788-1.136-1.192-1.704-2.684-1.704-4.476 0-1.792.568-3.284 1.704-4.476 1.136-1.192 2.584-1.788 4.344-1.788 1.312 0 2.4.32 3.264.96a5.621 5.621 0 011.896 2.424l-2.016.84c-.608-1.472-1.704-2.208-3.288-2.208-.976 0-1.836.4-2.58 1.2-.744.8-1.116 1.816-1.116 3.048s.372 2.248 1.116 3.048c.744.8 1.604 1.2 2.58 1.2 1.648 0 2.784-.736 3.408-2.208l1.968.84c-.4.96-1.044 1.764-1.932 2.412-.888.648-1.988.972-3.3.972zm9.36-.384h-2.208V7.24h2.112v1.92h.096c.224-.64.684-1.168 1.38-1.584.696-.416 1.372-.624 2.028-.624.656 0 1.208.096 1.656.288l-.84 2.064c-.288-.112-.68-.168-1.176-.168-.8 0-1.508.316-2.124.948-.616.632-.924 1.46-.924 2.484V19zm8.904-14.712a1.504 1.504 0 01-1.104.456c-.432 0-.8-.152-1.104-.456a1.504 1.504 0 01-.456-1.104c0-.432.152-.8.456-1.104a1.504 1.504 0 011.104-.456c.432 0 .8.152 1.104.456.304.304.456.672.456 1.104 0 .432-.152.8-.456 1.104zm0 14.712H73.8V7.24h2.208V19zm9.096.384c-.896 0-1.7-.192-2.412-.576-.712-.384-1.244-.864-1.596-1.44H81V19h-2.112V1.816h2.208V7.24L81 8.872h.096c.352-.576.884-1.056 1.596-1.44.712-.384 1.516-.576 2.412-.576 1.52 0 2.832.6 3.936 1.8 1.104 1.2 1.656 2.688 1.656 4.464 0 1.776-.552 3.264-1.656 4.464-1.104 1.2-2.416 1.8-3.936 1.8zm-.36-2.016c1.024 0 1.904-.388 2.64-1.164.736-.776 1.104-1.804 1.104-3.084s-.368-2.308-1.104-3.084c-.736-.776-1.616-1.164-2.64-1.164-1.04 0-1.924.384-2.652 1.152-.728.768-1.092 1.8-1.092 3.096s.364 2.328 1.092 3.096c.728.768 1.612 1.152 2.652 1.152zm13.296 2.016c-1.776 0-3.22-.592-4.332-1.776-1.112-1.184-1.668-2.68-1.668-4.488 0-1.712.54-3.184 1.62-4.416 1.08-1.232 2.46-1.848 4.14-1.848 1.744 0 3.14.568 4.188 1.704 1.048 1.136 1.572 2.656 1.572 4.56l-.024.408h-9.288c.064 1.184.46 2.12 1.188 2.808.728.688 1.58 1.032 2.556 1.032 1.584 0 2.656-.672 3.216-2.016l1.968.816c-.384.912-1.016 1.676-1.896 2.292-.88.616-1.96.924-3.24.924zm3.168-7.68c-.048-.672-.356-1.312-.924-1.92-.568-.608-1.412-.912-2.532-.912-.816 0-1.524.256-2.124.768-.6.512-1.012 1.2-1.236 2.064h6.816zM123.72 19h-2.256l-2.928-9.024L115.632 19H113.4l-3.792-11.76h2.304l2.616 8.88h.024l2.904-8.88h2.28l2.904 8.88h.024l2.592-8.88h2.256L123.72 19zm7.632-14.712a1.504 1.504 0 01-1.104.456c-.432 0-.8-.152-1.104-.456a1.504 1.504 0 01-.456-1.104c0-.432.152-.8.456-1.104a1.504 1.504 0 011.104-.456c.432 0 .8.152 1.104.456.304.304.456.672.456 1.104 0 .432-.152.8-.456 1.104zm0 14.712h-2.208V7.24h2.208V19zm7.968.192c-1.232 0-2.172-.328-2.82-.984-.648-.656-.972-1.584-.972-2.784V9.256h-2.064V7.24h2.064v-3.6h2.208v3.6h2.88v2.016h-2.88v6c0 1.28.528 1.92 1.584 1.92.4 0 .736-.064 1.008-.192l.768 1.896c-.48.208-1.072.312-1.776.312zm5.616-17.376V7.24l-.096 1.632h.096c.32-.56.824-1.036 1.512-1.428a4.389 4.389 0 012.208-.588c1.456 0 2.568.448 3.336 1.344.768.896 1.152 2.096 1.152 3.6V19h-2.208v-6.864c0-2.176-.968-3.264-2.904-3.264-.912 0-1.656.364-2.232 1.092-.576.728-.864 1.572-.864 2.532V19h-2.208V1.816h2.208z' fill='%235F6368'/%3E%3C/g%3E%3C/svg%3E\")}.swg-button-dark{background-color:#000}.swg-button-dark:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='231' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFF' fill-rule='evenodd'%3E%3Cpath d='M6.302 19.368c-1.196 0-2.365-.391-3.507-1.173-1.143-.782-1.89-1.878-2.243-3.289l1.932-.782c.23.905.701 1.667 1.414 2.289.714.62 1.515.931 2.404.931.92 0 1.706-.241 2.357-.725.652-.483.978-1.138.978-1.966 0-.92-.326-1.63-.978-2.128-.651-.498-1.682-.962-3.093-1.391-1.457-.46-2.56-1.054-3.312-1.783-.751-.728-1.127-1.66-1.127-2.794 0-1.18.468-2.208 1.403-3.082.935-.874 2.154-1.311 3.657-1.311 1.395 0 2.53.349 3.404 1.046.874.698 1.441 1.461 1.702 2.289l-1.932.805c-.138-.521-.48-1.004-1.024-1.449-.544-.445-1.245-.667-2.104-.667-.813 0-1.506.226-2.081.679-.576.452-.863 1.015-.863 1.69 0 .613.264 1.13.793 1.553.53.421 1.308.8 2.335 1.138.813.26 1.491.514 2.036.759a9.431 9.431 0 011.655.978c.56.406.982.912 1.265 1.518.284.605.426 1.307.426 2.104 0 .797-.165 1.51-.494 2.139a4.015 4.015 0 01-1.312 1.495 6.589 6.589 0 01-3.691 1.127zM23.696 19h-2.024v-1.564h-.092c-.322.537-.813.993-1.472 1.369a4.164 4.164 0 01-2.093.563c-1.41 0-2.48-.43-3.209-1.288-.728-.859-1.092-2.009-1.092-3.45v-6.9h2.116v6.555c0 2.1.927 3.151 2.783 3.151.874 0 1.587-.353 2.139-1.058a3.845 3.845 0 00.828-2.438V7.73h2.116V19zm8.677.368c-.86 0-1.63-.184-2.312-.552-.682-.368-1.192-.828-1.53-1.38h-.091V19h-2.024V2.532h2.116V7.73l-.093 1.564h.093c.337-.552.847-1.012 1.529-1.38.682-.368 1.453-.552 2.312-.552 1.456 0 2.713.575 3.772 1.725 1.058 1.15 1.586 2.576 1.586 4.278 0 1.702-.528 3.128-1.587 4.278-1.058 1.15-2.315 1.725-3.771 1.725zm-.345-1.932c.98 0 1.824-.372 2.53-1.116.705-.743 1.057-1.728 1.057-2.955s-.352-2.212-1.058-2.956c-.705-.743-1.548-1.115-2.53-1.115-.996 0-1.843.368-2.541 1.104-.698.736-1.047 1.725-1.047 2.967s.35 2.231 1.047 2.967c.698.736 1.545 1.104 2.542 1.104zm11.85 1.932c-1.257 0-2.296-.307-3.116-.92a5.446 5.446 0 01-1.806-2.3l1.886-.782c.598 1.41 1.618 2.116 3.06 2.116.659 0 1.2-.146 1.62-.437.422-.291.633-.675.633-1.15 0-.736-.513-1.234-1.54-1.495l-2.278-.552c-.72-.184-1.403-.533-2.047-1.046-.644-.514-.966-1.208-.966-2.082 0-.997.441-1.805 1.323-2.427.881-.62 1.928-.931 3.14-.931.996 0 1.885.226 2.667.678a3.824 3.824 0 011.68 1.944l-1.84.759c-.415-.997-1.273-1.495-2.577-1.495-.628 0-1.157.13-1.587.391-.43.26-.644.613-.644 1.058 0 .644.499 1.081 1.495 1.311l2.231.529c1.058.245 1.84.667 2.346 1.265.506.598.76 1.273.76 2.024 0 1.012-.415 1.855-1.243 2.53-.828.675-1.893 1.012-3.197 1.012zm11.69 0c-1.687 0-3.074-.571-4.163-1.713-1.089-1.143-1.633-2.573-1.633-4.29s.544-3.147 1.633-4.29c1.089-1.142 2.476-1.713 4.163-1.713 1.257 0 2.3.307 3.128.92a5.387 5.387 0 011.817 2.323l-1.932.805c-.583-1.41-1.633-2.116-3.151-2.116-.935 0-1.76.383-2.472 1.15-.714.767-1.07 1.74-1.07 2.921 0 1.18.356 2.154 1.07 2.921.713.767 1.537 1.15 2.472 1.15 1.58 0 2.668-.705 3.266-2.116l1.886.805c-.383.92-1 1.69-1.852 2.311-.85.622-1.905.932-3.162.932zM64.567 19H62.45V7.73h2.024v1.84h.092c.214-.613.655-1.12 1.322-1.518.667-.399 1.315-.598 1.944-.598.628 0 1.157.092 1.587.276l-.805 1.978c-.276-.107-.652-.161-1.127-.161-.767 0-1.445.303-2.036.909-.59.605-.885 1.399-.885 2.38V19zm8.677-14.099a1.441 1.441 0 01-1.058.437c-.415 0-.767-.146-1.059-.437a1.441 1.441 0 01-.436-1.058c0-.414.145-.767.436-1.058a1.441 1.441 0 011.059-.437c.414 0 .766.146 1.057.437.292.291.438.644.438 1.058 0 .414-.146.767-.438 1.058zm0 14.099h-2.117V7.73h2.117V19zm8.86.368c-.858 0-1.629-.184-2.311-.552-.683-.368-1.192-.828-1.53-1.38h-.092V19h-2.024V2.532h2.116V7.73l-.092 1.564h.092c.338-.552.847-1.012 1.53-1.38.682-.368 1.453-.552 2.311-.552 1.457 0 2.714.575 3.772 1.725 1.058 1.15 1.587 2.576 1.587 4.278 0 1.702-.529 3.128-1.587 4.278-1.058 1.15-2.315 1.725-3.772 1.725zm-.345-1.932c.982 0 1.825-.372 2.53-1.116.706-.743 1.058-1.728 1.058-2.955s-.352-2.212-1.058-2.956c-.705-.743-1.548-1.115-2.53-1.115-.996 0-1.844.368-2.541 1.104-.698.736-1.047 1.725-1.047 2.967s.35 2.231 1.047 2.967c.697.736 1.545 1.104 2.541 1.104zm12.886 1.932c-1.702 0-3.086-.567-4.151-1.702-1.066-1.135-1.599-2.568-1.599-4.301 0-1.64.517-3.051 1.553-4.232 1.035-1.18 2.357-1.771 3.967-1.771 1.671 0 3.01.544 4.013 1.633 1.005 1.089 1.507 2.545 1.507 4.37l-.023.391h-8.901c.061 1.135.44 2.032 1.139 2.691.697.66 1.514.989 2.449.989 1.518 0 2.545-.644 3.082-1.932l1.886.782c-.368.874-.974 1.606-1.817 2.197-.843.59-1.878.885-3.105.885zm3.036-7.36c-.046-.644-.341-1.257-.885-1.84-.545-.583-1.354-.874-2.427-.874-.782 0-1.46.245-2.035.736-.576.49-.97 1.15-1.185 1.978h6.532zM119.543 19h-2.163l-2.805-8.648L111.79 19h-2.138l-3.635-11.27h2.209l2.507 8.51h.023l2.782-8.51h2.186l2.782 8.51h.023l2.484-8.51h2.163L119.541 19zM127 4.901a1.441 1.441 0 01-1.058.437c-.414 0-.766-.146-1.058-.437a1.441 1.441 0 01-.437-1.058c0-.414.146-.767.437-1.058a1.441 1.441 0 011.058-.437c.414 0 .767.146 1.058.437.292.291.437.644.437 1.058 0 .414-.145.767-.437 1.058zM127 19h-2.116V7.73H127V19zm7.665.184c-1.18 0-2.081-.314-2.702-.943-.622-.629-.932-1.518-.932-2.668V9.662h-1.978V7.73h1.978V4.28h2.116v3.45h2.76v1.932h-2.76v5.75c0 1.227.506 1.84 1.518 1.84.383 0 .705-.061.966-.184l.736 1.817c-.46.2-1.027.299-1.702.299zm5.64-16.652V7.73l-.091 1.564h.092c.306-.537.79-.993 1.449-1.369a4.206 4.206 0 012.116-.563c1.395 0 2.46.43 3.197 1.288.736.859 1.104 2.009 1.104 3.45V19h-2.116v-6.578c0-2.085-.928-3.128-2.783-3.128-.874 0-1.587.349-2.14 1.046-.551.698-.827 1.507-.827 2.427V19h-2.116V2.532h2.116z'/%3E%3Cg fill-rule='nonzero'%3E%3Cpath d='M165.367 19c-5.09 0-9.367-4.265-9.367-9.5s4.277-9.5 9.367-9.5c2.818 0 4.823 1.133 6.33 2.622l-1.775 1.827c-1.082-1.04-2.55-1.857-4.555-1.857-3.72 0-6.628 3.081-6.628 6.908 0 3.827 2.907 6.908 6.628 6.908 2.411 0 3.78-1 4.664-1.898.724-.745 1.19-1.806 1.37-3.265h-6.034V8.643h8.494c.09.459.139 1.02.139 1.622 0 1.95-.516 4.357-2.183 6.072-1.627 1.734-3.691 2.663-6.45 2.663zM188 13c0 3.456-2.69 6-6 6s-6-2.544-6-6c0-3.476 2.69-6 6-6s6 2.524 6 6zm-2.63 0c0-2.164-1.563-3.636-3.37-3.636-1.807 0-3.37 1.482-3.37 3.636 0 2.134 1.563 3.636 3.37 3.636 1.807 0 3.37-1.492 3.37-3.636zM201 13c0 3.456-2.69 6-6 6-3.3 0-6-2.544-6-6 0-3.476 2.69-6 6-6s6 2.524 6 6zm-2.62 0c0-2.164-1.563-3.636-3.37-3.636-1.807 0-3.37 1.482-3.37 3.636 0 2.134 1.563 3.636 3.37 3.636 1.807.01 3.37-1.492 3.37-3.636zM213 7.362v10.53c0 4.337-2.499 6.108-5.457 6.108-2.786 0-4.452-1.908-5.083-3.465l2.192-.93c.392.96 1.35 2.085 2.891 2.085 1.896 0 3.064-1.204 3.064-3.445v-.841h-.087c-.564.714-1.656 1.33-3.025 1.33-2.872 0-5.495-2.554-5.495-5.842C202 9.584 204.633 7 207.495 7c1.37 0 2.46.626 3.025 1.311h.087v-.949H213zm-2.221 5.54c0-2.066-1.35-3.582-3.064-3.582-1.742 0-3.197 1.507-3.197 3.582 0 2.045 1.455 3.533 3.197 3.533 1.714 0 3.064-1.488 3.064-3.533zM219 1v18h-3V1zM228.844 14.973l2.046 1.363c-.662.981-2.256 2.664-5.014 2.664-3.42 0-5.876-2.634-5.876-6 0-3.566 2.487-6 5.585-6 3.119 0 4.643 2.474 5.144 3.816l.271.681-8.032 3.326c.612 1.202 1.574 1.823 2.918 1.823s2.276-.671 2.958-1.673zm-6.307-2.163l5.375-2.224c-.301-.751-1.184-1.272-2.237-1.272-1.343 0-3.208 1.182-3.138 3.496z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.swg-button-light:hover,.swg-button:hover{background-color:#f8f8f8}.swg-button-light:focus,.swg-button:focus{box-shadow:#e8e8e8}.swg-button-light:active,.swg-button:active{background-color:#fff}.swg-button-dark:hover{background-color:#3c4043}.swg-button-dark:focus{box-shadow:#202124}.swg-button-dark:active{background-color:#5f6368}.swg-smart-button{border:none;padding:0;background:transparent;min-height:126px;position:relative;min-width:300px;width:300px;border-radius:0;overflow:hidden}.swg-smart-button:focus{outline:none}.swg-button-light:lang(ar):after,.swg-button:lang(ar):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ar-lt.svg)}.swg-button-dark:lang(ar):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ar-dk.svg)}.swg-button-light:lang(de):after,.swg-button:lang(de):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-de-lt.svg)}.swg-button-dark:lang(de):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-de-dk.svg)}.swg-button-light:lang(es):after,.swg-button:lang(es):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-es-lt.svg)}.swg-button-dark:lang(es):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-es-dk.svg)}.swg-button-light:lang(es-latam):after,.swg-button:lang(es-latam):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-es-latam-lt.svg)}.swg-button-dark:lang(es-latam):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-es-latam-dk.svg)}.swg-button-light:lang(es-latn):after,.swg-button:lang(es-latn):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-es-latam-lt.svg)}.swg-button-dark:lang(es-latn):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-es-latam-dk.svg)}.swg-button-light:lang(fr):after,.swg-button:lang(fr):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-fr-lt.svg)}.swg-button-dark:lang(fr):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-fr-dk.svg)}.swg-button-light:lang(hi):after,.swg-button:lang(hi):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-hi-lt.svg)}.swg-button-dark:lang(hi):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-hi-dk.svg)}.swg-button-light:lang(id):after,.swg-button:lang(id):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-id-lt.svg)}.swg-button-dark:lang(id):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-id-dk.svg)}.swg-button-light:lang(it):after,.swg-button:lang(it):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-it-lt.svg)}.swg-button-dark:lang(it):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-it-dk.svg)}.swg-button-light:lang(jp):after,.swg-button:lang(jp):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-jp-lt.svg)}.swg-button-dark:lang(jp):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-jp-dk.svg)}.swg-button-light:lang(ko):after,.swg-button:lang(ko):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ko-lt.svg)}.swg-button-dark:lang(ko):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ko-dk.svg)}.swg-button-light:lang(ms):after,.swg-button:lang(ms):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ms-lt.svg)}.swg-button-dark:lang(ms):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ms-dk.svg)}.swg-button-light:lang(nl):after,.swg-button:lang(nl):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-nl-lt.svg)}.swg-button-dark:lang(nl):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-nl-dk.svg)}.swg-button-light:lang(no):after,.swg-button:lang(no):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-no-lt.svg)}.swg-button-dark:lang(no):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-no-dk.svg)}.swg-button-light:lang(pl):after,.swg-button:lang(pl):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-pl-lt.svg)}.swg-button-dark:lang(pl):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-pl-dk.svg)}.swg-button-light:lang(pt):after,.swg-button:lang(pt):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-pt-lt.svg)}.swg-button-dark:lang(pt):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-pt-dk.svg)}.swg-button-light:lang(pt-br):after,.swg-button:lang(pt-br):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-pt-br-lt.svg)}.swg-button-dark:lang(pt-br):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-pt-br-dk.svg)}.swg-button-light:lang(ru):after,.swg-button:lang(ru):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ru-lt.svg)}.swg-button-dark:lang(ru):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ru-dk.svg)}.swg-button-light:lang(se):after,.swg-button:lang(se):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-se-lt.svg)}.swg-button-dark:lang(se):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-se-dk.svg)}.swg-button-light:lang(th):after,.swg-button:lang(th):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-th-lt.svg)}.swg-button-dark:lang(th):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-th-dk.svg)}.swg-button-light:lang(tr):after,.swg-button:lang(tr):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-tr-lt.svg)}.swg-button-dark:lang(tr):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-tr-dk.svg)}.swg-button-light:lang(uk):after,.swg-button:lang(uk):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-uk-lt.svg)}.swg-button-dark:lang(uk):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-uk-dk.svg)}.swg-button-light:lang(zh-tw):after,.swg-button:lang(zh-tw):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-zh-tw-lt.svg)}.swg-button-dark:lang(zh-tw):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-zh-tw-dk.svg)}\n/*# sourceURL=/extensions/amp-subscriptions-google/0.1/amp-subscriptions-google.css*/",
        d = !1,
        f = "amp-subscriptions-google",
        g = a.getHeadNode(),
        h = bf(g, cf(g, c), d || !1, f || null);
      if (b) {
        var k = a.getRootNode();
        if (df(k, h)) b(h);
        else
          var l = setInterval(function() {
            df(k, h) && (clearInterval(l), b(h));
          }, 4);
      }
    }
    function bf(a, b, c, d) {
      var f = a.__AMP_CSS_SM;
      if (!f) {
        var g = Object.create(null);
        f = a.__AMP_CSS_SM = g;
      }
      var h = !c && d && "amp-custom" != d && "amp-keyframes" != d;
      if ((g = c ? "amp-runtime" : h ? "amp-extension=" + d : null)) {
        var k = ef(a, f, g);
        if (k) return k.textContent !== b && (k.textContent = b), k;
      }
      k = (a.ownerDocument || a).createElement("style");
      k.textContent = b;
      var l = null;
      c
        ? k.setAttribute("amp-runtime", "")
        : h
        ? (k.setAttribute("amp-extension", d || ""),
          (l = ef(a, f, "amp-runtime")))
        : (d && k.setAttribute(d, ""), (l = a.lastChild));
      b = l;
      a.insertBefore(k, b ? b.nextSibling : a.firstChild);
      g && (f[g] = k);
      return k;
    }
    function ef(a, b, c) {
      return b[c]
        ? b[c]
        : (a = a.querySelector("style[" + c + "]"))
        ? (b[c] = a)
        : null;
    }
    function cf(a, b) {
      return (a = a.__AMP_CSS_TR) ? a(b) : b;
    }
    function df(a, b) {
      var c = a.styleSheets;
      for (a = 0; a < c.length; a++) {
        var d = c[a];
        if (d.ownerNode == b) return !0;
      }
      return !1;
    }
    var ff = /(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,
      gf = {},
      hf = ((gf[1] = !0), gf),
      jf = {},
      kf = ((jf["subscriptions-paywall-activated"] = 1), jf),
      lf = {},
      mf = {},
      nf = ((mf.showOffers = ((lf.started = null), lf)), mf);
    function of(a) {
      this.T = a;
    }
    of.prototype.createPlatform = function(a, b) {
      return new pf(this.T, a, b);
    };
    function pf(a, b, c) {
      var d = this;
      this.ua = c;
      this.X = c.getAnalytics();
      this.X.registerEventListener(this.Gc.bind(this));
      var f = null;
      this.G = new Xe(new Ze(a), c.getPageConfig(), {
        fetcher: new qf(a.win),
        configPromise: new Promise(function(a) {
          return (f = a);
        })
      });
      this.A = this.G.eventManager();
      this.A.registerEventFilterer(rf);
      f();
      this.G.setOnLoginRequest(function(a) {
        a && a.linkRequested && d.Ca
          ? (d.G.linkAccount(),
            d.X.actionEvent(d.getServiceId(), "link", "started"),
            d.X.serviceEvent("subscriptions-link-requested", d.getServiceId()))
          : sf(d, d.ua.delegateActionToLocal("login"));
      });
      this.G.setOnLinkComplete(function() {
        d.ua.resetPlatforms();
        d.X.actionEvent(d.getServiceId(), "link", "success");
        d.X.serviceEvent("subscriptions-link-complete", d.getServiceId());
      });
      this.G.setOnFlowStarted(function(a) {
        ("subscribe" != a.flow &&
          "contribute" != a.flow &&
          "showContributionOptions" != a.flow &&
          "showOffers" != a.flow) ||
          d.X.actionEvent(d.getServiceId(), a.flow, "started");
      });
      this.G.setOnFlowCanceled(function(a) {
        "linkAccount" == a.flow
          ? (d.ua.resetPlatforms(),
            d.X.actionEvent(d.getServiceId(), "link", "rejected"),
            d.X.serviceEvent("subscriptions-link-canceled", d.getServiceId()))
          : ("subscribe" != a.flow &&
              "contribute" != a.flow &&
              "showContributionOptions" != a.flow &&
              "showOffers" != a.flow) ||
            d.X.actionEvent(d.getServiceId(), a.flow, "rejected");
      });
      this.G.setOnNativeSubscribeRequest(function() {
        sf(d, d.ua.delegateActionToLocal("subscribe"));
      });
      this.G.setOnSubscribeResponse(function(a) {
        a.then(function(a) {
          tf(d, a, "subscribe");
        });
      });
      this.G.setOnContributionResponse(function(a) {
        a.then(function(a) {
          tf(d, a, "contribute");
        });
      });
      this.Zc = b;
      this.Ca = !1;
      uf(this, qa(a, "viewer"));
      this.Pa = !1;
      af(a, function() {});
    }
    function rf(a) {
      return 1 !== a.eventOriginator ? 0 : hf[a.eventType] ? 1 : 0;
    }
    e = pf.prototype;
    e.Gc = function(a, b, c) {
      var d = null,
        f = c.action;
      c = c.status;
      kf[a] ? (d = kf[a]) : f && nf[f] && (d = nf[f][c]);
      d &&
        this.A.logEvent({
          eventType: d,
          eventOriginator: 2,
          isFromUserAction: null,
          additionalParameters: null
        });
    };
    function sf(a, b) {
      b.then(function(b) {
        b && a.G.reset();
      });
    }
    function tf(a, b, c) {
      b.complete().then(function() {
        a.ua.resetPlatforms();
      });
      a.X.actionEvent(a.getServiceId(), c, "success");
    }
    e.isPrerenderSafe = function() {
      return this.Ca;
    };
    e.getEntitlements = function() {
      var a = this,
        b = this.ua.getEncryptedDocumentKey("google.com");
      return this.G.getEntitlements(b).then(function(b) {
        b.isReadyToPay && (a.Pa = !0);
        var c = b.getEntitlementForThis(),
          f = !1;
        if (c && c.source) f = !0;
        else if (b.entitlements.length && b.entitlements[0].products.length)
          c = b.entitlements[0];
        else return null;
        b.ack();
        return new $e({
          source: c.source,
          raw: b.raw,
          service: "subscribe.google.com",
          granted: f,
          grantReason: f ? "SUBSCRIBER" : null,
          dataObject: c.json(),
          decryptedDocumentKey: b.decryptedDocumentKey
        });
      });
    };
    e.getServiceId = function() {
      return "subscribe.google.com";
    };
    e.activate = function(a, b) {
      var c = b || a;
      c.granted
        ? c.isSubscriber() || this.G.showAbbrvOffer({ list: "amp" })
        : this.G.showOffers({ list: "amp" });
    };
    e.reset = function() {
      this.G.reset();
    };
    e.isPingbackEnabled = function() {
      return !1;
    };
    e.pingbackReturnsAllEntitlements = function() {
      return !1;
    };
    e.pingback = function() {};
    e.getSupportedScoreFactor = function(a) {
      switch (a) {
        case "supportsViewer":
          return this.Ca ? 1 : 0;
        case "isReadyToPay":
          return this.Pa ? 1 : 0;
        default:
          return 0;
      }
    };
    function uf(a, b) {
      var c = b.getParam("viewerUrl");
      c
        ? (a.Ca = ff.test(na(c).hostname))
        : b.getViewerOrigin().then(function(b) {
            b && (a.Ca = ff.test(na(b).hostname));
          });
    }
    e.getBaseScore = function() {
      return this.Zc.baseScore || 0;
    };
    e.executeAction = function(a) {
      return "subscribe" == a
        ? (this.G.showOffers({ list: "amp", isClosable: !0 }),
          Promise.resolve(!0))
        : "contribute" == a
        ? (this.G.showContributionOptions({ list: "amp", isClosable: !0 }),
          Promise.resolve(!0))
        : "login" == a
        ? (this.G.linkAccount(), Promise.resolve(!0))
        : Promise.resolve(!1);
    };
    e.decorateUI = function(a, b, c) {
      var d = c ? c : {};
      switch (b) {
        case "subscribe":
          a.textContent = "";
          this.G.attachButton(a, c, function() {});
          break;
        case "subscribe-smartbutton":
        case "subscribe-smartbutton-light":
        case "subscribe-smartbutton-dark":
          a.textContent = "";
          d.theme = "subscribe-smartbutton-dark" === b ? "dark" : "light";
          d.lang = ja(
            a.getAttribute("subscriptions-lang"),
            "subscribe-smartbutton must have a language attribute"
          );
          if ((b = a.getAttribute("subscriptions-message-text-color")))
            d.messageTextColor = b;
          this.G.attachSmartButton(a, d, function() {});
      }
    };
    function qf(a) {
      this.N = oa(a, "xhr");
    }
    qf.prototype.fetchCredentialedJson = function(a) {
      return this.N.fetchJson(a, {
        credentials: "include",
        prerenderSafe: !0
      }).then(function(a) {
        return a.json();
      });
    };
    qf.prototype.fetch = function(a, b) {
      return this.N.fetch(a, b);
    };
    (function(a) {
      a.registerServiceForDoc("subscriptions-google", function(a) {
        var b = new of(a);
        a = a.getHeadNode();
        wa(a).then(function(a) {
          a.registerPlatform("subscribe.google.com", function(a, c) {
            return b.createPlatform(a, c);
          });
        });
        return b;
      });
    })(self.AMP);
  }
});

//# sourceMappingURL=amp-subscriptions-google-0.1.js.map
