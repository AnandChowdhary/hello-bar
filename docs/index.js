!(function(t) {
  var e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var o = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (n.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            i,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
          );
      return i;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function(t, e) {
    t.exports = function(t, e, i) {
      var o = /#/.test(t),
        r = void 0 !== e && void 0 !== i,
        a = Array.isArray(t),
        s = "#ffffff",
        c = 0;
      if (o)
        (c = n(t.substr(1, 2))),
          (e = n(t.substr(3, 2))),
          (i = n(t.substr(5, 2)));
      else if (r) (c = parseInt(t)), (e = parseInt(e)), (i = parseInt(i));
      else {
        if (!a) return s;
        (c = parseInt(t[0])), (e = parseInt(t[1])), (i = parseInt(t[2]));
      }
      return (
        Math.sqrt(c * c * 0.241 + e * e * 0.691 + i * i * 0.068) > 130 &&
          (s = "#000000"),
        s
      );
    };
    var n = function(t) {
      var e = t.replace(/[^a-f0-9]/gi, "");
      return parseInt(e, 16);
    };
  },
  function(t, e, n) {
    t.exports = n(4);
  },
  function(t, e, n) {},
  function(t, e, n) {},
  function(t, e, n) {
    "use strict";
    n.r(e);
    n(2), n(3);
    var i = n(0),
      o = n.n(i),
      r = [
        "BE",
        "BG",
        "CZ",
        "DK",
        "DE",
        "EE",
        "IE",
        "EL",
        "ES",
        "FR",
        "HR",
        "IT",
        "CY",
        "LV",
        "LT",
        "LU",
        "HU",
        "MT",
        "NL",
        "AT",
        "PL",
        "PT",
        "RO",
        "SI",
        "SK",
        "FI",
        "SE",
        "UK"
      ];
    function a(t) {
      return (a =
        "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                "function" === typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function s(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    var c = (function() {
      function t(e) {
        var n = this;
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (e = e || {}),
          (this.settings = e),
          ["i18n", "targeting"].forEach(function(t) {
            n.settings[t] = n.settings[t] || {};
          }),
          (this.settings.targeting.location =
            this.settings.targeting.location || {}),
          (this.id =
            "hoverBar-" +
            Math.random()
              .toString(36)
              .substr(2)),
          (this.bar = document.createElement("div")),
          this.bar.setAttribute("id", this.id),
          (this.bar.innerHTML = '<div class="hello-bar-container"><p class="hello-bar-text">'.concat(
            this.settings.text,
            '</p></div><div class="hello-bar-text--after"></div>'
          )),
          this.settings.hideClose ||
            (this.bar.innerHTML += '<button class="hello-bar-button" aria-controls="'
              .concat(this.id, '" aria-expanded="true" aria-label="')
              .concat(
                this.settings.i18n.hideText || "Hide announcement",
                '">\n        <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">\n            <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>\n        </svg>\n      </button>'
              )),
          this.bar.classList.add("hello-bar"),
          this.settings.fixed && this.bar.classList.add("hello-bar--is-fixed"),
          this.confirmShow()
            .then(function() {
              n.insertBar(),
                n.functionBar(),
                n.calculateHeight(),
                n.colorizeBar(),
                n.settings.disableBodyMove || n.moveElements(document.body),
                n.moveElements(n.settings.move),
                n.showBar();
            })
            .catch(function() {});
      }
      var e, n, i;
      return (
        (e = t),
        (n = [
          {
            key: "confirmShow",
            value: function() {
              var t = this;
              return new Promise(function(e, n) {
                if (t.settings.hide) return n();
                if (t.settings.targeting.location)
                  t.getIpInfo().then(function(i) {
                    if (
                      t.settings.targeting.location.eu &&
                      !r.includes(i.country)
                    )
                      return n();
                    ["country", "city", "ip", "postal", "region"].forEach(
                      function(e) {
                        if (
                          t.settings.targeting.location[e] &&
                          t.settings.targeting.location[e].constructor ===
                            Array &&
                          !t.settings.targeting.location[e].includes(i[e])
                        )
                          return n();
                      }
                    ),
                      e();
                  });
                else {
                  if (t.settings.targeting.once) {
                    if (sessionStorage.getItem("hello-bar--session-showed"))
                      return n();
                  } else if (
                    t.settings.targeting.onceUser &&
                    localStorage.getItem("hello-bar--user-showed")
                  )
                    return n();
                  e();
                }
              });
            }
          },
          {
            key: "showBar",
            value: function() {
              var t = this;
              document.querySelector("#".concat(this.id)) &&
                ((this.bar.style.transition =
                  (this.settings.duration || 500) + "ms"),
                setTimeout(function() {
                  t.bar.classList.add("hello-bar--is-visible");
                }, this.settings.delay || 1));
            }
          },
          {
            key: "hideBar",
            value: function() {
              var t = this;
              if (document.querySelector("#".concat(this.id))) {
                this.bar.classList.remove("hello-bar--is-visible"),
                  sessionStorage.setItem("hello-bar--session-showed", !0),
                  localStorage.setItem("hello-bar--user-showed", !0);
                for (
                  var e = document.querySelectorAll(".hello-bar--has-moved"),
                    n = 0;
                  n < e.length;
                  n++
                ) {
                  var i = parseInt(e[n].style.marginTop);
                  (e[n].style.marginTop = "".concat(i - this.height, "px")),
                    e[n].classList.remove("hello-bar--has-moved");
                }
                setTimeout(function() {
                  t.bar.parentNode.removeChild(t.bar);
                }, (this.settings.duration || 500) + 1);
              }
            }
          },
          {
            key: "functionBar",
            value: function() {
              var t = this;
              document.querySelector(".hello-bar button.hello-bar-button") &&
                document
                  .querySelector(".hello-bar button.hello-bar-button")
                  .addEventListener("click", function() {
                    return t.hideBar();
                  });
            }
          },
          {
            key: "colorizeBar",
            value: function() {
              if (document.querySelector("#".concat(this.id))) {
                var t = this.settings.background || "#eeeeee";
                (this.bar.style.backgroundColor = t),
                  document.querySelector(".hello-bar .hello-bar-text--after") &&
                    (document.querySelector(
                      ".hello-bar .hello-bar-text--after"
                    ).style.background = "linear-gradient(to right, rgba(0, 0, 0, 0), ".concat(
                      t,
                      ")"
                    )),
                  (this.bar.style.color = this.settings.textColor || o()(t)),
                  (this.bar.style.textAlign = this.settings.align || "center"),
                  document.querySelector(".hello-bar p.hello-bar-text .cta") &&
                    ((document.querySelector(
                      ".hello-bar p.hello-bar-text .cta"
                    ).style.height = "".concat(this.height, "px")),
                    (document.querySelector(
                      ".hello-bar p.hello-bar-text .cta"
                    ).style.lineHeight = "".concat(this.height, "px")),
                    (document.querySelector(
                      ".hello-bar p.hello-bar-text .cta"
                    ).style.color = this.settings.background || "#eeeeee"),
                    (document.querySelector(
                      ".hello-bar p.hello-bar-text .cta"
                    ).style.background = this.settings.textColor || o()(t)));
              }
            }
          },
          {
            key: "calculateHeight",
            value: function() {
              document.querySelector("#".concat(this.id)) &&
                (this.settings.size &&
                  this.bar.classList.add(
                    "hello-bar--size-".concat(this.settings.size)
                  ),
                "function" === typeof this.bar.getBoundingClientRect &&
                this.bar.getBoundingClientRect().height
                  ? (this.height = this.bar.getBoundingClientRect().height)
                  : (this.height = this.bar.offsetHeight),
                (this.height = parseInt(this.height)));
            }
          },
          {
            key: "insertBar",
            value: function() {
              var t = document.querySelector("body > *");
              t
                ? document.body.insertBefore(this.bar, t)
                : document.body.appendChild(this.bar);
            }
          },
          {
            key: "moveElements",
            value: function(t) {
              if (t)
                if ("string" === typeof t)
                  for (
                    var e = document.querySelectorAll(t), n = 0;
                    n < e.length;
                    n++
                  )
                    this.moveElements(e[n]);
                else if (t.constructor === Array && t.length)
                  for (var i = 0; i < t.length; i++) this.moveElements(t[i]);
                else if (
                  "object" === a(t) &&
                  "object" === a(t.classList) &&
                  "function" === typeof t.classList.add &&
                  !t.classList.contains("hello-bar--has-moved")
                ) {
                  var o = t.currentStyle || window.getComputedStyle(t);
                  "object" === a(o) && o.marginTop
                    ? (t.style.marginTop = "".concat(
                        parseInt(o.marginTop) + this.height,
                        "px"
                      ))
                    : (t.style.marginTop = "".concat(this.height, "px")),
                    t.classList.add("hello-bar--has-moved");
                }
            }
          },
          {
            key: "getIpInfo",
            value: function() {
              var t = this;
              return new Promise(function(e, n) {
                var i, o;
                ((i = t.settings.ipEndpoint || "https://ipinfo.io/json"),
                new Promise(function(t, e) {
                  var n = "hello_bar_cache_"
                    .concat(i)
                    .concat(o ? "_" + JSON.stringify(o) : "");
                  if (localStorage.getItem(n))
                    try {
                      var r = JSON.parse(localStorage.getItem(n));
                      if (r.expires_at > new Date().getTime())
                        return t(r.cache_value);
                    } catch (a) {}
                  fetch(i, o)
                    .then(function(t) {
                      return t.json();
                    })
                    .then(function(e) {
                      localStorage.setItem(
                        n,
                        JSON.stringify({
                          created_at: new Date().getTime(),
                          expires_at: new Date().getTime() + 6048e5,
                          cache_value: e
                        })
                      ),
                        t(e);
                    })
                    .catch(function(t) {
                      return e(t);
                    });
                }))
                  .then(function(t) {
                    return e(t);
                  })
                  .catch(function(t) {
                    return n(t);
                  });
              });
            }
          }
        ]) && s(e.prototype, n),
        i && s(e, i),
        t
      );
    })();
    var l =
        "Check out this repository on GitHub now! <a class='cta wiggle' href='https://github.com/AnandChowdhary/hello-bar'>\u2b50 Star now</a>",
      u =
        "\ud83c\udf6a This website uses cookies to make your experience better. <a class='cta' href='#'>Cookie policy</a>";
    new function t() {
      var e = this;
      !(function(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        (this.libInstance = new c({
          text: l,
          background: "#5352ed",
          size: "large",
          delay: 500
        })),
        console.log("Demo loaded!", this.libInstance);
      for (
        var n = document.querySelectorAll("input[type='radio']"),
          i = function(t) {
            n[t].addEventListener("change", function() {
              switch ((e.libInstance.hideBar(), n[t].value)) {
                case "cookie-law-1":
                  setTimeout(function() {
                    e.libInstance = new c({ text: u });
                  }, 600);
                  break;
                case "cookie-law-2":
                  setTimeout(function() {
                    e.libInstance = new c({
                      text: u,
                      targeting: { location: { eu: !0 } }
                    });
                  }, 600);
                  break;
                default:
                  setTimeout(function() {
                    e.libInstance = new c({
                      text: l,
                      background: "#5352ed",
                      size: "large"
                    });
                  }, 600);
              }
            });
          },
          o = 0;
        o < n.length;
        o++
      )
        i(o);
    }();
  }
]);
//# sourceMappingURL=index.js.map
