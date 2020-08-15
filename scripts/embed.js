(function () {
  (function (f, n) {
    var w,
      x,
      m,
      p,
      y,
      r,
      z,
      A,
      s,
      B,
      t,
      C,
      D,
      E,
      F,
      h,
      k,
      q,
      G,
      H,
      u,
      v,
      l,
      I,
      J,
      K;
    f.sq && f.sq.embed && f.sq.embed();
    k = function (a) {
      return n.createElement(a);
    };
    m = function (a, b) {
      return a.appendChild(b);
    };
    l = function (a, b) {
      var d, c;
      c = [];
      for (d in b) c.push(a.style.setProperty(d, b[d]));
      return c;
    };
    u = function (a, b) {
      var d, c, e, g;
      e = {};
      for (c = 0; c < a.attributes.length; )
        (d = a.attributes[c]),
          0 === d.name.indexOf(b) &&
            ((g = d.name.substring(b.length, d.name.length)), (e[g] = d.value)),
          c++;
      return e;
    };
    v = function (a, b) {
      var d, c;
      c = [];
      for (d in b) c.push(a.setAttribute(d, b[d]));
      return c;
    };
    E = function (a) {
      return a && a.href && h.validHref.test(a.href);
    };
    F = function (a) {
      return a && a.href && q.validHref.test(a.href);
    };
    D = function (a) {
      return a && a.href && p.validHref.test(a.href);
    };
    y = function (a) {
      var b, d, c;
      d = {
        "item-images": "image",
        "accent-color": "color",
        template: "template",
        "item-descriptions": "description",
        price: "price",
      };
      var e;
      e = [];
      for (b in a) (c = a[b]), e.push("" + d[b] + "=" + c);
      return e.join("&");
    };
    J = function (a) {
      var b, d, c, e, g;
      g = a.parentNode;
      b = n.createDocumentFragment();
      e = k("div");
      c = k("div");
      d = k("iframe");
      l(e, h.outerStyles);
      l(c, h.innerStyles);
      l(d, h.iframeStyles);
      v(d, h.iframeAttrs);
      d.src = a.href + "/embed";
      m(c, d);
      m(e, c);
      m(b, e);
      g.insertBefore(b, a);
      return g.removeChild(a);
    };
    K = function (a) {
      var b, d, c, e, g, f, h, p;
      h = a.parentNode;
      c = n.createDocumentFragment();
      f = k("div");
      g = k("div");
      e = k("iframe");
      l(f, q.outerStyles);
      l(g, q.innerStyles);
      l(e, q.iframeStyles);
      v(e, q.iframeAttrs);
      p = t(a.href);
      d = u(a, "data-menu-");
      b = "?";
      0 === d.size && (b = "");
      e.src = "https://squareup.com/mfe/market/" + p + b + y(d);
      m(g, e);
      m(f, g);
      m(c, f);
      h.insertBefore(c, a);
      return h.removeChild(a);
    };
    H = function (a) {
      return l(a, {
        "background-image":
          "url('" +
          (1.5 <= f.devicePixelRatio
            ? "https://d2dyi2pd86a6cw.cloudfront.net/market/assets/public/sq-jewel-22@2x.png"
            : "https://d2dyi2pd86a6cw.cloudfront.net/market/assets/public/sq-jewel-22.png") +
          "')",
      });
    };
    t = function (a) {
      return a
        .match(/^(https:\/\/mkt.com)\/([A-Za-z0-9\-]+)/)
        .slice(-1)
        .pop();
    };
    I = function (a) {
      var b, d, c, e, g, f;
      g = a.parentNode;
      d = n.createDocumentFragment();
      c = k("a");
      e = t(a.href);
      c.textContent = a.textContent;
      b = a.href.match(/\?/) ? "&" : "?";
      c.href =
        "" +
        a.href +
        b +
        "utm_source=" +
        e +
        "&utm_medium=embed&utm_campaign=button_v1#menu";
      m(d, c);
      b = u(a, "data-style-");
      c.setAttribute("style", "");
      b = G(p.linkStyles, b);
      b["line-height"] = "" + (parseInt(b.height, 10) + 1) + "px";
      l(c, b);
      H(c);
      b = a.getBoundingClientRect().width;
      g.insertBefore(d, a);
      g.removeChild(a);
      if ((f = b > c.offsetWidth - 92))
        (c.style.backgroundPosition = "50% -100%"),
          (c.style.padding = "0 12px");
      c.addEventListener("mouseover", function () {
        this.style.opacity = 0.8;
        if (f)
          return (
            (this.style.color = "transparent"),
            (this.style.backgroundPositionY = "50%")
          );
      });
      return c.addEventListener("mouseout", function () {
        this.style.opacity = 1;
        if (f)
          return (
            (this.style.color = "white"),
            (this.style.backgroundPositionY = "-100%")
          );
      });
    };
    s = function (a, b) {
      var d, c, e, f;
      if ((c = (e = n.querySelectorAll("." + a)) && e.length)) {
        d = 0;
        for (f = []; d < c; ) {
          try {
            b.call(this, e[d]);
          } catch (h) {}
          f.push(d++);
        }
        return f;
      }
    };
    A = function () {
      return s(h.validClass, function (a) {
        if (E(a)) return J(a);
      });
    };
    z = function () {
      return s(p.validClass, function (a) {
        if (D(a)) return I(a);
      });
    };
    B = function () {
      return s(q.validClass, function (a) {
        if (F(a)) return K(a);
      });
    };
    G = function (a, b) {
      for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
      return a;
    };
    C = function () {
      var a;
      a = k("style");
      a.type = "text/css";
      a.textContent =
        '@font-face {\n  font-family: \'SQMarket-regular\';\n  src:url("../fonts/sqmarket-regular.eot");\n  src:url("../fonts/sqmarket-regular.eot?#iefix") format("eot"),\n  url("../fonts/sqmarket-regular.woff") format("woff"),\n  url("../fonts/sqmarket-regular.ttf") format("truetype");\n  font-weight:400;font-style:normal;\n}';
      return n.querySelectorAll("head")[0].appendChild(a);
    };
    x = function (a) {
      var b, d, c, e;
      d = (c = n.querySelectorAll(".sq-embed-menu-iframe")) && c.length;
      b = 0;
      for (e = []; b < d; ) (c[b].style.height = "" + a + "px"), e.push(b++);
      return e;
    };
    w = function (a) {
      if (/squareup\.com/.test(a.origin)) {
        if ("redirect" === a.data.actionType)
          return (window.location =
            "https://squareup.com" + a.data.redirectUrl);
        if ("adjustHeight" === a.data.actionType)
          return x(a.data.adjustedHeight);
      }
    };
    r = function () {
      C();
      A();
      z();
      return B();
    };
    h = {
      validClass: "sq-embed-item",
      validHref: /^(https:\/\/.*\/market)\/(.*)\/(.*)$/,
      outerStyles: {
        "-moz-box-sizing": "border-box",
        "box-sizing": "border-box",
        "font-size": "14px",
        "font-family": "'Helvetica Neue',sans-serif",
        "max-height": "646px",
        "min-width": "200px",
        overflow: "hidden",
      },
      innerStyles: {
        "-moz-box-sizing": "border-box",
        "box-sizing": "border-box",
        height: "0",
        overflow: "hidden",
        "padding-bottom": "100%",
        "padding-top": "88px",
        position: "relative",
      },
      iframeStyles: {
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
      },
      iframeAttrs: {
        frameborder: "0",
        marginwidth: "0",
        marginheight: "0",
        scrolling: "no",
      },
    };
    p = {
      validClass: "sq-embed-button",
      validHref: /^(https:\/\/mkt.com)\/(.*)$/,
      linkStyles: {
        "background-size": "22px auto",
        "font-family": "'SQMarket-regular', 'Helvetica Neue',sans-serif",
        "text-decoration": "none",
        height: "46px",
        position: "relative",
        "background-color": "#22a301",
        "background-repeat": "no-repeat",
        "background-position": "12px 50%",
        top: "0",
        left: "0",
        width: "260px",
        "-webkit-box-sizing": "border-box",
        "-moz-box-sizing": "border-box",
        display: "block",
        color: "white",
        padding: "0 46px",
        overflow: "hidden",
        "text-overflow": "ellipsis",
        "min-width": "46px",
        "font-size": "15px",
        "border-radius": "5px",
        "text-align": "center",
        "box-sizing": "border-box",
        "-webkit-transition": "opacity .3s ease",
        "white-space": "nowrap",
        transition: "opacity .3s ease",
      },
    };
    q = {
      validClass: "sq-embed-menu",
      validHref: /^(https:\/\/mkt.com)\/(.*)$/,
      outerStyles: {
        "-moz-box-sizing": "border-box",
        "box-sizing": "border-box",
        "font-size": "14px",
        "font-family": "'Helvetica Neue',sans-serif",
        "min-width": "200px",
      },
      innerStyles: {
        "-moz-box-sizing": "border-box",
        "box-sizing": "border-box",
      },
      iframeStyles: { width: "100%" },
      iframeAttrs: {
        class: "sq-embed-menu-iframe",
        frameborder: "0",
        marginwidth: "0",
        marginheight: "0",
        scrolling: "no",
      },
    };
    f.addEventListener
      ? (f.addEventListener("load", r, !1),
        f.addEventListener("message", w, !1))
      : f.attachEvent && f.attachEvent("onload", r);
    f.sq = f.sq || {};
    return (f.sq.embed = r);
  })(window, document);
}.call(this));
