/*!
 *
 *   hello-bar v0.9.0
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
    function __webpack_require__(i) {
      if (e[i]) return e[i].exports;
      var n = (e[i] = { i: i, l: !1, exports: {} });
      return (
        t[i].call(n.exports, n, n.exports, __webpack_require__),
        (n.l = !0),
        n.exports
      );
    }
    return (
      (__webpack_require__.m = t),
      (__webpack_require__.c = e),
      (__webpack_require__.d = function(t, e, i) {
        __webpack_require__.o(t, e) ||
          Object.defineProperty(t, e, { enumerable: !0, get: i });
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
        var i = Object.create(null);
        if (
          (__webpack_require__.r(i),
          Object.defineProperty(i, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var n in t)
            __webpack_require__.d(
              i,
              n,
              function(e) {
                return t[e];
              }.bind(null, n)
            );
        return i;
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
      t.exports = function(t, e, n) {
        var r = /#/.test(t),
          o = void 0 !== e && void 0 !== n,
          s = Array.isArray(t),
          a = "#ffffff",
          c = 0;
        if (r)
          (c = i(t.substr(1, 2))),
            (e = i(t.substr(3, 2))),
            (n = i(t.substr(5, 2)));
        else if (o) (c = parseInt(t)), (e = parseInt(e)), (n = parseInt(n));
        else {
          if (!s) return a;
          (c = parseInt(t[0])), (e = parseInt(t[1])), (n = parseInt(t[2]));
        }
        return (
          Math.sqrt(c * c * 0.241 + e * e * 0.691 + n * n * 0.068) > 130 &&
            (a = "#000000"),
          a
        );
      };
      var i = function(t) {
        var e = t.replace(/[^a-f0-9]/gi, "");
        return parseInt(e, 16);
      };
    },
    function(t, e, i) {
      t.exports = i(3);
    },
    function(t, e, i) {},
    function(t, e, i) {
      "use strict";
      i.r(e);
      i(2);
      var n = i(0),
        r = i.n(n),
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
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var s = (function() {
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
            "object" === _typeof(this.settings.text)
              ? (this.text = this.settings.text[
                  Math.floor(Math.random() * this.settings.text.length)
                ])
              : (this.text = this.settings.text),
            (this.bar.innerHTML = '<div class="hello-bar-container"><p class="hello-bar-text">'.concat(
              this.text,
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
            (this.events = {}),
            this.confirmShow()
              .then(function() {
                e.$emit("before-created"),
                  e.insertBar(),
                  e.functionBar(),
                  e.calculateHeight(),
                  e.colorizeBar(),
                  e.settings.disableBodyMove || e.moveElements(document.body),
                  e.moveElements(e.settings.move),
                  e.showBar(),
                  e.$emit("after-created");
              })
              .catch(function() {
                e.$emit("not-created");
              });
        }
        var t, e, i;
        return (
          (t = App),
          (e = [
            {
              key: "on",
              value: function(t, e) {
                this.events[t] = e;
              }
            },
            {
              key: "$emit",
              value: function(t, e) {
                this.events[t] &&
                  "function" === typeof this.events[t] &&
                  this.events[t](e);
              }
            },
            {
              key: "confirmShow",
              value: function() {
                var t = this;
                return new Promise(function(e, i) {
                  var n = function() {
                    return t.settings.targeting.once &&
                      sessionStorage.getItem("hello-bar--session-showed")
                      ? i()
                      : t.settings.targeting.onceUser &&
                        localStorage.getItem("hello-bar--user-showed")
                      ? i()
                      : (t.settings.targeting.params &&
                          Object.keys(t.settings.targeting.params).forEach(
                            function(e) {
                              var n = (function(t) {
                                var e = window.location.href;
                                t = t.replace(/[[\]]/g, "\\$&");
                                var i = new RegExp(
                                  "[?&]" + t + "(=([^&#]*)|&|#|$)"
                                ).exec(e);
                                if (i && i[2])
                                  return decodeURIComponent(
                                    i[2].replace(/\+/g, " ")
                                  );
                              })(e);
                              if (n && n !== t.settings.targeting.params[e])
                                return i();
                            }
                          ),
                        void e());
                  };
                  if (t.settings.hide) return i();
                  Object.keys(t.settings.targeting.location).length
                    ? t.getIpInfo().then(function(e) {
                        if (
                          t.settings.targeting.location.eu &&
                          !o.includes(e.country)
                        )
                          return i();
                        ["country", "city", "ip", "postal", "region"].forEach(
                          function(n) {
                            if (
                              t.settings.targeting.location[n] &&
                              t.settings.targeting.location[n].constructor ===
                                Array &&
                              !t.settings.targeting.location[n].includes(e[n])
                            )
                              return i();
                          }
                        ),
                          n();
                      })
                    : n();
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
                  }, this.settings.delay || 1),
                  this.$emit("show-bar", this.bar));
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
                      i = 0;
                    i < e.length;
                    i++
                  ) {
                    var n = parseInt(e[i].style[this.marginProp]);
                    (e[i].style[this.marginProp] = "".concat(
                      n - this.height,
                      "px"
                    )),
                      e[i].classList.remove("hello-bar--has-moved");
                  }
                  setTimeout(function() {
                    t.bar.parentNode.removeChild(t.bar);
                  }, (this.settings.duration || 500) + 1),
                    this.$emit("hide-bar", this.bar);
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
                      t.$emit("close-bar", t.bar), t.hideBar();
                    });
                var e = {
                    mouseenter: "mouse-enter",
                    mouseleave: "mouse-leave",
                    click: "mouse-click",
                    mouseup: "mouse-up",
                    mousedown: "mouse-down"
                  },
                  i = document.querySelector(".hello-bar .cta");
                Object.keys(e).forEach(function(n) {
                  t.bar.addEventListener(n, function() {
                    return t.$emit(e[n], t.bar);
                  }),
                    i &&
                      i.addEventListener(n, function() {
                        return t.$emit(e[n], i);
                      });
                });
              }
            },
            {
              key: "colorizeBar",
              value: function() {
                if (document.querySelector("#".concat(this.id))) {
                  var t = this.settings.background || "#eeeeee",
                    e = this.settings.textColor || r()(t);
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
                    (this.bar.style.color = e),
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
                      ).style.background = e),
                      this.$emit("color-bar", {
                        backgroundColor: t,
                        textColor: e
                      }));
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
                  (this.height = parseInt(this.height)),
                  this.$emit("calculate-height", this.height));
              }
            },
            {
              key: "insertBar",
              value: function() {
                var t = document.querySelector("body > *");
                t
                  ? document.body.insertBefore(this.bar, t)
                  : document.body.appendChild(this.bar),
                  this.$emit("created", this.bar);
              }
            },
            {
              key: "moveElements",
              value: function(t) {
                if (t)
                  if ("string" === typeof t)
                    for (
                      var e = document.querySelectorAll(t), i = 0;
                      i < e.length;
                      i++
                    )
                      this.moveElements(e[i]);
                  else if (t.constructor === Array && t.length)
                    for (var n = 0; n < t.length; n++) this.moveElements(t[n]);
                  else if (
                    "object" === _typeof(t) &&
                    "object" === _typeof(t.classList) &&
                    "function" === typeof t.classList.add &&
                    !t.classList.contains("hello-bar--has-moved")
                  ) {
                    var r = t.currentStyle || window.getComputedStyle(t);
                    "object" === _typeof(r) && r[this.marginProp]
                      ? (t.style[this.marginProp] = "".concat(
                          parseInt(r[this.marginProp]) + this.height,
                          "px"
                        ))
                      : (t.style[this.marginProp] = "".concat(
                          this.height,
                          "px"
                        )),
                      this.$emit("move-element", t),
                      t.classList.add("hello-bar--has-moved");
                  }
              }
            },
            {
              key: "getIpInfo",
              value: function() {
                var t = this;
                return (
                  this.$emit("start-ip-info"),
                  new Promise(function(e, i) {
                    var n, r;
                    ((n = t.settings.ipEndpoint || "https://ipinfo.io/json"),
                    new Promise(function(t, e) {
                      var i = "hello_bar_cache_"
                        .concat(n)
                        .concat(r ? "_" + JSON.stringify(r) : "");
                      if (localStorage.getItem(i))
                        try {
                          var o = JSON.parse(localStorage.getItem(i));
                          if (o.expires_at > new Date().getTime())
                            return t(o.cache_value);
                        } catch (s) {}
                      fetch(n, r)
                        .then(function(t) {
                          return t.json();
                        })
                        .then(function(e) {
                          localStorage.setItem(
                            i,
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
                      .then(function(i) {
                        t.$emit("fetch-ip-info", i), e(i);
                      })
                      .catch(function(e) {
                        t.$emit("error-ip-info", e), i(e);
                      });
                  })
                );
              }
            }
          ]) && _defineProperties(t.prototype, e),
          i && _defineProperties(t, i),
          App
        );
      })();
      e.default = s;
    }
  ]);
});
//# sourceMappingURL=index.js.map
