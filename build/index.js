/*!
 *
 *   hello-bar v0.1.0
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
    ? define("MyLibrary", [], e)
    : "object" === typeof exports
    ? (exports.MyLibrary = e())
    : (t.MyLibrary = e());
})(window, function() {
  return (function(t) {
    var e = {};
    function __webpack_require__(r) {
      if (e[r]) return e[r].exports;
      var i = (e[r] = { i: r, l: !1, exports: {} });
      return (
        t[r].call(i.exports, i, i.exports, __webpack_require__),
        (i.l = !0),
        i.exports
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
          for (var i in t)
            __webpack_require__.d(
              r,
              i,
              function(e) {
                return t[e];
              }.bind(null, i)
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
      t.exports = function(t, e, i) {
        var n = /#/.test(t),
          o = void 0 !== e && void 0 !== i,
          a = Array.isArray(t),
          s = "#ffffff",
          c = 0;
        if (n)
          (c = r(t.substr(1, 2))),
            (e = r(t.substr(3, 2))),
            (i = r(t.substr(5, 2)));
        else if (o) (c = parseInt(t)), (e = parseInt(e)), (i = parseInt(i));
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
      var i = r(0),
        n = r.n(i);
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
          var i = e[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var o = (function() {
        function App(t) {
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, App),
            (this.settings = t || {}),
            (this.settings.i18n = t.i18n || {}),
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
            this.insertBar(),
            this.functionBar(),
            this.calculateHeight(),
            this.colorizeBar(),
            this.moveElements(document.body),
            this.moveElements(this.settings.move),
            this.showBar();
        }
        var t, e, r;
        return (
          (t = App),
          (e = [
            {
              key: "showBar",
              value: function() {
                var t = this;
                (this.bar.style.transition = this.settings.duration || "0.5s"),
                  setTimeout(function() {
                    t.bar.classList.add("hello-bar--is-visible");
                  }, this.settings.delay || 1);
              }
            },
            {
              key: "hideBar",
              value: function() {
                this.bar.classList.remove("hello-bar--is-visible");
                for (
                  var t = document.querySelectorAll(".hello-bar--has-moved"),
                    e = 0;
                  e < t.length;
                  e++
                ) {
                  var r = parseInt(t[e].style.marginTop);
                  t[e].style.marginTop = "".concat(r - this.height, "px");
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
                var t = this.settings.background || "#eeeeee";
                (this.bar.style.backgroundColor = t),
                  document.querySelector(".hello-bar .hello-bar-text--after") &&
                    (document.querySelector(
                      ".hello-bar .hello-bar-text--after"
                    ).style.background = "linear-gradient(to right, rgba(0, 0, 0, 0), ".concat(
                      t,
                      ")"
                    )),
                  (this.bar.style.color = this.settings.textColor || n()(t)),
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
                    ).style.background = this.settings.textColor || n()(t)));
              }
            },
            {
              key: "calculateHeight",
              value: function() {
                this.settings.size &&
                  this.bar.classList.add(
                    "hello-bar--size-".concat(this.settings.size)
                  ),
                  "function" === typeof this.bar.getBoundingClientRect &&
                  this.bar.getBoundingClientRect().height
                    ? (this.height = this.bar.getBoundingClientRect().height)
                    : (this.height = this.bar.offsetHeight),
                  (this.height = parseInt(this.height));
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
                    for (var i = 0; i < t.length; i++) this.moveElements(t[i]);
                  else if (
                    "object" === _typeof(t) &&
                    "object" === _typeof(t.classList) &&
                    "function" === typeof t.classList.add
                  ) {
                    var n = t.currentStyle || window.getComputedStyle(t);
                    "object" === _typeof(n) && n.marginTop
                      ? (t.style.marginTop = "".concat(
                          parseInt(n.marginTop) + this.height,
                          "px"
                        ))
                      : (t.style.marginTop = "".concat(this.height, "px")),
                      t.classList.add("hello-bar--has-moved");
                  }
              }
            }
          ]) && _defineProperties(t.prototype, e),
          r && _defineProperties(t, r),
          App
        );
      })();
      e.default = o;
    }
  ]);
});
//# sourceMappingURL=index.js.map
