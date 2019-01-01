/*!
 *
 *   hello-bar v0.8.0
 *   https://github.com/AnandChowdhary/hello-bar
 *
 *   Copyright (c) Anand Chowdhary (https://github.com/AnandChowdhary)
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!(function(t, e) {
  "object" === typeof exports && "object" === typeof module
    ? (module.exports = e())
    : "function" === typeof define && define.amd
    ? define("HelloBar", [], e)
    : "object" === typeof exports
    ? (exports.HelloBar = e())
    : (t.HelloBar = e());
})(window, function() {
  return (function(t) {
    var e = {};
    function __webpack_require__(n) {
      if (e[n]) return e[n].exports;
      var r = (e[n] = { i: n, l: !1, exports: {} });
      return (
        t[n].call(r.exports, r, r.exports, __webpack_require__),
        (r.l = !0),
        r.exports
      );
    }
    return (
      (__webpack_require__.m = t),
      (__webpack_require__.c = e),
      (__webpack_require__.d = function(t, e, n) {
        __webpack_require__.o(t, e) ||
          Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (__webpack_require__.r = function(t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (__webpack_require__.t = function(t, e) {
        if ((1 & e && (t = __webpack_require__(t)), 8 & e)) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (__webpack_require__.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var r in t)
            __webpack_require__.d(
              n,
              r,
              function(e) {
                return t[e];
              }.bind(null, r)
            );
        return n;
      }),
      (__webpack_require__.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return __webpack_require__.d(e, "a", e), e;
      }),
      (__webpack_require__.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (__webpack_require__.p = ""),
      __webpack_require__((__webpack_require__.s = 1))
    );
  })([
    function(t, e) {
      t.exports = function(t, e, r) {
        var i = /#/.test(t),
          o = void 0 !== e && void 0 !== r,
          a = Array.isArray(t),
          s = "#ffffff",
          c = 0;
        if (i)
          (c = n(t.substr(1, 2))),
            (e = n(t.substr(3, 2))),
            (r = n(t.substr(5, 2)));
        else if (o) (c = parseInt(t)), (e = parseInt(e)), (r = parseInt(r));
        else {
          if (!a) return s;
          (c = parseInt(t[0])), (e = parseInt(t[1])), (r = parseInt(t[2]));
        }
        return (
          Math.sqrt(c * c * 0.241 + e * e * 0.691 + r * r * 0.068) > 130 &&
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
      t.exports = n(3);
    },
    function(t, e, n) {},
    function(t, e, n) {
      "use strict";
      n.r(e);
      n(2);
      var r = n(0),
        i = n.n(r),
        o = [
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
      function _typeof(t) {
        return (_typeof =
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
      function _defineProperties(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var a = (function() {
        function App(t) {
          var e = this;
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, App),
            (t = t || {}),
            (this.settings = t),
            ["i18n", "targeting"].forEach(function(t) {
              e.settings[t] = e.settings[t] || {};
            }),
            (this.settings.targeting.location =
              this.settings.targeting.location || {}),
            (this.settings.targeting.params =
              this.settings.targeting.params || {}),
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
            this.settings.fixed &&
              this.bar.classList.add("hello-bar--is-fixed"),
            "bottom" === this.settings.position
              ? (this.bar.classList.add("hello-bar--is-bottom"),
                (this.marginProp = "marginBottom"))
              : (this.marginProp = "marginTop"),
            this.confirmShow()
              .then(function() {
                e.insertBar(),
                  e.functionBar(),
                  e.calculateHeight(),
                  e.colorizeBar(),
                  e.settings.disableBodyMove || e.moveElements(document.body),
                  e.moveElements(e.settings.move),
                  e.showBar();
              })
              .catch(function() {});
        }
        var t, e, n;
        return (
          (t = App),
          (e = [
            {
              key: "confirmShow",
              value: function() {
                var t = this;
                return new Promise(function(e, n) {
                  var r = function() {
                    return t.settings.targeting.once &&
                      sessionStorage.getItem("hello-bar--session-showed")
                      ? n()
                      : t.settings.targeting.onceUser &&
                        localStorage.getItem("hello-bar--user-showed")
                      ? n()
                      : (t.settings.targeting.params &&
                          Object.keys(t.settings.targeting.params).forEach(
                            function(e) {
                              var r = (function(t) {
                                var e = window.location.href;
                                t = t.replace(/[[\]]/g, "\\$&");
                                var n = new RegExp(
                                  "[?&]" + t + "(=([^&#]*)|&|#|$)"
                                ).exec(e);
                                if (n && n[2])
                                  return decodeURIComponent(
                                    n[2].replace(/\+/g, " ")
                                  );
                              })(e);
                              if (r && r !== t.settings.targeting.params[e])
                                return n();
                            }
                          ),
                        void e());
                  };
                  if (t.settings.hide) return n();
                  t.settings.targeting.location
                    ? t.getIpInfo().then(function(e) {
                        if (
                          t.settings.targeting.location.eu &&
                          !o.includes(e.country)
                        )
                          return n();
                        ["country", "city", "ip", "postal", "region"].forEach(
                          function(r) {
                            if (
                              t.settings.targeting.location[r] &&
                              t.settings.targeting.location[r].constructor ===
                                Array &&
                              !t.settings.targeting.location[r].includes(e[r])
                            )
                              return n();
                          }
                        ),
                          r();
                      })
                    : r();
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
                    var r = parseInt(e[n].style[this.marginProp]);
                    (e[n].style[this.marginProp] = "".concat(
                      r - this.height,
                      "px"
                    )),
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
                    document.querySelector(
                      ".hello-bar .hello-bar-text--after"
                    ) &&
                      (document.querySelector(
                        ".hello-bar .hello-bar-text--after"
                      ).style.background = "linear-gradient(to right, rgba(0, 0, 0, 0), ".concat(
                        t,
                        ")"
                      )),
                    (this.bar.style.color = this.settings.textColor || i()(t)),
                    (this.bar.style.textAlign =
                      this.settings.align || "center"),
                    document.querySelector(
                      ".hello-bar p.hello-bar-text .cta"
                    ) &&
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
                      ).style.background = this.settings.textColor || i()(t)));
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
                    for (var r = 0; r < t.length; r++) this.moveElements(t[r]);
                  else if (
                    "object" === _typeof(t) &&
                    "object" === _typeof(t.classList) &&
                    "function" === typeof t.classList.add &&
                    !t.classList.contains("hello-bar--has-moved")
                  ) {
                    var i = t.currentStyle || window.getComputedStyle(t);
                    "object" === _typeof(i) && i[this.marginProp]
                      ? (t.style[this.marginProp] = "".concat(
                          parseInt(i[this.marginProp]) + this.height,
                          "px"
                        ))
                      : (t.style[this.marginProp] = "".concat(
                          this.height,
                          "px"
                        )),
                      t.classList.add("hello-bar--has-moved");
                  }
              }
            },
            {
              key: "getIpInfo",
              value: function() {
                var t = this;
                return new Promise(function(e, n) {
                  var r, i;
                  ((r = t.settings.ipEndpoint || "https://ipinfo.io/json"),
                  new Promise(function(t, e) {
                    var n = "hello_bar_cache_"
                      .concat(r)
                      .concat(i ? "_" + JSON.stringify(i) : "");
                    if (localStorage.getItem(n))
                      try {
                        var o = JSON.parse(localStorage.getItem(n));
                        if (o.expires_at > new Date().getTime())
                          return t(o.cache_value);
                      } catch (a) {}
                    fetch(r, i)
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
          ]) && _defineProperties(t.prototype, e),
          n && _defineProperties(t, n),
          App
        );
      })();
      e.default = a;
    }
  ]);
});
//# sourceMappingURL=index.js.map
