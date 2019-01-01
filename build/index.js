/*!
 *
 *   hello-bar v0.5.0
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
    function __webpack_require__(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return (
        t[r].call(o.exports, o, o.exports, __webpack_require__),
        (o.l = !0),
        o.exports
      );
    }
    return (
      (__webpack_require__.m = t),
      (__webpack_require__.c = e),
      (__webpack_require__.d = function(t, e, r) {
        __webpack_require__.o(t, e) ||
          Object.defineProperty(t, e, { enumerable: !0, get: r });
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
        var r = Object.create(null);
        if (
          (__webpack_require__.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var o in t)
            __webpack_require__.d(
              r,
              o,
              function(e) {
                return t[e];
              }.bind(null, o)
            );
        return r;
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
      t.exports = function(t, e, o) {
        var i = /#/.test(t),
          n = void 0 !== e && void 0 !== o,
          s = Array.isArray(t),
          a = "#ffffff",
          c = 0;
        if (i)
          (c = r(t.substr(1, 2))),
            (e = r(t.substr(3, 2))),
            (o = r(t.substr(5, 2)));
        else if (n) (c = parseInt(t)), (e = parseInt(e)), (o = parseInt(o));
        else {
          if (!s) return a;
          (c = parseInt(t[0])), (e = parseInt(t[1])), (o = parseInt(t[2]));
        }
        return (
          Math.sqrt(c * c * 0.241 + e * e * 0.691 + o * o * 0.068) > 130 &&
            (a = "#000000"),
          a
        );
      };
      var r = function(t) {
        var e = t.replace(/[^a-f0-9]/gi, "");
        return parseInt(e, 16);
      };
    },
    function(t, e, r) {
      t.exports = r(3);
    },
    function(t, e, r) {},
    function(t, e, r) {
      "use strict";
      r.r(e);
      r(2);
      var o = r(0),
        i = r.n(o);
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
        for (var r = 0; r < e.length; r++) {
          var o = e[r];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var n = (function() {
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
            this.confirmShow(),
            this.show &&
              (this.insertBar(),
              this.functionBar(),
              this.calculateHeight(),
              this.colorizeBar(),
              this.settings.disableBodyMove || this.moveElements(document.body),
              this.moveElements(this.settings.move),
              this.showBar());
        }
        var t, e, r;
        return (
          (t = App),
          (e = [
            {
              key: "confirmShow",
              value: function() {
                (this.show = !this.settings.hide),
                  this.show &&
                    (this.settings.targeting.once
                      ? sessionStorage.getItem("hello-bar-session-showed") &&
                        (this.show = !1)
                      : this.settings.targeting.onceUser &&
                        localStorage.getItem("hello-bar-user-showed") &&
                        (this.show = !1));
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
                    sessionStorage.setItem("hello-bar-session-showed", !0),
                    localStorage.setItem("hello-bar-user-showed", !0);
                  for (
                    var e = document.querySelectorAll(".hello-bar--has-moved"),
                      r = 0;
                    r < e.length;
                    r++
                  ) {
                    var o = parseInt(e[r].style.marginTop);
                    (e[r].style.marginTop = "".concat(o - this.height, "px")),
                      e[r].classList.remove("hello-bar--has-moved");
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
                      var e = document.querySelectorAll(t), r = 0;
                      r < e.length;
                      r++
                    )
                      this.moveElements(e[r]);
                  else if (t.constructor === Array && t.length)
                    for (var o = 0; o < t.length; o++) this.moveElements(t[o]);
                  else if (
                    "object" === _typeof(t) &&
                    "object" === _typeof(t.classList) &&
                    "function" === typeof t.classList.add &&
                    !t.classList.contains("hello-bar--has-moved")
                  ) {
                    var i = t.currentStyle || window.getComputedStyle(t);
                    "object" === _typeof(i) && i.marginTop
                      ? (t.style.marginTop = "".concat(
                          parseInt(i.marginTop) + this.height,
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
                return new Promise(function(t, e) {
                  var r, o;
                  ((r = "https://ipinfo.io/json"),
                  new Promise(function(t, e) {
                    var i = "hello_bar_cache_"
                      .concat(r)
                      .concat(o ? "_" + JSON.stringify(o) : "");
                    if (localStorage.getItem(i))
                      try {
                        var n = JSON.parse(localStorage.getItem(i));
                        if (n.expires_at > new Date().getTime())
                          return t(n.cache_value);
                      } catch (s) {}
                    fetch(r, o)
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
                    .then(function(e) {
                      return t(e);
                    })
                    .catch(function(t) {
                      return e(t);
                    });
                });
              }
            }
          ]) && _defineProperties(t.prototype, e),
          r && _defineProperties(t, r),
          App
        );
      })();
      e.default = n;
    }
  ]);
});
//# sourceMappingURL=index.js.map
