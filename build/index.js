/*!
 *
 *   hello-bar v0.0.1
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
      var n = (e[r] = { i: r, l: !1, exports: {} });
      return (
        t[r].call(n.exports, n, n.exports, __webpack_require__),
        (n.l = !0),
        n.exports
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
          for (var n in t)
            __webpack_require__.d(
              r,
              n,
              function(e) {
                return t[e];
              }.bind(null, n)
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
      t.exports = function(t, e, n) {
        var i = /#/.test(t),
          o = void 0 !== e && void 0 !== n,
          s = Array.isArray(t),
          a = "#ffffff",
          u = 0;
        if (i)
          (u = r(t.substr(1, 2))),
            (e = r(t.substr(3, 2))),
            (n = r(t.substr(5, 2)));
        else if (o) (u = parseInt(t)), (e = parseInt(e)), (n = parseInt(n));
        else {
          if (!s) return a;
          (u = parseInt(t[0])), (e = parseInt(t[1])), (n = parseInt(t[2]));
        }
        return (
          Math.sqrt(u * u * 0.241 + e * e * 0.691 + n * n * 0.068) > 130 &&
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
      var n = r(0),
        i = r.n(n);
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
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var o = (function() {
        function App(t) {
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, App),
            (this.settings = t || {}),
            (this.bar = document.createElement("div")),
            (this.bar.innerHTML = "\n      <p>".concat(
              this.settings.text,
              "</p>\n    "
            )),
            this.bar.classList.add("hello-bar"),
            this.settings.fixed &&
              this.bar.classList.add("hello-bar--is-fixed"),
            this.insertBar(),
            this.colorizeBar(),
            this.calculateHeight(),
            this.moveElements(document.body),
            this.moveElements(this.settings.move);
        }
        var t, e, r;
        return (
          (t = App),
          (e = [
            {
              key: "colorizeBar",
              value: function() {
                var t = this.settings.background || "#eeeeee";
                (this.bar.style.backgroundColor = t),
                  this.settings.textColor
                    ? (this.bar.style.color = this.settings.textColor)
                    : (this.bar.style.color = i()(t));
              }
            },
            {
              key: "calculateHeight",
              value: function() {
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
                    for (var n = 0; n < t.length; n++) this.moveElements(t[n]);
                  else if (
                    "object" === _typeof(t) &&
                    "object" === _typeof(t.classList) &&
                    "function" === typeof t.classList.add
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
